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
      <form id="form-acesso" className="col-auto mx-auto py-4 border row d-flex justify-content-center">
        <div className="form-group">
          <input
            type="text"
            name="NIP"
            className="form-control"
            placeholder="Ex.: 13059173" />
          <small for="" className="form-text text-muted">
            Informe o seu NIP para ter acesso às vagas disponíveis.
          </small>
        </div>
        <Link to={ROUTES.AUTENTICACAO}>
          <button type="submit" for="NIP" className="btn btn-primary ml-2">Acessar</button>
        </Link>
      </form>
    </React.Fragment>
  )
}


export default Inicio;