import React from "react";
import './contacts.css';
import linkedinLogo from "../images/linkedinlogo.png";
import github from "../images/github.png";

class Contact extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="contactBody">
          Feel free to contact me! <br/>
          I am available at all times, and I am always open to new opportunities.
          <br/>
          <br/>
          Phone: 010-4459-9994 <br/>
          {/*Email: d382kim@uwaterloo.ca*/} <br/>
          Email: kimdani@aquinas.org <br />
          <br/>
          <div>
            <a href="https://www.linkedin.com/in/minjin-kim-389b01224/" target="_blank">
              <img className="linkedinLogo" src={linkedinLogo} alt="linkedinlogo"/> 
            </a>
            <a href="https://github.com/minjindanielkim" target="_blank">
              <img className="githubLogo" src={github} alt="github"/>
            </a>
          </div>

        </div>
      </>
    )
  }
}

export default Contact;