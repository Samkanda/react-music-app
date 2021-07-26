import React, {useContext, useState} from 'react' 
import LibrarySong from './LibrarySong';
import { MusicContext } from './MusicContext'

const Library = ({libraryStatus}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const {songs} = useContext(MusicContext)
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2 className="library-title">Library</h2>
            <input type="text" id="header-search" placeholder="Search..." onChange={(e) => {setSearchTerm(e.target.value)}} />
            <div className="library-songs">
                {songs.filter((song) => {
                    if (searchTerm == "") {
                        return song
                    } else if (song.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    {
                        return song
                    }
                }).map(song => ( 
                    <LibrarySong 
                        song={song} 
                        id={song.id}
                        key={song.id} 
                    />
                ))}
            </div>
        </div>
    )
}
export default Library