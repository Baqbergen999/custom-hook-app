import { Routes, Route } from "react-router-dom";
import Home from "./Final_project/pages/Home";
import Login from "./Final_project/pages/Login";
import Register from "./Final_project/pages/Register";
import Dashboard from "./Final_project/pages/Dashboard";
import Programs from "./Final_project/pages/Programs";
import Profile from "./Final_project/pages/Profile";
import ProtectedRoute from "./Final_project/components/ProtectedRoute";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={
        <ProtectedRoute><Dashboard /></ProtectedRoute>
      } />

      <Route path="/programs" element={
        <ProtectedRoute><Programs /></ProtectedRoute>
      } />

      <Route path="/profile" element={
        <ProtectedRoute><Profile /></ProtectedRoute>
      } />
    </Routes>
  );
}
