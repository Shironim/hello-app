import { BsFillStarFill } from "react-icons/bs"
import { BsPlusLg } from "react-icons/bs"

const Produk = () => {
  return (
    <div className="container">
      <div>
        <img width="100%" className="rounded" src="/images/produk/jeruk.png" alt="" />
      </div>
      <div className="d-flex justify-content-between mb-3">
        <div>
          <h2 className="fs-4 mt-2 mb-0">Jeruk Enak</h2>
          <p className="fs-6 p-0 m-0">Rp. 12,000</p>
          <div>
            <BsFillStarFill color="#FFC700" />
            <BsFillStarFill color="#FFC700" />
            <BsFillStarFill color="#FFC700" />
            <BsFillStarFill color="#FFC700" />
            <BsFillStarFill color="#FFC700" />
          </div>
        </div>
        <div className="align-self-center">
          <div className="d-flex">
            <button className="btn btn-primary p-1" style={{ width: "30px", backgroundColor: "#FC6A00", borderColor: "#FC6A00" }}>
              <span className="fs-5">-</span>
            </button>
            <div className="align-self-center mx-2">
              10
            </div>
            <button className="btn btn-primary p-1" style={{ width: "30px", backgroundColor: "#FC6A00", borderColor: "#FC6A00" }}>
              <BsPlusLg color="#FFFFFF" size={16} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="fs-5 fw-bold">Deskripsi</h2>
        <p style={{ fontSize: "12px", color: "rgba(36, 35, 35, 0.8)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui iste perferendis consectetur laborum deserunt reiciendis enim voluptates necessitatibus quos nam dignissimos incidunt repudiandae explicabo corrupti, rem repellat debitis omnis?</p>
      </div>
      <section className="row container justify-content-between m-0 p-0">
        <div className="col-4 px-2 m-0 mb-2">
          <img src="/images/produk/jeruk.png" className="rounded" width="100%" alt="" />
          <p className="m-0">Jeruk</p>
        </div>
        <div className="col-4 px-2 m-0 mb-2">
          <img src="/images/produk/jeruk.png" className="rounded" width="100%" alt="" />
          <p className="m-0">Jeruk</p>
        </div>
        <div className="col-4 px-2 m-0 mb-2">
          <img src="/images/produk/jeruk.png" className="rounded" width="100%" alt="" />
          <p className="m-0">Jeruk</p>
        </div>
        <div className="col-4 px-2 m-0 mb-2">
          <img src="/images/produk/jeruk.png" className="rounded" width="100%" alt="" />
          <p className="m-0">Jeruk</p>
        </div>
        <div className="col-4 px-2 m-0 mb-2">
          <img src="/images/produk/jeruk.png" className="rounded" width="100%" alt="" />
          <p className="m-0">Jeruk</p>
        </div>
        <div className="col-4 px-2 m-0 mb-2">
          <img src="/images/produk/jeruk.png" className="rounded" width="100%" alt="" />
          <p className="m-0">Jeruk</p>
        </div>

      </section>
    </div>
  )
}

export default Produk;