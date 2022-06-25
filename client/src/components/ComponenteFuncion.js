import { useEffect, useState } from "react";


function ComponenteFuncion(props) {

  const [ stateOfName, setName ] =   useState("Juan");
  const [ age , setAge ] = useState(18);

  let name = "Pedro";

  const callback = ()=>{

    setTimeout(()=>{

      setName("Pedro");
      setAge(25);
      name = "Juan";

      console.log("Estoy cambiando el estado de la variable")
    
    },1000);


  }

  useEffect(callback,[]);


  useEffect(()=>{
    console.log("Has cambiado la edad por aca");
  },[name]);



  return (
    <div>
      <h1>Componente con funcion</h1>
      Estado - <br />
        Nombre: {stateOfName} <br />
        Edad: {age}
      <br></br>
      Atributo - {name}
    </div>
  );

}

export default ComponenteFuncion;
