import { clsx, type ClassValue } from "clsx"
import { LatLngExpression } from "leaflet"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseLeafletLocation({
  latitude,
  longitude
}: {
  latitude: number
  longitude: number
}): LatLngExpression {
  return [latitude, longitude]
}

export async function wait(timeout: number) {
  await new Promise((res) => setTimeout(res, timeout))
}
