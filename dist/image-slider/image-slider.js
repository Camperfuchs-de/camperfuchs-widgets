function Fn(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const U = {}, pt = [], ve = () => {
}, Ns = () => !1, Yt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ln = (e) => e.startsWith("onUpdate:"), X = Object.assign, Vn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ks = Object.prototype.hasOwnProperty, R = (e, t) => ks.call(e, t), O = Array.isArray, Et = (e) => Jt(e) === "[object Map]", Fs = (e) => Jt(e) === "[object Set]", I = (e) => typeof e == "function", J = (e) => typeof e == "string", Xt = (e) => typeof e == "symbol", z = (e) => e !== null && typeof e == "object", Ur = (e) => (z(e) || I(e)) && I(e.then) && I(e.catch), Ls = Object.prototype.toString, Jt = (e) => Ls.call(e), Vs = (e) => Jt(e).slice(8, -1), Ds = (e) => Jt(e) === "[object Object]", Dn = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = /* @__PURE__ */ Fn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hs = /-(\w)/g, pe = Zt((e) => e.replace(Hs, (t, n) => n ? n.toUpperCase() : "")), $s = /\B([A-Z])/g, xe = Zt(
  (e) => e.replace($s, "-$1").toLowerCase()
), Qt = Zt((e) => e.charAt(0).toUpperCase() + e.slice(1)), un = Zt((e) => e ? `on${Qt(e)}` : ""), qe = (e, t) => !Object.is(e, t), fn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ut = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Bs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, cr = (e) => {
  const t = J(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ar;
const Kr = () => ar || (ar = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Hn(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = J(r) ? zs(r) : Hn(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (J(e) || z(e))
    return e;
}
const Us = /;(?![^(]*\))/g, Ks = /:([^]+)/, Ws = /\/\*[^]*?\*\//g;
function zs(e) {
  const t = {};
  return e.replace(Ws, "").split(Us).forEach((n) => {
    if (n) {
      const r = n.split(Ks);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function en(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const r = en(e[n]);
      r && (t += r + " ");
    }
  else if (z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const qs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gs = /* @__PURE__ */ Fn(qs);
function Wr(e) {
  return !!e || e === "";
}
let we;
class Ys {
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
function Xs(e, t = we) {
  t && t.active && t.effects.push(e);
}
function Js() {
  return we;
}
let nt;
class $n {
  constructor(t, n, r, s) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, Xs(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, it();
      for (const t of this.deps)
        if (t.computed && (Zs(t.computed), this._dirtyLevel >= 2))
          break;
      lt(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Ke, n = nt;
    try {
      return Ke = !0, nt = this, this._runnings++, ur(this), this.fn();
    } finally {
      fr(this), this._runnings--, nt = n, Ke = t;
    }
  }
  stop() {
    var t;
    this.active && (ur(this), fr(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Zs(e) {
  return e.value;
}
function ur(e) {
  e._trackId++, e._depsLength = 0;
}
function fr(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      zr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function zr(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Ke = !0, bn = 0;
const qr = [];
function it() {
  qr.push(Ke), Ke = !1;
}
function lt() {
  const e = qr.pop();
  Ke = e === void 0 ? !0 : e;
}
function Bn() {
  bn++;
}
function Un() {
  for (bn--; !bn && wn.length; )
    wn.shift()();
}
function Gr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && zr(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const wn = [];
function Yr(e, t, n) {
  Bn();
  for (const r of e.keys())
    if (!(!r.allowRecurse && r._runnings) && r._dirtyLevel < t && (!r._runnings || t !== 2)) {
      const s = r._dirtyLevel;
      r._dirtyLevel = t, s === 0 && (!r._queryings || t !== 2) && (r.trigger(), r.scheduler && wn.push(r.scheduler));
    }
  Un();
}
const Xr = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, xn = /* @__PURE__ */ new WeakMap(), rt = Symbol(""), yn = Symbol("");
function fe(e, t, n) {
  if (Ke && nt) {
    let r = xn.get(e);
    r || xn.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = Xr(() => r.delete(n))), Gr(
      nt,
      s
    );
  }
}
function De(e, t, n, r, s, o) {
  const i = xn.get(e);
  if (!i)
    return;
  let a = [];
  if (t === "clear")
    a = [...i.values()];
  else if (n === "length" && O(e)) {
    const c = Number(r);
    i.forEach((d, g) => {
      (g === "length" || !Xt(g) && g >= c) && a.push(d);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), t) {
      case "add":
        O(e) ? Dn(n) && a.push(i.get("length")) : (a.push(i.get(rt)), Et(e) && a.push(i.get(yn)));
        break;
      case "delete":
        O(e) || (a.push(i.get(rt)), Et(e) && a.push(i.get(yn)));
        break;
      case "set":
        Et(e) && a.push(i.get(rt));
        break;
    }
  Bn();
  for (const c of a)
    c && Yr(
      c,
      3
    );
  Un();
}
const Qs = /* @__PURE__ */ Fn("__proto__,__v_isRef,__isVue"), Jr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xt)
), dr = /* @__PURE__ */ eo();
function eo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = F(this);
      for (let o = 0, i = this.length; o < i; o++)
        fe(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(F)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      it(), Bn();
      const r = F(this)[t].apply(this, n);
      return Un(), lt(), r;
    };
  }), e;
}
function to(e) {
  const t = F(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
}
class Zr {
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
      return r === (s ? o ? go : ns : o ? ts : es).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = O(t);
    if (!s) {
      if (i && R(dr, n))
        return Reflect.get(dr, n, r);
      if (n === "hasOwnProperty")
        return to;
    }
    const a = Reflect.get(t, n, r);
    return (Xt(n) ? Jr.has(n) : Qs(n)) || (s || fe(t, "get", n), o) ? a : de(a) ? i && Dn(n) ? a : a.value : z(a) ? s ? rs(a) : We(a) : a;
  }
}
class Qr extends Zr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._shallow) {
      const c = vt(o);
      if (!Kt(r) && !vt(r) && (o = F(o), r = F(r)), !O(t) && de(o) && !de(r))
        return c ? !1 : (o.value = r, !0);
    }
    const i = O(t) && Dn(n) ? Number(n) < t.length : R(t, n), a = Reflect.set(t, n, r, s);
    return t === F(s) && (i ? qe(r, o) && De(t, "set", n, r) : De(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = R(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && De(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Xt(n) || !Jr.has(n)) && fe(t, "has", n), r;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      O(t) ? "length" : rt
    ), Reflect.ownKeys(t);
  }
}
class no extends Zr {
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
const ro = /* @__PURE__ */ new Qr(), so = /* @__PURE__ */ new no(), oo = /* @__PURE__ */ new Qr(
  !0
), Kn = (e) => e, tn = (e) => Reflect.getPrototypeOf(e);
function Nt(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = F(e), o = F(t);
  n || (qe(t, o) && fe(s, "get", t), fe(s, "get", o));
  const { has: i } = tn(s), a = r ? Kn : n ? qn : Ot;
  if (i.call(s, t))
    return a(e.get(t));
  if (i.call(s, o))
    return a(e.get(o));
  e !== s && e.get(t);
}
function kt(e, t = !1) {
  const n = this.__v_raw, r = F(n), s = F(e);
  return t || (qe(e, s) && fe(r, "has", e), fe(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Ft(e, t = !1) {
  return e = e.__v_raw, !t && fe(F(e), "iterate", rt), Reflect.get(e, "size", e);
}
function hr(e) {
  e = F(e);
  const t = F(this);
  return tn(t).has.call(t, e) || (t.add(e), De(t, "add", e, e)), this;
}
function pr(e, t) {
  t = F(t);
  const n = F(this), { has: r, get: s } = tn(n);
  let o = r.call(n, e);
  o || (e = F(e), o = r.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), o ? qe(t, i) && De(n, "set", e, t) : De(n, "add", e, t), this;
}
function gr(e) {
  const t = F(this), { has: n, get: r } = tn(t);
  let s = n.call(t, e);
  s || (e = F(e), s = n.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return s && De(t, "delete", e, void 0), o;
}
function mr() {
  const e = F(this), t = e.size !== 0, n = e.clear();
  return t && De(e, "clear", void 0, void 0), n;
}
function Lt(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, a = F(i), c = t ? Kn : e ? qn : Ot;
    return !e && fe(a, "iterate", rt), i.forEach((d, g) => r.call(s, c(d), c(g), o));
  };
}
function Vt(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = F(s), i = Et(o), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, d = s[e](...r), g = n ? Kn : t ? qn : Ot;
    return !t && fe(
      o,
      "iterate",
      c ? yn : rt
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
function $e(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function io() {
  const e = {
    get(o) {
      return Nt(this, o);
    },
    get size() {
      return Ft(this);
    },
    has: kt,
    add: hr,
    set: pr,
    delete: gr,
    clear: mr,
    forEach: Lt(!1, !1)
  }, t = {
    get(o) {
      return Nt(this, o, !1, !0);
    },
    get size() {
      return Ft(this);
    },
    has: kt,
    add: hr,
    set: pr,
    delete: gr,
    clear: mr,
    forEach: Lt(!1, !0)
  }, n = {
    get(o) {
      return Nt(this, o, !0);
    },
    get size() {
      return Ft(this, !0);
    },
    has(o) {
      return kt.call(this, o, !0);
    },
    add: $e("add"),
    set: $e("set"),
    delete: $e("delete"),
    clear: $e("clear"),
    forEach: Lt(!0, !1)
  }, r = {
    get(o) {
      return Nt(this, o, !0, !0);
    },
    get size() {
      return Ft(this, !0);
    },
    has(o) {
      return kt.call(this, o, !0);
    },
    add: $e("add"),
    set: $e("set"),
    delete: $e("delete"),
    clear: $e("clear"),
    forEach: Lt(!0, !0)
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
  lo,
  co,
  ao,
  uo
] = /* @__PURE__ */ io();
function Wn(e, t) {
  const n = t ? e ? uo : ao : e ? co : lo;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    R(n, s) && s in r ? n : r,
    s,
    o
  );
}
const fo = {
  get: /* @__PURE__ */ Wn(!1, !1)
}, ho = {
  get: /* @__PURE__ */ Wn(!1, !0)
}, po = {
  get: /* @__PURE__ */ Wn(!0, !1)
}, es = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap();
function mo(e) {
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
function _o(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mo(Vs(e));
}
function We(e) {
  return vt(e) ? e : zn(
    e,
    !1,
    ro,
    fo,
    es
  );
}
function vo(e) {
  return zn(
    e,
    !1,
    oo,
    ho,
    ts
  );
}
function rs(e) {
  return zn(
    e,
    !0,
    so,
    po,
    ns
  );
}
function zn(e, t, n, r, s) {
  if (!z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = _o(e);
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
function Kt(e) {
  return !!(e && e.__v_isShallow);
}
function ss(e) {
  return gt(e) || vt(e);
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function os(e) {
  return Ut(e, "__v_skip", !0), e;
}
const Ot = (e) => z(e) ? We(e) : e, qn = (e) => z(e) ? rs(e) : e;
class is {
  constructor(t, n, r, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new $n(
      () => t(this._value),
      () => Cn(this, 1)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
  }
  get value() {
    const t = F(this);
    return ls(t), (!t._cacheable || t.effect.dirty) && qe(t._value, t._value = t.effect.run()) && Cn(t, 2), t._value;
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
function bo(e, t, n = !1) {
  let r, s;
  const o = I(e);
  return o ? (r = e, s = ve) : (r = e.get, s = e.set), new is(r, s, o || !s, n);
}
function ls(e) {
  Ke && nt && (e = F(e), Gr(
    nt,
    e.dep || (e.dep = Xr(
      () => e.dep = void 0,
      e instanceof is ? e : void 0
    ))
  ));
}
function Cn(e, t = 3, n) {
  e = F(e);
  const r = e.dep;
  r && Yr(
    r,
    t
  );
}
function de(e) {
  return !!(e && e.__v_isRef === !0);
}
function q(e) {
  return wo(e, !1);
}
function wo(e, t) {
  return de(e) ? e : new xo(e, t);
}
class xo {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : F(t), this._value = n ? t : Ot(t);
  }
  get value() {
    return ls(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Kt(t) || vt(t);
    t = n ? t : F(t), qe(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ot(t), Cn(this, 3));
  }
}
function yo(e) {
  return de(e) ? e.value : e;
}
const Co = {
  get: (e, t, n) => yo(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return de(s) && !de(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function cs(e) {
  return gt(e) ? e : new Proxy(e, Co);
}
function ze(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (o) {
    nn(o, t, n);
  }
  return s;
}
function Ee(e, t, n, r) {
  if (I(e)) {
    const o = ze(e, t, n, r);
    return o && Ur(o) && o.catch((i) => {
      nn(i, t, n);
    }), o;
  }
  const s = [];
  for (let o = 0; o < e.length; o++)
    s.push(Ee(e[o], t, n, r));
  return s;
}
function nn(e, t, n, r = !0) {
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
      ze(
        c,
        null,
        10,
        [e, i, a]
      );
      return;
    }
  }
  So(e, n, s, r);
}
function So(e, t, n, r = !0) {
  console.error(e);
}
let Pt = !1, Sn = !1;
const ne = [];
let Ne = 0;
const mt = [];
let Ve = null, tt = 0;
const as = /* @__PURE__ */ Promise.resolve();
let Gn = null;
function Yn(e) {
  const t = Gn || as;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Eo(e) {
  let t = Ne + 1, n = ne.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = ne[r], o = It(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function Xn(e) {
  (!ne.length || !ne.includes(
    e,
    Pt && e.allowRecurse ? Ne + 1 : Ne
  )) && (e.id == null ? ne.push(e) : ne.splice(Eo(e.id), 0, e), us());
}
function us() {
  !Pt && !Sn && (Sn = !0, Gn = as.then(ds));
}
function To(e) {
  const t = ne.indexOf(e);
  t > Ne && ne.splice(t, 1);
}
function Ao(e) {
  O(e) ? mt.push(...e) : (!Ve || !Ve.includes(
    e,
    e.allowRecurse ? tt + 1 : tt
  )) && mt.push(e), us();
}
function _r(e, t, n = Pt ? Ne + 1 : 0) {
  for (; n < ne.length; n++) {
    const r = ne[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      ne.splice(n, 1), n--, r();
    }
  }
}
function fs(e) {
  if (mt.length) {
    const t = [...new Set(mt)];
    if (mt.length = 0, Ve) {
      Ve.push(...t);
      return;
    }
    for (Ve = t, Ve.sort((n, r) => It(n) - It(r)), tt = 0; tt < Ve.length; tt++)
      Ve[tt]();
    Ve = null, tt = 0;
  }
}
const It = (e) => e.id == null ? 1 / 0 : e.id, Oo = (e, t) => {
  const n = It(e) - It(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ds(e) {
  Sn = !1, Pt = !0, ne.sort(Oo);
  try {
    for (Ne = 0; Ne < ne.length; Ne++) {
      const t = ne[Ne];
      t && t.active !== !1 && ze(t, null, 14);
    }
  } finally {
    Ne = 0, ne.length = 0, fs(), Pt = !1, Gn = null, (ne.length || mt.length) && ds();
  }
}
function Po(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || U;
  let s = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in r) {
    const g = `${i === "modelValue" ? "model" : i}Modifiers`, { number: w, trim: x } = r[g] || U;
    x && (s = n.map((T) => J(T) ? T.trim() : T)), w && (s = n.map(Bs));
  }
  let a, c = r[a = un(t)] || // also try camelCase event handler (#2249)
  r[a = un(pe(t))];
  !c && o && (c = r[a = un(xe(t))]), c && Ee(
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
    e.emitted[a] = !0, Ee(
      d,
      e,
      6,
      s
    );
  }
}
function hs(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, a = !1;
  if (!I(e)) {
    const c = (d) => {
      const g = hs(d, t, !0);
      g && (a = !0, X(i, g));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !a ? (z(e) && r.set(e, null), null) : (O(o) ? o.forEach((c) => i[c] = null) : X(i, o), z(e) && r.set(e, i), i);
}
function rn(e, t) {
  return !e || !Yt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, xe(t)) || R(e, t));
}
let ye = null, ps = null;
function Wt(e) {
  const t = ye;
  return ye = e, ps = e && e.type.__scopeId || null, t;
}
function Ct(e, t = ye, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Pr(-1);
    const o = Wt(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Wt(o), r._d && Pr(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function dn(e) {
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
    setupState: T,
    ctx: k,
    inheritAttrs: P
  } = e;
  let L, D;
  const ee = Wt(e);
  try {
    if (n.shapeFlag & 4) {
      const K = s || r, oe = K;
      L = Re(
        g.call(
          oe,
          K,
          w,
          o,
          T,
          x,
          k
        )
      ), D = c;
    } else {
      const K = t;
      L = Re(
        K.length > 1 ? K(
          o,
          { attrs: c, slots: a, emit: d }
        ) : K(
          o,
          null
          /* we know it doesn't need it */
        )
      ), D = t.props ? c : Io(c);
    }
  } catch (K) {
    At.length = 0, nn(K, e, 1), L = se(ot);
  }
  let N = L;
  if (D && P !== !1) {
    const K = Object.keys(D), { shapeFlag: oe } = N;
    K.length && oe & 7 && (i && K.some(Ln) && (D = Mo(
      D,
      i
    )), N = Ge(N, D));
  }
  return n.dirs && (N = Ge(N), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && (N.transition = n.transition), L = N, Wt(ee), L;
}
const Io = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Yt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Mo = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ln(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function jo(e, t, n) {
  const { props: r, children: s, component: o } = e, { props: i, children: a, patchFlag: c } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? vr(r, i, d) : !!i;
    if (c & 8) {
      const g = t.dynamicProps;
      for (let w = 0; w < g.length; w++) {
        const x = g[w];
        if (i[x] !== r[x] && !rn(d, x))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? vr(r, i, d) : !0 : !!i;
  return !1;
}
function vr(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !rn(n, o))
      return !0;
  }
  return !1;
}
function Ro({ vnode: e, parent: t }, n) {
  if (n)
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
        (e = t.vnode).el = n, t = t.parent;
      else
        break;
    }
}
const gs = "components";
function br(e, t) {
  return ko(gs, e, !0, t) || e;
}
const No = Symbol.for("v-ndc");
function ko(e, t, n = !0, r = !1) {
  const s = ye || re;
  if (s) {
    const o = s.type;
    if (e === gs) {
      const a = Pi(
        o,
        !1
      );
      if (a && (a === t || a === pe(t) || a === Qt(pe(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      wr(s[e] || o[e], t) || // global registration
      wr(s.appContext[e], t)
    );
    return !i && r ? o : i;
  }
}
function wr(e, t) {
  return e && (e[t] || e[pe(t)] || e[Qt(pe(t))]);
}
const Fo = (e) => e.__isSuspense;
function Lo(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Ao(e);
}
const Vo = Symbol.for("v-scx"), Do = () => Ce(Vo), Dt = {};
function _t(e, t, n) {
  return ms(e, t, n);
}
function ms(e, t, {
  immediate: n,
  deep: r,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: a
} = U) {
  if (t && o) {
    const j = t;
    t = (...ie) => {
      j(...ie), oe();
    };
  }
  const c = re, d = (j) => r === !0 ? j : (
    // for deep: false, only traverse root-level properties
    dt(j, r === !1 ? 1 : void 0)
  );
  let g, w = !1, x = !1;
  if (de(e) ? (g = () => e.value, w = Kt(e)) : gt(e) ? (g = () => d(e), w = !0) : O(e) ? (x = !0, w = e.some((j) => gt(j) || Kt(j)), g = () => e.map((j) => {
    if (de(j))
      return j.value;
    if (gt(j))
      return d(j);
    if (I(j))
      return ze(j, c, 2);
  })) : I(e) ? t ? g = () => ze(e, c, 2) : g = () => (T && T(), Ee(
    e,
    c,
    3,
    [k]
  )) : g = ve, t && r) {
    const j = g;
    g = () => dt(j());
  }
  let T, k = (j) => {
    T = N.onStop = () => {
      ze(j, c, 4), T = N.onStop = void 0;
    };
  }, P;
  if (an)
    if (k = ve, t ? n && Ee(t, c, 3, [
      g(),
      x ? [] : void 0,
      k
    ]) : g(), s === "sync") {
      const j = Do();
      P = j.__watcherHandles || (j.__watcherHandles = []);
    } else
      return ve;
  let L = x ? new Array(e.length).fill(Dt) : Dt;
  const D = () => {
    if (!(!N.active || !N.dirty))
      if (t) {
        const j = N.run();
        (r || w || (x ? j.some((ie, ce) => qe(ie, L[ce])) : qe(j, L))) && (T && T(), Ee(t, c, 3, [
          j,
          // pass undefined as the old value when it's changed for the first time
          L === Dt ? void 0 : x && L[0] === Dt ? [] : L,
          k
        ]), L = j);
      } else
        N.run();
  };
  D.allowRecurse = !!t;
  let ee;
  s === "sync" ? ee = D : s === "post" ? ee = () => ae(D, c && c.suspense) : (D.pre = !0, c && (D.id = c.uid), ee = () => Xn(D));
  const N = new $n(g, ve, ee), K = Js(), oe = () => {
    N.stop(), K && Vn(K.effects, N);
  };
  return t ? n ? D() : L = N.run() : s === "post" ? ae(
    N.run.bind(N),
    c && c.suspense
  ) : N.run(), P && P.push(oe), oe;
}
function Ho(e, t, n) {
  const r = this.proxy, s = J(e) ? e.includes(".") ? _s(r, e) : () => r[e] : e.bind(r, r);
  let o;
  I(t) ? o = t : (o = t.handler, n = t);
  const i = re;
  bt(this);
  const a = ms(s, o.bind(r), n);
  return i ? bt(i) : st(), a;
}
function _s(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function dt(e, t, n = 0, r) {
  if (!z(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), de(e))
    dt(e.value, t, n, r);
  else if (O(e))
    for (let s = 0; s < e.length; s++)
      dt(e[s], t, n, r);
  else if (Fs(e) || Et(e))
    e.forEach((s) => {
      dt(s, t, n, r);
    });
  else if (Ds(e))
    for (const s in e)
      dt(e[s], t, n, r);
  return e;
}
function Qe(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let c = a.dir[r];
    c && (it(), Ee(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), lt());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function sn(e, t) {
  return I(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    X({ name: e.name }, t, { setup: e })
  ) : e;
}
const $t = (e) => !!e.type.__asyncLoader, vs = (e) => e.type.__isKeepAlive;
function $o(e, t) {
  bs(e, "a", t);
}
function Bo(e, t) {
  bs(e, "da", t);
}
function bs(e, t, n = re) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (on(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      vs(s.parent.vnode) && Uo(r, t, n, s), s = s.parent;
  }
}
function Uo(e, t, n, r) {
  const s = on(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Zn(() => {
    Vn(r[t], s);
  }, n);
}
function on(e, t, n = re, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      it(), bt(n);
      const a = Ee(t, n, e, i);
      return st(), lt(), a;
    });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const He = (e) => (t, n = re) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!an || e === "sp") && on(e, (...r) => t(...r), n)
), Ko = He("bm"), Jn = He("m"), Wo = He("bu"), zo = He("u"), qo = He("bum"), Zn = He("um"), Go = He("sp"), Yo = He(
  "rtg"
), Xo = He(
  "rtc"
);
function Jo(e, t = re) {
  on("ec", e, t);
}
function hn(e, t, n, r) {
  let s;
  const o = n && n[r];
  if (O(e) || J(e)) {
    s = new Array(e.length);
    for (let i = 0, a = e.length; i < a; i++)
      s[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (z(e))
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
const En = (e) => e ? Ms(e) ? rr(e) || e.proxy : En(e.parent) : null, Tt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => En(e.parent),
    $root: (e) => En(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Qn(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Xn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Yn.bind(e.proxy)),
    $watch: (e) => Ho.bind(e)
  })
), pn = (e, t) => e !== U && !e.__isScriptSetup && R(e, t), Zo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: c } = e;
    let d;
    if (t[0] !== "$") {
      const T = i[t];
      if (T !== void 0)
        switch (T) {
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
        if (pn(r, t))
          return i[t] = 1, r[t];
        if (s !== U && R(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && R(d, t)
        )
          return i[t] = 3, o[t];
        if (n !== U && R(n, t))
          return i[t] = 4, n[t];
        Tn && (i[t] = 0);
      }
    }
    const g = Tt[t];
    let w, x;
    if (g)
      return t === "$attrs" && fe(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (w = a.__cssModules) && (w = w[t])
    )
      return w;
    if (n !== U && R(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      x = c.config.globalProperties, R(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return pn(s, t) ? (s[t] = n, !0) : r !== U && R(r, t) ? (r[t] = n, !0) : R(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let a;
    return !!n[i] || e !== U && R(e, i) || pn(t, i) || (a = o[0]) && R(a, i) || R(r, i) || R(Tt, i) || R(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function xr(e) {
  return O(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Tn = !0;
function Qo(e) {
  const t = Qn(e), n = e.proxy, r = e.ctx;
  Tn = !1, t.beforeCreate && yr(t.beforeCreate, e, "bc");
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
    beforeUpdate: T,
    updated: k,
    activated: P,
    deactivated: L,
    beforeDestroy: D,
    beforeUnmount: ee,
    destroyed: N,
    unmounted: K,
    render: oe,
    renderTracked: j,
    renderTriggered: ie,
    errorCaptured: ce,
    serverPrefetch: te,
    // public API
    expose: ge,
    inheritAttrs: Te,
    // assets
    components: me,
    directives: ke,
    filters: Ye
  } = t;
  if (d && ei(d, r, null), i)
    for (const $ in i) {
      const V = i[$];
      I(V) && (r[$] = V.bind(n));
    }
  if (s) {
    const $ = s.call(n, n);
    z($) && (e.data = We($));
  }
  if (Tn = !0, o)
    for (const $ in o) {
      const V = o[$], Ae = I(V) ? V.bind(n, n) : I(V.get) ? V.get.bind(n, n) : ve, Xe = !I(V) && I(V.set) ? V.set.bind(n) : ve, Oe = Gt({
        get: Ae,
        set: Xe
      });
      Object.defineProperty(r, $, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (G) => Oe.value = G
      });
    }
  if (a)
    for (const $ in a)
      ws(a[$], r, n, $);
  if (c) {
    const $ = I(c) ? c.call(n) : c;
    Reflect.ownKeys($).forEach((V) => {
      je(V, $[V]);
    });
  }
  g && yr(g, e, "c");
  function Z($, V) {
    O(V) ? V.forEach((Ae) => $(Ae.bind(n))) : V && $(V.bind(n));
  }
  if (Z(Ko, w), Z(Jn, x), Z(Wo, T), Z(zo, k), Z($o, P), Z(Bo, L), Z(Jo, ce), Z(Xo, j), Z(Yo, ie), Z(qo, ee), Z(Zn, K), Z(Go, te), O(ge))
    if (ge.length) {
      const $ = e.exposed || (e.exposed = {});
      ge.forEach((V) => {
        Object.defineProperty($, V, {
          get: () => n[V],
          set: (Ae) => n[V] = Ae
        });
      });
    } else
      e.exposed || (e.exposed = {});
  oe && e.render === ve && (e.render = oe), Te != null && (e.inheritAttrs = Te), me && (e.components = me), ke && (e.directives = ke);
}
function ei(e, t, n = ve) {
  O(e) && (e = An(e));
  for (const r in e) {
    const s = e[r];
    let o;
    z(s) ? "default" in s ? o = Ce(
      s.from || r,
      s.default,
      !0
    ) : o = Ce(s.from || r) : o = Ce(s), de(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function yr(e, t, n) {
  Ee(
    O(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ws(e, t, n, r) {
  const s = r.includes(".") ? _s(n, r) : () => n[r];
  if (J(e)) {
    const o = t[e];
    I(o) && _t(s, o);
  } else if (I(e))
    _t(s, e.bind(n));
  else if (z(e))
    if (O(e))
      e.forEach((o) => ws(o, t, n, r));
    else {
      const o = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(o) && _t(s, o, e);
    }
}
function Qn(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let c;
  return a ? c = a : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (d) => zt(c, d, i, !0)
  ), zt(c, t, i)), z(t) && o.set(t, c), c;
}
function zt(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && zt(e, o, n, !0), s && s.forEach(
    (i) => zt(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = ti[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const ti = {
  data: Cr,
  props: Sr,
  emits: Sr,
  // objects
  methods: St,
  computed: St,
  // lifecycle
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  // assets
  components: St,
  directives: St,
  // watch
  watch: ri,
  // provide / inject
  provide: Cr,
  inject: ni
};
function Cr(e, t) {
  return t ? e ? function() {
    return X(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ni(e, t) {
  return St(An(e), An(t));
}
function An(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function St(e, t) {
  return e ? X(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Sr(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : X(
    /* @__PURE__ */ Object.create(null),
    xr(e),
    xr(t ?? {})
  ) : t;
}
function ri(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = X(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = le(e[r], t[r]);
  return n;
}
function xs() {
  return {
    app: null,
    config: {
      isNativeTag: Ns,
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
let si = 0;
function oi(e, t) {
  return function(r, s = null) {
    I(r) || (r = X({}, r)), s != null && !z(s) && (s = null);
    const o = xs(), i = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const c = o.app = {
      _uid: si++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Mi,
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
          const x = se(r, s);
          return x.appContext = o, w === !0 ? w = "svg" : w === !1 && (w = void 0), g && t ? t(x, d) : e(x, d, w), a = !0, c._container = d, d.__vue_app__ = c, rr(x.component) || x.component.proxy;
        }
      },
      unmount() {
        a && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, g) {
        return o.provides[d] = g, c;
      },
      runWithContext(d) {
        qt = c;
        try {
          return d();
        } finally {
          qt = null;
        }
      }
    };
    return c;
  };
}
let qt = null;
function je(e, t) {
  if (re) {
    let n = re.provides;
    const r = re.parent && re.parent.provides;
    r === n && (n = re.provides = Object.create(r)), n[e] = t;
  }
}
function Ce(e, t, n = !1) {
  const r = re || ye;
  if (r || qt) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : qt._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(r && r.proxy) : t;
  }
}
function ii(e, t, n, r = !1) {
  const s = {}, o = {};
  Ut(o, cn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ys(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  n ? e.props = r ? s : vo(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function li(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, a = F(s), [c] = e.propsOptions;
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
        if (rn(e.emitsOptions, x))
          continue;
        const T = t[x];
        if (c)
          if (R(o, x))
            T !== o[x] && (o[x] = T, d = !0);
          else {
            const k = pe(x);
            s[k] = On(
              c,
              a,
              k,
              T,
              e,
              !1
            );
          }
        else
          T !== o[x] && (o[x] = T, d = !0);
      }
    }
  } else {
    ys(e, t, s, o) && (d = !0);
    let g;
    for (const w in a)
      (!t || // for camelCase
      !R(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = xe(w)) === w || !R(t, g))) && (c ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[g] !== void 0) && (s[w] = On(
        c,
        a,
        w,
        void 0,
        e,
        !0
      )) : delete s[w]);
    if (o !== a)
      for (const w in o)
        (!t || !R(t, w)) && (delete o[w], d = !0);
  }
  d && De(e, "set", "$attrs");
}
function ys(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (Ht(c))
        continue;
      const d = t[c];
      let g;
      s && R(s, g = pe(c)) ? !o || !o.includes(g) ? n[g] = d : (a || (a = {}))[g] = d : rn(e.emitsOptions, c) || (!(c in r) || d !== r[c]) && (r[c] = d, i = !0);
    }
  if (o) {
    const c = F(n), d = a || U;
    for (let g = 0; g < o.length; g++) {
      const w = o[g];
      n[w] = On(
        s,
        c,
        w,
        d[w],
        e,
        !R(d, w)
      );
    }
  }
  return i;
}
function On(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = R(i, "default");
    if (a && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && I(c)) {
        const { propsDefaults: d } = s;
        n in d ? r = d[n] : (bt(s), r = d[n] = c.call(
          null,
          t
        ), st());
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
function Cs(e, t, n = !1) {
  const r = t.propsCache, s = r.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, a = [];
  let c = !1;
  if (!I(e)) {
    const g = (w) => {
      c = !0;
      const [x, T] = Cs(w, t, !0);
      X(i, x), T && a.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!o && !c)
    return z(e) && r.set(e, pt), pt;
  if (O(o))
    for (let g = 0; g < o.length; g++) {
      const w = pe(o[g]);
      Er(w) && (i[w] = U);
    }
  else if (o)
    for (const g in o) {
      const w = pe(g);
      if (Er(w)) {
        const x = o[g], T = i[w] = O(x) || I(x) ? { type: x } : X({}, x);
        if (T) {
          const k = Or(Boolean, T.type), P = Or(String, T.type);
          T[
            0
            /* shouldCast */
          ] = k > -1, T[
            1
            /* shouldCastTrue */
          ] = P < 0 || k < P, (k > -1 || R(T, "default")) && a.push(w);
        }
      }
    }
  const d = [i, a];
  return z(e) && r.set(e, d), d;
}
function Er(e) {
  return e[0] !== "$";
}
function Tr(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ar(e, t) {
  return Tr(e) === Tr(t);
}
function Or(e, t) {
  return O(t) ? t.findIndex((n) => Ar(n, e)) : I(t) && Ar(t, e) ? 0 : -1;
}
const Ss = (e) => e[0] === "_" || e === "$stable", er = (e) => O(e) ? e.map(Re) : [Re(e)], ci = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ct((...s) => er(t(...s)), n);
  return r._c = !1, r;
}, Es = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Ss(s))
      continue;
    const o = e[s];
    if (I(o))
      t[s] = ci(s, o, r);
    else if (o != null) {
      const i = er(o);
      t[s] = () => i;
    }
  }
}, Ts = (e, t) => {
  const n = er(t);
  e.slots.default = () => n;
}, ai = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = F(t), Ut(t, "_", n)) : Es(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Ts(e, t);
  Ut(e.slots, cn, 1);
}, ui = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = !0, i = U;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : (X(s, t), !n && a === 1 && delete s._) : (o = !t.$stable, Es(t, s)), i = t;
  } else
    t && (Ts(e, t), i = { default: 1 });
  if (o)
    for (const a in s)
      !Ss(a) && i[a] == null && delete s[a];
};
function Pn(e, t, n, r, s = !1) {
  if (O(e)) {
    e.forEach(
      (x, T) => Pn(
        x,
        t && (O(t) ? t[T] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if ($t(r) && !s)
    return;
  const o = r.shapeFlag & 4 ? rr(r.component) || r.component.proxy : r.el, i = s ? null : o, { i: a, r: c } = e, d = t && t.r, g = a.refs === U ? a.refs = {} : a.refs, w = a.setupState;
  if (d != null && d !== c && (J(d) ? (g[d] = null, R(w, d) && (w[d] = null)) : de(d) && (d.value = null)), I(c))
    ze(c, a, 12, [i, g]);
  else {
    const x = J(c), T = de(c);
    if (x || T) {
      const k = () => {
        if (e.f) {
          const P = x ? R(w, c) ? w[c] : g[c] : c.value;
          s ? O(P) && Vn(P, o) : O(P) ? P.includes(o) || P.push(o) : x ? (g[c] = [o], R(w, c) && (w[c] = g[c])) : (c.value = [o], e.k && (g[e.k] = c.value));
        } else
          x ? (g[c] = i, R(w, c) && (w[c] = i)) : T && (c.value = i, e.k && (g[e.k] = i));
      };
      i ? (k.id = -1, ae(k, n)) : k();
    }
  }
}
const ae = Lo;
function fi(e) {
  return di(e);
}
function di(e, t) {
  const n = Kr();
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
    setScopeId: T = ve,
    insertStaticContent: k
  } = e, P = (l, u, f, p = null, h = null, _ = null, y = void 0, v = null, b = !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !yt(l, u) && (p = Je(l), G(l, h, _, !0), l = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: m, ref: C, shapeFlag: E } = u;
    switch (m) {
      case ln:
        L(l, u, f, p);
        break;
      case ot:
        D(l, u, f, p);
        break;
      case mn:
        l == null && ee(u, f, p, y);
        break;
      case ue:
        me(
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
        E & 1 ? oe(
          l,
          u,
          f,
          p,
          h,
          _,
          y,
          v,
          b
        ) : E & 6 ? ke(
          l,
          u,
          f,
          p,
          h,
          _,
          y,
          v,
          b
        ) : (E & 64 || E & 128) && m.process(
          l,
          u,
          f,
          p,
          h,
          _,
          y,
          v,
          b,
          Fe
        );
    }
    C != null && h && Pn(C, l && l.ref, _, u || l, !u);
  }, L = (l, u, f, p) => {
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
  }, D = (l, u, f, p) => {
    l == null ? r(
      u.el = c(u.children || ""),
      f,
      p
    ) : u.el = l.el;
  }, ee = (l, u, f, p) => {
    [l.el, l.anchor] = k(
      l.children,
      u,
      f,
      p,
      l.el,
      l.anchor
    );
  }, N = ({ el: l, anchor: u }, f, p) => {
    let h;
    for (; l && l !== u; )
      h = x(l), r(l, f, p), l = h;
    r(u, f, p);
  }, K = ({ el: l, anchor: u }) => {
    let f;
    for (; l && l !== u; )
      f = x(l), s(l), l = f;
    s(u);
  }, oe = (l, u, f, p, h, _, y, v, b) => {
    u.type === "svg" ? y = "svg" : u.type === "math" && (y = "mathml"), l == null ? j(
      u,
      f,
      p,
      h,
      _,
      y,
      v,
      b
    ) : te(
      l,
      u,
      h,
      _,
      y,
      v,
      b
    );
  }, j = (l, u, f, p, h, _, y, v) => {
    let b, m;
    const { props: C, shapeFlag: E, transition: S, dirs: A } = l;
    if (b = l.el = i(
      l.type,
      _,
      C && C.is,
      C
    ), E & 8 ? g(b, l.children) : E & 16 && ce(
      l.children,
      b,
      null,
      p,
      h,
      gn(l, _),
      y,
      v
    ), A && Qe(l, null, p, "created"), ie(b, l, l.scopeId, y, p), C) {
      for (const H in C)
        H !== "value" && !Ht(H) && o(
          b,
          H,
          null,
          C[H],
          _,
          l.children,
          p,
          h,
          _e
        );
      "value" in C && o(b, "value", null, C.value, _), (m = C.onVnodeBeforeMount) && Me(m, p, l);
    }
    A && Qe(l, null, p, "beforeMount");
    const M = hi(h, S);
    M && S.beforeEnter(b), r(b, u, f), ((m = C && C.onVnodeMounted) || M || A) && ae(() => {
      m && Me(m, p, l), M && S.enter(b), A && Qe(l, null, p, "mounted");
    }, h);
  }, ie = (l, u, f, p, h) => {
    if (f && T(l, f), p)
      for (let _ = 0; _ < p.length; _++)
        T(l, p[_]);
    if (h) {
      let _ = h.subTree;
      if (u === _) {
        const y = h.vnode;
        ie(
          l,
          y,
          y.scopeId,
          y.slotScopeIds,
          h.parent
        );
      }
    }
  }, ce = (l, u, f, p, h, _, y, v, b = 0) => {
    for (let m = b; m < l.length; m++) {
      const C = l[m] = v ? Be(l[m]) : Re(l[m]);
      P(
        null,
        C,
        u,
        f,
        p,
        h,
        _,
        y,
        v
      );
    }
  }, te = (l, u, f, p, h, _, y) => {
    const v = u.el = l.el;
    let { patchFlag: b, dynamicChildren: m, dirs: C } = u;
    b |= l.patchFlag & 16;
    const E = l.props || U, S = u.props || U;
    let A;
    if (f && et(f, !1), (A = S.onVnodeBeforeUpdate) && Me(A, f, u, l), C && Qe(u, l, f, "beforeUpdate"), f && et(f, !0), m ? ge(
      l.dynamicChildren,
      m,
      v,
      f,
      p,
      gn(u, h),
      _
    ) : y || V(
      l,
      u,
      v,
      null,
      f,
      p,
      gn(u, h),
      _,
      !1
    ), b > 0) {
      if (b & 16)
        Te(
          v,
          u,
          E,
          S,
          f,
          p,
          h
        );
      else if (b & 2 && E.class !== S.class && o(v, "class", null, S.class, h), b & 4 && o(v, "style", E.style, S.style, h), b & 8) {
        const M = u.dynamicProps;
        for (let H = 0; H < M.length; H++) {
          const B = M[H], Y = E[B], be = S[B];
          (be !== Y || B === "value") && o(
            v,
            B,
            Y,
            be,
            h,
            l.children,
            f,
            p,
            _e
          );
        }
      }
      b & 1 && l.children !== u.children && g(v, u.children);
    } else
      !y && m == null && Te(
        v,
        u,
        E,
        S,
        f,
        p,
        h
      );
    ((A = S.onVnodeUpdated) || C) && ae(() => {
      A && Me(A, f, u, l), C && Qe(u, l, f, "updated");
    }, p);
  }, ge = (l, u, f, p, h, _, y) => {
    for (let v = 0; v < u.length; v++) {
      const b = l[v], m = u[v], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !yt(b, m) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 70) ? w(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          f
        )
      );
      P(
        b,
        m,
        C,
        null,
        p,
        h,
        _,
        y,
        !0
      );
    }
  }, Te = (l, u, f, p, h, _, y) => {
    if (f !== p) {
      if (f !== U)
        for (const v in f)
          !Ht(v) && !(v in p) && o(
            l,
            v,
            f[v],
            null,
            y,
            u.children,
            h,
            _,
            _e
          );
      for (const v in p) {
        if (Ht(v))
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
          _e
        );
      }
      "value" in p && o(l, "value", f.value, p.value, y);
    }
  }, me = (l, u, f, p, h, _, y, v, b) => {
    const m = u.el = l ? l.el : a(""), C = u.anchor = l ? l.anchor : a("");
    let { patchFlag: E, dynamicChildren: S, slotScopeIds: A } = u;
    A && (v = v ? v.concat(A) : A), l == null ? (r(m, f, p), r(C, f, p), ce(
      u.children,
      f,
      C,
      h,
      _,
      y,
      v,
      b
    )) : E > 0 && E & 64 && S && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (ge(
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
    (u.key != null || h && u === h.subTree) && As(
      l,
      u,
      !0
      /* shallow */
    )) : V(
      l,
      u,
      f,
      C,
      h,
      _,
      y,
      v,
      b
    );
  }, ke = (l, u, f, p, h, _, y, v, b) => {
    u.slotScopeIds = v, l == null ? u.shapeFlag & 512 ? h.ctx.activate(
      u,
      f,
      p,
      y,
      b
    ) : Ye(
      u,
      f,
      p,
      h,
      _,
      y,
      b
    ) : jt(l, u, b);
  }, Ye = (l, u, f, p, h, _, y) => {
    const v = l.component = Si(
      l,
      p,
      h
    );
    if (vs(l) && (v.ctx.renderer = Fe), Ei(v), v.asyncDep) {
      if (h && h.registerDep(v, Z), !l.el) {
        const b = v.subTree = se(ot);
        D(null, b, u, f);
      }
    } else
      Z(
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
    if (jo(l, u, f))
      if (p.asyncDep && !p.asyncResolved) {
        $(p, u, f);
        return;
      } else
        p.next = u, To(p.update), p.effect.dirty = !0, p.update();
    else
      u.el = l.el, p.vnode = u;
  }, Z = (l, u, f, p, h, _, y) => {
    const v = () => {
      if (l.isMounted) {
        let { next: C, bu: E, u: S, parent: A, vnode: M } = l;
        {
          const ut = Os(l);
          if (ut) {
            C && (C.el = M.el, $(l, C, y)), ut.asyncDep.then(() => {
              l.isUnmounted || v();
            });
            return;
          }
        }
        let H = C, B;
        et(l, !1), C ? (C.el = M.el, $(l, C, y)) : C = M, E && fn(E), (B = C.props && C.props.onVnodeBeforeUpdate) && Me(B, A, C, M), et(l, !0);
        const Y = dn(l), be = l.subTree;
        l.subTree = Y, P(
          be,
          Y,
          // parent may have changed if it's in a teleport
          w(be.el),
          // anchor may have changed if it's in a fragment
          Je(be),
          l,
          h,
          _
        ), C.el = Y.el, H === null && Ro(l, Y.el), S && ae(S, h), (B = C.props && C.props.onVnodeUpdated) && ae(
          () => Me(B, A, C, M),
          h
        );
      } else {
        let C;
        const { el: E, props: S } = u, { bm: A, m: M, parent: H } = l, B = $t(u);
        if (et(l, !1), A && fn(A), !B && (C = S && S.onVnodeBeforeMount) && Me(C, H, u), et(l, !0), E && Ze) {
          const Y = () => {
            l.subTree = dn(l), Ze(
              E,
              l.subTree,
              l,
              h,
              null
            );
          };
          B ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && Y()
          ) : Y();
        } else {
          const Y = l.subTree = dn(l);
          P(
            null,
            Y,
            f,
            p,
            l,
            h,
            _
          ), u.el = Y.el;
        }
        if (M && ae(M, h), !B && (C = S && S.onVnodeMounted)) {
          const Y = u;
          ae(
            () => Me(C, H, Y),
            h
          );
        }
        (u.shapeFlag & 256 || H && $t(H.vnode) && H.vnode.shapeFlag & 256) && l.a && ae(l.a, h), l.isMounted = !0, u = f = p = null;
      }
    }, b = l.effect = new $n(
      v,
      ve,
      () => Xn(m),
      l.scope
      // track it in component's effect scope
    ), m = l.update = () => {
      b.dirty && b.run();
    };
    m.id = l.uid, et(l, !0), m();
  }, $ = (l, u, f) => {
    u.component = l;
    const p = l.vnode.props;
    l.vnode = u, l.next = null, li(l, u.props, p, f), ui(l, u.children, f), it(), _r(l), lt();
  }, V = (l, u, f, p, h, _, y, v, b = !1) => {
    const m = l && l.children, C = l ? l.shapeFlag : 0, E = u.children, { patchFlag: S, shapeFlag: A } = u;
    if (S > 0) {
      if (S & 128) {
        Xe(
          m,
          E,
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
        Ae(
          m,
          E,
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
    A & 8 ? (C & 16 && _e(m, h, _), E !== m && g(f, E)) : C & 16 ? A & 16 ? Xe(
      m,
      E,
      f,
      p,
      h,
      _,
      y,
      v,
      b
    ) : _e(m, h, _, !0) : (C & 8 && g(f, ""), A & 16 && ce(
      E,
      f,
      p,
      h,
      _,
      y,
      v,
      b
    ));
  }, Ae = (l, u, f, p, h, _, y, v, b) => {
    l = l || pt, u = u || pt;
    const m = l.length, C = u.length, E = Math.min(m, C);
    let S;
    for (S = 0; S < E; S++) {
      const A = u[S] = b ? Be(u[S]) : Re(u[S]);
      P(
        l[S],
        A,
        f,
        null,
        h,
        _,
        y,
        v,
        b
      );
    }
    m > C ? _e(
      l,
      h,
      _,
      !0,
      !1,
      E
    ) : ce(
      u,
      f,
      p,
      h,
      _,
      y,
      v,
      b,
      E
    );
  }, Xe = (l, u, f, p, h, _, y, v, b) => {
    let m = 0;
    const C = u.length;
    let E = l.length - 1, S = C - 1;
    for (; m <= E && m <= S; ) {
      const A = l[m], M = u[m] = b ? Be(u[m]) : Re(u[m]);
      if (yt(A, M))
        P(
          A,
          M,
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
    for (; m <= E && m <= S; ) {
      const A = l[E], M = u[S] = b ? Be(u[S]) : Re(u[S]);
      if (yt(A, M))
        P(
          A,
          M,
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
      E--, S--;
    }
    if (m > E) {
      if (m <= S) {
        const A = S + 1, M = A < C ? u[A].el : p;
        for (; m <= S; )
          P(
            null,
            u[m] = b ? Be(u[m]) : Re(u[m]),
            f,
            M,
            h,
            _,
            y,
            v,
            b
          ), m++;
      }
    } else if (m > S)
      for (; m <= E; )
        G(l[m], h, _, !0), m++;
    else {
      const A = m, M = m, H = /* @__PURE__ */ new Map();
      for (m = M; m <= S; m++) {
        const he = u[m] = b ? Be(u[m]) : Re(u[m]);
        he.key != null && H.set(he.key, m);
      }
      let B, Y = 0;
      const be = S - M + 1;
      let ut = !1, or = 0;
      const xt = new Array(be);
      for (m = 0; m < be; m++)
        xt[m] = 0;
      for (m = A; m <= E; m++) {
        const he = l[m];
        if (Y >= be) {
          G(he, h, _, !0);
          continue;
        }
        let Ie;
        if (he.key != null)
          Ie = H.get(he.key);
        else
          for (B = M; B <= S; B++)
            if (xt[B - M] === 0 && yt(he, u[B])) {
              Ie = B;
              break;
            }
        Ie === void 0 ? G(he, h, _, !0) : (xt[Ie - M] = m + 1, Ie >= or ? or = Ie : ut = !0, P(
          he,
          u[Ie],
          f,
          null,
          h,
          _,
          y,
          v,
          b
        ), Y++);
      }
      const ir = ut ? pi(xt) : pt;
      for (B = ir.length - 1, m = be - 1; m >= 0; m--) {
        const he = M + m, Ie = u[he], lr = he + 1 < C ? u[he + 1].el : p;
        xt[m] === 0 ? P(
          null,
          Ie,
          f,
          lr,
          h,
          _,
          y,
          v,
          b
        ) : ut && (B < 0 || m !== ir[B] ? Oe(Ie, f, lr, 2) : B--);
      }
    }
  }, Oe = (l, u, f, p, h = null) => {
    const { el: _, type: y, transition: v, children: b, shapeFlag: m } = l;
    if (m & 6) {
      Oe(l.component.subTree, u, f, p);
      return;
    }
    if (m & 128) {
      l.suspense.move(u, f, p);
      return;
    }
    if (m & 64) {
      y.move(l, u, f, Fe);
      return;
    }
    if (y === ue) {
      r(_, u, f);
      for (let E = 0; E < b.length; E++)
        Oe(b[E], u, f, p);
      r(l.anchor, u, f);
      return;
    }
    if (y === mn) {
      N(l, u, f);
      return;
    }
    if (p !== 2 && m & 1 && v)
      if (p === 0)
        v.beforeEnter(_), r(_, u, f), ae(() => v.enter(_), h);
      else {
        const { leave: E, delayLeave: S, afterLeave: A } = v, M = () => r(_, u, f), H = () => {
          E(_, () => {
            M(), A && A();
          });
        };
        S ? S(_, M, H) : H();
      }
    else
      r(_, u, f);
  }, G = (l, u, f, p = !1, h = !1) => {
    const {
      type: _,
      props: y,
      ref: v,
      children: b,
      dynamicChildren: m,
      shapeFlag: C,
      patchFlag: E,
      dirs: S
    } = l;
    if (v != null && Pn(v, null, f, l, !0), C & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const A = C & 1 && S, M = !$t(l);
    let H;
    if (M && (H = y && y.onVnodeBeforeUnmount) && Me(H, u, l), C & 6)
      wt(l.component, f, p);
    else {
      if (C & 128) {
        l.suspense.unmount(f, p);
        return;
      }
      A && Qe(l, null, u, "beforeUnmount"), C & 64 ? l.type.remove(
        l,
        u,
        f,
        h,
        Fe,
        p
      ) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== ue || E > 0 && E & 64) ? _e(
        m,
        u,
        f,
        !1,
        !0
      ) : (_ === ue && E & 384 || !h && C & 16) && _e(b, u, f), p && Pe(l);
    }
    (M && (H = y && y.onVnodeUnmounted) || A) && ae(() => {
      H && Me(H, u, l), A && Qe(l, null, u, "unmounted");
    }, f);
  }, Pe = (l) => {
    const { type: u, el: f, anchor: p, transition: h } = l;
    if (u === ue) {
      ct(f, p);
      return;
    }
    if (u === mn) {
      K(l);
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
    p && fn(p), h.stop(), _ && (_.active = !1, G(y, l, u, f)), v && ae(v, u), ae(() => {
      l.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve());
  }, _e = (l, u, f, p = !1, h = !1, _ = 0) => {
    for (let y = _; y < l.length; y++)
      G(l[y], u, f, p, h);
  }, Je = (l) => l.shapeFlag & 6 ? Je(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : x(l.anchor || l.el), Rt = (l, u, f) => {
    l == null ? u._vnode && G(u._vnode, null, null, !0) : P(
      u._vnode || null,
      l,
      u,
      null,
      null,
      null,
      f
    ), _r(), fs(), u._vnode = l;
  }, Fe = {
    p: P,
    um: G,
    m: Oe,
    r: Pe,
    mt: Ye,
    mc: ce,
    pc: V,
    pbc: ge,
    n: Je,
    o: e
  };
  let at, Ze;
  return t && ([at, Ze] = t(
    Fe
  )), {
    render: Rt,
    hydrate: at,
    createApp: oi(Rt, at)
  };
}
function gn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function et({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function hi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function As(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (O(r) && O(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = Be(s[o]), a.el = i.el), n || As(i, a)), a.type === ln && (a.el = i.el);
    }
}
function pi(e) {
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
function Os(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Os(t);
}
const gi = (e) => e.__isTeleport, ue = Symbol.for("v-fgt"), ln = Symbol.for("v-txt"), ot = Symbol.for("v-cmt"), mn = Symbol.for("v-stc"), At = [];
let Se = null;
function Le(e = !1) {
  At.push(Se = e ? null : []);
}
function mi() {
  At.pop(), Se = At[At.length - 1] || null;
}
let Mt = 1;
function Pr(e) {
  Mt += e;
}
function Ps(e) {
  return e.dynamicChildren = Mt > 0 ? Se || pt : null, mi(), Mt > 0 && Se && Se.push(e), e;
}
function ft(e, t, n, r, s, o) {
  return Ps(
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
function In(e, t, n, r, s) {
  return Ps(
    se(
      e,
      t,
      n,
      r,
      s,
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
const cn = "__vInternal", Is = ({ key: e }) => e ?? null, Bt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || de(e) || I(e) ? { i: ye, r: e, k: t, f: !!n } : e : null);
function W(e, t = null, n = null, r = 0, s = null, o = e === ue ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Is(t),
    ref: t && Bt(t),
    scopeId: ps,
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
  return a ? (tr(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= J(n) ? 8 : 16), Mt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Se && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Se.push(c), c;
}
const se = _i;
function _i(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === No) && (e = ot), Mn(e)) {
    const a = Ge(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && tr(a, n), Mt > 0 && !o && Se && (a.shapeFlag & 6 ? Se[Se.indexOf(e)] = a : Se.push(a)), a.patchFlag |= -2, a;
  }
  if (Ii(e) && (e = e.__vccOpts), t) {
    t = vi(t);
    let { class: a, style: c } = t;
    a && !J(a) && (t.class = en(a)), z(c) && (ss(c) && !O(c) && (c = X({}, c)), t.style = Hn(c));
  }
  const i = J(e) ? 1 : Fo(e) ? 128 : gi(e) ? 64 : z(e) ? 4 : I(e) ? 2 : 0;
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
function vi(e) {
  return e ? ss(e) || cn in e ? X({}, e) : e : null;
}
function Ge(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e, a = t ? xi(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Is(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? O(s) ? s.concat(Bt(t)) : [s, Bt(t)] : Bt(t)
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
    patchFlag: t && e.type !== ue ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Ge(e.ssContent),
    ssFallback: e.ssFallback && Ge(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function bi(e = " ", t = 0) {
  return se(ln, null, e, t);
}
function wi(e = "", t = !1) {
  return t ? (Le(), In(ot, null, e)) : se(ot, null, e);
}
function Re(e) {
  return e == null || typeof e == "boolean" ? se(ot) : O(e) ? se(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Be(e) : se(ln, null, String(e));
}
function Be(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ge(e);
}
function tr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), tr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(cn in t) ? t._ctx = ye : s === 3 && ye && (ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    I(t) ? (t = { default: t, _ctx: ye }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [bi(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function xi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = en([t.class, r.class]));
      else if (s === "style")
        t.style = Hn([t.style, r.style]);
      else if (Yt(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(O(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else
        s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Me(e, t, n, r = null) {
  Ee(e, t, 7, [
    n,
    r
  ]);
}
const yi = xs();
let Ci = 0;
function Si(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || yi, o = {
    uid: Ci++,
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
    scope: new Ys(
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
    propsOptions: Cs(r, s),
    emitsOptions: hs(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Po.bind(null, o), e.ce && e.ce(o), o;
}
let re = null, nr, jn;
{
  const e = Kr(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  nr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => re = n
  ), jn = t(
    "__VUE_SSR_SETTERS__",
    (n) => an = n
  );
}
const bt = (e) => {
  nr(e), e.scope.on();
}, st = () => {
  re && re.scope.off(), nr(null);
};
function Ms(e) {
  return e.vnode.shapeFlag & 4;
}
let an = !1;
function Ei(e, t = !1) {
  t && jn(t);
  const { props: n, children: r } = e.vnode, s = Ms(e);
  ii(e, n, s, t), ai(e, r);
  const o = s ? Ti(e, t) : void 0;
  return t && jn(!1), o;
}
function Ti(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = os(new Proxy(e.ctx, Zo));
  const { setup: r } = n;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Oi(e) : null;
    bt(e), it();
    const o = ze(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    );
    if (lt(), st(), Ur(o)) {
      if (o.then(st, st), t)
        return o.then((i) => {
          Ir(e, i, t);
        }).catch((i) => {
          nn(i, e, 0);
        });
      e.asyncDep = o;
    } else
      Ir(e, o, t);
  } else
    js(e, t);
}
function Ir(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : z(t) && (e.setupState = cs(t)), js(e, n);
}
let Mr;
function js(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Mr && !r.render) {
      const s = r.template || Qn(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: c } = r, d = X(
          X(
            {
              isCustomElement: o,
              delimiters: a
            },
            i
          ),
          c
        );
        r.render = Mr(s, d);
      }
    }
    e.render = r.render || ve;
  }
  {
    bt(e), it();
    try {
      Qo(e);
    } finally {
      lt(), st();
    }
  }
}
function Ai(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return fe(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Oi(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Ai(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function rr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(cs(os(e.exposed)), {
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
function Pi(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ii(e) {
  return I(e) && "__vccOpts" in e;
}
const Gt = (e, t) => bo(e, t, an);
function ht(e, t, n) {
  const r = arguments.length;
  return r === 2 ? z(t) && !O(t) ? Mn(t) ? se(e, null, [t]) : se(e, t) : se(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Mn(n) && (n = [n]), se(e, t, n));
}
const Mi = "3.4.5", ji = "http://www.w3.org/2000/svg", Ri = "http://www.w3.org/1998/Math/MathML", Ue = typeof document < "u" ? document : null, jr = Ue && /* @__PURE__ */ Ue.createElement("template"), Ni = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Ue.createElementNS(ji, e) : t === "mathml" ? Ue.createElementNS(Ri, e) : Ue.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Ue.createTextNode(e),
  createComment: (e) => Ue.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ue.querySelector(e),
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
}, ki = Symbol("_vtc");
function Fi(e, t, n) {
  const r = e[ki];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Li = Symbol("_vod"), Vi = Symbol("");
function Di(e, t, n) {
  const r = e.style, s = J(n);
  if (n && !s) {
    if (t && !J(t))
      for (const o in t)
        n[o] == null && Rn(r, o, "");
    for (const o in n)
      Rn(r, o, n[o]);
  } else {
    const o = r.display;
    if (s) {
      if (t !== n) {
        const i = r[Vi];
        i && (n += ";" + i), r.cssText = n;
      }
    } else
      t && e.removeAttribute("style");
    Li in e && (r.display = o);
  }
}
const Rr = /\s*!important$/;
function Rn(e, t, n) {
  if (O(n))
    n.forEach((r) => Rn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Hi(e, t);
    Rr.test(n) ? e.setProperty(
      xe(r),
      n.replace(Rr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Nr = ["Webkit", "Moz", "ms"], _n = {};
function Hi(e, t) {
  const n = _n[t];
  if (n)
    return n;
  let r = pe(t);
  if (r !== "filter" && r in e)
    return _n[t] = r;
  r = Qt(r);
  for (let s = 0; s < Nr.length; s++) {
    const o = Nr[s] + r;
    if (o in e)
      return _n[t] = o;
  }
  return t;
}
const kr = "http://www.w3.org/1999/xlink";
function $i(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(kr, t.slice(6, t.length)) : e.setAttributeNS(kr, t, n);
  else {
    const o = Gs(t);
    n == null || o && !Wr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Bi(e, t, n, r, s, o, i) {
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
    d === "boolean" ? n = Wr(n) : n == null && d === "string" ? (n = "", c = !0) : d === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(t);
}
function Ui(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Ki(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Fr = Symbol("_vei");
function Wi(e, t, n, r, s = null) {
  const o = e[Fr] || (e[Fr] = {}), i = o[t];
  if (r && i)
    i.value = r;
  else {
    const [a, c] = zi(t);
    if (r) {
      const d = o[t] = Yi(r, s);
      Ui(e, a, d, c);
    } else
      i && (Ki(e, a, i, c), o[t] = void 0);
  }
}
const Lr = /(?:Once|Passive|Capture)$/;
function zi(e) {
  let t;
  if (Lr.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Lr); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xe(e.slice(2)), t];
}
let vn = 0;
const qi = /* @__PURE__ */ Promise.resolve(), Gi = () => vn || (qi.then(() => vn = 0), vn = Date.now());
function Yi(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ee(
      Xi(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Gi(), n;
}
function Xi(e, t) {
  if (O(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (s) => !s._stopped && r && r(s));
  } else
    return t;
}
const Vr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ji = (e, t, n, r, s, o, i, a, c) => {
  const d = s === "svg";
  t === "class" ? Fi(e, r, d) : t === "style" ? Di(e, n, r) : Yt(t) ? Ln(t) || Wi(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Zi(e, t, r, d)) ? Bi(
    e,
    t,
    r,
    o,
    i,
    a,
    c
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), $i(e, t, r, d));
};
function Zi(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vr(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Vr(t) && J(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qi(e, t) {
  const n = /* @__PURE__ */ sn(e);
  class r extends sr {
    constructor(o) {
      super(n, o, t);
    }
  }
  return r.def = n, r;
}
const el = typeof HTMLElement < "u" ? HTMLElement : class {
};
class sr extends el {
  constructor(t, n = {}, r) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Yn(() => {
      this._connected || (Hr(null, this.shadowRoot), this._instance = null);
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
      if (o && !O(o))
        for (const c in o) {
          const d = o[c];
          (d === Number || d && d.type === Number) && (c in this._props && (this._props[c] = cr(this._props[c])), (a || (a = /* @__PURE__ */ Object.create(null)))[pe(c)] = !0);
        }
      this._numberProps = a, s && this._resolveProps(r), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((r) => t(r, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, r = O(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && r.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of r.map(pe))
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
    const r = pe(t);
    this._numberProps && this._numberProps[r] && (n = cr(n)), this._setProp(r, n, !1);
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
    Hr(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = se(this._def, X({}, this._props));
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
        if (s instanceof sr) {
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
const tl = /* @__PURE__ */ X({ patchProp: Ji }, Ni);
let Dr;
function nl() {
  return Dr || (Dr = fi(tl));
}
const Hr = (...e) => {
  nl().render(...e);
};
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */
const Q = {
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
}, $r = {
  // count of items to showed per view
  itemsToShow: {
    default: Q.itemsToShow,
    type: Number
  },
  // count of items to be scrolled
  itemsToScroll: {
    default: Q.itemsToScroll,
    type: Number
  },
  // control infinite scrolling mode
  wrapAround: {
    default: Q.wrapAround,
    type: Boolean
  },
  // control max drag
  throttle: {
    default: Q.throttle,
    type: Number
  },
  // control snap position alignment
  snapAlign: {
    default: Q.snapAlign,
    validator(e) {
      return ["start", "end", "center", "center-even", "center-odd"].includes(e);
    }
  },
  // sliding transition time in ms
  transition: {
    default: Q.transition,
    type: Number
  },
  // an object to store breakpoints
  breakpoints: {
    default: Q.breakpoints,
    type: Object
  },
  // time to auto advance slides in ms
  autoplay: {
    default: Q.autoplay,
    type: Number
  },
  // pause autoplay when mouse hover over the carousel
  pauseAutoplayOnHover: {
    default: Q.pauseAutoplayOnHover,
    type: Boolean
  },
  // slide number number of initial slide
  modelValue: {
    default: void 0,
    type: Number
  },
  // toggle mouse dragging.
  mouseDrag: {
    default: Q.mouseDrag,
    type: Boolean
  },
  // toggle mouse dragging.
  touchDrag: {
    default: Q.touchDrag,
    type: Boolean
  },
  // control snap position alignment
  dir: {
    default: Q.dir,
    validator(e) {
      return ["rtl", "ltr"].includes(e);
    }
  },
  // aria-labels and additional text labels
  i18n: {
    default: Q.i18n,
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
function rl({ config: e, slidesCount: t }) {
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
function sl({ config: e, slidesCount: t }) {
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
function Nn({ val: e, max: t, min: n }) {
  return t < n ? e : Math.min(Math.max(e, n), t);
}
function ol({ config: e, currentSlide: t, slidesCount: n }) {
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
  return s ? i : Nn({
    val: i,
    max: n - o,
    min: 0
  });
}
function Rs(e) {
  return e ? e.reduce((t, n) => {
    var r;
    return n.type === ue ? [...t, ...Rs(n.children)] : ((r = n.type) === null || r === void 0 ? void 0 : r.name) === "CarouselSlide" ? [...t, n] : t;
  }, []) : [];
}
function kn({ val: e, max: t, min: n = 0 }) {
  return e > t ? kn({ val: e - (t + 1), max: t, min: n }) : e < n ? kn({ val: e + (t + 1), max: t, min: n }) : e;
}
function il(e, t) {
  let n;
  return t ? function(...r) {
    const s = this;
    n || (e.apply(s, r), n = !0, setTimeout(() => n = !1, t));
  } : e;
}
function ll(e, t) {
  let n;
  return function(...r) {
    n && clearTimeout(n), n = setTimeout(() => {
      e(...r), n = null;
    }, t);
  };
}
function cl(e = "", t = {}) {
  return Object.entries(t).reduce((n, [r, s]) => n.replace(`{${r}}`, String(s)), e);
}
var al = /* @__PURE__ */ sn({
  name: "ARIA",
  setup() {
    const e = Ce("config", We(Object.assign({}, Q))), t = Ce("currentSlide", q(0)), n = Ce("slidesCount", q(0));
    return () => ht("div", {
      class: ["carousel__liveregion", "carousel__sr-only"],
      "aria-live": "polite",
      "aria-atomic": "true"
    }, cl(e.i18n.itemXofY, {
      currentSlide: t.value + 1,
      slidesCount: n.value
    }));
  }
}), ul = /* @__PURE__ */ sn({
  name: "Carousel",
  props: $r,
  setup(e, { slots: t, emit: n, expose: r }) {
    var s;
    const o = q(null), i = q([]), a = q(0), c = q(0), d = We(Object.assign({}, Q));
    let g = Object.assign({}, Q), w;
    const x = q((s = e.modelValue) !== null && s !== void 0 ? s : 0), T = q(0), k = q(0), P = q(0), L = q(0);
    let D, ee;
    je("config", d), je("slidesCount", c), je("currentSlide", x), je("maxSlide", P), je("minSlide", L), je("slideWidth", a);
    function N() {
      w = Object.assign({}, e.breakpoints), g = Object.assign(Object.assign(Object.assign({}, g), e), { i18n: Object.assign(Object.assign({}, g.i18n), e.i18n), breakpoints: void 0 }), oe(g);
    }
    function K() {
      if (!w || !Object.keys(w).length)
        return;
      const f = Object.keys(w).map((h) => Number(h)).sort((h, _) => +_ - +h);
      let p = Object.assign({}, g);
      f.some((h) => {
        const _ = window.matchMedia(`(min-width: ${h}px)`).matches;
        return _ && (p = Object.assign(Object.assign({}, p), w[h])), _;
      }), oe(p);
    }
    function oe(f) {
      Object.entries(f).forEach(([p, h]) => d[p] = h);
    }
    const j = ll(() => {
      K(), ie();
    }, 16);
    function ie() {
      if (!o.value)
        return;
      const f = o.value.getBoundingClientRect();
      a.value = f.width / d.itemsToShow;
    }
    function ce() {
      c.value <= 0 || (k.value = Math.ceil((c.value - 1) / 2), P.value = rl({ config: d, slidesCount: c.value }), L.value = sl({ config: d, slidesCount: c.value }), d.wrapAround || (x.value = Nn({
        val: x.value,
        max: P.value,
        min: L.value
      })));
    }
    Jn(() => {
      Yn(() => ie()), setTimeout(() => ie(), 1e3), K(), Xe(), window.addEventListener("resize", j, { passive: !0 }), n("init");
    }), Zn(() => {
      ee && clearTimeout(ee), D && clearInterval(D), window.removeEventListener("resize", j, {
        passive: !0
      });
    });
    let te = !1;
    const ge = { x: 0, y: 0 }, Te = { x: 0, y: 0 }, me = We({ x: 0, y: 0 }), ke = q(!1), Ye = q(!1), jt = () => {
      ke.value = !0;
    }, Z = () => {
      ke.value = !1;
    };
    function $(f) {
      ["INPUT", "TEXTAREA", "SELECT"].includes(f.target.tagName) || (te = f.type === "touchstart", te || f.preventDefault(), !(!te && f.button !== 0 || G.value) && (ge.x = te ? f.touches[0].clientX : f.clientX, ge.y = te ? f.touches[0].clientY : f.clientY, document.addEventListener(te ? "touchmove" : "mousemove", V, !0), document.addEventListener(te ? "touchend" : "mouseup", Ae, !0)));
    }
    const V = il((f) => {
      Ye.value = !0, Te.x = te ? f.touches[0].clientX : f.clientX, Te.y = te ? f.touches[0].clientY : f.clientY;
      const p = Te.x - ge.x, h = Te.y - ge.y;
      me.y = h, me.x = p;
    }, d.throttle);
    function Ae() {
      const f = d.dir === "rtl" ? -1 : 1, p = Math.sign(me.x) * 0.4, h = Math.round(me.x / a.value + p) * f;
      if (h && !te) {
        const _ = (y) => {
          y.stopPropagation(), window.removeEventListener("click", _, !0);
        };
        window.addEventListener("click", _, !0);
      }
      Pe(x.value - h), me.x = 0, me.y = 0, Ye.value = !1, document.removeEventListener(te ? "touchmove" : "mousemove", V, !0), document.removeEventListener(te ? "touchend" : "mouseup", Ae, !0);
    }
    function Xe() {
      !d.autoplay || d.autoplay <= 0 || (D = setInterval(() => {
        d.pauseAutoplayOnHover && ke.value || ct();
      }, d.autoplay));
    }
    function Oe() {
      D && (clearInterval(D), D = null), Xe();
    }
    const G = q(!1);
    function Pe(f) {
      const p = d.wrapAround ? f : Nn({
        val: f,
        max: P.value,
        min: L.value
      });
      x.value === p || G.value || (n("slide-start", {
        slidingToIndex: f,
        currentSlideIndex: x.value,
        prevSlideIndex: T.value,
        slidesCount: c.value
      }), G.value = !0, T.value = x.value, x.value = p, ee = setTimeout(() => {
        if (d.wrapAround) {
          const h = kn({
            val: p,
            max: P.value,
            min: 0
          });
          h !== x.value && (x.value = h, n("loop", {
            currentSlideIndex: x.value,
            slidingToIndex: f
          }));
        }
        n("update:modelValue", x.value), n("slide-end", {
          currentSlideIndex: x.value,
          prevSlideIndex: T.value,
          slidesCount: c.value
        }), G.value = !1, Oe();
      }, d.transition));
    }
    function ct() {
      Pe(x.value + d.itemsToScroll);
    }
    function wt() {
      Pe(x.value - d.itemsToScroll);
    }
    const _e = { slideTo: Pe, next: ct, prev: wt };
    je("nav", _e), je("isSliding", G);
    const Je = Gt(() => ol({
      config: d,
      currentSlide: x.value,
      slidesCount: c.value
    }));
    je("slidesToScroll", Je);
    const Rt = Gt(() => {
      const f = d.dir === "rtl" ? -1 : 1, p = Je.value * a.value * f;
      return {
        transform: `translateX(${me.x - p}px)`,
        transition: `${G.value ? d.transition : 0}ms`,
        margin: d.wrapAround ? `0 -${c.value * a.value}px` : "",
        width: "100%"
      };
    });
    function Fe() {
      N(), K(), ce(), ie(), Oe();
    }
    Object.keys($r).forEach((f) => {
      ["modelValue"].includes(f) || _t(() => e[f], Fe);
    }), _t(() => e.modelValue, (f) => {
      f !== x.value && Pe(Number(f));
    }), _t(c, ce), n("before-init"), N();
    const at = {
      config: d,
      slidesCount: c,
      slideWidth: a,
      next: ct,
      prev: wt,
      slideTo: Pe,
      currentSlide: x,
      maxSlide: P,
      minSlide: L,
      middleSlide: k
    };
    r({
      updateBreakpointsConfigs: K,
      updateSlidesData: ce,
      updateSlideWidth: ie,
      initDefaultConfigs: N,
      restartCarousel: Fe,
      slideTo: Pe,
      next: ct,
      prev: wt,
      nav: _e,
      data: at
    });
    const Ze = t.default || t.slides, l = t.addons, u = We(at);
    return () => {
      const f = Rs(Ze == null ? void 0 : Ze(u)), p = (l == null ? void 0 : l(u)) || [];
      f.forEach((v, b) => v.props.index = b);
      let h = f;
      if (d.wrapAround) {
        const v = f.map((m, C) => Ge(m, {
          index: -f.length + C,
          isClone: !0,
          key: `clone-before-${C}`
        })), b = f.map((m, C) => Ge(m, {
          index: f.length + C,
          isClone: !0,
          key: `clone-after-${C}`
        }));
        h = [...v, ...f, ...b];
      }
      i.value = f, c.value = Math.max(f.length, 1);
      const _ = ht("ol", {
        class: "carousel__track",
        style: Rt.value,
        onMousedownCapture: d.mouseDrag ? $ : null,
        onTouchstartPassiveCapture: d.touchDrag ? $ : null
      }, h), y = ht("div", { class: "carousel__viewport" }, _);
      return ht("section", {
        ref: o,
        class: {
          carousel: !0,
          "is-sliding": G.value,
          "is-dragging": Ye.value,
          "is-hover": ke.value,
          "carousel--rtl": d.dir === "rtl"
        },
        dir: d.dir,
        "aria-label": d.i18n.ariaGallery,
        tabindex: "0",
        onMouseenter: jt,
        onMouseleave: Z
      }, [y, p, ht(al)]);
    };
  }
}), Br;
(function(e) {
  e.arrowUp = "arrowUp", e.arrowDown = "arrowDown", e.arrowRight = "arrowRight", e.arrowLeft = "arrowLeft";
})(Br || (Br = {}));
var fl = /* @__PURE__ */ sn({
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
    const n = Ce("config", We(Object.assign({}, Q))), r = Ce("currentSlide", q(0)), s = Ce("slidesToScroll", q(0)), o = Ce("isSliding", q(!1)), i = () => e.index === r.value, a = () => e.index === r.value - 1, c = () => e.index === r.value + 1, d = () => {
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
const dl = ':root{--vc-clr-primary: #000;--vc-clr-secondary: #090f207f;--vc-clr-white: #ffffff;--vc-icn-width: 1.2em;--vc-nav-width: 30px;--vc-nav-height: 30px;--vc-nav-border-radius: 0;--vc-nav-color: var(--vc-clr-primary);--vc-nav-color-hover: var(--vc-clr-secondary);--vc-nav-background: transparent;--vc-pgn-width: 12px;--vc-pgn-height: 4px;--vc-pgn-margin: 4px;--vc-pgn-border-radius: 0;--vc-pgn-background-color: var(--vc-clr-secondary);--vc-pgn-active-color: var(--vc-clr-primary)}.carousel__prev,.carousel__next{box-sizing:content-box;background:var(--vc-nav-background);border-radius:var(--vc-nav-border-radius);width:var(--vc-nav-width);height:var(--vc-nav-height);text-align:center;font-size:var(--vc-nav-height);padding:0;color:var(--vc-nav-color);display:flex;justify-content:center;align-items:center;position:absolute;border:0;cursor:pointer;margin:0 10px;top:50%;transform:translateY(-50%)}.carousel__prev:hover,.carousel__next:hover{color:var(--vc-nav-color-hover)}.carousel__next--disabled,.carousel__prev--disabled{cursor:not-allowed;opacity:.5}.carousel__prev{left:0}.carousel__next{right:0}.carousel--rtl .carousel__prev{left:auto;right:0}.carousel--rtl .carousel__next{right:auto;left:0}.carousel{position:relative;text-align:center;box-sizing:border-box;touch-action:pan-y;overscroll-behavior:none}.carousel.is-dragging{touch-action:none}.carousel *{box-sizing:border-box}.carousel__track{display:flex;padding:0!important;position:relative}.carousel__viewport{overflow:hidden}.carousel__sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.carousel__icon{width:var(--vc-icn-width);height:var(--vc-icn-width);fill:currentColor}.carousel__pagination{display:flex;justify-content:center;list-style:none;line-height:0;margin:10px 0 0}.carousel__pagination-button{display:block;border:0;margin:0;cursor:pointer;padding:var(--vc-pgn-margin);background:transparent}.carousel__pagination-button:after{display:block;content:"";width:var(--vc-pgn-width);height:var(--vc-pgn-height);border-radius:var(--vc-pgn-border-radius);background-color:var(--vc-pgn-background-color)}.carousel__pagination-button:hover:after,.carousel__pagination-button--active:after{background-color:var(--vc-pgn-active-color)}.carousel__slide{scroll-snap-stop:auto;flex-shrink:0;margin:0;position:relative;display:flex;justify-content:center;align-items:center;transform:translateZ(0)}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.fixed{position:fixed!important}.absolute{position:absolute!important}.relative{position:relative!important}.left-0{left:0!important}.top-0{top:0!important}.z-10{z-index:10!important}.z-\\[9998\\]{z-index:9998!important}.flex{display:flex!important}.h-12{height:3rem!important}.h-24{height:6rem!important}.h-64{height:16rem!important}.h-96{height:24rem!important}.h-\\[100vh\\]{height:100vh!important}.h-auto{height:auto!important}.h-full{height:100%!important}.max-h-96{max-height:24rem!important}.max-h-\\[500px\\]{max-height:500px!important}.max-h-\\[calc\\(100v-550px\\)\\]{max-height:calc(100v - 550px)!important}.max-h-\\[calc\\(100svh-500px\\)\\]{max-height:calc(100svh - 500px)!important}.max-h-\\[calc\\(100svh-550px\\)\\]{max-height:calc(100svh - 550px)!important}.max-h-\\[400px\\]{max-height:400px!important}.max-h-\\[calc\\(100svh-400\\)\\]{max-height:calc(100svh - 400)!important}.max-h-\\[calc\\(100vh-400\\)\\]{max-height:calc(100vh - 400)!important}.max-h-\\[calc\\(100svh-400px\\)\\]{max-height:calc(100svh - 400px)!important}.min-h-screen{min-height:100vh!important}.w-12{width:3rem!important}.w-24{width:6rem!important}.w-\\[100vw\\]{width:100vw!important}.w-fit{width:-moz-fit-content!important;width:fit-content!important}.w-full{width:100%!important}.cursor-pointer{cursor:pointer!important}.appearance-none{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important}.flex-col{flex-direction:column!important}.flex-wrap{flex-wrap:wrap!important}.items-center{align-items:center!important}.justify-end{justify-content:flex-end!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.gap-4{gap:1rem!important}.overflow-y-auto{overflow-y:auto!important}.rounded-xl{border-radius:.75rem!important}.border-4{border-width:4px!important}.border-solid{border-style:solid!important}.border-primary-blue{--tw-border-opacity: 1 !important;border-color:rgb(9 135 197 / var(--tw-border-opacity))!important}.border-transparent{border-color:transparent!important}.bg-black\\/50{background-color:#00000080!important}.bg-transparent{background-color:transparent!important}.bg-white{--tw-bg-opacity: 1 !important;background-color:rgb(255 255 255 / var(--tw-bg-opacity))!important}.object-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-cover{-o-object-fit:cover!important;object-fit:cover!important}.p-4{padding:1rem!important}.text-gray-700\\/30{color:#3741514d!important}.duration-300{transition-duration:.3s!important}.hover\\:bg-gray-100\\/20:hover{background-color:#f3f4f633!important}.hover\\:text-gray-700:hover{--tw-text-opacity: 1 !important;color:rgb(55 65 81 / var(--tw-text-opacity))!important}', hl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, pl = {
  components: {
    Carousel: ul,
    Slide: fl
  },
  props: {
    vehicleId: {
      type: String,
      required: !0,
      default: ""
    }
  },
  setup(e) {
    const t = q([]), n = q(null), r = q(0), s = () => {
      r.value = r.value === 0 ? 0 : r.value - 1;
    }, o = () => {
      t.value.length - 1 !== r.value && (r.value = r.value + 1);
    }, i = (k) => {
      r.value = k;
    }, a = Gt(() => t.value[r.value]), c = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/resolve`, d = async () => {
      var k;
      try {
        const L = await (await fetch(c)).json();
        n.value = L;
        const D = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/thumbnail`;
        t.value.push(D), (k = L == null ? void 0 : L.images) == null || k.forEach((ee) => {
          const N = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/picture/${ee}`;
          t.value.push(N);
        });
      } catch (P) {
        console.error("An error occurred while fetching the data:", P);
      }
    };
    Jn(() => {
      d(), T(0);
    });
    const g = q(!1), w = () => {
      g.value = !0;
    }, x = () => {
      g.value = !1;
    }, T = (k) => {
      r.value = k;
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
      setCurrentImage: T
    };
  }
}, gl = { class: "flex flex-col w-full relative items-center" }, ml = { class: "relative" }, _l = ["src"], vl = { class: "flex absolute items-center bg-transparent justify-between w-full h-full z-10" }, bl = /* @__PURE__ */ W("svg", {
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
], -1), wl = [
  bl
], xl = /* @__PURE__ */ W("svg", {
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
], -1), yl = [
  xl
], Cl = {
  key: 0,
  class: "fixed z-[9998] top-0 left-0 w-[100vw] h-[100vh] bg-black/50"
}, Sl = { class: "modal-wrapper" }, El = { class: "min-h-screen bg-white flex flex-col p-4" }, Tl = { class: "relative w-full" }, Al = ["src"], Ol = { class: "flex justify-end w-full absolute top-0" }, Pl = /* @__PURE__ */ W("svg", {
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
], -1), Il = [
  Pl
], Ml = { class: "flex flex-wrap justify-center w-full gap-4 items-center overflow-y-auto max-h-[400px]" }, jl = ["src", "onClick"];
function Rl(e, t, n, r, s, o) {
  const i = br("Slide"), a = br("Carousel");
  return Le(), ft(ue, null, [
    W("div", gl, [
      se(a, {
        id: "gallery",
        "items-to-show": 1,
        "wrap-around": !1,
        modelValue: r.currentSlide,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => r.currentSlide = c)
      }, {
        default: Ct(() => [
          (Le(!0), ft(ue, null, hn(r.images, (c, d) => (Le(), In(i, { key: d }, {
            default: Ct(() => [
              W("div", ml, [
                W("img", {
                  src: c,
                  class: "w-full h-auto max-h-96 object-contain flex rounded-xl justify-center items-center"
                }, null, 8, _l)
              ])
            ]),
            _: 2
          }, 1024))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"]),
      W("div", vl, [
        W("button", {
          onClick: t[1] || (t[1] = (...c) => r.prev && r.prev(...c)),
          class: "flex appearance-none h-64 items-center w-fit cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
        }, wl),
        W("button", {
          onClick: t[2] || (t[2] = (...c) => r.onImageClick && r.onImageClick(...c)),
          class: "flex appearance-none items-center w-full h-96 cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
        }),
        W("button", {
          onClick: t[3] || (t[3] = (...c) => r.next && r.next(...c)),
          class: "flex appearance-none h-64 items-center w-fit cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
        }, yl)
      ])
    ]),
    r.isOpen ? (Le(), ft("div", Cl, [
      W("div", Sl, [
        W("div", El, [
          W("div", Tl, [
            se(a, {
              id: "gallery",
              "items-to-show": 1,
              "wrap-around": !1,
              modelValue: r.currentSlide,
              "onUpdate:modelValue": t[4] || (t[4] = (c) => r.currentSlide = c)
            }, {
              default: Ct(() => [
                (Le(!0), ft(ue, null, hn(r.images, (c, d) => (Le(), In(i, { key: d }, {
                  default: Ct(() => [
                    W("img", {
                      src: c,
                      class: "w-full h-full max-h-[calc(100svh-400px)] object-contain flex rounded-xl items-center bg-white"
                    }, null, 8, Al)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"]),
            W("div", Ol, [
              W("button", {
                onClick: t[5] || (t[5] = (...c) => r.close && r.close(...c)),
                class: "flex appearance-none items-center w-fit cursor-pointer border-transparent bg-transparent hover:bg-gray-100/20 duration-300 text-gray-700/30 hover:text-gray-700"
              }, Il)
            ])
          ]),
          W("div", Ml, [
            (Le(!0), ft(ue, null, hn(r.images, (c, d) => (Le(), ft("img", {
              key: d,
              src: c,
              onClick: () => r.setCurrentImage(d),
              class: en([{ "border-4 border-solid border-primary-blue": r.currentSlide === d }, "w-24 h-24 object-cover flex cursor-pointer rounded-xl justify-center items-center bg-white"])
            }, null, 10, jl))), 128))
          ])
        ])
      ])
    ])) : wi("", !0)
  ], 64);
}
const Nl = /* @__PURE__ */ hl(pl, [["render", Rl], ["styles", [dl]]]), kl = /* @__PURE__ */ Qi(Nl);
customElements.define("image-slider", kl);
