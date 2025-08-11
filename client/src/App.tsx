import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/chemtek-website" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
