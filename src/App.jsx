import { useState } from 'react'
import './App.css'
import { Router, Route, Switch } from "wouter";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from "./pages/home/home.jsx"
import Carrito from "./pages/carrito/carrito.jsx"
import PreguntasFrecuentes from './pages/preguntasfrecuentes/preguntasfrecuentes.jsx';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/preguntasfrecuentes" component={PreguntasFrecuentes} />


        </Switch>

        <Footer />

      </Router>

    </>
  )
}

export default App
