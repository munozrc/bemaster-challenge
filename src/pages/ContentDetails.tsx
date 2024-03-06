import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useSingleContent } from "@/hooks/useSingleContent"
import { PageContainer } from "@/components/layout"
import { BackIcon } from "@/components/icons"

export function ContentDetails () {
  const { id } = useParams()
  const { currentContent } = useSingleContent(id)
  const navigate = useNavigate()

  if (typeof currentContent === "undefined") {
    return (<Navigate to="*" replace />)
  }

  return (
    <PageContainer>
      <div className="p-4 pt-12 md:px-28 lg:px-44 flex gap-5 items-center bg-gradient-to-b from-blue-400">
        <img 
          src={currentContent.poster}
          className="w-fit h-auto max-w-40 rounded-md"
        />
        <section className="flex flex-col h-full justify-center">
          <h1 className="text-3xl font-bold text-wrap text-slate-900">{currentContent.title}</h1>
          <span 
            onClick={() => navigate(`/category/${currentContent.category}`)}
            className="bg-slate-900 px-2 py-1 w-fit text-slate-300 text-xs rounded-md mt-1 hover:underline cursor-pointer"
          >
            {currentContent.category}
          </span>
        </section>
      </div>
      <div className="p-4 pt-4 md:px-28 lg:px-44 ">
        <h3 className="font-semibold text-2xl">Details</h3>
        <div>
          <p>{currentContent.releaseYear}</p>
          <p className="mt-3">{currentContent.overview}</p>
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="mt-5 px-3 py-1 pr-4 text-slate-100 flex w-fit items-center gap-2 bg-blue-500 rounded-md" 
        >
          <BackIcon />Go Back
        </button>
      </div>
    </PageContainer>
  )
}