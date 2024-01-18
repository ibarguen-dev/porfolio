import PropTypes from 'prop-types';
import '../css/carta.css'
const Carta = ({img,title,info,link}) => {

    return(
        <article className='contenedor'>
            <strong>{title}</strong>
            <p>{info}</p>
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
        </article>

    )
}

Carta.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };
export default Carta