const callModal = document.querySelector('.modal-call');
const callModalButtons = document.querySelectorAll('.btn-call');
const closeModalBtn = document.querySelector('.modal-call .btn-close');
const callOverlay = document.querySelector('.overlay');

callModalButtons.forEach(function (callBtn) {
  callBtn.addEventListener('click', function() {
    callOverlay.classList.add('overlay--show');
    callModal.classList.add('modal-call--open');
    callModal.querySelector('.call-form__item:first-child').focus();
    document.body.style.overflow = 'hidden';
  });
});

closeModalBtn.addEventListener('click', function() {
  callModal.classList.remove('modal-call--open');
  callOverlay.classList.remove('overlay--show');
  document.body.removeAttribute('style');
})

callOverlay.addEventListener('click', function() {
  callModal.classList.remove('modal-call--open');
  callOverlay.classList.remove('overlay--show');
  document.body.removeAttribute('style');
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    callModal.classList.remove('modal-call--open');
    callOverlay.classList.remove('overlay--show');
    document.body.removeAttribute('style');
  }
});
