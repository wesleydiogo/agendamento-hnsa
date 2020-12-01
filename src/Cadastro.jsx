import React from 'react'
import $ from 'jquery'

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
        <div className="card mx-auto py-2 col" >
            <h3 className="mx-auto text-center" type="buttom">Cadastro de usuário</h3>
            <form className="">

                <div className="card form-group">
                    <div className="card-header text-center">Escolha um método de autenticação</div>
                    <div className="card-body col" id="form-radios">


                        <div className="form-group form-check">
                            <input id="radioCodRegistro" className="form-check-input" type="radio" name="gridRadios" data-toggle="" data-target="#codRegistroPct" />
                            <label className="form-check-label" for="gridRadios1">Número de registro</label>

                            <div className="collapse" id="codRegistroPct">
                                <input className="form-control form-control-sm" id="inputCodRegistro" type="text" placeholder="Código de registro" />
                                <small id="emailHelp" for="registroPct" className="form-text text-muted">Compareça ao setor de agendamento do HNSa com a identidade em mãos para solicitar o seu código de registro.</small>
                            </div>
                        </div>


                        <div className="form-group form-check">
                            <input id="radioCodSMS" className="form-check-input" type="radio" name="gridRadios" data-toggle="" data-target="#smsPct" />
                            <label className="form-check-label">Envio de SMS</label>

                            <div className="collapse" id="smsPct">
                                <input className="form-control form-control-sm" id="inputSMS" type="text" placeholder="Código recebido por SMS" />
                                <small id="emailHelp" for="registroPct" className="form-text text-muted">Um SMS contendo o código é enviado para o número de telefone cadastrado no setor de agendamento do HNSa. Caso seu número esteja desatualizado, compareça ao setor de agendamento.</small>
                            </div>
                        </div>


                        <div className="form-group form-check">
                            <input id="radioEmail" className="form-check-input" type="radio" name="gridRadios" data-toggle="" data-target="#emailPct" />
                            <label className="form-check-label" for="emailPct">Email</label>

                            <div className="collapse" id="emailPct">
                                <input className="form-control form-control-sm" id="inputEmail" type="email" placeholder="Código recebido no email" />
                                <small id="emailHelp" for="emailPct" className="form-text text-muted">Um email contendo o código é enviado para o endereço de email cadastrado no setor de agendamento do HNSa. Caso seu número esteja desatualizado, compareça ao setor de agendamento.</small>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row col-sm">
                    <div className="form-group mx-2">
                        <label>Senha <span style={{ color: 'red', fontWeight: 'bold' }}>*</span></label>
                        <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" placeholder="" />
                        <small className="form-text text-muted">Min. 8 caracteres</small>
                    </div>
                    <div className="form-group mx-2">
                        <label>Confirmar senha <span style={{ color: 'red', fontWeight: 'bold' }}>*</span></label>
                        <input type="password" className="form-control form-control-sm" id="exampleInputPassword2" placeholder="" />
                        <small className="form-text text-muted">Min. 8 caracteres</small>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary col">Confirmar cadastro</button>
            </form>
        </div >
    )
}