import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { dentistId } = useParams();
  const navigate = useNavigate();
  const [dentist, setDentist] = useState([]);

  const getDentist = async () => {
    //Deberas completar este fetch con el parametro correspondiente
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${dentistId}`
    );
    const data = await res.json();
    setDentist(data);
  };

  useEffect(() => {
    getDentist();
  });

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className="card-grid">
        <div className="card">
          <h2>Dentista Numero....{dentistId}</h2>
          <p>{dentist.name}</p>
          <p>{dentist.email}</p>
          <p>{dentist.phone} </p>
          <p>{dentist.website} </p>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    </>
  );
};

export default Detail;
