import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import * as ROUTES from './Routes'

import logo from './heraldica.png';

import Inicio from './Home.jsx'
import Autenticacao from './Autenticacao.jsx'
import Agendamento from './Agendamento.jsx'
import Cadastro from './Cadastro.jsx'
import AutenticaCadastro from './AutenticaCadastro.jsx'
import Amostra from './amostra'

export default function App(props) {
  return (
    <Router>
      <div className="App p-2 mx-auto">
        <div className="text-center">
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="Heraldica HNSa" height="100" />
          </Link>
          <h4>Hospital Naval de Salvador</h4>
          <p>Marcação de consultas online</p>
        </div>
        <Switch>
          <Route path={ROUTES.HOME} exact component={Inicio} />
          {/*<Route path={ROUTES.AUTENTICACAO} component={Autenticacao} />*/}
          <Route path={ROUTES.AGENDAMENTO} component={Agendamento} />
          <Route path={ROUTES.CADASTRO} component={Cadastro} />
          <Route path={ROUTES.AUTENTICACADASTRO} component={AutenticaCadastro} />
          <Route path="/amostra" component={Amostra}></Route>
        </Switch>
      </div>
    </Router>
  )
}
