/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
(function(window) {

  'use strict';

  var closeCtrl = document.getElementById('btn-search-close2'),
      searchContainer = document.querySelector('.search2'),
      inputSearch = searchContainer.querySelector('.search__input2');

  function init() {
    initEvents();
  }

  function initEvents() {
    inputSearch.addEventListener('focus', openSearch);
    closeCtrl.addEventListener('click', closeSearch);
    document.addEventListener('keyup', function(ev) {
      // escape key.
      if( ev.keyCode == 27 || ev.keyCode == 13) {
        closeSearch();
      }
    });
  }

  function openSearch() {
    searchContainer.classList.add('search--open');
    inputSearch.focus();
  }

  function closeSearch() {
    searchContainer.classList.remove('search--open');
    inputSearch.blur();
    inputSearch.value = '';
  }

  init();

})(window);

