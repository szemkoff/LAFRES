# Thermoelectric Conversion System

## 1. Overview

The thermoelectric conversion system extracts thermal energy from the liquid lithium blanket and converts it to electrical power using solid-state thermoelectric modules or micro-Stirling engines.

**Primary goal**: Demonstrate heat extraction and partial energy recovery (not net-positive energy production).

## 2. Thermoelectric Fundamentals

### 2.1 Seebeck Effect

Temperature gradient across dissimilar conductors generates voltage:
```
V = α(T_h - T_c)
```

Where α = Seebeck coefficient (μV/K)

### 2.2 Figure of Merit

Material quality factor:
```
ZT = (α² σ T) / κ
```

- α = Seebeck coefficient (V/K)
- σ = electrical conductivity (S/m)
- T = absolute temperature (K)  
- κ = thermal conductivity (W/(m·K))

**High ZT requires**: High α and σ, low κ (conflicting requirements, challenging materials science problem)

### 2.3 Efficiency

Maximum conversion efficiency:
```
η_max = (T_h - T_c)/T_h × [√(1+ZT_avg) - 1] / [√(1+ZT_avg) + T_c/T_h]
```

For T_h=500°C (773K), T_c=200°C (473K), ZT=1.0:
```
η_carnot = (773-473)/773 = 38.8% (Carnot limit)
η_TE ≈ 12-15% (thermoelectric with ZT=1)
```

**Commercial state-of-art**: ZT ~ 1-1.5 at 500°C → η ~ 10-15%

## 3. Thermoelectric Materials

### 3.1 Material Classes

**Bismuth Telluride (Bi₂Te₃)**:
- ZT ~ 1.0 at room temperature
- Max temperature: ~250°C
- Not suitable for L.A.F.R.E.S. (too low T)

**Lead Telluride (PbTe)**:
- ZT ~ 0.8-1.2 at 400-600°C
- Mature technology
- Toxicity concerns (Pb)

**Skutterudites (CoSb₃-based)**:
- ZT ~ 1.0-1.3 at 500°C
- Good mechanical properties
- Baseline choice for L.A.F.R.E.S.

**Half-Heusler Alloys**:
- ZT ~ 0.8-1.0 at 500°C
- Excellent mechanical strength and oxidation resistance
- Higher cost

**Silicon-Germanium (SiGe)**:
- ZT ~ 0.6-0.8 at 500-1000°C
- Used in space applications (RTGs)
- Lower efficiency but very robust

### 3.2 Segmented TE Devices

**Concept**: Stack multiple materials, each optimized for different temperature range

```
Hot side (500°C) → Material A (ZT optimized 400-500°C) →
Mid temp (350°C) → Material B (ZT optimized 250-400°C) →
Cold side (200°C)
```

**Advantage**: Higher overall ZT_avg → better efficiency

**Challenge**: Thermal and electrical contact resistances between segments

## 4. Module Design

### 4.1 TE Module Configuration

**Typical structure**:
```
Hot side plate (ceramic, e.g., alumina)
↓
P-type elements (alternating with N-type)
↓
N-type elements (series electrical connection)
↓
Cold side plate (ceramic)
```

**Leg dimensions**: 
- Cross-section: 2×2 mm to 5×5 mm
- Length: 5-15 mm (determines temperature drop)

**Number of couples**: 50-200 per module

**Module size**: 40×40 mm to 62×62 mm (standard commercial sizes)

### 4.2 Heat Exchanger Interface

**Hot side**:
- Direct contact with lithium? No (corrosion, contamination risk)
- Heat pipe interface: Transfer heat from lithium → heat pipe → TE hot plate
- Material: Copper or molybdenum heat spreader

**Cold side**:
- Active cooling: Water-cooled cold plate, forced air
- Fin array for increased surface area
- Thermal interface material (TIM): Graphite pad or thermal paste

### 4.3 Thermal Resistance Optimization

Total thermal resistance (hot source → cold sink):
```
R_total = R_lithium + R_HX + R_TIM_hot + R_TE + R_TIM_cold + R_cooling
```

**Dominant terms** (typically):
- R_HX (lithium-to-hot-plate): Largest, ~0.1-1 K/W
- R_TE: Inherent to material, ~0.5-2 K/W for single module
- R_cooling: Depends on cold side design, ~0.1-0.5 K/W

**Design goal**: Minimize R_HX (most significant improvement potential)

### 4.4 Electrical Configuration

**Series connection**: Higher voltage, lower current
- Voltage per module: ~5-20 V at operating ΔT
- N modules in series: V_total = N × V_module

**Parallel connection**: Lower voltage, higher current
- For better current matching to load or power electronics

**Hybrid**: Series-parallel combinations for optimization

**Example**: 
- 20 modules, 10V each, series → 200V output
- Power conditioning: DC-DC converter to usable voltage (e.g., 48V DC bus)

## 5. System Architecture

### 5.1 Heat Extraction Points

**Number of modules**: 10-50 (depends on area available, power target)

**Placement**:
- Azimuthally distributed around lithium vessel
- Vertical distribution to capture temperature gradients

**Total area**: 1-5 m² (heat transfer surface)

### 5.2 Heat Pipes (Optional)

**Purpose**: Efficiently transfer heat from lithium boundary to TE modules

**Working fluid**: 
- Sodium (for 400-500°C): Excellent thermal conductivity
- Potassium: Alternative

**Advantages**:
- Very low thermal resistance (~0.01-0.1 K/W)
- Passive (no pumps)
- Thermal decoupling (vibration isolation)

**Disadvantages**:
- Added complexity
- Potential failure mode (loss of working fluid)

### 5.3 Cooling System

**Water cooling** (baseline):
- Closed-loop chiller
- Flow rate: 1-10 L/min
- Temperature: 20-50°C supply, 50-100°C return
- Heat rejection: 10-100 kW (most of extracted heat is waste)

**Air cooling** (alternative):
- Forced convection with fans
- Simpler, but larger temperature drop (lower η)

### 5.4 Power Conditioning

**DC output from TE modules**: Variable voltage and current (depends on ΔT, load)

**Power electronics**:
- Maximum power point tracking (MPPT): Optimize load resistance to match TE module impedance
- DC-DC converter: Buck or boost to desired output voltage
- Energy storage: Battery or capacitor bank for transient loads

**Electrical output** (target):
- Power: 1-10 kW (depends on neutron power, heat extraction)
- Voltage: 48V DC (standard for industrial systems)
- Uses: Power control systems, sensors, acoustic drivers (partial self-sufficiency)

## 6. Performance Analysis

### 6.1 Energy Flow

```
Neutron energy → Lithium heating → Heat extraction → TE conversion → Electricity

Competing path: Lithium → Insulation → Environment (losses)
```

**Example calculation**:
- Neutron power: 10 kW (deposited in lithium)
- Heat extraction: 8 kW (80% captured, 20% lost to environment)
- TE conversion at 10% efficiency: 0.8 kW = 800 W electrical

**Reality check**: 800W is modest but useful for powering control systems

### 6.2 Temperature Optimization

**Trade-off**:
- Higher T_h: Better efficiency (higher Carnot limit), but material limits and safety concerns
- Lower T_c: Better efficiency, but requires more cooling power

**Operating point** (suggested):
- T_h = 450°C (balance efficiency and material compatibility)
- T_c = 100°C (reasonable with water cooling)
- ΔT = 350°C

### 6.3 Efficiency vs. Power Output

For fixed ZT:
```
η increases with ΔT, but power output depends on heat flux Q:
P_elec = η × Q
```

Optimizing Q (maximize heat transfer) may be more important than maximizing η.

### 6.4 Degradation and Lifetime

**Failure modes**:
- Sublimation of TE materials (Te, Sb) at high temperature
- Oxidation (requires hermetic sealing)
- Thermal cycling fatigue (solder joints, ceramics)
- Electrical contact resistance increase

**Lifetime targets**:
- Phase 1: >1000 hours
- Phase 3: >10,000 hours (approach commercial viability)

**Mitigation**:
- Hermetic packaging (inert gas or vacuum encapsulation)
- Avoid thermal shocks (gradual temperature ramping)
- Periodic inspection and replacement

## 7. Alternative: Micro-Stirling Engines

### 7.1 Operating Principle

**Stirling cycle** (closed regenerative thermodynamic cycle):
1. Isothermal compression (at T_c)
2. Heat addition (constant volume, using regenerator)
3. Isothermal expansion (at T_h, work output)
4. Heat rejection (constant volume, regenerator captures heat)

**Efficiency**: η ~ 30-40% of Carnot (better than TE), so η ~ 10-15% for ΔT=300°C

### 7.2 Micro-Stirling Technology

**Commercial units**: Sunpower, Microgen (1-3 kW_e output)

**Advantages**:
- Higher efficiency than TE
- Scalable

**Disadvantages**:
- Moving parts (pistons, displacers) → wear, vibration
- Vibration coupling to lithium (may excite surface modes, interfere with acoustic control)
- Higher cost per watt

### 7.3 Integration Challenges

**Vibration**: Stirling engines operate at 50-100 Hz, may couple to lithium acoustic modes

**Mitigation**: 
- Vibration isolators
- Free-piston Stirling (linear motor, less vibration)

**Decision**: Thermoelectric for Phase 1 (simplicity), Stirling as Phase 2+ upgrade if efficiency gain justifies complexity

## 8. Instrumentation and Control

### 8.1 Temperature Monitoring

**Critical measurements**:
- TE hot side temperature (multiple points)
- TE cold side temperature
- Lithium temperature at HX interface
- Coolant inlet and outlet temperatures

**Sensor type**: Thermocouples (Type K or T), accuracy ±1°C

### 8.2 Electrical Monitoring

**Voltage and current**: At each module (or groups)

**Power calculation**: P = V × I (logged continuously)

**Efficiency calculation**: 
```
η_measured = P_elec / Q_heat
```

Where Q_heat is calculated from coolant flow rate and temperature rise

### 8.3 Control Strategy

**Load matching**: Adjust electrical load (using electronic load or MPPT controller) to maximize power output

**Thermal control**: 
- Adjust coolant flow rate to maintain target T_c
- Adjust lithium heaters (if used) to maintain target T_h

**Safety**: 
- Over-temperature shutdown (if T_h > 550°C)
- Under-cooling alarm (if T_c rises too high, indicates coolant failure)

## 9. Experimental Validation

### 9.1 Phase 1 Testing (Without Fusion)

**Setup**: 
- Lithium heated electrically (resistive heaters)
- TE modules installed
- Cooling system operational

**Measurements**:
- Thermal resistance (vary input power, measure ΔT)
- Electrical output vs. ΔT (validate Seebeck coefficient, internal resistance)
- Efficiency (compare measured to theoretical)

**Duration**: 100-1000 hours continuous operation

### 9.2 Metrics

| Metric | Target | Acceptance |
|--------|--------|------------|
| TE hot side temperature | 450°C | ±10°C |
| TE cold side temperature | 100°C | ±10°C |
| Electrical output | 500-1000 W | >300 W |
| Efficiency | 10-15% | >8% |
| Uptime | >95% | >90% |

### 9.3 Phase 2-3 (With Neutrons)

**Integrated test**: 
- Fusion core operating
- Neutron heating of lithium
- TE system extracting power

**Additional measurements**:
- Correlation between neutron rate and electrical output
- Transient response (pulsed fusion → thermal lag → power output)

## 10. Safety Considerations

### 10.1 Electrical Hazards

**DC voltage**: 50-200V (potentially lethal if >50V)

**Mitigation**:
- Insulated wiring
- Disconnect switches
- Grounding

### 10.2 Thermal Hazards

**Hot surfaces**: TE modules and heat pipes at 400-500°C

**Mitigation**:
- Insulation and guarding
- Warning labels
- Interlocks (prevent access during operation)

### 10.3 Coolant Leaks

**Risk**: Loss of cooling → over-temperature

**Detection**: 
- Coolant flow sensor (alarm if flow <threshold)
- Temperature monitoring (rapid rise indicates cooling failure)

**Response**: Automatic shutdown of heat source (fusion core, lithium heaters)

## 11. Cost Estimate

| Item | Quantity | Unit Cost | Total |
|------|----------|-----------|-------|
| TE modules (skutterudite, high-temp) | 20-50 | $500-1000 | $10K-$50K |
| Heat pipes (sodium, custom) | 10-20 | $500-1000 | $5K-$20K |
| Cold plates + cooling system | 1 system | $5K-$20K | $5K-$20K |
| Power conditioning electronics | 1 system | $5K-$10K | $5K-$10K |
| Instrumentation | Various | $5K | $5K |
| **Total** | | | **$30K-$105K** |

**Note**: Custom high-temperature TE modules are expensive; costs may decrease with volume production

## 12. Future R&D Directions

### 12.1 Advanced TE Materials

**Nanostructured materials**: 
- Quantum dot superlattices
- Nanocomposites
- Target: ZT > 2

**Organic TE materials**: 
- Lower cost
- Flexible form factors
- Currently low ZT (~0.1-0.5), but improving

### 12.2 Thermophotovoltaics (TPV)

**Concept**: Convert thermal radiation (IR photons) directly to electricity

**Efficiency**: Potentially >20% for high-temperature sources

**Status**: Early commercialization (>$10K per kW_e)

**L.A.F.R.E.S. application**: Phase 3+ if TPV costs decrease

### 12.3 Alkali Metal Thermal-to-Electric Converter (AMTEC)

**Concept**: Electrochemical conversion using sodium ion transport through beta-alumina ceramic

**Efficiency**: 15-25% demonstrated

**Challenges**: Ceramic seals, corrosion

**Application**: Possible alternative for Phase 3

## 13. References

1. Rowe (ed.), *Thermoelectrics Handbook: Macro to Nano*, CRC Press (2006)
2. Snyder & Toberer, "Complex thermoelectric materials," Nature Materials (2008)
3. Kraemer et al., "High-performance flat-panel solar thermoelectric generators," Nature Materials (2011)

---

**Document Version**: 1.0  
**Last Updated**: December 2025  
**Author**: L.A.F.R.E.S. Energy Conversion Team


