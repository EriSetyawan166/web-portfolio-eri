import photo from '../assets/muhammad_eri.jpeg';
import { places, profile } from '../data';

const About = () => {
  const row = [...places, ...places, ...places, ...places];
  return (
    <section className="panel about" id="about">
      <div className="top caps small"><span>Voice AI</span><span>Web platforms</span><span>Cloud deployment</span></div>
      <div className="panels">
        <div className="side">
          <div className="barcode" />
          <div className="cap caps small"><div>About me</div><div>Worked with</div></div>
        </div>
        <div className="center">
          <div className="card-wrap">
            <div className="card">
              <div className="media"><img src={photo} alt="Portrait of Muhammad Eri Setyawan" /></div>
              <div>
                <h2 data-reveal>I build the product<br />and the system<br />behind it.</h2>
                <p>I studied at Universitas Budi Luhur and went through Bangkit Academy's machine learning path. Since then I've worked on Android, Shopify, front-end and AI projects. I like owning a feature from the UI down to how it runs in production.</p>
                <a className="btn dark caps" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span className="arrow">↗</span></a>
              </div>
            </div>
          </div>
          <div className="clients">
            <div className="track">
              {row.map((p, i) => (
                <div className="logo-box caps small" key={i} title={p.name}>
                  {p.logo ? <img src={p.logo} alt={p.name} /> : <span>{p.name}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
