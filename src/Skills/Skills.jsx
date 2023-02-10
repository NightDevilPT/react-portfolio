import "./Skills.css";
import "./SkillsMedia.css";
import { useContext } from 'react';
import { GlobalData } from "../App";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiPhp, SiHtml5, SiCss3, SiReact, SiMysql, SiPython } from "react-icons/si";


export function Skills(){
    const {activeclr,theme} = useContext(GlobalData);
    const skill_data = [
        {
            icon:<SiHtml5 className="skills-icon"/>,
            title:"HTML",
            progress:80
        },
        {
            icon:<SiCss3 className="skills-icon"/>,
            title:"CSS",
            progress:70
        },
        {
            icon:<SiJavascript className="skills-icon"/>,
            title:"JS",
            progress:80
        },
        {
            icon:<SiReact className="skills-icon"/>,
            title:"ReactJS",
            progress:70
        },
        {
            icon:<FaNodeJs className="skills-icon"/>,
            title:"NodeJS",
            progress:60
        },
        {
            icon:<SiMongodb className="skills-icon"/>,
            title:"MongoDB",
            progress:60
        },
        {
            icon:<SiPython className="skills-icon"/>,
            title:"Python",
            progress:60
        },
        {
            icon:<SiPhp className="skills-icon"/>,
            title:"PHP",
            progress:50
        },
        {
            icon:<SiMysql className="skills-icon"/>,
            title:"MySQL",
            progress:50
        }
    ]

    return(
        <div className="skills-frame frame" id="skill">
            <div className="frame-title skills-title">
                <h2>My <span style={{color:activeclr}}>Skills</span></h2>
            </div>
            <div className="skills-progress-frame">
                {
                    skill_data.map((items,index)=>{
                        return( 
                            <div className="progress-frame" key={index}>
                                <div className="progress-title-frame">
                                    {items.icon}
                                    <p className="progress-title">{items.title}</p>
                                </div>
                                <div className="progress">
                                    <div className="empty-progress"></div>
                                    <div className="fill-progress" style={{width:`${items.progress}%`}}></div>
                                    <div className="indicator" style={{
                                        left:`calc(${items.progress}% - 20px)`
                                    }}>{items.progress}%</div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}
