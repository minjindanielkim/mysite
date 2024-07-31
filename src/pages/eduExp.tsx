import React from 'react';
import "./eduExp.css";
import uwaterlooLogo from "../images/UniversityOfWaterloo_logo_horiz_rgb.png";
import buyersonLogo from "../images/buyerson.png";
import adaptivePulseLogo from "../images/adaptivePulse.png";

class EduExp extends React.Component<any, any> {
  constructor (props: any) {
    super(props);  
  }
  render() {
    return (
      <>
        <div className="titleHeader">
          <span className="title"> My Current Education and Past Experiences</span>
        </div>
        <div className="mainBody">
          <div className="leftCol">
            <div className="uni">
              <div className="subTitle1">
                Education
              </div>
              <p>
              I am currently attending the University of Waterloo in Ontario, Canada. <br />
              Here I am taking a major in Systems Design Engineering <br /> 
              This is a unique major, where one is able to learn and experience the different majors of <br />
              Software, Mechanical, and Electrical Engineering.
              <br />
              Through this course, I was given the rare opportunity to learn and work with <br /> these different fields of engineering 
              and find which subject related to me the most. <br />
              <br />
              Some noticeable examples of being taught a wide range of subjects, <br />
                would be for example: <br />
                </p>
                <ul>
                  <li>Data Structures and Algorithms</li>
                  <li>3D Modeling using SolidWorks</li>
                  <li>Electrical circuits and wires lab</li>
                </ul>
                <p>
                <br />
                Through these labs and classes, I was able to determine which field of study <br />
                was the most appropreate for me, and this was how I came to the realization that <br />
                a career path of software engineering was the most fit for myself. 

                <br />
                Since Systems Design Engineering contained such a wide variety of courses, <br />
                it became crutial for one to have a strong mathematical foundation. <br />
                This is why our major has a heavy focus on mathematics, and students must take atleast two <br />
                courses on mathematics per term. One for Linear Algebra, and the other, on Calculus.
              </p>
              <figure>
                  <img className="uwaterloo" src={uwaterlooLogo} alt="University of Waterloo Logo" />
              </figure>
            </div>
          </div>  
          <div className="rightCol">
            <div className="exp">
              <div className="subTitle2">
                Experiences
              </div>
              <div>
                    <img className="adaptivePulse" src={adaptivePulseLogo} alt="adaptive pulse" />
                    <div className="experienceText">
                      <p>
                        Adaptive Pulse was the company that started my experience with co-op, and it was the company that gave me my first
                        exposure to the role as a sofware developer. At Adaptive Pulse, I worked on the front end code for one of their retention intelligence products.
                        <br />
                        By working on this product, I learned how to use Docker, Yarn, and most importantly, React.
                        <br />
                        Here, I learned how to collaborate with other developers to finish a product. 
                        <br />
                        This was achieved by having daily standups and separate
                        calls with other developers to see what I can do to help out on the project.
                        <br />
                        The many developers I worked with there were very helpful and taught me many lessons that I still use to this day.
                      </p>
                    </div>
              </div>
              <div>
                    <img className="buyerson" src={buyersonLogo} alt="buyerson.inc" />
                    <div className="experienceText">
                      <p>
                        Buyerson was the second company that I had my co-op term at. At Buyerson, I was given another opportunity to work as a software developer, this time, 
                        working on creating the first prototype for "pricingsaas.com". This was the most difficult projects for me to accomplish, as 
                        it was essentially creating a website from sratch. <br />
                        The project at first was very confusing, but thanks to the guidance of my employer, who was <br />
                        at the time managing my work, I was able to learn, and grow as a developer. 
                        < br /> 
                        Through our one-on-one sessions, I was able to learn how to use AWS and input large sums of data into my program, and learned the basics of working with
                        Amazon Rekognition, an AI developed by Amazon that was able to read images when the mouse hovered over a letter or word. 
                        However, more than just some advanced technological knowledge, I was also able to learn how to refine my code to meet industry standards.
                        <br /> 
                      </p>
                    </div>

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default EduExp;