import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import mailReducer from '../features/mailSlice';
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user:userReducer,
  },
});
