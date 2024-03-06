import { PageContainer } from "@/components/layout"
import { Card, CategoryCard } from "@/components";
import { content, categories } from "@/mocks"

export function Home () {
  return (
    <PageContainer>
      <div className="p-4 md:px-28 lg:px-44">
        <header className="py-2">
          <h2 className="font-bold text-xl">Categories</h2>
        </header>
        <section className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.slug}
              category={category}
            />
          ))}
          <CategoryCard />
        </section>
      </div>
      <main className="p-4 md:px-28 lg:px-44">
        <header className="pb-6">
          <h2 className="font-bold text-3xl">All Content</h2>
        </header>
        <section className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {content.map(({ id, poster }) => (
            <Card 
              key={id} 
              image={poster}
              to={`/detail/${id}`} 
            />
          ))}
        </section>
      </main>
    </PageContainer>
  )
}