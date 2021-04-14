import React from 'react'

const PlayerDetails = ({ song }) => {
    return (
        <div className='c-player--details'>
            <div className='details-img'>
                <img src={song.img} alt={song.title}/>
            </div>

            <h3 className='details-title'>{ song.title }</h3>
            <h4 className='details-from'>{ song.from }</h4>
        </div>
    )
}

export default PlayerDetails
