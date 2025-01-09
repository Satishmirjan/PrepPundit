import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import MockTestsPage from './pages/MockTestsPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/mock-tests" element={<MockTestsPage />} />
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;