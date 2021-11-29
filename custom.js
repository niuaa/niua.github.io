// Matomo
var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
	var u = 'https://zsq.im/matomo/';
	_paq.push(['setTrackerUrl', u + 'piwik.php']);
	_paq.push(['setSiteId', '2']);
	var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
	g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = u + 'piwik.js'; s.parentNode.insertBefore(g,s);
})();
// End Matomo Code

// Live2d
// 注意：live2d_path 参数应使用绝对路径
//const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/";
const live2d_path = "https://niuaa.github.io/niua.github.io/waifu/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 320) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			apiPath: "https://api.zsq.im/live2d", // https://live2d.fghrsh.net/api
			//cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"
		});
	});
}
// initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
// API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api
// 初始化看板娘会自动加载指定目录下的 waifu-tips.json

console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
// End Live2d Code

window.addEventListener('load', () => {
	console.log('%c牛啊の窝', 'text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15);\
font-size: 5em;');
	console.log(`\n%cMimi's Blog%cv${CONFIG.version}%c\n`, "padding: 8px; background: #cd3e45; font-weight: bold; font-size: large; color: white;", "padding: 8px; background: #ff5450; font-size: large; color: #eee;", '');
	console.log(`页面加载完毕消耗了${Math.round(performance.now() * 100) / 100}ms`);
});
