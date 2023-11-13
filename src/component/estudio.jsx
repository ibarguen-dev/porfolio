
const Estudio = ({name,university,time}) => {

    return(
        <>
                <h2>{name}</h2>
                <p>Universidad: <span>{university}</span></p>
                <p>Tiempo: <span>{time}</span></p>
        </>
    )

}


export default Estudio;