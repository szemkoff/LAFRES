---
id: materials
title: Materials Specification
sidebar_label: Materials
sidebar_position: 7
---

# Interface Protocols

## 1. Data Communication

**DAQ to Control Computer**:
- Protocol: Ethernet (TCP/IP) or USB 3.0
- Data format: Binary (for efficiency) or JSON (for flexibility)
- Sampling rate: Up to 1 MHz (acoustic channels)
- Latency: &lt;1 ms

**Control Computer to Actuators**:
- FPGA: PCIe or Ethernet (for waveform parameters)
- Amplifiers: Analog voltage (0-10 V setpoints) or digital (RS-485, Modbus)

## 2. Safety Interlock Signals

**Hardwired**:
- Emergency stop: Normally-closed relay contacts
- Critical trips: 24 VDC discrete I/O (fail-safe)

**Networked** (non-safety):
- Alarms: Ethernet (MQTT or OPC-UA)
- Status: Polled at 10 Hz

## 3. Human-Machine Interface

**Local Display**: 15-24" touchscreen, IP65 rated  
**Remote Access**: Web browser (HTTPS, port 443)  
**Authentication**: Username/password + 2FA (for write access)

## 4. Time Synchronization

**Method**: Network Time Protocol (NTP) or GPS receiver  
**Accuracy**: &lt;1 ms for all timestamps  
**Purpose**: Correlate data from multiple subsystems

## 5. Data Logging Format

**File Type**: HDF5 (Hierarchical Data Format)  
**Structure**:
```
/sensors/temperature/thermocouple_01/data (time-series array)
/sensors/neutron/detector_01/data
/actuators/acoustic/transducer_01/command
```

**Metadata**: Sensor calibration, units, sampling rate (stored in HDF5 attributes)

## 6. Control Commands

**REST API** (for external control, optional):
- GET /status → JSON of current state
- POST /setpoint → Update temperature, neutron rate, etc.
- POST /scram → Emergency shutdown

**Authentication**: API key or OAuth 2.0

## 7. References

OPC-UA Specification (IEC 62541)  
MQTT Protocol (ISO/IEC 20922)

---

**Prepared by**: L.A.F.R.E.S. Software Team


