import { useNavigate } from "react-router-dom"

export default function Projects(){
    const navigate = useNavigate();

    return(
        <div id="projects">
            <h3>Proyectos</h3>
            <div id="proyectos">
                Estos son algunos de mis proyectos!
                <p></p>
                <fieldset>
                    <legend>Portafolio</legend>
                    <p>Es el proyecto en el que te encuentras actualmente</p>
                    <p>Este es un proyecto personal, para darme a conocer y para mejorar mis habilidades en el desarrollo web</p>
                </fieldset>
                <fieldset>
                    <legend>Countries App</legend>
                    <p>Este es mi primer proyecto, mi <a id="link_a" href="https://countriesapp-soyhenry.vercel.app" rel="noreferrer" target={"_blank"}>proyecto individual</a>,
                     hecho para el bootcamp de soyHenry.</p>
                     <div id="pi-image"></div>
                    <p>Fue realizado con react y redux para el front-end, con express js para el back-end y con postgresql para la base de datos!</p>
                </fieldset>
                <fieldset>
                    <legend>Huellitas de amor</legend>
                    <p>En proceso...</p>
                </fieldset>

            <footer>
                <p style={{"max-width": "105vh"}}>Muchas gracias por tomarte el tiempo de ver mi proyecto, si estás buscando a una persona responsable, atenta y que siempre da lo mejor de si te invito a </p>
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