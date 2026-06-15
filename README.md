# Meu Financeiro — Landing Page

Static landing page for the WhatsApp financial assistant. No build step — plain HTML/CSS/JS, deploys to GitHub Pages as-is.

## Files

- `index.html` — page markup (hero, features, how-it-works, pricing, FAQ, footer)
- `styles.css` — all styling. **Theme variables are at the top in `:root`** — change colors there.
- `app.js` — WhatsApp CTA wiring, mobile menu, footer year
- `.nojekyll` — tells GitHub Pages to serve files as-is (skip Jekyll)

## Run locally

Just open `index.html`, or:

```bash
python3 -m http.server 8080   # then visit http://localhost:8080
```

## Edit the essentials

- **WhatsApp number / prefilled message** → top of `app.js` (`WHATSAPP_NUMBER`, `WHATSAPP_MSG`)
- **Price / trial copy** → search `17,80` and `7 dias` in `index.html`
- **Colors / theme** → `:root` block in `styles.css` (e.g. swap `--accent`, `--bg`)

## Deploy to GitHub Pages

```bash
git remote add origin git@github.com:<user>/meu-financeiro.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → `main` / root**.
Site goes live at `https://<user>.github.io/meu-financeiro/`.

For a custom domain, add a `CNAME` file with the domain and configure DNS.
