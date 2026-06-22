import { SofaMini } from "./iconos/SofaMini";
import { IconoCerrar } from "./iconos/IconoCerrar";
import { SelectorCantidad } from "./SelectorCantidad";

export function ItemCarrito() {
  return (
    <div className="item-carrito">
      <div className="item-carrito__foto">
        <SofaMini />
      </div>

      <div className="item-carrito__info">
        <p className="item-carrito__categoria">DORMITORIO</p>
        <h3 className="item-carrito__nombre">Cama Dos Plazas</h3>
        <p className="item-carrito__detalle">Roble natural  140 x 190 cm</p>
      </div>

      <button className="item-carrito__sacar" type="button" aria-label="Sacar producto">
        <IconoCerrar />
      </button>

      <div className="item-carrito__derecha">
        <SelectorCantidad cantidad={1} />
        <div className="item-carrito__precio">
          <span className="item-carrito__precio-cant">x1</span>
          <span className="item-carrito__precio-label">A cotizar</span>
        </div>
      </div>
    </div>
  );
}
