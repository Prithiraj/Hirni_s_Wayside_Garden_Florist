(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const photos = {
    'orchid-white': 'https://asset.bloomnation.com/c_pad%2Cd_vendor%3Aglobal%3Acatalog%3Aproduct%3Aimage.png%2Cf_auto%2Cfl_preserve_transparency%2Cq_auto/v1779318258/vendor/3832/catalog/product/2/0/20210823070955_file_6123f2830a139_6123f3401d645..jpg',
    'tropical': 'https://asset.bloomnation.com/c_pad%2Cd_vendor%3Aglobal%3Acatalog%3Aproduct%3Aimage.png%2Cf_auto%2Cfl_preserve_transparency%2Cq_auto/v1779317862/vendor/3832/catalog/product/2/0/20230210031843_file_63e66053102cc_63e660613ba11.jpg',
    'orchid-purple': 'https://asset.bloomnation.com/c_pad%2Cd_vendor%3Aglobal%3Acatalog%3Aproduct%3Aimage.png%2Cf_auto%2Cfl_preserve_transparency%2Cq_auto/v1779318470/vendor/3832/catalog/product/2/0/20230419024919_file_643fff6f0db34_643fffd93cb9e.jpg'
  };

  $$('img[data-photo]').forEach(img => {
    img.src = photos[img.dataset.photo] || '';
    img.addEventListener('error', () => {
      img.removeAttribute('src');
      img.classList.add('image-missing');
      img.title = `${img.alt} — image temporarily unavailable`;
    }, { once: true });
  });

  const header = $('[data-header]');
  const syncHeader = () => header?.classList.toggle('is-scrolled', scrollY > 12);
  syncHeader();
  addEventListener('scroll', syncHeader, { passive: true });

  const menu = $('[data-menu-toggle]');
  const nav = $('[data-nav]');
  if (menu && nav) {
    const close = () => {
      menu.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    };
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    $$('a', nav).forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { close(); menu.focus(); }
    });
  }

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const reveals = $$('.reveal');
  reveals.forEach(el => el.style.setProperty('--delay', `${Number(el.dataset.delay || 0)}ms`));
  if (reduced.matches || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: '0px 0px -7% 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  const year = $('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const canvas = $('[data-three-canvas]');
  if (canvas && !reduced.matches && innerWidth > 780) {
    initPetals(canvas).catch(() => canvas.remove());
  }
  reduced.addEventListener?.('change', e => { if (e.matches) canvas?.remove(); });

  async function initPetals(canvasEl) {
    const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js');
    const hero = canvasEl.closest('.hero');
    if (!hero) return;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasEl, alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
    camera.position.z = 9;
    const group = new THREE.Group();
    scene.add(group);

    const palette = [0xa63b78, 0xf1dbe7, 0xd7a84b, 0x8aaa91];
    const petals = [];
    for (let i = 0; i < 22; i++) {
      const geometry = new THREE.CircleGeometry(.16 + Math.random() * .12, 20);
      geometry.scale(.72, 1.5, 1);
      const material = new THREE.MeshBasicMaterial({
        color: palette[i % palette.length],
        transparent: true,
        opacity: .13 + Math.random() * .14,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const petal = new THREE.Mesh(geometry, material);
      petal.position.set((Math.random() - .18) * 11, (Math.random() - .5) * 7, (Math.random() - .5) * 3);
      petal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      petal.userData.speed = .001 + Math.random() * .0015;
      petals.push(petal);
      group.add(petal);
    }

    let mouseX = 0, mouseY = 0, running = true;
    addEventListener('pointermove', e => {
      mouseX = (e.clientX / innerWidth - .5) * .25;
      mouseY = (e.clientY / innerHeight - .5) * .16;
    }, { passive: true });

    const resize = () => {
      const r = hero.getBoundingClientRect();
      renderer.setSize(Math.max(r.width, 1), Math.max(r.height, 1), false);
      camera.aspect = r.width / Math.max(r.height, 1);
      camera.updateProjectionMatrix();
    };
    resize();
    addEventListener('resize', resize, { passive: true });

    const animate = t => {
      if (!running) return;
      group.rotation.y += (mouseX - group.rotation.y) * .015;
      group.rotation.x += (-mouseY - group.rotation.x) * .015;
      petals.forEach((p, i) => {
        p.rotation.z += p.userData.speed * 4;
        p.position.y += Math.sin(t * p.userData.speed + i) * .0007;
        p.position.x += Math.cos(t * p.userData.speed * .6 + i) * .0005;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    document.addEventListener('visibilitychange', () => {
      running = !document.hidden;
      if (running) requestAnimationFrame(animate);
    });
  }
})();
