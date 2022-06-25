import React from "react";
import logo from "./LCO-logo.png";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" />
//         <p>Learn React here with new Topics</p>
//       </header>
//     </div>
//   );
// }
// export default App;

class App extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" />
      </div>
    );
  }
}
export default App;
