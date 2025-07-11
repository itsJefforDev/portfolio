const TimelineItem = ({ title, description, date, institution, isLast }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-point"></div>
      <div className="timeline-content glassmorphic p-4 rounded mb-4">
        <h4>{title}</h4>
        <h5 className="text-muted">{institution}</h5>
        <p>{description}</p>
        <div className="timeline-date">{date}</div>
      </div>
      {!isLast && <div className="timeline-line"></div>}
    </div>
  );
};

export default TimelineItem;