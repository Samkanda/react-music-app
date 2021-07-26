import React, {useState, useRef} from "react";
import "./styles/app.scss"
import Player from './components/Player';
import Song from './components/Song';
import data from './util'
import Library from './components/Library'
import Nav from "./components/Nav";
import {MusicContext} from './components/MusicContext'

function App() {
  //States
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current , duration:duration})
};


  return (
    <MusicContext.Provider value = {{isPlaying, setIsPlaying, setCurrentSong, currentSong, audioRef, setSongInfo, songInfo, songs, setSongs}}>
    <div className="App">
      <Nav libraryStatus ={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player />
      <Library libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref= {audioRef} src = {currentSong.audio}></audio>
    </div>
    </MusicContext.Provider>
  );
}

export default App;
