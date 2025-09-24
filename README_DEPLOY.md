# Cashup Card — Static Site (simple & production-ready)

## Local preview (macOS/Linux/Windows)

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Edit waitlist backend
Open `assets/app.js`:
- default: mailto → change recipient `info@yourdomain.com`.
- optional: Formspree → set `USE_FORMSPREE=true` and put your endpoint.

## Deploy: GitHub Pages (quick)

1. Create a new repo on GitHub (public).
2. Upload all files in this folder (or push via Git).
3. Settings → Pages → Deploy from branch → `main` and root (`/`).
4. Open: `https://<your-username>.github.io/<repo>/`.

### Custom domain (optional)
- Add a `CNAME` file containing your domain (e.g., `cashupcard.com`).
- In your DNS, create a CNAME to `<your-username>.github.io`.

## Deploy: Netlify (1 click)
- Drag & drop the folder in app.netlify.com → Sites.
- Netlify picks `index.html` automatically (see `netlify.toml`).

## Files
- `index.html` (landing con waitlist, hero, features, FAQ)
- `privacy.html`, `terms.html`, `contact.html`
- `assets/style.css`, `assets/app.js`, `assets/favicon.svg`
- `robots.txt`, `sitemap.xml`, `netlify.toml`, `CNAME` (optional), `README_DEPLOY.md`