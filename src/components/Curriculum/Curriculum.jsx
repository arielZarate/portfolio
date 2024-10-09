import { useNavigate } from "react-router-dom";

const Curriculum = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-100 p-8  min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-8">
            Curriculum Vitae
          </h1>
          <div className="text-center mb-4">
            <p>
              <strong>Nombre:</strong> Ariel Zarate
            </p>
            <p>
              <strong>Tel:</strong> +54 (351) 152266656
            </p>
            <p>
              <strong>Email:</strong> arieltecnico@gmail.com
            </p>
            <p>
              <strong>Linkedin:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/ariel-zarate/"
                className="text-blue-500"
              >
                Ariel Zarate
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/arielZarate"
                className="text-blue-500"
              >
                arielZarate
              </a>
            </p>

            {/* Enlace al CV en Dropbox */}
            <p className="mt-4">
              {/* <strong>Ver mi CV completo:</strong>{" "} */}
              <a
                href="https://www.dropbox.com/scl/fi/4szp69sqpwb8j3br5xbmt/arielZarate_cv.pdf?rlkey=0yvlx4yuec9b1t9net9r62y04&st=0w7czxel&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors"
              >
                ver cv online
              </a>
            </p>
          </div>

          {/* Botón Volver */}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate(-1)}
              className=" w-full  border  text-slate-700 py-1 px-2 rounded hover:bg-slate-400 hover:text-white  transition-colors"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;

/*

//componente react
import { useNavigate, Link } from "react-router-dom";
const Curriculum = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-8">
            Curriculum Vitae
          </h1>
          <div className="text-center mb-4">
            <p>
              <strong>Ubicación:</strong> Córdoba Capital, Argentina
            </p>
            <p>
              <strong>Tel:</strong> +54 (351) 152266656
            </p>
            <p>
              <strong>Email:</strong> arieltecnico@gmail.com
            </p>
            <p>
              <strong>Linkedin:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/ariel-zarate/"
                target="blank"
                className="text-blue-500"
              >
                Ariel Zarate
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/arielZarate"
                target="blank"
                className="text-blue-500"
              >
                arielZarate
              </a>
            </p>
              <p>
              <strong>Portfolio:</strong>{" "}
              <a
                href="https://portfolioarielzarate.netlify.app/"
                className="text-blue-500"
              >
                portfolioarielzarate.netlify.app
              </a>
            </p> 
            </div>
            <hr className="text-slate-400 my-4 " />
            <div className="ml-5">
              <h2 className="text-xl font-semibold mb-4">Educación</h2>
              <ul className="list-disc list-inside mb-4">
                <li>FullStack MEAN UTN-UBA (2020-2021)</li>
                <li>Experto en Java - Udemy</li>
                <li>Fullstack Developer - Henry Bootcamp</li>
                <li>Certificado Nacional Superior UTN-BA (2021)</li>
              </ul>
            </div>
            <hr className="text-slate-400 my-4 " />
            <div className="ml-5">
              <h2 className="text-xl font-semibold mb-4">Experiencia</h2>
              <div className="mb-4">
                <h3 className="text-md font-bold">Administrador de Servidores</h3>
                <p className="text-gray-600">Pedilovos (sep. 2024 - oct. 2024)</p>
                <ul className="list-disc list-inside">
                  <li>Gestión de servidores Windows y Linux</li>
                  <li>Implementación de soluciones Apache para PHP</li>
                  <li>Instalación y configuración de MySQL</li>
                </ul>
                <p>
                  <a
                    href="https://pedilovos.com"
                    target="_blank"
                    className="text-blue-500"
                  >
                    URL: Pedilovos
                  </a>
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-md font-bold">Desarrollador Fullstack</h3>
                <p className="text-gray-600">
                  Cliente - ParkingProyect (ago. 2024 - oct. 2024)
                </p>
                <ul className="list-disc list-inside">
                  <li>Desarrollo de backend con Spring Boot y JWT</li>
                  <li>Frontend con Next.js</li>
                  <li>Contenerización con Docker</li>
                  <li>Despliegue en Vercel y Render</li>
                </ul>
                <p>
                  <a
                    href="https://github.com/arielZarate/ParkingProyectJavaReactV2"
                    target="_blank"
                    className="text-blue-500"
                  >
                    URL: ParkingProyect
                  </a>
                </p>
              </div>
  
              <div className="mb-4">
                <h3 className="text-md font-bold">Desarrollador Fullstack</h3>
                <p className="text-gray-600">
                  No Country (ago. 2024 - oct. 2024)
                </p>
                <ul className="list-disc list-inside">
                  <li>Desarrollo de backend con Spring Boot y JWT</li>
                  <li>Frontend con Next.js</li>
                  <li>Contenerización con Docker</li>
                  <li>Despliegue en Vercel y Render</li>
                </ul>
                <p>
                  <a
                    href="https://github.com/No-Country-simulation/c19-05-ft-node-react.git"
                    target="_blank"
                    className="text-blue-500"
                  >
                    URL: No Country Proyect
                  </a>
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-md font-bold">
                  Desarrollador Fullstack MERN
                </h3>
                <p className="text-gray-600">
                  Proyecto Personal - Adopta Mascotas (abr. 2024 - oct. 2024)
                </p>
                <ul className="list-disc list-inside">
                  <li>Stack MERN: MongoDB, Express, React, Node.js</li>
                  <li>Integración de autenticación con NextAuth</li>
                  <li>Interfaz con Tailwind CSS</li>
                </ul>
                <p>
                  <a
                    href="https://github.com/arielZarate/adopta-proyectoIntegrador"
                    target="_blank"
                    className="text-blue-500"
                  >
                    URL: Proyecto Adopta
                  </a>
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-md font-bold">Full-Stack Developer</h3>
                <p className="text-gray-600">
                  Freelance, Electroventas Tienda ecommerce (2023)
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    Desarrollo completo de un ecommerce para la administración y
                    venta de productos eléctricos utilizando React, Express, Node,
                    Sequelize, Material-UI, y Redux.
                  </li>
                  <li>
                    <a
                      href="https://github.com/arielZarate/Electroventas"
                      target="_blank"
                      className="text-blue-500"
                    >
                      URL: Proyecto Electroventas
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-md font-bold">Full-Stack Developer</h3>
                <p className="text-gray-600">
                  ChichCloset Tienda e-commerce (2022-2023)
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    Creación de interfaces y formularios intuitivos en el front
                  </li>
                  <li>
                    Implementación de integración con Cloudinary para el control
                    de imágenes.
                  </li>
                  <li>
                    Desarrollo de dashboard de usuarios para administración.
                  </li>
                  <li>
                    <a
                      href="https://github.com/rdtaipe/Henry-PF"
                      target="_blank"
                      className="text-blue-500"
                    >
                      URL: Proyecto ChichCloset
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  
            <hr className="text-slate-400 my-4 " />
  
            <div>
              <ul className="list-disc list-inside mb-4">
                <h2 className="text-md font-semibold mb-4">
                  Habilidades Técnicas
                </h2>
                <li>
                  Frontend: React, Angular, Next.js , HTML5, CSS3, JavaScript
                </li>
                <li>Backend: Node.js, Express, Java, Spring Boot</li>
                <li>Bases de Datos: MySQL, MongoDB, PostgreSQL,Sequelize</li>
                <li>Versionado: Git, GitHub</li>
                <li>Contenerización: Docker</li>
                <li>Autenticación: JWT, NextAuth</li>
              </ul>
              <h2 className="text-md font-semibold mb-4">Habilidades Blandas</h2>
              <ul className="list-disc list-inside mb-4">
                <li>Comunicación efectiva</li>
                <li>Colaboración en equipo</li>
                <li>Coordinación</li>
                <li>Proactivo y flexible</li>
              </ul>
  
              <h2 className="text-md  font-semibold mb-4">Otras Habilidades</h2>
              <ul className="list-disc list-inside mb-4">
                <li>Figma</li>
                <li>Trello</li>
                <li>Cloudinary</li>
                <li>JWT, Auth0, NextAuth</li>
              </ul>
            </div>
  
     
            <div className="text-center mt-8">
              <button
                onClick={() => navigate(-1)}
                className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 transition-colors"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Curriculum;
  
*/
