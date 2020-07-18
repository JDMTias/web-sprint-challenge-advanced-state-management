import React from "react";
import { SmurfProvider } from "./context/smurfContext";
import "./App.css";
import SmurfList from "./components/SmurfList";
import AddSmurf from "./components/SmurfForm";

function App() {
  return (
    <SmurfProvider>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Context</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <AddSmurf />
        <SmurfList />
      </div>
    </SmurfProvider>
  );
}

export default App;
