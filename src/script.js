import keyboard from './keyboard.js';

export default class KeyboardV {
  constructor() {
    this.lang = 'en';
    this.div = null;
    this.keyboardKey = null;
    this.keyboard = keyboard;
    this.capsClick = false;
    this.shiftClick = false;
    this.shiftKey = null;
    this.altClick = false;
    this.ctrlClick = false;
    this.area = null;
    this.keyArr = [];
    this.cursor = null;
    this.rows = 1;
  }

  init() {
    this.div = document.createElement('div');
    this.div.classList.add('klava');
    this.div.innerHTML = `<textarea id="area" class="text"></textarea>
                <p class="description">Для переключения языка используйте левыe Ctrl + Alt</p>
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
      this.cursor = this.area.selectionStart;
      const keyActive = document.querySelector(`.key[data-key="${event.code}"]`);
      const keyCode = event.code;
      if (keyCode !== 'ArrowUp' && keyCode !== 'ArrowDown') {
        event.preventDefault();

        this.keyboardKey.forEach((item) => {
          if (item.dataset.key === keyCode) {
            key = item.textContent;
          }
        });

        if (this.keyArr.includes(keyCode)) {
          if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
            this.keyboardKey.forEach((element) => element.classList.remove('active'));
            this.shiftKey = keyCode;
          }
          keyActive.classList.add('active');
          if (keyCode === 'CapsLock') {
            if (this.capsClick) keyActive.classList.remove('active');
          }
          this.print(keyCode, key);
        }
      }
    });

    // клавиатура отпускание
    document.addEventListener('keyup', (event) => {
      const keyCode = event.code;
      const keyActive = document.querySelector(`.key[data-key="${keyCode}"]`);
      if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
        this.shiftClick = false;
        this.build();
      }
      if (keyActive) keyActive.classList.remove('active');
      if (event.code === 'CapsLock') {
        if (!this.capsClick) keyActive.classList.add('active');
        this.print(keyCode);
      }
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
            if (item.code === 'CapsLock') {
              keyClass += ' active';
            }
          } else if (item.code === this.shiftKey) {
            keyClass += ' active';
          }
        } else {
          key = (item.keyLang) ? item.keyLang[this.lang] : item.key;
        }
        out += `<div class="${keyClass}" data-key=${item.code}><i>${key}</i></div>`;
      });
    });
    console.log(out);
    keyboardVirtual.innerHTML = out;
    console.log(keyboardVirtual);
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
        this.cursor = this.area.selectionStart;

        if (keyCode === 'ControlLeft') {
          element.classList.add('active');
          if (this.altClick) {
            setTimeout(() => {
              this.keyboardKey.forEach((e) => e.classList.remove('active'));
              this.capsOn();
            }, 300);
          }
        } else if (keyCode === 'AltLeft') {
          element.classList.add('active');
          if (this.ctrlClick) {
            setTimeout(() => {
              this.keyboardKey.forEach((e) => e.classList.remove('active'));
              this.capsOn();
            }, 300);
          }
        } else if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
          this.keyboardKey.forEach((e) => e.classList.remove('active'));
          element.classList.add('active');
          if (this.shiftClick && keyCode === this.shiftKey) {
            element.classList.remove('active');
          }
        } else if (keyCode === 'CapsLock') {
          this.keyboardKey.forEach((e) => e.classList.remove('active'));
          element.classList.add('active');
        } else {
          element.classList.add('active');
          setTimeout(() => {
            element.classList.remove('active');
          }, 300);
        }

        this.capsOn();

        setTimeout(() => {
          this.print(keyCode, key);
        }, 200);
      });
    });
  }

  capsOn() {
    if (this.capsClick) {
      document.querySelector('.key[data-key="CapsLock"]').classList.add('active');
    }
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
        this.area.value = this.area.value.slice(0, this.cursor - 1) + this.area.value.slice(this.cursor);
        this.area.selectionStart = this.cursor - 1;
        this.area.selectionEnd = this.cursor - 1;
        break;
      case 'Delete':
        this.area.value = this.area.value.slice(0, this.cursor) + this.area.value.slice(this.cursor + 1);
        this.area.selectionStart = this.cursor;
        this.area.selectionEnd = this.cursor;
        break;
      case 'Tab':
        this.area.value = `${this.area.value.slice(0, this.cursor)}  ${this.area.value.slice(this.cursor)}`;
        this.area.selectionStart = this.cursor + 2;
        this.area.selectionEnd = this.cursor + 2;
        break;
      case 'Enter':
        this.area.value = `${this.area.value.slice(0, this.cursor)}\n${this.area.value.slice(this.cursor)}`;
        this.area.selectionStart = this.cursor + 1;
        this.area.selectionEnd = this.cursor + 1;
        this.rows++;
        break;
      case 'Space':
        this.area.value = `${this.area.value.slice(0, this.cursor)} ${this.area.value.slice(this.cursor)}`;
        this.area.selectionStart = this.cursor + 1;
        this.area.selectionEnd = this.cursor + 1;
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
        break;
      case 'ArrowDown':
        this.area.selectionEnd = this.area.textLength;
        this.area.selectionStart = this.area.selectionEnd;
        break;
      case 'CapsLock':
        this.capsClick = !this.capsClick;
        this.build();
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        if (this.shiftKey === keyCode && this.shiftClick && !this.capsClick) {
          this.shiftClick = !this.shiftClick;
          this.shiftKey = null;
          this.build();
        } else if (!this.shiftClick && !this.capsClick) {
          this.shiftClick = !this.shiftClick;
          this.shiftKey = keyCode;
          this.build();
        } else if (this.capsClick) {
          this.shiftClick = !this.shiftClick;
          this.shiftKey = keyCode;
        } else if (this.shiftKey !== keyCode) {
          this.shiftKey = keyCode;
        }
        break;
      case 'ControlRight':
      case 'AltRight':
        this.area.value += '';
        break;
      default:
        this.area.value = this.area.value.slice(0, this.cursor) + key + this.area.value.slice(this.cursor);
        this.area.selectionStart = this.cursor + 1;
        this.area.selectionEnd = this.cursor + 1;
    }
  }

  langСhange() {
    this.lang = (this.lang === 'en') ? 'ru' : 'en';
    localStorage.setItem('langStorage', this.lang);
    this.build();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new KeyboardV(keyboard).init();
});