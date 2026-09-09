import { useState, useEffect } from "react";
import { obtenerCarrito, guardarCarrito } from "../../utils/carrito.js";
import { useLocation } from "wouter";
import "./carrito.css";
import Encabezado from "../../components/carrito/Encabezado";
import ItemProducto from "../../components/carrito/ItemProducto";
import ComoFunciona from "../../components/carrito/ComoFunciona";
import ResumenPedido from "../../components/carrito/ResumenPedido";

export default function Carrito() {
  const [carrito, setCarrito] = useState(() => obtenerCarrito());
  const [, setLocation] = useLocation();
  useEffect(() => {
    guardarCarrito(carrito);
  }, [carrito]);
  const eliminarProducto = (id) => {
    const nuevoCarrito = [];

    carrito.forEach((producto) => {
      if (producto.id !== id) {
        nuevoCarrito.push(producto);
      }
    });

    setCarrito(nuevoCarrito);
  };


  const sumarCantidad = (id) => {
    const nuevoCarrito = [];

    carrito.forEach((producto) => {
      if (producto.id === id) {
        const productoActualizado = { ...producto, cantidad: producto.cantidad + 1 };
        nuevoCarrito.push(productoActualizado);
      } else {
        nuevoCarrito.push(producto);
      }
    });

    setCarrito(nuevoCarrito);
  };

  const restarCantidad = (id) => {
    const nuevoCarrito = [];

    carrito.forEach((producto) => {
      if (producto.id === id && producto.cantidad > 1) {
        const productoActualizado = { ...producto, cantidad: producto.cantidad - 1 };
        nuevoCarrito.push(productoActualizado);
      } else {
        nuevoCarrito.push(producto);
      }
    });

    setCarrito(nuevoCarrito);
  };

  const itemsResumen = [];
  carrito.forEach((producto) => {
    itemsResumen.push({ nombre: producto.nombre, cant: producto.cantidad });
  });

  return (
    <div className="pagina">
      <main className="contenido">
        <Encabezado cantProductos={carrito.length} />

        <div className="lista-productos">
          {carrito.map((producto) => (
            <ItemProducto
              key={producto.id}
              categoria={producto.categoria}
              nombre={producto.nombre}
              variante={`${producto.materiales} ${producto.medidas}`}
              imagen={producto.imagen1}
              cantidad={producto.cantidad}
              onEliminar={() => eliminarProducto(producto.id)}
              onSumar={() => sumarCantidad(producto.id)}
              onRestar={() => restarCantidad(producto.id)}
            />
          ))}
        </div>

        <ComoFunciona />

        <button
          className="btn-agregar"
          onClick={() => setLocation("/catalogo")}
        >
          ← Agrega más producto
        </button>

        <button className="btn-whatsapp-mobile"
          onClick={() => {
            let mensaje = "Hola! Quisiera consultar por los siguientes productos:\n";

            carrito.forEach((producto) => {
              mensaje += `- ${producto.nombre} x${producto.cantidad}\n`;
            });

            const mensajeCodificado = encodeURIComponent(mensaje);
            const url = `https://wa.me/5492901535524?text=${mensajeCodificado}`;

            window.open(url, "_blank");
          }}

        >
          <svg className="icono-ws" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.534 5.845L.054 23.447a.5.5 0 0 0 .619.619l5.602-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.887 9.887 0 0 1-5.034-1.374l-.36-.214-3.733.986.989-3.614-.235-.372A9.9 9.9 0 0 1 2.1 12C2.1 6.535 6.535 2.1 12 2.1S21.9 6.535 21.9 12 17.465 21.9 12 21.9z" />
          </svg>
          <span>Solicitar presupuesto por WhatsApp</span>
        </button>
      </main>

      <ResumenPedido items={itemsResumen} carrito={carrito} />
    </div>
  );
}