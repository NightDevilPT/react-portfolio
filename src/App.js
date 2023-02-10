import './App.css';
import './AppMedia.css';
import { createContext, useEffect, useState } from 'react';
import { Home } from './Home/Home';
import { Skills } from './Skills/Skills';
import { Contact } from './Contact/Contact';
import { About } from './About/About';
import { IoSettings } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";
import { Project } from './Projects/Project';

export const GlobalData = createContext();

function App() {
  // Assigning Button
  const [theme,setTheme]=useState("dark");
  const [bg,setBG] = useState();
  const [fg,setFG] = useState();
  const [activeclr,setActiveclr] = useState("#e60f17");
  const [navbarCheck,setNavbarCheck] = useState(false);
  const [activebtn,setActivebtn] = useState(1)
  const [shownav,setShowNav] = useState("hide")
  const [showhighlight,setShowHighlight] = useState("hide")

  useEffect(()=>{
    setFG(theme==="dark"?"#fdfbf7":"#3d3230")
    setBG(theme==="dark"?"#000100":"#e8e0c9")
  },[theme]);


  return (
    <GlobalData.Provider value={{bg,setBG,fg,setFG,theme,setTheme,activeclr,setActiveclr,navbarCheck,setNavbarCheck}}>
      <div className="App" style={{"--bg":bg,"--fg":fg,"--active":activeclr}}>
        <div className='header-frame'>
          <h1 className='header-title'>Pawan Kumar</h1>

          {/* Navbar Icon Animated Frame */}
          <div className={`navbar-icon-frame`} onClick={e=>{setNavbarCheck(!navbarCheck);setShowNav(shownav==="show"?"hide":"show")}}>
            <div className={`line line1 ${navbarCheck?"active-line1":""}`}></div>
            <div className={`line line2 ${navbarCheck?"active-line2":""}`}></div>
            <div className={`line line3 ${navbarCheck?"active-line3":""}`}></div>
          </div>

        </div>
        {/* NavBar Buttons */}
        <div className={`navbar-frame ${shownav}-navbar-frame`}>
            <a href="#home"><button className={`navbar-btn ${activebtn===1?"active-navbar-btn":"unactive-navbar-btn"}`} onClick={e=>{setActivebtn(1);setShowNav("hide");setNavbarCheck(!navbarCheck)}}>Home</button></a>
            <a href="#about"><button className={`navbar-btn ${activebtn===2?"active-navbar-btn":"unactive-navbar-btn"}`} onClick={e=>{setActivebtn(2);setShowNav("hide");setNavbarCheck(!navbarCheck)}}>About</button></a>
            <a href="#skill"><button className={`navbar-btn ${activebtn===3?"active-navbar-btn":"unactive-navbar-btn"}`} onClick={e=>{setActivebtn(3);setShowNav("hide");setNavbarCheck(!navbarCheck)}}>Skills</button></a>
            <a href="#project"><button className={`navbar-btn ${activebtn===4?"active-navbar-btn":"unactive-navbar-btn"}`} onClick={e=>{setActivebtn(4);setShowNav("hide");setNavbarCheck(!navbarCheck)}}>Project</button></a>
            <a href="#contact"><button className={`navbar-btn ${activebtn===5?"active-navbar-btn":"unactive-navbar-btn"}`} onClick={e=>{setActivebtn(5);setShowNav("hide");setNavbarCheck(!navbarCheck)}}>Contact</button></a>
        </div>

        {/* Highlight Color Frame */}
        <div className={`highlight-frame ${showhighlight}-highlight-frame`}>
          <div 
            className={`highlight-color ${activeclr==="#e60f17"?"active-highlight-color":""}`} 
            style={{backgroundColor:"#e60f17"}}
            onClick={e=>{setActiveclr("#e60f17");setShowHighlight("hide")}}>
          </div>
          <div 
            className={`highlight-color ${activeclr==="#009171"?"active-highlight-color":""}`} 
            style={{backgroundColor:"#009171"}}
            onClick={e=>{setActiveclr("#009171");setShowHighlight("hide")}}>
          </div>
          <div 
            className={`highlight-color ${activeclr==="#d76a2d"?"active-highlight-color":""}`} 
            style={{backgroundColor:"#d76a2d"}}
            onClick={e=>{setActiveclr("#d76a2d");setShowHighlight("hide")}}>
          </div>
          <div 
            className={`highlight-color ${activeclr==="#d51657"?"active-highlight-color":""}`} 
            style={{backgroundColor:"#d51657"}}
            onClick={e=>{setActiveclr("#d51657");setShowHighlight("hide")}}>
          </div>
          <div 
            className={`highlight-color ${activeclr==="#ec541b"?"active-highlight-color":""}`} 
            style={{backgroundColor:"#ec541b"}}
            onClick={e=>{setActiveclr("#ec541b");setShowHighlight("hide")}}>
          </div>
          <IoSettings className={`highlight-icon ${showhighlight}-highlight-icon`} onClick={e=>setShowHighlight(showhighlight==="hide"?"show":"hide")}/>
        </div>
        {/* Theme Changer Frame */}
        <div className='theme-changer-frame'>
          {
            theme==="dark"?
            <FaMoon className={`theme-icon ${theme==="dark"?"show-theme-icon":"hide-theme-icon"}`} onClick={e=>setTheme("light")}/>:
            <FaSun className={`theme-icon ${theme==="light"?"show-theme-icon":"hide-theme-icon"}`} onClick={e=>setTheme("dark")}/>
          }
        </div>
        {/* Home Frame */}
        <Home />
        {/* About Frame */}
        <About />
        {/* Skills Frame */}
        <Skills />
        {/* Projects Frame */}
        <Project />
        {/* Contact Frame */}
        <Contact />
      </div>
    </GlobalData.Provider>
  );
}

export default App;
