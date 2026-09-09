export const obtenerCarrito = () => {
  const guardado = localStorage.getItem("carrito");

  if (guardado) {
    return JSON.parse(guardado);
  }

  return [];
};

export const guardarCarrito = (carrito) => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

export const agregarAlCarrito = (producto) => {
  const carrito = obtenerCarrito();
  let yaEstaba = false;
  const nuevoCarrito = [];

  carrito.forEach((item) => {
    if (item.id === producto.id) {
      yaEstaba = true;
      nuevoCarrito.push({ ...item, cantidad: item.cantidad + 1 });
    } else {
      nuevoCarrito.push(item);
    }
  });

  if (!yaEstaba) {
    nuevoCarrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito(nuevoCarrito);
  alert(`El producto ${producto.nombre} se agrego al carrito`);
};