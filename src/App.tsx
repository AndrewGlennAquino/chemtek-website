import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import FirstTimeCleaning from "./pages/first-time-cleaning/FirstTimeCleaning";
import ChemicalProgram from "./pages/chemical-program/ChemicalProgram";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firsttimecleaning" element={<FirstTimeCleaning />} />
        <Route path="/chemicalprogram" element={<ChemicalProgram />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
