import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Belanja from "./page/Belanja"
import Keranjang from "./page/Keranjang"
import Edukasi from "./page/Edukasi"
import Webinar from "./page/Webinar"
import Materi from "./page/Materi"
import Akun from "./page/Akun"
import Produk from "./components/Produk"

import Layout from "./layout/Layout"
import LayoutProduk from "./layout/LayoutProduk"
import LayoutKeranjang from "./layout/LayoutKeranjang"

function App() {
  return (
    <div className="App border border-2 position-relative min-vh-100">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beranda" element={<Home />} />
          <Route path="belanja" element={<Belanja />} />
          <Route path="akun" element={<Akun />} />
          <Route path="edukasi" element={<Edukasi />} >
            <Route index element={<Webinar />} />
            <Route path='webinar' element={<Webinar />} />
            <Route path="materi" element={<Materi />} />
          </Route>
        </Route>
        <Route path='/hello-app' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beranda" element={<Home />} />
          <Route path="belanja" element={<Belanja />} />
          <Route path="akun" element={<Akun />} />
          <Route path="edukasi" element={<Edukasi />} >
            <Route index element={<Webinar />} />
            <Route path='webinar' element={<Webinar />} />
            <Route path="materi" element={<Materi />} />
          </Route>
        </Route>
        <Route path='/hello-app/produk/' element={<LayoutProduk />}>
          <Route path=':produk' element={<Produk />} />
        </Route>
        <Route path='/hello-app/keranjang' element={<LayoutKeranjang />}>
          <Route index element={<Keranjang />} />
        </Route>
      </Routes >
    </div>


  );
}

export default App;
