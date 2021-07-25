import React from 'react'
import { playAudio } from './PlayerTracker';


const LibrarySong = ({song, setCurrentSong, songs, id, audioRef, setSongs, isPlaying}) => {
    
    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id)
        
        setCurrentSong(selectedSong[0]);
        playAudio(isPlaying, audioRef)
       
        //Add Activie State
        const newSongs = songs.map((song) => {
            if(song.id === id) {
                return{
                    ...song,
                    active: true,
                }
            }else {
                return{
                    ...song,
                    active: false,
                };
            }
        })
        setSongs(newSongs)
    };
    
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected': ""}`}>
            <img alt={""}src={song.cover}></img>
            <div className="song-description">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
            
        </div>
    )
}


export default LibrarySong
