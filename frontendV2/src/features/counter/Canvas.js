import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Canvas.css';
import Media_Container from '../../Media_Container.js';
import Notes from '../../Notes.js';
import {
    getPlaylist,
    selectPlaylist,
  } from './counterSlice';

function Canvas() {
    // const count = useSelector(selectPlaylist);
    // const dispatch = useDispatch();
    // const [playlistName, setplaylistName] = useState('');
    return (
      <div id="canvas" alt="canvas">
            <Media_Container />
        <div id="notes" alt="notes">
            <Notes />
        </div>
        <div id='playlist_cycle'>
            <button id="playlist_button">Change Playlist</button>
        </div>
        <div id="playlist">
            <h1 id="currentPlaylist">{playlistName}</h1>
        </div>
    </div>
    );
}
  
export default Canvas;