# Acoustic Finite Element Analysis

## 1. Objective

Determine resonant acoustic modes in liquid lithium cavity and design transducer array for optimal control.

## 2. Software

**COMSOL Multiphysics** (Acoustics Module) or **ANSYS Acoustic**

## 3. Model Setup

**Domain**: Cylindrical liquid lithium volume
- Radius: 30 cm
- Height: 60 cm
- Fluid: Lithium (c = 4500 m/s, ρ = 505 kg/m³)

**Governing Equation**: Helmholtz equation
```
∇²p + (ω/c)² p = 0
```

**Boundary Conditions**:
- Walls: Hard wall (∂p/∂n = 0) or impedance boundary
- Transducer locations: Prescribed pressure or velocity

## 4. Modal Analysis

**Eigenvalue Problem**: Find natural frequencies and mode shapes

**Expected Modes** (cylindrical cavity):
- (0,1,0): ~12 kHz
- (1,1,0): ~15 kHz
- (0,2,0): ~20 kHz
- ... up to 500 kHz

**Visualization**: Pressure distribution for each mode (color contours)

## 5. Forced Response Analysis

**Input**: Transducer array actuation (amplitude and phase per element)

**Output**: Resulting pressure field

**Optimization**: Find transducer settings to:
1. Suppress specific modes (e.g., sloshing mode)
2. Generate uniform pressure on surface
3. Create acoustic radiation pressure to counteract disturbances

## 6. Acoustic-Thermal Coupling (Advanced)

**Two-way coupling**:
- Temperature field affects sound speed: c(T)
- Acoustic absorption generates heat
- Iterate to convergence

## 7. Mesh

**Element Type**: Acoustic (linear or quadratic)

**Mesh Size**: λ/6 at highest frequency (500 kHz → λ = 0.9 cm → element size <1.5 mm)

**Total Elements**: 1-10 million

## 8. Validation

**Analytical**: Compare lowest modes to analytical solution for cylinder

**Experimental** (Phase 1): Measure frequency response with swept-sine input

## 9. Deliverables

- Mode shape plots (frequencies 10-500 kHz)
- Transducer array optimization (positions, phases)
- Transfer function: Input (transducer voltage) → Output (pressure at points of interest)

## Status

**Phase 0**: FE model development

---

**Prepared by**: L.A.F.R.E.S. Acoustics Simulation Team


