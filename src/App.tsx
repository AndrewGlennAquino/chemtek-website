import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import FirstTimeCleaning from "./pages/first-time-cleaning/FirstTimeCleaning";
import ChemicalProgram from "./pages/chemical-program/ChemicalProgram";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import { Routes, Route } from "react-router";
import Admin from "./pages/admin/Admin";
import { Blogs } from "./pages/blogs/Blogs";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
    <>
      <Header />
      <Auth0Provider
        domain="dev-g473uzff0iy3v1fo.us.auth0.com"
        clientId="TtvIjcf7sTRgc1V1kHXcuAsL3y8qkkah"
        authorizationParams={{
          // TODO: change url https://chemtek.services/chemtekkers
          redirect_uri: "http://localhost:8888/chemtekkers",
        }}
      >
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Home />} />

          {/* Blogs page */}
          <Route path="/blogs" element={<Blogs />} />

          {/* Admin page with obscure endpoint to deter bots*/}
          <Route path="/chemtekkers" element={<Admin />} />

          {/* Promotional pages */}
          <Route path="/firsttimecleaning" element={<FirstTimeCleaning />} />
          <Route path="/chemicalprogram" element={<ChemicalProgram />} />

          {/* Page not found for 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Auth0Provider>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
