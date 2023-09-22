// ==UserScript==
// @name         哔哩清洁器
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       SunRt233
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
	const CleanBiliBili = {
		targets: [
			".ad-report",
			".ad-report.video-card-ad-small",
			".ad-report.ad-floor-exp",
			"#right-bottom-banner",
			".pop-live-small-mode"
    	],
		clean: function() {
			CleanBiliBili.targets.forEach(e => {
				jQuery(e).style.display = 'none'
			})
		}
	}

	jQuery(document).ready(() => CleanBiliBili.clean())
	
    // Your code here...
})();
