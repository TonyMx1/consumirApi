import axios from "axios";
import { useState } from "react";
import { URL_API_PRO } from "../config/rutas";

// Componente para agregar un nuevo producto
export function NuevoProducto() {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [mensaje, setMensaje] = useState("");

    async function guardarProducto(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("cantidad", cantidad);
        formData.append("precio", precio);
        try {
            const res = await axios.post(URL_API_PRO + "api/nuevoproducto", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(res);
            setNombre("");
            setCantidad("");
            setPrecio("");
            setMensaje("Producto agregado correctamente");
        } catch (error) {
            console.error(error);
            setMensaje("Error al agregar el producto");
        }
        setTimeout(() => {
            setMensaje("");
        }, 3000);
    }

    return (
        <div className="container mt-5">
            <div className="text-danger"><h2>{mensaje}</h2></div>
            <form onSubmit={guardarProducto}>
                <div className="card">
                    <div className="card-header">
                        <h1>Registro de producto</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" type="text" name="nombre" id="nombre" placeholder="Nombre" autoFocus onChange={(e)=>setNombre(e.target.value)}></input>
                        <input className="form-control mb-3" type="text" name="cantidad" id="cantidad" placeholder="Cantidad" onChange={(e)=>setCantidad(e.target.value)} ></input>
                        <input className="form-control mb-3" type="text" name="precio" id="precio" placeholder="Precio" onChange={(e)=>setPrecio(e.target.files[0])}></input>
                    </div>
                    <div className="card-footer">
                        <button className=" form-control btn btn-primary" type="submit">Registrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}