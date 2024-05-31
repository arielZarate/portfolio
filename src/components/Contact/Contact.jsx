import { styled } from "styled-components";
import { AiOutlineEnvironment, AiOutlineMail } from "react-icons/ai";
import { BiMobileAlt } from "react-icons/bi";
//=======react-hook-form==============
import { useForm } from "react-hook-form";
import { useRef } from "react";

//=========EmailJS==========

import emailjs from "@emailjs/browser";

//============variables de entorno======================

const service_id = import.meta.env.VITE_SERVICES_ID;
const template_id = import.meta.env.VITE_TEMPLATE_KEY;
const public_key = import.meta.env.VITE_PUBLIC_KEY;

//=========================

import { Notification } from "../Notification/Notification";

//=========================
export default function Contact() {
  const form = useRef();

  //react-hook-form
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = () => {
    // data.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        console.log(result.text);

        //====alert=======
        Notification(
          "success",
          "Su mensaje ha sido enviado!!",
          "top-end",
          3000
        );

        setTimeout(() => {
          reset();
        }, 3000);
      },
      (error) => {
        console.log(error.text);
        Notification(
          "error",
          "😔 Error en el servidor de EmailJs, intente mas tarde ...",
          "bottom-end",
          3000
        );
      }
    );
  };

  //espresion regular para la validacion de email
  /*
  1)  /^[a-zA-Z0-9._%+-]+@(hotmail|gmail)\.(com|es)$/i
 */
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return (
    <>
      {/* ======= Contact Section ======= */}
      <section
        id="contact"
        className="contact container mx-auto mt-10 pb-20  bg-sky-50"
      >
        <div className="flex flex-col mx-5 ml-5 xl:ml-64">
          <div className="my-4">
            <h2 className="text-2xl font-bold text-sky-900">Contacto</h2>
            <p>
              ¡Hola! Mi nombre es Ariel Zarate, y soy un apasionado
              desarrollador de software en programación web y desarrollo de
              aplicaciones. Mi portafolio refleja mi dedicación y habilidades en
              la creación de soluciones tecnológicas innovadoras y de alta
              calidad. Estoy abierto a nuevas oportunidades y colaboraciones
              emocionantes en proyectos desafiantes. Si estás buscando un
              profesional talentoso y comprometido, no dudes en contactarme a
              través de mi portafolio. ¡Espero poder trabajar contigo en futuros
              proyectos!
            </p>
          </div>

          <div className="grid grid-col-1  sm:grid-cols-1 md:grid-cols-2   lg:grid-cols-2  lg:space-x-0  gap-y-5  gap-x-5 my-5  ">
            <div className="items-stretch">
              <InfoContainer>
                <div>
                  <ContainerIcon>
                    <AiOutlineEnvironment />
                  </ContainerIcon>
                  <h4>Ubicacion:</h4>
                  <p>Cordoba, Argentina,X5123XAL</p>
                </div>

                <div>
                  <ContainerIcon>
                    <AiOutlineMail />
                  </ContainerIcon>
                  <h4>Correo:</h4>
                  <p>arieltecnico@gmail.com</p>
                </div>

                <div>
                  <ContainerIcon>
                    <BiMobileAlt />
                  </ContainerIcon>
                  <h4>Telefono:</h4>
                  <p>+54 (351)152266656</p>
                </div>

                <IframeContainer>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38554.17062369201!2d-64.25899130556319!3d-31.338568358390127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299535243d215%3A0x37a3a7905b2da13f!2sMiguel%20Potel%20Junot%206800%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1685110859669!5m2!1ses-419!2sar"
                    width="250"
                    height="300"
                    className="border-dashed"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </IframeContainer>
              </InfoContainer>
            </div>

            <ContainerContact className="items-stretch">
              <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-4">
                  <div className="col-span-1">
                    <label
                      htmlFor="name"
                      className=" text-sm font-medium leading-6 text-gray-900"
                    >
                      Nombre
                    </label>
                    <div className=" ">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete=""
                        className="block w-full rounded py-1.5  text-gray-900 shadow-sm  border border-gray-300   focus:outline-none focus:border-sky-700 sm:text-sm sm:leading-6"
                        {...register("name", {
                          required: true,
                          minLength: 4, // Longitud mínima del nombre
                          maxLength: 25, // Longitud máxima del nombre
                          pattern: /^[A-Za-z\s]+$/, // Expresión regular para permitir solo caracteres y espacios en blanco
                        })}
                      />
                      {errors.name && (
                        <div className=" mt-3 ">
                          <span className="rounded-lg text-red-500 bg-pink-100 p-2 text-xs">
                            campo Nombre invalido
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-span-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email de contacto
                    </label>
                    <div className="">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded py-1.5  text-gray-900 shadow-sm  border border-gray-300   focus:outline-none focus:border-sky-700  sm:text-sm sm:leading-6"
                        {...register("email", {
                          required: true,
                          pattern: emailRegex, // Validación del correo electrónico
                          maxLength: 30,
                        })}
                      />
                      {errors.email && (
                        <div className=" mt-3 ">
                          <span className="rounded-lg text-red-500 bg-pink-100 p-2 text-xs">
                            campo Correo invalido
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* asunto */}
                <div className="mt-2">
                  <label
                    htmlFor="asunt"
                    className=" text-sm font-medium leading-6 text-gray-900"
                  >
                    Asunto
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="asunt"
                      id="asunt"
                      autoComplete=""
                      className="block w-full rounded py-1.5  text-gray-900 shadow-sm  border border-gray-300   focus:outline-none focus:border-sky-700  sm:text-sm sm:leading-6"
                      {...register("asunt", {
                        required: true,
                        minLength: 3, // Longitud mínima del nombre
                        maxLength: 35, // Longitud máxima del nombre
                      })}
                    />
                    {errors.asunt && (
                      <div className=" mt-3 ">
                        <span className="rounded-lg text-red-500 bg-pink-100 p-2 text-xs">
                          campo Asunto invalido
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/*   <div class="">
                  <label for="name">Mensaje</label>
                  <textarea name="message" rows="10" required></textarea>
                </div> */}

                {/* mensaje */}
                <div className="mt-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mensaje
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="block w-full rounded py-1.5  text-gray-900 shadow-sm  border border-gray-300   focus:outline-none focus:border-sky-700  sm:text-sm sm:leading-6"
                      defaultValue=""
                      placeholder="Escribe tu mensaje de texto por favor..."
                      {...register("message", {
                        required: true,
                        minLength: 10, // Longitud mínima del nombre
                        maxLength: 300, // Longitud máxima del nombre
                      })}
                    />
                    {errors.message && (
                      <div className=" mt-3 ">
                        <span className="rounded-lg text-red-500 bg-pink-100 p-2 text-xs">
                          campo Mensaje invalido, verifique!!
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {/* <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div> */}

                <div className=" mt-10">
                  {/*  <button
                    type="submit"
                    className="block w-full bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded"
                  >
                    Enviar
                  </button> */}

                  <button
                    type="submit"
                    className={`block w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ${
                      Object.keys(errors).length
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    disabled={Object.keys(errors).length}
                  >
                    Enviar Correo
                  </button>
                </div>
              </form>
            </ContainerContact>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </>
  );
}

/* Styled-coomponets */

const ContainerIcon = styled.div`
  font-size: 20px;
  color: #149ddd;
  float: left;
  width: 44px;
  height: 44px;
  background: #dff3fc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;

  /*   &:hover {
    background: #149ddd;
    color: #fff;
  } */
`;

const InfoContainer = styled.div`
  padding: 30px;
  background: #fff;
  width: 90%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);

  & h4 {
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #050d18;
  }

  & p {
    padding: 0 0 10px 60px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #173b6c;
  }

  & > div:hover > ${ContainerIcon} {
    background: #149ddd;
    color: #fff;
  }

  & > div:hover > ${ContainerIcon}:hover {
    background: #149ddd;
    color: #fff;
  }
`;

const ContainerContact = styled.div`
  width: 90%;
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
`;

const IframeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* Proporción de aspecto (75% para relación de aspecto 4:3) */
  position: relative;
  overflow: hidden;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
