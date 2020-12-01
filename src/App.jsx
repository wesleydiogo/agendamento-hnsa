import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as ROUTES from './Routes'

import logo from './heraldica.png';

import Inicio from './Inicio.jsx'
import Autenticacao from './Autenticacao.jsx'
import Agendamento from './Agendamento.jsx'
import Cadastro from './Cadastro.jsx'
import AutenticaCadastro from './AutenticaCadastro.jsx'

export default App =>

  <Router>
    <div className="App container-fluid">
      <div className="text-center">
        <img src={logo} alt="Heraldica HNSa" height="100" />
        <h4>Hospital Naval de Salvador</h4>
        <p>Marcação de consultas online</p>
      </div>
      <Switch>
        <Route path={ROUTES.HOME} exact component={Inicio} />
        <Route path={ROUTES.AUTENTICACAO} component={Autenticacao} />
        <Route path={ROUTES.AGENDAMENTO} component={Agendamento} />
        <Route path={ROUTES.CADASTRO} component={Cadastro} />
        <Route path={ROUTES.AUTENTICACADASTRO} component={AutenticaCadastro}/>
      </Switch>
    </div>
  </Router>