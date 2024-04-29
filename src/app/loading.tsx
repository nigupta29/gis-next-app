import { LoaderIcon } from "lucide-react"

export default function RootLoader() {
  return (
    <div className="flex h-dvh grow items-center justify-center bg-transparent">
      <div className="flex animate-pulse p-5 text-center text-8xl font-semibold tracking-tighter text-muted-foreground">
        <LoaderIcon size={96} className="mr-3 animate-spin" />
        <h3>Loading...</h3>
      </div>
    </div>
  )
}
