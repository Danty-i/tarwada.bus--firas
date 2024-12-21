import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import UserDashboard from "./pages/UserDashboard/User_dashboard";
import Reservations from './Reservations';
import NewTicket from "./pages/UserDashboard/new-ticket";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/new-ticket" element={<NewTicket />} />


      </Routes>
    </Router>
  );
}

export default App;
