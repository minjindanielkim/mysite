import React from 'react';
import './projects.css';
import discord from '../images/discord.png';
import audio from '../images/audio.png';
import fmanager from '../images/fmanager.png';
import connect4 from '../images/connect4.jpeg';

class Projects extends React.Component<any, any> {
  constructor (props : any) {
    super(props);  
  }
  render() {
    return (
      <>
        <div className="projectitle">
          <span>Projects</span>
          <div>
            Find more projects <a href="https://github.com/minjindanielkim">here</a>
          </div>
        </div>
        <div className="projbody">
          <div className="subHeader">
            1. Discord Bot   
          </div>
          <div>
            <a href="https://github.com/minjindanielkim/discord-bot" target="_blank">Source</a>
          </div>
          <img className="discord" src={discord} alt="discord" />
          <div className="projSummary">
          <p>
            This is a project where I created a bot using Discord's open source API. 
            I started out this project because I was slowly getting tired of the same 
            bots that were previously being used in the server. 
            We were starting to get sick of not having any new or interesting bots to use.
            That was when the idea hit me, why not create my own bot that I can customize to my own liking? 
            This boring and blandness of the previous installations was what gave birth to the project. 
            I created this bot using Python, and this was a unique project that taught me how to
            implement APIs from a different source code. 
            Furthermore, it was also the first project that taught me how to 
            use Python's abundunt libraries. 
          </p>
          </div>
          <div className="subHeader">
            2. Audio Generator
          </div>
          <div>
            <a href="https://github.com/minjindanielkim/audio_generator" target="_blank">Source</a>
          </div>
          <img className='audio' src={audio} alt="audio" />
          <div className="projSummary"> 
          <p>
            How do humans hear? We hear audio (sound) through the use of sound waves. 
            These waves enter into our ear, through the ear canal, and vibrates the ear drum. 
            These waves are interpreted through trigonometric equations. These equations identify 
            the frequency and amplitude of a wave. What if, there was a program that could read a 
            trigonometric equation, and play an audio that utilizes the wave that was created? 
            This project is the answer to the question above. It is coded in C++ that seperates the left   
            and right speakers, so that each speaker plays a different sound. This was a unique project           
            that enabled me to utilize the fstream library and having the end result being in a .wav file.

          </p>
            </div>
          <div className="subHeader">
            3. Personal Finance-Manager
          </div>
          <div>
            Click <a href="https://spending-manager.vercel.app/" target="_blank">here</a> 
          </div>
          <img className="finance_manager" src={fmanager} alt="finance_manager" />
          <div className='projSummary'>
          <p>
            During my time in the miltary, I noticed a common trend among my fellow brothers in arms. People were too reckless in their spending habbits. As I was reaserching this cause, it seemed like everyone had a common issue. They spending most if not all of their paychecks on the PX (a military convinence store). While brainstorming ideas on what software could potentially be useful in keeping track of their finances, I decided that a simple finace manager would be optimal. I decided to build this app using React JS and to deploy to production using Vercel. It allowed users to create a budget for themselves and record all the purchases they have made and their costs. Once hitting the submit button, it would display how much of the budget was remaining and a graph to display where their money was being allocated to the most. Overall, this was one of my most successful projects, as it had over 20 users, and all of them saying that they appreciated a product that helped track their finances. 
          </p>
            </div>
        </div>
      </>
    )
  }
}

export default Projects;