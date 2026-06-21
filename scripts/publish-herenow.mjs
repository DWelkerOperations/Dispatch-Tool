import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const rootDir = path.resolve("dist");
const clientName = "codex/direct-api";

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".webmanifest", "application/manifest+json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".svg", "image/svg+xml"],
  [".ico", "image/x-icon"],
  [".txt", "text/plain; charset=utf-8"],
]);

async function listFiles(dir, prefix = "") {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(dir, entry.name);
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...await listFiles(absolutePath, relativePath));
    else if (entry.isFile()) files.push({ absolutePath, relativePath });
  }

  return files;
}

function contentTypeFor(filePath) {
  return contentTypes.get(path.extname(filePath).toLowerCase()) ?? "application/octet-stream";
}

async function main() {
  const files = await listFiles(rootDir);
  if (files.length === 0) throw new Error(`No files found in ${rootDir}`);

  const fileRecords = await Promise.all(files.map(async (file) => {
    const content = await fs.readFile(file.absolutePath);
    return {
      ...file,
      content,
      contentType: contentTypeFor(file.relativePath),
      size: content.byteLength,
      hash: createHash("sha256").update(content).digest("hex"),
    };
  }));

  const createResponse = await fetch("https://here.now/api/v1/publish", {
    method: "POST",
    headers: {
      "X-HereNow-Client": clientName,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      spaMode: true,
      viewer: {
        title: "Dispatch Tool Resource Guide",
        description: "PDX kitchen resource guide and dispatch planning prototype.",
      },
      files: fileRecords.map((file) => ({
        path: file.relativePath,
        size: file.size,
        contentType: file.contentType,
        hash: file.hash,
      })),
    }),
  });

  if (!createResponse.ok) {
    throw new Error(`Create failed ${createResponse.status}: ${await createResponse.text()}`);
  }

  const createData = await createResponse.json();
  const uploads = createData.upload?.uploads ?? [];
  const byPath = new Map(fileRecords.map((file) => [file.relativePath, file]));

  await Promise.all(uploads.map(async (upload) => {
    const file = byPath.get(upload.path);
    if (!file) throw new Error(`Upload requested unknown file: ${upload.path}`);
    const uploadResponse = await fetch(upload.url, {
      method: upload.method ?? "PUT",
      headers: upload.headers ?? { "Content-Type": file.contentType },
      body: file.content,
    });
    if (!uploadResponse.ok) {
      throw new Error(`Upload failed for ${upload.path} ${uploadResponse.status}: ${await uploadResponse.text()}`);
    }
  }));

  const finalizeResponse = await fetch(createData.upload.finalizeUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ versionId: createData.upload.versionId }),
  });

  if (!finalizeResponse.ok) {
    throw new Error(`Finalize failed ${finalizeResponse.status}: ${await finalizeResponse.text()}`);
  }

  const finalizeData = await finalizeResponse.json();
  console.log(JSON.stringify({
    siteUrl: finalizeData.siteUrl ?? createData.siteUrl,
    claimUrl: createData.claimUrl,
    expiresAt: createData.expiresAt,
    files: fileRecords.length,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
