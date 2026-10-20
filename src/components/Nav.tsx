import { useRef, useState } from 'react';

const links = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#services' },
  { name: 'Experience', href: '#experience' },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const indicator = useRef<HTMLSpanElement>(null);

  const moveTo = (a: HTMLAnchorElement) => {
    const el = indicator.current;
    if (!el) return;
    el.style.transform = `translateX(${a.offsetLeft}px) scaleX(${a.offsetWidth / 100})`;
    el.style.opacity = '1';
  };
  const hide = () => indicator.current && (indicator.current.style.opacity = '0');

  return (
    <>
      <nav className="nav" aria-label="Main">
        <a className="logo" href="#">MES</a>
        <div className="links" onMouseLeave={hide}>
          {links.map((l) => (
            <a key={l.name} className="caps" href={l.href} onMouseEnter={(e) => moveTo(e.currentTarget)}>{l.name}</a>
          ))}
          <a className="caps cta" href="#contact" onMouseEnter={(e) => moveTo(e.currentTarget)}>
            <span className="t">Contact</span><span>→</span>
          </a>
          <span ref={indicator} className="indicator" aria-hidden="true" />
        </div>
        <button className="menu-btn caps" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>
      <div className={`mobile-menu${open ? ' open' : ''}`} id="mobile-menu">
        {links.map((l) => (
          <a key={l.name} href={l.href} onClick={() => setOpen(false)}>{l.name}</a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </>
  );
};

export default Nav;
