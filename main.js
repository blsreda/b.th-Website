/*
!!!!!
This code is created to display element's behavior. I'm not a JS expert so don't use it
!!!!!
*/


(function(){
  'use strict';

  class Menu {
    constructor(settings) {
      this.menuRootNode = settings.menuRootNode;
      this.isOpened = false;
    }
    
    changeMenuState(menuState) {
      return this.isOpened = !menuState;
    }
    
    changeToggleHint(toggleHint, toggleNode) {
      toggleNode.textContent = toggleHint;
      return toggleHint; 
    }
  }

  const menuClassesNames = {
    rootClass: 'menu',
    activeClass: 'menu_activated',
    toggleClass: 'menu__toggle',
    toggleHintClass: 'menu__toggle-hint'
  }
  
  const jsMenuNode = document.querySelector(`.${menuClassesNames.rootClass}`);
  const demoMenu = new Menu ({
    menuRootNode: jsMenuNode
  });
  
  function getCurrentToggleHint(currentMenuState) {
    return (currentMenuState !== true) ? 'Open menu' : 'Close menu';
  }
  
  function toggleMenu(event) {
    
      let currentMenuState = demoMenu.changeMenuState(demoMenu.isOpened);
      let toggleHint = getCurrentToggleHint(currentMenuState);
      
      demoMenu.changeToggleHint(
        toggleHint, 
        demoMenu.menuRootNode.querySelector(`.${menuClassesNames.toggleHintClass}`)
      );
      demoMenu.menuRootNode.classList.toggle(`${menuClassesNames.activeClass}`);
      
      return currentMenuState;  
  }
  
  jsMenuNode.querySelector(`.${menuClassesNames.toggleClass}`).addEventListener('click', toggleMenu);
})();