import React, { Component } from "react";

import Header from "./components/header/head";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Project from "./components/project/project";
import Footer from "./components/footer/footer";
import Testimonials from "./components/testimonials/testimonials";
import Vlog from "./components/vlog/vlog";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <About />
        <Resume />
        <Project />
        <Testimonials />
        <Vlog />
        <Footer />
      </div>
    );
  }
}

export default App;
