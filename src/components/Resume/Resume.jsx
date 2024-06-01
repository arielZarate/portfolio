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
            {/*
            <p>
              Mis experiencias en programación y habilidades en el desarrollo de
              software
            </p>
        */}
          </div>

          <div className="grid grid-col-1  sm:grid-cols-1 md:grid-cols-2 md:space-x-10  lg:grid-cols-3  lg:space-x-14  gap-y-5  gap-x-5">
            <div>
              <ResumenTitle>Educación</ResumenTitle>
              <ResumeItem>
                <h4>
                  Henry Bootcamp
                  <span className=" text-sm font-light  ml-0.5 rounded-md">
                    (2022-2023)
                  </span>
                </h4>

                <p>
                  <em>Desarrollo web fullstack MERN | PERN</em>
                </p>

                <a href="https://www.soyhenry.com/" target="blank">
                  URL:{" "}
                  <strong className="text-indigo-700">www.henry.com</strong>
                </a>
              </ResumeItem>{" "}
              <ResumeItem>
                <h4>
                  UTN-BA
                  <span className=" text-sm font-light  ml-0.5 rounded-md">
                    (2020-2021)
                  </span>
                </h4>

                <p>
                  <em>Desarrollo web fullstack MEAN</em>
                </p>

                <a
                  href="https://sceu.frba.utn.edu.ar/e-learning"
                  target="blank"
                >
                  URL:
                  <strong className="text-indigo-700">www.utn-ba.com</strong>
                </a>
              </ResumeItem>{" "}
              <ResumeItem>
                <h4>
                  Java en Udemy
                  <span className=" text-sm font-light  ml-0.5 rounded-md">
                    (2018-2020)
                  </span>
                </h4>

                <p>
                  <em>Plataforma Udemy, E-learning </em>
                </p>
                <p className="my-1">
                  Fundamentos del lenguaje Java,POO, creacion de aplicaciones
                  web con patrones y base de datos con jdbc
                </p>
                <p>mentor: ing ubaldo acosta</p>
                <a
                  href="https://www.udemy.com/user/ubaldoacosta/"
                  target="blank"
                >
                  URL:
                  <strong className="text-indigo-700">
                    Udemy ubaldo acosta
                  </strong>
                </a>
              </ResumeItem>
              <ResumeItem>
                <h4>
                  Universidad Tecnologica Nacional, Cordoba
                  <span className=" text-sm font-light  ml-0.5 rounded-md">
                    (2012-2015)
                  </span>
                </h4>

                <p>
                  <em>Ingeniería en Sistemas de la Información </em>
                </p>

                <a href="https://www.frc.utn.edu.ar/" target="blank">
                  URL:
                  <strong className="text-indigo-700">www.utn-frc.com</strong>
                </a>
              </ResumeItem>
              <ResumenTitle>Mas cursos 😀</ResumenTitle>
              <ResumeItem>
                <p className="my-2 ">
                  <em>
                    Como parte de mi especializacion en backend y frontend,
                    participo en <strong>webinars</strong> de disntintos canales
                    de discord o sigo ciertos <strong>tutoriales </strong>
                    online de distintos canales de tecnologia de youtube como:
                    <ul>
                      <li className="flex flex-row ">
                        <FaCircle className="mt-1 mr-2 text-black" size={10} />
                        Jon Mircha
                      </li>
                      <li className="flex flex-row ">
                        <FaCircle className="mt-1 mr-2 text-black" size={10} />
                        Midulive
                      </li>
                      <li className="flex flex-row ">
                        <FaCircle className="mt-1 mr-2 text-black" size={10} />
                        Bluuweb
                      </li>
                      <li className="flex flex-row ">
                        <FaCircle className="mt-1 mr-2 text-black" size={10} />
                        Pildoras Informaticas
                      </li>
                      <li className="flex flex-row ">
                        <FaCircle className="mt-1 mr-2 text-black" size={10} />
                        Fazt Code
                      </li>
                    </ul>
                  </em>
                </p>
              </ResumeItem>
            </div>

            {/**fin */}
            <div>
              <ResumenTitle>Experiencia Profesional</ResumenTitle>
              <ResumeItem className="">
                <h4>Proyecto Personal</h4>
                <div>
                  <h5>
                    <em>Adopta tu amigo peludo(2024)</em>
                  </h5>

                  <p>
                    <em>
                      Proyecto comunitario para la busqueda y adopcion de
                      mascotas
                    </em>
                    <p className="text-sm m-1 text-green-700">
                      proyecto en proceso creado con nextjs
                    </p>

                    <ul>
                      <li className="text-blue-600 font-bold text-sm">
                        <a href="https://adopta.vercel.app/" target="blank">
                          Proyecto Adopta
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </ResumeItem>
              <ResumeItem className="">
                <h4>Freelancer</h4>
                <div>
                  <h5>
                    <em>Electroventas(2023)</em>
                  </h5>

                  <p>
                    <em>
                      Proyecto e-ccomerce para la venta de productos electricos
                    </em>

                    <ul>
                      <li className="text-blue-600 font-bold text-sm">
                        <a
                          href="https://electroventas.vercel.app/"
                          target="blank"
                        >
                          Proyecto Electroventas
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </ResumeItem>
              <ResumeItem>
                <h4>FullStack MERN</h4>

                <div>
                  <h5>
                    <em>E-commerce ChicCloset(2023)</em>
                  </h5>

                  <p>
                    <em>Proyecto e-ccomerce para la venta de indumentaria</em>
                    <ul className="text-sm">
                      <li>
                        Creación de interfaces y formularios intuitivos en el
                        front-end
                      </li>
                      <li>
                        Implementación de integración con Cloudinary para el
                        control de imágenes.
                      </li>
                      <li>
                        Desarrollo de un dashboard de usuarios para
                        administración.
                      </li>
                    </ul>
                  </p>
                </div>
              </ResumeItem>

              <ResumeItem className="">
                <h5>Otros Proyectos en GitHub</h5>
                <div>
                  <p>
                    <ul className="text-[12px]">
                      <li className="text-sky-700 font-bold ">
                        <a
                          href="https://github.com/arielZarate/restApi-node_y_express-jwt_y_roles-mongodb"
                          target="blank"
                        >
                          💥 <em>proyecto authentication-jwt-roles-mongodb</em>
                        </a>
                      </li>
                      <li className="text-sky-700 font-bold ">
                        <a
                          href="https://github.com/arielZarate/upload-images-claoudinary-nextjs-typescript"
                          target="blank"
                        >
                          💥 <em>proyecto uplaod-images-nextjs-cloudinary</em>
                        </a>
                      </li>
                      <li className="text-sky-700 font-bold ">
                        <a
                          href=" https://github.com/arielZarate/apiDogWithTypescript_NextJx"
                          target="blank"
                        >
                          💥 <em>proyecto apiDog-typescript-nextJs</em>
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
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
    margin-bottom: 5px;
  }

  & h5 {
    font-size: 16px;
    //   background: #e4edf9;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 5px;
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

/*
<div>
              <ResumenTitle>Educacion</ResumenTitle>
              <ResumeItem>
                <h4>Desarrollador Web FullStack</h4>
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
                  Desarrollador FullStack MERN
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
*/
