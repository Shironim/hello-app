const ProdukCategori = ({ gambar, nama }) => {
  return (
    <div className='d-flex flex-column align-items-center me-3'>
      <img src={`/images/${gambar}.png`} height="60px" width="60px" className="rounded" alt="" />
      <span>
        {nama}
      </span>
    </div>
  )
}
export default ProdukCategori;