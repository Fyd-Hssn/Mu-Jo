import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './PlaylistButton.css';


function PlaylistButton(props) {


    return (
      <div>
        <div id='playlist_cycle'>
          <button id="playlist_button">Change Playlist</button>
        </div>
        <div id="playlistLabel">
          <h1 id="currentPlaylist">asda</h1>
        </div>
      </div>
    );
  }
  
  export default PlaylistButton;