import { Link } from "react-router-dom";

//=================================
import landing1 from "../../assets/portfolio/ChicCloset/landing.png";
import landing2 from "../../assets/portfolio/Videogames/landing.png";
import landing3 from "../../assets/portfolio/pet/fron1.png";
//====================================

export default function Portfolio() {
  return (
    <>
      {/* ======= Portfolio Section =======  */}
      <section id="portfolio" className=" my-10 container mx-auto ">
        <div className="flex flex-col mx-4 md:mx-4">
          <div className="ml-0 xl:ml-64">
            <h2 className="text-2xl font-bold text-sky-900">Portfolio</h2>

            <p className="my-4">
              Echa un vistazo a mi portafolio y descubre todo lo que puedo
              hacer. Con proyectos de diseño web, aplicaciones móviles y
              tarjetas interactivas todo responsive.
            </p>
          </div>

          {/* card */}

          <div className=" grid grid-col  sm:grid-cols-1 md:grid-cols-3 gap-2 ">
            <div className="card w-64 bg-base-100 shadow-lg ml-0 xl:ml-64">
              <figure>
                <img
                  src={landing3}
                  alt="pet adoption"
                  className="w-full h-auto object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Adopta mascotas
                  <div className="badge badge-info">Personal</div>
                </h2>
                <p>proyecto comunitario</p>
                <div className="card-actions justify-between">
                  <button className="rounded-2xl bg-green-700 p-1">
                    <span className="text-white">
                      <a href="https://adopta.vercel.app/" target="blank">
                        ver pagina
                      </a>
                    </span>
                  </button>
                  <button className="rounded-2xl bg-sky-700 p-1">
                    <span className="text-white">
                      <a
                        href="https://github.com/arielZarate/adopta-proyectoIntegrador"
                        target="blank"
                      >
                        ver codigo
                      </a>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card w-64 bg-base-100 shadow-lg ml-0 xl:ml-64">
              <figure>
                <img
                  src={landing1}
                  alt="chicCloset"
                  className="w-full h-auto object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  ChicCloset
                  <div className="badge badge-info">Henry</div>
                </h2>
                <p>E-Commerce de prendas</p>
                <div className="card-actions justify-end">
                  <button className="rounded-2xl bg-sky-700 p-2">
                    <span className="text-white">
                      <Link to="/detailChic">ver Proyecto</Link>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card w-64 bg-base-100 shadow-lg ml-0 xl:ml-64 ">
              <figure>
                <img
                  src={landing2}
                  alt="chicCloset"
                  className="w-full h-auto  object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  ChicCloset
                  <div className="badge badge-info">Henry</div>
                </h2>
                <p>Proyecto creado usando la api de videogames</p>

                <div className="card-actions justify-end">
                  <button className="rounded-2xl bg-sky-700 p-2">
                    <span className="text-white">
                      <Link to="/DetailGames">ver Proyecto</Link>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
    </>
  );
}
