import "./CatalogSidebar.css";

function CatalogSidebar() {
  return (
    <aside className="catalog-sidebar">
      <h2 className="catalog-sidebar__title">Filtro:</h2>

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
  );
}

export default CatalogSidebar;
