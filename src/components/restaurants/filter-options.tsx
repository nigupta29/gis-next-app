import prisma from "@/lib/db"
import { Suspense } from "react"
import { FilterOptionsLoader } from "../site/loader"
import { Label } from "../ui/label"
import HoodSelectBtn from "./neighbourhood-select-btn"

export default function FilterOptions() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Change Neighbourhood</Label>
        <Suspense fallback={<FilterOptionsLoader />}>
          <HoodOptions />
        </Suspense>
      </div>
    </div>
  )
}

async function HoodOptions() {
  const neighbourhoods = await prisma.neighbourhood.findMany({
    orderBy: [{ area: "asc" }]
  })

  return <HoodSelectBtn neighbourhoods={neighbourhoods} />
}
