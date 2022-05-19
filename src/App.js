import React, { useEffect } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          creationTime: userAuth.metadata.creationTime
        }))
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])
  return (
    <div className="app">
      {console.log(user)}
      <Router>
          {!user ? (
            <LoginScreen />
          ) : (
          <Routes>
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/' element={<HomeScreen />}/>
          </Routes>
          )}
      </Router>
    </div>
  );
}

export default App;
