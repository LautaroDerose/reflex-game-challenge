import React, { useContext, useState } from 'react'
import { GameContext } from '../App';

const style = {
  buttonDifficulty: `bg-gray-300 m-1 px-4 py-2 font-bold text-xl cursor-pointer rounded-lg `,
}

const Sidebar = () => {
    const { status, setStatus, timer, score, setDifficulty, difficulty } = useContext(GameContext);
  return (
    <div className='flex flex-col justify-around '>
        
        <div className='h-[20%] w-[400px] flex flex-col justify-center items-center bg-slate-500 g-4 p-2 m-2'>
          <div>
            <h1>TIME</h1>
            <h2>{Math.round((timer / 10) * 100) / 100} segundos</h2>
          </div>
          <h2>{10 - score }</h2>
        </div>

        <div className='h-[80%] flex flex-col justify-evenly items-center bg-slate-500 g-2 p-2 m-2'>
          <div>
            <h1>Dificultad</h1>
            {/* <button onClick={()=>setDifficulty("initial")} className='bg-green-400 m-2'>Facil</button>
            <button onClick={()=>setDifficulty("middle")} className='bg-gray-300 m-2'>Intermedio</button>
            <button onClick={()=>setDifficulty("hard")} className='bg-gray-300 m-2'>Dificil</button> */}

          <button
            onClick={() => setDifficulty('initial')}
            className={` ${style.buttonDifficulty} ${difficulty === 'initial' ? 'bg-green-400' : ''} ${status === 'playing' && difficulty !== 'initial' ? 'bg-gray-200 text-slate-400' : '' }`}
            disabled={status === 'playing'}
          >
            Facil
          </button>
          <button
            onClick={() => setDifficulty('middle')}
            className={` ${style.buttonDifficulty} ${difficulty === 'middle' ? 'bg-green-400' : ''} ${status === 'playing' && difficulty !== 'middle' ? 'bg-gray-200 text-slate-400' : '' }`}
            disabled={status === 'playing'}
          >
            Intermedio
          </button>
          <button
            onClick={() => setDifficulty('hard')}
            className={` ${style.buttonDifficulty} ${difficulty === 'hard' ? 'bg-green-400' : ''} ${status === 'playing' && difficulty !== 'hard' ? 'bg-gray-200 text-slate-400' : '' }`}
            disabled={status === 'playing'}
          >
            Dificil
          </button>

          </div>
          <div>
            {status === "initial" && <button onClick={() => setStatus("playing")}>Jugar</button>}
            {status === "playing" && <button onClick={() => setStatus("finished")}>Reiniciar</button>}
            {status === "finished" && <button onClick={() => setStatus("initial")}>Terminar</button>}
          </div>
        </div>

    </div>
  )
}

// border-radius: 8px;
//   /* border: 1px solid transparent; */
//   padding: 0.6em 1.2em;
//   font-size: 1em;
//   font-weight: 500;
//   font-family: inherit;
//   background-color: #1a1a1a;
//   cursor: pointer;
export default Sidebar
