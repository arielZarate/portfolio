import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

//=================================
import landing1 from "../../assets/portfolio/ChicCloset/landing.png";
import landing2 from "../../assets/portfolio/Videogames/landing.png";

//====================================

export default function Portfolio() {
  return (
    <>
      {/* ======= Portfolio Section =======  */}
      <section id="portfolio" className="container mx-auto  my-10">
        <div className="flex flex-col mx-5">
          <div className="ml-0 xl:ml-64">
            <h2 className="text-2xl font-bold text-sky-900">Portfolio</h2>

            <p className="my-4">
              Echa un vistazo a mi portafolio y descubre todo lo que puedo
              hacer. Con proyectos de diseño web, aplicaciones móviles y
              tarjetas interactivas todo responsive.
            </p>
          </div>

          {/* card */}

          <div className="grid grid-col-1  sm:grid-cols-1 md:grid-cols-2 md:space-x-10    gap-y-5  gap-x-5">
            <div className="card w-84 bg-base-100 shadow-lg ml-0 xl:ml-64">
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

            <div className="card w-84 bg-base-100 shadow-lg ml-0 xl:ml-64 ">
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
