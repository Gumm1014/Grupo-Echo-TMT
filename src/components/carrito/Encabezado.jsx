export default function Encabezado({ cantProductos }) {
  return (
    <div className="encabezado">
      <h1 className="titulo">Tu cotización</h1>
      <span className="contador">{cantProductos} productos seleccionados</span>
    </div>
  );
}