// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Page from './components/Page';
import Section2 from './components/Section2';
import Section3 from './components/Section3'
import Cards from './components/Cards';
import Footer from './components/Footer';



function App() {
  let firstHeading = "Our main features 🦸🏼";
  let firstSubHeading = "Discover your new superpowers  ";
  let secHeading = "And so much more... 💼";
  let secSubHeading = "Our features to make your life easier";
  return (
    <div className="App">
     <Nav />
     <Page />
     <Section2 heading = {firstHeading} subHeading= {firstSubHeading} />
     <Section3 />
     <Section2 heading = {secHeading} subHeading = {secSubHeading} />
     <Cards />
     <Footer />
    </div>
  );
}

export default App;
