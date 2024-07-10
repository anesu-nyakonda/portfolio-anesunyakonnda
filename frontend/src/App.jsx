import Navbar from "./components/navbar";

import Hero from "./components/hero";
import About from "./components/About";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <div
        className="min-vh-100"
        style={{ backgroundColor: "#F9F6EF", width: "100%" }}
      >
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div className="py-5" id="about" style={{ backgroundColor: "#383838" }}>
        <About></About>
      </div>
      <div
        className="py-5"
        id="services"
        style={{ backgroundColor: "#F9F6EF" }}
      >
        <Services></Services>
      </div>
      <div className="py-5" id="contact" style={{ backgroundColor: "#383838" }}>
        <Contact></Contact>
      </div>
      <div className="py-2" style={{ backgroundColor: "#F9F6EF" }}>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
