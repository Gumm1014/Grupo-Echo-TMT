import "./CatalogSidebar.css";

function CatalogSidebar() {
  return (
    <>
      <input type="checkbox" id="filtro-toggle" className="filtro-toggle__input" />

      <label htmlFor="filtro-toggle" className="filtro-toggle__btn">
        Filtro <span className="filtro-toggle__chevron">▾</span>
      </label>

      <label htmlFor="filtro-toggle" className="filtro-toggle__overlay" />

      <aside className="catalog-sidebar">
        <div className="catalog-sidebar__header">
          <h2 className="catalog-sidebar__title">Filtro:</h2>
          <label htmlFor="filtro-toggle" className="catalog-sidebar__cerrar">✕</label>
        </div>

        <ul className="catalog-sidebar__list">
          <li className="catalog-sidebar__item">Cocina y lavadero</li>
          <li className="catalog-sidebar__item">Comedor</li>
          <li className="catalog-sidebar__item">Dormitorio</li>
          <li className="catalog-sidebar__item">Living</li>
          <li className="catalog-sidebar__item">Oficina</li>
          <li className="catalog-sidebar__item">Otros muebles</li>
          <li className="catalog-sidebar__item">Infantiles y bebes</li>
        </ul>
      </aside>
    </>
  );
}

export default CatalogSidebar;
