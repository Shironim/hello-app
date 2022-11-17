import { BsHouseFill } from "react-icons/bs";
import { BsHandbagFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"

const Footer = () => {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <footer className='bg-dark' style={{
      bottom: "0",
      position: "fixed",
      width: "346px",
    }}>
      <nav className="container">
        <ul className='d-flex justify-content-between m-0 p-0 text-decoration-none'>
          <li className='text-center p-1'>
            <Link to="beranda" className="text-decoration-none">
              <BsHouseFill size={20} color={location.pathname == "/hello-app/beranda" || location.pathname == "/" ? "#fd7e14" : "#6c757d"} />
              <p className="text-white" style={{ fontSize: "12px" }}>Beranda</p>
            </Link>
          </li>
          <li className='text-center p-1'>
            <Link to="belanja" className="text-decoration-none">
              <BsHandbagFill size={20} color={location.pathname == "/hello-app/belanja" ? "#fd7e14" : "#6c757d"} />
              <p className="text-white" style={{ fontSize: "12px" }}>Belanja</p>
            </Link>
          </li>
          <li className='text-center p-1'>
            <Link to="keranjang" className="text-decoration-none">
              <BsFillCartFill size={20} color={location.pathname == "/hello-app/keranjang" ? "#fd7e14" : "#6c757d"} />
              <p className="text-white" style={{ fontSize: "12px" }}>Keranjang</p>
            </Link>
          </li>
          <li className='text-center p-1'>
            <Link to="akun" className="text-decoration-none">
              <BsPersonFill size={20} color={location.pathname == "/hello-app/akun" ? "#fd7e14" : "#6c757d"} />
              <p className="text-white" style={{ fontSize: "12px" }}>Akun</p>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
export default Footer;