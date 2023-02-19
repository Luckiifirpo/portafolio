import css3_logo from "../imagenes/css3_logo.svg"
import express_logo from "../imagenes/expressjs_logo.svg"
import html5_logo from "../imagenes/html5_logo.svg"
import javascript_logo from "../imagenes/javascript_logo.svg"
import nodejs_logo from "../imagenes/nodejs_logo.svg"
import postgresql_logo from "../imagenes/postgresql_logo.svg"
import react_logo from "../imagenes/react_logo.svg"
import redux_logo from "../imagenes/redux_logo.svg"
import mongodb_logo from "../imagenes/mongodb_logo.svg"
import React from "react"
import { langPackage } from "./lang/langPackage.json"
import "../style/styles.css"

export default function About({lang}){
    // const navigate = useNavigate();


    return(
        <div id="about">
            <div id="name_pic">
                <h2>{langPackage[lang].sobreMi.title}:</h2>
                <h1>{langPackage[lang].sobreMi.nombre.apellido}<br/> {langPackage[lang].sobreMi.nombre.nombre}</h1>
                <div id="myPicture"></div>
            </div>
            <div id="sobre-mi">
                <h3>{langPackage[lang].sobreMi.subtitulos.sobreMi}</h3>
                <div style={{width: "85%"}}>
                    <p>
                        {langPackage[lang].sobreMi.paragraphs.sobreMi}
                    </p>
                </div>
            </div>
            <div>
            </div>
                <h3>{langPackage[lang].sobreMi.subtitulos.tecnologias}</h3>
                <p>{langPackage[lang].sobreMi.paragraphs.tecnologias.queConozco}:</p>
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
                    <p>{langPackage[lang].sobreMi.paragraphs.tecnologias.queEstoyAprendiendo}:</p>
                <div className="technology"> 
                    <img src={mongodb_logo} alt="MongoDB Logo" style={{width: "90px"}} />
                </div>
            </div>
            <div id="datos-interes">
                <h3>{langPackage[lang].sobreMi.subtitulos.otrosDatos}</h3>
                <div id="certifications">
                    <p style={{"font-weight": "800"}}>{langPackage[lang].sobreMi.subtitulos.certificaciones}:</p>
                    <div className="certification">
                        <p>Javascript Algorithms and Data Structures</p>
                        <p>- FreeCodeCamp -</p>
                        <p>{langPackage[lang].sobreMi.comprobarCertificados.compruebala} <a href="https://www.freecodecamp.org/certification/Luciano_Firpo/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer">{langPackage[lang].sobreMi.comprobarCertificados.aqui}</a></p>
                    </div>
                    <div className="certification">
                        <p>Standard English Set {"(B2 - Upper Intermediate)"}</p>
                        <p>- EF SET -</p>
                        <p>{langPackage[lang].sobreMi.comprobarCertificados.compruebala} <a href="https://www.efset.org/cert/dFxXhu" target="_blank" rel="noreferrer">{langPackage[lang].sobreMi.comprobarCertificados.aqui}</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}