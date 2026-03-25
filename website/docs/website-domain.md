---
id: website-domain
title: Public website & domain
sidebar_label: Website & domain
sidebar_position: 5
---

# Public website and domain

## Current live URL (GitHub Pages)

The site is published at:

**[https://szemkoff.github.io/LAFRES/](https://szemkoff.github.io/LAFRES/)**

Implementation: [Docusaurus](https://docusaurus.io/) in the `website/` folder, deployed with [GitHub Actions](https://github.com/szemkoff/LAFRES/actions) to [GitHub Pages](https://pages.github.com/).

`docusaurus.config.ts` uses `url: https://szemkoff.github.io` and `baseUrl: /LAFRES/` so asset paths and links match this project-site URL.

---

## Future: custom domain (e.g. maximusfusion.com)

When you are ready to migrate:

1. Add `website/static/CNAME` containing a single line: `maximusfusion.com` (or your chosen hostname).
2. In **GitHub → Repository → Settings → Pages → Custom domain**, enter the same hostname and wait for DNS verification; enable **Enforce HTTPS**.
3. At your DNS provider, add the **A** records (apex) or **CNAME** as [documented by GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
4. Update `docusaurus.config.ts` to `url: 'https://maximusfusion.com'` and `baseUrl: '/'`, then redeploy.

Until then, keep using **szemkoff.github.io/LAFRES** for all public links.

---

**Last updated:** March 2026
