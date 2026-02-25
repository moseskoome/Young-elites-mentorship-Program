import { useState } from "react";
import galleryData from "../data/galleryData";
import Modal from "../components/Modal";
import "./Gallery.css";

const categories = ["All", ...new Set(galleryData.map((g) => g.category))];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((g) => g.category === activeCategory);

  return (
    <div className="gallery">
      <section className="page-header">
        <h1>Gallery</h1>
        <p>Moments from our mentorship sessions and community programs.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.image} alt={item.caption} loading="lazy" />
                <div className="gallery-overlay">
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.caption}
      >
        <img
          src={selectedImage?.image}
          alt={selectedImage?.caption}
          className="gallery-lightbox-img"
        />
        <p style={{ marginTop: "0.75rem", color: "#64748b", fontSize: "0.9rem" }}>
          Category: {selectedImage?.category}
        </p>
      </Modal>
    </div>
  );
}

export default Gallery;
