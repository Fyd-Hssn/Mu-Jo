import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './PlaylistButton.css';
import {getCookie, getPlaylists, spotifyApi} from '../user_data_methods';
import {
  getPlaylistName,
  selectPlaylist,
} from './PlaylistButtonSlice';

let token = getCookie("access_token")
spotifyApi.setAccessToken(token)

export function PlaylistButton() {
    const playlist = useSelector(selectPlaylist);
    const dispatch = useDispatch();
    // let [playlistName, setPlaylistName] = useState('');
    
    
    return (
      <div>
        <div id='playlist_cycle'>
          <button id="playlist_button" onClick={() => dispatch(getPlaylistName())}>Change Playlist</button>
        </div>
        <div id="playlistLabel">
          <h1 id="currentPlaylist">{playlist}</h1>
        </div>
      </div>
    );
  }
  