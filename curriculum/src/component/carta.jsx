import '../css/carta.css'
import test from '../assets/test.jpg'
const Carta = ({img,title,info,link}) => {

    return(
        <section className="contenedorCarta">
            <div>
                <img src={img} alt={title} />
            </div>
            <div className='overlay'>
                <h1>{title}</h1>
                <p>{info}</p>
                <div>
                    <a href={link} target='blank'>visitar web</a>
                </div>
            </div>
        </section>
    )
}


export default Carta