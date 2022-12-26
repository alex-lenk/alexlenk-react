import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

const Experience = ({data}) => {
  useEffect(() => {
    document.title = data.browserTitle
  }, [])

  const work = data.work

  return (
    <div className="page__content container">
      <h1>{data.pageTitle}</h1>

      <section className="experience">
        <div className="experience__content">
          <div className="experience__content-section">
            <h2 className="text__white">{data.name}</h2>

            <div dangerouslySetInnerHTML={{__html: data.text}}>
            </div>
          </div>

          <h3 className="text__white">{data.overTitleWork}</h3>

          <ol className="experience__work list__un-styled">
            {Object.keys(work).map(instance =>
              <li key={work[instance]} className="experience__work-item">
                <div className="experience__work-title">{work[instance].title}</div>
                <div className="experience__work-date" dangerouslySetInnerHTML={{__html: work[instance].date}}>
                </div>
                <div className="experience__work-desk" dangerouslySetInnerHTML={{__html: work[instance].description}}>
                </div>
              </li>
            )}
          </ol>
        </div>

        <aside className="experience__side">
          <div className="experience__side-title">{data.aside.title}</div>

          <div className="experience__side-content">
            <div className="experience__side-num">{data.aside.projects}</div>
            <div className="experience__side-text" dangerouslySetInnerHTML={{__html: data.aside.text}}>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

Experience.propTypes = {
  data: PropTypes.object,
}

export default Experience
