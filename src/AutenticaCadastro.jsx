import React from 'react'
import {
    Link,
} from 'react-router-dom'

const finalNumTelefone = 2564

export default AutenticaCadastro =>

    <div className="card mx-2 form-group">
        <h3 className="mx-auto text-center py-2">Autenticação de cadastro</h3>

        <small className="card-header text-left font-weight-bold">Por medida de segurança, é necessário que você escolha uma das opções abaixo para autenticar seu cadastro.</small>
        <div className="card-body col" id="form-radios">

            <div className="form-group form-check">
                <input id="radioCodRegistro" className="form-check-input" type="radio" name="gridRadios" data-toggle="" data-target="#codRegistroPct" />
                <label className="form-check-label" for="gridRadios1">Por número de registro</label>

                <div className="collapse" id="codRegistroPct">
                    <input className="form-control form-control-sm" id="inputCodRegistro" type="text" placeholder="Digite o número de registro" />
                    <small id="emailHelp" for="registroPct" className="form-text text-muted">Compareça ao setor de agendamento do HNSa com a identidade em mãos para solicitar o seu número de registro.</small>
                </div>
            </div>

            <div className="form-group form-check">
                <input id="radioCodSMS" className="form-check-input" type="radio" name="gridRadios" data-toggle="" data-target="#smsPct" />
                <label className="form-check-label">Por SMS</label>

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
                <input id="radioEmail" className="form-check-input" type="radio" name="gridRadios" data-toggle="" data-target="#emailPct" />
                <label className="form-check-label" for="emailPct">Por email</label>

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