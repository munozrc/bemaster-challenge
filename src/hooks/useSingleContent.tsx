import { ContentContext } from "@/context/ContentContext"
import { useContext } from "react"

export function useSingleContent (id?: string) {
  const { content } = useContext(ContentContext)
  const currentContent = content.find((item) => item.id === id)
  return { currentContent }
}