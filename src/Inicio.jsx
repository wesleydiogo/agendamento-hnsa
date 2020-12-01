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
      <div className="card py-2">
        <h3 className="text-center">Login</h3>
        <form id="form-acesso" className="col-auto text-center mx-auto py-4 col" method="post" action="#"
        >
          <div className="form-group mx-auto text-left">
            <input type="text" name="NIP" className="form-control" placeholder="Informe o NIP" />
            <small for="NIP" className="form-text text-muted">
              Somente números. Ex.: 13059173
          </small>
          </div>
          <div class="form-group ">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Informe a senha" />
          </div>
          <div class="form-check my-2 text-left">
            <input class="form-check-input" type="checkbox" id="gridCheck1"></input>
            <label class="form-check-label" for="gridCheck">
              Lembrar minha senha
                </label>
          </div>
          <Link to={ROUTES.AUTENTICACAO}>
            <button type="submit" for="NIP" className="btn btn-primary ml col">Acessar</button>
          </Link>
          <div className="py-2">Não tem uma conta? <a href={ROUTES.CADASTRO}>Cadastre-se</a></div>
        </form>
      </div>
    </React.Fragment>
  )
}


export default Inicio;