import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      
     <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/cart" >
        <Cart/>
      </Route>

      </Switch>   
    </BrowserRouter>
  );
}

export default App;
