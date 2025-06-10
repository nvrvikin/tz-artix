import Header from "@/widgets/Header"
import type { ReactNode } from "react"

interface IBaseLayout {
    children: ReactNode
}

function BaseLayout({ children }: IBaseLayout) {
  return (
    <>
        <Header />
        { children }
    </>
  )
}

export default BaseLayout