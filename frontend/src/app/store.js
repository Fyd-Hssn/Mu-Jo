import { configureStore } from '@reduxjs/toolkit';
import playlistButtonReducer from '../features/PlaylistButton/PlaylistButtonSlice';
import mediaContainerReducer from '../features/MediaContainer/MediaContainerSlice';

export const store = configureStore({
  reducer: {
    playlistButton: playlistButtonReducer,
    mediaContainer: mediaContainerReducer,
  },
});
