import prisma from "@/lib/db"
import { parseLeafletLocation, wait } from "@/lib/utils"
import { MapPinIcon } from "lucide-react"
import dynamic from "next/dynamic"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import { HoodAnalysisTableLoader, MapSkeleton } from "../site/loader"
import FilterOptions from "./filter-options"
import HoodAnalysisTable from "./hood-analysis-table"

const DynamicMap = dynamic(
  () => import("@/components/restaurants/restaurant-map-container"),
  { ssr: false, loading: () => <MapSkeleton /> }
)

export default function RestaurantDisplay({ location }: { location: string }) {
  return (
    <div className="flex h-screen">
      <div className="flex flex-[0.3] flex-col justify-between gap-3 p-5">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPinIcon size={36} />
            <h1 className="text-3xl font-semibold">{location}</h1>
          </div>

          <Suspense fallback={<HoodAnalysisTableLoader />}>
            <HoodAnalysis location={location} />
          </Suspense>
        </div>

        <FilterOptions />
      </div>

      <div className="grow">
        <Suspense fallback={<MapSkeleton />}>
          <MapData location={location} />
        </Suspense>
      </div>
    </div>
  )
}

async function fetchNeighbourhoodData(location: string) {
  "use server"

  return await prisma.neighbourhood.findUnique({
    where: {
      area: location
    },
    include: {
      Restaurant: {
        include: { category: true, neighbourhood: true }
      }
    }
  })
}

async function HoodAnalysis({ location }: { location: string }) {
  await wait(5000)
  const neighbourhood = await fetchNeighbourhoodData(location)

  return <HoodAnalysisTable restaurants={neighbourhood?.Restaurant ?? []} />
}

async function MapData({ location }: { location: string }) {
  await wait(5000)
  const neighbourhood = await fetchNeighbourhoodData(location)

  if (!neighbourhood) redirect("/restaurants")

  const currentPosition = parseLeafletLocation({
    latitude: neighbourhood.lat,
    longitude: neighbourhood.long
  })

  return (
    <DynamicMap
      position={currentPosition}
      restaurants={neighbourhood.Restaurant}
    />
  )
}
