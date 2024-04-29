import { Category, Neighbourhood, Restaurant } from "@prisma/client"

export type RestaurantDetails = Restaurant & {
  neighbourhood: Neighbourhood
  category: Category
}

export type NeighbourhoodDetails = Neighbourhood & {
  _count: { Restaurant: number }
}

export type CategoryDetails = Category & {
  _count: { Restaurant: number }
}
