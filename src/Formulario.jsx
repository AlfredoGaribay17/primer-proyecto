import React, { Component } from "react"

class Formulario extends Component {

    //Crear el constructor
    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            ocupacion: "",
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarOcupacion = this.cambiarOcupacion.bind(this)
    }

    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }
    
    cambiarOcupacion(e){
        this.setState({
            ocupacion: e.target.value
        })
    }

    render() {
        return (
            <div className="ed-grid">
                <h1> Registrate y cambia tu Vida</h1>
                <form>
                    <div className="form_item">
                        <label>Nombre Completo:</label>
                        <input type="text"
                            onChange={this.cambiarNombre}
                        />
                    </div>
                    <div classNme="form item">
                        <label>Email: </label>
                        <input type="email"
                            onChange={this.cambiarCorreo}
                        />
                    </div>
                    <div classNme="form item">
                        <label>Ocupacion: </label>
                        <input type="text"
                            onChange={this.cambiarOcupacion}
                        />
                    </div>
                    <div className="form-item">
                        <input className="button full" type="submit" value="Registrar" />

                    </div>

                </form>

                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                    <p>{`Tu Ocupacion es:  ${this.state.ocupacion}`}</p>
                </div>
            </div>
        

        )
        
    }
}

export default Formulario;
