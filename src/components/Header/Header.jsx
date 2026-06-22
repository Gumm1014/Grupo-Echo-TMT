import "./Header.css"

function Header() {
    return (
        <>
            <input type="checkbox" id="menu-toggle" className="menu-checkbox" />

            <header className="header">
                <img className="img_logotmt" src="./logo_tmt.png" alt="Logo TMT" />

                <nav className="lista">
                    <p>INICIO</p>
                    <p>CATÁLOGO</p>
                    <p>PREGUNTAS FRECUENTES</p>
                </nav>

                <img className="img_carrito desktop-only" src="./carrito_icono.png" alt="Carrito" />

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
                        <li className="mobile-menu__item">
                            <img src="./casita.png" alt="" className="mobile-menu__icon" />
                            <span>HOME</span>
                        </li>
                        <li className="mobile-menu__item">
                            <img src="./mueblecito.png" alt="" className="mobile-menu__icon" />
                            <span>CATALOGO</span>
                        </li>
                        <li className="mobile-menu__item">
                            <img src="./pregunta-frec.png" alt="" className="mobile-menu__icon" />
                            <span>PREGUNTAS FRECUENTES</span>
                        </li>
                        <li className="mobile-menu__item">
                            <img src="./carrito-header.png" alt="" className="mobile-menu__icon" />
                            <span>CARRITO</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header