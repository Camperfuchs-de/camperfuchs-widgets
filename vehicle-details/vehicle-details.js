/**
* @vue/shared v3.4.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Rr(e, t) {
  const u = new Set(e.split(","));
  return t ? (r) => u.has(r.toLowerCase()) : (r) => u.has(r);
}
const Q = {}, Ot = [], ye = () => {
}, z0 = () => !1, Nu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Or = (e) => e.startsWith("onUpdate:"), se = Object.assign, Ir = (e, t) => {
  const u = e.indexOf(t);
  u > -1 && e.splice(u, 1);
}, N0 = Object.prototype.hasOwnProperty, $ = (e, t) => N0.call(e, t), H = Array.isArray, It = (e) => Lu(e) === "[object Map]", ao = (e) => Lu(e) === "[object Set]", j = (e) => typeof e == "function", ne = (e) => typeof e == "string", Ht = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", lo = (e) => (ee(e) || j(e)) && j(e.then) && j(e.catch), fo = Object.prototype.toString, Lu = (e) => fo.call(e), L0 = (e) => Lu(e).slice(8, -1), ho = (e) => Lu(e) === "[object Object]", Mr = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Cu = /* @__PURE__ */ Rr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (u) => t[u] || (t[u] = e(u));
}, B0 = /-(\w)/g, ve = Bu((e) => e.replace(B0, (t, u) => u ? u.toUpperCase() : "")), H0 = /\B([A-Z])/g, Oe = Bu(
  (e) => e.replace(H0, "-$1").toLowerCase()
), Hu = Bu((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xu = Bu((e) => e ? `on${Hu(e)}` : ""), ht = (e, t) => !Object.is(e, t), Qu = (e, t) => {
  for (let u = 0; u < e.length; u++)
    e[u](t);
}, Du = (e, t, u) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: u
  });
}, q0 = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, fn = (e) => {
  const t = ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let dn;
const po = () => dn || (dn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pr(e) {
  if (H(e)) {
    const t = {};
    for (let u = 0; u < e.length; u++) {
      const r = e[u], n = ne(r) ? $0(r) : Pr(r);
      if (n)
        for (const o in n)
          t[o] = n[o];
    }
    return t;
  } else if (ne(e) || ee(e))
    return e;
}
const j0 = /;(?![^(]*\))/g, U0 = /:([^]+)/, V0 = /\/\*[^]*?\*\//g;
function $0(e) {
  const t = {};
  return e.replace(V0, "").split(j0).forEach((u) => {
    if (u) {
      const r = u.split(U0);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function lt(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (H(e))
    for (let u = 0; u < e.length; u++) {
      const r = lt(e[u]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const u in e)
      e[u] && (t += u + " ");
  return t.trim();
}
const W0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Z0 = /* @__PURE__ */ Rr(W0);
function bo(e) {
  return !!e || e === "";
}
const M = (e) => ne(e) ? e : e == null ? "" : H(e) || ee(e) && (e.toString === fo || !j(e.toString)) ? JSON.stringify(e, mo, 2) : String(e), mo = (e, t) => t && t.__v_isRef ? mo(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (u, [r, n], o) => (u[er(r, o) + " =>"] = n, u),
    {}
  )
} : ao(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((u) => er(u))
} : Ht(t) ? er(t) : ee(t) && !H(t) && !ho(t) ? String(t) : t, er = (e, t = "") => {
  var u;
  return Ht(e) ? `Symbol(${(u = e.description) != null ? u : t})` : e;
};
let Fe;
class G0 {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Fe, !t && Fe && (this.index = (Fe.scopes || (Fe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const u = Fe;
      try {
        return Fe = this, t();
      } finally {
        Fe = u;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Fe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Fe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let u, r;
      for (u = 0, r = this.effects.length; u < r; u++)
        this.effects[u].stop();
      for (u = 0, r = this.cleanups.length; u < r; u++)
        this.cleanups[u]();
      if (this.scopes)
        for (u = 0, r = this.scopes.length; u < r; u++)
          this.scopes[u].stop(!0);
      if (!this.detached && this.parent && !t) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function K0(e, t = Fe) {
  t && t.active && t.effects.push(e);
}
function Y0() {
  return Fe;
}
let Et;
class zr {
  constructor(t, u, r, n) {
    this.fn = t, this.trigger = u, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, K0(this, n);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, mt();
      for (const t of this.deps)
        if (t.computed && (J0(t.computed), this._dirtyLevel >= 2))
          break;
      _t(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = dt, u = Et;
    try {
      return dt = !0, Et = this, this._runnings++, hn(this), this.fn();
    } finally {
      pn(this), this._runnings--, Et = u, dt = t;
    }
  }
  stop() {
    var t;
    this.active && (hn(this), pn(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function J0(e) {
  return e.value;
}
function hn(e) {
  e._trackId++, e._depsLength = 0;
}
function pn(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      _o(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function _o(e, t) {
  const u = e.get(t);
  u !== void 0 && t._trackId !== u && (e.delete(t), e.size === 0 && e.cleanup());
}
let dt = !0, br = 0;
const xo = [];
function mt() {
  xo.push(dt), dt = !1;
}
function _t() {
  const e = xo.pop();
  dt = e === void 0 ? !0 : e;
}
function Nr() {
  br++;
}
function Lr() {
  for (br--; !br && mr.length; )
    mr.shift()();
}
function go(e, t, u) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && _o(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const mr = [];
function ko(e, t, u) {
  Nr();
  for (const r of e.keys())
    if (!(!r.allowRecurse && r._runnings) && r._dirtyLevel < t && (!r._runnings || t !== 2)) {
      const n = r._dirtyLevel;
      r._dirtyLevel = t, n === 0 && (!r._queryings || t !== 2) && (r.trigger(), r.scheduler && mr.push(r.scheduler));
    }
  Lr();
}
const wo = (e, t) => {
  const u = /* @__PURE__ */ new Map();
  return u.cleanup = e, u.computed = t, u;
}, _r = /* @__PURE__ */ new WeakMap(), At = Symbol(""), xr = Symbol("");
function xe(e, t, u) {
  if (dt && Et) {
    let r = _r.get(e);
    r || _r.set(e, r = /* @__PURE__ */ new Map());
    let n = r.get(u);
    n || r.set(u, n = wo(() => r.delete(u))), go(
      Et,
      n
    );
  }
}
function Qe(e, t, u, r, n, o) {
  const i = _r.get(e);
  if (!i)
    return;
  let s = [];
  if (t === "clear")
    s = [...i.values()];
  else if (u === "length" && H(e)) {
    const c = Number(r);
    i.forEach((a, l) => {
      (l === "length" || !Ht(l) && l >= c) && s.push(a);
    });
  } else
    switch (u !== void 0 && s.push(i.get(u)), t) {
      case "add":
        H(e) ? Mr(u) && s.push(i.get("length")) : (s.push(i.get(At)), It(e) && s.push(i.get(xr)));
        break;
      case "delete":
        H(e) || (s.push(i.get(At)), It(e) && s.push(i.get(xr)));
        break;
      case "set":
        It(e) && s.push(i.get(At));
        break;
    }
  Nr();
  for (const c of s)
    c && ko(
      c,
      3
    );
  Lr();
}
const X0 = /* @__PURE__ */ Rr("__proto__,__v_isRef,__isVue"), yo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ht)
), bn = /* @__PURE__ */ Q0();
function Q0() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...u) {
      const r = W(this);
      for (let o = 0, i = this.length; o < i; o++)
        xe(r, "get", o + "");
      const n = r[t](...u);
      return n === -1 || n === !1 ? r[t](...u.map(W)) : n;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...u) {
      mt(), Nr();
      const r = W(this)[t].apply(this, u);
      return Lr(), _t(), r;
    };
  }), e;
}
function ei(e) {
  const t = W(this);
  return xe(t, "has", e), t.hasOwnProperty(e);
}
class vo {
  constructor(t = !1, u = !1) {
    this._isReadonly = t, this._shallow = u;
  }
  get(t, u, r) {
    const n = this._isReadonly, o = this._shallow;
    if (u === "__v_isReactive")
      return !n;
    if (u === "__v_isReadonly")
      return n;
    if (u === "__v_isShallow")
      return o;
    if (u === "__v_raw")
      return r === (n ? o ? hi : Do : o ? Ao : Eo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = H(t);
    if (!n) {
      if (i && $(bn, u))
        return Reflect.get(bn, u, r);
      if (u === "hasOwnProperty")
        return ei;
    }
    const s = Reflect.get(t, u, r);
    return (Ht(u) ? yo.has(u) : X0(u)) || (n || xe(t, "get", u), o) ? s : pe(s) ? i && Mr(u) ? s : s.value : ee(s) ? n ? So(s) : qr(s) : s;
  }
}
class Co extends vo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, u, r, n) {
    let o = t[u];
    if (!this._shallow) {
      const c = Nt(o);
      if (!Su(r) && !Nt(r) && (o = W(o), r = W(r)), !H(t) && pe(o) && !pe(r))
        return c ? !1 : (o.value = r, !0);
    }
    const i = H(t) && Mr(u) ? Number(u) < t.length : $(t, u), s = Reflect.set(t, u, r, n);
    return t === W(n) && (i ? ht(r, o) && Qe(t, "set", u, r) : Qe(t, "add", u, r)), s;
  }
  deleteProperty(t, u) {
    const r = $(t, u);
    t[u];
    const n = Reflect.deleteProperty(t, u);
    return n && r && Qe(t, "delete", u, void 0), n;
  }
  has(t, u) {
    const r = Reflect.has(t, u);
    return (!Ht(u) || !yo.has(u)) && xe(t, "has", u), r;
  }
  ownKeys(t) {
    return xe(
      t,
      "iterate",
      H(t) ? "length" : At
    ), Reflect.ownKeys(t);
  }
}
class ti extends vo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, u) {
    return !0;
  }
  deleteProperty(t, u) {
    return !0;
  }
}
const ui = /* @__PURE__ */ new Co(), ri = /* @__PURE__ */ new ti(), ni = /* @__PURE__ */ new Co(
  !0
), Br = (e) => e, qu = (e) => Reflect.getPrototypeOf(e);
function mu(e, t, u = !1, r = !1) {
  e = e.__v_raw;
  const n = W(e), o = W(t);
  u || (ht(t, o) && xe(n, "get", t), xe(n, "get", o));
  const { has: i } = qu(n), s = r ? Br : u ? Ur : eu;
  if (i.call(n, t))
    return s(e.get(t));
  if (i.call(n, o))
    return s(e.get(o));
  e !== n && e.get(t);
}
function _u(e, t = !1) {
  const u = this.__v_raw, r = W(u), n = W(e);
  return t || (ht(e, n) && xe(r, "has", e), xe(r, "has", n)), e === n ? u.has(e) : u.has(e) || u.has(n);
}
function xu(e, t = !1) {
  return e = e.__v_raw, !t && xe(W(e), "iterate", At), Reflect.get(e, "size", e);
}
function mn(e) {
  e = W(e);
  const t = W(this);
  return qu(t).has.call(t, e) || (t.add(e), Qe(t, "add", e, e)), this;
}
function _n(e, t) {
  t = W(t);
  const u = W(this), { has: r, get: n } = qu(u);
  let o = r.call(u, e);
  o || (e = W(e), o = r.call(u, e));
  const i = n.call(u, e);
  return u.set(e, t), o ? ht(t, i) && Qe(u, "set", e, t) : Qe(u, "add", e, t), this;
}
function xn(e) {
  const t = W(this), { has: u, get: r } = qu(t);
  let n = u.call(t, e);
  n || (e = W(e), n = u.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return n && Qe(t, "delete", e, void 0), o;
}
function gn() {
  const e = W(this), t = e.size !== 0, u = e.clear();
  return t && Qe(e, "clear", void 0, void 0), u;
}
function gu(e, t) {
  return function(r, n) {
    const o = this, i = o.__v_raw, s = W(i), c = t ? Br : e ? Ur : eu;
    return !e && xe(s, "iterate", At), i.forEach((a, l) => r.call(n, c(a), c(l), o));
  };
}
function ku(e, t, u) {
  return function(...r) {
    const n = this.__v_raw, o = W(n), i = It(o), s = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, a = n[e](...r), l = u ? Br : t ? Ur : eu;
    return !t && xe(
      o,
      "iterate",
      c ? xr : At
    ), {
      // iterator protocol
      next() {
        const { value: d, done: m } = a.next();
        return m ? { value: d, done: m } : {
          value: s ? [l(d[0]), l(d[1])] : l(d),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function nt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function oi() {
  const e = {
    get(o) {
      return mu(this, o);
    },
    get size() {
      return xu(this);
    },
    has: _u,
    add: mn,
    set: _n,
    delete: xn,
    clear: gn,
    forEach: gu(!1, !1)
  }, t = {
    get(o) {
      return mu(this, o, !1, !0);
    },
    get size() {
      return xu(this);
    },
    has: _u,
    add: mn,
    set: _n,
    delete: xn,
    clear: gn,
    forEach: gu(!1, !0)
  }, u = {
    get(o) {
      return mu(this, o, !0);
    },
    get size() {
      return xu(this, !0);
    },
    has(o) {
      return _u.call(this, o, !0);
    },
    add: nt("add"),
    set: nt("set"),
    delete: nt("delete"),
    clear: nt("clear"),
    forEach: gu(!0, !1)
  }, r = {
    get(o) {
      return mu(this, o, !0, !0);
    },
    get size() {
      return xu(this, !0);
    },
    has(o) {
      return _u.call(this, o, !0);
    },
    add: nt("add"),
    set: nt("set"),
    delete: nt("delete"),
    clear: nt("clear"),
    forEach: gu(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = ku(
      o,
      !1,
      !1
    ), u[o] = ku(
      o,
      !0,
      !1
    ), t[o] = ku(
      o,
      !1,
      !0
    ), r[o] = ku(
      o,
      !0,
      !0
    );
  }), [
    e,
    u,
    t,
    r
  ];
}
const [
  ii,
  si,
  ci,
  ai
] = /* @__PURE__ */ oi();
function Hr(e, t) {
  const u = t ? e ? ai : ci : e ? si : ii;
  return (r, n, o) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? r : Reflect.get(
    $(u, n) && n in r ? u : r,
    n,
    o
  );
}
const li = {
  get: /* @__PURE__ */ Hr(!1, !1)
}, fi = {
  get: /* @__PURE__ */ Hr(!1, !0)
}, di = {
  get: /* @__PURE__ */ Hr(!0, !1)
}, Eo = /* @__PURE__ */ new WeakMap(), Ao = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap();
function pi(e) {
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
function bi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pi(L0(e));
}
function qr(e) {
  return Nt(e) ? e : jr(
    e,
    !1,
    ui,
    li,
    Eo
  );
}
function mi(e) {
  return jr(
    e,
    !1,
    ni,
    fi,
    Ao
  );
}
function So(e) {
  return jr(
    e,
    !0,
    ri,
    di,
    Do
  );
}
function jr(e, t, u, r, n) {
  if (!ee(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = n.get(e);
  if (o)
    return o;
  const i = bi(e);
  if (i === 0)
    return e;
  const s = new Proxy(
    e,
    i === 2 ? r : u
  );
  return n.set(e, s), s;
}
function Mt(e) {
  return Nt(e) ? Mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Nt(e) {
  return !!(e && e.__v_isReadonly);
}
function Su(e) {
  return !!(e && e.__v_isShallow);
}
function To(e) {
  return Mt(e) || Nt(e);
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function Fo(e) {
  return Du(e, "__v_skip", !0), e;
}
const eu = (e) => ee(e) ? qr(e) : e, Ur = (e) => ee(e) ? So(e) : e;
class Ro {
  constructor(t, u, r, n) {
    this._setter = u, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new zr(
      () => t(this._value),
      () => gr(this, 1)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !n, this.__v_isReadonly = r;
  }
  get value() {
    const t = W(this);
    return Oo(t), (!t._cacheable || t.effect.dirty) && ht(t._value, t._value = t.effect.run()) && gr(t, 2), t._value;
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
function _i(e, t, u = !1) {
  let r, n;
  const o = j(e);
  return o ? (r = e, n = ye) : (r = e.get, n = e.set), new Ro(r, n, o || !n, u);
}
function Oo(e) {
  dt && Et && (e = W(e), go(
    Et,
    e.dep || (e.dep = wo(
      () => e.dep = void 0,
      e instanceof Ro ? e : void 0
    ))
  ));
}
function gr(e, t = 3, u) {
  e = W(e);
  const r = e.dep;
  r && ko(
    r,
    t
  );
}
function pe(e) {
  return !!(e && e.__v_isRef === !0);
}
function Xe(e) {
  return xi(e, !1);
}
function xi(e, t) {
  return pe(e) ? e : new gi(e, t);
}
class gi {
  constructor(t, u) {
    this.__v_isShallow = u, this.dep = void 0, this.__v_isRef = !0, this._rawValue = u ? t : W(t), this._value = u ? t : eu(t);
  }
  get value() {
    return Oo(this), this._value;
  }
  set value(t) {
    const u = this.__v_isShallow || Su(t) || Nt(t);
    t = u ? t : W(t), ht(t, this._rawValue) && (this._rawValue = t, this._value = u ? t : eu(t), gr(this, 3));
  }
}
function ki(e) {
  return pe(e) ? e.value : e;
}
const wi = {
  get: (e, t, u) => ki(Reflect.get(e, t, u)),
  set: (e, t, u, r) => {
    const n = e[t];
    return pe(n) && !pe(u) ? (n.value = u, !0) : Reflect.set(e, t, u, r);
  }
};
function Io(e) {
  return Mt(e) ? e : new Proxy(e, wi);
}
var Kt = { NVM_INC: "/Users/sultanov/.nvm/versions/node/v18.17.0/include/node", MANPATH: "/Users/sultanov/.nvm/versions/node/v18.17.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "iTerm.app", NODE: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin/node", INIT_CWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details", ANDROID_HOME: "/Users/sultanov/Library/Android/sdk", NVM_CD_FLAGS: "-q", _P9K_TTY: "/dev/ttys000", TERM: "xterm-256color", SHELL: "/bin/zsh", npm_config_metrics_registry: "https://registry.npmjs.org/", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/", npm_config_global_prefix: "/Users/sultanov/.nvm/versions/node/v18.17.0", TERM_PROGRAM_VERSION: "3.4.23", COLOR: "1", TERM_SESSION_ID: "w0t0p0:28B3A055-1432-4733-AD41-A85E31CDAC3D", npm_config_noproxy: "", SDKMAN_PLATFORM: "darwinarm64", npm_config_local_prefix: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details", ZSH: "/Users/sultanov/.oh-my-zsh", NVM_DIR: "/Users/sultanov/.nvm", USER: "sultanov", LS_COLORS: "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43", SPRINGBOOT_HOME: "/Users/sultanov/.sdkman/candidates/springboot/current", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/sultanov/.nvm/versions/node/v18.17.0/etc/npmrc", SDKMAN_CANDIDATES_API: "https://api.sdkman.io/2", KUBECONFIG: "/Users/sultanov/.kube/config", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.Ge9ofZOVYl/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/bin/npm-cli.js", PAGER: "less", LSCOLORS: "Gxfxcxdxbxegedabagacad", PATH: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/widgets/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/node_modules/.bin:/Users/sultanov/dev/node_modules/.bin:/Users/sultanov/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/sultanov/.sdkman/candidates/springboot/current/bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v18.17.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/sultanov/.fzf/bin", npm_package_json: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details/package.json", _: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details/node_modules/.bin/vite", npm_config_userconfig: "/Users/sultanov/.npmrc", npm_config_init_module: "/Users/sultanov/.npm-init.js", __CFBundleIdentifier: "com.googlecode.iterm2", npm_command: "run-script", PWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-vehicle-details", JAVA_HOME: "/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home", npm_lifecycle_event: "build", EDITOR: "vi", P9K_SSH: "0", npm_package_name: "camperfuchs-vehicle-details", P9K_TTY: "old", ITERM_PROFILE: "Default", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.0.0", XPC_SERVICE_NAME: "0", SHLVL: "2", HOME: "/Users/sultanov", COLORFGBG: "7;0", LC_TERMINAL_VERSION: "3.4.23", HOMEBREW_PREFIX: "/opt/homebrew", ITERM_SESSION_ID: "w0t0p0:28B3A055-1432-4733-AD41-A85E31CDAC3D", npm_config_cache: "/Users/sultanov/.npm", LESS: "-R", LOGNAME: "sultanov", npm_lifecycle_script: "vite build", SDKMAN_DIR: "/Users/sultanov/.sdkman", LC_CTYPE: "UTF-8", NVM_BIN: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin", npm_config_user_agent: "npm/9.6.7 node/v18.17.0 darwin arm64 workspaces/false", SDKMAN_CANDIDATES_DIR: "/Users/sultanov/.sdkman/candidates", INFOPATH: "/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", _P9K_SSH_TTY: "/dev/ttys000", LC_TERMINAL: "iTerm2", npm_node_execpath: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin/node", npm_config_prefix: "/Users/sultanov/.nvm/versions/node/v18.17.0", COLORTERM: "truecolor", NODE_ENV: "production" };
const Yt = [];
function yi(e, ...t) {
  mt();
  const u = Yt.length ? Yt[Yt.length - 1].component : null, r = u && u.appContext.config.warnHandler, n = vi();
  if (r)
    et(
      r,
      u,
      11,
      [
        e + t.join(""),
        u && u.proxy,
        n.map(
          ({ vnode: o }) => `at <${f0(u, o.type)}>`
        ).join(`
`),
        n
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    n.length && o.push(`
`, ...Ci(n)), console.warn(...o);
  }
  _t();
}
function vi() {
  let e = Yt[Yt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const u = t[0];
    u && u.vnode === e ? u.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Ci(e) {
  const t = [];
  return e.forEach((u, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Ei(u));
  }), t;
}
function Ei({ vnode: e, recurseCount: t }) {
  const u = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, n = ` at <${f0(
    e.component,
    e.type,
    r
  )}`, o = ">" + u;
  return e.props ? [n, ...Ai(e.props), o] : [n + o];
}
function Ai(e) {
  const t = [], u = Object.keys(e);
  return u.slice(0, 3).forEach((r) => {
    t.push(...Mo(r, e[r]));
  }), u.length > 3 && t.push(" ..."), t;
}
function Mo(e, t, u) {
  return ne(t) ? (t = JSON.stringify(t), u ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? u ? t : [`${e}=${t}`] : pe(t) ? (t = Mo(e, W(t.value), !0), u ? t : [`${e}=Ref<`, t, ">"]) : j(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = W(t), u ? t : [`${e}=`, t]);
}
function et(e, t, u, r) {
  let n;
  try {
    n = r ? e(...r) : e();
  } catch (o) {
    ju(o, t, u);
  }
  return n;
}
function Me(e, t, u, r) {
  if (j(e)) {
    const o = et(e, t, u, r);
    return o && lo(o) && o.catch((i) => {
      ju(i, t, u);
    }), o;
  }
  const n = [];
  for (let o = 0; o < e.length; o++)
    n.push(Me(e[o], t, u, r));
  return n;
}
function ju(e, t, u, r = !0) {
  const n = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, s = `https://vuejs.org/errors/#runtime-${u}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let l = 0; l < a.length; l++)
          if (a[l](e, i, s) === !1)
            return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      et(
        c,
        null,
        10,
        [e, i, s]
      );
      return;
    }
  }
  Di(e, u, n, r);
}
function Di(e, t, u, r = !0) {
  console.error(e);
}
let tu = !1, kr = !1;
const fe = [];
let je = 0;
const Pt = [];
let ot = null, Ct = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let Vr = null;
function zo(e) {
  const t = Vr || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Si(e) {
  let t = je + 1, u = fe.length;
  for (; t < u; ) {
    const r = t + u >>> 1, n = fe[r], o = uu(n);
    o < e || o === e && n.pre ? t = r + 1 : u = r;
  }
  return t;
}
function $r(e) {
  (!fe.length || !fe.includes(
    e,
    tu && e.allowRecurse ? je + 1 : je
  )) && (e.id == null ? fe.push(e) : fe.splice(Si(e.id), 0, e), No());
}
function No() {
  !tu && !kr && (kr = !0, Vr = Po.then(Bo));
}
function Ti(e) {
  const t = fe.indexOf(e);
  t > je && fe.splice(t, 1);
}
function Fi(e) {
  H(e) ? Pt.push(...e) : (!ot || !ot.includes(
    e,
    e.allowRecurse ? Ct + 1 : Ct
  )) && Pt.push(e), No();
}
function kn(e, t, u = tu ? je + 1 : 0) {
  for (; u < fe.length; u++) {
    const r = fe[u];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      fe.splice(u, 1), u--, r();
    }
  }
}
function Lo(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort(
      (u, r) => uu(u) - uu(r)
    );
    if (Pt.length = 0, ot) {
      ot.push(...t);
      return;
    }
    for (ot = t, Ct = 0; Ct < ot.length; Ct++)
      ot[Ct]();
    ot = null, Ct = 0;
  }
}
const uu = (e) => e.id == null ? 1 / 0 : e.id, Ri = (e, t) => {
  const u = uu(e) - uu(t);
  if (u === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return u;
};
function Bo(e) {
  kr = !1, tu = !0, fe.sort(Ri);
  const t = ye;
  try {
    for (je = 0; je < fe.length; je++) {
      const u = fe[je];
      u && u.active !== !1 && (Kt.NODE_ENV !== "production" && t(u), et(u, null, 14));
    }
  } finally {
    je = 0, fe.length = 0, Lo(), tu = !1, Vr = null, (fe.length || Pt.length) && Bo();
  }
}
function Oi(e, t, ...u) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || Q;
  let n = u;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in r) {
    const l = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: m } = r[l] || Q;
    m && (n = u.map((_) => ne(_) ? _.trim() : _)), d && (n = u.map(q0));
  }
  let s, c = r[s = Xu(t)] || // also try camelCase event handler (#2249)
  r[s = Xu(ve(t))];
  !c && o && (c = r[s = Xu(Oe(t))]), c && Me(
    c,
    e,
    6,
    n
  );
  const a = r[s + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, Me(
      a,
      e,
      6,
      n
    );
  }
}
function Ho(e, t, u = !1) {
  const r = t.emitsCache, n = r.get(e);
  if (n !== void 0)
    return n;
  const o = e.emits;
  let i = {}, s = !1;
  if (!j(e)) {
    const c = (a) => {
      const l = Ho(a, t, !0);
      l && (s = !0, se(i, l));
    };
    !u && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !s ? (ee(e) && r.set(e, null), null) : (H(o) ? o.forEach((c) => i[c] = null) : se(i, o), ee(e) && r.set(e, i), i);
}
function Uu(e, t) {
  return !e || !Nu(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), $(e, t[0].toLowerCase() + t.slice(1)) || $(e, Oe(t)) || $(e, t));
}
let he = null, qo = null;
function Tu(e) {
  const t = he;
  return he = e, qo = e && e.type.__scopeId || null, t;
}
function tt(e, t = he, u) {
  if (!t || e._n)
    return e;
  const r = (...n) => {
    r._d && On(-1);
    const o = Tu(t);
    let i;
    try {
      i = e(...n);
    } finally {
      Tu(o), r._d && On(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function tr(e) {
  const {
    type: t,
    vnode: u,
    proxy: r,
    withProxy: n,
    props: o,
    propsOptions: [i],
    slots: s,
    attrs: c,
    emit: a,
    render: l,
    renderCache: d,
    data: m,
    setupState: _,
    ctx: b,
    inheritAttrs: S
  } = e;
  let P, L;
  const U = Tu(e);
  try {
    if (u.shapeFlag & 4) {
      const R = n || r, A = Kt.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(R, {
        get(O, G, te) {
          return yi(
            `Property '${String(
              G
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(O, G, te);
        }
      }) : R;
      P = qe(
        l.call(
          A,
          R,
          d,
          o,
          _,
          m,
          b
        )
      ), L = c;
    } else {
      const R = t;
      Kt.NODE_ENV, P = qe(
        R.length > 1 ? R(
          o,
          Kt.NODE_ENV !== "production" ? {
            get attrs() {
              return c;
            },
            slots: s,
            emit: a
          } : { attrs: c, slots: s, emit: a }
        ) : R(
          o,
          null
          /* we know it doesn't need it */
        )
      ), L = t.props ? c : Ii(c);
    }
  } catch (R) {
    Qt.length = 0, ju(R, e, 1), P = Pe(pt);
  }
  let C = P;
  if (L && S !== !1) {
    const R = Object.keys(L), { shapeFlag: A } = C;
    R.length && A & 7 && (i && R.some(Or) && (L = Mi(
      L,
      i
    )), C = Lt(C, L));
  }
  return u.dirs && (C = Lt(C), C.dirs = C.dirs ? C.dirs.concat(u.dirs) : u.dirs), u.transition && (C.transition = u.transition), P = C, Tu(U), P;
}
const Ii = (e) => {
  let t;
  for (const u in e)
    (u === "class" || u === "style" || Nu(u)) && ((t || (t = {}))[u] = e[u]);
  return t;
}, Mi = (e, t) => {
  const u = {};
  for (const r in e)
    (!Or(r) || !(r.slice(9) in t)) && (u[r] = e[r]);
  return u;
};
function Pi(e, t, u) {
  const { props: r, children: n, component: o } = e, { props: i, children: s, patchFlag: c } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (u && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? wn(r, i, a) : !!i;
    if (c & 8) {
      const l = t.dynamicProps;
      for (let d = 0; d < l.length; d++) {
        const m = l[d];
        if (i[m] !== r[m] && !Uu(a, m))
          return !0;
      }
    }
  } else
    return (n || s) && (!s || !s.$stable) ? !0 : r === i ? !1 : r ? i ? wn(r, i, a) : !0 : !!i;
  return !1;
}
function wn(e, t, u) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (t[o] !== e[o] && !Uu(u, o))
      return !0;
  }
  return !1;
}
function zi({ vnode: e, parent: t }, u) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = u, t = t.parent;
    else
      break;
  }
}
const jo = "components";
function Re(e, t) {
  return Li(jo, e, !0, t) || e;
}
const Ni = Symbol.for("v-ndc");
function Li(e, t, u = !0, r = !1) {
  const n = he || ce;
  if (n) {
    const o = n.type;
    if (e === jo) {
      const s = l0(
        o,
        !1
      );
      if (s && (s === t || s === ve(t) || s === Hu(ve(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      yn(n[e] || o[e], t) || // global registration
      yn(n.appContext[e], t)
    );
    return !i && r ? o : i;
  }
}
function yn(e, t) {
  return e && (e[t] || e[ve(t)] || e[Hu(ve(t))]);
}
const Bi = (e) => e.__isSuspense;
function Hi(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : Fi(e);
}
const qi = Symbol.for("v-scx"), ji = () => Eu(qi), wu = {};
function ur(e, t, u) {
  return Uo(e, t, u);
}
function Uo(e, t, {
  immediate: u,
  deep: r,
  flush: n,
  once: o,
  onTrack: i,
  onTrigger: s
} = Q) {
  if (t && o) {
    const O = t;
    t = (...G) => {
      O(...G), A();
    };
  }
  const c = ce, a = (O) => r === !0 ? O : (
    // for deep: false, only traverse root-level properties
    Rt(O, r === !1 ? 1 : void 0)
  );
  let l, d = !1, m = !1;
  if (pe(e) ? (l = () => e.value, d = Su(e)) : Mt(e) ? (l = () => a(e), d = !0) : H(e) ? (m = !0, d = e.some((O) => Mt(O) || Su(O)), l = () => e.map((O) => {
    if (pe(O))
      return O.value;
    if (Mt(O))
      return a(O);
    if (j(O))
      return et(O, c, 2);
  })) : j(e) ? t ? l = () => et(e, c, 2) : l = () => (_ && _(), Me(
    e,
    c,
    3,
    [b]
  )) : l = ye, t && r) {
    const O = l;
    l = () => Rt(O());
  }
  let _, b = (O) => {
    _ = C.onStop = () => {
      et(O, c, 4), _ = C.onStop = void 0;
    };
  }, S;
  if (Zu)
    if (b = ye, t ? u && Me(t, c, 3, [
      l(),
      m ? [] : void 0,
      b
    ]) : l(), n === "sync") {
      const O = ji();
      S = O.__watcherHandles || (O.__watcherHandles = []);
    } else
      return ye;
  let P = m ? new Array(e.length).fill(wu) : wu;
  const L = () => {
    if (!(!C.active || !C.dirty))
      if (t) {
        const O = C.run();
        (r || d || (m ? O.some((G, te) => ht(G, P[te])) : ht(O, P))) && (_ && _(), Me(t, c, 3, [
          O,
          // pass undefined as the old value when it's changed for the first time
          P === wu ? void 0 : m && P[0] === wu ? [] : P,
          b
        ]), P = O);
      } else
        C.run();
  };
  L.allowRecurse = !!t;
  let U;
  n === "sync" ? U = L : n === "post" ? U = () => me(L, c && c.suspense) : (L.pre = !0, c && (L.id = c.uid), U = () => $r(L));
  const C = new zr(l, ye, U), R = Y0(), A = () => {
    C.stop(), R && Ir(R.effects, C);
  };
  return t ? u ? L() : P = C.run() : n === "post" ? me(
    C.run.bind(C),
    c && c.suspense
  ) : C.run(), S && S.push(A), A;
}
function Ui(e, t, u) {
  const r = this.proxy, n = ne(e) ? e.includes(".") ? Vo(r, e) : () => r[e] : e.bind(r, r);
  let o;
  j(t) ? o = t : (o = t.handler, u = t);
  const i = au(this), s = Uo(n, o.bind(r), u);
  return i(), s;
}
function Vo(e, t) {
  const u = t.split(".");
  return () => {
    let r = e;
    for (let n = 0; n < u.length && r; n++)
      r = r[u[n]];
    return r;
  };
}
function Rt(e, t, u = 0, r) {
  if (!ee(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (u >= t)
      return e;
    u++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), pe(e))
    Rt(e.value, t, u, r);
  else if (H(e))
    for (let n = 0; n < e.length; n++)
      Rt(e[n], t, u, r);
  else if (ao(e) || It(e))
    e.forEach((n) => {
      Rt(n, t, u, r);
    });
  else if (ho(e))
    for (const n in e)
      Rt(e[n], t, u, r);
  return e;
}
function wt(e, t, u, r) {
  const n = e.dirs, o = t && t.dirs;
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    o && (s.oldValue = o[i].value);
    let c = s.dir[r];
    c && (mt(), Me(c, u, 8, [
      e.el,
      s,
      e,
      t
    ]), _t());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Vi(e, t) {
  return j(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    se({ name: e.name }, t, { setup: e })
  ) : e;
}
const Jt = (e) => !!e.type.__asyncLoader, $o = (e) => e.type.__isKeepAlive;
function $i(e, t) {
  Wo(e, "a", t);
}
function Wi(e, t) {
  Wo(e, "da", t);
}
function Wo(e, t, u = ce) {
  const r = e.__wdc || (e.__wdc = () => {
    let n = u;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (Vu(t, r, u), u) {
    let n = u.parent;
    for (; n && n.parent; )
      $o(n.parent.vnode) && Zi(r, t, u, n), n = n.parent;
  }
}
function Zi(e, t, u, r) {
  const n = Vu(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Go(() => {
    Ir(r[t], n);
  }, u);
}
function Vu(e, t, u = ce, r = !1) {
  if (u) {
    const n = u[e] || (u[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (u.isUnmounted)
        return;
      mt();
      const s = au(u), c = Me(t, u, e, i);
      return s(), _t(), c;
    });
    return r ? n.unshift(o) : n.push(o), o;
  }
}
const ut = (e) => (t, u = ce) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Zu || e === "sp") && Vu(e, (...r) => t(...r), u)
), Gi = ut("bm"), Zo = ut("m"), Ki = ut("bu"), Yi = ut("u"), Ji = ut("bum"), Go = ut("um"), Xi = ut("sp"), Qi = ut(
  "rtg"
), es = ut(
  "rtc"
);
function ts(e, t = ce) {
  Vu("ec", e, t);
}
function Fu(e, t, u, r) {
  let n;
  const o = u && u[r];
  if (H(e) || ne(e)) {
    n = new Array(e.length);
    for (let i = 0, s = e.length; i < s; i++)
      n[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    n = new Array(e);
    for (let i = 0; i < e; i++)
      n[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (ee(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (i, s) => t(i, s, void 0, o && o[s])
      );
    else {
      const i = Object.keys(e);
      n = new Array(i.length);
      for (let s = 0, c = i.length; s < c; s++) {
        const a = i[s];
        n[s] = t(e[a], a, s, o && o[s]);
      }
    }
  else
    n = [];
  return u && (u[r] = n), n;
}
function vn(e, t, u = {}, r, n) {
  if (he.isCE || he.parent && Jt(he.parent) && he.parent.isCE)
    return t !== "default" && (u.name = t), Pe("slot", u, r && r());
  let o = e[t];
  o && o._c && (o._d = !1), F();
  const i = o && Ko(o(u)), s = _e(
    le,
    {
      key: u.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !n && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), o && o._c && (o._d = !0), s;
}
function Ko(e) {
  return e.some((t) => i0(t) ? !(t.type === pt || t.type === le && !Ko(t.children)) : !0) ? e : null;
}
const wr = (e) => e ? c0(e) ? Kr(e) || e.proxy : wr(e.parent) : null, Xt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => wr(e.parent),
    $root: (e) => wr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Wr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, $r(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = zo.bind(e.proxy)),
    $watch: (e) => Ui.bind(e)
  })
), rr = (e, t) => e !== Q && !e.__isScriptSetup && $(e, t), us = {
  get({ _: e }, t) {
    const { ctx: u, setupState: r, data: n, props: o, accessCache: i, type: s, appContext: c } = e;
    let a;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return r[t];
          case 2:
            return n[t];
          case 4:
            return u[t];
          case 3:
            return o[t];
        }
      else {
        if (rr(r, t))
          return i[t] = 1, r[t];
        if (n !== Q && $(n, t))
          return i[t] = 2, n[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && $(a, t)
        )
          return i[t] = 3, o[t];
        if (u !== Q && $(u, t))
          return i[t] = 4, u[t];
        yr && (i[t] = 0);
      }
    }
    const l = Xt[t];
    let d, m;
    if (l)
      return t === "$attrs" && xe(e, "get", t), l(e);
    if (
      // css module (injected by vue-loader)
      (d = s.__cssModules) && (d = d[t])
    )
      return d;
    if (u !== Q && $(u, t))
      return i[t] = 4, u[t];
    if (
      // global properties
      m = c.config.globalProperties, $(m, t)
    )
      return m[t];
  },
  set({ _: e }, t, u) {
    const { data: r, setupState: n, ctx: o } = e;
    return rr(n, t) ? (n[t] = u, !0) : r !== Q && $(r, t) ? (r[t] = u, !0) : $(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = u, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: u, ctx: r, appContext: n, propsOptions: o }
  }, i) {
    let s;
    return !!u[i] || e !== Q && $(e, i) || rr(t, i) || (s = o[0]) && $(s, i) || $(r, i) || $(Xt, i) || $(n.config.globalProperties, i);
  },
  defineProperty(e, t, u) {
    return u.get != null ? e._.accessCache[t] = 0 : $(u, "value") && this.set(e, t, u.value, null), Reflect.defineProperty(e, t, u);
  }
};
function Cn(e) {
  return H(e) ? e.reduce(
    (t, u) => (t[u] = null, t),
    {}
  ) : e;
}
let yr = !0;
function rs(e) {
  const t = Wr(e), u = e.proxy, r = e.ctx;
  yr = !1, t.beforeCreate && En(t.beforeCreate, e, "bc");
  const {
    // state
    data: n,
    computed: o,
    methods: i,
    watch: s,
    provide: c,
    inject: a,
    // lifecycle
    created: l,
    beforeMount: d,
    mounted: m,
    beforeUpdate: _,
    updated: b,
    activated: S,
    deactivated: P,
    beforeDestroy: L,
    beforeUnmount: U,
    destroyed: C,
    unmounted: R,
    render: A,
    renderTracked: O,
    renderTriggered: G,
    errorCaptured: te,
    serverPrefetch: Ee,
    // public API
    expose: Ae,
    inheritAttrs: Ne,
    // assets
    components: Ze,
    directives: Ge,
    filters: Ke
  } = t;
  if (a && ns(a, r, null), i)
    for (const J in i) {
      const K = i[J];
      j(K) && (r[J] = K.bind(u));
    }
  if (n) {
    const J = n.call(u, u);
    ee(J) && (e.data = qr(J));
  }
  if (yr = !0, o)
    for (const J in o) {
      const K = o[J], Le = j(K) ? K.bind(u, u) : j(K.get) ? K.get.bind(u, u) : ye, gt = !j(K) && j(K.set) ? K.set.bind(u) : ye, Be = Yr({
        get: Le,
        set: gt
      });
      Object.defineProperty(r, J, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (ke) => Be.value = ke
      });
    }
  if (s)
    for (const J in s)
      Yo(s[J], r, u, J);
  if (c) {
    const J = j(c) ? c.call(u) : c;
    Reflect.ownKeys(J).forEach((K) => {
      ls(K, J[K]);
    });
  }
  l && En(l, e, "c");
  function re(J, K) {
    H(K) ? K.forEach((Le) => J(Le.bind(u))) : K && J(K.bind(u));
  }
  if (re(Gi, d), re(Zo, m), re(Ki, _), re(Yi, b), re($i, S), re(Wi, P), re(ts, te), re(es, O), re(Qi, G), re(Ji, U), re(Go, R), re(Xi, Ee), H(Ae))
    if (Ae.length) {
      const J = e.exposed || (e.exposed = {});
      Ae.forEach((K) => {
        Object.defineProperty(J, K, {
          get: () => u[K],
          set: (Le) => u[K] = Le
        });
      });
    } else
      e.exposed || (e.exposed = {});
  A && e.render === ye && (e.render = A), Ne != null && (e.inheritAttrs = Ne), Ze && (e.components = Ze), Ge && (e.directives = Ge);
}
function ns(e, t, u = ye) {
  H(e) && (e = vr(e));
  for (const r in e) {
    const n = e[r];
    let o;
    ee(n) ? "default" in n ? o = Eu(
      n.from || r,
      n.default,
      !0
    ) : o = Eu(n.from || r) : o = Eu(n), pe(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function En(e, t, u) {
  Me(
    H(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    u
  );
}
function Yo(e, t, u, r) {
  const n = r.includes(".") ? Vo(u, r) : () => u[r];
  if (ne(e)) {
    const o = t[e];
    j(o) && ur(n, o);
  } else if (j(e))
    ur(n, e.bind(u));
  else if (ee(e))
    if (H(e))
      e.forEach((o) => Yo(o, t, u, r));
    else {
      const o = j(e.handler) ? e.handler.bind(u) : t[e.handler];
      j(o) && ur(n, o, e);
    }
}
function Wr(e) {
  const t = e.type, { mixins: u, extends: r } = t, {
    mixins: n,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, s = o.get(t);
  let c;
  return s ? c = s : !n.length && !u && !r ? c = t : (c = {}, n.length && n.forEach(
    (a) => Ru(c, a, i, !0)
  ), Ru(c, t, i)), ee(t) && o.set(t, c), c;
}
function Ru(e, t, u, r = !1) {
  const { mixins: n, extends: o } = t;
  o && Ru(e, o, u, !0), n && n.forEach(
    (i) => Ru(e, i, u, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const s = os[i] || u && u[i];
      e[i] = s ? s(e[i], t[i]) : t[i];
    }
  return e;
}
const os = {
  data: An,
  props: Dn,
  emits: Dn,
  // objects
  methods: Gt,
  computed: Gt,
  // lifecycle
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  // assets
  components: Gt,
  directives: Gt,
  // watch
  watch: ss,
  // provide / inject
  provide: An,
  inject: is
};
function An(e, t) {
  return t ? e ? function() {
    return se(
      j(e) ? e.call(this, this) : e,
      j(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function is(e, t) {
  return Gt(vr(e), vr(t));
}
function vr(e) {
  if (H(e)) {
    const t = {};
    for (let u = 0; u < e.length; u++)
      t[e[u]] = e[u];
    return t;
  }
  return e;
}
function de(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gt(e, t) {
  return e ? se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Dn(e, t) {
  return e ? H(e) && H(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : se(
    /* @__PURE__ */ Object.create(null),
    Cn(e),
    Cn(t ?? {})
  ) : t;
}
function ss(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const u = se(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    u[r] = de(e[r], t[r]);
  return u;
}
function Jo() {
  return {
    app: null,
    config: {
      isNativeTag: z0,
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
let cs = 0;
function as(e, t) {
  return function(r, n = null) {
    j(r) || (r = se({}, r)), n != null && !ee(n) && (n = null);
    const o = Jo(), i = /* @__PURE__ */ new WeakSet();
    let s = !1;
    const c = o.app = {
      _uid: cs++,
      _component: r,
      _props: n,
      _container: null,
      _context: o,
      _instance: null,
      version: Ps,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...l) {
        return i.has(a) || (a && j(a.install) ? (i.add(a), a.install(c, ...l)) : j(a) && (i.add(a), a(c, ...l))), c;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), c;
      },
      component(a, l) {
        return l ? (o.components[a] = l, c) : o.components[a];
      },
      directive(a, l) {
        return l ? (o.directives[a] = l, c) : o.directives[a];
      },
      mount(a, l, d) {
        if (!s) {
          const m = Pe(r, n);
          return m.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), l && t ? t(m, a) : e(m, a, d), s = !0, c._container = a, a.__vue_app__ = c, Kr(m.component) || m.component.proxy;
        }
      },
      unmount() {
        s && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, l) {
        return o.provides[a] = l, c;
      },
      runWithContext(a) {
        Ou = c;
        try {
          return a();
        } finally {
          Ou = null;
        }
      }
    };
    return c;
  };
}
let Ou = null;
function ls(e, t) {
  if (ce) {
    let u = ce.provides;
    const r = ce.parent && ce.parent.provides;
    r === u && (u = ce.provides = Object.create(r)), u[e] = t;
  }
}
function Eu(e, t, u = !1) {
  const r = ce || he;
  if (r || Ou) {
    const n = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Ou._context.provides;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return u && j(t) ? t.call(r && r.proxy) : t;
  }
}
function fs(e, t, u, r = !1) {
  const n = {}, o = {};
  Du(o, Wu, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Xo(e, t, n, o);
  for (const i in e.propsOptions[0])
    i in n || (n[i] = void 0);
  u ? e.props = r ? n : mi(n) : e.type.props ? e.props = n : e.props = o, e.attrs = o;
}
function ds(e, t, u, r) {
  const {
    props: n,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, s = W(n), [c] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const l = e.vnode.dynamicProps;
      for (let d = 0; d < l.length; d++) {
        let m = l[d];
        if (Uu(e.emitsOptions, m))
          continue;
        const _ = t[m];
        if (c)
          if ($(o, m))
            _ !== o[m] && (o[m] = _, a = !0);
          else {
            const b = ve(m);
            n[b] = Cr(
              c,
              s,
              b,
              _,
              e,
              !1
            );
          }
        else
          _ !== o[m] && (o[m] = _, a = !0);
      }
    }
  } else {
    Xo(e, t, n, o) && (a = !0);
    let l;
    for (const d in s)
      (!t || // for camelCase
      !$(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = Oe(d)) === d || !$(t, l))) && (c ? u && // for camelCase
      (u[d] !== void 0 || // for kebab-case
      u[l] !== void 0) && (n[d] = Cr(
        c,
        s,
        d,
        void 0,
        e,
        !0
      )) : delete n[d]);
    if (o !== s)
      for (const d in o)
        (!t || !$(t, d)) && (delete o[d], a = !0);
  }
  a && Qe(e, "set", "$attrs");
}
function Xo(e, t, u, r) {
  const [n, o] = e.propsOptions;
  let i = !1, s;
  if (t)
    for (let c in t) {
      if (Cu(c))
        continue;
      const a = t[c];
      let l;
      n && $(n, l = ve(c)) ? !o || !o.includes(l) ? u[l] = a : (s || (s = {}))[l] = a : Uu(e.emitsOptions, c) || (!(c in r) || a !== r[c]) && (r[c] = a, i = !0);
    }
  if (o) {
    const c = W(u), a = s || Q;
    for (let l = 0; l < o.length; l++) {
      const d = o[l];
      u[d] = Cr(
        n,
        c,
        d,
        a[d],
        e,
        !$(a, d)
      );
    }
  }
  return i;
}
function Cr(e, t, u, r, n, o) {
  const i = e[u];
  if (i != null) {
    const s = $(i, "default");
    if (s && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && j(c)) {
        const { propsDefaults: a } = n;
        if (u in a)
          r = a[u];
        else {
          const l = au(n);
          r = a[u] = c.call(
            null,
            t
          ), l();
        }
      } else
        r = c;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !s ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Oe(u)) && (r = !0));
  }
  return r;
}
function Qo(e, t, u = !1) {
  const r = t.propsCache, n = r.get(e);
  if (n)
    return n;
  const o = e.props, i = {}, s = [];
  let c = !1;
  if (!j(e)) {
    const l = (d) => {
      c = !0;
      const [m, _] = Qo(d, t, !0);
      se(i, m), _ && s.push(..._);
    };
    !u && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  if (!o && !c)
    return ee(e) && r.set(e, Ot), Ot;
  if (H(o))
    for (let l = 0; l < o.length; l++) {
      const d = ve(o[l]);
      Sn(d) && (i[d] = Q);
    }
  else if (o)
    for (const l in o) {
      const d = ve(l);
      if (Sn(d)) {
        const m = o[l], _ = i[d] = H(m) || j(m) ? { type: m } : se({}, m);
        if (_) {
          const b = Rn(Boolean, _.type), S = Rn(String, _.type);
          _[
            0
            /* shouldCast */
          ] = b > -1, _[
            1
            /* shouldCastTrue */
          ] = S < 0 || b < S, (b > -1 || $(_, "default")) && s.push(d);
        }
      }
    }
  const a = [i, s];
  return ee(e) && r.set(e, a), a;
}
function Sn(e) {
  return e[0] !== "$";
}
function Tn(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Fn(e, t) {
  return Tn(e) === Tn(t);
}
function Rn(e, t) {
  return H(t) ? t.findIndex((u) => Fn(u, e)) : j(t) && Fn(t, e) ? 0 : -1;
}
const e0 = (e) => e[0] === "_" || e === "$stable", Zr = (e) => H(e) ? e.map(qe) : [qe(e)], hs = (e, t, u) => {
  if (t._n)
    return t;
  const r = tt((...n) => (Kt.NODE_ENV, Zr(t(...n))), u);
  return r._c = !1, r;
}, t0 = (e, t, u) => {
  const r = e._ctx;
  for (const n in e) {
    if (e0(n))
      continue;
    const o = e[n];
    if (j(o))
      t[n] = hs(n, o, r);
    else if (o != null) {
      const i = Zr(o);
      t[n] = () => i;
    }
  }
}, u0 = (e, t) => {
  const u = Zr(t);
  e.slots.default = () => u;
}, ps = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const u = t._;
    u ? (e.slots = W(t), Du(t, "_", u)) : t0(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && u0(e, t);
  Du(e.slots, Wu, 1);
}, bs = (e, t, u) => {
  const { vnode: r, slots: n } = e;
  let o = !0, i = Q;
  if (r.shapeFlag & 32) {
    const s = t._;
    s ? u && s === 1 ? o = !1 : (se(n, t), !u && s === 1 && delete n._) : (o = !t.$stable, t0(t, n)), i = t;
  } else
    t && (u0(e, t), i = { default: 1 });
  if (o)
    for (const s in n)
      !e0(s) && i[s] == null && delete n[s];
};
function Er(e, t, u, r, n = !1) {
  if (H(e)) {
    e.forEach(
      (m, _) => Er(
        m,
        t && (H(t) ? t[_] : t),
        u,
        r,
        n
      )
    );
    return;
  }
  if (Jt(r) && !n)
    return;
  const o = r.shapeFlag & 4 ? Kr(r.component) || r.component.proxy : r.el, i = n ? null : o, { i: s, r: c } = e, a = t && t.r, l = s.refs === Q ? s.refs = {} : s.refs, d = s.setupState;
  if (a != null && a !== c && (ne(a) ? (l[a] = null, $(d, a) && (d[a] = null)) : pe(a) && (a.value = null)), j(c))
    et(c, s, 12, [i, l]);
  else {
    const m = ne(c), _ = pe(c);
    if (m || _) {
      const b = () => {
        if (e.f) {
          const S = m ? $(d, c) ? d[c] : l[c] : c.value;
          n ? H(S) && Ir(S, o) : H(S) ? S.includes(o) || S.push(o) : m ? (l[c] = [o], $(d, c) && (d[c] = l[c])) : (c.value = [o], e.k && (l[e.k] = c.value));
        } else
          m ? (l[c] = i, $(d, c) && (d[c] = i)) : _ && (c.value = i, e.k && (l[e.k] = i));
      };
      i ? (b.id = -1, me(b, u)) : b();
    }
  }
}
const me = Hi;
function ms(e) {
  return _s(e);
}
function _s(e, t) {
  const u = po();
  u.__VUE__ = !0;
  const {
    insert: r,
    remove: n,
    patchProp: o,
    createElement: i,
    createText: s,
    createComment: c,
    setText: a,
    setElementText: l,
    parentNode: d,
    nextSibling: m,
    setScopeId: _ = ye,
    insertStaticContent: b
  } = e, S = (f, h, x, g = null, k = null, v = null, D = void 0, y = null, E = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !Zt(f, h) && (g = kt(f), ke(f, k, v, !0), f = null), h.patchFlag === -2 && (E = !1, h.dynamicChildren = null);
    const { type: w, ref: T, shapeFlag: z } = h;
    switch (w) {
      case $u:
        P(f, h, x, g);
        break;
      case pt:
        L(f, h, x, g);
        break;
      case or:
        f == null && U(h, x, g, D);
        break;
      case le:
        Ze(
          f,
          h,
          x,
          g,
          k,
          v,
          D,
          y,
          E
        );
        break;
      default:
        z & 1 ? A(
          f,
          h,
          x,
          g,
          k,
          v,
          D,
          y,
          E
        ) : z & 6 ? Ge(
          f,
          h,
          x,
          g,
          k,
          v,
          D,
          y,
          E
        ) : (z & 64 || z & 128) && w.process(
          f,
          h,
          x,
          g,
          k,
          v,
          D,
          y,
          E,
          Ye
        );
    }
    T != null && k && Er(T, f && f.ref, v, h || f, !h);
  }, P = (f, h, x, g) => {
    if (f == null)
      r(
        h.el = s(h.children),
        x,
        g
      );
    else {
      const k = h.el = f.el;
      h.children !== f.children && a(k, h.children);
    }
  }, L = (f, h, x, g) => {
    f == null ? r(
      h.el = c(h.children || ""),
      x,
      g
    ) : h.el = f.el;
  }, U = (f, h, x, g) => {
    [f.el, f.anchor] = b(
      f.children,
      h,
      x,
      g,
      f.el,
      f.anchor
    );
  }, C = ({ el: f, anchor: h }, x, g) => {
    let k;
    for (; f && f !== h; )
      k = m(f), r(f, x, g), f = k;
    r(h, x, g);
  }, R = ({ el: f, anchor: h }) => {
    let x;
    for (; f && f !== h; )
      x = m(f), n(f), f = x;
    n(h);
  }, A = (f, h, x, g, k, v, D, y, E) => {
    h.type === "svg" ? D = "svg" : h.type === "math" && (D = "mathml"), f == null ? O(
      h,
      x,
      g,
      k,
      v,
      D,
      y,
      E
    ) : Ee(
      f,
      h,
      k,
      v,
      D,
      y,
      E
    );
  }, O = (f, h, x, g, k, v, D, y) => {
    let E, w;
    const { props: T, shapeFlag: z, transition: I, dirs: B } = f;
    if (E = f.el = i(
      f.type,
      v,
      T && T.is,
      T
    ), z & 8 ? l(E, f.children) : z & 16 && te(
      f.children,
      E,
      null,
      g,
      k,
      nr(f, v),
      D,
      y
    ), B && wt(f, null, g, "created"), G(E, f, f.scopeId, D, g), T) {
      for (const Z in T)
        Z !== "value" && !Cu(Z) && o(
          E,
          Z,
          null,
          T[Z],
          v,
          f.children,
          g,
          k,
          Se
        );
      "value" in T && o(E, "value", null, T.value, v), (w = T.onVnodeBeforeMount) && He(w, g, f);
    }
    B && wt(f, null, g, "beforeMount");
    const V = xs(k, I);
    V && I.beforeEnter(E), r(E, h, x), ((w = T && T.onVnodeMounted) || V || B) && me(() => {
      w && He(w, g, f), V && I.enter(E), B && wt(f, null, g, "mounted");
    }, k);
  }, G = (f, h, x, g, k) => {
    if (x && _(f, x), g)
      for (let v = 0; v < g.length; v++)
        _(f, g[v]);
    if (k) {
      let v = k.subTree;
      if (h === v) {
        const D = k.vnode;
        G(
          f,
          D,
          D.scopeId,
          D.slotScopeIds,
          k.parent
        );
      }
    }
  }, te = (f, h, x, g, k, v, D, y, E = 0) => {
    for (let w = E; w < f.length; w++) {
      const T = f[w] = y ? it(f[w]) : qe(f[w]);
      S(
        null,
        T,
        h,
        x,
        g,
        k,
        v,
        D,
        y
      );
    }
  }, Ee = (f, h, x, g, k, v, D) => {
    const y = h.el = f.el;
    let { patchFlag: E, dynamicChildren: w, dirs: T } = h;
    E |= f.patchFlag & 16;
    const z = f.props || Q, I = h.props || Q;
    let B;
    if (x && yt(x, !1), (B = I.onVnodeBeforeUpdate) && He(B, x, h, f), T && wt(h, f, x, "beforeUpdate"), x && yt(x, !0), w ? Ae(
      f.dynamicChildren,
      w,
      y,
      x,
      g,
      nr(h, k),
      v
    ) : D || K(
      f,
      h,
      y,
      null,
      x,
      g,
      nr(h, k),
      v,
      !1
    ), E > 0) {
      if (E & 16)
        Ne(
          y,
          h,
          z,
          I,
          x,
          g,
          k
        );
      else if (E & 2 && z.class !== I.class && o(y, "class", null, I.class, k), E & 4 && o(y, "style", z.style, I.style, k), E & 8) {
        const V = h.dynamicProps;
        for (let Z = 0; Z < V.length; Z++) {
          const Y = V[Z], ue = z[Y], be = I[Y];
          (be !== ue || Y === "value") && o(
            y,
            Y,
            ue,
            be,
            k,
            f.children,
            x,
            g,
            Se
          );
        }
      }
      E & 1 && f.children !== h.children && l(y, h.children);
    } else
      !D && w == null && Ne(
        y,
        h,
        z,
        I,
        x,
        g,
        k
      );
    ((B = I.onVnodeUpdated) || T) && me(() => {
      B && He(B, x, h, f), T && wt(h, f, x, "updated");
    }, g);
  }, Ae = (f, h, x, g, k, v, D) => {
    for (let y = 0; y < h.length; y++) {
      const E = f[y], w = h[y], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(E, w) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 70) ? d(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      S(
        E,
        w,
        T,
        null,
        g,
        k,
        v,
        D,
        !0
      );
    }
  }, Ne = (f, h, x, g, k, v, D) => {
    if (x !== g) {
      if (x !== Q)
        for (const y in x)
          !Cu(y) && !(y in g) && o(
            f,
            y,
            x[y],
            null,
            D,
            h.children,
            k,
            v,
            Se
          );
      for (const y in g) {
        if (Cu(y))
          continue;
        const E = g[y], w = x[y];
        E !== w && y !== "value" && o(
          f,
          y,
          w,
          E,
          D,
          h.children,
          k,
          v,
          Se
        );
      }
      "value" in g && o(f, "value", x.value, g.value, D);
    }
  }, Ze = (f, h, x, g, k, v, D, y, E) => {
    const w = h.el = f ? f.el : s(""), T = h.anchor = f ? f.anchor : s("");
    let { patchFlag: z, dynamicChildren: I, slotScopeIds: B } = h;
    B && (y = y ? y.concat(B) : B), f == null ? (r(w, x, g), r(T, x, g), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      x,
      T,
      k,
      v,
      D,
      y,
      E
    )) : z > 0 && z & 64 && I && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (Ae(
      f.dynamicChildren,
      I,
      x,
      k,
      v,
      D,
      y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || k && h === k.subTree) && r0(
      f,
      h,
      !0
      /* shallow */
    )) : K(
      f,
      h,
      x,
      T,
      k,
      v,
      D,
      y,
      E
    );
  }, Ge = (f, h, x, g, k, v, D, y, E) => {
    h.slotScopeIds = y, f == null ? h.shapeFlag & 512 ? k.ctx.activate(
      h,
      x,
      g,
      D,
      E
    ) : Ke(
      h,
      x,
      g,
      k,
      v,
      D,
      E
    ) : De(f, h, E);
  }, Ke = (f, h, x, g, k, v, D) => {
    const y = f.component = Ds(
      f,
      g,
      k
    );
    if ($o(f) && (y.ctx.renderer = Ye), Ss(y), y.asyncDep) {
      if (k && k.registerDep(y, re), !f.el) {
        const E = y.subTree = Pe(pt);
        L(null, E, h, x);
      }
    } else
      re(
        y,
        f,
        h,
        x,
        k,
        v,
        D
      );
  }, De = (f, h, x) => {
    const g = h.component = f.component;
    if (Pi(f, h, x))
      if (g.asyncDep && !g.asyncResolved) {
        J(g, h, x);
        return;
      } else
        g.next = h, Ti(g.update), g.effect.dirty = !0, g.update();
    else
      h.el = f.el, g.vnode = h;
  }, re = (f, h, x, g, k, v, D) => {
    const y = () => {
      if (f.isMounted) {
        let { next: T, bu: z, u: I, parent: B, vnode: V } = f;
        {
          const Je = n0(f);
          if (Je) {
            T && (T.el = V.el, J(f, T, D)), Je.asyncDep.then(() => {
              f.isUnmounted || y();
            });
            return;
          }
        }
        let Z = T, Y;
        yt(f, !1), T ? (T.el = V.el, J(f, T, D)) : T = V, z && Qu(z), (Y = T.props && T.props.onVnodeBeforeUpdate) && He(Y, B, T, V), yt(f, !0);
        const ue = tr(f), be = f.subTree;
        f.subTree = ue, S(
          be,
          ue,
          // parent may have changed if it's in a teleport
          d(be.el),
          // anchor may have changed if it's in a fragment
          kt(be),
          f,
          k,
          v
        ), T.el = ue.el, Z === null && zi(f, ue.el), I && me(I, k), (Y = T.props && T.props.onVnodeUpdated) && me(
          () => He(Y, B, T, V),
          k
        );
      } else {
        let T;
        const { el: z, props: I } = h, { bm: B, m: V, parent: Z } = f, Y = Jt(h);
        if (yt(f, !1), B && Qu(B), !Y && (T = I && I.onVnodeBeforeMount) && He(T, Z, h), yt(f, !0), z && Tt) {
          const ue = () => {
            f.subTree = tr(f), Tt(
              z,
              f.subTree,
              f,
              k,
              null
            );
          };
          Y ? h.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !f.isUnmounted && ue()
          ) : ue();
        } else {
          const ue = f.subTree = tr(f);
          S(
            null,
            ue,
            x,
            g,
            f,
            k,
            v
          ), h.el = ue.el;
        }
        if (V && me(V, k), !Y && (T = I && I.onVnodeMounted)) {
          const ue = h;
          me(
            () => He(T, Z, ue),
            k
          );
        }
        (h.shapeFlag & 256 || Z && Jt(Z.vnode) && Z.vnode.shapeFlag & 256) && f.a && me(f.a, k), f.isMounted = !0, h = x = g = null;
      }
    }, E = f.effect = new zr(
      y,
      ye,
      () => $r(w),
      f.scope
      // track it in component's effect scope
    ), w = f.update = () => {
      E.dirty && E.run();
    };
    w.id = f.uid, yt(f, !0), w();
  }, J = (f, h, x) => {
    h.component = f;
    const g = f.vnode.props;
    f.vnode = h, f.next = null, ds(f, h.props, g, x), bs(f, h.children, x), mt(), kn(f), _t();
  }, K = (f, h, x, g, k, v, D, y, E = !1) => {
    const w = f && f.children, T = f ? f.shapeFlag : 0, z = h.children, { patchFlag: I, shapeFlag: B } = h;
    if (I > 0) {
      if (I & 128) {
        gt(
          w,
          z,
          x,
          g,
          k,
          v,
          D,
          y,
          E
        );
        return;
      } else if (I & 256) {
        Le(
          w,
          z,
          x,
          g,
          k,
          v,
          D,
          y,
          E
        );
        return;
      }
    }
    B & 8 ? (T & 16 && Se(w, k, v), z !== w && l(x, z)) : T & 16 ? B & 16 ? gt(
      w,
      z,
      x,
      g,
      k,
      v,
      D,
      y,
      E
    ) : Se(w, k, v, !0) : (T & 8 && l(x, ""), B & 16 && te(
      z,
      x,
      g,
      k,
      v,
      D,
      y,
      E
    ));
  }, Le = (f, h, x, g, k, v, D, y, E) => {
    f = f || Ot, h = h || Ot;
    const w = f.length, T = h.length, z = Math.min(w, T);
    let I;
    for (I = 0; I < z; I++) {
      const B = h[I] = E ? it(h[I]) : qe(h[I]);
      S(
        f[I],
        B,
        x,
        null,
        k,
        v,
        D,
        y,
        E
      );
    }
    w > T ? Se(
      f,
      k,
      v,
      !0,
      !1,
      z
    ) : te(
      h,
      x,
      g,
      k,
      v,
      D,
      y,
      E,
      z
    );
  }, gt = (f, h, x, g, k, v, D, y, E) => {
    let w = 0;
    const T = h.length;
    let z = f.length - 1, I = T - 1;
    for (; w <= z && w <= I; ) {
      const B = f[w], V = h[w] = E ? it(h[w]) : qe(h[w]);
      if (Zt(B, V))
        S(
          B,
          V,
          x,
          null,
          k,
          v,
          D,
          y,
          E
        );
      else
        break;
      w++;
    }
    for (; w <= z && w <= I; ) {
      const B = f[z], V = h[I] = E ? it(h[I]) : qe(h[I]);
      if (Zt(B, V))
        S(
          B,
          V,
          x,
          null,
          k,
          v,
          D,
          y,
          E
        );
      else
        break;
      z--, I--;
    }
    if (w > z) {
      if (w <= I) {
        const B = I + 1, V = B < T ? h[B].el : g;
        for (; w <= I; )
          S(
            null,
            h[w] = E ? it(h[w]) : qe(h[w]),
            x,
            V,
            k,
            v,
            D,
            y,
            E
          ), w++;
      }
    } else if (w > I)
      for (; w <= z; )
        ke(f[w], k, v, !0), w++;
    else {
      const B = w, V = w, Z = /* @__PURE__ */ new Map();
      for (w = V; w <= I; w++) {
        const ae = h[w] = E ? it(h[w]) : qe(h[w]);
        ae.key != null && Z.set(ae.key, w);
      }
      let Y, ue = 0;
      const be = I - V + 1;
      let Je = !1, Vt = 0;
      const rt = new Array(be);
      for (w = 0; w < be; w++)
        rt[w] = 0;
      for (w = B; w <= z; w++) {
        const ae = f[w];
        if (ue >= be) {
          ke(ae, k, v, !0);
          continue;
        }
        let we;
        if (ae.key != null)
          we = Z.get(ae.key);
        else
          for (Y = V; Y <= I; Y++)
            if (rt[Y - V] === 0 && Zt(ae, h[Y])) {
              we = Y;
              break;
            }
        we === void 0 ? ke(ae, k, v, !0) : (rt[we - V] = w + 1, we >= Vt ? Vt = we : Je = !0, S(
          ae,
          h[we],
          x,
          null,
          k,
          v,
          D,
          y,
          E
        ), ue++);
      }
      const $t = Je ? gs(rt) : Ot;
      for (Y = $t.length - 1, w = be - 1; w >= 0; w--) {
        const ae = V + w, we = h[ae], Wt = ae + 1 < T ? h[ae + 1].el : g;
        rt[w] === 0 ? S(
          null,
          we,
          x,
          Wt,
          k,
          v,
          D,
          y,
          E
        ) : Je && (Y < 0 || w !== $t[Y] ? Be(we, x, Wt, 2) : Y--);
      }
    }
  }, Be = (f, h, x, g, k = null) => {
    const { el: v, type: D, transition: y, children: E, shapeFlag: w } = f;
    if (w & 6) {
      Be(f.component.subTree, h, x, g);
      return;
    }
    if (w & 128) {
      f.suspense.move(h, x, g);
      return;
    }
    if (w & 64) {
      D.move(f, h, x, Ye);
      return;
    }
    if (D === le) {
      r(v, h, x);
      for (let z = 0; z < E.length; z++)
        Be(E[z], h, x, g);
      r(f.anchor, h, x);
      return;
    }
    if (D === or) {
      C(f, h, x);
      return;
    }
    if (g !== 2 && w & 1 && y)
      if (g === 0)
        y.beforeEnter(v), r(v, h, x), me(() => y.enter(v), k);
      else {
        const { leave: z, delayLeave: I, afterLeave: B } = y, V = () => r(v, h, x), Z = () => {
          z(v, () => {
            V(), B && B();
          });
        };
        I ? I(v, V, Z) : Z();
      }
    else
      r(v, h, x);
  }, ke = (f, h, x, g = !1, k = !1) => {
    const {
      type: v,
      props: D,
      ref: y,
      children: E,
      dynamicChildren: w,
      shapeFlag: T,
      patchFlag: z,
      dirs: I
    } = f;
    if (y != null && Er(y, null, x, f, !0), T & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const B = T & 1 && I, V = !Jt(f);
    let Z;
    if (V && (Z = D && D.onVnodeBeforeUnmount) && He(Z, h, f), T & 6)
      bu(f.component, x, g);
    else {
      if (T & 128) {
        f.suspense.unmount(x, g);
        return;
      }
      B && wt(f, null, h, "beforeUnmount"), T & 64 ? f.type.remove(
        f,
        h,
        x,
        k,
        Ye,
        g
      ) : w && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== le || z > 0 && z & 64) ? Se(
        w,
        h,
        x,
        !1,
        !0
      ) : (v === le && z & 384 || !k && T & 16) && Se(E, h, x), g && jt(f);
    }
    (V && (Z = D && D.onVnodeUnmounted) || B) && me(() => {
      Z && He(Z, h, f), B && wt(f, null, h, "unmounted");
    }, x);
  }, jt = (f) => {
    const { type: h, el: x, anchor: g, transition: k } = f;
    if (h === le) {
      pu(x, g);
      return;
    }
    if (h === or) {
      R(f);
      return;
    }
    const v = () => {
      n(x), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (f.shapeFlag & 1 && k && !k.persisted) {
      const { leave: D, delayLeave: y } = k, E = () => D(x, v);
      y ? y(f.el, v, E) : E();
    } else
      v();
  }, pu = (f, h) => {
    let x;
    for (; f !== h; )
      x = m(f), n(f), f = x;
    n(h);
  }, bu = (f, h, x) => {
    const { bum: g, scope: k, update: v, subTree: D, um: y } = f;
    g && Qu(g), k.stop(), v && (v.active = !1, ke(D, f, h, x)), y && me(y, h), me(() => {
      f.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve());
  }, Se = (f, h, x, g = !1, k = !1, v = 0) => {
    for (let D = v; D < f.length; D++)
      ke(f[D], h, x, g, k);
  }, kt = (f) => f.shapeFlag & 6 ? kt(f.component.subTree) : f.shapeFlag & 128 ? f.suspense.next() : m(f.anchor || f.el);
  let Dt = !1;
  const Ut = (f, h, x) => {
    f == null ? h._vnode && ke(h._vnode, null, null, !0) : S(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      x
    ), Dt || (Dt = !0, kn(), Lo(), Dt = !1), h._vnode = f;
  }, Ye = {
    p: S,
    um: ke,
    m: Be,
    r: jt,
    mt: Ke,
    mc: te,
    pc: K,
    pbc: Ae,
    n: kt,
    o: e
  };
  let St, Tt;
  return t && ([St, Tt] = t(
    Ye
  )), {
    render: Ut,
    hydrate: St,
    createApp: as(Ut, St)
  };
}
function nr({ type: e, props: t }, u) {
  return u === "svg" && e === "foreignObject" || u === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : u;
}
function yt({ effect: e, update: t }, u) {
  e.allowRecurse = t.allowRecurse = u;
}
function xs(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function r0(e, t, u = !1) {
  const r = e.children, n = t.children;
  if (H(r) && H(n))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let s = n[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = n[o] = it(n[o]), s.el = i.el), u || r0(i, s)), s.type === $u && (s.el = i.el);
    }
}
function gs(e) {
  const t = e.slice(), u = [0];
  let r, n, o, i, s;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const a = e[r];
    if (a !== 0) {
      if (n = u[u.length - 1], e[n] < a) {
        t[r] = n, u.push(r);
        continue;
      }
      for (o = 0, i = u.length - 1; o < i; )
        s = o + i >> 1, e[u[s]] < a ? o = s + 1 : i = s;
      a < e[u[o]] && (o > 0 && (t[r] = u[o - 1]), u[o] = r);
    }
  }
  for (o = u.length, i = u[o - 1]; o-- > 0; )
    u[o] = i, i = t[i];
  return u;
}
function n0(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : n0(t);
}
const ks = (e) => e.__isTeleport, le = Symbol.for("v-fgt"), $u = Symbol.for("v-txt"), pt = Symbol.for("v-cmt"), or = Symbol.for("v-stc"), Qt = [];
let Ie = null;
function F(e = !1) {
  Qt.push(Ie = e ? null : []);
}
function ws() {
  Qt.pop(), Ie = Qt[Qt.length - 1] || null;
}
let ru = 1;
function On(e) {
  ru += e;
}
function o0(e) {
  return e.dynamicChildren = ru > 0 ? Ie || Ot : null, ws(), ru > 0 && Ie && Ie.push(e), e;
}
function N(e, t, u, r, n, o) {
  return o0(
    p(
      e,
      t,
      u,
      r,
      n,
      o,
      !0
    )
  );
}
function _e(e, t, u, r, n) {
  return o0(
    Pe(
      e,
      t,
      u,
      r,
      n,
      !0
    )
  );
}
function i0(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wu = "__vInternal", s0 = ({ key: e }) => e ?? null, Au = ({
  ref: e,
  ref_key: t,
  ref_for: u
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || pe(e) || j(e) ? { i: he, r: e, k: t, f: !!u } : e : null);
function p(e, t = null, u = null, r = 0, n = null, o = e === le ? 0 : 1, i = !1, s = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && s0(t),
    ref: t && Au(t),
    scopeId: qo,
    slotScopeIds: null,
    children: u,
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
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: he
  };
  return s ? (Gr(c, u), o & 128 && e.normalize(c)) : u && (c.shapeFlag |= ne(u) ? 8 : 16), ru > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ie.push(c), c;
}
const Pe = ys;
function ys(e, t = null, u = null, r = 0, n = null, o = !1) {
  if ((!e || e === Ni) && (e = pt), i0(e)) {
    const s = Lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return u && Gr(s, u), ru > 0 && !o && Ie && (s.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = s : Ie.push(s)), s.patchFlag |= -2, s;
  }
  if (Ms(e) && (e = e.__vccOpts), t) {
    t = vs(t);
    let { class: s, style: c } = t;
    s && !ne(s) && (t.class = lt(s)), ee(c) && (To(c) && !H(c) && (c = se({}, c)), t.style = Pr(c));
  }
  const i = ne(e) ? 1 : Bi(e) ? 128 : ks(e) ? 64 : ee(e) ? 4 : j(e) ? 2 : 0;
  return p(
    e,
    t,
    u,
    r,
    n,
    i,
    o,
    !0
  );
}
function vs(e) {
  return e ? To(e) || Wu in e ? se({}, e) : e : null;
}
function Lt(e, t, u = !1) {
  const { props: r, ref: n, patchFlag: o, children: i } = e, s = t ? Cs(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: s,
    key: s && s0(s),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      u && n ? H(n) ? n.concat(Au(t)) : [n, Au(t)] : Au(t)
    ) : n,
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
    patchFlag: t && e.type !== le ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Lt(e.ssContent),
    ssFallback: e.ssFallback && Lt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function vt(e = " ", t = 0) {
  return Pe($u, null, e, t);
}
function q(e = "", t = !1) {
  return t ? (F(), _e(pt, null, e)) : Pe(pt, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean" ? Pe(pt) : H(e) ? Pe(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? it(e) : Pe($u, null, String(e));
}
function it(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Lt(e);
}
function Gr(e, t) {
  let u = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (H(t))
    u = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), Gr(e, n()), n._c && (n._d = !0));
      return;
    } else {
      u = 32;
      const n = t._;
      !n && !(Wu in t) ? t._ctx = he : n === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    j(t) ? (t = { default: t, _ctx: he }, u = 32) : (t = String(t), r & 64 ? (u = 16, t = [vt(t)]) : u = 8);
  e.children = t, e.shapeFlag |= u;
}
function Cs(...e) {
  const t = {};
  for (let u = 0; u < e.length; u++) {
    const r = e[u];
    for (const n in r)
      if (n === "class")
        t.class !== r.class && (t.class = lt([t.class, r.class]));
      else if (n === "style")
        t.style = Pr([t.style, r.style]);
      else if (Nu(n)) {
        const o = t[n], i = r[n];
        i && o !== i && !(H(o) && o.includes(i)) && (t[n] = o ? [].concat(o, i) : i);
      } else
        n !== "" && (t[n] = r[n]);
  }
  return t;
}
function He(e, t, u, r = null) {
  Me(e, t, 7, [
    u,
    r
  ]);
}
const Es = Jo();
let As = 0;
function Ds(e, t, u) {
  const r = e.type, n = (t ? t.appContext : e.appContext) || Es, o = {
    uid: As++,
    vnode: e,
    type: r,
    parent: t,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new G0(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(n.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Qo(r, n),
    emitsOptions: Ho(r, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: u,
    suspenseId: u ? u.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Oi.bind(null, o), e.ce && e.ce(o), o;
}
let ce = null, Iu, Ar;
{
  const e = po(), t = (u, r) => {
    let n;
    return (n = e[u]) || (n = e[u] = []), n.push(r), (o) => {
      n.length > 1 ? n.forEach((i) => i(o)) : n[0](o);
    };
  };
  Iu = t(
    "__VUE_INSTANCE_SETTERS__",
    (u) => ce = u
  ), Ar = t(
    "__VUE_SSR_SETTERS__",
    (u) => Zu = u
  );
}
const au = (e) => {
  const t = ce;
  return Iu(e), e.scope.on(), () => {
    e.scope.off(), Iu(t);
  };
}, In = () => {
  ce && ce.scope.off(), Iu(null);
};
function c0(e) {
  return e.vnode.shapeFlag & 4;
}
let Zu = !1;
function Ss(e, t = !1) {
  t && Ar(t);
  const { props: u, children: r } = e.vnode, n = c0(e);
  fs(e, u, n, t), ps(e, r);
  const o = n ? Ts(e, t) : void 0;
  return t && Ar(!1), o;
}
function Ts(e, t) {
  const u = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Fo(new Proxy(e.ctx, us));
  const { setup: r } = u;
  if (r) {
    const n = e.setupContext = r.length > 1 ? Rs(e) : null, o = au(e);
    mt();
    const i = et(
      r,
      e,
      0,
      [
        e.props,
        n
      ]
    );
    if (_t(), o(), lo(i)) {
      if (i.then(In, In), t)
        return i.then((s) => {
          Mn(e, s, t);
        }).catch((s) => {
          ju(s, e, 0);
        });
      e.asyncDep = i;
    } else
      Mn(e, i, t);
  } else
    a0(e, t);
}
function Mn(e, t, u) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) && (e.setupState = Io(t)), a0(e, u);
}
let Pn;
function a0(e, t, u) {
  const r = e.type;
  if (!e.render) {
    if (!t && Pn && !r.render) {
      const n = r.template || Wr(e).template;
      if (n) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: s, compilerOptions: c } = r, a = se(
          se(
            {
              isCustomElement: o,
              delimiters: s
            },
            i
          ),
          c
        );
        r.render = Pn(n, a);
      }
    }
    e.render = r.render || ye;
  }
  {
    const n = au(e);
    mt();
    try {
      rs(e);
    } finally {
      _t(), n();
    }
  }
}
function Fs(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, u) {
        return xe(e, "get", "$attrs"), t[u];
      }
    }
  ));
}
function Rs(e) {
  const t = (u) => {
    e.exposed = u || {};
  };
  return {
    get attrs() {
      return Fs(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Io(Fo(e.exposed)), {
      get(t, u) {
        if (u in t)
          return t[u];
        if (u in Xt)
          return Xt[u](e);
      },
      has(t, u) {
        return u in t || u in Xt;
      }
    }));
}
const Os = /(?:^|[-_])(\w)/g, Is = (e) => e.replace(Os, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function l0(e, t = !0) {
  return j(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function f0(e, t, u = !1) {
  let r = l0(t);
  if (!r && t.__file) {
    const n = t.__file.match(/([^/\\]+)\.\w+$/);
    n && (r = n[1]);
  }
  if (!r && e && e.parent) {
    const n = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = n(
      e.components || e.parent.type.components
    ) || n(e.appContext.components);
  }
  return r ? Is(r) : u ? "App" : "Anonymous";
}
function Ms(e) {
  return j(e) && "__vccOpts" in e;
}
const Yr = (e, t) => _i(e, t, Zu), Ps = "3.4.12", zs = "http://www.w3.org/2000/svg", Ns = "http://www.w3.org/1998/Math/MathML", st = typeof document < "u" ? document : null, zn = st && /* @__PURE__ */ st.createElement("template"), Ls = {
  insert: (e, t, u) => {
    t.insertBefore(e, u || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, u, r) => {
    const n = t === "svg" ? st.createElementNS(zs, e) : t === "mathml" ? st.createElementNS(Ns, e) : st.createElement(e, u ? { is: u } : void 0);
    return e === "select" && r && r.multiple != null && n.setAttribute("multiple", r.multiple), n;
  },
  createText: (e) => st.createTextNode(e),
  createComment: (e) => st.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => st.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, u, r, n, o) {
    const i = u ? u.previousSibling : t.lastChild;
    if (n && (n === o || n.nextSibling))
      for (; t.insertBefore(n.cloneNode(!0), u), !(n === o || !(n = n.nextSibling)); )
        ;
    else {
      zn.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const s = zn.content;
      if (r === "svg" || r === "mathml") {
        const c = s.firstChild;
        for (; c.firstChild; )
          s.appendChild(c.firstChild);
        s.removeChild(c);
      }
      t.insertBefore(s, u);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      u ? u.previousSibling : t.lastChild
    ];
  }
}, Bs = Symbol("_vtc");
function Hs(e, t, u) {
  const r = e[Bs];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : u ? e.setAttribute("class", t) : e.className = t;
}
const qs = Symbol("_vod"), js = Symbol("");
function Us(e, t, u) {
  const r = e.style, n = r.display, o = ne(u);
  if (u && !o) {
    if (t && !ne(t))
      for (const i in t)
        u[i] == null && Dr(r, i, "");
    for (const i in u)
      Dr(r, i, u[i]);
  } else if (o) {
    if (t !== u) {
      const i = r[js];
      i && (u += ";" + i), r.cssText = u;
    }
  } else
    t && e.removeAttribute("style");
  qs in e && (r.display = n);
}
const Nn = /\s*!important$/;
function Dr(e, t, u) {
  if (H(u))
    u.forEach((r) => Dr(e, t, r));
  else if (u == null && (u = ""), t.startsWith("--"))
    e.setProperty(t, u);
  else {
    const r = Vs(e, t);
    Nn.test(u) ? e.setProperty(
      Oe(r),
      u.replace(Nn, ""),
      "important"
    ) : e[r] = u;
  }
}
const Ln = ["Webkit", "Moz", "ms"], ir = {};
function Vs(e, t) {
  const u = ir[t];
  if (u)
    return u;
  let r = ve(t);
  if (r !== "filter" && r in e)
    return ir[t] = r;
  r = Hu(r);
  for (let n = 0; n < Ln.length; n++) {
    const o = Ln[n] + r;
    if (o in e)
      return ir[t] = o;
  }
  return t;
}
const Bn = "http://www.w3.org/1999/xlink";
function $s(e, t, u, r, n) {
  if (r && t.startsWith("xlink:"))
    u == null ? e.removeAttributeNS(Bn, t.slice(6, t.length)) : e.setAttributeNS(Bn, t, u);
  else {
    const o = Z0(t);
    u == null || o && !bo(u) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : u);
  }
}
function Ws(e, t, u, r, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, n, o), e[t] = u ?? "";
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    e._value = u;
    const a = s === "OPTION" ? e.getAttribute("value") : e.value, l = u ?? "";
    a !== l && (e.value = l), u == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (u === "" || u == null) {
    const a = typeof e[t];
    a === "boolean" ? u = bo(u) : u == null && a === "string" ? (u = "", c = !0) : a === "number" && (u = 0, c = !0);
  }
  try {
    e[t] = u;
  } catch {
  }
  c && e.removeAttribute(t);
}
function Zs(e, t, u, r) {
  e.addEventListener(t, u, r);
}
function Gs(e, t, u, r) {
  e.removeEventListener(t, u, r);
}
const Hn = Symbol("_vei");
function Ks(e, t, u, r, n = null) {
  const o = e[Hn] || (e[Hn] = {}), i = o[t];
  if (r && i)
    i.value = r;
  else {
    const [s, c] = Ys(t);
    if (r) {
      const a = o[t] = Qs(r, n);
      Zs(e, s, a, c);
    } else
      i && (Gs(e, s, i, c), o[t] = void 0);
  }
}
const qn = /(?:Once|Passive|Capture)$/;
function Ys(e) {
  let t;
  if (qn.test(e)) {
    t = {};
    let r;
    for (; r = e.match(qn); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Oe(e.slice(2)), t];
}
let sr = 0;
const Js = /* @__PURE__ */ Promise.resolve(), Xs = () => sr || (Js.then(() => sr = 0), sr = Date.now());
function Qs(e, t) {
  const u = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= u.attached)
      return;
    Me(
      ec(r, u.value),
      t,
      5,
      [r]
    );
  };
  return u.value = e, u.attached = Xs(), u;
}
function ec(e, t) {
  if (H(t)) {
    const u = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      u.call(e), e._stopped = !0;
    }, t.map((r) => (n) => !n._stopped && r && r(n));
  } else
    return t;
}
const jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, tc = (e, t, u, r, n, o, i, s, c) => {
  const a = n === "svg";
  t === "class" ? Hs(e, r, a) : t === "style" ? Us(e, u, r) : Nu(t) ? Or(t) || Ks(e, t, u, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : uc(e, t, r, a)) ? Ws(
    e,
    t,
    r,
    o,
    i,
    s,
    c
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), $s(e, t, r, a));
};
function uc(e, t, u, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && jn(t) && j(u));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return jn(t) && ne(u) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function rc(e, t) {
  const u = /* @__PURE__ */ Vi(e);
  class r extends Jr {
    constructor(o) {
      super(u, o, t);
    }
  }
  return r.def = u, r;
}
const nc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Jr extends nc {
  constructor(t, u = {}, r) {
    super(), this._def = t, this._props = u, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), zo(() => {
      this._connected || (Vn(null, this.shadowRoot), this._instance = null);
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
      for (const n of r)
        this._setAttr(n.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (r, n = !1) => {
      const { props: o, styles: i } = r;
      let s;
      if (o && !H(o))
        for (const c in o) {
          const a = o[c];
          (a === Number || a && a.type === Number) && (c in this._props && (this._props[c] = fn(this._props[c])), (s || (s = /* @__PURE__ */ Object.create(null)))[ve(c)] = !0);
        }
      this._numberProps = s, n && this._resolveProps(r), this._applyStyles(i), this._update();
    }, u = this._def.__asyncLoader;
    u ? u().then((r) => t(r, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: u } = t, r = H(u) ? u : Object.keys(u || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && r.includes(n) && this._setProp(n, this[n], !0, !1);
    for (const n of r.map(ve))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(o) {
          this._setProp(n, o);
        }
      });
  }
  _setAttr(t) {
    let u = this.getAttribute(t);
    const r = ve(t);
    this._numberProps && this._numberProps[r] && (u = fn(u)), this._setProp(r, u, !1);
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
  _setProp(t, u, r = !0, n = !0) {
    u !== this._props[t] && (this._props[t] = u, n && this._instance && this._update(), r && (u === !0 ? this.setAttribute(Oe(t), "") : typeof u == "string" || typeof u == "number" ? this.setAttribute(Oe(t), u + "") : u || this.removeAttribute(Oe(t))));
  }
  _update() {
    Vn(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Pe(this._def, se({}, this._props));
    return this._instance || (t.ce = (u) => {
      this._instance = u, u.isCE = !0;
      const r = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: i
          })
        );
      };
      u.emit = (o, ...i) => {
        r(o, i), Oe(o) !== o && r(Oe(o), i);
      };
      let n = this;
      for (; n = n && (n.parentNode || n.host); )
        if (n instanceof Jr) {
          u.parent = n._instance, u.provides = n._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((u) => {
      const r = document.createElement("style");
      r.textContent = u, this.shadowRoot.appendChild(r);
    });
  }
}
const oc = /* @__PURE__ */ se({ patchProp: tc }, Ls);
let Un;
function ic() {
  return Un || (Un = ms(oc));
}
const Vn = (...e) => {
  ic().render(...e);
}, $n = {};
function sc(e) {
  let t = $n[e];
  if (t)
    return t;
  t = $n[e] = [];
  for (let u = 0; u < 128; u++) {
    const r = String.fromCharCode(u);
    t.push(r);
  }
  for (let u = 0; u < e.length; u++) {
    const r = e.charCodeAt(u);
    t[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
  }
  return t;
}
function Bt(e, t) {
  typeof t != "string" && (t = Bt.defaultChars);
  const u = sc(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    let n = "";
    for (let o = 0, i = r.length; o < i; o += 3) {
      const s = parseInt(r.slice(o + 1, o + 3), 16);
      if (s < 128) {
        n += u[s];
        continue;
      }
      if ((s & 224) === 192 && o + 3 < i) {
        const c = parseInt(r.slice(o + 4, o + 6), 16);
        if ((c & 192) === 128) {
          const a = s << 6 & 1984 | c & 63;
          a < 128 ? n += "��" : n += String.fromCharCode(a), o += 3;
          continue;
        }
      }
      if ((s & 240) === 224 && o + 6 < i) {
        const c = parseInt(r.slice(o + 4, o + 6), 16), a = parseInt(r.slice(o + 7, o + 9), 16);
        if ((c & 192) === 128 && (a & 192) === 128) {
          const l = s << 12 & 61440 | c << 6 & 4032 | a & 63;
          l < 2048 || l >= 55296 && l <= 57343 ? n += "���" : n += String.fromCharCode(l), o += 6;
          continue;
        }
      }
      if ((s & 248) === 240 && o + 9 < i) {
        const c = parseInt(r.slice(o + 4, o + 6), 16), a = parseInt(r.slice(o + 7, o + 9), 16), l = parseInt(r.slice(o + 10, o + 12), 16);
        if ((c & 192) === 128 && (a & 192) === 128 && (l & 192) === 128) {
          let d = s << 18 & 1835008 | c << 12 & 258048 | a << 6 & 4032 | l & 63;
          d < 65536 || d > 1114111 ? n += "����" : (d -= 65536, n += String.fromCharCode(55296 + (d >> 10), 56320 + (d & 1023))), o += 9;
          continue;
        }
      }
      n += "�";
    }
    return n;
  });
}
Bt.defaultChars = ";/?:@&=+$,#";
Bt.componentChars = "";
const Wn = {};
function cc(e) {
  let t = Wn[e];
  if (t)
    return t;
  t = Wn[e] = [];
  for (let u = 0; u < 128; u++) {
    const r = String.fromCharCode(u);
    /^[0-9a-z]$/i.test(r) ? t.push(r) : t.push("%" + ("0" + u.toString(16).toUpperCase()).slice(-2));
  }
  for (let u = 0; u < e.length; u++)
    t[e.charCodeAt(u)] = e[u];
  return t;
}
function lu(e, t, u) {
  typeof t != "string" && (u = t, t = lu.defaultChars), typeof u > "u" && (u = !0);
  const r = cc(t);
  let n = "";
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e.charCodeAt(o);
    if (u && s === 37 && o + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) {
      n += e.slice(o, o + 3), o += 2;
      continue;
    }
    if (s < 128) {
      n += r[s];
      continue;
    }
    if (s >= 55296 && s <= 57343) {
      if (s >= 55296 && s <= 56319 && o + 1 < i) {
        const c = e.charCodeAt(o + 1);
        if (c >= 56320 && c <= 57343) {
          n += encodeURIComponent(e[o] + e[o + 1]), o++;
          continue;
        }
      }
      n += "%EF%BF%BD";
      continue;
    }
    n += encodeURIComponent(e[o]);
  }
  return n;
}
lu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
lu.componentChars = "-_.!~*'()";
function Xr(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function Mu() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const ac = /^([a-z0-9.+-]+:)/i, lc = /:[0-9]*$/, fc = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, dc = ["<", ">", '"', "`", " ", "\r", `
`, "	"], hc = ["{", "}", "|", "\\", "^", "`"].concat(dc), pc = ["'"].concat(hc), Zn = ["%", "/", "?", ";", "#"].concat(pc), Gn = ["/", "?", "#"], bc = 255, Kn = /^[+a-z0-9A-Z_-]{0,63}$/, mc = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Yn = {
  javascript: !0,
  "javascript:": !0
}, Jn = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function Qr(e, t) {
  if (e && e instanceof Mu)
    return e;
  const u = new Mu();
  return u.parse(e, t), u;
}
Mu.prototype.parse = function(e, t) {
  let u, r, n, o = e;
  if (o = o.trim(), !t && e.split("#").length === 1) {
    const a = fc.exec(o);
    if (a)
      return this.pathname = a[1], a[2] && (this.search = a[2]), this;
  }
  let i = ac.exec(o);
  if (i && (i = i[0], u = i.toLowerCase(), this.protocol = i, o = o.substr(i.length)), (t || i || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (n = o.substr(0, 2) === "//", n && !(i && Yn[i]) && (o = o.substr(2), this.slashes = !0)), !Yn[i] && (n || i && !Jn[i])) {
    let a = -1;
    for (let b = 0; b < Gn.length; b++)
      r = o.indexOf(Gn[b]), r !== -1 && (a === -1 || r < a) && (a = r);
    let l, d;
    a === -1 ? d = o.lastIndexOf("@") : d = o.lastIndexOf("@", a), d !== -1 && (l = o.slice(0, d), o = o.slice(d + 1), this.auth = l), a = -1;
    for (let b = 0; b < Zn.length; b++)
      r = o.indexOf(Zn[b]), r !== -1 && (a === -1 || r < a) && (a = r);
    a === -1 && (a = o.length), o[a - 1] === ":" && a--;
    const m = o.slice(0, a);
    o = o.slice(a), this.parseHost(m), this.hostname = this.hostname || "";
    const _ = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!_) {
      const b = this.hostname.split(/\./);
      for (let S = 0, P = b.length; S < P; S++) {
        const L = b[S];
        if (L && !L.match(Kn)) {
          let U = "";
          for (let C = 0, R = L.length; C < R; C++)
            L.charCodeAt(C) > 127 ? U += "x" : U += L[C];
          if (!U.match(Kn)) {
            const C = b.slice(0, S), R = b.slice(S + 1), A = L.match(mc);
            A && (C.push(A[1]), R.unshift(A[2])), R.length && (o = R.join(".") + o), this.hostname = C.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > bc && (this.hostname = ""), _ && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const s = o.indexOf("#");
  s !== -1 && (this.hash = o.substr(s), o = o.slice(0, s));
  const c = o.indexOf("?");
  return c !== -1 && (this.search = o.substr(c), o = o.slice(0, c)), o && (this.pathname = o), Jn[u] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
Mu.prototype.parseHost = function(e) {
  let t = lc.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const _c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Bt,
  encode: lu,
  format: Xr,
  parse: Qr
}, Symbol.toStringTag, { value: "Module" })), d0 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, h0 = /[\0-\x1F\x7F-\x9F]/, xc = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, en = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, p0 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: d0,
  Cc: h0,
  Cf: xc,
  P: en,
  Z: p0
}, Symbol.toStringTag, { value: "Module" })), kc = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), wc = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var cr;
const yc = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), vc = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (cr = String.fromCodePoint) !== null && cr !== void 0 ? cr : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Cc(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = yc.get(e)) !== null && t !== void 0 ? t : e;
}
var ie;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(ie || (ie = {}));
const Ec = 32;
var ft;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(ft || (ft = {}));
function Sr(e) {
  return e >= ie.ZERO && e <= ie.NINE;
}
function Ac(e) {
  return e >= ie.UPPER_A && e <= ie.UPPER_F || e >= ie.LOWER_A && e <= ie.LOWER_F;
}
function Dc(e) {
  return e >= ie.UPPER_A && e <= ie.UPPER_Z || e >= ie.LOWER_A && e <= ie.LOWER_Z || Sr(e);
}
function Sc(e) {
  return e === ie.EQUALS || Dc(e);
}
var oe;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(oe || (oe = {}));
var at;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(at || (at = {}));
class Tc {
  constructor(t, u, r) {
    this.decodeTree = t, this.emitCodePoint = u, this.errors = r, this.state = oe.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = at.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = oe.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(t, u) {
    switch (this.state) {
      case oe.EntityStart:
        return t.charCodeAt(u) === ie.NUM ? (this.state = oe.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = oe.NamedEntity, this.stateNamedEntity(t, u));
      case oe.NumericStart:
        return this.stateNumericStart(t, u);
      case oe.NumericDecimal:
        return this.stateNumericDecimal(t, u);
      case oe.NumericHex:
        return this.stateNumericHex(t, u);
      case oe.NamedEntity:
        return this.stateNamedEntity(t, u);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(t, u) {
    return u >= t.length ? -1 : (t.charCodeAt(u) | Ec) === ie.LOWER_X ? (this.state = oe.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = oe.NumericDecimal, this.stateNumericDecimal(t, u));
  }
  addToNumericResult(t, u, r, n) {
    if (u !== r) {
      const o = r - u;
      this.result = this.result * Math.pow(n, o) + parseInt(t.substr(u, o), n), this.consumed += o;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(t, u) {
    const r = u;
    for (; u < t.length; ) {
      const n = t.charCodeAt(u);
      if (Sr(n) || Ac(n))
        u += 1;
      else
        return this.addToNumericResult(t, r, u, 16), this.emitNumericEntity(n, 3);
    }
    return this.addToNumericResult(t, r, u, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(t, u) {
    const r = u;
    for (; u < t.length; ) {
      const n = t.charCodeAt(u);
      if (Sr(n))
        u += 1;
      else
        return this.addToNumericResult(t, r, u, 10), this.emitNumericEntity(n, 2);
    }
    return this.addToNumericResult(t, r, u, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(t, u) {
    var r;
    if (this.consumed <= u)
      return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === ie.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === at.Strict)
      return 0;
    return this.emitCodePoint(Cc(this.result), this.consumed), this.errors && (t !== ie.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(t, u) {
    const { decodeTree: r } = this;
    let n = r[this.treeIndex], o = (n & ft.VALUE_LENGTH) >> 14;
    for (; u < t.length; u++, this.excess++) {
      const i = t.charCodeAt(u);
      if (this.treeIndex = Fc(r, n, this.treeIndex + Math.max(1, o), i), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === at.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        Sc(i)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (n = r[this.treeIndex], o = (n & ft.VALUE_LENGTH) >> 14, o !== 0) {
        if (i === ie.SEMI)
          return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
        this.decodeMode !== at.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var t;
    const { result: u, decodeTree: r } = this, n = (r[u] & ft.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(u, n, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(t, u, r) {
    const { decodeTree: n } = this;
    return this.emitCodePoint(u === 1 ? n[t] & ~ft.VALUE_LENGTH : n[t + 1], r), u === 3 && this.emitCodePoint(n[t + 2], r), r;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var t;
    switch (this.state) {
      case oe.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== at.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case oe.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case oe.NumericHex:
        return this.emitNumericEntity(0, 3);
      case oe.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case oe.EntityStart:
        return 0;
    }
  }
}
function b0(e) {
  let t = "";
  const u = new Tc(e, (r) => t += vc(r));
  return function(n, o) {
    let i = 0, s = 0;
    for (; (s = n.indexOf("&", s)) >= 0; ) {
      t += n.slice(i, s), u.startEntity(o);
      const a = u.write(
        n,
        // Skip the "&"
        s + 1
      );
      if (a < 0) {
        i = s + u.end();
        break;
      }
      i = s + a, s = a === 0 ? i + 1 : i;
    }
    const c = t + n.slice(i);
    return t = "", c;
  };
}
function Fc(e, t, u, r) {
  const n = (t & ft.BRANCH_LENGTH) >> 7, o = t & ft.JUMP_TABLE;
  if (n === 0)
    return o !== 0 && r === o ? u : -1;
  if (o) {
    const c = r - o;
    return c < 0 || c >= n ? -1 : e[u + c] - 1;
  }
  let i = u, s = i + n - 1;
  for (; i <= s; ) {
    const c = i + s >>> 1, a = e[c];
    if (a < r)
      i = c + 1;
    else if (a > r)
      s = c - 1;
    else
      return e[c + n];
  }
  return -1;
}
const Rc = b0(kc);
b0(wc);
function m0(e, t = at.Legacy) {
  return Rc(e, t);
}
function Oc(e) {
  return Object.prototype.toString.call(e);
}
function tn(e) {
  return Oc(e) === "[object String]";
}
const Ic = Object.prototype.hasOwnProperty;
function Mc(e, t) {
  return Ic.call(e, t);
}
function Gu(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    if (u) {
      if (typeof u != "object")
        throw new TypeError(u + "must be object");
      Object.keys(u).forEach(function(r) {
        e[r] = u[r];
      });
    }
  }), e;
}
function _0(e, t, u) {
  return [].concat(e.slice(0, t), u, e.slice(t + 1));
}
function un(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function Pu(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), u = 56320 + (e & 1023);
    return String.fromCharCode(t, u);
  }
  return String.fromCharCode(e);
}
const x0 = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Pc = /&([a-z#][a-z0-9]{1,31});/gi, zc = new RegExp(x0.source + "|" + Pc.source, "gi"), Nc = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Lc(e, t) {
  if (t.charCodeAt(0) === 35 && Nc.test(t)) {
    const r = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return un(r) ? Pu(r) : e;
  }
  const u = m0(e);
  return u !== e ? u : e;
}
function Bc(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(x0, "$1");
}
function nu(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(zc, function(t, u, r) {
    return u || Lc(t, r);
  });
}
const Hc = /[&<>"]/, qc = /[&<>"]/g, jc = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Uc(e) {
  return jc[e];
}
function bt(e) {
  return Hc.test(e) ? e.replace(qc, Uc) : e;
}
const Vc = /[.?*+^$[\]\\(){}|-]/g;
function $c(e) {
  return e.replace(Vc, "\\$&");
}
function X(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function ou(e) {
  if (e >= 8192 && e <= 8202)
    return !0;
  switch (e) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function iu(e) {
  return en.test(e);
}
function su(e) {
  switch (e) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Ku(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const Wc = { mdurl: _c, ucmicro: gc }, Zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: _0,
  assign: Gu,
  escapeHtml: bt,
  escapeRE: $c,
  fromCodePoint: Pu,
  has: Mc,
  isMdAsciiPunct: su,
  isPunctChar: iu,
  isSpace: X,
  isString: tn,
  isValidEntityCode: un,
  isWhiteSpace: ou,
  lib: Wc,
  normalizeReference: Ku,
  unescapeAll: nu,
  unescapeMd: Bc
}, Symbol.toStringTag, { value: "Module" }));
function Gc(e, t, u) {
  let r, n, o, i;
  const s = e.posMax, c = e.pos;
  for (e.pos = t + 1, r = 1; e.pos < s; ) {
    if (o = e.src.charCodeAt(e.pos), o === 93 && (r--, r === 0)) {
      n = !0;
      break;
    }
    if (i = e.pos, e.md.inline.skipToken(e), o === 91) {
      if (i === e.pos - 1)
        r++;
      else if (u)
        return e.pos = c, -1;
    }
  }
  let a = -1;
  return n && (a = e.pos), e.pos = c, a;
}
function Kc(e, t, u) {
  let r, n = t;
  const o = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (e.charCodeAt(n) === 60) {
    for (n++; n < u; ) {
      if (r = e.charCodeAt(n), r === 10 || r === 60)
        return o;
      if (r === 62)
        return o.pos = n + 1, o.str = nu(e.slice(t + 1, n)), o.ok = !0, o;
      if (r === 92 && n + 1 < u) {
        n += 2;
        continue;
      }
      n++;
    }
    return o;
  }
  let i = 0;
  for (; n < u && (r = e.charCodeAt(n), !(r === 32 || r < 32 || r === 127)); ) {
    if (r === 92 && n + 1 < u) {
      if (e.charCodeAt(n + 1) === 32)
        break;
      n += 2;
      continue;
    }
    if (r === 40 && (i++, i > 32))
      return o;
    if (r === 41) {
      if (i === 0)
        break;
      i--;
    }
    n++;
  }
  return t === n || i !== 0 || (o.str = nu(e.slice(t, n)), o.pos = n, o.ok = !0), o;
}
function Yc(e, t, u) {
  let r, n, o = 0, i = t;
  const s = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (i >= u || (n = e.charCodeAt(i), n !== 34 && n !== 39 && n !== 40))
    return s;
  for (i++, n === 40 && (n = 41); i < u; ) {
    if (r = e.charCodeAt(i), r === n)
      return s.pos = i + 1, s.lines = o, s.str = nu(e.slice(t + 1, i)), s.ok = !0, s;
    if (r === 40 && n === 41)
      return s;
    r === 10 ? o++ : r === 92 && i + 1 < u && (i++, e.charCodeAt(i) === 10 && o++), i++;
  }
  return s;
}
const Jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Kc,
  parseLinkLabel: Gc,
  parseLinkTitle: Yc
}, Symbol.toStringTag, { value: "Module" })), $e = {};
$e.code_inline = function(e, t, u, r, n) {
  const o = e[t];
  return "<code" + n.renderAttrs(o) + ">" + bt(o.content) + "</code>";
};
$e.code_block = function(e, t, u, r, n) {
  const o = e[t];
  return "<pre" + n.renderAttrs(o) + "><code>" + bt(e[t].content) + `</code></pre>
`;
};
$e.fence = function(e, t, u, r, n) {
  const o = e[t], i = o.info ? nu(o.info).trim() : "";
  let s = "", c = "";
  if (i) {
    const l = i.split(/(\s+)/g);
    s = l[0], c = l.slice(2).join("");
  }
  let a;
  if (u.highlight ? a = u.highlight(o.content, s, c) || bt(o.content) : a = bt(o.content), a.indexOf("<pre") === 0)
    return a + `
`;
  if (i) {
    const l = o.attrIndex("class"), d = o.attrs ? o.attrs.slice() : [];
    l < 0 ? d.push(["class", u.langPrefix + s]) : (d[l] = d[l].slice(), d[l][1] += " " + u.langPrefix + s);
    const m = {
      attrs: d
    };
    return `<pre><code${n.renderAttrs(m)}>${a}</code></pre>
`;
  }
  return `<pre><code${n.renderAttrs(o)}>${a}</code></pre>
`;
};
$e.image = function(e, t, u, r, n) {
  const o = e[t];
  return o.attrs[o.attrIndex("alt")][1] = n.renderInlineAsText(o.children, u, r), n.renderToken(e, t, u);
};
$e.hardbreak = function(e, t, u) {
  return u.xhtmlOut ? `<br />
` : `<br>
`;
};
$e.softbreak = function(e, t, u) {
  return u.breaks ? u.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
$e.text = function(e, t) {
  return bt(e[t].content);
};
$e.html_block = function(e, t) {
  return e[t].content;
};
$e.html_inline = function(e, t) {
  return e[t].content;
};
function qt() {
  this.rules = Gu({}, $e);
}
qt.prototype.renderAttrs = function(t) {
  let u, r, n;
  if (!t.attrs)
    return "";
  for (n = "", u = 0, r = t.attrs.length; u < r; u++)
    n += " " + bt(t.attrs[u][0]) + '="' + bt(t.attrs[u][1]) + '"';
  return n;
};
qt.prototype.renderToken = function(t, u, r) {
  const n = t[u];
  let o = "";
  if (n.hidden)
    return "";
  n.block && n.nesting !== -1 && u && t[u - 1].hidden && (o += `
`), o += (n.nesting === -1 ? "</" : "<") + n.tag, o += this.renderAttrs(n), n.nesting === 0 && r.xhtmlOut && (o += " /");
  let i = !1;
  if (n.block && (i = !0, n.nesting === 1 && u + 1 < t.length)) {
    const s = t[u + 1];
    (s.type === "inline" || s.hidden || s.nesting === -1 && s.tag === n.tag) && (i = !1);
  }
  return o += i ? `>
` : ">", o;
};
qt.prototype.renderInline = function(e, t, u) {
  let r = "";
  const n = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o].type;
    typeof n[s] < "u" ? r += n[s](e, o, t, u, this) : r += this.renderToken(e, o, t);
  }
  return r;
};
qt.prototype.renderInlineAsText = function(e, t, u) {
  let r = "";
  for (let n = 0, o = e.length; n < o; n++)
    switch (e[n].type) {
      case "text":
        r += e[n].content;
        break;
      case "image":
        r += this.renderInlineAsText(e[n].children, t, u);
        break;
      case "html_inline":
      case "html_block":
        r += e[n].content;
        break;
      case "softbreak":
      case "hardbreak":
        r += `
`;
        break;
    }
  return r;
};
qt.prototype.render = function(e, t, u) {
  let r = "";
  const n = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o].type;
    s === "inline" ? r += this.renderInline(e[o].children, t, u) : typeof n[s] < "u" ? r += n[s](e, o, t, u, this) : r += this.renderToken(e, o, t, u);
  }
  return r;
};
function ge() {
  this.__rules__ = [], this.__cache__ = null;
}
ge.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
ge.prototype.__compile__ = function() {
  const e = this, t = [""];
  e.__rules__.forEach(function(u) {
    u.enabled && u.alt.forEach(function(r) {
      t.indexOf(r) < 0 && t.push(r);
    });
  }), e.__cache__ = {}, t.forEach(function(u) {
    e.__cache__[u] = [], e.__rules__.forEach(function(r) {
      r.enabled && (u && r.alt.indexOf(u) < 0 || e.__cache__[u].push(r.fn));
    });
  });
};
ge.prototype.at = function(e, t, u) {
  const r = this.__find__(e), n = u || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[r].fn = t, this.__rules__[r].alt = n.alt || [], this.__cache__ = null;
};
ge.prototype.before = function(e, t, u, r) {
  const n = this.__find__(e), o = r || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(n, 0, {
    name: t,
    enabled: !0,
    fn: u,
    alt: o.alt || []
  }), this.__cache__ = null;
};
ge.prototype.after = function(e, t, u, r) {
  const n = this.__find__(e), o = r || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(n + 1, 0, {
    name: t,
    enabled: !0,
    fn: u,
    alt: o.alt || []
  }), this.__cache__ = null;
};
ge.prototype.push = function(e, t, u) {
  const r = u || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: r.alt || []
  }), this.__cache__ = null;
};
ge.prototype.enable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const u = [];
  return e.forEach(function(r) {
    const n = this.__find__(r);
    if (n < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[n].enabled = !0, u.push(r);
  }, this), this.__cache__ = null, u;
};
ge.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(u) {
    u.enabled = !1;
  }), this.enable(e, t);
};
ge.prototype.disable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const u = [];
  return e.forEach(function(r) {
    const n = this.__find__(r);
    if (n < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[n].enabled = !1, u.push(r);
  }, this), this.__cache__ = null, u;
};
ge.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function ze(e, t, u) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = u, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
ze.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const u = this.attrs;
  for (let r = 0, n = u.length; r < n; r++)
    if (u[r][0] === t)
      return r;
  return -1;
};
ze.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
ze.prototype.attrSet = function(t, u) {
  const r = this.attrIndex(t), n = [t, u];
  r < 0 ? this.attrPush(n) : this.attrs[r] = n;
};
ze.prototype.attrGet = function(t) {
  const u = this.attrIndex(t);
  let r = null;
  return u >= 0 && (r = this.attrs[u][1]), r;
};
ze.prototype.attrJoin = function(t, u) {
  const r = this.attrIndex(t);
  r < 0 ? this.attrPush([t, u]) : this.attrs[r][1] = this.attrs[r][1] + " " + u;
};
function g0(e, t, u) {
  this.src = e, this.env = u, this.tokens = [], this.inlineMode = !1, this.md = t;
}
g0.prototype.Token = ze;
const Xc = /\r\n?|\n/g, Qc = /\0/g;
function ea(e) {
  let t;
  t = e.src.replace(Xc, `
`), t = t.replace(Qc, "�"), e.src = t;
}
function ta(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function ua(e) {
  const t = e.tokens;
  for (let u = 0, r = t.length; u < r; u++) {
    const n = t[u];
    n.type === "inline" && e.md.inline.parse(n.content, e.md, e.env, n.children);
  }
}
function ra(e) {
  return /^<a[>\s]/i.test(e);
}
function na(e) {
  return /^<\/a\s*>/i.test(e);
}
function oa(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let u = 0, r = t.length; u < r; u++) {
      if (t[u].type !== "inline" || !e.md.linkify.pretest(t[u].content))
        continue;
      let n = t[u].children, o = 0;
      for (let i = n.length - 1; i >= 0; i--) {
        const s = n[i];
        if (s.type === "link_close") {
          for (i--; n[i].level !== s.level && n[i].type !== "link_open"; )
            i--;
          continue;
        }
        if (s.type === "html_inline" && (ra(s.content) && o > 0 && o--, na(s.content) && o++), !(o > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
          const c = s.content;
          let a = e.md.linkify.match(c);
          const l = [];
          let d = s.level, m = 0;
          a.length > 0 && a[0].index === 0 && i > 0 && n[i - 1].type === "text_special" && (a = a.slice(1));
          for (let _ = 0; _ < a.length; _++) {
            const b = a[_].url, S = e.md.normalizeLink(b);
            if (!e.md.validateLink(S))
              continue;
            let P = a[_].text;
            a[_].schema ? a[_].schema === "mailto:" && !/^mailto:/i.test(P) ? P = e.md.normalizeLinkText("mailto:" + P).replace(/^mailto:/, "") : P = e.md.normalizeLinkText(P) : P = e.md.normalizeLinkText("http://" + P).replace(/^http:\/\//, "");
            const L = a[_].index;
            if (L > m) {
              const A = new e.Token("text", "", 0);
              A.content = c.slice(m, L), A.level = d, l.push(A);
            }
            const U = new e.Token("link_open", "a", 1);
            U.attrs = [["href", S]], U.level = d++, U.markup = "linkify", U.info = "auto", l.push(U);
            const C = new e.Token("text", "", 0);
            C.content = P, C.level = d, l.push(C);
            const R = new e.Token("link_close", "a", -1);
            R.level = --d, R.markup = "linkify", R.info = "auto", l.push(R), m = a[_].lastIndex;
          }
          if (m < c.length) {
            const _ = new e.Token("text", "", 0);
            _.content = c.slice(m), _.level = d, l.push(_);
          }
          t[u].children = n = _0(n, i, l);
        }
      }
    }
}
const k0 = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, ia = /\((c|tm|r)\)/i, sa = /\((c|tm|r)\)/ig, ca = {
  c: "©",
  r: "®",
  tm: "™"
};
function aa(e, t) {
  return ca[t.toLowerCase()];
}
function la(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const r = e[u];
    r.type === "text" && !t && (r.content = r.content.replace(sa, aa)), r.type === "link_open" && r.info === "auto" && t--, r.type === "link_close" && r.info === "auto" && t++;
  }
}
function fa(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const r = e[u];
    r.type === "text" && !t && k0.test(r.content) && (r.content = r.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), r.type === "link_open" && r.info === "auto" && t--, r.type === "link_close" && r.info === "auto" && t++;
  }
}
function da(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (ia.test(e.tokens[t].content) && la(e.tokens[t].children), k0.test(e.tokens[t].content) && fa(e.tokens[t].children));
}
const ha = /['"]/, Xn = /['"]/g, Qn = "’";
function yu(e, t, u) {
  return e.slice(0, t) + u + e.slice(t + 1);
}
function pa(e, t) {
  let u;
  const r = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], i = e[n].level;
    for (u = r.length - 1; u >= 0 && !(r[u].level <= i); u--)
      ;
    if (r.length = u + 1, o.type !== "text")
      continue;
    let s = o.content, c = 0, a = s.length;
    e:
      for (; c < a; ) {
        Xn.lastIndex = c;
        const l = Xn.exec(s);
        if (!l)
          break;
        let d = !0, m = !0;
        c = l.index + 1;
        const _ = l[0] === "'";
        let b = 32;
        if (l.index - 1 >= 0)
          b = s.charCodeAt(l.index - 1);
        else
          for (u = n - 1; u >= 0 && !(e[u].type === "softbreak" || e[u].type === "hardbreak"); u--)
            if (e[u].content) {
              b = e[u].content.charCodeAt(e[u].content.length - 1);
              break;
            }
        let S = 32;
        if (c < a)
          S = s.charCodeAt(c);
        else
          for (u = n + 1; u < e.length && !(e[u].type === "softbreak" || e[u].type === "hardbreak"); u++)
            if (e[u].content) {
              S = e[u].content.charCodeAt(0);
              break;
            }
        const P = su(b) || iu(String.fromCharCode(b)), L = su(S) || iu(String.fromCharCode(S)), U = ou(b), C = ou(S);
        if (C ? d = !1 : L && (U || P || (d = !1)), U ? m = !1 : P && (C || L || (m = !1)), S === 34 && l[0] === '"' && b >= 48 && b <= 57 && (m = d = !1), d && m && (d = P, m = L), !d && !m) {
          _ && (o.content = yu(o.content, l.index, Qn));
          continue;
        }
        if (m)
          for (u = r.length - 1; u >= 0; u--) {
            let R = r[u];
            if (r[u].level < i)
              break;
            if (R.single === _ && r[u].level === i) {
              R = r[u];
              let A, O;
              _ ? (A = t.md.options.quotes[2], O = t.md.options.quotes[3]) : (A = t.md.options.quotes[0], O = t.md.options.quotes[1]), o.content = yu(o.content, l.index, O), e[R.token].content = yu(
                e[R.token].content,
                R.pos,
                A
              ), c += O.length - 1, R.token === n && (c += A.length - 1), s = o.content, a = s.length, r.length = u;
              continue e;
            }
          }
        d ? r.push({
          token: n,
          pos: l.index,
          single: _,
          level: i
        }) : m && _ && (o.content = yu(o.content, l.index, Qn));
      }
  }
}
function ba(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !ha.test(e.tokens[t].content) || pa(e.tokens[t].children, e);
}
function ma(e) {
  let t, u;
  const r = e.tokens, n = r.length;
  for (let o = 0; o < n; o++) {
    if (r[o].type !== "inline")
      continue;
    const i = r[o].children, s = i.length;
    for (t = 0; t < s; t++)
      i[t].type === "text_special" && (i[t].type = "text");
    for (t = u = 0; t < s; t++)
      i[t].type === "text" && t + 1 < s && i[t + 1].type === "text" ? i[t + 1].content = i[t].content + i[t + 1].content : (t !== u && (i[u] = i[t]), u++);
    t !== u && (i.length = u);
  }
}
const ar = [
  ["normalize", ea],
  ["block", ta],
  ["inline", ua],
  ["linkify", oa],
  ["replacements", da],
  ["smartquotes", ba],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", ma]
];
function rn() {
  this.ruler = new ge();
  for (let e = 0; e < ar.length; e++)
    this.ruler.push(ar[e][0], ar[e][1]);
}
rn.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let u = 0, r = t.length; u < r; u++)
    t[u](e);
};
rn.prototype.State = g0;
function We(e, t, u, r) {
  this.src = e, this.md = t, this.env = u, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const n = this.src;
  for (let o = 0, i = 0, s = 0, c = 0, a = n.length, l = !1; i < a; i++) {
    const d = n.charCodeAt(i);
    if (!l)
      if (X(d)) {
        s++, d === 9 ? c += 4 - c % 4 : c++;
        continue;
      } else
        l = !0;
    (d === 10 || i === a - 1) && (d !== 10 && i++, this.bMarks.push(o), this.eMarks.push(i), this.tShift.push(s), this.sCount.push(c), this.bsCount.push(0), l = !1, s = 0, c = 0, o = i + 1);
  }
  this.bMarks.push(n.length), this.eMarks.push(n.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
We.prototype.push = function(e, t, u) {
  const r = new ze(e, t, u);
  return r.block = !0, u < 0 && this.level--, r.level = this.level, u > 0 && this.level++, this.tokens.push(r), r;
};
We.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
We.prototype.skipEmptyLines = function(t) {
  for (let u = this.lineMax; t < u && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
We.prototype.skipSpaces = function(t) {
  for (let u = this.src.length; t < u; t++) {
    const r = this.src.charCodeAt(t);
    if (!X(r))
      break;
  }
  return t;
};
We.prototype.skipSpacesBack = function(t, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (!X(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
We.prototype.skipChars = function(t, u) {
  for (let r = this.src.length; t < r && this.src.charCodeAt(t) === u; t++)
    ;
  return t;
};
We.prototype.skipCharsBack = function(t, u, r) {
  if (t <= r)
    return t;
  for (; t > r; )
    if (u !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
We.prototype.getLines = function(t, u, r, n) {
  if (t >= u)
    return "";
  const o = new Array(u - t);
  for (let i = 0, s = t; s < u; s++, i++) {
    let c = 0;
    const a = this.bMarks[s];
    let l = a, d;
    for (s + 1 < u || n ? d = this.eMarks[s] + 1 : d = this.eMarks[s]; l < d && c < r; ) {
      const m = this.src.charCodeAt(l);
      if (X(m))
        m === 9 ? c += 4 - (c + this.bsCount[s]) % 4 : c++;
      else if (l - a < this.tShift[s])
        c++;
      else
        break;
      l++;
    }
    c > r ? o[i] = new Array(c - r + 1).join(" ") + this.src.slice(l, d) : o[i] = this.src.slice(l, d);
  }
  return o.join("");
};
We.prototype.Token = ze;
function lr(e, t) {
  const u = e.bMarks[t] + e.tShift[t], r = e.eMarks[t];
  return e.src.slice(u, r);
}
function eo(e) {
  const t = [], u = e.length;
  let r = 0, n = e.charCodeAt(r), o = !1, i = 0, s = "";
  for (; r < u; )
    n === 124 && (o ? (s += e.substring(i, r - 1), i = r) : (t.push(s + e.substring(i, r)), s = "", i = r + 1)), o = n === 92, r++, n = e.charCodeAt(r);
  return t.push(s + e.substring(i)), t;
}
function _a(e, t, u, r) {
  if (t + 2 > u)
    return !1;
  let n = t + 1;
  if (e.sCount[n] < e.blkIndent || e.sCount[n] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[n] + e.tShift[n];
  if (o >= e.eMarks[n])
    return !1;
  const i = e.src.charCodeAt(o++);
  if (i !== 124 && i !== 45 && i !== 58 || o >= e.eMarks[n])
    return !1;
  const s = e.src.charCodeAt(o++);
  if (s !== 124 && s !== 45 && s !== 58 && !X(s) || i === 45 && X(s))
    return !1;
  for (; o < e.eMarks[n]; ) {
    const C = e.src.charCodeAt(o);
    if (C !== 124 && C !== 45 && C !== 58 && !X(C))
      return !1;
    o++;
  }
  let c = lr(e, t + 1), a = c.split("|");
  const l = [];
  for (let C = 0; C < a.length; C++) {
    const R = a[C].trim();
    if (!R) {
      if (C === 0 || C === a.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(R))
      return !1;
    R.charCodeAt(R.length - 1) === 58 ? l.push(R.charCodeAt(0) === 58 ? "center" : "right") : R.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (c = lr(e, t).trim(), c.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  a = eo(c), a.length && a[0] === "" && a.shift(), a.length && a[a.length - 1] === "" && a.pop();
  const d = a.length;
  if (d === 0 || d !== l.length)
    return !1;
  if (r)
    return !0;
  const m = e.parentType;
  e.parentType = "table";
  const _ = e.md.block.ruler.getRules("blockquote"), b = e.push("table_open", "table", 1), S = [t, 0];
  b.map = S;
  const P = e.push("thead_open", "thead", 1);
  P.map = [t, t + 1];
  const L = e.push("tr_open", "tr", 1);
  L.map = [t, t + 1];
  for (let C = 0; C < a.length; C++) {
    const R = e.push("th_open", "th", 1);
    l[C] && (R.attrs = [["style", "text-align:" + l[C]]]);
    const A = e.push("inline", "", 0);
    A.content = a[C].trim(), A.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let U;
  for (n = t + 2; n < u && !(e.sCount[n] < e.blkIndent); n++) {
    let C = !1;
    for (let A = 0, O = _.length; A < O; A++)
      if (_[A](e, n, u, !0)) {
        C = !0;
        break;
      }
    if (C || (c = lr(e, n).trim(), !c) || e.sCount[n] - e.blkIndent >= 4)
      break;
    if (a = eo(c), a.length && a[0] === "" && a.shift(), a.length && a[a.length - 1] === "" && a.pop(), n === t + 2) {
      const A = e.push("tbody_open", "tbody", 1);
      A.map = U = [t + 2, 0];
    }
    const R = e.push("tr_open", "tr", 1);
    R.map = [n, n + 1];
    for (let A = 0; A < d; A++) {
      const O = e.push("td_open", "td", 1);
      l[A] && (O.attrs = [["style", "text-align:" + l[A]]]);
      const G = e.push("inline", "", 0);
      G.content = a[A] ? a[A].trim() : "", G.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return U && (e.push("tbody_close", "tbody", -1), U[1] = n), e.push("table_close", "table", -1), S[1] = n, e.parentType = m, e.line = n, !0;
}
function xa(e, t, u) {
  if (e.sCount[t] - e.blkIndent < 4)
    return !1;
  let r = t + 1, n = r;
  for (; r < u; ) {
    if (e.isEmpty(r)) {
      r++;
      continue;
    }
    if (e.sCount[r] - e.blkIndent >= 4) {
      r++, n = r;
      continue;
    }
    break;
  }
  e.line = n;
  const o = e.push("code_block", "code", 0);
  return o.content = e.getLines(t, n, 4 + e.blkIndent, !1) + `
`, o.map = [t, e.line], !0;
}
function ga(e, t, u, r) {
  let n = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || n + 3 > o)
    return !1;
  const i = e.src.charCodeAt(n);
  if (i !== 126 && i !== 96)
    return !1;
  let s = n;
  n = e.skipChars(n, i);
  let c = n - s;
  if (c < 3)
    return !1;
  const a = e.src.slice(s, n), l = e.src.slice(n, o);
  if (i === 96 && l.indexOf(String.fromCharCode(i)) >= 0)
    return !1;
  if (r)
    return !0;
  let d = t, m = !1;
  for (; d++, !(d >= u || (n = s = e.bMarks[d] + e.tShift[d], o = e.eMarks[d], n < o && e.sCount[d] < e.blkIndent)); )
    if (e.src.charCodeAt(n) === i && !(e.sCount[d] - e.blkIndent >= 4) && (n = e.skipChars(n, i), !(n - s < c) && (n = e.skipSpaces(n), !(n < o)))) {
      m = !0;
      break;
    }
  c = e.sCount[t], e.line = d + (m ? 1 : 0);
  const _ = e.push("fence", "code", 0);
  return _.info = l, _.content = e.getLines(t + 1, d, c, !0), _.markup = a, _.map = [t, e.line], !0;
}
function ka(e, t, u, r) {
  let n = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  const i = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(n) !== 62)
    return !1;
  if (r)
    return !0;
  const s = [], c = [], a = [], l = [], d = e.md.block.ruler.getRules("blockquote"), m = e.parentType;
  e.parentType = "blockquote";
  let _ = !1, b;
  for (b = t; b < u; b++) {
    const C = e.sCount[b] < e.blkIndent;
    if (n = e.bMarks[b] + e.tShift[b], o = e.eMarks[b], n >= o)
      break;
    if (e.src.charCodeAt(n++) === 62 && !C) {
      let A = e.sCount[b] + 1, O, G;
      e.src.charCodeAt(n) === 32 ? (n++, A++, G = !1, O = !0) : e.src.charCodeAt(n) === 9 ? (O = !0, (e.bsCount[b] + A) % 4 === 3 ? (n++, A++, G = !1) : G = !0) : O = !1;
      let te = A;
      for (s.push(e.bMarks[b]), e.bMarks[b] = n; n < o; ) {
        const Ee = e.src.charCodeAt(n);
        if (X(Ee))
          Ee === 9 ? te += 4 - (te + e.bsCount[b] + (G ? 1 : 0)) % 4 : te++;
        else
          break;
        n++;
      }
      _ = n >= o, c.push(e.bsCount[b]), e.bsCount[b] = e.sCount[b] + 1 + (O ? 1 : 0), a.push(e.sCount[b]), e.sCount[b] = te - A, l.push(e.tShift[b]), e.tShift[b] = n - e.bMarks[b];
      continue;
    }
    if (_)
      break;
    let R = !1;
    for (let A = 0, O = d.length; A < O; A++)
      if (d[A](e, b, u, !0)) {
        R = !0;
        break;
      }
    if (R) {
      e.lineMax = b, e.blkIndent !== 0 && (s.push(e.bMarks[b]), c.push(e.bsCount[b]), l.push(e.tShift[b]), a.push(e.sCount[b]), e.sCount[b] -= e.blkIndent);
      break;
    }
    s.push(e.bMarks[b]), c.push(e.bsCount[b]), l.push(e.tShift[b]), a.push(e.sCount[b]), e.sCount[b] = -1;
  }
  const S = e.blkIndent;
  e.blkIndent = 0;
  const P = e.push("blockquote_open", "blockquote", 1);
  P.markup = ">";
  const L = [t, 0];
  P.map = L, e.md.block.tokenize(e, t, b);
  const U = e.push("blockquote_close", "blockquote", -1);
  U.markup = ">", e.lineMax = i, e.parentType = m, L[1] = e.line;
  for (let C = 0; C < l.length; C++)
    e.bMarks[C + t] = s[C], e.tShift[C + t] = l[C], e.sCount[C + t] = a[C], e.bsCount[C + t] = c[C];
  return e.blkIndent = S, !0;
}
function wa(e, t, u, r) {
  const n = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[t] + e.tShift[t];
  const i = e.src.charCodeAt(o++);
  if (i !== 42 && i !== 45 && i !== 95)
    return !1;
  let s = 1;
  for (; o < n; ) {
    const a = e.src.charCodeAt(o++);
    if (a !== i && !X(a))
      return !1;
    a === i && s++;
  }
  if (s < 3)
    return !1;
  if (r)
    return !0;
  e.line = t + 1;
  const c = e.push("hr", "hr", 0);
  return c.map = [t, e.line], c.markup = Array(s + 1).join(String.fromCharCode(i)), !0;
}
function to(e, t) {
  const u = e.eMarks[t];
  let r = e.bMarks[t] + e.tShift[t];
  const n = e.src.charCodeAt(r++);
  if (n !== 42 && n !== 45 && n !== 43)
    return -1;
  if (r < u) {
    const o = e.src.charCodeAt(r);
    if (!X(o))
      return -1;
  }
  return r;
}
function uo(e, t) {
  const u = e.bMarks[t] + e.tShift[t], r = e.eMarks[t];
  let n = u;
  if (n + 1 >= r)
    return -1;
  let o = e.src.charCodeAt(n++);
  if (o < 48 || o > 57)
    return -1;
  for (; ; ) {
    if (n >= r)
      return -1;
    if (o = e.src.charCodeAt(n++), o >= 48 && o <= 57) {
      if (n - u >= 10)
        return -1;
      continue;
    }
    if (o === 41 || o === 46)
      break;
    return -1;
  }
  return n < r && (o = e.src.charCodeAt(n), !X(o)) ? -1 : n;
}
function ya(e, t) {
  const u = e.level + 2;
  for (let r = t + 2, n = e.tokens.length - 2; r < n; r++)
    e.tokens[r].level === u && e.tokens[r].type === "paragraph_open" && (e.tokens[r + 2].hidden = !0, e.tokens[r].hidden = !0, r += 2);
}
function va(e, t, u, r) {
  let n, o, i, s, c = t, a = !0;
  if (e.sCount[c] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[c] - e.listIndent >= 4 && e.sCount[c] < e.blkIndent)
    return !1;
  let l = !1;
  r && e.parentType === "paragraph" && e.sCount[c] >= e.blkIndent && (l = !0);
  let d, m, _;
  if ((_ = uo(e, c)) >= 0) {
    if (d = !0, i = e.bMarks[c] + e.tShift[c], m = Number(e.src.slice(i, _ - 1)), l && m !== 1)
      return !1;
  } else if ((_ = to(e, c)) >= 0)
    d = !1;
  else
    return !1;
  if (l && e.skipSpaces(_) >= e.eMarks[c])
    return !1;
  if (r)
    return !0;
  const b = e.src.charCodeAt(_ - 1), S = e.tokens.length;
  d ? (s = e.push("ordered_list_open", "ol", 1), m !== 1 && (s.attrs = [["start", m]])) : s = e.push("bullet_list_open", "ul", 1);
  const P = [c, 0];
  s.map = P, s.markup = String.fromCharCode(b);
  let L = !1;
  const U = e.md.block.ruler.getRules("list"), C = e.parentType;
  for (e.parentType = "list"; c < u; ) {
    o = _, n = e.eMarks[c];
    const R = e.sCount[c] + _ - (e.bMarks[c] + e.tShift[c]);
    let A = R;
    for (; o < n; ) {
      const De = e.src.charCodeAt(o);
      if (De === 9)
        A += 4 - (A + e.bsCount[c]) % 4;
      else if (De === 32)
        A++;
      else
        break;
      o++;
    }
    const O = o;
    let G;
    O >= n ? G = 1 : G = A - R, G > 4 && (G = 1);
    const te = R + G;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(b);
    const Ee = [c, 0];
    s.map = Ee, d && (s.info = e.src.slice(i, _ - 1));
    const Ae = e.tight, Ne = e.tShift[c], Ze = e.sCount[c], Ge = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = te, e.tight = !0, e.tShift[c] = O - e.bMarks[c], e.sCount[c] = A, O >= n && e.isEmpty(c + 1) ? e.line = Math.min(e.line + 2, u) : e.md.block.tokenize(e, c, u, !0), (!e.tight || L) && (a = !1), L = e.line - c > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = Ge, e.tShift[c] = Ne, e.sCount[c] = Ze, e.tight = Ae, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(b), c = e.line, Ee[1] = c, c >= u || e.sCount[c] < e.blkIndent || e.sCount[c] - e.blkIndent >= 4)
      break;
    let Ke = !1;
    for (let De = 0, re = U.length; De < re; De++)
      if (U[De](e, c, u, !0)) {
        Ke = !0;
        break;
      }
    if (Ke)
      break;
    if (d) {
      if (_ = uo(e, c), _ < 0)
        break;
      i = e.bMarks[c] + e.tShift[c];
    } else if (_ = to(e, c), _ < 0)
      break;
    if (b !== e.src.charCodeAt(_ - 1))
      break;
  }
  return d ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(b), P[1] = c, e.line = c, e.parentType = C, a && ya(e, S), !0;
}
function Ca(e, t, u, r) {
  let n = 0, o = e.bMarks[t] + e.tShift[t], i = e.eMarks[t], s = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(o) !== 91)
    return !1;
  for (; ++o < i; )
    if (e.src.charCodeAt(o) === 93 && e.src.charCodeAt(o - 1) !== 92) {
      if (o + 1 === i || e.src.charCodeAt(o + 1) !== 58)
        return !1;
      break;
    }
  const c = e.lineMax, a = e.md.block.ruler.getRules("reference"), l = e.parentType;
  for (e.parentType = "reference"; s < c && !e.isEmpty(s); s++) {
    if (e.sCount[s] - e.blkIndent > 3 || e.sCount[s] < 0)
      continue;
    let A = !1;
    for (let O = 0, G = a.length; O < G; O++)
      if (a[O](e, s, c, !0)) {
        A = !0;
        break;
      }
    if (A)
      break;
  }
  const d = e.getLines(t, s, e.blkIndent, !1).trim();
  i = d.length;
  let m = -1;
  for (o = 1; o < i; o++) {
    const A = d.charCodeAt(o);
    if (A === 91)
      return !1;
    if (A === 93) {
      m = o;
      break;
    } else
      A === 10 ? n++ : A === 92 && (o++, o < i && d.charCodeAt(o) === 10 && n++);
  }
  if (m < 0 || d.charCodeAt(m + 1) !== 58)
    return !1;
  for (o = m + 2; o < i; o++) {
    const A = d.charCodeAt(o);
    if (A === 10)
      n++;
    else if (!X(A))
      break;
  }
  const _ = e.md.helpers.parseLinkDestination(d, o, i);
  if (!_.ok)
    return !1;
  const b = e.md.normalizeLink(_.str);
  if (!e.md.validateLink(b))
    return !1;
  o = _.pos, n += _.lines;
  const S = o, P = n, L = o;
  for (; o < i; o++) {
    const A = d.charCodeAt(o);
    if (A === 10)
      n++;
    else if (!X(A))
      break;
  }
  const U = e.md.helpers.parseLinkTitle(d, o, i);
  let C;
  for (o < i && L !== o && U.ok ? (C = U.str, o = U.pos, n += U.lines) : (C = "", o = S, n = P); o < i; ) {
    const A = d.charCodeAt(o);
    if (!X(A))
      break;
    o++;
  }
  if (o < i && d.charCodeAt(o) !== 10 && C)
    for (C = "", o = S, n = P; o < i; ) {
      const A = d.charCodeAt(o);
      if (!X(A))
        break;
      o++;
    }
  if (o < i && d.charCodeAt(o) !== 10)
    return !1;
  const R = Ku(d.slice(1, m));
  return R ? (r || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[R] > "u" && (e.env.references[R] = { title: C, href: b }), e.parentType = l, e.line = t + n + 1), !0) : !1;
}
const Ea = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Aa = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Da = "[^\"'=<>`\\x00-\\x20]+", Sa = "'[^']*'", Ta = '"[^"]*"', Fa = "(?:" + Da + "|" + Sa + "|" + Ta + ")", Ra = "(?:\\s+" + Aa + "(?:\\s*=\\s*" + Fa + ")?)", w0 = "<[A-Za-z][A-Za-z0-9\\-]*" + Ra + "*\\s*\\/?>", y0 = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Oa = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", Ia = "<[?][\\s\\S]*?[?]>", Ma = "<![A-Z]+\\s+[^>]*>", Pa = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", za = new RegExp("^(?:" + w0 + "|" + y0 + "|" + Oa + "|" + Ia + "|" + Ma + "|" + Pa + ")"), Na = new RegExp("^(?:" + w0 + "|" + y0 + ")"), Ft = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Ea.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Na.source + "\\s*$"), /^$/, !1]
];
function La(e, t, u, r) {
  let n = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(n) !== 60)
    return !1;
  let i = e.src.slice(n, o), s = 0;
  for (; s < Ft.length && !Ft[s][0].test(i); s++)
    ;
  if (s === Ft.length)
    return !1;
  if (r)
    return Ft[s][2];
  let c = t + 1;
  if (!Ft[s][1].test(i)) {
    for (; c < u && !(e.sCount[c] < e.blkIndent); c++)
      if (n = e.bMarks[c] + e.tShift[c], o = e.eMarks[c], i = e.src.slice(n, o), Ft[s][1].test(i)) {
        i.length !== 0 && c++;
        break;
      }
  }
  e.line = c;
  const a = e.push("html_block", "", 0);
  return a.map = [t, c], a.content = e.getLines(t, c, e.blkIndent, !0), !0;
}
function Ba(e, t, u, r) {
  let n = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let i = e.src.charCodeAt(n);
  if (i !== 35 || n >= o)
    return !1;
  let s = 1;
  for (i = e.src.charCodeAt(++n); i === 35 && n < o && s <= 6; )
    s++, i = e.src.charCodeAt(++n);
  if (s > 6 || n < o && !X(i))
    return !1;
  if (r)
    return !0;
  o = e.skipSpacesBack(o, n);
  const c = e.skipCharsBack(o, 35, n);
  c > n && X(e.src.charCodeAt(c - 1)) && (o = c), e.line = t + 1;
  const a = e.push("heading_open", "h" + String(s), 1);
  a.markup = "########".slice(0, s), a.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = e.src.slice(n, o).trim(), l.map = [t, e.line], l.children = [];
  const d = e.push("heading_close", "h" + String(s), -1);
  return d.markup = "########".slice(0, s), !0;
}
function Ha(e, t, u) {
  const r = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  const n = e.parentType;
  e.parentType = "paragraph";
  let o = 0, i, s = t + 1;
  for (; s < u && !e.isEmpty(s); s++) {
    if (e.sCount[s] - e.blkIndent > 3)
      continue;
    if (e.sCount[s] >= e.blkIndent) {
      let _ = e.bMarks[s] + e.tShift[s];
      const b = e.eMarks[s];
      if (_ < b && (i = e.src.charCodeAt(_), (i === 45 || i === 61) && (_ = e.skipChars(_, i), _ = e.skipSpaces(_), _ >= b))) {
        o = i === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[s] < 0)
      continue;
    let m = !1;
    for (let _ = 0, b = r.length; _ < b; _++)
      if (r[_](e, s, u, !0)) {
        m = !0;
        break;
      }
    if (m)
      break;
  }
  if (!o)
    return !1;
  const c = e.getLines(t, s, e.blkIndent, !1).trim();
  e.line = s + 1;
  const a = e.push("heading_open", "h" + String(o), 1);
  a.markup = String.fromCharCode(i), a.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = c, l.map = [t, e.line - 1], l.children = [];
  const d = e.push("heading_close", "h" + String(o), -1);
  return d.markup = String.fromCharCode(i), e.parentType = n, !0;
}
function qa(e, t, u) {
  const r = e.md.block.ruler.getRules("paragraph"), n = e.parentType;
  let o = t + 1;
  for (e.parentType = "paragraph"; o < u && !e.isEmpty(o); o++) {
    if (e.sCount[o] - e.blkIndent > 3 || e.sCount[o] < 0)
      continue;
    let a = !1;
    for (let l = 0, d = r.length; l < d; l++)
      if (r[l](e, o, u, !0)) {
        a = !0;
        break;
      }
    if (a)
      break;
  }
  const i = e.getLines(t, o, e.blkIndent, !1).trim();
  e.line = o;
  const s = e.push("paragraph_open", "p", 1);
  s.map = [t, e.line];
  const c = e.push("inline", "", 0);
  return c.content = i, c.map = [t, e.line], c.children = [], e.push("paragraph_close", "p", -1), e.parentType = n, !0;
}
const vu = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", _a, ["paragraph", "reference"]],
  ["code", xa],
  ["fence", ga, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", ka, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", wa, ["paragraph", "reference", "blockquote", "list"]],
  ["list", va, ["paragraph", "reference", "blockquote"]],
  ["reference", Ca],
  ["html_block", La, ["paragraph", "reference", "blockquote"]],
  ["heading", Ba, ["paragraph", "reference", "blockquote"]],
  ["lheading", Ha],
  ["paragraph", qa]
];
function Yu() {
  this.ruler = new ge();
  for (let e = 0; e < vu.length; e++)
    this.ruler.push(vu[e][0], vu[e][1], { alt: (vu[e][2] || []).slice() });
}
Yu.prototype.tokenize = function(e, t, u) {
  const r = this.ruler.getRules(""), n = r.length, o = e.md.options.maxNesting;
  let i = t, s = !1;
  for (; i < u && (e.line = i = e.skipEmptyLines(i), !(i >= u || e.sCount[i] < e.blkIndent)); ) {
    if (e.level >= o) {
      e.line = u;
      break;
    }
    const c = e.line;
    let a = !1;
    for (let l = 0; l < n; l++)
      if (a = r[l](e, i, u, !1), a) {
        if (c >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!a)
      throw new Error("none of the block rules matched");
    e.tight = !s, e.isEmpty(e.line - 1) && (s = !0), i = e.line, i < u && e.isEmpty(i) && (s = !0, i++, e.line = i);
  }
};
Yu.prototype.parse = function(e, t, u, r) {
  if (!e)
    return;
  const n = new this.State(e, t, u, r);
  this.tokenize(n, n.line, n.lineMax);
};
Yu.prototype.State = We;
function fu(e, t, u, r) {
  this.src = e, this.env = u, this.md = t, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
fu.prototype.pushPending = function() {
  const e = new ze("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
fu.prototype.push = function(e, t, u) {
  this.pending && this.pushPending();
  const r = new ze(e, t, u);
  let n = null;
  return u < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, u > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], n = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(n), r;
};
fu.prototype.scanDelims = function(e, t) {
  let u, r, n = !0, o = !0;
  const i = this.posMax, s = this.src.charCodeAt(e), c = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let a = e;
  for (; a < i && this.src.charCodeAt(a) === s; )
    a++;
  const l = a - e, d = a < i ? this.src.charCodeAt(a) : 32, m = su(c) || iu(String.fromCharCode(c)), _ = su(d) || iu(String.fromCharCode(d)), b = ou(c), S = ou(d);
  return S ? n = !1 : _ && (b || m || (n = !1)), b ? o = !1 : m && (S || _ || (o = !1)), t ? (u = n, r = o) : (u = n && (!o || m), r = o && (!n || _)), { can_open: u, can_close: r, length: l };
};
fu.prototype.Token = ze;
function ja(e) {
  switch (e) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Ua(e, t) {
  let u = e.pos;
  for (; u < e.posMax && !ja(e.src.charCodeAt(u)); )
    u++;
  return u === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, u)), e.pos = u, !0);
}
const Va = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function $a(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0)
    return !1;
  const u = e.pos, r = e.posMax;
  if (u + 3 > r || e.src.charCodeAt(u) !== 58 || e.src.charCodeAt(u + 1) !== 47 || e.src.charCodeAt(u + 2) !== 47)
    return !1;
  const n = e.pending.match(Va);
  if (!n)
    return !1;
  const o = n[1], i = e.md.linkify.matchAtStart(e.src.slice(u - o.length));
  if (!i)
    return !1;
  let s = i.url;
  if (s.length <= o.length)
    return !1;
  s = s.replace(/\*+$/, "");
  const c = e.md.normalizeLink(s);
  if (!e.md.validateLink(c))
    return !1;
  if (!t) {
    e.pending = e.pending.slice(0, -o.length);
    const a = e.push("link_open", "a", 1);
    a.attrs = [["href", c]], a.markup = "linkify", a.info = "auto";
    const l = e.push("text", "", 0);
    l.content = e.md.normalizeLinkText(s);
    const d = e.push("link_close", "a", -1);
    d.markup = "linkify", d.info = "auto";
  }
  return e.pos += s.length - o.length, !0;
}
function Wa(e, t) {
  let u = e.pos;
  if (e.src.charCodeAt(u) !== 10)
    return !1;
  const r = e.pending.length - 1, n = e.posMax;
  if (!t)
    if (r >= 0 && e.pending.charCodeAt(r) === 32)
      if (r >= 1 && e.pending.charCodeAt(r - 1) === 32) {
        let o = r - 1;
        for (; o >= 1 && e.pending.charCodeAt(o - 1) === 32; )
          o--;
        e.pending = e.pending.slice(0, o), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (u++; u < n && X(e.src.charCodeAt(u)); )
    u++;
  return e.pos = u, !0;
}
const nn = [];
for (let e = 0; e < 256; e++)
  nn.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  nn[e.charCodeAt(0)] = 1;
});
function Za(e, t) {
  let u = e.pos;
  const r = e.posMax;
  if (e.src.charCodeAt(u) !== 92 || (u++, u >= r))
    return !1;
  let n = e.src.charCodeAt(u);
  if (n === 10) {
    for (t || e.push("hardbreak", "br", 0), u++; u < r && (n = e.src.charCodeAt(u), !!X(n)); )
      u++;
    return e.pos = u, !0;
  }
  let o = e.src[u];
  if (n >= 55296 && n <= 56319 && u + 1 < r) {
    const s = e.src.charCodeAt(u + 1);
    s >= 56320 && s <= 57343 && (o += e.src[u + 1], u++);
  }
  const i = "\\" + o;
  if (!t) {
    const s = e.push("text_special", "", 0);
    n < 256 && nn[n] !== 0 ? s.content = o : s.content = i, s.markup = i, s.info = "escape";
  }
  return e.pos = u + 1, !0;
}
function Ga(e, t) {
  let u = e.pos;
  if (e.src.charCodeAt(u) !== 96)
    return !1;
  const n = u;
  u++;
  const o = e.posMax;
  for (; u < o && e.src.charCodeAt(u) === 96; )
    u++;
  const i = e.src.slice(n, u), s = i.length;
  if (e.backticksScanned && (e.backticks[s] || 0) <= n)
    return t || (e.pending += i), e.pos += s, !0;
  let c = u, a;
  for (; (a = e.src.indexOf("`", c)) !== -1; ) {
    for (c = a + 1; c < o && e.src.charCodeAt(c) === 96; )
      c++;
    const l = c - a;
    if (l === s) {
      if (!t) {
        const d = e.push("code_inline", "code", 0);
        d.markup = i, d.content = e.src.slice(u, a).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = c, !0;
    }
    e.backticks[l] = a;
  }
  return e.backticksScanned = !0, t || (e.pending += i), e.pos += s, !0;
}
function Ka(e, t) {
  const u = e.pos, r = e.src.charCodeAt(u);
  if (t || r !== 126)
    return !1;
  const n = e.scanDelims(e.pos, !0);
  let o = n.length;
  const i = String.fromCharCode(r);
  if (o < 2)
    return !1;
  let s;
  o % 2 && (s = e.push("text", "", 0), s.content = i, o--);
  for (let c = 0; c < o; c += 2)
    s = e.push("text", "", 0), s.content = i + i, e.delimiters.push({
      marker: r,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: n.can_open,
      close: n.can_close
    });
  return e.pos += n.length, !0;
}
function ro(e, t) {
  let u;
  const r = [], n = t.length;
  for (let o = 0; o < n; o++) {
    const i = t[o];
    if (i.marker !== 126 || i.end === -1)
      continue;
    const s = t[i.end];
    u = e.tokens[i.token], u.type = "s_open", u.tag = "s", u.nesting = 1, u.markup = "~~", u.content = "", u = e.tokens[s.token], u.type = "s_close", u.tag = "s", u.nesting = -1, u.markup = "~~", u.content = "", e.tokens[s.token - 1].type === "text" && e.tokens[s.token - 1].content === "~" && r.push(s.token - 1);
  }
  for (; r.length; ) {
    const o = r.pop();
    let i = o + 1;
    for (; i < e.tokens.length && e.tokens[i].type === "s_close"; )
      i++;
    i--, o !== i && (u = e.tokens[i], e.tokens[i] = e.tokens[o], e.tokens[o] = u);
  }
}
function Ya(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  ro(e, e.delimiters);
  for (let r = 0; r < u; r++)
    t[r] && t[r].delimiters && ro(e, t[r].delimiters);
}
const v0 = {
  tokenize: Ka,
  postProcess: Ya
};
function Ja(e, t) {
  const u = e.pos, r = e.src.charCodeAt(u);
  if (t || r !== 95 && r !== 42)
    return !1;
  const n = e.scanDelims(e.pos, r === 42);
  for (let o = 0; o < n.length; o++) {
    const i = e.push("text", "", 0);
    i.content = String.fromCharCode(r), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: r,
      // Total length of these series of delimiters.
      //
      length: n.length,
      // A position of the token this delimiter corresponds to.
      //
      token: e.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: n.can_open,
      close: n.can_close
    });
  }
  return e.pos += n.length, !0;
}
function no(e, t) {
  const u = t.length;
  for (let r = u - 1; r >= 0; r--) {
    const n = t[r];
    if (n.marker !== 95 && n.marker !== 42 || n.end === -1)
      continue;
    const o = t[n.end], i = r > 0 && t[r - 1].end === n.end + 1 && // check that first two markers match and adjacent
    t[r - 1].marker === n.marker && t[r - 1].token === n.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[n.end + 1].token === o.token + 1, s = String.fromCharCode(n.marker), c = e.tokens[n.token];
    c.type = i ? "strong_open" : "em_open", c.tag = i ? "strong" : "em", c.nesting = 1, c.markup = i ? s + s : s, c.content = "";
    const a = e.tokens[o.token];
    a.type = i ? "strong_close" : "em_close", a.tag = i ? "strong" : "em", a.nesting = -1, a.markup = i ? s + s : s, a.content = "", i && (e.tokens[t[r - 1].token].content = "", e.tokens[t[n.end + 1].token].content = "", r--);
  }
}
function Xa(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  no(e, e.delimiters);
  for (let r = 0; r < u; r++)
    t[r] && t[r].delimiters && no(e, t[r].delimiters);
}
const C0 = {
  tokenize: Ja,
  postProcess: Xa
};
function Qa(e, t) {
  let u, r, n, o, i = "", s = "", c = e.pos, a = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, d = e.posMax, m = e.pos + 1, _ = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (_ < 0)
    return !1;
  let b = _ + 1;
  if (b < d && e.src.charCodeAt(b) === 40) {
    for (a = !1, b++; b < d && (u = e.src.charCodeAt(b), !(!X(u) && u !== 10)); b++)
      ;
    if (b >= d)
      return !1;
    if (c = b, n = e.md.helpers.parseLinkDestination(e.src, b, e.posMax), n.ok) {
      for (i = e.md.normalizeLink(n.str), e.md.validateLink(i) ? b = n.pos : i = "", c = b; b < d && (u = e.src.charCodeAt(b), !(!X(u) && u !== 10)); b++)
        ;
      if (n = e.md.helpers.parseLinkTitle(e.src, b, e.posMax), b < d && c !== b && n.ok)
        for (s = n.str, b = n.pos; b < d && (u = e.src.charCodeAt(b), !(!X(u) && u !== 10)); b++)
          ;
    }
    (b >= d || e.src.charCodeAt(b) !== 41) && (a = !0), b++;
  }
  if (a) {
    if (typeof e.env.references > "u")
      return !1;
    if (b < d && e.src.charCodeAt(b) === 91 ? (c = b + 1, b = e.md.helpers.parseLinkLabel(e, b), b >= 0 ? r = e.src.slice(c, b++) : b = _ + 1) : b = _ + 1, r || (r = e.src.slice(m, _)), o = e.env.references[Ku(r)], !o)
      return e.pos = l, !1;
    i = o.href, s = o.title;
  }
  if (!t) {
    e.pos = m, e.posMax = _;
    const S = e.push("link_open", "a", 1), P = [["href", i]];
    S.attrs = P, s && P.push(["title", s]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = b, e.posMax = d, !0;
}
function el(e, t) {
  let u, r, n, o, i, s, c, a, l = "";
  const d = e.pos, m = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const _ = e.pos + 2, b = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (b < 0)
    return !1;
  if (o = b + 1, o < m && e.src.charCodeAt(o) === 40) {
    for (o++; o < m && (u = e.src.charCodeAt(o), !(!X(u) && u !== 10)); o++)
      ;
    if (o >= m)
      return !1;
    for (a = o, s = e.md.helpers.parseLinkDestination(e.src, o, e.posMax), s.ok && (l = e.md.normalizeLink(s.str), e.md.validateLink(l) ? o = s.pos : l = ""), a = o; o < m && (u = e.src.charCodeAt(o), !(!X(u) && u !== 10)); o++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, o, e.posMax), o < m && a !== o && s.ok)
      for (c = s.str, o = s.pos; o < m && (u = e.src.charCodeAt(o), !(!X(u) && u !== 10)); o++)
        ;
    else
      c = "";
    if (o >= m || e.src.charCodeAt(o) !== 41)
      return e.pos = d, !1;
    o++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (o < m && e.src.charCodeAt(o) === 91 ? (a = o + 1, o = e.md.helpers.parseLinkLabel(e, o), o >= 0 ? n = e.src.slice(a, o++) : o = b + 1) : o = b + 1, n || (n = e.src.slice(_, b)), i = e.env.references[Ku(n)], !i)
      return e.pos = d, !1;
    l = i.href, c = i.title;
  }
  if (!t) {
    r = e.src.slice(_, b);
    const S = [];
    e.md.inline.parse(
      r,
      e.md,
      e.env,
      S
    );
    const P = e.push("image", "img", 0), L = [["src", l], ["alt", ""]];
    P.attrs = L, P.children = S, P.content = r, c && L.push(["title", c]);
  }
  return e.pos = o, e.posMax = m, !0;
}
const tl = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, ul = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function rl(e, t) {
  let u = e.pos;
  if (e.src.charCodeAt(u) !== 60)
    return !1;
  const r = e.pos, n = e.posMax;
  for (; ; ) {
    if (++u >= n)
      return !1;
    const i = e.src.charCodeAt(u);
    if (i === 60)
      return !1;
    if (i === 62)
      break;
  }
  const o = e.src.slice(r + 1, u);
  if (ul.test(o)) {
    const i = e.md.normalizeLink(o);
    if (!e.md.validateLink(i))
      return !1;
    if (!t) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto";
      const c = e.push("text", "", 0);
      c.content = e.md.normalizeLinkText(o);
      const a = e.push("link_close", "a", -1);
      a.markup = "autolink", a.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  if (tl.test(o)) {
    const i = e.md.normalizeLink("mailto:" + o);
    if (!e.md.validateLink(i))
      return !1;
    if (!t) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto";
      const c = e.push("text", "", 0);
      c.content = e.md.normalizeLinkText(o);
      const a = e.push("link_close", "a", -1);
      a.markup = "autolink", a.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  return !1;
}
function nl(e) {
  return /^<a[>\s]/i.test(e);
}
function ol(e) {
  return /^<\/a\s*>/i.test(e);
}
function il(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function sl(e, t) {
  if (!e.md.options.html)
    return !1;
  const u = e.posMax, r = e.pos;
  if (e.src.charCodeAt(r) !== 60 || r + 2 >= u)
    return !1;
  const n = e.src.charCodeAt(r + 1);
  if (n !== 33 && n !== 63 && n !== 47 && !il(n))
    return !1;
  const o = e.src.slice(r).match(za);
  if (!o)
    return !1;
  if (!t) {
    const i = e.push("html_inline", "", 0);
    i.content = o[0], nl(i.content) && e.linkLevel++, ol(i.content) && e.linkLevel--;
  }
  return e.pos += o[0].length, !0;
}
const cl = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, al = /^&([a-z][a-z0-9]{1,31});/i;
function ll(e, t) {
  const u = e.pos, r = e.posMax;
  if (e.src.charCodeAt(u) !== 38 || u + 1 >= r)
    return !1;
  if (e.src.charCodeAt(u + 1) === 35) {
    const o = e.src.slice(u).match(cl);
    if (o) {
      if (!t) {
        const i = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), s = e.push("text_special", "", 0);
        s.content = un(i) ? Pu(i) : Pu(65533), s.markup = o[0], s.info = "entity";
      }
      return e.pos += o[0].length, !0;
    }
  } else {
    const o = e.src.slice(u).match(al);
    if (o) {
      const i = m0(o[0]);
      if (i !== o[0]) {
        if (!t) {
          const s = e.push("text_special", "", 0);
          s.content = i, s.markup = o[0], s.info = "entity";
        }
        return e.pos += o[0].length, !0;
      }
    }
  }
  return !1;
}
function oo(e) {
  const t = {}, u = e.length;
  if (!u)
    return;
  let r = 0, n = -2;
  const o = [];
  for (let i = 0; i < u; i++) {
    const s = e[i];
    if (o.push(0), (e[r].marker !== s.marker || n !== s.token - 1) && (r = i), n = s.token, s.length = s.length || 0, !s.close)
      continue;
    t.hasOwnProperty(s.marker) || (t[s.marker] = [-1, -1, -1, -1, -1, -1]);
    const c = t[s.marker][(s.open ? 3 : 0) + s.length % 3];
    let a = r - o[r] - 1, l = a;
    for (; a > c; a -= o[a] + 1) {
      const d = e[a];
      if (d.marker === s.marker && d.open && d.end < 0) {
        let m = !1;
        if ((d.close || s.open) && (d.length + s.length) % 3 === 0 && (d.length % 3 !== 0 || s.length % 3 !== 0) && (m = !0), !m) {
          const _ = a > 0 && !e[a - 1].open ? o[a - 1] + 1 : 0;
          o[i] = i - a + _, o[a] = _, s.open = !1, d.end = i, d.close = !1, l = -1, n = -2;
          break;
        }
      }
    }
    l !== -1 && (t[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = l);
  }
}
function fl(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  oo(e.delimiters);
  for (let r = 0; r < u; r++)
    t[r] && t[r].delimiters && oo(t[r].delimiters);
}
function dl(e) {
  let t, u, r = 0;
  const n = e.tokens, o = e.tokens.length;
  for (t = u = 0; t < o; t++)
    n[t].nesting < 0 && r--, n[t].level = r, n[t].nesting > 0 && r++, n[t].type === "text" && t + 1 < o && n[t + 1].type === "text" ? n[t + 1].content = n[t].content + n[t + 1].content : (t !== u && (n[u] = n[t]), u++);
  t !== u && (n.length = u);
}
const fr = [
  ["text", Ua],
  ["linkify", $a],
  ["newline", Wa],
  ["escape", Za],
  ["backticks", Ga],
  ["strikethrough", v0.tokenize],
  ["emphasis", C0.tokenize],
  ["link", Qa],
  ["image", el],
  ["autolink", rl],
  ["html_inline", sl],
  ["entity", ll]
], dr = [
  ["balance_pairs", fl],
  ["strikethrough", v0.postProcess],
  ["emphasis", C0.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", dl]
];
function du() {
  this.ruler = new ge();
  for (let e = 0; e < fr.length; e++)
    this.ruler.push(fr[e][0], fr[e][1]);
  this.ruler2 = new ge();
  for (let e = 0; e < dr.length; e++)
    this.ruler2.push(dr[e][0], dr[e][1]);
}
du.prototype.skipToken = function(e) {
  const t = e.pos, u = this.ruler.getRules(""), r = u.length, n = e.md.options.maxNesting, o = e.cache;
  if (typeof o[t] < "u") {
    e.pos = o[t];
    return;
  }
  let i = !1;
  if (e.level < n) {
    for (let s = 0; s < r; s++)
      if (e.level++, i = u[s](e, !0), e.level--, i) {
        if (t >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  i || e.pos++, o[t] = e.pos;
};
du.prototype.tokenize = function(e) {
  const t = this.ruler.getRules(""), u = t.length, r = e.posMax, n = e.md.options.maxNesting;
  for (; e.pos < r; ) {
    const o = e.pos;
    let i = !1;
    if (e.level < n) {
      for (let s = 0; s < u; s++)
        if (i = t[s](e, !1), i) {
          if (o >= e.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (i) {
      if (e.pos >= r)
        break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
du.prototype.parse = function(e, t, u, r) {
  const n = new this.State(e, t, u, r);
  this.tokenize(n);
  const o = this.ruler2.getRules(""), i = o.length;
  for (let s = 0; s < i; s++)
    o[s](n);
};
du.prototype.State = fu;
function hl(e) {
  const t = {};
  e = e || {}, t.src_Any = d0.source, t.src_Cc = h0.source, t.src_Z = p0.source, t.src_P = en.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const u = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + u + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + u + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + u + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + u + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function Tr(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    u && Object.keys(u).forEach(function(r) {
      e[r] = u[r];
    });
  }), e;
}
function Ju(e) {
  return Object.prototype.toString.call(e);
}
function pl(e) {
  return Ju(e) === "[object String]";
}
function bl(e) {
  return Ju(e) === "[object Object]";
}
function ml(e) {
  return Ju(e) === "[object RegExp]";
}
function io(e) {
  return Ju(e) === "[object Function]";
}
function _l(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const E0 = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function xl(e) {
  return Object.keys(e || {}).reduce(function(t, u) {
    return t || E0.hasOwnProperty(u);
  }, !1);
}
const gl = {
  "http:": {
    validate: function(e, t, u) {
      const r = e.slice(t);
      return u.re.http || (u.re.http = new RegExp(
        "^\\/\\/" + u.re.src_auth + u.re.src_host_port_strict + u.re.src_path,
        "i"
      )), u.re.http.test(r) ? r.match(u.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, t, u) {
      const r = e.slice(t);
      return u.re.no_http || (u.re.no_http = new RegExp(
        "^" + u.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + u.re.src_domain + ")\\.)+" + u.re.src_domain_root + ")" + u.re.src_port + u.re.src_host_terminator + u.re.src_path,
        "i"
      )), u.re.no_http.test(r) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : r.match(u.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, t, u) {
      const r = e.slice(t);
      return u.re.mailto || (u.re.mailto = new RegExp(
        "^" + u.re.src_email_name + "@" + u.re.src_host_strict,
        "i"
      )), u.re.mailto.test(r) ? r.match(u.re.mailto)[0].length : 0;
    }
  }
}, kl = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", wl = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function yl(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function vl(e) {
  return function(t, u) {
    const r = t.slice(u);
    return e.test(r) ? r.match(e)[0].length : 0;
  };
}
function so() {
  return function(e, t) {
    t.normalize(e);
  };
}
function zu(e) {
  const t = e.re = hl(e.__opts__), u = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || u.push(kl), u.push(t.src_xn), t.src_tlds = u.join("|");
  function r(s) {
    return s.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(r(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(r(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(r(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(r(t.tpl_host_fuzzy_test), "i");
  const n = [];
  e.__compiled__ = {};
  function o(s, c) {
    throw new Error('(LinkifyIt) Invalid schema "' + s + '": ' + c);
  }
  Object.keys(e.__schemas__).forEach(function(s) {
    const c = e.__schemas__[s];
    if (c === null)
      return;
    const a = { validate: null, link: null };
    if (e.__compiled__[s] = a, bl(c)) {
      ml(c.validate) ? a.validate = vl(c.validate) : io(c.validate) ? a.validate = c.validate : o(s, c), io(c.normalize) ? a.normalize = c.normalize : c.normalize ? o(s, c) : a.normalize = so();
      return;
    }
    if (pl(c)) {
      n.push(s);
      return;
    }
    o(s, c);
  }), n.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: so() };
  const i = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map(_l).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), yl(e);
}
function Cl(e, t) {
  const u = e.__index__, r = e.__last_index__, n = e.__text_cache__.slice(u, r);
  this.schema = e.__schema__.toLowerCase(), this.index = u + t, this.lastIndex = r + t, this.raw = n, this.text = n, this.url = n;
}
function Fr(e, t) {
  const u = new Cl(e, t);
  return e.__compiled__[u.schema].normalize(u, e), u;
}
function Ce(e, t) {
  if (!(this instanceof Ce))
    return new Ce(e, t);
  t || xl(e) && (t = e, e = {}), this.__opts__ = Tr({}, E0, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Tr({}, gl, e), this.__compiled__ = {}, this.__tlds__ = wl, this.__tlds_replaced__ = !1, this.re = {}, zu(this);
}
Ce.prototype.add = function(t, u) {
  return this.__schemas__[t] = u, zu(this), this;
};
Ce.prototype.set = function(t) {
  return this.__opts__ = Tr(this.__opts__, t), this;
};
Ce.prototype.test = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return !1;
  let u, r, n, o, i, s, c, a, l;
  if (this.re.schema_test.test(t)) {
    for (c = this.re.schema_search, c.lastIndex = 0; (u = c.exec(t)) !== null; )
      if (o = this.testSchemaAt(t, u[2], c.lastIndex), o) {
        this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (a = t.search(this.re.host_fuzzy_test), a >= 0 && (this.__index__ < 0 || a < this.__index__) && (r = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = t.indexOf("@"), l >= 0 && (n = t.match(this.re.email_fuzzy)) !== null && (i = n.index + n[1].length, s = n.index + n[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = s))), this.__index__ >= 0;
};
Ce.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Ce.prototype.testSchemaAt = function(t, u, r) {
  return this.__compiled__[u.toLowerCase()] ? this.__compiled__[u.toLowerCase()].validate(t, r, this) : 0;
};
Ce.prototype.match = function(t) {
  const u = [];
  let r = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (u.push(Fr(this, r)), r = this.__last_index__);
  let n = r ? t.slice(r) : t;
  for (; this.test(n); )
    u.push(Fr(this, r)), n = n.slice(this.__last_index__), r += this.__last_index__;
  return u.length ? u : null;
};
Ce.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return null;
  const u = this.re.schema_at_start.exec(t);
  if (!u)
    return null;
  const r = this.testSchemaAt(t, u[2], u[0].length);
  return r ? (this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + r, Fr(this, 0)) : null;
};
Ce.prototype.tlds = function(t, u) {
  return t = Array.isArray(t) ? t : [t], u ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(r, n, o) {
    return r !== o[n - 1];
  }).reverse(), zu(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, zu(this), this);
};
Ce.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Ce.prototype.onCompile = function() {
};
const zt = 2147483647, Ue = 36, on = 1, cu = 26, El = 38, Al = 700, A0 = 72, D0 = 128, S0 = "-", Dl = /^xn--/, Sl = /[^\0-\x7F]/, Tl = /[\x2E\u3002\uFF0E\uFF61]/g, Fl = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, hr = Ue - on, Ve = Math.floor, pr = String.fromCharCode;
function ct(e) {
  throw new RangeError(Fl[e]);
}
function Rl(e, t) {
  const u = [];
  let r = e.length;
  for (; r--; )
    u[r] = t(e[r]);
  return u;
}
function T0(e, t) {
  const u = e.split("@");
  let r = "";
  u.length > 1 && (r = u[0] + "@", e = u[1]), e = e.replace(Tl, ".");
  const n = e.split("."), o = Rl(n, t).join(".");
  return r + o;
}
function F0(e) {
  const t = [];
  let u = 0;
  const r = e.length;
  for (; u < r; ) {
    const n = e.charCodeAt(u++);
    if (n >= 55296 && n <= 56319 && u < r) {
      const o = e.charCodeAt(u++);
      (o & 64512) == 56320 ? t.push(((n & 1023) << 10) + (o & 1023) + 65536) : (t.push(n), u--);
    } else
      t.push(n);
  }
  return t;
}
const Ol = (e) => String.fromCodePoint(...e), Il = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : Ue;
}, co = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, R0 = function(e, t, u) {
  let r = 0;
  for (e = u ? Ve(e / Al) : e >> 1, e += Ve(e / t); e > hr * cu >> 1; r += Ue)
    e = Ve(e / hr);
  return Ve(r + (hr + 1) * e / (e + El));
}, O0 = function(e) {
  const t = [], u = e.length;
  let r = 0, n = D0, o = A0, i = e.lastIndexOf(S0);
  i < 0 && (i = 0);
  for (let s = 0; s < i; ++s)
    e.charCodeAt(s) >= 128 && ct("not-basic"), t.push(e.charCodeAt(s));
  for (let s = i > 0 ? i + 1 : 0; s < u; ) {
    const c = r;
    for (let l = 1, d = Ue; ; d += Ue) {
      s >= u && ct("invalid-input");
      const m = Il(e.charCodeAt(s++));
      m >= Ue && ct("invalid-input"), m > Ve((zt - r) / l) && ct("overflow"), r += m * l;
      const _ = d <= o ? on : d >= o + cu ? cu : d - o;
      if (m < _)
        break;
      const b = Ue - _;
      l > Ve(zt / b) && ct("overflow"), l *= b;
    }
    const a = t.length + 1;
    o = R0(r - c, a, c == 0), Ve(r / a) > zt - n && ct("overflow"), n += Ve(r / a), r %= a, t.splice(r++, 0, n);
  }
  return String.fromCodePoint(...t);
}, I0 = function(e) {
  const t = [];
  e = F0(e);
  const u = e.length;
  let r = D0, n = 0, o = A0;
  for (const c of e)
    c < 128 && t.push(pr(c));
  const i = t.length;
  let s = i;
  for (i && t.push(S0); s < u; ) {
    let c = zt;
    for (const l of e)
      l >= r && l < c && (c = l);
    const a = s + 1;
    c - r > Ve((zt - n) / a) && ct("overflow"), n += (c - r) * a, r = c;
    for (const l of e)
      if (l < r && ++n > zt && ct("overflow"), l === r) {
        let d = n;
        for (let m = Ue; ; m += Ue) {
          const _ = m <= o ? on : m >= o + cu ? cu : m - o;
          if (d < _)
            break;
          const b = d - _, S = Ue - _;
          t.push(
            pr(co(_ + b % S, 0))
          ), d = Ve(b / S);
        }
        t.push(pr(co(d, 0))), o = R0(n, a, s === i), n = 0, ++s;
      }
    ++n, ++r;
  }
  return t.join("");
}, Ml = function(e) {
  return T0(e, function(t) {
    return Dl.test(t) ? O0(t.slice(4).toLowerCase()) : t;
  });
}, Pl = function(e) {
  return T0(e, function(t) {
    return Sl.test(t) ? "xn--" + I0(t) : t;
  });
}, M0 = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: F0,
    encode: Ol
  },
  decode: O0,
  encode: I0,
  toASCII: Pl,
  toUnicode: Ml
}, zl = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, Nl = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, Ll = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, Bl = {
  default: zl,
  zero: Nl,
  commonmark: Ll
}, Hl = /^(vbscript|javascript|file|data):/, ql = /^data:image\/(gif|png|jpeg|webp);/;
function jl(e) {
  const t = e.trim().toLowerCase();
  return Hl.test(t) ? ql.test(t) : !0;
}
const P0 = ["http:", "https:", "mailto:"];
function Ul(e) {
  const t = Qr(e, !0);
  if (t.hostname && (!t.protocol || P0.indexOf(t.protocol) >= 0))
    try {
      t.hostname = M0.toASCII(t.hostname);
    } catch {
    }
  return lu(Xr(t));
}
function Vl(e) {
  const t = Qr(e, !0);
  if (t.hostname && (!t.protocol || P0.indexOf(t.protocol) >= 0))
    try {
      t.hostname = M0.toUnicode(t.hostname);
    } catch {
    }
  return Bt(Xr(t), Bt.defaultChars + "%");
}
function Te(e, t) {
  if (!(this instanceof Te))
    return new Te(e, t);
  t || tn(e) || (t = e || {}, e = "default"), this.inline = new du(), this.block = new Yu(), this.core = new rn(), this.renderer = new qt(), this.linkify = new Ce(), this.validateLink = jl, this.normalizeLink = Ul, this.normalizeLinkText = Vl, this.utils = Zc, this.helpers = Gu({}, Jc), this.options = {}, this.configure(e), t && this.set(t);
}
Te.prototype.set = function(e) {
  return Gu(this.options, e), this;
};
Te.prototype.configure = function(e) {
  const t = this;
  if (tn(e)) {
    const u = e;
    if (e = Bl[u], !e)
      throw new Error('Wrong `markdown-it` preset "' + u + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(u) {
    e.components[u].rules && t[u].ruler.enableOnly(e.components[u].rules), e.components[u].rules2 && t[u].ruler2.enableOnly(e.components[u].rules2);
  }), this;
};
Te.prototype.enable = function(e, t) {
  let u = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(n) {
    u = u.concat(this[n].ruler.enable(e, !0));
  }, this), u = u.concat(this.inline.ruler2.enable(e, !0));
  const r = e.filter(function(n) {
    return u.indexOf(n) < 0;
  });
  if (r.length && !t)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
  return this;
};
Te.prototype.disable = function(e, t) {
  let u = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(n) {
    u = u.concat(this[n].ruler.disable(e, !0));
  }, this), u = u.concat(this.inline.ruler2.disable(e, !0));
  const r = e.filter(function(n) {
    return u.indexOf(n) < 0;
  });
  if (r.length && !t)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
  return this;
};
Te.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
Te.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const u = new this.core.State(e, this, t);
  return this.core.process(u), u.tokens;
};
Te.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
Te.prototype.parseInline = function(e, t) {
  const u = new this.core.State(e, this, t);
  return u.inlineMode = !0, this.core.process(u), u.tokens;
};
Te.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
const xt = (e, t) => {
  const u = e.__vccOpts || e;
  for (const [r, n] of t)
    u[r] = n;
  return u;
}, $l = {
  name: "Collapse",
  props: {
    title: {
      type: String,
      required: !0,
      default: ""
    },
    open: {
      type: Boolean,
      required: !1,
      default: !1
    },
    hideArrow: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = Xe(e.open);
    return {
      isOpen: t,
      toggle: () => {
        t.value = !t.value;
      }
    };
  }
}, Wl = { class: "flex items-center gap-4 py-4 px-2 cursor-pointer justify-between bg-gray-100" }, Zl = { class: "text-xl font-semibold flex items-center gap-2" }, Gl = {
  key: 0,
  class: "swap swap-flip"
}, Kl = ["checked"], Yl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "m8.25 4.5 7.5 7.5-7.5 7.5"
}, null, -1), Jl = [
  Yl
], Xl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "m19.5 8.25-7.5 7.5-7.5-7.5"
}, null, -1), Ql = [
  Xl
], ef = { class: "collapse-content p-0 m-0" };
function tf(e, t, u, r, n, o) {
  return F(), N("div", {
    class: lt([[r.isOpen ? "collapse-open" : ""], "collapse h-fit p-0 m-0 rounded-none shadow-md"])
  }, [
    p("div", {
      onClick: t[2] || (t[2] = (...i) => r.toggle && r.toggle(...i)),
      class: "collapse-title text-lg h-auto min-h-0 p-0 m-0"
    }, [
      p("div", Wl, [
        p("span", Zl, [
          vn(e.$slots, "icon"),
          p("span", null, M(u.title), 1)
        ]),
        u.hideArrow ? q("", !0) : (F(), N("label", Gl, [
          p("input", {
            type: "checkbox",
            checked: r.isOpen
          }, null, 8, Kl),
          (F(), N("svg", {
            onClick: t[0] || (t[0] = (...i) => r.toggle && r.toggle(...i)),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "swap-off w-6 h-6"
          }, Jl)),
          (F(), N("svg", {
            onClick: t[1] || (t[1] = (...i) => r.toggle && r.toggle(...i)),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "swap-on w-6 h-6"
          }, Ql))
        ]))
      ])
    ]),
    p("div", ef, [
      vn(e.$slots, "default")
    ])
  ], 2);
}
const hu = /* @__PURE__ */ xt($l, [["render", tf]]), uf = {
  name: "MarkdownSection",
  props: {
    title: {
      type: String,
      required: !1,
      default: ""
    },
    text: {
      type: String,
      required: !0,
      default: ""
    },
    open: {
      type: Boolean,
      required: !1,
      default: !1
    },
    isCollapsible: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  setup() {
    const e = new Te({
      linkify: !0
    });
    return e.linkify.set({
      fuzzyEmail: !1
    }), {
      md: e
    };
  },
  components: { Collapse: hu }
}, rf = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-6 h-6"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  })
], -1), nf = ["innerHTML"], of = {
  key: 1,
  class: "grid w-full gap-4"
}, sf = { class: "text-xl font-semibold" }, cf = ["innerHTML"];
function af(e, t, u, r, n, o) {
  const i = Re("Collapse");
  return u.isCollapsible ? (F(), _e(i, {
    key: 0,
    title: u.title,
    open: u.open
  }, {
    icon: tt(() => [
      rf
    ]),
    default: tt(() => [
      p("div", {
        class: "prose p-2",
        innerHTML: r.md.render(u.text)
      }, null, 8, nf)
    ]),
    _: 1
  }, 8, ["title", "open"])) : (F(), N("div", of, [
    p("span", sf, M(u.title), 1),
    p("div", {
      innerHTML: r.md.render(u.text)
    }, null, 8, cf)
  ]));
}
const lf = /* @__PURE__ */ xt(uf, [["render", af]]), ff = {
  name: "OpeningHours",
  props: {
    openingHours: {
      type: Array,
      required: !0,
      default: []
    }
  },
  setup(e) {
    const { openingHours: t } = e, u = Xe(null);
    function r(n) {
      return n.open ? `${n.from} - ${n.to}` : "Geschlossen";
    }
    return t.length === 7 && (u.value = [
      {
        day: "Montag",
        openingHours: r(t[1].opening),
        pickupTime: r(t[1].pickup),
        returnTime: r(t[1].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 1
      },
      {
        day: "Dienstag",
        openingHours: r(t[2].opening),
        pickupTime: r(t[2].pickup),
        returnTime: r(t[2].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 2
      },
      {
        day: "Mittwoch",
        openingHours: r(t[3].opening),
        pickupTime: r(t[3].pickup),
        returnTime: r(t[3].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 3
      },
      {
        day: "Donnerstag",
        openingHours: r(t[4].opening),
        pickupTime: r(t[4].pickup),
        returnTime: r(t[4].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 4
      },
      {
        day: "Freitag",
        openingHours: r(t[5].opening),
        pickupTime: r(t[5].pickup),
        returnTime: r(t[5].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 5
      },
      {
        day: "Samstag",
        openingHours: r(t[6].opening),
        pickupTime: r(t[6].pickup),
        returnTime: r(t[6].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 6
      },
      {
        day: "Sonntag",
        openingHours: r(t[0].opening),
        pickupTime: r(t[0].pickup),
        returnTime: r(t[0].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 0
      }
    ]), {
      rows: u
    };
  },
  components: { Collapse: hu }
}, df = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-6 h-6"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
  })
], -1), hf = { class: "w-full border-collapse" }, pf = /* @__PURE__ */ p("thead", null, [
  /* @__PURE__ */ p("tr", { class: "text-left" }, [
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Wochentag"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Öffnungszeiten"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Abholzeit"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Rückgabezeit")
  ])
], -1), bf = { class: "[&>*:nth-child(odd)]:bg-gray-100" }, mf = { class: "text-left" };
function _f(e, t, u, r, n, o) {
  const i = Re("Collapse");
  return F(), _e(i, {
    title: "Öffnungszeiten",
    open: !0
  }, {
    icon: tt(() => [
      df
    ]),
    default: tt(() => [
      p("table", hf, [
        pf,
        p("tbody", bf, [
          (F(!0), N(le, null, Fu(r.rows, (s) => (F(), N("tr", mf, [
            p("th", {
              class: lt([s.isToday ? "text-primary-blue" : "text-gray-900", "max-sm:text-lg max-sm:grid-cols-1 p-2 max-sm:grid max-sm:font-bold max-sm:text-primary-braun max-sm:before:capitalize max-sm:before:content-[attr(data-cell)]"])
            }, M(s.day), 3),
            p("th", {
              class: lt([s.isToday ? "text-primary-blue" : "", "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:capitalize max-sm:before:content-[attr(data-cell)]"]),
              "data-cell": "Öffnungszeiten"
            }, M(s.openingHours), 3),
            p("th", {
              class: lt([s.isToday ? "text-primary-blue" : "", "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:capitalize max-sm:before:content-[attr(data-cell)]"]),
              "data-cell": "Abholzeit"
            }, M(s.pickupTime), 3),
            p("th", {
              class: lt([s.isToday ? "text-primary-blue" : "", "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:capitalize max-sm:before:content-[attr(data-cell)]"]),
              "data-cell": "Rückgabezeit"
            }, M(s.returnTime), 3)
          ]))), 256))
        ])
      ])
    ]),
    _: 1
  });
}
const xf = /* @__PURE__ */ xt(ff, [["render", _f]]), gf = {
  name: "Seasons",
  props: {
    seasons: {
      type: Array,
      required: !0,
      default: []
    },
    minDays: {
      required: !0
    },
    rates: {
      required: !0
    }
  },
  setup(e) {
    const { minDays: t, rates: u, seasons: r } = e, n = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }), o = {
      high: "Haupt-Saison",
      pre: "Vorsaison",
      std: "Standard-Saison",
      low: "Neben-Saison",
      off: "Außer-Saison"
    };
    function i(a) {
      return r.filter((l) => l.type == a).sort((l, d) => new Date(d.from) - new Date(l.from)).map((l) => l);
    }
    function s(a) {
      let l = "", d = i(a), m = { month: "short", day: "numeric" };
      return d.length > 0 && (l = new Date(d[0].from).toLocaleDateString("de-DE", m) + " - " + new Date(d[0].to).toLocaleDateString("de-DE", m)), l;
    }
    return {
      seasons_list: Yr(() => {
        let a = [];
        for (let l in u) {
          let d = {
            name: o[l],
            rate: u[l],
            minDays: t[l],
            range: s(l)
          };
          a.push(d);
        }
        return a;
      }),
      EUR: n
    };
  },
  components: { Collapse: hu }
}, kf = { class: "w-full border-collapse" }, wf = /* @__PURE__ */ p("thead", null, [
  /* @__PURE__ */ p("tr", { class: "text-left" }, [
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Saison"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Zeitraum"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Mindestmietdauer"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Preis pro Nacht")
  ])
], -1), yf = { class: "[&>*:nth-child(odd)]:bg-gray-100" }, vf = { class: "text-left" }, Cf = {
  class: "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:content-[attr(data-cell)] font-semibold",
  "data-cell": "Saison"
}, Ef = {
  class: "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:content-[attr(data-cell)]",
  "data-cell": "Zeitraum"
}, Af = {
  class: "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:content-[attr(data-cell)]",
  "data-cell": "Mindestmietdauer"
}, Df = {
  class: "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:content-[attr(data-cell)] font-semibold text-primary-blue",
  "data-cell": "Preis pro Nacht"
};
function Sf(e, t, u, r, n, o) {
  const i = Re("Collapse");
  return F(), _e(i, {
    title: "Preisgestaltung",
    open: !0,
    hideArrow: !0
  }, {
    default: tt(() => [
      p("table", kf, [
        wf,
        p("tbody", yf, [
          (F(!0), N(le, null, Fu(r.seasons_list, (s) => (F(), N("tr", vf, [
            p("th", Cf, M(s.name), 1),
            p("th", Ef, M(s.range), 1),
            p("th", Af, "ab " + M(s.minDays) + " Nächte", 1),
            p("th", Df, M(r.EUR.format(s.rate)), 1)
          ]))), 256))
        ])
      ])
    ]),
    _: 1
  });
}
const Tf = /* @__PURE__ */ xt(gf, [["render", Sf]]), Ff = {
  name: "Overview",
  props: {
    vehicleId: {
      type: String,
      required: !0,
      default: ""
    },
    features: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = {
      vehicle: {
        CENTRAL_LOCK: "Zentralverriegelung",
        POWER_STEERING: "Servolenkung",
        ABS: "ABS",
        SPEEDOMETER: "Tempomat",
        VEHICLE_ALARM: "Alarmanlage",
        ESP: "ESP",
        BACKWARDS_DRIVE_CAMERA: "Rückfahrkamera",
        TRAILER_HITCH: "Anhängerkupplung"
      },
      dashboard: {
        CASSETTE_PLAYER: "Kassettenspieler",
        APPLE_CONNECTOR: "iPhone/iPod-Anschluss",
        BLUETOOTH: "Bluetooth",
        CD_PLAYER: "CD-Player",
        USB_CONNECTOR: "USB-Anschluss",
        MINIJACK_CONNECTOR: "MP3-Anschluss",
        RADIO: "Radio",
        GPS: "Navigation"
      },
      caravan: {
        FRESH_WATER_TANK: "Frischwassertank",
        WASTE_WATER_TANK: "Abwassertank",
        DIESEL_HEATER: "Dieselheizung",
        SOLAR_PANEL: "Solarzellen",
        HEAVY_CURRENT_CONNECTOR: "Starkstromanschluss",
        ADDITIONAL_BATTERY: "Versorgerbatterie",
        WATER_TAP: "Wasseranschluss",
        UNDERFLOOR_HEATING: "Fußbodenheizung",
        AC_DRIVER_CABIN: "Klimaanlage Fahrerhaus",
        AC: "Klimaanlage",
        GAS_HEATER: "Gasheizung",
        ELECTRIC_HEATER: "Elektrische Heizung",
        GENERATOR: "Generator",
        AC_ROOM: "Klimaanlage mobil",
        WATER_HEATER: "Warmwasser",
        SUITABLE_FOR_WINTER: "Wintertauglich",
        AC_C: "Klimaanlage Aufbau"
      },
      kitchen: {
        EXTRACTOR: "Dunstabzugshaube",
        FREEZER: "Gefrierfach",
        SINK: "Spüle",
        COOKER: "Herd",
        GRILL_FUNCTIONALITY: "Grill-Funktion",
        OVEN: "Backofen",
        MICROWAVE: "Mikrowelle",
        FRIDGE: "Kühlschrank"
      },
      bathroom: {
        OUTDOOR_SHOWER: "Außendusche",
        SINK: "Waschbecken",
        SHOWER: "Dusche",
        CAMPING_TOILET: "Campingtoilette",
        TOILET: "Toilette"
      },
      other: {
        SEPARATED_SLEEPING_SPACE: "Getrennter Schlafbereich",
        CROCKERY: "Geschirrset",
        ALL_INCLUSIVE: "All-inclusive",
        BIKE_HOLDER: "Fahrradträger",
        AD_HOC_TENT: "Vorzelt",
        TV: "TV",
        ROOF_HATCH: "Dachluke",
        AWNING: "Markise",
        AUDIO_SYSTEM: "Audio System",
        SLIDE_OUT: "Slide-out",
        CAMPING_SET: "Campingset",
        SEPARATED_BEDS: "Einzelbetten",
        NO_BARRIERS: "Barrierefrei",
        SAT_ENABLED: "SAT-Anlage",
        PETS_ALLOWED: "Haustiere erlaubt",
        DVD: "DVD",
        STOWING_ROOM: "Heckgarage"
      },
      itemCategories: {
        vehicle: "Fahrzeugdetails",
        dashboard: "Fahrerhaus",
        caravan: "Strom, Wasser, Heizung",
        kitchen: "Kochen",
        bathroom: "Waschen",
        other: "Zusätzliches"
      }
    }, u = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/outline/night`, r = Object.keys(e.features).map((n) => {
      const o = t.itemCategories[n], s = e.features[n].map((c) => ({
        text: t[n][c]
      }));
      return {
        category: o,
        features: s
      };
    });
    return {
      outlineURL: u,
      featuresList: r
    };
  },
  components: { Collapse: hu }
}, Rf = { class: "w-full" }, Of = ["src"], If = { class: "grid sm:grid-cols-2 gap-6" }, Mf = /* @__PURE__ */ p("span", { class: "w-8 h-8 flex items-center text-primary-blue" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ])
], -1);
function Pf(e, t, u, r, n, o) {
  const i = Re("Collapse");
  return F(), N(le, null, [
    p("div", Rf, [
      p("img", {
        src: r.outlineURL,
        class: "object-contain max-w-full",
        alt: ""
      }, null, 8, Of)
    ]),
    p("div", If, [
      (F(!0), N(le, null, Fu(r.featuresList, (s) => (F(), _e(i, {
        key: s.category,
        title: s.category,
        open: !1
      }, {
        default: tt(() => [
          (F(!0), N(le, null, Fu(s.features, (c) => (F(), N("div", {
            key: c.text,
            class: "w-full flex items-center gap-1 p-2"
          }, [
            Mf,
            p("span", null, M(c.text), 1)
          ]))), 128))
        ]),
        _: 2
      }, 1032, ["title"]))), 128))
    ])
  ], 64);
}
const zf = /* @__PURE__ */ xt(Ff, [["render", Pf]]), Nf = {
  name: "TechnicalDetails",
  props: ["technicalData", "isofixSeats", "sittingPlaces"],
  setup(e) {
  },
  components: { Collapse: hu }
}, Lf = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-6 h-6"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
  }),
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  })
], -1), Bf = { class: "w-full border-collapse" }, Hf = /* @__PURE__ */ p("thead", null, [
  /* @__PURE__ */ p("tr", { class: "text-left" }, [
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" })
  ])
], -1), qf = { class: "[&>*:nth-child(odd)]:bg-gray-100" }, jf = {
  key: 0,
  class: "text-left"
}, Uf = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Hersteller (Wohnmobilmarke)", -1), Vf = { class: "p-2 text-right" }, $f = { key: 1 }, Wf = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Model", -1), Zf = { class: "p-2 text-right" }, Gf = { key: 2 }, Kf = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Hersteller (Chassis)", -1), Yf = { class: "p-2 text-right" }, Jf = { key: 3 }, Xf = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Modellbezeichnung (Chassis)", -1), Qf = { class: "p-2 text-right" }, e1 = { key: 4 }, t1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Hauptkategorie", -1), u1 = { class: "p-2 text-right" }, r1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "ISOFIX-Sitze", -1), n1 = { class: "p-2 text-right" }, o1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Sitzplätze mit Gurt", -1), i1 = { class: "p-2 text-right" }, s1 = { key: 5 }, c1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Zulässiges Gesamtgewicht", -1), a1 = { class: "p-2 text-right" }, l1 = { key: 6 }, f1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Gewicht in fahrbereitem Zustand", -1), d1 = { class: "p-2 text-right" }, h1 = { key: 7 }, p1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Baujahr", -1), b1 = { class: "p-2 text-right" }, m1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Länge", -1), _1 = { class: "p-2 text-right" }, x1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Breite", -1), g1 = { class: "p-2 text-right" }, k1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Höhe", -1), w1 = { class: "p-2 text-right" }, y1 = { key: 8 }, v1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Motorleistung", -1), C1 = { class: "p-2 text-right" }, E1 = { key: 9 }, A1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Kraftstoff", -1), D1 = { class: "p-2 text-right capitalize" }, S1 = { key: 10 }, T1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Antriebsart", -1), F1 = { class: "p-2 text-right" }, R1 = { key: 11 }, O1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Anzahl der Gänge", -1), I1 = { class: "p-2 text-right" }, M1 = { key: 12 }, P1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Getriebe", -1), z1 = { class: "p-2 text-right" }, N1 = { key: 13 }, L1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Kraftstofftank-Kapazität", -1), B1 = { class: "p-2 text-right" }, H1 = { key: 14 }, q1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Frischwassertank", -1), j1 = { class: "p-2 text-right" }, U1 = { key: 15 }, V1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Abwassertank", -1), $1 = { class: "p-2 text-right" }, W1 = { key: 16 }, Z1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Achsen", -1), G1 = { class: "p-2 text-right" }, K1 = { key: 17 }, Y1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Reifen", -1), J1 = { class: "p-2 text-right" }, X1 = { key: 18 }, Q1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Verbrauch pro 100 km", -1), ed = { class: "p-2 text-right" }, td = { key: 19 }, ud = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Schadstoffklasse", -1), rd = { class: "p-2 text-right uppercase" }, nd = { key: 20 }, od = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Umweltplakette", -1), id = { class: "text-right p-2" }, sd = { key: 0 }, cd = { key: 1 }, ad = { key: 2 }, ld = { key: 21 }, fd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Ladekapazität", -1), dd = { class: "p-2 text-right" }, hd = { key: 22 }, pd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Maße vordere Seitensitzgruppe", -1), bd = { class: "p-2 text-right" }, md = { key: 23 }, _d = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Stauklappengröße im Heck", -1), xd = { class: "p-2 text-right" }, gd = { key: 24 }, kd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Bettumbau Sitzgruppe", -1), wd = { class: "p-2 text-right" }, yd = { key: 25 }, vd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Maße Heckbett", -1), Cd = { class: "p-2 text-right" }, Ed = { key: 26 }, Ad = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Maße Hubbett", -1), Dd = { class: "p-2 text-right" }, Sd = { key: 27 }, Td = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Maße Längsbank", -1), Fd = { class: "p-2 text-right" }, Rd = { key: 28 }, Od = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Batteriekapazität", -1), Id = { class: "p-2 text-right" }, Md = { key: 29 }, Pd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Anhängerkupplung", -1), zd = { class: "p-2 text-right" }, Nd = { key: 30 }, Ld = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Kapazität Kühlschrank", -1), Bd = { class: "p-2 text-right" };
function Hd(e, t, u, r, n, o) {
  const i = Re("Collapse");
  return F(), _e(i, {
    title: "Technische Angaben",
    open: !0
  }, {
    icon: tt(() => [
      Lf
    ]),
    default: tt(() => {
      var s, c, a, l, d, m, _, b, S, P, L, U, C, R, A, O, G, te, Ee, Ae, Ne, Ze, Ge, Ke, De, re, J, K, Le, gt, Be, ke, jt, pu, bu, Se, kt, Dt, Ut, Ye, St, Tt, f, h, x, g, k, v, D, y, E, w, T, z, I, B, V, Z, Y, ue, be, Je, Vt, rt, $t, ae, we, Wt, sn, cn, an, ln;
      return [
        p("table", Bf, [
          Hf,
          p("tbody", qf, [
            (s = u.technicalData) != null && s.manufacturer ? (F(), N("tr", jf, [
              Uf,
              p("th", Vf, M((c = u.technicalData) == null ? void 0 : c.manufacturer), 1)
            ])) : q("", !0),
            u.technicalData.model ? (F(), N("tr", $f, [
              Wf,
              p("th", Zf, M(u.technicalData.model), 1)
            ])) : q("", !0),
            (a = u.technicalData) != null && a.manufacturerChassis ? (F(), N("tr", Gf, [
              Kf,
              p("th", Yf, M((l = u.technicalData) == null ? void 0 : l.manufacturerChassis), 1)
            ])) : q("", !0),
            (d = u.technicalData) != null && d.modelChassis ? (F(), N("tr", Jf, [
              Xf,
              p("th", Qf, M((m = u.technicalData) == null ? void 0 : m.modelChassis), 1)
            ])) : q("", !0),
            (_ = u.technicalData) != null && _.type ? (F(), N("tr", e1, [
              t1,
              p("th", u1, M((b = u.technicalData) == null ? void 0 : b.type), 1)
            ])) : q("", !0),
            p("tr", null, [
              r1,
              p("th", n1, M(u.isofixSeats ?? "-"), 1)
            ]),
            p("tr", null, [
              o1,
              p("th", i1, M(u.sittingPlaces), 1)
            ]),
            (S = u.technicalData) != null && S.grossVehicleWeight ? (F(), N("tr", s1, [
              c1,
              p("th", a1, M(((P = u.technicalData) == null ? void 0 : P.grossVehicleWeight.split("_")[0]) === "higher" ? "über" : "bis") + " " + M((L = u.technicalData) == null ? void 0 : L.grossVehicleWeight.split("_")[1]) + " kg ", 1)
            ])) : q("", !0),
            (U = u.technicalData) != null && U.emptyWeight ? (F(), N("tr", l1, [
              f1,
              p("th", d1, M((C = u.technicalData) == null ? void 0 : C.emptyWeight) + " kg", 1)
            ])) : q("", !0),
            (R = u.technicalData) != null && R.constructionYear ? (F(), N("tr", h1, [
              p1,
              p("th", b1, M((A = u.technicalData) == null ? void 0 : A.constructionYear), 1)
            ])) : q("", !0),
            p("tr", null, [
              m1,
              p("th", _1, M((O = u.technicalData) == null ? void 0 : O.length) + " cm", 1)
            ]),
            p("tr", null, [
              x1,
              p("th", g1, M((G = u.technicalData) == null ? void 0 : G.width) + " cm", 1)
            ]),
            p("tr", null, [
              k1,
              p("th", w1, M((te = u.technicalData) == null ? void 0 : te.height) + " cm", 1)
            ]),
            (Ee = u.technicalData) != null && Ee.power ? (F(), N("tr", y1, [
              v1,
              p("th", C1, M((Ae = u.technicalData) == null ? void 0 : Ae.power) + " PS", 1)
            ])) : q("", !0),
            (Ne = u.technicalData) != null && Ne.fuelType ? (F(), N("tr", E1, [
              A1,
              p("th", D1, M((Ze = u.technicalData) == null ? void 0 : Ze.fuelType), 1)
            ])) : q("", !0),
            (Ge = u.technicalData) != null && Ge.modeOfDrive ? (F(), N("tr", S1, [
              T1,
              p("th", F1, M(((Ke = u.technicalData) == null ? void 0 : Ke.modeOfDrive) === "2wheel" && "Zweirad"), 1)
            ])) : q("", !0),
            (De = u.technicalData) != null && De.numberOfGears ? (F(), N("tr", R1, [
              O1,
              p("th", I1, M((re = u.technicalData) == null ? void 0 : re.numberOfGears), 1)
            ])) : q("", !0),
            (J = u.technicalData) != null && J.transmission ? (F(), N("tr", M1, [
              P1,
              p("th", z1, M(((K = u.technicalData) == null ? void 0 : K.transmission) === "manual" ? "Manuell" : "Automatik"), 1)
            ])) : q("", !0),
            (Le = u.technicalData) != null && Le.fuelTankCapacity ? (F(), N("tr", N1, [
              L1,
              p("th", B1, M((gt = u.technicalData) == null ? void 0 : gt.fuelTankCapacity) + " Liter", 1)
            ])) : q("", !0),
            (Be = u.technicalData) != null && Be.freshWaterTank ? (F(), N("tr", H1, [
              q1,
              p("th", j1, M((ke = u.technicalData) == null ? void 0 : ke.freshWaterTankCapacity) + " Liter", 1)
            ])) : q("", !0),
            (jt = u.technicalData) != null && jt.wasteWaterTank ? (F(), N("tr", U1, [
              V1,
              p("th", $1, M((pu = u.technicalData) == null ? void 0 : pu.wasteWaterTankCapacity) + " Liter", 1)
            ])) : q("", !0),
            (bu = u.technicalData) != null && bu.axis ? (F(), N("tr", W1, [
              Z1,
              p("th", G1, M((Se = u.technicalData) == null ? void 0 : Se.axis), 1)
            ])) : q("", !0),
            (kt = u.technicalData) != null && kt.tyresWidth && ((Dt = u.technicalData) != null && Dt.tyresRelation) && ((Ut = u.technicalData) != null && Ut.tyresType) && u.technicalData.tyresDiameter && u.technicalData.tyresSpeedIndex ? (F(), N("tr", K1, [
              Y1,
              p("th", J1, M((Ye = u.technicalData) == null ? void 0 : Ye.tyresWidth) + "/" + M((St = u.technicalData) == null ? void 0 : St.tyresRelation) + " " + M((Tt = u.technicalData) == null ? void 0 : Tt.tyresType) + " " + M((f = u.technicalData) == null ? void 0 : f.tyresDiameter) + " " + M((h = u.technicalData) == null ? void 0 : h.tyresSpeedIndex), 1)
            ])) : q("", !0),
            (x = u.technicalData) != null && x.consumptionPer100km ? (F(), N("tr", X1, [
              Q1,
              p("th", ed, M((g = u.technicalData) == null ? void 0 : g.consumptionPer100km) + " L/100km", 1)
            ])) : q("", !0),
            (k = u.technicalData) != null && k.emissionStandard ? (F(), N("tr", td, [
              ud,
              p("th", rd, M((v = u.technicalData) == null ? void 0 : v.emissionStandard), 1)
            ])) : q("", !0),
            (D = u.technicalData) != null && D.environmentalBadge ? (F(), N("tr", nd, [
              od,
              p("th", id, [
                ((y = u.technicalData) == null ? void 0 : y.environmentalBadge) === "green" ? (F(), N("span", sd, "Grün")) : q("", !0),
                ((E = u.technicalData) == null ? void 0 : E.environmentalBadge) === "yellow" ? (F(), N("span", cd, "Gelb")) : q("", !0),
                ((w = u.technicalData) == null ? void 0 : w.environmentalBadge) === "red" ? (F(), N("span", ad, "Rot")) : q("", !0)
              ])
            ])) : q("", !0),
            (T = u.technicalData) != null && T.capacityLoading ? (F(), N("tr", ld, [
              fd,
              p("th", dd, M((z = u.technicalData) == null ? void 0 : z.capacityLoading) + " L", 1)
            ])) : q("", !0),
            (I = u.technicalData) != null && I.sizeSittingSide ? (F(), N("tr", hd, [
              pd,
              p("th", bd, M((B = u.technicalData) == null ? void 0 : B.sizeSittingSide), 1)
            ])) : q("", !0),
            (V = u.technicalData) != null && V.sizeLoadingOpening ? (F(), N("tr", md, [
              _d,
              p("th", xd, M((Z = u.technicalData) == null ? void 0 : Z.sizeLoadingOpening), 1)
            ])) : q("", !0),
            (Y = u.technicalData) != null && Y.bedSize ? (F(), N("tr", gd, [
              kd,
              p("th", wd, M((ue = u.technicalData) == null ? void 0 : ue.bedSize), 1)
            ])) : q("", !0),
            (be = u.technicalData) != null && be.cornerBedSize ? (F(), N("tr", yd, [
              vd,
              p("th", Cd, M((Je = u.technicalData) == null ? void 0 : Je.cornerBedSize), 1)
            ])) : q("", !0),
            (Vt = u.technicalData) != null && Vt.mainBedSize ? (F(), N("tr", Ed, [
              Ad,
              p("th", Dd, M((rt = u.technicalData) == null ? void 0 : rt.mainBedSize), 1)
            ])) : q("", !0),
            ($t = u.technicalData) != null && $t.bankSize ? (F(), N("tr", Sd, [
              Td,
              p("th", Fd, M((ae = u.technicalData) == null ? void 0 : ae.bankSize), 1)
            ])) : q("", !0),
            (we = u.technicalData) != null && we.batteryCapacity ? (F(), N("tr", Rd, [
              Od,
              p("th", Id, M((Wt = u.technicalData) == null ? void 0 : Wt.batteryCapacity) + " Ah", 1)
            ])) : q("", !0),
            (sn = u.technicalData) != null && sn.towingCapacity ? (F(), N("tr", Md, [
              Pd,
              p("th", zd, M((cn = u.technicalData) == null ? void 0 : cn.towingCapacity) + " kg", 1)
            ])) : q("", !0),
            (an = u.technicalData) != null && an.fridgeVolume ? (F(), N("tr", Nd, [
              Ld,
              p("th", Bd, M((ln = u.technicalData) == null ? void 0 : ln.fridgeVolume) + " Liter", 1)
            ])) : q("", !0)
          ])
        ])
      ];
    }),
    _: 1
  });
}
const qd = /* @__PURE__ */ xt(Nf, [["render", Hd]]), jd = {
  name: "FirstSection",
  props: {
    location: {
      type: String,
      required: !0,
      default: ""
    },
    maxSeats: {
      type: Number,
      required: !0,
      default: 0
    },
    maxBeds: {
      type: Number,
      required: !0,
      default: 0
    },
    petsAllowed: {
      type: Boolean,
      required: !0,
      default: !1
    },
    grossVehicleWeight: {
      type: String,
      required: !0,
      default: ""
    },
    onlineBookable: {
      type: Boolean,
      required: !0,
      default: !1
    }
  },
  setup(e) {
    return console.log(e), {
      driver_license: Yr(() => e.grossVehicleWeight.split("_")[0] === "higher" ? "Führerscheinklasse C1" : "Führerscheinklasse B")
    };
  }
}, Ud = { class: "grid w-full gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center font-semibold" }, Vd = { class: "w-full gap-2 flex flex-col items-center" }, $d = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-10 h-10 text-secondary-braun"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }),
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
  })
], -1), Wd = { class: "w-full gap-2 flex flex-col items-center" }, Zd = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-10 h-10 text-secondary-braun"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
  })
], -1), Gd = { class: "w-full gap-2 flex flex-col items-center" }, Kd = /* @__PURE__ */ p("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "bed",
  class: "w-10 h-10 text-secondary-braun",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512",
  color: "#cbc5b9"
}, [
  /* @__PURE__ */ p("path", {
    fill: "currentColor",
    d: "M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"
  })
], -1), Yd = { class: "w-full gap-2 flex flex-col items-center" }, Jd = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-10 h-10 text-secondary-braun"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
  })
], -1), Xd = {
  key: 0,
  class: "w-full gap-2 flex flex-col items-center"
}, Qd = /* @__PURE__ */ p("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "paw",
  class: "w-10 h-10 text-secondary-braun",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  color: "#cbc5b9"
}, [
  /* @__PURE__ */ p("path", {
    fill: "currentColor",
    d: "M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"
  })
], -1), eh = {
  key: 1,
  class: "w-full gap-2 flex flex-col items-center"
}, th = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-10 h-10 text-secondary-braun"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
  })
], -1);
function uh(e, t, u, r, n, o) {
  return F(), N("div", Ud, [
    p("div", Vd, [
      $d,
      vt(" " + M(u.location), 1)
    ]),
    p("div", Wd, [
      Zd,
      vt(" " + M(u.maxSeats), 1)
    ]),
    p("div", Gd, [
      Kd,
      vt(" " + M(u.maxBeds), 1)
    ]),
    p("div", Yd, [
      Jd,
      vt(" " + M(r.driver_license), 1)
    ]),
    u.petsAllowed ? (F(), N("div", Xd, [
      Qd,
      vt(" Haustiere erlaubt ")
    ])) : q("", !0),
    u.onlineBookable ? (F(), N("div", eh, [
      th,
      vt(" Direkt buchbar ")
    ])) : q("", !0)
  ]);
}
const rh = /* @__PURE__ */ xt(jd, [["render", uh]]), nh = ':root,[data-theme]{background-color:var(--fallback-b1,oklch(var(--b1)/1));color:var(--fallback-bc,oklch(var(--bc)/1))}@supports not (color: oklch(0 0 0)){:root{color-scheme:light;--fallback-p: #491eff;--fallback-pc: #d4dbff;--fallback-s: #ff41c7;--fallback-sc: #fff9fc;--fallback-a: #00cfbd;--fallback-ac: #00100d;--fallback-n: #2b3440;--fallback-nc: #d7dde4;--fallback-b1: #ffffff;--fallback-b2: #e5e6e6;--fallback-b3: #e5e6e6;--fallback-bc: #1f2937;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000 }@media (prefers-color-scheme: dark){:root{color-scheme:dark;--fallback-p: #7582ff;--fallback-pc: #050617;--fallback-s: #ff71cf;--fallback-sc: #190211;--fallback-a: #00c7b5;--fallback-ac: #000e0c;--fallback-n: #2a323c;--fallback-nc: #a6adbb;--fallback-b1: #1d232a;--fallback-b2: #191e24;--fallback-b3: #15191e;--fallback-bc: #a6adbb;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000 }}}html{-webkit-tap-highlight-color:transparent}:root{color-scheme:light;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--er: .7176 .221 22.18;--pc: .89824 .06192 275.75;--ac: .15352 .0368 183.61;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: 0 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: .4912 .3096 275.75;--s: .6971 .329 342.55;--sc: .9871 .0106 342.55;--a: .7676 .184 183.61;--n: .321785 .02476 255.701624;--nc: .894994 .011585 252.096176;--b1: 1 0 0;--b2: .961151 0 0;--b3: .924169 .00108 197.137559;--bc: .278078 .029596 256.847952 }[data-theme=light]{color-scheme:light;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--er: .7176 .221 22.18;--pc: .89824 .06192 275.75;--ac: .15352 .0368 183.61;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: 0 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: .4912 .3096 275.75;--s: .6971 .329 342.55;--sc: .9871 .0106 342.55;--a: .7676 .184 183.61;--n: .321785 .02476 255.701624;--nc: .894994 .011585 252.096176;--b1: 1 0 0;--b2: .961151 0 0;--b3: .924169 .00108 197.137559;--bc: .278078 .029596 256.847952 }[data-theme=dark]{color-scheme:dark;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--er: .7176 .221 22.18;--pc: .13138 .0392 275.75;--sc: .1496 .052 342.55;--ac: .14902 .0334 183.61;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: 0 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: .6569 .196 275.75;--s: .748 .26 342.55;--a: .7451 .167 183.61;--n: .313815 .021108 254.139175;--nc: .746477 .0216 264.435964;--b1: .253267 .015896 252.417568;--b2: .232607 .013807 253.100675;--b3: .211484 .01165 254.087939;--bc: .746477 .0216 264.435964 }*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (hover:hover){.label a:hover{--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}.table tr.hover:hover,.table tr.hover:nth-child(2n):hover{--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))}}.checkbox{flex-shrink:0;--chkbg: var(--fallback-bc,oklch(var(--bc)/1));--chkfg: var(--fallback-b1,oklch(var(--b1)/1));height:1.5rem;width:1.5rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--rounded-btn, .5rem);border-width:1px;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));--tw-border-opacity: .2 }.collapse:not(td):not(tr):not(colgroup){visibility:visible}.collapse{position:relative;display:grid;overflow:hidden;grid-template-rows:auto 0fr;transition:grid-template-rows .2s;width:100%;border-radius:var(--rounded-box, 1rem)}.collapse-title,.collapse>input[type=checkbox],.collapse>input[type=radio],.collapse-content{grid-column-start:1;grid-row-start:1}.collapse>input[type=checkbox],.collapse>input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0}.collapse-content{visibility:hidden;grid-column-start:1;grid-row-start:2;min-height:0px;transition:visibility .2s;transition:padding .2s ease-out,background-color .2s ease-out;padding-left:1rem;padding-right:1rem;cursor:unset}.collapse[open],.collapse-open,.collapse:focus:not(.collapse-close){grid-template-rows:auto 1fr}.collapse:not(.collapse-close):has(>input[type=checkbox]:checked),.collapse:not(.collapse-close):has(>input[type=radio]:checked){grid-template-rows:auto 1fr}.collapse[open]>.collapse-content,.collapse-open>.collapse-content,.collapse:focus:not(.collapse-close)>.collapse-content,.collapse:not(.collapse-close)>input[type=checkbox]:checked~.collapse-content,.collapse:not(.collapse-close)>input[type=radio]:checked~.collapse-content{visibility:visible;min-height:-moz-fit-content;min-height:fit-content}.divider{display:flex;flex-direction:row;align-items:center;align-self:stretch;margin-top:1rem;margin-bottom:1rem;height:1rem;white-space:nowrap}.divider:before,.divider:after{height:.125rem;width:100%;flex-grow:1;--tw-content: "";content:var(--tw-content);background-color:var(--fallback-bc,oklch(var(--bc)/.1))}.label{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:space-between;padding:.5rem .25rem}.input{flex-shrink:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:3rem;padding-left:1rem;padding-right:1rem;font-size:1rem;line-height:2;line-height:1.5rem;border-radius:var(--rounded-btn, .5rem);border-width:1px;border-color:transparent;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.link{cursor:pointer;text-decoration-line:underline}.range{height:1.5rem;width:100%;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;--range-shdw: var(--fallback-bc,oklch(var(--bc)/1));overflow:hidden;border-radius:var(--rounded-box, 1rem);background-color:transparent}.range:focus{outline:none}.swap{position:relative;display:inline-grid;-webkit-user-select:none;-moz-user-select:none;user-select:none;place-content:center;cursor:pointer}.swap>*{grid-column-start:1;grid-row-start:1;transition-duration:.3s;transition-timing-function:cubic-bezier(0,0,.2,1);transition-property:transform,opacity}.swap input{-webkit-appearance:none;-moz-appearance:none;appearance:none}.swap .swap-on,.swap .swap-indeterminate,.swap input:indeterminate~.swap-on{opacity:0}.swap input:checked~.swap-off,.swap-active .swap-off,.swap input:indeterminate~.swap-off{opacity:0}.swap input:checked~.swap-on,.swap-active .swap-on,.swap input:indeterminate~.swap-indeterminate{opacity:1}.table{position:relative;width:100%;border-radius:var(--rounded-box, 1rem);text-align:left;font-size:.875rem;line-height:1.25rem}.table :where(.table-pin-rows thead tr){position:sticky;top:0;z-index:1;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.table :where(.table-pin-rows tfoot tr){position:sticky;bottom:0;z-index:1;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.table :where(.table-pin-cols tr th){position:sticky;left:0;right:0;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.toggle{flex-shrink:0;--tglbg: var(--fallback-b1,oklch(var(--b1)/1));--handleoffset: 1.5rem;--handleoffsetcalculator: calc(var(--handleoffset) * -1);--togglehandleborder: 0 0;height:1.5rem;width:3rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--rounded-badge, 1.9rem);border-width:1px;border-color:currentColor;background-color:currentColor;color:var(--fallback-bc,oklch(var(--bc)/.5));transition:background,box-shadow var(--animation-input, .2s) ease-out;box-shadow:var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset,var(--togglehandleborder)}.btm-nav>* .label{font-size:1rem;line-height:1.5rem}@supports not (color: oklch(0 0 0)){.prose :where(code):not(:where([class~=not-prose] *,pre *)){background-color:var(--fallback-b3,oklch(var(--b3)/1))}}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .98))}40%{transform:scale(1.02)}to{transform:scale(1)}}.checkbox:focus{box-shadow:none}.checkbox:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/1))}.checkbox:checked,.checkbox[checked=true],.checkbox[aria-checked=true]{background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-out;background-color:var(--chkbg);background-image:linear-gradient(-45deg,transparent 65%,var(--chkbg) 65.99%),linear-gradient(45deg,transparent 75%,var(--chkbg) 75.99%),linear-gradient(-45deg,var(--chkbg) 40%,transparent 40.99%),linear-gradient(45deg,var(--chkbg) 30%,var(--chkfg) 30.99%,var(--chkfg) 40%,transparent 40.99%),linear-gradient(-45deg,var(--chkfg) 50%,var(--chkbg) 50.99%)}.checkbox:indeterminate{--tw-bg-opacity: 1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-out;background-image:linear-gradient(90deg,transparent 80%,var(--chkbg) 80%),linear-gradient(-90deg,transparent 80%,var(--chkbg) 80%),linear-gradient(0deg,var(--chkbg) 43%,var(--chkfg) 43%,var(--chkfg) 57%,var(--chkbg) 57%)}.checkbox:disabled{cursor:not-allowed;border-color:transparent;--tw-bg-opacity: 1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));opacity:.2}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}details.collapse{width:100%}details.collapse summary{position:relative;display:block;outline:2px solid transparent;outline-offset:2px}details.collapse summary::-webkit-details-marker{display:none}.collapse:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/1))}.collapse:has(.collapse-title:focus-visible),.collapse:has(>input[type=checkbox]:focus-visible),.collapse:has(>input[type=radio]:focus-visible){outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/1))}.collapse-arrow>.collapse-title:after{position:absolute;display:block;height:.5rem;width:.5rem;--tw-translate-y: -100%;--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:.15s;transition-duration:.2s;top:1.9rem;inset-inline-end:1.4rem;content:"";transform-origin:75% 75%;box-shadow:2px 2px;pointer-events:none}.collapse-plus>.collapse-title:after{position:absolute;display:block;height:.5rem;width:.5rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:.3s;top:.9rem;inset-inline-end:1.4rem;content:"+";pointer-events:none}.collapse:not(.collapse-open):not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-open):not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-open):not(.collapse-close)>.collapse-title{cursor:pointer}.collapse:focus:not(.collapse-open):not(.collapse-close):not(.collapse[open])>.collapse-title{cursor:unset}.collapse-title{position:relative}:where(.collapse>input[type=checkbox]),:where(.collapse>input[type=radio]){z-index:1}.collapse-title,:where(.collapse>input[type=checkbox]),:where(.collapse>input[type=radio]){width:100%;padding:1rem;padding-inline-end:3rem;min-height:3.75rem;transition:background-color .2s ease-out}.collapse[open]>:where(.collapse-content),.collapse-open>:where(.collapse-content),.collapse:focus:not(.collapse-close)>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input[type=checkbox]:checked~.collapse-content),.collapse:not(.collapse-close)>:where(input[type=radio]:checked~.collapse-content){padding-bottom:1rem;transition:padding .2s ease-out,background-color .2s ease-out}.collapse[open].collapse-arrow>.collapse-title:after,.collapse-open.collapse-arrow>.collapse-title:after,.collapse-arrow:focus:not(.collapse-close)>.collapse-title:after,.collapse-arrow:not(.collapse-close)>input[type=checkbox]:checked~.collapse-title:after,.collapse-arrow:not(.collapse-close)>input[type=radio]:checked~.collapse-title:after{--tw-translate-y: -50%;--tw-rotate: 225deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.collapse[open].collapse-plus>.collapse-title:after,.collapse-open.collapse-plus>.collapse-title:after,.collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse-plus:not(.collapse-close)>input[type=checkbox]:checked~.collapse-title:after,.collapse-plus:not(.collapse-close)>input[type=radio]:checked~.collapse-title:after{content:"−"}.divider:not(:empty){gap:1rem}.input input:focus{outline:2px solid transparent;outline-offset:2px}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input:focus,.input:focus-within{box-shadow:none;border-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/.2))}.input-disabled,.input:disabled,.input[disabled]{cursor:not-allowed;--tw-border-opacity: 1;border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));color:var(--fallback-bc,oklch(var(--bc)/.4))}.input-disabled::-moz-placeholder,.input:disabled::-moz-placeholder,.input[disabled]::-moz-placeholder{color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));--tw-placeholder-opacity: .2 }.input-disabled::placeholder,.input:disabled::placeholder,.input[disabled]::placeholder{color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));--tw-placeholder-opacity: .2 }.input::-webkit-date-and-time-value{text-align:inherit}.link:focus{outline:2px solid transparent;outline-offset:2px}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px}.mockup-browser .mockup-browser-toolbar .input{position:relative;margin-left:auto;margin-right:auto;display:block;height:1.75rem;width:24rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));padding-left:2rem;direction:ltr}.mockup-browser .mockup-browser-toolbar .input:before{content:"";position:absolute;left:.5rem;top:50%;aspect-ratio:1 / 1;height:.75rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;border-width:2px;border-color:currentColor;opacity:.6}.mockup-browser .mockup-browser-toolbar .input:after{content:"";position:absolute;left:1.25rem;top:50%;height:.5rem;--tw-translate-y: 25%;--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;border-width:1px;border-color:currentColor;opacity:.6}@keyframes modal-pop{0%{opacity:0}}@keyframes progress-loading{50%{background-position-x:-115%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset}50%{box-shadow:0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset}to{box-shadow:0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset}}.range:focus-visible::-webkit-slider-thumb{--focus-shadow: 0 0 0 6px var(--fallback-b1,oklch(var(--b1)/1)) inset, 0 0 0 2rem var(--range-shdw) inset }.range:focus-visible::-moz-range-thumb{--focus-shadow: 0 0 0 6px var(--fallback-b1,oklch(var(--b1)/1)) inset, 0 0 0 2rem var(--range-shdw) inset }.range::-webkit-slider-runnable-track{height:.5rem;width:100%;border-radius:var(--rounded-box, 1rem);background-color:var(--fallback-bc,oklch(var(--bc)/.1))}.range::-moz-range-track{height:.5rem;width:100%;border-radius:var(--rounded-box, 1rem);background-color:var(--fallback-bc,oklch(var(--bc)/.1))}.range::-webkit-slider-thumb{position:relative;height:1.5rem;width:1.5rem;border-radius:var(--rounded-box, 1rem);border-style:none;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));-moz-appearance:none;appearance:none;-webkit-appearance:none;top:50%;color:var(--range-shdw);transform:translateY(-50%);--filler-size: 100rem;--filler-offset: .6rem;box-shadow:0 0 0 3px var(--range-shdw) inset,var(--focus-shadow, 0 0),calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)}.range::-moz-range-thumb{position:relative;height:1.5rem;width:1.5rem;border-radius:var(--rounded-box, 1rem);border-style:none;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));top:50%;color:var(--range-shdw);--filler-size: 100rem;--filler-offset: .5rem;box-shadow:0 0 0 3px var(--range-shdw) inset,var(--focus-shadow, 0 0),calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}.swap-rotate .swap-on,.swap-rotate .swap-indeterminate,.swap-rotate input:indeterminate~.swap-on{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-off,.swap-active:where(.swap-rotate) .swap-off,.swap-rotate input:indeterminate~.swap-off{--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-on,.swap-active:where(.swap-rotate) .swap-on,.swap-rotate input:indeterminate~.swap-indeterminate{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-flip{transform-style:preserve-3d;perspective:16em}.swap-flip .swap-on,.swap-flip .swap-indeterminate,.swap-flip input:indeterminate~.swap-on{transform:rotateY(180deg);backface-visibility:hidden;opacity:1}.swap-flip input:checked~.swap-off,.swap-active:where(.swap-flip) .swap-off,.swap-flip input:indeterminate~.swap-off{transform:rotateY(-180deg);backface-visibility:hidden;opacity:1}.swap-flip input:checked~.swap-on,.swap-active:where(.swap-flip) .swap-on,.swap-flip input:indeterminate~.swap-indeterminate{transform:rotateY(0)}:is([dir=rtl] .table){text-align:right}.table :where(th,td){padding:.75rem 1rem;vertical-align:middle}.table tr.active,.table tr.active:nth-child(2n),.table-zebra tbody tr:nth-child(2n){--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))}.table :where(thead,tbody) :where(tr:not(:last-child)),.table :where(thead,tbody) :where(tr:first-child:last-child){border-bottom-width:1px;--tw-border-opacity: 1;border-bottom-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)))}.table :where(thead,tfoot){white-space:nowrap;font-size:.75rem;line-height:1rem;font-weight:700;color:var(--fallback-bc,oklch(var(--bc)/.6))}@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}[dir=rtl] .toggle{--handleoffsetcalculator: calc(var(--handleoffset) * 1) }.toggle:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/.2))}.toggle:hover{background-color:currentColor}.toggle:checked,.toggle[checked=true],.toggle[aria-checked=true]{background-image:none;--handleoffsetcalculator: var(--handleoffset);--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}[dir=rtl] .toggle:checked,[dir=rtl] .toggle[checked=true],[dir=rtl] .toggle[aria-checked=true]{--handleoffsetcalculator: calc(var(--handleoffset) * -1) }.toggle:indeterminate{--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));box-shadow:calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset}[dir=rtl] .toggle:indeterminate{box-shadow:calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset}.toggle:disabled{cursor:not-allowed;--tw-border-opacity: 1;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));background-color:transparent;opacity:.3;--togglehandleborder: 0 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset, var(--handleoffsetcalculator) 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset }:root .prose{--tw-prose-body: var(--fallback-bc,oklch(var(--bc)/.8));--tw-prose-headings: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-lead: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-links: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-bold: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-counters: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-bullets: var(--fallback-bc,oklch(var(--bc)/.5));--tw-prose-hr: var(--fallback-bc,oklch(var(--bc)/.2));--tw-prose-quotes: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-quote-borders: var(--fallback-bc,oklch(var(--bc)/.2));--tw-prose-captions: var(--fallback-bc,oklch(var(--bc)/.5));--tw-prose-code: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-pre-code: var(--fallback-nc,oklch(var(--nc)/1));--tw-prose-pre-bg: var(--fallback-n,oklch(var(--n)/1));--tw-prose-th-borders: var(--fallback-bc,oklch(var(--bc)/.5));--tw-prose-td-borders: var(--fallback-bc,oklch(var(--bc)/.2)) }.prose :where(code):not(:where([class~=not-prose] *,pre *)){padding:1px 8px;border-radius:var(--rounded-badge);font-weight:initial;background-color:var(--fallback-bc,oklch(var(--bc)/.1))}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{display:none}.prose pre code{border-radius:0;padding:0}.prose :where(tbody tr,thead):not(:where([class~=not-prose] *)){border-bottom-color:var(--fallback-bc,oklch(var(--bc)/.2))}.collapse{visibility:collapse}.m-0{margin:0}.flex{display:flex}.table{display:table}.grid{display:grid}.h-10{height:2.5rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.min-h-0{min-height:0px}.w-10{width:2.5rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-full{width:100%}.max-w-full{max-width:100%}.border-collapse{border-collapse:collapse}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.rounded-none{border-radius:0}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.object-contain{-o-object-fit:contain;object-fit:contain}.p-0{padding:0}.p-2{padding:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-primary-blue{--tw-text-opacity: 1;color:rgb(9 135 197 / var(--tw-text-opacity))}.text-secondary-braun{--tw-text-opacity: 1;color:rgb(203 197 185 / var(--tw-text-opacity))}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media not all and (min-width: 640px){.max-sm\\:grid{display:grid}.max-sm\\:hidden{display:none}.max-sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.max-sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.max-sm\\:text-lg{font-size:1.125rem;line-height:1.75rem}.max-sm\\:font-bold{font-weight:700}.max-sm\\:text-primary-braun{--tw-text-opacity: 1;color:rgb(107 63 18 / var(--tw-text-opacity))}.max-sm\\:before\\:font-bold:before{content:var(--tw-content);font-weight:700}.max-sm\\:before\\:capitalize:before{content:var(--tw-content);text-transform:capitalize}.max-sm\\:before\\:content-\\[attr\\(data-cell\\)\\]:before{--tw-content: attr(data-cell);content:var(--tw-content)}}@media (min-width: 640px){.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 768px){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width: 1024px){.lg\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}.\\[\\&\\>\\*\\:nth-child\\(odd\\)\\]\\:bg-gray-100>*:nth-child(odd){--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}', oh = {
  name: "VehicleDetails",
  components: {
    MarkdownSection: lf,
    OpeningHours: xf,
    Seasons: Tf,
    Overview: zf,
    TechnicalDetails: qd,
    FirstSection: rh
  },
  props: {
    vehicleId: {
      type: String,
      required: !0,
      default: ""
    }
  },
  setup(e) {
    const t = Xe(null), u = Xe(null), r = Xe(null), n = Xe(null), o = Xe(null), i = Xe(null), s = Xe(null), c = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/resolve`, a = async () => {
      var l;
      try {
        const m = await (await fetch(c)).json();
        t.value = m, u.value = (l = m.descriptions) == null ? void 0 : l.german, r.value = m.contractTerms, n.value = m.pickupAndReturnTimes, o.value = m.rates, i.value = m.minDays, s.value = m.seasons;
      } catch (d) {
        console.error("An error occurred while fetching the data:", d);
      }
    };
    return Zo(() => {
      a();
    }), {
      article: t,
      openingHours: n,
      contractTerms: r,
      rates: o,
      minDays: i,
      seasons: s,
      description: u
    };
  }
}, ih = { class: "flex justify-center w-full" }, sh = { class: "container flex flex-col gap-6 w-full text-left" }, ch = { class: "p-0 m-0 text-xl" }, ah = /* @__PURE__ */ p("div", { class: "divider p-0 m-0" }, null, -1);
function lh(e, t, u, r, n, o) {
  var m;
  const i = Re("FirstSection"), s = Re("Seasons"), c = Re("MarkdownSection"), a = Re("Overview"), l = Re("TechnicalDetails"), d = Re("OpeningHours");
  return F(), N("div", ih, [
    p("div", sh, [
      p("h1", ch, M((m = r.article) == null ? void 0 : m.title), 1),
      ah,
      r.article ? (F(), _e(i, {
        key: 0,
        location: r.article.location,
        maxSeats: r.article.maxSeats,
        maxBeds: r.article.maxBeds,
        petsAllowed: r.article.petsAllowed,
        grossVehicleWeight: r.article.technicalData.grossVehicleWeight,
        onlineBookable: r.article.onlineBookable
      }, null, 8, ["location", "maxSeats", "maxBeds", "petsAllowed", "grossVehicleWeight", "onlineBookable"])) : q("", !0),
      r.rates && r.minDays && r.seasons ? (F(), _e(s, {
        key: 1,
        rates: r.rates,
        minDays: r.minDays,
        seasons: r.seasons
      }, null, 8, ["rates", "minDays", "seasons"])) : q("", !0),
      r.description ? (F(), _e(c, {
        key: 2,
        text: r.description,
        title: "Detaillierte Beschreibung",
        isCollapsible: !1
      }, null, 8, ["text"])) : q("", !0),
      r.article ? (F(), _e(a, {
        key: 3,
        features: r.article.features,
        vehicleId: r.article.id
      }, null, 8, ["features", "vehicleId"])) : q("", !0),
      r.article ? (F(), _e(l, {
        key: 4,
        technicalData: r.article.technicalData,
        isofixSeats: r.article.isofixSeats,
        sittingPlaces: r.article.maxSeats
      }, null, 8, ["technicalData", "isofixSeats", "sittingPlaces"])) : q("", !0),
      r.openingHours ? (F(), _e(d, {
        key: 5,
        openingHours: r.openingHours
      }, null, 8, ["openingHours"])) : q("", !0),
      r.contractTerms ? (F(), _e(c, {
        key: 6,
        text: r.contractTerms,
        title: "Mietbedingungen"
      }, null, 8, ["text"])) : q("", !0)
    ])
  ]);
}
const fh = /* @__PURE__ */ xt(oh, [["render", lh], ["styles", [nh]]]), dh = /* @__PURE__ */ rc(fh);
customElements.define("vehicle-details", dh);
