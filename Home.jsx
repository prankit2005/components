import profile from "../assets/profile.png";

export default function Home() {
  return (
    <>
      {/* ===== NEON HOME CSS ===== */}
      <style>{`
        .home {
          width: 100%;
          min-height: calc(100vh - 80px);
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle at top, #020617, #000);
          padding: 40px 20px;
          animation: fadeIn 1s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .home-card {
          width: 100%;
          max-width: 1100px;
          padding: 50px;
          border-radius: 26px;
          display: flex;
          align-items: center;
          gap: 50px;
          background: rgba(15, 23, 42, 0.85);
          border: 2px solid rgba(56,189,248,0.4);
          box-shadow:
            0 0 20px rgba(56,189,248,0.3),
            0 0 60px rgba(139,92,246,0.25);
          animation: neonUp 1.2s ease forwards;
        }

        @keyframes neonUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* IMAGE */
        .home-img img {
          width: 240px;
          height: 240px;
          object-fit: cover;
          border-radius: 22px;
          border: 3px solid #38bdf8;
          box-shadow:
            0 0 20px #38bdf8,
            0 0 50px rgba(56,189,248,0.8);
          transition: 0.4s ease;
        }

        /* IMAGE HOVER NEON */
        .home-img img:hover {
          transform: scale(1.1);
          box-shadow:
            0 0 30px #38bdf8,
            0 0 80px #8b5cf6,
            0 0 120px rgba(236,72,153,0.7);
        }

        /* TEXT */
        .home-text h1 {
          font-size: 40px;
          margin-bottom: 8px;
          color: #fff;
          text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }

        .home-text h1 span {
          color: #38bdf8;
          text-shadow:
            0 0 10px #38bdf8,
            0 0 30px #8b5cf6;
        }

        .home-text h3 {
          font-size: 18px;
          margin-bottom: 18px;
          color: #a5b4fc;
          text-shadow: 0 0 10px rgba(165,180,252,0.6);
        }

        .home-text p {
          font-size: 19px;
          line-height: 2;
          color: #c7d2fe;
          max-width: 520px;
        }
          .hire-btn {
          margin-top: 25px;
          display: inline-block;
          padding: 12px 28px;
          border-radius: 30px;
          font-size: 15px;
          color: #fff;
          background: linear-gradient(45deg, #38bdf8, #8b5cf6);
          transition: 0.3s ease;}

        .hire-btn:hover {
        transform: scale(1.05);
        box-shadow:
          0 0 10px #38bdf8,
          0 0 30px #8b5cf6;
        }


        /* RESPONSIVE */
        @media (max-width: 900px) {
          .home-card {
            flex-direction: column;
            text-align: center;
            padding: 35px 25px;
          }

          .home-img img {
            width: 200px;
            height: 200px;
          }

          .home-text p {
            max-width: 100%;
          }
        }
      `}</style>

      {/* ===== HOME JSX ===== */}
      <section className="home" id="home">
        <div className="home-card">
          <div className="home-img">
            <img src={profile} alt="Prankit Yadav" />
          </div>

          <div className="home-text">
            <h1>
              I'm <span>Prankit Yadav</span>
            </h1>
            <h3>Web Developer</h3>
            <p>
              I am a passionate Web developer who loves creating
              modern, responsive and visually stunning web interfaces.
              I enjoy working with React and turning ideas into
              glowing digital experiences.
            </p>
            <a href="#contact" className="hire-btn">
              Hire Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}