export function Placeholder({ children, className = '' }) {
  return <div className={`placeholder ${className}`}><span className="placeholder-icon" aria-hidden="true">＋</span><span>{children}</span></div>;
}

export function SectionHeading({ title, children, index }) {
  return <div className="section-heading"><div><span className="section-index">{index}</span><h2>{title}</h2></div><p>{children}</p></div>;
}

export function Cards({ items }) {
  return <div className="card-grid">{items.map(([number, title, text]) => <article className="card" key={title}><span className="number">{number}</span><h3>{title}</h3><p>[PLACEHOLDER: {text}]</p></article>)}</div>;
}
