import React from 'react'

import { Link } from 'react-router-dom';
import * as ROUTES from './Routes'

function Inicio() {

  /*var handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  console.log(state.NIP)
  */

  return (
    <React.Fragment>
      <div className="rounded shadow-lg bg-white py-2 mx-auto col-sm-6">
        <h3 className="mx-auto text-center border-bottom">Login</h3>
        <form id="form-acesso" className="mx-auto py-4 col" method="post" action="#"
        >
          <div className="form-group mx-auto">
            <input type="text" name="NIP" className="form-control form-control-lg" placeholder="NIP *" />
            <small for="NIP" className="form-text text-muted">
              Somente números. Ex.: 13059173
          </small>
          </div>
          <div class="form-group ">
            <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Senha *" />
          </div>
          <div class="form-check my-2 text-left">
            <input class="form-check-input" type="checkbox" id="gridCheck1"></input>
            <label class="form-check-label" for="gridCheck">
              Lembrar minha senha
            </label>
          </div>
          <Link to={ROUTES.AGENDAMENTO}>
            <button type="submit" className="btn btn-primary ml col">Acessar</button>
          </Link>
          <div className="py-2">Não tem cadastro? <a href={ROUTES.CADASTRO}>Cadastre-se</a></div>
        </form>
      </div>
    </React.Fragment>
  )
}


export default Inicio;