import React from "react";
import { globalContextUse } from "./utils/global.context";

const Footer = () => {
  const { theme } = globalContextUse();
  return (
    <main className={theme.color}>
    <footer>
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
      <img className="ico" src="/images/ico-facebook.png" alt="" />
      <img className="ico" src="/images/ico-instagram.png" alt="" />
      <img className="ico" src="/images/ico-tiktok.png" alt="" />
      <img className="ico" src="/images/ico-whatsapp.png" alt="" />
    </footer>
    </main>
  );
};

export default Footer;
