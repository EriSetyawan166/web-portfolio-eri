import { profile } from '../data';

const Footer = () => (
  <footer>
    <div className="top">
      <div className="cta">
        <div>
          <h2 data-reveal>Thanks for<br />stopping by</h2>
          <p className="small">This site is built with React and Vite and hosted on GitHub Pages.</p>
        </div>
        <div><a className="btn caps" href={profile.cv} target="_blank" rel="noopener noreferrer">Download CV <span className="arrow">↗</span></a></div>
      </div>
      <div className="flinks">
        <a href="#work">Work</a><a href="#about">About</a><a href="#services">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
      </div>
      <div className="fcontact caps small">
        <div><div className="muted">GitHub</div><a className="val" href={profile.github} target="_blank" rel="noopener noreferrer">EriSetyawan166</a></div>
        <div><div className="muted">LinkedIn</div><a className="val" href={profile.linkedin} target="_blank" rel="noopener noreferrer">erisetyawan</a></div>
        <div><div className="muted">Email</div><a className="val" href={`mailto:${profile.email}`}>{profile.email}</a></div>
      </div>
    </div>
    <div className="wordmark"><span data-fit-footer>Eri Setyawan</span></div>
    <div className="bottom caps small">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <div className="legal">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
