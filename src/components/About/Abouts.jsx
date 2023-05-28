import React from "react";

import { FcNext } from "react-icons/fc";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";
import Skill from "../Skill/Skill";

//=========================

import perfil from "../../assets/ariel.jpg";

export default function Abouts() {
  return (
    <>
      {/*  ======= About Section ======= */}

      {/* xl:ml-64 */}
      <section id="about" className="container mx-auto  my-10 ">
        <div className=" flex flex-col  mx-5 ">
          <div className="ml-0 xl:ml-64">
            <h2 className="text-2xl font-bold text-sky-900">Acerca de mi</h2>
            <p className="text-lg">{/* SUBITULE */}</p>
          </div>
        </div>

        {/* taild */}

        <div className="container  mt-5 mx-5">
          <div className="ml-0 xl:ml-64">
            <h3 className="text-2xl">
              Ariel Zarate Desarrollador Fullstack.
              {/* Web Front-End &amp; Back-End */}
            </h3>
            <p>Informacion Personal</p>

            {/* ROW /COLUMN*/}

            <div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
              <ListContainer>
                <ul>
                  <li>
                    <FcNext className="mr-2 mt-1" />
                    <strong>Fecha/Nacim:</strong>
                    <span>7 de enero 1987</span>
                  </li>
                  <li>
                    <FcNext className="mr-2 mt-1" />
                    <strong>Telefono:</strong> <span>+54 3512266656</span>
                  </li>
                  <li>
                    <FcNext className="mr-2 mt-1" />
                    <strong>Ciudad:</strong> <span>Cordoba, Argentina</span>
                  </li>
                </ul>
              </ListContainer>
              <ListContainer>
                <ul>
                  <li>
                    <FcNext className="mr-2 mt-1" />
                    <strong>Grado developer:</strong>
                    <span>Junior/Semisenior</span>
                  </li>
                  <li>
                    <FcNext className="mr-2 mt-1" />
                    <strong>Correo:</strong> <span>arieltecnico@gmail.com</span>
                  </li>
                  <li>
                    <FcNext className="mr-2 mt-1" />
                    <strong>Freelance:</strong> <span>disponible</span>
                  </li>
                </ul>
              </ListContainer>

              <div className="mr-50 ">
                <div className=" float-left">
                  <img
                    src={perfil}
                    className=" w-40 h-40 my-2 rounded-full"
                    alt=""
                    style={{
                      border: "4px solid #5687c3",
                    }}
                  />
                </div>
                <p className="w-100">
                  Como desarrollador fullstack, tengo experiencia en una
                  variedad de tecnologías y herramientas. Estoy especializado en
                  Node.js, Express.js, React.js, Sequelize, HTML, CSS,
                  JavaScript y MongoDB. He trabajado en proyectos tanto en el
                  lado del servidor como en el lado del cliente, lo que me ha
                  permitido adquirir un conocimiento profundo de la creación de
                  aplicaciones web completas. Además de mis habilidades
                  técnicas, también valoro el trabajo en equipo y la
                  colaboración. Disfruto trabajando en proyectos en los que
                  puedo contribuir con mi experiencia y aprender de mis
                  compañeros de equipo. Tengo la capacidad de comunicarme
                  efectivamente y comprender los requisitos del proyecto para
                  ofrecer soluciones eficientes y de alta calidad. Mi objetivo
                  como desarrollador es crear aplicaciones web intuitivas,
                  escalables y de alto rendimiento que brinden una gran
                  experiencia de usuario. Estoy constantemente aprendiendo y
                  actualizando mis conocimientos para estar al tanto de las
                  últimas tendencias y tecnologías en el desarrollo web. Si
                  estás interesado en colaborar en un proyecto o tienes alguna
                  pregunta, no dudes en contactarme. Estoy emocionado de seguir
                  creciendo como desarrollador y enfrentar nuevos desafíos.
                </p>
              </div>

              <div className="float-rigth ">
                <a
                  href="https://www.dropbox.com/s/b1eo8sl8kbrfsjz/fullStack_ArielZarate%20%281%29.pdf?dl=1"
                  /*  target="blank" */
                  download
                  className="flex items-center justify-center w-40 h-12 bg-blue-700 text-white rounded-md hover:bg-red-600 mt-5 ml-10"
                >
                  <FaDownload className="text-white text-md" />
                  <span className="ml-1">Descargar CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  End About Section */}

      <Skill />
    </>
  );
}

/* Style-components */

const ListContainer = styled.div`
  & > ul > li {
    display: flex;
    text-align: center;
    margin: 10px;
  }
`;
