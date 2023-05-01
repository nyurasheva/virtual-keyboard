import keyboard from './keyboard.js';

export default class KeyboardV {
  constructor() {
    this.lang = 'en';
    this.div = null;
    this.keyboard = keyboard;
    this.capsClick = false;
    this.shiftClick = false;
    this.area = null;
    this.keyArr = [];
  }

  init() {
    this.div = document.createElement('div');
    this.div.classList.add('klava');
    this.div.innerHTML = `<textarea id="area" class="text"></textarea>
                <p class="discription">Для переключения используйте левыe Ctrl + Alt</p>
                <div class="keyboard"></div>`;
    document.body.prepend(this.div);

    if (localStorage.getItem('langStorage')) {
      this.lang = localStorage.getItem('langStorage');
    } else {
      localStorage.setItem('langStorage', this.lang);
    }

    // document.addEventListener('keydown', (event) => {
    //   if (event.getModifierState('CapsLock')) {
    //     this.capsClick = false;
    //     this.build();
    //   }
    // });

    this.build();

    this.area = document.querySelector('.text');
    const keyboardKey = document.querySelectorAll('.keyboard .key');

    // клавиатура нажатие
    document.addEventListener('keydown', (event) => {
      this.area.focus();
      event.preventDefault();
      const keyActive = document.querySelector(`.key[data-key="${event.code}"]`);
      const { key } = event;
      const keyCode = event.code;
      if (this.keyArr.includes(keyCode)) {
        keyboardKey.forEach((element) => element.classList.remove('active'));
        keyActive.classList.add('active');
        this.print(keyCode, key);
      }
    });

    // клавиатура отпускание
    document.addEventListener('keyup', (event) => {
      const keyActive = document.querySelector(`.key[data-key="${event.code}"]`);
      // if (event.code === 'Caps Lock') console.log('12');
      if (keyActive) keyActive.classList.remove('active');
    });

    // мышка нажатие
    keyboardKey.forEach((element) => {
      element.addEventListener('click', () => {
        keyboardKey.forEach((e) => e.classList.remove('active'));
        element.classList.add('active');
        const key = element.textContent;
        const keyCode = element.dataset.key;
        if (keyCode !== 'Caps Lock' || keyCode !== 'ShiftLeft') {
          setTimeout(() => {
            element.classList.remove('active');
          }, 300);
        }
        this.print(keyCode, key);
      });
    });
  }

  build() {
    this.keyArr = [];
    const keyboardVirtual = document.querySelector('.keyboard');
    let out = '<div class="row">';
    this.keyboard.forEach((row) => {
      out += '</div><div class="row">';
      row.forEach((item) => {
        let key;
        this.keyArr.push(item.code);
        const keyClass = (item.class) ? `key ${item.class}` : 'key';

        if (this.capsClick || this.shiftClick) {
          if (item.shift) key = item.shift[this.lang];
          else if (item.class) key = item.key;
          else key = (item.keyLang) ? item.keyLang[this.lang].toUpperCase() : item.key.toUpperCase();
        } else {
          key = (item.keyLang) ? item.keyLang[this.lang] : item.key;
        }

        out += `<div class="${keyClass}" data-key=${item.code}><i>${key}</i></div>`;
      });
    });
    keyboardVirtual.innerHTML = out;
  }

  // заполнение textarea
  print(keyCode, key) {
    this.area.focus();
    switch (keyCode) {
      case 'ControlLeft':
        document.addEventListener('keyup', (e) => {
          if (e.code === 'AltLeft') {
            this.langСhange();
          } else document.onkeyup = null;
        });
        break;
      case 'Backspace':
        this.area.value = this.area.value.slice(0, -1);
        break;
      case 'Tab':
        this.area.value += '  ';
        break;
      case 'Enter':
        this.area.value += '\n';
        break;
      case 'Space':
        this.area.value += ' ';
        break;
      case 'ArrowLeft':
        this.area.value += '';
        this.area.selectionStart -= 1;
        this.area.selectionEnd -= 1;
        break;
      case '▲':
        break;
      case 'ArrowRight':
        this.area.value += '';
        this.area.selectionStart += 1;
        this.area.selectionEnd += 1;
        break;
      case '▼':
        break;
      case 'CapsLock':
        this.capsClick = !this.capsClick;
        this.build();
        break;
      case 'ShiftLeft':
        this.shiftClick = !this.shiftClick;
        this.build();
        break;
      case 'ShiftRight':
      case 'ControlRight':
      case 'AltLeft':
      case 'AltRight':
        this.area.value += '';
        break;
      default:
        this.area.value += key;
    }
  }

  langСhange() {
    this.lang = (this.lang === 'en') ? 'ru' : 'en';
    localStorage.setItem('language', this.lang);
    this.build();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new KeyboardV(keyboard).init();
});