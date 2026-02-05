import styles from './styles.module.css';

export default function About(){
  return (
    <section className={styles.aboutSection}>
        <AboutCard />
    </section>
  )
};

function AboutCard() {
  return (
    <div className="container">
      <div className="text--left padding-horiz--md">
        <p>Hi friend! I'm Ana, a tech writer and software developer.</p>
          
        <p>In my latest full-time role, I was a Software Engineer at Zendesk, where I built API integrations and iPaaS connectors for Zendesk Action Builder, as well as wrote thorough docs and guides for what my team and I built.</p>

        <p>I also contribute to open-source academic software: currently I'm developing docs for <a href='https://github.com/Harvard-Neutrino/prometheus'>Prometheus</a>, a particle detector simulator developed by a global collaboration of physicists at Harvard and the University of Iowa.</p>
        
        <p>My favourite things in the whole world are clarity, structure and making sense of complex things. I seek those in everything I do, be it doc-writing, coding or interacting with fellow human beings.</p>

        <p>In my free time I like to write music, paint boardgame miniatures and hang out with my cat Borsch. When the weather is nice, I like to get out of town for a hike.</p>

        <p>If you would like to connect, work together or just say hi, feel free to get in touch with me <a href='https://www.linkedin.com/in/ana-lastoviria/' target='_blank'>on LinkedIn</a>, I would love to hear from you.</p>
      </div>
    </div>
  );
};