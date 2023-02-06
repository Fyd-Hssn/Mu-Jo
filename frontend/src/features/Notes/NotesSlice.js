import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getMyData} from '../Methods/user_data_methods';
import axios from 'axios';


const initialState = {
  noteField: '',
};

export const saveNotes = createAsyncThunk(
  'notes/saveNotes',
  async (arg, thunkAPI) => {
    const userID = await getMyData()
    const trackID = thunkAPI.getState().mediaContainer.trackID
    
    var fieldNotes = document.getElementById("field").innerHTML
    
    const record = {
        userID: userID,
        trackID: trackID,
        notes: fieldNotes
    }
    
    await axios.post("http://localhost:8888/app/saveNote", record)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    
    const savedNote = record.notes;

    return savedNote;
  }
);

export const loadNotes = createAsyncThunk(
    'notes/loadNotes',
    async (arg, thunkAPI) => {
      const userID = await getMyData()
      const trackID = thunkAPI.getState().mediaContainer.trackID
      
      const searchRecord = {
        userID: userID,
        trackID: trackID,
      }

      let loadedNote;
      
      await axios.get("http://localhost:8888/app/getNote", {params: searchRecord})
          .then((res) => {
            loadedNote = res.data.notes
          })
          .catch((err) => console.log(err))

      return loadedNote;
    }
  );

export const updateNotes = createAsyncThunk(
    'notes/updateNotes',
    async (arg, thunkAPI) => {
        const userID = await getMyData()
        const trackID = thunkAPI.getState().mediaContainer.trackID
        
        var fieldNotes = document.getElementById("field").innerHTML
        
        const record = {
            userID: userID,
            trackID: trackID,
            notes: fieldNotes
        }
        
        await axios.post("http://localhost:8888/app/updateNote", record)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))

        const updatedNote = record.notes

        return updatedNote;
    }
);

export const deleteNotes = createAsyncThunk(
    'notes/deleteNotes',
    async (arg, thunkAPI) => {
        const userID = await getMyData()
        const trackID = thunkAPI.getState().mediaContainer.trackID

        const searchRecord = {
            userID: userID,
            trackID: trackID,
          }
        
        await axios.delete("http://localhost:8888/app/deleteNote", { data: searchRecord })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

        return;
    }
  );

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(saveNotes.fulfilled, (state, action) => {
        state.noteField = action.payload;
      })
      .addCase(loadNotes.fulfilled, (state, action) => {
        state.noteField = action.payload;
      })
      .addCase(updateNotes.fulfilled, (state, action) => {
        state.noteField = action.payload;
      })
      .addCase(deleteNotes.fulfilled, (state, action) => {
        state.noteField = "";
      })
  },
});

export const selectNotes = (state) => state.notes.noteField;


export default notesSlice.reducer;
