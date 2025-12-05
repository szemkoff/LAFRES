#!/usr/bin/env python3
import os

# Define the files and their metadata
files = {
    # Design
    'docs/design/CAD_requirements.md': ('cad-requirements', 'CAD Requirements', 'CAD Requirements', 1),
    'docs/design/acoustic_shell_geometry.md': ('acoustic-shell-geometry', 'Acoustic Shell Geometry', 'Acoustic Shell', 2),
    'docs/design/lithium_loop_design.md': ('lithium-loop-design', 'Lithium Loop Design', 'Lithium Loop', 3),
    'docs/design/pressure_vessel_design.md': ('pressure-vessel-design', 'Pressure Vessel Design', 'Pressure Vessel', 4),
    'docs/design/thermal_converter_layout.md': ('thermal-converter-layout', 'Thermal Converter Layout', 'Thermal Converter', 5),
    'docs/design/wiring_harness_map.md': ('wiring-harness-map', 'Wiring Harness Map', 'Wiring Harness', 6),
    
    # Simulations
    'docs/simulations/acoustic_modes_FE_analysis.md': ('acoustic-fe-analysis', 'Acoustic Modes FE Analysis', 'Acoustic FEA', 1),
    'docs/simulations/heat_transfer_model.md': ('heat-transfer-model', 'Heat Transfer Model', 'Heat Transfer', 2),
    'docs/simulations/lithium_CFD_simulation.md': ('lithium-cfd', 'Lithium CFD Simulation', 'Lithium CFD', 3),
    'docs/simulations/plasma_burst_simulation.md': ('plasma-burst', 'Plasma Burst Simulation', 'Plasma Burst', 4),
}

for file_path, (doc_id, title, label, position) in files.items():
    if not os.path.exists(file_path):
        print(f"Skipping {file_path} - not found")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if content.startswith('---'):
        print(f"Skipping {file_path} - already has frontmatter")
        continue
    
    frontmatter = f"""---
id: {doc_id}
title: "{title}"
sidebar_label: {label}
sidebar_position: {position}
---

"""
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(frontmatter + content)
    
    print(f"✓ Added frontmatter to {file_path}")

print("Done!")

