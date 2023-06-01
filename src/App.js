import React, { createContext, useContext, useEffect, useState } from "react";
import { GameScreen } from './components/GameScreen.js';

function App() {
  
  const TARGET_SIZE = "48px";
  const DIFICULTY = 10;

  const [status, setStatus] = useState("initial");
  const [timer, setTimer] = useState(0);
  const [position, setPosition] = useState([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
  const [score, setScore] = useState(0);

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

  useEffect(() => {
    let interval;
    
    if (status === "playing") {
      interval = setInterval(() => { setTimer((timer) => timer + 1)}, 100);
    }

    return () => clearInterval(interval);
  }, [status]);

  return (
    <main>
      <header>
        <h1>{Math.round((timer / 10) * 100) / 100} segundos</h1>
      </header>
      <section style={{ position: "relative", marginRight: TARGET_SIZE, marginBottom: TARGET_SIZE }}>
        {status === "playing" && (
          <figure
            onClick={handleClick}
            style={{
              transform: `scale(${1 - score * 0.05})`,
              position: "absolute",
              top: `${position[0]}%`,
              left: `${position[1]}%`
            }}
          />
        )}
      </section>
      <footer>
        {status === "initial" && <button onClick={() => setStatus("playing")}>Jugar</button>}
        {status === "playing" && <button onClick={() => setStatus("finished")}>Reiniciar</button>}
        {status === "finished" && <button onClick={() => setStatus("initial")}>Terminar</button>}
      </footer>
    </main>
  );
}

export default App;


// import { createContext, useContext, useEffect, useState } from "react";
// import {GameScreen} from './components/GameScreen.js'

// const TARGET_SIZE = 48;
// const DIFICULTY = 10;




// function App() {


//   //estados

//   const [status, setStatus] = useState<"initial" | "playing" | "finished">("initial")
//   const [timer, setTimer] = useState<number>(0)
//   const [position, setPosition] = useState<[number, number]>([
//     Math.floor(Math.random() * 100),
//     Math.floor(Math.random() * 100),
//   ]);
//   const [score, setScore] = useState<number>(0)

//   //funciones

//   function handleClick() {
//     setScore((prevScore) => prevScore + 1);
    
//     if(score === 9){
//       setStatus("finished");
//       setScore(0);
//     }
    
//     setPosition([
//       Math.floor(Math.random() * 100),
//       Math.floor(Math.random() * 100),
//     ]);
//   }

  

//   useEffect(() => {
//     let interval: number;
    
//     if(status === "playing"){
//       interval = setInterval(() => { setTimer((timer) => timer + 1)},100)
//     }

//     return () => clearInterval(interval)
//   }, [status])

//   return (
//     <main>
//       <header>
//         <h1>{Math.round((timer / 10) * 100) / 100 } segundos</h1>
//       </header>
//       <section style={{position: "relative", marginRight:TARGET_SIZE, marginBottom:TARGET_SIZE}}>
//         {
//           status === "playing" && (
//             <figure 
//               onClick={handleClick} 
//               style={{
//                 // width: TARGET_SIZE - score *4, 
//                 // height: TARGET_SIZE - score *4,
//                 transform: `scale(${1 - score * 0.05})`,
//                 position: "absolute", 
//                 top: `${position[0]}%`, 
//                 left:`${position[1]}%` }} 
//               />
//           )
//         }      
//       </section>
//       <footer>
//         { status === "initial" && <button onClick={() => setStatus("playing")} >Jugar</button>}
//         { status === "playing" && <button onClick={() => setStatus("finished")} >Reiniciar</button>}
//         { status === "finished" && <button onClick={() => setStatus("initial") } >Terminar</button>}
//       </footer>
//     </main>
//   );
// }

// export default App;
