
import './ProjectDisplay.css';

var widthText = "40%"
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    widthText = "250"
}

const ProjectDisplay = ({projectName, image, explanationText, link, linkText}) => {
    return (
        <div class='ProjectDisplay-container'>
            <h1>
                {projectName}
            </h1>
            <div class="flex-container-column"> 
                <div>
                    <img src={image} width={widthText} alt="Cool"/>
                </div>
                <div class="flex-container-column" width="40%">
                    <p class="text-container">{explanationText}</p>

                    <a className="App-link" href={link} target="_blank" rel="noopener noreferrer">
                        {linkText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;