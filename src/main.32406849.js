/*! For license information please see main.32406849.js.LICENSE.txt */
(() => {
  var e = {
      497: (e, t, n) => {
        "use strict";
        var r = n(218);
        function a() {}
        function l() {}
        (l.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, l, o) {
              if (o !== r) {
                var i = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((i.name = "Invariant Violation"), i);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: l,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      173: (e, t, n) => {
        e.exports = n(497)();
      },
      218: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      187: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
        var r = n(43),
          a = i(r),
          l = i(n(173)),
          o = i(n(621));
        function i(e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        }
        var u = function (e) {
          var t = e.icon,
            n = e.color,
            l = e.size,
            i = e.animate,
            u = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(
              function () {
                var e = new o.default({
                    color: n,
                    resizeClear: !0,
                  }),
                  r = u.current;
                return (
                  (function (e, t, n, r) {
                    n.add(r, o.default[e]), t && n.play();
                  })(t, i, e, r),
                  function () {
                    e.remove(r);
                  }
                );
              },
              [t, n, i, l]
            ),
            a.default.createElement("canvas", {
              ref: u,
              width: l,
              height: l,
            })
          );
        };
        (u.defaultProps = {
          animate: !0,
          size: 64,
          color: "black",
        }),
          (u.propTypes = {
            icon: l.default.oneOf([
              "CLEAR_DAY",
              "CLEAR_NIGHT",
              "PARTLY_CLOUDY_DAY",
              "PARTLY_CLOUDY_NIGHT",
              "CLOUDY",
              "RAIN",
              "SLEET",
              "SNOW",
              "WIND",
              "FOG",
            ]).isRequired,
            animate: l.default.bool,
            size: l.default.number,
            color: l.default.string,
          }),
          (t.default = u);
      },
      901: (e, t, n) => {
        "use strict";
        var r,
          a = n(187),
          l =
            (r = a) && r.__esModule
              ? r
              : {
                  default: r,
                };
        t.A = l.default;
      },
      621: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
        var r = (function (e) {
          var t, n;
          !(function () {
            var r =
                e.requestAnimationFrame ||
                e.webkitRequestAnimationFrame ||
                e.mozRequestAnimationFrame ||
                e.oRequestAnimationFrame ||
                e.msRequestAnimationFrame,
              a =
                e.cancelAnimationFrame ||
                e.webkitCancelAnimationFrame ||
                e.mozCancelAnimationFrame ||
                e.oCancelAnimationFrame ||
                e.msCancelAnimationFrame;
            r && a
              ? ((t = function (e) {
                  var t = {
                    value: null,
                  };
                  return (
                    (function n() {
                      (t.value = r(n)), e();
                    })(),
                    t
                  );
                }),
                (n = function (e) {
                  a(e.value);
                }))
              : ((t = setInterval), (n = clearInterval));
          })();
          var r = 0.08,
            a = 2 * Math.PI,
            l = 2 / Math.sqrt(2);
          function o(e, t, n, r, a) {
            e.beginPath(), e.moveTo(t, n), e.lineTo(r, a), e.stroke();
          }
          function i(e, t, n, r, l, o, i, u) {
            var s = Math.cos(t * a);
            !(function (e, t, n, r) {
              e.beginPath(), e.arc(t, n, r, 0, a, !1), e.fill();
            })(
              e,
              n - Math.sin(t * a) * l,
              r + s * o + 0.5 * (u -= i),
              i + (1 - 0.5 * s) * u
            );
          }
          function u(e, t, n, r, a, l, o, u) {
            var s;
            for (s = 5; s--; ) i(e, t + s / 5, n, r, a, l, o, u);
          }
          function s(e, t, n, r, a, l, o) {
            t /= 3e4;
            var i = 0.21 * a,
              s = 0.12 * a,
              c = 0.24 * a,
              f = 0.28 * a;
            (e.fillStyle = o),
              u(e, t, n, r, i, s, c, f),
              (e.globalCompositeOperation = "destination-out"),
              u(e, t, n, r, i, s, c - l, f - l),
              (e.globalCompositeOperation = "source-over");
          }
          function c(e, t, n, r, l, i, u) {
            t /= 12e4;
            var s,
              c,
              f,
              d,
              p = 0.25 * l - 0.5 * i,
              h = 0.32 * l + 0.5 * i,
              m = 0.5 * l - 0.5 * i;
            for (
              e.strokeStyle = u,
                e.lineWidth = i,
                e.lineCap = "round",
                e.lineJoin = "round",
                e.beginPath(),
                e.arc(n, r, p, 0, a, !1),
                e.stroke(),
                s = 8;
              s--;

            )
              (c = (t + s / 8) * a),
                o(
                  e,
                  n + (f = Math.cos(c)) * h,
                  r + (d = Math.sin(c)) * h,
                  n + f * m,
                  r + d * m
                );
          }
          function f(e, t, n, r, o, i, u) {
            t /= 15e3;
            var s = 0.29 * o - 0.5 * i,
              c = 0.05 * o,
              f = Math.cos(t * a),
              d = (f * a) / -16;
            (e.strokeStyle = u),
              (e.lineWidth = i),
              (e.lineCap = "round"),
              (e.lineJoin = "round"),
              (n += f * c),
              e.beginPath(),
              e.arc(n, r, s, d + a / 8, d + (7 * a) / 8, !1),
              e.arc(
                n + Math.cos(d) * s * l,
                r + Math.sin(d) * s * l,
                s,
                d + (5 * a) / 8,
                d + (3 * a) / 8,
                !0
              ),
              e.closePath(),
              e.stroke();
          }
          var d = [
              [
                -0.75, -0.18, -0.7219, -0.1527, -0.6971, -0.1225, -0.6739,
                -0.091, -0.6516, -0.0588, -0.6298, -0.0262, -0.6083, 0.0065,
                -0.5868, 0.0396, -0.5643, 0.0731, -0.5372, 0.1041, -0.5033,
                0.1259, -0.4662, 0.1406, -0.4275, 0.1493, -0.3881, 0.153,
                -0.3487, 0.1526, -0.3095, 0.1488, -0.2708, 0.1421, -0.2319,
                0.1342, -0.1943, 0.1217, -0.16, 0.1025, -0.129, 0.0785, -0.1012,
                0.0509, -0.0764, 0.0206, -0.0547, -0.012, -0.0378, -0.0472,
                -0.0324, -0.0857, -0.0389, -0.1241, -0.0546, -0.1599, -0.0814,
                -0.1876, -0.1193, -0.1964, -0.1582, -0.1935, -0.1931, -0.1769,
                -0.2157, -0.1453, -0.229, -0.1085, -0.2327, -0.0697, -0.224,
                -0.0317, -0.2064, 0.0033, -0.1853, 0.0362, -0.1613, 0.0672,
                -0.135, 0.0961, -0.1051, 0.1213, -0.0706, 0.1397, -0.0332,
                0.1512, 0.0053, 0.158, 0.0442, 0.1624, 0.0833, 0.1636, 0.1224,
                0.1615, 0.1613, 0.1565, 0.1999, 0.15, 0.2378, 0.1402, 0.2749,
                0.1279, 0.3118, 0.1147, 0.3487, 0.1015, 0.3858, 0.0892, 0.4236,
                0.0787, 0.4621, 0.0715, 0.5012, 0.0702, 0.5398, 0.0766, 0.5768,
                0.089, 0.6123, 0.1055, 0.6466, 0.1244, 0.6805, 0.144, 0.7147,
                0.163, 0.75, 0.18,
              ],
              [
                -0.75, 0, -0.7033, 0.0195, -0.6569, 0.0399, -0.6104, 0.06,
                -0.5634, 0.0789, -0.5155, 0.0954, -0.4667, 0.1089, -0.4174,
                0.1206, -0.3676, 0.1299, -0.3174, 0.1365, -0.2669, 0.1398,
                -0.2162, 0.1391, -0.1658, 0.1347, -0.1157, 0.1271, -0.0661,
                0.1169, -0.017, 0.1046, 0.0316, 0.0903, 0.0791, 0.0728, 0.1259,
                0.0534, 0.1723, 0.0331, 0.2188, 0.0129, 0.2656, -0.0064, 0.3122,
                -0.0263, 0.3586, -0.0466, 0.4052, -0.0665, 0.4525, -0.0847,
                0.5007, -0.1002, 0.5497, -0.113, 0.5991, -0.124, 0.6491,
                -0.1325, 0.6994, -0.138, 0.75, -0.14,
              ],
            ],
            p = [
              {
                start: 0.36,
                end: 0.11,
              },
              {
                start: 0.56,
                end: 0.16,
              },
            ];
          function h(e, t, n, r, l, o, i, u, s) {
            var c,
              f,
              h,
              m,
              g = d[i],
              y = ((t /= 2500) + i - p[i].start) % u,
              v = (t + i - p[i].end) % u,
              b = (t + i) % u;
            if (
              ((e.strokeStyle = s),
              (e.lineWidth = o),
              (e.lineCap = "round"),
              (e.lineJoin = "round"),
              y < 1)
            ) {
              if (
                (e.beginPath(),
                (y *= g.length / 2 - 1),
                (y -= c = Math.floor(y)),
                (c *= 2),
                (c += 2),
                e.moveTo(
                  n + (g[c - 2] * (1 - y) + g[c] * y) * l,
                  r + (g[c - 1] * (1 - y) + g[c + 1] * y) * l
                ),
                v < 1)
              ) {
                for (
                  v *= g.length / 2 - 1,
                    v -= f = Math.floor(v),
                    f *= 2,
                    f += 2,
                    m = c;
                  m !== f;
                  m += 2
                )
                  e.lineTo(n + g[m] * l, r + g[m + 1] * l);
                e.lineTo(
                  n + (g[f - 2] * (1 - v) + g[f] * v) * l,
                  r + (g[f - 1] * (1 - v) + g[f + 1] * v) * l
                );
              } else
                for (m = c; m !== g.length; m += 2)
                  e.lineTo(n + g[m] * l, r + g[m + 1] * l);
              e.stroke();
            } else if (v < 1) {
              for (
                e.beginPath(),
                  v *= g.length / 2 - 1,
                  v -= f = Math.floor(v),
                  f *= 2,
                  f += 2,
                  e.moveTo(n + g[0] * l, r + g[1] * l),
                  m = 2;
                m !== f;
                m += 2
              )
                e.lineTo(n + g[m] * l, r + g[m + 1] * l);
              e.lineTo(
                n + (g[f - 2] * (1 - v) + g[f] * v) * l,
                r + (g[f - 1] * (1 - v) + g[f + 1] * v) * l
              ),
                e.stroke();
            }
            b < 1 &&
              ((b *= g.length / 2 - 1),
              (b -= h = Math.floor(b)),
              (h *= 2),
              (function (e, t, n, r, l, o, i) {
                var u = l / 8,
                  s = u / 3,
                  c = 2 * s,
                  f = (t % 1) * a,
                  d = Math.cos(f),
                  p = Math.sin(f);
                (e.fillStyle = i),
                  (e.strokeStyle = i),
                  (e.lineWidth = o),
                  (e.lineCap = "round"),
                  (e.lineJoin = "round"),
                  e.beginPath(),
                  e.arc(n, r, u, f, f + Math.PI, !1),
                  e.arc(n - s * d, r - s * p, c, f + Math.PI, f, !1),
                  e.arc(n + c * d, r + c * p, s, f + Math.PI, f, !0),
                  (e.globalCompositeOperation = "destination-out"),
                  e.fill(),
                  (e.globalCompositeOperation = "source-over"),
                  e.stroke();
              })(
                e,
                t,
                n + (g[(h += 2) - 2] * (1 - b) + g[h] * b) * l,
                r + (g[h - 1] * (1 - b) + g[h + 1] * b) * l,
                l,
                o,
                s
              ));
          }
          var m = function (e) {
            (this.list = []),
              (this.interval = null),
              (this.color = e && e.color ? e.color : "black"),
              (this.resizeClear = !(!e || !e.resizeClear));
          };
          return (
            (m.CLEAR_DAY = function (e, t, n) {
              var a = e.canvas.width,
                l = e.canvas.height,
                o = Math.min(a, l);
              c(e, t, 0.5 * a, 0.5 * l, o, o * r, n);
            }),
            (m.CLEAR_NIGHT = function (e, t, n) {
              var a = e.canvas.width,
                l = e.canvas.height,
                o = Math.min(a, l);
              f(e, t, 0.5 * a, 0.5 * l, o, o * r, n);
            }),
            (m.PARTLY_CLOUDY_DAY = function (e, t, n) {
              var a = e.canvas.width,
                l = e.canvas.height,
                o = Math.min(a, l);
              c(e, t, 0.625 * a, 0.375 * l, 0.75 * o, o * r, n),
                s(e, t, 0.375 * a, 0.625 * l, 0.75 * o, o * r, n);
            }),
            (m.PARTLY_CLOUDY_NIGHT = function (e, t, n) {
              var a = e.canvas.width,
                l = e.canvas.height,
                o = Math.min(a, l);
              f(e, t, 0.667 * a, 0.375 * l, 0.75 * o, o * r, n),
                s(e, t, 0.375 * a, 0.625 * l, 0.75 * o, o * r, n);
            }),
            (m.CLOUDY = function (e, t, n) {
              var a = e.canvas.width,
                l = e.canvas.height,
                o = Math.min(a, l);
              s(e, t, 0.5 * a, 0.5 * l, o, o * r, n);
            }),
            (m.RAIN = function (e, t, n) {
              var l = e.canvas.width,
                o = e.canvas.height,
                i = Math.min(l, o);
              !(function (e, t, n, r, l, o, i) {
                t /= 1350;
                var u,
                  s,
                  c,
                  f,
                  d = 0.16 * l,
                  p = (11 * a) / 12,
                  h = (7 * a) / 12;
                for (e.fillStyle = i, u = 4; u--; )
                  (c =
                    n + ((u - 1.5) / 1.5) * (1 === u || 2 === u ? -1 : 1) * d),
                    (f = r + (s = (t + u / 4) % 1) * s * l),
                    e.beginPath(),
                    e.moveTo(c, f - 1.5 * o),
                    e.arc(c, f, 0.75 * o, p, h, !1),
                    e.fill();
              })(e, t, 0.5 * l, 0.37 * o, 0.9 * i, i * r, n),
                s(e, t, 0.5 * l, 0.37 * o, 0.9 * i, i * r, n);
            }),
            (m.SLEET = function (e, t, n) {
              var a = e.canvas.width,
                l = e.canvas.height,
                i = Math.min(a, l);
              !(function (e, t, n, r, a, l, i) {
                t /= 750;
                var u,
                  s,
                  c,
                  f,
                  d = 0.1875 * a;
                for (
                  e.strokeStyle = i,
                    e.lineWidth = 0.5 * l,
                    e.lineCap = "round",
                    e.lineJoin = "round",
                    u = 4;
                  u--;

                )
                  (s = (t + u / 4) % 1),
                    o(
                      e,
                      (c =
                        Math.floor(
                          n +
                            ((u - 1.5) / 1.5) *
                              (1 === u || 2 === u ? -1 : 1) *
                              d
                        ) + 0.5),
                      (f = r + s * a) - 1.5 * l,
                      c,
                      f + 1.5 * l
                    );
              })(e, t, 0.5 * a, 0.37 * l, 0.9 * i, i * r, n),
                s(e, t, 0.5 * a, 0.37 * l, 0.9 * i, i * r, n);
            }),
            (m.SNOW = function (e, t, n) {
              var l = e.canvas.width,
                i = e.canvas.height,
                u = Math.min(l, i);
              !(function (e, t, n, r, l, i, u) {
                var s,
                  c,
                  f,
                  d,
                  p = 0.16 * l,
                  h = 0.75 * i,
                  m = (t /= 3e3) * a * 0.7,
                  g = Math.cos(m) * h,
                  y = Math.sin(m) * h,
                  v = m + a / 3,
                  b = Math.cos(v) * h,
                  w = Math.sin(v) * h,
                  k = m + (2 * a) / 3,
                  S = Math.cos(k) * h,
                  E = Math.sin(k) * h;
                for (
                  e.strokeStyle = u,
                    e.lineWidth = 0.5 * i,
                    e.lineCap = "round",
                    e.lineJoin = "round",
                    s = 4;
                  s--;

                )
                  (c = (t + s / 4) % 1),
                    o(
                      e,
                      (f = n + Math.sin((c + s / 4) * a) * p) - g,
                      (d = r + c * l) - y,
                      f + g,
                      d + y
                    ),
                    o(e, f - b, d - w, f + b, d + w),
                    o(e, f - S, d - E, f + S, d + E);
              })(e, t, 0.5 * l, 0.37 * i, 0.9 * u, u * r, n),
                s(e, t, 0.5 * l, 0.37 * i, 0.9 * u, u * r, n);
            }),
            (m.WIND = function (e, t, n) {
              var a = e.canvas.width,
                l = e.canvas.height,
                o = Math.min(a, l);
              h(e, t, 0.5 * a, 0.5 * l, o, o * r, 0, 2, n),
                h(e, t, 0.5 * a, 0.5 * l, o, o * r, 1, 2, n);
            }),
            (m.FOG = function (e, t, n) {
              var l = e.canvas.width,
                i = e.canvas.height,
                s = Math.min(l, i),
                c = s * r;
              !(function (e, t, n, r, a, l, o) {
                t /= 3e4;
                var i = 0.21 * a,
                  s = 0.06 * a,
                  c = 0.21 * a,
                  f = 0.28 * a;
                (e.fillStyle = o),
                  u(e, t, n, r, i, s, c, f),
                  (e.globalCompositeOperation = "destination-out"),
                  u(e, t, n, r, i, s, c - l, f - l),
                  (e.globalCompositeOperation = "source-over");
              })(e, t, 0.5 * l, 0.32 * i, 0.75 * s, c, n),
                (t /= 5e3);
              var f = Math.cos(t * a) * s * 0.02,
                d = Math.cos((t + 0.25) * a) * s * 0.02,
                p = Math.cos((t + 0.5) * a) * s * 0.02,
                h = Math.cos((t + 0.75) * a) * s * 0.02,
                m = 0.936 * i,
                g = Math.floor(m - 0.5 * c) + 0.5,
                y = Math.floor(m - 2.5 * c) + 0.5;
              (e.strokeStyle = n),
                (e.lineWidth = c),
                (e.lineCap = "round"),
                (e.lineJoin = "round"),
                o(e, f + 0.2 * l + 0.5 * c, g, d + 0.8 * l - 0.5 * c, g),
                o(e, p + 0.2 * l + 0.5 * c, y, h + 0.8 * l - 0.5 * c, y);
            }),
            (m.prototype = {
              _determineDrawingFunction: function (e) {
                return (
                  "string" === typeof e &&
                    (e = m[e.toUpperCase().replace(/-/g, "_")] || null),
                  e
                );
              },
              add: function (e, t) {
                var n;
                "string" === typeof e && (e = document.getElementById(e)),
                  null !== e &&
                    "function" ===
                      typeof (t = this._determineDrawingFunction(t)) &&
                    ((n = {
                      element: e,
                      context: e.getContext("2d"),
                      drawing: t,
                    }),
                    this.list.push(n),
                    this.draw(n, 500));
              },
              set: function (e, t) {
                var n;
                for (
                  "string" === typeof e && (e = document.getElementById(e)),
                    n = this.list.length;
                  n--;

                )
                  if (this.list[n].element === e)
                    return (
                      (this.list[n].drawing =
                        this._determineDrawingFunction(t)),
                      void this.draw(this.list[n], 500)
                    );
                this.add(e, t);
              },
              remove: function (e) {
                var t;
                for (
                  "string" === typeof e && (e = document.getElementById(e)),
                    t = this.list.length;
                  t--;

                )
                  if (this.list[t].element === e)
                    return void this.list.splice(t, 1);
              },
              draw: function (e, t) {
                var n = e.context.canvas;
                this.resizeClear
                  ? (n.width = n.width)
                  : e.context.clearRect(0, 0, n.width, n.height),
                  e.drawing(e.context, t, this.color);
              },
              play: function () {
                var e = this;
                this.pause(),
                  (this.interval = t(function () {
                    var t,
                      n = Date.now();
                    for (t = e.list.length; t--; ) e.draw(e.list[t], n);
                  }, 1e3 / 60));
              },
              pause: function () {
                this.interval && (n(this.interval), (this.interval = null));
              },
            }),
            m
          );
        })(
          "undefined" !== typeof n.g
            ? n.g
            : "undefined" !== typeof self
            ? self
            : window
        );
        t.default = r;
      },
      4: (e, t, n) => {
        "use strict";
        var r = n(853),
          a = n(43),
          l = n(950);
        function o(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function i(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        var u = Symbol.for("react.element"),
          s = Symbol.for("react.transitional.element"),
          c = Symbol.for("react.portal"),
          f = Symbol.for("react.fragment"),
          d = Symbol.for("react.strict_mode"),
          p = Symbol.for("react.profiler"),
          h = Symbol.for("react.provider"),
          m = Symbol.for("react.consumer"),
          g = Symbol.for("react.context"),
          y = Symbol.for("react.forward_ref"),
          v = Symbol.for("react.suspense"),
          b = Symbol.for("react.suspense_list"),
          w = Symbol.for("react.memo"),
          k = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var S = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
        var E = Symbol.for("react.memo_cache_sentinel"),
          x = Symbol.iterator;
        function C(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (x && e[x]) || e["@@iterator"])
            ? e
            : null;
        }
        var _ = Symbol.for("react.client.reference");
        function T(e) {
          if (null == e) return null;
          if ("function" === typeof e)
            return e.$$typeof === _ ? null : e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case f:
              return "Fragment";
            case c:
              return "Portal";
            case p:
              return "Profiler";
            case d:
              return "StrictMode";
            case v:
              return "Suspense";
            case b:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case g:
                return (e.displayName || "Context") + ".Provider";
              case m:
                return (e._context.displayName || "Context") + ".Consumer";
              case y:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case w:
                return null !== (t = e.displayName || null)
                  ? t
                  : T(e.type) || "Memo";
              case k:
                (t = e._payload), (e = e._init);
                try {
                  return T(e(t));
                } catch (n) {}
            }
          return null;
        }
        var P,
          N,
          O = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          R = Object.assign;
        function L(e) {
          if (void 0 === P)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              (P = (t && t[1]) || ""),
                (N =
                  -1 < n.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < n.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : "");
            }
          return "\n" + P + e + N;
        }
        var z = !1;
        function A(e, t) {
          if (!e || z) return "";
          z = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (a) {
                        var r = a;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (l) {
                        r = l;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (o) {
                      r = o;
                    }
                    (n = e()) &&
                      "function" === typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (i) {
                  if (i && r && "string" === typeof i.stack)
                    return [i.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name"
            );
            a &&
              a.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var l = r.DetermineComponentFrameRoot(),
              o = l[0],
              i = l[1];
            if (o && i) {
              var u = o.split("\n"),
                s = i.split("\n");
              for (
                a = r = 0;
                r < u.length && !u[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                a < s.length && !s[a].includes("DetermineComponentFrameRoot");

              )
                a++;
              if (r === u.length || a === s.length)
                for (
                  r = u.length - 1, a = s.length - 1;
                  1 <= r && 0 <= a && u[r] !== s[a];

                )
                  a--;
              for (; 1 <= r && 0 <= a; r--, a--)
                if (u[r] !== s[a]) {
                  if (1 !== r || 1 !== a)
                    do {
                      if ((r--, 0 > --a || u[r] !== s[a])) {
                        var c = "\n" + u[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= a);
                  break;
                }
            }
          } finally {
            (z = !1), (Error.prepareStackTrace = n);
          }
          return (n = e ? e.displayName || e.name : "") ? L(n) : "";
        }
        function F(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return L(e.type);
            case 16:
              return L("Lazy");
            case 13:
              return L("Suspense");
            case 19:
              return L("SuspenseList");
            case 0:
            case 15:
              return (e = A(e.type, !1));
            case 11:
              return (e = A(e.type.render, !1));
            case 1:
              return (e = A(e.type, !0));
            default:
              return "";
          }
        }
        function D(e) {
          try {
            var t = "";
            do {
              (t += F(e)), (e = e.return);
            } while (e);
            return t;
          } catch (n) {
            return "\nError generating stack: " + n.message + "\n" + n.stack;
          }
        }
        function M(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function j(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function U(e) {
          if (M(e) !== e) throw Error(o(188));
        }
        function I(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = I(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var B = Array.isArray,
          H = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          q = {
            pending: !1,
            data: null,
            method: null,
            action: null,
          },
          W = [],
          $ = -1;
        function V(e) {
          return {
            current: e,
          };
        }
        function Q(e) {
          0 > $ || ((e.current = W[$]), (W[$] = null), $--);
        }
        function Y(e, t) {
          $++, (W[$] = e.current), (e.current = t);
        }
        var K = V(null),
          G = V(null),
          X = V(null),
          J = V(null);
        function Z(e, t) {
          switch ((Y(X, t), Y(G, e), Y(K, null), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) && (t = t.namespaceURI) ? Gc(t) : 0;
              break;
            default:
              if (
                ((t = (e = 8 === e ? t.parentNode : t).tagName),
                (e = e.namespaceURI))
              )
                t = Xc((e = Gc(e)), t);
              else
                switch (t) {
                  case "svg":
                    t = 1;
                    break;
                  case "math":
                    t = 2;
                    break;
                  default:
                    t = 0;
                }
          }
          Q(K), Y(K, t);
        }
        function ee() {
          Q(K), Q(G), Q(X);
        }
        function te(e) {
          null !== e.memoizedState && Y(J, e);
          var t = K.current,
            n = Xc(t, e.type);
          t !== n && (Y(G, e), Y(K, n));
        }
        function ne(e) {
          G.current === e && (Q(K), Q(G)),
            J.current === e && (Q(J), (Mf._currentValue = q));
        }
        var re = Object.prototype.hasOwnProperty,
          ae = r.unstable_scheduleCallback,
          le = r.unstable_cancelCallback,
          oe = r.unstable_shouldYield,
          ie = r.unstable_requestPaint,
          ue = r.unstable_now,
          se = r.unstable_getCurrentPriorityLevel,
          ce = r.unstable_ImmediatePriority,
          fe = r.unstable_UserBlockingPriority,
          de = r.unstable_NormalPriority,
          pe = r.unstable_LowPriority,
          he = r.unstable_IdlePriority,
          me = r.log,
          ge = r.unstable_setDisableYieldValue,
          ye = null,
          ve = null;
        function be(e) {
          if (
            ("function" === typeof me && ge(e),
            ve && "function" === typeof ve.setStrictMode)
          )
            try {
              ve.setStrictMode(ye, e);
            } catch (t) {}
        }
        var we = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((ke(e) / Se) | 0)) | 0;
              },
          ke = Math.log,
          Se = Math.LN2;
        var Ee = 128,
          xe = 4194304;
        function Ce(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194176 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function _e(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = e.warmLanes;
          e = 0 !== e.finishedLanes;
          var i = 134217727 & n;
          return (
            0 !== i
              ? 0 !== (n = i & ~a)
                ? (r = Ce(n))
                : 0 !== (l &= i)
                ? (r = Ce(l))
                : e || (0 !== (o = i & ~o) && (r = Ce(o)))
              : 0 !== (i = n & ~a)
              ? (r = Ce(i))
              : 0 !== l
              ? (r = Ce(l))
              : e || (0 !== (o = n & ~o) && (r = Ce(o))),
            0 === r
              ? 0
              : 0 !== t &&
                t !== r &&
                0 === (t & a) &&
                ((a = r & -r) >= (o = t & -t) ||
                  (32 === a && 0 !== (4194176 & o)))
              ? t
              : r
          );
        }
        function Te(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function Pe(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
              return t + 250;
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function Ne() {
          var e = Ee;
          return 0 === (4194176 & (Ee <<= 1)) && (Ee = 128), e;
        }
        function Oe() {
          var e = xe;
          return 0 === (62914560 & (xe <<= 1)) && (xe = 4194304), e;
        }
        function Re(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Le(e, t) {
          (e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
        }
        function ze(e, t, n) {
          (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
          var r = 31 - we(t);
          (e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (4194218 & n));
        }
        function Ae(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - we(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        function Fe(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 0 !== (134217727 & e)
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function De() {
          var e = H.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Jf(e.type);
        }
        var Me = Math.random().toString(36).slice(2),
          je = "__reactFiber$" + Me,
          Ue = "__reactProps$" + Me,
          Ie = "__reactContainer$" + Me,
          Be = "__reactEvents$" + Me,
          He = "__reactListeners$" + Me,
          qe = "__reactHandles$" + Me,
          We = "__reactResources$" + Me,
          $e = "__reactMarker$" + Me;
        function Ve(e) {
          delete e[je], delete e[Ue], delete e[Be], delete e[He], delete e[qe];
        }
        function Qe(e) {
          var t = e[je];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Ie] || n[je])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sf(e); null !== e; ) {
                  if ((n = e[je])) return n;
                  e = sf(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ye(e) {
          if ((e = e[je] || e[Ie])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function Ke(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(o(33));
        }
        function Ge(e) {
          var t = e[We];
          return (
            t ||
              (t = e[We] =
                {
                  hoistableStyles: new Map(),
                  hoistableScripts: new Map(),
                }),
            t
          );
        }
        function Xe(e) {
          e[$e] = !0;
        }
        var Je = new Set(),
          Ze = {};
        function et(e, t) {
          tt(e, t), tt(e + "Capture", t);
        }
        function tt(e, t) {
          for (Ze[e] = t, e = 0; e < t.length; e++) Je.add(t[e]);
        }
        var nt = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          rt = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          ),
          at = {},
          lt = {};
        function ot(e, t, n) {
          if (
            ((a = t),
            re.call(lt, a) ||
              (!re.call(at, a) &&
                (rt.test(a) ? (lt[a] = !0) : ((at[a] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var a;
        }
        function it(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function ut(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function st(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ct(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function ft(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ct(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, {
                    enumerable: n.enumerable,
                  }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function dt(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ct(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function pt(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var ht = /[\n"\\]/g;
        function mt(e) {
          return e.replace(ht, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function gt(e, t, n, r, a, l, o, i) {
          (e.name = ""),
            null != o &&
            "function" !== typeof o &&
            "symbol" !== typeof o &&
            "boolean" !== typeof o
              ? (e.type = o)
              : e.removeAttribute("type"),
            null != t
              ? "number" === o
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + st(t))
                : e.value !== "" + st(t) && (e.value = "" + st(t))
              : ("submit" !== o && "reset" !== o) || e.removeAttribute("value"),
            null != t
              ? vt(e, o, st(t))
              : null != n
              ? vt(e, o, st(n))
              : null != r && e.removeAttribute("value"),
            null == a && null != l && (e.defaultChecked = !!l),
            null != a &&
              (e.checked =
                a && "function" !== typeof a && "symbol" !== typeof a),
            null != i &&
            "function" !== typeof i &&
            "symbol" !== typeof i &&
            "boolean" !== typeof i
              ? (e.name = "" + st(i))
              : e.removeAttribute("name");
        }
        function yt(e, t, n, r, a, l, o, i) {
          if (
            (null != l &&
              "function" !== typeof l &&
              "symbol" !== typeof l &&
              "boolean" !== typeof l &&
              (e.type = l),
            null != t || null != n)
          ) {
            if (
              !(
                ("submit" !== l && "reset" !== l) ||
                (void 0 !== t && null !== t)
              )
            )
              return;
            (n = null != n ? "" + st(n) : ""),
              (t = null != t ? "" + st(t) : n),
              i || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          (r =
            "function" !== typeof (r = null != r ? r : a) &&
            "symbol" !== typeof r &&
            !!r),
            (e.checked = i ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != o &&
              "function" !== typeof o &&
              "symbol" !== typeof o &&
              "boolean" !== typeof o &&
              (e.name = o);
        }
        function vt(e, t, n) {
          ("number" === t && pt(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function bt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + st(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function wt(e, t, n) {
          null == t ||
          ((t = "" + st(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + st(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function kt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(o(92));
              if (B(r)) {
                if (1 < r.length) throw Error(o(93));
                r = r[0];
              }
              n = r;
            }
            null == n && (n = ""), (t = n);
          }
          (n = st(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r);
        }
        function St(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var Et = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        );
        function xt(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" === typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
            : r
            ? e.setProperty(t, n)
            : "number" !== typeof n || 0 === n || Et.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
        }
        function Ct(e, t, n) {
          if (null != t && "object" !== typeof t) throw Error(o(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                  ? (e.cssFloat = "")
                  : (e[r] = ""));
            for (var a in t)
              (r = t[a]), t.hasOwnProperty(a) && n[a] !== r && xt(e, a, r);
          } else for (var l in t) t.hasOwnProperty(l) && xt(e, l, t[l]);
        }
        function _t(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Tt = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Pt =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Nt(e) {
          return Pt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        var Ot = null;
        function Rt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Lt = null,
          zt = null;
        function At(e) {
          var t = Ye(e);
          if (t && (e = t.stateNode)) {
            var n = e[Ue] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (gt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + mt("" + t) + '"][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = r[Ue] || null;
                      if (!a) throw Error(o(90));
                      gt(
                        r,
                        a.value,
                        a.defaultValue,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && dt(r);
                }
                break e;
              case "textarea":
                wt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && bt(e, !!n.multiple, t, !1);
            }
          }
        }
        var Ft = !1;
        function Dt(e, t, n) {
          if (Ft) return e(t, n);
          Ft = !0;
          try {
            return e(t);
          } finally {
            if (
              ((Ft = !1),
              (null !== Lt || null !== zt) &&
                (js(), Lt && ((t = Lt), (e = zt), (zt = Lt = null), At(t), e)))
            )
              for (t = 0; t < e.length; t++) At(e[t]);
          }
        }
        function Mt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Ue] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var jt = !1;
        if (nt)
          try {
            var Ut = {};
            Object.defineProperty(Ut, "passive", {
              get: function () {
                jt = !0;
              },
            }),
              window.addEventListener("test", Ut, Ut),
              window.removeEventListener("test", Ut, Ut);
          } catch (Sd) {
            jt = !1;
          }
        var It = null,
          Bt = null,
          Ht = null;
        function qt() {
          if (Ht) return Ht;
          var e,
            t,
            n = Bt,
            r = n.length,
            a = "value" in It ? It.value : It.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return (Ht = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Wt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function $t() {
          return !0;
        }
        function Vt() {
          return !1;
        }
        function Qt(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? $t
                : Vt),
              (this.isPropagationStopped = Vt),
              this
            );
          }
          return (
            R(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = $t));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = $t));
              },
              persist: function () {},
              isPersistent: $t,
            }),
            t
          );
        }
        var Yt,
          Kt,
          Gt,
          Xt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          Jt = Qt(Xt),
          Zt = R({}, Xt, {
            view: 0,
            detail: 0,
          }),
          en = Qt(Zt),
          tn = R({}, Zt, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: pn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== Gt &&
                    (Gt && "mousemove" === e.type
                      ? ((Yt = e.screenX - Gt.screenX),
                        (Kt = e.screenY - Gt.screenY))
                      : (Kt = Yt = 0),
                    (Gt = e)),
                  Yt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Kt;
            },
          }),
          nn = Qt(tn),
          rn = Qt(
            R({}, tn, {
              dataTransfer: 0,
            })
          ),
          an = Qt(
            R({}, Zt, {
              relatedTarget: 0,
            })
          ),
          ln = Qt(
            R({}, Xt, {
              animationName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            })
          ),
          on = Qt(
            R({}, Xt, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          un = Qt(
            R({}, Xt, {
              data: 0,
            })
          ),
          sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          cn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          fn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function dn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = fn[e]) && !!t[e];
        }
        function pn() {
          return dn;
        }
        var hn = Qt(
            R({}, Zt, {
              key: function (e) {
                if (e.key) {
                  var t = sn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Wt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? cn[e.keyCode] || "Unidentified"
                  : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: pn,
              charCode: function (e) {
                return "keypress" === e.type ? Wt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Wt(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            })
          ),
          mn = Qt(
            R({}, tn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          gn = Qt(
            R({}, Zt, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: pn,
            })
          ),
          yn = Qt(
            R({}, Xt, {
              propertyName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            })
          ),
          vn = Qt(
            R({}, tn, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          ),
          bn = Qt(
            R({}, Xt, {
              newState: 0,
              oldState: 0,
            })
          ),
          wn = [9, 13, 27, 32],
          kn = nt && "CompositionEvent" in window,
          Sn = null;
        nt && "documentMode" in document && (Sn = document.documentMode);
        var En = nt && "TextEvent" in window && !Sn,
          xn = nt && (!kn || (Sn && 8 < Sn && 11 >= Sn)),
          Cn = String.fromCharCode(32),
          _n = !1;
        function Tn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== wn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Pn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Nn = !1;
        var On = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Rn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!On[e.type] : "textarea" === t;
        }
        function Ln(e, t, n, r) {
          Lt ? (zt ? zt.push(r) : (zt = [r])) : (Lt = r),
            0 < (t = Dc(t, "onChange")).length &&
              ((n = new Jt("onChange", "change", null, n, r)),
              e.push({
                event: n,
                listeners: t,
              }));
        }
        var zn = null,
          An = null;
        function Fn(e) {
          Pc(e, 0);
        }
        function Dn(e) {
          if (dt(Ke(e))) return e;
        }
        function Mn(e, t) {
          if ("change" === e) return t;
        }
        var jn = !1;
        if (nt) {
          var Un;
          if (nt) {
            var In = "oninput" in document;
            if (!In) {
              var Bn = document.createElement("div");
              Bn.setAttribute("oninput", "return;"),
                (In = "function" === typeof Bn.oninput);
            }
            Un = In;
          } else Un = !1;
          jn = Un && (!document.documentMode || 9 < document.documentMode);
        }
        function Hn() {
          zn && (zn.detachEvent("onpropertychange", qn), (An = zn = null));
        }
        function qn(e) {
          if ("value" === e.propertyName && Dn(An)) {
            var t = [];
            Ln(t, An, e, Rt(e)), Dt(Fn, t);
          }
        }
        function Wn(e, t, n) {
          "focusin" === e
            ? (Hn(), (An = n), (zn = t).attachEvent("onpropertychange", qn))
            : "focusout" === e && Hn();
        }
        function $n(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Dn(An);
        }
        function Vn(e, t) {
          if ("click" === e) return Dn(t);
        }
        function Qn(e, t) {
          if ("input" === e || "change" === e) return Dn(t);
        }
        var Yn =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function Kn(e, t) {
          if (Yn(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!re.call(t, a) || !Yn(e[a], t[a])) return !1;
          }
          return !0;
        }
        function Gn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Xn(e, t) {
          var n,
            r = Gn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return {
                  node: r,
                  offset: t - e,
                };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Gn(r);
          }
        }
        function Jn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? Jn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function Zn(e) {
          for (
            var t = pt(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = pt((e = t.contentWindow).document);
          }
          return t;
        }
        function er(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function tr(e, t) {
          var n = Zn(t);
          t = e.focusedElem;
          var r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            Jn(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && er(t))
              if (
                ((e = r.start),
                void 0 === (n = r.end) && (n = e),
                "selectionStart" in t)
              )
                (t.selectionStart = e),
                  (t.selectionEnd = Math.min(n, t.value.length));
              else if (
                (n =
                  ((e = t.ownerDocument || document) && e.defaultView) ||
                  window).getSelection
              ) {
                n = n.getSelection();
                var a = t.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !n.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = Xn(t, l));
                var o = Xn(t, r);
                a &&
                  o &&
                  (1 !== n.rangeCount ||
                    n.anchorNode !== a.node ||
                    n.anchorOffset !== a.offset ||
                    n.focusNode !== o.node ||
                    n.focusOffset !== o.offset) &&
                  ((e = e.createRange()).setStart(a.node, a.offset),
                  n.removeAllRanges(),
                  l > r
                    ? (n.addRange(e), n.extend(o.node, o.offset))
                    : (e.setEnd(o.node, o.offset), n.addRange(e)));
              }
            for (e = [], n = t; (n = n.parentNode); )
              1 === n.nodeType &&
                e.push({
                  element: n,
                  left: n.scrollLeft,
                  top: n.scrollTop,
                });
            for (
              "function" === typeof t.focus && t.focus(), t = 0;
              t < e.length;
              t++
            )
              ((n = e[t]).element.scrollLeft = n.left),
                (n.element.scrollTop = n.top);
          }
        }
        var nr =
            nt && "documentMode" in document && 11 >= document.documentMode,
          rr = null,
          ar = null,
          lr = null,
          or = !1;
        function ir(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          or ||
            null == rr ||
            rr !== pt(r) ||
            ("selectionStart" in (r = rr) && er(r)
              ? (r = {
                  start: r.selectionStart,
                  end: r.selectionEnd,
                })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (lr && Kn(lr, r)) ||
              ((lr = r),
              0 < (r = Dc(ar, "onSelect")).length &&
                ((t = new Jt("onSelect", "select", null, t, n)),
                e.push({
                  event: t,
                  listeners: r,
                }),
                (t.target = rr))));
        }
        function ur(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var sr = {
            animationend: ur("Animation", "AnimationEnd"),
            animationiteration: ur("Animation", "AnimationIteration"),
            animationstart: ur("Animation", "AnimationStart"),
            transitionrun: ur("Transition", "TransitionRun"),
            transitionstart: ur("Transition", "TransitionStart"),
            transitioncancel: ur("Transition", "TransitionCancel"),
            transitionend: ur("Transition", "TransitionEnd"),
          },
          cr = {},
          fr = {};
        function dr(e) {
          if (cr[e]) return cr[e];
          if (!sr[e]) return e;
          var t,
            n = sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in fr) return (cr[e] = n[t]);
          return e;
        }
        nt &&
          ((fr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete sr.animationend.animation,
            delete sr.animationiteration.animation,
            delete sr.animationstart.animation),
          "TransitionEvent" in window || delete sr.transitionend.transition);
        var pr = dr("animationend"),
          hr = dr("animationiteration"),
          mr = dr("animationstart"),
          gr = dr("transitionrun"),
          yr = dr("transitionstart"),
          vr = dr("transitioncancel"),
          br = dr("transitionend"),
          wr = new Map(),
          kr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
              " "
            );
        function Sr(e, t) {
          wr.set(e, t), et(t, [e]);
        }
        var Er = [],
          xr = 0,
          Cr = 0;
        function _r() {
          for (var e = xr, t = (Cr = xr = 0); t < e; ) {
            var n = Er[t];
            Er[t++] = null;
            var r = Er[t];
            Er[t++] = null;
            var a = Er[t];
            Er[t++] = null;
            var l = Er[t];
            if (((Er[t++] = null), null !== r && null !== a)) {
              var o = r.pending;
              null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
                (r.pending = a);
            }
            0 !== l && Or(n, a, l);
          }
        }
        function Tr(e, t, n, r) {
          (Er[xr++] = e),
            (Er[xr++] = t),
            (Er[xr++] = n),
            (Er[xr++] = r),
            (Cr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r);
        }
        function Pr(e, t, n, r) {
          return Tr(e, t, n, r), Rr(e);
        }
        function Nr(e, t) {
          return Tr(e, null, null, t), Rr(e);
        }
        function Or(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var a = !1, l = e.return; null !== l; )
            (l.childLanes |= n),
              null !== (r = l.alternate) && (r.childLanes |= n),
              22 === l.tag &&
                (null === (e = l.stateNode) || 1 & e._visibility || (a = !0)),
              (e = l),
              (l = l.return);
          a &&
            null !== t &&
            3 === e.tag &&
            ((l = e.stateNode),
            (a = 31 - we(n)),
            null === (e = (l = l.hiddenUpdates)[a]) ? (l[a] = [t]) : e.push(t),
            (t.lane = 536870912 | n));
        }
        function Rr(e) {
          if (50 < Ps) throw ((Ps = 0), (Ns = null), Error(o(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Lr = {},
          zr = new WeakMap();
        function Ar(e, t) {
          if ("object" === typeof e && null !== e) {
            var n = zr.get(e);
            return void 0 !== n
              ? n
              : ((t = {
                  value: e,
                  source: t,
                  stack: D(t),
                }),
                zr.set(e, t),
                t);
          }
          return {
            value: e,
            source: t,
            stack: D(t),
          };
        }
        var Fr = [],
          Dr = 0,
          Mr = null,
          jr = 0,
          Ur = [],
          Ir = 0,
          Br = null,
          Hr = 1,
          qr = "";
        function Wr(e, t) {
          (Fr[Dr++] = jr), (Fr[Dr++] = Mr), (Mr = e), (jr = t);
        }
        function $r(e, t, n) {
          (Ur[Ir++] = Hr), (Ur[Ir++] = qr), (Ur[Ir++] = Br), (Br = e);
          var r = Hr;
          e = qr;
          var a = 32 - we(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - we(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Hr = (1 << (32 - we(t) + a)) | (n << a) | r),
              (qr = l + e);
          } else (Hr = (1 << l) | (n << a) | r), (qr = e);
        }
        function Vr(e) {
          null !== e.return && (Wr(e, 1), $r(e, 1, 0));
        }
        function Qr(e) {
          for (; e === Mr; )
            (Mr = Fr[--Dr]), (Fr[Dr] = null), (jr = Fr[--Dr]), (Fr[Dr] = null);
          for (; e === Br; )
            (Br = Ur[--Ir]),
              (Ur[Ir] = null),
              (qr = Ur[--Ir]),
              (Ur[Ir] = null),
              (Hr = Ur[--Ir]),
              (Ur[Ir] = null);
        }
        var Yr = null,
          Kr = null,
          Gr = !1,
          Xr = null,
          Jr = !1,
          Zr = Error(o(519));
        function ea(e) {
          throw (la(Ar(Error(o(418, "")), e)), Zr);
        }
        function ta(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[je] = e), (t[Ue] = r), n)) {
            case "dialog":
              Nc("cancel", t), Nc("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              Nc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < _c.length; n++) Nc(_c[n], t);
              break;
            case "source":
              Nc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              Nc("error", t), Nc("load", t);
              break;
            case "details":
              Nc("toggle", t);
              break;
            case "input":
              Nc("invalid", t),
                yt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0
                ),
                ft(t);
              break;
            case "select":
              Nc("invalid", t);
              break;
            case "textarea":
              Nc("invalid", t),
                kt(t, r.value, r.defaultValue, r.children),
                ft(t);
          }
          ("string" !== typeof (n = r.children) &&
            "number" !== typeof n &&
            "bigint" !== typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          Hc(t.textContent, n)
            ? (null != r.popover && (Nc("beforetoggle", t), Nc("toggle", t)),
              null != r.onScroll && Nc("scroll", t),
              null != r.onScrollEnd && Nc("scrollend", t),
              null != r.onClick && (t.onclick = qc),
              (t = !0))
            : (t = !1),
            t || ea(e);
        }
        function na(e) {
          for (Yr = e.return; Yr; )
            switch (Yr.tag) {
              case 3:
              case 27:
                return void (Jr = !0);
              case 5:
              case 13:
                return void (Jr = !1);
              default:
                Yr = Yr.return;
            }
        }
        function ra(e) {
          if (e !== Yr) return !1;
          if (!Gr) return na(e), (Gr = !0), !1;
          var t,
            n = !1;
          if (
            ((t = 3 !== e.tag && 27 !== e.tag) &&
              ((t = 5 === e.tag) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  Jc(e.type, e.memoizedProps)),
              (t = !t)),
            t && (n = !0),
            n && Kr && ea(e),
            na(e),
            13 === e.tag)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ("/$" === (t = e.data)) {
                    if (0 === n) {
                      Kr = uf(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
              }
              Kr = null;
            }
          } else Kr = Yr ? uf(e.stateNode.nextSibling) : null;
          return !0;
        }
        function aa() {
          (Kr = Yr = null), (Gr = !1);
        }
        function la(e) {
          null === Xr ? (Xr = [e]) : Xr.push(e);
        }
        var oa = Error(o(460)),
          ia = Error(o(474)),
          ua = {
            then: function () {},
          };
        function sa(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function ca() {}
        function fa(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(ca, ca), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              if ((e = t.reason) === oa) throw Error(o(483));
              throw e;
            default:
              if ("string" === typeof t.status) t.then(ca, ca);
              else {
                if (null !== (e = ts) && 100 < e.shellSuspendCounter)
                  throw Error(o(482));
                ((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "fulfilled"), (n.value = e);
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "rejected"), (n.reason = e);
                      }
                    }
                  );
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  if ((e = t.reason) === oa) throw Error(o(483));
                  throw e;
              }
              throw ((da = t), oa);
          }
        }
        var da = null;
        function pa() {
          if (null === da) throw Error(o(459));
          var e = da;
          return (da = null), e;
        }
        var ha = null,
          ma = 0;
        function ga(e) {
          var t = ma;
          return (ma += 1), null === ha && (ha = []), fa(ha, e, t);
        }
        function ya(e, t) {
          (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
        }
        function va(e, t) {
          if (t.$$typeof === u) throw Error(o(525));
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function ba(e) {
          return (0, e._init)(e._payload);
        }
        function wa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function a(e, t) {
            return ((e = Mu(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 33554434), n)
                    : r
                  : ((t.flags |= 33554434), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 33554434), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Hu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n, r) {
            var l = n.type;
            return l === f
              ? h(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === k &&
                    ba(l) === t.type))
              ? (ya((t = a(t, n.props)), n), (t.return = e), t)
              : (ya((t = Uu(n.type, n.key, n.props, null, e.mode, r)), n),
                (t.return = e),
                t);
          }
          function p(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = qu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function h(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Iu(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function m(e, t, n) {
            if (
              ("string" === typeof t && "" !== t) ||
              "number" === typeof t ||
              "bigint" === typeof t
            )
              return ((t = Hu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case s:
                  return (
                    ya((n = Uu(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case c:
                  return ((t = qu(t, e.mode, n)).return = e), t;
                case k:
                  return m(e, (t = (0, t._init)(t._payload)), n);
              }
              if (B(t) || C(t))
                return ((t = Iu(t, e.mode, n, null)).return = e), t;
              if ("function" === typeof t.then) return m(e, ga(t), n);
              if (t.$$typeof === g) return m(e, _i(e, t), n);
              va(e, t);
            }
            return null;
          }
          function y(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (
              ("string" === typeof n && "" !== n) ||
              "number" === typeof n ||
              "bigint" === typeof n
            )
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case s:
                  return n.key === a ? d(e, t, n, r) : null;
                case c:
                  return n.key === a ? p(e, t, n, r) : null;
                case k:
                  return y(e, t, (n = (a = n._init)(n._payload)), r);
              }
              if (B(n) || C(n)) return null !== a ? null : h(e, t, n, r, null);
              if ("function" === typeof n.then) return y(e, t, ga(n), r);
              if (n.$$typeof === g) return y(e, t, _i(e, n), r);
              va(e, n);
            }
            return null;
          }
          function v(e, t, n, r, a) {
            if (
              ("string" === typeof r && "" !== r) ||
              "number" === typeof r ||
              "bigint" === typeof r
            )
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case s:
                  return d(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case c:
                  return p(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return v(e, t, n, (r = (0, r._init)(r._payload)), a);
              }
              if (B(r) || C(r)) return h(t, (e = e.get(n) || null), r, a, null);
              if ("function" === typeof r.then) return v(e, t, n, ga(r), a);
              if (r.$$typeof === g) return v(e, t, n, _i(t, r), a);
              va(t, r);
            }
            return null;
          }
          function b(u, d, p, h) {
            if (
              ("object" === typeof p &&
                null !== p &&
                p.type === f &&
                null === p.key &&
                (p = p.props.children),
              "object" === typeof p && null !== p)
            ) {
              switch (p.$$typeof) {
                case s:
                  e: {
                    for (var w = p.key; null !== d; ) {
                      if (d.key === w) {
                        if ((w = p.type) === f) {
                          if (7 === d.tag) {
                            n(u, d.sibling),
                              ((h = a(d, p.props.children)).return = u),
                              (u = h);
                            break e;
                          }
                        } else if (
                          d.elementType === w ||
                          ("object" === typeof w &&
                            null !== w &&
                            w.$$typeof === k &&
                            ba(w) === d.type)
                        ) {
                          n(u, d.sibling),
                            ya((h = a(d, p.props)), p),
                            (h.return = u),
                            (u = h);
                          break e;
                        }
                        n(u, d);
                        break;
                      }
                      t(u, d), (d = d.sibling);
                    }
                    p.type === f
                      ? (((h = Iu(p.props.children, u.mode, h, p.key)).return =
                          u),
                        (u = h))
                      : (ya(
                          (h = Uu(p.type, p.key, p.props, null, u.mode, h)),
                          p
                        ),
                        (h.return = u),
                        (u = h));
                  }
                  return i(u);
                case c:
                  e: {
                    for (w = p.key; null !== d; ) {
                      if (d.key === w) {
                        if (
                          4 === d.tag &&
                          d.stateNode.containerInfo === p.containerInfo &&
                          d.stateNode.implementation === p.implementation
                        ) {
                          n(u, d.sibling),
                            ((h = a(d, p.children || [])).return = u),
                            (u = h);
                          break e;
                        }
                        n(u, d);
                        break;
                      }
                      t(u, d), (d = d.sibling);
                    }
                    ((h = qu(p, u.mode, h)).return = u), (u = h);
                  }
                  return i(u);
                case k:
                  return b(u, d, (p = (w = p._init)(p._payload)), h);
              }
              if (B(p))
                return (function (a, o, i, u) {
                  for (
                    var s = null, c = null, f = o, d = (o = 0), p = null;
                    null !== f && d < i.length;
                    d++
                  ) {
                    f.index > d ? ((p = f), (f = null)) : (p = f.sibling);
                    var h = y(a, f, i[d], u);
                    if (null === h) {
                      null === f && (f = p);
                      break;
                    }
                    e && f && null === h.alternate && t(a, f),
                      (o = l(h, o, d)),
                      null === c ? (s = h) : (c.sibling = h),
                      (c = h),
                      (f = p);
                  }
                  if (d === i.length) return n(a, f), Gr && Wr(a, d), s;
                  if (null === f) {
                    for (; d < i.length; d++)
                      null !== (f = m(a, i[d], u)) &&
                        ((o = l(f, o, d)),
                        null === c ? (s = f) : (c.sibling = f),
                        (c = f));
                    return Gr && Wr(a, d), s;
                  }
                  for (f = r(f); d < i.length; d++)
                    null !== (p = v(f, a, d, i[d], u)) &&
                      (e &&
                        null !== p.alternate &&
                        f.delete(null === p.key ? d : p.key),
                      (o = l(p, o, d)),
                      null === c ? (s = p) : (c.sibling = p),
                      (c = p));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return t(a, e);
                      }),
                    Gr && Wr(a, d),
                    s
                  );
                })(u, d, p, h);
              if (C(p)) {
                if ("function" !== typeof (w = C(p))) throw Error(o(150));
                return (function (a, i, u, s) {
                  if (null == u) throw Error(o(151));
                  for (
                    var c = null,
                      f = null,
                      d = i,
                      p = (i = 0),
                      h = null,
                      g = u.next();
                    null !== d && !g.done;
                    p++, g = u.next()
                  ) {
                    d.index > p ? ((h = d), (d = null)) : (h = d.sibling);
                    var b = y(a, d, g.value, s);
                    if (null === b) {
                      null === d && (d = h);
                      break;
                    }
                    e && d && null === b.alternate && t(a, d),
                      (i = l(b, i, p)),
                      null === f ? (c = b) : (f.sibling = b),
                      (f = b),
                      (d = h);
                  }
                  if (g.done) return n(a, d), Gr && Wr(a, p), c;
                  if (null === d) {
                    for (; !g.done; p++, g = u.next())
                      null !== (g = m(a, g.value, s)) &&
                        ((i = l(g, i, p)),
                        null === f ? (c = g) : (f.sibling = g),
                        (f = g));
                    return Gr && Wr(a, p), c;
                  }
                  for (d = r(d); !g.done; p++, g = u.next())
                    null !== (g = v(d, a, p, g.value, s)) &&
                      (e &&
                        null !== g.alternate &&
                        d.delete(null === g.key ? p : g.key),
                      (i = l(g, i, p)),
                      null === f ? (c = g) : (f.sibling = g),
                      (f = g));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(a, e);
                      }),
                    Gr && Wr(a, p),
                    c
                  );
                })(u, d, (p = w.call(p)), h);
              }
              if ("function" === typeof p.then) return b(u, d, ga(p), h);
              if (p.$$typeof === g) return b(u, d, _i(u, p), h);
              va(u, p);
            }
            return ("string" === typeof p && "" !== p) ||
              "number" === typeof p ||
              "bigint" === typeof p
              ? ((p = "" + p),
                null !== d && 6 === d.tag
                  ? (n(u, d.sibling), ((h = a(d, p)).return = u), (u = h))
                  : (n(u, d), ((h = Hu(p, u.mode, h)).return = u), (u = h)),
                i(u))
              : n(u, d);
          }
          return function (e, t, n, r) {
            try {
              ma = 0;
              var a = b(e, t, n, r);
              return (ha = null), a;
            } catch (o) {
              if (o === oa) throw o;
              var l = Fu(29, o, null, e.mode);
              return (l.lanes = r), (l.return = e), l;
            }
          };
        }
        var ka = wa(!0),
          Sa = wa(!1),
          Ea = V(null),
          xa = V(0);
        function Ca(e, t) {
          Y(xa, (e = ss)), Y(Ea, t), (ss = e | t.baseLanes);
        }
        function _a() {
          Y(xa, ss), Y(Ea, Ea.current);
        }
        function Ta() {
          (ss = xa.current), Q(Ea), Q(xa);
        }
        var Pa = V(null),
          Na = null;
        function Oa(e) {
          var t = e.alternate;
          Y(Aa, 1 & Aa.current),
            Y(Pa, e),
            null === Na &&
              (null === t || null !== Ea.current || null !== t.memoizedState) &&
              (Na = e);
        }
        function Ra(e) {
          if (22 === e.tag) {
            if ((Y(Aa, Aa.current), Y(Pa, e), null === Na)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (Na = e);
            }
          } else La();
        }
        function La() {
          Y(Aa, Aa.current), Y(Pa, Pa.current);
        }
        function za(e) {
          Q(Pa), Na === e && (Na = null), Q(Aa);
        }
        var Aa = V(0);
        function Fa(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Da =
            "undefined" !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    (t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      });
                  };
                },
          Ma = r.unstable_scheduleCallback,
          ja = r.unstable_NormalPriority,
          Ua = {
            $$typeof: g,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Ia() {
          return {
            controller: new Da(),
            data: new Map(),
            refCount: 0,
          };
        }
        function Ba(e) {
          e.refCount--,
            0 === e.refCount &&
              Ma(ja, function () {
                e.controller.abort();
              });
        }
        var Ha = null,
          qa = 0,
          Wa = 0,
          $a = null;
        function Va() {
          if (0 === --qa && null !== Ha) {
            null !== $a && ($a.status = "fulfilled");
            var e = Ha;
            (Ha = null), (Wa = 0), ($a = null);
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Qa = O.S;
        O.S = function (e, t) {
          "object" === typeof t &&
            null !== t &&
            "function" === typeof t.then &&
            (function (e, t) {
              if (null === Ha) {
                var n = (Ha = []);
                (qa = 0),
                  (Wa = kc()),
                  ($a = {
                    status: "pending",
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  });
              }
              qa++, t.then(Va, Va);
            })(0, t),
            null !== Qa && Qa(e, t);
        };
        var Ya = V(null);
        function Ka() {
          var e = Ya.current;
          return null !== e ? e : ts.pooledCache;
        }
        function Ga(e, t) {
          Y(Ya, null === t ? Ya.current : t.pool);
        }
        function Xa() {
          var e = Ka();
          return null === e
            ? null
            : {
                parent: Ua._currentValue,
                pool: e,
              };
        }
        var Ja = 0,
          Za = null,
          el = null,
          tl = null,
          nl = !1,
          rl = !1,
          al = !1,
          ll = 0,
          ol = 0,
          il = null,
          ul = 0;
        function sl() {
          throw Error(o(321));
        }
        function cl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Yn(e[n], t[n])) return !1;
          return !0;
        }
        function fl(e, t, n, r, a, l) {
          return (
            (Ja = l),
            (Za = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (O.H = null === e || null === e.memoizedState ? _o : To),
            (al = !1),
            (l = n(r, a)),
            (al = !1),
            rl && (l = pl(t, n, r, a)),
            dl(e),
            l
          );
        }
        function dl(e) {
          O.H = Co;
          var t = null !== el && null !== el.next;
          if (
            ((Ja = 0),
            (tl = el = Za = null),
            (nl = !1),
            (ol = 0),
            (il = null),
            t)
          )
            throw Error(o(300));
          null === e ||
            Wo ||
            (null !== (e = e.dependencies) && Ei(e) && (Wo = !0));
        }
        function pl(e, t, n, r) {
          Za = e;
          var a = 0;
          do {
            if ((rl && (il = null), (ol = 0), (rl = !1), 25 <= a))
              throw Error(o(301));
            if (((a += 1), (tl = el = null), null != e.updateQueue)) {
              var l = e.updateQueue;
              (l.lastEffect = null),
                (l.events = null),
                (l.stores = null),
                null != l.memoCache && (l.memoCache.index = 0);
            }
            (O.H = Po), (l = t(n, r));
          } while (rl);
          return l;
        }
        function hl() {
          var e = O.H,
            t = e.useState()[0];
          return (
            (t = "function" === typeof t.then ? wl(t) : t),
            (e = e.useState()[0]),
            (null !== el ? el.memoizedState : null) !== e && (Za.flags |= 1024),
            t
          );
        }
        function ml() {
          var e = 0 !== ll;
          return (ll = 0), e;
        }
        function gl(e, t, n) {
          (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
        }
        function yl(e) {
          if (nl) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              null !== t && (t.pending = null), (e = e.next);
            }
            nl = !1;
          }
          (Ja = 0),
            (tl = el = Za = null),
            (rl = !1),
            (ol = ll = 0),
            (il = null);
        }
        function vl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === tl ? (Za.memoizedState = tl = e) : (tl = tl.next = e), tl
          );
        }
        function bl() {
          if (null === el) {
            var e = Za.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = el.next;
          var t = null === tl ? Za.memoizedState : tl.next;
          if (null !== t) (tl = t), (el = e);
          else {
            if (null === e) {
              if (null === Za.alternate) throw Error(o(467));
              throw Error(o(310));
            }
            (e = {
              memoizedState: (el = e).memoizedState,
              baseState: el.baseState,
              baseQueue: el.baseQueue,
              queue: el.queue,
              next: null,
            }),
              null === tl ? (Za.memoizedState = tl = e) : (tl = tl.next = e);
          }
          return tl;
        }
        function wl(e) {
          var t = ol;
          return (
            (ol += 1),
            null === il && (il = []),
            (e = fa(il, e, t)),
            (t = Za),
            null === (null === tl ? t.memoizedState : tl.next) &&
              ((t = t.alternate),
              (O.H = null === t || null === t.memoizedState ? _o : To)),
            e
          );
        }
        function kl(e) {
          if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then) return wl(e);
            if (e.$$typeof === g) return Ci(e);
          }
          throw Error(o(438, String(e)));
        }
        function Sl(e) {
          var t = null,
            n = Za.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = Za.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t &&
              (t = {
                data: [],
                index: 0,
              }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Za.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = E;
          return t.index++, n;
        }
        function El(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function xl(e) {
          return Cl(bl(), el, e);
        }
        function Cl(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(o(311));
          r.lastRenderedReducer = n;
          var a = e.baseQueue,
            l = r.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (t.baseQueue = a = l), (r.pending = null);
          }
          if (((l = e.baseState), null === a)) e.memoizedState = l;
          else {
            var u = (i = null),
              s = null,
              c = (t = a.next),
              f = !1;
            do {
              var d = -536870913 & c.lane;
              if (d !== c.lane ? (rs & d) === d : (Ja & d) === d) {
                var p = c.revertLane;
                if (0 === p)
                  null !== s &&
                    (s = s.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    d === Wa && (f = !0);
                else {
                  if ((Ja & p) === p) {
                    (c = c.next), p === Wa && (f = !0);
                    continue;
                  }
                  (d = {
                    lane: 0,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === s ? ((u = s = d), (i = l)) : (s = s.next = d),
                    (Za.lanes |= p),
                    (fs |= p);
                }
                (d = c.action),
                  al && n(l, d),
                  (l = c.hasEagerState ? c.eagerState : n(l, d));
              } else
                (p = {
                  lane: d,
                  revertLane: c.revertLane,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === s ? ((u = s = p), (i = l)) : (s = s.next = p),
                  (Za.lanes |= d),
                  (fs |= d);
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === s ? (i = l) : (s.next = u),
              !Yn(l, e.memoizedState) && ((Wo = !0), f && null !== (n = $a)))
            )
              throw n;
            (e.memoizedState = l),
              (e.baseState = i),
              (e.baseQueue = s),
              (r.lastRenderedState = l);
          }
          return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch];
        }
        function _l(e) {
          var t = bl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            Yn(l, t.memoizedState) || (Wo = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Tl(e, t, n) {
          var r = Za,
            a = bl(),
            l = Gr;
          if (l) {
            if (void 0 === n) throw Error(o(407));
            n = n();
          } else n = t();
          var i = !Yn((el || a).memoizedState, n);
          if (
            (i && ((a.memoizedState = n), (Wo = !0)),
            (a = a.queue),
            Jl(Ol.bind(null, r, a, e), [e]),
            a.getSnapshot !== t ||
              i ||
              (null !== tl && 1 & tl.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Ql(
                9,
                Nl.bind(null, r, a, n, t),
                {
                  destroy: void 0,
                },
                null
              ),
              null === ts)
            )
              throw Error(o(349));
            l || 0 !== (60 & Ja) || Pl(r, t, n);
          }
          return n;
        }
        function Pl(e, t, n) {
          (e.flags |= 16384),
            (e = {
              getSnapshot: t,
              value: n,
            }),
            null === (t = Za.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (Za.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Nl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Rl(t) && Ll(e);
        }
        function Ol(e, t, n) {
          return n(function () {
            Rl(t) && Ll(e);
          });
        }
        function Rl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Yn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ll(e) {
          var t = Nr(e, 2);
          null !== t && Ls(t, e, 2);
        }
        function zl(e) {
          var t = vl();
          if ("function" === typeof e) {
            var n = e;
            if (((e = n()), al)) {
              be(!0);
              try {
                n();
              } finally {
                be(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: El,
              lastRenderedState: e,
            }),
            t
          );
        }
        function Al(e, t, n, r) {
          return (e.baseState = n), Cl(e, el, "function" === typeof r ? r : El);
        }
        function Fl(e, t, n, r, a) {
          if (So(e)) throw Error(o(485));
          if (null !== (e = t.action)) {
            var l = {
              payload: a,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                l.listeners.push(e);
              },
            };
            null !== O.T ? n(!0) : (l.isTransition = !1),
              r(l),
              null === (n = t.pending)
                ? ((l.next = t.pending = l), Dl(t, l))
                : ((l.next = n.next), (t.pending = n.next = l));
          }
        }
        function Dl(e, t) {
          var n = t.action,
            r = t.payload,
            a = e.state;
          if (t.isTransition) {
            var l = O.T,
              o = {};
            O.T = o;
            try {
              var i = n(a, r),
                u = O.S;
              null !== u && u(o, i), Ml(e, t, i);
            } catch (s) {
              Ul(e, t, s);
            } finally {
              O.T = l;
            }
          } else
            try {
              Ml(e, t, (l = n(a, r)));
            } catch (c) {
              Ul(e, t, c);
            }
        }
        function Ml(e, t, n) {
          null !== n && "object" === typeof n && "function" === typeof n.then
            ? n.then(
                function (n) {
                  jl(e, t, n);
                },
                function (n) {
                  return Ul(e, t, n);
                }
              )
            : jl(e, t, n);
        }
        function jl(e, t, n) {
          (t.status = "fulfilled"),
            (t.value = n),
            Il(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), Dl(e, n)));
        }
        function Ul(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              (t.status = "rejected"), (t.reason = n), Il(t), (t = t.next);
            } while (t !== r);
          }
          e.action = null;
        }
        function Il(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function Bl(e, t) {
          return t;
        }
        function Hl(e, t) {
          if (Gr) {
            var n = ts.formState;
            if (null !== n) {
              e: {
                var r = Za;
                if (Gr) {
                  if (Kr) {
                    t: {
                      for (var a = Kr, l = Jr; 8 !== a.nodeType; ) {
                        if (!l) {
                          a = null;
                          break t;
                        }
                        if (null === (a = uf(a.nextSibling))) {
                          a = null;
                          break t;
                        }
                      }
                      a = "F!" === (l = a.data) || "F" === l ? a : null;
                    }
                    if (a) {
                      (Kr = uf(a.nextSibling)), (r = "F!" === a.data);
                      break e;
                    }
                  }
                  ea(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = vl()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Bl,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = bo.bind(null, Za, r)),
            (r.dispatch = n),
            (r = zl(!1)),
            (l = ko.bind(null, Za, !1, r.queue)),
            (a = {
              state: t,
              dispatch: null,
              action: e,
              pending: null,
            }),
            ((r = vl()).queue = a),
            (n = Fl.bind(null, Za, a, l, n)),
            (a.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function ql(e) {
          return Wl(bl(), el, e);
        }
        function Wl(e, t, n) {
          (t = Cl(e, t, Bl)[0]),
            (e = xl(El)[0]),
            (t =
              "object" === typeof t &&
              null !== t &&
              "function" === typeof t.then
                ? wl(t)
                : t);
          var r = bl(),
            a = r.queue,
            l = a.dispatch;
          return (
            n !== r.memoizedState &&
              ((Za.flags |= 2048),
              Ql(
                9,
                $l.bind(null, a, n),
                {
                  destroy: void 0,
                },
                null
              )),
            [t, l, e]
          );
        }
        function $l(e, t) {
          e.action = t;
        }
        function Vl(e) {
          var t = bl(),
            n = el;
          if (null !== n) return Wl(t, n, e);
          bl(), (t = t.memoizedState);
          var r = (n = bl()).queue.dispatch;
          return (n.memoizedState = e), [t, r, !1];
        }
        function Ql(e, t, n, r) {
          return (
            (e = {
              tag: e,
              create: t,
              inst: n,
              deps: r,
              next: null,
            }),
            null === (t = Za.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Za.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Yl() {
          return bl().memoizedState;
        }
        function Kl(e, t, n, r) {
          var a = vl();
          (Za.flags |= e),
            (a.memoizedState = Ql(
              1 | t,
              n,
              {
                destroy: void 0,
              },
              void 0 === r ? null : r
            ));
        }
        function Gl(e, t, n, r) {
          var a = bl();
          r = void 0 === r ? null : r;
          var l = a.memoizedState.inst;
          null !== el && null !== r && cl(r, el.memoizedState.deps)
            ? (a.memoizedState = Ql(t, n, l, r))
            : ((Za.flags |= e), (a.memoizedState = Ql(1 | t, n, l, r)));
        }
        function Xl(e, t) {
          Kl(8390656, 8, e, t);
        }
        function Jl(e, t) {
          Gl(2048, 8, e, t);
        }
        function Zl(e, t) {
          return Gl(4, 2, e, t);
        }
        function eo(e, t) {
          return Gl(4, 4, e, t);
        }
        function to(e, t) {
          if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function no(e, t, n) {
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Gl(4, 4, to.bind(null, t, e), n);
        }
        function ro() {}
        function ao(e, t) {
          var n = bl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && cl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function lo(e, t) {
          var n = bl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && cl(t, r[1])) return r[0];
          if (((r = e()), al)) {
            be(!0);
            try {
              e();
            } finally {
              be(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        }
        function oo(e, t, n) {
          return void 0 === n || 0 !== (1073741824 & Ja)
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = Rs()),
              (Za.lanes |= e),
              (fs |= e),
              n);
        }
        function io(e, t, n, r) {
          return Yn(n, t)
            ? n
            : null !== Ea.current
            ? ((e = oo(e, n, r)), Yn(e, t) || (Wo = !0), e)
            : 0 === (42 & Ja)
            ? ((Wo = !0), (e.memoizedState = n))
            : ((e = Rs()), (Za.lanes |= e), (fs |= e), t);
        }
        function uo(e, t, n, r, a) {
          var l = H.p;
          H.p = 0 !== l && 8 > l ? l : 8;
          var o = O.T,
            i = {};
          (O.T = i), ko(e, !1, t, n);
          try {
            var u = a(),
              s = O.S;
            if (
              (null !== s && s(i, u),
              null !== u &&
                "object" === typeof u &&
                "function" === typeof u.then)
            )
              wo(
                e,
                t,
                (function (e, t) {
                  var n = [],
                    r = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        n.push(e);
                      },
                    };
                  return (
                    e.then(
                      function () {
                        (r.status = "fulfilled"), (r.value = t);
                        for (var e = 0; e < n.length; e++) (0, n[e])(t);
                      },
                      function (e) {
                        for (
                          r.status = "rejected", r.reason = e, e = 0;
                          e < n.length;
                          e++
                        )
                          (0, n[e])(void 0);
                      }
                    ),
                    r
                  );
                })(u, r),
                Os()
              );
            else wo(e, t, r, Os());
          } catch (c) {
            wo(
              e,
              t,
              {
                then: function () {},
                status: "rejected",
                reason: c,
              },
              Os()
            );
          } finally {
            (H.p = l), (O.T = o);
          }
        }
        function so() {}
        function co(e, t, n, r) {
          if (5 !== e.tag) throw Error(o(476));
          var a = fo(e).queue;
          uo(
            e,
            a,
            t,
            q,
            null === n
              ? so
              : function () {
                  return po(e), n(r);
                }
          );
        }
        function fo(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: q,
              baseState: q,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: El,
                lastRenderedState: q,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: El,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function po(e) {
          wo(e, fo(e).next.queue, {}, Os());
        }
        function ho() {
          return Ci(Mf);
        }
        function mo() {
          return bl().memoizedState;
        }
        function go() {
          return bl().memoizedState;
        }
        function yo(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Os(),
                  r = Li(t, (e = Ri(n)), n);
                return (
                  null !== r && (Ls(r, t, n), zi(r, t, n)),
                  (t = {
                    cache: Ia(),
                  }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function vo(e, t, n) {
          var r = Os();
          (n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            So(e)
              ? Eo(t, n)
              : null !== (n = Pr(e, t, n, r)) && (Ls(n, e, r), xo(n, t, r));
        }
        function bo(e, t, n) {
          wo(e, t, n, Os());
        }
        function wo(e, t, n, r) {
          var a = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (So(e)) Eo(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), Yn(i, o)))
                  return Tr(e, t, a, 0), null === ts && _r(), !1;
              } catch (u) {}
            if (null !== (n = Pr(e, t, a, r)))
              return Ls(n, e, r), xo(n, t, r), !0;
          }
          return !1;
        }
        function ko(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: kc(),
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            So(e))
          ) {
            if (t) throw Error(o(479));
          } else null !== (t = Pr(e, n, r, 2)) && Ls(t, e, 2);
        }
        function So(e) {
          var t = e.alternate;
          return e === Za || (null !== t && t === Za);
        }
        function Eo(e, t) {
          rl = nl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function xo(e, t, n) {
          if (0 !== (4194176 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Ae(e, n);
          }
        }
        var Co = {
          readContext: Ci,
          use: kl,
          useCallback: sl,
          useContext: sl,
          useEffect: sl,
          useImperativeHandle: sl,
          useLayoutEffect: sl,
          useInsertionEffect: sl,
          useMemo: sl,
          useReducer: sl,
          useRef: sl,
          useState: sl,
          useDebugValue: sl,
          useDeferredValue: sl,
          useTransition: sl,
          useSyncExternalStore: sl,
          useId: sl,
        };
        (Co.useCacheRefresh = sl),
          (Co.useMemoCache = sl),
          (Co.useHostTransitionStatus = sl),
          (Co.useFormState = sl),
          (Co.useActionState = sl),
          (Co.useOptimistic = sl);
        var _o = {
          readContext: Ci,
          use: kl,
          useCallback: function (e, t) {
            return (vl().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: Ci,
          useEffect: Xl,
          useImperativeHandle: function (e, t, n) {
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              Kl(4194308, 4, to.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return Kl(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            Kl(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = vl();
            t = void 0 === t ? null : t;
            var r = e();
            if (al) {
              be(!0);
              try {
                e();
              } finally {
                be(!1);
              }
            }
            return (n.memoizedState = [r, t]), r;
          },
          useReducer: function (e, t, n) {
            var r = vl();
            if (void 0 !== n) {
              var a = n(t);
              if (al) {
                be(!0);
                try {
                  n(t);
                } finally {
                  be(!1);
                }
              }
            } else a = t;
            return (
              (r.memoizedState = r.baseState = a),
              (e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: a,
              }),
              (r.queue = e),
              (e = e.dispatch = vo.bind(null, Za, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (
              (e = {
                current: e,
              }),
              (vl().memoizedState = e)
            );
          },
          useState: function (e) {
            var t = (e = zl(e)).queue,
              n = bo.bind(null, Za, t);
            return (t.dispatch = n), [e.memoizedState, n];
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            return oo(vl(), e, t);
          },
          useTransition: function () {
            var e = zl(!1);
            return (
              (e = uo.bind(null, Za, e.queue, !0, !1)),
              (vl().memoizedState = e),
              [!1, e]
            );
          },
          useSyncExternalStore: function (e, t, n) {
            var r = Za,
              a = vl();
            if (Gr) {
              if (void 0 === n) throw Error(o(407));
              n = n();
            } else {
              if (((n = t()), null === ts)) throw Error(o(349));
              0 !== (60 & rs) || Pl(r, t, n);
            }
            a.memoizedState = n;
            var l = {
              value: n,
              getSnapshot: t,
            };
            return (
              (a.queue = l),
              Xl(Ol.bind(null, r, l, e), [e]),
              (r.flags |= 2048),
              Ql(
                9,
                Nl.bind(null, r, l, n, t),
                {
                  destroy: void 0,
                },
                null
              ),
              n
            );
          },
          useId: function () {
            var e = vl(),
              t = ts.identifierPrefix;
            if (Gr) {
              var n = qr;
              (t =
                ":" +
                t +
                "R" +
                (n = (Hr & ~(1 << (32 - we(Hr) - 1))).toString(32) + n)),
                0 < (n = ll++) && (t += "H" + n.toString(32)),
                (t += ":");
            } else t = ":" + t + "r" + (n = ul++).toString(32) + ":";
            return (e.memoizedState = t);
          },
          useCacheRefresh: function () {
            return (vl().memoizedState = yo.bind(null, Za));
          },
        };
        (_o.useMemoCache = Sl),
          (_o.useHostTransitionStatus = ho),
          (_o.useFormState = Hl),
          (_o.useActionState = Hl),
          (_o.useOptimistic = function (e) {
            var t = vl();
            t.memoizedState = t.baseState = e;
            var n = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null,
            };
            return (
              (t.queue = n),
              (t = ko.bind(null, Za, !0, n)),
              (n.dispatch = t),
              [e, t]
            );
          });
        var To = {
          readContext: Ci,
          use: kl,
          useCallback: ao,
          useContext: Ci,
          useEffect: Jl,
          useImperativeHandle: no,
          useInsertionEffect: Zl,
          useLayoutEffect: eo,
          useMemo: lo,
          useReducer: xl,
          useRef: Yl,
          useState: function () {
            return xl(El);
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            return io(bl(), el.memoizedState, e, t);
          },
          useTransition: function () {
            var e = xl(El)[0],
              t = bl().memoizedState;
            return ["boolean" === typeof e ? e : wl(e), t];
          },
          useSyncExternalStore: Tl,
          useId: mo,
        };
        (To.useCacheRefresh = go),
          (To.useMemoCache = Sl),
          (To.useHostTransitionStatus = ho),
          (To.useFormState = ql),
          (To.useActionState = ql),
          (To.useOptimistic = function (e, t) {
            return Al(bl(), 0, e, t);
          });
        var Po = {
          readContext: Ci,
          use: kl,
          useCallback: ao,
          useContext: Ci,
          useEffect: Jl,
          useImperativeHandle: no,
          useInsertionEffect: Zl,
          useLayoutEffect: eo,
          useMemo: lo,
          useReducer: _l,
          useRef: Yl,
          useState: function () {
            return _l(El);
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            var n = bl();
            return null === el ? oo(n, e, t) : io(n, el.memoizedState, e, t);
          },
          useTransition: function () {
            var e = _l(El)[0],
              t = bl().memoizedState;
            return ["boolean" === typeof e ? e : wl(e), t];
          },
          useSyncExternalStore: Tl,
          useId: mo,
        };
        function No(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : R({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        (Po.useCacheRefresh = go),
          (Po.useMemoCache = Sl),
          (Po.useHostTransitionStatus = ho),
          (Po.useFormState = Vl),
          (Po.useActionState = Vl),
          (Po.useOptimistic = function (e, t) {
            var n = bl();
            return null !== el
              ? Al(n, 0, e, t)
              : ((n.baseState = e), [e, n.queue.dispatch]);
          });
        var Oo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && M(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Os(),
              a = Ri(r);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Li(e, a, r)) && (Ls(t, e, r), zi(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Os(),
              a = Ri(r);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Li(e, a, r)) && (Ls(t, e, r), zi(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Os(),
              r = Ri(n);
            (r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = Li(e, r, n)) && (Ls(t, e, n), zi(t, e, n));
          },
        };
        function Ro(e, t, n, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Kn(n, r) ||
                !Kn(a, l);
        }
        function Lo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Oo.enqueueReplaceState(t, t.state, null);
        }
        function zo(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var a in (n === t && (n = R({}, n)), e))
              void 0 === n[a] && (n[a] = e[a]);
          return n;
        }
        var Ao =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function Fo(e) {
          Ao(e);
        }
        function Do(e) {
          console.error(e);
        }
        function Mo(e) {
          Ao(e);
        }
        function jo(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, {
              componentStack: t.stack,
            });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function Uo(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function Io(e, t, n) {
          return (
            ((n = Ri(n)).tag = 3),
            (n.payload = {
              element: null,
            }),
            (n.callback = function () {
              jo(e, t);
            }),
            n
          );
        }
        function Bo(e) {
          return ((e = Ri(e)).tag = 3), e;
        }
        function Ho(e, t, n, r) {
          var a = n.type.getDerivedStateFromError;
          if ("function" === typeof a) {
            var l = r.value;
            (e.payload = function () {
              return a(l);
            }),
              (e.callback = function () {
                Uo(t, n, r);
              });
          }
          var o = n.stateNode;
          null !== o &&
            "function" === typeof o.componentDidCatch &&
            (e.callback = function () {
              Uo(t, n, r),
                "function" !== typeof a &&
                  (null === Ss ? (Ss = new Set([this])) : Ss.add(this));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var qo = Error(o(461)),
          Wo = !1;
        function $o(e, t, n, r) {
          t.child = null === e ? Sa(t, null, n, r) : ka(t, e.child, n, r);
        }
        function Vo(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          if ("ref" in r) {
            var o = {};
            for (var i in r) "ref" !== i && (o[i] = r[i]);
          } else o = r;
          return (
            xi(t),
            (r = fl(e, t, n, o, l, a)),
            (i = ml()),
            null === e || Wo
              ? (Gr && i && Vr(t), (t.flags |= 1), $o(e, t, r, a), t.child)
              : (gl(e, t, a), di(e, t, a))
          );
        }
        function Qo(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              Du(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare
              ? (((e = Uu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Yo(e, t, l, r, a));
          }
          if (((l = e.child), !pi(e, a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Kn)(o, r) &&
              e.ref === t.ref
            )
              return di(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Mu(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Yo(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (Kn(l, r) && e.ref === t.ref) {
              if (((Wo = !1), (t.pendingProps = r = l), !pi(e, a)))
                return (t.lanes = e.lanes), di(e, t, a);
              0 !== (131072 & e.flags) && (Wo = !0);
            }
          }
          return Jo(e, t, n, r, a);
        }
        function Ko(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = 0 !== (2 & t.stateNode._pendingVisibility),
            o = null !== e ? e.memoizedState : null;
          if ((Xo(e, t), "hidden" === r.mode || l)) {
            if (0 !== (128 & t.flags)) {
              if (((r = null !== o ? o.baseLanes | n : n), null !== e)) {
                for (a = t.child = e.child, l = 0; null !== a; )
                  (l = l | a.lanes | a.childLanes), (a = a.sibling);
                t.childLanes = l & ~r;
              } else (t.childLanes = 0), (t.child = null);
              return Go(e, t, r, n);
            }
            if (0 === (536870912 & n))
              return (
                (t.lanes = t.childLanes = 536870912),
                Go(e, t, null !== o ? o.baseLanes | n : n, n)
              );
            (t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
            }),
              null !== e && Ga(0, null !== o ? o.cachePool : null),
              null !== o ? Ca(t, o) : _a(),
              Ra(t);
          } else
            null !== o
              ? (Ga(0, o.cachePool), Ca(t, o), La(), (t.memoizedState = null))
              : (null !== e && Ga(0, null), _a(), La());
          return $o(e, t, a, n), t.child;
        }
        function Go(e, t, n, r) {
          var a = Ka();
          return (
            (a =
              null === a
                ? null
                : {
                    parent: Ua._currentValue,
                    pool: a,
                  }),
            (t.memoizedState = {
              baseLanes: n,
              cachePool: a,
            }),
            null !== e && Ga(0, null),
            _a(),
            Ra(t),
            null !== e && Si(e, t, r, !0),
            null
          );
        }
        function Xo(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 2097664);
          else {
            if ("function" !== typeof n && "object" !== typeof n)
              throw Error(o(284));
            (null !== e && e.ref === n) || (t.flags |= 2097664);
          }
        }
        function Jo(e, t, n, r, a) {
          return (
            xi(t),
            (n = fl(e, t, n, r, void 0, a)),
            (r = ml()),
            null === e || Wo
              ? (Gr && r && Vr(t), (t.flags |= 1), $o(e, t, n, a), t.child)
              : (gl(e, t, a), di(e, t, a))
          );
        }
        function Zo(e, t, n, r, a, l) {
          return (
            xi(t),
            (t.updateQueue = null),
            (n = pl(t, r, n, a)),
            dl(e),
            (r = ml()),
            null === e || Wo
              ? (Gr && r && Vr(t), (t.flags |= 1), $o(e, t, n, l), t.child)
              : (gl(e, t, l), di(e, t, l))
          );
        }
        function ei(e, t, n, r, a) {
          if ((xi(t), null === t.stateNode)) {
            var l = Lr,
              o = n.contextType;
            "object" === typeof o && null !== o && (l = Ci(o)),
              (l = new n(r, l)),
              (t.memoizedState =
                null !== l.state && void 0 !== l.state ? l.state : null),
              (l.updater = Oo),
              (t.stateNode = l),
              (l._reactInternals = t),
              ((l = t.stateNode).props = r),
              (l.state = t.memoizedState),
              (l.refs = {}),
              Ni(t),
              (o = n.contextType),
              (l.context = "object" === typeof o && null !== o ? Ci(o) : Lr),
              (l.state = t.memoizedState),
              "function" === typeof (o = n.getDerivedStateFromProps) &&
                (No(t, n, o, r), (l.state = t.memoizedState)),
              "function" === typeof n.getDerivedStateFromProps ||
                "function" === typeof l.getSnapshotBeforeUpdate ||
                ("function" !== typeof l.UNSAFE_componentWillMount &&
                  "function" !== typeof l.componentWillMount) ||
                ((o = l.state),
                "function" === typeof l.componentWillMount &&
                  l.componentWillMount(),
                "function" === typeof l.UNSAFE_componentWillMount &&
                  l.UNSAFE_componentWillMount(),
                o !== l.state && Oo.enqueueReplaceState(l, l.state, null),
                Mi(t, r, l, a),
                Di(),
                (l.state = t.memoizedState)),
              "function" === typeof l.componentDidMount && (t.flags |= 4194308),
              (r = !0);
          } else if (null === e) {
            l = t.stateNode;
            var i = t.memoizedProps,
              u = zo(n, i);
            l.props = u;
            var s = l.context,
              c = n.contextType;
            (o = Lr), "object" === typeof c && null !== c && (o = Ci(c));
            var f = n.getDerivedStateFromProps;
            (c =
              "function" === typeof f ||
              "function" === typeof l.getSnapshotBeforeUpdate),
              (i = t.pendingProps !== i),
              c ||
                ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof l.componentWillReceiveProps) ||
                ((i || s !== o) && Lo(t, l, r, o)),
              (Pi = !1);
            var d = t.memoizedState;
            (l.state = d),
              Mi(t, r, l, a),
              Di(),
              (s = t.memoizedState),
              i || d !== s || Pi
                ? ("function" === typeof f &&
                    (No(t, n, f, r), (s = t.memoizedState)),
                  (u = Pi || Ro(t, n, u, r, d, s, o))
                    ? (c ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (l.props = r),
                  (l.state = s),
                  (l.context = o),
                  (r = u))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              Oi(e, t),
              (c = zo(n, (o = t.memoizedProps))),
              (l.props = c),
              (f = t.pendingProps),
              (d = l.context),
              (s = n.contextType),
              (u = Lr),
              "object" === typeof s && null !== s && (u = Ci(s)),
              (s =
                "function" === typeof (i = n.getDerivedStateFromProps) ||
                "function" === typeof l.getSnapshotBeforeUpdate) ||
                ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof l.componentWillReceiveProps) ||
                ((o !== f || d !== u) && Lo(t, l, r, u)),
              (Pi = !1),
              (d = t.memoizedState),
              (l.state = d),
              Mi(t, r, l, a),
              Di();
            var p = t.memoizedState;
            o !== f ||
            d !== p ||
            Pi ||
            (null !== e && null !== e.dependencies && Ei(e.dependencies))
              ? ("function" === typeof i &&
                  (No(t, n, i, r), (p = t.memoizedState)),
                (c =
                  Pi ||
                  Ro(t, n, c, r, d, p, u) ||
                  (null !== e && null !== e.dependencies && Ei(e.dependencies)))
                  ? (s ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, p, u),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, p, u)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (l.props = r),
                (l.state = p),
                (l.context = u),
                (r = c))
              : ("function" !== typeof l.componentDidUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (l = r),
            Xo(e, t),
            (r = 0 !== (128 & t.flags)),
            l || r
              ? ((l = t.stateNode),
                (n =
                  r && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : l.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = ka(t, e.child, null, a)),
                    (t.child = ka(t, null, n, a)))
                  : $o(e, t, n, a),
                (t.memoizedState = l.state),
                (e = t.child))
              : (e = di(e, t, a)),
            e
          );
        }
        function ti(e, t, n, r) {
          return aa(), (t.flags |= 256), $o(e, t, n, r), t.child;
        }
        var ni = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
        };
        function ri(e) {
          return {
            baseLanes: e,
            cachePool: Xa(),
          };
        }
        function ai(e, t, n) {
          return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= hs), e;
        }
        function li(e, t, n) {
          var r,
            a = t.pendingProps,
            l = !1,
            i = 0 !== (128 & t.flags);
          if (
            ((r = i) ||
              (r =
                (null === e || null !== e.memoizedState) &&
                0 !== (2 & Aa.current)),
            r && ((l = !0), (t.flags &= -129)),
            (r = 0 !== (32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (Gr) {
              if ((l ? Oa(t) : La(), Gr)) {
                var u,
                  s = Kr;
                if ((u = s)) {
                  e: {
                    for (u = s, s = Jr; 8 !== u.nodeType; ) {
                      if (!s) {
                        s = null;
                        break e;
                      }
                      if (null === (u = uf(u.nextSibling))) {
                        s = null;
                        break e;
                      }
                    }
                    s = u;
                  }
                  null !== s
                    ? ((t.memoizedState = {
                        dehydrated: s,
                        treeContext:
                          null !== Br
                            ? {
                                id: Hr,
                                overflow: qr,
                              }
                            : null,
                        retryLane: 536870912,
                      }),
                      ((u = Fu(18, null, null, 0)).stateNode = s),
                      (u.return = t),
                      (t.child = u),
                      (Yr = t),
                      (Kr = null),
                      (u = !0))
                    : (u = !1);
                }
                u || ea(t);
              }
              if (null !== (s = t.memoizedState) && null !== (s = s.dehydrated))
                return (
                  "$!" === s.data ? (t.lanes = 16) : (t.lanes = 536870912), null
                );
              za(t);
            }
            return (
              (s = a.children),
              (a = a.fallback),
              l
                ? (La(),
                  (s = ii(
                    {
                      mode: "hidden",
                      children: s,
                    },
                    (l = t.mode)
                  )),
                  (a = Iu(a, l, n, null)),
                  (s.return = t),
                  (a.return = t),
                  (s.sibling = a),
                  (t.child = s),
                  ((l = t.child).memoizedState = ri(n)),
                  (l.childLanes = ai(e, r, n)),
                  (t.memoizedState = ni),
                  a)
                : (Oa(t), oi(t, s))
            );
          }
          if (null !== (u = e.memoizedState) && null !== (s = u.dehydrated)) {
            if (i)
              256 & t.flags
                ? (Oa(t), (t.flags &= -257), (t = ui(e, t, n)))
                : null !== t.memoizedState
                ? (La(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (La(),
                  (l = a.fallback),
                  (s = t.mode),
                  (a = ii(
                    {
                      mode: "visible",
                      children: a.children,
                    },
                    s
                  )),
                  ((l = Iu(l, s, n, null)).flags |= 2),
                  (a.return = t),
                  (l.return = t),
                  (a.sibling = l),
                  (t.child = a),
                  ka(t, e.child, null, n),
                  ((a = t.child).memoizedState = ri(n)),
                  (a.childLanes = ai(e, r, n)),
                  (t.memoizedState = ni),
                  (t = l));
            else if ((Oa(t), "$!" === s.data)) {
              if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
              (r = c),
                ((a = Error(o(419))).stack = ""),
                (a.digest = r),
                la({
                  value: a,
                  source: null,
                  stack: null,
                }),
                (t = ui(e, t, n));
            } else if (
              (Wo || Si(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Wo || r)
            ) {
              if (null !== (r = ts)) {
                if (0 !== (42 & (a = n & -n))) a = 1;
                else
                  switch (a) {
                    case 2:
                      a = 1;
                      break;
                    case 8:
                      a = 4;
                      break;
                    case 32:
                      a = 16;
                      break;
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                      a = 64;
                      break;
                    case 268435456:
                      a = 134217728;
                      break;
                    default:
                      a = 0;
                  }
                if (
                  0 !== (a = 0 !== (a & (r.suspendedLanes | n)) ? 0 : a) &&
                  a !== u.retryLane
                )
                  throw ((u.retryLane = a), Nr(e, a), Ls(r, e, a), qo);
              }
              "$?" === s.data || Ws(), (t = ui(e, t, n));
            } else
              "$?" === s.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = ic.bind(null, e)),
                  (s._reactRetry = t),
                  (t = null))
                : ((e = u.treeContext),
                  (Kr = uf(s.nextSibling)),
                  (Yr = t),
                  (Gr = !0),
                  (Xr = null),
                  (Jr = !1),
                  null !== e &&
                    ((Ur[Ir++] = Hr),
                    (Ur[Ir++] = qr),
                    (Ur[Ir++] = Br),
                    (Hr = e.id),
                    (qr = e.overflow),
                    (Br = t)),
                  ((t = oi(t, a.children)).flags |= 4096));
            return t;
          }
          return l
            ? (La(),
              (l = a.fallback),
              (s = t.mode),
              (c = (u = e.child).sibling),
              ((a = Mu(u, {
                mode: "hidden",
                children: a.children,
              })).subtreeFlags = 31457280 & u.subtreeFlags),
              null !== c
                ? (l = Mu(c, l))
                : ((l = Iu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              null === (s = e.child.memoizedState)
                ? (s = ri(n))
                : (null !== (u = s.cachePool)
                    ? ((c = Ua._currentValue),
                      (u =
                        u.parent !== c
                          ? {
                              parent: c,
                              pool: c,
                            }
                          : u))
                    : (u = Xa()),
                  (s = {
                    baseLanes: s.baseLanes | n,
                    cachePool: u,
                  })),
              (l.memoizedState = s),
              (l.childLanes = ai(e, r, n)),
              (t.memoizedState = ni),
              a)
            : (Oa(t),
              (e = (n = e.child).sibling),
              ((n = Mu(n, {
                mode: "visible",
                children: a.children,
              })).return = t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function oi(e, t) {
          return (
            ((t = ii(
              {
                mode: "visible",
                children: t,
              },
              e.mode
            )).return = e),
            (e.child = t)
          );
        }
        function ii(e, t) {
          return Bu(e, t, 0, null);
        }
        function ui(e, t, n) {
          return (
            ka(t, e.child, null, n),
            ((e = oi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function si(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), wi(e.return, t, n);
        }
        function ci(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function fi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if (($o(e, t, r.children, n), 0 !== (2 & (r = Aa.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && si(e, n, t);
                else if (19 === e.tag) si(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          switch ((Y(Aa, r), a)) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === Fa(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                ci(t, !1, a, n, l);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Fa(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              ci(t, !0, n, null, l);
              break;
            case "together":
              ci(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function di(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (fs |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Si(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Mu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Mu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function pi(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Ei(e))
          );
        }
        function hi(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Wo = !0;
            else {
              if (!pi(e, n) && 0 === (128 & t.flags))
                return (
                  (Wo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Z(t, t.stateNode.containerInfo),
                          vi(t, Ua, e.memoizedState.cache),
                          aa();
                        break;
                      case 27:
                      case 5:
                        te(t);
                        break;
                      case 4:
                        Z(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        vi(t, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (Oa(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? li(e, t, n)
                            : (Oa(t),
                              null !== (e = di(e, t, n)) ? e.sibling : null);
                        Oa(t);
                        break;
                      case 19:
                        var a = 0 !== (128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Si(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          a)
                        ) {
                          if (r) return fi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Y(Aa, Aa.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ko(e, t, n);
                      case 24:
                        vi(t, Ua, e.memoizedState.cache);
                    }
                    return di(e, t, n);
                  })(e, t, n)
                );
              Wo = 0 !== (131072 & e.flags);
            }
          else (Wo = !1), Gr && 0 !== (1048576 & t.flags) && $r(t, jr, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  a = r._init;
                if (
                  ((r = a(r._payload)), (t.type = r), "function" !== typeof r)
                ) {
                  if (void 0 !== r && null !== r) {
                    if ((a = r.$$typeof) === y) {
                      (t.tag = 11), (t = Vo(null, t, r, e, n));
                      break e;
                    }
                    if (a === w) {
                      (t.tag = 14), (t = Qo(null, t, r, e, n));
                      break e;
                    }
                  }
                  throw ((t = T(r) || r), Error(o(306, t, "")));
                }
                Du(r)
                  ? ((e = zo(r, e)), (t.tag = 1), (t = ei(null, t, r, e, n)))
                  : ((t.tag = 0), (t = Jo(null, t, r, e, n)));
              }
              return t;
            case 0:
              return Jo(e, t, t.type, t.pendingProps, n);
            case 1:
              return ei(e, t, (r = t.type), (a = zo(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((Z(t, t.stateNode.containerInfo), null === e))
                  throw Error(o(387));
                var l = t.pendingProps;
                (r = (a = t.memoizedState).element),
                  Oi(e, t),
                  Mi(t, l, null, n);
                var i = t.memoizedState;
                if (
                  ((l = i.cache),
                  vi(t, Ua, l),
                  l !== a.cache && ki(t, [Ua], n, !0),
                  Di(),
                  (l = i.element),
                  a.isDehydrated)
                ) {
                  if (
                    ((a = {
                      element: l,
                      isDehydrated: !1,
                      cache: i.cache,
                    }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = ti(e, t, l, n);
                    break e;
                  }
                  if (l !== r) {
                    la((r = Ar(Error(o(424)), t))), (t = ti(e, t, l, n));
                    break e;
                  }
                  for (
                    Kr = uf(t.stateNode.containerInfo.firstChild),
                      Yr = t,
                      Gr = !0,
                      Xr = null,
                      Jr = !0,
                      n = Sa(t, null, l, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((aa(), l === r)) {
                    t = di(e, t, n);
                    break e;
                  }
                  $o(e, t, l, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Xo(e, t),
                null === e
                  ? (n = yf(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : Gr ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = Kc(X.current).createElement(n))[je] = t),
                      (r[Ue] = e),
                      Vc(r, n, e),
                      Xe(r),
                      (t.stateNode = r))
                  : (t.memoizedState = yf(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState
                    )),
                null
              );
            case 27:
              return (
                te(t),
                null === e &&
                  Gr &&
                  ((r = t.stateNode = cf(t.type, t.pendingProps, X.current)),
                  (Yr = t),
                  (Jr = !0),
                  (Kr = uf(r.firstChild))),
                (r = t.pendingProps.children),
                null !== e || Gr
                  ? $o(e, t, r, n)
                  : (t.child = ka(t, null, r, n)),
                Xo(e, t),
                t.child
              );
            case 5:
              return (
                null === e &&
                  Gr &&
                  ((a = r = Kr) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var a = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[$e])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (l = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  l !== a.rel ||
                                  e.getAttribute("href") !==
                                    (null == a.href ? null : a.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == a.crossOrigin
                                      ? null
                                      : a.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == a.title ? null : a.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((l = e.getAttribute("src")) !==
                                    (null == a.src ? null : a.src) ||
                                    e.getAttribute("type") !==
                                      (null == a.type ? null : a.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == a.crossOrigin
                                        ? null
                                        : a.crossOrigin)) &&
                                  l &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var l = null == a.name ? null : "" + a.name;
                          if (
                            "hidden" === a.type &&
                            e.getAttribute("name") === l
                          )
                            return e;
                        }
                        if (null === (e = uf(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, Jr))
                      ? ((t.stateNode = r),
                        (Yr = t),
                        (Kr = uf(r.firstChild)),
                        (Jr = !1),
                        (a = !0))
                      : (a = !1)),
                  a || ea(t)),
                te(t),
                (a = t.type),
                (l = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (r = l.children),
                Jc(a, l)
                  ? (r = null)
                  : null !== i && Jc(a, i) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((a = fl(e, t, hl, null, null, n)), (Mf._currentValue = a)),
                Xo(e, t),
                $o(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  Gr &&
                  ((e = n = Kr) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = uf(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, Jr))
                      ? ((t.stateNode = n), (Yr = t), (Kr = null), (e = !0))
                      : (e = !1)),
                  e || ea(t)),
                null
              );
            case 13:
              return li(e, t, n);
            case 4:
              return (
                Z(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ka(t, null, r, n)) : $o(e, t, r, n),
                t.child
              );
            case 11:
              return Vo(e, t, t.type, t.pendingProps, n);
            case 7:
              return $o(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return $o(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return (
                (r = t.pendingProps),
                vi(t, t.type, r.value),
                $o(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (a = t.type._context),
                (r = t.pendingProps.children),
                xi(t),
                (r = r((a = Ci(a)))),
                (t.flags |= 1),
                $o(e, t, r, n),
                t.child
              );
            case 14:
              return Qo(e, t, t.type, t.pendingProps, n);
            case 15:
              return Yo(e, t, t.type, t.pendingProps, n);
            case 19:
              return fi(e, t, n);
            case 22:
              return Ko(e, t, n);
            case 24:
              return (
                xi(t),
                (r = Ci(Ua)),
                null === e
                  ? (null === (a = Ka()) &&
                      ((a = ts),
                      (l = Ia()),
                      (a.pooledCache = l),
                      l.refCount++,
                      null !== l && (a.pooledCacheLanes |= n),
                      (a = l)),
                    (t.memoizedState = {
                      parent: r,
                      cache: a,
                    }),
                    Ni(t),
                    vi(t, Ua, a))
                  : (0 !== (e.lanes & n) &&
                      (Oi(e, t), Mi(t, null, null, n), Di()),
                    (a = e.memoizedState),
                    (l = t.memoizedState),
                    a.parent !== r
                      ? ((a = {
                          parent: r,
                          cache: r,
                        }),
                        (t.memoizedState = a),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = a),
                        vi(t, Ua, r))
                      : ((r = l.cache),
                        vi(t, Ua, r),
                        r !== a.cache && ki(t, [Ua], n, !0))),
                $o(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(o(156, t.tag));
        }
        var mi = V(null),
          gi = null,
          yi = null;
        function vi(e, t, n) {
          Y(mi, t._currentValue), (t._currentValue = n);
        }
        function bi(e) {
          (e._currentValue = mi.current), Q(mi);
        }
        function wi(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function ki(e, t, n, r) {
          var a = e.child;
          for (null !== a && (a.return = e); null !== a; ) {
            var l = a.dependencies;
            if (null !== l) {
              var i = a.child;
              l = l.firstContext;
              e: for (; null !== l; ) {
                var u = l;
                l = a;
                for (var s = 0; s < t.length; s++)
                  if (u.context === t[s]) {
                    (l.lanes |= n),
                      null !== (u = l.alternate) && (u.lanes |= n),
                      wi(l.return, n, e),
                      r || (i = null);
                    break e;
                  }
                l = u.next;
              }
            } else if (18 === a.tag) {
              if (null === (i = a.return)) throw Error(o(341));
              (i.lanes |= n),
                null !== (l = i.alternate) && (l.lanes |= n),
                wi(i, n, e),
                (i = null);
            } else i = a.child;
            if (null !== i) i.return = a;
            else
              for (i = a; null !== i; ) {
                if (i === e) {
                  i = null;
                  break;
                }
                if (null !== (a = i.sibling)) {
                  (a.return = i.return), (i = a);
                  break;
                }
                i = i.return;
              }
            a = i;
          }
        }
        function Si(e, t, n, r) {
          e = null;
          for (var a = t, l = !1; null !== a; ) {
            if (!l)
              if (0 !== (524288 & a.flags)) l = !0;
              else if (0 !== (262144 & a.flags)) break;
            if (10 === a.tag) {
              var i = a.alternate;
              if (null === i) throw Error(o(387));
              if (null !== (i = i.memoizedProps)) {
                var u = a.type;
                Yn(a.pendingProps.value, i.value) ||
                  (null !== e ? e.push(u) : (e = [u]));
              }
            } else if (a === J.current) {
              if (null === (i = a.alternate)) throw Error(o(387));
              i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                (null !== e ? e.push(Mf) : (e = [Mf]));
            }
            a = a.return;
          }
          null !== e && ki(t, e, n, r), (t.flags |= 262144);
        }
        function Ei(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Yn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function xi(e) {
          (gi = e),
            (yi = null),
            null !== (e = e.dependencies) && (e.firstContext = null);
        }
        function Ci(e) {
          return Ti(gi, e);
        }
        function _i(e, t) {
          return null === gi && xi(e), Ti(e, t);
        }
        function Ti(e, t) {
          var n = t._currentValue;
          if (
            ((t = {
              context: t,
              memoizedValue: n,
              next: null,
            }),
            null === yi)
          ) {
            if (null === e) throw Error(o(308));
            (yi = t),
              (e.dependencies = {
                lanes: 0,
                firstContext: t,
              }),
              (e.flags |= 524288);
          } else yi = yi.next = t;
          return n;
        }
        var Pi = !1;
        function Ni(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
              pending: null,
              lanes: 0,
              hiddenCallbacks: null,
            },
            callbacks: null,
          };
        }
        function Oi(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              });
        }
        function Ri(e) {
          return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Li(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & es))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              (t = Rr(e)),
              Or(e, null, n),
              t
            );
          }
          return Tr(e, r, t, n), Rr(e);
        }
        function zi(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194176 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Ae(e, n);
          }
        }
        function Ai(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        var Fi = !1;
        function Di() {
          if (Fi) {
            if (null !== $a) throw $a;
          }
        }
        function Mi(e, t, n, r) {
          Fi = !1;
          var a = e.updateQueue;
          Pi = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== l) {
            var f = a.baseState;
            for (o = 0, c = s = u = null, i = l; ; ) {
              var d = -536870913 & i.lane,
                p = d !== i.lane;
              if (p ? (rs & d) === d : (r & d) === d) {
                0 !== d && d === Wa && (Fi = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null,
                      });
                e: {
                  var h = e,
                    m = i;
                  d = t;
                  var g = n;
                  switch (m.tag) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(g, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(g, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = R({}, f, d);
                      break e;
                    case 2:
                      Pi = !0;
                  }
                }
                null !== (d = i.callback) &&
                  ((e.flags |= 64),
                  p && (e.flags |= 8192),
                  null === (p = a.callbacks) ? (a.callbacks = [d]) : p.push(d));
              } else
                (p = {
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (p = i).next),
                  (p.next = null),
                  (a.lastBaseUpdate = p),
                  (a.shared.pending = null);
              }
            }
            null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null === l && (a.shared.lanes = 0),
              (fs |= o),
              (e.lanes = o),
              (e.memoizedState = f);
          }
        }
        function ji(e, t) {
          if ("function" !== typeof e) throw Error(o(191, e));
          e.call(t);
        }
        function Ui(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) ji(n[e], t);
        }
        function Ii(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var a = r.next;
              n = a;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var l = n.create,
                    o = n.inst;
                  (r = l()), (o.destroy = r);
                }
                n = n.next;
              } while (n !== a);
            }
          } catch (i) {
            rc(t, t.return, i);
          }
        }
        function Bi(e, t, n) {
          try {
            var r = t.updateQueue,
              a = null !== r ? r.lastEffect : null;
            if (null !== a) {
              var l = a.next;
              r = l;
              do {
                if ((r.tag & e) === e) {
                  var o = r.inst,
                    i = o.destroy;
                  if (void 0 !== i) {
                    (o.destroy = void 0), (a = t);
                    var u = n;
                    try {
                      i();
                    } catch (s) {
                      rc(a, u, s);
                    }
                  }
                }
                r = r.next;
              } while (r !== l);
            }
          } catch (s) {
            rc(t, t.return, s);
          }
        }
        function Hi(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              Ui(t, n);
            } catch (r) {
              rc(e, e.return, r);
            }
          }
        }
        function qi(e, t, n) {
          (n.props = zo(e.type, e.memoizedProps)), (n.state = e.memoizedState);
          try {
            n.componentWillUnmount();
          } catch (r) {
            rc(e, t, r);
          }
        }
        function Wi(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              var r = e.stateNode;
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var a = r;
                  break;
                default:
                  a = r;
              }
              "function" === typeof n ? (e.refCleanup = n(a)) : (n.current = a);
            }
          } catch (l) {
            rc(e, t, l);
          }
        }
        function $i(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" === typeof r)
              try {
                r();
              } catch (a) {
                rc(e, t, a);
              } finally {
                (e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null);
              }
            else if ("function" === typeof n)
              try {
                n(null);
              } catch (l) {
                rc(e, t, l);
              }
            else n.current = null;
        }
        function Vi(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (a) {
            rc(e, e.return, a);
          }
        }
        function Qi(e, t, n) {
          try {
            var r = e.stateNode;
            !(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var a = null,
                    l = null,
                    i = null,
                    u = null,
                    s = null,
                    c = null,
                    f = null;
                  for (h in n) {
                    var d = n[h];
                    if (n.hasOwnProperty(h) && null != d)
                      switch (h) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          s = d;
                        default:
                          r.hasOwnProperty(h) || Wc(e, t, h, null, r, d);
                      }
                  }
                  for (var p in r) {
                    var h = r[p];
                    if (
                      ((d = n[p]),
                      r.hasOwnProperty(p) && (null != h || null != d))
                    )
                      switch (p) {
                        case "type":
                          l = h;
                          break;
                        case "name":
                          a = h;
                          break;
                        case "checked":
                          c = h;
                          break;
                        case "defaultChecked":
                          f = h;
                          break;
                        case "value":
                          i = h;
                          break;
                        case "defaultValue":
                          u = h;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != h) throw Error(o(137, t));
                          break;
                        default:
                          h !== d && Wc(e, t, p, h, r, d);
                      }
                  }
                  return void gt(e, i, u, s, c, f, l, a);
                case "select":
                  for (l in ((h = i = u = p = null), n))
                    if (((s = n[l]), n.hasOwnProperty(l) && null != s))
                      switch (l) {
                        case "value":
                          break;
                        case "multiple":
                          h = s;
                        default:
                          r.hasOwnProperty(l) || Wc(e, t, l, null, r, s);
                      }
                  for (a in r)
                    if (
                      ((l = r[a]),
                      (s = n[a]),
                      r.hasOwnProperty(a) && (null != l || null != s))
                    )
                      switch (a) {
                        case "value":
                          p = l;
                          break;
                        case "defaultValue":
                          u = l;
                          break;
                        case "multiple":
                          i = l;
                        default:
                          l !== s && Wc(e, t, a, l, r, s);
                      }
                  return (
                    (t = u),
                    (n = i),
                    (r = h),
                    void (null != p
                      ? bt(e, !!n, p, !1)
                      : !!r !== !!n &&
                        (null != t
                          ? bt(e, !!n, t, !0)
                          : bt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (u in ((h = p = null), n))
                    if (
                      ((a = n[u]),
                      n.hasOwnProperty(u) && null != a && !r.hasOwnProperty(u))
                    )
                      switch (u) {
                        case "value":
                        case "children":
                          break;
                        default:
                          Wc(e, t, u, null, r, a);
                      }
                  for (i in r)
                    if (
                      ((a = r[i]),
                      (l = n[i]),
                      r.hasOwnProperty(i) && (null != a || null != l))
                    )
                      switch (i) {
                        case "value":
                          p = a;
                          break;
                        case "defaultValue":
                          h = a;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != a) throw Error(o(91));
                          break;
                        default:
                          a !== l && Wc(e, t, i, a, r, l);
                      }
                  return void wt(e, p, h);
                case "option":
                  for (var m in n)
                    if (
                      ((p = n[m]),
                      n.hasOwnProperty(m) && null != p && !r.hasOwnProperty(m))
                    )
                      if ("selected" === m) e.selected = !1;
                      else Wc(e, t, m, null, r, p);
                  for (s in r)
                    if (
                      ((p = r[s]),
                      (h = n[s]),
                      r.hasOwnProperty(s) &&
                        p !== h &&
                        (null != p || null != h))
                    )
                      if ("selected" === s)
                        e.selected =
                          p && "function" !== typeof p && "symbol" !== typeof p;
                      else Wc(e, t, s, p, r, h);
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    (p = n[g]),
                      n.hasOwnProperty(g) &&
                        null != p &&
                        !r.hasOwnProperty(g) &&
                        Wc(e, t, g, null, r, p);
                  for (c in r)
                    if (
                      ((p = r[c]),
                      (h = n[c]),
                      r.hasOwnProperty(c) &&
                        p !== h &&
                        (null != p || null != h))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(o(137, t));
                          break;
                        default:
                          Wc(e, t, c, p, r, h);
                      }
                  return;
                default:
                  if (_t(t)) {
                    for (var y in n)
                      (p = n[y]),
                        n.hasOwnProperty(y) &&
                          void 0 !== p &&
                          !r.hasOwnProperty(y) &&
                          $c(e, t, y, void 0, r, p);
                    for (f in r)
                      (p = r[f]),
                        (h = n[f]),
                        !r.hasOwnProperty(f) ||
                          p === h ||
                          (void 0 === p && void 0 === h) ||
                          $c(e, t, f, p, r, h);
                    return;
                  }
              }
              for (var v in n)
                (p = n[v]),
                  n.hasOwnProperty(v) &&
                    null != p &&
                    !r.hasOwnProperty(v) &&
                    Wc(e, t, v, null, r, p);
              for (d in r)
                (p = r[d]),
                  (h = n[d]),
                  !r.hasOwnProperty(d) ||
                    p === h ||
                    (null == p && null == h) ||
                    Wc(e, t, d, p, r, h);
            })(r, e.type, n, t),
              (r[Ue] = t);
          } catch (a) {
            rc(e, e.return, a);
          }
        }
        function Yi(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            27 === e.tag ||
            4 === e.tag
          );
        }
        function Ki(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Yi(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Gi(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = qc));
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Gi(e, t, n), e = e.sibling; null !== e; )
              Gi(e, t, n), (e = e.sibling);
        }
        function Xi(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Xi(e, t, n), e = e.sibling; null !== e; )
              Xi(e, t, n), (e = e.sibling);
        }
        var Ji = !1,
          Zi = !1,
          eu = !1,
          tu = "function" === typeof WeakSet ? WeakSet : Set,
          nu = null,
          ru = !1;
        function au(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              yu(e, n), 4 & r && Ii(5, n);
              break;
            case 1:
              if ((yu(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (i) {
                    rc(n, n.return, i);
                  }
                else {
                  var a = zo(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      a,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate
                    );
                  } catch (u) {
                    rc(n, n.return, u);
                  }
                }
              64 & r && Hi(n), 512 & r && Wi(n, n.return);
              break;
            case 3:
              if ((yu(e, n), 64 & r && null !== (r = n.updateQueue))) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                try {
                  Ui(r, e);
                } catch (i) {
                  rc(n, n.return, i);
                }
              }
              break;
            case 26:
              yu(e, n), 512 & r && Wi(n, n.return);
              break;
            case 27:
            case 5:
              yu(e, n),
                null === t && 4 & r && Vi(n),
                512 & r && Wi(n, n.return);
              break;
            case 12:
            default:
              yu(e, n);
              break;
            case 13:
              yu(e, n), 4 & r && cu(e, n);
              break;
            case 22:
              if (!(a = null !== n.memoizedState || Ji)) {
                t = (null !== t && null !== t.memoizedState) || Zi;
                var l = Ji,
                  o = Zi;
                (Ji = a),
                  (Zi = t) && !o
                    ? bu(e, n, 0 !== (8772 & n.subtreeFlags))
                    : yu(e, n),
                  (Ji = l),
                  (Zi = o);
              }
              512 & r &&
                ("manual" === n.memoizedProps.mode
                  ? Wi(n, n.return)
                  : $i(n, n.return));
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Ve(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        var ou = null,
          iu = !1;
        function uu(e, t, n) {
          for (n = n.child; null !== n; ) su(e, t, n), (n = n.sibling);
        }
        function su(e, t, n) {
          if (ve && "function" === typeof ve.onCommitFiberUnmount)
            try {
              ve.onCommitFiberUnmount(ye, n);
            } catch (o) {}
          switch (n.tag) {
            case 26:
              Zi || $i(n, t),
                uu(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
              break;
            case 27:
              Zi || $i(n, t);
              var r = ou,
                a = iu;
              for (
                ou = n.stateNode, uu(e, t, n), t = (n = n.stateNode).attributes;
                t.length;

              )
                n.removeAttributeNode(t[0]);
              Ve(n), (ou = r), (iu = a);
              break;
            case 5:
              Zi || $i(n, t);
            case 6:
              a = ou;
              var l = iu;
              if (((ou = null), uu(e, t, n), (iu = l), null !== (ou = a)))
                if (iu)
                  try {
                    (e = ou),
                      (r = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(r)
                        : e.removeChild(r);
                  } catch (i) {
                    rc(n, t, i);
                  }
                else
                  try {
                    ou.removeChild(n.stateNode);
                  } catch (i) {
                    rc(n, t, i);
                  }
              break;
            case 18:
              null !== ou &&
                (iu
                  ? ((t = ou),
                    (n = n.stateNode),
                    8 === t.nodeType
                      ? lf(t.parentNode, n)
                      : 1 === t.nodeType && lf(t, n),
                    gd(t))
                  : lf(ou, n.stateNode));
              break;
            case 4:
              (r = ou),
                (a = iu),
                (ou = n.stateNode.containerInfo),
                (iu = !0),
                uu(e, t, n),
                (ou = r),
                (iu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              Zi || Bi(2, n, t), Zi || Bi(4, n, t), uu(e, t, n);
              break;
            case 1:
              Zi ||
                ($i(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount &&
                  qi(n, t, r)),
                uu(e, t, n);
              break;
            case 21:
              uu(e, t, n);
              break;
            case 22:
              Zi || $i(n, t),
                (Zi = (r = Zi) || null !== n.memoizedState),
                uu(e, t, n),
                (Zi = r);
              break;
            default:
              uu(e, t, n);
          }
        }
        function cu(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              gd(e);
            } catch (n) {
              rc(t, t.return, n);
            }
        }
        function fu(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new tu()), t;
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new tu()),
                  t
                );
              default:
                throw Error(o(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = uc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function du(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r],
                l = e,
                i = t,
                u = i;
              e: for (; null !== u; ) {
                switch (u.tag) {
                  case 27:
                  case 5:
                    (ou = u.stateNode), (iu = !1);
                    break e;
                  case 3:
                  case 4:
                    (ou = u.stateNode.containerInfo), (iu = !0);
                    break e;
                }
                u = u.return;
              }
              if (null === ou) throw Error(o(160));
              su(l, i, a),
                (ou = null),
                (iu = !1),
                null !== (l = a.alternate) && (l.return = null),
                (a.return = null);
            }
          if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t; ) hu(t, e), (t = t.sibling);
        }
        var pu = null;
        function hu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              du(t, e),
                mu(e),
                4 & r && (Bi(3, e, e.return), Ii(3, e), Bi(5, e, e.return));
              break;
            case 1:
              du(t, e),
                mu(e),
                512 & r && (Zi || null === n || $i(n, n.return)),
                64 & r &&
                  Ji &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
              break;
            case 26:
              var a = pu;
              if (
                (du(t, e),
                mu(e),
                512 & r && (Zi || null === n || $i(n, n.return)),
                4 & r)
              ) {
                var l = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        (r = e.type),
                          (n = e.memoizedProps),
                          (a = a.ownerDocument || a);
                        t: switch (r) {
                          case "title":
                            (!(l = a.getElementsByTagName("title")[0]) ||
                              l[$e] ||
                              l[je] ||
                              "http://www.w3.org/2000/svg" === l.namespaceURI ||
                              l.hasAttribute("itemprop")) &&
                              ((l = a.createElement(r)),
                              a.head.insertBefore(
                                l,
                                a.querySelector("head > title")
                              )),
                              Vc(l, r, n),
                              (l[je] = e),
                              Xe(l),
                              (r = l);
                            break e;
                          case "link":
                            var i = Pf("link", "href", a).get(
                              r + (n.href || "")
                            );
                            if (i)
                              for (var u = 0; u < i.length; u++)
                                if (
                                  (l = i[u]).getAttribute("href") ===
                                    (null == n.href ? null : n.href) &&
                                  l.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  l.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  l.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  i.splice(u, 1);
                                  break t;
                                }
                            Vc((l = a.createElement(r)), r, n),
                              a.head.appendChild(l);
                            break;
                          case "meta":
                            if (
                              (i = Pf("meta", "content", a).get(
                                r + (n.content || "")
                              ))
                            )
                              for (u = 0; u < i.length; u++)
                                if (
                                  (l = i[u]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  l.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  l.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  l.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  l.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  i.splice(u, 1);
                                  break t;
                                }
                            Vc((l = a.createElement(r)), r, n),
                              a.head.appendChild(l);
                            break;
                          default:
                            throw Error(o(468, r));
                        }
                        (l[je] = e), Xe(l), (r = l);
                      }
                      e.stateNode = r;
                    } else Nf(a, e.type, e.stateNode);
                  else e.stateNode = Ef(a, r, e.memoizedProps);
                else
                  l !== r
                    ? (null === l
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : l.count--,
                      null === r
                        ? Nf(a, e.type, e.stateNode)
                        : Ef(a, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      Qi(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              if (4 & r && null === e.alternate) {
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  for (var s = a.firstChild; s; ) {
                    var c = s.nextSibling,
                      f = s.nodeName;
                    s[$e] ||
                      "HEAD" === f ||
                      "BODY" === f ||
                      "SCRIPT" === f ||
                      "STYLE" === f ||
                      ("LINK" === f && "stylesheet" === s.rel.toLowerCase()) ||
                      a.removeChild(s),
                      (s = c);
                  }
                  for (var d = e.type, p = a.attributes; p.length; )
                    a.removeAttributeNode(p[0]);
                  Vc(a, d, l), (a[je] = e), (a[Ue] = l);
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
            case 5:
              if (
                (du(t, e),
                mu(e),
                512 & r && (Zi || null === n || $i(n, n.return)),
                32 & e.flags)
              ) {
                a = e.stateNode;
                try {
                  St(a, "");
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
              4 & r &&
                null != e.stateNode &&
                Qi(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
                1024 & r && (eu = !0);
              break;
            case 6:
              if ((du(t, e), mu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                  n.nodeValue = r;
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                ((Tf = null),
                (a = pu),
                (pu = pf(t.containerInfo)),
                du(t, e),
                (pu = a),
                mu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  gd(t.containerInfo);
                } catch (m) {
                  rc(e, e.return, m);
                }
              eu && ((eu = !1), gu(e));
              break;
            case 4:
              (r = pu),
                (pu = pf(e.stateNode.containerInfo)),
                du(t, e),
                mu(e),
                (pu = r);
              break;
            case 12:
              du(t, e), mu(e);
              break;
            case 13:
              du(t, e),
                mu(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !==
                    (null !== n && null !== n.memoizedState) &&
                  (bs = ue()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), fu(e, r));
              break;
            case 22:
              if (
                (512 & r && (Zi || null === n || $i(n, n.return)),
                (s = null !== e.memoizedState),
                (c = null !== n && null !== n.memoizedState),
                (Ji = (f = Ji) || s),
                (Zi = (d = Zi) || c),
                du(t, e),
                (Zi = d),
                (Ji = f),
                mu(e),
                ((t = e.stateNode)._current = e),
                (t._visibility &= -3),
                (t._visibility |= 2 & t._pendingVisibility),
                8192 & r &&
                  ((t._visibility = s ? -2 & t._visibility : 1 | t._visibility),
                  s && ((t = Ji || Zi), null === n || c || t || vu(e)),
                  null === e.memoizedProps ||
                    "manual" !== e.memoizedProps.mode))
              )
                e: for (n = null, t = e; ; ) {
                  if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((a = c.stateNode), s))
                          "function" === typeof (l = a.style).setProperty
                            ? l.setProperty("display", "none", "important")
                            : (l.display = "none");
                        else {
                          i = c.stateNode;
                          var h =
                            void 0 !== (u = c.memoizedProps.style) &&
                            null !== u &&
                            u.hasOwnProperty("display")
                              ? u.display
                              : null;
                          i.style.display =
                            null == h || "boolean" === typeof h
                              ? ""
                              : ("" + h).trim();
                        }
                      } catch (m) {
                        rc(c, c.return, m);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        c.stateNode.nodeValue = s ? "" : c.memoizedProps;
                      } catch (m) {
                        rc(c, c.return, m);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    n === t && (n = null), (t = t.return);
                  }
                  n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling);
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), fu(e, n));
              break;
            case 19:
              du(t, e),
                mu(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), fu(e, r));
              break;
            case 21:
              break;
            default:
              du(t, e), mu(e);
          }
        }
        function mu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              if (27 !== e.tag) {
                e: {
                  for (var n = e.return; null !== n; ) {
                    if (Yi(n)) {
                      var r = n;
                      break e;
                    }
                    n = n.return;
                  }
                  throw Error(o(160));
                }
                switch (r.tag) {
                  case 27:
                    var a = r.stateNode;
                    Xi(e, Ki(e), a);
                    break;
                  case 5:
                    var l = r.stateNode;
                    32 & r.flags && (St(l, ""), (r.flags &= -33)),
                      Xi(e, Ki(e), l);
                    break;
                  case 3:
                  case 4:
                    var i = r.stateNode.containerInfo;
                    Gi(e, Ki(e), i);
                    break;
                  default:
                    throw Error(o(161));
                }
              }
            } catch (u) {
              rc(e, e.return, u);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gu(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              gu(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling);
            }
        }
        function yu(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              au(e, t.alternate, t), (t = t.sibling);
        }
        function vu(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Bi(4, t, t.return), vu(t);
                break;
              case 1:
                $i(t, t.return);
                var n = t.stateNode;
                "function" === typeof n.componentWillUnmount &&
                  qi(t, t.return, n),
                  vu(t);
                break;
              case 26:
              case 27:
              case 5:
                $i(t, t.return), vu(t);
                break;
              case 22:
                $i(t, t.return), null === t.memoizedState && vu(t);
                break;
              default:
                vu(t);
            }
            e = e.sibling;
          }
        }
        function bu(e, t, n) {
          for (
            n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var r = t.alternate,
              a = e,
              l = t,
              o = l.flags;
            switch (l.tag) {
              case 0:
              case 11:
              case 15:
                bu(a, l, n), Ii(4, l);
                break;
              case 1:
                if (
                  (bu(a, l, n),
                  "function" ===
                    typeof (a = (r = l).stateNode).componentDidMount)
                )
                  try {
                    a.componentDidMount();
                  } catch (s) {
                    rc(r, r.return, s);
                  }
                if (null !== (a = (r = l).updateQueue)) {
                  var i = r.stateNode;
                  try {
                    var u = a.shared.hiddenCallbacks;
                    if (null !== u)
                      for (
                        a.shared.hiddenCallbacks = null, a = 0;
                        a < u.length;
                        a++
                      )
                        ji(u[a], i);
                  } catch (s) {
                    rc(r, r.return, s);
                  }
                }
                n && 64 & o && Hi(l), Wi(l, l.return);
                break;
              case 26:
              case 27:
              case 5:
                bu(a, l, n), n && null === r && 4 & o && Vi(l), Wi(l, l.return);
                break;
              case 12:
              default:
                bu(a, l, n);
                break;
              case 13:
                bu(a, l, n), n && 4 & o && cu(a, l);
                break;
              case 22:
                null === l.memoizedState && bu(a, l, n), Wi(l, l.return);
            }
            t = t.sibling;
          }
        }
        function wu(e, t) {
          var n = null;
          null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Ba(n));
        }
        function ku(e, t) {
          (e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Ba(e));
        }
        function Su(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) Eu(e, t, n, r), (t = t.sibling);
        }
        function Eu(e, t, n, r) {
          var a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Su(e, t, n, r), 2048 & a && Ii(9, t);
              break;
            case 3:
              Su(e, t, n, r),
                2048 & a &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Ba(e)));
              break;
            case 12:
              if (2048 & a) {
                Su(e, t, n, r), (e = t.stateNode);
                try {
                  var l = t.memoizedProps,
                    o = l.id,
                    i = l.onPostCommit;
                  "function" === typeof i &&
                    i(
                      o,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0
                    );
                } catch (u) {
                  rc(t, t.return, u);
                }
              } else Su(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              (l = t.stateNode),
                null !== t.memoizedState
                  ? 4 & l._visibility
                    ? Su(e, t, n, r)
                    : Cu(e, t)
                  : 4 & l._visibility
                  ? Su(e, t, n, r)
                  : ((l._visibility |= 4),
                    xu(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                2048 & a && wu(t.alternate, t);
              break;
            case 24:
              Su(e, t, n, r), 2048 & a && ku(t.alternate, t);
              break;
            default:
              Su(e, t, n, r);
          }
        }
        function xu(e, t, n, r, a) {
          for (
            a = a && 0 !== (10256 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var l = e,
              o = t,
              i = n,
              u = r,
              s = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                xu(l, o, i, u, a), Ii(8, o);
                break;
              case 23:
                break;
              case 22:
                var c = o.stateNode;
                null !== o.memoizedState
                  ? 4 & c._visibility
                    ? xu(l, o, i, u, a)
                    : Cu(l, o)
                  : ((c._visibility |= 4), xu(l, o, i, u, a)),
                  a && 2048 & s && wu(o.alternate, o);
                break;
              case 24:
                xu(l, o, i, u, a), a && 2048 & s && ku(o.alternate, o);
                break;
              default:
                xu(l, o, i, u, a);
            }
            t = t.sibling;
          }
        }
        function Cu(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                a = r.flags;
              switch (r.tag) {
                case 22:
                  Cu(n, r), 2048 & a && wu(r.alternate, r);
                  break;
                case 24:
                  Cu(n, r), 2048 & a && ku(r.alternate, r);
                  break;
                default:
                  Cu(n, r);
              }
              t = t.sibling;
            }
        }
        var _u = 8192;
        function Tu(e) {
          if (e.subtreeFlags & _u)
            for (e = e.child; null !== e; ) Pu(e), (e = e.sibling);
        }
        function Pu(e) {
          switch (e.tag) {
            case 26:
              Tu(e),
                e.flags & _u &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === Rf) throw Error(o(475));
                    var r = Rf;
                    if (
                      "stylesheet" === t.type &&
                      ("string" !== typeof n.media ||
                        !1 !== matchMedia(n.media).matches) &&
                      0 === (4 & t.state.loading)
                    ) {
                      if (null === t.instance) {
                        var a = vf(n.href),
                          l = e.querySelector(bf(a));
                        if (l)
                          return (
                            null !== (e = l._p) &&
                              "object" === typeof e &&
                              "function" === typeof e.then &&
                              (r.count++, (r = zf.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = l),
                            void Xe(l)
                          );
                        (l = e.ownerDocument || e),
                          (n = wf(n)),
                          (a = ff.get(a)) && Cf(n, a),
                          Xe((l = l.createElement("link")));
                        var i = l;
                        (i._p = new Promise(function (e, t) {
                          (i.onload = e), (i.onerror = t);
                        })),
                          Vc(l, "link", n),
                          (t.instance = l);
                      }
                      null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) &&
                          0 === (3 & t.state.loading) &&
                          (r.count++,
                          (t = zf.bind(r)),
                          e.addEventListener("load", t),
                          e.addEventListener("error", t));
                    }
                  })(pu, e.memoizedState, e.memoizedProps);
              break;
            case 5:
            default:
              Tu(e);
              break;
            case 3:
            case 4:
              var t = pu;
              (pu = pf(e.stateNode.containerInfo)), Tu(e), (pu = t);
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                  ? ((t = _u), (_u = 16777216), Tu(e), (_u = t))
                  : Tu(e));
          }
        }
        function Nu(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              (t = e.sibling), (e.sibling = null), (e = t);
            } while (null !== e);
          }
        }
        function Ou(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nu = r), zu(r, e);
              }
            Nu(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) Ru(e), (e = e.sibling);
        }
        function Ru(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ou(e), 2048 & e.flags && Bi(9, e, e.return);
              break;
            case 3:
            case 12:
            default:
              Ou(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              4 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -5), Lu(e))
                : Ou(e);
          }
        }
        function Lu(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nu = r), zu(r, e);
              }
            Nu(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                Bi(8, t, t.return), Lu(t);
                break;
              case 22:
                4 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -5), Lu(t));
                break;
              default:
                Lu(t);
            }
            e = e.sibling;
          }
        }
        function zu(e, t) {
          for (; null !== nu; ) {
            var n = nu;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Bi(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Ba(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) (r.return = n), (nu = r);
            else
              e: for (n = e; null !== nu; ) {
                var a = (r = nu).sibling,
                  l = r.return;
                if ((lu(r), r === n)) {
                  nu = null;
                  break e;
                }
                if (null !== a) {
                  (a.return = l), (nu = a);
                  break e;
                }
                nu = l;
              }
          }
        }
        function Au(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Fu(e, t, n, r) {
          return new Au(e, t, n, r);
        }
        function Du(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Mu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Fu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 31457280 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : {
                    lanes: t.lanes,
                    firstContext: t.firstContext,
                  }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function ju(e, t) {
          e.flags &= 31457282;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : {
                        lanes: t.lanes,
                        firstContext: t.firstContext,
                      })),
            e
          );
        }
        function Uu(e, t, n, r, a, l) {
          var i = 0;
          if (((r = e), "function" === typeof e)) Du(e) && (i = 1);
          else if ("string" === typeof e)
            i = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" !== typeof t.precedence ||
                    "string" !== typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" !== typeof t.rel ||
                    "string" !== typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" === typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" !== typeof t.async &&
                    "symbol" !== typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" === typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, K.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
          else
            e: switch (e) {
              case f:
                return Iu(n.children, a, l, t);
              case d:
                (i = 8), (a |= 24);
                break;
              case p:
                return (
                  ((e = Fu(12, n, t, 2 | a)).elementType = p), (e.lanes = l), e
                );
              case v:
                return (
                  ((e = Fu(13, n, t, a)).elementType = v), (e.lanes = l), e
                );
              case b:
                return (
                  ((e = Fu(19, n, t, a)).elementType = b), (e.lanes = l), e
                );
              case S:
                return Bu(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case h:
                    case g:
                      i = 10;
                      break e;
                    case m:
                      i = 9;
                      break e;
                    case y:
                      i = 11;
                      break e;
                    case w:
                      i = 14;
                      break e;
                    case k:
                      (i = 16), (r = null);
                      break e;
                  }
                (i = 29),
                  (n = Error(o(130, null === e ? "null" : typeof e, ""))),
                  (r = null);
            }
          return (
            ((t = Fu(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Iu(e, t, n, r) {
          return ((e = Fu(7, e, r, t)).lanes = n), e;
        }
        function Bu(e, t, n, r) {
          ((e = Fu(22, e, r, t)).elementType = S), (e.lanes = n);
          var a = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function () {
              var e = a._current;
              if (null === e) throw Error(o(456));
              if (0 === (2 & a._pendingVisibility)) {
                var t = Nr(e, 2);
                null !== t && ((a._pendingVisibility |= 2), Ls(t, e, 2));
              }
            },
            attach: function () {
              var e = a._current;
              if (null === e) throw Error(o(456));
              if (0 !== (2 & a._pendingVisibility)) {
                var t = Nr(e, 2);
                null !== t && ((a._pendingVisibility &= -3), Ls(t, e, 2));
              }
            },
          };
          return (e.stateNode = a), e;
        }
        function Hu(e, t, n) {
          return ((e = Fu(6, e, null, t)).lanes = n), e;
        }
        function qu(e, t, n) {
          return (
            ((t = Fu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Wu(e) {
          e.flags |= 4;
        }
        function $u(e, t) {
          if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !Of(t))) {
            if (
              null !== (t = Pa.current) &&
              ((4194176 & rs) === rs
                ? null !== Na
                : ((62914560 & rs) !== rs && 0 === (536870912 & rs)) ||
                  t !== Na)
            )
              throw ((da = ua), ia);
            e.flags |= 8192;
          }
        }
        function Vu(e, t) {
          null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? Oe() : 536870912),
              (e.lanes |= t),
              (ms |= t));
        }
        function Qu(e, t) {
          if (!Gr)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Yu(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 31457280 & a.subtreeFlags),
                (r |= 31457280 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ku(e, t, n) {
          var r = t.pendingProps;
          switch ((Qr(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return Yu(t), null;
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                bi(Ua),
                ee(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ra(t)
                    ? Wu(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Xr && (As(Xr), (Xr = null)))),
                Yu(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Wu(t),
                    null !== n
                      ? (Yu(t), $u(t, n))
                      : (Yu(t), (t.flags &= -16777217)))
                  : n
                  ? n !== e.memoizedState
                    ? (Wu(t), Yu(t), $u(t, n))
                    : (Yu(t), (t.flags &= -16777217))
                  : (e.memoizedProps !== r && Wu(t),
                    Yu(t),
                    (t.flags &= -16777217)),
                null
              );
            case 27:
              ne(t), (n = X.current);
              var a = t.type;
              if (null !== e && null != t.stateNode)
                e.memoizedProps !== r && Wu(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Yu(t), null;
                }
                (e = K.current),
                  ra(t) ? ta(t) : ((e = cf(a, r, n)), (t.stateNode = e), Wu(t));
              }
              return Yu(t), null;
            case 5:
              if ((ne(t), (n = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && Wu(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Yu(t), null;
                }
                if (((e = K.current), ra(t))) ta(t);
                else {
                  switch (((a = Kc(X.current)), e)) {
                    case 1:
                      e = a.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case 2:
                      e = a.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n
                      );
                      break;
                    default:
                      switch (n) {
                        case "svg":
                          e = a.createElementNS(
                            "http://www.w3.org/2000/svg",
                            n
                          );
                          break;
                        case "math":
                          e = a.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            n
                          );
                          break;
                        case "script":
                          ((e = a.createElement("div")).innerHTML =
                            "<script></script>"),
                            (e = e.removeChild(e.firstChild));
                          break;
                        case "select":
                          (e =
                            "string" === typeof r.is
                              ? a.createElement("select", {
                                  is: r.is,
                                })
                              : a.createElement("select")),
                            r.multiple
                              ? (e.multiple = !0)
                              : r.size && (e.size = r.size);
                          break;
                        default:
                          e =
                            "string" === typeof r.is
                              ? a.createElement(n, {
                                  is: r.is,
                                })
                              : a.createElement(n);
                      }
                  }
                  (e[je] = t), (e[Ue] = r);
                  e: for (a = t.child; null !== a; ) {
                    if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
                    else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                      (a.child.return = a), (a = a.child);
                      continue;
                    }
                    if (a === t) break e;
                    for (; null === a.sibling; ) {
                      if (null === a.return || a.return === t) break e;
                      a = a.return;
                    }
                    (a.sibling.return = a.return), (a = a.sibling);
                  }
                  t.stateNode = e;
                  e: switch ((Vc(e, n, r), n)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      e = !!r.autoFocus;
                      break e;
                    case "img":
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Wu(t);
                }
              }
              return Yu(t), (t.flags &= -16777217), null;
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Wu(t);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((e = X.current), ra(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (a = Yr))
                  )
                    switch (a.tag) {
                      case 27:
                      case 5:
                        r = a.memoizedProps;
                    }
                  (e[je] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      Hc(e.nodeValue, n)
                    )) || ea(t);
                } else
                  ((e = Kc(e).createTextNode(r))[je] = t), (t.stateNode = e);
              }
              return Yu(t), null;
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((a = ra(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(o(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(o(317));
                    a[je] = t;
                  } else
                    aa(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Yu(t), (a = !1);
                } else null !== Xr && (As(Xr), (Xr = null)), (a = !0);
                if (!a) return 256 & t.flags ? (za(t), t) : (za(t), null);
              }
              if ((za(t), 0 !== (128 & t.flags))) return (t.lanes = n), t;
              if (
                ((n = null !== r),
                (e = null !== e && null !== e.memoizedState),
                n)
              ) {
                (a = null),
                  null !== (r = t.child).alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (a = r.alternate.memoizedState.cachePool.pool);
                var l = null;
                null !== r.memoizedState &&
                  null !== r.memoizedState.cachePool &&
                  (l = r.memoizedState.cachePool.pool),
                  l !== a && (r.flags |= 2048);
              }
              return (
                n !== e && n && (t.child.flags |= 8192),
                Vu(t, t.updateQueue),
                Yu(t),
                null
              );
            case 4:
              return (
                ee(), null === e && Lc(t.stateNode.containerInfo), Yu(t), null
              );
            case 10:
              return bi(t.type), Yu(t), null;
            case 19:
              if ((Q(Aa), null === (a = t.memoizedState))) return Yu(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = a.rendering)))
                if (r) Qu(a, !1);
                else {
                  if (0 !== cs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = Fa(e))) {
                        for (
                          t.flags |= 128,
                            Qu(a, !1),
                            e = l.updateQueue,
                            t.updateQueue = e,
                            Vu(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          ju(n, e), (n = n.sibling);
                        return Y(Aa, (1 & Aa.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    ue() > ws &&
                    ((t.flags |= 128),
                    (r = !0),
                    Qu(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = Fa(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      Vu(t, e),
                      Qu(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !l.alternate &&
                        !Gr)
                    )
                      return Yu(t), null;
                  } else
                    2 * ue() - a.renderingStartTime > ws &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qu(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (e = a.last) ? (e.sibling = l) : (t.child = l),
                    (a.last = l));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = ue()),
                  (t.sibling = null),
                  (e = Aa.current),
                  Y(Aa, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (Yu(t), null);
            case 22:
            case 23:
              return (
                za(t),
                Ta(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 !== (536870912 & n) &&
                    0 === (128 & t.flags) &&
                    (Yu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Yu(t),
                null !== (n = t.updateQueue) && Vu(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && Q(Ya),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                bi(Ua),
                Yu(t),
                null
              );
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gu(e, t) {
          switch ((Qr(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                bi(Ua),
                ee(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return ne(t), null;
            case 13:
              if (
                (za(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                aa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Q(Aa), null;
            case 4:
              return ee(), null;
            case 10:
              return bi(t.type), null;
            case 22:
            case 23:
              return (
                za(t),
                Ta(),
                null !== e && Q(Ya),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return bi(Ua), null;
            default:
              return null;
          }
        }
        function Xu(e, t) {
          switch ((Qr(t), t.tag)) {
            case 3:
              bi(Ua), ee();
              break;
            case 26:
            case 27:
            case 5:
              ne(t);
              break;
            case 4:
              ee();
              break;
            case 13:
              za(t);
              break;
            case 19:
              Q(Aa);
              break;
            case 10:
              bi(t.type);
              break;
            case 22:
            case 23:
              za(t), Ta(), null !== e && Q(Ya);
              break;
            case 24:
              bi(Ua);
          }
        }
        var Ju = {
            getCacheForType: function (e) {
              var t = Ci(Ua),
                n = t.data.get(e);
              return void 0 === n && ((n = e()), t.data.set(e, n)), n;
            },
          },
          Zu = "function" === typeof WeakMap ? WeakMap : Map,
          es = 0,
          ts = null,
          ns = null,
          rs = 0,
          as = 0,
          ls = null,
          os = !1,
          is = !1,
          us = !1,
          ss = 0,
          cs = 0,
          fs = 0,
          ds = 0,
          ps = 0,
          hs = 0,
          ms = 0,
          gs = null,
          ys = null,
          vs = !1,
          bs = 0,
          ws = 1 / 0,
          ks = null,
          Ss = null,
          Es = !1,
          xs = null,
          Cs = 0,
          _s = 0,
          Ts = null,
          Ps = 0,
          Ns = null;
        function Os() {
          if (0 !== (2 & es) && 0 !== rs) return rs & -rs;
          if (null !== O.T) {
            return 0 !== Wa ? Wa : kc();
          }
          return De();
        }
        function Rs() {
          0 === hs && (hs = 0 === (536870912 & rs) || Gr ? Ne() : 536870912);
          var e = Pa.current;
          return null !== e && (e.flags |= 32), hs;
        }
        function Ls(e, t, n) {
          ((e === ts && 2 === as) || null !== e.cancelPendingCommit) &&
            (Is(e, 0), Ms(e, rs, hs, !1)),
            Le(e, n),
            (0 !== (2 & es) && e === ts) ||
              (e === ts &&
                (0 === (2 & es) && (ds |= n), 4 === cs && Ms(e, rs, hs, !1)),
              mc(e));
        }
        function zs(e, t, n) {
          if (0 !== (6 & es)) throw Error(o(327));
          for (
            var r =
                (!n && 0 === (60 & t) && 0 === (t & e.expiredLanes)) ||
                Te(e, t),
              a = r
                ? (function (e, t) {
                    var n = es;
                    es |= 2;
                    var r = Hs(),
                      a = qs();
                    ts !== e || rs !== t
                      ? ((ks = null), (ws = ue() + 500), Is(e, t))
                      : (is = Te(e, t));
                    e: for (;;)
                      try {
                        if (0 !== as && null !== ns) {
                          t = ns;
                          var l = ls;
                          t: switch (as) {
                            case 1:
                              (as = 0), (ls = null), Gs(e, t, l, 1);
                              break;
                            case 2:
                              if (sa(l)) {
                                (as = 0), (ls = null), Ks(t);
                                break;
                              }
                              (t = function () {
                                2 === as && ts === e && (as = 7), mc(e);
                              }),
                                l.then(t, t);
                              break e;
                            case 3:
                              as = 7;
                              break e;
                            case 4:
                              as = 5;
                              break e;
                            case 7:
                              sa(l)
                                ? ((as = 0), (ls = null), Ks(t))
                                : ((as = 0), (ls = null), Gs(e, t, l, 7));
                              break;
                            case 5:
                              var i = null;
                              switch (ns.tag) {
                                case 26:
                                  i = ns.memoizedState;
                                case 5:
                                case 27:
                                  var u = ns;
                                  if (!i || Of(i)) {
                                    (as = 0), (ls = null);
                                    var s = u.sibling;
                                    if (null !== s) ns = s;
                                    else {
                                      var c = u.return;
                                      null !== c
                                        ? ((ns = c), Xs(c))
                                        : (ns = null);
                                    }
                                    break t;
                                  }
                              }
                              (as = 0), (ls = null), Gs(e, t, l, 5);
                              break;
                            case 6:
                              (as = 0), (ls = null), Gs(e, t, l, 6);
                              break;
                            case 8:
                              Us(), (cs = 6);
                              break e;
                            default:
                              throw Error(o(462));
                          }
                        }
                        Qs();
                        break;
                      } catch (f) {
                        Bs(e, f);
                      }
                    return (
                      (yi = gi = null),
                      (O.H = r),
                      (O.A = a),
                      (es = n),
                      null !== ns ? 0 : ((ts = null), (rs = 0), _r(), cs)
                    );
                  })(e, t)
                : $s(e, t, !0),
              l = r;
            ;

          ) {
            if (0 === a) {
              is && !r && Ms(e, t, 0, !1);
              break;
            }
            if (6 === a) Ms(e, t, 0, !os);
            else {
              if (((n = e.current.alternate), l && !Ds(n))) {
                (a = $s(e, t, !1)), (l = !1);
                continue;
              }
              if (2 === a) {
                if (((l = t), e.errorRecoveryDisabledLanes & l)) var i = 0;
                else
                  i =
                    0 !== (i = -536870913 & e.pendingLanes)
                      ? i
                      : 536870912 & i
                      ? 536870912
                      : 0;
                if (0 !== i) {
                  t = i;
                  e: {
                    var u = e;
                    a = gs;
                    var s = u.current.memoizedState.isDehydrated;
                    if (
                      (s && (Is(u, i).flags |= 256), 2 !== (i = $s(u, i, !1)))
                    ) {
                      if (us && !s) {
                        (u.errorRecoveryDisabledLanes |= l), (ds |= l), (a = 4);
                        break e;
                      }
                      (l = ys), (ys = a), null !== l && As(l);
                    }
                    a = i;
                  }
                  if (((l = !1), 2 !== a)) continue;
                }
              }
              if (1 === a) {
                Is(e, 0), Ms(e, t, 0, !0);
                break;
              }
              e: {
                switch (((r = e), a)) {
                  case 0:
                  case 1:
                    throw Error(o(345));
                  case 4:
                    if ((4194176 & t) === t) {
                      Ms(r, t, hs, !os);
                      break e;
                    }
                    break;
                  case 2:
                    ys = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(o(329));
                }
                if (
                  ((r.finishedWork = n),
                  (r.finishedLanes = t),
                  (62914560 & t) === t && 10 < (l = bs + 300 - ue()))
                ) {
                  if ((Ms(r, t, hs, !os), 0 !== _e(r, 0))) break e;
                  r.timeoutHandle = ef(
                    Fs.bind(
                      null,
                      r,
                      n,
                      ys,
                      ks,
                      vs,
                      t,
                      hs,
                      ds,
                      ms,
                      os,
                      2,
                      -0,
                      0
                    ),
                    l
                  );
                } else Fs(r, n, ys, ks, vs, t, hs, ds, ms, os, 0, -0, 0);
              }
            }
            break;
          }
          mc(e);
        }
        function As(e) {
          null === ys ? (ys = e) : ys.push.apply(ys, e);
        }
        function Fs(e, t, n, r, a, l, i, u, s, c, f, d, p) {
          var h = t.subtreeFlags;
          if (
            (8192 & h || 16785408 === (16785408 & h)) &&
            ((Rf = {
              stylesheets: null,
              count: 0,
              unsuspend: Lf,
            }),
            Pu(t),
            null !==
              (t = (function () {
                if (null === Rf) throw Error(o(475));
                var e = Rf;
                return (
                  e.stylesheets && 0 === e.count && Ff(e, e.stylesheets),
                  0 < e.count
                    ? function (t) {
                        var n = setTimeout(function () {
                          if (
                            (e.stylesheets && Ff(e, e.stylesheets), e.unsuspend)
                          ) {
                            var t = e.unsuspend;
                            (e.unsuspend = null), t();
                          }
                        }, 6e4);
                        return (
                          (e.unsuspend = t),
                          function () {
                            (e.unsuspend = null), clearTimeout(n);
                          }
                        );
                      }
                    : null
                );
              })()))
          )
            return (
              (e.cancelPendingCommit = t(
                Zs.bind(null, e, n, r, a, i, u, s, 1, d, p)
              )),
              void Ms(e, l, i, !c)
            );
          Zs(e, n, r, a, i, u, s, f, d, p);
        }
        function Ds(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var a = n[r],
                  l = a.getSnapshot;
                a = a.value;
                try {
                  if (!Yn(l(), a)) return !1;
                } catch (o) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              (n.return = t), (t = n);
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return !0;
        }
        function Ms(e, t, n, r) {
          (t &= ~ps),
            (t &= ~ds),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes);
          for (var a = t; 0 < a; ) {
            var l = 31 - we(a),
              o = 1 << l;
            (r[l] = -1), (a &= ~o);
          }
          0 !== n && ze(e, n, t);
        }
        function js() {
          return 0 !== (6 & es) || (gc(0, !1), !1);
        }
        function Us() {
          if (null !== ns) {
            if (0 === as) var e = ns.return;
            else
              (yi = gi = null), yl((e = ns)), (ha = null), (ma = 0), (e = ns);
            for (; null !== e; ) Xu(e.alternate, e), (e = e.return);
            ns = null;
          }
        }
        function Is(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          -1 !== n && ((e.timeoutHandle = -1), tf(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            Us(),
            (ts = e),
            (ns = n = Mu(e.current, null)),
            (rs = t),
            (as = 0),
            (ls = null),
            (os = !1),
            (is = Te(e, t)),
            (us = !1),
            (ms = hs = ps = ds = fs = cs = 0),
            (ys = gs = null),
            (vs = !1),
            0 !== (8 & t) && (t |= 32 & t);
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var a = 31 - we(r),
                l = 1 << a;
              (t |= e[a]), (r &= ~l);
            }
          return (ss = t), _r(), n;
        }
        function Bs(e, t) {
          (Za = null),
            (O.H = Co),
            t === oa
              ? ((t = pa()), (as = 3))
              : t === ia
              ? ((t = pa()), (as = 4))
              : (as =
                  t === qo
                    ? 8
                    : null !== t &&
                      "object" === typeof t &&
                      "function" === typeof t.then
                    ? 6
                    : 1),
            (ls = t),
            null === ns && ((cs = 1), jo(e, Ar(t, e.current)));
        }
        function Hs() {
          var e = O.H;
          return (O.H = Co), null === e ? Co : e;
        }
        function qs() {
          var e = O.A;
          return (O.A = Ju), e;
        }
        function Ws() {
          (cs = 4),
            os || ((4194176 & rs) !== rs && null !== Pa.current) || (is = !0),
            (0 === (134217727 & fs) && 0 === (134217727 & ds)) ||
              null === ts ||
              Ms(ts, rs, hs, !1);
        }
        function $s(e, t, n) {
          var r = es;
          es |= 2;
          var a = Hs(),
            l = qs();
          (ts === e && rs === t) || ((ks = null), Is(e, t)), (t = !1);
          var o = cs;
          e: for (;;)
            try {
              if (0 !== as && null !== ns) {
                var i = ns,
                  u = ls;
                switch (as) {
                  case 8:
                    Us(), (o = 6);
                    break e;
                  case 3:
                  case 2:
                  case 6:
                    null === Pa.current && (t = !0);
                    var s = as;
                    if (((as = 0), (ls = null), Gs(e, i, u, s), n && is)) {
                      o = 0;
                      break e;
                    }
                    break;
                  default:
                    (s = as), (as = 0), (ls = null), Gs(e, i, u, s);
                }
              }
              Vs(), (o = cs);
              break;
            } catch (c) {
              Bs(e, c);
            }
          return (
            t && e.shellSuspendCounter++,
            (yi = gi = null),
            (es = r),
            (O.H = a),
            (O.A = l),
            null === ns && ((ts = null), (rs = 0), _r()),
            o
          );
        }
        function Vs() {
          for (; null !== ns; ) Ys(ns);
        }
        function Qs() {
          for (; null !== ns && !oe(); ) Ys(ns);
        }
        function Ys(e) {
          var t = hi(e.alternate, e, ss);
          (e.memoizedProps = e.pendingProps), null === t ? Xs(e) : (ns = t);
        }
        function Ks(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Zo(n, t, t.pendingProps, t.type, void 0, rs);
              break;
            case 11:
              t = Zo(n, t, t.pendingProps, t.type.render, t.ref, rs);
              break;
            case 5:
              yl(t);
            default:
              Xu(n, t), (t = hi(n, (t = ns = ju(t, ss)), ss));
          }
          (e.memoizedProps = e.pendingProps), null === t ? Xs(e) : (ns = t);
        }
        function Gs(e, t, n, r) {
          (yi = gi = null), yl(t), (ha = null), (ma = 0);
          var a = t.return;
          try {
            if (
              (function (e, t, n, r, a) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" === typeof r &&
                    "function" === typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && Si(t, n, a, !0),
                    null !== (n = Pa.current))
                  ) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === Na
                            ? Ws()
                            : null === n.alternate && 0 === cs && (cs = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = a),
                          r === ua
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              ac(e, r, a)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === ua
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                ? (t.retryQueue = new Set([r]))
                                : n.add(r),
                              ac(e, r, a)),
                          !1
                        );
                    }
                    throw Error(o(435, n.tag));
                  }
                  return ac(e, r, a), Ws(), !1;
                }
                if (Gr)
                  return (
                    null !== (t = Pa.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = a),
                        r !== Zr &&
                          la(
                            Ar(
                              (e = Error(o(422), {
                                cause: r,
                              })),
                              n
                            )
                          ))
                      : (r !== Zr &&
                          la(
                            Ar(
                              (t = Error(o(423), {
                                cause: r,
                              })),
                              n
                            )
                          ),
                        ((e = e.current.alternate).flags |= 65536),
                        (a &= -a),
                        (e.lanes |= a),
                        (r = Ar(r, n)),
                        Ai(e, (a = Io(e.stateNode, r, a))),
                        4 !== cs && (cs = 2)),
                    !1
                  );
                var l = Error(o(520), {
                  cause: r,
                });
                if (
                  ((l = Ar(l, n)),
                  null === gs ? (gs = [l]) : gs.push(l),
                  4 !== cs && (cs = 2),
                  null === t)
                )
                  return !0;
                (r = Ar(r, n)), (n = t);
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = a & -a),
                        (n.lanes |= e),
                        Ai(n, (e = Io(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (l = n.stateNode),
                        0 === (128 & n.flags) &&
                          ("function" === typeof t.getDerivedStateFromError ||
                            (null !== l &&
                              "function" === typeof l.componentDidCatch &&
                              (null === Ss || !Ss.has(l)))))
                      )
                        return (
                          (n.flags |= 65536),
                          (a &= -a),
                          (n.lanes |= a),
                          Ho((a = Bo(a)), e, n, r),
                          Ai(n, a),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, a, t, n, rs)
            )
              return (cs = 1), jo(e, Ar(n, e.current)), void (ns = null);
          } catch (l) {
            if (null !== a) throw ((ns = a), l);
            return (cs = 1), jo(e, Ar(n, e.current)), void (ns = null);
          }
          32768 & t.flags
            ? (Gr || 1 === r
                ? (e = !0)
                : is || 0 !== (536870912 & rs)
                ? (e = !1)
                : ((os = e = !0),
                  (2 === r || 3 === r || 6 === r) &&
                    null !== (r = Pa.current) &&
                    13 === r.tag &&
                    (r.flags |= 16384)),
              Js(t, e))
            : Xs(t);
        }
        function Xs(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void Js(t, os);
            e = t.return;
            var n = Ku(t.alternate, t, ss);
            if (null !== n) return void (ns = n);
            if (null !== (t = t.sibling)) return void (ns = t);
            ns = t = e;
          } while (null !== t);
          0 === cs && (cs = 5);
        }
        function Js(e, t) {
          do {
            var n = Gu(e.alternate, e);
            if (null !== n) return (n.flags &= 32767), void (ns = n);
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (ns = e);
            ns = e = n;
          } while (null !== e);
          (cs = 6), (ns = null);
        }
        function Zs(e, t, n, r, a, l, i, u, s, c) {
          var f = O.T,
            d = H.p;
          try {
            (H.p = 2),
              (O.T = null),
              (function (e, t, n, r, a, l, i, u) {
                do {
                  tc();
                } while (null !== xs);
                if (0 !== (6 & es)) throw Error(o(327));
                var s = e.finishedWork;
                if (((r = e.finishedLanes), null === s)) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  s === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null),
                  (e.callbackPriority = 0),
                  (e.cancelPendingCommit = null);
                var c = s.lanes | s.childLanes;
                if (
                  ((function (e, t, n, r, a, l) {
                    var o = e.pendingLanes;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.warmLanes = 0),
                      (e.expiredLanes &= n),
                      (e.entangledLanes &= n),
                      (e.errorRecoveryDisabledLanes &= n),
                      (e.shellSuspendCounter = 0);
                    var i = e.entanglements,
                      u = e.expirationTimes,
                      s = e.hiddenUpdates;
                    for (n = o & ~n; 0 < n; ) {
                      var c = 31 - we(n),
                        f = 1 << c;
                      (i[c] = 0), (u[c] = -1);
                      var d = s[c];
                      if (null !== d)
                        for (s[c] = null, c = 0; c < d.length; c++) {
                          var p = d[c];
                          null !== p && (p.lane &= -536870913);
                        }
                      n &= ~f;
                    }
                    0 !== r && ze(e, r, 0),
                      0 !== l &&
                        0 === a &&
                        0 !== e.tag &&
                        (e.suspendedLanes |= l & ~(o & ~t));
                  })(e, r, (c |= Cr), l, i, u),
                  e === ts && ((ns = ts = null), (rs = 0)),
                  (0 === (10256 & s.subtreeFlags) && 0 === (10256 & s.flags)) ||
                    Es ||
                    ((Es = !0),
                    (_s = c),
                    (Ts = n),
                    (function (e, t) {
                      ae(e, t);
                    })(de, function () {
                      return tc(), null;
                    })),
                  (n = 0 !== (15990 & s.flags)),
                  0 !== (15990 & s.subtreeFlags) || n
                    ? ((n = O.T),
                      (O.T = null),
                      (l = H.p),
                      (H.p = 2),
                      (i = es),
                      (es |= 4),
                      (function (e, t) {
                        if (
                          ((e = e.containerInfo), (Qc = $f), er((e = Zn(e))))
                        ) {
                          if ("selectionStart" in e)
                            var n = {
                              start: e.selectionStart,
                              end: e.selectionEnd,
                            };
                          else
                            e: {
                              var r =
                                (n =
                                  ((n = e.ownerDocument) && n.defaultView) ||
                                  window).getSelection && n.getSelection();
                              if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var a = r.anchorOffset,
                                  l = r.focusNode;
                                r = r.focusOffset;
                                try {
                                  n.nodeType, l.nodeType;
                                } catch (g) {
                                  n = null;
                                  break e;
                                }
                                var i = 0,
                                  u = -1,
                                  s = -1,
                                  c = 0,
                                  f = 0,
                                  d = e,
                                  p = null;
                                t: for (;;) {
                                  for (
                                    var h;
                                    d !== n ||
                                      (0 !== a && 3 !== d.nodeType) ||
                                      (u = i + a),
                                      d !== l ||
                                        (0 !== r && 3 !== d.nodeType) ||
                                        (s = i + r),
                                      3 === d.nodeType &&
                                        (i += d.nodeValue.length),
                                      null !== (h = d.firstChild);

                                  )
                                    (p = d), (d = h);
                                  for (;;) {
                                    if (d === e) break t;
                                    if (
                                      (p === n && ++c === a && (u = i),
                                      p === l && ++f === r && (s = i),
                                      null !== (h = d.nextSibling))
                                    )
                                      break;
                                    p = (d = p).parentNode;
                                  }
                                  d = h;
                                }
                                n =
                                  -1 === u || -1 === s
                                    ? null
                                    : {
                                        start: u,
                                        end: s,
                                      };
                              } else n = null;
                            }
                          n = n || {
                            start: 0,
                            end: 0,
                          };
                        } else n = null;
                        for (
                          Yc = {
                            focusedElem: e,
                            selectionRange: n,
                          },
                            $f = !1,
                            nu = t;
                          null !== nu;

                        )
                          if (
                            ((e = (t = nu).child),
                            0 !== (1028 & t.subtreeFlags) && null !== e)
                          )
                            (e.return = t), (nu = e);
                          else
                            for (; null !== nu; ) {
                              switch (
                                ((l = (t = nu).alternate), (e = t.flags), t.tag)
                              ) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 26:
                                case 27:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (0 !== (1024 & e) && null !== l) {
                                    (e = void 0),
                                      (n = t),
                                      (a = l.memoizedProps),
                                      (l = l.memoizedState),
                                      (r = n.stateNode);
                                    try {
                                      var m = zo(
                                        n.type,
                                        a,
                                        (n.elementType, n.type)
                                      );
                                      (e = r.getSnapshotBeforeUpdate(m, l)),
                                        (r.__reactInternalSnapshotBeforeUpdate =
                                          e);
                                    } catch (y) {
                                      rc(n, n.return, y);
                                    }
                                  }
                                  break;
                                case 3:
                                  if (0 !== (1024 & e))
                                    if (
                                      9 ===
                                      (n = (e = t.stateNode.containerInfo)
                                        .nodeType)
                                    )
                                      of(e);
                                    else if (1 === n)
                                      switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                          of(e);
                                          break;
                                        default:
                                          e.textContent = "";
                                      }
                                  break;
                                default:
                                  if (0 !== (1024 & e)) throw Error(o(163));
                              }
                              if (null !== (e = t.sibling)) {
                                (e.return = t.return), (nu = e);
                                break;
                              }
                              nu = t.return;
                            }
                        (m = ru), (ru = !1);
                      })(e, s),
                      hu(s, e),
                      tr(Yc, e.containerInfo),
                      ($f = !!Qc),
                      (Yc = Qc = null),
                      (e.current = s),
                      au(e, s.alternate, s),
                      ie(),
                      (es = i),
                      (H.p = l),
                      (O.T = n))
                    : (e.current = s),
                  Es ? ((Es = !1), (xs = e), (Cs = r)) : ec(e, c),
                  (c = e.pendingLanes),
                  0 === c && (Ss = null),
                  (function (e) {
                    if (ve && "function" === typeof ve.onCommitFiberRoot)
                      try {
                        ve.onCommitFiberRoot(
                          ye,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(s.stateNode),
                  mc(e),
                  null !== t)
                )
                  for (a = e.onRecoverableError, s = 0; s < t.length; s++)
                    (c = t[s]),
                      a(c.value, {
                        componentStack: c.stack,
                      });
                0 !== (3 & Cs) && tc(),
                  (c = e.pendingLanes),
                  0 !== (4194218 & r) && 0 !== (42 & c)
                    ? e === Ns
                      ? Ps++
                      : ((Ps = 0), (Ns = e))
                    : (Ps = 0),
                  gc(0, !1);
              })(e, t, n, r, d, a, l, i);
          } finally {
            (O.T = f), (H.p = d);
          }
        }
        function ec(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ba(t));
        }
        function tc() {
          if (null !== xs) {
            var e = xs,
              t = _s;
            _s = 0;
            var n = Fe(Cs),
              r = O.T,
              a = H.p;
            try {
              if (((H.p = 32 > n ? 32 : n), (O.T = null), null === xs))
                var l = !1;
              else {
                (n = Ts), (Ts = null);
                var i = xs,
                  u = Cs;
                if (((xs = null), (Cs = 0), 0 !== (6 & es)))
                  throw Error(o(331));
                var s = es;
                if (
                  ((es |= 4),
                  Ru(i.current),
                  Eu(i, i.current, u, n),
                  (es = s),
                  gc(0, !1),
                  ve && "function" === typeof ve.onPostCommitFiberRoot)
                )
                  try {
                    ve.onPostCommitFiberRoot(ye, i);
                  } catch (c) {}
                l = !0;
              }
              return l;
            } finally {
              (H.p = a), (O.T = r), ec(e, t);
            }
          }
          return !1;
        }
        function nc(e, t, n) {
          (t = Ar(n, t)),
            null !== (e = Li(e, (t = Io(e.stateNode, t, 2)), 2)) &&
              (Le(e, 2), mc(e));
        }
        function rc(e, t, n) {
          if (3 === e.tag) nc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                nc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ss || !Ss.has(r)))
                ) {
                  (e = Ar(n, e)),
                    null !== (r = Li(t, (n = Bo(2)), 2)) &&
                      (Ho(n, r, t, e), Le(r, 2), mc(r));
                  break;
                }
              }
              t = t.return;
            }
        }
        function ac(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new Zu();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) ||
            ((us = !0), a.add(n), (e = lc.bind(null, e, t, n)), t.then(e, e));
        }
        function lc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            ts === e &&
              (rs & n) === n &&
              (4 === cs ||
              (3 === cs && (62914560 & rs) === rs && 300 > ue() - bs)
                ? 0 === (2 & es) && Is(e, 0)
                : (ps |= n),
              ms === rs && (ms = 0)),
            mc(e);
        }
        function oc(e, t) {
          0 === t && (t = Oe()), null !== (e = Nr(e, t)) && (Le(e, t), mc(e));
        }
        function ic(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), oc(e, n);
        }
        function uc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), oc(e, n);
        }
        var sc = null,
          cc = null,
          fc = !1,
          dc = !1,
          pc = !1,
          hc = 0;
        function mc(e) {
          var t;
          e !== cc &&
            null === e.next &&
            (null === cc ? (sc = cc = e) : (cc = cc.next = e)),
            (dc = !0),
            fc ||
              ((fc = !0),
              (t = yc),
              rf(function () {
                0 !== (6 & es) ? ae(ce, t) : t();
              }));
        }
        function gc(e, t) {
          if (!pc && dc) {
            pc = !0;
            do {
              for (var n = !1, r = sc; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var a = r.pendingLanes;
                    if (0 === a) var l = 0;
                    else {
                      var o = r.suspendedLanes,
                        i = r.pingedLanes;
                      (l = (1 << (31 - we(42 | e) + 1)) - 1),
                        (l =
                          201326677 & (l &= a & ~(o & ~i))
                            ? (201326677 & l) | 1
                            : l
                            ? 2 | l
                            : 0);
                    }
                    0 !== l && ((n = !0), wc(r, l));
                  } else
                    (l = rs),
                      0 === (3 & (l = _e(r, r === ts ? l : 0))) ||
                        Te(r, l) ||
                        ((n = !0), wc(r, l));
                r = r.next;
              }
            } while (n);
            pc = !1;
          }
        }
        function yc() {
          dc = fc = !1;
          var e = 0;
          0 !== hc &&
            ((function () {
              var e = window.event;
              if (e && "popstate" === e.type) return e !== Zc && ((Zc = e), !0);
              return (Zc = null), !1;
            })() && (e = hc),
            (hc = 0));
          for (var t = ue(), n = null, r = sc; null !== r; ) {
            var a = r.next,
              l = vc(r, t);
            0 === l
              ? ((r.next = null),
                null === n ? (sc = a) : (n.next = a),
                null === a && (cc = n))
              : ((n = r), (0 !== e || 0 !== (3 & l)) && (dc = !0)),
              (r = a);
          }
          gc(e, !1);
        }
        function vc(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              a = e.expirationTimes,
              l = -62914561 & e.pendingLanes;
            0 < l;

          ) {
            var o = 31 - we(l),
              i = 1 << o,
              u = a[o];
            -1 === u
              ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = Pe(i, t))
              : u <= t && (e.expiredLanes |= i),
              (l &= ~i);
          }
          if (
            ((n = rs),
            (n = _e(e, e === (t = ts) ? n : 0)),
            (r = e.callbackNode),
            0 === n || (e === t && 2 === as) || null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && le(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (0 === (3 & n) || Te(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && le(r), Fe(n))) {
              case 2:
              case 8:
                n = fe;
                break;
              case 32:
              default:
                n = de;
                break;
              case 268435456:
                n = he;
            }
            return (
              (r = bc.bind(null, e)),
              (n = ae(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && le(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function bc(e, t) {
          var n = e.callbackNode;
          if (tc() && e.callbackNode !== n) return null;
          var r = rs;
          return 0 === (r = _e(e, e === ts ? r : 0))
            ? null
            : (zs(e, r, t),
              vc(e, ue()),
              null != e.callbackNode && e.callbackNode === n
                ? bc.bind(null, e)
                : null);
        }
        function wc(e, t) {
          if (tc()) return null;
          zs(e, t, !0);
        }
        function kc() {
          return 0 === hc && (hc = Ne()), hc;
        }
        function Sc(e) {
          return null == e || "symbol" === typeof e || "boolean" === typeof e
            ? null
            : "function" === typeof e
            ? e
            : Nt("" + e);
        }
        function Ec(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var xc = 0; xc < kr.length; xc++) {
          var Cc = kr[xc];
          Sr(Cc.toLowerCase(), "on" + (Cc[0].toUpperCase() + Cc.slice(1)));
        }
        Sr(pr, "onAnimationEnd"),
          Sr(hr, "onAnimationIteration"),
          Sr(mr, "onAnimationStart"),
          Sr("dblclick", "onDoubleClick"),
          Sr("focusin", "onFocus"),
          Sr("focusout", "onBlur"),
          Sr(gr, "onTransitionRun"),
          Sr(yr, "onTransitionStart"),
          Sr(vr, "onTransitionCancel"),
          Sr(br, "onTransitionEnd"),
          tt("onMouseEnter", ["mouseout", "mouseover"]),
          tt("onMouseLeave", ["mouseout", "mouseover"]),
          tt("onPointerEnter", ["pointerout", "pointerover"]),
          tt("onPointerLeave", ["pointerout", "pointerover"]),
          et(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          et(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          et("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          et(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var _c =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Tc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(_c)
          );
        function Pc(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  (l = i), (a.currentTarget = s);
                  try {
                    l(a);
                  } catch (c) {
                    Ao(c);
                  }
                  (a.currentTarget = null), (l = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  (l = i), (a.currentTarget = s);
                  try {
                    l(a);
                  } catch (c) {
                    Ao(c);
                  }
                  (a.currentTarget = null), (l = u);
                }
            }
          }
        }
        function Nc(e, t) {
          var n = t[Be];
          void 0 === n && (n = t[Be] = new Set());
          var r = e + "__bubble";
          n.has(r) || (zc(t, e, 2, !1), n.add(r));
        }
        function Oc(e, t, n) {
          var r = 0;
          t && (r |= 4), zc(n, e, r, t);
        }
        var Rc = "_reactListening" + Math.random().toString(36).slice(2);
        function Lc(e) {
          if (!e[Rc]) {
            (e[Rc] = !0),
              Je.forEach(function (t) {
                "selectionchange" !== t &&
                  (Tc.has(t) || Oc(t, !1, e), Oc(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Rc] || ((t[Rc] = !0), Oc("selectionchange", !1, t));
          }
        }
        function zc(e, t, n, r) {
          switch (Jf(t)) {
            case 2:
              var a = Vf;
              break;
            case 8:
              a = Qf;
              break;
            default:
              a = Yf;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !jt ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: a,
                  })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, {
                  passive: a,
                })
              : e.addEventListener(t, n, !1);
        }
        function Ac(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = Qe(i))) return;
                  if (5 === (u = o.tag) || 6 === u || 26 === u || 27 === u) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Dt(function () {
            var r = l,
              a = Rt(n),
              o = [];
            e: {
              var i = wr.get(e);
              if (void 0 !== i) {
                var u = Jt,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === Wt(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = hn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = an);
                    break;
                  case "focusout":
                    (s = "blur"), (u = an);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = an;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = nn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = rn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = gn;
                    break;
                  case pr:
                  case hr:
                  case mr:
                    u = ln;
                    break;
                  case br:
                    u = yn;
                    break;
                  case "scroll":
                  case "scrollend":
                    u = en;
                    break;
                  case "wheel":
                    u = vn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = on;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = mn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    u = bn;
                }
                var c = 0 !== (4 & t),
                  f = !c && ("scroll" === e || "scrollend" === e),
                  d = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = h;
                  if (
                    ((p = m.stateNode),
                    (5 !== (m = m.tag) && 26 !== m && 27 !== m) ||
                      null === p ||
                      null === d ||
                      (null != (m = Mt(h, d)) && c.push(Fc(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  o.push({
                    event: i,
                    listeners: c,
                  }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === Ot ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!Qe(s) && !s[Ie])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? Qe(s)
                          : null) &&
                        ((f = M(s)),
                        (c = s.tag),
                        s !== f || (5 !== c && 27 !== c && 6 !== c)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = nn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = mn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? i : Ke(u)),
                  (p = null == s ? i : Ke(s)),
                  ((i = new c(m, h + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  Qe(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Mc(p)) h++;
                    for (p = 0, m = d; m; m = Mc(m)) p++;
                    for (; 0 < h - p; ) (c = Mc(c)), h--;
                    for (; 0 < p - h; ) (d = Mc(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Mc(c)), (d = Mc(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && jc(o, i, u, c, !1),
                  null !== s && null !== f && jc(o, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? Ke(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var g = Mn;
              else if (Rn(i))
                if (jn) g = Qn;
                else {
                  g = $n;
                  var y = Wn;
                }
              else
                !(u = i.nodeName) ||
                "input" !== u.toLowerCase() ||
                ("checkbox" !== i.type && "radio" !== i.type)
                  ? r && _t(r.elementType) && (g = Mn)
                  : (g = Vn);
              switch (
                (g && (g = g(e, r))
                  ? Ln(o, g, n, a)
                  : (y && y(e, i, r),
                    "focusout" === e &&
                      r &&
                      "number" === i.type &&
                      null != r.memoizedProps.value &&
                      vt(i, "number", i.value)),
                (y = r ? Ke(r) : window),
                e)
              ) {
                case "focusin":
                  (Rn(y) || "true" === y.contentEditable) &&
                    ((rr = y), (ar = r), (lr = null));
                  break;
                case "focusout":
                  lr = ar = rr = null;
                  break;
                case "mousedown":
                  or = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (or = !1), ir(o, n, a);
                  break;
                case "selectionchange":
                  if (nr) break;
                case "keydown":
                case "keyup":
                  ir(o, n, a);
              }
              var v;
              if (kn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Nn
                  ? Tn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (xn &&
                  "ko" !== n.locale &&
                  (Nn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Nn && (v = qt())
                    : ((Bt = "value" in (It = a) ? It.value : It.textContent),
                      (Nn = !0))),
                0 < (y = Dc(r, b)).length &&
                  ((b = new un(b, e, null, n, a)),
                  o.push({
                    event: b,
                    listeners: y,
                  }),
                  v ? (b.data = v) : null !== (v = Pn(n)) && (b.data = v))),
                (v = En
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Pn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((_n = !0), Cn);
                        case "textInput":
                          return (e = t.data) === Cn && _n ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Nn)
                        return "compositionend" === e || (!kn && Tn(e, t))
                          ? ((e = qt()), (Ht = Bt = It = null), (Nn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return xn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (b = Dc(r, "onBeforeInput")).length &&
                  ((y = new un("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({
                    event: y,
                    listeners: b,
                  }),
                  (y.data = v)),
                (function (e, t, n, r, a) {
                  if ("submit" === t && n && n.stateNode === a) {
                    var l = Sc((a[Ue] || null).action),
                      o = r.submitter;
                    o &&
                      null !==
                        (t = (t = o[Ue] || null)
                          ? Sc(t.formAction)
                          : o.getAttribute("formAction")) &&
                      ((l = t), (o = null));
                    var i = new Jt("action", "action", null, r, a);
                    e.push({
                      event: i,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== hc) {
                                var e = o ? Ec(a, o) : new FormData(a);
                                co(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: l,
                                  },
                                  null,
                                  e
                                );
                              }
                            } else
                              "function" === typeof l &&
                                (i.preventDefault(),
                                (e = o ? Ec(a, o) : new FormData(a)),
                                co(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: l,
                                  },
                                  l,
                                  e
                                ));
                          },
                          currentTarget: a,
                        },
                      ],
                    });
                  }
                })(o, e, r, n, a);
            }
            Pc(o, t);
          });
        }
        function Fc(e, t, n) {
          return {
            instance: e,
            listener: t,
            currentTarget: n,
          };
        }
        function Dc(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            (5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
              null === l ||
              (null != (a = Mt(e, n)) && r.unshift(Fc(e, a, l)),
              null != (a = Mt(e, t)) && r.push(Fc(e, a, l))),
              (e = e.return);
          }
          return r;
        }
        function Mc(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function jc(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (((i = i.tag), null !== u && u === r)) break;
            (5 !== i && 26 !== i && 27 !== i) ||
              null === s ||
              ((u = s),
              a
                ? null != (s = Mt(n, l)) && o.unshift(Fc(n, s, u))
                : a || (null != (s = Mt(n, l)) && o.push(Fc(n, s, u)))),
              (n = n.return);
          }
          0 !== o.length &&
            e.push({
              event: t,
              listeners: o,
            });
        }
        var Uc = /\r\n?/g,
          Ic = /\u0000|\uFFFD/g;
        function Bc(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Uc, "\n")
            .replace(Ic, "");
        }
        function Hc(e, t) {
          return (t = Bc(t)), Bc(e) === t;
        }
        function qc() {}
        function Wc(e, t, n, r, a, l) {
          switch (n) {
            case "children":
              "string" === typeof r
                ? "body" === t || ("textarea" === t && "" === r) || St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  "body" !== t &&
                  St(e, "" + r);
              break;
            case "className":
              it(e, "class", r);
              break;
            case "tabIndex":
              it(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              it(e, n, r);
              break;
            case "style":
              Ct(e, r, l);
              break;
            case "data":
              if ("object" !== t) {
                it(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" === typeof r ||
                "symbol" === typeof r ||
                "boolean" === typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Nt("" + r)), e.setAttribute(n, r);
              break;
            case "action":
            case "formAction":
              if ("function" === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                );
                break;
              }
              if (
                ("function" === typeof l &&
                  ("formAction" === n
                    ? ("input" !== t && Wc(e, t, "name", a.name, a, null),
                      Wc(e, t, "formEncType", a.formEncType, a, null),
                      Wc(e, t, "formMethod", a.formMethod, a, null),
                      Wc(e, t, "formTarget", a.formTarget, a, null))
                    : (Wc(e, t, "encType", a.encType, a, null),
                      Wc(e, t, "method", a.method, a, null),
                      Wc(e, t, "target", a.target, a, null))),
                null == r || "symbol" === typeof r || "boolean" === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Nt("" + r)), e.setAttribute(n, r);
              break;
            case "onClick":
              null != r && (e.onclick = qc);
              break;
            case "onScroll":
              null != r && Nc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Nc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple =
                r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "muted":
              e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" === typeof r ||
                "boolean" === typeof r ||
                "symbol" === typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              (n = Nt("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n
                );
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                  null != r &&
                  "function" !== typeof r &&
                  "symbol" !== typeof r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" !== typeof r &&
              "symbol" !== typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" === typeof r ||
              "symbol" === typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              Nc("beforetoggle", e), Nc("toggle", e), ot(e, "popover", r);
              break;
            case "xlinkActuate":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              ot(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                ot(e, (n = Tt.get(n) || n), r);
          }
        }
        function $c(e, t, n, r, a, l) {
          switch (n) {
            case "style":
              Ct(e, r, l);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" === typeof r
                ? St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  St(e, "" + r);
              break;
            case "onScroll":
              null != r && Nc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Nc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = qc);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              Ze.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((a = n.endsWith("Capture")),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                "function" ===
                  typeof (l = null != (l = e[Ue] || null) ? l[n] : null) &&
                  e.removeEventListener(t, l, a),
                "function" !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                    ? e.setAttribute(n, "")
                    : ot(e, n, r)
                  : ("function" !== typeof l &&
                      null !== l &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, a)));
          }
        }
        function Vc(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              Nc("error", e), Nc("load", e);
              var r,
                a = !1,
                l = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var i = n[r];
                  if (null != i)
                    switch (r) {
                      case "src":
                        a = !0;
                        break;
                      case "srcSet":
                        l = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                      default:
                        Wc(e, t, r, i, n, null);
                    }
                }
              return (
                l && Wc(e, t, "srcSet", n.srcSet, n, null),
                void (a && Wc(e, t, "src", n.src, n, null))
              );
            case "input":
              Nc("invalid", e);
              var u = (r = i = l = null),
                s = null,
                c = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var f = n[a];
                  if (null != f)
                    switch (a) {
                      case "name":
                        l = f;
                        break;
                      case "type":
                        i = f;
                        break;
                      case "checked":
                        s = f;
                        break;
                      case "defaultChecked":
                        c = f;
                        break;
                      case "value":
                        r = f;
                        break;
                      case "defaultValue":
                        u = f;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != f) throw Error(o(137, t));
                        break;
                      default:
                        Wc(e, t, a, f, n, null);
                    }
                }
              return yt(e, r, u, s, c, i, l, !1), void ft(e);
            case "select":
              for (l in (Nc("invalid", e), (a = i = r = null), n))
                if (n.hasOwnProperty(l) && null != (u = n[l]))
                  switch (l) {
                    case "value":
                      r = u;
                      break;
                    case "defaultValue":
                      i = u;
                      break;
                    case "multiple":
                      a = u;
                    default:
                      Wc(e, t, l, u, n, null);
                  }
              return (
                (t = r),
                (n = i),
                (e.multiple = !!a),
                void (null != t
                  ? bt(e, !!a, t, !1)
                  : null != n && bt(e, !!a, n, !0))
              );
            case "textarea":
              for (i in (Nc("invalid", e), (r = l = a = null), n))
                if (n.hasOwnProperty(i) && null != (u = n[i]))
                  switch (i) {
                    case "value":
                      a = u;
                      break;
                    case "defaultValue":
                      l = u;
                      break;
                    case "children":
                      r = u;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != u) throw Error(o(91));
                      break;
                    default:
                      Wc(e, t, i, u, n, null);
                  }
              return kt(e, a, l, r), void ft(e);
            case "option":
              for (s in n)
                if (n.hasOwnProperty(s) && null != (a = n[s]))
                  if ("selected" === s)
                    e.selected =
                      a && "function" !== typeof a && "symbol" !== typeof a;
                  else Wc(e, t, s, a, n, null);
              return;
            case "dialog":
              Nc("cancel", e), Nc("close", e);
              break;
            case "iframe":
            case "object":
              Nc("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < _c.length; a++) Nc(_c[a], e);
              break;
            case "image":
              Nc("error", e), Nc("load", e);
              break;
            case "details":
              Nc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              Nc("error", e), Nc("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (a = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(137, t));
                    default:
                      Wc(e, t, c, a, n, null);
                  }
              return;
            default:
              if (_t(t)) {
                for (f in n)
                  n.hasOwnProperty(f) &&
                    void 0 !== (a = n[f]) &&
                    $c(e, t, f, a, n, void 0);
                return;
              }
          }
          for (u in n)
            n.hasOwnProperty(u) &&
              null != (a = n[u]) &&
              Wc(e, t, u, a, n, null);
        }
        var Qc = null,
          Yc = null;
        function Kc(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function Gc(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function Xc(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function Jc(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            "bigint" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Zc = null;
        var ef = "function" === typeof setTimeout ? setTimeout : void 0,
          tf = "function" === typeof clearTimeout ? clearTimeout : void 0,
          nf = "function" === typeof Promise ? Promise : void 0,
          rf =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof nf
              ? function (e) {
                  return nf.resolve(null).then(e).catch(af);
                }
              : ef;
        function af(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lf(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void gd(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          gd(t);
        }
        function of(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                of(n), Ve(n);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function uf(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function sf(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function cf(e, t, n) {
          switch (((t = Kc(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(o(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(o(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(o(454));
              return e;
            default:
              throw Error(o(451));
          }
        }
        var ff = new Map(),
          df = new Set();
        function pf(e) {
          return "function" === typeof e.getRootNode
            ? e.getRootNode()
            : e.ownerDocument;
        }
        var hf = H.d;
        H.d = {
          f: function () {
            var e = hf.f(),
              t = js();
            return e || t;
          },
          r: function (e) {
            var t = Ye(e);
            null !== t && 5 === t.tag && "form" === t.type ? po(t) : hf.r(e);
          },
          D: function (e) {
            hf.D(e), gf("dns-prefetch", e, null);
          },
          C: function (e, t) {
            hf.C(e, t), gf("preconnect", e, t);
          },
          L: function (e, t, n) {
            hf.L(e, t, n);
            var r = mf;
            if (r && e && t) {
              var a = 'link[rel="preload"][as="' + mt(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((a += '[imagesrcset="' + mt(n.imageSrcSet) + '"]'),
                  "string" === typeof n.imageSizes &&
                    (a += '[imagesizes="' + mt(n.imageSizes) + '"]'))
                : (a += '[href="' + mt(e) + '"]');
              var l = a;
              switch (t) {
                case "style":
                  l = vf(e);
                  break;
                case "script":
                  l = kf(e);
              }
              ff.has(l) ||
                ((e = R(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n
                )),
                ff.set(l, e),
                null !== r.querySelector(a) ||
                  ("style" === t && r.querySelector(bf(l))) ||
                  ("script" === t && r.querySelector(Sf(l))) ||
                  (Vc((t = r.createElement("link")), "link", e),
                  Xe(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            hf.m(e, t);
            var n = mf;
            if (n && e) {
              var r = t && "string" === typeof t.as ? t.as : "script",
                a =
                  'link[rel="modulepreload"][as="' +
                  mt(r) +
                  '"][href="' +
                  mt(e) +
                  '"]',
                l = a;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  l = kf(e);
              }
              if (
                !ff.has(l) &&
                ((e = R(
                  {
                    rel: "modulepreload",
                    href: e,
                  },
                  t
                )),
                ff.set(l, e),
                null === n.querySelector(a))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Sf(l))) return;
                }
                Vc((r = n.createElement("link")), "link", e),
                  Xe(r),
                  n.head.appendChild(r);
              }
            }
          },
          X: function (e, t) {
            hf.X(e, t);
            var n = mf;
            if (n && e) {
              var r = Ge(n).hoistableScripts,
                a = kf(e),
                l = r.get(a);
              l ||
                ((l = n.querySelector(Sf(a))) ||
                  ((e = R(
                    {
                      src: e,
                      async: !0,
                    },
                    t
                  )),
                  (t = ff.get(a)) && _f(e, t),
                  Xe((l = n.createElement("script"))),
                  Vc(l, "link", e),
                  n.head.appendChild(l)),
                (l = {
                  type: "script",
                  instance: l,
                  count: 1,
                  state: null,
                }),
                r.set(a, l));
            }
          },
          S: function (e, t, n) {
            hf.S(e, t, n);
            var r = mf;
            if (r && e) {
              var a = Ge(r).hoistableStyles,
                l = vf(e);
              t = t || "default";
              var o = a.get(l);
              if (!o) {
                var i = {
                  loading: 0,
                  preload: null,
                };
                if ((o = r.querySelector(bf(l)))) i.loading = 5;
                else {
                  (e = R(
                    {
                      rel: "stylesheet",
                      href: e,
                      "data-precedence": t,
                    },
                    n
                  )),
                    (n = ff.get(l)) && Cf(e, n);
                  var u = (o = r.createElement("link"));
                  Xe(u),
                    Vc(u, "link", e),
                    (u._p = new Promise(function (e, t) {
                      (u.onload = e), (u.onerror = t);
                    })),
                    u.addEventListener("load", function () {
                      i.loading |= 1;
                    }),
                    u.addEventListener("error", function () {
                      i.loading |= 2;
                    }),
                    (i.loading |= 4),
                    xf(o, t, r);
                }
                (o = {
                  type: "stylesheet",
                  instance: o,
                  count: 1,
                  state: i,
                }),
                  a.set(l, o);
              }
            }
          },
          M: function (e, t) {
            hf.M(e, t);
            var n = mf;
            if (n && e) {
              var r = Ge(n).hoistableScripts,
                a = kf(e),
                l = r.get(a);
              l ||
                ((l = n.querySelector(Sf(a))) ||
                  ((e = R(
                    {
                      src: e,
                      async: !0,
                      type: "module",
                    },
                    t
                  )),
                  (t = ff.get(a)) && _f(e, t),
                  Xe((l = n.createElement("script"))),
                  Vc(l, "link", e),
                  n.head.appendChild(l)),
                (l = {
                  type: "script",
                  instance: l,
                  count: 1,
                  state: null,
                }),
                r.set(a, l));
            }
          },
        };
        var mf = "undefined" === typeof document ? null : document;
        function gf(e, t, n) {
          var r = mf;
          if (r && "string" === typeof t && t) {
            var a = mt(t);
            (a = 'link[rel="' + e + '"][href="' + a + '"]'),
              "string" === typeof n && (a += '[crossorigin="' + n + '"]'),
              df.has(a) ||
                (df.add(a),
                (e = {
                  rel: e,
                  crossOrigin: n,
                  href: t,
                }),
                null === r.querySelector(a) &&
                  (Vc((t = r.createElement("link")), "link", e),
                  Xe(t),
                  r.head.appendChild(t)));
          }
        }
        function yf(e, t, n, r) {
          var a,
            l,
            i,
            u,
            s = (s = X.current) ? pf(s) : null;
          if (!s) throw Error(o(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" === typeof n.precedence &&
                "string" === typeof n.href
                ? ((t = vf(n.href)),
                  (r = (n = Ge(s).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null,
                  };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" === typeof n.href &&
                "string" === typeof n.precedence
              ) {
                e = vf(n.href);
                var c = Ge(s).hoistableStyles,
                  f = c.get(e);
                if (
                  (f ||
                    ((s = s.ownerDocument || s),
                    (f = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: {
                        loading: 0,
                        preload: null,
                      },
                    }),
                    c.set(e, f),
                    (c = s.querySelector(bf(e))) &&
                      !c._p &&
                      ((f.instance = c), (f.state.loading = 5)),
                    ff.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      ff.set(e, n),
                      c ||
                        ((a = s),
                        (l = e),
                        (i = n),
                        (u = f.state),
                        a.querySelector(
                          'link[rel="preload"][as="style"][' + l + "]"
                        )
                          ? (u.loading = 1)
                          : ((l = a.createElement("link")),
                            (u.preload = l),
                            l.addEventListener("load", function () {
                              return (u.loading |= 1);
                            }),
                            l.addEventListener("error", function () {
                              return (u.loading |= 2);
                            }),
                            Vc(l, "link", i),
                            Xe(l),
                            a.head.appendChild(l))))),
                  t && null === r)
                )
                  throw Error(o(528, ""));
                return f;
              }
              if (t && null !== r) throw Error(o(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" === typeof (n = n.src) &&
                t &&
                "function" !== typeof t &&
                "symbol" !== typeof t
                  ? ((t = kf(n)),
                    (r = (n = Ge(s).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : {
                      type: "void",
                      instance: null,
                      count: 0,
                      state: null,
                    }
              );
            default:
              throw Error(o(444, e));
          }
        }
        function vf(e) {
          return 'href="' + mt(e) + '"';
        }
        function bf(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function wf(e) {
          return R({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function kf(e) {
          return '[src="' + mt(e) + '"]';
        }
        function Sf(e) {
          return "script[async]" + e;
        }
        function Ef(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + mt(n.href) + '"]'
                );
                if (r) return (t.instance = r), Xe(r), r;
                var a = R({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  Xe((r = (e.ownerDocument || e).createElement("style"))),
                  Vc(r, "style", a),
                  xf(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                a = vf(n.href);
                var l = e.querySelector(bf(a));
                if (l)
                  return (t.state.loading |= 4), (t.instance = l), Xe(l), l;
                (r = wf(n)),
                  (a = ff.get(a)) && Cf(r, a),
                  Xe((l = (e.ownerDocument || e).createElement("link")));
                var i = l;
                return (
                  (i._p = new Promise(function (e, t) {
                    (i.onload = e), (i.onerror = t);
                  })),
                  Vc(l, "link", r),
                  (t.state.loading |= 4),
                  xf(l, n.precedence, e),
                  (t.instance = l)
                );
              case "script":
                return (
                  (l = kf(n.src)),
                  (a = e.querySelector(Sf(l)))
                    ? ((t.instance = a), Xe(a), a)
                    : ((r = n),
                      (a = ff.get(l)) && _f((r = R({}, n)), a),
                      Xe(
                        (a = (e = e.ownerDocument || e).createElement("script"))
                      ),
                      Vc(a, "link", r),
                      e.head.appendChild(a),
                      (t.instance = a))
                );
              case "void":
                return null;
              default:
                throw Error(o(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              0 === (4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              xf(r, n.precedence, e));
          return t.instance;
        }
        function xf(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]'
              ),
              a = r.length ? r[r.length - 1] : null,
              l = a,
              o = 0;
            o < r.length;
            o++
          ) {
            var i = r[o];
            if (i.dataset.precedence === t) l = i;
            else if (l !== a) break;
          }
          l
            ? l.parentNode.insertBefore(e, l.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Cf(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title);
        }
        function _f(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity);
        }
        var Tf = null;
        function Pf(e, t, n) {
          if (null === Tf) {
            var r = new Map(),
              a = (Tf = new Map());
            a.set(n, r);
          } else (r = (a = Tf).get(n)) || ((r = new Map()), a.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), a = 0;
            a < n.length;
            a++
          ) {
            var l = n[a];
            if (
              !(
                l[$e] ||
                l[je] ||
                ("link" === e && "stylesheet" === l.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== l.namespaceURI
            ) {
              var o = l.getAttribute(t) || "";
              o = e + o;
              var i = r.get(o);
              i ? i.push(l) : r.set(o, [l]);
            }
          }
          return r;
        }
        function Nf(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null
          );
        }
        function Of(e) {
          return "stylesheet" !== e.type || 0 !== (3 & e.state.loading);
        }
        var Rf = null;
        function Lf() {}
        function zf() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) Ff(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              (this.unsuspend = null), e();
            }
        }
        var Af = null;
        function Ff(e, t) {
          (e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (Af = new Map()),
              t.forEach(Df, e),
              (Af = null),
              zf.call(e));
        }
        function Df(e, t) {
          if (!(4 & t.state.loading)) {
            var n = Af.get(e);
            if (n) var r = n.get(null);
            else {
              (n = new Map()), Af.set(e, n);
              for (
                var a = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]"
                  ),
                  l = 0;
                l < a.length;
                l++
              ) {
                var o = a[l];
                ("LINK" !== o.nodeName &&
                  "not all" === o.getAttribute("media")) ||
                  (n.set(o.dataset.precedence, o), (r = o));
              }
              r && n.set(null, r);
            }
            (o = (a = t.instance).getAttribute("data-precedence")),
              (l = n.get(o) || r) === r && n.set(null, a),
              n.set(o, a),
              this.count++,
              (r = zf.bind(this)),
              a.addEventListener("load", r),
              a.addEventListener("error", r),
              l
                ? l.parentNode.insertBefore(a, l.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    a,
                    e.firstChild
                  ),
              (t.state.loading |= 4);
          }
        }
        var Mf = {
          $$typeof: g,
          Provider: null,
          Consumer: null,
          _currentValue: q,
          _currentValue2: q,
          _threadCount: 0,
        };
        function jf(e, t, n, r, a, l, o, i) {
          (this.tag = 1),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Re(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.finishedLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Re(0)),
            (this.hiddenUpdates = Re(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = a),
            (this.onCaughtError = l),
            (this.onRecoverableError = o),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = i),
            (this.incompleteTransitions = new Map());
        }
        function Uf(e, t, n, r, a, l, o, i, u, s, c, f) {
          return (
            (e = new jf(e, t, n, o, i, u, s, f)),
            (t = 1),
            !0 === l && (t |= 24),
            (l = Fu(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (t = Ia()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: t,
            }),
            Ni(l),
            e
          );
        }
        function If(e) {
          return e ? (e = Lr) : Lr;
        }
        function Bf(e, t, n, r, a, l) {
          (a = If(a)),
            null === r.context ? (r.context = a) : (r.pendingContext = a),
            ((r = Ri(t)).payload = {
              element: n,
            }),
            null !== (l = void 0 === l ? null : l) && (r.callback = l),
            null !== (n = Li(e, r, t)) && (Ls(n, 0, t), zi(n, e, t));
        }
        function Hf(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qf(e, t) {
          Hf(e, t), (e = e.alternate) && Hf(e, t);
        }
        function Wf(e) {
          if (13 === e.tag) {
            var t = Nr(e, 67108864);
            null !== t && Ls(t, 0, 67108864), qf(e, 67108864);
          }
        }
        var $f = !0;
        function Vf(e, t, n, r) {
          var a = O.T;
          O.T = null;
          var l = H.p;
          try {
            (H.p = 2), Yf(e, t, n, r);
          } finally {
            (H.p = l), (O.T = a);
          }
        }
        function Qf(e, t, n, r) {
          var a = O.T;
          O.T = null;
          var l = H.p;
          try {
            (H.p = 8), Yf(e, t, n, r);
          } finally {
            (H.p = l), (O.T = a);
          }
        }
        function Yf(e, t, n, r) {
          if ($f) {
            var a = Kf(r);
            if (null === a) Ac(e, t, r, Gf, n), id(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (ed = ud(ed, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (td = ud(td, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (nd = ud(nd, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return rd.set(l, ud(rd.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      ad.set(l, ud(ad.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((id(e, r), 4 & t && -1 < od.indexOf(e))) {
              for (; null !== a; ) {
                var l = Ye(a);
                if (null !== l)
                  switch (l.tag) {
                    case 3:
                      if (
                        (l = l.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var o = Ce(l.pendingLanes);
                        if (0 !== o) {
                          var i = l;
                          for (
                            i.pendingLanes |= 2, i.entangledLanes |= 2;
                            o;

                          ) {
                            var u = 1 << (31 - we(o));
                            (i.entanglements[1] |= u), (o &= ~u);
                          }
                          mc(l),
                            0 === (6 & es) && ((ws = ue() + 500), gc(0, !1));
                        }
                      }
                      break;
                    case 13:
                      null !== (i = Nr(l, 2)) && Ls(i, 0, 2), js(), qf(l, 2);
                  }
                if ((null === (l = Kf(r)) && Ac(e, t, r, Gf, n), l === a))
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Ac(e, t, r, null, n);
          }
        }
        function Kf(e) {
          return Xf((e = Rt(e)));
        }
        var Gf = null;
        function Xf(e) {
          if (((Gf = null), null !== (e = Qe(e)))) {
            var t = M(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = j(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return (Gf = e), null;
        }
        function Jf(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (se()) {
                case ce:
                  return 2;
                case fe:
                  return 8;
                case de:
                case pe:
                  return 32;
                case he:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Zf = !1,
          ed = null,
          td = null,
          nd = null,
          rd = new Map(),
          ad = new Map(),
          ld = [],
          od =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " "
            );
        function id(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              ed = null;
              break;
            case "dragenter":
            case "dragleave":
              td = null;
              break;
            case "mouseover":
            case "mouseout":
              nd = null;
              break;
            case "pointerover":
            case "pointerout":
              rd.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ad.delete(t.pointerId);
          }
        }
        function ud(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = Ye(t)) && Wf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function sd(e) {
          var t = Qe(e.target);
          if (null !== t) {
            var n = M(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = j(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e, t) {
                      var n = H.p;
                      try {
                        return (H.p = e), t();
                      } finally {
                        H.p = n;
                      }
                    })(e.priority, function () {
                      if (13 === n.tag) {
                        var e = Os(),
                          t = Nr(n, e);
                        null !== t && Ls(t, 0, e), qf(n, e);
                      }
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function cd(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kf(e.nativeEvent);
            if (null !== n)
              return null !== (t = Ye(n)) && Wf(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Ot = r), n.target.dispatchEvent(r), (Ot = null), t.shift();
          }
          return !0;
        }
        function fd(e, t, n) {
          cd(e) && n.delete(t);
        }
        function dd() {
          (Zf = !1),
            null !== ed && cd(ed) && (ed = null),
            null !== td && cd(td) && (td = null),
            null !== nd && cd(nd) && (nd = null),
            rd.forEach(fd),
            ad.forEach(fd);
        }
        function pd(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Zf ||
              ((Zf = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, dd)));
        }
        var hd = null;
        function md(e) {
          hd !== e &&
            ((hd = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              hd === e && (hd = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  a = e[t + 2];
                if ("function" !== typeof r) {
                  if (null === Xf(r || n)) continue;
                  break;
                }
                var l = Ye(n);
                null !== l &&
                  (e.splice(t, 3),
                  (t -= 3),
                  co(
                    l,
                    {
                      pending: !0,
                      data: a,
                      method: n.method,
                      action: r,
                    },
                    r,
                    a
                  ));
              }
            }));
        }
        function gd(e) {
          function t(t) {
            return pd(t, e);
          }
          null !== ed && pd(ed, e),
            null !== td && pd(td, e),
            null !== nd && pd(nd, e),
            rd.forEach(t),
            ad.forEach(t);
          for (var n = 0; n < ld.length; n++) {
            var r = ld[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < ld.length && null === (n = ld[0]).blockedOn; )
            sd(n), null === n.blockedOn && ld.shift();
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var a = n[r],
                l = n[r + 1],
                o = a[Ue] || null;
              if ("function" === typeof l) o || md(n);
              else if (o) {
                var i = null;
                if (l && l.hasAttribute("formAction")) {
                  if (((a = l), (o = l[Ue] || null))) i = o.formAction;
                  else if (null !== Xf(a)) continue;
                } else i = o.action;
                "function" === typeof i
                  ? (n[r + 1] = i)
                  : (n.splice(r, 3), (r -= 3)),
                  md(n);
              }
            }
        }
        function yd(e) {
          this._internalRoot = e;
        }
        function vd(e) {
          this._internalRoot = e;
        }
        (vd.prototype.render = yd.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Bf(t.current, Os(), e, t, null, null);
          }),
          (vd.prototype.unmount = yd.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                0 === e.tag && tc(),
                  Bf(e.current, 2, null, e, null, null),
                  js(),
                  (t[Ie] = null);
              }
            }),
          (vd.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = De();
              e = {
                blockedOn: null,
                target: e,
                priority: t,
              };
              for (
                var n = 0;
                n < ld.length && 0 !== t && t < ld[n].priority;
                n++
              );
              ld.splice(n, 0, e), 0 === n && sd(e);
            }
          });
        var bd = a.version;
        if ("19.0.0" !== bd) throw Error(o(527, bd, "19.0.0"));
        H.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = M(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return U(a), e;
                    if (l === r) return U(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? I(e) : null) ? null : e.stateNode)
          );
        };
        var wd = {
          bundleType: 0,
          version: "19.0.0",
          rendererPackageName: "react-dom",
          currentDispatcherRef: O,
          findFiberByHostInstance: Qe,
          reconcilerVersion: "19.0.0",
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var kd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!kd.isDisabled && kd.supportsFiber)
            try {
              (ye = kd.inject(wd)), (ve = kd);
            } catch (Ed) {}
        }
        t.createRoot = function (e, t) {
          if (!i(e)) throw Error(o(299));
          var n = !1,
            r = "",
            a = Fo,
            l = Do,
            u = Mo;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
              void 0 !== t.onCaughtError && (l = t.onCaughtError),
              void 0 !== t.onRecoverableError && (u = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks &&
                t.unstable_transitionCallbacks),
            (t = Uf(e, 1, !1, null, 0, n, r, a, l, u, 0, null)),
            (e[Ie] = t.current),
            Lc(8 === e.nodeType ? e.parentNode : e),
            new yd(t)
          );
        };
      },
      672: (e, t, n) => {
        "use strict";
        var r = n(43);
        function a(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function l() {}
        var o = {
            d: {
              f: l,
              r: function () {
                throw Error(a(522));
              },
              D: l,
              C: l,
              L: l,
              m: l,
              X: l,
              S: l,
              M: l,
            },
            p: 0,
            findDOMNode: null,
          },
          i = Symbol.for("react.portal");
        var u =
          r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function s(e, t) {
          return "font" === e
            ? ""
            : "string" === typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
        }
        (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(a(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: i,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = u.T,
              n = o.p;
            try {
              if (((u.T = null), (o.p = 2), e)) return e();
            } finally {
              (u.T = t), (o.p = n), o.d.f();
            }
          }),
          (t.preconnect = function (e, t) {
            "string" === typeof e &&
              (t
                ? (t =
                    "string" === typeof (t = t.crossOrigin)
                      ? "use-credentials" === t
                        ? t
                        : ""
                      : void 0)
                : (t = null),
              o.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" === typeof e && o.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" === typeof e && t && "string" === typeof t.as) {
              var n = t.as,
                r = s(n, t.crossOrigin),
                a = "string" === typeof t.integrity ? t.integrity : void 0,
                l =
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0;
              "style" === n
                ? o.d.S(
                    e,
                    "string" === typeof t.precedence ? t.precedence : void 0,
                    {
                      crossOrigin: r,
                      integrity: a,
                      fetchPriority: l,
                    }
                  )
                : "script" === n &&
                  o.d.X(e, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: l,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" === typeof e)
              if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = s(t.as, t.crossOrigin);
                  o.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" === typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && o.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" === typeof e &&
              "object" === typeof t &&
              null !== t &&
              "string" === typeof t.as
            ) {
              var n = t.as,
                r = s(n, t.crossOrigin);
              o.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" === typeof t.integrity ? t.integrity : void 0,
                nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                type: "string" === typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0,
                referrerPolicy:
                  "string" === typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" === typeof e)
              if (t) {
                var n = s(t.as, t.crossOrigin);
                o.d.m(e, {
                  as:
                    "string" === typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" === typeof t.integrity ? t.integrity : void 0,
                });
              } else o.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            o.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return u.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return u.H.useHostTransitionStatus();
          }),
          (t.version = "19.0.0");
      },
      391: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4));
      },
      950: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(672));
      },
      799: (e, t) => {
        "use strict";
        var n = Symbol.for("react.transitional.element");
        function r(e, t, r) {
          var a = null;
          if (
            (void 0 !== r && (a = "" + r),
            void 0 !== t.key && (a = "" + t.key),
            "key" in t)
          )
            for (var l in ((r = {}), t)) "key" !== l && (r[l] = t[l]);
          else r = t;
          return (
            (t = r.ref),
            {
              $$typeof: n,
              type: e,
              key: a,
              ref: void 0 !== t ? t : null,
              props: r,
            }
          );
        }
        Symbol.for("react.fragment"), (t.jsx = r), (t.jsxs = r);
      },
      288: (e, t) => {
        "use strict";
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.consumer"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          S = {
            H: null,
            A: null,
            T: null,
            S: null,
          },
          E = Object.prototype.hasOwnProperty;
        function x(e, t, r, a, l, o) {
          return (
            (r = o.ref),
            {
              $$typeof: n,
              type: e,
              key: t,
              ref: void 0 !== r ? r : null,
              props: o,
            }
          );
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = {
                  "=": "=0",
                  ":": "=2",
                };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P() {}
        function N(e, t, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u,
            s,
            c = !1;
          if (null === e) c = !0;
          else
            switch (i) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case d:
                    return N((c = e._init)(e._payload), t, a, l, o);
                }
            }
          if (c)
            return (
              (o = o(e)),
              (c = "" === l ? "." + T(e, 0) : l),
              k(o)
                ? ((a = ""),
                  null != c && (a = c.replace(_, "$&/") + "/"),
                  N(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    ((u = o),
                    (s =
                      a +
                      (null == o.key || (e && e.key === o.key)
                        ? ""
                        : ("" + o.key).replace(_, "$&/") + "/") +
                      c),
                    (o = x(u.type, s, void 0, 0, 0, u.props))),
                  t.push(o)),
              1
            );
          c = 0;
          var f,
            h = "" === l ? "." : l + ":";
          if (k(e))
            for (var m = 0; m < e.length; m++)
              c += N((l = e[m]), t, a, (i = h + T(l, m)), o);
          else if (
            "function" ===
            typeof (m =
              null === (f = e) || "object" !== typeof f
                ? null
                : "function" === typeof (f = (p && f[p]) || f["@@iterator"])
                ? f
                : null)
          )
            for (e = m.call(e), m = 0; !(l = e.next()).done; )
              c += N((l = l.value), t, a, (i = h + T(l, m++)), o);
          else if ("object" === i) {
            if ("function" === typeof e.then)
              return N(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" === typeof e.status
                          ? e.then(P, P)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                a,
                l,
                o
              );
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          }
          return c;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function z() {}
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            S),
          (t.act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = m({}, e.props),
              a = e.key;
            if (null != t)
              for (l in (void 0 !== t.ref && void 0,
              void 0 !== t.key && (a = "" + t.key),
              t))
                !E.call(t, l) ||
                  "key" === l ||
                  "__self" === l ||
                  "__source" === l ||
                  ("ref" === l && void 0 === t.ref) ||
                  (r[l] = t[l]);
            var l = arguments.length - 2;
            if (1 === l) r.children = n;
            else if (1 < l) {
              for (var o = Array(l), i = 0; i < l; i++) o[i] = arguments[i + 2];
              r.children = o;
            }
            return x(e.type, a, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = {
                $$typeof: i,
                _context: e,
              }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              a = {},
              l = null;
            if (null != t)
              for (r in (void 0 !== t.key && (l = "" + t.key), t))
                E.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (a[r] = t[r]);
            var o = arguments.length - 2;
            if (1 === o) a.children = n;
            else if (1 < o) {
              for (var i = Array(o), u = 0; u < o; u++) i[u] = arguments[u + 2];
              a.children = i;
            }
            if (e && e.defaultProps)
              for (r in (o = e.defaultProps)) void 0 === a[r] && (a[r] = o[r]);
            return x(e, l, void 0, 0, 0, a);
          }),
          (t.createRef = function () {
            return {
              current: null,
            };
          }),
          (t.forwardRef = function (e) {
            return {
              $$typeof: s,
              render: e,
            };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: {
                _status: -1,
                _result: e,
              },
              _init: R,
            };
          }),
          (t.memo = function (e, t) {
            return {
              $$typeof: f,
              type: e,
              compare: void 0 === t ? null : t,
            };
          }),
          (t.startTransition = function (e) {
            var t = S.T,
              n = {};
            S.T = n;
            try {
              var r = e(),
                a = S.S;
              null !== a && a(n, r),
                "object" === typeof r &&
                  null !== r &&
                  "function" === typeof r.then &&
                  r.then(z, L);
            } catch (l) {
              L(l);
            } finally {
              S.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return S.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return S.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return S.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return S.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return S.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return S.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t) {
            return S.H.useEffect(e, t);
          }),
          (t.useId = function () {
            return S.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return S.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return S.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return S.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return S.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return S.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return S.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return S.H.useRef(e);
          }),
          (t.useState = function (e) {
            return S.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return S.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return S.H.useTransition();
          }),
          (t.version = "19.0.0");
      },
      43: (e, t, n) => {
        "use strict";
        e.exports = n(288);
      },
      579: (e, t, n) => {
        "use strict";
        e.exports = n(799);
      },
      896: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" === typeof performance &&
            "function" === typeof performance.now)
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(s)) (m = !0), R();
            else {
              var t = r(c);
              null !== t && L(k, t.startTime - e);
            }
        }
        var S,
          E = !1,
          x = -1,
          C = 5,
          _ = -1;
        function T() {
          return !(t.unstable_now() - _ < C);
        }
        function P() {
          if (E) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
              e: {
                (m = !1), g && ((g = !1), v(x), (x = -1)), (h = !0);
                var l = p;
                try {
                  t: {
                    for (
                      w(e), d = r(s);
                      null !== d && !(d.expirationTime > e && T());

                    ) {
                      var o = d.callback;
                      if ("function" === typeof o) {
                        (d.callback = null), (p = d.priorityLevel);
                        var i = o(d.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" === typeof i)) {
                          (d.callback = i), w(e), (n = !0);
                          break t;
                        }
                        d === r(s) && a(s), w(e);
                      } else a(s);
                      d = r(s);
                    }
                    if (null !== d) n = !0;
                    else {
                      var u = r(c);
                      null !== u && L(k, u.startTime - e), (n = !1);
                    }
                  }
                  break e;
                } finally {
                  (d = null), (p = l), (h = !1);
                }
                n = void 0;
              }
            } finally {
              n ? S() : (E = !1);
            }
          }
        }
        if ("function" === typeof b)
          S = function () {
            b(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            O = N.port2;
          (N.port1.onmessage = P),
            (S = function () {
              O.postMessage(null);
            });
        } else
          S = function () {
            y(P, 0);
          };
        function R() {
          E || ((E = !0), S());
        }
        function L(e, n) {
          x = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), R());
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (v(x), (x = -1)) : (g = !0), L(k, l - o)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), R())),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        "use strict";
        e.exports = n(896);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = {
      exports: {},
    });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.d = (e, t) => {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, {
          enumerable: !0,
          get: t[r],
        });
  }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (() => {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          hasBrowserEnv: () => me,
          hasStandardBrowserEnv: () => ye,
          hasStandardBrowserWebWorkerEnv: () => ve,
          navigator: () => ge,
          origin: () => be,
        });
      var t = n(43),
        r = n(391),
        a = n(579);
      function l(e) {
        let t = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][e.date.getDay()],
          n = e.date.getHours();
        n < 10 && (n = `0${n}`);
        let r = e.date.getMinutes();
        return (
          r < 10 && (r = `0${r}`),
          (0, a.jsxs)("span", {
            children: [t, " ", n, ":", r],
          })
        );
      }
      var o = n(901);
      function i(e) {
        return (0, a.jsx)(o.A, {
          icon: {
            "clear-sky-day": "CLEAR_DAY",
            "clear-sky-night": "CLEAR_NIGHT",
            "few-clouds-day": "PARTLY_CLOUDY_DAY",
            "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
            "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
            "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
            "broken-clouds-day": "CLOUDY",
            "broken-clouds-night": "CLOUDY",
            "shower-rain-day": "RAIN",
            "shower-rain-night": "RAIN",
            "rain-day": "RAIN",
            "rain-night": "RAIN",
            "thunderstorm-day": "RAIN",
            "thunderstorm-night'": "RAIN",
            "snow-day": "SNOW",
            "snow-night": "SNOW",
            "mist-day": "FOG",
            "mist-night": "FOG",
          }[e.code],
          color: "#1e1e1e",
          size: e.size,
          animate: !0,
        });
      }
      function u(e) {
        return (0, a.jsx)("div", {
          className: "WeatherInfo",
          children: (0, a.jsxs)("div", {
            className: "row",
            children: [
              (0, a.jsxs)("div", {
                className: "col-6",
                children: [
                  (0, a.jsx)("h1", {
                    children: e.data.city,
                  }),
                  (0, a.jsxs)("ul", {
                    children: [
                      (0, a.jsxs)("li", {
                        children: [
                          (0, a.jsx)(l, {
                            date: e.data.date,
                          }),
                          ", ",
                          e.data.description,
                        ],
                      }),
                      (0, a.jsxs)("li", {
                        children: [
                          "Humidity: ",
                          (0, a.jsxs)("strong", {
                            children: [e.data.humidity, "%"],
                          }),
                          ", Wind:",
                          " ",
                          (0, a.jsxs)("strong", {
                            children: [e.data.wind, "km/h"],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "col-lg-6 col-md-6 col-sm-8",
                children: (0, a.jsxs)("div", {
                  className: "temperature-container d-flex justify-content-end",
                  children: [
                    (0, a.jsx)(i, {
                      code: e.data.icon,
                      size: 52,
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("span", {
                          className: "temperature",
                          children: Math.round(e.data.temperature),
                        }),
                        (0, a.jsx)("span", {
                          className: "unit",
                          children: "\xb0C",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function s(e) {
        return (0, a.jsxs)("div", {
          className: "WeatherForecastPreview",
          children: [
            (0, a.jsx)("div", {
              className: "forecast-time",
              children: [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
              ][new Date(1e3 * e.data.time).getDay()],
            }),
            (0, a.jsx)(i, {
              code: e.data.condition.icon,
              size: 38,
            }),
            (0, a.jsxs)("div", {
              className: "forecast-temperature",
              children: [
                (0, a.jsx)("span", {
                  className: "forecast-temperature-max",
                  children: `${Math.round(e.data.temperature.maximum)}\xb0`,
                }),
                (0, a.jsx)("span", {
                  className: "forecast-temperature-min",
                  children: `${Math.round(e.data.temperature.minimum)}\xb0`,
                }),
              ],
            }),
          ],
        });
      }
      function c(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      const { toString: f } = Object.prototype,
        { getPrototypeOf: d } = Object,
        p =
          ((h = Object.create(null)),
          (e) => {
            const t = f.call(e);
            return h[t] || (h[t] = t.slice(8, -1).toLowerCase());
          });
      var h;
      const m = (e) => ((e = e.toLowerCase()), (t) => p(t) === e),
        g = (e) => (t) => typeof t === e,
        { isArray: y } = Array,
        v = g("undefined");
      const b = m("ArrayBuffer");
      const w = g("string"),
        k = g("function"),
        S = g("number"),
        E = (e) => null !== e && "object" === typeof e,
        x = (e) => {
          if ("object" !== p(e)) return !1;
          const t = d(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        C = m("Date"),
        _ = m("File"),
        T = m("Blob"),
        P = m("FileList"),
        N = m("URLSearchParams"),
        [O, R, L, z] = ["ReadableStream", "Request", "Response", "Headers"].map(
          m
        );
      function A(e, t) {
        let n,
          r,
          { allOwnKeys: a = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), y(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
              l = r.length;
            let o;
            for (n = 0; n < l; n++) (o = r[n]), t.call(null, e[o], o, e);
          }
      }
      function F(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
          a = n.length;
        for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
        return null;
      }
      const D =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        M = (e) => !v(e) && e !== D;
      const j =
        ((U = "undefined" !== typeof Uint8Array && d(Uint8Array)),
        (e) => U && e instanceof U);
      var U;
      const I = m("HTMLFormElement"),
        B = ((e) => {
          let { hasOwnProperty: t } = e;
          return (e, n) => t.call(e, n);
        })(Object.prototype),
        H = m("RegExp"),
        q = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          A(n, (n, a) => {
            let l;
            !1 !== (l = t(n, a, e)) && (r[a] = l || n);
          }),
            Object.defineProperties(e, r);
        },
        W = "abcdefghijklmnopqrstuvwxyz",
        $ = "0123456789",
        V = {
          DIGIT: $,
          ALPHA: W,
          ALPHA_DIGIT: W + W.toUpperCase() + $,
        };
      const Q = m("AsyncFunction"),
        Y = ((e, t) => {
          return e
            ? setImmediate
            : t
            ? ((n = `axios@${Math.random()}`),
              (r = []),
              D.addEventListener(
                "message",
                (e) => {
                  let { source: t, data: a } = e;
                  t === D && a === n && r.length && r.shift()();
                },
                !1
              ),
              (e) => {
                r.push(e), D.postMessage(n, "*");
              })
            : (e) => setTimeout(e);
          var n, r;
        })("function" === typeof setImmediate, k(D.postMessage)),
        K =
          "undefined" !== typeof queueMicrotask
            ? queueMicrotask.bind(D)
            : ("undefined" !== typeof process && process.nextTick) || Y,
        G = {
          isArray: y,
          isArrayBuffer: b,
          isBuffer: function (e) {
            return (
              null !== e &&
              !v(e) &&
              null !== e.constructor &&
              !v(e.constructor) &&
              k(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (k(e.append) &&
                  ("formdata" === (t = p(e)) ||
                    ("object" === t &&
                      k(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && b(e.buffer)),
              t
            );
          },
          isString: w,
          isNumber: S,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: E,
          isPlainObject: x,
          isReadableStream: O,
          isRequest: R,
          isResponse: L,
          isHeaders: z,
          isUndefined: v,
          isDate: C,
          isFile: _,
          isBlob: T,
          isRegExp: H,
          isFunction: k,
          isStream: (e) => E(e) && k(e.pipe),
          isURLSearchParams: N,
          isTypedArray: j,
          isFileList: P,
          forEach: A,
          merge: function e() {
            const { caseless: t } = (M(this) && this) || {},
              n = {},
              r = (r, a) => {
                const l = (t && F(n, a)) || a;
                x(n[l]) && x(r)
                  ? (n[l] = e(n[l], r))
                  : x(r)
                  ? (n[l] = e({}, r))
                  : y(r)
                  ? (n[l] = r.slice())
                  : (n[l] = r);
              };
            for (let a = 0, l = arguments.length; a < l; a++)
              arguments[a] && A(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            let { allOwnKeys: r } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            return (
              A(
                t,
                (t, r) => {
                  n && k(t) ? (e[r] = c(t, n)) : (e[r] = t);
                },
                {
                  allOwnKeys: r,
                }
              ),
              e
            );
          },
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", {
                value: t.prototype,
              }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let a, l, o;
            const i = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (a = Object.getOwnPropertyNames(e), l = a.length; l-- > 0; )
                (o = a[l]),
                  (r && !r(o, e, t)) || i[o] || ((t[o] = e[o]), (i[o] = !0));
              e = !1 !== n && d(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: p,
          kindOfTest: m,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (y(e)) return e;
            let t = e.length;
            if (!S(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: I,
          hasOwnProperty: B,
          hasOwnProp: B,
          reduceDescriptors: q,
          freezeMethods: (e) => {
            q(e, (t, n) => {
              if (k(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              k(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return y(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) =>
            null != e && Number.isFinite((e = +e)) ? e : t,
          findKey: F,
          global: D,
          isContextDefined: M,
          ALPHABET: V,
          generateString: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : V.ALPHA_DIGIT,
              n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              k(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (E(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const a = y(e) ? [] : {};
                    return (
                      A(e, (e, t) => {
                        const l = n(e, r + 1);
                        !v(l) && (a[t] = l);
                      }),
                      (t[r] = void 0),
                      a
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: Q,
          isThenable: (e) => e && (E(e) || k(e)) && k(e.then) && k(e.catch),
          setImmediate: Y,
          asap: K,
        };
      function X(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a &&
            ((this.response = a), (this.status = a.status ? a.status : null));
      }
      G.inherits(X, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: G.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      const J = X.prototype,
        Z = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        Z[e] = {
          value: e,
        };
      }),
        Object.defineProperties(X, Z),
        Object.defineProperty(J, "isAxiosError", {
          value: !0,
        }),
        (X.from = (e, t, n, r, a, l) => {
          const o = Object.create(J);
          return (
            G.toFlatObject(
              e,
              o,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            X.call(o, e.message, t, n, r, a),
            (o.cause = e),
            (o.name = e.name),
            l && Object.assign(o, l),
            o
          );
        });
      const ee = X;
      function te(e) {
        return G.isPlainObject(e) || G.isArray(e);
      }
      function ne(e) {
        return G.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function re(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = ne(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      const ae = G.toFlatObject(G, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      const le = function (e, t, n) {
        if (!G.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData();
        const r = (n = G.toFlatObject(
            n,
            {
              metaTokens: !0,
              dots: !1,
              indexes: !1,
            },
            !1,
            function (e, t) {
              return !G.isUndefined(t[e]);
            }
          )).metaTokens,
          a = n.visitor || s,
          l = n.dots,
          o = n.indexes,
          i =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            G.isSpecCompliantForm(t);
        if (!G.isFunction(a)) throw new TypeError("visitor must be a function");
        function u(e) {
          if (null === e) return "";
          if (G.isDate(e)) return e.toISOString();
          if (!i && G.isBlob(e))
            throw new ee("Blob is not supported. Use a Buffer instead.");
          return G.isArrayBuffer(e) || G.isTypedArray(e)
            ? i && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function s(e, n, a) {
          let i = e;
          if (e && !a && "object" === typeof e)
            if (G.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (G.isArray(e) &&
                (function (e) {
                  return G.isArray(e) && !e.some(te);
                })(e)) ||
              ((G.isFileList(e) || G.endsWith(n, "[]")) && (i = G.toArray(e)))
            )
              return (
                (n = ne(n)),
                i.forEach(function (e, r) {
                  !G.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === o ? re([n], r, l) : null === o ? n : n + "[]",
                      u(e)
                    );
                }),
                !1
              );
          return !!te(e) || (t.append(re(a, n, l), u(e)), !1);
        }
        const c = [],
          f = Object.assign(ae, {
            defaultVisitor: s,
            convertValue: u,
            isVisitable: te,
          });
        if (!G.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!G.isUndefined(n)) {
              if (-1 !== c.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              c.push(n),
                G.forEach(n, function (n, l) {
                  !0 ===
                    (!(G.isUndefined(n) || null === n) &&
                      a.call(t, n, G.isString(l) ? l.trim() : l, r, f)) &&
                    e(n, r ? r.concat(l) : [l]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      };
      function oe(e) {
        const t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function ie(e, t) {
        (this._pairs = []), e && le(e, this, t);
      }
      const ue = ie.prototype;
      (ue.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (ue.toString = function (e) {
          const t = e
            ? function (t) {
                return e.call(this, t, oe);
              }
            : oe;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      const se = ie;
      function ce(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function fe(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || ce;
        G.isFunction(n) &&
          (n = {
            serialize: n,
          });
        const a = n && n.serialize;
        let l;
        if (
          ((l = a
            ? a(t, n)
            : G.isURLSearchParams(t)
            ? t.toString()
            : new se(t, n).toString(r)),
          l)
        ) {
          const t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + l);
        }
        return e;
      }
      const de = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, n) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            G.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        pe = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        he = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : se,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        me = "undefined" !== typeof window && "undefined" !== typeof document,
        ge = ("object" === typeof navigator && navigator) || void 0,
        ye =
          me &&
          (!ge ||
            ["ReactNative", "NativeScript", "NS"].indexOf(ge.product) < 0),
        ve =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        be = (me && window.location.href) || "http://localhost",
        we = {
          ...e,
          ...he,
        };
      const ke = function (e) {
        function t(e, n, r, a) {
          let l = e[a++];
          if ("__proto__" === l) return !0;
          const o = Number.isFinite(+l),
            i = a >= e.length;
          if (((l = !l && G.isArray(r) ? r.length : l), i))
            return G.hasOwnProp(r, l) ? (r[l] = [r[l], n]) : (r[l] = n), !o;
          (r[l] && G.isObject(r[l])) || (r[l] = []);
          return (
            t(e, n, r[l], a) &&
              G.isArray(r[l]) &&
              (r[l] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const a = n.length;
                let l;
                for (r = 0; r < a; r++) (l = n[r]), (t[l] = e[l]);
                return t;
              })(r[l])),
            !o
          );
        }
        if (G.isFormData(e) && G.isFunction(e.entries)) {
          const n = {};
          return (
            G.forEachEntry(e, (e, r) => {
              t(
                (function (e) {
                  return G.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                    "[]" === e[0] ? "" : e[1] || e[0]
                  );
                })(e),
                r,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      };
      const Se = {
        transitional: pe,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function (e, t) {
            const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              a = G.isObject(e);
            a && G.isHTMLForm(e) && (e = new FormData(e));
            if (G.isFormData(e)) return r ? JSON.stringify(ke(e)) : e;
            if (
              G.isArrayBuffer(e) ||
              G.isBuffer(e) ||
              G.isStream(e) ||
              G.isFile(e) ||
              G.isBlob(e) ||
              G.isReadableStream(e)
            )
              return e;
            if (G.isArrayBufferView(e)) return e.buffer;
            if (G.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            let l;
            if (a) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return le(
                    e,
                    new we.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return we.isNode && G.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (l = G.isFileList(e)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                const t = this.env && this.env.FormData;
                return le(
                  l
                    ? {
                        "files[]": e,
                      }
                    : e,
                  t && new t(),
                  this.formSerializer
                );
              }
            }
            return a || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (G.isString(e))
                    try {
                      return (t || JSON.parse)(e), G.trim(e);
                    } catch (r) {
                      if ("SyntaxError" !== r.name) throw r;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const t = this.transitional || Se.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (G.isResponse(e) || G.isReadableStream(e)) return e;
            if (e && G.isString(e) && ((n && !this.responseType) || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (a) {
                if (n) {
                  if ("SyntaxError" === a.name)
                    throw ee.from(
                      a,
                      ee.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw a;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: we.classes.FormData,
          Blob: we.classes.Blob,
        },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      G.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        Se.headers[e] = {};
      });
      const Ee = Se,
        xe = G.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        Ce = Symbol("internals");
      function _e(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Te(e) {
        return !1 === e || null == e ? e : G.isArray(e) ? e.map(Te) : String(e);
      }
      function Pe(e, t, n, r, a) {
        return G.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            G.isString(t)
              ? G.isString(r)
                ? -1 !== t.indexOf(r)
                : G.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      class Ne {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          const r = this;
          function a(e, t, n) {
            const a = _e(t);
            if (!a) throw new Error("header name must be a non-empty string");
            const l = G.findKey(r, a);
            (!l ||
              void 0 === r[l] ||
              !0 === n ||
              (void 0 === n && !1 !== r[l])) &&
              (r[l || t] = Te(e));
          }
          const l = (e, t) => G.forEach(e, (e, n) => a(e, n, t));
          if (G.isPlainObject(e) || e instanceof this.constructor) l(e, t);
          else if (
            G.isString(e) &&
            (e = e.trim()) &&
            !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
          )
            l(
              ((e) => {
                const t = {};
                let n, r, a;
                return (
                  e &&
                    e.split("\n").forEach(function (e) {
                      (a = e.indexOf(":")),
                        (n = e.substring(0, a).trim().toLowerCase()),
                        (r = e.substring(a + 1).trim()),
                        !n ||
                          (t[n] && xe[n]) ||
                          ("set-cookie" === n
                            ? t[n]
                              ? t[n].push(r)
                              : (t[n] = [r])
                            : (t[n] = t[n] ? t[n] + ", " + r : r));
                    }),
                  t
                );
              })(e),
              t
            );
          else if (G.isHeaders(e)) for (const [o, i] of e.entries()) a(i, o, n);
          else null != e && a(t, e, n);
          return this;
        }
        get(e, t) {
          if ((e = _e(e))) {
            const n = G.findKey(this, e);
            if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                  return t;
                })(e);
              if (G.isFunction(t)) return t.call(this, e, n);
              if (G.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = _e(e))) {
            const n = G.findKey(this, e);
            return !(!n || void 0 === this[n] || (t && !Pe(0, this[n], n, t)));
          }
          return !1;
        }
        delete(e, t) {
          const n = this;
          let r = !1;
          function a(e) {
            if ((e = _e(e))) {
              const a = G.findKey(n, e);
              !a || (t && !Pe(0, n[a], a, t)) || (delete n[a], (r = !0));
            }
          }
          return G.isArray(e) ? e.forEach(a) : a(e), r;
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--; ) {
            const a = t[n];
            (e && !Pe(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
          }
          return r;
        }
        normalize(e) {
          const t = this,
            n = {};
          return (
            G.forEach(this, (r, a) => {
              const l = G.findKey(n, a);
              if (l) return (t[l] = Te(r)), void delete t[a];
              const o = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, t, n) => t.toUpperCase() + n
                      );
                  })(a)
                : String(a).trim();
              o !== a && delete t[a], (t[o] = Te(r)), (n[o] = !0);
            }),
            this
          );
        }
        concat() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.constructor.concat(this, ...t);
        }
        toJSON(e) {
          const t = Object.create(null);
          return (
            G.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (t[r] = e && G.isArray(n) ? n.join(", ") : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map((e) => {
              let [t, n] = e;
              return t + ": " + n;
            })
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e) {
          const t = new this(e);
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          return r.forEach((e) => t.set(e)), t;
        }
        static accessor(e) {
          const t = (this[Ce] = this[Ce] =
              {
                accessors: {},
              }).accessors,
            n = this.prototype;
          function r(e) {
            const r = _e(e);
            t[r] ||
              (!(function (e, t) {
                const n = G.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, a) {
                      return this[r].call(this, t, e, n, a);
                    },
                    configurable: !0,
                  });
                });
              })(n, e),
              (t[r] = !0));
          }
          return G.isArray(e) ? e.forEach(r) : r(e), this;
        }
      }
      Ne.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        G.reduceDescriptors(Ne.prototype, (e, t) => {
          let { value: n } = e,
            r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => n,
            set(e) {
              this[r] = e;
            },
          };
        }),
        G.freezeMethods(Ne);
      const Oe = Ne;
      function Re(e, t) {
        const n = this || Ee,
          r = t || n,
          a = Oe.from(r.headers);
        let l = r.data;
        return (
          G.forEach(e, function (e) {
            l = e.call(n, l, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          l
        );
      }
      function Le(e) {
        return !(!e || !e.__CANCEL__);
      }
      function ze(e, t, n) {
        ee.call(this, null == e ? "canceled" : e, ee.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      G.inherits(ze, ee, {
        __CANCEL__: !0,
      });
      const Ae = ze;
      function Fe(e, t, n) {
        const r = n.config.validateStatus;
        n.status && r && !r(n.status)
          ? t(
              new ee(
                "Request failed with status code " + n.status,
                [ee.ERR_BAD_REQUEST, ee.ERR_BAD_RESPONSE][
                  Math.floor(n.status / 100) - 4
                ],
                n.config,
                n.request,
                n
              )
            )
          : e(n);
      }
      const De = function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let a,
          l = 0,
          o = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (i) {
            const u = Date.now(),
              s = r[o];
            a || (a = u), (n[l] = i), (r[l] = u);
            let c = o,
              f = 0;
            for (; c !== l; ) (f += n[c++]), (c %= e);
            if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), u - a < t))
              return;
            const d = s && u - s;
            return d ? Math.round((1e3 * f) / d) : void 0;
          }
        );
      };
      const Me = function (e, t) {
          let n,
            r,
            a = 0,
            l = 1e3 / t;
          const o = function (t) {
            let l =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Date.now();
            (a = l),
              (n = null),
              r && (clearTimeout(r), (r = null)),
              e.apply(null, t);
          };
          return [
            function () {
              const e = Date.now(),
                t = e - a;
              for (
                var i = arguments.length, u = new Array(i), s = 0;
                s < i;
                s++
              )
                u[s] = arguments[s];
              t >= l
                ? o(u, e)
                : ((n = u),
                  r ||
                    (r = setTimeout(() => {
                      (r = null), o(n);
                    }, l - t)));
            },
            () => n && o(n),
          ];
        },
        je = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 3,
            r = 0;
          const a = De(50, 250);
          return Me((n) => {
            const l = n.loaded,
              o = n.lengthComputable ? n.total : void 0,
              i = l - r,
              u = a(i);
            r = l;
            e({
              loaded: l,
              total: o,
              progress: o ? l / o : void 0,
              bytes: i,
              rate: u || void 0,
              estimated: u && o && l <= o ? (o - l) / u : void 0,
              event: n,
              lengthComputable: null != o,
              [t ? "download" : "upload"]: !0,
            });
          }, n);
        },
        Ue = (e, t) => {
          const n = null != e;
          return [
            (r) =>
              t[0]({
                lengthComputable: n,
                total: e,
                loaded: r,
              }),
            t[1],
          ];
        },
        Ie = (e) =>
          function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return G.asap(() => e(...n));
          },
        Be = we.hasStandardBrowserEnv
          ? ((e, t) => (n) => (
              (n = new URL(n, we.origin)),
              e.protocol === n.protocol &&
                e.host === n.host &&
                (t || e.port === n.port)
            ))(
              new URL(we.origin),
              we.navigator && /(msie|trident)/i.test(we.navigator.userAgent)
            )
          : () => !0,
        He = we.hasStandardBrowserEnv
          ? {
              write(e, t, n, r, a, l) {
                const o = [e + "=" + encodeURIComponent(t)];
                G.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
                  G.isString(r) && o.push("path=" + r),
                  G.isString(a) && o.push("domain=" + a),
                  !0 === l && o.push("secure"),
                  (document.cookie = o.join("; "));
              },
              read(e) {
                const t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write() {},
              read: () => null,
              remove() {},
            };
      function qe(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      const We = (e) =>
        e instanceof Oe
          ? {
              ...e,
            }
          : e;
      function $e(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n, r) {
          return G.isPlainObject(e) && G.isPlainObject(t)
            ? G.merge.call(
                {
                  caseless: r,
                },
                e,
                t
              )
            : G.isPlainObject(t)
            ? G.merge({}, t)
            : G.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n, a) {
          return G.isUndefined(t)
            ? G.isUndefined(e)
              ? void 0
              : r(void 0, e, 0, a)
            : r(e, t, 0, a);
        }
        function l(e, t) {
          if (!G.isUndefined(t)) return r(void 0, t);
        }
        function o(e, t) {
          return G.isUndefined(t)
            ? G.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function i(n, a, l) {
          return l in t ? r(n, a) : l in e ? r(void 0, n) : void 0;
        }
        const u = {
          url: l,
          method: l,
          data: l,
          baseURL: o,
          transformRequest: o,
          transformResponse: o,
          paramsSerializer: o,
          timeout: o,
          timeoutMessage: o,
          withCredentials: o,
          withXSRFToken: o,
          adapter: o,
          responseType: o,
          xsrfCookieName: o,
          xsrfHeaderName: o,
          onUploadProgress: o,
          onDownloadProgress: o,
          decompress: o,
          maxContentLength: o,
          maxBodyLength: o,
          beforeRedirect: o,
          transport: o,
          httpAgent: o,
          httpsAgent: o,
          cancelToken: o,
          socketPath: o,
          responseEncoding: o,
          validateStatus: i,
          headers: (e, t, n) => a(We(e), We(t), 0, !0),
        };
        return (
          G.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            const l = u[r] || a,
              o = l(e[r], t[r], r);
            (G.isUndefined(o) && l !== i) || (n[r] = o);
          }),
          n
        );
      }
      const Ve = (e) => {
          const t = $e({}, e);
          let n,
            {
              data: r,
              withXSRFToken: a,
              xsrfHeaderName: l,
              xsrfCookieName: o,
              headers: i,
              auth: u,
            } = t;
          if (
            ((t.headers = i = Oe.from(i)),
            (t.url = fe(qe(t.baseURL, t.url), e.params, e.paramsSerializer)),
            u &&
              i.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (u.username || "") +
                      ":" +
                      (u.password
                        ? unescape(encodeURIComponent(u.password))
                        : "")
                  )
              ),
            G.isFormData(r))
          )
            if (we.hasStandardBrowserEnv || we.hasStandardBrowserWebWorkerEnv)
              i.setContentType(void 0);
            else if (!1 !== (n = i.getContentType())) {
              const [e, ...t] = n
                ? n
                    .split(";")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              i.setContentType([e || "multipart/form-data", ...t].join("; "));
            }
          if (
            we.hasStandardBrowserEnv &&
            (a && G.isFunction(a) && (a = a(t)), a || (!1 !== a && Be(t.url)))
          ) {
            const e = l && o && He.read(o);
            e && i.set(l, e);
          }
          return t;
        },
        Qe =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              const r = Ve(e);
              let a = r.data;
              const l = Oe.from(r.headers).normalize();
              let o,
                i,
                u,
                s,
                c,
                {
                  responseType: f,
                  onUploadProgress: d,
                  onDownloadProgress: p,
                } = r;
              function h() {
                s && s(),
                  c && c(),
                  r.cancelToken && r.cancelToken.unsubscribe(o),
                  r.signal && r.signal.removeEventListener("abort", o);
              }
              let m = new XMLHttpRequest();
              function g() {
                if (!m) return;
                const r = Oe.from(
                  "getAllResponseHeaders" in m && m.getAllResponseHeaders()
                );
                Fe(
                  function (e) {
                    t(e), h();
                  },
                  function (e) {
                    n(e), h();
                  },
                  {
                    data:
                      f && "text" !== f && "json" !== f
                        ? m.response
                        : m.responseText,
                    status: m.status,
                    statusText: m.statusText,
                    headers: r,
                    config: e,
                    request: m,
                  }
                ),
                  (m = null);
              }
              m.open(r.method.toUpperCase(), r.url, !0),
                (m.timeout = r.timeout),
                "onloadend" in m
                  ? (m.onloadend = g)
                  : (m.onreadystatechange = function () {
                      m &&
                        4 === m.readyState &&
                        (0 !== m.status ||
                          (m.responseURL &&
                            0 === m.responseURL.indexOf("file:"))) &&
                        setTimeout(g);
                    }),
                (m.onabort = function () {
                  m &&
                    (n(new ee("Request aborted", ee.ECONNABORTED, e, m)),
                    (m = null));
                }),
                (m.onerror = function () {
                  n(new ee("Network Error", ee.ERR_NETWORK, e, m)), (m = null);
                }),
                (m.ontimeout = function () {
                  let t = r.timeout
                    ? "timeout of " + r.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const a = r.transitional || pe;
                  r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                    n(
                      new ee(
                        t,
                        a.clarifyTimeoutError ? ee.ETIMEDOUT : ee.ECONNABORTED,
                        e,
                        m
                      )
                    ),
                    (m = null);
                }),
                void 0 === a && l.setContentType(null),
                "setRequestHeader" in m &&
                  G.forEach(l.toJSON(), function (e, t) {
                    m.setRequestHeader(t, e);
                  }),
                G.isUndefined(r.withCredentials) ||
                  (m.withCredentials = !!r.withCredentials),
                f && "json" !== f && (m.responseType = r.responseType),
                p && (([u, c] = je(p, !0)), m.addEventListener("progress", u)),
                d &&
                  m.upload &&
                  (([i, s] = je(d)),
                  m.upload.addEventListener("progress", i),
                  m.upload.addEventListener("loadend", s)),
                (r.cancelToken || r.signal) &&
                  ((o = (t) => {
                    m &&
                      (n(!t || t.type ? new Ae(null, e, m) : t),
                      m.abort(),
                      (m = null));
                  }),
                  r.cancelToken && r.cancelToken.subscribe(o),
                  r.signal &&
                    (r.signal.aborted
                      ? o()
                      : r.signal.addEventListener("abort", o)));
              const y = (function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(r.url);
              y && -1 === we.protocols.indexOf(y)
                ? n(
                    new ee(
                      "Unsupported protocol " + y + ":",
                      ee.ERR_BAD_REQUEST,
                      e
                    )
                  )
                : m.send(a || null);
            });
          },
        Ye = (e, t) => {
          const { length: n } = (e = e ? e.filter(Boolean) : []);
          if (t || n) {
            let n,
              r = new AbortController();
            const a = function (e) {
              if (!n) {
                (n = !0), o();
                const t = e instanceof Error ? e : this.reason;
                r.abort(
                  t instanceof ee
                    ? t
                    : new Ae(t instanceof Error ? t.message : t)
                );
              }
            };
            let l =
              t &&
              setTimeout(() => {
                (l = null),
                  a(new ee(`timeout ${t} of ms exceeded`, ee.ETIMEDOUT));
              }, t);
            const o = () => {
              e &&
                (l && clearTimeout(l),
                (l = null),
                e.forEach((e) => {
                  e.unsubscribe
                    ? e.unsubscribe(a)
                    : e.removeEventListener("abort", a);
                }),
                (e = null));
            };
            e.forEach((e) => e.addEventListener("abort", a));
            const { signal: i } = r;
            return (i.unsubscribe = () => G.asap(o)), i;
          }
        },
        Ke = function* (e, t) {
          let n = e.byteLength;
          if (!t || n < t) return void (yield e);
          let r,
            a = 0;
          for (; a < n; ) (r = a + t), yield e.slice(a, r), (a = r);
        },
        Ge = async function* (e) {
          if (e[Symbol.asyncIterator]) return void (yield* e);
          const t = e.getReader();
          try {
            for (;;) {
              const { done: e, value: n } = await t.read();
              if (e) break;
              yield n;
            }
          } finally {
            await t.cancel();
          }
        },
        Xe = (e, t, n, r) => {
          const a = (async function* (e, t) {
            for await (const n of Ge(e)) yield* Ke(n, t);
          })(e, t);
          let l,
            o = 0,
            i = (e) => {
              l || ((l = !0), r && r(e));
            };
          return new ReadableStream(
            {
              async pull(e) {
                try {
                  const { done: t, value: r } = await a.next();
                  if (t) return i(), void e.close();
                  let l = r.byteLength;
                  if (n) {
                    let e = (o += l);
                    n(e);
                  }
                  e.enqueue(new Uint8Array(r));
                } catch (t) {
                  throw (i(t), t);
                }
              },
              cancel: (e) => (i(e), a.return()),
            },
            {
              highWaterMark: 2,
            }
          );
        },
        Je =
          "function" === typeof fetch &&
          "function" === typeof Request &&
          "function" === typeof Response,
        Ze = Je && "function" === typeof ReadableStream,
        et =
          Je &&
          ("function" === typeof TextEncoder
            ? ((tt = new TextEncoder()), (e) => tt.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
      var tt;
      const nt = function (e) {
          try {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return !!e(...n);
          } catch (a) {
            return !1;
          }
        },
        rt =
          Ze &&
          nt(() => {
            let e = !1;
            const t = new Request(we.origin, {
              body: new ReadableStream(),
              method: "POST",
              get duplex() {
                return (e = !0), "half";
              },
            }).headers.has("Content-Type");
            return e && !t;
          }),
        at = Ze && nt(() => G.isReadableStream(new Response("").body)),
        lt = {
          stream: at && ((e) => e.body),
        };
      var ot;
      Je &&
        ((ot = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          !lt[e] &&
            (lt[e] = G.isFunction(ot[e])
              ? (t) => t[e]()
              : (t, n) => {
                  throw new ee(
                    `Response type '${e}' is not supported`,
                    ee.ERR_NOT_SUPPORT,
                    n
                  );
                });
        }));
      const it = async (e, t) => {
          const n = G.toFiniteNumber(e.getContentLength());
          return null == n
            ? (async (e) => {
                if (null == e) return 0;
                if (G.isBlob(e)) return e.size;
                if (G.isSpecCompliantForm(e)) {
                  const t = new Request(we.origin, {
                    method: "POST",
                    body: e,
                  });
                  return (await t.arrayBuffer()).byteLength;
                }
                return G.isArrayBufferView(e) || G.isArrayBuffer(e)
                  ? e.byteLength
                  : (G.isURLSearchParams(e) && (e += ""),
                    G.isString(e) ? (await et(e)).byteLength : void 0);
              })(t)
            : n;
        },
        ut = {
          http: null,
          xhr: Qe,
          fetch:
            Je &&
            (async (e) => {
              let {
                url: t,
                method: n,
                data: r,
                signal: a,
                cancelToken: l,
                timeout: o,
                onDownloadProgress: i,
                onUploadProgress: u,
                responseType: s,
                headers: c,
                withCredentials: f = "same-origin",
                fetchOptions: d,
              } = Ve(e);
              s = s ? (s + "").toLowerCase() : "text";
              let p,
                h = Ye([a, l && l.toAbortSignal()], o);
              const m =
                h &&
                h.unsubscribe &&
                (() => {
                  h.unsubscribe();
                });
              let g;
              try {
                if (
                  u &&
                  rt &&
                  "get" !== n &&
                  "head" !== n &&
                  0 !== (g = await it(c, r))
                ) {
                  let e,
                    n = new Request(t, {
                      method: "POST",
                      body: r,
                      duplex: "half",
                    });
                  if (
                    (G.isFormData(r) &&
                      (e = n.headers.get("content-type")) &&
                      c.setContentType(e),
                    n.body)
                  ) {
                    const [e, t] = Ue(g, je(Ie(u)));
                    r = Xe(n.body, 65536, e, t);
                  }
                }
                G.isString(f) || (f = f ? "include" : "omit");
                const a = "credentials" in Request.prototype;
                p = new Request(t, {
                  ...d,
                  signal: h,
                  method: n.toUpperCase(),
                  headers: c.normalize().toJSON(),
                  body: r,
                  duplex: "half",
                  credentials: a ? f : void 0,
                });
                let l = await fetch(p);
                const o = at && ("stream" === s || "response" === s);
                if (at && (i || (o && m))) {
                  const e = {};
                  ["status", "statusText", "headers"].forEach((t) => {
                    e[t] = l[t];
                  });
                  const t = G.toFiniteNumber(l.headers.get("content-length")),
                    [n, r] = (i && Ue(t, je(Ie(i), !0))) || [];
                  l = new Response(
                    Xe(l.body, 65536, n, () => {
                      r && r(), m && m();
                    }),
                    e
                  );
                }
                s = s || "text";
                let y = await lt[G.findKey(lt, s) || "text"](l, e);
                return (
                  !o && m && m(),
                  await new Promise((t, n) => {
                    Fe(t, n, {
                      data: y,
                      headers: Oe.from(l.headers),
                      status: l.status,
                      statusText: l.statusText,
                      config: e,
                      request: p,
                    });
                  })
                );
              } catch (y) {
                if (
                  (m && m(),
                  y && "TypeError" === y.name && /fetch/i.test(y.message))
                )
                  throw Object.assign(
                    new ee("Network Error", ee.ERR_NETWORK, e, p),
                    {
                      cause: y.cause || y,
                    }
                  );
                throw ee.from(y, y && y.code, e, p);
              }
            }),
        };
      G.forEach(ut, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", {
              value: t,
            });
          } catch (n) {}
          Object.defineProperty(e, "adapterName", {
            value: t,
          });
        }
      });
      const st = (e) => `- ${e}`,
        ct = (e) => G.isFunction(e) || null === e || !1 === e,
        ft = (e) => {
          e = G.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const a = {};
          for (let l = 0; l < t; l++) {
            let t;
            if (
              ((n = e[l]),
              (r = n),
              !ct(n) && ((r = ut[(t = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new ee(`Unknown adapter '${t}'`);
            if (r) break;
            a[t || "#" + l] = r;
          }
          if (!r) {
            const e = Object.entries(a).map((e) => {
              let [t, n] = e;
              return (
                `adapter ${t} ` +
                (!1 === n
                  ? "is not supported by the environment"
                  : "is not available in the build")
              );
            });
            let n = t
              ? e.length > 1
                ? "since :\n" + e.map(st).join("\n")
                : " " + st(e[0])
              : "as no adapter specified";
            throw new ee(
              "There is no suitable adapter to dispatch the request " + n,
              "ERR_NOT_SUPPORT"
            );
          }
          return r;
        };
      function dt(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new Ae(null, e);
      }
      function pt(e) {
        dt(e),
          (e.headers = Oe.from(e.headers)),
          (e.data = Re.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return ft(e.adapter || Ee.adapter)(e).then(
          function (t) {
            return (
              dt(e),
              (t.data = Re.call(e, e.transformResponse, t)),
              (t.headers = Oe.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              Le(t) ||
                (dt(e),
                t &&
                  t.response &&
                  ((t.response.data = Re.call(
                    e,
                    e.transformResponse,
                    t.response
                  )),
                  (t.response.headers = Oe.from(t.response.headers)))),
              Promise.reject(t)
            );
          }
        );
      }
      const ht = "1.7.9",
        mt = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          mt[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      const gt = {};
      (mt.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.7.9] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return (n, a, l) => {
          if (!1 === e)
            throw new ee(
              r(a, " has been removed" + (t ? " in " + t : "")),
              ee.ERR_DEPRECATED
            );
          return (
            t &&
              !gt[a] &&
              ((gt[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, l)
          );
        };
      }),
        (mt.spelling = function (e) {
          return (t, n) => (
            console.warn(`${n} is likely a misspelling of ${e}`), !0
          );
        });
      const yt = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new ee(
                "options must be an object",
                ee.ERR_BAD_OPTION_VALUE
              );
            const r = Object.keys(e);
            let a = r.length;
            for (; a-- > 0; ) {
              const l = r[a],
                o = t[l];
              if (o) {
                const t = e[l],
                  n = void 0 === t || o(t, l, e);
                if (!0 !== n)
                  throw new ee(
                    "option " + l + " must be " + n,
                    ee.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new ee("Unknown option " + l, ee.ERR_BAD_OPTION);
            }
          },
          validators: mt,
        },
        vt = yt.validators;
      class bt {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = {
              request: new de(),
              response: new de(),
            });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (n) {
            if (n instanceof Error) {
              let e = {};
              Error.captureStackTrace
                ? Error.captureStackTrace(e)
                : (e = new Error());
              const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              try {
                n.stack
                  ? t &&
                    !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                    (n.stack += "\n" + t)
                  : (n.stack = t);
              } catch (r) {}
            }
            throw n;
          }
        }
        _request(e, t) {
          "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = $e(this.defaults, t));
          const { transitional: n, paramsSerializer: r, headers: a } = t;
          void 0 !== n &&
            yt.assertOptions(
              n,
              {
                silentJSONParsing: vt.transitional(vt.boolean),
                forcedJSONParsing: vt.transitional(vt.boolean),
                clarifyTimeoutError: vt.transitional(vt.boolean),
              },
              !1
            ),
            null != r &&
              (G.isFunction(r)
                ? (t.paramsSerializer = {
                    serialize: r,
                  })
                : yt.assertOptions(
                    r,
                    {
                      encode: vt.function,
                      serialize: vt.function,
                    },
                    !0
                  )),
            yt.assertOptions(
              t,
              {
                baseUrl: vt.spelling("baseURL"),
                withXsrfToken: vt.spelling("withXSRFToken"),
              },
              !0
            ),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let l = a && G.merge(a.common, a[t.method]);
          a &&
            G.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = Oe.concat(l, a));
          const o = [];
          let i = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((i = i && e.synchronous), o.unshift(e.fulfilled, e.rejected));
          });
          const u = [];
          let s;
          this.interceptors.response.forEach(function (e) {
            u.push(e.fulfilled, e.rejected);
          });
          let c,
            f = 0;
          if (!i) {
            const e = [pt.bind(this), void 0];
            for (
              e.unshift.apply(e, o),
                e.push.apply(e, u),
                c = e.length,
                s = Promise.resolve(t);
              f < c;

            )
              s = s.then(e[f++], e[f++]);
            return s;
          }
          c = o.length;
          let d = t;
          for (f = 0; f < c; ) {
            const e = o[f++],
              t = o[f++];
            try {
              d = e(d);
            } catch (p) {
              t.call(this, p);
              break;
            }
          }
          try {
            s = pt.call(this, d);
          } catch (p) {
            return Promise.reject(p);
          }
          for (f = 0, c = u.length; f < c; ) s = s.then(u[f++], u[f++]);
          return s;
        }
        getUri(e) {
          return fe(
            qe((e = $e(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer
          );
        }
      }
      G.forEach(["delete", "get", "head", "options"], function (e) {
        bt.prototype[e] = function (t, n) {
          return this.request(
            $e(n || {}, {
              method: e,
              url: t,
              data: (n || {}).data,
            })
          );
        };
      }),
        G.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                $e(a || {}, {
                  method: e,
                  headers: t
                    ? {
                        "Content-Type": "multipart/form-data",
                      }
                    : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (bt.prototype[e] = t()), (bt.prototype[e + "Form"] = t(!0));
        });
      const wt = bt;
      class kt {
        constructor(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          const n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              const r = new Promise((e) => {
                n.subscribe(e), (t = e);
              }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, a) {
              n.reason || ((n.reason = new Ae(e, r, a)), t(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason
            ? e(this.reason)
            : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        toAbortSignal() {
          const e = new AbortController(),
            t = (t) => {
              e.abort(t);
            };
          return (
            this.subscribe(t),
            (e.signal.unsubscribe = () => this.unsubscribe(t)),
            e.signal
          );
        }
        static source() {
          let e;
          return {
            token: new kt(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      const St = kt;
      const Et = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Et).forEach((e) => {
        let [t, n] = e;
        Et[n] = t;
      });
      const xt = Et;
      const Ct = (function e(t) {
        const n = new wt(t),
          r = c(wt.prototype.request, n);
        return (
          G.extend(r, wt.prototype, n, {
            allOwnKeys: !0,
          }),
          G.extend(r, n, null, {
            allOwnKeys: !0,
          }),
          (r.create = function (n) {
            return e($e(t, n));
          }),
          r
        );
      })(Ee);
      (Ct.Axios = wt),
        (Ct.CanceledError = Ae),
        (Ct.CancelToken = St),
        (Ct.isCancel = Le),
        (Ct.VERSION = ht),
        (Ct.toFormData = le),
        (Ct.AxiosError = ee),
        (Ct.Cancel = Ct.CanceledError),
        (Ct.all = function (e) {
          return Promise.all(e);
        }),
        (Ct.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (Ct.isAxiosError = function (e) {
          return G.isObject(e) && !0 === e.isAxiosError;
        }),
        (Ct.mergeConfig = $e),
        (Ct.AxiosHeaders = Oe),
        (Ct.formToJSON = (e) => ke(G.isHTMLForm(e) ? new FormData(e) : e)),
        (Ct.getAdapter = ft),
        (Ct.HttpStatusCode = xt),
        (Ct.default = Ct);
      const _t = Ct;
      function Tt(e) {
        const [n, r] = (0, t.useState)(!1),
          [l, o] = (0, t.useState)(null);
        if (
          ((0, t.useEffect)(() => {
            r(!1);
          }, [e.coordinates]),
          n)
        )
          return (0, a.jsx)("div", {
            className: "WeatherForecast row",
            children: l.map(function (e, t) {
              return t < 5
                ? (0, a.jsx)(
                    "div",
                    {
                      className: "col",
                      children: (0, a.jsx)(s, {
                        data: e,
                      }),
                    },
                    t
                  )
                : null;
            }),
          });
        {
          let t = "ff417f6e1553tb7e790a6334bb9cocff",
            n = `https://api.shecodes.io/weather/v1/forecast?query=${e.city}&key=${t}&units=metric`;
          return (
            _t.get(n).then(function (e) {
              o(e.data.daily), r(!0);
            }),
            null
          );
        }
      }
      function Pt(e) {
        const [n, r] = (0, t.useState)({
            ready: !1,
          }),
          [l, o] = (0, t.useState)(e.defaultCity);
        function i(e) {
          r({
            ready: !0,
            coordinates: e.data.coordinates,
            temperature: e.data.temperature.current,
            humidity: e.data.temperature.humidity,
            date: new Date(1e3 * e.data.time),
            description: e.data.condition.description,
            icon: e.data.condition.icon,
            wind: e.data.wind.speed,
            city: e.data.city,
          });
        }
        function s() {
          let e = `https://api.shecodes.io/weather/v1/current?query=${l}&key=eac360db5fc86ft86450f3693e73o43f&units=metric`;
          _t.get(e).then(i);
        }
        return n.ready
          ? (0, a.jsxs)("div", {
              className: "Weather",
              children: [
                (0, a.jsx)("a", {
                  href: "https://www.shecodes.io/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, a.jsx)("img", {
                    src: "/images/logo.png",
                    className: "logo",
                    alt: "SheCodes Logo",
                  }),
                }),
                (0, a.jsx)("form", {
                  onSubmit: function (e) {
                    e.preventDefault(), s();
                  },
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-9 ",
                        children: (0, a.jsx)("input", {
                          type: "search",
                          placeholder: "Enter a city..",
                          className: "form-control search-input",
                          onChange: function (e) {
                            o(e.target.value);
                          },
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-3 p-0",
                        children: (0, a.jsx)("input", {
                          type: "submit",
                          value: "Search",
                          className: "btn btn-primary w-100",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(u, {
                  data: n,
                }),
                (0, a.jsx)(Tt, {
                  coordinates: n.coordinates,
                  city: n.city,
                }),
                (0, a.jsxs)("footer", {
                  children: [
                    "This project was coded by",
                    " ",
                    (0, a.jsx)("a", {
                      href: "https://www.shecodes.io/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Ziyanda Davashe",
                    }),
                    " ",
                    "and is",
                    " ",
                    (0, a.jsx)("a", {
                      href: "https://github.com/shecodesio/weather",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "open-sourced on GitHub",
                    }),
                    " ",
                    "and",
                    " ",
                    (0, a.jsx)("a", {
                      href: "https://shecodes-weather.netlify.app/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "hosted on Netlify",
                    }),
                  ],
                }),
              ],
            })
          : (s(), "Loading...");
      }
      function Nt() {
        return (0, a.jsx)("div", {
          className: "App",
          children: (0, a.jsx)("div", {
            className: "container",
            children: (0, a.jsx)(Pt, {
              defaultCity: "San Francisco",
            }),
          }),
        });
      }
      const Ot = document.getElementById("root");
      (0, r.createRoot)(Ot).render((0, a.jsx)(Nt, {}));
    })();
})();
//# sourceMappingURL=main.32406849.js.map
