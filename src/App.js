import './App.css';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import Services from './components/Services';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Container>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='contact' component={Contact}></Route>
        <Route path='services' component={Services}></Route>
        <Route path='team' component={Team}></Route>
        <Route path='about' component={About}></Route>
      </Switch>
    </Container>
  );
}

export default App;
