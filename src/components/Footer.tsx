import React from 'react';
import '../styles/Footer.css';
import Button from './Button';

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          voluptate aspernatur fugiat saepe, iusto mollitia.
        </p>
        <p className="footer-subscription-text">Lorem ipsum dolor sit amet.</p>
        <div className="input-areas">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              className="footer-input"
            />
            <Button
              type="button"
              onClick={(e) => e.preventDefault()}
              buttonStyle="btn--outline"
              buttonSize=""
            >
              Escrever-se
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h3>Sobre</h3>
            <a href="/">Como funciona</a>
          </div>
          <div className="footer-link-items">
            <h3>Contato</h3>
            <a href="/">Contato</a>
            <a href="/">Suporte</a>
          </div>
          <div className="footer-link-items">
            <h3>Vídeos</h3>
            <a
              href="https://www.youtube.com/watch?v=ghw4kNDfR_U"
              target="_blank"
              rel="noreferrer"
            >
              Manifesto
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noreferrer"
            >
              Mais sobre o produto
            </a>
          </div>
          <div className="footer-link-items">
            <h3>Mídias Sociais</h3>
            <a
              href="https://www.instagram.com/hub.local/?hl=pt"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/HubLocalOficial/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/hublocaloficial"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" className="social-logo">
              Page-Logo
            </a>
          </div>
          <small className="website-rights">Gabriel Lima © 2022</small>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/HubLocalOficial/"
              className="social-icon-link facebook"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/hub.local/?hl=pt"
              className="social-icon-link instagram"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/hublocaloficial"
              className="social-icon-link linkedin"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
