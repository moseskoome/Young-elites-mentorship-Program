import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import eventsData from "../data/eventsData";
import "./Events.css";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <div className="event-meta">
        <span><FaCalendarAlt /> {event.date}</span>
        <span><FaClock /> {event.time}</span>
        <span><FaMapMarkerAlt /> {event.location}</span>
      </div>
      <p>{event.description}</p>
    </div>
  );
}

function Events() {
  return (
    <div className="events">
      <section className="page-header">
        <h1>Events</h1>
        <p>Stay updated on our mentorship sessions and community programs.</p>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          {eventsData.upcoming.length > 0 ? (
            <div className="events-list">
              {eventsData.upcoming.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          ) : (
            <div className="events-empty">
              <p>No upcoming events at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">Past Events</h2>
          <div className="events-list">
            {eventsData.past.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
