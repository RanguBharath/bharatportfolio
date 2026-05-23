import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }
  })
};

const projects = [
  {
    title: "Flood Hazard Mapping",
    subtitle: "Lower Godavari Sub-Basin",
    period: "08/2025 – 04/2026",
    status: "Completed",
    statusColor: "#10B981",
    statusBg: "rgba(16,185,129,0.06)",
    statusBorder: "rgba(16,185,129,0.25)",
    accent: "#10B981",
    tags: ["GIS", "Hydrology", "Risk Assessment"],
    desc: "Performed GIS-based flood hazard analysis using rainfall, discharge and terrain data. Prepared flood-prone and inundation maps, identifying severity zones, and studying water-level variation and river behavior.",
    icon: "🗺️",
  },
  {
    title: "Sustainable Smart Parking",
    subtitle: "Tadepalligudem Urban Study",
    period: "01/2025 – 04/2025",
    status: "Completed",
    statusColor: "#34D399",
    statusBg: "rgba(52,211,153,0.06)",
    statusBorder: "rgba(52,211,153,0.25)",
    accent: "#34D399",
    tags: ["Traffic Eng.", "Urban Planning", "Surveys"],
    desc: "Conducted In–Out parking surveys near bus stand and shopping mall. Analyzed demand and congestion; suggested layout and management improvements to enhance circulation and reduce unauthorized parking.",
    icon: "🅿️",
  },
  {
    title: "Recycled Materials in Construction",
    subtitle: "Sustainable Development Study",
    period: "01/2024 – 04/2024",
    status: "Completed",
    statusColor: "#059669",
    statusBg: "rgba(5,150,105,0.06)",
    statusBorder: "rgba(5,150,105,0.25)",
    accent: "#059669",
    tags: ["Material Science", "Sustainability", "Lab Testing"],
    desc: "Studied the use of recycled Construction & Demolition waste in building applications. Performed lab testing to observe material performance and understood recycling processes and environmental advantages.",
    icon: "♻️",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative section-alt">
      <div className="section-rule absolute top-0 left-0 right-0" />
      <div className="section-rule absolute bottom-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="section-tag mb-5">Portfolio</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--espresso)" }}>
            Key <span className="text-gradient-sienna">Projects</span>
          </h2>
          <p className="mb-16 max-w-xl" style={{ color: "#94A3B8" }}>
            Applied civil engineering research across GIS analysis, urban planning, and sustainable construction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
              className="proj-card p-6 flex flex-col h-full">
              {/* Accent line */}
              <div className="proj-card-accent"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />

              {/* Icon + status */}
              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl">{p.icon}</span>
                <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    color: p.statusColor, background: p.statusBg, border: `1px solid ${p.statusBorder}`,
                    fontFamily: "'DM Mono', monospace",
                  }}>
                  {p.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-1" style={{ color: "var(--espresso)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}>
                {p.title}
              </h3>
              <p className="text-xs font-medium mb-3" style={{ color: p.accent, fontFamily: "'DM Mono', monospace" }}>
                {p.subtitle}
              </p>

              {/* Period */}
              <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: "#94A3B8" }}>
                <Calendar className="w-3.5 h-3.5" /> {p.period}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: "#94A3B8", lineHeight: 1.7 }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map(tag => (
                  <motion.span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg font-medium cursor-default"
                    style={{ background: `${p.accent}10`, color: p.accent, border: `1px solid ${p.accent}25` }}
                    whileHover={{ y: -2, scale: 1.05, background: `${p.accent}1e`, borderColor: p.accent, boxShadow: `0 4px 10px rgba(0, 0, 0, 0.15)` }}
                    transition={{ duration: 0.2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
