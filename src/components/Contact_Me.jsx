import linkedin_logo from "../imagenes/linkedin_logo.svg"
import gmail_logo from "../imagenes/gmail_logo.svg"
import calendly_logo from "../imagenes/calendly_logo.svg"
import swal from "sweetalert"
import {useNavigate} from "react-router-dom"


export default function Contact(){
    const navigate = useNavigate()

    const goToLinkedin = () => {
        window.location.href = "https://www.linkedin.com/in/firpo-luciano/"
    }

    const goToCalendly = () => {
        window.location.href = "https://calendly.com/lucianofirpopp/30min"
    }

    const goToSendMail = () => {
        navigate("/sendEmail")
    }

    const showEmail = () => {
        swal({
            title: "Gracias por interesarte en mí",
            text: "serás redirigido en breve...",
            buttons: false,
            timer: 2000,
        }).then(goToSendMail)
    }
    
    const showLinkedin = () => {
        swal({
            title: "Gracias por interesarte en mí",
            text: "serás redirigido en breve...",
            buttons: false,
            timer: 2000,
        }).then(goToLinkedin)
    }

    const showCalendly = () => {
        swal({
            title: "Gracias por interesarte en mí",
            text: "serás redirigido en breve...",
            buttons: false,
            timer: 2000,
        }).then(goToCalendly)
    }
    
    return(
        <div id="contact_me">
            <h2>Puedes contactarme por aquí:</h2>
            <div id="medios_contacto">
                <div className="contacts" onClick={showLinkedin}>
                    <img src={linkedin_logo} alt="LinkedIn Logo" style={{width: "70px"}}/>
                    <h3>LinkedIn</h3>
                </div>
                <div className="contacts" onClick={showEmail}>
                    <img src={gmail_logo} alt="Gmail Logo" style={{width: "70px"}}/>
                    <h3>Gmail</h3>
                </div>
                <div className="contacts" onClick={showCalendly}>
                    <img src={calendly_logo} alt="Calendly Logo" style={{width: "190px"}}/>
                </div>
            </div>
        </div>
    )
}