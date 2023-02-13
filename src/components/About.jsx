import css3_logo from "../imagenes/css3_logo.svg"
import express_logo from "../imagenes/expressjs_logo.svg"
import html5_logo from "../imagenes/html5_logo.svg"
import javascript_logo from "../imagenes/javascript_logo.svg"
import nodejs_logo from "../imagenes/nodejs_logo.svg"
import postgresql_logo from "../imagenes/postgresql_logo.svg"
import react_logo from "../imagenes/react_logo.svg"
import redux_logo from "../imagenes/redux_logo.svg"
import mongodb_logo from "../imagenes/mongodb_logo.svg"
// import { useNavigate } from "react-router-dom"
import "../style/styles.css"

export default function About(){
    // const navigate = useNavigate();


    return(
        <div id="about">
            <div id="name_pic">
                <h2>Hola! un gusto poder conocerte, mi nombre es:</h2>
                <h1>FIRPO<br/> LUCIANO DANIEL</h1>
                <div id="myPicture"></div>
            </div>
            <div id="sobre-mi">
                <h3>Sobre mi</h3>
                <div style={{width: "85%"}}>
                    <p>Desde chico siempre me llamó la atención el cómo se hacían las cosas relacionadas a la tecnología,
                        fue esa curiosidad la que me impulsó a tomar cursos sobre reparación de celulares y computadoras, y también lo que haría que me
                        interese la programación, aunque no tuve la oportunidad de estudiar sobre eso hasta el 2022, que se me cruzó en el camino el bootcamp
                        soyHenry, un poco desconfiado al principio como la mayoría me costó bastante creer lo que ofrecían, sin embargo no tenia mucho que perder,
                        y tenía todo por ganar así que comencé y pude hacerme un Desarrollador full stack, es gracias a eso que hoy puedes leer este apartado en mi portafolio y gracias también al apoyo de mi familia,
                        te agradezco por leer un poco sobre mi, y también por visitar mi portafolio! <br/>
                        Si te interesa contactarte conmigo aquí mismo te dejo dos alternativas en el apartado de CONTACTO
                    </p>
                </div>
            </div>
            <div>
            </div>
                <h3>Tecnologias</h3>
                <p>Estas son algunas de las tecnologias que aprendí en el bootcamp de SoyHenry ,<br/>en las cuales sigo trabajando, mejorando y aprendiendo:</p>
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
            <div id="aprendiendo">
                    <p>Esta es una de las tecnologias que me encuentro aprendiendo actualmente:</p>
                <div className="technology"> 
                    <img src={mongodb_logo} alt="MongoDB Logo" style={{width: "90px"}} />
                </div>
            </div>
        </div>
    )
}