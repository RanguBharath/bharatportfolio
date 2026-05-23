import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin, Briefcase } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 45 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }
  })
};

const stats = [
  { value: "8.17", label: "CGPA",          sub: "B.Tech · NIT AP" },
  { value: "5",    label: "Experiences",    sub: "1 Job · 4 Internships" },
  { value: "3+",   label: "Projects",       sub: "Civil Engineering" },
  { value: "3",    label: "Certifications", sub: "& Counting" },
];

const badges = [
  { text: "NIT Andhra Pradesh", pos: { top: "58px",   left: "-18px"  }, color: "#10B981",  bg: "rgba(16,185,129,0.08)",   border: "rgba(16,185,129,0.25)" },
  { text: "CGPA · 8.17 / 10",  pos: { top: "28px",   right: "-18px" }, color: "#34D399",  bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.25)" },
  { text: "GET @ Jindal Saw",   pos: { bottom: "90px",left: "-18px"  }, color: "#6EE7B7",  bg: "rgba(110,231,183,0.08)",   border: "rgba(110,231,183,0.25)" },
  { text: "Placement Coordinator", pos: { bottom: "62px",right: "-18px" }, color: "#059669",  bg: "rgba(5,150,105,0.08)", border: "rgba(5,150,105,0.25)" },
];

export default function Hero() {
  const fullText = "Bharath Kumar";
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index >= fullText.length) {
          clearInterval(intervalId);
          setIsTypingComplete(true);
        }
      }, 100);
      return () => clearInterval(intervalId);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--cream)" }}>

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-100 pointer-events-none" />

      {/* Cool blobs */}
      <div className="absolute top-[-8%] right-[-4%] w-[650px] h-[650px] rounded-full pointer-events-none animate-soft-pulse"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 65%)" }} />
      <div className="absolute bottom-[-4%] left-[-4%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)" }} />

      {/* Rising particles */}
      {[...Array(7)].map((_, i) => (
        <div key={i} className="absolute rounded-full animate-drift pointer-events-none"
          style={{
            width: `${2 + (i % 3)}px`, height: `${2 + (i % 3)}px`,
            left: `${8 + i * 13}%`, bottom: "-4px",
            background: i % 2 === 0 ? "rgba(52,211,153,0.5)" : "rgba(16,185,129,0.4)",
            animationDuration: `${10 + i * 2.2}s`,
            animationDelay: `${i * 1.8}s`,
            opacity: 0,
          }} />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-32 pb-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col max-w-2xl">

            {/* Tag */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="mb-7">
              <div className="section-tag whitespace-nowrap overflow-x-auto max-w-full no-scrollbar">
                Civil Eng · Structural · Geotechnical · Transportation · Concrete Technology
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp}
              className="font-black tracking-tight leading-[1.0] mb-3"
              style={{ fontSize: "clamp(3rem, 8vw, 5rem)", color: "var(--espresso)" }}>
              Rangu<br />
              <span className="text-gradient-sienna">{typedText || "\u200B"}</span>
              {!isTypingComplete && (
                <span className="inline-block w-[4px] h-[0.8em] bg-[#10B981] ml-2 align-middle animate-caret-blink" />
              )}
            </motion.h1>

            {/* Divider */}
            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}
              className="flex items-center gap-4 mb-7">
              <div className="h-px flex-1 max-w-[60px]" style={{ background: "#1F2937" }} />
              <div className="flex items-center gap-2" style={{ color: "#94A3B8" }}>
                <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: "#10B981" }} />
                <span className="text-sm font-medium">GET at Jindal Saw Ltd. Nashik</span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p custom={3} initial="hidden" animate="visible" variants={fadeUp}
              className="text-base leading-relaxed mb-10 max-w-[540px]"
              style={{ color: "#94A3B8", lineHeight: 1.8 }}>
              Civil Engineering graduate with strong academics and a disciplined work ethic, seeking
              opportunities to contribute to infrastructure development and construction projects.
              Committed to quick learning, teamwork, and delivering quality results while continuously
              improving technical and professional skills to support organizational growth.
            </motion.p>

            {/* CTAs */}
            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-wrap gap-4 mb-14">
              <button
                className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-2xl cursor-pointer"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Briefcase className="w-4 h-4" /> View My Work
              </button>
              <a
                href="/Updated Resume RBK.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-2xl cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp}>
              <div className="grid grid-cols-4 rounded-2xl overflow-hidden"
                style={{ border: "1px solid #1F2937", background: "#111827", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}>
                {stats.map((s, i) => (
                  <div key={i}
                    className="flex flex-col items-center py-5 px-3 text-center relative group"
                    style={{ borderRight: i < 3 ? "1px solid #1F2937" : "none" }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(16,185,129,0.04)" }} />
                    <span className="text-2xl font-black leading-none text-gradient-sienna"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.value}</span>
                    <span className="text-xs font-semibold mt-1.5" style={{ color: "var(--espresso)" }}>{s.label}</span>
                    <span className="text-[0.6rem] font-mono mt-0.5" style={{ color: "#34D399" }}>{s.sub}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT – photo ── */}
          <div className="flex items-center justify-center relative h-[540px] w-[440px] shrink-0 md:h-[440px] md:w-[360px] sm:h-[340px] sm:w-[280px]">

            {/* Outer dashed ring */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ opacity: { duration: 1, delay: 0.4 }, rotate: { duration: 35, repeat: Infinity, ease: "linear" } }}
              className="absolute w-[420px] h-[420px] rounded-full sm:w-[340px] sm:h-[340px] md:w-[360px] md:h-[360px]"
              style={{ border: "1px dashed rgba(52,211,153,0.3)" }}
            />
            {/* Inner ring */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: -360 }}
              transition={{ opacity: { duration: 1, delay: 0.6 }, rotate: { duration: 22, repeat: Infinity, ease: "linear" } }}
              className="absolute w-[348px] h-[348px] rounded-full sm:w-[278px] sm:h-[278px] md:w-[288px] md:h-[288px]"
              style={{ border: "1px dashed rgba(16,185,129,0.2)" }}
            />

            {/* Cool glow */}
            <div className="absolute w-[360px] h-[360px] rounded-full animate-soft-pulse sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px]"
              style={{ background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)" }} />

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[310px] h-[310px] rounded-full overflow-hidden z-10 sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px]"
              style={{
                border: "4px solid rgba(16,185,129,0.3)",
                boxShadow: "0 0 0 8px rgba(52,211,153,0.15), 0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              <img src="/images/profile pic.jpeg" alt="Rangu Bharath Kumar"
                className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 65%, rgba(11,15,25,0.2))" }} />
            </motion.div>

            {/* Floating badges */}
            {badges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 + i * 0.18 }}
                className="absolute z-20 px-4 py-2 rounded-full text-[0.65rem] font-semibold whitespace-nowrap block"
                style={{
                  ...b.pos, color: b.color, background: b.bg,
                  border: `1px solid ${b.border}`,
                  fontFamily: "'DM Mono', monospace",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 2px 12px rgba(15,23,42,0.04)",
                }}
              >
                {b.text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.25em", color: "#34D399", textTransform: "uppercase" }}>
            Scroll
          </span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.7 }}>
            <ArrowDown className="w-4 h-4" style={{ color: "#10B981" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
