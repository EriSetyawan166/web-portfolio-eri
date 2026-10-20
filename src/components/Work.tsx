import { profile, projects } from '../data';

const Work = () => (
  <section className="stack" id="work">
    <div className="panel head-row">
      <div>
        <h2 data-reveal>Selected work</h2>
        <p className="small">Work projects and side projects from the last few years. Some are internal, so there's no public link.</p>
      </div>
      <a className="btn dark caps" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span className="arrow">↗</span></a>
    </div>
    <div className="grid3">
      {projects.map((p) => {
        const body = (
          <>
            <div className="img">
              {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                : <div className="ph pattern"><span className="ph-label">{p.title}</span></div>}
            </div>
            <div className="content">
              <div className="metaline"><span>{p.category}</span><span>{p.year}</span></div>
              <h3 className="h4" data-reveal>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
            {p.url ? <div className="foot"><span className="link-arrow">Visit site <i>↗</i></span></div>
              : <div className="foot none"><span>Not public</span></div>}
          </>
        );
        return p.url
          ? <a key={p.title} className="card" href={p.url} target="_blank" rel="noopener noreferrer">{body}</a>
          : <article key={p.title} className="card">{body}</article>;
      })}
    </div>
  </section>
);

export default Work;
