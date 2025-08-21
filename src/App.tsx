import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import FirstTimeSpecials from "./pages/first-time-special/FirstTimeSpecial";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first-time-specials" element={<FirstTimeSpecials />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
