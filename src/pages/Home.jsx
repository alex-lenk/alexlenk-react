import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const Home = ({data}) => {
  document.title = data.browserTitle

  return (
    <div className="page__content container">
      <div className="home js-home">
        <div className="home__content">
          <div className="home__content-name">{data.aboveTitle}</div>

          <h1 className="home__content-title">{data.pageTitle}</h1>

          <div className="home__content-phrase">
            Пишу легкий, чистый
            <span className="home__content-decor">&lt;code&gt;</span>

            <div className="home__content-text" data-decor="// ">
              Чтобы ваш сайт работал быстро и&nbsp;на&nbsp;полную.
            </div>
          </div>

          <Link to="/portfolio" className="home__content-btn js-home__content-btn btn__primary btn">Портфолио</Link>
        </div>

        <aside className="home__card">
          <div className="home__card-top">
            <div className="home__card-projects">96 projects</div>
            <div className="home__card-info">1 455 commits</div>
          </div>

          <div className="home__card-container">
            <div className="home__card-code">
              <div className="code-tag">&#60;header&#62;</div>
              <div>
                &nbsp;&nbsp;<span className="code-tag">&#60;div id=</span><span className="code-id">&quot;coder&quot;</span><span className="code-tag">&#62;</span>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-tag">&#60;h1&#62;</span><span className="code-title"> Technology stack </span><span className="code-tag">&#60;/h1&#62;</span>
              </div>
              <div className="code-tag">&nbsp;&nbsp;&nbsp;&nbsp;&#60;ul&#62;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-tag">&#60;li&#62;</span> <span className="code-text">HTML</span> <span  className="code-tag">&#60;/li&#62;</span>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-tag">&#60;li&#62;</span> <span className="code-text">CSS</span> <span className="code-tag">&#60;/li&#62;</span>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-tag">&#60;li&#62;</span> <span className="code-text">JavaScript</span> <span className="code-tag">&#60;/li&#62;</span>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-tag">&#60;li&#62;</span> <span className="code-text">React.js</span> <span className="code-tag">&#60;/li&#62;</span>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-tag">&#60;li&#62;</span> <span className="code-text">Vue.js</span> <span className="code-tag">&#60;/li&#62;</span>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-tag">&#60;li&#62;</span> <span className="code-text">Node.js</span> <span className="code-tag">&#60;/li&#62;</span>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-tag">&#60;li&#62;</span> <span className="code-text">Webpack.js</span> <span className="code-tag">&#60;/li&#62;</span>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-tag">&#60;li&#62;</span> <span className="code-text">Gulp.js</span> <span className="code-tag">&#60;/li&#62;</span>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-tag">&#60;li&#62;</span> <span className="code-text">Git</span> <span className="code-tag">&#60;/li&#62;</span>
              </div>
              <div className="code-tag">&nbsp;&nbsp;&nbsp;&nbsp;&#60;/ul&#62;</div>
              <div className="code-tag">&nbsp;&nbsp;&#60;/div&#62;</div>
              <div className="code-tag">&#60;/header&#62;</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

Home.propTypes = {
  data: PropTypes.object,
}

export default Home
