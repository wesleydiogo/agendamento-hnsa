import React from "react"

import { Link } from "react-router-dom"
import * as ROUTES from "./Routes"

function Autenticacao() {
    var nomeMae = [
        "Aline",
        "Roberta",
        "Mariana",
        "Silvia"
    ]

    return (
        <form id="form-autenticacao" className="shadow py-2 mx-auto col-sm-6">
            <div className="form-group">
                <small for="FormNomeMae" id="emailHelp" className="form-text text-muted">
                    Nome da mãe
                </small>
                <select class="form-control col" id="FormNomeDaMae">
                    <option select disabled>Escolher...</option>
                    <option>{nomeMae[0]}</option>
                    <option>{nomeMae[1]}</option>
                    <option>{nomeMae[2]}</option>
                    <option>{nomeMae[3]}</option>
                </select>
            </div>

            <small for="calendario" id="emailHelp" className="form-text text-muted">
                Data de nascimento
            </small>
            <input type="date" id="calendario" className="form-control " placeholder="01/01/1994" />
            
            <div className="px-3 mt-3 d-flex row justify-content-between">
                <Link to={ROUTES.HOME}>
                    <button type="submit" className="btn btn-primary">Voltar</button>
                </Link>
                <Link to={ROUTES.AGENDAMENTO}>
                    <button type="submit" className="btn btn-primary">Confirmar</button>
                </Link>
            </div>

        </form>
    )
}

export default Autenticacao