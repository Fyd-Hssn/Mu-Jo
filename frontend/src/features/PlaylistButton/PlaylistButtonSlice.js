import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getMyData, getPlaylists} from '../Methods/user_data_methods';


const initialState = {
  userID: '',
  playlistName: 'Click "Change Playlist"',
  playlistID: '',
  index: null
};


export const getPlaylistName = createAsyncThunk(
  'playlistButton/getPlaylist',
  async (arg, thunkAPI) => {
    const userID = await getMyData()
    const playlists = await getPlaylists();
    const playlistCount = Object.keys(playlists).length
    let i = Math.floor(Math.random() * playlistCount)
    let stateIndex = thunkAPI.getState().playlistButton.index
    while (i == stateIndex) {
        i = Math.floor(Math.random() * playlistCount)
    }
    
    console.log(i)
    return [userID, playlists[i].name, playlists[i].id,  i];
  }
);

export const playlistButtonSlice = createSlice({
  name: 'playlistButton',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPlaylistName.fulfilled, (state, action) => {
        console.log(action.payload)
        state.userID = action.payload[0];
        state.playlistName = action.payload[1];
        state.playlistID = action.payload[2];
        state.index = action.payload[3];
      });
  },
});

export const selectPlaylist = (state) => state.playlistButton.playlistName;


export default playlistButtonSlice.reducer;
