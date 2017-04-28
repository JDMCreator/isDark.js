this.isDark = function(color) {
	color = color.trim()
		.toLowerCase();
	var length = color.length,
		firstChar = color[0], _255=255;
	if (/(^#?[a-f\d]+$)|\d/.test(color)){
		if (firstChar == "h") {
			var h = /(\d+)[,\s]+(\d+)%[,\s]+(\d+)%/.exec(color),
				s = h[2] / 100,
				l = h[3] / 100;

			h = h[1] / 100;
			function hue2rgb(p, q, t) {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			}

			var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
				p = 2 * l - q;


			color = [hue2rgb(p, q, h + 1 / 3) * _255,hue2rgb(p, q, h) * _255, hue2rgb(p, q, h - 1 / 3) * _255].map(Math.round);
			
		}
		else if (firstChar == "r") {
			//rgb or rgba
			color = /\(([^\)]+)/.exec(color.replace(/([\d.]+)%/g,
				function(a, b) {
					return b * 2.55
				}))[1].split(/[,\s]+/);
		} else {
			color = [(z = +("0x"+color.replace("#", "")
					.replace(length < 6 && /./g, '$&$&').substring(0,6)) >> 16 & _255,
				z >> 8 & _255,
				z & _255
			];
		}
		return color[0] * 299 + color[1] * 587 + color[2] * 114 < 128000
	}
	// This should only get keynames for colors, because we did HSL, HSLA, RGB, RGBA and HEX before

	/* What is this ? It is the most compressed way I found to deal with colors keynames. I found this throught computer
	   and manual calculations. Each dark color is assigned a unique 2-ASCII-characters code generated from its name. */
	return !("bIb=b*bRcLcRdYdad{dcdRdgdHd*dndKdofifGf(gSi{iimum>mom;m\\mnnmoMoWo{p,r.r?rUscs#s8sUsWs{t*th".indexOf(
		firstChar + String.fromCharCode((color.charCodeAt(628 % length) * length) % 91 + 33)
	) % 2)
}