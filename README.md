# Omar Al-Midani - Three.js AI Portfolio

A polished, responsive portfolio/profile site built with **Three.js**, vanilla JavaScript, modern CSS, and Vite. This updated version uses Omar's corrected CV and positions him as an **Artificial Intelligence Engineer & Full Stack Developer**.

## Profile focus

The site highlights:

- AI engineering: OCR optimization, model fine-tuning, NLP/NLU, intelligent agents, gesture recognition, and healthcare automation.
- Full-stack engineering: Laravel, Laravel Blade, ReactJS, MySQL, ElasticSearch, WebSockets, Pusher, Stripe/PayPal APIs, webhooks, and automated invoicing.
- Competitive programming: SCPC 2025 national top-20 finish, two DCPC medals, Codeforces participation, and coaching in DP, graph theory, and advanced data structures.
- Education, languages, volunteering, GitHub, LinkedIn, Codeforces, and downloadable CV PDF.

## Quick preview without installing packages

From the project folder:

```bash
python -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

This quick preview uses the CDN import map in `index.html`, so it needs internet access.

## Development setup

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal, usually:

```text
http://localhost:5173
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

Edit that file to update experience, projects, skills, leadership, languages, volunteering, contact links, or privacy-sensitive details.

## GitHub Pages deployment

This project includes:

```text
vite.config.js
.github/workflows/deploy.yml
```

The Vite config uses `base: './'`, which makes the build work on GitHub Pages project URLs such as:

```text
https://Omarmidanii.github.io/omar-threejs-profile/
```

On GitHub, open your repository, then go to:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

Push the project to the `main` branch. The included workflow will build the site and deploy the `dist` folder automatically.

## Privacy note

The visible website uses public-facing contact channels: email, LinkedIn, GitHub, Codeforces, and broad location. The corrected CV PDF is included as a downloadable file named:

```text
Omar-AlMidani-CV.pdf
```

Remove it from the project before public deployment if you do not want the full CV available online.
