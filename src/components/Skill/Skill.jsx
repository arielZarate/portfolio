import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSequelize,
  SiAngular,
  SiGit,
  SiTailwindcss,
  SiRedux,
  SiFigma,
  SiJsonwebtokens,
  SiNestjs,
  SiVercel,
  SiRailway,
  SiNetlify,
  SiHeroku,
  SiAuth0,
  SiBootstrap,
  SiMaterialdesign,
  SiTypescript,
  SiVisualstudiocode,
  SiGithub,
} from "react-icons/si";
import {
  FaAws,
  FaBrain,
  FaJava,
  FaPuzzlePiece,
  FaShapes,
} from "react-icons/fa";
import { DiResponsive, DiFirebase } from "react-icons/di";
import { FiSettings } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";
import { BiGroup, BiMessageRounded, BiBook, BiTime } from "react-icons/bi";

export default function Skill() {
  const skills = [
    { name: "Trabajo en equipo", icon: BiGroup, color: "text-red-500" },
    {
      name: "Resolución de problemas",
      icon: FaPuzzlePiece,
      color: "text-blue-500",
    },
    {
      name: "Comunicación efectiva",
      icon: BiMessageRounded,
      color: "text-green-500",
    },
    {
      name: "Adaptación y flexibilidad",
      icon: BiTime,
      color: "text-yellow-500",
    },
    {
      name: "Aprendizaje de nuevas tecnologías",
      icon: BiBook,
      color: "text-purple-500",
    },
    //======================================================
    { name: "HTML", icon: SiHtml5, color: "text-red-500" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    {
      name: "Responsive Design",
      icon: DiResponsive,
      color: "text-green-500",
    },
    {
      name: "MaterialDesign",
      icon: SiMaterialdesign,
      color: "text-blue-500",
    },
    { name: "Figma", icon: SiFigma, color: "text-purple-500" },
    //======================================================
    { name: "RESTfull", icon: FiSettings, color: "text-blue-500" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "React.js", icon: SiReact, color: "text-blue-500" },
    { name: "Redux", icon: SiRedux, color: "text-purple-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-green-500" },
    { name: "Typescript", icon: SiTypescript, color: "text-blue-500" },
    //================================================
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    { name: "Sequelize", icon: SiSequelize, color: "text-blue-500" },
    //================================================
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "VSC", icon: SiVisualstudiocode, color: "text-blue-500" },
    //================================================
    { name: "Firebase", icon: DiFirebase, color: "text-amber-500" },
    { name: "Auth0", icon: SiAuth0, color: "text-blue-500" },
    {
      name: "JWT",
      icon: SiJsonwebtokens,
      color: "text-fuchsia-500",
    },
    //================================================
    { name: "Nest.js", icon: SiNestjs, color: "text-red-500" },
    { name: "Next.js", icon: TbBrandNextjs, color: "text-black" },
    { name: "Angular", icon: SiAngular, color: "text-red-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-500" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
    //================================================
    { name: "Vercel", icon: SiVercel, color: "text-black" },
    { name: "Railway", icon: SiRailway, color: "text-black" },
    { name: "Netlify", icon: SiNetlify, color: "text-black" },
    { name: "Heroku", icon: SiHeroku, color: "text-black" },
    { name: "", icon: FaAws, color: "text-indigo-400" },

    //================================================
    { name: "ChatGPT", icon: FaBrain, color: "text-rose-700" },
    { name: "GitHub", icon: SiGithub, color: "text-slate-950" },
    { name: "Patrones de Diseño", icon: FaShapes, color: "text-blue-400" },
  ];

  return (
    <>
      {/* Skills Section */}
      <section
        id="Skills"
        className="container mx-auto  mt-10 bg-slate-700 rounded-md"
      >
        <div className="flex flex-col mx-5">
          <div className="ml-0 xl:ml-64">
            <h2 className="text-2xl font-bold text-sky-600">
              Habilidades y Tecnologias
            </h2>
            {/*
            <p>
              Soy un desarrollador full-stack con experiencia en tecnologías
              como ReactJs, Node.js bases de datos SQL y NoSQL. Poseo
              habilidades técnicas sólidas para construir aplicaciones web
              escalables y funcionales.
            </p>
       */}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ml-0 xl:ml-64 my-5  ">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                Icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Componente para cada tarjeta de habilidad
// eslint-disable-next-line react/prop-types
const SkillCard = ({ name, Icon, color }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center justify-center shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105  ">
      <span className="sr-only">{name}</span>
      <Icon className={`w-8 h-8 mr-3 ${color} `} />
      <p className="text-gray-800">{name}</p>
    </div>
  );
};

/*

export default function Skill() {
  return (
    <>
    <section id="skills" className="container mx-auto mt-10 bg-sky-50">
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
    </>
  );
}


 
      
*/
