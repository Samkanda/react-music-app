import React, {useContext} from 'react' 
import { playAudio } from './PlayerTracker';
import { MusicContext } from './MusicContext'

const LibrarySong = ({song, id}) => {
    const {isPlaying, setCurrentSong, audioRef, songs, currentSong} = useContext(MusicContext)

    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id) 
        setCurrentSong(selectedSong[0]);
        playAudio(isPlaying, audioRef)
    };
    
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.id === currentSong.id  ? 'selected': ""}`}>
            <img alt={""}src={song.cover}></img>
            <div className="song-description">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
            
        </div>
    )
}


export default LibrarySong
