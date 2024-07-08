// src/App.jsx
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import BookPage from './pages/BookPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

const App = () => {
  return (
    <Router>
       <Routes>
       <Route path="/" exact component={Home} />
        <Route path="/book/:id" component={BookPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
       </Routes>
    </Router>
  );
};

export default App;
