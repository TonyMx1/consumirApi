import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Inicio(){
    const [dataUsuarios, setDataUsuarios]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/api/mostrarUsuarios")
        .then((respuesta)=>{
            console.log(respuesta);
            setDataUsuarios(respuesta.data)
        })
        .catch((err)=>{
            console.log("Error al recuperar del api" +err);
        });
    },[]);
        const listaUsuarios=dataUsuarios.map((usuario)=>{
            var editar="/editar/" +usuario.id;
            var borrar="/borrar" +usuario.id;
            var foto="http://localhost:3000/images/" +usuario.foto;
            return(
                <tr key={usuario.id} className="align-middle">
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.usuario}</td>
                    <td><img src={foto} width="100px" /></td>
                    <td>
                        <Link to={editar}>Editar</Link> / 
                        <Link to={borrar}>Borrar</Link>
                    </td>
                </tr>
            );
        });
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Foto</th>
                    <th>Editar / Borrar</th>
                </tr>
            </thead>
            <tbody>
                {listaUsuarios}
            </tbody>
        </table>
    );
}