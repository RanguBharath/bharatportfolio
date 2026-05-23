import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Calendar, Building2 } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }
  })
};

const experiences = [
  {
    org: "Jindal Saw Ltd.",
    role: "Graduate Engineer Trainee",
    period: "06/2026 – Present",
    location: "Nashik, Maharashtra",
    logo: "/images/jindal-saw-ltd-logo-png_seeklogo-366281.png",
    accent: "#10B981",
    light: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.25)",
    videoBg: "/jindal-home.mp4",
    points: [
      "Supervise concrete pouring, reinforcement checking, and foundation construction for heavy manufacturing equipment",
      "Monitor structural steel fabrication and alignment of overhead gantry crane support systems on the shop floor",
      "Perform QA/QC testing on cementitious materials, grouts, and concrete mixes used for factory floor refurbishments",
      "Assist in surveying, earthwork planning, and site layout preparation for new plant expansion projects",
    ],
  }
];

const internships = [
  {
    org: "NHAI – PIU Warangal", role: "Highway Engineering Intern",
    period: "01/2026 – 05/2026", location: "Warangal",
    logo: "/images/nhai.jpeg",
    accent: "#10B981", light: "rgba(16,185,129,0.06)", border: "rgba(16,185,129,0.25)",
    points: [
      "Worked on the 4-Lane Access Controlled Greenfield Highway Project under PIU Warangal",
      "Assisted in site supervision and construction activities for highway infrastructure works",
      "Performed quality control procedures and ensured compliance with NHAI standards",
      "Handled project documentation and monitoring of ongoing highway construction",
    ],
  },
  {
    org: "CPWD – IIPE Campus", role: "Site Engineering Intern",
    period: "05/2025 – 06/2025", location: "Visakhapatnam",
    logo: "/images/CPWD.png",
    accent: "#34D399", light: "rgba(52,211,153,0.06)", border: "rgba(52,211,153,0.25)",
    points: [
      "Assisted in site execution for the IIPE permanent campus project",
      "Prepared Bar Bending Schedules (BBS) and detailed site documentation",
      "Observed material & concrete testing under government QA/QC practices",
    ],
  },
  {
    org: "Roads & Buildings Dept", role: "Civil Engineering Intern",
    period: "06/2025 – 07/2025", location: "Warangal, Telangana Govt",
    logo: "/images/roads and building .png",
    accent: "#059669", light: "rgba(5,150,105,0.06)", border: "rgba(5,150,105,0.25)",
    points: [
      "Worked on Warangal Multi Super Speciality Hospital project",
      "Performed reinforcement checking, shuttering & concreting supervision",
      "Conducted slump testing, observed safety procedures & daily monitoring",
    ],
  },
  {
    org: "NIT Warangal", role: "Research Intern",
    period: "06/2024 – 07/2024", location: "Warangal",
    logo: "/images/NITW.png",
    accent: "#6EE7B7", light: "rgba(110,231,183,0.06)", border: "rgba(110,231,183,0.25)",
    points: [
      "Researched soft soil improvement using Prefabricated Vertical Drains (PVDs)",
      "Conducted Direct Shear, UCS, and consolidation lab tests",
      "Field exposure to Standard Penetration Test (SPT) and report preparation",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative section-alt">
      <div className="dot-pattern absolute inset-0 opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="section-tag mb-5">Work Experience</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--espresso)" }}>
            Professional <span className="text-gradient-sienna">Journey</span>
          </h2>
          <p className="mb-16 max-w-2xl" style={{ color: "#94A3B8" }}>
            My professional career starting with my role as a Graduate Engineer Trainee, alongside technical internships in public infrastructure and research.
          </p>
        </motion.div>

        {/* ── PROFESSIONAL EXPERIENCE ── */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: "var(--espresso)", fontFamily: "'Cormorant Garamond', serif" }}>
            <span className="w-8 h-[2px]" style={{ backgroundColor: "#10B981" }} />
            Professional Experience
          </h3>
          
          <div className="relative pl-12 space-y-8">
            <div className="timeline-track" />

            {experiences.map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="relative">
                <div className="timeline-dot"
                  style={{ background: item.accent, boxShadow: `0 0 12px ${item.accent}50` }} />

                <div className="warm-card overflow-hidden relative" style={{ borderRadius: "18px" }}>
                  {item.videoBg && (
                    <video
                      src={item.videoBg}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      style={{ zIndex: 0, opacity: 0.12 }}
                    />
                  )}
                  {/* Top accent line */}
                  <div className="h-[3px] relative z-10"
                    style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 p-6 pb-5 relative z-10"
                    style={{ background: item.light, borderBottom: "1px solid #1F2937" }}>
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 p-2"
                      style={{ background: "#FFFFFF", border: `1px solid ${item.border}` }}>
                      <img src={item.logo} alt={item.org} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 className="w-3.5 h-3.5" style={{ color: item.accent }} />
                        <h3 className="text-lg font-bold" style={{ color: "var(--espresso)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}>
                          {item.org}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold" style={{ color: item.accent }}>{item.role}</p>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: item.accent }}>
                        <Calendar className="w-3.5 h-3.5" /> {item.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: "#94A3B8" }}>
                        <MapPin className="w-3.5 h-3.5" /> {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="px-6 py-5 relative z-10">
                    <ul className="space-y-3">
                      {item.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: item.accent }} />
                          <span style={{ color: "#94A3B8", lineHeight: 1.65 }}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── FIELD INTERNSHIPS ── */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: "var(--espresso)", fontFamily: "'Cormorant Garamond', serif" }}>
            <span className="w-8 h-[2px]" style={{ backgroundColor: "#10B981" }} />
            Field Internships
          </h3>

          <div className="relative pl-12 space-y-8">
            <div className="timeline-track" />

            {internships.map((item, i) => (
              <motion.div key={i} custom={i + 1} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="relative">
                <div className="timeline-dot"
                  style={{ background: item.accent, boxShadow: `0 0 12px ${item.accent}50` }} />

                <div className="warm-card overflow-hidden relative" style={{ borderRadius: "18px" }}>
                  {item.hasOwnProperty('videoBg') && item.videoBg && (
                    <video
                      src={item.videoBg}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      style={{ zIndex: 0, opacity: 0.12 }}
                    />
                  )}
                  {/* Top accent line */}
                  <div className="h-[3px] relative z-10"
                    style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 p-6 pb-5 relative z-10"
                    style={{ background: item.light, borderBottom: "1px solid #1F2937" }}>
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 p-2"
                      style={{ background: "#FFFFFF", border: `1px solid ${item.border}` }}>
                      <img src={item.logo} alt={item.org} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 className="w-3.5 h-3.5" style={{ color: item.accent }} />
                        <h3 className="text-lg font-bold" style={{ color: "var(--espresso)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}>
                          {item.org}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold" style={{ color: item.accent }}>{item.role}</p>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: item.accent }}>
                        <Calendar className="w-3.5 h-3.5" /> {item.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: "#94A3B8" }}>
                        <MapPin className="w-3.5 h-3.5" /> {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="px-6 py-5 relative z-10">
                    <ul className="space-y-3">
                      {item.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: item.accent }} />
                          <span style={{ color: "#94A3B8", lineHeight: 1.65 }}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
