import '../css/skill.css'

const Skill = ({level,name,porcentaje}) => {
    return(
        <div className="carta">
        <div className="percent" style={porcentaje}>
            <div className="dot"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
                <h2>{level}<span>%</span></h2>
                <p>{name}</p>
            </div>
        </div>
      </div>
    )

}


export default Skill