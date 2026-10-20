import { education } from '../data';

const icons = [
  <svg key="0" viewBox="0 0 64 64" fill="none" stroke="#131313" strokeWidth=".8"><g transform="translate(32 32)">{[0, 30, 60, 90, 120, 150].map((r) => <ellipse key={r} rx="30" ry="6" transform={`rotate(${r})`} />)}</g></svg>,
  <svg key="1" viewBox="0 0 64 64" fill="none" stroke="#131313" strokeWidth=".8"><path d="M2 60 Q 24 58 30 10" /><path d="M2 60 Q 30 56 38 22" /><line x1="2" y1="60" x2="62" y2="60" /><line x1="30" y1="10" x2="30" y2="60" /><line x1="38" y1="22" x2="38" y2="60" /><line x1="46" y1="40" x2="46" y2="60" /><line x1="54" y1="50" x2="54" y2="60" /></svg>,
  <svg key="2" viewBox="0 0 64 64" fill="none" stroke="#131313" strokeWidth=".8"><circle cx="32" cy="32" r="28" /><ellipse cx="32" cy="32" rx="12" ry="28" /><ellipse cx="32" cy="32" rx="22" ry="28" /><line x1="4" y1="32" x2="60" y2="32" /><line x1="8" y1="18" x2="56" y2="18" /><line x1="8" y1="46" x2="56" y2="46" /></svg>,
];

const Education = () => (
  <section className="stack edu">
    <div className="panel head-row"><h2 data-reveal>Education</h2></div>
    <div className="grid3">
      {education.map((e, i) => (
        <div key={e.title} className={`cell${icons[i] ? '' : ' hatch'}`}>
          {icons[i]}
          <span className="caps small muted">{e.meta}</span>
          <h3 className="h3" data-reveal>{e.title}</h3>
          <p>{e.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
