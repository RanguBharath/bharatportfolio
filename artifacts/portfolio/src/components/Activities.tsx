import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }
  })
};

const activities = [
  {
    role: "Co-Ordinator & SPOC",
    org: "Training & Placement Cell",
    period: "01/2025 – 05/2026",
    status: "Completed",
    accent: "#10B981",
    icon: "🎯",
    logo: "/images/training and placement clum.jpeg",
    desc: "Coordinated with companies for campus recruitment, organized pre-placement talks, conducted mock drives, and assisted in placement preparation activities.",
  },
  {
    role: "Secretary",
    org: "Nature & Value Education Club",
    period: "07/2023 – 05/2026",
    status: "Completed",
    accent: "#34D399",
    icon: "🌿",
    logo: "/images/Nature Club.jpeg",
    desc: "Managed budgets, planned and executed events, coordinated teams, promoted activities, handled outreach, and developed leadership and communication skills.",
  },
  {
    role: "Joint Secretary",
    org: "Brindavanam Club",
    period: "08/2024 – 05/2026",
    status: "Completed",
    accent: "#059669",
    icon: "🌸",
    logo: "/images/BRindavan Club.jpeg",
    desc: "Planned and managed events, scheduled activities, and supervised execution. Promoted sustainability initiatives through student engagement.",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-28 relative section-alt">
      <div className="dot-pattern absolute inset-0 opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="section-tag mb-5">Leadership</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--espresso)" }}>
            Leadership &amp; <span className="text-gradient-sienna">Impact</span>
          </h2>
          <p className="mb-16 max-w-xl" style={{ color: "#94A3B8" }}>
            Leadership roles and active participation in campus organizations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((act, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
              className="warm-card p-6 flex flex-col relative overflow-hidden group"
              whileHover={{ y: -5, boxShadow: `0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px ${act.accent}40` }}
              style={{ transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
              {/* Top line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${act.accent}, transparent)` }} />

              {/* Logo + status */}
              <div className="flex items-start justify-between mb-5 pt-1">
                {act.logo ? (
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center shrink-0 p-1.5"
                    style={{ background: "#FFFFFF", boxShadow: "0 4px 16px rgba(0,0,0,0.3)", border: "1px solid #1F2937" }}>
                    <img src={act.logo} alt={act.org} className="w-full h-full object-contain rounded-lg" />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0"
                    style={{ background: `${act.accent}12`, border: `1px solid ${act.accent}30` }}>
                    {act.icon}
                  </div>
                )}
                <motion.span
                  className="text-xs px-2.5 py-1 rounded-full font-medium cursor-default"
                  style={{
                    color: act.accent,
                    background: `${act.accent}12`,
                    border: `1px solid ${act.accent}25`,
                    fontFamily: "'DM Mono', monospace",
                  }}
                  whileHover={{ scale: 1.05, background: `${act.accent}1f`, borderColor: act.accent, boxShadow: `0 4px 10px ${act.accent}15` }}
                  transition={{ duration: 0.2 }}
                >
                  {act.status}
                </motion.span>
              </div>

              {/* Role */}
              <h3 className="font-bold mb-1" style={{ color: "var(--espresso)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
                {act.role}
              </h3>
              <p className="text-sm font-semibold mb-1" style={{ color: act.accent }}>{act.org}</p>
              <p className="text-xs mb-4" style={{ color: "#94A3B8", fontFamily: "'DM Mono', monospace" }}>{act.period}</p>

              {/* Desc */}
              <p className="text-sm leading-relaxed mt-auto" style={{ color: "#94A3B8", lineHeight: 1.7 }}>{act.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
