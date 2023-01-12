import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Media_Container from './Media_Container.js';
import Notes from './Notes.js';
// import {PlaylistButton} from './features/counter/PlaylistButton.js';
// import PlaylistButton from './PlaylistButton.js';
import {getCookie, getPlaylists, spotifyApi} from './user_data_methods';



let token = getCookie("access_token")
spotifyApi.setAccessToken(token)

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


function App() {

  const handleLoginClick = () => {
    let auth_site;
    axios("/login")
    .then(res => auth_site = (res.data))
    .then((res) => {
      const urlParams = new URLSearchParams(auth_site);
      let redirect = "https://accounts.spotify.com/authorize?response_type=code&" +
        "client_id=" + urlParams.get('client_id') +
        "&scope=user-read-private%20user-read-email" +
        "&redirect_uri=http%3A%2F%2Flocalhost%3A8888%2Fcallback" +
        "&state=" + urlParams.get('state');
      window.location.href = redirect;
    })
  }

 async function currPlaylist () {
    let currPL;
    currPL = await getPlaylists()
    // console.log(currPL[0].name)
    const res = currPL[0].name 
    return res
  }

  let playlistString = currPlaylist().then(res => {return res})
  let currPlaylistStr = "Current Playlist: " + playlistString
  return (
    <div className="Canvas">
        <div>
            <h1>Mu-Jo</h1>
        </div>
      <header className="Canvas-header">
        <button id="login" onClick={handleLoginClick}>Connect To Spotify</button>
        <div id="canvas" alt="canvas">
            <Media_Container />
          <div id="notes" alt="notes">
            <Notes />
          </div>
          <div id='playlist_cycle'>
            {/* <PlaylistButton /> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
