import { Routes, Route, Navigate } from "react-router-dom";
import ProtegerRuta from "./ProtectedRoute";
import { UserProvider } from "./Context/UserContext";
import { AdminProvider } from "./Context/AdminContext";
import "./App.css";

import Login from "./features/auth/Login/Login";
import { Registrar } from "./features/auth/Registrar/Registrar";
import ResetPassword from "./features/auth/RestablecerPassword";

import Inicio from "./features/public/Inicio/Inicio";
import Comprar from "./features/public/Comprar/Comprar";
import Ventadetalle from "./features/public/Comprar/VentaDetalle";
import Alquiler from "./features/public/Alquiler/Alquiler";
import AlquilerDetalle from "./features/public/Alquiler/AlquilerDetalle";
import AlquilerTemporario from "./features/public/AlquilerTemporario/AlquilerTemporario";
import AlquilerTemporarioDetalle from "./features/public/AlquilerTemporario/AlquilerTemporarioDetalle";
import Tasaciones from "./features/public/Tasaciones/Tasaciones";
import Contacto from "./features/public/Contacto/Contacto";
import Terminos from "./features/public/Componentes/Terminos";
import Privacidad from "./features/public/Componentes/Privacidad";

import Inquilino from "./features/tenant/Inquilino";
import Forms from "./features/tenant/Forms";
import MisDatos from "./features/tenant/MisDatos";
import InicioInquilino from "./features/tenant/InicioInquilino";
import Propiedades from "./features/tenant/Propiedades";

import Perfil from "./features/profile/Perfil";
import EditPerfil from "./features/profile/EditarPerfil";

import Admin from "./features/admin/Admi";
import PropiedadesA from "./features/admin/Propiedades/Propiedades";
import AlquilerTem from "./features/admin/AlquilerTemporario/Temporarios";
import Configuracion from "./features/admin/Configuracion/Configuracion";
import Actividad from "./features/admin/Actividad/Actividad";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path="/iniciarsesion" element={<Login />} />
          <Route path="/registrarse" element={<Registrar />} />
          <Route path="/recuperarcontrasena" element={<ResetPassword />} />

          <Route path="/" element={<Inicio />} />
          <Route path="/venta" element={<Comprar />} />
          <Route path="/venta/detalle/:id" element={<Ventadetalle />} />
          <Route path="/alquiler" element={<Alquiler />} />
          <Route path="/alquiler/detalle/:id" element={<AlquilerDetalle />} />
          <Route path="/alquilerTemporario" element={<AlquilerTemporario />} />
          <Route
            path="/alquilerTemporario/detalle/:id"
            element={<AlquilerTemporarioDetalle />}
          />
          <Route path="/tasaciones" element={<Tasaciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />

          <Route
            path="/cliente"
            element={
              <ProtegerRuta>
                <Inquilino />
              </ProtegerRuta>
            }
          />
          <Route
            path="/cliente/formulario"
            element={
              <ProtegerRuta>
                <Forms />
              </ProtegerRuta>
            }
          />
          <Route
            path="/cliente/misdatos"
            element={
              <ProtegerRuta>
                <MisDatos />
              </ProtegerRuta>
            }
          />
          <Route
            path="/cliente/iniciocliente"
            element={
              <ProtegerRuta>
                <InicioInquilino />
              </ProtegerRuta>
            }
          />
          <Route
            path="/cliente/propiedades"
            element={
              <ProtegerRuta>
                <Propiedades />
              </ProtegerRuta>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtegerRuta>
                <AdminProvider>
                  <Admin />
                </AdminProvider>
              </ProtegerRuta>
            }
          />
          <Route
            path="/admin/propiedades"
            element={
              <ProtegerRuta>
                <AdminProvider>
                  <PropiedadesA />
                </AdminProvider>
              </ProtegerRuta>
            }
          />
          <Route
            path="/admin/temporarios"
            element={
              <ProtegerRuta>
                <AdminProvider>
                  <AlquilerTem />
                </AdminProvider>
              </ProtegerRuta>
            }
          />
          <Route
            path="/admin/configuracion"
            element={
              <ProtegerRuta>
                <AdminProvider>
                  <Configuracion />
                </AdminProvider>
              </ProtegerRuta>
            }
          />
          <Route
            path="/admin/actividad"
            element={
              <ProtegerRuta>
                <AdminProvider>
                  <Actividad />
                </AdminProvider>
              </ProtegerRuta>
            }
          />

          <Route
            path="/perfil"
            element={
              <ProtegerRuta>
                <Perfil />
              </ProtegerRuta>
            }
          />
          <Route
            path="/editarperfil"
            element={
              <ProtegerRuta>
                <EditPerfil />
              </ProtegerRuta>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
