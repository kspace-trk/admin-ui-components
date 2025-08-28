import { defineComponent as L, computed as oe, createElementBlock as w, openBlock as k, normalizeClass as F, createCommentVNode as W, createTextVNode as Le, toDisplayString as E, createElementVNode as y, inject as Ae, ref as V, shallowRef as Ne, onMounted as De, watch as Ve, onUnmounted as Re, h as se, nextTick as $e, resolveComponent as He, Fragment as ie, renderList as ze, createVNode as N, unref as D, withCtx as re } from "vue";
const Be = ["disabled"], Qe = {
  key: 0,
  class: "spinner"
}, Ue = /* @__PURE__ */ L({
  __name: "MainButton",
  props: {
    type: { default: "submit" },
    text: { default: "" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: o }) {
    const t = o, s = () => {
      !e.disabled && !e.loading && t("click");
    }, n = oe(() => e.loading ? "処理中..." : e.text ? e.text : e.type === "submit" ? "送信" : "キャンセル"), i = oe(() => {
      const r = "main-button", l = e.type === "submit" ? "main-button--submit" : "main-button--cancel", u = e.disabled || e.loading ? "main-button--disabled" : "";
      return [r, l, u].filter(Boolean).join(" ");
    });
    return (r, l) => (k(), w("button", {
      class: F(i.value),
      disabled: r.disabled || r.loading,
      onClick: s
    }, [
      r.loading ? (k(), w("span", Qe)) : W("", !0),
      Le(" " + E(n.value), 1)
    ], 10, Be));
  }
}), B = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, n] of o)
    t[s] = n;
  return t;
}, cn = /* @__PURE__ */ B(Ue, [["__scopeId", "data-v-489ef9cb"]]), qe = { class: "input-field" }, Ge = { class: "input-field__label" }, Ke = ["value", "placeholder"], We = /* @__PURE__ */ L({
  __name: "InputField",
  props: {
    label: {},
    placeholder: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = o;
    return (s, n) => (k(), w("div", qe, [
      y("label", Ge, E(s.label), 1),
      y("input", {
        value: s.modelValue,
        placeholder: s.placeholder,
        class: "input-field__input",
        onInput: n[0] || (n[0] = (i) => t("update:modelValue", i.target.value))
      }, null, 40, Ke)
    ]));
  }
}), ln = /* @__PURE__ */ B(We, [["__scopeId", "data-v-9da3aab7"]]), Je = { class: "top-header" }, Xe = { class: "top-header__title" }, Ye = /* @__PURE__ */ L({
  __name: "TopHeader",
  props: {
    title: {}
  },
  setup(e) {
    return (o, t) => (k(), w("div", Je, [
      y("h1", Xe, E(o.title), 1)
    ]));
  }
}), un = /* @__PURE__ */ B(Ye, [["__scopeId", "data-v-e8c80d3a"]]);
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
var ce;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ce || (ce = {}));
var le;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(le || (le = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var ue;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ue || (ue = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const Ze = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function et(e) {
  return Ae(Ze);
}
const ke = /^[a-z0-9]+(-[a-z0-9]+)*$/, Q = (e, o, t, s = "") => {
  const n = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (n.length < 2 || n.length > 3)
      return null;
    s = n.shift().slice(1);
  }
  if (n.length > 3 || !n.length)
    return null;
  if (n.length > 1) {
    const l = n.pop(), u = n.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: n.length > 0 ? n[0] : s,
      prefix: u,
      name: l
    };
    return o && !R(c) ? null : c;
  }
  const i = n[0], r = i.split("-");
  if (r.length > 1) {
    const l = {
      provider: s,
      prefix: r.shift(),
      name: r.join("-")
    };
    return o && !R(l) ? null : l;
  }
  if (t && s === "") {
    const l = {
      provider: s,
      prefix: "",
      name: i
    };
    return o && !R(l, t) ? null : l;
  }
  return null;
}, R = (e, o) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((o && e.prefix === "" || e.prefix) && e.name) : !1, Se = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), z = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), U = Object.freeze({
  ...Se,
  ...z
}), J = Object.freeze({
  ...U,
  body: "",
  hidden: !1
});
function tt(e, o) {
  const t = {};
  !e.hFlip != !o.hFlip && (t.hFlip = !0), !e.vFlip != !o.vFlip && (t.vFlip = !0);
  const s = ((e.rotate || 0) + (o.rotate || 0)) % 4;
  return s && (t.rotate = s), t;
}
function ae(e, o) {
  const t = tt(e, o);
  for (const s in J)
    s in z ? s in e && !(s in t) && (t[s] = z[s]) : s in o ? t[s] = o[s] : s in e && (t[s] = e[s]);
  return t;
}
function nt(e, o) {
  const t = e.icons, s = e.aliases || /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  function i(r) {
    if (t[r])
      return n[r] = [];
    if (!(r in n)) {
      n[r] = null;
      const l = s[r] && s[r].parent, u = l && i(l);
      u && (n[r] = [l].concat(u));
    }
    return n[r];
  }
  return Object.keys(t).concat(Object.keys(s)).forEach(i), n;
}
function ot(e, o, t) {
  const s = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function r(l) {
    i = ae(
      s[l] || n[l],
      i
    );
  }
  return r(o), t.forEach(r), ae(e, i);
}
function Ce(e, o) {
  const t = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return t;
  e.not_found instanceof Array && e.not_found.forEach((n) => {
    o(n, null), t.push(n);
  });
  const s = nt(e);
  for (const n in s) {
    const i = s[n];
    i && (o(n, ot(e, n, i)), t.push(n));
  }
  return t;
}
const st = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Se
};
function G(e, o) {
  for (const t in o)
    if (t in e && typeof e[t] != typeof o[t])
      return !1;
  return !0;
}
function _e(e) {
  if (typeof e != "object" || e === null)
    return null;
  const o = e;
  if (typeof o.prefix != "string" || !e.icons || typeof e.icons != "object" || !G(e, st))
    return null;
  const t = o.icons;
  for (const n in t) {
    const i = t[n];
    if (
      // Name cannot be empty
      !n || // Must have body
      typeof i.body != "string" || // Check other props
      !G(
        i,
        J
      )
    )
      return null;
  }
  const s = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const n in s) {
    const i = s[n], r = i.parent;
    if (
      // Name cannot be empty
      !n || // Parent must be set and point to existing icon
      typeof r != "string" || !t[r] && !s[r] || // Check other props
      !G(
        i,
        J
      )
    )
      return null;
  }
  return o;
}
const fe = /* @__PURE__ */ Object.create(null);
function it(e, o) {
  return {
    provider: e,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function T(e, o) {
  const t = fe[e] || (fe[e] = /* @__PURE__ */ Object.create(null));
  return t[o] || (t[o] = it(e, o));
}
function Ee(e, o) {
  return _e(o) ? Ce(o, (t, s) => {
    s ? e.icons[t] = s : e.missing.add(t);
  }) : [];
}
function rt(e, o, t) {
  try {
    if (typeof t.body == "string")
      return e.icons[o] = { ...t }, !0;
  } catch {
  }
  return !1;
}
let M = !1;
function Te(e) {
  return typeof e == "boolean" && (M = e), M;
}
function ct(e) {
  const o = typeof e == "string" ? Q(e, !0, M) : e;
  if (o) {
    const t = T(o.provider, o.prefix), s = o.name;
    return t.icons[s] || (t.missing.has(s) ? null : void 0);
  }
}
function lt(e, o) {
  const t = Q(e, !0, M);
  if (!t)
    return !1;
  const s = T(t.provider, t.prefix);
  return o ? rt(s, t.name, o) : (s.missing.add(t.name), !0);
}
function ut(e, o) {
  if (typeof e != "object")
    return !1;
  if (typeof o != "string" && (o = e.provider || ""), M && !o && !e.prefix) {
    let n = !1;
    return _e(e) && (e.prefix = "", Ce(e, (i, r) => {
      lt(i, r) && (n = !0);
    })), n;
  }
  const t = e.prefix;
  if (!R({
    prefix: t,
    name: "a"
  }))
    return !1;
  const s = T(o, t);
  return !!Ee(s, e);
}
const je = Object.freeze({
  width: null,
  height: null
}), Oe = Object.freeze({
  // Dimensions
  ...je,
  // Transformations
  ...z
}), at = /(-?[0-9.]*[0-9]+[0-9.]*)/g, ft = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function de(e, o, t) {
  if (o === 1)
    return e;
  if (t = t || 100, typeof e == "number")
    return Math.ceil(e * o * t) / t;
  if (typeof e != "string")
    return e;
  const s = e.split(at);
  if (s === null || !s.length)
    return e;
  const n = [];
  let i = s.shift(), r = ft.test(i);
  for (; ; ) {
    if (r) {
      const l = parseFloat(i);
      isNaN(l) ? n.push(i) : n.push(Math.ceil(l * o * t) / t);
    } else
      n.push(i);
    if (i = s.shift(), i === void 0)
      return n.join("");
    r = !r;
  }
}
function dt(e, o = "defs") {
  let t = "";
  const s = e.indexOf("<" + o);
  for (; s >= 0; ) {
    const n = e.indexOf(">", s), i = e.indexOf("</" + o);
    if (n === -1 || i === -1)
      break;
    const r = e.indexOf(">", i);
    if (r === -1)
      break;
    t += e.slice(n + 1, i).trim(), e = e.slice(0, s).trim() + e.slice(r + 1);
  }
  return {
    defs: t,
    content: e
  };
}
function pt(e, o) {
  return e ? "<defs>" + e + "</defs>" + o : o;
}
function ht(e, o, t) {
  const s = dt(e);
  return pt(s.defs, o + s.content + t);
}
const mt = (e) => e === "unset" || e === "undefined" || e === "none";
function gt(e, o) {
  const t = {
    ...U,
    ...e
  }, s = {
    ...Oe,
    ...o
  }, n = {
    left: t.left,
    top: t.top,
    width: t.width,
    height: t.height
  };
  let i = t.body;
  [t, s].forEach((g) => {
    const f = [], _ = g.hFlip, S = g.vFlip;
    let I = g.rotate;
    _ ? S ? I += 2 : (f.push(
      "translate(" + (n.width + n.left).toString() + " " + (0 - n.top).toString() + ")"
    ), f.push("scale(-1 1)"), n.top = n.left = 0) : S && (f.push(
      "translate(" + (0 - n.left).toString() + " " + (n.height + n.top).toString() + ")"
    ), f.push("scale(1 -1)"), n.top = n.left = 0);
    let v;
    switch (I < 0 && (I -= Math.floor(I / 4) * 4), I = I % 4, I) {
      case 1:
        v = n.height / 2 + n.top, f.unshift(
          "rotate(90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
      case 2:
        f.unshift(
          "rotate(180 " + (n.width / 2 + n.left).toString() + " " + (n.height / 2 + n.top).toString() + ")"
        );
        break;
      case 3:
        v = n.width / 2 + n.left, f.unshift(
          "rotate(-90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
    }
    I % 2 === 1 && (n.left !== n.top && (v = n.left, n.left = n.top, n.top = v), n.width !== n.height && (v = n.width, n.width = n.height, n.height = v)), f.length && (i = ht(
      i,
      '<g transform="' + f.join(" ") + '">',
      "</g>"
    ));
  });
  const r = s.width, l = s.height, u = n.width, c = n.height;
  let a, d;
  r === null ? (d = l === null ? "1em" : l === "auto" ? c : l, a = de(d, u / c)) : (a = r === "auto" ? u : r, d = l === null ? de(a, c / u) : l === "auto" ? c : l);
  const p = {}, m = (g, f) => {
    mt(f) || (p[g] = f.toString());
  };
  m("width", a), m("height", d);
  const b = [n.left, n.top, u, c];
  return p.viewBox = b.join(" "), {
    attributes: p,
    viewBox: b,
    body: i
  };
}
const bt = /\sid="(\S+)"/g, yt = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let vt = 0;
function xt(e, o = yt) {
  const t = [];
  let s;
  for (; s = bt.exec(e); )
    t.push(s[1]);
  if (!t.length)
    return e;
  const n = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((i) => {
    const r = typeof o == "function" ? o(i) : o + (vt++).toString(), l = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"),
      "$1" + r + n + "$3"
    );
  }), e = e.replace(new RegExp(n, "g"), ""), e;
}
const X = /* @__PURE__ */ Object.create(null);
function It(e, o) {
  X[e] = o;
}
function Y(e) {
  return X[e] || X[""];
}
function ee(e) {
  let o;
  if (typeof e.resources == "string")
    o = [e.resources];
  else if (o = e.resources, !(o instanceof Array) || !o.length)
    return null;
  return {
    // API hosts
    resources: o,
    // Root path
    path: e.path || "/",
    // URL length limit
    maxURL: e.maxURL || 500,
    // Timeout before next host is used.
    rotate: e.rotate || 750,
    // Timeout before failing query.
    timeout: e.timeout || 5e3,
    // Randomise default API end point.
    random: e.random === !0,
    // Start index
    index: e.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const te = /* @__PURE__ */ Object.create(null), O = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], $ = [];
for (; O.length > 0; )
  O.length === 1 || Math.random() > 0.5 ? $.push(O.shift()) : $.push(O.pop());
te[""] = ee({
  resources: ["https://api.iconify.design"].concat($)
});
function wt(e, o) {
  const t = ee(o);
  return t === null ? !1 : (te[e] = t, !0);
}
function ne(e) {
  return te[e];
}
const kt = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let pe = kt();
function St(e, o) {
  const t = ne(e);
  if (!t)
    return 0;
  let s;
  if (!t.maxURL)
    s = 0;
  else {
    let n = 0;
    t.resources.forEach((r) => {
      n = Math.max(n, r.length);
    });
    const i = o + ".json?icons=";
    s = t.maxURL - n - t.path.length - i.length;
  }
  return s;
}
function Ct(e) {
  return e === 404;
}
const _t = (e, o, t) => {
  const s = [], n = St(e, o), i = "icons";
  let r = {
    type: i,
    provider: e,
    prefix: o,
    icons: []
  }, l = 0;
  return t.forEach((u, c) => {
    l += u.length + 1, l >= n && c > 0 && (s.push(r), r = {
      type: i,
      provider: e,
      prefix: o,
      icons: []
    }, l = u.length), r.icons.push(u);
  }), s.push(r), s;
};
function Et(e) {
  if (typeof e == "string") {
    const o = ne(e);
    if (o)
      return o.path;
  }
  return "/";
}
const Tt = (e, o, t) => {
  if (!pe) {
    t("abort", 424);
    return;
  }
  let s = Et(o.provider);
  switch (o.type) {
    case "icons": {
      const i = o.prefix, l = o.icons.join(","), u = new URLSearchParams({
        icons: l
      });
      s += i + ".json?" + u.toString();
      break;
    }
    case "custom": {
      const i = o.uri;
      s += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      t("abort", 400);
      return;
  }
  let n = 503;
  pe(e + s).then((i) => {
    const r = i.status;
    if (r !== 200) {
      setTimeout(() => {
        t(Ct(r) ? "abort" : "next", r);
      });
      return;
    }
    return n = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        i === 404 ? t("abort", i) : t("next", n);
      });
      return;
    }
    setTimeout(() => {
      t("success", i);
    });
  }).catch(() => {
    t("next", n);
  });
}, jt = {
  prepare: _t,
  send: Tt
};
function Ot(e) {
  const o = {
    loaded: [],
    missing: [],
    pending: []
  }, t = /* @__PURE__ */ Object.create(null);
  e.sort((n, i) => n.provider !== i.provider ? n.provider.localeCompare(i.provider) : n.prefix !== i.prefix ? n.prefix.localeCompare(i.prefix) : n.name.localeCompare(i.name));
  let s = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((n) => {
    if (s.name === n.name && s.prefix === n.prefix && s.provider === n.provider)
      return;
    s = n;
    const i = n.provider, r = n.prefix, l = n.name, u = t[i] || (t[i] = /* @__PURE__ */ Object.create(null)), c = u[r] || (u[r] = T(i, r));
    let a;
    l in c.icons ? a = o.loaded : r === "" || c.missing.has(l) ? a = o.missing : a = o.pending;
    const d = {
      provider: i,
      prefix: r,
      name: l
    };
    a.push(d);
  }), o;
}
function Pe(e, o) {
  e.forEach((t) => {
    const s = t.loaderCallbacks;
    s && (t.loaderCallbacks = s.filter((n) => n.id !== o));
  });
}
function Pt(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const o = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!o.length)
      return;
    let t = !1;
    const s = e.provider, n = e.prefix;
    o.forEach((i) => {
      const r = i.icons, l = r.pending.length;
      r.pending = r.pending.filter((u) => {
        if (u.prefix !== n)
          return !0;
        const c = u.name;
        if (e.icons[c])
          r.loaded.push({
            provider: s,
            prefix: n,
            name: c
          });
        else if (e.missing.has(c))
          r.missing.push({
            provider: s,
            prefix: n,
            name: c
          });
        else
          return t = !0, !0;
        return !1;
      }), r.pending.length !== l && (t || Pe([e], i.id), i.callback(
        r.loaded.slice(0),
        r.missing.slice(0),
        r.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let Ft = 0;
function Mt(e, o, t) {
  const s = Ft++, n = Pe.bind(null, t, s);
  if (!o.pending.length)
    return n;
  const i = {
    id: s,
    icons: o,
    callback: e,
    abort: n
  };
  return t.forEach((r) => {
    (r.loaderCallbacks || (r.loaderCallbacks = [])).push(i);
  }), n;
}
function Lt(e, o = !0, t = !1) {
  const s = [];
  return e.forEach((n) => {
    const i = typeof n == "string" ? Q(n, o, t) : n;
    i && s.push(i);
  }), s;
}
var At = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Nt(e, o, t, s) {
  const n = e.resources.length, i = e.random ? Math.floor(Math.random() * n) : e.index;
  let r;
  if (e.random) {
    let h = e.resources.slice(0);
    for (r = []; h.length > 1; ) {
      const x = Math.floor(Math.random() * h.length);
      r.push(h[x]), h = h.slice(0, x).concat(h.slice(x + 1));
    }
    r = r.concat(h);
  } else
    r = e.resources.slice(i).concat(e.resources.slice(0, i));
  const l = Date.now();
  let u = "pending", c = 0, a, d = null, p = [], m = [];
  typeof s == "function" && m.push(s);
  function b() {
    d && (clearTimeout(d), d = null);
  }
  function g() {
    u === "pending" && (u = "aborted"), b(), p.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), p = [];
  }
  function f(h, x) {
    x && (m = []), typeof h == "function" && m.push(h);
  }
  function _() {
    return {
      startTime: l,
      payload: o,
      status: u,
      queriesSent: c,
      queriesPending: p.length,
      subscribe: f,
      abort: g
    };
  }
  function S() {
    u = "failed", m.forEach((h) => {
      h(void 0, a);
    });
  }
  function I() {
    p.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), p = [];
  }
  function v(h, x, j) {
    const A = x !== "success";
    switch (p = p.filter((C) => C !== h), u) {
      case "pending":
        break;
      case "failed":
        if (A || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (x === "abort") {
      a = j, S();
      return;
    }
    if (A) {
      a = j, p.length || (r.length ? q() : S());
      return;
    }
    if (b(), I(), !e.random) {
      const C = e.resources.indexOf(h.resource);
      C !== -1 && C !== e.index && (e.index = C);
    }
    u = "completed", m.forEach((C) => {
      C(j);
    });
  }
  function q() {
    if (u !== "pending")
      return;
    b();
    const h = r.shift();
    if (h === void 0) {
      if (p.length) {
        d = setTimeout(() => {
          b(), u === "pending" && (I(), S());
        }, e.timeout);
        return;
      }
      S();
      return;
    }
    const x = {
      status: "pending",
      resource: h,
      callback: (j, A) => {
        v(x, j, A);
      }
    };
    p.push(x), c++, d = setTimeout(q, e.rotate), t(h, o, x.callback);
  }
  return setTimeout(q), _;
}
function Fe(e) {
  const o = {
    ...At,
    ...e
  };
  let t = [];
  function s() {
    t = t.filter((l) => l().status === "pending");
  }
  function n(l, u, c) {
    const a = Nt(
      o,
      l,
      u,
      (d, p) => {
        s(), c && c(d, p);
      }
    );
    return t.push(a), a;
  }
  function i(l) {
    return t.find((u) => l(u)) || null;
  }
  return {
    query: n,
    find: i,
    setIndex: (l) => {
      o.index = l;
    },
    getIndex: () => o.index,
    cleanup: s
  };
}
function he() {
}
const K = /* @__PURE__ */ Object.create(null);
function Dt(e) {
  if (!K[e]) {
    const o = ne(e);
    if (!o)
      return;
    const t = Fe(o), s = {
      config: o,
      redundancy: t
    };
    K[e] = s;
  }
  return K[e];
}
function Vt(e, o, t) {
  let s, n;
  if (typeof e == "string") {
    const i = Y(e);
    if (!i)
      return t(void 0, 424), he;
    n = i.send;
    const r = Dt(e);
    r && (s = r.redundancy);
  } else {
    const i = ee(e);
    if (i) {
      s = Fe(i);
      const r = e.resources ? e.resources[0] : "", l = Y(r);
      l && (n = l.send);
    }
  }
  return !s || !n ? (t(void 0, 424), he) : s.query(o, n, t)().abort;
}
function me() {
}
function Rt(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Pt(e);
  }));
}
function $t(e) {
  const o = [], t = [];
  return e.forEach((s) => {
    (s.match(ke) ? o : t).push(s);
  }), {
    valid: o,
    invalid: t
  };
}
function P(e, o, t) {
  function s() {
    const n = e.pendingIcons;
    o.forEach((i) => {
      n && n.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (t && typeof t == "object")
    try {
      if (!Ee(e, t).length) {
        s();
        return;
      }
    } catch (n) {
      console.error(n);
    }
  s(), Rt(e);
}
function ge(e, o) {
  e instanceof Promise ? e.then((t) => {
    o(t);
  }).catch(() => {
    o(null);
  }) : o(e);
}
function Ht(e, o) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(o).sort() : e.iconsToLoad = o, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: t, prefix: s } = e, n = e.iconsToLoad;
    if (delete e.iconsToLoad, !n || !n.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (n.length > 1 || !i)) {
      ge(
        e.loadIcons(n, s, t),
        (a) => {
          P(e, n, a);
        }
      );
      return;
    }
    if (i) {
      n.forEach((a) => {
        const d = i(a, s, t);
        ge(d, (p) => {
          const m = p ? {
            prefix: s,
            icons: {
              [a]: p
            }
          } : null;
          P(e, [a], m);
        });
      });
      return;
    }
    const { valid: r, invalid: l } = $t(n);
    if (l.length && P(e, l, null), !r.length)
      return;
    const u = s.match(ke) ? Y(t) : null;
    if (!u) {
      P(e, r, null);
      return;
    }
    u.prepare(t, s, r).forEach((a) => {
      Vt(t, a, (d) => {
        P(e, a.icons, d);
      });
    });
  }));
}
const zt = (e, o) => {
  const t = Lt(e, !0, Te()), s = Ot(t);
  if (!s.pending.length) {
    let u = !0;
    return o && setTimeout(() => {
      u && o(
        s.loaded,
        s.missing,
        s.pending,
        me
      );
    }), () => {
      u = !1;
    };
  }
  const n = /* @__PURE__ */ Object.create(null), i = [];
  let r, l;
  return s.pending.forEach((u) => {
    const { provider: c, prefix: a } = u;
    if (a === l && c === r)
      return;
    r = c, l = a, i.push(T(c, a));
    const d = n[c] || (n[c] = /* @__PURE__ */ Object.create(null));
    d[a] || (d[a] = []);
  }), s.pending.forEach((u) => {
    const { provider: c, prefix: a, name: d } = u, p = T(c, a), m = p.pendingIcons || (p.pendingIcons = /* @__PURE__ */ new Set());
    m.has(d) || (m.add(d), n[c][a].push(d));
  }), i.forEach((u) => {
    const c = n[u.provider][u.prefix];
    c.length && Ht(u, c);
  }), o ? Mt(o, s, i) : me;
};
function Bt(e, o) {
  const t = {
    ...e
  };
  for (const s in o) {
    const n = o[s], i = typeof n;
    s in je ? (n === null || n && (i === "string" || i === "number")) && (t[s] = n) : i === typeof t[s] && (t[s] = s === "rotate" ? n % 4 : n);
  }
  return t;
}
const Qt = /[\s,]+/;
function Ut(e, o) {
  o.split(Qt).forEach((t) => {
    switch (t.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function qt(e, o = 0) {
  const t = e.replace(/^-?[0-9.]*/, "");
  function s(n) {
    for (; n < 0; )
      n += 4;
    return n % 4;
  }
  if (t === "") {
    const n = parseInt(e);
    return isNaN(n) ? 0 : s(n);
  } else if (t !== e) {
    let n = 0;
    switch (t) {
      case "%":
        n = 25;
        break;
      case "deg":
        n = 90;
    }
    if (n) {
      let i = parseFloat(e.slice(0, e.length - t.length));
      return isNaN(i) ? 0 : (i = i / n, i % 1 === 0 ? s(i) : 0);
    }
  }
  return o;
}
function Gt(e, o) {
  let t = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const s in o)
    t += " " + s + '="' + o[s] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + e + "</svg>";
}
function Kt(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Wt(e) {
  return "data:image/svg+xml," + Kt(e);
}
function Jt(e) {
  return 'url("' + Wt(e) + '")';
}
const be = {
  ...Oe,
  inline: !1
}, Xt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Yt = {
  display: "inline-block"
}, Z = {
  backgroundColor: "currentColor"
}, Me = {
  backgroundColor: "transparent"
}, ye = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, ve = {
  webkitMask: Z,
  mask: Z,
  background: Me
};
for (const e in ve) {
  const o = ve[e];
  for (const t in ye)
    o[e + t] = ye[t];
}
const H = {};
["horizontal", "vertical"].forEach((e) => {
  const o = e.slice(0, 1) + "Flip";
  H[e + "-flip"] = o, H[e.slice(0, 1) + "-flip"] = o, H[e + "Flip"] = o;
});
function xe(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Ie = (e, o) => {
  const t = Bt(be, o), s = { ...Xt }, n = o.mode || "svg", i = {}, r = o.style, l = typeof r == "object" && !(r instanceof Array) ? r : {};
  for (let g in o) {
    const f = o[g];
    if (f !== void 0)
      switch (g) {
        // Properties to ignore
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
        case "ssr":
          break;
        // Boolean attributes
        case "inline":
        case "hFlip":
        case "vFlip":
          t[g] = f === !0 || f === "true" || f === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof f == "string" && Ut(t, f);
          break;
        // Color: override style
        case "color":
          i.color = f;
          break;
        // Rotation as string
        case "rotate":
          typeof f == "string" ? t[g] = qt(f) : typeof f == "number" && (t[g] = f);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          f !== !0 && f !== "true" && delete s["aria-hidden"];
          break;
        default: {
          const _ = H[g];
          _ ? (f === !0 || f === "true" || f === 1) && (t[_] = !0) : be[g] === void 0 && (s[g] = f);
        }
      }
  }
  const u = gt(e, t), c = u.attributes;
  if (t.inline && (i.verticalAlign = "-0.125em"), n === "svg") {
    s.style = {
      ...i,
      ...l
    }, Object.assign(s, c);
    let g = 0, f = o.id;
    return typeof f == "string" && (f = f.replace(/-/g, "_")), s.innerHTML = xt(u.body, f ? () => f + "ID" + g++ : "iconifyVue"), se("svg", s);
  }
  const { body: a, width: d, height: p } = e, m = n === "mask" || (n === "bg" ? !1 : a.indexOf("currentColor") !== -1), b = Gt(a, {
    ...c,
    width: d + "",
    height: p + ""
  });
  return s.style = {
    ...i,
    "--svg": Jt(b),
    width: xe(c.width),
    height: xe(c.height),
    ...Yt,
    ...m ? Z : Me,
    ...l
  }, se("span", s);
};
Te(!0);
It("", jt);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const o = e.IconifyPreload, t = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((s) => {
      try {
        // Check if item is an object and not null/array
        (typeof s != "object" || s === null || s instanceof Array || // Check for 'icons' and 'prefix'
        typeof s.icons != "object" || typeof s.prefix != "string" || // Add icon set
        !ut(s)) && console.error(t);
      } catch {
        console.error(t);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const o = e.IconifyProviders;
    if (typeof o == "object" && o !== null)
      for (let t in o) {
        const s = "IconifyProviders[" + t + "] is invalid.";
        try {
          const n = o[t];
          if (typeof n != "object" || !n || n.resources === void 0)
            continue;
          wt(t, n) || console.error(s);
        } catch {
          console.error(s);
        }
      }
  }
}
const Zt = {
  ...U,
  body: ""
}, we = L((e, { emit: o }) => {
  const t = V(null);
  function s() {
    var c, a;
    t.value && ((a = (c = t.value).abort) == null || a.call(c), t.value = null);
  }
  const n = V(!!e.ssr), i = V(""), r = Ne(null);
  function l() {
    const c = e.icon;
    if (typeof c == "object" && c !== null && typeof c.body == "string")
      return i.value = "", {
        data: c
      };
    let a;
    if (typeof c != "string" || (a = Q(c, !1, !0)) === null)
      return null;
    let d = ct(a);
    if (!d) {
      const b = t.value;
      return (!b || b.name !== c) && (d === null ? t.value = {
        name: c
      } : t.value = {
        name: c,
        abort: zt([a], u)
      }), null;
    }
    s(), i.value !== c && (i.value = c, $e(() => {
      o("load", c);
    }));
    const p = e.customise;
    if (p) {
      d = Object.assign({}, d);
      const b = p(d.body, a.name, a.prefix, a.provider);
      typeof b == "string" && (d.body = b);
    }
    const m = ["iconify"];
    return a.prefix !== "" && m.push("iconify--" + a.prefix), a.provider !== "" && m.push("iconify--" + a.provider), { data: d, classes: m };
  }
  function u() {
    var a;
    const c = l();
    c ? c.data !== ((a = r.value) == null ? void 0 : a.data) && (r.value = c) : r.value = null;
  }
  return n.value ? u() : De(() => {
    n.value = !0, u();
  }), Ve(() => e.icon, u), Re(s), () => {
    const c = r.value;
    if (!c)
      return Ie(Zt, e);
    let a = e;
    return c.classes && (a = {
      ...e,
      class: c.classes.join(" ")
    }), Ie({
      ...U,
      ...c.data
    }, a);
  };
}, {
  props: [
    // Icon and render mode
    "icon",
    "mode",
    "ssr",
    // Layout and style
    "width",
    "height",
    "style",
    "color",
    "inline",
    // Transformations
    "rotate",
    "hFlip",
    "horizontalFlip",
    "vFlip",
    "verticalFlip",
    "flip",
    // Misc
    "id",
    "ariaHidden",
    "customise",
    "title"
  ],
  emits: ["load"]
}), en = { class: "side-header-container" }, tn = { class: "logo-wrapper" }, nn = { class: "menu-wrapper" }, on = {
  key: 0,
  class: "bottom-wrapper"
}, sn = /* @__PURE__ */ L({
  __name: "SideHeader",
  props: {
    logoText: {},
    menuItems: {},
    bottomMenuItem: {}
  },
  setup(e) {
    const o = et(), t = V(!1), s = () => {
      t.value = !t.value;
    }, n = () => {
      t.value = !1;
    }, i = () => {
      n();
    };
    return (r, l) => {
      const u = He("router-link");
      return k(), w(ie, null, [
        y("button", {
          class: F(["hamburger-button", { open: t.value }]),
          onClick: s
        }, [...l[0] || (l[0] = [
          y("span", null, null, -1),
          y("span", null, null, -1),
          y("span", null, null, -1)
        ])], 2),
        t.value ? (k(), w("div", {
          key: 0,
          class: "menu-overlay",
          onClick: n
        })) : W("", !0),
        y("div", {
          id: "side-header",
          class: F({ open: t.value })
        }, [
          y("div", en, [
            y("div", tn, [
              y("p", null, E(r.logoText), 1)
            ]),
            y("div", nn, [
              y("ul", null, [
                (k(!0), w(ie, null, ze(r.menuItems, (c) => (k(), w("li", {
                  key: c.path
                }, [
                  N(u, {
                    to: c.path,
                    class: F(["menu-item", { active: D(o).path === c.path }]),
                    onClick: i
                  }, {
                    default: re(() => [
                      N(D(we), {
                        icon: c.icon,
                        class: "menu-item-icon"
                      }, null, 8, ["icon"]),
                      y("p", null, E(c.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "class"])
                ]))), 128))
              ])
            ]),
            r.bottomMenuItem ? (k(), w("div", on, [
              N(u, {
                to: r.bottomMenuItem.path,
                class: F(["menu-item", { active: D(o).path === r.bottomMenuItem.path }]),
                onClick: i
              }, {
                default: re(() => [
                  N(D(we), {
                    icon: r.bottomMenuItem.icon,
                    class: "menu-item-icon"
                  }, null, 8, ["icon"]),
                  y("p", null, E(r.bottomMenuItem.label), 1)
                ]),
                _: 1
              }, 8, ["to", "class"])
            ])) : W("", !0)
          ])
        ], 2)
      ], 64);
    };
  }
}), an = /* @__PURE__ */ B(sn, [["__scopeId", "data-v-56f33e2c"]]);
export {
  ln as InputField,
  cn as MainButton,
  an as SideHeader,
  un as TopHeader
};
