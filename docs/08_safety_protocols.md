# Safety Protocols

## 1. Hazard Overview

L.A.F.R.E.S. presents multiple significant hazards that require comprehensive safety protocols:

### 1.1 Primary Hazards

1. **Radiation** (neutron and gamma)
2. **Chemical reactivity** (lithium)
3. **Electrical** (high voltage, high current)
4. **Thermal** (high temperature, burns)
5. **Pressure** (vacuum and over-pressure)
6. **Radioactive materials** (tritium, if D-T operation)

### 1.2 Hazard Classification

| Hazard | Severity | Likelihood | Risk Level |
|--------|----------|------------|------------|
| Neutron radiation exposure | High | Medium | High |
| Lithium fire | High | Low | Medium |
| Electrical shock (HV) | High | Low | Medium |
| Thermal burns | Medium | Medium | Medium |
| Vacuum implosion | Medium | Low | Low |
| Tritium release (if used) | High | Low | Medium |

## 2. Radiation Safety

### 2.1 Neutron Radiation

**Sources**:
- Direct neutrons from fusion (2.45 MeV D-D or 14.1 MeV D-T)
- Thermalized neutrons (scattered, <0.025 eV)
- Activation products (induced radioactivity in structural materials)

**Dose estimates**:
- Unshielded at 1 meter from 10⁹ n/s: 1-10 mSv/hr
- With lithium blanket (10-20 cm): Reduction by factor of 10-100
- With additional shielding (polyethylene, borated materials): <0.01 mSv/hr target

**ALARA principle**: As Low As Reasonably Achievable

### 2.2 Shielding Design

**Primary shield**: Liquid lithium blanket (neutron moderator)

**Secondary shield**: 
- Polyethylene or water tanks (50-100 cm thickness for neutron thermalization)
- Borated polyethylene (neutron capture, reduces dose by additional factor of 10)

**Tertiary shield** (if needed for very high neutron rates):
- Concrete walls (1-2 meters)
- Lead (for gamma rays from neutron capture)

**Calculation**: Monte Carlo neutron transport (MCNP, OpenMC) to verify dose <20 μSv/hr at occupied locations

### 2.3 Radiation Monitoring

**Area monitors**:
- Neutron rem meters (outside primary shielding, 4 positions: N, S, E, W)
- Gamma dose rate meters
- Continuous logging (alarm if >2 μSv/hr above background)

**Personal dosimetry**:
- All personnel wear electronic personal dosimeters (EPD) or film badges
- Monthly readout and tracking
- Annual dose limit: 20 mSv (ICRP recommendation for occupational exposure)

**Survey**:
- Weekly radiation surveys (portable meters)
- After maintenance or configuration changes

### 2.4 Activation and Waste

**Neutron activation**:
- Structural materials (steel, aluminum) become radioactive (e.g., ⁵⁴Mn, ⁶⁰Co, ⁶⁵Zn)
- Lithium: ⁷Li(n,γ)⁸Li (half-life 0.84 s, decays rapidly, not a concern)

**Waste disposal**:
- Activated components: Store for decay (weeks to months), then dispose as radioactive waste (requires license)
- Lithium: Chemical waste (reactive metal), specialized disposal

### 2.5 Access Control

**Radiation area** (>0.05 mSv/hr): 
- Posted signage
- Access log

**High radiation area** (>1 mSv/hr): 
- Locked when unoccupied
- Alarmed interlocks

**Very high radiation area** (>5 mSv/hr at 1 m): 
- Additional physical barriers
- Interlock with fusion core (cannot enter when operating)

## 3. Lithium Safety

### 3.1 Chemical Properties

**Reactivity**:
- **Water**: Violent reaction, H₂ gas + LiOH (exothermic, can ignite H₂)
  ```
  2 Li + 2 H₂O → 2 LiOH + H₂ ↑ + heat
  ```
- **Air/Oxygen**: Burns with intense heat (T>1000°C)
  ```
  4 Li + O₂ → 2 Li₂O
  ```
- **Nitrogen**: Forms Li₃N (less vigorous than O₂)

**Toxicity**: 
- Low acute toxicity (less hazardous than other alkali metals)
- Chronic exposure: Avoid inhalation of Li₂O fumes

### 3.2 Fire Prevention

**Primary**: 
- Sealed system with inert cover gas (argon, >99.9% purity)
- Leak detection (oxygen sensors in enclosure, alarm if O₂ >1000 ppm)

**Secondary**: 
- Double containment (lithium vessel + outer containment)
- Drip pans (collect any leaks)

**Tertiary**: 
- Fire detection (smoke + heat detectors)

### 3.3 Fire Response

**DO NOT use water or CO₂ extinguishers on lithium fires**

**Approved extinguishing agents**:
- Class D extinguisher (copper powder, sodium chloride, graphite)
- Dry sand (lithium chloride-based, e.g., Lith-X™)

**Procedure**:
1. Evacuate personnel (if fire is large)
2. Alert fire department (inform them it's a metal fire, special agents required)
3. Activate inert gas flood (argon, if available)
4. Apply Class D extinguisher (if fire is small and accessible)
5. Allow to cool before cleanup (lithium oxide/hydroxide residue)

**Prevention is critical**: Fires are difficult to extinguish once started

### 3.4 Spill Response

**Small spill** (<1 liter, solid lithium):
- Don inert atmosphere gloves (glovebox or argon-purged enclosure)
- Collect solid pieces with tongs
- Place in mineral oil (lithium is stable in oil)
- Neutralize residue with alcohol (slowly, exothermic)

**Large spill** (liquid lithium):
- Evacuate area
- Allow to cool and solidify (below 180°C)
- Inert gas blanket (argon or nitrogen) to prevent ignition
- Mechanical removal once solid

### 3.5 Personal Protective Equipment (PPE)

**Handling solid lithium** (room temperature):
- Safety glasses
- Nitrile gloves
- Lab coat

**Handling molten lithium** (>180°C):
- Face shield
- Heat-resistant gloves (leather or aluminized)
- Full body coverage (cotton or Nomex, no synthetic fabrics that melt)
- Fire-resistant footwear

**Atmosphere**: 
- If possible, handle in inert atmosphere (glovebox, argon)
- If in air, have Class D extinguisher within reach

## 4. Electrical Safety

### 4.1 High Voltage (Fusion Core)

**Hazard**: 30-100 kV, potentially lethal

**Controls**:
- Interlocked enclosure (door switches disable HV)
- Warning signs ("DANGER: HIGH VOLTAGE")
- Capacitor discharge (automatic and manual)
- Lockout/tagout for maintenance

**Procedures**:
- Always assume HV is present until verified otherwise
- Use discharge stick (grounding rod) before touching
- One-hand rule (keep one hand in pocket to avoid current path across heart)

**Training**: All personnel working near HV must complete electrical safety training

### 4.2 Electrical Fires

**Prevention**: 
- Proper wiring (correct gauge, insulation rating)
- Overcurrent protection (fuses, breakers)
- Regular inspection (for damaged insulation, loose connections)

**Response**: 
- CO₂ or dry chemical extinguisher
- De-energize circuit if possible (before extinguishing)

### 4.3 Arc Flash

**Hazard**: Capacitor discharge or short circuit can produce intense heat and light

**Controls**: 
- Arc-rated protective clothing (if working on energized equipment >50V, >5 kA available fault current)
- Barriers and shields

**Risk**: Low for L.A.F.R.E.S. (pulsed operation, moderate currents), but awareness required

## 5. Thermal Safety

### 5.1 Burn Hazards

**Sources**:
- Molten lithium (400-500°C)
- Hot surfaces (lithium vessel, heat pipes, TE modules)
- Cathode grid (1000-2000°C, inside vacuum chamber)

**Controls**:
- Insulation (thermal blankets on outer surfaces)
- Guarding (barriers around high-temp zones)
- Warning labels ("CAUTION: HOT SURFACE")
- PPE (heat-resistant gloves for any handling near hot zones)

### 5.2 Procedures for High-Temperature Work

**Startup/shutdown**: 
- Gradual heating/cooling (10-20°C/hour) to avoid thermal shock

**Maintenance**: 
- Allow system to cool below 50°C before opening

**Emergency**: 
- If personnel contact hot surface, cool burn immediately with water (unless lithium contamination, then brush off any lithium first)

## 6. Pressure Safety

### 6.1 Vacuum System

**Hazard**: Implosion of vacuum chamber (if external pressure exceeds design)

**Controls**:
- Chamber designed for full vacuum (safety factor >3)
- Vacuum relief (vent valve, opens if external pressure exceeds threshold)
- Inspection (periodic NDT: visual, dye penetrant, ultrasonic)

### 6.2 Over-Pressure

**Hazard**: 
- Deuterium gas accumulation
- Thermal expansion of lithium (if overfilled)
- Blockage of vent lines

**Controls**:
- Pressure relief valves (set at 1.5-2 bar for cover gas)
- Pressure monitoring (continuous, alarm at 1.3 bar)
- Expansion volume (ullage space above lithium)

### 6.3 Pressure Testing

**Before operation**: 
- Hydrostatic or pneumatic test of pressure vessels (at 1.5× design pressure)
- Leak test (helium leak detection, <10⁻⁸ Torr·L/s)

## 7. Tritium Safety (If Applicable)

### 7.1 Regulatory Requirements

**Licensing**: 
- USA: NRC license required for >1 Curie (37 GBq) of tritium
- Facility requirements (contamination control, monitoring, waste handling)

**L.A.F.R.E.S. baseline**: D-D operation only (avoids tritium complexity for Phase 1-2)

**If D-T operation pursued** (Phase 3+):

### 7.2 Tritium Hazards

**Properties**:
- Radioactive isotope (β⁻ emitter, 18.6 keV max energy, low penetration)
- Half-life: 12.3 years
- Biological hazard: HTO (tritiated water) is easily absorbed, biological half-life ~10 days

**Dose**: 
- 1 Curie ingested → ~10 mSv committed effective dose
- Inhalation/skin absorption also possible

### 7.3 Tritium Handling

**Containment**:
- Glovebox (negative pressure, HEPA filtered exhaust)
- Secondary containment (room-level containment)

**Monitoring**:
- Air monitors (ionization chambers or scintillation detectors for HTO vapor)
- Surface contamination (wipe tests, liquid scintillation counting)
- Urine bioassay (for personnel working with tritium)

**Waste**:
- Contaminated materials: Store in sealed containers, decay (after ~100 years, activity negligible) or licensed disposal
- Tritiated water: Dilute and discharge (if below regulatory limits) or licensed disposal

### 7.4 Emergency Response (Tritium Release)

1. Evacuate personnel from contaminated area
2. Isolate ventilation (prevent spread)
3. Don PPE (respirator, protective suit)
4. Contain spill (absorbent pads, place in sealed container)
5. Survey area (tritium meter)
6. Decontaminate (wipe surfaces with water or ethanol)
7. Re-survey until levels acceptable
8. Notify regulatory authority (if release exceeds reportable quantity)

## 8. Emergency Procedures

### 8.1 Emergency Shutdown (SCRAM)

**Triggers**:
- Radiation levels high
- Lithium temperature >550°C
- Coolant failure
- Fire/smoke
- Gas leak (deuterium or argon)
- Manual activation (big red button)

**Automatic sequence** (see Control System doc):
1. Disable fusion core high voltage
2. Close deuterium valve
3. Ramp down acoustic power
4. Activate emergency cooling (if over-temp)
5. Activate argon purge (if lithium leak/fire detected)
6. Sound alarms
7. Notify emergency contacts

**Operator actions**:
- Confirm shutdown (check HMI, indicators)
- Assess situation (which alarm triggered?)
- Notify personnel (evacuate if necessary)
- Call emergency services (if fire, medical emergency, large radiation release)

### 8.2 Evacuation

**Alarm**: Continuous horn (distinct from other alarms)

**Procedure**:
1. Stop work immediately
2. Secure equipment (if safe to do so, <30 seconds)
3. Proceed to nearest exit
4. Assemble at designated muster point
5. Accountability check (roster)

**Re-entry**: Only after all-clear from safety officer or emergency responders

### 8.3 Medical Emergencies

**Radiation exposure** (suspected):
- Remove personnel from radiation area
- Remove contaminated clothing (if contamination suspected)
- Survey with radiation meter
- Decontaminate (wash with soap and water)
- Seek medical attention (even if no symptoms, for monitoring)

**Burns**:
- Cool with water (if not lithium-contaminated)
- Cover with sterile dressing
- Seek medical attention (second-degree or worse)

**Electrical shock**:
- Do NOT touch victim if still in contact with electrical source
- De-energize power (throw switch, pull plug)
- Call 911 immediately
- CPR if no pulse/breathing

**Chemical exposure** (lithium):
- Remove contaminated clothing
- Flush with water (copious amounts, 15 minutes)
- Seek medical attention
- Bring SDS (Safety Data Sheet) for lithium

### 8.4 Spill/Release

**Lithium spill**: See Section 3.4

**Deuterium leak**: 
- Evacuate area (if large leak, flammable)
- Ventilate (open windows, turn on exhaust fans)
- Eliminate ignition sources
- Close deuterium cylinder valve
- Allow to disperse (hydrogen/deuterium rises rapidly)

**Coolant leak** (water):
- Shut off coolant supply
- Contain with absorbent or drain
- Clean up to prevent slip hazard

## 9. Training and Qualifications

### 9.1 Required Training

**All personnel**:
- General radiation safety (4 hours)
- Lithium hazards and handling (2 hours)
- Electrical safety (basic, 2 hours)
- Emergency procedures (1 hour)

**Operators**:
- All of the above, plus:
- System-specific training (L.A.F.R.E.S. operations, 8 hours classroom + 40 hours supervised)
- Qualification exam (written + practical)

**Maintenance personnel**:
- All general training, plus:
- Lockout/tagout (2 hours)
- Confined space entry (if applicable, 4 hours)
- Electrical safety (advanced, 8 hours)

**Radiation Safety Officer (RSO)**:
- Certified health physicist (CHP) or equivalent
- Responsible for radiation safety program

### 9.2 Refresher Training

**Annual**:
- Radiation safety review (2 hours)
- Emergency drills (2 per year: evacuation, spill response)

**As-needed**:
- After incidents or near-misses (lessons learned)
- After procedure changes

### 9.3 Training Records

- Maintained for duration of employment + 5 years
- Include: Date, topics, instructor, exam scores (if applicable)

## 10. Safety Management

### 10.1 Safety Reviews

**Before operation**:
- Pre-startup safety review (PSSR): Verify all systems, training, procedures in place
- Regulator approval (radiation license, building permits, etc.)

**Ongoing**:
- Weekly safety meetings (5-10 minutes, discuss observations, near-misses)
- Monthly walk-throughs (inspect for hazards, housekeeping)
- Annual comprehensive safety audit (by external or independent internal team)

### 10.2 Incident Reporting

**Reportable events**:
- Personnel radiation exposure >5 mSv in single event
- Lithium fire or major spill
- Electrical shock (any injury)
- Equipment failure leading to safety system actuation

**Procedure**:
1. Immediate notification to safety officer and management
2. Investigation (root cause analysis, 5-why or fault tree)
3. Corrective actions (implement within 30 days)
4. Documentation (incident report, lessons learned)
5. Regulatory notification (if required by license conditions)

### 10.3 Safety Culture

**Principles**:
- **Everyone has stop-work authority**: Any person can halt work if unsafe conditions observed
- **No-blame reporting**: Encourage reporting of near-misses and errors without fear of punishment
- **Continuous improvement**: Learn from incidents, update procedures

**Management commitment**: 
- Safety is the #1 priority (over schedule, cost)
- Resources allocated for safety (equipment, training, time)

## 11. Regulatory Compliance

### 11.1 Applicable Regulations (USA Example)

**Radiation**:
- 10 CFR Part 20 (NRC standards for protection against radiation)
- State regulations (if Agreement State)

**Chemical**:
- OSHA 29 CFR 1910 (occupational safety and health standards)
- EPA regulations (if applicable, e.g., air emissions, waste disposal)

**Electrical**:
- NFPA 70 (National Electrical Code)

**Pressure vessels**:
- ASME Boiler and Pressure Vessel Code

### 11.2 Licensing

**Required licenses**:
- **Radioactive materials license** (NRC or state, for neutron-generating device)
- **Building permit** (local, for facility modifications)
- **Fire safety approval** (local fire marshal)

**Application process**:
- Prepare safety analysis report (SAR): Describe system, hazards, controls, emergency procedures
- Submit to regulator (6-12 month review)
- Address questions, revisions
- Approval with conditions (license conditions, technical specifications)

### 11.3 Inspections

**Frequency**:
- Regulatory: Annual or biennial (by NRC or state inspector)
- Internal: Quarterly (by safety officer)

**Scope**:
- Review of procedures, training records
- Physical inspection of equipment, shielding, alarms
- Interview personnel (knowledge check)
- Dosimetry and survey records review

**Follow-up**:
- Address any findings or violations promptly
- Document corrective actions

## 12. References

1. ICRP Publication 103, "Recommendations of the International Commission on Radiological Protection" (2007)
2. IAEA Safety Standards Series No. GS-R-3, "The Management System for Facilities and Activities" (2006)
3. OSHA 29 CFR 1910.1200, Hazard Communication Standard
4. NFPA 484, Standard for Combustible Metals (Lithium)

---

**Document Version**: 1.0  
**Last Updated**: November 2025  
**Author**: L.A.F.R.E.S. Safety Team


