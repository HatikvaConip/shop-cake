// components
import Bacheca from "./components/bacheca/Bacheca";
import Navbar from "./components/navbar/Navbar";

// mocks
import cards from "./components/services/mock/card.mock";

// styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bacheca cards={cards} />
    </div>
  );
}

export default App;
