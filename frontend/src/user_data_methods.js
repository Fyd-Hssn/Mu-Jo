const SpotifyWepApi = require('spotify-web-api-node')

let token = getCookie("access_token")

const spotifyApi = new SpotifyWepApi()


async function getMyData() {
    const me = await spotifyApi.getMe();
    return me.body.id;
    }


async function getPlaylists() {
    const playlists = await spotifyApi.getUserPlaylists(getMyData());
    const res = (playlists.body.items)
    return res
}

async function getTracks(id, index=0) {
    let total = await getMyPlayListTrackTotal(index)
    const limit = 100
    let offset = 0
    let tracks = {}
    let key = 0
    while (total >= 0) {
        let currBatch = await spotifyApi.getPlaylistTracks(id, {offset: offset}) 
        for (let i = 0; i < currBatch.body.items.length; i++) {
            tracks[key] = currBatch.body.items[i].track
            key++
        }
        // console.log(currBatch.body.items)
        total = total - limit
        offset = offset + limit
    }
    return tracks
}

// async function getTrackDetails(id) {
//     const track = await 
// }

async function getMyPlayListTrackTotal(index='0') {
    const tracks = await getPlaylists()
    return (tracks[index].tracks.total)
}

async function test() {
    const x = await getPlaylists()
    const id = (x[0].id)
    const res = await getTracks(id)
    for (let i = 0; i < res.length; i++) {
        // console.log(res[i])
    }
    console.log(id)
    return id
}

function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    return cookie[name];
  }




  export {getCookie, getMyData, getPlaylists, getTracks, getMyPlayListTrackTotal, test, spotifyApi}