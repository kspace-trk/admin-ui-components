import { defineComponent as A, computed as te, createElementBlock as w, openBlock as k, normalizeClass as M, createCommentVNode as G, createTextVNode as je, toDisplayString as P, createElementVNode as b, ref as N, shallowRef as Ee, onMounted as Me, watch as Oe, onUnmounted as Ae, h as ne, nextTick as Le, Fragment as oe, renderList as Ne, createVNode as ie, unref as se } from "vue";
const De = ["disabled"], Re = {
  key: 0,
  class: "spinner"
}, $e = /* @__PURE__ */ A({
  __name: "MainButton",
  props: {
    type: { default: "submit" },
    text: { default: "" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: o }) {
    const n = o, i = () => {
      !e.disabled && !e.loading && n("click");
    }, t = te(() => e.loading ? "処理中..." : e.text ? e.text : e.type === "submit" ? "送信" : "キャンセル"), s = te(() => {
      const r = "main-button", l = e.type === "submit" ? "main-button--submit" : "main-button--cancel", u = e.disabled || e.loading ? "main-button--disabled" : "";
      return [r, l, u].filter(Boolean).join(" ");
    });
    return (r, l) => (k(), w("button", {
      class: M(s.value),
      disabled: r.disabled || r.loading,
      onClick: i
    }, [
      r.loading ? (k(), w("span", Re)) : G("", !0),
      je(" " + P(t.value), 1)
    ], 10, De));
  }
}), H = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [i, t] of o)
    n[i] = t;
  return n;
}, en = /* @__PURE__ */ H($e, [["__scopeId", "data-v-489ef9cb"]]), Ve = { class: "input-field" }, He = { class: "input-field__label" }, ze = ["value", "placeholder"], Be = /* @__PURE__ */ A({
  __name: "InputField",
  props: {
    label: {},
    placeholder: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = o;
    return (i, t) => (k(), w("div", Ve, [
      b("label", He, P(i.label), 1),
      b("input", {
        value: i.modelValue,
        placeholder: i.placeholder,
        class: "input-field__input",
        onInput: t[0] || (t[0] = (s) => n("update:modelValue", s.target.value))
      }, null, 40, ze)
    ]));
  }
}), tn = /* @__PURE__ */ H(Be, [["__scopeId", "data-v-9da3aab7"]]), Qe = { class: "top-header" }, Ue = { class: "top-header__title" }, qe = /* @__PURE__ */ A({
  __name: "TopHeader",
  props: {
    title: {}
  },
  setup(e) {
    return (o, n) => (k(), w("div", Qe, [
      b("h1", Ue, P(o.title), 1)
    ]));
  }
}), nn = /* @__PURE__ */ H(qe, [["__scopeId", "data-v-87421744"]]), ve = /^[a-z0-9]+(-[a-z0-9]+)*$/, z = (e, o, n, i = "") => {
  const t = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (t.length < 2 || t.length > 3)
      return null;
    i = t.shift().slice(1);
  }
  if (t.length > 3 || !t.length)
    return null;
  if (t.length > 1) {
    const l = t.pop(), u = t.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: t.length > 0 ? t[0] : i,
      prefix: u,
      name: l
    };
    return o && !D(c) ? null : c;
  }
  const s = t[0], r = s.split("-");
  if (r.length > 1) {
    const l = {
      provider: i,
      prefix: r.shift(),
      name: r.join("-")
    };
    return o && !D(l) ? null : l;
  }
  if (n && i === "") {
    const l = {
      provider: i,
      prefix: "",
      name: s
    };
    return o && !D(l, n) ? null : l;
  }
  return null;
}, D = (e, o) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((o && e.prefix === "" || e.prefix) && e.name) : !1, Ie = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), V = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), B = Object.freeze({
  ...Ie,
  ...V
}), K = Object.freeze({
  ...B,
  body: "",
  hidden: !1
});
function Ge(e, o) {
  const n = {};
  !e.hFlip != !o.hFlip && (n.hFlip = !0), !e.vFlip != !o.vFlip && (n.vFlip = !0);
  const i = ((e.rotate || 0) + (o.rotate || 0)) % 4;
  return i && (n.rotate = i), n;
}
function re(e, o) {
  const n = Ge(e, o);
  for (const i in K)
    i in V ? i in e && !(i in n) && (n[i] = V[i]) : i in o ? n[i] = o[i] : i in e && (n[i] = e[i]);
  return n;
}
function Ke(e, o) {
  const n = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  function s(r) {
    if (n[r])
      return t[r] = [];
    if (!(r in t)) {
      t[r] = null;
      const l = i[r] && i[r].parent, u = l && s(l);
      u && (t[r] = [l].concat(u));
    }
    return t[r];
  }
  return Object.keys(n).concat(Object.keys(i)).forEach(s), t;
}
function We(e, o, n) {
  const i = e.icons, t = e.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function r(l) {
    s = re(
      i[l] || t[l],
      s
    );
  }
  return r(o), n.forEach(r), re(e, s);
}
function xe(e, o) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((t) => {
    o(t, null), n.push(t);
  });
  const i = Ke(e);
  for (const t in i) {
    const s = i[t];
    s && (o(t, We(e, t, s)), n.push(t));
  }
  return n;
}
const Je = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Ie
};
function U(e, o) {
  for (const n in o)
    if (n in e && typeof e[n] != typeof o[n])
      return !1;
  return !0;
}
function we(e) {
  if (typeof e != "object" || e === null)
    return null;
  const o = e;
  if (typeof o.prefix != "string" || !e.icons || typeof e.icons != "object" || !U(e, Je))
    return null;
  const n = o.icons;
  for (const t in n) {
    const s = n[t];
    if (
      // Name cannot be empty
      !t || // Must have body
      typeof s.body != "string" || // Check other props
      !U(
        s,
        K
      )
    )
      return null;
  }
  const i = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const t in i) {
    const s = i[t], r = s.parent;
    if (
      // Name cannot be empty
      !t || // Parent must be set and point to existing icon
      typeof r != "string" || !n[r] && !i[r] || // Check other props
      !U(
        s,
        K
      )
    )
      return null;
  }
  return o;
}
const ce = /* @__PURE__ */ Object.create(null);
function Xe(e, o) {
  return {
    provider: e,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function F(e, o) {
  const n = ce[e] || (ce[e] = /* @__PURE__ */ Object.create(null));
  return n[o] || (n[o] = Xe(e, o));
}
function ke(e, o) {
  return we(o) ? xe(o, (n, i) => {
    i ? e.icons[n] = i : e.missing.add(n);
  }) : [];
}
function Ye(e, o, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[o] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let O = !1;
function Ce(e) {
  return typeof e == "boolean" && (O = e), O;
}
function Ze(e) {
  const o = typeof e == "string" ? z(e, !0, O) : e;
  if (o) {
    const n = F(o.provider, o.prefix), i = o.name;
    return n.icons[i] || (n.missing.has(i) ? null : void 0);
  }
}
function et(e, o) {
  const n = z(e, !0, O);
  if (!n)
    return !1;
  const i = F(n.provider, n.prefix);
  return o ? Ye(i, n.name, o) : (i.missing.add(n.name), !0);
}
function tt(e, o) {
  if (typeof e != "object")
    return !1;
  if (typeof o != "string" && (o = e.provider || ""), O && !o && !e.prefix) {
    let t = !1;
    return we(e) && (e.prefix = "", xe(e, (s, r) => {
      et(s, r) && (t = !0);
    })), t;
  }
  const n = e.prefix;
  if (!D({
    prefix: n,
    name: "a"
  }))
    return !1;
  const i = F(o, n);
  return !!ke(i, e);
}
const Se = Object.freeze({
  width: null,
  height: null
}), Te = Object.freeze({
  // Dimensions
  ...Se,
  // Transformations
  ...V
}), nt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, ot = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function le(e, o, n) {
  if (o === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * o * n) / n;
  if (typeof e != "string")
    return e;
  const i = e.split(nt);
  if (i === null || !i.length)
    return e;
  const t = [];
  let s = i.shift(), r = ot.test(s);
  for (; ; ) {
    if (r) {
      const l = parseFloat(s);
      isNaN(l) ? t.push(s) : t.push(Math.ceil(l * o * n) / n);
    } else
      t.push(s);
    if (s = i.shift(), s === void 0)
      return t.join("");
    r = !r;
  }
}
function it(e, o = "defs") {
  let n = "";
  const i = e.indexOf("<" + o);
  for (; i >= 0; ) {
    const t = e.indexOf(">", i), s = e.indexOf("</" + o);
    if (t === -1 || s === -1)
      break;
    const r = e.indexOf(">", s);
    if (r === -1)
      break;
    n += e.slice(t + 1, s).trim(), e = e.slice(0, i).trim() + e.slice(r + 1);
  }
  return {
    defs: n,
    content: e
  };
}
function st(e, o) {
  return e ? "<defs>" + e + "</defs>" + o : o;
}
function rt(e, o, n) {
  const i = it(e);
  return st(i.defs, o + i.content + n);
}
const ct = (e) => e === "unset" || e === "undefined" || e === "none";
function lt(e, o) {
  const n = {
    ...B,
    ...e
  }, i = {
    ...Te,
    ...o
  }, t = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let s = n.body;
  [n, i].forEach((g) => {
    const f = [], T = g.hFlip, C = g.vFlip;
    let x = g.rotate;
    T ? C ? x += 2 : (f.push(
      "translate(" + (t.width + t.left).toString() + " " + (0 - t.top).toString() + ")"
    ), f.push("scale(-1 1)"), t.top = t.left = 0) : C && (f.push(
      "translate(" + (0 - t.left).toString() + " " + (t.height + t.top).toString() + ")"
    ), f.push("scale(1 -1)"), t.top = t.left = 0);
    let v;
    switch (x < 0 && (x -= Math.floor(x / 4) * 4), x = x % 4, x) {
      case 1:
        v = t.height / 2 + t.top, f.unshift(
          "rotate(90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
      case 2:
        f.unshift(
          "rotate(180 " + (t.width / 2 + t.left).toString() + " " + (t.height / 2 + t.top).toString() + ")"
        );
        break;
      case 3:
        v = t.width / 2 + t.left, f.unshift(
          "rotate(-90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
    }
    x % 2 === 1 && (t.left !== t.top && (v = t.left, t.left = t.top, t.top = v), t.width !== t.height && (v = t.width, t.width = t.height, t.height = v)), f.length && (s = rt(
      s,
      '<g transform="' + f.join(" ") + '">',
      "</g>"
    ));
  });
  const r = i.width, l = i.height, u = t.width, c = t.height;
  let a, d;
  r === null ? (d = l === null ? "1em" : l === "auto" ? c : l, a = le(d, u / c)) : (a = r === "auto" ? u : r, d = l === null ? le(a, c / u) : l === "auto" ? c : l);
  const p = {}, m = (g, f) => {
    ct(f) || (p[g] = f.toString());
  };
  m("width", a), m("height", d);
  const y = [t.left, t.top, u, c];
  return p.viewBox = y.join(" "), {
    attributes: p,
    viewBox: y,
    body: s
  };
}
const ut = /\sid="(\S+)"/g, at = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ft = 0;
function dt(e, o = at) {
  const n = [];
  let i;
  for (; i = ut.exec(e); )
    n.push(i[1]);
  if (!n.length)
    return e;
  const t = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((s) => {
    const r = typeof o == "function" ? o(s) : o + (ft++).toString(), l = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"),
      "$1" + r + t + "$3"
    );
  }), e = e.replace(new RegExp(t, "g"), ""), e;
}
const W = /* @__PURE__ */ Object.create(null);
function pt(e, o) {
  W[e] = o;
}
function J(e) {
  return W[e] || W[""];
}
function Y(e) {
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
const Z = /* @__PURE__ */ Object.create(null), j = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], R = [];
for (; j.length > 0; )
  j.length === 1 || Math.random() > 0.5 ? R.push(j.shift()) : R.push(j.pop());
Z[""] = Y({
  resources: ["https://api.iconify.design"].concat(R)
});
function ht(e, o) {
  const n = Y(o);
  return n === null ? !1 : (Z[e] = n, !0);
}
function ee(e) {
  return Z[e];
}
const mt = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let ue = mt();
function gt(e, o) {
  const n = ee(e);
  if (!n)
    return 0;
  let i;
  if (!n.maxURL)
    i = 0;
  else {
    let t = 0;
    n.resources.forEach((r) => {
      t = Math.max(t, r.length);
    });
    const s = o + ".json?icons=";
    i = n.maxURL - t - n.path.length - s.length;
  }
  return i;
}
function bt(e) {
  return e === 404;
}
const yt = (e, o, n) => {
  const i = [], t = gt(e, o), s = "icons";
  let r = {
    type: s,
    provider: e,
    prefix: o,
    icons: []
  }, l = 0;
  return n.forEach((u, c) => {
    l += u.length + 1, l >= t && c > 0 && (i.push(r), r = {
      type: s,
      provider: e,
      prefix: o,
      icons: []
    }, l = u.length), r.icons.push(u);
  }), i.push(r), i;
};
function vt(e) {
  if (typeof e == "string") {
    const o = ee(e);
    if (o)
      return o.path;
  }
  return "/";
}
const It = (e, o, n) => {
  if (!ue) {
    n("abort", 424);
    return;
  }
  let i = vt(o.provider);
  switch (o.type) {
    case "icons": {
      const s = o.prefix, l = o.icons.join(","), u = new URLSearchParams({
        icons: l
      });
      i += s + ".json?" + u.toString();
      break;
    }
    case "custom": {
      const s = o.uri;
      i += s.slice(0, 1) === "/" ? s.slice(1) : s;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let t = 503;
  ue(e + i).then((s) => {
    const r = s.status;
    if (r !== 200) {
      setTimeout(() => {
        n(bt(r) ? "abort" : "next", r);
      });
      return;
    }
    return t = 501, s.json();
  }).then((s) => {
    if (typeof s != "object" || s === null) {
      setTimeout(() => {
        s === 404 ? n("abort", s) : n("next", t);
      });
      return;
    }
    setTimeout(() => {
      n("success", s);
    });
  }).catch(() => {
    n("next", t);
  });
}, xt = {
  prepare: yt,
  send: It
};
function wt(e) {
  const o = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  e.sort((t, s) => t.provider !== s.provider ? t.provider.localeCompare(s.provider) : t.prefix !== s.prefix ? t.prefix.localeCompare(s.prefix) : t.name.localeCompare(s.name));
  let i = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((t) => {
    if (i.name === t.name && i.prefix === t.prefix && i.provider === t.provider)
      return;
    i = t;
    const s = t.provider, r = t.prefix, l = t.name, u = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), c = u[r] || (u[r] = F(s, r));
    let a;
    l in c.icons ? a = o.loaded : r === "" || c.missing.has(l) ? a = o.missing : a = o.pending;
    const d = {
      provider: s,
      prefix: r,
      name: l
    };
    a.push(d);
  }), o;
}
function Pe(e, o) {
  e.forEach((n) => {
    const i = n.loaderCallbacks;
    i && (n.loaderCallbacks = i.filter((t) => t.id !== o));
  });
}
function kt(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const o = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!o.length)
      return;
    let n = !1;
    const i = e.provider, t = e.prefix;
    o.forEach((s) => {
      const r = s.icons, l = r.pending.length;
      r.pending = r.pending.filter((u) => {
        if (u.prefix !== t)
          return !0;
        const c = u.name;
        if (e.icons[c])
          r.loaded.push({
            provider: i,
            prefix: t,
            name: c
          });
        else if (e.missing.has(c))
          r.missing.push({
            provider: i,
            prefix: t,
            name: c
          });
        else
          return n = !0, !0;
        return !1;
      }), r.pending.length !== l && (n || Pe([e], s.id), s.callback(
        r.loaded.slice(0),
        r.missing.slice(0),
        r.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let Ct = 0;
function St(e, o, n) {
  const i = Ct++, t = Pe.bind(null, n, i);
  if (!o.pending.length)
    return t;
  const s = {
    id: i,
    icons: o,
    callback: e,
    abort: t
  };
  return n.forEach((r) => {
    (r.loaderCallbacks || (r.loaderCallbacks = [])).push(s);
  }), t;
}
function Tt(e, o = !0, n = !1) {
  const i = [];
  return e.forEach((t) => {
    const s = typeof t == "string" ? z(t, o, n) : t;
    s && i.push(s);
  }), i;
}
var Pt = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Ft(e, o, n, i) {
  const t = e.resources.length, s = e.random ? Math.floor(Math.random() * t) : e.index;
  let r;
  if (e.random) {
    let h = e.resources.slice(0);
    for (r = []; h.length > 1; ) {
      const I = Math.floor(Math.random() * h.length);
      r.push(h[I]), h = h.slice(0, I).concat(h.slice(I + 1));
    }
    r = r.concat(h);
  } else
    r = e.resources.slice(s).concat(e.resources.slice(0, s));
  const l = Date.now();
  let u = "pending", c = 0, a, d = null, p = [], m = [];
  typeof i == "function" && m.push(i);
  function y() {
    d && (clearTimeout(d), d = null);
  }
  function g() {
    u === "pending" && (u = "aborted"), y(), p.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), p = [];
  }
  function f(h, I) {
    I && (m = []), typeof h == "function" && m.push(h);
  }
  function T() {
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
  function C() {
    u = "failed", m.forEach((h) => {
      h(void 0, a);
    });
  }
  function x() {
    p.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), p = [];
  }
  function v(h, I, _) {
    const L = I !== "success";
    switch (p = p.filter((S) => S !== h), u) {
      case "pending":
        break;
      case "failed":
        if (L || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (I === "abort") {
      a = _, C();
      return;
    }
    if (L) {
      a = _, p.length || (r.length ? Q() : C());
      return;
    }
    if (y(), x(), !e.random) {
      const S = e.resources.indexOf(h.resource);
      S !== -1 && S !== e.index && (e.index = S);
    }
    u = "completed", m.forEach((S) => {
      S(_);
    });
  }
  function Q() {
    if (u !== "pending")
      return;
    y();
    const h = r.shift();
    if (h === void 0) {
      if (p.length) {
        d = setTimeout(() => {
          y(), u === "pending" && (x(), C());
        }, e.timeout);
        return;
      }
      C();
      return;
    }
    const I = {
      status: "pending",
      resource: h,
      callback: (_, L) => {
        v(I, _, L);
      }
    };
    p.push(I), c++, d = setTimeout(Q, e.rotate), n(h, o, I.callback);
  }
  return setTimeout(Q), T;
}
function Fe(e) {
  const o = {
    ...Pt,
    ...e
  };
  let n = [];
  function i() {
    n = n.filter((l) => l().status === "pending");
  }
  function t(l, u, c) {
    const a = Ft(
      o,
      l,
      u,
      (d, p) => {
        i(), c && c(d, p);
      }
    );
    return n.push(a), a;
  }
  function s(l) {
    return n.find((u) => l(u)) || null;
  }
  return {
    query: t,
    find: s,
    setIndex: (l) => {
      o.index = l;
    },
    getIndex: () => o.index,
    cleanup: i
  };
}
function ae() {
}
const q = /* @__PURE__ */ Object.create(null);
function _t(e) {
  if (!q[e]) {
    const o = ee(e);
    if (!o)
      return;
    const n = Fe(o), i = {
      config: o,
      redundancy: n
    };
    q[e] = i;
  }
  return q[e];
}
function jt(e, o, n) {
  let i, t;
  if (typeof e == "string") {
    const s = J(e);
    if (!s)
      return n(void 0, 424), ae;
    t = s.send;
    const r = _t(e);
    r && (i = r.redundancy);
  } else {
    const s = Y(e);
    if (s) {
      i = Fe(s);
      const r = e.resources ? e.resources[0] : "", l = J(r);
      l && (t = l.send);
    }
  }
  return !i || !t ? (n(void 0, 424), ae) : i.query(o, t, n)().abort;
}
function fe() {
}
function Et(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, kt(e);
  }));
}
function Mt(e) {
  const o = [], n = [];
  return e.forEach((i) => {
    (i.match(ve) ? o : n).push(i);
  }), {
    valid: o,
    invalid: n
  };
}
function E(e, o, n) {
  function i() {
    const t = e.pendingIcons;
    o.forEach((s) => {
      t && t.delete(s), e.icons[s] || e.missing.add(s);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!ke(e, n).length) {
        i();
        return;
      }
    } catch (t) {
      console.error(t);
    }
  i(), Et(e);
}
function de(e, o) {
  e instanceof Promise ? e.then((n) => {
    o(n);
  }).catch(() => {
    o(null);
  }) : o(e);
}
function Ot(e, o) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(o).sort() : e.iconsToLoad = o, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: i } = e, t = e.iconsToLoad;
    if (delete e.iconsToLoad, !t || !t.length)
      return;
    const s = e.loadIcon;
    if (e.loadIcons && (t.length > 1 || !s)) {
      de(
        e.loadIcons(t, i, n),
        (a) => {
          E(e, t, a);
        }
      );
      return;
    }
    if (s) {
      t.forEach((a) => {
        const d = s(a, i, n);
        de(d, (p) => {
          const m = p ? {
            prefix: i,
            icons: {
              [a]: p
            }
          } : null;
          E(e, [a], m);
        });
      });
      return;
    }
    const { valid: r, invalid: l } = Mt(t);
    if (l.length && E(e, l, null), !r.length)
      return;
    const u = i.match(ve) ? J(n) : null;
    if (!u) {
      E(e, r, null);
      return;
    }
    u.prepare(n, i, r).forEach((a) => {
      jt(n, a, (d) => {
        E(e, a.icons, d);
      });
    });
  }));
}
const At = (e, o) => {
  const n = Tt(e, !0, Ce()), i = wt(n);
  if (!i.pending.length) {
    let u = !0;
    return o && setTimeout(() => {
      u && o(
        i.loaded,
        i.missing,
        i.pending,
        fe
      );
    }), () => {
      u = !1;
    };
  }
  const t = /* @__PURE__ */ Object.create(null), s = [];
  let r, l;
  return i.pending.forEach((u) => {
    const { provider: c, prefix: a } = u;
    if (a === l && c === r)
      return;
    r = c, l = a, s.push(F(c, a));
    const d = t[c] || (t[c] = /* @__PURE__ */ Object.create(null));
    d[a] || (d[a] = []);
  }), i.pending.forEach((u) => {
    const { provider: c, prefix: a, name: d } = u, p = F(c, a), m = p.pendingIcons || (p.pendingIcons = /* @__PURE__ */ new Set());
    m.has(d) || (m.add(d), t[c][a].push(d));
  }), s.forEach((u) => {
    const c = t[u.provider][u.prefix];
    c.length && Ot(u, c);
  }), o ? St(o, i, s) : fe;
};
function Lt(e, o) {
  const n = {
    ...e
  };
  for (const i in o) {
    const t = o[i], s = typeof t;
    i in Se ? (t === null || t && (s === "string" || s === "number")) && (n[i] = t) : s === typeof n[i] && (n[i] = i === "rotate" ? t % 4 : t);
  }
  return n;
}
const Nt = /[\s,]+/;
function Dt(e, o) {
  o.split(Nt).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Rt(e, o = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function i(t) {
    for (; t < 0; )
      t += 4;
    return t % 4;
  }
  if (n === "") {
    const t = parseInt(e);
    return isNaN(t) ? 0 : i(t);
  } else if (n !== e) {
    let t = 0;
    switch (n) {
      case "%":
        t = 25;
        break;
      case "deg":
        t = 90;
    }
    if (t) {
      let s = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(s) ? 0 : (s = s / t, s % 1 === 0 ? i(s) : 0);
    }
  }
  return o;
}
function $t(e, o) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in o)
    n += " " + i + '="' + o[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Vt(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Ht(e) {
  return "data:image/svg+xml," + Vt(e);
}
function zt(e) {
  return 'url("' + Ht(e) + '")';
}
const pe = {
  ...Te,
  inline: !1
}, Bt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Qt = {
  display: "inline-block"
}, X = {
  backgroundColor: "currentColor"
}, _e = {
  backgroundColor: "transparent"
}, he = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, me = {
  webkitMask: X,
  mask: X,
  background: _e
};
for (const e in me) {
  const o = me[e];
  for (const n in he)
    o[e + n] = he[n];
}
const $ = {};
["horizontal", "vertical"].forEach((e) => {
  const o = e.slice(0, 1) + "Flip";
  $[e + "-flip"] = o, $[e.slice(0, 1) + "-flip"] = o, $[e + "Flip"] = o;
});
function ge(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const be = (e, o) => {
  const n = Lt(pe, o), i = { ...Bt }, t = o.mode || "svg", s = {}, r = o.style, l = typeof r == "object" && !(r instanceof Array) ? r : {};
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
          n[g] = f === !0 || f === "true" || f === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof f == "string" && Dt(n, f);
          break;
        // Color: override style
        case "color":
          s.color = f;
          break;
        // Rotation as string
        case "rotate":
          typeof f == "string" ? n[g] = Rt(f) : typeof f == "number" && (n[g] = f);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          f !== !0 && f !== "true" && delete i["aria-hidden"];
          break;
        default: {
          const T = $[g];
          T ? (f === !0 || f === "true" || f === 1) && (n[T] = !0) : pe[g] === void 0 && (i[g] = f);
        }
      }
  }
  const u = lt(e, n), c = u.attributes;
  if (n.inline && (s.verticalAlign = "-0.125em"), t === "svg") {
    i.style = {
      ...s,
      ...l
    }, Object.assign(i, c);
    let g = 0, f = o.id;
    return typeof f == "string" && (f = f.replace(/-/g, "_")), i.innerHTML = dt(u.body, f ? () => f + "ID" + g++ : "iconifyVue"), ne("svg", i);
  }
  const { body: a, width: d, height: p } = e, m = t === "mask" || (t === "bg" ? !1 : a.indexOf("currentColor") !== -1), y = $t(a, {
    ...c,
    width: d + "",
    height: p + ""
  });
  return i.style = {
    ...s,
    "--svg": zt(y),
    width: ge(c.width),
    height: ge(c.height),
    ...Qt,
    ...m ? X : _e,
    ...l
  }, ne("span", i);
};
Ce(!0);
pt("", xt);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const o = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((i) => {
      try {
        // Check if item is an object and not null/array
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !tt(i)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const o = e.IconifyProviders;
    if (typeof o == "object" && o !== null)
      for (let n in o) {
        const i = "IconifyProviders[" + n + "] is invalid.";
        try {
          const t = o[n];
          if (typeof t != "object" || !t || t.resources === void 0)
            continue;
          ht(n, t) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
const Ut = {
  ...B,
  body: ""
}, ye = A((e, { emit: o }) => {
  const n = N(null);
  function i() {
    var c, a;
    n.value && ((a = (c = n.value).abort) == null || a.call(c), n.value = null);
  }
  const t = N(!!e.ssr), s = N(""), r = Ee(null);
  function l() {
    const c = e.icon;
    if (typeof c == "object" && c !== null && typeof c.body == "string")
      return s.value = "", {
        data: c
      };
    let a;
    if (typeof c != "string" || (a = z(c, !1, !0)) === null)
      return null;
    let d = Ze(a);
    if (!d) {
      const y = n.value;
      return (!y || y.name !== c) && (d === null ? n.value = {
        name: c
      } : n.value = {
        name: c,
        abort: At([a], u)
      }), null;
    }
    i(), s.value !== c && (s.value = c, Le(() => {
      o("load", c);
    }));
    const p = e.customise;
    if (p) {
      d = Object.assign({}, d);
      const y = p(d.body, a.name, a.prefix, a.provider);
      typeof y == "string" && (d.body = y);
    }
    const m = ["iconify"];
    return a.prefix !== "" && m.push("iconify--" + a.prefix), a.provider !== "" && m.push("iconify--" + a.provider), { data: d, classes: m };
  }
  function u() {
    var a;
    const c = l();
    c ? c.data !== ((a = r.value) == null ? void 0 : a.data) && (r.value = c) : r.value = null;
  }
  return t.value ? u() : Me(() => {
    t.value = !0, u();
  }), Oe(() => e.icon, u), Ae(i), () => {
    const c = r.value;
    if (!c)
      return be(Ut, e);
    let a = e;
    return c.classes && (a = {
      ...e,
      class: c.classes.join(" ")
    }), be({
      ...B,
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
}), qt = { class: "side-header-container" }, Gt = { class: "logo-wrapper" }, Kt = { class: "menu-wrapper" }, Wt = ["href", "onClick"], Jt = {
  key: 0,
  class: "bottom-wrapper"
}, Xt = ["href"], Yt = /* @__PURE__ */ A({
  __name: "SideHeader",
  props: {
    logoText: {},
    menuItems: {},
    bottomMenuItem: {},
    currentPath: {}
  },
  emits: ["menuItemClick"],
  setup(e, { emit: o }) {
    const n = e, i = o, t = N(!1), s = () => {
      t.value = !t.value;
    }, r = () => {
      t.value = !1;
    }, l = (u, c) => {
      i("menuItemClick", u, c), r();
    };
    return (u, c) => (k(), w(oe, null, [
      b("button", {
        class: M(["hamburger-button", { open: t.value }]),
        onClick: s
      }, [...c[1] || (c[1] = [
        b("span", null, null, -1),
        b("span", null, null, -1),
        b("span", null, null, -1)
      ])], 2),
      t.value ? (k(), w("div", {
        key: 0,
        class: "menu-overlay",
        onClick: r
      })) : G("", !0),
      b("div", {
        id: "side-header",
        class: M({ open: t.value })
      }, [
        b("div", qt, [
          b("div", Gt, [
            b("p", null, P(u.logoText), 1)
          ]),
          b("div", Kt, [
            b("ul", null, [
              (k(!0), w(oe, null, Ne(u.menuItems, (a) => (k(), w("li", {
                key: a.path
              }, [
                b("a", {
                  href: a.path,
                  class: M(["menu-item", { active: n.currentPath === a.path }]),
                  onClick: (d) => l(a.path, d)
                }, [
                  ie(se(ye), {
                    icon: a.icon,
                    class: "menu-item-icon"
                  }, null, 8, ["icon"]),
                  b("p", null, P(a.label), 1)
                ], 10, Wt)
              ]))), 128))
            ])
          ]),
          u.bottomMenuItem ? (k(), w("div", Jt, [
            b("a", {
              href: u.bottomMenuItem.path,
              class: M(["menu-item", { active: n.currentPath === u.bottomMenuItem.path }]),
              onClick: c[0] || (c[0] = (a) => l(u.bottomMenuItem.path, a))
            }, [
              ie(se(ye), {
                icon: u.bottomMenuItem.icon,
                class: "menu-item-icon"
              }, null, 8, ["icon"]),
              b("p", null, P(u.bottomMenuItem.label), 1)
            ], 10, Xt)
          ])) : G("", !0)
        ])
      ], 2)
    ], 64));
  }
}), on = /* @__PURE__ */ H(Yt, [["__scopeId", "data-v-7f45a441"]]);
export {
  tn as InputField,
  en as MainButton,
  on as SideHeader,
  nn as TopHeader
};
