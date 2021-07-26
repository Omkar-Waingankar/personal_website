import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Splash from './pages/Splash'
import Berkeley from './pages/Berkeley';
import Nylas from './pages/Nylas';
import Amazon from './pages/Amazon';
import EightVC from './pages/EightVC';
import Flipout from "./pages/Flipout";
import Adventure from "./pages/Adventure";

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
          <Route path="/nylas">
            <Nylas />
          </Route>
          <Route path="/8vc">
            <EightVC />
          </Route>
          <Route path="/flipout">
            <Flipout />
          </Route>
          <Route path="/adventure">
            <Adventure />
          </Route>
          <Route path="/">
            <Splash />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
