import React from 'react';
import './aboutMe.css';

class AboutMe extends React.Component<any, any> {
  constructor (props: any) {
    super(props);  
  }
  render() {
    return (
      <>
        <div className="center">
            <p>
              I am a developer from South Korea, who immigrated to Canada in 2012. I am currently attending the University of Waterloo, where my expected year of graudation is 2028. In the the midst of 2022, I had to put my education on hold for a while to complete my mandatory military service back in South Korea. In the military, I learned many useful soft skills such as communication, teamwork, adaptability, and integrity. Out of all of these skills, I believe adaptability was one that shone the most in my time of service. It was a new environment, full of new and different people, tasked with completing missions that were unfamilitar to me. However, despite the new environment that I was put in, I was able to quickly adapt and meet the expectations that my seniors and commanding officers had for me. 
              <br/>
              <br />
              Programming languages I am proficient in:
              <ul>
                <li>Java</li>
                <li>C++</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>Typescript</li>                
              </ul>
              <br/>
              Softare tools that I am able to use: 
              <ul>
                <li>React.ts / js</li>
                <li>Node.js</li>
                <li>Git</li>
                <li>Bash</li>
                <li>Docker</li>
                <li>Yarn</li>
                <li>AWS</li>
                <li>Amazon Rekognition</li>
                <li>Virtual Box</li>                
              </ul>
            </p>
        </div>
      </>
    )
  }
}

export default AboutMe;