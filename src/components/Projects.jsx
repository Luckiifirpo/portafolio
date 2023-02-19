import { useNavigate } from "react-router-dom"
import github_logo from "../imagenes/github_logo.svg"
import swal from "sweetalert";
import React from "react"
import { langPackage } from "./lang/langPackage.json"

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


export default function Projects({lang}){
    const navigate = useNavigate();
    
    const showMessageThenRedirect = (e) => {
        swal({
            title: langPackage[lang].more.alerts.proyectos.title,
            text: langPackage[lang].more.alerts.proyectos.text,
            buttons: false,
            timer: 2000,
        }).then(changeHref(e.target.attributes?.value?.nodeValue))
    }

    return(
        <div id="projects">
            <h3>{langPackage[lang].proyectos.title}</h3>
            <div id="proyectos">
                {langPackage[lang].proyectos.subtitle}!
                <p></p>
                <fieldset>
                    <legend>Countries App</legend>
                    <p>{langPackage[lang].proyectos.proyecto.countriesApp.paragraphs.first}</p>
                    <p>{langPackage[lang].proyectos.proyecto.countriesApp.paragraphs.second}!!</p>
                     <div id="pi-image"></div>
                    <p>{langPackage[lang].proyectos.proyecto.countriesApp.paragraphs.third}
                    </p>
                    <p>{langPackage[lang].proyectos.proyecto.countriesApp.paragraphs.last}!</p>
                        <hr/>
                    <div className="buttons_projects">
                        <div className="github-repo" onClick={showMessageThenRedirect} value={githubs.countries}>
                            <img src={github_logo} alt="GitHub Logo" width={"40px"} value={githubs.countries} /> {langPackage[lang].proyectos.buttons.repositorio}
                        </div>
                        |
                        <div className="deploy-project" onClick={showMessageThenRedirect} value={deploys.countries}>
                            <h3 value={deploys.countries} >{langPackage[lang].proyectos.buttons.pagina} -{">"}</h3>
                        </div>
                    </div>
                    
                </fieldset>
                <fieldset>
                    <legend>Huellitas de amor</legend>
                    <p>{langPackage[lang].proyectos.proyecto.huellitasApp.paragraphs.first}</p>
                    <p>{langPackage[lang].proyectos.proyecto.huellitasApp.paragraphs.second}</p>
                    <div id="pf-image"></div>
                    <p>{langPackage[lang].proyectos.proyecto.huellitasApp.paragraphs.third}</p>
                    <p>{langPackage[lang].proyectos.proyecto.huellitasApp.paragraphs.last}!</p>
                    <div className="buttons_projects">
                        <div className="github-repo" onClick={showMessageThenRedirect} value={githubs.huellitas}>
                            <img src={github_logo} alt="GitHub Logo" width={"40px"} value={githubs.huellitas} /> {langPackage[lang].proyectos.buttons.repositorio}
                        </div>
                        |
                        <div className="deploy-project" onClick={showMessageThenRedirect} value={deploys.huellitas}>
                            <h3 value={deploys.huellitas}>{langPackage[lang].proyectos.buttons.pagina} -{">"}</h3>
                        </div>
                    </div>
                </fieldset>

            <footer>
                <p style={{"max-width": "105vh"}}>{langPackage[lang].proyectos.footer}</p>
                <p className="nav_buttons" 
                onClick={()=>{
                    navigate("/contact")
                    window.scrollTo("top", 0)
                    }}>
                        {langPackage[lang].more.buttons.contactarme}
                        </p>
                <p></p>
            </footer>
            </div>
        </div>
    )
}