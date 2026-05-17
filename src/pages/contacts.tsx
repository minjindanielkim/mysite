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
          <div className="contactTitle">Get In Touch</div>
          <div className="contactSubtitle">
            I'm always open to new opportunities and conversations.
          </div>
          <div className="contactInfo">
            <div>Phone: 437-341-9309</div>
            <div>Email: <a href="mailto:d382kim@uwaterloo.ca">d382kim@uwaterloo.ca</a></div>
          </div>
          <div className="socialLinks">
            <a href="https://www.linkedin.com/in/minjin-kim-389b01224/" target="_blank">
              <img className="linkedinLogo" src={linkedinLogo} alt="LinkedIn" />
            </a>
            <a href="https://github.com/minjindanielkim" target="_blank">
              <img className="githubLogo" src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default Contact;
