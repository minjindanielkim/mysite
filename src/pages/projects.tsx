import React from 'react';
import './projects.css';
import discord from '../images/discord.png';
import audio from '../images/audio.png';
import connect4 from '../images/connect4.jpeg';

class Projects extends React.Component {
  constructor (props) {
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
            3. Connect 4
          </div>
          <img className = 'connect' src={connect4} alt="connect4" />
          <div className='projSummary'>
          <p>
            One of the most well known board games in the Western world. Connect 4 is a game where 
            two players try to fill up the board with four colors of their own in a row. 
            My mentor had recommended me this project, as it would be an excellent example 
            on how to implement 2D arrays and how to implement an AI in a game. Furthermore,
            this project is unique in a way as it actually shows where coins are being placed within the   
            Connect 4 board. This was definitely one of the more difficult projects that I have done               , as implementing a turn system along side an AI, while simultaneously checking on the 2D 
  array to see if there is a potential victor. This was a project with many different layers onto it and it is what showed me how difficult it can be to implement and work with 2D arrays.
          </p>
            </div>
        </div>
      </>
    )
  }
}

export default Projects;