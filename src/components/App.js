import React from 'react'
import '../css/style.css'
import Intorduction from './Introduction'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Language from './Language'
import Project from './Project'

const App = () => {
    return (
        <div className="ui container">
            <Intorduction />
            <h4 className="work-exp ui horizontal divider header">
                <i className="briefcase icon"></i>
                Work Experience
            </h4>
            <Experience />

            <h4 className="ui horizontal divider header">
                <i className="wrench icon"></i>
                Skills
            </h4>
            <Skills />

            <h4 className="ui horizontal divider header">
                <i className="tasks icon"></i>
                Project
            </h4>
            <Project />


            <h4 className="ui horizontal divider header">
                <i className="graduation cap icon"></i>
                Education
            </h4>

            <div className="edu-card-list">
                <Education school={"Newcastle University"} course={"MSc. Computer Science"} time={"2018/9-2019/9"} />
                <Education school={"Wuhan University"} course={"BSc. Web Communication"} time={"2011/9-2015/7"} />
            </div>
            <h4 className="ui horizontal divider header">
                <i className="book icon"></i>
                Language
            </h4>
            <div className="edu-card-list">
                <Language language={"English"} level={["IELTS Overall: 6.5", "Listening: 6.5 ", "Reading: 5.5 ", "Writing: 6.5", "Speaking: 7.0"]} />
                <Language language={"Japanese"} level={["Beginer"]} />
            </div>
        </div>
    )
}

export default App