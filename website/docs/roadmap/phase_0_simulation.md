---
id: phase-0-simulation
title: "Phase 0: Simulation"
sidebar_label: Phase 0
sidebar_position: 1
---

# Phase 0: Simulation and Modeling

## Duration
6-12 months

## Objectives
Develop and validate computational models for all major subsystems before hardware construction.

## Tasks

### 1. Neutron Transport Model
- **Software**: MCNP6 or OpenMC
- **Deliverable**: Neutron flux distribution, energy deposition in lithium, dose rates
- **Validation**: Compare to analytical benchmarks (infinite medium, slab geometry)
- **Effort**: 2-3 months, 1 nuclear engineer

### 2. Lithium CFD Simulation
- **Software**: OpenFOAM or ANSYS Fluent
- **Deliverable**: Temperature and velocity fields under neutron heating
- **Validation**: Rayleigh-Bénard convection benchmark
- **Effort**: 3-4 months, 1 thermal-hydraulics specialist

### 3. Acoustic FE Analysis
- **Software**: COMSOL or ANSYS Acoustic
- **Deliverable**: Mode shapes, transducer array optimization
- **Validation**: Analytical solutions for cylindrical cavity
- **Effort**: 2-3 months, 1 acoustics engineer

### 4. Thermal-Electric System Model
- **Software**: Python (custom) or COMSOL
- **Deliverable**: Integrated heat transfer, TE power output vs. operating conditions
- **Validation**: Compare to TE module datasheets
- **Effort**: 1-2 months, 1 thermal engineer

### 5. Plasma PIC Simulation
- **Software**: OOPIC, VSim, or custom
- **Deliverable**: Predicted neutron yield vs. voltage/pressure
- **Validation**: Literature data (Miley group, fusor.net)
- **Effort**: 3-4 months, 1 plasma physicist

## Success Criteria
- [ ] All models converged and producing physically reasonable results
- [ ] Validation against analytical/experimental benchmarks (error &lt;20%)
- [ ] Integrated system model predicts: T_max &lt;550°C, neutron yield 10⁶-10⁹ n/s, TE output 0.5-5 kW

## Budget
**Personnel**: $100K-$200K (salaries/stipends for 3-5 researchers, 6-12 months)  
**Software**: $10K-$30K (licenses for commercial codes)  
**Computing**: $5K-$10K (cloud or HPC time)  
**Total**: $115K-$240K

## Risks
- Model complexity (multi-physics coupling) may require simplifying assumptions
- Limited validation data for some phenomena (acoustic-MHD coupling)

## Mitigation
- Start with simplified 2D models, iterate to 3D if needed
- Sensitivity studies to bound uncertainties

---

**Status**: Ready to begin upon project approval  
**Lead**: [Name TBD]


