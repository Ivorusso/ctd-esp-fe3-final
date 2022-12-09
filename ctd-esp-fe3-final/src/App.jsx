import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import { links } from "./Components/utils/links";

function App() {
  const { home, contacto, favs, dentista } = links;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={home.path} element={<Home />} />
        <Route path={`${dentista.path}`} element={<Detail />} />
        <Route path={favs.path} element={<Favs />} />
        <Route path={contacto.path} element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
