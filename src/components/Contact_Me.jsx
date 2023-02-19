import linkedin_logo from "../imagenes/linkedin_logo.svg"
import gmail_logo from "../imagenes/gmail_logo.svg"
import calendly_logo from "../imagenes/calendly_logo.svg"
import swal from "sweetalert"
import {useNavigate} from "react-router-dom"
import React from "react"
import { langPackage } from "./lang/langPackage.json"

const calendly = "https://calendly.com/lucianofirpopp/30min";
const linkedin = "https://www.linkedin.com/in/firpo-luciano/";


const changeHref = (where) => {
    window.location.href = where
}


export default function Contact({lang}){
    const message = function(e){
        swal({
            title: langPackage[lang].more.alerts.contacto.title,
            text: langPackage[lang].more.alerts.contacto.text.redirect,
            buttons: false,
            timer: 2000,
        }).then(changeHref(e.target.attributes.value.nodeValue));
    }

    const navigate = useNavigate();

    const navigateMessage = function(e) {
        swal({
            title: langPackage[lang].more.alerts.contacto.title,
            text: langPackage[lang].more.alerts.contacto.text.navigate,
            buttons: false,
            timer: 1000,
        }).then(navigate(e));
    }
    
    const showMessage = (e) => {
        e.target.attributes.name.nodeValue === "navigate" ?
        navigateMessage(e.target.attributes.value.nodeValue) :
        message(e)
    }
    
    return(
        <div id="contact_me">
            <h2>{langPackage[lang].contacto}:</h2>
            <div id="medios_contacto">
                <div className="contacts" onClick={showMessage} name="hrefRedirect" value={linkedin}>
                    <img src={linkedin_logo} alt="LinkedIn Logo" style={{width: "70px"}} name="hrefRedirect" value={linkedin}/>
                    <h3>LinkedIn</h3>
                </div>
                <div className="contacts" onClick={showMessage} name="navigate" value="/sendEmail">
                    <img src={gmail_logo} alt="Gmail Logo" style={{width: "70px"}} name="navigate" value="/sendEmail"/>
                    <h3>Gmail</h3>
                </div>
                <div className="contacts" onClick={showMessage} name="hrefRedirect" value={calendly}>
                    <img src={calendly_logo} alt="Calendly Logo" style={{width: "190px"}} name="hrefRedirect" value={calendly}/>
                </div>
            </div>
        </div>
    )
}