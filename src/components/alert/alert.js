import React, { Component } from 'react'
import CookieConsent from "react-cookie-consent";



export class alert extends Component {
    render() {
        return (
            <div>
            <CookieConsent buttonText="Got It" location="bottom" style={{background:'#000'} } buttonStyle={{ background:'#3398FF', color: "white", fontSize: "18px",borderRadius: "5px", padding: "10px 50px", marginTop: "30px" }}>
            <div>Our site uses cookies to enhance your user experience and measure site traffic.</div>
            
            <span style={{ fontSize: "20px" }}>Learn More</span>
            </CookieConsent>
            
            </div>
        )
    }
}

export default alert

