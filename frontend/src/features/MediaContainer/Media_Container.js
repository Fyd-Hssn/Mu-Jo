import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Media_Container.css';
import {getCookie, spotifyApi} from '../Methods/user_data_methods.js';
import {
  getTrackState,
  selectTrackName,
  selectTrackImage,
  selectArtistName
} from './MediaContainerSlice';

let token = getCookie("access_token")
spotifyApi.setAccessToken(token)

function Media_Container() {
  const trackImage = useSelector(selectTrackImage);
  const trackName = useSelector(selectTrackName);
  const artistName = useSelector(selectArtistName);
  const dispatch = useDispatch();

  return (
    <div className="Media" id="container">

      <h2 id='track_name'>{trackName}</h2>
      <h3 id='artist_name'>{artistName}</h3>
      <img id='track_image' src={trackImage} alt="Track Image" className="track-image" height='70%' width='82%'/>
      <button class="glow-trackButton" id="track_button" onClick={() => dispatch(getTrackState())}>Shuffle Track</button>
    </div>
  );
}

export default Media_Container;