import { PageContainer } from "@/components/layout"
import { Link } from "react-router-dom"

export function NotFound () {
  return (
    <PageContainer>
      <div className="w-full h-[calc(100%-4rem)] flex items-center justify-center">
        <div className="w-fit flex flex-col items-center justify-center">
          <h3 className="font-bold text-9xl mb-5">404</h3>
          <p className="text-gray-600 mb-3 text-xl">Or, you might want to explore:</p>
          <Link className="text-blue-500 hover:underline text-xl" to="/home">Go to home</Link>
        </div>
      </div>
    </PageContainer>
  )
}