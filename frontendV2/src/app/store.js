import { configureStore } from '@reduxjs/toolkit';
import playlistButtonReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    playlistButton: playlistButtonReducer,
  },
});
