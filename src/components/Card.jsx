import "./Card.css";

function Card({ icon: Icon, title, summary, onClick }) {
  return (
    <div className="card" onClick={onClick} role="button" tabIndex={0}>
      {Icon && (
        <div className="card-icon">
          <Icon />
        </div>
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-summary">{summary}</p>
      {onClick && <span className="card-cta">Learn More &rarr;</span>}
    </div>
  );
}

export default Card;
