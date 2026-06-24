import "./detalle_producto.css"
import Tarjeta from '../../components/Tarjeta_producto/Tarjeta_producto.jsx';
function detalle_producto() {
  return (
    <div className="seccion_det_p">
      <div className="primer_seccion_dp">
        <div className="imgs_dp">
          <div className="otros_img_dp">
            <img src="./detalle_prod/Mesa-comedor-madera-Nordica-Classic-SILVINA-C-2 9.png" alt="" />
            <img src="./detalle_prod/Mesa-comedor-madera-Nordica-Classic-SILVINA-C-2 10.png" alt="" />
            <img src="./detalle_prod/Mesa-comedor-madera-Nordica-Classic-SILVINA-C-2 11.png" alt="" />

          </div>
          <img className="imagen_principal_dp" src="./detalle_prod/Mesa-comedor-madera-Nordica.png" alt="" />
        </div>


        <div className="info_dp">
          <h6>FABRICACION ARTESANAL · PRODUCTO SELECCIONADO</h6>
          <h2>Mesa cuadrada estrella de comedor 4 personas</h2>
          <p className="des_p">Pensado y diseñado para ser usado para que se sienten cuatro personas cómodas, sin incomodar los pies, ya que su apoyo se encuentra en el centro.</p>

          <div className="tarjeta_espc_dp">
            <div className="tarjeta_espc">

              <h3>Especificaciones</h3>
              <div className="t_espc_dp">
                <p className="titu_prod">Estilo</p>
                <p className="espc_prod">Estrella</p>
              </div>
              <div class="linea_dp"></div>
              <div className="t_espc_dp">
                <p className="titu_prod">Medidas</p>
                <p className="espc_prod">100x100x78cm</p>
              </div>
              <div class="linea_dp"></div>
              <div className="t_espc_dp">
                <p className="titu_prod">Peso</p>
                <p className="espc_prod">99 kg</p>
              </div>
              <div class="linea_dp"></div>
              <div className="t_espc_dp">
                <p className="titu_prod">Tapa</p>
                <p className="espc_prod">Enchapada en Paraíso o Petiribí</p>
              </div>
              <div class="linea_dp"></div>
              <div className="t_espc_dp">
                <p className="titu_prod">Lustre</p>
                <p className="espc_prod">Natural, Miel, Petiribí, Wengué, Nogal, Blanco y Negro.</p>
              </div>

            </div>

          </div>
          <button className="btn_añadir_carrito">
            <img src="./carrito_marron.png" alt="" />
           Añadir al carrito
          </button>

        </div>
      </div>

      <div className="sep_dp">
        <div class="linea_dp"></div>
        <div className="circulo_dp">o</div>
        <div class="linea_dp"></div>
      </div>

      <div className="seccion_de_sugerencias">
        <div className="titulo_s_s">
          <h4>Productos relacionados</h4>

        </div>
        <div className="tarjetas_s_s">
          <Tarjeta />
          <Tarjeta />
          <Tarjeta />
          <Tarjeta />
          <Tarjeta />
        </div>


      </div>



    </div>
  )
}

export default detalle_producto