function ProjectCard({ className, mark, caption, link, h3, p }) {
  return (
    <a className={className} href={link} target="_blank" rel="noopener noreferrer">
      <div className="project-tile" aria-hidden="true">
        <span className="project-mark">{mark}</span>
        <span className="project-caption">{caption}</span>
      </div>
      <div className="project-body">
        <h3>{h3}</h3>
        <p>{p}</p>
        <span className="meta project-link" aria-hidden="true">
          View on GitHub <span>→</span>
        </span>
      </div>
    </a>
  );
}

export default ProjectCard;
