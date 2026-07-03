import { profile } from "./profileData.js";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const sections = [...document.querySelectorAll("section[id]")];
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const progress = document.querySelector(".scroll-progress span");
const cursorGlow = document.querySelector(".cursor-glow");
const appYear = document.querySelector("#year");

appYear.textContent = new Date().getFullYear();

const html = String.raw;
const externalLinkAttributes = `target="_blank" rel="noreferrer noopener"`;

function renderActions() {
  const heroActions = document.querySelector("#hero-actions");
  const contactActions = document.querySelector("#contact-actions");

  const actions = [
    { label: "Email Omar", href: `mailto:${profile.contact.email}`, variant: "primary" },
    { label: "LinkedIn", href: profile.contact.linkedin },
    { label: "GitHub", href: profile.contact.github },
    { label: "CV PDF", href: profile.resume }
  ];

  heroActions.innerHTML = actions
    .map(
      (action) => html`<a class="button ${action.variant === "primary" ? "button-primary" : "button-ghost"}" href="${action.href}" ${action.href.startsWith("http") ? externalLinkAttributes : ""}>${action.label}</a>`
    )
    .join("");

  contactActions.innerHTML = html`
    <a class="button button-primary" href="mailto:${profile.contact.email}">Start a conversation</a>
    <button class="button button-ghost" type="button" data-copy-email>Copy email</button>
    <a class="button button-ghost" href="${profile.contact.github}" ${externalLinkAttributes}>View GitHub</a>
    <a class="button button-ghost" href="${profile.contact.codeforces}" ${externalLinkAttributes}>Codeforces</a>
  `;

  const copyButton = document.querySelector("[data-copy-email]");
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      copyButton.textContent = "Email copied";
      window.setTimeout(() => (copyButton.textContent = "Copy email"), 1800);
    } catch {
      window.location.href = `mailto:${profile.contact.email}`;
    }
  });
}

function renderMetrics() {
  const target = document.querySelector("#hero-metrics");
  target.innerHTML = profile.metrics
    .map(
      (metric) => html`
        <article class="metric-card reveal">
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
          <small>${metric.detail}</small>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  const target = document.querySelector("#skills-layout");
  target.innerHTML = profile.skills
    .map(
      (skillGroup, index) => html`
        <article class="skill-card reveal" style="--delay: ${index * 80}ms">
          <div class="card-topline"></div>
          <h3>${skillGroup.group}</h3>
          <div class="chip-list">
            ${skillGroup.items.map((item) => html`<span class="chip">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderTimeline() {
  const target = document.querySelector("#timeline");
  target.innerHTML = profile.experience
    .map(
      (job, index) => html`
        <article class="timeline-item reveal" style="--delay: ${index * 90}ms">
          <div class="timeline-marker" aria-hidden="true"></div>
          <div class="timeline-card">
            <div class="timeline-meta">
              <span>${job.period}</span>
              <span>${job.type}</span>
            </div>
            <h3>${job.role}</h3>
            <p class="company">${job.company}</p>
            <p>${job.summary}</p>
            <ul>
              ${job.highlights.map((highlight) => html`<li>${highlight}</li>`).join("")}
            </ul>
            <div class="chip-list compact">
              ${job.stack.map((item) => html`<span class="chip">${item}</span>`).join("")}
            </div>
            ${job.links
              ? html`<div class="inline-links">${job.links.map((link) => html`<a href="${link.href}" ${externalLinkAttributes}>${link.label}</a>`).join("")}</div>`
              : ""}
          </div>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  const target = document.querySelector("#project-grid");
  target.innerHTML = profile.projects
    .map(
      (project, index) => html`
        <article class="project-card reveal" style="--delay: ${index * 90}ms">
          <div>
            <p class="project-category">${project.category}</p>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p class="impact"><strong>Impact:</strong> ${project.impact}</p>
          </div>
          <div class="project-footer">
            <div class="chip-list compact">
              ${project.tags.map((tag) => html`<span class="chip">${tag}</span>`).join("")}
            </div>
            ${project.links
              ? html`<div class="inline-links">${project.links.map((link) => html`<a href="${link.href}" ${externalLinkAttributes}>${link.label}</a>`).join("")}</div>`
              : ""}
          </div>
        </article>
      `
    )
    .join("");
}

function renderCardGrid(selector, items) {
  const target = document.querySelector(selector);
  if (!target || !items) return;

  target.innerHTML = items
    .map(
      (item, index) => html`
        <article class="education-card reveal" style="--delay: ${index * 70}ms">
          <span>${item.period || item.level}</span>
          <h3>${item.title || item.name}</h3>
          <p class="company">${item.organization || item.level}</p>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");
}

function renderEducation() {
  renderCardGrid("#education-grid", profile.education);
}

function renderLeadership() {
  renderCardGrid("#leadership-grid", profile.leadership);
}

function renderLanguages() {
  renderCardGrid("#languages-grid", profile.languages);
}

function renderVolunteering() {
  renderCardGrid("#volunteering-grid", profile.volunteering);
}

function renderStructuredData() {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.contact.email,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    url: profile.contact.linkedin,
    sameAs: [profile.contact.linkedin, profile.contact.github, profile.contact.codeforces],
    knowsAbout: profile.skills.flatMap((group) => group.items)
  });
  document.head.appendChild(script);
}

renderActions();
renderMetrics();
renderSkills();
renderTimeline();
renderProjects();
renderLeadership();
renderEducation();
renderLanguages();
renderVolunteering();
renderStructuredData();

function setHeaderState() {
  const scrolled = window.scrollY > 12;
  header.dataset.elevated = String(scrolled);
}

function setProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
}

function setActiveNav() {
  const offset = window.innerHeight * 0.35;
  let activeId = "home";

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top <= offset) activeId = section.id;
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.toggleAttribute("aria-current", link.getAttribute("href") === `#${activeId}`);
  });
}

function closeNav() {
  navToggle.setAttribute("aria-expanded", "false");
  nav.dataset.open = "false";
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.dataset.open = String(!isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) closeNav();
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

window.addEventListener(
  "scroll",
  () => {
    setHeaderState();
    setProgress();
    setActiveNav();
  },
  { passive: true }
);

window.addEventListener("pointermove", (event) => {
  document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
  cursorGlow.style.opacity = "1";
});

window.addEventListener("pointerleave", () => {
  cursorGlow.style.opacity = "0";
});

setHeaderState();
setProgress();
setActiveNav();

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

function createTextTexture(THREE, text, accent = "#b9ecff") {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = 360 * ratio;
  canvas.height = 112 * ratio;
  ctx.scale(ratio, ratio);

  ctx.clearRect(0, 0, 360, 112);
  ctx.fillStyle = "rgba(7, 17, 31, 0.64)";
  roundRect(ctx, 18, 28, 324, 56, 16);
  ctx.fill();

  ctx.strokeStyle = "rgba(119, 221, 255, 0.34)";
  ctx.lineWidth = 1.2;
  roundRect(ctx, 18, 28, 324, 56, 16);
  ctx.stroke();

  ctx.font = "600 24px Inter, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = accent;
  ctx.fillText(text, 180, 57);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

async function initThreeScene() {
  let THREE;
  let OrbitControls;

  try {
    const [threeModule, controlsModule] = await Promise.all([
      import("three"),
      import("three/addons/controls/OrbitControls.js")
    ]);
    THREE = threeModule;
    OrbitControls = controlsModule.OrbitControls;
  } catch (error) {
    console.warn("Three.js scene could not be loaded. The profile content is still available.", error);
    document.body.classList.add("no-webgl");
    return;
  }

  const canvas = document.querySelector("#scene");
  if (!canvas || !supportsWebGL()) {
    document.body.classList.add("no-webgl");
    return;
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x07111f, 0.038);

  const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 120);
  camera.position.set(0, 0.8, 11.5);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.035;
  controls.autoRotate = !prefersReducedMotion;
  controls.autoRotateSpeed = 0.45;
  controls.minPolarAngle = Math.PI * 0.38;
  controls.maxPolarAngle = Math.PI * 0.62;

  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  const ambient = new THREE.AmbientLight(0x8ac7ff, 0.58);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.75);
  keyLight.position.set(5, 6, 8);
  scene.add(keyLight);

  const rimLight = new THREE.PointLight(0x61dafb, 3.2, 20);
  rimLight.position.set(-4, 2.5, 6);
  scene.add(rimLight);

  const coreMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x12243b,
    metalness: 0.72,
    roughness: 0.22,
    transmission: 0.08,
    clearcoat: 0.95,
    clearcoatRoughness: 0.18,
    emissive: 0x071a2b,
    emissiveIntensity: 0.55
  });

  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.65, 3), coreMaterial);
  core.position.set(2.9, 0.2, -1.4);
  mainGroup.add(core);

  const coreWire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.72, 2),
    new THREE.MeshBasicMaterial({ color: 0x78ddff, wireframe: true, transparent: true, opacity: 0.22 })
  );
  core.add(coreWire);

  const torus = new THREE.Mesh(
    new THREE.TorusKnotGeometry(2.3, 0.012, 180, 12, 2, 5),
    new THREE.MeshBasicMaterial({ color: 0x7c5cff, transparent: true, opacity: 0.42 })
  );
  torus.position.copy(core.position);
  mainGroup.add(torus);

  const orbitRing = new THREE.Mesh(
    new THREE.TorusGeometry(3.35, 0.006, 16, 220),
    new THREE.MeshBasicMaterial({ color: 0x56e3ff, transparent: true, opacity: 0.22 })
  );
  orbitRing.position.copy(core.position);
  orbitRing.rotation.x = Math.PI / 2.6;
  orbitRing.rotation.y = Math.PI / 5;
  mainGroup.add(orbitRing);

  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = window.innerWidth < 720 ? 700 : 1300;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const palette = [new THREE.Color(0x75e7ff), new THREE.Color(0x7c5cff), new THREE.Color(0xffffff), new THREE.Color(0x2de2a7)];

  for (let i = 0; i < particleCount; i += 1) {
    const radius = 10 + Math.random() * 42;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.65;
    positions[i * 3 + 2] = radius * Math.cos(phi) - 14;

    const color = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      size: 0.044,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      sizeAttenuation: true,
      depthWrite: false
    })
  );
  scene.add(particles);

  const skillNames = profile.sceneSkills || ["Python", "OCR", "AI Agents", "Laravel", "ReactJS", "ElasticSearch", "WebSockets", "Algorithms"];
  const nodeGroup = new THREE.Group();
  nodeGroup.position.copy(core.position);
  mainGroup.add(nodeGroup);

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x70dcff, transparent: true, opacity: 0.18 });

  skillNames.forEach((skill, index) => {
    const angle = (index / skillNames.length) * Math.PI * 2;
    const y = Math.sin(index * 1.15) * 1.15;
    const radius = 3.2 + (index % 2) * 0.42;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    const node = new THREE.Mesh(
      new THREE.SphereGeometry(0.086, 24, 16),
      new THREE.MeshStandardMaterial({ color: 0x7be7ff, emissive: 0x0f8db5, emissiveIntensity: 0.95, roughness: 0.3 })
    );
    node.position.set(x, y, z);
    nodeGroup.add(node);

    const texture = createTextTexture(THREE, skill, index % 2 ? "#d6d0ff" : "#b9ecff");
    const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.92, depthWrite: false }));
    label.position.set(x * 1.08, y + 0.38, z * 1.08);
    label.scale.set(1.58, 0.5, 1);
    nodeGroup.add(label);

    const lineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), node.position]);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    nodeGroup.add(line);
  });

  const gridHelper = new THREE.GridHelper(30, 30, 0x21405c, 0x13283c);
  gridHelper.position.set(0, -4.15, -7);
  gridHelper.material.transparent = true;
  gridHelper.material.opacity = 0.13;
  scene.add(gridHelper);

  let pointerX = 0;
  let pointerY = 0;
  let scrollRatio = 0;
  const clock = new THREE.Clock();

  window.addEventListener(
    "pointermove",
    (event) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
    },
    { passive: true }
  );

  window.addEventListener(
    "scroll",
    () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      scrollRatio = scrollable > 0 ? window.scrollY / scrollable : 0;
    },
    { passive: true }
  );

  function resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  window.addEventListener("resize", resize);

  function animate() {
    const dt = clock.getDelta();
    const elapsed = clock.elapsedTime;

    if (!prefersReducedMotion) {
      core.rotation.x += dt * 0.18;
      core.rotation.y += dt * 0.26;
      coreWire.rotation.x -= dt * 0.28;
      coreWire.rotation.z += dt * 0.2;
      torus.rotation.x = elapsed * 0.18;
      torus.rotation.y = elapsed * 0.28;
      orbitRing.rotation.z = elapsed * 0.14;
      nodeGroup.rotation.y = elapsed * 0.12;
      nodeGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.09;
      particles.rotation.y = elapsed * 0.018;
      particles.rotation.x = Math.sin(elapsed * 0.05) * 0.018;
    }

    mainGroup.position.y = THREE.MathUtils.lerp(mainGroup.position.y, -scrollRatio * 1.6, 0.04);
    mainGroup.rotation.y = THREE.MathUtils.lerp(mainGroup.rotation.y, pointerX * 0.08, 0.035);
    mainGroup.rotation.x = THREE.MathUtils.lerp(mainGroup.rotation.x, -pointerY * 0.045, 0.035);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointerX * 0.45, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.8 - pointerY * 0.25, 0.04);

    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}

initThreeScene();
