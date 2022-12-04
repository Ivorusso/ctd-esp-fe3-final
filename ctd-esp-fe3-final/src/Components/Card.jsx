import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Card() {
  const [users, setUsers] = useState([]);
  const [save, setSave] = useState([]);

  const saveDentista = (user) => {
    const data = save.find((savedUser) => savedUser.id === user.id);
    if (!data) {
      setSave([...save, user]);
      localStorage.setItem("DentistaFav", JSON.stringify([...save, user]));
    }
  };

  const [dentista, setDentista] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDentista(data));
  }, []);

  return (
    <div className="card-grid">
      {dentista.map((item) => (
        <div className="card" key={item.id}>
          <Link key={dentista.id} to="/dentist/:id"></Link>
          <img
            style={{ width: "50%" }}
            src="./public/images/doctor.jpg"
            alt=""
          />
          <h3>{item.name}</h3>
          <h5>{item.username}</h5>
          <button onClick={() => saveDentista(item)} className="favButton">
            ⭐
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
