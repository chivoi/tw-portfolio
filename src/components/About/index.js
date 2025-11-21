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
        <h3 className='text--center'>Hi friend 👋 </h3>
          <p>I'm Ana, a tech writer and developer based between the US and Australia. For the past 4.5 years I worked as a Software Engineer at Zendesk, where I built API integrations and iPaaS connectors, as well as wrote thorough docs and guides for what me and my team built. Apart from the recent experience in technical roles, I have a background in teaching, humanities, translations, as well as a long history of people-to-people work.</p>

          <p>My favourite things in the whole world are clarity, knowledge-sharing and making sense of complex things. I seek those in everything I do, be it doc-writing, coding or interacting with fellow human beings.</p>

          <p>I'm also a big company culture and belonging advocate. In my latest full time role I gave back to the community by volunteering as a representative on the ANZ site council. I really enjoy creating nurturing environments wherever I find myself.</p>

          <p>In my free time I like to write music, paint boardgame miniatures or hang out with my cat Borsch. When the weather is nice, I like to get out of town for a hike.</p>

          <p>If you would like to connect, work together or just say hi, feel free to get in touch with me <a href='https://www.linkedin.com/in/ana-lastoviria/' target='_blank'>on LinkedIn</a>, I would love to hear from you.</p>
      </div>
    </div>
  );
};