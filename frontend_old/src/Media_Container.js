import './Media_Container.css';

function Media_Container() {

  function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    return cookie[name];
  }

  return (
    <div className="Media" id="container">
    <body>
      <h1>Spotify Web Playback SDK Quick Start</h1>
      <button id="togglePlay">Toggle Play</button>

      <script src="https://sdk.scdn.co/spotify-player.js"></script>
      <script>
          {window.onSpotifyWebPlaybackSDKReady = () => {
              const token = getCookie();
              const player = new Spotify.Player({
                  name: 'Web Playback SDK Quick Start Player',
                  getOAuthToken: cb => { cb(token); },
                  volume: 0.5
              });

              // Ready
              player.addListener('ready', ({ device_id }) => {
                  console.log('Ready with Device ID', device_id);
              });

              // Not Ready
              player.addListener('not_ready', ({ device_id }) => {
                  console.log('Device ID has gone offline', device_id);
              });

              player.addListener('initialization_error', ({ message }) => {
                  console.error(message);
              });

              player.addListener('authentication_error', ({ message }) => {
                  console.error(message);
              });

              player.addListener('account_error', ({ message }) => {
                  console.error(message);
              });

              document.getElementById('togglePlay').onclick = function() {
                player.togglePlay();
              };

              player.connect();}
          }
      </script>
    </body>

      {getCookie("access_token")}
    </div>
  );
}

export default Media_Container;
