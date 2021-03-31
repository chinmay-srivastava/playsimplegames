import React, { Component } from "react";
import { FaInstagram,FaYoutube,FaFacebookSquare,FaTwitter,FaLinkedin } from "react-icons/fa";

import "../footer/footer.css";
import googleBadge from "../../media/google-play-badge.png"
import AppleBadge from "../../media/get-on-app-store.png"
import Logo from "../../media/supercellLogo.jpg"

export class footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
          <div className="column">
            <div className="footer-content" >
            <h4>Follow Us On</h4>
            
            <div className="footer-icon">
            <FaYoutube className="footer-icon" size="2em"></FaYoutube>
            <FaFacebookSquare className="footer-icon" size="2em"></FaFacebookSquare>
            <FaInstagram className="footer-icon" size="2em"></FaInstagram>
            <FaTwitter className="footer-icon" size="2em"></FaTwitter>
            <FaLinkedin className="footer-icon" size="2em"></FaLinkedin>

            <div className="column">
            
            <img src={googleBadge} className="footer-images"></img>
            <img src={AppleBadge} className="footer-images" ></img>
           </div>
            </div>

            <hr></hr>

            <div className="footer-row2">
            <h4 className="footer-row2">Terms Of Service</h4>
            <h4 className="footer-row2">Privacy Policy</h4>
            <h4 className="footer-row2">Parent's Guide</h4>
            <h4 className="footer-row2">Safe & Fair Play Policy</h4>
            </div>
            <div className="row">
            <div className="column">
           <div className="footer-address">
           <p>Supercell Oy
           </p>
           <p>
           Jätkäsaarenlaituri 1
           </p>
           <p>
           00180 Helsinki
           </p>
           <p>
           Finland</p>
           <div className="column">
            <img src={Logo} className="footer-images2"></img>
            </div>
           </div>
           
            </div>

            </div>
            </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
