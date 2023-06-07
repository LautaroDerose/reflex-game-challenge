import React, { useContext } from 'react'
import { GameContext } from '../context/GameProvider';
import GameScreen from './GameScreen';
import GameScreenMiddle from './GameScreenMiddle';
import GameScreenHard from './GameScreenHard';

const Screen = () => {
  
  const style = {
    gameScreenContainer: `flex justify-center items-center p-[40px] bg-black `,
  }
  const {difficulty} = useContext(GameContext);
  
  return (
    <div className={style.gameScreenContainer}>
      { difficulty === 'initial' ? <GameScreen /> : (difficulty === 'middle' ? <GameScreenMiddle /> : <GameScreenHard />) }
    </div>
  )
}

export default Screen
