import React from 'react'
import '../css/style.css'
import Photo from '../img/photo.jpg'

const Introduction = () => {
    return (
        <div className="content">
            <div className="photo"><img src={Photo} alt="Photo" /></div>
            <div className="intro-content">
                <h2>林毓鈞</h2>
                <div className="info">
                <i className="large graduation cap icon"></i>
                    Newcastle University
                </div>
                <div className="info">
                <i className="large envelope icon"></i>
                    kinokojiang@hotmail.com
                </div>
                <div className="info">
                <i className="large phone icon"></i>
                    0978-026-256
                </div>
                <div className="info">
                    <i className="large github icon"></i>
                    <a href="https://github.com/jameslin3263">https://github.com/jameslin3263</a> 
                </div>
            </div>
            <p />
            <div className="intro">
                我剛結束Newcastle University 的MSc. Computer Science 科系，有大約一年半的實習經驗。
                由於在校期間前後端都有接觸到一些並且在實習期間有自學過一些前端相關的知識，平時也會參加一些線下的meetup
                跟線上workshop，目前正在通過線上教程來學習React.js。
            </div>
        </div>
    )
}

export default Introduction