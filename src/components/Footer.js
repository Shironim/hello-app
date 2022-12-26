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
      width: "396px",
    }}>
      <nav className="container">
        <ul className='d-flex justify-content-between m-0 p-0 text-decoration-none'>
          <li className='text-center p-1'>
            <Link to="/beranda" className="text-decoration-none">
              <BsHouseFill size={24} color={location.pathname == "/beranda" || location.pathname == "/" ? "#fd7e14" : "#6c757d"} />
              <p className="text-white" style={{ fontSize: "16px" }}>Beranda</p>
            </Link>
          </li>
          <li className='text-center p-1'>
            <Link to="/belanja" className="text-decoration-none">
              <BsHandbagFill size={24} color={location.pathname == "/belanja" ? "#fd7e14" : "#6c757d"} />
              <p className="text-white" style={{ fontSize: "16px" }}>Belanja</p>
            </Link>
          </li>
          <li className='text-center p-1'>
            <Link to="#" className="text-decoration-none">
              <BsFillCartFill size={24} color={location.pathname == "/keranjang" ? "#fd7e14" : "#6c757d"} />
              <p className="text-white" style={{ fontSize: "16px" }}>Keranjang</p>
            </Link>
          </li>
          <li className='text-center p-1'>
            <Link to="#" className="text-decoration-none">
              <BsPersonFill size={24} color={location.pathname == "/akun" ? "#fd7e14" : "#6c757d"} />
              <p className="text-white" style={{ fontSize: "16px" }}>Akun</p>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
export default Footer;