import emailjs from "emailjs-com"
import React, {useEffect, useState} from "react"
import swal from "sweetalert";
import Validate from "./Feedback-validations";
import { langPackage } from "./lang/langPackage.json"
// const {SERVICE, TEMPLATE, KEY} = process.env
const service = "service_5gg1gjf";
const template = "template_ogizjil";
const key = "njNpt7haEqdpR1Lxr";

const submit_button = document.getElementById("submit-button")

export default function Feedback({lang}){
    const [inputs, setInputs] = useState({
        email: "",
        subject: "",
        message: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        subject: "",
        message: "",
    })
    const form = document.getElementById("contact-form");

    function handleInputChange(e){
        setErrors(Validate({
            ...inputs,
            [e.target.name]: e.target.value,
        }));
        
        setInputs({  
            ...inputs,
            [e.target.name]: e.target.value,
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(service, template, form, key)
          .then((result) => {
              console.log(result);
          }, (error) => {
              console.log(error);
          });

        swal({
            title: langPackage[lang].more.alerts.sendEmail.title,
            text: langPackage[lang].more.alerts.sendEmail.text,
            buttons: false,
            timer: 1500,
        }).then(setInputs({
            email: "",
            subject: "",
            message: "",
        }))
      };

    useEffect(() => {
        if(Object.keys(errors).length > 0){
            submit_button?.setAttribute("class", "button_disabled")
        }else{
            submit_button?.setAttribute("class", "nav_buttons")
        }
    }, [errors])

    return(<div id="send-email">
        <h2>{langPackage[lang].enviarEmail.title}!</h2>
        <form id="contact-form" onSubmit={sendEmail}>
            {langPackage[lang].enviarEmail.subtitles.email}:<br/>
            {errors.email ? <p className="errors">*{errors.email}*</p> : null}
            <input 
                type="email" 
                name="email" 
                id="email" 
                onChange={handleInputChange}
                value={inputs.email}
                placeholder={langPackage[lang].enviarEmail.placeholders.email}
            /><br/>
            {langPackage[lang].enviarEmail.subtitles.asunto}:<br/>
            {errors.subject ? <p className="errors">*{errors.subject}*</p> : null}
            <input 
                type="text" 
                name="subject" 
                id="subject" 
                onChange={handleInputChange}
                value={inputs.subject}
                placeholder={langPackage[lang].enviarEmail.placeholders.asunto}
            /><br/>
            {langPackage[lang].enviarEmail.subtitles.mensaje}:<br/>
            {errors.message ? <p className="errors">*{errors.message}*</p> : null}
            <textarea 
                name="message" 
                id="message" 
                cols="30" 
                rows="10" 
                onChange={handleInputChange}
                value={inputs.message}
                placeholder={langPackage[lang].enviarEmail.placeholders.mensaje}
            ></textarea><br/>
            <button id="submit-button" disabled={Object.keys(errors).length > 0 ? true : false} className="nav_buttons" type="submit">{langPackage[lang].more.buttons.enviar} </button>
        </form>
    </div>)
}