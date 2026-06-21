import { useState } from 'react'
import './App.css'
import { Router, Route, Switch } from "wouter";
import Header from './components/Header/Header.jsx';
import Home from "./pages/home/home.jsx"
import Carrito from "./pages/carrito/carrito.jsx"
import Detalle_p from "./pages/detalle-producto/detalle_producto.jsx"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/detalle-producto" component={Detalle_p} />

        </Switch>
      
      </Router>

    </>
  )
}

export default App
