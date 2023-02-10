import "./Home.css";
import "./HomeMedia.css";
import { useContext,useState } from "react";
import { GlobalData } from "../App";
import { MdDownloadForOffline } from "react-icons/md";


const DownloadCV=()=>{
    let url = "./Resume.pdf";
    let a = document.createElement("a");
    a.href = url;
    a.download = "CV.pdf";
    a.click();
}

export function Home(){
    const {activeclr} = useContext(GlobalData);

    return(
        <div className="home-frame" id="home">
            {/* Home Intro Image Frame */}
            <div className="home-img-frame">
                <div className="home-img-corner1"></div>
                <div className="home-img-corner2"></div>
                <div className="home-img-bg"></div>
                <div className="home-img"></div>
            </div>
            <div className="home-intro-frame">
                <div className="home-name-intro-frame">
                    <p className="name-intro">Hi, my name is<br /><span className="name-highlight">Pawan Kumar</span></p>
                </div>
                <div className="home-animated-intro-frame">
                    <p className="home-animated-intro">I am a </p>
                    <div className="wrapper">
                        <span>Web Developer</span>
                        <span>Youtuber</span>
                        <span>Front-End Developer</span>
                        <span>Back-End Developer</span>
                        <span>MERN Stack Developer</span>
                        <span>Web Developer</span>
                    </div>
                </div>
                <div className="home-short-intro-frame">
                    <p className="home-short-intro">Hello, My Name is <span style={{color:activeclr}}>pawan kumar</span>, 
                    i am a <span style={{color:activeclr}}>full stack developer</span> with the knowledge of 
                    <span style={{color:activeclr}}> MERN ( MOngoDB, ExpressJS, ReactJS, NodeJS)</span>
                    and Pyhton Programming...</p>
                    <div className="cv-btn-frame">
                        <div className="cv-button-btn" onClick={e=>DownloadCV()}>
                            <p>Download CV</p>
                            <MdDownloadForOffline className="download-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
