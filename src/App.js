import { HashRouter, Route, Routes } from "react-router-dom"
import { Home } from './Home'
import { Login } from './views/Login'
import { Users } from "./views/Users";
import { Mesas } from "./views/Mesas"
import { Productos } from "./views/Productos";
import { Clientes } from "./views/Cliente";
import { Bodegas } from "./views/Bodega";
import { Cocinas } from "./views/Cocina";
import { Finanzas } from "./views/Finanzas";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/bodegas" element={<Bodegas />} />
        <Route path="/cocinas" element={<Cocinas />} />
        <Route path="/finanzas" element={<Finanzas />} />
        <Route
          path="about"
          element={
            <h1>
              about <a href="#">go back</a>
            </h1>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
