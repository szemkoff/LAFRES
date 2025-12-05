# Plasma Core Specification

## 1. General Description

**Device Type**: Pulsed Inertial Electrostatic Confinement (IEC) Fusor  
**Primary Function**: Controlled neutron generation via D-D fusion  
**Application**: Research neutron source for L.A.F.R.E.S. system

## 2. Performance Specifications

| Parameter | Value | Units | Notes |
|-----------|-------|-------|-------|
| **Neutron Output** | | | |
| Peak neutron rate | 10⁸ - 10¹⁰ | n/s | During pulse |
| Average neutron rate | 10⁶ - 10⁹ | n/s | Time-averaged over pulse cycle |
| Neutron energy (D-D) | 2.45 ± 0.1 | MeV | Primary |
| Neutron energy (D-T, optional) | 14.1 ± 0.3 | MeV | Phase 3+ only |
| **Electrical** | | | |
| Operating voltage | 30 - 100 | kV | Negative polarity (cathode) |
| Peak current | 0.1 - 1 | A | During pulse |
| Pulse duration | 10 - 100 | μs | Adjustable |
| Pulse repetition rate | 1 - 100 | Hz | Adjustable |
| Duty cycle | 0.1 - 1 | % | Pulse width × rep rate |
| Average power | 1 - 10 | kW | Typical operation |
| Peak power | 1 - 10 | MW | Pulsed |
| **Gas System** | | | |
| Operating pressure | 10⁻⁴ - 10⁻² | Torr | Deuterium |
| Base pressure | < 10⁻⁶ | Torr | Before gas injection |
| Gas species | D₂ | — | Primary |
| Gas flow rate | 0.1 - 10 | sccm | Continuous or pulsed |

## 3. Physical Dimensions

| Component | Dimension | Units |
|-----------|-----------|-------|
| Vacuum chamber ID | 300 - 500 | mm |
| Vacuum chamber thickness | 3 - 5 | mm |
| Cathode grid diameter | 50 - 100 | mm |
| Cathode wire diameter | 0.5 - 2 | mm |
| Overall height | 400 - 600 | mm |
| Total mass | 20 - 50 | kg |

## 4. Materials

**Vacuum Chamber**:
- Material: Stainless steel 304L or 316L
- Surface finish: Electropolished (Ra < 0.4 μm)
- Leak rate: < 10⁻⁹ Torr·L/s

**Cathode Grid**:
- Material: Tungsten (W) or Molybdenum (Mo)
- Purity: >99.95%
- Grid configuration: Spherical or dodecahedral
- Number of wires: 6 - 12
- Transparency: > 90% (open area fraction)

**High Voltage Feedthrough**:
- Insulator: Alumina (Al₂O₃) or high-purity ceramic
- Voltage rating: > 150 kV (safety factor 1.5×)
- Flange: ConFlat (CF) standard

**Windows** (optional, for optical diagnostics):
- Material: Fused silica or sapphire
- Thickness: 10 - 20 mm
- Diameter: 25 - 50 mm
- Anti-reflective coating: Broadband visible

## 5. High Voltage Power Supply

**Type**: Pulsed DC supply with capacitor bank

**Specifications**:
- Output voltage: 0 - 100 kV (variable)
- Voltage regulation: ±1%
- Output current: 0 - 1 A (current-limited)
- Pulse modulator: IGBT or thyristor
- Energy storage: 1 - 10 J per pulse (capacitor bank)
- Charging time: < 100 ms (for 10 Hz operation)
- Safety interlocks: Door switches, over-current trip, ground fault detection

**Vendor Options**:
- Glassman High Voltage
- Spellman High Voltage
- Custom design (lower cost but requires engineering)

## 6. Vacuum System

**Turbomolecular Pump**:
- Pumping speed: 500 - 1000 L/s (N₂)
- Compression ratio: > 10⁹ (H₂)
- Vendor: Pfeiffer, Edwards, Agilent

**Backing Pump**:
- Type: Scroll pump or rotary vane
- Pumping speed: 10 - 30 m³/hr
- Ultimate pressure: < 10⁻² Torr

**Pressure Gauges**:
- High vacuum: Ionization gauge (10⁻¹⁰ to 10⁻³ Torr)
- Medium vacuum: Convectron or Pirani (10⁻⁴ to 1000 Torr)

**Gas Injection**:
- Mass flow controller (MFC): 0 - 10 sccm D₂
- Vendor: MKS, Brooks, Alicat
- Pulsed valve (optional): For pulsed gas injection

## 7. Cooling Requirements

**Cathode**:
- Cooling method: Radiative (self-cooling)
- Operating temperature: 1000 - 2000°C (typical for W)
- No active cooling required (low duty cycle)

**Chamber**:
- Cooling method: Natural convection or forced air
- Heat load: 500 - 2000 W (average)
- Water cooling (optional): If higher power operation

## 8. Diagnostics and Instrumentation

**Required**:
- Voltage monitor: 1000:1 HV probe
- Current monitor: Rogowski coil or current transformer
- Pressure gauge: Ionization + Pirani
- Neutron detector: Scintillator or ³He counter (external to chamber)

**Optional**:
- Optical spectroscopy: Fiber-coupled spectrometer (200-1000 nm)
- Fast camera: Imaging of plasma (>10,000 fps)
- Residual gas analyzer (RGA): Mass spectrometer for leak detection

## 9. Safety Features

**Electrical Safety**:
- Interlocked enclosure (NEMA 4X or equivalent)
- Ground fault detection
- Over-current shutdown
- Discharge circuit (automatic and manual)
- Warning lights and signage

**Radiation Safety**:
- Shielding: Polyethylene or borated materials around chamber
- Neutron monitoring: Area detectors with alarms
- X-ray shielding: 5-10 mm lead or equivalent

**Vacuum Safety**:
- Pressure relief: Burst disk or relief valve (>2 bar)
- Implosion shield: Polycarbonate or wire mesh around chamber

**Gas Safety**:
- Deuterium leak detection: Hydrogen sensors
- Ventilation: Exhaust hood or room ventilation
- Emergency shutoff: Manual valve on gas cylinder

## 10. Control Interface

**Local Control Panel**:
- Voltage setpoint (potentiometer or digital)
- Pulse rate control
- Emergency stop button
- Status indicators (vacuum, gas, HV)

**Remote Control** (optional):
- Digital interface: RS-232, Ethernet, or USB
- LabVIEW or Python control software
- Data logging: Voltage, current, pressure, neutron rate

## 11. Operational Modes

**Mode 1: Continuous Operation**:
- Constant voltage, continuous gas flow
- Steady-state neutron production
- Power: 1-5 kW average

**Mode 2: Pulsed Operation** (baseline):
- Pulsed HV (10-100 μs pulses)
- Repetition rate: 1-100 Hz
- Reduced average power, higher peak neutron flux

**Mode 3: Single-Shot**:
- Manual trigger for single pulse
- For debugging, diagnostics

## 12. Performance Metrics and Acceptance Criteria

| Metric | Target | Acceptance |
|--------|--------|------------|
| Neutron rate (average) | 10⁸ n/s | > 10⁷ n/s |
| Voltage stability | ±1% | ±3% |
| Vacuum base pressure | < 10⁻⁶ Torr | < 10⁻⁵ Torr |
| Leak rate | < 10⁻⁹ Torr·L/s | < 10⁻⁸ Torr·L/s |
| Uptime (after 100 hr break-in) | > 95% | > 90% |
| Cathode lifetime | > 500 hours | > 200 hours |

## 13. Testing and Commissioning

**Phase 1: Vacuum Testing**:
- Pump down to base pressure
- Leak check (helium sniffer)
- RGA scan (identify contaminants)

**Phase 2: Electrical Testing**:
- HV ramp test (no gas, verify no arcing)
- Interlock verification

**Phase 3: Plasma Formation**:
- Introduce deuterium
- Ramp voltage until plasma visible (typically >20 kV)
- Optimize pressure for stable operation

**Phase 4: Neutron Production**:
- Install neutron detectors
- Increase voltage to fusion regime (>40 kV)
- Measure neutron rate vs. voltage, pressure

**Phase 5: Integration**:
- Connect to L.A.F.R.E.S. control system
- Verify safety interlocks
- Test pulsed operation modes

## 14. Maintenance Schedule

| Item | Frequency | Procedure |
|------|-----------|-----------|
| Visual inspection | Weekly | Check for arcing, damage |
| Vacuum leak check | Monthly | Helium leak detector |
| Cathode inspection | Every 200 hours | Vent, inspect for erosion |
| Turbo pump bearing check | Every 1000 hours | Listen for noise, vibration |
| HV cable inspection | Quarterly | Check insulation |
| Calibration (V, I, P) | Annually | Against standards |

## 15. Documentation Deliverables

- Mechanical drawings (CAD: SolidWorks, Fusion 360)
- Electrical schematics (HV supply, interlocks)
- Vacuum system P&ID
- Operating procedures (startup, shutdown, emergency)
- Safety analysis (hazards, controls)
- Test reports (acceptance test results)

## 16. Estimated Cost

| Item | Cost (USD) |
|------|------------|
| Vacuum chamber (custom fabrication) | $5K - $15K |
| Cathode grid (W or Mo, machined) | $2K - $5K |
| HV power supply | $15K - $50K |
| Turbo pump + backing pump | $10K - $25K |
| Pressure gauges, valves | $3K - $8K |
| HV feedthrough, insulators | $2K - $5K |
| Gas handling (MFC, cylinder, regulator) | $3K - $7K |
| Shielding (neutron, X-ray) | $5K - $20K |
| Instrumentation (neutron detector, etc.) | $10K - $30K |
| Assembly, testing | $10K - $20K |
| **Total** | **$65K - $185K** |

## 17. Vendors and Suppliers

**Vacuum Components**: Kurt J. Lesker, MDC Vacuum, Nor-Cal Products  
**HV Supplies**: Glassman, Spellman, Matsusada  
**Pumps**: Pfeiffer, Edwards, Agilent  
**Neutron Detectors**: Ludlum, Canberra, LND Inc.  
**Gas Handling**: MKS, Swagelok, Parker Hannifin  
**Tungsten/Mo**: Alfa Aesar, American Elements  

## 18. References

1. Miley & Murali, *Inertial Electrostatic Confinement (IEC) Fusion*, Springer (2014)
2. fusor.net community (extensive DIY fusor documentation)
3. Thorson et al., "Neutron production from D-D fusion," Fusion Sci. Technol. (2011)

---

**Document Version**: 1.0  
**Last Updated**: November 2025  
**Prepared by**: L.A.F.R.E.S. Fusion Engineering Team


