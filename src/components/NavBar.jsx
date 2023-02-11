import { useNavigate } from "react-router-dom"
import { useState } from "react"
import menu from "../imagenes/menu-svg.svg"
import "../style/styles.css"
import { useEffect } from "react"


export default function NavBar(){
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    
    const toggleMenu = async () => {
        await setOpen(!open);
        // const navmenu = await document.querySelector("#menu");

        // open ? navmenu.setAttribute("class", "container_active")
        // : navmenu.setAttribute("class", "container")
    }

    const navigateOnClick = (e) => {

        navigate(e.target.title)
        setOpen(false)
    }

    useEffect(() => {
        const navmenu = document.querySelector("#menu");

        open ? navmenu.setAttribute("class", "container_active")
        : navmenu.setAttribute("class", "container")
    }, [open])

    return(
        <div id="nav-bar">
                <img onClick={toggleMenu} src={menu} alt="logo de portafolio" id="logo" style={{"width": "40px"}}/>
            <div id="menu" className="container">
                <p className="nav_links" title="/" onClick={navigateOnClick} >Sobre Mi</p>
                <p className="nav_links" title="/contact" onClick={navigateOnClick} >Contacto</p>
                <p className="nav_links" title="/projects" onClick={navigateOnClick} >Proyectos</p>
            </div>
        </div>
    )
}