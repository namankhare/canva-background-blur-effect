(function () {
	function k(a, b) {
		this.i = (this.g = "PUBLIC" !== a) ? a : "*";
		this.j = b
	}

	var x = new r;

	function r() {}
	r.prototype.setInterval = function (a, b) {
		return window.setInterval(a, b)
	};
	r.prototype.clearInterval = function (a) {
		window.clearInterval(a)
	};
	r.prototype.setTimeout = function (a, b) {
		return window.setTimeout(a, b)
	};
	r.prototype.clearTimeout = function (a) {
		window.clearTimeout(a)
	};
	r.prototype.requestAnimationFrame = function (a) {
		return window.requestAnimationFrame(a)
	};
	r.prototype.cancelAnimationFrame = function (a) {
		window.cancelAnimationFrame(a)
	};

	function y() {
		var a = $("body");

		function b() {
			a.mousemove(function (c) {
				p = c.clientX;
				t = c.clientY;
				w = Date.now();
				u || n()
			});
			$(window).on("blur mouseout", function () {
				t = p = null
			}).on("resize", function () {
				d && d.parentNode && d.parentNode.removeChild(d);
				q()
			});
			q()
		}

		function q() {
			var c, b;
			h();
			c = a.width();
			b = a.height();
			d = document.createElement("canvas");
			d.className = "loginFun";
			d.width = c;
			d.height = b;
			a.append(d);
			l = document.createElement("canvas");
			l.width = c;
			l.height = b;
			if (d.getContext && d.getContext("2d") && (m = d.getContext("2d"), f = l.getContext("2d"),
					f.lineCap = "round", f.shadowColor = "#000000", f.shadowBlur = -1 < navigator.userAgent.indexOf("Firefox") ? 0 : 30, !g)) {
				g = new Image;
				if (!a.css("background-image")) throw Error("element must have a background image");
				$(g).one("load", n);
				$(g).attr("src", "img/original.jpg")
			}
		}

		function h() {
			v = [];
			$(".js-blurEffect--skip").each(function (c, a) {
				var d;
				d = $(a);
				d.is(":visible") && (c = d.position(), a = d.outerWidth(), d = d.outerHeight(), v.push({
					top: c.top,
					left: c.left,
					width: a,
					height: d
				}))
			})
		}

		function n() {
			var c, b = Date.now();
			c = a.scrollTop();
			u = b > w + 500 ? !1 : !0;
			p && u && e.unshift({
				time: b,
				x: p,
				y: t + c
			});
			for (c = 0; c < e.length;) 1E3 < b - e[c].time ? e.length = c : c++;
			0 < e.length && x.requestAnimationFrame(n);
			f.clearRect(0, 0, l.width, l.height);
			for (c = 1; c < e.length; c++) {
				var h = Math.sqrt(Math.pow(e[c].x - e[c - 1].x, 2) + Math.pow(e[c].y - e[c - 1].y, 2));
				f.strokeStyle = "rgba(0,0,0," + Math.max(1 - (b - e[c].time) / 1E3, 0) + ")";
				f.lineWidth = 25 + 75 * Math.max(1 - h / 50, 0);
				f.beginPath();
				f.moveTo(e[c - 1].x, e[c - 1].y);
				f.lineTo(e[c].x, e[c].y);
				f.stroke()
			}
			b = d.width;
			c = d.width / g.naturalWidth *
				g.naturalHeight;
			c < d.height && (c = d.height, b = d.height / g.naturalHeight * g.naturalWidth);
			m.drawImage(g, 0, 0, b, c);
			m.globalCompositeOperation = "destination-in";
			m.drawImage(l, 0, 0);
			m.globalCompositeOperation = "source-over";
			v.forEach(function (c) {
				m.clearRect(c.left, c.top, c.width, c.height)
			})
		}
		var d, l, m, f, g, p = null,
			t = null,
			e = [],
			w = 0,
			u = !0,
			v = [];
		"createTouch" in document ||  $(b)
	};
	$(function () {
		y()
	});


})();

