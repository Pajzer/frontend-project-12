import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
import channelsReducer from './channelsSlice.js';
import messagesReducer from './messagesSlice.js';
import modalsReducer from './modalsSlice.js';
import langReducer from './langSlice.js';

export default configureStore({
  reducer: {
    auth: authReducer,
    channels: channelsReducer,
    messages: messagesReducer,
    ui: modalsReducer,
    language: langReducer,
  },
});
