import React, {useContext} from 'react' 
import { MusicContext } from './MusicContext'

const Song = ({currentSong}) => {
    const {isPlaying} = useContext(MusicContext)
    return (
        <div className="song-container">
            <img className={`${isPlaying === true  ? 'ff': ""}`} alt={""}src={currentSong.cover}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}


export default Song
