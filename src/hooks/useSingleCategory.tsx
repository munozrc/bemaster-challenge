import { ContentContext } from "@/context/ContentContext"
import { useContext } from "react"

export function useSingleCategory (slug?: string) {
  const { categories, content } = useContext(ContentContext)
  const currentCategory = categories.find((item) => item.slug === slug)

  if (typeof currentCategory === "undefined") {
    return { content: undefined, currentCategory }
  }

  const contentFilter = content.filter(
    ({category}) => category === currentCategory.slug
  )

  return { content:  contentFilter, currentCategory }
}