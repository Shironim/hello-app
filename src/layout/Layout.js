import Footer from "../components/Footer";
import Header from "../components/HeaderHome";
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <div>
      <section className='p-2 mb-5'>
        <Header />
        <Outlet />
      </section>
      <Footer />
    </div>
  )
}

export default Layout;