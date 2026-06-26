import "./carrito.css";
import Encabezado from "../../components/carrito/Encabezado";
import ItemProducto from "../../components/carrito/ItemProducto";
import ComoFunciona from "../../components/carrito/ComoFunciona";
import ResumenPedido from "../../components/carrito/ResumenPedido";

const items = [
  { nombre: "Cama Dos Plazas", cant: 1 },
  { nombre: "Cama Dos Plazas", cant: 1 },
];

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

        <button className="btn-whatsapp-mobile">
          <svg className="icono-ws" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.534 5.845L.054 23.447a.5.5 0 0 0 .619.619l5.602-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.887 9.887 0 0 1-5.034-1.374l-.36-.214-3.733.986.989-3.614-.235-.372A9.9 9.9 0 0 1 2.1 12C2.1 6.535 6.535 2.1 12 2.1S21.9 6.535 21.9 12 17.465 21.9 12 21.9z"/>
          </svg>
          <span>Solicitar presupuesto por WhatsApp</span>
        </button>
      </main>

      <ResumenPedido items={items} />
    </div>
  );
}