import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
        render() {
          return (
            <div>
              <main className="main-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="display-4">Hi, I'm Alex</h1>
                      {/*Link below for Avatar comes from Cartoon Yourself Chrome extension*/}
                      <img src="./assets/Avatar-Maker.svg" alt="Alex Fuss" className="main-img" />
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
                      <i className="fas fa-code fa-3x fa-icon" style={{color: '#00A'}} />
                      <i className="fab fa-js fa-3x fa-icon" style={{color: '#00A'}} />
                      <i className="fab fa-css3-alt fa-3x fa-icon" style={{color: '#00A'}} />
                      <i className="fab fa-codepen fa-3x fa-icon" style={{color: '#00A'}} />
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
                      <a className="btn btn-link btn-lg btn-outline-primary" href="https://github.com/alexfuss" role="button"><i className="fab fa-github fa-3x" /></a>
                    </div>
                    <div className="col-md-4 col-4 col-lg-4">
                      <a className="btn btn-link btn-lg btn-outline-primary" href="https://www.linkedin.com/in/alexander-fuss-3ab08a106/" role="button"><i className="fab fa-linkedin-in fa-3x" /></a>
                    </div>
                    <div className="col-md-4 col-4 col-lg-4">
                      <a className="btn btn-link btn-lg btn-outline-primary" href="mailto:alexfuss2@gmail.com" role="button"><i className="fas fa-envelope-square fa-3x" /></a>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-12 col-lg-12">
                    <footer className="footer">
                      <p className="font-italic text-uppercase">Copyright</p>
                      <i className="far fa-smile-beam fa-2x" style={{color: '#00A'}} />
                    </footer>
                  </div>
                </div>
              </div>
            </div>
        );
   };
}