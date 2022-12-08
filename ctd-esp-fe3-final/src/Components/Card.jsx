import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  function saveDentista(dentista) {
    let dentistas = localStorage.getItem("dentistaFav");
    if (dentistas == null) {
      dentistas = [];
    } else {
      dentistas = JSON.parse(dentistas);
      dentistas = dentistas.filter((d) => d.id !== dentista.id);
    }

    dentistas.push(dentista);
    localStorage.setItem("dentistaFav", JSON.stringify(dentistas));
  }

  return (
    <div className="card" key={data.id}>
      <img style={{ width: "50%" }} src="./public/images/doctor.jpg" alt="" />
      <h3>
        <Link key={data.id} to={`/home/dentist/${data.id}`}>
          {data.name}
        </Link>
      </h3>
      <h5>{data.username}</h5>
      <button onClick={() => saveDentista(data)} className="favButton">
        ⭐
      </button>
    </div>
  );
}

export default Card;
