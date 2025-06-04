// ProjectsPage.js
import './ProjectsPage.css';
import morphinvasionscreenshot from "../images/morphinvasionscreenshot.png";
import bloodyapril from "../images/bloodyaprilscreenshot.png";
import giganikki from "../images/giganikkiscreenshot.png";
import operationnightmare from "../images/operationnightmarescreenshot.png";
import summary from "../images/Summary.PNG";
import ProjectDisplay from '../Components/ProjectDisplay';
import background from '../images/stars.gif'
import reactandnodepic from "../images/react and node js.jpg"
import unrealpic from "../images/unreal.png"

var spaceBetweenComponents = '100px';

const ProjectsPage = () => {
  return (
    <div className="App" >
      <header className="App-header" style={{backgroundImage: `url(${background})`}}>
        <ProjectDisplay projectName="MPS GUI For SLAC" 
        image={summary} 
        explanationText="Machine Controls GUI For Stanford Linear Accelerator Center. I created from scratch a new tool used to oversee and edit the status of all machines along one of the accelerators at SLAC, with some backend work to read or record machine status. It was created during a 6 month period, and is used if needed 24/7 when the LCLS accelerator is active." 
        link="https://github.com/evrenke/SLAC-NC-MPS-GUI"
        linkText="Github repo for the MPS GUI"/>
        <div style={{ height: spaceBetweenComponents}}/>
        <ProjectDisplay projectName="Work For Controlled Burn Games" 
        image={unrealpic} 
        explanationText="I've been working for over a year at Controlled Burn Games, and have been focused on Unreal Engine as a programmer for the current project. The game is unannounced, but I hope to continue my work there and showcase the game to you upon completion. NOTE: Raindrop Games is the former name, and the company is in the process of changing its brand" 
        link="https://www.linkedin.com/company/raindropgames/"
        linkText="LinkedIn of Controlled Burn Games/Raindrop Games"/>
        <div style={{ height: spaceBetweenComponents}}/>
        <ProjectDisplay projectName="React and NodeJS Projects" 
        image={reactandnodepic} 
        explanationText="I have worked on multiple web development projects with React and NodeJS as the primary tools. I have a link to one such project, an online educational game where 4 players simultaneously see one game lobby. This was a university project, and it is no longer deployed but the source code is still available" 
        link="https://github.com/evrenke/CS161_Breadsticks"
        linkText="Source Code for React and NodeJS Based Project 'Breadsticks'"/>
        <div style={{ height: spaceBetweenComponents}}/>
        <ProjectDisplay projectName="Morph Invasion" 
        image={morphinvasionscreenshot} 
        explanationText="I've worked on my own time on various game projects, and uploaded some of them to itch.io. This is the first game on that list, and it's a top down shooter with 2 levels. It was my first independent Unity game, and I worked on it on and off as I learned how to make a functional and interesting AI, and levels and use other tools in Unity." 
        link="https://evrenke.itch.io/morph-invasion"
        linkText="Playable on itch.io on desktop"/>
        <div style={{ height: spaceBetweenComponents}}/>
        <ProjectDisplay projectName="Bloody April" 
        image={bloodyapril} 
        explanationText="This is my second public Unity game, and it is a recreation of a college project I had originally made from scratch with no engines. I found the game to be fun, and had problems after deleting a library the original game depended on. So, I recreated the game in Unity Engine, using a video of the gameplay of how enemies are generated, and copied the graphics folder over." 
        link="https://evrenke.itch.io/bloody-april"
        linkText="Playable on itch.io on desktop"/>
        <div style={{ height: spaceBetweenComponents}}/>
        <ProjectDisplay projectName="The Attack of Giga-Nikki" 
        image={giganikki} 
        explanationText="My third publicly available Unity game. This one was made in 5 weeks, and was intended to be a test of how quickly I can take an idea into a full game. I made all assets and animations myself, as the wonderful artistic imagery can show in game. Based on some inside jokes with friends, it is my first major attempt at a 3D game outside of my work at Controlled Burn Games" 
        link="https://evrenke.itch.io/the-attack-of-giga-nikki"
        linkText="Playable on itch.io on desktop"/>
        <div style={{ height: spaceBetweenComponents}}/>
        <ProjectDisplay projectName="Operation Nightmare" 
        image={operationnightmare} 
        explanationText="My fourth game on itch.io, this game was made in 3 weeks. It is my attempt to create a fairly simple top down strategy game, with the goal of clearing zombie hoardes of one of two maps I created myself." 
        link="https://evrenke.itch.io/operation-nightmare"
        linkText="Playable on itch.io on desktop"/>
      </header>
    </div>
  );
};

export default ProjectsPage;