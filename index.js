const primaryHeader = document.querySelector('.primary-header');

let previousScollPosition = 0;
let isWaiting = false;

const isScollingDown = () => {
  let currentScolledPosition = window.scrollY || window.pageYOffset; // pageYOffset is deprecated
  let scollingDown;

  if (currentScolledPosition > previousScollPosition) {
    scollingDown = true;
  } else {
    scollingDown = false;
  }

  previousScollPosition = currentScolledPosition;

  return scollingDown;
};

const handleNavigationScolling = () => {
  // add fallback for browsers that don't support :focus-within
  if (isScollingDown() && !primaryHeader.contains(document.activeElement)) {
    primaryHeader.classList.add('primary-header__scolled-down');
    primaryHeader.classList.remove('primary-header__scolled-up');
  } else {
    primaryHeader.classList.add('primary-header__scolled-up');
    primaryHeader.classList.remove('primary-header__scolled-down');
  }
};

const throttle = (callback, time) => {
  if (isWaiting) return;

  isWaiting = true;

  setTimeout(() => {
    callback();

    isWaiting = false;
  }, time);
};

window.addEventListener('scroll', () => {
  throttle(handleNavigationScolling, 240);
});
