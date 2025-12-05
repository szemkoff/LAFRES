---
id: wiring-harness-map
title: "Wiring Harness Map"
sidebar_label: Wiring Harness
sidebar_position: 6
---

# Wiring Harness Map

## 1. Power Distribution

**High Voltage** (Fusion Core):
- 100 kV supply → Shielded HV cable (RG-220 or equivalent) → Feedthrough → Cathode
- Length: 2-5 m
- Routing: Overhead conduit, away from personnel

**Acoustic Drivers** (32-72 channels):
- Amplifier rack → Multi-conductor cable → Individual transducers
- Signal: 0-200 V, 10-500 kHz
- Shielding: Coaxial or twisted-pair shielded

**TE Modules** (20-50):
- DC power output → Bus bars or heavy gauge wire (#8-#4 AWG)
- Voltage: 5-15 V per module, high current (5-15 A)

**Control Power**:
- 120/240 VAC mains → Distribution panel → 24 VDC supplies (PLC, sensors)

## 2. Signal Wiring

**Sensors** (100-200 channels):
- Thermocouples: Twisted-pair, thermocouple extension wire (Type K: yellow/red)
- Pressure transducers: Shielded 4-wire (power, ground, signal+, signal-)
- Neutron detectors: Coaxial (RG-58 or RG-59)

**Data Communication**:
- DAQ to Control PC: Ethernet Cat6 or USB 3.0
- Control PC to HMI: Ethernet
- Safety PLC: Hardwired + RS-485/Modbus

## 3. Cable Routing

**Separation**:
- High voltage: Separate conduit, >30 cm from signal cables
- High current (acoustic, TE): Metal conduit, grounded
- Signal: Cable trays with grounded shields

**Labeling**: All cables labeled every 1 m with ID, source, destination

## 4. Grounding

**Single-Point Ground**: All shields and grounds tied to central ground bus  
**Earth Ground**: Driven ground rod (&lt;5 Ω resistance)  
**Isolated Grounds**: For sensitive analog (thermocouples) to reduce noise

## 5. Documentation

**As-Built Drawings**: Update CAD with actual routing  
**Cable Schedule**: Spreadsheet with cable ID, type, length, terminations  
**Test Records**: Continuity, insulation resistance (megger test)

---

**Prepared by**: L.A.F.R.E.S. Electrical Design Team


