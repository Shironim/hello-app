import { Link } from "react-router-dom";

const FooterProduk = ({ total }) => {
  return (
    <footer className='container py-2' style={{
      bottom: "0",
      position: "fixed",
      width: "346px",
      backgroundColor: "#f8f9fa"
    }}>
      <div className="d-flex justify-content-between">
        <div className="text-black">
          <p className="m-0 p-0 fs-6">Total</p>
          <h2 className="m-0 p-0 fs-5 fw-bold">Rp. {total}</h2>
        </div>
        <div className="align-self-center">
          <a href="" className="text-decoration-none">
            <button className="btn w-100" style={{ backgroundColor: "#FC6A00", borderColor: "#FC6A00" }}>
              <span className="text-white fs-6 fw-bold">Beli</span>
            </button>
          </a>
        </div>
      </div>
    </footer>
  )
}
export default FooterProduk;