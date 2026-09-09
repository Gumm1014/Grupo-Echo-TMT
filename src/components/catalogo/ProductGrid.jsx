import { useSearch } from "wouter";
import ProductCard from "./ProductCard.jsx";
import { useProductos } from "../../hooks/useProductos.js";
import "./ProductGrid.css";

function ProductGrid() {
  const search = useSearch(); // ej: "categoria=Cocina" (sin el "?")
  const { productos, cargando, error } = useProductos();

  const parametros = new URLSearchParams(search);
  const categoria = parametros.get("categoria");
  const busqueda = parametros.get("buscar");

  let filtrados = productos;

  if (categoria) {
    filtrados = filtrados.filter(
      (p) => (p.categoria || "").toLowerCase() === categoria.toLowerCase()
    );
  }

  if (busqueda) {
    const termino = busqueda.toLowerCase();
    filtrados = filtrados.filter((p) =>
      `${p.nombre || ""} ${p.descripcion || ""} ${p.categoria || ""}`
        .toLowerCase()
        .includes(termino)
    );
  }

  if (cargando) {
    return <p className="product-grid__mensaje">Cargando productos...</p>;
  }

  if (error) {
    return (
      <p className="product-grid__mensaje">
        No se pudieron cargar los productos. Intentá de nuevo más tarde.
      </p>
    );
  }

  if (filtrados.length === 0) {
    return (
      <p className="product-grid__mensaje">
        No hay productos que coincidan con tu búsqueda.
      </p>
    );
  }

  return (
    <div className="product-grid">
      {filtrados.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ProductGrid;