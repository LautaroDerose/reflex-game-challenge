import React, { createContext, useContext, useEffect, useState } from "react";
import {  GameScreen, GameScreenHard, GameScreenMiddle, Sidebar } from './components/index';
import {  GameContext, GameProvider } from "./context/GameProvider";
import Header from "./components/Header";
import Screen from "./components/Screen";

function App() {

  return (
    <GameProvider  >
      <main>
        <Header />
          <div style={{display: 'flex', justifyContent:'space-evenly'}}>
            <Screen />
            <div className="flex">
              <Sidebar />
            </div>
          </div>
        {/* <footer> </footer> */}
      </main>
    </GameProvider>
  );
}

export default App;

