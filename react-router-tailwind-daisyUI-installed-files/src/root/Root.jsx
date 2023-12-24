import { Outlet } from "react-router-dom"
import { Footer } from "../component/Footer/Footer"


export const Root = () => {
  return (
    <div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
