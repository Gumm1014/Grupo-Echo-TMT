import "./Header.css"
function Header() {
    return (
        <header className="header">
            <img className="img_logotmt" src="./logo_tmt.png" />
            <div className="lista">

                <p>INICIO</p>
                <p>CATÁLOGO</p>
                <p>PREGUNTAS FRECUENTES</p>


            </div>
            <img className="img_carrito" src="./carrito_icono.png" />
        </header>
    )
}

export default Header