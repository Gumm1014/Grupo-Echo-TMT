import "./CatalogHeader.css"; // Sacamos el import de la imagen

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
          {/* Al empezar con "/", Vite sabe que busca directamente en public */}
          <img className="catalog-header__image" src="/prod 4.png" alt="Producto" />
        </div>
      </div>
    </header>
  );
}

export default CatalogHeader;