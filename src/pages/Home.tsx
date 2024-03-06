import { Card, CardSkeleton, CategoryCard } from "@/components";
import { PageContainer } from "@/components/layout"
import { useContent } from "@/hooks/useContent";
import { useAuth } from "@/hooks/useAuth";

export function Home () {
  const { content, loading, categories } = useContent()
  const { user } = useAuth()

  return (
    <PageContainer>
      <div className="p-4 md:px-28 lg:px-44">
        <header className="py-2">
          <h2 className="font-semibold text-3xl">Welcome back!</h2>
          <p className="text-md text-slate-700">
            All ready? <strong className="text-sky-500">{user}</strong>
          </p>
        </header>
        <section className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard 
              key={category.slug}
              category={category}
            />
          ))}
        </section>
      </div>
      <main className="p-4 md:px-28 lg:px-44">
        <header className="pb-6">
          <h2 className="font-semibold text-2xl">All Content</h2>
          <p className="text-sm text-slate-700">Top picks for you. Updated daily.</p>
        </header>
        <section className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {loading && [0,1,2,3,4,5].map((index) => <CardSkeleton key={index}/>)}
          {!loading && content.map(({ id, poster }) => (
            <Card 
              key={poster} 
              image={poster}
              to={`/details/${id}`} 
            />
          ))}
        </section>
      </main>
    </PageContainer>
  )
}