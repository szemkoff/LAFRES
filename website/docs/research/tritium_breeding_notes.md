---
id: tritium-breeding
title: Tritium Breeding Notes
sidebar_label: Tritium Breeding
sidebar_position: 5
---

# Tritium Breeding Notes

## 1. Background

Tritium (³H) is required fuel for D-T fusion. It does not occur naturally (short half-life: 12.3 years) and must be bred from lithium via neutron capture.

## 2. Breeding Reactions

**⁶Li (dominant pathway)**:
```
⁶Li + n (thermal) → ⁴He + ³H + 4.78 MeV
```
- Cross-section: 940 barns at 0.025 eV (very high)
- Exothermic: Adds to heating

**⁷Li (secondary pathway)**:
```
⁷Li + n (fast, &gt;2.5 MeV) → ⁴He + ³H + n' - 2.47 MeV
```
- Threshold reaction: Requires fast neutrons (&gt;2.5 MeV)
- Endothermic: Consumes energy
- Produces secondary neutron (n'), enabling TBR>1

## 3. Tritium Breeding Ratio (TBR)

**Definition**: TBR = (tritium atoms produced) / (neutrons from fusion)

**Required for self-sustaining D-T**: TBR > 1.05 (accounting for losses, decay)

**L.A.F.R.E.S. Estimate**:
- With natural lithium (7.5% ⁶Li): TBR ~ 0.1-0.3 (thin blanket, insufficient coverage)
- With enriched ⁷Li (&gt;99% ⁷Li): TBR ~ 0.01 (minimal tritium)

**Implication**: L.A.F.R.E.S. cannot sustain D-T operation; must supply external tritium (if D-T mode used)

## 4. Tritium Handling

**If D-T Operation (Phase 3+)**:

### 4.1 Inventory
- Quantity: 1-10 Ci (37-370 GBq) in fusion core and lithium
- Regulatory: Requires NRC license for &gt;1 Ci

### 4.2 Extraction
- **From Lithium**: Chemical processing or vacuum extraction
- **Purification**: Cryogenic distillation or getters
- **Storage**: Uranium or zirconium beds (absorb and release H isotopes)

### 4.3 Monitoring
- Air sampling: HTO (tritiated water) vapor detectors
- Wipe tests: Surface contamination surveys
- Bioassay: Urine tritium analysis for personnel

### 4.4 Waste
- Contaminated materials: Low-level radioactive waste (LLRW)
- Disposal: Licensed facility or decay-in-storage (>100 years to negligible activity)

## 5. L.A.F.R.E.S. Decision: D-D Baseline

**Phase 1-2**: D-D only (no tritium)
- Neutron energy: 2.45 MeV
- No tritium licensing required
- Simpler, faster regulatory path

**Phase 3 (Optional)**: D-T mode
- Higher neutron yield (14.1 MeV, 100× higher cross-section)
- But: Requires tritium license (add 1-2 years), handling complexity

## 6. Tritium Breeding Simulation

**Tool**: MCNP with ⁶Li(n,t) reaction tally

**Output**: 
- Tritium production rate (Bq/s or Ci/s)
- Spatial distribution (where in lithium is T produced)
- Validation: Compare to analytical estimate

**Purpose**: Even with enriched ⁷Li, some residual ⁶Li exists → small tritium production → must quantify for safety

## 7. Long-Term Vision (Beyond L.A.F.R.E.S.)

For fusion power plant:
- TBR ~ 1.1-1.3 (required)
- Thick blanket (&gt;50 cm lithium + neutron multipliers like beryllium)
- Tritium extraction and fuel cycle (continuous processing)

L.A.F.R.E.S. can inform:
- Tritium transport in lithium
- Extraction efficiency
- Inventory control

---

**Prepared by**: L.A.F.R.E.S. Fuel Cycle Team


