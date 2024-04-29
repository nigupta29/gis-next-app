"use client"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { DEFAULT_ZOOM_LEVEL } from "@/lib/constants"
import { RestaurantDetails } from "@/lib/types"
import { parseLeafletLocation } from "@/lib/utils"
import { LatLngExpression } from "leaflet"
import "leaflet-defaulticon-compatibility"

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"

function SetViewOnClick({ position }: { position: LatLngExpression }) {
  const map = useMap()
  map.setView(position, DEFAULT_ZOOM_LEVEL)

  return null
}

export default function MapDisplay({
  position,
  restaurants
}: {
  position: LatLngExpression
  restaurants: Array<RestaurantDetails>
}) {
  return (
    <MapContainer
      center={position}
      zoom={DEFAULT_ZOOM_LEVEL}
      className="h-[100dvh]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {restaurants.map((item) => (
        <Marker
          key={item.id}
          position={parseLeafletLocation({
            latitude: item.lat,
            longitude: item.long
          })}
          riseOnHover
        >
          <Popup>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">Name</TableCell>
                  <TableCell>{item.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Category</TableCell>
                  <TableCell>{item.category.label}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Area</TableCell>
                  <TableCell>{item.neighbourhood.area}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Latitude</TableCell>
                  <TableCell>{item.lat}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Longitude</TableCell>
                  <TableCell>{item.long}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Popup>
        </Marker>
      ))}

      <SetViewOnClick position={position} />
    </MapContainer>
  )
}
