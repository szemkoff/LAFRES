# Diagrams and Visual Documentation

This directory contains system diagrams, schematics, and visual aids for the L.A.F.R.E.S. project.

## Planned Diagrams

### 1. System Block Diagram (`system_block_diagram.png`)
High-level overview showing all major subsystems and their interactions:
- Fusion core
- Lithium blanket
- Acoustic matrix
- Thermal conversion
- Control system
- Safety interlocks

**Tool**: Draw.io, Microsoft Visio, or PowerPoint  
**Status**: To be created in Phase 0

### 2. Lithium Loop Schematic (`lithium_loop_schematic.png`)
Detailed P&ID (Piping and Instrumentation Diagram):
- Lithium vessel geometry
- Heat exchangers
- Instrumentation points (thermocouples, pressure sensors, level sensors)
- Safety relief valves

**Tool**: AutoCAD P&ID, Lucidchart  
**Status**: To be created in Phase 0-1

### 3. Acoustic Field Map (`acoustic_field_map.png`)
Visualization of acoustic pressure distribution:
- Transducer locations
- Mode shapes (color contours)
- Frequency response plots

**Tool**: COMSOL Multiphysics output, post-processed in ParaView or MATLAB  
**Status**: To be generated from FE simulations (Phase 0)

### 4. Control System Overview (`control_system_overview.png`)
Architecture diagram showing:
- Hardware components (FPGA, PC, PLC, DAQ)
- Software layers (firmware, real-time control, supervisory, HMI)
- Data flow (sensors → processing → actuators)
- Network topology

**Tool**: Draw.io, Visio  
**Status**: To be created in Phase 1

### 5. Thermal Path Diagram (`thermal_path_diagram.png`)
Sankey diagram or flow chart illustrating energy flow:
- Fusion neutrons (input)
- Lithium heating
- Heat extraction paths
- TE conversion
- Electrical output
- Waste heat rejection

**Tool**: Python (matplotlib, Plotly), or Sankey diagram tools  
**Status**: To be created based on thermal model results (Phase 0-1)

## Additional Visuals (as needed)

- CAD renderings (3D views of system)
- Photos of hardware (once built in Phase 1+)
- Experimental data plots (temperature vs. time, neutron rate vs. voltage, etc.)
- Safety zone maps (radiation dose contours around system)

## Format Standards

**Image Format**: PNG (for web/documentation) or SVG (vector, for scalability)  
**Resolution**: Minimum 1920×1080 pixels (for presentations)  
**Labels**: Clear, legible fonts (Arial or Helvetica, 12-16pt minimum)  
**Color Scheme**: Consistent across all diagrams (e.g., red=hot, blue=cold, yellow=caution)

## Integration with Documentation

All diagrams should be referenced in the main documentation (docs/, specs/, etc.) using relative paths:

```markdown
![System Block Diagram](../diagrams/system_block_diagram.png)
```

---

**Note**: This folder currently contains placeholder documentation. Actual diagrams will be generated during project execution.

**Prepared by**: L.A.F.R.E.S. Documentation Team


