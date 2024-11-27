import React from "react";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa";
import '@/styles/footer.css'; // importing the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://github.com/Farheenzehra99" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:farheen11099@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.instagram.com/farheen11099/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/syeda-farheen-zehra-648459268/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://discord.com/channels/790484092772548613/1190584161359122552" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61552506270420" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
        <p className="footer-rights">
          &copy; {new Date().getFullYear()} Syeda Farheen Zehra | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
