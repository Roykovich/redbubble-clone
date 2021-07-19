import Navbar from "./components/Navbar";
import CategoriesSelector from "./components/CategoriesSelector";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoriesSelector />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
