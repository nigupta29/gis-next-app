import RestaurantDisplay from "@/components/restaurants/restaurant-display"
import { DEFAULT_NEIGHBOURHOOD } from "@/lib/constants"
import { redirect } from "next/navigation"

export default function Restaurants({
  searchParams
}: {
  searchParams: { location: string }
}) {
  const location = searchParams.location

  if (!location) redirect(`/restaurants?location=${DEFAULT_NEIGHBOURHOOD}`)

  return <RestaurantDisplay location={location} />
}
