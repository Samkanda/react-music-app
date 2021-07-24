import React, {useState, useRef} from "react";
import "./styles/app.scss"
import Player from './components/Player';
import Song from './components/Song';
import data from './util'
import Library from './components/Library'


function App() {
  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

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
      <Song currentSong={currentSong}/>
      <Player 
        setIsPlaying={setIsPlaying}
        isPlaying = {isPlaying}
        currentSong={currentSong}
        audioRef = {audioRef}
        setSongInfo = {setSongInfo}
        songInfo={songInfo}/>
      <Library 
        songs ={songs} 
        setCurrentSong={setCurrentSong} 
        audioRef={audioRef} 
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref= {audioRef} src = {currentSong.audio}></audio>
    </div>
  );
}

export default App;
