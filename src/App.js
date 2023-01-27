import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contacts from "./components/Contacts/Contacts";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <SocialLinks></SocialLinks>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Blog></Blog>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
