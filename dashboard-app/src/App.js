import './App.css';
import Sidebar from './components/Sidebar';
import Cpu from './pages/Cpu';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <Sidebar />
        </Route>
        <Route path="/cpu">
          <Cpu />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;