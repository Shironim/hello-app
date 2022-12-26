// import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom"
// import IconKeranjang from '/images/produk/apel.jpg'
// import IconToko from '/icon/toko.png'

const CardProduk = ({ title, img, farm, stok, panen }) => {
  return (
    <div className='shadow-sm rounded overflow-hidden'>
      <div className="">
        <Link to={`/produk/${img}`}>
          <img src={`/images/produk/${img}.png`} width="100%" height="120px" style={{ objectFit: "cover" }} alt="" />
        </Link>
      </div>
      <div className='d-flex mt-2 p-2'>
        <div className="w-100">
          <h3 className='m-0 fs-4 fw-bold mb-2'>{title}</h3>
          <div className="d-flex justify-content-between mb-2 fs-6">
            <p className="m-0 d-flex">
              <img src={`/icon/toko.png`} className="align-self-center me-1" width="16px" height="16px" alt="" />
              <span>{farm}</span>
            </p>
            <p className="m-0 d-flex">
              <img src={`/icon/keranjang.png`} className="align-self-center me-1" width="16px" height="16px" alt="" />
              <span>{stok}</span>
            </p>
          </div>
          {
            panen == 1 ?
              <p className='m-0 fst-italic' style={{ fontSize: "14px" }}>Panen hari ini</p>
              :
              <p className='m-0 fst-italic' style={{ fontSize: "14px" }}>Panen {panen} hari yang lalu</p>
          }
        </div>
      </div>
    </div>
  )
}

export default CardProduk;