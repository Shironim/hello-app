// import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom"

const CardProduk = ({ title, img, harga, isBestseller }) => {
  return (
    <div className=''>
      <div className="shadow-sm p-2 rounded">
        <Link to={`/produk/${img}`}>
          <img src={`/images/produk/${img}.png`} width="100%" height="120px" style={{ objectFit: "cover" }} className="rounded" alt="" />
        </Link>
      </div>
      <div className='d-flex justify-content-between mt-2'>
        <div className="w-100">
          <h3 className='m-0 fs-6 fw-bold'>{title}</h3>
          <div className="d-flex justify-content-between">
            <p className='m-0'>Rp. {harga}</p>
            {
              isBestseller ?
                <div className="align-self-center rounded-pill" style={{ backgroundColor: "rgba(252, 106, 0, 0.25)" }}>
                  <p className="m-0 px-2 py-1 " style={{ fontSize: "12px", color: "#FC6A00" }}>Best Seller</p>
                </div>
                : ""
            }

          </div>
        </div>

      </div>
    </div>
  )
}

export default CardProduk;