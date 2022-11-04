import Routing from "./routing/Routing";
import Navbar from "./components/navbar/Navbar";


import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
