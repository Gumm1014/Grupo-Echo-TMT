import { IconoCarrito } from "./iconos/IconoCarrito";
import { IconoFlechaDer } from "./iconos/IconoFlechaDer";

export function CarritoVacio() {
  return (
    <div className="carrito-vacio">
      <div className="carrito-vacio__icono">
        <IconoCarrito />
      </div>
      <h2 className="carrito-vacio__titulo">Tu cotización está vacía</h2>
      <p className="carrito-vacio__texto">
        Explorá el catálogo y sumá los muebles que necesitás.
        <br />
        Te enviamos el presupuesto final por WhatsApp.
      </p>
      <button className="carrito-vacio__boton" type="button">
        <IconoFlechaDer />
        VER CATÁLOGO
      </button>
    </div>
  );
}
