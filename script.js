(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('open', !expanded);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('open');
  }));

  const filters = [...document.querySelectorAll('.filter-chip')];
  const projects = [...document.querySelectorAll('.project-card')];
  filters.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(chip => {
      const selected = chip === button;
      chip.classList.toggle('active', selected);
      chip.setAttribute('aria-pressed', String(selected));
    });
    projects.forEach(project => {
      const categories = project.dataset.category.split(/\s+/);
      project.hidden = filter !== 'all' && !categories.includes(filter);
    });
  }));

  const dialog = document.querySelector('.video-dialog');
  const videoFrame = dialog.querySelector('.video-frame');
  const iframe = dialog.querySelector('iframe');
  const localVideo = dialog.querySelector('video');
  const dialogTitle = dialog.querySelector('.dialog-title');
  const closeButton = dialog.querySelector('.dialog-close');
  document.querySelectorAll('.video-trigger').forEach(trigger => trigger.addEventListener('click', () => {
    const title = trigger.dataset.title || 'Video preview';
    const inlineVideo = trigger.querySelector('.gallery-video');
    if (inlineVideo) {
      document.querySelectorAll('.gallery-video').forEach(video => {
        if (video !== inlineVideo) video.pause();
      });
      const playIcon = trigger.querySelector('.card-play');
      if (inlineVideo.dataset.inlineActivated === 'true' && !inlineVideo.paused) {
        inlineVideo.pause();
        if (playIcon) playIcon.textContent = '▶';
        trigger.setAttribute('aria-label', `Play ${title} inline`);
        trigger.setAttribute('aria-pressed', 'false');
      } else {
        inlineVideo.dataset.inlineActivated = 'true';
        inlineVideo.muted = false;
        inlineVideo.play().catch(() => {});
        if (playIcon) playIcon.textContent = 'Ⅱ';
        trigger.setAttribute('aria-label', `Pause ${title}`);
        trigger.setAttribute('aria-pressed', 'true');
      }
      return;
    }
    dialogTitle.textContent = title;
    videoFrame.classList.toggle('portrait', trigger.dataset.videoAspect === '9:16');
    if (trigger.dataset.localVideo === 'true') {
      iframe.src = '';
      iframe.hidden = true;
      localVideo.hidden = false;
      localVideo.src = trigger.dataset.video;
      localVideo.load();
    } else {
      localVideo.pause();
      localVideo.removeAttribute('src');
      localVideo.load();
      localVideo.hidden = true;
      iframe.hidden = false;
      iframe.title = title;
      iframe.src = trigger.dataset.video;
    }
    dialog.showModal();
    closeButton.focus();
    if (trigger.dataset.localVideo === 'true') localVideo.play().catch(() => {});
  }));
  const stopVideo = () => {
    iframe.src = '';
    localVideo.pause();
    localVideo.removeAttribute('src');
    localVideo.load();
    localVideo.hidden = true;
    iframe.hidden = false;
  };
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', stopVideo);
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dialog.open) { dialog.close(); stopVideo(); }
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('is-visible'));

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
