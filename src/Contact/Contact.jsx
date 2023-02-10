import "./Contact.css";
import "./ContactMedia.css";
import { useContext } from 'react';
import { GlobalData } from "../App";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { IoPhonePortrait, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { ImGithub } from "react-icons/im";

export function Contact(){
    const {activeclr} = useContext(GlobalData);

    return(
        <div className="contact-frame" id="contact">
            <div className="frame-title contact-title">
                <h2><span style={{color:activeclr}}>Contact</span> Us</h2>
            </div>
            <div className="contact-info">
                <div className="contact-form-frame">
                    <input type={"text"} placeholder="UserName" className="input" id="name"/>
                    <input type={"text"} placeholder="Email-ID" className="input" id="name"/>
                    <textarea placeholder="Description" className="input textarea"/>
                    <button className="button-submit">Sumbit</button>
                </div>
                <div className="contact-info-frame">
                    <div className="info-frame">
                        <MdEmail className="contact-info-icon" />
                        <p className="contact-info-p">pawankumartadagsingh@gmail.com</p>
                    </div>
                    <div className="info-frame">
                        <IoPhonePortrait className="contact-info-icon" />
                        <p className="contact-info-p">8586027728, 9540079162</p>
                    </div>
                    <div className="info-frame">
                        <FaAddressCard className="contact-info-icon" />
                        <p className="contact-info-p">Delhi - 110094</p>
                    </div>
                    <div className="social-frame">
                        <a href="https://www.facebook.com/timi.holland.3"><IoLogoFacebook className="contact-info-icon"/></a>
                        <a href="https://www.instagram.com/nightdevil_pt?igshid=ZDdkNTZiNTM="><IoLogoInstagram className="contact-info-icon"/></a>
                        <a href="https://www.linkedin.com/in/pawan-kumar-685a21243"><IoLogoLinkedin className="contact-info-icon"/></a>
                        <a href="https://github.com/NightDevilPT"><ImGithub className="contact-info-icon"/></a>
                        <a href="https://www.youtube.com/@nightdevilpt"><IoLogoYoutube className="contact-info-icon"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
