# Omar Al-Midani - Three.js Professional Profile

A polished, responsive portfolio/profile site built with **Three.js**, vanilla JavaScript, and modern CSS. It turns Omar's CV into an interactive developer profile with a WebGL hero scene, professional timeline, project cards, skills architecture, education, certifications, and contact section.

## Quick preview

From the project folder:

```bash
python -m http.server 5173
```

Then open `http://localhost:5173` in a browser. This quick preview uses the CDN import map declared in `index.html`, so it needs internet access.

## Development setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Customize content

All profile content is centralized in:

```text
src/profileData.js
```

Edit that file to update skills, projects, timeline entries, contact links, or privacy-sensitive data.

## Privacy note

The visible portfolio uses public-facing contact information: email, LinkedIn, GitHub, Codeforces, and broad location. The CV PDF is included as a download link; remove `Omar_Al-Midani_CV.pdf` if you do not want the full CV available on a public deployment.

## Deployment

Good hosting options:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

For a GitHub Pages deployment with a subdirectory path, update asset paths as needed after the repository name is known.
