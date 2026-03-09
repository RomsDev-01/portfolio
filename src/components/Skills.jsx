import { skills } from "../data/projects";
import styles from "./Skills.module.css";

const proficiencyLevels = {
  "JavaScript (ES6+)": 85,
  "HTML5": 90,
  "CSS3": 88,
  "TypeScript (learning)": 35,
  "React": 82,
  "Vite": 75,
  "Next.js (familiar)": 45,
  "Tailwind CSS": 80,
  "CSS Modules": 78,
  "Styled Components": 72,
  "SASS": 65,
  "Git & GitHub": 78,
  "Figma": 68,
  "VS Code": 90,
  "Chrome DevTools": 82,
  "REST APIs": 76,
  "Responsive Design": 88,
  "Web Accessibility": 65,
  "Component Architecture": 78,
};

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <p className="section-label">03 — Skills</p>
        <h2 className={styles.heading}>
          My <em>Toolbox</em>
        </h2>
        <p className={styles.sub}>
          Technologies and tools I've worked with. Proficiency bars are self-assessed —
          always honest, always growing.
        </p>

        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.group}>
              <h3 className={styles.groupTitle}>{category}</h3>
              <div className={styles.items}>
                {items.map((skill) => (
                  <div key={skill} className={styles.item}>
                    <div className={styles.itemTop}>
                      <span className={styles.itemName}>{skill}</span>
                      <span className={styles.itemPct}>
                        {proficiencyLevels[skill] || 70}%
                      </span>
                    </div>
                    <div className={styles.bar}>
                      <div
                        className={styles.barFill}
                        style={{ "--pct": `${proficiencyLevels[skill] || 70}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning banner */}
        <div className={styles.learning}>
          <div className={styles.learningLeft}>
            <span className={styles.learningIcon}>📚</span>
            <div>
              <p className={styles.learningTitle}>Currently Learning</p>
              <p className={styles.learningBody}>
                TypeScript, Next.js, Testing with Vitest, and Web Animations API
              </p>
            </div>
          </div>
          <div className={styles.learningTags}>
            {["TypeScript", "Next.js", "Vitest", "Web Animations"].map((t) => (
              <span key={t} className={styles.learningTag}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}