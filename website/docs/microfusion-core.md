---
id: microfusion-core
title: Micro-Fusion Core
sidebar_label: Micro-Fusion Core
sidebar_position: 6
---

# Micro-Fusion Core

## 1. Overview

The micro-fusion core is a compact, pulsed neutron source based on inertial electrostatic confinement (IEC) principles. It generates controlled bursts of 2.45 MeV (D-D) or 14.1 MeV (D-T) neutrons for research purposes.

**Critical Disclaimer**: This core operates far below the Lawson criterion and does not produce net energy. It is a neutron source only.

## 2. Physics Principles

### 2.1 Inertial Electrostatic Confinement (IEC)

**Concept**: Ions accelerated by radial electric field toward center, collide at focus point.

**Basic configuration**:
```
- Spherical vacuum chamber (anode, grounded)
- Central cathode grid (high negative voltage, -30 to -100 kV)
- Deuterium gas fill (10⁻⁴ to 10⁻² Torr)
- Ions formed via ionization, accelerated inward
- Fusion occurs near cathode/center
```

### 2.2 Fusion Rate Estimation

Ion current I at cathode:
```
I ~ 0.1 - 1000 mA (depending on voltage, pressure, geometry)
```

Fusion cross-section for D-D at E=50 keV:
```
σ ≈ 10⁻²⁸ m² (0.01 barn)
```

Neutron yield (order of magnitude):
```
Y ~ ε × (I/e) × n_target × σ × L
```

Where:
- ε = efficiency factor (10⁻⁶ to 10⁻⁴, accounts for non-ideal focusing)
- I/e = ion flux (particles/s)
- n_target = target ion density
- σ = fusion cross-section
- L = effective path length

**Typical achievable yields**:
- Low-power fusor: 10⁴ - 10⁶ n/s (CW)
- High-power fusor: 10⁸ - 10¹⁰ n/s (CW or pulsed)

### 2.3 Pulsed Operation

**Advantages of pulsing**:
- Reduced average power (thermal management)
- Higher peak neutron flux (better signal-to-noise for diagnostics)
- Simplified control (discrete events)

**Parameters**:
- Pulse width: 10-100 μs
- Pulse rate: 1-100 Hz
- Duty cycle: 0.1-1%

**Peak power**: 1-10 MW (pulsed) vs. average 10-100 kW

## 3. Engineering Design

### 3.1 Vacuum Chamber

**Geometry**: Spherical, 30-50 cm inner diameter

**Material**: 
- Stainless steel 304 or 316L
- Thickness: 3-5 mm
- Electrical: Grounded (anode potential)

**Ports**:
- High voltage feedthrough (cathode connection)
- Gas injection (deuterium supply)
- Vacuum pumping (turbomolecular pump, 10⁻⁶ Torr base pressure)
- Diagnostics (pressure gauge, neutron detectors)
- Observation windows (if visual diagnostics needed)

**Insulation**: Ceramic standoffs for HV feedthrough (alumina, rated &gt;150 kV)

### 3.2 Cathode Grid

**Design**: 
- Spherical or polyhedral cage
- Diameter: 5-10 cm
- Wire diameter: 0.5-2 mm
- Material: Tungsten or molybdenum (high melting point, low sputtering)

**Grid transparency**: 
- &gt;90% open area (minimize ion interception losses)
- Typical: 6-12 wires in spherical pattern

**Thermal load**:
- Resistive heating (I²R from ion current)
- Electron bombardment
- Radiation (cooling via thermal emission)
- **Operating temperature**: 1000-2000°C possible (below W melting point of 3422°C)

### 3.3 High Voltage Power Supply

**Specifications**:
- Voltage: 30-100 kV (adjustable)
- Current: 0.1-1 A (continuous) or higher for pulsed
- Ripple: &lt;1% (to maintain stable plasma)
- Polarity: Negative (cathode at -HV, chamber grounded)

**Pulsed supply** (for pulsed operation):
- Capacitor bank: 1-10 J per pulse
- Switching: IGBT or thyristor (10-100 μs pulsewidth)
- Pulse shaping: LC network for controlled rise/fall time

**Safety**:
- Interlocks (door switches, emergency stop)
- Current limiting (prevent runaway discharge)
- Grounding and shielding (protect operators from X-rays and electrical hazard)

### 3.4 Gas Handling System

**Deuterium supply**:
- Gas cylinder (compressed D₂, lecture bottle or larger)
- Regulator and mass flow controller (MFC)
- Flow rate: 0.1-10 sccm (standard cubic cm per minute)

**Vacuum system**:
- Turbomolecular pump (500-1000 L/s pumping speed)
- Backing pump (roughing pump)
- Pressure control: Feedback loop (MFC setpoint based on pressure reading)

**Operating pressure**: 
- Typically 10⁻⁴ to 10⁻² Torr (optimize for maximum fusion rate)
- Too low: Insufficient target ions
- Too high: Excessive collisions, poor ion focusing

**Tritium handling** (optional, for D-T):
- Requires NRC license (USA) or equivalent
- Specialized containment, monitoring, waste management
- **L.A.F.R.E.S. baseline**: D-D only (avoid tritium complexity for Phase 1-2)

## 4. Performance Characteristics

### 4.1 Expected Neutron Yield

**Operating point** (example):
- Voltage: 60 kV
- Current: 10 mA
- Pressure: 5×10⁻³ Torr D₂
- Pulse: 50 μs @ 10 Hz (0.5% duty cycle)

**Neutron yield** (estimated):
- Per pulse: 10⁶ - 10⁸ neutrons
- Average rate: 10⁷ - 10⁹ n/s

**Uncertainty**: Factor of 3-10 (depends on focusing efficiency, geometry)

### 4.2 Energy Spectrum

**D-D neutrons**:
- Monoenergetic peak at 2.45 MeV
- Doppler broadening: ±100 keV (from ion thermal motion and laboratory frame effects)

**Background**:
- Scattered neutrons (lower energy, from thermalization in surrounding materials)
- Potential gamma rays from inelastic scattering

### 4.3 Spatial Distribution

**Isotropic emission** (approximately):
- Fusion occurs at central focus, neutrons emitted in all directions
- Slight anisotropy possible due to grid shadowing or beam effects

### 4.4 Temporal Profile

**Pulse shape**:
- Rise time: ~10 μs (capacitor discharge)
- Decay time: ~10-50 μs (ion de-focusing after voltage drops)
- Shot-to-shot variation: ~10-20% (typical for IEC fusors)

## 5. Diagnostics

### 5.1 Neutron Detection

**Inside lithium blanket** (thermalized neutrons):
- ³He proportional counters (high efficiency for thermal neutrons)
- BF₃ detectors (alternative)

**Outside chamber** (fast neutrons):
- Plastic scintillator + PMT (fast timing)
- Liquid scintillator (energy measurement via pulse height)
- Bubble detectors (passive integrating dosimeters)

**Calibration**: Use calibrated neutron source (Am-Be, Cf-252) for detector efficiency

### 5.2 Electrical Diagnostics

**Voltage monitor**: High voltage probe (1000:1 divider)

**Current monitor**: 
- Rogowski coil (AC current, for pulsed)
- Current transformer or shunt resistor

**Power calculation**: 
```
P = V × I (averaged over pulse)
```

### 5.3 Optical Diagnostics

**Visible emission**: 
- Spectroscopy (identify D_alpha, D_beta lines, impurities)
- Imaging (plasma distribution)

**Purpose**: 
- Verify plasma formation
- Detect air/water leaks (O, N lines)
- Monitor cleanliness

### 5.4 Pressure and Temperature

**Pressure**: Ionization gauge or capacitance manometer

**Temperature**: 
- Cathode: Optical pyrometer (if viewport available)
- Chamber: Thermocouple on outer wall

## 6. Safety Considerations

### 6.1 Electrical Hazards

**High voltage**: 30-100 kV is lethal
- Interlocked enclosure (door switches)
- Grounding procedures (discharge stick before access)
- Warning signage
- Lockout/tagout for maintenance

**X-rays**: 
- Generated by electron impacts on chamber walls
- Energy: Up to cathode voltage (30-100 keV)
- **Shielding**: Lead sheet (3-5 mm) around chamber, or operate in shielded room
- **Monitoring**: X-ray dosimeters

### 6.2 Neutron Radiation

**Dose rate** (approximate):
- At 1 meter from 10⁹ n/s source: ~1-10 mSv/hr (requires shielding and monitoring)

**Shielding**:
- Lithium blanket provides some moderation
- Additional polyethylene or water (hydrogen-rich materials for neutron thermalization)
- Boron-loaded materials for neutron capture

**Monitoring**:
- Area neutron monitors (rem counters)
- Personal dosimeters (neutron-sensitive TLDs or film badges)

**Regulatory**: Requires radiation license if neutron production exceeds threshold (varies by jurisdiction)

### 6.3 Deuterium Gas

**Hazards**:
- Flammable (like hydrogen)
- Asphyxiant (displaces oxygen)

**Mitigation**:
- Small quantities used (&lt;1 liter at STP in system)
- Leak detection (residual gas analyzer, hydrogen sensors)
- Ventilation
- No ignition sources

### 6.4 Vacuum Implosion

**Risk**: Chamber collapse if external pressure exceeds design limit

**Prevention**:
- Design chamber for full vacuum (1 atm external pressure)
- Safety factor &gt;3
- Pressure relief (prevent over-pressure if pump fails)

## 7. Operational Procedures

### 7.1 Startup

1. **Evacuate chamber**: Pump to &lt;10⁻⁶ Torr base pressure
2. **Bake-out** (optional): Heat chamber to 100-200°C for several hours to remove adsorbed water/gases
3. **Leak check**: Helium leak detector, ensure leak rate &lt;10⁻⁸ Torr·L/s
4. **Inject deuterium**: Ramp to operating pressure (e.g., 5×10⁻³ Torr)
5. **Apply voltage**: Ramp from 0 to operating voltage over 1-5 minutes
6. **Verify plasma**: Observe current, optical emission
7. **Check neutrons**: Confirm neutron detector counts above background

### 7.2 Normal Operation

**Monitoring** (continuous):
- Voltage, current (control system)
- Pressure (feedback control via MFC)
- Neutron rate (safety and performance)
- Chamber temperature (avoid overheating)

**Adjustments**:
- Optimize pressure for maximum neutron yield
- Adjust voltage/pulse rate as needed for experiments

### 7.3 Shutdown

1. **Ramp down voltage**: Gradual decrease to 0 over 1-5 minutes
2. **Close deuterium valve**: Stop gas flow
3. **Pump out deuterium**: Continue pumping to remove residual gas
4. **Vent to atmosphere** (if opening chamber): Backfill with dry nitrogen or air

### 7.4 Maintenance

**Cathode replacement**:
- After extended operation (500-1000 hours), cathode may erode due to sputtering
- Replacement: Vent chamber, open, replace grid, re-assemble, pump down

**Cleaning**:
- Vacuum chamber walls may accumulate sputtered material
- Clean with alcohol or mild detergent, rinse, dry

**Vacuum system**:
- Pump oil changes (if oil-sealed pumps used)
- Turbomolecular pump bearing inspection

## 8. Integration with L.A.F.R.E.S. System

### 8.1 Mechanical Interface

**Mounting**: 
- Fusion chamber centered within lithium blanket
- Supported by ceramic or metal standoffs (thermal and electrical insulation)
- Expansion joints to accommodate differential thermal expansion

### 8.2 Neutron Coupling

**Path**: 
```
Fusion core → Vacuum gap → Inner wall → Lithium blanket
```

**Transmission**: 
- Neutrons pass through thin inner wall (~1-2 mm metal)
- Minimal attenuation for 2.45 MeV neutrons
- Begin thermalization in lithium

### 8.3 Thermal Management

**Heat generation**:
- Cathode resistive heating: 100-1000 W
- Chamber wall (from electron/ion bombardment): 100-500 W

**Cooling**:
- Radiation from cathode (T~1500-2000°C)
- Conduction through supports
- Convection via vacuum (negligible)
- Net heat transfer to lithium: ~500-1500 W

**Impact on lithium**: Small additional heat load (compared to neutron deposition), but must be accounted for in thermal model.

### 8.4 Electrical Isolation

**Challenge**: Cathode at -30 to -100 kV, lithium contained in grounded vessel

**Solution**:
- Vacuum gap (~5 cm) between chamber and lithium
- Ceramic insulators (alumina) for structural support
- Verify breakdown voltage &gt;150 kV (safety margin &gt;1.5×)

## 9. Alternatives and Upgrades

### 9.1 Dense Plasma Focus (DPF)

**Advantages**: Higher neutron yield per pulse (10⁹-10¹¹ n/pulse demonstrated)

**Disadvantages**: 
- Higher peak power (10-100 kJ per pulse)
- More complex (coaxial electrode, gas puff)
- Harder to operate reliably

**Decision**: IEC baseline, DPF for Phase 3+ if higher yields needed

### 9.2 Beam-Target Fusion

**Concept**: Accelerate deuteron beam onto solid deuterium/tritium target

**Advantages**: Higher efficiency, better understood

**Disadvantages**: 
- Requires particle accelerator (larger, more expensive)
- Target erosion/replenishment

**Application**: Could be external neutron source for Phase 2 testing

### 9.3 Magnetized Target Fusion (MTF)

**Concept**: Compress magnetized plasma with external driver (e.g., acoustic or mechanical)

**Status**: Early research stage

**L.A.F.R.E.S. relevance**: Conceptually aligned (acoustic compression), but far from implementation

## 10. Simulation and Modeling

### 10.1 Particle-in-Cell (PIC) Simulation

**Software**: OOPIC, VSim, or custom code

**Purpose**: 
- Model ion trajectories in electric field
- Calculate space charge effects
- Predict fusion rate and neutron yield

**Validation**: Compare to experimental current-voltage characteristics, neutron measurements

### 10.2 Monte Carlo Neutron Transport

**Software**: MCNP, OpenMC, Geant4

**Purpose**: 
- Track neutrons from fusion point through chamber, lithium, shielding
- Calculate energy deposition, dose rates
- Optimize shielding design

**Input**: 
- Neutron source (position, energy, angular distribution from PIC simulation or point source approximation)
- Geometry and materials

**Output**: 
- Neutron flux distribution
- Energy deposition (heating)
- Dose rates outside system

## 11. References

1. Miley & Murali, *Inertial Electrostatic Confinement (IEC) Fusion*, Springer (2014)
2. Thorson et al., "Neutron production from D-D fusion in an IEC device," Fusion Sci. Technol. (2011)
3. Gu & Miley, "Experimental study of potential profile in a spherical IEC fusion device," IEEE Trans. Plasma Sci. (2000)

---

**Document Version**: 1.0  
**Last Updated**: December 2025  
**Author**: L.A.F.R.E.S. Fusion Core Team


