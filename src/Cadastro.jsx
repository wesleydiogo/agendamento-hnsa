import React from 'react'

import { Link } from 'react-router-dom'
import * as ROUTES from './Routes'

export default Cadastro => {

    return (
        <div className="rounded shadow-lg bg-white py-2 px-4 mx-auto col-sm-6" >
            <h3 className="mx-auto text-center border-bottom mb-4">Cadastro de usuário</h3>
            <form className="mx-auto">

                <div className="form-group">
                    {/*<label className="font-weight-bold">NIP <span style={{ color: 'red' }}>*</span></label>*/}
                    <input type="text" name="NIP" className="form-control rounded-0 w-100" placeholder="NIP *" />
                    <small for="NIP" className="form-text text-muted">
                        Somente números. Ex.: 13059173
                    </small>
                </div>

                <div className="form-group">
                    {/*<label className="font-weight-bold">Senha <span style={{ color: 'red' }}>*</span></label>*/}
                    <input type="password" className="form-control rounded-0 w-100" placeholder="Senha *" />
                    <small for="NIP" className="form-text text-muted">
                        No mínimo 8 caracteres
                    </small>
                </div>
                <div className="form-group">
                    {/*<label className="font-weight-bold">Confirmar senha <span style={{ color: 'red' }}>*</span></label>*/}
                    <input type="password" className="form-control rounded-0 w-100" id="exampleInputPassword2" placeholder="Confirmar senha *" />
                    <small for="NIP" className="form-text text-muted">
                        No mínimo 8 caracteres
                    </small>
                </div>

                <Link to={ROUTES.AUTENTICACADASTRO}>
                    <button type="submit" className="btn btn-primary rounded-0 w-100">Avançar</button>
                </Link>
            </form>
        </div >
    )
}