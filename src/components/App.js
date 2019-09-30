import React from 'react'
import '../css/style.css'
import reducers from './reducers'

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
            <div className="ui teal segment">
                <table className="ui celled table">
                <thead>
                    <tr>
                        <th className="two wide column">Type</th>
                        <th className="four wide column">Length</th>
                        <th>Tasks</th>
                    </tr>
                </thead>
                    <Experience experience={reducers.experience} />
                </table>
            </div>

            <h4 className="ui horizontal divider header">
                <i className="wrench icon"></i>
                Skills
            </h4>
            <Skills skillList={reducers.skills} />

            <h4 className="ui horizontal divider header">
                <i className="tasks icon"></i>
                Project
            </h4>
            <div className="ui orange segment">
                <table className="ui celled table">
                <thead>
                    <tr>
                        <th className="four wide column">Project Name</th>
                        <th className="two wide column">Skills</th>
                        <th>Description</th>
                        <th className="four wide column">Link</th>
                    </tr>
                </thead>
                    <Project project={reducers.project}/>
                </table>
            </div>

            <div className="ui segment">
                <div className="seg">
                    <div className="edu-seg ui segment">
                        <h4 className="ui horizontal divider header">
                            <i className="graduation cap icon"></i>
                            Education
                        </h4>
                        <div className="edu-card-list ui yellow segment">
                            <Education school={reducers.education.msc.school} course={reducers.education.msc.course} time={reducers.education.msc.time} />
                            <Education school={reducers.education.bsc.school} course={reducers.education.bsc.course} time={reducers.education.bsc.time} />
                        </div>
                    </div>
                    <div className="edu-seg ui segment" style={{margin:'0'}}>
                        <h4 className="ui horizontal divider header">
                            <i className="book icon"></i>
                            Language
                        </h4>
                        <div className="edu-card-list ui red segment">
                            <Language language={reducers.languageLevel.English.id} level={reducers.languageLevel.English.level} />
                            <Language language={reducers.languageLevel.Japanese.id} level={reducers.languageLevel.Japanese.level} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App