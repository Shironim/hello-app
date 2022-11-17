import CardProduk from "../components/CardProduk";

const Rekomendasi = () => {
  const data = [
    {
      nama: "Tomat",
      harga: "6000",
      gambar: "tomat"
    },
    {
      nama: "Kopi",
      harga: "9500",
      gambar: "kopi"
    },
    {
      nama: "Mangga",
      harga: "9000",
      gambar: "mangga",
    },
    {
      nama: "Jeruk",
      harga: "8000",
      gambar: "jeruk"
    },
  ]
  return (
    <section className="container">
      <h2 className="fs-5 fw-bold">Rekomendasi untukmu</h2>
      <section className="row">
        {
          data.map((d, key) => {
            return (
              <div key={key} className='col-6 p-2'>
                <CardProduk title={d.nama} harga={d.harga} img={d.gambar} />
              </div>
            )
          })
        }
      </section>
    </section>
  )
}
export default Rekomendasi;