import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './screens/Homescreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid, 
          email: userAuth.email
        }))
      } else  {
        dispatch(logout())
      }
    });
  
    return () => unsubscribe();
  }, [dispatch]); // Include dispatch in the dependency array
  

  return (
    <div className="App">

      <Router>
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
        <Route exact path="/profile">
         <ProfileScreen />
        </Route>
          <Route exact path="/">
          <Homescreen />
          </Route>
        </Switch>
      )}
      </Router>
    </div>
  );
}

export default App;
