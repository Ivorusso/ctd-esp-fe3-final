import React from "react";
import Form from "../Components/Form";
import { globalContextUse } from "../Components/utils/global.context";

const Contact = () => {
  const { theme } = globalContextUse();
  return (
    <main className={theme.color}>
      <div>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form />
      </div>
    </main>
  );
};

export default Contact;
