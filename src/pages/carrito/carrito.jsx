import "./carrito.css";
import Encabezado from "../../components/carrito/Encabezado";
import ItemProducto from "../../components/carrito/ItemProducto";
import ComoFunciona from "../../components/carrito/ComoFunciona"; // <-- Sin llaves
import ResumenPedido from "../../components/carrito/ResumenPedido"; // <-- Sin llaves

export default function Carrito() {
  return (
    <div className="pagina">
      <main className="contenido">
        <Encabezado cantProductos={2} />

        <div className="lista-productos">
          <ItemProducto
            categoria="DORMITORIO"
            nombre="Cama Dos Plazas"
            variante="Roble natural  140 x 190 cm"
            imagen="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80"
          />

          <ItemProducto
            categoria="DORMITORIO"
            nombre="Cama Dos Plazas"
            variante="Roble natural  140 x 190 cm"
            imagen="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80"
          />
        </div>

        <ComoFunciona />

        <button className="btn-agregar">
          ← Agrega más producto
        </button>
      </main>

      <ResumenPedido items={[
        { nombre: "Cama Dos Plazas", cant: 1 },
        { nombre: "Cama Dos Plazas", cant: 1 }
      ]} />
    </div>
  );
}
