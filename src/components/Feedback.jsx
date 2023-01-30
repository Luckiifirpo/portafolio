import emailjs from "emailjs-com"
import React, {useEffect, useState} from "react"
import swal from "sweetalert";
import Validate from "./Feedback-validations";

// const {SERVICE, TEMPLATE, KEY} = process.env
const service = "service_5gg1gjf";
const template = "template_ogizjil";
const key = "njNpt7haEqdpR1Lxr";

const submit_button = document.getElementById("submit-button")

export default function Feedback(){
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
            title: "Gracias por contactarte",
            text: "en breve respondere a tu mensaje",
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
        <h2>Comunicate conmigo!</h2>
        <form id="contact-form" onSubmit={sendEmail}>
            Email:<br/>
            {errors.email ? <p className="errors">*{errors.email}*</p> : null}
            <input 
                type="email" 
                name="email" 
                id="email" 
                onChange={handleInputChange}
                value={inputs.email}
                placeholder="ejemplo@email.com"
            /><br/>
            Asunto:<br/>
            {errors.subject ? <p className="errors">*{errors.subject}*</p> : null}
            <input 
                type="text" 
                name="subject" 
                id="subject" 
                onChange={handleInputChange}
                value={inputs.subject}
                placeholder="Nos gustaría conocerte..."
            /><br/>
            Mensaje:<br/>
            {errors.message ? <p className="errors">*{errors.message}*</p> : null}
            <textarea 
                name="message" 
                id="message" 
                cols="30" 
                rows="10" 
                onChange={handleInputChange}
                value={inputs.message}
                placeholder="Hola Luciano..."
            ></textarea><br/>
            <button id="submit-button" disabled={Object.keys(errors).length > 0 ? true : false} className="nav_buttons" type="submit">Enviar </button>
        </form>
    </div>)
}