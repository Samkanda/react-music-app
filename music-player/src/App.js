import React, {useState, useRef} from "react";
import "./styles/app.scss"
import Player from './components/Player';
import Song from './components/Song';
import data from './util'
import Library from './components/Library'
import Nav from "./components/Nav";

function App() {
  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false)

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current ,
        duration:duration})
};

const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0
})
  return (
    <div className="App">
      <Nav libraryStatus ={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player 
        setIsPlaying={setIsPlaying}
        isPlaying = {isPlaying}
        currentSong={currentSong}
        audioRef = {audioRef}
        setSongInfo = {setSongInfo}
        songInfo={songInfo}
        songs ={songs}
        setCurrentSong= {setCurrentSong}
        setSongs={setSongs}
      />
      <Library 
        songs ={songs} 
        setCurrentSong={setCurrentSong} 
        audioRef={audioRef} 
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref= {audioRef} src = {currentSong.audio}></audio>
    </div>
  );
}

export default App;
