import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Notes.css';
import {
  saveNotes,
  loadNotes,
  updateNotes,
  deleteNotes,
  selectNotes
} from './NotesSlice';

function Notes() {
  const currentNotes = useSelector(selectNotes);
  const dispatch = useDispatch();

  
  return (
    <div>
      <div className="Notes" id="field" contentEditable="true" suppressContentEditableWarning="true">
        {currentNotes}
      </div>
      <div id='note_control'>
        <button class="glow-button" id="save_note_button" onClick={() => dispatch(saveNotes())}>Save Notes</button>
        <button class="glow-button" id="load_note_button" onClick={() => dispatch(loadNotes())}>Load Notes</button>
        <button class="glow-button" id="update_note_button" onClick={() => dispatch(updateNotes())}>Update Notes</button>
        <button class="glow-button" id="delete_note_button" onClick={() => dispatch(deleteNotes())}>Delete Notes</button>
      </div>
    </div>
  );
}

export default Notes;
