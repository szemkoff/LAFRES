# Plasma Burst Simulation

## 1. Objective

Model ion dynamics and fusion reactions in pulsed IEC device to predict neutron yield.

## 2. Software

**Particle-in-Cell (PIC) Code**: OOPIC-Pro, VSim, or custom Python/C++ code

## 3. Model

**Domain**: 2D axisymmetric or 3D spherical

**Particles**:
- Ions (D⁺): Macroparticles representing ~10⁶-10⁹ real ions each
- Electrons: Fluid approximation or PIC

**Fields**:
- Electric potential φ (from Poisson equation: ∇²φ = -ρ/ε₀)
- Magnetic field (if included): From coil currents or zero

## 4. Physics

**Ion Acceleration**: F = q E, where E = -∇φ

**Collisions**:
- Ion-ion: Fusion reactions (D+D → ³He + n or ³H + p)
- Ion-neutral: Charge exchange, ionization
- Cross-sections: From ENDF database or analytical fits

**Fusion Rate**:
- When two ions approach within ~10⁻¹⁵ m (femtometer scale), check cross-section
- Probabilistic: Random number vs. σ(E_rel)
- If fusion occurs, generate neutron (record energy, direction)

## 5. Boundary Conditions

**Cathode** (grid): Fixed potential (-30 to -100 kV)

**Anode** (chamber wall): Ground (0 V)

**Particle BC**: Ions hitting cathode/anode are absorbed (sputtering possible but neglected)

## 6. Pulsed Operation

**Voltage Pulse**:
- Rise time: 10 μs
- Flat top: 50 μs
- Fall time: 10 μs

**Simulation Time**: 0-100 μs (cover full pulse)

## 7. Expected Results

**Ion Convergence**: High density at cathode center (~10¹⁶-10¹⁸ ions/m³)

**Fusion Rate**: Peak during pulse flat-top

**Neutron Yield**: 10⁶-10⁹ per pulse (summed over all fusion events)

**Efficiency**: ~10⁻⁶ to 10⁻⁴ (neutron energy out / electrical energy in)

## 8. Validation

**Compare to Experiments**:
- Neutron rate vs. voltage (should scale as V⁴ to V⁵)
- Current-voltage characteristic

**Literature**: Miley et al., fusor.net community data

## 9. Computational Cost

**Grid**: 100×100 (2D) to 50³ (3D) cells

**Particles**: 10⁴-10⁶ macroparticles

**Runtime**: 1-10 hours per simulation (on workstation)

## 10. Deliverables

- Ion density contours
- Potential distribution
- Neutron yield vs. voltage, pressure
- Energy spectrum of emitted neutrons

## Status

**Phase 0**: PIC model implementation

---

**Prepared by**: L.A.F.R.E.S. Plasma Physics Team


