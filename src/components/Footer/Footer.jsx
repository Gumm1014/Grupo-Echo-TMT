import './Footer.css';
import { Link } from 'wouter';
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <div className="footer-brand-name">TMT</div>
          <div className="footer-brand-desc">
            Fabricación y venta de muebles para el hogar. Carpintería a medida. Ushuaia, Argentina.
          </div>
          <div className="footer-divider"></div>
        </div>
        <div>
          <div className="footer-col-title">Navegacion</div>
          <ul className="footer-links">

            <Link className="link_nav" href="/home"><li>Inicio</li></Link>
            <Link className="link_nav" href="/catalogo"><li>Catálogo</li></Link>
            <Link className="link_nav" href="/carrito"><li>Cotización</li></Link>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Contacto</div>
          <div className="footer-contact-item">direccion@tmt-muebles.com.ar</div>
          <div className="footer-contact-item">Ushuaia, Tierra del Fuego</div>
          <div className="footer-contact-item">+54 92901 999-999</div>
        </div>
      </footer>
      <div className="footer-bottom">
        <span className="footer-bottom-text">
          © 2025 TMT Muebles. Todos los derechos reservados. Hecho por grupo echo
        </span>
        <span className="footer-bottom-text">Fabricado con madera y dedicación.</span>
      </div>
    </>
  );
}