import React from 'react'
import { Link } from 'react-router-dom'

function Agendamento() {
    return (
        <form className="col-auto mx-auto py-4 border">
            {/*<select class="form-control form-control-lg">
                <option>Consultas agendadas</option>
            </select>*/}

            <div>
                <button class="btn btn-primary my-2" type="button" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Agendar consulta</button>
            </div>
            <div>
                <button class="btn btn-primary my-2" type="button" data-toggle="collapse" data-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">Consultas agendadas</button>
                {tabelaHistorico1()}
            </div>

            <div>
                <button class="btn btn-primary my-2" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Histórico de consultas</button>
                {tabelaHistorico2()}
            </div>

            <Link to="/autenticacao">
                <button type="submit" className="btn btn-primary my-2">Voltar</button>
            </Link>

        </form>
    )

    function tabelaHistorico2() {
        return (
            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Primeiro</th>
                                    <th scope="col">Último</th>
                                    <th scope="col">Nickname</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }

    function tabelaHistorico1() {
        return (
            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Primeiro</th>
                                    <th scope="col">Último</th>
                                    <th scope="col">Nickname</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}


export default Agendamento;