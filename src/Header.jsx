import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './images/gmaillogo.png';
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header-left">
        <IconButton >
        <MenuIcon />
        </IconButton>
      
        <img src={Logo}/>
      </div>
      <div className="header-middle">
        <SearchIcon />
        <input type="text" placeholder="Search Mail"/>
        <TuneIcon/>
        
      </div>
      <div className="header-right">
        <IconButton>
        <AppsIcon />
        </IconButton>
        <IconButton>
        <NotificationsActiveIcon />
        </IconButton>
     <IconButton >
          <Avatar src={user?.photoUrl} onClick={ logOutOfApp}>{user?.email[0]}</Avatar>
     </IconButton>
      
      </div>
    </div>
      
  );
}

export default Header