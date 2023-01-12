import './Media_Container.css';
import {getCookie, getMyData, getPlaylists, getTracks,  getMyPlayListTrackTotal, test, spotifyApi} from './user_data_methods';



let token = getCookie("access_token")
spotifyApi.setAccessToken(token)

function Media_Container() {



  return (
    <div className="Media" id="container">

      <button id="login" onClick={test}>Connect To Spotify</button>

    </div>
  );
}

export default Media_Container;