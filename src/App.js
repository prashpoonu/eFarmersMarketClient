import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Components/Home.js'
import BuyerProfile from './Components/BuyerProfileComponent.js'


function App() {
  return (
    <main className='App'>
      <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home}></Route>
        <Route exact path={"/dashboard"} component={BuyerProfile}></Route>
      </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
