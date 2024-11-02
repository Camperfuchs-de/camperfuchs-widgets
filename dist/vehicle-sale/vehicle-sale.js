/**
* @vue/shared v3.4.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Br(e, t) {
  const u = new Set(e.split(","));
  return t ? (r) => u.has(r.toLowerCase()) : (r) => u.has(r);
}
const ue = {}, Ht = [], je = () => {
}, $i = () => !1, Hu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), jr = (e) => e.startsWith("onUpdate:"), he = Object.assign, qr = (e, t) => {
  const u = e.indexOf(t);
  u > -1 && e.splice(u, 1);
}, Vi = Object.prototype.hasOwnProperty, Z = (e, t) => Vi.call(e, t), q = Array.isArray, $t = (e) => $u(e) === "[object Map]", yo = (e) => $u(e) === "[object Set]", $ = (e) => typeof e == "function", se = (e) => typeof e == "string", Yt = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", Co = (e) => (re(e) || $(e)) && $(e.then) && $(e.catch), Ao = Object.prototype.toString, $u = (e) => Ao.call(e), Ui = (e) => $u(e).slice(8, -1), Eo = (e) => $u(e) === "[object Object]", Hr = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fu = /* @__PURE__ */ Br(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (u) => t[u] || (t[u] = e(u));
}, Zi = /-(\w)/g, Pe = Vu((e) => e.replace(Zi, (t, u) => u ? u.toUpperCase() : "")), Wi = /\B([A-Z])/g, $e = Vu(
  (e) => e.replace(Wi, "-$1").toLowerCase()
), Uu = Vu((e) => e.charAt(0).toUpperCase() + e.slice(1)), ir = Vu((e) => e ? `on${Uu(e)}` : ""), Dt = (e, t) => !Object.is(e, t), cr = (e, t) => {
  for (let u = 0; u < e.length; u++)
    e[u](t);
}, Iu = (e, t, u) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: u
  });
}, Gi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, wn = (e) => {
  const t = se(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let kn;
const Do = () => kn || (kn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $r(e) {
  if (q(e)) {
    const t = {};
    for (let u = 0; u < e.length; u++) {
      const r = e[u], n = se(r) ? Ji(r) : $r(r);
      if (n)
        for (const o in n)
          t[o] = n[o];
    }
    return t;
  } else if (se(e) || re(e))
    return e;
}
const Ki = /;(?![^(]*\))/g, Yi = /:([^]+)/, Xi = /\/\*[^]*?\*\//g;
function Ji(e) {
  const t = {};
  return e.replace(Xi, "").split(Ki).forEach((u) => {
    if (u) {
      const r = u.split(Yi);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function gu(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (q(e))
    for (let u = 0; u < e.length; u++) {
      const r = gu(e[u]);
      r && (t += r + " ");
    }
  else if (re(e))
    for (const u in e)
      e[u] && (t += u + " ");
  return t.trim();
}
const Qi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ec = /* @__PURE__ */ Br(Qi);
function So(e) {
  return !!e || e === "";
}
const L = (e) => se(e) ? e : e == null ? "" : q(e) || re(e) && (e.toString === Ao || !$(e.toString)) ? JSON.stringify(e, Fo, 2) : String(e), Fo = (e, t) => t && t.__v_isRef ? Fo(e, t.value) : $t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (u, [r, n], o) => (u[sr(r, o) + " =>"] = n, u),
    {}
  )
} : yo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((u) => sr(u))
} : Yt(t) ? sr(t) : re(t) && !q(t) && !Eo(t) ? String(t) : t, sr = (e, t = "") => {
  var u;
  return Yt(e) ? `Symbol(${(u = e.description) != null ? u : t})` : e;
};
/**
* @vue/reactivity v3.4.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let He;
class tc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = He, !t && He && (this.index = (He.scopes || (He.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const u = He;
      try {
        return He = this, t();
      } finally {
        He = u;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    He = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    He = this.parent;
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
function uc(e, t = He) {
  t && t.active && t.effects.push(e);
}
function rc() {
  return He;
}
let Pt;
class Vr {
  constructor(t, u, r, n) {
    this.fn = t, this.trigger = u, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, uc(this, n);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, Nt();
      for (const t of this.deps)
        if (t.computed && (nc(t.computed), this._dirtyLevel >= 2))
          break;
      Bt(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Ct, u = Pt;
    try {
      return Ct = !0, Pt = this, this._runnings++, vn(this), this.fn();
    } finally {
      yn(this), this._runnings--, Pt = u, Ct = t;
    }
  }
  stop() {
    var t;
    this.active && (vn(this), yn(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function nc(e) {
  return e.value;
}
function vn(e) {
  e._trackId++, e._depsLength = 0;
}
function yn(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      To(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function To(e, t) {
  const u = e.get(t);
  u !== void 0 && t._trackId !== u && (e.delete(t), e.size === 0 && e.cleanup());
}
let Ct = !0, kr = 0;
const Mo = [];
function Nt() {
  Mo.push(Ct), Ct = !1;
}
function Bt() {
  const e = Mo.pop();
  Ct = e === void 0 ? !0 : e;
}
function Ur() {
  kr++;
}
function Zr() {
  for (kr--; !kr && vr.length; )
    vr.shift()();
}
function Io(e, t, u) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && To(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const vr = [];
function Ro(e, t, u) {
  Ur();
  for (const r of e.keys())
    if (!(!r.allowRecurse && r._runnings) && r._dirtyLevel < t && (!r._runnings || t !== 2)) {
      const n = r._dirtyLevel;
      r._dirtyLevel = t, n === 0 && (!r._queryings || t !== 2) && (r.trigger(), r.scheduler && vr.push(r.scheduler));
    }
  Zr();
}
const Oo = (e, t) => {
  const u = /* @__PURE__ */ new Map();
  return u.cleanup = e, u.computed = t, u;
}, yr = /* @__PURE__ */ new WeakMap(), Lt = Symbol(""), Cr = Symbol("");
function Se(e, t, u) {
  if (Ct && Pt) {
    let r = yr.get(e);
    r || yr.set(e, r = /* @__PURE__ */ new Map());
    let n = r.get(u);
    n || r.set(u, n = Oo(() => r.delete(u))), Io(
      Pt,
      n
    );
  }
}
function lt(e, t, u, r, n, o) {
  const i = yr.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (u === "length" && q(e)) {
    const s = Number(r);
    i.forEach((a, l) => {
      (l === "length" || !Yt(l) && l >= s) && c.push(a);
    });
  } else
    switch (u !== void 0 && c.push(i.get(u)), t) {
      case "add":
        q(e) ? Hr(u) && c.push(i.get("length")) : (c.push(i.get(Lt)), $t(e) && c.push(i.get(Cr)));
        break;
      case "delete":
        q(e) || (c.push(i.get(Lt)), $t(e) && c.push(i.get(Cr)));
        break;
      case "set":
        $t(e) && c.push(i.get(Lt));
        break;
    }
  Ur();
  for (const s of c)
    s && Ro(
      s,
      3
    );
  Zr();
}
const oc = /* @__PURE__ */ Br("__proto__,__v_isRef,__isVue"), zo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Yt)
), Cn = /* @__PURE__ */ ic();
function ic() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...u) {
      const r = K(this);
      for (let o = 0, i = this.length; o < i; o++)
        Se(r, "get", o + "");
      const n = r[t](...u);
      return n === -1 || n === !1 ? r[t](...u.map(K)) : n;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...u) {
      Nt(), Ur();
      const r = K(this)[t].apply(this, u);
      return Zr(), Bt(), r;
    };
  }), e;
}
function cc(e) {
  const t = K(this);
  return Se(t, "has", e), t.hasOwnProperty(e);
}
class Po {
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
      return r === (n ? o ? wc : jo : o ? Bo : No).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = q(t);
    if (!n) {
      if (i && Z(Cn, u))
        return Reflect.get(Cn, u, r);
      if (u === "hasOwnProperty")
        return cc;
    }
    const c = Reflect.get(t, u, r);
    return (Yt(u) ? zo.has(u) : oc(u)) || (n || Se(t, "get", u), o) ? c : Fe(c) ? i && Hr(u) ? c : c.value : re(c) ? n ? qo(c) : At(c) : c;
  }
}
class Lo extends Po {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, u, r, n) {
    let o = t[u];
    if (!this._shallow) {
      const s = Gt(o);
      if (!Ru(r) && !Gt(r) && (o = K(o), r = K(r)), !q(t) && Fe(o) && !Fe(r))
        return s ? !1 : (o.value = r, !0);
    }
    const i = q(t) && Hr(u) ? Number(u) < t.length : Z(t, u), c = Reflect.set(t, u, r, n);
    return t === K(n) && (i ? Dt(r, o) && lt(t, "set", u, r) : lt(t, "add", u, r)), c;
  }
  deleteProperty(t, u) {
    const r = Z(t, u);
    t[u];
    const n = Reflect.deleteProperty(t, u);
    return n && r && lt(t, "delete", u, void 0), n;
  }
  has(t, u) {
    const r = Reflect.has(t, u);
    return (!Yt(u) || !zo.has(u)) && Se(t, "has", u), r;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      q(t) ? "length" : Lt
    ), Reflect.ownKeys(t);
  }
}
class sc extends Po {
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
const ac = /* @__PURE__ */ new Lo(), lc = /* @__PURE__ */ new sc(), fc = /* @__PURE__ */ new Lo(
  !0
), Wr = (e) => e, Zu = (e) => Reflect.getPrototypeOf(e);
function ku(e, t, u = !1, r = !1) {
  e = e.__v_raw;
  const n = K(e), o = K(t);
  u || (Dt(t, o) && Se(n, "get", t), Se(n, "get", o));
  const { has: i } = Zu(n), c = r ? Wr : u ? Yr : cu;
  if (i.call(n, t))
    return c(e.get(t));
  if (i.call(n, o))
    return c(e.get(o));
  e !== n && e.get(t);
}
function vu(e, t = !1) {
  const u = this.__v_raw, r = K(u), n = K(e);
  return t || (Dt(e, n) && Se(r, "has", e), Se(r, "has", n)), e === n ? u.has(e) : u.has(e) || u.has(n);
}
function yu(e, t = !1) {
  return e = e.__v_raw, !t && Se(K(e), "iterate", Lt), Reflect.get(e, "size", e);
}
function An(e) {
  e = K(e);
  const t = K(this);
  return Zu(t).has.call(t, e) || (t.add(e), lt(t, "add", e, e)), this;
}
function En(e, t) {
  t = K(t);
  const u = K(this), { has: r, get: n } = Zu(u);
  let o = r.call(u, e);
  o || (e = K(e), o = r.call(u, e));
  const i = n.call(u, e);
  return u.set(e, t), o ? Dt(t, i) && lt(u, "set", e, t) : lt(u, "add", e, t), this;
}
function Dn(e) {
  const t = K(this), { has: u, get: r } = Zu(t);
  let n = u.call(t, e);
  n || (e = K(e), n = u.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return n && lt(t, "delete", e, void 0), o;
}
function Sn() {
  const e = K(this), t = e.size !== 0, u = e.clear();
  return t && lt(e, "clear", void 0, void 0), u;
}
function Cu(e, t) {
  return function(r, n) {
    const o = this, i = o.__v_raw, c = K(i), s = t ? Wr : e ? Yr : cu;
    return !e && Se(c, "iterate", Lt), i.forEach((a, l) => r.call(n, s(a), s(l), o));
  };
}
function Au(e, t, u) {
  return function(...r) {
    const n = this.__v_raw, o = K(n), i = $t(o), c = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, a = n[e](...r), l = u ? Wr : t ? Yr : cu;
    return !t && Se(
      o,
      "iterate",
      s ? Cr : Lt
    ), {
      // iterator protocol
      next() {
        const { value: p, done: g } = a.next();
        return g ? { value: p, done: g } : {
          value: c ? [l(p[0]), l(p[1])] : l(p),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function mt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function dc() {
  const e = {
    get(o) {
      return ku(this, o);
    },
    get size() {
      return yu(this);
    },
    has: vu,
    add: An,
    set: En,
    delete: Dn,
    clear: Sn,
    forEach: Cu(!1, !1)
  }, t = {
    get(o) {
      return ku(this, o, !1, !0);
    },
    get size() {
      return yu(this);
    },
    has: vu,
    add: An,
    set: En,
    delete: Dn,
    clear: Sn,
    forEach: Cu(!1, !0)
  }, u = {
    get(o) {
      return ku(this, o, !0);
    },
    get size() {
      return yu(this, !0);
    },
    has(o) {
      return vu.call(this, o, !0);
    },
    add: mt("add"),
    set: mt("set"),
    delete: mt("delete"),
    clear: mt("clear"),
    forEach: Cu(!0, !1)
  }, r = {
    get(o) {
      return ku(this, o, !0, !0);
    },
    get size() {
      return yu(this, !0);
    },
    has(o) {
      return vu.call(this, o, !0);
    },
    add: mt("add"),
    set: mt("set"),
    delete: mt("delete"),
    clear: mt("clear"),
    forEach: Cu(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Au(
      o,
      !1,
      !1
    ), u[o] = Au(
      o,
      !0,
      !1
    ), t[o] = Au(
      o,
      !1,
      !0
    ), r[o] = Au(
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
  hc,
  pc,
  bc,
  gc
] = /* @__PURE__ */ dc();
function Gr(e, t) {
  const u = t ? e ? gc : bc : e ? pc : hc;
  return (r, n, o) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? r : Reflect.get(
    Z(u, n) && n in r ? u : r,
    n,
    o
  );
}
const mc = {
  get: /* @__PURE__ */ Gr(!1, !1)
}, xc = {
  get: /* @__PURE__ */ Gr(!1, !0)
}, _c = {
  get: /* @__PURE__ */ Gr(!0, !1)
}, No = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap(), wc = /* @__PURE__ */ new WeakMap();
function kc(e) {
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
function vc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kc(Ui(e));
}
function At(e) {
  return Gt(e) ? e : Kr(
    e,
    !1,
    ac,
    mc,
    No
  );
}
function yc(e) {
  return Kr(
    e,
    !1,
    fc,
    xc,
    Bo
  );
}
function qo(e) {
  return Kr(
    e,
    !0,
    lc,
    _c,
    jo
  );
}
function Kr(e, t, u, r, n) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = n.get(e);
  if (o)
    return o;
  const i = vc(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? r : u
  );
  return n.set(e, c), c;
}
function Vt(e) {
  return Gt(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Gt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ru(e) {
  return !!(e && e.__v_isShallow);
}
function Ho(e) {
  return Vt(e) || Gt(e);
}
function K(e) {
  const t = e && e.__v_raw;
  return t ? K(t) : e;
}
function $o(e) {
  return Iu(e, "__v_skip", !0), e;
}
const cu = (e) => re(e) ? At(e) : e, Yr = (e) => re(e) ? qo(e) : e;
class Vo {
  constructor(t, u, r, n) {
    this._setter = u, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Vr(
      () => t(this._value),
      () => Ar(this, 1)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !n, this.__v_isReadonly = r;
  }
  get value() {
    const t = K(this);
    return Uo(t), (!t._cacheable || t.effect.dirty) && Dt(t._value, t._value = t.effect.run()) && Ar(t, 2), t._value;
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
function Cc(e, t, u = !1) {
  let r, n;
  const o = $(e);
  return o ? (r = e, n = je) : (r = e.get, n = e.set), new Vo(r, n, o || !n, u);
}
function Uo(e) {
  Ct && Pt && (e = K(e), Io(
    Pt,
    e.dep || (e.dep = Oo(
      () => e.dep = void 0,
      e instanceof Vo ? e : void 0
    ))
  ));
}
function Ar(e, t = 3, u) {
  e = K(e);
  const r = e.dep;
  r && Ro(
    r,
    t
  );
}
function Fe(e) {
  return !!(e && e.__v_isRef === !0);
}
function X(e) {
  return Ac(e, !1);
}
function Ac(e, t) {
  return Fe(e) ? e : new Ec(e, t);
}
class Ec {
  constructor(t, u) {
    this.__v_isShallow = u, this.dep = void 0, this.__v_isRef = !0, this._rawValue = u ? t : K(t), this._value = u ? t : cu(t);
  }
  get value() {
    return Uo(this), this._value;
  }
  set value(t) {
    const u = this.__v_isShallow || Ru(t) || Gt(t);
    t = u ? t : K(t), Dt(t, this._rawValue) && (this._rawValue = t, this._value = u ? t : cu(t), Ar(this, 3));
  }
}
function Dc(e) {
  return Fe(e) ? e.value : e;
}
const Sc = {
  get: (e, t, u) => Dc(Reflect.get(e, t, u)),
  set: (e, t, u, r) => {
    const n = e[t];
    return Fe(n) && !Fe(u) ? (n.value = u, !0) : Reflect.set(e, t, u, r);
  }
};
function Zo(e) {
  return Vt(e) ? e : new Proxy(e, Sc);
}
/**
* @vue/runtime-core v3.4.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Et(e, t, u, r) {
  let n;
  try {
    n = r ? e(...r) : e();
  } catch (o) {
    Wu(o, t, u);
  }
  return n;
}
function We(e, t, u, r) {
  if ($(e)) {
    const o = Et(e, t, u, r);
    return o && Co(o) && o.catch((i) => {
      Wu(i, t, u);
    }), o;
  }
  const n = [];
  for (let o = 0; o < e.length; o++)
    n.push(We(e[o], t, u, r));
  return n;
}
function Wu(e, t, u, r = !0) {
  const n = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = `https://vuejs.org/errors/#runtime-${u}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let l = 0; l < a.length; l++)
          if (a[l](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const s = t.appContext.config.errorHandler;
    if (s) {
      Et(
        s,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  Fc(e, u, n, r);
}
function Fc(e, t, u, r = !0) {
  console.error(e);
}
let su = !1, Er = !1;
const xe = [];
let ut = 0;
const Ut = [];
let xt = null, Rt = 0;
const Wo = /* @__PURE__ */ Promise.resolve();
let Xr = null;
function Jr(e) {
  const t = Xr || Wo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Tc(e) {
  let t = ut + 1, u = xe.length;
  for (; t < u; ) {
    const r = t + u >>> 1, n = xe[r], o = au(n);
    o < e || o === e && n.pre ? t = r + 1 : u = r;
  }
  return t;
}
function Qr(e) {
  (!xe.length || !xe.includes(
    e,
    su && e.allowRecurse ? ut + 1 : ut
  )) && (e.id == null ? xe.push(e) : xe.splice(Tc(e.id), 0, e), Go());
}
function Go() {
  !su && !Er && (Er = !0, Xr = Wo.then(Yo));
}
function Mc(e) {
  const t = xe.indexOf(e);
  t > ut && xe.splice(t, 1);
}
function Ic(e) {
  q(e) ? Ut.push(...e) : (!xt || !xt.includes(
    e,
    e.allowRecurse ? Rt + 1 : Rt
  )) && Ut.push(e), Go();
}
function Fn(e, t, u = su ? ut + 1 : 0) {
  for (; u < xe.length; u++) {
    const r = xe[u];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      xe.splice(u, 1), u--, r();
    }
  }
}
function Ko(e) {
  if (Ut.length) {
    const t = [...new Set(Ut)].sort(
      (u, r) => au(u) - au(r)
    );
    if (Ut.length = 0, xt) {
      xt.push(...t);
      return;
    }
    for (xt = t, Rt = 0; Rt < xt.length; Rt++)
      xt[Rt]();
    xt = null, Rt = 0;
  }
}
const au = (e) => e.id == null ? 1 / 0 : e.id, Rc = (e, t) => {
  const u = au(e) - au(t);
  if (u === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return u;
};
function Yo(e) {
  Er = !1, su = !0, xe.sort(Rc);
  try {
    for (ut = 0; ut < xe.length; ut++) {
      const t = xe[ut];
      t && t.active !== !1 && Et(t, null, 14);
    }
  } finally {
    ut = 0, xe.length = 0, Ko(), su = !1, Xr = null, (xe.length || Ut.length) && Yo();
  }
}
function Oc(e, t, ...u) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || ue;
  let n = u;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in r) {
    const l = `${i === "modelValue" ? "model" : i}Modifiers`, { number: p, trim: g } = r[l] || ue;
    g && (n = u.map((x) => se(x) ? x.trim() : x)), p && (n = u.map(Gi));
  }
  let c, s = r[c = ir(t)] || // also try camelCase event handler (#2249)
  r[c = ir(Pe(t))];
  !s && o && (s = r[c = ir($e(t))]), s && We(
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
    e.emitted[c] = !0, We(
      a,
      e,
      6,
      n
    );
  }
}
function Xo(e, t, u = !1) {
  const r = t.emitsCache, n = r.get(e);
  if (n !== void 0)
    return n;
  const o = e.emits;
  let i = {}, c = !1;
  if (!$(e)) {
    const s = (a) => {
      const l = Xo(a, t, !0);
      l && (c = !0, he(i, l));
    };
    !u && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !c ? (re(e) && r.set(e, null), null) : (q(o) ? o.forEach((s) => i[s] = null) : he(i, o), re(e) && r.set(e, i), i);
}
function Gu(e, t) {
  return !e || !Hu(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, $e(t)) || Z(e, t));
}
let fe = null, Jo = null;
function Ou(e) {
  const t = fe;
  return fe = e, Jo = e && e.type.__scopeId || null, t;
}
function Ve(e, t = fe, u) {
  if (!t || e._n)
    return e;
  const r = (...n) => {
    r._d && Hn(-1);
    const o = Ou(t);
    let i;
    try {
      i = e(...n);
    } finally {
      Ou(o), r._d && Hn(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ar(e) {
  const {
    type: t,
    vnode: u,
    proxy: r,
    withProxy: n,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: s,
    emit: a,
    render: l,
    renderCache: p,
    data: g,
    setupState: x,
    ctx: b,
    inheritAttrs: D
  } = e;
  let I, O;
  const j = Ou(e);
  try {
    if (u.shapeFlag & 4) {
      const M = n || r, E = M;
      I = tt(
        l.call(
          E,
          M,
          p,
          o,
          x,
          g,
          b
        )
      ), O = s;
    } else {
      const M = t;
      I = tt(
        M.length > 1 ? M(
          o,
          { attrs: s, slots: c, emit: a }
        ) : M(
          o,
          null
          /* we know it doesn't need it */
        )
      ), O = t.props ? s : zc(s);
    }
  } catch (M) {
    iu.length = 0, Wu(M, e, 1), I = de(St);
  }
  let y = I;
  if (O && D !== !1) {
    const M = Object.keys(O), { shapeFlag: E } = y;
    M.length && E & 7 && (i && M.some(jr) && (O = Pc(
      O,
      i
    )), y = Ft(y, O));
  }
  return u.dirs && (y = Ft(y), y.dirs = y.dirs ? y.dirs.concat(u.dirs) : u.dirs), u.transition && (y.transition = u.transition), I = y, Ou(j), I;
}
const zc = (e) => {
  let t;
  for (const u in e)
    (u === "class" || u === "style" || Hu(u)) && ((t || (t = {}))[u] = e[u]);
  return t;
}, Pc = (e, t) => {
  const u = {};
  for (const r in e)
    (!jr(r) || !(r.slice(9) in t)) && (u[r] = e[r]);
  return u;
};
function Lc(e, t, u) {
  const { props: r, children: n, component: o } = e, { props: i, children: c, patchFlag: s } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (u && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return r ? Tn(r, i, a) : !!i;
    if (s & 8) {
      const l = t.dynamicProps;
      for (let p = 0; p < l.length; p++) {
        const g = l[p];
        if (i[g] !== r[g] && !Gu(a, g))
          return !0;
      }
    }
  } else
    return (n || c) && (!c || !c.$stable) ? !0 : r === i ? !1 : r ? i ? Tn(r, i, a) : !0 : !!i;
  return !1;
}
function Tn(e, t, u) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (t[o] !== e[o] && !Gu(u, o))
      return !0;
  }
  return !1;
}
function Nc({ vnode: e, parent: t }, u) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = u, t = t.parent;
    else
      break;
  }
}
const Qo = "components";
function Be(e, t) {
  return jc(Qo, e, !0, t) || e;
}
const Bc = Symbol.for("v-ndc");
function jc(e, t, u = !0, r = !1) {
  const n = fe || _e;
  if (n) {
    const o = n.type;
    if (e === Qo) {
      const c = Os(
        o,
        !1
      );
      if (c && (c === t || c === Pe(t) || c === Uu(Pe(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Mn(n[e] || o[e], t) || // global registration
      Mn(n.appContext[e], t)
    );
    return !i && r ? o : i;
  }
}
function Mn(e, t) {
  return e && (e[t] || e[Pe(t)] || e[Uu(Pe(t))]);
}
const qc = (e) => e.__isSuspense;
function Hc(e, t) {
  t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : Ic(e);
}
const $c = Symbol.for("v-scx"), Vc = () => Ue($c), Eu = {};
function Zt(e, t, u) {
  return ei(e, t, u);
}
function ei(e, t, {
  immediate: u,
  deep: r,
  flush: n,
  once: o,
  onTrack: i,
  onTrigger: c
} = ue) {
  if (t && o) {
    const R = t;
    t = (...U) => {
      R(...U), E();
    };
  }
  const s = _e, a = (R) => r === !0 ? R : (
    // for deep: false, only traverse root-level properties
    Ot(R, r === !1 ? 1 : void 0)
  );
  let l, p = !1, g = !1;
  if (Fe(e) ? (l = () => e.value, p = Ru(e)) : Vt(e) ? (l = () => a(e), p = !0) : q(e) ? (g = !0, p = e.some((R) => Vt(R) || Ru(R)), l = () => e.map((R) => {
    if (Fe(R))
      return R.value;
    if (Vt(R))
      return a(R);
    if ($(R))
      return Et(R, s, 2);
  })) : $(e) ? t ? l = () => Et(e, s, 2) : l = () => (x && x(), We(
    e,
    s,
    3,
    [b]
  )) : l = je, t && r) {
    const R = l;
    l = () => Ot(R());
  }
  let x, b = (R) => {
    x = y.onStop = () => {
      Et(R, s, 4), x = y.onStop = void 0;
    };
  }, D;
  if (er)
    if (b = je, t ? u && We(t, s, 3, [
      l(),
      g ? [] : void 0,
      b
    ]) : l(), n === "sync") {
      const R = Vc();
      D = R.__watcherHandles || (R.__watcherHandles = []);
    } else
      return je;
  let I = g ? new Array(e.length).fill(Eu) : Eu;
  const O = () => {
    if (!(!y.active || !y.dirty))
      if (t) {
        const R = y.run();
        (r || p || (g ? R.some((U, ee) => Dt(U, I[ee])) : Dt(R, I))) && (x && x(), We(t, s, 3, [
          R,
          // pass undefined as the old value when it's changed for the first time
          I === Eu ? void 0 : g && I[0] === Eu ? [] : I,
          b
        ]), I = R);
      } else
        y.run();
  };
  O.allowRecurse = !!t;
  let j;
  n === "sync" ? j = O : n === "post" ? j = () => De(O, s && s.suspense) : (O.pre = !0, s && (O.id = s.uid), j = () => Qr(O));
  const y = new Vr(l, je, j), M = rc(), E = () => {
    y.stop(), M && qr(M.effects, y);
  };
  return t ? u ? O() : I = y.run() : n === "post" ? De(
    y.run.bind(y),
    s && s.suspense
  ) : y.run(), D && D.push(E), E;
}
function Uc(e, t, u) {
  const r = this.proxy, n = se(e) ? e.includes(".") ? ti(r, e) : () => r[e] : e.bind(r, r);
  let o;
  $(t) ? o = t : (o = t.handler, u = t);
  const i = mu(this), c = ei(n, o.bind(r), u);
  return i(), c;
}
function ti(e, t) {
  const u = t.split(".");
  return () => {
    let r = e;
    for (let n = 0; n < u.length && r; n++)
      r = r[u[n]];
    return r;
  };
}
function Ot(e, t, u = 0, r) {
  if (!re(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (u >= t)
      return e;
    u++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), Fe(e))
    Ot(e.value, t, u, r);
  else if (q(e))
    for (let n = 0; n < e.length; n++)
      Ot(e[n], t, u, r);
  else if (yo(e) || $t(e))
    e.forEach((n) => {
      Ot(n, t, u, r);
    });
  else if (Eo(e))
    for (const n in e)
      Ot(e[n], t, u, r);
  return e;
}
function In(e, t) {
  if (fe === null)
    return e;
  const u = tr(fe) || fe.proxy, r = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [o, i, c, s = ue] = t[n];
    o && ($(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Ot(i), r.push({
      dir: o,
      instance: u,
      value: i,
      oldValue: void 0,
      arg: c,
      modifiers: s
    }));
  }
  return e;
}
function Mt(e, t, u, r) {
  const n = e.dirs, o = t && t.dirs;
  for (let i = 0; i < n.length; i++) {
    const c = n[i];
    o && (c.oldValue = o[i].value);
    let s = c.dir[r];
    s && (Nt(), We(s, u, 8, [
      e.el,
      c,
      e,
      t
    ]), Bt());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ku(e, t) {
  return $(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    he({ name: e.name }, t, { setup: e })
  ) : e;
}
const nu = (e) => !!e.type.__asyncLoader, ui = (e) => e.type.__isKeepAlive;
function Zc(e, t) {
  ri(e, "a", t);
}
function Wc(e, t) {
  ri(e, "da", t);
}
function ri(e, t, u = _e) {
  const r = e.__wdc || (e.__wdc = () => {
    let n = u;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (Yu(t, r, u), u) {
    let n = u.parent;
    for (; n && n.parent; )
      ui(n.parent.vnode) && Gc(r, t, u, n), n = n.parent;
  }
}
function Gc(e, t, u, r) {
  const n = Yu(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  en(() => {
    qr(r[t], n);
  }, u);
}
function Yu(e, t, u = _e, r = !1) {
  if (u) {
    const n = u[e] || (u[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (u.isUnmounted)
        return;
      Nt();
      const c = mu(u), s = We(t, u, e, i);
      return c(), Bt(), s;
    });
    return r ? n.unshift(o) : n.push(o), o;
  }
}
const ft = (e) => (t, u = _e) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!er || e === "sp") && Yu(e, (...r) => t(...r), u)
), Kc = ft("bm"), Xu = ft("m"), Yc = ft("bu"), Xc = ft("u"), Jc = ft("bum"), en = ft("um"), Qc = ft("sp"), es = ft(
  "rtg"
), ts = ft(
  "rtc"
);
function us(e, t = _e) {
  Yu("ec", e, t);
}
function zt(e, t, u, r) {
  let n;
  const o = u && u[r];
  if (q(e) || se(e)) {
    n = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      n[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    n = new Array(e);
    for (let i = 0; i < e; i++)
      n[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (re(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (i, c) => t(i, c, void 0, o && o[c])
      );
    else {
      const i = Object.keys(e);
      n = new Array(i.length);
      for (let c = 0, s = i.length; c < s; c++) {
        const a = i[c];
        n[c] = t(e[a], a, c, o && o[c]);
      }
    }
  else
    n = [];
  return u && (u[r] = n), n;
}
function Rn(e, t, u = {}, r, n) {
  if (fe.isCE || fe.parent && nu(fe.parent) && fe.parent.isCE)
    return t !== "default" && (u.name = t), de("slot", u, r && r());
  let o = e[t];
  o && o._c && (o._d = !1), F();
  const i = o && ni(o(u)), c = ye(
    ce,
    {
      key: u.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !n && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), o && o._c && (o._d = !0), c;
}
function ni(e) {
  return e.some((t) => Lu(t) ? !(t.type === St || t.type === ce && !ni(t.children)) : !0) ? e : null;
}
const Dr = (e) => e ? gi(e) ? tr(e) || e.proxy : Dr(e.parent) : null, ou = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ he(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Dr(e.parent),
    $root: (e) => Dr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => tn(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Qr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Jr.bind(e.proxy)),
    $watch: (e) => Uc.bind(e)
  })
), lr = (e, t) => e !== ue && !e.__isScriptSetup && Z(e, t), rs = {
  get({ _: e }, t) {
    const { ctx: u, setupState: r, data: n, props: o, accessCache: i, type: c, appContext: s } = e;
    let a;
    if (t[0] !== "$") {
      const x = i[t];
      if (x !== void 0)
        switch (x) {
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
        if (lr(r, t))
          return i[t] = 1, r[t];
        if (n !== ue && Z(n, t))
          return i[t] = 2, n[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && Z(a, t)
        )
          return i[t] = 3, o[t];
        if (u !== ue && Z(u, t))
          return i[t] = 4, u[t];
        Sr && (i[t] = 0);
      }
    }
    const l = ou[t];
    let p, g;
    if (l)
      return t === "$attrs" && Se(e, "get", t), l(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (u !== ue && Z(u, t))
      return i[t] = 4, u[t];
    if (
      // global properties
      g = s.config.globalProperties, Z(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, u) {
    const { data: r, setupState: n, ctx: o } = e;
    return lr(n, t) ? (n[t] = u, !0) : r !== ue && Z(r, t) ? (r[t] = u, !0) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = u, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: u, ctx: r, appContext: n, propsOptions: o }
  }, i) {
    let c;
    return !!u[i] || e !== ue && Z(e, i) || lr(t, i) || (c = o[0]) && Z(c, i) || Z(r, i) || Z(ou, i) || Z(n.config.globalProperties, i);
  },
  defineProperty(e, t, u) {
    return u.get != null ? e._.accessCache[t] = 0 : Z(u, "value") && this.set(e, t, u.value, null), Reflect.defineProperty(e, t, u);
  }
};
function On(e) {
  return q(e) ? e.reduce(
    (t, u) => (t[u] = null, t),
    {}
  ) : e;
}
let Sr = !0;
function ns(e) {
  const t = tn(e), u = e.proxy, r = e.ctx;
  Sr = !1, t.beforeCreate && zn(t.beforeCreate, e, "bc");
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
    beforeMount: p,
    mounted: g,
    beforeUpdate: x,
    updated: b,
    activated: D,
    deactivated: I,
    beforeDestroy: O,
    beforeUnmount: j,
    destroyed: y,
    unmounted: M,
    render: E,
    renderTracked: R,
    renderTriggered: U,
    errorCaptured: ee,
    serverPrefetch: te,
    // public API
    expose: pe,
    inheritAttrs: we,
    // assets
    components: be,
    directives: Ce,
    filters: Me
  } = t;
  if (a && os(a, r, null), i)
    for (const Y in i) {
      const W = i[Y];
      $(W) && (r[Y] = W.bind(u));
    }
  if (n) {
    const Y = n.call(u, u);
    re(Y) && (e.data = At(Y));
  }
  if (Sr = !0, o)
    for (const Y in o) {
      const W = o[Y], Ie = $(W) ? W.bind(u, u) : $(W.get) ? W.get.bind(u, u) : je, Ke = !$(W) && $(W.set) ? W.set.bind(u) : je, Re = at({
        get: Ie,
        set: Ke
      });
      Object.defineProperty(r, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (oe) => Re.value = oe
      });
    }
  if (c)
    for (const Y in c)
      oi(c[Y], r, u, Y);
  if (s) {
    const Y = $(s) ? s.call(u) : s;
    Reflect.ownKeys(Y).forEach((W) => {
      et(W, Y[W]);
    });
  }
  l && zn(l, e, "c");
  function ne(Y, W) {
    q(W) ? W.forEach((Ie) => Y(Ie.bind(u))) : W && Y(W.bind(u));
  }
  if (ne(Kc, p), ne(Xu, g), ne(Yc, x), ne(Xc, b), ne(Zc, D), ne(Wc, I), ne(us, ee), ne(ts, R), ne(es, U), ne(Jc, j), ne(en, M), ne(Qc, te), q(pe))
    if (pe.length) {
      const Y = e.exposed || (e.exposed = {});
      pe.forEach((W) => {
        Object.defineProperty(Y, W, {
          get: () => u[W],
          set: (Ie) => u[W] = Ie
        });
      });
    } else
      e.exposed || (e.exposed = {});
  E && e.render === je && (e.render = E), we != null && (e.inheritAttrs = we), be && (e.components = be), Ce && (e.directives = Ce);
}
function os(e, t, u = je) {
  q(e) && (e = Fr(e));
  for (const r in e) {
    const n = e[r];
    let o;
    re(n) ? "default" in n ? o = Ue(
      n.from || r,
      n.default,
      !0
    ) : o = Ue(n.from || r) : o = Ue(n), Fe(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function zn(e, t, u) {
  We(
    q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    u
  );
}
function oi(e, t, u, r) {
  const n = r.includes(".") ? ti(u, r) : () => u[r];
  if (se(e)) {
    const o = t[e];
    $(o) && Zt(n, o);
  } else if ($(e))
    Zt(n, e.bind(u));
  else if (re(e))
    if (q(e))
      e.forEach((o) => oi(o, t, u, r));
    else {
      const o = $(e.handler) ? e.handler.bind(u) : t[e.handler];
      $(o) && Zt(n, o, e);
    }
}
function tn(e) {
  const t = e.type, { mixins: u, extends: r } = t, {
    mixins: n,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let s;
  return c ? s = c : !n.length && !u && !r ? s = t : (s = {}, n.length && n.forEach(
    (a) => zu(s, a, i, !0)
  ), zu(s, t, i)), re(t) && o.set(t, s), s;
}
function zu(e, t, u, r = !1) {
  const { mixins: n, extends: o } = t;
  o && zu(e, o, u, !0), n && n.forEach(
    (i) => zu(e, i, u, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const c = is[i] || u && u[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const is = {
  data: Pn,
  props: Ln,
  emits: Ln,
  // objects
  methods: ru,
  computed: ru,
  // lifecycle
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  // assets
  components: ru,
  directives: ru,
  // watch
  watch: ss,
  // provide / inject
  provide: Pn,
  inject: cs
};
function Pn(e, t) {
  return t ? e ? function() {
    return he(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cs(e, t) {
  return ru(Fr(e), Fr(t));
}
function Fr(e) {
  if (q(e)) {
    const t = {};
    for (let u = 0; u < e.length; u++)
      t[e[u]] = e[u];
    return t;
  }
  return e;
}
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ru(e, t) {
  return e ? he(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ln(e, t) {
  return e ? q(e) && q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : he(
    /* @__PURE__ */ Object.create(null),
    On(e),
    On(t ?? {})
  ) : t;
}
function ss(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const u = he(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    u[r] = ve(e[r], t[r]);
  return u;
}
function ii() {
  return {
    app: null,
    config: {
      isNativeTag: $i,
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
let as = 0;
function ls(e, t) {
  return function(r, n = null) {
    $(r) || (r = he({}, r)), n != null && !re(n) && (n = null);
    const o = ii(), i = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const s = o.app = {
      _uid: as++,
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
        return i.has(a) || (a && $(a.install) ? (i.add(a), a.install(s, ...l)) : $(a) && (i.add(a), a(s, ...l))), s;
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
      mount(a, l, p) {
        if (!c) {
          const g = de(r, n);
          return g.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), l && t ? t(g, a) : e(g, a, p), c = !0, s._container = a, a.__vue_app__ = s, tr(g.component) || g.component.proxy;
        }
      },
      unmount() {
        c && (e(null, s._container), delete s._container.__vue_app__);
      },
      provide(a, l) {
        return o.provides[a] = l, s;
      },
      runWithContext(a) {
        Pu = s;
        try {
          return a();
        } finally {
          Pu = null;
        }
      }
    };
    return s;
  };
}
let Pu = null;
function et(e, t) {
  if (_e) {
    let u = _e.provides;
    const r = _e.parent && _e.parent.provides;
    r === u && (u = _e.provides = Object.create(r)), u[e] = t;
  }
}
function Ue(e, t, u = !1) {
  const r = _e || fe;
  if (r || Pu) {
    const n = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Pu._context.provides;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return u && $(t) ? t.call(r && r.proxy) : t;
  }
}
function fs(e, t, u, r = !1) {
  const n = {}, o = {};
  Iu(o, Qu, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ci(e, t, n, o);
  for (const i in e.propsOptions[0])
    i in n || (n[i] = void 0);
  u ? e.props = r ? n : yc(n) : e.type.props ? e.props = n : e.props = o, e.attrs = o;
}
function ds(e, t, u, r) {
  const {
    props: n,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = K(n), [s] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const l = e.vnode.dynamicProps;
      for (let p = 0; p < l.length; p++) {
        let g = l[p];
        if (Gu(e.emitsOptions, g))
          continue;
        const x = t[g];
        if (s)
          if (Z(o, g))
            x !== o[g] && (o[g] = x, a = !0);
          else {
            const b = Pe(g);
            n[b] = Tr(
              s,
              c,
              b,
              x,
              e,
              !1
            );
          }
        else
          x !== o[g] && (o[g] = x, a = !0);
      }
    }
  } else {
    ci(e, t, n, o) && (a = !0);
    let l;
    for (const p in c)
      (!t || // for camelCase
      !Z(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = $e(p)) === p || !Z(t, l))) && (s ? u && // for camelCase
      (u[p] !== void 0 || // for kebab-case
      u[l] !== void 0) && (n[p] = Tr(
        s,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete n[p]);
    if (o !== c)
      for (const p in o)
        (!t || !Z(t, p)) && (delete o[p], a = !0);
  }
  a && lt(e, "set", "$attrs");
}
function ci(e, t, u, r) {
  const [n, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let s in t) {
      if (Fu(s))
        continue;
      const a = t[s];
      let l;
      n && Z(n, l = Pe(s)) ? !o || !o.includes(l) ? u[l] = a : (c || (c = {}))[l] = a : Gu(e.emitsOptions, s) || (!(s in r) || a !== r[s]) && (r[s] = a, i = !0);
    }
  if (o) {
    const s = K(u), a = c || ue;
    for (let l = 0; l < o.length; l++) {
      const p = o[l];
      u[p] = Tr(
        n,
        s,
        p,
        a[p],
        e,
        !Z(a, p)
      );
    }
  }
  return i;
}
function Tr(e, t, u, r, n, o) {
  const i = e[u];
  if (i != null) {
    const c = Z(i, "default");
    if (c && r === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && $(s)) {
        const { propsDefaults: a } = n;
        if (u in a)
          r = a[u];
        else {
          const l = mu(n);
          r = a[u] = s.call(
            null,
            t
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
    ] && (r === "" || r === $e(u)) && (r = !0));
  }
  return r;
}
function si(e, t, u = !1) {
  const r = t.propsCache, n = r.get(e);
  if (n)
    return n;
  const o = e.props, i = {}, c = [];
  let s = !1;
  if (!$(e)) {
    const l = (p) => {
      s = !0;
      const [g, x] = si(p, t, !0);
      he(i, g), x && c.push(...x);
    };
    !u && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  if (!o && !s)
    return re(e) && r.set(e, Ht), Ht;
  if (q(o))
    for (let l = 0; l < o.length; l++) {
      const p = Pe(o[l]);
      Nn(p) && (i[p] = ue);
    }
  else if (o)
    for (const l in o) {
      const p = Pe(l);
      if (Nn(p)) {
        const g = o[l], x = i[p] = q(g) || $(g) ? { type: g } : he({}, g);
        if (x) {
          const b = qn(Boolean, x.type), D = qn(String, x.type);
          x[
            0
            /* shouldCast */
          ] = b > -1, x[
            1
            /* shouldCastTrue */
          ] = D < 0 || b < D, (b > -1 || Z(x, "default")) && c.push(p);
        }
      }
    }
  const a = [i, c];
  return re(e) && r.set(e, a), a;
}
function Nn(e) {
  return e[0] !== "$";
}
function Bn(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function jn(e, t) {
  return Bn(e) === Bn(t);
}
function qn(e, t) {
  return q(t) ? t.findIndex((u) => jn(u, e)) : $(t) && jn(t, e) ? 0 : -1;
}
const ai = (e) => e[0] === "_" || e === "$stable", un = (e) => q(e) ? e.map(tt) : [tt(e)], hs = (e, t, u) => {
  if (t._n)
    return t;
  const r = Ve((...n) => un(t(...n)), u);
  return r._c = !1, r;
}, li = (e, t, u) => {
  const r = e._ctx;
  for (const n in e) {
    if (ai(n))
      continue;
    const o = e[n];
    if ($(o))
      t[n] = hs(n, o, r);
    else if (o != null) {
      const i = un(o);
      t[n] = () => i;
    }
  }
}, fi = (e, t) => {
  const u = un(t);
  e.slots.default = () => u;
}, ps = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const u = t._;
    u ? (e.slots = K(t), Iu(t, "_", u)) : li(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && fi(e, t);
  Iu(e.slots, Qu, 1);
}, bs = (e, t, u) => {
  const { vnode: r, slots: n } = e;
  let o = !0, i = ue;
  if (r.shapeFlag & 32) {
    const c = t._;
    c ? u && c === 1 ? o = !1 : (he(n, t), !u && c === 1 && delete n._) : (o = !t.$stable, li(t, n)), i = t;
  } else
    t && (fi(e, t), i = { default: 1 });
  if (o)
    for (const c in n)
      !ai(c) && i[c] == null && delete n[c];
};
function Mr(e, t, u, r, n = !1) {
  if (q(e)) {
    e.forEach(
      (g, x) => Mr(
        g,
        t && (q(t) ? t[x] : t),
        u,
        r,
        n
      )
    );
    return;
  }
  if (nu(r) && !n)
    return;
  const o = r.shapeFlag & 4 ? tr(r.component) || r.component.proxy : r.el, i = n ? null : o, { i: c, r: s } = e, a = t && t.r, l = c.refs === ue ? c.refs = {} : c.refs, p = c.setupState;
  if (a != null && a !== s && (se(a) ? (l[a] = null, Z(p, a) && (p[a] = null)) : Fe(a) && (a.value = null)), $(s))
    Et(s, c, 12, [i, l]);
  else {
    const g = se(s), x = Fe(s);
    if (g || x) {
      const b = () => {
        if (e.f) {
          const D = g ? Z(p, s) ? p[s] : l[s] : s.value;
          n ? q(D) && qr(D, o) : q(D) ? D.includes(o) || D.push(o) : g ? (l[s] = [o], Z(p, s) && (p[s] = l[s])) : (s.value = [o], e.k && (l[e.k] = s.value));
        } else
          g ? (l[s] = i, Z(p, s) && (p[s] = i)) : x && (s.value = i, e.k && (l[e.k] = i));
      };
      i ? (b.id = -1, De(b, u)) : b();
    }
  }
}
const De = Hc;
function gs(e) {
  return ms(e);
}
function ms(e, t) {
  const u = Do();
  u.__VUE__ = !0;
  const {
    insert: r,
    remove: n,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: s,
    setText: a,
    setElementText: l,
    parentNode: p,
    nextSibling: g,
    setScopeId: x = je,
    insertStaticContent: b
  } = e, D = (h, d, m, _ = null, w = null, C = null, S = void 0, v = null, A = !!d.dynamicChildren) => {
    if (h === d)
      return;
    h && !tu(h, d) && (_ = Ye(h), oe(h, w, C, !0), h = null), d.patchFlag === -2 && (A = !1, d.dynamicChildren = null);
    const { type: k, ref: T, shapeFlag: N } = d;
    switch (k) {
      case Ju:
        I(h, d, m, _);
        break;
      case St:
        O(h, d, m, _);
        break;
      case Tu:
        h == null && j(d, m, _, S);
        break;
      case ce:
        be(
          h,
          d,
          m,
          _,
          w,
          C,
          S,
          v,
          A
        );
        break;
      default:
        N & 1 ? E(
          h,
          d,
          m,
          _,
          w,
          C,
          S,
          v,
          A
        ) : N & 6 ? Ce(
          h,
          d,
          m,
          _,
          w,
          C,
          S,
          v,
          A
        ) : (N & 64 || N & 128) && k.process(
          h,
          d,
          m,
          _,
          w,
          C,
          S,
          v,
          A,
          Ne
        );
    }
    T != null && w && Mr(T, h && h.ref, C, d || h, !d);
  }, I = (h, d, m, _) => {
    if (h == null)
      r(
        d.el = c(d.children),
        m,
        _
      );
    else {
      const w = d.el = h.el;
      d.children !== h.children && a(w, d.children);
    }
  }, O = (h, d, m, _) => {
    h == null ? r(
      d.el = s(d.children || ""),
      m,
      _
    ) : d.el = h.el;
  }, j = (h, d, m, _) => {
    [h.el, h.anchor] = b(
      h.children,
      d,
      m,
      _,
      h.el,
      h.anchor
    );
  }, y = ({ el: h, anchor: d }, m, _) => {
    let w;
    for (; h && h !== d; )
      w = g(h), r(h, m, _), h = w;
    r(d, m, _);
  }, M = ({ el: h, anchor: d }) => {
    let m;
    for (; h && h !== d; )
      m = g(h), n(h), h = m;
    n(d);
  }, E = (h, d, m, _, w, C, S, v, A) => {
    d.type === "svg" ? S = "svg" : d.type === "math" && (S = "mathml"), h == null ? R(
      d,
      m,
      _,
      w,
      C,
      S,
      v,
      A
    ) : te(
      h,
      d,
      w,
      C,
      S,
      v,
      A
    );
  }, R = (h, d, m, _, w, C, S, v) => {
    let A, k;
    const { props: T, shapeFlag: N, transition: z, dirs: B } = h;
    if (A = h.el = i(
      h.type,
      C,
      T && T.is,
      T
    ), N & 8 ? l(A, h.children) : N & 16 && ee(
      h.children,
      A,
      null,
      _,
      w,
      fr(h, C),
      S,
      v
    ), B && Mt(h, null, _, "created"), U(A, h, h.scopeId, S, _), T) {
      for (const G in T)
        G !== "value" && !Fu(G) && o(
          A,
          G,
          null,
          T[G],
          C,
          h.children,
          _,
          w,
          ke
        );
      "value" in T && o(A, "value", null, T.value, C), (k = T.onVnodeBeforeMount) && Qe(k, _, h);
    }
    B && Mt(h, null, _, "beforeMount");
    const V = xs(w, z);
    V && z.beforeEnter(A), r(A, d, m), ((k = T && T.onVnodeMounted) || V || B) && De(() => {
      k && Qe(k, _, h), V && z.enter(A), B && Mt(h, null, _, "mounted");
    }, w);
  }, U = (h, d, m, _, w) => {
    if (m && x(h, m), _)
      for (let C = 0; C < _.length; C++)
        x(h, _[C]);
    if (w) {
      let C = w.subTree;
      if (d === C) {
        const S = w.vnode;
        U(
          h,
          S,
          S.scopeId,
          S.slotScopeIds,
          w.parent
        );
      }
    }
  }, ee = (h, d, m, _, w, C, S, v, A = 0) => {
    for (let k = A; k < h.length; k++) {
      const T = h[k] = v ? _t(h[k]) : tt(h[k]);
      D(
        null,
        T,
        d,
        m,
        _,
        w,
        C,
        S,
        v
      );
    }
  }, te = (h, d, m, _, w, C, S) => {
    const v = d.el = h.el;
    let { patchFlag: A, dynamicChildren: k, dirs: T } = d;
    A |= h.patchFlag & 16;
    const N = h.props || ue, z = d.props || ue;
    let B;
    if (m && It(m, !1), (B = z.onVnodeBeforeUpdate) && Qe(B, m, d, h), T && Mt(d, h, m, "beforeUpdate"), m && It(m, !0), k ? pe(
      h.dynamicChildren,
      k,
      v,
      m,
      _,
      fr(d, w),
      C
    ) : S || W(
      h,
      d,
      v,
      null,
      m,
      _,
      fr(d, w),
      C,
      !1
    ), A > 0) {
      if (A & 16)
        we(
          v,
          d,
          N,
          z,
          m,
          _,
          w
        );
      else if (A & 2 && N.class !== z.class && o(v, "class", null, z.class, w), A & 4 && o(v, "style", N.style, z.style, w), A & 8) {
        const V = d.dynamicProps;
        for (let G = 0; G < V.length; G++) {
          const J = V[G], ie = N[J], Ee = z[J];
          (Ee !== ie || J === "value") && o(
            v,
            J,
            ie,
            Ee,
            w,
            h.children,
            m,
            _,
            ke
          );
        }
      }
      A & 1 && h.children !== d.children && l(v, d.children);
    } else
      !S && k == null && we(
        v,
        d,
        N,
        z,
        m,
        _,
        w
      );
    ((B = z.onVnodeUpdated) || T) && De(() => {
      B && Qe(B, m, d, h), T && Mt(d, h, m, "updated");
    }, _);
  }, pe = (h, d, m, _, w, C, S) => {
    for (let v = 0; v < d.length; v++) {
      const A = h[v], k = d[v], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (A.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !tu(A, k) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 70) ? p(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      D(
        A,
        k,
        T,
        null,
        _,
        w,
        C,
        S,
        !0
      );
    }
  }, we = (h, d, m, _, w, C, S) => {
    if (m !== _) {
      if (m !== ue)
        for (const v in m)
          !Fu(v) && !(v in _) && o(
            h,
            v,
            m[v],
            null,
            S,
            d.children,
            w,
            C,
            ke
          );
      for (const v in _) {
        if (Fu(v))
          continue;
        const A = _[v], k = m[v];
        A !== k && v !== "value" && o(
          h,
          v,
          k,
          A,
          S,
          d.children,
          w,
          C,
          ke
        );
      }
      "value" in _ && o(h, "value", m.value, _.value, S);
    }
  }, be = (h, d, m, _, w, C, S, v, A) => {
    const k = d.el = h ? h.el : c(""), T = d.anchor = h ? h.anchor : c("");
    let { patchFlag: N, dynamicChildren: z, slotScopeIds: B } = d;
    B && (v = v ? v.concat(B) : B), h == null ? (r(k, m, _), r(T, m, _), ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      m,
      T,
      w,
      C,
      S,
      v,
      A
    )) : N > 0 && N & 64 && z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (pe(
      h.dynamicChildren,
      z,
      m,
      w,
      C,
      S,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || w && d === w.subTree) && di(
      h,
      d,
      !0
      /* shallow */
    )) : W(
      h,
      d,
      m,
      T,
      w,
      C,
      S,
      v,
      A
    );
  }, Ce = (h, d, m, _, w, C, S, v, A) => {
    d.slotScopeIds = v, h == null ? d.shapeFlag & 512 ? w.ctx.activate(
      d,
      m,
      _,
      S,
      A
    ) : Me(
      d,
      m,
      _,
      w,
      C,
      S,
      A
    ) : Ae(h, d, A);
  }, Me = (h, d, m, _, w, C, S) => {
    const v = h.component = Fs(
      h,
      _,
      w
    );
    if (ui(h) && (v.ctx.renderer = Ne), Ts(v), v.asyncDep) {
      if (w && w.registerDep(v, ne), !h.el) {
        const A = v.subTree = de(St);
        O(null, A, d, m);
      }
    } else
      ne(
        v,
        h,
        d,
        m,
        w,
        C,
        S
      );
  }, Ae = (h, d, m) => {
    const _ = d.component = h.component;
    if (Lc(h, d, m))
      if (_.asyncDep && !_.asyncResolved) {
        Y(_, d, m);
        return;
      } else
        _.next = d, Mc(_.update), _.effect.dirty = !0, _.update();
    else
      d.el = h.el, _.vnode = d;
  }, ne = (h, d, m, _, w, C, S) => {
    const v = () => {
      if (h.isMounted) {
        let { next: T, bu: N, u: z, parent: B, vnode: V } = h;
        {
          const st = hi(h);
          if (st) {
            T && (T.el = V.el, Y(h, T, S)), st.asyncDep.then(() => {
              h.isUnmounted || v();
            });
            return;
          }
        }
        let G = T, J;
        It(h, !1), T ? (T.el = V.el, Y(h, T, S)) : T = V, N && cr(N), (J = T.props && T.props.onVnodeBeforeUpdate) && Qe(J, B, T, V), It(h, !0);
        const ie = ar(h), Ee = h.subTree;
        h.subTree = ie, D(
          Ee,
          ie,
          // parent may have changed if it's in a teleport
          p(Ee.el),
          // anchor may have changed if it's in a fragment
          Ye(Ee),
          h,
          w,
          C
        ), T.el = ie.el, G === null && Nc(h, ie.el), z && De(z, w), (J = T.props && T.props.onVnodeUpdated) && De(
          () => Qe(J, B, T, V),
          w
        );
      } else {
        let T;
        const { el: N, props: z } = d, { bm: B, m: V, parent: G } = h, J = nu(d);
        if (It(h, !1), B && cr(B), !J && (T = z && z.onVnodeBeforeMount) && Qe(T, G, d), It(h, !0), N && Je) {
          const ie = () => {
            h.subTree = ar(h), Je(
              N,
              h.subTree,
              h,
              w,
              null
            );
          };
          J ? d.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !h.isUnmounted && ie()
          ) : ie();
        } else {
          const ie = h.subTree = ar(h);
          D(
            null,
            ie,
            m,
            _,
            h,
            w,
            C
          ), d.el = ie.el;
        }
        if (V && De(V, w), !J && (T = z && z.onVnodeMounted)) {
          const ie = d;
          De(
            () => Qe(T, G, ie),
            w
          );
        }
        (d.shapeFlag & 256 || G && nu(G.vnode) && G.vnode.shapeFlag & 256) && h.a && De(h.a, w), h.isMounted = !0, d = m = _ = null;
      }
    }, A = h.effect = new Vr(
      v,
      je,
      () => Qr(k),
      h.scope
      // track it in component's effect scope
    ), k = h.update = () => {
      A.dirty && A.run();
    };
    k.id = h.uid, It(h, !0), k();
  }, Y = (h, d, m) => {
    d.component = h;
    const _ = h.vnode.props;
    h.vnode = d, h.next = null, ds(h, d.props, _, m), bs(h, d.children, m), Nt(), Fn(h), Bt();
  }, W = (h, d, m, _, w, C, S, v, A = !1) => {
    const k = h && h.children, T = h ? h.shapeFlag : 0, N = d.children, { patchFlag: z, shapeFlag: B } = d;
    if (z > 0) {
      if (z & 128) {
        Ke(
          k,
          N,
          m,
          _,
          w,
          C,
          S,
          v,
          A
        );
        return;
      } else if (z & 256) {
        Ie(
          k,
          N,
          m,
          _,
          w,
          C,
          S,
          v,
          A
        );
        return;
      }
    }
    B & 8 ? (T & 16 && ke(k, w, C), N !== k && l(m, N)) : T & 16 ? B & 16 ? Ke(
      k,
      N,
      m,
      _,
      w,
      C,
      S,
      v,
      A
    ) : ke(k, w, C, !0) : (T & 8 && l(m, ""), B & 16 && ee(
      N,
      m,
      _,
      w,
      C,
      S,
      v,
      A
    ));
  }, Ie = (h, d, m, _, w, C, S, v, A) => {
    h = h || Ht, d = d || Ht;
    const k = h.length, T = d.length, N = Math.min(k, T);
    let z;
    for (z = 0; z < N; z++) {
      const B = d[z] = A ? _t(d[z]) : tt(d[z]);
      D(
        h[z],
        B,
        m,
        null,
        w,
        C,
        S,
        v,
        A
      );
    }
    k > T ? ke(
      h,
      w,
      C,
      !0,
      !1,
      N
    ) : ee(
      d,
      m,
      _,
      w,
      C,
      S,
      v,
      A,
      N
    );
  }, Ke = (h, d, m, _, w, C, S, v, A) => {
    let k = 0;
    const T = d.length;
    let N = h.length - 1, z = T - 1;
    for (; k <= N && k <= z; ) {
      const B = h[k], V = d[k] = A ? _t(d[k]) : tt(d[k]);
      if (tu(B, V))
        D(
          B,
          V,
          m,
          null,
          w,
          C,
          S,
          v,
          A
        );
      else
        break;
      k++;
    }
    for (; k <= N && k <= z; ) {
      const B = h[N], V = d[z] = A ? _t(d[z]) : tt(d[z]);
      if (tu(B, V))
        D(
          B,
          V,
          m,
          null,
          w,
          C,
          S,
          v,
          A
        );
      else
        break;
      N--, z--;
    }
    if (k > N) {
      if (k <= z) {
        const B = z + 1, V = B < T ? d[B].el : _;
        for (; k <= z; )
          D(
            null,
            d[k] = A ? _t(d[k]) : tt(d[k]),
            m,
            V,
            w,
            C,
            S,
            v,
            A
          ), k++;
      }
    } else if (k > z)
      for (; k <= N; )
        oe(h[k], w, C, !0), k++;
    else {
      const B = k, V = k, G = /* @__PURE__ */ new Map();
      for (k = V; k <= z; k++) {
        const me = d[k] = A ? _t(d[k]) : tt(d[k]);
        me.key != null && G.set(me.key, k);
      }
      let J, ie = 0;
      const Ee = z - V + 1;
      let st = !1, Jt = 0;
      const gt = new Array(Ee);
      for (k = 0; k < Ee; k++)
        gt[k] = 0;
      for (k = B; k <= N; k++) {
        const me = h[k];
        if (ie >= Ee) {
          oe(me, w, C, !0);
          continue;
        }
        let ze;
        if (me.key != null)
          ze = G.get(me.key);
        else
          for (J = V; J <= z; J++)
            if (gt[J - V] === 0 && tu(me, d[J])) {
              ze = J;
              break;
            }
        ze === void 0 ? oe(me, w, C, !0) : (gt[ze - V] = k + 1, ze >= Jt ? Jt = ze : st = !0, D(
          me,
          d[ze],
          m,
          null,
          w,
          C,
          S,
          v,
          A
        ), ie++);
      }
      const Qt = st ? _s(gt) : Ht;
      for (J = Qt.length - 1, k = Ee - 1; k >= 0; k--) {
        const me = V + k, ze = d[me], eu = me + 1 < T ? d[me + 1].el : _;
        gt[k] === 0 ? D(
          null,
          ze,
          m,
          eu,
          w,
          C,
          S,
          v,
          A
        ) : st && (J < 0 || k !== Qt[J] ? Re(ze, m, eu, 2) : J--);
      }
    }
  }, Re = (h, d, m, _, w = null) => {
    const { el: C, type: S, transition: v, children: A, shapeFlag: k } = h;
    if (k & 6) {
      Re(h.component.subTree, d, m, _);
      return;
    }
    if (k & 128) {
      h.suspense.move(d, m, _);
      return;
    }
    if (k & 64) {
      S.move(h, d, m, Ne);
      return;
    }
    if (S === ce) {
      r(C, d, m);
      for (let N = 0; N < A.length; N++)
        Re(A[N], d, m, _);
      r(h.anchor, d, m);
      return;
    }
    if (S === Tu) {
      y(h, d, m);
      return;
    }
    if (_ !== 2 && k & 1 && v)
      if (_ === 0)
        v.beforeEnter(C), r(C, d, m), De(() => v.enter(C), w);
      else {
        const { leave: N, delayLeave: z, afterLeave: B } = v, V = () => r(C, d, m), G = () => {
          N(C, () => {
            V(), B && B();
          });
        };
        z ? z(C, V, G) : G();
      }
    else
      r(C, d, m);
  }, oe = (h, d, m, _ = !1, w = !1) => {
    const {
      type: C,
      props: S,
      ref: v,
      children: A,
      dynamicChildren: k,
      shapeFlag: T,
      patchFlag: N,
      dirs: z
    } = h;
    if (v != null && Mr(v, null, m, h, !0), T & 256) {
      d.ctx.deactivate(h);
      return;
    }
    const B = T & 1 && z, V = !nu(h);
    let G;
    if (V && (G = S && S.onVnodeBeforeUnmount) && Qe(G, d, h), T & 6)
      ht(h.component, m, _);
    else {
      if (T & 128) {
        h.suspense.unmount(m, _);
        return;
      }
      B && Mt(h, null, d, "beforeUnmount"), T & 64 ? h.type.remove(
        h,
        d,
        m,
        w,
        Ne,
        _
      ) : k && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== ce || N > 0 && N & 64) ? ke(
        k,
        d,
        m,
        !1,
        !0
      ) : (C === ce && N & 384 || !w && T & 16) && ke(A, d, m), _ && Oe(h);
    }
    (V && (G = S && S.onVnodeUnmounted) || B) && De(() => {
      G && Qe(G, d, h), B && Mt(h, null, d, "unmounted");
    }, m);
  }, Oe = (h) => {
    const { type: d, el: m, anchor: _, transition: w } = h;
    if (d === ce) {
      ct(m, _);
      return;
    }
    if (d === Tu) {
      M(h);
      return;
    }
    const C = () => {
      n(m), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (h.shapeFlag & 1 && w && !w.persisted) {
      const { leave: S, delayLeave: v } = w, A = () => S(m, C);
      v ? v(h.el, C, A) : A();
    } else
      C();
  }, ct = (h, d) => {
    let m;
    for (; h !== d; )
      m = g(h), n(h), h = m;
    n(d);
  }, ht = (h, d, m) => {
    const { bum: _, scope: w, update: C, subTree: S, um: v } = h;
    _ && cr(_), w.stop(), C && (C.active = !1, oe(S, h, d, m)), v && De(v, d), De(() => {
      h.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
  }, ke = (h, d, m, _ = !1, w = !1, C = 0) => {
    for (let S = C; S < h.length; S++)
      oe(h[S], d, m, _, w);
  }, Ye = (h) => h.shapeFlag & 6 ? Ye(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : g(h.anchor || h.el);
  let pt = !1;
  const bt = (h, d, m) => {
    h == null ? d._vnode && oe(d._vnode, null, null, !0) : D(
      d._vnode || null,
      h,
      d,
      null,
      null,
      null,
      m
    ), pt || (pt = !0, Fn(), Ko(), pt = !1), d._vnode = h;
  }, Ne = {
    p: D,
    um: oe,
    m: Re,
    r: Oe,
    mt: Me,
    mc: ee,
    pc: W,
    pbc: pe,
    n: Ye,
    o: e
  };
  let Xe, Je;
  return t && ([Xe, Je] = t(
    Ne
  )), {
    render: bt,
    hydrate: Xe,
    createApp: ls(bt, Xe)
  };
}
function fr({ type: e, props: t }, u) {
  return u === "svg" && e === "foreignObject" || u === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : u;
}
function It({ effect: e, update: t }, u) {
  e.allowRecurse = t.allowRecurse = u;
}
function xs(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function di(e, t, u = !1) {
  const r = e.children, n = t.children;
  if (q(r) && q(n))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let c = n[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = n[o] = _t(n[o]), c.el = i.el), u || di(i, c)), c.type === Ju && (c.el = i.el);
    }
}
function _s(e) {
  const t = e.slice(), u = [0];
  let r, n, o, i, c;
  const s = e.length;
  for (r = 0; r < s; r++) {
    const a = e[r];
    if (a !== 0) {
      if (n = u[u.length - 1], e[n] < a) {
        t[r] = n, u.push(r);
        continue;
      }
      for (o = 0, i = u.length - 1; o < i; )
        c = o + i >> 1, e[u[c]] < a ? o = c + 1 : i = c;
      a < e[u[o]] && (o > 0 && (t[r] = u[o - 1]), u[o] = r);
    }
  }
  for (o = u.length, i = u[o - 1]; o-- > 0; )
    u[o] = i, i = t[i];
  return u;
}
function hi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : hi(t);
}
const ws = (e) => e.__isTeleport, ce = Symbol.for("v-fgt"), Ju = Symbol.for("v-txt"), St = Symbol.for("v-cmt"), Tu = Symbol.for("v-stc"), iu = [];
let Ze = null;
function F(e = !1) {
  iu.push(Ze = e ? null : []);
}
function ks() {
  iu.pop(), Ze = iu[iu.length - 1] || null;
}
let lu = 1;
function Hn(e) {
  lu += e;
}
function pi(e) {
  return e.dynamicChildren = lu > 0 ? Ze || Ht : null, ks(), lu > 0 && Ze && Ze.push(e), e;
}
function P(e, t, u, r, n, o) {
  return pi(
    f(
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
function ye(e, t, u, r, n) {
  return pi(
    de(
      e,
      t,
      u,
      r,
      n,
      !0
    )
  );
}
function Lu(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function tu(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Qu = "__vInternal", bi = ({ key: e }) => e ?? null, Mu = ({
  ref: e,
  ref_key: t,
  ref_for: u
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || Fe(e) || $(e) ? { i: fe, r: e, k: t, f: !!u } : e : null);
function f(e, t = null, u = null, r = 0, n = null, o = e === ce ? 0 : 1, i = !1, c = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bi(t),
    ref: t && Mu(t),
    scopeId: Jo,
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
    ctx: fe
  };
  return c ? (rn(s, u), o & 128 && e.normalize(s)) : u && (s.shapeFlag |= se(u) ? 8 : 16), lu > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ze && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && Ze.push(s), s;
}
const de = vs;
function vs(e, t = null, u = null, r = 0, n = null, o = !1) {
  if ((!e || e === Bc) && (e = St), Lu(e)) {
    const c = Ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return u && rn(c, u), lu > 0 && !o && Ze && (c.shapeFlag & 6 ? Ze[Ze.indexOf(e)] = c : Ze.push(c)), c.patchFlag |= -2, c;
  }
  if (zs(e) && (e = e.__vccOpts), t) {
    t = ys(t);
    let { class: c, style: s } = t;
    c && !se(c) && (t.class = gu(c)), re(s) && (Ho(s) && !q(s) && (s = he({}, s)), t.style = $r(s));
  }
  const i = se(e) ? 1 : qc(e) ? 128 : ws(e) ? 64 : re(e) ? 4 : $(e) ? 2 : 0;
  return f(
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
function ys(e) {
  return e ? Ho(e) || Qu in e ? he({}, e) : e : null;
}
function Ft(e, t, u = !1) {
  const { props: r, ref: n, patchFlag: o, children: i } = e, c = t ? Es(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && bi(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      u && n ? q(n) ? n.concat(Mu(t)) : [n, Mu(t)] : Mu(t)
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
    patchFlag: t && e.type !== ce ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Ft(e.ssContent),
    ssFallback: e.ssFallback && Ft(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Cs(e = " ", t = 0) {
  return de(Ju, null, e, t);
}
function As(e, t) {
  const u = de(Tu, null, e);
  return u.staticCount = t, u;
}
function H(e = "", t = !1) {
  return t ? (F(), ye(St, null, e)) : de(St, null, e);
}
function tt(e) {
  return e == null || typeof e == "boolean" ? de(St) : q(e) ? de(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? _t(e) : de(Ju, null, String(e));
}
function _t(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ft(e);
}
function rn(e, t) {
  let u = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (q(t))
    u = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), rn(e, n()), n._c && (n._d = !0));
      return;
    } else {
      u = 32;
      const n = t._;
      !n && !(Qu in t) ? t._ctx = fe : n === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: fe }, u = 32) : (t = String(t), r & 64 ? (u = 16, t = [Cs(t)]) : u = 8);
  e.children = t, e.shapeFlag |= u;
}
function Es(...e) {
  const t = {};
  for (let u = 0; u < e.length; u++) {
    const r = e[u];
    for (const n in r)
      if (n === "class")
        t.class !== r.class && (t.class = gu([t.class, r.class]));
      else if (n === "style")
        t.style = $r([t.style, r.style]);
      else if (Hu(n)) {
        const o = t[n], i = r[n];
        i && o !== i && !(q(o) && o.includes(i)) && (t[n] = o ? [].concat(o, i) : i);
      } else
        n !== "" && (t[n] = r[n]);
  }
  return t;
}
function Qe(e, t, u, r = null) {
  We(e, t, 7, [
    u,
    r
  ]);
}
const Ds = ii();
let Ss = 0;
function Fs(e, t, u) {
  const r = e.type, n = (t ? t.appContext : e.appContext) || Ds, o = {
    uid: Ss++,
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
    scope: new tc(
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
    propsOptions: si(r, n),
    emitsOptions: Xo(r, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ue,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ue,
    data: ue,
    props: ue,
    attrs: ue,
    slots: ue,
    refs: ue,
    setupState: ue,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Oc.bind(null, o), e.ce && e.ce(o), o;
}
let _e = null, Nu, Ir;
{
  const e = Do(), t = (u, r) => {
    let n;
    return (n = e[u]) || (n = e[u] = []), n.push(r), (o) => {
      n.length > 1 ? n.forEach((i) => i(o)) : n[0](o);
    };
  };
  Nu = t(
    "__VUE_INSTANCE_SETTERS__",
    (u) => _e = u
  ), Ir = t(
    "__VUE_SSR_SETTERS__",
    (u) => er = u
  );
}
const mu = (e) => {
  const t = _e;
  return Nu(e), e.scope.on(), () => {
    e.scope.off(), Nu(t);
  };
}, $n = () => {
  _e && _e.scope.off(), Nu(null);
};
function gi(e) {
  return e.vnode.shapeFlag & 4;
}
let er = !1;
function Ts(e, t = !1) {
  t && Ir(t);
  const { props: u, children: r } = e.vnode, n = gi(e);
  fs(e, u, n, t), ps(e, r);
  const o = n ? Ms(e, t) : void 0;
  return t && Ir(!1), o;
}
function Ms(e, t) {
  const u = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = $o(new Proxy(e.ctx, rs));
  const { setup: r } = u;
  if (r) {
    const n = e.setupContext = r.length > 1 ? Rs(e) : null, o = mu(e);
    Nt();
    const i = Et(
      r,
      e,
      0,
      [
        e.props,
        n
      ]
    );
    if (Bt(), o(), Co(i)) {
      if (i.then($n, $n), t)
        return i.then((c) => {
          Vn(e, c, t);
        }).catch((c) => {
          Wu(c, e, 0);
        });
      e.asyncDep = i;
    } else
      Vn(e, i, t);
  } else
    mi(e, t);
}
function Vn(e, t, u) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = Zo(t)), mi(e, u);
}
let Un;
function mi(e, t, u) {
  const r = e.type;
  if (!e.render) {
    if (!t && Un && !r.render) {
      const n = r.template || tn(e).template;
      if (n) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: s } = r, a = he(
          he(
            {
              isCustomElement: o,
              delimiters: c
            },
            i
          ),
          s
        );
        r.render = Un(n, a);
      }
    }
    e.render = r.render || je;
  }
  {
    const n = mu(e);
    Nt();
    try {
      ns(e);
    } finally {
      Bt(), n();
    }
  }
}
function Is(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, u) {
        return Se(e, "get", "$attrs"), t[u];
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
      return Is(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function tr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Zo($o(e.exposed)), {
      get(t, u) {
        if (u in t)
          return t[u];
        if (u in ou)
          return ou[u](e);
      },
      has(t, u) {
        return u in t || u in ou;
      }
    }));
}
function Os(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function zs(e) {
  return $(e) && "__vccOpts" in e;
}
const at = (e, t) => Cc(e, t, er);
function qt(e, t, u) {
  const r = arguments.length;
  return r === 2 ? re(t) && !q(t) ? Lu(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (r > 3 ? u = Array.prototype.slice.call(arguments, 2) : r === 3 && Lu(u) && (u = [u]), de(e, t, u));
}
const Ps = "3.4.12";
/**
* @vue/runtime-dom v3.4.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ls = "http://www.w3.org/2000/svg", Ns = "http://www.w3.org/1998/Math/MathML", wt = typeof document < "u" ? document : null, Zn = wt && /* @__PURE__ */ wt.createElement("template"), Bs = {
  insert: (e, t, u) => {
    t.insertBefore(e, u || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, u, r) => {
    const n = t === "svg" ? wt.createElementNS(Ls, e) : t === "mathml" ? wt.createElementNS(Ns, e) : wt.createElement(e, u ? { is: u } : void 0);
    return e === "select" && r && r.multiple != null && n.setAttribute("multiple", r.multiple), n;
  },
  createText: (e) => wt.createTextNode(e),
  createComment: (e) => wt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => wt.querySelector(e),
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
      Zn.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const c = Zn.content;
      if (r === "svg" || r === "mathml") {
        const s = c.firstChild;
        for (; s.firstChild; )
          c.appendChild(s.firstChild);
        c.removeChild(s);
      }
      t.insertBefore(c, u);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      u ? u.previousSibling : t.lastChild
    ];
  }
}, js = Symbol("_vtc");
function qs(e, t, u) {
  const r = e[js];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : u ? e.setAttribute("class", t) : e.className = t;
}
const nn = Symbol("_vod"), Wn = {
  beforeMount(e, { value: t }, { transition: u }) {
    e[nn] = e.style.display === "none" ? "" : e.style.display, u && t ? u.beforeEnter(e) : uu(e, t);
  },
  mounted(e, { value: t }, { transition: u }) {
    u && t && u.enter(e);
  },
  updated(e, { value: t, oldValue: u }, { transition: r }) {
    !t != !u && (r ? t ? (r.beforeEnter(e), uu(e, !0), r.enter(e)) : r.leave(e, () => {
      uu(e, !1);
    }) : uu(e, t));
  },
  beforeUnmount(e, { value: t }) {
    uu(e, t);
  }
};
function uu(e, t) {
  e.style.display = t ? e[nn] : "none";
}
const Hs = Symbol("");
function $s(e, t, u) {
  const r = e.style, n = r.display, o = se(u);
  if (u && !o) {
    if (t && !se(t))
      for (const i in t)
        u[i] == null && Rr(r, i, "");
    for (const i in u)
      Rr(r, i, u[i]);
  } else if (o) {
    if (t !== u) {
      const i = r[Hs];
      i && (u += ";" + i), r.cssText = u;
    }
  } else
    t && e.removeAttribute("style");
  nn in e && (r.display = n);
}
const Gn = /\s*!important$/;
function Rr(e, t, u) {
  if (q(u))
    u.forEach((r) => Rr(e, t, r));
  else if (u == null && (u = ""), t.startsWith("--"))
    e.setProperty(t, u);
  else {
    const r = Vs(e, t);
    Gn.test(u) ? e.setProperty(
      $e(r),
      u.replace(Gn, ""),
      "important"
    ) : e[r] = u;
  }
}
const Kn = ["Webkit", "Moz", "ms"], dr = {};
function Vs(e, t) {
  const u = dr[t];
  if (u)
    return u;
  let r = Pe(t);
  if (r !== "filter" && r in e)
    return dr[t] = r;
  r = Uu(r);
  for (let n = 0; n < Kn.length; n++) {
    const o = Kn[n] + r;
    if (o in e)
      return dr[t] = o;
  }
  return t;
}
const Yn = "http://www.w3.org/1999/xlink";
function Us(e, t, u, r, n) {
  if (r && t.startsWith("xlink:"))
    u == null ? e.removeAttributeNS(Yn, t.slice(6, t.length)) : e.setAttributeNS(Yn, t, u);
  else {
    const o = ec(t);
    u == null || o && !So(u) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : u);
  }
}
function Zs(e, t, u, r, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, n, o), e[t] = u ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    e._value = u;
    const a = c === "OPTION" ? e.getAttribute("value") : e.value, l = u ?? "";
    a !== l && (e.value = l), u == null && e.removeAttribute(t);
    return;
  }
  let s = !1;
  if (u === "" || u == null) {
    const a = typeof e[t];
    a === "boolean" ? u = So(u) : u == null && a === "string" ? (u = "", s = !0) : a === "number" && (u = 0, s = !0);
  }
  try {
    e[t] = u;
  } catch {
  }
  s && e.removeAttribute(t);
}
function Ws(e, t, u, r) {
  e.addEventListener(t, u, r);
}
function Gs(e, t, u, r) {
  e.removeEventListener(t, u, r);
}
const Xn = Symbol("_vei");
function Ks(e, t, u, r, n = null) {
  const o = e[Xn] || (e[Xn] = {}), i = o[t];
  if (r && i)
    i.value = r;
  else {
    const [c, s] = Ys(t);
    if (r) {
      const a = o[t] = Qs(r, n);
      Ws(e, c, a, s);
    } else
      i && (Gs(e, c, i, s), o[t] = void 0);
  }
}
const Jn = /(?:Once|Passive|Capture)$/;
function Ys(e) {
  let t;
  if (Jn.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Jn); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : $e(e.slice(2)), t];
}
let hr = 0;
const Xs = /* @__PURE__ */ Promise.resolve(), Js = () => hr || (Xs.then(() => hr = 0), hr = Date.now());
function Qs(e, t) {
  const u = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= u.attached)
      return;
    We(
      ea(r, u.value),
      t,
      5,
      [r]
    );
  };
  return u.value = e, u.attached = Js(), u;
}
function ea(e, t) {
  if (q(t)) {
    const u = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      u.call(e), e._stopped = !0;
    }, t.map((r) => (n) => !n._stopped && r && r(n));
  } else
    return t;
}
const Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ta = (e, t, u, r, n, o, i, c, s) => {
  const a = n === "svg";
  t === "class" ? qs(e, r, a) : t === "style" ? $s(e, u, r) : Hu(t) ? jr(t) || Ks(e, t, u, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ua(e, t, r, a)) ? Zs(
    e,
    t,
    r,
    o,
    i,
    c,
    s
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Us(e, t, r, a));
};
function ua(e, t, u, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qn(t) && $(u));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Qn(t) && se(u) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ra(e, t) {
  const u = /* @__PURE__ */ Ku(e);
  class r extends on {
    constructor(o) {
      super(u, o, t);
    }
  }
  return r.def = u, r;
}
const na = typeof HTMLElement < "u" ? HTMLElement : class {
};
class on extends na {
  constructor(t, u = {}, r) {
    super(), this._def = t, this._props = u, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Jr(() => {
      this._connected || (to(null, this.shadowRoot), this._instance = null);
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
      let c;
      if (o && !q(o))
        for (const s in o) {
          const a = o[s];
          (a === Number || a && a.type === Number) && (s in this._props && (this._props[s] = wn(this._props[s])), (c || (c = /* @__PURE__ */ Object.create(null)))[Pe(s)] = !0);
        }
      this._numberProps = c, n && this._resolveProps(r), this._applyStyles(i), this._update();
    }, u = this._def.__asyncLoader;
    u ? u().then((r) => t(r, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: u } = t, r = q(u) ? u : Object.keys(u || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && r.includes(n) && this._setProp(n, this[n], !0, !1);
    for (const n of r.map(Pe))
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
    const r = Pe(t);
    this._numberProps && this._numberProps[r] && (u = wn(u)), this._setProp(r, u, !1);
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
    u !== this._props[t] && (this._props[t] = u, n && this._instance && this._update(), r && (u === !0 ? this.setAttribute($e(t), "") : typeof u == "string" || typeof u == "number" ? this.setAttribute($e(t), u + "") : u || this.removeAttribute($e(t))));
  }
  _update() {
    to(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = de(this._def, he({}, this._props));
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
        r(o, i), $e(o) !== o && r($e(o), i);
      };
      let n = this;
      for (; n = n && (n.parentNode || n.host); )
        if (n instanceof on) {
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
const oa = /* @__PURE__ */ he({ patchProp: ta }, Bs);
let eo;
function ia() {
  return eo || (eo = gs(oa));
}
const to = (...e) => {
  ia().render(...e);
}, uo = {};
function ca(e) {
  let t = uo[e];
  if (t)
    return t;
  t = uo[e] = [];
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
function Kt(e, t) {
  typeof t != "string" && (t = Kt.defaultChars);
  const u = ca(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    let n = "";
    for (let o = 0, i = r.length; o < i; o += 3) {
      const c = parseInt(r.slice(o + 1, o + 3), 16);
      if (c < 128) {
        n += u[c];
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
          let p = c << 18 & 1835008 | s << 12 & 258048 | a << 6 & 4032 | l & 63;
          p < 65536 || p > 1114111 ? n += "����" : (p -= 65536, n += String.fromCharCode(55296 + (p >> 10), 56320 + (p & 1023))), o += 9;
          continue;
        }
      }
      n += "�";
    }
    return n;
  });
}
Kt.defaultChars = ";/?:@&=+$,#";
Kt.componentChars = "";
const ro = {};
function sa(e) {
  let t = ro[e];
  if (t)
    return t;
  t = ro[e] = [];
  for (let u = 0; u < 128; u++) {
    const r = String.fromCharCode(u);
    /^[0-9a-z]$/i.test(r) ? t.push(r) : t.push("%" + ("0" + u.toString(16).toUpperCase()).slice(-2));
  }
  for (let u = 0; u < e.length; u++)
    t[e.charCodeAt(u)] = e[u];
  return t;
}
function xu(e, t, u) {
  typeof t != "string" && (u = t, t = xu.defaultChars), typeof u > "u" && (u = !0);
  const r = sa(t);
  let n = "";
  for (let o = 0, i = e.length; o < i; o++) {
    const c = e.charCodeAt(o);
    if (u && c === 37 && o + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) {
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
xu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
xu.componentChars = "-_.!~*'()";
function cn(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function Bu() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const aa = /^([a-z0-9.+-]+:)/i, la = /:[0-9]*$/, fa = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, da = ["<", ">", '"', "`", " ", "\r", `
`, "	"], ha = ["{", "}", "|", "\\", "^", "`"].concat(da), pa = ["'"].concat(ha), no = ["%", "/", "?", ";", "#"].concat(pa), oo = ["/", "?", "#"], ba = 255, io = /^[+a-z0-9A-Z_-]{0,63}$/, ga = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, co = {
  javascript: !0,
  "javascript:": !0
}, so = {
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
function sn(e, t) {
  if (e && e instanceof Bu)
    return e;
  const u = new Bu();
  return u.parse(e, t), u;
}
Bu.prototype.parse = function(e, t) {
  let u, r, n, o = e;
  if (o = o.trim(), !t && e.split("#").length === 1) {
    const a = fa.exec(o);
    if (a)
      return this.pathname = a[1], a[2] && (this.search = a[2]), this;
  }
  let i = aa.exec(o);
  if (i && (i = i[0], u = i.toLowerCase(), this.protocol = i, o = o.substr(i.length)), (t || i || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (n = o.substr(0, 2) === "//", n && !(i && co[i]) && (o = o.substr(2), this.slashes = !0)), !co[i] && (n || i && !so[i])) {
    let a = -1;
    for (let b = 0; b < oo.length; b++)
      r = o.indexOf(oo[b]), r !== -1 && (a === -1 || r < a) && (a = r);
    let l, p;
    a === -1 ? p = o.lastIndexOf("@") : p = o.lastIndexOf("@", a), p !== -1 && (l = o.slice(0, p), o = o.slice(p + 1), this.auth = l), a = -1;
    for (let b = 0; b < no.length; b++)
      r = o.indexOf(no[b]), r !== -1 && (a === -1 || r < a) && (a = r);
    a === -1 && (a = o.length), o[a - 1] === ":" && a--;
    const g = o.slice(0, a);
    o = o.slice(a), this.parseHost(g), this.hostname = this.hostname || "";
    const x = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!x) {
      const b = this.hostname.split(/\./);
      for (let D = 0, I = b.length; D < I; D++) {
        const O = b[D];
        if (O && !O.match(io)) {
          let j = "";
          for (let y = 0, M = O.length; y < M; y++)
            O.charCodeAt(y) > 127 ? j += "x" : j += O[y];
          if (!j.match(io)) {
            const y = b.slice(0, D), M = b.slice(D + 1), E = O.match(ga);
            E && (y.push(E[1]), M.unshift(E[2])), M.length && (o = M.join(".") + o), this.hostname = y.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > ba && (this.hostname = ""), x && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const c = o.indexOf("#");
  c !== -1 && (this.hash = o.substr(c), o = o.slice(0, c));
  const s = o.indexOf("?");
  return s !== -1 && (this.search = o.substr(s), o = o.slice(0, s)), o && (this.pathname = o), so[u] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
Bu.prototype.parseHost = function(e) {
  let t = la.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Kt,
  encode: xu,
  format: cn,
  parse: sn
}, Symbol.toStringTag, { value: "Module" })), xi = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, _i = /[\0-\x1F\x7F-\x9F]/, xa = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, an = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, wi = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, _a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: xi,
  Cc: _i,
  Cf: xa,
  P: an,
  Z: wi
}, Symbol.toStringTag, { value: "Module" })), wa = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), ka = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var pr;
const va = /* @__PURE__ */ new Map([
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
]), ya = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (pr = String.fromCodePoint) !== null && pr !== void 0 ? pr : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Ca(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = va.get(e)) !== null && t !== void 0 ? t : e;
}
var le;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(le || (le = {}));
const Aa = 32;
var yt;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(yt || (yt = {}));
function Or(e) {
  return e >= le.ZERO && e <= le.NINE;
}
function Ea(e) {
  return e >= le.UPPER_A && e <= le.UPPER_F || e >= le.LOWER_A && e <= le.LOWER_F;
}
function Da(e) {
  return e >= le.UPPER_A && e <= le.UPPER_Z || e >= le.LOWER_A && e <= le.LOWER_Z || Or(e);
}
function Sa(e) {
  return e === le.EQUALS || Da(e);
}
var ae;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(ae || (ae = {}));
var vt;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(vt || (vt = {}));
class Fa {
  constructor(t, u, r) {
    this.decodeTree = t, this.emitCodePoint = u, this.errors = r, this.state = ae.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = vt.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = ae.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
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
      case ae.EntityStart:
        return t.charCodeAt(u) === le.NUM ? (this.state = ae.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = ae.NamedEntity, this.stateNamedEntity(t, u));
      case ae.NumericStart:
        return this.stateNumericStart(t, u);
      case ae.NumericDecimal:
        return this.stateNumericDecimal(t, u);
      case ae.NumericHex:
        return this.stateNumericHex(t, u);
      case ae.NamedEntity:
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
    return u >= t.length ? -1 : (t.charCodeAt(u) | Aa) === le.LOWER_X ? (this.state = ae.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = ae.NumericDecimal, this.stateNumericDecimal(t, u));
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
      if (Or(n) || Ea(n))
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
      if (Or(n))
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
    if (t === le.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === vt.Strict)
      return 0;
    return this.emitCodePoint(Ca(this.result), this.consumed), this.errors && (t !== le.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
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
    let n = r[this.treeIndex], o = (n & yt.VALUE_LENGTH) >> 14;
    for (; u < t.length; u++, this.excess++) {
      const i = t.charCodeAt(u);
      if (this.treeIndex = Ta(r, n, this.treeIndex + Math.max(1, o), i), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === vt.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        Sa(i)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (n = r[this.treeIndex], o = (n & yt.VALUE_LENGTH) >> 14, o !== 0) {
        if (i === le.SEMI)
          return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
        this.decodeMode !== vt.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
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
    const { result: u, decodeTree: r } = this, n = (r[u] & yt.VALUE_LENGTH) >> 14;
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
    return this.emitCodePoint(u === 1 ? n[t] & ~yt.VALUE_LENGTH : n[t + 1], r), u === 3 && this.emitCodePoint(n[t + 2], r), r;
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
      case ae.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== vt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case ae.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case ae.NumericHex:
        return this.emitNumericEntity(0, 3);
      case ae.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case ae.EntityStart:
        return 0;
    }
  }
}
function ki(e) {
  let t = "";
  const u = new Fa(e, (r) => t += ya(r));
  return function(n, o) {
    let i = 0, c = 0;
    for (; (c = n.indexOf("&", c)) >= 0; ) {
      t += n.slice(i, c), u.startEntity(o);
      const a = u.write(
        n,
        // Skip the "&"
        c + 1
      );
      if (a < 0) {
        i = c + u.end();
        break;
      }
      i = c + a, c = a === 0 ? i + 1 : i;
    }
    const s = t + n.slice(i);
    return t = "", s;
  };
}
function Ta(e, t, u, r) {
  const n = (t & yt.BRANCH_LENGTH) >> 7, o = t & yt.JUMP_TABLE;
  if (n === 0)
    return o !== 0 && r === o ? u : -1;
  if (o) {
    const s = r - o;
    return s < 0 || s >= n ? -1 : e[u + s] - 1;
  }
  let i = u, c = i + n - 1;
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
const Ma = ki(wa);
ki(ka);
function vi(e, t = vt.Legacy) {
  return Ma(e, t);
}
function Ia(e) {
  return Object.prototype.toString.call(e);
}
function ln(e) {
  return Ia(e) === "[object String]";
}
const Ra = Object.prototype.hasOwnProperty;
function Oa(e, t) {
  return Ra.call(e, t);
}
function ur(e) {
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
function yi(e, t, u) {
  return [].concat(e.slice(0, t), u, e.slice(t + 1));
}
function fn(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function ju(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), u = 56320 + (e & 1023);
    return String.fromCharCode(t, u);
  }
  return String.fromCharCode(e);
}
const Ci = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, za = /&([a-z#][a-z0-9]{1,31});/gi, Pa = new RegExp(Ci.source + "|" + za.source, "gi"), La = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Na(e, t) {
  if (t.charCodeAt(0) === 35 && La.test(t)) {
    const r = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return fn(r) ? ju(r) : e;
  }
  const u = vi(e);
  return u !== e ? u : e;
}
function Ba(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(Ci, "$1");
}
function fu(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(Pa, function(t, u, r) {
    return u || Na(t, r);
  });
}
const ja = /[&<>"]/, qa = /[&<>"]/g, Ha = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function $a(e) {
  return Ha[e];
}
function Tt(e) {
  return ja.test(e) ? e.replace(qa, $a) : e;
}
const Va = /[.?*+^$[\]\\(){}|-]/g;
function Ua(e) {
  return e.replace(Va, "\\$&");
}
function Q(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function du(e) {
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
function hu(e) {
  return an.test(e);
}
function pu(e) {
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
function rr(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const Za = { mdurl: ma, ucmicro: _a }, Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: yi,
  assign: ur,
  escapeHtml: Tt,
  escapeRE: Ua,
  fromCodePoint: ju,
  has: Oa,
  isMdAsciiPunct: pu,
  isPunctChar: hu,
  isSpace: Q,
  isString: ln,
  isValidEntityCode: fn,
  isWhiteSpace: du,
  lib: Za,
  normalizeReference: rr,
  unescapeAll: fu,
  unescapeMd: Ba
}, Symbol.toStringTag, { value: "Module" }));
function Ga(e, t, u) {
  let r, n, o, i;
  const c = e.posMax, s = e.pos;
  for (e.pos = t + 1, r = 1; e.pos < c; ) {
    if (o = e.src.charCodeAt(e.pos), o === 93 && (r--, r === 0)) {
      n = !0;
      break;
    }
    if (i = e.pos, e.md.inline.skipToken(e), o === 91) {
      if (i === e.pos - 1)
        r++;
      else if (u)
        return e.pos = s, -1;
    }
  }
  let a = -1;
  return n && (a = e.pos), e.pos = s, a;
}
function Ka(e, t, u) {
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
        return o.pos = n + 1, o.str = fu(e.slice(t + 1, n)), o.ok = !0, o;
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
  return t === n || i !== 0 || (o.str = fu(e.slice(t, n)), o.pos = n, o.ok = !0), o;
}
function Ya(e, t, u) {
  let r, n, o = 0, i = t;
  const c = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (i >= u || (n = e.charCodeAt(i), n !== 34 && n !== 39 && n !== 40))
    return c;
  for (i++, n === 40 && (n = 41); i < u; ) {
    if (r = e.charCodeAt(i), r === n)
      return c.pos = i + 1, c.lines = o, c.str = fu(e.slice(t + 1, i)), c.ok = !0, c;
    if (r === 40 && n === 41)
      return c;
    r === 10 ? o++ : r === 92 && i + 1 < u && (i++, e.charCodeAt(i) === 10 && o++), i++;
  }
  return c;
}
const Xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Ka,
  parseLinkLabel: Ga,
  parseLinkTitle: Ya
}, Symbol.toStringTag, { value: "Module" })), ot = {};
ot.code_inline = function(e, t, u, r, n) {
  const o = e[t];
  return "<code" + n.renderAttrs(o) + ">" + Tt(o.content) + "</code>";
};
ot.code_block = function(e, t, u, r, n) {
  const o = e[t];
  return "<pre" + n.renderAttrs(o) + "><code>" + Tt(e[t].content) + `</code></pre>
`;
};
ot.fence = function(e, t, u, r, n) {
  const o = e[t], i = o.info ? fu(o.info).trim() : "";
  let c = "", s = "";
  if (i) {
    const l = i.split(/(\s+)/g);
    c = l[0], s = l.slice(2).join("");
  }
  let a;
  if (u.highlight ? a = u.highlight(o.content, c, s) || Tt(o.content) : a = Tt(o.content), a.indexOf("<pre") === 0)
    return a + `
`;
  if (i) {
    const l = o.attrIndex("class"), p = o.attrs ? o.attrs.slice() : [];
    l < 0 ? p.push(["class", u.langPrefix + c]) : (p[l] = p[l].slice(), p[l][1] += " " + u.langPrefix + c);
    const g = {
      attrs: p
    };
    return `<pre><code${n.renderAttrs(g)}>${a}</code></pre>
`;
  }
  return `<pre><code${n.renderAttrs(o)}>${a}</code></pre>
`;
};
ot.image = function(e, t, u, r, n) {
  const o = e[t];
  return o.attrs[o.attrIndex("alt")][1] = n.renderInlineAsText(o.children, u, r), n.renderToken(e, t, u);
};
ot.hardbreak = function(e, t, u) {
  return u.xhtmlOut ? `<br />
` : `<br>
`;
};
ot.softbreak = function(e, t, u) {
  return u.breaks ? u.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
ot.text = function(e, t) {
  return Tt(e[t].content);
};
ot.html_block = function(e, t) {
  return e[t].content;
};
ot.html_inline = function(e, t) {
  return e[t].content;
};
function Xt() {
  this.rules = ur({}, ot);
}
Xt.prototype.renderAttrs = function(t) {
  let u, r, n;
  if (!t.attrs)
    return "";
  for (n = "", u = 0, r = t.attrs.length; u < r; u++)
    n += " " + Tt(t.attrs[u][0]) + '="' + Tt(t.attrs[u][1]) + '"';
  return n;
};
Xt.prototype.renderToken = function(t, u, r) {
  const n = t[u];
  let o = "";
  if (n.hidden)
    return "";
  n.block && n.nesting !== -1 && u && t[u - 1].hidden && (o += `
`), o += (n.nesting === -1 ? "</" : "<") + n.tag, o += this.renderAttrs(n), n.nesting === 0 && r.xhtmlOut && (o += " /");
  let i = !1;
  if (n.block && (i = !0, n.nesting === 1 && u + 1 < t.length)) {
    const c = t[u + 1];
    (c.type === "inline" || c.hidden || c.nesting === -1 && c.tag === n.tag) && (i = !1);
  }
  return o += i ? `>
` : ">", o;
};
Xt.prototype.renderInline = function(e, t, u) {
  let r = "";
  const n = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const c = e[o].type;
    typeof n[c] < "u" ? r += n[c](e, o, t, u, this) : r += this.renderToken(e, o, t);
  }
  return r;
};
Xt.prototype.renderInlineAsText = function(e, t, u) {
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
Xt.prototype.render = function(e, t, u) {
  let r = "";
  const n = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const c = e[o].type;
    c === "inline" ? r += this.renderInline(e[o].children, t, u) : typeof n[c] < "u" ? r += n[c](e, o, t, u, this) : r += this.renderToken(e, o, t, u);
  }
  return r;
};
function Te() {
  this.__rules__ = [], this.__cache__ = null;
}
Te.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
Te.prototype.__compile__ = function() {
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
Te.prototype.at = function(e, t, u) {
  const r = this.__find__(e), n = u || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[r].fn = t, this.__rules__[r].alt = n.alt || [], this.__cache__ = null;
};
Te.prototype.before = function(e, t, u, r) {
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
Te.prototype.after = function(e, t, u, r) {
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
Te.prototype.push = function(e, t, u) {
  const r = u || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: r.alt || []
  }), this.__cache__ = null;
};
Te.prototype.enable = function(e, t) {
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
Te.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(u) {
    u.enabled = !1;
  }), this.enable(e, t);
};
Te.prototype.disable = function(e, t) {
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
Te.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function Ge(e, t, u) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = u, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
Ge.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const u = this.attrs;
  for (let r = 0, n = u.length; r < n; r++)
    if (u[r][0] === t)
      return r;
  return -1;
};
Ge.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
Ge.prototype.attrSet = function(t, u) {
  const r = this.attrIndex(t), n = [t, u];
  r < 0 ? this.attrPush(n) : this.attrs[r] = n;
};
Ge.prototype.attrGet = function(t) {
  const u = this.attrIndex(t);
  let r = null;
  return u >= 0 && (r = this.attrs[u][1]), r;
};
Ge.prototype.attrJoin = function(t, u) {
  const r = this.attrIndex(t);
  r < 0 ? this.attrPush([t, u]) : this.attrs[r][1] = this.attrs[r][1] + " " + u;
};
function Ai(e, t, u) {
  this.src = e, this.env = u, this.tokens = [], this.inlineMode = !1, this.md = t;
}
Ai.prototype.Token = Ge;
const Ja = /\r\n?|\n/g, Qa = /\0/g;
function e0(e) {
  let t;
  t = e.src.replace(Ja, `
`), t = t.replace(Qa, "�"), e.src = t;
}
function t0(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function u0(e) {
  const t = e.tokens;
  for (let u = 0, r = t.length; u < r; u++) {
    const n = t[u];
    n.type === "inline" && e.md.inline.parse(n.content, e.md, e.env, n.children);
  }
}
function r0(e) {
  return /^<a[>\s]/i.test(e);
}
function n0(e) {
  return /^<\/a\s*>/i.test(e);
}
function o0(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let u = 0, r = t.length; u < r; u++) {
      if (t[u].type !== "inline" || !e.md.linkify.pretest(t[u].content))
        continue;
      let n = t[u].children, o = 0;
      for (let i = n.length - 1; i >= 0; i--) {
        const c = n[i];
        if (c.type === "link_close") {
          for (i--; n[i].level !== c.level && n[i].type !== "link_open"; )
            i--;
          continue;
        }
        if (c.type === "html_inline" && (r0(c.content) && o > 0 && o--, n0(c.content) && o++), !(o > 0) && c.type === "text" && e.md.linkify.test(c.content)) {
          const s = c.content;
          let a = e.md.linkify.match(s);
          const l = [];
          let p = c.level, g = 0;
          a.length > 0 && a[0].index === 0 && i > 0 && n[i - 1].type === "text_special" && (a = a.slice(1));
          for (let x = 0; x < a.length; x++) {
            const b = a[x].url, D = e.md.normalizeLink(b);
            if (!e.md.validateLink(D))
              continue;
            let I = a[x].text;
            a[x].schema ? a[x].schema === "mailto:" && !/^mailto:/i.test(I) ? I = e.md.normalizeLinkText("mailto:" + I).replace(/^mailto:/, "") : I = e.md.normalizeLinkText(I) : I = e.md.normalizeLinkText("http://" + I).replace(/^http:\/\//, "");
            const O = a[x].index;
            if (O > g) {
              const E = new e.Token("text", "", 0);
              E.content = s.slice(g, O), E.level = p, l.push(E);
            }
            const j = new e.Token("link_open", "a", 1);
            j.attrs = [["href", D]], j.level = p++, j.markup = "linkify", j.info = "auto", l.push(j);
            const y = new e.Token("text", "", 0);
            y.content = I, y.level = p, l.push(y);
            const M = new e.Token("link_close", "a", -1);
            M.level = --p, M.markup = "linkify", M.info = "auto", l.push(M), g = a[x].lastIndex;
          }
          if (g < s.length) {
            const x = new e.Token("text", "", 0);
            x.content = s.slice(g), x.level = p, l.push(x);
          }
          t[u].children = n = yi(n, i, l);
        }
      }
    }
}
const Ei = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, i0 = /\((c|tm|r)\)/i, c0 = /\((c|tm|r)\)/ig, s0 = {
  c: "©",
  r: "®",
  tm: "™"
};
function a0(e, t) {
  return s0[t.toLowerCase()];
}
function l0(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const r = e[u];
    r.type === "text" && !t && (r.content = r.content.replace(c0, a0)), r.type === "link_open" && r.info === "auto" && t--, r.type === "link_close" && r.info === "auto" && t++;
  }
}
function f0(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const r = e[u];
    r.type === "text" && !t && Ei.test(r.content) && (r.content = r.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), r.type === "link_open" && r.info === "auto" && t--, r.type === "link_close" && r.info === "auto" && t++;
  }
}
function d0(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (i0.test(e.tokens[t].content) && l0(e.tokens[t].children), Ei.test(e.tokens[t].content) && f0(e.tokens[t].children));
}
const h0 = /['"]/, ao = /['"]/g, lo = "’";
function Du(e, t, u) {
  return e.slice(0, t) + u + e.slice(t + 1);
}
function p0(e, t) {
  let u;
  const r = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], i = e[n].level;
    for (u = r.length - 1; u >= 0 && !(r[u].level <= i); u--)
      ;
    if (r.length = u + 1, o.type !== "text")
      continue;
    let c = o.content, s = 0, a = c.length;
    e:
      for (; s < a; ) {
        ao.lastIndex = s;
        const l = ao.exec(c);
        if (!l)
          break;
        let p = !0, g = !0;
        s = l.index + 1;
        const x = l[0] === "'";
        let b = 32;
        if (l.index - 1 >= 0)
          b = c.charCodeAt(l.index - 1);
        else
          for (u = n - 1; u >= 0 && !(e[u].type === "softbreak" || e[u].type === "hardbreak"); u--)
            if (e[u].content) {
              b = e[u].content.charCodeAt(e[u].content.length - 1);
              break;
            }
        let D = 32;
        if (s < a)
          D = c.charCodeAt(s);
        else
          for (u = n + 1; u < e.length && !(e[u].type === "softbreak" || e[u].type === "hardbreak"); u++)
            if (e[u].content) {
              D = e[u].content.charCodeAt(0);
              break;
            }
        const I = pu(b) || hu(String.fromCharCode(b)), O = pu(D) || hu(String.fromCharCode(D)), j = du(b), y = du(D);
        if (y ? p = !1 : O && (j || I || (p = !1)), j ? g = !1 : I && (y || O || (g = !1)), D === 34 && l[0] === '"' && b >= 48 && b <= 57 && (g = p = !1), p && g && (p = I, g = O), !p && !g) {
          x && (o.content = Du(o.content, l.index, lo));
          continue;
        }
        if (g)
          for (u = r.length - 1; u >= 0; u--) {
            let M = r[u];
            if (r[u].level < i)
              break;
            if (M.single === x && r[u].level === i) {
              M = r[u];
              let E, R;
              x ? (E = t.md.options.quotes[2], R = t.md.options.quotes[3]) : (E = t.md.options.quotes[0], R = t.md.options.quotes[1]), o.content = Du(o.content, l.index, R), e[M.token].content = Du(
                e[M.token].content,
                M.pos,
                E
              ), s += R.length - 1, M.token === n && (s += E.length - 1), c = o.content, a = c.length, r.length = u;
              continue e;
            }
          }
        p ? r.push({
          token: n,
          pos: l.index,
          single: x,
          level: i
        }) : g && x && (o.content = Du(o.content, l.index, lo));
      }
  }
}
function b0(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !h0.test(e.tokens[t].content) || p0(e.tokens[t].children, e);
}
function g0(e) {
  let t, u;
  const r = e.tokens, n = r.length;
  for (let o = 0; o < n; o++) {
    if (r[o].type !== "inline")
      continue;
    const i = r[o].children, c = i.length;
    for (t = 0; t < c; t++)
      i[t].type === "text_special" && (i[t].type = "text");
    for (t = u = 0; t < c; t++)
      i[t].type === "text" && t + 1 < c && i[t + 1].type === "text" ? i[t + 1].content = i[t].content + i[t + 1].content : (t !== u && (i[u] = i[t]), u++);
    t !== u && (i.length = u);
  }
}
const br = [
  ["normalize", e0],
  ["block", t0],
  ["inline", u0],
  ["linkify", o0],
  ["replacements", d0],
  ["smartquotes", b0],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", g0]
];
function dn() {
  this.ruler = new Te();
  for (let e = 0; e < br.length; e++)
    this.ruler.push(br[e][0], br[e][1]);
}
dn.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let u = 0, r = t.length; u < r; u++)
    t[u](e);
};
dn.prototype.State = Ai;
function it(e, t, u, r) {
  this.src = e, this.md = t, this.env = u, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const n = this.src;
  for (let o = 0, i = 0, c = 0, s = 0, a = n.length, l = !1; i < a; i++) {
    const p = n.charCodeAt(i);
    if (!l)
      if (Q(p)) {
        c++, p === 9 ? s += 4 - s % 4 : s++;
        continue;
      } else
        l = !0;
    (p === 10 || i === a - 1) && (p !== 10 && i++, this.bMarks.push(o), this.eMarks.push(i), this.tShift.push(c), this.sCount.push(s), this.bsCount.push(0), l = !1, c = 0, s = 0, o = i + 1);
  }
  this.bMarks.push(n.length), this.eMarks.push(n.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
it.prototype.push = function(e, t, u) {
  const r = new Ge(e, t, u);
  return r.block = !0, u < 0 && this.level--, r.level = this.level, u > 0 && this.level++, this.tokens.push(r), r;
};
it.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
it.prototype.skipEmptyLines = function(t) {
  for (let u = this.lineMax; t < u && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
it.prototype.skipSpaces = function(t) {
  for (let u = this.src.length; t < u; t++) {
    const r = this.src.charCodeAt(t);
    if (!Q(r))
      break;
  }
  return t;
};
it.prototype.skipSpacesBack = function(t, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (!Q(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
it.prototype.skipChars = function(t, u) {
  for (let r = this.src.length; t < r && this.src.charCodeAt(t) === u; t++)
    ;
  return t;
};
it.prototype.skipCharsBack = function(t, u, r) {
  if (t <= r)
    return t;
  for (; t > r; )
    if (u !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
it.prototype.getLines = function(t, u, r, n) {
  if (t >= u)
    return "";
  const o = new Array(u - t);
  for (let i = 0, c = t; c < u; c++, i++) {
    let s = 0;
    const a = this.bMarks[c];
    let l = a, p;
    for (c + 1 < u || n ? p = this.eMarks[c] + 1 : p = this.eMarks[c]; l < p && s < r; ) {
      const g = this.src.charCodeAt(l);
      if (Q(g))
        g === 9 ? s += 4 - (s + this.bsCount[c]) % 4 : s++;
      else if (l - a < this.tShift[c])
        s++;
      else
        break;
      l++;
    }
    s > r ? o[i] = new Array(s - r + 1).join(" ") + this.src.slice(l, p) : o[i] = this.src.slice(l, p);
  }
  return o.join("");
};
it.prototype.Token = Ge;
function gr(e, t) {
  const u = e.bMarks[t] + e.tShift[t], r = e.eMarks[t];
  return e.src.slice(u, r);
}
function fo(e) {
  const t = [], u = e.length;
  let r = 0, n = e.charCodeAt(r), o = !1, i = 0, c = "";
  for (; r < u; )
    n === 124 && (o ? (c += e.substring(i, r - 1), i = r) : (t.push(c + e.substring(i, r)), c = "", i = r + 1)), o = n === 92, r++, n = e.charCodeAt(r);
  return t.push(c + e.substring(i)), t;
}
function m0(e, t, u, r) {
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
  const c = e.src.charCodeAt(o++);
  if (c !== 124 && c !== 45 && c !== 58 && !Q(c) || i === 45 && Q(c))
    return !1;
  for (; o < e.eMarks[n]; ) {
    const y = e.src.charCodeAt(o);
    if (y !== 124 && y !== 45 && y !== 58 && !Q(y))
      return !1;
    o++;
  }
  let s = gr(e, t + 1), a = s.split("|");
  const l = [];
  for (let y = 0; y < a.length; y++) {
    const M = a[y].trim();
    if (!M) {
      if (y === 0 || y === a.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(M))
      return !1;
    M.charCodeAt(M.length - 1) === 58 ? l.push(M.charCodeAt(0) === 58 ? "center" : "right") : M.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (s = gr(e, t).trim(), s.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  a = fo(s), a.length && a[0] === "" && a.shift(), a.length && a[a.length - 1] === "" && a.pop();
  const p = a.length;
  if (p === 0 || p !== l.length)
    return !1;
  if (r)
    return !0;
  const g = e.parentType;
  e.parentType = "table";
  const x = e.md.block.ruler.getRules("blockquote"), b = e.push("table_open", "table", 1), D = [t, 0];
  b.map = D;
  const I = e.push("thead_open", "thead", 1);
  I.map = [t, t + 1];
  const O = e.push("tr_open", "tr", 1);
  O.map = [t, t + 1];
  for (let y = 0; y < a.length; y++) {
    const M = e.push("th_open", "th", 1);
    l[y] && (M.attrs = [["style", "text-align:" + l[y]]]);
    const E = e.push("inline", "", 0);
    E.content = a[y].trim(), E.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let j;
  for (n = t + 2; n < u && !(e.sCount[n] < e.blkIndent); n++) {
    let y = !1;
    for (let E = 0, R = x.length; E < R; E++)
      if (x[E](e, n, u, !0)) {
        y = !0;
        break;
      }
    if (y || (s = gr(e, n).trim(), !s) || e.sCount[n] - e.blkIndent >= 4)
      break;
    if (a = fo(s), a.length && a[0] === "" && a.shift(), a.length && a[a.length - 1] === "" && a.pop(), n === t + 2) {
      const E = e.push("tbody_open", "tbody", 1);
      E.map = j = [t + 2, 0];
    }
    const M = e.push("tr_open", "tr", 1);
    M.map = [n, n + 1];
    for (let E = 0; E < p; E++) {
      const R = e.push("td_open", "td", 1);
      l[E] && (R.attrs = [["style", "text-align:" + l[E]]]);
      const U = e.push("inline", "", 0);
      U.content = a[E] ? a[E].trim() : "", U.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return j && (e.push("tbody_close", "tbody", -1), j[1] = n), e.push("table_close", "table", -1), D[1] = n, e.parentType = g, e.line = n, !0;
}
function x0(e, t, u) {
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
function _0(e, t, u, r) {
  let n = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || n + 3 > o)
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
  let p = t, g = !1;
  for (; p++, !(p >= u || (n = c = e.bMarks[p] + e.tShift[p], o = e.eMarks[p], n < o && e.sCount[p] < e.blkIndent)); )
    if (e.src.charCodeAt(n) === i && !(e.sCount[p] - e.blkIndent >= 4) && (n = e.skipChars(n, i), !(n - c < s) && (n = e.skipSpaces(n), !(n < o)))) {
      g = !0;
      break;
    }
  s = e.sCount[t], e.line = p + (g ? 1 : 0);
  const x = e.push("fence", "code", 0);
  return x.info = l, x.content = e.getLines(t + 1, p, s, !0), x.markup = a, x.map = [t, e.line], !0;
}
function w0(e, t, u, r) {
  let n = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  const i = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(n) !== 62)
    return !1;
  if (r)
    return !0;
  const c = [], s = [], a = [], l = [], p = e.md.block.ruler.getRules("blockquote"), g = e.parentType;
  e.parentType = "blockquote";
  let x = !1, b;
  for (b = t; b < u; b++) {
    const y = e.sCount[b] < e.blkIndent;
    if (n = e.bMarks[b] + e.tShift[b], o = e.eMarks[b], n >= o)
      break;
    if (e.src.charCodeAt(n++) === 62 && !y) {
      let E = e.sCount[b] + 1, R, U;
      e.src.charCodeAt(n) === 32 ? (n++, E++, U = !1, R = !0) : e.src.charCodeAt(n) === 9 ? (R = !0, (e.bsCount[b] + E) % 4 === 3 ? (n++, E++, U = !1) : U = !0) : R = !1;
      let ee = E;
      for (c.push(e.bMarks[b]), e.bMarks[b] = n; n < o; ) {
        const te = e.src.charCodeAt(n);
        if (Q(te))
          te === 9 ? ee += 4 - (ee + e.bsCount[b] + (U ? 1 : 0)) % 4 : ee++;
        else
          break;
        n++;
      }
      x = n >= o, s.push(e.bsCount[b]), e.bsCount[b] = e.sCount[b] + 1 + (R ? 1 : 0), a.push(e.sCount[b]), e.sCount[b] = ee - E, l.push(e.tShift[b]), e.tShift[b] = n - e.bMarks[b];
      continue;
    }
    if (x)
      break;
    let M = !1;
    for (let E = 0, R = p.length; E < R; E++)
      if (p[E](e, b, u, !0)) {
        M = !0;
        break;
      }
    if (M) {
      e.lineMax = b, e.blkIndent !== 0 && (c.push(e.bMarks[b]), s.push(e.bsCount[b]), l.push(e.tShift[b]), a.push(e.sCount[b]), e.sCount[b] -= e.blkIndent);
      break;
    }
    c.push(e.bMarks[b]), s.push(e.bsCount[b]), l.push(e.tShift[b]), a.push(e.sCount[b]), e.sCount[b] = -1;
  }
  const D = e.blkIndent;
  e.blkIndent = 0;
  const I = e.push("blockquote_open", "blockquote", 1);
  I.markup = ">";
  const O = [t, 0];
  I.map = O, e.md.block.tokenize(e, t, b);
  const j = e.push("blockquote_close", "blockquote", -1);
  j.markup = ">", e.lineMax = i, e.parentType = g, O[1] = e.line;
  for (let y = 0; y < l.length; y++)
    e.bMarks[y + t] = c[y], e.tShift[y + t] = l[y], e.sCount[y + t] = a[y], e.bsCount[y + t] = s[y];
  return e.blkIndent = D, !0;
}
function k0(e, t, u, r) {
  const n = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[t] + e.tShift[t];
  const i = e.src.charCodeAt(o++);
  if (i !== 42 && i !== 45 && i !== 95)
    return !1;
  let c = 1;
  for (; o < n; ) {
    const a = e.src.charCodeAt(o++);
    if (a !== i && !Q(a))
      return !1;
    a === i && c++;
  }
  if (c < 3)
    return !1;
  if (r)
    return !0;
  e.line = t + 1;
  const s = e.push("hr", "hr", 0);
  return s.map = [t, e.line], s.markup = Array(c + 1).join(String.fromCharCode(i)), !0;
}
function ho(e, t) {
  const u = e.eMarks[t];
  let r = e.bMarks[t] + e.tShift[t];
  const n = e.src.charCodeAt(r++);
  if (n !== 42 && n !== 45 && n !== 43)
    return -1;
  if (r < u) {
    const o = e.src.charCodeAt(r);
    if (!Q(o))
      return -1;
  }
  return r;
}
function po(e, t) {
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
  return n < r && (o = e.src.charCodeAt(n), !Q(o)) ? -1 : n;
}
function v0(e, t) {
  const u = e.level + 2;
  for (let r = t + 2, n = e.tokens.length - 2; r < n; r++)
    e.tokens[r].level === u && e.tokens[r].type === "paragraph_open" && (e.tokens[r + 2].hidden = !0, e.tokens[r].hidden = !0, r += 2);
}
function y0(e, t, u, r) {
  let n, o, i, c, s = t, a = !0;
  if (e.sCount[s] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[s] - e.listIndent >= 4 && e.sCount[s] < e.blkIndent)
    return !1;
  let l = !1;
  r && e.parentType === "paragraph" && e.sCount[s] >= e.blkIndent && (l = !0);
  let p, g, x;
  if ((x = po(e, s)) >= 0) {
    if (p = !0, i = e.bMarks[s] + e.tShift[s], g = Number(e.src.slice(i, x - 1)), l && g !== 1)
      return !1;
  } else if ((x = ho(e, s)) >= 0)
    p = !1;
  else
    return !1;
  if (l && e.skipSpaces(x) >= e.eMarks[s])
    return !1;
  if (r)
    return !0;
  const b = e.src.charCodeAt(x - 1), D = e.tokens.length;
  p ? (c = e.push("ordered_list_open", "ol", 1), g !== 1 && (c.attrs = [["start", g]])) : c = e.push("bullet_list_open", "ul", 1);
  const I = [s, 0];
  c.map = I, c.markup = String.fromCharCode(b);
  let O = !1;
  const j = e.md.block.ruler.getRules("list"), y = e.parentType;
  for (e.parentType = "list"; s < u; ) {
    o = x, n = e.eMarks[s];
    const M = e.sCount[s] + x - (e.bMarks[s] + e.tShift[s]);
    let E = M;
    for (; o < n; ) {
      const Ae = e.src.charCodeAt(o);
      if (Ae === 9)
        E += 4 - (E + e.bsCount[s]) % 4;
      else if (Ae === 32)
        E++;
      else
        break;
      o++;
    }
    const R = o;
    let U;
    R >= n ? U = 1 : U = E - M, U > 4 && (U = 1);
    const ee = M + U;
    c = e.push("list_item_open", "li", 1), c.markup = String.fromCharCode(b);
    const te = [s, 0];
    c.map = te, p && (c.info = e.src.slice(i, x - 1));
    const pe = e.tight, we = e.tShift[s], be = e.sCount[s], Ce = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = ee, e.tight = !0, e.tShift[s] = R - e.bMarks[s], e.sCount[s] = E, R >= n && e.isEmpty(s + 1) ? e.line = Math.min(e.line + 2, u) : e.md.block.tokenize(e, s, u, !0), (!e.tight || O) && (a = !1), O = e.line - s > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = Ce, e.tShift[s] = we, e.sCount[s] = be, e.tight = pe, c = e.push("list_item_close", "li", -1), c.markup = String.fromCharCode(b), s = e.line, te[1] = s, s >= u || e.sCount[s] < e.blkIndent || e.sCount[s] - e.blkIndent >= 4)
      break;
    let Me = !1;
    for (let Ae = 0, ne = j.length; Ae < ne; Ae++)
      if (j[Ae](e, s, u, !0)) {
        Me = !0;
        break;
      }
    if (Me)
      break;
    if (p) {
      if (x = po(e, s), x < 0)
        break;
      i = e.bMarks[s] + e.tShift[s];
    } else if (x = ho(e, s), x < 0)
      break;
    if (b !== e.src.charCodeAt(x - 1))
      break;
  }
  return p ? c = e.push("ordered_list_close", "ol", -1) : c = e.push("bullet_list_close", "ul", -1), c.markup = String.fromCharCode(b), I[1] = s, e.line = s, e.parentType = y, a && v0(e, D), !0;
}
function C0(e, t, u, r) {
  let n = 0, o = e.bMarks[t] + e.tShift[t], i = e.eMarks[t], c = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(o) !== 91)
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
    let E = !1;
    for (let R = 0, U = a.length; R < U; R++)
      if (a[R](e, c, s, !0)) {
        E = !0;
        break;
      }
    if (E)
      break;
  }
  const p = e.getLines(t, c, e.blkIndent, !1).trim();
  i = p.length;
  let g = -1;
  for (o = 1; o < i; o++) {
    const E = p.charCodeAt(o);
    if (E === 91)
      return !1;
    if (E === 93) {
      g = o;
      break;
    } else
      E === 10 ? n++ : E === 92 && (o++, o < i && p.charCodeAt(o) === 10 && n++);
  }
  if (g < 0 || p.charCodeAt(g + 1) !== 58)
    return !1;
  for (o = g + 2; o < i; o++) {
    const E = p.charCodeAt(o);
    if (E === 10)
      n++;
    else if (!Q(E))
      break;
  }
  const x = e.md.helpers.parseLinkDestination(p, o, i);
  if (!x.ok)
    return !1;
  const b = e.md.normalizeLink(x.str);
  if (!e.md.validateLink(b))
    return !1;
  o = x.pos, n += x.lines;
  const D = o, I = n, O = o;
  for (; o < i; o++) {
    const E = p.charCodeAt(o);
    if (E === 10)
      n++;
    else if (!Q(E))
      break;
  }
  const j = e.md.helpers.parseLinkTitle(p, o, i);
  let y;
  for (o < i && O !== o && j.ok ? (y = j.str, o = j.pos, n += j.lines) : (y = "", o = D, n = I); o < i; ) {
    const E = p.charCodeAt(o);
    if (!Q(E))
      break;
    o++;
  }
  if (o < i && p.charCodeAt(o) !== 10 && y)
    for (y = "", o = D, n = I; o < i; ) {
      const E = p.charCodeAt(o);
      if (!Q(E))
        break;
      o++;
    }
  if (o < i && p.charCodeAt(o) !== 10)
    return !1;
  const M = rr(p.slice(1, g));
  return M ? (r || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[M] > "u" && (e.env.references[M] = { title: y, href: b }), e.parentType = l, e.line = t + n + 1), !0) : !1;
}
const A0 = [
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
], E0 = "[a-zA-Z_:][a-zA-Z0-9:._-]*", D0 = "[^\"'=<>`\\x00-\\x20]+", S0 = "'[^']*'", F0 = '"[^"]*"', T0 = "(?:" + D0 + "|" + S0 + "|" + F0 + ")", M0 = "(?:\\s+" + E0 + "(?:\\s*=\\s*" + T0 + ")?)", Di = "<[A-Za-z][A-Za-z0-9\\-]*" + M0 + "*\\s*\\/?>", Si = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", I0 = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", R0 = "<[?][\\s\\S]*?[?]>", O0 = "<![A-Z]+\\s+[^>]*>", z0 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", P0 = new RegExp("^(?:" + Di + "|" + Si + "|" + I0 + "|" + R0 + "|" + O0 + "|" + z0 + ")"), L0 = new RegExp("^(?:" + Di + "|" + Si + ")"), jt = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + A0.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(L0.source + "\\s*$"), /^$/, !1]
];
function N0(e, t, u, r) {
  let n = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(n) !== 60)
    return !1;
  let i = e.src.slice(n, o), c = 0;
  for (; c < jt.length && !jt[c][0].test(i); c++)
    ;
  if (c === jt.length)
    return !1;
  if (r)
    return jt[c][2];
  let s = t + 1;
  if (!jt[c][1].test(i)) {
    for (; s < u && !(e.sCount[s] < e.blkIndent); s++)
      if (n = e.bMarks[s] + e.tShift[s], o = e.eMarks[s], i = e.src.slice(n, o), jt[c][1].test(i)) {
        i.length !== 0 && s++;
        break;
      }
  }
  e.line = s;
  const a = e.push("html_block", "", 0);
  return a.map = [t, s], a.content = e.getLines(t, s, e.blkIndent, !0), !0;
}
function B0(e, t, u, r) {
  let n = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let i = e.src.charCodeAt(n);
  if (i !== 35 || n >= o)
    return !1;
  let c = 1;
  for (i = e.src.charCodeAt(++n); i === 35 && n < o && c <= 6; )
    c++, i = e.src.charCodeAt(++n);
  if (c > 6 || n < o && !Q(i))
    return !1;
  if (r)
    return !0;
  o = e.skipSpacesBack(o, n);
  const s = e.skipCharsBack(o, 35, n);
  s > n && Q(e.src.charCodeAt(s - 1)) && (o = s), e.line = t + 1;
  const a = e.push("heading_open", "h" + String(c), 1);
  a.markup = "########".slice(0, c), a.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = e.src.slice(n, o).trim(), l.map = [t, e.line], l.children = [];
  const p = e.push("heading_close", "h" + String(c), -1);
  return p.markup = "########".slice(0, c), !0;
}
function j0(e, t, u) {
  const r = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  const n = e.parentType;
  e.parentType = "paragraph";
  let o = 0, i, c = t + 1;
  for (; c < u && !e.isEmpty(c); c++) {
    if (e.sCount[c] - e.blkIndent > 3)
      continue;
    if (e.sCount[c] >= e.blkIndent) {
      let x = e.bMarks[c] + e.tShift[c];
      const b = e.eMarks[c];
      if (x < b && (i = e.src.charCodeAt(x), (i === 45 || i === 61) && (x = e.skipChars(x, i), x = e.skipSpaces(x), x >= b))) {
        o = i === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[c] < 0)
      continue;
    let g = !1;
    for (let x = 0, b = r.length; x < b; x++)
      if (r[x](e, c, u, !0)) {
        g = !0;
        break;
      }
    if (g)
      break;
  }
  if (!o)
    return !1;
  const s = e.getLines(t, c, e.blkIndent, !1).trim();
  e.line = c + 1;
  const a = e.push("heading_open", "h" + String(o), 1);
  a.markup = String.fromCharCode(i), a.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = s, l.map = [t, e.line - 1], l.children = [];
  const p = e.push("heading_close", "h" + String(o), -1);
  return p.markup = String.fromCharCode(i), e.parentType = n, !0;
}
function q0(e, t, u) {
  const r = e.md.block.ruler.getRules("paragraph"), n = e.parentType;
  let o = t + 1;
  for (e.parentType = "paragraph"; o < u && !e.isEmpty(o); o++) {
    if (e.sCount[o] - e.blkIndent > 3 || e.sCount[o] < 0)
      continue;
    let a = !1;
    for (let l = 0, p = r.length; l < p; l++)
      if (r[l](e, o, u, !0)) {
        a = !0;
        break;
      }
    if (a)
      break;
  }
  const i = e.getLines(t, o, e.blkIndent, !1).trim();
  e.line = o;
  const c = e.push("paragraph_open", "p", 1);
  c.map = [t, e.line];
  const s = e.push("inline", "", 0);
  return s.content = i, s.map = [t, e.line], s.children = [], e.push("paragraph_close", "p", -1), e.parentType = n, !0;
}
const Su = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", m0, ["paragraph", "reference"]],
  ["code", x0],
  ["fence", _0, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", w0, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", k0, ["paragraph", "reference", "blockquote", "list"]],
  ["list", y0, ["paragraph", "reference", "blockquote"]],
  ["reference", C0],
  ["html_block", N0, ["paragraph", "reference", "blockquote"]],
  ["heading", B0, ["paragraph", "reference", "blockquote"]],
  ["lheading", j0],
  ["paragraph", q0]
];
function nr() {
  this.ruler = new Te();
  for (let e = 0; e < Su.length; e++)
    this.ruler.push(Su[e][0], Su[e][1], { alt: (Su[e][2] || []).slice() });
}
nr.prototype.tokenize = function(e, t, u) {
  const r = this.ruler.getRules(""), n = r.length, o = e.md.options.maxNesting;
  let i = t, c = !1;
  for (; i < u && (e.line = i = e.skipEmptyLines(i), !(i >= u || e.sCount[i] < e.blkIndent)); ) {
    if (e.level >= o) {
      e.line = u;
      break;
    }
    const s = e.line;
    let a = !1;
    for (let l = 0; l < n; l++)
      if (a = r[l](e, i, u, !1), a) {
        if (s >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!a)
      throw new Error("none of the block rules matched");
    e.tight = !c, e.isEmpty(e.line - 1) && (c = !0), i = e.line, i < u && e.isEmpty(i) && (c = !0, i++, e.line = i);
  }
};
nr.prototype.parse = function(e, t, u, r) {
  if (!e)
    return;
  const n = new this.State(e, t, u, r);
  this.tokenize(n, n.line, n.lineMax);
};
nr.prototype.State = it;
function _u(e, t, u, r) {
  this.src = e, this.env = u, this.md = t, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
_u.prototype.pushPending = function() {
  const e = new Ge("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
_u.prototype.push = function(e, t, u) {
  this.pending && this.pushPending();
  const r = new Ge(e, t, u);
  let n = null;
  return u < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, u > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], n = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(n), r;
};
_u.prototype.scanDelims = function(e, t) {
  let u, r, n = !0, o = !0;
  const i = this.posMax, c = this.src.charCodeAt(e), s = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let a = e;
  for (; a < i && this.src.charCodeAt(a) === c; )
    a++;
  const l = a - e, p = a < i ? this.src.charCodeAt(a) : 32, g = pu(s) || hu(String.fromCharCode(s)), x = pu(p) || hu(String.fromCharCode(p)), b = du(s), D = du(p);
  return D ? n = !1 : x && (b || g || (n = !1)), b ? o = !1 : g && (D || x || (o = !1)), t ? (u = n, r = o) : (u = n && (!o || g), r = o && (!n || x)), { can_open: u, can_close: r, length: l };
};
_u.prototype.Token = Ge;
function H0(e) {
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
function $0(e, t) {
  let u = e.pos;
  for (; u < e.posMax && !H0(e.src.charCodeAt(u)); )
    u++;
  return u === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, u)), e.pos = u, !0);
}
const V0 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function U0(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0)
    return !1;
  const u = e.pos, r = e.posMax;
  if (u + 3 > r || e.src.charCodeAt(u) !== 58 || e.src.charCodeAt(u + 1) !== 47 || e.src.charCodeAt(u + 2) !== 47)
    return !1;
  const n = e.pending.match(V0);
  if (!n)
    return !1;
  const o = n[1], i = e.md.linkify.matchAtStart(e.src.slice(u - o.length));
  if (!i)
    return !1;
  let c = i.url;
  if (c.length <= o.length)
    return !1;
  c = c.replace(/\*+$/, "");
  const s = e.md.normalizeLink(c);
  if (!e.md.validateLink(s))
    return !1;
  if (!t) {
    e.pending = e.pending.slice(0, -o.length);
    const a = e.push("link_open", "a", 1);
    a.attrs = [["href", s]], a.markup = "linkify", a.info = "auto";
    const l = e.push("text", "", 0);
    l.content = e.md.normalizeLinkText(c);
    const p = e.push("link_close", "a", -1);
    p.markup = "linkify", p.info = "auto";
  }
  return e.pos += c.length - o.length, !0;
}
function Z0(e, t) {
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
  for (u++; u < n && Q(e.src.charCodeAt(u)); )
    u++;
  return e.pos = u, !0;
}
const hn = [];
for (let e = 0; e < 256; e++)
  hn.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  hn[e.charCodeAt(0)] = 1;
});
function W0(e, t) {
  let u = e.pos;
  const r = e.posMax;
  if (e.src.charCodeAt(u) !== 92 || (u++, u >= r))
    return !1;
  let n = e.src.charCodeAt(u);
  if (n === 10) {
    for (t || e.push("hardbreak", "br", 0), u++; u < r && (n = e.src.charCodeAt(u), !!Q(n)); )
      u++;
    return e.pos = u, !0;
  }
  let o = e.src[u];
  if (n >= 55296 && n <= 56319 && u + 1 < r) {
    const c = e.src.charCodeAt(u + 1);
    c >= 56320 && c <= 57343 && (o += e.src[u + 1], u++);
  }
  const i = "\\" + o;
  if (!t) {
    const c = e.push("text_special", "", 0);
    n < 256 && hn[n] !== 0 ? c.content = o : c.content = i, c.markup = i, c.info = "escape";
  }
  return e.pos = u + 1, !0;
}
function G0(e, t) {
  let u = e.pos;
  if (e.src.charCodeAt(u) !== 96)
    return !1;
  const n = u;
  u++;
  const o = e.posMax;
  for (; u < o && e.src.charCodeAt(u) === 96; )
    u++;
  const i = e.src.slice(n, u), c = i.length;
  if (e.backticksScanned && (e.backticks[c] || 0) <= n)
    return t || (e.pending += i), e.pos += c, !0;
  let s = u, a;
  for (; (a = e.src.indexOf("`", s)) !== -1; ) {
    for (s = a + 1; s < o && e.src.charCodeAt(s) === 96; )
      s++;
    const l = s - a;
    if (l === c) {
      if (!t) {
        const p = e.push("code_inline", "code", 0);
        p.markup = i, p.content = e.src.slice(u, a).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = s, !0;
    }
    e.backticks[l] = a;
  }
  return e.backticksScanned = !0, t || (e.pending += i), e.pos += c, !0;
}
function K0(e, t) {
  const u = e.pos, r = e.src.charCodeAt(u);
  if (t || r !== 126)
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
function bo(e, t) {
  let u;
  const r = [], n = t.length;
  for (let o = 0; o < n; o++) {
    const i = t[o];
    if (i.marker !== 126 || i.end === -1)
      continue;
    const c = t[i.end];
    u = e.tokens[i.token], u.type = "s_open", u.tag = "s", u.nesting = 1, u.markup = "~~", u.content = "", u = e.tokens[c.token], u.type = "s_close", u.tag = "s", u.nesting = -1, u.markup = "~~", u.content = "", e.tokens[c.token - 1].type === "text" && e.tokens[c.token - 1].content === "~" && r.push(c.token - 1);
  }
  for (; r.length; ) {
    const o = r.pop();
    let i = o + 1;
    for (; i < e.tokens.length && e.tokens[i].type === "s_close"; )
      i++;
    i--, o !== i && (u = e.tokens[i], e.tokens[i] = e.tokens[o], e.tokens[o] = u);
  }
}
function Y0(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  bo(e, e.delimiters);
  for (let r = 0; r < u; r++)
    t[r] && t[r].delimiters && bo(e, t[r].delimiters);
}
const Fi = {
  tokenize: K0,
  postProcess: Y0
};
function X0(e, t) {
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
function go(e, t) {
  const u = t.length;
  for (let r = u - 1; r >= 0; r--) {
    const n = t[r];
    if (n.marker !== 95 && n.marker !== 42 || n.end === -1)
      continue;
    const o = t[n.end], i = r > 0 && t[r - 1].end === n.end + 1 && // check that first two markers match and adjacent
    t[r - 1].marker === n.marker && t[r - 1].token === n.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[n.end + 1].token === o.token + 1, c = String.fromCharCode(n.marker), s = e.tokens[n.token];
    s.type = i ? "strong_open" : "em_open", s.tag = i ? "strong" : "em", s.nesting = 1, s.markup = i ? c + c : c, s.content = "";
    const a = e.tokens[o.token];
    a.type = i ? "strong_close" : "em_close", a.tag = i ? "strong" : "em", a.nesting = -1, a.markup = i ? c + c : c, a.content = "", i && (e.tokens[t[r - 1].token].content = "", e.tokens[t[n.end + 1].token].content = "", r--);
  }
}
function J0(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  go(e, e.delimiters);
  for (let r = 0; r < u; r++)
    t[r] && t[r].delimiters && go(e, t[r].delimiters);
}
const Ti = {
  tokenize: X0,
  postProcess: J0
};
function Q0(e, t) {
  let u, r, n, o, i = "", c = "", s = e.pos, a = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, p = e.posMax, g = e.pos + 1, x = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (x < 0)
    return !1;
  let b = x + 1;
  if (b < p && e.src.charCodeAt(b) === 40) {
    for (a = !1, b++; b < p && (u = e.src.charCodeAt(b), !(!Q(u) && u !== 10)); b++)
      ;
    if (b >= p)
      return !1;
    if (s = b, n = e.md.helpers.parseLinkDestination(e.src, b, e.posMax), n.ok) {
      for (i = e.md.normalizeLink(n.str), e.md.validateLink(i) ? b = n.pos : i = "", s = b; b < p && (u = e.src.charCodeAt(b), !(!Q(u) && u !== 10)); b++)
        ;
      if (n = e.md.helpers.parseLinkTitle(e.src, b, e.posMax), b < p && s !== b && n.ok)
        for (c = n.str, b = n.pos; b < p && (u = e.src.charCodeAt(b), !(!Q(u) && u !== 10)); b++)
          ;
    }
    (b >= p || e.src.charCodeAt(b) !== 41) && (a = !0), b++;
  }
  if (a) {
    if (typeof e.env.references > "u")
      return !1;
    if (b < p && e.src.charCodeAt(b) === 91 ? (s = b + 1, b = e.md.helpers.parseLinkLabel(e, b), b >= 0 ? r = e.src.slice(s, b++) : b = x + 1) : b = x + 1, r || (r = e.src.slice(g, x)), o = e.env.references[rr(r)], !o)
      return e.pos = l, !1;
    i = o.href, c = o.title;
  }
  if (!t) {
    e.pos = g, e.posMax = x;
    const D = e.push("link_open", "a", 1), I = [["href", i]];
    D.attrs = I, c && I.push(["title", c]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = b, e.posMax = p, !0;
}
function el(e, t) {
  let u, r, n, o, i, c, s, a, l = "";
  const p = e.pos, g = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const x = e.pos + 2, b = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (b < 0)
    return !1;
  if (o = b + 1, o < g && e.src.charCodeAt(o) === 40) {
    for (o++; o < g && (u = e.src.charCodeAt(o), !(!Q(u) && u !== 10)); o++)
      ;
    if (o >= g)
      return !1;
    for (a = o, c = e.md.helpers.parseLinkDestination(e.src, o, e.posMax), c.ok && (l = e.md.normalizeLink(c.str), e.md.validateLink(l) ? o = c.pos : l = ""), a = o; o < g && (u = e.src.charCodeAt(o), !(!Q(u) && u !== 10)); o++)
      ;
    if (c = e.md.helpers.parseLinkTitle(e.src, o, e.posMax), o < g && a !== o && c.ok)
      for (s = c.str, o = c.pos; o < g && (u = e.src.charCodeAt(o), !(!Q(u) && u !== 10)); o++)
        ;
    else
      s = "";
    if (o >= g || e.src.charCodeAt(o) !== 41)
      return e.pos = p, !1;
    o++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (o < g && e.src.charCodeAt(o) === 91 ? (a = o + 1, o = e.md.helpers.parseLinkLabel(e, o), o >= 0 ? n = e.src.slice(a, o++) : o = b + 1) : o = b + 1, n || (n = e.src.slice(x, b)), i = e.env.references[rr(n)], !i)
      return e.pos = p, !1;
    l = i.href, s = i.title;
  }
  if (!t) {
    r = e.src.slice(x, b);
    const D = [];
    e.md.inline.parse(
      r,
      e.md,
      e.env,
      D
    );
    const I = e.push("image", "img", 0), O = [["src", l], ["alt", ""]];
    I.attrs = O, I.children = D, I.content = r, s && O.push(["title", s]);
  }
  return e.pos = o, e.posMax = g, !0;
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
      const c = e.push("link_open", "a", 1);
      c.attrs = [["href", i]], c.markup = "autolink", c.info = "auto";
      const s = e.push("text", "", 0);
      s.content = e.md.normalizeLinkText(o);
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
function cl(e, t) {
  if (!e.md.options.html)
    return !1;
  const u = e.posMax, r = e.pos;
  if (e.src.charCodeAt(r) !== 60 || r + 2 >= u)
    return !1;
  const n = e.src.charCodeAt(r + 1);
  if (n !== 33 && n !== 63 && n !== 47 && !il(n))
    return !1;
  const o = e.src.slice(r).match(P0);
  if (!o)
    return !1;
  if (!t) {
    const i = e.push("html_inline", "", 0);
    i.content = o[0], nl(i.content) && e.linkLevel++, ol(i.content) && e.linkLevel--;
  }
  return e.pos += o[0].length, !0;
}
const sl = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, al = /^&([a-z][a-z0-9]{1,31});/i;
function ll(e, t) {
  const u = e.pos, r = e.posMax;
  if (e.src.charCodeAt(u) !== 38 || u + 1 >= r)
    return !1;
  if (e.src.charCodeAt(u + 1) === 35) {
    const o = e.src.slice(u).match(sl);
    if (o) {
      if (!t) {
        const i = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), c = e.push("text_special", "", 0);
        c.content = fn(i) ? ju(i) : ju(65533), c.markup = o[0], c.info = "entity";
      }
      return e.pos += o[0].length, !0;
    }
  } else {
    const o = e.src.slice(u).match(al);
    if (o) {
      const i = vi(o[0]);
      if (i !== o[0]) {
        if (!t) {
          const c = e.push("text_special", "", 0);
          c.content = i, c.markup = o[0], c.info = "entity";
        }
        return e.pos += o[0].length, !0;
      }
    }
  }
  return !1;
}
function mo(e) {
  const t = {}, u = e.length;
  if (!u)
    return;
  let r = 0, n = -2;
  const o = [];
  for (let i = 0; i < u; i++) {
    const c = e[i];
    if (o.push(0), (e[r].marker !== c.marker || n !== c.token - 1) && (r = i), n = c.token, c.length = c.length || 0, !c.close)
      continue;
    t.hasOwnProperty(c.marker) || (t[c.marker] = [-1, -1, -1, -1, -1, -1]);
    const s = t[c.marker][(c.open ? 3 : 0) + c.length % 3];
    let a = r - o[r] - 1, l = a;
    for (; a > s; a -= o[a] + 1) {
      const p = e[a];
      if (p.marker === c.marker && p.open && p.end < 0) {
        let g = !1;
        if ((p.close || c.open) && (p.length + c.length) % 3 === 0 && (p.length % 3 !== 0 || c.length % 3 !== 0) && (g = !0), !g) {
          const x = a > 0 && !e[a - 1].open ? o[a - 1] + 1 : 0;
          o[i] = i - a + x, o[a] = x, c.open = !1, p.end = i, p.close = !1, l = -1, n = -2;
          break;
        }
      }
    }
    l !== -1 && (t[c.marker][(c.open ? 3 : 0) + (c.length || 0) % 3] = l);
  }
}
function fl(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  mo(e.delimiters);
  for (let r = 0; r < u; r++)
    t[r] && t[r].delimiters && mo(t[r].delimiters);
}
function dl(e) {
  let t, u, r = 0;
  const n = e.tokens, o = e.tokens.length;
  for (t = u = 0; t < o; t++)
    n[t].nesting < 0 && r--, n[t].level = r, n[t].nesting > 0 && r++, n[t].type === "text" && t + 1 < o && n[t + 1].type === "text" ? n[t + 1].content = n[t].content + n[t + 1].content : (t !== u && (n[u] = n[t]), u++);
  t !== u && (n.length = u);
}
const mr = [
  ["text", $0],
  ["linkify", U0],
  ["newline", Z0],
  ["escape", W0],
  ["backticks", G0],
  ["strikethrough", Fi.tokenize],
  ["emphasis", Ti.tokenize],
  ["link", Q0],
  ["image", el],
  ["autolink", rl],
  ["html_inline", cl],
  ["entity", ll]
], xr = [
  ["balance_pairs", fl],
  ["strikethrough", Fi.postProcess],
  ["emphasis", Ti.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", dl]
];
function wu() {
  this.ruler = new Te();
  for (let e = 0; e < mr.length; e++)
    this.ruler.push(mr[e][0], mr[e][1]);
  this.ruler2 = new Te();
  for (let e = 0; e < xr.length; e++)
    this.ruler2.push(xr[e][0], xr[e][1]);
}
wu.prototype.skipToken = function(e) {
  const t = e.pos, u = this.ruler.getRules(""), r = u.length, n = e.md.options.maxNesting, o = e.cache;
  if (typeof o[t] < "u") {
    e.pos = o[t];
    return;
  }
  let i = !1;
  if (e.level < n) {
    for (let c = 0; c < r; c++)
      if (e.level++, i = u[c](e, !0), e.level--, i) {
        if (t >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  i || e.pos++, o[t] = e.pos;
};
wu.prototype.tokenize = function(e) {
  const t = this.ruler.getRules(""), u = t.length, r = e.posMax, n = e.md.options.maxNesting;
  for (; e.pos < r; ) {
    const o = e.pos;
    let i = !1;
    if (e.level < n) {
      for (let c = 0; c < u; c++)
        if (i = t[c](e, !1), i) {
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
wu.prototype.parse = function(e, t, u, r) {
  const n = new this.State(e, t, u, r);
  this.tokenize(n);
  const o = this.ruler2.getRules(""), i = o.length;
  for (let c = 0; c < i; c++)
    o[c](n);
};
wu.prototype.State = _u;
function hl(e) {
  const t = {};
  e = e || {}, t.src_Any = xi.source, t.src_Cc = _i.source, t.src_Z = wi.source, t.src_P = an.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const u = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + u + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + u + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + u + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + u + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function zr(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    u && Object.keys(u).forEach(function(r) {
      e[r] = u[r];
    });
  }), e;
}
function or(e) {
  return Object.prototype.toString.call(e);
}
function pl(e) {
  return or(e) === "[object String]";
}
function bl(e) {
  return or(e) === "[object Object]";
}
function gl(e) {
  return or(e) === "[object RegExp]";
}
function xo(e) {
  return or(e) === "[object Function]";
}
function ml(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const Mi = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function xl(e) {
  return Object.keys(e || {}).reduce(function(t, u) {
    return t || Mi.hasOwnProperty(u);
  }, !1);
}
const _l = {
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
}, wl = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", kl = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function vl(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function yl(e) {
  return function(t, u) {
    const r = t.slice(u);
    return e.test(r) ? r.match(e)[0].length : 0;
  };
}
function _o() {
  return function(e, t) {
    t.normalize(e);
  };
}
function qu(e) {
  const t = e.re = hl(e.__opts__), u = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || u.push(wl), u.push(t.src_xn), t.src_tlds = u.join("|");
  function r(c) {
    return c.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(r(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(r(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(r(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(r(t.tpl_host_fuzzy_test), "i");
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
    if (e.__compiled__[c] = a, bl(s)) {
      gl(s.validate) ? a.validate = yl(s.validate) : xo(s.validate) ? a.validate = s.validate : o(c, s), xo(s.normalize) ? a.normalize = s.normalize : s.normalize ? o(c, s) : a.normalize = _o();
      return;
    }
    if (pl(s)) {
      n.push(c);
      return;
    }
    o(c, s);
  }), n.forEach(function(c) {
    e.__compiled__[e.__schemas__[c]] && (e.__compiled__[c].validate = e.__compiled__[e.__schemas__[c]].validate, e.__compiled__[c].normalize = e.__compiled__[e.__schemas__[c]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: _o() };
  const i = Object.keys(e.__compiled__).filter(function(c) {
    return c.length > 0 && e.__compiled__[c];
  }).map(ml).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), vl(e);
}
function Cl(e, t) {
  const u = e.__index__, r = e.__last_index__, n = e.__text_cache__.slice(u, r);
  this.schema = e.__schema__.toLowerCase(), this.index = u + t, this.lastIndex = r + t, this.raw = n, this.text = n, this.url = n;
}
function Pr(e, t) {
  const u = new Cl(e, t);
  return e.__compiled__[u.schema].normalize(u, e), u;
}
function Le(e, t) {
  if (!(this instanceof Le))
    return new Le(e, t);
  t || xl(e) && (t = e, e = {}), this.__opts__ = zr({}, Mi, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = zr({}, _l, e), this.__compiled__ = {}, this.__tlds__ = kl, this.__tlds_replaced__ = !1, this.re = {}, qu(this);
}
Le.prototype.add = function(t, u) {
  return this.__schemas__[t] = u, qu(this), this;
};
Le.prototype.set = function(t) {
  return this.__opts__ = zr(this.__opts__, t), this;
};
Le.prototype.test = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return !1;
  let u, r, n, o, i, c, s, a, l;
  if (this.re.schema_test.test(t)) {
    for (s = this.re.schema_search, s.lastIndex = 0; (u = s.exec(t)) !== null; )
      if (o = this.testSchemaAt(t, u[2], s.lastIndex), o) {
        this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (a = t.search(this.re.host_fuzzy_test), a >= 0 && (this.__index__ < 0 || a < this.__index__) && (r = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = t.indexOf("@"), l >= 0 && (n = t.match(this.re.email_fuzzy)) !== null && (i = n.index + n[1].length, c = n.index + n[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && c > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = c))), this.__index__ >= 0;
};
Le.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Le.prototype.testSchemaAt = function(t, u, r) {
  return this.__compiled__[u.toLowerCase()] ? this.__compiled__[u.toLowerCase()].validate(t, r, this) : 0;
};
Le.prototype.match = function(t) {
  const u = [];
  let r = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (u.push(Pr(this, r)), r = this.__last_index__);
  let n = r ? t.slice(r) : t;
  for (; this.test(n); )
    u.push(Pr(this, r)), n = n.slice(this.__last_index__), r += this.__last_index__;
  return u.length ? u : null;
};
Le.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return null;
  const u = this.re.schema_at_start.exec(t);
  if (!u)
    return null;
  const r = this.testSchemaAt(t, u[2], u[0].length);
  return r ? (this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + r, Pr(this, 0)) : null;
};
Le.prototype.tlds = function(t, u) {
  return t = Array.isArray(t) ? t : [t], u ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(r, n, o) {
    return r !== o[n - 1];
  }).reverse(), qu(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, qu(this), this);
};
Le.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Le.prototype.onCompile = function() {
};
const Wt = 2147483647, rt = 36, pn = 1, bu = 26, Al = 38, El = 700, Ii = 72, Ri = 128, Oi = "-", Dl = /^xn--/, Sl = /[^\0-\x7F]/, Fl = /[\x2E\u3002\uFF0E\uFF61]/g, Tl = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, _r = rt - pn, nt = Math.floor, wr = String.fromCharCode;
function kt(e) {
  throw new RangeError(Tl[e]);
}
function Ml(e, t) {
  const u = [];
  let r = e.length;
  for (; r--; )
    u[r] = t(e[r]);
  return u;
}
function zi(e, t) {
  const u = e.split("@");
  let r = "";
  u.length > 1 && (r = u[0] + "@", e = u[1]), e = e.replace(Fl, ".");
  const n = e.split("."), o = Ml(n, t).join(".");
  return r + o;
}
function Pi(e) {
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
const Il = (e) => String.fromCodePoint(...e), Rl = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : rt;
}, wo = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, Li = function(e, t, u) {
  let r = 0;
  for (e = u ? nt(e / El) : e >> 1, e += nt(e / t); e > _r * bu >> 1; r += rt)
    e = nt(e / _r);
  return nt(r + (_r + 1) * e / (e + Al));
}, Ni = function(e) {
  const t = [], u = e.length;
  let r = 0, n = Ri, o = Ii, i = e.lastIndexOf(Oi);
  i < 0 && (i = 0);
  for (let c = 0; c < i; ++c)
    e.charCodeAt(c) >= 128 && kt("not-basic"), t.push(e.charCodeAt(c));
  for (let c = i > 0 ? i + 1 : 0; c < u; ) {
    const s = r;
    for (let l = 1, p = rt; ; p += rt) {
      c >= u && kt("invalid-input");
      const g = Rl(e.charCodeAt(c++));
      g >= rt && kt("invalid-input"), g > nt((Wt - r) / l) && kt("overflow"), r += g * l;
      const x = p <= o ? pn : p >= o + bu ? bu : p - o;
      if (g < x)
        break;
      const b = rt - x;
      l > nt(Wt / b) && kt("overflow"), l *= b;
    }
    const a = t.length + 1;
    o = Li(r - s, a, s == 0), nt(r / a) > Wt - n && kt("overflow"), n += nt(r / a), r %= a, t.splice(r++, 0, n);
  }
  return String.fromCodePoint(...t);
}, Bi = function(e) {
  const t = [];
  e = Pi(e);
  const u = e.length;
  let r = Ri, n = 0, o = Ii;
  for (const s of e)
    s < 128 && t.push(wr(s));
  const i = t.length;
  let c = i;
  for (i && t.push(Oi); c < u; ) {
    let s = Wt;
    for (const l of e)
      l >= r && l < s && (s = l);
    const a = c + 1;
    s - r > nt((Wt - n) / a) && kt("overflow"), n += (s - r) * a, r = s;
    for (const l of e)
      if (l < r && ++n > Wt && kt("overflow"), l === r) {
        let p = n;
        for (let g = rt; ; g += rt) {
          const x = g <= o ? pn : g >= o + bu ? bu : g - o;
          if (p < x)
            break;
          const b = p - x, D = rt - x;
          t.push(
            wr(wo(x + b % D, 0))
          ), p = nt(b / D);
        }
        t.push(wr(wo(p, 0))), o = Li(n, a, c === i), n = 0, ++c;
      }
    ++n, ++r;
  }
  return t.join("");
}, Ol = function(e) {
  return zi(e, function(t) {
    return Dl.test(t) ? Ni(t.slice(4).toLowerCase()) : t;
  });
}, zl = function(e) {
  return zi(e, function(t) {
    return Sl.test(t) ? "xn--" + Bi(t) : t;
  });
}, ji = {
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
    decode: Pi,
    encode: Il
  },
  decode: Ni,
  encode: Bi,
  toASCII: zl,
  toUnicode: Ol
}, Pl = {
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
}, Ll = {
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
}, Nl = {
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
  default: Pl,
  zero: Ll,
  commonmark: Nl
}, jl = /^(vbscript|javascript|file|data):/, ql = /^data:image\/(gif|png|jpeg|webp);/;
function Hl(e) {
  const t = e.trim().toLowerCase();
  return jl.test(t) ? ql.test(t) : !0;
}
const qi = ["http:", "https:", "mailto:"];
function $l(e) {
  const t = sn(e, !0);
  if (t.hostname && (!t.protocol || qi.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ji.toASCII(t.hostname);
    } catch {
    }
  return xu(cn(t));
}
function Vl(e) {
  const t = sn(e, !0);
  if (t.hostname && (!t.protocol || qi.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ji.toUnicode(t.hostname);
    } catch {
    }
  return Kt(cn(t), Kt.defaultChars + "%");
}
function qe(e, t) {
  if (!(this instanceof qe))
    return new qe(e, t);
  t || ln(e) || (t = e || {}, e = "default"), this.inline = new wu(), this.block = new nr(), this.core = new dn(), this.renderer = new Xt(), this.linkify = new Le(), this.validateLink = Hl, this.normalizeLink = $l, this.normalizeLinkText = Vl, this.utils = Wa, this.helpers = ur({}, Xa), this.options = {}, this.configure(e), t && this.set(t);
}
qe.prototype.set = function(e) {
  return ur(this.options, e), this;
};
qe.prototype.configure = function(e) {
  const t = this;
  if (ln(e)) {
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
qe.prototype.enable = function(e, t) {
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
qe.prototype.disable = function(e, t) {
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
qe.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
qe.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const u = new this.core.State(e, this, t);
  return this.core.process(u), u.tokens;
};
qe.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
qe.prototype.parseInline = function(e, t) {
  const u = new this.core.State(e, this, t);
  return u.inlineMode = !0, this.core.process(u), u.tokens;
};
qe.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
const dt = (e, t) => {
  const u = e.__vccOpts || e;
  for (const [r, n] of t)
    u[r] = n;
  return u;
}, Ul = {
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
    const t = X(e.open);
    return {
      isOpen: t,
      toggle: () => {
        t.value = !t.value;
      }
    };
  }
}, Zl = { class: "flex items-center gap-4 py-4 px-2 cursor-pointer justify-between bg-gray-100" }, Wl = { class: "text-xl font-semibold flex items-center gap-2" }, Gl = {
  key: 0,
  class: "swap swap-flip"
}, Kl = ["checked"], Yl = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "m8.25 4.5 7.5 7.5-7.5 7.5"
}, null, -1), Xl = [
  Yl
], Jl = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "m19.5 8.25-7.5 7.5-7.5-7.5"
}, null, -1), Ql = [
  Jl
], ef = { class: "collapse-content p-0 m-0" };
function tf(e, t, u, r, n, o) {
  return F(), P("div", {
    class: gu([[r.isOpen ? "collapse-open" : ""], "collapse h-fit p-0 m-0 rounded-none shadow-md"])
  }, [
    f("div", {
      onClick: t[2] || (t[2] = (...i) => r.toggle && r.toggle(...i)),
      class: "collapse-title text-lg h-auto min-h-0 p-0 m-0"
    }, [
      f("div", Zl, [
        f("span", Wl, [
          Rn(e.$slots, "icon"),
          f("span", null, L(u.title), 1)
        ]),
        u.hideArrow ? H("", !0) : (F(), P("label", Gl, [
          f("input", {
            type: "checkbox",
            checked: r.isOpen
          }, null, 8, Kl),
          (F(), P("svg", {
            onClick: t[0] || (t[0] = (...i) => r.toggle && r.toggle(...i)),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "swap-off w-6 h-6"
          }, Xl)),
          (F(), P("svg", {
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
    f("div", ef, [
      Rn(e.$slots, "default")
    ])
  ], 2);
}
const bn = /* @__PURE__ */ dt(Ul, [["render", tf]]), uf = {
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
    const e = new qe({
      linkify: !0
    });
    return e.linkify.set({
      fuzzyEmail: !1
    }), {
      md: e
    };
  },
  components: { Collapse: bn }
}, rf = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-6 h-6"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  })
], -1), nf = ["innerHTML"], of = {
  key: 1,
  class: "grid break-words w-full gap-4"
}, cf = { class: "text-xl font-semibold" }, sf = ["innerHTML"];
function af(e, t, u, r, n, o) {
  const i = Be("Collapse");
  return u.isCollapsible ? (F(), ye(i, {
    key: 0,
    title: u.title,
    open: u.open
  }, {
    icon: Ve(() => [
      rf
    ]),
    default: Ve(() => [
      f("div", {
        class: "prose p-2",
        innerHTML: r.md.render(u.text)
      }, null, 8, nf)
    ]),
    _: 1
  }, 8, ["title", "open"])) : (F(), P("div", of, [
    f("h2", cf, L(u.title), 1),
    f("div", {
      style: { "word-break": "break-word" },
      innerHTML: r.md.render(u.text)
    }, null, 8, sf)
  ]));
}
const lf = /* @__PURE__ */ dt(uf, [["render", af]]), ff = {
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
    }, u = Object.keys(e.features).map((o) => {
      const i = t.itemCategories[o], s = e.features[o].map((a) => ({
        text: t[o][a]
      }));
      return {
        category: i,
        features: s
      };
    }), r = u.slice(0, u.length / 2), n = u.slice(u.length / 2, u.length);
    return {
      featuresList1: r,
      featuresList2: n
    };
  },
  components: { Collapse: bn }
}, df = { class: "flex flex-col gap-4 w-full" }, hf = /* @__PURE__ */ f("h2", { class: "text-2xl" }, "Ausstatung", -1), pf = { class: "grid sm:grid-cols-2 gap-6" }, bf = { class: "flex flex-col gap-4 w-full" }, gf = { class: "table table-lg table-zebra" }, mf = { class: "p-2" }, xf = { class: "flex w-full justify-between items-center" }, _f = /* @__PURE__ */ f("span", { class: "w-8 h-8 flex items-center text-primary-blue" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: "size-6"
  }, [
    /* @__PURE__ */ f("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      "clip-rule": "evenodd"
    })
  ])
], -1), wf = { class: "flex flex-col gap-4 w-full" }, kf = { class: "table table-lg table-zebra" }, vf = { class: "p-2" }, yf = { class: "flex w-full justify-between items-center" }, Cf = /* @__PURE__ */ f("span", { class: "w-8 h-8 flex items-center text-primary-blue" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: "size-6"
  }, [
    /* @__PURE__ */ f("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      "clip-rule": "evenodd"
    })
  ])
], -1);
function Af(e, t, u, r, n, o) {
  const i = Be("Collapse");
  return F(), P("div", df, [
    hf,
    f("div", pf, [
      f("div", bf, [
        (F(!0), P(ce, null, zt(r.featuresList1, (c) => (F(), ye(i, {
          key: c.category,
          title: c.category,
          open: !1
        }, {
          default: Ve(() => [
            f("table", gf, [
              f("tbody", null, [
                (F(!0), P(ce, null, zt(c.features, (s) => (F(), P("tr", {
                  key: s.text
                }, [
                  f("td", mf, [
                    f("span", xf, [
                      f("span", null, L(s.text), 1),
                      _f
                    ])
                  ])
                ]))), 128))
              ])
            ])
          ]),
          _: 2
        }, 1032, ["title"]))), 128))
      ]),
      f("div", wf, [
        (F(!0), P(ce, null, zt(r.featuresList2, (c) => (F(), ye(i, {
          key: c.category,
          title: c.category,
          open: !1
        }, {
          default: Ve(() => [
            f("table", kf, [
              f("tbody", null, [
                (F(!0), P(ce, null, zt(c.features, (s) => (F(), P("tr", {
                  key: s.text
                }, [
                  f("td", vf, [
                    f("span", yf, [
                      f("span", null, L(s.text), 1),
                      Cf
                    ])
                  ])
                ]))), 128))
              ])
            ])
          ]),
          _: 2
        }, 1032, ["title"]))), 128))
      ])
    ])
  ]);
}
const Ef = /* @__PURE__ */ dt(ff, [["render", Af]]), Df = {
  name: "TechnicalDetails",
  props: ["technicalData", "isofixSeats", "sittingPlaces"],
  setup(e) {
  },
  components: { Collapse: bn }
}, Sf = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-6 h-6"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
  }),
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  })
], -1), Ff = { class: "w-full table table-zebra table-lg border-collapse" }, Tf = /* @__PURE__ */ f("thead", null, [
  /* @__PURE__ */ f("tr", { class: "text-left" }, [
    /* @__PURE__ */ f("th", { class: "p-2 max-sm:hidden" }),
    /* @__PURE__ */ f("th", { class: "p-2 max-sm:hidden" })
  ])
], -1), Mf = { class: "px-4" }, If = { key: 0 }, Rf = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Hersteller (Wohnmobilmarke)", -1), Of = { class: "p-2 text-right font-semibold text-lg" }, zf = { key: 1 }, Pf = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Model", -1), Lf = { class: "p-2 text-right font-semibold text-lg" }, Nf = { key: 2 }, Bf = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Hersteller (Chassis)", -1), jf = { class: "p-2 text-right font-semibold text-lg" }, qf = { key: 3 }, Hf = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Modellbezeichnung (Chassis)", -1), $f = { class: "p-2 text-right font-semibold text-lg" }, Vf = { key: 4 }, Uf = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Hauptkategorie", -1), Zf = { class: "p-2 text-right font-semibold text-lg" }, Wf = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "ISOFIX-Sitze", -1), Gf = { class: "p-2 text-right font-semibold text-lg" }, Kf = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Sitzplätze mit Gurt", -1), Yf = { class: "p-2 text-right font-semibold text-lg" }, Xf = { key: 5 }, Jf = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Zulässiges Gesamtgewicht", -1), Qf = { class: "p-2 text-right font-semibold text-lg" }, ed = { key: 6 }, td = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Gewicht in fahrbereitem Zustand", -1), ud = { class: "p-2 text-right font-semibold text-lg" }, rd = { key: 7 }, nd = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Baujahr", -1), od = { class: "p-2 text-right font-semibold text-lg" }, id = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Länge", -1), cd = { class: "p-2 text-right font-semibold text-lg" }, sd = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Breite", -1), ad = { class: "p-2 text-right font-semibold text-lg" }, ld = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Höhe", -1), fd = { class: "p-2 text-right font-semibold text-lg" }, dd = { key: 8 }, hd = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Motorleistung", -1), pd = { class: "p-2 text-right font-semibold text-lg" }, bd = { key: 9 }, gd = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Kraftstoff", -1), md = { class: "p-2 text-right font-semibold text-lg capitalize" }, xd = { key: 10 }, _d = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Antriebsart", -1), wd = { class: "p-2 text-right font-semibold text-lg" }, kd = { key: 11 }, vd = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Anzahl der Gänge", -1), yd = { class: "p-2 text-right font-semibold text-lg" }, Cd = { key: 12 }, Ad = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Getriebe", -1), Ed = { class: "p-2 text-right font-semibold text-lg" }, Dd = { key: 13 }, Sd = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Kraftstofftank-Kapazität", -1), Fd = { class: "p-2 text-right font-semibold text-lg" }, Td = { key: 14 }, Md = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Frischwassertank", -1), Id = { class: "p-2 text-right font-semibold text-lg" }, Rd = { key: 15 }, Od = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Abwassertank", -1), zd = { class: "p-2 text-right font-semibold text-lg" }, Pd = { key: 16 }, Ld = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Achsen", -1), Nd = { class: "p-2 text-right font-semibold text-lg" }, Bd = { key: 17 }, jd = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Reifen", -1), qd = { class: "p-2 text-right font-semibold text-lg" }, Hd = { key: 18 }, $d = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Verbrauch pro 100 km", -1), Vd = { class: "p-2 text-right font-semibold text-lg" }, Ud = { key: 19 }, Zd = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Schadstoffklasse", -1), Wd = { class: "p-2 text-right font-semibold text-lg uppercase" }, Gd = { key: 20 }, Kd = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Umweltplakette", -1), Yd = { class: "text-right p-2" }, Xd = { key: 0 }, Jd = { key: 1 }, Qd = { key: 2 }, e1 = { key: 21 }, t1 = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Ladekapazität", -1), u1 = { class: "p-2 text-right font-semibold text-lg" }, r1 = { key: 22 }, n1 = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Maße vordere Seitensitzgruppe", -1), o1 = { class: "p-2 text-right font-semibold text-lg" }, i1 = { key: 23 }, c1 = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Stauklappengröße im Heck", -1), s1 = { class: "p-2 text-right font-semibold text-lg" }, a1 = { key: 24 }, l1 = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Bettumbau Sitzgruppe", -1), f1 = { class: "p-2 text-right font-semibold text-lg" }, d1 = { key: 25 }, h1 = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Maße Heckbett", -1), p1 = { class: "p-2 text-right font-semibold text-lg" }, b1 = { key: 26 }, g1 = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Maße Hubbett", -1), m1 = { class: "p-2 text-right font-semibold text-lg" }, x1 = { key: 27 }, _1 = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Maße Längsbank", -1), w1 = { class: "p-2 text-right font-semibold text-lg" }, k1 = { key: 28 }, v1 = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Batteriekapazität", -1), y1 = { class: "p-2 text-right font-semibold text-lg" }, C1 = { key: 29 }, A1 = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Anhängerkupplung", -1), E1 = { class: "p-2 text-right font-semibold text-lg" }, D1 = { key: 30 }, S1 = /* @__PURE__ */ f("th", { class: "p-2 text-left font-light" }, "Kapazität Kühlschrank", -1), F1 = { class: "p-2 text-right font-semibold text-lg" };
function T1(e, t, u, r, n, o) {
  const i = Be("Collapse");
  return F(), ye(i, {
    title: "Technische Angaben",
    open: !0
  }, {
    icon: Ve(() => [
      Sf
    ]),
    default: Ve(() => {
      var c, s, a, l, p, g, x, b, D, I, O, j, y, M, E, R, U, ee, te, pe, we, be, Ce, Me, Ae, ne, Y, W, Ie, Ke, Re, oe, Oe, ct, ht, ke, Ye, pt, bt, Ne, Xe, Je, h, d, m, _, w, C, S, v, A, k, T, N, z, B, V, G, J, ie, Ee, st, Jt, gt, Qt, me, ze, eu, gn, mn, xn, _n;
      return [
        f("table", Ff, [
          Tf,
          f("tbody", Mf, [
            (c = u.technicalData) != null && c.manufacturer ? (F(), P("tr", If, [
              Rf,
              f("th", Of, L((s = u.technicalData) == null ? void 0 : s.manufacturer), 1)
            ])) : H("", !0),
            u.technicalData.model ? (F(), P("tr", zf, [
              Pf,
              f("th", Lf, L(u.technicalData.model), 1)
            ])) : H("", !0),
            (a = u.technicalData) != null && a.manufacturerChassis ? (F(), P("tr", Nf, [
              Bf,
              f("th", jf, L((l = u.technicalData) == null ? void 0 : l.manufacturerChassis), 1)
            ])) : H("", !0),
            (p = u.technicalData) != null && p.modelChassis ? (F(), P("tr", qf, [
              Hf,
              f("th", $f, L((g = u.technicalData) == null ? void 0 : g.modelChassis), 1)
            ])) : H("", !0),
            (x = u.technicalData) != null && x.type ? (F(), P("tr", Vf, [
              Uf,
              f("th", Zf, L((b = u.technicalData) == null ? void 0 : b.type), 1)
            ])) : H("", !0),
            f("tr", null, [
              Wf,
              f("th", Gf, L(u.isofixSeats ?? "-"), 1)
            ]),
            f("tr", null, [
              Kf,
              f("th", Yf, L(u.sittingPlaces), 1)
            ]),
            (D = u.technicalData) != null && D.grossVehicleWeight ? (F(), P("tr", Xf, [
              Jf,
              f("th", Qf, L(((I = u.technicalData) == null ? void 0 : I.grossVehicleWeight.split("_")[0]) === "higher" ? "über" : "bis") + " " + L((O = u.technicalData) == null ? void 0 : O.grossVehicleWeight.split("_")[1]) + " kg ", 1)
            ])) : H("", !0),
            (j = u.technicalData) != null && j.emptyWeight ? (F(), P("tr", ed, [
              td,
              f("th", ud, L((y = u.technicalData) == null ? void 0 : y.emptyWeight) + " kg", 1)
            ])) : H("", !0),
            (M = u.technicalData) != null && M.constructionYear ? (F(), P("tr", rd, [
              nd,
              f("th", od, L((E = u.technicalData) == null ? void 0 : E.constructionYear), 1)
            ])) : H("", !0),
            f("tr", null, [
              id,
              f("th", cd, L((R = u.technicalData) == null ? void 0 : R.length) + " cm", 1)
            ]),
            f("tr", null, [
              sd,
              f("th", ad, L((U = u.technicalData) == null ? void 0 : U.width) + " cm", 1)
            ]),
            f("tr", null, [
              ld,
              f("th", fd, L((ee = u.technicalData) == null ? void 0 : ee.height) + " cm", 1)
            ]),
            (te = u.technicalData) != null && te.power ? (F(), P("tr", dd, [
              hd,
              f("th", pd, L((pe = u.technicalData) == null ? void 0 : pe.power) + " PS", 1)
            ])) : H("", !0),
            (we = u.technicalData) != null && we.fuelType ? (F(), P("tr", bd, [
              gd,
              f("th", md, L((be = u.technicalData) == null ? void 0 : be.fuelType), 1)
            ])) : H("", !0),
            (Ce = u.technicalData) != null && Ce.modeOfDrive ? (F(), P("tr", xd, [
              _d,
              f("th", wd, L(((Me = u.technicalData) == null ? void 0 : Me.modeOfDrive) === "2wheel" && "Zweirad"), 1)
            ])) : H("", !0),
            (Ae = u.technicalData) != null && Ae.numberOfGears ? (F(), P("tr", kd, [
              vd,
              f("th", yd, L((ne = u.technicalData) == null ? void 0 : ne.numberOfGears), 1)
            ])) : H("", !0),
            (Y = u.technicalData) != null && Y.transmission ? (F(), P("tr", Cd, [
              Ad,
              f("th", Ed, L(((W = u.technicalData) == null ? void 0 : W.transmission) === "manual" ? "Manuell" : "Automatik"), 1)
            ])) : H("", !0),
            (Ie = u.technicalData) != null && Ie.fuelTankCapacity ? (F(), P("tr", Dd, [
              Sd,
              f("th", Fd, L((Ke = u.technicalData) == null ? void 0 : Ke.fuelTankCapacity) + " Liter", 1)
            ])) : H("", !0),
            (Re = u.technicalData) != null && Re.freshWaterTank ? (F(), P("tr", Td, [
              Md,
              f("th", Id, L((oe = u.technicalData) == null ? void 0 : oe.freshWaterTankCapacity) + " Liter", 1)
            ])) : H("", !0),
            (Oe = u.technicalData) != null && Oe.wasteWaterTank ? (F(), P("tr", Rd, [
              Od,
              f("th", zd, L((ct = u.technicalData) == null ? void 0 : ct.wasteWaterTankCapacity) + " Liter", 1)
            ])) : H("", !0),
            (ht = u.technicalData) != null && ht.axis ? (F(), P("tr", Pd, [
              Ld,
              f("th", Nd, L((ke = u.technicalData) == null ? void 0 : ke.axis), 1)
            ])) : H("", !0),
            (Ye = u.technicalData) != null && Ye.tyresWidth && ((pt = u.technicalData) != null && pt.tyresRelation) && ((bt = u.technicalData) != null && bt.tyresType) && u.technicalData.tyresDiameter && u.technicalData.tyresSpeedIndex ? (F(), P("tr", Bd, [
              jd,
              f("th", qd, L((Ne = u.technicalData) == null ? void 0 : Ne.tyresWidth) + "/" + L((Xe = u.technicalData) == null ? void 0 : Xe.tyresRelation) + " " + L((Je = u.technicalData) == null ? void 0 : Je.tyresType) + " " + L((h = u.technicalData) == null ? void 0 : h.tyresDiameter) + " " + L((d = u.technicalData) == null ? void 0 : d.tyresSpeedIndex), 1)
            ])) : H("", !0),
            (m = u.technicalData) != null && m.consumptionPer100km ? (F(), P("tr", Hd, [
              $d,
              f("th", Vd, L((_ = u.technicalData) == null ? void 0 : _.consumptionPer100km) + " L/100km", 1)
            ])) : H("", !0),
            (w = u.technicalData) != null && w.emissionStandard ? (F(), P("tr", Ud, [
              Zd,
              f("th", Wd, L((C = u.technicalData) == null ? void 0 : C.emissionStandard), 1)
            ])) : H("", !0),
            (S = u.technicalData) != null && S.environmentalBadge ? (F(), P("tr", Gd, [
              Kd,
              f("th", Yd, [
                ((v = u.technicalData) == null ? void 0 : v.environmentalBadge) === "green" ? (F(), P("span", Xd, "Grün")) : H("", !0),
                ((A = u.technicalData) == null ? void 0 : A.environmentalBadge) === "yellow" ? (F(), P("span", Jd, "Gelb")) : H("", !0),
                ((k = u.technicalData) == null ? void 0 : k.environmentalBadge) === "red" ? (F(), P("span", Qd, "Rot")) : H("", !0)
              ])
            ])) : H("", !0),
            (T = u.technicalData) != null && T.capacityLoading ? (F(), P("tr", e1, [
              t1,
              f("th", u1, L((N = u.technicalData) == null ? void 0 : N.capacityLoading) + " L", 1)
            ])) : H("", !0),
            (z = u.technicalData) != null && z.sizeSittingSide ? (F(), P("tr", r1, [
              n1,
              f("th", o1, L((B = u.technicalData) == null ? void 0 : B.sizeSittingSide), 1)
            ])) : H("", !0),
            (V = u.technicalData) != null && V.sizeLoadingOpening ? (F(), P("tr", i1, [
              c1,
              f("th", s1, L((G = u.technicalData) == null ? void 0 : G.sizeLoadingOpening), 1)
            ])) : H("", !0),
            (J = u.technicalData) != null && J.bedSize ? (F(), P("tr", a1, [
              l1,
              f("th", f1, L((ie = u.technicalData) == null ? void 0 : ie.bedSize), 1)
            ])) : H("", !0),
            (Ee = u.technicalData) != null && Ee.cornerBedSize ? (F(), P("tr", d1, [
              h1,
              f("th", p1, L((st = u.technicalData) == null ? void 0 : st.cornerBedSize), 1)
            ])) : H("", !0),
            (Jt = u.technicalData) != null && Jt.mainBedSize ? (F(), P("tr", b1, [
              g1,
              f("th", m1, L((gt = u.technicalData) == null ? void 0 : gt.mainBedSize), 1)
            ])) : H("", !0),
            (Qt = u.technicalData) != null && Qt.bankSize ? (F(), P("tr", x1, [
              _1,
              f("th", w1, L((me = u.technicalData) == null ? void 0 : me.bankSize), 1)
            ])) : H("", !0),
            (ze = u.technicalData) != null && ze.batteryCapacity ? (F(), P("tr", k1, [
              v1,
              f("th", y1, L((eu = u.technicalData) == null ? void 0 : eu.batteryCapacity) + " Ah", 1)
            ])) : H("", !0),
            (gn = u.technicalData) != null && gn.towingCapacity ? (F(), P("tr", C1, [
              A1,
              f("th", E1, L((mn = u.technicalData) == null ? void 0 : mn.towingCapacity) + " kg", 1)
            ])) : H("", !0),
            (xn = u.technicalData) != null && xn.fridgeVolume ? (F(), P("tr", D1, [
              S1,
              f("th", F1, L((_n = u.technicalData) == null ? void 0 : _n.fridgeVolume) + " Liter", 1)
            ])) : H("", !0)
          ])
        ])
      ];
    }),
    _: 1
  });
}
const M1 = /* @__PURE__ */ dt(Df, [["render", T1]]), I1 = {
  name: "FirstSection",
  props: {
    price: {
      type: Number,
      required: !0,
      default: 0
    },
    km: {
      type: Number,
      required: !0,
      default: 0
    },
    leistung: {
      type: Number,
      required: !0,
      default: 0
    },
    fuel: {
      type: String,
      required: !0,
      default: ""
    },
    gear: {
      type: String,
      required: !0,
      default: ""
    },
    erstzulassung: {
      type: String,
      required: !0,
      default: ""
    },
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
    grossVehicleWeight: {
      type: String,
      required: !0,
      default: ""
    }
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(this.price);
    }
  },
  setup(e) {
    return {
      driver_license: at(() => (console.log(e.grossVehicleWeight), e.grossVehicleWeight.split("_")[0] === "higher" ? "C1" : "B"))
    };
  }
}, R1 = { class: "grid w-full gap-6 grid-cols-2 lg:grid-cols-5 text-center" }, O1 = { class: "w-full gap-2 flex items-center" }, z1 = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "size-12"
}, [
  /* @__PURE__ */ f("path", {
    "fill-rule": "evenodd",
    d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.902 7.098a3.75 3.75 0 0 1 3.903-.884.75.75 0 1 0 .498-1.415A5.25 5.25 0 0 0 8.005 9.75H7.5a.75.75 0 0 0 0 1.5h.054a5.281 5.281 0 0 0 0 1.5H7.5a.75.75 0 0 0 0 1.5h.505a5.25 5.25 0 0 0 6.494 2.701.75.75 0 1 0-.498-1.415 3.75 3.75 0 0 1-4.252-1.286h3.001a.75.75 0 0 0 0-1.5H9.075a3.77 3.77 0 0 1 0-1.5h3.675a.75.75 0 0 0 0-1.5h-3c.105-.14.221-.274.348-.402Z",
    "clip-rule": "evenodd"
  })
], -1), P1 = { class: "flex flex-col gap-0 text-start font-semibold" }, L1 = /* @__PURE__ */ f("span", { class: "font-light text-sm" }, "Preis", -1), N1 = { class: "text-2xl" }, B1 = { class: "w-full gap-2 flex items-center" }, j1 = /* @__PURE__ */ f("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "bed",
  class: "size-12",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512",
  color: ""
}, [
  /* @__PURE__ */ f("path", {
    fill: "currentColor",
    d: "M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"
  })
], -1), q1 = { class: "flex flex-col gap-0 text-start font-semibold" }, H1 = /* @__PURE__ */ f("span", { class: "font-light text-sm" }, "Schlafplätze", -1), $1 = { class: "text-xl text-center" }, V1 = { class: "w-full gap-2 flex items-center" }, U1 = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "size-12"
}, [
  /* @__PURE__ */ f("path", {
    "fill-rule": "evenodd",
    d: "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
    "clip-rule": "evenodd"
  })
], -1), Z1 = { class: "flex flex-col gap-0 text-start font-semibold" }, W1 = /* @__PURE__ */ f("span", { class: "font-light text-sm" }, "Sitzplätze", -1), G1 = { class: "text-xl text-center" }, K1 = { class: "w-full gap-2 flex items-center" }, Y1 = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "size-12"
}, [
  /* @__PURE__ */ f("path", {
    "fill-rule": "evenodd",
    d: "M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z",
    "clip-rule": "evenodd"
  })
], -1), X1 = { class: "flex flex-col gap-0 text-start font-semibold" }, J1 = /* @__PURE__ */ f("span", { class: "font-light text-sm" }, "Führerscheinklasse", -1), Q1 = { class: "text-xl text-center" }, eh = { class: "w-full gap-2 flex items-center" }, th = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "size-12"
}, [
  /* @__PURE__ */ f("path", {
    "fill-rule": "evenodd",
    d: "m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    "clip-rule": "evenodd"
  })
], -1), uh = { class: "flex flex-col gap-0 text-start font-semibold" }, rh = /* @__PURE__ */ f("span", { class: "font-light text-sm" }, "Ort", -1), nh = { class: "" }, oh = { class: "w-full gap-2 flex items-center" }, ih = /* @__PURE__ */ f("svg", {
  class: "WRlXg YgmFC",
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  focusable: "false",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none"
}, [
  /* @__PURE__ */ f("g", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    fill: "none",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ f("path", { d: "M32.0054 34.036C35.0909 30.959 37 26.7022 37 22C37 12.6109 29.3891 5 20 5C10.6109 5 3 12.6109 3 22C3 26.709 4.9142 30.9709 8.0065 34.0496M28.075 30.075L31.9 33.9M11.925 30.075L8.1 33.9" }),
    /* @__PURE__ */ f("path", { d: "M20.0001 24.55C21.4084 24.55 22.5501 23.4083 22.5501 22C22.5501 20.5917 21.4084 19.45 20.0001 19.45C18.5917 19.45 17.4501 20.5917 17.4501 22C17.4501 23.4083 18.5917 24.55 20.0001 24.55Z" }),
    /* @__PURE__ */ f("path", { d: "M22.125 24.125L25.1 27.1" }),
    /* @__PURE__ */ f("path", {
      d: "M26.4397 24.1896C26.6726 23.5011 26.8001 22.765 26.8001 22C26.8001 20.1215 26.0385 18.4215 24.8069 17.189",
      "stroke-width": "1.5"
    }),
    /* @__PURE__ */ f("path", {
      d: "M29.0186 26.7685C29.7751 25.3456 30.2001 23.7221 30.2001 22C30.2001 18.0067 27.9051 14.5489 24.562 12.8744",
      "stroke-width": "1.6"
    }),
    /* @__PURE__ */ f("path", {
      d: "M31.5047 29.2556C32.8307 27.1561 33.6 24.6673 33.6 22C33.6 14.4886 27.5114 8.40002 20 8.40002",
      "stroke-width": "1.7"
    })
  ])
], -1), ch = { class: "flex flex-col gap-0 text-start font-semibold" }, sh = /* @__PURE__ */ f("span", { class: "font-light text-sm" }, "Leistung", -1), ah = { class: "text-2xl" }, lh = { class: "w-full gap-2 flex items-center" }, fh = /* @__PURE__ */ f("svg", {
  class: "WRlXg YgmFC",
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  focusable: "false",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none"
}, [
  /* @__PURE__ */ f("g", {
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ f("path", { d: "M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" }),
    /* @__PURE__ */ f("path", { d: "M20 12C21.1046 12 22 11.1046 22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10C18 11.1046 18.8954 12 20 12Z" }),
    /* @__PURE__ */ f("path", { d: "M30 12C31.1046 12 32 11.1046 32 10C32 8.89543 31.1046 8 30 8C28.8954 8 28 8.89543 28 10C28 11.1046 28.8954 12 30 12Z" }),
    /* @__PURE__ */ f("path", { d: "M10 32C11.1046 32 12 31.1046 12 30C12 28.8954 11.1046 28 10 28C8.89543 28 8 28.8954 8 30C8 31.1046 8.89543 32 10 32Z" }),
    /* @__PURE__ */ f("path", { d: "M20 32C21.1046 32 22 31.1046 22 30C22 28.8954 21.1046 28 20 28C18.8954 28 18 28.8954 18 30C18 31.1046 18.8954 32 20 32Z" }),
    /* @__PURE__ */ f("path", { d: "M30 32C31.1046 32 32 31.1046 32 30C32 28.8954 31.1046 28 30 28C28.8954 28 28 28.8954 28 30C28 31.1046 28.8954 32 30 32Z" }),
    /* @__PURE__ */ f("path", {
      d: "M10 13V27",
      "stroke-linecap": "round"
    }),
    /* @__PURE__ */ f("path", {
      d: "M20 13V27",
      "stroke-linecap": "round"
    }),
    /* @__PURE__ */ f("path", {
      d: "M30 13V20",
      "stroke-linecap": "round"
    }),
    /* @__PURE__ */ f("path", {
      d: "M30 20H10",
      "stroke-linecap": "round"
    })
  ])
], -1), dh = { class: "flex flex-col gap-0 text-start font-semibold" }, hh = /* @__PURE__ */ f("span", { class: "font-light text-sm" }, "Getriebe", -1), ph = { class: "text-xl uppercase" }, bh = { class: "w-full gap-2 flex items-center" }, gh = /* @__PURE__ */ f("svg", {
  class: "WRlXg YgmFC",
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  focusable: "false",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none"
}, [
  /* @__PURE__ */ f("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, [
    /* @__PURE__ */ f("path", { d: "M4 38H36M32 16H33C34.104 16 35 16.897 35 18.006V28.502C35 29.329 35.666 30 36.5 30C37.328 30 38 29.335 38 28.497V10.992C38 10.444 37.632 9.755 37.164 9.442L35 8M8 4C8 2.895 8.897 2 10.005 2H29.995C31.102 2 32 2.89 32 4V38H8V4Z" }),
    /* @__PURE__ */ f("path", { d: "M26 6H14C12.8954 6 12 6.89543 12 8V14C12 15.1046 12.8954 16 14 16H26C27.1046 16 28 15.1046 28 14V8C28 6.89543 27.1046 6 26 6Z" })
  ])
], -1), mh = { class: "flex flex-col gap-0 text-start font-semibold" }, xh = /* @__PURE__ */ f("span", { class: "font-light text-sm" }, "Kraftstoffart", -1), _h = { class: "text-xl uppercase" }, wh = { class: "w-full gap-2 flex items-center" }, kh = /* @__PURE__ */ f("svg", {
  class: "WRlXg YgmFC",
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  focusable: "false",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none"
}, [
  /* @__PURE__ */ f("g", {
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }, [
    /* @__PURE__ */ f("path", { d: "M31 5L35 35" }),
    /* @__PURE__ */ f("path", { d: "M9 5L5 35" }),
    /* @__PURE__ */ f("path", { d: "M20 7V11M20 16.5V21.5M20 27V33" })
  ])
], -1), vh = { class: "flex flex-col gap-0 text-start font-semibold" }, yh = /* @__PURE__ */ f("span", { class: "font-light text-sm" }, "Kilometerstand", -1), Ch = { class: "text-2xl" }, Ah = { class: "w-full gap-2 flex items-center" }, Eh = /* @__PURE__ */ f("svg", {
  class: "WRlXg YgmFC",
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  focusable: "false",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none"
}, [
  /* @__PURE__ */ f("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, [
    /* @__PURE__ */ f("path", { d: "M35 31V9C35 7.89543 34.1046 7 33 7H7C5.89543 7 5 7.89543 5 9V31C5 32.1046 5.89543 33 7 33H33C34.1046 33 35 32.1046 35 31Z" }),
    /* @__PURE__ */ f("path", { d: "M31 23V19H27V23H31Z" }),
    /* @__PURE__ */ f("path", { d: "M35 15H5" }),
    /* @__PURE__ */ f("path", { d: "M28 5V9M12 9V5" })
  ])
], -1), Dh = { class: "flex flex-col gap-0 text-start font-semibold" }, Sh = /* @__PURE__ */ f("span", { class: "font-light text-sm" }, "Erstzulassung", -1), Fh = { class: "text-xl uppercase" };
function Th(e, t, u, r, n, o) {
  return F(), P("div", R1, [
    f("div", O1, [
      z1,
      f("div", P1, [
        L1,
        f("span", N1, L(o.formattedPrice), 1)
      ])
    ]),
    f("div", B1, [
      j1,
      f("div", q1, [
        H1,
        f("span", $1, L(u.maxBeds), 1)
      ])
    ]),
    f("div", V1, [
      U1,
      f("div", Z1, [
        W1,
        f("span", G1, L(u.maxSeats), 1)
      ])
    ]),
    f("div", K1, [
      Y1,
      f("div", X1, [
        J1,
        f("span", Q1, L(r.driver_license), 1)
      ])
    ]),
    f("div", eh, [
      th,
      f("div", uh, [
        rh,
        f("span", nh, L(u.location), 1)
      ])
    ]),
    f("div", oh, [
      ih,
      f("div", ch, [
        sh,
        f("span", ah, L(u.leistung) + " PS ", 1)
      ])
    ]),
    f("div", lh, [
      fh,
      f("div", dh, [
        hh,
        f("span", ph, L(u.gear), 1)
      ])
    ]),
    f("div", bh, [
      gh,
      f("div", mh, [
        xh,
        f("span", _h, L(u.fuel), 1)
      ])
    ]),
    f("div", wh, [
      kh,
      f("div", vh, [
        yh,
        f("span", Ch, L(u.km) + " km ", 1)
      ])
    ]),
    f("div", Ah, [
      Eh,
      f("div", Dh, [
        Sh,
        f("span", Fh, L(u.erstzulassung), 1)
      ])
    ])
  ]);
}
const Mh = /* @__PURE__ */ dt(I1, [["render", Th]]);
/**
 * Vue 3 Carousel 0.3.4
 * (c) 2024
 * @license MIT
 */
const ge = {
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
}, ko = {
  // count of items to showed per view
  itemsToShow: {
    default: ge.itemsToShow,
    type: Number
  },
  // count of items to be scrolled
  itemsToScroll: {
    default: ge.itemsToScroll,
    type: Number
  },
  // control infinite scrolling mode
  wrapAround: {
    default: ge.wrapAround,
    type: Boolean
  },
  // control max drag
  throttle: {
    default: ge.throttle,
    type: Number
  },
  // control snap position alignment
  snapAlign: {
    default: ge.snapAlign,
    validator(e) {
      return ["start", "end", "center", "center-even", "center-odd"].includes(e);
    }
  },
  // sliding transition time in ms
  transition: {
    default: ge.transition,
    type: Number
  },
  // an object to store breakpoints
  breakpoints: {
    default: ge.breakpoints,
    type: Object
  },
  // time to auto advance slides in ms
  autoplay: {
    default: ge.autoplay,
    type: Number
  },
  // pause autoplay when mouse hover over the carousel
  pauseAutoplayOnHover: {
    default: ge.pauseAutoplayOnHover,
    type: Boolean
  },
  // slide number number of initial slide
  modelValue: {
    default: void 0,
    type: Number
  },
  // toggle mouse dragging.
  mouseDrag: {
    default: ge.mouseDrag,
    type: Boolean
  },
  // toggle mouse dragging.
  touchDrag: {
    default: ge.touchDrag,
    type: Boolean
  },
  // control snap position alignment
  dir: {
    default: ge.dir,
    validator(e) {
      return ["rtl", "ltr"].includes(e);
    }
  },
  // aria-labels and additional text labels
  i18n: {
    default: ge.i18n,
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
function Ih({ config: e, slidesCount: t }) {
  const { snapAlign: u, wrapAround: r, itemsToShow: n = 1 } = e;
  if (r)
    return Math.max(t - 1, 0);
  let o;
  switch (u) {
    case "start":
      o = t - n;
      break;
    case "end":
      o = t - 1;
      break;
    case "center":
    case "center-odd":
      o = t - Math.ceil((n - 0.5) / 2);
      break;
    case "center-even":
      o = t - Math.ceil(n / 2);
      break;
    default:
      o = 0;
      break;
  }
  return Math.max(o, 0);
}
function Rh({ config: e, slidesCount: t }) {
  const { wrapAround: u, snapAlign: r, itemsToShow: n = 1 } = e;
  let o = 0;
  if (u || n > t)
    return o;
  switch (r) {
    case "start":
      o = 0;
      break;
    case "end":
      o = n - 1;
      break;
    case "center":
    case "center-odd":
      o = Math.floor((n - 1) / 2);
      break;
    case "center-even":
      o = Math.floor((n - 2) / 2);
      break;
    default:
      o = 0;
      break;
  }
  return o;
}
function Lr({ val: e, max: t, min: u }) {
  return t < u ? e : Math.min(Math.max(e, u), t);
}
function Oh({ config: e, currentSlide: t, slidesCount: u }) {
  const { snapAlign: r, wrapAround: n, itemsToShow: o = 1 } = e;
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
  return n ? i : Lr({
    val: i,
    max: u - o,
    min: 0
  });
}
function Hi(e) {
  return e ? e.reduce((t, u) => {
    var r;
    return u.type === ce ? [...t, ...Hi(u.children)] : ((r = u.type) === null || r === void 0 ? void 0 : r.name) === "CarouselSlide" ? [...t, u] : t;
  }, []) : [];
}
function Nr({ val: e, max: t, min: u = 0 }) {
  return e > t ? Nr({ val: e - (t + 1), max: t, min: u }) : e < u ? Nr({ val: e + (t + 1), max: t, min: u }) : e;
}
function zh(e, t) {
  let u;
  return t ? function(...r) {
    const n = this;
    u || (e.apply(n, r), u = !0, setTimeout(() => u = !1, t));
  } : e;
}
function Ph(e, t) {
  let u;
  return function(...r) {
    u && clearTimeout(u), u = setTimeout(() => {
      e(...r), u = null;
    }, t);
  };
}
function Lh(e = "", t = {}) {
  return Object.entries(t).reduce((u, [r, n]) => u.replace(`{${r}}`, String(n)), e);
}
var Nh = /* @__PURE__ */ Ku({
  name: "ARIA",
  setup() {
    const e = Ue("config", At(Object.assign({}, ge))), t = Ue("currentSlide", X(0)), u = Ue("slidesCount", X(0));
    return () => qt("div", {
      class: ["carousel__liveregion", "carousel__sr-only"],
      "aria-live": "polite",
      "aria-atomic": "true"
    }, Lh(e.i18n.itemXofY, {
      currentSlide: t.value + 1,
      slidesCount: u.value
    }));
  }
}), Bh = /* @__PURE__ */ Ku({
  name: "Carousel",
  props: ko,
  setup(e, { slots: t, emit: u, expose: r }) {
    var n;
    const o = X(null), i = X([]), c = X(0), s = X(0), a = At(Object.assign({}, ge));
    let l = Object.assign({}, ge), p;
    const g = X((n = e.modelValue) !== null && n !== void 0 ? n : 0), x = X(0), b = X(0), D = X(0), I = X(0);
    let O, j;
    et("config", a), et("slidesCount", s), et("currentSlide", g), et("maxSlide", D), et("minSlide", I), et("slideWidth", c);
    function y() {
      p = Object.assign({}, e.breakpoints), l = Object.assign(Object.assign(Object.assign({}, l), e), { i18n: Object.assign(Object.assign({}, l.i18n), e.i18n), breakpoints: void 0 }), E(l);
    }
    function M() {
      if (!p || !Object.keys(p).length)
        return;
      const d = Object.keys(p).map((_) => Number(_)).sort((_, w) => +w - +_);
      let m = Object.assign({}, l);
      d.some((_) => {
        const w = window.matchMedia(`(min-width: ${_}px)`).matches;
        return w && (m = Object.assign(Object.assign({}, m), p[_])), w;
      }), E(m);
    }
    function E(d) {
      Object.entries(d).forEach(([m, _]) => a[m] = _);
    }
    const R = Ph(() => {
      M(), ee(), U();
    }, 16);
    function U() {
      if (!o.value)
        return;
      const d = o.value.getBoundingClientRect();
      c.value = d.width / a.itemsToShow;
    }
    function ee() {
      s.value <= 0 || (b.value = Math.ceil((s.value - 1) / 2), D.value = Ih({ config: a, slidesCount: s.value }), I.value = Rh({ config: a, slidesCount: s.value }), a.wrapAround || (g.value = Lr({
        val: g.value,
        max: D.value,
        min: I.value
      })));
    }
    Xu(() => {
      Jr(() => U()), setTimeout(() => U(), 1e3), M(), Ke(), window.addEventListener("resize", R, { passive: !0 }), u("init");
    }), en(() => {
      j && clearTimeout(j), O && clearInterval(O), window.removeEventListener("resize", R, {
        passive: !0
      });
    });
    let te = !1;
    const pe = { x: 0, y: 0 }, we = { x: 0, y: 0 }, be = At({ x: 0, y: 0 }), Ce = X(!1), Me = X(!1), Ae = () => {
      Ce.value = !0;
    }, ne = () => {
      Ce.value = !1;
    };
    function Y(d) {
      ["INPUT", "TEXTAREA", "SELECT"].includes(d.target.tagName) || (te = d.type === "touchstart", te || d.preventDefault(), !(!te && d.button !== 0 || oe.value) && (pe.x = te ? d.touches[0].clientX : d.clientX, pe.y = te ? d.touches[0].clientY : d.clientY, document.addEventListener(te ? "touchmove" : "mousemove", W, !0), document.addEventListener(te ? "touchend" : "mouseup", Ie, !0)));
    }
    const W = zh((d) => {
      Me.value = !0, we.x = te ? d.touches[0].clientX : d.clientX, we.y = te ? d.touches[0].clientY : d.clientY;
      const m = we.x - pe.x, _ = we.y - pe.y;
      be.y = _, be.x = m;
    }, a.throttle);
    function Ie() {
      const d = a.dir === "rtl" ? -1 : 1, m = Math.sign(be.x) * 0.4, _ = Math.round(be.x / c.value + m) * d;
      if (_ && !te) {
        const w = (C) => {
          window.removeEventListener("click", w, !0);
        };
        window.addEventListener("click", w, !0);
      }
      Oe(g.value - _), be.x = 0, be.y = 0, Me.value = !1, document.removeEventListener(te ? "touchmove" : "mousemove", W, !0), document.removeEventListener(te ? "touchend" : "mouseup", Ie, !0);
    }
    function Ke() {
      !a.autoplay || a.autoplay <= 0 || (O = setInterval(() => {
        a.pauseAutoplayOnHover && Ce.value || ct();
      }, a.autoplay));
    }
    function Re() {
      O && (clearInterval(O), O = null), Ke();
    }
    const oe = X(!1);
    function Oe(d) {
      const m = a.wrapAround ? d : Lr({
        val: d,
        max: D.value,
        min: I.value
      });
      g.value === m || oe.value || (u("slide-start", {
        slidingToIndex: d,
        currentSlideIndex: g.value,
        prevSlideIndex: x.value,
        slidesCount: s.value
      }), oe.value = !0, x.value = g.value, g.value = m, j = setTimeout(() => {
        if (a.wrapAround) {
          const _ = Nr({
            val: m,
            max: D.value,
            min: 0
          });
          _ !== g.value && (g.value = _, u("loop", {
            currentSlideIndex: g.value,
            slidingToIndex: d
          }));
        }
        u("update:modelValue", g.value), u("slide-end", {
          currentSlideIndex: g.value,
          prevSlideIndex: x.value,
          slidesCount: s.value
        }), oe.value = !1, Re();
      }, a.transition));
    }
    function ct() {
      Oe(g.value + a.itemsToScroll);
    }
    function ht() {
      Oe(g.value - a.itemsToScroll);
    }
    const ke = { slideTo: Oe, next: ct, prev: ht };
    et("nav", ke), et("isSliding", oe);
    const Ye = at(() => Oh({
      config: a,
      currentSlide: g.value,
      slidesCount: s.value
    }));
    et("slidesToScroll", Ye);
    const pt = at(() => {
      const d = a.dir === "rtl" ? -1 : 1, m = Ye.value * c.value * d;
      return {
        transform: `translateX(${be.x - m}px)`,
        transition: `${oe.value ? a.transition : 0}ms`,
        margin: a.wrapAround ? `0 -${s.value * c.value}px` : "",
        width: "100%"
      };
    });
    function bt() {
      y(), M(), ee(), U(), Re();
    }
    Object.keys(ko).forEach((d) => {
      ["modelValue"].includes(d) || Zt(() => e[d], bt);
    }), Zt(() => e.modelValue, (d) => {
      d !== g.value && Oe(Number(d));
    }), Zt(s, ee), u("before-init"), y();
    const Ne = {
      config: a,
      slidesCount: s,
      slideWidth: c,
      next: ct,
      prev: ht,
      slideTo: Oe,
      currentSlide: g,
      maxSlide: D,
      minSlide: I,
      middleSlide: b
    };
    r({
      updateBreakpointsConfigs: M,
      updateSlidesData: ee,
      updateSlideWidth: U,
      initDefaultConfigs: y,
      restartCarousel: bt,
      slideTo: Oe,
      next: ct,
      prev: ht,
      nav: ke,
      data: Ne
    });
    const Xe = t.default || t.slides, Je = t.addons, h = At(Ne);
    return () => {
      const d = Hi(Xe == null ? void 0 : Xe(h)), m = (Je == null ? void 0 : Je(h)) || [];
      d.forEach((S, v) => S.props.index = v);
      let _ = d;
      if (a.wrapAround) {
        const S = d.map((A, k) => Ft(A, {
          index: -d.length + k,
          isClone: !0,
          key: `clone-before-${k}`
        })), v = d.map((A, k) => Ft(A, {
          index: d.length + k,
          isClone: !0,
          key: `clone-after-${k}`
        }));
        _ = [...S, ...d, ...v];
      }
      i.value = d, s.value = Math.max(d.length, 1);
      const w = qt("ol", {
        class: "carousel__track",
        style: pt.value,
        onMousedownCapture: a.mouseDrag ? Y : null,
        onTouchstartPassiveCapture: a.touchDrag ? Y : null
      }, _), C = qt("div", { class: "carousel__viewport" }, w);
      return qt("section", {
        ref: o,
        class: {
          carousel: !0,
          "is-sliding": oe.value,
          "is-dragging": Me.value,
          "is-hover": Ce.value,
          "carousel--rtl": a.dir === "rtl"
        },
        dir: a.dir,
        "aria-label": a.i18n.ariaGallery,
        tabindex: "0",
        onMouseenter: Ae,
        onMouseleave: ne
      }, [C, m, qt(Nh)]);
    };
  }
}), vo;
(function(e) {
  e.arrowUp = "arrowUp", e.arrowDown = "arrowDown", e.arrowRight = "arrowRight", e.arrowLeft = "arrowLeft";
})(vo || (vo = {}));
var jh = /* @__PURE__ */ Ku({
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
    const u = Ue("config", At(Object.assign({}, ge))), r = Ue("currentSlide", X(0)), n = Ue("slidesToScroll", X(0)), o = Ue("isSliding", X(!1)), i = at(() => e.index === r.value), c = at(() => e.index === r.value - 1), s = at(() => e.index === r.value + 1), a = at(() => {
      const l = Math.floor(n.value), p = Math.ceil(n.value + u.itemsToShow - 1);
      return e.index >= l && e.index <= p;
    });
    return () => {
      var l;
      return qt("li", {
        style: { width: `${100 / u.itemsToShow}%` },
        class: {
          carousel__slide: !0,
          "carousel__slide--clone": e.isClone,
          "carousel__slide--visible": a.value,
          "carousel__slide--active": i.value,
          "carousel__slide--prev": c.value,
          "carousel__slide--next": s.value,
          "carousel__slide--sliding": o.value
        },
        "aria-hidden": !a.value
      }, (l = t.default) === null || l === void 0 ? void 0 : l.call(t, {
        isActive: i.value,
        isClone: e.isClone,
        isPrev: c.value,
        isNext: s.value,
        isSliding: o.value,
        isVisible: a.value
      }));
    };
  }
});
const qh = {
  name: "ImageSlider",
  components: {
    Carousel: Bh,
    Slide: jh
  },
  props: {
    vehicleId: {
      type: String,
      required: !0,
      default: ""
    }
  },
  setup(e) {
    const t = X([]), u = X(null), r = X(0), n = () => {
      r.value === 0 ? r.value = t.value.length - 1 : r.value = r.value - 1;
    }, o = () => {
      var b = t.value.length - 1;
      r.value = (r.value + 1) % b;
    }, i = (b) => {
      r.value = b;
    }, c = at(() => t.value[r.value]), s = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/resolve/sale`, a = async () => {
      var b;
      try {
        const I = await (await fetch(s)).json();
        u.value = I;
        const O = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/thumbnail/sale`;
        t.value.push(O), (b = I == null ? void 0 : I.images) == null || b.forEach((j) => {
          const y = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/picture/${j}/sale`;
          t.value.push(y);
        });
      } catch (D) {
        console.error("An error occurred while fetching the data:", D);
      }
    };
    Xu(() => {
      a(), x(0);
    });
    const l = X(!1), p = () => {
      l.value = !0;
    }, g = () => {
      l.value = !1;
    }, x = (b) => {
      r.value = b;
    };
    return {
      currentSlide: r,
      article: u,
      slideTo: i,
      images: t,
      prev: n,
      next: o,
      onImageClick: p,
      image: c,
      isOpen: l,
      close: g,
      setCurrentImage: x
    };
  }
}, Hh = { class: "flex flex-col w-full relative items-center" }, $h = { class: "flex items-center relative w-full" }, Vh = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-12 h-12"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 19.5 8.25 12l7.5-7.5"
  })
], -1), Uh = [
  Vh
], Zh = { class: "relative w-full rounded-xl" }, Wh = ["src"], Gh = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-12 h-12"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "m8.25 4.5 7.5 7.5-7.5 7.5"
  })
], -1), Kh = [
  Gh
], Yh = {
  key: 0,
  class: "fixed z-[9998] top-0 left-0 w-[100vw] h-[100vh] bg-black/50"
}, Xh = { class: "modal-wrapper" }, Jh = { class: "min-h-screen bg-white flex flex-col gap-2 p-4 items-center" }, Qh = { class: "flex gap-2 flex-col items-center w-full" }, e2 = { class: "flex justify-end items-center gap-4 w-full" }, t2 = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-12 h-12 text-primary-blue"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18 18 6M6 6l12 12"
  })
], -1), u2 = [
  t2
], r2 = { class: "p-0 m-0 text-xl" }, n2 = { class: "flex items-center container h-full w-full relative" }, o2 = { class: "relative w-full" }, i2 = ["src"], c2 = { class: "flex flex-wrap justify-start w-full container gap-4 items-center overflow-y-auto max-h-[400px]" }, s2 = ["src", "onClick"];
function a2(e, t, u, r, n, o) {
  var s;
  const i = Be("Slide"), c = Be("Carousel");
  return F(), P(ce, null, [
    f("div", Hh, [
      f("div", $h, [
        f("button", {
          onClick: t[0] || (t[0] = (...a) => r.prev && r.prev(...a)),
          class: "flex absolute hover:bg-transparent z-10 left-0 top-0 h-full items-center w-fit btn btn-ghost text-primary-blue"
        }, Uh),
        de(c, {
          id: "gallery",
          "items-to-show": 1,
          wrapAround: !1,
          class: "flex-grow",
          modelValue: r.currentSlide,
          "onUpdate:modelValue": t[2] || (t[2] = (a) => r.currentSlide = a)
        }, {
          default: Ve(() => [
            (F(!0), P(ce, null, zt(r.images, (a, l) => (F(), ye(i, { key: l }, {
              default: Ve(() => [
                f("div", Zh, [
                  f("img", {
                    src: a,
                    onClick: t[1] || (t[1] = (...p) => r.onImageClick && r.onImageClick(...p)),
                    class: "w-full h-full max-h-[32rem] cursor-pointer object-contain flex rounded-xl justify-center items-center"
                  }, null, 8, Wh)
                ])
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        f("button", {
          onClick: t[3] || (t[3] = (...a) => r.next && r.next(...a)),
          class: "flex absolute hover:bg-transparent z-10 right-0 top-0 h-full items-center w-fit btn btn-ghost text-primary-blue"
        }, Kh)
      ])
    ]),
    r.isOpen ? (F(), P("div", Yh, [
      f("div", Xh, [
        f("div", Jh, [
          f("div", Qh, [
            f("div", e2, [
              f("button", {
                onClick: t[4] || (t[4] = (...a) => r.close && r.close(...a)),
                class: "btn btn-ghost"
              }, u2)
            ]),
            f("h2", r2, L((s = r.article) == null ? void 0 : s.title), 1),
            f("div", n2, [
              de(c, {
                id: "gallery",
                "items-to-show": 1,
                wrapAround: !1,
                modelValue: r.currentSlide,
                "onUpdate:modelValue": t[5] || (t[5] = (a) => r.currentSlide = a)
              }, {
                default: Ve(() => [
                  (F(!0), P(ce, null, zt(r.images, (a, l) => (F(), ye(i, { key: l }, {
                    default: Ve(() => [
                      f("div", o2, [
                        f("img", {
                          src: a,
                          class: "w-full h-full max-h-[32rem] object-contain flex rounded-xl items-center bg-white"
                        }, null, 8, i2)
                      ])
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ]),
          f("div", c2, [
            (F(!0), P(ce, null, zt(r.images, (a, l) => (F(), P("img", {
              key: l,
              src: a,
              onClick: () => r.setCurrentImage(l),
              class: gu([{ "border-4 border-solid border-primary-blue": r.currentSlide === l }, "w-24 h-24 object-cover flex cursor-pointer rounded-xl justify-center items-center bg-white"])
            }, null, 10, s2))), 128))
          ])
        ])
      ])
    ])) : H("", !0)
  ], 64);
}
const l2 = /* @__PURE__ */ dt(qh, [["render", a2]]), f2 = {
  name: "Outline",
  props: {
    vehicleId: {
      type: String,
      required: !0,
      default: ""
    }
  },
  setup(e) {
    return {
      outlineURL: `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/outline/night/sale`
    };
  }
}, d2 = { class: "w-full flex items-center justify-center" }, h2 = ["src"];
function p2(e, t, u, r, n, o) {
  return F(), P("div", d2, [
    f("img", {
      src: r.outlineURL,
      class: "object-contain max-w-full w-full",
      alt: ""
    }, null, 8, h2)
  ]);
}
const b2 = /* @__PURE__ */ dt(f2, [["render", p2]]), g2 = {
  name: "Contact",
  props: {
    article: {
      type: Object,
      required: !0,
      default: null
    },
    price: {
      type: Number,
      required: !0,
      default: 0
    }
  },
  setup(e) {
    const t = X(!1), u = (c) => {
      t.value = c;
    }, r = X(!1), n = (c) => {
      r.value = c;
    }, o = () => {
      u(!1), n(!1);
    }, i = async (c) => {
      c.preventDefault();
      const s = c.target, a = new FormData(s);
      a.append("referrerUrl", window.location.href);
      const l = Object.fromEntries(a.entries());
      console.log(l), n(!0);
      try {
        const g = await (await fetch(`https://www.camperfuchs.de/api/V1/articles/${e.article.id}/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(l)
        })).json();
        console.log(g), n(!0);
      } catch (p) {
        console.error("An error occurred while sending the data:", p);
      }
    };
    return {
      article: e.article,
      formattedPrice: new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(e.price),
      isOpen: t,
      setIsOpen: u,
      closeModal: o,
      submitForm: i,
      isSent: r
    };
  }
}, m2 = { class: "grid sm:grid-cols-4 w-full" }, x2 = { class: "flex sm:col-span-3 items-center w-full" }, _2 = { class: "p-0 m-0 text-2xl" }, w2 = { class: "flex items-center justify-end w-full" }, k2 = /* @__PURE__ */ f("span", null, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: "size-6"
  }, [
    /* @__PURE__ */ f("path", { d: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" }),
    /* @__PURE__ */ f("path", { d: "M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" })
  ])
], -1), v2 = /* @__PURE__ */ f("span", null, " E-Mail schreiben ", -1), y2 = [
  k2,
  v2
], C2 = {
  key: 0,
  id: "my_modal_1",
  class: "modal modal-open"
}, A2 = { class: "flex justify-end" }, E2 = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "size-10"
}, [
  /* @__PURE__ */ f("path", {
    "fill-rule": "evenodd",
    d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",
    "clip-rule": "evenodd"
  })
], -1), D2 = [
  E2
], S2 = /* @__PURE__ */ f("div", { class: "flex justify-center items-center" }, [
  /* @__PURE__ */ f("h3", { class: "text-2xl font-bold" }, "Kontakt")
], -1), F2 = { class: "flex flex-col gap-0 text-center" }, T2 = /* @__PURE__ */ f("p", { class: "text-xl" }, "Vielen Dank für Ihre Anfrage.", -1), M2 = /* @__PURE__ */ f("p", { class: "text-lg" }, "Wir werden uns in Kürze bei Ihnen melden.", -1), I2 = { class: "modal-action flex items-center w-full justify-center" }, R2 = { class: "flex flex-col gap-4" }, O2 = /* @__PURE__ */ As(`<input type="text" id="name" name="name" class="input input-bordered" placeholder="Vor- und Nachname*" required><input type="email" id="email" name="email" class="input input-bordered" placeholder="E-Mail*" required><input type="tel" id="phone" name="phone" class="input input-bordered" placeholder="Telefonnummer"><textarea id="message" rows="6" name="message" class="textarea textarea-bordered" placeholder="Nachricht*" required>
Sehr geehrte Damen und Herren,

ich interessiere mich für Ihr Angebot.
Bitte kontaktieren Sie mich.

Mit freundlichen Grüßen,</textarea><div class="modal-action flex items-center w-full justify-center"><button type="submit" class="flex items-center gap-2 btn bg-primary-blue text-white hover:text-black hover:bg-white hover:border-black duration-200">Senden</button></div>`, 5), z2 = [
  O2
];
function P2(e, t, u, r, n, o) {
  var i;
  return F(), P("div", m2, [
    f("div", x2, [
      f("h1", _2, L((i = r.article) == null ? void 0 : i.title), 1)
    ]),
    f("div", w2, [
      f("button", {
        class: "flex items-center gap-2 btn bg-primary-blue text-white hover:text-black hover:bg-white hover:border-black duration-200",
        onClick: t[0] || (t[0] = (c) => r.setIsOpen(!0))
      }, y2),
      r.isOpen ? (F(), P("dialog", C2, [
        f("form", {
          onSubmit: t[3] || (t[3] = (...c) => r.submitForm && r.submitForm(...c)),
          class: "modal-box flex flex-col gap-0"
        }, [
          f("div", A2, [
            f("button", {
              type: "button",
              class: "btn btn-ghost btn-circle",
              onClick: t[1] || (t[1] = (...c) => r.closeModal && r.closeModal(...c))
            }, D2)
          ]),
          S2,
          In(f("div", F2, [
            T2,
            M2,
            f("div", I2, [
              f("button", {
                type: "button",
                class: "flex items-center gap-2 btn bg-primary-blue text-white hover:text-black hover:bg-white hover:border-black duration-200",
                onClick: t[2] || (t[2] = (...c) => r.closeModal && r.closeModal(...c))
              }, "Schließen")
            ])
          ], 512), [
            [Wn, r.isSent]
          ]),
          In(f("div", R2, z2, 512), [
            [Wn, !r.isSent]
          ])
        ], 32)
      ])) : H("", !0)
    ])
  ]);
}
const L2 = /* @__PURE__ */ dt(g2, [["render", P2]]), N2 = ':root,[data-theme]{background-color:var(--fallback-b1,oklch(var(--b1)/1));color:var(--fallback-bc,oklch(var(--bc)/1))}@supports not (color: oklch(0 0 0)){:root{color-scheme:light;--fallback-p: #491eff;--fallback-pc: #d4dbff;--fallback-s: #ff41c7;--fallback-sc: #fff9fc;--fallback-a: #00cfbd;--fallback-ac: #00100d;--fallback-n: #2b3440;--fallback-nc: #d7dde4;--fallback-b1: #ffffff;--fallback-b2: #e5e6e6;--fallback-b3: #e5e6e6;--fallback-bc: #1f2937;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000 }@media (prefers-color-scheme: dark){:root{color-scheme:dark;--fallback-p: #7582ff;--fallback-pc: #050617;--fallback-s: #ff71cf;--fallback-sc: #190211;--fallback-a: #00c7b5;--fallback-ac: #000e0c;--fallback-n: #2a323c;--fallback-nc: #a6adbb;--fallback-b1: #1d232a;--fallback-b2: #191e24;--fallback-b3: #15191e;--fallback-bc: #a6adbb;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000 }}}html{-webkit-tap-highlight-color:transparent}:root{color-scheme:light;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--er: .7176 .221 22.18;--pc: .89824 .06192 275.75;--ac: .15352 .0368 183.61;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: 0 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: .4912 .3096 275.75;--s: .6971 .329 342.55;--sc: .9871 .0106 342.55;--a: .7676 .184 183.61;--n: .321785 .02476 255.701624;--nc: .894994 .011585 252.096176;--b1: 1 0 0;--b2: .961151 0 0;--b3: .924169 .00108 197.137559;--bc: .278078 .029596 256.847952 }[data-theme=light]{color-scheme:light;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--er: .7176 .221 22.18;--pc: .89824 .06192 275.75;--ac: .15352 .0368 183.61;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: 0 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: .4912 .3096 275.75;--s: .6971 .329 342.55;--sc: .9871 .0106 342.55;--a: .7676 .184 183.61;--n: .321785 .02476 255.701624;--nc: .894994 .011585 252.096176;--b1: 1 0 0;--b2: .961151 0 0;--b3: .924169 .00108 197.137559;--bc: .278078 .029596 256.847952 }[data-theme=dark]{color-scheme:dark;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--er: .7176 .221 22.18;--pc: .13138 .0392 275.75;--sc: .1496 .052 342.55;--ac: .14902 .0334 183.61;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: 0 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: .6569 .196 275.75;--s: .748 .26 342.55;--a: .7451 .167 183.61;--n: .313815 .021108 254.139175;--nc: .746477 .0216 264.435964;--b1: .253267 .015896 252.417568;--b2: .232607 .013807 253.100675;--b3: .211484 .01165 254.087939;--bc: .746477 .0216 264.435964 }*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.avatar.placeholder>div{display:flex;align-items:center;justify-content:center}@media (hover:hover){.label a:hover{--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}.table tr.hover:hover,.table tr.hover:nth-child(2n):hover{--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))}.table-zebra tr.hover:hover,.table-zebra tr.hover:nth-child(2n):hover{--tw-bg-opacity: 1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)))}}.btn{display:inline-flex;height:3rem;min-height:3rem;flex-shrink:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;border-radius:var(--rounded-btn, .5rem);border-color:transparent;border-color:oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity));padding-left:1rem;padding-right:1rem;text-align:center;font-size:.875rem;line-height:1em;gap:.5rem;font-weight:600;text-decoration-line:none;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);border-width:var(--border-btn, 1px);animation:button-pop var(--animation-btn, .25s) ease-out;transition-property:color,background-color,border-color,opacity,box-shadow,transform;--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-color:var(--fallback-bc,oklch(var(--bc)/1));background-color:oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity));--tw-bg-opacity: 1;--tw-border-opacity: 1 }.btn-disabled,.btn[disabled],.btn:disabled{pointer-events:none}.btn-circle{height:3rem;width:3rem;border-radius:9999px;padding:0}:where(.btn:is(input[type=checkbox])),:where(.btn:is(input[type=radio])){width:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn:is(input[type=checkbox]):after,.btn:is(input[type=radio]):after{--tw-content: attr(aria-label);content:var(--tw-content)}.checkbox{flex-shrink:0;--chkbg: var(--fallback-bc,oklch(var(--bc)/1));--chkfg: var(--fallback-b1,oklch(var(--b1)/1));height:1.5rem;width:1.5rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--rounded-btn, .5rem);border-width:1px;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));--tw-border-opacity: .2 }.collapse:not(td):not(tr):not(colgroup){visibility:visible}.collapse{position:relative;display:grid;overflow:hidden;grid-template-rows:auto 0fr;transition:grid-template-rows .2s;width:100%;border-radius:var(--rounded-box, 1rem)}.collapse-title,.collapse>input[type=checkbox],.collapse>input[type=radio],.collapse-content{grid-column-start:1;grid-row-start:1}.collapse>input[type=checkbox],.collapse>input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0}.collapse-content{visibility:hidden;grid-column-start:1;grid-row-start:2;min-height:0px;transition:visibility .2s;transition:padding .2s ease-out,background-color .2s ease-out;padding-left:1rem;padding-right:1rem;cursor:unset}.collapse[open],.collapse-open,.collapse:focus:not(.collapse-close){grid-template-rows:auto 1fr}.collapse:not(.collapse-close):has(>input[type=checkbox]:checked),.collapse:not(.collapse-close):has(>input[type=radio]:checked){grid-template-rows:auto 1fr}.collapse[open]>.collapse-content,.collapse-open>.collapse-content,.collapse:focus:not(.collapse-close)>.collapse-content,.collapse:not(.collapse-close)>input[type=checkbox]:checked~.collapse-content,.collapse:not(.collapse-close)>input[type=radio]:checked~.collapse-content{visibility:visible;min-height:-moz-fit-content;min-height:fit-content}.divider{display:flex;flex-direction:row;align-items:center;align-self:stretch;margin-top:1rem;margin-bottom:1rem;height:1rem;white-space:nowrap}.divider:before,.divider:after{height:.125rem;width:100%;flex-grow:1;--tw-content: "";content:var(--tw-content);background-color:var(--fallback-bc,oklch(var(--bc)/.1))}@media (hover: hover){.btn:hover{--tw-border-opacity: 1;border-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn:hover{background-color:color-mix(in oklab,oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%,black);border-color:color-mix(in oklab,oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity, 1)) 90%,black)}}@supports not (color: oklch(0 0 0)){.btn:hover{background-color:var(--btn-color, var(--fallback-b2));border-color:var(--btn-color, var(--fallback-b2))}}.btn.glass:hover{--glass-opacity: 25%;--glass-border-opacity: 15% }.btn-ghost:hover{border-color:transparent}@supports (color: oklch(0 0 0)){.btn-ghost:hover{background-color:var(--fallback-bc,oklch(var(--bc)/.2))}}.btn-disabled:hover,.btn[disabled]:hover,.btn:disabled:hover{--tw-border-opacity: 0;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));--tw-bg-opacity: .2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-text-opacity: .2 }@supports (color: color-mix(in oklab,black,black)){.btn:is(input[type=checkbox]:checked):hover,.btn:is(input[type=radio]:checked):hover{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black)}}}.label{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:space-between;padding:.5rem .25rem}.input{flex-shrink:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:3rem;padding-left:1rem;padding-right:1rem;font-size:1rem;line-height:2;line-height:1.5rem;border-radius:var(--rounded-btn, .5rem);border-width:1px;border-color:transparent;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.link{cursor:pointer;text-decoration-line:underline}.modal{pointer-events:none;position:fixed;top:0;right:0;bottom:0;left:0;margin:0;display:grid;height:100%;max-height:none;width:100%;max-width:none;justify-items:center;padding:0;opacity:0;overscroll-behavior:contain;z-index:999;background-color:transparent;color:inherit;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);transition-property:transform,opacity,visibility;overflow-y:hidden}:where(.modal){align-items:center}.modal-box{max-height:calc(100vh - 5em);grid-column-start:1;grid-row-start:1;width:91.666667%;max-width:32rem;--tw-scale-x: .9;--tw-scale-y: .9;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-bottom-right-radius:var(--rounded-box, 1rem);border-bottom-left-radius:var(--rounded-box, 1rem);border-top-left-radius:var(--rounded-box, 1rem);border-top-right-radius:var(--rounded-box, 1rem);--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));padding:1.5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:.2s;box-shadow:#00000040 0 25px 50px -12px;overflow-y:auto;overscroll-behavior:contain}.modal-open,.modal:target,.modal-toggle:checked+.modal,.modal[open]{pointer-events:auto;visibility:visible;opacity:1}.modal-action{display:flex;margin-top:1.5rem;justify-content:flex-end}:root:has(:is(.modal-open,.modal:target,.modal-toggle:checked+.modal,.modal[open])){overflow:hidden}.swap{position:relative;display:inline-grid;-webkit-user-select:none;-moz-user-select:none;user-select:none;place-content:center;cursor:pointer}.swap>*{grid-column-start:1;grid-row-start:1;transition-duration:.3s;transition-timing-function:cubic-bezier(0,0,.2,1);transition-property:transform,opacity}.swap input{-webkit-appearance:none;-moz-appearance:none;appearance:none}.swap .swap-on,.swap .swap-indeterminate,.swap input:indeterminate~.swap-on{opacity:0}.swap input:checked~.swap-off,.swap-active .swap-off,.swap input:indeterminate~.swap-off{opacity:0}.swap input:checked~.swap-on,.swap-active .swap-on,.swap input:indeterminate~.swap-indeterminate{opacity:1}.table{position:relative;width:100%;border-radius:var(--rounded-box, 1rem);text-align:left;font-size:.875rem;line-height:1.25rem}.table :where(.table-pin-rows thead tr){position:sticky;top:0;z-index:1;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.table :where(.table-pin-rows tfoot tr){position:sticky;bottom:0;z-index:1;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.table :where(.table-pin-cols tr th){position:sticky;left:0;right:0;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.table-zebra tbody tr:nth-child(2n) :where(.table-pin-cols tr th){--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))}.textarea{min-height:3rem;flex-shrink:1;padding:.5rem 1rem;font-size:.875rem;line-height:1.25rem;line-height:2;border-radius:var(--rounded-btn, .5rem);border-width:1px;border-color:transparent;--tw-bg-opacity: 1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))}.toggle{flex-shrink:0;--tglbg: var(--fallback-b1,oklch(var(--b1)/1));--handleoffset: 1.5rem;--handleoffsetcalculator: calc(var(--handleoffset) * -1);--togglehandleborder: 0 0;height:1.5rem;width:3rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--rounded-badge, 1.9rem);border-width:1px;border-color:currentColor;background-color:currentColor;color:var(--fallback-bc,oklch(var(--bc)/.5));transition:background,box-shadow var(--animation-input, .2s) ease-out;box-shadow:var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset,var(--togglehandleborder)}.btm-nav>* .label{font-size:1rem;line-height:1.5rem}.btn:active:hover,.btn:active:focus{animation:button-pop 0s ease-out;transform:scale(var(--btn-focus-scale, .97))}@supports not (color: oklch(0 0 0)){.btn{background-color:var(--btn-color, var(--fallback-b2));border-color:var(--btn-color, var(--fallback-b2))}.prose :where(code):not(:where([class~=not-prose] *,pre *)){background-color:var(--fallback-b3,oklch(var(--b3)/1))}}.btn:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px}.btn.glass{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-color:currentColor}.btn.glass.btn-active{--glass-opacity: 25%;--glass-border-opacity: 15% }.btn-ghost{border-width:1px;border-color:transparent;background-color:transparent;color:currentColor;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-color:currentColor}.btn-ghost.btn-active{border-color:transparent;background-color:var(--fallback-bc,oklch(var(--bc)/.2))}.btn.btn-disabled,.btn[disabled],.btn:disabled{--tw-border-opacity: 0;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));--tw-bg-opacity: .2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-text-opacity: .2 }.btn:is(input[type=checkbox]:checked),.btn:is(input[type=radio]:checked){--tw-border-opacity: 1;border-color:var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.btn:is(input[type=checkbox]:checked):focus-visible,.btn:is(input[type=radio]:checked):focus-visible{outline-color:var(--fallback-p,oklch(var(--p)/1))}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .98))}40%{transform:scale(1.02)}to{transform:scale(1)}}.checkbox:focus{box-shadow:none}.checkbox:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/1))}.checkbox:checked,.checkbox[checked=true],.checkbox[aria-checked=true]{background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-out;background-color:var(--chkbg);background-image:linear-gradient(-45deg,transparent 65%,var(--chkbg) 65.99%),linear-gradient(45deg,transparent 75%,var(--chkbg) 75.99%),linear-gradient(-45deg,var(--chkbg) 40%,transparent 40.99%),linear-gradient(45deg,var(--chkbg) 30%,var(--chkfg) 30.99%,var(--chkfg) 40%,transparent 40.99%),linear-gradient(-45deg,var(--chkfg) 50%,var(--chkbg) 50.99%)}.checkbox:indeterminate{--tw-bg-opacity: 1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-out;background-image:linear-gradient(90deg,transparent 80%,var(--chkbg) 80%),linear-gradient(-90deg,transparent 80%,var(--chkbg) 80%),linear-gradient(0deg,var(--chkbg) 43%,var(--chkfg) 43%,var(--chkfg) 57%,var(--chkbg) 57%)}.checkbox:disabled{cursor:not-allowed;border-color:transparent;--tw-bg-opacity: 1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));opacity:.2}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}details.collapse{width:100%}details.collapse summary{position:relative;display:block;outline:2px solid transparent;outline-offset:2px}details.collapse summary::-webkit-details-marker{display:none}.collapse:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/1))}.collapse:has(.collapse-title:focus-visible),.collapse:has(>input[type=checkbox]:focus-visible),.collapse:has(>input[type=radio]:focus-visible){outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/1))}.collapse-arrow>.collapse-title:after{position:absolute;display:block;height:.5rem;width:.5rem;--tw-translate-y: -100%;--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:.15s;transition-duration:.2s;top:1.9rem;inset-inline-end:1.4rem;content:"";transform-origin:75% 75%;box-shadow:2px 2px;pointer-events:none}.collapse-plus>.collapse-title:after{position:absolute;display:block;height:.5rem;width:.5rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:.3s;top:.9rem;inset-inline-end:1.4rem;content:"+";pointer-events:none}.collapse:not(.collapse-open):not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-open):not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-open):not(.collapse-close)>.collapse-title{cursor:pointer}.collapse:focus:not(.collapse-open):not(.collapse-close):not(.collapse[open])>.collapse-title{cursor:unset}.collapse-title{position:relative}:where(.collapse>input[type=checkbox]),:where(.collapse>input[type=radio]){z-index:1}.collapse-title,:where(.collapse>input[type=checkbox]),:where(.collapse>input[type=radio]){width:100%;padding:1rem;padding-inline-end:3rem;min-height:3.75rem;transition:background-color .2s ease-out}.collapse[open]>:where(.collapse-content),.collapse-open>:where(.collapse-content),.collapse:focus:not(.collapse-close)>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input[type=checkbox]:checked~.collapse-content),.collapse:not(.collapse-close)>:where(input[type=radio]:checked~.collapse-content){padding-bottom:1rem;transition:padding .2s ease-out,background-color .2s ease-out}.collapse[open].collapse-arrow>.collapse-title:after,.collapse-open.collapse-arrow>.collapse-title:after,.collapse-arrow:focus:not(.collapse-close)>.collapse-title:after,.collapse-arrow:not(.collapse-close)>input[type=checkbox]:checked~.collapse-title:after,.collapse-arrow:not(.collapse-close)>input[type=radio]:checked~.collapse-title:after{--tw-translate-y: -50%;--tw-rotate: 225deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.collapse[open].collapse-plus>.collapse-title:after,.collapse-open.collapse-plus>.collapse-title:after,.collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse-plus:not(.collapse-close)>input[type=checkbox]:checked~.collapse-title:after,.collapse-plus:not(.collapse-close)>input[type=radio]:checked~.collapse-title:after{content:"−"}.divider:not(:empty){gap:1rem}.input input:focus{outline:2px solid transparent;outline-offset:2px}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input-bordered{border-color:var(--fallback-bc,oklch(var(--bc)/.2))}.input:focus,.input:focus-within{box-shadow:none;border-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/.2))}.input-disabled,.input:disabled,.input[disabled]{cursor:not-allowed;--tw-border-opacity: 1;border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));color:var(--fallback-bc,oklch(var(--bc)/.4))}.input-disabled::-moz-placeholder,.input:disabled::-moz-placeholder,.input[disabled]::-moz-placeholder{color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));--tw-placeholder-opacity: .2 }.input-disabled::placeholder,.input:disabled::placeholder,.input[disabled]::placeholder{color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));--tw-placeholder-opacity: .2 }.input::-webkit-date-and-time-value{text-align:inherit}.link:focus{outline:2px solid transparent;outline-offset:2px}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px}.mockup-browser .mockup-browser-toolbar .input{position:relative;margin-left:auto;margin-right:auto;display:block;height:1.75rem;width:24rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));padding-left:2rem;direction:ltr}.mockup-browser .mockup-browser-toolbar .input:before{content:"";position:absolute;left:.5rem;top:50%;aspect-ratio:1 / 1;height:.75rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;border-width:2px;border-color:currentColor;opacity:.6}.mockup-browser .mockup-browser-toolbar .input:after{content:"";position:absolute;left:1.25rem;top:50%;height:.5rem;--tw-translate-y: 25%;--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;border-width:1px;border-color:currentColor;opacity:.6}.modal:not(dialog:not(.modal-open)),.modal::backdrop{background-color:#0006;animation:modal-pop .2s ease-out}.modal-open .modal-box,.modal-toggle:checked+.modal .modal-box,.modal:target .modal-box,.modal[open] .modal-box{--tw-translate-y: 0px;--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modal-action>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}@keyframes modal-pop{0%{opacity:0}}@keyframes progress-loading{50%{background-position-x:-115%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset}50%{box-shadow:0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset}to{box-shadow:0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}.swap-rotate .swap-on,.swap-rotate .swap-indeterminate,.swap-rotate input:indeterminate~.swap-on{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-off,.swap-active:where(.swap-rotate) .swap-off,.swap-rotate input:indeterminate~.swap-off{--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-on,.swap-active:where(.swap-rotate) .swap-on,.swap-rotate input:indeterminate~.swap-indeterminate{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-flip{transform-style:preserve-3d;perspective:16em}.swap-flip .swap-on,.swap-flip .swap-indeterminate,.swap-flip input:indeterminate~.swap-on{transform:rotateY(180deg);backface-visibility:hidden;opacity:1}.swap-flip input:checked~.swap-off,.swap-active:where(.swap-flip) .swap-off,.swap-flip input:indeterminate~.swap-off{transform:rotateY(-180deg);backface-visibility:hidden;opacity:1}.swap-flip input:checked~.swap-on,.swap-active:where(.swap-flip) .swap-on,.swap-flip input:indeterminate~.swap-indeterminate{transform:rotateY(0)}:is([dir=rtl] .table){text-align:right}.table :where(th,td){padding:.75rem 1rem;vertical-align:middle}.table tr.active,.table tr.active:nth-child(2n),.table-zebra tbody tr:nth-child(2n){--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))}.table-zebra tr.active,.table-zebra tr.active:nth-child(2n),.table-zebra-zebra tbody tr:nth-child(2n){--tw-bg-opacity: 1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)))}.table :where(thead,tbody) :where(tr:not(:last-child)),.table :where(thead,tbody) :where(tr:first-child:last-child){border-bottom-width:1px;--tw-border-opacity: 1;border-bottom-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)))}.table :where(thead,tfoot){white-space:nowrap;font-size:.75rem;line-height:1rem;font-weight:700;color:var(--fallback-bc,oklch(var(--bc)/.6))}.textarea-bordered{border-color:var(--fallback-bc,oklch(var(--bc)/.2))}.textarea:focus{box-shadow:none;border-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/.2))}.textarea-disabled,.textarea:disabled,.textarea[disabled]{cursor:not-allowed;--tw-border-opacity: 1;border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));--tw-text-opacity: .2 }.textarea-disabled::-moz-placeholder,.textarea:disabled::-moz-placeholder,.textarea[disabled]::-moz-placeholder{color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));--tw-placeholder-opacity: .2 }.textarea-disabled::placeholder,.textarea:disabled::placeholder,.textarea[disabled]::placeholder{color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));--tw-placeholder-opacity: .2 }@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}[dir=rtl] .toggle{--handleoffsetcalculator: calc(var(--handleoffset) * 1) }.toggle:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--fallback-bc,oklch(var(--bc)/.2))}.toggle:hover{background-color:currentColor}.toggle:checked,.toggle[checked=true],.toggle[aria-checked=true]{background-image:none;--handleoffsetcalculator: var(--handleoffset);--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}[dir=rtl] .toggle:checked,[dir=rtl] .toggle[checked=true],[dir=rtl] .toggle[aria-checked=true]{--handleoffsetcalculator: calc(var(--handleoffset) * -1) }.toggle:indeterminate{--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));box-shadow:calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset}[dir=rtl] .toggle:indeterminate{box-shadow:calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset}.toggle:disabled{cursor:not-allowed;--tw-border-opacity: 1;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));background-color:transparent;opacity:.3;--togglehandleborder: 0 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset, var(--handleoffsetcalculator) 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset }:root .prose{--tw-prose-body: var(--fallback-bc,oklch(var(--bc)/.8));--tw-prose-headings: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-lead: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-links: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-bold: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-counters: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-bullets: var(--fallback-bc,oklch(var(--bc)/.5));--tw-prose-hr: var(--fallback-bc,oklch(var(--bc)/.2));--tw-prose-quotes: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-quote-borders: var(--fallback-bc,oklch(var(--bc)/.2));--tw-prose-captions: var(--fallback-bc,oklch(var(--bc)/.5));--tw-prose-code: var(--fallback-bc,oklch(var(--bc)/1));--tw-prose-pre-code: var(--fallback-nc,oklch(var(--nc)/1));--tw-prose-pre-bg: var(--fallback-n,oklch(var(--n)/1));--tw-prose-th-borders: var(--fallback-bc,oklch(var(--bc)/.5));--tw-prose-td-borders: var(--fallback-bc,oklch(var(--bc)/.2)) }.prose :where(code):not(:where([class~=not-prose] *,pre *)){padding:1px 8px;border-radius:var(--rounded-badge);font-weight:initial;background-color:var(--fallback-bc,oklch(var(--bc)/.1))}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{display:none}.prose pre code{border-radius:0;padding:0}.prose :where(tbody tr,thead):not(:where([class~=not-prose] *)){border-bottom-color:var(--fallback-bc,oklch(var(--bc)/.2))}.artboard.phone{width:320px}.btn-circle:where(.btn-xs){height:1.5rem;width:1.5rem;border-radius:9999px;padding:0}.btn-circle:where(.btn-sm){height:2rem;width:2rem;border-radius:9999px;padding:0}.btn-circle:where(.btn-md){height:3rem;width:3rem;border-radius:9999px;padding:0}.btn-circle:where(.btn-lg){height:4rem;width:4rem;border-radius:9999px;padding:0}.modal-top :where(.modal-box){width:100%;max-width:none;--tw-translate-y: -2.5rem;--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-bottom-right-radius:var(--rounded-box, 1rem);border-bottom-left-radius:var(--rounded-box, 1rem);border-top-left-radius:0;border-top-right-radius:0}.modal-middle :where(.modal-box){width:91.666667%;max-width:32rem;--tw-translate-y: 0px;--tw-scale-x: .9;--tw-scale-y: .9;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-top-left-radius:var(--rounded-box, 1rem);border-top-right-radius:var(--rounded-box, 1rem);border-bottom-right-radius:var(--rounded-box, 1rem);border-bottom-left-radius:var(--rounded-box, 1rem)}.modal-bottom :where(.modal-box){width:100%;max-width:none;--tw-translate-y: 2.5rem;--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-top-left-radius:var(--rounded-box, 1rem);border-top-right-radius:var(--rounded-box, 1rem);border-bottom-right-radius:0;border-bottom-left-radius:0}.table-lg :not(thead):not(tfoot) tr{font-size:1rem;line-height:1.5rem}.table-lg :where(th,td){padding:1rem 1.5rem}.collapse{visibility:collapse}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.left-0{left:0}.right-0{right:0}.top-0{top:0}.z-10{z-index:10}.z-\\[9998\\]{z-index:9998}.m-0{margin:0}.flex{display:flex}.table{display:table}.grid{display:grid}.size-10{width:2.5rem;height:2.5rem}.size-12{width:3rem;height:3rem}.size-6{width:1.5rem;height:1.5rem}.h-12{height:3rem}.h-24{height:6rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[100vh\\]{height:100vh}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[32rem\\]{max-height:32rem}.max-h-\\[400px\\]{max-height:400px}.min-h-0{min-height:0px}.min-h-screen{min-height:100vh}.w-12{width:3rem}.w-24{width:6rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-\\[100vw\\]{width:100vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-full{max-width:100%}.flex-grow{flex-grow:1}.border-collapse{border-collapse:collapse}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.overflow-y-auto{overflow-y:auto}.break-words{overflow-wrap:break-word}.rounded-none{border-radius:0}.rounded-xl{border-radius:.75rem}.border-4{border-width:4px}.border-solid{border-style:solid}.border-primary-blue{--tw-border-opacity: 1;border-color:rgb(9 135 197 / var(--tw-border-opacity))}.bg-black\\/50{background-color:#00000080}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-primary-blue{--tw-bg-opacity: 1;background-color:rgb(9 135 197 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:0}.p-2{padding:.5rem}.p-4{padding:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-4{padding-top:1rem;padding-bottom:1rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-start{text-align:start}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-light{font-weight:300}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.text-primary-blue{--tw-text-opacity: 1;color:rgb(9 135 197 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.duration-200{transition-duration:.2s}.hover\\:border-black:hover{--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity))}.hover\\:bg-transparent:hover{background-color:transparent}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.hover\\:text-black:hover{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}@media not all and (min-width: 640px){.max-sm\\:hidden{display:none}}@media (min-width: 640px){.sm\\:col-span-3{grid-column:span 3 / span 3}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width: 1024px){.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}:root{--vc-clr-primary: #000;--vc-clr-secondary: #090f207f;--vc-clr-white: #ffffff;--vc-icn-width: 1.2em;--vc-nav-width: 30px;--vc-nav-height: 30px;--vc-nav-border-radius: 0;--vc-nav-color: var(--vc-clr-primary);--vc-nav-color-hover: var(--vc-clr-secondary);--vc-nav-background: transparent;--vc-pgn-width: 12px;--vc-pgn-height: 4px;--vc-pgn-margin: 4px;--vc-pgn-border-radius: 0;--vc-pgn-background-color: var(--vc-clr-secondary);--vc-pgn-active-color: var(--vc-clr-primary)}.carousel{position:relative;text-align:center;box-sizing:border-box;touch-action:pan-y;overscroll-behavior:none}.carousel.is-dragging{touch-action:none}.carousel *{box-sizing:border-box}.carousel__track{display:flex;padding:0!important;position:relative}.carousel__viewport{overflow:hidden}.carousel__sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.carousel__icon{width:var(--vc-icn-width);height:var(--vc-icn-width);fill:currentColor}.carousel__prev,.carousel__next{box-sizing:content-box;background:var(--vc-nav-background);border-radius:var(--vc-nav-border-radius);width:var(--vc-nav-width);height:var(--vc-nav-height);text-align:center;font-size:var(--vc-nav-height);padding:0;color:var(--vc-nav-color);display:flex;justify-content:center;align-items:center;position:absolute;border:0;cursor:pointer;margin:0 10px;top:50%;transform:translateY(-50%)}.carousel__next--disabled,.carousel__prev--disabled{cursor:not-allowed;opacity:.5}.carousel__prev{left:0}.carousel__next{right:0}.carousel--rtl .carousel__prev{left:auto;right:0}.carousel--rtl .carousel__next{right:auto;left:0}@media (hover: hover){.carousel__prev:hover,.carousel__next:hover{color:var(--vc-nav-color-hover)}}.carousel__pagination{display:flex;justify-content:center;list-style:none;line-height:0;margin:10px 0 0;padding:0}.carousel__pagination-button{display:block;border:0;margin:0;cursor:pointer;padding:var(--vc-pgn-margin);background:transparent}.carousel__pagination-button:after{display:block;content:"";width:var(--vc-pgn-width);height:var(--vc-pgn-height);border-radius:var(--vc-pgn-border-radius);background-color:var(--vc-pgn-background-color)}.carousel__pagination-button--active:after{background-color:var(--vc-pgn-active-color)}@media (hover: hover){.carousel__pagination-button:hover:after{background-color:var(--vc-pgn-active-color)}}.carousel__slide{scroll-snap-stop:auto;flex-shrink:0;margin:0;position:relative;display:flex;justify-content:center;align-items:center;transform:translateZ(0)}', B2 = {
  name: "VehicleSale",
  components: {
    MarkdownSection: lf,
    Overview: Ef,
    TechnicalDetails: M1,
    FirstSection: Mh,
    ImageSlider: l2,
    Outline: b2,
    Contact: L2
  },
  props: {
    vehicleId: {
      type: String,
      required: !0,
      default: ""
    },
    price: {
      type: Number,
      required: !0,
      default: 0
    },
    km: {
      type: Number,
      required: !0,
      default: 0
    },
    erstzulassung: {
      type: String,
      required: !0,
      default: ""
    }
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(this.price);
    }
  },
  setup(e) {
    const t = X(null), u = X(null), r = X(null), n = X(null), o = X(null), i = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/resolve/sale`, c = async () => {
      var s;
      try {
        const l = await (await fetch(i)).json();
        console.log(l), t.value = l, u.value = (s = l.descriptions) == null ? void 0 : s.german, r.value = l.contractTerms, n.value = l.rates, o.value = l.minDays;
      } catch (a) {
        console.error("An error occurred while fetching the data:", a);
      }
    };
    return Xu(() => {
      c();
    }), {
      article: t,
      contractTerms: r,
      rates: n,
      minDays: o,
      description: u,
      price: e.price
    };
  }
}, j2 = { class: "flex justify-center w-full" }, q2 = { class: "container flex flex-col gap-6 w-full text-left" }, H2 = /* @__PURE__ */ f("div", { class: "divider p-0 m-0" }, null, -1), $2 = /* @__PURE__ */ f("div", { class: "divider p-0 m-0" }, null, -1);
function V2(e, t, u, r, n, o) {
  const i = Be("ImageSlider"), c = Be("Contact"), s = Be("FirstSection"), a = Be("MarkdownSection"), l = Be("Overview"), p = Be("Outline"), g = Be("TechnicalDetails");
  return F(), P("div", j2, [
    f("div", q2, [
      r.article ? (F(), ye(i, {
        key: 0,
        vehicleId: r.article.id
      }, null, 8, ["vehicleId"])) : H("", !0),
      r.article ? (F(), ye(c, {
        key: 1,
        article: r.article,
        price: r.price
      }, null, 8, ["article", "price"])) : H("", !0),
      H2,
      r.article ? (F(), ye(s, {
        key: 2,
        price: r.price,
        erstzulassung: u.erstzulassung,
        km: u.km,
        gear: r.article.technicalData.transmission,
        fuel: r.article.technicalData.fuelType,
        leistung: r.article.technicalData.power,
        location: r.article.location,
        maxSeats: r.article.maxSeats,
        maxBeds: r.article.maxBeds,
        grossVehicleWeight: r.article.technicalData.grossVehicleWeight
      }, null, 8, ["price", "erstzulassung", "km", "gear", "fuel", "leistung", "location", "maxSeats", "maxBeds", "grossVehicleWeight"])) : H("", !0),
      $2,
      r.description ? (F(), ye(a, {
        key: 3,
        text: r.description,
        title: "Detaillierte Beschreibung",
        isCollapsible: !1
      }, null, 8, ["text"])) : H("", !0),
      r.article ? (F(), ye(l, {
        key: 4,
        features: r.article.features,
        vehicleId: r.article.id
      }, null, 8, ["features", "vehicleId"])) : H("", !0),
      r.article ? (F(), ye(p, {
        key: 5,
        vehicleId: r.article.id
      }, null, 8, ["vehicleId"])) : H("", !0),
      r.article ? (F(), ye(g, {
        key: 6,
        technicalData: r.article.technicalData,
        isofixSeats: r.article.isofixSeats,
        sittingPlaces: r.article.maxSeats
      }, null, 8, ["technicalData", "isofixSeats", "sittingPlaces"])) : H("", !0)
    ])
  ]);
}
const U2 = /* @__PURE__ */ dt(B2, [["render", V2], ["styles", [N2]]]), Z2 = /* @__PURE__ */ ra(U2);
customElements.define("vehicle-sale", Z2);
