import React from 'react';
import './projects.css';
import discord from '../images/discord.png';
import audio from '../images/audio.png';
import fmanager from '../images/fmanager.png';
import connect4 from '../images/connect4.jpeg';
import terminal from '../images/terminal.png';
import cli from "../images/cli.png";
import spotify from '../images/spotify.png';

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
            Find more on <a href="https://github.com/minjindanielkim" target="_blank">GitHub ↗</a>
          </div>
        </div>
        <div className="projbody">
          <div className="projectCard">
            <img src={discord} alt="Discord Bot" />
            <div className="cardContent">
              <div className="cardTitle">Discord Bot</div>
              <div className="cardLink">
                <a href="https://github.com/minjindanielkim/discord-bot" target="_blank">Source ↗</a>
              </div>
              <div className="cardSummary">
                A custom Discord bot built with Python using Discord's open-source API. Born out of
                frustration with generic bots, it introduced unique commands and taught me how to
                work with external APIs and Python's standard libraries.
              </div>
            </div>
          </div>

          <div className="projectCard">
            <img src={audio} alt="Audio Generator" />
            <div className="cardContent">
              <div className="cardTitle">Audio Generator</div>
              <div className="cardLink">
                <a href="https://github.com/minjindanielkim/audio_generator" target="_blank">Source ↗</a>
              </div>
              <div className="cardSummary">
                A C++ program that reads a trigonometric equation and synthesizes audio output as a
                .wav file with separate left and right speaker channels — exploring how sound waves
                map to human hearing.
              </div>
            </div>
          </div>

          <div className="projectCard">
            <img src={terminal} alt="Terminal Emulator" />
            <div className="cardContent">
              <div className="cardTitle">Terminal Emulator</div>
              <div className="cardLink">
                <a href="https://github.com/minjindanielkim/terminal_emulator" target="_blank">Source ↗</a>
              </div>
              <div className="cardSummary">
                A terminal emulator built in Rust from scratch. Dug into window management,
                the event lifecycle loop, and the rendering pipeline, learning low-level systems
                programming through building a real tool.
              </div>
            </div>
          </div>

          <div className="projectCard">
            <img src={cli} alt="Image Filter" />
            <div className="cardContent">
              <div className="cardTitle">Image Filter CLI</div>
              <div className="cardLink">
                <a href="https://github.com/minjindanielkim/image-filter" target="_blank">Source ↗</a>
              </div>
              <div className="cardSummary">
                A Rust CLI tool that inverts images directly from the terminal. Built to understand
                how pixel data lives in memory and how to read and write binary image files using
                the local filesystem. A hands-on dive into low-level memory manipulation in Rust.
              </div>
            </div>
          </div>

          <div className="projectCard">
            <img src={spotify} alt="Agentic Playlist" />
            <div className="cardContent">
              <div className="cardTitle">Agentic Playlist</div>
              <div className="cardLink">
                <a href="https://github.com/minjindanielkim/agentic-playlist/" target="_blank">Source ↗</a>
              </div>
              <div className="cardSummary">
                Built in a 4-hour hackathon, this app lets users search and play songs using Spotify
                and a YouTube player, powered by open-source AI. Sharpened my skills working
                collaboratively under time pressure and integrating free AI tools into a real product.
              </div>
            </div>
          </div>

          <div className="projectCard">
            <img src={fmanager} alt="Personal Finance Manager" />
            <div className="cardContent">
              <div className="cardTitle">Personal Finance Manager</div>
              <div className="cardLink">
                <a href="https://spending-manager.vercel.app/" target="_blank">Live Demo ↗</a>
              </div>
              <div className="cardSummary">
                A React app built to help fellow soldiers track spending during military service.
                Users set a budget, log purchases, and see a live chart of spending allocation.
                Reached 20+ active users.
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Projects;
