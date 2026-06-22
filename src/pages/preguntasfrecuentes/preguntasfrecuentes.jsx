import "./preguntasfrecuentes.css"


export default function Preguntasf() {
    const preguntas = [
        "¿Cómo funciona el proceso de cotización?",
        "¿Realizan envíos a domicilio?",
        "¿Cuánto demora la entrega?",
        "¿Puedo personalizar los muebles?",
        "¿Qué medios de pago aceptan?",
        "¿Los productos tienen garantía?",
        "¿Cómo solicito un presupuesto?",
        "¿Puedo retirar mi compra personalmente?",
        "¿Cómo hago seguimiento de mi pedido?",
        "¿Qué pasa si el producto llega dañado?"
    ];

    return (
        <section className="pf">
            <div className="pf-header">
                <h2>
                    Preguntas <span>frecuentes</span>
                </h2>
                <p>
                    Todo lo que necesitás saber antes de encargar tus muebles.
                    Si no encontrás tu respuesta, escribinos.
                </p>
            </div>

            <div className="pf-content">
                <div className="titulito">
                    <h3>
                        Lo que más <br />
                        nos consultan
                    </h3>
                </div>

                <div className="lista">
                    {preguntas.map((pregunta, index) => (
                        <div className="pfitem" key={index}>
                            <span>{pregunta}</span>
                            <button>+</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}