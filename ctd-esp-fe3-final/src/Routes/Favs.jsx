import React, { useEffect, useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [dentista, setDentista] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("dentistaFav");
    setDentista(JSON.parse(data));
  },[]);

  return (
    <div className="card-grid">
      {dentista.map((item) => (
        <div className="card" key={item.id}>
          <img
            style={{ width: "50%" }}
            src="./public/images/doctor.jpg"
            alt=""
          />
          <h3>{item.name}</h3>
          <h5>{item.username}</h5>
        </div>
      ))}
    </div>
  );
}

export default Favs;
