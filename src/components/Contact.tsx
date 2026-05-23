import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import LogoMarquee from "./LogoMarquee";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }
  })
};

const contacts = [
  { icon: Mail,     label: "Email",    value: "rangubharathkumar18@gmail.com",                  href: "mailto:rangubharathkumar18@gmail.com" },
  { icon: Phone,    label: "Phone",    value: "+91 8179609217",                                href: "tel:+918179609217" },
  { icon: MapPin,   label: "Location", value: "Warangal, Telangana",                           href: null },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rangu-bharath-kumar-6a7540282", href: "https://linkedin.com/in/rangu-bharath-kumar-6a7540282" },
];

export default function Contact() {
  return (
    <footer id="contact" className="pt-28 pb-12 relative overflow-hidden section-alt">
      <div className="section-rule absolute top-0 left-0 right-0" />
      <div className="dot-pattern absolute inset-0 opacity-60 pointer-events-none" />

      {/* Contact Content Container */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Contact section */}
        <div className="max-w-xl mx-auto mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
            <div className="section-tag mb-5">Contact</div>
            <h2 className="font-black mb-4" style={{ color: "var(--espresso)", fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem" }}>
              Let's <span className="text-gradient-sienna">Build Something</span>
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: "#94A3B8" }}>
              Currently seeking opportunities in real-time infrastructure development.
              Available for immediate joining upon graduation in 2026.
            </p>

            {/* Contact details */}
            <div className="rounded-2xl p-6 space-y-4 mb-6"
              style={{ background: "#0B0F19", border: "1px solid #1F2937", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}>
              {contacts.map(({ icon: Icon, label, value, href }, i) => (
                <motion.div key={label} custom={i} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} variants={fadeUp}
                  className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                    <Icon className="w-4 h-4" style={{ color: "#10B981" }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "#34D399", fontFamily: "'DM Mono', monospace" }}>{label}</p>
                    {href
                      ? <a href={href} className="text-sm font-medium transition-colors"
                          style={{ color: "var(--espresso)" }}
                          onMouseEnter={e => (e.currentTarget.style.color = "#10B981")}
                          onMouseLeave={e => (e.currentTarget.style.color = "var(--espresso)")}>
                          {value}
                        </a>
                      : <p className="text-sm font-medium" style={{ color: "var(--espresso)" }}>{value}</p>
                    }
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="mailto:rangubharathkumar18@gmail.com"
              className="btn-primary px-6 py-3.5 rounded-2xl text-sm text-center block w-full">
              Send Email
            </a>
          </motion.div>
        </div>
      </div>

      {/* Full-width Logo Marquee Ticker */}
      <div className="relative z-10 mb-20 w-full">
        <LogoMarquee />
      </div>

      {/* Footer bar Container */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Footer bar */}
        <div className="section-rule mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2.5">
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.25rem", color: "#10B981" }}>
              RBK
            </span>
            <span className="w-px h-4" style={{ background: "#1F2937" }} />
            <span style={{ color: "#94A3B8" }}>© {new Date().getFullYear()} Rangu Bharath Kumar</span>
          </div>
          <span style={{ color: "#34D399", fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Engineered with precision.
          </span>
        </div>
      </div>
    </footer>
  );
}
