import React, { useContext } from 'react'
import { GameContext } from "../context/GameProvider";


const GameScreenHard = () => {
    const { status, position, handleClickLevels, figureColorHard, randomColors, randomPositions } = useContext(GameContext);
    
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', padding:'40px', height: '80vh', width: '90vh',backgroundColor: 'gray'}}>
        
            <section style={{position: "relative",height: '60vh', width: '80vh',backgroundColor: 'gray',}}>
                
                {
                status === "playing" && (
                    <>
                        <figure 
                        onClick={handleClickLevels} 
                        style={{
                            width: `50px`, 
                            height: `50px`,
                            // transform: `scale(${1 - score * 0.05})`,
                            position: "absolute", 
                            top: `${position[0]}%`,
                            left:`${position[1]}%` ,
                            backgroundColor: figureColorHard, 
                            transition: "background-color 1s",
                        }} 
                        />


                        {/* {randomPositions.map((position, index) => (
                            <figure
                            key={index}
                            style={{
                                width: `50px`,
                                height: `50px`,
                                position: "absolute",
                                top: position.top,
                                left: position.left,
                                backgroundColor:randomColors[index],
                            }}
                            />
                        ))}
                         */}
                    </>
                )
                }

            </section>

        </div>
  )
}

export default GameScreenHard
