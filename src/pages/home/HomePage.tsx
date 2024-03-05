import { Link } from "react-router-dom";
import { PageContainer } from "@/components/layout";
import categories from "@/__mocks__/categories.json"
import content from "@/__mocks__/content.json"

export function HomePage () {
  return (
    <PageContainer>
      <div className="p-5 lg:px-28 lg:py-10">
        <section className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map(({ slug }) => (
            <Link 
              key={slug} 
              to={`/home/${slug}`}
              className="rounded-md border bg-zinc-900 text-card-foreground shadow flex items-center justify-center lg:max-h-32 hover:scale-110 transition-all duration-300 ease-in-out">
              <img 
                className="w-full h-full object-cover"
                src={`/categories/${slug}.png`}
              />
            </Link>))}
        </section>
      </div>
      <main>
        <header className="px-5 py-2">
          <h2 className="font-bold">All Content</h2>
        </header>
        <section className="p-5 pt-0">
          {content.map(({id, title}) => (
            <Link key={id} to={`/home/detail/${id}`}>
              <h3>{title}</h3>
            </Link>
          ))}
        </section>
      </main>
    </PageContainer>
  )
}