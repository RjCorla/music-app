import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faBackward, faPause, faForward } from '@fortawesome/free-solid-svg-icons'

const PlayerControls = ({ isPlaying, setIsPlaying, skipSong }) => {
    return (
        <div className='c-player--controls'>
            <button className="skip-btn" onClick={() => skipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>

            <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)} >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>

            <button className="skip-btn" onClick={() => skipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

export default PlayerControls
