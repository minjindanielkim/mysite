import React from 'react';
import NavBar from './navBar/navBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import AboutMe from './pages/aboutMe';
import EduExp from './pages/eduExp';
import Projects from './pages/projects';
import Home from './pages/home';
import Contact from './pages/contacts';
import './App.css'
// import { Chart } from "react-google-charts";

let navbar: HTMLElement | null = null;
let sticky = 0;

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
       changetoLight: false,
    }
  }

  componentDidMount() {
    navbar = document.getElementById("topnav") as HTMLElement;
    sticky = navbar.offsetTop;
    window.addEventListener('scroll', this.handleSticky);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleSticky);
  }

  handleSticky = () => {
    if (window.pageYOffset > sticky) {
      navbar?.classList.add("sticky");
    }
    else {
      navbar?.classList.remove("sticky");
    }
  }

  render() {
    return (
      <>
        <Router>
          <div id="topnav" className="" >
          <NavBar />
            {/* <button onClick={() => this.toggleMode()}>Click Me</button> */}
            </div>
          <Routes>
            <Route path='/' element = {<Home />}> </Route>
            <Route path='/aboutMe' element  ={<AboutMe/>}> </Route>
            <Route path='/eduExp' element = {<EduExp/>}> </Route>
            <Route path ='/projects' element ={<Projects/>}> </Route>
            <Route path='/contacts' element = {<Contact />}> </Route>
          </Routes>
        </Router>
      </>
    )
  }
}

export default App;