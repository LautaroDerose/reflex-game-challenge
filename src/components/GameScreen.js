import React, { createContext, useContext, useState } from 'react'
import { GameContext } from '../App';

const GameScreen = () => {
    const { status, score, position, handleClickMiddle, TARGET_SIZE } = useContext(GameContext);
  return (
   
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', padding:'40px', height: '80vh', width: '90vh',backgroundColor: 'gray'}}>
        
        <section style={{position: "relative",height: '60vh', width: '80vh',backgroundColor: 'gray',}}>
            
            {
            status === "playing" && (
                <figure 
                onClick={handleClickMiddle} 
                style={{
                    // width: TARGET_SIZE - score *4, 
                    // height: TARGET_SIZE - score *4,
                    transform: `scale(${1 - score * 0.05})`,
                    position: "absolute", 
                    top: `${position[0]}%`, 
                    left:`${position[1]}%`, 
                }} 
                />
            )
            }

        </section>

      </div>
  )
}

export default GameScreen
