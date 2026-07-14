document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-burger');
  const menu = document.getElementById('project-navigation');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      const active = burger.classList.toggle('is-active');
      menu.classList.toggle('is-active', active);
      burger.setAttribute('aria-expanded', String(active));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const copyButton = document.getElementById('copy-bibtex');
  const bibtex = document.getElementById('bibtex-code');

  if (copyButton && bibtex && navigator.clipboard) {
    copyButton.addEventListener('click', async () => {
      await navigator.clipboard.writeText(bibtex.textContent.trim());
      const label = copyButton.querySelector('span:last-child');
      if (label) {
        label.textContent = 'Copied';
        window.setTimeout(() => {
          label.textContent = 'Copy';
        }, 1600);
      }
    });
  }
});
