import { useState } from "react";
import CardProduk from "../components/CardProduk";
import { Link } from "react-router-dom"
import { BsFillGeoAltFill } from "react-icons/bs"
import { BsFillTrashFill } from "react-icons/bs"

const Keranjang = () => {
  const [isKeranjang] = useState(true)
  return (
    <div className="pb-2">
      {
        isKeranjang ?
          <div>
            <section className="container pb-3 mb-3 border-bottom border-5">
              <h1 className="fs-4 fw-bold">Keranjang</h1>
              <section>
                <BsFillGeoAltFill /> <span style={{ fontSize: "12px" }}>Dikirim ke <b>Rumah Muhammad Abdillah</b></span>
              </section>
            </section>
            <section className="row container">
              <div className="col-5">
                <img src="/images/produk/jeruk.png" className="rounded" width="100%" alt="" />
              </div>
              <div className="col-7">
                <h2 className="fs-6 fw-normal m-0 pb-2">Tomat Segar </h2>
                <h2 className="fs-5 fw-bold m-0 p-0">Rp. 45.000</h2>
              </div>
              <div>
                <BsFillTrashFill />
              </div>
            </section>
          </div>
          :
          <div>
            <section className="container pb-3 mb-3 border-bottom border-5">
              <h1 className="fs-4 fw-bold">Keranjang</h1>
              <div className="d-flex py-2">
                <img src="/images/keranjang.png" alt="" />
                <div className="align-self-center">
                  <h2 className="fs-6 fw-bold">Wah, Keranjang kamu masih kosong</h2>
                  <p style={{ fontSize: "12px" }}>Yuk, mulai berbelanja untuk kebutuhan pokok harianmu!</p>
                </div>
              </div>
              <button className="btn w-100" style={{ backgroundColor: "#FC6A00", borderColor: "#FC6A00" }}>
                <Link to="/belanja" className="text-decoration-none">
                  <span className="text-white fw-bold ">
                    Mulai Belanja
                  </span>
                </Link>
              </button>
            </section>
            <section className="container">
              <h2 className="fs-5 fw-bold">Rekomendasi untukmu</h2>
              <section className="row">
                <div className='col-6 p-2'>
                  <CardProduk />
                </div>
                <div className='col-6 p-2'>
                  <CardProduk />
                </div>
                <div className='col-6 p-2'>
                  <CardProduk />
                </div>
                <div className='col-6 p-2'>
                  <CardProduk />
                </div>
              </section>
            </section>
          </div>
      }
    </div>
  )
}
export default Keranjang;