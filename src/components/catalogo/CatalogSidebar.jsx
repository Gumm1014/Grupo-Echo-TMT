import "./CatalogSidebar.css";

function CatalogSidebar({ categories }) {
  return (
    <aside className="catalog-sidebar">
      <h2 className="catalog-sidebar__title">Filtro:</h2>

      <ul className="catalog-sidebar__list">
        {categories.map((category) => (
          <li key={category} className="catalog-sidebar__item">
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CatalogSidebar;
