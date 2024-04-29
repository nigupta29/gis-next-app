"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { DEFAULT_NEIGHBOURHOOD } from "@/lib/constants"
import { Neighbourhood } from "@prisma/client"
import { useRouter, useSearchParams } from "next/navigation"

export default function HoodSelectBtn({
  neighbourhoods
}: {
  neighbourhoods: Array<Neighbourhood>
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  return (
    <Select
      defaultValue={searchParams.get("location") ?? DEFAULT_NEIGHBOURHOOD}
      onValueChange={(value) => {
        router.push(`/restaurants?location=${value}`)
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Neighbourhood" />
      </SelectTrigger>
      <SelectContent>
        {neighbourhoods.map((item) => (
          <SelectItem key={item.id} value={item.area}>
            {`${item.area}`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
