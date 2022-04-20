(() => {
  const button = document.querySelector('[button]');
  const menu = document.querySelector("[menu]");
  button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true' || false;
      button.classList.toggle('nav-mobile__button--is-open');
    button.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('sitemap-mobile--is-open');
  });
})();
