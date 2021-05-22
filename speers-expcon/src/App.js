import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Payments from "./components/Payments";
import PricingPage from "./components/PricingPage";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import Main from "./components/main-landing/Main";



function App() {

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <NavBar/> */}
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/payments" exact component={() => <Payments />} />
          <Route path="/pricing" component={PricingPage} />

          {/* <Route path="/pricing" exact component={() => <PricingPage />} /> */}
        </Switch>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
