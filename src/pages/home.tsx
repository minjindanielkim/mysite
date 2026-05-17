import React from 'react';
import './home.css';

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
          <p>
            Ever since I started coding in 2020, I have been fascinated by creating
            new and innovative projects to sharpen my skills as a programmer. I have built
            games, desktop applications, and professional websites — and I'm always looking
            for the next challenge.
          </p>
          <a href="/projects">View my projects →</a>
        </div>
      </>
    )
  }
}

export default Home;
