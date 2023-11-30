import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Bhopal from "./components/Bhopal/Bhopal";
import Indore from "./components/Indore/Indore";
import Sehore from "./components/Sehore/Sehore";
import Ujjain from "./components/Ujjain/Ujjain";
import Tip from "./components/Tip/Tip";
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
      <Bhopal/>
      <Indore/>
      <Sehore/>
      <Ujjain/>
      <Tip/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
