import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Complaints from "./pages/Complaints";
import Training from "./pages/Training";
import Forum from "./pages/Forum";
import Notification from "./components/Notification";
import useAuth from "./hooks/useAuth"; // Correct import

const App = () => {
  const { notification } = useAuth();

  return (
    <Router>
      <Notification message={notification.message} type={notification.type} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/training" element={<Training />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
};

export default App;
