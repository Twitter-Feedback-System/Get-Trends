import './App.css';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Team from './pages/Team/Team';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/team" component={Team} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
