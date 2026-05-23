import { motion } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 relative section-alt">
      {/* Visual background patterns */}
      <div className="dot-pattern absolute inset-0 opacity-60 pointer-events-none" />
      <div className="line-pattern absolute inset-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="section-tag mb-5 mauve">Key Milestones</div>
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: "var(--espresso)" }}>
            <span className="text-gradient-sienna">Achievements</span>
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed text-sm" style={{ color: "#94A3B8" }}>
            Sharing milestones, professional growth, and key project updates with the community on LinkedIn.
          </p>
        </motion.div>

        {/* Both posts in grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* Post 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="w-full flex flex-col items-center"
          >
            <div className="w-full max-w-[504px] overflow-hidden rounded-2xl shadow-2xl bg-white" style={{ height: "1068px" }}>
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7455284946568605696"
                height="1068"
                width="100%"
                frameBorder="0"
                allowFullScreen={true}
                title="Embedded post 1"
                className="w-full block animate-fade-in-up"
                style={{ border: "none", height: "1068px" }}
              />
            </div>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7455284946568605696"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-1.5 text-xs font-semibold hover:underline"
              style={{ color: "#10B981" }}
            >
              View original post <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

          {/* Post 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={1}
            className="w-full flex flex-col items-center"
          >
            <div className="w-full max-w-[504px] overflow-hidden rounded-2xl shadow-2xl bg-white" style={{ height: "1005px" }}>
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7449159295998271488"
                height="1005"
                width="100%"
                frameBorder="0"
                allowFullScreen={true}
                title="Embedded post 2"
                className="w-full block animate-fade-in-up"
                style={{ border: "none", height: "1005px" }}
              />
            </div>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7449159295998271488"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-1.5 text-xs font-semibold hover:underline"
              style={{ color: "#10B981" }}
            >
              View original post <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        </div>

        {/* Global CTA button below the grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex justify-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/rangu-bharath-kumar-6a7540282"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3.5 rounded-xl flex items-center gap-2 text-xs font-semibold"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
