const logos = [
  { src: "/images/jindal-saw-ltd-logo-png_seeklogo-366281.png", alt: "Jindal Saw Ltd." },
  { src: "/images/NIT andhra pradesh.png",          alt: "NIT Andhra Pradesh" },
  { src: "/images/CPWD.png",                         alt: "CPWD" },
  { src: "/images/nhai.jpeg",                        alt: "NHAI" },
  { src: "/images/NITW.png",                         alt: "NIT Warangal" },
  { src: "/images/roads and building .png",          alt: "Roads & Buildings" },
  { src: "/images/nptel-logo.png",                   alt: "NPTEL" },
  { src: "/images/civilera-logo.png",                alt: "CivilERA" },
  { src: "/images/training and placement clum.jpeg", alt: "T&P Cell" },
  { src: "/images/Nature Club.jpeg",                 alt: "Nature Club" },
  { src: "/images/BRindavan Club.jpeg",              alt: "Brindavanam Club" },
  { src: "/images/mjt jnr college.png",              alt: "MJP Junior College" },
  { src: "/images/Navodaya high school.png",         alt: "Navodaya High School" },
];

// Duplicate for seamless infinite loop
const track = [...logos, ...logos, ...logos];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="marquee-outer">
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {track.map((logo, i) => (
          <div key={i} className="marquee-item">
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="logo-marquee-section">
      {/* Fade edges */}
      <div className="marquee-fade-left"  />
      <div className="marquee-fade-right" />

      <div className="marquee-label">Affiliated & Associated With</div>
      <MarqueeRow />
    </section>
  );
}
