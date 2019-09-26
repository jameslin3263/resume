import React from 'react'
import '../css/style.css'


const Education = (props) => {
    return (
        <div className="edu-cards">
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">學校: {props.school}</div>
                        <div className="meta">時間: {props.time}</div>
                        <div className="description">
                        科系: {props.course}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education