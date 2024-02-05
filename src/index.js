import React from "react";
import ReactDom from "react-dom/client";
import { Rutas } from "./components/Rutas";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
        <Rutas />
    </>
)