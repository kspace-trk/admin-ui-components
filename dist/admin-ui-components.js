import { defineComponent as P, computed as te, createElementBlock as w, openBlock as k, normalizeClass as O, createCommentVNode as G, createTextVNode as je, toDisplayString as S, createElementVNode as g, ref as $, shallowRef as Ee, onMounted as Me, watch as Oe, onUnmounted as Ae, h as ne, nextTick as Le, Fragment as oe, renderList as Ne, createVNode as se, unref as ie } from "vue";
const $e = ["disabled"], De = {
  key: 0,
  class: "spinner"
}, Ve = /* @__PURE__ */ P({
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
    }, t = te(() => e.loading ? "処理中..." : e.text ? e.text : e.type === "submit" ? "送信" : "キャンセル"), i = te(() => {
      const r = "main-button", l = e.type === "submit" ? "main-button--submit" : "main-button--cancel", a = e.disabled || e.loading ? "main-button--disabled" : "";
      return [r, l, a].filter(Boolean).join(" ");
    });
    return (r, l) => (k(), w("button", {
      class: O(i.value),
      disabled: r.disabled || r.loading,
      onClick: s
    }, [
      r.loading ? (k(), w("span", De)) : G("", !0),
      je(" " + S(t.value), 1)
    ], 10, $e));
  }
}), L = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [s, t] of o)
    n[s] = t;
  return n;
}, sn = /* @__PURE__ */ L(Ve, [["__scopeId", "data-v-489ef9cb"]]), Re = { class: "input-field" }, He = { class: "input-field__label" }, ze = ["value", "placeholder"], Be = /* @__PURE__ */ P({
  __name: "InputField",
  props: {
    label: {},
    placeholder: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = o;
    return (s, t) => (k(), w("div", Re, [
      g("label", He, S(s.label), 1),
      g("input", {
        value: s.modelValue,
        placeholder: s.placeholder,
        class: "input-field__input",
        onInput: t[0] || (t[0] = (i) => n("update:modelValue", i.target.value))
      }, null, 40, ze)
    ]));
  }
}), rn = /* @__PURE__ */ L(Be, [["__scopeId", "data-v-9da3aab7"]]), Qe = { class: "textarea-field" }, Ue = { class: "textarea-field__label" }, qe = ["value", "placeholder", "rows"], Ge = /* @__PURE__ */ P({
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
    return (s, t) => (k(), w("div", Qe, [
      g("label", Ue, S(s.label), 1),
      g("textarea", {
        value: s.modelValue,
        placeholder: s.placeholder,
        rows: s.rows || 4,
        class: "textarea-field__input",
        onInput: t[0] || (t[0] = (i) => n("update:modelValue", i.target.value))
      }, null, 40, qe)
    ]));
  }
}), cn = /* @__PURE__ */ L(Ge, [["__scopeId", "data-v-db6e4b41"]]), Ke = { class: "top-header" }, We = { class: "top-header__title" }, Je = /* @__PURE__ */ P({
  __name: "TopHeader",
  props: {
    title: {}
  },
  setup(e) {
    return (o, n) => (k(), w("div", Ke, [
      g("h1", We, S(o.title), 1)
    ]));
  }
}), ln = /* @__PURE__ */ L(Je, [["__scopeId", "data-v-87421744"]]), ve = /^[a-z0-9]+(-[a-z0-9]+)*$/, z = (e, o, n, s = "") => {
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
((o && e.prefix === "" || e.prefix) && e.name) : !1, Ie = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), H = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), B = Object.freeze({
  ...Ie,
  ...H
}), K = Object.freeze({
  ...B,
  body: "",
  hidden: !1
});
function Xe(e, o) {
  const n = {};
  !e.hFlip != !o.hFlip && (n.hFlip = !0), !e.vFlip != !o.vFlip && (n.vFlip = !0);
  const s = ((e.rotate || 0) + (o.rotate || 0)) % 4;
  return s && (n.rotate = s), n;
}
function re(e, o) {
  const n = Xe(e, o);
  for (const s in K)
    s in H ? s in e && !(s in n) && (n[s] = H[s]) : s in o ? n[s] = o[s] : s in e && (n[s] = e[s]);
  return n;
}
function Ye(e, o) {
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
function Ze(e, o, n) {
  const s = e.icons, t = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function r(l) {
    i = re(
      s[l] || t[l],
      i
    );
  }
  return r(o), n.forEach(r), re(e, i);
}
function xe(e, o) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((t) => {
    o(t, null), n.push(t);
  });
  const s = Ye(e);
  for (const t in s) {
    const i = s[t];
    i && (o(t, Ze(e, t, i)), n.push(t));
  }
  return n;
}
const et = {
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
  if (typeof o.prefix != "string" || !e.icons || typeof e.icons != "object" || !U(e, et))
    return null;
  const n = o.icons;
  for (const t in n) {
    const i = n[t];
    if (
      // Name cannot be empty
      !t || // Must have body
      typeof i.body != "string" || // Check other props
      !U(
        i,
        K
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
      !U(
        i,
        K
      )
    )
      return null;
  }
  return o;
}
const ce = /* @__PURE__ */ Object.create(null);
function tt(e, o) {
  return {
    provider: e,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function F(e, o) {
  const n = ce[e] || (ce[e] = /* @__PURE__ */ Object.create(null));
  return n[o] || (n[o] = tt(e, o));
}
function ke(e, o) {
  return we(o) ? xe(o, (n, s) => {
    s ? e.icons[n] = s : e.missing.add(n);
  }) : [];
}
function nt(e, o, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[o] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let A = !1;
function Ce(e) {
  return typeof e == "boolean" && (A = e), A;
}
function ot(e) {
  const o = typeof e == "string" ? z(e, !0, A) : e;
  if (o) {
    const n = F(o.provider, o.prefix), s = o.name;
    return n.icons[s] || (n.missing.has(s) ? null : void 0);
  }
}
function st(e, o) {
  const n = z(e, !0, A);
  if (!n)
    return !1;
  const s = F(n.provider, n.prefix);
  return o ? nt(s, n.name, o) : (s.missing.add(n.name), !0);
}
function it(e, o) {
  if (typeof e != "object")
    return !1;
  if (typeof o != "string" && (o = e.provider || ""), A && !o && !e.prefix) {
    let t = !1;
    return we(e) && (e.prefix = "", xe(e, (i, r) => {
      st(i, r) && (t = !0);
    })), t;
  }
  const n = e.prefix;
  if (!D({
    prefix: n,
    name: "a"
  }))
    return !1;
  const s = F(o, n);
  return !!ke(s, e);
}
const _e = Object.freeze({
  width: null,
  height: null
}), Se = Object.freeze({
  // Dimensions
  ..._e,
  // Transformations
  ...H
}), rt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, ct = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function le(e, o, n) {
  if (o === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * o * n) / n;
  if (typeof e != "string")
    return e;
  const s = e.split(rt);
  if (s === null || !s.length)
    return e;
  const t = [];
  let i = s.shift(), r = ct.test(i);
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
function lt(e, o = "defs") {
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
function at(e, o) {
  return e ? "<defs>" + e + "</defs>" + o : o;
}
function ut(e, o, n) {
  const s = lt(e);
  return at(s.defs, o + s.content + n);
}
const ft = (e) => e === "unset" || e === "undefined" || e === "none";
function dt(e, o) {
  const n = {
    ...B,
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
    const f = [], T = b.hFlip, C = b.vFlip;
    let x = b.rotate;
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
    x % 2 === 1 && (t.left !== t.top && (v = t.left, t.left = t.top, t.top = v), t.width !== t.height && (v = t.width, t.width = t.height, t.height = v)), f.length && (i = ut(
      i,
      '<g transform="' + f.join(" ") + '">',
      "</g>"
    ));
  });
  const r = s.width, l = s.height, a = t.width, c = t.height;
  let u, d;
  r === null ? (d = l === null ? "1em" : l === "auto" ? c : l, u = le(d, a / c)) : (u = r === "auto" ? a : r, d = l === null ? le(u, c / a) : l === "auto" ? c : l);
  const p = {}, m = (b, f) => {
    ft(f) || (p[b] = f.toString());
  };
  m("width", u), m("height", d);
  const y = [t.left, t.top, a, c];
  return p.viewBox = y.join(" "), {
    attributes: p,
    viewBox: y,
    body: i
  };
}
const pt = /\sid="(\S+)"/g, ht = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let mt = 0;
function gt(e, o = ht) {
  const n = [];
  let s;
  for (; s = pt.exec(e); )
    n.push(s[1]);
  if (!n.length)
    return e;
  const t = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const r = typeof o == "function" ? o(i) : o + (mt++).toString(), l = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"),
      "$1" + r + t + "$3"
    );
  }), e = e.replace(new RegExp(t, "g"), ""), e;
}
const W = /* @__PURE__ */ Object.create(null);
function bt(e, o) {
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
const Z = /* @__PURE__ */ Object.create(null), E = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], V = [];
for (; E.length > 0; )
  E.length === 1 || Math.random() > 0.5 ? V.push(E.shift()) : V.push(E.pop());
Z[""] = Y({
  resources: ["https://api.iconify.design"].concat(V)
});
function yt(e, o) {
  const n = Y(o);
  return n === null ? !1 : (Z[e] = n, !0);
}
function ee(e) {
  return Z[e];
}
const vt = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let ae = vt();
function It(e, o) {
  const n = ee(e);
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
function xt(e) {
  return e === 404;
}
const wt = (e, o, n) => {
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
    const o = ee(e);
    if (o)
      return o.path;
  }
  return "/";
}
const Ct = (e, o, n) => {
  if (!ae) {
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
  ae(e + s).then((i) => {
    const r = i.status;
    if (r !== 200) {
      setTimeout(() => {
        n(xt(r) ? "abort" : "next", r);
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
}, _t = {
  prepare: wt,
  send: Ct
};
function St(e) {
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
    const i = t.provider, r = t.prefix, l = t.name, a = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), c = a[r] || (a[r] = F(i, r));
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
function Tt(e) {
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
let Ft = 0;
function Pt(e, o, n) {
  const s = Ft++, t = Te.bind(null, n, s);
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
function jt(e, o = !0, n = !1) {
  const s = [];
  return e.forEach((t) => {
    const i = typeof t == "string" ? z(t, o, n) : t;
    i && s.push(i);
  }), s;
}
var Et = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Mt(e, o, n, s) {
  const t = e.resources.length, i = e.random ? Math.floor(Math.random() * t) : e.index;
  let r;
  if (e.random) {
    let h = e.resources.slice(0);
    for (r = []; h.length > 1; ) {
      const I = Math.floor(Math.random() * h.length);
      r.push(h[I]), h = h.slice(0, I).concat(h.slice(I + 1));
    }
    r = r.concat(h);
  } else
    r = e.resources.slice(i).concat(e.resources.slice(0, i));
  const l = Date.now();
  let a = "pending", c = 0, u, d = null, p = [], m = [];
  typeof s == "function" && m.push(s);
  function y() {
    d && (clearTimeout(d), d = null);
  }
  function b() {
    a === "pending" && (a = "aborted"), y(), p.forEach((h) => {
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
      status: a,
      queriesSent: c,
      queriesPending: p.length,
      subscribe: f,
      abort: b
    };
  }
  function C() {
    a = "failed", m.forEach((h) => {
      h(void 0, u);
    });
  }
  function x() {
    p.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), p = [];
  }
  function v(h, I, j) {
    const N = I !== "success";
    switch (p = p.filter((_) => _ !== h), a) {
      case "pending":
        break;
      case "failed":
        if (N || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (I === "abort") {
      u = j, C();
      return;
    }
    if (N) {
      u = j, p.length || (r.length ? Q() : C());
      return;
    }
    if (y(), x(), !e.random) {
      const _ = e.resources.indexOf(h.resource);
      _ !== -1 && _ !== e.index && (e.index = _);
    }
    a = "completed", m.forEach((_) => {
      _(j);
    });
  }
  function Q() {
    if (a !== "pending")
      return;
    y();
    const h = r.shift();
    if (h === void 0) {
      if (p.length) {
        d = setTimeout(() => {
          y(), a === "pending" && (x(), C());
        }, e.timeout);
        return;
      }
      C();
      return;
    }
    const I = {
      status: "pending",
      resource: h,
      callback: (j, N) => {
        v(I, j, N);
      }
    };
    p.push(I), c++, d = setTimeout(Q, e.rotate), n(h, o, I.callback);
  }
  return setTimeout(Q), T;
}
function Fe(e) {
  const o = {
    ...Et,
    ...e
  };
  let n = [];
  function s() {
    n = n.filter((l) => l().status === "pending");
  }
  function t(l, a, c) {
    const u = Mt(
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
function ue() {
}
const q = /* @__PURE__ */ Object.create(null);
function Ot(e) {
  if (!q[e]) {
    const o = ee(e);
    if (!o)
      return;
    const n = Fe(o), s = {
      config: o,
      redundancy: n
    };
    q[e] = s;
  }
  return q[e];
}
function At(e, o, n) {
  let s, t;
  if (typeof e == "string") {
    const i = J(e);
    if (!i)
      return n(void 0, 424), ue;
    t = i.send;
    const r = Ot(e);
    r && (s = r.redundancy);
  } else {
    const i = Y(e);
    if (i) {
      s = Fe(i);
      const r = e.resources ? e.resources[0] : "", l = J(r);
      l && (t = l.send);
    }
  }
  return !s || !t ? (n(void 0, 424), ue) : s.query(o, t, n)().abort;
}
function fe() {
}
function Lt(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Tt(e);
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
function M(e, o, n) {
  function s() {
    const t = e.pendingIcons;
    o.forEach((i) => {
      t && t.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!ke(e, n).length) {
        s();
        return;
      }
    } catch (t) {
      console.error(t);
    }
  s(), Lt(e);
}
function de(e, o) {
  e instanceof Promise ? e.then((n) => {
    o(n);
  }).catch(() => {
    o(null);
  }) : o(e);
}
function $t(e, o) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(o).sort() : e.iconsToLoad = o, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: s } = e, t = e.iconsToLoad;
    if (delete e.iconsToLoad, !t || !t.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (t.length > 1 || !i)) {
      de(
        e.loadIcons(t, s, n),
        (u) => {
          M(e, t, u);
        }
      );
      return;
    }
    if (i) {
      t.forEach((u) => {
        const d = i(u, s, n);
        de(d, (p) => {
          const m = p ? {
            prefix: s,
            icons: {
              [u]: p
            }
          } : null;
          M(e, [u], m);
        });
      });
      return;
    }
    const { valid: r, invalid: l } = Nt(t);
    if (l.length && M(e, l, null), !r.length)
      return;
    const a = s.match(ve) ? J(n) : null;
    if (!a) {
      M(e, r, null);
      return;
    }
    a.prepare(n, s, r).forEach((u) => {
      At(n, u, (d) => {
        M(e, u.icons, d);
      });
    });
  }));
}
const Dt = (e, o) => {
  const n = jt(e, !0, Ce()), s = St(n);
  if (!s.pending.length) {
    let a = !0;
    return o && setTimeout(() => {
      a && o(
        s.loaded,
        s.missing,
        s.pending,
        fe
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
    r = c, l = u, i.push(F(c, u));
    const d = t[c] || (t[c] = /* @__PURE__ */ Object.create(null));
    d[u] || (d[u] = []);
  }), s.pending.forEach((a) => {
    const { provider: c, prefix: u, name: d } = a, p = F(c, u), m = p.pendingIcons || (p.pendingIcons = /* @__PURE__ */ new Set());
    m.has(d) || (m.add(d), t[c][u].push(d));
  }), i.forEach((a) => {
    const c = t[a.provider][a.prefix];
    c.length && $t(a, c);
  }), o ? Pt(o, s, i) : fe;
};
function Vt(e, o) {
  const n = {
    ...e
  };
  for (const s in o) {
    const t = o[s], i = typeof t;
    s in _e ? (t === null || t && (i === "string" || i === "number")) && (n[s] = t) : i === typeof n[s] && (n[s] = s === "rotate" ? t % 4 : t);
  }
  return n;
}
const Rt = /[\s,]+/;
function Ht(e, o) {
  o.split(Rt).forEach((n) => {
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
function zt(e, o = 0) {
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
function Bt(e, o) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const s in o)
    n += " " + s + '="' + o[s] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Qt(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Ut(e) {
  return "data:image/svg+xml," + Qt(e);
}
function qt(e) {
  return 'url("' + Ut(e) + '")';
}
const pe = {
  ...Se,
  inline: !1
}, Gt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Kt = {
  display: "inline-block"
}, X = {
  backgroundColor: "currentColor"
}, Pe = {
  backgroundColor: "transparent"
}, he = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, me = {
  webkitMask: X,
  mask: X,
  background: Pe
};
for (const e in me) {
  const o = me[e];
  for (const n in he)
    o[e + n] = he[n];
}
const R = {};
["horizontal", "vertical"].forEach((e) => {
  const o = e.slice(0, 1) + "Flip";
  R[e + "-flip"] = o, R[e.slice(0, 1) + "-flip"] = o, R[e + "Flip"] = o;
});
function ge(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const be = (e, o) => {
  const n = Vt(pe, o), s = { ...Gt }, t = o.mode || "svg", i = {}, r = o.style, l = typeof r == "object" && !(r instanceof Array) ? r : {};
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
          typeof f == "string" && Ht(n, f);
          break;
        // Color: override style
        case "color":
          i.color = f;
          break;
        // Rotation as string
        case "rotate":
          typeof f == "string" ? n[b] = zt(f) : typeof f == "number" && (n[b] = f);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          f !== !0 && f !== "true" && delete s["aria-hidden"];
          break;
        default: {
          const T = R[b];
          T ? (f === !0 || f === "true" || f === 1) && (n[T] = !0) : pe[b] === void 0 && (s[b] = f);
        }
      }
  }
  const a = dt(e, n), c = a.attributes;
  if (n.inline && (i.verticalAlign = "-0.125em"), t === "svg") {
    s.style = {
      ...i,
      ...l
    }, Object.assign(s, c);
    let b = 0, f = o.id;
    return typeof f == "string" && (f = f.replace(/-/g, "_")), s.innerHTML = gt(a.body, f ? () => f + "ID" + b++ : "iconifyVue"), ne("svg", s);
  }
  const { body: u, width: d, height: p } = e, m = t === "mask" || (t === "bg" ? !1 : u.indexOf("currentColor") !== -1), y = Bt(u, {
    ...c,
    width: d + "",
    height: p + ""
  });
  return s.style = {
    ...i,
    "--svg": qt(y),
    width: ge(c.width),
    height: ge(c.height),
    ...Kt,
    ...m ? X : Pe,
    ...l
  }, ne("span", s);
};
Ce(!0);
bt("", _t);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const o = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((s) => {
      try {
        // Check if item is an object and not null/array
        (typeof s != "object" || s === null || s instanceof Array || // Check for 'icons' and 'prefix'
        typeof s.icons != "object" || typeof s.prefix != "string" || // Add icon set
        !it(s)) && console.error(n);
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
          yt(n, t) || console.error(s);
        } catch {
          console.error(s);
        }
      }
  }
}
const Wt = {
  ...B,
  body: ""
}, ye = P((e, { emit: o }) => {
  const n = $(null);
  function s() {
    var c, u;
    n.value && ((u = (c = n.value).abort) == null || u.call(c), n.value = null);
  }
  const t = $(!!e.ssr), i = $(""), r = Ee(null);
  function l() {
    const c = e.icon;
    if (typeof c == "object" && c !== null && typeof c.body == "string")
      return i.value = "", {
        data: c
      };
    let u;
    if (typeof c != "string" || (u = z(c, !1, !0)) === null)
      return null;
    let d = ot(u);
    if (!d) {
      const y = n.value;
      return (!y || y.name !== c) && (d === null ? n.value = {
        name: c
      } : n.value = {
        name: c,
        abort: Dt([u], a)
      }), null;
    }
    s(), i.value !== c && (i.value = c, Le(() => {
      o("load", c);
    }));
    const p = e.customise;
    if (p) {
      d = Object.assign({}, d);
      const y = p(d.body, u.name, u.prefix, u.provider);
      typeof y == "string" && (d.body = y);
    }
    const m = ["iconify"];
    return u.prefix !== "" && m.push("iconify--" + u.prefix), u.provider !== "" && m.push("iconify--" + u.provider), { data: d, classes: m };
  }
  function a() {
    var u;
    const c = l();
    c ? c.data !== ((u = r.value) == null ? void 0 : u.data) && (r.value = c) : r.value = null;
  }
  return t.value ? a() : Me(() => {
    t.value = !0, a();
  }), Oe(() => e.icon, a), Ae(s), () => {
    const c = r.value;
    if (!c)
      return be(Wt, e);
    let u = e;
    return c.classes && (u = {
      ...e,
      class: c.classes.join(" ")
    }), be({
      ...B,
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
}), Jt = { class: "side-header-container" }, Xt = { class: "logo-wrapper" }, Yt = { class: "menu-wrapper" }, Zt = ["href", "onClick"], en = {
  key: 0,
  class: "bottom-wrapper"
}, tn = ["href"], nn = /* @__PURE__ */ P({
  __name: "SideHeader",
  props: {
    logoText: {},
    menuItems: {},
    bottomMenuItem: {},
    currentPath: {}
  },
  emits: ["menuItemClick"],
  setup(e, { emit: o }) {
    const n = e, s = o, t = $(!1), i = () => {
      t.value = !t.value;
    }, r = () => {
      t.value = !1;
    }, l = (a, c) => {
      s("menuItemClick", a, c), r();
    };
    return (a, c) => (k(), w(oe, null, [
      g("button", {
        class: O(["hamburger-button", { open: t.value }]),
        onClick: i
      }, [...c[1] || (c[1] = [
        g("span", null, null, -1),
        g("span", null, null, -1),
        g("span", null, null, -1)
      ])], 2),
      t.value ? (k(), w("div", {
        key: 0,
        class: "menu-overlay",
        onClick: r
      })) : G("", !0),
      g("div", {
        id: "side-header",
        class: O({ open: t.value })
      }, [
        g("div", Jt, [
          g("div", Xt, [
            g("p", null, S(a.logoText), 1)
          ]),
          g("div", Yt, [
            g("ul", null, [
              (k(!0), w(oe, null, Ne(a.menuItems, (u) => (k(), w("li", {
                key: u.path
              }, [
                g("a", {
                  href: u.path,
                  class: O(["menu-item", { active: n.currentPath === u.path }]),
                  onClick: (d) => l(u.path, d)
                }, [
                  se(ie(ye), {
                    icon: u.icon,
                    class: "menu-item-icon"
                  }, null, 8, ["icon"]),
                  g("p", null, S(u.label), 1)
                ], 10, Zt)
              ]))), 128))
            ])
          ]),
          a.bottomMenuItem ? (k(), w("div", en, [
            g("a", {
              href: a.bottomMenuItem.path,
              class: O(["menu-item", { active: n.currentPath === a.bottomMenuItem.path }]),
              onClick: c[0] || (c[0] = (u) => l(a.bottomMenuItem.path, u))
            }, [
              se(ie(ye), {
                icon: a.bottomMenuItem.icon,
                class: "menu-item-icon"
              }, null, 8, ["icon"]),
              g("p", null, S(a.bottomMenuItem.label), 1)
            ], 10, tn)
          ])) : G("", !0)
        ])
      ], 2)
    ], 64));
  }
}), an = /* @__PURE__ */ L(nn, [["__scopeId", "data-v-7f45a441"]]);
export {
  rn as InputField,
  sn as MainButton,
  an as SideHeader,
  cn as TextareaField,
  ln as TopHeader
};
