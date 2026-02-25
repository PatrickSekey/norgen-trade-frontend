import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-display font-bold text-accent">
              Norgen
            </span>
            <span className="text-xl font-light hidden md:inline">
              International Trade
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-accent transition duration-300">
              Home
            </Link>
            
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="hover:text-accent transition duration-300">
                  Login
                </Link>
                <Link to="/register" className="hover:text-accent transition duration-300">
                  Register
                </Link>
                <Link
                  to="/onboarding"
                  className="bg-accent text-primary px-4 py-2 rounded-lg hover:bg-accent/90 transition duration-300 font-semibold"
                >
                  Become a Partner
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={isAdmin ? "/admin" : "/dashboard"}
                  className="hover:text-accent transition duration-300"
                >
                  Dashboard
                </Link>
                
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-300">
                    {user?.full_name || user?.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 text-sm font-semibold"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-accent focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-primary/95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/80 transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/80 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/80 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Link>
              <Link
                to="/onboarding"
                className="block px-3 py-2 rounded-md text-base font-medium bg-accent text-primary hover:bg-accent/90 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Become a Partner
              </Link>
            </>
          ) : (
            <>
              <Link
                to={isAdmin ? "/admin" : "/dashboard"}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/80 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className="px-3 py-2 text-sm text-gray-300 border-t border-gray-600 mt-2 pt-2">
                Logged in as: {user?.full_name || user?.email}
              </div>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-red-600 hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;