webpackJsonp([5], {
    "0BLv": function (t, e, n) {
        var r = n("k39P");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("44a36b54", r, !1, {
            sourceMap: !1
        })
    },
    "0F0d": function (t, e, n) {
        "use strict";
        e.a = {
            name: "no-ssr",
            props: ["placeholder"],
            data: function () {
                return {
                    canRender: !1
                }
            },
            mounted: function () {
                this.canRender = !0
            },
            render: function (t) {
                return this.canRender ? this.$slots.default && this.$slots.default[0] : t("div", {
                    class: ["no-ssr-placeholder"]
                }, this.$slots.placeholder || this.placeholder)
            }
        }
    },
    "1At2": function (t, e, n) {
        "use strict";
        var r = n("/5sW");
        e.a = {
            name: "nuxt-loading",
            data: function () {
                return {
                    percent: 0,
                    show: !1,
                    canSuccess: !0,
                    duration: 5e3,
                    height: "2px",
                    color: "#3B8070",
                    failedColor: "red"
                }
            },
            methods: {
                start: function () {
                    var t = this;
                    return this.show = !0, this.canSuccess = !0, this._timer && (clearInterval(this._timer), this.percent = 0), this._cut = 1e4 / Math.floor(this.duration), this._timer = setInterval(function () {
                        t.increase(t._cut * Math.random()), t.percent > 95 && t.finish()
                    }, 100), this
                },
                set: function (t) {
                    return this.show = !0, this.canSuccess = !0, this.percent = Math.floor(t), this
                },
                get: function () {
                    return Math.floor(this.percent)
                },
                increase: function (t) {
                    return this.percent = this.percent + Math.floor(t), this
                },
                decrease: function (t) {
                    return this.percent = this.percent - Math.floor(t), this
                },
                finish: function () {
                    return this.percent = 100, this.hide(), this
                },
                pause: function () {
                    return clearInterval(this._timer), this
                },
                hide: function () {
                    var t = this;
                    return clearInterval(this._timer), this._timer = null, setTimeout(function () {
                        t.show = !1, r.default.nextTick(function () {
                            setTimeout(function () {
                                t.percent = 0
                            }, 200)
                        })
                    }, 500), this
                },
                fail: function () {
                    return this.canSuccess = !1, this
                }
            }
        }
    },
    "1m7W": function (t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, "/*!\n * Start Bootstrap - Clean Blog v3.3.7+1 (http://startbootstrap.com/template-overviews/clean-blog)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */a,body{color:#333}.navbar-custom .navbar-brand,.navbar-custom .nav li a,h1,h2,h3,h4,h5,h6{font-weight:800}.caption,.intro-header .page-heading,.intro-header .site-heading,footer .copyright{text-align:center}body{font-family:Lora,Times New Roman,serif;font-size:20px;-webkit-tap-highlight-color:#0085A1}.intro-header .page-heading .subheading,.intro-header .post-heading .subheading,.intro-header .site-heading .subheading,.navbar-custom,h1,h2,h3,h4,h5,h6{font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif}p{line-height:1.5;margin:30px 0}p a{text-decoration:underline}a:focus,a:hover{color:#0085a1}a img:focus,a img:hover{cursor:-webkit-zoom-in;cursor:zoom-in}blockquote{color:#777;font-style:italic}hr.small{max-width:100px;margin:15px auto;border-width:4px;border-color:#fff}.navbar-custom{position:absolute;top:0;left:0;width:100%;z-index:3}.navbar-custom .navbar-header .navbar-toggle{color:#777;font-weight:800;text-transform:uppercase;font-size:12px}.navbar-custom .nav li a{text-transform:uppercase;font-size:12px;letter-spacing:1px}@media only screen and (min-width:768px){.navbar-custom{background:0 0;border-bottom:1px solid transparent}.navbar-custom .navbar-brand{color:#fff;padding:20px}.navbar-custom .navbar-brand:focus,.navbar-custom .navbar-brand:hover{color:hsla(0,0%,100%,.8)}.navbar-custom .nav li a{color:#fff;padding:20px}.navbar-custom .nav li a:focus,.navbar-custom .nav li a:hover{color:hsla(0,0%,100%,.8)}}@media only screen and (min-width:1170px){.navbar-custom{-webkit-transition:background-color .3s;transition:background-color .3s;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.navbar-custom.is-fixed{position:fixed;top:-61px;background-color:hsla(0,0%,100%,.9);border-bottom:1px solid #f2f2f2;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.navbar-custom.is-fixed .navbar-brand{color:#333}.navbar-custom.is-fixed .navbar-brand:focus,.navbar-custom.is-fixed .navbar-brand:hover{color:#0085a1}.navbar-custom.is-fixed .nav li a{color:#333}.navbar-custom.is-fixed .nav li a:focus,.navbar-custom.is-fixed .nav li a:hover{color:#0085a1}.navbar-custom.is-visible{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.intro-header{background:50% no-repeat;background-size:cover;-o-background-size:cover;margin-bottom:50px}.intro-header .page-heading,.intro-header .post-heading,.intro-header .site-heading{padding:100px 0 50px;color:#fff}.intro-header .page-heading h1,.intro-header .site-heading h1{margin-top:0;font-size:50px}.intro-header .page-heading .subheading,.intro-header .site-heading .subheading{font-size:24px;line-height:1.1;display:block;font-weight:300;margin:10px 0 0}@media only screen and (min-width:768px){.intro-header .page-heading,.intro-header .post-heading,.intro-header .site-heading{padding:150px 0}.intro-header .page-heading h1,.intro-header .site-heading h1{font-size:80px}}.intro-header .post-heading h1{font-size:35px}.intro-header .post-heading .meta,.intro-header .post-heading .subheading{line-height:1.1;display:block}.intro-header .post-heading .subheading{font-size:24px;margin:10px 0 30px;font-weight:600}.intro-header .post-heading .meta{font-family:Lora,Times New Roman,serif;font-style:italic;font-weight:300;font-size:20px}.intro-header .post-heading .meta a{color:#fff}@media only screen and (min-width:768px){.intro-header .post-heading h1{font-size:55px}.intro-header .post-heading .subheading{font-size:30px}}.post-preview>a{color:#333}.post-preview>a:focus,.post-preview>a:hover{text-decoration:none;color:#0085a1}.post-preview>a>.post-title{font-size:30px;margin-top:30px;margin-bottom:10px}.post-preview>a>.post-subtitle{margin:0 0 10px;font-weight:300}.post-preview>.post-meta{color:#777;font-size:18px;font-style:italic;margin-top:0}.post-preview>.post-meta>a{text-decoration:none;color:#333}.post-preview>.post-meta>a:focus,.post-preview>.post-meta>a:hover{color:#0085a1;text-decoration:underline}@media only screen and (min-width:768px){.post-preview>a>.post-title{font-size:36px}}.section-heading{font-size:36px;margin-top:60px;font-weight:700}.btn,.pager li>a,.pager li>span{font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;text-transform:uppercase;font-weight:800;letter-spacing:1px}.caption{font-size:14px;padding:10px;font-style:italic;margin:0;display:block;border-bottom-right-radius:5px;border-bottom-left-radius:5px}footer{padding:50px 0 65px}footer .list-inline{margin:0;padding:0}.floating-label-form-group,footer .copyright{font-size:14px;margin-bottom:0}.floating-label-form-group{position:relative;padding-bottom:.5em;border-bottom:1px solid #eee}.floating-label-form-group input,.floating-label-form-group textarea{z-index:1;position:relative;padding-right:0;padding-left:0;border:none;border-radius:0;font-size:1.5em;background:0 0;-webkit-box-shadow:none!important;box-shadow:none!important;resize:none}.floating-label-form-group label{display:block;z-index:0;position:relative;top:2em;margin:0;font-size:.85em;line-height:1.764705882em;vertical-align:middle;vertical-align:baseline;opacity:0;-webkit-transition:top .3s ease,opacity .3s ease;transition:top .3s ease,opacity .3s ease}.floating-label-form-group::not(:first-child){padding-left:14px;border-left:1px solid #eee}.floating-label-form-group-with-value label{top:0;opacity:1}.floating-label-form-group-with-focus label{color:#0085a1}form .row:first-child .floating-label-form-group{border-top:1px solid #eee}.btn{font-size:14px;border-radius:0;padding:15px 25px}.btn-lg{font-size:16px;padding:25px 35px}.btn-default:focus,.btn-default:hover{background-color:#0085a1;border:1px solid #0085a1;color:#fff}.pager{margin:20px 0 0}.pager li>a,.pager li>span{font-size:14px;padding:15px 25px;background-color:#fff;border-radius:0}.pager li>a:focus,.pager li>a:hover{color:#fff;background-color:#0085a1;border:1px solid #0085a1}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#777;background-color:#333;cursor:not-allowed}::-moz-selection{color:#fff;text-shadow:none;background:#0085a1}::selection{color:#fff;text-shadow:none;background:#0085a1}img::selection{color:#fff;background:0 0}img::-moz-selection{color:#fff;background:0 0}", ""])
    },
    AMHj: function (t, e, n) {
        var r = n("iBGT");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("7628d088", r, !1, {
            sourceMap: !1
        })
    },
    F88d: function (t, e, n) {
        "use strict";
        var r = n("1At2"),
            o = n("srTi"),
            a = !1;
        var i = function (t) {
                a || n("AMHj")
            },
            s = n("VU/8")(r.a, o.a, !1, i, null, null);
        s.options.__file = ".nuxt\\components\\nuxt-loading.vue", e.a = s.exports
    },
    "HBB+": function (t, e, n) {
        "use strict";
        e.a = {
            name: "nuxt-child",
            functional: !0,
            props: ["keepAlive"],
            render: function (t, e) {
                var n = e.parent,
                    a = e.data,
                    i = e.props;
                a.nuxtChild = !0;
                for (var s = n, c = n.$nuxt.nuxt.transitions, u = n.$nuxt.nuxt.defaultTransition, l = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && l++, n = n.$parent;
                a.nuxtChildDepth = l;
                var p = c[l] || u,
                    d = {};
                r.forEach(function (t) {
                    void 0 !== p[t] && (d[t] = p[t])
                });
                var f = {};
                o.forEach(function (t) {
                    "function" == typeof p[t] && (f[t] = p[t].bind(s))
                });
                var h = f.beforeEnter;
                f.beforeEnter = function (t) {
                    if (window.$nuxt.$emit("triggerScroll"), h) return h.call(s, t)
                };
                var m = [t("router-view", a)];
                return void 0 !== i.keepAlive && (m = [t("keep-alive", m)]), t("transition", {
                    props: d,
                    on: f
                }, m)
            }
        };
        var r = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            o = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"]
    },
    "Hot+": function (t, e, n) {
        "use strict";
        var r = n("/5sW"),
            o = n("HBB+"),
            a = n("ct3O"),
            i = n("YLfZ");
        e.a = {
            name: "nuxt",
            props: ["nuxtChildKey", "keepAlive"],
            render: function (t) {
                return this.nuxt.err ? t("nuxt-error", {
                    props: {
                        error: this.nuxt.err
                    }
                }) : t("nuxt-child", {
                    key: this.routerViewKey,
                    props: this.$props
                })
            },
            beforeCreate: function () {
                r.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
            },
            computed: {
                routerViewKey: function () {
                    if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(i.b)(this.$route.matched[0].path)(this.$route.params);
                    var t = this.$route.matched[0] && this.$route.matched[0].components.default;
                    return t && t.options && t.options.key ? "function" == typeof t.options.key ? t.options.key(this.$route) : t.options.key : this.$route.path
                }
            },
            components: {
                NuxtChild: o.a,
                NuxtError: a.a
            }
        }
    },
    LK2v: function (t, e, n) {
        var r = n("kx41");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("bdc30d10", r, !1, {
            sourceMap: !1
        })
    },
    LwQ2: function (t, e, n) {
        "use strict";
        var r = n("Xxa5"),
            o = n.n(r),
            a = n("exGp"),
            i = n.n(a),
            s = n("o/zv");
        n.n(s);
        e.a = function (t) {
            var e, n = (e = i()(o.a.mark(function t(e, n) {
                    var i, c, u, d, f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return o.a.wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!l) {
                                    t.next = 9;
                                    break
                                }
                                if (i = Object(s.join)(e, n + f), a && p[i]) {
                                    t.next = 6;
                                    break
                                }
                                return t.next = 5, r.$axios.get(i);
                            case 5:
                                p[i] = t.sent.data;
                            case 6:
                                return t.abrupt("return", p[i]);
                            case 9:
                                if (c = /(?!^\/)(\/)/g, u = n.replace(c, "."), d = Object(s.join)(e, u) + ".json", p[d]) {
                                    t.next = 17;
                                    break
                                }
                                return t.next = 16, r.$axios.get(d);
                            case 16:
                                p[d] = t.sent.data;
                            case 17:
                                return t.abrupt("return", p[d]);
                            case 20:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function (t, n) {
                    return e.apply(this, arguments)
                }),
                r = t.app,
                a = t.isStatic,
                c = t.hotReload,
                u = t.route;
            if (!(c || u.fullPath.includes("__webpack_hmr?") || u.fullPath.includes(".hot-update."))) {
                var l = !a,
                    p = {};
                r.$content = function (t) {
                    var e = "";
                    return {
                        query: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return e = function () {
                                var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).exclude;
                                return t ? Array.isArray(t) ? "exclude=" + t.join(",") : "exclude=" + t : ""
                            }(t), this
                        },
                        get: function (r) {
                            if ("string" != typeof r) throw Error("Permalink must be a string.");
                            return n(t, r, "?" + e)
                        },
                        getBetween: function (r, o) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                                i = l ? "/" : "_between",
                                s = "between=" + [r, o, a].join(",");
                            return n(t, i, "?" + s + "&" + e)
                        },
                        getOnly: function (r, o) {
                            var a = l ? "/" : "_only",
                                i = "only=" + [r, o].join(",");
                            return n(t, a, "?" + i + "&" + e)
                        },
                        getAll: function () {
                            return n(t, l ? "/" : "_all", "?" + e)
                        }
                    }
                }
            }
        }
    },
    T23V: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, o, a, i = n("pFYg"),
            s = n.n(i),
            c = n("//Fk"),
            u = n.n(c),
            l = n("Xxa5"),
            p = n.n(l),
            d = n("mvHQ"),
            f = n.n(d),
            h = n("exGp"),
            m = n.n(h),
            g = n("fZjL"),
            x = n.n(g),
            b = n("woOf"),
            v = n.n(b),
            y = n("/5sW"),
            w = n("unZF"),
            k = n("qcny"),
            _ = n("YLfZ"),
            C = (r = m()(p.a.mark(function t(e, n, r) {
                var o, a, i = this;
                return p.a.wrap(function (t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return this._pathChanged = !!R.nuxt.err || n.path !== e.path, this._queryChanged = f()(e.query) !== f()(n.query), this._diffQuery = this._queryChanged ? Object(_.g)(e.query, n.query) : [], this._pathChanged && this.$loading.start && this.$loading.start(), t.prev = 4, t.next = 7, Object(_.k)(e);
                        case 7:
                            o = t.sent, !this._pathChanged && this._queryChanged && o.some(function (t) {
                                var e = t.options.watchQuery;
                                return !0 === e || !!Array.isArray(e) && e.some(function (t) {
                                    return i._diffQuery[t]
                                })
                            }) && this.$loading.start && this.$loading.start(), r(), t.next = 19;
                            break;
                        case 12:
                            t.prev = 12, t.t0 = t.catch(4), t.t0 = t.t0 || {}, a = t.t0.statusCode || t.t0.status || t.t0.response && t.t0.response.status || 500, this.error({
                                statusCode: a,
                                message: t.t0.message
                            }), this.$nuxt.$emit("routeChanged", e, n, t.t0), r(!1);
                        case 19:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [4, 12]
                ])
            })), function (t, e, n) {
                return r.apply(this, arguments)
            }),
            $ = (o = m()(p.a.mark(function t(e, n, r) {
                var o, a, i, s, c, l, d, f, h = this;
                return p.a.wrap(function (t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return", r());
                        case 2:
                            return o = !1, a = function (t) {
                                if (n.path === t.path && h.$loading.finish && h.$loading.finish(), n.path !== t.path && h.$loading.pause && h.$loading.pause(), !o) {
                                    o = !0;
                                    var e = [];
                                    E = Object(_.e)(n, e).map(function (t, r) {
                                        return Object(_.b)(n.matched[e[r]].path)(n.params)
                                    }), r(t)
                                }
                            }, t.next = 6, Object(_.m)(R, {
                                route: e,
                                from: n,
                                next: a.bind(this)
                            });
                        case 6:
                            if (this._dateLastError = R.nuxt.dateErr, this._hadError = !!R.nuxt.err, i = [], (s = Object(_.e)(e, i)).length) {
                                t.next = 24;
                                break
                            }
                            return t.next = 13, S.call(this, s, R.context);
                        case 13:
                            if (!o) {
                                t.next = 15;
                                break
                            }
                            return t.abrupt("return");
                        case 15:
                            return t.next = 17, this.loadLayout("function" == typeof k.a.layout ? k.a.layout(R.context) : k.a.layout);
                        case 17:
                            return c = t.sent, t.next = 20, S.call(this, s, R.context, c);
                        case 20:
                            if (!o) {
                                t.next = 22;
                                break
                            }
                            return t.abrupt("return");
                        case 22:
                            return R.context.error({
                                statusCode: 404,
                                message: "This page could not be found"
                            }), t.abrupt("return", r());
                        case 24:
                            return s.forEach(function (t) {
                                t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                            }), this.setTransitions(T(s, e, n)), t.prev = 26, t.next = 29, S.call(this, s, R.context);
                        case 29:
                            if (!o) {
                                t.next = 31;
                                break
                            }
                            return t.abrupt("return");
                        case 31:
                            if (!R.context._errored) {
                                t.next = 33;
                                break
                            }
                            return t.abrupt("return", r());
                        case 33:
                            return "function" == typeof (l = s[0].options.layout) && (l = l(R.context)), t.next = 37, this.loadLayout(l);
                        case 37:
                            return l = t.sent, t.next = 40, S.call(this, s, R.context, l);
                        case 40:
                            if (!o) {
                                t.next = 42;
                                break
                            }
                            return t.abrupt("return");
                        case 42:
                            if (!R.context._errored) {
                                t.next = 44;
                                break
                            }
                            return t.abrupt("return", r());
                        case 44:
                            if (d = !0, s.forEach(function (t) {
                                    d && "function" == typeof t.options.validate && (d = t.options.validate({
                                        params: e.params || {},
                                        query: e.query || {}
                                    }))
                                }), d) {
                                t.next = 49;
                                break
                            }
                            return this.error({
                                statusCode: 404,
                                message: "This page could not be found"
                            }), t.abrupt("return", r());
                        case 49:
                            return t.next = 51, u.a.all(s.map(function (t, n) {
                                if (t._path = Object(_.b)(e.matched[i[n]].path)(e.params), t._dataRefresh = !1, h._pathChanged && t._path !== E[n]) t._dataRefresh = !0;
                                else if (!h._pathChanged && h._queryChanged) {
                                    var r = t.options.watchQuery;
                                    !0 === r ? t._dataRefresh = !0 : Array.isArray(r) && (t._dataRefresh = r.some(function (t) {
                                        return h._diffQuery[t]
                                    }))
                                }
                                if (!h._hadError && h._isMounted && !t._dataRefresh) return u.a.resolve();
                                var o = [],
                                    a = t.options.asyncData && "function" == typeof t.options.asyncData,
                                    s = !!t.options.fetch,
                                    c = a && s ? 30 : 45;
                                if (a) {
                                    var l = Object(_.j)(t.options.asyncData, R.context).then(function (e) {
                                        Object(_.a)(t, e), h.$loading.increase && h.$loading.increase(c)
                                    });
                                    o.push(l)
                                }
                                if (s) {
                                    var p = t.options.fetch(R.context);
                                    p && (p instanceof u.a || "function" == typeof p.then) || (p = u.a.resolve(p)), p.then(function (t) {
                                        h.$loading.increase && h.$loading.increase(c)
                                    }), o.push(p)
                                }
                                return u.a.all(o)
                            }));
                        case 51:
                            o || (this.$loading.finish && this.$loading.finish(), E = s.map(function (t, n) {
                                return Object(_.b)(e.matched[i[n]].path)(e.params)
                            }), r()), t.next = 66;
                            break;
                        case 54:
                            return t.prev = 54, t.t0 = t.catch(26), t.t0 || (t.t0 = {}), E = [], t.t0.statusCode = t.t0.statusCode || t.t0.status || t.t0.response && t.t0.response.status || 500, "function" == typeof (f = k.a.layout) && (f = f(R.context)), t.next = 63, this.loadLayout(f);
                        case 63:
                            this.error(t.t0), this.$nuxt.$emit("routeChanged", e, n, t.t0), r(!1);
                        case 66:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [26, 54]
                ])
            })), function (t, e, n) {
                return o.apply(this, arguments)
            }),
            j = (a = m()(p.a.mark(function t(e) {
                var n, r, o, a;
                return p.a.wrap(function (t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return R = e.app, z = e.router, t.next = 4, u.a.all(q(z));
                        case 4:
                            return n = t.sent, r = new y.default(R), o = O.layout || "default", t.next = 9, r.loadLayout(o);
                        case 9:
                            if (r.setLayout(o), a = function () {
                                    r.$mount("#__nuxt"), y.default.nextTick(function () {
                                        B(r)
                                    })
                                }, r.setTransitions = r.$options.nuxt.setTransitions.bind(r), n.length && (r.setTransitions(T(n, z.currentRoute)), E = z.currentRoute.matched.map(function (t) {
                                    return Object(_.b)(t.path)(z.currentRoute.params)
                                })), r.$loading = {}, O.error && r.error(O.error), z.beforeEach(C.bind(r)), z.beforeEach($.bind(r)), z.afterEach(L), z.afterEach(F.bind(r)), !O.serverRendered) {
                                t.next = 22;
                                break
                            }
                            return a(), t.abrupt("return");
                        case 22:
                            $.call(r, z.currentRoute, z.currentRoute, function (t) {
                                if (!t) return L(z.currentRoute, z.currentRoute), M.call(r, z.currentRoute), void a();
                                z.push(t, function () {
                                    return a()
                                }, function (t) {
                                    if (!t) return a();
                                    console.error(t)
                                })
                            });
                        case 23:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            })), function (t) {
                return a.apply(this, arguments)
            }),
            E = [],
            R = void 0,
            z = void 0,
            O = window.__NUXT__ || {};

        function T(t, e, n) {
            var r = function (t) {
                var r = function (t, e) {
                    if (!t || !t.options || !t.options[e]) return {};
                    var n = t.options[e];
                    if ("function" == typeof n) {
                        for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) o[a - 2] = arguments[a];
                        return n.apply(void 0, o)
                    }
                    return n
                }(t, "transition", e, n) || {};
                return "string" == typeof r ? {
                    name: r
                } : r
            };
            return t.map(function (t) {
                var e = v()({}, r(t));
                if (n && n.matched.length && n.matched[0].components.default) {
                    var o = r(n.matched[0].components.default);
                    x()(o).filter(function (t) {
                        return o[t] && -1 !== t.toLowerCase().indexOf("leave")
                    }).forEach(function (t) {
                        e[t] = o[t]
                    })
                }
                return e
            })
        }

        function A(t, e) {
            return O.serverRendered && e && Object(_.a)(t, e), t._Ctor = t, t
        }

        function q(t) {
            var e, n = this,
                r = Object(_.d)(t.options.base, t.options.mode);
            return Object(_.c)(t.match(r), (e = m()(p.a.mark(function t(e, r, o, a, i) {
                var s;
                return p.a.wrap(function (t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if ("function" != typeof e || e.options) {
                                t.next = 4;
                                break
                            }
                            return t.next = 3, e();
                        case 3:
                            e = t.sent;
                        case 4:
                            return s = A(Object(_.l)(e), O.data ? O.data[i] : null), o.components[a] = s, t.abrupt("return", s);
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }, t, n)
            })), function (t, n, r, o, a) {
                return e.apply(this, arguments)
            }))
        }

        function S(t, e, n) {
            var r = this,
                o = [],
                a = !1;
            if (void 0 !== n && (o = [], n.middleware && (o = o.concat(n.middleware)), t.forEach(function (t) {
                    t.options.middleware && (o = o.concat(t.options.middleware))
                })), o = o.map(function (t) {
                    return "function" == typeof t ? t : ("function" != typeof w.a[t] && (a = !0, r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t
                    })), w.a[t])
                }), !a) return Object(_.i)(o, e)
        }

        function L(t, e) {
            Object(_.c)(t, function (t, e, n, r) {
                return "object" !== (void 0 === t ? "undefined" : s()(t)) || t.options || ((t = y.default.extend(t))._Ctor = t, n.components[r] = t), t
            })
        }

        function M(t) {
            this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
            var e = this.$options.nuxt.err ? k.a.layout : t.matched[0].components.default.options.layout;
            "function" == typeof e && (e = e(R.context)), this.setLayout(e)
        }

        function F(t, e) {
            var n = this;
            !1 === this._pathChanged && !1 === this._queryChanged || y.default.nextTick(function () {
                Object(_.f)(t, []).forEach(function (t, e) {
                    if (t && t.constructor._dataRefresh && E[e] === t.constructor._path && "function" == typeof t.constructor.options.data) {
                        var n = t.constructor.options.data.call(t);
                        for (var r in n) y.default.set(t.$data, r, n[r])
                    }
                }), M.call(n, t)
            })
        }

        function B(t) {
            window._nuxtReadyCbs.forEach(function (e) {
                "function" == typeof e && e(t)
            }), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), z.afterEach(function (e, n) {
                y.default.nextTick(function () {
                    return t.$nuxt.$emit("routeChanged", e, n)
                })
            })
        }
        Object(k.b)().then(j).catch(function (t) {
            "ERR_REDIRECT" !== t.message && console.error("[nuxt] Error while initializing app", t)
        })
    },
    Tokn: function (t, e, n) {
        "use strict";
        var r, o = n("pFYg"),
            a = n.n(o),
            i = n("/5sW"),
            s = {};
        (r = n("pzLN")).keys().forEach(function (t) {
            return s[t] = r(t).default
        }), i.default.component("nuxtent-body", {
            render: function () {
                var t = arguments[0];
                return "object" === a()(this.body) && this.body.relativePath ? t(s[this.body.relativePath]) : t("div", {
                    domProps: {
                        innerHTML: this.body
                    }
                })
            },
            props: {
                body: {
                    type: [Object, String]
                }
            }
        })
    },
    WRRc: function (t, e, n) {
        "use strict";
        e.a = {
            name: "nuxt-link",
            functional: !0,
            render: function (t, e) {
                return t("router-link", e.data, e.children)
            }
        }
    },
    YLfZ: function (t, e, n) {
        "use strict";
        e.a = function (t, e) {
            var n = t.options.data || b;
            if (!e && t.options.hasAsyncData) return;
            t.options.hasAsyncData = !0, t.options.data = function () {
                var r = n.call(this);
                return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), g()({}, r, e)
            }, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
        }, e.l = v, e.e = y, e.f = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return [].concat.apply([], t.matched.map(function (t, n) {
                return h()(t.instances).map(function (r) {
                    return e && e.push(n), t.instances[r]
                })
            }))
        }, e.c = w, e.k = k, n.d(e, "h", function () {
            return $
        }), n.d(e, "m", function () {
            return j
        }), e.i = function t(e, n) {
            if (!e.length || n._redirected || n._errored) return d.a.resolve();
            return E(e[0], n).then(function () {
                return t(e.slice(1), n)
            })
        }, e.j = E, e.d = function (t, e) {
            var n = window.location.pathname;
            if ("hash" === e) return window.location.hash.replace(/^#\//, "");
            t && 0 === n.indexOf(t) && (n = n.slice(t.length));
            return (n || "/") + window.location.search + window.location.hash
        }, e.b = function (t, e) {
            return function (t) {
                for (var e = new Array(t.length), n = 0; n < t.length; n++) "object" === i()(t[n]) && (e[n] = new RegExp("^(?:" + t[n].pattern + ")$"));
                return function (n, r) {
                    for (var a = "", i = n || {}, s = r || {}, c = s.pretty ? z : encodeURIComponent, u = 0; u < t.length; u++) {
                        var l = t[u];
                        if ("string" != typeof l) {
                            var p, d = i[l.name];
                            if (null == d) {
                                if (l.optional) {
                                    l.partial && (a += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (Array.isArray(d)) {
                                if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + o()(d) + "`");
                                if (0 === d.length) {
                                    if (l.optional) continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var f = 0; f < d.length; f++) {
                                    if (p = c(d[f]), !e[u].test(p)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + o()(p) + "`");
                                    a += (0 === f ? l.prefix : l.delimiter) + p
                                }
                            } else {
                                if (p = l.asterisk ? encodeURI(d).replace(/[?#]/g, function (t) {
                                        return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                                    }) : c(d), !e[u].test(p)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + p + '"');
                                a += l.prefix + p
                            }
                        } else a += l
                    }
                    return a
                }
            }(function (t, e) {
                var n, r = [],
                    o = 0,
                    a = 0,
                    i = "",
                    s = e && e.delimiter || "/";
                for (; null != (n = R.exec(t));) {
                    var c = n[0],
                        u = n[1],
                        l = n.index;
                    if (i += t.slice(a, l), a = l + c.length, u) i += u[1];
                    else {
                        var p = t[a],
                            d = n[2],
                            f = n[3],
                            h = n[4],
                            m = n[5],
                            g = n[6],
                            x = n[7];
                        i && (r.push(i), i = "");
                        var b = null != d && null != p && p !== d,
                            v = "+" === g || "*" === g,
                            y = "?" === g || "*" === g,
                            w = n[2] || s,
                            k = h || m;
                        r.push({
                            name: f || o++,
                            prefix: d || "",
                            delimiter: w,
                            optional: y,
                            repeat: v,
                            partial: b,
                            asterisk: !!x,
                            pattern: k ? T(k) : x ? ".*" : "[^" + O(w) + "]+?"
                        })
                    }
                }
                a < t.length && (i += t.substr(a));
                i && r.push(i);
                return r
            }(t, e))
        }, e.g = function (t, e) {
            var n = {},
                r = g()({}, t, e);
            for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
            return n
        };
        var r = n("mvHQ"),
            o = n.n(r),
            a = n("pFYg"),
            i = n.n(a),
            s = n("Xxa5"),
            c = n.n(s),
            u = n("exGp"),
            l = n.n(u),
            p = n("//Fk"),
            d = n.n(p),
            f = n("fZjL"),
            h = n.n(f),
            m = n("Dd8w"),
            g = n.n(m),
            x = n("/5sW"),
            b = function () {
                return {}
            };

        function v(t) {
            return t.options && t._Ctor === t ? t : (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = x.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file), t)
        }

        function y(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return [].concat.apply([], t.matched.map(function (t, n) {
                return h()(t.components).map(function (r) {
                    return e && e.push(n), t.components[r]
                })
            }))
        }

        function w(t, e) {
            return Array.prototype.concat.apply([], t.matched.map(function (t, n) {
                return h()(t.components).map(function (r) {
                    return e(t.components[r], t.instances[r], t, r, n)
                })
            }))
        }

        function k(t) {
            var e, n = this;
            return d.a.all(w(t, (e = l()(c.a.mark(function t(e, r, o, a) {
                return c.a.wrap(function (t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if ("function" != typeof e || e.options) {
                                t.next = 4;
                                break
                            }
                            return t.next = 3, e();
                        case 3:
                            e = t.sent;
                        case 4:
                            return t.abrupt("return", o.components[a] = v(e));
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }, t, n)
            })), function (t, n, r, o) {
                return e.apply(this, arguments)
            })))
        }
        window._nuxtReadyCbs = [], window.onNuxtReady = function (t) {
            window._nuxtReadyCbs.push(t)
        };
        var _, C, $ = (_ = l()(c.a.mark(function t(e) {
                return c.a.wrap(function (t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, k(e);
                        case 2:
                            return t.abrupt("return", g()({}, e, {
                                meta: y(e).map(function (t) {
                                    return t.options.meta || {}
                                })
                            }));
                        case 3:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            })), function (t) {
                return _.apply(this, arguments)
            }),
            j = (C = l()(c.a.mark(function t(e, n) {
                return c.a.wrap(function (t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (n.to ? n.to : n.route, e.context) {
                                t.next = 13;
                                break
                            }
                            t.t0 = !0, t.t1 = e, t.t2 = n.payload, t.t3 = n.error, t.t4 = {}, e.context = {
                                get isServer() {
                                    return console.warn("context.isServer has been deprecated, please use process.server instead."), !1
                                },
                                get isClient() {
                                    return console.warn("context.isClient has been deprecated, please use process.client instead."), !0
                                },
                                isStatic: t.t0,
                                isDev: !1,
                                isHMR: !1,
                                app: t.t1,
                                payload: t.t2,
                                error: t.t3,
                                base: "/",
                                env: t.t4
                            }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), e.context.redirect = function (t, n, r) {
                                if (t) {
                                    e.context._redirected = !0;
                                    var o = void 0 === n ? "undefined" : i()(n);
                                    if ("number" == typeof t || "undefined" !== o && "object" !== o || (r = n || {}, o = void 0 === (n = t) ? "undefined" : i()(n), t = 302), "object" === o && (n = e.router.resolve(n).href), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n)) throw n = A(n, r), window.location.replace(n), new Error("ERR_REDIRECT");
                                    e.context.next({
                                        path: n,
                                        query: r,
                                        status: t
                                    })
                                }
                            }, e.context.nuxtState = window.__NUXT__;
                        case 13:
                            if (e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !!n.isHMR, !n.route) {
                                t.next = 21;
                                break
                            }
                            return t.next = 20, $(n.route);
                        case 20:
                            e.context.route = t.sent;
                        case 21:
                            if (e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {}, !n.from) {
                                t.next = 27;
                                break
                            }
                            return t.next = 26, $(n.from);
                        case 26:
                            e.context.from = t.sent;
                        case 27:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            })), function (t, e) {
                return C.apply(this, arguments)
            });

        function E(t, e) {
            var n = void 0;
            return (n = 2 === t.length ? new d.a(function (n) {
                t(e, function (t, r) {
                    t && e.error(t), n(r = r || {})
                })
            }) : t(e)) && (n instanceof d.a || "function" == typeof n.then) || (n = d.a.resolve(n)), n
        }
        var R = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function z(t) {
            return encodeURI(t).replace(/[\/?#]/g, function (t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        function O(t) {
            return t.replace(/([.+*?=^!:()[\]|\/\\])/g, "\\$1")
        }

        function T(t) {
            return t.replace(/([=!:$\/()])/g, "\\$1")
        }

        function A(t, e) {
            var n = void 0,
                r = t.indexOf("://"); - 1 !== r ? (n = t.substring(0, r), t = t.substring(r + 3)) : 0 === t.indexOf("//") && (t = t.substring(2));
            var a = t.split("/"),
                i = (n ? n + "://" : "//") + a.shift(),
                s = a.filter(Boolean).join("/"),
                c = void 0;
            return 2 === (a = s.split("#")).length && (s = a[0], c = a[1]), i += s ? "/" + s : "", e && "{}" !== o()(e) && (i += (2 === t.split("?").length ? "&" : "?") + function (t) {
                return h()(t).sort().map(function (e) {
                    var n = t[e];
                    return null == n ? "" : Array.isArray(n) ? n.slice().map(function (t) {
                        return [e, "=", t].join("")
                    }).join("&") : e + "=" + n
                }).filter(Boolean).join("&")
            }(e)), i += c ? "#" + c : ""
        }
    },
    ct3O: function (t, e, n) {
        "use strict";
        var r = n("mqqU"),
            o = n("n1a8"),
            a = !1;
        var i = function (t) {
                a || n("LK2v")
            },
            s = n("VU/8")(r.a, o.a, !1, i, null, null);
        s.options.__file = ".nuxt\\components\\nuxt-error.vue", e.a = s.exports
    },
    iBGT: function (t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}", ""])
    },
    k39P: function (t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, "code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}", ""])
    },
    kx41: function (t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, ".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""])
    },
    mqqU: function (t, e, n) {
        "use strict";
        e.a = {
            name: "nuxt-error",
            props: ["error"],
            head: function () {
                return {
                    title: this.message,
                    meta: [{
                        name: "viewport",
                        content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                    }]
                }
            },
            computed: {
                statusCode: function () {
                    return this.error && this.error.statusCode || 500
                },
                message: function () {
                    return this.error.message || "Error"
                }
            }
        }
    },
    mtxM: function (t, e, n) {
        "use strict";
        e.a = function () {
            return new i.default({
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: l,
                routes: [{
                    path: "/about",
                    component: s,
                    name: "about"
                }, {
                    path: "/",
                    component: c,
                    name: "index"
                }, {
                    path: "/:year/:slug",
                    component: u,
                    name: "content"
                }],
                fallback: !1
            })
        };
        var r = n("//Fk"),
            o = n.n(r),
            a = n("/5sW"),
            i = n("/ocq");
        a.default.use(i.default);
        var s = function () {
                return n.e(3).then(n.bind(null, "hSk2")).then(function (t) {
                    return t.default || t
                })
            },
            c = function () {
                return n.e(2).then(n.bind(null, "/TYz")).then(function (t) {
                    return t.default || t
                })
            },
            u = function () {
                return n.e(0).then(n.bind(null, "waes")).then(function (t) {
                    return t.default || t
                })
            };
        window.history.scrollRestoration = "manual";
        var l = function (t, e, n) {
            var r = !1;
            return t.matched.length < 2 ? r = {
                x: 0,
                y: 0
            } : t.matched.some(function (t) {
                return t.components.default.options.scrollToTop
            }) && (r = {
                x: 0,
                y: 0
            }), n && (r = n), new o.a(function (e) {
                window.$nuxt.$once("triggerScroll", function () {
                    if (t.hash) {
                        var n = t.hash;
                        void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                        try {
                            document.querySelector(n) && (r = {
                                selector: n
                            })
                        } catch (t) {
                            console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                        }
                    }
                    e(r)
                })
            })
        }
    },
    n1a8: function (t, e, n) {
        "use strict";
        var r = function () {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "__nuxt-error-page"
            }, [e("div", {
                staticClass: "error"
            }, [e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "90",
                    height: "90",
                    fill: "#DBE1EC",
                    viewBox: "0 0 48 48"
                }
            }, [e("path", {
                attrs: {
                    d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                }
            })]), e("div", {
                staticClass: "title"
            }, [this._v(this._s(this.message))]), 404 === this.statusCode ? e("p", {
                staticClass: "description"
            }, [e("nuxt-link", {
                staticClass: "error-link",
                attrs: {
                    to: "/"
                }
            }, [this._v("Back to the home page")])], 1) : this._e(), this._m(0)])])
        };
        r._withStripped = !0;
        var o = {
            render: r,
            staticRenderFns: [function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "logo"
                }, [e("a", {
                    attrs: {
                        href: "https://nuxtjs.org",
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [this._v("Nuxt.js")])])
            }]
        };
        e.a = o
    },
    nQib: function (t, e, n) {
        var r = n("1m7W");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("a0bfb446", r, !1, {
            sourceMap: !1
        })
    },
    pzLN: function (t, e) {
        function n(t) {
            throw new Error("Cannot find module '" + t + "'.")
        }
        n.keys = function () {
            return []
        }, n.resolve = n, t.exports = n, n.id = "pzLN"
    },
    qcny: function (t, e, n) {
        "use strict";
        n.d(e, "b", function () {
            return O
        });
        var r = n("Xxa5"),
            o = n.n(r),
            a = n("//Fk"),
            i = (n.n(a), n("C4MV")),
            s = n.n(i),
            c = n("woOf"),
            u = n.n(c),
            l = n("Dd8w"),
            p = n.n(l),
            d = n("exGp"),
            f = n.n(d),
            h = n("MU8w"),
            m = (n.n(h), n("/5sW")),
            g = n("p3jY"),
            x = n.n(g),
            b = n("mtxM"),
            v = n("0F0d"),
            y = n("HBB+"),
            w = n("WRRc"),
            k = n("ct3O"),
            _ = n("Hot+"),
            C = n("yTq1"),
            $ = n("YLfZ"),
            j = n("zQW4"),
            E = n("Tokn"),
            R = n("LwQ2");
        n.d(e, "a", function () {
            return k.a
        });
        var z, O = (z = f()(o.a.mark(function t(e) {
            var n, r, a, i, c, l;
            return o.a.wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return n = Object(b.a)(e), r = p()({
                            router: n,
                            nuxt: {
                                defaultTransition: T,
                                transitions: [T],
                                setTransitions: function (t) {
                                    return Array.isArray(t) || (t = [t]), t = t.map(function (t) {
                                        return t = t ? "string" == typeof t ? u()({}, T, {
                                            name: t
                                        }) : u()({}, T, t) : T
                                    }), this.$options.nuxt.transitions = t, t
                                },
                                err: null,
                                dateErr: null,
                                error: function (t) {
                                    t = t || null, r.context._errored = !!t, "string" == typeof t && (t = {
                                        statusCode: 500,
                                        message: t
                                    });
                                    var n = this.nuxt || this.$options.nuxt;
                                    return n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                                }
                            }
                        }, C.a), a = e ? e.next : function (t) {
                            return r.router.push(t)
                        }, i = void 0, e ? i = n.resolve(e.url).route : (c = Object($.d)(n.options.base), i = n.resolve(c).route), t.next = 7, Object($.m)(r, {
                            route: i,
                            next: a,
                            error: r.nuxt.error.bind(r),
                            payload: e ? e.payload : void 0,
                            req: e ? e.req : void 0,
                            res: e ? e.res : void 0,
                            beforeRenderFns: e ? e.beforeRenderFns : void 0
                        });
                    case 7:
                        if (l = function (t, e) {
                                if (!t) throw new Error("inject(key, value) has no key provided");
                                if (!e) throw new Error("inject(key, value) has no value provided");
                                r[t = "$" + t] = e;
                                var n = "__nuxt_" + t + "_installed__";
                                m.default[n] || (m.default[n] = !0, m.default.use(function () {
                                    m.default.prototype.hasOwnProperty(t) || s()(m.default.prototype, t, {
                                        get: function () {
                                            return this.$root.$options[t]
                                        }
                                    })
                                }))
                            }, "function" != typeof j.a) {
                            t.next = 11;
                            break
                        }
                        return t.next = 11, Object(j.a)(r.context, l);
                    case 11:
                        if ("function" != typeof E.default) {
                            t.next = 14;
                            break
                        }
                        return t.next = 14, Object(E.default)(r.context, l);
                    case 14:
                        if ("function" != typeof R.a) {
                            t.next = 17;
                            break
                        }
                        return t.next = 17, Object(R.a)(r.context, l);
                    case 17:
                        t.next = 20;
                        break;
                    case 20:
                        return t.abrupt("return", {
                            app: r,
                            router: n
                        });
                    case 21:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        })), function (t) {
            return z.apply(this, arguments)
        });
        m.default.component(v.a.name, v.a), m.default.component(y.a.name, y.a), m.default.component(w.a.name, w.a), m.default.component(_.a.name, _.a), m.default.use(x.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var T = {
            name: "page",
            mode: "out-in",
            appear: !1,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        }
    },
    srTi: function (t, e, n) {
        "use strict";
        var r = function () {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                staticClass: "nuxt-progress",
                style: {
                    width: this.percent + "%",
                    height: this.height,
                    "background-color": this.canSuccess ? this.color : this.failedColor,
                    opacity: this.show ? 1 : 0
                }
            })
        };
        r._withStripped = !0;
        var o = {
            render: r,
            staticRenderFns: []
        };
        e.a = o
    },
    unZF: function (t, e, n) {
        "use strict";
        e.a = {}
    },
    yTq1: function (t, e, n) {
        "use strict";
        var r = n("//Fk"),
            o = n.n(r),
            a = n("/5sW"),
            i = n("F88d"),
            s = n("0BLv"),
            c = (n.n(s), n("nQib")),
            u = (n.n(c), {
                _default: function () {
                    return n.e(1).then(n.bind(null, "Ma2J")).then(function (t) {
                        return t.default || t
                    })
                }
            }),
            l = {};
        e.a = {
            head: {
                title: "Thomas blog",
                meta: [{
                    charset: "utf-8"
                }, {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }, {
                    hid: "description",
                    name: "description",
                    content: "Nuxtent project"
                }],
                link: [{
                    rel: "stylesheet",
                    href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                }, {
                    rel: "stylesheet",
                    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                }, {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
                }, {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
                }],
                style: [],
                script: []
            },
            render: function (t, e) {
                var n = t("nuxt-loading", {
                        ref: "loading"
                    }),
                    r = t(this.layout || "nuxt");
                return t("div", {
                    domProps: {
                        id: "__nuxt"
                    }
                }, [n, t("transition", {
                    props: {
                        name: "layout",
                        mode: "out-in"
                    }
                }, [t("div", {
                    domProps: {
                        id: "__layout"
                    },
                    key: this.layoutName
                }, [r])])])
            },
            data: function () {
                return {
                    layout: null,
                    layoutName: ""
                }
            },
            beforeCreate: function () {
                a.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
            },
            created: function () {
                a.default.prototype.$nuxt = this, "undefined" != typeof window && (window.$nuxt = this), this.error = this.nuxt.error
            },
            mounted: function () {
                this.$loading = this.$refs.loading
            },
            watch: {
                "nuxt.err": "errorChanged"
            },
            methods: {
                errorChanged: function () {
                    this.nuxt.err && this.$loading && (this.$loading.fail && this.$loading.fail(), this.$loading.finish && this.$loading.finish())
                },
                setLayout: function (t) {
                    t && l["_" + t] || (t = "default"), this.layoutName = t;
                    var e = "_" + t;
                    return this.layout = l[e], this.layout
                },
                loadLayout: function (t) {
                    var e = this;
                    t && (u["_" + t] || l["_" + t]) || (t = "default");
                    var n = "_" + t;
                    return l[n] ? o.a.resolve(l[n]) : u[n]().then(function (t) {
                        return l[n] = t, delete u[n], l[n]
                    }).catch(function (t) {
                        if (e.$nuxt) return e.$nuxt.error({
                            statusCode: 500,
                            message: t.message
                        })
                    })
                }
            },
            components: {
                NuxtLoading: i.a
            }
        }
    },
    zQW4: function (t, e, n) {
        "use strict";
        for (var r = n("woOf"), o = n.n(r), a = n("//Fk"), i = n.n(a), s = n("BO1k"), c = n.n(s), u = n("mtWM"), l = n.n(u), p = {
                setHeader: function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, s = c()(Array.isArray(n) ? n : [n]); !(r = (i = s.next()).done); r = !0) {
                            var u = i.value;
                            if (!e) return void delete this.defaults.headers[u][t];
                            this.defaults.headers[u][t] = e
                        }
                    } catch (t) {
                        o = !0, a = t
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                },
                setToken: function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        r = t ? (e ? e + " " : "") + t : null;
                    this.setHeader("Authorization", r, n)
                },
                onRequest: function (t) {
                    this.interceptors.request.use(function (e) {
                        return t(e) || e
                    })
                },
                onResponse: function (t) {
                    this.interceptors.response.use(function (e) {
                        return t(e) || e
                    })
                },
                onRequestError: function (t) {
                    this.interceptors.request.use(void 0, function (e) {
                        return t(e) || i.a.reject(e)
                    })
                },
                onResponseError: function (t) {
                    this.interceptors.response.use(void 0, function (e) {
                        return t(e) || i.a.reject(e)
                    })
                },
                onError: function (t) {
                    this.onRequestError(t), this.onResponseError(t)
                }
            }, d = function (t) {
                p["$" + t] = function () {
                    return this[t].apply(this, arguments).then(function (t) {
                        return t && t.data
                    })
                }
            }, f = ["request", "delete", "get", "head", "options", "post", "put", "patch"], h = 0; h < f.length; h++) {
            d(f[h])
        }
        e.a = function (t, e) {
            var n = {
                baseURL: "https://thomascsd.github.io/_nuxt/content",
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    delete: {},
                    get: {},
                    head: {},
                    post: {},
                    put: {},
                    patch: {}
                }
            };
            n.headers.common = t.req && t.req.headers ? o()({}, t.req.headers) : {}, delete n.headers.common.accept, delete n.headers.common.host;
            var r = l.a.create(n);
            ! function (t) {
                for (var e in p) t[e] = p[e].bind(t)
            }(r),
            function (t, e) {
                var n = {
                        finish: function () {},
                        start: function () {},
                        fail: function () {},
                        set: function () {}
                    },
                    r = function () {
                        return window.$nuxt && window.$nuxt.$loading && window.$nuxt.$loading.set ? window.$nuxt.$loading : n
                    },
                    o = 0;
                t.onRequest(function (t) {
                    t && !1 === t.progress || o++
                }), t.onResponse(function (t) {
                    t && t.config && !1 === t.config.progress || --o <= 0 && (o = 0, r().finish())
                }), t.onError(function (t) {
                    t && t.config && !1 === t.config.progress || (o--, r().fail(), r().finish())
                });
                var a = function (t) {
                    if (o) {
                        var e = 100 * t.loaded / (t.total * o);
                        r().set(Math.min(100, e))
                    }
                };
                t.defaults.onUploadProgress = a, t.defaults.onDownloadProgress = a
            }(r), t.$axios = r, e("axios", r)
        }
    }
}, ["T23V"]);