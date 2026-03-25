# LAFRES — Project status (repository)

Single-page alignment between the **GitHub repo**, **website** (`website/`), and **internal program** documentation.

## Current focus (major line of work)

- Acoustic amplification of **solid-state D–D fusion** in **titanium deuteride** systems (published baseline: Nature Scientific Reports 2024).
- **CFD** (OpenFOAM), **microfluidic** bubble control, **multi-channel neutron detection**, high-speed imaging, reproducibility and **scaling roadmap**.
- Laboratory operations under **MAXIMUS FUSION SYSTEMS, LLC**, Naples, FL (see `website/docs/lab/facilities.md` on the doc site).

## Team (leadership)

| Role | Name | Notes |
|------|------|--------|
| PI / CTO | Maxim Fomichev, Ph.D. | Technical lead, Nature first author |
| CEO / Program management | Stan Zemskoff | Operations, PM, contracting interface |
| Senior engineering | Maxim Koshelev (EE), Doug Tinsler (ME) | Detection, reactors, fabrication |
| Strategic advisor | Ross Koningstein, Ph.D. | Advisory / commercialization |

Detailed bios and hiring: **website** `docs/team.md`.

## Budget & planning class

Internal spreadsheets use a **~$5.28M / 24 months / 9.5 FTE** class total (direct + indirect) for the full program line—maintained in **private company storage** (not in this public repo). Use those for consistency checks.

Public alignment rules: [`docs/PUBLIC-WEBSITE-ALIGNMENT.md`](PUBLIC-WEBSITE-ALIGNMENT.md).

## Federal R&D

- **Public rule:** Do not announce specific grants or agencies until awards are executed and communications are cleared.
- **Website:** Neutral language only—see `website/docs/project-plan.md`.

## Pipelines

| Pipeline | Purpose |
|----------|---------|
| **GitHub Actions** | `.github/workflows/deploy.yml` — builds Docusaurus site on push to `main` |
| **Website** | `website/` — `npm ci` / `npm run build` |
| **Blog** | `website/blog/` — **Project updates** at `https://szemkoff.github.io/LAFRES/blog` |
| **Site** | Public docs: **szemkoff.github.io/LAFRES** (GitHub Pages from `website/`) |

## Last reviewed

March 2026.
