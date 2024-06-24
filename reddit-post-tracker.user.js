// ==UserScript==
// @name    [Reddit] Post Tracker
// @author  Aurange
// @version 1.2
// @match   https://www.reddit.com/new/
// @grant   window.close
// ==/UserScript==

"use strict";

new MutationObserver(function(mutationList, observer){
  let post = document.querySelector("shreddit-feed article");

  if(!!post){
    observer.disconnect();

    post = post.getAttribute("aria-label");

    if(post !== localStorage.getItem("post")) localStorage.setItem("post", post);
    else window.close();
  }
}).observe(document, {
  childList: true,
  subtree: true
});
