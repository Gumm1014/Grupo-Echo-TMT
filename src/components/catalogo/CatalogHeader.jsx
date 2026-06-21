import sofaImg from '../public/sofa.jpg';
import "./CatalogHeader.css";


function CatalogHeader() {
  return (
    <header className="catalog-header">
      

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
          <img src="/sofaImg.png" alt="Sofá" />
        </div>
      </div>
    </header>
  );
}

export default CatalogHeader;
