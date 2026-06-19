import "./CatalogHeader.css";
import sofaImg from "../../assets/sofaImg.png";

function CatalogHeader() {
  return (
    <header className="catalog-header">
      <nav className="catalog-header__nav">
        <span className="catalog-header__nav-item">Inicio</span>
        <span className="catalog-header__nav-item">Preguntas frecuentes</span>
      </nav>

      <div className="catalog-header__content">
        <div className="catalog-header__text">
          <div className="catalog-header__eyebrow">
            <span>Colección 2025</span>
            <span className="catalog-header__eyebrow-line" />
          </div>
          <h1 className="catalog-header__title">Catálogo de Productos</h1>
          <p className="catalog-header__subtitle">
            Seleccioná los productos que te interesan para armar tu cotización.
          </p>
        </div>

        <div className="catalog-header__image-wrap">
          <img
            src={sofaImg}
            alt="Sofá de la colección 2025"
            className="catalog-header__image"
          />
        </div>
      </div>
    </header>
  );
}

export default CatalogHeader;
