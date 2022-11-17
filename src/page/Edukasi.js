import { Outlet } from "react-router-dom";
const Edukasi = () => {
  return (
    <section className="mt-3">
      <div className="d-flex justify-content-around">
        <button className="btn btn-primary">Webinar</button>
        <button className="btn btn-secondary">Materi</button>
      </div>
      <Outlet />
    </section>
  )
}

export default Edukasi;