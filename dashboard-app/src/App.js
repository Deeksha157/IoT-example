import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
