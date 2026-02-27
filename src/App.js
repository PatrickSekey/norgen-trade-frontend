import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Onboarding from './pages/Onboarding';
import Fashion from './pages/Fashion';
import AdminDashboard from './pages/AdminDashboard';
import PartnerDashboard from './pages/PartnerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import OnboardingSuccess from './pages/OnboardingSuccess';
import Electronics from './pages/Electronics';
import Vehicles from './pages/Vehicles';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/register" element={<Register />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/onboarding/success" element={<OnboardingSuccess />} />
            <Route path="/onboarding" element={<Onboarding />} />
            
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <PartnerDashboard />
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;