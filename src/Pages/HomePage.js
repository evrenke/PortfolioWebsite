// HomePage.js
import './HomePage.css';
import image from "../images/profilepic.jpg";
import background from '../images/stars.gif'

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header" style={{
        backgroundImage: `url(${background})`}}>
        <div style={{border: "0px solid rgb(133, 55, 102)"}}>
          <img src={image} height="300" alt="Profile pic"/>
        </div>
        <h1>
          Hi, I'm Evren Keskin
        </h1>
        <p>
          Welcome to my website! I have a list of all my projects, and information about myself. 
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/evren-keskin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn
          
        </a>
        <a
          className="App-link"
          href="https://github.com/evrenke"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
          
        </a>
        <a
          className="App-link"
          href="https://evrenke.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My itch.io
          
        </a>
      </header>
    </div>
  );
};

export default HomePage;
        