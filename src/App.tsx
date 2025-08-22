import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import FirstTimeCleaning from "./pages/first-time-cleaning/FirstTimeCleaning";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first-time-cleaning" element={<FirstTimeCleaning />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
