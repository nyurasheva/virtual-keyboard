import keyboard from './keyboard.js';

export default class KeyboardV {
  constructor() {
    this.lang = 'en';
    this.div = null;
    this.keyboardKey = null;
    this.keyboard = keyboard;
    this.capsClick = false;
    this.shiftClick = false;
    this.altClick = false;
    this.ctrlClick = false;
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

    this.build();

    // клавиатура нажатие
    document.addEventListener('keydown', (event) => {
      let key;
      this.area.focus();
      event.preventDefault();
      const keyActive = document.querySelector(`.key[data-key="${event.code}"]`);
      const keyCode = event.code;
      this.keyboardKey.forEach((item) => {
        if (item.dataset.key === keyCode) {
          key = item.textContent;
        }
      });

      if (this.keyArr.includes(keyCode)) {
        if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
          this.keyboardKey.forEach((element) => element.classList.remove('active'));
        }
        keyActive.classList.add('active');
        this.print(keyCode, key);
      }
    });

    // клавиатура отпускание
    document.addEventListener('keyup', (event) => {
      const keyActive = document.querySelector(`.key[data-key="${event.code}"]`);
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.shiftClick = false;
        this.build();
      }
      if (keyActive) keyActive.classList.remove('active');
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
        let keyClass = (item.class) ? `key ${item.class}` : 'key';

        if (this.capsClick || this.shiftClick) {
          if (item.shift) key = item.shift[this.lang];
          else if (item.class) key = item.key;
          else key = (item.keyLang) ? item.keyLang[this.lang].toUpperCase() : item.key.toUpperCase();
          if (this.capsClick) {
            if (item.code === 'CapsLock') keyClass += ' active';
          } else if (item.code === 'ShiftLeft') keyClass += ' active';
        } else {
          key = (item.keyLang) ? item.keyLang[this.lang] : item.key;
        }

        out += `<div class="${keyClass}" data-key=${item.code}><i>${key}</i></div>`;
      });
    });
    keyboardVirtual.innerHTML = out;
    this.area = document.querySelector('.text');
    this.keyboardKey = document.querySelectorAll('.keyboard .key');
    this.setMouseClick();
  }

  // мышка клик
  setMouseClick() {
    this.keyboardKey.forEach((element) => {
      element.addEventListener('click', () => {
        const keyCode = element.dataset.key;
        const key = element.textContent;

        if (keyCode === 'ControlLeft') {
          element.classList.add('active');
          if (this.altClick) {
            setTimeout(() => {
              this.keyboardKey.forEach((e) => e.classList.remove('active'));
            }, 300);
          }
        } else if (keyCode === 'AltLeft') {
          element.classList.add('active');
          if (this.ctrlClick) {
            setTimeout(() => {
              this.keyboardKey.forEach((e) => e.classList.remove('active'));
            }, 300);
          }
        } else if (keyCode !== 'CapsLock' || keyCode !== 'ShiftLeft') {
          element.classList.add('active');
          setTimeout(() => {
            element.classList.remove('active');
          }, 300);
        } else {
          this.keyboardKey.forEach((e) => e.classList.remove('active'));
          element.classList.add('active');
        }

        setTimeout(() => {
          this.print(keyCode, key);
        }, 200);
      });
    });
  }

  // заполнение textarea
  print(keyCode, key) {
    this.area.focus();
    switch (keyCode) {
      case 'ControlLeft':
        if (this.altClick) {
          this.langСhange();
          this.altClick = !this.altClick;
        } else this.ctrlClick = !this.ctrlClick;
        break;
      case 'AltLeft':
        if (this.ctrlClick) {
          this.langСhange();
          this.ctrlClick = !this.ctrlClick;
        } else this.altClick = !this.altClick;
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
        this.area.selectionStart -= 1;
        this.area.selectionEnd -= 1;
        break;
      case 'ArrowUp':
        this.area.selectionStart = 0;
        this.area.selectionEnd = this.area.selectionStart;
        break;
      case 'ArrowRight':
        this.area.selectionStart += 1;
        this.area.selectionEnd += 1;
        break;
      case 'ArrowDown':
        this.area.value += '';
        this.area.selectionEnd = this.area.textLength;
        this.area.selectionStart = this.area.selectionEnd;
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