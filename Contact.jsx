import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wmi9wf8",
        "template_izj2flf",
        data,
        "OGdPosXGOuBtuU6wl"
      )
      .then(() => {
        setSuccess(true);
        setData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch(() => {
        alert("Something went wrong 😢");
      });
  };

  return (
    <>
      {/* ===== FONT AWESOME ===== */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      {/* ===== CSS ===== */}
      <style>{`
        .contact {
          min-height: 100vh;
          padding: 100px 20px;
          background: radial-gradient(circle at top, #020617, #000);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-card {
          max-width: 1100px;
          width: 100%;
          background: rgba(15, 23, 42, 0.9);
          border-radius: 28px;
          padding: 55px;
          border: 2px solid rgba(56,189,248,0.35);
          box-shadow: 0 0 25px rgba(56,189,248,0.35),
                      0 0 70px rgba(139,92,246,0.35);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          animation: fadeUp 1s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        h2 {
          font-size: 44px;
          color: #fff;
        }

        h2 span {
          color: #38bdf8;
          text-shadow: 0 0 15px #38bdf8, 0 0 40px #8b5cf6;
        }

        p {
          margin-top: 18px;
          font-size: 17px;
          line-height: 1.8;
          color: #c7d2fe;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        input, textarea {
          padding: 14px 18px;
          border-radius: 14px;
          border: 2px solid rgba(56,189,248,0.35);
          background: #020617;
          color: #e5e7eb;
          font-size: 15px;
          outline: none;
        }

        input:focus, textarea:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 12px rgba(56,189,248,0.6);
        }

        button {
          margin-top: 10px;
          padding: 14px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(45deg, #38bdf8, #8b5cf6);
          color: #020617;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 0 20px rgba(56,189,248,0.7);
        }

        button:hover {
          transform: scale(1.06);
          box-shadow: 0 0 30px #38bdf8, 0 0 60px #8b5cf6;
        }

        .success {
          margin-top: 18px;
          padding: 12px;
          border-radius: 14px;
          text-align: center;
          color: #22c55e;
          background: rgba(34,197,94,0.15);
          border: 1px solid rgba(34,197,94,0.4);
        }

        .socials {
          margin-top: 35px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .socials a {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #38bdf8;
          font-size: 15px;
          border: 1px solid rgba(56,189,248,0.4);
          padding: 10px 18px;
          border-radius: 30px;
          transition: 0.35s;
          background: rgba(2,6,23,0.7);
        }

        .socials a:hover {
          background: linear-gradient(45deg, #38bdf8, #8b5cf6);
          color: #020617;
          box-shadow: 0 0 20px #38bdf8, 0 0 40px #8b5cf6;
          transform: translateY(-3px);
        }

        /* ===== FLOATING WHATSAPP ===== */
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #25D366;
          color: #fff;
          padding: 16px 18px;
          border-radius: 50%;
          font-size: 26px;
          box-shadow: 0 0 20px #25D366;
          z-index: 999;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.7); }
          70% { box-shadow: 0 0 0 18px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
        }

        @media (max-width: 900px) {
          .contact-card {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .socials {
            justify-content: center;
          }
        }
      `}</style>

      {/* ===== UI ===== */}
      <section className="contact" id="contact">
        <div className="contact-card">
          <div>
            <h2>Contact <span>Me</span></h2>
            <p>
              Let’s build something amazing together.  
              Message me directly on WhatsApp 🚀
            </p>

            <div className="socials">
              <a href="https://github.com/" target="_blank"><i className="fab fa-github"></i> GitHub</a>
              <a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a>
              <a
                href="https://wa.me/919305366099?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project"
                target="_blank"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="https://www.facebook.com/share/1DCMpZeijm/" target="_blank"><i className="fab fa-facebook"></i> Facebook</a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" value={data.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your Email" value={data.email} onChange={handleChange} required />
            <textarea name="message" rows="5" placeholder="Your Message" value={data.message} onChange={handleChange} required />
            <button type="submit">Send Message 🚀</button>
            {success && <div className="success">Message sent successfully 🔥</div>}
          </form>
        </div>
      </section>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <a
        href="https://wa.me/919305366099?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}
