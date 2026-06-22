import { LineaResumen } from "./LineaResumen";
import { AvisoPrecio } from "./AvisoPrecio";
import { BotonWhatsapp } from "./BotonWhatsapp";

export function ResumenPedido() {
  return (
    <aside className="resumen-pedido">
      <h2 className="resumen-pedido__titulo">Resumen del pedido</h2>

      <LineaResumen nombre="Cama Dos Plazas" cantidad={1} />
      <LineaResumen nombre="Cama Dos Plazas" cantidad={1} />

      <div className="resumen-pedido__total">
        <span>Total estimado</span>
        <span className="resumen-pedido__total-valor">– &nbsp; Por confirmar</span>
      </div>

      <AvisoPrecio />
      <BotonWhatsapp />
    </aside>
  );
}
