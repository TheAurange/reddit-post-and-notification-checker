// ==UserScript==
// @name    [Reddit] Post & Notification Tracker
// @author  Aurange
// @version 1.2
// @match   https://www.reddit.com/new/
// @grant   window.close
// ==/UserScript==

"use strict";

new MutationObserver(function(mutationList, observer){
  let post = document.querySelector("[data-scroller-first] h3"),
      chat = document.querySelector("[data-testid='reddit-chat-button'] > a"),
      notif = document.querySelector("[aria-label='Open notifications inbox'] > div");

  if(post !== null && chat !== null && notif !== null){
    observer.disconnect();

    setTimeout(function(){
      if(localStorage.getItem("post") === null || localStorage.getItem("post") !== post.innerText) localStorage.setItem("post", post.innerText);
      else if(chat.querySelector("span") === null && notif.querySelector("div > span") === null) window.close();
    }, 1500);
  }
}).observe(document, {
  childList: true,
  subtree: true
});
