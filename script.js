
  // Smooth scroll + Scrollspy
  document.body.setAttribute('data-bs-spy','scroll');
  document.body.setAttribute('data-bs-target','#mainNav');
  document.body.setAttribute('data-bs-offset','75');
  document.body.setAttribute('tabindex','0');

  // Collapse mobile nav after clicking a link
  const navCollapse = document.getElementById('navContent');
  const bsCollapse = new bootstrap.Collapse(navCollapse, {toggle:false});
  document.querySelectorAll('#mainNav .nav-link').forEach(link=>{
    link.addEventListener('click', ()=>{
      if (getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none'
          && navCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });
