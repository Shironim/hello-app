import { Link, useLocation } from "react-router-dom";

const FooterProduk = ({ totalHarga, simpan, jenis }) => {
  const location = useLocation();
  const saveCart = () => {
    simpan()
  }
  return (
    <footer className='bg-dark container py-2' style={{
      bottom: "0",
      position: "fixed",
      width: "346px",
    }}>
      <div className="d-flex justify-content-between">
        <div className="text-white">
          <p className="m-0 p-0 fs-6">Total</p>
          <h2 className="m-0 p-0 fs-5 fw-bold">Rp. {totalHarga}</h2>
        </div>
        <div onClick={saveCart} className="align-self-center">
          <Link to="/hello-app/keranjang" className="text-decoration-none">
            <button className="btn" style={{ backgroundColor: "#FC6A00", borderColor: "#FC6A00" }}>
              <span className="text-white fs-6 fw-bold"> + Keranjang</span>
            </button>
          </Link>
        </div>
      </div>
    </footer>
  )
}
export default FooterProduk;