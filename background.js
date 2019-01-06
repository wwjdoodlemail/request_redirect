"use strict";

const log=console.log;
//for Chrome 
const browser=chrome;

const boot_cdn = "https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js";
const google = "https://ajax.googleapis.com";

function my_redirect(details) {

    const url = details.url;
    if(!url.includes(google)){
        return;
    }

    if(!url.includes('jquery')){
        return;
    }

   return {redirectUrl: boot_cdn};
}

const main = function() {
    browser.webRequest.onBeforeRequest.addListener(
      my_redirect,
      {urls: ["<all_urls>"], types:["script"]},
      ['blocking']
    );
}

main();
