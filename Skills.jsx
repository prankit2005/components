import { useEffect, useRef } from "react";

export default function SkillsCircular() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const circles = sectionRef.current.querySelectorAll(".progress");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          circles.forEach((c) => c.classList.add("animate"));
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== CIRCULAR SKILLS CSS ===== */}
      <style>{`
        .skills-circular {
          width: 100%;
          padding: 100px 20px;
          background: radial-gradient(circle at top, #020617, #000);
          display: flex;
          justify-content: center;

          /* 🔥 IMPORTANT FIX FOR HEADER SCROLL */
          scroll-margin-top: 90px;
        }

        .skills-wrap {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }

        .skills-wrap h2 {
          font-size: 42px;
          color: #fff;
          margin-bottom: 10px;
        }

        .skills-wrap h2 span {
          color: #38bdf8;
          text-shadow: 0 0 15px #38bdf8, 0 0 35px #8b5cf6;
        }

        .skills-wrap p {
          color: #94a3b8;
          margin-bottom: 60px;
          font-size: 17px;
        }

        .circle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 40px;
        }

        .circle-card {
          background: rgba(15, 23, 42, 0.85);
          border-radius: 22px;
          padding: 30px 20px;
          border: 2px solid rgba(56,189,248,0.35);
          box-shadow:
            0 0 15px rgba(56,189,248,0.25),
            0 0 45px rgba(139,92,246,0.25);
          transition: 0.4s ease;
        }

        .circle-card:hover {
          transform: translateY(-10px);
          box-shadow:
            0 0 25px #38bdf8,
            0 0 70px rgba(139,92,246,0.7);
        }

        .circle {
          position: relative;
          width: 140px;
          height: 140px;
          margin: 0 auto 15px;
        }

        svg {
          width: 140px;
          height: 140px;
          transform: rotate(-90deg);
        }

        circle {
          fill: none;
          stroke-width: 12;
          stroke-linecap: round;
        }

        .bg {
          stroke: #020617;
        }

        .progress {
          stroke: url(#grad);
          stroke-dasharray: 440;
          stroke-dashoffset: 440;
          filter: drop-shadow(0 0 8px #38bdf8);
        }

        .progress.animate {
          animation: fill 1.6s ease forwards;
        }

        @keyframes fill {
          to {
            stroke-dashoffset: calc(440 - (440 * var(--percent)) / 100);
          }
        }

        .percent-text {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 700;
          color: #e5e7eb;
        }

        .skill-name {
          font-size: 16px;
          font-weight: 600;
          color: #c7d2fe;
        }

        @media (max-width: 768px) {
          .skills-wrap h2 {
            font-size: 34px;
          }
        }
      `}</style>

      {/* ===== SKILLS SECTION (ID FIXED) ===== */}
      <section
        className="skills-circular"
        id="skills"          
        ref={sectionRef}
      >
        <div className="skills-wrap">
          <h2>
            My <span>Skills</span>
          </h2>
          <p>Circular progress with neon glow</p>

          <div className="circle-grid">
            {[
              { name: "HTML", val: 90 },
              { name: "CSS", val: 85 },
              { name: "JavaScript", val: 80 },
              { name: "React", val: 75 },
              { name: "Git & GitHub", val: 75 },
            ].map((s) => (
              <div className="circle-card" key={s.name}>
                <div className="circle">
                  <svg>
                    <defs>
                      <linearGradient
                        id="grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>

                    <circle className="bg" cx="70" cy="70" r="58" />
                    <circle
                      className="progress"
                      cx="70"
                      cy="70"
                      r="58"
                      style={{ "--percent": s.val }}
                    />
                  </svg>
                  <div className="percent-text">{s.val}%</div>
                </div>
                <div className="skill-name">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
