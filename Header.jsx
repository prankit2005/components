import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hide, setHide] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const HEADER_HEIGHT = 80;
  let lastScrollY = 0;

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      HEADER_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  /* ===== SCROLL + ACTIVE ===== */
  useEffect(() => {
    const sections = ["home", "skills", "projects", "contact"];

    const onScroll = () => {
      const currentY = window.scrollY;

      // hide / show header
      if (currentY > lastScrollY && currentY > 120) setHide(true);
      else setHide(false);
      lastScrollY = currentY;

      // active section
      const scrollPos = currentY + HEADER_HEIGHT + 60;
      sections.forEach((id) => {
        const sec = document.getElementById(id);
        if (!sec) return;

        if (
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          setActive(id);
        }
      });

      // progress bar
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;
      setProgress((currentY / total) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== CURSOR GLOW ===== */
  useEffect(() => {
    const move = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* ===== CSS ===== */}
      <style>{`
        

        .cursor-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle,
            rgba(56,189,248,0.35),
            rgba(139,92,246,0.15),
            transparent 70%
          );
          filter: blur(40px);
          z-index: 998;
        }

        .progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #38bdf8, #8b5cf6);
          width: ${progress}%;
          z-index: 1000;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background: rgba(2, 6, 23, 0.9);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(56,189,248,0.25);
          z-index: 999;
          display: flex;
          justify-content: center;
          transition: transform 0.35s ease;
        }

        .header.hide {
          transform: translateY(-100%);
        }

        .header-inner {
          width: 100%;
          max-width: 1200px;
          padding: 0 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 26px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
        }

        .logo span {
          color: #38bdf8;
          text-shadow: 0 0 10px #38bdf8;
        }

        .nav {
          display: flex;
          gap: 30px;
        }

        .nav button {
          background: none;
          border: none;
          color: #c7d2fe;
          font-size: 15px;
          cursor: pointer;
          position: relative;
        }

        .nav button.active {
          color: #fff;
        }

        .nav button::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #38bdf8, #8b5cf6);
          transition: 0.3s;
        }

        .nav button:hover::after,
        .nav button.active::after {
          width: 100%;
        }

        .hire {
          padding: 10px 22px;
          border-radius: 30px;
          background: linear-gradient(45deg, #38bdf8, #8b5cf6);
          color: #020617;
          font-weight: 600;
          border: none;
          cursor: pointer;
          box-shadow: 0 0 15px rgba(56,189,248,0.6);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
        }

        .hamburger span {
          width: 26px;
          height: 3px;
          background: #e5e7eb;
          border-radius: 5px;
        }

        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          background: rgba(2, 6, 23, 0.97);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          padding: 40px 0;
          z-index: 998;
        }

        .mobile-menu button {
          background: none;
          border: none;
          color: #e5e7eb;
          font-size: 18px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          body { cursor: auto; }
          .cursor-glow { display: none; }
          .nav { display: none; }
          .hamburger { display: flex; }
          .hire { display: none; }
        }
      `}</style>

      {/* ===== CURSOR GLOW ===== */}
      <div
        className="cursor-glow"
        style={{ left: cursor.x, top: cursor.y }}
      />

      {/* ===== PROGRESS BAR ===== */}
      <div className="progress" />

      {/* ===== HEADER ===== */}
      <header className={`header ${hide ? "hide" : ""}`}>
        <div className="header-inner">
          <div className="logo" onClick={() => scrollTo("home")}>
            Prankit<span>.</span>
          </div>

          <nav className="nav">
            {["home", "skills", "projects", "contact"].map((id) => (
              <button
                key={id}
                className={active === id ? "active" : ""}
                onClick={() => scrollTo(id)}
              >
                {id.toUpperCase()}
              </button>
            ))}
          </nav>

          <button className="hire" onClick={() => scrollTo("contact")}>
            Hire Me
          </button>

          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-menu">
          {["home", "skills", "projects", "contact"].map((id) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {id.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
