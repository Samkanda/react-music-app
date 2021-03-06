import React, {useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"
import { playAudio } from './PlayerTracker'
import { MusicContext } from './MusicContext'

const Player = () => {
    const {isPlaying, setIsPlaying, setCurrentSong, currentSong, audioRef, songInfo, setSongInfo, songs} = useContext(MusicContext)
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        } 
    }
    
    const getTime = (time) => {
        return (
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if (direction === "skip-forward") {
            if(currentIndex < songs.length - 1) {
                setCurrentSong(songs[(currentIndex + 1)])
            }
            else{
                setCurrentSong(songs[0])
            }
        }
        if (direction === "skip-back") {
            if(currentIndex > 0) {
                setCurrentSong(songs[(currentIndex - 1)])
            }
            else{
                setCurrentSong(songs[(songs.length - 1)])
            }
        }playAudio(isPlaying, audioRef);
    }
    

    return (
        <div className = "player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input onChange ={dragHandler} min={0} 
                    max={songInfo.duration || 0} value={songInfo.currentTime}
                    type ="range" />
                <p>{getTime(songInfo.duration|| 0)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick = {() => skipTrackHandler('skip-back')} className="skip-back" size ="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick = {playSongHandler} className="play" size ="2x" icon={isPlaying ? faPause: faPlay}/>
                <FontAwesomeIcon onClick = {() => skipTrackHandler('skip-forward')} className="skip-forwards" size ="2x" icon={faAngleRight}/>
            </div>
        </div>
    )
}


export default Player
