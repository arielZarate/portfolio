import React, { useState } from "react";

import { BiBookContent, BiServer, BiEnvelope } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
import { AiOutlineHome, AiOutlineUser, AiOutlineFile } from "react-icons/ai";
import { styled } from "styled-components";

export default function NavBar({ onClose }) {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    const offsetTop = document.querySelector(target).offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    /*  onClose(); */
  };

  return (
    <>
      <nav className=" mt-5 p-0 list-none">
        <ul className="flex flex-col md:flex-colum items-start ">
          <LiContainer>
            <li className="">
              <a href="#home" className=" gap-2" onClick={handleSmoothScroll}>
                <AiOutlineHome className="icon text-3xl" /> <span>Inicio</span>
              </a>
            </li>
            <li className="">
              <a href="#about" className=" gap-2" onClick={handleSmoothScroll}>
                <AiOutlineUser className="icon text-3xl" />
                <span className="span-style">Acerca de mi</span>
              </a>
            </li>
            <li className="">
              <a
                href="#resume"
                className="gap-2"
                onClick={(e) => handleSmoothScroll(e)}
              >
                <AiOutlineFile className="icon text-3xl" /> <span>Resumen</span>
              </a>
            </li>
            <li className="">
              <a
                href="#portfolio"
                className="gap-2"
                onClick={handleSmoothScroll}
              >
                <BiBookContent className="icon text-3xl" />
                <span>Portafolio</span>
              </a>
            </li>

            <li className="">
              <a
                href="#Technologies"
                className="gap-2"
                onClick={handleSmoothScroll}
              >
                <IoLogoNodejs className="icon text-3xl" />
                <span>Tecnologias</span>
              </a>
            </li>
            <li className="">
              <a
                href="#contact"
                className=" gap-2"
                onClick={handleSmoothScroll}
              >
                <BiEnvelope className="icon text-3xl" /> <span>Contacto</span>
              </a>
            </li>
          </LiContainer>
        </ul>
      </nav>
    </>
  );
}

const LiContainer = styled.div`
  position: relative;
  white-space: nowrap;
  color: #6f7180;
  margin-left: -10px;

  & a {
    display: flex;
    align-items: center;
    padding: 8px 8px;
    margin-bottom: 10px;
    transition: 0.3s;
    font-size: 15px;
  }

  & .icon:hover {
    color: #149ddd;
  }

  & > li > a > span {
    color: #a8a9b4;
  }

  & a:focus .icon {
    color: #149ddd;
  }

  & a.active > span,
  & a:focus > span {
    color: #d2d2d2;
  }
`;
