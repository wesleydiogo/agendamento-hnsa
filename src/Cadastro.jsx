import React from 'react'

import { Link } from 'react-router-dom'
import * as ROUTES from './Routes'

export default Cadastro => {

    return (
        <div className="rounded shadow bg-white py-2 mx-auto col-sm-6" >
            <h3 className="mx-auto text-center border-bottom">Cadastro de usuário</h3>
            <form className="mx-auto col-sm-6 p-2">

                <div className="form-group mx-2">
                    {/*<label className="font-weight-bold">NIP <span style={{ color: 'red' }}>*</span></label>*/}
                    <input type="text" name="NIP" className="form-control form-control-sm" placeholder="NIP *" />
                    <small for="NIP" className="form-text text-muted">
                        Somente números. Ex.: 13059173
                    </small>
                </div>

                <div className="row col-sm">
                    <div className="form-group mx-2">
                        {/*<label className="font-weight-bold">Senha <span style={{ color: 'red' }}>*</span></label>*/}
                        <input type="password" className="form-control form-control-sm" placeholder="Senha *" />
                        <small for="NIP" className="form-text text-muted">
                            No mínimo 8 caracteres
                    </small>
                    </div>
                    <div className="form-group mx-2">
                        {/*<label className="font-weight-bold">Confirmar senha <span style={{ color: 'red' }}>*</span></label>*/}
                        <input type="password" className="form-control form-control-sm" id="exampleInputPassword2" placeholder="Confirmar senha *" />
                        <small for="NIP" className="form-text text-muted">
                            No mínimo 8 caracteres
                    </small>
                    </div>
                </div>

                <Link to={ROUTES.AUTENTICACADASTRO}>
                    <button type="submit" className="btn 'btn-sm btn-primary mx-2 col">Avançar</button>
                </Link>
            </form>
        </div >
    )
}