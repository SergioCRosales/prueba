import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Calculadora from './Calculadora'
import Menu from './Menu'

import './css/calculadora.css'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <section className="box">
          <Route exact path="/" render={() => (
            <Calculadora
              tipo="1"
              title="Sumar"
            />
          )}/>
          <Route exact path="/restar" render={() => (
            <Calculadora
              title="Restar"
            />
          )}/>
          <Route exact path="/dividir" render={() => (
            <Calculadora
              title="Dividir"
            />
          )}/>
          <Route exact path="/multiplicar" render={() => (
            <Calculadora
              title="Multiplicar"
            />
          )}/>
        </section>
      </div>
    )
  }
}

export default App