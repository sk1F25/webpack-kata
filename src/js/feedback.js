const feedbackModal = document.querySelector('.modal-feedback');
const feedbackButtons = document.querySelectorAll('.btn-chat');
const closeModalBtn = document.querySelector('.modal-feedback .btn-close');
const feedbackOverlay = document.querySelector('.overlay');

feedbackButtons.forEach(function (feedbackBtn) {
  feedbackBtn.addEventListener('click', function() {
    feedbackOverlay.classList.add('overlay--show');
    feedbackModal.classList.add('modal-feedback--open');
    feedbackModal.querySelector('.feedback-form__item:first-child').focus();
    document.body.style.overflow = 'hidden';
  });
});

closeModalBtn.addEventListener('click', function() {
  feedbackModal.classList.remove('modal-feedback--open');
  feedbackOverlay.classList.remove('overlay--show');
  document.body.removeAttribute('style');
})

feedbackOverlay.addEventListener('click', function() {
  feedbackModal.classList.remove('modal-feedback--open');
  feedbackOverlay.classList.remove('overlay--show');
  document.body.removeAttribute('style');
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    feedbackModal.classList.remove('modal-feedback--open');
    feedbackOverlay.classList.remove('overlay--show');
    document.body.removeAttribute('style');
  }
});
