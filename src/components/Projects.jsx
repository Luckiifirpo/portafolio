import { useNavigate } from "react-router-dom"
import github_logo from "../imagenes/github_logo.svg"
import swal from "sweetalert";
import React from "react"

const changeHref = (where) => {
    window.location.href = where
}

const githubs = {
    countries: "https://github.com/Luckiifirpo/Countries-App-SoyHenry",
    huellitas: "https://github.com/Luckiifirpo/PF-Huellitas-de-amor",
}

const deploys = {
    countries: "https://countriesapp-soyhenry.vercel.app",
    huellitas: "https://huellitas-de-amor.vercel.app"
}

const showMessageThenRedirect = (e) => {
    swal({
        title: "Gracias por interesarte en mi proyecto y en mí",
        text: "serás redirigido en breve...",
        buttons: false,
        timer: 2000,
    }).then(changeHref(e.target.attributes?.value?.nodeValue))
}

export default function Projects(){
    const navigate = useNavigate();

    return(
        <div id="projects">
            <h3>Proyectos</h3>
            <div id="proyectos">
                Estos son algunos de mis proyectos!
                <p></p>
                <fieldset>
                    <legend>Countries App</legend>
                    <p>Este es mi primer proyecto, mi proyecto individual,
                     hecho para el bootcamp de soyHenry.</p>
                    <p>Consiste en una app donde puedes ver información sobre los países, tales como cantidad de población, su identificador de 3 letras, su continente, entre otros datos interesantes y asignarles actividades turisticas!!</p>
                     <div id="pi-image"></div>
                    <p>Este fue un proyecto completamente desarrollado por mi, en un plazo de aproximadamente 25 días,
                        logré cumplir 2 objetivos extra, que fueron el deploy y también el diseño responsive.
                    </p>
                    <p>Fue realizado con React y Redux para el front-end, con Express js para el back-end y con PostgreSQL para la base de datos!</p>
                        <hr/>
                    <div className="buttons_projects">
                        <div className="github-repo" onClick={showMessageThenRedirect} value={githubs.countries}>
                            <img src={github_logo} alt="GitHub Logo" width={"40px"} value={githubs.countries} /> Repositorio
                        </div>
                        |
                        <div className="deploy-project" onClick={showMessageThenRedirect} value={deploys.countries}>
                            <h3 value={deploys.countries} >Página web -{">"}</h3>
                        </div>
                    </div>
                    
                </fieldset>
                <fieldset>
                    <legend>Huellitas de amor</legend>
                    <p>Este es el proyecto final realizado en un grupo de 8 integrantes para la culminación del bootcamp de soyHenry.</p>
                    <p>se trata de una página en donde poder adoptar o dar en adopción animales, o en caso de no poder adoptar pero
                         querer ayudar también se puede hacer donaciones,
                         tanto de dinero como de insumos (comida, camas, medicinas, etc)</p>
                    <div id="pf-image"></div>
                    <p>En él fui encargado de hacer el sistema de autenticación local, la subida de imagenes a cloudinary <br/>
                        revisión y corrección de erroes mejorando el código con buenas prácticas y me encargue de una parte de la traducción.</p>
                    <p>Fue desarrollado con React, Redux Toolkit y Material UI para el front-end, con Express js, Nodejs y PostgreSQL para el back-end y base de datos respectivamente!</p>
                    <div className="buttons_projects">
                        <div className="github-repo" onClick={showMessageThenRedirect} value={githubs.huellitas}>
                            <img src={github_logo} alt="GitHub Logo" width={"40px"} value={githubs.huellitas} /> Repositorio
                        </div>
                        |
                        <div className="deploy-project" onClick={showMessageThenRedirect} value={deploys.huellitas}>
                            <h3 value={deploys.huellitas}>Página web -{">"}</h3>
                        </div>
                    </div>
                </fieldset>

            <footer>
                <p style={{"max-width": "105vh"}}>Muchas gracias por tomarte el tiempo de ver mis proyectos, si estás buscando a una persona responsable, atenta y que siempre da lo mejor de si te invito a </p>
                <p className="nav_buttons" 
                onClick={()=>{
                    navigate("/contact")
                    window.scrollTo("top", 0)
                    }}>
                        CONTACTARME
                        </p>
                <p></p>
            </footer>
            </div>
        </div>
    )
}