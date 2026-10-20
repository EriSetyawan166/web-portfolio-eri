import { iconUrl, profile, skills } from '../data';

const Hero = () => {
  const run = skills.map((s) => (
    <span key={s.name} className="tk">
      {s.icon && <img src={iconUrl(s.icon, 'ecebe6')} alt="" width="16" height="16" loading="lazy" />}
      {s.name}
    </span>
  ));
  return (
    <>
      <section className="panel hero" id="home">
        <div className="guides" aria-hidden="true">{Array.from({ length: 7 }, (_, i) => <span key={i} />)}</div>
        <div className="meta caps">
          <span>{profile.role}</span>
          <span>{profile.location}</span>
          <span>Working since 2023</span>
        </div>
        <div className="intro">
          <div className="badge"><b data-count="2">2+</b><small>Years of<br />work experience</small></div>
          <div className="sequence caps">
            <div>Interface → API → Cluster</div>
            <div className="muted">Front end to deployment</div>
          </div>
          <div className="lead">
            <p>I'm Eri, a full-stack engineer at PT Infomedia Nusantara. I build AI voicebots and agent systems with React and NestJS, and deploy them on Kubernetes.</p>
            <div className="actions">
              <a className="btn caps" href="#work">See my work <span className="arrow">→</span></a>
              <a className="btn dark caps" href={profile.cv} target="_blank" rel="noopener noreferrer">Download CV <span className="arrow">↗</span></a>
            </div>
          </div>
        </div>
        <h1 className="title" data-fit data-reveal>
          <span className="ln"><span>Muhammad Eri</span></span>
          <span className="ln"><span>Setyawan</span></span>
        </h1>
        <div className="detail">
          <div className="tag"><span className="caps small">Bogor / Indonesia</span></div>
          <div className="art">
            <div className="wire">
              <svg viewBox="-100 -100 200 200" fill="none" stroke="#ecebe6" strokeWidth="1">
                <polygon points="0,-90 80,0 0,90 -80,0" />
                <polygon points="0,-60 52,0 0,60 -52,0" strokeDasharray="3 3" />
                <polygon points="0,-30 26,0 0,30 -26,0" />
                <line x1="0" y1="-90" x2="0" y2="90" /><line x1="-80" y1="0" x2="80" y2="0" />
                <line x1="0" y1="-90" x2="-26" y2="0" /><line x1="0" y1="90" x2="26" y2="0" />
              </svg>
            </div>
          </div>
          <div className="status">
            <h3>Right now</h3>
            <div className="caps small">
              <div className="leader-row"><span>Role</span><span className="dots" /><span>Full-stack engineer</span></div>
              <div className="leader-row"><span>Company</span><span className="dots" /><span>Infomedia</span></div>
              <div className="leader-row"><span>Focus</span><span className="dots" /><span>Voice AI & agents</span></div>
              <div className="leader-row"><span>Stack</span><span className="dots" /><span>React · NestJS · GKE</span></div>
            </div>
          </div>
        </div>
      </section>
      <div className="ticker" aria-label="Skills">
        <div className="marquee caps small">{run}{run}{run}</div>
      </div>
    </>
  );
};

export default Hero;
