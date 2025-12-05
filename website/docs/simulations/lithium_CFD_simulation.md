---
id: lithium-cfd
title: "Lithium CFD Simulation"
sidebar_label: Lithium CFD
sidebar_position: 3
---

# Lithium CFD Simulation

## 1. Objective

Model natural convection flow and heat transfer in liquid lithium blanket under neutron heating.

## 2. Software

**OpenFOAM** (open-source) or **ANSYS Fluent** (commercial)

**Solver**: buoyantBoussinesqSimpleFoam (steady-state) or buoyantBoussinesqPimpleFoam (transient)

## 3. Domain and Mesh

**Geometry**: Cylindrical annulus (2D axisymmetric or full 3D)
- Inner radius: 20 cm (vacuum boundary)
- Outer radius: 40 cm (cooled wall)
- Height: 60 cm

**Mesh**: 
- Type: Hexahedral (structured) or tetrahedral (unstructured)
- Elements: 1-10 million
- Refinement: Near walls (boundary layer) and heat sources

## 4. Physics Models

**Governing Equations**:
- Continuity: ∇·v = 0
- Momentum: ρ(v·∇)v = -∇p + ∇·τ + ρg (with Boussinesq approximation)
- Energy: ρcp(v·∇)T = ∇·(k∇T) + Q_source

**Material Properties** (Lithium at 400°C):
- Density: 505 kg/m³
- Viscosity: 0.0004 Pa·s
- Thermal conductivity: 45 W/(m·K)
- Specific heat: 4190 J/(kg·K)
- Thermal expansion: 1.4 × 10⁻⁴ K⁻¹

**Heat Source**: Volumetric heating from neutron deposition (from neutron transport model)

**Boundary Conditions**:
- Inner wall (vacuum side): Adiabatic or fixed heat flux
- Outer wall: Fixed temperature (heat extraction) or convective BC
- Top/bottom: Symmetry or periodic

## 5. Turbulence

**Rayleigh Number**: ~10⁷ (turbulent regime)

**Turbulence Model**: k-ε or k-ω SST (Reynolds-Averaged Navier-Stokes, RANS)

**Alternative**: Large Eddy Simulation (LES) for higher fidelity (but 10-100× more expensive)

## 6. Expected Results

**Flow Field**:
- Velocity: 1-10 cm/s
- Flow pattern: Rising plumes from hot zones, descending flow at cooled walls

**Temperature Field**:
- Maximum: 450-500°C (near fusion core)
- Minimum: 350-400°C (near heat extractors)
- Gradient: 20-50°C/10 cm

**Heat Transfer**:
- Nusselt number: 10-100
- Heat flux at walls: 10-100 kW/m²

## 7. Validation

**Phase 1**: Compare to analytical solutions (e.g., Rayleigh-Bénard convection in simplified geometry)

**Phase 2**: Compare to experimental data (thermocouples, flow visualization if available)

## 8. Computational Cost

**Hardware**: Workstation with 16-32 cores, 64 GB RAM

**Runtime**: 
- Steady-state: 1-10 hours (depending on mesh size)
- Transient: 10-100 hours for 1 second physical time

## 9. Deliverables

- Flow field visualization (velocity vectors, streamlines)
- Temperature contours
- Heat flux distribution
- Sensitivity study (varying heat input, cooling rate)

## Status

**Phase 0**: Model setup and preliminary runs

---

**Prepared by**: L.A.F.R.E.S. Thermal-Hydraulics Team


