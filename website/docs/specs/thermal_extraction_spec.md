---
id: thermoelectric
title: Thermoelectric Specification
sidebar_label: Thermoelectric
sidebar_position: 5
---

# Thermal Extraction System Specification

## 1. System Overview

**Purpose**: Extract heat from liquid lithium and convert to electrical power  
**Technology**: Thermoelectric modules (skutterudite-based)  
**Target Power Output**: 1-10 kW electrical  
**Heat Input**: 10-100 kW from lithium

## 2. Thermoelectric Module Specifications

| Parameter | Value | Units |
|-----------|-------|-------|
| **Materials** | | |
| N-type | Co-filled skutterudite | — |
| P-type | Ce-filled skutterudite | — |
| Figure of merit (ZT) | 1.0 - 1.3 @ 500°C | — |
| **Operating Conditions** | | |
| Hot side temperature | 400 - 500 | °C |
| Cold side temperature | 80 - 150 | °C |
| Temperature difference (ΔT) | 300 - 400 | K |
| Heat flux | 10 - 50 | kW/m² |
| **Electrical Output (per module)** | | |
| Open circuit voltage | 8 - 15 | V |
| Operating voltage | 5 - 10 | V |
| Current | 5 - 15 | A |
| Power output | 25 - 150 | W |
| Efficiency | 8 - 15 | % |
| **Physical** | | |
| Module size | 40×40 to 62×62 | mm |
| Thickness | 5 - 15 | mm |
| Number of couples | 50 - 200 | — |
| Mass per module | 100 - 300 | g |

## 3. Array Configuration

**Total Modules**: 20-50  
**Arrangement**: Azimuthally distributed around lithium vessel  
**Total Area**: 0.5 - 2 m²  
**Electrical Connection**: Series-parallel for voltage/current optimization  
**Total System Output**: 0.5 - 7.5 kW (depending on heat extraction)

## 4. Heat Exchanger Interface

**Hot Side**:
- Sodium heat pipes (10-20 units) transfer heat from lithium boundary to TE modules
- Heat pipe OD: 10-20 mm, length: 200-500 mm
- Thermal resistance: < 0.1 K/W per heat pipe

**Cold Side**:
- Water-cooled cold plates (copper or aluminum)
- Flow rate: 2-5 L/min per cold plate
- Inlet temperature: 20-40°C
- Outlet temperature: 60-100°C

## 5. Cooling System

**Chiller Specifications**:
- Capacity: 10-100 kW (most heat is waste)
- Type: Recirculating chiller
- Coolant: Water or water-glycol mix
- Pump: 10-50 L/min, 2-5 bar

**Vendor Options**: PolyScience, Lytron, Julabo

## 6. Power Conditioning

**DC-DC Converter**:
- Input: Variable (50-200 VDC from TE array)
- Output: 48 VDC (standard industrial bus)
- Power rating: 1-10 kW
- Efficiency: &gt;90%
- MPPT (Maximum Power Point Tracking): Yes

**Energy Storage** (optional):
- Battery or supercapacitor bank (1-10 kWh)
- For load leveling and backup

## 7. Performance Targets

| Metric | Value |
|--------|-------|
| Heat extraction | 10-100 kW |
| Electrical output | 1-10 kW |
| System efficiency | 10-15% (heat to electricity) |
| Uptime | &gt;95% |
| Module lifetime | &gt;5000 hours |

## 8. Estimated Cost

| Item | Cost (USD) |
|------|------------|
| TE modules | $10K-$50K |
| Heat pipes | $5K-$20K |
| Cold plates | $3K-$10K |
| Chiller | $5K-$20K |
| Power electronics | $5K-$10K |
| **Total** | **$28K-$110K** |

## References

Snyder & Toberer, "Complex thermoelectric materials," Nature Mater. (2008)

---

**Prepared by**: L.A.F.R.E.S. Energy Systems Team


