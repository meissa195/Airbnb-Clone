import './App.css';
import Home from "./components/Home"
import Header from './components/Header';
import Footer from "./components/Footer";
import SearchPage from './SearchPage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>

        <Header />
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>

        </Switch>

    </Router>

        <Footer />

    {/* Home Component */}
      {/* Header */}
      {/* Banner */}  
        {/* Search */}
      {/* Card */}
      {/* Footer */}
    {/* Search Page */}
    </div>
  );
}

export default App;
