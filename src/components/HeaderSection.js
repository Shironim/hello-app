const HeaderSection = ({ title }) => {
  return (
    <div className="d-flex justify-content-between mt-3 mb-2">
      <h2 className='fs-5 m-0 fw-bold' style={{ color: "rgba(75, 75, 75, 0.9)" }}>{title}</h2>
      <p className="align-self-center m-0" style={{ fontSize: "12px", color: "#FC6A00" }}>lainnya</p>
    </div>
  )
}
export default HeaderSection;
