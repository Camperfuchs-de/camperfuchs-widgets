function as(e, t) {
  const r = new Set(e.split(","));
  return t ? (n) => r.has(n.toLowerCase()) : (n) => r.has(n);
}
const Oe = {}, Ur = [], pt = () => {
}, Uf = () => !1, La = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), os = (e) => e.startsWith("onUpdate:"), Be = Object.assign, ss = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Wf = Object.prototype.hasOwnProperty, he = (e, t) => Wf.call(e, t), se = Array.isArray, Wr = (e) => Ra(e) === "[object Map]", lc = (e) => Ra(e) === "[object Set]", fe = (e) => typeof e == "function", Ye = (e) => typeof e == "string", nn = (e) => typeof e == "symbol", Ce = (e) => e !== null && typeof e == "object", cc = (e) => (Ce(e) || fe(e)) && fe(e.then) && fe(e.catch), uc = Object.prototype.toString, Ra = (e) => uc.call(e), zf = (e) => Ra(e).slice(8, -1), fc = (e) => Ra(e) === "[object Object]", is = (e) => Ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ua = /* @__PURE__ */ as(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fa = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, Kf = /-(\w)/g, ut = Fa((e) => e.replace(Kf, (t, r) => r ? r.toUpperCase() : "")), Gf = /\B([A-Z])/g, vt = Fa(
  (e) => e.replace(Gf, "-$1").toLowerCase()
), Ba = Fa((e) => e.charAt(0).toUpperCase() + e.slice(1)), fa = Fa((e) => e ? `on${Ba(e)}` : ""), cr = (e, t) => !Object.is(e, t), lo = (e, t) => {
  for (let r = 0; r < e.length; r++)
    e[r](t);
}, ba = (e, t, r) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: r
  });
}, Vf = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Io = (e) => {
  const t = Ye(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ri;
const dc = () => ri || (ri = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ut(e) {
  if (se(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], a = Ye(n) ? Jf(n) : Ut(n);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (Ye(e) || Ce(e))
    return e;
}
const Qf = /;(?![^(]*\))/g, Zf = /:([^]+)/, qf = /\/\*[^]*?\*\//g;
function Jf(e) {
  const t = {};
  return e.replace(qf, "").split(Qf).forEach((r) => {
    if (r) {
      const n = r.split(Zf);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ae(e) {
  let t = "";
  if (Ye(e))
    t = e;
  else if (se(e))
    for (let r = 0; r < e.length; r++) {
      const n = Ae(e[r]);
      n && (t += n + " ");
    }
  else if (Ce(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
function kn(e) {
  if (!e)
    return null;
  let { class: t, style: r } = e;
  return t && !Ye(t) && (e.class = Ae(t)), r && (e.style = Ut(r)), e;
}
const Xf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ed = /* @__PURE__ */ as(Xf);
function vc(e) {
  return !!e || e === "";
}
const Re = (e) => Ye(e) ? e : e == null ? "" : se(e) || Ce(e) && (e.toString === uc || !fe(e.toString)) ? JSON.stringify(e, pc, 2) : String(e), pc = (e, t) => t && t.__v_isRef ? pc(e, t.value) : Wr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, a], o) => (r[co(n, o) + " =>"] = a, r),
    {}
  )
} : lc(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => co(r))
} : nn(t) ? co(t) : Ce(t) && !se(t) && !fc(t) ? String(t) : t, co = (e, t = "") => {
  var r;
  return nn(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
};
let xt;
class td {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = xt, !t && xt && (this.index = (xt.scopes || (xt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const r = xt;
      try {
        return xt = this, t();
      } finally {
        xt = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    xt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    xt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.scopes)
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function rd(e, t = xt) {
  t && t.active && t.effects.push(e);
}
function nd() {
  return xt;
}
let Ar;
class ls {
  constructor(t, r, n, a) {
    this.fn = t, this.trigger = r, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, rd(this, a);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, $r();
      for (const t of this.deps)
        if (t.computed && (ad(t.computed), this._dirtyLevel >= 2))
          break;
      Tr(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = ir, r = Ar;
    try {
      return ir = !0, Ar = this, this._runnings++, ni(this), this.fn();
    } finally {
      ai(this), this._runnings--, Ar = r, ir = t;
    }
  }
  stop() {
    var t;
    this.active && (ni(this), ai(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function ad(e) {
  return e.value;
}
function ni(e) {
  e._trackId++, e._depsLength = 0;
}
function ai(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      hc(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function hc(e, t) {
  const r = e.get(t);
  r !== void 0 && t._trackId !== r && (e.delete(t), e.size === 0 && e.cleanup());
}
let ir = !0, $o = 0;
const gc = [];
function $r() {
  gc.push(ir), ir = !1;
}
function Tr() {
  const e = gc.pop();
  ir = e === void 0 ? !0 : e;
}
function cs() {
  $o++;
}
function us() {
  for ($o--; !$o && To.length; )
    To.shift()();
}
function mc(e, t, r) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && hc(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const To = [];
function yc(e, t, r) {
  cs();
  for (const n of e.keys())
    if (!(!n.allowRecurse && n._runnings) && n._dirtyLevel < t && (!n._runnings || t !== 2)) {
      const a = n._dirtyLevel;
      n._dirtyLevel = t, a === 0 && (!n._queryings || t !== 2) && (n.trigger(), n.scheduler && To.push(n.scheduler));
    }
  us();
}
const bc = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  return r.cleanup = e, r.computed = t, r;
}, wa = /* @__PURE__ */ new WeakMap(), Cr = Symbol(""), Po = Symbol("");
function it(e, t, r) {
  if (ir && Ar) {
    let n = wa.get(e);
    n || wa.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(r);
    a || n.set(r, a = bc(() => n.delete(r))), mc(
      Ar,
      a
    );
  }
}
function Wt(e, t, r, n, a, o) {
  const s = wa.get(e);
  if (!s)
    return;
  let i = [];
  if (t === "clear")
    i = [...s.values()];
  else if (r === "length" && se(e)) {
    const l = Number(n);
    s.forEach((c, u) => {
      (u === "length" || !nn(u) && u >= l) && i.push(c);
    });
  } else
    switch (r !== void 0 && i.push(s.get(r)), t) {
      case "add":
        se(e) ? is(r) && i.push(s.get("length")) : (i.push(s.get(Cr)), Wr(e) && i.push(s.get(Po)));
        break;
      case "delete":
        se(e) || (i.push(s.get(Cr)), Wr(e) && i.push(s.get(Po)));
        break;
      case "set":
        Wr(e) && i.push(s.get(Cr));
        break;
    }
  cs();
  for (const l of i)
    l && yc(
      l,
      3
    );
  us();
}
function od(e, t) {
  var r;
  return (r = wa.get(e)) == null ? void 0 : r.get(t);
}
const sd = /* @__PURE__ */ as("__proto__,__v_isRef,__isVue"), wc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nn)
), oi = /* @__PURE__ */ id();
function id() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...r) {
      const n = ge(this);
      for (let o = 0, s = this.length; o < s; o++)
        it(n, "get", o + "");
      const a = n[t](...r);
      return a === -1 || a === !1 ? n[t](...r.map(ge)) : a;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...r) {
      $r(), cs();
      const n = ge(this)[t].apply(this, r);
      return us(), Tr(), n;
    };
  }), e;
}
function ld(e) {
  const t = ge(this);
  return it(t, "has", e), t.hasOwnProperty(e);
}
class Dc {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._shallow = r;
  }
  get(t, r, n) {
    const a = this._isReadonly, o = this._shallow;
    if (r === "__v_isReactive")
      return !a;
    if (r === "__v_isReadonly")
      return a;
    if (r === "__v_isShallow")
      return o;
    if (r === "__v_raw")
      return n === (a ? o ? Dd : Cc : o ? Ac : xc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = se(t);
    if (!a) {
      if (s && he(oi, r))
        return Reflect.get(oi, r, n);
      if (r === "hasOwnProperty")
        return ld;
    }
    const i = Reflect.get(t, r, n);
    return (nn(r) ? wc.has(r) : sd(r)) || (a || it(t, "get", r), o) ? i : Se(i) ? s && is(r) ? i : i.value : Ce(i) ? a ? Mc(i) : an(i) : i;
  }
}
class _c extends Dc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, a) {
    let o = t[r];
    if (!this._shallow) {
      const l = Qr(o);
      if (!jr(n) && !Qr(n) && (o = ge(o), n = ge(n)), !se(t) && Se(o) && !Se(n))
        return l ? !1 : (o.value = n, !0);
    }
    const s = se(t) && is(r) ? Number(r) < t.length : he(t, r), i = Reflect.set(t, r, n, a);
    return t === ge(a) && (s ? cr(n, o) && Wt(t, "set", r, n) : Wt(t, "add", r, n)), i;
  }
  deleteProperty(t, r) {
    const n = he(t, r);
    t[r];
    const a = Reflect.deleteProperty(t, r);
    return a && n && Wt(t, "delete", r, void 0), a;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!nn(r) || !wc.has(r)) && it(t, "has", r), n;
  }
  ownKeys(t) {
    return it(
      t,
      "iterate",
      se(t) ? "length" : Cr
    ), Reflect.ownKeys(t);
  }
}
class cd extends Dc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const ud = /* @__PURE__ */ new _c(), fd = /* @__PURE__ */ new cd(), dd = /* @__PURE__ */ new _c(
  !0
), fs = (e) => e, ja = (e) => Reflect.getPrototypeOf(e);
function qn(e, t, r = !1, n = !1) {
  e = e.__v_raw;
  const a = ge(e), o = ge(t);
  r || (cr(t, o) && it(a, "get", t), it(a, "get", o));
  const { has: s } = ja(a), i = n ? fs : r ? ps : En;
  if (s.call(a, t))
    return i(e.get(t));
  if (s.call(a, o))
    return i(e.get(o));
  e !== a && e.get(t);
}
function Jn(e, t = !1) {
  const r = this.__v_raw, n = ge(r), a = ge(e);
  return t || (cr(e, a) && it(n, "has", e), it(n, "has", a)), e === a ? r.has(e) : r.has(e) || r.has(a);
}
function Xn(e, t = !1) {
  return e = e.__v_raw, !t && it(ge(e), "iterate", Cr), Reflect.get(e, "size", e);
}
function si(e) {
  e = ge(e);
  const t = ge(this);
  return ja(t).has.call(t, e) || (t.add(e), Wt(t, "add", e, e)), this;
}
function ii(e, t) {
  t = ge(t);
  const r = ge(this), { has: n, get: a } = ja(r);
  let o = n.call(r, e);
  o || (e = ge(e), o = n.call(r, e));
  const s = a.call(r, e);
  return r.set(e, t), o ? cr(t, s) && Wt(r, "set", e, t) : Wt(r, "add", e, t), this;
}
function li(e) {
  const t = ge(this), { has: r, get: n } = ja(t);
  let a = r.call(t, e);
  a || (e = ge(e), a = r.call(t, e)), n && n.call(t, e);
  const o = t.delete(e);
  return a && Wt(t, "delete", e, void 0), o;
}
function ci() {
  const e = ge(this), t = e.size !== 0, r = e.clear();
  return t && Wt(e, "clear", void 0, void 0), r;
}
function ea(e, t) {
  return function(n, a) {
    const o = this, s = o.__v_raw, i = ge(s), l = t ? fs : e ? ps : En;
    return !e && it(i, "iterate", Cr), s.forEach((c, u) => n.call(a, l(c), l(u), o));
  };
}
function ta(e, t, r) {
  return function(...n) {
    const a = this.__v_raw, o = ge(a), s = Wr(o), i = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = a[e](...n), u = r ? fs : t ? ps : En;
    return !t && it(
      o,
      "iterate",
      l ? Po : Cr
    ), {
      // iterator protocol
      next() {
        const { value: f, done: d } = c.next();
        return d ? { value: f, done: d } : {
          value: i ? [u(f[0]), u(f[1])] : u(f),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Jt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function vd() {
  const e = {
    get(o) {
      return qn(this, o);
    },
    get size() {
      return Xn(this);
    },
    has: Jn,
    add: si,
    set: ii,
    delete: li,
    clear: ci,
    forEach: ea(!1, !1)
  }, t = {
    get(o) {
      return qn(this, o, !1, !0);
    },
    get size() {
      return Xn(this);
    },
    has: Jn,
    add: si,
    set: ii,
    delete: li,
    clear: ci,
    forEach: ea(!1, !0)
  }, r = {
    get(o) {
      return qn(this, o, !0);
    },
    get size() {
      return Xn(this, !0);
    },
    has(o) {
      return Jn.call(this, o, !0);
    },
    add: Jt("add"),
    set: Jt("set"),
    delete: Jt("delete"),
    clear: Jt("clear"),
    forEach: ea(!0, !1)
  }, n = {
    get(o) {
      return qn(this, o, !0, !0);
    },
    get size() {
      return Xn(this, !0);
    },
    has(o) {
      return Jn.call(this, o, !0);
    },
    add: Jt("add"),
    set: Jt("set"),
    delete: Jt("delete"),
    clear: Jt("clear"),
    forEach: ea(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = ta(
      o,
      !1,
      !1
    ), r[o] = ta(
      o,
      !0,
      !1
    ), t[o] = ta(
      o,
      !1,
      !0
    ), n[o] = ta(
      o,
      !0,
      !0
    );
  }), [
    e,
    r,
    t,
    n
  ];
}
const [
  pd,
  hd,
  gd,
  md
] = /* @__PURE__ */ vd();
function ds(e, t) {
  const r = t ? e ? md : gd : e ? hd : pd;
  return (n, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    he(r, a) && a in n ? r : n,
    a,
    o
  );
}
const yd = {
  get: /* @__PURE__ */ ds(!1, !1)
}, bd = {
  get: /* @__PURE__ */ ds(!1, !0)
}, wd = {
  get: /* @__PURE__ */ ds(!0, !1)
}, xc = /* @__PURE__ */ new WeakMap(), Ac = /* @__PURE__ */ new WeakMap(), Cc = /* @__PURE__ */ new WeakMap(), Dd = /* @__PURE__ */ new WeakMap();
function _d(e) {
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
function xd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _d(zf(e));
}
function an(e) {
  return Qr(e) ? e : vs(
    e,
    !1,
    ud,
    yd,
    xc
  );
}
function Ad(e) {
  return vs(
    e,
    !1,
    dd,
    bd,
    Ac
  );
}
function Mc(e) {
  return vs(
    e,
    !0,
    fd,
    wd,
    Cc
  );
}
function vs(e, t, r, n, a) {
  if (!Ce(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = a.get(e);
  if (o)
    return o;
  const s = xd(e);
  if (s === 0)
    return e;
  const i = new Proxy(
    e,
    s === 2 ? n : r
  );
  return a.set(e, i), i;
}
function zr(e) {
  return Qr(e) ? zr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Qr(e) {
  return !!(e && e.__v_isReadonly);
}
function jr(e) {
  return !!(e && e.__v_isShallow);
}
function kc(e) {
  return zr(e) || Qr(e);
}
function ge(e) {
  const t = e && e.__v_raw;
  return t ? ge(t) : e;
}
function Oc(e) {
  return ba(e, "__v_skip", !0), e;
}
const En = (e) => Ce(e) ? an(e) : e, ps = (e) => Ce(e) ? Mc(e) : e;
class Ic {
  constructor(t, r, n, a) {
    this._setter = r, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new ls(
      () => t(this._value),
      () => So(this, 1)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !a, this.__v_isReadonly = n;
  }
  get value() {
    const t = ge(this);
    return $c(t), (!t._cacheable || t.effect.dirty) && cr(t._value, t._value = t.effect.run()) && So(t, 2), t._value;
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
function Cd(e, t, r = !1) {
  let n, a;
  const o = fe(e);
  return o ? (n = e, a = pt) : (n = e.get, a = e.set), new Ic(n, a, o || !a, r);
}
function $c(e) {
  ir && Ar && (e = ge(e), mc(
    Ar,
    e.dep || (e.dep = bc(
      () => e.dep = void 0,
      e instanceof Ic ? e : void 0
    ))
  ));
}
function So(e, t = 3, r) {
  e = ge(e);
  const n = e.dep;
  n && yc(
    n,
    t
  );
}
function Se(e) {
  return !!(e && e.__v_isRef === !0);
}
function be(e) {
  return Md(e, !1);
}
function Md(e, t) {
  return Se(e) ? e : new kd(e, t);
}
class kd {
  constructor(t, r) {
    this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : ge(t), this._value = r ? t : En(t);
  }
  get value() {
    return $c(this), this._value;
  }
  set value(t) {
    const r = this.__v_isShallow || jr(t) || Qr(t);
    t = r ? t : ge(t), cr(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : En(t), So(this, 3));
  }
}
function P(e) {
  return Se(e) ? e.value : e;
}
const Od = {
  get: (e, t, r) => P(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const a = e[t];
    return Se(a) && !Se(r) ? (a.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Tc(e) {
  return zr(e) ? e : new Proxy(e, Od);
}
function Id(e) {
  const t = se(e) ? new Array(e.length) : {};
  for (const r in e)
    t[r] = Pc(e, r);
  return t;
}
class $d {
  constructor(t, r, n) {
    this._object = t, this._key = r, this._defaultValue = n, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return od(ge(this._object), this._key);
  }
}
class Td {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function da(e, t, r) {
  return Se(e) ? e : fe(e) ? new Td(e) : Ce(e) && arguments.length > 1 ? Pc(e, t, r) : be(e);
}
function Pc(e, t, r) {
  const n = e[t];
  return Se(n) ? n : new $d(e, t, r);
}
function lr(e, t, r, n) {
  let a;
  try {
    a = n ? e(...n) : e();
  } catch (o) {
    Ha(o, t, r);
  }
  return a;
}
function gt(e, t, r, n) {
  if (fe(e)) {
    const o = lr(e, t, r, n);
    return o && cc(o) && o.catch((s) => {
      Ha(s, t, r);
    }), o;
  }
  const a = [];
  for (let o = 0; o < e.length; o++)
    a.push(gt(e[o], t, r, n));
  return a;
}
function Ha(e, t, r, n = !0) {
  const a = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const s = t.proxy, i = `https://vuejs.org/errors/#runtime-${r}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, s, i) === !1)
            return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      lr(
        l,
        null,
        10,
        [e, s, i]
      );
      return;
    }
  }
  Pd(e, r, a, n);
}
function Pd(e, t, r, n = !0) {
  console.error(e);
}
let Yn = !1, Eo = !1;
const Qe = [];
let St = 0;
const Kr = [];
let Bt = null, wr = 0;
const Sc = /* @__PURE__ */ Promise.resolve();
let hs = null;
function _r(e) {
  const t = hs || Sc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Sd(e) {
  let t = St + 1, r = Qe.length;
  for (; t < r; ) {
    const n = t + r >>> 1, a = Qe[n], o = Nn(a);
    o < e || o === e && a.pre ? t = n + 1 : r = n;
  }
  return t;
}
function gs(e) {
  (!Qe.length || !Qe.includes(
    e,
    Yn && e.allowRecurse ? St + 1 : St
  )) && (e.id == null ? Qe.push(e) : Qe.splice(Sd(e.id), 0, e), Ec());
}
function Ec() {
  !Yn && !Eo && (Eo = !0, hs = Sc.then(Nc));
}
function Ed(e) {
  const t = Qe.indexOf(e);
  t > St && Qe.splice(t, 1);
}
function Yd(e) {
  se(e) ? Kr.push(...e) : (!Bt || !Bt.includes(
    e,
    e.allowRecurse ? wr + 1 : wr
  )) && Kr.push(e), Ec();
}
function ui(e, t, r = Yn ? St + 1 : 0) {
  for (; r < Qe.length; r++) {
    const n = Qe[r];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      Qe.splice(r, 1), r--, n();
    }
  }
}
function Yc(e) {
  if (Kr.length) {
    const t = [...new Set(Kr)];
    if (Kr.length = 0, Bt) {
      Bt.push(...t);
      return;
    }
    for (Bt = t, Bt.sort((r, n) => Nn(r) - Nn(n)), wr = 0; wr < Bt.length; wr++)
      Bt[wr]();
    Bt = null, wr = 0;
  }
}
const Nn = (e) => e.id == null ? 1 / 0 : e.id, Nd = (e, t) => {
  const r = Nn(e) - Nn(t);
  if (r === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return r;
};
function Nc(e) {
  Eo = !1, Yn = !0, Qe.sort(Nd);
  try {
    for (St = 0; St < Qe.length; St++) {
      const t = Qe[St];
      t && t.active !== !1 && lr(t, null, 14);
    }
  } finally {
    St = 0, Qe.length = 0, Yc(), Yn = !1, hs = null, (Qe.length || Kr.length) && Nc();
  }
}
function Ld(e, t, ...r) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || Oe;
  let a = r;
  const o = t.startsWith("update:"), s = o && t.slice(7);
  if (s && s in n) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`, { number: f, trim: d } = n[u] || Oe;
    d && (a = r.map((h) => Ye(h) ? h.trim() : h)), f && (a = r.map(Vf));
  }
  let i, l = n[i = fa(t)] || // also try camelCase event handler (#2249)
  n[i = fa(ut(t))];
  !l && o && (l = n[i = fa(vt(t))]), l && gt(
    l,
    e,
    6,
    a
  );
  const c = n[i + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, gt(
      c,
      e,
      6,
      a
    );
  }
}
function Lc(e, t, r = !1) {
  const n = t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const o = e.emits;
  let s = {}, i = !1;
  if (!fe(e)) {
    const l = (c) => {
      const u = Lc(c, t, !0);
      u && (i = !0, Be(s, u));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !i ? (Ce(e) && n.set(e, null), null) : (se(o) ? o.forEach((l) => s[l] = null) : Be(s, o), Ce(e) && n.set(e, s), s);
}
function Ua(e, t) {
  return !e || !La(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), he(e, t[0].toLowerCase() + t.slice(1)) || he(e, vt(t)) || he(e, t));
}
let Ke = null, Rc = null;
function Da(e) {
  const t = Ke;
  return Ke = e, Rc = e && e.type.__scopeId || null, t;
}
function Ee(e, t = Ke, r) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && _i(-1);
    const o = Da(t);
    let s;
    try {
      s = e(...a);
    } finally {
      Da(o), n._d && _i(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function uo(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: a,
    props: o,
    propsOptions: [s],
    slots: i,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: d,
    setupState: h,
    ctx: m,
    inheritAttrs: b
  } = e;
  let D, y;
  const B = Da(e);
  try {
    if (r.shapeFlag & 4) {
      const I = a || n, A = I;
      D = Pt(
        u.call(
          A,
          I,
          f,
          o,
          h,
          d,
          m
        )
      ), y = l;
    } else {
      const I = t;
      D = Pt(
        I.length > 1 ? I(
          o,
          { attrs: l, slots: i, emit: c }
        ) : I(
          o,
          null
          /* we know it doesn't need it */
        )
      ), y = t.props ? l : Rd(l);
    }
  } catch (I) {
    Tn.length = 0, Ha(I, e, 1), D = le(yt);
  }
  let F = D;
  if (y && b !== !1) {
    const I = Object.keys(y), { shapeFlag: A } = F;
    I.length && A & 7 && (s && I.some(os) && (y = Fd(
      y,
      s
    )), F = ur(F, y));
  }
  return r.dirs && (F = ur(F), F.dirs = F.dirs ? F.dirs.concat(r.dirs) : r.dirs), r.transition && (F.transition = r.transition), D = F, Da(B), D;
}
const Rd = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || La(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Fd = (e, t) => {
  const r = {};
  for (const n in e)
    (!os(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Bd(e, t, r) {
  const { props: n, children: a, component: o } = e, { props: s, children: i, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? fi(n, s, c) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (s[d] !== n[d] && !Ua(c, d))
          return !0;
      }
    }
  } else
    return (a || i) && (!i || !i.$stable) ? !0 : n === s ? !1 : n ? s ? fi(n, s, c) : !0 : !!s;
  return !1;
}
function fi(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    if (t[o] !== e[o] && !Ua(r, o))
      return !0;
  }
  return !1;
}
function jd({ vnode: e, parent: t }, r) {
  if (r)
    for (; t; ) {
      const n = t.subTree;
      if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
        (e = t.vnode).el = r, t = t.parent;
      else
        break;
    }
}
const ms = "components", Hd = "directives";
function Tt(e, t) {
  return ys(ms, e, !0, t) || e;
}
const Fc = Symbol.for("v-ndc");
function Bc(e) {
  return Ye(e) ? ys(ms, e, !1) || e : e || Fc;
}
function Ud(e) {
  return ys(Hd, e);
}
function ys(e, t, r = !0, n = !1) {
  const a = Ke || Ue;
  if (a) {
    const o = a.type;
    if (e === ms) {
      const i = Lv(
        o,
        !1
      );
      if (i && (i === t || i === ut(t) || i === Ba(ut(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      di(a[e] || o[e], t) || // global registration
      di(a.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function di(e, t) {
  return e && (e[t] || e[ut(t)] || e[Ba(ut(t))]);
}
const Wd = (e) => e.__isSuspense;
function zd(e, t) {
  t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : Yd(e);
}
const Kd = Symbol.for("v-scx"), Gd = () => zt(Kd);
function jc(e, t) {
  return bs(e, null, t);
}
const ra = {};
function He(e, t, r) {
  return bs(e, t, r);
}
function bs(e, t, {
  immediate: r,
  deep: n,
  flush: a,
  once: o,
  onTrack: s,
  onTrigger: i
} = Oe) {
  var l;
  if (t && o) {
    const A = t;
    t = (...G) => {
      A(...G), I();
    };
  }
  const c = nd() === ((l = Ue) == null ? void 0 : l.scope) ? Ue : null;
  let u, f = !1, d = !1;
  if (Se(e) ? (u = () => e.value, f = jr(e)) : zr(e) ? (u = jr(e) || n === !1 ? () => jt(e, 1) : () => jt(e), f = !0) : se(e) ? (d = !0, f = e.some((A) => zr(A) || jr(A)), u = () => e.map((A) => {
    if (Se(A))
      return A.value;
    if (zr(A))
      return jt(A, jr(A) || n === !1 ? 1 : void 0);
    if (fe(A))
      return lr(A, c, 2);
  })) : fe(e) ? t ? u = () => lr(e, c, 2) : u = () => {
    if (!(c && c.isUnmounted))
      return h && h(), gt(
        e,
        c,
        3,
        [m]
      );
  } : u = pt, t && n) {
    const A = u;
    u = () => jt(A());
  }
  let h, m = (A) => {
    h = F.onStop = () => {
      lr(A, c, 4), h = F.onStop = void 0;
    };
  }, b;
  if (Qa)
    if (m = pt, t ? r && gt(t, c, 3, [
      u(),
      d ? [] : void 0,
      m
    ]) : u(), a === "sync") {
      const A = Gd();
      b = A.__watcherHandles || (A.__watcherHandles = []);
    } else
      return pt;
  let D = d ? new Array(e.length).fill(ra) : ra;
  const y = () => {
    if (!(!F.active || !F.dirty))
      if (t) {
        const A = F.run();
        (n || f || (d ? A.some((G, $) => cr(G, D[$])) : cr(A, D))) && (h && h(), gt(t, c, 3, [
          A,
          // pass undefined as the old value when it's changed for the first time
          D === ra ? void 0 : d && D[0] === ra ? [] : D,
          m
        ]), D = A);
      } else
        F.run();
  };
  y.allowRecurse = !!t;
  let B;
  a === "sync" ? B = y : a === "post" ? B = () => at(y, c && c.suspense) : (y.pre = !0, c && (y.id = c.uid), B = () => gs(y));
  const F = new ls(u, pt, B), I = () => {
    F.stop(), c && c.scope && ss(c.scope.effects, F);
  };
  return t ? r ? y() : D = F.run() : a === "post" ? at(
    F.run.bind(F),
    c && c.suspense
  ) : F.run(), b && b.push(I), I;
}
function Vd(e, t, r) {
  const n = this.proxy, a = Ye(e) ? e.includes(".") ? Hc(n, e) : () => n[e] : e.bind(n, n);
  let o;
  fe(t) ? o = t : (o = t.handler, r = t);
  const s = Ue;
  Zr(this);
  const i = bs(a, o.bind(n), r);
  return s ? Zr(s) : Mr(), i;
}
function Hc(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < r.length && n; a++)
      n = n[r[a]];
    return n;
  };
}
function jt(e, t, r = 0, n) {
  if (!Ce(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (r >= t)
      return e;
    r++;
  }
  if (n = n || /* @__PURE__ */ new Set(), n.has(e))
    return e;
  if (n.add(e), Se(e))
    jt(e.value, t, r, n);
  else if (se(e))
    for (let a = 0; a < e.length; a++)
      jt(e[a], t, r, n);
  else if (lc(e) || Wr(e))
    e.forEach((a) => {
      jt(a, t, r, n);
    });
  else if (fc(e))
    for (const a in e)
      jt(e[a], t, r, n);
  return e;
}
function On(e, t) {
  const r = Ke;
  if (r === null)
    return e;
  const n = Za(r) || r.proxy, a = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, l, c = Oe] = t[o];
    s && (fe(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && jt(i), a.push({
      dir: s,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function hr(e, t, r, n) {
  const a = e.dirs, o = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const i = a[s];
    o && (i.oldValue = o[s].value);
    let l = i.dir[n];
    l && ($r(), gt(l, r, 8, [
      e.el,
      i,
      e,
      t
    ]), Tr());
  }
}
const rr = Symbol("_leaveCb"), na = Symbol("_enterCb");
function Qd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Pr(() => {
    e.isMounted = !0;
  }), Gc(() => {
    e.isUnmounting = !0;
  }), e;
}
const dt = [Function, Array], Uc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: dt,
  onEnter: dt,
  onAfterEnter: dt,
  onEnterCancelled: dt,
  // leave
  onBeforeLeave: dt,
  onLeave: dt,
  onAfterLeave: dt,
  onLeaveCancelled: dt,
  // appear
  onBeforeAppear: dt,
  onAppear: dt,
  onAfterAppear: dt,
  onAppearCancelled: dt
}, Zd = {
  name: "BaseTransition",
  props: Uc,
  setup(e, { slots: t }) {
    const r = Pv(), n = Qd();
    let a;
    return () => {
      const o = t.default && zc(t.default(), !0);
      if (!o || !o.length)
        return;
      let s = o[0];
      if (o.length > 1) {
        for (const b of o)
          if (b.type !== yt) {
            s = b;
            break;
          }
      }
      const i = ge(e), { mode: l } = i;
      if (n.isLeaving)
        return fo(s);
      const c = vi(s);
      if (!c)
        return fo(s);
      const u = Yo(
        c,
        i,
        n,
        r
      );
      No(c, u);
      const f = r.subTree, d = f && vi(f);
      let h = !1;
      const { getTransitionKey: m } = c.type;
      if (m) {
        const b = m();
        a === void 0 ? a = b : b !== a && (a = b, h = !0);
      }
      if (d && d.type !== yt && (!Dr(c, d) || h)) {
        const b = Yo(
          d,
          i,
          n,
          r
        );
        if (No(d, b), l === "out-in")
          return n.isLeaving = !0, b.afterLeave = () => {
            n.isLeaving = !1, r.update.active !== !1 && (r.effect.dirty = !0, r.update());
          }, fo(s);
        l === "in-out" && c.type !== yt && (b.delayLeave = (D, y, B) => {
          const F = Wc(
            n,
            d
          );
          F[String(d.key)] = d, D[rr] = () => {
            y(), D[rr] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = B;
        });
      }
      return s;
    };
  }
}, qd = Zd;
function Wc(e, t) {
  const { leavingVNodes: r } = e;
  let n = r.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), r.set(t.type, n)), n;
}
function Yo(e, t, r, n) {
  const {
    appear: a,
    mode: o,
    persisted: s = !1,
    onBeforeEnter: i,
    onEnter: l,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: f,
    onLeave: d,
    onAfterLeave: h,
    onLeaveCancelled: m,
    onBeforeAppear: b,
    onAppear: D,
    onAfterAppear: y,
    onAppearCancelled: B
  } = t, F = String(e.key), I = Wc(r, e), A = (M, R) => {
    M && gt(
      M,
      n,
      9,
      R
    );
  }, G = (M, R) => {
    const j = R[1];
    A(M, R), se(M) ? M.every((X) => X.length <= 1) && j() : M.length <= 1 && j();
  }, $ = {
    mode: o,
    persisted: s,
    beforeEnter(M) {
      let R = i;
      if (!r.isMounted)
        if (a)
          R = b || i;
        else
          return;
      M[rr] && M[rr](
        !0
        /* cancelled */
      );
      const j = I[F];
      j && Dr(e, j) && j.el[rr] && j.el[rr](), A(R, [M]);
    },
    enter(M) {
      let R = l, j = c, X = u;
      if (!r.isMounted)
        if (a)
          R = D || l, j = y || c, X = B || u;
        else
          return;
      let x = !1;
      const H = M[na] = (ae) => {
        x || (x = !0, ae ? A(X, [M]) : A(j, [M]), $.delayedLeave && $.delayedLeave(), M[na] = void 0);
      };
      R ? G(R, [M, H]) : H();
    },
    leave(M, R) {
      const j = String(e.key);
      if (M[na] && M[na](
        !0
        /* cancelled */
      ), r.isUnmounting)
        return R();
      A(f, [M]);
      let X = !1;
      const x = M[rr] = (H) => {
        X || (X = !0, R(), H ? A(m, [M]) : A(h, [M]), M[rr] = void 0, I[j] === e && delete I[j]);
      };
      I[j] = e, d ? G(d, [M, x]) : x();
    },
    clone(M) {
      return Yo(M, t, r, n);
    }
  };
  return $;
}
function fo(e) {
  if (Wa(e))
    return e = ur(e), e.children = null, e;
}
function vi(e) {
  return Wa(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    e.children ? e.children[0] : void 0
  ) : e;
}
function No(e, t) {
  e.shapeFlag & 6 && e.component ? No(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function zc(e, t = !1, r) {
  let n = [], a = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const i = r == null ? s.key : String(r) + String(s.key != null ? s.key : o);
    s.type === we ? (s.patchFlag & 128 && a++, n = n.concat(
      zc(s.children, t, i)
    )) : (t || s.type !== yt) && n.push(i != null ? ur(s, { key: i }) : s);
  }
  if (a > 1)
    for (let o = 0; o < n.length; o++)
      n[o].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function We(e, t) {
  return fe(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Be({ name: e.name }, t, { setup: e })
  ) : e;
}
const In = (e) => !!e.type.__asyncLoader, Wa = (e) => e.type.__isKeepAlive;
function Jd(e, t) {
  Kc(e, "a", t);
}
function Xd(e, t) {
  Kc(e, "da", t);
}
function Kc(e, t, r = Ue) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = r;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (za(t, n, r), r) {
    let a = r.parent;
    for (; a && a.parent; )
      Wa(a.parent.vnode) && ev(n, t, r, a), a = a.parent;
  }
}
function ev(e, t, r, n) {
  const a = za(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Wn(() => {
    ss(n[t], a);
  }, r);
}
function za(e, t, r = Ue, n = !1) {
  if (r) {
    const a = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      if (r.isUnmounted)
        return;
      $r(), Zr(r);
      const i = gt(t, r, e, s);
      return Mr(), Tr(), i;
    });
    return n ? a.unshift(o) : a.push(o), o;
  }
}
const Qt = (e) => (t, r = Ue) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Qa || e === "sp") && za(e, (...n) => t(...n), r)
), tv = Qt("bm"), Pr = Qt("m"), rv = Qt("bu"), nv = Qt("u"), Gc = Qt("bum"), Wn = Qt("um"), av = Qt("sp"), ov = Qt(
  "rtg"
), sv = Qt(
  "rtc"
);
function iv(e, t = Ue) {
  za("ec", e, t);
}
function mt(e, t, r, n) {
  let a;
  const o = r && r[n];
  if (se(e) || Ye(e)) {
    a = new Array(e.length);
    for (let s = 0, i = e.length; s < i; s++)
      a[s] = t(e[s], s, void 0, o && o[s]);
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let s = 0; s < e; s++)
      a[s] = t(s + 1, s, void 0, o && o[s]);
  } else if (Ce(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (s, i) => t(s, i, void 0, o && o[i])
      );
    else {
      const s = Object.keys(e);
      a = new Array(s.length);
      for (let i = 0, l = s.length; i < l; i++) {
        const c = s[i];
        a[i] = t(e[c], c, i, o && o[i]);
      }
    }
  else
    a = [];
  return r && (r[n] = a), a;
}
function zn(e, t, r = {}, n, a) {
  if (Ke.isCE || Ke.parent && In(Ke.parent) && Ke.parent.isCE)
    return t !== "default" && (r.name = t), le("slot", r, n && n());
  let o = e[t];
  o && o._c && (o._d = !1), K();
  const s = o && Vc(o(r)), i = Ge(
    we,
    {
      key: r.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`
    },
    s || (n ? n() : []),
    s && e._ === 1 ? 64 : -2
  );
  return !a && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), o && o._c && (o._d = !0), i;
}
function Vc(e) {
  return e.some((t) => Aa(t) ? !(t.type === yt || t.type === we && !Vc(t.children)) : !0) ? e : null;
}
function lv(e, t) {
  const r = {};
  for (const n in e)
    r[t && /[A-Z]/.test(n) ? `on:${n}` : fa(n)] = e[n];
  return r;
}
const Lo = (e) => e ? su(e) ? Za(e) || e.proxy : Lo(e.parent) : null, $n = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Be(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Lo(e.parent),
    $root: (e) => Lo(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ws(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, gs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _r.bind(e.proxy)),
    $watch: (e) => Vd.bind(e)
  })
), vo = (e, t) => e !== Oe && !e.__isScriptSetup && he(e, t), cv = {
  get({ _: e }, t) {
    const { ctx: r, setupState: n, data: a, props: o, accessCache: s, type: i, appContext: l } = e;
    let c;
    if (t[0] !== "$") {
      const h = s[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return n[t];
          case 2:
            return a[t];
          case 4:
            return r[t];
          case 3:
            return o[t];
        }
      else {
        if (vo(n, t))
          return s[t] = 1, n[t];
        if (a !== Oe && he(a, t))
          return s[t] = 2, a[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && he(c, t)
        )
          return s[t] = 3, o[t];
        if (r !== Oe && he(r, t))
          return s[t] = 4, r[t];
        Ro && (s[t] = 0);
      }
    }
    const u = $n[t];
    let f, d;
    if (u)
      return t === "$attrs" && it(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = i.__cssModules) && (f = f[t])
    )
      return f;
    if (r !== Oe && he(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      d = l.config.globalProperties, he(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: a, ctx: o } = e;
    return vo(a, t) ? (a[t] = r, !0) : n !== Oe && he(n, t) ? (n[t] = r, !0) : he(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: a, propsOptions: o }
  }, s) {
    let i;
    return !!r[s] || e !== Oe && he(e, s) || vo(t, s) || (i = o[0]) && he(i, s) || he(n, s) || he($n, s) || he(a.config.globalProperties, s);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : he(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function pi(e) {
  return se(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Ro = !0;
function uv(e) {
  const t = ws(e), r = e.proxy, n = e.ctx;
  Ro = !1, t.beforeCreate && hi(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: o,
    methods: s,
    watch: i,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: m,
    activated: b,
    deactivated: D,
    beforeDestroy: y,
    beforeUnmount: B,
    destroyed: F,
    unmounted: I,
    render: A,
    renderTracked: G,
    renderTriggered: $,
    errorCaptured: M,
    serverPrefetch: R,
    // public API
    expose: j,
    inheritAttrs: X,
    // assets
    components: x,
    directives: H,
    filters: ae
  } = t;
  if (c && fv(c, n, null), s)
    for (const ee in s) {
      const ie = s[ee];
      fe(ie) && (n[ee] = ie.bind(r));
    }
  if (a) {
    const ee = a.call(r, r);
    Ce(ee) && (e.data = an(ee));
  }
  if (Ro = !0, o)
    for (const ee in o) {
      const ie = o[ee], pe = fe(ie) ? ie.bind(r, r) : fe(ie.get) ? ie.get.bind(r, r) : pt, Y = !fe(ie) && fe(ie.set) ? ie.set.bind(r) : pt, de = _({
        get: pe,
        set: Y
      });
      Object.defineProperty(n, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => de.value,
        set: (Q) => de.value = Q
      });
    }
  if (i)
    for (const ee in i)
      Qc(i[ee], n, r, ee);
  if (l) {
    const ee = fe(l) ? l.call(r) : l;
    Reflect.ownKeys(ee).forEach((ie) => {
      on(ie, ee[ie]);
    });
  }
  u && hi(u, e, "c");
  function re(ee, ie) {
    se(ie) ? ie.forEach((pe) => ee(pe.bind(r))) : ie && ee(ie.bind(r));
  }
  if (re(tv, f), re(Pr, d), re(rv, h), re(nv, m), re(Jd, b), re(Xd, D), re(iv, M), re(sv, G), re(ov, $), re(Gc, B), re(Wn, I), re(av, R), se(j))
    if (j.length) {
      const ee = e.exposed || (e.exposed = {});
      j.forEach((ie) => {
        Object.defineProperty(ee, ie, {
          get: () => r[ie],
          set: (pe) => r[ie] = pe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  A && e.render === pt && (e.render = A), X != null && (e.inheritAttrs = X), x && (e.components = x), H && (e.directives = H);
}
function fv(e, t, r = pt) {
  se(e) && (e = Fo(e));
  for (const n in e) {
    const a = e[n];
    let o;
    Ce(a) ? "default" in a ? o = zt(
      a.from || n,
      a.default,
      !0
    ) : o = zt(a.from || n) : o = zt(a), Se(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function hi(e, t, r) {
  gt(
    se(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Qc(e, t, r, n) {
  const a = n.includes(".") ? Hc(r, n) : () => r[n];
  if (Ye(e)) {
    const o = t[e];
    fe(o) && He(a, o);
  } else if (fe(e))
    He(a, e.bind(r));
  else if (Ce(e))
    if (se(e))
      e.forEach((o) => Qc(o, t, r, n));
    else {
      const o = fe(e.handler) ? e.handler.bind(r) : t[e.handler];
      fe(o) && He(a, o, e);
    }
}
function ws(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: a,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, i = o.get(t);
  let l;
  return i ? l = i : !a.length && !r && !n ? l = t : (l = {}, a.length && a.forEach(
    (c) => _a(l, c, s, !0)
  ), _a(l, t, s)), Ce(t) && o.set(t, l), l;
}
function _a(e, t, r, n = !1) {
  const { mixins: a, extends: o } = t;
  o && _a(e, o, r, !0), a && a.forEach(
    (s) => _a(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const i = dv[s] || r && r[s];
      e[s] = i ? i(e[s], t[s]) : t[s];
    }
  return e;
}
const dv = {
  data: gi,
  props: mi,
  emits: mi,
  // objects
  methods: An,
  computed: An,
  // lifecycle
  beforeCreate: et,
  created: et,
  beforeMount: et,
  mounted: et,
  beforeUpdate: et,
  updated: et,
  beforeDestroy: et,
  beforeUnmount: et,
  destroyed: et,
  unmounted: et,
  activated: et,
  deactivated: et,
  errorCaptured: et,
  serverPrefetch: et,
  // assets
  components: An,
  directives: An,
  // watch
  watch: pv,
  // provide / inject
  provide: gi,
  inject: vv
};
function gi(e, t) {
  return t ? e ? function() {
    return Be(
      fe(e) ? e.call(this, this) : e,
      fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function vv(e, t) {
  return An(Fo(e), Fo(t));
}
function Fo(e) {
  if (se(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function et(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function An(e, t) {
  return e ? Be(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function mi(e, t) {
  return e ? se(e) && se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Be(
    /* @__PURE__ */ Object.create(null),
    pi(e),
    pi(t ?? {})
  ) : t;
}
function pv(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const r = Be(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = et(e[n], t[n]);
  return r;
}
function Zc() {
  return {
    app: null,
    config: {
      isNativeTag: Uf,
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
let hv = 0;
function gv(e, t) {
  return function(n, a = null) {
    fe(n) || (n = Be({}, n)), a != null && !Ce(a) && (a = null);
    const o = Zc(), s = /* @__PURE__ */ new WeakSet();
    let i = !1;
    const l = o.app = {
      _uid: hv++,
      _component: n,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: Bv,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return s.has(c) || (c && fe(c.install) ? (s.add(c), c.install(l, ...u)) : fe(c) && (s.add(c), c(l, ...u))), l;
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), l;
      },
      component(c, u) {
        return u ? (o.components[c] = u, l) : o.components[c];
      },
      directive(c, u) {
        return u ? (o.directives[c] = u, l) : o.directives[c];
      },
      mount(c, u, f) {
        if (!i) {
          const d = le(n, a);
          return d.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), u && t ? t(d, c) : e(d, c, f), i = !0, l._container = c, c.__vue_app__ = l, Za(d.component) || d.component.proxy;
        }
      },
      unmount() {
        i && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return o.provides[c] = u, l;
      },
      runWithContext(c) {
        xa = l;
        try {
          return c();
        } finally {
          xa = null;
        }
      }
    };
    return l;
  };
}
let xa = null;
function on(e, t) {
  if (Ue) {
    let r = Ue.provides;
    const n = Ue.parent && Ue.parent.provides;
    n === r && (r = Ue.provides = Object.create(n)), r[e] = t;
  }
}
function zt(e, t, r = !1) {
  const n = Ue || Ke;
  if (n || xa) {
    const a = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : xa._context.provides;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return r && fe(t) ? t.call(n && n.proxy) : t;
  }
}
function mv(e, t, r, n = !1) {
  const a = {}, o = {};
  ba(o, Ga, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), qc(e, t, a, o);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  r ? e.props = n ? a : Ad(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function yv(e, t, r, n) {
  const {
    props: a,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, i = ge(a), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (Ua(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (l)
          if (he(o, d))
            h !== o[d] && (o[d] = h, c = !0);
          else {
            const m = ut(d);
            a[m] = Bo(
              l,
              i,
              m,
              h,
              e,
              !1
            );
          }
        else
          h !== o[d] && (o[d] = h, c = !0);
      }
    }
  } else {
    qc(e, t, a, o) && (c = !0);
    let u;
    for (const f in i)
      (!t || // for camelCase
      !he(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = vt(f)) === f || !he(t, u))) && (l ? r && // for camelCase
      (r[f] !== void 0 || // for kebab-case
      r[u] !== void 0) && (a[f] = Bo(
        l,
        i,
        f,
        void 0,
        e,
        !0
      )) : delete a[f]);
    if (o !== i)
      for (const f in o)
        (!t || !he(t, f)) && (delete o[f], c = !0);
  }
  c && Wt(e, "set", "$attrs");
}
function qc(e, t, r, n) {
  const [a, o] = e.propsOptions;
  let s = !1, i;
  if (t)
    for (let l in t) {
      if (ua(l))
        continue;
      const c = t[l];
      let u;
      a && he(a, u = ut(l)) ? !o || !o.includes(u) ? r[u] = c : (i || (i = {}))[u] = c : Ua(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = ge(r), c = i || Oe;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      r[f] = Bo(
        a,
        l,
        f,
        c[f],
        e,
        !he(c, f)
      );
    }
  }
  return s;
}
function Bo(e, t, r, n, a, o) {
  const s = e[r];
  if (s != null) {
    const i = he(s, "default");
    if (i && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && fe(l)) {
        const { propsDefaults: c } = a;
        r in c ? n = c[r] : (Zr(a), n = c[r] = l.call(
          null,
          t
        ), Mr());
      } else
        n = l;
    }
    s[
      0
      /* shouldCast */
    ] && (o && !i ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === vt(r)) && (n = !0));
  }
  return n;
}
function Jc(e, t, r = !1) {
  const n = t.propsCache, a = n.get(e);
  if (a)
    return a;
  const o = e.props, s = {}, i = [];
  let l = !1;
  if (!fe(e)) {
    const u = (f) => {
      l = !0;
      const [d, h] = Jc(f, t, !0);
      Be(s, d), h && i.push(...h);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return Ce(e) && n.set(e, Ur), Ur;
  if (se(o))
    for (let u = 0; u < o.length; u++) {
      const f = ut(o[u]);
      yi(f) && (s[f] = Oe);
    }
  else if (o)
    for (const u in o) {
      const f = ut(u);
      if (yi(f)) {
        const d = o[u], h = s[f] = se(d) || fe(d) ? { type: d } : Be({}, d);
        if (h) {
          const m = Di(Boolean, h.type), b = Di(String, h.type);
          h[
            0
            /* shouldCast */
          ] = m > -1, h[
            1
            /* shouldCastTrue */
          ] = b < 0 || m < b, (m > -1 || he(h, "default")) && i.push(f);
        }
      }
    }
  const c = [s, i];
  return Ce(e) && n.set(e, c), c;
}
function yi(e) {
  return e[0] !== "$";
}
function bi(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function wi(e, t) {
  return bi(e) === bi(t);
}
function Di(e, t) {
  return se(t) ? t.findIndex((r) => wi(r, e)) : fe(t) && wi(t, e) ? 0 : -1;
}
const Xc = (e) => e[0] === "_" || e === "$stable", Ds = (e) => se(e) ? e.map(Pt) : [Pt(e)], bv = (e, t, r) => {
  if (t._n)
    return t;
  const n = Ee((...a) => Ds(t(...a)), r);
  return n._c = !1, n;
}, eu = (e, t, r) => {
  const n = e._ctx;
  for (const a in e) {
    if (Xc(a))
      continue;
    const o = e[a];
    if (fe(o))
      t[a] = bv(a, o, n);
    else if (o != null) {
      const s = Ds(o);
      t[a] = () => s;
    }
  }
}, tu = (e, t) => {
  const r = Ds(t);
  e.slots.default = () => r;
}, wv = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (e.slots = ge(t), ba(t, "_", r)) : eu(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && tu(e, t);
  ba(e.slots, Ga, 1);
}, Dv = (e, t, r) => {
  const { vnode: n, slots: a } = e;
  let o = !0, s = Oe;
  if (n.shapeFlag & 32) {
    const i = t._;
    i ? r && i === 1 ? o = !1 : (Be(a, t), !r && i === 1 && delete a._) : (o = !t.$stable, eu(t, a)), s = t;
  } else
    t && (tu(e, t), s = { default: 1 });
  if (o)
    for (const i in a)
      !Xc(i) && s[i] == null && delete a[i];
};
function jo(e, t, r, n, a = !1) {
  if (se(e)) {
    e.forEach(
      (d, h) => jo(
        d,
        t && (se(t) ? t[h] : t),
        r,
        n,
        a
      )
    );
    return;
  }
  if (In(n) && !a)
    return;
  const o = n.shapeFlag & 4 ? Za(n.component) || n.component.proxy : n.el, s = a ? null : o, { i, r: l } = e, c = t && t.r, u = i.refs === Oe ? i.refs = {} : i.refs, f = i.setupState;
  if (c != null && c !== l && (Ye(c) ? (u[c] = null, he(f, c) && (f[c] = null)) : Se(c) && (c.value = null)), fe(l))
    lr(l, i, 12, [s, u]);
  else {
    const d = Ye(l), h = Se(l);
    if (d || h) {
      const m = () => {
        if (e.f) {
          const b = d ? he(f, l) ? f[l] : u[l] : l.value;
          a ? se(b) && ss(b, o) : se(b) ? b.includes(o) || b.push(o) : d ? (u[l] = [o], he(f, l) && (f[l] = u[l])) : (l.value = [o], e.k && (u[e.k] = l.value));
        } else
          d ? (u[l] = s, he(f, l) && (f[l] = s)) : h && (l.value = s, e.k && (u[e.k] = s));
      };
      s ? (m.id = -1, at(m, r)) : m();
    }
  }
}
const at = zd;
function _v(e) {
  return xv(e);
}
function xv(e, t) {
  const r = dc();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: o,
    createElement: s,
    createText: i,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: d,
    setScopeId: h = pt,
    insertStaticContent: m
  } = e, b = (v, g, w, k = null, C = null, N = null, U = void 0, E = null, L = !!g.dynamicChildren) => {
    if (v === g)
      return;
    v && !Dr(v, g) && (k = Me(v), Q(v, C, N, !0), v = null), g.patchFlag === -2 && (L = !1, g.dynamicChildren = null);
    const { type: T, ref: W, shapeFlag: J } = g;
    switch (T) {
      case Ka:
        D(v, g, w, k);
        break;
      case yt:
        y(v, g, w, k);
        break;
      case ho:
        v == null && B(g, w, k, U);
        break;
      case we:
        x(
          v,
          g,
          w,
          k,
          C,
          N,
          U,
          E,
          L
        );
        break;
      default:
        J & 1 ? A(
          v,
          g,
          w,
          k,
          C,
          N,
          U,
          E,
          L
        ) : J & 6 ? H(
          v,
          g,
          w,
          k,
          C,
          N,
          U,
          E,
          L
        ) : (J & 64 || J & 128) && T.process(
          v,
          g,
          w,
          k,
          C,
          N,
          U,
          E,
          L,
          Le
        );
    }
    W != null && C && jo(W, v && v.ref, N, g || v, !g);
  }, D = (v, g, w, k) => {
    if (v == null)
      n(
        g.el = i(g.children),
        w,
        k
      );
    else {
      const C = g.el = v.el;
      g.children !== v.children && c(C, g.children);
    }
  }, y = (v, g, w, k) => {
    v == null ? n(
      g.el = l(g.children || ""),
      w,
      k
    ) : g.el = v.el;
  }, B = (v, g, w, k) => {
    [v.el, v.anchor] = m(
      v.children,
      g,
      w,
      k,
      v.el,
      v.anchor
    );
  }, F = ({ el: v, anchor: g }, w, k) => {
    let C;
    for (; v && v !== g; )
      C = d(v), n(v, w, k), v = C;
    n(g, w, k);
  }, I = ({ el: v, anchor: g }) => {
    let w;
    for (; v && v !== g; )
      w = d(v), a(v), v = w;
    a(g);
  }, A = (v, g, w, k, C, N, U, E, L) => {
    g.type === "svg" ? U = "svg" : g.type === "math" && (U = "mathml"), v == null ? G(
      g,
      w,
      k,
      C,
      N,
      U,
      E,
      L
    ) : R(
      v,
      g,
      C,
      N,
      U,
      E,
      L
    );
  }, G = (v, g, w, k, C, N, U, E) => {
    let L, T;
    const { props: W, shapeFlag: J, transition: Z, dirs: oe } = v;
    if (L = v.el = s(
      v.type,
      N,
      W && W.is,
      W
    ), J & 8 ? u(L, v.children) : J & 16 && M(
      v.children,
      L,
      null,
      k,
      C,
      po(v, N),
      U,
      E
    ), oe && hr(v, null, k, "created"), $(L, v, v.scopeId, U, k), W) {
      for (const ve in W)
        ve !== "value" && !ua(ve) && o(
          L,
          ve,
          null,
          W[ve],
          N,
          v.children,
          k,
          C,
          _e
        );
      "value" in W && o(L, "value", null, W.value, N), (T = W.onVnodeBeforeMount) && $t(T, k, v);
    }
    oe && hr(v, null, k, "beforeMount");
    const ce = Av(C, Z);
    ce && Z.beforeEnter(L), n(L, g, w), ((T = W && W.onVnodeMounted) || ce || oe) && at(() => {
      T && $t(T, k, v), ce && Z.enter(L), oe && hr(v, null, k, "mounted");
    }, C);
  }, $ = (v, g, w, k, C) => {
    if (w && h(v, w), k)
      for (let N = 0; N < k.length; N++)
        h(v, k[N]);
    if (C) {
      let N = C.subTree;
      if (g === N) {
        const U = C.vnode;
        $(
          v,
          U,
          U.scopeId,
          U.slotScopeIds,
          C.parent
        );
      }
    }
  }, M = (v, g, w, k, C, N, U, E, L = 0) => {
    for (let T = L; T < v.length; T++) {
      const W = v[T] = E ? nr(v[T]) : Pt(v[T]);
      b(
        null,
        W,
        g,
        w,
        k,
        C,
        N,
        U,
        E
      );
    }
  }, R = (v, g, w, k, C, N, U) => {
    const E = g.el = v.el;
    let { patchFlag: L, dynamicChildren: T, dirs: W } = g;
    L |= v.patchFlag & 16;
    const J = v.props || Oe, Z = g.props || Oe;
    let oe;
    if (w && gr(w, !1), (oe = Z.onVnodeBeforeUpdate) && $t(oe, w, g, v), W && hr(g, v, w, "beforeUpdate"), w && gr(w, !0), T ? j(
      v.dynamicChildren,
      T,
      E,
      w,
      k,
      po(g, C),
      N
    ) : U || ie(
      v,
      g,
      E,
      null,
      w,
      k,
      po(g, C),
      N,
      !1
    ), L > 0) {
      if (L & 16)
        X(
          E,
          g,
          J,
          Z,
          w,
          k,
          C
        );
      else if (L & 2 && J.class !== Z.class && o(E, "class", null, Z.class, C), L & 4 && o(E, "style", J.style, Z.style, C), L & 8) {
        const ce = g.dynamicProps;
        for (let ve = 0; ve < ce.length; ve++) {
          const ye = ce[ve], Pe = J[ye], ze = Z[ye];
          (ze !== Pe || ye === "value") && o(
            E,
            ye,
            Pe,
            ze,
            C,
            v.children,
            w,
            k,
            _e
          );
        }
      }
      L & 1 && v.children !== g.children && u(E, g.children);
    } else
      !U && T == null && X(
        E,
        g,
        J,
        Z,
        w,
        k,
        C
      );
    ((oe = Z.onVnodeUpdated) || W) && at(() => {
      oe && $t(oe, w, g, v), W && hr(g, v, w, "updated");
    }, k);
  }, j = (v, g, w, k, C, N, U) => {
    for (let E = 0; E < g.length; E++) {
      const L = v[E], T = g[E], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Dr(L, T) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 70) ? f(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      b(
        L,
        T,
        W,
        null,
        k,
        C,
        N,
        U,
        !0
      );
    }
  }, X = (v, g, w, k, C, N, U) => {
    if (w !== k) {
      if (w !== Oe)
        for (const E in w)
          !ua(E) && !(E in k) && o(
            v,
            E,
            w[E],
            null,
            U,
            g.children,
            C,
            N,
            _e
          );
      for (const E in k) {
        if (ua(E))
          continue;
        const L = k[E], T = w[E];
        L !== T && E !== "value" && o(
          v,
          E,
          T,
          L,
          U,
          g.children,
          C,
          N,
          _e
        );
      }
      "value" in k && o(v, "value", w.value, k.value, U);
    }
  }, x = (v, g, w, k, C, N, U, E, L) => {
    const T = g.el = v ? v.el : i(""), W = g.anchor = v ? v.anchor : i("");
    let { patchFlag: J, dynamicChildren: Z, slotScopeIds: oe } = g;
    oe && (E = E ? E.concat(oe) : oe), v == null ? (n(T, w, k), n(W, w, k), M(
      g.children,
      w,
      W,
      C,
      N,
      U,
      E,
      L
    )) : J > 0 && J & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren ? (j(
      v.dynamicChildren,
      Z,
      w,
      C,
      N,
      U,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || C && g === C.subTree) && ru(
      v,
      g,
      !0
      /* shallow */
    )) : ie(
      v,
      g,
      w,
      W,
      C,
      N,
      U,
      E,
      L
    );
  }, H = (v, g, w, k, C, N, U, E, L) => {
    g.slotScopeIds = E, v == null ? g.shapeFlag & 512 ? C.ctx.activate(
      g,
      w,
      k,
      U,
      L
    ) : ae(
      g,
      w,
      k,
      C,
      N,
      U,
      L
    ) : V(v, g, L);
  }, ae = (v, g, w, k, C, N, U) => {
    const E = v.component = Tv(
      v,
      k,
      C
    );
    if (Wa(v) && (E.ctx.renderer = Le), Sv(E), E.asyncDep) {
      if (C && C.registerDep(E, re), !v.el) {
        const L = E.subTree = le(yt);
        y(null, L, g, w);
      }
    } else
      re(
        E,
        v,
        g,
        w,
        C,
        N,
        U
      );
  }, V = (v, g, w) => {
    const k = g.component = v.component;
    if (Bd(v, g, w))
      if (k.asyncDep && !k.asyncResolved) {
        ee(k, g, w);
        return;
      } else
        k.next = g, Ed(k.update), k.effect.dirty = !0, k.update();
    else
      g.el = v.el, k.vnode = g;
  }, re = (v, g, w, k, C, N, U) => {
    const E = () => {
      if (v.isMounted) {
        let { next: W, bu: J, u: Z, parent: oe, vnode: ce } = v;
        {
          const Ot = nu(v);
          if (Ot) {
            W && (W.el = ce.el, ee(v, W, U)), Ot.asyncDep.then(() => {
              v.isUnmounted || E();
            });
            return;
          }
        }
        let ve = W, ye;
        gr(v, !1), W ? (W.el = ce.el, ee(v, W, U)) : W = ce, J && lo(J), (ye = W.props && W.props.onVnodeBeforeUpdate) && $t(ye, oe, W, ce), gr(v, !0);
        const Pe = uo(v), ze = v.subTree;
        v.subTree = Pe, b(
          ze,
          Pe,
          // parent may have changed if it's in a teleport
          f(ze.el),
          // anchor may have changed if it's in a fragment
          Me(ze),
          v,
          C,
          N
        ), W.el = Pe.el, ve === null && jd(v, Pe.el), Z && at(Z, C), (ye = W.props && W.props.onVnodeUpdated) && at(
          () => $t(ye, oe, W, ce),
          C
        );
      } else {
        let W;
        const { el: J, props: Z } = g, { bm: oe, m: ce, parent: ve } = v, ye = In(g);
        if (gr(v, !1), oe && lo(oe), !ye && (W = Z && Z.onVnodeBeforeMount) && $t(W, ve, g), gr(v, !0), J && qe) {
          const Pe = () => {
            v.subTree = uo(v), qe(
              J,
              v.subTree,
              v,
              C,
              null
            );
          };
          ye ? g.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !v.isUnmounted && Pe()
          ) : Pe();
        } else {
          const Pe = v.subTree = uo(v);
          b(
            null,
            Pe,
            w,
            k,
            v,
            C,
            N
          ), g.el = Pe.el;
        }
        if (ce && at(ce, C), !ye && (W = Z && Z.onVnodeMounted)) {
          const Pe = g;
          at(
            () => $t(W, ve, Pe),
            C
          );
        }
        (g.shapeFlag & 256 || ve && In(ve.vnode) && ve.vnode.shapeFlag & 256) && v.a && at(v.a, C), v.isMounted = !0, g = w = k = null;
      }
    }, L = v.effect = new ls(
      E,
      pt,
      () => gs(T),
      v.scope
      // track it in component's effect scope
    ), T = v.update = () => {
      L.dirty && L.run();
    };
    T.id = v.uid, gr(v, !0), T();
  }, ee = (v, g, w) => {
    g.component = v;
    const k = v.vnode.props;
    v.vnode = g, v.next = null, yv(v, g.props, k, w), Dv(v, g.children, w), $r(), ui(v), Tr();
  }, ie = (v, g, w, k, C, N, U, E, L = !1) => {
    const T = v && v.children, W = v ? v.shapeFlag : 0, J = g.children, { patchFlag: Z, shapeFlag: oe } = g;
    if (Z > 0) {
      if (Z & 128) {
        Y(
          T,
          J,
          w,
          k,
          C,
          N,
          U,
          E,
          L
        );
        return;
      } else if (Z & 256) {
        pe(
          T,
          J,
          w,
          k,
          C,
          N,
          U,
          E,
          L
        );
        return;
      }
    }
    oe & 8 ? (W & 16 && _e(T, C, N), J !== T && u(w, J)) : W & 16 ? oe & 16 ? Y(
      T,
      J,
      w,
      k,
      C,
      N,
      U,
      E,
      L
    ) : _e(T, C, N, !0) : (W & 8 && u(w, ""), oe & 16 && M(
      J,
      w,
      k,
      C,
      N,
      U,
      E,
      L
    ));
  }, pe = (v, g, w, k, C, N, U, E, L) => {
    v = v || Ur, g = g || Ur;
    const T = v.length, W = g.length, J = Math.min(T, W);
    let Z;
    for (Z = 0; Z < J; Z++) {
      const oe = g[Z] = L ? nr(g[Z]) : Pt(g[Z]);
      b(
        v[Z],
        oe,
        w,
        null,
        C,
        N,
        U,
        E,
        L
      );
    }
    T > W ? _e(
      v,
      C,
      N,
      !0,
      !1,
      J
    ) : M(
      g,
      w,
      k,
      C,
      N,
      U,
      E,
      L,
      J
    );
  }, Y = (v, g, w, k, C, N, U, E, L) => {
    let T = 0;
    const W = g.length;
    let J = v.length - 1, Z = W - 1;
    for (; T <= J && T <= Z; ) {
      const oe = v[T], ce = g[T] = L ? nr(g[T]) : Pt(g[T]);
      if (Dr(oe, ce))
        b(
          oe,
          ce,
          w,
          null,
          C,
          N,
          U,
          E,
          L
        );
      else
        break;
      T++;
    }
    for (; T <= J && T <= Z; ) {
      const oe = v[J], ce = g[Z] = L ? nr(g[Z]) : Pt(g[Z]);
      if (Dr(oe, ce))
        b(
          oe,
          ce,
          w,
          null,
          C,
          N,
          U,
          E,
          L
        );
      else
        break;
      J--, Z--;
    }
    if (T > J) {
      if (T <= Z) {
        const oe = Z + 1, ce = oe < W ? g[oe].el : k;
        for (; T <= Z; )
          b(
            null,
            g[T] = L ? nr(g[T]) : Pt(g[T]),
            w,
            ce,
            C,
            N,
            U,
            E,
            L
          ), T++;
      }
    } else if (T > Z)
      for (; T <= J; )
        Q(v[T], C, N, !0), T++;
    else {
      const oe = T, ce = T, ve = /* @__PURE__ */ new Map();
      for (T = ce; T <= Z; T++) {
        const je = g[T] = L ? nr(g[T]) : Pt(g[T]);
        je.key != null && ve.set(je.key, T);
      }
      let ye, Pe = 0;
      const ze = Z - ce + 1;
      let Ot = !1, pr = 0;
      const It = new Array(ze);
      for (T = 0; T < ze; T++)
        It[T] = 0;
      for (T = oe; T <= J; T++) {
        const je = v[T];
        if (Pe >= ze) {
          Q(je, C, N, !0);
          continue;
        }
        let Je;
        if (je.key != null)
          Je = ve.get(je.key);
        else
          for (ye = ce; ye <= Z; ye++)
            if (It[ye - ce] === 0 && Dr(je, g[ye])) {
              Je = ye;
              break;
            }
        Je === void 0 ? Q(je, C, N, !0) : (It[Je - ce] = T + 1, Je >= pr ? pr = Je : Ot = !0, b(
          je,
          g[Je],
          w,
          null,
          C,
          N,
          U,
          E,
          L
        ), Pe++);
      }
      const Lr = Ot ? Cv(It) : Ur;
      for (ye = Lr.length - 1, T = ze - 1; T >= 0; T--) {
        const je = ce + T, Je = g[je], S = je + 1 < W ? g[je + 1].el : k;
        It[T] === 0 ? b(
          null,
          Je,
          w,
          S,
          C,
          N,
          U,
          E,
          L
        ) : Ot && (ye < 0 || T !== Lr[ye] ? de(Je, w, S, 2) : ye--);
      }
    }
  }, de = (v, g, w, k, C = null) => {
    const { el: N, type: U, transition: E, children: L, shapeFlag: T } = v;
    if (T & 6) {
      de(v.component.subTree, g, w, k);
      return;
    }
    if (T & 128) {
      v.suspense.move(g, w, k);
      return;
    }
    if (T & 64) {
      U.move(v, g, w, Le);
      return;
    }
    if (U === we) {
      n(N, g, w);
      for (let J = 0; J < L.length; J++)
        de(L[J], g, w, k);
      n(v.anchor, g, w);
      return;
    }
    if (U === ho) {
      F(v, g, w);
      return;
    }
    if (k !== 2 && T & 1 && E)
      if (k === 0)
        E.beforeEnter(N), n(N, g, w), at(() => E.enter(N), C);
      else {
        const { leave: J, delayLeave: Z, afterLeave: oe } = E, ce = () => n(N, g, w), ve = () => {
          J(N, () => {
            ce(), oe && oe();
          });
        };
        Z ? Z(N, ce, ve) : ve();
      }
    else
      n(N, g, w);
  }, Q = (v, g, w, k = !1, C = !1) => {
    const {
      type: N,
      props: U,
      ref: E,
      children: L,
      dynamicChildren: T,
      shapeFlag: W,
      patchFlag: J,
      dirs: Z
    } = v;
    if (E != null && jo(E, null, w, v, !0), W & 256) {
      g.ctx.deactivate(v);
      return;
    }
    const oe = W & 1 && Z, ce = !In(v);
    let ve;
    if (ce && (ve = U && U.onVnodeBeforeUnmount) && $t(ve, g, v), W & 6)
      Te(v.component, w, k);
    else {
      if (W & 128) {
        v.suspense.unmount(w, k);
        return;
      }
      oe && hr(v, null, g, "beforeUnmount"), W & 64 ? v.type.remove(
        v,
        g,
        w,
        C,
        Le,
        k
      ) : T && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== we || J > 0 && J & 64) ? _e(
        T,
        g,
        w,
        !1,
        !0
      ) : (N === we && J & 384 || !C && W & 16) && _e(L, g, w), k && Ie(v);
    }
    (ce && (ve = U && U.onVnodeUnmounted) || oe) && at(() => {
      ve && $t(ve, g, v), oe && hr(v, null, g, "unmounted");
    }, w);
  }, Ie = (v) => {
    const { type: g, el: w, anchor: k, transition: C } = v;
    if (g === we) {
      me(w, k);
      return;
    }
    if (g === ho) {
      I(v);
      return;
    }
    const N = () => {
      a(w), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (v.shapeFlag & 1 && C && !C.persisted) {
      const { leave: U, delayLeave: E } = C, L = () => U(w, N);
      E ? E(v.el, N, L) : L();
    } else
      N();
  }, me = (v, g) => {
    let w;
    for (; v !== g; )
      w = d(v), a(v), v = w;
    a(g);
  }, Te = (v, g, w) => {
    const { bum: k, scope: C, update: N, subTree: U, um: E } = v;
    k && lo(k), C.stop(), N && (N.active = !1, Q(U, v, g, w)), E && at(E, g), at(() => {
      v.isUnmounted = !0;
    }, g), g && g.pendingBranch && !g.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve());
  }, _e = (v, g, w, k = !1, C = !1, N = 0) => {
    for (let U = N; U < v.length; U++)
      Q(v[U], g, w, k, C);
  }, Me = (v) => v.shapeFlag & 6 ? Me(v.component.subTree) : v.shapeFlag & 128 ? v.suspense.next() : d(v.anchor || v.el), Ne = (v, g, w) => {
    v == null ? g._vnode && Q(g._vnode, null, null, !0) : b(
      g._vnode || null,
      v,
      g,
      null,
      null,
      null,
      w
    ), ui(), Yc(), g._vnode = v;
  }, Le = {
    p: b,
    um: Q,
    m: de,
    r: Ie,
    mt: ae,
    mc: M,
    pc: ie,
    pbc: j,
    n: Me,
    o: e
  };
  let lt, qe;
  return t && ([lt, qe] = t(
    Le
  )), {
    render: Ne,
    hydrate: lt,
    createApp: gv(Ne, lt)
  };
}
function po({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function gr({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r;
}
function Av(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ru(e, t, r = !1) {
  const n = e.children, a = t.children;
  if (se(n) && se(a))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let i = a[o];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = a[o] = nr(a[o]), i.el = s.el), r || ru(s, i)), i.type === Ka && (i.el = s.el);
    }
}
function Cv(e) {
  const t = e.slice(), r = [0];
  let n, a, o, s, i;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (a = r[r.length - 1], e[a] < c) {
        t[n] = a, r.push(n);
        continue;
      }
      for (o = 0, s = r.length - 1; o < s; )
        i = o + s >> 1, e[r[i]] < c ? o = i + 1 : s = i;
      c < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, s = r[o - 1]; o-- > 0; )
    r[o] = s, s = t[s];
  return r;
}
function nu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : nu(t);
}
const Mv = (e) => e.__isTeleport, we = Symbol.for("v-fgt"), Ka = Symbol.for("v-txt"), yt = Symbol.for("v-cmt"), ho = Symbol.for("v-stc"), Tn = [];
let At = null;
function K(e = !1) {
  Tn.push(At = e ? null : []);
}
function kv() {
  Tn.pop(), At = Tn[Tn.length - 1] || null;
}
let Ln = 1;
function _i(e) {
  Ln += e;
}
function au(e) {
  return e.dynamicChildren = Ln > 0 ? At || Ur : null, kv(), Ln > 0 && At && At.push(e), e;
}
function ne(e, t, r, n, a, o) {
  return au(
    q(
      e,
      t,
      r,
      n,
      a,
      o,
      !0
    )
  );
}
function Ge(e, t, r, n, a) {
  return au(
    le(
      e,
      t,
      r,
      n,
      a,
      !0
    )
  );
}
function Aa(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Dr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ga = "__vInternal", ou = ({ key: e }) => e ?? null, va = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Ye(e) || Se(e) || fe(e) ? { i: Ke, r: e, k: t, f: !!r } : e : null);
function q(e, t = null, r = null, n = 0, a = null, o = e === we ? 0 : 1, s = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ou(t),
    ref: t && va(t),
    scopeId: Rc,
    slotScopeIds: null,
    children: r,
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
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Ke
  };
  return i ? (_s(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Ye(r) ? 8 : 16), Ln > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  At && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && At.push(l), l;
}
const le = Ov;
function Ov(e, t = null, r = null, n = 0, a = null, o = !1) {
  if ((!e || e === Fc) && (e = yt), Aa(e)) {
    const i = ur(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && _s(i, r), Ln > 0 && !o && At && (i.shapeFlag & 6 ? At[At.indexOf(e)] = i : At.push(i)), i.patchFlag |= -2, i;
  }
  if (Rv(e) && (e = e.__vccOpts), t) {
    t = Ca(t);
    let { class: i, style: l } = t;
    i && !Ye(i) && (t.class = Ae(i)), Ce(l) && (kc(l) && !se(l) && (l = Be({}, l)), t.style = Ut(l));
  }
  const s = Ye(e) ? 1 : Wd(e) ? 128 : Mv(e) ? 64 : Ce(e) ? 4 : fe(e) ? 2 : 0;
  return q(
    e,
    t,
    r,
    n,
    a,
    s,
    o,
    !0
  );
}
function Ca(e) {
  return e ? kc(e) || Ga in e ? Be({}, e) : e : null;
}
function ur(e, t, r = !1) {
  const { props: n, ref: a, patchFlag: o, children: s } = e, i = t ? Sr(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && ou(i),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && a ? se(a) ? a.concat(va(t)) : [a, va(t)] : va(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && ur(e.ssContent),
    ssFallback: e.ssFallback && ur(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Va(e = " ", t = 0) {
  return le(Ka, null, e, t);
}
function Fe(e = "", t = !1) {
  return t ? (K(), Ge(yt, null, e)) : le(yt, null, e);
}
function Pt(e) {
  return e == null || typeof e == "boolean" ? le(yt) : se(e) ? le(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? nr(e) : le(Ka, null, String(e));
}
function nr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ur(e);
}
function _s(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (se(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), _s(e, a()), a._c && (a._d = !0));
      return;
    } else {
      r = 32;
      const a = t._;
      !a && !(Ga in t) ? t._ctx = Ke : a === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    fe(t) ? (t = { default: t, _ctx: Ke }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Va(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Sr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = Ae([t.class, n.class]));
      else if (a === "style")
        t.style = Ut([t.style, n.style]);
      else if (La(a)) {
        const o = t[a], s = n[a];
        s && o !== s && !(se(o) && o.includes(s)) && (t[a] = o ? [].concat(o, s) : s);
      } else
        a !== "" && (t[a] = n[a]);
  }
  return t;
}
function $t(e, t, r, n = null) {
  gt(e, t, 7, [
    r,
    n
  ]);
}
const Iv = Zc();
let $v = 0;
function Tv(e, t, r) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || Iv, o = {
    uid: $v++,
    vnode: e,
    type: n,
    parent: t,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new td(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Jc(n, a),
    emitsOptions: Lc(n, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Oe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Oe,
    data: Oe,
    props: Oe,
    attrs: Oe,
    slots: Oe,
    refs: Oe,
    setupState: Oe,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ld.bind(null, o), e.ce && e.ce(o), o;
}
let Ue = null;
const Pv = () => Ue || Ke;
let xs, Ho;
{
  const e = dc(), t = (r, n) => {
    let a;
    return (a = e[r]) || (a = e[r] = []), a.push(n), (o) => {
      a.length > 1 ? a.forEach((s) => s(o)) : a[0](o);
    };
  };
  xs = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => Ue = r
  ), Ho = t(
    "__VUE_SSR_SETTERS__",
    (r) => Qa = r
  );
}
const Zr = (e) => {
  xs(e), e.scope.on();
}, Mr = () => {
  Ue && Ue.scope.off(), xs(null);
};
function su(e) {
  return e.vnode.shapeFlag & 4;
}
let Qa = !1;
function Sv(e, t = !1) {
  t && Ho(t);
  const { props: r, children: n } = e.vnode, a = su(e);
  mv(e, r, a, t), wv(e, n);
  const o = a ? Ev(e, t) : void 0;
  return t && Ho(!1), o;
}
function Ev(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Oc(new Proxy(e.ctx, cv));
  const { setup: n } = r;
  if (n) {
    const a = e.setupContext = n.length > 1 ? Nv(e) : null;
    Zr(e), $r();
    const o = lr(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    );
    if (Tr(), Mr(), cc(o)) {
      if (o.then(Mr, Mr), t)
        return o.then((s) => {
          xi(e, s, t);
        }).catch((s) => {
          Ha(s, e, 0);
        });
      e.asyncDep = o;
    } else
      xi(e, o, t);
  } else
    iu(e, t);
}
function xi(e, t, r) {
  fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ce(t) && (e.setupState = Tc(t)), iu(e, r);
}
let Ai;
function iu(e, t, r) {
  const n = e.type;
  if (!e.render) {
    if (!t && Ai && !n.render) {
      const a = n.template || ws(e).template;
      if (a) {
        const { isCustomElement: o, compilerOptions: s } = e.appContext.config, { delimiters: i, compilerOptions: l } = n, c = Be(
          Be(
            {
              isCustomElement: o,
              delimiters: i
            },
            s
          ),
          l
        );
        n.render = Ai(a, c);
      }
    }
    e.render = n.render || pt;
  }
  {
    Zr(e), $r();
    try {
      uv(e);
    } finally {
      Tr(), Mr();
    }
  }
}
function Yv(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, r) {
        return it(e, "get", "$attrs"), t[r];
      }
    }
  ));
}
function Nv(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    get attrs() {
      return Yv(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Za(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Tc(Oc(e.exposed)), {
      get(t, r) {
        if (r in t)
          return t[r];
        if (r in $n)
          return $n[r](e);
      },
      has(t, r) {
        return r in t || r in $n;
      }
    }));
}
function Lv(e, t = !0) {
  return fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Rv(e) {
  return fe(e) && "__vccOpts" in e;
}
const _ = (e, t) => Cd(e, t, Qa);
function Fv(e, t, r) {
  const n = arguments.length;
  return n === 2 ? Ce(t) && !se(t) ? Aa(t) ? le(e, null, [t]) : le(e, t) : le(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Aa(r) && (r = [r]), le(e, t, r));
}
const Bv = "3.4.3", jv = "http://www.w3.org/2000/svg", Hv = "http://www.w3.org/1998/Math/MathML", ar = typeof document < "u" ? document : null, Ci = ar && /* @__PURE__ */ ar.createElement("template"), Uv = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const a = t === "svg" ? ar.createElementNS(jv, e) : t === "mathml" ? ar.createElementNS(Hv, e) : ar.createElement(e, r ? { is: r } : void 0);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => ar.createTextNode(e),
  createComment: (e) => ar.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ar.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, a, o) {
    const s = r ? r.previousSibling : t.lastChild;
    if (a && (a === o || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), r), !(a === o || !(a = a.nextSibling)); )
        ;
    else {
      Ci.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const i = Ci.content;
      if (n === "svg" || n === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
      }
      t.insertBefore(i, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Xt = "transition", mn = "animation", Rn = Symbol("_vtc"), qa = (e, { slots: t }) => Fv(qd, Wv(e), t);
qa.displayName = "Transition";
const lu = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
qa.props = /* @__PURE__ */ Be(
  {},
  Uc,
  lu
);
const mr = (e, t = []) => {
  se(e) ? e.forEach((r) => r(...t)) : e && e(...t);
}, Mi = (e) => e ? se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Wv(e) {
  const t = {};
  for (const x in e)
    x in lu || (t[x] = e[x]);
  if (e.css === !1)
    return t;
  const {
    name: r = "v",
    type: n,
    duration: a,
    enterFromClass: o = `${r}-enter-from`,
    enterActiveClass: s = `${r}-enter-active`,
    enterToClass: i = `${r}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: c = s,
    appearToClass: u = i,
    leaveFromClass: f = `${r}-leave-from`,
    leaveActiveClass: d = `${r}-leave-active`,
    leaveToClass: h = `${r}-leave-to`
  } = e, m = zv(a), b = m && m[0], D = m && m[1], {
    onBeforeEnter: y,
    onEnter: B,
    onEnterCancelled: F,
    onLeave: I,
    onLeaveCancelled: A,
    onBeforeAppear: G = y,
    onAppear: $ = B,
    onAppearCancelled: M = F
  } = t, R = (x, H, ae) => {
    yr(x, H ? u : i), yr(x, H ? c : s), ae && ae();
  }, j = (x, H) => {
    x._isLeaving = !1, yr(x, f), yr(x, h), yr(x, d), H && H();
  }, X = (x) => (H, ae) => {
    const V = x ? $ : B, re = () => R(H, x, ae);
    mr(V, [H, re]), ki(() => {
      yr(H, x ? l : o), er(H, x ? u : i), Mi(V) || Oi(H, n, b, re);
    });
  };
  return Be(t, {
    onBeforeEnter(x) {
      mr(y, [x]), er(x, o), er(x, s);
    },
    onBeforeAppear(x) {
      mr(G, [x]), er(x, l), er(x, c);
    },
    onEnter: X(!1),
    onAppear: X(!0),
    onLeave(x, H) {
      x._isLeaving = !0;
      const ae = () => j(x, H);
      er(x, f), Vv(), er(x, d), ki(() => {
        x._isLeaving && (yr(x, f), er(x, h), Mi(I) || Oi(x, n, D, ae));
      }), mr(I, [x, ae]);
    },
    onEnterCancelled(x) {
      R(x, !1), mr(F, [x]);
    },
    onAppearCancelled(x) {
      R(x, !0), mr(M, [x]);
    },
    onLeaveCancelled(x) {
      j(x), mr(A, [x]);
    }
  });
}
function zv(e) {
  if (e == null)
    return null;
  if (Ce(e))
    return [go(e.enter), go(e.leave)];
  {
    const t = go(e);
    return [t, t];
  }
}
function go(e) {
  return Io(e);
}
function er(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.add(r)), (e[Rn] || (e[Rn] = /* @__PURE__ */ new Set())).add(t);
}
function yr(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const r = e[Rn];
  r && (r.delete(t), r.size || (e[Rn] = void 0));
}
function ki(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Kv = 0;
function Oi(e, t, r, n) {
  const a = e._endId = ++Kv, o = () => {
    a === e._endId && n();
  };
  if (r)
    return setTimeout(o, r);
  const { type: s, timeout: i, propCount: l } = Gv(e, t);
  if (!s)
    return n();
  const c = s + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(c, d), o();
  }, d = (h) => {
    h.target === e && ++u >= l && f();
  };
  setTimeout(() => {
    u < l && f();
  }, i + 1), e.addEventListener(c, d);
}
function Gv(e, t) {
  const r = window.getComputedStyle(e), n = (m) => (r[m] || "").split(", "), a = n(`${Xt}Delay`), o = n(`${Xt}Duration`), s = Ii(a, o), i = n(`${mn}Delay`), l = n(`${mn}Duration`), c = Ii(i, l);
  let u = null, f = 0, d = 0;
  t === Xt ? s > 0 && (u = Xt, f = s, d = o.length) : t === mn ? c > 0 && (u = mn, f = c, d = l.length) : (f = Math.max(s, c), u = f > 0 ? s > c ? Xt : mn : null, d = u ? u === Xt ? o.length : l.length : 0);
  const h = u === Xt && /\b(transform|all)(,|$)/.test(
    n(`${Xt}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: d,
    hasTransform: h
  };
}
function Ii(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((r, n) => $i(r) + $i(e[n])));
}
function $i(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Vv() {
  return document.body.offsetHeight;
}
function Qv(e, t, r) {
  const n = e[Rn];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const As = Symbol("_vod"), mo = {
  beforeMount(e, { value: t }, { transition: r }) {
    e[As] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : yn(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), yn(e, !0), n.enter(e)) : n.leave(e, () => {
      yn(e, !1);
    }) : yn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    yn(e, t);
  }
};
function yn(e, t) {
  e.style.display = t ? e[As] : "none";
}
const Zv = Symbol("");
function qv(e, t, r) {
  const n = e.style, a = Ye(r);
  if (r && !a) {
    if (t && !Ye(t))
      for (const o in t)
        r[o] == null && Uo(n, o, "");
    for (const o in r)
      Uo(n, o, r[o]);
  } else {
    const o = n.display;
    if (a) {
      if (t !== r) {
        const s = n[Zv];
        s && (r += ";" + s), n.cssText = r;
      }
    } else
      t && e.removeAttribute("style");
    As in e && (n.display = o);
  }
}
const Ti = /\s*!important$/;
function Uo(e, t, r) {
  if (se(r))
    r.forEach((n) => Uo(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Jv(e, t);
    Ti.test(r) ? e.setProperty(
      vt(n),
      r.replace(Ti, ""),
      "important"
    ) : e[n] = r;
  }
}
const Pi = ["Webkit", "Moz", "ms"], yo = {};
function Jv(e, t) {
  const r = yo[t];
  if (r)
    return r;
  let n = ut(t);
  if (n !== "filter" && n in e)
    return yo[t] = n;
  n = Ba(n);
  for (let a = 0; a < Pi.length; a++) {
    const o = Pi[a] + n;
    if (o in e)
      return yo[t] = o;
  }
  return t;
}
const Si = "http://www.w3.org/1999/xlink";
function Xv(e, t, r, n, a) {
  if (n && t.startsWith("xlink:"))
    r == null ? e.removeAttributeNS(Si, t.slice(6, t.length)) : e.setAttributeNS(Si, t, r);
  else {
    const o = ed(t);
    r == null || o && !vc(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r);
  }
}
function ep(e, t, r, n, a, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n && s(n, a, o), e[t] = r ?? "";
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    e._value = r;
    const c = i === "OPTION" ? e.getAttribute("value") : e.value, u = r ?? "";
    c !== u && (e.value = u), r == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (r === "" || r == null) {
    const c = typeof e[t];
    c === "boolean" ? r = vc(r) : r == null && c === "string" ? (r = "", l = !0) : c === "number" && (r = 0, l = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  l && e.removeAttribute(t);
}
function tp(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function rp(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Ei = Symbol("_vei");
function np(e, t, r, n, a = null) {
  const o = e[Ei] || (e[Ei] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [i, l] = ap(t);
    if (n) {
      const c = o[t] = ip(n, a);
      tp(e, i, c, l);
    } else
      s && (rp(e, i, s, l), o[t] = void 0);
  }
}
const Yi = /(?:Once|Passive|Capture)$/;
function ap(e) {
  let t;
  if (Yi.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Yi); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : vt(e.slice(2)), t];
}
let bo = 0;
const op = /* @__PURE__ */ Promise.resolve(), sp = () => bo || (op.then(() => bo = 0), bo = Date.now());
function ip(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    gt(
      lp(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = sp(), r;
}
function lp(e, t) {
  if (se(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map((n) => (a) => !a._stopped && n && n(a));
  } else
    return t;
}
const Ni = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cp = (e, t, r, n, a, o, s, i, l) => {
  const c = a === "svg";
  t === "class" ? Qv(e, n, c) : t === "style" ? qv(e, r, n) : La(t) ? os(t) || np(e, t, r, n, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : up(e, t, n, c)) ? ep(
    e,
    t,
    n,
    o,
    s,
    i,
    l
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Xv(e, t, n, c));
};
function up(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ni(t) && fe(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Ni(t) && Ye(r) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function fp(e, t) {
  const r = /* @__PURE__ */ We(e);
  class n extends Cs {
    constructor(o) {
      super(r, o, t);
    }
  }
  return n.def = r, n;
}
const dp = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Cs extends dp {
  constructor(t, r = {}, n) {
    super(), this._def = t, this._props = r, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), _r(() => {
      this._connected || (Fi(null, this.shadowRoot), this._instance = null);
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
      for (const a of n)
        this._setAttr(a.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, a = !1) => {
      const { props: o, styles: s } = n;
      let i;
      if (o && !se(o))
        for (const l in o) {
          const c = o[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Io(this._props[l])), (i || (i = /* @__PURE__ */ Object.create(null)))[ut(l)] = !0);
        }
      this._numberProps = i, a && this._resolveProps(n), this._applyStyles(s), this._update();
    }, r = this._def.__asyncLoader;
    r ? r().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: r } = t, n = se(r) ? r : Object.keys(r || {});
    for (const a of Object.keys(this))
      a[0] !== "_" && n.includes(a) && this._setProp(a, this[a], !0, !1);
    for (const a of n.map(ut))
      Object.defineProperty(this, a, {
        get() {
          return this._getProp(a);
        },
        set(o) {
          this._setProp(a, o);
        }
      });
  }
  _setAttr(t) {
    let r = this.getAttribute(t);
    const n = ut(t);
    this._numberProps && this._numberProps[n] && (r = Io(r)), this._setProp(n, r, !1);
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
  _setProp(t, r, n = !0, a = !0) {
    r !== this._props[t] && (this._props[t] = r, a && this._instance && this._update(), n && (r === !0 ? this.setAttribute(vt(t), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(vt(t), r + "") : r || this.removeAttribute(vt(t))));
  }
  _update() {
    Fi(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = le(this._def, Be({}, this._props));
    return this._instance || (t.ce = (r) => {
      this._instance = r, r.isCE = !0;
      const n = (o, s) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: s
          })
        );
      };
      r.emit = (o, ...s) => {
        n(o, s), vt(o) !== o && n(vt(o), s);
      };
      let a = this;
      for (; a = a && (a.parentNode || a.host); )
        if (a instanceof Cs) {
          r.parent = a._instance, r.provides = a._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((r) => {
      const n = document.createElement("style");
      n.textContent = r, this.shadowRoot.appendChild(n);
    });
  }
}
const vp = ["ctrl", "shift", "alt", "meta"], pp = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => vp.some((r) => e[`${r}Key`] && !t.includes(r))
}, hp = (e, t) => {
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = (a, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const i = pp[t[s]];
      if (i && i(a, t))
        return;
    }
    return e(a, ...o);
  });
}, gp = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Li = (e, t) => {
  const r = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return r[n] || (r[n] = (a) => {
    if (!("key" in a))
      return;
    const o = vt(a.key);
    if (t.some((s) => s === o || gp[s] === o))
      return e(a);
  });
}, mp = /* @__PURE__ */ Be({ patchProp: cp }, Uv);
let Ri;
function yp() {
  return Ri || (Ri = _v(mp));
}
const Fi = (...e) => {
  yp().render(...e);
};
var ot = "top", Dt = "bottom", _t = "right", st = "left", Ms = "auto", Kn = [ot, Dt, _t, st], qr = "start", Fn = "end", bp = "clippingParents", cu = "viewport", bn = "popper", wp = "reference", Bi = /* @__PURE__ */ Kn.reduce(function(e, t) {
  return e.concat([t + "-" + qr, t + "-" + Fn]);
}, []), uu = /* @__PURE__ */ [].concat(Kn, [Ms]).reduce(function(e, t) {
  return e.concat([t, t + "-" + qr, t + "-" + Fn]);
}, []), Dp = "beforeRead", _p = "read", xp = "afterRead", Ap = "beforeMain", Cp = "main", Mp = "afterMain", kp = "beforeWrite", Op = "write", Ip = "afterWrite", $p = [Dp, _p, xp, Ap, Cp, Mp, kp, Op, Ip];
function Lt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ft(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Or(e) {
  var t = ft(e).Element;
  return e instanceof t || e instanceof Element;
}
function bt(e) {
  var t = ft(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ks(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ft(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Tp(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, a = t.attributes[r] || {}, o = t.elements[r];
    !bt(o) || !Lt(o) || (Object.assign(o.style, n), Object.keys(a).forEach(function(s) {
      var i = a[s];
      i === !1 ? o.removeAttribute(s) : o.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Pp(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var a = t.elements[n], o = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !bt(a) || !Lt(a) || (Object.assign(a.style, i), Object.keys(o).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
const Sp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Tp,
  effect: Pp,
  requires: ["computeStyles"]
};
function Nt(e) {
  return e.split("-")[0];
}
var kr = Math.max, Ma = Math.min, Jr = Math.round;
function Wo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function fu() {
  return !/^((?!chrome|android).)*safari/i.test(Wo());
}
function Xr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), a = 1, o = 1;
  t && bt(e) && (a = e.offsetWidth > 0 && Jr(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Jr(n.height) / e.offsetHeight || 1);
  var s = Or(e) ? ft(e) : window, i = s.visualViewport, l = !fu() && r, c = (n.left + (l && i ? i.offsetLeft : 0)) / a, u = (n.top + (l && i ? i.offsetTop : 0)) / o, f = n.width / a, d = n.height / o;
  return {
    width: f,
    height: d,
    top: u,
    right: c + f,
    bottom: u + d,
    left: c,
    x: c,
    y: u
  };
}
function Os(e) {
  var t = Xr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function du(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && ks(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Kt(e) {
  return ft(e).getComputedStyle(e);
}
function Ep(e) {
  return ["table", "td", "th"].indexOf(Lt(e)) >= 0;
}
function dr(e) {
  return ((Or(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ja(e) {
  return Lt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ks(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    dr(e)
  );
}
function ji(e) {
  return !bt(e) || // https://github.com/popperjs/popper-core/issues/837
  Kt(e).position === "fixed" ? null : e.offsetParent;
}
function Yp(e) {
  var t = /firefox/i.test(Wo()), r = /Trident/i.test(Wo());
  if (r && bt(e)) {
    var n = Kt(e);
    if (n.position === "fixed")
      return null;
  }
  var a = Ja(e);
  for (ks(a) && (a = a.host); bt(a) && ["html", "body"].indexOf(Lt(a)) < 0; ) {
    var o = Kt(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Gn(e) {
  for (var t = ft(e), r = ji(e); r && Ep(r) && Kt(r).position === "static"; )
    r = ji(r);
  return r && (Lt(r) === "html" || Lt(r) === "body" && Kt(r).position === "static") ? t : r || Yp(e) || t;
}
function Is(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Pn(e, t, r) {
  return kr(e, Ma(t, r));
}
function Np(e, t, r) {
  var n = Pn(e, t, r);
  return n > r ? r : n;
}
function vu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function pu(e) {
  return Object.assign({}, vu(), e);
}
function hu(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Lp = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, pu(typeof t != "number" ? t : hu(t, Kn));
};
function Rp(e) {
  var t, r = e.state, n = e.name, a = e.options, o = r.elements.arrow, s = r.modifiersData.popperOffsets, i = Nt(r.placement), l = Is(i), c = [st, _t].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!o || !s)) {
    var f = Lp(a.padding, r), d = Os(o), h = l === "y" ? ot : st, m = l === "y" ? Dt : _t, b = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], D = s[l] - r.rects.reference[l], y = Gn(o), B = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, F = b / 2 - D / 2, I = f[h], A = B - d[u] - f[m], G = B / 2 - d[u] / 2 + F, $ = Pn(I, G, A), M = l;
    r.modifiersData[n] = (t = {}, t[M] = $, t.centerOffset = $ - G, t);
  }
}
function Fp(e) {
  var t = e.state, r = e.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || du(t.elements.popper, a) && (t.elements.arrow = a));
}
const Bp = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Rp,
  effect: Fp,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function en(e) {
  return e.split("-")[1];
}
var jp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Hp(e, t) {
  var r = e.x, n = e.y, a = t.devicePixelRatio || 1;
  return {
    x: Jr(r * a) / a || 0,
    y: Jr(n * a) / a || 0
  };
}
function Hi(e) {
  var t, r = e.popper, n = e.popperRect, a = e.placement, o = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, d = s.x, h = d === void 0 ? 0 : d, m = s.y, b = m === void 0 ? 0 : m, D = typeof u == "function" ? u({
    x: h,
    y: b
  }) : {
    x: h,
    y: b
  };
  h = D.x, b = D.y;
  var y = s.hasOwnProperty("x"), B = s.hasOwnProperty("y"), F = st, I = ot, A = window;
  if (c) {
    var G = Gn(r), $ = "clientHeight", M = "clientWidth";
    if (G === ft(r) && (G = dr(r), Kt(G).position !== "static" && i === "absolute" && ($ = "scrollHeight", M = "scrollWidth")), G = G, a === ot || (a === st || a === _t) && o === Fn) {
      I = Dt;
      var R = f && G === A && A.visualViewport ? A.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        G[$]
      );
      b -= R - n.height, b *= l ? 1 : -1;
    }
    if (a === st || (a === ot || a === Dt) && o === Fn) {
      F = _t;
      var j = f && G === A && A.visualViewport ? A.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        G[M]
      );
      h -= j - n.width, h *= l ? 1 : -1;
    }
  }
  var X = Object.assign({
    position: i
  }, c && jp), x = u === !0 ? Hp({
    x: h,
    y: b
  }, ft(r)) : {
    x: h,
    y: b
  };
  if (h = x.x, b = x.y, l) {
    var H;
    return Object.assign({}, X, (H = {}, H[I] = B ? "0" : "", H[F] = y ? "0" : "", H.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", H));
  }
  return Object.assign({}, X, (t = {}, t[I] = B ? b + "px" : "", t[F] = y ? h + "px" : "", t.transform = "", t));
}
function Up(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, a = n === void 0 ? !0 : n, o = r.adaptive, s = o === void 0 ? !0 : o, i = r.roundOffsets, l = i === void 0 ? !0 : i, c = {
    placement: Nt(t.placement),
    variation: en(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Hi(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Hi(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Wp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Up,
  data: {}
};
var aa = {
  passive: !0
};
function zp(e) {
  var t = e.state, r = e.instance, n = e.options, a = n.scroll, o = a === void 0 ? !0 : a, s = n.resize, i = s === void 0 ? !0 : s, l = ft(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, aa);
  }), i && l.addEventListener("resize", r.update, aa), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, aa);
    }), i && l.removeEventListener("resize", r.update, aa);
  };
}
const Kp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: zp,
  data: {}
};
var Gp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function pa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Gp[t];
  });
}
var Vp = {
  start: "end",
  end: "start"
};
function Ui(e) {
  return e.replace(/start|end/g, function(t) {
    return Vp[t];
  });
}
function $s(e) {
  var t = ft(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Ts(e) {
  return Xr(dr(e)).left + $s(e).scrollLeft;
}
function Qp(e, t) {
  var r = ft(e), n = dr(e), a = r.visualViewport, o = n.clientWidth, s = n.clientHeight, i = 0, l = 0;
  if (a) {
    o = a.width, s = a.height;
    var c = fu();
    (c || !c && t === "fixed") && (i = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: i + Ts(e),
    y: l
  };
}
function Zp(e) {
  var t, r = dr(e), n = $s(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, o = kr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = kr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -n.scrollLeft + Ts(e), l = -n.scrollTop;
  return Kt(a || r).direction === "rtl" && (i += kr(r.clientWidth, a ? a.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: i,
    y: l
  };
}
function Ps(e) {
  var t = Kt(e), r = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function gu(e) {
  return ["html", "body", "#document"].indexOf(Lt(e)) >= 0 ? e.ownerDocument.body : bt(e) && Ps(e) ? e : gu(Ja(e));
}
function Sn(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = gu(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = ft(n), s = a ? [o].concat(o.visualViewport || [], Ps(n) ? n : []) : n, i = t.concat(s);
  return a ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Sn(Ja(s)))
  );
}
function zo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function qp(e, t) {
  var r = Xr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Wi(e, t, r) {
  return t === cu ? zo(Qp(e, r)) : Or(t) ? qp(t, r) : zo(Zp(dr(e)));
}
function Jp(e) {
  var t = Sn(Ja(e)), r = ["absolute", "fixed"].indexOf(Kt(e).position) >= 0, n = r && bt(e) ? Gn(e) : e;
  return Or(n) ? t.filter(function(a) {
    return Or(a) && du(a, n) && Lt(a) !== "body";
  }) : [];
}
function Xp(e, t, r, n) {
  var a = t === "clippingParents" ? Jp(e) : [].concat(t), o = [].concat(a, [r]), s = o[0], i = o.reduce(function(l, c) {
    var u = Wi(e, c, n);
    return l.top = kr(u.top, l.top), l.right = Ma(u.right, l.right), l.bottom = Ma(u.bottom, l.bottom), l.left = kr(u.left, l.left), l;
  }, Wi(e, s, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function mu(e) {
  var t = e.reference, r = e.element, n = e.placement, a = n ? Nt(n) : null, o = n ? en(n) : null, s = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, l;
  switch (a) {
    case ot:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case Dt:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case _t:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case st:
      l = {
        x: t.x - r.width,
        y: i
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = a ? Is(a) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case qr:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Fn:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Bn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = n === void 0 ? e.placement : n, o = r.strategy, s = o === void 0 ? e.strategy : o, i = r.boundary, l = i === void 0 ? bp : i, c = r.rootBoundary, u = c === void 0 ? cu : c, f = r.elementContext, d = f === void 0 ? bn : f, h = r.altBoundary, m = h === void 0 ? !1 : h, b = r.padding, D = b === void 0 ? 0 : b, y = pu(typeof D != "number" ? D : hu(D, Kn)), B = d === bn ? wp : bn, F = e.rects.popper, I = e.elements[m ? B : d], A = Xp(Or(I) ? I : I.contextElement || dr(e.elements.popper), l, u, s), G = Xr(e.elements.reference), $ = mu({
    reference: G,
    element: F,
    strategy: "absolute",
    placement: a
  }), M = zo(Object.assign({}, F, $)), R = d === bn ? M : G, j = {
    top: A.top - R.top + y.top,
    bottom: R.bottom - A.bottom + y.bottom,
    left: A.left - R.left + y.left,
    right: R.right - A.right + y.right
  }, X = e.modifiersData.offset;
  if (d === bn && X) {
    var x = X[a];
    Object.keys(j).forEach(function(H) {
      var ae = [_t, Dt].indexOf(H) >= 0 ? 1 : -1, V = [ot, Dt].indexOf(H) >= 0 ? "y" : "x";
      j[H] += x[V] * ae;
    });
  }
  return j;
}
function eh(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = r.boundary, o = r.rootBoundary, s = r.padding, i = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? uu : l, u = en(n), f = u ? i ? Bi : Bi.filter(function(m) {
    return en(m) === u;
  }) : Kn, d = f.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  d.length === 0 && (d = f);
  var h = d.reduce(function(m, b) {
    return m[b] = Bn(e, {
      placement: b,
      boundary: a,
      rootBoundary: o,
      padding: s
    })[Nt(b)], m;
  }, {});
  return Object.keys(h).sort(function(m, b) {
    return h[m] - h[b];
  });
}
function th(e) {
  if (Nt(e) === Ms)
    return [];
  var t = pa(e);
  return [Ui(e), t, Ui(t)];
}
function rh(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = r.mainAxis, o = a === void 0 ? !0 : a, s = r.altAxis, i = s === void 0 ? !0 : s, l = r.fallbackPlacements, c = r.padding, u = r.boundary, f = r.rootBoundary, d = r.altBoundary, h = r.flipVariations, m = h === void 0 ? !0 : h, b = r.allowedAutoPlacements, D = t.options.placement, y = Nt(D), B = y === D, F = l || (B || !m ? [pa(D)] : th(D)), I = [D].concat(F).reduce(function(me, Te) {
      return me.concat(Nt(Te) === Ms ? eh(t, {
        placement: Te,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : Te);
    }, []), A = t.rects.reference, G = t.rects.popper, $ = /* @__PURE__ */ new Map(), M = !0, R = I[0], j = 0; j < I.length; j++) {
      var X = I[j], x = Nt(X), H = en(X) === qr, ae = [ot, Dt].indexOf(x) >= 0, V = ae ? "width" : "height", re = Bn(t, {
        placement: X,
        boundary: u,
        rootBoundary: f,
        altBoundary: d,
        padding: c
      }), ee = ae ? H ? _t : st : H ? Dt : ot;
      A[V] > G[V] && (ee = pa(ee));
      var ie = pa(ee), pe = [];
      if (o && pe.push(re[x] <= 0), i && pe.push(re[ee] <= 0, re[ie] <= 0), pe.every(function(me) {
        return me;
      })) {
        R = X, M = !1;
        break;
      }
      $.set(X, pe);
    }
    if (M)
      for (var Y = m ? 3 : 1, de = function(Te) {
        var _e = I.find(function(Me) {
          var Ne = $.get(Me);
          if (Ne)
            return Ne.slice(0, Te).every(function(Le) {
              return Le;
            });
        });
        if (_e)
          return R = _e, "break";
      }, Q = Y; Q > 0; Q--) {
        var Ie = de(Q);
        if (Ie === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[n]._skip = !0, t.placement = R, t.reset = !0);
  }
}
const nh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: rh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function zi(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Ki(e) {
  return [ot, _t, Dt, st].some(function(t) {
    return e[t] >= 0;
  });
}
function ah(e) {
  var t = e.state, r = e.name, n = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, s = Bn(t, {
    elementContext: "reference"
  }), i = Bn(t, {
    altBoundary: !0
  }), l = zi(s, n), c = zi(i, a, o), u = Ki(l), f = Ki(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const oh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ah
};
function sh(e, t, r) {
  var n = Nt(e), a = [st, ot].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = o[0], i = o[1];
  return s = s || 0, i = (i || 0) * a, [st, _t].indexOf(n) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function ih(e) {
  var t = e.state, r = e.options, n = e.name, a = r.offset, o = a === void 0 ? [0, 0] : a, s = uu.reduce(function(u, f) {
    return u[f] = sh(f, t.rects, o), u;
  }, {}), i = s[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = s;
}
const lh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ih
};
function ch(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = mu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const uh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ch,
  data: {}
};
function fh(e) {
  return e === "x" ? "y" : "x";
}
function dh(e) {
  var t = e.state, r = e.options, n = e.name, a = r.mainAxis, o = a === void 0 ? !0 : a, s = r.altAxis, i = s === void 0 ? !1 : s, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, f = r.padding, d = r.tether, h = d === void 0 ? !0 : d, m = r.tetherOffset, b = m === void 0 ? 0 : m, D = Bn(t, {
    boundary: l,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), y = Nt(t.placement), B = en(t.placement), F = !B, I = Is(y), A = fh(I), G = t.modifiersData.popperOffsets, $ = t.rects.reference, M = t.rects.popper, R = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, j = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), X = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, x = {
    x: 0,
    y: 0
  };
  if (G) {
    if (o) {
      var H, ae = I === "y" ? ot : st, V = I === "y" ? Dt : _t, re = I === "y" ? "height" : "width", ee = G[I], ie = ee + D[ae], pe = ee - D[V], Y = h ? -M[re] / 2 : 0, de = B === qr ? $[re] : M[re], Q = B === qr ? -M[re] : -$[re], Ie = t.elements.arrow, me = h && Ie ? Os(Ie) : {
        width: 0,
        height: 0
      }, Te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vu(), _e = Te[ae], Me = Te[V], Ne = Pn(0, $[re], me[re]), Le = F ? $[re] / 2 - Y - Ne - _e - j.mainAxis : de - Ne - _e - j.mainAxis, lt = F ? -$[re] / 2 + Y + Ne + Me + j.mainAxis : Q + Ne + Me + j.mainAxis, qe = t.elements.arrow && Gn(t.elements.arrow), v = qe ? I === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, g = (H = X == null ? void 0 : X[I]) != null ? H : 0, w = ee + Le - g - v, k = ee + lt - g, C = Pn(h ? Ma(ie, w) : ie, ee, h ? kr(pe, k) : pe);
      G[I] = C, x[I] = C - ee;
    }
    if (i) {
      var N, U = I === "x" ? ot : st, E = I === "x" ? Dt : _t, L = G[A], T = A === "y" ? "height" : "width", W = L + D[U], J = L - D[E], Z = [ot, st].indexOf(y) !== -1, oe = (N = X == null ? void 0 : X[A]) != null ? N : 0, ce = Z ? W : L - $[T] - M[T] - oe + j.altAxis, ve = Z ? L + $[T] + M[T] - oe - j.altAxis : J, ye = h && Z ? Np(ce, L, ve) : Pn(h ? ce : W, L, h ? ve : J);
      G[A] = ye, x[A] = ye - L;
    }
    t.modifiersData[n] = x;
  }
}
const vh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: dh,
  requiresIfExists: ["offset"]
};
function ph(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function hh(e) {
  return e === ft(e) || !bt(e) ? $s(e) : ph(e);
}
function gh(e) {
  var t = e.getBoundingClientRect(), r = Jr(t.width) / e.offsetWidth || 1, n = Jr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function mh(e, t, r) {
  r === void 0 && (r = !1);
  var n = bt(t), a = bt(t) && gh(t), o = dr(t), s = Xr(e, a, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Lt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ps(o)) && (i = hh(t)), bt(t) ? (l = Xr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Ts(o))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function yh(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(i) {
      if (!r.has(i)) {
        var l = t.get(i);
        l && a(l);
      }
    }), n.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || a(o);
  }), n;
}
function bh(e) {
  var t = yh(e);
  return $p.reduce(function(r, n) {
    return r.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function wh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Dh(e) {
  var t = e.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, {
      options: Object.assign({}, a.options, n.options),
      data: Object.assign({}, a.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Gi = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Vi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function _h(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, a = t.defaultOptions, o = a === void 0 ? Gi : a;
  return function(i, l, c) {
    c === void 0 && (c = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Gi, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], d = !1, h = {
      state: u,
      setOptions: function(y) {
        var B = typeof y == "function" ? y(u.options) : y;
        b(), u.options = Object.assign({}, o, u.options, B), u.scrollParents = {
          reference: Or(i) ? Sn(i) : i.contextElement ? Sn(i.contextElement) : [],
          popper: Sn(l)
        };
        var F = bh(Dh([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = F.filter(function(I) {
          return I.enabled;
        }), m(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var y = u.elements, B = y.reference, F = y.popper;
          if (Vi(B, F)) {
            u.rects = {
              reference: mh(B, Gn(F), u.options.strategy === "fixed"),
              popper: Os(F)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(j) {
              return u.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var I = 0; I < u.orderedModifiers.length; I++) {
              if (u.reset === !0) {
                u.reset = !1, I = -1;
                continue;
              }
              var A = u.orderedModifiers[I], G = A.fn, $ = A.options, M = $ === void 0 ? {} : $, R = A.name;
              typeof G == "function" && (u = G({
                state: u,
                options: M,
                name: R,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: wh(function() {
        return new Promise(function(D) {
          h.forceUpdate(), D(u);
        });
      }),
      destroy: function() {
        b(), d = !0;
      }
    };
    if (!Vi(i, l))
      return h;
    h.setOptions(c).then(function(D) {
      !d && c.onFirstUpdate && c.onFirstUpdate(D);
    });
    function m() {
      u.orderedModifiers.forEach(function(D) {
        var y = D.name, B = D.options, F = B === void 0 ? {} : B, I = D.effect;
        if (typeof I == "function") {
          var A = I({
            state: u,
            name: y,
            instance: h,
            options: F
          }), G = function() {
          };
          f.push(A || G);
        }
      });
    }
    function b() {
      f.forEach(function(D) {
        return D();
      }), f = [];
    }
    return h;
  };
}
var xh = [Kp, uh, Wp, Sp, lh, nh, vh, Bp, oh], Ah = /* @__PURE__ */ _h({
  defaultModifiers: xh
}), Ch = Object.defineProperty, Mh = (e, t, r) => t in e ? Ch(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, te = (e, t, r) => (Mh(e, typeof t != "symbol" ? t + "" : t, r), r), oa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kh = Object.prototype, Oh = kh.hasOwnProperty;
function Ih(e, t) {
  return e != null && Oh.call(e, t);
}
var $h = Ih, Th = Array.isArray, Mt = Th, Ph = typeof oa == "object" && oa && oa.Object === Object && oa, bu = Ph, Sh = bu, Eh = typeof self == "object" && self && self.Object === Object && self, Yh = Sh || Eh || Function("return this")(), Rt = Yh, Nh = Rt, Lh = Nh.Symbol, Xa = Lh, Qi = Xa, wu = Object.prototype, Rh = wu.hasOwnProperty, Fh = wu.toString, wn = Qi ? Qi.toStringTag : void 0;
function Bh(e) {
  var t = Rh.call(e, wn), r = e[wn];
  try {
    e[wn] = void 0;
    var n = !0;
  } catch {
  }
  var a = Fh.call(e);
  return n && (t ? e[wn] = r : delete e[wn]), a;
}
var jh = Bh, Hh = Object.prototype, Uh = Hh.toString;
function Wh(e) {
  return Uh.call(e);
}
var zh = Wh, Zi = Xa, Kh = jh, Gh = zh, Vh = "[object Null]", Qh = "[object Undefined]", qi = Zi ? Zi.toStringTag : void 0;
function Zh(e) {
  return e == null ? e === void 0 ? Qh : Vh : qi && qi in Object(e) ? Kh(e) : Gh(e);
}
var Ft = Zh;
function qh(e) {
  return e != null && typeof e == "object";
}
var kt = qh, Jh = Ft, Xh = kt, eg = "[object Symbol]";
function tg(e) {
  return typeof e == "symbol" || Xh(e) && Jh(e) == eg;
}
var Ss = tg, rg = Mt, ng = Ss, ag = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, og = /^\w*$/;
function sg(e, t) {
  if (rg(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ng(e) ? !0 : og.test(e) || !ag.test(e) || t != null && e in Object(t);
}
var Es = sg;
function ig(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zt = ig, lg = Ft, cg = Zt, ug = "[object AsyncFunction]", fg = "[object Function]", dg = "[object GeneratorFunction]", vg = "[object Proxy]";
function pg(e) {
  if (!cg(e))
    return !1;
  var t = lg(e);
  return t == fg || t == dg || t == ug || t == vg;
}
var Er = pg, hg = Rt, gg = hg["__core-js_shared__"], mg = gg, wo = mg, Ji = function() {
  var e = /[^.]+$/.exec(wo && wo.keys && wo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function yg(e) {
  return !!Ji && Ji in e;
}
var bg = yg, wg = Function.prototype, Dg = wg.toString;
function _g(e) {
  if (e != null) {
    try {
      return Dg.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Du = _g, xg = Er, Ag = bg, Cg = Zt, Mg = Du, kg = /[\\^$.*+?()[\]{}|]/g, Og = /^\[object .+?Constructor\]$/, Ig = Function.prototype, $g = Object.prototype, Tg = Ig.toString, Pg = $g.hasOwnProperty, Sg = RegExp(
  "^" + Tg.call(Pg).replace(kg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Eg(e) {
  if (!Cg(e) || Ag(e))
    return !1;
  var t = xg(e) ? Sg : Og;
  return t.test(Mg(e));
}
var Yg = Eg;
function Ng(e, t) {
  return e == null ? void 0 : e[t];
}
var Lg = Ng, Rg = Yg, Fg = Lg;
function Bg(e, t) {
  var r = Fg(e, t);
  return Rg(r) ? r : void 0;
}
var Yr = Bg, jg = Yr, Hg = jg(Object, "create"), eo = Hg, Xi = eo;
function Ug() {
  this.__data__ = Xi ? Xi(null) : {}, this.size = 0;
}
var Wg = Ug;
function zg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Kg = zg, Gg = eo, Vg = "__lodash_hash_undefined__", Qg = Object.prototype, Zg = Qg.hasOwnProperty;
function qg(e) {
  var t = this.__data__;
  if (Gg) {
    var r = t[e];
    return r === Vg ? void 0 : r;
  }
  return Zg.call(t, e) ? t[e] : void 0;
}
var Jg = qg, Xg = eo, em = Object.prototype, tm = em.hasOwnProperty;
function rm(e) {
  var t = this.__data__;
  return Xg ? t[e] !== void 0 : tm.call(t, e);
}
var nm = rm, am = eo, om = "__lodash_hash_undefined__";
function sm(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = am && t === void 0 ? om : t, this;
}
var im = sm, lm = Wg, cm = Kg, um = Jg, fm = nm, dm = im;
function sn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
sn.prototype.clear = lm;
sn.prototype.delete = cm;
sn.prototype.get = um;
sn.prototype.has = fm;
sn.prototype.set = dm;
var vm = sn;
function pm() {
  this.__data__ = [], this.size = 0;
}
var hm = pm;
function gm(e, t) {
  return e === t || e !== e && t !== t;
}
var ln = gm, mm = ln;
function ym(e, t) {
  for (var r = e.length; r--; )
    if (mm(e[r][0], t))
      return r;
  return -1;
}
var to = ym, bm = to, wm = Array.prototype, Dm = wm.splice;
function _m(e) {
  var t = this.__data__, r = bm(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Dm.call(t, r, 1), --this.size, !0;
}
var xm = _m, Am = to;
function Cm(e) {
  var t = this.__data__, r = Am(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Mm = Cm, km = to;
function Om(e) {
  return km(this.__data__, e) > -1;
}
var Im = Om, $m = to;
function Tm(e, t) {
  var r = this.__data__, n = $m(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Pm = Tm, Sm = hm, Em = xm, Ym = Mm, Nm = Im, Lm = Pm;
function cn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
cn.prototype.clear = Sm;
cn.prototype.delete = Em;
cn.prototype.get = Ym;
cn.prototype.has = Nm;
cn.prototype.set = Lm;
var ro = cn, Rm = Yr, Fm = Rt, Bm = Rm(Fm, "Map"), Ys = Bm, el = vm, jm = ro, Hm = Ys;
function Um() {
  this.size = 0, this.__data__ = {
    hash: new el(),
    map: new (Hm || jm)(),
    string: new el()
  };
}
var Wm = Um;
function zm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Km = zm, Gm = Km;
function Vm(e, t) {
  var r = e.__data__;
  return Gm(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var no = Vm, Qm = no;
function Zm(e) {
  var t = Qm(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var qm = Zm, Jm = no;
function Xm(e) {
  return Jm(this, e).get(e);
}
var ey = Xm, ty = no;
function ry(e) {
  return ty(this, e).has(e);
}
var ny = ry, ay = no;
function oy(e, t) {
  var r = ay(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var sy = oy, iy = Wm, ly = qm, cy = ey, uy = ny, fy = sy;
function un(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
un.prototype.clear = iy;
un.prototype.delete = ly;
un.prototype.get = cy;
un.prototype.has = uy;
un.prototype.set = fy;
var Ns = un, _u = Ns, dy = "Expected a function";
function Ls(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(dy);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(a))
      return o.get(a);
    var s = e.apply(this, n);
    return r.cache = o.set(a, s) || o, s;
  };
  return r.cache = new (Ls.Cache || _u)(), r;
}
Ls.Cache = _u;
var vy = Ls, py = vy, hy = 500;
function gy(e) {
  var t = py(e, function(n) {
    return r.size === hy && r.clear(), n;
  }), r = t.cache;
  return t;
}
var my = gy, yy = my, by = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wy = /\\(\\)?/g, Dy = yy(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(by, function(r, n, a, o) {
    t.push(a ? o.replace(wy, "$1") : n || r);
  }), t;
}), _y = Dy;
function xy(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Ay = xy, tl = Xa, Cy = Ay, My = Mt, ky = Ss, Oy = 1 / 0, rl = tl ? tl.prototype : void 0, nl = rl ? rl.toString : void 0;
function xu(e) {
  if (typeof e == "string")
    return e;
  if (My(e))
    return Cy(e, xu) + "";
  if (ky(e))
    return nl ? nl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Oy ? "-0" : t;
}
var Iy = xu, $y = Iy;
function Ty(e) {
  return e == null ? "" : $y(e);
}
var Py = Ty, Sy = Mt, Ey = Es, Yy = _y, Ny = Py;
function Ly(e, t) {
  return Sy(e) ? e : Ey(e, t) ? [e] : Yy(Ny(e));
}
var Au = Ly, Ry = Ft, Fy = kt, By = "[object Arguments]";
function jy(e) {
  return Fy(e) && Ry(e) == By;
}
var Hy = jy, al = Hy, Uy = kt, Cu = Object.prototype, Wy = Cu.hasOwnProperty, zy = Cu.propertyIsEnumerable, Ky = al(/* @__PURE__ */ function() {
  return arguments;
}()) ? al : function(e) {
  return Uy(e) && Wy.call(e, "callee") && !zy.call(e, "callee");
}, Rs = Ky, Gy = 9007199254740991, Vy = /^(?:0|[1-9]\d*)$/;
function Qy(e, t) {
  var r = typeof e;
  return t = t ?? Gy, !!t && (r == "number" || r != "symbol" && Vy.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Fs = Qy, Zy = 9007199254740991;
function qy(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Zy;
}
var Bs = qy, Jy = Ss, Xy = 1 / 0;
function e0(e) {
  if (typeof e == "string" || Jy(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Xy ? "-0" : t;
}
var ao = e0, t0 = Au, r0 = Rs, n0 = Mt, a0 = Fs, o0 = Bs, s0 = ao;
function i0(e, t, r) {
  t = t0(t, e);
  for (var n = -1, a = t.length, o = !1; ++n < a; ) {
    var s = s0(t[n]);
    if (!(o = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return o || ++n != a ? o : (a = e == null ? 0 : e.length, !!a && o0(a) && a0(s, a) && (n0(e) || r0(e)));
}
var Mu = i0, l0 = $h, c0 = Mu;
function u0(e, t) {
  return e != null && c0(e, t, l0);
}
var ku = u0, f0 = Ft, d0 = kt, v0 = "[object Date]";
function p0(e) {
  return d0(e) && f0(e) == v0;
}
var h0 = p0;
function g0(e) {
  return function(t) {
    return e(t);
  };
}
var Ou = g0, jn = {}, m0 = {
  get exports() {
    return jn;
  },
  set exports(e) {
    jn = e;
  }
};
(function(e, t) {
  var r = bu, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, o = a && a.exports === n, s = o && r.process, i = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(m0, jn);
var y0 = h0, b0 = Ou, ol = jn, sl = ol && ol.isDate, w0 = sl ? b0(sl) : y0, D0 = w0, _0 = Ft, x0 = Mt, A0 = kt, C0 = "[object String]";
function M0(e) {
  return typeof e == "string" || !x0(e) && A0(e) && _0(e) == C0;
}
var Et = M0;
function k0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Iu = k0, O0 = ro;
function I0() {
  this.__data__ = new O0(), this.size = 0;
}
var $0 = I0;
function T0(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var P0 = T0;
function S0(e) {
  return this.__data__.get(e);
}
var E0 = S0;
function Y0(e) {
  return this.__data__.has(e);
}
var N0 = Y0, L0 = ro, R0 = Ys, F0 = Ns, B0 = 200;
function j0(e, t) {
  var r = this.__data__;
  if (r instanceof L0) {
    var n = r.__data__;
    if (!R0 || n.length < B0 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new F0(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var H0 = j0, U0 = ro, W0 = $0, z0 = P0, K0 = E0, G0 = N0, V0 = H0;
function fn(e) {
  var t = this.__data__ = new U0(e);
  this.size = t.size;
}
fn.prototype.clear = W0;
fn.prototype.delete = z0;
fn.prototype.get = K0;
fn.prototype.has = G0;
fn.prototype.set = V0;
var js = fn, Q0 = "__lodash_hash_undefined__";
function Z0(e) {
  return this.__data__.set(e, Q0), this;
}
var q0 = Z0;
function J0(e) {
  return this.__data__.has(e);
}
var X0 = J0, eb = Ns, tb = q0, rb = X0;
function ka(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new eb(); ++t < r; )
    this.add(e[t]);
}
ka.prototype.add = ka.prototype.push = tb;
ka.prototype.has = rb;
var nb = ka;
function ab(e, t) {
  return e.has(t);
}
var ob = ab, sb = nb, ib = Iu, lb = ob, cb = 1, ub = 2;
function fb(e, t, r, n, a, o) {
  var s = r & cb, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var c = o.get(e), u = o.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, h = r & ub ? new sb() : void 0;
  for (o.set(e, t), o.set(t, e); ++f < i; ) {
    var m = e[f], b = t[f];
    if (n)
      var D = s ? n(b, m, f, t, e, o) : n(m, b, f, e, t, o);
    if (D !== void 0) {
      if (D)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!ib(t, function(y, B) {
        if (!lb(h, B) && (m === y || a(m, y, r, n, o)))
          return h.push(B);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === b || a(m, b, r, n, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), d;
}
var $u = fb, db = Rt, vb = db.Uint8Array, Tu = vb;
function pb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var hb = pb;
function gb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var mb = gb, il = Xa, ll = Tu, yb = ln, bb = $u, wb = hb, Db = mb, _b = 1, xb = 2, Ab = "[object Boolean]", Cb = "[object Date]", Mb = "[object Error]", kb = "[object Map]", Ob = "[object Number]", Ib = "[object RegExp]", $b = "[object Set]", Tb = "[object String]", Pb = "[object Symbol]", Sb = "[object ArrayBuffer]", Eb = "[object DataView]", cl = il ? il.prototype : void 0, Do = cl ? cl.valueOf : void 0;
function Yb(e, t, r, n, a, o, s) {
  switch (r) {
    case Eb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Sb:
      return !(e.byteLength != t.byteLength || !o(new ll(e), new ll(t)));
    case Ab:
    case Cb:
    case Ob:
      return yb(+e, +t);
    case Mb:
      return e.name == t.name && e.message == t.message;
    case Ib:
    case Tb:
      return e == t + "";
    case kb:
      var i = wb;
    case $b:
      var l = n & _b;
      if (i || (i = Db), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= xb, s.set(e, t);
      var u = bb(i(e), i(t), n, a, o, s);
      return s.delete(e), u;
    case Pb:
      if (Do)
        return Do.call(e) == Do.call(t);
  }
  return !1;
}
var Nb = Yb;
function Lb(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Rb = Lb, Fb = Rb, Bb = Mt;
function jb(e, t, r) {
  var n = t(e);
  return Bb(e) ? n : Fb(n, r(e));
}
var Hb = jb;
function Ub(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (o[a++] = s);
  }
  return o;
}
var Wb = Ub;
function zb() {
  return [];
}
var Kb = zb, Gb = Wb, Vb = Kb, Qb = Object.prototype, Zb = Qb.propertyIsEnumerable, ul = Object.getOwnPropertySymbols, qb = ul ? function(e) {
  return e == null ? [] : (e = Object(e), Gb(ul(e), function(t) {
    return Zb.call(e, t);
  }));
} : Vb, Jb = qb;
function Xb(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var ew = Xb, tn = {}, tw = {
  get exports() {
    return tn;
  },
  set exports(e) {
    tn = e;
  }
};
function rw() {
  return !1;
}
var nw = rw;
(function(e, t) {
  var r = Rt, n = nw, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, i = s ? r.Buffer : void 0, l = i ? i.isBuffer : void 0, c = l || n;
  e.exports = c;
})(tw, tn);
var aw = Ft, ow = Bs, sw = kt, iw = "[object Arguments]", lw = "[object Array]", cw = "[object Boolean]", uw = "[object Date]", fw = "[object Error]", dw = "[object Function]", vw = "[object Map]", pw = "[object Number]", hw = "[object Object]", gw = "[object RegExp]", mw = "[object Set]", yw = "[object String]", bw = "[object WeakMap]", ww = "[object ArrayBuffer]", Dw = "[object DataView]", _w = "[object Float32Array]", xw = "[object Float64Array]", Aw = "[object Int8Array]", Cw = "[object Int16Array]", Mw = "[object Int32Array]", kw = "[object Uint8Array]", Ow = "[object Uint8ClampedArray]", Iw = "[object Uint16Array]", $w = "[object Uint32Array]", ke = {};
ke[_w] = ke[xw] = ke[Aw] = ke[Cw] = ke[Mw] = ke[kw] = ke[Ow] = ke[Iw] = ke[$w] = !0;
ke[iw] = ke[lw] = ke[ww] = ke[cw] = ke[Dw] = ke[uw] = ke[fw] = ke[dw] = ke[vw] = ke[pw] = ke[hw] = ke[gw] = ke[mw] = ke[yw] = ke[bw] = !1;
function Tw(e) {
  return sw(e) && ow(e.length) && !!ke[aw(e)];
}
var Pw = Tw, Sw = Pw, Ew = Ou, fl = jn, dl = fl && fl.isTypedArray, Yw = dl ? Ew(dl) : Sw, Hs = Yw, Nw = ew, Lw = Rs, Rw = Mt, Fw = tn, Bw = Fs, jw = Hs, Hw = Object.prototype, Uw = Hw.hasOwnProperty;
function Ww(e, t) {
  var r = Rw(e), n = !r && Lw(e), a = !r && !n && Fw(e), o = !r && !n && !a && jw(e), s = r || n || a || o, i = s ? Nw(e.length, String) : [], l = i.length;
  for (var c in e)
    (t || Uw.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Bw(c, l))) && i.push(c);
  return i;
}
var Pu = Ww, zw = Object.prototype;
function Kw(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || zw;
  return e === r;
}
var Us = Kw;
function Gw(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Su = Gw, Vw = Su, Qw = Vw(Object.keys, Object), Zw = Qw, qw = Us, Jw = Zw, Xw = Object.prototype, e1 = Xw.hasOwnProperty;
function t1(e) {
  if (!qw(e))
    return Jw(e);
  var t = [];
  for (var r in Object(e))
    e1.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var r1 = t1, n1 = Er, a1 = Bs;
function o1(e) {
  return e != null && a1(e.length) && !n1(e);
}
var Vn = o1, s1 = Pu, i1 = r1, l1 = Vn;
function c1(e) {
  return l1(e) ? s1(e) : i1(e);
}
var Ws = c1, u1 = Hb, f1 = Jb, d1 = Ws;
function v1(e) {
  return u1(e, d1, f1);
}
var p1 = v1, vl = p1, h1 = 1, g1 = Object.prototype, m1 = g1.hasOwnProperty;
function y1(e, t, r, n, a, o) {
  var s = r & h1, i = vl(e), l = i.length, c = vl(t), u = c.length;
  if (l != u && !s)
    return !1;
  for (var f = l; f--; ) {
    var d = i[f];
    if (!(s ? d in t : m1.call(t, d)))
      return !1;
  }
  var h = o.get(e), m = o.get(t);
  if (h && m)
    return h == t && m == e;
  var b = !0;
  o.set(e, t), o.set(t, e);
  for (var D = s; ++f < l; ) {
    d = i[f];
    var y = e[d], B = t[d];
    if (n)
      var F = s ? n(B, y, d, t, e, o) : n(y, B, d, e, t, o);
    if (!(F === void 0 ? y === B || a(y, B, r, n, o) : F)) {
      b = !1;
      break;
    }
    D || (D = d == "constructor");
  }
  if (b && !D) {
    var I = e.constructor, A = t.constructor;
    I != A && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof A == "function" && A instanceof A) && (b = !1);
  }
  return o.delete(e), o.delete(t), b;
}
var b1 = y1, w1 = Yr, D1 = Rt, _1 = w1(D1, "DataView"), x1 = _1, A1 = Yr, C1 = Rt, M1 = A1(C1, "Promise"), k1 = M1, O1 = Yr, I1 = Rt, $1 = O1(I1, "Set"), T1 = $1, P1 = Yr, S1 = Rt, E1 = P1(S1, "WeakMap"), Y1 = E1, Ko = x1, Go = Ys, Vo = k1, Qo = T1, Zo = Y1, Eu = Ft, dn = Du, pl = "[object Map]", N1 = "[object Object]", hl = "[object Promise]", gl = "[object Set]", ml = "[object WeakMap]", yl = "[object DataView]", L1 = dn(Ko), R1 = dn(Go), F1 = dn(Vo), B1 = dn(Qo), j1 = dn(Zo), br = Eu;
(Ko && br(new Ko(new ArrayBuffer(1))) != yl || Go && br(new Go()) != pl || Vo && br(Vo.resolve()) != hl || Qo && br(new Qo()) != gl || Zo && br(new Zo()) != ml) && (br = function(e) {
  var t = Eu(e), r = t == N1 ? e.constructor : void 0, n = r ? dn(r) : "";
  if (n)
    switch (n) {
      case L1:
        return yl;
      case R1:
        return pl;
      case F1:
        return hl;
      case B1:
        return gl;
      case j1:
        return ml;
    }
  return t;
});
var H1 = br, _o = js, U1 = $u, W1 = Nb, z1 = b1, bl = H1, wl = Mt, Dl = tn, K1 = Hs, G1 = 1, _l = "[object Arguments]", xl = "[object Array]", sa = "[object Object]", V1 = Object.prototype, Al = V1.hasOwnProperty;
function Q1(e, t, r, n, a, o) {
  var s = wl(e), i = wl(t), l = s ? xl : bl(e), c = i ? xl : bl(t);
  l = l == _l ? sa : l, c = c == _l ? sa : c;
  var u = l == sa, f = c == sa, d = l == c;
  if (d && Dl(e)) {
    if (!Dl(t))
      return !1;
    s = !0, u = !1;
  }
  if (d && !u)
    return o || (o = new _o()), s || K1(e) ? U1(e, t, r, n, a, o) : W1(e, t, l, r, n, a, o);
  if (!(r & G1)) {
    var h = u && Al.call(e, "__wrapped__"), m = f && Al.call(t, "__wrapped__");
    if (h || m) {
      var b = h ? e.value() : e, D = m ? t.value() : t;
      return o || (o = new _o()), a(b, D, r, n, o);
    }
  }
  return d ? (o || (o = new _o()), z1(e, t, r, n, a, o)) : !1;
}
var Z1 = Q1, q1 = Z1, Cl = kt;
function Yu(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Cl(e) && !Cl(t) ? e !== e && t !== t : q1(e, t, r, n, Yu, a);
}
var Nu = Yu, J1 = js, X1 = Nu, eD = 1, tD = 2;
function rD(e, t, r, n) {
  var a = r.length, o = a, s = !n;
  if (e == null)
    return !o;
  for (e = Object(e); a--; ) {
    var i = r[a];
    if (s && i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++a < o; ) {
    i = r[a];
    var l = i[0], c = e[l], u = i[1];
    if (s && i[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var f = new J1();
      if (n)
        var d = n(c, u, l, e, t, f);
      if (!(d === void 0 ? X1(u, c, eD | tD, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var nD = rD, aD = Zt;
function oD(e) {
  return e === e && !aD(e);
}
var Lu = oD, sD = Lu, iD = Ws;
function lD(e) {
  for (var t = iD(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, sD(a)];
  }
  return t;
}
var cD = lD;
function uD(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Ru = uD, fD = nD, dD = cD, vD = Ru;
function pD(e) {
  var t = dD(e);
  return t.length == 1 && t[0][2] ? vD(t[0][0], t[0][1]) : function(r) {
    return r === e || fD(r, e, t);
  };
}
var hD = pD, gD = Au, mD = ao;
function yD(e, t) {
  t = gD(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[mD(t[r++])];
  return r && r == n ? e : void 0;
}
var Fu = yD, bD = Fu;
function wD(e, t, r) {
  var n = e == null ? void 0 : bD(e, t);
  return n === void 0 ? r : n;
}
var xr = wD;
function DD(e, t) {
  return e != null && t in Object(e);
}
var _D = DD, xD = _D, AD = Mu;
function CD(e, t) {
  return e != null && AD(e, t, xD);
}
var MD = CD, kD = Nu, OD = xr, ID = MD, $D = Es, TD = Lu, PD = Ru, SD = ao, ED = 1, YD = 2;
function ND(e, t) {
  return $D(e) && TD(t) ? PD(SD(e), t) : function(r) {
    var n = OD(r, e);
    return n === void 0 && n === t ? ID(r, e) : kD(t, n, ED | YD);
  };
}
var LD = ND;
function RD(e) {
  return e;
}
var zs = RD;
function FD(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var BD = FD, jD = Fu;
function HD(e) {
  return function(t) {
    return jD(t, e);
  };
}
var UD = HD, WD = BD, zD = UD, KD = Es, GD = ao;
function VD(e) {
  return KD(e) ? WD(GD(e)) : zD(e);
}
var QD = VD, ZD = hD, qD = LD, JD = zs, XD = Mt, e_ = QD;
function t_(e) {
  return typeof e == "function" ? e : e == null ? JD : typeof e == "object" ? XD(e) ? qD(e[0], e[1]) : ZD(e) : e_(e);
}
var Bu = t_;
function r_(e) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), s = n(t), i = s.length; i--; ) {
      var l = s[e ? i : ++a];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var n_ = r_, a_ = n_, o_ = a_(), ju = o_, s_ = ju, i_ = Ws;
function l_(e, t) {
  return e && s_(e, t, i_);
}
var Hu = l_, c_ = Vn;
function u_(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!c_(r))
      return e(r, n);
    for (var a = r.length, o = t ? a : -1, s = Object(r); (t ? o-- : ++o < a) && n(s[o], o, s) !== !1; )
      ;
    return r;
  };
}
var f_ = u_, d_ = Hu, v_ = f_, p_ = v_(d_), h_ = p_, g_ = h_;
function m_(e, t) {
  var r;
  return g_(e, function(n, a, o) {
    return r = t(n, a, o), !r;
  }), !!r;
}
var y_ = m_, b_ = ln, w_ = Vn, D_ = Fs, __ = Zt;
function x_(e, t, r) {
  if (!__(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? w_(r) && D_(t, r.length) : n == "string" && t in r) ? b_(r[t], e) : !1;
}
var Ks = x_, A_ = Iu, C_ = Bu, M_ = y_, k_ = Mt, O_ = Ks;
function I_(e, t, r) {
  var n = k_(e) ? A_ : M_;
  return r && O_(e, t, r) && (t = void 0), n(e, C_(t));
}
var $_ = I_, T_ = Ft, P_ = kt, S_ = "[object Boolean]";
function E_(e) {
  return e === !0 || e === !1 || P_(e) && T_(e) == S_;
}
var Y_ = E_, N_ = Ft, L_ = kt, R_ = "[object Number]";
function F_(e) {
  return typeof e == "number" || L_(e) && N_(e) == R_;
}
var Ct = F_, B_ = Yr, j_ = function() {
  try {
    var e = B_(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Uu = j_, Ml = Uu;
function H_(e, t, r) {
  t == "__proto__" && Ml ? Ml(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var oo = H_, U_ = oo, W_ = ln, z_ = Object.prototype, K_ = z_.hasOwnProperty;
function G_(e, t, r) {
  var n = e[t];
  (!(K_.call(e, t) && W_(n, r)) || r === void 0 && !(t in e)) && U_(e, t, r);
}
var V_ = G_, Q_ = oo, Z_ = Hu, q_ = Bu;
function J_(e, t) {
  var r = {};
  return t = q_(t), Z_(e, function(n, a, o) {
    Q_(r, a, t(n, a, o));
  }), r;
}
var X_ = J_;
function ex(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var Wu = ex, tx = Wu, kl = Math.max;
function rx(e, t, r) {
  return t = kl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, o = kl(n.length - t, 0), s = Array(o); ++a < o; )
      s[a] = n[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = n[a];
    return i[t] = r(s), tx(e, this, i);
  };
}
var nx = rx;
function ax(e) {
  return function() {
    return e;
  };
}
var ox = ax, sx = ox, Ol = Uu, ix = zs, lx = Ol ? function(e, t) {
  return Ol(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: sx(t),
    writable: !0
  });
} : ix, cx = lx, ux = 800, fx = 16, dx = Date.now;
function vx(e) {
  var t = 0, r = 0;
  return function() {
    var n = dx(), a = fx - (n - r);
    if (r = n, a > 0) {
      if (++t >= ux)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var px = vx, hx = cx, gx = px, mx = gx(hx), yx = mx, bx = zs, wx = nx, Dx = yx;
function _x(e, t) {
  return Dx(wx(e, t, bx), e + "");
}
var Gs = _x;
function xx(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ax = xx, Cx = Zt, Mx = Us, kx = Ax, Ox = Object.prototype, Ix = Ox.hasOwnProperty;
function $x(e) {
  if (!Cx(e))
    return kx(e);
  var t = Mx(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Ix.call(e, n)) || r.push(n);
  return r;
}
var Tx = $x, Px = Pu, Sx = Tx, Ex = Vn;
function Yx(e) {
  return Ex(e) ? Px(e, !0) : Sx(e);
}
var Vs = Yx, Nx = Gs, Lx = ln, Rx = Ks, Fx = Vs, zu = Object.prototype, Bx = zu.hasOwnProperty, jx = Nx(function(e, t) {
  e = Object(e);
  var r = -1, n = t.length, a = n > 2 ? t[2] : void 0;
  for (a && Rx(t[0], t[1], a) && (n = 1); ++r < n; )
    for (var o = t[r], s = Fx(o), i = -1, l = s.length; ++i < l; ) {
      var c = s[i], u = e[c];
      (u === void 0 || Lx(u, zu[c]) && !Bx.call(e, c)) && (e[c] = o[c]);
    }
  return e;
}), Il = jx, Hx = oo, Ux = ln;
function Wx(e, t, r) {
  (r !== void 0 && !Ux(e[t], r) || r === void 0 && !(t in e)) && Hx(e, t, r);
}
var Ku = Wx, Oa = {}, zx = {
  get exports() {
    return Oa;
  },
  set exports(e) {
    Oa = e;
  }
};
(function(e, t) {
  var r = Rt, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, o = a && a.exports === n, s = o ? r.Buffer : void 0, i = s ? s.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var f = c.length, d = i ? i(f) : new c.constructor(f);
    return c.copy(d), d;
  }
  e.exports = l;
})(zx, Oa);
var $l = Tu;
function Kx(e) {
  var t = new e.constructor(e.byteLength);
  return new $l(t).set(new $l(e)), t;
}
var Gx = Kx, Vx = Gx;
function Qx(e, t) {
  var r = t ? Vx(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Zx = Qx;
function qx(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Jx = qx, Xx = Zt, Tl = Object.create, eA = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Xx(t))
      return {};
    if (Tl)
      return Tl(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), tA = eA, rA = Su, nA = rA(Object.getPrototypeOf, Object), Gu = nA, aA = tA, oA = Gu, sA = Us;
function iA(e) {
  return typeof e.constructor == "function" && !sA(e) ? aA(oA(e)) : {};
}
var lA = iA, cA = Vn, uA = kt;
function fA(e) {
  return uA(e) && cA(e);
}
var dA = fA, vA = Ft, pA = Gu, hA = kt, gA = "[object Object]", mA = Function.prototype, yA = Object.prototype, Vu = mA.toString, bA = yA.hasOwnProperty, wA = Vu.call(Object);
function DA(e) {
  if (!hA(e) || vA(e) != gA)
    return !1;
  var t = pA(e);
  if (t === null)
    return !0;
  var r = bA.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Vu.call(r) == wA;
}
var _A = DA;
function xA(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Qu = xA, AA = V_, CA = oo;
function MA(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var i = t[o], l = n ? n(r[i], e[i], i, r, e) : void 0;
    l === void 0 && (l = e[i]), a ? CA(r, i, l) : AA(r, i, l);
  }
  return r;
}
var kA = MA, OA = kA, IA = Vs;
function $A(e) {
  return OA(e, IA(e));
}
var TA = $A, Pl = Ku, PA = Oa, SA = Zx, EA = Jx, YA = lA, Sl = Rs, El = Mt, NA = dA, LA = tn, RA = Er, FA = Zt, BA = _A, jA = Hs, Yl = Qu, HA = TA;
function UA(e, t, r, n, a, o, s) {
  var i = Yl(e, r), l = Yl(t, r), c = s.get(l);
  if (c) {
    Pl(e, r, c);
    return;
  }
  var u = o ? o(i, l, r + "", e, t, s) : void 0, f = u === void 0;
  if (f) {
    var d = El(l), h = !d && LA(l), m = !d && !h && jA(l);
    u = l, d || h || m ? El(i) ? u = i : NA(i) ? u = EA(i) : h ? (f = !1, u = PA(l, !0)) : m ? (f = !1, u = SA(l, !0)) : u = [] : BA(l) || Sl(l) ? (u = i, Sl(i) ? u = HA(i) : (!FA(i) || RA(i)) && (u = YA(l))) : f = !1;
  }
  f && (s.set(l, u), a(u, l, n, o, s), s.delete(l)), Pl(e, r, u);
}
var WA = UA, zA = js, KA = Ku, GA = ju, VA = WA, QA = Zt, ZA = Vs, qA = Qu;
function Zu(e, t, r, n, a) {
  e !== t && GA(t, function(o, s) {
    if (a || (a = new zA()), QA(o))
      VA(e, t, s, r, Zu, n, a);
    else {
      var i = n ? n(qA(e, s), o, s + "", e, t, a) : void 0;
      i === void 0 && (i = o), KA(e, s, i);
    }
  }, ZA);
}
var qu = Zu, JA = qu, Nl = Zt;
function Ju(e, t, r, n, a, o) {
  return Nl(e) && Nl(t) && (o.set(t, e), JA(e, t, void 0, Ju, o), o.delete(t)), e;
}
var XA = Ju, eC = Gs, tC = Ks;
function rC(e) {
  return eC(function(t, r) {
    var n = -1, a = r.length, o = a > 1 ? r[a - 1] : void 0, s = a > 2 ? r[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && tC(r[0], r[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++n < a; ) {
      var i = r[n];
      i && e(t, i, n, o);
    }
    return t;
  });
}
var nC = rC, aC = qu, oC = nC, sC = oC(function(e, t, r, n) {
  aC(e, t, r, n);
}), iC = sC, lC = Wu, cC = Gs, uC = XA, fC = iC, dC = cC(function(e) {
  return e.push(void 0, uC), lC(fC, void 0, e);
}), Hn = dC;
function vC(e) {
  return e && e.length ? e[0] : void 0;
}
var Xu = vC;
function pC(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Hr = pC;
const hC = (e) => Object.prototype.toString.call(e).slice(8, -1), Gr = (e) => D0(e) && !isNaN(e.getTime()), Gt = (e) => hC(e) === "Object", ef = ku, Ll = (e, t) => $_(t, (r) => ku(e, r)), De = (e, t, r = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${r}${e}`;
  return e;
}, wt = (e) => Array.isArray(e), Ht = (e) => wt(e) && e.length > 0, Ia = (e) => e == null ? null : document && Et(e) ? document.querySelector(e) : e.$el ?? e, or = (e, t, r, n = void 0) => {
  e.removeEventListener(t, r, n);
}, sr = (e, t, r, n = void 0) => (e.addEventListener(t, r, n), () => or(e, t, r, n)), ha = (e, t) => !!e && !!t && (e === t || e.contains(t)), ia = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, tf = (e, ...t) => {
  const r = {};
  let n;
  for (n in e)
    t.includes(n) || (r[n] = e[n]);
  return r;
}, rf = (e, t) => {
  const r = {};
  return t.forEach((n) => {
    n in e && (r[n] = e[n]);
  }), r;
};
function gC(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var $a = {}, mC = {
  get exports() {
    return $a;
  },
  set exports(e) {
    $a = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n) {
    if (n === null || n === !0 || n === !1)
      return NaN;
    var a = Number(n);
    return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
  }
  e.exports = t.default;
})(mC, $a);
const yC = /* @__PURE__ */ yu($a);
var Ta = {}, bC = {
  get exports() {
    return Ta;
  },
  set exports(e) {
    Ta = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n) {
    var a = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
    return a.setUTCFullYear(n.getFullYear()), n.getTime() - a.getTime();
  }
  e.exports = t.default;
})(bC, Ta);
const Rl = /* @__PURE__ */ yu(Ta);
function wC(e, t) {
  var r = AC(t);
  return r.formatToParts ? _C(r, e) : xC(r, e);
}
var DC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function _C(e, t) {
  try {
    for (var r = e.formatToParts(t), n = [], a = 0; a < r.length; a++) {
      var o = DC[r[a].type];
      o >= 0 && (n[o] = parseInt(r[a].value, 10));
    }
    return n;
  } catch (s) {
    if (s instanceof RangeError)
      return [NaN];
    throw s;
  }
}
function xC(e, t) {
  var r = e.format(t).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);
  return [n[3], n[1], n[2], n[4], n[5], n[6]];
}
var xo = {};
function AC(e) {
  if (!xo[e]) {
    var t = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), r = t === "06/25/2014, 00:00:00" || t === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    xo[e] = r ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return xo[e];
}
function nf(e, t, r, n, a, o, s) {
  var i = /* @__PURE__ */ new Date(0);
  return i.setUTCFullYear(e, t, r), i.setUTCHours(n, a, o, s), i;
}
var Fl = 36e5, CC = 6e4, Ao = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function MC(e, t, r) {
  var n, a;
  if (!e || (n = Ao.timezoneZ.exec(e), n))
    return 0;
  var o;
  if (n = Ao.timezoneHH.exec(e), n)
    return o = parseInt(n[1], 10), Bl(o) ? -(o * Fl) : NaN;
  if (n = Ao.timezoneHHMM.exec(e), n) {
    o = parseInt(n[1], 10);
    var s = parseInt(n[2], 10);
    return Bl(o, s) ? (a = Math.abs(o) * Fl + s * CC, o > 0 ? -a : a) : NaN;
  }
  if (IC(e)) {
    t = new Date(t || Date.now());
    var i = r ? t : kC(t), l = qo(i, e), c = r ? l : OC(t, l, e);
    return -c;
  }
  return NaN;
}
function kC(e) {
  return nf(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function qo(e, t) {
  var r = wC(e, t), n = nf(
    r[0],
    r[1] - 1,
    r[2],
    r[3] % 24,
    r[4],
    r[5],
    0
  ).getTime(), a = e.getTime(), o = a % 1e3;
  return a -= o >= 0 ? o : 1e3 + o, n - a;
}
function OC(e, t, r) {
  var n = e.getTime(), a = n - t, o = qo(new Date(a), r);
  if (t === o)
    return t;
  a -= o - t;
  var s = qo(new Date(a), r);
  return o === s ? o : Math.max(o, s);
}
function Bl(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var jl = {};
function IC(e) {
  if (jl[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), jl[e] = !0, !0;
  } catch {
    return !1;
  }
}
var $C = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const TC = $C;
var Co = 36e5, Hl = 6e4, PC = 2, rt = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: TC
};
function SC(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var r = t || {}, n = r.additionalDigits == null ? PC : yC(r.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = EC(e), o = YC(a.date, n), s = o.year, i = o.restDateString, l = NC(i, s);
  if (isNaN(l))
    return /* @__PURE__ */ new Date(NaN);
  if (l) {
    var c = l.getTime(), u = 0, f;
    if (a.time && (u = LC(a.time), isNaN(u)))
      return /* @__PURE__ */ new Date(NaN);
    if (a.timeZone || r.timeZone) {
      if (f = MC(a.timeZone || r.timeZone, new Date(c + u)), isNaN(f))
        return /* @__PURE__ */ new Date(NaN);
    } else
      f = Rl(new Date(c + u)), f = Rl(new Date(c + u + f));
    return new Date(c + u + f);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function EC(e) {
  var t = {}, r = rt.dateTimePattern.exec(e), n;
  if (r ? (t.date = r[1], n = r[3]) : (r = rt.datePattern.exec(e), r ? (t.date = r[1], n = r[2]) : (t.date = null, n = e)), n) {
    var a = rt.timeZone.exec(n);
    a ? (t.time = n.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = n;
  }
  return t;
}
function YC(e, t) {
  var r = rt.YYY[t], n = rt.YYYYY[t], a;
  if (a = rt.YYYY.exec(e) || n.exec(e), a) {
    var o = a[1];
    return {
      year: parseInt(o, 10),
      restDateString: e.slice(o.length)
    };
  }
  if (a = rt.YY.exec(e) || r.exec(e), a) {
    var s = a[1];
    return {
      year: parseInt(s, 10) * 100,
      restDateString: e.slice(s.length)
    };
  }
  return {
    year: null
  };
}
function NC(e, t) {
  if (t === null)
    return null;
  var r, n, a, o;
  if (e.length === 0)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  if (r = rt.MM.exec(e), r)
    return n = /* @__PURE__ */ new Date(0), a = parseInt(r[1], 10) - 1, Wl(t, a) ? (n.setUTCFullYear(t, a), n) : /* @__PURE__ */ new Date(NaN);
  if (r = rt.DDD.exec(e), r) {
    n = /* @__PURE__ */ new Date(0);
    var s = parseInt(r[1], 10);
    return BC(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (r = rt.MMDD.exec(e), r) {
    n = /* @__PURE__ */ new Date(0), a = parseInt(r[1], 10) - 1;
    var i = parseInt(r[2], 10);
    return Wl(t, a, i) ? (n.setUTCFullYear(t, a, i), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (r = rt.Www.exec(e), r)
    return o = parseInt(r[1], 10) - 1, zl(t, o) ? Ul(t, o) : /* @__PURE__ */ new Date(NaN);
  if (r = rt.WwwD.exec(e), r) {
    o = parseInt(r[1], 10) - 1;
    var l = parseInt(r[2], 10) - 1;
    return zl(t, o, l) ? Ul(t, o, l) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function LC(e) {
  var t, r, n;
  if (t = rt.HH.exec(e), t)
    return r = parseFloat(t[1].replace(",", ".")), Mo(r) ? r % 24 * Co : NaN;
  if (t = rt.HHMM.exec(e), t)
    return r = parseInt(t[1], 10), n = parseFloat(t[2].replace(",", ".")), Mo(r, n) ? r % 24 * Co + n * Hl : NaN;
  if (t = rt.HHMMSS.exec(e), t) {
    r = parseInt(t[1], 10), n = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return Mo(r, n, a) ? r % 24 * Co + n * Hl + a * 1e3 : NaN;
  }
  return null;
}
function Ul(e, t, r) {
  t = t || 0, r = r || 0;
  var n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  var a = n.getUTCDay() || 7, o = t * 7 + r + 1 - a;
  return n.setUTCDate(n.getUTCDate() + o), n;
}
var RC = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], FC = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function af(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Wl(e, t, r) {
  if (t < 0 || t > 11)
    return !1;
  if (r != null) {
    if (r < 1)
      return !1;
    var n = af(e);
    if (n && r > FC[t] || !n && r > RC[t])
      return !1;
  }
  return !0;
}
function BC(e, t) {
  if (t < 1)
    return !1;
  var r = af(e);
  return !(r && t > 366 || !r && t > 365);
}
function zl(e, t, r) {
  return !(t < 0 || t > 52 || r != null && (r < 0 || r > 6));
}
function Mo(e, t, r) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || r != null && (r < 0 || r >= 60));
}
function Ze(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function ga(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ga = function(r) {
    return typeof r;
  } : ga = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ga(e);
}
function qt(e) {
  Ze(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || ga(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function vn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var jC = {};
function Qs() {
  return jC;
}
function Ir(e, t) {
  var r, n, a, o, s, i, l, c;
  Ze(1, arguments);
  var u = Qs(), f = vn((r = (n = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && a !== void 0 ? a : u.weekStartsOn) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var d = qt(e), h = d.getDay(), m = (h < f ? 7 : 0) + h - f;
  return d.setDate(d.getDate() - m), d.setHours(0, 0, 0, 0), d;
}
function Kl(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var HC = 6048e5;
function UC(e, t, r) {
  Ze(2, arguments);
  var n = Ir(e, r), a = Ir(t, r), o = n.getTime() - Kl(n), s = a.getTime() - Kl(a);
  return Math.round((o - s) / HC);
}
function WC(e) {
  Ze(1, arguments);
  var t = qt(e), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function zC(e) {
  Ze(1, arguments);
  var t = qt(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function KC(e, t) {
  return Ze(1, arguments), UC(WC(e), zC(e), t) + 1;
}
function GC(e, t) {
  var r, n, a, o, s, i, l, c;
  Ze(1, arguments);
  var u = qt(e), f = u.getFullYear(), d = Qs(), h = vn((r = (n = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : d.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = d.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = /* @__PURE__ */ new Date(0);
  m.setFullYear(f + 1, 0, h), m.setHours(0, 0, 0, 0);
  var b = Ir(m, t), D = /* @__PURE__ */ new Date(0);
  D.setFullYear(f, 0, h), D.setHours(0, 0, 0, 0);
  var y = Ir(D, t);
  return u.getTime() >= b.getTime() ? f + 1 : u.getTime() >= y.getTime() ? f : f - 1;
}
function VC(e, t) {
  var r, n, a, o, s, i, l, c;
  Ze(1, arguments);
  var u = Qs(), f = vn((r = (n = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : u.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), d = GC(e, t), h = /* @__PURE__ */ new Date(0);
  h.setFullYear(d, 0, f), h.setHours(0, 0, 0, 0);
  var m = Ir(h, t);
  return m;
}
var QC = 6048e5;
function ZC(e, t) {
  Ze(1, arguments);
  var r = qt(e), n = Ir(r, t).getTime() - VC(r, t).getTime();
  return Math.round(n / QC) + 1;
}
function Pa(e) {
  return Ze(1, arguments), Ir(e, {
    weekStartsOn: 1
  });
}
function qC(e) {
  Ze(1, arguments);
  var t = qt(e), r = t.getFullYear(), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  var a = Pa(n), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  var s = Pa(o);
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= s.getTime() ? r : r - 1;
}
function JC(e) {
  Ze(1, arguments);
  var t = qC(e), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0);
  var n = Pa(r);
  return n;
}
var XC = 6048e5;
function eM(e) {
  Ze(1, arguments);
  var t = qt(e), r = Pa(t).getTime() - JC(t).getTime();
  return Math.round(r / XC) + 1;
}
function tt(e, t) {
  Ze(2, arguments);
  var r = qt(e), n = vn(t);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function Sa(e, t) {
  Ze(2, arguments);
  var r = qt(e), n = vn(t);
  if (isNaN(n))
    return /* @__PURE__ */ new Date(NaN);
  if (!n)
    return r;
  var a = r.getDate(), o = new Date(r.getTime());
  o.setMonth(r.getMonth() + n + 1, 0);
  var s = o.getDate();
  return a >= s ? o : (r.setFullYear(o.getFullYear(), o.getMonth(), a), r);
}
function Gl(e, t) {
  Ze(2, arguments);
  var r = vn(t);
  return Sa(e, r * 12);
}
const tM = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function rM({
  monthComps: e,
  prevMonthComps: t,
  nextMonthComps: r
}, n) {
  const a = [], {
    firstDayOfWeek: o,
    firstWeekday: s,
    isoWeeknumbers: i,
    weeknumbers: l,
    numDays: c,
    numWeeks: u
  } = e, f = s + (s < o ? Ve : 0) - o;
  let d = !0, h = !1, m = !1, b = 0;
  const D = new Intl.DateTimeFormat(n.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let y = t.numDays - f + 1, B = t.numDays - y + 1, F = Math.floor((y - 1) / Ve + 1), I = 1, A = t.numWeeks, G = 1, $ = t.month, M = t.year;
  const R = /* @__PURE__ */ new Date(), j = R.getDate(), X = R.getMonth() + 1, x = R.getFullYear();
  for (let H = 1; H <= VM; H++) {
    for (let ae = 1, V = o; ae <= Ve; ae++, V += V === Ve ? 1 - Ve : 1) {
      d && V === s && (y = 1, B = e.numDays, F = Math.floor((y - 1) / Ve + 1), I = Math.floor((c - y) / Ve + 1), A = 1, G = u, $ = e.month, M = e.year, d = !1, h = !0);
      const re = n.getDateFromParams(M, $, y, 0, 0, 0, 0), ee = n.getDateFromParams(M, $, y, 12, 0, 0, 0), ie = n.getDateFromParams(
        M,
        $,
        y,
        23,
        59,
        59,
        999
      ), pe = re, Y = `${De(M, 4)}-${De($, 2)}-${De(y, 2)}`, de = ae, Q = Ve - ae, Ie = l[H - 1], me = i[H - 1], Te = y === j && $ === X && M === x, _e = h && y === 1, Me = h && y === c, Ne = H === 1, Le = H === u, lt = ae === 1, qe = ae === Ve, v = mf(M, $, y);
      a.push({
        locale: n,
        id: Y,
        position: ++b,
        label: y.toString(),
        ariaLabel: D.format(new Date(M, $ - 1, y)),
        day: y,
        dayFromEnd: B,
        weekday: V,
        weekdayPosition: de,
        weekdayPositionFromEnd: Q,
        weekdayOrdinal: F,
        weekdayOrdinalFromEnd: I,
        week: A,
        weekFromEnd: G,
        weekPosition: H,
        weeknumber: Ie,
        isoWeeknumber: me,
        month: $,
        year: M,
        date: pe,
        startDate: re,
        endDate: ie,
        noonDate: ee,
        dayIndex: v,
        isToday: Te,
        isFirstDay: _e,
        isLastDay: Me,
        isDisabled: !h,
        isFocusable: !h,
        isFocused: !1,
        inMonth: h,
        inPrevMonth: d,
        inNextMonth: m,
        onTop: Ne,
        onBottom: Le,
        onLeft: lt,
        onRight: qe,
        classes: [
          `id-${Y}`,
          `day-${y}`,
          `day-from-end-${B}`,
          `weekday-${V}`,
          `weekday-position-${de}`,
          `weekday-ordinal-${F}`,
          `weekday-ordinal-from-end-${I}`,
          `week-${A}`,
          `week-from-end-${G}`,
          {
            "is-today": Te,
            "is-first-day": _e,
            "is-last-day": Me,
            "in-month": h,
            "in-prev-month": d,
            "in-next-month": m,
            "on-top": Ne,
            "on-bottom": Le,
            "on-left": lt,
            "on-right": qe
          }
        ]
      }), h && Me ? (h = !1, m = !0, y = 1, B = c, F = 1, I = Math.floor((c - y) / Ve + 1), A = 1, G = r.numWeeks, $ = r.month, M = r.year) : (y++, B--, F = Math.floor((y - 1) / Ve + 1), I = Math.floor((c - y) / Ve + 1));
    }
    A++, G--;
  }
  return a;
}
function nM(e, t, r, n) {
  const a = e.reduce((o, s, i) => {
    const l = Math.floor(i / 7);
    let c = o[l];
    return c || (c = {
      id: `week-${l + 1}`,
      title: "",
      week: s.week,
      weekPosition: s.weekPosition,
      weeknumber: s.weeknumber,
      isoWeeknumber: s.isoWeeknumber,
      weeknumberDisplay: t ? s.weeknumber : r ? s.isoWeeknumber : void 0,
      days: []
    }, o[l] = c), c.days.push(s), o;
  }, Array(e.length / Ve));
  return a.forEach((o) => {
    const s = o.days[0], i = o.days[o.days.length - 1];
    s.month === i.month ? o.title = `${n.formatDate(s.date, "MMMM YYYY")}` : s.year === i.year ? o.title = `${n.formatDate(
      s.date,
      "MMM"
    )} - ${n.formatDate(i.date, "MMM YYYY")}` : o.title = `${n.formatDate(
      s.date,
      "MMM YYYY"
    )} - ${n.formatDate(i.date, "MMM YYYY")}`;
  }), a;
}
function aM(e, t) {
  return e.days.map((r) => ({
    label: t.formatDate(r.date, t.masks.weekdays),
    weekday: r.weekday
  }));
}
function oM(e, t) {
  return `${t}.${De(e, 2)}`;
}
function of(e, t, r) {
  return rf(
    r.getDateParts(r.toDate(e)),
    tM[t]
  );
}
function sf({ day: e, week: t, month: r, year: n }, a, o, s) {
  if (o === "daily" && e) {
    const i = new Date(n, r - 1, e), l = tt(i, a);
    return {
      day: l.getDate(),
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  } else if (o === "weekly" && t) {
    const l = s.getMonthParts(r, n).firstDayOfMonth, c = tt(l, (t - 1 + a) * 7), u = s.getDateParts(c);
    return {
      week: u.week,
      month: u.month,
      year: u.year
    };
  } else {
    const i = new Date(n, r - 1, 1), l = Sa(i, a);
    return {
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  }
}
function Yt(e) {
  return e != null && e.month != null && e.year != null;
}
function Jo(e, t) {
  return !Yt(e) || !Yt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function Ea(e, t) {
  return !Yt(e) || !Yt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function sM(e, t, r) {
  return (e || !1) && !Jo(e, t) && !Ea(e, r);
}
function iM(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function lM(e, t, r, n) {
  if (!Yt(e) || !Yt(t))
    return [];
  const a = [];
  for (; !Ea(e, t); )
    a.push(e), e = sf(e, 1, r, n);
  return a;
}
function lf(e) {
  const { day: t, week: r, month: n, year: a } = e;
  let o = `${a}-${De(n, 2)}`;
  return r && (o = `${o}-w${r}`), t && (o = `${o}-${De(t, 2)}`), o;
}
function cM(e, t) {
  const { month: r, year: n, showWeeknumbers: a, showIsoWeeknumbers: o } = e, s = new Date(n, r - 1, 15), i = t.getMonthParts(r, n), l = t.getPrevMonthParts(r, n), c = t.getNextMonthParts(r, n), u = rM({ monthComps: i, prevMonthComps: l, nextMonthComps: c }, t), f = nM(u, a, o, t), d = aM(f[0], t);
  return {
    id: lf(e),
    month: r,
    year: n,
    monthTitle: t.formatDate(s, t.masks.title),
    shortMonthLabel: t.formatDate(s, "MMM"),
    monthLabel: t.formatDate(s, "MMMM"),
    shortYearLabel: n.toString().substring(2),
    yearLabel: n.toString(),
    monthComps: i,
    prevMonthComps: l,
    nextMonthComps: c,
    days: u,
    weeks: f,
    weekdays: d
  };
}
function uM(e, t) {
  const { day: r, week: n, view: a, trimWeeks: o } = e, s = {
    ...t,
    ...e,
    title: "",
    viewDays: [],
    viewWeeks: []
  };
  switch (a) {
    case "daily": {
      let i = s.days.find((c) => c.inMonth);
      r ? i = s.days.find((c) => c.day === r && c.inMonth) || i : n && (i = s.days.find((c) => c.week === n && c.inMonth));
      const l = s.weeks[i.week - 1];
      s.viewWeeks = [l], s.viewDays = [i], s.week = i.week, s.weekTitle = l.title, s.day = i.day, s.dayTitle = i.ariaLabel, s.title = s.dayTitle;
      break;
    }
    case "weekly": {
      s.week = n || 1;
      const i = s.weeks[s.week - 1];
      s.viewWeeks = [i], s.viewDays = i.days, s.weekTitle = i.title, s.title = s.weekTitle;
      break;
    }
    default: {
      s.title = s.monthTitle, s.viewWeeks = s.weeks.slice(
        0,
        o ? s.monthComps.numWeeks : void 0
      ), s.viewDays = s.days;
      break;
    }
  }
  return s;
}
class Vl {
  constructor(t, r, n) {
    te(this, "keys", []), te(this, "store", {}), this.size = t, this.createKey = r, this.createItem = n;
  }
  get(...t) {
    const r = this.createKey(...t);
    return this.store[r];
  }
  getOrSet(...t) {
    const r = this.createKey(...t);
    if (this.store[r])
      return this.store[r];
    const n = this.createItem(...t);
    if (this.keys.length >= this.size) {
      const a = this.keys.shift();
      a != null && delete this.store[a];
    }
    return this.keys.push(r), this.store[r] = n, n;
  }
}
class Vr {
  constructor(t, r = new Ya()) {
    te(this, "order"), te(this, "locale"), te(this, "start", null), te(this, "end", null), te(this, "repeat", null);
    var n;
    this.locale = r;
    const { start: a, end: o, span: s, order: i, repeat: l } = t;
    Gr(a) && (this.start = r.getDateParts(a)), Gr(o) ? this.end = r.getDateParts(o) : this.start != null && s && (this.end = r.getDateParts(tt(this.start.date, s - 1))), this.order = i ?? 0, l && (this.repeat = new Na(
      {
        from: (n = this.start) == null ? void 0 : n.date,
        ...l
      },
      {
        locale: this.locale
      }
    ));
  }
  static fromMany(t, r) {
    return (wt(t) ? t : [t]).filter((n) => n).map((n) => Vr.from(n, r));
  }
  static from(t, r) {
    if (t instanceof Vr)
      return t;
    const n = {
      start: null,
      end: null
    };
    return t != null && (wt(t) ? (n.start = t[0] ?? null, n.end = t[1] ?? null) : Gt(t) ? Object.assign(n, t) : (n.start = t, n.end = t)), n.start != null && (n.start = new Date(n.start)), n.end != null && (n.end = new Date(n.end)), new Vr(n, r);
  }
  get opts() {
    const { order: t, locale: r } = this;
    return { order: t, locale: r };
  }
  get hasRepeat() {
    return !!this.repeat;
  }
  get isSingleDay() {
    const { start: t, end: r } = this;
    return t && r && t.year === r.year && t.month === r.month && t.day === r.day;
  }
  get isMultiDay() {
    return !this.isSingleDay;
  }
  get daySpan() {
    return this.start == null || this.end == null ? this.hasRepeat ? 1 : 1 / 0 : this.end.dayIndex - this.start.dayIndex;
  }
  startsOnDay(t) {
    var r, n;
    return ((r = this.start) == null ? void 0 : r.dayIndex) === t.dayIndex || !!((n = this.repeat) != null && n.passes(t));
  }
  intersectsDay(t) {
    return this.intersectsDayRange(t, t);
  }
  intersectsRange(t) {
    var r, n;
    return this.intersectsDayRange(
      ((r = t.start) == null ? void 0 : r.dayIndex) ?? -1 / 0,
      ((n = t.end) == null ? void 0 : n.dayIndex) ?? 1 / 0
    );
  }
  intersectsDayRange(t, r) {
    return !(this.start && this.start.dayIndex > r || this.end && this.end.dayIndex < t);
  }
}
class fM {
  constructor() {
    te(this, "records", {});
  }
  render(t, r, n) {
    var a, o, s, i;
    let l = null;
    const c = n[0].dayIndex, u = n[n.length - 1].dayIndex;
    return r.hasRepeat ? n.forEach((f) => {
      var d, h;
      if (r.startsOnDay(f)) {
        const m = r.daySpan < 1 / 0 ? r.daySpan : 1;
        l = {
          startDay: f.dayIndex,
          startTime: ((d = r.start) == null ? void 0 : d.time) ?? 0,
          endDay: f.dayIndex + m - 1,
          endTime: ((h = r.end) == null ? void 0 : h.time) ?? ma
        }, this.getRangeRecords(t).push(l);
      }
    }) : r.intersectsDayRange(c, u) && (l = {
      startDay: ((a = r.start) == null ? void 0 : a.dayIndex) ?? -1 / 0,
      startTime: ((o = r.start) == null ? void 0 : o.time) ?? -1 / 0,
      endDay: ((s = r.end) == null ? void 0 : s.dayIndex) ?? 1 / 0,
      endTime: ((i = r.end) == null ? void 0 : i.time) ?? 1 / 0
    }, this.getRangeRecords(t).push(l)), l;
  }
  getRangeRecords(t) {
    let r = this.records[t.key];
    return r || (r = {
      ranges: [],
      data: t
    }, this.records[t.key] = r), r.ranges;
  }
  getCell(t, r) {
    return this.getCells(r).find((o) => o.data.key === t);
  }
  cellExists(t, r) {
    const n = this.records[t];
    return n == null ? !1 : n.ranges.some(
      (a) => a.startDay <= r && a.endDay >= r
    );
  }
  getCells(t) {
    const r = Object.values(this.records), n = [], { dayIndex: a } = t;
    return r.forEach(({ data: o, ranges: s }) => {
      s.filter((i) => i.startDay <= a && i.endDay >= a).forEach((i) => {
        const l = a === i.startDay, c = a === i.endDay, u = l ? i.startTime : 0, f = new Date(t.startDate.getTime() + u), d = c ? i.endTime : ma, h = new Date(t.endDate.getTime() + d), m = u === 0 && d === ma, b = o.order || 0;
        n.push({
          ...i,
          data: o,
          onStart: l,
          onEnd: c,
          startTime: u,
          startDate: f,
          endTime: d,
          endDate: h,
          allDay: m,
          order: b
        });
      });
    }), n.sort((o, s) => o.order - s.order), n;
  }
}
const Vt = {
  // Arabic
  ar: { dow: 7, L: "D/‏M/‏YYYY" },
  // Bulgarian
  bg: { dow: 2, L: "D.MM.YYYY" },
  // Catalan
  ca: { dow: 2, L: "DD/MM/YYYY" },
  // Chinese (China)
  "zh-CN": { dow: 2, L: "YYYY/MM/DD" },
  // Chinese (Taiwan)
  "zh-TW": { dow: 1, L: "YYYY/MM/DD" },
  // Croatian
  hr: { dow: 2, L: "DD.MM.YYYY" },
  // Czech
  cs: { dow: 2, L: "DD.MM.YYYY" },
  // Danish
  da: { dow: 2, L: "DD.MM.YYYY" },
  // Dutch
  nl: { dow: 2, L: "DD-MM-YYYY" },
  // English (US)
  "en-US": { dow: 1, L: "MM/DD/YYYY" },
  // English (Australia)
  "en-AU": { dow: 2, L: "DD/MM/YYYY" },
  // English (Canada)
  "en-CA": { dow: 1, L: "YYYY-MM-DD" },
  // English (Great Britain)
  "en-GB": { dow: 2, L: "DD/MM/YYYY" },
  // English (Ireland)
  "en-IE": { dow: 2, L: "DD-MM-YYYY" },
  // English (New Zealand)
  "en-NZ": { dow: 2, L: "DD/MM/YYYY" },
  // English (South Africa)
  "en-ZA": { dow: 1, L: "YYYY/MM/DD" },
  // Esperanto
  eo: { dow: 2, L: "YYYY-MM-DD" },
  // Estonian
  et: { dow: 2, L: "DD.MM.YYYY" },
  // Finnish
  fi: { dow: 2, L: "DD.MM.YYYY" },
  // French
  fr: { dow: 2, L: "DD/MM/YYYY" },
  // French (Canada)
  "fr-CA": { dow: 1, L: "YYYY-MM-DD" },
  // French (Switzerland)
  "fr-CH": { dow: 2, L: "DD.MM.YYYY" },
  // German
  de: { dow: 2, L: "DD.MM.YYYY" },
  // Hebrew
  he: { dow: 1, L: "DD.MM.YYYY" },
  // Indonesian
  id: { dow: 2, L: "DD/MM/YYYY" },
  // Italian
  it: { dow: 2, L: "DD/MM/YYYY" },
  // Japanese
  ja: { dow: 1, L: "YYYY年M月D日" },
  // Korean
  ko: { dow: 1, L: "YYYY.MM.DD" },
  // Latvian
  lv: { dow: 2, L: "DD.MM.YYYY" },
  // Lithuanian
  lt: { dow: 2, L: "DD.MM.YYYY" },
  // Macedonian
  mk: { dow: 2, L: "D.MM.YYYY" },
  // Norwegian
  nb: { dow: 2, L: "D. MMMM YYYY" },
  nn: { dow: 2, L: "D. MMMM YYYY" },
  // Polish
  pl: { dow: 2, L: "DD.MM.YYYY" },
  // Portuguese
  pt: { dow: 2, L: "DD/MM/YYYY" },
  // Romanian
  ro: { dow: 2, L: "DD.MM.YYYY" },
  // Russian
  ru: { dow: 2, L: "DD.MM.YYYY" },
  // Slovak
  sk: { dow: 2, L: "DD.MM.YYYY" },
  // Spanish (Spain)
  "es-ES": { dow: 2, L: "DD/MM/YYYY" },
  // Spanish (Mexico)
  "es-MX": { dow: 2, L: "DD/MM/YYYY" },
  // Swedish
  sv: { dow: 2, L: "YYYY-MM-DD" },
  // Thai
  th: { dow: 1, L: "DD/MM/YYYY" },
  // Turkish
  tr: { dow: 2, L: "DD.MM.YYYY" },
  // Ukrainian
  uk: { dow: 2, L: "DD.MM.YYYY" },
  // Vietnam
  vi: { dow: 2, L: "DD/MM/YYYY" }
};
Vt.en = Vt["en-US"];
Vt.es = Vt["es-ES"];
Vt.no = Vt.nb;
Vt.zh = Vt["zh-CN"];
const dM = Object.entries(Vt).reduce(
  (e, [t, { dow: r, L: n }]) => (e[t] = {
    id: t,
    firstDayOfWeek: r,
    masks: { L: n }
  }, e),
  {}
), vM = "MMMM YYYY", pM = "W", hM = "MMM", gM = "h A", mM = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], yM = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], bM = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], wM = [
  "h:mm A"
], DM = [
  "HH:mm"
], _M = "WWW, MMM D, YYYY", xM = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], AM = "iso", CM = "YYYY-MM-DDTHH:mm:ss.SSSZ", MM = {
  title: vM,
  weekdays: pM,
  navMonths: hM,
  hours: gM,
  input: mM,
  inputDateTime: yM,
  inputDateTime24hr: bM,
  inputTime: wM,
  inputTime24hr: DM,
  dayPopover: _M,
  data: xM,
  model: AM,
  iso: CM
}, kM = 300, OM = 60, IM = 80, $M = {
  maxSwipeTime: kM,
  minHorizontalSwipeDistance: OM,
  maxVerticalSwipeDistance: IM
}, TM = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: $M,
  masks: MM,
  locales: dM,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, Xo = an(TM), PM = _(() => X_(Xo.locales, (e) => (e.masks = Hn(e.masks, Xo.masks), e))), fr = (e) => typeof window < "u" && ef(window.__vcalendar__, e) ? xr(window.__vcalendar__, e) : xr(Xo, e), SM = 12, EM = 5;
function YM(e, t) {
  const r = new Intl.DateTimeFormat().resolvedOptions().locale;
  let n;
  Et(e) ? n = e : ef(e, "id") && (n = e.id), n = (n || r).toLowerCase();
  const a = Object.keys(t), o = (l) => a.find((c) => c.toLowerCase() === l);
  n = o(n) || o(n.substring(0, 2)) || r;
  const s = {
    ...t["en-IE"],
    ...t[n],
    id: n,
    monthCacheSize: SM,
    pageCacheSize: EM
  };
  return Gt(e) ? Hn(e, s) : s;
}
class Ya {
  constructor(t = void 0, r) {
    te(this, "id"), te(this, "daysInWeek"), te(this, "firstDayOfWeek"), te(this, "masks"), te(this, "timezone"), te(this, "hourLabels"), te(this, "dayNames"), te(this, "dayNamesShort"), te(this, "dayNamesShorter"), te(this, "dayNamesNarrow"), te(this, "monthNames"), te(this, "monthNamesShort"), te(this, "relativeTimeNames"), te(this, "amPm", ["am", "pm"]), te(this, "monthCache"), te(this, "pageCache");
    const { id: n, firstDayOfWeek: a, masks: o, monthCacheSize: s, pageCacheSize: i } = YM(t, PM.value);
    this.monthCache = new Vl(
      s,
      nk,
      ak
    ), this.pageCache = new Vl(i, lf, cM), this.id = n, this.daysInWeek = Ve, this.firstDayOfWeek = gC(a, 1, Ve), this.masks = o, this.timezone = r || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = ko("long", this.id), this.dayNamesShort = ko("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = ko("narrow", this.id), this.monthNames = ec("long", this.id), this.monthNamesShort = ec("short", this.id), this.relativeTimeNames = ik(this.id);
  }
  formatDate(t, r) {
    return dk(t, r, this);
  }
  parseDate(t, r) {
    return tc(t, r, this);
  }
  toDate(t, r = {}) {
    const n = /* @__PURE__ */ new Date(NaN);
    let a = n;
    const { fillDate: o, mask: s, patch: i, rules: l } = r;
    if (Ct(t) ? (r.type = "number", a = /* @__PURE__ */ new Date(+t)) : Et(t) ? (r.type = "string", a = t ? tc(t, s || "iso", this) : n) : Gr(t) ? (r.type = "date", a = new Date(t.getTime())) : Zs(t) && (r.type = "object", a = this.getDateFromParts(t)), a && (i || l)) {
      let c = this.getDateParts(a);
      if (i && o != null) {
        const u = this.getDateParts(this.toDate(o));
        c = this.getDateParts(
          this.toDate({ ...u, ...rf(c, GM[i]) })
        );
      }
      l && (c = fk(c, l)), a = this.getDateFromParts(c);
    }
    return a || n;
  }
  toDateOrNull(t, r = {}) {
    const n = this.toDate(t, r);
    return isNaN(n.getTime()) ? null : n;
  }
  fromDate(t, { type: r, mask: n } = {}) {
    switch (r) {
      case "number":
        return t ? t.getTime() : NaN;
      case "string":
        return t ? this.formatDate(t, n || "iso") : "";
      case "object":
        return t ? this.getDateParts(t) : null;
      default:
        return t ? new Date(t) : null;
    }
  }
  range(t) {
    return Vr.from(t, this);
  }
  ranges(t) {
    return Vr.fromMany(t, this);
  }
  getDateParts(t) {
    return rk(t, this);
  }
  getDateFromParts(t) {
    return bf(t, this.timezone);
  }
  getDateFromParams(t, r, n, a, o, s, i) {
    return this.getDateFromParts({
      year: t,
      month: r,
      day: n,
      hours: a,
      minutes: o,
      seconds: s,
      milliseconds: i
    });
  }
  getPage(t) {
    const r = this.pageCache.getOrSet(t, this);
    return uM(t, r);
  }
  getMonthParts(t, r) {
    const { firstDayOfWeek: n } = this;
    return this.monthCache.getOrSet(t, r, n);
  }
  getThisMonthParts() {
    const t = /* @__PURE__ */ new Date();
    return this.getMonthParts(
      t.getMonth() + 1,
      t.getFullYear()
    );
  }
  getPrevMonthParts(t, r) {
    return t === 1 ? this.getMonthParts(12, r - 1) : this.getMonthParts(t - 1, r);
  }
  getNextMonthParts(t, r) {
    return t === 12 ? this.getMonthParts(1, r + 1) : this.getMonthParts(t + 1, r);
  }
  getHourLabels() {
    return sk().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
var Br = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(Br || {}), cf = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(cf || {}), uf = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(uf || {}), ff = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(ff || {});
class NM {
  constructor(t, r, n) {
    te(this, "validated", !0), this.type = t, this.interval = r, this.from = n, this.from || (console.error(
      'A valid "from" date is required for date interval rule. This rule will be skipped.'
    ), this.validated = !1);
  }
  passes(t) {
    if (!this.validated)
      return !0;
    const { date: r } = t;
    switch (this.type) {
      case "days":
        return qs(this.from.date, r) % this.interval === 0;
      case "weeks":
        return ek(this.from.date, r) % this.interval === 0;
      case "months":
        return tk(this.from.date, r) % this.interval === 0;
      case "years":
        return yf(this.from.date, r) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class pn {
  constructor(t, r, n, a) {
    te(this, "components", []), this.type = t, this.validator = n, this.getter = a, this.components = this.normalizeComponents(r);
  }
  static create(t, r) {
    switch (t) {
      case "days":
        return new LM(r);
      case "weekdays":
        return new RM(r);
      case "weeks":
        return new FM(r);
      case "months":
        return new BM(r);
      case "years":
        return new jM(r);
    }
  }
  normalizeComponents(t) {
    if (this.validator(t))
      return [t];
    if (!wt(t))
      return [];
    const r = [];
    return t.forEach((n) => {
      if (!this.validator(n)) {
        console.error(
          `Component value ${n} in invalid for "${this.type}" rule. This rule will be skipped.`
        );
        return;
      }
      r.push(n);
    }), r;
  }
  passes(t) {
    return this.getter(t).some((a) => this.components.includes(a));
  }
}
class LM extends pn {
  constructor(t) {
    super(
      "days",
      t,
      WM,
      ({ day: r, dayFromEnd: n }) => [r, -n]
    );
  }
}
class RM extends pn {
  constructor(t) {
    super(
      "weekdays",
      t,
      es,
      ({ weekday: r }) => [r]
    );
  }
}
class FM extends pn {
  constructor(t) {
    super(
      "weeks",
      t,
      zM,
      ({ week: r, weekFromEnd: n }) => [r, -n]
    );
  }
}
class BM extends pn {
  constructor(t) {
    super("months", t, KM, ({ month: r }) => [
      r
    ]);
  }
}
class jM extends pn {
  constructor(t) {
    super("years", t, Ct, ({ year: r }) => [r]);
  }
}
class HM {
  constructor(t, r) {
    te(this, "components"), this.type = t, this.components = this.normalizeComponents(r);
  }
  normalizeArrayConfig(t) {
    const r = [];
    return t.forEach((n, a) => {
      if (Ct(n)) {
        if (a === 0)
          return;
        if (!Ql(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!es(n)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        r.push([t[0], n]);
      } else
        wt(n) && r.push(...this.normalizeArrayConfig(n));
    }), r;
  }
  normalizeComponents(t) {
    const r = [];
    return t.forEach((n, a) => {
      if (Ct(n)) {
        if (a === 0)
          return;
        if (!Ql(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!es(n)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        r.push([t[0], n]);
      } else
        wt(n) && r.push(...this.normalizeArrayConfig(n));
    }), r;
  }
  passes(t) {
    const { weekday: r, weekdayOrdinal: n, weekdayOrdinalFromEnd: a } = t;
    return this.components.some(
      ([o, s]) => (o === n || o === -a) && r === s
    );
  }
}
class UM {
  constructor(t) {
    te(this, "type", "function"), te(this, "validated", !0), this.fn = t, Er(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class Na {
  constructor(t, r = {}, n) {
    te(this, "validated", !0), te(this, "config"), te(this, "type", Br.Any), te(this, "from"), te(this, "until"), te(this, "rules", []), te(this, "locale", new Ya()), this.parent = n, r.locale && (this.locale = r.locale), this.config = t, Er(t) ? (this.type = Br.All, this.rules = [new UM(t)]) : wt(t) ? (this.type = Br.Any, this.rules = t.map((a) => new Na(a, r, this))) : Gt(t) ? (this.type = Br.All, this.from = t.from ? this.locale.getDateParts(t.from) : n == null ? void 0 : n.from, this.until = t.until ? this.locale.getDateParts(t.until) : n == null ? void 0 : n.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const r = [];
    if (t.every && (Et(t.every) && (t.every = [1, `${t.every}s`]), wt(t.every))) {
      const [n = 1, a = cf.Days] = t.every;
      r.push(new NM(a, n, this.from));
    }
    return Object.values(uf).forEach((n) => {
      n in t && r.push(pn.create(n, t[n]));
    }), Object.values(ff).forEach((n) => {
      n in t && r.push(new HM(n, t[n]));
    }), t.on != null && (wt(t.on) || (t.on = [t.on]), r.push(
      new Na(t.on, { locale: this.locale }, this.parent)
    )), r;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Br.Any ? this.rules.some((r) => r.passes(t)) : this.rules.every((r) => r.passes(t)) : !0;
  }
}
function WM(e) {
  return Ct(e) ? e >= 1 && e <= 31 : !1;
}
function es(e) {
  return Ct(e) ? e >= 1 && e <= 7 : !1;
}
function zM(e) {
  return Ct(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function KM(e) {
  return Ct(e) ? e >= 1 && e <= 12 : !1;
}
function Ql(e) {
  return !(!Ct(e) || e < -5 || e > 5 || e === 0);
}
const GM = {
  dateTime: [
    "year",
    "month",
    "day",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
  ],
  date: ["year", "month", "day"],
  time: ["hours", "minutes", "seconds", "milliseconds"]
}, Ve = 7, VM = 6, df = 1e3, vf = df * 60, pf = vf * 60, ma = pf * 24, QM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ZM = ["L", "iso"], Cn = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, hf = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, qM = /\[([^]*?)\]/gm, Zl = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return De(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return De(e.weekday - 1, 2);
  },
  W(e, t) {
    return t.dayNamesNarrow[e.weekday - 1];
  },
  WW(e, t) {
    return t.dayNamesShorter[e.weekday - 1];
  },
  WWW(e, t) {
    return t.dayNamesShort[e.weekday - 1];
  },
  WWWW(e, t) {
    return t.dayNames[e.weekday - 1];
  },
  M(e) {
    return e.month;
  },
  MM(e) {
    return De(e.month, 2);
  },
  MMM(e, t) {
    return t.monthNamesShort[e.month - 1];
  },
  MMMM(e, t) {
    return t.monthNames[e.month - 1];
  },
  YY(e) {
    return String(e.year).substr(2);
  },
  YYYY(e) {
    return De(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return De(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return De(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return De(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return De(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return De(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return De(e.milliseconds, 3);
  },
  a(e, t) {
    return e.hours < 12 ? t.amPm[0] : t.amPm[1];
  },
  A(e, t) {
    return e.hours < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase();
  },
  Z() {
    return "Z";
  },
  ZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${De(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${De(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${De(Math.floor(Math.abs(t) / 60), 2)}:${De(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, tr = /\d\d?/, JM = /\d{3}/, XM = /\d{4}/, Dn = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ql = () => {
}, Jl = (e) => (t, r, n) => {
  const a = n[e].indexOf(
    r.charAt(0).toUpperCase() + r.substr(1).toLowerCase()
  );
  ~a && (t.month = a);
}, xe = {
  D: [
    tr,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(tr.source + Dn.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [tr, ql],
  W: [Dn, ql],
  M: [
    tr,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [Dn, Jl("monthNamesShort")],
  MMMM: [Dn, Jl("monthNames")],
  YY: [
    tr,
    (e, t) => {
      const n = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? n - 1 : n}${t}`;
    }
  ],
  YYYY: [
    XM,
    (e, t) => {
      e.year = t;
    }
  ],
  S: [
    /\d/,
    (e, t) => {
      e.milliseconds = t * 100;
    }
  ],
  SS: [
    /\d{2}/,
    (e, t) => {
      e.milliseconds = t * 10;
    }
  ],
  SSS: [
    JM,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    tr,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    tr,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    tr,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    Dn,
    (e, t, r) => {
      const n = t.toLowerCase();
      n === r.amPm[0] ? e.isPm = !1 : n === r.amPm[1] && (e.isPm = !0);
    }
  ],
  Z: [
    /[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/,
    (e, t) => {
      t === "Z" && (t = "+00:00");
      const r = `${t}`.match(/([+-]|\d\d)/gi);
      if (r) {
        const n = +r[1] * 60 + parseInt(r[2], 10);
        e.timezoneOffset = r[0] === "+" ? n : -n;
      }
    }
  ]
};
xe.DD = xe.D;
xe.dd = xe.d;
xe.WWWW = xe.WWW = xe.WW = xe.W;
xe.MM = xe.M;
xe.mm = xe.m;
xe.hh = xe.H = xe.HH = xe.h;
xe.ss = xe.s;
xe.A = xe.a;
xe.ZZZZ = xe.ZZZ = xe.ZZ = xe.Z;
function gf(e, t) {
  return (Ht(e) && e || [
    Et(e) && e || "YYYY-MM-DD"
  ]).map(
    (r) => ZM.reduce(
      (n, a) => n.replace(a, t.masks[a] || ""),
      r
    )
  );
}
function Zs(e) {
  return Gt(e) && "year" in e && "month" in e && "day" in e;
}
function Xl(e, t = 1) {
  const r = e.getDay() + 1, n = r >= t ? t - r : -(7 - (t - r));
  return tt(e, n);
}
function mf(e, t, r) {
  const n = Date.UTC(e, t - 1, r);
  return qs(/* @__PURE__ */ new Date(0), new Date(n));
}
function qs(e, t) {
  return Math.round((t.getTime() - e.getTime()) / ma);
}
function ek(e, t) {
  return Math.ceil(qs(Xl(e), Xl(t)) / 7);
}
function yf(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function tk(e, t) {
  return yf(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function bf(e, t = "") {
  const r = /* @__PURE__ */ new Date(), {
    year: n = r.getFullYear(),
    month: a = r.getMonth() + 1,
    day: o = r.getDate(),
    hours: s = 0,
    minutes: i = 0,
    seconds: l = 0,
    milliseconds: c = 0
  } = e;
  if (t) {
    const u = `${De(n, 4)}-${De(a, 2)}-${De(o, 2)}T${De(
      s,
      2
    )}:${De(i, 2)}:${De(l, 2)}.${De(c, 3)}`;
    return SC(u, { timeZone: t });
  }
  return new Date(n, a - 1, o, s, i, l, c);
}
function rk(e, t) {
  let r = new Date(e.getTime());
  t.timezone && (r = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), r.setMilliseconds(e.getMilliseconds()));
  const n = r.getMilliseconds(), a = r.getSeconds(), o = r.getMinutes(), s = r.getHours(), i = n + a * df + o * vf + s * pf, l = r.getMonth() + 1, c = r.getFullYear(), u = t.getMonthParts(l, c), f = r.getDate(), d = u.numDays - f + 1, h = r.getDay() + 1, m = Math.floor((f - 1) / 7 + 1), b = Math.floor((u.numDays - f) / 7 + 1), D = Math.ceil(
    (f + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7
  ), y = u.numWeeks - D + 1, B = u.weeknumbers[D], F = mf(c, l, f);
  return {
    milliseconds: n,
    seconds: a,
    minutes: o,
    hours: s,
    time: i,
    day: f,
    dayFromEnd: d,
    weekday: h,
    weekdayOrdinal: m,
    weekdayOrdinalFromEnd: b,
    week: D,
    weekFromEnd: y,
    weeknumber: B,
    month: l,
    year: c,
    date: r,
    dateTime: r.getTime(),
    dayIndex: F,
    timezoneOffset: 0,
    isValid: !0
  };
}
function nk(e, t, r) {
  return `${t}-${e}-${r}`;
}
function ak(e, t, r) {
  const n = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, a = new Date(t, e - 1, 1), o = a.getDay() + 1, s = e === 2 && n ? 29 : QM[e - 1], i = r - 1, l = KC(a, {
    weekStartsOn: i
  }), c = [], u = [];
  for (let f = 0; f < l; f++) {
    const d = tt(a, f * 7);
    c.push(ZC(d, { weekStartsOn: i })), u.push(eM(d));
  }
  return {
    firstDayOfWeek: r,
    firstDayOfMonth: a,
    inLeapYear: n,
    firstWeekday: o,
    numDays: s,
    numWeeks: l,
    month: e,
    year: t,
    weeknumbers: c,
    isoWeeknumbers: u
  };
}
function ok() {
  const e = [];
  for (let a = 0; a < Ve; a++)
    e.push(
      bf({
        year: 2020,
        month: 1,
        day: 5 + a,
        hours: 12
      })
    );
  return e;
}
function ko(e, t = void 0) {
  const r = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return ok().map((n) => r.format(n));
}
function sk() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function ik(e = void 0) {
  const t = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "quarter",
    "year"
  ], r = new Intl.RelativeTimeFormat(e);
  return t.reduce((n, a) => {
    const o = r.formatToParts(100, a);
    return n[a] = o[1].unit, n;
  }, {});
}
function wf() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function ec(e, t = void 0) {
  const r = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return wf().map((n) => r.format(n));
}
function lk(e, t, r) {
  return Ct(t) ? t === e : wt(t) ? t.includes(e) : Er(t) ? t(e, r) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function Mn(e, t, r) {
  const n = [], [a, o, s] = t;
  for (let i = a; i <= o; i++)
    (r == null || lk(i, r, e)) && n.push({
      value: i,
      label: De(i, s)
    });
  return n;
}
function ck(e, t) {
  return {
    milliseconds: Mn(
      e,
      Cn.milliseconds,
      t.milliseconds
    ),
    seconds: Mn(e, Cn.seconds, t.seconds),
    minutes: Mn(e, Cn.minutes, t.minutes),
    hours: Mn(e, Cn.hours, t.hours)
  };
}
function uk(e, t, r, n) {
  const o = Mn(e, t, n).reduce((s, i) => {
    if (i.disabled)
      return s;
    if (isNaN(s))
      return i.value;
    const l = Math.abs(s - r);
    return Math.abs(i.value - r) < l ? i.value : s;
  }, NaN);
  return isNaN(o) ? r : o;
}
function fk(e, t) {
  const r = { ...e };
  return Object.entries(t).forEach(([n, a]) => {
    const o = Cn[n], s = e[n];
    r[n] = uk(
      e,
      o,
      s,
      a
    );
  }), r;
}
function tc(e, t, r) {
  return gf(t, r).map((a) => {
    if (typeof a != "string")
      throw new Error("Invalid mask");
    let o = e;
    if (o.length > 1e3)
      return !1;
    let s = !0;
    const i = {};
    if (a.replace(hf, (u) => {
      if (xe[u]) {
        const f = xe[u], d = o.search(f[0]);
        ~d ? o.replace(f[0], (h) => (f[1](i, h, r), o = o.substr(d + h.length), h)) : s = !1;
      }
      return xe[u] ? "" : u.slice(1, u.length - 1);
    }), !s)
      return !1;
    const l = /* @__PURE__ */ new Date();
    i.hours != null && (i.isPm === !0 && +i.hours != 12 ? i.hours = +i.hours + 12 : i.isPm === !1 && +i.hours == 12 && (i.hours = 0));
    let c;
    return i.timezoneOffset != null ? (i.minutes = +(i.minutes || 0) - +i.timezoneOffset, c = new Date(
      Date.UTC(
        i.year || l.getFullYear(),
        i.month || 0,
        i.day || 1,
        i.hours || 0,
        i.minutes || 0,
        i.seconds || 0,
        i.milliseconds || 0
      )
    )) : c = r.getDateFromParts({
      year: i.year || l.getFullYear(),
      month: (i.month || 0) + 1,
      day: i.day || 1,
      hours: i.hours || 0,
      minutes: i.minutes || 0,
      seconds: i.seconds || 0,
      milliseconds: i.milliseconds || 0
    }), c;
  }).find((a) => a) || new Date(e);
}
function dk(e, t, r) {
  if (e == null)
    return "";
  let n = gf(t, r)[0];
  /Z$/.test(n) && (r.timezone = "utc");
  const a = [];
  n = n.replace(qM, (s, i) => (a.push(i), "??"));
  const o = r.getDateParts(e);
  return n = n.replace(
    hf,
    (s) => s in Zl ? Zl[s](o, r) : s.slice(1, s.length - 1)
  ), n.replace(/\?\?/g, () => a.shift());
}
let vk = 0;
class Df {
  constructor(t, r, n) {
    te(this, "key", ""), te(this, "hashcode", ""), te(this, "highlight", null), te(this, "content", null), te(this, "dot", null), te(this, "bar", null), te(this, "event", null), te(this, "popover", null), te(this, "customData", null), te(this, "ranges"), te(this, "hasRanges", !1), te(this, "order", 0), te(this, "pinPage", !1), te(this, "maxRepeatSpan", 0), te(this, "locale");
    const { dates: a } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = ++vk), this.locale = n, r.normalizeGlyphs(this), this.ranges = n.ranges(a ?? []), this.hasRanges = !!Ht(this.ranges), this.maxRepeatSpan = this.ranges.filter((o) => o.hasRepeat).map((o) => o.daySpan).reduce((o, s) => Math.max(o, s), 0);
  }
  intersectsRange({ start: t, end: r }) {
    if (t == null || r == null)
      return !1;
    const n = this.ranges.filter((s) => !s.hasRepeat);
    for (const s of n)
      if (s.intersectsDayRange(t.dayIndex, r.dayIndex))
        return !0;
    const a = this.ranges.filter((s) => s.hasRepeat);
    if (!a.length)
      return !1;
    let o = t;
    for (this.maxRepeatSpan > 1 && (o = this.locale.getDateParts(tt(o.date, -this.maxRepeatSpan))); o.dayIndex <= r.dayIndex; ) {
      for (const s of a)
        if (s.startsOnDay(o))
          return !0;
      o = this.locale.getDateParts(tt(o.date, 1));
    }
    return !1;
  }
}
function ts(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function Un(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function _f(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function xf(e) {
  const { visibility: t } = e, r = t === "click", n = t === "hover", a = t === "hover-focus", o = t === "focus";
  e.autoHide = !r;
  let s = !1, i = !1;
  const l = (m) => {
    r && (_f({
      ...e,
      target: e.target || m.currentTarget
    }), m.stopPropagation());
  }, c = (m) => {
    s || (s = !0, (n || a) && ts({
      ...e,
      target: e.target || m.currentTarget
    }));
  }, u = () => {
    s && (s = !1, (n || a && !i) && Un(e));
  }, f = (m) => {
    i || (i = !0, (o || a) && ts({
      ...e,
      target: e.target || m.currentTarget
    }));
  }, d = (m) => {
    i && !ha(m.currentTarget, m.relatedTarget) && (i = !1, (o || a && !s) && Un(e));
  }, h = {};
  switch (e.visibility) {
    case "click":
      h.click = l;
      break;
    case "hover":
      h.mousemove = c, h.mouseleave = u;
      break;
    case "focus":
      h.focusin = f, h.focusout = d;
      break;
    case "hover-focus":
      h.mousemove = c, h.mouseleave = u, h.focusin = f, h.focusout = d;
      break;
  }
  return h;
}
const rc = (e) => {
  const t = Ia(e);
  if (t == null)
    return;
  const r = t.popoverHandlers;
  !r || !r.length || (r.forEach((n) => n()), delete t.popoverHandlers);
}, nc = (e, t) => {
  const r = Ia(e);
  if (r == null)
    return;
  const n = [], a = xf(t);
  Object.entries(a).forEach(([o, s]) => {
    n.push(sr(r, o, s));
  }), r.popoverHandlers = n;
}, Af = {
  mounted(e, t) {
    const { value: r } = t;
    r && nc(e, r);
  },
  updated(e, t) {
    const { oldValue: r, value: n } = t, a = r == null ? void 0 : r.visibility, o = n == null ? void 0 : n.visibility;
    a !== o && (a && (rc(e), o || Un(r)), o && nc(e, n));
  },
  unmounted(e) {
    rc(e);
  }
}, pk = (e, t, {
  maxSwipeTime: r,
  minHorizontalSwipeDistance: n,
  maxVerticalSwipeDistance: a
}) => {
  if (!e || !e.addEventListener || !Er(t))
    return null;
  let o = 0, s = 0, i = null, l = !1;
  function c(f) {
    const d = f.changedTouches[0];
    o = d.screenX, s = d.screenY, i = (/* @__PURE__ */ new Date()).getTime(), l = !0;
  }
  function u(f) {
    if (!l || !i)
      return;
    l = !1;
    const d = f.changedTouches[0], h = d.screenX - o, m = d.screenY - s;
    if ((/* @__PURE__ */ new Date()).getTime() - i < r && Math.abs(h) >= n && Math.abs(m) <= a) {
      const D = { toLeft: !1, toRight: !1 };
      h < 0 ? D.toLeft = !0 : D.toRight = !0, t(D);
    }
  }
  return sr(e, "touchstart", c, { passive: !0 }), sr(e, "touchend", u, { passive: !0 }), () => {
    or(e, "touchstart", c), or(e, "touchend", u);
  };
}, ya = {}, hk = (e, t = 10) => {
  ya[e] = Date.now() + t;
}, gk = (e, t) => {
  if (e in ya) {
    const r = ya[e];
    if (Date.now() < r)
      return;
    delete ya[e];
  }
  t();
};
function Cf() {
  return typeof window < "u";
}
function mk(e) {
  return Cf() && e in window;
}
function yk(e) {
  const t = be(!1), r = _(() => t.value ? "dark" : "light");
  let n, a;
  function o(h) {
    t.value = h.matches;
  }
  function s() {
    mk("matchMedia") && (n = window.matchMedia("(prefers-color-scheme: dark)"), n.addEventListener("change", o), t.value = n.matches);
  }
  function i() {
    const { selector: h = ":root", darkClass: m = "dark" } = e.value, b = document.querySelector(h);
    t.value = b.classList.contains(m);
  }
  function l(h) {
    const { selector: m = ":root", darkClass: b = "dark" } = h;
    if (Cf() && m && b) {
      const D = document.querySelector(m);
      D && (a = new MutationObserver(i), a.observe(D, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = D.classList.contains(b));
    }
  }
  function c() {
    f();
    const h = typeof e.value;
    h === "string" && e.value.toLowerCase() === "system" ? s() : h === "object" ? l(e.value) : t.value = !!e.value;
  }
  const u = He(() => e.value, () => c(), {
    immediate: !0
  });
  function f() {
    n && (n.removeEventListener("change", o), n = void 0), a && (a.disconnect(), a = void 0);
  }
  function d() {
    f(), u();
  }
  return Wn(() => d()), {
    isDark: t,
    displayMode: r,
    cleanup: d
  };
}
const bk = ["base", "start", "end", "startEnd"], wk = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], Dk = { base: {}, start: {}, end: {} };
function Js(e, t, r = Dk) {
  let n = e, a = {};
  t === !0 || Et(t) ? (n = Et(t) ? t : n, a = { ...r }) : Gt(t) && (Ll(t, bk) ? a = { ...t } : a = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const o = Hn(
    a,
    { start: a.startEnd, end: a.startEnd },
    r
  );
  return Object.entries(o).forEach(([s, i]) => {
    let l = n;
    i === !0 || Et(i) ? (l = Et(i) ? i : l, o[s] = { color: l }) : Gt(i) && (Ll(i, wk) ? o[s] = { ...i } : o[s] = {}), Hn(o[s], { color: l });
  }), o;
}
class _k {
  constructor() {
    te(this, "type", "highlight");
  }
  normalizeConfig(t, r) {
    return Js(t, r, {
      base: { fillMode: "light" },
      start: { fillMode: "solid" },
      end: { fillMode: "solid" }
    });
  }
  prepareRender(t) {
    t.highlights = [], t.content || (t.content = []);
  }
  render({ data: t, onStart: r, onEnd: n }, a) {
    const { key: o, highlight: s } = t;
    if (!s)
      return;
    const { highlights: i } = a, { base: l, start: c, end: u } = s;
    r && n ? i.push({
      ...c,
      key: o,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    }) : r ? (i.push({
      ...l,
      key: `${o}-base`,
      wrapperClass: `vc-day-layer vc-day-box-right-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-start vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), i.push({
      ...c,
      key: o,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    })) : n ? (i.push({
      ...l,
      key: `${o}-base`,
      wrapperClass: `vc-day-layer vc-day-box-left-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-end vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), i.push({
      ...u,
      key: o,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${u.color}`,
      class: [`vc-highlight vc-highlight-bg-${u.fillMode}`, u.class],
      contentClass: [
        `vc-attr vc-highlight-content-${u.fillMode} vc-${u.color}`,
        u.contentClass
      ]
    })) : i.push({
      ...l,
      key: `${o}-middle`,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-middle vc-highlight-bg-${l.fillMode}`,
        l.class
      ],
      contentClass: [
        `vc-attr vc-highlight-content-${l.fillMode} vc-${l.color}`,
        l.contentClass
      ]
    });
  }
}
class Xs {
  constructor(t, r) {
    te(this, "type", ""), te(this, "collectionType", ""), this.type = t, this.collectionType = r;
  }
  normalizeConfig(t, r) {
    return Js(t, r);
  }
  prepareRender(t) {
    t[this.collectionType] = [];
  }
  render({ data: t, onStart: r, onEnd: n }, a) {
    const { key: o } = t, s = t[this.type];
    if (!o || !s)
      return;
    const i = a[this.collectionType], { base: l, start: c, end: u } = s;
    r ? i.push({
      ...c,
      key: o,
      class: [
        `vc-${this.type} vc-${this.type}-start vc-${c.color} vc-attr`,
        c.class
      ]
    }) : n ? i.push({
      ...u,
      key: o,
      class: [
        `vc-${this.type} vc-${this.type}-end vc-${u.color} vc-attr`,
        u.class
      ]
    }) : i.push({
      ...l,
      key: o,
      class: [
        `vc-${this.type} vc-${this.type}-base vc-${l.color} vc-attr`,
        l.class
      ]
    });
  }
}
class xk extends Xs {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, r) {
    return Js("base", r);
  }
}
class Ak extends Xs {
  constructor() {
    super("dot", "dots");
  }
}
class Ck extends Xs {
  constructor() {
    super("bar", "bars");
  }
}
class Mk {
  constructor(t) {
    te(this, "color"), te(this, "renderers", [
      new xk(),
      new _k(),
      new Ak(),
      new Ck()
    ]), this.color = t;
  }
  normalizeGlyphs(t) {
    this.renderers.forEach((r) => {
      const n = r.type;
      t[n] != null && (t[n] = r.normalizeConfig(this.color, t[n]));
    });
  }
  prepareRender(t = {}) {
    return this.renderers.forEach((r) => {
      r.prepareRender(t);
    }), t;
  }
  render(t, r) {
    this.renderers.forEach((n) => {
      n.render(t, r);
    });
  }
}
const Mf = Symbol("__vc_base_context__"), kf = {
  color: {
    type: String,
    default: () => fr("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => fr("isDark")
  },
  firstDayOfWeek: Number,
  masks: Object,
  locale: [String, Object],
  timezone: String,
  minDate: null,
  maxDate: null,
  disabledDates: null
};
function Of(e) {
  const t = _(() => e.color ?? ""), r = _(() => e.isDark ?? !1), { displayMode: n } = yk(r), a = _(() => new Mk(t.value)), o = _(() => {
    if (e.locale instanceof Ya)
      return e.locale;
    const d = Gt(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new Ya(d, e.timezone);
  }), s = _(() => o.value.masks), i = _(() => e.minDate), l = _(() => e.maxDate), c = _(() => {
    const d = e.disabledDates ? [...e.disabledDates] : [];
    return i.value != null && d.push({
      start: null,
      end: tt(o.value.toDate(i.value), -1)
    }), l.value != null && d.push({
      start: tt(o.value.toDate(l.value), 1),
      end: null
    }), o.value.ranges(d);
  }), u = _(() => new Df(
    {
      key: "disabled",
      dates: c.value,
      order: 100
    },
    a.value,
    o.value
  )), f = {
    color: t,
    isDark: r,
    displayMode: n,
    theme: a,
    locale: o,
    masks: s,
    minDate: i,
    maxDate: l,
    disabledDates: c,
    disabledAttribute: u
  };
  return on(Mf, f), f;
}
function kk(e) {
  return zt(Mf, () => Of(e), !0);
}
function If(e) {
  return `__vc_slot_${e}__`;
}
function $f(e, t = {}) {
  Object.keys(e).forEach((r) => {
    on(If(t[r] ?? r), e[r]);
  });
}
function Tf(e) {
  return zt(If(e), null);
}
const Ok = {
  ...kf,
  view: {
    type: String,
    default: "monthly",
    validator(e) {
      return ["daily", "weekly", "monthly"].includes(e);
    }
  },
  rows: {
    type: Number,
    default: 1
  },
  columns: {
    type: Number,
    default: 1
  },
  step: Number,
  titlePosition: {
    type: String,
    default: () => fr("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => fr("navVisibility")
  },
  showWeeknumbers: [Boolean, String],
  showIsoWeeknumbers: [Boolean, String],
  expanded: Boolean,
  borderless: Boolean,
  transparent: Boolean,
  initialPage: Object,
  initialPagePosition: { type: Number, default: 1 },
  minPage: Object,
  maxPage: Object,
  transition: String,
  attributes: Array,
  trimWeeks: Boolean,
  disablePageSwipe: Boolean
}, Ik = [
  "dayclick",
  "daymouseenter",
  "daymouseleave",
  "dayfocusin",
  "dayfocusout",
  "daykeydown",
  "weeknumberclick",
  "transition-start",
  "transition-end",
  "did-move",
  "update:view",
  "update:pages"
], Pf = Symbol("__vc_calendar_context__");
function $k(e, { slots: t, emit: r }) {
  const n = be(null), a = be(null), o = be((/* @__PURE__ */ new Date()).getDate()), s = be(!1), i = be(Symbol()), l = be(Symbol()), c = be(e.view), u = be([]), f = be("");
  let d = null, h = null;
  $f(t);
  const {
    theme: m,
    color: b,
    displayMode: D,
    locale: y,
    masks: B,
    minDate: F,
    maxDate: I,
    disabledAttribute: A,
    disabledDates: G
  } = kk(e), $ = _(() => e.rows * e.columns), M = _(() => e.step || $.value), R = _(() => Xu(u.value) ?? null), j = _(() => Hr(u.value) ?? null), X = _(
    () => e.minPage || (F.value ? Q(F.value) : null)
  ), x = _(
    () => e.maxPage || (I.value ? Q(I.value) : null)
  ), H = _(() => e.navVisibility), ae = _(() => !!e.showWeeknumbers), V = _(() => !!e.showIsoWeeknumbers), re = _(() => c.value === "monthly"), ee = _(() => c.value === "weekly"), ie = _(() => c.value === "daily"), pe = () => {
    s.value = !0, r("transition-start");
  }, Y = () => {
    s.value = !1, r("transition-end"), d && (d.resolve(!0), d = null);
  }, de = (S, p, O = c.value) => sf(S, p, O, y.value), Q = (S) => of(S, c.value, y.value), Ie = (S) => {
    !A.value || !Le.value || (S.isDisabled = Le.value.cellExists(
      A.value.key,
      S.dayIndex
    ));
  }, me = (S) => {
    S.isFocusable = S.inMonth && S.day === o.value;
  }, Te = (S, p) => {
    for (const O of S)
      for (const z of O.days)
        if (p(z) === !1)
          return;
  }, _e = _(
    () => u.value.reduce((S, p) => (S.push(...p.viewDays), S), [])
  ), Me = _(() => {
    const S = [];
    return (e.attributes || []).forEach((p, O) => {
      !p || !p.dates || S.push(
        new Df(
          {
            ...p,
            order: p.order || 0
          },
          m.value,
          y.value
        )
      );
    }), A.value && S.push(A.value), S;
  }), Ne = _(() => Ht(Me.value)), Le = _(() => {
    const S = new fM();
    return Me.value.forEach((p) => {
      p.ranges.forEach((O) => {
        S.render(p, O, _e.value);
      });
    }), S;
  }), lt = _(() => _e.value.reduce((S, p) => (S[p.dayIndex] = { day: p, cells: [] }, S[p.dayIndex].cells.push(...Le.value.getCells(p)), S), {})), qe = (S, p) => {
    const O = e.showWeeknumbers || e.showIsoWeeknumbers;
    return O == null ? "" : Y_(O) ? O ? "left" : "" : O.startsWith("right") ? p > 1 ? "right" : O : S > 1 ? "left" : O;
  }, v = () => {
    var S, p;
    if (!Ne.value)
      return null;
    const O = Me.value.find(($e) => $e.pinPage) || Me.value[0];
    if (!O || !O.hasRanges)
      return null;
    const [z] = O.ranges, ue = ((S = z.start) == null ? void 0 : S.date) || ((p = z.end) == null ? void 0 : p.date);
    return ue ? Q(ue) : null;
  }, g = () => {
    if (Yt(R.value))
      return R.value;
    const S = v();
    return Yt(S) ? S : Q(/* @__PURE__ */ new Date());
  }, w = (S, p = {}) => {
    const { view: O = c.value, position: z = 1, force: ue } = p, $e = z > 0 ? 1 - z : -($.value + z);
    let Xe = de(S, $e, O), ct = de(Xe, $.value - 1, O);
    return ue || (Jo(Xe, X.value) ? Xe = X.value : Ea(ct, x.value) && (Xe = de(x.value, 1 - $.value)), ct = de(Xe, $.value - 1)), { fromPage: Xe, toPage: ct };
  }, k = (S, p, O = "") => {
    if (O === "none" || O === "fade")
      return O;
    if ((S == null ? void 0 : S.view) !== (p == null ? void 0 : p.view))
      return "fade";
    const z = Ea(p, S), ue = Jo(p, S);
    return !z && !ue ? "fade" : O === "slide-v" ? ue ? "slide-down" : "slide-up" : ue ? "slide-right" : "slide-left";
  }, C = (S = {}) => new Promise((p, O) => {
    const { position: z = 1, force: ue = !1, transition: $e } = S, Xe = Yt(S.page) ? S.page : g(), { fromPage: ct } = w(Xe, {
      position: z,
      force: ue
    }), Rr = [];
    for (let Fr = 0; Fr < $.value; Fr++) {
      const so = de(ct, Fr), nt = Fr + 1, io = Math.ceil(nt / e.columns), Zn = e.rows - io + 1, hn = nt % e.columns || e.columns, gn = e.columns - hn + 1, Hf = qe(hn, gn);
      Rr.push(
        y.value.getPage({
          ...so,
          view: c.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: nt,
          row: io,
          rowFromEnd: Zn,
          column: hn,
          columnFromEnd: gn,
          showWeeknumbers: ae.value,
          showIsoWeeknumbers: V.value,
          weeknumberPosition: Hf
        })
      );
    }
    f.value = k(
      u.value[0],
      Rr[0],
      $e
    ), u.value = Rr, f.value && f.value !== "none" ? d = {
      resolve: p,
      reject: O
    } : p(!0);
  }), N = (S) => {
    const p = R.value ?? Q(/* @__PURE__ */ new Date());
    return de(p, S);
  }, U = (S, p = {}) => {
    const O = Yt(S) ? S : Q(S);
    return Object.assign(
      p,
      w(O, {
        ...p,
        force: !0
      })
    ), lM(
      p.fromPage,
      p.toPage,
      c.value,
      y.value
    ).map((ue) => sM(ue, X.value, x.value)).some((ue) => ue);
  }, E = (S, p = {}) => U(N(S), p), L = _(() => E(-M.value)), T = _(() => E(M.value)), W = async (S, p = {}) => !p.force && !U(S, p) ? !1 : (p.fromPage && !iM(p.fromPage, R.value) && (Un({ id: i.value, hideDelay: 0 }), p.view && (hk("view", 10), c.value = p.view), await C({
    ...p,
    page: p.fromPage,
    position: 1,
    force: !0
  }), r("did-move", u.value)), !0), J = (S, p = {}) => W(N(S), p), Z = () => J(-M.value), oe = () => J(M.value), ce = (S) => {
    const p = re.value ? ".in-month" : "", O = `.id-${y.value.getDayId(S)}${p}`, z = `${O}.vc-focusable, ${O} .vc-focusable`, ue = n.value;
    if (ue) {
      const $e = ue.querySelector(z);
      if ($e)
        return $e.focus(), !0;
    }
    return !1;
  }, ve = async (S, p = {}) => ce(S) ? !0 : (await W(S, p), ce(S)), ye = (S, p) => {
    o.value = S.day, r("dayclick", S, p);
  }, Pe = (S, p) => {
    r("daymouseenter", S, p);
  }, ze = (S, p) => {
    r("daymouseleave", S, p);
  }, Ot = (S, p) => {
    o.value = S.day, a.value = S, S.isFocused = !0, r("dayfocusin", S, p);
  }, pr = (S, p) => {
    a.value = null, S.isFocused = !1, r("dayfocusout", S, p);
  }, It = (S, p) => {
    r("daykeydown", S, p);
    const O = S.noonDate;
    let z = null;
    switch (p.key) {
      case "ArrowLeft": {
        z = tt(O, -1);
        break;
      }
      case "ArrowRight": {
        z = tt(O, 1);
        break;
      }
      case "ArrowUp": {
        z = tt(O, -7);
        break;
      }
      case "ArrowDown": {
        z = tt(O, 7);
        break;
      }
      case "Home": {
        z = tt(O, -S.weekdayPosition + 1);
        break;
      }
      case "End": {
        z = tt(O, S.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        p.altKey ? z = Gl(O, -1) : z = Sa(O, -1);
        break;
      }
      case "PageDown": {
        p.altKey ? z = Gl(O, 1) : z = Sa(O, 1);
        break;
      }
    }
    z && (p.preventDefault(), ve(z).catch());
  }, Lr = (S) => {
    const p = a.value;
    p != null && It(p, S);
  }, je = (S, p) => {
    r("weeknumberclick", S, p);
  };
  C({
    page: e.initialPage,
    position: e.initialPagePosition
  }), Pr(() => {
    !e.disablePageSwipe && n.value && (h = pk(
      n.value,
      ({ toLeft: S = !1, toRight: p = !1 }) => {
        S ? oe() : p && Z();
      },
      fr("touch")
    ));
  }), Wn(() => {
    u.value = [], h && h();
  }), He(
    () => y.value,
    () => {
      C();
    }
  ), He(
    () => $.value,
    () => C()
  ), He(
    () => e.view,
    () => c.value = e.view
  ), He(
    () => c.value,
    () => {
      gk("view", () => {
        C();
      }), r("update:view", c.value);
    }
  ), He(
    () => o.value,
    () => {
      Te(u.value, (S) => me(S));
    }
  ), jc(() => {
    r("update:pages", u.value), Te(u.value, (S) => {
      Ie(S), me(S);
    });
  });
  const Je = {
    emit: r,
    containerRef: n,
    focusedDay: a,
    inTransition: s,
    navPopoverId: i,
    dayPopoverId: l,
    view: c,
    pages: u,
    transitionName: f,
    theme: m,
    color: b,
    displayMode: D,
    locale: y,
    masks: B,
    attributes: Me,
    disabledAttribute: A,
    disabledDates: G,
    attributeContext: Le,
    days: _e,
    dayCells: lt,
    count: $,
    step: M,
    firstPage: R,
    lastPage: j,
    canMovePrev: L,
    canMoveNext: T,
    minPage: X,
    maxPage: x,
    isMonthly: re,
    isWeekly: ee,
    isDaily: ie,
    navVisibility: H,
    showWeeknumbers: ae,
    showIsoWeeknumbers: V,
    getDateAddress: Q,
    canMove: U,
    canMoveBy: E,
    move: W,
    moveBy: J,
    movePrev: Z,
    moveNext: oe,
    onTransitionBeforeEnter: pe,
    onTransitionAfterEnter: Y,
    tryFocusDate: ce,
    focusDate: ve,
    onKeydown: Lr,
    onDayKeydown: It,
    onDayClick: ye,
    onDayMouseenter: Pe,
    onDayMouseleave: ze,
    onDayFocusin: Ot,
    onDayFocusout: pr,
    onWeeknumberClick: je
  };
  return on(Pf, Je), Je;
}
function Nr() {
  const e = zt(Pf);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const Tk = /* @__PURE__ */ We({
  inheritAttrs: !1,
  emits: ["before-show", "after-show", "before-hide", "after-hide"],
  props: {
    id: { type: [Number, String, Symbol], required: !0 },
    showDelay: { type: Number, default: 0 },
    hideDelay: { type: Number, default: 110 },
    boundarySelector: { type: String }
  },
  setup(e, { emit: t }) {
    let r;
    const n = be();
    let a = null, o = null;
    const s = an({
      isVisible: !1,
      target: null,
      data: null,
      transition: "slide-fade",
      placement: "bottom",
      direction: "",
      positionFixed: !1,
      modifiers: [],
      isInteractive: !0,
      visibility: "click",
      isHovered: !1,
      isFocused: !1,
      autoHide: !1,
      force: !1
    });
    function i(Y) {
      Y && (s.direction = Y.split("-")[0]);
    }
    function l({ placement: Y, options: de }) {
      i(Y || (de == null ? void 0 : de.placement));
    }
    const c = _(() => ({
      placement: s.placement,
      strategy: s.positionFixed ? "fixed" : "absolute",
      boundary: "",
      modifiers: [
        {
          name: "onUpdate",
          enabled: !0,
          phase: "afterWrite",
          fn: l
        },
        ...s.modifiers || []
      ],
      onFirstUpdate: l
    })), u = _(() => {
      const Y = s.direction === "left" || s.direction === "right";
      let de = "";
      if (s.placement) {
        const Q = s.placement.split("-");
        Q.length > 1 && (de = Q[1]);
      }
      return ["start", "top", "left"].includes(de) ? Y ? "top" : "left" : ["end", "bottom", "right"].includes(de) ? Y ? "bottom" : "right" : Y ? "middle" : "center";
    });
    function f() {
      o && (o.destroy(), o = null);
    }
    function d() {
      _r(() => {
        const Y = Ia(s.target);
        !Y || !n.value || (o && o.state.elements.reference !== Y && f(), o ? o.update() : o = Ah(
          Y,
          n.value,
          c.value
        ));
      });
    }
    function h(Y) {
      Object.assign(s, tf(Y, "force"));
    }
    function m(Y, de) {
      clearTimeout(r), Y > 0 ? r = setTimeout(de, Y) : de();
    }
    function b(Y) {
      return !Y || !o ? !1 : Ia(Y) === o.state.elements.reference;
    }
    async function D(Y = {}) {
      s.force || (Y.force && (s.force = !0), m(Y.showDelay ?? e.showDelay, () => {
        s.isVisible && (s.force = !1), h({
          ...Y,
          isVisible: !0
        }), d();
      }));
    }
    function y(Y = {}) {
      o && (Y.target && !b(Y.target) || s.force || (Y.force && (s.force = !0), m(Y.hideDelay ?? e.hideDelay, () => {
        s.isVisible || (s.force = !1), s.isVisible = !1;
      })));
    }
    function B(Y = {}) {
      Y.target != null && (s.isVisible && b(Y.target) ? y(Y) : D(Y));
    }
    function F(Y) {
      if (!o)
        return;
      const de = o.state.elements.reference;
      if (!n.value || !de)
        return;
      const Q = Y.target;
      ha(n.value, Q) || ha(de, Q) || y({ force: !0 });
    }
    function I(Y) {
      (Y.key === "Esc" || Y.key === "Escape") && y();
    }
    function A({ detail: Y }) {
      !Y.id || Y.id !== e.id || D(Y);
    }
    function G({ detail: Y }) {
      !Y.id || Y.id !== e.id || y(Y);
    }
    function $({ detail: Y }) {
      !Y.id || Y.id !== e.id || B(Y);
    }
    function M() {
      sr(document, "keydown", I), sr(document, "click", F), sr(document, "show-popover", A), sr(document, "hide-popover", G), sr(document, "toggle-popover", $);
    }
    function R() {
      or(document, "keydown", I), or(document, "click", F), or(document, "show-popover", A), or(document, "hide-popover", G), or(document, "toggle-popover", $);
    }
    function j(Y) {
      t("before-show", Y);
    }
    function X(Y) {
      s.force = !1, t("after-show", Y);
    }
    function x(Y) {
      t("before-hide", Y);
    }
    function H(Y) {
      s.force = !1, f(), t("after-hide", Y);
    }
    function ae(Y) {
      Y.stopPropagation();
    }
    function V() {
      s.isHovered = !0, s.isInteractive && ["hover", "hover-focus"].includes(s.visibility) && D();
    }
    function re() {
      if (s.isHovered = !1, !o)
        return;
      const Y = o.state.elements.reference;
      s.autoHide && !s.isFocused && (!Y || Y !== document.activeElement) && ["hover", "hover-focus"].includes(s.visibility) && y();
    }
    function ee() {
      s.isFocused = !0, s.isInteractive && ["focus", "hover-focus"].includes(s.visibility) && D();
    }
    function ie(Y) {
      ["focus", "hover-focus"].includes(s.visibility) && (!Y.relatedTarget || !ha(n.value, Y.relatedTarget)) && (s.isFocused = !1, !s.isHovered && s.autoHide && y());
    }
    function pe() {
      a != null && (a.disconnect(), a = null);
    }
    return He(
      () => n.value,
      (Y) => {
        pe(), Y && (a = new ResizeObserver(() => {
          o && o.update();
        }), a.observe(Y));
      }
    ), He(() => s.placement, i, {
      immediate: !0
    }), Pr(() => {
      M();
    }), Wn(() => {
      f(), pe(), R();
    }), {
      ...Id(s),
      popoverRef: n,
      alignment: u,
      hide: y,
      setupPopper: d,
      beforeEnter: j,
      afterEnter: X,
      beforeLeave: x,
      afterLeave: H,
      onClick: ae,
      onMouseOver: V,
      onMouseLeave: re,
      onFocusIn: ee,
      onFocusOut: ie
    };
  }
}), vr = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
};
function Pk(e, t, r, n, a, o) {
  return K(), ne("div", {
    class: Ae(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s)),
    onMouseover: t[1] || (t[1] = (...s) => e.onMouseOver && e.onMouseOver(...s)),
    onMouseleave: t[2] || (t[2] = (...s) => e.onMouseLeave && e.onMouseLeave(...s)),
    onFocusin: t[3] || (t[3] = (...s) => e.onFocusIn && e.onFocusIn(...s)),
    onFocusout: t[4] || (t[4] = (...s) => e.onFocusOut && e.onFocusOut(...s))
  }, [
    le(qa, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: Ee(() => [
        e.isVisible ? (K(), ne("div", Sr({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          zn(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            Va(Re(e.data), 1)
          ]),
          q("span", {
            class: Ae([
              "vc-popover-caret",
              `direction-${e.direction}`,
              `align-${e.alignment}`
            ])
          }, null, 2)
        ], 16)) : Fe("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const ei = /* @__PURE__ */ vr(Tk, [["render", Pk]]), Sk = { class: "vc-day-popover-row" }, Ek = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, Yk = { class: "vc-day-popover-row-label" }, Nk = /* @__PURE__ */ We({
  __name: "PopoverRow",
  props: {
    attribute: null
  },
  setup(e) {
    const t = e, r = _(() => {
      const { content: n, highlight: a, dot: o, bar: s, popover: i } = t.attribute;
      return i && i.hideIndicator ? null : n ? {
        class: `vc-bar vc-day-popover-row-bar vc-attr vc-${n.base.color}`
      } : a ? {
        class: `vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${a.base.color}`
      } : o ? {
        class: `vc-dot vc-attr vc-${o.base.color}`
      } : s ? {
        class: `vc-bar vc-day-popover-row-bar vc-attr vc-${s.base.color}`
      } : null;
    });
    return (n, a) => (K(), ne("div", Sk, [
      P(r) ? (K(), ne("div", Ek, [
        q("span", {
          class: Ae(P(r).class)
        }, null, 2)
      ])) : Fe("", !0),
      q("div", Yk, [
        zn(n.$slots, "default", {}, () => [
          Va(Re(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
        ])
      ])
    ]));
  }
}), Lk = {
  inheritAttrs: !1
}, ht = /* @__PURE__ */ We({
  ...Lk,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const r = Tf(e.name);
    return (n, a) => P(r) ? (K(), Ge(Bc(P(r)), kn(Sr({ key: 0 }, n.$attrs)), null, 16)) : zn(n.$slots, "default", { key: 1 });
  }
}), Rk = { class: "vc-day-popover-container" }, Fk = {
  key: 0,
  class: "vc-day-popover-header"
}, Bk = /* @__PURE__ */ We({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: r, color: n, masks: a, locale: o } = Nr();
    function s(l, c) {
      return o.value.formatDate(l, c);
    }
    function i(l) {
      return o.value.formatDate(l.date, a.value.dayPopover);
    }
    return (l, c) => (K(), Ge(ei, {
      id: P(t),
      class: Ae([`vc-${P(n)}`, `vc-${P(r)}`])
    }, {
      default: Ee(({ data: { day: u, attributes: f }, hide: d }) => [
        le(ht, {
          name: "day-popover",
          day: u,
          "day-title": i(u),
          attributes: f,
          format: s,
          masks: P(a),
          hide: d
        }, {
          default: Ee(() => [
            q("div", Rk, [
              P(a).dayPopover ? (K(), ne("div", Fk, Re(i(u)), 1)) : Fe("", !0),
              (K(!0), ne(we, null, mt(f, (h) => (K(), Ge(Nk, {
                key: h.key,
                attribute: h
              }, null, 8, ["attribute"]))), 128))
            ])
          ]),
          _: 2
        }, 1032, ["day", "day-title", "attributes", "masks", "hide"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}), jk = {}, Hk = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Uk = /* @__PURE__ */ q("polyline", { points: "9 18 15 12 9 6" }, null, -1), Wk = [
  Uk
];
function zk(e, t) {
  return K(), ne("svg", Hk, Wk);
}
const Kk = /* @__PURE__ */ vr(jk, [["render", zk]]), Gk = {}, Vk = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Qk = /* @__PURE__ */ q("polyline", { points: "15 18 9 12 15 6" }, null, -1), Zk = [
  Qk
];
function qk(e, t) {
  return K(), ne("svg", Vk, Zk);
}
const Jk = /* @__PURE__ */ vr(Gk, [["render", qk]]), Xk = {}, eO = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, tO = /* @__PURE__ */ q("polyline", { points: "6 9 12 15 18 9" }, null, -1), rO = [
  tO
];
function nO(e, t) {
  return K(), ne("svg", eO, rO);
}
const aO = /* @__PURE__ */ vr(Xk, [["render", nO]]), oO = {}, sO = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, iO = /* @__PURE__ */ q("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), lO = [
  iO
];
function cO(e, t) {
  return K(), ne("svg", sO, lO);
}
const uO = /* @__PURE__ */ vr(oO, [["render", cO]]), fO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: aO,
  IconChevronLeft: Jk,
  IconChevronRight: Kk,
  IconClock: uO
}, Symbol.toStringTag, { value: "Module" })), rn = /* @__PURE__ */ We({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, r = _(() => t.width || t.size), n = _(() => t.height || t.size), a = _(() => fO[`Icon${t.name}`]);
    return (o, s) => (K(), Ge(Bc(P(a)), {
      width: P(r),
      height: P(n),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
}), dO = ["disabled"], vO = {
  key: 1,
  class: "vc-title-wrapper"
}, pO = {
  type: "button",
  class: "vc-title"
}, hO = ["disabled"], Sf = /* @__PURE__ */ We({
  __name: "CalendarHeader",
  props: {
    page: null,
    layout: null,
    isLg: { type: Boolean },
    isXl: { type: Boolean },
    is2xl: { type: Boolean },
    hideTitle: { type: Boolean },
    hideArrows: { type: Boolean }
  },
  setup(e) {
    const t = e, {
      navPopoverId: r,
      navVisibility: n,
      canMovePrev: a,
      movePrev: o,
      canMoveNext: s,
      moveNext: i
    } = Nr(), l = _(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), c = _(() => {
      const { page: b } = t;
      return {
        id: r.value,
        visibility: n.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: b },
        isInteractive: !0
      };
    }), u = _(() => t.page.titlePosition.includes("left")), f = _(() => t.page.titlePosition.includes("right")), d = _(() => t.layout ? t.layout : u.value ? "tu-pn" : f.value ? "pn-tu" : "p-tu-n;"), h = _(() => ({
      prev: d.value.includes("p") && !t.hideArrows,
      title: d.value.includes("t") && !t.hideTitle,
      next: d.value.includes("n") && !t.hideArrows
    })), m = _(() => ({ gridTemplateColumns: d.value.split("").map((D) => {
      switch (D) {
        case "p":
          return "[prev] auto";
        case "n":
          return "[next] auto";
        case "t":
          return "[title] auto";
        case "-":
          return "1fr";
        default:
          return "";
      }
    }).join(" ") }));
    return (b, D) => (K(), ne("div", {
      class: Ae(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Ut(P(m))
    }, [
      P(h).prev ? (K(), ne("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !P(a),
        onClick: D[0] || (D[0] = //@ts-ignore
        (...y) => P(o) && P(o)(...y)),
        onKeydown: D[1] || (D[1] = Li(
          //@ts-ignore
          (...y) => P(o) && P(o)(...y),
          ["space", "enter"]
        ))
      }, [
        le(ht, {
          name: "header-prev-button",
          disabled: !P(a)
        }, {
          default: Ee(() => [
            le(rn, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, dO)) : Fe("", !0),
      P(h).title ? (K(), ne("div", vO, [
        le(ht, { name: "header-title-wrapper" }, {
          default: Ee(() => [
            On((K(), ne("button", pO, [
              le(ht, {
                name: "header-title",
                title: e.page.title
              }, {
                default: Ee(() => [
                  q("span", null, Re(e.page.title), 1)
                ]),
                _: 1
              }, 8, ["title"])
            ])), [
              [P(Af), P(c)]
            ])
          ]),
          _: 1
        })
      ])) : Fe("", !0),
      P(h).next ? (K(), ne("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !P(s),
        onClick: D[2] || (D[2] = //@ts-ignore
        (...y) => P(i) && P(i)(...y)),
        onKeydown: D[3] || (D[3] = Li(
          //@ts-ignore
          (...y) => P(i) && P(i)(...y),
          ["space", "enter"]
        ))
      }, [
        le(ht, {
          name: "header-next-button",
          disabled: !P(s)
        }, {
          default: Ee(() => [
            le(rn, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, hO)) : Fe("", !0)
    ], 6));
  }
}), Ef = Symbol("__vc_page_context__");
function gO(e) {
  const { locale: t, getDateAddress: r, canMove: n } = Nr();
  function a(i, l) {
    const { month: c, year: u } = r(/* @__PURE__ */ new Date());
    return wf().map((f, d) => {
      const h = d + 1;
      return {
        month: h,
        year: i,
        id: oM(h, i),
        label: t.value.formatDate(f, l),
        ariaLabel: t.value.formatDate(f, "MMMM"),
        isActive: h === e.value.month && i === e.value.year,
        isCurrent: h === c && i === u,
        isDisabled: !n(
          { month: h, year: i },
          { position: e.value.position }
        )
      };
    });
  }
  function o(i, l) {
    const { year: c } = r(/* @__PURE__ */ new Date()), { position: u } = e.value, f = [];
    for (let d = i; d <= l; d += 1) {
      const h = [...Array(12).keys()].some(
        (m) => n({ month: m + 1, year: d }, { position: u })
      );
      f.push({
        year: d,
        id: d.toString(),
        label: d.toString(),
        ariaLabel: d.toString(),
        isActive: d === e.value.year,
        isCurrent: d === c,
        isDisabled: !h
      });
    }
    return f;
  }
  const s = { page: e, getMonthItems: a, getYearItems: o };
  return on(Ef, s), s;
}
function Yf() {
  const e = zt(Ef);
  if (e)
    return e;
  throw new Error(
    "Page context missing. Please verify this component is nested within a valid context provider."
  );
}
const mO = { class: "vc-nav-header" }, yO = ["disabled"], bO = ["disabled"], wO = { class: "vc-nav-items" }, DO = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], _O = /* @__PURE__ */ We({
  __name: "CalendarNav",
  setup(e) {
    const { masks: t, move: r } = Nr(), { page: n, getMonthItems: a, getYearItems: o } = Yf(), s = be(!0), i = 12, l = be(n.value.year), c = be(d(n.value.year)), u = be(null);
    function f() {
      setTimeout(() => {
        if (u.value == null)
          return;
        const Q = u.value.querySelector(
          ".vc-nav-item:not(:disabled)"
        );
        Q && Q.focus();
      }, 10);
    }
    function d(Q) {
      return Math.floor(Q / i);
    }
    function h() {
      s.value = !s.value;
    }
    function m(Q) {
      return Q * i;
    }
    function b(Q) {
      return i * (Q + 1) - 1;
    }
    function D() {
      ee.value && (s.value && B(), I());
    }
    function y() {
      ie.value && (s.value && F(), A());
    }
    function B() {
      l.value--;
    }
    function F() {
      l.value++;
    }
    function I() {
      c.value--;
    }
    function A() {
      c.value++;
    }
    const G = _(
      () => a(l.value, t.value.navMonths).map((Q) => ({
        ...Q,
        click: () => r(
          { month: Q.month, year: Q.year },
          { position: n.value.position }
        )
      }))
    ), $ = _(
      () => a(l.value - 1, t.value.navMonths)
    ), M = _(
      () => $.value.some((Q) => !Q.isDisabled)
    ), R = _(
      () => a(l.value + 1, t.value.navMonths)
    ), j = _(
      () => R.value.some((Q) => !Q.isDisabled)
    ), X = _(
      () => o(
        m(c.value),
        b(c.value)
      ).map((Q) => ({
        ...Q,
        click: () => {
          l.value = Q.year, s.value = !0, f();
        }
      }))
    ), x = _(
      () => o(
        m(c.value - 1),
        b(c.value - 1)
      )
    ), H = _(
      () => x.value.some((Q) => !Q.isDisabled)
    ), ae = _(
      () => o(
        m(c.value + 1),
        b(c.value + 1)
      )
    ), V = _(
      () => ae.value.some((Q) => !Q.isDisabled)
    ), re = _(
      () => s.value ? G.value : X.value
    ), ee = _(
      () => s.value ? M.value : H.value
    ), ie = _(
      () => s.value ? j.value : V.value
    ), pe = _(() => Xu(X.value.map((Q) => Q.year))), Y = _(() => Hr(X.value.map((Q) => Q.year))), de = _(() => s.value ? l.value : `${pe.value} - ${Y.value}`);
    return jc(() => {
      l.value = n.value.year, f();
    }), He(
      () => l.value,
      (Q) => c.value = d(Q)
    ), Pr(() => f()), (Q, Ie) => (K(), ne("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: u
    }, [
      q("div", mO, [
        q("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !P(ee),
          onClick: D,
          onKeydown: Ie[0] || (Ie[0] = (me) => P(ia)(me, D))
        }, [
          le(ht, {
            name: "nav-prev-button",
            move: D,
            disabled: !P(ee)
          }, {
            default: Ee(() => [
              le(rn, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 40, yO),
        q("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: h,
          onKeydown: Ie[1] || (Ie[1] = (me) => P(ia)(me, h))
        }, Re(P(de)), 33),
        q("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !P(ie),
          onClick: y,
          onKeydown: Ie[2] || (Ie[2] = (me) => P(ia)(me, y))
        }, [
          le(ht, {
            name: "nav-next-button",
            move: y,
            disabled: !P(ie)
          }, {
            default: Ee(() => [
              le(rn, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 40, bO)
      ]),
      q("div", wO, [
        (K(!0), ne(we, null, mt(P(re), (me) => (K(), ne("button", {
          key: me.label,
          type: "button",
          "data-id": me.id,
          "aria-label": me.ariaLabel,
          class: Ae(["vc-nav-item vc-focus", [
            me.isActive ? "is-active" : me.isCurrent ? "is-current" : ""
          ]]),
          disabled: me.isDisabled,
          onClick: me.click,
          onKeydown: (Te) => P(ia)(Te, me.click)
        }, Re(me.label), 43, DO))), 128))
      ])
    ], 512));
  }
}), Nf = /* @__PURE__ */ We({
  __name: "CalendarPageProvider",
  props: {
    page: null
  },
  setup(e) {
    return gO(da(e, "page")), (r, n) => zn(r.$slots, "default");
  }
}), xO = /* @__PURE__ */ We({
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: r, displayMode: n } = Nr();
    return (a, o) => (K(), Ge(ei, {
      id: P(t),
      class: Ae(["vc-nav-popover-container", `vc-${P(r)}`, `vc-${P(n)}`])
    }, {
      default: Ee(({ data: s }) => [
        le(Nf, {
          page: s.page
        }, {
          default: Ee(() => [
            le(ht, { name: "nav" }, {
              default: Ee(() => [
                le(_O)
              ]),
              _: 1
            })
          ]),
          _: 2
        }, 1032, ["page"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}), AO = /* @__PURE__ */ We({
  directives: { popover: Af },
  components: { CalendarSlot: ht },
  props: {
    day: { type: Object, required: !0 }
  },
  setup(e) {
    const {
      locale: t,
      theme: r,
      attributeContext: n,
      dayPopoverId: a,
      onDayClick: o,
      onDayMouseenter: s,
      onDayMouseleave: i,
      onDayFocusin: l,
      onDayFocusout: c,
      onDayKeydown: u
    } = Nr(), f = _(() => e.day), d = _(() => n.value.getCells(f.value)), h = _(
      () => d.value.map((V) => V.data)
    ), m = _(() => ({
      ...f.value,
      attributes: h.value,
      attributeCells: d.value
    }));
    function b({ data: V }, { popovers: re }) {
      const { key: ee, customData: ie, popover: pe } = V;
      if (!pe)
        return;
      const Y = Il(
        {
          key: ee,
          customData: ie,
          attribute: V
        },
        { ...pe },
        {
          visibility: pe.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !pe.label
        }
      );
      re.splice(0, 0, Y);
    }
    const D = _(() => {
      const V = {
        ...r.value.prepareRender({}),
        popovers: []
      };
      return d.value.forEach((re) => {
        r.value.render(re, V), b(re, V);
      }), V;
    }), y = _(() => D.value.highlights), B = _(() => !!Ht(y.value)), F = _(() => D.value.content), I = _(() => D.value.dots), A = _(() => !!Ht(I.value)), G = _(() => D.value.bars), $ = _(() => !!Ht(G.value)), M = _(() => D.value.popovers), R = _(
      () => M.value.map((V) => V.attribute)
    ), j = Tf("day-content"), X = _(() => [
      "vc-day",
      ...f.value.classes,
      { "vc-day-box-center-center": !j },
      { "is-not-in-month": !e.day.inMonth }
    ]), x = _(() => {
      let V;
      f.value.isFocusable ? V = "0" : V = "-1";
      const re = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": f.value.isDisabled },
        xr(Hr(y.value), "contentClass"),
        xr(Hr(F.value), "class") || ""
      ], ee = {
        ...xr(Hr(y.value), "contentStyle"),
        ...xr(Hr(F.value), "style")
      };
      return {
        class: re,
        style: ee,
        tabindex: V,
        "aria-label": f.value.ariaLabel,
        "aria-disabled": !!f.value.isDisabled,
        role: "button"
      };
    }), H = _(() => ({
      click(V) {
        o(m.value, V);
      },
      mouseenter(V) {
        s(m.value, V);
      },
      mouseleave(V) {
        i(m.value, V);
      },
      focusin(V) {
        l(m.value, V);
      },
      focusout(V) {
        c(m.value, V);
      },
      keydown(V) {
        u(m.value, V);
      }
    })), ae = _(() => Ht(M.value) ? Il(
      {
        id: a.value,
        data: { day: f, attributes: R.value }
      },
      ...M.value
    ) : null);
    return {
      attributes: h,
      attributeCells: d,
      bars: G,
      dayClasses: X,
      dayContentProps: x,
      dayContentEvents: H,
      dayPopover: ae,
      glyphs: D,
      dots: I,
      hasDots: A,
      hasBars: $,
      highlights: y,
      hasHighlights: B,
      locale: t,
      popovers: M
    };
  }
}), CO = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, MO = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, kO = { class: "vc-dots" }, OO = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, IO = { class: "vc-bars" };
function $O(e, t, r, n, a, o) {
  const s = Tt("CalendarSlot"), i = Ud("popover");
  return K(), ne("div", {
    class: Ae(e.dayClasses)
  }, [
    e.hasHighlights ? (K(), ne("div", CO, [
      (K(!0), ne(we, null, mt(e.highlights, ({ key: l, wrapperClass: c, class: u, style: f }) => (K(), ne("div", {
        key: l,
        class: Ae(c)
      }, [
        q("div", {
          class: Ae(u),
          style: Ut(f)
        }, null, 6)
      ], 2))), 128))
    ])) : Fe("", !0),
    le(s, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: Ee(() => [
        On((K(), ne("div", Sr(e.dayContentProps, lv(e.dayContentEvents, !0)), [
          Va(Re(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (K(), ne("div", MO, [
      q("div", kO, [
        (K(!0), ne(we, null, mt(e.dots, ({ key: l, class: c, style: u }) => (K(), ne("span", {
          key: l,
          class: Ae(c),
          style: Ut(u)
        }, null, 6))), 128))
      ])
    ])) : Fe("", !0),
    e.hasBars ? (K(), ne("div", OO, [
      q("div", IO, [
        (K(!0), ne(we, null, mt(e.bars, ({ key: l, class: c, style: u }) => (K(), ne("span", {
          key: l,
          class: Ae(c),
          style: Ut(u)
        }, null, 6))), 128))
      ])
    ])) : Fe("", !0)
  ], 2);
}
const TO = /* @__PURE__ */ vr(AO, [["render", $O]]), PO = { class: "vc-weekdays" }, SO = ["onClick"], EO = {
  inheritAttrs: !1
}, YO = /* @__PURE__ */ We({
  ...EO,
  __name: "CalendarPage",
  setup(e) {
    const { page: t } = Yf(), { onWeeknumberClick: r } = Nr();
    return (n, a) => (K(), ne("div", {
      class: Ae([
        "vc-pane",
        `row-${P(t).row}`,
        `row-from-end-${P(t).rowFromEnd}`,
        `column-${P(t).column}`,
        `column-from-end-${P(t).columnFromEnd}`
      ]),
      ref: "pane"
    }, [
      le(Sf, {
        page: P(t),
        "is-lg": "",
        "hide-arrows": ""
      }, null, 8, ["page"]),
      q("div", {
        class: Ae(["vc-weeks", {
          [`vc-show-weeknumbers-${P(t).weeknumberPosition}`]: P(t).weeknumberPosition
        }])
      }, [
        q("div", PO, [
          (K(!0), ne(we, null, mt(P(t).weekdays, ({ weekday: o, label: s }, i) => (K(), ne("div", {
            key: i,
            class: Ae(`vc-weekday vc-weekday-${o}`)
          }, Re(s), 3))), 128))
        ]),
        (K(!0), ne(we, null, mt(P(t).viewWeeks, (o) => (K(), ne("div", {
          key: `weeknumber-${o.weeknumber}`,
          class: "vc-week"
        }, [
          P(t).weeknumberPosition ? (K(), ne("div", {
            key: 0,
            class: Ae(["vc-weeknumber", `is-${P(t).weeknumberPosition}`])
          }, [
            q("span", {
              class: Ae(["vc-weeknumber-content"]),
              onClick: (s) => P(r)(o, s)
            }, Re(o.weeknumberDisplay), 9, SO)
          ], 2)) : Fe("", !0),
          (K(!0), ne(we, null, mt(o.days, (s) => (K(), Ge(TO, {
            key: s.id,
            day: s
          }, null, 8, ["day"]))), 128))
        ]))), 128))
      ], 2)
    ], 2));
  }
}), NO = /* @__PURE__ */ We({
  components: {
    CalendarHeader: Sf,
    CalendarPage: YO,
    CalendarNavPopover: xO,
    CalendarDayPopover: Bk,
    CalendarPageProvider: Nf,
    CalendarSlot: ht
  },
  props: Ok,
  emit: Ik,
  setup(e, { emit: t, slots: r }) {
    return $k(e, { emit: t, slots: r });
  }
}), LO = { class: "vc-pane-header-wrapper" };
function RO(e, t, r, n, a, o) {
  const s = Tt("CalendarHeader"), i = Tt("CalendarPage"), l = Tt("CalendarSlot"), c = Tt("CalendarPageProvider"), u = Tt("CalendarDayPopover"), f = Tt("CalendarNavPopover");
  return K(), ne(we, null, [
    q("div", Sr({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
      class: [
        "vc-container",
        `vc-${e.view}`,
        `vc-${e.color}`,
        `vc-${e.displayMode}`,
        {
          "vc-expanded": e.expanded,
          "vc-bordered": !e.borderless,
          "vc-transparent": e.transparent
        }
      ],
      onMouseup: t[0] || (t[0] = hp(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      q("div", {
        class: Ae(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        q("div", LO, [
          e.firstPage ? (K(), Ge(s, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : Fe("", !0)
        ]),
        le(qa, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: Ee(() => [
            (K(), ne("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: Ut({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (K(!0), ne(we, null, mt(e.pages, (d) => (K(), Ge(c, {
                key: d.id,
                page: d
              }, {
                default: Ee(() => [
                  le(l, {
                    name: "page",
                    page: d
                  }, {
                    default: Ee(() => [
                      le(i)
                    ]),
                    _: 2
                  }, 1032, ["page"])
                ]),
                _: 2
              }, 1032, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        le(l, { name: "footer" })
      ], 2)
    ], 16),
    le(u),
    le(f)
  ], 64);
}
const FO = /* @__PURE__ */ vr(NO, [["render", RO]]), Lf = Symbol("__vc_date_picker_context__"), BO = {
  ...kf,
  mode: { type: String, default: "date" },
  modelValue: {
    type: [Number, String, Date, Object]
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  rules: [String, Object],
  is24hr: Boolean,
  hideTimeHeader: Boolean,
  timeAccuracy: { type: Number, default: 2 },
  isRequired: Boolean,
  isRange: Boolean,
  updateOnInput: {
    type: Boolean,
    default: () => fr("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => fr("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: !0
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
}, jO = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function HO(e, { emit: t, slots: r }) {
  $f(r, { footer: "dp-footer" });
  const n = Of(e), { locale: a, masks: o, disabledAttribute: s } = n, i = be(!1), l = be(Symbol()), c = be(null), u = be(null), f = be(["", ""]), d = be(null), h = be(null);
  let m, b, D = !0;
  const y = _(() => e.isRange || e.modelModifiers.range === !0), B = _(
    () => y.value && c.value != null ? c.value.start : null
  ), F = _(
    () => y.value && c.value != null ? c.value.end : null
  ), I = _(() => e.mode.toLowerCase() === "date"), A = _(
    () => e.mode.toLowerCase() === "datetime"
  ), G = _(() => e.mode.toLowerCase() === "time"), $ = _(() => !!u.value), M = _(() => {
    let p = "date";
    e.modelModifiers.number && (p = "number"), e.modelModifiers.string && (p = "string");
    const O = o.value.modelValue || "iso";
    return Ie({ type: p, mask: O });
  }), R = _(
    () => E(u.value ?? c.value)
  ), j = _(() => G.value ? e.is24hr ? o.value.inputTime24hr : o.value.inputTime : A.value ? e.is24hr ? o.value.inputDateTime24hr : o.value.inputDateTime : o.value.input), X = _(() => /[Hh]/g.test(j.value)), x = _(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(j.value)
  ), H = _(() => {
    if (X.value && x.value)
      return "dateTime";
    if (x.value)
      return "date";
    if (X.value)
      return "time";
  }), ae = _(() => {
    var p;
    const O = ((p = d.value) == null ? void 0 : p.$el.previousElementSibling) ?? void 0;
    return Hn({}, e.popover, fr("datePicker.popover"), {
      target: O
    });
  }), V = _(
    () => xf({
      ...ae.value,
      id: l.value
    })
  ), re = _(() => y.value ? {
    start: f.value[0],
    end: f.value[1]
  } : f.value[0]), ee = _(() => {
    const p = ["start", "end"].map((O) => ({
      input: C(O),
      change: N(O),
      keyup: U,
      ...e.popover && V.value
    }));
    return y.value ? {
      start: p[0],
      end: p[1]
    } : p[0];
  }), ie = _(() => {
    if (!Me(c.value))
      return null;
    const p = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: c.value,
      pinPage: !0
    }, { dot: O, bar: z, highlight: ue, content: $e } = p;
    return !O && !z && !ue && !$e && (p.highlight = !0), p;
  }), pe = _(() => {
    if (!y.value || !Me(u.value))
      return null;
    const p = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: u.value
    }, { dot: O, bar: z, highlight: ue, content: $e } = p;
    return !O && !z && !ue && !$e && (p.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), p;
  }), Y = _(() => {
    const p = wt(e.attributes) ? [...e.attributes] : [];
    return pe.value ? p.unshift(pe.value) : ie.value && p.unshift(ie.value), p;
  }), de = _(() => Ie(
    e.rules === "auto" ? Q() : e.rules ?? {}
  ));
  function Q() {
    const p = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, O = I.value ? 0 : e.timeAccuracy;
    return [0, 1].map((z) => {
      switch (O) {
        case 0:
          return {
            hours: p.hr[z],
            minutes: p.min[z],
            seconds: p.sec[z],
            milliseconds: p.ms[z]
          };
        case 1:
          return {
            minutes: p.min[z],
            seconds: p.sec[z],
            milliseconds: p.ms[z]
          };
        case 3:
          return { milliseconds: p.ms[z] };
        case 4:
          return {};
        default:
          return { seconds: p.sec[z], milliseconds: p.ms[z] };
      }
    });
  }
  function Ie(p) {
    return wt(p) ? p.length === 1 ? [p[0], p[0]] : p : [p, p];
  }
  function me(p) {
    return Ie(p).map(
      (O, z) => ({
        ...O,
        rules: de.value[z]
      })
    );
  }
  function Te(p) {
    return p == null ? !1 : Ct(p) ? !isNaN(p) : Gr(p) ? !isNaN(p.getTime()) : Et(p) ? p !== "" : Zs(p);
  }
  function _e(p) {
    return Gt(p) && "start" in p && "end" in p && Te(p.start ?? null) && Te(p.end ?? null);
  }
  function Me(p) {
    return _e(p) || Te(p);
  }
  function Ne(p, O) {
    if (p == null && O == null)
      return !0;
    if (p == null || O == null)
      return !1;
    const z = Gr(p), ue = Gr(O);
    return z && ue ? p.getTime() === O.getTime() : z || ue ? !1 : Ne(p.start, O.start) && Ne(p.end, O.end);
  }
  function Le(p) {
    return !Me(p) || !s.value ? !1 : s.value.intersectsRange(a.value.range(p));
  }
  function lt(p, O, z, ue) {
    if (!Me(p))
      return null;
    if (_e(p)) {
      const $e = a.value.toDate(p.start, {
        ...O[0],
        fillDate: B.value ?? void 0,
        patch: z
      }), Xe = a.value.toDate(p.end, {
        ...O[1],
        fillDate: F.value ?? void 0,
        patch: z
      });
      return pr({ start: $e, end: Xe }, ue);
    }
    return a.value.toDateOrNull(p, {
      ...O[0],
      fillDate: c.value,
      patch: z
    });
  }
  function qe(p, O) {
    return _e(p) ? {
      start: a.value.fromDate(p.start, O[0]),
      end: a.value.fromDate(p.end, O[1])
    } : y.value ? null : a.value.fromDate(p, O[0]);
  }
  function v(p, O = {}) {
    return clearTimeout(m), new Promise((z) => {
      const { debounce: ue = 0, ...$e } = O;
      ue > 0 ? m = window.setTimeout(() => {
        z(g(p, $e));
      }, ue) : z(g(p, $e));
    });
  }
  function g(p, {
    config: O = M.value,
    patch: z = "dateTime",
    clearIfEqual: ue = !1,
    formatInput: $e = !0,
    hidePopover: Xe = !1,
    dragging: ct = $.value,
    targetPriority: Rr,
    moveToValue: Fr = !1
  } = {}) {
    const so = me(O);
    let nt = lt(
      p,
      so,
      z,
      Rr
    );
    if (Le(nt)) {
      if (ct)
        return null;
      nt = c.value, Xe = !1;
    } else
      nt == null && e.isRequired ? nt = c.value : (
        // Clear value if same value was passed
        nt != null && Ne(c.value, nt) && ue && (nt = null)
      );
    const Zn = ct ? u : c, hn = !Ne(Zn.value, nt);
    Zn.value = nt, ct || (u.value = null);
    const gn = qe(
      nt,
      M.value
    );
    return hn && (D = !1, t(ct ? "drag" : "update:modelValue", gn), _r(() => D = !0)), Xe && !ct && ze(), $e && w(), Fr && _r(() => je(Rr ?? "start")), gn;
  }
  function w() {
    _r(() => {
      const p = me({
        type: "string",
        mask: j.value
      }), O = qe(
        u.value ?? c.value,
        p
      );
      y.value ? f.value = [O && O.start, O && O.end] : f.value = [O, ""];
    });
  }
  function k(p, O, z) {
    f.value.splice(O === "start" ? 0 : 1, 1, p);
    const ue = y.value ? {
      start: f.value[0],
      end: f.value[1] || f.value[0]
    } : p, $e = {
      type: "string",
      mask: j.value
    };
    v(ue, {
      ...z,
      config: $e,
      patch: H.value,
      targetPriority: O,
      moveToValue: !0
    });
  }
  function C(p) {
    return (O) => {
      e.updateOnInput && k(O.currentTarget.value, p, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function N(p) {
    return (O) => {
      k(O.currentTarget.value, p, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function U(p) {
    p.key === "Escape" && v(c.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function E(p) {
    return y.value ? [
      p && p.start ? a.value.getDateParts(p.start) : null,
      p && p.end ? a.value.getDateParts(p.end) : null
    ] : [p ? a.value.getDateParts(p) : null];
  }
  function L() {
    u.value = null, w();
  }
  function T(p) {
    t("popover-will-show", p);
  }
  function W(p) {
    t("popover-did-show", p);
  }
  function J(p) {
    L(), t("popover-will-hide", p);
  }
  function Z(p) {
    t("popover-did-hide", p);
  }
  function oe(p) {
    const O = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (y.value) {
      const z = !$.value;
      z ? b = { start: p.startDate, end: p.endDate } : b != null && (b.end = p.date), v(b, {
        ...O,
        dragging: z
      });
    } else
      v(p.date, {
        ...O,
        clearIfEqual: !e.isRequired
      });
  }
  function ce(p, O) {
    oe(p), t("dayclick", p, O);
  }
  function ve(p, O) {
    switch (O.key) {
      case " ":
      case "Enter": {
        oe(p), O.preventDefault();
        break;
      }
      case "Escape":
        ze();
    }
    t("daykeydown", p, O);
  }
  function ye(p, O) {
    !$.value || b == null || (b.end = p.date, v(pr(b), {
      patch: "date",
      formatInput: !0
    }));
  }
  function Pe(p = {}) {
    ts({
      ...ae.value,
      ...p,
      isInteractive: !0,
      id: l.value
    });
  }
  function ze(p = {}) {
    Un({
      hideDelay: 10,
      force: !0,
      ...ae.value,
      ...p,
      id: l.value
    });
  }
  function Ot(p) {
    _f({
      ...ae.value,
      ...p,
      isInteractive: !0,
      id: l.value
    });
  }
  function pr(p, O) {
    const { start: z, end: ue } = p;
    if (z > ue)
      switch (O) {
        case "start":
          return { start: z, end: z };
        case "end":
          return { start: ue, end: ue };
        default:
          return { start: ue, end: z };
      }
    return { start: z, end: ue };
  }
  async function It(p, O = {}) {
    return h.value == null ? !1 : h.value.move(p, O);
  }
  async function Lr(p, O = {}) {
    return h.value == null ? !1 : h.value.moveBy(p, O);
  }
  async function je(p, O = {}) {
    const z = c.value;
    if (h.value == null || !Me(z))
      return !1;
    const ue = p !== "end", $e = ue ? 1 : -1, Xe = _e(z) ? ue ? z.start : z.end : z, ct = of(Xe, "monthly", a.value);
    return h.value.move(ct, { position: $e, ...O });
  }
  He(
    () => e.isRange,
    (p) => {
      p && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), He(
    () => y.value,
    () => {
      g(null, { formatInput: !0 });
    }
  ), He(
    () => j.value,
    () => w()
  ), He(
    () => e.modelValue,
    (p) => {
      D && g(p, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), He(
    () => de.value,
    () => {
      Gt(e.rules) && g(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), He(
    () => e.timezone,
    () => {
      g(c.value, { formatInput: !0 });
    }
  );
  const Je = Ie(M.value);
  c.value = lt(
    e.modelValue ?? null,
    Je,
    "dateTime"
  ), Pr(() => {
    g(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), _r(() => i.value = !0);
  const S = {
    ...n,
    showCalendar: i,
    datePickerPopoverId: l,
    popoverRef: d,
    popoverEvents: V,
    calendarRef: h,
    isRange: y,
    isTimeMode: G,
    isDateTimeMode: A,
    is24hr: da(e, "is24hr"),
    hideTimeHeader: da(e, "hideTimeHeader"),
    timeAccuracy: da(e, "timeAccuracy"),
    isDragging: $,
    inputValue: re,
    inputEvents: ee,
    dateParts: R,
    attributes: Y,
    rules: de,
    move: It,
    moveBy: Lr,
    moveToValue: je,
    updateValue: v,
    showPopover: Pe,
    hidePopover: ze,
    togglePopover: Ot,
    onDayClick: ce,
    onDayKeydown: ve,
    onDayMouseEnter: ye,
    onPopoverBeforeShow: T,
    onPopoverAfterShow: W,
    onPopoverBeforeHide: J,
    onPopoverAfterHide: Z
  };
  return on(Lf, S), S;
}
function ti() {
  const e = zt(Lf);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const UO = [
  { value: 0, label: "12" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" }
], WO = [
  { value: 12, label: "12" },
  { value: 13, label: "1" },
  { value: 14, label: "2" },
  { value: 15, label: "3" },
  { value: 16, label: "4" },
  { value: 17, label: "5" },
  { value: 18, label: "6" },
  { value: 19, label: "7" },
  { value: 20, label: "8" },
  { value: 21, label: "9" },
  { value: 22, label: "10" },
  { value: 23, label: "11" }
];
function zO(e) {
  const t = ti(), {
    locale: r,
    isRange: n,
    isTimeMode: a,
    dateParts: o,
    rules: s,
    is24hr: i,
    hideTimeHeader: l,
    timeAccuracy: c,
    updateValue: u
  } = t;
  function f(x) {
    x = Object.assign(h.value, x);
    let H = null;
    if (n.value) {
      const ae = d.value ? x : o.value[0], V = d.value ? o.value[1] : x;
      H = { start: ae, end: V };
    } else
      H = x;
    u(H, {
      patch: "time",
      targetPriority: d.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const d = _(() => e.position === 0), h = _(
    () => o.value[e.position] || { isValid: !1 }
  ), m = _(() => Zs(h.value)), b = _(() => !!h.value.isValid), D = _(() => !l.value && b.value), y = _(() => {
    if (!m.value)
      return null;
    let x = r.value.toDate(h.value);
    return h.value.hours === 24 && (x = new Date(x.getTime() - 1)), x;
  }), B = _({
    get() {
      return h.value.hours;
    },
    set(x) {
      f({ hours: x });
    }
  }), F = _({
    get() {
      return h.value.minutes;
    },
    set(x) {
      f({ minutes: x });
    }
  }), I = _({
    get() {
      return h.value.seconds;
    },
    set(x) {
      f({ seconds: x });
    }
  }), A = _({
    get() {
      return h.value.milliseconds;
    },
    set(x) {
      f({ milliseconds: x });
    }
  }), G = _({
    get() {
      return h.value.hours < 12;
    },
    set(x) {
      x = String(x).toLowerCase() == "true";
      let H = B.value;
      x && H >= 12 ? H -= 12 : !x && H < 12 && (H += 12), f({ hours: H });
    }
  }), $ = _(
    () => ck(h.value, s.value[e.position])
  ), M = _(() => UO.filter(
    (x) => $.value.hours.some((H) => H.value === x.value)
  )), R = _(() => WO.filter(
    (x) => $.value.hours.some((H) => H.value === x.value)
  )), j = _(() => i.value ? $.value.hours : G.value ? M.value : R.value), X = _(() => {
    const x = [];
    return Ht(M.value) && x.push({ value: !0, label: "AM" }), Ht(R.value) && x.push({ value: !1, label: "PM" }), x;
  });
  return {
    ...t,
    showHeader: D,
    timeAccuracy: c,
    parts: h,
    isValid: b,
    date: y,
    hours: B,
    minutes: F,
    seconds: I,
    milliseconds: A,
    options: $,
    hourOptions: j,
    isAM: G,
    isAMOptions: X,
    is24hr: i
  };
}
const KO = ["value"], GO = ["value", "disabled"], VO = {
  key: 1,
  class: "vc-base-sizer",
  "aria-hidden": "true"
}, QO = {
  inheritAttrs: !1
}, _n = /* @__PURE__ */ We({
  ...QO,
  __name: "BaseSelect",
  props: {
    options: null,
    modelValue: null,
    alignRight: { type: Boolean },
    alignLeft: { type: Boolean },
    showIcon: { type: Boolean },
    fitContent: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = _(() => {
      const n = t.options.find((a) => a.value === t.modelValue);
      return n == null ? void 0 : n.label;
    });
    return (n, a) => (K(), ne("div", {
      class: Ae(["vc-base-select", {
        "vc-fit-content": e.fitContent,
        "vc-has-icon": e.showIcon
      }])
    }, [
      q("select", Sr(n.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft
        }],
        onChange: a[0] || (a[0] = (o) => n.$emit("update:modelValue", o.target.value))
      }), [
        (K(!0), ne(we, null, mt(e.options, (o) => (K(), ne("option", {
          key: o.value,
          value: o.value,
          disabled: o.disabled
        }, Re(o.label), 9, GO))), 128))
      ], 16, KO),
      e.showIcon ? (K(), Ge(rn, {
        key: 0,
        name: "ChevronDown",
        size: "18"
      })) : Fe("", !0),
      e.fitContent ? (K(), ne("div", VO, Re(P(r)), 1)) : Fe("", !0)
    ], 2));
  }
}), ZO = {
  key: 0,
  class: "vc-time-header"
}, qO = { class: "vc-time-weekday" }, JO = { class: "vc-time-month" }, XO = { class: "vc-time-day" }, e2 = { class: "vc-time-year" }, t2 = { class: "vc-time-select-group" }, r2 = /* @__PURE__ */ q("span", { class: "vc-time-colon" }, ":", -1), n2 = /* @__PURE__ */ q("span", { class: "vc-time-colon" }, ":", -1), a2 = /* @__PURE__ */ q("span", { class: "vc-time-decimal" }, ".", -1), ac = /* @__PURE__ */ We({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const n = zO(e);
    t(n);
    const {
      locale: a,
      isValid: o,
      date: s,
      hours: i,
      minutes: l,
      seconds: c,
      milliseconds: u,
      options: f,
      hourOptions: d,
      isTimeMode: h,
      isAM: m,
      isAMOptions: b,
      is24hr: D,
      showHeader: y,
      timeAccuracy: B
    } = n;
    return (F, I) => (K(), ne("div", {
      class: Ae(["vc-time-picker", [{ "vc-invalid": !P(o), "vc-attached": !P(h) }]])
    }, [
      le(ht, { name: "time-header" }, {
        default: Ee(() => [
          P(y) && P(s) ? (K(), ne("div", ZO, [
            q("span", qO, Re(P(a).formatDate(P(s), "WWW")), 1),
            q("span", JO, Re(P(a).formatDate(P(s), "MMM")), 1),
            q("span", XO, Re(P(a).formatDate(P(s), "D")), 1),
            q("span", e2, Re(P(a).formatDate(P(s), "YYYY")), 1)
          ])) : Fe("", !0)
        ]),
        _: 1
      }),
      q("div", t2, [
        le(rn, {
          name: "Clock",
          size: "17"
        }),
        le(_n, {
          modelValue: P(i),
          "onUpdate:modelValue": I[0] || (I[0] = (A) => Se(i) ? i.value = A : null),
          modelModifiers: { number: !0 },
          options: P(d),
          class: "vc-time-select-hours",
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        P(B) > 1 ? (K(), ne(we, { key: 0 }, [
          r2,
          le(_n, {
            modelValue: P(l),
            "onUpdate:modelValue": I[1] || (I[1] = (A) => Se(l) ? l.value = A : null),
            modelModifiers: { number: !0 },
            options: P(f).minutes,
            class: "vc-time-select-minutes",
            "align-left": P(B) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Fe("", !0),
        P(B) > 2 ? (K(), ne(we, { key: 1 }, [
          n2,
          le(_n, {
            modelValue: P(c),
            "onUpdate:modelValue": I[2] || (I[2] = (A) => Se(c) ? c.value = A : null),
            modelModifiers: { number: !0 },
            options: P(f).seconds,
            class: "vc-time-select-seconds",
            "align-left": P(B) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Fe("", !0),
        P(B) > 3 ? (K(), ne(we, { key: 2 }, [
          a2,
          le(_n, {
            modelValue: P(u),
            "onUpdate:modelValue": I[3] || (I[3] = (A) => Se(u) ? u.value = A : null),
            modelModifiers: { number: !0 },
            options: P(f).milliseconds,
            class: "vc-time-select-milliseconds",
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : Fe("", !0),
        P(D) ? Fe("", !0) : (K(), Ge(_n, {
          key: 3,
          modelValue: P(m),
          "onUpdate:modelValue": I[4] || (I[4] = (A) => Se(m) ? m.value = A : null),
          options: P(b)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), Rf = /* @__PURE__ */ We({
  __name: "DatePickerBase",
  setup(e) {
    const {
      attributes: t,
      calendarRef: r,
      color: n,
      displayMode: a,
      isDateTimeMode: o,
      isTimeMode: s,
      isRange: i,
      onDayClick: l,
      onDayMouseEnter: c,
      onDayKeydown: u
    } = ti(), f = i.value ? [0, 1] : [0];
    return (d, h) => P(s) ? (K(), ne("div", {
      key: 0,
      class: Ae(`vc-container vc-bordered vc-${P(n)} vc-${P(a)}`)
    }, [
      (K(!0), ne(we, null, mt(P(f), (m) => (K(), Ge(ac, {
        key: m,
        position: m
      }, null, 8, ["position"]))), 128))
    ], 2)) : (K(), Ge(FO, {
      key: 1,
      attributes: P(t),
      ref_key: "calendarRef",
      ref: r,
      onDayclick: P(l),
      onDaymouseenter: P(c),
      onDaykeydown: P(u)
    }, {
      footer: Ee(() => [
        P(o) ? (K(!0), ne(we, { key: 0 }, mt(P(f), (m) => (K(), Ge(ac, {
          key: m,
          position: m
        }, null, 8, ["position"]))), 128)) : Fe("", !0),
        le(ht, { name: "dp-footer" })
      ]),
      _: 1
    }, 8, ["attributes", "onDayclick", "onDaymouseenter", "onDaykeydown"]));
  }
}), o2 = {
  inheritAttrs: !1
}, s2 = /* @__PURE__ */ We({
  ...o2,
  __name: "DatePickerPopover",
  setup(e) {
    const {
      datePickerPopoverId: t,
      color: r,
      displayMode: n,
      popoverRef: a,
      onPopoverBeforeShow: o,
      onPopoverAfterShow: s,
      onPopoverBeforeHide: i,
      onPopoverAfterHide: l
    } = ti();
    return (c, u) => (K(), Ge(ei, {
      id: P(t),
      placement: "bottom-start",
      class: Ae(`vc-date-picker-content vc-${P(r)} vc-${P(n)}`),
      ref_key: "popoverRef",
      ref: a,
      onBeforeShow: P(o),
      onAfterShow: P(s),
      onBeforeHide: P(i),
      onAfterHide: P(l)
    }, {
      default: Ee(() => [
        le(Rf, kn(Ca(c.$attrs)), null, 16)
      ]),
      _: 1
    }, 8, ["id", "class", "onBeforeShow", "onAfterShow", "onBeforeHide", "onAfterHide"]));
  }
}), i2 = /* @__PURE__ */ We({
  inheritAttrs: !1,
  emits: jO,
  props: BO,
  components: { DatePickerBase: Rf, DatePickerPopover: s2 },
  setup(e, t) {
    const r = HO(e, t), n = an(tf(r, "calendarRef", "popoverRef"));
    return { ...r, slotCtx: n };
  }
});
function l2(e, t, r, n, a, o) {
  const s = Tt("DatePickerPopover"), i = Tt("DatePickerBase");
  return e.$slots.default ? (K(), ne(we, { key: 0 }, [
    zn(e.$slots, "default", kn(Ca(e.slotCtx))),
    le(s, kn(Ca(e.$attrs)), null, 16)
  ], 64)) : (K(), Ge(i, kn(Sr({ key: 1 }, e.$attrs)), null, 16));
}
const c2 = /* @__PURE__ */ vr(i2, [["render", l2]]);
function rs(e) {
  "@babel/helpers - typeof";
  return rs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rs(e);
}
function u2(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Qn(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function ns(e) {
  Qn(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || rs(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function oc(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function sc(e) {
  Qn(1, arguments);
  var t = ns(e);
  return t.setHours(0, 0, 0, 0), t;
}
var f2 = 864e5;
function d2(e, t) {
  Qn(2, arguments);
  var r = sc(e), n = sc(t), a = r.getTime() - oc(r), o = n.getTime() - oc(n);
  return Math.round((a - o) / f2);
}
var Ff = 6e4, Bf = 36e5;
function ic(e, t) {
  var r = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
  return r < 0 ? -1 : r > 0 ? 1 : r;
}
function v2(e, t) {
  Qn(2, arguments);
  var r = ns(e), n = ns(t), a = ic(r, n), o = Math.abs(d2(r, n));
  r.setDate(r.getDate() - a * o);
  var s = +(ic(r, n) === -a), i = a * (o - s);
  return i === 0 ? 0 : i;
}
function la(e, t) {
  var r;
  Qn(1, arguments);
  var n = u2((r = t == null ? void 0 : t.additionalDigits) !== null && r !== void 0 ? r : 2);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = m2(e), o;
  if (a.date) {
    var s = y2(a.date, n);
    o = b2(s.restDateString, s.year);
  }
  if (!o || isNaN(o.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var i = o.getTime(), l = 0, c;
  if (a.time && (l = w2(a.time), isNaN(l)))
    return /* @__PURE__ */ new Date(NaN);
  if (a.timezone) {
    if (c = D2(a.timezone), isNaN(c))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var u = new Date(i + l), f = /* @__PURE__ */ new Date(0);
    return f.setFullYear(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()), f.setHours(u.getUTCHours(), u.getUTCMinutes(), u.getUTCSeconds(), u.getUTCMilliseconds()), f;
  }
  return new Date(i + l + c);
}
var ca = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, p2 = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, h2 = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, g2 = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function m2(e) {
  var t = {}, r = e.split(ca.dateTimeDelimiter), n;
  if (r.length > 2)
    return t;
  if (/:/.test(r[0]) ? n = r[0] : (t.date = r[0], n = r[1], ca.timeZoneDelimiter.test(t.date) && (t.date = e.split(ca.timeZoneDelimiter)[0], n = e.substr(t.date.length, e.length))), n) {
    var a = ca.timezone.exec(n);
    a ? (t.time = n.replace(a[1], ""), t.timezone = a[1]) : t.time = n;
  }
  return t;
}
function y2(e, t) {
  var r = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), n = e.match(r);
  if (!n)
    return {
      year: NaN,
      restDateString: ""
    };
  var a = n[1] ? parseInt(n[1]) : null, o = n[2] ? parseInt(n[2]) : null;
  return {
    year: o === null ? a : o * 100,
    restDateString: e.slice((n[1] || n[2]).length)
  };
}
function b2(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var r = e.match(p2);
  if (!r)
    return /* @__PURE__ */ new Date(NaN);
  var n = !!r[4], a = xn(r[1]), o = xn(r[2]) - 1, s = xn(r[3]), i = xn(r[4]), l = xn(r[5]) - 1;
  if (n)
    return M2(t, i, l) ? _2(t, i, l) : /* @__PURE__ */ new Date(NaN);
  var c = /* @__PURE__ */ new Date(0);
  return !A2(t, o, s) || !C2(t, a) ? /* @__PURE__ */ new Date(NaN) : (c.setUTCFullYear(t, o, Math.max(a, s)), c);
}
function xn(e) {
  return e ? parseInt(e) : 1;
}
function w2(e) {
  var t = e.match(h2);
  if (!t)
    return NaN;
  var r = Oo(t[1]), n = Oo(t[2]), a = Oo(t[3]);
  return k2(r, n, a) ? r * Bf + n * Ff + a * 1e3 : NaN;
}
function Oo(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function D2(e) {
  if (e === "Z")
    return 0;
  var t = e.match(g2);
  if (!t)
    return 0;
  var r = t[1] === "+" ? -1 : 1, n = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return O2(n, a) ? r * (n * Bf + a * Ff) : NaN;
}
function _2(e, t, r) {
  var n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  var a = n.getUTCDay() || 7, o = (t - 1) * 7 + r + 1 - a;
  return n.setUTCDate(n.getUTCDate() + o), n;
}
var x2 = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function jf(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function A2(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (x2[t] || (jf(e) ? 29 : 28));
}
function C2(e, t) {
  return t >= 1 && t <= (jf(e) ? 366 : 365);
}
function M2(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function k2(e, t, r) {
  return e === 24 ? t === 0 && r === 0 : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function O2(e, t) {
  return t >= 0 && t <= 59;
}
const I2 = "data:image/png;base64,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", $2 = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.flex{display:flex!important}.h-6{height:1.5rem!important}.h-2{height:.5rem!important}.h-4{height:1rem!important}.h-5{height:1.25rem!important}.w-full{width:100%!important}.w-2{width:.5rem!important}.w-4{width:1rem!important}.w-5{width:1.25rem!important}.w-fit{width:-moz-fit-content!important;width:fit-content!important}.cursor-pointer{cursor:pointer!important}.appearance-none{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important}.flex-col{flex-direction:column!important}.flex-wrap{flex-wrap:wrap!important}.items-end{align-items:flex-end!important}.items-center{align-items:center!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-4{gap:1rem!important}.break-words{overflow-wrap:break-word!important}.rounded-full{border-radius:9999px!important}.rounded-lg{border-radius:.5rem!important}.border{border-width:1px!important}.border-solid{border-style:solid!important}.border-none{border-style:none!important}.bg-booked{--tw-bg-opacity: 1 !important;background-color:rgb(150 3 3 / var(--tw-bg-opacity))!important}.bg-primary-blue\\/90{background-color:#0987c5e6!important}.bg-secondary-braun{--tw-bg-opacity: 1 !important;background-color:rgb(216 189 0 / var(--tw-bg-opacity))!important}.bg-white{--tw-bg-opacity: 1 !important;background-color:rgb(255 255 255 / var(--tw-bg-opacity))!important}.object-contain{-o-object-fit:contain!important;object-fit:contain!important}.p-2{padding:.5rem!important}.p-4{padding:1rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.text-center{text-align:center!important}.text-sm{font-size:.875rem!important;line-height:1.25rem!important}.text-xs{font-size:.75rem!important;line-height:1rem!important}.font-medium{font-weight:500!important}.font-normal{font-weight:400!important}.font-semibold{font-weight:600!important}.tabular-nums{--tw-numeric-spacing: tabular-nums !important;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)!important}.text-gray-700{--tw-text-opacity: 1 !important;color:rgb(55 65 81 / var(--tw-text-opacity))!important}.text-primary-braun{--tw-text-opacity: 1 !important;color:rgb(107 63 18 / var(--tw-text-opacity))!important}.text-red-500{--tw-text-opacity: 1 !important;color:rgb(239 68 68 / var(--tw-text-opacity))!important}.text-white{--tw-text-opacity: 1 !important;color:rgb(255 255 255 / var(--tw-text-opacity))!important}.no-underline{text-decoration-line:none!important}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1) !important;--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)!important}.duration-300{transition-duration:.3s!important}.hover\\:bg-primary-blue:hover{--tw-bg-opacity: 1 !important;background-color:rgb(9 135 197 / var(--tw-bg-opacity))!important}.hover\\:bg-secondary-blue\\/40:hover{background-color:#75bce166!important}@media not all and (min-width: 768px){.max-md\\:flex-wrap{flex-wrap:wrap!important}}@media not all and (min-width: 640px){.max-sm\\:flex-wrap{flex-wrap:wrap!important}}.vc-popover-content-wrapper{--popover-horizontal-content-offset: 8px;--popover-vertical-content-offset: 10px;--popover-caret-horizontal-offset: 18px;--popover-caret-vertical-offset: 8px;position:absolute;display:block;outline:none;z-index:10}.vc-popover-content-wrapper:not(.is-interactive){pointer-events:none}.vc-popover-content{position:relative;color:var(--vc-popover-content-color);font-weight:var(--vc-font-medium);background-color:var(--vc-popover-content-bg);border:1px solid;border-color:var(--vc-popover-content-border);border-radius:var(--vc-rounded-lg);padding:4px;outline:none;z-index:10;box-shadow:var(--vc-shadow-lg)}.vc-popover-content.direction-bottom{margin-top:var(--popover-vertical-content-offset)}.vc-popover-content.direction-top{margin-bottom:var(--popover-vertical-content-offset)}.vc-popover-content.direction-left{margin-right:var(--popover-horizontal-content-offset)}.vc-popover-content.direction-right{margin-left:var(--popover-horizontal-content-offset)}.vc-popover-caret{content:"";position:absolute;display:block;width:12px;height:12px;border-top:inherit;border-left:inherit;background-color:inherit;z-index:-1}.vc-popover-caret.direction-bottom{top:0}.vc-popover-caret.direction-bottom.align-left{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-center{transform:translate(-50%) translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-right{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-top{top:100%}.vc-popover-caret.direction-top.align-left{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-center{transform:translate(-50%) translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-right{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-left{left:100%}.vc-popover-caret.direction-left.align-top{transform:translate(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-middle{transform:translateY(-50%) translate(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-bottom{transform:translate(-50%) rotate(135deg)}.vc-popover-caret.direction-right{left:0}.vc-popover-caret.direction-right.align-top{transform:translate(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-middle{transform:translateY(-50%) translate(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-bottom{transform:translate(-50%) rotate(-45deg)}.vc-popover-caret.align-left{left:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-center{left:50%}.vc-popover-caret.align-right{right:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-top{top:var(--popover-caret-vertical-offset)}.vc-popover-caret.align-middle{top:50%}.vc-popover-caret.align-bottom{bottom:var(--popover-caret-vertical-offset)}.vc-day-popover-row{display:flex;align-items:center;transition:var(--vc-day-content-transition)}.vc-day-popover-row-indicator{display:flex;justify-content:center;align-items:center;flex-grow:0;width:15px}.vc-day-popover-row-indicator span{transition:var(--vc-day-content-transition)}.vc-day-popover-row-label{display:flex;align-items:center;flex-wrap:none;flex-grow:1;width:-moz-max-content;width:max-content;margin-left:4px;margin-right:4px;font-size:var(--vc-text-xs);line-height:var(--vc-leading-normal)}.vc-day-popover-row-highlight{width:8px;height:5px;border-radius:3px}.vc-day-popover-row-bar{width:10px;height:3px}.vc-base-icon{display:inline-block;stroke:currentColor;stroke-width:2;fill:none}.vc-header{display:grid;grid-gap:4px;align-items:center;height:30px;margin-top:10px;padding-left:10px;padding-right:10px}.vc-header.is-lg{font-size:var(--vc-text-lg)}.vc-header.is-xl{font-size:var(--vc-text-xl)}.vc-header.is-2xl{font-size:var(--vc-text-2xl)}.vc-header .vc-title-wrapper{grid-row:1;grid-column:title}.vc-header .vc-prev{grid-row:1;grid-column:prev}.vc-header .vc-next{grid-row:1;grid-column:next}.vc-header .vc-title,.vc-header .vc-prev,.vc-header .vc-next{display:flex;align-items:center;border:0;border-radius:var(--vc-rounded);pointer-events:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.vc-header .vc-title{color:var(--vc-header-title-color);font-weight:var(--vc-font-semibold);white-space:nowrap;padding:0 8px;margin:0;line-height:30px}.vc-header .vc-title:hover{opacity:.75}.vc-header .vc-arrow{display:flex;justify-content:center;align-items:center;color:var(--vc-header-arrow-color);width:28px;height:30px;margin:0;padding:0}.vc-header .vc-arrow:hover{background:var(--vc-header-arrow-hover-bg)}.vc-header .vc-arrow:disabled{opacity:.25;pointer-events:none}.vc-nav-header{display:flex;justify-content:space-between}.vc-nav-title,.vc-nav-arrow,.vc-nav-item{font-size:var(--vc-text-sm);margin:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:0;border-radius:var(--vc-rounded);white-space:nowrap}.vc-nav-title:hover,.vc-nav-arrow:hover,.vc-nav-item:hover{background-color:var(--vc-nav-hover-bg)}.vc-nav-title:disabled,.vc-nav-arrow:disabled,.vc-nav-item:disabled{opacity:.25;pointer-events:none}.vc-nav-title{color:var(--vc-nav-title-color);font-weight:var(--vc-font-bold);line-height:var(--vc-leading-snug);height:30px;padding:0 6px}.vc-nav-arrow{display:flex;justify-content:center;align-items:center;color:var(--vc-header-arrow-color);width:26px;height:30px;padding:0}.vc-nav-items{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:2px;grid-column-gap:5px;margin-top:2px}.vc-nav-item{width:48px;text-align:center;font-weight:var(--vc-font-semibold);line-height:var(--vc-leading-snug);padding:6px 0}.vc-nav-item.is-active{color:var(--vc-nav-item-active-color);background-color:var(--vc-nav-item-active-bg);font-weight:var(--vc-font-bold)}.vc-nav-item.is-active:not(:focus){box-shadow:var(--vc-nav-item-active-box-shadow)}.vc-nav-item.is-current{color:var(--vc-nav-item-current-color)}.vc-day{position:relative;min-height:32px;z-index:1}.vc-monthly .is-not-in-month *{opacity:0;pointer-events:none}.vc-day-layer{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}.vc-day-box-center-center{display:flex;justify-content:center;align-items:center;transform-origin:50% 50%}.vc-day-box-left-center{display:flex;justify-content:flex-start;align-items:center;transform-origin:0% 50%}.vc-day-box-right-center{display:flex;justify-content:flex-end;align-items:center;transform-origin:100% 50%}.vc-day-box-center-bottom{display:flex;justify-content:center;align-items:flex-end}.vc-day-content{display:flex;justify-content:center;align-items:center;font-size:var(--vc-text-sm);font-weight:var(--vc-font-medium);width:28px;height:28px;line-height:28px;border-radius:var(--vc-rounded-full);-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.vc-day-content:hover{background-color:var(--vc-day-content-hover-bg)}.vc-day-content.vc-disabled{color:var(--vc-day-content-disabled-color)}.vc-content:not(.vc-base){font-weight:var(--vc-font-bold);color:var(--vc-content-color)}.vc-highlights{overflow:hidden;pointer-events:none;z-index:-1}.vc-highlight{width:28px;height:28px}.vc-highlight.vc-highlight-base-start{width:50%!important;border-radius:0!important;border-right-width:0!important}.vc-highlight.vc-highlight-base-end{width:50%!important;border-radius:0!important;border-left-width:0!important}.vc-highlight.vc-highlight-base-middle{width:100%;border-radius:0!important;border-left-width:0!important;border-right-width:0!important;margin:0 -1px}.vc-highlight-bg-outline,.vc-highlight-bg-none{background-color:var(--vc-highlight-outline-bg);border:2px solid;border-color:var(--vc-highlight-outline-border);border-radius:var(--vc-rounded-full)}.vc-highlight-bg-light{background-color:var(--vc-highlight-light-bg);border-radius:var(--vc-rounded-full)}.vc-highlight-bg-solid{background-color:var(--vc-highlight-solid-bg);border-radius:var(--vc-rounded-full)}.vc-highlight-content-outline,.vc-highlight-content-none{font-weight:var(--vc-font-bold);color:var(--vc-highlight-outline-content-color)}.vc-highlight-content-light{font-weight:var(--vc-font-bold);color:var(--vc-highlight-light-content-color)}.vc-highlight-content-solid{font-weight:var(--vc-font-bold);color:var(--vc-highlight-solid-content-color)}.vc-dots{display:flex;justify-content:center;align-items:center}.vc-dot{width:5px;height:5px;border-radius:9999px;transition:var(--vc-day-content-transition)}.vc-dot:not(:last-child){margin-right:3px}.vc-bars{display:flex;justify-content:flex-start;align-items:center;width:75%}.vc-bar{flex-grow:1;height:3px;transition:var(--vc-day-content-transition)}.vc-dot{background-color:var(--vc-dot-bg)}.vc-bar{background-color:var(--vc-bar-bg)}.vc-pane{min-width:250px}.vc-weeknumber{display:flex;justify-content:center;align-items:center;position:absolute}.vc-weeknumber.is-left{left:calc(var(--vc-weeknumber-offset-inside) * -1)}.vc-weeknumber.is-right{right:calc(var(--vc-weeknumber-offset-inside) * -1)}.vc-weeknumber.is-left-outside{left:calc(var(--vc-weeknumber-offset-outside) * -1)}.vc-weeknumber.is-right-outside{right:calc(var(--vc-weeknumber-offset-outside) * -1)}.vc-weeknumber-content{display:flex;justify-content:center;align-items:center;font-size:var(--vc-text-xs);font-weight:var(--vc-font-medium);font-style:italic;width:28px;height:28px;margin-top:2px;color:var(--vc-weeknumber-color);-webkit-user-select:none;-moz-user-select:none;user-select:none}.vc-weeks{position:relative;-webkit-overflow-scrolling:touch;padding:6px;min-width:232px}.vc-weeks.vc-show-weeknumbers-left{margin-left:var(--vc-weeknumber-offset-inside)}.vc-weeks.vc-show-weeknumbers-right{margin-right:var(--vc-weeknumber-offset-inside)}.vc-weekday{text-align:center;color:var(--vc-weekday-color);font-size:var(--vc-text-sm);font-weight:var(--vc-font-bold);line-height:14px;padding-top:4px;padding-bottom:8px;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.vc-week,.vc-weekdays{display:grid;grid-template-columns:repeat(7,1fr);position:relative}.vc-pane-container{width:100%;position:relative}.vc-pane-container.in-transition{overflow:hidden}.vc-pane-layout{display:grid}.vc-pane-header-wrapper{position:absolute;top:0;width:100%;pointer-events:none}.vc-day-popover-container{font-size:var(--vc-text-xs);font-weight:var(--vc-font-medium)}.vc-day-popover-header{font-size:var(--vc-text-xs);color:var(--vc-day-popover-header-color);font-weight:var(--vc-font-semibold);text-align:center}.vc-base-select{position:relative;display:flex;justify-content:center;align-items:center;height:30px;font-size:var(--vc-text-base);font-weight:var(--vc-font-medium)}.vc-base-select.vc-has-icon select{padding:0 27px 0 9px}.vc-base-select.vc-has-icon .vc-base-sizer{padding:0 28px 0 10px}.vc-base-select.vc-fit-content select{position:absolute;top:0;left:0;width:100%}.vc-base-select .vc-base-icon{position:absolute;top:6px;right:4px;opacity:.6;pointer-events:none}.vc-base-select .vc-base-sizer{font-size:var(--vc-text-base);font-weight:var(--vc-font-medium);color:transparent;padding:0 8px;margin:0}.vc-base-select select{display:inline-flex;justify-content:center;color:var(--vc-select-color);display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--vc-select-bg);border-radius:var(--vc-rounded);height:30px;width:-moz-max-content;width:max-content;padding:0 7px;margin:0;line-height:var(--leading-none);text-indent:0px;background-image:none;cursor:pointer;text-align:center}.vc-base-select select:hover{background-color:var(--vc-select-hover-bg)}.vc-base-select select.vc-align-left{text-align:left}.vc-base-select select.vc-align-right{text-align:right}.vc-time-picker{display:flex;flex-direction:column;align-items:center;padding:8px 4px}.vc-time-picker.vc-invalid{pointer-events:none;opacity:.5}.vc-time-picker.vc-attached{border-top:1px solid var(--vc-time-picker-border)}.vc-time-picker>*+*{margin-top:4px}.vc-time-header{display:flex;align-items:center;font-size:var(--vc-text-sm);font-weight:var(--vc-font-semibold);text-transform:uppercase;margin-top:-4px;padding-left:4px;padding-right:4px;line-height:21px}.vc-time-select-group{display:inline-flex;align-items:center;padding:0 4px;background:var(--vc-time-select-group-bg);border-radius:var(--vc-rounded-md);border:1px solid var(--vc-time-select-group-border)}.vc-time-select-group .vc-base-icon{margin-right:4px;color:var(--vc-time-select-group-icon-color)}.vc-time-select-group select{background:transparent;padding:0 4px}.vc-time-weekday{color:var(--vc-time-weekday-color);letter-spacing:var(--tracking-wide)}.vc-time-month{color:var(--vc-time-month-color);margin-left:8px}.vc-time-day{color:var(--vc-time-day-color);margin-left:4px}.vc-time-year{color:var(--vc-time-year-color);margin-left:8px}.vc-time-colon{margin:0 1px 2px 2px}.vc-time-decimal{margin:0 0 0 1px}.vc-none-enter-active,.vc-none-leave-active{transition-duration:0s}.vc-fade-enter-active,.vc-fade-leave-active,.vc-slide-left-enter-active,.vc-slide-left-leave-active,.vc-slide-right-enter-active,.vc-slide-right-leave-active,.vc-slide-up-enter-active,.vc-slide-up-leave-active,.vc-slide-down-enter-active,.vc-slide-down-leave-active,.vc-slide-fade-enter-active,.vc-slide-fade-leave-active{transition:transform var(--vc-slide-duration) var(--vc-slide-timing),opacity var(--vc-slide-duration) var(--vc-slide-timing);backface-visibility:hidden;pointer-events:none}.vc-none-leave-active,.vc-fade-leave-active,.vc-slide-left-leave-active,.vc-slide-right-leave-active,.vc-slide-up-leave-active,.vc-slide-down-leave-active{position:absolute!important;width:100%}.vc-none-enter-from,.vc-none-leave-to,.vc-fade-enter-from,.vc-fade-leave-to,.vc-slide-left-enter-from,.vc-slide-left-leave-to,.vc-slide-right-enter-from,.vc-slide-right-leave-to,.vc-slide-up-enter-from,.vc-slide-up-leave-to,.vc-slide-down-enter-from,.vc-slide-down-leave-to,.vc-slide-fade-enter-from,.vc-slide-fade-leave-to{opacity:0}.vc-slide-left-enter-from,.vc-slide-right-leave-to,.vc-slide-fade-enter-from.direction-left,.vc-slide-fade-leave-to.direction-left{transform:translate(var(--vc-slide-translate))}.vc-slide-right-enter-from,.vc-slide-left-leave-to,.vc-slide-fade-enter-from.direction-right,.vc-slide-fade-leave-to.direction-right{transform:translate(calc(-1 * var(--vc-slide-translate)))}.vc-slide-up-enter-from,.vc-slide-down-leave-to,.vc-slide-fade-enter-from.direction-top,.vc-slide-fade-leave-to.direction-top{transform:translateY(var(--vc-slide-translate))}.vc-slide-down-enter-from,.vc-slide-up-leave-to,.vc-slide-fade-enter-from.direction-bottom,.vc-slide-fade-leave-to.direction-bottom{transform:translateY(calc(-1 * var(--vc-slide-translate)))}:root{--vc-white: #ffffff;--vc-black: #000000;--vc-gray-50: #f8fafc;--vc-gray-100: #f1f5f9;--vc-gray-200: #e2e8f0;--vc-gray-300: #cbd5e1;--vc-gray-400: #94a3b8;--vc-gray-500: #64748b;--vc-gray-600: #475569;--vc-gray-700: #334155;--vc-gray-800: #1e293b;--vc-gray-900: #0f172a;--vc-font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;--vc-font-normal: 400;--vc-font-medium: 500;--vc-font-semibold: 600;--vc-font-bold: 700;--vc-text-2xs: 10px;--vc-text-xs: 12px;--vc-text-sm: 14px;--vc-text-base: 16px;--vc-text-lg: 18px;--vc-text-xl: 20px;--vc-text-2xl: 24px;--vc-leading-none: 1;--vc-leading-tight: 1.25;--vc-leading-snug: 1.375;--vc-leading-normal: 1.5;--vc-rounded: .25rem;--vc-rounded-md: .375rem;--vc-rounded-lg: .5rem;--vc-rounded-full: 9999px;--vc-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);--vc-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--vc-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, .06);--vc-slide-translate: 22px;--vc-slide-duration: .15s;--vc-slide-timing: ease;--vc-day-content-transition: all .13s ease-in;--vc-weeknumber-offset-inside: 26px;--vc-weeknumber-offset-outside: 34px}.vc-gray{--vc-accent-50: var(--vc-gray-50);--vc-accent-100: var(--vc-gray-100);--vc-accent-200: var(--vc-gray-200);--vc-accent-300: var(--vc-gray-300);--vc-accent-400: var(--vc-gray-400);--vc-accent-500: var(--vc-gray-500);--vc-accent-600: var(--vc-gray-600);--vc-accent-700: var(--vc-gray-700);--vc-accent-800: var(--vc-gray-800);--vc-accent-900: var(--vc-gray-900)}.vc-red{--vc-accent-50: #fef2f2;--vc-accent-100: #fee2e2;--vc-accent-200: #fecaca;--vc-accent-300: #fca5a5;--vc-accent-400: #f87171;--vc-accent-500: #ef4444;--vc-accent-600: #dc2626;--vc-accent-700: #b91c1c;--vc-accent-800: #991b1b;--vc-accent-900: #7f1d1d}.vc-orange{--vc-accent-50: #fff7ed;--vc-accent-100: #ffedd5;--vc-accent-200: #fed7aa;--vc-accent-300: #fdba74;--vc-accent-400: #fb923c;--vc-accent-500: #f97316;--vc-accent-600: #ea580c;--vc-accent-700: #c2410c;--vc-accent-800: #9a3412;--vc-accent-900: #7c2d12}.vc-yellow{--vc-accent-50: #fefce8;--vc-accent-100: #fef9c3;--vc-accent-200: #fef08a;--vc-accent-300: #fde047;--vc-accent-400: #facc15;--vc-accent-500: #eab308;--vc-accent-600: #ca8a04;--vc-accent-700: #a16207;--vc-accent-800: #854d0e;--vc-accent-900: #713f12}.vc-green{--vc-accent-50: #f0fdf4;--vc-accent-100: #dcfce7;--vc-accent-200: #bbf7d0;--vc-accent-300: #86efac;--vc-accent-400: #4ade80;--vc-accent-500: #22c55e;--vc-accent-600: #16a34a;--vc-accent-700: #15803d;--vc-accent-800: #166534;--vc-accent-900: #14532d}.vc-teal{--vc-accent-50: #f0fdfa;--vc-accent-100: #ccfbf1;--vc-accent-200: #99f6e4;--vc-accent-300: #5eead4;--vc-accent-400: #2dd4bf;--vc-accent-500: #14b8a6;--vc-accent-600: #0d9488;--vc-accent-700: #0f766e;--vc-accent-800: #115e59;--vc-accent-900: #134e4a}.vc-blue{--vc-accent-50: #eff6ff;--vc-accent-100: #dbeafe;--vc-accent-200: #bfdbfe;--vc-accent-300: #93c5fd;--vc-accent-400: #60a5fa;--vc-accent-500: #3b82f6;--vc-accent-600: #2563eb;--vc-accent-700: #1d4ed8;--vc-accent-800: #1e40af;--vc-accent-900: #1e3a8a}.vc-indigo{--vc-accent-50: #eef2ff;--vc-accent-100: #e0e7ff;--vc-accent-200: #c7d2fe;--vc-accent-300: #a5b4fc;--vc-accent-400: #818cf8;--vc-accent-500: #6366f1;--vc-accent-600: #4f46e5;--vc-accent-700: #4338ca;--vc-accent-800: #3730a3;--vc-accent-900: #312e81}.vc-purple{--vc-accent-50: #faf5ff;--vc-accent-100: #f3e8ff;--vc-accent-200: #e9d5ff;--vc-accent-300: #d8b4fe;--vc-accent-400: #c084fc;--vc-accent-500: #a855f7;--vc-accent-600: #9333ea;--vc-accent-700: #7e22ce;--vc-accent-800: #6b21a8;--vc-accent-900: #581c87}.vc-pink{--vc-accent-50: #fdf2f8;--vc-accent-100: #fce7f3;--vc-accent-200: #fbcfe8;--vc-accent-300: #f9a8d4;--vc-accent-400: #f472b6;--vc-accent-500: #ec4899;--vc-accent-600: #db2777;--vc-accent-700: #be185d;--vc-accent-800: #9d174d;--vc-accent-900: #831843}.vc-focus:focus-within{outline:0;box-shadow:var(--vc-focus-ring)}.vc-light{--vc-color: var(--vc-gray-900);--vc-bg: var(--vc-white);--vc-border: var(--vc-gray-300);--vc-hover-bg: hsla(211, 25%, 84%, .3);--vc-focus-ring: 0 0 0 2px rgb(59, 131, 246, .4);--vc-header-arrow-color: var(--vc-gray-500);--vc-header-arrow-hover-bg: var(--vc-gray-200);--vc-header-title-color: var(--vc-gray-900);--vc-weekday-color: var(--vc-gray-500);--vc-weeknumber-color: var(--vc-gray-400);--vc-nav-hover-bg: var(--vc-gray-200);--vc-nav-title-color: var(--vc-gray-900);--vc-nav-item-hover-box-shadow: none;--vc-nav-item-active-color: var(--vc-white);--vc-nav-item-active-bg: var(--vc-accent-500);--vc-nav-item-active-box-shadow: var(--vc-shadow);--vc-nav-item-current-color: var(--vc-accent-600);--vc-day-popover-container-color: var(--vc-white);--vc-day-popover-container-bg: var(--vc-gray-800);--vc-day-popover-container-border: var(--vc-gray-700);--vc-day-popover-header-color: var(--vc-gray-700);--vc-popover-content-color: var(--vc-gray-900);--vc-popover-content-bg: var(--vc-gray-50);--vc-popover-content-border: var(--vc-gray-300);--vc-time-picker-border: var(--vc-gray-300);--vc-time-weekday-color: var(--vc-gray-700);--vc-time-month-color: var(--vc-accent-600);--vc-time-day-color: var(--vc-accent-600);--vc-time-year-color: var(--vc-gray-500);--vc-time-select-group-bg: var(--vc-gray-50);--vc-time-select-group-border: var(--vc-gray-300);--vc-time-select-group-icon-color: var(--vc-accent-500);--vc-select-color: var(--vc-gray-900);--vc-select-bg: var(--vc-gray-100);--vc-select-hover-bg: var(--vc-gray-200);--vc-day-content-hover-bg: var(--vc-hover-bg);--vc-day-content-disabled-color: var(--vc-gray-400)}.vc-light.vc-attr,.vc-light .vc-attr{--vc-content-color: var(--vc-accent-600);--vc-highlight-outline-bg: var(--vc-white);--vc-highlight-outline-border: var(--vc-accent-600);--vc-highlight-outline-content-color: var(--vc-accent-700);--vc-highlight-light-bg: var(--vc-accent-200);--vc-highlight-light-content-color: var(--vc-accent-900);--vc-highlight-solid-bg: var(--vc-accent-600);--vc-highlight-solid-content-color: var(--vc-white);--vc-dot-bg: var(--vc-accent-600);--vc-bar-bg: var(--vc-accent-600)}.vc-dark{--vc-color: var(--vc-white);--vc-bg: var(--vc-gray-900);--vc-border: var(--vc-gray-700);--vc-hover-bg: hsla(216, 15%, 52%, .3);--vc-focus-ring: 0 0 0 2px rgb(59 130 246 / .7);--vc-header-arrow-color: var(--vc-gray-300);--vc-header-arrow-hover-bg: var(--vc-gray-800);--vc-header-title-color: var(--vc-gray-100);--vc-weekday-color: var(--vc-accent-200);--vc-weeknumber-color: var(--vc-gray-500);--vc-nav-hover-bg: var(--vc-gray-700);--vc-nav-title-color: var(--vc-gray-100);--vc-nav-item-hover-box-shadow: none;--vc-nav-item-active-color: var(--vc-white);--vc-nav-item-active-bg: var(--vc-accent-500);--vc-nav-item-active-box-shadow: none;--vc-nav-item-current-color: var(--vc-accent-400);--vc-day-popover-container-color: var(--vc-gray-800);--vc-day-popover-container-bg: var(--vc-white);--vc-day-popover-container-border: var(--vc-gray-100);--vc-day-popover-header-color: var(--vc-gray-300);--vc-popover-content-color: var(--vc-white);--vc-popover-content-bg: var(--vc-gray-800);--vc-popover-content-border: var(--vc-gray-700);--vc-time-picker-border: var(--vc-gray-700);--vc-time-weekday-color: var(--vc-gray-400);--vc-time-month-color: var(--vc-accent-400);--vc-time-day-color: var(--vc-accent-400);--vc-time-year-color: var(--vc-gray-500);--vc-time-select-group-bg: var(--vc-gray-700);--vc-time-select-group-border: var(--vc-gray-500);--vc-time-select-group-icon-color: var(--vc-accent-400);--vc-select-color: var(--vc-gray-200);--vc-select-bg: var(--vc-gray-700);--vc-select-hover-bg: var(--vc-gray-600);--vc-day-content-hover-bg: var(--vc-hover-bg);--vc-day-content-disabled-color: var(--vc-gray-600)}.vc-dark.vc-attr,.vc-dark .vc-attr{--vc-content-color: var(--vc-accent-500);--vc-highlight-outline-bg: var(--vc-gray-900);--vc-highlight-outline-border: var(--vc-accent-300);--vc-highlight-outline-content-color: var(--vc-accent-200);--vc-highlight-light-bg: var(--vc-accent-800);--vc-highlight-light-content-color: var(--vc-accent-100);--vc-highlight-solid-bg: var(--vc-accent-500);--vc-highlight-solid-content-color: var(--vc-white);--vc-dot-bg: var(--vc-accent-500);--vc-bar-bg: var(--vc-accent-500)}.vc-container{position:relative;display:inline-flex;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;font-family:var(--vc-font-family);color:var(--vc-color);background-color:var(--vc-bg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent}.vc-container,.vc-container *{box-sizing:border-box}.vc-container:focus,.vc-container *:focus{outline:none}.vc-container .vc-container{border:none}.vc-bordered{border:1px solid;border-color:var(--vc-border);border-radius:var(--vc-rounded-lg)}.vc-expanded{min-width:100%}.vc-transparent{background-color:transparent}.vc-date-picker-content{padding:0;background-color:var(--vc-bg)}.vc-date-picker-content .vc-container{border:0}div.vc-day{border-left:1px solid #e4e7e7!important;border-top:1px solid #e4e7e7!important;padding:0!important}div.vc-day.weekday-position-7{border-right:1px solid #e4e7e7!important}div.vc-weeks>div.vc-week:last-child>div.vc-day{border-bottom:1px solid #e4e7e7!important}div.vc-day-content{width:100%!important;border-radius:0!important;margin:0!important}.dp__theme_light{--dp-background-color: #ffffff;--dp-text-color: #212121;--dp-hover-color: #75bce1;--dp-hover-text-color: #ffffff;--dp-hover-icon-color: #ffffff;--dp-primary-color: #0987ca;--dp-primary-text-color: #ffffff;--dp-secondary-color: #212121;--dp-border-color: #ffffff;--dp-range-between-dates-background-color: var(--dp-hover-color, #75bce1);--dp-range-between-dates-text-color: var(--dp-hover-text-color, #ffffff);--dp-range-between-border-color: var(--dp-hover-color, #ffffff)}', T2 = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, P2 = {
  name: "Calendar",
  components: {
    "v-calendar": c2
  },
  props: {
    vehicleId: {
      type: String,
      required: !0,
      default: ""
    }
  },
  setup(e) {
    const n = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/calendar`, a = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/resolve`, o = be([
      {
        start: new Date(2e3, 0, 1),
        end: /* @__PURE__ */ new Date()
      }
    ]), s = be([
      {
        dates: /* @__PURE__ */ new Date()
      }
    ]), i = be(null), l = be({
      start: null,
      end: null
    }), c = be(!1), u = function($) {
      l.value = $;
    }, f = _(() => {
      var $, M, R;
      return `https://www.camperfuchs.de/checkout/${e.vehicleId}/${($ = i.value) == null ? void 0 : $.relevantStationId}?from=${(M = l.value) == null ? void 0 : M.start}&to=${(R = l.value) == null ? void 0 : R.end}`;
    }), d = _(() => {
      var $, M, R;
      return `https://www.camperfuchs.de/checkout/${e.vehicleId}/${($ = i.value) == null ? void 0 : $.relevantStationId}/request?from=${(M = l.value) == null ? void 0 : M.start}&to=${(R = l.value) == null ? void 0 : R.end}`;
    });
    function h($, M) {
      let R = la($), j = la(M);
      R > j && ([R, j] = [j, R]), s.value.push({
        highlight: {
          color: "white",
          fillMode: "solid",
          style: {
            color: "white",
            backgroundColor: "brown"
          }
        },
        dates: {
          start: R,
          end: j
        }
      }), o.value.push({
        start: R,
        end: j
      });
    }
    const m = be([]);
    function b($) {
      var j, X, x;
      let M = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
      for (let H = 0; H < ((j = $.value) == null ? void 0 : j.pickupAndReturnTimes.length); H++)
        for (let ae in (X = $.value) == null ? void 0 : X.pickupAndReturnTimes[H])
          (x = $.value) != null && x.pickupAndReturnTimes[H][ae].open || (R.add(H + 1), M.add(H));
      m.value = Array.from(M), s.value.push({
        highlight: {
          color: "black",
          fillMode: "solid",
          style: {
            color: "black",
            backgroundColor: "#d8bd00"
          }
        },
        dates: {
          repeat: {
            weekdays: Array.from(R)
          }
        }
      });
    }
    const D = async () => {
      try {
        const M = await (await fetch(n)).json();
        M.bookedDays.forEach((j) => h(j.from, j.to, "Fahrzeug ist nicht verfügbar", "#960303")), M.daysOff.forEach((j) => s.value.push({
          highlight: {
            color: "black",
            fillMode: "solid",
            style: {
              color: "black",
              backgroundColor: "#d8bd00"
            }
          },
          dates: {
            start: j.from,
            end: j.to
          }
        }));
        const R = await fetch(a);
        i.value = await R.json(), b(i);
      } catch ($) {
        console.error("An error occurred while fetching the data:", $);
      }
    }, y = _(() => {
      var $, M, R;
      return (($ = l.value) == null ? void 0 : $.start) === null || ((M = l.value) == null ? void 0 : M.end) === null || ((R = i.value) == null ? void 0 : R.relevantStationId) === null;
    }), B = _(() => {
      var M, R, j, X, x, H;
      let $ = {
        isValid: !1,
        season: "std",
        minDays: (M = i.value) == null ? void 0 : M.minDays.std,
        days: 0
      };
      if (((R = l.value) == null ? void 0 : R.start) !== null && ((j = l.value) == null ? void 0 : j.end) !== null) {
        let ae = (X = l.value) == null ? void 0 : X.start, V = (x = l.value) == null ? void 0 : x.end;
        if (c.value = m.value.includes(ae.getDay()) || m.value.includes(V.getDay()), ae > V) {
          let ee = ae;
          ae = V, V = ee;
        }
        const re = v2(V, ae);
        (H = i.value) == null || H.seasons.forEach((ee) => {
          const ie = la(ee.from), pe = la(ee.to);
          ae >= ie && V <= pe && ($.season = ee.type, $.minDays = i.value.minDays[ee.type], $.days = re);
        }), $.isValid = re >= $.minDays, $.days = re;
      }
      return $;
    }), F = _(() => {
      let $ = 0;
      return B.value.isValid && ($ = B.value.days * i.value.rates[B.value.season]), $;
    }), I = {
      std: "Standard Saison",
      high: "Hauptsaison",
      low: "Nebensaison"
    };
    return Pr(() => {
      D();
    }), {
      disabledDates: o,
      isDisabled: y,
      bookingUrl: f,
      requestUrl: d,
      article: i,
      isPickupReturnDaysWrong: c,
      season: I,
      isValidRange: B,
      totalRate: F,
      attributes: s,
      setRange: u,
      range: l,
      navigateToBookingUrl: () => {
        B.value.isValid && !c.value && window.open(f.value, "_blank");
      },
      navigateToRequestUrl: () => {
        B.value.isValid && !c.value && window.open(d.value, "_blank");
      },
      columns: 1,
      expanded: !0
    };
  }
}, S2 = { class: "flex flex-col items-center gap-4 bg-white p-2" }, E2 = /* @__PURE__ */ q("div", { class: "flex flex-col w-full gap-4" }, [
  /* @__PURE__ */ q("div", { class: "flex items-center gap-2 justify-between p-2 text-sm flex-wrap" }, [
    /* @__PURE__ */ q("div", { class: "itmes-center flex gap-1 max-sm:flex-wrap" }, [
      /* @__PURE__ */ q("span", { class: "h-5 w-5 border border-solid rounded-full" }),
      /* @__PURE__ */ q("span", null, " Fahrzeug ist buchbar ")
    ]),
    /* @__PURE__ */ q("div", { class: "itmes-center flex gap-1 max-sm:flex-wrap" }, [
      /* @__PURE__ */ q("span", { class: "h-5 w-5 bg-secondary-braun rounded-full" }),
      /* @__PURE__ */ q("span", null, " Standort geschlossen ")
    ]),
    /* @__PURE__ */ q("div", { class: "itmes-center flex gap-1 max-sm:flex-wrap" }, [
      /* @__PURE__ */ q("span", { class: "h-5 w-5 bg-booked rounded-full" }),
      /* @__PURE__ */ q("span", null, " Fahrzeug ist nicht verfügbar ")
    ])
  ]),
  /* @__PURE__ */ q("a", {
    href: "https://www.camperfuchs.de/wohnmobil-mieten",
    target: "_blank",
    class: "flex items-end gap-2 justify-center w-full appearance-none no-underline text-xs text-primary-braun"
  }, [
    /* @__PURE__ */ q("span", { class: "text-sm" }, "powered by"),
    /* @__PURE__ */ q("img", {
      src: I2,
      class: "object-contain h-6",
      alt: ""
    })
  ])
], -1), Y2 = {
  key: 0,
  class: "flex flex-col w-full gap-2 p-2 text-sm tabular-nums"
}, N2 = { class: "font-medium" }, L2 = { class: "flex justify-between gap-4 w-full" }, R2 = /* @__PURE__ */ q("span", { class: "font-medium" }, "Ausgewählte Nächte:", -1), F2 = { class: "font-normal" }, B2 = { class: "flex justify-between gap-4 w-full" }, j2 = /* @__PURE__ */ q("span", { class: "font-medium" }, "Mietpreis:", -1), H2 = { class: "font-normal" }, U2 = { class: "flex justify-between gap-4 w-full" }, W2 = /* @__PURE__ */ q("span", { class: "font-medium" }, "Kaution:", -1), z2 = { class: "font-normal" }, K2 = { class: "text-red-500 text-sm break-words text-center" };
function G2(e, t, r, n, a, o) {
  var i, l;
  const s = Tt("v-calendar");
  return K(), ne("div", S2, [
    le(s, {
      class: "w-full",
      columns: n.columns,
      onDrag: n.setRange,
      attributes: n.attributes,
      "disabled-dates": n.disabledDates,
      locale: "de",
      modelValue: n.range,
      "onUpdate:modelValue": t[0] || (t[0] = (c) => n.range = c),
      modelModifiers: { range: !0 },
      expanded: n.expanded,
      borderless: ""
    }, {
      footer: Ee(() => [
        E2
      ]),
      _: 1
    }, 8, ["columns", "onDrag", "attributes", "disabled-dates", "modelValue", "expanded"]),
    n.isValidRange.isValid && !n.isPickupReturnDaysWrong ? (K(), ne("div", Y2, [
      q("span", N2, Re(n.season[n.isValidRange.season]), 1),
      q("span", L2, [
        R2,
        q("span", F2, Re(n.isValidRange.days), 1)
      ]),
      q("span", B2, [
        j2,
        q("span", H2, Re(n.totalRate) + " €", 1)
      ]),
      q("span", U2, [
        W2,
        q("span", z2, Re((i = n.article) == null ? void 0 : i.deposit) + " €", 1)
      ])
    ])) : Fe("", !0),
    On(q("span", { class: "text-red-500 text-sm text-center w-full" }, " Mindestmietdauer " + Re(n.isValidRange.minDays) + " Nächte ", 513), [
      [mo, !n.isValidRange.isValid && n.isValidRange.days !== 0]
    ]),
    On(q("span", K2, " An Tagen, an denen die Einrichtung geschlossen ist, können die Fahrzeuge nicht abgeholt oder zurückgebracht werden. ", 512), [
      [mo, n.isPickupReturnDaysWrong]
    ]),
    On(q("button", {
      onClick: t[1] || (t[1] = (...c) => n.navigateToBookingUrl && n.navigateToBookingUrl(...c)),
      class: "p-4 font-semibold text-center w-full bg-primary-blue/90 shadow-md text-white border-none rounded-lg hover:bg-primary-blue duration-300 appearance-none cursor-pointer"
    }, " Zur Buchung ", 512), [
      [mo, (l = n.article) == null ? void 0 : l.onlineBookable]
    ]),
    q("button", {
      onClick: t[2] || (t[2] = (...c) => n.navigateToRequestUrl && n.navigateToRequestUrl(...c)),
      class: "p-4 font-semibold text-center bg-white shadow-md text-gray-700 w-full border-none rounded-lg hover:bg-secondary-blue/40 duration-300 appearance-none cursor-pointer"
    }, " Unverbindlich anfragen ")
  ]);
}
const V2 = /* @__PURE__ */ T2(P2, [["render", G2], ["styles", [$2]]]), Q2 = /* @__PURE__ */ fp(V2);
customElements.define("booking-calendar", Q2);
