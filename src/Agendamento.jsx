import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from './Routes'

import $ from 'jquery'

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
        <form className="rounded shadow bg-white py-2 mx-auto col-sm-6 text-center">
            <h3 className="mx-auto text-center border-bottom">Agendamento</h3>

            {agendar()}

            {consultasAgendadas()}

            {historicoConsultas()}

            <Link to={ROUTES.HOME}>
                <button type="submit" className="btn btn-sm btn-primary my-2 col"><ChevronLeftIcon size={15} verticalAlign="middle" /> Voltar</button>
            </Link>
        </form>
    )

    function agendar() {

        const listaEspecialidades = [
            "Cardiologia",
            "Ortopedia",
            "Urologia",
            "Ginecologia",
            "Radiologia",
            "Hematologia"
        ]


        const ReactCalendar = () => {
            const [date, setDate] = useState(new Date())

            const onChange = date => {
                setDate(date)
            }

            return <Calendar onChange={onChange} value={date} />
        }


        $(document).ready(function () {
            //$(".selectMedico").attr("disabled", true)
            //$(".selectMedico").attr("disabled", true)

            $(".selectMedico").hide()
            $("#calendario").hide()
            $("#voltarEspecialidade").hide()


            //SELECIONAR LISTA DE ESPECIALIDADE
            $(".selectEspecialidade").on("change", function () {
                if ($("select").val()) {
                    
                    //$(".selectEspecialidade").attr("disabled", true)

                    $(".selectEspecialidade").hide()
                    $(".selectMedico").fadeIn("slow")
                    
                    //$(".selectMedico").attr("disabled", false)
                }
            })
            
            //SELECIONAR LISTA DE MEDICO
            $(".selectMedico").on("change", function () {
                if ($("select").val()) {

                    //$(".selectMedico").attr("disabled", true)

                    $(".selectMedico").hide()
                    $("#calendario").fadeIn("slow")
                }
            })
        })

        return (
            <div className="mx-auto my-3 row" id="agendarConsulta">

                <div className="mx-auto" id="radiosAgendamento">

                    <div className="btn-group" data-toggle="buttons">
                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#selectConsulta">Agendar consulta</button>
                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#" disabled>Agendar exame</button>
                    </div>

                    <div id="selectConsulta" className="collapse text-center my-2">

                        <div className="form-group selectEspecialidade">
                            <label className="font-weight-bold">Especialidades disponíveis</label>
                            <select className="form-control col-sm-5 mx-auto">
                                <option selected disabled>Escolher...</option>
                                {listaEspecialidades.map(item => (
                                    <option key={item.value} value={item.value}>{item}</option>
                                ))}
                            </select>
                        </div>

                        <div id="" className="form-group selectMedico">
                            <label className="font-weight-bold">Médicos disponíveis</label>
                            <select className="form-control col-sm-5 mx-auto">
                                <option selected disabled>Escolher...</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>

                        <div id="calendario" className="mx-auto">
                            <label className="font-weight-bold">Datas disponíveis</label>
                            {ReactCalendar()}
                        </div>

                    </div>


                </div>
            </div>
        )
    }

    function consultasAgendadas() {
        return (
            <div className="my-2">
                <button className="btn btn-primary dropdown-toggle" id="medicosFono" type="button" data-toggle="collapse" data-target="#tabConsultasAgendadas" aria-expanded="false" aria-controls="tabConsultasAgendadas">
                    Consultas agendadas
                </button>
                <div className="collapse mx-auto table-responsive-lg row" id="tabConsultasAgendadas">
                    <table className="table table-sm table-striped table-borderless">
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
                    <table className="table table-sm table-striped table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Data:Hora</th>
                                <th scope="col">Médico</th>
                                <th scope="col">Especialidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>hh:mm</td>
                                <td>1º Ten Vilas Boas</td>
                                <td>Ultrassonografia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Agendamento;