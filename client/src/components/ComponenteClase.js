import { Component } from "react";

class ComponenteClase extends Component{

    name;

    constructor(props){

        super(props);
        
        this.name = "Juan";

        this.state = {
            name: this.props.name
        }
    }


    componentDidMount(){

        setTimeout(()=>{

            //this.state.name = "Pedro";
            this.setState({
                name:"Pedro"
            })
            console.log("Paso 1 segundo",this.name);

        },5000);
    }


    render(){

        return (
            <div>
                <h1>Componente hecho con class</h1>                
                Estado - {this.state.name}
                <br></br>
                Atributo - {this.name}
            </div>
        )
    }

    componentWillUnmount(){

    }
}

export default ComponenteClase;