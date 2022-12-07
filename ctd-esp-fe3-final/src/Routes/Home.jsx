import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Outlet } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setdentist] = useState([]);

  const getDentist = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setdentist(data);
  };

  useEffect(() => {
    getDentist();
  });

  return (
    <>
      <Outlet />
      <div className="card-grid">
        {dentists.length
          ? dentists.map((dentist) => (
                <Card key={dentist.id} data={dentist} />
            ))
          : null}
      </div>
    </>
  );
};

export default Home;
