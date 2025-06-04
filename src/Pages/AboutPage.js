// AboutPage.js
import './AboutPage.css';
import background from '../images/stars.gif'

const AboutPage = () => {
  return (
    <div className="App" >
      <header className="App-header" style={{backgroundImage: `url(${background})`}}>
        <h1>About me</h1>
        <p> I am a programmer, web developer, game developer, and an innovative dude </p>
        <p> I have worked previously in the Stanford Linear Accelerator Center, and currently work at Controlled Burn Games </p>
        <p> I also graduated from San Jose State University with a computer science degree </p>
        <p> I hope to showcase my skills and history on this website </p>
        <p> You can contact me at evrenkeskin300@gmail.com</p>
      </header>
    </div>
  );
};

export default AboutPage;