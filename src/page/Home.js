import Slider from "../components/Slider";
import HeaderSection from "../components/HeaderSection";
import CardProduk from "../components/CardProduk";
import ProdukCategori from "../components/ProdukCategori";
const Home = () => {
  const data = [
    {
      nama: "Tomat",
      harga: "6000",
      gambar: "tomat"
    },
    {
      nama: "Jeruk",
      harga: "8000",
      gambar: "jeruk"
    },
    {
      nama: "Cabai",
      harga: "7000",
      gambar: "cabai"
    },
    {
      nama: "Mangga",
      harga: "9000",
      gambar: "mangga",
    },

  ]
  return (
    <main className='mt-2'>
      <Slider />
      <section style={{ overflowX: "hidden" }}>
        <HeaderSection title="Kategori" />
        <div>
          <div className='d-flex justify-content-around flex-row'>
            <ProdukCategori gambar="buah" nama="Pertanian" />
            <ProdukCategori gambar="RobotPabrik" nama="Alat Manufaktur" />
          </div>
        </div>
      </section>
      <section>
        <HeaderSection title="Populer" />
        <div className='row container p-0 m-0'>
          {
            data.map((d, key) => {
              return (
                <div key={key} className='col-6 p-2'>
                  <CardProduk title={d.nama} harga={d.harga} img={d.gambar} />
                </div>
              )
            })
          }
        </div>
      </section>
    </main>
  )
}
export default Home;