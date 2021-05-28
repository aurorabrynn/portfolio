import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Container from "./components/Container"
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <Footer />
    </Wrapper>
  );
}

export default App;
