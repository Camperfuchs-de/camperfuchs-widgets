function Fn(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const $ = {}, pt = [], pe = () => {
}, Us = () => !1, Jt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Un = (e) => e.startsWith("onUpdate:"), J = Object.assign, Vn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Vs = Object.prototype.hasOwnProperty, N = (e, t) => Vs.call(e, t), T = Array.isArray, Ct = (e) => Qt(e) === "[object Map]", Hs = (e) => Qt(e) === "[object Set]", I = (e) => typeof e == "function", q = (e) => typeof e == "string", Zt = (e) => typeof e == "symbol", G = (e) => e !== null && typeof e == "object", Wr = (e) => (G(e) || I(e)) && I(e.then) && I(e.catch), Bs = Object.prototype.toString, Qt = (e) => Bs.call(e), Ks = (e) => Qt(e).slice(8, -1), $s = (e) => Qt(e) === "[object Object]", Hn = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ Fn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), en = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ws = /-(\w)/g, ge = en((e) => e.replace(Ws, (t, n) => n ? n.toUpperCase() : "")), Gs = /\B([A-Z])/g, xe = en(
  (e) => e.replace(Gs, "-$1").toLowerCase()
), tn = en((e) => e.charAt(0).toUpperCase() + e.slice(1)), dn = en((e) => e ? `on${tn(e)}` : ""), ze = (e, t) => !Object.is(e, t), hn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Wt = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, zs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ur = (e) => {
  const t = q(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let fr;
const Gr = () => fr || (fr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bn(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = q(r) ? Js(r) : Bn(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (q(e) || G(e))
    return e;
}
const qs = /;(?![^(]*\))/g, Ys = /:([^]+)/, Xs = /\/\*[^]*?\*\//g;
function Js(e) {
  const t = {};
  return e.replace(Xs, "").split(qs).forEach((n) => {
    if (n) {
      const r = n.split(Ys);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function nn(e) {
  let t = "";
  if (q(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const r = nn(e[n]);
      r && (t += r + " ");
    }
  else if (G(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Zs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qs = /* @__PURE__ */ Fn(Zs);
function zr(e) {
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
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
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
let st;
class Kn {
  constructor(t, n, r, s) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, to(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, Ye();
      for (const t of this.deps)
        if (t.computed && (ro(t.computed), this._dirtyLevel >= 2))
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
    let t = We, n = st;
    try {
      return We = !0, st = this, this._runnings++, dr(this), this.fn();
    } finally {
      hr(this), this._runnings--, st = n, We = t;
    }
  }
  stop() {
    var t;
    this.active && (dr(this), hr(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function ro(e) {
  return e.value;
}
function dr(e) {
  e._trackId++, e._depsLength = 0;
}
function hr(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      qr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function qr(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let We = !0, xn = 0;
const Yr = [];
function Ye() {
  Yr.push(We), We = !1;
}
function Xe() {
  const e = Yr.pop();
  We = e === void 0 ? !0 : e;
}
function $n() {
  xn++;
}
function Wn() {
  for (xn--; !xn && yn.length; )
    yn.shift()();
}
function Xr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && qr(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const yn = [];
function Jr(e, t, n) {
  $n();
  for (const r of e.keys())
    if (!(!r.allowRecurse && r._runnings) && r._dirtyLevel < t && (!r._runnings || t !== 2)) {
      const s = r._dirtyLevel;
      r._dirtyLevel = t, s === 0 && (!r._queryings || t !== 2) && (r.trigger(), r.scheduler && yn.push(r.scheduler));
    }
  Wn();
}
const Zr = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Sn = /* @__PURE__ */ new WeakMap(), ot = Symbol(""), En = Symbol("");
function de(e, t, n) {
  if (We && st) {
    let r = Sn.get(e);
    r || Sn.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = Zr(() => r.delete(n))), Xr(
      st,
      s
    );
  }
}
function Ue(e, t, n, r, s, o) {
  const i = Sn.get(e);
  if (!i)
    return;
  let a = [];
  if (t === "clear")
    a = [...i.values()];
  else if (n === "length" && T(e)) {
    const c = Number(r);
    i.forEach((d, g) => {
      (g === "length" || !Zt(g) && g >= c) && a.push(d);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), t) {
      case "add":
        T(e) ? Hn(n) && a.push(i.get("length")) : (a.push(i.get(ot)), Ct(e) && a.push(i.get(En)));
        break;
      case "delete":
        T(e) || (a.push(i.get(ot)), Ct(e) && a.push(i.get(En)));
        break;
      case "set":
        Ct(e) && a.push(i.get(ot));
        break;
    }
  $n();
  for (const c of a)
    c && Jr(
      c,
      3
    );
  Wn();
}
const so = /* @__PURE__ */ Fn("__proto__,__v_isRef,__isVue"), Qr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zt)
), pr = /* @__PURE__ */ oo();
function oo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = j(this);
      for (let o = 0, i = this.length; o < i; o++)
        de(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(j)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ye(), $n();
      const r = j(this)[t].apply(this, n);
      return Wn(), Xe(), r;
    };
  }), e;
}
function io(e) {
  const t = j(this);
  return de(t, "has", e), t.hasOwnProperty(e);
}
class es {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, o = this._shallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? wo : ss : o ? rs : ns).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = T(t);
    if (!s) {
      if (i && N(pr, n))
        return Reflect.get(pr, n, r);
      if (n === "hasOwnProperty")
        return io;
    }
    const a = Reflect.get(t, n, r);
    return (Zt(n) ? Qr.has(n) : so(n)) || (s || de(t, "get", n), o) ? a : ae(a) ? i && Hn(n) ? a : a.value : G(a) ? s ? os(a) : Ge(a) : a;
  }
}
class ts extends es {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._shallow) {
      const c = vt(o);
      if (!Gt(r) && !vt(r) && (o = j(o), r = j(r)), !T(t) && ae(o) && !ae(r))
        return c ? !1 : (o.value = r, !0);
    }
    const i = T(t) && Hn(n) ? Number(n) < t.length : N(t, n), a = Reflect.set(t, n, r, s);
    return t === j(s) && (i ? ze(r, o) && Ue(t, "set", n, r) : Ue(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = N(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Ue(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Zt(n) || !Qr.has(n)) && de(t, "has", n), r;
  }
  ownKeys(t) {
    return de(
      t,
      "iterate",
      T(t) ? "length" : ot
    ), Reflect.ownKeys(t);
  }
}
class lo extends es {
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
const co = /* @__PURE__ */ new ts(), ao = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new ts(
  !0
), Gn = (e) => e, rn = (e) => Reflect.getPrototypeOf(e);
function Lt(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = j(e), o = j(t);
  n || (ze(t, o) && de(s, "get", t), de(s, "get", o));
  const { has: i } = rn(s), a = r ? Gn : n ? Yn : Rt;
  if (i.call(s, t))
    return a(e.get(t));
  if (i.call(s, o))
    return a(e.get(o));
  e !== s && e.get(t);
}
function kt(e, t = !1) {
  const n = this.__v_raw, r = j(n), s = j(e);
  return t || (ze(e, s) && de(r, "has", e), de(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Ft(e, t = !1) {
  return e = e.__v_raw, !t && de(j(e), "iterate", ot), Reflect.get(e, "size", e);
}
function gr(e) {
  e = j(e);
  const t = j(this);
  return rn(t).has.call(t, e) || (t.add(e), Ue(t, "add", e, e)), this;
}
function mr(e, t) {
  t = j(t);
  const n = j(this), { has: r, get: s } = rn(n);
  let o = r.call(n, e);
  o || (e = j(e), o = r.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), o ? ze(t, i) && Ue(n, "set", e, t) : Ue(n, "add", e, t), this;
}
function _r(e) {
  const t = j(this), { has: n, get: r } = rn(t);
  let s = n.call(t, e);
  s || (e = j(e), s = n.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return s && Ue(t, "delete", e, void 0), o;
}
function vr() {
  const e = j(this), t = e.size !== 0, n = e.clear();
  return t && Ue(e, "clear", void 0, void 0), n;
}
function Ut(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, a = j(i), c = t ? Gn : e ? Yn : Rt;
    return !e && de(a, "iterate", ot), i.forEach((d, g) => r.call(s, c(d), c(g), o));
  };
}
function Vt(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = j(s), i = Ct(o), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, d = s[e](...r), g = n ? Gn : t ? Yn : Rt;
    return !t && de(
      o,
      "iterate",
      c ? En : ot
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
      return Lt(this, o);
    },
    get size() {
      return Ft(this);
    },
    has: kt,
    add: gr,
    set: mr,
    delete: _r,
    clear: vr,
    forEach: Ut(!1, !1)
  }, t = {
    get(o) {
      return Lt(this, o, !1, !0);
    },
    get size() {
      return Ft(this);
    },
    has: kt,
    add: gr,
    set: mr,
    delete: _r,
    clear: vr,
    forEach: Ut(!1, !0)
  }, n = {
    get(o) {
      return Lt(this, o, !0);
    },
    get size() {
      return Ft(this, !0);
    },
    has(o) {
      return kt.call(this, o, !0);
    },
    add: Be("add"),
    set: Be("set"),
    delete: Be("delete"),
    clear: Be("clear"),
    forEach: Ut(!0, !1)
  }, r = {
    get(o) {
      return Lt(this, o, !0, !0);
    },
    get size() {
      return Ft(this, !0);
    },
    has(o) {
      return kt.call(this, o, !0);
    },
    add: Be("add"),
    set: Be("set"),
    delete: Be("delete"),
    clear: Be("clear"),
    forEach: Ut(!0, !0)
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
    ), r[o] = Vt(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
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
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    N(n, s) && s in r ? n : r,
    s,
    o
  );
}
const _o = {
  get: /* @__PURE__ */ zn(!1, !1)
}, vo = {
  get: /* @__PURE__ */ zn(!1, !0)
}, bo = {
  get: /* @__PURE__ */ zn(!0, !1)
}, ns = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), ss = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap();
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : xo(Ks(e));
}
function Ge(e) {
  return vt(e) ? e : qn(
    e,
    !1,
    co,
    _o,
    ns
  );
}
function So(e) {
  return qn(
    e,
    !1,
    uo,
    vo,
    rs
  );
}
function os(e) {
  return qn(
    e,
    !0,
    ao,
    bo,
    ss
  );
}
function qn(e, t, n, r, s) {
  if (!G(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = yo(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, a), a;
}
function gt(e) {
  return vt(e) ? gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function vt(e) {
  return !!(e && e.__v_isReadonly);
}
function Gt(e) {
  return !!(e && e.__v_isShallow);
}
function is(e) {
  return gt(e) || vt(e);
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function ls(e) {
  return Wt(e, "__v_skip", !0), e;
}
const Rt = (e) => G(e) ? Ge(e) : e, Yn = (e) => G(e) ? os(e) : e;
class cs {
  constructor(t, n, r, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Kn(
      () => t(this._value),
      () => Cn(this, 1)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
  }
  get value() {
    const t = j(this);
    return as(t), (!t._cacheable || t.effect.dirty) && ze(t._value, t._value = t.effect.run()) && Cn(t, 2), t._value;
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
function Eo(e, t, n = !1) {
  let r, s;
  const o = I(e);
  return o ? (r = e, s = pe) : (r = e.get, s = e.set), new cs(r, s, o || !s, n);
}
function as(e) {
  We && st && (e = j(e), Xr(
    st,
    e.dep || (e.dep = Zr(
      () => e.dep = void 0,
      e instanceof cs ? e : void 0
    ))
  ));
}
function Cn(e, t = 3, n) {
  e = j(e);
  const r = e.dep;
  r && Jr(
    r,
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
    return as(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Gt(t) || vt(t);
    t = n ? t : j(t), ze(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Rt(t), Cn(this, 3));
  }
}
function Oo(e) {
  return ae(e) ? e.value : e;
}
const To = {
  get: (e, t, n) => Oo(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return ae(s) && !ae(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function us(e) {
  return gt(e) ? e : new Proxy(e, To);
}
var At = { NVM_INC: "/Users/sultanov/.nvm/versions/node/v20.10.0/include/node", MANPATH: "/Users/sultanov/.nvm/versions/node/v20.10.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/sultanov/.nvm/versions/node/v20.10.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin/node", INIT_CWD: "/Users/sultanov/dev/Camperfuchs/image-slider", ANDROID_HOME: "/Users/sultanov/Library/Android/sdk", _P9K_TTY: "/dev/ttys004", NVM_CD_FLAGS: "-q", SHELL: "/bin/zsh", TERM: "xterm-256color", TMPDIR: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/", HOMEBREW_REPOSITORY: "/opt/homebrew", npm_config_global_prefix: "/Users/sultanov/.nvm/versions/node/v20.10.0", TERM_PROGRAM_VERSION: "1.85.1", ZDOTDIR: "/Users/sultanov", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", TERM_SESSION_ID: "w0t0p0:1BD108B1-D138-4C04-97DF-218F41345636", npm_config_noproxy: "", SDKMAN_PLATFORM: "darwinarm64", npm_config_local_prefix: "/Users/sultanov/dev/Camperfuchs/image-slider", ZSH: "/Users/sultanov/.oh-my-zsh", USER: "sultanov", NVM_DIR: "/Users/sultanov/.nvm", LS_COLORS: "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43", SPRINGBOOT_HOME: "/Users/sultanov/.sdkman/candidates/springboot/current", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/sultanov/.nvm/versions/node/v20.10.0/etc/npmrc", SDKMAN_CANDIDATES_API: "https://api.sdkman.io/2", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.ASOQfQl7Lt/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/bin/npm-cli.js", PAGER: "less", LSCOLORS: "Gxfxcxdxbxegedabagacad", PATH: "/Users/sultanov/dev/Camperfuchs/image-slider/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/node_modules/.bin:/Users/sultanov/dev/node_modules/.bin:/Users/sultanov/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v20.10.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/sultanov/.sdkman/candidates/springboot/current/bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v20.10.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/sultanov/.fzf/bin", npm_package_json: "/Users/sultanov/dev/Camperfuchs/image-slider/package.json", _: "/Users/sultanov/dev/Camperfuchs/image-slider/node_modules/.bin/vite", npm_config_userconfig: "/Users/sultanov/.npmrc", npm_config_init_module: "/Users/sultanov/.npm-init.js", USER_ZDOTDIR: "/Users/sultanov", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/sultanov/dev/Camperfuchs/image-slider", VSCODE_NONCE: "e6879f7a-b166-4fdf-a82b-a031e62d7f23", JAVA_HOME: "/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home", npm_lifecycle_event: "build", EDITOR: "vi", P9K_SSH: "0", npm_package_name: "vehicle-pictures", LANG: "en_US.UTF-8", P9K_TTY: "old", ITERM_PROFILE: "Default", npm_config_npm_version: "10.2.3", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "--ms-enable-electron-run-as-node", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.0.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", COLORFGBG: "7;0", HOME: "/Users/sultanov", SHLVL: "4", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", LC_TERMINAL_VERSION: "3.4.23", HOMEBREW_PREFIX: "/opt/homebrew", ITERM_SESSION_ID: "w0t0p0:1BD108B1-D138-4C04-97DF-218F41345636", npm_config_cache: "/Users/sultanov/.npm", LESS: "-R", LOGNAME: "sultanov", npm_lifecycle_script: "vite build", SDKMAN_DIR: "/Users/sultanov/.sdkman", VSCODE_GIT_IPC_HANDLE: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/vscode-git-251d1ea897.sock", LC_CTYPE: "UTF-8", NVM_BIN: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin", npm_config_user_agent: "npm/10.2.3 node/v20.10.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", SDKMAN_CANDIDATES_DIR: "/Users/sultanov/.sdkman/candidates", LC_TERMINAL: "iTerm2", _P9K_SSH_TTY: "/dev/ttys004", npm_node_execpath: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin/node", npm_config_prefix: "/Users/sultanov/.nvm/versions/node/v20.10.0", COLORTERM: "truecolor", NODE_ENV: "production" };
const Ot = [];
function Io(e, ...t) {
  Ye();
  const n = Ot.length ? Ot[Ot.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = Ro();
  if (r)
    Ve(
      r,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${ks(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...Po(s)), console.warn(...o);
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
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Po(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Mo(n));
  }), t;
}
function Mo({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${ks(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...No(e.props), o] : [s + o];
}
function No(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...fs(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function fs(e, t, n) {
  return q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ae(t) ? (t = fs(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
function Ve(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (o) {
    sn(o, t, n);
  }
  return s;
}
function Ce(e, t, n, r) {
  if (I(e)) {
    const o = Ve(e, t, n, r);
    return o && Wr(o) && o.catch((i) => {
      sn(i, t, n);
    }), o;
  }
  const s = [];
  for (let o = 0; o < e.length; o++)
    s.push(Ce(e[o], t, n, r));
  return s;
}
function sn(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
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
  jo(e, n, s, r);
}
function jo(e, t, n, r = !0) {
  console.error(e);
}
let Pt = !1, An = !1;
const se = [];
let je = 0;
const mt = [];
let Fe = null, rt = 0;
const ds = /* @__PURE__ */ Promise.resolve();
let Xn = null;
function Jn(e) {
  const t = Xn || ds;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Do(e) {
  let t = je + 1, n = se.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = se[r], o = Mt(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function Zn(e) {
  (!se.length || !se.includes(
    e,
    Pt && e.allowRecurse ? je + 1 : je
  )) && (e.id == null ? se.push(e) : se.splice(Do(e.id), 0, e), hs());
}
function hs() {
  !Pt && !An && (An = !0, Xn = ds.then(gs));
}
function Lo(e) {
  const t = se.indexOf(e);
  t > je && se.splice(t, 1);
}
function ko(e) {
  T(e) ? mt.push(...e) : (!Fe || !Fe.includes(
    e,
    e.allowRecurse ? rt + 1 : rt
  )) && mt.push(e), hs();
}
function br(e, t, n = Pt ? je + 1 : 0) {
  for (; n < se.length; n++) {
    const r = se[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      se.splice(n, 1), n--, r();
    }
  }
}
function ps(e) {
  if (mt.length) {
    const t = [...new Set(mt)];
    if (mt.length = 0, Fe) {
      Fe.push(...t);
      return;
    }
    for (Fe = t, Fe.sort((n, r) => Mt(n) - Mt(r)), rt = 0; rt < Fe.length; rt++)
      Fe[rt]();
    Fe = null, rt = 0;
  }
}
const Mt = (e) => e.id == null ? 1 / 0 : e.id, Fo = (e, t) => {
  const n = Mt(e) - Mt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function gs(e) {
  An = !1, Pt = !0, se.sort(Fo);
  const t = pe;
  try {
    for (je = 0; je < se.length; je++) {
      const n = se[je];
      n && n.active !== !1 && (At.NODE_ENV !== "production" && t(n), Ve(n, null, 14));
    }
  } finally {
    je = 0, se.length = 0, ps(), Pt = !1, Xn = null, (se.length || mt.length) && gs();
  }
}
function Uo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || $;
  let s = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in r) {
    const g = `${i === "modelValue" ? "model" : i}Modifiers`, { number: w, trim: x } = r[g] || $;
    x && (s = n.map((A) => q(A) ? A.trim() : A)), w && (s = n.map(zs));
  }
  let a, c = r[a = dn(t)] || // also try camelCase event handler (#2249)
  r[a = dn(ge(t))];
  !c && o && (c = r[a = dn(xe(t))]), c && Ce(
    c,
    e,
    6,
    s
  );
  const d = r[a + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Ce(
      d,
      e,
      6,
      s
    );
  }
}
function ms(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, a = !1;
  if (!I(e)) {
    const c = (d) => {
      const g = ms(d, t, !0);
      g && (a = !0, J(i, g));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !a ? (G(e) && r.set(e, null), null) : (T(o) ? o.forEach((c) => i[c] = null) : J(i, o), G(e) && r.set(e, i), i);
}
function on(e, t) {
  return !e || !Jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, xe(t)) || N(e, t));
}
let ye = null, _s = null;
function zt(e) {
  const t = ye;
  return ye = e, _s = e && e.type.__scopeId || null, t;
}
function St(e, t = ye, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Pr(-1);
    const o = zt(t);
    let i;
    try {
      i = e(...s);
    } finally {
      zt(o), r._d && Pr(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function pn(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [i],
    slots: a,
    attrs: c,
    emit: d,
    render: g,
    renderCache: w,
    data: x,
    setupState: A,
    ctx: L,
    inheritAttrs: R
  } = e;
  let k, U;
  const ne = zt(e);
  try {
    if (n.shapeFlag & 4) {
      const B = s || r, ie = At.NODE_ENV !== "production" && A.__isScriptSetup ? new Proxy(B, {
        get(M, Z, le) {
          return Io(
            `Property '${String(
              Z
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, Z, le);
        }
      }) : B;
      k = Ne(
        g.call(
          ie,
          B,
          w,
          o,
          A,
          x,
          L
        )
      ), U = c;
    } else {
      const B = t;
      At.NODE_ENV, k = Ne(
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
      ), U = t.props ? c : Vo(c);
    }
  } catch (B) {
    It.length = 0, sn(B, e, 1), k = oe(lt);
  }
  let D = k;
  if (U && R !== !1) {
    const B = Object.keys(U), { shapeFlag: ie } = D;
    B.length && ie & 7 && (i && B.some(Un) && (U = Ho(
      U,
      i
    )), D = qe(D, U));
  }
  return n.dirs && (D = qe(D), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && (D.transition = n.transition), k = D, zt(ne), k;
}
const Vo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Jt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ho = (e, t) => {
  const n = {};
  for (const r in e)
    (!Un(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Bo(e, t, n) {
  const { props: r, children: s, component: o } = e, { props: i, children: a, patchFlag: c } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? wr(r, i, d) : !!i;
    if (c & 8) {
      const g = t.dynamicProps;
      for (let w = 0; w < g.length; w++) {
        const x = g[w];
        if (i[x] !== r[x] && !on(d, x))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? wr(r, i, d) : !0 : !!i;
  return !1;
}
function wr(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !on(n, o))
      return !0;
  }
  return !1;
}
function Ko({ vnode: e, parent: t }, n) {
  if (n)
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
        (e = t.vnode).el = n, t = t.parent;
      else
        break;
    }
}
const vs = "components";
function xr(e, t) {
  return Wo(vs, e, !0, t) || e;
}
const $o = Symbol.for("v-ndc");
function Wo(e, t, n = !0, r = !1) {
  const s = ye || te;
  if (s) {
    const o = s.type;
    if (e === vs) {
      const a = Ls(
        o,
        !1
      );
      if (a && (a === t || a === ge(t) || a === tn(ge(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      yr(s[e] || o[e], t) || // global registration
      yr(s.appContext[e], t)
    );
    return !i && r ? o : i;
  }
}
function yr(e, t) {
  return e && (e[t] || e[ge(t)] || e[tn(ge(t))]);
}
const Go = (e) => e.__isSuspense;
function zo(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : ko(e);
}
const qo = Symbol.for("v-scx"), Yo = () => Se(qo), Ht = {};
function _t(e, t, n) {
  return bs(e, t, n);
}
function bs(e, t, {
  immediate: n,
  deep: r,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: a
} = $) {
  if (t && o) {
    const M = t;
    t = (...Z) => {
      M(...Z), ie();
    };
  }
  const c = te, d = (M) => r === !0 ? M : (
    // for deep: false, only traverse root-level properties
    dt(M, r === !1 ? 1 : void 0)
  );
  let g, w = !1, x = !1;
  if (ae(e) ? (g = () => e.value, w = Gt(e)) : gt(e) ? (g = () => d(e), w = !0) : T(e) ? (x = !0, w = e.some((M) => gt(M) || Gt(M)), g = () => e.map((M) => {
    if (ae(M))
      return M.value;
    if (gt(M))
      return d(M);
    if (I(M))
      return Ve(M, c, 2);
  })) : I(e) ? t ? g = () => Ve(e, c, 2) : g = () => (A && A(), Ce(
    e,
    c,
    3,
    [L]
  )) : g = pe, t && r) {
    const M = g;
    g = () => dt(M());
  }
  let A, L = (M) => {
    A = D.onStop = () => {
      Ve(M, c, 4), A = D.onStop = void 0;
    };
  }, R;
  if (fn)
    if (L = pe, t ? n && Ce(t, c, 3, [
      g(),
      x ? [] : void 0,
      L
    ]) : g(), s === "sync") {
      const M = Yo();
      R = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return pe;
  let k = x ? new Array(e.length).fill(Ht) : Ht;
  const U = () => {
    if (!(!D.active || !D.dirty))
      if (t) {
        const M = D.run();
        (r || w || (x ? M.some((Z, le) => ze(Z, k[le])) : ze(M, k))) && (A && A(), Ce(t, c, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          k === Ht ? void 0 : x && k[0] === Ht ? [] : k,
          L
        ]), k = M);
      } else
        D.run();
  };
  U.allowRecurse = !!t;
  let ne;
  s === "sync" ? ne = U : s === "post" ? ne = () => ue(U, c && c.suspense) : (U.pre = !0, c && (U.id = c.uid), ne = () => Zn(U));
  const D = new Kn(g, pe, ne), B = no(), ie = () => {
    D.stop(), B && Vn(B.effects, D);
  };
  return t ? n ? U() : k = D.run() : s === "post" ? ue(
    D.run.bind(D),
    c && c.suspense
  ) : D.run(), R && R.push(ie), ie;
}
function Xo(e, t, n) {
  const r = this.proxy, s = q(e) ? e.includes(".") ? ws(r, e) : () => r[e] : e.bind(r, r);
  let o;
  I(t) ? o = t : (o = t.handler, n = t);
  const i = te;
  bt(this);
  const a = bs(s, o.bind(r), n);
  return i ? bt(i) : it(), a;
}
function ws(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function dt(e, t, n = 0, r) {
  if (!G(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), ae(e))
    dt(e.value, t, n, r);
  else if (T(e))
    for (let s = 0; s < e.length; s++)
      dt(e[s], t, n, r);
  else if (Hs(e) || Ct(e))
    e.forEach((s) => {
      dt(s, t, n, r);
    });
  else if ($s(e))
    for (const s in e)
      dt(e[s], t, n, r);
  return e;
}
function tt(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let c = a.dir[r];
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
const Kt = (e) => !!e.type.__asyncLoader, xs = (e) => e.type.__isKeepAlive;
function Jo(e, t) {
  ys(e, "a", t);
}
function Zo(e, t) {
  ys(e, "da", t);
}
function ys(e, t, n = te) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (cn(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      xs(s.parent.vnode) && Qo(r, t, n, s), s = s.parent;
  }
}
function Qo(e, t, n, r) {
  const s = cn(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  er(() => {
    Vn(r[t], s);
  }, n);
}
function cn(e, t, n = te, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Ye(), bt(n);
      const a = Ce(t, n, e, i);
      return it(), Xe(), a;
    });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const He = (e) => (t, n = te) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!fn || e === "sp") && cn(e, (...r) => t(...r), n)
), ei = He("bm"), Qn = He("m"), ti = He("bu"), ni = He("u"), ri = He("bum"), er = He("um"), si = He("sp"), oi = He(
  "rtg"
), ii = He(
  "rtc"
);
function li(e, t = te) {
  cn("ec", e, t);
}
function gn(e, t, n, r) {
  let s;
  const o = n && n[r];
  if (T(e) || q(e)) {
    s = new Array(e.length);
    for (let i = 0, a = e.length; i < a; i++)
      s[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (G(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (i, a) => t(i, a, void 0, o && o[a])
      );
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let a = 0, c = i.length; a < c; a++) {
        const d = i[a];
        s[a] = t(e[d], d, a, o && o[a]);
      }
    }
  else
    s = [];
  return n && (n[r] = s), s;
}
const On = (e) => e ? js(e) ? or(e) || e.proxy : On(e.parent) : null, Tt = (
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
    $options: (e) => tr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Zn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Jn.bind(e.proxy)),
    $watch: (e) => Xo.bind(e)
  })
), mn = (e, t) => e !== $ && !e.__isScriptSetup && N(e, t), ci = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: c } = e;
    let d;
    if (t[0] !== "$") {
      const A = i[t];
      if (A !== void 0)
        switch (A) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (mn(r, t))
          return i[t] = 1, r[t];
        if (s !== $ && N(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && N(d, t)
        )
          return i[t] = 3, o[t];
        if (n !== $ && N(n, t))
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
    if (n !== $ && N(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      x = c.config.globalProperties, N(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return mn(s, t) ? (s[t] = n, !0) : r !== $ && N(r, t) ? (r[t] = n, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let a;
    return !!n[i] || e !== $ && N(e, i) || mn(t, i) || (a = o[0]) && N(a, i) || N(r, i) || N(Tt, i) || N(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Sr(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Tn = !0;
function ai(e) {
  const t = tr(e), n = e.proxy, r = e.ctx;
  Tn = !1, t.beforeCreate && Er(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
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
    updated: L,
    activated: R,
    deactivated: k,
    beforeDestroy: U,
    beforeUnmount: ne,
    destroyed: D,
    unmounted: B,
    render: ie,
    renderTracked: M,
    renderTriggered: Z,
    errorCaptured: le,
    serverPrefetch: re,
    // public API
    expose: me,
    inheritAttrs: Ae,
    // assets
    components: _e,
    directives: De,
    filters: Je
  } = t;
  if (d && ui(d, r, null), i)
    for (const H in i) {
      const F = i[H];
      I(F) && (r[H] = F.bind(n));
    }
  if (s) {
    const H = s.call(n, n);
    G(H) && (e.data = Ge(H));
  }
  if (Tn = !0, o)
    for (const H in o) {
      const F = o[H], Oe = I(F) ? F.bind(n, n) : I(F.get) ? F.get.bind(n, n) : pe, Ze = !I(F) && I(F.set) ? F.set.bind(n) : pe, Te = Xt({
        get: Oe,
        set: Ze
      });
      Object.defineProperty(r, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (Y) => Te.value = Y
      });
    }
  if (a)
    for (const H in a)
      Ss(a[H], r, n, H);
  if (c) {
    const H = I(c) ? c.call(n) : c;
    Reflect.ownKeys(H).forEach((F) => {
      Me(F, H[F]);
    });
  }
  g && Er(g, e, "c");
  function Q(H, F) {
    T(F) ? F.forEach((Oe) => H(Oe.bind(n))) : F && H(F.bind(n));
  }
  if (Q(ei, w), Q(Qn, x), Q(ti, A), Q(ni, L), Q(Jo, R), Q(Zo, k), Q(li, le), Q(ii, M), Q(oi, Z), Q(ri, ne), Q(er, B), Q(si, re), T(me))
    if (me.length) {
      const H = e.exposed || (e.exposed = {});
      me.forEach((F) => {
        Object.defineProperty(H, F, {
          get: () => n[F],
          set: (Oe) => n[F] = Oe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  ie && e.render === pe && (e.render = ie), Ae != null && (e.inheritAttrs = Ae), _e && (e.components = _e), De && (e.directives = De);
}
function ui(e, t, n = pe) {
  T(e) && (e = In(e));
  for (const r in e) {
    const s = e[r];
    let o;
    G(s) ? "default" in s ? o = Se(
      s.from || r,
      s.default,
      !0
    ) : o = Se(s.from || r) : o = Se(s), ae(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function Er(e, t, n) {
  Ce(
    T(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ss(e, t, n, r) {
  const s = r.includes(".") ? ws(n, r) : () => n[r];
  if (q(e)) {
    const o = t[e];
    I(o) && _t(s, o);
  } else if (I(e))
    _t(s, e.bind(n));
  else if (G(e))
    if (T(e))
      e.forEach((o) => Ss(o, t, n, r));
    else {
      const o = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(o) && _t(s, o, e);
    }
}
function tr(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let c;
  return a ? c = a : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (d) => qt(c, d, i, !0)
  ), qt(c, t, i)), G(t) && o.set(t, c), c;
}
function qt(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && qt(e, o, n, !0), s && s.forEach(
    (i) => qt(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = fi[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const fi = {
  data: Cr,
  props: Ar,
  emits: Ar,
  // objects
  methods: Et,
  computed: Et,
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
  components: Et,
  directives: Et,
  // watch
  watch: hi,
  // provide / inject
  provide: Cr,
  inject: di
};
function Cr(e, t) {
  return t ? e ? function() {
    return J(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function di(e, t) {
  return Et(In(e), In(t));
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
function Et(e, t) {
  return e ? J(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ar(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : J(
    /* @__PURE__ */ Object.create(null),
    Sr(e),
    Sr(t ?? {})
  ) : t;
}
function hi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ce(e[r], t[r]);
  return n;
}
function Es() {
  return {
    app: null,
    config: {
      isNativeTag: Us,
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
  return function(r, s = null) {
    I(r) || (r = J({}, r)), s != null && !G(s) && (s = null);
    const o = Es(), i = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const c = o.app = {
      _uid: pi++,
      _component: r,
      _props: s,
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
          const x = oe(r, s);
          return x.appContext = o, w === !0 ? w = "svg" : w === !1 && (w = void 0), g && t ? t(x, d) : e(x, d, w), a = !0, c._container = d, d.__vue_app__ = c, or(x.component) || x.component.proxy;
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
function Me(e, t) {
  if (te) {
    let n = te.provides;
    const r = te.parent && te.parent.provides;
    r === n && (n = te.provides = Object.create(r)), n[e] = t;
  }
}
function Se(e, t, n = !1) {
  const r = te || ye;
  if (r || Yt) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Yt._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(r && r.proxy) : t;
  }
}
function mi(e, t, n, r = !1) {
  const s = {}, o = {};
  Wt(o, un, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Cs(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  n ? e.props = r ? s : So(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function _i(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, a = j(s), [c] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const g = e.vnode.dynamicProps;
      for (let w = 0; w < g.length; w++) {
        let x = g[w];
        if (on(e.emitsOptions, x))
          continue;
        const A = t[x];
        if (c)
          if (N(o, x))
            A !== o[x] && (o[x] = A, d = !0);
          else {
            const L = ge(x);
            s[L] = Rn(
              c,
              a,
              L,
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
    Cs(e, t, s, o) && (d = !0);
    let g;
    for (const w in a)
      (!t || // for camelCase
      !N(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = xe(w)) === w || !N(t, g))) && (c ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[g] !== void 0) && (s[w] = Rn(
        c,
        a,
        w,
        void 0,
        e,
        !0
      )) : delete s[w]);
    if (o !== a)
      for (const w in o)
        (!t || !N(t, w)) && (delete o[w], d = !0);
  }
  d && Ue(e, "set", "$attrs");
}
function Cs(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (Bt(c))
        continue;
      const d = t[c];
      let g;
      s && N(s, g = ge(c)) ? !o || !o.includes(g) ? n[g] = d : (a || (a = {}))[g] = d : on(e.emitsOptions, c) || (!(c in r) || d !== r[c]) && (r[c] = d, i = !0);
    }
  if (o) {
    const c = j(n), d = a || $;
    for (let g = 0; g < o.length; g++) {
      const w = o[g];
      n[w] = Rn(
        s,
        c,
        w,
        d[w],
        e,
        !N(d, w)
      );
    }
  }
  return i;
}
function Rn(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = N(i, "default");
    if (a && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && I(c)) {
        const { propsDefaults: d } = s;
        n in d ? r = d[n] : (bt(s), r = d[n] = c.call(
          null,
          t
        ), it());
      } else
        r = c;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !a ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === xe(n)) && (r = !0));
  }
  return r;
}
function As(e, t, n = !1) {
  const r = t.propsCache, s = r.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, a = [];
  let c = !1;
  if (!I(e)) {
    const g = (w) => {
      c = !0;
      const [x, A] = As(w, t, !0);
      J(i, x), A && a.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!o && !c)
    return G(e) && r.set(e, pt), pt;
  if (T(o))
    for (let g = 0; g < o.length; g++) {
      const w = ge(o[g]);
      Or(w) && (i[w] = $);
    }
  else if (o)
    for (const g in o) {
      const w = ge(g);
      if (Or(w)) {
        const x = o[g], A = i[w] = T(x) || I(x) ? { type: x } : J({}, x);
        if (A) {
          const L = Rr(Boolean, A.type), R = Rr(String, A.type);
          A[
            0
            /* shouldCast */
          ] = L > -1, A[
            1
            /* shouldCastTrue */
          ] = R < 0 || L < R, (L > -1 || N(A, "default")) && a.push(w);
        }
      }
    }
  const d = [i, a];
  return G(e) && r.set(e, d), d;
}
function Or(e) {
  return e[0] !== "$";
}
function Tr(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ir(e, t) {
  return Tr(e) === Tr(t);
}
function Rr(e, t) {
  return T(t) ? t.findIndex((n) => Ir(n, e)) : I(t) && Ir(t, e) ? 0 : -1;
}
const Os = (e) => e[0] === "_" || e === "$stable", nr = (e) => T(e) ? e.map(Ne) : [Ne(e)], vi = (e, t, n) => {
  if (t._n)
    return t;
  const r = St((...s) => (At.NODE_ENV, nr(t(...s))), n);
  return r._c = !1, r;
}, Ts = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Os(s))
      continue;
    const o = e[s];
    if (I(o))
      t[s] = vi(s, o, r);
    else if (o != null) {
      const i = nr(o);
      t[s] = () => i;
    }
  }
}, Is = (e, t) => {
  const n = nr(t);
  e.slots.default = () => n;
}, bi = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = j(t), Wt(t, "_", n)) : Ts(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Is(e, t);
  Wt(e.slots, un, 1);
}, wi = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = !0, i = $;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : (J(s, t), !n && a === 1 && delete s._) : (o = !t.$stable, Ts(t, s)), i = t;
  } else
    t && (Is(e, t), i = { default: 1 });
  if (o)
    for (const a in s)
      !Os(a) && i[a] == null && delete s[a];
};
function Pn(e, t, n, r, s = !1) {
  if (T(e)) {
    e.forEach(
      (x, A) => Pn(
        x,
        t && (T(t) ? t[A] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Kt(r) && !s)
    return;
  const o = r.shapeFlag & 4 ? or(r.component) || r.component.proxy : r.el, i = s ? null : o, { i: a, r: c } = e, d = t && t.r, g = a.refs === $ ? a.refs = {} : a.refs, w = a.setupState;
  if (d != null && d !== c && (q(d) ? (g[d] = null, N(w, d) && (w[d] = null)) : ae(d) && (d.value = null)), I(c))
    Ve(c, a, 12, [i, g]);
  else {
    const x = q(c), A = ae(c);
    if (x || A) {
      const L = () => {
        if (e.f) {
          const R = x ? N(w, c) ? w[c] : g[c] : c.value;
          s ? T(R) && Vn(R, o) : T(R) ? R.includes(o) || R.push(o) : x ? (g[c] = [o], N(w, c) && (w[c] = g[c])) : (c.value = [o], e.k && (g[e.k] = c.value));
        } else
          x ? (g[c] = i, N(w, c) && (w[c] = i)) : A && (c.value = i, e.k && (g[e.k] = i));
      };
      i ? (L.id = -1, ue(L, n)) : L();
    }
  }
}
const ue = zo;
function xi(e) {
  return yi(e);
}
function yi(e, t) {
  const n = Gr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: a,
    createComment: c,
    setText: d,
    setElementText: g,
    parentNode: w,
    nextSibling: x,
    setScopeId: A = pe,
    insertStaticContent: L
  } = e, R = (l, u, f, p = null, h = null, _ = null, y = void 0, v = null, b = !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !yt(l, u) && (p = Qe(l), Y(l, h, _, !0), l = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: m, ref: S, shapeFlag: C } = u;
    switch (m) {
      case an:
        k(l, u, f, p);
        break;
      case lt:
        U(l, u, f, p);
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
          Le
        );
    }
    S != null && h && Pn(S, l && l.ref, _, u || l, !u);
  }, k = (l, u, f, p) => {
    if (l == null)
      r(
        u.el = a(u.children),
        f,
        p
      );
    else {
      const h = u.el = l.el;
      u.children !== l.children && d(h, u.children);
    }
  }, U = (l, u, f, p) => {
    l == null ? r(
      u.el = c(u.children || ""),
      f,
      p
    ) : u.el = l.el;
  }, ne = (l, u, f, p) => {
    [l.el, l.anchor] = L(
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
      h = x(l), r(l, f, p), l = h;
    r(u, f, p);
  }, B = ({ el: l, anchor: u }) => {
    let f;
    for (; l && l !== u; )
      f = x(l), s(l), l = f;
    s(u);
  }, ie = (l, u, f, p, h, _, y, v, b) => {
    u.type === "svg" ? y = "svg" : u.type === "math" && (y = "mathml"), l == null ? M(
      u,
      f,
      p,
      h,
      _,
      y,
      v,
      b
    ) : re(
      l,
      u,
      h,
      _,
      y,
      v,
      b
    );
  }, M = (l, u, f, p, h, _, y, v) => {
    let b, m;
    const { props: S, shapeFlag: C, transition: E, dirs: O } = l;
    if (b = l.el = i(
      l.type,
      _,
      S && S.is,
      S
    ), C & 8 ? g(b, l.children) : C & 16 && le(
      l.children,
      b,
      null,
      p,
      h,
      _n(l, _),
      y,
      v
    ), O && tt(l, null, p, "created"), Z(b, l, l.scopeId, y, p), S) {
      for (const V in S)
        V !== "value" && !Bt(V) && o(
          b,
          V,
          null,
          S[V],
          _,
          l.children,
          p,
          h,
          ve
        );
      "value" in S && o(b, "value", null, S.value, _), (m = S.onVnodeBeforeMount) && Pe(m, p, l);
    }
    O && tt(l, null, p, "beforeMount");
    const P = Si(h, E);
    P && E.beforeEnter(b), r(b, u, f), ((m = S && S.onVnodeMounted) || P || O) && ue(() => {
      m && Pe(m, p, l), P && E.enter(b), O && tt(l, null, p, "mounted");
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
      const S = l[m] = v ? Ke(l[m]) : Ne(l[m]);
      R(
        null,
        S,
        u,
        f,
        p,
        h,
        _,
        y,
        v
      );
    }
  }, re = (l, u, f, p, h, _, y) => {
    const v = u.el = l.el;
    let { patchFlag: b, dynamicChildren: m, dirs: S } = u;
    b |= l.patchFlag & 16;
    const C = l.props || $, E = u.props || $;
    let O;
    if (f && nt(f, !1), (O = E.onVnodeBeforeUpdate) && Pe(O, f, u, l), S && tt(u, l, f, "beforeUpdate"), f && nt(f, !0), m ? me(
      l.dynamicChildren,
      m,
      v,
      f,
      p,
      _n(u, h),
      _
    ) : y || F(
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
          E,
          f,
          p,
          h
        );
      else if (b & 2 && C.class !== E.class && o(v, "class", null, E.class, h), b & 4 && o(v, "style", C.style, E.style, h), b & 8) {
        const P = u.dynamicProps;
        for (let V = 0; V < P.length; V++) {
          const K = P[V], X = C[K], be = E[K];
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
        E,
        f,
        p,
        h
      );
    ((O = E.onVnodeUpdated) || S) && ue(() => {
      O && Pe(O, f, u, l), S && tt(u, l, f, "updated");
    }, p);
  }, me = (l, u, f, p, h, _, y) => {
    for (let v = 0; v < u.length; v++) {
      const b = l[v], m = u[v], S = (
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
        S,
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
    const m = u.el = l ? l.el : a(""), S = u.anchor = l ? l.anchor : a("");
    let { patchFlag: C, dynamicChildren: E, slotScopeIds: O } = u;
    O && (v = v ? v.concat(O) : O), l == null ? (r(m, f, p), r(S, f, p), le(
      u.children,
      f,
      S,
      h,
      _,
      y,
      v,
      b
    )) : C > 0 && C & 64 && E && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (me(
      l.dynamicChildren,
      E,
      f,
      h,
      _,
      y,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || h && u === h.subTree) && Rs(
      l,
      u,
      !0
      /* shallow */
    )) : F(
      l,
      u,
      f,
      S,
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
    if (xs(l) && (v.ctx.renderer = Le), Di(v), v.asyncDep) {
      if (h && h.registerDep(v, Q), !l.el) {
        const b = v.subTree = oe(lt);
        U(null, b, u, f);
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
        p.next = u, Lo(p.update), p.effect.dirty = !0, p.update();
    else
      u.el = l.el, p.vnode = u;
  }, Q = (l, u, f, p, h, _, y) => {
    const v = () => {
      if (l.isMounted) {
        let { next: S, bu: C, u: E, parent: O, vnode: P } = l;
        {
          const ut = Ps(l);
          if (ut) {
            S && (S.el = P.el, H(l, S, y)), ut.asyncDep.then(() => {
              l.isUnmounted || v();
            });
            return;
          }
        }
        let V = S, K;
        nt(l, !1), S ? (S.el = P.el, H(l, S, y)) : S = P, C && hn(C), (K = S.props && S.props.onVnodeBeforeUpdate) && Pe(K, O, S, P), nt(l, !0);
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
        ), S.el = X.el, V === null && Ko(l, X.el), E && ue(E, h), (K = S.props && S.props.onVnodeUpdated) && ue(
          () => Pe(K, O, S, P),
          h
        );
      } else {
        let S;
        const { el: C, props: E } = u, { bm: O, m: P, parent: V } = l, K = Kt(u);
        if (nt(l, !1), O && hn(O), !K && (S = E && E.onVnodeBeforeMount) && Pe(S, V, u), nt(l, !0), C && et) {
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
        if (P && ue(P, h), !K && (S = E && E.onVnodeMounted)) {
          const X = u;
          ue(
            () => Pe(S, V, X),
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
    l.vnode = u, l.next = null, _i(l, u.props, p, f), wi(l, u.children, f), Ye(), br(l), Xe();
  }, F = (l, u, f, p, h, _, y, v, b = !1) => {
    const m = l && l.children, S = l ? l.shapeFlag : 0, C = u.children, { patchFlag: E, shapeFlag: O } = u;
    if (E > 0) {
      if (E & 128) {
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
      } else if (E & 256) {
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
    O & 8 ? (S & 16 && ve(m, h, _), C !== m && g(f, C)) : S & 16 ? O & 16 ? Ze(
      m,
      C,
      f,
      p,
      h,
      _,
      y,
      v,
      b
    ) : ve(m, h, _, !0) : (S & 8 && g(f, ""), O & 16 && le(
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
    const m = l.length, S = u.length, C = Math.min(m, S);
    let E;
    for (E = 0; E < C; E++) {
      const O = u[E] = b ? Ke(u[E]) : Ne(u[E]);
      R(
        l[E],
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
    m > S ? ve(
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
    const S = u.length;
    let C = l.length - 1, E = S - 1;
    for (; m <= C && m <= E; ) {
      const O = l[m], P = u[m] = b ? Ke(u[m]) : Ne(u[m]);
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
    for (; m <= C && m <= E; ) {
      const O = l[C], P = u[E] = b ? Ke(u[E]) : Ne(u[E]);
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
      C--, E--;
    }
    if (m > C) {
      if (m <= E) {
        const O = E + 1, P = O < S ? u[O].el : p;
        for (; m <= E; )
          R(
            null,
            u[m] = b ? Ke(u[m]) : Ne(u[m]),
            f,
            P,
            h,
            _,
            y,
            v,
            b
          ), m++;
      }
    } else if (m > E)
      for (; m <= C; )
        Y(l[m], h, _, !0), m++;
    else {
      const O = m, P = m, V = /* @__PURE__ */ new Map();
      for (m = P; m <= E; m++) {
        const he = u[m] = b ? Ke(u[m]) : Ne(u[m]);
        he.key != null && V.set(he.key, m);
      }
      let K, X = 0;
      const be = E - P + 1;
      let ut = !1, lr = 0;
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
          for (K = P; K <= E; K++)
            if (xt[K - P] === 0 && yt(he, u[K])) {
              Re = K;
              break;
            }
        Re === void 0 ? Y(he, h, _, !0) : (xt[Re - P] = m + 1, Re >= lr ? lr = Re : ut = !0, R(
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
      const cr = ut ? Ei(xt) : pt;
      for (K = cr.length - 1, m = be - 1; m >= 0; m--) {
        const he = P + m, Re = u[he], ar = he + 1 < S ? u[he + 1].el : p;
        xt[m] === 0 ? R(
          null,
          Re,
          f,
          ar,
          h,
          _,
          y,
          v,
          b
        ) : ut && (K < 0 || m !== cr[K] ? Te(Re, f, ar, 2) : K--);
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
      y.move(l, u, f, Le);
      return;
    }
    if (y === fe) {
      r(_, u, f);
      for (let C = 0; C < b.length; C++)
        Te(b[C], u, f, p);
      r(l.anchor, u, f);
      return;
    }
    if (y === vn) {
      D(l, u, f);
      return;
    }
    if (p !== 2 && m & 1 && v)
      if (p === 0)
        v.beforeEnter(_), r(_, u, f), ue(() => v.enter(_), h);
      else {
        const { leave: C, delayLeave: E, afterLeave: O } = v, P = () => r(_, u, f), V = () => {
          C(_, () => {
            P(), O && O();
          });
        };
        E ? E(_, P, V) : V();
      }
    else
      r(_, u, f);
  }, Y = (l, u, f, p = !1, h = !1) => {
    const {
      type: _,
      props: y,
      ref: v,
      children: b,
      dynamicChildren: m,
      shapeFlag: S,
      patchFlag: C,
      dirs: E
    } = l;
    if (v != null && Pn(v, null, f, l, !0), S & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const O = S & 1 && E, P = !Kt(l);
    let V;
    if (P && (V = y && y.onVnodeBeforeUnmount) && Pe(V, u, l), S & 6)
      wt(l.component, f, p);
    else {
      if (S & 128) {
        l.suspense.unmount(f, p);
        return;
      }
      O && tt(l, null, u, "beforeUnmount"), S & 64 ? l.type.remove(
        l,
        u,
        f,
        h,
        Le,
        p
      ) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== fe || C > 0 && C & 64) ? ve(
        m,
        u,
        f,
        !1,
        !0
      ) : (_ === fe && C & 384 || !h && S & 16) && ve(b, u, f), p && Ie(l);
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
      s(f), h && !h.persisted && h.afterLeave && h.afterLeave();
    };
    if (l.shapeFlag & 1 && h && !h.persisted) {
      const { leave: y, delayLeave: v } = h, b = () => y(f, _);
      v ? v(l.el, _, b) : b();
    } else
      _();
  }, ct = (l, u) => {
    let f;
    for (; l !== u; )
      f = x(l), s(l), l = f;
    s(u);
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
    ), br(), ps(), u._vnode = l;
  }, Le = {
    p: R,
    um: Y,
    m: Te,
    r: Ie,
    mt: Je,
    mc: le,
    pc: F,
    pbc: me,
    n: Qe,
    o: e
  };
  let at, et;
  return t && ([at, et] = t(
    Le
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
function Si(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rs(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (T(r) && T(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = Ke(s[o]), a.el = i.el), n || Rs(i, a)), a.type === an && (a.el = i.el);
    }
}
function Ei(e) {
  const t = e.slice(), n = [0];
  let r, s, o, i, a;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const d = e[r];
    if (d !== 0) {
      if (s = n[n.length - 1], e[s] < d) {
        t[r] = s, n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        a = o + i >> 1, e[n[a]] < d ? o = a + 1 : i = a;
      d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Ps(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ps(t);
}
const Ci = (e) => e.__isTeleport, fe = Symbol.for("v-fgt"), an = Symbol.for("v-txt"), lt = Symbol.for("v-cmt"), vn = Symbol.for("v-stc"), It = [];
let Ee = null;
function ke(e = !1) {
  It.push(Ee = e ? null : []);
}
function Ai() {
  It.pop(), Ee = It[It.length - 1] || null;
}
let Nt = 1;
function Pr(e) {
  Nt += e;
}
function Ms(e) {
  return e.dynamicChildren = Nt > 0 ? Ee || pt : null, Ai(), Nt > 0 && Ee && Ee.push(e), e;
}
function ft(e, t, n, r, s, o) {
  return Ms(
    W(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function Mn(e, t, n, r, s) {
  return Ms(
    oe(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function Nn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const un = "__vInternal", Ns = ({ key: e }) => e ?? null, $t = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? q(e) || ae(e) || I(e) ? { i: ye, r: e, k: t, f: !!n } : e : null);
function W(e, t = null, n = null, r = 0, s = null, o = e === fe ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ns(t),
    ref: t && $t(t),
    scopeId: _s,
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
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ye
  };
  return a ? (rr(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= q(n) ? 8 : 16), Nt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ee.push(c), c;
}
const oe = Oi;
function Oi(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === $o) && (e = lt), Nn(e)) {
    const a = qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && rr(a, n), Nt > 0 && !o && Ee && (a.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = a : Ee.push(a)), a.patchFlag |= -2, a;
  }
  if (Hi(e) && (e = e.__vccOpts), t) {
    t = Ti(t);
    let { class: a, style: c } = t;
    a && !q(a) && (t.class = nn(a)), G(c) && (is(c) && !T(c) && (c = J({}, c)), t.style = Bn(c));
  }
  const i = q(e) ? 1 : Go(e) ? 128 : Ci(e) ? 64 : G(e) ? 4 : I(e) ? 2 : 0;
  return W(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function Ti(e) {
  return e ? is(e) || un in e ? J({}, e) : e : null;
}
function qe(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e, a = t ? Pi(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ns(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? T(s) ? s.concat($t(t)) : [s, $t(t)] : $t(t)
    ) : s,
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
  return t ? (ke(), Mn(lt, null, e)) : oe(lt, null, e);
}
function Ne(e) {
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
function rr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), rr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(un in t) ? t._ctx = ye : s === 3 && ye && (ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    I(t) ? (t = { default: t, _ctx: ye }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ii(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Pi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = nn([t.class, r.class]));
      else if (s === "style")
        t.style = Bn([t.style, r.style]);
      else if (Jt(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(T(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else
        s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Pe(e, t, n, r = null) {
  Ce(e, t, 7, [
    n,
    r
  ]);
}
const Mi = Es();
let Ni = 0;
function ji(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Mi, o = {
    uid: Ni++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
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
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: As(r, s),
    emitsOptions: ms(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: $,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Uo.bind(null, o), e.ce && e.ce(o), o;
}
let te = null, sr, jn;
{
  const e = Gr(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  sr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), jn = t(
    "__VUE_SSR_SETTERS__",
    (n) => fn = n
  );
}
const bt = (e) => {
  sr(e), e.scope.on();
}, it = () => {
  te && te.scope.off(), sr(null);
};
function js(e) {
  return e.vnode.shapeFlag & 4;
}
let fn = !1;
function Di(e, t = !1) {
  t && jn(t);
  const { props: n, children: r } = e.vnode, s = js(e);
  mi(e, n, s, t), bi(e, r);
  const o = s ? Li(e, t) : void 0;
  return t && jn(!1), o;
}
function Li(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ls(new Proxy(e.ctx, ci));
  const { setup: r } = n;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Fi(e) : null;
    bt(e), Ye();
    const o = Ve(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    );
    if (Xe(), it(), Wr(o)) {
      if (o.then(it, it), t)
        return o.then((i) => {
          Mr(e, i, t);
        }).catch((i) => {
          sn(i, e, 0);
        });
      e.asyncDep = o;
    } else
      Mr(e, o, t);
  } else
    Ds(e, t);
}
function Mr(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : G(t) && (e.setupState = us(t)), Ds(e, n);
}
let Nr;
function Ds(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Nr && !r.render) {
      const s = r.template || tr(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: c } = r, d = J(
          J(
            {
              isCustomElement: o,
              delimiters: a
            },
            i
          ),
          c
        );
        r.render = Nr(s, d);
      }
    }
    e.render = r.render || pe;
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
function ki(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return de(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Fi(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return ki(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function or(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(us(ls(e.exposed)), {
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
const Ui = /(?:^|[-_])(\w)/g, Vi = (e) => e.replace(Ui, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ls(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ks(e, t, n = !1) {
  let r = Ls(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? Vi(r) : n ? "App" : "Anonymous";
}
function Hi(e) {
  return I(e) && "__vccOpts" in e;
}
const Xt = (e, t) => Eo(e, t, fn);
function ht(e, t, n) {
  const r = arguments.length;
  return r === 2 ? G(t) && !T(t) ? Nn(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Nn(n) && (n = [n]), oe(e, t, n));
}
const Bi = "3.4.5", Ki = "http://www.w3.org/2000/svg", $i = "http://www.w3.org/1998/Math/MathML", $e = typeof document < "u" ? document : null, jr = $e && /* @__PURE__ */ $e.createElement("template"), Wi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? $e.createElementNS(Ki, e) : t === "mathml" ? $e.createElementNS($i, e) : $e.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
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
  insertStaticContent(e, t, n, r, s, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      jr.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const a = jr.content;
      if (r === "svg" || r === "mathml") {
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
}, Gi = Symbol("_vtc");
function zi(e, t, n) {
  const r = e[Gi];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const qi = Symbol("_vod"), Yi = Symbol("");
function Xi(e, t, n) {
  const r = e.style, s = q(n);
  if (n && !s) {
    if (t && !q(t))
      for (const o in t)
        n[o] == null && Dn(r, o, "");
    for (const o in n)
      Dn(r, o, n[o]);
  } else {
    const o = r.display;
    if (s) {
      if (t !== n) {
        const i = r[Yi];
        i && (n += ";" + i), r.cssText = n;
      }
    } else
      t && e.removeAttribute("style");
    qi in e && (r.display = o);
  }
}
const Dr = /\s*!important$/;
function Dn(e, t, n) {
  if (T(n))
    n.forEach((r) => Dn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Ji(e, t);
    Dr.test(n) ? e.setProperty(
      xe(r),
      n.replace(Dr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Lr = ["Webkit", "Moz", "ms"], bn = {};
function Ji(e, t) {
  const n = bn[t];
  if (n)
    return n;
  let r = ge(t);
  if (r !== "filter" && r in e)
    return bn[t] = r;
  r = tn(r);
  for (let s = 0; s < Lr.length; s++) {
    const o = Lr[s] + r;
    if (o in e)
      return bn[t] = o;
  }
  return t;
}
const kr = "http://www.w3.org/1999/xlink";
function Zi(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(kr, t.slice(6, t.length)) : e.setAttributeNS(kr, t, n);
  else {
    const o = Qs(t);
    n == null || o && !zr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Qi(e, t, n, r, s, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, o), e[t] = n ?? "";
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
    d === "boolean" ? n = zr(n) : n == null && d === "string" ? (n = "", c = !0) : d === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(t);
}
function el(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function tl(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Fr = Symbol("_vei");
function nl(e, t, n, r, s = null) {
  const o = e[Fr] || (e[Fr] = {}), i = o[t];
  if (r && i)
    i.value = r;
  else {
    const [a, c] = rl(t);
    if (r) {
      const d = o[t] = il(r, s);
      el(e, a, d, c);
    } else
      i && (tl(e, a, i, c), o[t] = void 0);
  }
}
const Ur = /(?:Once|Passive|Capture)$/;
function rl(e) {
  let t;
  if (Ur.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ur); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xe(e.slice(2)), t];
}
let wn = 0;
const sl = /* @__PURE__ */ Promise.resolve(), ol = () => wn || (sl.then(() => wn = 0), wn = Date.now());
function il(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ce(
      ll(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = ol(), n;
}
function ll(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (s) => !s._stopped && r && r(s));
  } else
    return t;
}
const Vr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cl = (e, t, n, r, s, o, i, a, c) => {
  const d = s === "svg";
  t === "class" ? zi(e, r, d) : t === "style" ? Xi(e, n, r) : Jt(t) ? Un(t) || nl(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : al(e, t, r, d)) ? Qi(
    e,
    t,
    r,
    o,
    i,
    a,
    c
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Zi(e, t, r, d));
};
function al(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vr(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Vr(t) && q(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ul(e, t) {
  const n = /* @__PURE__ */ ln(e);
  class r extends ir {
    constructor(o) {
      super(n, o, t);
    }
  }
  return r.def = n, r;
}
const fl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class ir extends fl {
  constructor(t, n = {}, r) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Jn(() => {
      this._connected || (Br(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver((r) => {
      for (const s of r)
        this._setAttr(s.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (r, s = !1) => {
      const { props: o, styles: i } = r;
      let a;
      if (o && !T(o))
        for (const c in o) {
          const d = o[c];
          (d === Number || d && d.type === Number) && (c in this._props && (this._props[c] = ur(this._props[c])), (a || (a = /* @__PURE__ */ Object.create(null)))[ge(c)] = !0);
        }
      this._numberProps = a, s && this._resolveProps(r), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((r) => t(r, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, r = T(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && r.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of r.map(ge))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(o) {
          this._setProp(s, o);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const r = ge(t);
    this._numberProps && this._numberProps[r] && (n = ur(n)), this._setProp(r, n, !1);
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
  _setProp(t, n, r = !0, s = !0) {
    n !== this._props[t] && (this._props[t] = n, s && this._instance && this._update(), r && (n === !0 ? this.setAttribute(xe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(xe(t), n + "") : n || this.removeAttribute(xe(t))));
  }
  _update() {
    Br(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = oe(this._def, J({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const r = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: i
          })
        );
      };
      n.emit = (o, ...i) => {
        r(o, i), xe(o) !== o && r(xe(o), i);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof ir) {
          n.parent = s._instance, n.provides = s._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const r = document.createElement("style");
      r.textContent = n, this.shadowRoot.appendChild(r);
    });
  }
}
const dl = /* @__PURE__ */ J({ patchProp: cl }, Wi);
let Hr;
function hl() {
  return Hr || (Hr = xi(dl));
}
const Br = (...e) => {
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
}, Kr = {
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
  const { snapAlign: n, wrapAround: r, itemsToShow: s = 1 } = e;
  if (r)
    return Math.max(t - 1, 0);
  let o;
  switch (n) {
    case "start":
      o = t - s;
      break;
    case "end":
      o = t - 1;
      break;
    case "center":
    case "center-odd":
      o = t - Math.ceil((s - 0.5) / 2);
      break;
    case "center-even":
      o = t - Math.ceil(s / 2);
      break;
    default:
      o = 0;
      break;
  }
  return Math.max(o, 0);
}
function gl({ config: e, slidesCount: t }) {
  const { wrapAround: n, snapAlign: r, itemsToShow: s = 1 } = e;
  let o = 0;
  if (n || s > t)
    return o;
  switch (r) {
    case "start":
      o = 0;
      break;
    case "end":
      o = s - 1;
      break;
    case "center":
    case "center-odd":
      o = Math.floor((s - 1) / 2);
      break;
    case "center-even":
      o = Math.floor((s - 2) / 2);
      break;
    default:
      o = 0;
      break;
  }
  return o;
}
function Ln({ val: e, max: t, min: n }) {
  return t < n ? e : Math.min(Math.max(e, n), t);
}
function ml({ config: e, currentSlide: t, slidesCount: n }) {
  const { snapAlign: r, wrapAround: s, itemsToShow: o = 1 } = e;
  let i = t;
  switch (r) {
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
  return s ? i : Ln({
    val: i,
    max: n - o,
    min: 0
  });
}
function Fs(e) {
  return e ? e.reduce((t, n) => {
    var r;
    return n.type === fe ? [...t, ...Fs(n.children)] : ((r = n.type) === null || r === void 0 ? void 0 : r.name) === "CarouselSlide" ? [...t, n] : t;
  }, []) : [];
}
function kn({ val: e, max: t, min: n = 0 }) {
  return e > t ? kn({ val: e - (t + 1), max: t, min: n }) : e < n ? kn({ val: e + (t + 1), max: t, min: n }) : e;
}
function _l(e, t) {
  let n;
  return t ? function(...r) {
    const s = this;
    n || (e.apply(s, r), n = !0, setTimeout(() => n = !1, t));
  } : e;
}
function vl(e, t) {
  let n;
  return function(...r) {
    n && clearTimeout(n), n = setTimeout(() => {
      e(...r), n = null;
    }, t);
  };
}
function bl(e = "", t = {}) {
  return Object.entries(t).reduce((n, [r, s]) => n.replace(`{${r}}`, String(s)), e);
}
var wl = /* @__PURE__ */ ln({
  name: "ARIA",
  setup() {
    const e = Se("config", Ge(Object.assign({}, ee))), t = Se("currentSlide", z(0)), n = Se("slidesCount", z(0));
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
  props: Kr,
  setup(e, { slots: t, emit: n, expose: r }) {
    var s;
    const o = z(null), i = z([]), a = z(0), c = z(0), d = Ge(Object.assign({}, ee));
    let g = Object.assign({}, ee), w;
    const x = z((s = e.modelValue) !== null && s !== void 0 ? s : 0), A = z(0), L = z(0), R = z(0), k = z(0);
    let U, ne;
    Me("config", d), Me("slidesCount", c), Me("currentSlide", x), Me("maxSlide", R), Me("minSlide", k), Me("slideWidth", a);
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
    const M = vl(() => {
      B(), Z();
    }, 16);
    function Z() {
      if (!o.value)
        return;
      const f = o.value.getBoundingClientRect();
      a.value = f.width / d.itemsToShow;
    }
    function le() {
      c.value <= 0 || (L.value = Math.ceil((c.value - 1) / 2), R.value = pl({ config: d, slidesCount: c.value }), k.value = gl({ config: d, slidesCount: c.value }), d.wrapAround || (x.value = Ln({
        val: x.value,
        max: R.value,
        min: k.value
      })));
    }
    Qn(() => {
      Jn(() => Z()), setTimeout(() => Z(), 1e3), B(), Ze(), window.addEventListener("resize", M, { passive: !0 }), n("init");
    }), er(() => {
      ne && clearTimeout(ne), U && clearInterval(U), window.removeEventListener("resize", M, {
        passive: !0
      });
    });
    let re = !1;
    const me = { x: 0, y: 0 }, Ae = { x: 0, y: 0 }, _e = Ge({ x: 0, y: 0 }), De = z(!1), Je = z(!1), jt = () => {
      De.value = !0;
    }, Q = () => {
      De.value = !1;
    };
    function H(f) {
      ["INPUT", "TEXTAREA", "SELECT"].includes(f.target.tagName) || (re = f.type === "touchstart", re || f.preventDefault(), !(!re && f.button !== 0 || Y.value) && (me.x = re ? f.touches[0].clientX : f.clientX, me.y = re ? f.touches[0].clientY : f.clientY, document.addEventListener(re ? "touchmove" : "mousemove", F, !0), document.addEventListener(re ? "touchend" : "mouseup", Oe, !0)));
    }
    const F = _l((f) => {
      Je.value = !0, Ae.x = re ? f.touches[0].clientX : f.clientX, Ae.y = re ? f.touches[0].clientY : f.clientY;
      const p = Ae.x - me.x, h = Ae.y - me.y;
      _e.y = h, _e.x = p;
    }, d.throttle);
    function Oe() {
      const f = d.dir === "rtl" ? -1 : 1, p = Math.sign(_e.x) * 0.4, h = Math.round(_e.x / a.value + p) * f;
      if (h && !re) {
        const _ = (y) => {
          y.stopPropagation(), window.removeEventListener("click", _, !0);
        };
        window.addEventListener("click", _, !0);
      }
      Ie(x.value - h), _e.x = 0, _e.y = 0, Je.value = !1, document.removeEventListener(re ? "touchmove" : "mousemove", F, !0), document.removeEventListener(re ? "touchend" : "mouseup", Oe, !0);
    }
    function Ze() {
      !d.autoplay || d.autoplay <= 0 || (U = setInterval(() => {
        d.pauseAutoplayOnHover && De.value || ct();
      }, d.autoplay));
    }
    function Te() {
      U && (clearInterval(U), U = null), Ze();
    }
    const Y = z(!1);
    function Ie(f) {
      const p = d.wrapAround ? f : Ln({
        val: f,
        max: R.value,
        min: k.value
      });
      x.value === p || Y.value || (n("slide-start", {
        slidingToIndex: f,
        currentSlideIndex: x.value,
        prevSlideIndex: A.value,
        slidesCount: c.value
      }), Y.value = !0, A.value = x.value, x.value = p, ne = setTimeout(() => {
        if (d.wrapAround) {
          const h = kn({
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
    Me("nav", ve), Me("isSliding", Y);
    const Qe = Xt(() => ml({
      config: d,
      currentSlide: x.value,
      slidesCount: c.value
    }));
    Me("slidesToScroll", Qe);
    const Dt = Xt(() => {
      const f = d.dir === "rtl" ? -1 : 1, p = Qe.value * a.value * f;
      return {
        transform: `translateX(${_e.x - p}px)`,
        transition: `${Y.value ? d.transition : 0}ms`,
        margin: d.wrapAround ? `0 -${c.value * a.value}px` : "",
        width: "100%"
      };
    });
    function Le() {
      D(), B(), le(), Z(), Te();
    }
    Object.keys(Kr).forEach((f) => {
      ["modelValue"].includes(f) || _t(() => e[f], Le);
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
      minSlide: k,
      middleSlide: L
    };
    r({
      updateBreakpointsConfigs: B,
      updateSlidesData: le,
      updateSlideWidth: Z,
      initDefaultConfigs: D,
      restartCarousel: Le,
      slideTo: Ie,
      next: ct,
      prev: wt,
      nav: ve,
      data: at
    });
    const et = t.default || t.slides, l = t.addons, u = Ge(at);
    return () => {
      const f = Fs(et == null ? void 0 : et(u)), p = (l == null ? void 0 : l(u)) || [];
      f.forEach((v, b) => v.props.index = b);
      let h = f;
      if (d.wrapAround) {
        const v = f.map((m, S) => qe(m, {
          index: -f.length + S,
          isClone: !0,
          key: `clone-before-${S}`
        })), b = f.map((m, S) => qe(m, {
          index: f.length + S,
          isClone: !0,
          key: `clone-after-${S}`
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
}), $r;
(function(e) {
  e.arrowUp = "arrowUp", e.arrowDown = "arrowDown", e.arrowRight = "arrowRight", e.arrowLeft = "arrowLeft";
})($r || ($r = {}));
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
    const n = Se("config", Ge(Object.assign({}, ee))), r = Se("currentSlide", z(0)), s = Se("slidesToScroll", z(0)), o = Se("isSliding", z(!1)), i = () => e.index === r.value, a = () => e.index === r.value - 1, c = () => e.index === r.value + 1, d = () => {
      const g = Math.floor(s.value), w = Math.ceil(s.value + n.itemsToShow - 1);
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
const Sl = ':root{--vc-clr-primary: #000;--vc-clr-secondary: #090f207f;--vc-clr-white: #ffffff;--vc-icn-width: 1.2em;--vc-nav-width: 30px;--vc-nav-height: 30px;--vc-nav-border-radius: 0;--vc-nav-color: var(--vc-clr-primary);--vc-nav-color-hover: var(--vc-clr-secondary);--vc-nav-background: transparent;--vc-pgn-width: 12px;--vc-pgn-height: 4px;--vc-pgn-margin: 4px;--vc-pgn-border-radius: 0;--vc-pgn-background-color: var(--vc-clr-secondary);--vc-pgn-active-color: var(--vc-clr-primary)}.carousel__prev,.carousel__next{box-sizing:content-box;background:var(--vc-nav-background);border-radius:var(--vc-nav-border-radius);width:var(--vc-nav-width);height:var(--vc-nav-height);text-align:center;font-size:var(--vc-nav-height);padding:0;color:var(--vc-nav-color);display:flex;justify-content:center;align-items:center;position:absolute;border:0;cursor:pointer;margin:0 10px;top:50%;transform:translateY(-50%)}.carousel__prev:hover,.carousel__next:hover{color:var(--vc-nav-color-hover)}.carousel__next--disabled,.carousel__prev--disabled{cursor:not-allowed;opacity:.5}.carousel__prev{left:0}.carousel__next{right:0}.carousel--rtl .carousel__prev{left:auto;right:0}.carousel--rtl .carousel__next{right:auto;left:0}.carousel{position:relative;text-align:center;box-sizing:border-box;touch-action:pan-y;overscroll-behavior:none}.carousel.is-dragging{touch-action:none}.carousel *{box-sizing:border-box}.carousel__track{display:flex;padding:0!important;position:relative}.carousel__viewport{overflow:hidden}.carousel__sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.carousel__icon{width:var(--vc-icn-width);height:var(--vc-icn-width);fill:currentColor}.carousel__pagination{display:flex;justify-content:center;list-style:none;line-height:0;margin:10px 0 0}.carousel__pagination-button{display:block;border:0;margin:0;cursor:pointer;padding:var(--vc-pgn-margin);background:transparent}.carousel__pagination-button:after{display:block;content:"";width:var(--vc-pgn-width);height:var(--vc-pgn-height);border-radius:var(--vc-pgn-border-radius);background-color:var(--vc-pgn-background-color)}.carousel__pagination-button:hover:after,.carousel__pagination-button--active:after{background-color:var(--vc-pgn-active-color)}.carousel__slide{scroll-snap-stop:auto;flex-shrink:0;margin:0;position:relative;display:flex;justify-content:center;align-items:center;transform:translateZ(0)}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.fixed{position:fixed!important}.absolute{position:absolute!important}.relative{position:relative!important}.left-0{left:0!important}.top-0{top:0!important}.z-10{z-index:10!important}.z-\\[9998\\]{z-index:9998!important}.flex{display:flex!important}.h-12{height:3rem!important}.h-24{height:6rem!important}.h-64{height:16rem!important}.h-96{height:24rem!important}.h-\\[100vh\\]{height:100vh!important}.h-auto{height:auto!important}.h-full{height:100%!important}.max-h-96{max-height:24rem!important}.max-h-\\[500px\\]{max-height:500px!important}.max-h-\\[calc\\(100v-550px\\)\\]{max-height:calc(100v - 550px)!important}.max-h-\\[calc\\(100svh-500px\\)\\]{max-height:calc(100svh - 500px)!important}.max-h-\\[calc\\(100svh-550px\\)\\]{max-height:calc(100svh - 550px)!important}.max-h-\\[400px\\]{max-height:400px!important}.max-h-\\[calc\\(100svh-400\\)\\]{max-height:calc(100svh - 400)!important}.max-h-\\[calc\\(100vh-400\\)\\]{max-height:calc(100vh - 400)!important}.max-h-\\[calc\\(100svh-400px\\)\\]{max-height:calc(100svh - 400px)!important}.min-h-screen{min-height:100vh!important}.w-12{width:3rem!important}.w-24{width:6rem!important}.w-\\[100vw\\]{width:100vw!important}.w-fit{width:-moz-fit-content!important;width:fit-content!important}.w-full{width:100%!important}.cursor-pointer{cursor:pointer!important}.appearance-none{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important}.flex-col{flex-direction:column!important}.flex-wrap{flex-wrap:wrap!important}.items-center{align-items:center!important}.justify-end{justify-content:flex-end!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.gap-4{gap:1rem!important}.overflow-y-auto{overflow-y:auto!important}.rounded-xl{border-radius:.75rem!important}.border-4{border-width:4px!important}.border-solid{border-style:solid!important}.border-primary-blue{--tw-border-opacity: 1 !important;border-color:rgb(9 135 197 / var(--tw-border-opacity))!important}.border-transparent{border-color:transparent!important}.bg-black\\/50{background-color:#00000080!important}.bg-transparent{background-color:transparent!important}.bg-white{--tw-bg-opacity: 1 !important;background-color:rgb(255 255 255 / var(--tw-bg-opacity))!important}.object-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-cover{-o-object-fit:cover!important;object-fit:cover!important}.p-4{padding:1rem!important}.text-gray-700\\/30{color:#3741514d!important}.duration-300{transition-duration:.3s!important}.hover\\:bg-gray-100\\/20:hover{background-color:#f3f4f633!important}.hover\\:text-gray-700:hover{--tw-text-opacity: 1 !important;color:rgb(55 65 81 / var(--tw-text-opacity))!important}', El = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
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
    const t = z([]), n = z(null), r = z(0), s = () => {
      r.value = r.value === 0 ? 0 : r.value - 1;
    }, o = () => {
      t.value.length - 1 !== r.value && (r.value = r.value + 1);
    }, i = (L) => {
      r.value = L;
    }, a = Xt(() => t.value[r.value]), c = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/resolve`, d = async () => {
      var L;
      try {
        const k = await (await fetch(c)).json();
        n.value = k;
        const U = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/thumbnail`;
        t.value.push(U), (L = k == null ? void 0 : k.images) == null || L.forEach((ne) => {
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
    }, A = (L) => {
      r.value = L;
    };
    return {
      currentSlide: r,
      slideTo: i,
      images: t,
      prev: s,
      next: o,
      onImageClick: w,
      image: a,
      isOpen: g,
      close: x,
      setCurrentImage: A
    };
  }
}, Al = { class: "flex flex-col w-full relative items-center" }, Ol = { class: "relative" }, Tl = ["src"], Il = { class: "flex absolute items-center bg-transparent justify-between w-full h-full z-10" }, Rl = /* @__PURE__ */ W("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-12 h-12"
}, [
  /* @__PURE__ */ W("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 19.5 8.25 12l7.5-7.5"
  })
], -1), Pl = [
  Rl
], Ml = /* @__PURE__ */ W("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-12 h-12"
}, [
  /* @__PURE__ */ W("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "m8.25 4.5 7.5 7.5-7.5 7.5"
  })
], -1), Nl = [
  Ml
], jl = {
  key: 0,
  class: "fixed z-[9998] top-0 left-0 w-[100vw] h-[100vh] bg-black/50"
}, Dl = { class: "modal-wrapper" }, Ll = { class: "min-h-screen bg-white flex flex-col p-4" }, kl = { class: "relative w-full" }, Fl = ["src"], Ul = { class: "flex justify-end w-full absolute top-0" }, Vl = /* @__PURE__ */ W("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-12 h-12"
}, [
  /* @__PURE__ */ W("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18 18 6M6 6l12 12"
  })
], -1), Hl = [
  Vl
], Bl = { class: "flex flex-wrap justify-center w-full gap-4 items-center overflow-y-auto max-h-[400px]" }, Kl = ["src", "onClick"];
function $l(e, t, n, r, s, o) {
  const i = xr("Slide"), a = xr("Carousel");
  return ke(), ft(fe, null, [
    W("div", Al, [
      oe(a, {
        id: "gallery",
        "items-to-show": 1,
        "wrap-around": !1,
        modelValue: r.currentSlide,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => r.currentSlide = c)
      }, {
        default: St(() => [
          (ke(!0), ft(fe, null, gn(r.images, (c, d) => (ke(), Mn(i, { key: d }, {
            default: St(() => [
              W("div", Ol, [
                W("img", {
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
      W("div", Il, [
        W("button", {
          onClick: t[1] || (t[1] = (...c) => r.prev && r.prev(...c)),
          class: "flex appearance-none h-64 items-center w-fit cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
        }, Pl),
        W("button", {
          onClick: t[2] || (t[2] = (...c) => r.onImageClick && r.onImageClick(...c)),
          class: "flex appearance-none items-center w-full h-96 cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
        }),
        W("button", {
          onClick: t[3] || (t[3] = (...c) => r.next && r.next(...c)),
          class: "flex appearance-none h-64 items-center w-fit cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
        }, Nl)
      ])
    ]),
    r.isOpen ? (ke(), ft("div", jl, [
      W("div", Dl, [
        W("div", Ll, [
          W("div", kl, [
            oe(a, {
              id: "gallery",
              "items-to-show": 1,
              "wrap-around": !1,
              modelValue: r.currentSlide,
              "onUpdate:modelValue": t[4] || (t[4] = (c) => r.currentSlide = c)
            }, {
              default: St(() => [
                (ke(!0), ft(fe, null, gn(r.images, (c, d) => (ke(), Mn(i, { key: d }, {
                  default: St(() => [
                    W("img", {
                      src: c,
                      class: "w-full h-full max-h-[calc(100svh-400px)] object-contain flex rounded-xl items-center bg-white"
                    }, null, 8, Fl)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"]),
            W("div", Ul, [
              W("button", {
                onClick: t[5] || (t[5] = (...c) => r.close && r.close(...c)),
                class: "flex appearance-none items-center w-fit cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
              }, Hl)
            ])
          ]),
          W("div", Bl, [
            (ke(!0), ft(fe, null, gn(r.images, (c, d) => (ke(), ft("img", {
              key: d,
              src: c,
              onClick: () => r.setCurrentImage(d),
              class: nn([{ "border-4 border-solid border-primary-blue": r.currentSlide === d }, "w-24 h-24 object-cover flex cursor-pointer rounded-xl justify-center items-center bg-white"])
            }, null, 10, Kl))), 128))
          ])
        ])
      ])
    ])) : Ri("", !0)
  ], 64);
}
const Wl = /* @__PURE__ */ El(Cl, [["render", $l], ["styles", [Sl]]]), Gl = /* @__PURE__ */ ul(Wl);
customElements.define("image-slider", Gl);
