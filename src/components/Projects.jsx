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
                    <legend>Countries App</legend>
                    <p>Este es mi primer proyecto, mi <a name="link-pi" id="link_a" href="https://countriesapp-soyhenry.vercel.app" rel="noreferrer" target={"_blank"}>proyecto individual</a>,
                     hecho para el bootcamp de soyHenry.</p>
                    <p>Consiste en una app donde puedes ver información sobre los países, tales como cantidad de población, su identificador de 3 letras, su continente, entre otros datos interesantes y asignarles actividades turisticas!!</p>
                     <div id="pi-image"></div>
                    <p>Fue realizado con React y Redux para el front-end, con Express js para el back-end y con PostgreSQL para la base de datos!</p>
                </fieldset>
                <fieldset>
                    <legend>Huellitas de amor</legend>
                    <p>Este es el <a id="link_a" href="https://huellitas-de-amor.vercel.app" rel="noreferrer" target={"_blank"}>proyecto final</a> realizado en un grupo de 8 integrantes para la culminación del bootcamp de soyHenry.</p>
                    <p>se trata de una página en donde poder adoptar o dar en adopción animales, o en caso de no poder adoptar pero
                         querer ayudar también se puede hacer donaciones,
                         tanto de dinero como de insumos (comida, camas, medicinas, etc)</p>
                    <div id="pf-image"></div>
                    <p>Fue desarrollado con React, Redux Toolkit y Material UI para el front-end, con Express js, Nodejs y PostgreSQL para el back-end y base de datos respectivamente!</p>
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