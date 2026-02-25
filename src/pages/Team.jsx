import { FaUserCircle } from "react-icons/fa";
import teamData from "../data/teamData";
import "./Team.css";

function Team() {
  return (
    <div className="team">
      <section className="page-header">
        <h1>Our Team</h1>
        <p>Meet the dedicated people behind Young Elites Mentorship.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-grid">
            {teamData.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-avatar">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <FaUserCircle />
                  )}
                </div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
