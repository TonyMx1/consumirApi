import axios from "axios";
import { useState } from "react";
import { URL_API } from "../config/rutas";

export function Nuevo() {
    const [nombre, setNombre]=useState("");
    const [usuario, setUsuario]=useState("");
    const [password, setPassword]=useState("");
    const [foto, setFoto]=useState(null);
    const [mensaje, setMensaje]=useState("texto");
    async function guardarDatos(e){
        e.preventDefault();
        console.log(nombre);
        const formData=new FormData();
        formData.append("nombre", nombre);
        formData.append("usuario", usuario)
        formData.append("password", password);
        formData.append("foto", foto);
        const res= await axios.post(URL_API+"nuevousuario", formData, {
            headers:{
                "Content-Type":"multipar/form-data"
            }
        });
        console.log(res);
        setNombre("");
        setUsuario("");
        setPassword("");
        setFoto(null);
        setMensaje(res.data);
        setTimeout(()=>{
            setMensaje("");
        },3000)
    }
    return (
        <div className="container mt-5">
            <div className="text-danger"><h3>{mensaje}</h3></div>
            <form onSubmit={guardarDatos}>
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo usuario</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" placeholder="Nombre" type="text" name="nombre" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} autoFocus />
                        <input className="form-control mb-3" placeholder="Usuario" type="text" name="usuario" id="usuario" value={usuario} onChange={(e)=>{setUsuario(e.target.value)}} />
                        <input className="form-control mb-3" placeholder="Contraseña" type="text" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        <input className="form-control mb-3" type="file" name="foto" id="foto" onChange={(e)=>setFoto(e.target.files[0])} />
                    </div>
                    <div className="card-footer">
                        <button className="form-cotrol btn btn-primary" type="submit">Guardar</button>
                    </div>
                </div>
            </form >
        </div >
    );
}