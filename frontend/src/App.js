import React from 'react';
import { Route, Routes} from 'react-router-dom'
import './App.css';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Logout from './screens/Logout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      {/* <Navigation_bar /> */}
      
      <Routes>
        <Route path='' element={ <Login/>} />
        <Route path='login' element={ <Login/>} />
        <Route path='home' element={ <Home/>} />
        <Route path='register' element={ <Register/>} />
        <Route path='logout' element={ <Logout/>} />
      </Routes>
      <ToastContainer/>

    </div>
  );
}
// 
export default App;