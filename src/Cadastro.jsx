import React from 'react'
import $ from 'jquery'

import { Link } from 'react-router-dom'
import * as ROUTES from './Routes'

export default Cadastro => {
    $(document).on("click", "#radioCodRegistro", function () {
        $("#codRegistroPct").show("slow")

        $("#inputCodRegistro").attr("disabled", false);
        $("#inputSMS").attr("disabled", true);
        $("#inputEmail").attr("disabled", true);

        $("#smsPct").hide("slow")
        $("#emailPct").hide("slow")
    })

    $(document).on("click", "#radioCodSMS", function () {
        $("#smsPct").show("slow")

        $("#inputSMS").attr("disabled", false);
        $("#inputEmail").attr("disabled", true);
        $("#inputCodRegistro").attr("disabled", true);

        $("#codRegistroPct").hide("slow")
        $("#emailPct").hide("slow")
    })

    $(document).on("click", "#radioEmail", function () {
        $("#emailPct").show("slow")

        $("#inputEmail").attr("disabled", false);
        $("#inputCodRegistro").attr("disabled", true);
        $("#inputSMS").attr("disabled", true);

        $("#smsPct").hide("slow")
        $("#codRegistroPct").hide("slow")
    })

    return (
        <div className="card py-2" >
            <h3 className="mx-auto text-center py-2">Cadastro de usuário</h3>
            <form className="">

                <div className="form-group mx-2">
                    <label className="font-weight-bold">NIP <span style={{ color: 'red' }}>*</span></label>
                    <input type="text" name="NIP" className="form-control form-control-sm" placeholder="Informe o NIP" />
                    <small for="NIP" className="form-text text-muted">
                        Somente números. Ex.: 13059173
                    </small>
                </div>

                <div className="row col-sm">
                    <div className="form-group mx-2">
                        <label className="font-weight-bold">Senha <span style={{ color: 'red' }}>*</span></label>
                        <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" placeholder="No mínimo 8 caracteres" />
                    </div>
                    <div className="form-group mx-2">
                        <label className="font-weight-bold">Confirmar senha <span style={{ color: 'red' }}>*</span></label>
                        <input type="password" className="form-control form-control-sm" id="exampleInputPassword2" placeholder="No mínimo 8 caracteres" />
                    </div>
                </div>

                <Link to={ROUTES.AUTENTICACADASTRO}>
                    <button type="submit" className="btn-sm btn-primary mx-2">Avançar</button>
                </Link>
            </form>
        </div >
    )
}