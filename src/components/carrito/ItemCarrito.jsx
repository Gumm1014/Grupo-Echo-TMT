import { SofaMini } from "./iconos/SofaMini";
import { IconoCerrar } from "./iconos/IconoCerrar";
import { SelectorCantidad } from "./SelectorCantidad";

export function ItemCarrito({ categoria, nombre, material, medidas, cantidad }) {
  return (
    <div className="item-carrito">
      <div className="item-carrito__foto">
        <SofaMini />
      </div>

      <div className="item-carrito__info">
        <p className="item-carrito__categoria">{categoria}</p>
        <h3 className="item-carrito__nombre">{nombre}</h3>
        <p className="item-carrito__detalle">{material}  {medidas}</p>
      </div>

      <button className="item-carrito__sacar" type="button" aria-label="Sacar producto">
        <IconoCerrar />
      </button>

      <div className="item-carrito__derecha">
        <SelectorCantidad cantidad={cantidad} />
        <div className="item-carrito__precio">
          <span className="item-carrito__precio-cant">x{cantidad}</span>
          <span className="item-carrito__precio-label">A cotizar</span>
        </div>
      </div>
    </div>
  );
}
