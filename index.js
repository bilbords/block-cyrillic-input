// ==UserScript==
// @name        Block cyrillic letters
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function () {
  'use strict';

  document.addEventListener('keypress', function (e) {
    let key = e.which || e.keyCode;
    let keyChar = String.fromCharCode(key);

    const regExp = new RegExp('[а-яА-Я]');

    if (regExp.test(keyChar)) e.preventDefault();
  });
})();
