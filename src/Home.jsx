import React from 'react'

import { Link } from 'react-router-dom';
import * as ROUTES from './Routes'

import PersonIcon from '@primer/octicons-react'
import KeyIcon from '@primer/octicons-react'

function Inicio() {

  return (
    <div className="rounded shadow-lg bg-white py-2 px-4 mx-auto col-sm-6">
      <h3 className="mx-auto text-center border-bottom mb-4">Login</h3>

      <form className="mx-auto" method="post" action="#">

        <div className="form-group mx-auto">
          <input type="text" className="form-control rounded-0" placeholder="NIP *" />
          <small for="NIP" className="form-text text-muted">
            Somente números. Ex.: 13059173
          </small>
        </div>

        <div class="form-group ">
          <input type="password" class="form-control rounded-0" placeholder="Senha *" />
        </div>

        <div class="form-check my-2 text-left">
          <input class="form-check-input" type="checkbox" id="gridCheck1"></input>
          <label class="form-check-label" for="gridCheck">
            Lembrar minha senha
            </label>
        </div>

        <Link to={ROUTES.AGENDAMENTO}>
          <button type="submit" className="btn btn-primary rounded-0 w-100">ENTRAR</button>
        </Link>
        <div className="pt-2">Não tem cadastro? <a href={ROUTES.CADASTRO}>Cadastre-se</a></div>
        <div>Ou <a href={ROUTES.CADASTRO}>recupere sua senha</a></div>
      </form>
    </div>
  )
}


export default Inicio;