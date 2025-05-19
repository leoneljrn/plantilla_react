import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { Estadisticas } from "../pages/Estadisticas";
import { Productos } from "../pages/Productos";

export function MyRoutes() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/estadisticas" element={<Estadisticas />} />
        </Routes>
    );
}