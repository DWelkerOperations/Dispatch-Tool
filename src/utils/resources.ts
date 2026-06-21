export function resourceIds(id: string | null) {
  return id ? id.split(" + ").filter(Boolean) : [];
}
