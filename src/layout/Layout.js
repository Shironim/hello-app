import Footer from "../components/Footer";
import Header from "../components/HeaderHome";
import { BsChevronLeft } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { Outlet, useLocation } from "react-router-dom"
const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {
        location.pathname === "/hello-app/akun" ?
          <section className="d-flex container justify-content-between mt-3 border-bottom border-3 py-2 mb-2 shadow-sm">
            <div>
              <BsChevronLeft color="#000" size={20} />
            </div>
          </section>
          :
          <div className="container">
            <Header />
          </div>
      }
      <section className='container mb-5'>
        <Outlet />
      </section>
      <Footer />
    </div >
  )
}

export default Layout;