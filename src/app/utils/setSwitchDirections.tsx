export const setSwitchDirections = () =>
  document
    .querySelectorAll('.team:first-of-type .switchButton')
    .forEach((button) => (button.innerHTML = '&#187')); //&#187; >> || &#171; <<
