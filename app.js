/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.scss?");

/***/ }),

/***/ "./src/assets/js/chars.js":
/*!********************************!*\
  !*** ./src/assets/js/chars.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst chars = {\r\n  en: [{ char: '`', alt: '~', code: 'Backquote' },\r\n    { char: '1', alt: '!', code: 'Digit1' },\r\n    { char: '2', alt: '@', code: 'Digit2' },\r\n    { char: '3', alt: '#', code: 'Digit3' },\r\n    { char: '4', alt: '$', code: 'Digit4' },\r\n    { char: '5', alt: '%', code: 'Digit5' },\r\n    { char: '6', alt: '^', code: 'Digit6' },\r\n    { char: '7', alt: '&', code: 'Digit7' },\r\n    { char: '8', alt: '*', code: 'Digit8' },\r\n    { char: '9', alt: '(', code: 'Digit9' },\r\n    { char: '0', alt: ')', code: 'Digit0' },\r\n    { char: '-', alt: '_', code: 'Minus' },\r\n    { char: '=', alt: '+', code: 'Equal' },\r\n    {\r\n      char: 'backspace', alt: '~', width: 'keyboard__btn_span-5', code: 'Backspace',\r\n    },\r\n    { char: 'tab', width: 'keyboard__btn_span-3', code: 'Tab' },\r\n    { char: 'q', code: 'KeyQ' },\r\n    { char: 'w', code: 'KeyW' },\r\n    { char: 'e', code: 'KeyE' },\r\n    { char: 'r', code: 'KeyR' },\r\n    { char: 't', code: 'KeyT' },\r\n    { char: 'y', code: 'KeyY' },\r\n    { char: 'u', code: 'KeyU' },\r\n    { char: 'i', code: 'KeyI' },\r\n    { char: 'o', code: 'KeyO' },\r\n    { char: 'p', code: 'KeyP' },\r\n    { char: '[', alt: '{', code: 'BracketLeft' },\r\n    { char: ']', alt: '}', code: 'BracketRight' },\r\n    { char: '\\\\', alt: '|', code: 'Backslash' },\r\n    { char: 'del', code: 'Delete' },\r\n    { char: 'caps lock', width: 'keyboard__btn_span-4', code: 'CapsLock' },\r\n    { char: 'a', code: 'KeyA' },\r\n    { char: 's', code: 'KeyS' },\r\n    { char: 'd', code: 'KeyD' },\r\n    { char: 'f', code: 'KeyF' },\r\n    { char: 'g', code: 'KeyG' },\r\n    { char: 'h', code: 'KeyH' },\r\n    { char: 'j', code: 'KeyJ' },\r\n    { char: 'k', code: 'KeyK' },\r\n    { char: 'l', code: 'KeyL' },\r\n    { char: ';', alt: ':', code: 'Semicolon' },\r\n    { char: \"'\", alt: '\"', code: 'Quote' },\r\n    { char: 'enter', width: 'keyboard__btn_span-5', code: 'Enter' },\r\n    { char: 'shift', width: 'keyboard__btn_span-5', code: 'ShiftLeft' },\r\n    { char: 'z', code: 'KeyZ' },\r\n    { char: 'x', code: 'KeyX' },\r\n    { char: 'c', code: 'KeyC' },\r\n    { char: 'v', code: 'KeyV' },\r\n    { char: 'b', code: 'KeyB' },\r\n    { char: 'n', code: 'KeyN' },\r\n    { char: 'm', code: 'KeyM' },\r\n    { char: ',', alt: '<', code: 'Comma' },\r\n    { char: '>', code: 'Period' },\r\n    { char: '/', alt: '?', code: 'Slash' },\r\n    { char: '▲', code: 'ArrowUp' },\r\n    { char: 'shift', width: 'keyboard__btn_span-4', code: 'ShiftRight' },\r\n    { char: 'ctrl', width: 'keyboard__btn_span-3', code: 'ControlLeft' },\r\n    { char: 'win', width: 'keyboard__btn_span-3', code: 'MetaLeft' },\r\n    { char: 'alt', code: 'AltLeft' },\r\n    { char: '_____', width: 'keyboard__btn_span-10', code: 'Space' },\r\n    { char: 'alt', code: 'AltRight' },\r\n    { char: 'ctrl', width: 'keyboard__btn_span-3', code: 'ControlRight' },\r\n    { char: '◀', code: 'ArrowLeft' },\r\n    { char: '▼', code: 'ArrowDown' },\r\n    { char: '▶', code: 'ArrowRight' },\r\n    { char: '⇄', code: 'Lang' },\r\n  ],\r\n  ru: [\r\n    { char: 'ё', alt: '~', code: 'Backquote' },\r\n    { char: '1', alt: '!', code: 'Digit1' },\r\n    { char: '2', alt: '\"', code: 'Digit2' },\r\n    { char: '3', alt: '№', code: 'Digit3' },\r\n    { char: '4', alt: ';', code: 'Digit4' },\r\n    { char: '5', alt: '%', code: 'Digit5' },\r\n    { char: '6', alt: ':', code: 'Digit6' },\r\n    { char: '7', alt: '?', code: 'Digit7' },\r\n    { char: '8', alt: '*', code: 'Digit8' },\r\n    { char: '9', alt: '(', code: 'Digit9' },\r\n    { char: '0', alt: ')', code: 'Digit0' },\r\n    { char: '-', alt: '_', code: 'Minus' },\r\n    { char: '=', alt: '+', code: 'Equal' },\r\n    {\r\n      char: 'backspace', alt: '~', width: 'keyboard__btn_span-5', code: 'Backspace',\r\n    },\r\n    { char: 'tab', width: 'keyboard__btn_span-3', code: 'Tab' },\r\n    { char: 'й', code: 'KeyQ' },\r\n    { char: 'ц', code: 'KeyW' },\r\n    { char: 'у', code: 'KeyE' },\r\n    { char: 'к', code: 'KeyR' },\r\n    { char: 'е', code: 'KeyT' },\r\n    { char: 'н', code: 'KeyY' },\r\n    { char: 'г', code: 'KeyU' },\r\n    { char: 'ш', code: 'KeyI' },\r\n    { char: 'щ', code: 'KeyO' },\r\n    { char: 'з', code: 'KeyP' },\r\n    { char: 'х', code: 'BracketLeft' },\r\n    { char: 'ъ', code: 'BracketRight' },\r\n    { char: '\\\\', alt: '/', code: 'Backslash' },\r\n    { char: 'del', code: 'Delete' },\r\n    { char: 'caps lock', width: 'keyboard__btn_span-4', code: 'CapsLock' },\r\n    { char: 'ф', code: 'KeyA' },\r\n    { char: 'ы', code: 'KeyS' },\r\n    { char: 'в', code: 'KeyD' },\r\n    { char: 'а', code: 'KeyF' },\r\n    { char: 'п', code: 'KeyG' },\r\n    { char: 'р', code: 'KeyH' },\r\n    { char: 'о', code: 'KeyJ' },\r\n    { char: 'л', code: 'KeyK' },\r\n    { char: 'д', code: 'KeyL' },\r\n    { char: 'ж', code: 'Semicolon' },\r\n    { char: 'э', code: 'Quote' },\r\n    { char: 'enter', width: 'keyboard__btn_span-5', code: 'Enter' },\r\n    { char: 'shift', width: 'keyboard__btn_span-5', code: 'ShiftLeft' },\r\n    { char: 'я', code: 'KeyZ' },\r\n    { char: 'ч', code: 'KeyX' },\r\n    { char: 'с', code: 'KeyC' },\r\n    { char: 'м', code: 'KeyV' },\r\n    { char: 'и', code: 'KeyB' },\r\n    { char: 'т', code: 'KeyN' },\r\n    { char: 'ь', code: 'KeyM' },\r\n    { char: 'б', code: 'Comma' },\r\n    { char: 'ю', code: 'Period' },\r\n    { char: '.', alt: ',', code: 'Slash' },\r\n    { char: '▲', code: 'ArrowUp' },\r\n    { char: 'shift', width: 'keyboard__btn_span-4', code: 'ShiftRight' },\r\n    { char: 'ctrl', width: 'keyboard__btn_span-3', code: 'ControlLeft' },\r\n    { char: 'win', width: 'keyboard__btn_span-3', code: 'MetaLeft' },\r\n    { char: 'alt', code: 'AltLeft' },\r\n    { char: '_____', width: 'keyboard__btn_span-10', code: 'Space' },\r\n    { char: 'alt', code: 'AltRight' },\r\n    { char: 'ctrl', width: 'keyboard__btn_span-3', code: 'ControlRight' },\r\n    { char: '◀', code: 'ArrowLeft' },\r\n    { char: '▼', code: 'ArrowDown' },\r\n    { char: '▶', code: 'ArrowRight' },\r\n    { char: '⇄', code: 'Lang' },\r\n  ],\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chars);\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/js/chars.js?");

/***/ }),

/***/ "./src/assets/js/helpers.js":
/*!**********************************!*\
  !*** ./src/assets/js/helpers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(el, elClasses) {\r\n  const element = document.createElement(el);\r\n  elClasses.forEach((currentClass) => element.classList.add(currentClass));\r\n  return element;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/js/helpers.js?");

/***/ }),

/***/ "./src/components/container/container.js":
/*!***********************************************!*\
  !*** ./src/components/container/container.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/helpers */ \"./src/assets/js/helpers.js\");\n\r\n\r\nconst container = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['container']);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (container);\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/container/container.js?");

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/helpers */ \"./src/assets/js/helpers.js\");\n\r\n\r\nconst header = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('header', ['header']);\r\nconst h1 = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', ['header__title']);\r\nconst headerDescription = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', ['header__description']);\r\nconst headerLink = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', ['link', 'header__link']);\r\n\r\nh1.textContent = 'virtual keyboard';\r\n\r\nheaderDescription.textContent = 'project for ';\r\nheaderDescription.append(headerLink);\r\n\r\nheaderLink.textContent = 'Rolling Scopes School';\r\nheaderLink.setAttribute('href', 'https://rs.school/');\r\nheaderLink.setAttribute('target', 'blank');\r\n\r\nheader.append(h1);\r\nheader.append(headerDescription);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/header/header.js?");

/***/ }),

/***/ "./src/components/keyboard/keyboard.js":
/*!*********************************************!*\
  !*** ./src/components/keyboard/keyboard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/helpers */ \"./src/assets/js/helpers.js\");\n/* harmony import */ var _assets_js_chars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/chars */ \"./src/assets/js/chars.js\");\n\r\n\r\n\r\nconst keyboard = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['main__keyboard', 'keyboard']);\r\nconst buttons = {};\r\nconst state = {\r\n  shift: false,\r\n  caps: false,\r\n  ctrl: false,\r\n  alt: false,\r\n  cursor: 0,\r\n  lang: 'ru',\r\n  keyboard: false,\r\n};\r\n\r\nfunction pushKey(code) {\r\n  const textarea = document.querySelector('.main__textarea');\r\n  const currentCursor = textarea.selectionStart;\r\n  const btn = buttons[code];\r\n  let leftPart = textarea.textContent.substring(0, currentCursor);\r\n  let rightPart = textarea.textContent.substring(currentCursor, textarea.textContent.length);\r\n\r\n  switch (code) {\r\n    case 'Backspace':\r\n    case 'Delete':\r\n      if (textarea.selectionStart !== textarea.selectionEnd) {\r\n        leftPart = textarea.textContent.substring(0, textarea.selectionStart);\r\n        rightPart = textarea\r\n          .textContent.substring(textarea.selectionEnd, textarea.textContent.length);\r\n      } else if (state.cursor > 0 && code === 'Backspace') {\r\n        leftPart = leftPart.substring(0, leftPart.length - 1);\r\n        state.cursor -= 1;\r\n      } else rightPart = rightPart.substring(1, rightPart.length);\r\n      break;\r\n    case 'Space':\r\n      leftPart += ' ';\r\n      state.cursor += 1;\r\n      break;\r\n    case 'Tab':\r\n      leftPart += '   ';\r\n      state.cursor += 3;\r\n      break;\r\n    case 'Enter':\r\n      leftPart += '\\n';\r\n      state.cursor = leftPart.length;\r\n      break;\r\n    case 'Lang':\r\n      if (state.lang === 'en') changeLanguage('ru');\r\n      else changeLanguage('en');\r\n      break;\r\n    case 'MetaLeft':\r\n    case 'MetaRight':\r\n    case 'AltRight':\r\n    case 'AltLeft':\r\n    case 'ControlRight':\r\n    case 'ControlLeft':\r\n    case 'ShiftLeft':\r\n    case 'ShiftRight':\r\n    case 'CapsLock':\r\n      setState(code);\r\n      break;\r\n    default: {\r\n      if (state.caps || state.shift) {\r\n        if (btn.alt) leftPart += btn.alt;\r\n        else leftPart += btn.char.toUpperCase();\r\n      } else leftPart += btn.char;\r\n      state.cursor += 1;\r\n    }\r\n  }\r\n\r\n  if (code !== 'CapsLock') btn.btn.classList.add('pressed');\r\n  else btn.btn.classList.toggle('pressed');\r\n\r\n  textarea.textContent = leftPart + rightPart;\r\n  textarea.focus();\r\n  textarea.selectionStart = state.cursor;\r\n}\r\n\r\nfunction unpushKey(code) {\r\n  if (!code.includes('Caps')) {\r\n    if (buttons[code].btn.classList.contains('functional')) setState(code);\r\n    buttons[code].btn.classList.remove('pressed');\r\n  }\r\n}\r\n\r\nfunction setupKeyboardListeners() {\r\n  Object.keys(buttons).forEach((key) => {\r\n    const btn = buttons[key];\r\n\r\n    btn.btn.addEventListener('mousedown', (e) => {\r\n      e.preventDefault();\r\n      pushKey(btn.code);\r\n    });\r\n    btn.btn.addEventListener('mouseup', () => {\r\n      unpushKey(btn.code);\r\n    });\r\n  });\r\n}\r\n\r\nfunction createButton(btn) {\r\n  const button = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['btn', 'keyboard__btn']);\r\n  button.textContent = btn.char;\r\n\r\n  if (btn.width) button.classList.add(btn.width);\r\n  if (btn.alt) {\r\n    const alt = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', ['alt-value']);\r\n    alt.textContent = btn.alt;\r\n    button.append(alt);\r\n  }\r\n\r\n  if (btn.code.includes('Lang')\r\n      || btn.code.includes('Backspace')\r\n      || btn.code.includes('Enter')\r\n      || btn.code.includes('Shift')\r\n      || btn.code.includes('Alt')\r\n      || btn.code.includes('Control')\r\n      || btn.code.includes('Meta')\r\n      || btn.code.includes('Arrow')\r\n      || btn.code.includes('Arrow')\r\n      || btn.code.includes('Lock')\r\n      || btn.code.includes('Lock')\r\n      || btn.code.includes('Tab')\r\n      || btn.code.includes('Delete')\r\n  ) button.classList.add('functional');\r\n\r\n  buttons[btn.code] = {\r\n    code: btn.code,\r\n    char: btn.char,\r\n    alt: btn.alt,\r\n    btn: button,\r\n  };\r\n\r\n  keyboard.append(button);\r\n  state.keyboard = true;\r\n}\r\n\r\nfunction changeLanguage(lang) {\r\n  if (state.keyboard) [...document.querySelectorAll('.keyboard__btn')].forEach((btn) => btn.remove());\r\n  _assets_js_chars__WEBPACK_IMPORTED_MODULE_1__[\"default\"][lang].forEach((char) => createButton(char));\r\n  if (state.caps) buttons.CapsLock.btn.classList.add('pressed');\r\n  setupKeyboardListeners();\r\n  localStorage.setItem('lang', lang);\r\n  state.lang = lang;\r\n}\r\n\r\nfunction setState(code) {\r\n  if (code.includes('Shift')) {\r\n    if (state.shift) state.shift = false;\r\n    else state.shift = true;\r\n  } else if (code.includes('Alt')) {\r\n    if (state.alt) state.alt = false;\r\n    else state.alt = true;\r\n  } else if (code.includes('Control')) {\r\n    if (state.ctrl) state.ctrl = false;\r\n    else state.ctrl = true;\r\n  } else if (code.includes('Caps')) {\r\n    if (state.caps) state.caps = false;\r\n    else state.caps = true;\r\n  }\r\n\r\n  if (state.alt && state.ctrl) {\r\n    if (state.lang === 'en') changeLanguage('ru');\r\n    else changeLanguage('en');\r\n  }\r\n}\r\n\r\nsetTimeout(() => {\r\n  document.querySelector('.main__textarea').addEventListener('click', (event) => {\r\n    state.cursor = event.target.selectionStart;\r\n  });\r\n}, 0);\r\n\r\ndocument.addEventListener('keydown', (event) => {\r\n  if (event.code !== 'F5' && event.code !== 'F12') event.preventDefault();\r\n  if (buttons[event.code]) pushKey(event.code);\r\n});\r\n\r\ndocument.addEventListener('keyup', (event) => {\r\n  event.preventDefault();\r\n  if (buttons[event.code]) unpushKey(event.code);\r\n});\r\n\r\nif (localStorage.getItem('lang')) changeLanguage(localStorage.getItem('lang'));\r\nelse changeLanguage('ru');\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboard);\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/keyboard/keyboard.js?");

/***/ }),

/***/ "./src/components/main/main.js":
/*!*************************************!*\
  !*** ./src/components/main/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/helpers */ \"./src/assets/js/helpers.js\");\n\r\n\r\nconst main = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('main', ['main']);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/main/main.js?");

/***/ }),

/***/ "./src/components/textarea/textarea.js":
/*!*********************************************!*\
  !*** ./src/components/textarea/textarea.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/helpers */ \"./src/assets/js/helpers.js\");\n\r\n\r\nconst wrapper = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['main__textarea-wrapper']);\r\nconst langInfo = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', ['textarea__lang-info']);\r\nconst textarea = (0,_assets_js_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('textarea', ['main__textarea', 'textarea']);\r\n\r\nlangInfo.textContent = '(Windows) english ⇄ русский: \"ALT + CTRL\" | \"⇄\"';\r\n\r\nwrapper.append(langInfo);\r\nwrapper.append(textarea);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/textarea/textarea.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _components_container_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/container/container */ \"./src/components/container/container.js\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header */ \"./src/components/header/header.js\");\n/* harmony import */ var _components_main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main */ \"./src/components/main/main.js\");\n/* harmony import */ var _components_textarea_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/textarea/textarea */ \"./src/components/textarea/textarea.js\");\n/* harmony import */ var _components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/keyboard/keyboard */ \"./src/components/keyboard/keyboard.js\");\n// SASS\r\n\r\n\r\n// COMPONENTS\r\n\r\n\r\n\r\n\r\n\r\n\r\n_components_container_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"].append(_components_header_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n_components_container_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"].append(_components_main_main__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n_components_main_main__WEBPACK_IMPORTED_MODULE_3__[\"default\"].append(_components_textarea_textarea__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n_components_main_main__WEBPACK_IMPORTED_MODULE_3__[\"default\"].append(_components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n\r\ndocument.querySelector('body').append(_components_container_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;