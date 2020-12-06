import React from 'react'
import {
    Link,
} from 'react-router-dom'
import $ from 'jquery'

import Paper from '@material-ui/core/Switch';

const finalNumTelefone = 2564

$(document).on("click", "#radioCodRegistro", function () {
    $("#codRegistroPct").slideDown("slow")

    $("#inputCodRegistro").attr("disabled", false);
    $("#inputSMS").attr("disabled", true);
    $("#inputEmail").attr("disabled", true);

    $("#smsPct").slideUp("slow")
    $("#emailPct").slideUp("slow")
})

$(document).on("click", "#radioCodSMS", function () {
    $("#smsPct").slideDown("slow")

    $("#inputSMS").attr("disabled", false);
    $("#inputEmail").attr("disabled", true);
    $("#inputCodRegistro").attr("disabled", true);

    $("#codRegistroPct").slideUp("slow")
    $("#emailPct").slideUp("slow")
})

$(document).on("click", "#radioEmail", function () {
    $("#emailPct").slideDown("slow")

    $("#inputEmail").attr("disabled", false);
    $("#inputCodRegistro").attr("disabled", true);
    $("#inputSMS").attr("disabled", true);

    $("#smsPct").slideUp("slow")
    $("#codRegistroPct").slideUp("slow")
})

export default AutenticaCadastro =>

    <div className="rounded shadow bg-white py-2 mx-auto col-sm-6">
        <h3 className="mx-auto text-center border-bottom">Autenticação</h3>

        <small className="text-left font-weight-bold">Por medida de segurança, é necessário que você escolha uma das opções abaixo para autenticar seu cadastro.</small>
        <div className="card-body col" id="form-radios">

            <div className="form-group form-check">
                <input id="radioCodRegistro" className="form-check-input" type="radio" name="gridRadios" data-toggle="" data-target="#codRegistroPct" />
                <label className="form-check-label" for="gridRadios1">Por número de registro</label>

                <div className="collapse" id="codRegistroPct">
                    <input className="form-control form-control-sm" id="inputCodRegistro" type="text" placeholder="Digite o número de registro" />
                    <small id="emailHelp" for="registroPct" className="form-text text-muted">Compareça ao setor de agendamento do HNSa com a identidade em mãos para solicitar o seu número de registro.</small>
                    
                    <button className="btn btn-sm btn-success mt-1">Autenticar</button>
                </div>

            </div>

            <div className="form-group form-check">
                <input id="radioCodSMS" className="form-check-input" type="radio" name="gridRadios" data-toggle="" data-target="#smsPct" disabled />
                <label className="form-check-label">Por SMS <small style={{ color: "red" }}>(em breve)</small></label>

                <div className="collapse" id="smsPct">
                    <div className="form-group">
                        <small className="mr-2">Enviar código para (XX) 9XXXX-{finalNumTelefone}</small>
                        <button className="btn btn-success btn-sm text-center">Enviar SMS</button>
                    </div>
                    <input className="form-control form-control-sm" id="inputSMS" type="text" placeholder="Digite o código recebido" />
                    <small id="emailHelp" for="registroPct" className="form-text text-muted">Um SMS contendo o código de verificação é enviado para o número de telefone cadastrado no setor de agendamento do HNSa. Caso seu número esteja desatualizado, compareça ao setor de agendamento.</small>
                </div>
            </div>


            <div className="form-group form-check">
                <input id="radioEmail" className="form-check-input" type="radio" name="gridRadios" data-toggle="" data-target="#emailPct" disabled />
                <label className="form-check-label" for="emailPct">Por email <small style={{ color: "red" }}>(em breve)</small></label>

                <div className="collapse" id="emailPct">
                    <div className="form-group">
                        <small className="mr-2">Enviar código para email cadastrado</small>
                        <button className="btn btn-success btn-sm text-center">Enviar Email</button>
                    </div>
                    <input className="form-control form-control-sm" id="inputEmail" type="email" placeholder="Digite o código recebido" />
                    <small id="emailHelp" for="emailPct" className="form-text text-muted">Um email contendo o código é enviado para o endereço de email cadastrado no setor de agendamento do HNSa. Caso seu número esteja desatualizado, compareça ao setor de agendamento.</small>
                </div>
            </div>

        </div>
    </div>