import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// COMPONENTS
import Search from './components/Search'
import Saved from './components/Saved'

function App() {
  return (
    <Router>
      <div className="App">
          <nav className="menu">
            <a href="/" className="logo">Google Books</a>
            <ul>
              <li>
                <Link to="/" className="nav-link">Search</Link>
              </li>
              <li>
                <Link to="/saved" className="nav-link">Saved</Link>
              </li>
            </ul>
          </nav>
          <div className="banner">
            <h1>(React) Google Books Search</h1>
            <p>Search for and Save Books of Interest.</p>
          </div>
          <Switch>
            <Route path="/saved">
              <Saved />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;