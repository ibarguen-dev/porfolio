import '../css/home.css'
const Home = () => {

    return(
        <article className='homeArticle'>
            <section>
                <h1>
                    Juan Esteban Torres  Ibarguen
                </h1>
                <p>
                    Desarrollador FULL-STACK junior
                </p>
                <section className='contenedorBotones'>
                    <a href="https://www.linkedin.com/in/juan-esteban-torres-ibarguen-0333b51b2/"><i className="bi bi-linkedin"></i> Linkedin</a>
                    <a href="https://github.com/ibarguen-dev"><i className="bi bi-github"></i> Github</a>
                    <a href="mailto:miduga@gmail.com"><i className="bi bi-envelope"></i> jt158161@gmail.com</a>
                </section>

            </section>
        </article>
    )

}


export default Home