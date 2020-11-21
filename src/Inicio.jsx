import React from 'react'
import { Link } from 'react-router-dom';

function Inicio() {

  /*var handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  console.log(state.NIP)
  */

  return (
    <React.Fragment>
      <form id="form-acesso" className="col-6 mx-auto py-4 border row d-flex justify-content-center">
        <div className="form-group">
          <input
            type="text"
            name="NIP"
            //value={this.state.NIP}
            //onChange={this.handleChange}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Ex.: 13059173" />
          <small id="emailHelp" className="form-text text-muted">
            Informe o seu NIP para ter acesso às vagas disponíveis.
          </small>
        </div>
        <Link to="/autenticacao">
          <button type="submit" for="NIP" className="btn btn-primary">Acessar</button>
        </Link>
      </form>
    </React.Fragment>
  )
}


export default Inicio;