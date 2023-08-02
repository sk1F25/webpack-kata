const sidebar = document.querySelector('.sidebar');
const burgerButton = document.querySelector('.btn-burger');
const closeSidebarBtn = document.querySelector('.sidebar .btn-close');
const sidebarOverlay = document.querySelector('.overlay');

burgerButton.addEventListener('click', function () {
  sidebar.classList.add('sidebar--show');
  sidebarOverlay.classList.add('overlay--show');
  document.body.style.overflow = 'hidden';
})

closeSidebarBtn.addEventListener('click', function() {
  sidebar.classList.remove('sidebar--show');
  sidebarOverlay.classList.remove('overlay--show');
  document.body.removeAttribute('style');
})

sidebarOverlay.addEventListener('click', function() {
  sidebar.classList.remove('sidebar--show');
  sidebarOverlay.classList.remove('overlay--show');
  document.body.removeAttribute('style');
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    sidebar.classList.remove('sidebar--show');
    sidebarOverlay.classList.remove('overlay--show');
    document.body.removeAttribute('style');
  }
});
