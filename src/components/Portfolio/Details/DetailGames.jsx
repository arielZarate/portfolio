import { Link } from "react-router-dom";
import Footer from "../../Layout/Footer";

//=====================================

import videogames3 from "../../../assets/portfolio/Videogames/videogames3.png";
import videogames from "../../../assets/portfolio/Videogames/videogames.png";
import videogames6 from "../../../assets/portfolio/Videogames/videogames6.png";
import landing from "../../../assets/portfolio/Videogames/landing.png";
//=====================================
export default function DetailGames() {
  return (
    <>
      <div className="bg-white mx-5 mt-6">
        <div className="pt-6 ml-0 xl:ml-64">
          <div className="navbar bg-base-200 mt-0 ">
            <div className="flex-1">
              <h2 className="text-2xl text-gray-400 ml-5">
                Detalle de proyecto
              </h2>
            </div>

            <div className="flex flex-row justify-between items-center mx-10">
              <ol>
                <li>
                  <a href="index.html">
                    <span className="text-blue-400 font-bold">
                      <Link to="/">Home</Link>
                    </span>
                    /Portfoio Details
                  </a>
                </li>
              </ol>
            </div>
          </div>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={videogames3}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-2 overflow-hidden rounded-lg">
                <img
                  src={landing}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-2 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={videogames}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={videogames6}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Api videogames
              </h1>
            </div>

            {/* Options */}
            <div className="mt-5 lg:row-span-3 lg:mt-0">
              <h2 className="text-2xl tracking-tight text-gray-900">
                Informacion de Projecto
              </h2>

              <ul className="my-4">
                <li>
                  <strong>Stack </strong>:PERN (Postgres-Express-React-Node)
                </li>
                <li>
                  <strong>Cliente </strong>: Henry
                </li>
                <li>
                  <strong>Fecha Projecto </strong>: 27 febrero, 2023
                </li>
                {/* <li>
                <strong>URL App</strong>:
                <a href="https://chiccloset-service.web.app/" target="_blank">
                  chiccloset-service.web.app
                </a>
              </li> */}
                <li>
                  <strong>Repositorio de projecto </strong>:
                  <a
                    href="https://github.com/arielZarate/pi-games"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-sky-800 font-semibold"
                  >
                    GitHub Project
                  </a>
                </li>
              </ul>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="text-2xl">Descripcion</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    La aplicación construida con el stack PERN (PostgreSQL,
                    Express, React y Node.js) utiliza la API de raw.io para
                    obtener datos. Con esta aplicación, los usuarios pueden
                    realizar diversas operaciones, como ver, crear, editar y
                    eliminar elementos almacenados en la base de datos de
                    PostgreSQL. La interfaz de usuario está desarrollada con
                    React, mientras que Express y Node.js manejan el
                    enrutamiento y la lógica del servidor. La API de raw.io
                    proporciona los datos necesarios para mostrar y manipular la
                    información en la aplicación, creando así una experiencia
                    interactiva y dinámica para los usuarios
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden">
        <Footer />
      </div>
    </>
  );
}
