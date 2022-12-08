import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Detail = () => {
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
      <h1>Detalles Dentista </h1>
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
