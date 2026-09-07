import { useState } from "react";
import "./preguntasfrecuentes.css";

export default function Preguntasf() {
    const [preguntaAbierta, setPreguntaAbierta] = useState(null);

    const preguntas = [
        {
            pregunta: "¿Cómo funciona el proceso de cotización?",
            respuesta:
                "Nos contás qué mueble necesitás, las medidas y el diseño que tenés en mente. Analizamos el proyecto y te enviamos un presupuesto personalizado."
        },
        {
            pregunta: "¿Realizan envíos a domicilio?",
            respuesta:
                "Sí, realizamos envíos a domicilio. El costo depende de la ubicación y del tamaño del mueble."
        },
        {
            pregunta: "¿Cuánto demora la entrega?",
            respuesta:
                "El tiempo de entrega depende del tipo de mueble y del nivel de personalización. Te informamos el tiempo estimado al confirmar el pedido."
        },
        {
            pregunta: "¿Puedo personalizar los muebles?",
            respuesta:
                "Sí. Podemos adaptar las dimensiones, materiales, colores y otros detalles según tus necesidades."
        },
        {
            pregunta: "¿Qué medios de pago aceptan?",
            respuesta:
                "Aceptamos efectivo y transferencia bancaria."
        },
        {
            pregunta: "¿Los productos tienen garantía?",
            respuesta:
                "Sí, nuestros muebles cuentan con garantía ante problemas relacionados con la fabricación."
        },
        {
            pregunta: "¿Cómo solicito un presupuesto?",
            respuesta:
                "Podés comunicarte con nosotros y enviarnos las medidas y detalles del mueble que querés realizar."
        },
        {
            pregunta: "¿Puedo retirar mi compra personalmente?",
            respuesta:
                "Sí, podés coordinar el retiro de tu compra directamente con nosotros."
        },
        {
            pregunta: "¿Cómo hago seguimiento de mi pedido?",
            respuesta:
                "Te mantenemos informado sobre el avance del proyecto y la fecha estimada de entrega."
        },
        {
            pregunta: "¿Qué pasa si el producto llega dañado?",
            respuesta:
                "Comunicate con nosotros lo antes posible para que podamos revisar el inconveniente y encontrar una solución."
        }
    ];

    const abrirPregunta = (index) => {
        setPreguntaAbierta(
            preguntaAbierta === index ? null : index
        );
    };

    return (
        <section className="pfreq-section">

            <div className="pfreq-header">
                <h2>
                    Preguntas <span>frecuentes</span>
                </h2>

                <p>
                    Todo lo que necesitás saber antes de encargar tus muebles.
                    Si no encontrás tu respuesta, escribinos.
                </p>
            </div>

            <div className="pfreq-content">

                <div className="pfreq-title">
                    <h3>
                        Lo que más <br />
                        nos consultan
                    </h3>
                </div>

                <div className="pfreq-list">

                    {preguntas.map((item, index) => (

                        <div className="pfreq-item" key={index}>

                            {/* PREGUNTA */}
                            <div className="pfreq-pregunta">

                                <span>{item.pregunta}</span>

                                <button
                                    onClick={() => abrirPregunta(index)}
                                    aria-label="Ver respuesta"
                                >
                                    <span
                                        className={`pfreq-icon ${preguntaAbierta === index
                                            ? "cerrar"
                                            : ""
                                            }`}
                                    />
                                </button>

                            </div>

                            {/* RESPUESTA DEBAJO */}
                            {preguntaAbierta === index && (
                                <div className="pfreq-respuesta">
                                    <p>{item.respuesta}</p>
                                </div>
                            )}

                        </div>

                    ))}

                </div>
            </div>

        </section>
    );
}
