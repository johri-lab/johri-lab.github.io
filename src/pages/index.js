
import React from "react";
import Layout from "../layouts/index";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Projects />
  </Layout>
);

export default IndexPage;
