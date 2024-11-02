/**
* @vue/shared v3.4.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Fr(e, u) {
  const t = new Set(e.split(","));
  return u ? (r) => t.has(r.toLowerCase()) : (r) => t.has(r);
}
const Q = {}, Iu = [], Se = () => {
}, Ro = () => !1, zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Tr = (e) => e.startsWith("onUpdate:"), ce = Object.assign, Rr = (e, u) => {
  const t = e.indexOf(u);
  t > -1 && e.splice(t, 1);
}, Io = Object.prototype.hasOwnProperty, $ = (e, u) => Io.call(e, u), q = Array.isArray, Mu = (e) => Pt(e) === "[object Map]", c0 = (e) => Pt(e) === "[object Set]", U = (e) => typeof e == "function", ne = (e) => typeof e == "string", qu = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", s0 = (e) => (ee(e) || U(e)) && U(e.then) && U(e.catch), a0 = Object.prototype.toString, Pt = (e) => a0.call(e), Mo = (e) => Pt(e).slice(8, -1), l0 = (e) => Pt(e) === "[object Object]", Ir = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, yt = /* @__PURE__ */ Fr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Lt = (e) => {
  const u = /* @__PURE__ */ Object.create(null);
  return (t) => u[t] || (u[t] = e(t));
}, Oo = /-(\w)/g, ye = Lt((e) => e.replace(Oo, (u, t) => t ? t.toUpperCase() : "")), zo = /\B([A-Z])/g, Ie = Lt(
  (e) => e.replace(zo, "-$1").toLowerCase()
), Nt = Lt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yt = Lt((e) => e ? `on${Nt(e)}` : ""), hu = (e, u) => !Object.is(e, u), Jt = (e, u) => {
  for (let t = 0; t < e.length; t++)
    e[t](u);
}, Et = (e, u, t) => {
  Object.defineProperty(e, u, {
    configurable: !0,
    enumerable: !1,
    value: t
  });
}, Po = (e) => {
  const u = parseFloat(e);
  return isNaN(u) ? e : u;
}, an = (e) => {
  const u = ne(e) ? Number(e) : NaN;
  return isNaN(u) ? e : u;
};
let ln;
const f0 = () => ln || (ln = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mr(e) {
  if (q(e)) {
    const u = {};
    for (let t = 0; t < e.length; t++) {
      const r = e[t], n = ne(r) ? qo(r) : Mr(r);
      if (n)
        for (const o in n)
          u[o] = n[o];
    }
    return u;
  } else if (ne(e) || ee(e))
    return e;
}
const Lo = /;(?![^(]*\))/g, No = /:([^]+)/, Bo = /\/\*[^]*?\*\//g;
function qo(e) {
  const u = {};
  return e.replace(Bo, "").split(Lo).forEach((t) => {
    if (t) {
      const r = t.split(No);
      r.length > 1 && (u[r[0].trim()] = r[1].trim());
    }
  }), u;
}
function au(e) {
  let u = "";
  if (ne(e))
    u = e;
  else if (q(e))
    for (let t = 0; t < e.length; t++) {
      const r = au(e[t]);
      r && (u += r + " ");
    }
  else if (ee(e))
    for (const t in e)
      e[t] && (u += t + " ");
  return u.trim();
}
const Ho = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", jo = /* @__PURE__ */ Fr(Ho);
function d0(e) {
  return !!e || e === "";
}
const O = (e) => ne(e) ? e : e == null ? "" : q(e) || ee(e) && (e.toString === a0 || !U(e.toString)) ? JSON.stringify(e, h0, 2) : String(e), h0 = (e, u) => u && u.__v_isRef ? h0(e, u.value) : Mu(u) ? {
  [`Map(${u.size})`]: [...u.entries()].reduce(
    (t, [r, n], o) => (t[Xt(r, o) + " =>"] = n, t),
    {}
  )
} : c0(u) ? {
  [`Set(${u.size})`]: [...u.values()].map((t) => Xt(t))
} : qu(u) ? Xt(u) : ee(u) && !q(u) && !l0(u) ? String(u) : u, Xt = (e, u = "") => {
  var t;
  return qu(e) ? `Symbol(${(t = e.description) != null ? t : u})` : e;
};
/**
* @vue/reactivity v3.4.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Te;
class Uo {
  constructor(u = !1) {
    this.detached = u, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Te, !u && Te && (this.index = (Te.scopes || (Te.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(u) {
    if (this._active) {
      const t = Te;
      try {
        return Te = this, u();
      } finally {
        Te = t;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Te = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Te = this.parent;
  }
  stop(u) {
    if (this._active) {
      let t, r;
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].stop();
      for (t = 0, r = this.cleanups.length; t < r; t++)
        this.cleanups[t]();
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !u) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Vo(e, u = Te) {
  u && u.active && u.effects.push(e);
}
function $o() {
  return Te;
}
let vu;
class Or {
  constructor(u, t, r, n) {
    this.fn = u, this.trigger = t, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, Vo(this, n);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, Eu();
      for (const u of this.deps)
        if (u.computed && (Zo(u.computed), this._dirtyLevel >= 2))
          break;
      Au(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(u) {
    this._dirtyLevel = u ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let u = fu, t = vu;
    try {
      return fu = !0, vu = this, this._runnings++, fn(this), this.fn();
    } finally {
      dn(this), this._runnings--, vu = t, fu = u;
    }
  }
  stop() {
    var u;
    this.active && (fn(this), dn(this), (u = this.onStop) == null || u.call(this), this.active = !1);
  }
}
function Zo(e) {
  return e.value;
}
function fn(e) {
  e._trackId++, e._depsLength = 0;
}
function dn(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let u = e._depsLength; u < e.deps.length; u++)
      p0(e.deps[u], e);
    e.deps.length = e._depsLength;
  }
}
function p0(e, u) {
  const t = e.get(u);
  t !== void 0 && u._trackId !== t && (e.delete(u), e.size === 0 && e.cleanup());
}
let fu = !0, hr = 0;
const b0 = [];
function Eu() {
  b0.push(fu), fu = !1;
}
function Au() {
  const e = b0.pop();
  fu = e === void 0 ? !0 : e;
}
function zr() {
  hr++;
}
function Pr() {
  for (hr--; !hr && pr.length; )
    pr.shift()();
}
function m0(e, u, t) {
  if (u.get(e) !== e._trackId) {
    u.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== u ? (r && p0(r, e), e.deps[e._depsLength++] = u) : e._depsLength++;
  }
}
const pr = [];
function _0(e, u, t) {
  zr();
  for (const r of e.keys())
    if (!(!r.allowRecurse && r._runnings) && r._dirtyLevel < u && (!r._runnings || u !== 2)) {
      const n = r._dirtyLevel;
      r._dirtyLevel = u, n === 0 && (!r._queryings || u !== 2) && (r.trigger(), r.scheduler && pr.push(r.scheduler));
    }
  Pr();
}
const x0 = (e, u) => {
  const t = /* @__PURE__ */ new Map();
  return t.cleanup = e, t.computed = u, t;
}, br = /* @__PURE__ */ new WeakMap(), Cu = Symbol(""), mr = Symbol("");
function _e(e, u, t) {
  if (fu && vu) {
    let r = br.get(e);
    r || br.set(e, r = /* @__PURE__ */ new Map());
    let n = r.get(t);
    n || r.set(t, n = x0(() => r.delete(t))), m0(
      vu,
      n
    );
  }
}
function Qe(e, u, t, r, n, o) {
  const i = br.get(e);
  if (!i)
    return;
  let c = [];
  if (u === "clear")
    c = [...i.values()];
  else if (t === "length" && q(e)) {
    const s = Number(r);
    i.forEach((a, l) => {
      (l === "length" || !qu(l) && l >= s) && c.push(a);
    });
  } else
    switch (t !== void 0 && c.push(i.get(t)), u) {
      case "add":
        q(e) ? Ir(t) && c.push(i.get("length")) : (c.push(i.get(Cu)), Mu(e) && c.push(i.get(mr)));
        break;
      case "delete":
        q(e) || (c.push(i.get(Cu)), Mu(e) && c.push(i.get(mr)));
        break;
      case "set":
        Mu(e) && c.push(i.get(Cu));
        break;
    }
  zr();
  for (const s of c)
    s && _0(
      s,
      3
    );
  Pr();
}
const Wo = /* @__PURE__ */ Fr("__proto__,__v_isRef,__isVue"), g0 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qu)
), hn = /* @__PURE__ */ Go();
function Go() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((u) => {
    e[u] = function(...t) {
      const r = W(this);
      for (let o = 0, i = this.length; o < i; o++)
        _e(r, "get", o + "");
      const n = r[u](...t);
      return n === -1 || n === !1 ? r[u](...t.map(W)) : n;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((u) => {
    e[u] = function(...t) {
      Eu(), zr();
      const r = W(this)[u].apply(this, t);
      return Pr(), Au(), r;
    };
  }), e;
}
function Ko(e) {
  const u = W(this);
  return _e(u, "has", e), u.hasOwnProperty(e);
}
class k0 {
  constructor(u = !1, t = !1) {
    this._isReadonly = u, this._shallow = t;
  }
  get(u, t, r) {
    const n = this._isReadonly, o = this._shallow;
    if (t === "__v_isReactive")
      return !n;
    if (t === "__v_isReadonly")
      return n;
    if (t === "__v_isShallow")
      return o;
    if (t === "__v_raw")
      return r === (n ? o ? si : C0 : o ? v0 : y0).get(u) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(u) === Object.getPrototypeOf(r) ? u : void 0;
    const i = q(u);
    if (!n) {
      if (i && $(hn, t))
        return Reflect.get(hn, t, r);
      if (t === "hasOwnProperty")
        return Ko;
    }
    const c = Reflect.get(u, t, r);
    return (qu(t) ? g0.has(t) : Wo(t)) || (n || _e(u, "get", t), o) ? c : xe(c) ? i && Ir(t) ? c : c.value : ee(c) ? n ? E0(c) : Br(c) : c;
  }
}
class w0 extends k0 {
  constructor(u = !1) {
    super(!1, u);
  }
  set(u, t, r, n) {
    let o = u[t];
    if (!this._shallow) {
      const s = Lu(o);
      if (!At(r) && !Lu(r) && (o = W(o), r = W(r)), !q(u) && xe(o) && !xe(r))
        return s ? !1 : (o.value = r, !0);
    }
    const i = q(u) && Ir(t) ? Number(t) < u.length : $(u, t), c = Reflect.set(u, t, r, n);
    return u === W(n) && (i ? hu(r, o) && Qe(u, "set", t, r) : Qe(u, "add", t, r)), c;
  }
  deleteProperty(u, t) {
    const r = $(u, t);
    u[t];
    const n = Reflect.deleteProperty(u, t);
    return n && r && Qe(u, "delete", t, void 0), n;
  }
  has(u, t) {
    const r = Reflect.has(u, t);
    return (!qu(t) || !g0.has(t)) && _e(u, "has", t), r;
  }
  ownKeys(u) {
    return _e(
      u,
      "iterate",
      q(u) ? "length" : Cu
    ), Reflect.ownKeys(u);
  }
}
class Yo extends k0 {
  constructor(u = !1) {
    super(!0, u);
  }
  set(u, t) {
    return !0;
  }
  deleteProperty(u, t) {
    return !0;
  }
}
const Jo = /* @__PURE__ */ new w0(), Xo = /* @__PURE__ */ new Yo(), Qo = /* @__PURE__ */ new w0(
  !0
), Lr = (e) => e, Bt = (e) => Reflect.getPrototypeOf(e);
function pt(e, u, t = !1, r = !1) {
  e = e.__v_raw;
  const n = W(e), o = W(u);
  t || (hu(u, o) && _e(n, "get", u), _e(n, "get", o));
  const { has: i } = Bt(n), c = r ? Lr : t ? Hr : Xu;
  if (i.call(n, u))
    return c(e.get(u));
  if (i.call(n, o))
    return c(e.get(o));
  e !== n && e.get(u);
}
function bt(e, u = !1) {
  const t = this.__v_raw, r = W(t), n = W(e);
  return u || (hu(e, n) && _e(r, "has", e), _e(r, "has", n)), e === n ? t.has(e) : t.has(e) || t.has(n);
}
function mt(e, u = !1) {
  return e = e.__v_raw, !u && _e(W(e), "iterate", Cu), Reflect.get(e, "size", e);
}
function pn(e) {
  e = W(e);
  const u = W(this);
  return Bt(u).has.call(u, e) || (u.add(e), Qe(u, "add", e, e)), this;
}
function bn(e, u) {
  u = W(u);
  const t = W(this), { has: r, get: n } = Bt(t);
  let o = r.call(t, e);
  o || (e = W(e), o = r.call(t, e));
  const i = n.call(t, e);
  return t.set(e, u), o ? hu(u, i) && Qe(t, "set", e, u) : Qe(t, "add", e, u), this;
}
function mn(e) {
  const u = W(this), { has: t, get: r } = Bt(u);
  let n = t.call(u, e);
  n || (e = W(e), n = t.call(u, e)), r && r.call(u, e);
  const o = u.delete(e);
  return n && Qe(u, "delete", e, void 0), o;
}
function _n() {
  const e = W(this), u = e.size !== 0, t = e.clear();
  return u && Qe(e, "clear", void 0, void 0), t;
}
function _t(e, u) {
  return function(r, n) {
    const o = this, i = o.__v_raw, c = W(i), s = u ? Lr : e ? Hr : Xu;
    return !e && _e(c, "iterate", Cu), i.forEach((a, l) => r.call(n, s(a), s(l), o));
  };
}
function xt(e, u, t) {
  return function(...r) {
    const n = this.__v_raw, o = W(n), i = Mu(o), c = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, a = n[e](...r), l = t ? Lr : u ? Hr : Xu;
    return !u && _e(
      o,
      "iterate",
      s ? mr : Cu
    ), {
      // iterator protocol
      next() {
        const { value: d, done: m } = a.next();
        return m ? { value: d, done: m } : {
          value: c ? [l(d[0]), l(d[1])] : l(d),
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
function ru(e) {
  return function(...u) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ei() {
  const e = {
    get(o) {
      return pt(this, o);
    },
    get size() {
      return mt(this);
    },
    has: bt,
    add: pn,
    set: bn,
    delete: mn,
    clear: _n,
    forEach: _t(!1, !1)
  }, u = {
    get(o) {
      return pt(this, o, !1, !0);
    },
    get size() {
      return mt(this);
    },
    has: bt,
    add: pn,
    set: bn,
    delete: mn,
    clear: _n,
    forEach: _t(!1, !0)
  }, t = {
    get(o) {
      return pt(this, o, !0);
    },
    get size() {
      return mt(this, !0);
    },
    has(o) {
      return bt.call(this, o, !0);
    },
    add: ru("add"),
    set: ru("set"),
    delete: ru("delete"),
    clear: ru("clear"),
    forEach: _t(!0, !1)
  }, r = {
    get(o) {
      return pt(this, o, !0, !0);
    },
    get size() {
      return mt(this, !0);
    },
    has(o) {
      return bt.call(this, o, !0);
    },
    add: ru("add"),
    set: ru("set"),
    delete: ru("delete"),
    clear: ru("clear"),
    forEach: _t(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = xt(
      o,
      !1,
      !1
    ), t[o] = xt(
      o,
      !0,
      !1
    ), u[o] = xt(
      o,
      !1,
      !0
    ), r[o] = xt(
      o,
      !0,
      !0
    );
  }), [
    e,
    t,
    u,
    r
  ];
}
const [
  ui,
  ti,
  ri,
  ni
] = /* @__PURE__ */ ei();
function Nr(e, u) {
  const t = u ? e ? ni : ri : e ? ti : ui;
  return (r, n, o) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? r : Reflect.get(
    $(t, n) && n in r ? t : r,
    n,
    o
  );
}
const oi = {
  get: /* @__PURE__ */ Nr(!1, !1)
}, ii = {
  get: /* @__PURE__ */ Nr(!1, !0)
}, ci = {
  get: /* @__PURE__ */ Nr(!0, !1)
}, y0 = /* @__PURE__ */ new WeakMap(), v0 = /* @__PURE__ */ new WeakMap(), C0 = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap();
function ai(e) {
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
function li(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ai(Mo(e));
}
function Br(e) {
  return Lu(e) ? e : qr(
    e,
    !1,
    Jo,
    oi,
    y0
  );
}
function fi(e) {
  return qr(
    e,
    !1,
    Qo,
    ii,
    v0
  );
}
function E0(e) {
  return qr(
    e,
    !0,
    Xo,
    ci,
    C0
  );
}
function qr(e, u, t, r, n) {
  if (!ee(e) || e.__v_raw && !(u && e.__v_isReactive))
    return e;
  const o = n.get(e);
  if (o)
    return o;
  const i = li(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? r : t
  );
  return n.set(e, c), c;
}
function Ou(e) {
  return Lu(e) ? Ou(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Lu(e) {
  return !!(e && e.__v_isReadonly);
}
function At(e) {
  return !!(e && e.__v_isShallow);
}
function A0(e) {
  return Ou(e) || Lu(e);
}
function W(e) {
  const u = e && e.__v_raw;
  return u ? W(u) : e;
}
function D0(e) {
  return Et(e, "__v_skip", !0), e;
}
const Xu = (e) => ee(e) ? Br(e) : e, Hr = (e) => ee(e) ? E0(e) : e;
class S0 {
  constructor(u, t, r, n) {
    this._setter = t, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Or(
      () => u(this._value),
      () => _r(this, 1)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !n, this.__v_isReadonly = r;
  }
  get value() {
    const u = W(this);
    return F0(u), (!u._cacheable || u.effect.dirty) && hu(u._value, u._value = u.effect.run()) && _r(u, 2), u._value;
  }
  set value(u) {
    this._setter(u);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(u) {
    this.effect.dirty = u;
  }
  // #endregion
}
function di(e, u, t = !1) {
  let r, n;
  const o = U(e);
  return o ? (r = e, n = Se) : (r = e.get, n = e.set), new S0(r, n, o || !n, t);
}
function F0(e) {
  fu && vu && (e = W(e), m0(
    vu,
    e.dep || (e.dep = x0(
      () => e.dep = void 0,
      e instanceof S0 ? e : void 0
    ))
  ));
}
function _r(e, u = 3, t) {
  e = W(e);
  const r = e.dep;
  r && _0(
    r,
    u
  );
}
function xe(e) {
  return !!(e && e.__v_isRef === !0);
}
function Xe(e) {
  return hi(e, !1);
}
function hi(e, u) {
  return xe(e) ? e : new pi(e, u);
}
class pi {
  constructor(u, t) {
    this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? u : W(u), this._value = t ? u : Xu(u);
  }
  get value() {
    return F0(this), this._value;
  }
  set value(u) {
    const t = this.__v_isShallow || At(u) || Lu(u);
    u = t ? u : W(u), hu(u, this._rawValue) && (this._rawValue = u, this._value = t ? u : Xu(u), _r(this, 3));
  }
}
function bi(e) {
  return xe(e) ? e.value : e;
}
const mi = {
  get: (e, u, t) => bi(Reflect.get(e, u, t)),
  set: (e, u, t, r) => {
    const n = e[u];
    return xe(n) && !xe(t) ? (n.value = t, !0) : Reflect.set(e, u, t, r);
  }
};
function T0(e) {
  return Ou(e) ? e : new Proxy(e, mi);
}
/**
* @vue/runtime-core v3.4.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function du(e, u, t, r) {
  let n;
  try {
    n = r ? e(...r) : e();
  } catch (o) {
    qt(o, u, t);
  }
  return n;
}
function Oe(e, u, t, r) {
  if (U(e)) {
    const o = du(e, u, t, r);
    return o && s0(o) && o.catch((i) => {
      qt(i, u, t);
    }), o;
  }
  const n = [];
  for (let o = 0; o < e.length; o++)
    n.push(Oe(e[o], u, t, r));
  return n;
}
function qt(e, u, t, r = !0) {
  const n = u ? u.vnode : null;
  if (u) {
    let o = u.parent;
    const i = u.proxy, c = `https://vuejs.org/errors/#runtime-${t}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let l = 0; l < a.length; l++)
          if (a[l](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const s = u.appContext.config.errorHandler;
    if (s) {
      du(
        s,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  _i(e, t, n, r);
}
function _i(e, u, t, r = !0) {
  console.error(e);
}
let Qu = !1, xr = !1;
const le = [];
let je = 0;
const zu = [];
let nu = null, yu = 0;
const R0 = /* @__PURE__ */ Promise.resolve();
let jr = null;
function I0(e) {
  const u = jr || R0;
  return e ? u.then(this ? e.bind(this) : e) : u;
}
function xi(e) {
  let u = je + 1, t = le.length;
  for (; u < t; ) {
    const r = u + t >>> 1, n = le[r], o = et(n);
    o < e || o === e && n.pre ? u = r + 1 : t = r;
  }
  return u;
}
function Ur(e) {
  (!le.length || !le.includes(
    e,
    Qu && e.allowRecurse ? je + 1 : je
  )) && (e.id == null ? le.push(e) : le.splice(xi(e.id), 0, e), M0());
}
function M0() {
  !Qu && !xr && (xr = !0, jr = R0.then(z0));
}
function gi(e) {
  const u = le.indexOf(e);
  u > je && le.splice(u, 1);
}
function ki(e) {
  q(e) ? zu.push(...e) : (!nu || !nu.includes(
    e,
    e.allowRecurse ? yu + 1 : yu
  )) && zu.push(e), M0();
}
function xn(e, u, t = Qu ? je + 1 : 0) {
  for (; t < le.length; t++) {
    const r = le[t];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      le.splice(t, 1), t--, r();
    }
  }
}
function O0(e) {
  if (zu.length) {
    const u = [...new Set(zu)].sort(
      (t, r) => et(t) - et(r)
    );
    if (zu.length = 0, nu) {
      nu.push(...u);
      return;
    }
    for (nu = u, yu = 0; yu < nu.length; yu++)
      nu[yu]();
    nu = null, yu = 0;
  }
}
const et = (e) => e.id == null ? 1 / 0 : e.id, wi = (e, u) => {
  const t = et(e) - et(u);
  if (t === 0) {
    if (e.pre && !u.pre)
      return -1;
    if (u.pre && !e.pre)
      return 1;
  }
  return t;
};
function z0(e) {
  xr = !1, Qu = !0, le.sort(wi);
  try {
    for (je = 0; je < le.length; je++) {
      const u = le[je];
      u && u.active !== !1 && du(u, null, 14);
    }
  } finally {
    je = 0, le.length = 0, O0(), Qu = !1, jr = null, (le.length || zu.length) && z0();
  }
}
function yi(e, u, ...t) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || Q;
  let n = t;
  const o = u.startsWith("update:"), i = o && u.slice(7);
  if (i && i in r) {
    const l = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: m } = r[l] || Q;
    m && (n = t.map((_) => ne(_) ? _.trim() : _)), d && (n = t.map(Po));
  }
  let c, s = r[c = Yt(u)] || // also try camelCase event handler (#2249)
  r[c = Yt(ye(u))];
  !s && o && (s = r[c = Yt(Ie(u))]), s && Oe(
    s,
    e,
    6,
    n
  );
  const a = r[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Oe(
      a,
      e,
      6,
      n
    );
  }
}
function P0(e, u, t = !1) {
  const r = u.emitsCache, n = r.get(e);
  if (n !== void 0)
    return n;
  const o = e.emits;
  let i = {}, c = !1;
  if (!U(e)) {
    const s = (a) => {
      const l = P0(a, u, !0);
      l && (c = !0, ce(i, l));
    };
    !t && u.mixins.length && u.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !c ? (ee(e) && r.set(e, null), null) : (q(o) ? o.forEach((s) => i[s] = null) : ce(i, o), ee(e) && r.set(e, i), i);
}
function Ht(e, u) {
  return !e || !zt(u) ? !1 : (u = u.slice(2).replace(/Once$/, ""), $(e, u[0].toLowerCase() + u.slice(1)) || $(e, Ie(u)) || $(e, u));
}
let he = null, L0 = null;
function Dt(e) {
  const u = he;
  return he = e, L0 = e && e.type.__scopeId || null, u;
}
function eu(e, u = he, t) {
  if (!u || e._n)
    return e;
  const r = (...n) => {
    r._d && Tn(-1);
    const o = Dt(u);
    let i;
    try {
      i = e(...n);
    } finally {
      Dt(o), r._d && Tn(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Qt(e) {
  const {
    type: u,
    vnode: t,
    proxy: r,
    withProxy: n,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: s,
    emit: a,
    render: l,
    renderCache: d,
    data: m,
    setupState: _,
    ctx: b,
    inheritAttrs: S
  } = e;
  let z, N;
  const j = Dt(e);
  try {
    if (t.shapeFlag & 4) {
      const R = n || r, A = R;
      z = He(
        l.call(
          A,
          R,
          d,
          o,
          _,
          m,
          b
        )
      ), N = s;
    } else {
      const R = u;
      z = He(
        R.length > 1 ? R(
          o,
          { attrs: s, slots: c, emit: a }
        ) : R(
          o,
          null
          /* we know it doesn't need it */
        )
      ), N = u.props ? s : vi(s);
    }
  } catch (R) {
    Ju.length = 0, qt(R, e, 1), z = ze(pu);
  }
  let C = z;
  if (N && S !== !1) {
    const R = Object.keys(N), { shapeFlag: A } = C;
    R.length && A & 7 && (i && R.some(Tr) && (N = Ci(
      N,
      i
    )), C = Nu(C, N));
  }
  return t.dirs && (C = Nu(C), C.dirs = C.dirs ? C.dirs.concat(t.dirs) : t.dirs), t.transition && (C.transition = t.transition), z = C, Dt(j), z;
}
const vi = (e) => {
  let u;
  for (const t in e)
    (t === "class" || t === "style" || zt(t)) && ((u || (u = {}))[t] = e[t]);
  return u;
}, Ci = (e, u) => {
  const t = {};
  for (const r in e)
    (!Tr(r) || !(r.slice(9) in u)) && (t[r] = e[r]);
  return t;
};
function Ei(e, u, t) {
  const { props: r, children: n, component: o } = e, { props: i, children: c, patchFlag: s } = u, a = o.emitsOptions;
  if (u.dirs || u.transition)
    return !0;
  if (t && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return r ? gn(r, i, a) : !!i;
    if (s & 8) {
      const l = u.dynamicProps;
      for (let d = 0; d < l.length; d++) {
        const m = l[d];
        if (i[m] !== r[m] && !Ht(a, m))
          return !0;
      }
    }
  } else
    return (n || c) && (!c || !c.$stable) ? !0 : r === i ? !1 : r ? i ? gn(r, i, a) : !0 : !!i;
  return !1;
}
function gn(e, u, t) {
  const r = Object.keys(u);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (u[o] !== e[o] && !Ht(t, o))
      return !0;
  }
  return !1;
}
function Ai({ vnode: e, parent: u }, t) {
  for (; u; ) {
    const r = u.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = u.vnode).el = t, u = u.parent;
    else
      break;
  }
}
const N0 = "components";
function Re(e, u) {
  return Si(N0, e, !0, u) || e;
}
const Di = Symbol.for("v-ndc");
function Si(e, u, t = !0, r = !1) {
  const n = he || fe;
  if (n) {
    const o = n.type;
    if (e === N0) {
      const c = yc(
        o,
        !1
      );
      if (c && (c === u || c === ye(u) || c === Nt(ye(u))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      kn(n[e] || o[e], u) || // global registration
      kn(n.appContext[e], u)
    );
    return !i && r ? o : i;
  }
}
function kn(e, u) {
  return e && (e[u] || e[ye(u)] || e[Nt(ye(u))]);
}
const Fi = (e) => e.__isSuspense;
function Ti(e, u) {
  u && u.pendingBranch ? q(e) ? u.effects.push(...e) : u.effects.push(e) : ki(e);
}
const Ri = Symbol.for("v-scx"), Ii = () => vt(Ri), gt = {};
function er(e, u, t) {
  return B0(e, u, t);
}
function B0(e, u, {
  immediate: t,
  deep: r,
  flush: n,
  once: o,
  onTrack: i,
  onTrigger: c
} = Q) {
  if (u && o) {
    const I = u;
    u = (...K) => {
      I(...K), A();
    };
  }
  const s = fe, a = (I) => r === !0 ? I : (
    // for deep: false, only traverse root-level properties
    Ru(I, r === !1 ? 1 : void 0)
  );
  let l, d = !1, m = !1;
  if (xe(e) ? (l = () => e.value, d = At(e)) : Ou(e) ? (l = () => a(e), d = !0) : q(e) ? (m = !0, d = e.some((I) => Ou(I) || At(I)), l = () => e.map((I) => {
    if (xe(I))
      return I.value;
    if (Ou(I))
      return a(I);
    if (U(I))
      return du(I, s, 2);
  })) : U(e) ? u ? l = () => du(e, s, 2) : l = () => (_ && _(), Oe(
    e,
    s,
    3,
    [b]
  )) : l = Se, u && r) {
    const I = l;
    l = () => Ru(I());
  }
  let _, b = (I) => {
    _ = C.onStop = () => {
      du(I, s, 4), _ = C.onStop = void 0;
    };
  }, S;
  if ($t)
    if (b = Se, u ? t && Oe(u, s, 3, [
      l(),
      m ? [] : void 0,
      b
    ]) : l(), n === "sync") {
      const I = Ii();
      S = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return Se;
  let z = m ? new Array(e.length).fill(gt) : gt;
  const N = () => {
    if (!(!C.active || !C.dirty))
      if (u) {
        const I = C.run();
        (r || d || (m ? I.some((K, te) => hu(K, z[te])) : hu(I, z))) && (_ && _(), Oe(u, s, 3, [
          I,
          // pass undefined as the old value when it's changed for the first time
          z === gt ? void 0 : m && z[0] === gt ? [] : z,
          b
        ]), z = I);
      } else
        C.run();
  };
  N.allowRecurse = !!u;
  let j;
  n === "sync" ? j = N : n === "post" ? j = () => be(N, s && s.suspense) : (N.pre = !0, s && (N.id = s.uid), j = () => Ur(N));
  const C = new Or(l, Se, j), R = $o(), A = () => {
    C.stop(), R && Rr(R.effects, C);
  };
  return u ? t ? N() : z = C.run() : n === "post" ? be(
    C.run.bind(C),
    s && s.suspense
  ) : C.run(), S && S.push(A), A;
}
function Mi(e, u, t) {
  const r = this.proxy, n = ne(e) ? e.includes(".") ? q0(r, e) : () => r[e] : e.bind(r, r);
  let o;
  U(u) ? o = u : (o = u.handler, t = u);
  const i = ct(this), c = B0(n, o.bind(r), t);
  return i(), c;
}
function q0(e, u) {
  const t = u.split(".");
  return () => {
    let r = e;
    for (let n = 0; n < t.length && r; n++)
      r = r[t[n]];
    return r;
  };
}
function Ru(e, u, t = 0, r) {
  if (!ee(e) || e.__v_skip)
    return e;
  if (u && u > 0) {
    if (t >= u)
      return e;
    t++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), xe(e))
    Ru(e.value, u, t, r);
  else if (q(e))
    for (let n = 0; n < e.length; n++)
      Ru(e[n], u, t, r);
  else if (c0(e) || Mu(e))
    e.forEach((n) => {
      Ru(n, u, t, r);
    });
  else if (l0(e))
    for (const n in e)
      Ru(e[n], u, t, r);
  return e;
}
function gu(e, u, t, r) {
  const n = e.dirs, o = u && u.dirs;
  for (let i = 0; i < n.length; i++) {
    const c = n[i];
    o && (c.oldValue = o[i].value);
    let s = c.dir[r];
    s && (Eu(), Oe(s, t, 8, [
      e.el,
      c,
      e,
      u
    ]), Au());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Oi(e, u) {
  return U(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, u, { setup: e })
  ) : e;
}
const Ku = (e) => !!e.type.__asyncLoader, H0 = (e) => e.type.__isKeepAlive;
function zi(e, u) {
  j0(e, "a", u);
}
function Pi(e, u) {
  j0(e, "da", u);
}
function j0(e, u, t = fe) {
  const r = e.__wdc || (e.__wdc = () => {
    let n = t;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (jt(u, r, t), t) {
    let n = t.parent;
    for (; n && n.parent; )
      H0(n.parent.vnode) && Li(r, u, t, n), n = n.parent;
  }
}
function Li(e, u, t, r) {
  const n = jt(
    u,
    e,
    r,
    !0
    /* prepend */
  );
  V0(() => {
    Rr(r[u], n);
  }, t);
}
function jt(e, u, t = fe, r = !1) {
  if (t) {
    const n = t[e] || (t[e] = []), o = u.__weh || (u.__weh = (...i) => {
      if (t.isUnmounted)
        return;
      Eu();
      const c = ct(t), s = Oe(u, t, e, i);
      return c(), Au(), s;
    });
    return r ? n.unshift(o) : n.push(o), o;
  }
}
const uu = (e) => (u, t = fe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!$t || e === "sp") && jt(e, (...r) => u(...r), t)
), Ni = uu("bm"), U0 = uu("m"), Bi = uu("bu"), qi = uu("u"), Hi = uu("bum"), V0 = uu("um"), ji = uu("sp"), Ui = uu(
  "rtg"
), Vi = uu(
  "rtc"
);
function $i(e, u = fe) {
  jt("ec", e, u);
}
function St(e, u, t, r) {
  let n;
  const o = t && t[r];
  if (q(e) || ne(e)) {
    n = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      n[i] = u(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    n = new Array(e);
    for (let i = 0; i < e; i++)
      n[i] = u(i + 1, i, void 0, o && o[i]);
  } else if (ee(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (i, c) => u(i, c, void 0, o && o[c])
      );
    else {
      const i = Object.keys(e);
      n = new Array(i.length);
      for (let c = 0, s = i.length; c < s; c++) {
        const a = i[c];
        n[c] = u(e[a], a, c, o && o[c]);
      }
    }
  else
    n = [];
  return t && (t[r] = n), n;
}
function wn(e, u, t = {}, r, n) {
  if (he.isCE || he.parent && Ku(he.parent) && he.parent.isCE)
    return u !== "default" && (t.name = u), ze("slot", t, r && r());
  let o = e[u];
  o && o._c && (o._d = !1), T();
  const i = o && $0(o(t)), c = me(
    ae,
    {
      key: t.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${u}`
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !n && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), o && o._c && (o._d = !0), c;
}
function $0(e) {
  return e.some((u) => to(u) ? !(u.type === pu || u.type === ae && !$0(u.children)) : !0) ? e : null;
}
const gr = (e) => e ? no(e) ? Wr(e) || e.proxy : gr(e.parent) : null, Yu = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => gr(e.parent),
    $root: (e) => gr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Vr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Ur(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = I0.bind(e.proxy)),
    $watch: (e) => Mi.bind(e)
  })
), ur = (e, u) => e !== Q && !e.__isScriptSetup && $(e, u), Zi = {
  get({ _: e }, u) {
    const { ctx: t, setupState: r, data: n, props: o, accessCache: i, type: c, appContext: s } = e;
    let a;
    if (u[0] !== "$") {
      const _ = i[u];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return r[u];
          case 2:
            return n[u];
          case 4:
            return t[u];
          case 3:
            return o[u];
        }
      else {
        if (ur(r, u))
          return i[u] = 1, r[u];
        if (n !== Q && $(n, u))
          return i[u] = 2, n[u];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && $(a, u)
        )
          return i[u] = 3, o[u];
        if (t !== Q && $(t, u))
          return i[u] = 4, t[u];
        kr && (i[u] = 0);
      }
    }
    const l = Yu[u];
    let d, m;
    if (l)
      return u === "$attrs" && _e(e, "get", u), l(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[u])
    )
      return d;
    if (t !== Q && $(t, u))
      return i[u] = 4, t[u];
    if (
      // global properties
      m = s.config.globalProperties, $(m, u)
    )
      return m[u];
  },
  set({ _: e }, u, t) {
    const { data: r, setupState: n, ctx: o } = e;
    return ur(n, u) ? (n[u] = t, !0) : r !== Q && $(r, u) ? (r[u] = t, !0) : $(e.props, u) || u[0] === "$" && u.slice(1) in e ? !1 : (o[u] = t, !0);
  },
  has({
    _: { data: e, setupState: u, accessCache: t, ctx: r, appContext: n, propsOptions: o }
  }, i) {
    let c;
    return !!t[i] || e !== Q && $(e, i) || ur(u, i) || (c = o[0]) && $(c, i) || $(r, i) || $(Yu, i) || $(n.config.globalProperties, i);
  },
  defineProperty(e, u, t) {
    return t.get != null ? e._.accessCache[u] = 0 : $(t, "value") && this.set(e, u, t.value, null), Reflect.defineProperty(e, u, t);
  }
};
function yn(e) {
  return q(e) ? e.reduce(
    (u, t) => (u[t] = null, u),
    {}
  ) : e;
}
let kr = !0;
function Wi(e) {
  const u = Vr(e), t = e.proxy, r = e.ctx;
  kr = !1, u.beforeCreate && vn(u.beforeCreate, e, "bc");
  const {
    // state
    data: n,
    computed: o,
    methods: i,
    watch: c,
    provide: s,
    inject: a,
    // lifecycle
    created: l,
    beforeMount: d,
    mounted: m,
    beforeUpdate: _,
    updated: b,
    activated: S,
    deactivated: z,
    beforeDestroy: N,
    beforeUnmount: j,
    destroyed: C,
    unmounted: R,
    render: A,
    renderTracked: I,
    renderTriggered: K,
    errorCaptured: te,
    serverPrefetch: Ce,
    // public API
    expose: Ee,
    inheritAttrs: Le,
    // assets
    components: We,
    directives: Ge,
    filters: Ke
  } = u;
  if (a && Gi(a, r, null), i)
    for (const J in i) {
      const G = i[J];
      U(G) && (r[J] = G.bind(t));
    }
  if (n) {
    const J = n.call(t, t);
    ee(J) && (e.data = Br(J));
  }
  if (kr = !0, o)
    for (const J in o) {
      const G = o[J], Ne = U(G) ? G.bind(t, t) : U(G.get) ? G.get.bind(t, t) : Se, _u = !U(G) && U(G.set) ? G.set.bind(t) : Se, Be = Gr({
        get: Ne,
        set: _u
      });
      Object.defineProperty(r, J, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (ke) => Be.value = ke
      });
    }
  if (c)
    for (const J in c)
      Z0(c[J], r, t, J);
  if (s) {
    const J = U(s) ? s.call(t) : s;
    Reflect.ownKeys(J).forEach((G) => {
      ec(G, J[G]);
    });
  }
  l && vn(l, e, "c");
  function re(J, G) {
    q(G) ? G.forEach((Ne) => J(Ne.bind(t))) : G && J(G.bind(t));
  }
  if (re(Ni, d), re(U0, m), re(Bi, _), re(qi, b), re(zi, S), re(Pi, z), re($i, te), re(Vi, I), re(Ui, K), re(Hi, j), re(V0, R), re(ji, Ce), q(Ee))
    if (Ee.length) {
      const J = e.exposed || (e.exposed = {});
      Ee.forEach((G) => {
        Object.defineProperty(J, G, {
          get: () => t[G],
          set: (Ne) => t[G] = Ne
        });
      });
    } else
      e.exposed || (e.exposed = {});
  A && e.render === Se && (e.render = A), Le != null && (e.inheritAttrs = Le), We && (e.components = We), Ge && (e.directives = Ge);
}
function Gi(e, u, t = Se) {
  q(e) && (e = wr(e));
  for (const r in e) {
    const n = e[r];
    let o;
    ee(n) ? "default" in n ? o = vt(
      n.from || r,
      n.default,
      !0
    ) : o = vt(n.from || r) : o = vt(n), xe(o) ? Object.defineProperty(u, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : u[r] = o;
  }
}
function vn(e, u, t) {
  Oe(
    q(e) ? e.map((r) => r.bind(u.proxy)) : e.bind(u.proxy),
    u,
    t
  );
}
function Z0(e, u, t, r) {
  const n = r.includes(".") ? q0(t, r) : () => t[r];
  if (ne(e)) {
    const o = u[e];
    U(o) && er(n, o);
  } else if (U(e))
    er(n, e.bind(t));
  else if (ee(e))
    if (q(e))
      e.forEach((o) => Z0(o, u, t, r));
    else {
      const o = U(e.handler) ? e.handler.bind(t) : u[e.handler];
      U(o) && er(n, o, e);
    }
}
function Vr(e) {
  const u = e.type, { mixins: t, extends: r } = u, {
    mixins: n,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(u);
  let s;
  return c ? s = c : !n.length && !t && !r ? s = u : (s = {}, n.length && n.forEach(
    (a) => Ft(s, a, i, !0)
  ), Ft(s, u, i)), ee(u) && o.set(u, s), s;
}
function Ft(e, u, t, r = !1) {
  const { mixins: n, extends: o } = u;
  o && Ft(e, o, t, !0), n && n.forEach(
    (i) => Ft(e, i, t, !0)
  );
  for (const i in u)
    if (!(r && i === "expose")) {
      const c = Ki[i] || t && t[i];
      e[i] = c ? c(e[i], u[i]) : u[i];
    }
  return e;
}
const Ki = {
  data: Cn,
  props: En,
  emits: En,
  // objects
  methods: Gu,
  computed: Gu,
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
  components: Gu,
  directives: Gu,
  // watch
  watch: Ji,
  // provide / inject
  provide: Cn,
  inject: Yi
};
function Cn(e, u) {
  return u ? e ? function() {
    return ce(
      U(e) ? e.call(this, this) : e,
      U(u) ? u.call(this, this) : u
    );
  } : u : e;
}
function Yi(e, u) {
  return Gu(wr(e), wr(u));
}
function wr(e) {
  if (q(e)) {
    const u = {};
    for (let t = 0; t < e.length; t++)
      u[e[t]] = e[t];
    return u;
  }
  return e;
}
function de(e, u) {
  return e ? [...new Set([].concat(e, u))] : u;
}
function Gu(e, u) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, u) : u;
}
function En(e, u) {
  return e ? q(e) && q(u) ? [.../* @__PURE__ */ new Set([...e, ...u])] : ce(
    /* @__PURE__ */ Object.create(null),
    yn(e),
    yn(u ?? {})
  ) : u;
}
function Ji(e, u) {
  if (!e)
    return u;
  if (!u)
    return e;
  const t = ce(/* @__PURE__ */ Object.create(null), e);
  for (const r in u)
    t[r] = de(e[r], u[r]);
  return t;
}
function W0() {
  return {
    app: null,
    config: {
      isNativeTag: Ro,
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
let Xi = 0;
function Qi(e, u) {
  return function(r, n = null) {
    U(r) || (r = ce({}, r)), n != null && !ee(n) && (n = null);
    const o = W0(), i = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const s = o.app = {
      _uid: Xi++,
      _component: r,
      _props: n,
      _container: null,
      _context: o,
      _instance: null,
      version: Cc,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...l) {
        return i.has(a) || (a && U(a.install) ? (i.add(a), a.install(s, ...l)) : U(a) && (i.add(a), a(s, ...l))), s;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), s;
      },
      component(a, l) {
        return l ? (o.components[a] = l, s) : o.components[a];
      },
      directive(a, l) {
        return l ? (o.directives[a] = l, s) : o.directives[a];
      },
      mount(a, l, d) {
        if (!c) {
          const m = ze(r, n);
          return m.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), l && u ? u(m, a) : e(m, a, d), c = !0, s._container = a, a.__vue_app__ = s, Wr(m.component) || m.component.proxy;
        }
      },
      unmount() {
        c && (e(null, s._container), delete s._container.__vue_app__);
      },
      provide(a, l) {
        return o.provides[a] = l, s;
      },
      runWithContext(a) {
        Tt = s;
        try {
          return a();
        } finally {
          Tt = null;
        }
      }
    };
    return s;
  };
}
let Tt = null;
function ec(e, u) {
  if (fe) {
    let t = fe.provides;
    const r = fe.parent && fe.parent.provides;
    r === t && (t = fe.provides = Object.create(r)), t[e] = u;
  }
}
function vt(e, u, t = !1) {
  const r = fe || he;
  if (r || Tt) {
    const n = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Tt._context.provides;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return t && U(u) ? u.call(r && r.proxy) : u;
  }
}
function uc(e, u, t, r = !1) {
  const n = {}, o = {};
  Et(o, Vt, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), G0(e, u, n, o);
  for (const i in e.propsOptions[0])
    i in n || (n[i] = void 0);
  t ? e.props = r ? n : fi(n) : e.type.props ? e.props = n : e.props = o, e.attrs = o;
}
function tc(e, u, t, r) {
  const {
    props: n,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = W(n), [s] = e.propsOptions;
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
        if (Ht(e.emitsOptions, m))
          continue;
        const _ = u[m];
        if (s)
          if ($(o, m))
            _ !== o[m] && (o[m] = _, a = !0);
          else {
            const b = ye(m);
            n[b] = yr(
              s,
              c,
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
    G0(e, u, n, o) && (a = !0);
    let l;
    for (const d in c)
      (!u || // for camelCase
      !$(u, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = Ie(d)) === d || !$(u, l))) && (s ? t && // for camelCase
      (t[d] !== void 0 || // for kebab-case
      t[l] !== void 0) && (n[d] = yr(
        s,
        c,
        d,
        void 0,
        e,
        !0
      )) : delete n[d]);
    if (o !== c)
      for (const d in o)
        (!u || !$(u, d)) && (delete o[d], a = !0);
  }
  a && Qe(e, "set", "$attrs");
}
function G0(e, u, t, r) {
  const [n, o] = e.propsOptions;
  let i = !1, c;
  if (u)
    for (let s in u) {
      if (yt(s))
        continue;
      const a = u[s];
      let l;
      n && $(n, l = ye(s)) ? !o || !o.includes(l) ? t[l] = a : (c || (c = {}))[l] = a : Ht(e.emitsOptions, s) || (!(s in r) || a !== r[s]) && (r[s] = a, i = !0);
    }
  if (o) {
    const s = W(t), a = c || Q;
    for (let l = 0; l < o.length; l++) {
      const d = o[l];
      t[d] = yr(
        n,
        s,
        d,
        a[d],
        e,
        !$(a, d)
      );
    }
  }
  return i;
}
function yr(e, u, t, r, n, o) {
  const i = e[t];
  if (i != null) {
    const c = $(i, "default");
    if (c && r === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && U(s)) {
        const { propsDefaults: a } = n;
        if (t in a)
          r = a[t];
        else {
          const l = ct(n);
          r = a[t] = s.call(
            null,
            u
          ), l();
        }
      } else
        r = s;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !c ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ie(t)) && (r = !0));
  }
  return r;
}
function K0(e, u, t = !1) {
  const r = u.propsCache, n = r.get(e);
  if (n)
    return n;
  const o = e.props, i = {}, c = [];
  let s = !1;
  if (!U(e)) {
    const l = (d) => {
      s = !0;
      const [m, _] = K0(d, u, !0);
      ce(i, m), _ && c.push(..._);
    };
    !t && u.mixins.length && u.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  if (!o && !s)
    return ee(e) && r.set(e, Iu), Iu;
  if (q(o))
    for (let l = 0; l < o.length; l++) {
      const d = ye(o[l]);
      An(d) && (i[d] = Q);
    }
  else if (o)
    for (const l in o) {
      const d = ye(l);
      if (An(d)) {
        const m = o[l], _ = i[d] = q(m) || U(m) ? { type: m } : ce({}, m);
        if (_) {
          const b = Fn(Boolean, _.type), S = Fn(String, _.type);
          _[
            0
            /* shouldCast */
          ] = b > -1, _[
            1
            /* shouldCastTrue */
          ] = S < 0 || b < S, (b > -1 || $(_, "default")) && c.push(d);
        }
      }
    }
  const a = [i, c];
  return ee(e) && r.set(e, a), a;
}
function An(e) {
  return e[0] !== "$";
}
function Dn(e) {
  const u = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return u ? u[2] : e === null ? "null" : "";
}
function Sn(e, u) {
  return Dn(e) === Dn(u);
}
function Fn(e, u) {
  return q(u) ? u.findIndex((t) => Sn(t, e)) : U(u) && Sn(u, e) ? 0 : -1;
}
const Y0 = (e) => e[0] === "_" || e === "$stable", $r = (e) => q(e) ? e.map(He) : [He(e)], rc = (e, u, t) => {
  if (u._n)
    return u;
  const r = eu((...n) => $r(u(...n)), t);
  return r._c = !1, r;
}, J0 = (e, u, t) => {
  const r = e._ctx;
  for (const n in e) {
    if (Y0(n))
      continue;
    const o = e[n];
    if (U(o))
      u[n] = rc(n, o, r);
    else if (o != null) {
      const i = $r(o);
      u[n] = () => i;
    }
  }
}, X0 = (e, u) => {
  const t = $r(u);
  e.slots.default = () => t;
}, nc = (e, u) => {
  if (e.vnode.shapeFlag & 32) {
    const t = u._;
    t ? (e.slots = W(u), Et(u, "_", t)) : J0(
      u,
      e.slots = {}
    );
  } else
    e.slots = {}, u && X0(e, u);
  Et(e.slots, Vt, 1);
}, oc = (e, u, t) => {
  const { vnode: r, slots: n } = e;
  let o = !0, i = Q;
  if (r.shapeFlag & 32) {
    const c = u._;
    c ? t && c === 1 ? o = !1 : (ce(n, u), !t && c === 1 && delete n._) : (o = !u.$stable, J0(u, n)), i = u;
  } else
    u && (X0(e, u), i = { default: 1 });
  if (o)
    for (const c in n)
      !Y0(c) && i[c] == null && delete n[c];
};
function vr(e, u, t, r, n = !1) {
  if (q(e)) {
    e.forEach(
      (m, _) => vr(
        m,
        u && (q(u) ? u[_] : u),
        t,
        r,
        n
      )
    );
    return;
  }
  if (Ku(r) && !n)
    return;
  const o = r.shapeFlag & 4 ? Wr(r.component) || r.component.proxy : r.el, i = n ? null : o, { i: c, r: s } = e, a = u && u.r, l = c.refs === Q ? c.refs = {} : c.refs, d = c.setupState;
  if (a != null && a !== s && (ne(a) ? (l[a] = null, $(d, a) && (d[a] = null)) : xe(a) && (a.value = null)), U(s))
    du(s, c, 12, [i, l]);
  else {
    const m = ne(s), _ = xe(s);
    if (m || _) {
      const b = () => {
        if (e.f) {
          const S = m ? $(d, s) ? d[s] : l[s] : s.value;
          n ? q(S) && Rr(S, o) : q(S) ? S.includes(o) || S.push(o) : m ? (l[s] = [o], $(d, s) && (d[s] = l[s])) : (s.value = [o], e.k && (l[e.k] = s.value));
        } else
          m ? (l[s] = i, $(d, s) && (d[s] = i)) : _ && (s.value = i, e.k && (l[e.k] = i));
      };
      i ? (b.id = -1, be(b, t)) : b();
    }
  }
}
const be = Ti;
function ic(e) {
  return cc(e);
}
function cc(e, u) {
  const t = f0();
  t.__VUE__ = !0;
  const {
    insert: r,
    remove: n,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: s,
    setText: a,
    setElementText: l,
    parentNode: d,
    nextSibling: m,
    setScopeId: _ = Se,
    insertStaticContent: b
  } = e, S = (f, h, x, g = null, k = null, v = null, D = void 0, y = null, E = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !Wu(f, h) && (g = xu(f), ke(f, k, v, !0), f = null), h.patchFlag === -2 && (E = !1, h.dynamicChildren = null);
    const { type: w, ref: F, shapeFlag: P } = h;
    switch (w) {
      case Ut:
        z(f, h, x, g);
        break;
      case pu:
        N(f, h, x, g);
        break;
      case rr:
        f == null && j(h, x, g, D);
        break;
      case ae:
        We(
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
        P & 1 ? A(
          f,
          h,
          x,
          g,
          k,
          v,
          D,
          y,
          E
        ) : P & 6 ? Ge(
          f,
          h,
          x,
          g,
          k,
          v,
          D,
          y,
          E
        ) : (P & 64 || P & 128) && w.process(
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
    F != null && k && vr(F, f && f.ref, v, h || f, !h);
  }, z = (f, h, x, g) => {
    if (f == null)
      r(
        h.el = c(h.children),
        x,
        g
      );
    else {
      const k = h.el = f.el;
      h.children !== f.children && a(k, h.children);
    }
  }, N = (f, h, x, g) => {
    f == null ? r(
      h.el = s(h.children || ""),
      x,
      g
    ) : h.el = f.el;
  }, j = (f, h, x, g) => {
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
    h.type === "svg" ? D = "svg" : h.type === "math" && (D = "mathml"), f == null ? I(
      h,
      x,
      g,
      k,
      v,
      D,
      y,
      E
    ) : Ce(
      f,
      h,
      k,
      v,
      D,
      y,
      E
    );
  }, I = (f, h, x, g, k, v, D, y) => {
    let E, w;
    const { props: F, shapeFlag: P, transition: M, dirs: B } = f;
    if (E = f.el = i(
      f.type,
      v,
      F && F.is,
      F
    ), P & 8 ? l(E, f.children) : P & 16 && te(
      f.children,
      E,
      null,
      g,
      k,
      tr(f, v),
      D,
      y
    ), B && gu(f, null, g, "created"), K(E, f, f.scopeId, D, g), F) {
      for (const Z in F)
        Z !== "value" && !yt(Z) && o(
          E,
          Z,
          null,
          F[Z],
          v,
          f.children,
          g,
          k,
          De
        );
      "value" in F && o(E, "value", null, F.value, v), (w = F.onVnodeBeforeMount) && qe(w, g, f);
    }
    B && gu(f, null, g, "beforeMount");
    const V = sc(k, M);
    V && M.beforeEnter(E), r(E, h, x), ((w = F && F.onVnodeMounted) || V || B) && be(() => {
      w && qe(w, g, f), V && M.enter(E), B && gu(f, null, g, "mounted");
    }, k);
  }, K = (f, h, x, g, k) => {
    if (x && _(f, x), g)
      for (let v = 0; v < g.length; v++)
        _(f, g[v]);
    if (k) {
      let v = k.subTree;
      if (h === v) {
        const D = k.vnode;
        K(
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
      const F = f[w] = y ? ou(f[w]) : He(f[w]);
      S(
        null,
        F,
        h,
        x,
        g,
        k,
        v,
        D,
        y
      );
    }
  }, Ce = (f, h, x, g, k, v, D) => {
    const y = h.el = f.el;
    let { patchFlag: E, dynamicChildren: w, dirs: F } = h;
    E |= f.patchFlag & 16;
    const P = f.props || Q, M = h.props || Q;
    let B;
    if (x && ku(x, !1), (B = M.onVnodeBeforeUpdate) && qe(B, x, h, f), F && gu(h, f, x, "beforeUpdate"), x && ku(x, !0), w ? Ee(
      f.dynamicChildren,
      w,
      y,
      x,
      g,
      tr(h, k),
      v
    ) : D || G(
      f,
      h,
      y,
      null,
      x,
      g,
      tr(h, k),
      v,
      !1
    ), E > 0) {
      if (E & 16)
        Le(
          y,
          h,
          P,
          M,
          x,
          g,
          k
        );
      else if (E & 2 && P.class !== M.class && o(y, "class", null, M.class, k), E & 4 && o(y, "style", P.style, M.style, k), E & 8) {
        const V = h.dynamicProps;
        for (let Z = 0; Z < V.length; Z++) {
          const Y = V[Z], ue = P[Y], pe = M[Y];
          (pe !== ue || Y === "value") && o(
            y,
            Y,
            ue,
            pe,
            k,
            f.children,
            x,
            g,
            De
          );
        }
      }
      E & 1 && f.children !== h.children && l(y, h.children);
    } else
      !D && w == null && Le(
        y,
        h,
        P,
        M,
        x,
        g,
        k
      );
    ((B = M.onVnodeUpdated) || F) && be(() => {
      B && qe(B, x, h, f), F && gu(h, f, x, "updated");
    }, g);
  }, Ee = (f, h, x, g, k, v, D) => {
    for (let y = 0; y < h.length; y++) {
      const E = f[y], w = h[y], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Wu(E, w) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 70) ? d(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      S(
        E,
        w,
        F,
        null,
        g,
        k,
        v,
        D,
        !0
      );
    }
  }, Le = (f, h, x, g, k, v, D) => {
    if (x !== g) {
      if (x !== Q)
        for (const y in x)
          !yt(y) && !(y in g) && o(
            f,
            y,
            x[y],
            null,
            D,
            h.children,
            k,
            v,
            De
          );
      for (const y in g) {
        if (yt(y))
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
          De
        );
      }
      "value" in g && o(f, "value", x.value, g.value, D);
    }
  }, We = (f, h, x, g, k, v, D, y, E) => {
    const w = h.el = f ? f.el : c(""), F = h.anchor = f ? f.anchor : c("");
    let { patchFlag: P, dynamicChildren: M, slotScopeIds: B } = h;
    B && (y = y ? y.concat(B) : B), f == null ? (r(w, x, g), r(F, x, g), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      x,
      F,
      k,
      v,
      D,
      y,
      E
    )) : P > 0 && P & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (Ee(
      f.dynamicChildren,
      M,
      x,
      k,
      v,
      D,
      y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || k && h === k.subTree) && Q0(
      f,
      h,
      !0
      /* shallow */
    )) : G(
      f,
      h,
      x,
      F,
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
    ) : Ae(f, h, E);
  }, Ke = (f, h, x, g, k, v, D) => {
    const y = f.component = _c(
      f,
      g,
      k
    );
    if (H0(f) && (y.ctx.renderer = Ye), xc(y), y.asyncDep) {
      if (k && k.registerDep(y, re), !f.el) {
        const E = y.subTree = ze(pu);
        N(null, E, h, x);
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
  }, Ae = (f, h, x) => {
    const g = h.component = f.component;
    if (Ei(f, h, x))
      if (g.asyncDep && !g.asyncResolved) {
        J(g, h, x);
        return;
      } else
        g.next = h, gi(g.update), g.effect.dirty = !0, g.update();
    else
      h.el = f.el, g.vnode = h;
  }, re = (f, h, x, g, k, v, D) => {
    const y = () => {
      if (f.isMounted) {
        let { next: F, bu: P, u: M, parent: B, vnode: V } = f;
        {
          const Je = eo(f);
          if (Je) {
            F && (F.el = V.el, J(f, F, D)), Je.asyncDep.then(() => {
              f.isUnmounted || y();
            });
            return;
          }
        }
        let Z = F, Y;
        ku(f, !1), F ? (F.el = V.el, J(f, F, D)) : F = V, P && Jt(P), (Y = F.props && F.props.onVnodeBeforeUpdate) && qe(Y, B, F, V), ku(f, !0);
        const ue = Qt(f), pe = f.subTree;
        f.subTree = ue, S(
          pe,
          ue,
          // parent may have changed if it's in a teleport
          d(pe.el),
          // anchor may have changed if it's in a fragment
          xu(pe),
          f,
          k,
          v
        ), F.el = ue.el, Z === null && Ai(f, ue.el), M && be(M, k), (Y = F.props && F.props.onVnodeUpdated) && be(
          () => qe(Y, B, F, V),
          k
        );
      } else {
        let F;
        const { el: P, props: M } = h, { bm: B, m: V, parent: Z } = f, Y = Ku(h);
        if (ku(f, !1), B && Jt(B), !Y && (F = M && M.onVnodeBeforeMount) && qe(F, Z, h), ku(f, !0), P && Fu) {
          const ue = () => {
            f.subTree = Qt(f), Fu(
              P,
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
          const ue = f.subTree = Qt(f);
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
        if (V && be(V, k), !Y && (F = M && M.onVnodeMounted)) {
          const ue = h;
          be(
            () => qe(F, Z, ue),
            k
          );
        }
        (h.shapeFlag & 256 || Z && Ku(Z.vnode) && Z.vnode.shapeFlag & 256) && f.a && be(f.a, k), f.isMounted = !0, h = x = g = null;
      }
    }, E = f.effect = new Or(
      y,
      Se,
      () => Ur(w),
      f.scope
      // track it in component's effect scope
    ), w = f.update = () => {
      E.dirty && E.run();
    };
    w.id = f.uid, ku(f, !0), w();
  }, J = (f, h, x) => {
    h.component = f;
    const g = f.vnode.props;
    f.vnode = h, f.next = null, tc(f, h.props, g, x), oc(f, h.children, x), Eu(), xn(f), Au();
  }, G = (f, h, x, g, k, v, D, y, E = !1) => {
    const w = f && f.children, F = f ? f.shapeFlag : 0, P = h.children, { patchFlag: M, shapeFlag: B } = h;
    if (M > 0) {
      if (M & 128) {
        _u(
          w,
          P,
          x,
          g,
          k,
          v,
          D,
          y,
          E
        );
        return;
      } else if (M & 256) {
        Ne(
          w,
          P,
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
    B & 8 ? (F & 16 && De(w, k, v), P !== w && l(x, P)) : F & 16 ? B & 16 ? _u(
      w,
      P,
      x,
      g,
      k,
      v,
      D,
      y,
      E
    ) : De(w, k, v, !0) : (F & 8 && l(x, ""), B & 16 && te(
      P,
      x,
      g,
      k,
      v,
      D,
      y,
      E
    ));
  }, Ne = (f, h, x, g, k, v, D, y, E) => {
    f = f || Iu, h = h || Iu;
    const w = f.length, F = h.length, P = Math.min(w, F);
    let M;
    for (M = 0; M < P; M++) {
      const B = h[M] = E ? ou(h[M]) : He(h[M]);
      S(
        f[M],
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
    w > F ? De(
      f,
      k,
      v,
      !0,
      !1,
      P
    ) : te(
      h,
      x,
      g,
      k,
      v,
      D,
      y,
      E,
      P
    );
  }, _u = (f, h, x, g, k, v, D, y, E) => {
    let w = 0;
    const F = h.length;
    let P = f.length - 1, M = F - 1;
    for (; w <= P && w <= M; ) {
      const B = f[w], V = h[w] = E ? ou(h[w]) : He(h[w]);
      if (Wu(B, V))
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
    for (; w <= P && w <= M; ) {
      const B = f[P], V = h[M] = E ? ou(h[M]) : He(h[M]);
      if (Wu(B, V))
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
      P--, M--;
    }
    if (w > P) {
      if (w <= M) {
        const B = M + 1, V = B < F ? h[B].el : g;
        for (; w <= M; )
          S(
            null,
            h[w] = E ? ou(h[w]) : He(h[w]),
            x,
            V,
            k,
            v,
            D,
            y,
            E
          ), w++;
      }
    } else if (w > M)
      for (; w <= P; )
        ke(f[w], k, v, !0), w++;
    else {
      const B = w, V = w, Z = /* @__PURE__ */ new Map();
      for (w = V; w <= M; w++) {
        const se = h[w] = E ? ou(h[w]) : He(h[w]);
        se.key != null && Z.set(se.key, w);
      }
      let Y, ue = 0;
      const pe = M - V + 1;
      let Je = !1, Vu = 0;
      const tu = new Array(pe);
      for (w = 0; w < pe; w++)
        tu[w] = 0;
      for (w = B; w <= P; w++) {
        const se = f[w];
        if (ue >= pe) {
          ke(se, k, v, !0);
          continue;
        }
        let we;
        if (se.key != null)
          we = Z.get(se.key);
        else
          for (Y = V; Y <= M; Y++)
            if (tu[Y - V] === 0 && Wu(se, h[Y])) {
              we = Y;
              break;
            }
        we === void 0 ? ke(se, k, v, !0) : (tu[we - V] = w + 1, we >= Vu ? Vu = we : Je = !0, S(
          se,
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
      const $u = Je ? ac(tu) : Iu;
      for (Y = $u.length - 1, w = pe - 1; w >= 0; w--) {
        const se = V + w, we = h[se], Zu = se + 1 < F ? h[se + 1].el : g;
        tu[w] === 0 ? S(
          null,
          we,
          x,
          Zu,
          k,
          v,
          D,
          y,
          E
        ) : Je && (Y < 0 || w !== $u[Y] ? Be(we, x, Zu, 2) : Y--);
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
    if (D === ae) {
      r(v, h, x);
      for (let P = 0; P < E.length; P++)
        Be(E[P], h, x, g);
      r(f.anchor, h, x);
      return;
    }
    if (D === rr) {
      C(f, h, x);
      return;
    }
    if (g !== 2 && w & 1 && y)
      if (g === 0)
        y.beforeEnter(v), r(v, h, x), be(() => y.enter(v), k);
      else {
        const { leave: P, delayLeave: M, afterLeave: B } = y, V = () => r(v, h, x), Z = () => {
          P(v, () => {
            V(), B && B();
          });
        };
        M ? M(v, V, Z) : Z();
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
      shapeFlag: F,
      patchFlag: P,
      dirs: M
    } = f;
    if (y != null && vr(y, null, x, f, !0), F & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const B = F & 1 && M, V = !Ku(f);
    let Z;
    if (V && (Z = D && D.onVnodeBeforeUnmount) && qe(Z, h, f), F & 6)
      ht(f.component, x, g);
    else {
      if (F & 128) {
        f.suspense.unmount(x, g);
        return;
      }
      B && gu(f, null, h, "beforeUnmount"), F & 64 ? f.type.remove(
        f,
        h,
        x,
        k,
        Ye,
        g
      ) : w && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== ae || P > 0 && P & 64) ? De(
        w,
        h,
        x,
        !1,
        !0
      ) : (v === ae && P & 384 || !k && F & 16) && De(E, h, x), g && ju(f);
    }
    (V && (Z = D && D.onVnodeUnmounted) || B) && be(() => {
      Z && qe(Z, h, f), B && gu(f, null, h, "unmounted");
    }, x);
  }, ju = (f) => {
    const { type: h, el: x, anchor: g, transition: k } = f;
    if (h === ae) {
      dt(x, g);
      return;
    }
    if (h === rr) {
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
  }, dt = (f, h) => {
    let x;
    for (; f !== h; )
      x = m(f), n(f), f = x;
    n(h);
  }, ht = (f, h, x) => {
    const { bum: g, scope: k, update: v, subTree: D, um: y } = f;
    g && Jt(g), k.stop(), v && (v.active = !1, ke(D, f, h, x)), y && be(y, h), be(() => {
      f.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve());
  }, De = (f, h, x, g = !1, k = !1, v = 0) => {
    for (let D = v; D < f.length; D++)
      ke(f[D], h, x, g, k);
  }, xu = (f) => f.shapeFlag & 6 ? xu(f.component.subTree) : f.shapeFlag & 128 ? f.suspense.next() : m(f.anchor || f.el);
  let Du = !1;
  const Uu = (f, h, x) => {
    f == null ? h._vnode && ke(h._vnode, null, null, !0) : S(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      x
    ), Du || (Du = !0, xn(), O0(), Du = !1), h._vnode = f;
  }, Ye = {
    p: S,
    um: ke,
    m: Be,
    r: ju,
    mt: Ke,
    mc: te,
    pc: G,
    pbc: Ee,
    n: xu,
    o: e
  };
  let Su, Fu;
  return u && ([Su, Fu] = u(
    Ye
  )), {
    render: Uu,
    hydrate: Su,
    createApp: Qi(Uu, Su)
  };
}
function tr({ type: e, props: u }, t) {
  return t === "svg" && e === "foreignObject" || t === "mathml" && e === "annotation-xml" && u && u.encoding && u.encoding.includes("html") ? void 0 : t;
}
function ku({ effect: e, update: u }, t) {
  e.allowRecurse = u.allowRecurse = t;
}
function sc(e, u) {
  return (!e || e && !e.pendingBranch) && u && !u.persisted;
}
function Q0(e, u, t = !1) {
  const r = e.children, n = u.children;
  if (q(r) && q(n))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let c = n[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = n[o] = ou(n[o]), c.el = i.el), t || Q0(i, c)), c.type === Ut && (c.el = i.el);
    }
}
function ac(e) {
  const u = e.slice(), t = [0];
  let r, n, o, i, c;
  const s = e.length;
  for (r = 0; r < s; r++) {
    const a = e[r];
    if (a !== 0) {
      if (n = t[t.length - 1], e[n] < a) {
        u[r] = n, t.push(r);
        continue;
      }
      for (o = 0, i = t.length - 1; o < i; )
        c = o + i >> 1, e[t[c]] < a ? o = c + 1 : i = c;
      a < e[t[o]] && (o > 0 && (u[r] = t[o - 1]), t[o] = r);
    }
  }
  for (o = t.length, i = t[o - 1]; o-- > 0; )
    t[o] = i, i = u[i];
  return t;
}
function eo(e) {
  const u = e.subTree.component;
  if (u)
    return u.asyncDep && !u.asyncResolved ? u : eo(u);
}
const lc = (e) => e.__isTeleport, ae = Symbol.for("v-fgt"), Ut = Symbol.for("v-txt"), pu = Symbol.for("v-cmt"), rr = Symbol.for("v-stc"), Ju = [];
let Me = null;
function T(e = !1) {
  Ju.push(Me = e ? null : []);
}
function fc() {
  Ju.pop(), Me = Ju[Ju.length - 1] || null;
}
let ut = 1;
function Tn(e) {
  ut += e;
}
function uo(e) {
  return e.dynamicChildren = ut > 0 ? Me || Iu : null, fc(), ut > 0 && Me && Me.push(e), e;
}
function L(e, u, t, r, n, o) {
  return uo(
    p(
      e,
      u,
      t,
      r,
      n,
      o,
      !0
    )
  );
}
function me(e, u, t, r, n) {
  return uo(
    ze(
      e,
      u,
      t,
      r,
      n,
      !0
    )
  );
}
function to(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Wu(e, u) {
  return e.type === u.type && e.key === u.key;
}
const Vt = "__vInternal", ro = ({ key: e }) => e ?? null, Ct = ({
  ref: e,
  ref_key: u,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || xe(e) || U(e) ? { i: he, r: e, k: u, f: !!t } : e : null);
function p(e, u = null, t = null, r = 0, n = null, o = e === ae ? 0 : 1, i = !1, c = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: u,
    key: u && ro(u),
    ref: u && Ct(u),
    scopeId: L0,
    slotScopeIds: null,
    children: t,
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
  return c ? (Zr(s, t), o & 128 && e.normalize(s)) : t && (s.shapeFlag |= ne(t) ? 8 : 16), ut > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && Me.push(s), s;
}
const ze = dc;
function dc(e, u = null, t = null, r = 0, n = null, o = !1) {
  if ((!e || e === Di) && (e = pu), to(e)) {
    const c = Nu(
      e,
      u,
      !0
      /* mergeRef: true */
    );
    return t && Zr(c, t), ut > 0 && !o && Me && (c.shapeFlag & 6 ? Me[Me.indexOf(e)] = c : Me.push(c)), c.patchFlag |= -2, c;
  }
  if (vc(e) && (e = e.__vccOpts), u) {
    u = hc(u);
    let { class: c, style: s } = u;
    c && !ne(c) && (u.class = au(c)), ee(s) && (A0(s) && !q(s) && (s = ce({}, s)), u.style = Mr(s));
  }
  const i = ne(e) ? 1 : Fi(e) ? 128 : lc(e) ? 64 : ee(e) ? 4 : U(e) ? 2 : 0;
  return p(
    e,
    u,
    t,
    r,
    n,
    i,
    o,
    !0
  );
}
function hc(e) {
  return e ? A0(e) || Vt in e ? ce({}, e) : e : null;
}
function Nu(e, u, t = !1) {
  const { props: r, ref: n, patchFlag: o, children: i } = e, c = u ? pc(r || {}, u) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ro(c),
    ref: u && u.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && n ? q(n) ? n.concat(Ct(u)) : [n, Ct(u)] : Ct(u)
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
    patchFlag: u && e.type !== ae ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Nu(e.ssContent),
    ssFallback: e.ssFallback && Nu(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function wu(e = " ", u = 0) {
  return ze(Ut, null, e, u);
}
function H(e = "", u = !1) {
  return u ? (T(), me(pu, null, e)) : ze(pu, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? ze(pu) : q(e) ? ze(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ou(e) : ze(Ut, null, String(e));
}
function ou(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nu(e);
}
function Zr(e, u) {
  let t = 0;
  const { shapeFlag: r } = e;
  if (u == null)
    u = null;
  else if (q(u))
    t = 16;
  else if (typeof u == "object")
    if (r & 65) {
      const n = u.default;
      n && (n._c && (n._d = !1), Zr(e, n()), n._c && (n._d = !0));
      return;
    } else {
      t = 32;
      const n = u._;
      !n && !(Vt in u) ? u._ctx = he : n === 3 && he && (he.slots._ === 1 ? u._ = 1 : (u._ = 2, e.patchFlag |= 1024));
    }
  else
    U(u) ? (u = { default: u, _ctx: he }, t = 32) : (u = String(u), r & 64 ? (t = 16, u = [wu(u)]) : t = 8);
  e.children = u, e.shapeFlag |= t;
}
function pc(...e) {
  const u = {};
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    for (const n in r)
      if (n === "class")
        u.class !== r.class && (u.class = au([u.class, r.class]));
      else if (n === "style")
        u.style = Mr([u.style, r.style]);
      else if (zt(n)) {
        const o = u[n], i = r[n];
        i && o !== i && !(q(o) && o.includes(i)) && (u[n] = o ? [].concat(o, i) : i);
      } else
        n !== "" && (u[n] = r[n]);
  }
  return u;
}
function qe(e, u, t, r = null) {
  Oe(e, u, 7, [
    t,
    r
  ]);
}
const bc = W0();
let mc = 0;
function _c(e, u, t) {
  const r = e.type, n = (u ? u.appContext : e.appContext) || bc, o = {
    uid: mc++,
    vnode: e,
    type: r,
    parent: u,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Uo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: u ? u.provides : Object.create(n.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: K0(r, n),
    emitsOptions: P0(r, n),
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
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = u ? u.root : o, o.emit = yi.bind(null, o), e.ce && e.ce(o), o;
}
let fe = null, Rt, Cr;
{
  const e = f0(), u = (t, r) => {
    let n;
    return (n = e[t]) || (n = e[t] = []), n.push(r), (o) => {
      n.length > 1 ? n.forEach((i) => i(o)) : n[0](o);
    };
  };
  Rt = u(
    "__VUE_INSTANCE_SETTERS__",
    (t) => fe = t
  ), Cr = u(
    "__VUE_SSR_SETTERS__",
    (t) => $t = t
  );
}
const ct = (e) => {
  const u = fe;
  return Rt(e), e.scope.on(), () => {
    e.scope.off(), Rt(u);
  };
}, Rn = () => {
  fe && fe.scope.off(), Rt(null);
};
function no(e) {
  return e.vnode.shapeFlag & 4;
}
let $t = !1;
function xc(e, u = !1) {
  u && Cr(u);
  const { props: t, children: r } = e.vnode, n = no(e);
  uc(e, t, n, u), nc(e, r);
  const o = n ? gc(e, u) : void 0;
  return u && Cr(!1), o;
}
function gc(e, u) {
  const t = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = D0(new Proxy(e.ctx, Zi));
  const { setup: r } = t;
  if (r) {
    const n = e.setupContext = r.length > 1 ? wc(e) : null, o = ct(e);
    Eu();
    const i = du(
      r,
      e,
      0,
      [
        e.props,
        n
      ]
    );
    if (Au(), o(), s0(i)) {
      if (i.then(Rn, Rn), u)
        return i.then((c) => {
          In(e, c, u);
        }).catch((c) => {
          qt(c, e, 0);
        });
      e.asyncDep = i;
    } else
      In(e, i, u);
  } else
    oo(e, u);
}
function In(e, u, t) {
  U(u) ? e.type.__ssrInlineRender ? e.ssrRender = u : e.render = u : ee(u) && (e.setupState = T0(u)), oo(e, t);
}
let Mn;
function oo(e, u, t) {
  const r = e.type;
  if (!e.render) {
    if (!u && Mn && !r.render) {
      const n = r.template || Vr(e).template;
      if (n) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: s } = r, a = ce(
          ce(
            {
              isCustomElement: o,
              delimiters: c
            },
            i
          ),
          s
        );
        r.render = Mn(n, a);
      }
    }
    e.render = r.render || Se;
  }
  {
    const n = ct(e);
    Eu();
    try {
      Wi(e);
    } finally {
      Au(), n();
    }
  }
}
function kc(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(u, t) {
        return _e(e, "get", "$attrs"), u[t];
      }
    }
  ));
}
function wc(e) {
  const u = (t) => {
    e.exposed = t || {};
  };
  return {
    get attrs() {
      return kc(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: u
  };
}
function Wr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(T0(D0(e.exposed)), {
      get(u, t) {
        if (t in u)
          return u[t];
        if (t in Yu)
          return Yu[t](e);
      },
      has(u, t) {
        return t in u || t in Yu;
      }
    }));
}
function yc(e, u = !0) {
  return U(e) ? e.displayName || e.name : e.name || u && e.__name;
}
function vc(e) {
  return U(e) && "__vccOpts" in e;
}
const Gr = (e, u) => di(e, u, $t), Cc = "3.4.12";
/**
* @vue/runtime-dom v3.4.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ec = "http://www.w3.org/2000/svg", Ac = "http://www.w3.org/1998/Math/MathML", iu = typeof document < "u" ? document : null, On = iu && /* @__PURE__ */ iu.createElement("template"), Dc = {
  insert: (e, u, t) => {
    u.insertBefore(e, t || null);
  },
  remove: (e) => {
    const u = e.parentNode;
    u && u.removeChild(e);
  },
  createElement: (e, u, t, r) => {
    const n = u === "svg" ? iu.createElementNS(Ec, e) : u === "mathml" ? iu.createElementNS(Ac, e) : iu.createElement(e, t ? { is: t } : void 0);
    return e === "select" && r && r.multiple != null && n.setAttribute("multiple", r.multiple), n;
  },
  createText: (e) => iu.createTextNode(e),
  createComment: (e) => iu.createComment(e),
  setText: (e, u) => {
    e.nodeValue = u;
  },
  setElementText: (e, u) => {
    e.textContent = u;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => iu.querySelector(e),
  setScopeId(e, u) {
    e.setAttribute(u, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, u, t, r, n, o) {
    const i = t ? t.previousSibling : u.lastChild;
    if (n && (n === o || n.nextSibling))
      for (; u.insertBefore(n.cloneNode(!0), t), !(n === o || !(n = n.nextSibling)); )
        ;
    else {
      On.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const c = On.content;
      if (r === "svg" || r === "mathml") {
        const s = c.firstChild;
        for (; s.firstChild; )
          c.appendChild(s.firstChild);
        c.removeChild(s);
      }
      u.insertBefore(c, t);
    }
    return [
      // first
      i ? i.nextSibling : u.firstChild,
      // last
      t ? t.previousSibling : u.lastChild
    ];
  }
}, Sc = Symbol("_vtc");
function Fc(e, u, t) {
  const r = e[Sc];
  r && (u = (u ? [u, ...r] : [...r]).join(" ")), u == null ? e.removeAttribute("class") : t ? e.setAttribute("class", u) : e.className = u;
}
const Tc = Symbol("_vod"), Rc = Symbol("");
function Ic(e, u, t) {
  const r = e.style, n = r.display, o = ne(t);
  if (t && !o) {
    if (u && !ne(u))
      for (const i in u)
        t[i] == null && Er(r, i, "");
    for (const i in t)
      Er(r, i, t[i]);
  } else if (o) {
    if (u !== t) {
      const i = r[Rc];
      i && (t += ";" + i), r.cssText = t;
    }
  } else
    u && e.removeAttribute("style");
  Tc in e && (r.display = n);
}
const zn = /\s*!important$/;
function Er(e, u, t) {
  if (q(t))
    t.forEach((r) => Er(e, u, r));
  else if (t == null && (t = ""), u.startsWith("--"))
    e.setProperty(u, t);
  else {
    const r = Mc(e, u);
    zn.test(t) ? e.setProperty(
      Ie(r),
      t.replace(zn, ""),
      "important"
    ) : e[r] = t;
  }
}
const Pn = ["Webkit", "Moz", "ms"], nr = {};
function Mc(e, u) {
  const t = nr[u];
  if (t)
    return t;
  let r = ye(u);
  if (r !== "filter" && r in e)
    return nr[u] = r;
  r = Nt(r);
  for (let n = 0; n < Pn.length; n++) {
    const o = Pn[n] + r;
    if (o in e)
      return nr[u] = o;
  }
  return u;
}
const Ln = "http://www.w3.org/1999/xlink";
function Oc(e, u, t, r, n) {
  if (r && u.startsWith("xlink:"))
    t == null ? e.removeAttributeNS(Ln, u.slice(6, u.length)) : e.setAttributeNS(Ln, u, t);
  else {
    const o = jo(u);
    t == null || o && !d0(t) ? e.removeAttribute(u) : e.setAttribute(u, o ? "" : t);
  }
}
function zc(e, u, t, r, n, o, i) {
  if (u === "innerHTML" || u === "textContent") {
    r && i(r, n, o), e[u] = t ?? "";
    return;
  }
  const c = e.tagName;
  if (u === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    e._value = t;
    const a = c === "OPTION" ? e.getAttribute("value") : e.value, l = t ?? "";
    a !== l && (e.value = l), t == null && e.removeAttribute(u);
    return;
  }
  let s = !1;
  if (t === "" || t == null) {
    const a = typeof e[u];
    a === "boolean" ? t = d0(t) : t == null && a === "string" ? (t = "", s = !0) : a === "number" && (t = 0, s = !0);
  }
  try {
    e[u] = t;
  } catch {
  }
  s && e.removeAttribute(u);
}
function Pc(e, u, t, r) {
  e.addEventListener(u, t, r);
}
function Lc(e, u, t, r) {
  e.removeEventListener(u, t, r);
}
const Nn = Symbol("_vei");
function Nc(e, u, t, r, n = null) {
  const o = e[Nn] || (e[Nn] = {}), i = o[u];
  if (r && i)
    i.value = r;
  else {
    const [c, s] = Bc(u);
    if (r) {
      const a = o[u] = jc(r, n);
      Pc(e, c, a, s);
    } else
      i && (Lc(e, c, i, s), o[u] = void 0);
  }
}
const Bn = /(?:Once|Passive|Capture)$/;
function Bc(e) {
  let u;
  if (Bn.test(e)) {
    u = {};
    let r;
    for (; r = e.match(Bn); )
      e = e.slice(0, e.length - r[0].length), u[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ie(e.slice(2)), u];
}
let or = 0;
const qc = /* @__PURE__ */ Promise.resolve(), Hc = () => or || (qc.then(() => or = 0), or = Date.now());
function jc(e, u) {
  const t = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= t.attached)
      return;
    Oe(
      Uc(r, t.value),
      u,
      5,
      [r]
    );
  };
  return t.value = e, t.attached = Hc(), t;
}
function Uc(e, u) {
  if (q(u)) {
    const t = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      t.call(e), e._stopped = !0;
    }, u.map((r) => (n) => !n._stopped && r && r(n));
  } else
    return u;
}
const qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vc = (e, u, t, r, n, o, i, c, s) => {
  const a = n === "svg";
  u === "class" ? Fc(e, r, a) : u === "style" ? Ic(e, t, r) : zt(u) ? Tr(u) || Nc(e, u, t, r, i) : (u[0] === "." ? (u = u.slice(1), !0) : u[0] === "^" ? (u = u.slice(1), !1) : $c(e, u, r, a)) ? zc(
    e,
    u,
    r,
    o,
    i,
    c,
    s
  ) : (u === "true-value" ? e._trueValue = r : u === "false-value" && (e._falseValue = r), Oc(e, u, r, a));
};
function $c(e, u, t, r) {
  if (r)
    return !!(u === "innerHTML" || u === "textContent" || u in e && qn(u) && U(t));
  if (u === "spellcheck" || u === "draggable" || u === "translate" || u === "form" || u === "list" && e.tagName === "INPUT" || u === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (u === "width" || u === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return qn(u) && ne(t) ? !1 : u in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zc(e, u) {
  const t = /* @__PURE__ */ Oi(e);
  class r extends Kr {
    constructor(o) {
      super(t, o, u);
    }
  }
  return r.def = t, r;
}
const Wc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Kr extends Wc {
  constructor(u, t = {}, r) {
    super(), this._def = u, this._props = t, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), I0(() => {
      this._connected || (jn(null, this.shadowRoot), this._instance = null);
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
    const u = (r, n = !1) => {
      const { props: o, styles: i } = r;
      let c;
      if (o && !q(o))
        for (const s in o) {
          const a = o[s];
          (a === Number || a && a.type === Number) && (s in this._props && (this._props[s] = an(this._props[s])), (c || (c = /* @__PURE__ */ Object.create(null)))[ye(s)] = !0);
        }
      this._numberProps = c, n && this._resolveProps(r), this._applyStyles(i), this._update();
    }, t = this._def.__asyncLoader;
    t ? t().then((r) => u(r, !0)) : u(this._def);
  }
  _resolveProps(u) {
    const { props: t } = u, r = q(t) ? t : Object.keys(t || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && r.includes(n) && this._setProp(n, this[n], !0, !1);
    for (const n of r.map(ye))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(o) {
          this._setProp(n, o);
        }
      });
  }
  _setAttr(u) {
    let t = this.getAttribute(u);
    const r = ye(u);
    this._numberProps && this._numberProps[r] && (t = an(t)), this._setProp(r, t, !1);
  }
  /**
   * @internal
   */
  _getProp(u) {
    return this._props[u];
  }
  /**
   * @internal
   */
  _setProp(u, t, r = !0, n = !0) {
    t !== this._props[u] && (this._props[u] = t, n && this._instance && this._update(), r && (t === !0 ? this.setAttribute(Ie(u), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(Ie(u), t + "") : t || this.removeAttribute(Ie(u))));
  }
  _update() {
    jn(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const u = ze(this._def, ce({}, this._props));
    return this._instance || (u.ce = (t) => {
      this._instance = t, t.isCE = !0;
      const r = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: i
          })
        );
      };
      t.emit = (o, ...i) => {
        r(o, i), Ie(o) !== o && r(Ie(o), i);
      };
      let n = this;
      for (; n = n && (n.parentNode || n.host); )
        if (n instanceof Kr) {
          t.parent = n._instance, t.provides = n._instance.provides;
          break;
        }
    }), u;
  }
  _applyStyles(u) {
    u && u.forEach((t) => {
      const r = document.createElement("style");
      r.textContent = t, this.shadowRoot.appendChild(r);
    });
  }
}
const Gc = /* @__PURE__ */ ce({ patchProp: Vc }, Dc);
let Hn;
function Kc() {
  return Hn || (Hn = ic(Gc));
}
const jn = (...e) => {
  Kc().render(...e);
}, Un = {};
function Yc(e) {
  let u = Un[e];
  if (u)
    return u;
  u = Un[e] = [];
  for (let t = 0; t < 128; t++) {
    const r = String.fromCharCode(t);
    u.push(r);
  }
  for (let t = 0; t < e.length; t++) {
    const r = e.charCodeAt(t);
    u[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
  }
  return u;
}
function Bu(e, u) {
  typeof u != "string" && (u = Bu.defaultChars);
  const t = Yc(u);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    let n = "";
    for (let o = 0, i = r.length; o < i; o += 3) {
      const c = parseInt(r.slice(o + 1, o + 3), 16);
      if (c < 128) {
        n += t[c];
        continue;
      }
      if ((c & 224) === 192 && o + 3 < i) {
        const s = parseInt(r.slice(o + 4, o + 6), 16);
        if ((s & 192) === 128) {
          const a = c << 6 & 1984 | s & 63;
          a < 128 ? n += "��" : n += String.fromCharCode(a), o += 3;
          continue;
        }
      }
      if ((c & 240) === 224 && o + 6 < i) {
        const s = parseInt(r.slice(o + 4, o + 6), 16), a = parseInt(r.slice(o + 7, o + 9), 16);
        if ((s & 192) === 128 && (a & 192) === 128) {
          const l = c << 12 & 61440 | s << 6 & 4032 | a & 63;
          l < 2048 || l >= 55296 && l <= 57343 ? n += "���" : n += String.fromCharCode(l), o += 6;
          continue;
        }
      }
      if ((c & 248) === 240 && o + 9 < i) {
        const s = parseInt(r.slice(o + 4, o + 6), 16), a = parseInt(r.slice(o + 7, o + 9), 16), l = parseInt(r.slice(o + 10, o + 12), 16);
        if ((s & 192) === 128 && (a & 192) === 128 && (l & 192) === 128) {
          let d = c << 18 & 1835008 | s << 12 & 258048 | a << 6 & 4032 | l & 63;
          d < 65536 || d > 1114111 ? n += "����" : (d -= 65536, n += String.fromCharCode(55296 + (d >> 10), 56320 + (d & 1023))), o += 9;
          continue;
        }
      }
      n += "�";
    }
    return n;
  });
}
Bu.defaultChars = ";/?:@&=+$,#";
Bu.componentChars = "";
const Vn = {};
function Jc(e) {
  let u = Vn[e];
  if (u)
    return u;
  u = Vn[e] = [];
  for (let t = 0; t < 128; t++) {
    const r = String.fromCharCode(t);
    /^[0-9a-z]$/i.test(r) ? u.push(r) : u.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
  }
  for (let t = 0; t < e.length; t++)
    u[e.charCodeAt(t)] = e[t];
  return u;
}
function st(e, u, t) {
  typeof u != "string" && (t = u, u = st.defaultChars), typeof t > "u" && (t = !0);
  const r = Jc(u);
  let n = "";
  for (let o = 0, i = e.length; o < i; o++) {
    const c = e.charCodeAt(o);
    if (t && c === 37 && o + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) {
      n += e.slice(o, o + 3), o += 2;
      continue;
    }
    if (c < 128) {
      n += r[c];
      continue;
    }
    if (c >= 55296 && c <= 57343) {
      if (c >= 55296 && c <= 56319 && o + 1 < i) {
        const s = e.charCodeAt(o + 1);
        if (s >= 56320 && s <= 57343) {
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
st.defaultChars = ";/?:@&=+$,-_.!~*'()#";
st.componentChars = "-_.!~*'()";
function Yr(e) {
  let u = "";
  return u += e.protocol || "", u += e.slashes ? "//" : "", u += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? u += "[" + e.hostname + "]" : u += e.hostname || "", u += e.port ? ":" + e.port : "", u += e.pathname || "", u += e.search || "", u += e.hash || "", u;
}
function It() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Xc = /^([a-z0-9.+-]+:)/i, Qc = /:[0-9]*$/, es = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, us = ["<", ">", '"', "`", " ", "\r", `
`, "	"], ts = ["{", "}", "|", "\\", "^", "`"].concat(us), rs = ["'"].concat(ts), $n = ["%", "/", "?", ";", "#"].concat(rs), Zn = ["/", "?", "#"], ns = 255, Wn = /^[+a-z0-9A-Z_-]{0,63}$/, os = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Gn = {
  javascript: !0,
  "javascript:": !0
}, Kn = {
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
function Jr(e, u) {
  if (e && e instanceof It)
    return e;
  const t = new It();
  return t.parse(e, u), t;
}
It.prototype.parse = function(e, u) {
  let t, r, n, o = e;
  if (o = o.trim(), !u && e.split("#").length === 1) {
    const a = es.exec(o);
    if (a)
      return this.pathname = a[1], a[2] && (this.search = a[2]), this;
  }
  let i = Xc.exec(o);
  if (i && (i = i[0], t = i.toLowerCase(), this.protocol = i, o = o.substr(i.length)), (u || i || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (n = o.substr(0, 2) === "//", n && !(i && Gn[i]) && (o = o.substr(2), this.slashes = !0)), !Gn[i] && (n || i && !Kn[i])) {
    let a = -1;
    for (let b = 0; b < Zn.length; b++)
      r = o.indexOf(Zn[b]), r !== -1 && (a === -1 || r < a) && (a = r);
    let l, d;
    a === -1 ? d = o.lastIndexOf("@") : d = o.lastIndexOf("@", a), d !== -1 && (l = o.slice(0, d), o = o.slice(d + 1), this.auth = l), a = -1;
    for (let b = 0; b < $n.length; b++)
      r = o.indexOf($n[b]), r !== -1 && (a === -1 || r < a) && (a = r);
    a === -1 && (a = o.length), o[a - 1] === ":" && a--;
    const m = o.slice(0, a);
    o = o.slice(a), this.parseHost(m), this.hostname = this.hostname || "";
    const _ = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!_) {
      const b = this.hostname.split(/\./);
      for (let S = 0, z = b.length; S < z; S++) {
        const N = b[S];
        if (N && !N.match(Wn)) {
          let j = "";
          for (let C = 0, R = N.length; C < R; C++)
            N.charCodeAt(C) > 127 ? j += "x" : j += N[C];
          if (!j.match(Wn)) {
            const C = b.slice(0, S), R = b.slice(S + 1), A = N.match(os);
            A && (C.push(A[1]), R.unshift(A[2])), R.length && (o = R.join(".") + o), this.hostname = C.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > ns && (this.hostname = ""), _ && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const c = o.indexOf("#");
  c !== -1 && (this.hash = o.substr(c), o = o.slice(0, c));
  const s = o.indexOf("?");
  return s !== -1 && (this.search = o.substr(s), o = o.slice(0, s)), o && (this.pathname = o), Kn[t] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
It.prototype.parseHost = function(e) {
  let u = Qc.exec(e);
  u && (u = u[0], u !== ":" && (this.port = u.substr(1)), e = e.substr(0, e.length - u.length)), e && (this.hostname = e);
};
const is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Bu,
  encode: st,
  format: Yr,
  parse: Jr
}, Symbol.toStringTag, { value: "Module" })), io = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, co = /[\0-\x1F\x7F-\x9F]/, cs = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Xr = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, so = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: io,
  Cc: co,
  Cf: cs,
  P: Xr,
  Z: so
}, Symbol.toStringTag, { value: "Module" })), as = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), ls = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var ir;
const fs = /* @__PURE__ */ new Map([
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
]), ds = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (ir = String.fromCodePoint) !== null && ir !== void 0 ? ir : function(e) {
    let u = "";
    return e > 65535 && (e -= 65536, u += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), u += String.fromCharCode(e), u;
  }
);
function hs(e) {
  var u;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (u = fs.get(e)) !== null && u !== void 0 ? u : e;
}
var ie;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(ie || (ie = {}));
const ps = 32;
var lu;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(lu || (lu = {}));
function Ar(e) {
  return e >= ie.ZERO && e <= ie.NINE;
}
function bs(e) {
  return e >= ie.UPPER_A && e <= ie.UPPER_F || e >= ie.LOWER_A && e <= ie.LOWER_F;
}
function ms(e) {
  return e >= ie.UPPER_A && e <= ie.UPPER_Z || e >= ie.LOWER_A && e <= ie.LOWER_Z || Ar(e);
}
function _s(e) {
  return e === ie.EQUALS || ms(e);
}
var oe;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(oe || (oe = {}));
var su;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(su || (su = {}));
class xs {
  constructor(u, t, r) {
    this.decodeTree = u, this.emitCodePoint = t, this.errors = r, this.state = oe.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = su.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(u) {
    this.decodeMode = u, this.state = oe.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
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
  write(u, t) {
    switch (this.state) {
      case oe.EntityStart:
        return u.charCodeAt(t) === ie.NUM ? (this.state = oe.NumericStart, this.consumed += 1, this.stateNumericStart(u, t + 1)) : (this.state = oe.NamedEntity, this.stateNamedEntity(u, t));
      case oe.NumericStart:
        return this.stateNumericStart(u, t);
      case oe.NumericDecimal:
        return this.stateNumericDecimal(u, t);
      case oe.NumericHex:
        return this.stateNumericHex(u, t);
      case oe.NamedEntity:
        return this.stateNamedEntity(u, t);
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
  stateNumericStart(u, t) {
    return t >= u.length ? -1 : (u.charCodeAt(t) | ps) === ie.LOWER_X ? (this.state = oe.NumericHex, this.consumed += 1, this.stateNumericHex(u, t + 1)) : (this.state = oe.NumericDecimal, this.stateNumericDecimal(u, t));
  }
  addToNumericResult(u, t, r, n) {
    if (t !== r) {
      const o = r - t;
      this.result = this.result * Math.pow(n, o) + parseInt(u.substr(t, o), n), this.consumed += o;
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
  stateNumericHex(u, t) {
    const r = t;
    for (; t < u.length; ) {
      const n = u.charCodeAt(t);
      if (Ar(n) || bs(n))
        t += 1;
      else
        return this.addToNumericResult(u, r, t, 16), this.emitNumericEntity(n, 3);
    }
    return this.addToNumericResult(u, r, t, 16), -1;
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
  stateNumericDecimal(u, t) {
    const r = t;
    for (; t < u.length; ) {
      const n = u.charCodeAt(t);
      if (Ar(n))
        t += 1;
      else
        return this.addToNumericResult(u, r, t, 10), this.emitNumericEntity(n, 2);
    }
    return this.addToNumericResult(u, r, t, 10), -1;
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
  emitNumericEntity(u, t) {
    var r;
    if (this.consumed <= t)
      return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (u === ie.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === su.Strict)
      return 0;
    return this.emitCodePoint(hs(this.result), this.consumed), this.errors && (u !== ie.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
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
  stateNamedEntity(u, t) {
    const { decodeTree: r } = this;
    let n = r[this.treeIndex], o = (n & lu.VALUE_LENGTH) >> 14;
    for (; t < u.length; t++, this.excess++) {
      const i = u.charCodeAt(t);
      if (this.treeIndex = gs(r, n, this.treeIndex + Math.max(1, o), i), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === su.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        _s(i)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (n = r[this.treeIndex], o = (n & lu.VALUE_LENGTH) >> 14, o !== 0) {
        if (i === ie.SEMI)
          return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
        this.decodeMode !== su.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
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
    var u;
    const { result: t, decodeTree: r } = this, n = (r[t] & lu.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, n, this.consumed), (u = this.errors) === null || u === void 0 || u.missingSemicolonAfterCharacterReference(), this.consumed;
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
  emitNamedEntityData(u, t, r) {
    const { decodeTree: n } = this;
    return this.emitCodePoint(t === 1 ? n[u] & ~lu.VALUE_LENGTH : n[u + 1], r), t === 3 && this.emitCodePoint(n[u + 2], r), r;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var u;
    switch (this.state) {
      case oe.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== su.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case oe.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case oe.NumericHex:
        return this.emitNumericEntity(0, 3);
      case oe.NumericStart:
        return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case oe.EntityStart:
        return 0;
    }
  }
}
function ao(e) {
  let u = "";
  const t = new xs(e, (r) => u += ds(r));
  return function(n, o) {
    let i = 0, c = 0;
    for (; (c = n.indexOf("&", c)) >= 0; ) {
      u += n.slice(i, c), t.startEntity(o);
      const a = t.write(
        n,
        // Skip the "&"
        c + 1
      );
      if (a < 0) {
        i = c + t.end();
        break;
      }
      i = c + a, c = a === 0 ? i + 1 : i;
    }
    const s = u + n.slice(i);
    return u = "", s;
  };
}
function gs(e, u, t, r) {
  const n = (u & lu.BRANCH_LENGTH) >> 7, o = u & lu.JUMP_TABLE;
  if (n === 0)
    return o !== 0 && r === o ? t : -1;
  if (o) {
    const s = r - o;
    return s < 0 || s >= n ? -1 : e[t + s] - 1;
  }
  let i = t, c = i + n - 1;
  for (; i <= c; ) {
    const s = i + c >>> 1, a = e[s];
    if (a < r)
      i = s + 1;
    else if (a > r)
      c = s - 1;
    else
      return e[s + n];
  }
  return -1;
}
const ks = ao(as);
ao(ls);
function lo(e, u = su.Legacy) {
  return ks(e, u);
}
function ws(e) {
  return Object.prototype.toString.call(e);
}
function Qr(e) {
  return ws(e) === "[object String]";
}
const ys = Object.prototype.hasOwnProperty;
function vs(e, u) {
  return ys.call(e, u);
}
function Zt(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be object");
      Object.keys(t).forEach(function(r) {
        e[r] = t[r];
      });
    }
  }), e;
}
function fo(e, u, t) {
  return [].concat(e.slice(0, u), t, e.slice(u + 1));
}
function en(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function Mt(e) {
  if (e > 65535) {
    e -= 65536;
    const u = 55296 + (e >> 10), t = 56320 + (e & 1023);
    return String.fromCharCode(u, t);
  }
  return String.fromCharCode(e);
}
const ho = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Cs = /&([a-z#][a-z0-9]{1,31});/gi, Es = new RegExp(ho.source + "|" + Cs.source, "gi"), As = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Ds(e, u) {
  if (u.charCodeAt(0) === 35 && As.test(u)) {
    const r = u[1].toLowerCase() === "x" ? parseInt(u.slice(2), 16) : parseInt(u.slice(1), 10);
    return en(r) ? Mt(r) : e;
  }
  const t = lo(e);
  return t !== e ? t : e;
}
function Ss(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(ho, "$1");
}
function tt(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(Es, function(u, t, r) {
    return t || Ds(u, r);
  });
}
const Fs = /[&<>"]/, Ts = /[&<>"]/g, Rs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Is(e) {
  return Rs[e];
}
function bu(e) {
  return Fs.test(e) ? e.replace(Ts, Is) : e;
}
const Ms = /[.?*+^$[\]\\(){}|-]/g;
function Os(e) {
  return e.replace(Ms, "\\$&");
}
function X(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function rt(e) {
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
function nt(e) {
  return Xr.test(e);
}
function ot(e) {
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
function Wt(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const zs = { mdurl: is, ucmicro: ss }, Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: fo,
  assign: Zt,
  escapeHtml: bu,
  escapeRE: Os,
  fromCodePoint: Mt,
  has: vs,
  isMdAsciiPunct: ot,
  isPunctChar: nt,
  isSpace: X,
  isString: Qr,
  isValidEntityCode: en,
  isWhiteSpace: rt,
  lib: zs,
  normalizeReference: Wt,
  unescapeAll: tt,
  unescapeMd: Ss
}, Symbol.toStringTag, { value: "Module" }));
function Ls(e, u, t) {
  let r, n, o, i;
  const c = e.posMax, s = e.pos;
  for (e.pos = u + 1, r = 1; e.pos < c; ) {
    if (o = e.src.charCodeAt(e.pos), o === 93 && (r--, r === 0)) {
      n = !0;
      break;
    }
    if (i = e.pos, e.md.inline.skipToken(e), o === 91) {
      if (i === e.pos - 1)
        r++;
      else if (t)
        return e.pos = s, -1;
    }
  }
  let a = -1;
  return n && (a = e.pos), e.pos = s, a;
}
function Ns(e, u, t) {
  let r, n = u;
  const o = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (e.charCodeAt(n) === 60) {
    for (n++; n < t; ) {
      if (r = e.charCodeAt(n), r === 10 || r === 60)
        return o;
      if (r === 62)
        return o.pos = n + 1, o.str = tt(e.slice(u + 1, n)), o.ok = !0, o;
      if (r === 92 && n + 1 < t) {
        n += 2;
        continue;
      }
      n++;
    }
    return o;
  }
  let i = 0;
  for (; n < t && (r = e.charCodeAt(n), !(r === 32 || r < 32 || r === 127)); ) {
    if (r === 92 && n + 1 < t) {
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
  return u === n || i !== 0 || (o.str = tt(e.slice(u, n)), o.pos = n, o.ok = !0), o;
}
function Bs(e, u, t) {
  let r, n, o = 0, i = u;
  const c = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (i >= t || (n = e.charCodeAt(i), n !== 34 && n !== 39 && n !== 40))
    return c;
  for (i++, n === 40 && (n = 41); i < t; ) {
    if (r = e.charCodeAt(i), r === n)
      return c.pos = i + 1, c.lines = o, c.str = tt(e.slice(u + 1, i)), c.ok = !0, c;
    if (r === 40 && n === 41)
      return c;
    r === 10 ? o++ : r === 92 && i + 1 < t && (i++, e.charCodeAt(i) === 10 && o++), i++;
  }
  return c;
}
const qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Ns,
  parseLinkLabel: Ls,
  parseLinkTitle: Bs
}, Symbol.toStringTag, { value: "Module" })), $e = {};
$e.code_inline = function(e, u, t, r, n) {
  const o = e[u];
  return "<code" + n.renderAttrs(o) + ">" + bu(o.content) + "</code>";
};
$e.code_block = function(e, u, t, r, n) {
  const o = e[u];
  return "<pre" + n.renderAttrs(o) + "><code>" + bu(e[u].content) + `</code></pre>
`;
};
$e.fence = function(e, u, t, r, n) {
  const o = e[u], i = o.info ? tt(o.info).trim() : "";
  let c = "", s = "";
  if (i) {
    const l = i.split(/(\s+)/g);
    c = l[0], s = l.slice(2).join("");
  }
  let a;
  if (t.highlight ? a = t.highlight(o.content, c, s) || bu(o.content) : a = bu(o.content), a.indexOf("<pre") === 0)
    return a + `
`;
  if (i) {
    const l = o.attrIndex("class"), d = o.attrs ? o.attrs.slice() : [];
    l < 0 ? d.push(["class", t.langPrefix + c]) : (d[l] = d[l].slice(), d[l][1] += " " + t.langPrefix + c);
    const m = {
      attrs: d
    };
    return `<pre><code${n.renderAttrs(m)}>${a}</code></pre>
`;
  }
  return `<pre><code${n.renderAttrs(o)}>${a}</code></pre>
`;
};
$e.image = function(e, u, t, r, n) {
  const o = e[u];
  return o.attrs[o.attrIndex("alt")][1] = n.renderInlineAsText(o.children, t, r), n.renderToken(e, u, t);
};
$e.hardbreak = function(e, u, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
$e.softbreak = function(e, u, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
$e.text = function(e, u) {
  return bu(e[u].content);
};
$e.html_block = function(e, u) {
  return e[u].content;
};
$e.html_inline = function(e, u) {
  return e[u].content;
};
function Hu() {
  this.rules = Zt({}, $e);
}
Hu.prototype.renderAttrs = function(u) {
  let t, r, n;
  if (!u.attrs)
    return "";
  for (n = "", t = 0, r = u.attrs.length; t < r; t++)
    n += " " + bu(u.attrs[t][0]) + '="' + bu(u.attrs[t][1]) + '"';
  return n;
};
Hu.prototype.renderToken = function(u, t, r) {
  const n = u[t];
  let o = "";
  if (n.hidden)
    return "";
  n.block && n.nesting !== -1 && t && u[t - 1].hidden && (o += `
`), o += (n.nesting === -1 ? "</" : "<") + n.tag, o += this.renderAttrs(n), n.nesting === 0 && r.xhtmlOut && (o += " /");
  let i = !1;
  if (n.block && (i = !0, n.nesting === 1 && t + 1 < u.length)) {
    const c = u[t + 1];
    (c.type === "inline" || c.hidden || c.nesting === -1 && c.tag === n.tag) && (i = !1);
  }
  return o += i ? `>
` : ">", o;
};
Hu.prototype.renderInline = function(e, u, t) {
  let r = "";
  const n = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const c = e[o].type;
    typeof n[c] < "u" ? r += n[c](e, o, u, t, this) : r += this.renderToken(e, o, u);
  }
  return r;
};
Hu.prototype.renderInlineAsText = function(e, u, t) {
  let r = "";
  for (let n = 0, o = e.length; n < o; n++)
    switch (e[n].type) {
      case "text":
        r += e[n].content;
        break;
      case "image":
        r += this.renderInlineAsText(e[n].children, u, t);
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
Hu.prototype.render = function(e, u, t) {
  let r = "";
  const n = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const c = e[o].type;
    c === "inline" ? r += this.renderInline(e[o].children, u, t) : typeof n[c] < "u" ? r += n[c](e, o, u, t, this) : r += this.renderToken(e, o, u, t);
  }
  return r;
};
function ge() {
  this.__rules__ = [], this.__cache__ = null;
}
ge.prototype.__find__ = function(e) {
  for (let u = 0; u < this.__rules__.length; u++)
    if (this.__rules__[u].name === e)
      return u;
  return -1;
};
ge.prototype.__compile__ = function() {
  const e = this, u = [""];
  e.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(r) {
      u.indexOf(r) < 0 && u.push(r);
    });
  }), e.__cache__ = {}, u.forEach(function(t) {
    e.__cache__[t] = [], e.__rules__.forEach(function(r) {
      r.enabled && (t && r.alt.indexOf(t) < 0 || e.__cache__[t].push(r.fn));
    });
  });
};
ge.prototype.at = function(e, u, t) {
  const r = this.__find__(e), n = t || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[r].fn = u, this.__rules__[r].alt = n.alt || [], this.__cache__ = null;
};
ge.prototype.before = function(e, u, t, r) {
  const n = this.__find__(e), o = r || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(n, 0, {
    name: u,
    enabled: !0,
    fn: t,
    alt: o.alt || []
  }), this.__cache__ = null;
};
ge.prototype.after = function(e, u, t, r) {
  const n = this.__find__(e), o = r || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(n + 1, 0, {
    name: u,
    enabled: !0,
    fn: t,
    alt: o.alt || []
  }), this.__cache__ = null;
};
ge.prototype.push = function(e, u, t) {
  const r = t || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: u,
    alt: r.alt || []
  }), this.__cache__ = null;
};
ge.prototype.enable = function(e, u) {
  Array.isArray(e) || (e = [e]);
  const t = [];
  return e.forEach(function(r) {
    const n = this.__find__(r);
    if (n < 0) {
      if (u)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[n].enabled = !0, t.push(r);
  }, this), this.__cache__ = null, t;
};
ge.prototype.enableOnly = function(e, u) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), this.enable(e, u);
};
ge.prototype.disable = function(e, u) {
  Array.isArray(e) || (e = [e]);
  const t = [];
  return e.forEach(function(r) {
    const n = this.__find__(r);
    if (n < 0) {
      if (u)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[n].enabled = !1, t.push(r);
  }, this), this.__cache__ = null, t;
};
ge.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function Pe(e, u, t) {
  this.type = e, this.tag = u, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
Pe.prototype.attrIndex = function(u) {
  if (!this.attrs)
    return -1;
  const t = this.attrs;
  for (let r = 0, n = t.length; r < n; r++)
    if (t[r][0] === u)
      return r;
  return -1;
};
Pe.prototype.attrPush = function(u) {
  this.attrs ? this.attrs.push(u) : this.attrs = [u];
};
Pe.prototype.attrSet = function(u, t) {
  const r = this.attrIndex(u), n = [u, t];
  r < 0 ? this.attrPush(n) : this.attrs[r] = n;
};
Pe.prototype.attrGet = function(u) {
  const t = this.attrIndex(u);
  let r = null;
  return t >= 0 && (r = this.attrs[t][1]), r;
};
Pe.prototype.attrJoin = function(u, t) {
  const r = this.attrIndex(u);
  r < 0 ? this.attrPush([u, t]) : this.attrs[r][1] = this.attrs[r][1] + " " + t;
};
function po(e, u, t) {
  this.src = e, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = u;
}
po.prototype.Token = Pe;
const Hs = /\r\n?|\n/g, js = /\0/g;
function Us(e) {
  let u;
  u = e.src.replace(Hs, `
`), u = u.replace(js, "�"), e.src = u;
}
function Vs(e) {
  let u;
  e.inlineMode ? (u = new e.Token("inline", "", 0), u.content = e.src, u.map = [0, 1], u.children = [], e.tokens.push(u)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function $s(e) {
  const u = e.tokens;
  for (let t = 0, r = u.length; t < r; t++) {
    const n = u[t];
    n.type === "inline" && e.md.inline.parse(n.content, e.md, e.env, n.children);
  }
}
function Zs(e) {
  return /^<a[>\s]/i.test(e);
}
function Ws(e) {
  return /^<\/a\s*>/i.test(e);
}
function Gs(e) {
  const u = e.tokens;
  if (e.md.options.linkify)
    for (let t = 0, r = u.length; t < r; t++) {
      if (u[t].type !== "inline" || !e.md.linkify.pretest(u[t].content))
        continue;
      let n = u[t].children, o = 0;
      for (let i = n.length - 1; i >= 0; i--) {
        const c = n[i];
        if (c.type === "link_close") {
          for (i--; n[i].level !== c.level && n[i].type !== "link_open"; )
            i--;
          continue;
        }
        if (c.type === "html_inline" && (Zs(c.content) && o > 0 && o--, Ws(c.content) && o++), !(o > 0) && c.type === "text" && e.md.linkify.test(c.content)) {
          const s = c.content;
          let a = e.md.linkify.match(s);
          const l = [];
          let d = c.level, m = 0;
          a.length > 0 && a[0].index === 0 && i > 0 && n[i - 1].type === "text_special" && (a = a.slice(1));
          for (let _ = 0; _ < a.length; _++) {
            const b = a[_].url, S = e.md.normalizeLink(b);
            if (!e.md.validateLink(S))
              continue;
            let z = a[_].text;
            a[_].schema ? a[_].schema === "mailto:" && !/^mailto:/i.test(z) ? z = e.md.normalizeLinkText("mailto:" + z).replace(/^mailto:/, "") : z = e.md.normalizeLinkText(z) : z = e.md.normalizeLinkText("http://" + z).replace(/^http:\/\//, "");
            const N = a[_].index;
            if (N > m) {
              const A = new e.Token("text", "", 0);
              A.content = s.slice(m, N), A.level = d, l.push(A);
            }
            const j = new e.Token("link_open", "a", 1);
            j.attrs = [["href", S]], j.level = d++, j.markup = "linkify", j.info = "auto", l.push(j);
            const C = new e.Token("text", "", 0);
            C.content = z, C.level = d, l.push(C);
            const R = new e.Token("link_close", "a", -1);
            R.level = --d, R.markup = "linkify", R.info = "auto", l.push(R), m = a[_].lastIndex;
          }
          if (m < s.length) {
            const _ = new e.Token("text", "", 0);
            _.content = s.slice(m), _.level = d, l.push(_);
          }
          u[t].children = n = fo(n, i, l);
        }
      }
    }
}
const bo = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Ks = /\((c|tm|r)\)/i, Ys = /\((c|tm|r)\)/ig, Js = {
  c: "©",
  r: "®",
  tm: "™"
};
function Xs(e, u) {
  return Js[u.toLowerCase()];
}
function Qs(e) {
  let u = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    const r = e[t];
    r.type === "text" && !u && (r.content = r.content.replace(Ys, Xs)), r.type === "link_open" && r.info === "auto" && u--, r.type === "link_close" && r.info === "auto" && u++;
  }
}
function ea(e) {
  let u = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    const r = e[t];
    r.type === "text" && !u && bo.test(r.content) && (r.content = r.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), r.type === "link_open" && r.info === "auto" && u--, r.type === "link_close" && r.info === "auto" && u++;
  }
}
function ua(e) {
  let u;
  if (e.md.options.typographer)
    for (u = e.tokens.length - 1; u >= 0; u--)
      e.tokens[u].type === "inline" && (Ks.test(e.tokens[u].content) && Qs(e.tokens[u].children), bo.test(e.tokens[u].content) && ea(e.tokens[u].children));
}
const ta = /['"]/, Yn = /['"]/g, Jn = "’";
function kt(e, u, t) {
  return e.slice(0, u) + t + e.slice(u + 1);
}
function ra(e, u) {
  let t;
  const r = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], i = e[n].level;
    for (t = r.length - 1; t >= 0 && !(r[t].level <= i); t--)
      ;
    if (r.length = t + 1, o.type !== "text")
      continue;
    let c = o.content, s = 0, a = c.length;
    e:
      for (; s < a; ) {
        Yn.lastIndex = s;
        const l = Yn.exec(c);
        if (!l)
          break;
        let d = !0, m = !0;
        s = l.index + 1;
        const _ = l[0] === "'";
        let b = 32;
        if (l.index - 1 >= 0)
          b = c.charCodeAt(l.index - 1);
        else
          for (t = n - 1; t >= 0 && !(e[t].type === "softbreak" || e[t].type === "hardbreak"); t--)
            if (e[t].content) {
              b = e[t].content.charCodeAt(e[t].content.length - 1);
              break;
            }
        let S = 32;
        if (s < a)
          S = c.charCodeAt(s);
        else
          for (t = n + 1; t < e.length && !(e[t].type === "softbreak" || e[t].type === "hardbreak"); t++)
            if (e[t].content) {
              S = e[t].content.charCodeAt(0);
              break;
            }
        const z = ot(b) || nt(String.fromCharCode(b)), N = ot(S) || nt(String.fromCharCode(S)), j = rt(b), C = rt(S);
        if (C ? d = !1 : N && (j || z || (d = !1)), j ? m = !1 : z && (C || N || (m = !1)), S === 34 && l[0] === '"' && b >= 48 && b <= 57 && (m = d = !1), d && m && (d = z, m = N), !d && !m) {
          _ && (o.content = kt(o.content, l.index, Jn));
          continue;
        }
        if (m)
          for (t = r.length - 1; t >= 0; t--) {
            let R = r[t];
            if (r[t].level < i)
              break;
            if (R.single === _ && r[t].level === i) {
              R = r[t];
              let A, I;
              _ ? (A = u.md.options.quotes[2], I = u.md.options.quotes[3]) : (A = u.md.options.quotes[0], I = u.md.options.quotes[1]), o.content = kt(o.content, l.index, I), e[R.token].content = kt(
                e[R.token].content,
                R.pos,
                A
              ), s += I.length - 1, R.token === n && (s += A.length - 1), c = o.content, a = c.length, r.length = t;
              continue e;
            }
          }
        d ? r.push({
          token: n,
          pos: l.index,
          single: _,
          level: i
        }) : m && _ && (o.content = kt(o.content, l.index, Jn));
      }
  }
}
function na(e) {
  if (e.md.options.typographer)
    for (let u = e.tokens.length - 1; u >= 0; u--)
      e.tokens[u].type !== "inline" || !ta.test(e.tokens[u].content) || ra(e.tokens[u].children, e);
}
function oa(e) {
  let u, t;
  const r = e.tokens, n = r.length;
  for (let o = 0; o < n; o++) {
    if (r[o].type !== "inline")
      continue;
    const i = r[o].children, c = i.length;
    for (u = 0; u < c; u++)
      i[u].type === "text_special" && (i[u].type = "text");
    for (u = t = 0; u < c; u++)
      i[u].type === "text" && u + 1 < c && i[u + 1].type === "text" ? i[u + 1].content = i[u].content + i[u + 1].content : (u !== t && (i[t] = i[u]), t++);
    u !== t && (i.length = t);
  }
}
const cr = [
  ["normalize", Us],
  ["block", Vs],
  ["inline", $s],
  ["linkify", Gs],
  ["replacements", ua],
  ["smartquotes", na],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", oa]
];
function un() {
  this.ruler = new ge();
  for (let e = 0; e < cr.length; e++)
    this.ruler.push(cr[e][0], cr[e][1]);
}
un.prototype.process = function(e) {
  const u = this.ruler.getRules("");
  for (let t = 0, r = u.length; t < r; t++)
    u[t](e);
};
un.prototype.State = po;
function Ze(e, u, t, r) {
  this.src = e, this.md = u, this.env = t, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const n = this.src;
  for (let o = 0, i = 0, c = 0, s = 0, a = n.length, l = !1; i < a; i++) {
    const d = n.charCodeAt(i);
    if (!l)
      if (X(d)) {
        c++, d === 9 ? s += 4 - s % 4 : s++;
        continue;
      } else
        l = !0;
    (d === 10 || i === a - 1) && (d !== 10 && i++, this.bMarks.push(o), this.eMarks.push(i), this.tShift.push(c), this.sCount.push(s), this.bsCount.push(0), l = !1, c = 0, s = 0, o = i + 1);
  }
  this.bMarks.push(n.length), this.eMarks.push(n.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
Ze.prototype.push = function(e, u, t) {
  const r = new Pe(e, u, t);
  return r.block = !0, t < 0 && this.level--, r.level = this.level, t > 0 && this.level++, this.tokens.push(r), r;
};
Ze.prototype.isEmpty = function(u) {
  return this.bMarks[u] + this.tShift[u] >= this.eMarks[u];
};
Ze.prototype.skipEmptyLines = function(u) {
  for (let t = this.lineMax; u < t && !(this.bMarks[u] + this.tShift[u] < this.eMarks[u]); u++)
    ;
  return u;
};
Ze.prototype.skipSpaces = function(u) {
  for (let t = this.src.length; u < t; u++) {
    const r = this.src.charCodeAt(u);
    if (!X(r))
      break;
  }
  return u;
};
Ze.prototype.skipSpacesBack = function(u, t) {
  if (u <= t)
    return u;
  for (; u > t; )
    if (!X(this.src.charCodeAt(--u)))
      return u + 1;
  return u;
};
Ze.prototype.skipChars = function(u, t) {
  for (let r = this.src.length; u < r && this.src.charCodeAt(u) === t; u++)
    ;
  return u;
};
Ze.prototype.skipCharsBack = function(u, t, r) {
  if (u <= r)
    return u;
  for (; u > r; )
    if (t !== this.src.charCodeAt(--u))
      return u + 1;
  return u;
};
Ze.prototype.getLines = function(u, t, r, n) {
  if (u >= t)
    return "";
  const o = new Array(t - u);
  for (let i = 0, c = u; c < t; c++, i++) {
    let s = 0;
    const a = this.bMarks[c];
    let l = a, d;
    for (c + 1 < t || n ? d = this.eMarks[c] + 1 : d = this.eMarks[c]; l < d && s < r; ) {
      const m = this.src.charCodeAt(l);
      if (X(m))
        m === 9 ? s += 4 - (s + this.bsCount[c]) % 4 : s++;
      else if (l - a < this.tShift[c])
        s++;
      else
        break;
      l++;
    }
    s > r ? o[i] = new Array(s - r + 1).join(" ") + this.src.slice(l, d) : o[i] = this.src.slice(l, d);
  }
  return o.join("");
};
Ze.prototype.Token = Pe;
function sr(e, u) {
  const t = e.bMarks[u] + e.tShift[u], r = e.eMarks[u];
  return e.src.slice(t, r);
}
function Xn(e) {
  const u = [], t = e.length;
  let r = 0, n = e.charCodeAt(r), o = !1, i = 0, c = "";
  for (; r < t; )
    n === 124 && (o ? (c += e.substring(i, r - 1), i = r) : (u.push(c + e.substring(i, r)), c = "", i = r + 1)), o = n === 92, r++, n = e.charCodeAt(r);
  return u.push(c + e.substring(i)), u;
}
function ia(e, u, t, r) {
  if (u + 2 > t)
    return !1;
  let n = u + 1;
  if (e.sCount[n] < e.blkIndent || e.sCount[n] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[n] + e.tShift[n];
  if (o >= e.eMarks[n])
    return !1;
  const i = e.src.charCodeAt(o++);
  if (i !== 124 && i !== 45 && i !== 58 || o >= e.eMarks[n])
    return !1;
  const c = e.src.charCodeAt(o++);
  if (c !== 124 && c !== 45 && c !== 58 && !X(c) || i === 45 && X(c))
    return !1;
  for (; o < e.eMarks[n]; ) {
    const C = e.src.charCodeAt(o);
    if (C !== 124 && C !== 45 && C !== 58 && !X(C))
      return !1;
    o++;
  }
  let s = sr(e, u + 1), a = s.split("|");
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
  if (s = sr(e, u).trim(), s.indexOf("|") === -1 || e.sCount[u] - e.blkIndent >= 4)
    return !1;
  a = Xn(s), a.length && a[0] === "" && a.shift(), a.length && a[a.length - 1] === "" && a.pop();
  const d = a.length;
  if (d === 0 || d !== l.length)
    return !1;
  if (r)
    return !0;
  const m = e.parentType;
  e.parentType = "table";
  const _ = e.md.block.ruler.getRules("blockquote"), b = e.push("table_open", "table", 1), S = [u, 0];
  b.map = S;
  const z = e.push("thead_open", "thead", 1);
  z.map = [u, u + 1];
  const N = e.push("tr_open", "tr", 1);
  N.map = [u, u + 1];
  for (let C = 0; C < a.length; C++) {
    const R = e.push("th_open", "th", 1);
    l[C] && (R.attrs = [["style", "text-align:" + l[C]]]);
    const A = e.push("inline", "", 0);
    A.content = a[C].trim(), A.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let j;
  for (n = u + 2; n < t && !(e.sCount[n] < e.blkIndent); n++) {
    let C = !1;
    for (let A = 0, I = _.length; A < I; A++)
      if (_[A](e, n, t, !0)) {
        C = !0;
        break;
      }
    if (C || (s = sr(e, n).trim(), !s) || e.sCount[n] - e.blkIndent >= 4)
      break;
    if (a = Xn(s), a.length && a[0] === "" && a.shift(), a.length && a[a.length - 1] === "" && a.pop(), n === u + 2) {
      const A = e.push("tbody_open", "tbody", 1);
      A.map = j = [u + 2, 0];
    }
    const R = e.push("tr_open", "tr", 1);
    R.map = [n, n + 1];
    for (let A = 0; A < d; A++) {
      const I = e.push("td_open", "td", 1);
      l[A] && (I.attrs = [["style", "text-align:" + l[A]]]);
      const K = e.push("inline", "", 0);
      K.content = a[A] ? a[A].trim() : "", K.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return j && (e.push("tbody_close", "tbody", -1), j[1] = n), e.push("table_close", "table", -1), S[1] = n, e.parentType = m, e.line = n, !0;
}
function ca(e, u, t) {
  if (e.sCount[u] - e.blkIndent < 4)
    return !1;
  let r = u + 1, n = r;
  for (; r < t; ) {
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
  return o.content = e.getLines(u, n, 4 + e.blkIndent, !1) + `
`, o.map = [u, e.line], !0;
}
function sa(e, u, t, r) {
  let n = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4 || n + 3 > o)
    return !1;
  const i = e.src.charCodeAt(n);
  if (i !== 126 && i !== 96)
    return !1;
  let c = n;
  n = e.skipChars(n, i);
  let s = n - c;
  if (s < 3)
    return !1;
  const a = e.src.slice(c, n), l = e.src.slice(n, o);
  if (i === 96 && l.indexOf(String.fromCharCode(i)) >= 0)
    return !1;
  if (r)
    return !0;
  let d = u, m = !1;
  for (; d++, !(d >= t || (n = c = e.bMarks[d] + e.tShift[d], o = e.eMarks[d], n < o && e.sCount[d] < e.blkIndent)); )
    if (e.src.charCodeAt(n) === i && !(e.sCount[d] - e.blkIndent >= 4) && (n = e.skipChars(n, i), !(n - c < s) && (n = e.skipSpaces(n), !(n < o)))) {
      m = !0;
      break;
    }
  s = e.sCount[u], e.line = d + (m ? 1 : 0);
  const _ = e.push("fence", "code", 0);
  return _.info = l, _.content = e.getLines(u + 1, d, s, !0), _.markup = a, _.map = [u, e.line], !0;
}
function aa(e, u, t, r) {
  let n = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  const i = e.lineMax;
  if (e.sCount[u] - e.blkIndent >= 4 || e.src.charCodeAt(n) !== 62)
    return !1;
  if (r)
    return !0;
  const c = [], s = [], a = [], l = [], d = e.md.block.ruler.getRules("blockquote"), m = e.parentType;
  e.parentType = "blockquote";
  let _ = !1, b;
  for (b = u; b < t; b++) {
    const C = e.sCount[b] < e.blkIndent;
    if (n = e.bMarks[b] + e.tShift[b], o = e.eMarks[b], n >= o)
      break;
    if (e.src.charCodeAt(n++) === 62 && !C) {
      let A = e.sCount[b] + 1, I, K;
      e.src.charCodeAt(n) === 32 ? (n++, A++, K = !1, I = !0) : e.src.charCodeAt(n) === 9 ? (I = !0, (e.bsCount[b] + A) % 4 === 3 ? (n++, A++, K = !1) : K = !0) : I = !1;
      let te = A;
      for (c.push(e.bMarks[b]), e.bMarks[b] = n; n < o; ) {
        const Ce = e.src.charCodeAt(n);
        if (X(Ce))
          Ce === 9 ? te += 4 - (te + e.bsCount[b] + (K ? 1 : 0)) % 4 : te++;
        else
          break;
        n++;
      }
      _ = n >= o, s.push(e.bsCount[b]), e.bsCount[b] = e.sCount[b] + 1 + (I ? 1 : 0), a.push(e.sCount[b]), e.sCount[b] = te - A, l.push(e.tShift[b]), e.tShift[b] = n - e.bMarks[b];
      continue;
    }
    if (_)
      break;
    let R = !1;
    for (let A = 0, I = d.length; A < I; A++)
      if (d[A](e, b, t, !0)) {
        R = !0;
        break;
      }
    if (R) {
      e.lineMax = b, e.blkIndent !== 0 && (c.push(e.bMarks[b]), s.push(e.bsCount[b]), l.push(e.tShift[b]), a.push(e.sCount[b]), e.sCount[b] -= e.blkIndent);
      break;
    }
    c.push(e.bMarks[b]), s.push(e.bsCount[b]), l.push(e.tShift[b]), a.push(e.sCount[b]), e.sCount[b] = -1;
  }
  const S = e.blkIndent;
  e.blkIndent = 0;
  const z = e.push("blockquote_open", "blockquote", 1);
  z.markup = ">";
  const N = [u, 0];
  z.map = N, e.md.block.tokenize(e, u, b);
  const j = e.push("blockquote_close", "blockquote", -1);
  j.markup = ">", e.lineMax = i, e.parentType = m, N[1] = e.line;
  for (let C = 0; C < l.length; C++)
    e.bMarks[C + u] = c[C], e.tShift[C + u] = l[C], e.sCount[C + u] = a[C], e.bsCount[C + u] = s[C];
  return e.blkIndent = S, !0;
}
function la(e, u, t, r) {
  const n = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[u] + e.tShift[u];
  const i = e.src.charCodeAt(o++);
  if (i !== 42 && i !== 45 && i !== 95)
    return !1;
  let c = 1;
  for (; o < n; ) {
    const a = e.src.charCodeAt(o++);
    if (a !== i && !X(a))
      return !1;
    a === i && c++;
  }
  if (c < 3)
    return !1;
  if (r)
    return !0;
  e.line = u + 1;
  const s = e.push("hr", "hr", 0);
  return s.map = [u, e.line], s.markup = Array(c + 1).join(String.fromCharCode(i)), !0;
}
function Qn(e, u) {
  const t = e.eMarks[u];
  let r = e.bMarks[u] + e.tShift[u];
  const n = e.src.charCodeAt(r++);
  if (n !== 42 && n !== 45 && n !== 43)
    return -1;
  if (r < t) {
    const o = e.src.charCodeAt(r);
    if (!X(o))
      return -1;
  }
  return r;
}
function e0(e, u) {
  const t = e.bMarks[u] + e.tShift[u], r = e.eMarks[u];
  let n = t;
  if (n + 1 >= r)
    return -1;
  let o = e.src.charCodeAt(n++);
  if (o < 48 || o > 57)
    return -1;
  for (; ; ) {
    if (n >= r)
      return -1;
    if (o = e.src.charCodeAt(n++), o >= 48 && o <= 57) {
      if (n - t >= 10)
        return -1;
      continue;
    }
    if (o === 41 || o === 46)
      break;
    return -1;
  }
  return n < r && (o = e.src.charCodeAt(n), !X(o)) ? -1 : n;
}
function fa(e, u) {
  const t = e.level + 2;
  for (let r = u + 2, n = e.tokens.length - 2; r < n; r++)
    e.tokens[r].level === t && e.tokens[r].type === "paragraph_open" && (e.tokens[r + 2].hidden = !0, e.tokens[r].hidden = !0, r += 2);
}
function da(e, u, t, r) {
  let n, o, i, c, s = u, a = !0;
  if (e.sCount[s] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[s] - e.listIndent >= 4 && e.sCount[s] < e.blkIndent)
    return !1;
  let l = !1;
  r && e.parentType === "paragraph" && e.sCount[s] >= e.blkIndent && (l = !0);
  let d, m, _;
  if ((_ = e0(e, s)) >= 0) {
    if (d = !0, i = e.bMarks[s] + e.tShift[s], m = Number(e.src.slice(i, _ - 1)), l && m !== 1)
      return !1;
  } else if ((_ = Qn(e, s)) >= 0)
    d = !1;
  else
    return !1;
  if (l && e.skipSpaces(_) >= e.eMarks[s])
    return !1;
  if (r)
    return !0;
  const b = e.src.charCodeAt(_ - 1), S = e.tokens.length;
  d ? (c = e.push("ordered_list_open", "ol", 1), m !== 1 && (c.attrs = [["start", m]])) : c = e.push("bullet_list_open", "ul", 1);
  const z = [s, 0];
  c.map = z, c.markup = String.fromCharCode(b);
  let N = !1;
  const j = e.md.block.ruler.getRules("list"), C = e.parentType;
  for (e.parentType = "list"; s < t; ) {
    o = _, n = e.eMarks[s];
    const R = e.sCount[s] + _ - (e.bMarks[s] + e.tShift[s]);
    let A = R;
    for (; o < n; ) {
      const Ae = e.src.charCodeAt(o);
      if (Ae === 9)
        A += 4 - (A + e.bsCount[s]) % 4;
      else if (Ae === 32)
        A++;
      else
        break;
      o++;
    }
    const I = o;
    let K;
    I >= n ? K = 1 : K = A - R, K > 4 && (K = 1);
    const te = R + K;
    c = e.push("list_item_open", "li", 1), c.markup = String.fromCharCode(b);
    const Ce = [s, 0];
    c.map = Ce, d && (c.info = e.src.slice(i, _ - 1));
    const Ee = e.tight, Le = e.tShift[s], We = e.sCount[s], Ge = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = te, e.tight = !0, e.tShift[s] = I - e.bMarks[s], e.sCount[s] = A, I >= n && e.isEmpty(s + 1) ? e.line = Math.min(e.line + 2, t) : e.md.block.tokenize(e, s, t, !0), (!e.tight || N) && (a = !1), N = e.line - s > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = Ge, e.tShift[s] = Le, e.sCount[s] = We, e.tight = Ee, c = e.push("list_item_close", "li", -1), c.markup = String.fromCharCode(b), s = e.line, Ce[1] = s, s >= t || e.sCount[s] < e.blkIndent || e.sCount[s] - e.blkIndent >= 4)
      break;
    let Ke = !1;
    for (let Ae = 0, re = j.length; Ae < re; Ae++)
      if (j[Ae](e, s, t, !0)) {
        Ke = !0;
        break;
      }
    if (Ke)
      break;
    if (d) {
      if (_ = e0(e, s), _ < 0)
        break;
      i = e.bMarks[s] + e.tShift[s];
    } else if (_ = Qn(e, s), _ < 0)
      break;
    if (b !== e.src.charCodeAt(_ - 1))
      break;
  }
  return d ? c = e.push("ordered_list_close", "ol", -1) : c = e.push("bullet_list_close", "ul", -1), c.markup = String.fromCharCode(b), z[1] = s, e.line = s, e.parentType = C, a && fa(e, S), !0;
}
function ha(e, u, t, r) {
  let n = 0, o = e.bMarks[u] + e.tShift[u], i = e.eMarks[u], c = u + 1;
  if (e.sCount[u] - e.blkIndent >= 4 || e.src.charCodeAt(o) !== 91)
    return !1;
  for (; ++o < i; )
    if (e.src.charCodeAt(o) === 93 && e.src.charCodeAt(o - 1) !== 92) {
      if (o + 1 === i || e.src.charCodeAt(o + 1) !== 58)
        return !1;
      break;
    }
  const s = e.lineMax, a = e.md.block.ruler.getRules("reference"), l = e.parentType;
  for (e.parentType = "reference"; c < s && !e.isEmpty(c); c++) {
    if (e.sCount[c] - e.blkIndent > 3 || e.sCount[c] < 0)
      continue;
    let A = !1;
    for (let I = 0, K = a.length; I < K; I++)
      if (a[I](e, c, s, !0)) {
        A = !0;
        break;
      }
    if (A)
      break;
  }
  const d = e.getLines(u, c, e.blkIndent, !1).trim();
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
  const S = o, z = n, N = o;
  for (; o < i; o++) {
    const A = d.charCodeAt(o);
    if (A === 10)
      n++;
    else if (!X(A))
      break;
  }
  const j = e.md.helpers.parseLinkTitle(d, o, i);
  let C;
  for (o < i && N !== o && j.ok ? (C = j.str, o = j.pos, n += j.lines) : (C = "", o = S, n = z); o < i; ) {
    const A = d.charCodeAt(o);
    if (!X(A))
      break;
    o++;
  }
  if (o < i && d.charCodeAt(o) !== 10 && C)
    for (C = "", o = S, n = z; o < i; ) {
      const A = d.charCodeAt(o);
      if (!X(A))
        break;
      o++;
    }
  if (o < i && d.charCodeAt(o) !== 10)
    return !1;
  const R = Wt(d.slice(1, m));
  return R ? (r || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[R] > "u" && (e.env.references[R] = { title: C, href: b }), e.parentType = l, e.line = u + n + 1), !0) : !1;
}
const pa = [
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
], ba = "[a-zA-Z_:][a-zA-Z0-9:._-]*", ma = "[^\"'=<>`\\x00-\\x20]+", _a = "'[^']*'", xa = '"[^"]*"', ga = "(?:" + ma + "|" + _a + "|" + xa + ")", ka = "(?:\\s+" + ba + "(?:\\s*=\\s*" + ga + ")?)", mo = "<[A-Za-z][A-Za-z0-9\\-]*" + ka + "*\\s*\\/?>", _o = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", wa = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", ya = "<[?][\\s\\S]*?[?]>", va = "<![A-Z]+\\s+[^>]*>", Ca = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Ea = new RegExp("^(?:" + mo + "|" + _o + "|" + wa + "|" + ya + "|" + va + "|" + Ca + ")"), Aa = new RegExp("^(?:" + mo + "|" + _o + ")"), Tu = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + pa.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Aa.source + "\\s*$"), /^$/, !1]
];
function Da(e, u, t, r) {
  let n = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(n) !== 60)
    return !1;
  let i = e.src.slice(n, o), c = 0;
  for (; c < Tu.length && !Tu[c][0].test(i); c++)
    ;
  if (c === Tu.length)
    return !1;
  if (r)
    return Tu[c][2];
  let s = u + 1;
  if (!Tu[c][1].test(i)) {
    for (; s < t && !(e.sCount[s] < e.blkIndent); s++)
      if (n = e.bMarks[s] + e.tShift[s], o = e.eMarks[s], i = e.src.slice(n, o), Tu[c][1].test(i)) {
        i.length !== 0 && s++;
        break;
      }
  }
  e.line = s;
  const a = e.push("html_block", "", 0);
  return a.map = [u, s], a.content = e.getLines(u, s, e.blkIndent, !0), !0;
}
function Sa(e, u, t, r) {
  let n = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4)
    return !1;
  let i = e.src.charCodeAt(n);
  if (i !== 35 || n >= o)
    return !1;
  let c = 1;
  for (i = e.src.charCodeAt(++n); i === 35 && n < o && c <= 6; )
    c++, i = e.src.charCodeAt(++n);
  if (c > 6 || n < o && !X(i))
    return !1;
  if (r)
    return !0;
  o = e.skipSpacesBack(o, n);
  const s = e.skipCharsBack(o, 35, n);
  s > n && X(e.src.charCodeAt(s - 1)) && (o = s), e.line = u + 1;
  const a = e.push("heading_open", "h" + String(c), 1);
  a.markup = "########".slice(0, c), a.map = [u, e.line];
  const l = e.push("inline", "", 0);
  l.content = e.src.slice(n, o).trim(), l.map = [u, e.line], l.children = [];
  const d = e.push("heading_close", "h" + String(c), -1);
  return d.markup = "########".slice(0, c), !0;
}
function Fa(e, u, t) {
  const r = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[u] - e.blkIndent >= 4)
    return !1;
  const n = e.parentType;
  e.parentType = "paragraph";
  let o = 0, i, c = u + 1;
  for (; c < t && !e.isEmpty(c); c++) {
    if (e.sCount[c] - e.blkIndent > 3)
      continue;
    if (e.sCount[c] >= e.blkIndent) {
      let _ = e.bMarks[c] + e.tShift[c];
      const b = e.eMarks[c];
      if (_ < b && (i = e.src.charCodeAt(_), (i === 45 || i === 61) && (_ = e.skipChars(_, i), _ = e.skipSpaces(_), _ >= b))) {
        o = i === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[c] < 0)
      continue;
    let m = !1;
    for (let _ = 0, b = r.length; _ < b; _++)
      if (r[_](e, c, t, !0)) {
        m = !0;
        break;
      }
    if (m)
      break;
  }
  if (!o)
    return !1;
  const s = e.getLines(u, c, e.blkIndent, !1).trim();
  e.line = c + 1;
  const a = e.push("heading_open", "h" + String(o), 1);
  a.markup = String.fromCharCode(i), a.map = [u, e.line];
  const l = e.push("inline", "", 0);
  l.content = s, l.map = [u, e.line - 1], l.children = [];
  const d = e.push("heading_close", "h" + String(o), -1);
  return d.markup = String.fromCharCode(i), e.parentType = n, !0;
}
function Ta(e, u, t) {
  const r = e.md.block.ruler.getRules("paragraph"), n = e.parentType;
  let o = u + 1;
  for (e.parentType = "paragraph"; o < t && !e.isEmpty(o); o++) {
    if (e.sCount[o] - e.blkIndent > 3 || e.sCount[o] < 0)
      continue;
    let a = !1;
    for (let l = 0, d = r.length; l < d; l++)
      if (r[l](e, o, t, !0)) {
        a = !0;
        break;
      }
    if (a)
      break;
  }
  const i = e.getLines(u, o, e.blkIndent, !1).trim();
  e.line = o;
  const c = e.push("paragraph_open", "p", 1);
  c.map = [u, e.line];
  const s = e.push("inline", "", 0);
  return s.content = i, s.map = [u, e.line], s.children = [], e.push("paragraph_close", "p", -1), e.parentType = n, !0;
}
const wt = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", ia, ["paragraph", "reference"]],
  ["code", ca],
  ["fence", sa, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", aa, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", la, ["paragraph", "reference", "blockquote", "list"]],
  ["list", da, ["paragraph", "reference", "blockquote"]],
  ["reference", ha],
  ["html_block", Da, ["paragraph", "reference", "blockquote"]],
  ["heading", Sa, ["paragraph", "reference", "blockquote"]],
  ["lheading", Fa],
  ["paragraph", Ta]
];
function Gt() {
  this.ruler = new ge();
  for (let e = 0; e < wt.length; e++)
    this.ruler.push(wt[e][0], wt[e][1], { alt: (wt[e][2] || []).slice() });
}
Gt.prototype.tokenize = function(e, u, t) {
  const r = this.ruler.getRules(""), n = r.length, o = e.md.options.maxNesting;
  let i = u, c = !1;
  for (; i < t && (e.line = i = e.skipEmptyLines(i), !(i >= t || e.sCount[i] < e.blkIndent)); ) {
    if (e.level >= o) {
      e.line = t;
      break;
    }
    const s = e.line;
    let a = !1;
    for (let l = 0; l < n; l++)
      if (a = r[l](e, i, t, !1), a) {
        if (s >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!a)
      throw new Error("none of the block rules matched");
    e.tight = !c, e.isEmpty(e.line - 1) && (c = !0), i = e.line, i < t && e.isEmpty(i) && (c = !0, i++, e.line = i);
  }
};
Gt.prototype.parse = function(e, u, t, r) {
  if (!e)
    return;
  const n = new this.State(e, u, t, r);
  this.tokenize(n, n.line, n.lineMax);
};
Gt.prototype.State = Ze;
function at(e, u, t, r) {
  this.src = e, this.env = t, this.md = u, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
at.prototype.pushPending = function() {
  const e = new Pe("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
at.prototype.push = function(e, u, t) {
  this.pending && this.pushPending();
  const r = new Pe(e, u, t);
  let n = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], n = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(n), r;
};
at.prototype.scanDelims = function(e, u) {
  let t, r, n = !0, o = !0;
  const i = this.posMax, c = this.src.charCodeAt(e), s = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let a = e;
  for (; a < i && this.src.charCodeAt(a) === c; )
    a++;
  const l = a - e, d = a < i ? this.src.charCodeAt(a) : 32, m = ot(s) || nt(String.fromCharCode(s)), _ = ot(d) || nt(String.fromCharCode(d)), b = rt(s), S = rt(d);
  return S ? n = !1 : _ && (b || m || (n = !1)), b ? o = !1 : m && (S || _ || (o = !1)), u ? (t = n, r = o) : (t = n && (!o || m), r = o && (!n || _)), { can_open: t, can_close: r, length: l };
};
at.prototype.Token = Pe;
function Ra(e) {
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
function Ia(e, u) {
  let t = e.pos;
  for (; t < e.posMax && !Ra(e.src.charCodeAt(t)); )
    t++;
  return t === e.pos ? !1 : (u || (e.pending += e.src.slice(e.pos, t)), e.pos = t, !0);
}
const Ma = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function Oa(e, u) {
  if (!e.md.options.linkify || e.linkLevel > 0)
    return !1;
  const t = e.pos, r = e.posMax;
  if (t + 3 > r || e.src.charCodeAt(t) !== 58 || e.src.charCodeAt(t + 1) !== 47 || e.src.charCodeAt(t + 2) !== 47)
    return !1;
  const n = e.pending.match(Ma);
  if (!n)
    return !1;
  const o = n[1], i = e.md.linkify.matchAtStart(e.src.slice(t - o.length));
  if (!i)
    return !1;
  let c = i.url;
  if (c.length <= o.length)
    return !1;
  c = c.replace(/\*+$/, "");
  const s = e.md.normalizeLink(c);
  if (!e.md.validateLink(s))
    return !1;
  if (!u) {
    e.pending = e.pending.slice(0, -o.length);
    const a = e.push("link_open", "a", 1);
    a.attrs = [["href", s]], a.markup = "linkify", a.info = "auto";
    const l = e.push("text", "", 0);
    l.content = e.md.normalizeLinkText(c);
    const d = e.push("link_close", "a", -1);
    d.markup = "linkify", d.info = "auto";
  }
  return e.pos += c.length - o.length, !0;
}
function za(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 10)
    return !1;
  const r = e.pending.length - 1, n = e.posMax;
  if (!u)
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
  for (t++; t < n && X(e.src.charCodeAt(t)); )
    t++;
  return e.pos = t, !0;
}
const tn = [];
for (let e = 0; e < 256; e++)
  tn.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  tn[e.charCodeAt(0)] = 1;
});
function Pa(e, u) {
  let t = e.pos;
  const r = e.posMax;
  if (e.src.charCodeAt(t) !== 92 || (t++, t >= r))
    return !1;
  let n = e.src.charCodeAt(t);
  if (n === 10) {
    for (u || e.push("hardbreak", "br", 0), t++; t < r && (n = e.src.charCodeAt(t), !!X(n)); )
      t++;
    return e.pos = t, !0;
  }
  let o = e.src[t];
  if (n >= 55296 && n <= 56319 && t + 1 < r) {
    const c = e.src.charCodeAt(t + 1);
    c >= 56320 && c <= 57343 && (o += e.src[t + 1], t++);
  }
  const i = "\\" + o;
  if (!u) {
    const c = e.push("text_special", "", 0);
    n < 256 && tn[n] !== 0 ? c.content = o : c.content = i, c.markup = i, c.info = "escape";
  }
  return e.pos = t + 1, !0;
}
function La(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 96)
    return !1;
  const n = t;
  t++;
  const o = e.posMax;
  for (; t < o && e.src.charCodeAt(t) === 96; )
    t++;
  const i = e.src.slice(n, t), c = i.length;
  if (e.backticksScanned && (e.backticks[c] || 0) <= n)
    return u || (e.pending += i), e.pos += c, !0;
  let s = t, a;
  for (; (a = e.src.indexOf("`", s)) !== -1; ) {
    for (s = a + 1; s < o && e.src.charCodeAt(s) === 96; )
      s++;
    const l = s - a;
    if (l === c) {
      if (!u) {
        const d = e.push("code_inline", "code", 0);
        d.markup = i, d.content = e.src.slice(t, a).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = s, !0;
    }
    e.backticks[l] = a;
  }
  return e.backticksScanned = !0, u || (e.pending += i), e.pos += c, !0;
}
function Na(e, u) {
  const t = e.pos, r = e.src.charCodeAt(t);
  if (u || r !== 126)
    return !1;
  const n = e.scanDelims(e.pos, !0);
  let o = n.length;
  const i = String.fromCharCode(r);
  if (o < 2)
    return !1;
  let c;
  o % 2 && (c = e.push("text", "", 0), c.content = i, o--);
  for (let s = 0; s < o; s += 2)
    c = e.push("text", "", 0), c.content = i + i, e.delimiters.push({
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
function u0(e, u) {
  let t;
  const r = [], n = u.length;
  for (let o = 0; o < n; o++) {
    const i = u[o];
    if (i.marker !== 126 || i.end === -1)
      continue;
    const c = u[i.end];
    t = e.tokens[i.token], t.type = "s_open", t.tag = "s", t.nesting = 1, t.markup = "~~", t.content = "", t = e.tokens[c.token], t.type = "s_close", t.tag = "s", t.nesting = -1, t.markup = "~~", t.content = "", e.tokens[c.token - 1].type === "text" && e.tokens[c.token - 1].content === "~" && r.push(c.token - 1);
  }
  for (; r.length; ) {
    const o = r.pop();
    let i = o + 1;
    for (; i < e.tokens.length && e.tokens[i].type === "s_close"; )
      i++;
    i--, o !== i && (t = e.tokens[i], e.tokens[i] = e.tokens[o], e.tokens[o] = t);
  }
}
function Ba(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  u0(e, e.delimiters);
  for (let r = 0; r < t; r++)
    u[r] && u[r].delimiters && u0(e, u[r].delimiters);
}
const xo = {
  tokenize: Na,
  postProcess: Ba
};
function qa(e, u) {
  const t = e.pos, r = e.src.charCodeAt(t);
  if (u || r !== 95 && r !== 42)
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
function t0(e, u) {
  const t = u.length;
  for (let r = t - 1; r >= 0; r--) {
    const n = u[r];
    if (n.marker !== 95 && n.marker !== 42 || n.end === -1)
      continue;
    const o = u[n.end], i = r > 0 && u[r - 1].end === n.end + 1 && // check that first two markers match and adjacent
    u[r - 1].marker === n.marker && u[r - 1].token === n.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    u[n.end + 1].token === o.token + 1, c = String.fromCharCode(n.marker), s = e.tokens[n.token];
    s.type = i ? "strong_open" : "em_open", s.tag = i ? "strong" : "em", s.nesting = 1, s.markup = i ? c + c : c, s.content = "";
    const a = e.tokens[o.token];
    a.type = i ? "strong_close" : "em_close", a.tag = i ? "strong" : "em", a.nesting = -1, a.markup = i ? c + c : c, a.content = "", i && (e.tokens[u[r - 1].token].content = "", e.tokens[u[n.end + 1].token].content = "", r--);
  }
}
function Ha(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  t0(e, e.delimiters);
  for (let r = 0; r < t; r++)
    u[r] && u[r].delimiters && t0(e, u[r].delimiters);
}
const go = {
  tokenize: qa,
  postProcess: Ha
};
function ja(e, u) {
  let t, r, n, o, i = "", c = "", s = e.pos, a = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, d = e.posMax, m = e.pos + 1, _ = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (_ < 0)
    return !1;
  let b = _ + 1;
  if (b < d && e.src.charCodeAt(b) === 40) {
    for (a = !1, b++; b < d && (t = e.src.charCodeAt(b), !(!X(t) && t !== 10)); b++)
      ;
    if (b >= d)
      return !1;
    if (s = b, n = e.md.helpers.parseLinkDestination(e.src, b, e.posMax), n.ok) {
      for (i = e.md.normalizeLink(n.str), e.md.validateLink(i) ? b = n.pos : i = "", s = b; b < d && (t = e.src.charCodeAt(b), !(!X(t) && t !== 10)); b++)
        ;
      if (n = e.md.helpers.parseLinkTitle(e.src, b, e.posMax), b < d && s !== b && n.ok)
        for (c = n.str, b = n.pos; b < d && (t = e.src.charCodeAt(b), !(!X(t) && t !== 10)); b++)
          ;
    }
    (b >= d || e.src.charCodeAt(b) !== 41) && (a = !0), b++;
  }
  if (a) {
    if (typeof e.env.references > "u")
      return !1;
    if (b < d && e.src.charCodeAt(b) === 91 ? (s = b + 1, b = e.md.helpers.parseLinkLabel(e, b), b >= 0 ? r = e.src.slice(s, b++) : b = _ + 1) : b = _ + 1, r || (r = e.src.slice(m, _)), o = e.env.references[Wt(r)], !o)
      return e.pos = l, !1;
    i = o.href, c = o.title;
  }
  if (!u) {
    e.pos = m, e.posMax = _;
    const S = e.push("link_open", "a", 1), z = [["href", i]];
    S.attrs = z, c && z.push(["title", c]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = b, e.posMax = d, !0;
}
function Ua(e, u) {
  let t, r, n, o, i, c, s, a, l = "";
  const d = e.pos, m = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const _ = e.pos + 2, b = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (b < 0)
    return !1;
  if (o = b + 1, o < m && e.src.charCodeAt(o) === 40) {
    for (o++; o < m && (t = e.src.charCodeAt(o), !(!X(t) && t !== 10)); o++)
      ;
    if (o >= m)
      return !1;
    for (a = o, c = e.md.helpers.parseLinkDestination(e.src, o, e.posMax), c.ok && (l = e.md.normalizeLink(c.str), e.md.validateLink(l) ? o = c.pos : l = ""), a = o; o < m && (t = e.src.charCodeAt(o), !(!X(t) && t !== 10)); o++)
      ;
    if (c = e.md.helpers.parseLinkTitle(e.src, o, e.posMax), o < m && a !== o && c.ok)
      for (s = c.str, o = c.pos; o < m && (t = e.src.charCodeAt(o), !(!X(t) && t !== 10)); o++)
        ;
    else
      s = "";
    if (o >= m || e.src.charCodeAt(o) !== 41)
      return e.pos = d, !1;
    o++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (o < m && e.src.charCodeAt(o) === 91 ? (a = o + 1, o = e.md.helpers.parseLinkLabel(e, o), o >= 0 ? n = e.src.slice(a, o++) : o = b + 1) : o = b + 1, n || (n = e.src.slice(_, b)), i = e.env.references[Wt(n)], !i)
      return e.pos = d, !1;
    l = i.href, s = i.title;
  }
  if (!u) {
    r = e.src.slice(_, b);
    const S = [];
    e.md.inline.parse(
      r,
      e.md,
      e.env,
      S
    );
    const z = e.push("image", "img", 0), N = [["src", l], ["alt", ""]];
    z.attrs = N, z.children = S, z.content = r, s && N.push(["title", s]);
  }
  return e.pos = o, e.posMax = m, !0;
}
const Va = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, $a = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function Za(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 60)
    return !1;
  const r = e.pos, n = e.posMax;
  for (; ; ) {
    if (++t >= n)
      return !1;
    const i = e.src.charCodeAt(t);
    if (i === 60)
      return !1;
    if (i === 62)
      break;
  }
  const o = e.src.slice(r + 1, t);
  if ($a.test(o)) {
    const i = e.md.normalizeLink(o);
    if (!e.md.validateLink(i))
      return !1;
    if (!u) {
      const c = e.push("link_open", "a", 1);
      c.attrs = [["href", i]], c.markup = "autolink", c.info = "auto";
      const s = e.push("text", "", 0);
      s.content = e.md.normalizeLinkText(o);
      const a = e.push("link_close", "a", -1);
      a.markup = "autolink", a.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  if (Va.test(o)) {
    const i = e.md.normalizeLink("mailto:" + o);
    if (!e.md.validateLink(i))
      return !1;
    if (!u) {
      const c = e.push("link_open", "a", 1);
      c.attrs = [["href", i]], c.markup = "autolink", c.info = "auto";
      const s = e.push("text", "", 0);
      s.content = e.md.normalizeLinkText(o);
      const a = e.push("link_close", "a", -1);
      a.markup = "autolink", a.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  return !1;
}
function Wa(e) {
  return /^<a[>\s]/i.test(e);
}
function Ga(e) {
  return /^<\/a\s*>/i.test(e);
}
function Ka(e) {
  const u = e | 32;
  return u >= 97 && u <= 122;
}
function Ya(e, u) {
  if (!e.md.options.html)
    return !1;
  const t = e.posMax, r = e.pos;
  if (e.src.charCodeAt(r) !== 60 || r + 2 >= t)
    return !1;
  const n = e.src.charCodeAt(r + 1);
  if (n !== 33 && n !== 63 && n !== 47 && !Ka(n))
    return !1;
  const o = e.src.slice(r).match(Ea);
  if (!o)
    return !1;
  if (!u) {
    const i = e.push("html_inline", "", 0);
    i.content = o[0], Wa(i.content) && e.linkLevel++, Ga(i.content) && e.linkLevel--;
  }
  return e.pos += o[0].length, !0;
}
const Ja = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, Xa = /^&([a-z][a-z0-9]{1,31});/i;
function Qa(e, u) {
  const t = e.pos, r = e.posMax;
  if (e.src.charCodeAt(t) !== 38 || t + 1 >= r)
    return !1;
  if (e.src.charCodeAt(t + 1) === 35) {
    const o = e.src.slice(t).match(Ja);
    if (o) {
      if (!u) {
        const i = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), c = e.push("text_special", "", 0);
        c.content = en(i) ? Mt(i) : Mt(65533), c.markup = o[0], c.info = "entity";
      }
      return e.pos += o[0].length, !0;
    }
  } else {
    const o = e.src.slice(t).match(Xa);
    if (o) {
      const i = lo(o[0]);
      if (i !== o[0]) {
        if (!u) {
          const c = e.push("text_special", "", 0);
          c.content = i, c.markup = o[0], c.info = "entity";
        }
        return e.pos += o[0].length, !0;
      }
    }
  }
  return !1;
}
function r0(e) {
  const u = {}, t = e.length;
  if (!t)
    return;
  let r = 0, n = -2;
  const o = [];
  for (let i = 0; i < t; i++) {
    const c = e[i];
    if (o.push(0), (e[r].marker !== c.marker || n !== c.token - 1) && (r = i), n = c.token, c.length = c.length || 0, !c.close)
      continue;
    u.hasOwnProperty(c.marker) || (u[c.marker] = [-1, -1, -1, -1, -1, -1]);
    const s = u[c.marker][(c.open ? 3 : 0) + c.length % 3];
    let a = r - o[r] - 1, l = a;
    for (; a > s; a -= o[a] + 1) {
      const d = e[a];
      if (d.marker === c.marker && d.open && d.end < 0) {
        let m = !1;
        if ((d.close || c.open) && (d.length + c.length) % 3 === 0 && (d.length % 3 !== 0 || c.length % 3 !== 0) && (m = !0), !m) {
          const _ = a > 0 && !e[a - 1].open ? o[a - 1] + 1 : 0;
          o[i] = i - a + _, o[a] = _, c.open = !1, d.end = i, d.close = !1, l = -1, n = -2;
          break;
        }
      }
    }
    l !== -1 && (u[c.marker][(c.open ? 3 : 0) + (c.length || 0) % 3] = l);
  }
}
function el(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  r0(e.delimiters);
  for (let r = 0; r < t; r++)
    u[r] && u[r].delimiters && r0(u[r].delimiters);
}
function ul(e) {
  let u, t, r = 0;
  const n = e.tokens, o = e.tokens.length;
  for (u = t = 0; u < o; u++)
    n[u].nesting < 0 && r--, n[u].level = r, n[u].nesting > 0 && r++, n[u].type === "text" && u + 1 < o && n[u + 1].type === "text" ? n[u + 1].content = n[u].content + n[u + 1].content : (u !== t && (n[t] = n[u]), t++);
  u !== t && (n.length = t);
}
const ar = [
  ["text", Ia],
  ["linkify", Oa],
  ["newline", za],
  ["escape", Pa],
  ["backticks", La],
  ["strikethrough", xo.tokenize],
  ["emphasis", go.tokenize],
  ["link", ja],
  ["image", Ua],
  ["autolink", Za],
  ["html_inline", Ya],
  ["entity", Qa]
], lr = [
  ["balance_pairs", el],
  ["strikethrough", xo.postProcess],
  ["emphasis", go.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", ul]
];
function lt() {
  this.ruler = new ge();
  for (let e = 0; e < ar.length; e++)
    this.ruler.push(ar[e][0], ar[e][1]);
  this.ruler2 = new ge();
  for (let e = 0; e < lr.length; e++)
    this.ruler2.push(lr[e][0], lr[e][1]);
}
lt.prototype.skipToken = function(e) {
  const u = e.pos, t = this.ruler.getRules(""), r = t.length, n = e.md.options.maxNesting, o = e.cache;
  if (typeof o[u] < "u") {
    e.pos = o[u];
    return;
  }
  let i = !1;
  if (e.level < n) {
    for (let c = 0; c < r; c++)
      if (e.level++, i = t[c](e, !0), e.level--, i) {
        if (u >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  i || e.pos++, o[u] = e.pos;
};
lt.prototype.tokenize = function(e) {
  const u = this.ruler.getRules(""), t = u.length, r = e.posMax, n = e.md.options.maxNesting;
  for (; e.pos < r; ) {
    const o = e.pos;
    let i = !1;
    if (e.level < n) {
      for (let c = 0; c < t; c++)
        if (i = u[c](e, !1), i) {
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
lt.prototype.parse = function(e, u, t, r) {
  const n = new this.State(e, u, t, r);
  this.tokenize(n);
  const o = this.ruler2.getRules(""), i = o.length;
  for (let c = 0; c < i; c++)
    o[c](n);
};
lt.prototype.State = at;
function tl(e) {
  const u = {};
  e = e || {}, u.src_Any = io.source, u.src_Cc = co.source, u.src_Z = so.source, u.src_P = Xr.source, u.src_ZPCc = [u.src_Z, u.src_P, u.src_Cc].join("|"), u.src_ZCc = [u.src_Z, u.src_Cc].join("|");
  const t = "[><｜]";
  return u.src_pseudo_letter = "(?:(?!" + t + "|" + u.src_ZPCc + ")" + u.src_Any + ")", u.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", u.src_auth = "(?:(?:(?!" + u.src_ZCc + "|[@/\\[\\]()]).)+@)?", u.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", u.src_host_terminator = "(?=$|" + t + "|" + u.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + u.src_ZPCc + "))", u.src_path = "(?:[/?#](?:(?!" + u.src_ZCc + "|" + t + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + u.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + u.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + u.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + u.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + u.src_ZCc + "|[']).)+\\'|\\'(?=" + u.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + u.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + u.src_ZCc + "|$)|;(?!" + u.src_ZCc + "|$)|\\!+(?!" + u.src_ZCc + "|[!]|$)|\\?(?!" + u.src_ZCc + "|[?]|$))+|\\/)?", u.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', u.src_xn = "xn--[a-z0-9\\-]{1,59}", u.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + u.src_xn + "|" + u.src_pseudo_letter + "{1,63})", u.src_domain = "(?:" + u.src_xn + "|(?:" + u.src_pseudo_letter + ")|(?:" + u.src_pseudo_letter + "(?:-|" + u.src_pseudo_letter + "){0,61}" + u.src_pseudo_letter + "))", u.src_host = "(?:(?:(?:(?:" + u.src_domain + ")\\.)*" + u.src_domain + "))", u.tpl_host_fuzzy = "(?:" + u.src_ip4 + "|(?:(?:(?:" + u.src_domain + ")\\.)+(?:%TLDS%)))", u.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + u.src_domain + ")\\.)+(?:%TLDS%))", u.src_host_strict = u.src_host + u.src_host_terminator, u.tpl_host_fuzzy_strict = u.tpl_host_fuzzy + u.src_host_terminator, u.src_host_port_strict = u.src_host + u.src_port + u.src_host_terminator, u.tpl_host_port_fuzzy_strict = u.tpl_host_fuzzy + u.src_port + u.src_host_terminator, u.tpl_host_port_no_ip_fuzzy_strict = u.tpl_host_no_ip_fuzzy + u.src_port + u.src_host_terminator, u.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + u.src_ZPCc + "|>|$))", u.tpl_email_fuzzy = "(^|" + t + '|"|\\(|' + u.src_ZCc + ")(" + u.src_email_name + "@" + u.tpl_host_fuzzy_strict + ")", u.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + u.src_ZPCc + "))((?![$+<=>^`|｜])" + u.tpl_host_port_fuzzy_strict + u.src_path + ")", u.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + u.src_ZPCc + "))((?![$+<=>^`|｜])" + u.tpl_host_port_no_ip_fuzzy_strict + u.src_path + ")", u;
}
function Dr(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    t && Object.keys(t).forEach(function(r) {
      e[r] = t[r];
    });
  }), e;
}
function Kt(e) {
  return Object.prototype.toString.call(e);
}
function rl(e) {
  return Kt(e) === "[object String]";
}
function nl(e) {
  return Kt(e) === "[object Object]";
}
function ol(e) {
  return Kt(e) === "[object RegExp]";
}
function n0(e) {
  return Kt(e) === "[object Function]";
}
function il(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const ko = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function cl(e) {
  return Object.keys(e || {}).reduce(function(u, t) {
    return u || ko.hasOwnProperty(t);
  }, !1);
}
const sl = {
  "http:": {
    validate: function(e, u, t) {
      const r = e.slice(u);
      return t.re.http || (t.re.http = new RegExp(
        "^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,
        "i"
      )), t.re.http.test(r) ? r.match(t.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, u, t) {
      const r = e.slice(u);
      return t.re.no_http || (t.re.no_http = new RegExp(
        "^" + t.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,
        "i"
      )), t.re.no_http.test(r) ? u >= 3 && e[u - 3] === ":" || u >= 3 && e[u - 3] === "/" ? 0 : r.match(t.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, u, t) {
      const r = e.slice(u);
      return t.re.mailto || (t.re.mailto = new RegExp(
        "^" + t.re.src_email_name + "@" + t.re.src_host_strict,
        "i"
      )), t.re.mailto.test(r) ? r.match(t.re.mailto)[0].length : 0;
    }
  }
}, al = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", ll = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function fl(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function dl(e) {
  return function(u, t) {
    const r = u.slice(t);
    return e.test(r) ? r.match(e)[0].length : 0;
  };
}
function o0() {
  return function(e, u) {
    u.normalize(e);
  };
}
function Ot(e) {
  const u = e.re = tl(e.__opts__), t = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || t.push(al), t.push(u.src_xn), u.src_tlds = t.join("|");
  function r(c) {
    return c.replace("%TLDS%", u.src_tlds);
  }
  u.email_fuzzy = RegExp(r(u.tpl_email_fuzzy), "i"), u.link_fuzzy = RegExp(r(u.tpl_link_fuzzy), "i"), u.link_no_ip_fuzzy = RegExp(r(u.tpl_link_no_ip_fuzzy), "i"), u.host_fuzzy_test = RegExp(r(u.tpl_host_fuzzy_test), "i");
  const n = [];
  e.__compiled__ = {};
  function o(c, s) {
    throw new Error('(LinkifyIt) Invalid schema "' + c + '": ' + s);
  }
  Object.keys(e.__schemas__).forEach(function(c) {
    const s = e.__schemas__[c];
    if (s === null)
      return;
    const a = { validate: null, link: null };
    if (e.__compiled__[c] = a, nl(s)) {
      ol(s.validate) ? a.validate = dl(s.validate) : n0(s.validate) ? a.validate = s.validate : o(c, s), n0(s.normalize) ? a.normalize = s.normalize : s.normalize ? o(c, s) : a.normalize = o0();
      return;
    }
    if (rl(s)) {
      n.push(c);
      return;
    }
    o(c, s);
  }), n.forEach(function(c) {
    e.__compiled__[e.__schemas__[c]] && (e.__compiled__[c].validate = e.__compiled__[e.__schemas__[c]].validate, e.__compiled__[c].normalize = e.__compiled__[e.__schemas__[c]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: o0() };
  const i = Object.keys(e.__compiled__).filter(function(c) {
    return c.length > 0 && e.__compiled__[c];
  }).map(il).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + u.src_ZPCc + "))(" + i + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + u.src_ZPCc + "))(" + i + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), fl(e);
}
function hl(e, u) {
  const t = e.__index__, r = e.__last_index__, n = e.__text_cache__.slice(t, r);
  this.schema = e.__schema__.toLowerCase(), this.index = t + u, this.lastIndex = r + u, this.raw = n, this.text = n, this.url = n;
}
function Sr(e, u) {
  const t = new hl(e, u);
  return e.__compiled__[t.schema].normalize(t, e), t;
}
function ve(e, u) {
  if (!(this instanceof ve))
    return new ve(e, u);
  u || cl(e) && (u = e, e = {}), this.__opts__ = Dr({}, ko, u), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Dr({}, sl, e), this.__compiled__ = {}, this.__tlds__ = ll, this.__tlds_replaced__ = !1, this.re = {}, Ot(this);
}
ve.prototype.add = function(u, t) {
  return this.__schemas__[u] = t, Ot(this), this;
};
ve.prototype.set = function(u) {
  return this.__opts__ = Dr(this.__opts__, u), this;
};
ve.prototype.test = function(u) {
  if (this.__text_cache__ = u, this.__index__ = -1, !u.length)
    return !1;
  let t, r, n, o, i, c, s, a, l;
  if (this.re.schema_test.test(u)) {
    for (s = this.re.schema_search, s.lastIndex = 0; (t = s.exec(u)) !== null; )
      if (o = this.testSchemaAt(u, t[2], s.lastIndex), o) {
        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (a = u.search(this.re.host_fuzzy_test), a >= 0 && (this.__index__ < 0 || a < this.__index__) && (r = u.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = u.indexOf("@"), l >= 0 && (n = u.match(this.re.email_fuzzy)) !== null && (i = n.index + n[1].length, c = n.index + n[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && c > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = c))), this.__index__ >= 0;
};
ve.prototype.pretest = function(u) {
  return this.re.pretest.test(u);
};
ve.prototype.testSchemaAt = function(u, t, r) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(u, r, this) : 0;
};
ve.prototype.match = function(u) {
  const t = [];
  let r = 0;
  this.__index__ >= 0 && this.__text_cache__ === u && (t.push(Sr(this, r)), r = this.__last_index__);
  let n = r ? u.slice(r) : u;
  for (; this.test(n); )
    t.push(Sr(this, r)), n = n.slice(this.__last_index__), r += this.__last_index__;
  return t.length ? t : null;
};
ve.prototype.matchAtStart = function(u) {
  if (this.__text_cache__ = u, this.__index__ = -1, !u.length)
    return null;
  const t = this.re.schema_at_start.exec(u);
  if (!t)
    return null;
  const r = this.testSchemaAt(u, t[2], t[0].length);
  return r ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r, Sr(this, 0)) : null;
};
ve.prototype.tlds = function(u, t) {
  return u = Array.isArray(u) ? u : [u], t ? (this.__tlds__ = this.__tlds__.concat(u).sort().filter(function(r, n, o) {
    return r !== o[n - 1];
  }).reverse(), Ot(this), this) : (this.__tlds__ = u.slice(), this.__tlds_replaced__ = !0, Ot(this), this);
};
ve.prototype.normalize = function(u) {
  u.schema || (u.url = "http://" + u.url), u.schema === "mailto:" && !/^mailto:/i.test(u.url) && (u.url = "mailto:" + u.url);
};
ve.prototype.onCompile = function() {
};
const Pu = 2147483647, Ue = 36, rn = 1, it = 26, pl = 38, bl = 700, wo = 72, yo = 128, vo = "-", ml = /^xn--/, _l = /[^\0-\x7F]/, xl = /[\x2E\u3002\uFF0E\uFF61]/g, gl = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, fr = Ue - rn, Ve = Math.floor, dr = String.fromCharCode;
function cu(e) {
  throw new RangeError(gl[e]);
}
function kl(e, u) {
  const t = [];
  let r = e.length;
  for (; r--; )
    t[r] = u(e[r]);
  return t;
}
function Co(e, u) {
  const t = e.split("@");
  let r = "";
  t.length > 1 && (r = t[0] + "@", e = t[1]), e = e.replace(xl, ".");
  const n = e.split("."), o = kl(n, u).join(".");
  return r + o;
}
function Eo(e) {
  const u = [];
  let t = 0;
  const r = e.length;
  for (; t < r; ) {
    const n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      const o = e.charCodeAt(t++);
      (o & 64512) == 56320 ? u.push(((n & 1023) << 10) + (o & 1023) + 65536) : (u.push(n), t--);
    } else
      u.push(n);
  }
  return u;
}
const wl = (e) => String.fromCodePoint(...e), yl = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : Ue;
}, i0 = function(e, u) {
  return e + 22 + 75 * (e < 26) - ((u != 0) << 5);
}, Ao = function(e, u, t) {
  let r = 0;
  for (e = t ? Ve(e / bl) : e >> 1, e += Ve(e / u); e > fr * it >> 1; r += Ue)
    e = Ve(e / fr);
  return Ve(r + (fr + 1) * e / (e + pl));
}, Do = function(e) {
  const u = [], t = e.length;
  let r = 0, n = yo, o = wo, i = e.lastIndexOf(vo);
  i < 0 && (i = 0);
  for (let c = 0; c < i; ++c)
    e.charCodeAt(c) >= 128 && cu("not-basic"), u.push(e.charCodeAt(c));
  for (let c = i > 0 ? i + 1 : 0; c < t; ) {
    const s = r;
    for (let l = 1, d = Ue; ; d += Ue) {
      c >= t && cu("invalid-input");
      const m = yl(e.charCodeAt(c++));
      m >= Ue && cu("invalid-input"), m > Ve((Pu - r) / l) && cu("overflow"), r += m * l;
      const _ = d <= o ? rn : d >= o + it ? it : d - o;
      if (m < _)
        break;
      const b = Ue - _;
      l > Ve(Pu / b) && cu("overflow"), l *= b;
    }
    const a = u.length + 1;
    o = Ao(r - s, a, s == 0), Ve(r / a) > Pu - n && cu("overflow"), n += Ve(r / a), r %= a, u.splice(r++, 0, n);
  }
  return String.fromCodePoint(...u);
}, So = function(e) {
  const u = [];
  e = Eo(e);
  const t = e.length;
  let r = yo, n = 0, o = wo;
  for (const s of e)
    s < 128 && u.push(dr(s));
  const i = u.length;
  let c = i;
  for (i && u.push(vo); c < t; ) {
    let s = Pu;
    for (const l of e)
      l >= r && l < s && (s = l);
    const a = c + 1;
    s - r > Ve((Pu - n) / a) && cu("overflow"), n += (s - r) * a, r = s;
    for (const l of e)
      if (l < r && ++n > Pu && cu("overflow"), l === r) {
        let d = n;
        for (let m = Ue; ; m += Ue) {
          const _ = m <= o ? rn : m >= o + it ? it : m - o;
          if (d < _)
            break;
          const b = d - _, S = Ue - _;
          u.push(
            dr(i0(_ + b % S, 0))
          ), d = Ve(b / S);
        }
        u.push(dr(i0(d, 0))), o = Ao(n, a, c === i), n = 0, ++c;
      }
    ++n, ++r;
  }
  return u.join("");
}, vl = function(e) {
  return Co(e, function(u) {
    return ml.test(u) ? Do(u.slice(4).toLowerCase()) : u;
  });
}, Cl = function(e) {
  return Co(e, function(u) {
    return _l.test(u) ? "xn--" + So(u) : u;
  });
}, Fo = {
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
    decode: Eo,
    encode: wl
  },
  decode: Do,
  encode: So,
  toASCII: Cl,
  toUnicode: vl
}, El = {
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
}, Al = {
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
}, Dl = {
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
}, Sl = {
  default: El,
  zero: Al,
  commonmark: Dl
}, Fl = /^(vbscript|javascript|file|data):/, Tl = /^data:image\/(gif|png|jpeg|webp);/;
function Rl(e) {
  const u = e.trim().toLowerCase();
  return Fl.test(u) ? Tl.test(u) : !0;
}
const To = ["http:", "https:", "mailto:"];
function Il(e) {
  const u = Jr(e, !0);
  if (u.hostname && (!u.protocol || To.indexOf(u.protocol) >= 0))
    try {
      u.hostname = Fo.toASCII(u.hostname);
    } catch {
    }
  return st(Yr(u));
}
function Ml(e) {
  const u = Jr(e, !0);
  if (u.hostname && (!u.protocol || To.indexOf(u.protocol) >= 0))
    try {
      u.hostname = Fo.toUnicode(u.hostname);
    } catch {
    }
  return Bu(Yr(u), Bu.defaultChars + "%");
}
function Fe(e, u) {
  if (!(this instanceof Fe))
    return new Fe(e, u);
  u || Qr(e) || (u = e || {}, e = "default"), this.inline = new lt(), this.block = new Gt(), this.core = new un(), this.renderer = new Hu(), this.linkify = new ve(), this.validateLink = Rl, this.normalizeLink = Il, this.normalizeLinkText = Ml, this.utils = Ps, this.helpers = Zt({}, qs), this.options = {}, this.configure(e), u && this.set(u);
}
Fe.prototype.set = function(e) {
  return Zt(this.options, e), this;
};
Fe.prototype.configure = function(e) {
  const u = this;
  if (Qr(e)) {
    const t = e;
    if (e = Sl[t], !e)
      throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && u.set(e.options), e.components && Object.keys(e.components).forEach(function(t) {
    e.components[t].rules && u[t].ruler.enableOnly(e.components[t].rules), e.components[t].rules2 && u[t].ruler2.enableOnly(e.components[t].rules2);
  }), this;
};
Fe.prototype.enable = function(e, u) {
  let t = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(n) {
    t = t.concat(this[n].ruler.enable(e, !0));
  }, this), t = t.concat(this.inline.ruler2.enable(e, !0));
  const r = e.filter(function(n) {
    return t.indexOf(n) < 0;
  });
  if (r.length && !u)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
  return this;
};
Fe.prototype.disable = function(e, u) {
  let t = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(n) {
    t = t.concat(this[n].ruler.disable(e, !0));
  }, this), t = t.concat(this.inline.ruler2.disable(e, !0));
  const r = e.filter(function(n) {
    return t.indexOf(n) < 0;
  });
  if (r.length && !u)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
  return this;
};
Fe.prototype.use = function(e) {
  const u = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, u), this;
};
Fe.prototype.parse = function(e, u) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const t = new this.core.State(e, this, u);
  return this.core.process(t), t.tokens;
};
Fe.prototype.render = function(e, u) {
  return u = u || {}, this.renderer.render(this.parse(e, u), this.options, u);
};
Fe.prototype.parseInline = function(e, u) {
  const t = new this.core.State(e, this, u);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
Fe.prototype.renderInline = function(e, u) {
  return u = u || {}, this.renderer.render(this.parseInline(e, u), this.options, u);
};
const mu = (e, u) => {
  const t = e.__vccOpts || e;
  for (const [r, n] of u)
    t[r] = n;
  return t;
}, Ol = {
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
    const u = Xe(e.open);
    return {
      isOpen: u,
      toggle: () => {
        u.value = !u.value;
      }
    };
  }
}, zl = { class: "flex items-center gap-4 py-4 px-2 cursor-pointer justify-between bg-gray-100" }, Pl = { class: "text-xl font-semibold flex items-center gap-2" }, Ll = {
  key: 0,
  class: "swap swap-flip"
}, Nl = ["checked"], Bl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "m8.25 4.5 7.5 7.5-7.5 7.5"
}, null, -1), ql = [
  Bl
], Hl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "m19.5 8.25-7.5 7.5-7.5-7.5"
}, null, -1), jl = [
  Hl
], Ul = { class: "collapse-content p-0 m-0" };
function Vl(e, u, t, r, n, o) {
  return T(), L("div", {
    class: au([[r.isOpen ? "collapse-open" : ""], "collapse h-fit p-0 m-0 rounded-none shadow-md"])
  }, [
    p("div", {
      onClick: u[2] || (u[2] = (...i) => r.toggle && r.toggle(...i)),
      class: "collapse-title text-lg h-auto min-h-0 p-0 m-0"
    }, [
      p("div", zl, [
        p("span", Pl, [
          wn(e.$slots, "icon"),
          p("span", null, O(t.title), 1)
        ]),
        t.hideArrow ? H("", !0) : (T(), L("label", Ll, [
          p("input", {
            type: "checkbox",
            checked: r.isOpen
          }, null, 8, Nl),
          (T(), L("svg", {
            onClick: u[0] || (u[0] = (...i) => r.toggle && r.toggle(...i)),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "swap-off w-6 h-6"
          }, ql)),
          (T(), L("svg", {
            onClick: u[1] || (u[1] = (...i) => r.toggle && r.toggle(...i)),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "swap-on w-6 h-6"
          }, jl))
        ]))
      ])
    ]),
    p("div", Ul, [
      wn(e.$slots, "default")
    ])
  ], 2);
}
const ft = /* @__PURE__ */ mu(Ol, [["render", Vl]]), $l = {
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
    const e = new Fe({
      linkify: !0
    });
    return e.linkify.set({
      fuzzyEmail: !1
    }), {
      md: e
    };
  },
  components: { Collapse: ft }
}, Zl = /* @__PURE__ */ p("svg", {
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
], -1), Wl = ["innerHTML"], Gl = {
  key: 1,
  class: "grid break-words w-full gap-4"
}, Kl = { class: "text-xl font-semibold" }, Yl = ["innerHTML"];
function Jl(e, u, t, r, n, o) {
  const i = Re("Collapse");
  return t.isCollapsible ? (T(), me(i, {
    key: 0,
    title: t.title,
    open: t.open
  }, {
    icon: eu(() => [
      Zl
    ]),
    default: eu(() => [
      p("div", {
        class: "prose p-2",
        innerHTML: r.md.render(t.text)
      }, null, 8, Wl)
    ]),
    _: 1
  }, 8, ["title", "open"])) : (T(), L("div", Gl, [
    p("span", Kl, O(t.title), 1),
    p("div", {
      style: { "word-break": "break-word" },
      innerHTML: r.md.render(t.text)
    }, null, 8, Yl)
  ]));
}
const Xl = /* @__PURE__ */ mu($l, [["render", Jl]]), Ql = {
  name: "OpeningHours",
  props: {
    openingHours: {
      type: Array,
      required: !0,
      default: []
    }
  },
  setup(e) {
    const { openingHours: u } = e, t = Xe(null);
    function r(n) {
      return n.open ? `${n.from} - ${n.to}` : "Geschlossen";
    }
    return u.length === 7 && (t.value = [
      {
        day: "Montag",
        openingHours: r(u[1].opening),
        pickupTime: r(u[1].pickup),
        returnTime: r(u[1].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 1
      },
      {
        day: "Dienstag",
        openingHours: r(u[2].opening),
        pickupTime: r(u[2].pickup),
        returnTime: r(u[2].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 2
      },
      {
        day: "Mittwoch",
        openingHours: r(u[3].opening),
        pickupTime: r(u[3].pickup),
        returnTime: r(u[3].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 3
      },
      {
        day: "Donnerstag",
        openingHours: r(u[4].opening),
        pickupTime: r(u[4].pickup),
        returnTime: r(u[4].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 4
      },
      {
        day: "Freitag",
        openingHours: r(u[5].opening),
        pickupTime: r(u[5].pickup),
        returnTime: r(u[5].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 5
      },
      {
        day: "Samstag",
        openingHours: r(u[6].opening),
        pickupTime: r(u[6].pickup),
        returnTime: r(u[6].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 6
      },
      {
        day: "Sonntag",
        openingHours: r(u[0].opening),
        pickupTime: r(u[0].pickup),
        returnTime: r(u[0].return),
        isToday: (/* @__PURE__ */ new Date()).getDay() === 0
      }
    ]), {
      rows: t
    };
  },
  components: { Collapse: ft }
}, ef = /* @__PURE__ */ p("svg", {
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
], -1), uf = { class: "w-full border-collapse" }, tf = /* @__PURE__ */ p("thead", null, [
  /* @__PURE__ */ p("tr", { class: "text-left" }, [
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Wochentag"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Öffnungszeiten"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Abholzeit"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Rückgabezeit")
  ])
], -1), rf = { class: "[&>*:nth-child(odd)]:bg-gray-100" }, nf = { class: "text-left" };
function of(e, u, t, r, n, o) {
  const i = Re("Collapse");
  return T(), me(i, {
    title: "Öffnungszeiten",
    open: !0
  }, {
    icon: eu(() => [
      ef
    ]),
    default: eu(() => [
      p("table", uf, [
        tf,
        p("tbody", rf, [
          (T(!0), L(ae, null, St(r.rows, (c) => (T(), L("tr", nf, [
            p("th", {
              class: au([c.isToday ? "text-primary-blue" : "text-gray-900", "max-sm:text-lg max-sm:grid-cols-1 p-2 max-sm:grid max-sm:font-bold max-sm:text-primary-braun max-sm:before:capitalize max-sm:before:content-[attr(data-cell)]"])
            }, O(c.day), 3),
            p("th", {
              class: au([c.isToday ? "text-primary-blue" : "", "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:capitalize max-sm:before:content-[attr(data-cell)]"]),
              "data-cell": "Öffnungszeiten"
            }, O(c.openingHours), 3),
            p("th", {
              class: au([c.isToday ? "text-primary-blue" : "", "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:capitalize max-sm:before:content-[attr(data-cell)]"]),
              "data-cell": "Abholzeit"
            }, O(c.pickupTime), 3),
            p("th", {
              class: au([c.isToday ? "text-primary-blue" : "", "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:capitalize max-sm:before:content-[attr(data-cell)]"]),
              "data-cell": "Rückgabezeit"
            }, O(c.returnTime), 3)
          ]))), 256))
        ])
      ])
    ]),
    _: 1
  });
}
const cf = /* @__PURE__ */ mu(Ql, [["render", of]]), sf = {
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
    const { minDays: u, rates: t, seasons: r } = e, n = new Intl.NumberFormat("de-DE", {
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
    function c(a) {
      let l = "", d = i(a), m = { month: "short", day: "numeric" };
      return d.length > 0 && (l = new Date(d[0].from).toLocaleDateString("de-DE", m) + " - " + new Date(d[0].to).toLocaleDateString("de-DE", m)), l;
    }
    return {
      seasons_list: Gr(() => {
        let a = [];
        for (let l in t) {
          let d = {
            name: o[l],
            rate: t[l],
            minDays: u[l],
            range: c(l)
          };
          a.push(d);
        }
        return a;
      }),
      EUR: n
    };
  },
  components: { Collapse: ft }
}, af = { class: "w-full border-collapse" }, lf = /* @__PURE__ */ p("thead", null, [
  /* @__PURE__ */ p("tr", { class: "text-left" }, [
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Saison"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Zeitraum"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Mindestmietdauer"),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }, "Preis pro Nacht")
  ])
], -1), ff = { class: "[&>*:nth-child(odd)]:bg-gray-100" }, df = { class: "text-left" }, hf = {
  class: "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:content-[attr(data-cell)] font-semibold",
  "data-cell": "Saison"
}, pf = {
  class: "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:content-[attr(data-cell)]",
  "data-cell": "Zeitraum"
}, bf = {
  class: "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:content-[attr(data-cell)]",
  "data-cell": "Mindestmietdauer"
}, mf = {
  class: "max-sm:grid-cols-2 p-2 max-sm:grid max-sm:before:font-bold max-sm:before:content-[attr(data-cell)] font-semibold text-primary-blue",
  "data-cell": "Preis pro Nacht"
};
function _f(e, u, t, r, n, o) {
  const i = Re("Collapse");
  return T(), me(i, {
    title: "Preisgestaltung",
    open: !0,
    hideArrow: !0
  }, {
    default: eu(() => [
      p("table", af, [
        lf,
        p("tbody", ff, [
          (T(!0), L(ae, null, St(r.seasons_list, (c) => (T(), L("tr", df, [
            p("th", hf, O(c.name), 1),
            p("th", pf, O(c.range), 1),
            p("th", bf, "ab " + O(c.minDays) + " Nächte", 1),
            p("th", mf, O(r.EUR.format(c.rate)), 1)
          ]))), 256))
        ])
      ])
    ]),
    _: 1
  });
}
const xf = /* @__PURE__ */ mu(sf, [["render", _f]]), gf = {
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
    const u = {
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
    }, t = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/outline/night`, r = Object.keys(e.features).map((n) => {
      const o = u.itemCategories[n], c = e.features[n].map((s) => ({
        text: u[n][s]
      }));
      return {
        category: o,
        features: c
      };
    });
    return {
      outlineURL: t,
      featuresList: r
    };
  },
  components: { Collapse: ft }
}, kf = { class: "w-full" }, wf = ["src"], yf = { class: "grid sm:grid-cols-2 gap-6" }, vf = /* @__PURE__ */ p("span", { class: "w-8 h-8 flex items-center text-primary-blue" }, [
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
function Cf(e, u, t, r, n, o) {
  const i = Re("Collapse");
  return T(), L(ae, null, [
    p("div", kf, [
      p("img", {
        src: r.outlineURL,
        class: "object-contain max-w-full",
        alt: ""
      }, null, 8, wf)
    ]),
    p("div", yf, [
      (T(!0), L(ae, null, St(r.featuresList, (c) => (T(), me(i, {
        key: c.category,
        title: c.category,
        open: !1
      }, {
        default: eu(() => [
          (T(!0), L(ae, null, St(c.features, (s) => (T(), L("div", {
            key: s.text,
            class: "w-full flex items-center gap-1 p-2"
          }, [
            vf,
            p("span", null, O(s.text), 1)
          ]))), 128))
        ]),
        _: 2
      }, 1032, ["title"]))), 128))
    ])
  ], 64);
}
const Ef = /* @__PURE__ */ mu(gf, [["render", Cf]]), Af = {
  name: "TechnicalDetails",
  props: ["technicalData", "isofixSeats", "sittingPlaces"],
  setup(e) {
  },
  components: { Collapse: ft }
}, Df = /* @__PURE__ */ p("svg", {
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
], -1), Sf = { class: "w-full border-collapse" }, Ff = /* @__PURE__ */ p("thead", null, [
  /* @__PURE__ */ p("tr", { class: "text-left" }, [
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" }),
    /* @__PURE__ */ p("th", { class: "p-2 max-sm:hidden" })
  ])
], -1), Tf = { class: "[&>*:nth-child(odd)]:bg-gray-100" }, Rf = {
  key: 0,
  class: "text-left"
}, If = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Hersteller (Wohnmobilmarke)", -1), Mf = { class: "p-2 text-right" }, Of = { key: 1 }, zf = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Model", -1), Pf = { class: "p-2 text-right" }, Lf = { key: 2 }, Nf = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Hersteller (Chassis)", -1), Bf = { class: "p-2 text-right" }, qf = { key: 3 }, Hf = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Modellbezeichnung (Chassis)", -1), jf = { class: "p-2 text-right" }, Uf = { key: 4 }, Vf = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Hauptkategorie", -1), $f = { class: "p-2 text-right" }, Zf = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "ISOFIX-Sitze", -1), Wf = { class: "p-2 text-right" }, Gf = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Sitzplätze mit Gurt", -1), Kf = { class: "p-2 text-right" }, Yf = { key: 5 }, Jf = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Zulässiges Gesamtgewicht", -1), Xf = { class: "p-2 text-right" }, Qf = { key: 6 }, e1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Gewicht in fahrbereitem Zustand", -1), u1 = { class: "p-2 text-right" }, t1 = { key: 7 }, r1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Baujahr", -1), n1 = { class: "p-2 text-right" }, o1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Länge", -1), i1 = { class: "p-2 text-right" }, c1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Breite", -1), s1 = { class: "p-2 text-right" }, a1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Höhe", -1), l1 = { class: "p-2 text-right" }, f1 = { key: 8 }, d1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Motorleistung", -1), h1 = { class: "p-2 text-right" }, p1 = { key: 9 }, b1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Kraftstoff", -1), m1 = { class: "p-2 text-right capitalize" }, _1 = { key: 10 }, x1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Antriebsart", -1), g1 = { class: "p-2 text-right" }, k1 = { key: 11 }, w1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Anzahl der Gänge", -1), y1 = { class: "p-2 text-right" }, v1 = { key: 12 }, C1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Getriebe", -1), E1 = { class: "p-2 text-right" }, A1 = { key: 13 }, D1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Kraftstofftank-Kapazität", -1), S1 = { class: "p-2 text-right" }, F1 = { key: 14 }, T1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Frischwassertank", -1), R1 = { class: "p-2 text-right" }, I1 = { key: 15 }, M1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Abwassertank", -1), O1 = { class: "p-2 text-right" }, z1 = { key: 16 }, P1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Achsen", -1), L1 = { class: "p-2 text-right" }, N1 = { key: 17 }, B1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Reifen", -1), q1 = { class: "p-2 text-right" }, H1 = { key: 18 }, j1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Verbrauch pro 100 km", -1), U1 = { class: "p-2 text-right" }, V1 = { key: 19 }, $1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Schadstoffklasse", -1), Z1 = { class: "p-2 text-right uppercase" }, W1 = { key: 20 }, G1 = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Umweltplakette", -1), K1 = { class: "text-right p-2" }, Y1 = { key: 0 }, J1 = { key: 1 }, X1 = { key: 2 }, Q1 = { key: 21 }, ed = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Ladekapazität", -1), ud = { class: "p-2 text-right" }, td = { key: 22 }, rd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Maße vordere Seitensitzgruppe", -1), nd = { class: "p-2 text-right" }, od = { key: 23 }, id = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Stauklappengröße im Heck", -1), cd = { class: "p-2 text-right" }, sd = { key: 24 }, ad = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Bettumbau Sitzgruppe", -1), ld = { class: "p-2 text-right" }, fd = { key: 25 }, dd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Maße Heckbett", -1), hd = { class: "p-2 text-right" }, pd = { key: 26 }, bd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Maße Hubbett", -1), md = { class: "p-2 text-right" }, _d = { key: 27 }, xd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Maße Längsbank", -1), gd = { class: "p-2 text-right" }, kd = { key: 28 }, wd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Batteriekapazität", -1), yd = { class: "p-2 text-right" }, vd = { key: 29 }, Cd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Anhängerkupplung", -1), Ed = { class: "p-2 text-right" }, Ad = { key: 30 }, Dd = /* @__PURE__ */ p("th", { class: "p-2 text-left" }, "Kapazität Kühlschrank", -1), Sd = { class: "p-2 text-right" };
function Fd(e, u, t, r, n, o) {
  const i = Re("Collapse");
  return T(), me(i, {
    title: "Technische Angaben",
    open: !0
  }, {
    icon: eu(() => [
      Df
    ]),
    default: eu(() => {
      var c, s, a, l, d, m, _, b, S, z, N, j, C, R, A, I, K, te, Ce, Ee, Le, We, Ge, Ke, Ae, re, J, G, Ne, _u, Be, ke, ju, dt, ht, De, xu, Du, Uu, Ye, Su, Fu, f, h, x, g, k, v, D, y, E, w, F, P, M, B, V, Z, Y, ue, pe, Je, Vu, tu, $u, se, we, Zu, nn, on, cn, sn;
      return [
        p("table", Sf, [
          Ff,
          p("tbody", Tf, [
            (c = t.technicalData) != null && c.manufacturer ? (T(), L("tr", Rf, [
              If,
              p("th", Mf, O((s = t.technicalData) == null ? void 0 : s.manufacturer), 1)
            ])) : H("", !0),
            t.technicalData.model ? (T(), L("tr", Of, [
              zf,
              p("th", Pf, O(t.technicalData.model), 1)
            ])) : H("", !0),
            (a = t.technicalData) != null && a.manufacturerChassis ? (T(), L("tr", Lf, [
              Nf,
              p("th", Bf, O((l = t.technicalData) == null ? void 0 : l.manufacturerChassis), 1)
            ])) : H("", !0),
            (d = t.technicalData) != null && d.modelChassis ? (T(), L("tr", qf, [
              Hf,
              p("th", jf, O((m = t.technicalData) == null ? void 0 : m.modelChassis), 1)
            ])) : H("", !0),
            (_ = t.technicalData) != null && _.type ? (T(), L("tr", Uf, [
              Vf,
              p("th", $f, O((b = t.technicalData) == null ? void 0 : b.type), 1)
            ])) : H("", !0),
            p("tr", null, [
              Zf,
              p("th", Wf, O(t.isofixSeats ?? "-"), 1)
            ]),
            p("tr", null, [
              Gf,
              p("th", Kf, O(t.sittingPlaces), 1)
            ]),
            (S = t.technicalData) != null && S.grossVehicleWeight ? (T(), L("tr", Yf, [
              Jf,
              p("th", Xf, O(((z = t.technicalData) == null ? void 0 : z.grossVehicleWeight.split("_")[0]) === "higher" ? "über" : "bis") + " " + O((N = t.technicalData) == null ? void 0 : N.grossVehicleWeight.split("_")[1]) + " kg ", 1)
            ])) : H("", !0),
            (j = t.technicalData) != null && j.emptyWeight ? (T(), L("tr", Qf, [
              e1,
              p("th", u1, O((C = t.technicalData) == null ? void 0 : C.emptyWeight) + " kg", 1)
            ])) : H("", !0),
            (R = t.technicalData) != null && R.constructionYear ? (T(), L("tr", t1, [
              r1,
              p("th", n1, O((A = t.technicalData) == null ? void 0 : A.constructionYear), 1)
            ])) : H("", !0),
            p("tr", null, [
              o1,
              p("th", i1, O((I = t.technicalData) == null ? void 0 : I.length) + " cm", 1)
            ]),
            p("tr", null, [
              c1,
              p("th", s1, O((K = t.technicalData) == null ? void 0 : K.width) + " cm", 1)
            ]),
            p("tr", null, [
              a1,
              p("th", l1, O((te = t.technicalData) == null ? void 0 : te.height) + " cm", 1)
            ]),
            (Ce = t.technicalData) != null && Ce.power ? (T(), L("tr", f1, [
              d1,
              p("th", h1, O((Ee = t.technicalData) == null ? void 0 : Ee.power) + " PS", 1)
            ])) : H("", !0),
            (Le = t.technicalData) != null && Le.fuelType ? (T(), L("tr", p1, [
              b1,
              p("th", m1, O((We = t.technicalData) == null ? void 0 : We.fuelType), 1)
            ])) : H("", !0),
            (Ge = t.technicalData) != null && Ge.modeOfDrive ? (T(), L("tr", _1, [
              x1,
              p("th", g1, O(((Ke = t.technicalData) == null ? void 0 : Ke.modeOfDrive) === "2wheel" && "Zweirad"), 1)
            ])) : H("", !0),
            (Ae = t.technicalData) != null && Ae.numberOfGears ? (T(), L("tr", k1, [
              w1,
              p("th", y1, O((re = t.technicalData) == null ? void 0 : re.numberOfGears), 1)
            ])) : H("", !0),
            (J = t.technicalData) != null && J.transmission ? (T(), L("tr", v1, [
              C1,
              p("th", E1, O(((G = t.technicalData) == null ? void 0 : G.transmission) === "manual" ? "Manuell" : "Automatik"), 1)
            ])) : H("", !0),
            (Ne = t.technicalData) != null && Ne.fuelTankCapacity ? (T(), L("tr", A1, [
              D1,
              p("th", S1, O((_u = t.technicalData) == null ? void 0 : _u.fuelTankCapacity) + " Liter", 1)
            ])) : H("", !0),
            (Be = t.technicalData) != null && Be.freshWaterTank ? (T(), L("tr", F1, [
              T1,
              p("th", R1, O((ke = t.technicalData) == null ? void 0 : ke.freshWaterTankCapacity) + " Liter", 1)
            ])) : H("", !0),
            (ju = t.technicalData) != null && ju.wasteWaterTank ? (T(), L("tr", I1, [
              M1,
              p("th", O1, O((dt = t.technicalData) == null ? void 0 : dt.wasteWaterTankCapacity) + " Liter", 1)
            ])) : H("", !0),
            (ht = t.technicalData) != null && ht.axis ? (T(), L("tr", z1, [
              P1,
              p("th", L1, O((De = t.technicalData) == null ? void 0 : De.axis), 1)
            ])) : H("", !0),
            (xu = t.technicalData) != null && xu.tyresWidth && ((Du = t.technicalData) != null && Du.tyresRelation) && ((Uu = t.technicalData) != null && Uu.tyresType) && t.technicalData.tyresDiameter && t.technicalData.tyresSpeedIndex ? (T(), L("tr", N1, [
              B1,
              p("th", q1, O((Ye = t.technicalData) == null ? void 0 : Ye.tyresWidth) + "/" + O((Su = t.technicalData) == null ? void 0 : Su.tyresRelation) + " " + O((Fu = t.technicalData) == null ? void 0 : Fu.tyresType) + " " + O((f = t.technicalData) == null ? void 0 : f.tyresDiameter) + " " + O((h = t.technicalData) == null ? void 0 : h.tyresSpeedIndex), 1)
            ])) : H("", !0),
            (x = t.technicalData) != null && x.consumptionPer100km ? (T(), L("tr", H1, [
              j1,
              p("th", U1, O((g = t.technicalData) == null ? void 0 : g.consumptionPer100km) + " L/100km", 1)
            ])) : H("", !0),
            (k = t.technicalData) != null && k.emissionStandard ? (T(), L("tr", V1, [
              $1,
              p("th", Z1, O((v = t.technicalData) == null ? void 0 : v.emissionStandard), 1)
            ])) : H("", !0),
            (D = t.technicalData) != null && D.environmentalBadge ? (T(), L("tr", W1, [
              G1,
              p("th", K1, [
                ((y = t.technicalData) == null ? void 0 : y.environmentalBadge) === "green" ? (T(), L("span", Y1, "Grün")) : H("", !0),
                ((E = t.technicalData) == null ? void 0 : E.environmentalBadge) === "yellow" ? (T(), L("span", J1, "Gelb")) : H("", !0),
                ((w = t.technicalData) == null ? void 0 : w.environmentalBadge) === "red" ? (T(), L("span", X1, "Rot")) : H("", !0)
              ])
            ])) : H("", !0),
            (F = t.technicalData) != null && F.capacityLoading ? (T(), L("tr", Q1, [
              ed,
              p("th", ud, O((P = t.technicalData) == null ? void 0 : P.capacityLoading) + " L", 1)
            ])) : H("", !0),
            (M = t.technicalData) != null && M.sizeSittingSide ? (T(), L("tr", td, [
              rd,
              p("th", nd, O((B = t.technicalData) == null ? void 0 : B.sizeSittingSide), 1)
            ])) : H("", !0),
            (V = t.technicalData) != null && V.sizeLoadingOpening ? (T(), L("tr", od, [
              id,
              p("th", cd, O((Z = t.technicalData) == null ? void 0 : Z.sizeLoadingOpening), 1)
            ])) : H("", !0),
            (Y = t.technicalData) != null && Y.bedSize ? (T(), L("tr", sd, [
              ad,
              p("th", ld, O((ue = t.technicalData) == null ? void 0 : ue.bedSize), 1)
            ])) : H("", !0),
            (pe = t.technicalData) != null && pe.cornerBedSize ? (T(), L("tr", fd, [
              dd,
              p("th", hd, O((Je = t.technicalData) == null ? void 0 : Je.cornerBedSize), 1)
            ])) : H("", !0),
            (Vu = t.technicalData) != null && Vu.mainBedSize ? (T(), L("tr", pd, [
              bd,
              p("th", md, O((tu = t.technicalData) == null ? void 0 : tu.mainBedSize), 1)
            ])) : H("", !0),
            ($u = t.technicalData) != null && $u.bankSize ? (T(), L("tr", _d, [
              xd,
              p("th", gd, O((se = t.technicalData) == null ? void 0 : se.bankSize), 1)
            ])) : H("", !0),
            (we = t.technicalData) != null && we.batteryCapacity ? (T(), L("tr", kd, [
              wd,
              p("th", yd, O((Zu = t.technicalData) == null ? void 0 : Zu.batteryCapacity) + " Ah", 1)
            ])) : H("", !0),
            (nn = t.technicalData) != null && nn.towingCapacity ? (T(), L("tr", vd, [
              Cd,
              p("th", Ed, O((on = t.technicalData) == null ? void 0 : on.towingCapacity) + " kg", 1)
            ])) : H("", !0),
            (cn = t.technicalData) != null && cn.fridgeVolume ? (T(), L("tr", Ad, [
              Dd,
              p("th", Sd, O((sn = t.technicalData) == null ? void 0 : sn.fridgeVolume) + " Liter", 1)
            ])) : H("", !0)
          ])
        ])
      ];
    }),
    _: 1
  });
}
const Td = /* @__PURE__ */ mu(Af, [["render", Fd]]), Rd = {
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
      driver_license: Gr(() => e.grossVehicleWeight.split("_")[0] === "higher" ? "Führerscheinklasse C1" : "Führerscheinklasse B")
    };
  }
}, Id = { class: "grid w-full gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center font-semibold" }, Md = { class: "w-full gap-2 flex flex-col items-center" }, Od = /* @__PURE__ */ p("svg", {
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
], -1), zd = { class: "w-full gap-2 flex flex-col items-center" }, Pd = /* @__PURE__ */ p("svg", {
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
], -1), Ld = { class: "w-full gap-2 flex flex-col items-center" }, Nd = /* @__PURE__ */ p("svg", {
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
], -1), Bd = { class: "w-full gap-2 flex flex-col items-center" }, qd = /* @__PURE__ */ p("svg", {
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
], -1), Hd = {
  key: 0,
  class: "w-full gap-2 flex flex-col items-center"
}, jd = /* @__PURE__ */ p("svg", {
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
], -1), Ud = {
  key: 1,
  class: "w-full gap-2 flex flex-col items-center"
}, Vd = /* @__PURE__ */ p("svg", {
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
function $d(e, u, t, r, n, o) {
  return T(), L("div", Id, [
    p("div", Md, [
      Od,
      wu(" " + O(t.location), 1)
    ]),
    p("div", zd, [
      Pd,
      wu(" " + O(t.maxSeats), 1)
    ]),
    p("div", Ld, [
      Nd,
      wu(" " + O(t.maxBeds), 1)
    ]),
    p("div", Bd, [
      qd,
      wu(" " + O(r.driver_license), 1)
    ]),
    t.petsAllowed ? (T(), L("div", Hd, [
      jd,
      wu(" Haustiere erlaubt ")
    ])) : H("", !0),
    t.onlineBookable ? (T(), L("div", Ud, [
      Vd,
      wu(" Direkt buchbar ")
    ])) : H("", !0)
  ]);
}
const Zd = /* @__PURE__ */ mu(Rd, [["render", $d]]), Wd = ':root,[data-theme]{background-color:var(--fallback-b1,oklch(var(--b1)/1));color:var(--fallback-bc,oklch(var(--bc)/1))}@supports not (color: oklch(0 0 0)){:root{color-scheme:light;--fallback-p: #491eff;--fallback-pc: #d4dbff;--fallback-s: #ff41c7;--fallback-sc: #fff9fc;--fallback-a: #00cfbd;--fallback-ac: #00100d;--fallback-n: #2b3440;--fallback-nc: #d7dde4;--fallback-b1: #ffffff;--fallback-b2: #e5e6e6;--fallback-b3: #e5e6e6;--fallback-bc: #1f2937;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000 }@media (prefers-color-scheme: dark){:root{color-scheme:dark;--fallback-p: #7582ff;--fallback-pc: #050617;--fallback-s: #ff71cf;--fallback-sc: #190211;--fallback-a: #00c7b5;--fallback-ac: #000e0c;--fallback-n: #2a323c;--fallback-nc: #a6adbb;--fallback-b1: #1d232a;--fallback-b2: #191e24;--fallback-b3: #15191e;--fallback-bc: #a6adbb;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000 }}}html{-webkit-tap-highlight-color:transparent}:root{color-scheme:light;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--er: .7176 .221 22.18;--pc: .89824 .06192 275.75;--ac: .15352 .0368 183.61;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: 0 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: .4912 .3096 275.75;--s: .6971 .329 342.55;--sc: .9871 .0106 342.55;--a: .7676 .184 183.61;--n: .321785 .02476 255.701624;--nc: .894994 .011585 252.096176;--b1: 1 0 0;--b2: .961151 0 0;--b3: .924169 .00108 197.137559;--bc: .278078 .029596 256.847952 }[data-theme=light]{color-scheme:light;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--er: .7176 .221 22.18;--pc: .89824 .06192 275.75;--ac: .15352 .0368 183.61;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: 0 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: .4912 .3096 275.75;--s: .6971 .329 342.55;--sc: .9871 .0106 342.55;--a: .7676 .184 183.61;--n: .321785 .02476 255.701624;--nc: .894994 .011585 252.096176;--b1: 1 0 0;--b2: .961151 0 0;--b3: .924169 .00108 197.137559;--bc: .278078 .029596 256.847952 }[data-theme=dark]{color-scheme:dark;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--er: .7176 .221 22.18;--pc: .13138 .0392 275.75;--sc: .1496 .052 342.55;--ac: .14902 .0334 183.61;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: 0 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: .6569 .196 275.75;--s: .748 .26 342.55;--a: .7451 .167 183.61;--n: .313815 .021108 254.139175;--nc: .746477 .0216 264.435964;--b1: .253267 .015896 252.417568;--b2: .232607 .013807 253.100675;--b3: .211484 .01165 254.087939;--bc: .746477 .0216 264.435964 }*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (hover:hover){.label a:hover{--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}.table tr.hover:hover,.table tr.hover:nth-child(2n):hover{--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))}}.checkbox{flex-shrink:0;--chkbg: var(--fallback-bc,oklch(var(--bc)/1));--chkfg: var(--fallback-b1,oklch(var(--b1)/1));height:1.5rem;width:1.5rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--rounded-btn, .5rem);border-width:1px;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));--tw-border-opacity: .2 }.collapse:not(td):not(tr):not(colgroup){visibility:visible}.collapse{position:relative;display:grid;overflow:hidden;grid-template-rows:auto 0fr;transition:grid-template-rows .2s;width:100%;border-radius:var(--rounded-box, 1rem)}.collapse-title,.collapse>input[type=checkbox],.collapse>input[type=radio],.collapse-content{grid-column-start:1;grid-row-start:1}.collapse>input[type=checkbox],.collapse>input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0}.collapse-content{visibility:hidden;grid-column-start:1;grid-row-start:2;min-height:0px;transition:visibility .2s;transition:padding .2s ease-out,background-color .2s ease-out;padding-left:1rem;padding-right:1rem;cursor:unset}.collapse[open],.collapse-open,.collapse:focus:not(.collapse-close){grid-template-rows:auto 1fr}.collapse:not(.collapse-close):has(>input[type=checkbox]:checked),.collapse:not(.collapse-close):has(>input[type=radio]:checked){grid-template-rows:auto 1fr}.collapse[open]>.collapse-content,.collapse-open>.collapse-content,.collapse:focus:not(.collapse-close)>.collapse-content,.collapse:not(.collapse-close)>input[type=checkbox]:checked~.collapse-content,.collapse:not(.collapse-close)>input[type=radio]:checked~.collapse-content{visibility:visible;min-height:-moz-fit-content;min-height:fit-content}.divider{display:flex;flex-direction:row;align-items:center;align-self:stretch;margin-top:1rem;margin-bottom:1rem;height:1rem;white-space:nowrap}.divider:before,.divider:after{height:.125rem;width:100%;flex-grow:1;--tw-content: "";content:var(--tw-content);background-color:var(--fallback-bc,oklch(var(--bc)/.1))}.label{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:space-between;padding:.5rem .25rem}.input{flex-shrink:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:3rem;padding-left:1rem;padding-right:1rem;font-size:1rem;line-height:2;line-height:1.5rem;border-radius:var(--rounded-btn, .5rem);border-width:1px;border-color:transparent;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.link{cursor:pointer;text-decoration-line:underline}.range{height:1.5rem;width:100%;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;--range-shdw: var(--fallback-bc,oklch(var(--bc)/1));overflow:hidden;border-radius:var(--rounded-box, 1rem);background-color:transparent}.range:focus{outline:none}.swap{position:relative;display:inline-grid;-webkit-user-select:none;-moz-user-select:none;user-select:none;place-content:center;cursor:pointer}.swap>*{grid-column-start:1;grid-row-start:1;transition-duration:.3s;transition-timing-function:cubic-bezier(0,0,.2,1);transition-property:transform,opacity}.swap input{-webkit-appearance:none;-moz-appearance:none;appearance:none}.swap .swap-on,.swap .swap-indeterminate,.swap input:indeterminate~.swap-on{opacity:0}.swap input:checked~.swap-off,.swap-active .swap-off,.swap input:indeterminate~.swap-off{opacity:0}.swap input:checked~.swap-on,.swap-active .swap-on,.swap input:indeterminate~.swap-indeterminate{opacity:1}.table{position:relative;width:100%;border-radius:var(--rounded-box, 1rem);text-align:left;font-size:.875rem;line-height:1.25rem}.table :where(.table-pin-rows thead tr){position:sticky;top:0;z-index:1;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.table :where(.table-pin-rows tfoot tr){position:sticky;bottom:0;z-index:1;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.table :where(.table-pin-cols tr th){position:sticky;left:0;right:0;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.toggle{flex-shrink:0;--tglbg: var(--fallback-b1,oklch(var(--b1)/1));--handleoffset: 1.5rem;--handleoffsetcalculator: calc(var(--handleoffset) * -1);--togglehandleborder: 0 0;height:1.5rem;width:3rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--rounded-badge, 1.9rem);border-width:1px;border-color:currentColor;background-color:currentColor;color:var(--fallback-bc,oklch(var(--bc)/.5));transition:background,box-shadow var(--animation-input, .2s) ease-out;box-shadow:var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset,var(--togglehandleborder)}.btm-nav>* .label{font-size:1rem;line-height:1.5rem}@supports not (color: oklch(0 0 0)){.prose :where(code):not(:where([class~=not-prose] *,pre *)){background-color:var(--fallback-b3,oklch(var(--b3)/1))}}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .98))}40%{transform:scale(1.02)}to{transform:scale(1)}}.checkbox:focus{box-shadow:none}.checkbox:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/1))}.checkbox:checked,.checkbox[checked=true],.checkbox[aria-checked=true]{background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-out;background-color:var(--chkbg);background-image:linear-gradient(-45deg,transparent 65%,var(--chkbg) 65.99%),linear-gradient(45deg,transparent 75%,var(--chkbg) 75.99%),linear-gradient(-45deg,var(--chkbg) 40%,transparent 40.99%),linear-gradient(45deg,var(--chkbg) 30%,var(--chkfg) 30.99%,var(--chkfg) 40%,transparent 40.99%),linear-gradient(-45deg,var(--chkfg) 50%,var(--chkbg) 50.99%)}.checkbox:indeterminate{--tw-bg-opacity: 1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-out;background-image:linear-gradient(90deg,transparent 80%,var(--chkbg) 80%),linear-gradient(-90deg,transparent 80%,var(--chkbg) 80%),linear-gradient(0deg,var(--chkbg) 43%,var(--chkfg) 43%,var(--chkfg) 57%,var(--chkbg) 57%)}.checkbox:disabled{cursor:not-allowed;border-color:transparent;--tw-bg-opacity: 1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));opacity:.2}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}details.collapse{width:100%}details.collapse summary{position:relative;display:block;outline:2px solid transparent;outline-offset:2px}details.collapse summary::-webkit-details-marker{display:none}.collapse:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/1))}.collapse:has(.collapse-title:focus-visible),.collapse:has(>input[type=checkbox]:focus-visible),.collapse:has(>input[type=radio]:focus-visible){outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/1))}.collapse-arrow>.collapse-title:after{position:absolute;display:block;height:.5rem;width:.5rem;--tw-translate-y: -100%;--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:.15s;transition-duration:.2s;top:1.9rem;inset-inline-end:1.4rem;content:"";transform-origin:75% 75%;box-shadow:2px 2px;pointer-events:none}.collapse-plus>.collapse-title:after{position:absolute;display:block;height:.5rem;width:.5rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:.3s;top:.9rem;inset-inline-end:1.4rem;content:"+";pointer-events:none}.collapse:not(.collapse-open):not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-open):not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-open):not(.collapse-close)>.collapse-title{cursor:pointer}.collapse:focus:not(.collapse-open):not(.collapse-close):not(.collapse[open])>.collapse-title{cursor:unset}.collapse-title{position:relative}:where(.collapse>input[type=checkbox]),:where(.collapse>input[type=radio]){z-index:1}.collapse-title,:where(.collapse>input[type=checkbox]),:where(.collapse>input[type=radio]){width:100%;padding:1rem;padding-inline-end:3rem;min-height:3.75rem;transition:background-color .2s ease-out}.collapse[open]>:where(.collapse-content),.collapse-open>:where(.collapse-content),.collapse:focus:not(.collapse-close)>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input[type=checkbox]:checked~.collapse-content),.collapse:not(.collapse-close)>:where(input[type=radio]:checked~.collapse-content){padding-bottom:1rem;transition:padding .2s ease-out,background-color .2s ease-out}.collapse[open].collapse-arrow>.collapse-title:after,.collapse-open.collapse-arrow>.collapse-title:after,.collapse-arrow:focus:not(.collapse-close)>.collapse-title:after,.collapse-arrow:not(.collapse-close)>input[type=checkbox]:checked~.collapse-title:after,.collapse-arrow:not(.collapse-close)>input[type=radio]:checked~.collapse-title:after{--tw-translate-y: -50%;--tw-rotate: 225deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.collapse[open].collapse-plus>.collapse-title:after,.collapse-open.collapse-plus>.collapse-title:after,.collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse-plus:not(.collapse-close)>input[type=checkbox]:checked~.collapse-title:after,.collapse-plus:not(.collapse-close)>input[type=radio]:checked~.collapse-title:after{content:"−"}.divider:not(:empty){gap:1rem}.input input:focus{outline:2px solid transparent;outline-offset:2px}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input:focus,.input:focus-within{box-shadow:none;border-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/.2))}.input-disabled,.input:disabled,.input[disabled]{cursor:not-allowed;--tw-border-opacity: 1;border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));color:var(--fallback-bc,oklch(var(--bc)/.4))}.input-disabled::-moz-placeholder,.input:disabled::-moz-placeholder,.input[disabled]::-moz-placeholder{color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));--tw-placeholder-opacity: .2 }.input-disabled::placeholder,.input:disabled::placeholder,.input[disabled]::placeholder{color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));--tw-placeholder-opacity: .2 }.input::-webkit-date-and-time-value{text-align:inherit}.link:focus{outline:2px solid transparent;outline-offset:2px}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px}.mockup-browser .mockup-browser-toolbar .input{position:relative;margin-left:auto;margin-right:auto;display:block;height:1.75rem;width:24rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));padding-left:2rem;direction:ltr}.mockup-browser .mockup-browser-toolbar .input:before{content:"";position:absolute;left:.5rem;top:50%;aspect-ratio:1 / 1;height:.75rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;border-width:2px;border-color:currentColor;opacity:.6}.mockup-browser .mockup-browser-toolbar .input:after{content:"";position:absolute;left:1.25rem;top:50%;height:.5rem;--tw-translate-y: 25%;--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;border-width:1px;border-color:currentColor;opacity:.6}@keyframes modal-pop{0%{opacity:0}}@keyframes progress-loading{50%{background-position-x:-115%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset}50%{box-shadow:0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset}to{box-shadow:0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset}}.range:focus-visible::-webkit-slider-thumb{--focus-shadow: 0 0 0 6px var(--fallback-b1,oklch(var(--b1)/1)) inset, 0 0 0 2rem var(--range-shdw) inset }.range:focus-visible::-moz-range-thumb{--focus-shadow: 0 0 0 6px var(--fallback-b1,oklch(var(--b1)/1)) inset, 0 0 0 2rem var(--range-shdw) inset }.range::-webkit-slider-runnable-track{height:.5rem;width:100%;border-radius:var(--rounded-box, 1rem);background-color:var(--fallback-bc,oklch(var(--bc)/.1))}.range::-moz-range-track{height:.5rem;width:100%;border-radius:var(--rounded-box, 1rem);background-color:var(--fallback-bc,oklch(var(--bc)/.1))}.range::-webkit-slider-thumb{position:relative;height:1.5rem;width:1.5rem;border-radius:var(--rounded-box, 1rem);border-style:none;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));-moz-appearance:none;appearance:none;-webkit-appearance:none;top:50%;color:var(--range-shdw);transform:translateY(-50%);--filler-size: 100rem;--filler-offset: .6rem;box-shadow:0 0 0 3px var(--range-shdw) inset,var(--focus-shadow, 0 0),calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)}.range::-moz-range-thumb{position:relative;height:1.5rem;width:1.5rem;border-radius:var(--rounded-box, 1rem);border-style:none;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));top:50%;color:var(--range-shdw);--filler-size: 100rem;--filler-offset: .5rem;box-shadow:0 0 0 3px var(--range-shdw) inset,var(--focus-shadow, 0 0),calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}.swap-rotate .swap-on,.swap-rotate .swap-indeterminate,.swap-rotate input:indeterminate~.swap-on{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-off,.swap-active:where(.swap-rotate) .swap-off,.swap-rotate input:indeterminate~.swap-off{--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-on,.swap-active:where(.swap-rotate) .swap-on,.swap-rotate input:indeterminate~.swap-indeterminate{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-flip{transform-style:preserve-3d;perspective:16em}.swap-flip .swap-on,.swap-flip .swap-indeterminate,.swap-flip input:indeterminate~.swap-on{transform:rotateY(180deg);backface-visibility:hidden;opacity:1}.swap-flip input:checked~.swap-off,.swap-active:where(.swap-flip) .swap-off,.swap-flip input:indeterminate~.swap-off{transform:rotateY(-180deg);backface-visibility:hidden;opacity:1}.swap-flip input:checked~.swap-on,.swap-active:where(.swap-flip) .swap-on,.swap-flip input:indeterminate~.swap-indeterminate{transform:rotateY(0)}:is([dir=rtl] .table){text-align:right}.table :where(th,td){padding:.75rem 1rem;vertical-align:middle}.table tr.active,.table tr.active:nth-child(2n),.table-zebra tbody tr:nth-child(2n){--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))}.table :where(thead,tbody) :where(tr:not(:last-child)),.table :where(thead,tbody) :where(tr:first-child:last-child){border-bottom-width:1px;--tw-border-opacity: 1;border-bottom-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)))}.table :where(thead,tfoot){white-space:nowrap;font-size:.75rem;line-height:1rem;font-weight:700;color:var(--fallback-bc,oklch(var(--bc)/.6))}@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}[dir=rtl] .toggle{--handleoffsetcalculator: calc(var(--handleoffset) * 1) }.toggle:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/.2))}.toggle:hover{background-color:currentColor}.toggle:checked,.toggle[checked=true],.toggle[aria-checked=true]{background-image:none;--handleoffsetcalculator: var(--handleoffset);--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}[dir=rtl] .toggle:checked,[dir=rtl] .toggle[checked=true],[dir=rtl] .toggle[aria-checked=true]{--handleoffsetcalculator: calc(var(--handleoffset) * -1) }.toggle:indeterminate{--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));box-shadow:calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset}[dir=rtl] .toggle:indeterminate{box-shadow:calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset}.toggle:disabled{cursor:not-allowed;--tw-border-opacity: 1;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));background-color:transparent;opacity:.3;--togglehandleborder: 0 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset, var(--handleoffsetcalculator) 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset }:root .prose{--tw-prose-body: var(--fallback-bc,oklch(var(--bc)/.8));--tw-prose-headings: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-lead: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-links: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-bold: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-counters: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-bullets: var(--fallback-bc,oklch(var(--bc)/.5));--tw-prose-hr: var(--fallback-bc,oklch(var(--bc)/.2));--tw-prose-quotes: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-quote-borders: var(--fallback-bc,oklch(var(--bc)/.2));--tw-prose-captions: var(--fallback-bc,oklch(var(--bc)/.5));--tw-prose-code: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-pre-code: var(--fallback-nc,oklch(var(--nc)/1));--tw-prose-pre-bg: var(--fallback-n,oklch(var(--n)/1));--tw-prose-th-borders: var(--fallback-bc,oklch(var(--bc)/.5));--tw-prose-td-borders: var(--fallback-bc,oklch(var(--bc)/.2)) }.prose :where(code):not(:where([class~=not-prose] *,pre *)){padding:1px 8px;border-radius:var(--rounded-badge);font-weight:initial;background-color:var(--fallback-bc,oklch(var(--bc)/.1))}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{display:none}.prose pre code{border-radius:0;padding:0}.prose :where(tbody tr,thead):not(:where([class~=not-prose] *)){border-bottom-color:var(--fallback-bc,oklch(var(--bc)/.2))}.collapse{visibility:collapse}.m-0{margin:0}.flex{display:flex}.table{display:table}.grid{display:grid}.h-10{height:2.5rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.min-h-0{min-height:0px}.w-10{width:2.5rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-full{width:100%}.max-w-full{max-width:100%}.border-collapse{border-collapse:collapse}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.rounded-none{border-radius:0}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.object-contain{-o-object-fit:contain;object-fit:contain}.p-0{padding:0}.p-2{padding:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-primary-blue{--tw-text-opacity: 1;color:rgb(9 135 197 / var(--tw-text-opacity))}.text-secondary-braun{--tw-text-opacity: 1;color:rgb(203 197 185 / var(--tw-text-opacity))}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media not all and (min-width: 640px){.max-sm\\:grid{display:grid}.max-sm\\:hidden{display:none}.max-sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.max-sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.max-sm\\:text-lg{font-size:1.125rem;line-height:1.75rem}.max-sm\\:font-bold{font-weight:700}.max-sm\\:text-primary-braun{--tw-text-opacity: 1;color:rgb(107 63 18 / var(--tw-text-opacity))}.max-sm\\:before\\:font-bold:before{content:var(--tw-content);font-weight:700}.max-sm\\:before\\:capitalize:before{content:var(--tw-content);text-transform:capitalize}.max-sm\\:before\\:content-\\[attr\\(data-cell\\)\\]:before{--tw-content: attr(data-cell);content:var(--tw-content)}}@media (min-width: 640px){.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 768px){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width: 1024px){.lg\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}.\\[\\&\\>\\*\\:nth-child\\(odd\\)\\]\\:bg-gray-100>*:nth-child(odd){--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}', Gd = {
  name: "VehicleDetails",
  components: {
    MarkdownSection: Xl,
    OpeningHours: cf,
    Seasons: xf,
    Overview: Ef,
    TechnicalDetails: Td,
    FirstSection: Zd
  },
  props: {
    vehicleId: {
      type: String,
      required: !0,
      default: ""
    }
  },
  setup(e) {
    const u = Xe(null), t = Xe(null), r = Xe(null), n = Xe(null), o = Xe(null), i = Xe(null), c = Xe(null), s = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/resolve`, a = async () => {
      var l;
      try {
        const m = await (await fetch(s)).json();
        u.value = m, t.value = (l = m.descriptions) == null ? void 0 : l.german, r.value = m.contractTerms, n.value = m.pickupAndReturnTimes, o.value = m.rates, i.value = m.minDays, c.value = m.seasons;
      } catch (d) {
        console.error("An error occurred while fetching the data:", d);
      }
    };
    return U0(() => {
      a();
    }), {
      article: u,
      openingHours: n,
      contractTerms: r,
      rates: o,
      minDays: i,
      seasons: c,
      description: t
    };
  }
}, Kd = { class: "flex justify-center w-full" }, Yd = { class: "container flex flex-col gap-6 w-full text-left" }, Jd = { class: "p-0 m-0 text-xl" }, Xd = /* @__PURE__ */ p("div", { class: "divider p-0 m-0" }, null, -1);
function Qd(e, u, t, r, n, o) {
  var m;
  const i = Re("FirstSection"), c = Re("Seasons"), s = Re("MarkdownSection"), a = Re("Overview"), l = Re("TechnicalDetails"), d = Re("OpeningHours");
  return T(), L("div", Kd, [
    p("div", Yd, [
      p("h1", Jd, O((m = r.article) == null ? void 0 : m.title), 1),
      Xd,
      r.article ? (T(), me(i, {
        key: 0,
        location: r.article.location,
        maxSeats: r.article.maxSeats,
        maxBeds: r.article.maxBeds,
        petsAllowed: r.article.petsAllowed,
        grossVehicleWeight: r.article.technicalData.grossVehicleWeight,
        onlineBookable: r.article.onlineBookable
      }, null, 8, ["location", "maxSeats", "maxBeds", "petsAllowed", "grossVehicleWeight", "onlineBookable"])) : H("", !0),
      r.rates && r.minDays && r.seasons ? (T(), me(c, {
        key: 1,
        rates: r.rates,
        minDays: r.minDays,
        seasons: r.seasons
      }, null, 8, ["rates", "minDays", "seasons"])) : H("", !0),
      r.description ? (T(), me(s, {
        key: 2,
        text: r.description,
        title: "Detaillierte Beschreibung",
        isCollapsible: !1
      }, null, 8, ["text"])) : H("", !0),
      r.article ? (T(), me(a, {
        key: 3,
        features: r.article.features,
        vehicleId: r.article.id
      }, null, 8, ["features", "vehicleId"])) : H("", !0),
      r.article ? (T(), me(l, {
        key: 4,
        technicalData: r.article.technicalData,
        isofixSeats: r.article.isofixSeats,
        sittingPlaces: r.article.maxSeats
      }, null, 8, ["technicalData", "isofixSeats", "sittingPlaces"])) : H("", !0),
      r.openingHours ? (T(), me(d, {
        key: 5,
        openingHours: r.openingHours
      }, null, 8, ["openingHours"])) : H("", !0),
      r.contractTerms ? (T(), me(s, {
        key: 6,
        text: r.contractTerms,
        title: "Mietbedingungen"
      }, null, 8, ["text"])) : H("", !0)
    ])
  ]);
}
const eh = /* @__PURE__ */ mu(Gd, [["render", Qd], ["styles", [Wd]]]), uh = /* @__PURE__ */ Zc(eh);
customElements.define("vehicle-details", uh);
