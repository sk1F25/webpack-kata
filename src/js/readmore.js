function clickToToggle(block, btn, indexBtn) {
  if (!indexBtn) {
    indexBtn = 0;
  } else {
    indexBtn = +indexBtn;
  }

  let btnElem = document.querySelectorAll('.' + btn)[indexBtn];
  let blockElem = document.querySelector('.' + block);
  let readMoreIcon = btnElem.querySelector('.btn-read-more__icon');
  let readMoreButtonText = btnElem.querySelector('.btn-read-more__text');

  function toggle() {
    const isExtended = btnElem.dataset.extended === "true";

    blockElem.classList.toggle(block + '--extended');
    readMoreIcon.style.transform = isExtended ? 'rotate(0deg)' : 'rotate(180deg)';
    btnElem.classList.toggle(btn + '--reverse');

    if (isExtended) {
      readMoreButtonText.textContent = btnElem.dataset.startValue;
    } else {
      btnElem.dataset.startValue = readMoreButtonText.textContent;
      readMoreButtonText.textContent = 'Свернуть';
    }

    if (isExtended) {
      btnElem.dataset.extended = "false";
    } else {
      btnElem.dataset.extended = "true";
    }
  }

  btnElem.addEventListener('click', toggle);
}

clickToToggle('main-content__text', 'btn-read-more', 0);
clickToToggle('brand-list', 'btn-read-more', 1);
clickToToggle('repair-list', 'btn-read-more', 2);
