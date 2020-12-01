import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import {
    DownloadIcon,
    ChevronLeftIcon,
} from '@primer/octicons-react'
import './Autenticacao.css'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import LinhaTabConsultasAgendadas from './LinhaTabConsultasAgendadas'

function Agendamento() {

    return (
        <Router>
            <form className="card col-auto mx-auto py-2">
                {agendar()}

                {consultasAgendadas()}

                {historicoConsultas()}

                <Link to="/autenticacao">
                    <button type="submit" className="btn btn-primary my-2"><ChevronLeftIcon size={15} verticalAlign="middle" /> Voltar</button>
                </Link>
            </form>
        </Router>
    )

    function agendar() {

        const ReactCalendar = () => {
            const [date, setDate] = useState(new Date())

            const onChange = date => {
                setDate(date)
            }

            return <Calendar onChange={onChange} value={date} />
        }

        const linhaEspecialidade = nomeEspec =>
            <button className="list-group-item list-group-item-action">
                {nomeEspec}
            </button>

        return (
            <div>
                <button className="btn btn-primary my-2 dropdown-toggle" type="button" data-toggle="collapse" data-target="#agendarConsulta" role="button" aria-expanded="false" aria-controls="agendarConsulta">
                    Agendar
                </button>
                {/*ReactCalendar()*/}
                <div className="collapse mx-auto table-responsive-lg row" id="agendarConsulta">
            
                    <div className="border card-body" id="radiosAgendamento">

                        <div className="btn-group" data-toggle="buttons">
                            <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#listaEspecialidades">Consulta</button>
                            <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#" disabled>Exame</button>
                        </div>


                        <div className="form-group mx-auto my-2 collapse" id="listaEspecialidades">
                            <button className="list-group-item list-group-item-action list-group-item-secondary dropdown-toggle" type="button" data-toggle="collapse" data-target="#itensEspecialidade">
                                Especialidade
                            </button>
                            <div className="collapse" id="itensEspecialidade">
                                {linhaEspecialidade("Anestesista")}
                                {linhaEspecialidade("Cardiologista")}
                                {linhaEspecialidade("Urologista")}
                                {linhaEspecialidade("Ginecologista")}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    function consultasAgendadas() {
        return (
            <div>
                <button className="btn btn-primary my-2 dropdown-toggle" id="medicosFono" type="button" data-toggle="collapse" data-target="#tabConsultasAgendadas" aria-expanded="false" aria-controls="tabConsultasAgendadas">
                    Consultas agendadas
                </button>
                <div className="collapse mx-auto table-responsive-lg row" id="tabConsultasAgendadas">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Data<br />Hora</th>
                                <th scope="col">Médico</th>
                                <th scope="col">Especialidade</th>
                                <th scope="col">Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <LinhaTabConsultasAgendadas data="10/12/2020" hora="08:40" medico="1º Ten Vilas Boas" especialidade="Cardiologista"></LinhaTabConsultasAgendadas>
                            <LinhaTabConsultasAgendadas data="27/02/2021" hora="10:10" medico="1º Ten Magalhães" especialidade="Ortopedista"></LinhaTabConsultasAgendadas>
                            <LinhaTabConsultasAgendadas data="27/02/2021" hora="10:10" medico="1º Ten Magalhães" especialidade="Ortopedista"></LinhaTabConsultasAgendadas>
                            <LinhaTabConsultasAgendadas data="27/02/2021" hora="10:10" medico="1º Ten Magalhães" especialidade="Ortopedista"></LinhaTabConsultasAgendadas>
                            <LinhaTabConsultasAgendadas data="27/02/2021" hora="10:10" medico="1º Ten Magalhães" especialidade="Ortopedista"></LinhaTabConsultasAgendadas>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }

    function historicoConsultas() {
        return (
            <div>
                <button className="btn btn-primary my-2 dropdown-toggle" type="button" data-toggle="collapse" data-target="#tabHistoricoConsultas" aria-expanded="false" aria-controls="tabHistoricoConsultas">
                    Histórico de consultas
                </button>
                <div className="collapse mx-auto table-responsive-lg row" id="tabHistoricoConsultas">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Data:Hora</th>
                                <th scope="col">Médico</th>
                                <th scope="col">Especialidade</th>
                                <th scope="col">Ficha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>hh:mm</td>
                                <td>1º Ten Vilas Boas</td>
                                <td>Ultrassonografia</td>
                                <td>
                                    <button className="btn btn-primary btn-sm disabled" type="button">Baixar ficha <DownloadIcon size={15} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>hh:mm</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>
                                    <button className="btn btn-primary btn-sm" type="button">Baixar ficha <DownloadIcon size={15} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>hh:mm</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>
                                    <button className="btn btn-primary btn-sm" type="button">Baixar ficha <DownloadIcon size={15} /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Agendamento;