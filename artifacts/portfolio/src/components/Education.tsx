import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }
  })
};

const education = [
  {
    school: "National Institute of Technology, Andhra Pradesh",
    degree: "B.Tech – Civil Engineering",
    period: "2022 – 2026", location: "Tadepalligudem",
    score: "8.17 CGPA", current: true,
    logo: "/images/NIT andhra pradesh.png",
    bgImage: "/images/Nit andhra back image.png",
    accent: "#10B981",
  },
  {
    school: "MJP Government Junior College",
    degree: "Intermediate (Class XII)",
    period: "2020 – 2022", location: "Warangal",
    score: "96.7%",
    logo: "/images/mjt jnr college.png",
    bgImage: "/images/MJT college back ground.jpeg",
    accent: "#34D399",
  },
  {
    school: "Navodaya High School",
    degree: "Secondary Education (Class X)",
    period: "2019 – 2020", location: "Warangal",
    score: "10 CGPA",
    logo: "/images/Navodaya high school.png",
    bgImage: "/images/Navodaya school background image .png",
    accent: "#059669",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative" style={{ background: "var(--cream)" }}>
      <div className="line-pattern absolute inset-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="section-tag mb-5">Academic Background</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--espresso)" }}>
            <span className="text-gradient-sienna">Education</span>
          </h2>
          <p className="mb-16 max-w-xl" style={{ color: "#94A3B8" }}>
            Consistently strong academic record from secondary school through engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
              className="relative rounded-2xl overflow-hidden flex flex-col group"
              style={{
                border: "1px solid #1F2937",
                minHeight: "420px",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
              }}
              whileHover={{ y: -6, boxShadow: `0 28px 56px rgba(0, 0, 0, 0.5), 0 0 0 1px ${edu.accent}40` }}
            >
              {/* Campus image */}
              <div className="absolute inset-0 z-0">
                <img src={edu.bgImage} alt={edu.school + " campus"}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(11, 15, 25, 0.45) 0%, rgba(11, 15, 25, 0.65) 40%, rgba(11, 15, 25, 0.88) 100%)" }} />
                <div className="absolute inset-0 opacity-30"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${edu.accent} 0%, transparent 70%)` }} />
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                style={{ background: `linear-gradient(90deg, ${edu.accent}, ${edu.accent}55, transparent)` }} />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-6">
                {/* Logo + current badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center shrink-0 p-1.5"
                    style={{ background: "#FFFFFF", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)" }}>
                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                  </div>
                  {edu.current && (
                    <motion.span
                      className="text-xs px-3 py-1 rounded-full font-semibold cursor-default"
                      style={{
                        fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em",
                        background: `${edu.accent}25`, color: "#FFFFFF",
                        border: `1px solid ${edu.accent}50`,
                      }}
                      whileHover={{ scale: 1.05, borderColor: edu.accent, boxShadow: `0 4px 10px ${edu.accent}20` }}
                      transition={{ duration: 0.2 }}
                    >
                      Current
                    </motion.span>
                  )}
                </div>

                {/* Score */}
                <div className="text-4xl font-black mt-2 mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#FFFFFF", letterSpacing: "-0.01em" }}>
                  {edu.score}
                </div>

                {/* School + degree */}
                <h3 className="font-bold text-base leading-snug mb-1"
                  style={{ color: "rgba(248,250,252,0.95)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
                  {edu.school}
                </h3>
                <p className="text-sm mb-1" style={{ color: "rgba(241,245,249,0.8)" }}>{edu.degree}</p>

                <div className="flex-grow" />

                {/* Footer */}
                <div className="mt-4 pt-4 flex items-center justify-between"
                  style={{ borderTop: `1px solid ${edu.accent}35` }}>
                  <span className="text-xs" style={{ color: "rgba(241,245,249,0.6)", fontFamily: "'DM Mono', monospace" }}>
                    {edu.location}
                  </span>
                  <motion.span
                    className="text-xs px-2.5 py-1 rounded-lg cursor-default"
                    style={{
                      background: `${edu.accent}20`, color: "#FFFFFF",
                      border: `1px solid ${edu.accent}30`,
                      fontFamily: "'DM Mono', monospace",
                    }}
                    whileHover={{ scale: 1.05, borderColor: edu.accent, boxShadow: `0 4px 10px ${edu.accent}15` }}
                    transition={{ duration: 0.2 }}
                  >
                    {edu.period}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
