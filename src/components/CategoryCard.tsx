import type { FC } from "react"
import { Category } from "@/models"
import { Link } from "react-router-dom"

interface Props {
  category?: Category
}

export const CategoryCard: FC<Props> = ({ category }) => {
  const categoryPath = category ? `/home/${category.slug}` : "/home"
  const categoryStyle = category ? "bg-zinc-900 shadow" :"border-zinc-500 bg-zinc-200 "
  return (
    <Link
      to={categoryPath}
      className={`rounded-md border ${categoryStyle} shadow-xl flex items-center justify-center lg:max-h-32 hover:scale-110 transition-all duration-200 shadow-slate-300`}
    >
      {category ? ( 
        <img 
          className="w-full h-full object-cover"
          src={`/categories/${category.slug}.png`}
        />
      ) : "Show All"}
    </Link>
  )
}