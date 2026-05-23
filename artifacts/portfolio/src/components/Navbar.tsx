import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "home",           label: "Home" },
  { href: "experience",     label: "Experience" },
  { href: "education",      label: "Education" },
  { href: "projects",       label: "Projects" },
  { href: "skills",         label: "Skills" },
  { href: "activities",     label: "Activities" },
  { href: "achievements",   label: "Achievements" },
  { href: "certifications", label: "Certs" },
  { href: "contact",        label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress }               = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(l => document.getElementById(l.href));
      const current = sections.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 130 && rect.bottom >= 130;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX, width: "100%" }} />



      {/* Main header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
        style={scrolled ? {
          background: "rgba(11, 15, 25, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid #1F2937",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        } : {}}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav("home")} className="flex items-center gap-2 shrink-0">
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "1.35rem",
              color: "#10B981",
              letterSpacing: "0.04em",
            }}>Hi,Iam Bharath</span>
            <span className="w-1 h-4 rounded-full" style={{ background: "#34D399" }} />
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.slice(0, -1).map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`nav-link px-4 py-2 rounded-lg ${activeSection === link.href ? "active" : ""}`}
                style={activeSection === link.href ? {
                  background: "rgba(16, 185, 129, 0.08)",
                  color: "#10B981",
                } : {}}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a href="mailto:rangubharathkumar18@gmail.com"
            className="hidden lg:block btn-primary px-5 py-2 rounded-xl text-xs shrink-0">
            Hire Me
          </a>

          {/* Mobile */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "#94A3B8" }}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(17, 24, 39, 0.97)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid #1F2937",
              }}
            >
              <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNav(link.href)}
                    className="text-left py-3 px-4 text-sm font-medium rounded-xl transition-all"
                    style={{
                      color: activeSection === link.href ? "#10B981" : "#94A3B8",
                      background: activeSection === link.href ? "rgba(16, 185, 129, 0.08)" : "transparent",
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <a href="mailto:rangubharathkumar18@gmail.com"
                  className="btn-primary px-5 py-3 rounded-xl text-sm text-center mt-2">
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
