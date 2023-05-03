const keyboard = [
  [
    {
      code: 'Backquote',
      keyLang: { en: '`', ru: 'ё' },
      shift: { en: '~', ru: 'Ё' },
    },
    {
      code: 'Digit1',
      key: '1',
      shift: { en: '!', ru: '!' },
    },
    {
      code: 'Digit2',
      key: '2',
      shift: { en: '@', ru: '"' },
    },
    {
      code: 'Digit3',
      key: '3',
      shift: { en: '#', ru: '№' },
    },
    {
      code: 'Digit4',
      key: '4',
      shift: { en: '$', ru: '%' },
    },
    {
      code: 'Digit5',
      key: '5',
      shift: { en: '%', ru: ':' },
    },
    {
      code: 'Digit6',
      key: '6',
      shift: { en: '^', ru: ',' },
    },
    {
      code: 'Digit7',
      key: '7',
      shift: { en: '&', ru: '.' },
    },
    {
      code: 'Digit8',
      key: '8',
      shift: { en: '*', ru: ';' },
    },
    {
      code: 'Digit9',
      key: '9',
      shift: { en: '(', ru: '(' },
    },
    {
      code: 'Digit0',
      key: '0',
      shift: { en: ')', ru: ')' },
    },
    {
      code: 'Minus',
      key: '-',
      shift: { en: '_', ru: '_' },
    },
    {
      code: 'Equal',
      key: '=',
      shift: { en: '+', ru: '+' },
    },
    {
      code: 'Backspace',
      key: '⌫ Back',
      class: 'backspace',
    },
  ],
  [
    {
      code: 'Tab',
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
      shift: { en: '{', ru: 'Х' },
    },
    {
      code: 'BracketRight',
      keyLang: { en: ']', ru: 'ъ' },
      shift: { en: '}', ru: 'Ъ' },
    },
    {
      code: 'Delete',
      key: 'Del',
      class: 'delete',
    },
  ],
  [
    {
      code: 'CapsLock',
      key: '🅰 Caps',
      class: 'caps',
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
      shift: { en: ':', ru: 'Ж' },
    },
    {
      code: 'Quote',
      keyLang: { en: "'", ru: 'э' },
      shift: { en: '"', ru: 'Э' },
    },
    {
      code: 'Enter',
      key: '↩ Enter',
      class: 'enter',
    },
  ],
  [
    {
      code: 'ShiftLeft',
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
      shift: { en: '<', ru: 'Б' },
    },
    {
      code: 'Period',
      keyLang: { en: '.', ru: 'ю' },
      shift: { en: '>', ru: 'Ю' },
    },
    {
      code: 'Slash',
      keyLang: { en: '/', ru: '.' },
      shift: { en: '?', ru: '?' },
    },
    {
      code: 'ArrowUp',
      key: '▲',
      class: 'arrow-up',
    },
    {
      code: 'ShiftRight',
      key: 'Shift',
      class: 'r-shift',
    },
  ],
  [
    {
      code: 'ControlLeft',
      key: 'Ctrl',
      class: 'control',
    },
    {
      code: 'AltLeft',
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
      key: 'Alt',
      class: 'alt',
    },
    {
      code: 'ControlRight',
      key: 'Ctrl',
      class: 'control',
    },
    {
      code: 'ArrowLeft',
      key: '◄',
      class: 'arrow-left',
    },
    {
      code: 'ArrowDown',
      key: '▼',
      class: 'arrow-down',
    },
    {
      code: 'ArrowRight',
      key: '►',
      class: 'arrow-right',
    },
  ],
];

export default keyboard;