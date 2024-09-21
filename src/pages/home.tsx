import React from 'react';
import './home.css';
import { Analytics } from "@vercel/analytics/react";

class Home extends React.Component<any, any> {
  constructor (props: any) {
    super(props);  
  }

  render() {
    return (
      <>
          <div className="homeBody">
              <h1>Hi, I'm Daniel Kim</h1>
              <h4>An aspiring software developer studying at the University of Waterloo.</h4>
              Ever since I started coding in 2020, I have always been fascinated about creating <br/>
              new and innovated new projects to improve my skills as a programmer. I have been working on creating                 <br/> games, computer applications, and professional websites during my time as an engineer. <br/> 
              <br/>
            <a href="/projects">
              View my projects →
            </a>
          </div>
        <Analytics />
      </>
    )
  }
}

export default Home;