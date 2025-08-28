import React, { useState } from "react";

const projectsData = [
  { title: "Finance", category: "Web development", image: "./assets/images/project-1.jpg", alt: "finance" },
  { title: "Orizon", category: "Web development", image: "./assets/images/project-2.png", alt: "orizon" },
  { title: "Fundo", category: "Web design", image: "./assets/images/project-3.jpg", alt: "fundo" },
  { title: "Brawlhalla", category: "Applications", image: "./assets/images/project-4.png", alt: "brawlhalla" },
  { title: "DSM.", category: "Web design", image: "./assets/images/project-5.png", alt: "dsm." },
  { title: "MetaSpark", category: "Web design", image: "./assets/images/project-6.png", alt: "metaspark" },
  { title: "Summary", category: "Web development", image: "./assets/images/project-7.png", alt: "summary" },
  { title: "Task Manager", category: "Applications", image: "./assets/images/project-8.jpg", alt: "task manager" },
  { title: "Arrival", category: "Web development", image: "./assets/images/project-9.png", alt: "arrival" },
];

function PortFolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = ["All", "Web design", "Applications", "Web development"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Filter Buttons (hidden on mobile by your CSS) */}
        <ul className="filter-list">
          {categories.map((cat) => (
            <li className="filter-item" key={cat}>
              <button
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => handleSelect(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* Custom Dropdown with existing CSS */}
        <div className="filter-select-box">
          <button
            className={`filter-select ${isDropdownOpen ? "active" : ""}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="select-value">{selectedCategory}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list" style={{ display: isDropdownOpen ? "block" : "" }}>
            {categories.map((cat) => (
              <li className="select-item" key={cat}>
                <button onClick={() => handleSelect(cat)}>{cat}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project List */}
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category.toLowerCase()}
              key={index}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default PortFolio;
