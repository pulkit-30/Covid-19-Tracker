import Navbar from "./components/Header/Navbar";
import DisplayCases from "./components/Table/DisplayCases";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryWiseData from "./components/searchbar/Country_data";
import WorldCases from "./components/World_wide_cases/World_cases";
import VacineDetail from "./components/vacine/VacineDetail";
import Graph from "./components/Chart/Graph";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/worldcases">
            <DisplayCases />
          </Route>
          <Route path="/graph">
            <Graph />
          </Route>
          <Route path="/vacine">
            <VacineDetail />
          </Route>
          <Route path="/">
            <CountryWiseData />
            <WorldCases />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
