import '../styles/gallery.css';

const currentPhotos = [
  ['01', 'Planning and design', 'Concept development, drawings, and team planning'],
  ['02', 'Material preparation', 'Steel stock selection, measuring, and layout'],
  ['03', 'Cutting and milling', 'Preparing each member to its planned dimensions'],
  ['04', 'Drilling and fitting', 'Hole layout, jigs, alignment, and fit checks'],
  ['05', 'Welding and finishing', 'Joining, surface preparation, and coating'],
  ['06', 'Quality checks', 'Dimensional checks and connection inspection'],
  ['07', 'Practice assembly', 'Putting the bridge together as a team'],
  ['08', 'Competition day', 'The finished bridge on the span'],
];

function PhotoCard({ number, title, caption, src, alt, className = '' }) {
  return <article className={`gallery-card ${className}`}>
    {src ? <img src={src} alt={alt} loading="lazy" /> : <div className="gallery-empty"><span aria-hidden="true">＋</span><small>ADD PHOTO</small></div>}
    <div className="gallery-card-caption"><span className="number">{number} / {src ? 'ARCHIVE' : '2027'}</span><h3>{title}</h3><p>{caption}</p></div>
  </article>;
}

export default function GalleryPage() {
  return <main id="gallery-main" className="wrap gallery-main">
    <section className="gallery-section" aria-labelledby="previous-title">
      <div className="gallery-section-heading">
        <div><span className="section-index">01 / ARCHIVE</span><h2 id="previous-title">Previous competition</h2></div>
        <p>A look back at the bridge and team from the last competition.</p>
      </div>
      <div className="previous-gallery">
        <PhotoCard number="2025" title="Competition bridge" caption="MidPac 2nd place & National 41st place" src="/images/2025SB.jpg" alt="SJSU Steel Bridge from the 2025 competition" className="previous-photo" />
      </div>
    </section>
    <section className="gallery-section" aria-labelledby="current-title">
      <div className="gallery-section-heading">
        <div><span className="section-index">02 / IN PROGRESS</span><h2 id="current-title">Current season</h2></div>
        <p>Photos are arranged roughly in build order.</p>
      </div>
      <div className="gallery-grid">
        {currentPhotos.map(([number, title, caption]) => (
          <PhotoCard key={number} number={number} title={title} caption={caption} />
        ))}
      </div>
    </section>
  </main>;
}
