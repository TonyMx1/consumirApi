import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL_API, URL_IMAGES } from "../config/rutas";

export function Inicio(){
    const [dataUsuarios, setDataUsuarios] = useState([]);
    useEffect(()=>{
        axios.get(URL_API + "mostrarUsuarios")
        .then((response)=>{
            //console.log(response.data);
            setDataUsuarios(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, []);
    const listaUsuarios = dataUsuarios.map((usuario)=>{
        var foto = URL_IMAGES + usuario.foto;
        var editar = "/editar/" + usuario.id;
        var borrar = "/borrar/" + usuario.id;
        return(
            <tr key={usuario.id} className="align-middle">
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.usuario}</td>
                <td><img src={foto} width="100px" height="100px" alt="Foto de perfil"></img></td>
                <td>
                    <Link to = {editar}>Editar</Link> / 
                    <Link to = {borrar}>Borrar</Link>
                </td>
            </tr>
        );
    });
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
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