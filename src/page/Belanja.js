import { useEffect, useState } from "react";
import CardProduk from "../components/CardProduk";
const Belanja = () => {
  const [produk, setProduk] = useState()
  const data = [
    {
      nama: "Tomat",
      harga: "6000",
      gambar: "tomat",
      jenis: "pertanian",
    },
    {
      nama: "Jeruk",
      harga: "8000",
      gambar: "jeruk",
      jenis: "pertanian",
    },
    {
      nama: "Cabai",
      harga: "7000",
      gambar: "cabai",
      jenis: "pertanian",
    },
    {
      nama: "Mangga",
      harga: "9000",
      gambar: "mangga",
      jenis: "pertanian"
    },
    {
      nama: "Strowberi",
      harga: "11000",
      gambar: "strowberi",
      jenis: "pertanian",
    },
    {
      nama: "Leci",
      harga: "11000",
      gambar: "leci",
      jenis: "pertanian",
    },
    {
      nama: "Apel",
      harga: "10000",
      gambar: "apel",
      jenis: "pertanian",
    },
    {
      nama: "Kopi",
      harga: "9500",
      gambar: "kopi",
      jenis: "pertanian",
    },
    {
      nama: "Mesin Diesel",
      harga: 8000000,
      gambar: "mesindiesel",
      jenis: "manufaktur",
      desc: "lorem"
    },
    {
      nama: "Pompa",
      harga: 600000,
      gambar: "pompa",
      jenis: "manufaktur",
      desc: "lorem"
    },
  ]
  const handleClick = (filter) => {
    let dataProduk = [];

    if (filter == "manufaktur") {
      dataProduk = data.filter((d) => d.jenis === "manufaktur")
    } else if (filter == "pertanian") {
      dataProduk = data.filter((d) => d.jenis === "pertanian")
    } else {
      dataProduk = data;
    }
    setProduk(dataProduk);
  }
  useEffect(() => {
    if (!produk) {
      setProduk(data);
    }
  }, [])
  return (
    // <Header />
    <section>
      <section className="d-flex container m-0 p-0 mt-2">
        <button onClick={() => handleClick("pertanian")} style={{ backgroundColor: "#FC6A00" }} className="btn d-flex rounded p-2 me-1">
          <img src="/hello-app/images/buah.png" width="30px" height="30px" className=" align-self-center" alt="" />
          <p className="m-0 align-self-center ps-1 text-start text-white" style={{ fontSize: "12px" }}>Pertanian</p>
        </button>
        <button onClick={() => handleClick("manufaktur")} style={{ backgroundColor: "#FC6A00" }} className="btn d-flex rounded p-2 me-1">
          <img src="/hello-app/images/RobotPabrik.png" width="30px" height="30px" className="align-self-center" alt="" />
          <p className="m-0 align-self-center ps-1 text-start text-white" style={{ fontSize: "12px" }}>Alat Manufaktur</p>
        </button>
      </section>
      <section>
        <div className='row container p-0 m-0'>
          {
            produk?.map((d, key) => {
              return (
                <div key={key} className='col-6 p-2'>
                  <CardProduk title={d.nama} harga={d.harga} img={d.gambar} />
                </div>
              )
            })
          }
        </div>
      </section>
    </section>
  )
}
export default Belanja;