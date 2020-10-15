import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import { FaCode, FaCodepen, FaGithub, FaLinkedinIn, FaRegSmileBeam } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FiDatabase, FiMail } from 'react-icons/fi';

export default class Home extends Component {

  githubClick() {
    window.open("https://github.com/alexfuss");
}

  linkedClick() {
    window.open("https://www.linkedin.com/in/alexander-fuss-3ab08a106/");
}

  mailClick() {
    window.open("mailto:alexfuss2@gmail.com");
}

        render() {
          return (
            <div>
              <main className="main-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="display-4">Hi, I'm Alex</h1>
                      {/*Link below for Avatar comes from Cartoon Yourself Chrome extension*/}
                      <img src={process.env.PUBLIC_URL + "/Images/Avatar-Maker.svg"} alt="Alex Fuss" className="main-img" />
                      <br />
                      <h2>I'm a SEO Professional &amp; Full-Stack Web Developer</h2>
                      <br />
                      <div className="main-desc">
                        <p className="lead">My focus is primarily on the MERN stack along with experience in JavaScript, JQuery, Bootstrap and MySQL</p>
                        <br />
                        <p className="lead">When it comes to SEO, my work is with an agency specializing in enterprise strategy where my role handles data analysis and web consultation</p>
                        <br />
                        <p className="lead">Checkout my <a href="https://alexfuss.github.io/portfolio/">portfolio page</a> to see some of my recent projects.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <section className="icons">
                      <FaCode className="fa-icon fa-3x" style={{color: "#00A" }} />
                      <FaCodepen className="fa-icon fa-3x" style={{color: "#00A" }} />
                      <SiJavascript className="fa-icon fa-3x" style={{color: "#00A" }} />
                      <FiDatabase className="fa-icon fa-3x" style={{color: "#00A" }} />
                    </section>
                  </div>
                </div>
              </div>
              <section className="body-content">
                <div className="container">
                  <div className="row in-touch">
                    <div className="col-md-12 col-12 col-lg-12">
                      <h3>Want to get in touch?</h3>
                      <p className="lead">Feel free to reach out via any of the mediums below</p>      
                    </div>
                  </div>
                  <div className="row personal-links">
                    <div className="col-md-4 col-4 col-lg-4">
                      <FaGithub className="fa-3x" cssClass='e-link' onClick={this.githubClick.bind(this)} role="button">
                      </FaGithub>
                    </div>
                    <div className="col-md-4 col-4 col-lg-4">
                     <FaLinkedinIn className="fa-3x" role="button" cssClass='e-link' onClick={this.linkedClick.bind(this)} >
                      </FaLinkedinIn>
                    </div>
                    <div className="col-md-4 col-4 col-lg-4">
                      <FiMail className="fa-3x" role="button" cssClass='e-link' onClick={this.mailClick.bind(this)} >
                      </FiMail>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-12 col-lg-12">
                    <footer className="footer">
                      <p className="font-italic text-uppercase">Copyright</p>
                      <FaRegSmileBeam className="fa-2x" style={{color: "#00A" }} />
                    </footer>
                  </div>
                </div>
              </div>
            </div>
        );
   };
}