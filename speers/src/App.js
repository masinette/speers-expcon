import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Payments from "./components/Payments";
import Pricing from "./components/Pricing";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Payments/>
        <Pricing/>
    </div>
  );
}

export default App;
