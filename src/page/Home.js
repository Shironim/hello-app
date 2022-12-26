import Slider from "../components/Slider";
import HeaderSection from "../components/HeaderSection";
import CardProduk from "../components/CardProduk";
// import ProdukCategori from "../components/ProdukCategori";
const Home = () => {
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
  return (
    <main className='mt-2'>
      <Slider />
      <section style={{ overflowX: "hidden" }}>
        {/* <HeaderSection title="Kategori" /> */}
        {/* <div>
          <div className='d-flex justify-content-around flex-row'>
            <ProdukCategori gambar="buah" nama="Pertanian" />
            <ProdukCategori gambar="RobotPabrik" nama="Alat Manufaktur" />
          </div>
        </div> */}
      </section>
      <section className="pb-5">
        <HeaderSection title="Populer" />
        <div className='grid'>
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
    </main>
  )
}
export default Home;