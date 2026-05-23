import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }
  })
};

const certs = [
  {
    title: "Principles of Construction Management",
    issuer: "NPTEL", platform: "IIT / NPTEL Online",
    accent: "#10B981",
    logo: "/images/nptel-logo.png",
  },
  {
    title: "Mastering Structural Basics & Stability",
    issuer: "Civilera", platform: "Civilera Online Platform",
    accent: "#34D399",
    logo: "/images/civilera-logo.png",
  },
  {
    title: "Sustainable Engineering Concepts & Life Cycle Analysis",
    issuer: "NPTEL", platform: "IIT / NPTEL Online",
    accent: "#059669",
    logo: "/images/nptel-logo.png",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 relative" style={{ background: "var(--cream)" }}>
      <div className="section-rule absolute top-0 left-0 right-0" />
      <div className="line-pattern absolute inset-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="section-tag mb-5">Credentials</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--espresso)" }}>
            <span className="text-gradient-sienna">Certifications</span>
          </h2>
          <p className="mb-16 max-w-xl" style={{ color: "#94A3B8" }}>
            Professional development through verified online certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
              className="warm-card p-8 flex flex-col relative overflow-hidden"
              whileHover={{ y: -5, boxShadow: `0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px ${cert.accent}35` }}
              style={{ transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.accent}80, transparent)` }} />

              {/* Logo banner */}
              <div className="w-full h-16 rounded-xl overflow-hidden flex items-center justify-center mb-6 px-4"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #1F2937",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
                }}>
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="h-10 w-auto object-contain"
                />
              </div>

              {/* Verified badge */}
              <div className="flex items-center gap-2 mb-5">
                <ShieldCheck className="w-4 h-4" style={{ color: cert.accent }} />
                <span className="text-xs font-semibold" style={{ color: cert.accent, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>
                  Verified
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold leading-snug mb-3" style={{ color: "var(--espresso)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
                {cert.title}
              </h3>
              <p className="text-sm mb-2" style={{ color: "#94A3B8" }}>{cert.issuer}</p>
              <p className="text-xs mt-auto pt-4" style={{ color: "#94A3B8", fontFamily: "'DM Mono', monospace" }}>
                {cert.platform}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
