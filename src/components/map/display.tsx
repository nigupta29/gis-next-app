"use client"
import { LatLngExpression } from "leaflet"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

export default function MapDisplay({
  position
}: {
  position: LatLngExpression
}) {
  return (
    <MapContainer center={position} zoom={15} className="h-[100dvh]">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          <p className="text-sm font-semibold capitalize">test</p>
          <i>leaflet-defaulticon-compatibility</i>.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
