import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Payments from "./components/Payments";
import Pricing from "./components/Pricing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/payments" exact component={() => <Payments />} />
          <Route path="/pricing" exact component={() => <Pricing />} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
