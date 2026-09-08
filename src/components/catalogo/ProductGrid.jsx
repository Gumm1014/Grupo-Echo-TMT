import ProductCard from "./ProductCard.jsx";
import "./ProductGrid.css";
import { useEffect, useState } from "react";

function ProductGrid() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    actualizar();
  }, []);

  async function actualizar() {
    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/1551nSJ5je_HKrH2JXx9yEYNiN65tVQNYlknYs1rw2Pk/values/Productos?key=AIzaSyC7xqjgoGTJ8VBe9C-RXinpQcIbBJww1ow`

      const resp = await fetch(url);
      const datos = await resp.json();

      const filas = datos.values;
      const filasProductos = filas.slice(1);

      const listaProductos = filasProductos.map((fila) => ({
        id: fila[0],
        nombre: fila[1],
        categoria: fila[2],
        descripcion: fila[3],
        materiales: fila[4],
        tiempoFabricacion: fila[5],
        ancho: fila[6],
        largo: fila[7],
        estilo: fila[8],
        medidas: fila[9],
        peso: fila[10],
        tapaTerminacion: fila[11],
        lustreColores: fila[12],
        imagen1: fila[13] || "",
        imagen2: fila[14] || "",
        imagen3: fila[15] || "",
      }));

      setProductos(listaProductos);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="product-grid">
        {
          productos.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto} />
          ))
        }
    </div>
  );
}

export default ProductGrid;
