import React, { useState, useEffect, useRef } from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'

const Player = ({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs }) => {
    const audioEl = useRef(null)

    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if(isPlaying) {
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
    })

    const skipSong = (forwards = true) => {
        if(forwards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex
                temp++

                if(temp > songs.length - 1) {
                    temp = 0
                }

                return temp
            })
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex
                temp--

                if(temp < 0) {
                    temp = songs.length - 1
                }

                return temp
            })
        }
    }


    return (
        <div className='c-player'>
            <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing Now</h4>
            <PlayerDetails song={songs[currentSongIndex]} />
            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong} />
            <p>Next up: <span>{songs[nextSongIndex].title} from {songs[nextSongIndex].from}</span></p>
        </div>
    )
}

export default Player
