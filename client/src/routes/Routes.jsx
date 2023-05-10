import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Home from "../pages/Home";

import Login from "../pages/Login";

import Register from "../pages/Register";



import Dashboard from "../pages/Dashboard";


import { useSelector } from "react-redux";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
// import FormZapateroEditar from "../components/FormZapateroEditar";
import ZapateroDetails from "../pages/ZapateroDetails";
import FormZapatero from "../components/FormZapatero";

import Hombre from "../pages/Hombre";
const Routers = () => {
  const PrivateRoutes = () => {
    const { isAuth } = useSelector((state) => state.auth);

    return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
  };

  const RestrictedRoutes = () => {
    const { isAuth } = useSelector((state) => state.auth);

    return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
  };

  return (
    <Routes>
      {/* rutas públicas */}
   
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/zapatero/:id" element={<ZapateroDetails />} />
      <Route path="/hombre" element={<Hombre />} />
      {/* rutas privada */}
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form/new" element={<FormZapatero />} />
        <Route path="/edit/:id" element={<FormZapatero />} />
        <Route path='/register' element={<Register />} />
      </Route>

      {/* rutas restringida  */}
      <Route element={<RestrictedRoutes />}>
    
          <Route path='/login' element={<Login />} />
 
       
      </Route>
    </Routes>
  );
};

export default Routers;
