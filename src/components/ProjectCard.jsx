import { useState } from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`${styles.card} ${hovered ? styles.hovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ "--card-color": project.color, "--card-gradient": project.gradient }}
    >
      {/* Number */}
      <span className={styles.number}>{project.number}</span>

      {/* Preview area */}
      <div className={styles.preview}>
        <div className={styles.previewBg} />
        <div className={styles.previewContent}>
          <div className={styles.previewIcon}>
            {project.number}
          </div>
          <p className={styles.previewTitle}>{project.title}</p>
        </div>

        {/* Hover overlay */}
        <div className={styles.previewOverlay}>
          <div className={styles.overlayLinks}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlayLink}
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              Live Demo
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlayLink}
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
              Code
            </a>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.header}>
          <div>
            <div className={styles.meta}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.year}>{project.year}</span>
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.subtitle}>{project.subtitle}</p>
          </div>
          <div className={styles.arrow}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.tech.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}