import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import NavigationBar from './components/Navigation/NavigationBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Team from './components/Team/Team';
import Services from './components/DeltalServices/Services';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/services' component={Services}></Route>
        <Route path='/team' component={Team}></Route>
        <Route path='/about' component={About}></Route>
      </Switch>
    </>
  );
}

export default App;
