import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './PlaylistButton.css';
import {
  selectPlaylist,
} from './counterSlice';

export function PlaylistButton() {
    const playlist = useSelector(selectPlaylist);
    const dispatch = useDispatch();
    const [playlistName, setPlaylistName] = useState('asd');
    
    return (
      <div>
        <div id='playlist_cycle'>
          <button id="playlist_button">Change Playlist</button>
        </div>
        <div id="playlistLabel">
          <h1 id="currentPlaylist">{playlistName}</h1>
        </div>
      </div>
    );
  }
  