var act = {};
act.debounce = function(e, a) {
    var t = null;
    return function() {
        var s = this,
            i = arguments;
        clearTimeout(t), t = setTimeout(function() {
            e.apply(s, i)
        }, a)
    }
}, act.throttle = function(e, a, t) {
    a || (a = 250);
    var s, i;
    return function() {
        var n = t || this,
            o = +new Date,
            r = arguments;
        s && o < s + a ? (clearTimeout(i), i = setTimeout(function() {
            s = o, e.apply(n, r)
        }, a)) : (s = o, e.apply(n, r))
    }
}, act.hex = function(e) {
    return e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i), e && 4 === e.length ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2) : ""
}, jQuery.fn.extend({
    eqh: function() {
        function e(a, t) {
            var s = 0,
                i = 0;
            a.css("min-height", a.outerHeight()), ResizeSensor.detach(t), t.addClass("no-transition").css("min-height", "").each(function(e) {
                var a = $(this).outerHeight();
                a > s && (s = a, i = e)
            }), t.not(t.eq(i)).css("min-height", s), new ResizeSensor(t, act.debounce(function() {
                e(a, t)
            }, 10)), t.removeClass("no-transition"), a.css("min-height", "")
        }
        this.each(function() {
            var a = $(this);
            if (a.is(".eqh-container")) {
                var t = a.find(".eqh-item:not(.widget-type-custom_widget:has(.cm-col)), .eqh-item.widget-type-custom_widget .cm-col").filter(function(e) {
                    return $(this).closest(".eqh-container").is(a)
                });
                t && (e(a, t), new ResizeSensor(t, act.debounce(function() {
                    e(a, t)
                }, 10)))
            }
        })
    }
}), jQuery(function(e) {
    function a(e) {
        var a = e,
            t = a.closest(".sticky-parent"),
            s = a.is('[class*="offset-"]') ? parseInt(a.attr("class").match(/offset-\d+/)[0].replace("offset-", "")) : 0,
            n = a.parent(".sticky-item-wrapper"),
            o = n.prev(".sticky-item-ref"),
            r = i.scrollTop(),
            d = i.width(),
            h = a.outerHeight(!0),
            p = t.outerHeight(),
            f = parseInt(t.css("padding-bottom")) + parseInt(t.css("border-bottom-width")),
            u = t.offset().top,
            m = o.offset().top,
            v = o.offset().left,
            g = o.width();
        d <= l && a.hasClass("md-cancel") || d <= c && !a.hasClass("no-cancel") ? (n.removeAttr("style"), o.css("height", 0)) : r >= m - s ? r < u + p - f - h - s ? (n.css({
            position: "fixed",
            left: v,
            top: s,
            bottom: "auto",
            width: g
        }).removeClass("flat"), o.css("height", h)) : (n.css({
            position: "absolute",
            left: v,
            top: "auto",
            bottom: f,
            width: g
        }).addClass("flat"), o.css("height", h)) : (n.removeAttr("style").removeClass("flat"), o.css("height", 0))
    }

    function t() {
        var a = i.scrollTop();
        k.each(function() {
            var t = e(this),
                s = t.offset().top,
                i = t.attr("id"),
                n = x[i].closest("li");
            if (a >= s - q[i]) return n.hasClass("active") || (y.removeClass("active"), n.addClass("active")), !1;
            n.removeClass("active")
        })
    }
    e(document);
    var s, i = e(window),
        n = e("html, body"),
        o = e("html"),
        r = e("body");
    window.location.hash && (s = window.location.hash.replace(/^.*?(#|$)/, ""));
    var l, c, d, h;
    r.prepend('<div class="media-md"></div><div class="media-sm"></div><div class="media-xs"></div><div class="theme-color bg-theme"></div>'), e(".media-md").eq(0).each(function() {
        var a = e(this),
            t = a.width();
        r.attr("data-media-md", t), l = t, a.remove()
    }), e(".media-sm").eq(0).each(function() {
        var a = e(this),
            t = a.width();
        r.attr("data-media-sm", t), c = t, a.remove()
    }), e(".media-xs").eq(0).each(function() {
        var a = e(this),
            t = a.width();
        r.attr("data-media-xs", t), d = t, a.remove()
    }), e(".theme-color").eq(0).each(function() {
        var a = e(this),
            t = act.hex(a.css("background-color"));
        r.attr("data-theme-color", t), h = t, a.remove()
    }), r.fitVids(), e(".fluid-width-video-wrapper").parent(".hs-responsive-embed").removeClass("hs-responsive-embed hs-responsive-embed-youtube hs-responsive-embed-vimeo"), e(".cta_button.button").initialize(function() {
        e(this).removeAttr("title")
    }), e(".eqh-container").eqh(), e(".menu-bar li.hs-item-has-children").each(function() {
        var a = e(this);
        0 == a.find("ul").length && a.removeClass("hs-item-has-children")
    }), e(".accordion-menu .hs-menu-wrapper li.hs-item-has-children ul").each(function() {
        e(this).closest("li").append('<span class="expand-level"></span>')
    }), e('.accordion-menu .expand-level, .accordion-menu li:has(.expand-level) > a[href="javascript:;"]').on("click", function() {
        var a = e(this).closest("li");
        a.closest("li");
        a.hasClass("expanded") ? (a.removeClass("expanded").find("ul").addClass("hidden").find(".expanded").removeClass("expanded"), a.siblings().removeClass("expanded").find("ul").addClass("hidden").find("li.expanded").removeClass("expanded")) : (a.addClass("expanded").find("> ul").removeClass("hidden"), a.siblings().removeClass("expanded").find("ul").addClass("hidden").find("li.expanded").removeClass("expanded"))
    }), e("[data-reveal]").each(function() {
        var a = e(this),
            t = e("#" + a.attr("data-reveal"));
        a.on("click", function() {
            return a.toggleClass("on"), t.toggleClass("on"), !1
        })
    }), e("[data-slide-menu]").each(function() {
        var a = e(this),
            t = a.attr("data-slide-menu"),
            s = e('[data-slide-menu="' + t + '"]').not(this),
            i = e("#" + t),
            n = i.closest(".row-fluid-wrapper").next(".row-fluid-wrapper").find(".slide-menu-overlay");
        a.on("click", function() {
            a.toggleClass("on"), i.toggleClass("on"), s.toggleClass("on"), n.toggleClass("on"), i.hasClass("on") ? r.addClass("noscroll") : r.removeClass("noscroll"), e("[data-slide-menu]").not(this).not(s).removeClass("on"), e(".slide-menu").not(i).removeClass("on"), e(".slide-menu-overlay").not(n).removeClass("on")
        }), n.on("click", function() {
            a.removeClass("on"), i.removeClass("on"), s.removeClass("on"), n.removeClass("on"), r.removeClass("noscroll")
        })
    }), e('.slide-menu a[href^="#"], .slide-menu a[href^="/#"]').on("click", function() {
        e("[data-slide-menu], .slide-menu, .slide-menu-overlay").removeClass("on"), r.removeClass("noscroll")
    }), e(".sticky-header").each(function() {
        var a = e(this),
            t = a.closest(".sticky-header-options"),
            s = e(t.attr("data-linked-to"));
        s.length > 0 ? i.on("load resize scroll", act.throttle(function() {
            i.scrollTop() > s.height() + s.offset().top ? (a.addClass("on"), s.addClass("off")) : (a.removeClass("on"), s.removeClass("off"))
        }, 10)) : a.addClass("on")
    }), e(".hs-item-has-children:not(:has(ul))").removeClass("hs-item-has-children"), e(".map-section").append('<div class="map-overlay" />'), e(".map-overlay").on("click", function() {
        e(this).css("pointer-events", "none")
    }), e('[class*="scroll-next-"]').each(function() {
        var a = e(this);
        a.closest(".row-fluid-wrapper").next(".row-fluid-wrapper").find(".content-section, .hero-slider, .hero-banner").length > 0 && (a.hasClass("scroll-offset-sticky-header") ? a.append('<a class="sn-arrow sn-offset-sticky-header" href="#"><i class="fa fa-chevron-down"></i></a>') : a.append('<a class="sn-arrow" href="#"><i class="fa fa-chevron-down"></i></a>'))
    }), e(".sn-arrow").on("click", function() {
        var a = e(this).closest(".row-fluid-wrapper").next(".row-fluid-wrapper").find(".content-section, .hero-slider, .hero-banner").offset().top,
            t = 0;
        return e(this).hasClass("sn-offset-sticky-header") && e(".sticky-header").length > 0 && (t = e(".sticky-header").height() - 1), n.animate({
            scrollTop: a - t
        }, 300, "easeOutExpo"), !1
    }), r.prepend('<a name="top"></a>').append('<span class="scroll-to-top"><i class="fa fa-chevron-up"></i></span>');
    var p = e(".scroll-to-top");
    p.on("click", function() {
        n.animate({
            scrollTop: 0
        }, 300, "easeOutExpo")
    }), i.on("load scroll", act.throttle(function() {
        i.scrollTop() > 95 ? p.addClass("active") : p.removeClass("active")
    }, 250)), 0 == e("html.lt-ie9").length && e("a[href*=\\#]:not([href=\\#], .popup-content, .tabs-nav a, .advanced-gallery-link)").on("click", function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = e(this.hash);
            if ((a = a.length ? a : e('[name="' + this.hash.slice(1) + '"]')).length) {
                var t = a.offset().top,
                    s = 0;
                return a.is('[class*="offset-"]') && (s = parseInt(a.attr("class").match(/offset-\d+/)[0].replace("offset-", ""))), "top" == a.attr("name") && (t = 0), n.animate({
                    scrollTop: t - s
                }, 300, "easeOutExpo"), !1
            }
        }
    }), e(".accordion-header").on("click", function() {
        var a = e(this).closest(".accordion-item"),
            t = a.attr("data-accordion-group");
        a.toggleClass("collapsed"), "" != t && e('.accordion-item[data-accordion-group="' + t + '"]').not(e(this).closest(".accordion-item")).addClass("collapsed")
    });
    var f = e("body").find('.accordion-item[data-accordion-anchor="' + s + '"]').first();
    f.length > 0 && (f.removeClass("collapsed"), e('.accordion-item[data-accordion-group="' + f.attr("data-accordion-group") + '"]').not(f.closest(".accordion-item")).addClass("collapsed"), n.animate({
        scrollTop: f.offset().top - 100
    }, 300, "easeOutExpo")), e(".tabs-container").each(function() {
        var a = e(this);
        if (a.find('.tabs-nav a[href^="#"]').each(function() {
                var t = e(this),
                    s = t.attr("href"),
                    i = a.find(".tab-group" + s).eq(0);
                i.length > 0 && (a.is(".responsive") || a.is(".md-responsive") ? (t.addClass("tab-link").clone().addClass("mirror").prependTo(i.closest(".row-fluid-wrapper")), t.closest("li").addClass("duplicate")) : t.addClass("tab-link"))
            }), 0 == a.find(".tab-group.active").length) {
            var t = a.find(".tab-group").eq(0);
            t.addClass("active"), e('.tab-link[href="#' + t.attr("id") + '"]').addClass("active")
        } else e('.tab-link[href="#' + a.find(".tab-group.active").eq(0).attr("id") + '"]').addClass("active");
        a.find(".tab-link").on("click", function() {
            var t = e(this),
                s = a.find(".tab-group" + t.attr("href"));
            if (s.length > 0) {
                if (a.find(".tab-group").removeClass("active"), a.find(".tab-link").removeClass("active"), s.addClass("active"), a.find('.tab-link[href="' + t.attr("href") + '"]').addClass("active"), t.hasClass("mirror")) {
                    var o = t.offset().top;
                    n.animate({
                        scrollTop: o - 50
                    }, 300, "easeOutExpo")
                }
                i.trigger("scroll"), i.trigger("tabChanged"), s.find(".slider-container").nboslick("refresh"), s.is(".eqh-container") && s.eqh(), s.find(".eqh-container").eqh(), e.force_appear()
            }
            return !1
        })
    });
    var u = e("body").find(".tab-group#" + s).first(),
        m = u.closest(".tabs-container");
    if (u.length > 0) {
        m.find(".tab-group").removeClass("active"), u.addClass("active"), m.find(".tab-link").removeClass("active"), m.find(".tab-link[href=#" + s + "]").addClass("active");
        var v = u.offset().top,
            g = e(".sticky-header").length > 0 ? e(".sticky-header").height() : 0;
        n.animate({
            scrollTop: v - g - 30
        }, 300, "easeOutExpo")
    }
    e(".read-more-button-expand").on("click", function() {
        return e(this).closest(".read-more").removeClass("collapsed"), !1
    }), e(".read-more-button-collapse").on("click", function() {
        var a = e(this).closest(".read-more"),
            t = a.offset().top;
        return a.addClass("collapsed"), n.animate({
            scrollTop: t - 100
        }, 300, "easeOutExpo"), !1
    }), e(".content-section .bg-img").each(function() {
        var a = e(this),
            t = a.closest(".content-section"),
            s = a.find("img").eq(0);
        if (s.length > 0) {
            var i = s.attr("src"),
                n = s.attr("alt");
            a.hasClass("bg-parallax") ? (t.attr("data-parallax", "scroll").attr("data-image-src", i).attr("data-image-alt", n || "").parallax({
                iosFix: !0,
                bleed: 200
            }), new ResizeSensor(t, function() {
                t.trigger("resize.px.parallax")
            })) : t.css("background-image", "url('" + i + "')").addClass("bg-img-defined")
        }
    }), e(".hero-banner .video-url, .content-section .video-url").each(function() {
        var a = e(this),
            t = a.closest(".hero-banner, .content-section"),
            s = a.text().trim();
        "" != s && t.addClass("video-bg").prepend('<div class="video-object"><video autoplay playsinline muted loop src="' + s + '"></video></div>')
    });
    var C = e(".fullscreen-search"),
        b = C.find(".hs-input");
    C.each(function() {
        o.addClass("fss-on"), C.appendTo(r), C.find("form").before('<div class="fss-overlay"/>'), C.find(".hs-form label").length > 0 && b.attr("placeholder", C.find(".hs-form label").text()), C.find(".hs-form label").remove(), C.find(".hs-button").html('<i class="fa fa-search"></i>'), C.hasClass("with-close") && C.append('<a class="fss-close-btn" href="#"><i class="fa fa-times"></i></a>'), e(".fss-open-btn").on("click", function() {
            return o.addClass("fullscreen-search-open"), /iPad|iPhone|iPod/g.test(navigator.userAgent) || setTimeout(function() {
                b.focus()
            }, 250), !1
        }), e(".fss-close-btn").on("click", function() {
            return o.removeClass("fullscreen-search-open"), !1
        }), e(".fullscreen-search:not(.with-close.only-close)").find(".fss-overlay").on("click", function() {
            o.removeClass("fullscreen-search-open")
        })
    }), e(".rss-cards .hs-rss-item").initialize(function() {
        var a = e(this),
            t = a.closest(".rss-cards"),
            s = t.find(".hs-rss-module").eq(0);
        if (t.hasClass("equal-height") && a.find(".hs-rss-description a").eq(0).wrap('<div class="rss-more" />'), t.hasClass("full-links") && a.append('<a class="full-link" href="' + a.find("a.hs-rss-title").attr("href") + '"></a>'), a.html('<div class="rss-card">' + a.html() + "</div>"), !t.hasClass("no-masonry") && !t.hasClass("one-column")) {
            var i = s.isotope({
                itemSelector: ".hs-rss-item",
                isFitWidth: !0
            });
            s.imagesLoaded(function() {
                i.isotope()
            }), i.one("arrangeComplete", function() {
                t.addClass("done")
            })
        }
    }), e(".listing-container").each(function() {
        function a(e) {
            y.isotope({
                filter: e
            })
        }

        function t(e) {
            u = e;
            var t = w;
            "*" != m && (t += "[" + v + '*="' + m + '"]'), t += "[" + g + '="' + u + '"]', a(t += ":not(.search-ignored)")
        }

        function o() {
            var a = y.children(w).not(".search-ignored").length,
                s = (Math.ceil(a / p), 1),
                i = 1,
                o = w;
            "*" != m && (o += "[" + v + '*="' + m + '"]'), y.children(o).not(".search-ignored").each(function() {
                s > p && (i++, s = 1), e(this).attr(g, i), s++
            }), f = i, l.html("");
            for (var c = 0; c < f; c++) {
                if (0 == c) d = "active";
                else var d = "";
                var h = e('<a href="javascript:;" class="listing-page-number ' + d + '" ' + g + '="' + (c + 1) + '"></a>');
                h.html(c + 1), h.on("click", function() {
                    var a = e(this),
                        s = a.attr(g);
                    a.siblings().removeClass("active"), a.addClass("active"), t(s);
                    var i = r.find(".scroll-here-from-pagination").eq(0);
                    if (i.length > 0) {
                        var o = i.is('[class*="offset-"]') ? parseInt(i.attr("class").match(/offset-\d+/)[0].replace("offset-", "")) : 0;
                        n.animate({
                            scrollTop: i.offset().top - o
                        }, 500, "easeOutExpo")
                    }
                }), f > 1 ? h.appendTo(l) : l.html("")
            }
        }
        var r = e(this),
            l = r.find(".listing-pagination"),
            c = r.find(".listing-menu"),
            d = r.find(".listing-pagination-options"),
            h = r.find(".listing-search input"),
            p = 10,
            f = 1,
            u = 1,
            m = "*",
            v = "data-filter",
            g = "data-page",
            C = {};
        C.percentPosition = !0, C.layoutMode = "masonry", c.find("a.active").first().each(function() {
            m = e(this).attr("href").replace("#", "")
        }), r.hasClass("no-masonry") && (Isotope.Item.prototype._create = function() {
            this.id = this.layout.itemGUID++, this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.sortData = {}
        }, Isotope.Item.prototype.layoutPosition = function() {
            this.emitEvent("layout", [this])
        }, Isotope.prototype.arrange = function(e) {
            this.option(e), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._isLayoutInited = !0
        }, Isotope.LayoutMode.create("none"), C.layoutMode = "none");
        var b = r.find(".listing-items > .hs_cos_wrapper_type_widget_container");
        if (b.length > 0) {
            (y = b).find("> .hs_cos_wrapper").addClass("listing-cell");
            var w = ".listing-cell";
            y.find(".listing-filter").each(function() {
                var a = e(this);
                a.closest(".listing-cell").attr("data-filter", a.attr("data-filter"))
            })
        } else {
            var y = r.find(".listing-items");
            y.addClass("drag"), y.find(".listing-item").closest(".row-fluid-wrapper").addClass("listing-cell"), e(w = ".row-fluid-wrapper.listing-cell").each(function() {
                var a = e(this).find(".listing-filter").first();
                e(this).attr("data-filter", a.attr("data-filter").replace(" ", "").replace(",", " "))
            })
        }
        C.itemSelector = w, "" != d.attr("data-items-per-page") && (p = d.attr("data-items-per-page")), c.each(function() {
            var a = e(this);
            0 == a.find("a.active").eq(0).length && a.find('a[href="#all"], a[href="#All"]').addClass("active")
        }), y.isotope(C), new ResizeSensor(e(w), function() {
            y.isotope(C)
        }), c.find('a[href^="#"]').on("click", function() {
            var a, s = e(this);
            a = "#all" == s.attr("href").toLowerCase() ? "*" : s.attr("href").replace("#", ""), s.closest("li").siblings().find("a").removeClass("active"), s.addClass("active"), m = a, e(w).removeClass("search-ignored"), h.val("");
            var i = r.find(".scroll-here-from-menu").eq(0);
            if (i.length > 0) {
                var l = i.is('[class*="offset-"]') ? parseInt(i.attr("class").match(/offset-\d+/)[0].replace("offset-", "")) : 0;
                n.animate({
                    scrollTop: i.offset().top - l
                }, 500, "easeOutExpo")
            }
            return o(), t(1), !1
        }), c.find('a[href="#' + s + '"]').first().each(function() {
            var a, i = e(this);
            if (i.length > 0) return a = "all" == s.toLowerCase() ? "*" : s, c.find("a").removeClass("active"), i.addClass("active"), m = a, o(), t(1), !1
        }), y.imagesLoaded(function() {
            y.isotope()
        }), i.load(function() {
            y.isotope(), r.addClass("done")
        }), o(), t(1), h.on("keyup", act.debounce(function() {
            var a = h.val(),
                s = new RegExp(a, "gi");
            if ("" == a) {
                var i = c.find("a.active").eq(0);
                m = "#all" == i.attr("href").toLowerCase() ? "*" : i.attr("href").replace("#", ""), e(w).removeClass("search-ignored"), o(), t(1)
            } else {
                e(w).addClass("search-ignored"), y.isotope({
                    filter: function() {
                        return !s || e(this).text().match(s)
                    }
                });
                var n = y.isotope("getFilteredItemElements");
                e.each(n, function() {
                    e(this).removeClass("search-ignored")
                }), o(), t(1)
            }
        }, 250))
    }), e(".hero-slider .slick-slide").css("background-image", function() {
        var a = e(this).find("img");
        return a.attr("data-lazy") ? "url('" + a.attr("data-lazy") + "')" : "url('" + a.attr("src") + "')"
    }), -1 !== navigator.appVersion.indexOf("MSIE 10") || window.MSInputMethodContext && document.documentMode || !Modernizr.csscalc || !Modernizr.cssvhunit ? i.on("load resize", act.debounce(function() {
        var a = e(".header-wrapper").height(),
            t = i.height();
        e(".hero-slider.full-vh").each(function() {
            var s = e(this),
                i = s.find(".slick-track"),
                n = (i.height(), 0);
            i.css({
                height: "auto",
                "min-height": 0
            }), s.hasClass("minus-header") && (t -= a), s.find(".slick-slide").each(function() {
                var a = e(this).height();
                a > n && (n = a)
            }), t > n ? i.height(t) : i.height(n)
        }).css("min-height", 0).addClass("done")
    }, 250)) : i.on("load resize", act.debounce(function() {
        var a = e(".header-wrapper").height();
        e(".hero-slider.full-vh.minus-header .slick-track").css("min-height", function() {
            return "calc(100vh - " + a + "px)"
        }).closest(".hero-slider").css("min-height", 0).addClass("done")
    }, 250)), e("a.popup-image, .popup-image a").nboMagnificPopup({
        type: "image",
        mainClass: "nbomfp-fade",
        tClose: "",
        closeMarkup: '<div class="popup-close"></div>'
    }), e("a.popup-iframe, .popup-iframe a").each(function() {
        var a = e(this).hasClass("enable-on-mobile") || e(this).closest(".popup-iframe").hasClass("enable-on-mobile");
        e(this).nboMagnificPopup({
            type: "iframe",
            disableOn: function() {
                return !(i.width() <= c) || !!a
            },
            mainClass: "nbomfp-fade",
            tClose: "",
            closeMarkup: '<div class="popup-close"></div>',
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        })
    }), e("a.popup-content, .popup-content a").nboMagnificPopup({
        type: "inline",
        mainClass: "nbomfp-fade",
        tClose: "",
        closeMarkup: '<div class="popup-close"></div>',
        removalDelay: 100,
        callbacks: {
            open: function() {
                e.force_appear(), i.trigger("resize")
            }
        }
    }), e(".popup-image a:not([title])").each(function() {
        var a = e(this),
            t = a.find("img").eq(0).attr("title");
        "" != t && a.attr("title", t)
    }), e('.advanced-gallery img:not(".change-image img")').each(function() {
        var a = e(this),
            t = (a.closest(".advanced-gallery"), a.attr("src")),
            s = a.attr("title");
        0 == a.closest("a").length && a.wrap('<a href="' + t + '"></a>');
        var i = a.closest("a");
        "" != s && (i.attr("data-title", s), a.removeAttr("title")), a.is(".video img") && i.addClass("video")
    }), e(".advanced-gallery").each(function() {
        e(this).find("a:not(.external-link a)").nboMagnificPopup({
            type: "image",
            mainClass: "nbomfp-fade",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1],
                tPrev: "",
                tNext: ""
            },
            iframe: {
                patterns: {
                    youtube: {
                        src: "//www.youtube.com/embed/%id%?autoplay=1&amp;rel=0"
                    }
                }
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(e) {
                    return e.el.attr("data-title")
                }
            },
            tClose: "",
            closeMarkup: '<div class="popup-close"></div>',
            callbacks: {
                elementParse: function(e) {
                    "video" == e.el.context.className ? e.type = "iframe" : e.type = "image"
                }
            }
        })
    }), e(".advanced-gallery-link").on("click", function(a) {
        a.preventDefault(), e(e(this).attr("href") + " a:not(.external-link a)").first().nboMagnificPopup("open")
    }), e(".popup-target").each(function() {
        var a = e(this).attr("id");
        a == s && e.nboMagnificPopup.open({
            items: {
                src: "#" + a,
                type: "inline"
            },
            tClose: "",
            closeMarkup: '<div class="popup-close"></div>'
        })
    }), e(".popup-group").each(function() {
        e(this).find("a:not(.external-link a)").nboMagnificPopup({
            type: "inline",
            tLoading: "Loading...",
            mainClass: "nbomfp-fade",
            gallery: {
                enabled: !0,
                tPrev: "",
                tNext: ""
            },
            tClose: "",
            closeMarkup: '<div class="popup-close"></div>'
        })
    }), -1 !== navigator.appVersion.indexOf("MSIE 10") && o.addClass("is-ie10"), window.MSInputMethodContext && document.documentMode && o.addClass("is-ie11"), e(".form-box").each(function() {
        var a = e(this);
        0 == a.find(".form-box-header").length && a.addClass("no-title")
    }), new WOW({
        boxClass: "reveal"
    }).init(), e(".slick-slide .caption.superimpose").closest(".hs_cos_gallery_main").addClass("with-superimposed-caption"), e(".slider-container").each(function() {
        var a = e(this),
            t = {},
            s = 767;
        if (a.is(".widget-type-widget_container")) n = e("> .hs_cos_wrapper_widget_container", a);
        else var n = a;
        t.adaptiveHeight = !!a.hasClass("adaptive-height"), t.variableWidth = !!a.hasClass("variable-width"), t.autoplay = !!a.hasClass("autoplay"), t.autoplaySpeed = a.is('[class*="autoplay-speed-"]') ? parseInt(a.attr("class").match(/autoplay-speed-\d+/)[0].replace("autoplay-speed-", "")) : 3e3, t.speed = a.is('[class*="animation-speed-"]') ? parseInt(a.attr("class").match(/animation-speed-\d+/)[0].replace("animation-speed-", "")) : 300, t.arrows = !!a.hasClass("arrows"), t.dots = !!a.hasClass("dots"), t.fade = !!a.hasClass("fade"), t.centerMode = !!a.hasClass("center-mode"), t.centerPadding = a.is('[class*="center-padding-"]') ? a.attr("class").match(/center-padding-\d+/)[0].replace("center-padding-", "") + "px" : "50px", t.infinite = !!a.hasClass("infinite"), t.pauseOnHover = !!a.hasClass("pause-on-hover"), t.slidesToShow = a.is('[class*="slides-to-show-"]') ? parseInt(a.attr("class").match(/slides-to-show-\d+/)[0].replace("slides-to-show-", "")) : 1, t.slidesToScroll = a.is('[class*="slides-to-scroll-"]') ? parseInt(a.attr("class").match(/slides-to-scroll-\d+/)[0].replace("slides-to-scroll-", "")) : 1, t.vertical = !!a.hasClass("vertical"), t.verticalSwiping = !!a.hasClass("vertical-swiping"), t.draggable = !o.hasClass("hs-inline-edit") && !a.hasClass("not-draggable"), t.swipe = !a.hasClass("not-swipeable"), a.hasClass("md-stack") ? s = l : a.hasClass("sm-stack") ? s = c : a.hasClass("xs-stack") && (s = d), t.responsive = [{
            breakpoint: s,
            settings: {
                arrows: !0,
                centerMode: !1,
                centerPadding: "0",
                slidesToShow: 1
            }
        }], n.on("init", function(t, s) {
            i.trigger("resize.px.parallax"), e.force_appear(), a.eqh(), a.find(".eqh-container").eqh(), i.trigger("sliderContainerInit")
        }), n.on("afterChange", function(t, s) {
            i.trigger("resize.px.parallax"), e.force_appear(), a.eqh(), a.find(".eqh-container").eqh(), i.trigger("sliderContainerChanged")
        }), n.nboslick(t)
    }), e(".hero-slider-v2 .eqh-item").addClass("eqh-never-cancel"), e(".header-overlap").eq(0).length > 0 && r.addClass("header-overlap"), e(".full-vh.minus-header").each(function() {
        var a = e(this);
        i.on("load resize sliderContainerInit sliderContainerChanged", act.debounce(function() {
            var t = e(".header-wrapper").height();
            a.css("min-height", function() {
                return "calc(100vh - " + t + "px)"
            }), i.trigger("resize.px.parallax"), a.addClass("done")
        }, 250))
    }), e(".sticky-item").each(function() {
        var t = e(this);
        t.wrap('<div class="sticky-item-wrapper" />'), t.parent(".sticky-item-wrapper").before('<div class="sticky-item-ref" style="height: 0;" />'), i.on("load scroll resize tabChanged", function() {
            a(t)
        }), new ResizeSensor(t, function() {
            a(t)
        }), new ResizeSensor(t.parent(".sticky-item-wrapper").prev(".sticky-item-ref"), function() {
            a(t)
        }), new ResizeSensor(t.closest(".sticky-parent"), function() {
            a(t)
        })
    }), e(".mega-menu-branch").each(function() {
        var a = e(this),
            t = a.closest(".mega-menu-parent"),
            s = a.closest(".mega-menu-options"),
            n = a.closest(".mega-menu").find(".mega-menu-branch").not(this),
            o = e(s.attr("data-menu"));
        if (o.length > 0 && a.is('[class*="activated-by-"]')) {
            var r = parseInt(a.attr("class").match(/activated-by-\d+/)[0].replace("activated-by-", "")),
                l = o.find(".hs-menu-wrapper > ul > li").eq(r - 1),
                c = l.siblings(),
                d = s.attr("data-parent-active-class") ? s.attr("data-parent-active-class") : "";
            l.addClass("mega-menuized"), l.on("mouseenter", act.debounce(function() {
                n.removeClass("active"), a.addClass("active"), c.removeClass("mega-menuized-active"), l.addClass("mega-menuized-active"), t.addClass(d)
            }, 200)).on("mouseleave", act.debounce(function(e) {
                a.is(":hover") || (a.removeClass("active"), l.removeClass("mega-menuized-active"), t.removeClass(d))
            }, 200)), a.on("mouseleave", act.debounce(function() {
                l.each(function() {
                    e(this).is(":hover") || (a.removeClass("active"), l.removeClass("mega-menuized-active"), t.removeClass(d))
                })
            }, 200)), i.on("resize scroll", act.debounce(function() {
                a.removeClass("active"), l.removeClass("mega-menuized-active"), t.removeClass(d)
            }, 50))
        }
    });
    var w = e(".hs-menu-wrapper"),
        y = w.find("> ul > li"),
        k = (w.find("> ul > li > a"), e(e(".page-section").get().reverse())),
        x = {},
        q = [];
    w.find('a[href^="http://#"], a[href^="https://#"]').each(function() {
        var a = e(this),
            t = a.attr("href").replace("http://#", "#").replace("https://#", "#");
        a.attr("href", t)
    }), k.each(function() {
        var a = e(this).attr("id");
        x[a] = w.find("> ul > li > a[href=#" + a + "]"), e(this).is('[class*="active-offset-"]') ? q[a] = parseInt(e(this).attr("class").match(/active-offset-\d+/)[0].replace("active-offset-", "")) + 1 : q[a] = 200
    }), i.on("load scroll resize", act.throttle(t, 100)), e(".circle-loader").appear({
        force_process: !0
    }).on("appear", function() {
        var a = e(this),
            t = a.closest(".circle-loader-wrapper"),
            s = h,
            i = h;
        a.attr("data-color-1") && (s = a.attr("data-color-1")), a.attr("data-color-2") && (i = a.attr("data-color-2")), a.data("inited") || (a.on("circle-animation-start", function(e) {
            t.addClass("started")
        }).circleProgress({
            size: 400,
            fill: {
                gradient: [s, i]
            }
        }).on("circle-animation-progress", function(e, s, i) {
            var n = a.find(".number");
            if (a.is("[data-custom-number]")) {
                var o = a.attr("data-custom-number");
                t.hasClass("v2") ? n.html(Math.round(s * o)) : n.html(Math.round(i * o))
            } else a.is("[data-custom-text]") ? n.html(a.attr("data-custom-text")) : n.html(Math.round(100 * i) + '<span class="percent">%</span>')
        }).on("circle-animation-end", function(e) {
            t.addClass("done")
        }), a.data("inited", !0))
    }), e(".bar-loader").appear({
        force_process: !0
    }).on("appear", function() {
        var a = e(this);
        a.addClass("started").find(".number").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
            a.addClass("done")
        })
    }), r.append('<div class="tooltipster-base" />'), e(".tooltip:not(.hs_cos_wrapper_type_rich_text.hs-editor-editable .tooltip)").initialize(function() {
        var a = e(this),
            t = "top",
            s = "theme",
            i = "hover",
            n = 300;
        if (a.attr("data-tooltip-direction") && (t = a.attr("data-tooltip-direction")), a.attr("data-tooltip-color") && (s = a.attr("data-tooltip-color")), a.attr("data-tooltip-trigger") && (i = a.attr("data-tooltip-trigger")), a.attr("data-tooltip-maxwidth") && (n = a.attr("data-tooltip-maxwidth")), a.is(".cta_button .tooltip")) {
            o = a.attr("title");
            a.removeAttr("title"), (a = a.closest(".cta_button")).attr("title", o)
        } else if (a.is(".tooltip.on-parent")) {
            var o = a.attr("title");
            a.removeAttr("title"), (a = a.parent()).attr("title", o)
        }
        a.tooltipster({
            delay: 1,
            maxWidth: n,
            speed: 10,
            interactive: !0,
            theme: s,
            side: t,
            contentCloning: !0,
            contentAsHTML: !0,
            distance: 15,
            trigger: i
        })
    }), e(".countdown-timer").each(function() {
        var a = e(this),
            t = parseInt(a.attr("data-cd-year")),
            s = parseInt(a.attr("data-cd-month")),
            i = parseInt(a.attr("data-cd-day")),
            n = parseInt(a.attr("data-cd-hour")),
            o = a.attr("data-cd-minute"),
            r = a.attr("data-cd-label-days"),
            l = a.attr("data-cd-label-hours"),
            c = a.attr("data-cd-label-minutes"),
            d = a.attr("data-cd-label-seconds"),
            h = new Date(Date.UTC(t, s - 1, i, n, o, 0, 0));
        a.countdown(h, function(e) {
            a.find(".time").eq(0).html(e.strftime('<span class="segment days"><span class="number">%D</span><span class="label">' + r + '</span></span></span><span class="sep"></span><span class="segment hours"><span class="number">%H</span><span class="label">' + l + '</span></span></span><span class="sep"></span><span class="segment minutes"><span class="number">%M</span><span class="label">' + c + '</span></span></span><span class="sep"></span><span class="segment seconds"><span class="number">%S</span><span class="label">' + d + "</span></span></span>"))
        })
    }), plyr.setup(".media-player", {
        iconUrl: "https://cdn2.hubspot.net/hubfs/273774/mp/themes/Act-Theme/images/plyr.svg",
        blankUrl: "https://cdn2.hubspot.net/hubfs/273774/mp/themes/Act-Theme/videos/plyr.mp4",
        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "fullscreen"]
    }), e(".content-card-image img").closest(".content-card").addClass("with-image"), e(".content-card-link a").closest(".content-card").addClass("with-link"), e(".dated-titles-container").each(function() {
        var a = e(this);
        a.find(".dated-title").each(function() {
            var a = e(this);
            a.closest(".hs_cos_wrapper").css("order", a.attr("data-dt-order"))
        }), a.addClass("done")
    }), e(".one-field-form .hs-input").initialize(function() {
        var a = e(this),
            t = a.closest(".hs-form").find(".hs-button").eq(0).outerWidth();
        a.css("padding-right", t + 20)
    }), i.load(function() {
        e(".list-type-dropdown").not(".plain-links").each(function() {
            var a = e(this),
                t = a.find("ul").eq(0),
                s = a.find("a"),
                i = t.find("a.active").eq(0);
            t.before('<div class="control fade-in">' + i.html() + "</div>");
            var n = a.find(".control").eq(0);
            n.click(function() {
                a.toggleClass("open")
            }), s.click(function() {
                n.html(e(this).html()), a.removeClass("open")
            }), o.click(function(t) {
                e(t.target).is(a) || e(t.target).is(n) || a.removeClass("open")
            })
        }), e(".list-type-dropdown.plain-links").each(function() {
            var a = e(this),
                t = a.find("h1, h2, h3, h4").eq(0),
                s = a.find("ul").eq(0),
                i = a.find("a");
            s.before('<div class="control fade-in">' + t.html() + "</div>");
            var n = a.find(".control").eq(0);
            n.click(function() {
                a.toggleClass("open")
            }), o.click(function(t) {
                e(t.target).is(i) || e(t.target).is(n) || a.removeClass("open")
            })
        })
    }), e("#blog-listing-more").click(function() {
        var a = e(this),
            t = a.attr("href"),
            s = e("#blog-listing-container");
        return e.ajax({
            url: t,
            type: "GET",
            success: function(t) {
                var i = (t = e(t)).find("#blog-listing-container").html(),
                    n = t.find("#blog-listing-more").attr("href");
                s.append('<div class="blog-listing-new-row fade-in">' + i + "</div>"), n ? a.attr("href", n) : a.remove()
            },
            complete: function(e) {
                setTimeout(function() {
                    s.find(".eqh-container").eqh()
                }, 200)
            }
        }), !1
    }), e('[class*="wrapper-class--"]').each(function() {
        var a = e(this),
            t = a.attr("class").split(" ");
        e.each(t, function() {
            var e = this.match(/wrapper-class--[\s\S]*/);
            e && a.closest(".row-fluid-wrapper").addClass(e.toString().replace("wrapper-class--", ""))
        })
    }), e('[class*="row-class--"]').each(function() {
        var a = e(this),
            t = a.attr("class").split(" ");
        e.each(t, function() {
            var e = this.match(/row-class--[\s\S]*/);
            e && a.closest(".row-fluid").addClass(e.toString().replace("row-class--", ""))
        })
    }), e('[class*="form-button-class--"] .hs-button').initialize(function() {
        var a = e(this),
            t = a.closest('[class*="form-button-class--"]').attr("class").split(" ");
        e.each(t, function() {
            var e = this.match(/form-button-class--[\s\S]*/);
            e && a.addClass(e.toString().replace("form-button-class--", ""))
        })
    }), e('[class*="form-title-class--"]').each(function() {
        var a = e(this),
            t = a.attr("class").split(" ");
        e.each(t, function() {
            var e = this.match(/form-title-class--[\s\S]*/);
            e && a.find(".form-title").addClass(e.toString().replace("form-title-class--", ""))
        })
    }), e(".random-content").each(function() {
        var a = e(this).find("> *");
        a.eq(Math.floor(Math.random() * a.length)).addClass("fade-in").show()
    }), e("body").on("click", ".lang-select .globe_class", function() {
        var a = e(this);
        a.find("a");
        e(this).toggleClass("open"), o.click(function(t) {
            e(t.target).is(a) || a.removeClass("open")
        }), i.on("scroll", function() {
            a.removeClass("open")
        })
    }), e(".lang-select a.current_lang").initialize(function() {
        var a = e(this).parent();
        a.prependTo(a.parent())
    }), e(".hs-inline-edit .widget-type-raw_jinja").removeAttr("data-widget-type"), e(".slide-menu .control-button .close i.fa.fa-close").addClass("fas fa-times"), e(".legal-consent-container > div").initialize(function() {
        "" == e.trim(e(this).text()) && e(this).addClass("hidden")
    }), e(".hs-inline-edit .nbomfp-wrap[tabindex]").initialize(function() {
        e(this).removeAttr("tabindex")
    })
});