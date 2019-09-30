import React from 'react'
import '../css/style.css'

const Project = ({project}) => {
    const renderProjectDetail = (project) => {
        return (
            Object.values(project).map((aProject, pId) => (
                <tr key={pId}>
                    <td>{aProject.id}</td>
                    <td>{aProject.skills.map((skill, indx) => (
                        <div key={indx}>{skill}</div>
                    ))}</td>
                    <td>{aProject.description.map((aDescrip, indx) => (
                        <div key={indx}>{aDescrip}</div>
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