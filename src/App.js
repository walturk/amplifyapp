import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header category="App" title="Calendar" />
      </div>
    </Router>
  );
}

export default App;
