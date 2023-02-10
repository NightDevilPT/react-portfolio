import "./About.css";
import "./AboutMedia.css";
import { useContext } from 'react';
import { GlobalData } from "../App";


export function About(){
    const {activeclr} = useContext(GlobalData);

    return(
        <div className="about-frame" id="about">
            <div className="frame-title about-title">
                <h2>About <span style={{color:activeclr}}>Me</span></h2>
            </div>
            <div className="about-intro-frame">
                <div className="about-intro">
                    <p className="about-intro-p">
                        I, Pawan Kumar, am a <span style={{color:activeclr}}>MERN</span> Stack Developer
                        living in Delhi, India. I have a degree <span style={{color:activeclr}}>B.Voc(Software Developer)</span> from <span style={{color:activeclr}}>IP University</span>.
                    </p>
                </div>
                <div className="about-intro">
                    <p className="about-intro-p">
                        I'm obsessed with making things and even more obsessed with making things better.
                    </p>
                </div>
                <div className="about-intro">
                    <p className="about-intro-p">
                        When i am not making projects, I'm probably hanging out with friends,
                        being entertained by playing games and making gameplay video for editing.
                    </p>
                </div>
            </div>
        </div>
    )
}