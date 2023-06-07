import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export function GameProvider ({children})  {

   
  const [status, setStatus] = useState("initial");
  const [timer, setTimer] = useState(0);
  const [position, setPosition] = useState([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("initial")
  const [clicked, setClicked] = useState(false);

  const [figureColor, setFigureColor] = useState('yellow');
  const [hardFigureColor, setHardFigureColor] = useState('cyan');
 

  const [randomPositions, setRandomPositions] = useState(() =>
    Array.from(Array(10)).map(() => ({
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`, }))
  );

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };  
  const [randomColors, setRandomColors] = useState([]);
 

  const gameContextValue = {
    status, 
    setStatus,
    difficulty,
    setDifficulty,
    timer,
    position,
    randomPositions,
    clicked,
    score,
    handleClick,
    handleClickMiddle,
    figureColor,
    setFigureColor,
    hardFigureColor,
    setHardFigureColor,
    randomColors
    
    // getRandomColor
  }


  function handleClick() {
    setScore((prevScore) => prevScore + 1); 
    
    if (score === 9) {
      setStatus("finished");
      setScore(0);
    }
    
    setPosition([
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ]);
  }
 
  function handleClickMiddle() {
    setScore((prevScore) => prevScore + 1);   
    
    if (score === 9) {
      setStatus("finished");
      setScore(0);
    }
    setClicked(true)
    
    setRandomPositions(() =>
    Array.from(Array(10)).map(() => ({
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
    }))
    );
    
    setPosition([
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ]);

    setFigureColor('yellow');
    setTimeout(() => {
      setFigureColor('white')
    }, 300);
    

    setHardFigureColor('cyan');
    setTimeout(() => {
      setHardFigureColor('yellow')//lograr que este color este asociado con randomColors
    }, 300);
    
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setFigureColor('white')
    }, 300);
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setHardFigureColor('yellow')
    }, 300);
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    setRandomColors(randomPositions.map(() => getRandomColor()));
  }, [randomPositions])

 
  useEffect(() => {
    let interval;
    
    if (status === "playing") {      
      interval = setInterval(() => { setTimer((timer) => timer + 1)}, 100);
      setFigureColor('yellow')
      setHardFigureColor('cyan')
    }else if(status === "initial") {
      setTimer(0)
      setScore(0)
    }

    return () => clearInterval(interval);
  }, [status]);

  return (
    <GameContext.Provider value={gameContextValue} >
      {children}
    </GameContext.Provider>
  );
}