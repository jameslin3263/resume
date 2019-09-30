import React from 'react'
import '../css/style.css'


const Skills = props => {
    const renderSkillList = ({list}) => {
        return (
            list.map((aSkill) => {
                return <p key={aSkill}>{aSkill}</p>
            })
        )
    }

    const renderSkill = (prop) => {
        return (prop.skillList.map(skill => {
            return (
                <div className="ui segment" key={skill.title}>
                    <h3 className="ui header">{skill.title}</h3>
                    {renderSkillList(skill)}
                </div>
            )}
        ))
    }

    return (
        <div className="ui blue segment">
            <div className="ui horizontal segments">
                {renderSkill(props)}
            </div>
        </div>
    )
}

export default Skills