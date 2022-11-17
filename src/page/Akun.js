import { BsFileEarmarkMedicalFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";

const Akun = () => {
  return (
    <div>
      <h2 className="fs-5 fw-bold">Akun</h2>
      <div className="d-flex mb-2">
        <img src="/images/man.jpg" style={{ objectFit: "cover" }} width="60px" height="60px" className="me-3 rounded-circle" alt="" />
        <div>
          <p className="fs-5 fw-bold m-0 p-0">Muhammad Abdillah</p>
          <p>PT Jababeka</p>
        </div>
      </div>
      <div>
        <h2 className="fs-5 fw-bold">Aktivitas Saya</h2>
        <div>
          <div className="d-flex">
            <div>
              <BsFileEarmarkMedicalFill color="#4B4B4BCC" size={24} className="me-2 my-2" />
            </div>
            <p className="m-0 p-0 align-self-center">Daftar Transaksi</p>
          </div>
          <div className="d-flex">
            <div>
              <BsHeartFill color="#4B4B4BCC" size={24} className="me-2 my-2" />
            </div>
            <p className="m-0 p-0 align-self-center">Yang Disukai</p>
          </div>
          <div className="d-flex">
            <div>
              <BsStarFill color="#4B4B4BCC" size={24} className="me-2 my-2" />
            </div>
            <p className="m-0 p-0 align-self-center">Ulasan</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="fs-5 fw-bold">Pusat Bantuan</h2>
        <div>
          <div className="d-flex">
            <div>
              <BsHeadset color="#4B4B4BCC" size={24} className="me-2 my-2" />
            </div>
            <p className="m-0 p-0 align-self-center">Layanan Pelanggan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Akun;