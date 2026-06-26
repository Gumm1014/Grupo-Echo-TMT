import "./home.css";


import principalImg from "../../assets/principal.png";
import dormitorioImg from "../../assets/dormitorio.png";
import cocinaImg from "../../assets/cocina.png";
import livingImg from "../../assets/living.png";
import trabajadoresImg from "../../assets/trabajadores.png";

import seleccionImg from "../../assets/seleccion.png";
import medidaImg from "../../assets/medida.png";
import presupuestoImg from "../../assets/presupuesto.png";

function Home() {
  const features = [
    {
      title: "Madera Seleccionada",
      desc: "Cada pieza comienza con la elección del material. Trabajamos con roble, pino y nogal de origen controlado.",
      icon: <img src={seleccionImg} alt="" />
    },
    {
      title: "Trabajos a Medida",
      desc: "Mesadas, sobremesadas y cocinas diseñadas para cada espacio. Sin moldes. Sin soluciones genéricas.",
      icon: <img src={medidaImg} alt="" />
    },
    {
      title: "Presupuesto directo",
      desc: "Los materiales valen. Por eso cotizamos cada proyecto de forma personalizada. Sin sorpresas al final.",
      icon: <img src={presupuestoImg} alt="" />
    }
  ];

  const categorias = [
    {
      nombre: "Dormitorio",
      img: dormitorioImg

    },
    {
      nombre: "Cocina",
      img: cocinaImg
    },
    {
      nombre: "Living",
      img: livingImg
    }

  ];


  const handleCategoriaClick = (nombre) => {
    console.log("Ir a categoría:", nombre);
  };

  const destacados = [
    {
      titulo: "Vestidor a medida",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4u7igCeV2opyYEWUscKPL1jgfyrmZ8DNuOA&s",
      tiempo: "28 días",
      ancho: "2,5 m de ancho",
      largo: "1,70 m de largo",
      descripcion: "Cuenta con una amplia superficie para televisores y espacios de almacenamiento que permiten organizar dispositivos..."
    },
    {
      titulo: "Vestidor a medida",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4u7igCeV2opyYEWUscKPL1jgfyrmZ8DNuOA&s",
      tiempo: "28 días",
      ancho: "2,5 m de ancho",
      largo: "1,70 m de largo",
      descripcion: "Cuenta con una amplia superficie para televisores y espacios de almacenamiento que permiten organizar dispositivos..."
    },
    {
      titulo: "Vestidor a medida",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4u7igCeV2opyYEWUscKPL1jgfyrmZ8DNuOA&s",
      tiempo: "28 días",
      ancho: "2,5 m de ancho",
      largo: "1,70 m de largo",
      descripcion: "Cuenta con una amplia superficie para televisores y espacios de almacenamiento que permiten organizar dispositivos..."
    },
    {
      titulo: "Vestidor a medida",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4u7igCeV2opyYEWUscKPL1jgfyrmZ8DNuOA&s",
      tiempo: "28 días",
      ancho: "2,5 m de ancho",
      largo: "1,70 m de largo",
      descripcion: "Cuenta con una amplia superficie para televisores y espacios de almacenamiento que permiten organizar dispositivos..."
    },
    {
      titulo: "Vestidor a medida",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4u7igCeV2opyYEWUscKPL1jgfyrmZ8DNuOA&s",
      tiempo: "28 días",
      ancho: "2,5 m de ancho",
      largo: "1,70 m de largo",
      descripcion: "Cuenta con una amplia superficie para televisores y espacios de almacenamiento que permiten organizar dispositivos..."
    }
  ];
  return (
    <div className="home-page">
      {/* HERO */}
      <header
        className="home-hero"
        style={{ backgroundImage: `url(${principalImg})` }}
      >
        <div className="home-hero-content">
          <h1>Muebles que perduran en el tiempo</h1>
          <div className="home-search">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input type="text" placeholder="Buscar muebles..." />
          </div>
        </div>

        <div className="home-features">
          {features.map((f) => (
            <div className="home-feature-card" key={f.title}>
              <div className="home-feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </header>

      {/* CATEGORIAS */}
      <section className="home-categorias">
        <span className="home-eyebrow">CATEGORIAS</span>
        <h2>Explorá por ambiente</h2>

        <div className="home-categorias-grid">
          {categorias.map((c) => (
            <button
              className="home-categoria-card"
              key={c.nombre}
              onClick={() => handleCategoriaClick(c.nombre)}
            >
              <img src={c.img} alt={c.nombre} />

              <span>{c.nombre}</span>

            </button>
          ))}
        </div>
      </section>

      {/* OFERTAS */}
      <section className="home-ofertas">
        <div className="home-ofertas-titulo">
          <h2>¡OFERTAS!</h2>
        </div>

        <div className="home-oferta-card">
          <img
            className="home-oferta-img"
            src="https://silloneseuropa.com.ar/wp-content/uploads/2020/10/ringo-1.jpg"
            alt="Sillón Nórdico"
          />
          <div className="home-oferta-info">
            <h3>Sillón Nórdico</h3>
            <p>
              Ideal para living o sala de estar. Tapizado en tela de alta
              calidad, con estructura resistente y diseño elegante.
            </p>
            <span className="home-oferta-descuento">30% de descuento</span>
            <button className="home-oferta-btn">
              Consultar
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.4A10 10 0 1012 2z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M8.5 8.5c.3 2 1.5 4.5 3.4 6.4 1.9 1.9 4 3 6 3.4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>


      {/* DESTACADOS */}

      <section className="home-destacados">

        <span className="home-destacados-subtitulo">
          DESTACADOS
        </span>

        <h2>Algunos de nuestros productos personalizados</h2>

        <div className="home-destacados-grid">

          {destacados.map((producto, index) => (

            <div className="home-producto-card" key={index}>

              <img
                src={producto.imagen}
                alt={producto.titulo}
              />

              <div className="home-producto-info">

                <h3>{producto.titulo}</h3>

                <div className="home-producto-linea"></div>

                <p className="home-caracteristica">
                  ⏱ {producto.tiempo}
                </p>

                <p className="home-caracteristica">
                  ↔ {producto.ancho}
                </p>

                <p className="home-caracteristica">
                  ↕ {producto.largo}
                </p>

                <p className="home-producto-descripcion">
                  {producto.descripcion}
                </p>

                <a href="#">
                  Ver más...
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>
      {/* SOBRE NOSOTROS */}

      <section className="home-nosotros">

        <div className="home-nosotros-img">

          <img
            src={trabajadoresImg}
            alt="Nuestro equipo"
          />

        </div>

        <div className="home-nosotros-info">

          <span className="home-nosotros-tag">
            ¿QUIÉNES SOMOS?
          </span>

          <h2>
            No fabricamos muebles en serie.
            <br />
            Fabricamos el tuyo.
          </h2>

          <p>
            Somos Carlos y Juan López, padre e hijo. El taller lo arrancó Carlos con sus propias
            manos en 1998, cuando todavía se hacía todo a ojo y a escuadra. Hoy trabajamos
            juntos con las mismas herramientas de siempre y tecnología nueva: roble, pino y
            lapacho de origen controlado, procesos prolijos y la misma dedicación de siempre.
          </p>

          <div className="home-nosotros-estadisticas">

            <div>

              <h3>25+</h3>

              <span>
                Años de
                <br />
                trayectoria
              </span>

            </div>

            <div>

              <h3>800+</h3>

              <span>
                Proyectos
                <br />
                entregados
              </span>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;