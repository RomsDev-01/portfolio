import styles from "./About.module.css";

const facts = [
  { icon: "🎓", label: "Education", value: "B.S. Computer Engineering — Expected April 2026" },
  { icon: "📍", label: "Location", value: "Baras, Rizal, Philippines" },
  { icon: "💡", label: "Interests", value: "UI/UX, Open Source, Dev Tools" },
  { icon: "🎯", label: "Goal", value: "Land my first frontend engineering role" },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className="section-label">01 — About</p>

          <h2 className={styles.heading}>
            Building things<br />
            <em>one component</em><br />
            at a time.
          </h2>

          <p className={styles.body}>
            I am a 4th-year Computer Engineering student with a strong passion for frontend development. My interest in web development began during my sophomore year after taking a web technologies course, where I discovered the creative and technical aspects of building user interfaces. What started as creating simple HTML pages soon developed into a deeper focus on modern frontend technologies such as React, component-driven design, and writing clean, maintainable, and scalable UI code. I enjoy transforming ideas into intuitive and responsive web experiences while continuously improving my skills in modern web development.           </p>

          <p className={styles.body}>
            I don't have industry experience yet — but I've spent the last two years
            obsessively building projects, studying design systems, reading open-source code,
            and watching my craft improve with every commit. I'm eager, fast-learning, and
            ready to contribute.
          </p>

          <a href="#contact" className={styles.link}>
            Let's connect
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        <div className={styles.right}>
          {/* Avatar placeholder */}
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              <div className={styles.avatarInner}>
                <span className={styles.avatarInitials}>RA</span>
                <div className={styles.avatarOrbit}>
                  <span className={styles.orbitDot} />
                </div>
              </div>
            </div>
            <div className={styles.avatarLabel}>
              <span className={styles.avatarLabelDot} />
              Open to opportunities
            </div>
          </div>

          {/* Facts grid */}
          <div className={styles.facts}>
            {facts.map((f) => (
              <div key={f.label} className={styles.fact}>
                <span className={styles.factIcon}>{f.icon}</span>
                <div>
                  <p className={styles.factLabel}>{f.label}</p>
                  <p className={styles.factValue}>{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}