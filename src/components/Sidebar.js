import React, { useContext, useState } from 'react'
import { GameContext } from "../context/GameProvider";


const style = {
  buttonDifficulty: `bg-gray-300 text-gray-500 m-1 px-4 py-2 font-bold text-xl cursor-pointer rounded-lg `,
  buttonActive: `bg-green-500 text-white m-1 px-4 py-2 font-bold text-xl  rounded-lg `,
  buttonInactive: `bg-gray-300 text-gray-200 m-1 px-4 py-2 font-bold text-xl  rounded-lg `,
}

const Sidebar = () => {
    const { status, setStatus, timer, score, setDifficulty, difficulty } = useContext(GameContext);

    const getButtonClassName = (buttonDifficulty) => {
      const isActive = difficulty === buttonDifficulty;
      const isPlaying = status === 'playing' && difficulty !== buttonDifficulty;
      let className = `${style.buttonDifficulty}`

      if(isActive) {
        className = `${style.buttonActive}`;
      }
      if(isPlaying) {
        className = `${style.buttonInactive}`
      }
      return className

    }


  return (
    <div className='flex flex-col justify-around '>
        
        <div className='h-[20%] w-[400px] flex  justify-around items-center bg-slate-500 g-4 p-2 m-2'>
          <div>
            <h1>TIME</h1>
            <h2>{Math.round((timer / 10) * 100) / 100} segundos</h2>
          </div>
          <div>
            <h1>TURN</h1>
            <h2>{10 - score }</h2>
          </div>
        </div>

        <div className='h-[80%] flex flex-col justify-evenly items-center bg-slate-500 g-2 p-2 m-2'>
          <div>
            <h1>Dificultad</h1>
           
          <button
            onClick={() => setDifficulty('initial')}
            className={getButtonClassName('initial')}
            disabled={status === 'playing'}
          >
            Facil
          </button>
          <button
            onClick={() => setDifficulty('middle')}
            className={getButtonClassName('middle')}
            disabled={status === 'playing'}
          >
            Intermedio
          </button>
          <button
            onClick={() => setDifficulty('hard')}
            className={getButtonClassName('hard')}
            disabled={status === 'playing'}
          >
            Dificil
          </button>
          </div>
          <div>
            {
              difficulty === 'hard' ? <p className='text-gray-800'> El boton a clickear se vera al inicio siempre en cyan</p> : " "
            }

          </div>
          <div>
            {status === "initial" && <button className='bg-teal-300 text-teal-900 font-bold px-4 py-2 rounded-lg ' onClick={() => setStatus("playing")}>Jugar</button>}
            {status === "playing" && <button className='bg-teal-300 text-teal-900 font-bold px-4 py-2 rounded-lg ' onClick={() => setStatus("finished")}>Reiniciar</button>}
            {status === "finished" && <button className='bg-teal-300 text-teal-900 font-bold px-4 py-2 rounded-lg ' onClick={() => setStatus("initial")}>Terminar</button>}
          </div>
        </div>

    </div>
  )
}
export default Sidebar
