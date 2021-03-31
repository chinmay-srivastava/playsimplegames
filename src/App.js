import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import OurStory from './pages/ourStory';
import games from './pages/games';
import support from './pages/support';
import safePlay from './pages/safePlay';
import Footer from './components/footer/footer'
import Alert from './components/alert/alert'


function App() {
  return (
    
    <div className="page-container">
    <div className="content-wrap">
    <Router>
      <Navbar>
      <games></games>
      <Switch>
      <Route path='/ourStory'>
      <OurStory/>
      </Route>
      <Route exact path='/games' component={games} />
      <Route exact path='/support' component={support} />
      <Route exact path='/safePlay' component={safePlay} />
    </Switch>
      </Navbar>
      </Router>
      </div>
      <Footer/>
      <Alert/>

   </div>
    
    
  );
}

export default App;
