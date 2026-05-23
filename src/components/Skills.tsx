import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }
  })
};

const skills = [
  { name: "AutoCAD",  level: 85, category: "Design",       color: "#10B981" },
  { name: "SketchUp", level: 75, category: "Design",       color: "#10B981" },
  { name: "Revit",    level: 70, category: "BIM",          color: "#34D399" },
  { name: "Python",   level: 65, category: "Programming",  color: "#059669" },
  { name: "MS Office",level: 90, category: "Productivity", color: "#6EE7B7" },
];

const languages = [
  { name: "English", level: "Professional",   dot: "#10B981" },
  { name: "Telugu",  level: "Native",         dot: "#34D399" },
  { name: "Hindi",   level: "Conversational", dot: "#059669" },
];

const competencies = [
  "Structural Analysis", "Site Supervision", "QA/QC",
  "Geotechnical Testing", "Bar Bending Schedule", "Flood Mapping",
  "Construction Management", "Slump Testing", "Report Writing",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative" style={{ background: "var(--cream)" }}>
      <div className="line-pattern absolute inset-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="section-tag mb-5">Technical Proficiency</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--espresso)" }}>
            Technical <span className="text-gradient-sienna">Skills</span>
          </h2>
          <p className="mb-16 max-w-xl" style={{ color: "#94A3B8" }}>
            Software and tools used across design, analysis, and programming.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill bars */}
          <div className="space-y-7">
            {skills.map((skill, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-40px" }} variants={fadeUp}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm" style={{ color: "var(--espresso)" }}>{skill.name}</span>
                    <motion.span className="text-xs px-2 py-0.5 rounded-full cursor-default"
                      style={{ color: "#94A3B8", background: "var(--cream-2)", fontFamily: "'DM Mono', monospace" }}
                      whileHover={{ scale: 1.05, color: "#10B981", background: "rgba(16, 185, 129, 0.08)" }}
                      transition={{ duration: 0.2 }}>
                      {skill.category}
                    </motion.span>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: skill.color, fontFamily: "'DM Mono', monospace" }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                     initial={{ width: 0 }}
                     whileInView={{ width: `${skill.level}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.3, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                     className="skill-bar-fill"
                     style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div>
            {/* Languages */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
              className="mb-10">
              <h3 className="text-xl font-bold mb-6" style={{ color: "var(--espresso)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem" }}>
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-4 rounded-2xl"
                    style={{ background: "#111827", border: "1px solid #1F2937", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full animate-soft-pulse"
                        style={{ background: lang.dot, boxShadow: `0 0 6px ${lang.dot}80` }} />
                      <span className="font-semibold text-sm" style={{ color: "var(--espresso)" }}>{lang.name}</span>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: `${lang.dot}10`, color: lang.dot,
                        border: `1px solid ${lang.dot}25`,
                        fontFamily: "'DM Mono', monospace",
                      }}>
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core competencies */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp}>
              <h3 className="text-xl font-bold mb-6" style={{ color: "var(--espresso)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem" }}>
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {competencies.map(tag => (
                  <motion.span key={tag} className="px-3 py-1.5 rounded-lg text-xs font-medium cursor-default"
                    style={{
                      background: "#111827", color: "#10B981",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    }}
                    whileHover={{ y: -2, scale: 1.05, borderColor: "#10B981", background: "rgba(16, 185, 129, 0.08)", boxShadow: "0 6px 16px rgba(16, 185, 129, 0.15)" }}
                    transition={{ duration: 0.2 }}>
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
