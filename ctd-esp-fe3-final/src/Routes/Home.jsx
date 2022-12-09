import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Outlet } from "react-router-dom";
import { globalContextUse } from "../Components/utils/global.context";

const Home = () => {
  const { theme } = globalContextUse();
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
      <main className={theme.color}>
        <div className="card-grid">
          {dentists.length
            ? dentists.map((dentist) => (
                <Card key={dentist.id} data={dentist} />
              ))
            : null}
        </div>
      </main>
    </>
  );
};

export default Home;
