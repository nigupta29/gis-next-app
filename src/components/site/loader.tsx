import { CompassIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card"
import { Skeleton } from "../ui/skeleton"

export const FilterOptionsLoader = () => {
  return <Skeleton className="h-[40px] w-full rounded-lg" />
}

export const MapSkeleton = () => {
  return (
    <div className="flex h-full animate-pulse flex-col items-center justify-center gap-5 text-muted-foreground">
      <CompassIcon className="animate-spin" size={150} />
      <h3 className="p-5 text-4xl font-semibold tracking-tighter">
        Loading...
      </h3>
    </div>
  )
}

export const HoodAnalysisTableLoader = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="mx-auto h-[45px] w-2/3" />
        </CardTitle>
      </CardHeader>
      <CardContent className="h-52 space-y-2">
        <Skeleton className="h-[45px]" />
        <Skeleton className="h-[45px]" />
        <Skeleton className="h-[45px]" />
      </CardContent>
    </Card>
  )
}
