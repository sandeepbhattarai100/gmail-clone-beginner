import Checkbox from '@mui/material/Checkbox';
import React, { useEffect } from 'react'
import './EmailList.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RedoIcon from '@mui/icons-material/Redo';
import EmailRow from './EmailRow';
import { useState } from 'react';


import { IconButton } from '@mui/material';
import { ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, Message, Settings } from '@mui/icons-material';
import { db } from './firebase';

function EmailList() {

    const [email, setEmail] = useState([]);

    useEffect(() => {
        db.collection('email').orderBy('timestamp','desc').onSnapshot((snapshot) =>  setEmail(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }
            ))))
    }, []);
  return (
      <div className='emailList'>
          <div className="emailList-settings">
              
              <div className="emailList-settingsLeft">
                
                  <Checkbox />
                  <IconButton>
                      <ArrowDropDown/>
                  </IconButton>
                  <IconButton>
                     <RedoIcon/>
                  </IconButton>
                  <IconButton>
                      <MoreVertIcon/>
                  </IconButton>
              </div>
              <div className="emailList-settingsRight">
                  <IconButton>
                  <ChevronLeft />
                  </IconButton>
                  <IconButton>
                  <ChevronRight />
                  </IconButton>
                  <IconButton>
                  <KeyboardHide/>
                  </IconButton>
                  <IconButton>
                  <Settings/>
                  </IconButton>
                 
                
                 
                
                  </div>
                  
          </div>
          
          
          <div className="emailList-sections">
              {email.map(({id, data:{to, subject,message,timestamp}}) => (
                  <EmailRow
                      id={id}
                      key={id}
                      title={to}
                      subject={subject}
                      description={message}
                      time={new Date(timestamp?.seconds*1000).toUTCString()}
                  />
            ))}
             {/* <EmailRow
                 title="Twitch"
                 subject="Hey fellow brihaspatians"
                 description=" this is a test case for gmail th has aua aaoierna dfiaeea faufaehjasda dsduasabsaduasbasd asdasdahs sdauidah nfaefie ofeofja "
                  time="10pm" />    */}
              
          
          
          
             
              
           
          </div>
    </div>
  )
}

export default EmailList