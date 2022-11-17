import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Belanja from "./page/Belanja"
import Keranjang from "./page/Keranjang"
import Produk from "./components/Produk"

import Layout from "./layout/Layout"
import LayoutProduk from "./layout/LayoutProduk"

function App() {
  return (
    <div className="App border border-2 position-relative min-vh-100">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beranda" element={<Home />} />
          <Route path="belanja" element={<Belanja />} />
        </Route>
        <Route path='produk' element={<LayoutProduk />}>
          <Route path=':produk' element={<Produk />} />
        </Route>
        <Route path='keranjang' element={<LayoutProduk />}>
          <Route index element={<Keranjang />} />
        </Route>
      </Routes >
    </div>


  );
}

export default App;
