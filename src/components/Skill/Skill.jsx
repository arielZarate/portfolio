import React from "react";
import { styled } from "styled-components";

export default function Skill() {
  return (
    <>
      {/*  ======= Skills Section ======= */}
      <section id="skills" className="container mx-auto mt-10 bg-sky-50">
        {/*  flex-col sm:flex-col */}
        <div className="flex flex-col mx-5">
          <div className="ml-0 xl:ml-64">
            <h2 className="text-2xl font-bold text-sky-900 flex flex-col xl:">
              Habilidades
            </h2>
            <p>
              Soy un desarrollador full-stack con experiencia en tecnologías
              como React, Node.js y bases de datos SQL y NoSQL. Poseo
              habilidades técnicas sólidas para construir aplicaciones web
              escalables y funcionales. Además, soy comunicativo y trabajo bien
              en equipo, lo que me permite colaborar eficazmente en proyectos y
              adaptarme a diferentes desafíos. Mi enfoque orientado a la
              resolución de problemas y atención al detalle garantiza la entrega
              de soluciones de calidad
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-2/3 ml-0 xl:ml-64  my-10 gap-7">
            <div className="h-16">
              <span className="text-xs uppercase font-semibold text-gray-800">
                HTML CSS javascript{" "}
                <span className="float-right not-italic font-bold">75%</span>
              </span>
              <div className="bg-blue-200 h-4 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500  transition-all  animate-progress hover:animate-progress-hover"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="h-16">
              <span className="text-xs uppercase font-semibold text-gray-800">
                Comunicaciion y Trabajo en Equipo{" "}
                <span className="float-right not-italic font-bold">80%</span>
              </span>
              <div className="bg-blue-200 h-4 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500  transition-all  animate-progress hover:animate-progress-hover"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="h-16">
              <span className="text-xs uppercase font-semibold text-gray-800">
                NodeJs React
                <span className="float-right not-italic font-bold">85%</span>
              </span>
              <div className="bg-blue-200 h-4 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500  transition-all  animate-progress hover:animate-progress-hover"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="h-16">
              <span className="text-xs uppercase font-semibold text-gray-800">
                Resolucion de Problemas
                <span className="float-right not-italic font-bold">75%</span>
              </span>
              <div className="bg-blue-200 h-4 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500  transition-all  animate-progress hover:animate-progress-hover"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="h-16">
              <span className="text-xs uppercase font-semibold text-gray-800">
                aprendizaje en nuevas tecnologias
                <span className="float-right not-italic font-bold">75%</span>
              </span>
              <div className="bg-blue-200 h-4 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500  transition-all  animate-progress hover:animate-progress-hover"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="h-16">
              <span className="text-xs uppercase font-semibold text-gray-800">
                Pensamiento critico
                <span className="float-right not-italic font-bold">95%</span>
              </span>
              <div className="bg-blue-200 h-4 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500  transition-all  animate-progress hover:animate-progress-hover"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div className="h-16">
              <span className="text-xs uppercase font-semibold text-gray-800">
                Base de Datos y servidores
                <span className="float-right not-italic font-bold">70%</span>
              </span>
              <div className="bg-blue-200 h-4 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500  transition-all  animate-progress hover:animate-progress-hover"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="h-16">
              <span className="text-xs uppercase font-semibold text-gray-800">
                Adaptabilidad
                <span className="float-right not-italic font-bold">75%</span>
              </span>
              <div className="bg-blue-200 h-4 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500  transition-all  animate-progress hover:animate-progress-hover"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  End Skills Section */}
    </>
  );
}
