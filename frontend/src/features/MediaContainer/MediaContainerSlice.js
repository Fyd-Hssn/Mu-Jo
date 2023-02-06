import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getTrackDetails, getMyPlayListTrackTotal} from '../Methods/user_data_methods';


const initialState = {
  trackID: '',
  trackName: '',
  artistName: '',
  trackImage: '/DefaultAlbumArt.png',
  index: 0,
  prevIndex: 0,
};

export const getTrackState = createAsyncThunk(
  'mediaContainer/getTrackState',
  async (arg, thunkAPI) => {
    const currPlaylistID = thunkAPI.getState().playlistButton.playlistID
    const currPlaylistIndex = thunkAPI.getState().playlistButton.index
    const currTrackIndex = thunkAPI.getState().mediaContainer.index
    const playlistLength = await getMyPlayListTrackTotal(currPlaylistIndex)
    const trackDetails = await getTrackDetails(currPlaylistIndex, currTrackIndex)
    return trackDetails;
  }
);

export const mediaContainerSlice = createSlice({
  name: 'mediaContainer',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getTrackState.fulfilled, (state, action) => {
        state.trackID = action.payload[0];
        state.trackName = action.payload[1];
        state.trackImage = action.payload[2];
        state.index = action.payload[3];
        state.artistName = action.payload[4];
      });
  },
});


export const selectTrackName = (state) => state.mediaContainer.trackName;
export const selectTrackID = (state) => state.mediaContainer.trackID;
export const selectTrackImage = (state) => state.mediaContainer.trackImage;
export const selectArtistName = (state) => state.mediaContainer.artistName;


export default mediaContainerSlice.reducer;
