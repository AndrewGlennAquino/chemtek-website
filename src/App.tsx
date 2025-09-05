import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import FirstTimeCleaning from "./pages/first-time-cleaning/FirstTimeCleaning";
import ChemicalProgram from "./pages/chemical-program/ChemicalProgram";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import { Routes, Route } from "react-router";
import Admin from "./pages/admin/Admin";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        {/* Admin page with obscure endpoint to deter bots*/}
        <Route path="/chemtekkers" element={<Admin />} />

        {/* Promotional pages */}
        <Route path="/firsttimecleaning" element={<FirstTimeCleaning />} />
        <Route path="/chemicalprogram" element={<ChemicalProgram />} />

        {/* Page not found for 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
