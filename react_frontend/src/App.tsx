import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SurveyForm from './components/SurveyForm/SurveyForm';
import SurveyList from './components/SurveyList/SurveyList';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<SurveyForm />} />
          <Route path="/survey/:id" element={<SurveyForm />} />
          <Route path="/surveys" element={<SurveyList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

