import { BsFillStarFill } from "react-icons/bs"
import { BsPlusLg } from "react-icons/bs"
import { useEffect, useState } from "react"
import FooterProduk from "../components/FooterProduk";
import { useLocation } from "react-router-dom";
// Apollo Client
import { useSubscription, useQuery, useMutation } from '@apollo/client';
// Query
import { GET_DATA_PRODUK } from '../GraphQL/Produk/queries';

const Produk = () => {
  const data = [
    {
      nama: "Tomat",
      harga: 6000,
      gambar: "tomat",
      jenis: "pertanian",
      desc: `
      Tomat atau rangam adalah tumbuhan dari keluarga Solanaceae, tumbuhan asli Amerika Tengah dan Selatan, dari Meksiko sampai Peru. Tomat merupakan tumbuhan siklus hidup singkat, dapat tumbuh setinggi 1 sampai 3 meter
      -	Kalori : 20
      -	Air	: 87%
      -	Protein : 1 gram
      -	Karbohidrat : 4,2 gram
      -	Kadar gula    : 4,75 gram
      -	Serat              : 2,4 gram 
      -	Lemak            : 0,3 gram`
    },
    {
      nama: "Jeruk",
      harga: 8000,
      gambar: "jeruk",
      jenis: "pertanian",
      desc: `
      Jeruk Sweet Mandarin Sunpride merupakan jeruk varietas Rimau Gerga Lebong (RGL) yang banyak dikembangkan di Bengkulu. Sweet Mandarin (Gerga Lebong) merupakan salah satu unggulan komoditas prioritas nasional. Jeruk Rimau Gerga Lebong mempunyai  keunggulan  kompetitif,  yaitu  buahnya  berwarna  kuning-orange, berbuah sepanjang tahun, ukuran buah besar 200-350  gram, kadar sari buah tinggi dan mempunyai potensi pasar yang baik domestik maupun internasional.
      -	Kalori : 47
      -	Air	: 87%
      -	Protein : 0,9 gram
      -	Karbohidrat : 11,8 gram
      -	Kadar gula    : 9,4 gram
      -	Serat              : 2,4 gram 
      -	Lemak            : 0,1 gram`
    },
    {
      nama: "Mangga",
      harga: 9000,
      gambar: "mangga",
      jenis: "pertanian",
      desc: `
      Mangga atau mempelam adalah nama sejenis buah, demikian pula nama pohonnya. Mangga termasuk ke dalam genus Mangifera, yang terdiri dari 35-40 anggota dari famili Anacardiaceae. Nama "mangga" berasal dari bahasa Tamil, mankay, yang berarti man "pohon mangga" + kay "buah".
      -	Kalori : 59,8
      -	Kadar Air : 85%
      -	Protein : 0,8%
      -	Karbohidrat : 15 gram
      -	Kadar gula    : 14 gram
      -	Serat              : 1,6 gram 
      -	Lemak            : 0,6%`
    },
    {
      nama: "Cabai",
      harga: 7000,
      gambar: "cabai",
      jenis: "pertanian",
      desc: `
      Cabai adalah buah dan tumbuhan anggota genus Capsicum. Buahnya dapat digolongkan sebagai sayuran maupun bumbu, tergantung bagaimana pemanfaatannya. Sebagai bumbu, buah cabai yang pedas sangat populer di Asia Tenggara sebagai penguat rasa untuk makanan
      -	Kalori : 39,7
      -	Air	: 0,11%
      -	Protein : 1,9 gram
      -	Karbohidrat : 9 gram
      -	Kadar gula    : 5 gram
      -	Serat              : 1,4 gram 
      -	Lemak            : 10 gram`
    },
    {
      nama: "Strowberi",
      harga: 11000,
      gambar: "strowberi",
      jenis: "pertanian",
      desc: `
      Stroberi atau tepatnya stroberi kebun adalah sebuah varietas stroberi yang paling banyak dikenal di dunia. Seperti spesies lain dalam genus Fragaria, buah ini berada dalam keluarga Rosaceae.
      -	Kalori : 32
      -	Kadar Air : 90,95 gram 
      -	Protein : 0,8%
      -	Karbohidrat : 7,68 gram
      -	Kadar gula    : 4,66 gram
      -	Serat              : 2,6 %
      -	Lemak            : 7 %`
    },
    {
      nama: "Leci",
      harga: 11000,
      gambar: "leci",
      jenis: "pertanian",
      desc: `
      Leci atau Lici adalah buah-buahan dari genus Litchi yang tergolong familia lerak-lerakan Sapindaceae. Pohon lici tumbuh di iklim tropis.
      -	Kalori : 66
      -	Kadar Air : 82%
      -	Protein : 0,8%
      -	Karbohidrat : 16,5 gram
      -	Kadar gula    : 15,2 gram
      -	Serat              : 1,3 gram 
      -	Lemak            : 0,4 gram`
    },
    {
      nama: "Apel",
      harga: 10000,
      gambar: "apel",
      jenis: "pertanian",
      desc: `
      Apel merupakan jenis buah-buahan, atau buah yang dihasilkan dari pohon apel. Buah apel biasanya berwarna merah kulitnya jika masak dan, namun bisa juga kulitnya berwarna hijau atau kuning. Kulit buahnya agak lembek dan daging buahnya keras. Buah apel memiliki beberapa biji di dalamnya.
      -	Kalori : 52,1
      -	Kadar Air : 87,54%
      -	Protein : 0,3 gram
      -	Karbohidrat : 14 gram
      -	Kadar gula    : 10 gram
      -	Serat              : 2,4 gram 
      -	Lemak            : 0,2 gram
      `
    },
    {
      nama: "Kopi",
      harga: 9500,
      gambar: "kopi",
      jenis: "pertanian",
      desc: `
      Biji kopi adalah biji dari tumbuhan kopi dan merupakan sumber dari minuman kopi. Warna bijinya adalah putih dan sebagian besar berupa endosperma. Setiap buah umumnya memiliki dua biji. Buah yang hanya mengandung satu biji disebut dengan peaberry dan dipercaya memiliki rasa yang lebih baik.
      -	Kalori : 0,5
      -	Kadar Air : 10-12%
      -	Protein : 13-15%
      -	Karbohidrat : 0,5 gram
      -	Kadar gula    : 3-7%
      -	Serat              : 2 gram 
      -	Lemak            : 0,3%`
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
  const location = useLocation();
  const link = location.pathname.split("/");
  const produk = link[3];
  const dataProduk = data.filter((n) => {
    return n.gambar == produk
  })
  // console.log(produk)
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
  console.log(harga)
  const simpan = () => {
    let logBefore = localStorage.getItem('keranjang');
    let log = [
      dataProduk[0].nama,
      jumlah,
      dataProduk[0].gambar,
      totalHarga,
    ]
    if (jumlah > 0) {
      if (logBefore) {
        let logTemp = JSON.parse(logBefore);
        logTemp.push(log);
        localStorage.setItem('keranjang', JSON.stringify(logTemp));
      }
      else {
        localStorage.setItem('keranjang', JSON.stringify([log]));
      }
    }
  }
  return (
    <div>
      <div className="container pb-2">
        <div>
          <img width="100%" className="rounded" style={{ objectFit: "cover", maxHeight: "200px" }} src={`/hello-app/images/produk/${dataProduk[0].gambar}.png`} alt="" />
        </div>
        <div className="d-flex justify-content-between mb-3">
          <div>
            <h2 className="fs-4 mt-2 mb-0">{dataProduk[0].nama}</h2>
            <p className="fs-6 p-0 m-0">Rp. {dataProduk[0].harga}</p>

            <div>
              <BsFillStarFill color="#FFC700" />
              <BsFillStarFill color="#FFC700" />
              <BsFillStarFill color="#FFC700" />
              <BsFillStarFill color="#FFC700" />
              <BsFillStarFill color="#FFC700" />
            </div>
          </div>
          <div className="align-self-center">
            <div className="d-flex justify-content-end" style={{ width: "140px" }}>
              <button onClick={() => kurangProduk()} className="btn btn-primary p-1" style={{ width: "30px", backgroundColor: "#FC6A00", borderColor: "#FC6A00" }}>
                <span className="fs-5">-</span>
              </button>
              {
                dataProduk[0].jenis === "pertanian" ?
                  <div style={{ width: "60px" }} className="align-self-center mx-2 w-25">
                    {jumlah} Kg
                  </div>
                  :
                  <div style={{ width: "60px" }} className="align-self-center mx-2 w-25">
                    {jumlah}
                  </div>

              }
              <button onClick={() => tambahProduk()} className="btn btn-primary p-1" style={{ width: "30px", backgroundColor: "#FC6A00", borderColor: "#FC6A00" }}>
                <BsPlusLg color="#FFFFFF" size={16} />
              </button>
            </div>
          </div>
        </div>
        {
          dataProduk[0].jenis === "pertanian" ?
            <div>
              <h2 className="fs-6 fw-bold">Note</h2>
              <p style={{ fontSize: "12px", color: "rgba(36, 35, 35, 0.8)" }}><i>Hanya menerima pembelian > 20Kg</i></p>
            </div>
            :
            ""
        }
        <div>
          <h2 className="fs-5 fw-bold">Deskripsi</h2>
          <p style={{ fontSize: "12px", color: "rgba(36, 35, 35, 0.8)" }}>{dataProduk[0].desc}</p>
        </div>
        <section className="row container justify-content-between m-0 p-0">
          {
            data.map((d, key) => {
              return (
                <div key={key} className="col-4 px-2 m-0 mb-2">
                  <img src={`/hello-app/images/produk/${d.gambar}.png`} width="100%" height="60px" className="rounded" style={{ objectFit: "cover" }} alt="" />
                  <p className="m-0">{d.nama}</p>
                </div>
              )
            })
          }
        </section>
      </div>
      <FooterProduk totalHarga={totalHarga} jenis={dataProduk[0].jenis} simpan={simpan} />
    </div>
  )
}

export default Produk;