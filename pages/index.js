import { useState } from 'react'
import RingLoader from 'react-spinners/RingLoader'
import Player from '../lib/player'
const shuffle = require('knuth-shuffle').knuthShuffle
const songs = require('../lib/songs.json')

function getSong () {
  const song = shuffle(songs.slice(0))
  return song[0]
}

const Index = () => {
  const [song, setSong] = useState(getSong())
  const [showSpinner, setShowSpinner] = useState(true)

  const handleClick = () => {
    setSong(getSong())
  }

  return (
    <div className='wrapper'>
      <h1>Lunds Lounge</h1>
      <div className='fortune-box'>
        <RingLoader color='red' size='300px' loading={showSpinner} />
        <Player song={song} setShowSpinner={setShowSpinner} />
      </div>
      <p>
        <button onClick={handleClick}>Play me another</button>
      </p>
      <style jsx global>
        {`
          body {
            background-color: black;
            padding: 20px;
          }
          h1 {
            color: red;
            font-family: 'American Typewriter';
            font-size: 70px;
            transform: rotate(9deg);
          }
          button {
            font-weight: 500;
            width: 400px;
            height: 60px;
            font-size: 30px;
            border-radius: 25px;
            border: 1px solid black;
            cursor: pointer;
            display: inline-block;
            text-decoration: none;
            background-color: lime;
            outline: 0;
          }
          button:focus {
            outline:0;
          }
          button:active {
            outline: 0;
            background-color: yellow;
          }
          .fortune-box {
            font-size: 36px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 420Px;
          }
          .wrapper {
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}

export default Index
