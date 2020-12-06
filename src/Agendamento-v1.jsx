import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from './Routes'

import $ from 'jquery'

import {
    DownloadIcon,
    ChevronLeftIcon,
    PersonIcon,
    KeyIcon
} from '@primer/octicons-react'
import './Autenticacao.css'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import LinhaTabConsultasAgendadas from './LinhaTabConsultasAgendadas'

function Agendamento() {

    return (
        <div className="rounded shadow bg-white py-2 px-4 mx-auto col-sm-6 text-center">
            <h3 className="mx-auto text-center border-bottom mb-4">Agendamento</h3>

            {agendar()}

            {consultasAgendadas()}

            {historicoConsultas()}

            <Link to={ROUTES.HOME}>
                <button type="submit" className="btn btn-secondary rounded-0 my-3 w-100"><ChevronLeftIcon size={15} verticalAlign="middle" /> Voltar</button>
            </Link>
        </div>
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

        const listaMedicos = [
            "1º Ten Magalhães",
            "CT Bárbara",
            "1º Ten Vilas Boas",
            "1º Guimarães"
        ]

        const listaDatasDiponiveis = [
            "10/12/2020",
            "13/12/2020",
            "20/12/2020",
            "25/12/2020",
            "07/01/2020",
            "10/01/2020",
            "17/01/2020",
            "25/01/2020",
            "07/02/2020",
            "10/02/2020"
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

                    $("#formSelectEspecialidade").attr("disabled", true)

                    // $(".selectEspecialidade").hide()
                    $(".selectMedico").slideDown("slow")

                    //$(".selectMedico").attr("disabled", false)
                }
            })

            //SELECIONAR LISTA DE MEDICO
            $(".selectMedico").on("change", function () {
                if ($("select").val()) {

                    $("#formSelectMedico").attr("disabled", true)

                    // $(".selectMedico").hide()
                    $("#calendario").slideDown("slow")
                }
            })

            $("#dispensarMedicos").on("click", function () {
                $(".selectMedico").hide()
                $(".selectEspecialidade").slideDown("slow")
            })

            $("#dispensarCalendario").on("click", function () {
                $("#calendario").hide()
                $(".selectMedico").slideDown("slow")
            })
        })

        return (
            <div className="mb-3">
                <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
                    <button className="btn btn-primary rounded-0 w-50" type="radio" data-toggle="collapse" data-target="#selectConsulta">Agendar consulta</button>
                    <button className="btn btn-primary rounded-0 w-50" type="radio" data-toggle="collapse" data-target="#" disabled>Agendar exame</button>
                </div>

                <div id="selectConsulta" className="collapse text-center my-2">

                    <div className="form-group selectEspecialidade">
                        <label className="font-weight-bold">Especialidades disponíveis</label>
                        <select id="formSelectEspecialidade" className="form-control mx-auto col-sm-5 rounded-0">
                            <option selected disabled>Escolher...</option>
                            {listaEspecialidades.map(item => (
                                <option key={item.value} value={item.value}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div id="" className="form-group selectMedico">

                        <button id="dispensarMedicos" type="button" class="close" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <label className="font-weight-bold">Médicos disponíveis</label>
                        <select id="formSelectMedico" className="form-control mx-auto col-sm-5 rounded-0">
                            <option selected disabled>Escolher...</option>
                            {listaMedicos.map(item => (
                                <option key={item.value} value={item.value}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div id="calendario" className="mx-auto w-100">
                        <button id="dispensarCalendario" type="button" class="close" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <label className="font-weight-bold">Datas disponíveis</label>
                        <select id="formSelectMedico" className="form-control mx-auto col-sm-5 rounded-0">
                            <option selected disabled>Escolher...</option>
                            {listaDatasDiponiveis.map(item => (
                                <option key={item.value} value={item.value}>{item}</option>
                            ))}
                        </select>
                        {/* {ReactCalendar()} */}
                    </div>

                </div>
            </div>
        )
    }

    function consultasAgendadas() {
        return (
            <div className="mb-3">
                <button className="btn btn-primary rounded-0 dropdown-toggle w-100" id="medicosFono" type="button" data-toggle="collapse" data-target="#tabConsultasAgendadas" aria-expanded="false" aria-controls="tabConsultasAgendadas">
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
                <button className="btn btn-primary rounded-0 dropdown-toggle w-100" type="button" data-toggle="collapse" data-target="#tabHistoricoConsultas" aria-expanded="false" aria-controls="tabHistoricoConsultas">
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