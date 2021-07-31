import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import MessageBox from './MessageBox';
import Navbar from './Navbar';
import Profile from './Profile';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>
      <MessageBox/>
    </div>
  );
}

export default App;
