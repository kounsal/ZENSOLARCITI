import React, { Component, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { Investment } from "./pages/Investment";
import { SignIN } from "./pages/signin";
import { Join } from "./components/join";
import { Community } from "./pages/comunity";
import { Entp } from "./pages/enterprise";
import { Contact } from "./pages/contact";
import { Navbar } from "./components/navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={[<Navbar />, <Join />]} />
          <Route path="/Community" element={[<Navbar />, <Community />]} />
          <Route path="/investment" element={[<Navbar />, <Investment />]} />
          <Route path="/signin" element={<SignIN />} />
          <Route path="/Enterprise" element={[ <Entp />]} />
          <Route path="/Contact" element={[<Navbar />, <Contact />]} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
