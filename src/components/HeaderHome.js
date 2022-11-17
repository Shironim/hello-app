import { BsCartFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";

const HeaderHome = () => {

  return (
    <header>
      <section className='d-flex justify-content-between mb-3'>
        <div>
          <h2 className='fs-5 mb-0'>Hi,Abdillah</h2>
          <p style={{ fontSize: "12px" }} className='mb-0 text-gray-300'>Yuk Mulai Menjelajah</p>
        </div>
        <div className='d-flex'>
          <div className='d-flex align-self-center'>
            <div className='me-2'>
              <BsCartFill size={20} color="#fd7e14" />
            </div>
            <div>
              <BsFillBellFill size={20} color="#fd7e14" />
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-between">
        <input type="text" className="px-2 w-100 me-3 border p-0 border-secondary rounded border-color-secondary" />
        <button style={{ backgroundColor: "#FC6A00" }} className="btn px-2 py-1">
          <span className="text-white" style={{ fontSize: "12px" }}>Cari</span>
        </button>
      </section>
    </header>
  )
}
export default HeaderHome;