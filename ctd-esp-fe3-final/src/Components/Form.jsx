import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
          <label> Nombre completo</label>
          <input type="text" />
          <label> Email</label>
          <input type="email" />
          <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
