---
id: heat-transfer-model
title: "Heat Transfer Model"
sidebar_label: Heat Transfer
sidebar_position: 2
---

# Heat Transfer Model

## 1. Objective

Integrated thermal model from fusion neutrons → lithium → heat exchangers → thermoelectric modules → waste heat rejection.

## 2. Approach

**Multi-domain simulation** using COMSOL, ANSYS, or Python (FEniCS, FiPy)

## 3. Model Components

### 3.1 Neutron Heating (Source)
- From MCNP simulation: Volumetric heating rate Q(x,y,z) in lithium
- Units: W/m³
- Total power: 10-100 kW

### 3.2 Lithium Conduction and Convection
- Governed by energy equation
- Natural convection (from CFD) or simplified correlation

### 3.3 Heat Exchanger
- Thermal resistance network or detailed HX model
- Hot side: Lithium at 450°C
- Cold side: TE module hot plate at 450°C (ideal) or lower (with ΔT drop)

### 3.4 Thermoelectric Module
- 1D heat transfer through TE elements
- Heat flux: Q = (α I T_h) - (K ΔT) - (0.5 I² R)
  - α: Seebeck coefficient
  - I: Current
  - K: Thermal conductance
  - R: Electrical resistance

### 3.5 Cooling System
- Cold side: Water at 20-50°C
- Convective heat transfer: q = h A ΔT
- h: Heat transfer coefficient (1000-10000 W/m²/K for water)

## 4. Boundary Conditions

**Lithium**:
- Neutron heating (volumetric source)
- HX interface (fixed temperature or flux)

**TE Modules**:
- Hot side: Coupled to HX
- Cold side: Convective BC (water cooling)

**Environment**:
- Insulation: Low thermal conductivity (κ ~ 0.1 W/m/K)
- Ambient: 20°C

## 5. Steady-State Analysis

**Goal**: Operating point (temperatures, heat flows, power output)

**Iteration**:
1. Assume temperature distribution
2. Calculate heat transfer, TE output
3. Update temperatures
4. Repeat until converged

## 6. Transient Analysis

**Goal**: Response to disturbances (neutron pulse, cooling failure)

**Time scales**:
- Neutron pulse: ~100 μs
- Thermal diffusion in lithium: ~10 s
- TE module response: ~1-10 s
- Cooling system: ~10-100 s

**Simulation Time**: 0-1000 seconds

## 7. Expected Results

**Steady-State**:
- Temperature distribution (contour plots)
- Heat flux at each interface
- TE power output: 1-10 kW
- Efficiency: 10-15%

**Transient**:
- Temperature rise after neutron pulse
- Damping time constant
- Peak temperatures (ensure &lt;550°C safety limit)

## 8. Validation

**Phase 1**: Compare to experimental thermocouples (at multiple locations)

## 9. Deliverables

- Thermal resistance network diagram
- Temperature vs. time plots
- Efficiency map (vs. operating conditions)
- Sensitivity analysis

## Status

**Phase 0**: Model development

---

**Prepared by**: L.A.F.R.E.S. Thermal Systems Team


