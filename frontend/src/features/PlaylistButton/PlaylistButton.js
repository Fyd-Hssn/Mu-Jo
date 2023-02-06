import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './PlaylistButton.css';
import {getCookie, spotifyApi} from '../Methods/user_data_methods';
import {
  getPlaylistName,
  selectPlaylist,
} from './PlaylistButtonSlice';

let token = getCookie("access_token")
spotifyApi.setAccessToken(token)

export function PlaylistButton() {
    const playlist = useSelector(selectPlaylist);
    const dispatch = useDispatch();
    
    
    return (
      <div>
        <div id='playlist_cycle'>
          <button class="glow-playlistButton" id="playlist_button" onClick={() => dispatch(getPlaylistName())}>Change Playlist</button>
        </div>
        <div id="playlistLabel">
          <h1 id="currentPlaylist">{playlist}</h1>
        </div>
      </div>
    );
  }
  