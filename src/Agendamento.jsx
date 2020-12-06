import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from './Routes'

import $ from 'jquery'

import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CheckCircleFillIcon,
    XCircleFillIcon,
    TrashcanIcon
} from '@primer/octicons-react'
import './Autenticacao.css'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import LinhaTabConsultasAgendadas from './LinhaTabConsultasAgendadas'

function Agendamento() {

    return (
        <div className="rounded shadow bg-white py-2 px-2 mx-auto col-sm-6 text-center">
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
        //LISTAS DOS FORMS SELECT
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

        const listaHorasDiponiveis = [
            "08:00",
            "08:30",
            "09:00",
            "09:30",
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30",
            "13:00",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
            "16:00",
            "16:30",
            "17:00",
            "17:30",
            "18:00",
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

            $("#EstadoCheckEsp2").hide()
            $("#EstadoCheckMed2").hide()
            $("#EstadoCheckData2").hide()
            $("#EstadoCheckHora2").hide()

            $("#deletaFormEsp").hide()
            $("#deletaFormMed").hide()
            $("#deletaFormData").hide()
            $("#deletaFormHora").hide()

            $(".selectMedico").hide()
            $(".selectData").hide()
            $(".selectHora").hide()

            $("#btnMarcarConsulta").hide()
            $("#btnMarcarConsulta").attr("disabled", true)


            //SELECIONAR LISTA DE ESPECIALIDADE
            $(".selectEspecialidade").on("change", function () {
                if ($("select").val()) {

                    $("#formSelectEspecialidade").attr("disabled", true)
                    $("#EstadoCheckEsp1").hide()
                    $("#EstadoCheckEsp2").fadeIn()
                    $("#deletaFormEsp").fadeIn()
                    // $(".selectEspecialidade").hide()
                    $(".selectMedico").slideDown()

                    //$(".selectMedico").attr("disabled", false)
                }
            })

            //DELETAR ESCOLHA DO FORM SELECT
            $("#deletaFormEsp").on("click", function () {
                $("#formSelectEspecialidade").attr("disabled", false)

                
                $(".selectMedico").fadeOut()
                $(".selectData").fadeOut()
                $(".selectHora").fadeOut()


            })

            //SELECIONAR LISTA DE MEDICO
            $(".selectMedico").on("change", function () {
                if ($("select").val()) {

                    $("#formSelectMedico").attr("disabled", true)
                    $("#EstadoCheckMed1").hide()
                    $("#EstadoCheckMed2").fadeIn()
                    $("#deletaFormMed").fadeIn()
                    // $(".selectMedico").hide()
                    $(".selectData").slideDown()
                }
            })

            //SELECIONAR LISTA DE DATA
            $(".selectData").on("change", function () {
                if ($("select").val()) {

                    $("#formSelectData").attr("disabled", true)
                    $("#EstadoCheckData1").hide()
                    $("#EstadoCheckData2").fadeIn()
                    $("#deletaFormData").fadeIn()
                    // $(".selectMedico").hide()
                    $(".selectHora").slideDown()
                }
            })

            //SELECIONAR LISTA DE HORA
            $(".selectHora").on("change", function () {
                if ($("select").val()) {

                    $("#formSelectHora").attr("disabled", true)
                    $("#EstadoCheckHora1").hide()
                    $("#EstadoCheckHora2").fadeIn()
                    $("#deletaFormHora").fadeIn()
                    // $(".selectMedico").hide()
                    $("#btnMarcarConsulta").attr("disabled", false)
                    $("#btnMarcarConsulta").slideDown()
                }
            })

        })

        return (
            <div className="border border-primary border-top-0 mb-3">
                <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
                    <button className="btn btn-primary rounded-0 dropdown-toggle" id="btnAgendarConsulta" type="radio" data-toggle="collapse" data-target="#selectConsulta">Agendar consulta</button>
                    <button className="btn btn-primary rounded-0 dropdown-toggle" id="btnAgendarExame" type="radio" data-toggle="collapse" data-target="#" disabled>Agendar exame</button>
                </div>

                <div id="selectConsulta" className="collapse text-center p-3">

                    <div className="form-group mb-1 selectEspecialidade">
                        <div className="container">
                            <div className="row">
                                <div className="col-2 p-0 pt-1 text-left text-primary" id="EstadoCheckEsp1"><ChevronRightIcon size="medium" /></div>
                                <div className="col-2 p-0 pt-1 text-left text-success" id="EstadoCheckEsp2"><CheckCircleFillIcon size="medium" /></div>

                                <select id="formSelectEspecialidade" className="form-control col rounded-0">
                                    <option selected disabled>Especialidade</option>
                                    {listaEspecialidades.map(item => (
                                        <option key={item.value} value={item.value}>{item}</option>
                                    ))}
                                </select>

                                <div className="col-2 p-2 pt-1 text-right text-danger" id="deletaFormEsp"><TrashcanIcon size="small" /></div>

                            </div>
                        </div>
                    </div>

                    <div id="" className="form-group mb-1 selectMedico">
                        <div className="container">
                            <div className="row">
                                <div className="col-2 p-0 pt-1 text-left text-primary" id="EstadoCheckMed1"><ChevronRightIcon size="medium" /></div>
                                <div className="col-2 p-0 pt-1 text-left text-success" id="EstadoCheckMed2"><CheckCircleFillIcon size="medium" /></div>

                                <select id="formSelectMedico" className="form-control col rounded-0">
                                    <option selected disabled>Médico</option>
                                    {listaMedicos.map(item => (
                                        <option key={item.value} value={item.value}>{item}</option>
                                    ))}
                                </select>
                                <div className="col-2 p-2 pt-1 text-right text-danger" id="deletaFormMed"><TrashcanIcon size="small" /></div>
                            </div>
                        </div>
                    </div>

                    <div id="" className="form-group mb-1 selectData">
                        <div className="container">
                            <div className="row">
                                <div className="col-2 p-0 pt-1 text-left text-primary" id="EstadoCheckData1"><ChevronRightIcon size="medium" /></div>
                                <div className="col-2 p-0 pt-1 text-left text-success" id="EstadoCheckData2"><CheckCircleFillIcon size="medium" /></div>

                                <select id="formSelectData" className="form-control col rounded-0">
                                    <option className="rounded-0" selected disabled>Data</option>
                                    {listaDatasDiponiveis.map(item => (
                                        <option key={item.value} value={item.value}>{item}</option>
                                    ))}
                                </select>
                                <div className="col-2 p-2 pt-1 text-right text-danger" id="deletaFormData"><TrashcanIcon size="small" /></div>
                            </div>
                        </div>
                    </div>

                    <div id="" className="form-group mb-1 selectHora">
                        <div className="container">
                            <div className="row">
                                <div className="col-2 p-0 pt-1 text-left text-primary" id="EstadoCheckHora1"><ChevronRightIcon size="medium" /></div>
                                <div className="col-2 p-0 pt-1 text-left text-success" id="EstadoCheckHora2"><CheckCircleFillIcon size="medium" /></div>

                                <select id="formSelectHora" className="form-control col rounded-0">
                                    <option className="rounded-0" selected disabled>Hora</option>
                                    {listaHorasDiponiveis.map(item => (
                                        <option key={item.value} value={item.value}>{item}</option>
                                    ))}
                                </select>
                                <div className="col-2 p-2 pt-1 text-right text-danger" id="deletaFormHora"><TrashcanIcon size="small" /></div>
                            </div>
                        </div>
                    </div>

                    <button id="btnMarcarConsulta" className="btn btn btn-success col rounded-0 mt-2">Marcar consulta</button>


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