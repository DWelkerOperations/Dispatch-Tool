import type { FleetVehicle, FleetVehicleStatus, FleetVehicleType } from "../types/dispatch";
import { mockTrucks } from "./mockResources";

const truckTypes: FleetVehicleType[] = ["10 Ft. SOV", "14 Ft. SOV XL", "16 Ft. Truck", "22 Ft. Truck", "Spare Truck"];
const makes = ["Freightliner", "Isuzu", "Ford", "International", "Hino"];
const models = ["M2", "NPR", "Transit", "MV", "268"];

const statusCycle: FleetVehicleStatus[] = [
  "Available",
  "Available",
  "Available",
  "Assigned",
  "Out on Push",
  "Returning",
  "Down / Unavailable",
  "Maintenance",
];

export const fleetVehicleStatuses: FleetVehicleStatus[] = [
  "Available",
  "Assigned",
  "Out on Push",
  "Returning",
  "Down / Unavailable",
  "Maintenance",
];

export const fleetVehicleTypes = truckTypes;
export const fleetVehicleSizes: FleetVehicle["size"][] = ["Small", "Medium", "Large"];

export const mockFleet: FleetVehicle[] = mockTrucks.map((truck, index) => {
  const typeIndex = truckTypes.indexOf(truck.vehicleType ?? "Spare Truck");
  const status = statusCycle[index % statusCycle.length];
  const size = sizeForTruckType(truck.vehicleType);

  return {
    id: truck.id,
    truckNumber: truck.truckNumber,
    location: "ORD",
    type: truck.vehicleType ?? "Spare Truck",
    size,
    make: makes[Math.max(0, typeIndex) % makes.length],
    model: models[Math.max(0, typeIndex) % models.length],
    capacity: capacityForTruckType(truck.vehicleType),
    status,
    assignedDriver: status === "Assigned" || status === "Out on Push" || status === "Returning" ? `EMP-${String((index % 150) + 1).padStart(4, "0")}` : null,
    assignedPush: status === "Assigned" || status === "Out on Push" || status === "Returning" ? `P-${String((index % 45) + 1).padStart(3, "0")}` : null,
    notes: "ORD 2026 fleet list reference",
  };
});

function sizeForTruckType(type?: FleetVehicleType): FleetVehicle["size"] {
  if (type === "10 Ft. SOV" || type === "14 Ft. SOV XL") return "Small";
  if (type === "16 Ft. Truck") return "Medium";
  return "Large";
}

function capacityForTruckType(type?: FleetVehicleType) {
  if (type === "10 Ft. SOV") return "Express only / driver only";
  if (type === "14 Ft. SOV XL") return "Express only / driver only";
  if (type === "16 Ft. Truck") return "Mainline narrowbody";
  if (type === "22 Ft. Truck") return "Widebody capable";
  return "Spare";
}
