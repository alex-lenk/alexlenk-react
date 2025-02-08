import cls from './card.module.scss';

const HomeCard = () => {
  return (
    <aside className={cls.card}>
      <div className={cls.top}>
        <div className={cls.projects}>96 projects</div>
        <div className={cls.info}>1 455 commits</div>
      </div>

      <div className={cls.container}>
        <div className={cls.code}>
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
  );
};

export default HomeCard;
