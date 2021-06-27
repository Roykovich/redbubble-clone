import "./styles/App.css";

import Navbar from "./components/Navbar";
import CategoriesSelector from "./components/CategoriesSelector";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoriesSelector />
    </div>
  );
}

export default App;
