import { useEffect, useState } from "react";
import CardProduk from "../components/CardProduk";
const Belanja = () => {
  const [produk, setProduk] = useState()
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
    {
      nama: "Sawi",
      gambar: "sawi",
      farm: "Ungaran",
      panen: 1,
      stok: "70Kg"
    },
    {
      nama: "Timun",
      gambar: "timun",
      farm: "Ungaran",
      panen: 3,
      stok: "40Kg"
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
    <section className="mt-2 pb-5">
      <div className='grid'>
        {
          produk?.map((d, key) => {
            return (
              <div key={key} className='g-col-6'>
                <CardProduk title={d.nama} farm={d.farm} panen={d.panen} stok={d.stok} img={d.gambar} />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
export default Belanja;