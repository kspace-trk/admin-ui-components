import { defineComponent as n, createElementBlock as a, openBlock as l, normalizeStyle as r, createElementVNode as f, toDisplayString as s } from "vue";
const p = ["href", "target"], _ = /* @__PURE__ */ n({
  __name: "HalfRoundedButton",
  props: {
    text: {},
    href: {},
    backgroundColor: { default: "#373221" },
    textColor: { default: "#ffffff" },
    target: {}
  },
  setup(o) {
    return (t, e) => (l(), a("a", {
      href: t.href,
      class: "half-rounded-button",
      style: r({ backgroundColor: t.backgroundColor }),
      target: t.target
    }, [
      f("p", {
        class: "half-rounded-button-text",
        style: r({ color: t.textColor })
      }, s(t.text), 5)
    ], 12, p));
  }
}), d = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [c, u] of t)
    e[c] = u;
  return e;
}, b = /* @__PURE__ */ d(_, [["__scopeId", "data-v-42cf9e3a"]]), h = ["href"], i = /* @__PURE__ */ n({
  __name: "RoundedButtonWithIcon",
  props: {
    text: {},
    href: {},
    backgroundColor: { default: "#ffffff" },
    textColor: { default: "#373221" }
  },
  setup(o) {
    return (t, e) => (l(), a("a", {
      href: t.href,
      target: "_blank",
      class: "rounded-button-with-icon",
      style: r({ backgroundColor: t.backgroundColor })
    }, [
      f("p", {
        class: "rounded-button-with-icon-text",
        style: r({ color: t.textColor })
      }, s(t.text), 5)
    ], 12, h));
  }
}), C = /* @__PURE__ */ d(i, [["__scopeId", "data-v-23fa989e"]]);
export {
  b as HalfRoundedButton,
  C as RoundedButtonWithIcon
};
