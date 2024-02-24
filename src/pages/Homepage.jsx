import React, { useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import ReactGA from "react-ga";
import Principal from "../components/Principal/Principal";
import Student from "../components/Student/Student";

const Homepage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <>
      <Hero />
      <About />
      <Principal />
      <Student/>
      <Contact />
    </>
  );
};

export default Homepage;
