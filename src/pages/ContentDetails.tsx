import { Navigate, useParams } from "react-router-dom"
import { PageContainer } from "@/components/layout"
import { content } from "@/mocks"

export function ContentDetails () {
  const { id } = useParams()
  const currentContent = content.find((item) => item.id === id)

  if (typeof currentContent === "undefined") {
    return (<Navigate to="*" replace />)
  }

  return (
    <PageContainer>
      <div className="p-4 md:px-28 lg:px-44 bg-slate-800">
        <h1>{currentContent.title}</h1>
      </div>
    </PageContainer>
  )
}