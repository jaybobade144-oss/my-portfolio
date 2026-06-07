# GitHub Pages Deployment Guide

## Step 1 — Update `package.json` homepage

Open `package.json` and replace the `homepage` field with your actual GitHub username and repo name:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME"
```

**Examples:**
- If your GitHub username is `jaybobade` and repo is `portfolio`:
  → `"homepage": "https://jaybobade.github.io/portfolio"`
- If you're deploying to a user/org root site (repo named `jaybobade.github.io`):
  → `"homepage": "https://jaybobade.github.io"`

---

## Step 2 — Push your code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

## Step 3 — Install dependencies

```bash
npm install
```

---

## Step 4 — Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` first, then pushes the `build/` folder to the `gh-pages` branch automatically.

---

## Step 5 — Enable GitHub Pages in repo settings

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select branch: `gh-pages`, folder: `/ (root)`
4. Click **Save**

Your site will be live at your `homepage` URL in ~1–2 minutes.

---

## What was fixed

| Issue | Fix Applied |
|-------|------------|
| `homepage` pointed to someone else's URL (`rishavchanda.github.io`) | Updated to placeholder — **you must set your own URL** |
| No `404.html` — page refresh or direct URL caused GitHub 404 error | Added `public/404.html` with SPA redirect script |
| No redirect handler in `index.html` | Added script to `public/index.html` to restore URL after redirect |
| Package name was still the template author's name | Renamed to `jay-portfolio` |
