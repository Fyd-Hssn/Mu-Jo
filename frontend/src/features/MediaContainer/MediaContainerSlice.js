import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getCookie, getMyData, getPlaylists, getTracks, getTrackDetails, getMyPlayListTrackTotal, test, spotifyApi} from '../user_data_methods';


const initialState = {
  trackID: '',
  trackName: '',
  artistName: '',
  trackImage: '',
  index: 0,
  prevIndex: 0,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getTrackState = createAsyncThunk(
  'mediaContainer/getTrackState',
  async (arg, thunkAPI) => {
    const currPlaylistID = thunkAPI.getState().playlistButton.playlistID
    const currPlaylistIndex = thunkAPI.getState().playlistButton.index
    const currTrackIndex = thunkAPI.getState().mediaContainer.index
    const playlistLength = await getMyPlayListTrackTotal(currPlaylistIndex)
    // The value we return becomes the `fulfilled` action payload
    const trackDetails = await getTrackDetails(currPlaylistIndex, currTrackIndex)
    return trackDetails;
  }
);

export const mediaContainerSlice = createSlice({
  name: 'mediaContainer',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
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


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTrackName = (state) => state.mediaContainer.trackName;
export const selectTrackID = (state) => state.mediaContainer.trackID;
export const selectTrackImage = (state) => state.mediaContainer.trackImage;
export const selectArtistName = (state) => state.mediaContainer.artistName;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default mediaContainerSlice.reducer;