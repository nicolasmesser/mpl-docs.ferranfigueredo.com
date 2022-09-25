import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'EPUB2 and 3 Compatible',
    Svg: require('../../static/img/study.svg').default,
    description: (
      <>
        Turn your posts into digital books. Our digital publishing plugin allows you to create ebooks that look great on any reading device.
      </>
    ),
  },
  {
    title: 'Your book on Amazon',
    Svg: require('../../static/img/shopping-bag.svg').default,
    description: (
      <>
        We support EPUB and Word formats that meet the specifications outlined in the Kindle Publishing Guidelines. Your book will be publish-ready to sell online in seconds.
      </>
    ),
  },
  {
    title: 'Make an audiobook',
    Svg: require('../../static/img/music-player.svg').default,
    description: (
      <>
        The easiest way to create an audiobook from your WordPress site. If you’re an author who’s not pursuing this book format, you’re missing out on an entire audience.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
