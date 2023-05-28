import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-slate-100 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link to="/" className="link link-hover">
            Inicio
          </Link>
          <Link to="/portfolio" className="link link-hover">
            Portfolio
          </Link>
          <Link to="/contact" className="link link-hover">
            Contacto
          </Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <FaFacebookF className="text-2xl" />
            </a>

            <a href="https://github.com/arielZarate" target="blank">
              <FiGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/ariel-zarate/" target="blank">
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - diseñado por Ariel Zarate</p>
        </div>
      </footer>
    </div>
  );
}
