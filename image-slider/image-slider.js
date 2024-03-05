function Un(e, t) {
  const n = new Set(e.split(","));
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const $ = {}, pt = [], pe = () => {
}, Fr = () => !1, Jt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fn = (e) => e.startsWith("onUpdate:"), J = Object.assign, Vn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Vr = Object.prototype.hasOwnProperty, M = (e, t) => Vr.call(e, t), T = Array.isArray, Ct = (e) => Qt(e) === "[object Map]", Hr = (e) => Qt(e) === "[object Set]", I = (e) => typeof e == "function", q = (e) => typeof e == "string", Zt = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", Gs = (e) => (W(e) || I(e)) && I(e.then) && I(e.catch), Br = Object.prototype.toString, Qt = (e) => Br.call(e), Kr = (e) => Qt(e).slice(8, -1), $r = (e) => Qt(e) === "[object Object]", Hn = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ Un(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), en = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Gr = /-(\w)/g, ge = en((e) => e.replace(Gr, (t, n) => n ? n.toUpperCase() : "")), Wr = /\B([A-Z])/g, xe = en(
  (e) => e.replace(Wr, "-$1").toLowerCase()
), tn = en((e) => e.charAt(0).toUpperCase() + e.slice(1)), dn = en((e) => e ? `on${tn(e)}` : ""), ze = (e, t) => !Object.is(e, t), hn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Gt = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, zr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, us = (e) => {
  const t = q(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let fs;
const Ws = () => fs || (fs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bn(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = q(s) ? Jr(s) : Bn(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (q(e) || W(e))
    return e;
}
const qr = /;(?![^(]*\))/g, Yr = /:([^]+)/, Xr = /\/\*[^]*?\*\//g;
function Jr(e) {
  const t = {};
  return e.replace(Xr, "").split(qr).forEach((n) => {
    if (n) {
      const s = n.split(Yr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function nn(e) {
  let t = "";
  if (q(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const s = nn(e[n]);
      s && (t += s + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Zr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qr = /* @__PURE__ */ Un(Zr);
function zs(e) {
  return !!e || e === "";
}
let we;
class eo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = we, !t && we && (this.index = (we.scopes || (we.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = we;
      try {
        return we = this, t();
      } finally {
        we = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    we = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    we = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function to(e, t = we) {
  t && t.active && t.effects.push(e);
}
function no() {
  return we;
}
let rt;
class Kn {
  constructor(t, n, s, r) {
    this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, to(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, Ye();
      for (const t of this.deps)
        if (t.computed && (so(t.computed), this._dirtyLevel >= 2))
          break;
      Xe(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Ge, n = rt;
    try {
      return Ge = !0, rt = this, this._runnings++, ds(this), this.fn();
    } finally {
      hs(this), this._runnings--, rt = n, Ge = t;
    }
  }
  stop() {
    var t;
    this.active && (ds(this), hs(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function so(e) {
  return e.value;
}
function ds(e) {
  e._trackId++, e._depsLength = 0;
}
function hs(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      qs(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function qs(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Ge = !0, xn = 0;
const Ys = [];
function Ye() {
  Ys.push(Ge), Ge = !1;
}
function Xe() {
  const e = Ys.pop();
  Ge = e === void 0 ? !0 : e;
}
function $n() {
  xn++;
}
function Gn() {
  for (xn--; !xn && yn.length; )
    yn.shift()();
}
function Xs(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && qs(s, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const yn = [];
function Js(e, t, n) {
  $n();
  for (const s of e.keys())
    if (!(!s.allowRecurse && s._runnings) && s._dirtyLevel < t && (!s._runnings || t !== 2)) {
      const r = s._dirtyLevel;
      s._dirtyLevel = t, r === 0 && (!s._queryings || t !== 2) && (s.trigger(), s.scheduler && yn.push(s.scheduler));
    }
  Gn();
}
const Zs = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, En = /* @__PURE__ */ new WeakMap(), ot = Symbol(""), Sn = Symbol("");
function de(e, t, n) {
  if (Ge && rt) {
    let s = En.get(e);
    s || En.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Zs(() => s.delete(n))), Xs(
      rt,
      r
    );
  }
}
function Fe(e, t, n, s, r, o) {
  const i = En.get(e);
  if (!i)
    return;
  let a = [];
  if (t === "clear")
    a = [...i.values()];
  else if (n === "length" && T(e)) {
    const c = Number(s);
    i.forEach((d, g) => {
      (g === "length" || !Zt(g) && g >= c) && a.push(d);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), t) {
      case "add":
        T(e) ? Hn(n) && a.push(i.get("length")) : (a.push(i.get(ot)), Ct(e) && a.push(i.get(Sn)));
        break;
      case "delete":
        T(e) || (a.push(i.get(ot)), Ct(e) && a.push(i.get(Sn)));
        break;
      case "set":
        Ct(e) && a.push(i.get(ot));
        break;
    }
  $n();
  for (const c of a)
    c && Js(
      c,
      3
    );
  Gn();
}
const ro = /* @__PURE__ */ Un("__proto__,__v_isRef,__isVue"), Qs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zt)
), ps = /* @__PURE__ */ oo();
function oo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = j(this);
      for (let o = 0, i = this.length; o < i; o++)
        de(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(j)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ye(), $n();
      const s = j(this)[t].apply(this, n);
      return Gn(), Xe(), s;
    };
  }), e;
}
function io(e) {
  const t = j(this);
  return de(t, "has", e), t.hasOwnProperty(e);
}
class er {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, s) {
    const r = this._isReadonly, o = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? wo : rr : o ? sr : nr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = T(t);
    if (!r) {
      if (i && M(ps, n))
        return Reflect.get(ps, n, s);
      if (n === "hasOwnProperty")
        return io;
    }
    const a = Reflect.get(t, n, s);
    return (Zt(n) ? Qs.has(n) : ro(n)) || (r || de(t, "get", n), o) ? a : ae(a) ? i && Hn(n) ? a : a.value : W(a) ? r ? or(a) : We(a) : a;
  }
}
class tr extends er {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._shallow) {
      const c = vt(o);
      if (!Wt(s) && !vt(s) && (o = j(o), s = j(s)), !T(t) && ae(o) && !ae(s))
        return c ? !1 : (o.value = s, !0);
    }
    const i = T(t) && Hn(n) ? Number(n) < t.length : M(t, n), a = Reflect.set(t, n, s, r);
    return t === j(r) && (i ? ze(s, o) && Fe(t, "set", n, s) : Fe(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = M(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Fe(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Zt(n) || !Qs.has(n)) && de(t, "has", n), s;
  }
  ownKeys(t) {
    return de(
      t,
      "iterate",
      T(t) ? "length" : ot
    ), Reflect.ownKeys(t);
  }
}
class lo extends er {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const co = /* @__PURE__ */ new tr(), ao = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new tr(
  !0
), Wn = (e) => e, sn = (e) => Reflect.getPrototypeOf(e);
function kt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = j(e), o = j(t);
  n || (ze(t, o) && de(r, "get", t), de(r, "get", o));
  const { has: i } = sn(r), a = s ? Wn : n ? Yn : Rt;
  if (i.call(r, t))
    return a(e.get(t));
  if (i.call(r, o))
    return a(e.get(o));
  e !== r && e.get(t);
}
function Lt(e, t = !1) {
  const n = this.__v_raw, s = j(n), r = j(e);
  return t || (ze(e, r) && de(s, "has", e), de(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Ut(e, t = !1) {
  return e = e.__v_raw, !t && de(j(e), "iterate", ot), Reflect.get(e, "size", e);
}
function gs(e) {
  e = j(e);
  const t = j(this);
  return sn(t).has.call(t, e) || (t.add(e), Fe(t, "add", e, e)), this;
}
function ms(e, t) {
  t = j(t);
  const n = j(this), { has: s, get: r } = sn(n);
  let o = s.call(n, e);
  o || (e = j(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? ze(t, i) && Fe(n, "set", e, t) : Fe(n, "add", e, t), this;
}
function _s(e) {
  const t = j(this), { has: n, get: s } = sn(t);
  let r = n.call(t, e);
  r || (e = j(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && Fe(t, "delete", e, void 0), o;
}
function vs() {
  const e = j(this), t = e.size !== 0, n = e.clear();
  return t && Fe(e, "clear", void 0, void 0), n;
}
function Ft(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, a = j(i), c = t ? Wn : e ? Yn : Rt;
    return !e && de(a, "iterate", ot), i.forEach((d, g) => s.call(r, c(d), c(g), o));
  };
}
function Vt(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = j(r), i = Ct(o), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, d = r[e](...s), g = n ? Wn : t ? Yn : Rt;
    return !t && de(
      o,
      "iterate",
      c ? Sn : ot
    ), {
      // iterator protocol
      next() {
        const { value: w, done: x } = d.next();
        return x ? { value: w, done: x } : {
          value: a ? [g(w[0]), g(w[1])] : g(w),
          done: x
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Be(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fo() {
  const e = {
    get(o) {
      return kt(this, o);
    },
    get size() {
      return Ut(this);
    },
    has: Lt,
    add: gs,
    set: ms,
    delete: _s,
    clear: vs,
    forEach: Ft(!1, !1)
  }, t = {
    get(o) {
      return kt(this, o, !1, !0);
    },
    get size() {
      return Ut(this);
    },
    has: Lt,
    add: gs,
    set: ms,
    delete: _s,
    clear: vs,
    forEach: Ft(!1, !0)
  }, n = {
    get(o) {
      return kt(this, o, !0);
    },
    get size() {
      return Ut(this, !0);
    },
    has(o) {
      return Lt.call(this, o, !0);
    },
    add: Be("add"),
    set: Be("set"),
    delete: Be("delete"),
    clear: Be("clear"),
    forEach: Ft(!0, !1)
  }, s = {
    get(o) {
      return kt(this, o, !0, !0);
    },
    get size() {
      return Ut(this, !0);
    },
    has(o) {
      return Lt.call(this, o, !0);
    },
    add: Be("add"),
    set: Be("set"),
    delete: Be("delete"),
    clear: Be("clear"),
    forEach: Ft(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Vt(
      o,
      !1,
      !1
    ), n[o] = Vt(
      o,
      !0,
      !1
    ), t[o] = Vt(
      o,
      !1,
      !0
    ), s[o] = Vt(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  ho,
  po,
  go,
  mo
] = /* @__PURE__ */ fo();
function zn(e, t) {
  const n = t ? e ? mo : go : e ? po : ho;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    M(n, r) && r in s ? n : s,
    r,
    o
  );
}
const _o = {
  get: /* @__PURE__ */ zn(!1, !1)
}, vo = {
  get: /* @__PURE__ */ zn(!1, !0)
}, bo = {
  get: /* @__PURE__ */ zn(!0, !1)
}, nr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap();
function xo(e) {
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
function yo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : xo(Kr(e));
}
function We(e) {
  return vt(e) ? e : qn(
    e,
    !1,
    co,
    _o,
    nr
  );
}
function Eo(e) {
  return qn(
    e,
    !1,
    uo,
    vo,
    sr
  );
}
function or(e) {
  return qn(
    e,
    !0,
    ao,
    bo,
    rr
  );
}
function qn(e, t, n, s, r) {
  if (!W(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = yo(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, a), a;
}
function gt(e) {
  return vt(e) ? gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function vt(e) {
  return !!(e && e.__v_isReadonly);
}
function Wt(e) {
  return !!(e && e.__v_isShallow);
}
function ir(e) {
  return gt(e) || vt(e);
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function lr(e) {
  return Gt(e, "__v_skip", !0), e;
}
const Rt = (e) => W(e) ? We(e) : e, Yn = (e) => W(e) ? or(e) : e;
class cr {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Kn(
      () => t(this._value),
      () => Cn(this, 1)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = j(this);
    return ar(t), (!t._cacheable || t.effect.dirty) && ze(t._value, t._value = t.effect.run()) && Cn(t, 2), t._value;
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
function So(e, t, n = !1) {
  let s, r;
  const o = I(e);
  return o ? (s = e, r = pe) : (s = e.get, r = e.set), new cr(s, r, o || !r, n);
}
function ar(e) {
  Ge && rt && (e = j(e), Xs(
    rt,
    e.dep || (e.dep = Zs(
      () => e.dep = void 0,
      e instanceof cr ? e : void 0
    ))
  ));
}
function Cn(e, t = 3, n) {
  e = j(e);
  const s = e.dep;
  s && Js(
    s,
    t
  );
}
function ae(e) {
  return !!(e && e.__v_isRef === !0);
}
function z(e) {
  return Co(e, !1);
}
function Co(e, t) {
  return ae(e) ? e : new Ao(e, t);
}
class Ao {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : j(t), this._value = n ? t : Rt(t);
  }
  get value() {
    return ar(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Wt(t) || vt(t);
    t = n ? t : j(t), ze(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Rt(t), Cn(this, 3));
  }
}
function Oo(e) {
  return ae(e) ? e.value : e;
}
const To = {
  get: (e, t, n) => Oo(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ae(r) && !ae(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ur(e) {
  return gt(e) ? e : new Proxy(e, To);
}
var At = { NVM_INC: "/Users/sultanov/.nvm/versions/node/v18.17.0/include/node", MANPATH: "/Users/sultanov/.nvm/versions/node/v18.17.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/sultanov/.nvm/versions/node/v18.17.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin/node", INIT_CWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-image-slider", ANDROID_HOME: "/Users/sultanov/Library/Android/sdk", _P9K_TTY: "/dev/ttys007", NVM_CD_FLAGS: "-q", SHELL: "/bin/zsh", TERM: "xterm-256color", npm_config_metrics_registry: "https://registry.npmjs.org/", TMPDIR: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/", HOMEBREW_REPOSITORY: "/opt/homebrew", npm_config_global_prefix: "/Users/sultanov/.nvm/versions/node/v18.17.0", TERM_PROGRAM_VERSION: "1.87.0", ZDOTDIR: "/Users/sultanov", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", TERM_SESSION_ID: "w0t0p0:C07FDD32-7DEB-4B89-A38D-0A49E9A39554", npm_config_noproxy: "", SDKMAN_PLATFORM: "darwinarm64", npm_config_local_prefix: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-image-slider", ZSH: "/Users/sultanov/.oh-my-zsh", USER: "sultanov", NVM_DIR: "/Users/sultanov/.nvm", LS_COLORS: "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43", SPRINGBOOT_HOME: "/Users/sultanov/.sdkman/candidates/springboot/current", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/sultanov/.nvm/versions/node/v18.17.0/etc/npmrc", SDKMAN_CANDIDATES_API: "https://api.sdkman.io/2", KUBECONFIG: "/Users/sultanov/.kube/config", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.Ge9ofZOVYl/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/bin/npm-cli.js", PAGER: "less", LSCOLORS: "Gxfxcxdxbxegedabagacad", PATH: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-image-slider/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/widgets/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/node_modules/.bin:/Users/sultanov/dev/node_modules/.bin:/Users/sultanov/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v18.17.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/sultanov/.sdkman/candidates/springboot/current/bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v18.17.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/sultanov/.fzf/bin", npm_package_json: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-image-slider/package.json", _: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-image-slider/node_modules/.bin/vite", npm_config_userconfig: "/Users/sultanov/.npmrc", npm_config_init_module: "/Users/sultanov/.npm-init.js", USER_ZDOTDIR: "/Users/sultanov", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-image-slider", VSCODE_NONCE: "b002a5a2-d27b-4e54-9321-3322cd7f9a5f", JAVA_HOME: "/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home", npm_lifecycle_event: "build", EDITOR: "vi", P9K_SSH: "0", npm_package_name: "vehicle-pictures", LANG: "en_US.UTF-8", P9K_TTY: "old", ITERM_PROFILE: "Default", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.0.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", COLORFGBG: "7;0", HOME: "/Users/sultanov", SHLVL: "4", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", LC_TERMINAL_VERSION: "3.4.23", HOMEBREW_PREFIX: "/opt/homebrew", ITERM_SESSION_ID: "w0t0p0:C07FDD32-7DEB-4B89-A38D-0A49E9A39554", npm_config_cache: "/Users/sultanov/.npm", LESS: "-R", LOGNAME: "sultanov", npm_lifecycle_script: "vite build", SDKMAN_DIR: "/Users/sultanov/.sdkman", VSCODE_GIT_IPC_HANDLE: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/vscode-git-da9028714b.sock", LC_CTYPE: "UTF-8", NVM_BIN: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin", npm_config_user_agent: "npm/9.6.7 node/v18.17.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", SDKMAN_CANDIDATES_DIR: "/Users/sultanov/.sdkman/candidates", LC_TERMINAL: "iTerm2", _P9K_SSH_TTY: "/dev/ttys007", npm_node_execpath: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin/node", npm_config_prefix: "/Users/sultanov/.nvm/versions/node/v18.17.0", COLORTERM: "truecolor", NODE_ENV: "production" };
const Ot = [];
function Io(e, ...t) {
  Ye();
  const n = Ot.length ? Ot[Ot.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Ro();
  if (s)
    Ve(
      s,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${Lr(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Po(r)), console.warn(...o);
  }
  Xe();
}
function Ro() {
  let e = Ot[Ot.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Po(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...No(n));
  }), t;
}
function No({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Lr(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...Mo(e.props), o] : [r + o];
}
function Mo(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...fr(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function fr(e, t, n) {
  return q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ae(t) ? (t = fr(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
function Ve(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    rn(o, t, n);
  }
  return r;
}
function Ce(e, t, n, s) {
  if (I(e)) {
    const o = Ve(e, t, n, s);
    return o && Gs(o) && o.catch((i) => {
      rn(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(Ce(e[o], t, n, s));
  return r;
}
function rn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, a = `https://vuejs.org/errors/#runtime-${n}`;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let g = 0; g < d.length; g++)
          if (d[g](e, i, a) === !1)
            return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Ve(
        c,
        null,
        10,
        [e, i, a]
      );
      return;
    }
  }
  jo(e, n, r, s);
}
function jo(e, t, n, s = !0) {
  console.error(e);
}
let Pt = !1, An = !1;
const re = [];
let je = 0;
const mt = [];
let Ue = null, st = 0;
const dr = /* @__PURE__ */ Promise.resolve();
let Xn = null;
function Jn(e) {
  const t = Xn || dr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Do(e) {
  let t = je + 1, n = re.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = re[s], o = Nt(r);
    o < e || o === e && r.pre ? t = s + 1 : n = s;
  }
  return t;
}
function Zn(e) {
  (!re.length || !re.includes(
    e,
    Pt && e.allowRecurse ? je + 1 : je
  )) && (e.id == null ? re.push(e) : re.splice(Do(e.id), 0, e), hr());
}
function hr() {
  !Pt && !An && (An = !0, Xn = dr.then(gr));
}
function ko(e) {
  const t = re.indexOf(e);
  t > je && re.splice(t, 1);
}
function Lo(e) {
  T(e) ? mt.push(...e) : (!Ue || !Ue.includes(
    e,
    e.allowRecurse ? st + 1 : st
  )) && mt.push(e), hr();
}
function bs(e, t, n = Pt ? je + 1 : 0) {
  for (; n < re.length; n++) {
    const s = re[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid)
        continue;
      re.splice(n, 1), n--, s();
    }
  }
}
function pr(e) {
  if (mt.length) {
    const t = [...new Set(mt)];
    if (mt.length = 0, Ue) {
      Ue.push(...t);
      return;
    }
    for (Ue = t, Ue.sort((n, s) => Nt(n) - Nt(s)), st = 0; st < Ue.length; st++)
      Ue[st]();
    Ue = null, st = 0;
  }
}
const Nt = (e) => e.id == null ? 1 / 0 : e.id, Uo = (e, t) => {
  const n = Nt(e) - Nt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function gr(e) {
  An = !1, Pt = !0, re.sort(Uo);
  const t = pe;
  try {
    for (je = 0; je < re.length; je++) {
      const n = re[je];
      n && n.active !== !1 && (At.NODE_ENV !== "production" && t(n), Ve(n, null, 14));
    }
  } finally {
    je = 0, re.length = 0, pr(), Pt = !1, Xn = null, (re.length || mt.length) && gr();
  }
}
function Fo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || $;
  let r = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in s) {
    const g = `${i === "modelValue" ? "model" : i}Modifiers`, { number: w, trim: x } = s[g] || $;
    x && (r = n.map((A) => q(A) ? A.trim() : A)), w && (r = n.map(zr));
  }
  let a, c = s[a = dn(t)] || // also try camelCase event handler (#2249)
  s[a = dn(ge(t))];
  !c && o && (c = s[a = dn(xe(t))]), c && Ce(
    c,
    e,
    6,
    r
  );
  const d = s[a + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Ce(
      d,
      e,
      6,
      r
    );
  }
}
function mr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, a = !1;
  if (!I(e)) {
    const c = (d) => {
      const g = mr(d, t, !0);
      g && (a = !0, J(i, g));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !a ? (W(e) && s.set(e, null), null) : (T(o) ? o.forEach((c) => i[c] = null) : J(i, o), W(e) && s.set(e, i), i);
}
function on(e, t) {
  return !e || !Jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), M(e, t[0].toLowerCase() + t.slice(1)) || M(e, xe(t)) || M(e, t));
}
let ye = null, _r = null;
function zt(e) {
  const t = ye;
  return ye = e, _r = e && e.type.__scopeId || null, t;
}
function Et(e, t = ye, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Ps(-1);
    const o = zt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      zt(o), s._d && Ps(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function pn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: a,
    attrs: c,
    emit: d,
    render: g,
    renderCache: w,
    data: x,
    setupState: A,
    ctx: k,
    inheritAttrs: R
  } = e;
  let L, F;
  const ne = zt(e);
  try {
    if (n.shapeFlag & 4) {
      const B = r || s, ie = At.NODE_ENV !== "production" && A.__isScriptSetup ? new Proxy(B, {
        get(N, Z, le) {
          return Io(
            `Property '${String(
              Z
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(N, Z, le);
        }
      }) : B;
      L = Me(
        g.call(
          ie,
          B,
          w,
          o,
          A,
          x,
          k
        )
      ), F = c;
    } else {
      const B = t;
      At.NODE_ENV, L = Me(
        B.length > 1 ? B(
          o,
          At.NODE_ENV !== "production" ? {
            get attrs() {
              return c;
            },
            slots: a,
            emit: d
          } : { attrs: c, slots: a, emit: d }
        ) : B(
          o,
          null
          /* we know it doesn't need it */
        )
      ), F = t.props ? c : Vo(c);
    }
  } catch (B) {
    It.length = 0, rn(B, e, 1), L = oe(lt);
  }
  let D = L;
  if (F && R !== !1) {
    const B = Object.keys(F), { shapeFlag: ie } = D;
    B.length && ie & 7 && (i && B.some(Fn) && (F = Ho(
      F,
      i
    )), D = qe(D, F));
  }
  return n.dirs && (D = qe(D), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && (D.transition = n.transition), L = D, zt(ne), L;
}
const Vo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Jt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ho = (e, t) => {
  const n = {};
  for (const s in e)
    (!Fn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Bo(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: a, patchFlag: c } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? ws(s, i, d) : !!i;
    if (c & 8) {
      const g = t.dynamicProps;
      for (let w = 0; w < g.length; w++) {
        const x = g[w];
        if (i[x] !== s[x] && !on(d, x))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? i ? ws(s, i, d) : !0 : !!i;
  return !1;
}
function ws(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !on(n, o))
      return !0;
  }
  return !1;
}
function Ko({ vnode: e, parent: t }, n) {
  if (n)
    for (; t; ) {
      const s = t.subTree;
      if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
        (e = t.vnode).el = n, t = t.parent;
      else
        break;
    }
}
const vr = "components";
function xs(e, t) {
  return Go(vr, e, !0, t) || e;
}
const $o = Symbol.for("v-ndc");
function Go(e, t, n = !0, s = !1) {
  const r = ye || te;
  if (r) {
    const o = r.type;
    if (e === vr) {
      const a = kr(
        o,
        !1
      );
      if (a && (a === t || a === ge(t) || a === tn(ge(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      ys(r[e] || o[e], t) || // global registration
      ys(r.appContext[e], t)
    );
    return !i && s ? o : i;
  }
}
function ys(e, t) {
  return e && (e[t] || e[ge(t)] || e[tn(ge(t))]);
}
const Wo = (e) => e.__isSuspense;
function zo(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Lo(e);
}
const qo = Symbol.for("v-scx"), Yo = () => Ee(qo), Ht = {};
function _t(e, t, n) {
  return br(e, t, n);
}
function br(e, t, {
  immediate: n,
  deep: s,
  flush: r,
  once: o,
  onTrack: i,
  onTrigger: a
} = $) {
  if (t && o) {
    const N = t;
    t = (...Z) => {
      N(...Z), ie();
    };
  }
  const c = te, d = (N) => s === !0 ? N : (
    // for deep: false, only traverse root-level properties
    dt(N, s === !1 ? 1 : void 0)
  );
  let g, w = !1, x = !1;
  if (ae(e) ? (g = () => e.value, w = Wt(e)) : gt(e) ? (g = () => d(e), w = !0) : T(e) ? (x = !0, w = e.some((N) => gt(N) || Wt(N)), g = () => e.map((N) => {
    if (ae(N))
      return N.value;
    if (gt(N))
      return d(N);
    if (I(N))
      return Ve(N, c, 2);
  })) : I(e) ? t ? g = () => Ve(e, c, 2) : g = () => (A && A(), Ce(
    e,
    c,
    3,
    [k]
  )) : g = pe, t && s) {
    const N = g;
    g = () => dt(N());
  }
  let A, k = (N) => {
    A = D.onStop = () => {
      Ve(N, c, 4), A = D.onStop = void 0;
    };
  }, R;
  if (fn)
    if (k = pe, t ? n && Ce(t, c, 3, [
      g(),
      x ? [] : void 0,
      k
    ]) : g(), r === "sync") {
      const N = Yo();
      R = N.__watcherHandles || (N.__watcherHandles = []);
    } else
      return pe;
  let L = x ? new Array(e.length).fill(Ht) : Ht;
  const F = () => {
    if (!(!D.active || !D.dirty))
      if (t) {
        const N = D.run();
        (s || w || (x ? N.some((Z, le) => ze(Z, L[le])) : ze(N, L))) && (A && A(), Ce(t, c, 3, [
          N,
          // pass undefined as the old value when it's changed for the first time
          L === Ht ? void 0 : x && L[0] === Ht ? [] : L,
          k
        ]), L = N);
      } else
        D.run();
  };
  F.allowRecurse = !!t;
  let ne;
  r === "sync" ? ne = F : r === "post" ? ne = () => ue(F, c && c.suspense) : (F.pre = !0, c && (F.id = c.uid), ne = () => Zn(F));
  const D = new Kn(g, pe, ne), B = no(), ie = () => {
    D.stop(), B && Vn(B.effects, D);
  };
  return t ? n ? F() : L = D.run() : r === "post" ? ue(
    D.run.bind(D),
    c && c.suspense
  ) : D.run(), R && R.push(ie), ie;
}
function Xo(e, t, n) {
  const s = this.proxy, r = q(e) ? e.includes(".") ? wr(s, e) : () => s[e] : e.bind(s, s);
  let o;
  I(t) ? o = t : (o = t.handler, n = t);
  const i = te;
  bt(this);
  const a = br(r, o.bind(s), n);
  return i ? bt(i) : it(), a;
}
function wr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function dt(e, t, n = 0, s) {
  if (!W(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (s = s || /* @__PURE__ */ new Set(), s.has(e))
    return e;
  if (s.add(e), ae(e))
    dt(e.value, t, n, s);
  else if (T(e))
    for (let r = 0; r < e.length; r++)
      dt(e[r], t, n, s);
  else if (Hr(e) || Ct(e))
    e.forEach((r) => {
      dt(r, t, n, s);
    });
  else if ($r(e))
    for (const r in e)
      dt(e[r], t, n, s);
  return e;
}
function tt(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    o && (a.oldValue = o[i].value);
    let c = a.dir[s];
    c && (Ye(), Ce(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Xe());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ln(e, t) {
  return I(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    J({ name: e.name }, t, { setup: e })
  ) : e;
}
const Kt = (e) => !!e.type.__asyncLoader, xr = (e) => e.type.__isKeepAlive;
function Jo(e, t) {
  yr(e, "a", t);
}
function Zo(e, t) {
  yr(e, "da", t);
}
function yr(e, t, n = te) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (cn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      xr(r.parent.vnode) && Qo(s, t, n, r), r = r.parent;
  }
}
function Qo(e, t, n, s) {
  const r = cn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  es(() => {
    Vn(s[t], r);
  }, n);
}
function cn(e, t, n = te, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Ye(), bt(n);
      const a = Ce(t, n, e, i);
      return it(), Xe(), a;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const He = (e) => (t, n = te) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!fn || e === "sp") && cn(e, (...s) => t(...s), n)
), ei = He("bm"), Qn = He("m"), ti = He("bu"), ni = He("u"), si = He("bum"), es = He("um"), ri = He("sp"), oi = He(
  "rtg"
), ii = He(
  "rtc"
);
function li(e, t = te) {
  cn("ec", e, t);
}
function gn(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (T(e) || q(e)) {
    r = new Array(e.length);
    for (let i = 0, a = e.length; i < a; i++)
      r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (W(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (i, a) => t(i, a, void 0, o && o[a])
      );
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let a = 0, c = i.length; a < c; a++) {
        const d = i[a];
        r[a] = t(e[d], d, a, o && o[a]);
      }
    }
  else
    r = [];
  return n && (n[s] = r), r;
}
const On = (e) => e ? jr(e) ? os(e) || e.proxy : On(e.parent) : null, Tt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => On(e.parent),
    $root: (e) => On(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ts(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Zn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Jn.bind(e.proxy)),
    $watch: (e) => Xo.bind(e)
  })
), mn = (e, t) => e !== $ && !e.__isScriptSetup && M(e, t), ci = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: a, appContext: c } = e;
    let d;
    if (t[0] !== "$") {
      const A = i[t];
      if (A !== void 0)
        switch (A) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (mn(s, t))
          return i[t] = 1, s[t];
        if (r !== $ && M(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && M(d, t)
        )
          return i[t] = 3, o[t];
        if (n !== $ && M(n, t))
          return i[t] = 4, n[t];
        Tn && (i[t] = 0);
      }
    }
    const g = Tt[t];
    let w, x;
    if (g)
      return t === "$attrs" && de(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (w = a.__cssModules) && (w = w[t])
    )
      return w;
    if (n !== $ && M(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      x = c.config.globalProperties, M(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return mn(r, t) ? (r[t] = n, !0) : s !== $ && M(s, t) ? (s[t] = n, !0) : M(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let a;
    return !!n[i] || e !== $ && M(e, i) || mn(t, i) || (a = o[0]) && M(a, i) || M(s, i) || M(Tt, i) || M(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : M(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Es(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Tn = !0;
function ai(e) {
  const t = ts(e), n = e.proxy, s = e.ctx;
  Tn = !1, t.beforeCreate && Ss(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: a,
    provide: c,
    inject: d,
    // lifecycle
    created: g,
    beforeMount: w,
    mounted: x,
    beforeUpdate: A,
    updated: k,
    activated: R,
    deactivated: L,
    beforeDestroy: F,
    beforeUnmount: ne,
    destroyed: D,
    unmounted: B,
    render: ie,
    renderTracked: N,
    renderTriggered: Z,
    errorCaptured: le,
    serverPrefetch: se,
    // public API
    expose: me,
    inheritAttrs: Ae,
    // assets
    components: _e,
    directives: De,
    filters: Je
  } = t;
  if (d && ui(d, s, null), i)
    for (const H in i) {
      const U = i[H];
      I(U) && (s[H] = U.bind(n));
    }
  if (r) {
    const H = r.call(n, n);
    W(H) && (e.data = We(H));
  }
  if (Tn = !0, o)
    for (const H in o) {
      const U = o[H], Oe = I(U) ? U.bind(n, n) : I(U.get) ? U.get.bind(n, n) : pe, Ze = !I(U) && I(U.set) ? U.set.bind(n) : pe, Te = Xt({
        get: Oe,
        set: Ze
      });
      Object.defineProperty(s, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (Y) => Te.value = Y
      });
    }
  if (a)
    for (const H in a)
      Er(a[H], s, n, H);
  if (c) {
    const H = I(c) ? c.call(n) : c;
    Reflect.ownKeys(H).forEach((U) => {
      Ne(U, H[U]);
    });
  }
  g && Ss(g, e, "c");
  function Q(H, U) {
    T(U) ? U.forEach((Oe) => H(Oe.bind(n))) : U && H(U.bind(n));
  }
  if (Q(ei, w), Q(Qn, x), Q(ti, A), Q(ni, k), Q(Jo, R), Q(Zo, L), Q(li, le), Q(ii, N), Q(oi, Z), Q(si, ne), Q(es, B), Q(ri, se), T(me))
    if (me.length) {
      const H = e.exposed || (e.exposed = {});
      me.forEach((U) => {
        Object.defineProperty(H, U, {
          get: () => n[U],
          set: (Oe) => n[U] = Oe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  ie && e.render === pe && (e.render = ie), Ae != null && (e.inheritAttrs = Ae), _e && (e.components = _e), De && (e.directives = De);
}
function ui(e, t, n = pe) {
  T(e) && (e = In(e));
  for (const s in e) {
    const r = e[s];
    let o;
    W(r) ? "default" in r ? o = Ee(
      r.from || s,
      r.default,
      !0
    ) : o = Ee(r.from || s) : o = Ee(r), ae(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o;
  }
}
function Ss(e, t, n) {
  Ce(
    T(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Er(e, t, n, s) {
  const r = s.includes(".") ? wr(n, s) : () => n[s];
  if (q(e)) {
    const o = t[e];
    I(o) && _t(r, o);
  } else if (I(e))
    _t(r, e.bind(n));
  else if (W(e))
    if (T(e))
      e.forEach((o) => Er(o, t, n, s));
    else {
      const o = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(o) && _t(r, o, e);
    }
}
function ts(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let c;
  return a ? c = a : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (d) => qt(c, d, i, !0)
  ), qt(c, t, i)), W(t) && o.set(t, c), c;
}
function qt(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && qt(e, o, n, !0), r && r.forEach(
    (i) => qt(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const a = fi[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const fi = {
  data: Cs,
  props: As,
  emits: As,
  // objects
  methods: St,
  computed: St,
  // lifecycle
  beforeCreate: ce,
  created: ce,
  beforeMount: ce,
  mounted: ce,
  beforeUpdate: ce,
  updated: ce,
  beforeDestroy: ce,
  beforeUnmount: ce,
  destroyed: ce,
  unmounted: ce,
  activated: ce,
  deactivated: ce,
  errorCaptured: ce,
  serverPrefetch: ce,
  // assets
  components: St,
  directives: St,
  // watch
  watch: hi,
  // provide / inject
  provide: Cs,
  inject: di
};
function Cs(e, t) {
  return t ? e ? function() {
    return J(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function di(e, t) {
  return St(In(e), In(t));
}
function In(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function St(e, t) {
  return e ? J(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function As(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : J(
    /* @__PURE__ */ Object.create(null),
    Es(e),
    Es(t ?? {})
  ) : t;
}
function hi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ce(e[s], t[s]);
  return n;
}
function Sr() {
  return {
    app: null,
    config: {
      isNativeTag: Fr,
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
let pi = 0;
function gi(e, t) {
  return function(s, r = null) {
    I(s) || (s = J({}, s)), r != null && !W(r) && (r = null);
    const o = Sr(), i = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const c = o.app = {
      _uid: pi++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Bi,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...g) {
        return i.has(d) || (d && I(d.install) ? (i.add(d), d.install(c, ...g)) : I(d) && (i.add(d), d(c, ...g))), c;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), c;
      },
      component(d, g) {
        return g ? (o.components[d] = g, c) : o.components[d];
      },
      directive(d, g) {
        return g ? (o.directives[d] = g, c) : o.directives[d];
      },
      mount(d, g, w) {
        if (!a) {
          const x = oe(s, r);
          return x.appContext = o, w === !0 ? w = "svg" : w === !1 && (w = void 0), g && t ? t(x, d) : e(x, d, w), a = !0, c._container = d, d.__vue_app__ = c, os(x.component) || x.component.proxy;
        }
      },
      unmount() {
        a && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, g) {
        return o.provides[d] = g, c;
      },
      runWithContext(d) {
        Yt = c;
        try {
          return d();
        } finally {
          Yt = null;
        }
      }
    };
    return c;
  };
}
let Yt = null;
function Ne(e, t) {
  if (te) {
    let n = te.provides;
    const s = te.parent && te.parent.provides;
    s === n && (n = te.provides = Object.create(s)), n[e] = t;
  }
}
function Ee(e, t, n = !1) {
  const s = te || ye;
  if (s || Yt) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Yt._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(s && s.proxy) : t;
  }
}
function mi(e, t, n, s = !1) {
  const r = {}, o = {};
  Gt(o, un, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Cr(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : Eo(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function _i(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, a = j(r), [c] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const g = e.vnode.dynamicProps;
      for (let w = 0; w < g.length; w++) {
        let x = g[w];
        if (on(e.emitsOptions, x))
          continue;
        const A = t[x];
        if (c)
          if (M(o, x))
            A !== o[x] && (o[x] = A, d = !0);
          else {
            const k = ge(x);
            r[k] = Rn(
              c,
              a,
              k,
              A,
              e,
              !1
            );
          }
        else
          A !== o[x] && (o[x] = A, d = !0);
      }
    }
  } else {
    Cr(e, t, r, o) && (d = !0);
    let g;
    for (const w in a)
      (!t || // for camelCase
      !M(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = xe(w)) === w || !M(t, g))) && (c ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[g] !== void 0) && (r[w] = Rn(
        c,
        a,
        w,
        void 0,
        e,
        !0
      )) : delete r[w]);
    if (o !== a)
      for (const w in o)
        (!t || !M(t, w)) && (delete o[w], d = !0);
  }
  d && Fe(e, "set", "$attrs");
}
function Cr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (Bt(c))
        continue;
      const d = t[c];
      let g;
      r && M(r, g = ge(c)) ? !o || !o.includes(g) ? n[g] = d : (a || (a = {}))[g] = d : on(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, i = !0);
    }
  if (o) {
    const c = j(n), d = a || $;
    for (let g = 0; g < o.length; g++) {
      const w = o[g];
      n[w] = Rn(
        r,
        c,
        w,
        d[w],
        e,
        !M(d, w)
      );
    }
  }
  return i;
}
function Rn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const a = M(i, "default");
    if (a && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && I(c)) {
        const { propsDefaults: d } = r;
        n in d ? s = d[n] : (bt(r), s = d[n] = c.call(
          null,
          t
        ), it());
      } else
        s = c;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !a ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === xe(n)) && (s = !0));
  }
  return s;
}
function Ar(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, a = [];
  let c = !1;
  if (!I(e)) {
    const g = (w) => {
      c = !0;
      const [x, A] = Ar(w, t, !0);
      J(i, x), A && a.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!o && !c)
    return W(e) && s.set(e, pt), pt;
  if (T(o))
    for (let g = 0; g < o.length; g++) {
      const w = ge(o[g]);
      Os(w) && (i[w] = $);
    }
  else if (o)
    for (const g in o) {
      const w = ge(g);
      if (Os(w)) {
        const x = o[g], A = i[w] = T(x) || I(x) ? { type: x } : J({}, x);
        if (A) {
          const k = Rs(Boolean, A.type), R = Rs(String, A.type);
          A[
            0
            /* shouldCast */
          ] = k > -1, A[
            1
            /* shouldCastTrue */
          ] = R < 0 || k < R, (k > -1 || M(A, "default")) && a.push(w);
        }
      }
    }
  const d = [i, a];
  return W(e) && s.set(e, d), d;
}
function Os(e) {
  return e[0] !== "$";
}
function Ts(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Is(e, t) {
  return Ts(e) === Ts(t);
}
function Rs(e, t) {
  return T(t) ? t.findIndex((n) => Is(n, e)) : I(t) && Is(t, e) ? 0 : -1;
}
const Or = (e) => e[0] === "_" || e === "$stable", ns = (e) => T(e) ? e.map(Me) : [Me(e)], vi = (e, t, n) => {
  if (t._n)
    return t;
  const s = Et((...r) => (At.NODE_ENV, ns(t(...r))), n);
  return s._c = !1, s;
}, Tr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Or(r))
      continue;
    const o = e[r];
    if (I(o))
      t[r] = vi(r, o, s);
    else if (o != null) {
      const i = ns(o);
      t[r] = () => i;
    }
  }
}, Ir = (e, t) => {
  const n = ns(t);
  e.slots.default = () => n;
}, bi = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = j(t), Gt(t, "_", n)) : Tr(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Ir(e, t);
  Gt(e.slots, un, 1);
}, wi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = $;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : (J(r, t), !n && a === 1 && delete r._) : (o = !t.$stable, Tr(t, r)), i = t;
  } else
    t && (Ir(e, t), i = { default: 1 });
  if (o)
    for (const a in r)
      !Or(a) && i[a] == null && delete r[a];
};
function Pn(e, t, n, s, r = !1) {
  if (T(e)) {
    e.forEach(
      (x, A) => Pn(
        x,
        t && (T(t) ? t[A] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Kt(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? os(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: a, r: c } = e, d = t && t.r, g = a.refs === $ ? a.refs = {} : a.refs, w = a.setupState;
  if (d != null && d !== c && (q(d) ? (g[d] = null, M(w, d) && (w[d] = null)) : ae(d) && (d.value = null)), I(c))
    Ve(c, a, 12, [i, g]);
  else {
    const x = q(c), A = ae(c);
    if (x || A) {
      const k = () => {
        if (e.f) {
          const R = x ? M(w, c) ? w[c] : g[c] : c.value;
          r ? T(R) && Vn(R, o) : T(R) ? R.includes(o) || R.push(o) : x ? (g[c] = [o], M(w, c) && (w[c] = g[c])) : (c.value = [o], e.k && (g[e.k] = c.value));
        } else
          x ? (g[c] = i, M(w, c) && (w[c] = i)) : A && (c.value = i, e.k && (g[e.k] = i));
      };
      i ? (k.id = -1, ue(k, n)) : k();
    }
  }
}
const ue = zo;
function xi(e) {
  return yi(e);
}
function yi(e, t) {
  const n = Ws();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: a,
    createComment: c,
    setText: d,
    setElementText: g,
    parentNode: w,
    nextSibling: x,
    setScopeId: A = pe,
    insertStaticContent: k
  } = e, R = (l, u, f, p = null, h = null, _ = null, y = void 0, v = null, b = !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !yt(l, u) && (p = Qe(l), Y(l, h, _, !0), l = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: m, ref: E, shapeFlag: C } = u;
    switch (m) {
      case an:
        L(l, u, f, p);
        break;
      case lt:
        F(l, u, f, p);
        break;
      case vn:
        l == null && ne(u, f, p, y);
        break;
      case fe:
        _e(
          l,
          u,
          f,
          p,
          h,
          _,
          y,
          v,
          b
        );
        break;
      default:
        C & 1 ? ie(
          l,
          u,
          f,
          p,
          h,
          _,
          y,
          v,
          b
        ) : C & 6 ? De(
          l,
          u,
          f,
          p,
          h,
          _,
          y,
          v,
          b
        ) : (C & 64 || C & 128) && m.process(
          l,
          u,
          f,
          p,
          h,
          _,
          y,
          v,
          b,
          ke
        );
    }
    E != null && h && Pn(E, l && l.ref, _, u || l, !u);
  }, L = (l, u, f, p) => {
    if (l == null)
      s(
        u.el = a(u.children),
        f,
        p
      );
    else {
      const h = u.el = l.el;
      u.children !== l.children && d(h, u.children);
    }
  }, F = (l, u, f, p) => {
    l == null ? s(
      u.el = c(u.children || ""),
      f,
      p
    ) : u.el = l.el;
  }, ne = (l, u, f, p) => {
    [l.el, l.anchor] = k(
      l.children,
      u,
      f,
      p,
      l.el,
      l.anchor
    );
  }, D = ({ el: l, anchor: u }, f, p) => {
    let h;
    for (; l && l !== u; )
      h = x(l), s(l, f, p), l = h;
    s(u, f, p);
  }, B = ({ el: l, anchor: u }) => {
    let f;
    for (; l && l !== u; )
      f = x(l), r(l), l = f;
    r(u);
  }, ie = (l, u, f, p, h, _, y, v, b) => {
    u.type === "svg" ? y = "svg" : u.type === "math" && (y = "mathml"), l == null ? N(
      u,
      f,
      p,
      h,
      _,
      y,
      v,
      b
    ) : se(
      l,
      u,
      h,
      _,
      y,
      v,
      b
    );
  }, N = (l, u, f, p, h, _, y, v) => {
    let b, m;
    const { props: E, shapeFlag: C, transition: S, dirs: O } = l;
    if (b = l.el = i(
      l.type,
      _,
      E && E.is,
      E
    ), C & 8 ? g(b, l.children) : C & 16 && le(
      l.children,
      b,
      null,
      p,
      h,
      _n(l, _),
      y,
      v
    ), O && tt(l, null, p, "created"), Z(b, l, l.scopeId, y, p), E) {
      for (const V in E)
        V !== "value" && !Bt(V) && o(
          b,
          V,
          null,
          E[V],
          _,
          l.children,
          p,
          h,
          ve
        );
      "value" in E && o(b, "value", null, E.value, _), (m = E.onVnodeBeforeMount) && Pe(m, p, l);
    }
    O && tt(l, null, p, "beforeMount");
    const P = Ei(h, S);
    P && S.beforeEnter(b), s(b, u, f), ((m = E && E.onVnodeMounted) || P || O) && ue(() => {
      m && Pe(m, p, l), P && S.enter(b), O && tt(l, null, p, "mounted");
    }, h);
  }, Z = (l, u, f, p, h) => {
    if (f && A(l, f), p)
      for (let _ = 0; _ < p.length; _++)
        A(l, p[_]);
    if (h) {
      let _ = h.subTree;
      if (u === _) {
        const y = h.vnode;
        Z(
          l,
          y,
          y.scopeId,
          y.slotScopeIds,
          h.parent
        );
      }
    }
  }, le = (l, u, f, p, h, _, y, v, b = 0) => {
    for (let m = b; m < l.length; m++) {
      const E = l[m] = v ? Ke(l[m]) : Me(l[m]);
      R(
        null,
        E,
        u,
        f,
        p,
        h,
        _,
        y,
        v
      );
    }
  }, se = (l, u, f, p, h, _, y) => {
    const v = u.el = l.el;
    let { patchFlag: b, dynamicChildren: m, dirs: E } = u;
    b |= l.patchFlag & 16;
    const C = l.props || $, S = u.props || $;
    let O;
    if (f && nt(f, !1), (O = S.onVnodeBeforeUpdate) && Pe(O, f, u, l), E && tt(u, l, f, "beforeUpdate"), f && nt(f, !0), m ? me(
      l.dynamicChildren,
      m,
      v,
      f,
      p,
      _n(u, h),
      _
    ) : y || U(
      l,
      u,
      v,
      null,
      f,
      p,
      _n(u, h),
      _,
      !1
    ), b > 0) {
      if (b & 16)
        Ae(
          v,
          u,
          C,
          S,
          f,
          p,
          h
        );
      else if (b & 2 && C.class !== S.class && o(v, "class", null, S.class, h), b & 4 && o(v, "style", C.style, S.style, h), b & 8) {
        const P = u.dynamicProps;
        for (let V = 0; V < P.length; V++) {
          const K = P[V], X = C[K], be = S[K];
          (be !== X || K === "value") && o(
            v,
            K,
            X,
            be,
            h,
            l.children,
            f,
            p,
            ve
          );
        }
      }
      b & 1 && l.children !== u.children && g(v, u.children);
    } else
      !y && m == null && Ae(
        v,
        u,
        C,
        S,
        f,
        p,
        h
      );
    ((O = S.onVnodeUpdated) || E) && ue(() => {
      O && Pe(O, f, u, l), E && tt(u, l, f, "updated");
    }, p);
  }, me = (l, u, f, p, h, _, y) => {
    for (let v = 0; v < u.length; v++) {
      const b = l[v], m = u[v], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !yt(b, m) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 70) ? w(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          f
        )
      );
      R(
        b,
        m,
        E,
        null,
        p,
        h,
        _,
        y,
        !0
      );
    }
  }, Ae = (l, u, f, p, h, _, y) => {
    if (f !== p) {
      if (f !== $)
        for (const v in f)
          !Bt(v) && !(v in p) && o(
            l,
            v,
            f[v],
            null,
            y,
            u.children,
            h,
            _,
            ve
          );
      for (const v in p) {
        if (Bt(v))
          continue;
        const b = p[v], m = f[v];
        b !== m && v !== "value" && o(
          l,
          v,
          m,
          b,
          y,
          u.children,
          h,
          _,
          ve
        );
      }
      "value" in p && o(l, "value", f.value, p.value, y);
    }
  }, _e = (l, u, f, p, h, _, y, v, b) => {
    const m = u.el = l ? l.el : a(""), E = u.anchor = l ? l.anchor : a("");
    let { patchFlag: C, dynamicChildren: S, slotScopeIds: O } = u;
    O && (v = v ? v.concat(O) : O), l == null ? (s(m, f, p), s(E, f, p), le(
      u.children,
      f,
      E,
      h,
      _,
      y,
      v,
      b
    )) : C > 0 && C & 64 && S && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (me(
      l.dynamicChildren,
      S,
      f,
      h,
      _,
      y,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || h && u === h.subTree) && Rr(
      l,
      u,
      !0
      /* shallow */
    )) : U(
      l,
      u,
      f,
      E,
      h,
      _,
      y,
      v,
      b
    );
  }, De = (l, u, f, p, h, _, y, v, b) => {
    u.slotScopeIds = v, l == null ? u.shapeFlag & 512 ? h.ctx.activate(
      u,
      f,
      p,
      y,
      b
    ) : Je(
      u,
      f,
      p,
      h,
      _,
      y,
      b
    ) : jt(l, u, b);
  }, Je = (l, u, f, p, h, _, y) => {
    const v = l.component = ji(
      l,
      p,
      h
    );
    if (xr(l) && (v.ctx.renderer = ke), Di(v), v.asyncDep) {
      if (h && h.registerDep(v, Q), !l.el) {
        const b = v.subTree = oe(lt);
        F(null, b, u, f);
      }
    } else
      Q(
        v,
        l,
        u,
        f,
        h,
        _,
        y
      );
  }, jt = (l, u, f) => {
    const p = u.component = l.component;
    if (Bo(l, u, f))
      if (p.asyncDep && !p.asyncResolved) {
        H(p, u, f);
        return;
      } else
        p.next = u, ko(p.update), p.effect.dirty = !0, p.update();
    else
      u.el = l.el, p.vnode = u;
  }, Q = (l, u, f, p, h, _, y) => {
    const v = () => {
      if (l.isMounted) {
        let { next: E, bu: C, u: S, parent: O, vnode: P } = l;
        {
          const ut = Pr(l);
          if (ut) {
            E && (E.el = P.el, H(l, E, y)), ut.asyncDep.then(() => {
              l.isUnmounted || v();
            });
            return;
          }
        }
        let V = E, K;
        nt(l, !1), E ? (E.el = P.el, H(l, E, y)) : E = P, C && hn(C), (K = E.props && E.props.onVnodeBeforeUpdate) && Pe(K, O, E, P), nt(l, !0);
        const X = pn(l), be = l.subTree;
        l.subTree = X, R(
          be,
          X,
          // parent may have changed if it's in a teleport
          w(be.el),
          // anchor may have changed if it's in a fragment
          Qe(be),
          l,
          h,
          _
        ), E.el = X.el, V === null && Ko(l, X.el), S && ue(S, h), (K = E.props && E.props.onVnodeUpdated) && ue(
          () => Pe(K, O, E, P),
          h
        );
      } else {
        let E;
        const { el: C, props: S } = u, { bm: O, m: P, parent: V } = l, K = Kt(u);
        if (nt(l, !1), O && hn(O), !K && (E = S && S.onVnodeBeforeMount) && Pe(E, V, u), nt(l, !0), C && et) {
          const X = () => {
            l.subTree = pn(l), et(
              C,
              l.subTree,
              l,
              h,
              null
            );
          };
          K ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && X()
          ) : X();
        } else {
          const X = l.subTree = pn(l);
          R(
            null,
            X,
            f,
            p,
            l,
            h,
            _
          ), u.el = X.el;
        }
        if (P && ue(P, h), !K && (E = S && S.onVnodeMounted)) {
          const X = u;
          ue(
            () => Pe(E, V, X),
            h
          );
        }
        (u.shapeFlag & 256 || V && Kt(V.vnode) && V.vnode.shapeFlag & 256) && l.a && ue(l.a, h), l.isMounted = !0, u = f = p = null;
      }
    }, b = l.effect = new Kn(
      v,
      pe,
      () => Zn(m),
      l.scope
      // track it in component's effect scope
    ), m = l.update = () => {
      b.dirty && b.run();
    };
    m.id = l.uid, nt(l, !0), m();
  }, H = (l, u, f) => {
    u.component = l;
    const p = l.vnode.props;
    l.vnode = u, l.next = null, _i(l, u.props, p, f), wi(l, u.children, f), Ye(), bs(l), Xe();
  }, U = (l, u, f, p, h, _, y, v, b = !1) => {
    const m = l && l.children, E = l ? l.shapeFlag : 0, C = u.children, { patchFlag: S, shapeFlag: O } = u;
    if (S > 0) {
      if (S & 128) {
        Ze(
          m,
          C,
          f,
          p,
          h,
          _,
          y,
          v,
          b
        );
        return;
      } else if (S & 256) {
        Oe(
          m,
          C,
          f,
          p,
          h,
          _,
          y,
          v,
          b
        );
        return;
      }
    }
    O & 8 ? (E & 16 && ve(m, h, _), C !== m && g(f, C)) : E & 16 ? O & 16 ? Ze(
      m,
      C,
      f,
      p,
      h,
      _,
      y,
      v,
      b
    ) : ve(m, h, _, !0) : (E & 8 && g(f, ""), O & 16 && le(
      C,
      f,
      p,
      h,
      _,
      y,
      v,
      b
    ));
  }, Oe = (l, u, f, p, h, _, y, v, b) => {
    l = l || pt, u = u || pt;
    const m = l.length, E = u.length, C = Math.min(m, E);
    let S;
    for (S = 0; S < C; S++) {
      const O = u[S] = b ? Ke(u[S]) : Me(u[S]);
      R(
        l[S],
        O,
        f,
        null,
        h,
        _,
        y,
        v,
        b
      );
    }
    m > E ? ve(
      l,
      h,
      _,
      !0,
      !1,
      C
    ) : le(
      u,
      f,
      p,
      h,
      _,
      y,
      v,
      b,
      C
    );
  }, Ze = (l, u, f, p, h, _, y, v, b) => {
    let m = 0;
    const E = u.length;
    let C = l.length - 1, S = E - 1;
    for (; m <= C && m <= S; ) {
      const O = l[m], P = u[m] = b ? Ke(u[m]) : Me(u[m]);
      if (yt(O, P))
        R(
          O,
          P,
          f,
          null,
          h,
          _,
          y,
          v,
          b
        );
      else
        break;
      m++;
    }
    for (; m <= C && m <= S; ) {
      const O = l[C], P = u[S] = b ? Ke(u[S]) : Me(u[S]);
      if (yt(O, P))
        R(
          O,
          P,
          f,
          null,
          h,
          _,
          y,
          v,
          b
        );
      else
        break;
      C--, S--;
    }
    if (m > C) {
      if (m <= S) {
        const O = S + 1, P = O < E ? u[O].el : p;
        for (; m <= S; )
          R(
            null,
            u[m] = b ? Ke(u[m]) : Me(u[m]),
            f,
            P,
            h,
            _,
            y,
            v,
            b
          ), m++;
      }
    } else if (m > S)
      for (; m <= C; )
        Y(l[m], h, _, !0), m++;
    else {
      const O = m, P = m, V = /* @__PURE__ */ new Map();
      for (m = P; m <= S; m++) {
        const he = u[m] = b ? Ke(u[m]) : Me(u[m]);
        he.key != null && V.set(he.key, m);
      }
      let K, X = 0;
      const be = S - P + 1;
      let ut = !1, ls = 0;
      const xt = new Array(be);
      for (m = 0; m < be; m++)
        xt[m] = 0;
      for (m = O; m <= C; m++) {
        const he = l[m];
        if (X >= be) {
          Y(he, h, _, !0);
          continue;
        }
        let Re;
        if (he.key != null)
          Re = V.get(he.key);
        else
          for (K = P; K <= S; K++)
            if (xt[K - P] === 0 && yt(he, u[K])) {
              Re = K;
              break;
            }
        Re === void 0 ? Y(he, h, _, !0) : (xt[Re - P] = m + 1, Re >= ls ? ls = Re : ut = !0, R(
          he,
          u[Re],
          f,
          null,
          h,
          _,
          y,
          v,
          b
        ), X++);
      }
      const cs = ut ? Si(xt) : pt;
      for (K = cs.length - 1, m = be - 1; m >= 0; m--) {
        const he = P + m, Re = u[he], as = he + 1 < E ? u[he + 1].el : p;
        xt[m] === 0 ? R(
          null,
          Re,
          f,
          as,
          h,
          _,
          y,
          v,
          b
        ) : ut && (K < 0 || m !== cs[K] ? Te(Re, f, as, 2) : K--);
      }
    }
  }, Te = (l, u, f, p, h = null) => {
    const { el: _, type: y, transition: v, children: b, shapeFlag: m } = l;
    if (m & 6) {
      Te(l.component.subTree, u, f, p);
      return;
    }
    if (m & 128) {
      l.suspense.move(u, f, p);
      return;
    }
    if (m & 64) {
      y.move(l, u, f, ke);
      return;
    }
    if (y === fe) {
      s(_, u, f);
      for (let C = 0; C < b.length; C++)
        Te(b[C], u, f, p);
      s(l.anchor, u, f);
      return;
    }
    if (y === vn) {
      D(l, u, f);
      return;
    }
    if (p !== 2 && m & 1 && v)
      if (p === 0)
        v.beforeEnter(_), s(_, u, f), ue(() => v.enter(_), h);
      else {
        const { leave: C, delayLeave: S, afterLeave: O } = v, P = () => s(_, u, f), V = () => {
          C(_, () => {
            P(), O && O();
          });
        };
        S ? S(_, P, V) : V();
      }
    else
      s(_, u, f);
  }, Y = (l, u, f, p = !1, h = !1) => {
    const {
      type: _,
      props: y,
      ref: v,
      children: b,
      dynamicChildren: m,
      shapeFlag: E,
      patchFlag: C,
      dirs: S
    } = l;
    if (v != null && Pn(v, null, f, l, !0), E & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const O = E & 1 && S, P = !Kt(l);
    let V;
    if (P && (V = y && y.onVnodeBeforeUnmount) && Pe(V, u, l), E & 6)
      wt(l.component, f, p);
    else {
      if (E & 128) {
        l.suspense.unmount(f, p);
        return;
      }
      O && tt(l, null, u, "beforeUnmount"), E & 64 ? l.type.remove(
        l,
        u,
        f,
        h,
        ke,
        p
      ) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== fe || C > 0 && C & 64) ? ve(
        m,
        u,
        f,
        !1,
        !0
      ) : (_ === fe && C & 384 || !h && E & 16) && ve(b, u, f), p && Ie(l);
    }
    (P && (V = y && y.onVnodeUnmounted) || O) && ue(() => {
      V && Pe(V, u, l), O && tt(l, null, u, "unmounted");
    }, f);
  }, Ie = (l) => {
    const { type: u, el: f, anchor: p, transition: h } = l;
    if (u === fe) {
      ct(f, p);
      return;
    }
    if (u === vn) {
      B(l);
      return;
    }
    const _ = () => {
      r(f), h && !h.persisted && h.afterLeave && h.afterLeave();
    };
    if (l.shapeFlag & 1 && h && !h.persisted) {
      const { leave: y, delayLeave: v } = h, b = () => y(f, _);
      v ? v(l.el, _, b) : b();
    } else
      _();
  }, ct = (l, u) => {
    let f;
    for (; l !== u; )
      f = x(l), r(l), l = f;
    r(u);
  }, wt = (l, u, f) => {
    const { bum: p, scope: h, update: _, subTree: y, um: v } = l;
    p && hn(p), h.stop(), _ && (_.active = !1, Y(y, l, u, f)), v && ue(v, u), ue(() => {
      l.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve());
  }, ve = (l, u, f, p = !1, h = !1, _ = 0) => {
    for (let y = _; y < l.length; y++)
      Y(l[y], u, f, p, h);
  }, Qe = (l) => l.shapeFlag & 6 ? Qe(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : x(l.anchor || l.el), Dt = (l, u, f) => {
    l == null ? u._vnode && Y(u._vnode, null, null, !0) : R(
      u._vnode || null,
      l,
      u,
      null,
      null,
      null,
      f
    ), bs(), pr(), u._vnode = l;
  }, ke = {
    p: R,
    um: Y,
    m: Te,
    r: Ie,
    mt: Je,
    mc: le,
    pc: U,
    pbc: me,
    n: Qe,
    o: e
  };
  let at, et;
  return t && ([at, et] = t(
    ke
  )), {
    render: Dt,
    hydrate: at,
    createApp: gi(Dt, at)
  };
}
function _n({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function nt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ei(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (T(s) && T(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let a = r[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[o] = Ke(r[o]), a.el = i.el), n || Rr(i, a)), a.type === an && (a.el = i.el);
    }
}
function Si(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, a;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        a = o + i >> 1, e[n[a]] < d ? o = a + 1 : i = a;
      d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Pr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Pr(t);
}
const Ci = (e) => e.__isTeleport, fe = Symbol.for("v-fgt"), an = Symbol.for("v-txt"), lt = Symbol.for("v-cmt"), vn = Symbol.for("v-stc"), It = [];
let Se = null;
function Le(e = !1) {
  It.push(Se = e ? null : []);
}
function Ai() {
  It.pop(), Se = It[It.length - 1] || null;
}
let Mt = 1;
function Ps(e) {
  Mt += e;
}
function Nr(e) {
  return e.dynamicChildren = Mt > 0 ? Se || pt : null, Ai(), Mt > 0 && Se && Se.push(e), e;
}
function ft(e, t, n, s, r, o) {
  return Nr(
    G(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function Nn(e, t, n, s, r) {
  return Nr(
    oe(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Mn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const un = "__vInternal", Mr = ({ key: e }) => e ?? null, $t = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? q(e) || ae(e) || I(e) ? { i: ye, r: e, k: t, f: !!n } : e : null);
function G(e, t = null, n = null, s = 0, r = null, o = e === fe ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mr(t),
    ref: t && $t(t),
    scopeId: _r,
    slotScopeIds: null,
    children: n,
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
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ye
  };
  return a ? (ss(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= q(n) ? 8 : 16), Mt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Se && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Se.push(c), c;
}
const oe = Oi;
function Oi(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === $o) && (e = lt), Mn(e)) {
    const a = qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ss(a, n), Mt > 0 && !o && Se && (a.shapeFlag & 6 ? Se[Se.indexOf(e)] = a : Se.push(a)), a.patchFlag |= -2, a;
  }
  if (Hi(e) && (e = e.__vccOpts), t) {
    t = Ti(t);
    let { class: a, style: c } = t;
    a && !q(a) && (t.class = nn(a)), W(c) && (ir(c) && !T(c) && (c = J({}, c)), t.style = Bn(c));
  }
  const i = q(e) ? 1 : Wo(e) ? 128 : Ci(e) ? 64 : W(e) ? 4 : I(e) ? 2 : 0;
  return G(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function Ti(e) {
  return e ? ir(e) || un in e ? J({}, e) : e : null;
}
function qe(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, a = t ? Pi(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Mr(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat($t(t)) : [r, $t(t)] : $t(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== fe ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && qe(e.ssContent),
    ssFallback: e.ssFallback && qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Ii(e = " ", t = 0) {
  return oe(an, null, e, t);
}
function Ri(e = "", t = !1) {
  return t ? (Le(), Nn(lt, null, e)) : oe(lt, null, e);
}
function Me(e) {
  return e == null || typeof e == "boolean" ? oe(lt) : T(e) ? oe(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ke(e) : oe(an, null, String(e));
}
function Ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qe(e);
}
function ss(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ss(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(un in t) ? t._ctx = ye : r === 3 && ye && (ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    I(t) ? (t = { default: t, _ctx: ye }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Ii(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Pi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = nn([t.class, s.class]));
      else if (r === "style")
        t.style = Bn([t.style, s.style]);
      else if (Jt(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(T(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Pe(e, t, n, s = null) {
  Ce(e, t, 7, [
    n,
    s
  ]);
}
const Ni = Sr();
let Mi = 0;
function ji(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Ni, o = {
    uid: Mi++,
    vnode: e,
    type: s,
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
    scope: new eo(
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
    propsOptions: Ar(s, r),
    emitsOptions: mr(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: $,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: $,
    data: $,
    props: $,
    attrs: $,
    slots: $,
    refs: $,
    setupState: $,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Fo.bind(null, o), e.ce && e.ce(o), o;
}
let te = null, rs, jn;
{
  const e = Ws(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  rs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), jn = t(
    "__VUE_SSR_SETTERS__",
    (n) => fn = n
  );
}
const bt = (e) => {
  rs(e), e.scope.on();
}, it = () => {
  te && te.scope.off(), rs(null);
};
function jr(e) {
  return e.vnode.shapeFlag & 4;
}
let fn = !1;
function Di(e, t = !1) {
  t && jn(t);
  const { props: n, children: s } = e.vnode, r = jr(e);
  mi(e, n, r, t), bi(e, s);
  const o = r ? ki(e, t) : void 0;
  return t && jn(!1), o;
}
function ki(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = lr(new Proxy(e.ctx, ci));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Ui(e) : null;
    bt(e), Ye();
    const o = Ve(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (Xe(), it(), Gs(o)) {
      if (o.then(it, it), t)
        return o.then((i) => {
          Ns(e, i, t);
        }).catch((i) => {
          rn(i, e, 0);
        });
      e.asyncDep = o;
    } else
      Ns(e, o, t);
  } else
    Dr(e, t);
}
function Ns(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) && (e.setupState = ur(t)), Dr(e, n);
}
let Ms;
function Dr(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ms && !s.render) {
      const r = s.template || ts(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: c } = s, d = J(
          J(
            {
              isCustomElement: o,
              delimiters: a
            },
            i
          ),
          c
        );
        s.render = Ms(r, d);
      }
    }
    e.render = s.render || pe;
  }
  {
    bt(e), Ye();
    try {
      ai(e);
    } finally {
      Xe(), it();
    }
  }
}
function Li(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return de(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Ui(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Li(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function os(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(ur(lr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Tt)
          return Tt[n](e);
      },
      has(t, n) {
        return n in t || n in Tt;
      }
    }));
}
const Fi = /(?:^|[-_])(\w)/g, Vi = (e) => e.replace(Fi, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function kr(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Lr(e, t, n = !1) {
  let s = kr(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Vi(s) : n ? "App" : "Anonymous";
}
function Hi(e) {
  return I(e) && "__vccOpts" in e;
}
const Xt = (e, t) => So(e, t, fn);
function ht(e, t, n) {
  const s = arguments.length;
  return s === 2 ? W(t) && !T(t) ? Mn(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Mn(n) && (n = [n]), oe(e, t, n));
}
const Bi = "3.4.5", Ki = "http://www.w3.org/2000/svg", $i = "http://www.w3.org/1998/Math/MathML", $e = typeof document < "u" ? document : null, js = $e && /* @__PURE__ */ $e.createElement("template"), Gi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? $e.createElementNS(Ki, e) : t === "mathml" ? $e.createElementNS($i, e) : $e.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => $e.createTextNode(e),
  createComment: (e) => $e.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => $e.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      js.innerHTML = s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e;
      const a = js.content;
      if (s === "svg" || s === "mathml") {
        const c = a.firstChild;
        for (; c.firstChild; )
          a.appendChild(c.firstChild);
        a.removeChild(c);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Wi = Symbol("_vtc");
function zi(e, t, n) {
  const s = e[Wi];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const qi = Symbol("_vod"), Yi = Symbol("");
function Xi(e, t, n) {
  const s = e.style, r = q(n);
  if (n && !r) {
    if (t && !q(t))
      for (const o in t)
        n[o] == null && Dn(s, o, "");
    for (const o in n)
      Dn(s, o, n[o]);
  } else {
    const o = s.display;
    if (r) {
      if (t !== n) {
        const i = s[Yi];
        i && (n += ";" + i), s.cssText = n;
      }
    } else
      t && e.removeAttribute("style");
    qi in e && (s.display = o);
  }
}
const Ds = /\s*!important$/;
function Dn(e, t, n) {
  if (T(n))
    n.forEach((s) => Dn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ji(e, t);
    Ds.test(n) ? e.setProperty(
      xe(s),
      n.replace(Ds, ""),
      "important"
    ) : e[s] = n;
  }
}
const ks = ["Webkit", "Moz", "ms"], bn = {};
function Ji(e, t) {
  const n = bn[t];
  if (n)
    return n;
  let s = ge(t);
  if (s !== "filter" && s in e)
    return bn[t] = s;
  s = tn(s);
  for (let r = 0; r < ks.length; r++) {
    const o = ks[r] + s;
    if (o in e)
      return bn[t] = o;
  }
  return t;
}
const Ls = "http://www.w3.org/1999/xlink";
function Zi(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ls, t.slice(6, t.length)) : e.setAttributeNS(Ls, t, n);
  else {
    const o = Qr(t);
    n == null || o && !zs(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Qi(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), e[t] = n ?? "";
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    e._value = n;
    const d = a === "OPTION" ? e.getAttribute("value") : e.value, g = n ?? "";
    d !== g && (e.value = g), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = zs(n) : n == null && d === "string" ? (n = "", c = !0) : d === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(t);
}
function el(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function tl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Us = Symbol("_vei");
function nl(e, t, n, s, r = null) {
  const o = e[Us] || (e[Us] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [a, c] = sl(t);
    if (s) {
      const d = o[t] = il(s, r);
      el(e, a, d, c);
    } else
      i && (tl(e, a, i, c), o[t] = void 0);
  }
}
const Fs = /(?:Once|Passive|Capture)$/;
function sl(e) {
  let t;
  if (Fs.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Fs); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xe(e.slice(2)), t];
}
let wn = 0;
const rl = /* @__PURE__ */ Promise.resolve(), ol = () => wn || (rl.then(() => wn = 0), wn = Date.now());
function il(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ce(
      ll(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = ol(), n;
}
function ll(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const Vs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cl = (e, t, n, s, r, o, i, a, c) => {
  const d = r === "svg";
  t === "class" ? zi(e, s, d) : t === "style" ? Xi(e, n, s) : Jt(t) ? Fn(t) || nl(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : al(e, t, s, d)) ? Qi(
    e,
    t,
    s,
    o,
    i,
    a,
    c
  ) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Zi(e, t, s, d));
};
function al(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vs(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Vs(t) && q(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ul(e, t) {
  const n = /* @__PURE__ */ ln(e);
  class s extends is {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
const fl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class is extends fl {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Jn(() => {
      this._connected || (Bs(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const r of s)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, r = !1) => {
      const { props: o, styles: i } = s;
      let a;
      if (o && !T(o))
        for (const c in o) {
          const d = o[c];
          (d === Number || d && d.type === Number) && (c in this._props && (this._props[c] = us(this._props[c])), (a || (a = /* @__PURE__ */ Object.create(null)))[ge(c)] = !0);
        }
      this._numberProps = a, r && this._resolveProps(s), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = T(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of s.map(ge))
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
    let n = this.getAttribute(t);
    const s = ge(t);
    this._numberProps && this._numberProps[s] && (n = us(n)), this._setProp(s, n, !1);
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
  _setProp(t, n, s = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(xe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(xe(t), n + "") : n || this.removeAttribute(xe(t))));
  }
  _update() {
    Bs(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = oe(this._def, J({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const s = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: i
          })
        );
      };
      n.emit = (o, ...i) => {
        s(o, i), xe(o) !== o && s(xe(o), i);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof is) {
          n.parent = r._instance, n.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const s = document.createElement("style");
      s.textContent = n, this.shadowRoot.appendChild(s);
    });
  }
}
const dl = /* @__PURE__ */ J({ patchProp: cl }, Gi);
let Hs;
function hl() {
  return Hs || (Hs = xi(dl));
}
const Bs = (...e) => {
  hl().render(...e);
};
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */
const ee = {
  itemsToShow: 1,
  itemsToScroll: 1,
  modelValue: 0,
  transition: 300,
  autoplay: 0,
  snapAlign: "center",
  wrapAround: !1,
  throttle: 16,
  pauseAutoplayOnHover: !1,
  mouseDrag: !0,
  touchDrag: !0,
  dir: "ltr",
  breakpoints: void 0,
  i18n: {
    ariaNextSlide: "Navigate to next slide",
    ariaPreviousSlide: "Navigate to previous slide",
    ariaNavigateToSlide: "Navigate to slide {slideNumber}",
    ariaGallery: "Gallery",
    itemXofY: "Item {currentSlide} of {slidesCount}",
    iconArrowUp: "Arrow pointing upwards",
    iconArrowDown: "Arrow pointing downwards",
    iconArrowRight: "Arrow pointing to the right",
    iconArrowLeft: "Arrow pointing to the left"
  }
}, Ks = {
  // count of items to showed per view
  itemsToShow: {
    default: ee.itemsToShow,
    type: Number
  },
  // count of items to be scrolled
  itemsToScroll: {
    default: ee.itemsToScroll,
    type: Number
  },
  // control infinite scrolling mode
  wrapAround: {
    default: ee.wrapAround,
    type: Boolean
  },
  // control max drag
  throttle: {
    default: ee.throttle,
    type: Number
  },
  // control snap position alignment
  snapAlign: {
    default: ee.snapAlign,
    validator(e) {
      return ["start", "end", "center", "center-even", "center-odd"].includes(e);
    }
  },
  // sliding transition time in ms
  transition: {
    default: ee.transition,
    type: Number
  },
  // an object to store breakpoints
  breakpoints: {
    default: ee.breakpoints,
    type: Object
  },
  // time to auto advance slides in ms
  autoplay: {
    default: ee.autoplay,
    type: Number
  },
  // pause autoplay when mouse hover over the carousel
  pauseAutoplayOnHover: {
    default: ee.pauseAutoplayOnHover,
    type: Boolean
  },
  // slide number number of initial slide
  modelValue: {
    default: void 0,
    type: Number
  },
  // toggle mouse dragging.
  mouseDrag: {
    default: ee.mouseDrag,
    type: Boolean
  },
  // toggle mouse dragging.
  touchDrag: {
    default: ee.touchDrag,
    type: Boolean
  },
  // control snap position alignment
  dir: {
    default: ee.dir,
    validator(e) {
      return ["rtl", "ltr"].includes(e);
    }
  },
  // aria-labels and additional text labels
  i18n: {
    default: ee.i18n,
    type: Object
  },
  // an object to pass all settings
  settings: {
    default() {
      return {};
    },
    type: Object
  }
};
function pl({ config: e, slidesCount: t }) {
  const { snapAlign: n, wrapAround: s, itemsToShow: r = 1 } = e;
  if (s)
    return Math.max(t - 1, 0);
  let o;
  switch (n) {
    case "start":
      o = t - r;
      break;
    case "end":
      o = t - 1;
      break;
    case "center":
    case "center-odd":
      o = t - Math.ceil((r - 0.5) / 2);
      break;
    case "center-even":
      o = t - Math.ceil(r / 2);
      break;
    default:
      o = 0;
      break;
  }
  return Math.max(o, 0);
}
function gl({ config: e, slidesCount: t }) {
  const { wrapAround: n, snapAlign: s, itemsToShow: r = 1 } = e;
  let o = 0;
  if (n || r > t)
    return o;
  switch (s) {
    case "start":
      o = 0;
      break;
    case "end":
      o = r - 1;
      break;
    case "center":
    case "center-odd":
      o = Math.floor((r - 1) / 2);
      break;
    case "center-even":
      o = Math.floor((r - 2) / 2);
      break;
    default:
      o = 0;
      break;
  }
  return o;
}
function kn({ val: e, max: t, min: n }) {
  return t < n ? e : Math.min(Math.max(e, n), t);
}
function ml({ config: e, currentSlide: t, slidesCount: n }) {
  const { snapAlign: s, wrapAround: r, itemsToShow: o = 1 } = e;
  let i = t;
  switch (s) {
    case "center":
    case "center-odd":
      i -= (o - 1) / 2;
      break;
    case "center-even":
      i -= (o - 2) / 2;
      break;
    case "end":
      i -= o - 1;
      break;
  }
  return r ? i : kn({
    val: i,
    max: n - o,
    min: 0
  });
}
function Ur(e) {
  return e ? e.reduce((t, n) => {
    var s;
    return n.type === fe ? [...t, ...Ur(n.children)] : ((s = n.type) === null || s === void 0 ? void 0 : s.name) === "CarouselSlide" ? [...t, n] : t;
  }, []) : [];
}
function Ln({ val: e, max: t, min: n = 0 }) {
  return e > t ? Ln({ val: e - (t + 1), max: t, min: n }) : e < n ? Ln({ val: e + (t + 1), max: t, min: n }) : e;
}
function _l(e, t) {
  let n;
  return t ? function(...s) {
    const r = this;
    n || (e.apply(r, s), n = !0, setTimeout(() => n = !1, t));
  } : e;
}
function vl(e, t) {
  let n;
  return function(...s) {
    n && clearTimeout(n), n = setTimeout(() => {
      e(...s), n = null;
    }, t);
  };
}
function bl(e = "", t = {}) {
  return Object.entries(t).reduce((n, [s, r]) => n.replace(`{${s}}`, String(r)), e);
}
var wl = /* @__PURE__ */ ln({
  name: "ARIA",
  setup() {
    const e = Ee("config", We(Object.assign({}, ee))), t = Ee("currentSlide", z(0)), n = Ee("slidesCount", z(0));
    return () => ht("div", {
      class: ["carousel__liveregion", "carousel__sr-only"],
      "aria-live": "polite",
      "aria-atomic": "true"
    }, bl(e.i18n.itemXofY, {
      currentSlide: t.value + 1,
      slidesCount: n.value
    }));
  }
}), xl = /* @__PURE__ */ ln({
  name: "Carousel",
  props: Ks,
  setup(e, { slots: t, emit: n, expose: s }) {
    var r;
    const o = z(null), i = z([]), a = z(0), c = z(0), d = We(Object.assign({}, ee));
    let g = Object.assign({}, ee), w;
    const x = z((r = e.modelValue) !== null && r !== void 0 ? r : 0), A = z(0), k = z(0), R = z(0), L = z(0);
    let F, ne;
    Ne("config", d), Ne("slidesCount", c), Ne("currentSlide", x), Ne("maxSlide", R), Ne("minSlide", L), Ne("slideWidth", a);
    function D() {
      w = Object.assign({}, e.breakpoints), g = Object.assign(Object.assign(Object.assign({}, g), e), { i18n: Object.assign(Object.assign({}, g.i18n), e.i18n), breakpoints: void 0 }), ie(g);
    }
    function B() {
      if (!w || !Object.keys(w).length)
        return;
      const f = Object.keys(w).map((h) => Number(h)).sort((h, _) => +_ - +h);
      let p = Object.assign({}, g);
      f.some((h) => {
        const _ = window.matchMedia(`(min-width: ${h}px)`).matches;
        return _ && (p = Object.assign(Object.assign({}, p), w[h])), _;
      }), ie(p);
    }
    function ie(f) {
      Object.entries(f).forEach(([p, h]) => d[p] = h);
    }
    const N = vl(() => {
      B(), Z();
    }, 16);
    function Z() {
      if (!o.value)
        return;
      const f = o.value.getBoundingClientRect();
      a.value = f.width / d.itemsToShow;
    }
    function le() {
      c.value <= 0 || (k.value = Math.ceil((c.value - 1) / 2), R.value = pl({ config: d, slidesCount: c.value }), L.value = gl({ config: d, slidesCount: c.value }), d.wrapAround || (x.value = kn({
        val: x.value,
        max: R.value,
        min: L.value
      })));
    }
    Qn(() => {
      Jn(() => Z()), setTimeout(() => Z(), 1e3), B(), Ze(), window.addEventListener("resize", N, { passive: !0 }), n("init");
    }), es(() => {
      ne && clearTimeout(ne), F && clearInterval(F), window.removeEventListener("resize", N, {
        passive: !0
      });
    });
    let se = !1;
    const me = { x: 0, y: 0 }, Ae = { x: 0, y: 0 }, _e = We({ x: 0, y: 0 }), De = z(!1), Je = z(!1), jt = () => {
      De.value = !0;
    }, Q = () => {
      De.value = !1;
    };
    function H(f) {
      ["INPUT", "TEXTAREA", "SELECT"].includes(f.target.tagName) || (se = f.type === "touchstart", se || f.preventDefault(), !(!se && f.button !== 0 || Y.value) && (me.x = se ? f.touches[0].clientX : f.clientX, me.y = se ? f.touches[0].clientY : f.clientY, document.addEventListener(se ? "touchmove" : "mousemove", U, !0), document.addEventListener(se ? "touchend" : "mouseup", Oe, !0)));
    }
    const U = _l((f) => {
      Je.value = !0, Ae.x = se ? f.touches[0].clientX : f.clientX, Ae.y = se ? f.touches[0].clientY : f.clientY;
      const p = Ae.x - me.x, h = Ae.y - me.y;
      _e.y = h, _e.x = p;
    }, d.throttle);
    function Oe() {
      const f = d.dir === "rtl" ? -1 : 1, p = Math.sign(_e.x) * 0.4, h = Math.round(_e.x / a.value + p) * f;
      if (h && !se) {
        const _ = (y) => {
          y.stopPropagation(), window.removeEventListener("click", _, !0);
        };
        window.addEventListener("click", _, !0);
      }
      Ie(x.value - h), _e.x = 0, _e.y = 0, Je.value = !1, document.removeEventListener(se ? "touchmove" : "mousemove", U, !0), document.removeEventListener(se ? "touchend" : "mouseup", Oe, !0);
    }
    function Ze() {
      !d.autoplay || d.autoplay <= 0 || (F = setInterval(() => {
        d.pauseAutoplayOnHover && De.value || ct();
      }, d.autoplay));
    }
    function Te() {
      F && (clearInterval(F), F = null), Ze();
    }
    const Y = z(!1);
    function Ie(f) {
      const p = d.wrapAround ? f : kn({
        val: f,
        max: R.value,
        min: L.value
      });
      x.value === p || Y.value || (n("slide-start", {
        slidingToIndex: f,
        currentSlideIndex: x.value,
        prevSlideIndex: A.value,
        slidesCount: c.value
      }), Y.value = !0, A.value = x.value, x.value = p, ne = setTimeout(() => {
        if (d.wrapAround) {
          const h = Ln({
            val: p,
            max: R.value,
            min: 0
          });
          h !== x.value && (x.value = h, n("loop", {
            currentSlideIndex: x.value,
            slidingToIndex: f
          }));
        }
        n("update:modelValue", x.value), n("slide-end", {
          currentSlideIndex: x.value,
          prevSlideIndex: A.value,
          slidesCount: c.value
        }), Y.value = !1, Te();
      }, d.transition));
    }
    function ct() {
      Ie(x.value + d.itemsToScroll);
    }
    function wt() {
      Ie(x.value - d.itemsToScroll);
    }
    const ve = { slideTo: Ie, next: ct, prev: wt };
    Ne("nav", ve), Ne("isSliding", Y);
    const Qe = Xt(() => ml({
      config: d,
      currentSlide: x.value,
      slidesCount: c.value
    }));
    Ne("slidesToScroll", Qe);
    const Dt = Xt(() => {
      const f = d.dir === "rtl" ? -1 : 1, p = Qe.value * a.value * f;
      return {
        transform: `translateX(${_e.x - p}px)`,
        transition: `${Y.value ? d.transition : 0}ms`,
        margin: d.wrapAround ? `0 -${c.value * a.value}px` : "",
        width: "100%"
      };
    });
    function ke() {
      D(), B(), le(), Z(), Te();
    }
    Object.keys(Ks).forEach((f) => {
      ["modelValue"].includes(f) || _t(() => e[f], ke);
    }), _t(() => e.modelValue, (f) => {
      f !== x.value && Ie(Number(f));
    }), _t(c, le), n("before-init"), D();
    const at = {
      config: d,
      slidesCount: c,
      slideWidth: a,
      next: ct,
      prev: wt,
      slideTo: Ie,
      currentSlide: x,
      maxSlide: R,
      minSlide: L,
      middleSlide: k
    };
    s({
      updateBreakpointsConfigs: B,
      updateSlidesData: le,
      updateSlideWidth: Z,
      initDefaultConfigs: D,
      restartCarousel: ke,
      slideTo: Ie,
      next: ct,
      prev: wt,
      nav: ve,
      data: at
    });
    const et = t.default || t.slides, l = t.addons, u = We(at);
    return () => {
      const f = Ur(et == null ? void 0 : et(u)), p = (l == null ? void 0 : l(u)) || [];
      f.forEach((v, b) => v.props.index = b);
      let h = f;
      if (d.wrapAround) {
        const v = f.map((m, E) => qe(m, {
          index: -f.length + E,
          isClone: !0,
          key: `clone-before-${E}`
        })), b = f.map((m, E) => qe(m, {
          index: f.length + E,
          isClone: !0,
          key: `clone-after-${E}`
        }));
        h = [...v, ...f, ...b];
      }
      i.value = f, c.value = Math.max(f.length, 1);
      const _ = ht("ol", {
        class: "carousel__track",
        style: Dt.value,
        onMousedownCapture: d.mouseDrag ? H : null,
        onTouchstartPassiveCapture: d.touchDrag ? H : null
      }, h), y = ht("div", { class: "carousel__viewport" }, _);
      return ht("section", {
        ref: o,
        class: {
          carousel: !0,
          "is-sliding": Y.value,
          "is-dragging": Je.value,
          "is-hover": De.value,
          "carousel--rtl": d.dir === "rtl"
        },
        dir: d.dir,
        "aria-label": d.i18n.ariaGallery,
        tabindex: "0",
        onMouseenter: jt,
        onMouseleave: Q
      }, [y, p, ht(wl)]);
    };
  }
}), $s;
(function(e) {
  e.arrowUp = "arrowUp", e.arrowDown = "arrowDown", e.arrowRight = "arrowRight", e.arrowLeft = "arrowLeft";
})($s || ($s = {}));
var yl = /* @__PURE__ */ ln({
  name: "CarouselSlide",
  props: {
    index: {
      type: Number,
      default: 1
    },
    isClone: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { slots: t }) {
    const n = Ee("config", We(Object.assign({}, ee))), s = Ee("currentSlide", z(0)), r = Ee("slidesToScroll", z(0)), o = Ee("isSliding", z(!1)), i = () => e.index === s.value, a = () => e.index === s.value - 1, c = () => e.index === s.value + 1, d = () => {
      const g = Math.floor(r.value), w = Math.ceil(r.value + n.itemsToShow - 1);
      return e.index >= g && e.index <= w;
    };
    return () => {
      var g;
      return ht("li", {
        style: { width: `${100 / n.itemsToShow}%` },
        class: {
          carousel__slide: !0,
          "carousel__slide--clone": e.isClone,
          "carousel__slide--visible": d(),
          "carousel__slide--active": i(),
          "carousel__slide--prev": a(),
          "carousel__slide--next": c(),
          "carousel__slide--sliding": o.value
        },
        "aria-hidden": !d()
      }, (g = t.default) === null || g === void 0 ? void 0 : g.call(t));
    };
  }
});
const El = ':root{--vc-clr-primary: #000;--vc-clr-secondary: #090f207f;--vc-clr-white: #ffffff;--vc-icn-width: 1.2em;--vc-nav-width: 30px;--vc-nav-height: 30px;--vc-nav-border-radius: 0;--vc-nav-color: var(--vc-clr-primary);--vc-nav-color-hover: var(--vc-clr-secondary);--vc-nav-background: transparent;--vc-pgn-width: 12px;--vc-pgn-height: 4px;--vc-pgn-margin: 4px;--vc-pgn-border-radius: 0;--vc-pgn-background-color: var(--vc-clr-secondary);--vc-pgn-active-color: var(--vc-clr-primary)}.carousel__prev,.carousel__next{box-sizing:content-box;background:var(--vc-nav-background);border-radius:var(--vc-nav-border-radius);width:var(--vc-nav-width);height:var(--vc-nav-height);text-align:center;font-size:var(--vc-nav-height);padding:0;color:var(--vc-nav-color);display:flex;justify-content:center;align-items:center;position:absolute;border:0;cursor:pointer;margin:0 10px;top:50%;transform:translateY(-50%)}.carousel__prev:hover,.carousel__next:hover{color:var(--vc-nav-color-hover)}.carousel__next--disabled,.carousel__prev--disabled{cursor:not-allowed;opacity:.5}.carousel__prev{left:0}.carousel__next{right:0}.carousel--rtl .carousel__prev{left:auto;right:0}.carousel--rtl .carousel__next{right:auto;left:0}.carousel{position:relative;text-align:center;box-sizing:border-box;touch-action:pan-y;overscroll-behavior:none}.carousel.is-dragging{touch-action:none}.carousel *{box-sizing:border-box}.carousel__track{display:flex;padding:0!important;position:relative}.carousel__viewport{overflow:hidden}.carousel__sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.carousel__icon{width:var(--vc-icn-width);height:var(--vc-icn-width);fill:currentColor}.carousel__pagination{display:flex;justify-content:center;list-style:none;line-height:0;margin:10px 0 0}.carousel__pagination-button{display:block;border:0;margin:0;cursor:pointer;padding:var(--vc-pgn-margin);background:transparent}.carousel__pagination-button:after{display:block;content:"";width:var(--vc-pgn-width);height:var(--vc-pgn-height);border-radius:var(--vc-pgn-border-radius);background-color:var(--vc-pgn-background-color)}.carousel__pagination-button:hover:after,.carousel__pagination-button--active:after{background-color:var(--vc-pgn-active-color)}.carousel__slide{scroll-snap-stop:auto;flex-shrink:0;margin:0;position:relative;display:flex;justify-content:center;align-items:center;transform:translateZ(0)}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.fixed{position:fixed!important}.absolute{position:absolute!important}.relative{position:relative!important}.left-0{left:0!important}.top-0{top:0!important}.z-10{z-index:10!important}.z-\\[9998\\]{z-index:9998!important}.flex{display:flex!important}.h-12{height:3rem!important}.h-24{height:6rem!important}.h-64{height:16rem!important}.h-96{height:24rem!important}.h-\\[100vh\\]{height:100vh!important}.h-auto{height:auto!important}.h-full{height:100%!important}.max-h-96{max-height:24rem!important}.max-h-\\[500px\\]{max-height:500px!important}.max-h-\\[calc\\(100v-550px\\)\\]{max-height:calc(100v - 550px)!important}.max-h-\\[calc\\(100svh-500px\\)\\]{max-height:calc(100svh - 500px)!important}.max-h-\\[calc\\(100svh-550px\\)\\]{max-height:calc(100svh - 550px)!important}.max-h-\\[400px\\]{max-height:400px!important}.max-h-\\[calc\\(100svh-400\\)\\]{max-height:calc(100svh - 400)!important}.max-h-\\[calc\\(100vh-400\\)\\]{max-height:calc(100vh - 400)!important}.max-h-\\[calc\\(100svh-400px\\)\\]{max-height:calc(100svh - 400px)!important}.min-h-screen{min-height:100vh!important}.w-12{width:3rem!important}.w-24{width:6rem!important}.w-\\[100vw\\]{width:100vw!important}.w-fit{width:-moz-fit-content!important;width:fit-content!important}.w-full{width:100%!important}.cursor-pointer{cursor:pointer!important}.appearance-none{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important}.flex-col{flex-direction:column!important}.flex-wrap{flex-wrap:wrap!important}.items-center{align-items:center!important}.justify-end{justify-content:flex-end!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.gap-4{gap:1rem!important}.overflow-y-auto{overflow-y:auto!important}.rounded-xl{border-radius:.75rem!important}.border-4{border-width:4px!important}.border-solid{border-style:solid!important}.border-primary-blue{--tw-border-opacity: 1 !important;border-color:rgb(9 135 197 / var(--tw-border-opacity))!important}.border-transparent{border-color:transparent!important}.bg-black\\/50{background-color:#00000080!important}.bg-transparent{background-color:transparent!important}.bg-white{--tw-bg-opacity: 1 !important;background-color:rgb(255 255 255 / var(--tw-bg-opacity))!important}.object-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-cover{-o-object-fit:cover!important;object-fit:cover!important}.p-4{padding:1rem!important}.text-gray-700\\/30{color:#3741514d!important}.duration-300{transition-duration:.3s!important}.hover\\:bg-gray-100\\/20:hover{background-color:#f3f4f633!important}.hover\\:text-gray-700:hover{--tw-text-opacity: 1 !important;color:rgb(55 65 81 / var(--tw-text-opacity))!important}', Sl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Cl = {
  components: {
    Carousel: xl,
    Slide: yl
  },
  props: {
    vehicleId: {
      type: String,
      required: !0,
      default: ""
    }
  },
  setup(e) {
    const t = z([]), n = z(null), s = z(0), r = () => {
      s.value = s.value === 0 ? 0 : s.value - 1;
    }, o = () => {
      t.value.length - 1 !== s.value && (s.value = s.value + 1);
    }, i = (k) => {
      s.value = k;
    }, a = Xt(() => t.value[s.value]), c = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/resolve`, d = async () => {
      var k;
      try {
        const L = await (await fetch(c)).json();
        n.value = L;
        const F = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/thumbnail`;
        t.value.push(F), (k = L == null ? void 0 : L.images) == null || k.forEach((ne) => {
          const D = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/picture/${ne}`;
          t.value.push(D);
        });
      } catch (R) {
        console.error("An error occurred while fetching the data:", R);
      }
    };
    Qn(() => {
      d(), A(0);
    });
    const g = z(!1), w = () => {
      g.value = !0;
    }, x = () => {
      g.value = !1;
    }, A = (k) => {
      s.value = k;
    };
    return {
      currentSlide: s,
      slideTo: i,
      images: t,
      prev: r,
      next: o,
      onImageClick: w,
      image: a,
      isOpen: g,
      close: x,
      setCurrentImage: A
    };
  }
}, Al = { class: "flex flex-col w-full relative items-center" }, Ol = { class: "relative" }, Tl = ["src"], Il = { class: "flex absolute items-center bg-transparent justify-between w-full h-full z-10" }, Rl = /* @__PURE__ */ G("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-12 h-12"
}, [
  /* @__PURE__ */ G("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 19.5 8.25 12l7.5-7.5"
  })
], -1), Pl = [
  Rl
], Nl = /* @__PURE__ */ G("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-12 h-12"
}, [
  /* @__PURE__ */ G("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "m8.25 4.5 7.5 7.5-7.5 7.5"
  })
], -1), Ml = [
  Nl
], jl = {
  key: 0,
  class: "fixed z-[9998] top-0 left-0 w-[100vw] h-[100vh] bg-black/50"
}, Dl = { class: "modal-wrapper" }, kl = { class: "min-h-screen bg-white flex flex-col p-4" }, Ll = { class: "relative w-full" }, Ul = ["src"], Fl = { class: "flex justify-end w-full absolute top-0" }, Vl = /* @__PURE__ */ G("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-12 h-12"
}, [
  /* @__PURE__ */ G("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18 18 6M6 6l12 12"
  })
], -1), Hl = [
  Vl
], Bl = { class: "flex flex-wrap justify-center w-full gap-4 items-center overflow-y-auto max-h-[400px]" }, Kl = ["src", "onClick"];
function $l(e, t, n, s, r, o) {
  const i = xs("Slide"), a = xs("Carousel");
  return Le(), ft(fe, null, [
    G("div", Al, [
      oe(a, {
        id: "gallery",
        "items-to-show": 1,
        "wrap-around": !1,
        modelValue: s.currentSlide,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => s.currentSlide = c)
      }, {
        default: Et(() => [
          (Le(!0), ft(fe, null, gn(s.images, (c, d) => (Le(), Nn(i, { key: d }, {
            default: Et(() => [
              G("div", Ol, [
                G("img", {
                  src: c,
                  class: "w-full h-auto max-h-96 object-contain flex rounded-xl justify-center items-center"
                }, null, 8, Tl)
              ])
            ]),
            _: 2
          }, 1024))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"]),
      G("div", Il, [
        G("button", {
          onClick: t[1] || (t[1] = (...c) => s.prev && s.prev(...c)),
          class: "flex appearance-none h-64 items-center w-fit cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
        }, Pl),
        G("button", {
          onClick: t[2] || (t[2] = (...c) => s.onImageClick && s.onImageClick(...c)),
          class: "flex appearance-none items-center w-full h-96 cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
        }),
        G("button", {
          onClick: t[3] || (t[3] = (...c) => s.next && s.next(...c)),
          class: "flex appearance-none h-64 items-center w-fit cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
        }, Ml)
      ])
    ]),
    s.isOpen ? (Le(), ft("div", jl, [
      G("div", Dl, [
        G("div", kl, [
          G("div", Ll, [
            oe(a, {
              id: "gallery",
              "items-to-show": 1,
              "wrap-around": !1,
              modelValue: s.currentSlide,
              "onUpdate:modelValue": t[4] || (t[4] = (c) => s.currentSlide = c)
            }, {
              default: Et(() => [
                (Le(!0), ft(fe, null, gn(s.images, (c, d) => (Le(), Nn(i, { key: d }, {
                  default: Et(() => [
                    G("img", {
                      src: c,
                      class: "w-full h-full max-h-[calc(100svh-400px)] object-contain flex rounded-xl items-center bg-white"
                    }, null, 8, Ul)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"]),
            G("div", Fl, [
              G("button", {
                onClick: t[5] || (t[5] = (...c) => s.close && s.close(...c)),
                class: "flex appearance-none items-center w-fit cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
              }, Hl)
            ])
          ]),
          G("div", Bl, [
            (Le(!0), ft(fe, null, gn(s.images, (c, d) => (Le(), ft("img", {
              key: d,
              src: c,
              onClick: () => s.setCurrentImage(d),
              class: nn([{ "border-4 border-solid border-primary-blue": s.currentSlide === d }, "w-24 h-24 object-cover flex cursor-pointer rounded-xl justify-center items-center bg-white"])
            }, null, 10, Kl))), 128))
          ])
        ])
      ])
    ])) : Ri("", !0)
  ], 64);
}
const Gl = /* @__PURE__ */ Sl(Cl, [["render", $l], ["styles", [El]]]), Wl = /* @__PURE__ */ ul(Gl);
customElements.define("image-slider", Wl);
