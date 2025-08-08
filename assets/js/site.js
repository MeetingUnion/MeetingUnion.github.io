(function(){
  const THEME_KEY = 'prefThemePreset';
  const DARK_KEY = 'prefDark';
  const BASE = (typeof window.__BASE_URL__ === 'string') ? window.__BASE_URL__ : '';

  function url(p){ return (BASE || '') + p; }

  function readQueryPrefs(){
    const q = new URLSearchParams(window.location.search);
    const theme = q.get('theme');
    const dark = q.get('dark');
    if (theme && ['cayman','slate','hacker'].includes(theme)) {
      localStorage.setItem(THEME_KEY, theme);
    }
    if (dark === '1' || dark === 'true') {
      localStorage.setItem(DARK_KEY, '1');
    } else if (dark === '0' || dark === 'false') {
      localStorage.setItem(DARK_KEY, '0');
    }
  }

  function applyPrefs() {
    const root = document.documentElement;
    const preset = localStorage.getItem(THEME_KEY) || 'cayman';
    const darkOn = localStorage.getItem(DARK_KEY) === '1';

    root.classList.remove('theme-cayman', 'theme-slate', 'theme-hacker');
    root.classList.add(`theme-${preset}`);

    if (darkOn) {
      root.classList.add('dark', 'dark-locked');
    } else {
      root.classList.remove('dark');
      root.classList.remove('dark-locked');
    }
  }

  function buildNavbar() {
    const nav = document.createElement('div');
    nav.id = 'site-navbar';
    nav.innerHTML = `
      <div class="container">
        <a class="brand" href="${url('/')}">Home</a>
        <a href="${url('/about/')}">About</a>
        <a href="${url('/')}">Posts</a>
        <a href="${url('/feed.xml')}" title="RSS">RSS</a>
        <span class="spacer"></span>
        <label for="themePreset" style="margin-right:4px;">Style</label>
        <select id="themePreset" aria-label="Style preset">
          <option value="cayman">Cayman</option>
          <option value="slate">Slate</option>
          <option value="hacker">Hacker</option>
        </select>
        <button id="darkToggle" class="btn" type="button" style="margin-left:6px;">Dark</button>
      </div>
    `;

    const header = document.querySelector('header');
    if (header && header.parentNode) {
      header.parentNode.insertBefore(nav, header.nextSibling);
    } else {
      document.body.insertBefore(nav, document.body.firstChild);
    }

    const select = nav.querySelector('#themePreset');
    const btn = nav.querySelector('#darkToggle');
    const preset = localStorage.getItem(THEME_KEY) || 'cayman';
    const darkOn = localStorage.getItem(DARK_KEY) === '1';

    select.value = preset;
    btn.setAttribute('aria-pressed', darkOn ? 'true' : 'false');

    select.addEventListener('change', (e) => {
      localStorage.setItem(THEME_KEY, e.target.value);
      applyPrefs();
    });

    btn.addEventListener('click', () => {
      const current = localStorage.getItem(DARK_KEY) === '1';
      localStorage.setItem(DARK_KEY, current ? '0' : '1');
      applyPrefs();
      btn.setAttribute('aria-pressed', current ? 'false' : 'true');
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    readQueryPrefs();
    applyPrefs();
    buildNavbar();
  });
})();