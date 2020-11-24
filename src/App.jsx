import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './heraldica.png';
import Inicio from './Inicio.jsx'
import Autenticacao from './Autenticacao.jsx'
import Agendamento from './Agendamento.jsx'

export default App =>

  <Router>
    <div className="App container">
      <img src={logo} alt="Heraldica HNSa" height="100" />
      <h4>Hospital Naval de Salvador</h4>
      <p>Marcação de consultas online</p>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/autenticacao" component={Autenticacao} />
        <Route path="/agendamento" component={Agendamento} />
      </Switch>
    </div>
  </Router>