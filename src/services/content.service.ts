import { Category, Content } from "@/models";
import { content, categories } from "@/mocks"

export function getCategories (): Array<Category> {
  return categories
}

export async function getListOfContent (): Promise<Array<Content>> {
  await new Promise((resolve,) => setTimeout(resolve, 500))
  return content
}