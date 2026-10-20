import { useEffect, useRef, useState } from 'react';
import { duration, experience, profile } from '../data';

// Sticky card that steps through roles as the section scrolls past
const Experience = () => {
  const track = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = track.current;
      if (!el) return;
      const r = el.getBoundingClientRect(), total = r.height - innerHeight;
      const p = Math.min(0.999, Math.max(0, -r.top / total));
      setProgress(p);
      setStep(Math.floor(p * experience.length));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // jump the page so the chosen role becomes the active step
  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + scrollY, total = el.offsetHeight - innerHeight;
    scrollTo({ top: top + total * ((i + 0.5) / experience.length), behavior: 'smooth' });
  };

  return (
    <section className="panel" id="experience">
      <div className="panel head-row">
        <div><h2 data-reveal>Experience</h2><p className="small">Five roles since 2022, newest first. Scroll through, or pick one below the card.</p></div>
      </div>
      <div className="process" ref={track} style={{ ['--steps' as string]: experience.length }}>
        <div className="sticky">
          <div className={`pcard${step === 0 ? ' is-accent' : ''}`}>
            <div className="pstage">
              {experience.map((e, i) => (
                <article key={e.period} className={`pstep${i === step ? ' active' : ''}`} aria-hidden={i !== step}>
                  <span className="pindex" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <div className="left">
                    <div className="plogo"><img src={e.logo} alt={e.company} /></div>
                    <div className="pmeta caps small">
                      <div><span>Period</span><b>{e.period}</b></div>
                      <div><span>Length</span><b>{duration(e.start, e.end)}</b></div>
                      <div><span>Where</span><b>{e.company} · {e.place}</b></div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="eyebrow caps">{e.tags.map((t) => <span key={t}><i>◉</i> {t}</span>)}</div>
                    <h2>{e.role}</h2>
                    <p>{e.text}</p>
                    <div className="phigh">
                      {e.highlights.map((h) => <div key={h.v}><b>{h.k}</b><span>{h.v}</span></div>)}
                    </div>
                    <div className="chips">{e.chips.map((c) => <span key={c}>{c}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
            <div className="ptimeline" role="tablist" aria-label="Roles">
              <span className="pbar" style={{ transform: `scaleX(${progress})` }} />
              {experience.map((e, i) => (
                <button key={e.period} role="tab" aria-selected={i === step} className={i === step ? 'on' : ''} onClick={() => goTo(i)}>
                  <span className="caps small">{String(i + 1).padStart(2, '0')}</span>
                  <b className="caps small">{e.short}</b>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="process-more">
        <a className="btn dark caps" href={profile.cv} target="_blank" rel="noopener noreferrer">Full CV <span className="arrow">↗</span></a>
      </div>
    </section>
  );
};

export default Experience;
