import "./detalle_producto.css";
import ProductCard from "../../components/catalogo/ProductCard.jsx";
import { useEffect, useState } from "react";
import { useParams } from "wouter";

function Detalle_producto() {

  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [productos, setProductos] = useState([]);
  const [imagenPrincipal, setImagenPrincipal] = useState("");

  useEffect(() => {
    cargarProductos();
  }, []);

  async function cargarProductos() {

    try {

      const url = `https://sheets.googleapis.com/v4/spreadsheets/1551nSJ5je_HKrH2JXx9yEYNiN65tVQNYlknYs1rw2Pk/values/Productos?key=AIzaSyC7xqjgoGTJ8VBe9C-RXinpQcIbBJww1ow`;

      const resp = await fetch(url);
      const datos = await resp.json();

      const filas = datos.values || [];
      const filasProductos = filas.slice(1);

      const listaProductos = filasProductos.map((fila) => ({
        id: fila[0] || "",
        nombre: fila[1] || "",
        categoria: fila[2] || "",
        descripcion: fila[3] || "",
        materiales: fila[4] || "",
        tiempoFabricacion: fila[5] || "",
        ancho: fila[6] || "",
        largo: fila[7] || "",
        estilo: fila[8] || "",
        medidas: fila[9] || "",
        peso: fila[10] || "",
        tapaTerminacion: fila[11] || "",
        lustreColores: fila[12] || "",
        imagen1: fila[13] || "",
        imagen2: fila[14] || "",
        imagen3: fila[15] || "",
      }));

      setProductos(listaProductos);

      const productoEncontrado = listaProductos.find(
        (p) => String(p.id) === String(id)
      );

      setProducto(productoEncontrado);

      if (productoEncontrado) {
        setImagenPrincipal(productoEncontrado.imagen1);
      }

    } catch (error) {

      console.error("Error al cargar el producto:", error);

    }
  }

  if (!producto) {
    return (
      <div className="seccion_det_p">
        <p>Cargando producto...</p>
      </div>
    );
  }

  const productosRelacionados = productos
    .filter(
      (p) =>
        String(p.id) !== String(producto.id) &&
        p.categoria.toLowerCase() === producto.categoria.toLowerCase()
    )
    .slice(0, 5);

  return (

    <div className="seccion_det_p">

      {/* PRODUCTO */}

      <div className="primer_seccion_dp">

        <div className="imgs_dp">

          <div className="otros_img_dp">

            {producto.imagen1 && (
              <img
                src={producto.imagen1}
                alt={producto.nombre}
                onClick={() => setImagenPrincipal(producto.imagen1)}
              />
            )}

            {producto.imagen2 && (
              <img
                src={producto.imagen2}
                alt={producto.nombre}
                onClick={() => setImagenPrincipal(producto.imagen2)}
              />
            )}

            {producto.imagen3 && (
              <img
                src={producto.imagen3}
                alt={producto.nombre}
                onClick={() => setImagenPrincipal(producto.imagen3)}
              />
            )}

          </div>

          <img
            className="imagen_principal_dp"
            src={imagenPrincipal}
            alt={producto.nombre}
          />

        </div>


        <div className="info_dp">

          <h6>
            FABRICACIÓN ARTESANAL · PRODUCTO SELECCIONADO
          </h6>

          <h2>
            {producto.nombre}
          </h2>

          <p className="des_p">
            {producto.descripcion}
          </p>


          <div className="tarjeta_espc_dp">

            <div className="tarjeta_espc">

              <h3>Especificaciones</h3>

              <div className="t_espc_dp">
                <p className="titu_prod">Estilo</p>
                <p className="espc_prod">
                  {producto.estilo || "No especificado"}
                </p>
              </div>

              <div className="linea_dp"></div>

              <div className="t_espc_dp">
                <p className="titu_prod">Medidas</p>
                <p className="espc_prod">
                  {producto.medidas || "No especificado"}
                </p>
              </div>

              <div className="linea_dp"></div>

              <div className="t_espc_dp">
                <p className="titu_prod">Peso</p>
                <p className="espc_prod">
                  {producto.peso || "No especificado"}
                </p>
              </div>

              <div className="linea_dp"></div>

              <div className="t_espc_dp">
                <p className="titu_prod">Ancho</p>
                <p className="espc_prod">
                  {producto.ancho || "No especificado"}
                </p>
              </div>

              <div className="linea_dp"></div>

              <div className="t_espc_dp">
                <p className="titu_prod">Largo</p>
                <p className="espc_prod">
                  {producto.largo || "No especificado"}
                </p>
              </div>

              <div className="linea_dp"></div>

              <div className="t_espc_dp">
                <p className="titu_prod">Tapa / Terminación</p>
                <p className="espc_prod">
                  {producto.tapaTerminacion || "No especificado"}
                </p>
              </div>

              <div className="linea_dp"></div>

              <div className="t_espc_dp">
                <p className="titu_prod">Lustre / Colores</p>
                <p className="espc_prod">
                  {producto.lustreColores || "No especificado"}
                </p>
              </div>

            </div>

          </div>


          <button className="btn_añadir_carrito">

            <img
              src="/carrito_marron.png"
              alt=""
            />

            Añadir al carrito

          </button>

        </div>

      </div>


      {/* SEPARADOR */}

      <div className="sep_dp">

        <div className="linea_dp"></div>

        <div className="circulo_dp">
          o
        </div>

        <div className="linea_dp"></div>

      </div>


      {/* RELACIONADOS */}

      <div className="seccion_de_sugerencias">

        <div className="titulo_s_s">
          <h4>
            Productos relacionados
          </h4>
        </div>

        <div className="tarjetas_s_s">

          {productosRelacionados.map((productoRelacionado) => (

            <ProductCard
              key={productoRelacionado.id}
              producto={productoRelacionado}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default Detalle_producto;