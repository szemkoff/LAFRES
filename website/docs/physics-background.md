---
id: physics-background
title: Physics Background
sidebar_label: Physics Background
sidebar_position: 3
---

# Physics Background for L.A.F.R.E.S.

## Introduction

This document provides the fundamental physics principles underlying the L.A.F.R.E.S. concept, including fusion reactions, neutron transport, liquid metal physics, acoustics, and thermal-electric conversion.

## 1. Fusion Reactions

### 1.1 D-D Fusion

The primary reaction candidates are deuterium-deuterium (D-D) fusion:

**Reaction 1:**
```
²H + ²H → ³He (0.82 MeV) + n (2.45 MeV)   [50% branching ratio]
```

**Reaction 2:**
```
²H + ²H → ³H (1.01 MeV) + p (3.02 MeV)    [50% branching ratio]
```

### 1.2 D-T Fusion (Optional)

For higher neutron yield (requires tritium handling):

```
²H + ³H → ⁴He (3.5 MeV) + n (14.1 MeV)    [Primary reaction]
```

**Cross-section**: σ(D-T) > σ(D-D) by factor of ~100 at equivalent energies

### 1.3 Fusion Rate Equation

The fusion reaction rate per unit volume is:

```
R = n₁ n₂ ⟨σv⟩ / (1 + δ₁₂)
```

Where:
- n₁, n₂ = particle densities (m⁻³)
- ⟨σv⟩ = Maxwell-averaged reactivity (m³/s)
- δ₁₂ = Kronecker delta (= 1 for identical particles)

### 1.4 Lawson Criterion and Break-Even

For net energy gain (not the goal of L.A.F.R.E.S.):

```
n τ T > 3 × 10²¹ keV·s·m⁻³  (D-T fusion)
```

**L.A.F.R.E.S. operates far below break-even:**
- Target: Controlled neutron source only
- Expected n·τ·T: 10¹⁵ - 10¹⁸ keV·s·m⁻³
- This is 3-6 orders of magnitude below break-even

### 1.5 Expected Neutron Yield

For pulsed IEC-type device:
```
Yield = ε × I × t × σ / e
```

Where:
- ε = efficiency factor (~10⁻⁶ to 10⁻⁴)
- I = beam current (mA to A)
- t = pulse duration (μs)
- σ = fusion cross-section
- e = elementary charge

**Estimated range**: 10⁶ to 10¹⁰ neutrons/second (averaged over pulse cycle)

## 2. Neutron Physics

### 2.1 Neutron Transport

The Boltzmann transport equation governs neutron behavior:

```
∂n/∂t + v·∇n + Σₜ n = ∫ Σₛ(E'→E) n(E') dE' + S
```

Terms:
- Σₜ = total cross-section (absorption + scattering)
- Σₛ = scattering cross-section
- S = neutron source term (fusion reactions)

### 2.2 Neutron Moderation in Lithium

**Fast neutron** (2.45 MeV or 14.1 MeV) → **Thermal neutron** (~0.025 eV)

Moderation via elastic scattering:

```
E' = E × [(A-1)² + 1] / [(A+1)²]
```

For ⁷Li: A = 7, therefore one collision reduces energy by factor of ~1.8

**Thermalization distance**: ~10-20 cm in liquid lithium

### 2.3 Lithium Reactions

**⁷Li (dominant, 92.5% natural abundance):**
```
⁷Li + n (fast) → ⁷Li + n + γ  (inelastic scattering)
⁷Li + n (thermal) → ⁷Li + γ   (capture, very low cross-section)
```

**⁶Li (6.5% natural abundance, if not depleted):**
```
⁶Li + n → ⁴He + ³H + 4.78 MeV  (tritium breeding)
```

**Note**: Natural lithium contains ⁶Li. For safety, enriched ⁷Li (&gt;99%) is preferred to minimize tritium production.

### 2.4 Dose Rate Calculation

Neutron flux to dose rate conversion:

```
Dose rate (mSv/h) ≈ Φ × E × k
```

Where:
- Φ = neutron flux (n/cm²/s)
- E = neutron energy (MeV)
- k = conversion factor (~10⁻⁸ for fast neutrons)

**Example**: 10⁹ n/s at 1 meter → ~1-10 mSv/h (requires shielding)

## 3. Liquid Lithium Physics

### 3.1 Thermophysical Properties

**Lithium-7 (pure):**

| Property | Value | Units |
|----------|-------|-------|
| Melting point | 180.5 | °C |
| Boiling point | 1342 | °C |
| Density (400°C) | 505 | kg/m³ |
| Specific heat | 4.19 | kJ/(kg·K) |
| Thermal conductivity | 45 | W/(m·K) |
| Dynamic viscosity | 0.4 | mPa·s |
| Electrical conductivity | 3.4 × 10⁶ | S/m |

### 3.2 Magnetohydrodynamics (MHD)

Liquid lithium is electrically conductive, leading to MHD effects:

**Lorentz force:**
```
F = J × B = σ(E + v × B) × B
```

**Hartmann number** (ratio of electromagnetic to viscous forces):
```
Ha = B L √(σ/μ)
```

For L.A.F.R.E.S.:
- Expected B fields: &lt;1 Tesla (from plasma device)
- Ha ~ 10-100 (moderate MHD coupling)

**Effect**: Suppression of turbulence, modification of velocity profiles

### 3.3 Heat Transfer

**Natural convection** (if not pumped):

Rayleigh number:
```
Ra = g β ΔT L³ / (ν α)
```

Where:
- g = gravity
- β = thermal expansion coefficient
- ΔT = temperature difference
- ν = kinematic viscosity
- α = thermal diffusivity

For lithium at 400°C with 100°C ΔT over 10 cm: Ra ~ 10⁶ - 10⁷ (turbulent convection)

**Forced convection** (if electromagnetic pumping used):

Nusselt number correlation:
```
Nu = 0.023 Re⁰·⁸ Pr⁰·⁴
```

For liquid metals, Pr &lt;&lt; 1, so alternative correlations needed.

### 3.4 Corrosion and Compatibility

Lithium is highly reactive. Compatible materials:
- **Refractory metals**: Mo, W, Ta, Nb (at &lt;500°C)
- **Ceramics**: Si₃N₄, SiC (with protective coatings)
- **Steels**: Low-carbon, refractory-stabilized (short term)

**Corrosion rate**: Strongly temperature-dependent, &lt;1 mm/year at &lt;450°C for compatible materials

## 4. Acoustic Physics

### 4.1 Wave Equation

Acoustic pressure p in fluid:

```
∇²p - (1/c²) ∂²p/∂t² = 0
```

Where c = speed of sound in lithium ≈ 4500 m/s at 400°C

### 4.2 Acoustic Radiation Pressure

Time-averaged force on surface:

```
F = &lt;p²&gt; / (ρc²)
```

**Example**: 1 MPa acoustic pressure → ~0.05 MPa radiation pressure on lithium surface

### 4.3 Resonant Modes

For cylindrical cavity:

```
f_mnl = (c/2π) √[(k_mn/R)² + (lπ/H)²]
```

Where:
- m, n = radial and azimuthal mode numbers
- l = axial mode number
- R = radius, H = height
- k_mn = Bessel function zeros

**Design consideration**: Avoid resonances with structural modes or MHD frequencies

### 4.4 Acoustic Streaming

Non-linear effect causing steady flow:

```
v_s ~ ε² (ω/c)
```

Where:
- ε = acoustic Mach number
- ω = angular frequency

Can be used for active surface stabilization and mixing

### 4.5 Cavitation Threshold

Blake threshold for cavitation in liquid metal:

```
p_cav ≈ p₀ + 2σ/R_n
```

Where:
- p₀ = ambient pressure
- σ = surface tension (~0.4 N/m for lithium)
- R_n = nucleation site radius

**Design limit**: Keep acoustic pressure below cavitation threshold to prevent damage

## 5. Thermoelectric Physics

### 5.1 Seebeck Effect

Voltage generated by temperature gradient:

```
V = S ΔT
```

Where S = Seebeck coefficient (μV/K)

### 5.2 Figure of Merit

Thermoelectric material quality:

```
ZT = S² σ T / κ
```

Where:
- S = Seebeck coefficient
- σ = electrical conductivity
- κ = thermal conductivity
- T = absolute temperature

**State-of-art materials**: ZT ~ 1-2 at 500°C (skutterudites, half-Heuslers)

### 5.3 Conversion Efficiency

Maximum efficiency (Carnot limit × ZT correction):

```
η_max = (T_h - T_c)/T_h × √(1+ZT) - 1 / [√(1+ZT) + T_c/T_h]
```

For T_h = 500°C (773K), T_c = 200°C (473K), ZT = 1:

```
η_max ≈ 12-15%
```

### 5.4 Power Output

For thermoelectric module:

```
P = α² (T_h - T_c)² / (4 R_load)
```

Optimization requires matching load resistance to internal resistance.

## 6. Multi-Physics Coupling

### 6.1 Thermal-Neutron Coupling

Neutron deposition heats lithium:
```
Q_n = Σ_abs × Φ × E_n
```

Creates temperature gradients → natural convection → flow field changes → neutron transport changes

**Feedback loop**: Requires coupled simulation

### 6.2 Thermal-Acoustic Coupling

Temperature affects:
- Speed of sound: c(T)
- Acoustic impedance: Z(T)
- Attenuation: α(T)

Must account for spatial temperature distribution in acoustic field calculations

### 6.3 MHD-Acoustic Coupling

Acoustic waves in conducting fluid with magnetic field:

Modified wave equation includes Lorentz force terms

**Alfvén waves** (magnetoacoustic) possible with characteristic velocity:
```
v_A = B / √(μ₀ ρ)
```

### 6.4 Control System Physics

Time scales:
- Neutron thermalization: ~10⁻⁶ s
- Acoustic period: ~10⁻⁵ - 10⁻⁴ s
- Thermal diffusion: ~1-10 s
- Natural convection: ~10-100 s

**Control bandwidth**: Must respond at ~1 kHz for acoustic stabilization

## 7. Limitations and Assumptions

### 7.1 Fundamental Limits

1. **Sub-Lawson operation**: No net energy gain possible
2. **Neutron yield**: Limited by achievable plasma conditions
3. **Material limits**: Temperature and radiation damage constraints
4. **Heat extraction**: Limited by thermodynamic efficiency

### 7.2 Scaling Laws

Key dimensionless parameters:
- **Knudsen number** (Kn): Ratio of mean free path to system size
- **Reynolds number** (Re): Inertial to viscous forces
- **Péclet number** (Pe): Advection to diffusion
- **Hartmann number** (Ha): Electromagnetic to viscous forces

Proper scaling required for extrapolation from simulations to prototype

### 7.3 Uncertainties

Major sources of uncertainty:
- Plasma physics (ion confinement, beam-target interactions)
- Material properties at temperature and radiation exposure
- MHD effects in complex geometry
- Long-term degradation mechanisms

**Risk mitigation**: Conservative design margins, extensive simulation validation

## References

1. Atzeni & Meyer-ter-Vehn, *The Physics of Inertial Fusion*, Oxford (2004)
2. Duderstadt & Hamilton, *Nuclear Reactor Analysis*, Wiley (1976)
3. Moreau, *Magnetohydrodynamics*, Kluwer (1990)
4. Kinsler et al., *Fundamentals of Acoustics*, Wiley (2000)
5. Rowe (ed.), *Thermoelectrics Handbook*, CRC Press (2006)

---

**Document Version**: 1.0  
**Last Updated**: December 2025  
**Author**: L.A.F.R.E.S. Physics Team


