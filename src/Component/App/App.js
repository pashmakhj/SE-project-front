import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Button from './../Button/Button'
import Admin_login from './../../pages/Admin_login/Admin_login'
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home_page from '../../pages/Home_page/Home_page';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import Navbar from './../NavBar/NavBar'
import Customersignin from '../../pages/Customer_signin/Customer_signin';
import Customer_panel from '../../pages/Customer_panel/Customer_panel';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home_page />
          </Route>
          <Route path='/Admin-login'>
            <Admin_login />

          </Route>
          <Route exact path="/Customer_panel">
            <React.StrictMode>
            <Customer_panel />
            </React.StrictMode>
          </Route>
          <Route path="/Customer_signin"> 
              <Customersignin />
          </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
