const keyboard = [
  [
    {
      code: 'Backquote',
      keyLang: { en: '`', ru: "'" },
      shift: '~',
    },
    {
      code: 'Digit1',
      key: '1',
    },
    {
      code: 'Digit2',
      key: '2',
    },
    {
      code: 'Digit3',
      key: '3',
    },
    {
      code: 'Digit4',
      key: '4',
    },
    {
      code: 'Digit5',
      key: '5',
    },
    {
      code: 'Digit6',
      key: '6',
    },
    {
      code: 'Digit7',
      key: '7',
    },
    {
      code: 'Digit8',
      key: '8',
    },
    {
      code: 'Digit9',
      key: '9',
    },
    {
      code: 'Digit0',
      key: '0',
    },
    {
      code: 'Minus',
      key: '-',
    },
    {
      code: 'Equal',
      key: '=',
    },
    {
      code: 'Backspace',
      func: true,
      key: '⌫ Back',
      class: 'delete',
    },
  ],
  [
    {
      code: 'Tab',
      func: true,
      key: '↹ Tab',
      class: 'tab',
    },
    {
      code: 'KeyQ',
      keyLang: { en: 'q', ru: 'й' },
    },
    {
      code: 'KeyW',
      keyLang: { en: 'w', ru: 'ц' },
    },
    {
      code: 'KeyE',
      keyLang: { en: 'e', ru: 'у' },
    },
    {
      code: 'KeyR',
      keyLang: { en: 'r', ru: 'к' },
    },
    {
      code: 'KeyT',
      keyLang: { en: 't', ru: 'е' },
    },
    {
      code: 'KeyY',
      keyLang: { en: 'y', ru: 'н' },
    },
    {
      code: 'KeyU',
      keyLang: { en: 'u', ru: 'г' },
    },
    {
      code: 'KeyI',
      keyLang: { en: 'i', ru: 'ш' },
    },
    {
      code: 'KeyO',
      keyLang: { en: 'o', ru: 'щ' },
    },
    {
      code: 'KeyP',
      keyLang: { en: 'p', ru: 'з' },
    },
    {
      code: 'BracketLeft',
      keyLang: { en: '[', ru: 'х' },
    },
    {
      code: 'BracketRight',
      keyLang: { en: ']', ru: 'ъ' },
    },
    {
      code: 'Backslash',
      keyLang: { en: '\\', ru: '\\' },
    },
  ],
  [
    {
      code: 'CapsLock',
      func: true,
      key: '🅰 Caps Lock',
      class: 'delete',
    },
    {
      code: 'KeyA',
      keyLang: { en: 'a', ru: 'ф' },
    },
    {
      code: 'KeyS',
      keyLang: { en: 's', ru: 'ы' },
    },
    {
      code: 'KeyD',
      keyLang: { en: 'd', ru: 'в' },
    },
    {
      code: 'KeyF',
      keyLang: { en: 'f', ru: 'а' },
    },
    {
      code: 'KeyG',
      keyLang: { en: 'g', ru: 'п' },
    },
    {
      code: 'KeyH',
      keyLang: { en: 'h', ru: 'р' },
    },
    {
      code: 'KeyJ',
      keyLang: { en: 'j', ru: 'о' },
    },
    {
      code: 'KeyK',
      keyLang: { en: 'k', ru: 'л' },
    },
    {
      code: 'KeyL',
      keyLang: { en: 'l', ru: 'д' },
    },
    {
      code: 'Semicolon',
      keyLang: { en: ';', ru: 'ж' },
    },
    {
      code: 'Quote',
      keyLang: { en: "'", ru: 'э' },
    },
    {
      code: 'Enter',
      func: true,
      key: '↩ Enter',
      class: 'enter',
    },
  ],
  [
    {
      code: 'ShiftLeft',
      func: true,
      key: '⇧ Shift',
      class: 'l-shift',
    },
    {
      code: 'KeyZ',
      keyLang: { en: 'z', ru: 'я' },
    },
    {
      code: 'KeyX',
      keyLang: { en: 'x', ru: 'ч' },
    },
    {
      code: 'KeyC',
      keyLang: { en: 'c', ru: 'с' },
    },
    {
      code: 'KeyV',
      keyLang: { en: 'v', ru: 'м' },
    },
    {
      code: 'KeyB',
      keyLang: { en: 'b', ru: 'и' },
    },
    {
      code: 'KeyN',
      keyLang: { en: 'n', ru: 'т' },
    },
    {
      code: 'KeyM',
      keyLang: { en: 'm', ru: 'ь' },
    },
    {
      code: 'Comma',
      keyLang: { en: ',', ru: 'б' },
    },
    {
      code: 'Period',
      keyLang: { en: '.', ru: 'ю' },
    },
    {
      code: 'Slash',
      keyLang: { en: '/', ru: '.' },
    },
    {
      code: 'ArrowUp',
      func: true,
      key: '▲',
    },
    {
      code: 'ShiftRight',
      func: true,
      key: '⇧ Shift',
    },
  ],
  [
    {
      code: 'ControlLeft',
      func: true,
      key: 'Ctrl',
      class: 'control',
    },
    {
      code: 'AltLeft',
      func: true,
      key: 'Alt',
      class: 'alt',
    },
    {
      code: 'Space',
      key: ' ',
      class: 'space',
    },
    {
      code: 'AltRight',
      func: true,
      key: 'Alt',
      class: 'alt',
    },
    {
      code: 'ControlRight',
      func: true,
      key: 'Ctrl',
      class: 'control',
    },
    {
      code: 'ArrowLeft',
      func: true,
      key: '◄',
    },
    {
      code: 'ArrowDown',
      func: true,
      key: '▼',
    },
    {
      code: 'ArrowRight',
      func: true,
      key: '►',
    },
  ],
];

export default keyboard;