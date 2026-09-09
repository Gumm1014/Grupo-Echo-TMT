import { useParams, Link } from "wouter";
import "./detalle_producto.css";
import ProductCard from '../../components/catalogo/ProductCard.jsx';
import { useProductos } from "../../hooks/useProductos.js";

function DetalleProducto() {
  const { id } = useParams();
  const { productos, cargando, error } = useProductos();

  if (cargando) {
    return <p className="seccion_det_p">Cargando producto...</p>;
  }

  if (error) {
    return <p className="seccion_det_p">No se pudo cargar el producto.</p>;
  }

  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return (
      <div className="seccion_det_p">
        <p>No encontramos este producto.</p>
        <Link href="/catalogo">Volver al catálogo</Link>
      </div>
    );
  }

  const relacionados = productos
    .filter((p) => p.id !== producto.id && p.categoria === producto.categoria)
    .slice(0, 4);

  return (
    <div className="seccion_det_p">
      <div className="primer_seccion_dp">
        <div className="imgs_dp">
          <div className="otros_img_dp">
            {producto.imagen2 && <img src={producto.imagen2} alt="" />}
            {producto.imagen3 && <img src={producto.imagen3} alt="" />}
            {producto.imagen4 && <img src={producto.imagen4} alt="" />}
          </div>
          <img
            className="imagen_principal_dp"
            src={producto.imagen1}
            alt={producto.nombre}
          />
        </div>

        <div className="info_dp">
          <h6>FABRICACION ARTESANAL · PRODUCTO SELECCIONADO</h6>
          <h2>{producto.nombre}</h2>
          <p className="des_p">{producto.descripcion}</p>

          <div className="tarjeta_espc_dp">
            <div className="tarjeta_espc">
              <h3>Especificaciones</h3>

              <div className="t_espc_dp">
                <p className="titu_prod">Estilo</p>
                <p className="espc_prod">{producto.estilo}</p>
              </div>
              <div className="linea_dp"></div>

              <div className="t_espc_dp">
                <p className="titu_prod">Medidas</p>
                <p className="espc_prod">{producto.medidas}</p>
              </div>
              <div className="linea_dp"></div>

              <div className="t_espc_dp">
                <p className="titu_prod">Peso</p>
                <p className="espc_prod">{producto.peso}</p>
              </div>
              <div className="linea_dp"></div>

              <div className="t_espc_dp">
                <p className="titu_prod">Tapa</p>
                <p className="espc_prod">{producto.tapa}</p>
              </div>
              <div className="linea_dp"></div>

              <div className="t_espc_dp">
                <p className="titu_prod">Lustre</p>
                <p className="espc_prod">{producto.lustre}</p>
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
        <div className="linea_dp"></div>
        <div className="circulo_dp">o</div>
        <div className="linea_dp"></div>
      </div>

      <div className="seccion_de_sugerencias">
        <div className="titulo_s_s">
          <h4>Productos relacionados</h4>
        </div>
        <div className="tarjetas_s_s tarjetas_s_s--4col">
          {relacionados.length > 0 ? (
            relacionados.map((p) => <ProductCard key={p.id} producto={p} />)
          ) : (
            <p>No hay productos relacionados por ahora.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;