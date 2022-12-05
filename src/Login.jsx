import React from 'react'
import './Login.css';
import Logo from './images/gmaillogo.png';
import Button from '@mui/material/Button';
import { auth, provider} from './firebase';
import { login } from './features/userSlice';
import { useDispatch} from 'react-redux';
 
function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                   
                }))
            }
            
            )
            .catch(error => alert(error.message));
        
    };
  return (
      <div className='login'>
          <div className="login-container">
              <img src={Logo} alt="logo" />
              <Button variant='contained' color="primary" onClick={signIn}>Login</Button>
          </div>
          
    </div>
  )
}

export default Login