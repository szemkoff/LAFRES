---
id: published-results
title: Published Research Results
sidebar_label: Published Results
sidebar_position: 0
---

# Published Research Results

:::tip Peer-Reviewed Publication
Our acoustic cavitation fusion results have been **peer-reviewed and published** in Nature Scientific Reports (May 2024).

**DOI:** [10.1038/s41598-024-62055-6](https://doi.org/10.1038/s41598-024-62055-6)
:::

## Executive Summary

Maximus Energy Corporation has discovered a remarkably simple approach to nuclear fusion. The method involves suspending solid titanium deuteride (TiD) particles in mineral oil in the presence of heavy water (D₂O) bubbles/droplets and subjecting the suspension to periodic acoustic influence.

### Key Results

| Metric | Value |
|--------|-------|
| **Peak Neutron Flux** | &gt;10,000× background |
| **Maximum Count Rate** | &gt;6,000 CPM |
| **Background Rate** | 0.6 CPM |
| **Operation Duration** | Hours (sustained) |
| **Acoustic Peaks** | &gt;24,000 psi |

---

## Experimental Setup

### Reactor Configuration

The experimental reactor consists of a 6" conflat vacuum tee with a viewport, filled with a working fluid comprising:
- Solid TiD (titanium deuteride) particles
- D₂O (heavy water) bubbles/droplets  
- Mineral oil suspension medium

![Experimental Fusion Reactor](/img/lab/fusion-reactor-setup.jpg)
*Figure 1: The experimental fusion reactor at Maximus Energy lab.*

### Reactor Block Diagram

![Reactor Block Diagram - Original](/img/experiments/ReactorBlockDiagram.png)
*Figure 2: The experimental reactor block diagram from the publication.*

### System Components (Diagram Recreation)

The diagram below recreates the system layout showing all interconnected components:

```mermaid
flowchart LR
    subgraph Detection["Neutron Detection"]
        He3["3He Detectors"]
        ANL["ANL"]
        PC["PC"]
        He3 --> ANL --> PC
    end

    subgraph MainReactor["Main Reactor Vessel"]
        direction TB
        FCD["FCD"]
        PCB["PCB"]
        VESSEL["OIL + D2O + TiD"]
        FCD --- VESSEL
        PCB --- VESSEL
    end

    subgraph Recirculation["Recirculation Loop"]
        direction TB
        PUMP["Pump"]
        SEC["Secondary Cavitation Chamber"]
        SON["Sonicator"]
        FILTER["Oil Filter"]
        HELOS["HELOS"]
        PUMP --> SEC
        SON --- SEC
        SEC --> FILTER
        FILTER --> HELOS
    end

    subgraph BottomSystems["Gas & Vacuum"]
        VAC["Vacuum Pump"]
        D2["D2 Cylinder"]
    end

    subgraph Monitoring["Acoustic Monitoring"]
        SCOPE["Oscilloscope"]
    end

    VESSEL --> He3
    PCB --> SCOPE
    VESSEL <--> PUMP
    HELOS --> VESSEL
    VAC --> VESSEL
    D2 --> VESSEL

    style VESSEL fill:#add8e6,stroke:#333
    style FCD fill:#ffcc00,stroke:#333
    style He3 fill:#90EE90,stroke:#333
    style ANL fill:#87CEEB,stroke:#333
```

**Key Components:**

| Symbol | Component | Function |
|--------|-----------|----------|
| **FCD** | Fisher Cavitation Driver | 500W, 20 kHz acoustic driver |
| **PCB** | PCB Piezotronics 113B23 | Acoustic pressure sensor |
| **3He** | LND 251106 Detectors | Neutron detection (×6) |
| **ANL** | Automated Nuclear Lab | 8-channel MCA/pulse processor |
| **HELOS** | SympaTEC HELOS | Inline particle size analyzer |
| **D₂** | Deuterium Cylinder | Deuterium gas supply |

### Equipment Specifications

| Component | Model | Specification |
|-----------|-------|---------------|
| **Main Acoustic Driver** | Fisher SFX | 500 Watt, 20 kHz piezoelectric |
| **Acoustic Sensor** | PCB Piezotronics 113B23 | Piezoelectric transducer |
| **Neutron Detectors** | LND 251106 | ³He-filled proportional counters (×6) |
| **Data Acquisition** | Automated Nuclear Lab (ANL) | 8-channel MCA/pulse processor |
| **Particle Analyzer** | SympaTEC HELOS/Sucell | Inline laser diffraction |
| **Software** | PulseCounter Pro | Real-time acquisition & statistics |

### Neutron Detector Assembly

![Neutron Detector Assembly](/img/experiments/fig3-neutron-detector-assembly.jpg)
*Figure 3: The neutron detector assembly of six LND 251106 ³He proportional counters.*

### Automated Nuclear Lab System

![ANL System](/img/experiments/fig4-anl-system.png)
*Figure 4: The Automated Nuclear Lab (ANL) system for real-time data acquisition and analysis.*

---

## Experimental Protocol

1. **Preparation**: Deposit mineral oil into reactor and degas using vacuum system with occasional cavitation
2. **Loading**: Introduce separately prepared TiD + D₂O suspension (1-500 mL volumes)
3. **Mixing**: Ensure homogeneous distribution of particles and bubbles
4. **Activation**: Activate main acoustic driver at 100% power in pulsed mode
   - Pulse cycle: 0.01 seconds ON / 0.01 seconds OFF
5. **Detection**: Monitor neutron flux via ³He detector assembly
6. **Analysis**: Process data through ANL and PulseCounter Pro

---

## Results

### Neutron Detection

When the TiD + D₂O suspension is deposited in the reactor and the acoustic driver is activated, **significant neutron flux is registered coincident with the acoustic influence**.

![Neutron Counts Comparison](/img/experiments/fig5-neutron-counts.png)
*Figure 5: Neutron counts due to background (blue) and with reactor operating (red). Note the dramatic increase during operation.*

![Raw Neutron Signal](/img/experiments/fig6-raw-signal.png)
*Figure 6: Raw neutron detector signal. Each vertical line is a neutron event. The periodic nature of neutron events is clearly coincident with the acoustic driver being active.*

**Key Observations:**
- Neutron events are clearly periodic, coincident with acoustic driver activation
- Thermal neutron spectrum acquired over one hour of continuous operation
- Statistical significance confirmed via Student's T-test and P-value calculation

### Acoustic Measurements

![Acoustic Signal](/img/experiments/fig7-acoustic-signal.jpg)
*Figure 7: The acoustic signal from the reactor showing massive (clipping) acoustic spikes exceeding 24,000 psi.*

Massive acoustic spikes are observed during operation:
- Peak pressures occasionally exceeding **24,000 psi** (165 MPa)
- Spikes originate from expansion of rebounding bubbles after collapse
- Neutron emission correlates with presence of these extreme acoustic peaks

---

## Proposed Fusion Mechanism

```mermaid
flowchart LR
    subgraph Input["Acoustic Input"]
        A["20kHz 500W Driver"] --> B["Acoustic Waves"]
    end
    
    subgraph Cavitation["Bubble Dynamics"]
        B --> C["D2O Bubble Oscillation"]
        C --> D["Bubble Collapse"]
        D --> E["Cavitation Jets"]
    end
    
    subgraph Fusion["Fusion Event"]
        E --> F["Jets Impact TiD"]
        F --> G["Lattice Compression"]
        G --> H["D-D Fusion"]
    end
    
    subgraph Output["Output"]
        H --> I["2.45 MeV Neutrons"]
        D --> J["Rebound 24000 psi"]
    end
    
    style H fill:#f97316,color:#fff
    style I fill:#22c55e,color:#fff
    style J fill:#dc2626,color:#fff
```

**Hypothesis:** Nuclear fusion occurs when cavitation jets from collapsing D₂O bubbles impinge upon suspended TiD particles, forcing deuterium dissolved in the titanium lattice to fuse.

This process may be related to pyroelectric fusion discovered by Naranjo, Gimzewski and Putterman, although the detailed mechanism is still under investigation.

---

## Detection System: Automated Nuclear Lab

Maximus Energy Corporation developed the **Automated Nuclear Lab (ANL)** system specifically for high-veracity nuclear experimentation.

### ANL Capabilities

| Feature | Description |
|---------|-------------|
| **Channels** | 8 simultaneous instruments |
| **Detectors** | Scintillators, proportional counters, solid state, analog sensors |
| **Analysis** | Real-time pulse counting, spectra, histograms |
| **Statistics** | Student's T-test, P-value, Poisson goodness-of-fit |
| **Calibration** | Po-Be source for thermal neutron spectrum |

### PulseCounter Pro Features

- Determines statistical significance between experiment and background
- Evaluates Poisson distribution fit
- Raw signal examination with individual pulse browsing
- Noise rejection and artifact filtering

---

## Scaling Potential

| Scale Factor | Application | Market |
|--------------|-------------|--------|
| **1,000×** | Medical isotope production | Nuclear pharmacology |
| **10,000×** | Neutron imaging systems | Non-destructive testing |
| **1,000,000×** | Portable fusion power | Distributed energy |

---

## Current Research Focus

### Phase I Objectives

1. **CFD Modeling (OpenFOAM)**
   - Model single bubble collapse in reactor conditions
   - Predict shockwave magnitude vs. acoustic drive parameters
   - Determine optimal bubble size for 24,000+ psi peaks

2. **Microfluidic Bubble Generation**
   - Generate D₂O microbubbles/droplets of controlled size
   - Achieve narrow, single-peak size distribution (1-100 μm)
   - Enable reproducible experimental conditions

### Technical Challenges

- D₂O bubble/droplet dynamics in mineral oil is not well researched
- Water-in-oil microfluidic generation (phase reversal from standard systems)
- Complex multi-bubble interactions
- Dependency on bubble size, concentration, and acoustic parameters

---

## Publications & References

### Primary Publication

> **Acoustic Cavitation Fusion in Titanium Deuteride Systems**  
> Nature Scientific Reports, May 2024  
> DOI: [10.1038/s41598-024-62055-6](https://doi.org/10.1038/s41598-024-62055-6)

### Related Work

1. Automated Nuclear Lab system documentation
2. PulseCounter Pro software documentation
3. Detailed experimental reports (internal)
4. Naranjo, Gimzewski, Putterman - Pyroelectric fusion

---

## Significance

This discovery offers an alternative to traditional multi-billion dollar fusion installations like ITER or NIF:

| Aspect | Traditional Fusion | Acoustic Cavitation Fusion |
|--------|-------------------|---------------------------|
| **Facility Cost** | $10B+ | &lt;$1M |
| **Complexity** | Extreme (plasma containment) | Simple (no plasma) |
| **Scale** | Stadium-sized | Tabletop |
| **Team Required** | Hundreds of scientists | Small team |
| **Temperature** | 100M+ °C | Near ambient |

---

## Contact

- **Research inquiries:** research@lafres.org
- **Laboratory:** Maximus Energy Corporation, Naples, FL
- **Publication:** [doi:10.1038/s41598-024-62055-6](https://doi.org/10.1038/s41598-024-62055-6)

