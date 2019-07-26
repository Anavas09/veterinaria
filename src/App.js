import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      citas: []
    }
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas')
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }
  
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }
  

  
  crearNuevaCita = datos => {
    const citas = [...this.state.citas, datos]
    this.setState({
      citas
    })
  }

  eliminarCita = (id) => {
    const citasActuales = [...this.state.citas]
    const citas = citasActuales.filter(cita => cita.id !== id)

    this.setState({
      citas
    })
  }

  render(){
    const { citas } = this.state

    return (
      <div>
        <div className="container">
          <Header titulo={"Administrador Pacientes Veterinaria"}/>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
            </div>
            {citas.length > 0 ? 
              <div className="mt-5 col-md-10 mx-auto">
                <ListaCitas citas={citas} eliminarCita={this.eliminarCita}/>
              </div>
              :
              <div 
                className="alert alert-info mt-5 col-md-10 mx-auto text-center"
                >
                  <h2>No hay citas</h2>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
