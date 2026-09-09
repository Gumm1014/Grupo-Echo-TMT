import "./CatalogSidebar.css";
import { useLocation, useSearch } from "wouter";

function CatalogSidebar() {

  const [, navigate] = useLocation();
  const search = useSearch(); // ej: "categoria=Cocina" (sin el "?")

  const categorias = [
    {
      nombre: "Cocina y lavadero",
      valor: "Cocina"
    },
    {
      nombre: "Comedor",
      valor: "Comedor"
    },
    {
      nombre: "Dormitorio",
      valor: "Dormitorio"
    },
    {
      nombre: "Living",
      valor: "Living"
    },
    {
      nombre: "Oficina",
      valor: "Oficina"
    },
    {
      nombre: "Otros muebles",
      valor: "Otros muebles"
    },
    {
      nombre: "Infantiles y bebes",
      valor: "Infantiles y bebes"
    }
  ];

  // Obtener los parámetros actuales de la URL
  const parametros = new URLSearchParams(search);

  const categoriaActual = parametros.get("categoria");

  // Cambiar categoría
  const seleccionarCategoria = (categoria) => {

    const nuevosParametros = new URLSearchParams();

    nuevosParametros.set("categoria", categoria);

    navigate(`/catalogo?${nuevosParametros.toString()}`);
  };

  // Mostrar todos los productos
  const mostrarTodos = () => {
    navigate("/catalogo");
  };

  return (
    <>
      <input
        type="checkbox"
        id="filtro-toggle"
        className="filtro-toggle__input"
      />

      <label
        htmlFor="filtro-toggle"
        className="filtro-toggle__btn"
      >
        Filtro
        <span className="filtro-toggle__chevron">▾</span>
      </label>

      <label
        htmlFor="filtro-toggle"
        className="filtro-toggle__overlay"
      />

      <aside className="catalog-sidebar">

        <div className="catalog-sidebar__header">

          <h2 className="catalog-sidebar__title">
            Filtro:
          </h2>

          <label
            htmlFor="filtro-toggle"
            className="catalog-sidebar__cerrar"
          >
            ✕
          </label>

        </div>

        <ul className="catalog-sidebar__list">

          {/* TODOS */}

          <li
            className={
              !categoriaActual
                ? "catalog-sidebar__item activo"
                : "catalog-sidebar__item"
            }
            onClick={mostrarTodos}
          >
            Todos los productos
          </li>

          {/* CATEGORÍAS */}

          {categorias.map((categoria) => (

            <li
              key={categoria.valor}
              className={
                categoriaActual?.toLowerCase() ===
                  categoria.valor.toLowerCase()
                  ? "catalog-sidebar__item activo"
                  : "catalog-sidebar__item"
              }
              onClick={() =>
                seleccionarCategoria(categoria.valor)
              }
            >
              {categoria.nombre}
            </li>

          ))}

        </ul>

      </aside>
    </>
  );
}

export default CatalogSidebar;