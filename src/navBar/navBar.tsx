import React from 'react';
import AboutMe from '../pages/aboutMe';
import EduExp from '../pages/eduExp';
import Projects from '../pages/projects';
import Home from '../pages/home';
import Contact from '../pages/contacts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import './navBar.css';


class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem('state')) ||  {
      isActive: "active",
      checkAboutMe: "false",
      checkEduExp: "false",
      checkProjects: "false",
      checkContacts: "false",
      isDarkMode: true,
    }
  }

  // componentDidMount() {
  //   console.log(this.state.isDarkMode);
  //   console.log(document.body.classList);

  //   // if(this.state.isDarkMode ) {
  //   //   console.log(document.body.classList);
  //   //   document.body.classList.value = "";
  //   // }
  //   // else {
  //   //   console.log(document.body.classList);
  //   //   document.body.classList.value = "light"
  //   // }
  // }

  setState(state) {
    console.log(this.state.isDarkMode);
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

  // switchMode = () => {
  //   console.log("switch mode");
  //   let element = document.body;
  //   console.log(element.classList);
  //   element.classList.toggle("light");
  //   console.log(this.state.isDarkMode)
  //   this.setState({
  //     isDarkMode: !this.state.isDarkmode,
  //   });
  //   console.log(this.state.isDarkMode);
  //   // if (element.classList.value === "light") {
  //   //   console.log("1")
  //   //   this.setState({
  //   //     isDarkMode: false,
  //   //   });
  //   // }
  //   // else {
  //   //   console.log("2")
  //   //   this.setState({
  //   //     isDarkMode: true,
  //   //   });
  //   // }
  // };

  setActiveButton(number) {
    console.log(number);
    if(number === 0) {
      console.log("home is pressed");
      console.log(this.state.isActive);
      if (this.state.isActive !== "active" ) {
        this.setState({
          isActive: "active",
          checkAboutMe: "false",
          checkEduExp: "false",
          checkProjects: "false",
        });
      }
      console.log(this.state.isActive);
    }
    if (number === 1) {
      console.log("active is pressed");
      if(this.state.checkAboutMe !== "active") {
        this.setState({
          isActive: "false",
          checkAboutMe: "active",
          checkEduExp: "false",
          checkContacts: 'false',
          checkProjects: "false",
        });
      }
    }
    if (number === 2) {
      if (this.state.checkEduExp !== "active") {
        this.setState({
          isActive: "false", 
          checkAboutMe: "false", 
          checkEduExp: "active", 
          checkContacts: 'false',
          checkProjects: "false"
        });
      }
    }
    if (number === 3) {
      if (this.state.checkContacts !== "active") {
        this.setState({
          isActive: "false", 
          checkAboutMe: "false", 
          checkEduExp: "false",  
          checkProjects: "false",
          checkContacts: "active"
        });
      }
    }
    if (number === 4) {
      if (this.state.checkProjects !== "active") {
        this.setState({
          isActive: "false", 
          checkAboutMe: "false", 
          checkEduExp: "false", 
          checkProjects: "active",
          checkContacts: "false"
        });
      }
    }   
  }  

  render() {    
    return (
      <>     
          <div className="topnav">
            <a href="https://606b53ef-7efc-48ac-8dc8-7f90f972ab3e-00-32azr7ex5tsw0.picard.replit.dev/" style={{float:"left"}} onClick={() => this.setActiveButton(0)}>Daniel Kim</a>
            {/* <button onClick={() => this.switchMode()}>Switch mode</button> */}
            <a href="/contacts" onClick={() => this.setActiveButton(3)} className={this.state.checkContacts}>Contact Me</a>
            <a href="/projects" onClick={() => this.setActiveButton(4)} className={this.state.checkProjects}>Projects</a>
            <a href="/eduExp" onClick={() => this.setActiveButton(2)} className={this.state.checkEduExp}>Education/Experiences</a>
            {/* <a href="/aboutMe" onClick={() => this.setActiveButton(1)} className={this.state.checkAboutMe}>About Me </a> */}
            {/* <a href="https://personalsite.danielkimmm.repl.co" onClick={() => this.setActiveButton(0)} className={this.state.isActive}>Home</a> */}
          </div>
      </>
    )
  }
}

export default NavBar;