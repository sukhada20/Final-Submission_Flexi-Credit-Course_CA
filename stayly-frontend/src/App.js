import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ListProperty from "./pages/ListProperty";
import FindRoommate from "./pages/FindRoommate";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="/find-roommate" element={<FindRoommate />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
