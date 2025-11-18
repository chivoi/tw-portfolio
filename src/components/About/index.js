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
        <h3 className='text--center'>About me</h3>
            <p>👋 I'm Ana, a US-based tech writer and developer. This is the photo of me at the Arnold Schwarzenegger museum in Thal, Austria.</p>
            <p>🧑‍💻 Since 2021 I worked as a Software Engineer at Zendesk, where I built API integrations and connectors, as well as wrote thorough docs and guides for what me and my team built. </p>
            <p>🤝 Apart from the experience in technical roles, I have a background in teaching, music and humanities, as well as long history of people-to-people work. Communication and knowledge-sharing are my passions, which I apply to everything I do, including my tech work: building both software and docs with humans at the forefront of my mind.</p>
            <p>🫀 I am a big DEI advocate, passionate about bringing positive change to the future and increasing diversity and inclusivity in tech. To promote this and give back to my community, I volunteered as a site council representative on the ANZ site council at Zendesk. I really enjoy creating a nurturing and inclusive environment in my workplace.</p>
            <p>🏝️ In my free time I like to cook, hang out with my cat Borsch, make music or paint boardgame miniatures. When the weather is nice, I like to get out of town for a hike.</p>
            <p>🕊️ If you would like to connect, work together or just say hi, feel free to get in touch with me on LinkedIn.</p>
      </div>
    </div>
  );
};