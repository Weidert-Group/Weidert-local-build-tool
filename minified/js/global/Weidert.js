$(document).on('click', '.body-container-wrapper a[href^="#"]', (function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 700);
}));

$(document).ready((function() {
  $(window).scroll((function() {
      $(this).scrollTop() > 0 ? $(".header-container-wrapper").addClass("custhdr") : $(".header-container-wrapper").removeClass("custhdr");
  }));
}));
$((function() {
    $(".custom-menu-primary").addClass("js-enabled");
    $(".custom-menu-primary .hs-menu-wrapper").before('<div class="mobile-trigger cta_border_button">MENU</div>');
    $(".custom-menu-primary .flyouts .hs-item-has-children > a").after(' <div class="child-trigger"><i></i></div>');
    $(".mobile-trigger").click((function() {
        $(this).next(".custom-menu-primary .hs-menu-wrapper").slideToggle(250);
        $("body").toggleClass("mobile-open");
        $(".child-trigger").removeClass("child-open");
        $(".hs-menu-children-wrapper").slideUp(250);
        return false;
    }));
    $(".child-trigger").click((function() {
        $(this).parent().siblings(".hs-item-has-children").find(".child-trigger").removeClass("child-open");
        $(this).parent().siblings(".hs-item-has-children").find(".hs-menu-children-wrapper").slideUp(250);
        $(this).next(".hs-menu-children-wrapper").slideToggle(250);
        $(this).next(".hs-menu-children-wrapper").children(".hs-item-has-children").find(".hs-menu-children-wrapper").slideUp(250);
        $(this).next(".hs-menu-children-wrapper").children(".hs-item-has-children").find(".child-trigger").removeClass("child-open");
        $(this).toggleClass("child-open");
        return false;
    }));
    var c = $(".accordion");
    c.find(".accordion_content").hide();
    c.find(".accordion_group.expanded .accordion_content").show();
    c.find(".accordion_header").click((function() {
        c.find(".accordion_header").not(this).parent(".accordion_group.expanded").removeClass("expanded").children(".accordion_content").stop(true, true).slideUp();
        if (!$(this).parent(".accordion_group").hasClass("expanded")) {
            $(this).parent(".accordion_group").addClass("expanded").children(".accordion_content").stop(true, true).slideDown();
        } else {
            $(this).parent(".accordion_group").removeClass("expanded").children(".accordion_content").stop(true, true).slideUp();
        }
    }));
    $("#well .close").click((function() {
        $(this).parent("#well").fadeOut();
    }));
    var d = $(".background-image").find("img").attr("src");
    $("#banner-background-image").css("background-image", "url(" + d + ")");
    var b = $(".offer-image").find("img").attr("src");
    $("#offer-background-image").css("background-image", "url(" + b + ")");
    var a = $(".back-to-top");
    a.hide();
    $(window).scroll((function() {
        if ($(this).scrollTop() > 50) {
            a.fadeIn();
        } else {
            a.fadeOut();
        }
    }));
    a.find("a").click((function(f) {
        f.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    }));
    $(window).scroll((function() {
        var g = $("body");
        var f = $(window).scrollTop();
        var e = $(".body-container .row-fluid-wrapper:nth-child(2)").offset();
        if (e && f > e.top) {
            g.addClass("small-header");
        } else {
            g.removeClass("small-header");
        }
    }));
    $(".tab-pane").not(".active").hide();
    $(".tabber-content .tab-pane").each((function(e, f) {
        $(f).attr("id", "tab-" + e);
    }));
    $(".tabber-tabs a").each((function(f, g) {
        $(g).attr("href", "#tab-" + f);
        var e = $(g).attr("href");
        $(this).click((function(h) {
            h.preventDefault();
            if (!$(this).parent().hasClass("active")) {
                $(this).parent().addClass("active").siblings().removeClass("active");
                $(e).fadeIn().siblings().hide();
            }
        }));
    }));
    window.onload = function() {
        $('.widget-type-blog_subscribe .input :input[type="email"]').attr("placeholder", "Email").attr("style", "text-align:center;");
    };
}));
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia || (window.matchMedia = (function() {
    var c = window.styleMedia || window.media;
    if (!c) {
        var b = document.createElement("style"),
            a = document.getElementsByTagName("script")[0],
            d = null;
        b.type = "text/css", b.id = "matchmediajs-test", a.parentNode.insertBefore(b, a), d = "getComputedStyle" in window && window.getComputedStyle(b, null) || b.currentStyle, c = {
            matchMedium: function(g) {
                var f = "@media " + g + "{ #matchmediajs-test { width: 1px; } }";
                return b.styleSheet ? b.styleSheet.cssText = f : b.textContent = f, "1px" === d.width;
            }
        };
    }
    return function(e) {
        return {
            matches: c.matchMedium(e || "all"),
            media: e || "all"
        };
    };
})());
(function() {
    var b, c, f, a = function(g, h) {
            return function() {
                return g.apply(h, arguments);
            };
        },
        d = [].indexOf || function(g) {
            for (var h = 0, i = this.length; i > h; h++) {
                if (h in this && this[h] === g) {
                    return h;
                }
            }
            return -1;
        };
    c = (function() {
        function e() {}
        return e.prototype.extend = function(h, j) {
            var k, g;
            for (k in j) {
                g = j[k], null == h[k] && (h[k] = g);
            }
            return h;
        }, e.prototype.isMobile = function(g) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(g);
        }, e;
    })(), f = this.WeakMap || this.MozWeakMap || (f = (function() {
        function e() {
            this.keys = [], this.values = [];
        }
        return e.prototype.get = function(h) {
            var k, m, g, l, j;
            for (j = this.keys, k = g = 0, l = j.length; l > g; k = ++g) {
                if (m = j[k], m === h) {
                    return this.values[k];
                }
            }
        }, e.prototype.set = function(h, l) {
            var p, g, m, k, j;
            for (j = this.keys, p = m = 0, k = j.length; k > m; p = ++m) {
                if (g = j[p], g === h) {
                    return void(this.values[p] = l);
                }
            }
            return this.keys.push(h), this.values.push(l);
        }, e;
    })()), b = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (b = (function() {
        function e() {
            window.console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."));
        }
        return e.notSupported = !0, e.prototype.observe = function() {}, e;
    })()), this.WOW = (function() {
        function e(g) {
            null == g && (g = {}), this.scrollCallback = a(this.scrollCallback, this), this.scrollHandler = a(this.scrollHandler, this), this.start = a(this.start, this), this.scrolled = !0, this.config = this.util().extend(g, this.defaults), this.animationNameCache = new f;
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        }, e.prototype.init = function() {
            var g;
            return this.element = window.document.documentElement, "interactive" === (g = document.readyState) || "complete" === g ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = [];
        }, e.prototype.start = function() {
            var h, k, g, j;
            if (this.stopped = !1, this.boxes = function() {
                    var m, q, l, p;
                    for (l = this.element.getElementsByClassName(this.config.boxClass), p = [], m = 0, q = l.length; q > m; m++) {
                        h = l[m], p.push(h);
                    }
                    return p;
                }.call(this), this.all = function() {
                    var m, q, l, p;
                    for (l = this.boxes, p = [], m = 0, q = l.length; q > m; m++) {
                        h = l[m], p.push(h);
                    }
                    return p;
                }.call(this), this.boxes.length) {
                if (this.disabled()) {
                    this.resetStyle();
                } else {
                    for (j = this.boxes, k = 0, g = j.length; g > k; k++) {
                        h = j[k], this.applyStyle(h, !0);
                    }
                    window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50);
                }
            }
            return this.config.live ? new b(function(i) {
                return function(q) {
                    var u, l, t, p, m;
                    for (m = [], t = 0, p = q.length; p > t; t++) {
                        l = q[t], m.push(function() {
                            var n, v, w, s;
                            for (w = l.addedNodes || [], s = [], n = 0, v = w.length; v > n; n++) {
                                u = w[n], s.push(this.doSync(u));
                            }
                            return s;
                        }.call(i));
                    }
                    return m;
                };
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0;
        }, e.prototype.stop = function() {
            return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0;
        }, e.prototype.sync = function() {
            return b.notSupported ? this.doSync(this.element) : void 0;
        }, e.prototype.doSync = function(h) {
            var l, m, g, k, j;
            if (!this.stopped) {
                if (null == h && (h = this.element), 1 !== h.nodeType) {
                    return;
                }
                for (h = h.parentNode || h, k = h.getElementsByClassName(this.config.boxClass), j = [], m = 0, g = k.length; g > m; m++) {
                    l = k[m], d.call(this.all, l) < 0 ? (this.applyStyle(l, !0), this.boxes.push(l), this.all.push(l), j.push(this.scrolled = !0)) : j.push(void 0);
                }
                return j;
            }
        }, e.prototype.show = function(g) {
            return this.applyStyle(g), g.className = "" + g.className + " " + this.config.animateClass;
        }, e.prototype.applyStyle = function(h, j) {
            var l, g, k;
            return g = h.getAttribute("data-wow-duration"), l = h.getAttribute("data-wow-delay"), k = h.getAttribute("data-wow-iteration"), this.animate(function(i) {
                return function() {
                    return i.customStyle(h, j, g, l, k);
                };
            }(this));
        }, e.prototype.animate = (function() {
            return "requestAnimationFrame" in window ? function(g) {
                return window.requestAnimationFrame(g);
            } : function(g) {
                return g();
            };
        })(), e.prototype.resetStyle = function() {
            var h, j, l, g, k;
            for (g = this.boxes, k = [], j = 0, l = g.length; l > j; j++) {
                h = g[j], k.push(h.setAttribute("style", "visibility: visible;"));
            }
            return k;
        }, e.prototype.customStyle = function(h, j, l, g, k) {
            return j && this.cacheAnimationName(h), h.style.visibility = j ? "hidden" : "visible", l && this.vendorSet(h.style, {
                animationDuration: l
            }), g && this.vendorSet(h.style, {
                animationDelay: g
            }), k && this.vendorSet(h.style, {
                animationIterationCount: k
            }), this.vendorSet(h.style, {
                animationName: j ? "none" : this.cachedAnimationName(h)
            }), h;
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(h, k) {
            var m, g, l, j;
            j = [];
            for (m in k) {
                g = k[m], h["" + m] = g, j.push(function() {
                    var p, o, n, i;
                    for (n = this.vendors, i = [], p = 0, o = n.length; o > p; p++) {
                        l = n[p], i.push(h["" + l + m.charAt(0).toUpperCase() + m.substr(1)] = g);
                    }
                    return i;
                }.call(this));
            }
            return j;
        }, e.prototype.vendorCSS = function(j, m) {
            var q, h, p, l, k, g;
            for (h = window.getComputedStyle(j), q = h.getPropertyCSSValue(m), g = this.vendors, l = 0, k = g.length; k > l; l++) {
                p = g[l], q = q || h.getPropertyCSSValue("-" + p + "-" + m);
            }
            return q;
        }, e.prototype.animationName = function(g) {
            var h;
            try {
                h = this.vendorCSS(g, "animation-name").cssText;
            } catch (i) {
                h = window.getComputedStyle(g).getPropertyValue("animation-name");
            }
            return "none" === h ? "" : h;
        }, e.prototype.cacheAnimationName = function(g) {
            return this.animationNameCache.set(g, this.animationName(g));
        }, e.prototype.cachedAnimationName = function(g) {
            return this.animationNameCache.get(g);
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0;
        }, e.prototype.scrollCallback = function() {
            var g;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var j, l, h, k;
                for (h = this.boxes, k = [], j = 0, l = h.length; l > j; j++) {
                    g = h[j], g && (this.isVisible(g) ? this.show(g) : k.push(g));
                }
                return k;
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
        }, e.prototype.offsetTop = function(g) {
            for (var h; void 0 === g.offsetTop;) {
                g = g.parentNode;
            }
            for (h = g.offsetTop; g = g.offsetParent;) {
                h += g.offsetTop;
            }
            return h;
        }, e.prototype.isVisible = function(h) {
            var k, m, g, l, j;
            return m = h.getAttribute("data-wow-offset") || this.config.offset, j = window.pageYOffset, l = j + Math.min(this.element.clientHeight, innerHeight) - m, g = this.offsetTop(h), k = g + h.clientHeight, l >= g && k >= j;
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new c;
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        }, e;
    })();
}).call(this);
if (window.matchMedia("(min-width: 480px)").matches) {
    new WOW().init();
}
var Shortcode = function(b, a) {
    if (!b) {
        return;
    }
    this.el = b;
    this.tags = a;
    this.matches = [];
    this.regex = "\\[{name}(.*?)?\\](?:([\\s\\S]*?)(\\[/{name}\\]))?";
    if (this.el.jquery) {
        this.el = this.el[0];
    }
    this.matchTags();
    this.convertMatchesToNodes();
    this.replaceNodes();
};
Shortcode.prototype.matchTags = function() {
    var k = this.el.outerHTML,
        q, d, b, h, v, c, p;
    for (var m in this.tags) {
        if (!this.tags.hasOwnProperty(m)) {
            return;
        }
        b = this.template(this.regex, {
            name: m
        });
        q = k.match(new RegExp(b, "g")) || [];
        for (var j = 0, g = q.length; j < g; j++) {
            d = q[j].match(new RegExp(b));
            h = d[3] ? "" : undefined;
            c = d[0].replace(/"/g, "\\$&").replace(/'/g, "\\$&");
            v = this.escapeTagRegExp(c);
            p = this.parseOptions(d[1]);
            if (d[2]) {
                h = d[2].trim();
                c = c.replace(h, "");
                v = v.replace(h, "([\\s\\S]*?)");
            }
            this.matches.push({
                name: m,
                tag: c,
                regex: v,
                options: p,
                contents: h
            });
        }
    }
};
Shortcode.prototype.convertMatchesToNodes = function() {
    var f = this.el.innerHTML,
        b, g, d;
    d = function(p, k, v, m, j, l, q) {
        if (k) {
            return p;
        } else {
            var h = document.createElement("span");
            h.setAttribute("data-sc-tag", this.tag);
            h.className = "sc-node sc-node-" + this.name;
            return h.outerHTML;
        }
    };
    for (var a = 0, c = this.matches.length; a < c; a++) {
        b = '((data-sc-tag=")|(<pre.*)|(<code.*))?';
        g = new RegExp(b + this.matches[a].regex, "g");
        f = f.replace(g, d.bind(this.matches[a]));
    }
    this.el.innerHTML = f;
};
Shortcode.prototype.replaceNodes = function() {
    var k = this,
        q, d, b, h, v, c, p, m = document.querySelectorAll(".sc-node");
    p = function(a) {
        if (a.jquery) {
            a = a[0];
        }
        a = k.parseCallbackResult(a);
        v.parentNode.replaceChild(a, v);
    };
    for (var j = 0, g = this.matches.length; j < g; j++) {
        d = this.matches[j];
        v = document.querySelector(".sc-node-" + d.name);
        if (v && v.getAttribute("data-sc-tag") === d.tag) {
            c = this.tags[d.name].bind(d);
            h = p.bind(d);
            b = c(h);
            if (b !== undefined) {
                h(b);
            }
        }
    }
};
Shortcode.prototype.parseCallbackResult = function(f) {
    var b, g, d;
    switch (typeof f) {
        case "function":
            f = document.createTextNode(f());
            break;
        case "string":
            b = document.createElement("div");
            g = document.createDocumentFragment();
            b.innerHTML = f;
            d = b.children;
            if (d.length) {
                for (var a = 0, c = d.length; a < c; a++) {
                    g.appendChild(d[a].cloneNode(true));
                }
                f = g;
            } else {
                f = document.createTextNode(f);
            }
            break;
        case "object":
            if (!f.nodeType) {
                f = JSON.stringify(f);
                f = document.createTextNode(f);
            }
            break;
        case "default":
            break;
    }
    return f;
};
Shortcode.prototype.parseOptions = function(d) {
    var b = {},
        f;
    if (!d) {
        return;
    }
    f = d.replace(/(\w+=)/g, "\n$1").split("\n");
    f.shift();
    for (var c = 0; c < f.length; c++) {
        var a = f[c].split("=");
        b[a[0]] = a[1].replace(/\'|\"/g, "").trim();
    }
    return b;
};
Shortcode.prototype.escapeTagRegExp = function(a) {
    return a.replace(/[\[\]\/]/g, "\\$&");
};
Shortcode.prototype.template = function(b, a) {
    for (var c in a) {
        b = b.replace(new RegExp("{" + c + "}", "g"), a[c]);
    }
    return b;
};
String.prototype.trim = String.prototype.trim || function() {
    return this.replace(/^\s+|\s+$/g, "");
};
if (window.jQuery) {
    var pluginName = "shortcode";
    $.fn[pluginName] = function(a) {
        this.each((function() {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new Shortcode(this, a));
            }
        }));
        return this;
    };
}
new Shortcode(document.querySelector("body"), {
    fa: function() {
        var d = this.options.icon;
        var b = this.options.color;
        var c = this.options.size;
        switch (c) {
            case "xxs":
                c = "14px";
                break;
            case "xs":
                c = "18px";
                break;
            case "s":
                c = "24px";
                break;
            case "m":
                c = "30px";
                break;
            case "l":
                c = "34px";
                break;
            case "xl":
                c = "44px";
                break;
            case "xxl":
                c = "64px";
                break;
        }
        var a = '<i class="fa fa-' + d + '" style="font-size: ' + c + "; color: " + b + ';"></i>';
        return a;
    },
    button: function() {
        var d = this.options.text;
        var c = this.options.icon;
        var b = this.options.url;
        var a = '<a class="button" href="' + b + '"><i class="fa fa-' + c + '"></i>' + d + "</a>";
        return a;
    }
});
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
;(function ( $, window, document, undefined ) {
    // Defaults
    var _buffer = null,
        _watch  = [],
        $window = $(window),
        Plugin  = function() { }
    ;

    $.expr[":"].hasClassStartingWith = function(el, i, selector) {
        var re = new RegExp("\\b" + selector[3]);
        return re.test(el.className);
    };

    Plugin.prototype = {
        globals: {
            pluginName: "fadeThis",
            bufferTime: 300,
        },
        defaults: {
            baseName:       "slide-",
            speed:          500,
            easing:         "swing",
            offset:         0,
            reverse:        true,
            distance:       50,
            scrolledIn:     null,
            scrolledOut:    null
        },
        init: function ( elem, options ) {
            this.addElements( elem, options );

            this._setEvent();
            this._checkVisibleElements();
        },
        addElements: function ( elem, options ) {
            var element         = elem === document.body    ? window    : elem,
                $element        = element === window        ? $("body") : $(element),
                base            = this,
                classBaseName   = (options && options.baseName) ? options.baseName : this.defaults.baseName
            ;
            
            if (!$element.is(":hasClassStartingWith('" + classBaseName + "')")) {

                $element.find(":hasClassStartingWith('" + classBaseName + "')").each((function() {
                    base._addElement($(this), options);
                }));
            } else {
                base._addElement($element, options);
            }

            return $element;
        },
        _addElement: function ($elem, options) {
            var metadata        = $elem.data( "plugin-options" ),
                localOptions    = $.extend({}, this.defaults, options, metadata),
                item = {
                    element:    $elem,
                    options:    localOptions,
                    invp:       false
                }
            ;

            _watch.push(item);

            this._prepareElement(item);

            return $elem;
        },
        _prepareElement: function (item) {
            var cssOptionsIn = {
                    opacity: 0,
                    visibility: "visible",
                    position: "relative"
                },
                direction = null
            ;

            if (item.element.hasClass(item.options.baseName + "right")) {
                direction = "left";
            } else if (item.element.hasClass(item.options.baseName + "left")) {
                direction = "right";
            } else if (item.element.hasClass(item.options.baseName + "top")) {
                direction = "bottom";
            } else if (item.element.hasClass(item.options.baseName + "bottom")) {
                direction = "top";
            } else {
                return false;
            }

            cssOptionsIn[direction] = item.options.distance;

            item.element.css(cssOptionsIn);
        },
        _setEvent: function () {
            var base = this;

            $window.on("scroll", (function(e) {
                if(!_buffer) {
                    _buffer = setTimeout((function(){
                        base._checkVisibleElements( e );
                        _buffer = null;
                    }), base.globals.bufferTime);
                }
            }));
        },
        _checkVisibleElements: function( e ) {
            var base = this;

            $.each(_watch, (function(key, item){
                if (base._isVisible(item)) {
                    if ( !item.invp ) {
                        item.invp = true;
                        base._triggerFading(item);
                        if ( item.options.scrolledIn ) {
                            item.options.scrolledIn.call( item.element, e );
                        }
                        item.element.trigger("fadethisscrolledin", e);
                    }
                } else if ( item.invp ) {
                    item.invp = false;
                    if ( item.options.reverse ) {
                        base._triggerFading(item, false);
                    }
                    if ( item.options.scrolledOut ) {
                        item.options.scrolledOut.call( item.element, e );
                    }
                    item.element.trigger("fadethisscrolledout", e);
                }
            }));
        },
        _isVisible: function(item) {
            var docViewTop      = $window.scrollTop() + item.options.offset,
                docViewBottom   = docViewTop + $window.height() - 2 * item.options.offset,
                elemTop         = item.element.offset().top,
                elemBottom      = elemTop + item.element.height()
            ;

            return ((elemBottom >= docViewTop) &&  (elemTop <= docViewBottom) &&  (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop));
        },
        _triggerFading:function (item, appear) {
            appear = typeof appear !== "undefined" ? appear : true;

            var stateAnimIn = {
                    opacity: 1
                },
                stateAnimOut = {
                    opacity: 0,
                },
                direction = null
            ;

            if (item.element.hasClass(item.options.baseName + "right")) {
                direction = "left";
            } else if (item.element.hasClass(item.options.baseName + "left")) {
                direction = "right";
            } else if (item.element.hasClass(item.options.baseName + "top")) {
                direction = "bottom";
            } else if (item.element.hasClass(item.options.baseName + "bottom")) {
                direction = "top";
            } else {
                return false;
            }

            stateAnimIn[direction]  = 0;
            stateAnimOut[direction] = item.options.distance;


            if (appear) {
                item.element.stop(true).animate(stateAnimIn, item.options.speed, item.options.easing);
            } else {
                item.element.stop(true).animate(stateAnimOut, item.options.speed, item.options.easing);
            }
        }
    };

    Plugin.defaults = Plugin.prototype.defaults;
    Plugin.globals  = Plugin.prototype.globals;

    window.Plugin = new Plugin();

    // Preventing against multiple instantiations for the same DOM element
    $.fn[ Plugin.globals.pluginName ] = function ( options ) {
        this.each((function() {
            if ( !$.data( window, "plugin_" + Plugin.globals.pluginName ) ) {
                $.data( window, "plugin_" + Plugin.globals.pluginName, "set" );
                $.data( this, "plugin_" + Plugin.globals.pluginName, window.Plugin.init( this, options ) );
            } else if ( !$.data( this, "plugin_" + Plugin.globals.pluginName )) {
                $.data( this, "plugin_" + Plugin.globals.pluginName, window.Plugin.addElements( this, options ) );
            }
        }));

        // chain jQuery functions
        return this;
    };

})( jQuery, window, document );

$( document ).ready((function() {
    // Lazy Loading
    (function() {
      if ("loading" in HTMLImageElement.prototype) {
          var lazyEls2 = $('[loading=lazy]');
          lazyEls2.each((function(){
              var src = $(this).data('src');
              var srcset = $(this).data('srcset');
              $(this).attr({
                  "src" : src,
                  "srcset" : srcset
              });
              $(this).addClass('loaded');
          }));
      } else {
          // Dynamically include a lazy loading library of your choice
          // Here including vanilla-lazyload
          var script = document.createElement("script");
          script.async = true;
          script.src =
              "https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.0.0/dist/lazyload.min.js";
          window.lazyLoadOptions = {
              elements_selector: "[loading=lazy]",
              //eventually more options here
          };
          document.body.appendChild(script);
      }
    }());
  }));
/*! lazysizes - v5.1.0 */ ! (function(a, b) {
    var c = b(a, a.document);
    a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c)
})("undefined" != typeof window ? window : {}, (function(a, b) {
    "use strict";
    var c, d;
    if (function() {
            var b, c = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            d = a.lazySizesConfig || a.lazysizesConfig || {};
            for (b in c) b in d || (d[b] = c[b])
        }(), !b || !b.getElementsByClassName) return {
        init: function() {},
        cfg: d,
        noSupport: !0
    };
    var e = b.documentElement,
        f = a.Date,
        g = a.HTMLPictureElement,
        h = "addEventListener",
        i = "getAttribute",
        j = a[h],
        k = a.setTimeout,
        l = a.requestAnimationFrame || k,
        m = a.requestIdleCallback,
        n = /^picture$/i,
        o = ["load", "error", "lazyincluded", "_lazyloaded"],
        p = {},
        q = Array.prototype.forEach,
        r = function(a, b) {
            return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b]
        },
        s = function(a, b) {
            r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b)
        },
        t = function(a, b) {
            var c;
            (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "))
        },
        u = function(a, b, c) {
            var d = c ? h : "removeEventListener";
            c && u(a, b), o.forEach((function(c) {
                a[d](c, b)
            }))
        },
        v = function(a, d, e, f, g) {
            var h = b.createEvent("Event");
            return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h
        },
        w = function(b, c) {
            var e;
            !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({
                reevaluate: !0,
                elements: [b]
            })) : c && c.src && (b.src = c.src)
        },
        x = function(a, b) {
            return (getComputedStyle(a, null) || {})[b]
        },
        y = function(a, b, c) {
            for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;) c = b.offsetWidth, b = b.parentNode;
            return c
        },
        z = (function() {
            var a, c, d = [],
                e = [],
                f = d,
                g = function() {
                    var b = f;
                    for (f = d.length ? e : d, a = !0, c = !1; b.length;) b.shift()();
                    a = !1
                },
                h = function(d, e) {
                    a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g)))
                };
            return h._lsFlush = g, h
        })(),
        A = function(a, b) {
            return b ? function() {
                z(a)
            } : function() {
                var b = this,
                    c = arguments;
                z((function() {
                    a.apply(b, c)
                }))
            }
        },
        B = function(a) {
            var b, c = 0,
                e = d.throttleDelay,
                g = d.ricTimeout,
                h = function() {
                    b = !1, c = f.now(), a()
                },
                i = m && g > 49 ? function() {
                    m(h, {
                        timeout: g
                    }), g !== d.ricTimeout && (g = d.ricTimeout)
                } : A((function() {
                    k(h)
                }), !0);
            return function(a) {
                var d;
                (a = !0 === a) && (g = 33), b || (b = !0, d = e - (f.now() - c), d < 0 && (d = 0), a || d < 9 ? i() : k(i, d))
            }
        },
        C = function(a) {
            var b, c, d = 99,
                e = function() {
                    b = null, a()
                },
                g = function() {
                    var a = f.now() - c;
                    a < d ? k(g, d - a) : (m || e)(e)
                };
            return function() {
                c = f.now(), b || (b = k(g, d))
            }
        },
        D = (function() {
            var g, l, m, o, p, y, D, F, G, H, I, J, K = /^img$/i,
                L = /^iframe$/i,
                M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent),
                N = 0,
                O = 0,
                P = 0,
                Q = -1,
                R = function(a) {
                    P--, (!a || P < 0 || !a.target) && (P = 0)
                },
                S = function(a) {
                    return null == J && (J = "hidden" == x(b.body, "visibility")), J || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility")
                },
                T = function(a, c) {
                    var d, f = a,
                        g = S(a);
                    for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;)(g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1);
                    return g
                },
                U = function() {
                    var a, f, h, j, k, m, n, p, q, r, s, t, u = c.elements;
                    if ((o = d.loadMode) && P < 8 && (a = u.length)) {
                        for (f = 0, Q++; f < a; f++)
                            if (u[f] && !u[f]._lazyRace)
                                if (!M || c.prematureUnveil && c.prematureUnveil(u[f])) aa(u[f]);
                                else if ((p = u[f][i]("data-expand")) && (m = 1 * p) || (m = O), r || (r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand, c._defEx = r, s = r * d.expFactor, t = d.hFac, J = null, O < s && P < 1 && Q > 2 && o > 2 && !b.hidden ? (O = s, Q = 0) : O = o > 1 && Q > 1 && P < 6 ? r : N), q !== m && (y = innerWidth + m * t, D = innerHeight + m, n = -1 * m, q = m), h = u[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * t && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || S(u[f])) && (l && P < 3 && !p && (o < 3 || Q < 4) || T(u[f], m))) {
                            if (aa(u[f]), k = !0, P > 9) break
                        } else !k && l && !j && P < 4 && Q < 4 && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]);
                        j && !k && aa(j)
                    }
                },
                V = B(U),
                W = function(a) {
                    var b = a.target;
                    if (b._lazyCache) return void delete b._lazyCache;
                    R(a), s(b, d.loadedClass), t(b, d.loadingClass), u(b, Y), v(b, "lazyloaded")
                },
                X = A(W),
                Y = function(a) {
                    X({
                        target: a.target
                    })
                },
                Z = function(a, b) {
                    try {
                        a.contentWindow.location.replace(b)
                    } catch (c) {
                        a.src = b
                    }
                },
                $ = function(a) {
                    var b, c = a[i](d.srcsetAttr);
                    (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c)
                },
                _ = A((function(a, b, c, e, f) {
                    var g, h, j, l, o, p;
                    (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = {
                        target: a
                    }, s(a, d.loadingClass), p && (clearTimeout(m), m = k(R, 2500), u(a, Y, !0)), l && q.call(j.getElementsByTagName("source"), $), h ? a.setAttribute("srcset", h) : g && !l && (L.test(a.nodeName) ? Z(a, g) : a.src = g), f && (h || l) && w(a, {
                        src: g
                    })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z((function() {
                        var b = a.complete && a.naturalWidth > 1;
                        p && !b || (b && s(a, "ls-is-cached"), W(o), a._lazyCache = !0, k((function() {
                            "_lazyCache" in a && delete a._lazyCache
                        }), 9)), "lazy" == a.loading && P--
                    }), !0)
                })),
                aa = function(a) {
                    if (!a._lazyRace) {
                        var b, c = K.test(a.nodeName),
                            e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
                            f = "auto" == e;
                        (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, P++, _(a, b, f, e, c))
                    }
                },
                ba = C((function() {
                    d.loadMode = 3, V()
                })),
                ca = function() {
                    3 == d.loadMode && (d.loadMode = 2), ba()
                },
                da = function() {
                    if (!l) {
                        if (f.now() - p < 999) return void k(da, 999);
                        l = !0, d.loadMode = 3, V(), j("scroll", ca, !0)
                    }
                };
            return {
                _: function() {
                    p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), j("scroll", V, !0), j("resize", V, !0), a.MutationObserver ? new MutationObserver(V).observe(e, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }) : (e[h]("DOMNodeInserted", V, !0), e[h]("DOMAttrModified", V, !0), setInterval(V, 999)), j("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(a) {
                        b[h](a, V, !0)
                    })), /d$|^c/.test(b.readyState) ? da() : (j("load", da), b[h]("DOMContentLoaded", V), k(da, 2e4)), c.elements.length ? (U(), z._lsFlush()) : V()
                },
                checkElems: V,
                unveil: aa,
                _aLSL: ca
            }
        })(),
        E = (function() {
            var a, c = A((function(a, b, c, d) {
                    var e, f, g;
                    if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || ""))
                        for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++) e[f].setAttribute("sizes", d);
                    c.detail.dataAttr || w(a, c.detail)
                })),
                e = function(a, b, d) {
                    var e, f = a.parentNode;
                    f && (d = y(a, f, d), e = v(a, "lazybeforesizes", {
                        width: d,
                        dataAttr: !!b
                    }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d))
                },
                f = function() {
                    var b, c = a.length;
                    if (c)
                        for (b = 0; b < c; b++) e(a[b])
                },
                g = C(f);
            return {
                _: function() {
                    a = b.getElementsByClassName(d.autosizesClass), j("resize", g)
                },
                checkElems: g,
                updateElem: e
            }
        })(),
        F = function() {
            !F.i && b.getElementsByClassName && (F.i = !0, E._(), D._())
        };
    return k((function() {
        d.init && F()
    })), c = {
        cfg: d,
        autoSizer: E,
        loader: D,
        init: F,
        uP: w,
        aC: s,
        rC: t,
        hC: r,
        fire: v,
        gW: y,
        rAF: z
    }
}));
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */ ;
window.matchMedia || (window.matchMedia = (function() {
    var c = window.styleMedia || window.media;
    if (!c) {
        var b = document.createElement("style"),
            a = document.getElementsByTagName("script")[0],
            d = null;
        b.type = "text/css", b.id = "matchmediajs-test", a.parentNode.insertBefore(b, a), d = "getComputedStyle" in window && window.getComputedStyle(b, null) || b.currentStyle, c = {
            matchMedium: function(g) {
                var f = "@media " + g + "{ #matchmediajs-test { width: 1px; } }";
                return b.styleSheet ? b.styleSheet.cssText = f : b.textContent = f, "1px" === d.width
            }
        }
    }
    return function(e) {
        return {
            matches: c.matchMedium(e || "all"),
            media: e || "all"
        }
    }
})()); /*! WOW - v1.0.0 - 2014-07-30* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function() {
    var b, c, f, a = function(g, h) {
            return function() {
                return g.apply(h, arguments)
            }
        },
        d = [].indexOf || function(g) {
            for (var h = 0, i = this.length; i > h; h++) {
                if (h in this && this[h] === g) {
                    return h
                }
            }
            return -1
        };
    c = (function() {
        function e() {}
        return e.prototype.extend = function(h, j) {
            var k, g;
            for (k in j) {
                g = j[k], null == h[k] && (h[k] = g)
            }
            return h
        }, e.prototype.isMobile = function(g) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(g)
        }, e
    })(), f = this.WeakMap || this.MozWeakMap || (f = (function() {
        function e() {
            this.keys = [], this.values = []
        }
        return e.prototype.get = function(h) {
            var k, m, g, l, j;
            for (j = this.keys, k = g = 0, l = j.length; l > g; k = ++g) {
                if (m = j[k], m === h) {
                    return this.values[k]
                }
            }
        }, e.prototype.set = function(h, l) {
            var p, g, m, k, j;
            for (j = this.keys, p = m = 0, k = j.length; k > m; p = ++m) {
                if (g = j[p], g === h) {
                    return void(this.values[p] = l)
                }
            }
            return this.keys.push(h), this.values.push(l)
        }, e
    })()), b = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (b = (function() {
        function e() {
            window.console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return e.notSupported = !0, e.prototype.observe = function() {}, e
    })()), this.WOW = (function() {
        function e(g) {
            null == g && (g = {}), this.scrollCallback = a(this.scrollCallback, this), this.scrollHandler = a(this.scrollHandler, this), this.start = a(this.start, this), this.scrolled = !0, this.config = this.util().extend(g, this.defaults), this.animationNameCache = new f
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        }, e.prototype.init = function() {
            var g;
            return this.element = window.document.documentElement, "interactive" === (g = document.readyState) || "complete" === g ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var h, k, g, j;
            if (this.stopped = !1, this.boxes = function() {
                    var m, q, l, p;
                    for (l = this.element.getElementsByClassName(this.config.boxClass), p = [], m = 0, q = l.length; q > m; m++) {
                        h = l[m], p.push(h)
                    }
                    return p
                }.call(this), this.all = function() {
                    var m, q, l, p;
                    for (l = this.boxes, p = [], m = 0, q = l.length; q > m; m++) {
                        h = l[m], p.push(h)
                    }
                    return p
                }.call(this), this.boxes.length) {
                if (this.disabled()) {
                    this.resetStyle()
                } else {
                    for (j = this.boxes, k = 0, g = j.length; g > k; k++) {
                        h = j[k], this.applyStyle(h, !0)
                    }
                    window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                }
            }
            return this.config.live ? new b(function(i) {
                return function(q) {
                    var u, l, t, p, m;
                    for (m = [], t = 0, p = q.length; p > t; t++) {
                        l = q[t], m.push(function() {
                            var n, v, w, s;
                            for (w = l.addedNodes || [], s = [], n = 0, v = w.length; v > n; n++) {
                                u = w[n], s.push(this.doSync(u))
                            }
                            return s
                        }.call(i))
                    }
                    return m
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function() {
            return b.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(h) {
            var l, m, g, k, j;
            if (!this.stopped) {
                if (null == h && (h = this.element), 1 !== h.nodeType) {
                    return
                }
                for (h = h.parentNode || h, k = h.getElementsByClassName(this.config.boxClass), j = [], m = 0, g = k.length; g > m; m++) {
                    l = k[m], d.call(this.all, l) < 0 ? (this.applyStyle(l, !0), this.boxes.push(l), this.all.push(l), j.push(this.scrolled = !0)) : j.push(void 0)
                }
                return j
            }
        }, e.prototype.show = function(g) {
            return this.applyStyle(g), g.className = "" + g.className + " " + this.config.animateClass
        }, e.prototype.applyStyle = function(h, j) {
            var l, g, k;
            return g = h.getAttribute("data-wow-duration"), l = h.getAttribute("data-wow-delay"), k = h.getAttribute("data-wow-iteration"), this.animate(function(i) {
                return function() {
                    return i.customStyle(h, j, g, l, k)
                }
            }(this))
        }, e.prototype.animate = (function() {
            return "requestAnimationFrame" in window ? function(g) {
                return window.requestAnimationFrame(g)
            } : function(g) {
                return g()
            }
        })(), e.prototype.resetStyle = function() {
            var h, j, l, g, k;
            for (g = this.boxes, k = [], j = 0, l = g.length; l > j; j++) {
                h = g[j], k.push(h.setAttribute("style", "visibility: visible;"))
            }
            return k
        }, e.prototype.customStyle = function(h, j, l, g, k) {
            return j && this.cacheAnimationName(h), h.style.visibility = j ? "hidden" : "visible", l && this.vendorSet(h.style, {
                animationDuration: l
            }), g && this.vendorSet(h.style, {
                animationDelay: g
            }), k && this.vendorSet(h.style, {
                animationIterationCount: k
            }), this.vendorSet(h.style, {
                animationName: j ? "none" : this.cachedAnimationName(h)
            }), h
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(h, k) {
            var m, g, l, j;
            j = [];
            for (m in k) {
                g = k[m], h["" + m] = g, j.push(function() {
                    var p, o, n, i;
                    for (n = this.vendors, i = [], p = 0, o = n.length; o > p; p++) {
                        l = n[p], i.push(h["" + l + m.charAt(0).toUpperCase() + m.substr(1)] = g)
                    }
                    return i
                }.call(this))
            }
            return j
        }, e.prototype.vendorCSS = function(j, m) {
            var q, h, p, l, k, g;
            for (h = window.getComputedStyle(j), q = h.getPropertyCSSValue(m), g = this.vendors, l = 0, k = g.length; k > l; l++) {
                p = g[l], q = q || h.getPropertyCSSValue("-" + p + "-" + m)
            }
            return q
        }, e.prototype.animationName = function(g) {
            var h;
            try {
                h = this.vendorCSS(g, "animation-name").cssText
            } catch (i) {
                h = window.getComputedStyle(g).getPropertyValue("animation-name")
            }
            return "none" === h ? "" : h
        }, e.prototype.cacheAnimationName = function(g) {
            return this.animationNameCache.set(g, this.animationName(g))
        }, e.prototype.cachedAnimationName = function(g) {
            return this.animationNameCache.get(g)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var g;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var j, l, h, k;
                for (h = this.boxes, k = [], j = 0, l = h.length; l > j; j++) {
                    g = h[j], g && (this.isVisible(g) ? this.show(g) : k.push(g))
                }
                return k
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(g) {
            for (var h; void 0 === g.offsetTop;) {
                g = g.parentNode
            }
            for (h = g.offsetTop; g = g.offsetParent;) {
                h += g.offsetTop
            }
            return h
        }, e.prototype.isVisible = function(h) {
            var k, m, g, l, j;
            return m = h.getAttribute("data-wow-offset") || this.config.offset, j = window.pageYOffset, l = j + Math.min(this.element.clientHeight, innerHeight) - m, g = this.offsetTop(h), k = g + h.clientHeight, l >= g && k >= j
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new c
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    })()
}).call(this);
if (window.matchMedia("(min-width: 480px)").matches) {
    new WOW().init()
}
var Shortcode = function(b, a) {
    if (!b) {
        return
    }
    this.el = b;
    this.tags = a;
    this.matches = [];
    this.regex = "\\[{name}(.*?)?\\](?:([\\s\\S]*?)(\\[/{name}\\]))?";
    if (this.el.jquery) {
        this.el = this.el[0]
    }
    this.matchTags();
    this.convertMatchesToNodes();
    this.replaceNodes()
};
Shortcode.prototype.matchTags = function() {
    var k = this.el.outerHTML,
        q, d, b, h, v, c, p;
    for (var m in this.tags) {
        if (!this.tags.hasOwnProperty(m)) {
            return
        }
        b = this.template(this.regex, {
            name: m
        });
        q = k.match(new RegExp(b, "g")) || [];
        for (var j = 0, g = q.length; j < g; j++) {
            d = q[j].match(new RegExp(b));
            h = d[3] ? "" : undefined;
            c = d[0].replace(/"/g, "\\$&").replace(/'/g, "\\$&");
            v = this.escapeTagRegExp(c);
            p = this.parseOptions(d[1]);
            if (d[2]) {
                h = d[2].trim();
                c = c.replace(h, "");
                v = v.replace(h, "([\\s\\S]*?)")
            }
            this.matches.push({
                name: m,
                tag: c,
                regex: v,
                options: p,
                contents: h
            })
        }
    }
};
Shortcode.prototype.convertMatchesToNodes = function() {
    var f = this.el.innerHTML,
        b, g, d;
    d = function(p, k, v, m, j, l, q) {
        if (k) {
            return p
        } else {
            var h = document.createElement("span");
            h.setAttribute("data-sc-tag", this.tag);
            h.className = "sc-node sc-node-" + this.name;
            return h.outerHTML
        }
    };
    for (var a = 0, c = this.matches.length; a < c; a++) {
        b = '((data-sc-tag=")|(<pre.*)|(<code.*))?';
        g = new RegExp(b + this.matches[a].regex, "g");
        f = f.replace(g, d.bind(this.matches[a]))
    }
    this.el.innerHTML = f
};
Shortcode.prototype.replaceNodes = function() {
    var k = this,
        q, d, b, h, v, c, p, m = document.querySelectorAll(".sc-node");
    p = function(a) {
        if (a.jquery) {
            a = a[0]
        }
        a = k.parseCallbackResult(a);
        v.parentNode.replaceChild(a, v)
    };
    for (var j = 0, g = this.matches.length; j < g; j++) {
        d = this.matches[j];
        v = document.querySelector(".sc-node-" + d.name);
        if (v && v.getAttribute("data-sc-tag") === d.tag) {
            c = this.tags[d.name].bind(d);
            h = p.bind(d);
            b = c(h);
            if (b !== undefined) {
                h(b)
            }
        }
    }
};
Shortcode.prototype.parseCallbackResult = function(f) {
    var b, g, d;
    switch (typeof f) {
        case "function":
            f = document.createTextNode(f());
            break;
        case "string":
            b = document.createElement("div");
            g = document.createDocumentFragment();
            b.innerHTML = f;
            d = b.children;
            if (d.length) {
                for (var a = 0, c = d.length; a < c; a++) {
                    g.appendChild(d[a].cloneNode(true))
                }
                f = g
            } else {
                f = document.createTextNode(f)
            }
            break;
        case "object":
            if (!f.nodeType) {
                f = JSON.stringify(f);
                f = document.createTextNode(f)
            }
            break;
        case "default":
            break
    }
    return f
};
Shortcode.prototype.parseOptions = function(d) {
    var b = {},
        f;
    if (!d) {
        return
    }
    f = d.replace(/(\w+=)/g, "\n$1").split("\n");
    f.shift();
    for (var c = 0; c < f.length; c++) {
        var a = f[c].split("=");
        b[a[0]] = a[1].replace(/\'|\"/g, "").trim()
    }
    return b
};
Shortcode.prototype.escapeTagRegExp = function(a) {
    return a.replace(/[\[\]\/]/g, "\\$&")
};
Shortcode.prototype.template = function(b, a) {
    for (var c in a) {
        b = b.replace(new RegExp("{" + c + "}", "g"), a[c])
    }
    return b
};
String.prototype.trim = String.prototype.trim || function() {
    return this.replace(/^\s+|\s+$/g, "")
};
if (window.jQuery) {
    var pluginName = "shortcode";
    $.fn[pluginName] = function(a) {
        this.each((function() {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new Shortcode(this, a))
            }
        }));
        return this
    }
}
new Shortcode(document.querySelector("body"), {
    fa: function() {
        var d = this.options.icon;
        var b = this.options.color;
        var c = this.options.size;
        switch (c) {
            case "xxs":
                c = "14px";
                break;
            case "xs":
                c = "18px";
                break;
            case "s":
                c = "24px";
                break;
            case "m":
                c = "30px";
                break;
            case "l":
                c = "34px";
                break;
            case "xl":
                c = "44px";
                break;
            case "xxl":
                c = "64px";
                break
        }
        var a = '<i class="fa fa-' + d + '" style="font-size: ' + c + "; color: " + b + ';"></i>';
        return a
    },
    button: function() {
        var d = this.options.text;
        var c = this.options.icon;
        var b = this.options.url;
        var a = '<a class="button" href="' + b + '"><i class="fa fa-' + c + '"></i>' + d + "</a>";
        return a
    }
});