import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

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
              <Link key={dentist.id} to={`/home/dentist/${dentist.id}`}>
                <Card key={dentist.id} data={dentist} />
              </Link>
            ))
          : null}
      </div>
    </>
  );
};

export default Home;
