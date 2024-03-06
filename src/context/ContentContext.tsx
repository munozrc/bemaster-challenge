import { type ReactNode, createContext, useState, useCallback } from "react";
import { getCategories, getListOfContent } from "@/services/content.service";
import type { Category, Content } from "@/models";

interface ContextValues {
  content: Array<Content>
  categories: Array<Category>
  loading: boolean
  getContent: () => Promise<void>
}

interface Props {
  children: ReactNode | ReactNode[]
}

export const ContentContext = createContext<ContextValues>({} as ContextValues)

export function ContentProvider ({ children }: Props) {
  const [content, setContent] = useState<Array<Content>>([])
  const [loading, setLoading] = useState(false)
  const categories = getCategories()

  const getContent = useCallback(async () => {
    setLoading(true)
    await getListOfContent()
      .then(setContent)
      .finally(() => setLoading(false))
  }, [])

  return (
    <ContentContext.Provider value={{ 
      content,
      loading,
      categories,
      getContent 
    }}>
      {children}
    </ContentContext.Provider>
  )
}