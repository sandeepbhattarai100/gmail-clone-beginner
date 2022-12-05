import { ArrowBack, CheckCircleOutline, Delete, Email, ErrorOutline, ExitToApp, LabelImportant, MoreVertOutlined, MoveToInbox, PrintRounded, Subject, UnfoldMore, WatchLaterOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Mail.css';

import { selectedOpenMail } from './features/mailSlice';

function Mail() {
  const selectedMail = useSelector(selectedOpenMail);
  const navigate = useNavigate();
  return (
    <div className='mail'>
      <div className="mail-tools">
      <div className="mail-toolsLeft">
        <IconButton onClick={()=>navigate('/')}><ArrowBack/></IconButton>
        <IconButton><MoveToInbox/></IconButton>
        <IconButton><ErrorOutline/></IconButton>
        <IconButton><Delete/></IconButton>
        <IconButton><Email/></IconButton>
        <IconButton><WatchLaterOutlined/></IconButton>
        <IconButton><CheckCircleOutline/></IconButton>
        <IconButton><LabelImportant/></IconButton>
        <IconButton><MoreVertOutlined/></IconButton>
      </div>
       <div className="mail-toolsRight">
        <IconButton><UnfoldMore/></IconButton>
        <IconButton><PrintRounded/></IconButton>
        <IconButton><ExitToApp/></IconButton>
        </div>
      </div> 
      <div className="mail-body">
      <div className="mail-bodyheader">
          <h2>{selectedMail?.subject}</h2>
        <LabelImportant style={{color:"orange"}} />
        <div className="mail-important">
            <p>{selectedMail?.title}</p>
          <p className="mail-time">
            {selectedMail?.time}
          </p>
        </div>
        </div>
        <div className="mail-message">
          <p>{selectedMail?.description}
          </p>
        </div>
        </div>

    </div>
  )
}

export default Mail