# Emergency Shutdown Procedures

## 1. SCRAM Triggers (Automatic)

- Lithium temperature >550°C
- Vacuum loss in fusion core (P > 10⁻³ Torr)
- Coolant flow failure (<50% nominal)
- Neutron rate >110% setpoint
- Radiation area monitor >10 mSv/hr
- Fire/smoke detection
- Manual SCRAM button pressed

## 2. Shutdown Sequence (<1 second)

1. **Disable fusion core high voltage** (immediate, <10 ms)
2. **Close deuterium gas valve** (pneumatic, <100 ms)
3. **Activate inert gas purge** (argon, if lithium leak/fire detected)
4. **Ramp down acoustic power** (over 5 seconds to avoid shock)
5. **Activate emergency cooling** (if over-temperature)
6. **Sound alarms** (horn + visual)
7. **Log event** (timestamp, trigger, sensor values)

## 3. Post-SCRAM Actions (Operator)

**Immediate** (0-5 minutes):
- Verify shutdown (check HMI: HV=0, neutron rate=background)
- Identify trigger (which alarm activated?)
- Assess situation (visual inspection via cameras/windows, if safe)

**Short-term** (5-60 minutes):
- Notify personnel (evacuate if necessary)
- Call emergency services (if fire, medical emergency, large release)
- Secure area (restrict access)

**Follow-up** (hours-days):
- Investigation (root cause analysis, 5-why, fault tree)
- Corrective actions (repair, procedure update)
- Documentation (incident report, lessons learned)
- Regulatory notification (if required by license)

## 4. Restart Authorization

**Criteria**:
- Root cause identified and corrected
- All safety systems tested and verified functional
- Written approval by Project Manager and RSO

**Checklist** (before restart):
- [ ] All repairs completed
- [ ] Safety interlocks tested (simulate fault, verify trip)
- [ ] Instrumentation calibrated
- [ ] Operator briefing (lessons learned)
- [ ] Documented approval

## 5. Emergency Contacts

- **Project Manager**: [Phone]
- **Radiation Safety Officer (RSO)**: [Phone, 24/7]
- **Facility Safety Officer**: [Phone]
- **Fire Department**: 911 (inform of lithium/radiation)
- **NRC Emergency Operations Center**: 301-816-5100 (for significant radioactive release)

## 6. Training

**All operators**: Annual drill (simulated SCRAM, response)

**Evaluation**: Timed response, decision-making, communication

---

**Prepared by**: L.A.F.R.E.S. Emergency Response Team


