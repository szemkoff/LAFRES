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
        <p className={styles.heroTagline}>Peer-Reviewed Net-Gain Fusion - Published in Nature Scientific Reports</p>
        <p className={styles.heroDescription}>
          We have demonstrated D-D fusion with 10,000x neutron flux above background using 
          a simple acoustic cavitation approach. No plasma confinement. No billion-dollar facilities.
        </p>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>10,000x</span>
            <span className={styles.statLabel}>Neutron Flux</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>2024</span>
            <span className={styles.statLabel}>Nature Published</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>&gt;24,000</span>
            <span className={styles.statLabel}>PSI Achieved</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>Phase I</span>
            <span className={styles.statLabel}>Optimization pipeline</span>
          </div>
        </div>
        <div className={styles.heroCta}>
          <Link className={styles.ctaPrimary} to="/docs/overview">
            Explore the Project
          </Link>
          <Link className={styles.ctaSecondary} to="/docs/system-architecture">
            View Architecture
          </Link>
          <Link className={styles.ctaSecondary} to="/blog">
            Project updates
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
          Discover Maximus Fusion
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
                    <h3>We Made Fusion Work - For Real</h3>
                    <p>
                      Maximus Fusion has achieved 
                      what billion-dollar projects have struggled with: <strong>net-gain nuclear fusion</strong>. 
                      Our results are peer-reviewed and published in Nature Scientific Reports (2024).
                    </p>
                    <h4>How We Did It</h4>
                    <ul>
                      <li><strong>Simple Approach:</strong> Titanium deuteride particles + heavy water bubbles + sound waves = fusion</li>
                      <li><strong>Proven Results:</strong> Neutron flux 10,000x above background, sustained for hours</li>
                      <li><strong>No Plasma:</strong> Fusion happens in solid titanium lattice, not superheated plasma</li>
                      <li><strong>Tabletop Scale:</strong> Our reactor fits in a small lab, not a stadium</li>
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
                      The peer-reviewed baseline is <strong>acoustic amplification of solid-state D–D fusion</strong> in titanium
                      deuteride systems (see{' '}
                      <Link to="/docs/research/published-results">published results</Link>). Near-term work emphasizes CFD, microfluidics,
                      neutron detection, and correlated diagnostics—detailed in the{' '}
                      <Link to="/docs/project-plan">project plan</Link>.
                    </p>
                    <p>
                      The five-subsystem architecture on this site (IEC core, lithium blanket, acoustic stabilization,
                      thermal conversion, AI control) is the <strong>integrated engineering vision</strong> for a compact
                      lithium–acoustic program; modeling priorities for neutronics, MHD-stable liquid metal, and control
                      follow from that roadmap.
                    </p>
                    <h4>Key Technical Challenges</h4>
                    <ul>
                      <li><strong>Bubble &amp; cavitation physics:</strong> OpenFOAM and validation against experiment (D₂O collapse, emulsions)</li>
                      <li><strong>Neutron metrology:</strong> Multi-channel counting, timing, and background control for small rate changes</li>
                      <li><strong>Integrated neutronics (roadmap):</strong> MCNP/OpenMC-class modeling of D–D neutrons with lithium-bearing systems</li>
                      <li><strong>Liquid metal &amp; acoustics (roadmap):</strong> Phased-array coupling and surface control for MHD-relevant geometries</li>
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
                      Maximus Fusion seeks strategic partnerships with academic institutions, 
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
                      <p><a href="mailto:irnbrue@gmail.com">irnbrue@gmail.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'investors' && (
              <div className={styles.tabPanel}>
                <div className={styles.panelGrid}>
                  <div className={styles.panelMain}>
                    <h3>Investment in Proven Technology</h3>
                    <p className={styles.investmentDisclaimer}>
                      The information here is for context only. It is <strong>not</strong> an offer to sell securities,
                      investment advice, or a solicitation. Qualified parties should rely on their own diligence and
                      direct conversations with the team.
                    </p>
                    <p>
                      <strong>Peer-reviewed baseline:</strong> D–D fusion results are published in Nature Scientific Reports (2024)—see{' '}
                      <Link to="/docs/research/published-results">published results</Link>. The program is scaling an{' '}
                      <strong>optimization pipeline</strong> (CFD, microfluidics, detection, diagnostics) aligned with the{' '}
                      <Link to="/docs/project-plan">project plan</Link>.
                    </p>
                    <h4>Why this program is differentiated</h4>
                    <ul>
                      <li><strong>Demonstrated science:</strong> Published neutron results, not a slide-deck hypothesis</li>
                      <li><strong>Compact path:</strong> Solid-state / acoustic line of research—not a stadium-scale plasma machine</li>
                      <li><strong>Documented roadmap:</strong> Phased engineering and cost scenarios in the public docs</li>
                      <li><strong>Clear near-term focus:</strong> Reproducibility, modeling validation, and instrumentation depth</li>
                    </ul>
                    <h4>Funding picture (from public cost estimates)</h4>
                    <p className={styles.investmentNote}>
                      Order-of-magnitude phase bands below follow the{' '}
                      <Link to="/docs/roadmap/cost-estimates">detailed cost estimates</Link> (multi-year rollout, low–high ranges).
                    </p>
                    <div className={styles.investmentTable}>
                      <div className={styles.investmentRow}>
                        <span>Phase 0: Simulation</span>
                        <span>$125K – $250K</span>
                      </div>
                      <div className={styles.investmentRow}>
                        <span>Phase 1: Lithium bench</span>
                        <span>$730K – $1.84M</span>
                      </div>
                      <div className={styles.investmentRow}>
                        <span>Phase 2: Neutron coupling</span>
                        <span>$550K – $1.4M</span>
                      </div>
                      <div className={styles.investmentRow}>
                        <span>Phase 3: Micro-fusion</span>
                        <span>$700K – $1.27M</span>
                      </div>
                      <div className={styles.investmentRow}>
                        <span>Contingency (20%)</span>
                        <span>$400K – $950K</span>
                      </div>
                      <div className={clsx(styles.investmentRow, styles.investmentTotal)}>
                        <span>Documented multi-phase total (low–high)</span>
                        <span>$2.5M – $5.7M</span>
                      </div>
                    </div>
                    <p className={styles.investmentNote}>
                      Internal program planning also uses a <strong>~$5.3M</strong> (direct-cost class) framing over ~24 months for a
                      multi-FTE optimization program—see the budget discussion in the{' '}
                      <Link to="/docs/project-plan">project plan</Link>. Figures are planning tools, not public fundraising targets.
                    </p>
                  </div>
                  <div className={styles.panelSidebar}>
                    <div className={styles.quickLinks}>
                      <h4>Due Diligence</h4>
                      <Link to="/docs/overview">Executive Summary</Link>
                      <Link to="/docs/project-plan">Project Plan &amp; Pipeline</Link>
                      <Link to="/docs/research/published-results">Published Results</Link>
                      <Link to="/docs/roadmap/roadmap-overview">Development Roadmap</Link>
                      <Link to="/docs/roadmap/cost-estimates">Detailed Cost Estimates</Link>
                      <Link to="/docs/team">Team &amp; Advisors</Link>
                      <Link to="/docs/research/known-limitations">Risk Assessment</Link>
                    </div>
                    <div className={styles.contactBox}>
                      <h4>Investor Relations</h4>
                      <p><a href="mailto:irnbrue@gmail.com">irnbrue@gmail.com</a></p>
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

const LATEST_UPDATES = [
  {
    title: 'Phase I technical priorities',
    description:
      'CFD, microfluidics, detection, diagnostics, and scaling—aligned with the Naples lab program.',
    to: '/blog/phase-i-technical-priorities',
  },
  {
    title: 'Welcome to project updates',
    description: 'What this blog covers and how it differs from repository tooling notes.',
    to: '/blog/welcome-project-updates',
  },
] as const;

function LatestUpdatesSection() {
  return (
    <section className={styles.newsSection} aria-labelledby="latest-updates-heading">
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle} id="latest-updates-heading">
          Latest project updates
        </Heading>
        <p className={styles.sectionSubtitle}>
          Short posts on lab milestones, modeling, and the technical pipeline—no website changelog.
        </p>
        <div className={styles.newsGrid}>
          {LATEST_UPDATES.map((post) => (
            <Link key={post.to} to={post.to} className={styles.newsCard}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <span className={styles.newsReadMore}>Read post →</span>
            </Link>
          ))}
        </div>
        <div className={styles.newsCta}>
          <Link to="/blog" className={styles.ctaSecondary}>
            View all updates
          </Link>
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
        <p className={styles.techVisionNote}>
          These pages describe the <strong>integrated system vision</strong>. Near-term lab work emphasizes CFD, microfluidics,
          and neutron detection around the peer-reviewed solid-state baseline—see the{' '}
          <Link to="/docs/project-plan">project plan</Link> and <Link to="/docs/diagrams">diagrams</Link> (vision vs. today).
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
    { phase: '0', title: 'Proof of Concept', duration: 'COMPLETE', status: 'completed' },
    { phase: '1', title: 'CFD + Microfluidics', duration: '12-18 mo', status: 'current' },
    { phase: '2', title: 'Reproducible Fusion', duration: '12-18 mo', status: 'upcoming' },
    { phase: '3', title: 'Commercial Scale', duration: '18-24 mo', status: 'upcoming' },
  ];

  return (
    <section className={styles.roadmapSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          From Discovery to Commercialization
        </Heading>
        <p className={styles.sectionSubtitle}>
          Net-gain fusion demonstrated. Now scaling to practical applications.
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
      description="Maximus Fusion — compact fusion research by MAXIMUS FUSION SYSTEMS, LLC. Peer-reviewed solid-state D–D results; lithium–acoustic engineering vision.">
      <HomepageHeader />
      <main>
        <AudienceSection />
        <LatestUpdatesSection />
        <TechnologyOverview />
        <RoadmapPreview />
        <CallToAction />
      </main>
    </Layout>
  );
}
