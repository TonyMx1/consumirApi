import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Productos(){
    const [dataProductos,setDataProductos] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/mostrarProductos")
        .then((response)=>{
            setDataProductos(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, []);
    const mostrarProductos = dataProductos.map((producto)=>{
        var editar = "/editar/" + producto.id;
        var borrar ="/borrar/" + producto.id;
        return (
            <tr key={producto.id} className="align-middle">
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.precio}</td>
                <td>
                    <Link to = {editar}>Editar</Link>
                    <Link to = {borrar}>Borrar</Link>
                </td>
            </tr>
        );
    });
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Editar / Borrar</th>
                </tr>
            </thead>
            <tbody>
                {mostrarProductos}
            </tbody>
        </table>
    );
}