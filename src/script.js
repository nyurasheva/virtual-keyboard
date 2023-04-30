import keyboard from './keyboard.js';

const div = document.createElement('div');
div.classList.add('klava');
div.innerHTML = `<textarea id="area" class="text" disabled></textarea>
                <div class="keyboard"></div>`;
document.body.prepend(div);

const area = document.querySelector('.text');
const keyboardVirtual = document.querySelector('.keyboard');
let lang = 'en';
let lowerCase = true;

const getLang = () => {
  console.log(lang);
  if (localStorage.getItem('langStorage')) {
    lang = localStorage.getItem('langStorage');
  }
  console.log(lang);
};

getLang();

const init = () => {
  let out = '<div class="row">';
  keyboard.forEach((row) => {
    out += '</div><div class="row">';
    row.forEach((item) => {
      let key;
      if (lowerCase === true) {
        key = (item.keyLang) ? item.keyLang[lang] : item.key;
      } else {
        key = (item.keyLang) ? item.keyLang[lang].toUpperCase() : item.key.toUpperCase();
      }
      const keyClass = (item.class) ? `key ${item.class}` : 'key';
      out += `<div class="${keyClass}" data-key=${item.code}><i>${key}</i></div>`;
    });
  });
  keyboardVirtual.innerHTML = out;
};

init();

const keyboardKey = document.querySelectorAll('.keyboard .key');

// клавиатура нажатие
document.addEventListener('keydown', (event) => {
  area.focus();
  console.log(event);
  const keyActive = document.querySelector(`.key[data-key="${event.code}"]`);
  keyboardKey.forEach((element) => element.classList.remove('active'));
  keyActive.classList.add('active');

  if (event.code === 'ControlLeft') {
    document.addEventListener('keyup', (e) => {
      if (e.code === 'AltLeft') {
        lang = (lang === 'en') ? 'ru' : 'en';
        init();
      } else document.onkeyup = null;
    });
  } else if (event.code === 'ShiftLeft') {
    document.addEventListener('keyup', (e) => {
      area.value += e.key;
    });
  } else if (event.code === 'CapsLock') {
    lowerCase = !lowerCase;
    init();
    area.value += event.key.toUpperCase();
  } else area.value += event.key;
});

// клавиатура отпускание
document.addEventListener('keyup', (event) => {
  const keyActive = document.querySelector(`.key[data-key="${event.code}"]`);
  keyActive.classList.remove('active');
  if (event.code === 'CapsLock') {
    lowerCase = !lowerCase;
    init();
  }
});

// мышка клик по кнопке
keyboardKey.forEach((element) => {
  element.addEventListener('click', () => {
    keyboardKey.forEach((e) => e.classList.remove('active'));
    element.classList.add('active');
    const key = element.textContent;
    area.value += key;
  });
});

// настройки приложения сохраняются при перезагрузке страницы
const setLocalStorage = () => {
  localStorage.setItem('langStorage', lang);
};

window.addEventListener('beforeunload', setLocalStorage);