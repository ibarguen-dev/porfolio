import PropTypes from 'prop-types';
import '../css/carta.css'
const Carta = ({img,title,info,buttonGithub,buttonWeb}) => {

    return(
        <article className='contenedor'>
            <strong>{title}</strong>
            <p>{info}</p>
            <section className="contenedorCarta">
                    <img src={img} alt={title} />
            </section>
            <section className='contenedorBotones'>
                <a className='' href={buttonGithub} ><span><i className="bi bi-github"></i></span>Ver codigo fuente</a>
                <a className='' href={buttonWeb}><span><i className="bi bi-globe"></i></span> Ir al sitio web</a>
            </section>


        </article>

    )
}

Carta.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    buttonGithub: PropTypes.string.isRequired,
    buttonWeb: PropTypes.string.isRequired,
  };
export default Carta