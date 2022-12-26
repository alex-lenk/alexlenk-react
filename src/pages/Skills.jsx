import React, {useEffect} from 'react'
import PropTypes from "prop-types";

const Skills = ({data}) => {
  useEffect(()=> {
    document.title = data.browserTitle
  }, [])

  return (
    <div className="page__content container">
      <h1>{data.pageTitle}</h1>

      <div className="skills">
        <ul className="skills__percent list__un-styled">
          <li className="skills__percent-item">100%</li>
          <li className="skills__percent-item">90%</li>
          <li className="skills__percent-item">80%</li>
          <li className="skills__percent-item">70%</li>
          <li className="skills__percent-item">60%</li>
          <li className="skills__percent-item">50%</li>
          <li className="skills__percent-item">40%</li>
          <li className="skills__percent-item">30%</li>
          <li className="skills__percent-item">20%</li>
          <li className="skills__percent-item">10%</li>
          <li className="skills__percent-item">0</li>
        </ul>

        <ol className="skills__info list__un-styled">
          <li className="skills__progress" style={{width: '45%',height: '45%'}}>
            <div className="skills__progress-text">React</div>
          </li>

          <li className="skills__progress" style={{width: '35%',height: '35%'}}>
            <div className="skills__progress-text">Vue</div>
          </li>

          <li className="skills__progress" style={{width: '45%',height: '45%'}}>
            <div className="skills__progress-text">Node</div>
          </li>

          <li className="skills__progress" style={{width: '65%',height: '65%'}}>
            <div className="skills__progress-text">JS</div>
          </li>

          <li className="skills__progress" style={{width: '70%',height: '70%'}}>
            <div className="skills__progress-text">Webpack</div>
          </li>

          <li className="skills__progress" style={{width: '80%',height: '80%'}}>
            <div className="skills__progress-text">Gulp</div>
          </li>

          <li className="skills__progress" style={{width: '85%',height: '85%'}}>
            <div className="skills__progress-text">Git</div>
          </li>

          <li className="skills__progress" style={{width: '90%',height: '90%'}}>
            <div className="skills__progress-text">CSS</div>
          </li>

          <li className="skills__progress" style={{width: '95%',height: '95%'}}>
            <div className="skills__progress-text">HTML</div>
          </li>
        </ol>
      </div>
    </div>
  )
}

Skills.propTypes = {
  data: PropTypes.object,
}

export default Skills
