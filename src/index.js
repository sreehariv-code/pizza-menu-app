import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Strict Mode - Runs the app twicw during development to check for bugs
//Before React 18
//React.render(<App/>)
