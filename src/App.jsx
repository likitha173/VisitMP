import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Regions from "./components/Regions/Regions";
import Tip from "./components/Tip/Tip";
import Places from "./components/Places/Places";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Regions/>
      <Places/>
      <Tip/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
