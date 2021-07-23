import Splash from './pages/Splash'
import Berkeley from './pages/Berkeley';
import Amazon from './pages/Amazon';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/berkeley">
            <Berkeley />
          </Route>
          <Route path="/amazon">
            <Amazon />
          </Route>
          <Route path="/">
            <Splash />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
