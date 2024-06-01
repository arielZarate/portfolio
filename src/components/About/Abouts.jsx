import { FcNext } from "react-icons/fc";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";

//=========================

import perfil from "../../assets/ariel.jpg";

export default function Abouts() {
  return (
    <>
      {/*  ======= About Section ======= */}

      <section id="about" className="container mx-auto  my-10 ">
        <div className=" flex flex-col  mx-5 ">
          <div className="ml-0 xl:ml-64">
            <h2 className="text-2xl font-bold text-sky-900">Acerca de mi</h2>
            <p className="text-lg">
              Desarrollador Fullstack con experiencia en Node.js, React |
              NextJs, Angular , y otras tecnologias .
            </p>
          </div>
        </div>

        <div className="container mt-5 mx-1 px-3 ">
          <div className="ml-0 xl:ml-64">
            <h3 className="text-2xl">
              Ariel Zarate{/* Web Front-End &amp; Back-End */}
            </h3>
            <p>Informacion Personal</p>

            <div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
              <ListContainer>
                <ul>
                  {/*  <li>
                    <FcNext className="mr-2 mt-1" />
                    <strong>Fecha/Nacim:</strong>
                    <span>7 de enero 1987</span>
                  </li> */}
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
                    <strong>Seniority: </strong>
                    <span className="ml-1">Jr</span>
                  </li>
                  <li>
                    <FcNext className="mr-2 mt-1" />
                    <strong>Correo: </strong>
                    <span className="ml-1">arieltecnico@gmail.com</span>
                  </li>
                  {/*
                    
                     <li>
                    <FcNext className="mr-2 mt-1" />
                    <strong>Freelance: </strong>{" "}
                    <span className="ml-1 text-green-600 front-bold">
                      disponible
                    </span>
                  </li>
                    */}
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
                  Soy desarrollador Fullstack con experiencia en Node.js,
                  Express.js, React.js, Sequelize, HTML, CSS, JavaScript y
                  MongoDB. He trabajado en proyectos tanto en el servidor como
                  en el cliente, adquiriendo un conocimiento integral del
                  desarrollo web.
                </p>
                <p className="w-100">
                  Valoro el trabajo en equipo y la colaboración, disfrutando de
                  contribuir con mi experiencia en equipos. Tengo la habilidad
                  de comunicarme efectivamente y entender los requisitos del
                  proyecto para ofrecer soluciones eficientes y de alta calidad.
                </p>
                <p className="w-100">
                  Mi objetivo es crear aplicaciones web intuitivas, escalables y
                  de alto rendimiento que brinden una gran experiencia de
                  usuario. Estoy constantemente actualizando mis conocimientos
                  para mantenerme al día con las últimas tendencias en
                  desarrollo web.
                </p>
                <p className="w-100">
                  Si estás interesado en colaborar o tienes alguna pregunta, no
                  dudes en contactarme. Estoy emocionado de seguir creciendo
                  como desarrollador y enfrentar nuevos desafíos.
                </p>
              </div>

              {/*
                 
                */}
              <div className="flex ">
                <a
                  href="https://www.dropbox.com/scl/fi/a6xksri23unj53yw7490v/fullstack_ArielZarate.pdf?rlkey=w1pmbhxsdwlpf8bewou2rchjt&st=5ax00ao8&dl=1"
                  download
                  className="flex items-center justify-center w-40 h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-5 ml-1 hover:transition-all duration-300"
                >
                  <FaDownload className="text-white text-sm" />
                  <span className="ml-1">Descargar CV pdf</span>
                </a>

                <a
                  href="https://www.dropbox.com/scl/fi/huhn4a64yzgpmeo9xb2rs/fullstack_ArielZarate.docx?rlkey=c5kv00ms9djnqt4s6bbl13s8k&st=w4tvltgt&dl=1"
                  download
                  className="flex items-center justify-center w-40 h-12 bg-red-600 text-white rounded-md hover:bg-red-700 mt-5 ml-5 hover:transition-all duration-300 "
                >
                  <FaDownload className="text-white text-sm " />
                  <span className="ml-1 ">Descargar CV docx</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  End About Section */}
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
