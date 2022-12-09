import React, { useEffect, useState } from "react";
import { globalContextUse} from "../Components/utils/global.context";

const Favs = () => {
  const { theme } = globalContextUse();
  const [dentista, setDentista] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("dentistaFav");
    setDentista(JSON.parse(data));
  }, []);

  return (
    <main className={theme.color}>
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
    </main>
  );
};

export default Favs;
