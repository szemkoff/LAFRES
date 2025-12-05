import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Acoustic Resonance Technology',
    icon: '⚡',
    description: (
      <>
        Utilizing phased-array acoustic transducers to create standing pressure waves
        in liquid lithium, achieving fusion-relevant plasma compression without 
        conventional magnetic confinement.
      </>
    ),
  },
  {
    title: 'Liquid Lithium Dynamics',
    icon: '💧',
    description: (
      <>
        Advanced liquid lithium system serves triple duty: neutron moderator, 
        tritium breeder, and heat transfer medium. Innovative approach to 
        fusion fuel sustainability.
      </>
    ),
  },
  {
    title: 'Compact Design',
    icon: '🔬',
    description: (
      <>
        Research-scale micro-fusion core (~100 W thermal target) designed for 
        laboratory validation before scaling. Modular architecture enables 
        systematic testing and optimization.
      </>
    ),
  },
  {
    title: 'AI-Driven Control',
    icon: '🤖',
    description: (
      <>
        Real-time machine learning control systems for acoustic field optimization,
        plasma stability, and thermal management. Adaptive algorithms respond to 
        dynamic fusion conditions.
      </>
    ),
  },
  {
    title: 'Comprehensive Safety',
    icon: '🛡️',
    description: (
      <>
        Multi-layered safety protocols covering radiation protection, lithium handling,
        and emergency response. Designed to meet NRC and DOE regulatory requirements
        from day one.
      </>
    ),
  },
  {
    title: 'Open Research',
    icon: '📚',
    description: (
      <>
        Fully documented research methodology, simulation frameworks, and technical 
        specifications. Built for collaboration with academic institutions and 
        industry partners.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
