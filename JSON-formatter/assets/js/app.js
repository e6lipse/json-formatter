const inputArea = document.querySelector('.large-area--input');
const outputArea = document.querySelector('.large-area--output');
const btnFormat = document.querySelector('.controls__button--format');

// btn_format
btnFormat.addEventListener('click', () => {
  const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
  outputArea.value = formatted;
});

// btn_reset
document.querySelectorAll('.clear-button').forEach(function (elem) {
  elem.onclick = function (e) {
    let selector = this.dataset.clearSelector;
    document.querySelectorAll(selector).forEach(function (item) {
      item.value = '';
    });
  };
});
