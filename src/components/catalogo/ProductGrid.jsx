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

      const listaProductos = [];

      for (let i = 0; i < filasProductos.length; i++) {
        const fila = filasProductos[i];

        const producto = {
          id: fila[0],
          nombre: fila[1],
          categoria: fila[2],
          descripcion: fila[3],
          materiales: fila[4],
          disponibilidad: fila[5],
          tiempoFabricacion: fila[6],
          ancho: fila[7],
          largo: fila[8],
          estilo: fila[9],
          medidas: fila[10],
          peso: fila[11],
          tapaTerminacion: fila[12],
          lustreColores: fila[13],
          imagen1: fila[14] || "",
          imagen2: fila[15] || "",
          imagen3: fila[16] || "",
        };

        listaProductos.push(producto);
      }

      setProductos(listaProductos);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="product-grid">
      <div>
        {
          productos.map((producto) => (
            <ProductCard
              id={producto.id}
              producto={producto} />
          ))
        }
      </div>

    </div>
  );
}

export default ProductGrid;
