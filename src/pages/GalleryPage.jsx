import '../styles/gallery.css';

const weldingPhotos = [
  ['IMG_2647.jpg', 'Shop weld', 'Welding a connection in the campus shop', 'Team member welding a steel connection in the shop'],
  ['IMG_2656.jpg', 'Truss on the benches', 'Looking down the length of a welded truss', 'Steel truss assembled on shop benches'],
  ['IMG_2660.jpg', 'Helmet up', 'Checking a weld along the top chord', 'Welder inspecting a truss after welding'],
  ['IMG_2664.jpg', 'Arc on the chord', 'Welding a diagonal into the truss', 'Welder joining a truss diagonal'],
  ['IMG_2669.jpg', 'Close weld', 'Sparks at a panel-point connection', 'Close-up of a weld at a truss joint'],
  ['IMG_3220.jpg', 'Fit and weld', 'Working inside the truss at the press', 'Welder fitting members inside a truss'],
  ['IMG_3222.jpg', 'Clamp and join', 'Holding alignment while the joint is welded', 'Welder clamping and welding a steel member'],
  ['IMG_3229.jpg', 'Inside the frame', 'Reaching a tight connection from the shop floor', 'Welder working on an interior truss connection'],
  ['IMG_6841.jpg', 'Paired chords', 'Two finished truss lines staged on the benches', 'Two welded steel trusses laid out in the shop'],
  ['IMG_6935.jpg', 'Layout table', 'A panel laid out with squares, magnets, and tools', 'Steel members and welding tools on a workbench'],
  ['IMG_7113.jpg', 'Bay door weld', 'Welding a truss with the shop door open', 'Welder working on a truss near the shop bay door'],
  ['IMG_8040.jpg', 'Side-by-side welds', 'Two welders working the same line at once', 'Two team members welding along a steel truss'],
];

const nationalsPhotos = [
  ['DSCF4565.jpg', 'Team huddle', 'Checking notes before the next move on the floor', 'SJSU Steel Bridge teammates gathered indoors at nationals'],
  ['DSCF4566.jpg', 'Display board', 'The San José State poster at ASCE Steel Bridge 2026', 'SJSU steel bridge competition display board'],
  ['DSCF4595.jpg', 'On the floor', 'A pause during layout and assembly', 'Team member smiling during bridge assembly at nationals'],
  ['DSCF4602.jpg', 'With the bridge', 'Three teammates at the SJSU truss', 'Three SJSU Steel Bridge members posing with the bridge'],
  ['DSCF4617.jpg', 'Staged span', 'The painted truss waiting on the competition floor', 'SJSU steel bridge on the nationals competition floor'],
  ['DSCF4620.jpg', 'Nameplate', 'San Jose State University cut into the end plate', 'SJSU steel bridge nameplate on the competition floor'],
  ['DSCF4664.jpg', 'Team portrait', 'The crew with the finished bridge', 'SJSU Steel Bridge team portrait at nationals'],
  ['DSCF4667.jpg', 'Along the span', 'The team gathered behind the nameplate', 'SJSU team posing along the steel bridge'],
  ['DSCF4671.jpg', 'After the build', 'A lighter moment once the bridge was together', 'SJSU teammates celebrating at nationals'],
  ['DSCF4723.jpg', 'Construction heat', 'Hard hats on, members staged for timed assembly', 'Team in hard hats preparing for timed construction'],
  ['IMG_0250.jpg', 'Timed assembly', 'The construction crew waiting on the floor', 'SJSU construction crew at the nationals assembly area'],
  ['IMG_0294.jpg', 'Awards banquet', 'The team at the Colorado School of Mines banquet', 'SJSU Steel Bridge team at the nationals banquet'],
  ['PXL_20260523_162114098.jpg', 'On the span', 'Watching construction from the floor rail', 'View of the nationals hall during bridge construction'],
];

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

function PhotoCard({ number, title, caption, src, alt, stamp, className = '' }) {
  return <article className={`gallery-card ${className}`}>
    {src ? <img src={src} alt={alt} loading="lazy" /> : <div className="gallery-empty"><span aria-hidden="true">＋</span><small>ADD PHOTO</small></div>}
    <div className="gallery-card-caption"><span className="number">{number} / {stamp}</span><h3>{title}</h3><p>{caption}</p></div>
  </article>;
}

function GallerySection({ index, titleId, title, intro, children }) {
  return <section className="gallery-section" aria-labelledby={titleId}>
    <div className="gallery-section-heading">
      <div><span className="section-index">{index}</span><h2 id={titleId}>{title}</h2></div>
      <p>{intro}</p>
    </div>
    {children}
  </section>;
}

function numbered(photos, folder) {
  return photos.map(([file, title, caption, alt], i) => ({
    number: String(i + 1).padStart(2, '0'),
    title,
    caption,
    alt,
    src: `/images/PrevComp/${folder}/${file}`,
  }));
}

export default function GalleryPage() {
  return <main id="gallery-main" className="wrap gallery-main">
    <GallerySection index="01 / ARCHIVE" titleId="welding-title" title="Welding" intro="Shop work from last season: layout, fit-up, and the welds that held the truss together.">
      <div className="gallery-grid">
        {numbered(weldingPhotos, 'Welding').map((photo) => (
          <PhotoCard key={photo.src} {...photo} stamp="ARCHIVE" />
        ))}
      </div>
    </GallerySection>

    <GallerySection index="02 / ARCHIVE" titleId="midpac-title" title="MidPac" intro="Regional competition photos are still being gathered. This section is a work in progress.">
      <div className="gallery-grid">
        <PhotoCard number="01" title="Photos coming soon" caption="MidPac shots will land here once they are sorted and added." stamp="WIP" />
      </div>
    </GallerySection>

    <GallerySection index="03 / ARCHIVE" titleId="nationals-title" title="Nationals" intro="The team, the bridge, and the floor at the national competition.">
      <div className="gallery-grid">
        {numbered(nationalsPhotos, 'Nationals').map((photo) => (
          <PhotoCard key={photo.src} {...photo} stamp="ARCHIVE" />
        ))}
      </div>
    </GallerySection>

    <GallerySection index="04 / IN PROGRESS" titleId="current-title" title="Current season" intro="Photos are arranged roughly in build order.">
      <div className="gallery-grid">
        {currentPhotos.map(([number, title, caption]) => (
          <PhotoCard key={number} number={number} title={title} caption={caption} stamp="2027" />
        ))}
      </div>
    </GallerySection>
  </main>;
}
