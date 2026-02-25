import { useState } from "react";
import focusAreasData from "../data/focusAreasData";
import Card from "../components/Card";
import Modal from "../components/Modal";
import "./FocusAreas.css";

function FocusAreas() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="focus-areas">
      <section className="page-header">
        <h1>Focus Areas</h1>
        <p>The pillars of our mentorship program.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="focus-grid">
            {focusAreasData.map((area) => (
              <Card
                key={area.id}
                icon={area.icon}
                title={area.title}
                summary={area.summary}
                onClick={() => setSelected(area)}
              />
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        <p>{selected?.detail}</p>
      </Modal>
    </div>
  );
}

export default FocusAreas;
