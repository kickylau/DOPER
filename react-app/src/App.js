import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/SignUpModal/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Home from './components/Home';
import Reservation from "./components/Reservation";
import Pet from "./components/Pet/Pet";
import Walkers from './components/Walker';
//import SplashPage from './components/SplashPage/SplashPage';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/pets' exact={true}>
          <h1>PETS</h1>
          <Pet/>
        </Route>

        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <Route path='/reservations' exact={true} >
          <Reservation/>
        </Route>
        <ProtectedRoute path='/Home' >
          {/* <Home/> */}
          <h1>Home Page</h1>
          <Walkers/>
        </ProtectedRoute>
        {/* <ProtectedRoute path='/walkers' >

          <h1>Home !! Page</h1>

        </ProtectedRoute> */}


        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/'  >
          <h1>My Home Page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
