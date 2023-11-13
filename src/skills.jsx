import './css/skills.css';
import Skill from './skill.jsx';
import { ConstSkill } from './js/const.js';
const Skills = () => {

    return(
        <article className="articleSkills">
            <h1>SKILL</h1>
            <section className='articleSkills_section'>
                {
                    ConstSkill.map((sk,index) => {

                        return(

                            <Skill 
                                key={index}
                                level={sk.level}
                                name={sk.name}
                                porcentaje={sk.porcentaje}
                            />
                        )
                    })
                }
            </section>
        </article>
    )

}


export default Skills