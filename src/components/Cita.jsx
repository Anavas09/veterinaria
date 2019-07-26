import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    const { id, mascota, propietario, fecha, hora, sintomas } = cita

    return (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0"><span> {mascota} </span></h3>
                <p className="card.text"><span>Dueño: </span> {propietario} </p>
                <p className="card.text"><span>Fecha: </span> {fecha} </p>
                <p className="card.text"><span>Hora: </span> {hora} </p>
                <p className="card.text"><span>Síntomas: </span> </p>
                <p className="card.text">{sintomas}</p>

                <button
                    className="btn btn-danger"
                    onClick={()=> eliminarCita(id)}>
                    Borrar &times;
                </button>
            </div>
        </div>
    );
};

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;