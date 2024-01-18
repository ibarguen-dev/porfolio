import '../css/aplicaciones.css'
import { apps } from '../js/const.js'
import Carta from '../Componente/carta'
const Aplicaciones = () => {

        return(
            <article className="aplicacionesArticles">
                <section>
                    <h1> <span><i className="bi bi-code-slash"></i></span> Proyectos</h1>
                    <div className='contedorCartas'>
                        {
                            apps.map((mp,index) => {
                                return(
                                    <Carta 
                                    key={index}
                                    img={mp.img}
                                    title={mp.title}
                                    info={mp.info}
                                    buttonGithub={mp.buttonGithub}
                                    buttonWeb={mp.buttonWeb}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </article>
        )
}


export default Aplicaciones