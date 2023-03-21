'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // Get the coordinates of the el that we want ot scroll to
  const s1coords = section1.getBoundingClientRect(); // this method is relative to visible viewport (x and y properties change values as we scroll and change position of the elment on viewport basically)

  // console.log(s1coords); //  DOMrect with positions, x and y positions, width and height of the element....
  // console.log(e.target.getBoundingClientRect()); // e.target is element that was clicked (here it's btnScrollTo)
  // current scroll position:
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // height and width of viewport (without scroll bars, just the area available for content):
  // console.log(
  //   'height/width',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // ); // current position with current scroll

  // making scroll smooth with passing in an object instead just argument:
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // more modern way of doing this:
  section1.scrollIntoView({ behavior: 'smooth' });
});