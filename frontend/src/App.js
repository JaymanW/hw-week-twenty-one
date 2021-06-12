import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// COMPONENTS
import Search from ''

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
            <a>Google Books</a>
            <ul>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/saved">Saved</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;