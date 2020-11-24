import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import {
    DownloadIcon,
    ChevronLeftIcon,
    XCircleIcon
} from '@primer/octicons-react'
import './Autenticacao.css'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Agendamento() {

    return (
        <form className="col-auto mx-auto py-2 border">
            {agendar()}

            {consultasAgendadas()}

            {historicoConsultas()}

            <Link to="/autenticacao">
                <button type="submit" className="btn btn-primary my-2"><ChevronLeftIcon size={15} verticalAlign="middle" /> Voltar</button>
            </Link>

        </form>
    )

    function agendar() {

        const ReactCalendar = () => {
            const [date, setDate] = useState(new Date())

            const onChange = date => {
                setDate(date)
            }

            return <Calendar onChange={onChange} value={date} />
        }

        return (
            <div>
                <button className="btn btn-primary my-2 dropdown-toggle" type="button" data-toggle="collapse" data-target="#agendarConsulta" role="button" aria-expanded="false" aria-controls="agendarConsulta">
                    Agendar
                </button>

                <div className="collapse mx-auto table-responsive-lg row" id="agendarConsulta">

                    <div className="border card-body" id="radiosAgendamento">

                        <div className="btn-group" data-toggle="buttons">
                            <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#reactCalendar">Consulta</button>
                            <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#" disabled>Exame</button>

                        </div>

                        <div className="form-group col-9 mx-auto collapse" id="lstEspec">
                            <label for="lstEspec" className="form-text text-muted float-left">Especialidade</label>
                            <select className="form-control">
                                <option selected disabled>Escolher...</option>
                                <option onClick={"dddd"}>Clinica Médica</option>
                                <option>Anestesista</option>
                                <option>Ginecologista</option>
                                <option>Cardiologista</option>
                                <option>Infectologista</option>
                                <option>Urologista</option>
                            </select>
                        </div>

                        <div className="form-group col-9 mx-auto collapse" id="lstEspec">
                            <label for="lstEspec" className="form-text text-muted float-left">Médicos disponíveis</label>
                            <select className="form-control">
                                <option selected disabled>Escolher...</option>
                                <option>Mateus Magalhães</option>
                                <option>Vilas Boas</option>
                                <option>Barbara Gouveia</option>
                              </select>

                        </div>
                        
                        <div className="collapse col-4 mx-auto" id="reactCalendar">
                            <ReactCalendar />
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
                                <th scope="col">Data:Hora</th>
                                <th scope="col">Médico</th>
                                <th scope="col">Especialidade</th>
                                <th scope="col">Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>hh:mm</td>
                                <td>1º Ten Vilas Boas</td>
                                <td>Ultrassonografia</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" type="button" data-toggle="modal" data-target="#modalDesmarcarConsulta">Desmarcar consulta <XCircleIcon size={15} /></button>

                                    <div className="modal fade" id="modalDesmarcarConsulta">
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                <div className="modal-header">
                                                    <h4 className="modal-title">Desmarcar consulta</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>

                                                <div className="modal-body">
                                                    Tem certeza que deseja desmarcar esta consulta?
                                                </div>

                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success" data-dismiss="modal">Confirmar</button>
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

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