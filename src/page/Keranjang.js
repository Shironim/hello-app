import { useEffect, useState } from "react";
import Rekomendasi from "../components/Rekomendasi";
import { Link } from "react-router-dom"
import { BsFillGeoAltFill } from "react-icons/bs"
import { BsFillTrashFill } from "react-icons/bs"
import FooterKeranjang from "../components/FooterKeranjang";

const Keranjang = () => {
  const [isKeranjang, setIsKeranjang] = useState(false);
  const [keranjang, setKeranjang] = useState()
  useEffect(() => {
    const data = localStorage.getItem('keranjang');
    if (data) {
      let produk = JSON.parse(data)
      setKeranjang(produk)
      setIsKeranjang(true);
    }
  }, [isKeranjang, keranjang]);
  let total = 0;
  keranjang?.map((k) => {
    total += k[3]
  })
  const deleteLocal = () => {
    localStorage.removeItem('keranjang');
    setIsKeranjang(false);
  }
  return (
    <>
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
              <section className="row m-0 p-0 container">
                {
                  keranjang.map((d, key) => {
                    return (
                      <div key={key} className="mb-1">
                        <div className="d-flex">
                          <div className="col-5 me-3">
                            <img src={`images/produk/${d[2]}.png`} style={{ objectFit: "cover" }} className="rounded" width="100%" height="120px" alt="" />
                          </div>
                          <div className="col-7">
                            <h2 className="fs-6 fw-normal m-0 pb-2">Tomat Segar </h2>
                            <h2 className="fs-5 fw-bold m-0 p-0">Rp. {d[3]}</h2>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <div onClick={deleteLocal} className="align-self-center me-3">
                            <BsFillTrashFill color="#4B4B4B66" size={20} />
                          </div>
                          <div>
                            <div className="d-flex border border-3 rounded px-2 py-1" style={{ color: "#4B4B4B66" }}>
                              <span className="fs-5">-</span>
                              <span className="align-self-center px-3">3</span>
                              <span className="fs-5">+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }

              </section>
            </div>
            :
            <div>
              <section className="container pb-3 mb-3 border-bottom border-5">
                <h1 className="fs-4 fw-bold">Keranjang</h1>
                <div className="d-flex py-2">
                  <img src="/hello-app/images/keranjang.png" alt="" />
                  <div className="align-self-center">
                    <h2 className="fs-6 fw-bold">Wah, Keranjang kamu masih kosong</h2>
                    <p style={{ fontSize: "12px" }}>Yuk, mulai berbelanja untuk kebutuhan pokok harianmu!</p>
                  </div>
                </div>
                <button className="btn w-100" style={{ backgroundColor: "#FC6A00", borderColor: "#FC6A00" }}>
                  <Link to="/hello-app/belanja" className="text-decoration-none">
                    <span className="text-white fw-bold ">
                      Mulai Belanja
                    </span>
                  </Link>
                </button>
              </section>
              <Rekomendasi />
            </div>
        }
      </div>
      <FooterKeranjang total={total} />
    </>
  )
}
export default Keranjang;