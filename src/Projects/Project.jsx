import "./Project.css";
import "./ProjectMedia.css";
import { useContext } from 'react';
import { GlobalData } from "../App";


export function Project(){
    const {activeclr} = useContext(GlobalData);
    const projects = [
        {
            img:"./weatherimg.png",
            title:"Weather Web App",
            description:`With the help of this weather web app, you can know the weather of any country.You can change the theme with the help of theme changer on this weather app project.`,
            link:"https://nightdevilpt.github.io/react-weatherapp/"
        },
        {
            img:"./calculatorimg.png",
            title:"Calculator Web App",
            description:`You can only do simple calculations on this web app.You can also change the theme of this calculator and change the colors of the buttons.`,
            link:"https://nightdevilpt.github.io/react-calculator/"
        }
    ]
    return(
        <div className="project-frame" id="project">
            <div className="frame-title project-title">
                <h2>My <span style={{color:activeclr}}>Projects</span></h2>
            </div>
            <div className="projects-display-frame">
                {
                    projects.map((items,index)=>{
                        return(
                            <a href={items.link} key={`projects-${index}`}>
                                <div className="project-div" >
                                    <div className="project-img-frame">
                                        <img className="project-img" src={items.img}></img>
                                    </div>
                                    <div className="project-text">
                                        <h3>{items.title}</h3>
                                        <p>{items.description}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
                
            </div>
        </div>
    )
}