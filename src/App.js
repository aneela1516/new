import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import UsernamePage from './UsernamePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SplashScreen" element={<SplashScreen />} />
        <Route path="/UsernamePage" element={<UsernamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
