import React from "react";

import { styled } from "styled-components";
import { FaCircle } from "react-icons/fa";

function Resume() {
  return (
    <>
      {/* ======= Resume Section =======  */}
      <section id="resume" className="container mx-auto mt-10">
        <div className="flex flex-col  xl:ml-64  mx-5 my-10">
          <div>
            <h2 className="text-2xl font-bold text-sky-900">Resumen</h2>
            <p>
              Mis experiencias en programación y habilidades en el desarrollo de
              software
            </p>
          </div>

          <div className="grid grid-col-1  sm:grid-cols-1 md:grid-cols-2 md:space-x-10  lg:grid-cols-3  lg:space-x-14  gap-y-5  gap-x-5">
            <div>
              <ResumenTitle>Educacion</ResumenTitle>
              <ResumeItem>
                <h4>
                  Desarrollador Web FullStack PERN{/* &amp; Graphic Design */}
                </h4>
                <h5>2022 - 2023</h5>
                <p>
                  <em>Instituto de Desarrollo Web Henry, Bootcamp,Argentina</em>
                </p>
                <p className="my-1">
                  Henry es una reconocida institución educativa enfocada en la
                  formación de talentosos desarrolladores de software. Con un
                  enfoque práctico y basado en proyectos reales, la academia
                  brinda a sus estudiantes las habilidades y conocimientos
                  necesarios para destacar en la industria tecnológica. Con un
                  equipo de instructores experimentados y una comunidad
                  colaborativa, la Academia Henry ne ha brindado la oportunidad
                  de convertirme en un profesional.
                </p>
                <a href="https://www.soyhenry.com/" target="blank">
                  URL: <strong className="text-green-700">www.henry.com</strong>
                </a>
              </ResumeItem>
              <ResumeItem>
                <h4>
                  Desarrollador FullStack MERN{/* &amp; Graphic Design */}
                </h4>
                <h5>2020 - 2021</h5>
                <p>
                  <em>
                    Diplomatura en Programador FullStack
                    UTN-BA,e-Learning,Argentina
                  </em>
                </p>
                <p className="my-1">
                  El curso de programación Fullstack Node.js Angular en la
                  UTN-BA es una excelente oportunidad para aquellos interesados
                  en convertirse en desarrolladores web completos. A través de
                  un enfoque práctico y riguroso, el curso brinda a los
                  estudiantes los fundamentos de Node.js y Angular, dos
                  tecnologías ampliamente utilizadas en la industria. Con el
                  apoyo de profesores altamente calificados y recursos
                  actualizados, los participantes adquieren las habilidades
                  necesarias para construir aplicaciones web dinámicas y
                  escalables. Al finalizar el curso, los estudiantes estarán
                  preparados para enfrentar desafíos del mundo real y abrirse
                  camino en el campo de la programación Fullstack.
                </p>
                <a
                  href="https://sceu.frba.utn.edu.ar/e-learning"
                  target="blank"
                >
                  URL:{" "}
                  <strong className="text-green-700">www.utn-ba.com</strong>
                </a>
              </ResumeItem>
              <ResumeItem>
                <h4>Universidad Tecnologica Nacional,Cordoba,Argentina</h4>
                <h5>2015-suspenso</h5>
                <p>
                  <em>Ingenieria en Sistemas de la informacion</em>
                </p>
                <p className="my-1">
                  La UTN Córdoba ofrece una destacada carrera de Ingeniería en
                  Sistemas, formando profesionales altamente capacitados en el
                  diseño y desarrollo de sistemas informáticos. Con un enfoque
                  integral, el programa de estudios abarca áreas como
                  programación, bases de datos, redes, inteligencia artificial y
                  gestión de proyectos. Los estudiantes de Ingeniería en
                  Sistemas de la UTN Córdoba se benefician de un entorno
                  académico de calidad, con docentes especializados y modernas
                  instalaciones, preparándolos para enfrentar los desafíos
                  tecnológicos y destacarse en la industria
                </p>
                <a href="https://www.frc.utn.edu.ar/" target="blank">
                  URL:{" "}
                  <strong className="text-green-700">www.utn-frc.com</strong>
                </a>
              </ResumeItem>
            </div>
            <div>
              <ResumenTitle>Resumen</ResumenTitle>
              <ResumeItem>
                <h4>Ariel Zarate</h4>

                <p className="my-2 ">
                  <em>
                    Desarrollador FullStack especializado en backend y frontend.
                    Experiencia en todas las etapas del ciclo de desarrollo de
                    software. Me recibi como fullstack PERN y estoy
                    especializado en lenguajes de programación, incluidos HTML5,
                    NodeJs , JavaScript, CSS, MySQL, ReactJs ,Angular y mongoDB.
                    Poseo experiencia en frameworks como Angular 8, Material-UI
                    ,Taildwind, bootstrap.
                  </em>
                </p>
                <ul>
                  <li className="flex flex-row ">
                    <FaCircle className="mt-1 mr-2 text-blue-700" />
                    Cordoba cp 5022,Argentina
                  </li>
                  <li className="flex flex-row ">
                    <FaCircle className="mt-1 mr-2 text-blue-700" />
                    (351)2266656
                  </li>
                  <li className="flex flex-row ">
                    <FaCircle className="mt-1 mr-2 text-blue-700" />
                    arieltecnico@gmail.com
                  </li>
                  <li className="flex flex-row ">
                    <FaCircle className="mt-1 mr-2 text-blue-700" />
                    arielzarate_cba_12@hotmail.com
                  </li>
                </ul>
              </ResumeItem>
              <ResumenTitle>Experiencia Profesional</ResumenTitle>
              <ResumeItem className="">
                <h4>Freelancer</h4>
                <h5>2023 - Actualmente</h5>
                <p>
                  <em>Electroventas Proyecto Web con React-Nodejs-Mysql </em>
                </p>
                <ul>
                  <li>
                    Diseño y creacion de un proyecto web e-commerce para un
                    cliente /amigo
                  </li>
                  <li>
                    diseño y creacion de bd relacional integrando ORM sequelize
                  </li>
                  <li>
                    diseñar la estructura de la api con NodeJs , utilizando el
                    patro MVC ,
                  </li>
                  <li>
                    Inplementacion de seguridad a traves de json web token ,
                  </li>
                  <li>
                    Creacion del Cliente con Tecnologia React JS utilizando el
                    framework css material-ui
                  </li>
                </ul>
              </ResumeItem>
              <ResumeItem>
                <h4>FullStack MERN</h4>
                <h5>marzo 2023 - mayo 2023</h5>
                <p>
                  <em>E commerce ChicCloset </em>
                </p>
                <ul>
                  <li>
                    Diseño y creacion de formularios con reac-hook-form
                    responsives
                  </li>
                  <li>
                    Integracion de cloudinary como bucket de almacenamiento
                  </li>
                  <li>
                    Creacion de tablas de usuario para la dashboar y el conntrol
                    de usuarios por parte del admin
                  </li>
                </ul>
              </ResumeItem>
            </div>
          </div>
        </div>
      </section>
      {/* End Resume Section */}
    </>
  );
}

export default Resume;

/* styled component */

const ResumenTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #050d18;
`;
const ResumeItem = styled.div`
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #1f5297;
  position: relative;

  & h4 {
    line-height: 18px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    color: #050d18;
    margin-bottom: 10px;
  }

  & h5 {
    font-size: 16px;
    background: #e4edf9;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
  }
  & ul {
    padding-left: 20px;
  }

  & li {
    padding-bottom: 10px;
  }

  & ::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: #fff;
    border: 2px solid #1f5297;
  }
`;
