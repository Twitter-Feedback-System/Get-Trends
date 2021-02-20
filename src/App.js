
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Team from './pages/Team/Team';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const menus = [{text: 'Home', link: 'home'}, {text: 'Search', link: 'search'}, {text: 'Team', link: 'team'}];
  return (
    <>
      <BrowserRouter>
        <Header menus={menus} />
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
