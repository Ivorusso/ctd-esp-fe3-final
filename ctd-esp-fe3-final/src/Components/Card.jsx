import React from "react";
import { useState } from "react";

function Card({ data }) {
  const [save, setSave] = useState([]);

  const saveDentista = (user) => {
    const data = save.find((savedUser) => savedUser.id === user.id);
    if (!data) {
      setSave([...save, user]);
      localStorage.setItem("DentistaFav", JSON.stringify([...save, user]));
    }
  };

  return (
    <div className="card-grid">
      <div className="card" key={data.id}>
        <img style={{ width: "50%" }} src="./public/images/doctor.jpg" alt="" />
        <h3>{data.name}</h3>
        <h5>{data.username}</h5>
        <button onClick={() => saveDentista(data)} className="favButton">
        ⭐
      </button>
      </div>
    </div>
  );
}

export default Card;
