---
id: acoustic-field-matrix
title: Acoustic Field Matrix
sidebar_label: Acoustic Field Matrix
sidebar_position: 5
---

# Acoustic Field Matrix

## 1. Overview

The Acoustic Field Matrix is a phased array of ultrasonic transducers designed to actively control the liquid lithium surface, damp vibrations, and provide diagnostic information about the internal state of the blanket.

## 2. Functions and Objectives

### 2.1 Primary Functions

**Surface Stabilization**
- Suppress sloshing and surface waves
- Maintain stable interface between lithium and cover gas
- Counteract disturbances from neutron pulses and thermal transients

**Shock Damping**
- Absorb energy from pulsed fusion events
- Reduce mechanical stress on containment
- Prevent resonant buildup

**MHD Instability Control**
- Modify flow patterns to suppress magnetohydrodynamic instabilities
- Active damping of MHD-driven oscillations

**Diagnostics**
- Acoustic tomography for internal temperature/flow mapping
- Impedance measurement for material property monitoring
- Echo detection for interface tracking

### 2.2 Performance Targets

- Surface displacement reduction: &gt;80% (compared to passive)
- Control bandwidth: 1-1000 Hz
- Acoustic power: 1-10 kW total
- Spatial resolution: ~5-10 cm (acoustic wavelength limited)
- Latency: &lt;1 ms (sensor to actuator)

## 2. Acoustic Physics in Liquid Lithium

### 2.1 Wave Propagation

**Speed of sound** in lithium (400°C):
```
c ≈ 4500 m/s
```

**Acoustic impedance**:
```
Z = ρc ≈ 505 kg/m³ × 4500 m/s ≈ 2.3 × 10⁶ Pa·s/m
```

**Wavelength**:
```
λ = c/f
```

| Frequency | Wavelength |
|-----------|------------|
| 10 kHz | 45 cm |
| 50 kHz | 9 cm |
| 100 kHz | 4.5 cm |
| 500 kHz | 0.9 cm |

### 2.2 Attenuation

Acoustic attenuation in liquid metals:
```
α = α₀ f² (approximately)
```

For lithium: α₀ ~ 10⁻¹⁵ s²/m (low attenuation)

**Penetration depth**: Effectively entire blanket thickness (10-20 cm) for f < 500 kHz

### 2.3 Acoustic Radiation Pressure

Time-averaged pressure on surface:
```
P_rad = &lt;p²&gt; / (ρc²)
```

For 1 MPa acoustic pressure amplitude:
```
P_rad ≈ (10⁶)² / (505 × 4500²) ≈ 50 kPa
```

This force can counteract surface perturbations.

### 2.4 Acoustic Streaming

Steady flow induced by acoustic absorption:
```
v_stream ~ (α λ) v_acoustic²
```

Can enhance or suppress natural convection depending on configuration.

## 3. Transducer Array Design

### 3.1 Transducer Technology

**Type**: Piezoelectric (lead zirconate titanate, PZT)

**Advantages**:
- High power density
- Precise frequency control
- Fast response

**Challenges**:
- Curie temperature (~300-350°C for PZT)
- Requires thermal isolation from hot lithium

**Alternative** (for higher temperature): Magnetostrictive transducers (Terfenol-D), operational to ~400°C but lower efficiency

### 3.2 Array Geometry

**Configuration**: Cylindrical array surrounding lithium blanket

```
Vertical sections: 4-6 rings
Azimuthal elements per ring: 8-12
Total transducers: 32-72
```

**Spacing**: λ/2 to λ at mid-frequency (~2-5 cm element separation)

**Element size**: 2-5 cm diameter (matched to wavelength)

### 3.3 Frequency Allocation

**Multi-band strategy**:

| Band | Frequency | Mode number | Purpose |
|------|-----------|-------------|---------|
| Low | 10-30 kHz | m=0,1,2 | Global cavity modes |
| Mid | 30-100 kHz | m=3-8 | Intermediate scales |
| High | 100-500 kHz | m>8 | Fine structure, diagnostics |

**Simultaneous multi-frequency operation** (frequency multiplexing):
- Each transducer driven by sum of multiple sine waves
- Digital synthesis (FPGA-based arbitrary waveform generation)

### 3.4 Acoustic Coupling

**Interface layers**:
```
Transducer (PZT) → Matching layer → Containment wall (Mo/SS) → Lithium
```

**Matching layer**: Optimize acoustic impedance transition
- Material: Tungsten carbide, alumina, or epoxy-tungsten composite
- Thickness: λ/4 at operating frequency

**Coupling efficiency target**: &gt;70% (power transmitted into lithium)

## 4. Control Algorithms

### 4.1 Modal Control

**Approach**: Decompose surface motion into orthogonal modes (e.g., Bessel functions for cylindrical geometry)

**Mode equation** for free surface:
```
z(r,θ,t) = Σ A_mn J_m(k_mn r) cos(mθ) cos(ω_mn t + φ_mn)
```

**Control strategy**:
1. Measure mode amplitudes (from sensor array)
2. Calculate required actuator amplitudes/phases to cancel each mode
3. Apply via transducer array (inverse problem)

### 4.2 Adaptive Feedforward

**For periodic disturbances** (e.g., pulsed fusion at fixed rate):
- Learn disturbance waveform over several cycles
- Pre-emptively apply cancellation signal
- Reduces control latency issues

### 4.3 Model-Predictive Control (MPC)

**Advanced approach**:
1. Maintain real-time model of acoustic field + lithium dynamics
2. Predict future state (100-1000 ms ahead)
3. Optimize control inputs to minimize objective function (e.g., surface displacement)
4. Apply first step of control sequence, repeat

**Requirements**: Fast simulation (neural network surrogate or reduced-order model)

### 4.4 Machine Learning

**Reinforcement learning**:
- State: Sensor readings (temperature, pressure, level)
- Action: Transducer amplitudes and phases
- Reward: Negative of surface displacement variance
- Train in simulation, deploy to hardware

**Challenge**: Safety constraints (must not damage system during exploration)

## 5. Sensor Integration

### 5.1 Acoustic Sensors

**Type**: Piezoelectric pressure transducers or accelerometers

**Locations**:
- On containment wall (co-located with actuators)
- Additional positions for spatial diversity

**Bandwidth**: DC to 1 MHz (capture harmonics)

**Data rate**: 1-10 MHz sampling (>2× Nyquist of highest frequency)

### 5.2 Surface Measurement

**Capacitive level sensors**:
- Measure distance to lithium surface
- Multiple points for surface profile
- 1-10 kHz bandwidth

**Optical interferometry** (advanced):
- Non-contact, high precision (sub-micron)
- Requires optical access (viewport)
- May be impractical due to high temperature and radiation

### 5.3 Sensor Fusion

Combine measurements from:
- Acoustic pressure sensors (high temporal resolution)
- Level sensors (direct surface measurement)
- Thermocouples (indirect, via thermal-acoustic coupling)

**Kalman filter** or similar for optimal state estimation.

## 6. Power Electronics

### 6.1 Amplifier Requirements

**Specifications per channel**:
- Power: 10-200 W
- Frequency range: 10-500 kHz
- Waveform: Arbitrary (synthesized digitally)
- Efficiency: &gt;80% (Class D or E amplifier)

**Total system**:
- Number of channels: 32-72
- Total power: 1-10 kW

### 6.2 Signal Generation

**Architecture**:
```
FPGA → DAC (per channel) → Amplifier → Matching network → Transducer
```

**FPGA functions**:
- Real-time waveform synthesis (direct digital synthesis, DDS)
- Phase and amplitude control (16-bit resolution)
- Synchronization across all channels

**DAC**: 12-16 bit, 1-10 MSPS

### 6.3 Impedance Matching

Transducers present complex impedance (capacitive at resonance):
```
Z_transducer = R + j(ωL - 1/ωC)
```

**Matching network**: LC circuit tuned to operating frequency to maximize power transfer.

**Adaptive tuning** (optional): Varactor diodes or switched capacitor banks for real-time impedance matching as conditions change.

## 7. Thermal Management

### 7.1 Transducer Cooling

**Challenge**: Piezoelectric elements must stay below Curie temperature (~300-350°C), but adjacent to 400-500°C lithium

**Solutions**:
- **Thermal insulation**: Ceramic spacers between transducer and hot wall
- **Active cooling**: Water-cooled backing plates (heat sink)
- **Heat pipes**: High thermal conductivity path from transducer to external radiator

**Design target**: Transducer temperature &lt;200°C

### 7.2 Power Dissipation

**Sources**:
- Amplifier losses: ~20% of electrical input
- Transducer losses: ~10-30% (electrical to mechanical conversion)
- Acoustic absorption in lithium: ~1-10% (most energy remains acoustic or reflects)

**Heat rejection**: ~300 W - 2 kW (depending on acoustic power level)

**Cooling system**: Forced air or closed-loop water chiller

## 8. Acoustic Modes and Resonances

### 8.1 Cavity Modes

For cylindrical cavity (r: radial, θ: azimuthal, z: axial):

**Resonant frequencies**:
```
f_mnl = (c/2π) √[(k_mn/R)² + (lπ/H)²]
```

Where k_mn are zeros of Bessel functions J_m.

**Example** (R=30 cm, H=60 cm, c=4500 m/s):

| Mode (m,n,l) | Frequency (kHz) |
|--------------|-----------------|
| (0,1,0) | 11.9 |
| (1,1,0) | 14.5 |
| (0,2,0) | 19.4 |
| (0,1,1) | 24.0 |

### 8.2 Operational Strategy

**Avoid structural resonances**: Identify natural frequencies of containment vessel, ensure acoustic drive frequencies are off-resonance by &gt;10%.

**Exploit acoustic resonances**: Drive at cavity modes for efficient energy coupling, but control amplitude to prevent damage.

### 8.3 Nonlinear Effects

At high amplitude (&gt;1 MPa):
- Harmonic generation (2f, 3f, ...)
- Acoustic streaming (steady flows)
- Cavitation (bubble formation, to be avoided)

**Control**: Limit amplitude, monitor for nonlinear signatures

## 9. Safety and Fail-Safes

### 9.1 Over-Power Protection

**Limits**:
- Maximum acoustic power: 15 kW (150% of design)
- Maximum transducer voltage: 200 V (typical rating)
- Maximum temperature: 250°C (transducers)

**Actions** if exceeded:
- Automatic power reduction
- Alarm and log event
- If persistent, shutdown acoustic system

### 9.2 Transducer Failure

**Detection**:
- Impedance monitoring (detect open/short circuit or mechanical failure)
- Acoustic field mapping (identify dead zones)

**Response**:
- Reconfigure control algorithm (compensate with remaining transducers)
- Schedule maintenance

**Redundancy**: Design array with 10-20% excess capacity so system remains functional with several failed elements.

### 9.3 Runaway Prevention

**Risk**: Positive feedback loop (acoustic drive → larger surface oscillation → larger control signal → ...)

**Mitigation**:
- Gain limits in control loop
- Watchdog timers
- Manual override (operator can force low-power mode)

## 10. Experimental Validation (Phase 1)

### 10.1 Bench Testing Without Fusion

**Setup**:
- Lithium tank at operating temperature
- Acoustic array installed
- No neutron source (passive system)

**Tests**:
1. **Frequency sweep**: Identify cavity resonances, compare to simulation
2. **Impulse response**: Apply mechanical impulse (shake table), measure decay with/without acoustic damping
3. **Steady-state**: Measure temperature distribution, flow patterns (if tracers used)
4. **Control algorithm validation**: Test modal control, feedforward, MPC

### 10.2 Metrics

| Metric | Baseline (passive) | Target (active) | Measurement Method |
|--------|--------------------|-----------------|--------------------|
| Surface wave amplitude | 1-10 mm | &lt;1 mm | Capacitive sensors |
| Decay time (impulse) | 5-10 s | &lt;2 s | Transient measurement |
| Temperature uniformity | ±100°C | ±50°C | Thermocouple array |

### 10.3 Safety Testing

- **Thermal runaway**: Overheat scenario, verify shutdown
- **Transducer failure**: Disable random elements, verify graceful degradation
- **Power loss**: Loss of amplifiers, verify system safe state

## 11. Simulation Requirements

### 11.1 Finite Element Acoustic Model

**Software**: COMSOL Multiphysics, ANSYS Acoustic, or custom FEM code

**Domain**: 3D lithium volume + surrounding structure

**Physics**:
- Helmholtz equation (frequency domain) or wave equation (time domain)
- Boundary conditions: Acoustic source (transducers), absorbing boundaries (structure)
- Material properties: c(T), ρ(T), attenuation α(f,T)

**Mesh**: 6-10 elements per wavelength (λ_min at highest frequency)

**Outputs**:
- Pressure field p(x,y,z,f)
- Particle velocity v(x,y,z,f)
- Radiation pressure distribution

### 11.2 Coupled Acoustic-Thermal Model

**Approach**:
1. Acoustic FEM → volumetric heating (absorption)
2. Thermal FEM → temperature distribution
3. Update acoustic properties c(T), α(T)
4. Iterate to convergence

**Complexity**: High (multi-physics coupling), requires significant computational resources

### 11.3 Control System Simulation

**Digital twin**: Real-time model running alongside control algorithm

**Uses**:
- Testing control strategies before hardware deployment
- Predictive maintenance (model-data discrepancy indicates degradation)
- Operator training

## 12. Advanced Concepts (Future Research)

### 12.1 Acoustic Levitation

**Concept**: Use radiation pressure to levitate lithium droplets or internal objects (e.g., diagnostic probes)

**Application**: Non-contact positioning of neutron sources or sensors within lithium

### 12.2 Acoustic Cooling

**Concept**: Acoustic streaming to enhance convective heat transfer

**Benefit**: Potentially replace or supplement electromagnetic pumping

### 12.3 Sonofusion (Controversial)

**Note**: "Bubble fusion" or "sonofusion" claims (Taleyarkhan et al., 2002) were controversial and not reproduced reliably.

**L.A.F.R.E.S. stance**: Not relying on acoustic cavitation for fusion, but may investigate as supplemental neutron source in Phase 3+ if scientifically sound.

## 13. References

1. Kinsler et al., *Fundamentals of Acoustics*, Wiley (2000)
2. Leighton, *The Acoustic Bubble*, Academic Press (1994)
3. Lee & Wang, "Acoustic radiation force and streaming," J. Acoust. Soc. Am. (1990)
4. Dual & Möller, "Acoustic levitation in microgravity," J. Acoust. Soc. Am. (2012)

---

**Document Version**: 1.0  
**Last Updated**: November 2025  
**Author**: L.A.F.R.E.S. Acoustics Team


