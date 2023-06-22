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
  const [prevColorHard, setPrevColorHard] = useState('');
  const [figureColorHard, setFigureColorHard] = useState('cyan');
 

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
    handleClickLevels,
    figureColor,
    setFigureColor,
    figureColorHard,
    setFigureColorHard,
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
 
  //version con color previo
  function handleClickLevels() {
    const handleLevelEffect = () => {
      const randomIndex = Math.floor(Math.random() * randomColors.length);
      const newColor = randomColors[randomIndex];
      if (newColor !== prevColorHard){
        setFigureColorHard(newColor)
        setPrevColorHard(newColor)
      }
    };

    handleClick()
    setClicked(true)
    
    setRandomPositions(() =>
      Array.from(Array(10)).map(() => ({
        top: `${Math.floor(Math.random() * 100)}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
      }))
    );
    
    //Funcion para Dificultad Media
    setFigureColor('yellow');
    setTimeout(() => {
      setFigureColor('white')
    }, 300);
    
    handleLevelEffect();

  }


  // function handleClickLevels() {
  //   handleClick()
  //   setClicked(true)
    
  //   setRandomPositions(() =>
  //   Array.from(Array(10)).map(() => ({
  //     top: `${Math.floor(Math.random() * 100)}%`,
  //     left: `${Math.floor(Math.random() * 100)}%`,
  //   }))
  //   );
    
  //   //Funcion para Dificultad Media
  //   setFigureColor('yellow');
  //   setTimeout(() => {
  //     setFigureColor('white')
  //   }, 300);
    
  //   //Funcion para Dificultad Dificil
  //   // setfigureColorHard('cyan');
    
  //   // setTimeout(() => {
  //   //   const randomIndex = Math.floor(Math.random() * randomColors.length);
  //   //   setFigureColorHard(randomColors[randomIndex])
  //   // }, 300);
    
  //   useEffect(() => {
  //     const randomIndex = Math.floor(Math.random() * randomColors.length);
  //     const newColor = randomColors[randomIndex];
  //     if (newColor !== prevColorHard){
  //       setFigureColorHard(newColor)
  //       setPrevColorHard(newColor)
  //     }
  //   },[randomColors, prevColorHard])


  // }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFigureColor('white')
  //   }, 300);
  //   return () => clearTimeout(timer)
  // }, [figureColor])
  
  useEffect(() => {
    setRandomColors(randomPositions.map(() => getRandomColor()));
  }, [randomPositions])

 
  useEffect(() => {
    let interval;
      if (status === "playing") {      
        interval = setInterval(() => { setTimer((timer) => timer + 1)}, 100);
        setFigureColor('yellow')
        // setfigureColorHard('cyan')
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