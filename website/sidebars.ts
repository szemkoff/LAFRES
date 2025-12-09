import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'overview',
    'system-architecture',
    {
      type: 'category',
      label: 'Laboratory',
      collapsed: false,
      items: [
        'lab/facilities',
      ],
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      collapsed: false,
      items: [
        'physics-background',
        'liquid-lithium-module',
        'acoustic-field-matrix',
        'microfusion-core',
        'thermoelectric-conversion',
        'control-system-ai',
        'safety-protocols',
        'regulatory-constraints',
      ],
    },
    {
      type: 'category',
      label: 'Component Specifications',
      collapsed: true,
      items: [
        'specs/plasma-core',
        'specs/acoustic-transducer',
        'specs/lithium-system',
        'specs/neutron-shield',
        'specs/thermoelectric',
        'specs/control-electronics',
        'specs/materials',
      ],
    },
    {
      type: 'category',
      label: 'Design',
      collapsed: true,
      items: [
        'design/cad-requirements',
        'design/pressure-vessel-design',
        'design/lithium-loop-design',
        'design/acoustic-shell-geometry',
        'design/thermal-converter-layout',
        'design/wiring-harness-map',
      ],
    },
    {
      type: 'category',
      label: 'Simulations',
      collapsed: true,
      items: [
        'simulations/lithium-cfd',
        'simulations/heat-transfer-model',
        'simulations/acoustic-fe-analysis',
        'simulations/plasma-burst',
      ],
    },
    {
      type: 'category',
      label: 'Safety',
      collapsed: true,
      items: [
        'safety/safety-overview',
        'safety/lithium-safety',
        'safety/radiation-protocols',
        'safety/emergency-procedures',
        'safety/tritium-handling',
      ],
    },
    {
      type: 'category',
      label: 'Roadmap',
      collapsed: true,
      items: [
        'roadmap/roadmap-overview',
        'roadmap/phase-0-simulation',
        'roadmap/phase-1-prototype',
        'roadmap/phase-2-validation',
        'roadmap/phase-3',
        'roadmap/cost-estimates',
      ],
    },
    {
      type: 'category',
      label: 'Research',
      collapsed: false,
      items: [
        'research/discoveries',
        'research/literature-review',
        'research/known-limitations',
        'research/acoustic-studies',
        'research/benchmark-devices',
        'research/tritium-breeding',
      ],
    },
    'diagrams',
    'glossary',
    'team',
    'faq',
  ],
};

export default sidebars;
