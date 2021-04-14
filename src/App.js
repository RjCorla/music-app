import { useState, useEffect } from 'react';

import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: 'Deep in Abyss',
      from: 'Made in Abyss OP',
      img: './assets/images/made_in_abyss.jpg',
      src: './assets/sounds/made_in_abyss.mp3',
    },
    {
      title: 'Grand Blue',
      from: 'Grand Blue OP',
      img: './assets/images/grand_blue.jpg',
      src: './assets/sounds/grand_blue.mp3',
    },
    {
      title: 'Kuchizuke Diamond',
      from: 'Yamada-kun OP',
      img: './assets/images/yamada.png',
      src: './assets/sounds/yamada.mp3',
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className='App'>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
