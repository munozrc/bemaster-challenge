import { ContentContext } from "@/context/ContentContext";
import { useContext, useEffect } from "react";

export function useContent () {
  const { content, getContent, loading, categories } = useContext(ContentContext);

  useEffect(() => {
    void getContent()
  }, [getContent])

  return { content, loading, categories }
}