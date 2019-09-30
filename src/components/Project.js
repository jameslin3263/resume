import React from 'react'
import '../css/style.css'

const Project = ({project}) => {
    console.log(Object.values(project))

    const renderProjectDetail = (project) => {
        return (
            Object.values(project).map(aProject => (
                <tr>
                    <td>{aProject.id}</td>
                    <td>{aProject.skills.map(skill => (
                        <div>{skill}</div>
                    ))}</td>
                    <td>{aProject.description.map(aDescrip => (
                        <div>{aDescrip}</div>
                    ))}</td>
                    <td><a href={aProject.link !== '' ? aProject.link : ''}>{aProject.link}</a></td>
                </tr>
            ))
        )
    } 


    return (
        <tbody>
            {renderProjectDetail(project)}
        </tbody>
    )
}

export default Project