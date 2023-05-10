/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from "react";

import { toast } from "react-toastify";
export const ZapateroContext = createContext();

// Data Provider
const ZapateroProvider = ({ children }) => {




  const [total, setTotal] = useState(0);

  // const [cart, setCart] = useState([]);
  const [ZapateroData, setZapateroData] = useState([]);
  const [carrito, setCarrito] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8001/inventario");
        const data = await response.json();
        setZapateroData(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

   const sumaTotal = () => {
    const newCarrito = carrito;
    let newTotal = 0
    newCarrito.map((elemento) => (newTotal += elemento.cantidad * elemento.price))
    setTotal(newTotal)
}

useEffect(() => {
    sumaTotal()
}, [carrito])

const agregar = (id) => {
    const newCarrito = [...carrito]
    const posicionCarrito = newCarrito.findIndex(elemento => elemento.id === id)
  toast.success("Se agrego un producto nuevo al carrito");
    if (posicionCarrito >= 0) {
        newCarrito[posicionCarrito].cantidad += 1
        setCarrito(newCarrito)
    } else {
        const buscaZapatero = [...ZapateroData]
        const indexZapatero = buscaZapatero.findIndex(elemento => elemento.id === id)
        const nuevoItem = {
            id: id,
            img: buscaZapatero[indexZapatero].img,
            name: buscaZapatero[indexZapatero].name,
            price: buscaZapatero[indexZapatero].price,
            cantidad: 1
        }
        setCarrito([...carrito, nuevoItem])
    }
}

const eliminar = (id) => {
    const newCarrito = [...carrito]
    const posicionCarrito = newCarrito.findIndex(elemento => elemento.id === id)

    if (posicionCarrito >= 0) {
        if (newCarrito[posicionCarrito].cantidad > 1) {
            newCarrito[posicionCarrito].cantidad -= 1
            setCarrito(newCarrito)
        }
        else {
            const quitarDelcarrito = newCarrito.filter((elemento) => elemento.id !== id)
            setCarrito(quitarDelcarrito)
        }
    }
}

  return (
    <ZapateroContext.Provider
      value={{
      
       ZapateroData, setZapateroData, agregar, eliminar, carrito, total,
        setCarrito,
      }}
    >
      {children}
    </ZapateroContext.Provider>
  );
};

export default ZapateroProvider;
