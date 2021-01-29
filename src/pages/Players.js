import React from 'react'
import Player from '../components/Player';
import Search from '../components/Search';

const Players = () => {
    return (
        <div>
            <Search />
            <div className='main--container'>
                <Player />
            </div>
        </div>
    )
}

export default Players
