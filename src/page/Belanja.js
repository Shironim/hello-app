import CardProduk from "../components/CardProduk";

const Belanja = () => {
  return (
    // <Header />
    <section>
      <section className="d-flex container justify-content-between m-0 p-0 mt-2">
        <button className=" btn btn-primary d-flex rounded p-1 me-1">
          <img src="/images/jeruk.png" className="align-self-center" alt="" />
          <p className="m-0 align-self-center ps-1 text-start" style={{ fontSize: "6px" }}>Pertanian</p>
        </button>
        <button className=" btn btn-primary d-flex rounded p-1 me-1">
          <img src="/images/jeruk.png" className="align-self-center" alt="" />
          <p className="m-0 align-self-center ps-1 text-start" style={{ fontSize: "6px" }}>Alat Manufaktur</p>
        </button>
        <button className=" btn btn-primary d-flex rounded p-1 me-1">
          <img src="/images/jeruk.png" className="align-self-center" alt="" />
          <p className="m-0 align-self-center ps-1 text-start" style={{ fontSize: "6px" }}>Robot Pabrik</p>
        </button>
        <button className=" btn btn-primary d-flex rounded p-1">
          <img src="/images/jeruk.png" className="align-self-center" alt="" />
          <p className="m-0 align-self-center ps-1 text-start" style={{ fontSize: "6px" }}>Pabrik Mesin</p>
        </button>
      </section>
      <section>
        <div className='row container p-0 m-0'>
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
          <div className='col-6 p-2'>
            <CardProduk />
          </div>
          <div className='col-6 p-2'>
            <CardProduk />
          </div>
        </div>
      </section>
    </section>
  )
}
export default Belanja;