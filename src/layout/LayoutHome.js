import Header from "../components/HeaderHome";
import { Outlet } from "react-router-dom"
const LayoutHome = () => {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  )
}
export default LayoutHome;