import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { RestaurantDetails } from "@/lib/types"
import { ScrollArea } from "../ui/scroll-area"

export default function HoodAnalysisTable({
  restaurants
}: {
  restaurants: Array<RestaurantDetails>
}) {
  const totalRestaurants = restaurants.length
  const categoryCountMap = new Map<string, number>()

  restaurants.forEach((restaurant) => {
    const categoryLabel = restaurant.category.label
    if (categoryCountMap.has(categoryLabel)) {
      categoryCountMap.set(
        categoryLabel,
        categoryCountMap.get(categoryLabel)! + 1
      )
    } else {
      categoryCountMap.set(categoryLabel, 1)
    }
  })

  const categoryList: Array<{ category: string; count: number }> = []

  categoryCountMap.forEach((count, category) => {
    categoryList.push({ category, count })
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Location Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-52 relative">
          <Table>
            <TableHeader className="sticky top-0 bg-secondary">
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Restaurants</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categoryList.map((item) => (
                <TableRow key={item.category}>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <p className="w-full text-center">
          There are total of {totalRestaurants} Restaurant{totalRestaurants !== 1 && 's'}.
        </p>
      </CardFooter>
    </Card>
  )
}
