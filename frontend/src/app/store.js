import { configureStore } from '@reduxjs/toolkit';
import playlistButtonReducer from '../features/PlaylistButton/PlaylistButtonSlice';
import mediaContainerReducer from '../features/MediaContainer/MediaContainerSlice';
import notesReducer from '../features/Notes/NotesSlice';

export const store = configureStore({
  reducer: {
    playlistButton: playlistButtonReducer,
    mediaContainer: mediaContainerReducer,
    notes: notesReducer,
  },
});
