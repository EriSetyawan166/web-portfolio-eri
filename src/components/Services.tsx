import { useState } from 'react';
import { services } from '../data';

const Services = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="services" id="services">
      <div className="svc-left">
        <div className="bar caps small"><span>What I work on</span><span>&gt;&gt;&gt;&gt;&gt;&gt;&gt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span></div>
        <div className="content">
          <div>
            <h2 data-reveal>Skills</h2>
            <p>Most of my recent work is AI products: voice, agents and retrieval. Underneath that it's regular full-stack work, with React, NestJS and the deployment pipeline.</p>
          </div>
          <div className="menu" role="tablist">
            {services.map((s, i) => (
              <button key={s.title} role="tab" aria-selected={active === i} className={active === i ? 'active' : ''}
                onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}>
                <span>{s.short}</span><b>{s.title}</b><span>{s.side}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="svc-right">
        <div className="icon">
          <div className="wire">
            <svg viewBox="-100 -100 200 200" fill="none" stroke="#ecebe6" strokeWidth=".8">
              <circle r="90" /><ellipse rx="90" ry="30" /><ellipse rx="90" ry="62" /><ellipse rx="30" ry="90" /><ellipse rx="62" ry="90" /><line x1="0" y1="-90" x2="0" y2="90" />
            </svg>
          </div>
        </div>
        <div className="svc-detail">
          {services.map((s, i) => (
            <div key={s.title} className={`svc-item${active === i ? ' active' : ''}`} role="tabpanel" aria-hidden={active !== i}>
              <div className="head"><span className="caps small">{s.tag}</span><h3 className="h3">{s.title}</h3></div>
              <div className="points">
                {s.points.map((p) => <div key={p.h}><h4>{p.h}</h4><p>{p.p}</p></div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
