import "./Header.css"
import { Link } from "wouter"
function Header() {
    return (
        <>
            <input type="checkbox" id="menu-toggle" className="menu-checkbox" />

            <header className="header">
                <img className="img_logotmt" src="./logo_tmt.png" alt="Logo TMT" />

                <nav className="lista">

                    <Link className="link_nav" href="/home"><p>INICIO</p></Link>
                    <Link className="link_nav" href="/catalogo"><p>CATÁLOGO</p></Link>
                    <Link className="link_nav" href="/preguntasfrecuentes"><p>PREGUNTAS FRECUENTES</p></Link>


                </nav>

                <Link href="/carrito"><img className="img_carrito desktop-only" src="./carrito_icono.png" alt="Carrito" /></Link>

                <label className="hamburger-toggle" htmlFor="menu-toggle" aria-label="Abrir menú">
                    <img className="hambur-header.png" src="./hambur-header.png" alt="Menú" />
                </label>
            </header>

            <div className="mobile-menu">
                <div className="mobile-menu__header">
                    <img className="mobile-menu__logo" src="./logo_tmt.png" alt="Logo TMT" />
                    <label className="mobile-menu__close" htmlFor="menu-toggle" aria-label="Cerrar menú">
                        ✕
                    </label>
                </div>

                <nav>
                    <ul className="mobile-menu__list">
                        <Link className="link_nav" href="/home">
                            <li className="mobile-menu__item">
                                <img src="./casita.png" alt="" className="mobile-menu__icon" />
                                <span>HOME</span>
                            </li>
                        </Link>
                        <Link className="link_nav" href="/catalogo">
                            <li className="mobile-menu__item">
                                <img src="./mueblecito.png" alt="" className="mobile-menu__icon" />
                                <span>CATALOGO</span>
                            </li>
                        </Link>
                        <Link className="link_nav" href="/preguntasfrecuentes">
                            <li className="mobile-menu__item">
                                <img src="./pregunta-frec.png" alt="" className="mobile-menu__icon" />
                                <span>PREGUNTAS FRECUENTES</span>
                            </li>
                        </Link>

                        <Link className="link_nav" href="/carrito">
                            <li className="mobile-menu__item">
                                <img src="./carrito-header.png" alt="" className="mobile-menu__icon" />
                                <span>CARRITO</span>
                            </li>
                        </Link>




                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header