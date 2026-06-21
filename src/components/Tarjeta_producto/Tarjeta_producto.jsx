import "./Tarjeta_producto.css"
function Tarjeta_producto(){
    return(
        <div className="tarjeta-producto">
          
            <div className="header_tarjeta">
                <img src="./prod 4.png" alt="" />
            </div>
            <div className="conten_tarjeta">
                <p className="categ_tarjeta">DORMITORIO</p>
                <p className="titulo_tarjeta">Cama dos plazas</p>
                <p className="info_tarjeta">Estructura robusta en madera maciza. Cabecera tallada. Disponible.</p>
                <div className="linea_tarjeta"></div>
                <div className="ver_detalles">
                    <p>Roble / Pino</p>
                    <div className="fl_vd">
                        <p className="flechita_vd">Ver detalle</p>
                        <img src="./flechita.png" alt="" />
                    </div>
                    

                </div>
            </div>
            
        </div>
    )
}
export default Tarjeta_producto