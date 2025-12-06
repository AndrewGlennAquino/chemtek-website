// Library imports
import { Routes, Route } from "react-router";
import { Auth0Provider } from "@auth0/auth0-react";

// Component imports
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Page imports
import { Home } from "./pages/Home";
import { FirstTimeCleaning } from "./pages/FirstTimeCleaning";
import { ChemicalProgram } from "./pages/ChemicalProgram";
import { PageNotFound } from "./pages/PageNotFound";
import { Admin } from "./pages/Admin";
import { Blogs } from "./pages/Blogs";

const App = () => {
  return (
    <>
      <Header />
      <Auth0Provider
        domain="dev-g473uzff0iy3v1fo.us.auth0.com"
        clientId="TtvIjcf7sTRgc1V1kHXcuAsL3y8qkkah"
        authorizationParams={{
          // Allowed callback url on Auth0
          redirect_uri: "https://chemtek.services/blog/chemtekkers",
        }}
      >
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Home />} />

          {/* Blogs page */}
          <Route path="/blog" element={<Blogs />} />

          {/* Admin page with obscure endpoint to deter bots*/}
          <Route path="/blog/chemtekkers" element={<Admin />} />

          {/* Promotional pages */}
          <Route path="/first-time-cleaning" element={<FirstTimeCleaning />} />
          <Route path="/chemical-program" element={<ChemicalProgram />} />

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
