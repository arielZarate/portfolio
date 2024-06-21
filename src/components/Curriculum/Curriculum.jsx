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

          <h2 className="text-xl font-semibold mb-4">Educación</h2>
          <ul className="list-disc list-inside mb-4">
            <li>FullStack PERN Henry Bootcamp</li>
            <li>FullStack MEAN UTN-UBA (2020-2021)</li>
            <li>Master en Java Udemy (2018)</li>
            <li>Ingeniería en Sistemas, Universidad Tecnológica Córdoba</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">Experiencia</h2>
          <div className="mb-4">
            <h3 className="text-md font-bold">Full-Stack Developer</h3>
            <p className="text-gray-600">Personal, AdoptaMascotas (2024)</p>
            <ul className="list-disc list-inside">
              <li>
                Desarrollo de una página para adoptar mascotas con NextJs,
                Tailwind CSS, MongoDB, Cloudinary, NextAuth
              </li>
              <li>
                <a href="https://adopta.vercel.app/" className="text-blue-500">
                  URL: Proyecto Adopta
                </a>
              </li>
            </ul>
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
                Implementación de integración con Cloudinary para el control de
                imágenes.
              </li>
              <li>Desarrollo de dashboard de usuarios para administración.</li>
              <li>
                <a
                  href="https://github.com/rdtaipe/Henry-PF"
                  className="text-blue-500"
                >
                  URL: Proyecto ChichCloset
                </a>
              </li>
            </ul>
          </div>

          <hr className="text-slate-400 my-4 " />

          <h2 className="text-md font-semibold mb-4">Habilidades Técnicas</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Desarrollo Web: HTML5, CSS3, JavaScript, Responsive Design,
              Bootstrap, Tailwind CSS, ReactJs, GitHub, Auth0, NextJs, Angular
            </li>
            <li>Bases de Datos: MySQL, PostgreSQL, MongoDB, Sequelize</li>
            <li>Backend: NodeJs, Express, Java, C#, Integración de API</li>
          </ul>

          <h2 className="text-md font-semibold mb-4">Gestión de Proyectos</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Planificación de proyecto</li>
            <li>Creatividad</li>
            <li>Presentación</li>
          </ul>

          <h2 className="text-md font-semibold mb-4">Habilidades Blandas</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Trabajo en equipo, cumpliendo objetivos semanales</li>
            <li>Flexibilidad</li>
            <li>Buena comunicación</li>
          </ul>

          <h2 className="text-md  font-semibold mb-4">Otras Habilidades</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Figma</li>
            <li>Trello</li>
            <li>Cloudinary</li>
            <li>JWT, Auth0, NextAuth</li>
          </ul>

          {/* Botón Volver */}
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
