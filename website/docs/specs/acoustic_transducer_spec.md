---
id: acoustic-transducer
title: Acoustic Transducer Specification
sidebar_label: Acoustic Transducer
sidebar_position: 2
---

# Acoustic Transducer Specification

## 1. General Description

**Device Type**: Piezoelectric ultrasonic transducers in phased array configuration  
**Primary Function**: Generate controlled acoustic fields in liquid lithium for surface stabilization and diagnostics  
**Application**: Active control system for L.A.F.R.E.S. liquid blanket

## 2. Array Configuration

| Parameter | Value | Units | Notes |
|-----------|-------|-------|-------|
| Total number of transducers | 32 - 72 | — | Scalable |
| Vertical rings | 4 - 6 | — | Stacked layers |
| Elements per ring | 8 - 12 | — | Azimuthal symmetry |
| Element spacing | 20 - 50 | mm | λ/2 to λ at mid-frequency |
| Total acoustic power | 1 - 10 | kW | System-level |
| Power per transducer | 10 - 200 | W | Electrical input |

## 3. Individual Transducer Specifications

### 3.1 Physical

| Parameter | Value | Units |
|-----------|-------|-------|
| Active element diameter | 20 - 50 | mm |
| Thickness | 10 - 30 | mm |
| Operating temperature (element) | &lt; 200 | °C |
| Storage temperature | -20 to +80 | °C |
| Mass per unit | 50 - 200 | g |

### 3.2 Electrical

| Parameter | Value | Units |
|-----------|-------|-------|
| Resonant frequency | 50 - 500 | kHz |
| Bandwidth (-3 dB) | ±10% | of f₀ |
| Capacitance | 1 - 10 | nF |
| Impedance (at resonance) | 50 - 500 | Ω |
| Maximum voltage | 100 - 200 | V_rms |
| Power handling | 10 - 200 | W |

### 3.3 Acoustic

| Parameter | Value | Units |
|-----------|-------|-------|
| Operating frequency range | 10 - 500 | kHz |
| Acoustic power output | 5 - 100 | W |
| Electro-acoustic efficiency | 40 - 70 | % |
| Beam angle (-6 dB) | ±15 - ±30 | degrees |
| Acoustic pressure (1 m, 100 W) | 0.1 - 1 | MPa |

## 4. Transducer Technology

**Piezoelectric Material**: Lead Zirconate Titanate (PZT-4 or PZT-8)

**Properties**:
- Curie temperature: 300 - 350°C
- Piezoelectric charge constant (d₃₃): 300 - 600 pC/N
- Electromechanical coupling (k₃₃): 0.65 - 0.75
- Dielectric constant: 1000 - 3000

**Alternative** (for higher temperature):
- Magnetostrictive (Terfenol-D): Operational to 400°C, but lower efficiency

## 5. Transducer Construction

**Layered Structure**:
```
Backing layer (acoustic absorber, damping)
↓
PZT element (active)
↓
Matching layer (impedance transformer)
↓
Wear plate / protective layer
```

**Backing Layer**:
- Material: Epoxy-tungsten composite
- Purpose: Damp ringing, improve bandwidth
- Thickness: λ/4 at f₀

**Matching Layer**:
- Material: Alumina, tungsten carbide, or epoxy-ceramic composite
- Purpose: Improve transmission into lithium (impedance matching)
- Thickness: λ/4 at f₀
- Target impedance: √(Z_PZT × Z_lithium) ≈ 10 MRayls

**Protective Layer**:
- Material: Stainless steel or molybdenum foil (0.1 - 0.5 mm)
- Purpose: Corrosion resistance, electrical isolation

**Housing**:
- Material: Stainless steel 316L
- Hermetic seal (O-ring or welded)
- Electrical connector: BNC, SMA, or custom (waterproof)

## 6. Thermal Management

**Challenge**: PZT Curie temperature ~300-350°C, but adjacent to lithium at 400-500°C

**Cooling Strategy**:

| Component | Method | Details |
|-----------|--------|---------|
| Transducer backing | Water-cooled plate | Circulating water at 20-50°C |
| Thermal insulation | Ceramic spacer | 10-20 mm alumina between transducer and hot wall |
| Heat pipe (optional) | Sodium or potassium | Transfers heat away from transducer |
| Active monitoring | Thermocouples | On each transducer, alarm if T > 180°C |

**Heat Dissipation**:
- Electrical losses: ~30-60% of input power (depending on efficiency)
- Example: 100 W input, 50 W acoustic output, 50 W heat
- Cooling capacity per transducer: 50-100 W

**Cooling System** (array-level):
- Total heat rejection: 2-5 kW (for 50-transducer array)
- Chiller: 1-2 ton capacity (3.5-7 kW)
- Flow rate: 5-10 L/min
- Coolant: Water + ethylene glycol (if below freezing environment)

## 7. Drive Electronics

### 7.1 Per-Channel Amplifier

**Type**: Class D or Class E (high efficiency switching amplifier)

| Parameter | Value | Units |
|-----------|-------|-------|
| Output power | 10 - 200 | W |
| Frequency range | 10 - 500 | kHz |
| Efficiency | > 80 | % |
| Gain | 20 - 40 | dB |
| Input signal level | 0 - 10 | V |
| Output impedance | 50 | Ω (matched to transducer) |

**Impedance Matching**:
- LC network (inductor + capacitor)
- Tuned to transducer resonant frequency
- Adaptive tuning (optional): Varactor diodes or switched capacitor banks

### 7.2 Signal Generation (FPGA-based)

**Architecture**:
```
FPGA → DAC (per channel) → Amplifier → Matching network → Transducer
```

**FPGA Functions**:
- Direct Digital Synthesis (DDS): Generate sine waves at arbitrary frequency
- Phase control: 16-bit resolution (360°/65536 ≈ 0.006° steps)
- Amplitude control: 16-bit resolution
- Multi-frequency synthesis: Sum of up to 4 frequencies per channel

**DAC Specifications**:
- Resolution: 14 - 16 bits
- Sampling rate: 1 - 10 MSPS (>2× highest frequency)
- Vendor: Analog Devices, Texas Instruments

**FPGA**:
- Model: Xilinx Zynq UltraScale+, Intel Cyclone V, or similar
- Logic elements: > 50K (for 64-channel system)
- I/O: Sufficient for 32-72 DAC channels + control

## 8. Acoustic Field Specifications

### 8.1 Frequency Bands

| Band | Frequency Range (kHz) | Purpose | Number of Transducers |
|------|------------------------|---------|------------------------|
| Low | 10 - 50 | Global cavity modes | 8 - 16 |
| Mid | 50 - 200 | Surface mode suppression | 16 - 32 |
| High | 200 - 500 | Fine control, diagnostics | 8 - 24 |

**Multi-frequency operation**: Each transducer can output multiple frequencies simultaneously (synthesized digitally)

### 8.2 Spatial Field Characteristics

**Pressure amplitude** (in lithium):
- Target: 0.1 - 1 MPa (1 - 10 bar acoustic pressure)
- Uniformity: ±20% across control volume

**Radiation pressure** (on lithium surface):
- P_rad = &lt;p²&gt; / (ρc²) ≈ 0.05 - 0.5 MPa (0.5 - 5 bar DC force)

**Wavelength in lithium** (c ≈ 4500 m/s):
- At 10 kHz: λ = 45 cm
- At 100 kHz: λ = 4.5 cm
- At 500 kHz: λ = 0.9 cm

## 9. Control Specifications

### 9.1 Control Bandwidth

| Parameter | Value | Units |
|-----------|-------|-------|
| Sensor sampling rate | 1 - 10 | kHz |
| Control update rate | 1 - 10 | kHz |
| Actuator response time | &lt; 1 | ms |
| Total loop latency | &lt; 5 | ms |

### 9.2 Control Modes

**Open-Loop**:
- Pre-programmed waveforms (amplitude, phase per transducer)
- No feedback
- Simple, but limited effectiveness

**Closed-Loop** (baseline):
- Feedback from acoustic pressure sensors, level sensors
- PID or model-predictive control (MPC)
- Adaptive: Adjusts to changing conditions

**Machine Learning** (advanced, Phase 2+):
- Reinforcement learning for optimal control
- Trained on simulation + experimental data

## 10. Sensor Integration (Complementary)

**Acoustic Pressure Sensors**:
- Type: Piezoelectric or MEMS
- Number: 10 - 30 (distributed in lithium or on boundaries)
- Bandwidth: DC to 1 MHz
- Sensitivity: 10 - 100 mV/bar

**Level Sensors**:
- Type: Capacitive or ultrasonic
- Number: 3 - 5 (measure lithium surface height at multiple points)
- Resolution: 0.1 - 1 mm
- Sampling rate: 10 - 100 Hz

**Synchronization**: All sensors and actuators time-stamped to &lt;1 ms accuracy (GPS or NTP)

## 11. Safety Features

**Over-Power Protection**:
- Current sensing on each amplifier
- Shutdown if current > 150% nominal

**Over-Temperature Protection**:
- Thermocouples on transducers
- Alarm if T > 180°C, shutdown if T > 200°C

**Fault Detection**:
- Impedance monitoring (detect open/short circuit)
- Acoustic field anomaly detection (via pressure sensors)

**Emergency Shutdown**:
- Ramp down acoustic power over 5 seconds (avoid sudden transients)
- Can be triggered manually or by safety PLC

## 12. Performance Metrics

| Metric | Target | Acceptance |
|--------|--------|------------|
| Surface displacement reduction | > 80% | > 60% |
| Acoustic power delivered | 1 - 10 kW | > 500 W |
| System uptime | > 99% | > 95% |
| Transducer failure rate | &lt; 1 per 1000 hours | &lt; 1 per 500 hours |
| Control latency | &lt; 5 ms | &lt; 10 ms |

## 13. Testing and Commissioning

**Phase 1: Bench Test (Air)**:
- Individual transducer characterization (frequency response, power handling)
- Impedance measurement (network analyzer)

**Phase 2: Water Tank Test**:
- Beam profiling (hydrophone scan)
- Multi-transducer phasing (verify constructive/destructive interference)

**Phase 3: Cold Lithium Test**:
- Install in L.A.F.R.E.S. vessel (lithium solid, ~room temperature)
- Acoustic field mapping (embedded sensors)

**Phase 4: Hot Lithium Test**:
- Heat lithium to operating temperature (400°C)
- Test surface stabilization (apply mechanical disturbance, verify damping)

**Phase 5: Integrated Test**:
- With fusion core operating (neutron heating)
- Closed-loop control validation

## 14. Maintenance

| Task | Frequency | Procedure |
|------|-----------|-----------|
| Visual inspection | Weekly | Check cables, connectors |
| Impedance check | Monthly | Measure with network analyzer, compare to baseline |
| Thermal performance | Monthly | Verify cooling, check thermocouple readings |
| Transducer replacement | As needed | Typically &lt;5% failure rate per year |
| Calibration | Annually | Re-measure acoustic output, sensitivity |

**Transducer Lifetime**: 
- Expected: > 5000 hours continuous operation
- Failure modes: PZT cracking (thermal cycling), bond delamination, lead wire breakage

## 15. Estimated Cost

| Item | Cost per Unit (USD) | Quantity | Total (USD) |
|------|---------------------|----------|-------------|
| PZT transducers (custom) | $300 - $800 | 32 - 72 | $10K - $60K |
| Amplifiers (Class D/E) | $200 - $500 | 32 - 72 | $6K - $36K |
| FPGA board + DACs | $5K - $15K | 1 | $5K - $15K |
| Cooling system (chiller, plumbing) | $3K - $10K | 1 | $3K - $10K |
| Matching networks | $100 - $200 | 32 - 72 | $3K - $14K |
| Acoustic sensors | $200 - $500 | 10 - 30 | $2K - $15K |
| Cabling, connectors | — | — | $2K - $5K |
| Assembly, integration | — | — | $10K - $20K |
| **Total** | | | **$41K - $175K** |

## 16. Vendors and Suppliers

**Transducers**: Olympus, Panametrics, custom fabrication (Piezo Systems, APC International)  
**Amplifiers**: Amplifier Research, Tomco Technologies, custom design  
**FPGA Development**: Xilinx, Intel (Altera), Analog Devices  
**Cooling**: Laird Thermal, Lytron, PolyScience  
**Sensors**: PCB Piezotronics, Kistler, Dytran  

## 17. References

1. Kinsler et al., *Fundamentals of Acoustics*, Wiley (2000)
2. Olympus Technical Notes: Ultrasonic Transducers
3. Lee & Wang, "Acoustic radiation force," J. Acoust. Soc. Am. (1990)

---

**Document Version**: 1.0  
**Last Updated**: November 2025  
**Prepared by**: L.A.F.R.E.S. Acoustics Engineering Team


