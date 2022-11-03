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
import { Boletas } from "./views/Boletas";
import { Facturas } from "./views/Facturas";
import { DetallePedidos } from "./views/DetallePedidos";
import { PedidoProveedor } from "./views/PedidoProveedor";
import { DetalleOrden } from "./views/DetalleOrden";
import { MovimientoCaja } from "./views/MovimientoCaja";
/* import { Cajas } from "./views/Cajas"; */
import { Proveedores } from "./views/Proveedores";
import { Platos } from "./views/Platos";
import { Reservas } from "./views/Reservas";
import { Ingredientes } from "./views/Ingredientes";
import { Ordenes } from "./views/Ordenes";
import { Ingresos } from "./views/Ingresos";
import { Egresos } from "./views/Egresos";
import { Utilidades } from "./views/Utilidades";
import { Registro } from "./views/Registro";
import { ControlStock } from "./views/ControlStock";
import { PedidoBodega } from "./views/PedidoBodega";
import { Profile } from "./views/Profile";
import { Recetas } from "./views/Recetas";
import { TableroCocina } from "./views/TableroCocina";
import { ReservaWeb } from "./views/ReservaWeb";
import { ReservasCliente } from "./views/ReservasCliente";
import { Inicio } from "./views/Inicio";
import { Nosotros } from "./views/Nosotros";
import { Carta } from "./views/Carta";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/bodegas" element={<Bodegas />} />
        <Route path="/cocinas" element={<Cocinas />} />
        <Route path="/finanzas" element={<Finanzas />} />
        <Route path="/boletas" element={<Boletas />} />
        <Route path="/facturas" element={<Facturas />} />
        <Route path="/detallePedidos" element={<DetallePedidos />} />
        <Route path="/pedidoProveedor" element={<PedidoProveedor />} />
        <Route path="/detalleOrden" element={<DetalleOrden />} />
        <Route path="/movimientoCaja" element={<MovimientoCaja />} />
        {/* <Route path="/cajas" element={<Cajas/>} /> */}
        <Route path="/proveedores" element={<Proveedores/>} />
        <Route path="/platos" element={<Platos/>} />
        <Route path="/reservas" element={<Reservas/>} />
        <Route path="/ingredientes" element={<Ingredientes/>} />
        <Route path="/ordenes" element={<Ordenes/>} />
        <Route path="/ingresos" element={<Ingresos/>} />
        <Route path="/egresos" element={<Egresos/>} />
        <Route path="/utilidades" element={<Utilidades/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/controlStock" element={<ControlStock/>} />
        <Route path="/pedidoBodega" element={<PedidoBodega/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/recetas" element={<Recetas/>}/>
        <Route path="/tableroCocina" element={<TableroCocina/>}/>
        <Route path="/reservaWeb" element = {<ReservaWeb/>}/>
        <Route path="/reservasCliente" element = {<ReservasCliente/>}/>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/carta" element={<Carta/>}/>
        

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
