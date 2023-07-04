import React from "react";
import MyComponent from "./Components/Navbar";
import { DarkProvider } from "./Components/DarkContext";

function App() {
  return (
    <div>
      <DarkProvider>
        <MyComponent />
      </DarkProvider>
    </div>
  );
}

export default App;
