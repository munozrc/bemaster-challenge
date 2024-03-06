import { PageContainer } from "@/components/layout"
import { content, categories } from "@/mocks"
import { useParams } from "react-router-dom";
import { Card } from "@/components";

export function ContentCategory () {
  const { slug } = useParams()
  const currentCategory = categories.find((category) => category.slug === slug)

  if (typeof currentCategory === "undefined") {
    return (
      <PageContainer>
        <h4>Category Not Found</h4>
      </PageContainer>
    )
  }

  const listOfContent = content.filter(({category}) => category === currentCategory.slug)

  return (
    <PageContainer>
      <div className="p-4 md:px-28 lg:px-44 bg-slate-800">
        <h1>{currentCategory.name}</h1>
      </div>
      <main className="p-4 md:px-28 lg:px-44">
        <section className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {listOfContent.map(({ id, poster }) => (
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