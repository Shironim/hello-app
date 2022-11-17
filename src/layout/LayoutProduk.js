import Header from "../components/HeaderBelanja";
import { BsChevronLeft } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { Outlet, Link, useLocation } from "react-router-dom"
import FooterProduk from "../components/FooterProduk";
import Footer from "../components/Footer";
const LayoutProduk = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <div className="mb-5">
      <section className="d-flex container justify-content-between mt-3 border-bottom border-3 py-2 mb-2 shadow-sm">
        <Link to="/belanja">
          <div>
            <BsChevronLeft color="#000" size={20} />
          </div>
        </Link>
        <div>
          <BsHeartFill color="#FC6A00" size={20} />
        </div>
      </section>
      <Outlet />
      <section>
        {
          location.pathname === "/keranjang" ? <Footer /> : <FooterProduk />
        }
      </section>
    </div>
  )
}
export default LayoutProduk;