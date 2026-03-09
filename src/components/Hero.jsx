import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const roles = ["Frontend Developer", "UI Enthusiast", "React Builder", "Web Creator"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="hero" className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} />

      {/* Glow blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* Floating badge */}
      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        <span>Available for entry level roles</span>
      </div>

      <div className={styles.content}>
        <p className={styles.greeting}>
          <span className={styles.wave}>👋</span> Hello, I'm
        </p>

        <h1 className={styles.name}>
          Romeo<br />
          <span className={styles.nameHighlight}>Alfonso</span>
        </h1>

        <div className={styles.roleWrap}>
          <span className={styles.roleStatic}>I'm a </span>
          <span className={styles.roleTyped}>{displayed}</span>
          <span className={styles.cursor}>|</span>
        </div>

        <p className={styles.bio}>
          I am a 4th-year Computer Engineering student with a strong passion for frontend development. My interest began during my sophomore year when I took a web technologies course. What started as building simple HTML pages gradually developed into a deeper focus on modern frontend tools such as React, component-driven design, and creating clean, maintainable user interfaces. I enjoy transforming ideas into intuitive and responsive web experiences while continuously improving my skills in building scalable and well-structured UI code.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>5+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4th</span>
            <span className={styles.statLabel}>Year Student</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>∞</span>
            <span className={styles.statLabel}>Curiosity</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>

      {/* Decorative number */}
      <div className={styles.decorNum}>2026</div>
    </section>
  );
}