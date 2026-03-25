---
id: website-domain
title: Public website & domain
sidebar_label: Website & domain
sidebar_position: 5
---

# Public website and **maximusfusion.com**

The program’s public documentation and **Project updates** blog are published as a static site. The **canonical** URL is:

**[https://maximusfusion.com](https://maximusfusion.com)** (HTTPS)

Implementation: [Docusaurus](https://docusaurus.io/) in the `website/` folder, deployed with [GitHub Actions](https://github.com/szemkoff/LAFRES/actions) to [GitHub Pages](https://pages.github.com/).

## Enable the custom domain (checklist)

1. **DNS (your registrar)**  
   - **Apex** (`maximusfusion.com`): point to GitHub Pages IPs (see [GitHub: configuring an apex domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)) — typically the four `185.199.108.x` addresses.  
   - Or use a **www** subdomain with a **CNAME** to `szemkoff.github.io` if you prefer `www.maximusfusion.com` only.

2. **GitHub repository**  
   - Repo **Settings → Pages → Custom domain**: enter `maximusfusion.com`.  
   - Wait for DNS check; enable **Enforce HTTPS** when available.  
   - The repo includes `website/static/CNAME` so each build copies the domain to the published site.

3. **Verify**  
   - Open `https://maximusfusion.com/docs/overview` and confirm assets load (logo, CSS).  
   - Update any bookmarks from the old `github.io/.../LAFRES/` path to the new domain.

## Contact (program)

Leadership contacts aligned with company records and program submissions are on **[Team & Expertise](/docs/team)**.

---

**Last updated:** March 2026
