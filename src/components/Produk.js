import { BsFillStarFill, BsWhatsapp } from "react-icons/bs"
import { useEffect, useState } from "react"
import Footer from "../components/Footer";
import CardProduk from "../components/CardProduk";
import { useLocation } from "react-router-dom";
// Apollo Client
import { useSubscription, useQuery, useMutation } from '@apollo/client';
// Query
import { GET_DATA_PRODUK } from '../GraphQL/Produk/queries';

const Produk = () => {
  const data = [
    {
      nama: "Tomat",
      gambar: "tomat",
      farm: "Semarang",
      panen: 1,
      stok: "50Kg"
    },
    {
      nama: "Sawi",
      gambar: "sawi",
      farm: "Ungaran",
      panen: 1,
      stok: "20Kg"
    },
    {
      nama: "Wortel",
      gambar: "wortel",
      farm: "Ungaran",
      panen: 2,
      stok: "30Kg"
    },
    {
      nama: "Timun",
      gambar: "timun",
      farm: "Semarang",
      panen: 1,
      stok: "10Kg"
    },
  ]
  const location = useLocation();
  const link = location.pathname.split("/");
  const produk = link[2];
  const dataProduk = data.filter((n) => {
    return n.gambar == produk
  })
  const [jumlah, setJumlah] = useState(0);
  const [harga] = useState(dataProduk[0].harga);
  const [totalHarga, setTotalHarga] = useState(0);
  const tambahProduk = () => {
    setJumlah(jumlah + 1)
    setTotalHarga(totalHarga + harga)
  }
  const kurangProduk = () => {
    if (jumlah > 0) {
      setJumlah(jumlah - 1)
      setTotalHarga(totalHarga - harga)
    }
  }
  const simpan = () => {
    let logBefore = localStorage.getItem('keranjang');
    let log = [
      dataProduk[0].nama,
      jumlah,
      dataProduk[0].gambar,
      totalHarga,
    ]
    if (logBefore) {
      let logTemp = JSON.parse(logBefore);
      logTemp.push(log);
      localStorage.setItem('keranjang', JSON.stringify(logTemp));
    }
    else {
      localStorage.setItem('keranjang', JSON.stringify([log]));
    }
  }
  return (
    <>
      <section className="container pb-2">
        <div>
          <img width="100%" className="rounded" style={{ objectFit: "cover", maxHeight: "200px" }} src={`/images/produk/${dataProduk[0].gambar}.png`} alt="" />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div>
            <h2 className="fs-4 mt-2 mb-0">{dataProduk[0].nama}</h2>
          </div>
          <div className="align-self-center">
            <BsFillStarFill color="#FFC700" />
            <BsFillStarFill color="#FFC700" />
            <BsFillStarFill color="#FFC700" />
            <BsFillStarFill color="#FFC700" />
            <BsFillStarFill color="#FFC700" />
            <span className="align-self-center" style={{ fontSize: "14px", color: "rgba(36, 35, 35, 0.8)", fontWeight: "600" }}> (5/5)</span>
          </div>
        </div>
        <section className="d-flex mb-2">
          <div className="m-0 d-flex">
            <img src={`/icon/toko.png`} className="align-self-center me-1" width="20px" height="20px" alt="" />
            <span className="fs-6 fw-semibold">Semarang</span>
          </div>
          <div className="ms-5 align-self-center">
            <span className="fst-italic">Panen Hari Ini</span>
          </div>
        </section>
        <div className="mb-3">
          <h2 className="fs-5 fw-semibold">Kontak Petani</h2>
          <div className="border border-2 rounded p-2 d-inline-block shadow-sm">
            <BsWhatsapp color="#28B73E" size="30px" />
          </div>
        </div>
        <div>
          <h2 className="fs-5 fw-bold">Deskripsi</h2>
          <p style={{ fontSize: "14px", color: "rgba(36, 35, 35, 0.8)" }}>{dataProduk[0].desc}</p>
        </div>
        <section>

        </section>
        <section >
          <h2 className="fs-5 fw-semibold">Hasil Panen Petani Lainnya</h2>
          <div className="grid">
            {
              data.map((d, key) => {
                return (
                  <div key={key} className='g-col-6'>
                    <CardProduk title={d.nama} farm={d.farm} panen={d.panen} stok={d.stok} img={d.gambar} />
                  </div>
                )
              })
            }
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default Produk;