// ==UserScript==
// @name    [Reddit] Post & Notification Checker
// @author  Aurange
// @version 1.0
// @match   https://www.reddit.com/new/
// @grant   window.close
// ==/UserScript==

"use strict";

new MutationObserver(function(mutationList, observer){
  let post = document.querySelector("[data-scroller-first] h3"),
      chat = document.querySelector("a[href='https://www.reddit.com/chat']"),
      notif = document.querySelector("[aria-label='Open notifications inbox'] > div");

  if(post !== null && chat !== null && notif !== null){
    observer.disconnect();

    setTimeout(function(){
      if(localStorage.getItem("post") === null) localStorage.setItem("post", post.innerText);
      else if(localStorage.getItem("post") !== post.innerText){
        localStorage.setItem("post", post.innerText);
      }
      else if(chat.querySelector("span") === null && notif.querySelector("div > span") === null) window.close();
    }, 1500);
  }
}).observe(document, {
  childList: true,
  subtree: true
});
