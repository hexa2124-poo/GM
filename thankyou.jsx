import { useState, useEffect, useRef } from "react";

// ─── Utility ─────────────────────────────────────────────────────────────────
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ─── Framer-Motion-like hook (CSS-based fade-up) ──────────────────────────────
function useFadeUp(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    },
  };
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const HeadphonesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.15)" />
    <polygon points="10 8 16 12 10 16 10 8" fill="white" />
  </svg>
);
const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const InfinityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z" /><path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 5 2 2 0 0 1 3.59 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18z" />
  </svg>
);

// ─── Gradient text helper ─────────────────────────────────────────────────────
const GradientText = ({ children }) => (
  <span style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
    {children}
  </span>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function ThankYouPage() {
  const [downloadPulse, setDownloadPulse] = useState(false);
  const hero = useFadeUp(0);
  const trust = useFadeUp(100);
  const dlCard = useFadeUp(0);
  const learn = useFadeUp(0);
  const vid1 = useFadeUp(0);
  const vid2 = useFadeUp(80);
  const growth = useFadeUp(0);
  const support = useFadeUp(0);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif", background: "#DDF2FF", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Google font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        .btn-download:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(37,99,235,0.45) !important; }
        .btn-download:active { transform: translateY(0); }
        .btn-whatsapp:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(34,197,94,0.45) !important; }
        .video-card:hover { transform: translateY(-4px); }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes glow-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.4)} 50%{box-shadow:0 0 0 14px rgba(34,197,94,0)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .float-anim { animation: floatY 3.5s ease-in-out infinite; }
        .glow-wa { animation: glow-pulse 2.2s ease-in-out infinite; }
        .badge-shimmer { background: linear-gradient(135deg,rgba(37,99,235,0.1),rgba(124,58,237,0.1)); border: 1px solid rgba(37,99,235,0.2); backdrop-filter: blur(8px); }
      `}</style>

      {/* ── 1. HERO ── */}
      <section style={{ padding: "40px 16px 28px", textAlign: "center" }}>
        {/* Badge */}
        <div ref={hero.ref} style={hero.style}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", borderRadius: 100, marginBottom: 28, fontSize: 12, fontWeight: 600, color: "#2563EB", letterSpacing: "0.04em" }} className="badge-shimmer">
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px #22C55E" }} />
            Verified Purchase • Secure Download
          </div>

          {/* Success icon */}
          <div className="float-anim" style={{ width: 88, height: 88, margin: "0 auto 24px", borderRadius: "50%", background: "linear-gradient(135deg,#22C55E,#16a34a)", boxShadow: "0 0 0 16px rgba(34,197,94,0.12), 0 0 0 32px rgba(34,197,94,0.06)", padding: 20, color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CheckCircleIcon />
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: "clamp(26px, 7vw, 42px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.15, marginBottom: 14, letterSpacing: "-0.02em" }}>
            Thank You For Your{" "}
            <GradientText>Purchase</GradientText>{" "}🎉
          </h1>
          <p style={{ fontSize: "clamp(15px, 4vw, 18px)", color: "#334155", fontWeight: 600, marginBottom: 8 }}>
            Your Hexa Innovative Lead Extraction Tool is ready to download.
          </p>
          <p style={{ fontSize: "clamp(13px, 3.5vw, 15px)", color: "#64748B", fontWeight: 500 }}>
            Start generating thousands of local business leads in minutes.
          </p>
        </div>
      </section>

      {/* ── 2. TRUST ROW ── */}
      <section style={{ padding: "0 16px 28px" }}>
        <div ref={trust.ref} style={{ ...trust.style, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, maxWidth: 480, margin: "0 auto" }}>
          {[
            { icon: <InfinityIcon />, label: "Lifetime Access", color: "#2563EB" },
            { icon: <ShieldIcon />, label: "Secure & Verified", color: "#7C3AED" },
            { icon: <HeadphonesIcon />, label: "24/7 Support", color: "#22C55E" },
          ].map(({ icon, label, color }) => (
            <div key={label} style={{ background: "white", borderRadius: 16, padding: "14px 8px", textAlign: "center", boxShadow: "0 2px 12px rgba(8,16,40,0.07)" }}>
              <div style={{ width: 32, height: 32, margin: "0 auto 8px", color, padding: 4 }}>{icon}</div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#0F172A", lineHeight: 1.3 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. DOWNLOAD CARD ── */}
      <section style={{ padding: "0 16px 24px" }}>
        <div ref={dlCard.ref} style={{ ...dlCard.style, maxWidth: 480, margin: "0 auto", background: "white", borderRadius: 24, padding: "28px 22px", boxShadow: "0 8px 40px rgba(37,99,235,0.12), 0 2px 8px rgba(8,16,40,0.06)" }}>
          {/* Top badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 100, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", marginBottom: 16 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 5px #22C55E" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", letterSpacing: "0.04em" }}>Ready to Download</span>
          </div>

          <h2 style={{ fontSize: "clamp(20px, 5.5vw, 26px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Get Your Tool Instantly
          </h2>
          <p style={{ fontSize: 14, color: "#64748B", fontWeight: 500, lineHeight: 1.6, marginBottom: 24 }}>
            Click below to access your software instantly. The installer is secure and digitally verified.
          </p>

          {/* Download button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1q69X52cLvGZuOXGBSnseIZG9epzNyF7K"
            download
            className="btn-download"
            style={{
              textDecoration: "none",
              width: "100%",
              padding: "17px 24px",
              borderRadius: 24,
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(135deg, #2563EB 0%, #1d4ed8 60%, #7C3AED 100%)",
              color: "white",
              fontFamily: "inherit",
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: "-0.01em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              boxShadow: "0 8px 24px rgba(37,99,235,0.35)",
              transition: "all 0.25s ease",
            }}
          >
            <DownloadIcon />
            Download Tool Now
          </a>

          <p style={{ textAlign: "center", fontSize: 12, color: "#94A3B8", marginTop: 14, fontWeight: 500 }}>
            If download doesn't start,{" "}
            <a href="#support" style={{ color: "#2563EB", fontWeight: 600, textDecoration: "none" }}>contact support instantly.</a>
          </p>

          {/* Divider */}
          <div style={{ height: 1, background: "linear-gradient(90deg,transparent,#E2E8F0,transparent)", margin: "20px 0" }} />

          {/* Security pills */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {["SSL Encrypted", "Virus Scanned", "Instant Access"].map(t => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 600, color: "#475569", background: "#F1F5F9", padding: "5px 10px", borderRadius: 100 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. GET STARTED HEADING ── */}
      <section style={{ padding: "12px 16px 20px", textAlign: "center" }}>
        <div {...learn}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 100, background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.18)", marginBottom: 14 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.04em" }}>📹 Video Guides</span>
          </div>
          <h2 style={{ fontSize: "clamp(22px, 6vw, 32px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Watch & Learn in{" "}<GradientText>Minutes</GradientText>
          </h2>
          <p style={{ fontSize: 14, color: "#64748B", fontWeight: 500, maxWidth: 340, margin: "0 auto" }}>
            Quick onboarding videos to help you start extracting leads immediately.
          </p>
        </div>
      </section>

      {/* ── 5. VIDEO CARDS ── */}
      <section style={{ padding: "0 16px 28px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 480, margin: "0 auto" }}>
          {[
            { ref: vid1.ref, style: vid1.style, step: "Step 1", title: "How To Install The Tool", desc: "Get set up in under 5 minutes", color: "#2563EB", src: "https://www.youtube.com/embed/7DYSVBYZPjQ" },
            { ref: vid2.ref, style: vid2.style, step: "Step 2", title: "How To Extract Leads", desc: "Start generating leads instantly", color: "#7C3AED", src: "https://www.youtube.com/embed/yxlDV9w1yuc" },
          ].map(({ ref, style, step, title, desc, color, src }) => (
            <div key={step} ref={ref} className="video-card" style={{
              ...style,
              background: "linear-gradient(135deg, #081028 0%, #0f172a 50%, #1e1b4b 100%)",
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(8,16,40,0.25)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}>
              {/* Header */}
              <div style={{ padding: "18px 18px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ background: `linear-gradient(135deg,${color},${color}99)`, borderRadius: 10, padding: "5px 10px" }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: "white", letterSpacing: "0.05em" }}>{step}</span>
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 800, color: "white", letterSpacing: "-0.01em" }}>{title}</p>
                  <p style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>{desc}</p>
                </div>
              </div>
              {/* Video embed */}
              <div style={{ position: "relative", paddingBottom: "52%", background: "#000" }}>
                <iframe
                  src={src}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. GROWTH SECTION ── */}
      <section style={{ padding: "0 16px 24px" }}>
        <div ref={growth.ref} style={{ ...growth.style, maxWidth: 480, margin: "0 auto", background: "linear-gradient(135deg,#EFF6FF,#EDE9FE)", borderRadius: 24, padding: "30px 22px", textAlign: "center", boxShadow: "0 4px 20px rgba(37,99,235,0.1)" }}>
          <div style={{ width: 56, height: 56, margin: "0 auto 18px", borderRadius: 16, background: "linear-gradient(135deg,#2563EB,#7C3AED)", padding: 14, color: "white" }}>
            <RocketIcon />
          </div>
          <h2 style={{ fontSize: "clamp(20px, 5.5vw, 26px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 10 }}>
            Your Growth Starts Today 🚀
          </h2>
          <p style={{ fontSize: 14, color: "#475569", fontWeight: 500, lineHeight: 1.65, marginBottom: 20 }}>
            Use this tool smartly and grow your business with high-quality local leads.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 16px", borderRadius: 100, background: "white", boxShadow: "0 2px 12px rgba(37,99,235,0.12)" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB" }}>Built for scale</span>
            <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#CBD5E1" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED" }}>Trusted by 10,000+ marketers</span>
          </div>
        </div>
      </section>

      {/* ── 7. SUPPORT SECTION ── */}
      <section id="support" style={{ padding: "0 16px 48px" }}>
        <div ref={support.ref} style={{ ...support.style, maxWidth: 480, margin: "0 auto", background: "linear-gradient(135deg, #081028 0%, #0f172a 70%, #052e16 100%)", borderRadius: 24, padding: "28px 22px", boxShadow: "0 8px 40px rgba(8,16,40,0.3), 0 0 60px rgba(34,197,94,0.06)" }}>
          {/* Need help badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 100, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#22C55E", letterSpacing: "0.04em" }}>Need Help?</span>
          </div>

          <h2 style={{ fontSize: "clamp(22px, 6vw, 28px)", fontWeight: 800, color: "white", letterSpacing: "-0.02em", marginBottom: 8 }}>
            We're One Message Away
          </h2>
          <p style={{ fontSize: 14, color: "#94A3B8", fontWeight: 500, lineHeight: 1.65, marginBottom: 22 }}>
            Our support team is here to help you set up the tool and start generating leads today.
          </p>

          {/* Phone */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94A3B8" }}>
              <PhoneIcon />
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#64748B", fontWeight: 600, letterSpacing: "0.04em" }}>PHONE / WHATSAPP</p>
              <p style={{ fontSize: 16, color: "white", fontWeight: 700, letterSpacing: "0.01em" }}>+91 XXXXX XXXXX</p>
            </div>
          </div>

          {/* WhatsApp button */}
          <button
            className="btn-whatsapp glow-wa"
            style={{
              width: "100%",
              padding: "17px 24px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(135deg, #22C55E, #16a34a)",
              color: "white",
              fontFamily: "inherit",
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: "-0.01em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              boxShadow: "0 8px 24px rgba(34,197,94,0.3)",
              transition: "all 0.25s ease",
            }}
            onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")}
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </button>

          <p style={{ textAlign: "center", fontSize: 12, color: "#475569", marginTop: 14, fontWeight: 500 }}>
            Typical response time: <span style={{ color: "#22C55E", fontWeight: 700 }}>under 5 minutes</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <div style={{ textAlign: "center", paddingBottom: 32, paddingTop: 4 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#2563EB,#7C3AED)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 900, color: "white" }}>H</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 800, color: "#0F172A" }}>Hexa Innovative</span>
        </div>
        <p style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>© 2025 Hexa Innovative. All rights reserved.</p>
      </div>
    </div>
  );
}
