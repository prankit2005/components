import { useState } from "react";

export default function Projects() {
  const [active, setActive] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern neon portfolio built with React, smooth animations and responsive UI.",
      tech: ["React", "CSS", "JavaScript"],
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      live: "#",
      github: "#",
    },
    {
      title: "E-Commerce App",
      desc: "Shopping app with cart, filters and API based products using React.",
      tech: ["React", "API", "Tailwind"],
      img: "https://images.unsplash.com/photo-1557821552-17105176677c",
      live: "#",
      github: "#",
    },
    {
      title: "News App",
      desc: "Fast news app using public APIs with categories and clean UI.",
      tech: ["JavaScript", "API", "CSS"],
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      live: "#",
      github: "#",
    },
  ];

  return (
    <>
      {/* ===== CSS ===== */}
      <style>{`
        .projects {
          padding: 110px 20px;
          background: radial-gradient(circle at top, #020617, #000);
        }

        .projects-wrap {
          max-width: 1200px;
          margin: auto;
        }

        .projects h2 {
          text-align: center;
          font-size: 44px;
          color: #fff;
          margin-bottom: 70px;
        }

        .projects h2 span {
          color: #38bdf8;
          text-shadow: 0 0 15px #38bdf8, 0 0 40px #8b5cf6;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        /* ===== PROJECT CARD ===== */
        .project-card {
          background: rgba(15, 23, 42, 0.85);
          border-radius: 26px;
          overflow: hidden;
          border: 2px solid rgba(56,189,248,0.35);
          box-shadow: 0 0 20px rgba(56,189,248,0.25);
          transition: 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 0 30px #38bdf8, 0 0 80px rgba(139,92,246,0.7);
        }

        .project-img {
          position: relative;
          overflow: hidden;
        }

        .project-img img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: 0.6s ease;
        }

        .project-card:hover img {
          transform: scale(1.15);
        }

        /* ===== OVERLAY ===== */
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(2,6,23,0.95),
            rgba(2,6,23,0.3)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.4s;
        }

        .project-card:hover .overlay {
          opacity: 1;
        }

        .overlay button {
          padding: 12px 22px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          background: linear-gradient(45deg, #38bdf8, #8b5cf6);
          color: #020617;
          box-shadow: 0 0 20px rgba(56,189,248,0.8);
        }

        .project-content {
          padding: 22px;
        }

        .project-content h3 {
          color: #fff;
          margin-bottom: 8px;
        }

        .project-content p {
          font-size: 14px;
          color: #c7d2fe;
          line-height: 1.6;
        }

        /* ===== MODAL ===== */
        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          animation: fade 0.3s ease;
        }

        @keyframes fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal {
          position: relative;
          max-width: 750px;
          width: 92%;
          background: #020617;
          border-radius: 28px;
          padding: 35px;
          border: 2px solid rgba(56,189,248,0.45);
          box-shadow: 0 0 35px rgba(56,189,248,0.8);
          animation: zoom 0.35s ease;
        }

        @keyframes zoom {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .modal img {
          width: 100%;
          border-radius: 18px;
          margin-bottom: 22px;
        }

        .modal h3 {
          color: #fff;
          margin-bottom: 10px;
        }

        .modal p {
          color: #c7d2fe;
          margin-bottom: 22px;
        }

        .modal-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }

        .modal-tech span {
          padding: 6px 14px;
          font-size: 12px;
          border-radius: 20px;
          color: #38bdf8;
          border: 1px solid rgba(56,189,248,0.4);
          background: rgba(56,189,248,0.12);
        }

        .modal-links {
          display: flex;
          gap: 16px;
        }

        .modal-links a {
          flex: 1;
          padding: 12px;
          text-align: center;
          border-radius: 30px;
          font-weight: 700;
          text-decoration: none;
        }

        .live {
          background: linear-gradient(45deg, #38bdf8, #8b5cf6);
          color: #020617;
        }

        .github {
          border: 2px solid #38bdf8;
          color: #38bdf8;
        }

        .close {
          position: absolute;
          top: 18px;
          right: 22px;
          font-size: 22px;
          color: #fff;
          cursor: pointer;
        }
      `}</style>

      {/* ===== UI ===== */}
      <section className="projects" id="projects">
        <div className="projects-wrap">
          <h2>
            My <span>Projects</span>
          </h2>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className="project-card" key={i}>
                <div className="project-img">
                  <img src={p.img} alt={p.title} />
                  <div className="overlay">
                    <button onClick={() => setActive(p)}>
                      View Project
                    </button>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {active && (
        <div className="modal-bg" onClick={() => setActive(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="close" onClick={() => setActive(null)}>✖</div>
            <img src={active.img} alt={active.title} />
            <h3>{active.title}</h3>
            <p>{active.desc}</p>

            <div className="modal-tech">
              {active.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="modal-links">
              <a href={active.live} className="live">Live</a>
              <a href={active.github} className="github">GitHub</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
