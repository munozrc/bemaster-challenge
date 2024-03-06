import { Link, Navigate, useParams } from "react-router-dom";
import { useSingleCategory } from "@/hooks/useSingleCategory";
import { PageContainer } from "@/components/layout"
import { BackIcon } from "@/components/icons";
import { Card } from "@/components";

export function ContentCategory () {
  const { slug } = useParams()
  const { content, currentCategory } = useSingleCategory(slug)

  if (typeof currentCategory === "undefined") {
    return (<Navigate to="*" replace />)
  }

  return (
    <PageContainer>
      <section className="w-full flex relative h-40 overflow-hidden bg-slate-600">
        <div className="w-full h-full absolute top-0 z-10 bg-black bg-opacity-20">
          <div className="flex flex-col h-full justify-center px-4 md:px-28 lg:px-44">
            <h1 className="text-3xl font-bold text-wrap text-slate-50">{currentCategory.name}</h1>
            <span className="bg-slate-900 px-2 py-1 w-fit text-slate-300 text-xs rounded-md mt-1">Category</span>
          </div>
        </div>
        <video
          loop
          muted
          autoPlay
          className="w-full object-cover blur"
          src={`/video-categories/${currentCategory.slug}.mp4`}
        />
      </section>
      <main className="p-4 md:px-28 lg:px-44">
        <header className="w-full flex justify-between items-center mb-4">
          <div className="w-full flex flex-col">
            <h3 className="font-semibold text-2xl">Content</h3>
            <span className="text-sm text-slate-700">{content.length} result(s) found.</span>
          </div>
          <Link className="text-nowrap text-blue-500 hover:underline text-lg pr-2 flex items-center gap-2" to="/home">
            <BackIcon />Go Home
          </Link>
        </header>
        <section className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {content.map(({ id, poster }) => (
            <Card
              key={id} 
              image={poster}
              to={`/details/${id}`} 
            />
          ))}
        </section>
      </main>
    </PageContainer>
  )
}