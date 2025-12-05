---
id: liquid-lithium-module
title: Liquid Lithium Module
sidebar_label: Liquid Lithium Module
sidebar_position: 4
---

# Liquid Lithium Module

## 1. Overview

The liquid lithium module serves as the primary neutron moderator, heat absorption medium, and thermal energy storage component of L.A.F.R.E.S.

## 2. Functional Requirements

### 2.1 Primary Functions
- **Neutron Moderation**: Thermalize 2.45 MeV (D-D) or 14.1 MeV (D-T) neutrons
- **Heat Absorption**: Capture kinetic energy from neutrons and secondary reactions
- **Thermal Transport**: Convey heat to extraction points via natural or forced convection
- **Tritium Breeding**: If ⁶Li present (simulation only in this project)
- **Radiation Shielding**: Attenuate neutron and gamma radiation

### 2.2 Performance Targets
- Operating temperature: 300-500°C (steady state)
- Temperature uniformity: ±50°C across volume
- Heat removal capacity: 10-100 kW
- Neutron thermalization efficiency: &gt;90%
- Operational lifetime: &gt;1000 hours (Phase 1), &gt;10,000 hours (Phase 3)

## 3. Material Selection

### 3.1 Lithium Isotope Composition

**Option A: Natural Lithium**
- ⁷Li: 92.5%, ⁶Li: 7.5%
- Pros: Lower cost, readily available
- Cons: Significant tritium production from ⁶Li(n,α)³H

**Option B: Enriched ⁷Li (&gt;99%)**
- ⁷Li: &gt;99%, ⁶Li: &lt;1%
- Pros: Minimal tritium production, simpler regulatory path
- Cons: Higher cost, limited suppliers

**Baseline Selection**: Enriched ⁷Li for safety and regulatory simplicity

### 3.2 Purity Requirements
- Total impurities: &lt;100 ppm
- Nitrogen: &lt;50 ppm (forms Li₃N, increases viscosity)
- Oxygen: &lt;50 ppm (forms Li₂O, corrosion products)
- Carbon: &lt;50 ppm
- Other metals: &lt;10 ppm each

### 3.3 Sourcing
- Suppliers: FMC Lithium, Albemarle, SQM
- Form: Ingots or pellets (melt in-situ)
- Quantity: 25-100 kg (50-200 liters at 505 kg/m³)

## 4. Containment Design

### 4.1 Vessel Material Selection

**Candidates:**
| Material | Max Temp (°C) | Corrosion Rate | Cost | Notes |
|----------|---------------|----------------|------|-------|
| 316L Stainless Steel | 450 | 1-10 mm/yr | Low | Acceptable for short-term |
| Molybdenum | 800 | &lt;0.1 mm/yr | High | Excellent compatibility |
| Niobium | 650 | &lt;0.1 mm/yr | High | Good, but reactive with O₂ |
| Tungsten | 1000 | &lt;0.05 mm/yr | Very High | Best performance |

**Baseline**: Molybdenum-lined stainless steel
- Structural shell: 316L SS (5-10 mm)
- Liner: Mo sheet (1-2 mm) or coating

### 4.2 Geometry

**Configuration**: Cylindrical annulus

```
Outer diameter: 600-800 mm
Inner diameter: 400-600 mm
Height: 500-800 mm
Lithium annulus thickness: 100-200 mm
Total volume: 50-200 liters
```

**Rationale**:
- Annular geometry provides uniform neutron capture
- Vertical orientation enables natural convection
- Accessible ports at top for maintenance

### 4.3 Thermal Insulation

**Inner insulation** (between vacuum chamber and lithium):
- Material: Alumina-silica fiber board
- Thickness: 20-50 mm
- Max temperature: 1200°C
- Thermal conductivity: ~0.1 W/(m·K)

**Outer insulation**:
- Material: Mineral wool or ceramic blanket
- Thickness: 50-100 mm
- Reduces heat loss to environment
- Maintains lithium temperature with lower input power

### 4.4 Seals and Joints

**Challenges**:
- High temperature (&gt;300°C) precludes elastomer seals
- Lithium reactivity requires inert atmosphere
- Thermal expansion mismatch

**Solutions**:
- Metal gaskets (inconel, graphite-reinforced)
- Welded construction where possible
- Expansion joints with bellows
- Inert gas (argon) blanket over lithium surface

## 5. Thermal Hydraulics

### 5.1 Natural Convection Analysis

**Governing equations**: Navier-Stokes + energy equation with Boussinesq approximation

**Expected flow patterns**:
- Hot plumes rising from neutron deposition zones
- Downflow along cooled walls (heat extractors)
- Recirculation cells
- Turbulent regime (Ra > 10⁶)

**Velocity scales**: 1-10 cm/s typical for ΔT ~ 50-100°C

### 5.2 Forced Convection (Optional Upgrade)

**Electromagnetic Pump**:
- DC or AC conduction pump
- No moving parts in contact with lithium
- Flow rate: 0.1-1 L/s
- Head: 1-5 m equivalent

**Advantages**:
- Improved temperature uniformity
- Faster heat extraction
- Enhanced mixing (reduces stratification)

**Disadvantages**:
- Added complexity and power consumption
- MHD pressure drop
- Electromagnetic interference with diagnostics

**Decision**: Natural convection baseline, EM pump for Phase 2+

### 5.3 Heat Transfer Coefficient Estimation

**Internal (lithium convection)**:

Nusselt number correlation for natural convection in annuli:
```
Nu = C × Ra^n × (Pr)^m × geometric factors
Nu ~ 10-100 for expected conditions
h = Nu × k / L ~ 500-5000 W/(m²·K)
```

**External (heat extraction)**:
- Depends on heat exchanger design
- Target: h > 1000 W/(m²·K) to avoid limiting heat removal

### 5.4 Temperature Distribution

**Expected profile**:
- Hottest zone: Near fusion core (450-500°C)
- Coolest zone: Near heat extractors (350-400°C)
- Vertical stratification: 20-50°C gradient

**CFD simulation** required for accurate prediction (see `/simulations/`)

## 6. Neutron Interactions

### 6.1 Neutron Slowing Down

**Process**: Fast neutrons (MeV range) undergo elastic scattering with ⁷Li nuclei until thermalized (~0.025 eV)

**Slowing-down length**: ~10-15 cm for 2.45 MeV neutrons, ~20-30 cm for 14.1 MeV

**Energy deposition**: Kinetic energy transferred to lithium → heat

### 6.2 Neutron Absorption

**⁷Li reactions** (primary):
- Elastic scattering: ⁷Li(n,n)⁷Li (dominant)
- Inelastic: ⁷Li(n,n'γ)⁷Li (threshold ~0.5 MeV)
- Capture: ⁷Li(n,γ)⁸Li (very low cross-section)

**⁶Li reactions** (if present):
- Absorption: ⁶Li(n,α)³H + 4.78 MeV (high cross-section for thermal neutrons)

**Heating rate**: Q = Φ × Σ × E (flux × macroscopic cross-section × energy)

### 6.3 Tritium Breeding Ratio (Simulation)

If using natural lithium:
```
TBR = (Number of tritium atoms produced) / (Number of neutrons from fusion)
```

For L.A.F.R.E.S. with thin blanket: TBR ~ 0.1-0.3 (insufficient for self-sustaining D-T)

With enriched ⁷Li: TBR ~ 0.01 (minimal tritium production)

## 7. Materials Compatibility and Corrosion

### 7.1 Corrosion Mechanisms

**Dissolution**: Structural metals dissolve into lithium
**Mass transfer**: Dissolved species transport and redeposit in cooler zones
**Intermetallic formation**: Li-Fe, Li-Cr compounds at interfaces

### 7.2 Mitigation Strategies

**Temperature control**: Keep T < 500°C to reduce corrosion kinetics
**Material selection**: Use refractory metals (Mo, W, Nb) or coatings
**Cold trapping**: Maintain nitrogen and oxygen getters (lithium itself acts as getter)
**Corrosion inhibitors**: Add small amounts of Al or Ca (under investigation)

### 7.3 Compatibility Testing

**Phase 1 tasks**:
- Immersion coupons (multiple materials, 1000+ hours at 450°C)
- Weight loss measurements
- Metallography of corroded surfaces
- Lithium chemical analysis (ICP-MS)

## 8. Instrumentation

### 8.1 Temperature Measurement

**Locations** (15-30 thermocouples):
- Radial: 3-5 depths into lithium
- Vertical: 5-10 heights
- Azimuthal: 3-4 positions per level

**Sensor type**: Type K (Chromel-Alumel) up to 450°C, Type N or S for higher

**Installation**: Thermowell (Mo or SS) to protect sensor from lithium

### 8.2 Level Sensing

**Purpose**: Monitor lithium free surface height (changes due to thermal expansion, evaporation, leaks)

**Technologies**:
- Capacitive (non-contact, measures dielectric change)
- Inductive (eddy current sensing of conductive surface)
- Ultrasonic (acoustic reflection from surface)

**Baseline**: Capacitive sensor, inert atmosphere compatible

### 8.3 Pressure Monitoring

**Cover gas pressure**: 0-2 bar absolute (argon blanket)
**Safety**: Over-pressure relief valve set at 1.5-2 bar

### 8.4 Chemical Analysis

**Online monitoring** (advanced):
- Electrochemical sensors for O, N impurities
- Sampling port for periodic extraction and lab analysis

**Offline analysis**:
- Extract small sample (< 10 mL) periodically
- ICP-MS for metal impurities
- Infrared spectroscopy for N, O

## 9. Operational Procedures

### 9.1 Initial Fill

1. **Prepare vessel**: Clean, evacuate, backfill with high-purity argon
2. **Load lithium**: Add ingots/pellets through loading port
3. **Seal and purge**: Close port, establish argon blanket
4. **Heat to melting**: Use external heaters, ramp at 10-20°C/hour
5. **Verify melt**: Confirm all lithium molten via level sensor and temperature
6. **Establish operating temperature**: Heat to 350-400°C baseline

### 9.2 Normal Operation Monitoring

**Continuous parameters**:
- Temperature distribution (all thermocouples)
- Level (free surface height)
- Cover gas pressure
- Heater power (if active heating used)

**Periodic checks** (daily):
- Visual inspection of insulation, seals
- Data logging review
- Alarm system test

### 9.3 Drainage and Maintenance

1. **Cool down**: Ramp temperature to &lt;180°C (below melting point) over 6-12 hours
2. **Solidify**: Wait for complete solidification
3. **Transfer**: If design allows, drain via heated transfer line into storage vessel
4. **Access**: Open vessel for inspection, coupon retrieval, repairs

**Safety note**: Solid lithium removal requires inert atmosphere and PPE

## 10. Safety Considerations

### 10.1 Lithium Fire Risk

**Hazard**: Lithium reacts violently with water, air (especially moisture)

**Prevention**:
- Sealed system with inert cover gas
- Leak detection (oxygen sensors)
- Containment within secondary steel shell

**Response** (in case of fire):
- Do NOT use water
- Use Class D extinguisher (copper powder, sodium chloride, graphite)
- Evacuate and allow burn-out in controlled manner if small

### 10.2 Over-Temperature Protection

**Trip point**: &gt;550°C (to prevent boiling at 1342°C, large margin)

**Actions**:
- Shutdown fusion core (stop neutron heating)
- Activate emergency cooling (forced air or liquid to outer vessel)
- Alarm operators

### 10.3 Spill Containment

**Secondary containment**: Steel drip pan beneath vessel, capacity for full lithium volume

**Spill response**:
- Inert gas blanketing
- Cooling to solidify
- Mechanical removal of solid lithium

## 11. Simulation and Modeling

### 11.1 CFD Model Requirements

**Software**: OpenFOAM, ANSYS Fluent, or COMSOL

**Physics**:
- Laminar or turbulent natural convection
- Temperature-dependent properties (ρ, μ, k, cp)
- Heat sources (volumetric neutron deposition)
- Heat sinks (extraction at walls)

**Boundary conditions**:
- No-slip at walls
- Fixed or convective heat transfer at outer boundaries
- Symmetry (if applicable)

**Mesh**: ~1-10 million cells, refined near walls and heat sources

### 11.2 Neutron Transport Coupling

**One-way coupling** (simplified):
1. Run neutron transport (MCNP, OpenMC) with assumed temperature distribution
2. Extract volumetric heating map
3. Use as source term in CFD

**Two-way coupling** (advanced):
1. Iterate between neutron transport and CFD
2. Update material properties (density, cross-sections) based on temperature
3. Converge to consistent solution

### 11.3 Validation Data Needs

**Phase 1 experiments**:
- Temperature measurements → validate CFD heat transfer
- Neutron flux measurements (if using external source) → validate transport
- Flow visualization (if possible via tracer injection or ultrasonic Doppler)

## 12. Performance Metrics

| Metric | Target | Method |
|--------|--------|--------|
| Operating temperature | 400-500°C | Thermocouple array |
| Temperature uniformity | ±50°C | Standard deviation of all T measurements |
| Heat removal rate | 10-100 kW | Calorimetry on cooling system |
| Neutron moderation efficiency | &gt;90% | Ratio of thermal/fast flux (detectors) |
| Corrosion rate | &lt;0.5 mm/year | Coupon weight loss, metallography |
| Operational uptime | &gt;95% | Time at target temperature / total time |

## 13. Future Enhancements

### 13.1 Phase 2+ Upgrades

- **Electromagnetic pump**: Install for forced circulation
- **Advanced diagnostics**: Ultrasonic Doppler velocimetry for flow mapping
- **Tritium extraction**: Add cold trap or chemical getter (if D-T operation)

### 13.2 Research Questions

- Optimal blanket thickness vs. volume tradeoff
- Effect of acoustic fields on convection patterns
- Long-term material degradation mechanisms
- MHD effects under pulsed neutron emission

## References

1. ORNL/TM-4229, "Compatibility of Lithium with Structural Materials"
2. Smolentsev et al., "Modeling of Liquid Metal Flow in Fusion Blankets," Fusion Eng. Des. (2015)
3. Jauch et al., "Thermophysical Properties of Lithium," Int. J. Thermophys. (2018)

---

**Document Version**: 1.0  
**Last Updated**: November 2025  
**Author**: L.A.F.R.E.S. Lithium Systems Team


