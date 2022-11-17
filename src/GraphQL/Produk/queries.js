import { gql } from '@apollo/client';

export const SUBS_PRODUK = gql`
subscription MySubscription {
  hellotani_produk {
    deskripsi
    gambar
    nama
    harga
    id_kategori
    id_produk
  }
}
`
export const GET_DATA_PRODUK = gql`
query getProduk($gambar: String) {
  hellotani_produk(where: {gambar: {_eq: $gambar}}) {
    deskripsi
    gambar
    harga
    id_kategori
    id_produk
    bestSeller
  }
}
`