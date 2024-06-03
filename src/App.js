import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Service from "./Components/Service";
import WhyUs from "./Components/WhyUs";
import Work from "./Components/Work"


function App() {
  return (
    <div className=" bg-customPurple text">
      <div className="px-[170px] py-[56px]">
        <Header></Header>
        <Work></Work>
        <About></About>
        <Service></Service>
        <WhyUs></WhyUs>
        <Contact></Contact>
      </div> 
      <div className="w-full px-[0px] bg-customP"><Footer></Footer></div>   
    </div>
    
  );
}

export default App;
