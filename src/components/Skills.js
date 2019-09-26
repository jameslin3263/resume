import React from 'react'
import '../css/style.css'


const Skills = () => {
    return (
        <div>
            <div className="ui horizontal segments">
                <div className="ui segment">
                    <h3 className="ui header">Front-End</h3>
                    <p>JavaScript</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>React.js</p>
                    <p>jQuery</p>
                    <p>Semantic-UI</p>
                </div>
                <div className="ui segment">
                    <h3 className="ui header">Back-End</h3>
                    <p>Java</p>
                    <p>SQL</p>
                    <p>MySQL</p>
                </div>
                <div className="ui segment">
                    <h3 className="ui header">Others</h3>
                    <p>Git</p>
                    <p>Google Analytics</p>
                    <p>Google Data Studio</p>
                    <p>Chart.js</p>
                </div>
            </div>
        </div>
    )
}

export default Skills