import Slider from "../components/Slider";
import HeaderSection from "../components/HeaderSection";
import CardProduk from "../components/CardProduk";
import ProdukCategori from "../components/ProdukCategori";
const Home = () => {
  return (
    <main className='mt-2'>
      <Slider />
      <section style={{ overflowX: "hidden" }}>
        <HeaderSection title="Kategori" />
        <div className='d-flex'>
          <div className='d-flex flex-row'>
            <ProdukCategori />
            <ProdukCategori />
            <ProdukCategori />
            <ProdukCategori />
            <ProdukCategori />
          </div>
        </div>
      </section>
      <section>
        <HeaderSection title="Populer" />
        <div className='row container p-0 m-0'>
          <div className='col-6 p-2'>
            <CardProduk />
          </div>
          <div className='col-6 p-2'>
            <CardProduk />
          </div>
        </div>
      </section>
    </main>
  )
}
export default Home;