import { IconButton } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import './EmailRow.css';
import Checkbox from '@mui/material/Checkbox';
import { StarBorderOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({id, title, subject, description,time}) { 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                id, title, subject, description,time,
            })
        );
        navigate('/mail')
    };
    return (
  
      <div className='email-row' onClick={openMail}>
          <div className="emailrow-options">
              <IconButton>
                  <Checkbox/> 
              </IconButton>
              <IconButton>
                  <StarBorderOutlined/> 
              </IconButton>
          </div>
          <h3 className="emailrow-title">{title}</h3>
          <div className="emailrow-message">
              <h4>{subject}{" "}
              <span className="emailrow-description">-{description}</span>
               </h4>
               <p className="emailrow-time">{time}</p>
             
          </div>
          
        
    </div>
  )
}

export default EmailRow