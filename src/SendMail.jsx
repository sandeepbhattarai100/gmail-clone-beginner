import { Close, Remove } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React from 'react'
import './sendMail.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';


function SendMail() {
  const dispatch = useDispatch();
  const { register, handleSubmit , formState: { errors }} = useForm();
  const onSubmit = (FormData) => {
    console.log(FormData);
    db.collection('email').add({
      to: FormData.to,
      subject: FormData.subject,
      message: FormData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    dispatch(closeSendMessage());
  };
  return (
      <div className='sendMail'>
      <div className="sendmail-header">
        <h3>New Message</h3>
        <div className="sendmail-header-right">
          <IconButton><Remove/></IconButton>
          <IconButton onClick={ ()=>dispatch( closeSendMessage())}><Close /></IconButton>
        </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          type='email'
          placeholder='To'
          {...register("to",{required:true})}
        />
        {errors.to && <p lassName='mail-error'> To field  is required!!</p>}
        <input type='text'
          name='subject'
          placeholder='Subject'
          {...register("subject",{required:true})}
        />
           {errors.subject && <p className='mail-error'> Subject field is required!!</p>}
     
        <input name='message'
          type='text'
          placeholder='Message'
          {...register("message",{required:true})}
        />
           {errors.message && <p className='mail-error'> Message field is required!!</p>}
          <div className="sendmail-button">
          <Button className='sendmail-send' variant='contained' color="primary"
          type='submit'>Send</Button>
          </div>
        </form>
          
          
    </div>
  )
}

export default SendMail;