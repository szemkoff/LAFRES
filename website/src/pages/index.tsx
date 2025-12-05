import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type AudienceTab = 'public' | 'scientists' | 'partners' | 'investors';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGlow} />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 100 100" className={styles.atomSvg}>
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="currentColor" strokeWidth="2" />
              <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(60 50 50)" />
              <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(120 50 50)" />
            </svg>
          </div>
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          Pioneering compact fusion energy through the innovative combination of 
          acoustic resonance technology and liquid lithium dynamics
        </p>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>5</span>
            <span className={styles.statLabel}>Subsystems</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>60+</span>
            <span className={styles.statLabel}>Technical Docs</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>4</span>
            <span className={styles.statLabel}>Project Phases</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>$6-10M</span>
            <span className={styles.statLabel}>Est. Budget</span>
          </div>
        </div>
        <div className={styles.heroCta}>
          <Link className={styles.ctaPrimary} to="/docs/overview">
            Explore the Project
          </Link>
          <Link className={styles.ctaSecondary} to="/docs/system-architecture">
            View Architecture
          </Link>
        </div>
      </div>
    </header>
  );
}

function AudienceSection() {
  const [activeTab, setActiveTab] = useState<AudienceTab>('public');

  const tabs: { id: AudienceTab; label: string; icon: string }[] = [
    { id: 'public', label: 'General Public', icon: '🌍' },
    { id: 'scientists', label: 'Scientists & Contributors', icon: '🔬' },
    { id: 'partners', label: 'Partners', icon: '🤝' },
    { id: 'investors', label: 'Investors', icon: '📈' },
  ];

  return (
    <section className={styles.audienceSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Discover L.A.F.R.E.S.
        </Heading>
        <p className={styles.sectionSubtitle}>
          Select your perspective to explore what matters most to you
        </p>
        
        <div className={styles.tabContainer}>
          <div className={styles.tabButtons}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={clsx(styles.tabButton, activeTab === tab.id && styles.tabButtonActive)}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.tabIcon}>{tab.icon}</span>
                <span className={styles.tabLabel}>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'public' && (
              <div className={styles.tabPanel}>
                <div className={styles.panelGrid}>
                  <div className={styles.panelMain}>
                    <h3>What is L.A.F.R.E.S.?</h3>
                    <p>
                      L.A.F.R.E.S. (Lithium-Acoustic Fusion Research & Engineering System) is a 
                      groundbreaking research project exploring a new approach to fusion energy. 
                      Unlike traditional fusion reactors that are enormous and expensive, we're 
                      developing a compact, laboratory-scale system that could revolutionize how 
                      we think about clean energy.
                    </p>
                    <h4>Why It Matters</h4>
                    <ul>
                      <li><strong>Clean Energy:</strong> Fusion produces no greenhouse gases or long-lived radioactive waste</li>
                      <li><strong>Abundant Fuel:</strong> Deuterium can be extracted from seawater - virtually unlimited supply</li>
                      <li><strong>Safe Operation:</strong> No risk of meltdown; fusion reactions stop immediately if disrupted</li>
                      <li><strong>Compact Design:</strong> Our approach aims for room-sized systems, not stadium-sized facilities</li>
                    </ul>
                  </div>
                  <div className={styles.panelSidebar}>
                    <div className={styles.quickLinks}>
                      <h4>Learn More</h4>
                      <Link to="/docs/overview">Project Overview</Link>
                      <Link to="/docs/physics-background">The Science Behind Fusion</Link>
                      <Link to="/docs/glossary">Glossary of Terms</Link>
                      <Link to="/docs/safety/safety-overview">Safety Information</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'scientists' && (
              <div className={styles.tabPanel}>
                <div className={styles.panelGrid}>
                  <div className={styles.panelMain}>
                    <h3>Technical Research & Collaboration</h3>
                    <p>
                      L.A.F.R.E.S. integrates five cutting-edge subsystems: a pulsed IEC micro-fusion core, 
                      liquid lithium blanket with MHD stabilization, phased-array acoustic transducers, 
                      advanced thermoelectric conversion, and AI-driven real-time control systems.
                    </p>
                    <h4>Key Technical Challenges</h4>
                    <ul>
                      <li><strong>Neutron Transport:</strong> MCNP/OpenMC modeling of 2.45 MeV D-D neutrons in liquid lithium</li>
                      <li><strong>Acoustic Coupling:</strong> Multi-band (10-500 kHz) phased-array stabilization of free liquid metal surfaces</li>
                      <li><strong>Thermal Management:</strong> Skutterudite/half-Heusler thermoelectric conversion at 400-500°C</li>
                      <li><strong>Control Systems:</strong> Sub-millisecond FPGA-based feedback for acoustic field optimization</li>
                    </ul>
                    <h4>Contribution Opportunities</h4>
                    <p>
                      We welcome collaboration on simulation validation, experimental design, 
                      and theoretical analysis. All documentation is structured for rigorous 
                      peer review and reproducibility.
                    </p>
                  </div>
                  <div className={styles.panelSidebar}>
                    <div className={styles.quickLinks}>
                      <h4>Technical Resources</h4>
                      <Link to="/docs/system-architecture">System Architecture</Link>
                      <Link to="/docs/physics-background">Physics Background</Link>
                      <Link to="/docs/research/literature-review">Literature Review</Link>
                      <Link to="/docs/research/known-limitations">Known Limitations</Link>
                      <Link to="/docs/specs/plasma-core">Core Specifications</Link>
                      <Link to="/docs/team">Join the Team</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'partners' && (
              <div className={styles.tabPanel}>
                <div className={styles.panelGrid}>
                  <div className={styles.panelMain}>
                    <h3>Partnership Opportunities</h3>
                    <p>
                      L.A.F.R.E.S. seeks strategic partnerships with academic institutions, 
                      national laboratories, and industry leaders to accelerate development 
                      and ensure the highest standards of scientific rigor.
                    </p>
                    <h4>Academic & Research Partners</h4>
                    <ul>
                      <li><strong>University Collaborations:</strong> Joint research programs, graduate student projects, facility access</li>
                      <li><strong>National Laboratories:</strong> Simulation validation, neutron source testing, safety review</li>
                      <li><strong>International Programs:</strong> Knowledge exchange with fusion research programs worldwide</li>
                    </ul>
                    <h4>Industry & Technology Partners</h4>
                    <ul>
                      <li><strong>Instrumentation:</strong> Advanced sensors, neutron detectors, thermal imaging systems</li>
                      <li><strong>Materials:</strong> Refractory metals, thermoelectric modules, specialized ceramics</li>
                      <li><strong>Manufacturing:</strong> Precision fabrication, specialized welding, quality assurance</li>
                    </ul>
                  </div>
                  <div className={styles.panelSidebar}>
                    <div className={styles.quickLinks}>
                      <h4>Partnership Info</h4>
                      <Link to="/docs/roadmap/roadmap-overview">Development Roadmap</Link>
                      <Link to="/docs/specs/plasma-core">Technical Specifications</Link>
                      <Link to="/docs/regulatory-constraints">Regulatory Framework</Link>
                      <Link to="/docs/team">Team & Expertise</Link>
                    </div>
                    <div className={styles.contactBox}>
                      <h4>Contact Us</h4>
                      <p>partnerships@lafres.org</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'investors' && (
              <div className={styles.tabPanel}>
                <div className={styles.panelGrid}>
                  <div className={styles.panelMain}>
                    <h3>Investment Opportunity</h3>
                    <p>
                      L.A.F.R.E.S. represents a unique opportunity to invest in next-generation 
                      fusion energy technology at the ground floor. Our phased approach minimizes 
                      risk while maintaining transformative upside potential.
                    </p>
                    <h4>Market Opportunity</h4>
                    <ul>
                      <li><strong>$500B+</strong> Global energy market with increasing demand for clean alternatives</li>
                      <li><strong>$2B+</strong> Annual government funding for fusion research worldwide</li>
                      <li><strong>First-mover advantage</strong> in acoustic-stabilized liquid metal fusion systems</li>
                    </ul>
                    <h4>Investment Phases</h4>
                    <div className={styles.investmentTable}>
                      <div className={styles.investmentRow}>
                        <span>Phase 0: Simulation</span>
                        <span>$200K - $500K</span>
                      </div>
                      <div className={styles.investmentRow}>
                        <span>Phase 1: Lithium Testing</span>
                        <span>$1M - $2M</span>
                      </div>
                      <div className={styles.investmentRow}>
                        <span>Phase 2: Neutron Coupling</span>
                        <span>$2M - $3M</span>
                      </div>
                      <div className={styles.investmentRow}>
                        <span>Phase 3: Micro-Fusion Demo</span>
                        <span>$3M - $5M</span>
                      </div>
                      <div className={clsx(styles.investmentRow, styles.investmentTotal)}>
                        <span>Total Investment</span>
                        <span>$6M - $10M</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.panelSidebar}>
                    <div className={styles.quickLinks}>
                      <h4>Due Diligence</h4>
                      <Link to="/docs/overview">Executive Summary</Link>
                      <Link to="/docs/roadmap/roadmap-overview">Development Roadmap</Link>
                      <Link to="/docs/roadmap/cost-estimates">Detailed Cost Estimates</Link>
                      <Link to="/docs/team">Team & Advisors</Link>
                      <Link to="/docs/research/known-limitations">Risk Assessment</Link>
                    </div>
                    <div className={styles.contactBox}>
                      <h4>Investor Relations</h4>
                      <p>investors@lafres.org</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologyOverview() {
  const systems = [
    {
      title: 'Micro-Fusion Core',
      description: 'Pulsed IEC device generating controlled neutron bursts at 10⁶-10¹⁰ n/s',
      icon: '⚛️',
      link: '/docs/microfusion-core',
    },
    {
      title: 'Liquid Lithium Blanket',
      description: 'Molten Li-7 moderator, heat sink, and tritium breeder at 300-500°C',
      icon: '💧',
      link: '/docs/liquid-lithium-module',
    },
    {
      title: 'Acoustic Stabilization',
      description: 'Phased-array transducers (10-500 kHz) for MHD damping and surface control',
      icon: '🔊',
      link: '/docs/acoustic-field-matrix',
    },
    {
      title: 'Thermal Conversion',
      description: 'Thermoelectric modules achieving 10-20% conversion efficiency',
      icon: '🔥',
      link: '/docs/thermoelectric-conversion',
    },
    {
      title: 'AI Control System',
      description: 'Real-time ML-driven optimization with sub-millisecond response',
      icon: '🤖',
      link: '/docs/control-system-ai',
    },
  ];

  return (
    <section className={styles.techSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Five Integrated Subsystems
        </Heading>
        <p className={styles.sectionSubtitle}>
          A novel multi-physics approach to compact fusion energy
        </p>
        <div className={styles.techGrid}>
          {systems.map((system, index) => (
            <Link to={system.link} key={index} className={styles.techCard}>
              <span className={styles.techIcon}>{system.icon}</span>
              <h3>{system.title}</h3>
              <p>{system.description}</p>
              <span className={styles.techArrow}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapPreview() {
  const phases = [
    { phase: '0', title: 'Simulation', duration: '6-12 mo', status: 'current' },
    { phase: '1', title: 'Lithium Testing', duration: '12-18 mo', status: 'upcoming' },
    { phase: '2', title: 'Neutron Coupling', duration: '12-18 mo', status: 'upcoming' },
    { phase: '3', title: 'Micro-Fusion', duration: '18-24 mo', status: 'upcoming' },
  ];

  return (
    <section className={styles.roadmapSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Development Roadmap
        </Heading>
        <p className={styles.sectionSubtitle}>
          5-6 year path from concept to proof-of-concept demonstration
        </p>
        <div className={styles.roadmapTimeline}>
          {phases.map((p, index) => (
            <div key={index} className={clsx(styles.roadmapPhase, styles[`phase${p.status}`])}>
              <div className={styles.phaseNumber}>Phase {p.phase}</div>
              <div className={styles.phaseTitle}>{p.title}</div>
              <div className={styles.phaseDuration}>{p.duration}</div>
            </div>
          ))}
        </div>
        <div className={styles.roadmapCta}>
          <Link to="/docs/roadmap/roadmap-overview" className={styles.ctaSecondary}>
            View Full Roadmap
          </Link>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          Ready to Explore the Future of Fusion?
        </Heading>
        <p className={styles.ctaText}>
          Dive into our comprehensive documentation, review our technical specifications, 
          or connect with our team to discuss collaboration opportunities.
        </p>
        <div className={styles.ctaButtons}>
          <Link to="/docs/overview" className={styles.ctaPrimary}>
            Start Reading
          </Link>
          <Link to="/docs/team" className={styles.ctaSecondary}>
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="L.A.F.R.E.S. - Lithium-Acoustic Fusion Research & Engineering System. Pioneering compact fusion energy through acoustic resonance and liquid lithium technology.">
      <HomepageHeader />
      <main>
        <AudienceSection />
        <TechnologyOverview />
        <RoadmapPreview />
        <CallToAction />
      </main>
    </Layout>
  );
}
