import { Cards, Placeholder, SectionHeading } from '../components/Content.jsx';

const planningCards = [
  ['01 / PLAN', 'Work breakdown', 'Explain how members were grouped, assigned, scheduled, and tracked.'],
  ['02 / PLAN', 'Shop drawings', 'Add drawing examples, tolerances, connection details, and revision decisions.'],
  ['03 / PLAN', 'Materials and equipment', 'Describe steel, fasteners, machines, tools, and shop resources.'],
];

const qualityCards = [
  ['QC / 01', 'Dimensional checks', 'Describe measurements, templates, tolerances, and inspection records.'],
  ['QC / 02', 'Connection checks', 'Explain bolt holes, fit-up, welds, nuts, and visible connection requirements.'],
  ['QC / 03', 'Final review', 'Explain your final assembly, safety, and pre-competition inspection.'],
];

const processSteps = [
  ['Training and safety', 'Who trained the team? What PPE, procedures, and shop rules were used?'],
  ['Cutting and milling', 'Explain how raw steel was measured, cut, prepared, and labeled.'],
  ['Drilling and fitting', 'Explain hole layout, jigs, alignment, and fit-up checks.'],
  ['Welding and coating', 'Describe welding sequence, surface preparation, coating, and handling.'],
];

export default function HomePage() {
  return <main id="main" className="wrap main-content">
    <div className="stats" aria-label="Project facts"><div><strong>2027</strong><span>Competition year</span></div><div><strong>SJSU</strong><span>Student Steel Bridge team</span></div><div><strong>01 <i>—</i> 09</strong><span>Planning through final bridge</span></div></div>

    <section id="overview" className="content-section"><SectionHeading index="01" title="The project">Start with the team, the bridge concept, and the challenge you set out to solve.</SectionHeading><div className="overview-layout"><div><p className="lead">[PLACEHOLDER: Introduce your team and bridge. Explain the design concept, competition challenge, and what you wanted to improve from previous years.]</p><div className="fact-list"><p><span>01</span>[PLACEHOLDER: Bridge configuration]</p><p><span>02</span>[PLACEHOLDER: Team size and roles]</p><p><span>03</span>[PLACEHOLDER: Main fabrication goal]</p></div></div><Placeholder className="overview-image">Finished bridge or concept rendering</Placeholder></div></section>

    <section id="planning" className="content-section"><SectionHeading index="02" title="Plan the work">Show how the team turned the design into a fabrication plan people could follow.</SectionHeading><Cards items={planningCards}/></section>

    <section id="process" className="content-section"><SectionHeading index="03" title="Make it real">Walk through the shop work in order. Pair each step with photos, details, and the people behind it.</SectionHeading><div className="process-list">{processSteps.map(([title, text], i) => <article className="process-step" key={title}><span className="step-number">0{i+1}</span><div><h3>{title}</h3><p>[PLACEHOLDER: {text}]</p></div><span className="step-arrow" aria-hidden="true">↗</span></article>)}</div><div className="photo-grid"><Placeholder className="photo-large">Wide fabrication-shop photo</Placeholder><Placeholder>Cutting or milling</Placeholder><Placeholder>Drilling or fit-up</Placeholder></div></section>

    <section id="tools" className="content-section"><SectionHeading index="04" title="Tools and technology">Document the equipment and methods that shaped the build.</SectionHeading><div className="feature-panel"><Placeholder className="feature-image">CNC machine, robot, jig, or custom tool</Placeholder><div className="feature-copy"><span className="number">DIGITAL FABRICATION</span><h3>Precision takes a team.</h3><p>[PLACEHOLDER: Explain what equipment was used, why it was selected, and how it improved accuracy, repeatability, safety, or production time. If not applicable, describe the manual methods used instead.]</p></div></div></section>

    <section id="quality" className="content-section"><SectionHeading index="05" title="Check every connection">Show how you verified finished members against the design.</SectionHeading><Cards items={qualityCards}/></section>

    <section id="innovation" className="content-section"><SectionHeading index="06" title="Make a better way">Highlight a decision that made fabrication more accurate, efficient, safe, or sustainable.</SectionHeading><div className="innovation"><span className="innovation-star" aria-hidden="true">✳</span><div><span className="number">THE BREAKTHROUGH</span><h3>[PLACEHOLDER: Name your strongest fabrication innovation]</h3><p>[PLACEHOLDER: Explain the problem, the solution your team developed, and the result. Add a photo, sketch, or comparison when available.]</p></div></div></section>

    <section id="lessons" className="content-section"><SectionHeading index="07" title="Learn through the build">The best fabrication stories include the parts that didn’t go to plan.</SectionHeading><div className="lessons-layout"><Placeholder className="lesson-image">A challenge, rework, or lesson learned</Placeholder><article className="lesson-card"><span className="number">LESSON / 01</span><h3>What happened?</h3><p>[PLACEHOLDER: Describe the mistake or challenge honestly and briefly.]</p></article><article className="lesson-card"><span className="number">LESSON / 02</span><h3>What changed?</h3><p>[PLACEHOLDER: Explain the corrective action and what the team will do differently next time.]</p></article></div></section>

    <section id="final" className="content-section final-section"><SectionHeading index="08" title="Ready for the span">Close with the completed bridge and what it took to get there.</SectionHeading><Placeholder className="final-image">Final bridge portrait or competition-day photo</Placeholder><div className="closing-row"><p className="lead">[PLACEHOLDER: Reflect on the fabrication experience, the bridge’s final condition, and how the work prepared you for construction and load testing.]</p><div className="credits"><span className="number">WITH THANKS</span><h3>Team credits</h3><p>[PLACEHOLDER: List student members, faculty, technicians, shop staff, sponsors, and advisors who helped fabricate the bridge.]</p></div></div></section>
  </main>;
}
