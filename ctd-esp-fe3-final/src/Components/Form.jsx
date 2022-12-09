import React from "react";
import { useState } from "react";


const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: ""
  })
  const [errors, setErrors] = useState({
    nombre: false,
    email: false
  })
  const form = document.querySelector("#form")
  const validarNombre = (e) =>{
    const nameRegex = /^[a-zA-Z0-9]+$/
    const {value} = e.target
    if(value.length < 5 || !nameRegex.test(value)){
        setErrors({...errors, nombre: true})
    }else{
        setErrors({...errors, nombre: false})
    }
    setUser({...user, nombre: value})
  }
  const validarEmail = (e) =>{
    const emailRegex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const {value} = e.target
    if( !emailRegex.test(value) ){
      setErrors({...errors, email: true})
    }else{
        setErrors({...errors, email: false})
    }
    setUser({...user, email: value})
  }

  const handlesubmit = (e) =>{
    e.preventDefault()
    if(!errors.nombre && !errors.email){
      setUser({...user, register: true})
      form.reset
    }
  }

  return (
    <div>
      <form id="form" onSubmit={handlesubmit}>
          <label> Nombre completo</label>
          <input type="text" required onChange={validarNombre}/>
          {errors.nombre && <span className="error"> El nombre debe tener mas de 5 caracteres y no tener caracteres especiales</span>}
          <label> Email</label>
          <input type="email" required onChange={validarEmail}/>
          {errors.email && <span className="error">El email no es valido</span>}
          <button type="submit">Enviar</button>
      </form>

      
    {user.register &&
    <div className="form">
    <h5>Gracias, {user.nombre} te contactaremos cuanto antes via email</h5>
    </div>
    }
    </div>


  );
};

export default Form;