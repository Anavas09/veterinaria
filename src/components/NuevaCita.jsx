import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types'

const initialState = {
    cita: {
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas: ''
    },
    error: false
}

class NuevaCita extends Component {
    constructor(props){
        super(props)

        this.state = { ...initialState }
    }

    handleOnChange = (e) =>{
        console.log(`${[e.target.name]}: ${e.target.value}`)
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error: true
            })
            return;
        }
        
        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid();

        this.props.crearNuevaCita(nuevaCita)
        this.setState({ ...initialState })
    }

    render() {
        const { error } = this.state

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    {error ?
                        <div
                            className="alert alert-danger mt-2 mb-5 text-center">
                            Todos los campos son obligatorios
                        </div>
                        :
                        null
                    }

                    <form onSubmit={(e)=> this.handleOnSubmit(e)}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleOnChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño"
                                    name="propietario"
                                    onChange={this.handleOnChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleOnChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleOnChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Síntomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    name="sintomas"
                                    className="form-control"
                                    placeholder="Describe los síntomas"
                                    onChange={this.handleOnChange}
                                    value={this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div>
                        <input
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Agregar nueva cita"
                        />
                    </form>{/*Cierre form group*/}
                </div>
            </div>
        );
    }
}

NuevaCita.propTypes = {
    crearNuevaCita: PropTypes.func.isRequired
}

export default NuevaCita;