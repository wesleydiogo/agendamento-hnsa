import React from 'react'
import { XCircleIcon } from '@primer/octicons-react'

export default function (props) {

    return (
        <tr>
            <td>{props.data}<br/>{props.hora}</td>
            <td>{props.medico}</td>
            <td>{props.especialidade}</td>
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
    )
}