import { useState, useEffect } from "react";

// URL de la hoja "Productos" vía Google Sheets API v4.
// Recordá restringir esta API key en Google Cloud Console
// (solo Sheets API, solo lectura) para mayor seguridad.
const SHEET_URL =
    "https://sheets.googleapis.com/v4/spreadsheets/1551nSJ5je_HKrH2JXx9yEYNiN65tVQNYlknYs1rw2Pk/values/Productos?key=AIzaSyC7xqjgoGTJ8VBe9C-RXinpQcIbBJww1ow";

// Cache en memoria: evita pedir la hoja de nuevo cada vez que
// se monta Home, Catálogo o Detalle dentro de la misma sesión.
let cache = null;
let promesaEnCurso = null;

function normalizarClave(header) {
    return header
        .toString()
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // saca tildes: "categoría" -> "categoria"
        .replace(/\s+/g, ""); // saca espacios: "imagen 1" -> "imagen1"
}

function filaAObjeto(headers, fila) {
    const obj = {};
    headers.forEach((header, i) => {
        const clave = normalizarClave(header);
        obj[clave] = (fila[i] ?? "").toString().trim();
    });
    return obj;
}

async function cargarProductos() {
    if (cache) return cache;
    if (promesaEnCurso) return promesaEnCurso;

    promesaEnCurso = fetch(SHEET_URL)
        .then((res) => {
            if (!res.ok) throw new Error("No se pudo cargar la hoja de productos");
            return res.json();
        })
        .then((data) => {
            const filas = data.values || [];
            if (filas.length < 2) {
                cache = [];
                return cache;
            }

            const [headers, ...resto] = filas;
            cache = resto
                .filter((fila) => fila.length > 0)
                .map((fila) => filaAObjeto(headers, fila));

            return cache;
        })
        .finally(() => {
            promesaEnCurso = null;
        });

    return promesaEnCurso;
}

export function useProductos() {
    const [productos, setProductos] = useState(cache || []);
    const [cargando, setCargando] = useState(!cache);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (cache) {
            setProductos(cache);
            setCargando(false);
            return;
        }

        let cancelado = false;
        setCargando(true);

        cargarProductos()
            .then((lista) => {
                if (!cancelado) {
                    setProductos(lista);
                    setCargando(false);
                }
            })
            .catch((err) => {
                if (!cancelado) {
                    setError(err.message);
                    setCargando(false);
                }
            });

        return () => {
            cancelado = true;
        };
    }, []);

    return { productos, cargando, error };
}