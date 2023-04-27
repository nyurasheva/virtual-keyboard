const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8,
  9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,
  20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 222, 13,
  160, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 161,
  17, 18, 32, 18, 17, 37, 40, 39];

const div = document.createElement('div');
div.classList.add('klava');
div.innerHTML = `<textarea id="area" class="text"></textarea>
                <div class="keyboard"></div>`;
document.body.prepend(div);

const area = document.querySelector('.text');
const keyboardVirtual = document.querySelector('.keyboard');

const init = () => {
  let out = '<div class="row">';
  for (let i = 0; i < keyboard.length; i++) {
    let key = String.fromCharCode(keyboard[i]);
    let classK = 'key';
    switch (keyboard[i]) {
      case 8:
        key = 'Backspace';
        classK += ` ${key.toLowerCase()}`;
        break;
      case 9:
        key = 'Tab';
        classK += ` ${key.toLowerCase()}`;
        break;
      case 13:
        key = 'Enter';
        classK += ` ${key.toLowerCase()}`;
        break;
      case 160:
        key = 'Shift';
        classK += ` l-${key.toLowerCase()}`;
        break;
      case 161:
        key = 'Shift';
        classK += ` r-${key.toLowerCase()}`;
        break;
      case 17:
        key = 'Control';
        classK += ` ${key.toLowerCase()}`;
        break;
      case 18:
        key = 'Alt';
        classK += ` ${key.toLowerCase()}`;
        break;
      case 20:
        key = 'Caps Lock';
        classK += ` ${key.toLowerCase()}`;
        break;
      case 32:
        key = '';
        classK += ' space';
        break;
      case 37:
        key = '◄';
        break;
      case 38:
        key = '▲';
        break;
      case 39:
        key = '►';
        break;
      case 40:
        key = '▼';
        break;
      default:
        classK += ' char';
    }
    if (i === 14 || i === 28 || i === 41 || i === 54) {
      out += '</div><div class="row">';
    }
    out += `<div class="${classK}" data-key=${keyboard[i]}><i>${key}</i></div>`;
  }
  keyboardVirtual.innerHTML = out;
};

init();

const keyboardKey = document.querySelectorAll('.keyboard .key');

window.addEventListener('DOMContentLoaded', () => {
  // клавиатура нажатие
  document.addEventListener('keydown', (event) => {
    keyboardKey.forEach((element) => element.classList.remove('active'));
    document.querySelector(`.keyboard .key[data-key="${event.key.charCodeAt()}"]`).classList.add('active');
  });

  // клавиатура отпускание
  document.addEventListener('keyup', (event) => {
    document.querySelector(`.keyboard .key[data-key="${event.key.charCodeAt()}"]`).classList.remove('active');
  });

  // мышка
  keyboardKey.forEach((element) => {
    element.addEventListener('click', () => {
      keyboardKey.forEach((e) => e.classList.remove('active'));
      element.classList.add('active');
      const code = element.dataset.key;
      const key = String.fromCharCode(code);
      area.value += key;
    });
  });
});