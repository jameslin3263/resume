import React from 'react'
import '../css/style.css'


const Language = (props) => {

    const renderLevel = ({ level }) => {
        return (
            level.map((aSection) => {
                // console.log(aSection)
                return (
                    <div className="language-level-section" key={`${level.indexOf(aSection)}`}>
                        {aSection}
                    </div>
                )
            })
        )
    }

    return (
        <div className="edu-cards">
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">語言: {props.language}</div>
                        <div className="description">
                        程度: {renderLevel(props)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Language