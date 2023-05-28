import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import Abouts from "../About/Abouts";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import Technologies from "../Technologies/Technologies";

export default function Home() {
  const textRef = useRef(false);
  useEffect(() => {
    const textElement = textRef.current;
    const text = "Desarrollador Web Fullstack";
    let currentIndex = 0;
    let timeout;

    const typeText = () => {
      if (currentIndex === text.length) {
        clearTimeout(timeout);
        setTimeout(resetText, 5000);
        return;
      }

      textElement.textContent += text[currentIndex];
      currentIndex++;
      timeout = setTimeout(typeText, 100);
    };

    const resetText = () => {
      textElement.textContent = "";
      currentIndex = 0;
      typeText();
    };

    typeText();

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {/* ======= Hero Section o home======= */}

      <HomeContainer id="home">
        <section className="flex flex-col justify-center items-center flex-nowrap h-full">
          <TextContainer>
            <H1 className="">Ariel Zarate</H1>
            <p className="text-2xl font-sans font-bold text-white ml-2">
              Yo soy
              <span
                ref={textRef}
                className="ml-2 text-white pb-2 tracking-wide"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#325ed4",
                  textDecorationThickness: "3px",
                  textDecorationLine: "underline",
                  textDecorationStyle: "solid",
                }}
              ></span>
            </p>
          </TextContainer>
          {/* End Hero */}
        </section>
      </HomeContainer>

      {/* los demas componenentes hijos*/}
      <Abouts />
      <Resume />
      <Portfolio />
      <Technologies />
      <Contact />
    </>
  );
}

/* =====Style Component======= */

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("src/assets/home3.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: calc(50%); /* Ajusta el valor de 64px según el ancho de tu sidebar */
  transform: translate(-50%, -50%);
`;

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 56px;
  color: #fff;
  margin-bottom: 10px;
`;