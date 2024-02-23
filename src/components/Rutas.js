import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Inicio } from "./Inicio";
import { Menu } from "./Menu";
import { Productos } from "./Productos";
import { Nuevo } from "./Nuevo";
import { Editar } from "./Editar";
import { BorrarUsuario } from "./Borrar";
import { NuevoProducto } from "./NuevoProducto";
import { EditarProducto } from "./EditarProducto";
import { BorrarProducto } from "./BorrarProducto";

export function Rutas() {
    return (
        <>
        <Menu/>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Error />}></Route>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/productos" element={<Productos />}></Route>
                    <Route path="/nuevo" element={<Nuevo />}></Route>
                    <Route path="/nuevoProducto" element={<NuevoProducto />}></Route>
                    <Route path="/editar/:id" element={<Editar />}></Route>
                    <Route path="/borrar/:id" element={<BorrarUsuario />}></Route>
                    <Route path="/editarProducto/:id" element={<EditarProducto />}></Route>
                    <Route path="/borrarProducto/:id" element={<BorrarProducto />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}