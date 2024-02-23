import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL_API_PRO } from "../config/rutas";

export function EditarProducto() {
    const params = useParams();

    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [nombreFoto, setNombreFoto] = useState("");
    const [fotoVieja, setFotoVieja] = useState("");
    const [foto, setFoto] = useState(null);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        async function buscarDatos() {
            try {
                const res = await axios.get(URL_API_PRO + `pro/api/buscarProductoPorId/${params.id}`);
                setId(res.data.id);
                setNombre(res.data.nombre);
                setPrecio(res.data.precio);
                setFotoVieja(res.data.foto);
                setNombreFoto( `http://localhost:3000/images/${res.data.foto}`);
                console.log(res.data);
            } catch (error) {
                console.error("Error al buscar datos:", error);
            }
        }
        buscarDatos();
    }, []);

    async function actualizarProducto(e) {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("id", id);
            formData.append("nombre", nombre);
            formData.append("precio", precio);
            formData.append("fotoVieja", fotoVieja);
            formData.append("foto", foto);

            const respuesta = await axios.post(URL_API_PRO + "pro/api/editarPro", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(respuesta);
            setMensaje(respuesta.data);
            setTimeout(() => {
                setMensaje("");
            }, 3000);
        } catch (error) {
            console.error("Error al actualizar producto:", error);
        }
    }

    return (
        <form onSubmit={actualizarProducto} method="post" encType="multipart/form-data">
            <div className="container mt-5">
                <div className="text-danger"><h3>{mensaje}</h3></div>
                <div className="card">
                    <div className="card-header">
                        <h1>Modificar producto</h1>
                    </div>
                    <div className="card-body">
                        <input type="hidden" name="fotoVieja" id="fotoVieja" value={fotoVieja} readOnly />
                        <input className="form-control mb-3" type="text" placeholder="Id" name="id" id="id" value={id} readOnly />
                        <input className="form-control mb-3" type="text" placeholder="Nombre" name="nombre" id="nombre" value={nombre} autoFocus onChange={(e) => setNombre(e.target.value)} />
                        <input className="form-control mb-3" type="text" placeholder="Precio" name="precio" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                        <div>
                            <img src={nombreFoto} width="100" alt="Foto de producto" />
                        </div>
                        <input className="form-control mb-3" type="file" placeholder="Foto" name="foto" id="foto" onChange={(e) => setFoto(e.target.files[0])} />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary form-control mb-3 mt-3" type="Submit">Modificar producto</button>
                    </div>
                </div>
            </div>
        </form>
    );
}