# Art & Oak Ltd – GitHub CMS version

This package gives you a static website that can be stored in GitHub and edited through a CMS panel.

## What is included

- `index.html` – main landing page
- `assets/site.css` – styles
- `js/gallery.js` – gallery loader
- `data/gallery.json` – gallery data file
- `admin/index.html` – CMS admin page
- `admin/config.yml` – CMS config for GitHub backend
- `images/gallery/*.svg` – starter placeholder images

## Important truth first

A visual admin panel that writes directly into GitHub **needs authentication**.

For the GitHub backend, Decap CMS requires either:

- Netlify authentication, or
- your own OAuth/auth proxy.

That is how the official Decap GitHub backend works.

## Fastest working setup

### Option A – easiest
Use this repo in **GitHub**, but deploy the site with **Netlify** connected to that repo.

Then:
1. Push this folder to GitHub.
2. Import the repo into Netlify.
3. In Netlify, enable Identity / Git Gateway or use the GitHub auth flow.
4. Update `admin/config.yml`.
5. Open `/admin/` and manage gallery items.

### Option B – GitHub Pages + custom OAuth proxy
If you insist on GitHub Pages, you need an OAuth/auth handler and then set:

- `backend.repo`
- `backend.base_url`
- `backend.site_domain`

inside `admin/config.yml`.

## Required edits before publishing

Open `admin/config.yml` and replace:

- `YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME`
- `https://YOUR-OAUTH-DOMAIN.example.com`
- `YOUR_GITHUB_PAGES_OR_CUSTOM_DOMAIN`

## How the gallery works

The public page reads `data/gallery.json`.
The CMS writes gallery data into this shape:

```json
{
  "items": [
    {
      "image": "images/gallery/example.jpg",
      "title": "Walk-in shower Carlisle",
      "description": "Easy-access shower installation.",
      "alt": "Walk-in shower installation in Carlisle"
    }
  ]
}
```

## Manual fallback

Even without CMS login working yet, you can still update the site manually:

1. upload a new image to `images/gallery/`
2. add a new object to `data/gallery.json`
3. commit and push to GitHub

## Recommended next step

If you want the cleanest working admin flow, connect this repo to Netlify. That avoids the hardest GitHub Pages auth problem.
