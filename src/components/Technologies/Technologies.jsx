import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb, DiJava } from "react-icons/di";
import {
  SiNetlify,
  SiPostgresql,
  SiSequelize,
  SiTailwindcss,
  SiRedux,
  SiMysql,
} from "react-icons/si";

// ...

export default function Technologies() {
  const technologies = [
    { icon: <FaHtml5 className="text-red-400" />, name: "HTML5" },
    { icon: <FaCss3 className="text-blue-500" />, name: "CSS3" },
    { icon: <DiJavascript1 className="text-amber-500" />, name: "JavaScript" },
    { icon: <FaReact className="text-blue-700" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <DiMongodb className="text-emerald-500" />, name: "MongoDB" },
    { icon: <FaDatabase className="text-orange-500" />, name: "SQL" },
    { icon: <SiMysql className="text-yellow-500" />, name: "MySql" },
    { icon: <SiNetlify className="text-teal-500" />, name: "Netlify" },
    { icon: <SiPostgresql className="text-sky-300" />, name: "PostgreSQL" },
    { icon: <SiSequelize className="text-sky-500" />, name: "Sequelize" },
    { icon: <FaJava className="text-red-500" />, name: "Java" },
    {
      icon: <SiTailwindcss className="text-indigo-400" />,
      name: "Tailwind CSS",
    },
    { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
    // Agrega más objetos para más tecnologías
  ];

  return (
    <div
      id="Technologies"
      className="container mx-auto mt-10 p-5  bg-slate-900"
    >
      <div className="ml-0 xl:ml-64">
        <h3 className="text-2xl font-bold text-sky-600 mx-5 ml-0">
          Tecnologías
        </h3>

        <div className="carousel my-2 ">
          <div className="flex gap-10 overflow-x-auto ">
            {technologies.map((tech, index) => (
              <div
                className="technology m-5 flex flex-col items-center transition-transform duration-500 hover:scale-110 "
                key={index}
              >
                <div className="icon text-white text-5xl">{tech.icon}</div>
                <span className="text-white  text-1xl">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
