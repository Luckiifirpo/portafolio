import { useNavigate } from "react-router-dom"
import { useState } from "react"
import menu from "../imagenes/menu-svg.svg"
import spain_flag from "../imagenes/spain_flag.svg"
import eeuu_flag from "../imagenes/eeuu_flag.svg"
import "../style/styles.css"
import { useEffect } from "react"
import React from "react"
import { langPackage } from "./lang/langPackage"

const actualLang = document.querySelector("#language")

export default function NavBar({lang, setLang}){
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    
    const toggleMenu = async () => {
        await setOpen(!open);
    }

    const langChange = (e) => {
        setLang(e.target.value)
    }

    const navigateOnClick = (e) => {
        navigate(e.target.title)
        setOpen(false)
    }

    useEffect(() => {
        const navmenu = document.querySelector("#menu");

        open ? navmenu.setAttribute("class", "container_active")
        : navmenu.setAttribute("class", "container")
    }, [open]);

    useEffect(() => {
        actualLang.setAttribute("lang", lang)
    }, [lang])

    return(
        <div id="nav-bar">
                <img onClick={toggleMenu} src={menu} alt="logo de portafolio" id="logo" style={{"width": "40px"}}/>
            <div id="menu" className="container">
                <p className="nav_links" title="/" onClick={navigateOnClick} >{langPackage[lang].navbar.sobreMi}</p>
                <p className="nav_links" title="/contact" onClick={navigateOnClick} >{langPackage[lang].navbar.contacto}</p>
                <p className="nav_links" title="/projects" onClick={navigateOnClick} >{langPackage[lang].navbar.proyectos}</p>
                <select id="lang" onChange={langChange}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
            </div>
        </div>
    )
}