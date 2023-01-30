import css3_logo from "../imagenes/css3_logo.svg"
import express_logo from "../imagenes/expressjs_logo.svg"
import html5_logo from "../imagenes/html5_logo.svg"
import javascript_logo from "../imagenes/javascript_logo.svg"
import nodejs_logo from "../imagenes/nodejs_logo.svg"
import postgresql_logo from "../imagenes/postgresql_logo.svg"
import react_logo from "../imagenes/react_logo.svg"
import redux_logo from "../imagenes/redux_logo.svg"
import { useNavigate } from "react-router-dom"
import "../style/styles.css"

export default function About(){
    const navigate = useNavigate();


    return(
        <div id="about">
            <div id="name_pic">
                <h2>Hola! un gusto poder conocerte, mi nombre es:</h2>
                <h1>FIRPO<br/> LUCIANO DANIEL</h1>
                <div id="myPicture"></div>
            </div>
                <h3>Sobre mi</h3>
                <p>Soy un desarrollador web full stack junior orientado al desarrollo back-end, con muchas ganas de aprender, 
                    <br/>
                   trabajar y ,mejorar para poder ofrecer el mejor servicio posible a los clientes y empresas!</p>
            <div>
            </div>
                <h3>Tecnologias</h3>
                <p>Estas son algunas de las tecnologias que aprendí en el bootcamp de SoyHenry:</p>
            <div id="tecnologias">
                <div className="technology">
                    <p>React</p>
                    <img src={react_logo} alt="React Logo" style={{width: "70px"}} />
                </div>
                <div className="technology">
                    <p>Redux</p>
                    <img src={redux_logo} alt="Redux Logo" style={{width: "70px"}} />
                </div>
                <div className="technology">
                    <p>Express</p>
                    <img src={express_logo} alt="Express Logo" />
                </div>
                <div className="technology">
                    <p>Node Js</p>
                    <img src={nodejs_logo} alt="Node Logo" style={{width: "70px"}} />
                </div>
                <div className="technology">
                    <p>PostgreSQL</p>
                    <img src={postgresql_logo} alt="PostgreSql Logo" style={{width: "70px"}} />
                </div>
                <div className="technology">
                    <p>HTML</p>
                    <img src={html5_logo} alt="Html5 Logo" style={{width: "70px"}} />
                </div>
                <div className="technology">
                    <p>CSS</p>
                    <img src={css3_logo} alt="Css3 Logo" style={{width: "70px"}} />
                </div>
                <div className="technology">
                    <p>JavaScript</p>
                    <img src={javascript_logo} alt="JavaScript Logo" style={{width: "70px"}} />
                </div>
            </div>
            <div style={{"display": "flex", "justify-content": "center", "flex-direction": "column", "align-items": "center"}}>
                <h3>Puedes ver mis proyectos</h3>
                <p className="nav_buttons" 
                onClick={()=>{
                    navigate("/projects")
                    window.scrollTo("top", 0)
                    }}>
                        AQUÍ
                        </p>
            </div>
            <p></p>
            <br />
            <footer>
                <p style={{"max-width": "105vh"}}>Muchas gracias por visitar mi portafolio, puedes contactarme</p>
                <p className="nav_buttons" 
                onClick={()=>{
                    navigate("/contact")
                    window.scrollTo("top", 0)
                 }}>
                    AQUÍ
                    </p>
                <p></p>
                <p></p>
            </footer>

        </div>
    )
}