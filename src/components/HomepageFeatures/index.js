import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About me',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
            <p>👋 I'm Ana, a US-based developer and tech writer. This is the photo of me at the Arnold Schwarzenegger museum in Thal, Austria.</p>
            <p>🧑‍💻 Since 2021 I work at Zendesk, where I build API integrations and connectors, as well as write thorough docs and guides for what me and my team built. </p>
            <p>🤝 Apart from the experience in technical roles, I have a background in teaching, music and humanities, as well as long history of people-to-people work. Communication and knowledge-sharing are my passions, which I apply to everything I do, including my tech work: building both software and docs with humans at the forefront of my mind.</p>
            <p>🫀 I am a big DEI advocate, passionate about bringing positive change to the future and increasing diversity and inclusivity in tech. To promote this and give back to my community, I volunteer as a site council representative on the ANZ site council at Zendesk. I really enjoy creating a nurturing and inclusive environment in my workplace.</p>
            <p>🏝️ In my free time I like to cook, hang out with my cat Borsch, make music or paint boardgame miniatures. When the weather is nice, I like to get out of town for a hike.</p>
            <p>🕊️ If you would like to connect, work together or just say hi, feel free to get in touch with me on LinkedIn.</p>

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <Heading as="h3" className='text--center'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
