import React from 'react'
import '../css/style.css'

const Experience = ({experience}) => {
    const renderWorkExp = experience => {
        return (
            Object.values(experience).map((aExp, aId) => (
                <tr key={aId}>
                    <td>{aExp.type}</td>
                    <td>{aExp.length}</td>
                    <td>{aExp.tasks.map((list, ind) => (
                        <div key={ind}>{list}</div>
                    ))}</td>
                </tr>
            ))
        )
    }

    return (
        <tbody>
            {renderWorkExp(experience)}
        </tbody>
    )
}

export default Experience