import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { globalContextUse } from "../Components/utils/global.context";

const Detail = () => {
  const { theme } = globalContextUse();
  const { dentistId } = useParams();
  const navigate = useNavigate();
  const [dentist, setDentist] = useState([]);

  const getDentist = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${dentistId}`
    );
    const data = await res.json();
    setDentist(data);
  };

  useEffect(() => {
    getDentist();
  });

  return (
    <>
      <main className={theme.color}>
        <h1>Detalles Dentista </h1>
        <div className="card-grid">
          <div className="card">
            <h2>Dentista Numero....{dentistId}</h2>
            <p>Nombre: {dentist.name}</p>
            <p>Email: {dentist.email}</p>
            <p>Telefono: {dentist.phone} </p>
            <p>Web: {dentist.website} </p>
            <button onClick={() => navigate(-1)}>Go back</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Detail;
