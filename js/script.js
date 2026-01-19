document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });

  const submenuToggles = document.querySelectorAll('.has-submenu > .nav-link');
  submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.parentElement; // The li.nav-item.has-submenu
      parent.classList.toggle('active');
    });
  });

  let currentFileName = window.location.pathname.split('/').pop();
  if (currentFileName === '' || currentFileName === '/') {
    currentFileName = 'index.html';
  }

  document.querySelectorAll('.sidebar-nav .nav-link, .sidebar-bottom-nav .nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelectorAll('.nav-item.has-submenu').forEach(navItem => {
    navItem.classList.remove('active');
  });


  document.querySelectorAll('.sidebar-nav .nav-link, .sidebar-bottom-nav .nav-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    const normalizedLinkHref = linkHref.startsWith('./') ? linkHref.substring(2) : linkHref;

    if (normalizedLinkHref === currentFileName) {
      link.classList.add('active');

      const parentSubmenu = link.closest('.submenu');
      if (parentSubmenu) {
        const submenuParentNavItem = parentSubmenu.closest('.has-submenu');
        if (submenuParentNavItem) {
          submenuParentNavItem.classList.add('active');
          const parentNavLink = submenuParentNavItem.querySelector('.nav-link');
          if (parentNavLink) {
            parentNavLink.classList.add('active');
          }
        }
      }
    }
  });
});
