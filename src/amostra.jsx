export default function amostra() {
    return (
        <div className="inline row mx-auto px-auto text-center p-2 border">
            <button type="button" class="btn btn-primary mx-1">Recepção do Laboratório</button>
            <button type="button" class="btn btn-primary mx-1">Recepção da Radiologia</button>
            <button type="button" class="btn btn-primary mx-1">Setor de Guias</button>

            <div className="dropdown">
                <button type="button" class="btn btn-primary dropdown-toggle mx-1" data-toggle="dropdown">Ambulatório</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                </div>
            </div>
            <div className="dropdown">
                <button type="button" class="btn btn-primary dropdown-toggle mx-1" data-toggle="dropdown">Odontologia</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                    <a class="dropdown-item" href="#">Consultório X</a>
                </div>
            </div>
        </div>
    )
}