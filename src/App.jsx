import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./shared/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import News from "./components/News";
import Community from "./components/Community";
import Footer from "./shared/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    fetch("https://stream-line-server.onrender.com")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/news" element={<News />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
