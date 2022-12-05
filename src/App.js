import React, { useEffect } from 'react';
import './app.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import Login from './Login';

import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login,logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => { 
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl:user.photoURL
        }))
      }
      else {
        dispatch(logout());
      
      }
    })
  },[])
  return (
    <Router>
      {!user ? (<Login />) : (
            <div className="app">
            <Header />
            <div className='app-view'>
                <Sidebar />
                <Routes>
                  <Route path='/mail' element={<Mail/>}/>
                  <Route path='/' element={<EmailList/>}/>
                
                </Routes>
              </div>
              { sendMessageIsOpen &&  <SendMail/>}
          
            
      
            </div>
  )}

      </Router>
  );
}

export default App;
