// ==UserScript==
// @name    [Reddit] Post & Notification Tracker
// @author  Aurange
// @version 1.3
// @match   https://www.reddit.com/new/
// @grant   window.close
// ==/UserScript==

"use strict";

new MutationObserver(function(mutationList, observer){
  let post = document.querySelector("shreddit-feed article");

  if(!!post){
    observer.disconnect();

    post = post.getAttribute("aria-label");

    setTimeout(function(){
      if(!localStorage.getItem("post") || localStorage.getItem("post") !== post) localStorage.setItem("post", post);
      else if(Number(document.querySelector("#header-action-item-chat-button-badge").getAttribute("initial-count")) === 0 && !document.querySelector("[data-id='notification-count-element']")) window.close();
    }, 1500);
  }
}).observe(document, {
  childList: true,
  subtree: true
});
