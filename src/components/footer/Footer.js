import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footwrap">
          <div className="socmed">
            <div className="socwrap">
              <Link to="/" className="soclogo">
                KPIZZA
              </Link>
              <div className="socicons">
                <a
                  className="soclink"
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  className="soclink"
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  className="soclink"
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
