import React, { useContext } from 'react'
import { GameContext } from "../context/GameProvider";


const GameScreenMiddle = () => {
    const { status, position, handleClickMiddle, randomPositions, figureColor, } = useContext(GameContext);

    

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', padding:'40px', height: '80vh', width: '90vh',backgroundColor: 'gray'}}>
        
            <section style={{position: "relative",height: '60vh', width: '80vh',backgroundColor: 'gray',}}>
                
                { status === "playing" && (
                    <>
                        <figure 
                        onClick={handleClickMiddle} 
                        style={{
                            width: `25px`, 
                            height: `25px`,
                            // transform: `scale(${1 - score * 0.05})`,
                            position: "absolute", 
                            top: `${position[0]}%`,
                            left:`${position[1]}%` ,
                            backgroundColor: figureColor, 
                            transition: "background-color 1s",
                        }} 
                        />

                        {randomPositions.map((position, index) => (
                            <figure
                            key={index}
                            style={{
                                width: `25px`,
                                height: `25px`,
                                position: "absolute",
                                top: position.top,
                                left: position.left
                            }}
                            />
                        ))}
                        
                    </>
                )
                }

            </section>

        </div>
  )
}

export default GameScreenMiddle
