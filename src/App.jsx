import { useState } from 'react'
import { Router, Route, Switch } from "wouter";
import './App.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from "./pages/home/home.jsx"
import Detalle_p from "./pages/detalle-producto/detalle_producto.jsx"
import CatalogPage from "./pages/catalogo/CatalogPage.jsx"
import { Carrito } from './pages/carrito/carrito.jsx';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/detalle-producto" component={Detalle_p} />

          <Route path="/catalogo" component={CatalogPage} />

        </Switch>
      
      <Footer />

      </Router>

    </>
  )
}

export default App