import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { URL_API_PRO } from "../config/rutas";

export function BorrarProducto(){
    const params =useParams();
    const navigate = useNavigate();
    useEffect (()=>{
        async function borrarPro(){
            const res = axios.get( URL_API_PRO + "pro/api/borrarPro/" + params.id);
            console.log(res);
            navigate("/productos");
        }
        borrarPro();
    }, [params.id]);
    return(
        <h1>Borrar Producto</h1>
    )
}