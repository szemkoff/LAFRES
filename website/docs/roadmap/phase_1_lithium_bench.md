---
id: phase-1-prototype
title: "Phase 1: Prototype"
sidebar_label: Phase 1
sidebar_position: 2
---

# Phase 1: Lithium Bench System (No Plasma)

## Duration
12-18 months (can overlap with tail end of Phase 0)

## Objectives
Build and test liquid lithium blanket with acoustic control system, WITHOUT fusion neutron source. Validate thermal and acoustic models.

## Major Components

### 1. Lithium Containment Vessel
- Design: Mo-lined SS, cylindrical, 50-200 L capacity
- Fabrication: 6-9 months lead time (custom)
- **Cost**: $50K-$150K

### 2. Lithium Procurement
- Quantity: 25-100 kg, enriched ⁷Li (&gt;99%)
- Supplier: FMC, Albemarle
- **Cost**: $15K-$100K

### 3. Acoustic Transducer Array
- 32-72 transducers + amplifiers + FPGA control
- **Cost**: $40K-$170K

### 4. Thermoelectric System
- 20-50 TE modules + heat pipes + cooling
- **Cost**: $30K-$110K

### 5. Instrumentation
- Thermocouples (30-60), pressure sensors, level sensors, acoustic sensors
- **Cost**: $30K-$80K

### 6. Control System
- Industrial PC, DAQ, safety PLC
- **Cost**: $45K-$120K

### 7. Facility Preparation
- Shielding (for future neutron operation), fire suppression, inert gas system
- **Cost**: $50K-$200K

## Tasks

**Months 0-6: Design and Procurement**
- Finalize CAD drawings
- Order long-lead items (lithium vessel, lithium, TE modules)
- Prepare facility (install ventilation, fire suppression)

**Months 6-12: Assembly and Commissioning**
- Fabricate support structure
- Install lithium vessel, transducers, instrumentation
- Load lithium (inert atmosphere)
- Heat to operating temperature (400°C)

**Months 12-18: Testing**
1. **Thermal tests**: Measure temperature distribution, natural convection flow (if possible)
2. **Acoustic tests**: Frequency sweep, mode identification, impulse response
3. **Control tests**: Closed-loop acoustic damping, feedforward control
4. **TE tests**: Power output vs. heat input, efficiency measurement
5. **Endurance test**: 1000+ hours continuous operation at 400°C

## Success Criteria
- [ ] Stable lithium operation at 400-500°C for &gt;1000 hours
- [ ] Acoustic surface damping &gt;60% (compared to passive)
- [ ] TE efficiency &gt;8% (measured)
- [ ] Zero lithium leaks or fires
- [ ] All models validated (temperature within ±10% of CFD prediction)

## Budget
**Equipment**: $260K-$830K  
**Personnel**: $300K-$500K (2-3 engineers × 18 months)  
**Facility**: $50K-$200K  
**Contingency**: 20%  
**Total**: $730K-$1.84M

## Risks
- Lithium corrosion worse than expected → early failure
- Acoustic coupling ineffective → redesign transducer array
- Regulatory delays (if radiation license pursued in parallel)

## Mitigation
- Material coupons in lithium for corrosion monitoring
- Phase 1 can proceed without radiation license (no neutrons yet)

---

**Status**: Pending Phase 0 completion  
**Lead**: [Name TBD]


