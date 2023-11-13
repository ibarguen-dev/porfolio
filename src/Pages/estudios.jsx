import { ESTUDIOS } from "../js/const.js";
import Estudio from "../Componente/estudio.jsx";
import '../css/estudios.css'
const Estudios = () => {

    return(
        <article className="articleEstudios">
            <h1>Estudios</h1>
            <section className="sectionstudios">
                {
                    ESTUDIOS.map((sk,index) => {

                        return(
                            <Estudio 
                            
                                key={index}
                                name={sk.name}
                                time={sk.time}
                                university={sk.university}
                            />
                        )
                    })
                }
            </section>
        </article>
    )

}



export default Estudios;