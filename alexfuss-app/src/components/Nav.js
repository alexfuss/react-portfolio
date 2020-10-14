import React, { Component } from "react";

export default class Nav extends Component {
    render() {
        return (
    
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="https://alexfuss.github.io/">
              {/*Logo image comes from Free Logo Maker*/}
              <img src={process.env.PUBLIC_URL + 'Images/16996ff1-4730-4e2e-8147-4f3cbe28dbbe_200x200.png'} width={50} height={50} alt="AF custom logo" loading="lazy" className="nav-img" />
            </a>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">   
                <li className="nav-item">
                  <a className="nav-link" href="https://alexfuss.github.io/portfolio/" >Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../portfolio/Assets/Fuss_Alexander_Resume_2020.pdf" download>Resume</a>
                </li>
              </ul></div>
          </nav>
        );
      }
}

