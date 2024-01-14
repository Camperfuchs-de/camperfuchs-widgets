/**
* @vue/shared v3.4.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function hs(e, t) {
  const s = new Set(e.split(","));
  return t ? (n) => s.has(n.toLowerCase()) : (n) => s.has(n);
}
const V = {}, Ge = [], ne = () => {
}, gr = () => !1, Rt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ps = (e) => e.startsWith("onUpdate:"), q = Object.assign, _s = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, mr = Object.prototype.hasOwnProperty, S = (e, t) => mr.call(e, t), P = Array.isArray, Qe = (e) => St(e) === "[object Map]", br = (e) => St(e) === "[object Set]", R = (e) => typeof e == "function", k = (e) => typeof e == "string", It = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", xn = (e) => (K(e) || R(e)) && R(e.then) && R(e.catch), wr = Object.prototype.toString, St = (e) => wr.call(e), vr = (e) => St(e).slice(8, -1), xr = (e) => St(e) === "[object Object]", gs = (e) => k(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vt = /* @__PURE__ */ hs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, yr = /-(\w)/g, xe = Mt((e) => e.replace(yr, (t, s) => s ? s.toUpperCase() : "")), Er = /\B([A-Z])/g, fe = Mt(
  (e) => e.replace(Er, "-$1").toLowerCase()
), yn = Mt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gt = Mt((e) => e ? `on${yn(e)}` : ""), $e = (e, t) => !Object.is(e, t), zt = (e, t) => {
  for (let s = 0; s < e.length; s++)
    e[s](t);
}, Ct = (e, t, s) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: s
  });
}, Cr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, $s = (e) => {
  const t = k(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ks;
const En = () => Ks || (Ks = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ms(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = k(n) ? Pr(n) : ms(n);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (k(e) || K(e))
    return e;
}
const Or = /;(?![^(]*\))/g, Tr = /:([^]+)/, Ar = /\/\*[^]*?\*\//g;
function Pr(e) {
  const t = {};
  return e.replace(Ar, "").split(Or).forEach((s) => {
    if (s) {
      const n = s.split(Tr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function bs(e) {
  let t = "";
  if (k(e))
    t = e;
  else if (P(e))
    for (let s = 0; s < e.length; s++) {
      const n = bs(e[s]);
      n && (t += n + " ");
    }
  else if (K(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Rr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ir = /* @__PURE__ */ hs(Rr);
function Cn(e) {
  return !!e || e === "";
}
let ce;
class Sr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ce, !t && ce && (this.index = (ce.scopes || (ce.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const s = ce;
      try {
        return ce = this, t();
      } finally {
        ce = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ce = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ce = this.parent;
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Mr(e, t = ce) {
  t && t.active && t.effects.push(e);
}
function Nr() {
  return ce;
}
let Ve;
class ws {
  constructor(t, s, n, r) {
    this.fn = t, this.trigger = s, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, Mr(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, Se();
      for (const t of this.deps)
        if (t.computed && (Fr(t.computed), this._dirtyLevel >= 2))
          break;
      Me(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Re, s = Ve;
    try {
      return Re = !0, Ve = this, this._runnings++, Bs(this), this.fn();
    } finally {
      Ws(this), this._runnings--, Ve = s, Re = t;
    }
  }
  stop() {
    var t;
    this.active && (Bs(this), Ws(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Fr(e) {
  return e.value;
}
function Bs(e) {
  e._trackId++, e._depsLength = 0;
}
function Ws(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      On(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function On(e, t) {
  const s = e.get(t);
  s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup());
}
let Re = !0, es = 0;
const Tn = [];
function Se() {
  Tn.push(Re), Re = !1;
}
function Me() {
  const e = Tn.pop();
  Re = e === void 0 ? !0 : e;
}
function vs() {
  es++;
}
function xs() {
  for (es--; !es && ts.length; )
    ts.shift()();
}
function An(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && On(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const ts = [];
function Pn(e, t, s) {
  vs();
  for (const n of e.keys())
    if (!(!n.allowRecurse && n._runnings) && n._dirtyLevel < t && (!n._runnings || t !== 2)) {
      const r = n._dirtyLevel;
      n._dirtyLevel = t, r === 0 && (!n._queryings || t !== 2) && (n.trigger(), n.scheduler && ts.push(n.scheduler));
    }
  xs();
}
const Rn = (e, t) => {
  const s = /* @__PURE__ */ new Map();
  return s.cleanup = e, s.computed = t, s;
}, ss = /* @__PURE__ */ new WeakMap(), je = Symbol(""), ns = Symbol("");
function ee(e, t, s) {
  if (Re && Ve) {
    let n = ss.get(e);
    n || ss.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || n.set(s, r = Rn(() => n.delete(s))), An(
      Ve,
      r
    );
  }
}
function ye(e, t, s, n, r, o) {
  const l = ss.get(e);
  if (!l)
    return;
  let f = [];
  if (t === "clear")
    f = [...l.values()];
  else if (s === "length" && P(e)) {
    const u = Number(n);
    l.forEach((d, p) => {
      (p === "length" || !It(p) && p >= u) && f.push(d);
    });
  } else
    switch (s !== void 0 && f.push(l.get(s)), t) {
      case "add":
        P(e) ? gs(s) && f.push(l.get("length")) : (f.push(l.get(je)), Qe(e) && f.push(l.get(ns)));
        break;
      case "delete":
        P(e) || (f.push(l.get(je)), Qe(e) && f.push(l.get(ns)));
        break;
      case "set":
        Qe(e) && f.push(l.get(je));
        break;
    }
  vs();
  for (const u of f)
    u && Pn(
      u,
      3
    );
  xs();
}
const Lr = /* @__PURE__ */ hs("__proto__,__v_isRef,__isVue"), In = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(It)
), Gs = /* @__PURE__ */ Ur();
function Ur() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...s) {
      const n = N(this);
      for (let o = 0, l = this.length; o < l; o++)
        ee(n, "get", o + "");
      const r = n[t](...s);
      return r === -1 || r === !1 ? n[t](...s.map(N)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...s) {
      Se(), vs();
      const n = N(this)[t].apply(this, s);
      return xs(), Me(), n;
    };
  }), e;
}
function Dr(e) {
  const t = N(this);
  return ee(t, "has", e), t.hasOwnProperty(e);
}
class Sn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._shallow = s;
  }
  get(t, s, n) {
    const r = this._isReadonly, o = this._shallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return o;
    if (s === "__v_raw")
      return n === (r ? o ? Jr : Ln : o ? Fn : Nn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const l = P(t);
    if (!r) {
      if (l && S(Gs, s))
        return Reflect.get(Gs, s, n);
      if (s === "hasOwnProperty")
        return Dr;
    }
    const f = Reflect.get(t, s, n);
    return (It(s) ? In.has(s) : Lr(s)) || (r || ee(t, "get", s), o) ? f : te(f) ? l && gs(s) ? f : f.value : K(f) ? r ? Un(f) : Cs(f) : f;
  }
}
class Mn extends Sn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let o = t[s];
    if (!this._shallow) {
      const u = rt(o);
      if (!rs(n) && !rt(n) && (o = N(o), n = N(n)), !P(t) && te(o) && !te(n))
        return u ? !1 : (o.value = n, !0);
    }
    const l = P(t) && gs(s) ? Number(s) < t.length : S(t, s), f = Reflect.set(t, s, n, r);
    return t === N(r) && (l ? $e(n, o) && ye(t, "set", s, n) : ye(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = S(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && ye(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!It(s) || !In.has(s)) && ee(t, "has", s), n;
  }
  ownKeys(t) {
    return ee(
      t,
      "iterate",
      P(t) ? "length" : je
    ), Reflect.ownKeys(t);
  }
}
class Hr extends Sn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Vr = /* @__PURE__ */ new Mn(), jr = /* @__PURE__ */ new Hr(), $r = /* @__PURE__ */ new Mn(
  !0
), ys = (e) => e, Nt = (e) => Reflect.getPrototypeOf(e);
function pt(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const r = N(e), o = N(t);
  s || ($e(t, o) && ee(r, "get", t), ee(r, "get", o));
  const { has: l } = Nt(r), f = n ? ys : s ? As : Ts;
  if (l.call(r, t))
    return f(e.get(t));
  if (l.call(r, o))
    return f(e.get(o));
  e !== r && e.get(t);
}
function _t(e, t = !1) {
  const s = this.__v_raw, n = N(s), r = N(e);
  return t || ($e(e, r) && ee(n, "has", e), ee(n, "has", r)), e === r ? s.has(e) : s.has(e) || s.has(r);
}
function gt(e, t = !1) {
  return e = e.__v_raw, !t && ee(N(e), "iterate", je), Reflect.get(e, "size", e);
}
function zs(e) {
  e = N(e);
  const t = N(this);
  return Nt(t).has.call(t, e) || (t.add(e), ye(t, "add", e, e)), this;
}
function qs(e, t) {
  t = N(t);
  const s = N(this), { has: n, get: r } = Nt(s);
  let o = n.call(s, e);
  o || (e = N(e), o = n.call(s, e));
  const l = r.call(s, e);
  return s.set(e, t), o ? $e(t, l) && ye(s, "set", e, t) : ye(s, "add", e, t), this;
}
function ks(e) {
  const t = N(this), { has: s, get: n } = Nt(t);
  let r = s.call(t, e);
  r || (e = N(e), r = s.call(t, e)), n && n.call(t, e);
  const o = t.delete(e);
  return r && ye(t, "delete", e, void 0), o;
}
function Ys() {
  const e = N(this), t = e.size !== 0, s = e.clear();
  return t && ye(e, "clear", void 0, void 0), s;
}
function mt(e, t) {
  return function(n, r) {
    const o = this, l = o.__v_raw, f = N(l), u = t ? ys : e ? As : Ts;
    return !e && ee(f, "iterate", je), l.forEach((d, p) => n.call(r, u(d), u(p), o));
  };
}
function bt(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, o = N(r), l = Qe(o), f = e === "entries" || e === Symbol.iterator && l, u = e === "keys" && l, d = r[e](...n), p = s ? ys : t ? As : Ts;
    return !t && ee(
      o,
      "iterate",
      u ? ns : je
    ), {
      // iterator protocol
      next() {
        const { value: x, done: E } = d.next();
        return E ? { value: x, done: E } : {
          value: f ? [p(x[0]), p(x[1])] : p(x),
          done: E
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Oe(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Kr() {
  const e = {
    get(o) {
      return pt(this, o);
    },
    get size() {
      return gt(this);
    },
    has: _t,
    add: zs,
    set: qs,
    delete: ks,
    clear: Ys,
    forEach: mt(!1, !1)
  }, t = {
    get(o) {
      return pt(this, o, !1, !0);
    },
    get size() {
      return gt(this);
    },
    has: _t,
    add: zs,
    set: qs,
    delete: ks,
    clear: Ys,
    forEach: mt(!1, !0)
  }, s = {
    get(o) {
      return pt(this, o, !0);
    },
    get size() {
      return gt(this, !0);
    },
    has(o) {
      return _t.call(this, o, !0);
    },
    add: Oe("add"),
    set: Oe("set"),
    delete: Oe("delete"),
    clear: Oe("clear"),
    forEach: mt(!0, !1)
  }, n = {
    get(o) {
      return pt(this, o, !0, !0);
    },
    get size() {
      return gt(this, !0);
    },
    has(o) {
      return _t.call(this, o, !0);
    },
    add: Oe("add"),
    set: Oe("set"),
    delete: Oe("delete"),
    clear: Oe("clear"),
    forEach: mt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = bt(
      o,
      !1,
      !1
    ), s[o] = bt(
      o,
      !0,
      !1
    ), t[o] = bt(
      o,
      !1,
      !0
    ), n[o] = bt(
      o,
      !0,
      !0
    );
  }), [
    e,
    s,
    t,
    n
  ];
}
const [
  Br,
  Wr,
  Gr,
  zr
] = /* @__PURE__ */ Kr();
function Es(e, t) {
  const s = t ? e ? zr : Gr : e ? Wr : Br;
  return (n, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    S(s, r) && r in n ? s : n,
    r,
    o
  );
}
const qr = {
  get: /* @__PURE__ */ Es(!1, !1)
}, kr = {
  get: /* @__PURE__ */ Es(!1, !0)
}, Yr = {
  get: /* @__PURE__ */ Es(!0, !1)
}, Nn = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap();
function Xr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Zr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Xr(vr(e));
}
function Cs(e) {
  return rt(e) ? e : Os(
    e,
    !1,
    Vr,
    qr,
    Nn
  );
}
function Qr(e) {
  return Os(
    e,
    !1,
    $r,
    kr,
    Fn
  );
}
function Un(e) {
  return Os(
    e,
    !0,
    jr,
    Yr,
    Ln
  );
}
function Os(e, t, s, n, r) {
  if (!K(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = Zr(e);
  if (l === 0)
    return e;
  const f = new Proxy(
    e,
    l === 2 ? n : s
  );
  return r.set(e, f), f;
}
function ze(e) {
  return rt(e) ? ze(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
function rs(e) {
  return !!(e && e.__v_isShallow);
}
function Dn(e) {
  return ze(e) || rt(e);
}
function N(e) {
  const t = e && e.__v_raw;
  return t ? N(t) : e;
}
function Hn(e) {
  return Ct(e, "__v_skip", !0), e;
}
const Ts = (e) => K(e) ? Cs(e) : e, As = (e) => K(e) ? Un(e) : e;
class Vn {
  constructor(t, s, n, r) {
    this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new ws(
      () => t(this._value),
      () => Js(this, 1)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = n;
  }
  get value() {
    const t = N(this);
    return to(t), (!t._cacheable || t.effect.dirty) && $e(t._value, t._value = t.effect.run()) && Js(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function eo(e, t, s = !1) {
  let n, r;
  const o = R(e);
  return o ? (n = e, r = ne) : (n = e.get, r = e.set), new Vn(n, r, o || !r, s);
}
function to(e) {
  Re && Ve && (e = N(e), An(
    Ve,
    e.dep || (e.dep = Rn(
      () => e.dep = void 0,
      e instanceof Vn ? e : void 0
    ))
  ));
}
function Js(e, t = 3, s) {
  e = N(e);
  const n = e.dep;
  n && Pn(
    n,
    t
  );
}
function te(e) {
  return !!(e && e.__v_isRef === !0);
}
function so(e) {
  return te(e) ? e.value : e;
}
const no = {
  get: (e, t, s) => so(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return te(r) && !te(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function jn(e) {
  return ze(e) ? e : new Proxy(e, no);
}
var et = { NVM_INC: "/Users/sultanov/.nvm/versions/node/v20.10.0/include/node", MANPATH: "/Users/sultanov/.nvm/versions/node/v20.10.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "iTerm.app", NODE: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin/node", INIT_CWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details", ANDROID_HOME: "/Users/sultanov/Library/Android/sdk", NVM_CD_FLAGS: "-q", _P9K_TTY: "/dev/ttys000", TERM: "xterm-256color", SHELL: "/bin/zsh", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/", npm_config_global_prefix: "/Users/sultanov/.nvm/versions/node/v20.10.0", TERM_PROGRAM_VERSION: "3.4.23", COLOR: "1", TERM_SESSION_ID: "w0t0p0:F51105E8-1DAB-428E-B400-8FACA2844351", npm_config_noproxy: "", SDKMAN_PLATFORM: "darwinarm64", npm_config_local_prefix: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details", ZSH: "/Users/sultanov/.oh-my-zsh", NVM_DIR: "/Users/sultanov/.nvm", USER: "sultanov", LS_COLORS: "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43", SPRINGBOOT_HOME: "/Users/sultanov/.sdkman/candidates/springboot/current", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/sultanov/.nvm/versions/node/v20.10.0/etc/npmrc", SDKMAN_CANDIDATES_API: "https://api.sdkman.io/2", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.NM9amOClzt/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/bin/npm-cli.js", PAGER: "less", LSCOLORS: "Gxfxcxdxbxegedabagacad", PATH: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/widgets/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/node_modules/.bin:/Users/sultanov/dev/node_modules/.bin:/Users/sultanov/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/sultanov/.sdkman/candidates/springboot/current/bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v20.10.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/sultanov/.fzf/bin", npm_package_json: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details/package.json", _: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details/node_modules/.bin/vite", npm_config_userconfig: "/Users/sultanov/.npmrc", npm_config_init_module: "/Users/sultanov/.npm-init.js", __CFBundleIdentifier: "com.googlecode.iterm2", npm_command: "run-script", PWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details", JAVA_HOME: "/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home", npm_lifecycle_event: "build", EDITOR: "vi", P9K_SSH: "0", npm_package_name: "camperfuchs-vehicle-details", P9K_TTY: "old", ITERM_PROFILE: "Default", npm_config_npm_version: "10.2.3", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.0.0", XPC_SERVICE_NAME: "0", SHLVL: "2", HOME: "/Users/sultanov", COLORFGBG: "7;0", LC_TERMINAL_VERSION: "3.4.23", HOMEBREW_PREFIX: "/opt/homebrew", ITERM_SESSION_ID: "w0t0p0:F51105E8-1DAB-428E-B400-8FACA2844351", npm_config_cache: "/Users/sultanov/.npm", LESS: "-R", LOGNAME: "sultanov", npm_lifecycle_script: "vite build", SDKMAN_DIR: "/Users/sultanov/.sdkman", LC_CTYPE: "UTF-8", NVM_BIN: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin", npm_config_user_agent: "npm/10.2.3 node/v20.10.0 darwin arm64 workspaces/false", SDKMAN_CANDIDATES_DIR: "/Users/sultanov/.sdkman/candidates", INFOPATH: "/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", _P9K_SSH_TTY: "/dev/ttys000", LC_TERMINAL: "iTerm2", npm_node_execpath: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin/node", npm_config_prefix: "/Users/sultanov/.nvm/versions/node/v20.10.0", COLORTERM: "truecolor", NODE_ENV: "production" };
const tt = [];
function ro(e, ...t) {
  Se();
  const s = tt.length ? tt[tt.length - 1].component : null, n = s && s.appContext.config.warnHandler, r = oo();
  if (n)
    Ee(
      n,
      s,
      11,
      [
        e + t.join(""),
        s && s.proxy,
        r.map(
          ({ vnode: o }) => `at <${hr(s, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...io(r)), console.warn(...o);
  }
  Me();
}
function oo() {
  let e = tt[tt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const s = t[0];
    s && s.vnode === e ? s.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function io(e) {
  const t = [];
  return e.forEach((s, n) => {
    t.push(...n === 0 ? [] : [`
`], ...lo(s));
  }), t;
}
function lo({ vnode: e, recurseCount: t }) {
  const s = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, r = ` at <${hr(
    e.component,
    e.type,
    n
  )}`, o = ">" + s;
  return e.props ? [r, ...co(e.props), o] : [r + o];
}
function co(e) {
  const t = [], s = Object.keys(e);
  return s.slice(0, 3).forEach((n) => {
    t.push(...$n(n, e[n]));
  }), s.length > 3 && t.push(" ..."), t;
}
function $n(e, t, s) {
  return k(t) ? (t = JSON.stringify(t), s ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? s ? t : [`${e}=${t}`] : te(t) ? (t = $n(e, N(t.value), !0), s ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = N(t), s ? t : [`${e}=`, t]);
}
function Ee(e, t, s, n) {
  let r;
  try {
    r = n ? e(...n) : e();
  } catch (o) {
    Ft(o, t, s);
  }
  return r;
}
function ae(e, t, s, n) {
  if (R(e)) {
    const o = Ee(e, t, s, n);
    return o && xn(o) && o.catch((l) => {
      Ft(l, t, s);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(ae(e[o], t, s, n));
  return r;
}
function Ft(e, t, s, n = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const l = t.proxy, f = `https://vuejs.org/errors/#runtime-${s}`;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let p = 0; p < d.length; p++)
          if (d[p](e, l, f) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ee(
        u,
        null,
        10,
        [e, l, f]
      );
      return;
    }
  }
  fo(e, s, r, n);
}
function fo(e, t, s, n = !0) {
  console.error(e);
}
let ot = !1, os = !1;
const Y = [];
let me = 0;
const qe = [];
let Te = null, He = 0;
const Kn = /* @__PURE__ */ Promise.resolve();
let Ps = null;
function Bn(e) {
  const t = Ps || Kn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function uo(e) {
  let t = me + 1, s = Y.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = Y[n], o = it(r);
    o < e || o === e && r.pre ? t = n + 1 : s = n;
  }
  return t;
}
function Rs(e) {
  (!Y.length || !Y.includes(
    e,
    ot && e.allowRecurse ? me + 1 : me
  )) && (e.id == null ? Y.push(e) : Y.splice(uo(e.id), 0, e), Wn());
}
function Wn() {
  !ot && !os && (os = !0, Ps = Kn.then(zn));
}
function ao(e) {
  const t = Y.indexOf(e);
  t > me && Y.splice(t, 1);
}
function ho(e) {
  P(e) ? qe.push(...e) : (!Te || !Te.includes(
    e,
    e.allowRecurse ? He + 1 : He
  )) && qe.push(e), Wn();
}
function Xs(e, t, s = ot ? me + 1 : 0) {
  for (; s < Y.length; s++) {
    const n = Y[s];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      Y.splice(s, 1), s--, n();
    }
  }
}
function Gn(e) {
  if (qe.length) {
    const t = [...new Set(qe)].sort(
      (s, n) => it(s) - it(n)
    );
    if (qe.length = 0, Te) {
      Te.push(...t);
      return;
    }
    for (Te = t, He = 0; He < Te.length; He++)
      Te[He]();
    Te = null, He = 0;
  }
}
const it = (e) => e.id == null ? 1 / 0 : e.id, po = (e, t) => {
  const s = it(e) - it(t);
  if (s === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return s;
};
function zn(e) {
  os = !1, ot = !0, Y.sort(po);
  const t = ne;
  try {
    for (me = 0; me < Y.length; me++) {
      const s = Y[me];
      s && s.active !== !1 && (et.NODE_ENV !== "production" && t(s), Ee(s, null, 14));
    }
  } finally {
    me = 0, Y.length = 0, Gn(), ot = !1, Ps = null, (Y.length || qe.length) && zn();
  }
}
function _o(e, t, ...s) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || V;
  let r = s;
  const o = t.startsWith("update:"), l = o && t.slice(7);
  if (l && l in n) {
    const p = `${l === "modelValue" ? "model" : l}Modifiers`, { number: x, trim: E } = n[p] || V;
    E && (r = s.map((A) => k(A) ? A.trim() : A)), x && (r = s.map(Cr));
  }
  let f, u = n[f = Gt(t)] || // also try camelCase event handler (#2249)
  n[f = Gt(xe(t))];
  !u && o && (u = n[f = Gt(fe(t))]), u && ae(
    u,
    e,
    6,
    r
  );
  const d = n[f + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, ae(
      d,
      e,
      6,
      r
    );
  }
}
function qn(e, t, s = !1) {
  const n = t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let l = {}, f = !1;
  if (!R(e)) {
    const u = (d) => {
      const p = qn(d, t, !0);
      p && (f = !0, q(l, p));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !f ? (K(e) && n.set(e, null), null) : (P(o) ? o.forEach((u) => l[u] = null) : q(l, o), K(e) && n.set(e, l), l);
}
function Lt(e, t) {
  return !e || !Rt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), S(e, t[0].toLowerCase() + t.slice(1)) || S(e, fe(t)) || S(e, t));
}
let be = null, kn = null;
function Ot(e) {
  const t = be;
  return be = e, kn = e && e.type.__scopeId || null, t;
}
function go(e, t = be, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && cn(-1);
    const o = Ot(t);
    let l;
    try {
      l = e(...r);
    } finally {
      Ot(o), n._d && cn(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qt(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    props: o,
    propsOptions: [l],
    slots: f,
    attrs: u,
    emit: d,
    render: p,
    renderCache: x,
    data: E,
    setupState: A,
    ctx: $,
    inheritAttrs: F
  } = e;
  let G, B;
  const de = Ot(e);
  try {
    if (s.shapeFlag & 4) {
      const W = r || n, re = et.NODE_ENV !== "production" && A.__isScriptSetup ? new Proxy(W, {
        get(M, oe, ie) {
          return ro(
            `Property '${String(
              oe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, oe, ie);
        }
      }) : W;
      G = ge(
        p.call(
          re,
          W,
          x,
          o,
          A,
          E,
          $
        )
      ), B = u;
    } else {
      const W = t;
      et.NODE_ENV, G = ge(
        W.length > 1 ? W(
          o,
          et.NODE_ENV !== "production" ? {
            get attrs() {
              return u;
            },
            slots: f,
            emit: d
          } : { attrs: u, slots: f, emit: d }
        ) : W(
          o,
          null
          /* we know it doesn't need it */
        )
      ), B = t.props ? u : mo(u);
    }
  } catch (W) {
    nt.length = 0, Ft(W, e, 1), G = Ie(lt);
  }
  let U = G;
  if (B && F !== !1) {
    const W = Object.keys(B), { shapeFlag: re } = U;
    W.length && re & 7 && (l && W.some(ps) && (B = bo(
      B,
      l
    )), U = ke(U, B));
  }
  return s.dirs && (U = ke(U), U.dirs = U.dirs ? U.dirs.concat(s.dirs) : s.dirs), s.transition && (U.transition = s.transition), G = U, Ot(de), G;
}
const mo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Rt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, bo = (e, t) => {
  const s = {};
  for (const n in e)
    (!ps(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function wo(e, t, s) {
  const { props: n, children: r, component: o } = e, { props: l, children: f, patchFlag: u } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? Zs(n, l, d) : !!l;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let x = 0; x < p.length; x++) {
        const E = p[x];
        if (l[E] !== n[E] && !Lt(d, E))
          return !0;
      }
    }
  } else
    return (r || f) && (!f || !f.$stable) ? !0 : n === l ? !1 : n ? l ? Zs(n, l, d) : !0 : !!l;
  return !1;
}
function Zs(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (t[o] !== e[o] && !Lt(s, o))
      return !0;
  }
  return !1;
}
function vo({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const xo = Symbol.for("v-ndc"), yo = (e) => e.__isSuspense;
function Eo(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : ho(e);
}
const Co = Symbol.for("v-scx"), Oo = () => yt(Co), wt = {};
function kt(e, t, s) {
  return Yn(e, t, s);
}
function Yn(e, t, {
  immediate: s,
  deep: n,
  flush: r,
  once: o,
  onTrack: l,
  onTrigger: f
} = V) {
  if (t && o) {
    const M = t;
    t = (...oe) => {
      M(...oe), re();
    };
  }
  const u = J, d = (M) => n === !0 ? M : (
    // for deep: false, only traverse root-level properties
    We(M, n === !1 ? 1 : void 0)
  );
  let p, x = !1, E = !1;
  if (te(e) ? (p = () => e.value, x = rs(e)) : ze(e) ? (p = () => d(e), x = !0) : P(e) ? (E = !0, x = e.some((M) => ze(M) || rs(M)), p = () => e.map((M) => {
    if (te(M))
      return M.value;
    if (ze(M))
      return d(M);
    if (R(M))
      return Ee(M, u, 2);
  })) : R(e) ? t ? p = () => Ee(e, u, 2) : p = () => (A && A(), ae(
    e,
    u,
    3,
    [$]
  )) : p = ne, t && n) {
    const M = p;
    p = () => We(M());
  }
  let A, $ = (M) => {
    A = U.onStop = () => {
      Ee(M, u, 4), A = U.onStop = void 0;
    };
  }, F;
  if (Vt)
    if ($ = ne, t ? s && ae(t, u, 3, [
      p(),
      E ? [] : void 0,
      $
    ]) : p(), r === "sync") {
      const M = Oo();
      F = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return ne;
  let G = E ? new Array(e.length).fill(wt) : wt;
  const B = () => {
    if (!(!U.active || !U.dirty))
      if (t) {
        const M = U.run();
        (n || x || (E ? M.some((oe, ie) => $e(oe, G[ie])) : $e(M, G))) && (A && A(), ae(t, u, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          G === wt ? void 0 : E && G[0] === wt ? [] : G,
          $
        ]), G = M);
      } else
        U.run();
  };
  B.allowRecurse = !!t;
  let de;
  r === "sync" ? de = B : r === "post" ? de = () => Q(B, u && u.suspense) : (B.pre = !0, u && (B.id = u.uid), de = () => Rs(B));
  const U = new ws(p, ne, de), W = Nr(), re = () => {
    U.stop(), W && _s(W.effects, U);
  };
  return t ? s ? B() : G = U.run() : r === "post" ? Q(
    U.run.bind(U),
    u && u.suspense
  ) : U.run(), F && F.push(re), re;
}
function To(e, t, s) {
  const n = this.proxy, r = k(e) ? e.includes(".") ? Jn(n, e) : () => n[e] : e.bind(n, n);
  let o;
  R(t) ? o = t : (o = t.handler, s = t);
  const l = ft(this), f = Yn(r, o.bind(n), s);
  return l(), f;
}
function Jn(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
function We(e, t, s = 0, n) {
  if (!K(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (s >= t)
      return e;
    s++;
  }
  if (n = n || /* @__PURE__ */ new Set(), n.has(e))
    return e;
  if (n.add(e), te(e))
    We(e.value, t, s, n);
  else if (P(e))
    for (let r = 0; r < e.length; r++)
      We(e[r], t, s, n);
  else if (br(e) || Qe(e))
    e.forEach((r) => {
      We(r, t, s, n);
    });
  else if (xr(e))
    for (const r in e)
      We(e[r], t, s, n);
  return e;
}
function Ue(e, t, s, n) {
  const r = e.dirs, o = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const f = r[l];
    o && (f.oldValue = o[l].value);
    let u = f.dir[n];
    u && (Se(), ae(u, s, 8, [
      e.el,
      f,
      e,
      t
    ]), Me());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ao(e, t) {
  return R(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    q({ name: e.name }, t, { setup: e })
  ) : e;
}
const xt = (e) => !!e.type.__asyncLoader, Xn = (e) => e.type.__isKeepAlive;
function Po(e, t) {
  Zn(e, "a", t);
}
function Ro(e, t) {
  Zn(e, "da", t);
}
function Zn(e, t, s = J) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Ut(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      Xn(r.parent.vnode) && Io(n, t, s, r), r = r.parent;
  }
}
function Io(e, t, s, n) {
  const r = Ut(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Qn(() => {
    _s(n[t], r);
  }, s);
}
function Ut(e, t, s = J, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...l) => {
      if (s.isUnmounted)
        return;
      Se();
      const f = ft(s), u = ae(t, s, e, l);
      return f(), Me(), u;
    });
    return n ? r.unshift(o) : r.push(o), o;
  }
}
const Ce = (e) => (t, s = J) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Vt || e === "sp") && Ut(e, (...n) => t(...n), s)
), So = Ce("bm"), Mo = Ce("m"), No = Ce("bu"), Fo = Ce("u"), Lo = Ce("bum"), Qn = Ce("um"), Uo = Ce("sp"), Do = Ce(
  "rtg"
), Ho = Ce(
  "rtc"
);
function Vo(e, t = J) {
  Ut("ec", e, t);
}
const is = (e) => e ? ar(e) ? Ns(e) || e.proxy : is(e.parent) : null, st = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => is(e.parent),
    $root: (e) => is(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Is(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Rs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Bn.bind(e.proxy)),
    $watch: (e) => To.bind(e)
  })
), Yt = (e, t) => e !== V && !e.__isScriptSetup && S(e, t), jo = {
  get({ _: e }, t) {
    const { ctx: s, setupState: n, data: r, props: o, accessCache: l, type: f, appContext: u } = e;
    let d;
    if (t[0] !== "$") {
      const A = l[t];
      if (A !== void 0)
        switch (A) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return o[t];
        }
      else {
        if (Yt(n, t))
          return l[t] = 1, n[t];
        if (r !== V && S(r, t))
          return l[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && S(d, t)
        )
          return l[t] = 3, o[t];
        if (s !== V && S(s, t))
          return l[t] = 4, s[t];
        ls && (l[t] = 0);
      }
    }
    const p = st[t];
    let x, E;
    if (p)
      return t === "$attrs" && ee(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (x = f.__cssModules) && (x = x[t])
    )
      return x;
    if (s !== V && S(s, t))
      return l[t] = 4, s[t];
    if (
      // global properties
      E = u.config.globalProperties, S(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: o } = e;
    return Yt(r, t) ? (r[t] = s, !0) : n !== V && S(n, t) ? (n[t] = s, !0) : S(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: o }
  }, l) {
    let f;
    return !!s[l] || e !== V && S(e, l) || Yt(t, l) || (f = o[0]) && S(f, l) || S(n, l) || S(st, l) || S(r.config.globalProperties, l);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : S(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Qs(e) {
  return P(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let ls = !0;
function $o(e) {
  const t = Is(e), s = e.proxy, n = e.ctx;
  ls = !1, t.beforeCreate && en(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: l,
    watch: f,
    provide: u,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: x,
    mounted: E,
    beforeUpdate: A,
    updated: $,
    activated: F,
    deactivated: G,
    beforeDestroy: B,
    beforeUnmount: de,
    destroyed: U,
    unmounted: W,
    render: re,
    renderTracked: M,
    renderTriggered: oe,
    errorCaptured: ie,
    serverPrefetch: jt,
    // public API
    expose: Ne,
    inheritAttrs: Ye,
    // assets
    components: ut,
    directives: at,
    filters: $t
  } = t;
  if (d && Ko(d, n, null), l)
    for (const j in l) {
      const D = l[j];
      R(D) && (n[j] = D.bind(s));
    }
  if (r) {
    const j = r.call(s, s);
    K(j) && (e.data = Cs(j));
  }
  if (ls = !0, o)
    for (const j in o) {
      const D = o[j], Fe = R(D) ? D.bind(s, s) : R(D.get) ? D.get.bind(s, s) : ne, dt = !R(D) && R(D.set) ? D.set.bind(s) : ne, Le = Oi({
        get: Fe,
        set: dt
      });
      Object.defineProperty(n, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (he) => Le.value = he
      });
    }
  if (f)
    for (const j in f)
      er(f[j], n, s, j);
  if (u) {
    const j = R(u) ? u.call(s) : u;
    Reflect.ownKeys(j).forEach((D) => {
      ko(D, j[D]);
    });
  }
  p && en(p, e, "c");
  function X(j, D) {
    P(D) ? D.forEach((Fe) => j(Fe.bind(s))) : D && j(D.bind(s));
  }
  if (X(So, x), X(Mo, E), X(No, A), X(Fo, $), X(Po, F), X(Ro, G), X(Vo, ie), X(Ho, M), X(Do, oe), X(Lo, de), X(Qn, W), X(Uo, jt), P(Ne))
    if (Ne.length) {
      const j = e.exposed || (e.exposed = {});
      Ne.forEach((D) => {
        Object.defineProperty(j, D, {
          get: () => s[D],
          set: (Fe) => s[D] = Fe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  re && e.render === ne && (e.render = re), Ye != null && (e.inheritAttrs = Ye), ut && (e.components = ut), at && (e.directives = at);
}
function Ko(e, t, s = ne) {
  P(e) && (e = cs(e));
  for (const n in e) {
    const r = e[n];
    let o;
    K(r) ? "default" in r ? o = yt(
      r.from || n,
      r.default,
      !0
    ) : o = yt(r.from || n) : o = yt(r), te(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (l) => o.value = l
    }) : t[n] = o;
  }
}
function en(e, t, s) {
  ae(
    P(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function er(e, t, s, n) {
  const r = n.includes(".") ? Jn(s, n) : () => s[n];
  if (k(e)) {
    const o = t[e];
    R(o) && kt(r, o);
  } else if (R(e))
    kt(r, e.bind(s));
  else if (K(e))
    if (P(e))
      e.forEach((o) => er(o, t, s, n));
    else {
      const o = R(e.handler) ? e.handler.bind(s) : t[e.handler];
      R(o) && kt(r, o, e);
    }
}
function Is(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: l }
  } = e.appContext, f = o.get(t);
  let u;
  return f ? u = f : !r.length && !s && !n ? u = t : (u = {}, r.length && r.forEach(
    (d) => Tt(u, d, l, !0)
  ), Tt(u, t, l)), K(t) && o.set(t, u), u;
}
function Tt(e, t, s, n = !1) {
  const { mixins: r, extends: o } = t;
  o && Tt(e, o, s, !0), r && r.forEach(
    (l) => Tt(e, l, s, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const f = Bo[l] || s && s[l];
      e[l] = f ? f(e[l], t[l]) : t[l];
    }
  return e;
}
const Bo = {
  data: tn,
  props: sn,
  emits: sn,
  // objects
  methods: Ze,
  computed: Ze,
  // lifecycle
  beforeCreate: Z,
  created: Z,
  beforeMount: Z,
  mounted: Z,
  beforeUpdate: Z,
  updated: Z,
  beforeDestroy: Z,
  beforeUnmount: Z,
  destroyed: Z,
  unmounted: Z,
  activated: Z,
  deactivated: Z,
  errorCaptured: Z,
  serverPrefetch: Z,
  // assets
  components: Ze,
  directives: Ze,
  // watch
  watch: Go,
  // provide / inject
  provide: tn,
  inject: Wo
};
function tn(e, t) {
  return t ? e ? function() {
    return q(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Wo(e, t) {
  return Ze(cs(e), cs(t));
}
function cs(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Z(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ze(e, t) {
  return e ? q(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function sn(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : q(
    /* @__PURE__ */ Object.create(null),
    Qs(e),
    Qs(t ?? {})
  ) : t;
}
function Go(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const s = q(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Z(e[n], t[n]);
  return s;
}
function tr() {
  return {
    app: null,
    config: {
      isNativeTag: gr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let zo = 0;
function qo(e, t) {
  return function(n, r = null) {
    R(n) || (n = q({}, n)), r != null && !K(r) && (r = null);
    const o = tr(), l = /* @__PURE__ */ new WeakSet();
    let f = !1;
    const u = o.app = {
      _uid: zo++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Ti,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...p) {
        return l.has(d) || (d && R(d.install) ? (l.add(d), d.install(u, ...p)) : R(d) && (l.add(d), d(u, ...p))), u;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), u;
      },
      component(d, p) {
        return p ? (o.components[d] = p, u) : o.components[d];
      },
      directive(d, p) {
        return p ? (o.directives[d] = p, u) : o.directives[d];
      },
      mount(d, p, x) {
        if (!f) {
          const E = Ie(n, r);
          return E.appContext = o, x === !0 ? x = "svg" : x === !1 && (x = void 0), p && t ? t(E, d) : e(E, d, x), f = !0, u._container = d, d.__vue_app__ = u, Ns(E.component) || E.component.proxy;
        }
      },
      unmount() {
        f && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(d, p) {
        return o.provides[d] = p, u;
      },
      runWithContext(d) {
        At = u;
        try {
          return d();
        } finally {
          At = null;
        }
      }
    };
    return u;
  };
}
let At = null;
function ko(e, t) {
  if (J) {
    let s = J.provides;
    const n = J.parent && J.parent.provides;
    n === s && (s = J.provides = Object.create(n)), s[e] = t;
  }
}
function yt(e, t, s = !1) {
  const n = J || be;
  if (n || At) {
    const r = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : At._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && R(t) ? t.call(n && n.proxy) : t;
  }
}
function Yo(e, t, s, n = !1) {
  const r = {}, o = {};
  Ct(o, Ht, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), sr(e, t, r, o);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  s ? e.props = n ? r : Qr(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function Jo(e, t, s, n) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: l }
  } = e, f = N(r), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const p = e.vnode.dynamicProps;
      for (let x = 0; x < p.length; x++) {
        let E = p[x];
        if (Lt(e.emitsOptions, E))
          continue;
        const A = t[E];
        if (u)
          if (S(o, E))
            A !== o[E] && (o[E] = A, d = !0);
          else {
            const $ = xe(E);
            r[$] = fs(
              u,
              f,
              $,
              A,
              e,
              !1
            );
          }
        else
          A !== o[E] && (o[E] = A, d = !0);
      }
    }
  } else {
    sr(e, t, r, o) && (d = !0);
    let p;
    for (const x in f)
      (!t || // for camelCase
      !S(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = fe(x)) === x || !S(t, p))) && (u ? s && // for camelCase
      (s[x] !== void 0 || // for kebab-case
      s[p] !== void 0) && (r[x] = fs(
        u,
        f,
        x,
        void 0,
        e,
        !0
      )) : delete r[x]);
    if (o !== f)
      for (const x in o)
        (!t || !S(t, x)) && (delete o[x], d = !0);
  }
  d && ye(e, "set", "$attrs");
}
function sr(e, t, s, n) {
  const [r, o] = e.propsOptions;
  let l = !1, f;
  if (t)
    for (let u in t) {
      if (vt(u))
        continue;
      const d = t[u];
      let p;
      r && S(r, p = xe(u)) ? !o || !o.includes(p) ? s[p] = d : (f || (f = {}))[p] = d : Lt(e.emitsOptions, u) || (!(u in n) || d !== n[u]) && (n[u] = d, l = !0);
    }
  if (o) {
    const u = N(s), d = f || V;
    for (let p = 0; p < o.length; p++) {
      const x = o[p];
      s[x] = fs(
        r,
        u,
        x,
        d[x],
        e,
        !S(d, x)
      );
    }
  }
  return l;
}
function fs(e, t, s, n, r, o) {
  const l = e[s];
  if (l != null) {
    const f = S(l, "default");
    if (f && n === void 0) {
      const u = l.default;
      if (l.type !== Function && !l.skipFactory && R(u)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const p = ft(r);
          n = d[s] = u.call(
            null,
            t
          ), p();
        }
      } else
        n = u;
    }
    l[
      0
      /* shouldCast */
    ] && (o && !f ? n = !1 : l[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === fe(s)) && (n = !0));
  }
  return n;
}
function nr(e, t, s = !1) {
  const n = t.propsCache, r = n.get(e);
  if (r)
    return r;
  const o = e.props, l = {}, f = [];
  let u = !1;
  if (!R(e)) {
    const p = (x) => {
      u = !0;
      const [E, A] = nr(x, t, !0);
      q(l, E), A && f.push(...A);
    };
    !s && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!o && !u)
    return K(e) && n.set(e, Ge), Ge;
  if (P(o))
    for (let p = 0; p < o.length; p++) {
      const x = xe(o[p]);
      nn(x) && (l[x] = V);
    }
  else if (o)
    for (const p in o) {
      const x = xe(p);
      if (nn(x)) {
        const E = o[p], A = l[x] = P(E) || R(E) ? { type: E } : q({}, E);
        if (A) {
          const $ = ln(Boolean, A.type), F = ln(String, A.type);
          A[
            0
            /* shouldCast */
          ] = $ > -1, A[
            1
            /* shouldCastTrue */
          ] = F < 0 || $ < F, ($ > -1 || S(A, "default")) && f.push(x);
        }
      }
    }
  const d = [l, f];
  return K(e) && n.set(e, d), d;
}
function nn(e) {
  return e[0] !== "$";
}
function rn(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function on(e, t) {
  return rn(e) === rn(t);
}
function ln(e, t) {
  return P(t) ? t.findIndex((s) => on(s, e)) : R(t) && on(t, e) ? 0 : -1;
}
const rr = (e) => e[0] === "_" || e === "$stable", Ss = (e) => P(e) ? e.map(ge) : [ge(e)], Xo = (e, t, s) => {
  if (t._n)
    return t;
  const n = go((...r) => (et.NODE_ENV, Ss(t(...r))), s);
  return n._c = !1, n;
}, or = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (rr(r))
      continue;
    const o = e[r];
    if (R(o))
      t[r] = Xo(r, o, n);
    else if (o != null) {
      const l = Ss(o);
      t[r] = () => l;
    }
  }
}, ir = (e, t) => {
  const s = Ss(t);
  e.slots.default = () => s;
}, Zo = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (e.slots = N(t), Ct(t, "_", s)) : or(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && ir(e, t);
  Ct(e.slots, Ht, 1);
}, Qo = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let o = !0, l = V;
  if (n.shapeFlag & 32) {
    const f = t._;
    f ? s && f === 1 ? o = !1 : (q(r, t), !s && f === 1 && delete r._) : (o = !t.$stable, or(t, r)), l = t;
  } else
    t && (ir(e, t), l = { default: 1 });
  if (o)
    for (const f in r)
      !rr(f) && l[f] == null && delete r[f];
};
function us(e, t, s, n, r = !1) {
  if (P(e)) {
    e.forEach(
      (E, A) => us(
        E,
        t && (P(t) ? t[A] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (xt(n) && !r)
    return;
  const o = n.shapeFlag & 4 ? Ns(n.component) || n.component.proxy : n.el, l = r ? null : o, { i: f, r: u } = e, d = t && t.r, p = f.refs === V ? f.refs = {} : f.refs, x = f.setupState;
  if (d != null && d !== u && (k(d) ? (p[d] = null, S(x, d) && (x[d] = null)) : te(d) && (d.value = null)), R(u))
    Ee(u, f, 12, [l, p]);
  else {
    const E = k(u), A = te(u);
    if (E || A) {
      const $ = () => {
        if (e.f) {
          const F = E ? S(x, u) ? x[u] : p[u] : u.value;
          r ? P(F) && _s(F, o) : P(F) ? F.includes(o) || F.push(o) : E ? (p[u] = [o], S(x, u) && (x[u] = p[u])) : (u.value = [o], e.k && (p[e.k] = u.value));
        } else
          E ? (p[u] = l, S(x, u) && (x[u] = l)) : A && (u.value = l, e.k && (p[e.k] = l));
      };
      l ? ($.id = -1, Q($, s)) : $();
    }
  }
}
const Q = Eo;
function ei(e) {
  return ti(e);
}
function ti(e, t) {
  const s = En();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: o,
    createElement: l,
    createText: f,
    createComment: u,
    setText: d,
    setElementText: p,
    parentNode: x,
    nextSibling: E,
    setScopeId: A = ne,
    insertStaticContent: $
  } = e, F = (i, c, a, h = null, _ = null, b = null, v = void 0, m = null, w = !!c.dynamicChildren) => {
    if (i === c)
      return;
    i && !Xe(i, c) && (h = ht(i), he(i, _, b, !0), i = null), c.patchFlag === -2 && (w = !1, c.dynamicChildren = null);
    const { type: g, ref: y, shapeFlag: O } = c;
    switch (g) {
      case Dt:
        G(i, c, a, h);
        break;
      case lt:
        B(i, c, a, h);
        break;
      case Xt:
        i == null && de(c, a, h, v);
        break;
      case ve:
        ut(
          i,
          c,
          a,
          h,
          _,
          b,
          v,
          m,
          w
        );
        break;
      default:
        O & 1 ? re(
          i,
          c,
          a,
          h,
          _,
          b,
          v,
          m,
          w
        ) : O & 6 ? at(
          i,
          c,
          a,
          h,
          _,
          b,
          v,
          m,
          w
        ) : (O & 64 || O & 128) && g.process(
          i,
          c,
          a,
          h,
          _,
          b,
          v,
          m,
          w,
          Ke
        );
    }
    y != null && _ && us(y, i && i.ref, b, c || i, !c);
  }, G = (i, c, a, h) => {
    if (i == null)
      n(
        c.el = f(c.children),
        a,
        h
      );
    else {
      const _ = c.el = i.el;
      c.children !== i.children && d(_, c.children);
    }
  }, B = (i, c, a, h) => {
    i == null ? n(
      c.el = u(c.children || ""),
      a,
      h
    ) : c.el = i.el;
  }, de = (i, c, a, h) => {
    [i.el, i.anchor] = $(
      i.children,
      c,
      a,
      h,
      i.el,
      i.anchor
    );
  }, U = ({ el: i, anchor: c }, a, h) => {
    let _;
    for (; i && i !== c; )
      _ = E(i), n(i, a, h), i = _;
    n(c, a, h);
  }, W = ({ el: i, anchor: c }) => {
    let a;
    for (; i && i !== c; )
      a = E(i), r(i), i = a;
    r(c);
  }, re = (i, c, a, h, _, b, v, m, w) => {
    c.type === "svg" ? v = "svg" : c.type === "math" && (v = "mathml"), i == null ? M(
      c,
      a,
      h,
      _,
      b,
      v,
      m,
      w
    ) : jt(
      i,
      c,
      _,
      b,
      v,
      m,
      w
    );
  }, M = (i, c, a, h, _, b, v, m) => {
    let w, g;
    const { props: y, shapeFlag: O, transition: C, dirs: T } = i;
    if (w = i.el = l(
      i.type,
      b,
      y && y.is,
      y
    ), O & 8 ? p(w, i.children) : O & 16 && ie(
      i.children,
      w,
      null,
      h,
      _,
      Jt(i, b),
      v,
      m
    ), T && Ue(i, null, h, "created"), oe(w, i, i.scopeId, v, h), y) {
      for (const L in y)
        L !== "value" && !vt(L) && o(
          w,
          L,
          null,
          y[L],
          b,
          i.children,
          h,
          _,
          we
        );
      "value" in y && o(w, "value", null, y.value, b), (g = y.onVnodeBeforeMount) && _e(g, h, i);
    }
    T && Ue(i, null, h, "beforeMount");
    const I = si(_, C);
    I && C.beforeEnter(w), n(w, c, a), ((g = y && y.onVnodeMounted) || I || T) && Q(() => {
      g && _e(g, h, i), I && C.enter(w), T && Ue(i, null, h, "mounted");
    }, _);
  }, oe = (i, c, a, h, _) => {
    if (a && A(i, a), h)
      for (let b = 0; b < h.length; b++)
        A(i, h[b]);
    if (_) {
      let b = _.subTree;
      if (c === b) {
        const v = _.vnode;
        oe(
          i,
          v,
          v.scopeId,
          v.slotScopeIds,
          _.parent
        );
      }
    }
  }, ie = (i, c, a, h, _, b, v, m, w = 0) => {
    for (let g = w; g < i.length; g++) {
      const y = i[g] = m ? Ae(i[g]) : ge(i[g]);
      F(
        null,
        y,
        c,
        a,
        h,
        _,
        b,
        v,
        m
      );
    }
  }, jt = (i, c, a, h, _, b, v) => {
    const m = c.el = i.el;
    let { patchFlag: w, dynamicChildren: g, dirs: y } = c;
    w |= i.patchFlag & 16;
    const O = i.props || V, C = c.props || V;
    let T;
    if (a && De(a, !1), (T = C.onVnodeBeforeUpdate) && _e(T, a, c, i), y && Ue(c, i, a, "beforeUpdate"), a && De(a, !0), g ? Ne(
      i.dynamicChildren,
      g,
      m,
      a,
      h,
      Jt(c, _),
      b
    ) : v || D(
      i,
      c,
      m,
      null,
      a,
      h,
      Jt(c, _),
      b,
      !1
    ), w > 0) {
      if (w & 16)
        Ye(
          m,
          c,
          O,
          C,
          a,
          h,
          _
        );
      else if (w & 2 && O.class !== C.class && o(m, "class", null, C.class, _), w & 4 && o(m, "style", O.style, C.style, _), w & 8) {
        const I = c.dynamicProps;
        for (let L = 0; L < I.length; L++) {
          const H = I[L], z = O[H], le = C[H];
          (le !== z || H === "value") && o(
            m,
            H,
            z,
            le,
            _,
            i.children,
            a,
            h,
            we
          );
        }
      }
      w & 1 && i.children !== c.children && p(m, c.children);
    } else
      !v && g == null && Ye(
        m,
        c,
        O,
        C,
        a,
        h,
        _
      );
    ((T = C.onVnodeUpdated) || y) && Q(() => {
      T && _e(T, a, c, i), y && Ue(c, i, a, "updated");
    }, h);
  }, Ne = (i, c, a, h, _, b, v) => {
    for (let m = 0; m < c.length; m++) {
      const w = i[m], g = c[m], y = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xe(w, g) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 70) ? x(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          a
        )
      );
      F(
        w,
        g,
        y,
        null,
        h,
        _,
        b,
        v,
        !0
      );
    }
  }, Ye = (i, c, a, h, _, b, v) => {
    if (a !== h) {
      if (a !== V)
        for (const m in a)
          !vt(m) && !(m in h) && o(
            i,
            m,
            a[m],
            null,
            v,
            c.children,
            _,
            b,
            we
          );
      for (const m in h) {
        if (vt(m))
          continue;
        const w = h[m], g = a[m];
        w !== g && m !== "value" && o(
          i,
          m,
          g,
          w,
          v,
          c.children,
          _,
          b,
          we
        );
      }
      "value" in h && o(i, "value", a.value, h.value, v);
    }
  }, ut = (i, c, a, h, _, b, v, m, w) => {
    const g = c.el = i ? i.el : f(""), y = c.anchor = i ? i.anchor : f("");
    let { patchFlag: O, dynamicChildren: C, slotScopeIds: T } = c;
    T && (m = m ? m.concat(T) : T), i == null ? (n(g, a, h), n(y, a, h), ie(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      c.children || [],
      a,
      y,
      _,
      b,
      v,
      m,
      w
    )) : O > 0 && O & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    i.dynamicChildren ? (Ne(
      i.dynamicChildren,
      C,
      a,
      _,
      b,
      v,
      m
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (c.key != null || _ && c === _.subTree) && lr(
      i,
      c,
      !0
      /* shallow */
    )) : D(
      i,
      c,
      a,
      y,
      _,
      b,
      v,
      m,
      w
    );
  }, at = (i, c, a, h, _, b, v, m, w) => {
    c.slotScopeIds = m, i == null ? c.shapeFlag & 512 ? _.ctx.activate(
      c,
      a,
      h,
      v,
      w
    ) : $t(
      c,
      a,
      h,
      _,
      b,
      v,
      w
    ) : Ls(i, c, w);
  }, $t = (i, c, a, h, _, b, v) => {
    const m = i.component = gi(
      i,
      h,
      _
    );
    if (Xn(i) && (m.ctx.renderer = Ke), mi(m), m.asyncDep) {
      if (_ && _.registerDep(m, X), !i.el) {
        const w = m.subTree = Ie(lt);
        B(null, w, c, a);
      }
    } else
      X(
        m,
        i,
        c,
        a,
        _,
        b,
        v
      );
  }, Ls = (i, c, a) => {
    const h = c.component = i.component;
    if (wo(i, c, a))
      if (h.asyncDep && !h.asyncResolved) {
        j(h, c, a);
        return;
      } else
        h.next = c, ao(h.update), h.effect.dirty = !0, h.update();
    else
      c.el = i.el, h.vnode = c;
  }, X = (i, c, a, h, _, b, v) => {
    const m = () => {
      if (i.isMounted) {
        let { next: y, bu: O, u: C, parent: T, vnode: I } = i;
        {
          const Be = cr(i);
          if (Be) {
            y && (y.el = I.el, j(i, y, v)), Be.asyncDep.then(() => {
              i.isUnmounted || m();
            });
            return;
          }
        }
        let L = y, H;
        De(i, !1), y ? (y.el = I.el, j(i, y, v)) : y = I, O && zt(O), (H = y.props && y.props.onVnodeBeforeUpdate) && _e(H, T, y, I), De(i, !0);
        const z = qt(i), le = i.subTree;
        i.subTree = z, F(
          le,
          z,
          // parent may have changed if it's in a teleport
          x(le.el),
          // anchor may have changed if it's in a fragment
          ht(le),
          i,
          _,
          b
        ), y.el = z.el, L === null && vo(i, z.el), C && Q(C, _), (H = y.props && y.props.onVnodeUpdated) && Q(
          () => _e(H, T, y, I),
          _
        );
      } else {
        let y;
        const { el: O, props: C } = c, { bm: T, m: I, parent: L } = i, H = xt(c);
        if (De(i, !1), T && zt(T), !H && (y = C && C.onVnodeBeforeMount) && _e(y, L, c), De(i, !0), O && Wt) {
          const z = () => {
            i.subTree = qt(i), Wt(
              O,
              i.subTree,
              i,
              _,
              null
            );
          };
          H ? c.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !i.isUnmounted && z()
          ) : z();
        } else {
          const z = i.subTree = qt(i);
          F(
            null,
            z,
            a,
            h,
            i,
            _,
            b
          ), c.el = z.el;
        }
        if (I && Q(I, _), !H && (y = C && C.onVnodeMounted)) {
          const z = c;
          Q(
            () => _e(y, L, z),
            _
          );
        }
        (c.shapeFlag & 256 || L && xt(L.vnode) && L.vnode.shapeFlag & 256) && i.a && Q(i.a, _), i.isMounted = !0, c = a = h = null;
      }
    }, w = i.effect = new ws(
      m,
      ne,
      () => Rs(g),
      i.scope
      // track it in component's effect scope
    ), g = i.update = () => {
      w.dirty && w.run();
    };
    g.id = i.uid, De(i, !0), g();
  }, j = (i, c, a) => {
    c.component = i;
    const h = i.vnode.props;
    i.vnode = c, i.next = null, Jo(i, c.props, h, a), Qo(i, c.children, a), Se(), Xs(i), Me();
  }, D = (i, c, a, h, _, b, v, m, w = !1) => {
    const g = i && i.children, y = i ? i.shapeFlag : 0, O = c.children, { patchFlag: C, shapeFlag: T } = c;
    if (C > 0) {
      if (C & 128) {
        dt(
          g,
          O,
          a,
          h,
          _,
          b,
          v,
          m,
          w
        );
        return;
      } else if (C & 256) {
        Fe(
          g,
          O,
          a,
          h,
          _,
          b,
          v,
          m,
          w
        );
        return;
      }
    }
    T & 8 ? (y & 16 && we(g, _, b), O !== g && p(a, O)) : y & 16 ? T & 16 ? dt(
      g,
      O,
      a,
      h,
      _,
      b,
      v,
      m,
      w
    ) : we(g, _, b, !0) : (y & 8 && p(a, ""), T & 16 && ie(
      O,
      a,
      h,
      _,
      b,
      v,
      m,
      w
    ));
  }, Fe = (i, c, a, h, _, b, v, m, w) => {
    i = i || Ge, c = c || Ge;
    const g = i.length, y = c.length, O = Math.min(g, y);
    let C;
    for (C = 0; C < O; C++) {
      const T = c[C] = w ? Ae(c[C]) : ge(c[C]);
      F(
        i[C],
        T,
        a,
        null,
        _,
        b,
        v,
        m,
        w
      );
    }
    g > y ? we(
      i,
      _,
      b,
      !0,
      !1,
      O
    ) : ie(
      c,
      a,
      h,
      _,
      b,
      v,
      m,
      w,
      O
    );
  }, dt = (i, c, a, h, _, b, v, m, w) => {
    let g = 0;
    const y = c.length;
    let O = i.length - 1, C = y - 1;
    for (; g <= O && g <= C; ) {
      const T = i[g], I = c[g] = w ? Ae(c[g]) : ge(c[g]);
      if (Xe(T, I))
        F(
          T,
          I,
          a,
          null,
          _,
          b,
          v,
          m,
          w
        );
      else
        break;
      g++;
    }
    for (; g <= O && g <= C; ) {
      const T = i[O], I = c[C] = w ? Ae(c[C]) : ge(c[C]);
      if (Xe(T, I))
        F(
          T,
          I,
          a,
          null,
          _,
          b,
          v,
          m,
          w
        );
      else
        break;
      O--, C--;
    }
    if (g > O) {
      if (g <= C) {
        const T = C + 1, I = T < y ? c[T].el : h;
        for (; g <= C; )
          F(
            null,
            c[g] = w ? Ae(c[g]) : ge(c[g]),
            a,
            I,
            _,
            b,
            v,
            m,
            w
          ), g++;
      }
    } else if (g > C)
      for (; g <= O; )
        he(i[g], _, b, !0), g++;
    else {
      const T = g, I = g, L = /* @__PURE__ */ new Map();
      for (g = I; g <= C; g++) {
        const se = c[g] = w ? Ae(c[g]) : ge(c[g]);
        se.key != null && L.set(se.key, g);
      }
      let H, z = 0;
      const le = C - I + 1;
      let Be = !1, Hs = 0;
      const Je = new Array(le);
      for (g = 0; g < le; g++)
        Je[g] = 0;
      for (g = T; g <= O; g++) {
        const se = i[g];
        if (z >= le) {
          he(se, _, b, !0);
          continue;
        }
        let pe;
        if (se.key != null)
          pe = L.get(se.key);
        else
          for (H = I; H <= C; H++)
            if (Je[H - I] === 0 && Xe(se, c[H])) {
              pe = H;
              break;
            }
        pe === void 0 ? he(se, _, b, !0) : (Je[pe - I] = g + 1, pe >= Hs ? Hs = pe : Be = !0, F(
          se,
          c[pe],
          a,
          null,
          _,
          b,
          v,
          m,
          w
        ), z++);
      }
      const Vs = Be ? ni(Je) : Ge;
      for (H = Vs.length - 1, g = le - 1; g >= 0; g--) {
        const se = I + g, pe = c[se], js = se + 1 < y ? c[se + 1].el : h;
        Je[g] === 0 ? F(
          null,
          pe,
          a,
          js,
          _,
          b,
          v,
          m,
          w
        ) : Be && (H < 0 || g !== Vs[H] ? Le(pe, a, js, 2) : H--);
      }
    }
  }, Le = (i, c, a, h, _ = null) => {
    const { el: b, type: v, transition: m, children: w, shapeFlag: g } = i;
    if (g & 6) {
      Le(i.component.subTree, c, a, h);
      return;
    }
    if (g & 128) {
      i.suspense.move(c, a, h);
      return;
    }
    if (g & 64) {
      v.move(i, c, a, Ke);
      return;
    }
    if (v === ve) {
      n(b, c, a);
      for (let O = 0; O < w.length; O++)
        Le(w[O], c, a, h);
      n(i.anchor, c, a);
      return;
    }
    if (v === Xt) {
      U(i, c, a);
      return;
    }
    if (h !== 2 && g & 1 && m)
      if (h === 0)
        m.beforeEnter(b), n(b, c, a), Q(() => m.enter(b), _);
      else {
        const { leave: O, delayLeave: C, afterLeave: T } = m, I = () => n(b, c, a), L = () => {
          O(b, () => {
            I(), T && T();
          });
        };
        C ? C(b, I, L) : L();
      }
    else
      n(b, c, a);
  }, he = (i, c, a, h = !1, _ = !1) => {
    const {
      type: b,
      props: v,
      ref: m,
      children: w,
      dynamicChildren: g,
      shapeFlag: y,
      patchFlag: O,
      dirs: C
    } = i;
    if (m != null && us(m, null, a, i, !0), y & 256) {
      c.ctx.deactivate(i);
      return;
    }
    const T = y & 1 && C, I = !xt(i);
    let L;
    if (I && (L = v && v.onVnodeBeforeUnmount) && _e(L, c, i), y & 6)
      _r(i.component, a, h);
    else {
      if (y & 128) {
        i.suspense.unmount(a, h);
        return;
      }
      T && Ue(i, null, c, "beforeUnmount"), y & 64 ? i.type.remove(
        i,
        c,
        a,
        _,
        Ke,
        h
      ) : g && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== ve || O > 0 && O & 64) ? we(
        g,
        c,
        a,
        !1,
        !0
      ) : (b === ve && O & 384 || !_ && y & 16) && we(w, c, a), h && Us(i);
    }
    (I && (L = v && v.onVnodeUnmounted) || T) && Q(() => {
      L && _e(L, c, i), T && Ue(i, null, c, "unmounted");
    }, a);
  }, Us = (i) => {
    const { type: c, el: a, anchor: h, transition: _ } = i;
    if (c === ve) {
      pr(a, h);
      return;
    }
    if (c === Xt) {
      W(i);
      return;
    }
    const b = () => {
      r(a), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (i.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: v, delayLeave: m } = _, w = () => v(a, b);
      m ? m(i.el, b, w) : w();
    } else
      b();
  }, pr = (i, c) => {
    let a;
    for (; i !== c; )
      a = E(i), r(i), i = a;
    r(c);
  }, _r = (i, c, a) => {
    const { bum: h, scope: _, update: b, subTree: v, um: m } = i;
    h && zt(h), _.stop(), b && (b.active = !1, he(v, i, c, a)), m && Q(m, c), Q(() => {
      i.isUnmounted = !0;
    }, c), c && c.pendingBranch && !c.isUnmounted && i.asyncDep && !i.asyncResolved && i.suspenseId === c.pendingId && (c.deps--, c.deps === 0 && c.resolve());
  }, we = (i, c, a, h = !1, _ = !1, b = 0) => {
    for (let v = b; v < i.length; v++)
      he(i[v], c, a, h, _);
  }, ht = (i) => i.shapeFlag & 6 ? ht(i.component.subTree) : i.shapeFlag & 128 ? i.suspense.next() : E(i.anchor || i.el);
  let Kt = !1;
  const Ds = (i, c, a) => {
    i == null ? c._vnode && he(c._vnode, null, null, !0) : F(
      c._vnode || null,
      i,
      c,
      null,
      null,
      null,
      a
    ), Kt || (Kt = !0, Xs(), Gn(), Kt = !1), c._vnode = i;
  }, Ke = {
    p: F,
    um: he,
    m: Le,
    r: Us,
    mt: $t,
    mc: ie,
    pc: D,
    pbc: Ne,
    n: ht,
    o: e
  };
  let Bt, Wt;
  return t && ([Bt, Wt] = t(
    Ke
  )), {
    render: Ds,
    hydrate: Bt,
    createApp: qo(Ds, Bt)
  };
}
function Jt({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function De({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s;
}
function si(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function lr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (P(n) && P(r))
    for (let o = 0; o < n.length; o++) {
      const l = n[o];
      let f = r[o];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = r[o] = Ae(r[o]), f.el = l.el), s || lr(l, f)), f.type === Dt && (f.el = l.el);
    }
}
function ni(e) {
  const t = e.slice(), s = [0];
  let n, r, o, l, f;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const d = e[n];
    if (d !== 0) {
      if (r = s[s.length - 1], e[r] < d) {
        t[n] = r, s.push(n);
        continue;
      }
      for (o = 0, l = s.length - 1; o < l; )
        f = o + l >> 1, e[s[f]] < d ? o = f + 1 : l = f;
      d < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, l = s[o - 1]; o-- > 0; )
    s[o] = l, l = t[l];
  return s;
}
function cr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : cr(t);
}
const ri = (e) => e.__isTeleport, ve = Symbol.for("v-fgt"), Dt = Symbol.for("v-txt"), lt = Symbol.for("v-cmt"), Xt = Symbol.for("v-stc"), nt = [];
let ue = null;
function oi(e = !1) {
  nt.push(ue = e ? null : []);
}
function ii() {
  nt.pop(), ue = nt[nt.length - 1] || null;
}
let ct = 1;
function cn(e) {
  ct += e;
}
function li(e) {
  return e.dynamicChildren = ct > 0 ? ue || Ge : null, ii(), ct > 0 && ue && ue.push(e), e;
}
function ci(e, t, s, n, r, o) {
  return li(
    ur(
      e,
      t,
      s,
      n,
      r,
      o,
      !0
    )
  );
}
function fi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xe(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ht = "__vInternal", fr = ({ key: e }) => e ?? null, Et = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? k(e) || te(e) || R(e) ? { i: be, r: e, k: t, f: !!s } : e : null);
function ur(e, t = null, s = null, n = 0, r = null, o = e === ve ? 0 : 1, l = !1, f = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fr(t),
    ref: t && Et(t),
    scopeId: kn,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: be
  };
  return f ? (Ms(u, s), o & 128 && e.normalize(u)) : s && (u.shapeFlag |= k(s) ? 8 : 16), ct > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ue && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ue.push(u), u;
}
const Ie = ui;
function ui(e, t = null, s = null, n = 0, r = null, o = !1) {
  if ((!e || e === xo) && (e = lt), fi(e)) {
    const f = ke(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ms(f, s), ct > 0 && !o && ue && (f.shapeFlag & 6 ? ue[ue.indexOf(e)] = f : ue.push(f)), f.patchFlag |= -2, f;
  }
  if (Ci(e) && (e = e.__vccOpts), t) {
    t = ai(t);
    let { class: f, style: u } = t;
    f && !k(f) && (t.class = bs(f)), K(u) && (Dn(u) && !P(u) && (u = q({}, u)), t.style = ms(u));
  }
  const l = k(e) ? 1 : yo(e) ? 128 : ri(e) ? 64 : K(e) ? 4 : R(e) ? 2 : 0;
  return ur(
    e,
    t,
    s,
    n,
    r,
    l,
    o,
    !0
  );
}
function ai(e) {
  return e ? Dn(e) || Ht in e ? q({}, e) : e : null;
}
function ke(e, t, s = !1) {
  const { props: n, ref: r, patchFlag: o, children: l } = e, f = t ? hi(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && fr(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? P(r) ? r.concat(Et(t)) : [r, Et(t)] : Et(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ve ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ke(e.ssContent),
    ssFallback: e.ssFallback && ke(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function di(e = " ", t = 0) {
  return Ie(Dt, null, e, t);
}
function ge(e) {
  return e == null || typeof e == "boolean" ? Ie(lt) : P(e) ? Ie(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ae(e) : Ie(Dt, null, String(e));
}
function Ae(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ke(e);
}
function Ms(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (P(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ms(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !(Ht in t) ? t._ctx = be : r === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: be }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [di(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function hi(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = bs([t.class, n.class]));
      else if (r === "style")
        t.style = ms([t.style, n.style]);
      else if (Rt(r)) {
        const o = t[r], l = n[r];
        l && o !== l && !(P(o) && o.includes(l)) && (t[r] = o ? [].concat(o, l) : l);
      } else
        r !== "" && (t[r] = n[r]);
  }
  return t;
}
function _e(e, t, s, n = null) {
  ae(e, t, 7, [
    s,
    n
  ]);
}
const pi = tr();
let _i = 0;
function gi(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || pi, o = {
    uid: _i++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Sr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: nr(n, r),
    emitsOptions: qn(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: V,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: V,
    data: V,
    props: V,
    attrs: V,
    slots: V,
    refs: V,
    setupState: V,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = _o.bind(null, o), e.ce && e.ce(o), o;
}
let J = null, Pt, as;
{
  const e = En(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (o) => {
      r.length > 1 ? r.forEach((l) => l(o)) : r[0](o);
    };
  };
  Pt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => J = s
  ), as = t(
    "__VUE_SSR_SETTERS__",
    (s) => Vt = s
  );
}
const ft = (e) => {
  const t = J;
  return Pt(e), e.scope.on(), () => {
    e.scope.off(), Pt(t);
  };
}, fn = () => {
  J && J.scope.off(), Pt(null);
};
function ar(e) {
  return e.vnode.shapeFlag & 4;
}
let Vt = !1;
function mi(e, t = !1) {
  t && as(t);
  const { props: s, children: n } = e.vnode, r = ar(e);
  Yo(e, s, r, t), Zo(e, n);
  const o = r ? bi(e, t) : void 0;
  return t && as(!1), o;
}
function bi(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Hn(new Proxy(e.ctx, jo));
  const { setup: n } = s;
  if (n) {
    const r = e.setupContext = n.length > 1 ? vi(e) : null, o = ft(e);
    Se();
    const l = Ee(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (Me(), o(), xn(l)) {
      if (l.then(fn, fn), t)
        return l.then((f) => {
          un(e, f, t);
        }).catch((f) => {
          Ft(f, e, 0);
        });
      e.asyncDep = l;
    } else
      un(e, l, t);
  } else
    dr(e, t);
}
function un(e, t, s) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) && (e.setupState = jn(t)), dr(e, s);
}
let an;
function dr(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && an && !n.render) {
      const r = n.template || Is(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: l } = e.appContext.config, { delimiters: f, compilerOptions: u } = n, d = q(
          q(
            {
              isCustomElement: o,
              delimiters: f
            },
            l
          ),
          u
        );
        n.render = an(r, d);
      }
    }
    e.render = n.render || ne;
  }
  {
    const r = ft(e);
    Se();
    try {
      $o(e);
    } finally {
      Me(), r();
    }
  }
}
function wi(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, s) {
        return ee(e, "get", "$attrs"), t[s];
      }
    }
  ));
}
function vi(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    get attrs() {
      return wi(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ns(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(jn(Hn(e.exposed)), {
      get(t, s) {
        if (s in t)
          return t[s];
        if (s in st)
          return st[s](e);
      },
      has(t, s) {
        return s in t || s in st;
      }
    }));
}
const xi = /(?:^|[-_])(\w)/g, yi = (e) => e.replace(xi, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ei(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function hr(e, t, s = !1) {
  let n = Ei(t);
  if (!n && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (n = r[1]);
  }
  if (!n && e && e.parent) {
    const r = (o) => {
      for (const l in o)
        if (o[l] === t)
          return l;
    };
    n = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return n ? yi(n) : s ? "App" : "Anonymous";
}
function Ci(e) {
  return R(e) && "__vccOpts" in e;
}
const Oi = (e, t) => eo(e, t, Vt), Ti = "3.4.12", Ai = "http://www.w3.org/2000/svg", Pi = "http://www.w3.org/1998/Math/MathML", Pe = typeof document < "u" ? document : null, dn = Pe && /* @__PURE__ */ Pe.createElement("template"), Ri = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Pe.createElementNS(Ai, e) : t === "mathml" ? Pe.createElementNS(Pi, e) : Pe.createElement(e, s ? { is: s } : void 0);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Pe.createTextNode(e),
  createComment: (e) => Pe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Pe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, o) {
    const l = s ? s.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      dn.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const f = dn.content;
      if (n === "svg" || n === "mathml") {
        const u = f.firstChild;
        for (; u.firstChild; )
          f.appendChild(u.firstChild);
        f.removeChild(u);
      }
      t.insertBefore(f, s);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Ii = Symbol("_vtc");
function Si(e, t, s) {
  const n = e[Ii];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Mi = Symbol("_vod"), Ni = Symbol("");
function Fi(e, t, s) {
  const n = e.style, r = n.display, o = k(s);
  if (s && !o) {
    if (t && !k(t))
      for (const l in t)
        s[l] == null && ds(n, l, "");
    for (const l in s)
      ds(n, l, s[l]);
  } else if (o) {
    if (t !== s) {
      const l = n[Ni];
      l && (s += ";" + l), n.cssText = s;
    }
  } else
    t && e.removeAttribute("style");
  Mi in e && (n.display = r);
}
const hn = /\s*!important$/;
function ds(e, t, s) {
  if (P(s))
    s.forEach((n) => ds(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Li(e, t);
    hn.test(s) ? e.setProperty(
      fe(n),
      s.replace(hn, ""),
      "important"
    ) : e[n] = s;
  }
}
const pn = ["Webkit", "Moz", "ms"], Zt = {};
function Li(e, t) {
  const s = Zt[t];
  if (s)
    return s;
  let n = xe(t);
  if (n !== "filter" && n in e)
    return Zt[t] = n;
  n = yn(n);
  for (let r = 0; r < pn.length; r++) {
    const o = pn[r] + n;
    if (o in e)
      return Zt[t] = o;
  }
  return t;
}
const _n = "http://www.w3.org/1999/xlink";
function Ui(e, t, s, n, r) {
  if (n && t.startsWith("xlink:"))
    s == null ? e.removeAttributeNS(_n, t.slice(6, t.length)) : e.setAttributeNS(_n, t, s);
  else {
    const o = Ir(t);
    s == null || o && !Cn(s) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : s);
  }
}
function Di(e, t, s, n, r, o, l) {
  if (t === "innerHTML" || t === "textContent") {
    n && l(n, r, o), e[t] = s ?? "";
    return;
  }
  const f = e.tagName;
  if (t === "value" && f !== "PROGRESS" && // custom elements may use _value internally
  !f.includes("-")) {
    e._value = s;
    const d = f === "OPTION" ? e.getAttribute("value") : e.value, p = s ?? "";
    d !== p && (e.value = p), s == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (s === "" || s == null) {
    const d = typeof e[t];
    d === "boolean" ? s = Cn(s) : s == null && d === "string" ? (s = "", u = !0) : d === "number" && (s = 0, u = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  u && e.removeAttribute(t);
}
function Hi(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Vi(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const gn = Symbol("_vei");
function ji(e, t, s, n, r = null) {
  const o = e[gn] || (e[gn] = {}), l = o[t];
  if (n && l)
    l.value = n;
  else {
    const [f, u] = $i(t);
    if (n) {
      const d = o[t] = Wi(n, r);
      Hi(e, f, d, u);
    } else
      l && (Vi(e, f, l, u), o[t] = void 0);
  }
}
const mn = /(?:Once|Passive|Capture)$/;
function $i(e) {
  let t;
  if (mn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(mn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : fe(e.slice(2)), t];
}
let Qt = 0;
const Ki = /* @__PURE__ */ Promise.resolve(), Bi = () => Qt || (Ki.then(() => Qt = 0), Qt = Date.now());
function Wi(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    ae(
      Gi(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Bi(), s;
}
function Gi(e, t) {
  if (P(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map((n) => (r) => !r._stopped && n && n(r));
  } else
    return t;
}
const bn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, zi = (e, t, s, n, r, o, l, f, u) => {
  const d = r === "svg";
  t === "class" ? Si(e, n, d) : t === "style" ? Fi(e, s, n) : Rt(t) ? ps(t) || ji(e, t, s, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qi(e, t, n, d)) ? Di(
    e,
    t,
    n,
    o,
    l,
    f,
    u
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ui(e, t, n, d));
};
function qi(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && bn(t) && R(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return bn(t) && k(s) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ki(e, t) {
  const s = /* @__PURE__ */ Ao(e);
  class n extends Fs {
    constructor(o) {
      super(s, o, t);
    }
  }
  return n.def = s, n;
}
const Yi = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Fs extends Yi {
  constructor(t, s = {}, n) {
    super(), this._def = t, this._props = s, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Bn(() => {
      this._connected || (vn(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const r of n)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, r = !1) => {
      const { props: o, styles: l } = n;
      let f;
      if (o && !P(o))
        for (const u in o) {
          const d = o[u];
          (d === Number || d && d.type === Number) && (u in this._props && (this._props[u] = $s(this._props[u])), (f || (f = /* @__PURE__ */ Object.create(null)))[xe(u)] = !0);
        }
      this._numberProps = f, r && this._resolveProps(n), this._applyStyles(l), this._update();
    }, s = this._def.__asyncLoader;
    s ? s().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: s } = t, n = P(s) ? s : Object.keys(s || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && n.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of n.map(xe))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o);
        }
      });
  }
  _setAttr(t) {
    let s = this.getAttribute(t);
    const n = xe(t);
    this._numberProps && this._numberProps[n] && (s = $s(s)), this._setProp(n, s, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, s, n = !0, r = !0) {
    s !== this._props[t] && (this._props[t] = s, r && this._instance && this._update(), n && (s === !0 ? this.setAttribute(fe(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(fe(t), s + "") : s || this.removeAttribute(fe(t))));
  }
  _update() {
    vn(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Ie(this._def, q({}, this._props));
    return this._instance || (t.ce = (s) => {
      this._instance = s, s.isCE = !0;
      const n = (o, l) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: l
          })
        );
      };
      s.emit = (o, ...l) => {
        n(o, l), fe(o) !== o && n(fe(o), l);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Fs) {
          s.parent = r._instance, s.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((s) => {
      const n = document.createElement("style");
      n.textContent = s, this.shadowRoot.appendChild(n);
    });
  }
}
const Ji = /* @__PURE__ */ q({ patchProp: zi }, Ri);
let wn;
function Xi() {
  return wn || (wn = ei(Ji));
}
const vn = (...e) => {
  Xi().render(...e);
}, Zi = "*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.text-red-500{--tw-text-opacity: 1 !important;color:rgb(239 68 68 / var(--tw-text-opacity))!important}", Qi = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, el = {}, tl = { class: "text-red-500" };
function sl(e, t) {
  return oi(), ci("h1", tl, "Vehicle Details");
}
const nl = /* @__PURE__ */ Qi(el, [["render", sl], ["styles", [Zi]]]), rl = /* @__PURE__ */ ki(nl);
customElements.define("vehicle-details", rl);
