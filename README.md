# Mu-Jo
Mu-Jo (musical journaling) is a simple MERN-stack application that takes user playlist data from Spotify and creates an interface where you can note down any thoughts related to each song. The app provides the following functionalities:
- Save the notes written in the text field for the current song displayed
- Load the notes from previous sessions for the song into the text field
- Update your notes for the song for when you want to make changes
- Delete your notes for the song and start over

## Tech Stack

Mu-Jo is a MERN-stack application utilizing the following core technologies:

- Node.js for the backend server communication.
- Express for API calls to Spotify's web server. The core token retrieval mechanisms were provided by Spotify's Web Development documentation. Additional routes were implemented separately to communicate with app's database.
- MongoDB (Atlas) was used as the database for the application, with core CRUD functionality implemented by utilizing Mongoose.
- React was used for the frontend/client-side

## How to Run
- First load into the backend directory via the terminal and run 'node oauth.js'.
- Next, load into the frontend directory via the terminal and run 'npm start'.

## Demo 
1. App upon launch:

![start](https://github.com/Fyd-Hssn/Mu-Jo/blob/master/screenshots/start.png?raw=true)

2. Connect to Spotify to retrieve token:

![connect](https://github.com/Fyd-Hssn/Mu-Jo/blob/master/screenshots/connect.PNG?raw=true)

3. Token is retrieved once Spotify account is synced; return back to the app page to begin using it! (Note: first time users will be shown a Spotify login prompt first):

![token](https://github.com/Fyd-Hssn/Mu-Jo/blob/master/screenshots/token.PNG?raw=true)

4. Once in the app, you first have to select a playlist by clicking 'Change Playlist'. Repeated clicks will shuffle through your playlists. (Note: Playlists must be public on Spotify!):

![change_playlist](https://github.com/Fyd-Hssn/Mu-Jo/blob/master/screenshots/change_playlist.PNG?raw=true)

5. Next, select a random song from your selected playlist to appear in the track display by clicking 'Shuffle Track'. Repeated clicks will shuffle to a different random track:

![shuffle_track](https://github.com/Fyd-Hssn/Mu-Jo/blob/master/screenshots/shuffle_track.PNG?raw=true)

6. Now you can start journaling! Type any note in the text field and click 'Save Notes' to upload to MongoDB server:

![save](https://github.com/Fyd-Hssn/Mu-Jo/blob/master/screenshots/save.PNG?raw=true)

7. If you need to load notes for a song that you previously saved notes for, click 'Load Notes' and it will appear in the text field:

![load](https://github.com/Fyd-Hssn/Mu-Jo/blob/master/screenshots/load.PNG?raw=true)

8. To update a note for a given song, enter some new text and click 'Update Notes':

![update](https://github.com/Fyd-Hssn/Mu-Jo/blob/master/screenshots/update.PNG?raw=true)

9. To delete notes for a selected song, just click 'Delete Notes':

![delete](https://github.com/Fyd-Hssn/Mu-Jo/blob/master/screenshots/delete.PNG?raw=true)
 





