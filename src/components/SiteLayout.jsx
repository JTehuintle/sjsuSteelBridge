import { Link, Outlet, useLocation } from 'react-router-dom';

const homeLinks = [['overview', 'Overview'], ['planning', 'Planning'], ['process', 'Process'], ['quality', 'Quality'], ['lessons', 'Lessons']];

function Brand({ footer = false }) {
  return <Link className={`brand${footer ? ' footer-brand' : ''}`} to="/" aria-label="SJSU Steel Bridge home">
    <span className="brand-mark"><img src="/images/sjsuLogo.webp" alt="" /></span>
    <span className="brand-name">SJSU <b>STEEL BRIDGE</b><small>FABRICATION / 2027</small></span>
  </Link>;
}

function Header({ gallery }) {
  return <header className={`site-header${gallery ? ' gallery-header' : ''}`} id="top">
    <nav className="nav wrap" aria-label="Primary navigation">
      <Brand />
      <div className="nav-links">
        {homeLinks.map(([id, label]) => <a key={id} href={gallery ? `/#${id}` : `#${id}`}>{label}</a>)}
        <Link className={gallery ? 'active' : ''} to="/gallery" aria-current={gallery ? 'page' : undefined}>Gallery</Link>
      </div>
    </nav>
    {gallery ? <div className="gallery-hero wrap"><span className="eyebrow"><i /> PHOTO JOURNAL / 2025—2027</span><h1>Built one step<br/><em>at a time.</em></h1><p>From last competition to this year’s workshop: follow the people, process, and progress behind the bridge.</p></div> : <div className="hero wrap">
      <div className="hero-copy"><span className="eyebrow"><i /> Lawrence F. Kruth Fabrication Award</span>
        <h1>Built by students.<br/><em>Made to perform.</em></h1>
        <p>Behind the scenes look at how San José State University turns steel stock into a competition ready bridge.</p>
        <div className="hero-actions"><a className="button button-gold" href="#process">Explore the process <span aria-hidden="true">↘</span></a><a className="text-link" href="#overview">Meet the project <span aria-hidden="true">→</span></a></div>
      </div>
      <div className="hero-art"><img className="hero-photo" src="/images/2025SB.jpg" alt="San José State Steel Bridge team project from 2025"/><div className="art-label">SJSU / SSBC<br/>FABRICATION LOG</div><span className="art-caption">01 — 09 <b>DESIGN TO DELIVERY</b></span></div>
    </div>}
    <div className="hero-bottom wrap"><span>{gallery ? 'SAN JOSÉ STATE UNIVERSITY' : 'San José State University'}</span><span>{gallery ? <>TEAM ARCHIVE <i>·</i> FIELD NOTES</> : <>STUDENT STEEL BRIDGE COMPETITION <i>·</i> 2027</>}</span></div>
  </header>;
}

function Footer({ gallery }) {
  return <footer><div className="footer-inner wrap"><Brand footer />{gallery ? <Link className="gallery-back" to="/">← Back to project</Link> : <span>Made by the team, for the next team. <b>↗</b></span>}<small>{gallery ? 'Fabrication documentation · San José State University' : 'Fabrication documentation '}</small></div></footer>;
}

export default function SiteLayout() {
  const gallery = useLocation().pathname === '/gallery';
  return <><a className="skip-link" href={gallery ? '#gallery-main' : '#main'}>{gallery ? 'Skip to gallery' : 'Skip to content'}</a><Header gallery={gallery}/><Outlet/><Footer gallery={gallery}/></>;
}
