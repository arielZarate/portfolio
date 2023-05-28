import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { CgMenuRound } from "react-icons/cg";
import { IoCloseCircleOutline, IoArrowUp } from "react-icons/io5";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
/* import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai"; */
import NavBar from "./NavBar";

import FooterNav from "./FooterNav";

export default function Header() {
  //drawer estado : desktop o mobile
  const [isDesktop, setIsDesktop] = useState(false);
  const [open, setOpen] = useState(false);

  /* 
  este useEffect maneja el estado de la pantalla,
  cuando es mayor a 1200px se abre solo el drawer y se oculta el boton
  */
  useEffect(() => {
    const handleResize = () => {
      const isDesktopWidth = window.innerWidth >= 1200;
      setIsDesktop(isDesktopWidth);

      if (!isDesktopWidth) {
        setOpen(false); // Cerrar el Drawer si la pantalla es menor a 1200
      } else {
        setOpen(true); // Abrir el Drawer si la pantalla es mayor o igual a 1200
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // drawer Boton de cierre y apertura

  const handleToggleDrawer = () => {
    setOpen(!open);
    /*  document.body.style.overflow = open ? "auto" : "hidden"; */
  };

  const handleCloseDrawer = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* drawer boton*/}
      <header className="flex">
        {/* condicion del escritorio si es dintinto al escritorio se muestra */}
        {!isDesktop && (
          <button
            className="fixed top-0 right-0 m-4 text-sky-700 z-50"
            onClick={handleToggleDrawer}
          >
            {open ? (
              <IoCloseCircleOutline className="text-5xl" />
            ) : (
              <CgMenuRound className="text-5xl" />
            )}
          </button>
        )}

        {/* Drawer */}

        <div
          className={`fixed top-0 left-0 z-20 w-56 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-full`}
        >
          <div
            className={`px-6 py-4  bg-slate-900 w-full h-screen transform transition-transform duration-300 ${
              open ? "translate-x-full" : "translate-x-0 "
            }`}
          >
            {/* contenido del sidebar */}

            <ProfileContainer className="">
              <ProfileImage
                src="./src/assets/ariel.jpg"
                alt=""
                className="rounded-full"
              />

              <h1 className="m-0 p-0  text-center font-semibold font-sans text-white text-3xl">
                <ProfileLink href="index.html" className="">
                  Ariel Zarate
                </ProfileLink>
              </h1>

              <SocialLink className="mt-5">
                {/*    <Link href="#" className="twitter">
                  <AiFillTwitterCircle />
                </Link> 
                 <Link href="#" className="facebook">
                  <BsFacebook />
                </Link> 
                
                 <Link href="#" className="google-plus">
                  <AiFillGoogleCircle />
                </Link>
                */}
                <Link href="#" className="instagram">
                  <SiInstagram />
                </Link>

                <Link className="linkedin">
                  <a href="https://github.com/arielZarate" target="blank">
                    <BsGithub className="" />
                  </a>
                </Link>
                <Link href="#" className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/ariel-zarate/"
                    target="blank"
                  >
                    <BsLinkedin className="" />
                  </a>
                </Link>
              </SocialLink>
            </ProfileContainer>

            {/* navBar */}
            <NavBar onClose={handleCloseDrawer} />

            {/* Footer */}
            <div className="hidden xl:block">
              <FooterNav />
            </div>
          </div>
        </div>

        {/* Botón de volver arriba */}
        <button
          className="fixed bottom-8 right-8 bg-sky-500 rounded-full p-3 text-white text-1xl shadow-lg z-auto"
          onClick={handleScrollToTop}
        >
          <IoArrowUp />
        </button>
      </header>
    </>
  );
}

/*============= Styled Components============ */

const ProfileContainer = styled.div``;

const ProfileImage = styled.img`
  margin: 15px auto;
  display: block;
  width: 120px;
  border: 8px solid #2c2f3f;
`;

const ProfileLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #149ddd;
    text-decoration: none;
  }
`;

const SocialLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 25px;
`;

const Link = styled.a`
  padding: 4px;
  margin: 3px;
  /* width: 30px;
  height: 20px; */
  transition: 0.3s;
  border-radius: 50%;

  &:hover {
    background: #149ddd;
    color: #fff;
    text-decoration: none;
    border-radius: 50%;
  }
`;
