import { defineComponent as C, computed as se, createElementBlock as v, openBlock as x, normalizeClass as L, createCommentVNode as z, createTextVNode as je, toDisplayString as k, createElementVNode as m, ref as N, shallowRef as Ee, onMounted as Me, watch as Oe, onUnmounted as Le, h as ie, nextTick as Ae, Fragment as re, renderList as $e, createVNode as W, unref as K, normalizeStyle as Ne } from "vue";
const De = ["disabled"], Ve = {
  key: 0,
  class: "spinner"
}, Re = /* @__PURE__ */ C({
  __name: "MainButton",
  props: {
    type: { default: "submit" },
    text: { default: "" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: o }) {
    const n = o, s = () => {
      !e.disabled && !e.loading && n("click");
    }, t = se(() => e.loading ? "処理中..." : e.text ? e.text : e.type === "submit" ? "送信" : "キャンセル"), i = se(() => {
      const r = "main-button", l = e.type === "submit" ? "main-button--submit" : "main-button--cancel", a = e.disabled || e.loading ? "main-button--disabled" : "";
      return [r, l, a].filter(Boolean).join(" ");
    });
    return (r, l) => (x(), v("button", {
      class: L(i.value),
      disabled: r.disabled || r.loading,
      onClick: s
    }, [
      r.loading ? (x(), v("span", Ve)) : z("", !0),
      je(" " + k(t.value), 1)
    ], 10, De));
  }
}), F = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [s, t] of o)
    n[s] = t;
  return n;
}, un = /* @__PURE__ */ F(Re, [["__scopeId", "data-v-489ef9cb"]]), ze = { class: "input-field" }, Be = { class: "input-field__label" }, He = ["value", "placeholder"], Qe = /* @__PURE__ */ C({
  __name: "InputField",
  props: {
    label: {},
    placeholder: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = o;
    return (s, t) => (x(), v("div", ze, [
      m("label", Be, k(s.label), 1),
      m("input", {
        value: s.modelValue,
        placeholder: s.placeholder,
        class: "input-field__input",
        onInput: t[0] || (t[0] = (i) => n("update:modelValue", i.target.value))
      }, null, 40, He)
    ]));
  }
}), fn = /* @__PURE__ */ F(Qe, [["__scopeId", "data-v-9da3aab7"]]), Ue = { class: "textarea-field" }, qe = { class: "textarea-field__label" }, Ge = ["value", "placeholder", "rows"], We = /* @__PURE__ */ C({
  __name: "TextareaField",
  props: {
    label: {},
    placeholder: {},
    modelValue: {},
    rows: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = o;
    return (s, t) => (x(), v("div", Ue, [
      m("label", qe, k(s.label), 1),
      m("textarea", {
        value: s.modelValue,
        placeholder: s.placeholder,
        rows: s.rows || 4,
        class: "textarea-field__input",
        onInput: t[0] || (t[0] = (i) => n("update:modelValue", i.target.value))
      }, null, 40, Ge)
    ]));
  }
}), dn = /* @__PURE__ */ F(We, [["__scopeId", "data-v-db6e4b41"]]), Ke = { class: "top-header" }, Je = { class: "top-header__title" }, Xe = /* @__PURE__ */ C({
  __name: "TopHeader",
  props: {
    title: {}
  },
  setup(e) {
    return (o, n) => (x(), v("div", Ke, [
      m("h1", Je, k(o.title), 1)
    ]));
  }
}), pn = /* @__PURE__ */ F(Xe, [["__scopeId", "data-v-87421744"]]), ve = /^[a-z0-9]+(-[a-z0-9]+)*$/, H = (e, o, n, s = "") => {
  const t = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (t.length < 2 || t.length > 3)
      return null;
    s = t.shift().slice(1);
  }
  if (t.length > 3 || !t.length)
    return null;
  if (t.length > 1) {
    const l = t.pop(), a = t.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: t.length > 0 ? t[0] : s,
      prefix: a,
      name: l
    };
    return o && !D(c) ? null : c;
  }
  const i = t[0], r = i.split("-");
  if (r.length > 1) {
    const l = {
      provider: s,
      prefix: r.shift(),
      name: r.join("-")
    };
    return o && !D(l) ? null : l;
  }
  if (n && s === "") {
    const l = {
      provider: s,
      prefix: "",
      name: i
    };
    return o && !D(l, n) ? null : l;
  }
  return null;
}, D = (e, o) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((o && e.prefix === "" || e.prefix) && e.name) : !1, xe = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), B = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Q = Object.freeze({
  ...xe,
  ...B
}), J = Object.freeze({
  ...Q,
  body: "",
  hidden: !1
});
function Ye(e, o) {
  const n = {};
  !e.hFlip != !o.hFlip && (n.hFlip = !0), !e.vFlip != !o.vFlip && (n.vFlip = !0);
  const s = ((e.rotate || 0) + (o.rotate || 0)) % 4;
  return s && (n.rotate = s), n;
}
function ce(e, o) {
  const n = Ye(e, o);
  for (const s in J)
    s in B ? s in e && !(s in n) && (n[s] = B[s]) : s in o ? n[s] = o[s] : s in e && (n[s] = e[s]);
  return n;
}
function Ze(e, o) {
  const n = e.icons, s = e.aliases || /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  function i(r) {
    if (n[r])
      return t[r] = [];
    if (!(r in t)) {
      t[r] = null;
      const l = s[r] && s[r].parent, a = l && i(l);
      a && (t[r] = [l].concat(a));
    }
    return t[r];
  }
  return Object.keys(n).concat(Object.keys(s)).forEach(i), t;
}
function et(e, o, n) {
  const s = e.icons, t = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function r(l) {
    i = ce(
      s[l] || t[l],
      i
    );
  }
  return r(o), n.forEach(r), ce(e, i);
}
function Ie(e, o) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((t) => {
    o(t, null), n.push(t);
  });
  const s = Ze(e);
  for (const t in s) {
    const i = s[t];
    i && (o(t, et(e, t, i)), n.push(t));
  }
  return n;
}
const tt = {
  provider: "",
  aliases: {},
  not_found: {},
  ...xe
};
function q(e, o) {
  for (const n in o)
    if (n in e && typeof e[n] != typeof o[n])
      return !1;
  return !0;
}
function we(e) {
  if (typeof e != "object" || e === null)
    return null;
  const o = e;
  if (typeof o.prefix != "string" || !e.icons || typeof e.icons != "object" || !q(e, tt))
    return null;
  const n = o.icons;
  for (const t in n) {
    const i = n[t];
    if (
      // Name cannot be empty
      !t || // Must have body
      typeof i.body != "string" || // Check other props
      !q(
        i,
        J
      )
    )
      return null;
  }
  const s = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const t in s) {
    const i = s[t], r = i.parent;
    if (
      // Name cannot be empty
      !t || // Parent must be set and point to existing icon
      typeof r != "string" || !n[r] && !s[r] || // Check other props
      !q(
        i,
        J
      )
    )
      return null;
  }
  return o;
}
const le = /* @__PURE__ */ Object.create(null);
function nt(e, o) {
  return {
    provider: e,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function j(e, o) {
  const n = le[e] || (le[e] = /* @__PURE__ */ Object.create(null));
  return n[o] || (n[o] = nt(e, o));
}
function _e(e, o) {
  return we(o) ? Ie(o, (n, s) => {
    s ? e.icons[n] = s : e.missing.add(n);
  }) : [];
}
function ot(e, o, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[o] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let A = !1;
function ke(e) {
  return typeof e == "boolean" && (A = e), A;
}
function st(e) {
  const o = typeof e == "string" ? H(e, !0, A) : e;
  if (o) {
    const n = j(o.provider, o.prefix), s = o.name;
    return n.icons[s] || (n.missing.has(s) ? null : void 0);
  }
}
function it(e, o) {
  const n = H(e, !0, A);
  if (!n)
    return !1;
  const s = j(n.provider, n.prefix);
  return o ? ot(s, n.name, o) : (s.missing.add(n.name), !0);
}
function rt(e, o) {
  if (typeof e != "object")
    return !1;
  if (typeof o != "string" && (o = e.provider || ""), A && !o && !e.prefix) {
    let t = !1;
    return we(e) && (e.prefix = "", Ie(e, (i, r) => {
      it(i, r) && (t = !0);
    })), t;
  }
  const n = e.prefix;
  if (!D({
    prefix: n,
    name: "a"
  }))
    return !1;
  const s = j(o, n);
  return !!_e(s, e);
}
const Ce = Object.freeze({
  width: null,
  height: null
}), Se = Object.freeze({
  // Dimensions
  ...Ce,
  // Transformations
  ...B
}), ct = /(-?[0-9.]*[0-9]+[0-9.]*)/g, lt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ae(e, o, n) {
  if (o === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * o * n) / n;
  if (typeof e != "string")
    return e;
  const s = e.split(ct);
  if (s === null || !s.length)
    return e;
  const t = [];
  let i = s.shift(), r = lt.test(i);
  for (; ; ) {
    if (r) {
      const l = parseFloat(i);
      isNaN(l) ? t.push(i) : t.push(Math.ceil(l * o * n) / n);
    } else
      t.push(i);
    if (i = s.shift(), i === void 0)
      return t.join("");
    r = !r;
  }
}
function at(e, o = "defs") {
  let n = "";
  const s = e.indexOf("<" + o);
  for (; s >= 0; ) {
    const t = e.indexOf(">", s), i = e.indexOf("</" + o);
    if (t === -1 || i === -1)
      break;
    const r = e.indexOf(">", i);
    if (r === -1)
      break;
    n += e.slice(t + 1, i).trim(), e = e.slice(0, s).trim() + e.slice(r + 1);
  }
  return {
    defs: n,
    content: e
  };
}
function ut(e, o) {
  return e ? "<defs>" + e + "</defs>" + o : o;
}
function ft(e, o, n) {
  const s = at(e);
  return ut(s.defs, o + s.content + n);
}
const dt = (e) => e === "unset" || e === "undefined" || e === "none";
function pt(e, o) {
  const n = {
    ...Q,
    ...e
  }, s = {
    ...Se,
    ...o
  }, t = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, s].forEach((b) => {
    const f = [], P = b.hFlip, S = b.vFlip;
    let _ = b.rotate;
    P ? S ? _ += 2 : (f.push(
      "translate(" + (t.width + t.left).toString() + " " + (0 - t.top).toString() + ")"
    ), f.push("scale(-1 1)"), t.top = t.left = 0) : S && (f.push(
      "translate(" + (0 - t.left).toString() + " " + (t.height + t.top).toString() + ")"
    ), f.push("scale(1 -1)"), t.top = t.left = 0);
    let I;
    switch (_ < 0 && (_ -= Math.floor(_ / 4) * 4), _ = _ % 4, _) {
      case 1:
        I = t.height / 2 + t.top, f.unshift(
          "rotate(90 " + I.toString() + " " + I.toString() + ")"
        );
        break;
      case 2:
        f.unshift(
          "rotate(180 " + (t.width / 2 + t.left).toString() + " " + (t.height / 2 + t.top).toString() + ")"
        );
        break;
      case 3:
        I = t.width / 2 + t.left, f.unshift(
          "rotate(-90 " + I.toString() + " " + I.toString() + ")"
        );
        break;
    }
    _ % 2 === 1 && (t.left !== t.top && (I = t.left, t.left = t.top, t.top = I), t.width !== t.height && (I = t.width, t.width = t.height, t.height = I)), f.length && (i = ft(
      i,
      '<g transform="' + f.join(" ") + '">',
      "</g>"
    ));
  });
  const r = s.width, l = s.height, a = t.width, c = t.height;
  let u, d;
  r === null ? (d = l === null ? "1em" : l === "auto" ? c : l, u = ae(d, a / c)) : (u = r === "auto" ? a : r, d = l === null ? ae(u, c / a) : l === "auto" ? c : l);
  const p = {}, g = (b, f) => {
    dt(f) || (p[b] = f.toString());
  };
  g("width", u), g("height", d);
  const y = [t.left, t.top, a, c];
  return p.viewBox = y.join(" "), {
    attributes: p,
    viewBox: y,
    body: i
  };
}
const ht = /\sid="(\S+)"/g, mt = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let gt = 0;
function bt(e, o = mt) {
  const n = [];
  let s;
  for (; s = ht.exec(e); )
    n.push(s[1]);
  if (!n.length)
    return e;
  const t = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const r = typeof o == "function" ? o(i) : o + (gt++).toString(), l = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"),
      "$1" + r + t + "$3"
    );
  }), e = e.replace(new RegExp(t, "g"), ""), e;
}
const X = /* @__PURE__ */ Object.create(null);
function yt(e, o) {
  X[e] = o;
}
function Y(e) {
  return X[e] || X[""];
}
function te(e) {
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
const ne = /* @__PURE__ */ Object.create(null), M = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], V = [];
for (; M.length > 0; )
  M.length === 1 || Math.random() > 0.5 ? V.push(M.shift()) : V.push(M.pop());
ne[""] = te({
  resources: ["https://api.iconify.design"].concat(V)
});
function vt(e, o) {
  const n = te(o);
  return n === null ? !1 : (ne[e] = n, !0);
}
function oe(e) {
  return ne[e];
}
const xt = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let ue = xt();
function It(e, o) {
  const n = oe(e);
  if (!n)
    return 0;
  let s;
  if (!n.maxURL)
    s = 0;
  else {
    let t = 0;
    n.resources.forEach((r) => {
      t = Math.max(t, r.length);
    });
    const i = o + ".json?icons=";
    s = n.maxURL - t - n.path.length - i.length;
  }
  return s;
}
function wt(e) {
  return e === 404;
}
const _t = (e, o, n) => {
  const s = [], t = It(e, o), i = "icons";
  let r = {
    type: i,
    provider: e,
    prefix: o,
    icons: []
  }, l = 0;
  return n.forEach((a, c) => {
    l += a.length + 1, l >= t && c > 0 && (s.push(r), r = {
      type: i,
      provider: e,
      prefix: o,
      icons: []
    }, l = a.length), r.icons.push(a);
  }), s.push(r), s;
};
function kt(e) {
  if (typeof e == "string") {
    const o = oe(e);
    if (o)
      return o.path;
  }
  return "/";
}
const Ct = (e, o, n) => {
  if (!ue) {
    n("abort", 424);
    return;
  }
  let s = kt(o.provider);
  switch (o.type) {
    case "icons": {
      const i = o.prefix, l = o.icons.join(","), a = new URLSearchParams({
        icons: l
      });
      s += i + ".json?" + a.toString();
      break;
    }
    case "custom": {
      const i = o.uri;
      s += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let t = 503;
  ue(e + s).then((i) => {
    const r = i.status;
    if (r !== 200) {
      setTimeout(() => {
        n(wt(r) ? "abort" : "next", r);
      });
      return;
    }
    return t = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        i === 404 ? n("abort", i) : n("next", t);
      });
      return;
    }
    setTimeout(() => {
      n("success", i);
    });
  }).catch(() => {
    n("next", t);
  });
}, St = {
  prepare: _t,
  send: Ct
};
function Tt(e) {
  const o = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  e.sort((t, i) => t.provider !== i.provider ? t.provider.localeCompare(i.provider) : t.prefix !== i.prefix ? t.prefix.localeCompare(i.prefix) : t.name.localeCompare(i.name));
  let s = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((t) => {
    if (s.name === t.name && s.prefix === t.prefix && s.provider === t.provider)
      return;
    s = t;
    const i = t.provider, r = t.prefix, l = t.name, a = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), c = a[r] || (a[r] = j(i, r));
    let u;
    l in c.icons ? u = o.loaded : r === "" || c.missing.has(l) ? u = o.missing : u = o.pending;
    const d = {
      provider: i,
      prefix: r,
      name: l
    };
    u.push(d);
  }), o;
}
function Te(e, o) {
  e.forEach((n) => {
    const s = n.loaderCallbacks;
    s && (n.loaderCallbacks = s.filter((t) => t.id !== o));
  });
}
function Ft(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const o = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!o.length)
      return;
    let n = !1;
    const s = e.provider, t = e.prefix;
    o.forEach((i) => {
      const r = i.icons, l = r.pending.length;
      r.pending = r.pending.filter((a) => {
        if (a.prefix !== t)
          return !0;
        const c = a.name;
        if (e.icons[c])
          r.loaded.push({
            provider: s,
            prefix: t,
            name: c
          });
        else if (e.missing.has(c))
          r.missing.push({
            provider: s,
            prefix: t,
            name: c
          });
        else
          return n = !0, !0;
        return !1;
      }), r.pending.length !== l && (n || Te([e], i.id), i.callback(
        r.loaded.slice(0),
        r.missing.slice(0),
        r.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let Pt = 0;
function jt(e, o, n) {
  const s = Pt++, t = Te.bind(null, n, s);
  if (!o.pending.length)
    return t;
  const i = {
    id: s,
    icons: o,
    callback: e,
    abort: t
  };
  return n.forEach((r) => {
    (r.loaderCallbacks || (r.loaderCallbacks = [])).push(i);
  }), t;
}
function Et(e, o = !0, n = !1) {
  const s = [];
  return e.forEach((t) => {
    const i = typeof t == "string" ? H(t, o, n) : t;
    i && s.push(i);
  }), s;
}
var Mt = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Ot(e, o, n, s) {
  const t = e.resources.length, i = e.random ? Math.floor(Math.random() * t) : e.index;
  let r;
  if (e.random) {
    let h = e.resources.slice(0);
    for (r = []; h.length > 1; ) {
      const w = Math.floor(Math.random() * h.length);
      r.push(h[w]), h = h.slice(0, w).concat(h.slice(w + 1));
    }
    r = r.concat(h);
  } else
    r = e.resources.slice(i).concat(e.resources.slice(0, i));
  const l = Date.now();
  let a = "pending", c = 0, u, d = null, p = [], g = [];
  typeof s == "function" && g.push(s);
  function y() {
    d && (clearTimeout(d), d = null);
  }
  function b() {
    a === "pending" && (a = "aborted"), y(), p.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), p = [];
  }
  function f(h, w) {
    w && (g = []), typeof h == "function" && g.push(h);
  }
  function P() {
    return {
      startTime: l,
      payload: o,
      status: a,
      queriesSent: c,
      queriesPending: p.length,
      subscribe: f,
      abort: b
    };
  }
  function S() {
    a = "failed", g.forEach((h) => {
      h(void 0, u);
    });
  }
  function _() {
    p.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), p = [];
  }
  function I(h, w, E) {
    const $ = w !== "success";
    switch (p = p.filter((T) => T !== h), a) {
      case "pending":
        break;
      case "failed":
        if ($ || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (w === "abort") {
      u = E, S();
      return;
    }
    if ($) {
      u = E, p.length || (r.length ? U() : S());
      return;
    }
    if (y(), _(), !e.random) {
      const T = e.resources.indexOf(h.resource);
      T !== -1 && T !== e.index && (e.index = T);
    }
    a = "completed", g.forEach((T) => {
      T(E);
    });
  }
  function U() {
    if (a !== "pending")
      return;
    y();
    const h = r.shift();
    if (h === void 0) {
      if (p.length) {
        d = setTimeout(() => {
          y(), a === "pending" && (_(), S());
        }, e.timeout);
        return;
      }
      S();
      return;
    }
    const w = {
      status: "pending",
      resource: h,
      callback: (E, $) => {
        I(w, E, $);
      }
    };
    p.push(w), c++, d = setTimeout(U, e.rotate), n(h, o, w.callback);
  }
  return setTimeout(U), P;
}
function Fe(e) {
  const o = {
    ...Mt,
    ...e
  };
  let n = [];
  function s() {
    n = n.filter((l) => l().status === "pending");
  }
  function t(l, a, c) {
    const u = Ot(
      o,
      l,
      a,
      (d, p) => {
        s(), c && c(d, p);
      }
    );
    return n.push(u), u;
  }
  function i(l) {
    return n.find((a) => l(a)) || null;
  }
  return {
    query: t,
    find: i,
    setIndex: (l) => {
      o.index = l;
    },
    getIndex: () => o.index,
    cleanup: s
  };
}
function fe() {
}
const G = /* @__PURE__ */ Object.create(null);
function Lt(e) {
  if (!G[e]) {
    const o = oe(e);
    if (!o)
      return;
    const n = Fe(o), s = {
      config: o,
      redundancy: n
    };
    G[e] = s;
  }
  return G[e];
}
function At(e, o, n) {
  let s, t;
  if (typeof e == "string") {
    const i = Y(e);
    if (!i)
      return n(void 0, 424), fe;
    t = i.send;
    const r = Lt(e);
    r && (s = r.redundancy);
  } else {
    const i = te(e);
    if (i) {
      s = Fe(i);
      const r = e.resources ? e.resources[0] : "", l = Y(r);
      l && (t = l.send);
    }
  }
  return !s || !t ? (n(void 0, 424), fe) : s.query(o, t, n)().abort;
}
function de() {
}
function $t(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Ft(e);
  }));
}
function Nt(e) {
  const o = [], n = [];
  return e.forEach((s) => {
    (s.match(ve) ? o : n).push(s);
  }), {
    valid: o,
    invalid: n
  };
}
function O(e, o, n) {
  function s() {
    const t = e.pendingIcons;
    o.forEach((i) => {
      t && t.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!_e(e, n).length) {
        s();
        return;
      }
    } catch (t) {
      console.error(t);
    }
  s(), $t(e);
}
function pe(e, o) {
  e instanceof Promise ? e.then((n) => {
    o(n);
  }).catch(() => {
    o(null);
  }) : o(e);
}
function Dt(e, o) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(o).sort() : e.iconsToLoad = o, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: s } = e, t = e.iconsToLoad;
    if (delete e.iconsToLoad, !t || !t.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (t.length > 1 || !i)) {
      pe(
        e.loadIcons(t, s, n),
        (u) => {
          O(e, t, u);
        }
      );
      return;
    }
    if (i) {
      t.forEach((u) => {
        const d = i(u, s, n);
        pe(d, (p) => {
          const g = p ? {
            prefix: s,
            icons: {
              [u]: p
            }
          } : null;
          O(e, [u], g);
        });
      });
      return;
    }
    const { valid: r, invalid: l } = Nt(t);
    if (l.length && O(e, l, null), !r.length)
      return;
    const a = s.match(ve) ? Y(n) : null;
    if (!a) {
      O(e, r, null);
      return;
    }
    a.prepare(n, s, r).forEach((u) => {
      At(n, u, (d) => {
        O(e, u.icons, d);
      });
    });
  }));
}
const Vt = (e, o) => {
  const n = Et(e, !0, ke()), s = Tt(n);
  if (!s.pending.length) {
    let a = !0;
    return o && setTimeout(() => {
      a && o(
        s.loaded,
        s.missing,
        s.pending,
        de
      );
    }), () => {
      a = !1;
    };
  }
  const t = /* @__PURE__ */ Object.create(null), i = [];
  let r, l;
  return s.pending.forEach((a) => {
    const { provider: c, prefix: u } = a;
    if (u === l && c === r)
      return;
    r = c, l = u, i.push(j(c, u));
    const d = t[c] || (t[c] = /* @__PURE__ */ Object.create(null));
    d[u] || (d[u] = []);
  }), s.pending.forEach((a) => {
    const { provider: c, prefix: u, name: d } = a, p = j(c, u), g = p.pendingIcons || (p.pendingIcons = /* @__PURE__ */ new Set());
    g.has(d) || (g.add(d), t[c][u].push(d));
  }), i.forEach((a) => {
    const c = t[a.provider][a.prefix];
    c.length && Dt(a, c);
  }), o ? jt(o, s, i) : de;
};
function Rt(e, o) {
  const n = {
    ...e
  };
  for (const s in o) {
    const t = o[s], i = typeof t;
    s in Ce ? (t === null || t && (i === "string" || i === "number")) && (n[s] = t) : i === typeof n[s] && (n[s] = s === "rotate" ? t % 4 : t);
  }
  return n;
}
const zt = /[\s,]+/;
function Bt(e, o) {
  o.split(zt).forEach((n) => {
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
function Ht(e, o = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function s(t) {
    for (; t < 0; )
      t += 4;
    return t % 4;
  }
  if (n === "") {
    const t = parseInt(e);
    return isNaN(t) ? 0 : s(t);
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
      let i = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(i) ? 0 : (i = i / t, i % 1 === 0 ? s(i) : 0);
    }
  }
  return o;
}
function Qt(e, o) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const s in o)
    n += " " + s + '="' + o[s] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Ut(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function qt(e) {
  return "data:image/svg+xml," + Ut(e);
}
function Gt(e) {
  return 'url("' + qt(e) + '")';
}
const he = {
  ...Se,
  inline: !1
}, Wt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Kt = {
  display: "inline-block"
}, Z = {
  backgroundColor: "currentColor"
}, Pe = {
  backgroundColor: "transparent"
}, me = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, ge = {
  webkitMask: Z,
  mask: Z,
  background: Pe
};
for (const e in ge) {
  const o = ge[e];
  for (const n in me)
    o[e + n] = me[n];
}
const R = {};
["horizontal", "vertical"].forEach((e) => {
  const o = e.slice(0, 1) + "Flip";
  R[e + "-flip"] = o, R[e.slice(0, 1) + "-flip"] = o, R[e + "Flip"] = o;
});
function be(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const ye = (e, o) => {
  const n = Rt(he, o), s = { ...Wt }, t = o.mode || "svg", i = {}, r = o.style, l = typeof r == "object" && !(r instanceof Array) ? r : {};
  for (let b in o) {
    const f = o[b];
    if (f !== void 0)
      switch (b) {
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
          n[b] = f === !0 || f === "true" || f === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof f == "string" && Bt(n, f);
          break;
        // Color: override style
        case "color":
          i.color = f;
          break;
        // Rotation as string
        case "rotate":
          typeof f == "string" ? n[b] = Ht(f) : typeof f == "number" && (n[b] = f);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          f !== !0 && f !== "true" && delete s["aria-hidden"];
          break;
        default: {
          const P = R[b];
          P ? (f === !0 || f === "true" || f === 1) && (n[P] = !0) : he[b] === void 0 && (s[b] = f);
        }
      }
  }
  const a = pt(e, n), c = a.attributes;
  if (n.inline && (i.verticalAlign = "-0.125em"), t === "svg") {
    s.style = {
      ...i,
      ...l
    }, Object.assign(s, c);
    let b = 0, f = o.id;
    return typeof f == "string" && (f = f.replace(/-/g, "_")), s.innerHTML = bt(a.body, f ? () => f + "ID" + b++ : "iconifyVue"), ie("svg", s);
  }
  const { body: u, width: d, height: p } = e, g = t === "mask" || (t === "bg" ? !1 : u.indexOf("currentColor") !== -1), y = Qt(u, {
    ...c,
    width: d + "",
    height: p + ""
  });
  return s.style = {
    ...i,
    "--svg": Gt(y),
    width: be(c.width),
    height: be(c.height),
    ...Kt,
    ...g ? Z : Pe,
    ...l
  }, ie("span", s);
};
ke(!0);
yt("", St);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const o = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((s) => {
      try {
        // Check if item is an object and not null/array
        (typeof s != "object" || s === null || s instanceof Array || // Check for 'icons' and 'prefix'
        typeof s.icons != "object" || typeof s.prefix != "string" || // Add icon set
        !rt(s)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const o = e.IconifyProviders;
    if (typeof o == "object" && o !== null)
      for (let n in o) {
        const s = "IconifyProviders[" + n + "] is invalid.";
        try {
          const t = o[n];
          if (typeof t != "object" || !t || t.resources === void 0)
            continue;
          vt(n, t) || console.error(s);
        } catch {
          console.error(s);
        }
      }
  }
}
const Jt = {
  ...Q,
  body: ""
}, ee = C((e, { emit: o }) => {
  const n = N(null);
  function s() {
    var c, u;
    n.value && ((u = (c = n.value).abort) == null || u.call(c), n.value = null);
  }
  const t = N(!!e.ssr), i = N(""), r = Ee(null);
  function l() {
    const c = e.icon;
    if (typeof c == "object" && c !== null && typeof c.body == "string")
      return i.value = "", {
        data: c
      };
    let u;
    if (typeof c != "string" || (u = H(c, !1, !0)) === null)
      return null;
    let d = st(u);
    if (!d) {
      const y = n.value;
      return (!y || y.name !== c) && (d === null ? n.value = {
        name: c
      } : n.value = {
        name: c,
        abort: Vt([u], a)
      }), null;
    }
    s(), i.value !== c && (i.value = c, Ae(() => {
      o("load", c);
    }));
    const p = e.customise;
    if (p) {
      d = Object.assign({}, d);
      const y = p(d.body, u.name, u.prefix, u.provider);
      typeof y == "string" && (d.body = y);
    }
    const g = ["iconify"];
    return u.prefix !== "" && g.push("iconify--" + u.prefix), u.provider !== "" && g.push("iconify--" + u.provider), { data: d, classes: g };
  }
  function a() {
    var u;
    const c = l();
    c ? c.data !== ((u = r.value) == null ? void 0 : u.data) && (r.value = c) : r.value = null;
  }
  return t.value ? a() : Me(() => {
    t.value = !0, a();
  }), Oe(() => e.icon, a), Le(s), () => {
    const c = r.value;
    if (!c)
      return ye(Jt, e);
    let u = e;
    return c.classes && (u = {
      ...e,
      class: c.classes.join(" ")
    }), ye({
      ...Q,
      ...c.data
    }, u);
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
}), Xt = { class: "side-header-container" }, Yt = { class: "logo-wrapper" }, Zt = { class: "menu-wrapper" }, en = ["href", "onClick"], tn = {
  key: 0,
  class: "bottom-wrapper"
}, nn = ["href"], on = /* @__PURE__ */ C({
  __name: "SideHeader",
  props: {
    logoText: {},
    menuItems: {},
    bottomMenuItem: {},
    currentPath: {}
  },
  emits: ["menuItemClick"],
  setup(e, { emit: o }) {
    const n = e, s = o, t = N(!1), i = () => {
      t.value = !t.value;
    }, r = () => {
      t.value = !1;
    }, l = (a, c) => {
      s("menuItemClick", a, c), r();
    };
    return (a, c) => (x(), v(re, null, [
      m("button", {
        class: L(["hamburger-button", { open: t.value }]),
        onClick: i
      }, [...c[1] || (c[1] = [
        m("span", null, null, -1),
        m("span", null, null, -1),
        m("span", null, null, -1)
      ])], 2),
      t.value ? (x(), v("div", {
        key: 0,
        class: "menu-overlay",
        onClick: r
      })) : z("", !0),
      m("div", {
        id: "side-header",
        class: L({ open: t.value })
      }, [
        m("div", Xt, [
          m("div", Yt, [
            m("p", null, k(a.logoText), 1)
          ]),
          m("div", Zt, [
            m("ul", null, [
              (x(!0), v(re, null, $e(a.menuItems, (u) => (x(), v("li", {
                key: u.path
              }, [
                m("a", {
                  href: u.path,
                  class: L(["menu-item", { active: n.currentPath === u.path }]),
                  onClick: (d) => l(u.path, d)
                }, [
                  W(K(ee), {
                    icon: u.icon,
                    class: "menu-item-icon"
                  }, null, 8, ["icon"]),
                  m("p", null, k(u.label), 1)
                ], 10, en)
              ]))), 128))
            ])
          ]),
          a.bottomMenuItem ? (x(), v("div", tn, [
            m("a", {
              href: a.bottomMenuItem.path,
              class: L(["menu-item", { active: n.currentPath === a.bottomMenuItem.path }]),
              onClick: c[0] || (c[0] = (u) => l(a.bottomMenuItem.path, u))
            }, [
              W(K(ee), {
                icon: a.bottomMenuItem.icon,
                class: "menu-item-icon"
              }, null, 8, ["icon"]),
              m("p", null, k(a.bottomMenuItem.label), 1)
            ], 10, nn)
          ])) : z("", !0)
        ])
      ], 2)
    ], 64));
  }
}), hn = /* @__PURE__ */ F(on, [["__scopeId", "data-v-8e7379a4"]]), sn = { class: "text-item" }, rn = /* @__PURE__ */ C({
  __name: "TextItem",
  props: {
    text: {},
    showCloseIcon: { type: Boolean },
    maxLines: {}
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const n = e, s = o, t = () => {
      s("close");
    };
    return (i, r) => (x(), v("div", sn, [
      m("p", {
        class: "text-item__text",
        style: Ne({ "--max-lines": n.maxLines || 1 })
      }, k(i.text), 5),
      i.showCloseIcon ? (x(), v("div", {
        key: 0,
        class: "text-item__close",
        onClick: t
      }, [
        W(K(ee), {
          icon: "mingcute:close-fill",
          size: "14"
        })
      ])) : z("", !0)
    ]));
  }
}), mn = /* @__PURE__ */ F(rn, [["__scopeId", "data-v-2503d3f3"]]), cn = { class: "section-text-with-line" }, ln = /* @__PURE__ */ C({
  __name: "SectionTextWithLine",
  props: {
    text: {}
  },
  setup(e) {
    return (o, n) => (x(), v("div", cn, [
      n[0] || (n[0] = m("span", { class: "line-left" }, null, -1)),
      m("p", null, k(o.text), 1)
    ]));
  }
}), gn = /* @__PURE__ */ F(ln, [["__scopeId", "data-v-c93d78ce"]]);
export {
  fn as InputField,
  un as MainButton,
  gn as SectionTextWithLine,
  hn as SideHeader,
  mn as TextItem,
  dn as TextareaField,
  pn as TopHeader
};
