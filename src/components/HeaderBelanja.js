import { BsHouseFill } from "react-icons/bs";
import { BsHandbagFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsBookFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import HeaderHome from "./HeaderHome";
const HeaderBelanja = () => {
  return (
    <section>
      <HeaderHome />
      <nav>
        <ul className='d-flex justify-content-between m-0 p-0 text-decoration-none'>
          <li className='text-center p-1'>
            <Link to="/hello-app/beranda">
              <BsHouseFill size={20} color="#fd7e14" />
              <p className="text-white" style={{ fontSize: "12px" }}>Beranda</p>
            </Link>
          </li>
          <li className='text-center p-1'>
            <Link to="/hello-app/belanja">
              <BsHandbagFill size={20} color="#6c757d" />
              <p className="text-white" style={{ fontSize: "12px" }}>Belanja</p>
            </Link>
          </li>
          <li className='text-center p-1'>
            <BsHeartFill size={20} color="#6c757d" />
            <p className="text-white" style={{ fontSize: "12px" }}>Favorit</p>
          </li>
          <li className='text-center p-1'>
            <BsBookFill size={20} color="#6c757d" />
            <p className="text-white" style={{ fontSize: "12px" }}>Edukasi</p>
          </li>
          <li className='text-center p-1'>
            <BsPersonFill size={20} color="#6c757d" />
            <p className="text-white" style={{ fontSize: "12px" }}>Account</p>
          </li>
        </ul>
      </nav>
    </section>
  )
}
export default HeaderBelanja;