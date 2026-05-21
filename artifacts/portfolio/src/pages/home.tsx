import { motion } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap, 
  Briefcase, 
  Layers, 
  PenTool, 
  ChevronRight, 
  ExternalLink,
  Award,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-secondary-foreground text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-xl tracking-tight text-primary">RBK.</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#experience" className="hover:text-secondary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-secondary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-secondary transition-colors">Skills</a>
            <Button variant="outline" className="font-mono text-xs uppercase" onClick={() => document.getElementById("contact")?.scrollIntoView()}>Contact</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/images/hero-bg.png" alt="Blueprint Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-secondary inline-block"></span>
              <span className="font-mono text-secondary uppercase tracking-widest text-sm font-bold">Civil Engineering Student</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-primary">
              Building the future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">precision</span> & ambition.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              I'm <strong className="text-foreground font-semibold">Rangu Bharath Kumar</strong>, a final-year Civil Engineering student at NIT Andhra Pradesh. Passionate about real-time infrastructure development, structural integrity, and sustainable solutions.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium" onClick={() => document.getElementById("projects")?.scrollIntoView()}>
                View Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted" onClick={() => document.getElementById("contact")?.scrollIntoView()}>
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Objective & Quick Info */}
      <section id="about" className="py-20 bg-muted/30 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="md:col-span-7"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                <PenTool className="h-6 w-6 text-secondary" /> 
                Professional Objective
              </h2>
              <div className="p-8 bg-card rounded-2xl shadow-sm border border-border">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Final-year Civil Engineering student with strong academics and disciplined work ethic, seeking opportunity in real-time infrastructure development. Committed to quick learning, teamwork, and delivering quality results that stand the test of time.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="md:col-span-5 space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Location</p>
                  <p className="font-medium">Warangal, Telangana</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Email</p>
                  <p className="font-medium">rangubharathkumar18@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Phone</p>
                  <p className="font-medium">+91 8179609217</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-4">
                <p className="text-sm text-muted-foreground font-mono mb-2">Languages</p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 border-0">English</Badge>
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 border-0">Telugu</Badge>
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 border-0">Hindi</Badge>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience / Internships */}
      <section id="experience" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
              <Briefcase className="h-7 w-7 text-secondary" />
              Field Experience
            </h2>
          </motion.div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            
            {/* CPWD */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-xl text-primary">CPWD (IIPE Project)</h3>
                  <Badge variant="outline" className="font-mono font-normal">05/2025 – 06/2025</Badge>
                </div>
                <p className="text-secondary font-medium mb-4">Visakhapatnam</p>
                <p className="text-muted-foreground">Permanent campus project: handled detailed documentation, Bar Bending Schedules (BBS), and rigorous material & concrete testing for QA/QC compliance.</p>
              </div>
            </motion.div>

            {/* R&B Dept */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-xl text-primary">Roads & Buildings Dept</h3>
                  <Badge variant="outline" className="font-mono font-normal">06/2025 – 07/2025</Badge>
                </div>
                <p className="text-secondary font-medium mb-4">Warangal (Telangana Govt)</p>
                <p className="text-muted-foreground">Warangal Multi Super Speciality Hospital: conducted reinforcement checking, shuttering & concreting supervision, slump testing, and daily safety progress monitoring.</p>
              </div>
            </motion.div>

            {/* NIT Warangal */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-muted text-muted-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-xl text-primary">NIT Warangal</h3>
                  <Badge variant="outline" className="font-mono font-normal">06/2024 – 07/2024</Badge>
                </div>
                <p className="text-secondary font-medium mb-4">Warangal</p>
                <p className="text-muted-foreground">Geotechnical engineering focus: soft soil improvement using PVDs. Conducted lab tests (Direct Shear, UCS, Consolidation) and field tests (SPT), culminating in comprehensive geotechnical analysis reports.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 mix-blend-overlay">
          <img src="/images/concrete-texture.png" alt="Texture" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Layers className="h-7 w-7 text-secondary" />
              Key Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="col-span-1 flex flex-col h-full bg-background/5 border border-white/10 rounded-2xl p-8 hover:bg-background/10 transition-colors"
            >
              <Badge className="w-fit mb-6 bg-secondary text-secondary-foreground hover:bg-secondary">08/2025 – Present</Badge>
              <h3 className="text-xl font-bold mb-4">Flood Hazard Mapping</h3>
              <p className="text-primary-foreground/70 font-mono text-sm mb-6">Lower Godavari Sub-Basin</p>
              <p className="text-primary-foreground/80 leading-relaxed mt-auto">
                GIS-based flood hazard analysis utilizing rainfall, discharge, and terrain data. Created flood-prone and inundation maps, severity zones, and conducted river behavior studies.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="col-span-1 flex flex-col h-full bg-background/5 border border-white/10 rounded-2xl p-8 hover:bg-background/10 transition-colors"
            >
              <Badge className="w-fit mb-6 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border-0">01/2025 – 04/2025</Badge>
              <h3 className="text-xl font-bold mb-4">Sustainable & Smart Parking</h3>
              <p className="text-primary-foreground/70 font-mono text-sm mb-6">Tadepalligudem</p>
              <p className="text-primary-foreground/80 leading-relaxed mt-auto">
                In-Out parking surveys near bus stands and malls. Performed comprehensive demand & congestion analysis to provide actionable layout improvement suggestions.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="col-span-1 flex flex-col h-full bg-background/5 border border-white/10 rounded-2xl p-8 hover:bg-background/10 transition-colors"
            >
              <Badge className="w-fit mb-6 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border-0">01/2024 – 04/2024</Badge>
              <h3 className="text-xl font-bold mb-4">Recycled Materials in Construction</h3>
              <p className="text-primary-foreground/70 font-mono text-sm mb-6">Sustainable Dev</p>
              <p className="text-primary-foreground/80 leading-relaxed mt-auto">
                Researched utilization of recycled C&D waste in building applications. Conducted extensive lab testing to quantify environmental advantages and durability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section id="skills" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl font-bold text-primary flex items-center gap-3 mb-10">
                <BookOpen className="h-7 w-7 text-secondary" />
                Education
              </h2>
              
              <div className="space-y-8">
                <motion.div variants={fadeInUp} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-secondary before:rounded-full before:ring-4 before:ring-secondary/20">
                  <h3 className="text-xl font-bold text-primary mb-1">NIT Andhra Pradesh</h3>
                  <p className="text-muted-foreground mb-2">B.Tech Civil Engineering</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-medium text-sm">2022 – 2026</span>
                    <Badge variant="outline" className="bg-background">8.09 CGPA</Badge>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-muted-foreground/30 before:rounded-full">
                  <h3 className="text-xl font-bold text-primary mb-1">MJP Government Junior College</h3>
                  <p className="text-muted-foreground mb-2">Intermediate</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-medium text-sm">2020 – 2022</span>
                    <Badge variant="outline" className="bg-background">96.7%</Badge>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-muted-foreground/30 before:rounded-full">
                  <h3 className="text-xl font-bold text-primary mb-1">Navodaya High School</h3>
                  <p className="text-muted-foreground mb-2">Secondary</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-medium text-sm">2019 – 2020</span>
                    <Badge variant="outline" className="bg-background">10 CGPA</Badge>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl font-bold text-primary flex items-center gap-3 mb-10">
                <Award className="h-7 w-7 text-secondary" />
                Technical Arsenal
              </h2>
              
              <motion.div variants={fadeInUp} className="mb-10">
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">Core Software</h4>
                <div className="flex flex-wrap gap-3">
                  {["AutoCAD", "SketchUp", "Revit", "Python", "MS Office"].map((skill) => (
                    <div key={skill} className="px-5 py-3 bg-card border border-border rounded-lg font-medium shadow-sm flex items-center gap-2 hover:border-secondary transition-colors">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">Certifications</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                    <ExternalLink className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary">Principles of Construction Management</p>
                      <p className="text-sm text-muted-foreground">NPTEL</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                    <ExternalLink className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary">Mastering Structural Basics & Stability</p>
                      <p className="text-sm text-muted-foreground">Civilera</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                    <ExternalLink className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary">Sustainable Engineering Concepts & LCA</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Extra-Curricular & Contact Footer */}
      <footer id="contact" className="bg-primary pt-24 pb-12 text-primary-foreground border-t-[8px] border-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-8">Leadership & Impact</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="font-bold text-lg">Co-Ordinator & SPOC</h4>
                  <p className="text-primary-foreground/70 text-sm mb-1">Training & Placement Cell • 01/2025 – Present</p>
                </div>
                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="font-bold text-lg">Secretary</h4>
                  <p className="text-primary-foreground/70 text-sm mb-1">Nature & Value Education Club • 08/2024 – Present</p>
                </div>
                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="font-bold text-lg">Joint Secretary</h4>
                  <p className="text-primary-foreground/70 text-sm mb-1">Brindavanam Club • 08/2024 – 04/2025</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background/5 border border-white/10 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Let's Build Something.</h2>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Currently seeking opportunities in real-time infrastructure development. Available for immediate joining upon graduation.
              </p>
              
              <div className="space-y-4 font-mono text-sm">
                <a href="mailto:rangubharathkumar18@gmail.com" className="flex items-center gap-3 hover:text-secondary transition-colors w-fit">
                  <Mail className="w-5 h-5" /> rangubharathkumar18@gmail.com
                </a>
                <a href="tel:+918179609217" className="flex items-center gap-3 hover:text-secondary transition-colors w-fit">
                  <Phone className="w-5 h-5" /> +91 8179609217
                </a>
                <div className="flex items-center gap-3 w-fit">
                  <MapPin className="w-5 h-5" /> Warangal, Telangana
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/50 text-sm">
            <p>© {new Date().getFullYear()} Rangu Bharath Kumar. All rights reserved.</p>
            <p className="font-mono">Engineered with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}