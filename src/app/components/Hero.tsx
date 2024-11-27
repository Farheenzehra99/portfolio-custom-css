"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram, FaDiscord, FaFacebook } from "react-icons/fa";
// import { BackgroundBeamsWithCollision } from "./BackgroundBeamsWithCollision";
import "@/styles/hero.css"; // Importing the custom CSS

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* <BackgroundBeamsWithCollision> */}
          {/* Hero Text */}
          <div className="hero-text">
            <div className="text-container">
              <h1 className="main-heading">
                I &apos;m <br />
                <span className="highlighted-text">Syeda Farheen Zehra</span>
              </h1>
            </div>

            <h1 className="typewriter-text">
              <Typewriter
                options={{
                  strings: ["Web Developer", "UI/UX Designer", "Programmer", "Graphic Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="divider"></div>
            <p className="description">Future Cloud Applied Gen-AI Engineer...</p>

            {/* Buttons */}
            <div className="button-container">
              <Link href="/contact">
                <button className="contact-button">Contact</button>
              </Link>
              <a href="/cv/Farheen Zehra Resume.pdf">
                <button className="cv-button">Download CV</button>
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://github.com/Farheenzehra99"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:farheenzehra481@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.instagram.com/farheen11099/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/syeda-farheen-zehra-648459268/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://discord.com/channels/790484092772548613/1190584161359122552"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon discord"
              >
                <FaDiscord />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61552506270420"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>



          {/* Hero Image */}
          <div className="hero-image-container">
            <Image
              src="/images/hero.jpg"
              alt="Hero Section Image"
              width={350}
              height={350}
              className="hero-image"
            />
          </div>
        {/* </BackgroundBeamsWithCollision> */}
      </div>
    </section>
  );
}

export default Hero;