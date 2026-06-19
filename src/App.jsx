import { useState } from 'react'
import './App.css'
import { Router, Route, Switch } from "wouter";
import Home from "./pages/home/home.jsx"
import Carrito from "./pages/carrito/carrito.jsx"
import CatalogPage from "./pages/catalogo/CatalogPage.jsx"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/carrito" component={Carrito} />

          <Route path="/catalogo" component={CatalogPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
