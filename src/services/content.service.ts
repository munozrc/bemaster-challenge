import { Content } from "@/models";
import { content } from "@/mocks"

export async function getListOfContent (): Promise<Array<Content>> {
  await new Promise((resolve,) => setTimeout(resolve, 500))
  return content
}