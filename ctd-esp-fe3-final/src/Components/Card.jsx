import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom"


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  const [dentista, setDentista] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDentista(data));
  }, []);


  return (
    <div>
     {dentista.map(item => (
    <div className="card" key={item.id}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link key={dentista.id} to='/dentist/:id'></Link>
        <img style={{width:"50%"}} src="./public/images/doctor.jpg" alt="" /> 
        <h3>{item.name}</h3>
        <h5>{item.username}</h5>
        <button onClick={addFav} className="favButton">⭐</button>
      </div>
      ))}
    </div>
  );
};

export default Card;
