function ss(e, t) {
  const r = new Set(e.split(","));
  return t ? (n) => r.has(n.toLowerCase()) : (n) => r.has(n);
}
const ke = {}, Gr = [], ut = () => {
}, Jf = () => !1, Bo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), is = (e) => e.startsWith("onUpdate:"), Be = Object.assign, ls = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Xf = Object.prototype.hasOwnProperty, me = (e, t) => Xf.call(e, t), ie = Array.isArray, Vr = (e) => Uo(e) === "[object Map]", fc = (e) => Uo(e) === "[object Set]", ue = (e) => typeof e == "function", $e = (e) => typeof e == "string", sn = (e) => typeof e == "symbol", Ce = (e) => e !== null && typeof e == "object", dc = (e) => (Ce(e) || ue(e)) && ue(e.then) && ue(e.catch), vc = Object.prototype.toString, Uo = (e) => vc.call(e), ed = (e) => Uo(e).slice(8, -1), pc = (e) => Uo(e) === "[object Object]", cs = (e) => $e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vo = /* @__PURE__ */ ss(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ho = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, td = /-(\w)/g, ft = Ho((e) => e.replace(td, (t, r) => r ? r.toUpperCase() : "")), rd = /\B([A-Z])/g, pt = Ho(
  (e) => e.replace(rd, "-$1").toLowerCase()
), jo = Ho((e) => e.charAt(0).toUpperCase() + e.slice(1)), po = Ho((e) => e ? `on${jo(e)}` : ""), ur = (e, t) => !Object.is(e, t), fa = (e, t) => {
  for (let r = 0; r < e.length; r++)
    e[r](t);
}, Do = (e, t, r) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: r
  });
}, nd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ea = (e) => {
  const t = $e(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let oi;
const hc = () => oi || (oi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function jt(e) {
  if (ie(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], o = $e(n) ? id(n) : jt(n);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if ($e(e) || Ce(e))
    return e;
}
const od = /;(?![^(]*\))/g, ad = /:([^]+)/, sd = /\/\*[^]*?\*\//g;
function id(e) {
  const t = {};
  return e.replace(sd, "").split(od).forEach((r) => {
    if (r) {
      const n = r.split(ad);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function xe(e) {
  let t = "";
  if ($e(e))
    t = e;
  else if (ie(e))
    for (let r = 0; r < e.length; r++) {
      const n = xe(e[r]);
      n && (t += n + " ");
    }
  else if (Ce(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
function In(e) {
  if (!e)
    return null;
  let { class: t, style: r } = e;
  return t && !$e(t) && (e.class = xe(t)), r && (e.style = jt(r)), e;
}
const ld = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", cd = /* @__PURE__ */ ss(ld);
function mc(e) {
  return !!e || e === "";
}
const Le = (e) => $e(e) ? e : e == null ? "" : ie(e) || Ce(e) && (e.toString === vc || !ue(e.toString)) ? JSON.stringify(e, gc, 2) : String(e), gc = (e, t) => t && t.__v_isRef ? gc(e, t.value) : Vr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, o], a) => (r[da(n, a) + " =>"] = o, r),
    {}
  )
} : fc(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => da(r))
} : sn(t) ? da(t) : Ce(t) && !ie(t) && !pc(t) ? String(t) : t, da = (e, t = "") => {
  var r;
  return sn(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
};
var ud = { NVM_INC: "/Users/sultanov/.nvm/versions/node/v18.17.0/include/node", MANPATH: "/Users/sultanov/.nvm/versions/node/v18.17.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/sultanov/.nvm/versions/node/v18.17.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin/node", INIT_CWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", ANDROID_HOME: "/Users/sultanov/Library/Android/sdk", _P9K_TTY: "/dev/ttys003", NVM_CD_FLAGS: "-q", SHELL: "/bin/zsh", TERM: "xterm-256color", npm_config_metrics_registry: "https://registry.npmjs.org/", TMPDIR: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/", HOMEBREW_REPOSITORY: "/opt/homebrew", npm_config_global_prefix: "/Users/sultanov/.nvm/versions/node/v18.17.0", TERM_PROGRAM_VERSION: "1.87.1", ZDOTDIR: "/Users/sultanov", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", TERM_SESSION_ID: "w0t0p0:CBD08105-7695-4AB6-81A4-188D7A4655A9", npm_config_noproxy: "", SDKMAN_PLATFORM: "darwinarm64", npm_config_local_prefix: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", ZSH: "/Users/sultanov/.oh-my-zsh", USER: "sultanov", NVM_DIR: "/Users/sultanov/.nvm", LS_COLORS: "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43", SPRINGBOOT_HOME: "/Users/sultanov/.sdkman/candidates/springboot/current", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/sultanov/.nvm/versions/node/v18.17.0/etc/npmrc", SDKMAN_CANDIDATES_API: "https://api.sdkman.io/2", KUBECONFIG: "/Users/sultanov/.kube/config", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.RJPG0z3Gel/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/bin/npm-cli.js", PAGER: "less", LSCOLORS: "Gxfxcxdxbxegedabagacad", PATH: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/widgets/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/node_modules/.bin:/Users/sultanov/dev/node_modules/.bin:/Users/sultanov/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v18.17.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/sultanov/.sdkman/candidates/springboot/current/bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v18.17.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/sultanov/.fzf/bin", npm_package_json: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/package.json", _: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/node_modules/.bin/vite", npm_config_userconfig: "/Users/sultanov/.npmrc", npm_config_init_module: "/Users/sultanov/.npm-init.js", USER_ZDOTDIR: "/Users/sultanov", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", VSCODE_NONCE: "7b3911e9-9753-4ed4-9b60-9f43817ee94b", JAVA_HOME: "/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home", npm_lifecycle_event: "build", EDITOR: "vi", P9K_SSH: "0", npm_package_name: "camperfuchs-booking-calendar", LANG: "en_US.UTF-8", P9K_TTY: "old", ITERM_PROFILE: "Default", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", COLORFGBG: "7;0", HOME: "/Users/sultanov", SHLVL: "4", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", LC_TERMINAL_VERSION: "3.4.23", HOMEBREW_PREFIX: "/opt/homebrew", ITERM_SESSION_ID: "w0t0p0:CBD08105-7695-4AB6-81A4-188D7A4655A9", npm_config_cache: "/Users/sultanov/.npm", LESS: "-R", LOGNAME: "sultanov", npm_lifecycle_script: "vite build", SDKMAN_DIR: "/Users/sultanov/.sdkman", VSCODE_GIT_IPC_HANDLE: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/vscode-git-3455c3c680.sock", LC_CTYPE: "UTF-8", NVM_BIN: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin", npm_config_user_agent: "npm/9.6.7 node/v18.17.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", SDKMAN_CANDIDATES_DIR: "/Users/sultanov/.sdkman/candidates", LC_TERMINAL: "iTerm2", _P9K_SSH_TTY: "/dev/ttys003", npm_node_execpath: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin/node", npm_config_prefix: "/Users/sultanov/.nvm/versions/node/v18.17.0", COLORTERM: "truecolor", NODE_ENV: "production" };
let At;
class fd {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = At, !t && At && (this.index = (At.scopes || (At.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const r = At;
      try {
        return At = this, t();
      } finally {
        At = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    At = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    At = this.parent;
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
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function dd(e, t = At) {
  t && t.active && t.effects.push(e);
}
function vd() {
  return At;
}
let Mr;
class us {
  constructor(t, r, n, o) {
    this.fn = t, this.trigger = r, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, dd(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, dr();
      for (const t of this.deps)
        if (t.computed && (pd(t.computed), this._dirtyLevel >= 2))
          break;
      vr(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = cr, r = Mr;
    try {
      return cr = !0, Mr = this, this._runnings++, ai(this), this.fn();
    } finally {
      si(this), this._runnings--, Mr = r, cr = t;
    }
  }
  stop() {
    var t;
    this.active && (ai(this), si(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function pd(e) {
  return e.value;
}
function ai(e) {
  e._trackId++, e._depsLength = 0;
}
function si(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      yc(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function yc(e, t) {
  const r = e.get(t);
  r !== void 0 && t._trackId !== r && (e.delete(t), e.size === 0 && e.cleanup());
}
let cr = !0, Ta = 0;
const bc = [];
function dr() {
  bc.push(cr), cr = !1;
}
function vr() {
  const e = bc.pop();
  cr = e === void 0 ? !0 : e;
}
function fs() {
  Ta++;
}
function ds() {
  for (Ta--; !Ta && Pa.length; )
    Pa.shift()();
}
function wc(e, t, r) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && yc(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const Pa = [];
function _c(e, t, r) {
  fs();
  for (const n of e.keys())
    if (!(!n.allowRecurse && n._runnings) && n._dirtyLevel < t && (!n._runnings || t !== 2)) {
      const o = n._dirtyLevel;
      n._dirtyLevel = t, o === 0 && (!n._queryings || t !== 2) && (n.trigger(), n.scheduler && Pa.push(n.scheduler));
    }
  ds();
}
const Dc = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  return r.cleanup = e, r.computed = t, r;
}, Ao = /* @__PURE__ */ new WeakMap(), Or = Symbol(""), $a = Symbol("");
function it(e, t, r) {
  if (cr && Mr) {
    let n = Ao.get(e);
    n || Ao.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(r);
    o || n.set(r, o = Dc(() => n.delete(r))), wc(
      Mr,
      o
    );
  }
}
function Wt(e, t, r, n, o, a) {
  const s = Ao.get(e);
  if (!s)
    return;
  let i = [];
  if (t === "clear")
    i = [...s.values()];
  else if (r === "length" && ie(e)) {
    const l = Number(n);
    s.forEach((c, u) => {
      (u === "length" || !sn(u) && u >= l) && i.push(c);
    });
  } else
    switch (r !== void 0 && i.push(s.get(r)), t) {
      case "add":
        ie(e) ? cs(r) && i.push(s.get("length")) : (i.push(s.get(Or)), Vr(e) && i.push(s.get($a)));
        break;
      case "delete":
        ie(e) || (i.push(s.get(Or)), Vr(e) && i.push(s.get($a)));
        break;
      case "set":
        Vr(e) && i.push(s.get(Or));
        break;
    }
  fs();
  for (const l of i)
    l && _c(
      l,
      3
    );
  ds();
}
function hd(e, t) {
  var r;
  return (r = Ao.get(e)) == null ? void 0 : r.get(t);
}
const md = /* @__PURE__ */ ss("__proto__,__v_isRef,__isVue"), Ac = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(sn)
), ii = /* @__PURE__ */ gd();
function gd() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...r) {
      const n = pe(this);
      for (let a = 0, s = this.length; a < s; a++)
        it(n, "get", a + "");
      const o = n[t](...r);
      return o === -1 || o === !1 ? n[t](...r.map(pe)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...r) {
      dr(), fs();
      const n = pe(this)[t].apply(this, r);
      return ds(), vr(), n;
    };
  }), e;
}
function yd(e) {
  const t = pe(this);
  return it(t, "has", e), t.hasOwnProperty(e);
}
class xc {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._shallow = r;
  }
  get(t, r, n) {
    const o = this._isReadonly, a = this._shallow;
    if (r === "__v_isReactive")
      return !o;
    if (r === "__v_isReadonly")
      return o;
    if (r === "__v_isShallow")
      return a;
    if (r === "__v_raw")
      return n === (o ? a ? Ed : kc : a ? Oc : Mc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = ie(t);
    if (!o) {
      if (s && me(ii, r))
        return Reflect.get(ii, r, n);
      if (r === "hasOwnProperty")
        return yd;
    }
    const i = Reflect.get(t, r, n);
    return (sn(r) ? Ac.has(r) : md(r)) || (o || it(t, "get", r), a) ? i : Pe(i) ? s && cs(r) ? i : i.value : Ce(i) ? o ? Ic(i) : Pr(i) : i;
  }
}
class Cc extends xc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, o) {
    let a = t[r];
    if (!this._shallow) {
      const l = Jr(a);
      if (!Wr(n) && !Jr(n) && (a = pe(a), n = pe(n)), !ie(t) && Pe(a) && !Pe(n))
        return l ? !1 : (a.value = n, !0);
    }
    const s = ie(t) && cs(r) ? Number(r) < t.length : me(t, r), i = Reflect.set(t, r, n, o);
    return t === pe(o) && (s ? ur(n, a) && Wt(t, "set", r, n) : Wt(t, "add", r, n)), i;
  }
  deleteProperty(t, r) {
    const n = me(t, r);
    t[r];
    const o = Reflect.deleteProperty(t, r);
    return o && n && Wt(t, "delete", r, void 0), o;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!sn(r) || !Ac.has(r)) && it(t, "has", r), n;
  }
  ownKeys(t) {
    return it(
      t,
      "iterate",
      ie(t) ? "length" : Or
    ), Reflect.ownKeys(t);
  }
}
class bd extends xc {
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
const wd = /* @__PURE__ */ new Cc(), _d = /* @__PURE__ */ new bd(), Dd = /* @__PURE__ */ new Cc(
  !0
), vs = (e) => e, Wo = (e) => Reflect.getPrototypeOf(e);
function Xn(e, t, r = !1, n = !1) {
  e = e.__v_raw;
  const o = pe(e), a = pe(t);
  r || (ur(t, a) && it(o, "get", t), it(o, "get", a));
  const { has: s } = Wo(o), i = n ? vs : r ? ms : Rn;
  if (s.call(o, t))
    return i(e.get(t));
  if (s.call(o, a))
    return i(e.get(a));
  e !== o && e.get(t);
}
function eo(e, t = !1) {
  const r = this.__v_raw, n = pe(r), o = pe(e);
  return t || (ur(e, o) && it(n, "has", e), it(n, "has", o)), e === o ? r.has(e) : r.has(e) || r.has(o);
}
function to(e, t = !1) {
  return e = e.__v_raw, !t && it(pe(e), "iterate", Or), Reflect.get(e, "size", e);
}
function li(e) {
  e = pe(e);
  const t = pe(this);
  return Wo(t).has.call(t, e) || (t.add(e), Wt(t, "add", e, e)), this;
}
function ci(e, t) {
  t = pe(t);
  const r = pe(this), { has: n, get: o } = Wo(r);
  let a = n.call(r, e);
  a || (e = pe(e), a = n.call(r, e));
  const s = o.call(r, e);
  return r.set(e, t), a ? ur(t, s) && Wt(r, "set", e, t) : Wt(r, "add", e, t), this;
}
function ui(e) {
  const t = pe(this), { has: r, get: n } = Wo(t);
  let o = r.call(t, e);
  o || (e = pe(e), o = r.call(t, e)), n && n.call(t, e);
  const a = t.delete(e);
  return o && Wt(t, "delete", e, void 0), a;
}
function fi() {
  const e = pe(this), t = e.size !== 0, r = e.clear();
  return t && Wt(e, "clear", void 0, void 0), r;
}
function ro(e, t) {
  return function(n, o) {
    const a = this, s = a.__v_raw, i = pe(s), l = t ? vs : e ? ms : Rn;
    return !e && it(i, "iterate", Or), s.forEach((c, u) => n.call(o, l(c), l(u), a));
  };
}
function no(e, t, r) {
  return function(...n) {
    const o = this.__v_raw, a = pe(o), s = Vr(a), i = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = o[e](...n), u = r ? vs : t ? ms : Rn;
    return !t && it(
      a,
      "iterate",
      l ? $a : Or
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
function er(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ad() {
  const e = {
    get(a) {
      return Xn(this, a);
    },
    get size() {
      return to(this);
    },
    has: eo,
    add: li,
    set: ci,
    delete: ui,
    clear: fi,
    forEach: ro(!1, !1)
  }, t = {
    get(a) {
      return Xn(this, a, !1, !0);
    },
    get size() {
      return to(this);
    },
    has: eo,
    add: li,
    set: ci,
    delete: ui,
    clear: fi,
    forEach: ro(!1, !0)
  }, r = {
    get(a) {
      return Xn(this, a, !0);
    },
    get size() {
      return to(this, !0);
    },
    has(a) {
      return eo.call(this, a, !0);
    },
    add: er("add"),
    set: er("set"),
    delete: er("delete"),
    clear: er("clear"),
    forEach: ro(!0, !1)
  }, n = {
    get(a) {
      return Xn(this, a, !0, !0);
    },
    get size() {
      return to(this, !0);
    },
    has(a) {
      return eo.call(this, a, !0);
    },
    add: er("add"),
    set: er("set"),
    delete: er("delete"),
    clear: er("clear"),
    forEach: ro(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    e[a] = no(
      a,
      !1,
      !1
    ), r[a] = no(
      a,
      !0,
      !1
    ), t[a] = no(
      a,
      !1,
      !0
    ), n[a] = no(
      a,
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
  xd,
  Cd,
  Md,
  Od
] = /* @__PURE__ */ Ad();
function ps(e, t) {
  const r = t ? e ? Od : Md : e ? Cd : xd;
  return (n, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    me(r, o) && o in n ? r : n,
    o,
    a
  );
}
const kd = {
  get: /* @__PURE__ */ ps(!1, !1)
}, Id = {
  get: /* @__PURE__ */ ps(!1, !0)
}, Sd = {
  get: /* @__PURE__ */ ps(!0, !1)
}, Mc = /* @__PURE__ */ new WeakMap(), Oc = /* @__PURE__ */ new WeakMap(), kc = /* @__PURE__ */ new WeakMap(), Ed = /* @__PURE__ */ new WeakMap();
function Td(e) {
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
function Pd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Td(ed(e));
}
function Pr(e) {
  return Jr(e) ? e : hs(
    e,
    !1,
    wd,
    kd,
    Mc
  );
}
function $d(e) {
  return hs(
    e,
    !1,
    Dd,
    Id,
    Oc
  );
}
function Ic(e) {
  return hs(
    e,
    !0,
    _d,
    Sd,
    kc
  );
}
function hs(e, t, r, n, o) {
  if (!Ce(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = o.get(e);
  if (a)
    return a;
  const s = Pd(e);
  if (s === 0)
    return e;
  const i = new Proxy(
    e,
    s === 2 ? n : r
  );
  return o.set(e, i), i;
}
function Kr(e) {
  return Jr(e) ? Kr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Jr(e) {
  return !!(e && e.__v_isReadonly);
}
function Wr(e) {
  return !!(e && e.__v_isShallow);
}
function Sc(e) {
  return Kr(e) || Jr(e);
}
function pe(e) {
  const t = e && e.__v_raw;
  return t ? pe(t) : e;
}
function Ec(e) {
  return Do(e, "__v_skip", !0), e;
}
const Rn = (e) => Ce(e) ? Pr(e) : e, ms = (e) => Ce(e) ? Ic(e) : e;
class Tc {
  constructor(t, r, n, o) {
    this._setter = r, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new us(
      () => t(this._value),
      () => Ya(this, 1)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = n;
  }
  get value() {
    const t = pe(this);
    return Pc(t), (!t._cacheable || t.effect.dirty) && ur(t._value, t._value = t.effect.run()) && Ya(t, 2), t._value;
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
function Yd(e, t, r = !1) {
  let n, o;
  const a = ue(e);
  return a ? (n = e, o = ud.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ut) : (n = e.get, o = e.set), new Tc(n, o, a || !o, r);
}
function Pc(e) {
  cr && Mr && (e = pe(e), wc(
    Mr,
    e.dep || (e.dep = Dc(
      () => e.dep = void 0,
      e instanceof Tc ? e : void 0
    ))
  ));
}
function Ya(e, t = 3, r) {
  e = pe(e);
  const n = e.dep;
  n && _c(
    n,
    t
  );
}
function Pe(e) {
  return !!(e && e.__v_isRef === !0);
}
function be(e) {
  return Nd(e, !1);
}
function Nd(e, t) {
  return Pe(e) ? e : new Rd(e, t);
}
class Rd {
  constructor(t, r) {
    this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : pe(t), this._value = r ? t : Rn(t);
  }
  get value() {
    return Pc(this), this._value;
  }
  set value(t) {
    const r = this.__v_isShallow || Wr(t) || Jr(t);
    t = r ? t : pe(t), ur(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : Rn(t), Ya(this, 3));
  }
}
function E(e) {
  return Pe(e) ? e.value : e;
}
const Ld = {
  get: (e, t, r) => E(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const o = e[t];
    return Pe(o) && !Pe(r) ? (o.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function $c(e) {
  return Kr(e) ? e : new Proxy(e, Ld);
}
function Fd(e) {
  const t = ie(e) ? new Array(e.length) : {};
  for (const r in e)
    t[r] = Yc(e, r);
  return t;
}
class Bd {
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
    return hd(pe(this._object), this._key);
  }
}
class Ud {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function ho(e, t, r) {
  return Pe(e) ? e : ue(e) ? new Ud(e) : Ce(e) && arguments.length > 1 ? Yc(e, t, r) : be(e);
}
function Yc(e, t, r) {
  const n = e[t];
  return Pe(n) ? n : new Bd(e, t, r);
}
var kr = { NVM_INC: "/Users/sultanov/.nvm/versions/node/v18.17.0/include/node", MANPATH: "/Users/sultanov/.nvm/versions/node/v18.17.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/sultanov/.nvm/versions/node/v18.17.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin/node", INIT_CWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", ANDROID_HOME: "/Users/sultanov/Library/Android/sdk", _P9K_TTY: "/dev/ttys003", NVM_CD_FLAGS: "-q", SHELL: "/bin/zsh", TERM: "xterm-256color", npm_config_metrics_registry: "https://registry.npmjs.org/", TMPDIR: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/", HOMEBREW_REPOSITORY: "/opt/homebrew", npm_config_global_prefix: "/Users/sultanov/.nvm/versions/node/v18.17.0", TERM_PROGRAM_VERSION: "1.87.1", ZDOTDIR: "/Users/sultanov", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", TERM_SESSION_ID: "w0t0p0:CBD08105-7695-4AB6-81A4-188D7A4655A9", npm_config_noproxy: "", SDKMAN_PLATFORM: "darwinarm64", npm_config_local_prefix: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", ZSH: "/Users/sultanov/.oh-my-zsh", USER: "sultanov", NVM_DIR: "/Users/sultanov/.nvm", LS_COLORS: "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43", SPRINGBOOT_HOME: "/Users/sultanov/.sdkman/candidates/springboot/current", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/sultanov/.nvm/versions/node/v18.17.0/etc/npmrc", SDKMAN_CANDIDATES_API: "https://api.sdkman.io/2", KUBECONFIG: "/Users/sultanov/.kube/config", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.RJPG0z3Gel/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/bin/npm-cli.js", PAGER: "less", LSCOLORS: "Gxfxcxdxbxegedabagacad", PATH: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/widgets/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/node_modules/.bin:/Users/sultanov/dev/node_modules/.bin:/Users/sultanov/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v18.17.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/sultanov/.sdkman/candidates/springboot/current/bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v18.17.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/sultanov/.fzf/bin", npm_package_json: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/package.json", _: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/node_modules/.bin/vite", npm_config_userconfig: "/Users/sultanov/.npmrc", npm_config_init_module: "/Users/sultanov/.npm-init.js", USER_ZDOTDIR: "/Users/sultanov", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", VSCODE_NONCE: "7b3911e9-9753-4ed4-9b60-9f43817ee94b", JAVA_HOME: "/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home", npm_lifecycle_event: "build", EDITOR: "vi", P9K_SSH: "0", npm_package_name: "camperfuchs-booking-calendar", LANG: "en_US.UTF-8", P9K_TTY: "old", ITERM_PROFILE: "Default", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/sultanov/.nvm/versions/node/v18.17.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", COLORFGBG: "7;0", HOME: "/Users/sultanov", SHLVL: "4", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", LC_TERMINAL_VERSION: "3.4.23", HOMEBREW_PREFIX: "/opt/homebrew", ITERM_SESSION_ID: "w0t0p0:CBD08105-7695-4AB6-81A4-188D7A4655A9", npm_config_cache: "/Users/sultanov/.npm", LESS: "-R", LOGNAME: "sultanov", npm_lifecycle_script: "vite build", SDKMAN_DIR: "/Users/sultanov/.sdkman", VSCODE_GIT_IPC_HANDLE: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/vscode-git-3455c3c680.sock", LC_CTYPE: "UTF-8", NVM_BIN: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin", npm_config_user_agent: "npm/9.6.7 node/v18.17.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", SDKMAN_CANDIDATES_DIR: "/Users/sultanov/.sdkman/candidates", LC_TERMINAL: "iTerm2", _P9K_SSH_TTY: "/dev/ttys003", npm_node_execpath: "/Users/sultanov/.nvm/versions/node/v18.17.0/bin/node", npm_config_prefix: "/Users/sultanov/.nvm/versions/node/v18.17.0", COLORTERM: "truecolor", NODE_ENV: "production" };
const Sn = [];
function Hd(e, ...t) {
  dr();
  const r = Sn.length ? Sn[Sn.length - 1].component : null, n = r && r.appContext.config.warnHandler, o = jd();
  if (n)
    zt(
      n,
      r,
      11,
      [
        e + t.join(""),
        r && r.proxy,
        o.map(
          ({ vnode: a }) => `at <${hu(r, a.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const a = [`[Vue warn]: ${e}`, ...t];
    o.length && a.push(`
`, ...Wd(o)), console.warn(...a);
  }
  vr();
}
function jd() {
  let e = Sn[Sn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const r = t[0];
    r && r.vnode === e ? r.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function Wd(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push(...n === 0 ? [] : [`
`], ...zd(r));
  }), t;
}
function zd({ vnode: e, recurseCount: t }) {
  const r = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, o = ` at <${hu(
    e.component,
    e.type,
    n
  )}`, a = ">" + r;
  return e.props ? [o, ...Gd(e.props), a] : [o + a];
}
function Gd(e) {
  const t = [], r = Object.keys(e);
  return r.slice(0, 3).forEach((n) => {
    t.push(...Nc(n, e[n]));
  }), r.length > 3 && t.push(" ..."), t;
}
function Nc(e, t, r) {
  return $e(t) ? (t = JSON.stringify(t), r ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? r ? t : [`${e}=${t}`] : Pe(t) ? (t = Nc(e, pe(t.value), !0), r ? t : [`${e}=Ref<`, t, ">"]) : ue(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = pe(t), r ? t : [`${e}=`, t]);
}
function zt(e, t, r, n) {
  let o;
  try {
    o = n ? e(...n) : e();
  } catch (a) {
    zo(a, t, r);
  }
  return o;
}
function mt(e, t, r, n) {
  if (ue(e)) {
    const a = zt(e, t, r, n);
    return a && dc(a) && a.catch((s) => {
      zo(s, t, r);
    }), a;
  }
  const o = [];
  for (let a = 0; a < e.length; a++)
    o.push(mt(e[a], t, r, n));
  return o;
}
function zo(e, t, r, n = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const s = t.proxy, i = `https://vuejs.org/errors/#runtime-${r}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, s, i) === !1)
            return;
      }
      a = a.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      zt(
        l,
        null,
        10,
        [e, s, i]
      );
      return;
    }
  }
  Vd(e, r, o, n);
}
function Vd(e, t, r, n = !0) {
  console.error(e);
}
let Ln = !1, Na = !1;
const Qe = [];
let Pt = 0;
const Qr = [];
let Bt = null, Dr = 0;
const Rc = /* @__PURE__ */ Promise.resolve();
let gs = null;
function xr(e) {
  const t = gs || Rc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Kd(e) {
  let t = Pt + 1, r = Qe.length;
  for (; t < r; ) {
    const n = t + r >>> 1, o = Qe[n], a = Fn(o);
    a < e || a === e && o.pre ? t = n + 1 : r = n;
  }
  return t;
}
function ys(e) {
  (!Qe.length || !Qe.includes(
    e,
    Ln && e.allowRecurse ? Pt + 1 : Pt
  )) && (e.id == null ? Qe.push(e) : Qe.splice(Kd(e.id), 0, e), Lc());
}
function Lc() {
  !Ln && !Na && (Na = !0, gs = Rc.then(Bc));
}
function Qd(e) {
  const t = Qe.indexOf(e);
  t > Pt && Qe.splice(t, 1);
}
function qd(e) {
  ie(e) ? Qr.push(...e) : (!Bt || !Bt.includes(
    e,
    e.allowRecurse ? Dr + 1 : Dr
  )) && Qr.push(e), Lc();
}
function di(e, t, r = Ln ? Pt + 1 : 0) {
  for (; r < Qe.length; r++) {
    const n = Qe[r];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      Qe.splice(r, 1), r--, n();
    }
  }
}
function Fc(e) {
  if (Qr.length) {
    const t = [...new Set(Qr)];
    if (Qr.length = 0, Bt) {
      Bt.push(...t);
      return;
    }
    for (Bt = t, Bt.sort((r, n) => Fn(r) - Fn(n)), Dr = 0; Dr < Bt.length; Dr++)
      Bt[Dr]();
    Bt = null, Dr = 0;
  }
}
const Fn = (e) => e.id == null ? 1 / 0 : e.id, Zd = (e, t) => {
  const r = Fn(e) - Fn(t);
  if (r === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return r;
};
function Bc(e) {
  Na = !1, Ln = !0, Qe.sort(Zd);
  const t = ut;
  try {
    for (Pt = 0; Pt < Qe.length; Pt++) {
      const r = Qe[Pt];
      r && r.active !== !1 && (kr.NODE_ENV !== "production" && t(r), zt(r, null, 14));
    }
  } finally {
    Pt = 0, Qe.length = 0, Fc(), Ln = !1, gs = null, (Qe.length || Qr.length) && Bc();
  }
}
function Jd(e, t, ...r) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || ke;
  let o = r;
  const a = t.startsWith("update:"), s = a && t.slice(7);
  if (s && s in n) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`, { number: f, trim: d } = n[u] || ke;
    d && (o = r.map((h) => $e(h) ? h.trim() : h)), f && (o = r.map(nd));
  }
  let i, l = n[i = po(t)] || // also try camelCase event handler (#2249)
  n[i = po(ft(t))];
  !l && a && (l = n[i = po(pt(t))]), l && mt(
    l,
    e,
    6,
    o
  );
  const c = n[i + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, mt(
      c,
      e,
      6,
      o
    );
  }
}
function Uc(e, t, r = !1) {
  const n = t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let s = {}, i = !1;
  if (!ue(e)) {
    const l = (c) => {
      const u = Uc(c, t, !0);
      u && (i = !0, Be(s, u));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !i ? (Ce(e) && n.set(e, null), null) : (ie(a) ? a.forEach((l) => s[l] = null) : Be(s, a), Ce(e) && n.set(e, s), s);
}
function Go(e, t) {
  return !e || !Bo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), me(e, t[0].toLowerCase() + t.slice(1)) || me(e, pt(t)) || me(e, t));
}
let Ge = null, Hc = null;
function xo(e) {
  const t = Ge;
  return Ge = e, Hc = e && e.type.__scopeId || null, t;
}
function Ye(e, t = Ge, r) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && xi(-1);
    const a = xo(t);
    let s;
    try {
      s = e(...o);
    } finally {
      xo(a), n._d && xi(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function va(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: o,
    props: a,
    propsOptions: [s],
    slots: i,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: d,
    setupState: h,
    ctx: g,
    inheritAttrs: b
  } = e;
  let A, y;
  const H = xo(e);
  try {
    if (r.shapeFlag & 4) {
      const I = o || n, C = kr.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(I, {
        get(Q, j, x) {
          return Hd(
            `Property '${String(
              j
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Q, j, x);
        }
      }) : I;
      A = Tt(
        u.call(
          C,
          I,
          f,
          a,
          h,
          d,
          g
        )
      ), y = l;
    } else {
      const I = t;
      kr.NODE_ENV, A = Tt(
        I.length > 1 ? I(
          a,
          kr.NODE_ENV !== "production" ? {
            get attrs() {
              return l;
            },
            slots: i,
            emit: c
          } : { attrs: l, slots: i, emit: c }
        ) : I(
          a,
          null
          /* we know it doesn't need it */
        )
      ), y = t.props ? l : Xd(l);
    }
  } catch (I) {
    $n.length = 0, zo(I, e, 1), A = le(yt);
  }
  let R = A;
  if (y && b !== !1) {
    const I = Object.keys(y), { shapeFlag: C } = R;
    I.length && C & 7 && (s && I.some(is) && (y = ev(
      y,
      s
    )), R = Vt(R, y));
  }
  return r.dirs && (R = Vt(R), R.dirs = R.dirs ? R.dirs.concat(r.dirs) : r.dirs), r.transition && (R.transition = r.transition), A = R, xo(H), A;
}
const Xd = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Bo(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ev = (e, t) => {
  const r = {};
  for (const n in e)
    (!is(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function tv(e, t, r) {
  const { props: n, children: o, component: a } = e, { props: s, children: i, patchFlag: l } = t, c = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? vi(n, s, c) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (s[d] !== n[d] && !Go(c, d))
          return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable) ? !0 : n === s ? !1 : n ? s ? vi(n, s, c) : !0 : !!s;
  return !1;
}
function vi(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if (t[a] !== e[a] && !Go(r, a))
      return !0;
  }
  return !1;
}
function rv({ vnode: e, parent: t }, r) {
  if (r)
    for (; t; ) {
      const n = t.subTree;
      if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
        (e = t.vnode).el = r, t = t.parent;
      else
        break;
    }
}
const bs = "components", nv = "directives";
function Et(e, t) {
  return ws(bs, e, !0, t) || e;
}
const jc = Symbol.for("v-ndc");
function Wc(e) {
  return $e(e) ? ws(bs, e, !1) || e : e || jc;
}
function ov(e) {
  return ws(nv, e);
}
function ws(e, t, r = !0, n = !1) {
  const o = Ge || Ue;
  if (o) {
    const a = o.type;
    if (e === bs) {
      const i = pu(
        a,
        !1
      );
      if (i && (i === t || i === ft(t) || i === jo(ft(t))))
        return a;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      pi(o[e] || a[e], t) || // global registration
      pi(o.appContext[e], t)
    );
    return !s && n ? a : s;
  }
}
function pi(e, t) {
  return e && (e[t] || e[ft(t)] || e[jo(ft(t))]);
}
const av = (e) => e.__isSuspense;
function sv(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : qd(e);
}
const iv = Symbol.for("v-scx"), lv = () => Gt(iv);
function zc(e, t) {
  return _s(e, null, t);
}
const oo = {};
function je(e, t, r) {
  return _s(e, t, r);
}
function _s(e, t, {
  immediate: r,
  deep: n,
  flush: o,
  once: a,
  onTrack: s,
  onTrigger: i
} = ke) {
  var l;
  if (t && a) {
    const C = t;
    t = (...Q) => {
      C(...Q), I();
    };
  }
  const c = vd() === ((l = Ue) == null ? void 0 : l.scope) ? Ue : null;
  let u, f = !1, d = !1;
  if (Pe(e) ? (u = () => e.value, f = Wr(e)) : Kr(e) ? (u = Wr(e) || n === !1 ? () => Ut(e, 1) : () => Ut(e), f = !0) : ie(e) ? (d = !0, f = e.some((C) => Kr(C) || Wr(C)), u = () => e.map((C) => {
    if (Pe(C))
      return C.value;
    if (Kr(C))
      return Ut(C, Wr(C) || n === !1 ? 1 : void 0);
    if (ue(C))
      return zt(C, c, 2);
  })) : ue(e) ? t ? u = () => zt(e, c, 2) : u = () => {
    if (!(c && c.isUnmounted))
      return h && h(), mt(
        e,
        c,
        3,
        [g]
      );
  } : u = ut, t && n) {
    const C = u;
    u = () => Ut(C());
  }
  let h, g = (C) => {
    h = R.onStop = () => {
      zt(C, c, 4), h = R.onStop = void 0;
    };
  }, b;
  if (Jo)
    if (g = ut, t ? r && mt(t, c, 3, [
      u(),
      d ? [] : void 0,
      g
    ]) : u(), o === "sync") {
      const C = lv();
      b = C.__watcherHandles || (C.__watcherHandles = []);
    } else
      return ut;
  let A = d ? new Array(e.length).fill(oo) : oo;
  const y = () => {
    if (!(!R.active || !R.dirty))
      if (t) {
        const C = R.run();
        (n || f || (d ? C.some((Q, j) => ur(Q, A[j])) : ur(C, A))) && (h && h(), mt(t, c, 3, [
          C,
          // pass undefined as the old value when it's changed for the first time
          A === oo ? void 0 : d && A[0] === oo ? [] : A,
          g
        ]), A = C);
      } else
        R.run();
  };
  y.allowRecurse = !!t;
  let H;
  o === "sync" ? H = y : o === "post" ? H = () => ot(y, c && c.suspense) : (y.pre = !0, c && (y.id = c.uid), H = () => ys(y));
  const R = new us(u, ut, H), I = () => {
    R.stop(), c && c.scope && ls(c.scope.effects, R);
  };
  return t ? r ? y() : A = R.run() : o === "post" ? ot(
    R.run.bind(R),
    c && c.suspense
  ) : R.run(), b && b.push(I), I;
}
function cv(e, t, r) {
  const n = this.proxy, o = $e(e) ? e.includes(".") ? Gc(n, e) : () => n[e] : e.bind(n, n);
  let a;
  ue(t) ? a = t : (a = t.handler, r = t);
  const s = Ue;
  Xr(this);
  const i = _s(o, a.bind(n), r);
  return s ? Xr(s) : Ir(), i;
}
function Gc(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < r.length && n; o++)
      n = n[r[o]];
    return n;
  };
}
function Ut(e, t, r = 0, n) {
  if (!Ce(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (r >= t)
      return e;
    r++;
  }
  if (n = n || /* @__PURE__ */ new Set(), n.has(e))
    return e;
  if (n.add(e), Pe(e))
    Ut(e.value, t, r, n);
  else if (ie(e))
    for (let o = 0; o < e.length; o++)
      Ut(e[o], t, r, n);
  else if (fc(e) || Vr(e))
    e.forEach((o) => {
      Ut(o, t, r, n);
    });
  else if (pc(e))
    for (const o in e)
      Ut(e[o], t, r, n);
  return e;
}
function En(e, t) {
  const r = Ge;
  if (r === null)
    return e;
  const n = Xo(r) || r.proxy, o = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [s, i, l, c = ke] = t[a];
    s && (ue(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Ut(i), o.push({
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
function gr(e, t, r, n) {
  const o = e.dirs, a = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    a && (i.oldValue = a[s].value);
    let l = i.dir[n];
    l && (dr(), mt(l, r, 8, [
      e.el,
      i,
      e,
      t
    ]), vr());
  }
}
const or = Symbol("_leaveCb"), ao = Symbol("_enterCb");
function uv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return $r(() => {
    e.isMounted = !0;
  }), Zc(() => {
    e.isUnmounting = !0;
  }), e;
}
const vt = [Function, Array], Vc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: vt,
  onEnter: vt,
  onAfterEnter: vt,
  onEnterCancelled: vt,
  // leave
  onBeforeLeave: vt,
  onLeave: vt,
  onAfterLeave: vt,
  onLeaveCancelled: vt,
  // appear
  onBeforeAppear: vt,
  onAppear: vt,
  onAfterAppear: vt,
  onAppearCancelled: vt
}, fv = {
  name: "BaseTransition",
  props: Vc,
  setup(e, { slots: t }) {
    const r = Vv(), n = uv();
    let o;
    return () => {
      const a = t.default && Qc(t.default(), !0);
      if (!a || !a.length)
        return;
      let s = a[0];
      if (a.length > 1) {
        for (const b of a)
          if (b.type !== yt) {
            s = b;
            break;
          }
      }
      const i = pe(e), { mode: l } = i;
      if (n.isLeaving)
        return pa(s);
      const c = hi(s);
      if (!c)
        return pa(s);
      const u = Ra(
        c,
        i,
        n,
        r
      );
      La(c, u);
      const f = r.subTree, d = f && hi(f);
      let h = !1;
      const { getTransitionKey: g } = c.type;
      if (g) {
        const b = g();
        o === void 0 ? o = b : b !== o && (o = b, h = !0);
      }
      if (d && d.type !== yt && (!Ar(c, d) || h)) {
        const b = Ra(
          d,
          i,
          n,
          r
        );
        if (La(d, b), l === "out-in")
          return n.isLeaving = !0, b.afterLeave = () => {
            n.isLeaving = !1, r.update.active !== !1 && (r.effect.dirty = !0, r.update());
          }, pa(s);
        l === "in-out" && c.type !== yt && (b.delayLeave = (A, y, H) => {
          const R = Kc(
            n,
            d
          );
          R[String(d.key)] = d, A[or] = () => {
            y(), A[or] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = H;
        });
      }
      return s;
    };
  }
}, dv = fv;
function Kc(e, t) {
  const { leavingVNodes: r } = e;
  let n = r.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), r.set(t.type, n)), n;
}
function Ra(e, t, r, n) {
  const {
    appear: o,
    mode: a,
    persisted: s = !1,
    onBeforeEnter: i,
    onEnter: l,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: f,
    onLeave: d,
    onAfterLeave: h,
    onLeaveCancelled: g,
    onBeforeAppear: b,
    onAppear: A,
    onAfterAppear: y,
    onAppearCancelled: H
  } = t, R = String(e.key), I = Kc(r, e), C = (x, F) => {
    x && mt(
      x,
      n,
      9,
      F
    );
  }, Q = (x, F) => {
    const B = F[1];
    C(x, F), ie(x) ? x.every((V) => V.length <= 1) && B() : x.length <= 1 && B();
  }, j = {
    mode: a,
    persisted: s,
    beforeEnter(x) {
      let F = i;
      if (!r.isMounted)
        if (o)
          F = b || i;
        else
          return;
      x[or] && x[or](
        !0
        /* cancelled */
      );
      const B = I[R];
      B && Ar(e, B) && B.el[or] && B.el[or](), C(F, [x]);
    },
    enter(x) {
      let F = l, B = c, V = u;
      if (!r.isMounted)
        if (o)
          F = A || l, B = y || c, V = H || u;
        else
          return;
      let _ = !1;
      const L = x[ao] = (ne) => {
        _ || (_ = !0, ne ? C(V, [x]) : C(B, [x]), j.delayedLeave && j.delayedLeave(), x[ao] = void 0);
      };
      F ? Q(F, [x, L]) : L();
    },
    leave(x, F) {
      const B = String(e.key);
      if (x[ao] && x[ao](
        !0
        /* cancelled */
      ), r.isUnmounting)
        return F();
      C(f, [x]);
      let V = !1;
      const _ = x[or] = (L) => {
        V || (V = !0, F(), L ? C(g, [x]) : C(h, [x]), x[or] = void 0, I[B] === e && delete I[B]);
      };
      I[B] = e, d ? Q(d, [x, _]) : _();
    },
    clone(x) {
      return Ra(x, t, r, n);
    }
  };
  return j;
}
function pa(e) {
  if (Vo(e))
    return e = Vt(e), e.children = null, e;
}
function hi(e) {
  return Vo(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    e.children ? e.children[0] : void 0
  ) : e;
}
function La(e, t) {
  e.shapeFlag & 6 && e.component ? La(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Qc(e, t = !1, r) {
  let n = [], o = 0;
  for (let a = 0; a < e.length; a++) {
    let s = e[a];
    const i = r == null ? s.key : String(r) + String(s.key != null ? s.key : a);
    s.type === we ? (s.patchFlag & 128 && o++, n = n.concat(
      Qc(s.children, t, i)
    )) : (t || s.type !== yt) && n.push(i != null ? Vt(s, { key: i }) : s);
  }
  if (o > 1)
    for (let a = 0; a < n.length; a++)
      n[a].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function We(e, t) {
  return ue(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Be({ name: e.name }, t, { setup: e })
  ) : e;
}
const Tn = (e) => !!e.type.__asyncLoader, Vo = (e) => e.type.__isKeepAlive;
function vv(e, t) {
  qc(e, "a", t);
}
function pv(e, t) {
  qc(e, "da", t);
}
function qc(e, t, r = Ue) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = r;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Ko(t, n, r), r) {
    let o = r.parent;
    for (; o && o.parent; )
      Vo(o.parent.vnode) && hv(n, t, r, o), o = o.parent;
  }
}
function hv(e, t, r, n) {
  const o = Ko(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ln(() => {
    ls(n[t], o);
  }, r);
}
function Ko(e, t, r = Ue, n = !1) {
  if (r) {
    const o = r[e] || (r[e] = []), a = t.__weh || (t.__weh = (...s) => {
      if (r.isUnmounted)
        return;
      dr(), Xr(r);
      const i = mt(t, r, e, s);
      return Ir(), vr(), i;
    });
    return n ? o.unshift(a) : o.push(a), a;
  }
}
const Zt = (e) => (t, r = Ue) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Jo || e === "sp") && Ko(e, (...n) => t(...n), r)
), mv = Zt("bm"), $r = Zt("m"), gv = Zt("bu"), yv = Zt("u"), Zc = Zt("bum"), ln = Zt("um"), bv = Zt("sp"), wv = Zt(
  "rtg"
), _v = Zt(
  "rtc"
);
function Dv(e, t = Ue) {
  Ko("ec", e, t);
}
function gt(e, t, r, n) {
  let o;
  const a = r && r[n];
  if (ie(e) || $e(e)) {
    o = new Array(e.length);
    for (let s = 0, i = e.length; s < i; s++)
      o[s] = t(e[s], s, void 0, a && a[s]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let s = 0; s < e; s++)
      o[s] = t(s + 1, s, void 0, a && a[s]);
  } else if (Ce(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (s, i) => t(s, i, void 0, a && a[i])
      );
    else {
      const s = Object.keys(e);
      o = new Array(s.length);
      for (let i = 0, l = s.length; i < l; i++) {
        const c = s[i];
        o[i] = t(e[c], c, i, a && a[i]);
      }
    }
  else
    o = [];
  return r && (r[n] = o), o;
}
function Vn(e, t, r = {}, n, o) {
  if (Ge.isCE || Ge.parent && Tn(Ge.parent) && Ge.parent.isCE)
    return t !== "default" && (r.name = t), le("slot", r, n && n());
  let a = e[t];
  a && a._c && (a._d = !1), G();
  const s = a && Jc(a(r)), i = Ve(
    we,
    {
      key: r.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`
    },
    s || (n ? n() : []),
    s && e._ === 1 ? 64 : -2
  );
  return !o && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), a && a._c && (a._d = !0), i;
}
function Jc(e) {
  return e.some((t) => Oo(t) ? !(t.type === yt || t.type === we && !Jc(t.children)) : !0) ? e : null;
}
function Av(e, t) {
  const r = {};
  for (const n in e)
    r[t && /[A-Z]/.test(n) ? `on:${n}` : po(n)] = e[n];
  return r;
}
const Fa = (e) => e ? du(e) ? Xo(e) || e.proxy : Fa(e.parent) : null, Pn = (
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
    $parent: (e) => Fa(e.parent),
    $root: (e) => Fa(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ds(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, ys(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xr.bind(e.proxy)),
    $watch: (e) => cv.bind(e)
  })
), ha = (e, t) => e !== ke && !e.__isScriptSetup && me(e, t), xv = {
  get({ _: e }, t) {
    const { ctx: r, setupState: n, data: o, props: a, accessCache: s, type: i, appContext: l } = e;
    let c;
    if (t[0] !== "$") {
      const h = s[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return n[t];
          case 2:
            return o[t];
          case 4:
            return r[t];
          case 3:
            return a[t];
        }
      else {
        if (ha(n, t))
          return s[t] = 1, n[t];
        if (o !== ke && me(o, t))
          return s[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && me(c, t)
        )
          return s[t] = 3, a[t];
        if (r !== ke && me(r, t))
          return s[t] = 4, r[t];
        Ba && (s[t] = 0);
      }
    }
    const u = Pn[t];
    let f, d;
    if (u)
      return t === "$attrs" && it(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = i.__cssModules) && (f = f[t])
    )
      return f;
    if (r !== ke && me(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      d = l.config.globalProperties, me(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: o, ctx: a } = e;
    return ha(o, t) ? (o[t] = r, !0) : n !== ke && me(n, t) ? (n[t] = r, !0) : me(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: o, propsOptions: a }
  }, s) {
    let i;
    return !!r[s] || e !== ke && me(e, s) || ha(t, s) || (i = a[0]) && me(i, s) || me(n, s) || me(Pn, s) || me(o.config.globalProperties, s);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : me(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function mi(e) {
  return ie(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Ba = !0;
function Cv(e) {
  const t = Ds(e), r = e.proxy, n = e.ctx;
  Ba = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: s,
    watch: i,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: g,
    activated: b,
    deactivated: A,
    beforeDestroy: y,
    beforeUnmount: H,
    destroyed: R,
    unmounted: I,
    render: C,
    renderTracked: Q,
    renderTriggered: j,
    errorCaptured: x,
    serverPrefetch: F,
    // public API
    expose: B,
    inheritAttrs: V,
    // assets
    components: _,
    directives: L,
    filters: ne
  } = t;
  if (c && Mv(c, n, null), s)
    for (const re in s) {
      const ae = s[re];
      ue(ae) && (n[re] = ae.bind(r));
    }
  if (o) {
    const re = o.call(r, r);
    Ce(re) && (e.data = Pr(re));
  }
  if (Ba = !0, a)
    for (const re in a) {
      const ae = a[re], he = ue(ae) ? ae.bind(r, r) : ue(ae.get) ? ae.get.bind(r, r) : ut, P = !ue(ae) && ue(ae.set) ? ae.set.bind(r) : ut, de = D({
        get: he,
        set: P
      });
      Object.defineProperty(n, re, {
        enumerable: !0,
        configurable: !0,
        get: () => de.value,
        set: (q) => de.value = q
      });
    }
  if (i)
    for (const re in i)
      Xc(i[re], n, r, re);
  if (l) {
    const re = ue(l) ? l.call(r) : l;
    Reflect.ownKeys(re).forEach((ae) => {
      Yr(ae, re[ae]);
    });
  }
  u && gi(u, e, "c");
  function ee(re, ae) {
    ie(ae) ? ae.forEach((he) => re(he.bind(r))) : ae && re(ae.bind(r));
  }
  if (ee(mv, f), ee($r, d), ee(gv, h), ee(yv, g), ee(vv, b), ee(pv, A), ee(Dv, x), ee(_v, Q), ee(wv, j), ee(Zc, H), ee(ln, I), ee(bv, F), ie(B))
    if (B.length) {
      const re = e.exposed || (e.exposed = {});
      B.forEach((ae) => {
        Object.defineProperty(re, ae, {
          get: () => r[ae],
          set: (he) => r[ae] = he
        });
      });
    } else
      e.exposed || (e.exposed = {});
  C && e.render === ut && (e.render = C), V != null && (e.inheritAttrs = V), _ && (e.components = _), L && (e.directives = L);
}
function Mv(e, t, r = ut) {
  ie(e) && (e = Ua(e));
  for (const n in e) {
    const o = e[n];
    let a;
    Ce(o) ? "default" in o ? a = Gt(
      o.from || n,
      o.default,
      !0
    ) : a = Gt(o.from || n) : a = Gt(o), Pe(a) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (s) => a.value = s
    }) : t[n] = a;
  }
}
function gi(e, t, r) {
  mt(
    ie(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Xc(e, t, r, n) {
  const o = n.includes(".") ? Gc(r, n) : () => r[n];
  if ($e(e)) {
    const a = t[e];
    ue(a) && je(o, a);
  } else if (ue(e))
    je(o, e.bind(r));
  else if (Ce(e))
    if (ie(e))
      e.forEach((a) => Xc(a, t, r, n));
    else {
      const a = ue(e.handler) ? e.handler.bind(r) : t[e.handler];
      ue(a) && je(o, a, e);
    }
}
function Ds(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: s }
  } = e.appContext, i = a.get(t);
  let l;
  return i ? l = i : !o.length && !r && !n ? l = t : (l = {}, o.length && o.forEach(
    (c) => Co(l, c, s, !0)
  ), Co(l, t, s)), Ce(t) && a.set(t, l), l;
}
function Co(e, t, r, n = !1) {
  const { mixins: o, extends: a } = t;
  a && Co(e, a, r, !0), o && o.forEach(
    (s) => Co(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const i = Ov[s] || r && r[s];
      e[s] = i ? i(e[s], t[s]) : t[s];
    }
  return e;
}
const Ov = {
  data: yi,
  props: bi,
  emits: bi,
  // objects
  methods: Mn,
  computed: Mn,
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
  components: Mn,
  directives: Mn,
  // watch
  watch: Iv,
  // provide / inject
  provide: yi,
  inject: kv
};
function yi(e, t) {
  return t ? e ? function() {
    return Be(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function kv(e, t) {
  return Mn(Ua(e), Ua(t));
}
function Ua(e) {
  if (ie(e)) {
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
function Mn(e, t) {
  return e ? Be(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Be(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Iv(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const r = Be(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = et(e[n], t[n]);
  return r;
}
function eu() {
  return {
    app: null,
    config: {
      isNativeTag: Jf,
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
let Sv = 0;
function Ev(e, t) {
  return function(n, o = null) {
    ue(n) || (n = Be({}, n)), o != null && !Ce(o) && (o = null);
    const a = eu(), s = /* @__PURE__ */ new WeakSet();
    let i = !1;
    const l = a.app = {
      _uid: Sv++,
      _component: n,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: rp,
      get config() {
        return a.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return s.has(c) || (c && ue(c.install) ? (s.add(c), c.install(l, ...u)) : ue(c) && (s.add(c), c(l, ...u))), l;
      },
      mixin(c) {
        return a.mixins.includes(c) || a.mixins.push(c), l;
      },
      component(c, u) {
        return u ? (a.components[c] = u, l) : a.components[c];
      },
      directive(c, u) {
        return u ? (a.directives[c] = u, l) : a.directives[c];
      },
      mount(c, u, f) {
        if (!i) {
          const d = le(n, o);
          return d.appContext = a, f === !0 ? f = "svg" : f === !1 && (f = void 0), u && t ? t(d, c) : e(d, c, f), i = !0, l._container = c, c.__vue_app__ = l, Xo(d.component) || d.component.proxy;
        }
      },
      unmount() {
        i && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return a.provides[c] = u, l;
      },
      runWithContext(c) {
        Mo = l;
        try {
          return c();
        } finally {
          Mo = null;
        }
      }
    };
    return l;
  };
}
let Mo = null;
function Yr(e, t) {
  if (Ue) {
    let r = Ue.provides;
    const n = Ue.parent && Ue.parent.provides;
    n === r && (r = Ue.provides = Object.create(n)), r[e] = t;
  }
}
function Gt(e, t, r = !1) {
  const n = Ue || Ge;
  if (n || Mo) {
    const o = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : Mo._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return r && ue(t) ? t.call(n && n.proxy) : t;
  }
}
function Tv(e, t, r, n = !1) {
  const o = {}, a = {};
  Do(a, qo, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), tu(e, t, o, a);
  for (const s in e.propsOptions[0])
    s in o || (o[s] = void 0);
  r ? e.props = n ? o : $d(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function Pv(e, t, r, n) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: s }
  } = e, i = pe(o), [l] = e.propsOptions;
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
        if (Go(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (l)
          if (me(a, d))
            h !== a[d] && (a[d] = h, c = !0);
          else {
            const g = ft(d);
            o[g] = Ha(
              l,
              i,
              g,
              h,
              e,
              !1
            );
          }
        else
          h !== a[d] && (a[d] = h, c = !0);
      }
    }
  } else {
    tu(e, t, o, a) && (c = !0);
    let u;
    for (const f in i)
      (!t || // for camelCase
      !me(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = pt(f)) === f || !me(t, u))) && (l ? r && // for camelCase
      (r[f] !== void 0 || // for kebab-case
      r[u] !== void 0) && (o[f] = Ha(
        l,
        i,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (a !== i)
      for (const f in a)
        (!t || !me(t, f)) && (delete a[f], c = !0);
  }
  c && Wt(e, "set", "$attrs");
}
function tu(e, t, r, n) {
  const [o, a] = e.propsOptions;
  let s = !1, i;
  if (t)
    for (let l in t) {
      if (vo(l))
        continue;
      const c = t[l];
      let u;
      o && me(o, u = ft(l)) ? !a || !a.includes(u) ? r[u] = c : (i || (i = {}))[u] = c : Go(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (a) {
    const l = pe(r), c = i || ke;
    for (let u = 0; u < a.length; u++) {
      const f = a[u];
      r[f] = Ha(
        o,
        l,
        f,
        c[f],
        e,
        !me(c, f)
      );
    }
  }
  return s;
}
function Ha(e, t, r, n, o, a) {
  const s = e[r];
  if (s != null) {
    const i = me(s, "default");
    if (i && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && ue(l)) {
        const { propsDefaults: c } = o;
        r in c ? n = c[r] : (Xr(o), n = c[r] = l.call(
          null,
          t
        ), Ir());
      } else
        n = l;
    }
    s[
      0
      /* shouldCast */
    ] && (a && !i ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === pt(r)) && (n = !0));
  }
  return n;
}
function ru(e, t, r = !1) {
  const n = t.propsCache, o = n.get(e);
  if (o)
    return o;
  const a = e.props, s = {}, i = [];
  let l = !1;
  if (!ue(e)) {
    const u = (f) => {
      l = !0;
      const [d, h] = ru(f, t, !0);
      Be(s, d), h && i.push(...h);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!a && !l)
    return Ce(e) && n.set(e, Gr), Gr;
  if (ie(a))
    for (let u = 0; u < a.length; u++) {
      const f = ft(a[u]);
      wi(f) && (s[f] = ke);
    }
  else if (a)
    for (const u in a) {
      const f = ft(u);
      if (wi(f)) {
        const d = a[u], h = s[f] = ie(d) || ue(d) ? { type: d } : Be({}, d);
        if (h) {
          const g = Ai(Boolean, h.type), b = Ai(String, h.type);
          h[
            0
            /* shouldCast */
          ] = g > -1, h[
            1
            /* shouldCastTrue */
          ] = b < 0 || g < b, (g > -1 || me(h, "default")) && i.push(f);
        }
      }
    }
  const c = [s, i];
  return Ce(e) && n.set(e, c), c;
}
function wi(e) {
  return e[0] !== "$";
}
function _i(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Di(e, t) {
  return _i(e) === _i(t);
}
function Ai(e, t) {
  return ie(t) ? t.findIndex((r) => Di(r, e)) : ue(t) && Di(t, e) ? 0 : -1;
}
const nu = (e) => e[0] === "_" || e === "$stable", As = (e) => ie(e) ? e.map(Tt) : [Tt(e)], $v = (e, t, r) => {
  if (t._n)
    return t;
  const n = Ye((...o) => (kr.NODE_ENV, As(t(...o))), r);
  return n._c = !1, n;
}, ou = (e, t, r) => {
  const n = e._ctx;
  for (const o in e) {
    if (nu(o))
      continue;
    const a = e[o];
    if (ue(a))
      t[o] = $v(o, a, n);
    else if (a != null) {
      const s = As(a);
      t[o] = () => s;
    }
  }
}, au = (e, t) => {
  const r = As(t);
  e.slots.default = () => r;
}, Yv = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (e.slots = pe(t), Do(t, "_", r)) : ou(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && au(e, t);
  Do(e.slots, qo, 1);
}, Nv = (e, t, r) => {
  const { vnode: n, slots: o } = e;
  let a = !0, s = ke;
  if (n.shapeFlag & 32) {
    const i = t._;
    i ? r && i === 1 ? a = !1 : (Be(o, t), !r && i === 1 && delete o._) : (a = !t.$stable, ou(t, o)), s = t;
  } else
    t && (au(e, t), s = { default: 1 });
  if (a)
    for (const i in o)
      !nu(i) && s[i] == null && delete o[i];
};
function ja(e, t, r, n, o = !1) {
  if (ie(e)) {
    e.forEach(
      (d, h) => ja(
        d,
        t && (ie(t) ? t[h] : t),
        r,
        n,
        o
      )
    );
    return;
  }
  if (Tn(n) && !o)
    return;
  const a = n.shapeFlag & 4 ? Xo(n.component) || n.component.proxy : n.el, s = o ? null : a, { i, r: l } = e, c = t && t.r, u = i.refs === ke ? i.refs = {} : i.refs, f = i.setupState;
  if (c != null && c !== l && ($e(c) ? (u[c] = null, me(f, c) && (f[c] = null)) : Pe(c) && (c.value = null)), ue(l))
    zt(l, i, 12, [s, u]);
  else {
    const d = $e(l), h = Pe(l);
    if (d || h) {
      const g = () => {
        if (e.f) {
          const b = d ? me(f, l) ? f[l] : u[l] : l.value;
          o ? ie(b) && ls(b, a) : ie(b) ? b.includes(a) || b.push(a) : d ? (u[l] = [a], me(f, l) && (f[l] = u[l])) : (l.value = [a], e.k && (u[e.k] = l.value));
        } else
          d ? (u[l] = s, me(f, l) && (f[l] = s)) : h && (l.value = s, e.k && (u[e.k] = s));
      };
      s ? (g.id = -1, ot(g, r)) : g();
    }
  }
}
const ot = sv;
function Rv(e) {
  return Lv(e);
}
function Lv(e, t) {
  const r = hc();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: o,
    patchProp: a,
    createElement: s,
    createText: i,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: d,
    setScopeId: h = ut,
    insertStaticContent: g
  } = e, b = (v, m, w, O = null, M = null, Y = null, U = void 0, $ = null, N = !!m.dynamicChildren) => {
    if (v === m)
      return;
    v && !Ar(v, m) && (O = Me(v), q(v, M, Y, !0), v = null), m.patchFlag === -2 && (N = !1, m.dynamicChildren = null);
    const { type: S, ref: W, shapeFlag: X } = m;
    switch (S) {
      case Qo:
        A(v, m, w, O);
        break;
      case yt:
        y(v, m, w, O);
        break;
      case ga:
        v == null && H(m, w, O, U);
        break;
      case we:
        _(
          v,
          m,
          w,
          O,
          M,
          Y,
          U,
          $,
          N
        );
        break;
      default:
        X & 1 ? C(
          v,
          m,
          w,
          O,
          M,
          Y,
          U,
          $,
          N
        ) : X & 6 ? L(
          v,
          m,
          w,
          O,
          M,
          Y,
          U,
          $,
          N
        ) : (X & 64 || X & 128) && S.process(
          v,
          m,
          w,
          O,
          M,
          Y,
          U,
          $,
          N,
          Re
        );
    }
    W != null && M && ja(W, v && v.ref, Y, m || v, !m);
  }, A = (v, m, w, O) => {
    if (v == null)
      n(
        m.el = i(m.children),
        w,
        O
      );
    else {
      const M = m.el = v.el;
      m.children !== v.children && c(M, m.children);
    }
  }, y = (v, m, w, O) => {
    v == null ? n(
      m.el = l(m.children || ""),
      w,
      O
    ) : m.el = v.el;
  }, H = (v, m, w, O) => {
    [v.el, v.anchor] = g(
      v.children,
      m,
      w,
      O,
      v.el,
      v.anchor
    );
  }, R = ({ el: v, anchor: m }, w, O) => {
    let M;
    for (; v && v !== m; )
      M = d(v), n(v, w, O), v = M;
    n(m, w, O);
  }, I = ({ el: v, anchor: m }) => {
    let w;
    for (; v && v !== m; )
      w = d(v), o(v), v = w;
    o(m);
  }, C = (v, m, w, O, M, Y, U, $, N) => {
    m.type === "svg" ? U = "svg" : m.type === "math" && (U = "mathml"), v == null ? Q(
      m,
      w,
      O,
      M,
      Y,
      U,
      $,
      N
    ) : F(
      v,
      m,
      M,
      Y,
      U,
      $,
      N
    );
  }, Q = (v, m, w, O, M, Y, U, $) => {
    let N, S;
    const { props: W, shapeFlag: X, transition: Z, dirs: se } = v;
    if (N = v.el = s(
      v.type,
      Y,
      W && W.is,
      W
    ), X & 8 ? u(N, v.children) : X & 16 && x(
      v.children,
      N,
      null,
      O,
      M,
      ma(v, Y),
      U,
      $
    ), se && gr(v, null, O, "created"), j(N, v, v.scopeId, U, O), W) {
      for (const ve in W)
        ve !== "value" && !vo(ve) && a(
          N,
          ve,
          null,
          W[ve],
          Y,
          v.children,
          O,
          M,
          De
        );
      "value" in W && a(N, "value", null, W.value, Y), (S = W.onVnodeBeforeMount) && St(S, O, v);
    }
    se && gr(v, null, O, "beforeMount");
    const ce = Fv(M, Z);
    ce && Z.beforeEnter(N), n(N, m, w), ((S = W && W.onVnodeMounted) || ce || se) && ot(() => {
      S && St(S, O, v), ce && Z.enter(N), se && gr(v, null, O, "mounted");
    }, M);
  }, j = (v, m, w, O, M) => {
    if (w && h(v, w), O)
      for (let Y = 0; Y < O.length; Y++)
        h(v, O[Y]);
    if (M) {
      let Y = M.subTree;
      if (m === Y) {
        const U = M.vnode;
        j(
          v,
          U,
          U.scopeId,
          U.slotScopeIds,
          M.parent
        );
      }
    }
  }, x = (v, m, w, O, M, Y, U, $, N = 0) => {
    for (let S = N; S < v.length; S++) {
      const W = v[S] = $ ? ar(v[S]) : Tt(v[S]);
      b(
        null,
        W,
        m,
        w,
        O,
        M,
        Y,
        U,
        $
      );
    }
  }, F = (v, m, w, O, M, Y, U) => {
    const $ = m.el = v.el;
    let { patchFlag: N, dynamicChildren: S, dirs: W } = m;
    N |= v.patchFlag & 16;
    const X = v.props || ke, Z = m.props || ke;
    let se;
    if (w && yr(w, !1), (se = Z.onVnodeBeforeUpdate) && St(se, w, m, v), W && gr(m, v, w, "beforeUpdate"), w && yr(w, !0), S ? B(
      v.dynamicChildren,
      S,
      $,
      w,
      O,
      ma(m, M),
      Y
    ) : U || ae(
      v,
      m,
      $,
      null,
      w,
      O,
      ma(m, M),
      Y,
      !1
    ), N > 0) {
      if (N & 16)
        V(
          $,
          m,
          X,
          Z,
          w,
          O,
          M
        );
      else if (N & 2 && X.class !== Z.class && a($, "class", null, Z.class, M), N & 4 && a($, "style", X.style, Z.style, M), N & 8) {
        const ce = m.dynamicProps;
        for (let ve = 0; ve < ce.length; ve++) {
          const ye = ce[ve], Te = X[ye], ze = Z[ye];
          (ze !== Te || ye === "value") && a(
            $,
            ye,
            Te,
            ze,
            M,
            v.children,
            w,
            O,
            De
          );
        }
      }
      N & 1 && v.children !== m.children && u($, m.children);
    } else
      !U && S == null && V(
        $,
        m,
        X,
        Z,
        w,
        O,
        M
      );
    ((se = Z.onVnodeUpdated) || W) && ot(() => {
      se && St(se, w, m, v), W && gr(m, v, w, "updated");
    }, O);
  }, B = (v, m, w, O, M, Y, U) => {
    for (let $ = 0; $ < m.length; $++) {
      const N = v[$], S = m[$], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ar(N, S) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 70) ? f(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      b(
        N,
        S,
        W,
        null,
        O,
        M,
        Y,
        U,
        !0
      );
    }
  }, V = (v, m, w, O, M, Y, U) => {
    if (w !== O) {
      if (w !== ke)
        for (const $ in w)
          !vo($) && !($ in O) && a(
            v,
            $,
            w[$],
            null,
            U,
            m.children,
            M,
            Y,
            De
          );
      for (const $ in O) {
        if (vo($))
          continue;
        const N = O[$], S = w[$];
        N !== S && $ !== "value" && a(
          v,
          $,
          S,
          N,
          U,
          m.children,
          M,
          Y,
          De
        );
      }
      "value" in O && a(v, "value", w.value, O.value, U);
    }
  }, _ = (v, m, w, O, M, Y, U, $, N) => {
    const S = m.el = v ? v.el : i(""), W = m.anchor = v ? v.anchor : i("");
    let { patchFlag: X, dynamicChildren: Z, slotScopeIds: se } = m;
    se && ($ = $ ? $.concat(se) : se), v == null ? (n(S, w, O), n(W, w, O), x(
      m.children,
      w,
      W,
      M,
      Y,
      U,
      $,
      N
    )) : X > 0 && X & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren ? (B(
      v.dynamicChildren,
      Z,
      w,
      M,
      Y,
      U,
      $
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || M && m === M.subTree) && su(
      v,
      m,
      !0
      /* shallow */
    )) : ae(
      v,
      m,
      w,
      W,
      M,
      Y,
      U,
      $,
      N
    );
  }, L = (v, m, w, O, M, Y, U, $, N) => {
    m.slotScopeIds = $, v == null ? m.shapeFlag & 512 ? M.ctx.activate(
      m,
      w,
      O,
      U,
      N
    ) : ne(
      m,
      w,
      O,
      M,
      Y,
      U,
      N
    ) : K(v, m, N);
  }, ne = (v, m, w, O, M, Y, U) => {
    const $ = v.component = Gv(
      v,
      O,
      M
    );
    if (Vo(v) && ($.ctx.renderer = Re), Kv($), $.asyncDep) {
      if (M && M.registerDep($, ee), !v.el) {
        const N = $.subTree = le(yt);
        y(null, N, m, w);
      }
    } else
      ee(
        $,
        v,
        m,
        w,
        M,
        Y,
        U
      );
  }, K = (v, m, w) => {
    const O = m.component = v.component;
    if (tv(v, m, w))
      if (O.asyncDep && !O.asyncResolved) {
        re(O, m, w);
        return;
      } else
        O.next = m, Qd(O.update), O.effect.dirty = !0, O.update();
    else
      m.el = v.el, O.vnode = m;
  }, ee = (v, m, w, O, M, Y, U) => {
    const $ = () => {
      if (v.isMounted) {
        let { next: W, bu: X, u: Z, parent: se, vnode: ce } = v;
        {
          const kt = iu(v);
          if (kt) {
            W && (W.el = ce.el, re(v, W, U)), kt.asyncDep.then(() => {
              v.isUnmounted || $();
            });
            return;
          }
        }
        let ve = W, ye;
        yr(v, !1), W ? (W.el = ce.el, re(v, W, U)) : W = ce, X && fa(X), (ye = W.props && W.props.onVnodeBeforeUpdate) && St(ye, se, W, ce), yr(v, !0);
        const Te = va(v), ze = v.subTree;
        v.subTree = Te, b(
          ze,
          Te,
          // parent may have changed if it's in a teleport
          f(ze.el),
          // anchor may have changed if it's in a fragment
          Me(ze),
          v,
          M,
          Y
        ), W.el = Te.el, ve === null && rv(v, Te.el), Z && ot(Z, M), (ye = W.props && W.props.onVnodeUpdated) && ot(
          () => St(ye, se, W, ce),
          M
        );
      } else {
        let W;
        const { el: X, props: Z } = m, { bm: se, m: ce, parent: ve } = v, ye = Tn(m);
        if (yr(v, !1), se && fa(se), !ye && (W = Z && Z.onVnodeBeforeMount) && St(W, ve, m), yr(v, !0), X && Ze) {
          const Te = () => {
            v.subTree = va(v), Ze(
              X,
              v.subTree,
              v,
              M,
              null
            );
          };
          ye ? m.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !v.isUnmounted && Te()
          ) : Te();
        } else {
          const Te = v.subTree = va(v);
          b(
            null,
            Te,
            w,
            O,
            v,
            M,
            Y
          ), m.el = Te.el;
        }
        if (ce && ot(ce, M), !ye && (W = Z && Z.onVnodeMounted)) {
          const Te = m;
          ot(
            () => St(W, ve, Te),
            M
          );
        }
        (m.shapeFlag & 256 || ve && Tn(ve.vnode) && ve.vnode.shapeFlag & 256) && v.a && ot(v.a, M), v.isMounted = !0, m = w = O = null;
      }
    }, N = v.effect = new us(
      $,
      ut,
      () => ys(S),
      v.scope
      // track it in component's effect scope
    ), S = v.update = () => {
      N.dirty && N.run();
    };
    S.id = v.uid, yr(v, !0), S();
  }, re = (v, m, w) => {
    m.component = v;
    const O = v.vnode.props;
    v.vnode = m, v.next = null, Pv(v, m.props, O, w), Nv(v, m.children, w), dr(), di(v), vr();
  }, ae = (v, m, w, O, M, Y, U, $, N = !1) => {
    const S = v && v.children, W = v ? v.shapeFlag : 0, X = m.children, { patchFlag: Z, shapeFlag: se } = m;
    if (Z > 0) {
      if (Z & 128) {
        P(
          S,
          X,
          w,
          O,
          M,
          Y,
          U,
          $,
          N
        );
        return;
      } else if (Z & 256) {
        he(
          S,
          X,
          w,
          O,
          M,
          Y,
          U,
          $,
          N
        );
        return;
      }
    }
    se & 8 ? (W & 16 && De(S, M, Y), X !== S && u(w, X)) : W & 16 ? se & 16 ? P(
      S,
      X,
      w,
      O,
      M,
      Y,
      U,
      $,
      N
    ) : De(S, M, Y, !0) : (W & 8 && u(w, ""), se & 16 && x(
      X,
      w,
      O,
      M,
      Y,
      U,
      $,
      N
    ));
  }, he = (v, m, w, O, M, Y, U, $, N) => {
    v = v || Gr, m = m || Gr;
    const S = v.length, W = m.length, X = Math.min(S, W);
    let Z;
    for (Z = 0; Z < X; Z++) {
      const se = m[Z] = N ? ar(m[Z]) : Tt(m[Z]);
      b(
        v[Z],
        se,
        w,
        null,
        M,
        Y,
        U,
        $,
        N
      );
    }
    S > W ? De(
      v,
      M,
      Y,
      !0,
      !1,
      X
    ) : x(
      m,
      w,
      O,
      M,
      Y,
      U,
      $,
      N,
      X
    );
  }, P = (v, m, w, O, M, Y, U, $, N) => {
    let S = 0;
    const W = m.length;
    let X = v.length - 1, Z = W - 1;
    for (; S <= X && S <= Z; ) {
      const se = v[S], ce = m[S] = N ? ar(m[S]) : Tt(m[S]);
      if (Ar(se, ce))
        b(
          se,
          ce,
          w,
          null,
          M,
          Y,
          U,
          $,
          N
        );
      else
        break;
      S++;
    }
    for (; S <= X && S <= Z; ) {
      const se = v[X], ce = m[Z] = N ? ar(m[Z]) : Tt(m[Z]);
      if (Ar(se, ce))
        b(
          se,
          ce,
          w,
          null,
          M,
          Y,
          U,
          $,
          N
        );
      else
        break;
      X--, Z--;
    }
    if (S > X) {
      if (S <= Z) {
        const se = Z + 1, ce = se < W ? m[se].el : O;
        for (; S <= Z; )
          b(
            null,
            m[S] = N ? ar(m[S]) : Tt(m[S]),
            w,
            ce,
            M,
            Y,
            U,
            $,
            N
          ), S++;
      }
    } else if (S > Z)
      for (; S <= X; )
        q(v[S], M, Y, !0), S++;
    else {
      const se = S, ce = S, ve = /* @__PURE__ */ new Map();
      for (S = ce; S <= Z; S++) {
        const He = m[S] = N ? ar(m[S]) : Tt(m[S]);
        He.key != null && ve.set(He.key, S);
      }
      let ye, Te = 0;
      const ze = Z - ce + 1;
      let kt = !1, mr = 0;
      const It = new Array(ze);
      for (S = 0; S < ze; S++)
        It[S] = 0;
      for (S = se; S <= X; S++) {
        const He = v[S];
        if (Te >= ze) {
          q(He, M, Y, !0);
          continue;
        }
        let Je;
        if (He.key != null)
          Je = ve.get(He.key);
        else
          for (ye = ce; ye <= Z; ye++)
            if (It[ye - ce] === 0 && Ar(He, m[ye])) {
              Je = ye;
              break;
            }
        Je === void 0 ? q(He, M, Y, !0) : (It[Je - ce] = S + 1, Je >= mr ? mr = Je : kt = !0, b(
          He,
          m[Je],
          w,
          null,
          M,
          Y,
          U,
          $,
          N
        ), Te++);
      }
      const Br = kt ? Bv(It) : Gr;
      for (ye = Br.length - 1, S = ze - 1; S >= 0; S--) {
        const He = ce + S, Je = m[He], T = He + 1 < W ? m[He + 1].el : O;
        It[S] === 0 ? b(
          null,
          Je,
          w,
          T,
          M,
          Y,
          U,
          $,
          N
        ) : kt && (ye < 0 || S !== Br[ye] ? de(Je, w, T, 2) : ye--);
      }
    }
  }, de = (v, m, w, O, M = null) => {
    const { el: Y, type: U, transition: $, children: N, shapeFlag: S } = v;
    if (S & 6) {
      de(v.component.subTree, m, w, O);
      return;
    }
    if (S & 128) {
      v.suspense.move(m, w, O);
      return;
    }
    if (S & 64) {
      U.move(v, m, w, Re);
      return;
    }
    if (U === we) {
      n(Y, m, w);
      for (let X = 0; X < N.length; X++)
        de(N[X], m, w, O);
      n(v.anchor, m, w);
      return;
    }
    if (U === ga) {
      R(v, m, w);
      return;
    }
    if (O !== 2 && S & 1 && $)
      if (O === 0)
        $.beforeEnter(Y), n(Y, m, w), ot(() => $.enter(Y), M);
      else {
        const { leave: X, delayLeave: Z, afterLeave: se } = $, ce = () => n(Y, m, w), ve = () => {
          X(Y, () => {
            ce(), se && se();
          });
        };
        Z ? Z(Y, ce, ve) : ve();
      }
    else
      n(Y, m, w);
  }, q = (v, m, w, O = !1, M = !1) => {
    const {
      type: Y,
      props: U,
      ref: $,
      children: N,
      dynamicChildren: S,
      shapeFlag: W,
      patchFlag: X,
      dirs: Z
    } = v;
    if ($ != null && ja($, null, w, v, !0), W & 256) {
      m.ctx.deactivate(v);
      return;
    }
    const se = W & 1 && Z, ce = !Tn(v);
    let ve;
    if (ce && (ve = U && U.onVnodeBeforeUnmount) && St(ve, m, v), W & 6)
      Ee(v.component, w, O);
    else {
      if (W & 128) {
        v.suspense.unmount(w, O);
        return;
      }
      se && gr(v, null, m, "beforeUnmount"), W & 64 ? v.type.remove(
        v,
        m,
        w,
        M,
        Re,
        O
      ) : S && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Y !== we || X > 0 && X & 64) ? De(
        S,
        m,
        w,
        !1,
        !0
      ) : (Y === we && X & 384 || !M && W & 16) && De(N, m, w), O && Ie(v);
    }
    (ce && (ve = U && U.onVnodeUnmounted) || se) && ot(() => {
      ve && St(ve, m, v), se && gr(v, null, m, "unmounted");
    }, w);
  }, Ie = (v) => {
    const { type: m, el: w, anchor: O, transition: M } = v;
    if (m === we) {
      ge(w, O);
      return;
    }
    if (m === ga) {
      I(v);
      return;
    }
    const Y = () => {
      o(w), M && !M.persisted && M.afterLeave && M.afterLeave();
    };
    if (v.shapeFlag & 1 && M && !M.persisted) {
      const { leave: U, delayLeave: $ } = M, N = () => U(w, Y);
      $ ? $(v.el, Y, N) : N();
    } else
      Y();
  }, ge = (v, m) => {
    let w;
    for (; v !== m; )
      w = d(v), o(v), v = w;
    o(m);
  }, Ee = (v, m, w) => {
    const { bum: O, scope: M, update: Y, subTree: U, um: $ } = v;
    O && fa(O), M.stop(), Y && (Y.active = !1, q(U, v, m, w)), $ && ot($, m), ot(() => {
      v.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve());
  }, De = (v, m, w, O = !1, M = !1, Y = 0) => {
    for (let U = Y; U < v.length; U++)
      q(v[U], m, w, O, M);
  }, Me = (v) => v.shapeFlag & 6 ? Me(v.component.subTree) : v.shapeFlag & 128 ? v.suspense.next() : d(v.anchor || v.el), Ne = (v, m, w) => {
    v == null ? m._vnode && q(m._vnode, null, null, !0) : b(
      m._vnode || null,
      v,
      m,
      null,
      null,
      null,
      w
    ), di(), Fc(), m._vnode = v;
  }, Re = {
    p: b,
    um: q,
    m: de,
    r: Ie,
    mt: ne,
    mc: x,
    pc: ae,
    pbc: B,
    n: Me,
    o: e
  };
  let lt, Ze;
  return t && ([lt, Ze] = t(
    Re
  )), {
    render: Ne,
    hydrate: lt,
    createApp: Ev(Ne, lt)
  };
}
function ma({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function yr({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r;
}
function Fv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function su(e, t, r = !1) {
  const n = e.children, o = t.children;
  if (ie(n) && ie(o))
    for (let a = 0; a < n.length; a++) {
      const s = n[a];
      let i = o[a];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[a] = ar(o[a]), i.el = s.el), r || su(s, i)), i.type === Qo && (i.el = s.el);
    }
}
function Bv(e) {
  const t = e.slice(), r = [0];
  let n, o, a, s, i;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (o = r[r.length - 1], e[o] < c) {
        t[n] = o, r.push(n);
        continue;
      }
      for (a = 0, s = r.length - 1; a < s; )
        i = a + s >> 1, e[r[i]] < c ? a = i + 1 : s = i;
      c < e[r[a]] && (a > 0 && (t[n] = r[a - 1]), r[a] = n);
    }
  }
  for (a = r.length, s = r[a - 1]; a-- > 0; )
    r[a] = s, s = t[s];
  return r;
}
function iu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : iu(t);
}
const Uv = (e) => e.__isTeleport, we = Symbol.for("v-fgt"), Qo = Symbol.for("v-txt"), yt = Symbol.for("v-cmt"), ga = Symbol.for("v-stc"), $n = [];
let xt = null;
function G(e = !1) {
  $n.push(xt = e ? null : []);
}
function Hv() {
  $n.pop(), xt = $n[$n.length - 1] || null;
}
let Bn = 1;
function xi(e) {
  Bn += e;
}
function lu(e) {
  return e.dynamicChildren = Bn > 0 ? xt || Gr : null, Hv(), Bn > 0 && xt && xt.push(e), e;
}
function oe(e, t, r, n, o, a) {
  return lu(
    J(
      e,
      t,
      r,
      n,
      o,
      a,
      !0
    )
  );
}
function Ve(e, t, r, n, o) {
  return lu(
    le(
      e,
      t,
      r,
      n,
      o,
      !0
    )
  );
}
function Oo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ar(e, t) {
  return e.type === t.type && e.key === t.key;
}
const jv = (...e) => uu(
  ...e
), qo = "__vInternal", cu = ({ key: e }) => e ?? null, mo = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? $e(e) || Pe(e) || ue(e) ? { i: Ge, r: e, k: t, f: !!r } : e : null);
function J(e, t = null, r = null, n = 0, o = null, a = e === we ? 0 : 1, s = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cu(t),
    ref: t && mo(t),
    scopeId: Hc,
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
    shapeFlag: a,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ge
  };
  return i ? (xs(l, r), a & 128 && e.normalize(l)) : r && (l.shapeFlag |= $e(r) ? 8 : 16), Bn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  xt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && xt.push(l), l;
}
const le = kr.NODE_ENV !== "production" ? jv : uu;
function uu(e, t = null, r = null, n = 0, o = null, a = !1) {
  if ((!e || e === jc) && (e = yt), Oo(e)) {
    const i = Vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && xs(i, r), Bn > 0 && !a && xt && (i.shapeFlag & 6 ? xt[xt.indexOf(e)] = i : xt.push(i)), i.patchFlag |= -2, i;
  }
  if (ep(e) && (e = e.__vccOpts), t) {
    t = ko(t);
    let { class: i, style: l } = t;
    i && !$e(i) && (t.class = xe(i)), Ce(l) && (Sc(l) && !ie(l) && (l = Be({}, l)), t.style = jt(l));
  }
  const s = $e(e) ? 1 : av(e) ? 128 : Uv(e) ? 64 : Ce(e) ? 4 : ue(e) ? 2 : 0;
  return J(
    e,
    t,
    r,
    n,
    o,
    s,
    a,
    !0
  );
}
function ko(e) {
  return e ? Sc(e) || qo in e ? Be({}, e) : e : null;
}
function Vt(e, t, r = !1) {
  const { props: n, ref: o, patchFlag: a, children: s } = e, i = t ? Nr(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && cu(i),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? ie(o) ? o.concat(mo(t)) : [o, mo(t)] : mo(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: kr.NODE_ENV !== "production" && a === -1 && ie(s) ? s.map(fu) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && Vt(e.ssContent),
    ssFallback: e.ssFallback && Vt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function fu(e) {
  const t = Vt(e);
  return ie(e.children) && (t.children = e.children.map(fu)), t;
}
function Zo(e = " ", t = 0) {
  return le(Qo, null, e, t);
}
function Fe(e = "", t = !1) {
  return t ? (G(), Ve(yt, null, e)) : le(yt, null, e);
}
function Tt(e) {
  return e == null || typeof e == "boolean" ? le(yt) : ie(e) ? le(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ar(e) : le(Qo, null, String(e));
}
function ar(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vt(e);
}
function xs(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ie(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), xs(e, o()), o._c && (o._d = !0));
      return;
    } else {
      r = 32;
      const o = t._;
      !o && !(qo in t) ? t._ctx = Ge : o === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    ue(t) ? (t = { default: t, _ctx: Ge }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Zo(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Nr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = xe([t.class, n.class]));
      else if (o === "style")
        t.style = jt([t.style, n.style]);
      else if (Bo(o)) {
        const a = t[o], s = n[o];
        s && a !== s && !(ie(a) && a.includes(s)) && (t[o] = a ? [].concat(a, s) : s);
      } else
        o !== "" && (t[o] = n[o]);
  }
  return t;
}
function St(e, t, r, n = null) {
  mt(e, t, 7, [
    r,
    n
  ]);
}
const Wv = eu();
let zv = 0;
function Gv(e, t, r) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || Wv, a = {
    uid: zv++,
    vnode: e,
    type: n,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new fd(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ru(n, o),
    emitsOptions: Uc(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ke,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ke,
    data: ke,
    props: ke,
    attrs: ke,
    slots: ke,
    refs: ke,
    setupState: ke,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Jd.bind(null, a), e.ce && e.ce(a), a;
}
let Ue = null;
const Vv = () => Ue || Ge;
let Cs, Wa;
{
  const e = hc(), t = (r, n) => {
    let o;
    return (o = e[r]) || (o = e[r] = []), o.push(n), (a) => {
      o.length > 1 ? o.forEach((s) => s(a)) : o[0](a);
    };
  };
  Cs = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => Ue = r
  ), Wa = t(
    "__VUE_SSR_SETTERS__",
    (r) => Jo = r
  );
}
const Xr = (e) => {
  Cs(e), e.scope.on();
}, Ir = () => {
  Ue && Ue.scope.off(), Cs(null);
};
function du(e) {
  return e.vnode.shapeFlag & 4;
}
let Jo = !1;
function Kv(e, t = !1) {
  t && Wa(t);
  const { props: r, children: n } = e.vnode, o = du(e);
  Tv(e, r, o, t), Yv(e, n);
  const a = o ? Qv(e, t) : void 0;
  return t && Wa(!1), a;
}
function Qv(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ec(new Proxy(e.ctx, xv));
  const { setup: n } = r;
  if (n) {
    const o = e.setupContext = n.length > 1 ? Zv(e) : null;
    Xr(e), dr();
    const a = zt(
      n,
      e,
      0,
      [
        e.props,
        o
      ]
    );
    if (vr(), Ir(), dc(a)) {
      if (a.then(Ir, Ir), t)
        return a.then((s) => {
          Ci(e, s, t);
        }).catch((s) => {
          zo(s, e, 0);
        });
      e.asyncDep = a;
    } else
      Ci(e, a, t);
  } else
    vu(e, t);
}
function Ci(e, t, r) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ce(t) && (e.setupState = $c(t)), vu(e, r);
}
let Mi;
function vu(e, t, r) {
  const n = e.type;
  if (!e.render) {
    if (!t && Mi && !n.render) {
      const o = n.template || Ds(e).template;
      if (o) {
        const { isCustomElement: a, compilerOptions: s } = e.appContext.config, { delimiters: i, compilerOptions: l } = n, c = Be(
          Be(
            {
              isCustomElement: a,
              delimiters: i
            },
            s
          ),
          l
        );
        n.render = Mi(o, c);
      }
    }
    e.render = n.render || ut;
  }
  {
    Xr(e), dr();
    try {
      Cv(e);
    } finally {
      vr(), Ir();
    }
  }
}
function qv(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, r) {
        return it(e, "get", "$attrs"), t[r];
      }
    }
  ));
}
function Zv(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    get attrs() {
      return qv(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Xo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy($c(Ec(e.exposed)), {
      get(t, r) {
        if (r in t)
          return t[r];
        if (r in Pn)
          return Pn[r](e);
      },
      has(t, r) {
        return r in t || r in Pn;
      }
    }));
}
const Jv = /(?:^|[-_])(\w)/g, Xv = (e) => e.replace(Jv, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function pu(e, t = !0) {
  return ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function hu(e, t, r = !1) {
  let n = pu(t);
  if (!n && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (n = o[1]);
  }
  if (!n && e && e.parent) {
    const o = (a) => {
      for (const s in a)
        if (a[s] === t)
          return s;
    };
    n = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return n ? Xv(n) : r ? "App" : "Anonymous";
}
function ep(e) {
  return ue(e) && "__vccOpts" in e;
}
const D = (e, t) => Yd(e, t, Jo);
function tp(e, t, r) {
  const n = arguments.length;
  return n === 2 ? Ce(t) && !ie(t) ? Oo(t) ? le(e, null, [t]) : le(e, t) : le(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Oo(r) && (r = [r]), le(e, t, r));
}
const rp = "3.4.3", np = "http://www.w3.org/2000/svg", op = "http://www.w3.org/1998/Math/MathML", sr = typeof document < "u" ? document : null, Oi = sr && /* @__PURE__ */ sr.createElement("template"), ap = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const o = t === "svg" ? sr.createElementNS(np, e) : t === "mathml" ? sr.createElementNS(op, e) : sr.createElement(e, r ? { is: r } : void 0);
    return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (e) => sr.createTextNode(e),
  createComment: (e) => sr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => sr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, o, a) {
    const s = r ? r.previousSibling : t.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), r), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      Oi.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const i = Oi.content;
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
}, tr = "transition", bn = "animation", Un = Symbol("_vtc"), ea = (e, { slots: t }) => tp(dv, sp(e), t);
ea.displayName = "Transition";
const mu = {
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
ea.props = /* @__PURE__ */ Be(
  {},
  Vc,
  mu
);
const br = (e, t = []) => {
  ie(e) ? e.forEach((r) => r(...t)) : e && e(...t);
}, ki = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function sp(e) {
  const t = {};
  for (const _ in e)
    _ in mu || (t[_] = e[_]);
  if (e.css === !1)
    return t;
  const {
    name: r = "v",
    type: n,
    duration: o,
    enterFromClass: a = `${r}-enter-from`,
    enterActiveClass: s = `${r}-enter-active`,
    enterToClass: i = `${r}-enter-to`,
    appearFromClass: l = a,
    appearActiveClass: c = s,
    appearToClass: u = i,
    leaveFromClass: f = `${r}-leave-from`,
    leaveActiveClass: d = `${r}-leave-active`,
    leaveToClass: h = `${r}-leave-to`
  } = e, g = ip(o), b = g && g[0], A = g && g[1], {
    onBeforeEnter: y,
    onEnter: H,
    onEnterCancelled: R,
    onLeave: I,
    onLeaveCancelled: C,
    onBeforeAppear: Q = y,
    onAppear: j = H,
    onAppearCancelled: x = R
  } = t, F = (_, L, ne) => {
    wr(_, L ? u : i), wr(_, L ? c : s), ne && ne();
  }, B = (_, L) => {
    _._isLeaving = !1, wr(_, f), wr(_, h), wr(_, d), L && L();
  }, V = (_) => (L, ne) => {
    const K = _ ? j : H, ee = () => F(L, _, ne);
    br(K, [L, ee]), Ii(() => {
      wr(L, _ ? l : a), rr(L, _ ? u : i), ki(K) || Si(L, n, b, ee);
    });
  };
  return Be(t, {
    onBeforeEnter(_) {
      br(y, [_]), rr(_, a), rr(_, s);
    },
    onBeforeAppear(_) {
      br(Q, [_]), rr(_, l), rr(_, c);
    },
    onEnter: V(!1),
    onAppear: V(!0),
    onLeave(_, L) {
      _._isLeaving = !0;
      const ne = () => B(_, L);
      rr(_, f), up(), rr(_, d), Ii(() => {
        _._isLeaving && (wr(_, f), rr(_, h), ki(I) || Si(_, n, A, ne));
      }), br(I, [_, ne]);
    },
    onEnterCancelled(_) {
      F(_, !1), br(R, [_]);
    },
    onAppearCancelled(_) {
      F(_, !0), br(x, [_]);
    },
    onLeaveCancelled(_) {
      B(_), br(C, [_]);
    }
  });
}
function ip(e) {
  if (e == null)
    return null;
  if (Ce(e))
    return [ya(e.enter), ya(e.leave)];
  {
    const t = ya(e);
    return [t, t];
  }
}
function ya(e) {
  return Ea(e);
}
function rr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.add(r)), (e[Un] || (e[Un] = /* @__PURE__ */ new Set())).add(t);
}
function wr(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const r = e[Un];
  r && (r.delete(t), r.size || (e[Un] = void 0));
}
function Ii(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let lp = 0;
function Si(e, t, r, n) {
  const o = e._endId = ++lp, a = () => {
    o === e._endId && n();
  };
  if (r)
    return setTimeout(a, r);
  const { type: s, timeout: i, propCount: l } = cp(e, t);
  if (!s)
    return n();
  const c = s + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(c, d), a();
  }, d = (h) => {
    h.target === e && ++u >= l && f();
  };
  setTimeout(() => {
    u < l && f();
  }, i + 1), e.addEventListener(c, d);
}
function cp(e, t) {
  const r = window.getComputedStyle(e), n = (g) => (r[g] || "").split(", "), o = n(`${tr}Delay`), a = n(`${tr}Duration`), s = Ei(o, a), i = n(`${bn}Delay`), l = n(`${bn}Duration`), c = Ei(i, l);
  let u = null, f = 0, d = 0;
  t === tr ? s > 0 && (u = tr, f = s, d = a.length) : t === bn ? c > 0 && (u = bn, f = c, d = l.length) : (f = Math.max(s, c), u = f > 0 ? s > c ? tr : bn : null, d = u ? u === tr ? a.length : l.length : 0);
  const h = u === tr && /\b(transform|all)(,|$)/.test(
    n(`${tr}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: d,
    hasTransform: h
  };
}
function Ei(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((r, n) => Ti(r) + Ti(e[n])));
}
function Ti(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function up() {
  return document.body.offsetHeight;
}
function fp(e, t, r) {
  const n = e[Un];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ms = Symbol("_vod"), ba = {
  beforeMount(e, { value: t }, { transition: r }) {
    e[Ms] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : wn(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), wn(e, !0), n.enter(e)) : n.leave(e, () => {
      wn(e, !1);
    }) : wn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    wn(e, t);
  }
};
function wn(e, t) {
  e.style.display = t ? e[Ms] : "none";
}
const dp = Symbol("");
function vp(e, t, r) {
  const n = e.style, o = $e(r);
  if (r && !o) {
    if (t && !$e(t))
      for (const a in t)
        r[a] == null && za(n, a, "");
    for (const a in r)
      za(n, a, r[a]);
  } else {
    const a = n.display;
    if (o) {
      if (t !== r) {
        const s = n[dp];
        s && (r += ";" + s), n.cssText = r;
      }
    } else
      t && e.removeAttribute("style");
    Ms in e && (n.display = a);
  }
}
const Pi = /\s*!important$/;
function za(e, t, r) {
  if (ie(r))
    r.forEach((n) => za(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = pp(e, t);
    Pi.test(r) ? e.setProperty(
      pt(n),
      r.replace(Pi, ""),
      "important"
    ) : e[n] = r;
  }
}
const $i = ["Webkit", "Moz", "ms"], wa = {};
function pp(e, t) {
  const r = wa[t];
  if (r)
    return r;
  let n = ft(t);
  if (n !== "filter" && n in e)
    return wa[t] = n;
  n = jo(n);
  for (let o = 0; o < $i.length; o++) {
    const a = $i[o] + n;
    if (a in e)
      return wa[t] = a;
  }
  return t;
}
const Yi = "http://www.w3.org/1999/xlink";
function hp(e, t, r, n, o) {
  if (n && t.startsWith("xlink:"))
    r == null ? e.removeAttributeNS(Yi, t.slice(6, t.length)) : e.setAttributeNS(Yi, t, r);
  else {
    const a = cd(t);
    r == null || a && !mc(r) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : r);
  }
}
function mp(e, t, r, n, o, a, s) {
  if (t === "innerHTML" || t === "textContent") {
    n && s(n, o, a), e[t] = r ?? "";
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
    c === "boolean" ? r = mc(r) : r == null && c === "string" ? (r = "", l = !0) : c === "number" && (r = 0, l = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  l && e.removeAttribute(t);
}
function gp(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function yp(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Ni = Symbol("_vei");
function bp(e, t, r, n, o = null) {
  const a = e[Ni] || (e[Ni] = {}), s = a[t];
  if (n && s)
    s.value = n;
  else {
    const [i, l] = wp(t);
    if (n) {
      const c = a[t] = Ap(n, o);
      gp(e, i, c, l);
    } else
      s && (yp(e, i, s, l), a[t] = void 0);
  }
}
const Ri = /(?:Once|Passive|Capture)$/;
function wp(e) {
  let t;
  if (Ri.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Ri); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : pt(e.slice(2)), t];
}
let _a = 0;
const _p = /* @__PURE__ */ Promise.resolve(), Dp = () => _a || (_p.then(() => _a = 0), _a = Date.now());
function Ap(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    mt(
      xp(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = Dp(), r;
}
function xp(e, t) {
  if (ie(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map((n) => (o) => !o._stopped && n && n(o));
  } else
    return t;
}
const Li = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Cp = (e, t, r, n, o, a, s, i, l) => {
  const c = o === "svg";
  t === "class" ? fp(e, n, c) : t === "style" ? vp(e, r, n) : Bo(t) ? is(t) || bp(e, t, r, n, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Mp(e, t, n, c)) ? mp(
    e,
    t,
    n,
    a,
    s,
    i,
    l
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), hp(e, t, n, c));
};
function Mp(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Li(t) && ue(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Li(t) && $e(r) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Op(e, t) {
  const r = /* @__PURE__ */ We(e);
  class n extends Os {
    constructor(a) {
      super(r, a, t);
    }
  }
  return n.def = r, n;
}
const kp = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Os extends kp {
  constructor(t, r = {}, n) {
    super(), this._def = t, this._props = r, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), xr(() => {
      this._connected || (Ui(null, this.shadowRoot), this._instance = null);
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
      for (const o of n)
        this._setAttr(o.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, o = !1) => {
      const { props: a, styles: s } = n;
      let i;
      if (a && !ie(a))
        for (const l in a) {
          const c = a[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Ea(this._props[l])), (i || (i = /* @__PURE__ */ Object.create(null)))[ft(l)] = !0);
        }
      this._numberProps = i, o && this._resolveProps(n), this._applyStyles(s), this._update();
    }, r = this._def.__asyncLoader;
    r ? r().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: r } = t, n = ie(r) ? r : Object.keys(r || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && n.includes(o) && this._setProp(o, this[o], !0, !1);
    for (const o of n.map(ft))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(a) {
          this._setProp(o, a);
        }
      });
  }
  _setAttr(t) {
    let r = this.getAttribute(t);
    const n = ft(t);
    this._numberProps && this._numberProps[n] && (r = Ea(r)), this._setProp(n, r, !1);
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
  _setProp(t, r, n = !0, o = !0) {
    r !== this._props[t] && (this._props[t] = r, o && this._instance && this._update(), n && (r === !0 ? this.setAttribute(pt(t), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(pt(t), r + "") : r || this.removeAttribute(pt(t))));
  }
  _update() {
    Ui(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = le(this._def, Be({}, this._props));
    return this._instance || (t.ce = (r) => {
      this._instance = r, r.isCE = !0;
      const n = (a, s) => {
        this.dispatchEvent(
          new CustomEvent(a, {
            detail: s
          })
        );
      };
      r.emit = (a, ...s) => {
        n(a, s), pt(a) !== a && n(pt(a), s);
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof Os) {
          r.parent = o._instance, r.provides = o._instance.provides;
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
const Ip = ["ctrl", "shift", "alt", "meta"], Sp = {
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
  exact: (e, t) => Ip.some((r) => e[`${r}Key`] && !t.includes(r))
}, Ep = (e, t) => {
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = (o, ...a) => {
    for (let s = 0; s < t.length; s++) {
      const i = Sp[t[s]];
      if (i && i(o, t))
        return;
    }
    return e(o, ...a);
  });
}, Tp = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Fi = (e, t) => {
  const r = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return r[n] || (r[n] = (o) => {
    if (!("key" in o))
      return;
    const a = pt(o.key);
    if (t.some((s) => s === a || Tp[s] === a))
      return e(o);
  });
}, Pp = /* @__PURE__ */ Be({ patchProp: Cp }, ap);
let Bi;
function $p() {
  return Bi || (Bi = Rv(Pp));
}
const Ui = (...e) => {
  $p().render(...e);
};
var at = "top", _t = "bottom", Dt = "right", st = "left", ks = "auto", Kn = [at, _t, Dt, st], en = "start", Hn = "end", Yp = "clippingParents", gu = "viewport", _n = "popper", Np = "reference", Hi = /* @__PURE__ */ Kn.reduce(function(e, t) {
  return e.concat([t + "-" + en, t + "-" + Hn]);
}, []), yu = /* @__PURE__ */ [].concat(Kn, [ks]).reduce(function(e, t) {
  return e.concat([t, t + "-" + en, t + "-" + Hn]);
}, []), Rp = "beforeRead", Lp = "read", Fp = "afterRead", Bp = "beforeMain", Up = "main", Hp = "afterMain", jp = "beforeWrite", Wp = "write", zp = "afterWrite", Gp = [Rp, Lp, Fp, Bp, Up, Hp, jp, Wp, zp];
function Rt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function dt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Er(e) {
  var t = dt(e).Element;
  return e instanceof t || e instanceof Element;
}
function bt(e) {
  var t = dt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Is(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = dt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Vp(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !bt(a) || !Rt(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Kp(e) {
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
      var o = t.elements[n], a = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !bt(o) || !Rt(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Qp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Vp,
  effect: Kp,
  requires: ["computeStyles"]
};
function Nt(e) {
  return e.split("-")[0];
}
var Sr = Math.max, Io = Math.min, tn = Math.round;
function Ga() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function bu() {
  return !/^((?!chrome|android).)*safari/i.test(Ga());
}
function rn(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && bt(e) && (o = e.offsetWidth > 0 && tn(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && tn(n.height) / e.offsetHeight || 1);
  var s = Er(e) ? dt(e) : window, i = s.visualViewport, l = !bu() && r, c = (n.left + (l && i ? i.offsetLeft : 0)) / o, u = (n.top + (l && i ? i.offsetTop : 0)) / a, f = n.width / o, d = n.height / a;
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
function Ss(e) {
  var t = rn(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function wu(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Is(r)) {
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
  return dt(e).getComputedStyle(e);
}
function qp(e) {
  return ["table", "td", "th"].indexOf(Rt(e)) >= 0;
}
function pr(e) {
  return ((Er(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ta(e) {
  return Rt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Is(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    pr(e)
  );
}
function ji(e) {
  return !bt(e) || // https://github.com/popperjs/popper-core/issues/837
  Kt(e).position === "fixed" ? null : e.offsetParent;
}
function Zp(e) {
  var t = /firefox/i.test(Ga()), r = /Trident/i.test(Ga());
  if (r && bt(e)) {
    var n = Kt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = ta(e);
  for (Is(o) && (o = o.host); bt(o) && ["html", "body"].indexOf(Rt(o)) < 0; ) {
    var a = Kt(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Qn(e) {
  for (var t = dt(e), r = ji(e); r && qp(r) && Kt(r).position === "static"; )
    r = ji(r);
  return r && (Rt(r) === "html" || Rt(r) === "body" && Kt(r).position === "static") ? t : r || Zp(e) || t;
}
function Es(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Yn(e, t, r) {
  return Sr(e, Io(t, r));
}
function Jp(e, t, r) {
  var n = Yn(e, t, r);
  return n > r ? r : n;
}
function _u() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Du(e) {
  return Object.assign({}, _u(), e);
}
function Au(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Xp = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Du(typeof t != "number" ? t : Au(t, Kn));
};
function eh(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, s = r.modifiersData.popperOffsets, i = Nt(r.placement), l = Es(i), c = [st, Dt].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!a || !s)) {
    var f = Xp(o.padding, r), d = Ss(a), h = l === "y" ? at : st, g = l === "y" ? _t : Dt, b = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], A = s[l] - r.rects.reference[l], y = Qn(a), H = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, R = b / 2 - A / 2, I = f[h], C = H - d[u] - f[g], Q = H / 2 - d[u] / 2 + R, j = Yn(I, Q, C), x = l;
    r.modifiersData[n] = (t = {}, t[x] = j, t.centerOffset = j - Q, t);
  }
}
function th(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || wu(t.elements.popper, o) && (t.elements.arrow = o));
}
const rh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: eh,
  effect: th,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function nn(e) {
  return e.split("-")[1];
}
var nh = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function oh(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: tn(r * o) / o || 0,
    y: tn(n * o) / o || 0
  };
}
function Wi(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, d = s.x, h = d === void 0 ? 0 : d, g = s.y, b = g === void 0 ? 0 : g, A = typeof u == "function" ? u({
    x: h,
    y: b
  }) : {
    x: h,
    y: b
  };
  h = A.x, b = A.y;
  var y = s.hasOwnProperty("x"), H = s.hasOwnProperty("y"), R = st, I = at, C = window;
  if (c) {
    var Q = Qn(r), j = "clientHeight", x = "clientWidth";
    if (Q === dt(r) && (Q = pr(r), Kt(Q).position !== "static" && i === "absolute" && (j = "scrollHeight", x = "scrollWidth")), Q = Q, o === at || (o === st || o === Dt) && a === Hn) {
      I = _t;
      var F = f && Q === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        Q[j]
      );
      b -= F - n.height, b *= l ? 1 : -1;
    }
    if (o === st || (o === at || o === _t) && a === Hn) {
      R = Dt;
      var B = f && Q === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        Q[x]
      );
      h -= B - n.width, h *= l ? 1 : -1;
    }
  }
  var V = Object.assign({
    position: i
  }, c && nh), _ = u === !0 ? oh({
    x: h,
    y: b
  }, dt(r)) : {
    x: h,
    y: b
  };
  if (h = _.x, b = _.y, l) {
    var L;
    return Object.assign({}, V, (L = {}, L[I] = H ? "0" : "", L[R] = y ? "0" : "", L.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", L));
  }
  return Object.assign({}, V, (t = {}, t[I] = H ? b + "px" : "", t[R] = y ? h + "px" : "", t.transform = "", t));
}
function ah(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, i = r.roundOffsets, l = i === void 0 ? !0 : i, c = {
    placement: Nt(t.placement),
    variation: nn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Wi(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Wi(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const sh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ah,
  data: {}
};
var so = {
  passive: !0
};
function ih(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, s = n.resize, i = s === void 0 ? !0 : s, l = dt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, so);
  }), i && l.addEventListener("resize", r.update, so), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, so);
    }), i && l.removeEventListener("resize", r.update, so);
  };
}
const lh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ih,
  data: {}
};
var ch = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function go(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ch[t];
  });
}
var uh = {
  start: "end",
  end: "start"
};
function zi(e) {
  return e.replace(/start|end/g, function(t) {
    return uh[t];
  });
}
function Ts(e) {
  var t = dt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Ps(e) {
  return rn(pr(e)).left + Ts(e).scrollLeft;
}
function fh(e, t) {
  var r = dt(e), n = pr(e), o = r.visualViewport, a = n.clientWidth, s = n.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var c = bu();
    (c || !c && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + Ps(e),
    y: l
  };
}
function dh(e) {
  var t, r = pr(e), n = Ts(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Sr(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Sr(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + Ps(e), l = -n.scrollTop;
  return Kt(o || r).direction === "rtl" && (i += Sr(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function $s(e) {
  var t = Kt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function xu(e) {
  return ["html", "body", "#document"].indexOf(Rt(e)) >= 0 ? e.ownerDocument.body : bt(e) && $s(e) ? e : xu(ta(e));
}
function Nn(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = xu(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = dt(n), s = o ? [a].concat(a.visualViewport || [], $s(n) ? n : []) : n, i = t.concat(s);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Nn(ta(s)))
  );
}
function Va(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function vh(e, t) {
  var r = rn(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Gi(e, t, r) {
  return t === gu ? Va(fh(e, r)) : Er(t) ? vh(t, r) : Va(dh(pr(e)));
}
function ph(e) {
  var t = Nn(ta(e)), r = ["absolute", "fixed"].indexOf(Kt(e).position) >= 0, n = r && bt(e) ? Qn(e) : e;
  return Er(n) ? t.filter(function(o) {
    return Er(o) && wu(o, n) && Rt(o) !== "body";
  }) : [];
}
function hh(e, t, r, n) {
  var o = t === "clippingParents" ? ph(e) : [].concat(t), a = [].concat(o, [r]), s = a[0], i = a.reduce(function(l, c) {
    var u = Gi(e, c, n);
    return l.top = Sr(u.top, l.top), l.right = Io(u.right, l.right), l.bottom = Io(u.bottom, l.bottom), l.left = Sr(u.left, l.left), l;
  }, Gi(e, s, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Cu(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Nt(n) : null, a = n ? nn(n) : null, s = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case at:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case _t:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Dt:
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
  var c = o ? Es(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case en:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Hn:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function jn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, i = r.boundary, l = i === void 0 ? Yp : i, c = r.rootBoundary, u = c === void 0 ? gu : c, f = r.elementContext, d = f === void 0 ? _n : f, h = r.altBoundary, g = h === void 0 ? !1 : h, b = r.padding, A = b === void 0 ? 0 : b, y = Du(typeof A != "number" ? A : Au(A, Kn)), H = d === _n ? Np : _n, R = e.rects.popper, I = e.elements[g ? H : d], C = hh(Er(I) ? I : I.contextElement || pr(e.elements.popper), l, u, s), Q = rn(e.elements.reference), j = Cu({
    reference: Q,
    element: R,
    strategy: "absolute",
    placement: o
  }), x = Va(Object.assign({}, R, j)), F = d === _n ? x : Q, B = {
    top: C.top - F.top + y.top,
    bottom: F.bottom - C.bottom + y.bottom,
    left: C.left - F.left + y.left,
    right: F.right - C.right + y.right
  }, V = e.modifiersData.offset;
  if (d === _n && V) {
    var _ = V[o];
    Object.keys(B).forEach(function(L) {
      var ne = [Dt, _t].indexOf(L) >= 0 ? 1 : -1, K = [at, _t].indexOf(L) >= 0 ? "y" : "x";
      B[L] += _[K] * ne;
    });
  }
  return B;
}
function mh(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, s = r.padding, i = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? yu : l, u = nn(n), f = u ? i ? Hi : Hi.filter(function(g) {
    return nn(g) === u;
  }) : Kn, d = f.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  d.length === 0 && (d = f);
  var h = d.reduce(function(g, b) {
    return g[b] = jn(e, {
      placement: b,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[Nt(b)], g;
  }, {});
  return Object.keys(h).sort(function(g, b) {
    return h[g] - h[b];
  });
}
function gh(e) {
  if (Nt(e) === ks)
    return [];
  var t = go(e);
  return [zi(e), t, zi(t)];
}
function yh(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !0 : s, l = r.fallbackPlacements, c = r.padding, u = r.boundary, f = r.rootBoundary, d = r.altBoundary, h = r.flipVariations, g = h === void 0 ? !0 : h, b = r.allowedAutoPlacements, A = t.options.placement, y = Nt(A), H = y === A, R = l || (H || !g ? [go(A)] : gh(A)), I = [A].concat(R).reduce(function(ge, Ee) {
      return ge.concat(Nt(Ee) === ks ? mh(t, {
        placement: Ee,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: g,
        allowedAutoPlacements: b
      }) : Ee);
    }, []), C = t.rects.reference, Q = t.rects.popper, j = /* @__PURE__ */ new Map(), x = !0, F = I[0], B = 0; B < I.length; B++) {
      var V = I[B], _ = Nt(V), L = nn(V) === en, ne = [at, _t].indexOf(_) >= 0, K = ne ? "width" : "height", ee = jn(t, {
        placement: V,
        boundary: u,
        rootBoundary: f,
        altBoundary: d,
        padding: c
      }), re = ne ? L ? Dt : st : L ? _t : at;
      C[K] > Q[K] && (re = go(re));
      var ae = go(re), he = [];
      if (a && he.push(ee[_] <= 0), i && he.push(ee[re] <= 0, ee[ae] <= 0), he.every(function(ge) {
        return ge;
      })) {
        F = V, x = !1;
        break;
      }
      j.set(V, he);
    }
    if (x)
      for (var P = g ? 3 : 1, de = function(Ee) {
        var De = I.find(function(Me) {
          var Ne = j.get(Me);
          if (Ne)
            return Ne.slice(0, Ee).every(function(Re) {
              return Re;
            });
        });
        if (De)
          return F = De, "break";
      }, q = P; q > 0; q--) {
        var Ie = de(q);
        if (Ie === "break")
          break;
      }
    t.placement !== F && (t.modifiersData[n]._skip = !0, t.placement = F, t.reset = !0);
  }
}
const bh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Vi(e, t, r) {
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
  return [at, Dt, _t, st].some(function(t) {
    return e[t] >= 0;
  });
}
function wh(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = jn(t, {
    elementContext: "reference"
  }), i = jn(t, {
    altBoundary: !0
  }), l = Vi(s, n), c = Vi(i, o, a), u = Ki(l), f = Ki(c);
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
const _h = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: wh
};
function Dh(e, t, r) {
  var n = Nt(e), o = [st, at].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [st, Dt].indexOf(n) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function Ah(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, s = yu.reduce(function(u, f) {
    return u[f] = Dh(f, t.rects, a), u;
  }, {}), i = s[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = s;
}
const xh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ah
};
function Ch(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Cu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Mh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ch,
  data: {}
};
function Oh(e) {
  return e === "x" ? "y" : "x";
}
function kh(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !1 : s, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, f = r.padding, d = r.tether, h = d === void 0 ? !0 : d, g = r.tetherOffset, b = g === void 0 ? 0 : g, A = jn(t, {
    boundary: l,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), y = Nt(t.placement), H = nn(t.placement), R = !H, I = Es(y), C = Oh(I), Q = t.modifiersData.popperOffsets, j = t.rects.reference, x = t.rects.popper, F = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, B = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), V = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, _ = {
    x: 0,
    y: 0
  };
  if (Q) {
    if (a) {
      var L, ne = I === "y" ? at : st, K = I === "y" ? _t : Dt, ee = I === "y" ? "height" : "width", re = Q[I], ae = re + A[ne], he = re - A[K], P = h ? -x[ee] / 2 : 0, de = H === en ? j[ee] : x[ee], q = H === en ? -x[ee] : -j[ee], Ie = t.elements.arrow, ge = h && Ie ? Ss(Ie) : {
        width: 0,
        height: 0
      }, Ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : _u(), De = Ee[ne], Me = Ee[K], Ne = Yn(0, j[ee], ge[ee]), Re = R ? j[ee] / 2 - P - Ne - De - B.mainAxis : de - Ne - De - B.mainAxis, lt = R ? -j[ee] / 2 + P + Ne + Me + B.mainAxis : q + Ne + Me + B.mainAxis, Ze = t.elements.arrow && Qn(t.elements.arrow), v = Ze ? I === "y" ? Ze.clientTop || 0 : Ze.clientLeft || 0 : 0, m = (L = V == null ? void 0 : V[I]) != null ? L : 0, w = re + Re - m - v, O = re + lt - m, M = Yn(h ? Io(ae, w) : ae, re, h ? Sr(he, O) : he);
      Q[I] = M, _[I] = M - re;
    }
    if (i) {
      var Y, U = I === "x" ? at : st, $ = I === "x" ? _t : Dt, N = Q[C], S = C === "y" ? "height" : "width", W = N + A[U], X = N - A[$], Z = [at, st].indexOf(y) !== -1, se = (Y = V == null ? void 0 : V[C]) != null ? Y : 0, ce = Z ? W : N - j[S] - x[S] - se + B.altAxis, ve = Z ? N + j[S] + x[S] - se - B.altAxis : X, ye = h && Z ? Jp(ce, N, ve) : Yn(h ? ce : W, N, h ? ve : X);
      Q[C] = ye, _[C] = ye - N;
    }
    t.modifiersData[n] = _;
  }
}
const Ih = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: kh,
  requiresIfExists: ["offset"]
};
function Sh(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Eh(e) {
  return e === dt(e) || !bt(e) ? Ts(e) : Sh(e);
}
function Th(e) {
  var t = e.getBoundingClientRect(), r = tn(t.width) / e.offsetWidth || 1, n = tn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ph(e, t, r) {
  r === void 0 && (r = !1);
  var n = bt(t), o = bt(t) && Th(t), a = pr(t), s = rn(e, o, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Rt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  $s(a)) && (i = Eh(t)), bt(t) ? (l = rn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Ps(a))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function $h(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!r.has(i)) {
        var l = t.get(i);
        l && o(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function Yh(e) {
  var t = $h(e);
  return Gp.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Nh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Rh(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Qi = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function qi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Lh(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? Qi : o;
  return function(i, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Qi, a),
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
        var H = typeof y == "function" ? y(u.options) : y;
        b(), u.options = Object.assign({}, a, u.options, H), u.scrollParents = {
          reference: Er(i) ? Nn(i) : i.contextElement ? Nn(i.contextElement) : [],
          popper: Nn(l)
        };
        var R = Yh(Rh([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = R.filter(function(I) {
          return I.enabled;
        }), g(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var y = u.elements, H = y.reference, R = y.popper;
          if (qi(H, R)) {
            u.rects = {
              reference: Ph(H, Qn(R), u.options.strategy === "fixed"),
              popper: Ss(R)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(B) {
              return u.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var I = 0; I < u.orderedModifiers.length; I++) {
              if (u.reset === !0) {
                u.reset = !1, I = -1;
                continue;
              }
              var C = u.orderedModifiers[I], Q = C.fn, j = C.options, x = j === void 0 ? {} : j, F = C.name;
              typeof Q == "function" && (u = Q({
                state: u,
                options: x,
                name: F,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Nh(function() {
        return new Promise(function(A) {
          h.forceUpdate(), A(u);
        });
      }),
      destroy: function() {
        b(), d = !0;
      }
    };
    if (!qi(i, l))
      return h;
    h.setOptions(c).then(function(A) {
      !d && c.onFirstUpdate && c.onFirstUpdate(A);
    });
    function g() {
      u.orderedModifiers.forEach(function(A) {
        var y = A.name, H = A.options, R = H === void 0 ? {} : H, I = A.effect;
        if (typeof I == "function") {
          var C = I({
            state: u,
            name: y,
            instance: h,
            options: R
          }), Q = function() {
          };
          f.push(C || Q);
        }
      });
    }
    function b() {
      f.forEach(function(A) {
        return A();
      }), f = [];
    }
    return h;
  };
}
var Fh = [lh, Mh, sh, Qp, xh, bh, Ih, rh, _h], Bh = /* @__PURE__ */ Lh({
  defaultModifiers: Fh
}), Uh = Object.defineProperty, Hh = (e, t, r) => t in e ? Uh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, te = (e, t, r) => (Hh(e, typeof t != "symbol" ? t + "" : t, r), r), io = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jh = Object.prototype, Wh = jh.hasOwnProperty;
function zh(e, t) {
  return e != null && Wh.call(e, t);
}
var Gh = zh, Vh = Array.isArray, Mt = Vh, Kh = typeof io == "object" && io && io.Object === Object && io, Ou = Kh, Qh = Ou, qh = typeof self == "object" && self && self.Object === Object && self, Zh = Qh || qh || Function("return this")(), Lt = Zh, Jh = Lt, Xh = Jh.Symbol, ra = Xh, Zi = ra, ku = Object.prototype, em = ku.hasOwnProperty, tm = ku.toString, Dn = Zi ? Zi.toStringTag : void 0;
function rm(e) {
  var t = em.call(e, Dn), r = e[Dn];
  try {
    e[Dn] = void 0;
    var n = !0;
  } catch {
  }
  var o = tm.call(e);
  return n && (t ? e[Dn] = r : delete e[Dn]), o;
}
var nm = rm, om = Object.prototype, am = om.toString;
function sm(e) {
  return am.call(e);
}
var im = sm, Ji = ra, lm = nm, cm = im, um = "[object Null]", fm = "[object Undefined]", Xi = Ji ? Ji.toStringTag : void 0;
function dm(e) {
  return e == null ? e === void 0 ? fm : um : Xi && Xi in Object(e) ? lm(e) : cm(e);
}
var Ft = dm;
function vm(e) {
  return e != null && typeof e == "object";
}
var Ot = vm, pm = Ft, hm = Ot, mm = "[object Symbol]";
function gm(e) {
  return typeof e == "symbol" || hm(e) && pm(e) == mm;
}
var Ys = gm, ym = Mt, bm = Ys, wm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _m = /^\w*$/;
function Dm(e, t) {
  if (ym(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || bm(e) ? !0 : _m.test(e) || !wm.test(e) || t != null && e in Object(t);
}
var Ns = Dm;
function Am(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Jt = Am, xm = Ft, Cm = Jt, Mm = "[object AsyncFunction]", Om = "[object Function]", km = "[object GeneratorFunction]", Im = "[object Proxy]";
function Sm(e) {
  if (!Cm(e))
    return !1;
  var t = xm(e);
  return t == Om || t == km || t == Mm || t == Im;
}
var Rr = Sm, Em = Lt, Tm = Em["__core-js_shared__"], Pm = Tm, Da = Pm, el = function() {
  var e = /[^.]+$/.exec(Da && Da.keys && Da.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $m(e) {
  return !!el && el in e;
}
var Ym = $m, Nm = Function.prototype, Rm = Nm.toString;
function Lm(e) {
  if (e != null) {
    try {
      return Rm.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Iu = Lm, Fm = Rr, Bm = Ym, Um = Jt, Hm = Iu, jm = /[\\^$.*+?()[\]{}|]/g, Wm = /^\[object .+?Constructor\]$/, zm = Function.prototype, Gm = Object.prototype, Vm = zm.toString, Km = Gm.hasOwnProperty, Qm = RegExp(
  "^" + Vm.call(Km).replace(jm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qm(e) {
  if (!Um(e) || Bm(e))
    return !1;
  var t = Fm(e) ? Qm : Wm;
  return t.test(Hm(e));
}
var Zm = qm;
function Jm(e, t) {
  return e == null ? void 0 : e[t];
}
var Xm = Jm, eg = Zm, tg = Xm;
function rg(e, t) {
  var r = tg(e, t);
  return eg(r) ? r : void 0;
}
var Lr = rg, ng = Lr, og = ng(Object, "create"), na = og, tl = na;
function ag() {
  this.__data__ = tl ? tl(null) : {}, this.size = 0;
}
var sg = ag;
function ig(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var lg = ig, cg = na, ug = "__lodash_hash_undefined__", fg = Object.prototype, dg = fg.hasOwnProperty;
function vg(e) {
  var t = this.__data__;
  if (cg) {
    var r = t[e];
    return r === ug ? void 0 : r;
  }
  return dg.call(t, e) ? t[e] : void 0;
}
var pg = vg, hg = na, mg = Object.prototype, gg = mg.hasOwnProperty;
function yg(e) {
  var t = this.__data__;
  return hg ? t[e] !== void 0 : gg.call(t, e);
}
var bg = yg, wg = na, _g = "__lodash_hash_undefined__";
function Dg(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = wg && t === void 0 ? _g : t, this;
}
var Ag = Dg, xg = sg, Cg = lg, Mg = pg, Og = bg, kg = Ag;
function cn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
cn.prototype.clear = xg;
cn.prototype.delete = Cg;
cn.prototype.get = Mg;
cn.prototype.has = Og;
cn.prototype.set = kg;
var Ig = cn;
function Sg() {
  this.__data__ = [], this.size = 0;
}
var Eg = Sg;
function Tg(e, t) {
  return e === t || e !== e && t !== t;
}
var un = Tg, Pg = un;
function $g(e, t) {
  for (var r = e.length; r--; )
    if (Pg(e[r][0], t))
      return r;
  return -1;
}
var oa = $g, Yg = oa, Ng = Array.prototype, Rg = Ng.splice;
function Lg(e) {
  var t = this.__data__, r = Yg(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Rg.call(t, r, 1), --this.size, !0;
}
var Fg = Lg, Bg = oa;
function Ug(e) {
  var t = this.__data__, r = Bg(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Hg = Ug, jg = oa;
function Wg(e) {
  return jg(this.__data__, e) > -1;
}
var zg = Wg, Gg = oa;
function Vg(e, t) {
  var r = this.__data__, n = Gg(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Kg = Vg, Qg = Eg, qg = Fg, Zg = Hg, Jg = zg, Xg = Kg;
function fn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fn.prototype.clear = Qg;
fn.prototype.delete = qg;
fn.prototype.get = Zg;
fn.prototype.has = Jg;
fn.prototype.set = Xg;
var aa = fn, ey = Lr, ty = Lt, ry = ey(ty, "Map"), Rs = ry, rl = Ig, ny = aa, oy = Rs;
function ay() {
  this.size = 0, this.__data__ = {
    hash: new rl(),
    map: new (oy || ny)(),
    string: new rl()
  };
}
var sy = ay;
function iy(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var ly = iy, cy = ly;
function uy(e, t) {
  var r = e.__data__;
  return cy(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var sa = uy, fy = sa;
function dy(e) {
  var t = fy(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var vy = dy, py = sa;
function hy(e) {
  return py(this, e).get(e);
}
var my = hy, gy = sa;
function yy(e) {
  return gy(this, e).has(e);
}
var by = yy, wy = sa;
function _y(e, t) {
  var r = wy(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Dy = _y, Ay = sy, xy = vy, Cy = my, My = by, Oy = Dy;
function dn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
dn.prototype.clear = Ay;
dn.prototype.delete = xy;
dn.prototype.get = Cy;
dn.prototype.has = My;
dn.prototype.set = Oy;
var Ls = dn, Su = Ls, ky = "Expected a function";
function Fs(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ky);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, n);
    return r.cache = a.set(o, s) || a, s;
  };
  return r.cache = new (Fs.Cache || Su)(), r;
}
Fs.Cache = Su;
var Iy = Fs, Sy = Iy, Ey = 500;
function Ty(e) {
  var t = Sy(e, function(n) {
    return r.size === Ey && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Py = Ty, $y = Py, Yy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ny = /\\(\\)?/g, Ry = $y(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Yy, function(r, n, o, a) {
    t.push(o ? a.replace(Ny, "$1") : n || r);
  }), t;
}), Ly = Ry;
function Fy(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var By = Fy, nl = ra, Uy = By, Hy = Mt, jy = Ys, Wy = 1 / 0, ol = nl ? nl.prototype : void 0, al = ol ? ol.toString : void 0;
function Eu(e) {
  if (typeof e == "string")
    return e;
  if (Hy(e))
    return Uy(e, Eu) + "";
  if (jy(e))
    return al ? al.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Wy ? "-0" : t;
}
var zy = Eu, Gy = zy;
function Vy(e) {
  return e == null ? "" : Gy(e);
}
var Ky = Vy, Qy = Mt, qy = Ns, Zy = Ly, Jy = Ky;
function Xy(e, t) {
  return Qy(e) ? e : qy(e, t) ? [e] : Zy(Jy(e));
}
var Tu = Xy, eb = Ft, tb = Ot, rb = "[object Arguments]";
function nb(e) {
  return tb(e) && eb(e) == rb;
}
var ob = nb, sl = ob, ab = Ot, Pu = Object.prototype, sb = Pu.hasOwnProperty, ib = Pu.propertyIsEnumerable, lb = sl(/* @__PURE__ */ function() {
  return arguments;
}()) ? sl : function(e) {
  return ab(e) && sb.call(e, "callee") && !ib.call(e, "callee");
}, Bs = lb, cb = 9007199254740991, ub = /^(?:0|[1-9]\d*)$/;
function fb(e, t) {
  var r = typeof e;
  return t = t ?? cb, !!t && (r == "number" || r != "symbol" && ub.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Us = fb, db = 9007199254740991;
function vb(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= db;
}
var Hs = vb, pb = Ys, hb = 1 / 0;
function mb(e) {
  if (typeof e == "string" || pb(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -hb ? "-0" : t;
}
var ia = mb, gb = Tu, yb = Bs, bb = Mt, wb = Us, _b = Hs, Db = ia;
function Ab(e, t, r) {
  t = gb(t, e);
  for (var n = -1, o = t.length, a = !1; ++n < o; ) {
    var s = Db(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != o ? a : (o = e == null ? 0 : e.length, !!o && _b(o) && wb(s, o) && (bb(e) || yb(e)));
}
var $u = Ab, xb = Gh, Cb = $u;
function Mb(e, t) {
  return e != null && Cb(e, t, xb);
}
var Yu = Mb, Ob = Ft, kb = Ot, Ib = "[object Date]";
function Sb(e) {
  return kb(e) && Ob(e) == Ib;
}
var Eb = Sb;
function Tb(e) {
  return function(t) {
    return e(t);
  };
}
var Nu = Tb, Wn = {}, Pb = {
  get exports() {
    return Wn;
  },
  set exports(e) {
    Wn = e;
  }
};
(function(e, t) {
  var r = Ou, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, s = a && r.process, i = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Pb, Wn);
var $b = Eb, Yb = Nu, il = Wn, ll = il && il.isDate, Nb = ll ? Yb(ll) : $b, Rb = Nb, Lb = Ft, Fb = Mt, Bb = Ot, Ub = "[object String]";
function Hb(e) {
  return typeof e == "string" || !Fb(e) && Bb(e) && Lb(e) == Ub;
}
var $t = Hb;
function jb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Ru = jb, Wb = aa;
function zb() {
  this.__data__ = new Wb(), this.size = 0;
}
var Gb = zb;
function Vb(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Kb = Vb;
function Qb(e) {
  return this.__data__.get(e);
}
var qb = Qb;
function Zb(e) {
  return this.__data__.has(e);
}
var Jb = Zb, Xb = aa, e0 = Rs, t0 = Ls, r0 = 200;
function n0(e, t) {
  var r = this.__data__;
  if (r instanceof Xb) {
    var n = r.__data__;
    if (!e0 || n.length < r0 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new t0(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var o0 = n0, a0 = aa, s0 = Gb, i0 = Kb, l0 = qb, c0 = Jb, u0 = o0;
function vn(e) {
  var t = this.__data__ = new a0(e);
  this.size = t.size;
}
vn.prototype.clear = s0;
vn.prototype.delete = i0;
vn.prototype.get = l0;
vn.prototype.has = c0;
vn.prototype.set = u0;
var js = vn, f0 = "__lodash_hash_undefined__";
function d0(e) {
  return this.__data__.set(e, f0), this;
}
var v0 = d0;
function p0(e) {
  return this.__data__.has(e);
}
var h0 = p0, m0 = Ls, g0 = v0, y0 = h0;
function So(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new m0(); ++t < r; )
    this.add(e[t]);
}
So.prototype.add = So.prototype.push = g0;
So.prototype.has = y0;
var b0 = So;
function w0(e, t) {
  return e.has(t);
}
var _0 = w0, D0 = b0, A0 = Ru, x0 = _0, C0 = 1, M0 = 2;
function O0(e, t, r, n, o, a) {
  var s = r & C0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var c = a.get(e), u = a.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, h = r & M0 ? new D0() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < i; ) {
    var g = e[f], b = t[f];
    if (n)
      var A = s ? n(b, g, f, t, e, a) : n(g, b, f, e, t, a);
    if (A !== void 0) {
      if (A)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!A0(t, function(y, H) {
        if (!x0(h, H) && (g === y || o(g, y, r, n, a)))
          return h.push(H);
      })) {
        d = !1;
        break;
      }
    } else if (!(g === b || o(g, b, r, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
var Lu = O0, k0 = Lt, I0 = k0.Uint8Array, Fu = I0;
function S0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}
var E0 = S0;
function T0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var P0 = T0, cl = ra, ul = Fu, $0 = un, Y0 = Lu, N0 = E0, R0 = P0, L0 = 1, F0 = 2, B0 = "[object Boolean]", U0 = "[object Date]", H0 = "[object Error]", j0 = "[object Map]", W0 = "[object Number]", z0 = "[object RegExp]", G0 = "[object Set]", V0 = "[object String]", K0 = "[object Symbol]", Q0 = "[object ArrayBuffer]", q0 = "[object DataView]", fl = cl ? cl.prototype : void 0, Aa = fl ? fl.valueOf : void 0;
function Z0(e, t, r, n, o, a, s) {
  switch (r) {
    case q0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Q0:
      return !(e.byteLength != t.byteLength || !a(new ul(e), new ul(t)));
    case B0:
    case U0:
    case W0:
      return $0(+e, +t);
    case H0:
      return e.name == t.name && e.message == t.message;
    case z0:
    case V0:
      return e == t + "";
    case j0:
      var i = N0;
    case G0:
      var l = n & L0;
      if (i || (i = R0), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= F0, s.set(e, t);
      var u = Y0(i(e), i(t), n, o, a, s);
      return s.delete(e), u;
    case K0:
      if (Aa)
        return Aa.call(e) == Aa.call(t);
  }
  return !1;
}
var J0 = Z0;
function X0(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var ew = X0, tw = ew, rw = Mt;
function nw(e, t, r) {
  var n = t(e);
  return rw(e) ? n : tw(n, r(e));
}
var ow = nw;
function aw(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[o++] = s);
  }
  return a;
}
var sw = aw;
function iw() {
  return [];
}
var lw = iw, cw = sw, uw = lw, fw = Object.prototype, dw = fw.propertyIsEnumerable, dl = Object.getOwnPropertySymbols, vw = dl ? function(e) {
  return e == null ? [] : (e = Object(e), cw(dl(e), function(t) {
    return dw.call(e, t);
  }));
} : uw, pw = vw;
function hw(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var mw = hw, on = {}, gw = {
  get exports() {
    return on;
  },
  set exports(e) {
    on = e;
  }
};
function yw() {
  return !1;
}
var bw = yw;
(function(e, t) {
  var r = Lt, n = bw, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, s = a && a.exports === o, i = s ? r.Buffer : void 0, l = i ? i.isBuffer : void 0, c = l || n;
  e.exports = c;
})(gw, on);
var ww = Ft, _w = Hs, Dw = Ot, Aw = "[object Arguments]", xw = "[object Array]", Cw = "[object Boolean]", Mw = "[object Date]", Ow = "[object Error]", kw = "[object Function]", Iw = "[object Map]", Sw = "[object Number]", Ew = "[object Object]", Tw = "[object RegExp]", Pw = "[object Set]", $w = "[object String]", Yw = "[object WeakMap]", Nw = "[object ArrayBuffer]", Rw = "[object DataView]", Lw = "[object Float32Array]", Fw = "[object Float64Array]", Bw = "[object Int8Array]", Uw = "[object Int16Array]", Hw = "[object Int32Array]", jw = "[object Uint8Array]", Ww = "[object Uint8ClampedArray]", zw = "[object Uint16Array]", Gw = "[object Uint32Array]", Oe = {};
Oe[Lw] = Oe[Fw] = Oe[Bw] = Oe[Uw] = Oe[Hw] = Oe[jw] = Oe[Ww] = Oe[zw] = Oe[Gw] = !0;
Oe[Aw] = Oe[xw] = Oe[Nw] = Oe[Cw] = Oe[Rw] = Oe[Mw] = Oe[Ow] = Oe[kw] = Oe[Iw] = Oe[Sw] = Oe[Ew] = Oe[Tw] = Oe[Pw] = Oe[$w] = Oe[Yw] = !1;
function Vw(e) {
  return Dw(e) && _w(e.length) && !!Oe[ww(e)];
}
var Kw = Vw, Qw = Kw, qw = Nu, vl = Wn, pl = vl && vl.isTypedArray, Zw = pl ? qw(pl) : Qw, Ws = Zw, Jw = mw, Xw = Bs, e1 = Mt, t1 = on, r1 = Us, n1 = Ws, o1 = Object.prototype, a1 = o1.hasOwnProperty;
function s1(e, t) {
  var r = e1(e), n = !r && Xw(e), o = !r && !n && t1(e), a = !r && !n && !o && n1(e), s = r || n || o || a, i = s ? Jw(e.length, String) : [], l = i.length;
  for (var c in e)
    (t || a1.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    r1(c, l))) && i.push(c);
  return i;
}
var Bu = s1, i1 = Object.prototype;
function l1(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || i1;
  return e === r;
}
var zs = l1;
function c1(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Uu = c1, u1 = Uu, f1 = u1(Object.keys, Object), d1 = f1, v1 = zs, p1 = d1, h1 = Object.prototype, m1 = h1.hasOwnProperty;
function g1(e) {
  if (!v1(e))
    return p1(e);
  var t = [];
  for (var r in Object(e))
    m1.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var y1 = g1, b1 = Rr, w1 = Hs;
function _1(e) {
  return e != null && w1(e.length) && !b1(e);
}
var qn = _1, D1 = Bu, A1 = y1, x1 = qn;
function C1(e) {
  return x1(e) ? D1(e) : A1(e);
}
var Gs = C1, M1 = ow, O1 = pw, k1 = Gs;
function I1(e) {
  return M1(e, k1, O1);
}
var S1 = I1, hl = S1, E1 = 1, T1 = Object.prototype, P1 = T1.hasOwnProperty;
function $1(e, t, r, n, o, a) {
  var s = r & E1, i = hl(e), l = i.length, c = hl(t), u = c.length;
  if (l != u && !s)
    return !1;
  for (var f = l; f--; ) {
    var d = i[f];
    if (!(s ? d in t : P1.call(t, d)))
      return !1;
  }
  var h = a.get(e), g = a.get(t);
  if (h && g)
    return h == t && g == e;
  var b = !0;
  a.set(e, t), a.set(t, e);
  for (var A = s; ++f < l; ) {
    d = i[f];
    var y = e[d], H = t[d];
    if (n)
      var R = s ? n(H, y, d, t, e, a) : n(y, H, d, e, t, a);
    if (!(R === void 0 ? y === H || o(y, H, r, n, a) : R)) {
      b = !1;
      break;
    }
    A || (A = d == "constructor");
  }
  if (b && !A) {
    var I = e.constructor, C = t.constructor;
    I != C && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof C == "function" && C instanceof C) && (b = !1);
  }
  return a.delete(e), a.delete(t), b;
}
var Y1 = $1, N1 = Lr, R1 = Lt, L1 = N1(R1, "DataView"), F1 = L1, B1 = Lr, U1 = Lt, H1 = B1(U1, "Promise"), j1 = H1, W1 = Lr, z1 = Lt, G1 = W1(z1, "Set"), V1 = G1, K1 = Lr, Q1 = Lt, q1 = K1(Q1, "WeakMap"), Z1 = q1, Ka = F1, Qa = Rs, qa = j1, Za = V1, Ja = Z1, Hu = Ft, pn = Iu, ml = "[object Map]", J1 = "[object Object]", gl = "[object Promise]", yl = "[object Set]", bl = "[object WeakMap]", wl = "[object DataView]", X1 = pn(Ka), e_ = pn(Qa), t_ = pn(qa), r_ = pn(Za), n_ = pn(Ja), _r = Hu;
(Ka && _r(new Ka(new ArrayBuffer(1))) != wl || Qa && _r(new Qa()) != ml || qa && _r(qa.resolve()) != gl || Za && _r(new Za()) != yl || Ja && _r(new Ja()) != bl) && (_r = function(e) {
  var t = Hu(e), r = t == J1 ? e.constructor : void 0, n = r ? pn(r) : "";
  if (n)
    switch (n) {
      case X1:
        return wl;
      case e_:
        return ml;
      case t_:
        return gl;
      case r_:
        return yl;
      case n_:
        return bl;
    }
  return t;
});
var o_ = _r, xa = js, a_ = Lu, s_ = J0, i_ = Y1, _l = o_, Dl = Mt, Al = on, l_ = Ws, c_ = 1, xl = "[object Arguments]", Cl = "[object Array]", lo = "[object Object]", u_ = Object.prototype, Ml = u_.hasOwnProperty;
function f_(e, t, r, n, o, a) {
  var s = Dl(e), i = Dl(t), l = s ? Cl : _l(e), c = i ? Cl : _l(t);
  l = l == xl ? lo : l, c = c == xl ? lo : c;
  var u = l == lo, f = c == lo, d = l == c;
  if (d && Al(e)) {
    if (!Al(t))
      return !1;
    s = !0, u = !1;
  }
  if (d && !u)
    return a || (a = new xa()), s || l_(e) ? a_(e, t, r, n, o, a) : s_(e, t, l, r, n, o, a);
  if (!(r & c_)) {
    var h = u && Ml.call(e, "__wrapped__"), g = f && Ml.call(t, "__wrapped__");
    if (h || g) {
      var b = h ? e.value() : e, A = g ? t.value() : t;
      return a || (a = new xa()), o(b, A, r, n, a);
    }
  }
  return d ? (a || (a = new xa()), i_(e, t, r, n, o, a)) : !1;
}
var d_ = f_, v_ = d_, Ol = Ot;
function ju(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !Ol(e) && !Ol(t) ? e !== e && t !== t : v_(e, t, r, n, ju, o);
}
var Wu = ju, p_ = js, h_ = Wu, m_ = 1, g_ = 2;
function y_(e, t, r, n) {
  var o = r.length, a = o, s = !n;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var i = r[o];
    if (s && i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    i = r[o];
    var l = i[0], c = e[l], u = i[1];
    if (s && i[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var f = new p_();
      if (n)
        var d = n(c, u, l, e, t, f);
      if (!(d === void 0 ? h_(u, c, m_ | g_, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var b_ = y_, w_ = Jt;
function __(e) {
  return e === e && !w_(e);
}
var zu = __, D_ = zu, A_ = Gs;
function x_(e) {
  for (var t = A_(e), r = t.length; r--; ) {
    var n = t[r], o = e[n];
    t[r] = [n, o, D_(o)];
  }
  return t;
}
var C_ = x_;
function M_(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Gu = M_, O_ = b_, k_ = C_, I_ = Gu;
function S_(e) {
  var t = k_(e);
  return t.length == 1 && t[0][2] ? I_(t[0][0], t[0][1]) : function(r) {
    return r === e || O_(r, e, t);
  };
}
var E_ = S_, T_ = Tu, P_ = ia;
function $_(e, t) {
  t = T_(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[P_(t[r++])];
  return r && r == n ? e : void 0;
}
var Vu = $_, Y_ = Vu;
function N_(e, t, r) {
  var n = e == null ? void 0 : Y_(e, t);
  return n === void 0 ? r : n;
}
var Cr = N_;
function R_(e, t) {
  return e != null && t in Object(e);
}
var L_ = R_, F_ = L_, B_ = $u;
function U_(e, t) {
  return e != null && B_(e, t, F_);
}
var H_ = U_, j_ = Wu, W_ = Cr, z_ = H_, G_ = Ns, V_ = zu, K_ = Gu, Q_ = ia, q_ = 1, Z_ = 2;
function J_(e, t) {
  return G_(e) && V_(t) ? K_(Q_(e), t) : function(r) {
    var n = W_(r, e);
    return n === void 0 && n === t ? z_(r, e) : j_(t, n, q_ | Z_);
  };
}
var X_ = J_;
function eD(e) {
  return e;
}
var Vs = eD;
function tD(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var rD = tD, nD = Vu;
function oD(e) {
  return function(t) {
    return nD(t, e);
  };
}
var aD = oD, sD = rD, iD = aD, lD = Ns, cD = ia;
function uD(e) {
  return lD(e) ? sD(cD(e)) : iD(e);
}
var fD = uD, dD = E_, vD = X_, pD = Vs, hD = Mt, mD = fD;
function gD(e) {
  return typeof e == "function" ? e : e == null ? pD : typeof e == "object" ? hD(e) ? vD(e[0], e[1]) : dD(e) : mD(e);
}
var Ku = gD;
function yD(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), s = n(t), i = s.length; i--; ) {
      var l = s[e ? i : ++o];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var bD = yD, wD = bD, _D = wD(), Qu = _D, DD = Qu, AD = Gs;
function xD(e, t) {
  return e && DD(e, t, AD);
}
var qu = xD, CD = qn;
function MD(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!CD(r))
      return e(r, n);
    for (var o = r.length, a = t ? o : -1, s = Object(r); (t ? a-- : ++a < o) && n(s[a], a, s) !== !1; )
      ;
    return r;
  };
}
var OD = MD, kD = qu, ID = OD, SD = ID(kD), ED = SD, TD = ED;
function PD(e, t) {
  var r;
  return TD(e, function(n, o, a) {
    return r = t(n, o, a), !r;
  }), !!r;
}
var $D = PD, YD = un, ND = qn, RD = Us, LD = Jt;
function FD(e, t, r) {
  if (!LD(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? ND(r) && RD(t, r.length) : n == "string" && t in r) ? YD(r[t], e) : !1;
}
var Ks = FD, BD = Ru, UD = Ku, HD = $D, jD = Mt, WD = Ks;
function zD(e, t, r) {
  var n = jD(e) ? BD : HD;
  return r && WD(e, t, r) && (t = void 0), n(e, UD(t));
}
var GD = zD, VD = Ft, KD = Ot, QD = "[object Boolean]";
function qD(e) {
  return e === !0 || e === !1 || KD(e) && VD(e) == QD;
}
var ZD = qD, JD = Ft, XD = Ot, eA = "[object Number]";
function tA(e) {
  return typeof e == "number" || XD(e) && JD(e) == eA;
}
var Ct = tA, rA = Lr, nA = function() {
  try {
    var e = rA(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Zu = nA, kl = Zu;
function oA(e, t, r) {
  t == "__proto__" && kl ? kl(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var la = oA, aA = la, sA = un, iA = Object.prototype, lA = iA.hasOwnProperty;
function cA(e, t, r) {
  var n = e[t];
  (!(lA.call(e, t) && sA(n, r)) || r === void 0 && !(t in e)) && aA(e, t, r);
}
var uA = cA, fA = la, dA = qu, vA = Ku;
function pA(e, t) {
  var r = {};
  return t = vA(t), dA(e, function(n, o, a) {
    fA(r, o, t(n, o, a));
  }), r;
}
var hA = pA;
function mA(e, t, r) {
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
var Ju = mA, gA = Ju, Il = Math.max;
function yA(e, t, r) {
  return t = Il(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = Il(n.length - t, 0), s = Array(a); ++o < a; )
      s[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(s), gA(e, this, i);
  };
}
var bA = yA;
function wA(e) {
  return function() {
    return e;
  };
}
var _A = wA, DA = _A, Sl = Zu, AA = Vs, xA = Sl ? function(e, t) {
  return Sl(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: DA(t),
    writable: !0
  });
} : AA, CA = xA, MA = 800, OA = 16, kA = Date.now;
function IA(e) {
  var t = 0, r = 0;
  return function() {
    var n = kA(), o = OA - (n - r);
    if (r = n, o > 0) {
      if (++t >= MA)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var SA = IA, EA = CA, TA = SA, PA = TA(EA), $A = PA, YA = Vs, NA = bA, RA = $A;
function LA(e, t) {
  return RA(NA(e, t, YA), e + "");
}
var Qs = LA;
function FA(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var BA = FA, UA = Jt, HA = zs, jA = BA, WA = Object.prototype, zA = WA.hasOwnProperty;
function GA(e) {
  if (!UA(e))
    return jA(e);
  var t = HA(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !zA.call(e, n)) || r.push(n);
  return r;
}
var VA = GA, KA = Bu, QA = VA, qA = qn;
function ZA(e) {
  return qA(e) ? KA(e, !0) : QA(e);
}
var qs = ZA, JA = Qs, XA = un, ex = Ks, tx = qs, Xu = Object.prototype, rx = Xu.hasOwnProperty, nx = JA(function(e, t) {
  e = Object(e);
  var r = -1, n = t.length, o = n > 2 ? t[2] : void 0;
  for (o && ex(t[0], t[1], o) && (n = 1); ++r < n; )
    for (var a = t[r], s = tx(a), i = -1, l = s.length; ++i < l; ) {
      var c = s[i], u = e[c];
      (u === void 0 || XA(u, Xu[c]) && !rx.call(e, c)) && (e[c] = a[c]);
    }
  return e;
}), El = nx, ox = la, ax = un;
function sx(e, t, r) {
  (r !== void 0 && !ax(e[t], r) || r === void 0 && !(t in e)) && ox(e, t, r);
}
var ef = sx, Eo = {}, ix = {
  get exports() {
    return Eo;
  },
  set exports(e) {
    Eo = e;
  }
};
(function(e, t) {
  var r = Lt, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, s = a ? r.Buffer : void 0, i = s ? s.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var f = c.length, d = i ? i(f) : new c.constructor(f);
    return c.copy(d), d;
  }
  e.exports = l;
})(ix, Eo);
var Tl = Fu;
function lx(e) {
  var t = new e.constructor(e.byteLength);
  return new Tl(t).set(new Tl(e)), t;
}
var cx = lx, ux = cx;
function fx(e, t) {
  var r = t ? ux(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var dx = fx;
function vx(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var px = vx, hx = Jt, Pl = Object.create, mx = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!hx(t))
      return {};
    if (Pl)
      return Pl(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), gx = mx, yx = Uu, bx = yx(Object.getPrototypeOf, Object), tf = bx, wx = gx, _x = tf, Dx = zs;
function Ax(e) {
  return typeof e.constructor == "function" && !Dx(e) ? wx(_x(e)) : {};
}
var xx = Ax, Cx = qn, Mx = Ot;
function Ox(e) {
  return Mx(e) && Cx(e);
}
var kx = Ox, Ix = Ft, Sx = tf, Ex = Ot, Tx = "[object Object]", Px = Function.prototype, $x = Object.prototype, rf = Px.toString, Yx = $x.hasOwnProperty, Nx = rf.call(Object);
function Rx(e) {
  if (!Ex(e) || Ix(e) != Tx)
    return !1;
  var t = Sx(e);
  if (t === null)
    return !0;
  var r = Yx.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && rf.call(r) == Nx;
}
var Lx = Rx;
function Fx(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var nf = Fx, Bx = uA, Ux = la;
function Hx(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], l = n ? n(r[i], e[i], i, r, e) : void 0;
    l === void 0 && (l = e[i]), o ? Ux(r, i, l) : Bx(r, i, l);
  }
  return r;
}
var jx = Hx, Wx = jx, zx = qs;
function Gx(e) {
  return Wx(e, zx(e));
}
var Vx = Gx, $l = ef, Kx = Eo, Qx = dx, qx = px, Zx = xx, Yl = Bs, Nl = Mt, Jx = kx, Xx = on, eC = Rr, tC = Jt, rC = Lx, nC = Ws, Rl = nf, oC = Vx;
function aC(e, t, r, n, o, a, s) {
  var i = Rl(e, r), l = Rl(t, r), c = s.get(l);
  if (c) {
    $l(e, r, c);
    return;
  }
  var u = a ? a(i, l, r + "", e, t, s) : void 0, f = u === void 0;
  if (f) {
    var d = Nl(l), h = !d && Xx(l), g = !d && !h && nC(l);
    u = l, d || h || g ? Nl(i) ? u = i : Jx(i) ? u = qx(i) : h ? (f = !1, u = Kx(l, !0)) : g ? (f = !1, u = Qx(l, !0)) : u = [] : rC(l) || Yl(l) ? (u = i, Yl(i) ? u = oC(i) : (!tC(i) || eC(i)) && (u = Zx(l))) : f = !1;
  }
  f && (s.set(l, u), o(u, l, n, a, s), s.delete(l)), $l(e, r, u);
}
var sC = aC, iC = js, lC = ef, cC = Qu, uC = sC, fC = Jt, dC = qs, vC = nf;
function of(e, t, r, n, o) {
  e !== t && cC(t, function(a, s) {
    if (o || (o = new iC()), fC(a))
      uC(e, t, s, r, of, n, o);
    else {
      var i = n ? n(vC(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), lC(e, s, i);
    }
  }, dC);
}
var af = of, pC = af, Ll = Jt;
function sf(e, t, r, n, o, a) {
  return Ll(e) && Ll(t) && (a.set(t, e), pC(e, t, void 0, sf, a), a.delete(t)), e;
}
var hC = sf, mC = Qs, gC = Ks;
function yC(e) {
  return mC(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, s = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && gC(r[0], r[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var bC = yC, wC = af, _C = bC, DC = _C(function(e, t, r, n) {
  wC(e, t, r, n);
}), AC = DC, xC = Ju, CC = Qs, MC = hC, OC = AC, kC = CC(function(e) {
  return e.push(void 0, MC), xC(OC, void 0, e);
}), zn = kC;
function IC(e) {
  return e && e.length ? e[0] : void 0;
}
var lf = IC;
function SC(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var zr = SC;
const EC = (e) => Object.prototype.toString.call(e).slice(8, -1), qr = (e) => Rb(e) && !isNaN(e.getTime()), Qt = (e) => EC(e) === "Object", cf = Yu, Fl = (e, t) => GD(t, (r) => Yu(e, r)), _e = (e, t, r = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${r}${e}`;
  return e;
}, wt = (e) => Array.isArray(e), Ht = (e) => wt(e) && e.length > 0, To = (e) => e == null ? null : document && $t(e) ? document.querySelector(e) : e.$el ?? e, ir = (e, t, r, n = void 0) => {
  e.removeEventListener(t, r, n);
}, lr = (e, t, r, n = void 0) => (e.addEventListener(t, r, n), () => ir(e, t, r, n)), yo = (e, t) => !!e && !!t && (e === t || e.contains(t)), co = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, uf = (e, ...t) => {
  const r = {};
  let n;
  for (n in e)
    t.includes(n) || (r[n] = e[n]);
  return r;
}, ff = (e, t) => {
  const r = {};
  return t.forEach((n) => {
    n in e && (r[n] = e[n]);
  }), r;
};
function TC(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var Po = {}, PC = {
  get exports() {
    return Po;
  },
  set exports(e) {
    Po = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n) {
    if (n === null || n === !0 || n === !1)
      return NaN;
    var o = Number(n);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e.exports = t.default;
})(PC, Po);
const $C = /* @__PURE__ */ Mu(Po);
var $o = {}, YC = {
  get exports() {
    return $o;
  },
  set exports(e) {
    $o = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n) {
    var o = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
    return o.setUTCFullYear(n.getFullYear()), n.getTime() - o.getTime();
  }
  e.exports = t.default;
})(YC, $o);
const Bl = /* @__PURE__ */ Mu($o);
function NC(e, t) {
  var r = BC(t);
  return r.formatToParts ? LC(r, e) : FC(r, e);
}
var RC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function LC(e, t) {
  try {
    for (var r = e.formatToParts(t), n = [], o = 0; o < r.length; o++) {
      var a = RC[r[o].type];
      a >= 0 && (n[a] = parseInt(r[o].value, 10));
    }
    return n;
  } catch (s) {
    if (s instanceof RangeError)
      return [NaN];
    throw s;
  }
}
function FC(e, t) {
  var r = e.format(t).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);
  return [n[3], n[1], n[2], n[4], n[5], n[6]];
}
var Ca = {};
function BC(e) {
  if (!Ca[e]) {
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
    Ca[e] = r ? new Intl.DateTimeFormat("en-US", {
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
  return Ca[e];
}
function df(e, t, r, n, o, a, s) {
  var i = /* @__PURE__ */ new Date(0);
  return i.setUTCFullYear(e, t, r), i.setUTCHours(n, o, a, s), i;
}
var Ul = 36e5, UC = 6e4, Ma = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function HC(e, t, r) {
  var n, o;
  if (!e || (n = Ma.timezoneZ.exec(e), n))
    return 0;
  var a;
  if (n = Ma.timezoneHH.exec(e), n)
    return a = parseInt(n[1], 10), Hl(a) ? -(a * Ul) : NaN;
  if (n = Ma.timezoneHHMM.exec(e), n) {
    a = parseInt(n[1], 10);
    var s = parseInt(n[2], 10);
    return Hl(a, s) ? (o = Math.abs(a) * Ul + s * UC, a > 0 ? -o : o) : NaN;
  }
  if (zC(e)) {
    t = new Date(t || Date.now());
    var i = r ? t : jC(t), l = Xa(i, e), c = r ? l : WC(t, l, e);
    return -c;
  }
  return NaN;
}
function jC(e) {
  return df(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Xa(e, t) {
  var r = NC(e, t), n = df(
    r[0],
    r[1] - 1,
    r[2],
    r[3] % 24,
    r[4],
    r[5],
    0
  ).getTime(), o = e.getTime(), a = o % 1e3;
  return o -= a >= 0 ? a : 1e3 + a, n - o;
}
function WC(e, t, r) {
  var n = e.getTime(), o = n - t, a = Xa(new Date(o), r);
  if (t === a)
    return t;
  o -= a - t;
  var s = Xa(new Date(o), r);
  return a === s ? a : Math.max(a, s);
}
function Hl(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var jl = {};
function zC(e) {
  if (jl[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), jl[e] = !0, !0;
  } catch {
    return !1;
  }
}
var GC = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const VC = GC;
var Oa = 36e5, Wl = 6e4, KC = 2, rt = {
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
  timeZone: VC
};
function QC(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var r = t || {}, n = r.additionalDigits == null ? KC : $C(r.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var o = qC(e), a = ZC(o.date, n), s = a.year, i = a.restDateString, l = JC(i, s);
  if (isNaN(l))
    return /* @__PURE__ */ new Date(NaN);
  if (l) {
    var c = l.getTime(), u = 0, f;
    if (o.time && (u = XC(o.time), isNaN(u)))
      return /* @__PURE__ */ new Date(NaN);
    if (o.timeZone || r.timeZone) {
      if (f = HC(o.timeZone || r.timeZone, new Date(c + u)), isNaN(f))
        return /* @__PURE__ */ new Date(NaN);
    } else
      f = Bl(new Date(c + u)), f = Bl(new Date(c + u + f));
    return new Date(c + u + f);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function qC(e) {
  var t = {}, r = rt.dateTimePattern.exec(e), n;
  if (r ? (t.date = r[1], n = r[3]) : (r = rt.datePattern.exec(e), r ? (t.date = r[1], n = r[2]) : (t.date = null, n = e)), n) {
    var o = rt.timeZone.exec(n);
    o ? (t.time = n.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = n;
  }
  return t;
}
function ZC(e, t) {
  var r = rt.YYY[t], n = rt.YYYYY[t], o;
  if (o = rt.YYYY.exec(e) || n.exec(e), o) {
    var a = o[1];
    return {
      year: parseInt(a, 10),
      restDateString: e.slice(a.length)
    };
  }
  if (o = rt.YY.exec(e) || r.exec(e), o) {
    var s = o[1];
    return {
      year: parseInt(s, 10) * 100,
      restDateString: e.slice(s.length)
    };
  }
  return {
    year: null
  };
}
function JC(e, t) {
  if (t === null)
    return null;
  var r, n, o, a;
  if (e.length === 0)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  if (r = rt.MM.exec(e), r)
    return n = /* @__PURE__ */ new Date(0), o = parseInt(r[1], 10) - 1, Gl(t, o) ? (n.setUTCFullYear(t, o), n) : /* @__PURE__ */ new Date(NaN);
  if (r = rt.DDD.exec(e), r) {
    n = /* @__PURE__ */ new Date(0);
    var s = parseInt(r[1], 10);
    return rM(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (r = rt.MMDD.exec(e), r) {
    n = /* @__PURE__ */ new Date(0), o = parseInt(r[1], 10) - 1;
    var i = parseInt(r[2], 10);
    return Gl(t, o, i) ? (n.setUTCFullYear(t, o, i), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (r = rt.Www.exec(e), r)
    return a = parseInt(r[1], 10) - 1, Vl(t, a) ? zl(t, a) : /* @__PURE__ */ new Date(NaN);
  if (r = rt.WwwD.exec(e), r) {
    a = parseInt(r[1], 10) - 1;
    var l = parseInt(r[2], 10) - 1;
    return Vl(t, a, l) ? zl(t, a, l) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function XC(e) {
  var t, r, n;
  if (t = rt.HH.exec(e), t)
    return r = parseFloat(t[1].replace(",", ".")), ka(r) ? r % 24 * Oa : NaN;
  if (t = rt.HHMM.exec(e), t)
    return r = parseInt(t[1], 10), n = parseFloat(t[2].replace(",", ".")), ka(r, n) ? r % 24 * Oa + n * Wl : NaN;
  if (t = rt.HHMMSS.exec(e), t) {
    r = parseInt(t[1], 10), n = parseInt(t[2], 10);
    var o = parseFloat(t[3].replace(",", "."));
    return ka(r, n, o) ? r % 24 * Oa + n * Wl + o * 1e3 : NaN;
  }
  return null;
}
function zl(e, t, r) {
  t = t || 0, r = r || 0;
  var n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  var o = n.getUTCDay() || 7, a = t * 7 + r + 1 - o;
  return n.setUTCDate(n.getUTCDate() + a), n;
}
var eM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], tM = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function vf(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Gl(e, t, r) {
  if (t < 0 || t > 11)
    return !1;
  if (r != null) {
    if (r < 1)
      return !1;
    var n = vf(e);
    if (n && r > tM[t] || !n && r > eM[t])
      return !1;
  }
  return !0;
}
function rM(e, t) {
  if (t < 1)
    return !1;
  var r = vf(e);
  return !(r && t > 366 || !r && t > 365);
}
function Vl(e, t, r) {
  return !(t < 0 || t > 52 || r != null && (r < 0 || r > 6));
}
function ka(e, t, r) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || r != null && (r < 0 || r >= 60));
}
function qe(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function bo(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bo = function(r) {
    return typeof r;
  } : bo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, bo(e);
}
function Xt(e) {
  qe(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || bo(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function hn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var nM = {};
function Zs() {
  return nM;
}
function Tr(e, t) {
  var r, n, o, a, s, i, l, c;
  qe(1, arguments);
  var u = Zs(), f = hn((r = (n = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var d = Xt(e), h = d.getDay(), g = (h < f ? 7 : 0) + h - f;
  return d.setDate(d.getDate() - g), d.setHours(0, 0, 0, 0), d;
}
function Kl(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var oM = 6048e5;
function aM(e, t, r) {
  qe(2, arguments);
  var n = Tr(e, r), o = Tr(t, r), a = n.getTime() - Kl(n), s = o.getTime() - Kl(o);
  return Math.round((a - s) / oM);
}
function sM(e) {
  qe(1, arguments);
  var t = Xt(e), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function iM(e) {
  qe(1, arguments);
  var t = Xt(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function lM(e, t) {
  return qe(1, arguments), aM(sM(e), iM(e), t) + 1;
}
function cM(e, t) {
  var r, n, o, a, s, i, l, c;
  qe(1, arguments);
  var u = Xt(e), f = u.getFullYear(), d = Zs(), h = hn((r = (n = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : d.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = d.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = /* @__PURE__ */ new Date(0);
  g.setFullYear(f + 1, 0, h), g.setHours(0, 0, 0, 0);
  var b = Tr(g, t), A = /* @__PURE__ */ new Date(0);
  A.setFullYear(f, 0, h), A.setHours(0, 0, 0, 0);
  var y = Tr(A, t);
  return u.getTime() >= b.getTime() ? f + 1 : u.getTime() >= y.getTime() ? f : f - 1;
}
function uM(e, t) {
  var r, n, o, a, s, i, l, c;
  qe(1, arguments);
  var u = Zs(), f = hn((r = (n = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), d = cM(e, t), h = /* @__PURE__ */ new Date(0);
  h.setFullYear(d, 0, f), h.setHours(0, 0, 0, 0);
  var g = Tr(h, t);
  return g;
}
var fM = 6048e5;
function dM(e, t) {
  qe(1, arguments);
  var r = Xt(e), n = Tr(r, t).getTime() - uM(r, t).getTime();
  return Math.round(n / fM) + 1;
}
function Yo(e) {
  return qe(1, arguments), Tr(e, {
    weekStartsOn: 1
  });
}
function vM(e) {
  qe(1, arguments);
  var t = Xt(e), r = t.getFullYear(), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  var o = Yo(n), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Yo(a);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= s.getTime() ? r : r - 1;
}
function pM(e) {
  qe(1, arguments);
  var t = vM(e), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0);
  var n = Yo(r);
  return n;
}
var hM = 6048e5;
function mM(e) {
  qe(1, arguments);
  var t = Xt(e), r = Yo(t).getTime() - pM(t).getTime();
  return Math.round(r / hM) + 1;
}
function tt(e, t) {
  qe(2, arguments);
  var r = Xt(e), n = hn(t);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function No(e, t) {
  qe(2, arguments);
  var r = Xt(e), n = hn(t);
  if (isNaN(n))
    return /* @__PURE__ */ new Date(NaN);
  if (!n)
    return r;
  var o = r.getDate(), a = new Date(r.getTime());
  a.setMonth(r.getMonth() + n + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), o), r);
}
function Ql(e, t) {
  qe(2, arguments);
  var r = hn(t);
  return No(e, r * 12);
}
const gM = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function yM({
  monthComps: e,
  prevMonthComps: t,
  nextMonthComps: r
}, n) {
  const o = [], {
    firstDayOfWeek: a,
    firstWeekday: s,
    isoWeeknumbers: i,
    weeknumbers: l,
    numDays: c,
    numWeeks: u
  } = e, f = s + (s < a ? Ke : 0) - a;
  let d = !0, h = !1, g = !1, b = 0;
  const A = new Intl.DateTimeFormat(n.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let y = t.numDays - f + 1, H = t.numDays - y + 1, R = Math.floor((y - 1) / Ke + 1), I = 1, C = t.numWeeks, Q = 1, j = t.month, x = t.year;
  const F = /* @__PURE__ */ new Date(), B = F.getDate(), V = F.getMonth() + 1, _ = F.getFullYear();
  for (let L = 1; L <= uO; L++) {
    for (let ne = 1, K = a; ne <= Ke; ne++, K += K === Ke ? 1 - Ke : 1) {
      d && K === s && (y = 1, H = e.numDays, R = Math.floor((y - 1) / Ke + 1), I = Math.floor((c - y) / Ke + 1), C = 1, Q = u, j = e.month, x = e.year, d = !1, h = !0);
      const ee = n.getDateFromParams(x, j, y, 0, 0, 0, 0), re = n.getDateFromParams(x, j, y, 12, 0, 0, 0), ae = n.getDateFromParams(
        x,
        j,
        y,
        23,
        59,
        59,
        999
      ), he = ee, P = `${_e(x, 4)}-${_e(j, 2)}-${_e(y, 2)}`, de = ne, q = Ke - ne, Ie = l[L - 1], ge = i[L - 1], Ee = y === B && j === V && x === _, De = h && y === 1, Me = h && y === c, Ne = L === 1, Re = L === u, lt = ne === 1, Ze = ne === Ke, v = Cf(x, j, y);
      o.push({
        locale: n,
        id: P,
        position: ++b,
        label: y.toString(),
        ariaLabel: A.format(new Date(x, j - 1, y)),
        day: y,
        dayFromEnd: H,
        weekday: K,
        weekdayPosition: de,
        weekdayPositionFromEnd: q,
        weekdayOrdinal: R,
        weekdayOrdinalFromEnd: I,
        week: C,
        weekFromEnd: Q,
        weekPosition: L,
        weeknumber: Ie,
        isoWeeknumber: ge,
        month: j,
        year: x,
        date: he,
        startDate: ee,
        endDate: ae,
        noonDate: re,
        dayIndex: v,
        isToday: Ee,
        isFirstDay: De,
        isLastDay: Me,
        isDisabled: !h,
        isFocusable: !h,
        isFocused: !1,
        inMonth: h,
        inPrevMonth: d,
        inNextMonth: g,
        onTop: Ne,
        onBottom: Re,
        onLeft: lt,
        onRight: Ze,
        classes: [
          `id-${P}`,
          `day-${y}`,
          `day-from-end-${H}`,
          `weekday-${K}`,
          `weekday-position-${de}`,
          `weekday-ordinal-${R}`,
          `weekday-ordinal-from-end-${I}`,
          `week-${C}`,
          `week-from-end-${Q}`,
          {
            "is-today": Ee,
            "is-first-day": De,
            "is-last-day": Me,
            "in-month": h,
            "in-prev-month": d,
            "in-next-month": g,
            "on-top": Ne,
            "on-bottom": Re,
            "on-left": lt,
            "on-right": Ze
          }
        ]
      }), h && Me ? (h = !1, g = !0, y = 1, H = c, R = 1, I = Math.floor((c - y) / Ke + 1), C = 1, Q = r.numWeeks, j = r.month, x = r.year) : (y++, H--, R = Math.floor((y - 1) / Ke + 1), I = Math.floor((c - y) / Ke + 1));
    }
    C++, Q--;
  }
  return o;
}
function bM(e, t, r, n) {
  const o = e.reduce((a, s, i) => {
    const l = Math.floor(i / 7);
    let c = a[l];
    return c || (c = {
      id: `week-${l + 1}`,
      title: "",
      week: s.week,
      weekPosition: s.weekPosition,
      weeknumber: s.weeknumber,
      isoWeeknumber: s.isoWeeknumber,
      weeknumberDisplay: t ? s.weeknumber : r ? s.isoWeeknumber : void 0,
      days: []
    }, a[l] = c), c.days.push(s), a;
  }, Array(e.length / Ke));
  return o.forEach((a) => {
    const s = a.days[0], i = a.days[a.days.length - 1];
    s.month === i.month ? a.title = `${n.formatDate(s.date, "MMMM YYYY")}` : s.year === i.year ? a.title = `${n.formatDate(
      s.date,
      "MMM"
    )} - ${n.formatDate(i.date, "MMM YYYY")}` : a.title = `${n.formatDate(
      s.date,
      "MMM YYYY"
    )} - ${n.formatDate(i.date, "MMM YYYY")}`;
  }), o;
}
function wM(e, t) {
  return e.days.map((r) => ({
    label: t.formatDate(r.date, t.masks.weekdays),
    weekday: r.weekday
  }));
}
function _M(e, t) {
  return `${t}.${_e(e, 2)}`;
}
function pf(e, t, r) {
  return ff(
    r.getDateParts(r.toDate(e)),
    gM[t]
  );
}
function hf({ day: e, week: t, month: r, year: n }, o, a, s) {
  if (a === "daily" && e) {
    const i = new Date(n, r - 1, e), l = tt(i, o);
    return {
      day: l.getDate(),
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  } else if (a === "weekly" && t) {
    const l = s.getMonthParts(r, n).firstDayOfMonth, c = tt(l, (t - 1 + o) * 7), u = s.getDateParts(c);
    return {
      week: u.week,
      month: u.month,
      year: u.year
    };
  } else {
    const i = new Date(n, r - 1, 1), l = No(i, o);
    return {
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  }
}
function Yt(e) {
  return e != null && e.month != null && e.year != null;
}
function es(e, t) {
  return !Yt(e) || !Yt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function Ro(e, t) {
  return !Yt(e) || !Yt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function DM(e, t, r) {
  return (e || !1) && !es(e, t) && !Ro(e, r);
}
function AM(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function xM(e, t, r, n) {
  if (!Yt(e) || !Yt(t))
    return [];
  const o = [];
  for (; !Ro(e, t); )
    o.push(e), e = hf(e, 1, r, n);
  return o;
}
function mf(e) {
  const { day: t, week: r, month: n, year: o } = e;
  let a = `${o}-${_e(n, 2)}`;
  return r && (a = `${a}-w${r}`), t && (a = `${a}-${_e(t, 2)}`), a;
}
function CM(e, t) {
  const { month: r, year: n, showWeeknumbers: o, showIsoWeeknumbers: a } = e, s = new Date(n, r - 1, 15), i = t.getMonthParts(r, n), l = t.getPrevMonthParts(r, n), c = t.getNextMonthParts(r, n), u = yM({ monthComps: i, prevMonthComps: l, nextMonthComps: c }, t), f = bM(u, o, a, t), d = wM(f[0], t);
  return {
    id: mf(e),
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
function MM(e, t) {
  const { day: r, week: n, view: o, trimWeeks: a } = e, s = {
    ...t,
    ...e,
    title: "",
    viewDays: [],
    viewWeeks: []
  };
  switch (o) {
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
        a ? s.monthComps.numWeeks : void 0
      ), s.viewDays = s.days;
      break;
    }
  }
  return s;
}
class ql {
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
      const o = this.keys.shift();
      o != null && delete this.store[o];
    }
    return this.keys.push(r), this.store[r] = n, n;
  }
}
class Zr {
  constructor(t, r = new Lo()) {
    te(this, "order"), te(this, "locale"), te(this, "start", null), te(this, "end", null), te(this, "repeat", null);
    var n;
    this.locale = r;
    const { start: o, end: a, span: s, order: i, repeat: l } = t;
    qr(o) && (this.start = r.getDateParts(o)), qr(a) ? this.end = r.getDateParts(a) : this.start != null && s && (this.end = r.getDateParts(tt(this.start.date, s - 1))), this.order = i ?? 0, l && (this.repeat = new Fo(
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
    return (wt(t) ? t : [t]).filter((n) => n).map((n) => Zr.from(n, r));
  }
  static from(t, r) {
    if (t instanceof Zr)
      return t;
    const n = {
      start: null,
      end: null
    };
    return t != null && (wt(t) ? (n.start = t[0] ?? null, n.end = t[1] ?? null) : Qt(t) ? Object.assign(n, t) : (n.start = t, n.end = t)), n.start != null && (n.start = new Date(n.start)), n.end != null && (n.end = new Date(n.end)), new Zr(n, r);
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
class OM {
  constructor() {
    te(this, "records", {});
  }
  render(t, r, n) {
    var o, a, s, i;
    let l = null;
    const c = n[0].dayIndex, u = n[n.length - 1].dayIndex;
    return r.hasRepeat ? n.forEach((f) => {
      var d, h;
      if (r.startsOnDay(f)) {
        const g = r.daySpan < 1 / 0 ? r.daySpan : 1;
        l = {
          startDay: f.dayIndex,
          startTime: ((d = r.start) == null ? void 0 : d.time) ?? 0,
          endDay: f.dayIndex + g - 1,
          endTime: ((h = r.end) == null ? void 0 : h.time) ?? wo
        }, this.getRangeRecords(t).push(l);
      }
    }) : r.intersectsDayRange(c, u) && (l = {
      startDay: ((o = r.start) == null ? void 0 : o.dayIndex) ?? -1 / 0,
      startTime: ((a = r.start) == null ? void 0 : a.time) ?? -1 / 0,
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
    return this.getCells(r).find((a) => a.data.key === t);
  }
  cellExists(t, r) {
    const n = this.records[t];
    return n == null ? !1 : n.ranges.some(
      (o) => o.startDay <= r && o.endDay >= r
    );
  }
  getCells(t) {
    const r = Object.values(this.records), n = [], { dayIndex: o } = t;
    return r.forEach(({ data: a, ranges: s }) => {
      s.filter((i) => i.startDay <= o && i.endDay >= o).forEach((i) => {
        const l = o === i.startDay, c = o === i.endDay, u = l ? i.startTime : 0, f = new Date(t.startDate.getTime() + u), d = c ? i.endTime : wo, h = new Date(t.endDate.getTime() + d), g = u === 0 && d === wo, b = a.order || 0;
        n.push({
          ...i,
          data: a,
          onStart: l,
          onEnd: c,
          startTime: u,
          startDate: f,
          endTime: d,
          endDate: h,
          allDay: g,
          order: b
        });
      });
    }), n.sort((a, s) => a.order - s.order), n;
  }
}
const qt = {
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
qt.en = qt["en-US"];
qt.es = qt["es-ES"];
qt.no = qt.nb;
qt.zh = qt["zh-CN"];
const kM = Object.entries(qt).reduce(
  (e, [t, { dow: r, L: n }]) => (e[t] = {
    id: t,
    firstDayOfWeek: r,
    masks: { L: n }
  }, e),
  {}
), IM = "MMMM YYYY", SM = "W", EM = "MMM", TM = "h A", PM = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], $M = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], YM = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], NM = [
  "h:mm A"
], RM = [
  "HH:mm"
], LM = "WWW, MMM D, YYYY", FM = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], BM = "iso", UM = "YYYY-MM-DDTHH:mm:ss.SSSZ", HM = {
  title: IM,
  weekdays: SM,
  navMonths: EM,
  hours: TM,
  input: PM,
  inputDateTime: $M,
  inputDateTime24hr: YM,
  inputTime: NM,
  inputTime24hr: RM,
  dayPopover: LM,
  data: FM,
  model: BM,
  iso: UM
}, jM = 300, WM = 60, zM = 80, GM = {
  maxSwipeTime: jM,
  minHorizontalSwipeDistance: WM,
  maxVerticalSwipeDistance: zM
}, VM = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: GM,
  masks: HM,
  locales: kM,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, ts = Pr(VM), KM = D(() => hA(ts.locales, (e) => (e.masks = zn(e.masks, ts.masks), e))), fr = (e) => typeof window < "u" && cf(window.__vcalendar__, e) ? Cr(window.__vcalendar__, e) : Cr(ts, e), QM = 12, qM = 5;
function ZM(e, t) {
  const r = new Intl.DateTimeFormat().resolvedOptions().locale;
  let n;
  $t(e) ? n = e : cf(e, "id") && (n = e.id), n = (n || r).toLowerCase();
  const o = Object.keys(t), a = (l) => o.find((c) => c.toLowerCase() === l);
  n = a(n) || a(n.substring(0, 2)) || r;
  const s = {
    ...t["en-IE"],
    ...t[n],
    id: n,
    monthCacheSize: QM,
    pageCacheSize: qM
  };
  return Qt(e) ? zn(e, s) : s;
}
class Lo {
  constructor(t = void 0, r) {
    te(this, "id"), te(this, "daysInWeek"), te(this, "firstDayOfWeek"), te(this, "masks"), te(this, "timezone"), te(this, "hourLabels"), te(this, "dayNames"), te(this, "dayNamesShort"), te(this, "dayNamesShorter"), te(this, "dayNamesNarrow"), te(this, "monthNames"), te(this, "monthNamesShort"), te(this, "relativeTimeNames"), te(this, "amPm", ["am", "pm"]), te(this, "monthCache"), te(this, "pageCache");
    const { id: n, firstDayOfWeek: o, masks: a, monthCacheSize: s, pageCacheSize: i } = ZM(t, KM.value);
    this.monthCache = new ql(
      s,
      bO,
      wO
    ), this.pageCache = new ql(i, mf, CM), this.id = n, this.daysInWeek = Ke, this.firstDayOfWeek = TC(o, 1, Ke), this.masks = a, this.timezone = r || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Ia("long", this.id), this.dayNamesShort = Ia("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = Ia("narrow", this.id), this.monthNames = rc("long", this.id), this.monthNamesShort = rc("short", this.id), this.relativeTimeNames = AO(this.id);
  }
  formatDate(t, r) {
    return kO(t, r, this);
  }
  parseDate(t, r) {
    return nc(t, r, this);
  }
  toDate(t, r = {}) {
    const n = /* @__PURE__ */ new Date(NaN);
    let o = n;
    const { fillDate: a, mask: s, patch: i, rules: l } = r;
    if (Ct(t) ? (r.type = "number", o = /* @__PURE__ */ new Date(+t)) : $t(t) ? (r.type = "string", o = t ? nc(t, s || "iso", this) : n) : qr(t) ? (r.type = "date", o = new Date(t.getTime())) : Js(t) && (r.type = "object", o = this.getDateFromParts(t)), o && (i || l)) {
      let c = this.getDateParts(o);
      if (i && a != null) {
        const u = this.getDateParts(this.toDate(a));
        c = this.getDateParts(
          this.toDate({ ...u, ...ff(c, cO[i]) })
        );
      }
      l && (c = OO(c, l)), o = this.getDateFromParts(c);
    }
    return o || n;
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
    return Zr.from(t, this);
  }
  ranges(t) {
    return Zr.fromMany(t, this);
  }
  getDateParts(t) {
    return yO(t, this);
  }
  getDateFromParts(t) {
    return Of(t, this.timezone);
  }
  getDateFromParams(t, r, n, o, a, s, i) {
    return this.getDateFromParts({
      year: t,
      month: r,
      day: n,
      hours: o,
      minutes: a,
      seconds: s,
      milliseconds: i
    });
  }
  getPage(t) {
    const r = this.pageCache.getOrSet(t, this);
    return MM(t, r);
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
    return DO().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
var jr = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(jr || {}), gf = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(gf || {}), yf = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(yf || {}), bf = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(bf || {});
class JM {
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
        return Xs(this.from.date, r) % this.interval === 0;
      case "weeks":
        return mO(this.from.date, r) % this.interval === 0;
      case "months":
        return gO(this.from.date, r) % this.interval === 0;
      case "years":
        return Mf(this.from.date, r) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class mn {
  constructor(t, r, n, o) {
    te(this, "components", []), this.type = t, this.validator = n, this.getter = o, this.components = this.normalizeComponents(r);
  }
  static create(t, r) {
    switch (t) {
      case "days":
        return new XM(r);
      case "weekdays":
        return new eO(r);
      case "weeks":
        return new tO(r);
      case "months":
        return new rO(r);
      case "years":
        return new nO(r);
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
    return this.getter(t).some((o) => this.components.includes(o));
  }
}
class XM extends mn {
  constructor(t) {
    super(
      "days",
      t,
      sO,
      ({ day: r, dayFromEnd: n }) => [r, -n]
    );
  }
}
class eO extends mn {
  constructor(t) {
    super(
      "weekdays",
      t,
      rs,
      ({ weekday: r }) => [r]
    );
  }
}
class tO extends mn {
  constructor(t) {
    super(
      "weeks",
      t,
      iO,
      ({ week: r, weekFromEnd: n }) => [r, -n]
    );
  }
}
class rO extends mn {
  constructor(t) {
    super("months", t, lO, ({ month: r }) => [
      r
    ]);
  }
}
class nO extends mn {
  constructor(t) {
    super("years", t, Ct, ({ year: r }) => [r]);
  }
}
class oO {
  constructor(t, r) {
    te(this, "components"), this.type = t, this.components = this.normalizeComponents(r);
  }
  normalizeArrayConfig(t) {
    const r = [];
    return t.forEach((n, o) => {
      if (Ct(n)) {
        if (o === 0)
          return;
        if (!Zl(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!rs(n)) {
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
    return t.forEach((n, o) => {
      if (Ct(n)) {
        if (o === 0)
          return;
        if (!Zl(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!rs(n)) {
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
    const { weekday: r, weekdayOrdinal: n, weekdayOrdinalFromEnd: o } = t;
    return this.components.some(
      ([a, s]) => (a === n || a === -o) && r === s
    );
  }
}
class aO {
  constructor(t) {
    te(this, "type", "function"), te(this, "validated", !0), this.fn = t, Rr(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class Fo {
  constructor(t, r = {}, n) {
    te(this, "validated", !0), te(this, "config"), te(this, "type", jr.Any), te(this, "from"), te(this, "until"), te(this, "rules", []), te(this, "locale", new Lo()), this.parent = n, r.locale && (this.locale = r.locale), this.config = t, Rr(t) ? (this.type = jr.All, this.rules = [new aO(t)]) : wt(t) ? (this.type = jr.Any, this.rules = t.map((o) => new Fo(o, r, this))) : Qt(t) ? (this.type = jr.All, this.from = t.from ? this.locale.getDateParts(t.from) : n == null ? void 0 : n.from, this.until = t.until ? this.locale.getDateParts(t.until) : n == null ? void 0 : n.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const r = [];
    if (t.every && ($t(t.every) && (t.every = [1, `${t.every}s`]), wt(t.every))) {
      const [n = 1, o = gf.Days] = t.every;
      r.push(new JM(o, n, this.from));
    }
    return Object.values(yf).forEach((n) => {
      n in t && r.push(mn.create(n, t[n]));
    }), Object.values(bf).forEach((n) => {
      n in t && r.push(new oO(n, t[n]));
    }), t.on != null && (wt(t.on) || (t.on = [t.on]), r.push(
      new Fo(t.on, { locale: this.locale }, this.parent)
    )), r;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === jr.Any ? this.rules.some((r) => r.passes(t)) : this.rules.every((r) => r.passes(t)) : !0;
  }
}
function sO(e) {
  return Ct(e) ? e >= 1 && e <= 31 : !1;
}
function rs(e) {
  return Ct(e) ? e >= 1 && e <= 7 : !1;
}
function iO(e) {
  return Ct(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function lO(e) {
  return Ct(e) ? e >= 1 && e <= 12 : !1;
}
function Zl(e) {
  return !(!Ct(e) || e < -5 || e > 5 || e === 0);
}
const cO = {
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
}, Ke = 7, uO = 6, wf = 1e3, _f = wf * 60, Df = _f * 60, wo = Df * 24, fO = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], dO = ["L", "iso"], On = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, Af = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, vO = /\[([^]*?)\]/gm, Jl = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return _e(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return _e(e.weekday - 1, 2);
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
    return _e(e.month, 2);
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
    return _e(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return _e(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return _e(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return _e(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return _e(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return _e(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return _e(e.milliseconds, 3);
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
    return `${t > 0 ? "-" : "+"}${_e(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${_e(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${_e(Math.floor(Math.abs(t) / 60), 2)}:${_e(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, nr = /\d\d?/, pO = /\d{3}/, hO = /\d{4}/, An = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Xl = () => {
}, ec = (e) => (t, r, n) => {
  const o = n[e].indexOf(
    r.charAt(0).toUpperCase() + r.substr(1).toLowerCase()
  );
  ~o && (t.month = o);
}, Ae = {
  D: [
    nr,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(nr.source + An.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [nr, Xl],
  W: [An, Xl],
  M: [
    nr,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [An, ec("monthNamesShort")],
  MMMM: [An, ec("monthNames")],
  YY: [
    nr,
    (e, t) => {
      const n = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? n - 1 : n}${t}`;
    }
  ],
  YYYY: [
    hO,
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
    pO,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    nr,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    nr,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    nr,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    An,
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
Ae.DD = Ae.D;
Ae.dd = Ae.d;
Ae.WWWW = Ae.WWW = Ae.WW = Ae.W;
Ae.MM = Ae.M;
Ae.mm = Ae.m;
Ae.hh = Ae.H = Ae.HH = Ae.h;
Ae.ss = Ae.s;
Ae.A = Ae.a;
Ae.ZZZZ = Ae.ZZZ = Ae.ZZ = Ae.Z;
function xf(e, t) {
  return (Ht(e) && e || [
    $t(e) && e || "YYYY-MM-DD"
  ]).map(
    (r) => dO.reduce(
      (n, o) => n.replace(o, t.masks[o] || ""),
      r
    )
  );
}
function Js(e) {
  return Qt(e) && "year" in e && "month" in e && "day" in e;
}
function tc(e, t = 1) {
  const r = e.getDay() + 1, n = r >= t ? t - r : -(7 - (t - r));
  return tt(e, n);
}
function Cf(e, t, r) {
  const n = Date.UTC(e, t - 1, r);
  return Xs(/* @__PURE__ */ new Date(0), new Date(n));
}
function Xs(e, t) {
  return Math.round((t.getTime() - e.getTime()) / wo);
}
function mO(e, t) {
  return Math.ceil(Xs(tc(e), tc(t)) / 7);
}
function Mf(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function gO(e, t) {
  return Mf(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function Of(e, t = "") {
  const r = /* @__PURE__ */ new Date(), {
    year: n = r.getFullYear(),
    month: o = r.getMonth() + 1,
    day: a = r.getDate(),
    hours: s = 0,
    minutes: i = 0,
    seconds: l = 0,
    milliseconds: c = 0
  } = e;
  if (t) {
    const u = `${_e(n, 4)}-${_e(o, 2)}-${_e(a, 2)}T${_e(
      s,
      2
    )}:${_e(i, 2)}:${_e(l, 2)}.${_e(c, 3)}`;
    return QC(u, { timeZone: t });
  }
  return new Date(n, o - 1, a, s, i, l, c);
}
function yO(e, t) {
  let r = new Date(e.getTime());
  t.timezone && (r = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), r.setMilliseconds(e.getMilliseconds()));
  const n = r.getMilliseconds(), o = r.getSeconds(), a = r.getMinutes(), s = r.getHours(), i = n + o * wf + a * _f + s * Df, l = r.getMonth() + 1, c = r.getFullYear(), u = t.getMonthParts(l, c), f = r.getDate(), d = u.numDays - f + 1, h = r.getDay() + 1, g = Math.floor((f - 1) / 7 + 1), b = Math.floor((u.numDays - f) / 7 + 1), A = Math.ceil(
    (f + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7
  ), y = u.numWeeks - A + 1, H = u.weeknumbers[A], R = Cf(c, l, f);
  return {
    milliseconds: n,
    seconds: o,
    minutes: a,
    hours: s,
    time: i,
    day: f,
    dayFromEnd: d,
    weekday: h,
    weekdayOrdinal: g,
    weekdayOrdinalFromEnd: b,
    week: A,
    weekFromEnd: y,
    weeknumber: H,
    month: l,
    year: c,
    date: r,
    dateTime: r.getTime(),
    dayIndex: R,
    timezoneOffset: 0,
    isValid: !0
  };
}
function bO(e, t, r) {
  return `${t}-${e}-${r}`;
}
function wO(e, t, r) {
  const n = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, o = new Date(t, e - 1, 1), a = o.getDay() + 1, s = e === 2 && n ? 29 : fO[e - 1], i = r - 1, l = lM(o, {
    weekStartsOn: i
  }), c = [], u = [];
  for (let f = 0; f < l; f++) {
    const d = tt(o, f * 7);
    c.push(dM(d, { weekStartsOn: i })), u.push(mM(d));
  }
  return {
    firstDayOfWeek: r,
    firstDayOfMonth: o,
    inLeapYear: n,
    firstWeekday: a,
    numDays: s,
    numWeeks: l,
    month: e,
    year: t,
    weeknumbers: c,
    isoWeeknumbers: u
  };
}
function _O() {
  const e = [];
  for (let o = 0; o < Ke; o++)
    e.push(
      Of({
        year: 2020,
        month: 1,
        day: 5 + o,
        hours: 12
      })
    );
  return e;
}
function Ia(e, t = void 0) {
  const r = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return _O().map((n) => r.format(n));
}
function DO() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function AO(e = void 0) {
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
  return t.reduce((n, o) => {
    const a = r.formatToParts(100, o);
    return n[o] = a[1].unit, n;
  }, {});
}
function kf() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function rc(e, t = void 0) {
  const r = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return kf().map((n) => r.format(n));
}
function xO(e, t, r) {
  return Ct(t) ? t === e : wt(t) ? t.includes(e) : Rr(t) ? t(e, r) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function kn(e, t, r) {
  const n = [], [o, a, s] = t;
  for (let i = o; i <= a; i++)
    (r == null || xO(i, r, e)) && n.push({
      value: i,
      label: _e(i, s)
    });
  return n;
}
function CO(e, t) {
  return {
    milliseconds: kn(
      e,
      On.milliseconds,
      t.milliseconds
    ),
    seconds: kn(e, On.seconds, t.seconds),
    minutes: kn(e, On.minutes, t.minutes),
    hours: kn(e, On.hours, t.hours)
  };
}
function MO(e, t, r, n) {
  const a = kn(e, t, n).reduce((s, i) => {
    if (i.disabled)
      return s;
    if (isNaN(s))
      return i.value;
    const l = Math.abs(s - r);
    return Math.abs(i.value - r) < l ? i.value : s;
  }, NaN);
  return isNaN(a) ? r : a;
}
function OO(e, t) {
  const r = { ...e };
  return Object.entries(t).forEach(([n, o]) => {
    const a = On[n], s = e[n];
    r[n] = MO(
      e,
      a,
      s,
      o
    );
  }), r;
}
function nc(e, t, r) {
  return xf(t, r).map((o) => {
    if (typeof o != "string")
      throw new Error("Invalid mask");
    let a = e;
    if (a.length > 1e3)
      return !1;
    let s = !0;
    const i = {};
    if (o.replace(Af, (u) => {
      if (Ae[u]) {
        const f = Ae[u], d = a.search(f[0]);
        ~d ? a.replace(f[0], (h) => (f[1](i, h, r), a = a.substr(d + h.length), h)) : s = !1;
      }
      return Ae[u] ? "" : u.slice(1, u.length - 1);
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
  }).find((o) => o) || new Date(e);
}
function kO(e, t, r) {
  if (e == null)
    return "";
  let n = xf(t, r)[0];
  /Z$/.test(n) && (r.timezone = "utc");
  const o = [];
  n = n.replace(vO, (s, i) => (o.push(i), "??"));
  const a = r.getDateParts(e);
  return n = n.replace(
    Af,
    (s) => s in Jl ? Jl[s](a, r) : s.slice(1, s.length - 1)
  ), n.replace(/\?\?/g, () => o.shift());
}
let IO = 0;
class If {
  constructor(t, r, n) {
    te(this, "key", ""), te(this, "hashcode", ""), te(this, "highlight", null), te(this, "content", null), te(this, "dot", null), te(this, "bar", null), te(this, "event", null), te(this, "popover", null), te(this, "customData", null), te(this, "ranges"), te(this, "hasRanges", !1), te(this, "order", 0), te(this, "pinPage", !1), te(this, "maxRepeatSpan", 0), te(this, "locale");
    const { dates: o } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = ++IO), this.locale = n, r.normalizeGlyphs(this), this.ranges = n.ranges(o ?? []), this.hasRanges = !!Ht(this.ranges), this.maxRepeatSpan = this.ranges.filter((a) => a.hasRepeat).map((a) => a.daySpan).reduce((a, s) => Math.max(a, s), 0);
  }
  intersectsRange({ start: t, end: r }) {
    if (t == null || r == null)
      return !1;
    const n = this.ranges.filter((s) => !s.hasRepeat);
    for (const s of n)
      if (s.intersectsDayRange(t.dayIndex, r.dayIndex))
        return !0;
    const o = this.ranges.filter((s) => s.hasRepeat);
    if (!o.length)
      return !1;
    let a = t;
    for (this.maxRepeatSpan > 1 && (a = this.locale.getDateParts(tt(a.date, -this.maxRepeatSpan))); a.dayIndex <= r.dayIndex; ) {
      for (const s of o)
        if (s.startsOnDay(a))
          return !0;
      a = this.locale.getDateParts(tt(a.date, 1));
    }
    return !1;
  }
}
function ns(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function Gn(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function Sf(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function Ef(e) {
  const { visibility: t } = e, r = t === "click", n = t === "hover", o = t === "hover-focus", a = t === "focus";
  e.autoHide = !r;
  let s = !1, i = !1;
  const l = (g) => {
    r && (Sf({
      ...e,
      target: e.target || g.currentTarget
    }), g.stopPropagation());
  }, c = (g) => {
    s || (s = !0, (n || o) && ns({
      ...e,
      target: e.target || g.currentTarget
    }));
  }, u = () => {
    s && (s = !1, (n || o && !i) && Gn(e));
  }, f = (g) => {
    i || (i = !0, (a || o) && ns({
      ...e,
      target: e.target || g.currentTarget
    }));
  }, d = (g) => {
    i && !yo(g.currentTarget, g.relatedTarget) && (i = !1, (a || o && !s) && Gn(e));
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
const oc = (e) => {
  const t = To(e);
  if (t == null)
    return;
  const r = t.popoverHandlers;
  !r || !r.length || (r.forEach((n) => n()), delete t.popoverHandlers);
}, ac = (e, t) => {
  const r = To(e);
  if (r == null)
    return;
  const n = [], o = Ef(t);
  Object.entries(o).forEach(([a, s]) => {
    n.push(lr(r, a, s));
  }), r.popoverHandlers = n;
}, Tf = {
  mounted(e, t) {
    const { value: r } = t;
    r && ac(e, r);
  },
  updated(e, t) {
    const { oldValue: r, value: n } = t, o = r == null ? void 0 : r.visibility, a = n == null ? void 0 : n.visibility;
    o !== a && (o && (oc(e), a || Gn(r)), a && ac(e, n));
  },
  unmounted(e) {
    oc(e);
  }
}, SO = (e, t, {
  maxSwipeTime: r,
  minHorizontalSwipeDistance: n,
  maxVerticalSwipeDistance: o
}) => {
  if (!e || !e.addEventListener || !Rr(t))
    return null;
  let a = 0, s = 0, i = null, l = !1;
  function c(f) {
    const d = f.changedTouches[0];
    a = d.screenX, s = d.screenY, i = (/* @__PURE__ */ new Date()).getTime(), l = !0;
  }
  function u(f) {
    if (!l || !i)
      return;
    l = !1;
    const d = f.changedTouches[0], h = d.screenX - a, g = d.screenY - s;
    if ((/* @__PURE__ */ new Date()).getTime() - i < r && Math.abs(h) >= n && Math.abs(g) <= o) {
      const A = { toLeft: !1, toRight: !1 };
      h < 0 ? A.toLeft = !0 : A.toRight = !0, t(A);
    }
  }
  return lr(e, "touchstart", c, { passive: !0 }), lr(e, "touchend", u, { passive: !0 }), () => {
    ir(e, "touchstart", c), ir(e, "touchend", u);
  };
}, _o = {}, EO = (e, t = 10) => {
  _o[e] = Date.now() + t;
}, TO = (e, t) => {
  if (e in _o) {
    const r = _o[e];
    if (Date.now() < r)
      return;
    delete _o[e];
  }
  t();
};
function Pf() {
  return typeof window < "u";
}
function PO(e) {
  return Pf() && e in window;
}
function $O(e) {
  const t = be(!1), r = D(() => t.value ? "dark" : "light");
  let n, o;
  function a(h) {
    t.value = h.matches;
  }
  function s() {
    PO("matchMedia") && (n = window.matchMedia("(prefers-color-scheme: dark)"), n.addEventListener("change", a), t.value = n.matches);
  }
  function i() {
    const { selector: h = ":root", darkClass: g = "dark" } = e.value, b = document.querySelector(h);
    t.value = b.classList.contains(g);
  }
  function l(h) {
    const { selector: g = ":root", darkClass: b = "dark" } = h;
    if (Pf() && g && b) {
      const A = document.querySelector(g);
      A && (o = new MutationObserver(i), o.observe(A, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = A.classList.contains(b));
    }
  }
  function c() {
    f();
    const h = typeof e.value;
    h === "string" && e.value.toLowerCase() === "system" ? s() : h === "object" ? l(e.value) : t.value = !!e.value;
  }
  const u = je(() => e.value, () => c(), {
    immediate: !0
  });
  function f() {
    n && (n.removeEventListener("change", a), n = void 0), o && (o.disconnect(), o = void 0);
  }
  function d() {
    f(), u();
  }
  return ln(() => d()), {
    isDark: t,
    displayMode: r,
    cleanup: d
  };
}
const YO = ["base", "start", "end", "startEnd"], NO = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], RO = { base: {}, start: {}, end: {} };
function ei(e, t, r = RO) {
  let n = e, o = {};
  t === !0 || $t(t) ? (n = $t(t) ? t : n, o = { ...r }) : Qt(t) && (Fl(t, YO) ? o = { ...t } : o = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const a = zn(
    o,
    { start: o.startEnd, end: o.startEnd },
    r
  );
  return Object.entries(a).forEach(([s, i]) => {
    let l = n;
    i === !0 || $t(i) ? (l = $t(i) ? i : l, a[s] = { color: l }) : Qt(i) && (Fl(i, NO) ? a[s] = { ...i } : a[s] = {}), zn(a[s], { color: l });
  }), a;
}
class LO {
  constructor() {
    te(this, "type", "highlight");
  }
  normalizeConfig(t, r) {
    return ei(t, r, {
      base: { fillMode: "light" },
      start: { fillMode: "solid" },
      end: { fillMode: "solid" }
    });
  }
  prepareRender(t) {
    t.highlights = [], t.content || (t.content = []);
  }
  render({ data: t, onStart: r, onEnd: n }, o) {
    const { key: a, highlight: s } = t;
    if (!s)
      return;
    const { highlights: i } = o, { base: l, start: c, end: u } = s;
    r && n ? i.push({
      ...c,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    }) : r ? (i.push({
      ...l,
      key: `${a}-base`,
      wrapperClass: `vc-day-layer vc-day-box-right-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-start vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), i.push({
      ...c,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    })) : n ? (i.push({
      ...l,
      key: `${a}-base`,
      wrapperClass: `vc-day-layer vc-day-box-left-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-end vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), i.push({
      ...u,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${u.color}`,
      class: [`vc-highlight vc-highlight-bg-${u.fillMode}`, u.class],
      contentClass: [
        `vc-attr vc-highlight-content-${u.fillMode} vc-${u.color}`,
        u.contentClass
      ]
    })) : i.push({
      ...l,
      key: `${a}-middle`,
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
class ti {
  constructor(t, r) {
    te(this, "type", ""), te(this, "collectionType", ""), this.type = t, this.collectionType = r;
  }
  normalizeConfig(t, r) {
    return ei(t, r);
  }
  prepareRender(t) {
    t[this.collectionType] = [];
  }
  render({ data: t, onStart: r, onEnd: n }, o) {
    const { key: a } = t, s = t[this.type];
    if (!a || !s)
      return;
    const i = o[this.collectionType], { base: l, start: c, end: u } = s;
    r ? i.push({
      ...c,
      key: a,
      class: [
        `vc-${this.type} vc-${this.type}-start vc-${c.color} vc-attr`,
        c.class
      ]
    }) : n ? i.push({
      ...u,
      key: a,
      class: [
        `vc-${this.type} vc-${this.type}-end vc-${u.color} vc-attr`,
        u.class
      ]
    }) : i.push({
      ...l,
      key: a,
      class: [
        `vc-${this.type} vc-${this.type}-base vc-${l.color} vc-attr`,
        l.class
      ]
    });
  }
}
class FO extends ti {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, r) {
    return ei("base", r);
  }
}
class BO extends ti {
  constructor() {
    super("dot", "dots");
  }
}
class UO extends ti {
  constructor() {
    super("bar", "bars");
  }
}
class HO {
  constructor(t) {
    te(this, "color"), te(this, "renderers", [
      new FO(),
      new LO(),
      new BO(),
      new UO()
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
const $f = Symbol("__vc_base_context__"), Yf = {
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
function Nf(e) {
  const t = D(() => e.color ?? ""), r = D(() => e.isDark ?? !1), { displayMode: n } = $O(r), o = D(() => new HO(t.value)), a = D(() => {
    if (e.locale instanceof Lo)
      return e.locale;
    const d = Qt(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new Lo(d, e.timezone);
  }), s = D(() => a.value.masks), i = D(() => e.minDate), l = D(() => e.maxDate), c = D(() => {
    const d = e.disabledDates ? [...e.disabledDates] : [];
    return i.value != null && d.push({
      start: null,
      end: tt(a.value.toDate(i.value), -1)
    }), l.value != null && d.push({
      start: tt(a.value.toDate(l.value), 1),
      end: null
    }), a.value.ranges(d);
  }), u = D(() => new If(
    {
      key: "disabled",
      dates: c.value,
      order: 100
    },
    o.value,
    a.value
  )), f = {
    color: t,
    isDark: r,
    displayMode: n,
    theme: o,
    locale: a,
    masks: s,
    minDate: i,
    maxDate: l,
    disabledDates: c,
    disabledAttribute: u
  };
  return Yr($f, f), f;
}
function jO(e) {
  return Gt($f, () => Nf(e), !0);
}
function Rf(e) {
  return `__vc_slot_${e}__`;
}
function Lf(e, t = {}) {
  Object.keys(e).forEach((r) => {
    Yr(Rf(t[r] ?? r), e[r]);
  });
}
function Ff(e) {
  return Gt(Rf(e), null);
}
const WO = {
  ...Yf,
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
}, zO = [
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
], Bf = Symbol("__vc_calendar_context__");
function GO(e, { slots: t, emit: r }) {
  const n = be(null), o = be(null), a = be((/* @__PURE__ */ new Date()).getDate()), s = be(!1), i = be(Symbol()), l = be(Symbol()), c = be(e.view), u = be([]), f = be("");
  let d = null, h = null;
  Lf(t);
  const {
    theme: g,
    color: b,
    displayMode: A,
    locale: y,
    masks: H,
    minDate: R,
    maxDate: I,
    disabledAttribute: C,
    disabledDates: Q
  } = jO(e), j = D(() => e.rows * e.columns), x = D(() => e.step || j.value), F = D(() => lf(u.value) ?? null), B = D(() => zr(u.value) ?? null), V = D(
    () => e.minPage || (R.value ? q(R.value) : null)
  ), _ = D(
    () => e.maxPage || (I.value ? q(I.value) : null)
  ), L = D(() => e.navVisibility), ne = D(() => !!e.showWeeknumbers), K = D(() => !!e.showIsoWeeknumbers), ee = D(() => c.value === "monthly"), re = D(() => c.value === "weekly"), ae = D(() => c.value === "daily"), he = () => {
    s.value = !0, r("transition-start");
  }, P = () => {
    s.value = !1, r("transition-end"), d && (d.resolve(!0), d = null);
  }, de = (T, p, k = c.value) => hf(T, p, k, y.value), q = (T) => pf(T, c.value, y.value), Ie = (T) => {
    !C.value || !Re.value || (T.isDisabled = Re.value.cellExists(
      C.value.key,
      T.dayIndex
    ));
  }, ge = (T) => {
    T.isFocusable = T.inMonth && T.day === a.value;
  }, Ee = (T, p) => {
    for (const k of T)
      for (const z of k.days)
        if (p(z) === !1)
          return;
  }, De = D(
    () => u.value.reduce((T, p) => (T.push(...p.viewDays), T), [])
  ), Me = D(() => {
    const T = [];
    return (e.attributes || []).forEach((p, k) => {
      !p || !p.dates || T.push(
        new If(
          {
            ...p,
            order: p.order || 0
          },
          g.value,
          y.value
        )
      );
    }), C.value && T.push(C.value), T;
  }), Ne = D(() => Ht(Me.value)), Re = D(() => {
    const T = new OM();
    return Me.value.forEach((p) => {
      p.ranges.forEach((k) => {
        T.render(p, k, De.value);
      });
    }), T;
  }), lt = D(() => De.value.reduce((T, p) => (T[p.dayIndex] = { day: p, cells: [] }, T[p.dayIndex].cells.push(...Re.value.getCells(p)), T), {})), Ze = (T, p) => {
    const k = e.showWeeknumbers || e.showIsoWeeknumbers;
    return k == null ? "" : ZD(k) ? k ? "left" : "" : k.startsWith("right") ? p > 1 ? "right" : k : T > 1 ? "left" : k;
  }, v = () => {
    var T, p;
    if (!Ne.value)
      return null;
    const k = Me.value.find((Se) => Se.pinPage) || Me.value[0];
    if (!k || !k.hasRanges)
      return null;
    const [z] = k.ranges, fe = ((T = z.start) == null ? void 0 : T.date) || ((p = z.end) == null ? void 0 : p.date);
    return fe ? q(fe) : null;
  }, m = () => {
    if (Yt(F.value))
      return F.value;
    const T = v();
    return Yt(T) ? T : q(/* @__PURE__ */ new Date());
  }, w = (T, p = {}) => {
    const { view: k = c.value, position: z = 1, force: fe } = p, Se = z > 0 ? 1 - z : -(j.value + z);
    let Xe = de(T, Se, k), ct = de(Xe, j.value - 1, k);
    return fe || (es(Xe, V.value) ? Xe = V.value : Ro(ct, _.value) && (Xe = de(_.value, 1 - j.value)), ct = de(Xe, j.value - 1)), { fromPage: Xe, toPage: ct };
  }, O = (T, p, k = "") => {
    if (k === "none" || k === "fade")
      return k;
    if ((T == null ? void 0 : T.view) !== (p == null ? void 0 : p.view))
      return "fade";
    const z = Ro(p, T), fe = es(p, T);
    return !z && !fe ? "fade" : k === "slide-v" ? fe ? "slide-down" : "slide-up" : fe ? "slide-right" : "slide-left";
  }, M = (T = {}) => new Promise((p, k) => {
    const { position: z = 1, force: fe = !1, transition: Se } = T, Xe = Yt(T.page) ? T.page : m(), { fromPage: ct } = w(Xe, {
      position: z,
      force: fe
    }), Ur = [];
    for (let Hr = 0; Hr < j.value; Hr++) {
      const ca = de(ct, Hr), nt = Hr + 1, ua = Math.ceil(nt / e.columns), Jn = e.rows - ua + 1, gn = nt % e.columns || e.columns, yn = e.columns - gn + 1, Zf = Ze(gn, yn);
      Ur.push(
        y.value.getPage({
          ...ca,
          view: c.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: nt,
          row: ua,
          rowFromEnd: Jn,
          column: gn,
          columnFromEnd: yn,
          showWeeknumbers: ne.value,
          showIsoWeeknumbers: K.value,
          weeknumberPosition: Zf
        })
      );
    }
    f.value = O(
      u.value[0],
      Ur[0],
      Se
    ), u.value = Ur, f.value && f.value !== "none" ? d = {
      resolve: p,
      reject: k
    } : p(!0);
  }), Y = (T) => {
    const p = F.value ?? q(/* @__PURE__ */ new Date());
    return de(p, T);
  }, U = (T, p = {}) => {
    const k = Yt(T) ? T : q(T);
    return Object.assign(
      p,
      w(k, {
        ...p,
        force: !0
      })
    ), xM(
      p.fromPage,
      p.toPage,
      c.value,
      y.value
    ).map((fe) => DM(fe, V.value, _.value)).some((fe) => fe);
  }, $ = (T, p = {}) => U(Y(T), p), N = D(() => $(-x.value)), S = D(() => $(x.value)), W = async (T, p = {}) => !p.force && !U(T, p) ? !1 : (p.fromPage && !AM(p.fromPage, F.value) && (Gn({ id: i.value, hideDelay: 0 }), p.view && (EO("view", 10), c.value = p.view), await M({
    ...p,
    page: p.fromPage,
    position: 1,
    force: !0
  }), r("did-move", u.value)), !0), X = (T, p = {}) => W(Y(T), p), Z = () => X(-x.value), se = () => X(x.value), ce = (T) => {
    const p = ee.value ? ".in-month" : "", k = `.id-${y.value.getDayId(T)}${p}`, z = `${k}.vc-focusable, ${k} .vc-focusable`, fe = n.value;
    if (fe) {
      const Se = fe.querySelector(z);
      if (Se)
        return Se.focus(), !0;
    }
    return !1;
  }, ve = async (T, p = {}) => ce(T) ? !0 : (await W(T, p), ce(T)), ye = (T, p) => {
    a.value = T.day, r("dayclick", T, p);
  }, Te = (T, p) => {
    r("daymouseenter", T, p);
  }, ze = (T, p) => {
    r("daymouseleave", T, p);
  }, kt = (T, p) => {
    a.value = T.day, o.value = T, T.isFocused = !0, r("dayfocusin", T, p);
  }, mr = (T, p) => {
    o.value = null, T.isFocused = !1, r("dayfocusout", T, p);
  }, It = (T, p) => {
    r("daykeydown", T, p);
    const k = T.noonDate;
    let z = null;
    switch (p.key) {
      case "ArrowLeft": {
        z = tt(k, -1);
        break;
      }
      case "ArrowRight": {
        z = tt(k, 1);
        break;
      }
      case "ArrowUp": {
        z = tt(k, -7);
        break;
      }
      case "ArrowDown": {
        z = tt(k, 7);
        break;
      }
      case "Home": {
        z = tt(k, -T.weekdayPosition + 1);
        break;
      }
      case "End": {
        z = tt(k, T.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        p.altKey ? z = Ql(k, -1) : z = No(k, -1);
        break;
      }
      case "PageDown": {
        p.altKey ? z = Ql(k, 1) : z = No(k, 1);
        break;
      }
    }
    z && (p.preventDefault(), ve(z).catch());
  }, Br = (T) => {
    const p = o.value;
    p != null && It(p, T);
  }, He = (T, p) => {
    r("weeknumberclick", T, p);
  };
  M({
    page: e.initialPage,
    position: e.initialPagePosition
  }), $r(() => {
    !e.disablePageSwipe && n.value && (h = SO(
      n.value,
      ({ toLeft: T = !1, toRight: p = !1 }) => {
        T ? se() : p && Z();
      },
      fr("touch")
    ));
  }), ln(() => {
    u.value = [], h && h();
  }), je(
    () => y.value,
    () => {
      M();
    }
  ), je(
    () => j.value,
    () => M()
  ), je(
    () => e.view,
    () => c.value = e.view
  ), je(
    () => c.value,
    () => {
      TO("view", () => {
        M();
      }), r("update:view", c.value);
    }
  ), je(
    () => a.value,
    () => {
      Ee(u.value, (T) => ge(T));
    }
  ), zc(() => {
    r("update:pages", u.value), Ee(u.value, (T) => {
      Ie(T), ge(T);
    });
  });
  const Je = {
    emit: r,
    containerRef: n,
    focusedDay: o,
    inTransition: s,
    navPopoverId: i,
    dayPopoverId: l,
    view: c,
    pages: u,
    transitionName: f,
    theme: g,
    color: b,
    displayMode: A,
    locale: y,
    masks: H,
    attributes: Me,
    disabledAttribute: C,
    disabledDates: Q,
    attributeContext: Re,
    days: De,
    dayCells: lt,
    count: j,
    step: x,
    firstPage: F,
    lastPage: B,
    canMovePrev: N,
    canMoveNext: S,
    minPage: V,
    maxPage: _,
    isMonthly: ee,
    isWeekly: re,
    isDaily: ae,
    navVisibility: L,
    showWeeknumbers: ne,
    showIsoWeeknumbers: K,
    getDateAddress: q,
    canMove: U,
    canMoveBy: $,
    move: W,
    moveBy: X,
    movePrev: Z,
    moveNext: se,
    onTransitionBeforeEnter: he,
    onTransitionAfterEnter: P,
    tryFocusDate: ce,
    focusDate: ve,
    onKeydown: Br,
    onDayKeydown: It,
    onDayClick: ye,
    onDayMouseenter: Te,
    onDayMouseleave: ze,
    onDayFocusin: kt,
    onDayFocusout: mr,
    onWeeknumberClick: He
  };
  return Yr(Bf, Je), Je;
}
function Fr() {
  const e = Gt(Bf);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const VO = /* @__PURE__ */ We({
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
    let o = null, a = null;
    const s = Pr({
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
    function i(P) {
      P && (s.direction = P.split("-")[0]);
    }
    function l({ placement: P, options: de }) {
      i(P || (de == null ? void 0 : de.placement));
    }
    const c = D(() => ({
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
    })), u = D(() => {
      const P = s.direction === "left" || s.direction === "right";
      let de = "";
      if (s.placement) {
        const q = s.placement.split("-");
        q.length > 1 && (de = q[1]);
      }
      return ["start", "top", "left"].includes(de) ? P ? "top" : "left" : ["end", "bottom", "right"].includes(de) ? P ? "bottom" : "right" : P ? "middle" : "center";
    });
    function f() {
      a && (a.destroy(), a = null);
    }
    function d() {
      xr(() => {
        const P = To(s.target);
        !P || !n.value || (a && a.state.elements.reference !== P && f(), a ? a.update() : a = Bh(
          P,
          n.value,
          c.value
        ));
      });
    }
    function h(P) {
      Object.assign(s, uf(P, "force"));
    }
    function g(P, de) {
      clearTimeout(r), P > 0 ? r = setTimeout(de, P) : de();
    }
    function b(P) {
      return !P || !a ? !1 : To(P) === a.state.elements.reference;
    }
    async function A(P = {}) {
      s.force || (P.force && (s.force = !0), g(P.showDelay ?? e.showDelay, () => {
        s.isVisible && (s.force = !1), h({
          ...P,
          isVisible: !0
        }), d();
      }));
    }
    function y(P = {}) {
      a && (P.target && !b(P.target) || s.force || (P.force && (s.force = !0), g(P.hideDelay ?? e.hideDelay, () => {
        s.isVisible || (s.force = !1), s.isVisible = !1;
      })));
    }
    function H(P = {}) {
      P.target != null && (s.isVisible && b(P.target) ? y(P) : A(P));
    }
    function R(P) {
      if (!a)
        return;
      const de = a.state.elements.reference;
      if (!n.value || !de)
        return;
      const q = P.target;
      yo(n.value, q) || yo(de, q) || y({ force: !0 });
    }
    function I(P) {
      (P.key === "Esc" || P.key === "Escape") && y();
    }
    function C({ detail: P }) {
      !P.id || P.id !== e.id || A(P);
    }
    function Q({ detail: P }) {
      !P.id || P.id !== e.id || y(P);
    }
    function j({ detail: P }) {
      !P.id || P.id !== e.id || H(P);
    }
    function x() {
      lr(document, "keydown", I), lr(document, "click", R), lr(document, "show-popover", C), lr(document, "hide-popover", Q), lr(document, "toggle-popover", j);
    }
    function F() {
      ir(document, "keydown", I), ir(document, "click", R), ir(document, "show-popover", C), ir(document, "hide-popover", Q), ir(document, "toggle-popover", j);
    }
    function B(P) {
      t("before-show", P);
    }
    function V(P) {
      s.force = !1, t("after-show", P);
    }
    function _(P) {
      t("before-hide", P);
    }
    function L(P) {
      s.force = !1, f(), t("after-hide", P);
    }
    function ne(P) {
      P.stopPropagation();
    }
    function K() {
      s.isHovered = !0, s.isInteractive && ["hover", "hover-focus"].includes(s.visibility) && A();
    }
    function ee() {
      if (s.isHovered = !1, !a)
        return;
      const P = a.state.elements.reference;
      s.autoHide && !s.isFocused && (!P || P !== document.activeElement) && ["hover", "hover-focus"].includes(s.visibility) && y();
    }
    function re() {
      s.isFocused = !0, s.isInteractive && ["focus", "hover-focus"].includes(s.visibility) && A();
    }
    function ae(P) {
      ["focus", "hover-focus"].includes(s.visibility) && (!P.relatedTarget || !yo(n.value, P.relatedTarget)) && (s.isFocused = !1, !s.isHovered && s.autoHide && y());
    }
    function he() {
      o != null && (o.disconnect(), o = null);
    }
    return je(
      () => n.value,
      (P) => {
        he(), P && (o = new ResizeObserver(() => {
          a && a.update();
        }), o.observe(P));
      }
    ), je(() => s.placement, i, {
      immediate: !0
    }), $r(() => {
      x();
    }), ln(() => {
      f(), he(), F();
    }), {
      ...Fd(s),
      popoverRef: n,
      alignment: u,
      hide: y,
      setupPopper: d,
      beforeEnter: B,
      afterEnter: V,
      beforeLeave: _,
      afterLeave: L,
      onClick: ne,
      onMouseOver: K,
      onMouseLeave: ee,
      onFocusIn: re,
      onFocusOut: ae
    };
  }
}), hr = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
};
function KO(e, t, r, n, o, a) {
  return G(), oe("div", {
    class: xe(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s)),
    onMouseover: t[1] || (t[1] = (...s) => e.onMouseOver && e.onMouseOver(...s)),
    onMouseleave: t[2] || (t[2] = (...s) => e.onMouseLeave && e.onMouseLeave(...s)),
    onFocusin: t[3] || (t[3] = (...s) => e.onFocusIn && e.onFocusIn(...s)),
    onFocusout: t[4] || (t[4] = (...s) => e.onFocusOut && e.onFocusOut(...s))
  }, [
    le(ea, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: Ye(() => [
        e.isVisible ? (G(), oe("div", Nr({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          Vn(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            Zo(Le(e.data), 1)
          ]),
          J("span", {
            class: xe([
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
const ri = /* @__PURE__ */ hr(VO, [["render", KO]]), QO = { class: "vc-day-popover-row" }, qO = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, ZO = { class: "vc-day-popover-row-label" }, JO = /* @__PURE__ */ We({
  __name: "PopoverRow",
  props: {
    attribute: null
  },
  setup(e) {
    const t = e, r = D(() => {
      const { content: n, highlight: o, dot: a, bar: s, popover: i } = t.attribute;
      return i && i.hideIndicator ? null : n ? {
        class: `vc-bar vc-day-popover-row-bar vc-attr vc-${n.base.color}`
      } : o ? {
        class: `vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${o.base.color}`
      } : a ? {
        class: `vc-dot vc-attr vc-${a.base.color}`
      } : s ? {
        class: `vc-bar vc-day-popover-row-bar vc-attr vc-${s.base.color}`
      } : null;
    });
    return (n, o) => (G(), oe("div", QO, [
      E(r) ? (G(), oe("div", qO, [
        J("span", {
          class: xe(E(r).class)
        }, null, 2)
      ])) : Fe("", !0),
      J("div", ZO, [
        Vn(n.$slots, "default", {}, () => [
          Zo(Le(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
        ])
      ])
    ]));
  }
}), XO = {
  inheritAttrs: !1
}, ht = /* @__PURE__ */ We({
  ...XO,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const r = Ff(e.name);
    return (n, o) => E(r) ? (G(), Ve(Wc(E(r)), In(Nr({ key: 0 }, n.$attrs)), null, 16)) : Vn(n.$slots, "default", { key: 1 });
  }
}), ek = { class: "vc-day-popover-container" }, tk = {
  key: 0,
  class: "vc-day-popover-header"
}, rk = /* @__PURE__ */ We({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: r, color: n, masks: o, locale: a } = Fr();
    function s(l, c) {
      return a.value.formatDate(l, c);
    }
    function i(l) {
      return a.value.formatDate(l.date, o.value.dayPopover);
    }
    return (l, c) => (G(), Ve(ri, {
      id: E(t),
      class: xe([`vc-${E(n)}`, `vc-${E(r)}`])
    }, {
      default: Ye(({ data: { day: u, attributes: f }, hide: d }) => [
        le(ht, {
          name: "day-popover",
          day: u,
          "day-title": i(u),
          attributes: f,
          format: s,
          masks: E(o),
          hide: d
        }, {
          default: Ye(() => [
            J("div", ek, [
              E(o).dayPopover ? (G(), oe("div", tk, Le(i(u)), 1)) : Fe("", !0),
              (G(!0), oe(we, null, gt(f, (h) => (G(), Ve(JO, {
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
}), nk = {}, ok = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, ak = /* @__PURE__ */ J("polyline", { points: "9 18 15 12 9 6" }, null, -1), sk = [
  ak
];
function ik(e, t) {
  return G(), oe("svg", ok, sk);
}
const lk = /* @__PURE__ */ hr(nk, [["render", ik]]), ck = {}, uk = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, fk = /* @__PURE__ */ J("polyline", { points: "15 18 9 12 15 6" }, null, -1), dk = [
  fk
];
function vk(e, t) {
  return G(), oe("svg", uk, dk);
}
const pk = /* @__PURE__ */ hr(ck, [["render", vk]]), hk = {}, mk = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, gk = /* @__PURE__ */ J("polyline", { points: "6 9 12 15 18 9" }, null, -1), yk = [
  gk
];
function bk(e, t) {
  return G(), oe("svg", mk, yk);
}
const wk = /* @__PURE__ */ hr(hk, [["render", bk]]), _k = {}, Dk = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, Ak = /* @__PURE__ */ J("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), xk = [
  Ak
];
function Ck(e, t) {
  return G(), oe("svg", Dk, xk);
}
const Mk = /* @__PURE__ */ hr(_k, [["render", Ck]]), Ok = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: wk,
  IconChevronLeft: pk,
  IconChevronRight: lk,
  IconClock: Mk
}, Symbol.toStringTag, { value: "Module" })), an = /* @__PURE__ */ We({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, r = D(() => t.width || t.size), n = D(() => t.height || t.size), o = D(() => Ok[`Icon${t.name}`]);
    return (a, s) => (G(), Ve(Wc(E(o)), {
      width: E(r),
      height: E(n),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
}), kk = ["disabled"], Ik = {
  key: 1,
  class: "vc-title-wrapper"
}, Sk = {
  type: "button",
  class: "vc-title"
}, Ek = ["disabled"], Uf = /* @__PURE__ */ We({
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
      canMovePrev: o,
      movePrev: a,
      canMoveNext: s,
      moveNext: i
    } = Fr(), l = D(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), c = D(() => {
      const { page: b } = t;
      return {
        id: r.value,
        visibility: n.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: b },
        isInteractive: !0
      };
    }), u = D(() => t.page.titlePosition.includes("left")), f = D(() => t.page.titlePosition.includes("right")), d = D(() => t.layout ? t.layout : u.value ? "tu-pn" : f.value ? "pn-tu" : "p-tu-n;"), h = D(() => ({
      prev: d.value.includes("p") && !t.hideArrows,
      title: d.value.includes("t") && !t.hideTitle,
      next: d.value.includes("n") && !t.hideArrows
    })), g = D(() => ({ gridTemplateColumns: d.value.split("").map((A) => {
      switch (A) {
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
    return (b, A) => (G(), oe("div", {
      class: xe(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: jt(E(g))
    }, [
      E(h).prev ? (G(), oe("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !E(o),
        onClick: A[0] || (A[0] = //@ts-ignore
        (...y) => E(a) && E(a)(...y)),
        onKeydown: A[1] || (A[1] = Fi(
          //@ts-ignore
          (...y) => E(a) && E(a)(...y),
          ["space", "enter"]
        ))
      }, [
        le(ht, {
          name: "header-prev-button",
          disabled: !E(o)
        }, {
          default: Ye(() => [
            le(an, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, kk)) : Fe("", !0),
      E(h).title ? (G(), oe("div", Ik, [
        le(ht, { name: "header-title-wrapper" }, {
          default: Ye(() => [
            En((G(), oe("button", Sk, [
              le(ht, {
                name: "header-title",
                title: e.page.title
              }, {
                default: Ye(() => [
                  J("span", null, Le(e.page.title), 1)
                ]),
                _: 1
              }, 8, ["title"])
            ])), [
              [E(Tf), E(c)]
            ])
          ]),
          _: 1
        })
      ])) : Fe("", !0),
      E(h).next ? (G(), oe("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !E(s),
        onClick: A[2] || (A[2] = //@ts-ignore
        (...y) => E(i) && E(i)(...y)),
        onKeydown: A[3] || (A[3] = Fi(
          //@ts-ignore
          (...y) => E(i) && E(i)(...y),
          ["space", "enter"]
        ))
      }, [
        le(ht, {
          name: "header-next-button",
          disabled: !E(s)
        }, {
          default: Ye(() => [
            le(an, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, Ek)) : Fe("", !0)
    ], 6));
  }
}), Hf = Symbol("__vc_page_context__");
function Tk(e) {
  const { locale: t, getDateAddress: r, canMove: n } = Fr();
  function o(i, l) {
    const { month: c, year: u } = r(/* @__PURE__ */ new Date());
    return kf().map((f, d) => {
      const h = d + 1;
      return {
        month: h,
        year: i,
        id: _M(h, i),
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
  function a(i, l) {
    const { year: c } = r(/* @__PURE__ */ new Date()), { position: u } = e.value, f = [];
    for (let d = i; d <= l; d += 1) {
      const h = [...Array(12).keys()].some(
        (g) => n({ month: g + 1, year: d }, { position: u })
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
  const s = { page: e, getMonthItems: o, getYearItems: a };
  return Yr(Hf, s), s;
}
function jf() {
  const e = Gt(Hf);
  if (e)
    return e;
  throw new Error(
    "Page context missing. Please verify this component is nested within a valid context provider."
  );
}
const Pk = { class: "vc-nav-header" }, $k = ["disabled"], Yk = ["disabled"], Nk = { class: "vc-nav-items" }, Rk = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], Lk = /* @__PURE__ */ We({
  __name: "CalendarNav",
  setup(e) {
    const { masks: t, move: r } = Fr(), { page: n, getMonthItems: o, getYearItems: a } = jf(), s = be(!0), i = 12, l = be(n.value.year), c = be(d(n.value.year)), u = be(null);
    function f() {
      setTimeout(() => {
        if (u.value == null)
          return;
        const q = u.value.querySelector(
          ".vc-nav-item:not(:disabled)"
        );
        q && q.focus();
      }, 10);
    }
    function d(q) {
      return Math.floor(q / i);
    }
    function h() {
      s.value = !s.value;
    }
    function g(q) {
      return q * i;
    }
    function b(q) {
      return i * (q + 1) - 1;
    }
    function A() {
      re.value && (s.value && H(), I());
    }
    function y() {
      ae.value && (s.value && R(), C());
    }
    function H() {
      l.value--;
    }
    function R() {
      l.value++;
    }
    function I() {
      c.value--;
    }
    function C() {
      c.value++;
    }
    const Q = D(
      () => o(l.value, t.value.navMonths).map((q) => ({
        ...q,
        click: () => r(
          { month: q.month, year: q.year },
          { position: n.value.position }
        )
      }))
    ), j = D(
      () => o(l.value - 1, t.value.navMonths)
    ), x = D(
      () => j.value.some((q) => !q.isDisabled)
    ), F = D(
      () => o(l.value + 1, t.value.navMonths)
    ), B = D(
      () => F.value.some((q) => !q.isDisabled)
    ), V = D(
      () => a(
        g(c.value),
        b(c.value)
      ).map((q) => ({
        ...q,
        click: () => {
          l.value = q.year, s.value = !0, f();
        }
      }))
    ), _ = D(
      () => a(
        g(c.value - 1),
        b(c.value - 1)
      )
    ), L = D(
      () => _.value.some((q) => !q.isDisabled)
    ), ne = D(
      () => a(
        g(c.value + 1),
        b(c.value + 1)
      )
    ), K = D(
      () => ne.value.some((q) => !q.isDisabled)
    ), ee = D(
      () => s.value ? Q.value : V.value
    ), re = D(
      () => s.value ? x.value : L.value
    ), ae = D(
      () => s.value ? B.value : K.value
    ), he = D(() => lf(V.value.map((q) => q.year))), P = D(() => zr(V.value.map((q) => q.year))), de = D(() => s.value ? l.value : `${he.value} - ${P.value}`);
    return zc(() => {
      l.value = n.value.year, f();
    }), je(
      () => l.value,
      (q) => c.value = d(q)
    ), $r(() => f()), (q, Ie) => (G(), oe("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: u
    }, [
      J("div", Pk, [
        J("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !E(re),
          onClick: A,
          onKeydown: Ie[0] || (Ie[0] = (ge) => E(co)(ge, A))
        }, [
          le(ht, {
            name: "nav-prev-button",
            move: A,
            disabled: !E(re)
          }, {
            default: Ye(() => [
              le(an, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 40, $k),
        J("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: h,
          onKeydown: Ie[1] || (Ie[1] = (ge) => E(co)(ge, h))
        }, Le(E(de)), 33),
        J("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !E(ae),
          onClick: y,
          onKeydown: Ie[2] || (Ie[2] = (ge) => E(co)(ge, y))
        }, [
          le(ht, {
            name: "nav-next-button",
            move: y,
            disabled: !E(ae)
          }, {
            default: Ye(() => [
              le(an, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 40, Yk)
      ]),
      J("div", Nk, [
        (G(!0), oe(we, null, gt(E(ee), (ge) => (G(), oe("button", {
          key: ge.label,
          type: "button",
          "data-id": ge.id,
          "aria-label": ge.ariaLabel,
          class: xe(["vc-nav-item vc-focus", [
            ge.isActive ? "is-active" : ge.isCurrent ? "is-current" : ""
          ]]),
          disabled: ge.isDisabled,
          onClick: ge.click,
          onKeydown: (Ee) => E(co)(Ee, ge.click)
        }, Le(ge.label), 43, Rk))), 128))
      ])
    ], 512));
  }
}), Wf = /* @__PURE__ */ We({
  __name: "CalendarPageProvider",
  props: {
    page: null
  },
  setup(e) {
    return Tk(ho(e, "page")), (r, n) => Vn(r.$slots, "default");
  }
}), Fk = /* @__PURE__ */ We({
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: r, displayMode: n } = Fr();
    return (o, a) => (G(), Ve(ri, {
      id: E(t),
      class: xe(["vc-nav-popover-container", `vc-${E(r)}`, `vc-${E(n)}`])
    }, {
      default: Ye(({ data: s }) => [
        le(Wf, {
          page: s.page
        }, {
          default: Ye(() => [
            le(ht, { name: "nav" }, {
              default: Ye(() => [
                le(Lk)
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
}), Bk = /* @__PURE__ */ We({
  directives: { popover: Tf },
  components: { CalendarSlot: ht },
  props: {
    day: { type: Object, required: !0 }
  },
  setup(e) {
    const {
      locale: t,
      theme: r,
      attributeContext: n,
      dayPopoverId: o,
      onDayClick: a,
      onDayMouseenter: s,
      onDayMouseleave: i,
      onDayFocusin: l,
      onDayFocusout: c,
      onDayKeydown: u
    } = Fr(), f = D(() => e.day), d = D(() => n.value.getCells(f.value)), h = D(
      () => d.value.map((K) => K.data)
    ), g = D(() => ({
      ...f.value,
      attributes: h.value,
      attributeCells: d.value
    }));
    function b({ data: K }, { popovers: ee }) {
      const { key: re, customData: ae, popover: he } = K;
      if (!he)
        return;
      const P = El(
        {
          key: re,
          customData: ae,
          attribute: K
        },
        { ...he },
        {
          visibility: he.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !he.label
        }
      );
      ee.splice(0, 0, P);
    }
    const A = D(() => {
      const K = {
        ...r.value.prepareRender({}),
        popovers: []
      };
      return d.value.forEach((ee) => {
        r.value.render(ee, K), b(ee, K);
      }), K;
    }), y = D(() => A.value.highlights), H = D(() => !!Ht(y.value)), R = D(() => A.value.content), I = D(() => A.value.dots), C = D(() => !!Ht(I.value)), Q = D(() => A.value.bars), j = D(() => !!Ht(Q.value)), x = D(() => A.value.popovers), F = D(
      () => x.value.map((K) => K.attribute)
    ), B = Ff("day-content"), V = D(() => [
      "vc-day",
      ...f.value.classes,
      { "vc-day-box-center-center": !B },
      { "is-not-in-month": !e.day.inMonth }
    ]), _ = D(() => {
      let K;
      f.value.isFocusable ? K = "0" : K = "-1";
      const ee = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": f.value.isDisabled },
        Cr(zr(y.value), "contentClass"),
        Cr(zr(R.value), "class") || ""
      ], re = {
        ...Cr(zr(y.value), "contentStyle"),
        ...Cr(zr(R.value), "style")
      };
      return {
        class: ee,
        style: re,
        tabindex: K,
        "aria-label": f.value.ariaLabel,
        "aria-disabled": !!f.value.isDisabled,
        role: "button"
      };
    }), L = D(() => ({
      click(K) {
        a(g.value, K);
      },
      mouseenter(K) {
        s(g.value, K);
      },
      mouseleave(K) {
        i(g.value, K);
      },
      focusin(K) {
        l(g.value, K);
      },
      focusout(K) {
        c(g.value, K);
      },
      keydown(K) {
        u(g.value, K);
      }
    })), ne = D(() => Ht(x.value) ? El(
      {
        id: o.value,
        data: { day: f, attributes: F.value }
      },
      ...x.value
    ) : null);
    return {
      attributes: h,
      attributeCells: d,
      bars: Q,
      dayClasses: V,
      dayContentProps: _,
      dayContentEvents: L,
      dayPopover: ne,
      glyphs: A,
      dots: I,
      hasDots: C,
      hasBars: j,
      highlights: y,
      hasHighlights: H,
      locale: t,
      popovers: x
    };
  }
}), Uk = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, Hk = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, jk = { class: "vc-dots" }, Wk = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, zk = { class: "vc-bars" };
function Gk(e, t, r, n, o, a) {
  const s = Et("CalendarSlot"), i = ov("popover");
  return G(), oe("div", {
    class: xe(e.dayClasses)
  }, [
    e.hasHighlights ? (G(), oe("div", Uk, [
      (G(!0), oe(we, null, gt(e.highlights, ({ key: l, wrapperClass: c, class: u, style: f }) => (G(), oe("div", {
        key: l,
        class: xe(c)
      }, [
        J("div", {
          class: xe(u),
          style: jt(f)
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
      default: Ye(() => [
        En((G(), oe("div", Nr(e.dayContentProps, Av(e.dayContentEvents, !0)), [
          Zo(Le(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (G(), oe("div", Hk, [
      J("div", jk, [
        (G(!0), oe(we, null, gt(e.dots, ({ key: l, class: c, style: u }) => (G(), oe("span", {
          key: l,
          class: xe(c),
          style: jt(u)
        }, null, 6))), 128))
      ])
    ])) : Fe("", !0),
    e.hasBars ? (G(), oe("div", Wk, [
      J("div", zk, [
        (G(!0), oe(we, null, gt(e.bars, ({ key: l, class: c, style: u }) => (G(), oe("span", {
          key: l,
          class: xe(c),
          style: jt(u)
        }, null, 6))), 128))
      ])
    ])) : Fe("", !0)
  ], 2);
}
const Vk = /* @__PURE__ */ hr(Bk, [["render", Gk]]), Kk = { class: "vc-weekdays" }, Qk = ["onClick"], qk = {
  inheritAttrs: !1
}, Zk = /* @__PURE__ */ We({
  ...qk,
  __name: "CalendarPage",
  setup(e) {
    const { page: t } = jf(), { onWeeknumberClick: r } = Fr();
    return (n, o) => (G(), oe("div", {
      class: xe([
        "vc-pane",
        `row-${E(t).row}`,
        `row-from-end-${E(t).rowFromEnd}`,
        `column-${E(t).column}`,
        `column-from-end-${E(t).columnFromEnd}`
      ]),
      ref: "pane"
    }, [
      le(Uf, {
        page: E(t),
        "is-lg": "",
        "hide-arrows": ""
      }, null, 8, ["page"]),
      J("div", {
        class: xe(["vc-weeks", {
          [`vc-show-weeknumbers-${E(t).weeknumberPosition}`]: E(t).weeknumberPosition
        }])
      }, [
        J("div", Kk, [
          (G(!0), oe(we, null, gt(E(t).weekdays, ({ weekday: a, label: s }, i) => (G(), oe("div", {
            key: i,
            class: xe(`vc-weekday vc-weekday-${a}`)
          }, Le(s), 3))), 128))
        ]),
        (G(!0), oe(we, null, gt(E(t).viewWeeks, (a) => (G(), oe("div", {
          key: `weeknumber-${a.weeknumber}`,
          class: "vc-week"
        }, [
          E(t).weeknumberPosition ? (G(), oe("div", {
            key: 0,
            class: xe(["vc-weeknumber", `is-${E(t).weeknumberPosition}`])
          }, [
            J("span", {
              class: xe(["vc-weeknumber-content"]),
              onClick: (s) => E(r)(a, s)
            }, Le(a.weeknumberDisplay), 9, Qk)
          ], 2)) : Fe("", !0),
          (G(!0), oe(we, null, gt(a.days, (s) => (G(), Ve(Vk, {
            key: s.id,
            day: s
          }, null, 8, ["day"]))), 128))
        ]))), 128))
      ], 2)
    ], 2));
  }
}), Jk = /* @__PURE__ */ We({
  components: {
    CalendarHeader: Uf,
    CalendarPage: Zk,
    CalendarNavPopover: Fk,
    CalendarDayPopover: rk,
    CalendarPageProvider: Wf,
    CalendarSlot: ht
  },
  props: WO,
  emit: zO,
  setup(e, { emit: t, slots: r }) {
    return GO(e, { emit: t, slots: r });
  }
}), Xk = { class: "vc-pane-header-wrapper" };
function eI(e, t, r, n, o, a) {
  const s = Et("CalendarHeader"), i = Et("CalendarPage"), l = Et("CalendarSlot"), c = Et("CalendarPageProvider"), u = Et("CalendarDayPopover"), f = Et("CalendarNavPopover");
  return G(), oe(we, null, [
    J("div", Nr({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = Ep(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      J("div", {
        class: xe(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        J("div", Xk, [
          e.firstPage ? (G(), Ve(s, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : Fe("", !0)
        ]),
        le(ea, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: Ye(() => [
            (G(), oe("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: jt({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (G(!0), oe(we, null, gt(e.pages, (d) => (G(), Ve(c, {
                key: d.id,
                page: d
              }, {
                default: Ye(() => [
                  le(l, {
                    name: "page",
                    page: d
                  }, {
                    default: Ye(() => [
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
const tI = /* @__PURE__ */ hr(Jk, [["render", eI]]), zf = Symbol("__vc_date_picker_context__"), rI = {
  ...Yf,
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
}, nI = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function oI(e, { emit: t, slots: r }) {
  Lf(r, { footer: "dp-footer" });
  const n = Nf(e), { locale: o, masks: a, disabledAttribute: s } = n, i = be(!1), l = be(Symbol()), c = be(null), u = be(null), f = be(["", ""]), d = be(null), h = be(null);
  let g, b, A = !0;
  const y = D(() => e.isRange || e.modelModifiers.range === !0), H = D(
    () => y.value && c.value != null ? c.value.start : null
  ), R = D(
    () => y.value && c.value != null ? c.value.end : null
  ), I = D(() => e.mode.toLowerCase() === "date"), C = D(
    () => e.mode.toLowerCase() === "datetime"
  ), Q = D(() => e.mode.toLowerCase() === "time"), j = D(() => !!u.value), x = D(() => {
    let p = "date";
    e.modelModifiers.number && (p = "number"), e.modelModifiers.string && (p = "string");
    const k = a.value.modelValue || "iso";
    return Ie({ type: p, mask: k });
  }), F = D(
    () => $(u.value ?? c.value)
  ), B = D(() => Q.value ? e.is24hr ? a.value.inputTime24hr : a.value.inputTime : C.value ? e.is24hr ? a.value.inputDateTime24hr : a.value.inputDateTime : a.value.input), V = D(() => /[Hh]/g.test(B.value)), _ = D(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(B.value)
  ), L = D(() => {
    if (V.value && _.value)
      return "dateTime";
    if (_.value)
      return "date";
    if (V.value)
      return "time";
  }), ne = D(() => {
    var p;
    const k = ((p = d.value) == null ? void 0 : p.$el.previousElementSibling) ?? void 0;
    return zn({}, e.popover, fr("datePicker.popover"), {
      target: k
    });
  }), K = D(
    () => Ef({
      ...ne.value,
      id: l.value
    })
  ), ee = D(() => y.value ? {
    start: f.value[0],
    end: f.value[1]
  } : f.value[0]), re = D(() => {
    const p = ["start", "end"].map((k) => ({
      input: M(k),
      change: Y(k),
      keyup: U,
      ...e.popover && K.value
    }));
    return y.value ? {
      start: p[0],
      end: p[1]
    } : p[0];
  }), ae = D(() => {
    if (!Me(c.value))
      return null;
    const p = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: c.value,
      pinPage: !0
    }, { dot: k, bar: z, highlight: fe, content: Se } = p;
    return !k && !z && !fe && !Se && (p.highlight = !0), p;
  }), he = D(() => {
    if (!y.value || !Me(u.value))
      return null;
    const p = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: u.value
    }, { dot: k, bar: z, highlight: fe, content: Se } = p;
    return !k && !z && !fe && !Se && (p.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), p;
  }), P = D(() => {
    const p = wt(e.attributes) ? [...e.attributes] : [];
    return he.value ? p.unshift(he.value) : ae.value && p.unshift(ae.value), p;
  }), de = D(() => Ie(
    e.rules === "auto" ? q() : e.rules ?? {}
  ));
  function q() {
    const p = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, k = I.value ? 0 : e.timeAccuracy;
    return [0, 1].map((z) => {
      switch (k) {
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
  function ge(p) {
    return Ie(p).map(
      (k, z) => ({
        ...k,
        rules: de.value[z]
      })
    );
  }
  function Ee(p) {
    return p == null ? !1 : Ct(p) ? !isNaN(p) : qr(p) ? !isNaN(p.getTime()) : $t(p) ? p !== "" : Js(p);
  }
  function De(p) {
    return Qt(p) && "start" in p && "end" in p && Ee(p.start ?? null) && Ee(p.end ?? null);
  }
  function Me(p) {
    return De(p) || Ee(p);
  }
  function Ne(p, k) {
    if (p == null && k == null)
      return !0;
    if (p == null || k == null)
      return !1;
    const z = qr(p), fe = qr(k);
    return z && fe ? p.getTime() === k.getTime() : z || fe ? !1 : Ne(p.start, k.start) && Ne(p.end, k.end);
  }
  function Re(p) {
    return !Me(p) || !s.value ? !1 : s.value.intersectsRange(o.value.range(p));
  }
  function lt(p, k, z, fe) {
    if (!Me(p))
      return null;
    if (De(p)) {
      const Se = o.value.toDate(p.start, {
        ...k[0],
        fillDate: H.value ?? void 0,
        patch: z
      }), Xe = o.value.toDate(p.end, {
        ...k[1],
        fillDate: R.value ?? void 0,
        patch: z
      });
      return mr({ start: Se, end: Xe }, fe);
    }
    return o.value.toDateOrNull(p, {
      ...k[0],
      fillDate: c.value,
      patch: z
    });
  }
  function Ze(p, k) {
    return De(p) ? {
      start: o.value.fromDate(p.start, k[0]),
      end: o.value.fromDate(p.end, k[1])
    } : y.value ? null : o.value.fromDate(p, k[0]);
  }
  function v(p, k = {}) {
    return clearTimeout(g), new Promise((z) => {
      const { debounce: fe = 0, ...Se } = k;
      fe > 0 ? g = window.setTimeout(() => {
        z(m(p, Se));
      }, fe) : z(m(p, Se));
    });
  }
  function m(p, {
    config: k = x.value,
    patch: z = "dateTime",
    clearIfEqual: fe = !1,
    formatInput: Se = !0,
    hidePopover: Xe = !1,
    dragging: ct = j.value,
    targetPriority: Ur,
    moveToValue: Hr = !1
  } = {}) {
    const ca = ge(k);
    let nt = lt(
      p,
      ca,
      z,
      Ur
    );
    if (Re(nt)) {
      if (ct)
        return null;
      nt = c.value, Xe = !1;
    } else
      nt == null && e.isRequired ? nt = c.value : (
        // Clear value if same value was passed
        nt != null && Ne(c.value, nt) && fe && (nt = null)
      );
    const Jn = ct ? u : c, gn = !Ne(Jn.value, nt);
    Jn.value = nt, ct || (u.value = null);
    const yn = Ze(
      nt,
      x.value
    );
    return gn && (A = !1, t(ct ? "drag" : "update:modelValue", yn), xr(() => A = !0)), Xe && !ct && ze(), Se && w(), Hr && xr(() => He(Ur ?? "start")), yn;
  }
  function w() {
    xr(() => {
      const p = ge({
        type: "string",
        mask: B.value
      }), k = Ze(
        u.value ?? c.value,
        p
      );
      y.value ? f.value = [k && k.start, k && k.end] : f.value = [k, ""];
    });
  }
  function O(p, k, z) {
    f.value.splice(k === "start" ? 0 : 1, 1, p);
    const fe = y.value ? {
      start: f.value[0],
      end: f.value[1] || f.value[0]
    } : p, Se = {
      type: "string",
      mask: B.value
    };
    v(fe, {
      ...z,
      config: Se,
      patch: L.value,
      targetPriority: k,
      moveToValue: !0
    });
  }
  function M(p) {
    return (k) => {
      e.updateOnInput && O(k.currentTarget.value, p, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function Y(p) {
    return (k) => {
      O(k.currentTarget.value, p, {
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
  function $(p) {
    return y.value ? [
      p && p.start ? o.value.getDateParts(p.start) : null,
      p && p.end ? o.value.getDateParts(p.end) : null
    ] : [p ? o.value.getDateParts(p) : null];
  }
  function N() {
    u.value = null, w();
  }
  function S(p) {
    t("popover-will-show", p);
  }
  function W(p) {
    t("popover-did-show", p);
  }
  function X(p) {
    N(), t("popover-will-hide", p);
  }
  function Z(p) {
    t("popover-did-hide", p);
  }
  function se(p) {
    const k = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (y.value) {
      const z = !j.value;
      z ? b = { start: p.startDate, end: p.endDate } : b != null && (b.end = p.date), v(b, {
        ...k,
        dragging: z
      });
    } else
      v(p.date, {
        ...k,
        clearIfEqual: !e.isRequired
      });
  }
  function ce(p, k) {
    se(p), t("dayclick", p, k);
  }
  function ve(p, k) {
    switch (k.key) {
      case " ":
      case "Enter": {
        se(p), k.preventDefault();
        break;
      }
      case "Escape":
        ze();
    }
    t("daykeydown", p, k);
  }
  function ye(p, k) {
    !j.value || b == null || (b.end = p.date, v(mr(b), {
      patch: "date",
      formatInput: !0
    }));
  }
  function Te(p = {}) {
    ns({
      ...ne.value,
      ...p,
      isInteractive: !0,
      id: l.value
    });
  }
  function ze(p = {}) {
    Gn({
      hideDelay: 10,
      force: !0,
      ...ne.value,
      ...p,
      id: l.value
    });
  }
  function kt(p) {
    Sf({
      ...ne.value,
      ...p,
      isInteractive: !0,
      id: l.value
    });
  }
  function mr(p, k) {
    const { start: z, end: fe } = p;
    if (z > fe)
      switch (k) {
        case "start":
          return { start: z, end: z };
        case "end":
          return { start: fe, end: fe };
        default:
          return { start: fe, end: z };
      }
    return { start: z, end: fe };
  }
  async function It(p, k = {}) {
    return h.value == null ? !1 : h.value.move(p, k);
  }
  async function Br(p, k = {}) {
    return h.value == null ? !1 : h.value.moveBy(p, k);
  }
  async function He(p, k = {}) {
    const z = c.value;
    if (h.value == null || !Me(z))
      return !1;
    const fe = p !== "end", Se = fe ? 1 : -1, Xe = De(z) ? fe ? z.start : z.end : z, ct = pf(Xe, "monthly", o.value);
    return h.value.move(ct, { position: Se, ...k });
  }
  je(
    () => e.isRange,
    (p) => {
      p && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), je(
    () => y.value,
    () => {
      m(null, { formatInput: !0 });
    }
  ), je(
    () => B.value,
    () => w()
  ), je(
    () => e.modelValue,
    (p) => {
      A && m(p, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), je(
    () => de.value,
    () => {
      Qt(e.rules) && m(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), je(
    () => e.timezone,
    () => {
      m(c.value, { formatInput: !0 });
    }
  );
  const Je = Ie(x.value);
  c.value = lt(
    e.modelValue ?? null,
    Je,
    "dateTime"
  ), $r(() => {
    m(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), xr(() => i.value = !0);
  const T = {
    ...n,
    showCalendar: i,
    datePickerPopoverId: l,
    popoverRef: d,
    popoverEvents: K,
    calendarRef: h,
    isRange: y,
    isTimeMode: Q,
    isDateTimeMode: C,
    is24hr: ho(e, "is24hr"),
    hideTimeHeader: ho(e, "hideTimeHeader"),
    timeAccuracy: ho(e, "timeAccuracy"),
    isDragging: j,
    inputValue: ee,
    inputEvents: re,
    dateParts: F,
    attributes: P,
    rules: de,
    move: It,
    moveBy: Br,
    moveToValue: He,
    updateValue: v,
    showPopover: Te,
    hidePopover: ze,
    togglePopover: kt,
    onDayClick: ce,
    onDayKeydown: ve,
    onDayMouseEnter: ye,
    onPopoverBeforeShow: S,
    onPopoverAfterShow: W,
    onPopoverBeforeHide: X,
    onPopoverAfterHide: Z
  };
  return Yr(zf, T), T;
}
function ni() {
  const e = Gt(zf);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const aI = [
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
], sI = [
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
function iI(e) {
  const t = ni(), {
    locale: r,
    isRange: n,
    isTimeMode: o,
    dateParts: a,
    rules: s,
    is24hr: i,
    hideTimeHeader: l,
    timeAccuracy: c,
    updateValue: u
  } = t;
  function f(_) {
    _ = Object.assign(h.value, _);
    let L = null;
    if (n.value) {
      const ne = d.value ? _ : a.value[0], K = d.value ? a.value[1] : _;
      L = { start: ne, end: K };
    } else
      L = _;
    u(L, {
      patch: "time",
      targetPriority: d.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const d = D(() => e.position === 0), h = D(
    () => a.value[e.position] || { isValid: !1 }
  ), g = D(() => Js(h.value)), b = D(() => !!h.value.isValid), A = D(() => !l.value && b.value), y = D(() => {
    if (!g.value)
      return null;
    let _ = r.value.toDate(h.value);
    return h.value.hours === 24 && (_ = new Date(_.getTime() - 1)), _;
  }), H = D({
    get() {
      return h.value.hours;
    },
    set(_) {
      f({ hours: _ });
    }
  }), R = D({
    get() {
      return h.value.minutes;
    },
    set(_) {
      f({ minutes: _ });
    }
  }), I = D({
    get() {
      return h.value.seconds;
    },
    set(_) {
      f({ seconds: _ });
    }
  }), C = D({
    get() {
      return h.value.milliseconds;
    },
    set(_) {
      f({ milliseconds: _ });
    }
  }), Q = D({
    get() {
      return h.value.hours < 12;
    },
    set(_) {
      _ = String(_).toLowerCase() == "true";
      let L = H.value;
      _ && L >= 12 ? L -= 12 : !_ && L < 12 && (L += 12), f({ hours: L });
    }
  }), j = D(
    () => CO(h.value, s.value[e.position])
  ), x = D(() => aI.filter(
    (_) => j.value.hours.some((L) => L.value === _.value)
  )), F = D(() => sI.filter(
    (_) => j.value.hours.some((L) => L.value === _.value)
  )), B = D(() => i.value ? j.value.hours : Q.value ? x.value : F.value), V = D(() => {
    const _ = [];
    return Ht(x.value) && _.push({ value: !0, label: "AM" }), Ht(F.value) && _.push({ value: !1, label: "PM" }), _;
  });
  return {
    ...t,
    showHeader: A,
    timeAccuracy: c,
    parts: h,
    isValid: b,
    date: y,
    hours: H,
    minutes: R,
    seconds: I,
    milliseconds: C,
    options: j,
    hourOptions: B,
    isAM: Q,
    isAMOptions: V,
    is24hr: i
  };
}
const lI = ["value"], cI = ["value", "disabled"], uI = {
  key: 1,
  class: "vc-base-sizer",
  "aria-hidden": "true"
}, fI = {
  inheritAttrs: !1
}, xn = /* @__PURE__ */ We({
  ...fI,
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
    const t = e, r = D(() => {
      const n = t.options.find((o) => o.value === t.modelValue);
      return n == null ? void 0 : n.label;
    });
    return (n, o) => (G(), oe("div", {
      class: xe(["vc-base-select", {
        "vc-fit-content": e.fitContent,
        "vc-has-icon": e.showIcon
      }])
    }, [
      J("select", Nr(n.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft
        }],
        onChange: o[0] || (o[0] = (a) => n.$emit("update:modelValue", a.target.value))
      }), [
        (G(!0), oe(we, null, gt(e.options, (a) => (G(), oe("option", {
          key: a.value,
          value: a.value,
          disabled: a.disabled
        }, Le(a.label), 9, cI))), 128))
      ], 16, lI),
      e.showIcon ? (G(), Ve(an, {
        key: 0,
        name: "ChevronDown",
        size: "18"
      })) : Fe("", !0),
      e.fitContent ? (G(), oe("div", uI, Le(E(r)), 1)) : Fe("", !0)
    ], 2));
  }
}), dI = {
  key: 0,
  class: "vc-time-header"
}, vI = { class: "vc-time-weekday" }, pI = { class: "vc-time-month" }, hI = { class: "vc-time-day" }, mI = { class: "vc-time-year" }, gI = { class: "vc-time-select-group" }, yI = /* @__PURE__ */ J("span", { class: "vc-time-colon" }, ":", -1), bI = /* @__PURE__ */ J("span", { class: "vc-time-colon" }, ":", -1), wI = /* @__PURE__ */ J("span", { class: "vc-time-decimal" }, ".", -1), sc = /* @__PURE__ */ We({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const n = iI(e);
    t(n);
    const {
      locale: o,
      isValid: a,
      date: s,
      hours: i,
      minutes: l,
      seconds: c,
      milliseconds: u,
      options: f,
      hourOptions: d,
      isTimeMode: h,
      isAM: g,
      isAMOptions: b,
      is24hr: A,
      showHeader: y,
      timeAccuracy: H
    } = n;
    return (R, I) => (G(), oe("div", {
      class: xe(["vc-time-picker", [{ "vc-invalid": !E(a), "vc-attached": !E(h) }]])
    }, [
      le(ht, { name: "time-header" }, {
        default: Ye(() => [
          E(y) && E(s) ? (G(), oe("div", dI, [
            J("span", vI, Le(E(o).formatDate(E(s), "WWW")), 1),
            J("span", pI, Le(E(o).formatDate(E(s), "MMM")), 1),
            J("span", hI, Le(E(o).formatDate(E(s), "D")), 1),
            J("span", mI, Le(E(o).formatDate(E(s), "YYYY")), 1)
          ])) : Fe("", !0)
        ]),
        _: 1
      }),
      J("div", gI, [
        le(an, {
          name: "Clock",
          size: "17"
        }),
        le(xn, {
          modelValue: E(i),
          "onUpdate:modelValue": I[0] || (I[0] = (C) => Pe(i) ? i.value = C : null),
          modelModifiers: { number: !0 },
          options: E(d),
          class: "vc-time-select-hours",
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        E(H) > 1 ? (G(), oe(we, { key: 0 }, [
          yI,
          le(xn, {
            modelValue: E(l),
            "onUpdate:modelValue": I[1] || (I[1] = (C) => Pe(l) ? l.value = C : null),
            modelModifiers: { number: !0 },
            options: E(f).minutes,
            class: "vc-time-select-minutes",
            "align-left": E(H) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Fe("", !0),
        E(H) > 2 ? (G(), oe(we, { key: 1 }, [
          bI,
          le(xn, {
            modelValue: E(c),
            "onUpdate:modelValue": I[2] || (I[2] = (C) => Pe(c) ? c.value = C : null),
            modelModifiers: { number: !0 },
            options: E(f).seconds,
            class: "vc-time-select-seconds",
            "align-left": E(H) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Fe("", !0),
        E(H) > 3 ? (G(), oe(we, { key: 2 }, [
          wI,
          le(xn, {
            modelValue: E(u),
            "onUpdate:modelValue": I[3] || (I[3] = (C) => Pe(u) ? u.value = C : null),
            modelModifiers: { number: !0 },
            options: E(f).milliseconds,
            class: "vc-time-select-milliseconds",
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : Fe("", !0),
        E(A) ? Fe("", !0) : (G(), Ve(xn, {
          key: 3,
          modelValue: E(g),
          "onUpdate:modelValue": I[4] || (I[4] = (C) => Pe(g) ? g.value = C : null),
          options: E(b)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), Gf = /* @__PURE__ */ We({
  __name: "DatePickerBase",
  setup(e) {
    const {
      attributes: t,
      calendarRef: r,
      color: n,
      displayMode: o,
      isDateTimeMode: a,
      isTimeMode: s,
      isRange: i,
      onDayClick: l,
      onDayMouseEnter: c,
      onDayKeydown: u
    } = ni(), f = i.value ? [0, 1] : [0];
    return (d, h) => E(s) ? (G(), oe("div", {
      key: 0,
      class: xe(`vc-container vc-bordered vc-${E(n)} vc-${E(o)}`)
    }, [
      (G(!0), oe(we, null, gt(E(f), (g) => (G(), Ve(sc, {
        key: g,
        position: g
      }, null, 8, ["position"]))), 128))
    ], 2)) : (G(), Ve(tI, {
      key: 1,
      attributes: E(t),
      ref_key: "calendarRef",
      ref: r,
      onDayclick: E(l),
      onDaymouseenter: E(c),
      onDaykeydown: E(u)
    }, {
      footer: Ye(() => [
        E(a) ? (G(!0), oe(we, { key: 0 }, gt(E(f), (g) => (G(), Ve(sc, {
          key: g,
          position: g
        }, null, 8, ["position"]))), 128)) : Fe("", !0),
        le(ht, { name: "dp-footer" })
      ]),
      _: 1
    }, 8, ["attributes", "onDayclick", "onDaymouseenter", "onDaykeydown"]));
  }
}), _I = {
  inheritAttrs: !1
}, DI = /* @__PURE__ */ We({
  ..._I,
  __name: "DatePickerPopover",
  setup(e) {
    const {
      datePickerPopoverId: t,
      color: r,
      displayMode: n,
      popoverRef: o,
      onPopoverBeforeShow: a,
      onPopoverAfterShow: s,
      onPopoverBeforeHide: i,
      onPopoverAfterHide: l
    } = ni();
    return (c, u) => (G(), Ve(ri, {
      id: E(t),
      placement: "bottom-start",
      class: xe(`vc-date-picker-content vc-${E(r)} vc-${E(n)}`),
      ref_key: "popoverRef",
      ref: o,
      onBeforeShow: E(a),
      onAfterShow: E(s),
      onBeforeHide: E(i),
      onAfterHide: E(l)
    }, {
      default: Ye(() => [
        le(Gf, In(ko(c.$attrs)), null, 16)
      ]),
      _: 1
    }, 8, ["id", "class", "onBeforeShow", "onAfterShow", "onBeforeHide", "onAfterHide"]));
  }
}), AI = /* @__PURE__ */ We({
  inheritAttrs: !1,
  emits: nI,
  props: rI,
  components: { DatePickerBase: Gf, DatePickerPopover: DI },
  setup(e, t) {
    const r = oI(e, t), n = Pr(uf(r, "calendarRef", "popoverRef"));
    return { ...r, slotCtx: n };
  }
});
function xI(e, t, r, n, o, a) {
  const s = Et("DatePickerPopover"), i = Et("DatePickerBase");
  return e.$slots.default ? (G(), oe(we, { key: 0 }, [
    Vn(e.$slots, "default", In(ko(e.slotCtx))),
    le(s, In(ko(e.$attrs)), null, 16)
  ], 64)) : (G(), Ve(i, In(Nr({ key: 1 }, e.$attrs)), null, 16));
}
const CI = /* @__PURE__ */ hr(AI, [["render", xI]]);
function os(e) {
  "@babel/helpers - typeof";
  return os = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, os(e);
}
function MI(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Zn(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function as(e) {
  Zn(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || os(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function ic(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function lc(e) {
  Zn(1, arguments);
  var t = as(e);
  return t.setHours(0, 0, 0, 0), t;
}
var OI = 864e5;
function kI(e, t) {
  Zn(2, arguments);
  var r = lc(e), n = lc(t), o = r.getTime() - ic(r), a = n.getTime() - ic(n);
  return Math.round((o - a) / OI);
}
var Vf = 6e4, Kf = 36e5;
function cc(e, t) {
  var r = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
  return r < 0 ? -1 : r > 0 ? 1 : r;
}
function II(e, t) {
  Zn(2, arguments);
  var r = as(e), n = as(t), o = cc(r, n), a = Math.abs(kI(r, n));
  r.setDate(r.getDate() - o * a);
  var s = +(cc(r, n) === -o), i = o * (a - s);
  return i === 0 ? 0 : i;
}
function uo(e, t) {
  var r;
  Zn(1, arguments);
  var n = MI((r = t == null ? void 0 : t.additionalDigits) !== null && r !== void 0 ? r : 2);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var o = PI(e), a;
  if (o.date) {
    var s = $I(o.date, n);
    a = YI(s.restDateString, s.year);
  }
  if (!a || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var i = a.getTime(), l = 0, c;
  if (o.time && (l = NI(o.time), isNaN(l)))
    return /* @__PURE__ */ new Date(NaN);
  if (o.timezone) {
    if (c = RI(o.timezone), isNaN(c))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var u = new Date(i + l), f = /* @__PURE__ */ new Date(0);
    return f.setFullYear(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()), f.setHours(u.getUTCHours(), u.getUTCMinutes(), u.getUTCSeconds(), u.getUTCMilliseconds()), f;
  }
  return new Date(i + l + c);
}
var fo = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, SI = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, EI = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, TI = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function PI(e) {
  var t = {}, r = e.split(fo.dateTimeDelimiter), n;
  if (r.length > 2)
    return t;
  if (/:/.test(r[0]) ? n = r[0] : (t.date = r[0], n = r[1], fo.timeZoneDelimiter.test(t.date) && (t.date = e.split(fo.timeZoneDelimiter)[0], n = e.substr(t.date.length, e.length))), n) {
    var o = fo.timezone.exec(n);
    o ? (t.time = n.replace(o[1], ""), t.timezone = o[1]) : t.time = n;
  }
  return t;
}
function $I(e, t) {
  var r = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), n = e.match(r);
  if (!n)
    return {
      year: NaN,
      restDateString: ""
    };
  var o = n[1] ? parseInt(n[1]) : null, a = n[2] ? parseInt(n[2]) : null;
  return {
    year: a === null ? o : a * 100,
    restDateString: e.slice((n[1] || n[2]).length)
  };
}
function YI(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var r = e.match(SI);
  if (!r)
    return /* @__PURE__ */ new Date(NaN);
  var n = !!r[4], o = Cn(r[1]), a = Cn(r[2]) - 1, s = Cn(r[3]), i = Cn(r[4]), l = Cn(r[5]) - 1;
  if (n)
    return HI(t, i, l) ? LI(t, i, l) : /* @__PURE__ */ new Date(NaN);
  var c = /* @__PURE__ */ new Date(0);
  return !BI(t, a, s) || !UI(t, o) ? /* @__PURE__ */ new Date(NaN) : (c.setUTCFullYear(t, a, Math.max(o, s)), c);
}
function Cn(e) {
  return e ? parseInt(e) : 1;
}
function NI(e) {
  var t = e.match(EI);
  if (!t)
    return NaN;
  var r = Sa(t[1]), n = Sa(t[2]), o = Sa(t[3]);
  return jI(r, n, o) ? r * Kf + n * Vf + o * 1e3 : NaN;
}
function Sa(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function RI(e) {
  if (e === "Z")
    return 0;
  var t = e.match(TI);
  if (!t)
    return 0;
  var r = t[1] === "+" ? -1 : 1, n = parseInt(t[2]), o = t[3] && parseInt(t[3]) || 0;
  return WI(n, o) ? r * (n * Kf + o * Vf) : NaN;
}
function LI(e, t, r) {
  var n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  var o = n.getUTCDay() || 7, a = (t - 1) * 7 + r + 1 - o;
  return n.setUTCDate(n.getUTCDate() + a), n;
}
var FI = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Qf(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function BI(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (FI[t] || (Qf(e) ? 29 : 28));
}
function UI(e, t) {
  return t >= 1 && t <= (Qf(e) ? 366 : 365);
}
function HI(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function jI(e, t, r) {
  return e === 24 ? t === 0 && r === 0 : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function WI(e, t) {
  return t >= 0 && t <= 59;
}
function zI() {
  return typeof window < "u";
}
function GI(e) {
  return zI() && e in window;
}
function uc({ "min-width": e, min: t = e, max: r, raw: n } = {}) {
  return { min: t, max: r, raw: n };
}
function qf(e, t = !0) {
  return Array.isArray(e) ? e.map((r) => {
    if (t && Array.isArray(r))
      throw new Error("The tuple syntax is not supported for `screens`.");
    if (typeof r == "string")
      return { name: r.toString(), values: [{ min: r, max: void 0 }] };
    let [n, o] = r;
    return n = n.toString(), typeof o == "string" ? { name: n, values: [{ min: o, max: void 0 }] } : Array.isArray(o) ? { name: n, values: o.map((a) => uc(a)) } : { name: n, values: [uc(o)] };
  }) : qf(Object.entries(e ?? {}), !1);
}
function VI(e) {
  return e.map((t) => t.raw !== void 0 ? t.raw : [t.min && `(min-width: ${t.min})`, t.max && `(max-width: ${t.max})`].filter(Boolean).join(" and ")).join(", ");
}
var KI = {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
const QI = "$screens";
function qI(e) {
  const t = Pr({
    screens: qf(e || KI),
    queries: {},
    matches: {},
    hasSetup: !1
  });
  function r() {
    Object.entries(t.queries).forEach(([l, c]) => {
      t.matches[l] = c.matches;
    });
  }
  function n(l) {
    return D(() => Object.keys(t.matches).filter((c) => t.matches[c] === !0 && l.hasOwnProperty(c)).map((c) => l[c]));
  }
  const o = D(() => Object.keys(t.matches).filter((l) => t.matches[l]));
  function a(l, c) {
    return D(() => {
      const u = s.value;
      return u && l.hasOwnProperty(u) ? l[u] : c;
    });
  }
  const s = D(() => {
    const l = o.value;
    return l.length ? l[l.length - 1] : "";
  });
  function i() {
    Object.values(t.queries).forEach((l) => l.removeEventListener("change", r)), t.queries = {}, t.matches = {};
  }
  return !t.hasSetup && GI("matchMedia") && (i(), t.queries = t.screens.reduce((l, { name: c, values: u }) => {
    const f = window.matchMedia(VI(u));
    return f.addEventListener("change", r), l[c] = f, l;
  }, {}), r(), t.hasSetup = !0), { matches: t.matches, list: o, mapList: n, current: s, mapCurrent: a, cleanup: i };
}
function ZI(e, t) {
  const r = qI(e);
  return Yr((t == null ? void 0 : t.injectKey) || QI, r), ln(() => r.cleanup()), r;
}
const JI = "data:image/png;base64,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", XI = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.flex{display:flex!important}.h-6{height:1.5rem!important}.h-2{height:.5rem!important}.h-4{height:1rem!important}.h-5{height:1.25rem!important}.w-full{width:100%!important}.w-2{width:.5rem!important}.w-4{width:1rem!important}.w-5{width:1.25rem!important}.w-fit{width:-moz-fit-content!important;width:fit-content!important}.cursor-pointer{cursor:pointer!important}.appearance-none{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important}.flex-col{flex-direction:column!important}.flex-wrap{flex-wrap:wrap!important}.items-end{align-items:flex-end!important}.items-center{align-items:center!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-4{gap:1rem!important}.break-words{overflow-wrap:break-word!important}.rounded-full{border-radius:9999px!important}.rounded-lg{border-radius:.5rem!important}.border{border-width:1px!important}.border-solid{border-style:solid!important}.border-none{border-style:none!important}.bg-booked{--tw-bg-opacity: 1 !important;background-color:rgb(150 3 3 / var(--tw-bg-opacity))!important}.bg-primary-blue\\/90{background-color:#0987c5e6!important}.bg-secondary-braun{--tw-bg-opacity: 1 !important;background-color:rgb(216 189 0 / var(--tw-bg-opacity))!important}.bg-white{--tw-bg-opacity: 1 !important;background-color:rgb(255 255 255 / var(--tw-bg-opacity))!important}.object-contain{-o-object-fit:contain!important;object-fit:contain!important}.p-2{padding:.5rem!important}.p-4{padding:1rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.text-center{text-align:center!important}.text-sm{font-size:.875rem!important;line-height:1.25rem!important}.text-xs{font-size:.75rem!important;line-height:1rem!important}.font-medium{font-weight:500!important}.font-normal{font-weight:400!important}.font-semibold{font-weight:600!important}.tabular-nums{--tw-numeric-spacing: tabular-nums !important;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)!important}.text-gray-700{--tw-text-opacity: 1 !important;color:rgb(55 65 81 / var(--tw-text-opacity))!important}.text-primary-braun{--tw-text-opacity: 1 !important;color:rgb(107 63 18 / var(--tw-text-opacity))!important}.text-red-500{--tw-text-opacity: 1 !important;color:rgb(239 68 68 / var(--tw-text-opacity))!important}.text-white{--tw-text-opacity: 1 !important;color:rgb(255 255 255 / var(--tw-text-opacity))!important}.no-underline{text-decoration-line:none!important}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1) !important;--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)!important}.duration-300{transition-duration:.3s!important}.hover\\:bg-primary-blue:hover{--tw-bg-opacity: 1 !important;background-color:rgb(9 135 197 / var(--tw-bg-opacity))!important}.hover\\:bg-secondary-blue\\/40:hover{background-color:#75bce166!important}@media not all and (min-width: 768px){.max-md\\:flex-wrap{flex-wrap:wrap!important}}@media not all and (min-width: 640px){.max-sm\\:flex-wrap{flex-wrap:wrap!important}}.vc-popover-content-wrapper{--popover-horizontal-content-offset: 8px;--popover-vertical-content-offset: 10px;--popover-caret-horizontal-offset: 18px;--popover-caret-vertical-offset: 8px;position:absolute;display:block;outline:none;z-index:10}.vc-popover-content-wrapper:not(.is-interactive){pointer-events:none}.vc-popover-content{position:relative;color:var(--vc-popover-content-color);font-weight:var(--vc-font-medium);background-color:var(--vc-popover-content-bg);border:1px solid;border-color:var(--vc-popover-content-border);border-radius:var(--vc-rounded-lg);padding:4px;outline:none;z-index:10;box-shadow:var(--vc-shadow-lg)}.vc-popover-content.direction-bottom{margin-top:var(--popover-vertical-content-offset)}.vc-popover-content.direction-top{margin-bottom:var(--popover-vertical-content-offset)}.vc-popover-content.direction-left{margin-right:var(--popover-horizontal-content-offset)}.vc-popover-content.direction-right{margin-left:var(--popover-horizontal-content-offset)}.vc-popover-caret{content:"";position:absolute;display:block;width:12px;height:12px;border-top:inherit;border-left:inherit;background-color:inherit;z-index:-1}.vc-popover-caret.direction-bottom{top:0}.vc-popover-caret.direction-bottom.align-left{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-center{transform:translate(-50%) translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-right{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-top{top:100%}.vc-popover-caret.direction-top.align-left{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-center{transform:translate(-50%) translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-right{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-left{left:100%}.vc-popover-caret.direction-left.align-top{transform:translate(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-middle{transform:translateY(-50%) translate(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-bottom{transform:translate(-50%) rotate(135deg)}.vc-popover-caret.direction-right{left:0}.vc-popover-caret.direction-right.align-top{transform:translate(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-middle{transform:translateY(-50%) translate(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-bottom{transform:translate(-50%) rotate(-45deg)}.vc-popover-caret.align-left{left:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-center{left:50%}.vc-popover-caret.align-right{right:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-top{top:var(--popover-caret-vertical-offset)}.vc-popover-caret.align-middle{top:50%}.vc-popover-caret.align-bottom{bottom:var(--popover-caret-vertical-offset)}.vc-day-popover-row{display:flex;align-items:center;transition:var(--vc-day-content-transition)}.vc-day-popover-row-indicator{display:flex;justify-content:center;align-items:center;flex-grow:0;width:15px}.vc-day-popover-row-indicator span{transition:var(--vc-day-content-transition)}.vc-day-popover-row-label{display:flex;align-items:center;flex-wrap:none;flex-grow:1;width:-moz-max-content;width:max-content;margin-left:4px;margin-right:4px;font-size:var(--vc-text-xs);line-height:var(--vc-leading-normal)}.vc-day-popover-row-highlight{width:8px;height:5px;border-radius:3px}.vc-day-popover-row-bar{width:10px;height:3px}.vc-base-icon{display:inline-block;stroke:currentColor;stroke-width:2;fill:none}.vc-header{display:grid;grid-gap:4px;align-items:center;height:30px;margin-top:10px;padding-left:10px;padding-right:10px}.vc-header.is-lg{font-size:var(--vc-text-lg)}.vc-header.is-xl{font-size:var(--vc-text-xl)}.vc-header.is-2xl{font-size:var(--vc-text-2xl)}.vc-header .vc-title-wrapper{grid-row:1;grid-column:title}.vc-header .vc-prev{grid-row:1;grid-column:prev}.vc-header .vc-next{grid-row:1;grid-column:next}.vc-header .vc-title,.vc-header .vc-prev,.vc-header .vc-next{display:flex;align-items:center;border:0;border-radius:var(--vc-rounded);pointer-events:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.vc-header .vc-title{color:var(--vc-header-title-color);font-weight:var(--vc-font-semibold);white-space:nowrap;padding:0 8px;margin:0;line-height:30px}.vc-header .vc-title:hover{opacity:.75}.vc-header .vc-arrow{display:flex;justify-content:center;align-items:center;color:var(--vc-header-arrow-color);width:28px;height:30px;margin:0;padding:0}.vc-header .vc-arrow:hover{background:var(--vc-header-arrow-hover-bg)}.vc-header .vc-arrow:disabled{opacity:.25;pointer-events:none}.vc-nav-header{display:flex;justify-content:space-between}.vc-nav-title,.vc-nav-arrow,.vc-nav-item{font-size:var(--vc-text-sm);margin:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:0;border-radius:var(--vc-rounded);white-space:nowrap}.vc-nav-title:hover,.vc-nav-arrow:hover,.vc-nav-item:hover{background-color:var(--vc-nav-hover-bg)}.vc-nav-title:disabled,.vc-nav-arrow:disabled,.vc-nav-item:disabled{opacity:.25;pointer-events:none}.vc-nav-title{color:var(--vc-nav-title-color);font-weight:var(--vc-font-bold);line-height:var(--vc-leading-snug);height:30px;padding:0 6px}.vc-nav-arrow{display:flex;justify-content:center;align-items:center;color:var(--vc-header-arrow-color);width:26px;height:30px;padding:0}.vc-nav-items{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:2px;grid-column-gap:5px;margin-top:2px}.vc-nav-item{width:48px;text-align:center;font-weight:var(--vc-font-semibold);line-height:var(--vc-leading-snug);padding:6px 0}.vc-nav-item.is-active{color:var(--vc-nav-item-active-color);background-color:var(--vc-nav-item-active-bg);font-weight:var(--vc-font-bold)}.vc-nav-item.is-active:not(:focus){box-shadow:var(--vc-nav-item-active-box-shadow)}.vc-nav-item.is-current{color:var(--vc-nav-item-current-color)}.vc-day{position:relative;min-height:32px;z-index:1}.vc-monthly .is-not-in-month *{opacity:0;pointer-events:none}.vc-day-layer{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}.vc-day-box-center-center{display:flex;justify-content:center;align-items:center;transform-origin:50% 50%}.vc-day-box-left-center{display:flex;justify-content:flex-start;align-items:center;transform-origin:0% 50%}.vc-day-box-right-center{display:flex;justify-content:flex-end;align-items:center;transform-origin:100% 50%}.vc-day-box-center-bottom{display:flex;justify-content:center;align-items:flex-end}.vc-day-content{display:flex;justify-content:center;align-items:center;font-size:var(--vc-text-sm);font-weight:var(--vc-font-medium);width:28px;height:28px;line-height:28px;border-radius:var(--vc-rounded-full);-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.vc-day-content:hover{background-color:var(--vc-day-content-hover-bg)}.vc-day-content.vc-disabled{color:var(--vc-day-content-disabled-color)}.vc-content:not(.vc-base){font-weight:var(--vc-font-bold);color:var(--vc-content-color)}.vc-highlights{overflow:hidden;pointer-events:none;z-index:-1}.vc-highlight{width:28px;height:28px}.vc-highlight.vc-highlight-base-start{width:50%!important;border-radius:0!important;border-right-width:0!important}.vc-highlight.vc-highlight-base-end{width:50%!important;border-radius:0!important;border-left-width:0!important}.vc-highlight.vc-highlight-base-middle{width:100%;border-radius:0!important;border-left-width:0!important;border-right-width:0!important;margin:0 -1px}.vc-highlight-bg-outline,.vc-highlight-bg-none{background-color:var(--vc-highlight-outline-bg);border:2px solid;border-color:var(--vc-highlight-outline-border);border-radius:var(--vc-rounded-full)}.vc-highlight-bg-light{background-color:var(--vc-highlight-light-bg);border-radius:var(--vc-rounded-full)}.vc-highlight-bg-solid{background-color:var(--vc-highlight-solid-bg);border-radius:var(--vc-rounded-full)}.vc-highlight-content-outline,.vc-highlight-content-none{font-weight:var(--vc-font-bold);color:var(--vc-highlight-outline-content-color)}.vc-highlight-content-light{font-weight:var(--vc-font-bold);color:var(--vc-highlight-light-content-color)}.vc-highlight-content-solid{font-weight:var(--vc-font-bold);color:var(--vc-highlight-solid-content-color)}.vc-dots{display:flex;justify-content:center;align-items:center}.vc-dot{width:5px;height:5px;border-radius:9999px;transition:var(--vc-day-content-transition)}.vc-dot:not(:last-child){margin-right:3px}.vc-bars{display:flex;justify-content:flex-start;align-items:center;width:75%}.vc-bar{flex-grow:1;height:3px;transition:var(--vc-day-content-transition)}.vc-dot{background-color:var(--vc-dot-bg)}.vc-bar{background-color:var(--vc-bar-bg)}.vc-pane{min-width:250px}.vc-weeknumber{display:flex;justify-content:center;align-items:center;position:absolute}.vc-weeknumber.is-left{left:calc(var(--vc-weeknumber-offset-inside) * -1)}.vc-weeknumber.is-right{right:calc(var(--vc-weeknumber-offset-inside) * -1)}.vc-weeknumber.is-left-outside{left:calc(var(--vc-weeknumber-offset-outside) * -1)}.vc-weeknumber.is-right-outside{right:calc(var(--vc-weeknumber-offset-outside) * -1)}.vc-weeknumber-content{display:flex;justify-content:center;align-items:center;font-size:var(--vc-text-xs);font-weight:var(--vc-font-medium);font-style:italic;width:28px;height:28px;margin-top:2px;color:var(--vc-weeknumber-color);-webkit-user-select:none;-moz-user-select:none;user-select:none}.vc-weeks{position:relative;-webkit-overflow-scrolling:touch;padding:6px;min-width:232px}.vc-weeks.vc-show-weeknumbers-left{margin-left:var(--vc-weeknumber-offset-inside)}.vc-weeks.vc-show-weeknumbers-right{margin-right:var(--vc-weeknumber-offset-inside)}.vc-weekday{text-align:center;color:var(--vc-weekday-color);font-size:var(--vc-text-sm);font-weight:var(--vc-font-bold);line-height:14px;padding-top:4px;padding-bottom:8px;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.vc-week,.vc-weekdays{display:grid;grid-template-columns:repeat(7,1fr);position:relative}.vc-pane-container{width:100%;position:relative}.vc-pane-container.in-transition{overflow:hidden}.vc-pane-layout{display:grid}.vc-pane-header-wrapper{position:absolute;top:0;width:100%;pointer-events:none}.vc-day-popover-container{font-size:var(--vc-text-xs);font-weight:var(--vc-font-medium)}.vc-day-popover-header{font-size:var(--vc-text-xs);color:var(--vc-day-popover-header-color);font-weight:var(--vc-font-semibold);text-align:center}.vc-base-select{position:relative;display:flex;justify-content:center;align-items:center;height:30px;font-size:var(--vc-text-base);font-weight:var(--vc-font-medium)}.vc-base-select.vc-has-icon select{padding:0 27px 0 9px}.vc-base-select.vc-has-icon .vc-base-sizer{padding:0 28px 0 10px}.vc-base-select.vc-fit-content select{position:absolute;top:0;left:0;width:100%}.vc-base-select .vc-base-icon{position:absolute;top:6px;right:4px;opacity:.6;pointer-events:none}.vc-base-select .vc-base-sizer{font-size:var(--vc-text-base);font-weight:var(--vc-font-medium);color:transparent;padding:0 8px;margin:0}.vc-base-select select{display:inline-flex;justify-content:center;color:var(--vc-select-color);display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--vc-select-bg);border-radius:var(--vc-rounded);height:30px;width:-moz-max-content;width:max-content;padding:0 7px;margin:0;line-height:var(--leading-none);text-indent:0px;background-image:none;cursor:pointer;text-align:center}.vc-base-select select:hover{background-color:var(--vc-select-hover-bg)}.vc-base-select select.vc-align-left{text-align:left}.vc-base-select select.vc-align-right{text-align:right}.vc-time-picker{display:flex;flex-direction:column;align-items:center;padding:8px 4px}.vc-time-picker.vc-invalid{pointer-events:none;opacity:.5}.vc-time-picker.vc-attached{border-top:1px solid var(--vc-time-picker-border)}.vc-time-picker>*+*{margin-top:4px}.vc-time-header{display:flex;align-items:center;font-size:var(--vc-text-sm);font-weight:var(--vc-font-semibold);text-transform:uppercase;margin-top:-4px;padding-left:4px;padding-right:4px;line-height:21px}.vc-time-select-group{display:inline-flex;align-items:center;padding:0 4px;background:var(--vc-time-select-group-bg);border-radius:var(--vc-rounded-md);border:1px solid var(--vc-time-select-group-border)}.vc-time-select-group .vc-base-icon{margin-right:4px;color:var(--vc-time-select-group-icon-color)}.vc-time-select-group select{background:transparent;padding:0 4px}.vc-time-weekday{color:var(--vc-time-weekday-color);letter-spacing:var(--tracking-wide)}.vc-time-month{color:var(--vc-time-month-color);margin-left:8px}.vc-time-day{color:var(--vc-time-day-color);margin-left:4px}.vc-time-year{color:var(--vc-time-year-color);margin-left:8px}.vc-time-colon{margin:0 1px 2px 2px}.vc-time-decimal{margin:0 0 0 1px}.vc-none-enter-active,.vc-none-leave-active{transition-duration:0s}.vc-fade-enter-active,.vc-fade-leave-active,.vc-slide-left-enter-active,.vc-slide-left-leave-active,.vc-slide-right-enter-active,.vc-slide-right-leave-active,.vc-slide-up-enter-active,.vc-slide-up-leave-active,.vc-slide-down-enter-active,.vc-slide-down-leave-active,.vc-slide-fade-enter-active,.vc-slide-fade-leave-active{transition:transform var(--vc-slide-duration) var(--vc-slide-timing),opacity var(--vc-slide-duration) var(--vc-slide-timing);backface-visibility:hidden;pointer-events:none}.vc-none-leave-active,.vc-fade-leave-active,.vc-slide-left-leave-active,.vc-slide-right-leave-active,.vc-slide-up-leave-active,.vc-slide-down-leave-active{position:absolute!important;width:100%}.vc-none-enter-from,.vc-none-leave-to,.vc-fade-enter-from,.vc-fade-leave-to,.vc-slide-left-enter-from,.vc-slide-left-leave-to,.vc-slide-right-enter-from,.vc-slide-right-leave-to,.vc-slide-up-enter-from,.vc-slide-up-leave-to,.vc-slide-down-enter-from,.vc-slide-down-leave-to,.vc-slide-fade-enter-from,.vc-slide-fade-leave-to{opacity:0}.vc-slide-left-enter-from,.vc-slide-right-leave-to,.vc-slide-fade-enter-from.direction-left,.vc-slide-fade-leave-to.direction-left{transform:translate(var(--vc-slide-translate))}.vc-slide-right-enter-from,.vc-slide-left-leave-to,.vc-slide-fade-enter-from.direction-right,.vc-slide-fade-leave-to.direction-right{transform:translate(calc(-1 * var(--vc-slide-translate)))}.vc-slide-up-enter-from,.vc-slide-down-leave-to,.vc-slide-fade-enter-from.direction-top,.vc-slide-fade-leave-to.direction-top{transform:translateY(var(--vc-slide-translate))}.vc-slide-down-enter-from,.vc-slide-up-leave-to,.vc-slide-fade-enter-from.direction-bottom,.vc-slide-fade-leave-to.direction-bottom{transform:translateY(calc(-1 * var(--vc-slide-translate)))}:root{--vc-white: #ffffff;--vc-black: #000000;--vc-gray-50: #f8fafc;--vc-gray-100: #f1f5f9;--vc-gray-200: #e2e8f0;--vc-gray-300: #cbd5e1;--vc-gray-400: #94a3b8;--vc-gray-500: #64748b;--vc-gray-600: #475569;--vc-gray-700: #334155;--vc-gray-800: #1e293b;--vc-gray-900: #0f172a;--vc-font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;--vc-font-normal: 400;--vc-font-medium: 500;--vc-font-semibold: 600;--vc-font-bold: 700;--vc-text-2xs: 10px;--vc-text-xs: 12px;--vc-text-sm: 14px;--vc-text-base: 16px;--vc-text-lg: 18px;--vc-text-xl: 20px;--vc-text-2xl: 24px;--vc-leading-none: 1;--vc-leading-tight: 1.25;--vc-leading-snug: 1.375;--vc-leading-normal: 1.5;--vc-rounded: .25rem;--vc-rounded-md: .375rem;--vc-rounded-lg: .5rem;--vc-rounded-full: 9999px;--vc-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);--vc-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--vc-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, .06);--vc-slide-translate: 22px;--vc-slide-duration: .15s;--vc-slide-timing: ease;--vc-day-content-transition: all .13s ease-in;--vc-weeknumber-offset-inside: 26px;--vc-weeknumber-offset-outside: 34px}.vc-gray{--vc-accent-50: var(--vc-gray-50);--vc-accent-100: var(--vc-gray-100);--vc-accent-200: var(--vc-gray-200);--vc-accent-300: var(--vc-gray-300);--vc-accent-400: var(--vc-gray-400);--vc-accent-500: var(--vc-gray-500);--vc-accent-600: var(--vc-gray-600);--vc-accent-700: var(--vc-gray-700);--vc-accent-800: var(--vc-gray-800);--vc-accent-900: var(--vc-gray-900)}.vc-red{--vc-accent-50: #fef2f2;--vc-accent-100: #fee2e2;--vc-accent-200: #fecaca;--vc-accent-300: #fca5a5;--vc-accent-400: #f87171;--vc-accent-500: #ef4444;--vc-accent-600: #dc2626;--vc-accent-700: #b91c1c;--vc-accent-800: #991b1b;--vc-accent-900: #7f1d1d}.vc-orange{--vc-accent-50: #fff7ed;--vc-accent-100: #ffedd5;--vc-accent-200: #fed7aa;--vc-accent-300: #fdba74;--vc-accent-400: #fb923c;--vc-accent-500: #f97316;--vc-accent-600: #ea580c;--vc-accent-700: #c2410c;--vc-accent-800: #9a3412;--vc-accent-900: #7c2d12}.vc-yellow{--vc-accent-50: #fefce8;--vc-accent-100: #fef9c3;--vc-accent-200: #fef08a;--vc-accent-300: #fde047;--vc-accent-400: #facc15;--vc-accent-500: #eab308;--vc-accent-600: #ca8a04;--vc-accent-700: #a16207;--vc-accent-800: #854d0e;--vc-accent-900: #713f12}.vc-green{--vc-accent-50: #f0fdf4;--vc-accent-100: #dcfce7;--vc-accent-200: #bbf7d0;--vc-accent-300: #86efac;--vc-accent-400: #4ade80;--vc-accent-500: #22c55e;--vc-accent-600: #16a34a;--vc-accent-700: #15803d;--vc-accent-800: #166534;--vc-accent-900: #14532d}.vc-teal{--vc-accent-50: #f0fdfa;--vc-accent-100: #ccfbf1;--vc-accent-200: #99f6e4;--vc-accent-300: #5eead4;--vc-accent-400: #2dd4bf;--vc-accent-500: #14b8a6;--vc-accent-600: #0d9488;--vc-accent-700: #0f766e;--vc-accent-800: #115e59;--vc-accent-900: #134e4a}.vc-blue{--vc-accent-50: #eff6ff;--vc-accent-100: #dbeafe;--vc-accent-200: #bfdbfe;--vc-accent-300: #93c5fd;--vc-accent-400: #60a5fa;--vc-accent-500: #3b82f6;--vc-accent-600: #2563eb;--vc-accent-700: #1d4ed8;--vc-accent-800: #1e40af;--vc-accent-900: #1e3a8a}.vc-indigo{--vc-accent-50: #eef2ff;--vc-accent-100: #e0e7ff;--vc-accent-200: #c7d2fe;--vc-accent-300: #a5b4fc;--vc-accent-400: #818cf8;--vc-accent-500: #6366f1;--vc-accent-600: #4f46e5;--vc-accent-700: #4338ca;--vc-accent-800: #3730a3;--vc-accent-900: #312e81}.vc-purple{--vc-accent-50: #faf5ff;--vc-accent-100: #f3e8ff;--vc-accent-200: #e9d5ff;--vc-accent-300: #d8b4fe;--vc-accent-400: #c084fc;--vc-accent-500: #a855f7;--vc-accent-600: #9333ea;--vc-accent-700: #7e22ce;--vc-accent-800: #6b21a8;--vc-accent-900: #581c87}.vc-pink{--vc-accent-50: #fdf2f8;--vc-accent-100: #fce7f3;--vc-accent-200: #fbcfe8;--vc-accent-300: #f9a8d4;--vc-accent-400: #f472b6;--vc-accent-500: #ec4899;--vc-accent-600: #db2777;--vc-accent-700: #be185d;--vc-accent-800: #9d174d;--vc-accent-900: #831843}.vc-focus:focus-within{outline:0;box-shadow:var(--vc-focus-ring)}.vc-light{--vc-color: var(--vc-gray-900);--vc-bg: var(--vc-white);--vc-border: var(--vc-gray-300);--vc-hover-bg: hsla(211, 25%, 84%, .3);--vc-focus-ring: 0 0 0 2px rgb(59, 131, 246, .4);--vc-header-arrow-color: var(--vc-gray-500);--vc-header-arrow-hover-bg: var(--vc-gray-200);--vc-header-title-color: var(--vc-gray-900);--vc-weekday-color: var(--vc-gray-500);--vc-weeknumber-color: var(--vc-gray-400);--vc-nav-hover-bg: var(--vc-gray-200);--vc-nav-title-color: var(--vc-gray-900);--vc-nav-item-hover-box-shadow: none;--vc-nav-item-active-color: var(--vc-white);--vc-nav-item-active-bg: var(--vc-accent-500);--vc-nav-item-active-box-shadow: var(--vc-shadow);--vc-nav-item-current-color: var(--vc-accent-600);--vc-day-popover-container-color: var(--vc-white);--vc-day-popover-container-bg: var(--vc-gray-800);--vc-day-popover-container-border: var(--vc-gray-700);--vc-day-popover-header-color: var(--vc-gray-700);--vc-popover-content-color: var(--vc-gray-900);--vc-popover-content-bg: var(--vc-gray-50);--vc-popover-content-border: var(--vc-gray-300);--vc-time-picker-border: var(--vc-gray-300);--vc-time-weekday-color: var(--vc-gray-700);--vc-time-month-color: var(--vc-accent-600);--vc-time-day-color: var(--vc-accent-600);--vc-time-year-color: var(--vc-gray-500);--vc-time-select-group-bg: var(--vc-gray-50);--vc-time-select-group-border: var(--vc-gray-300);--vc-time-select-group-icon-color: var(--vc-accent-500);--vc-select-color: var(--vc-gray-900);--vc-select-bg: var(--vc-gray-100);--vc-select-hover-bg: var(--vc-gray-200);--vc-day-content-hover-bg: var(--vc-hover-bg);--vc-day-content-disabled-color: var(--vc-gray-400)}.vc-light.vc-attr,.vc-light .vc-attr{--vc-content-color: var(--vc-accent-600);--vc-highlight-outline-bg: var(--vc-white);--vc-highlight-outline-border: var(--vc-accent-600);--vc-highlight-outline-content-color: var(--vc-accent-700);--vc-highlight-light-bg: var(--vc-accent-200);--vc-highlight-light-content-color: var(--vc-accent-900);--vc-highlight-solid-bg: var(--vc-accent-600);--vc-highlight-solid-content-color: var(--vc-white);--vc-dot-bg: var(--vc-accent-600);--vc-bar-bg: var(--vc-accent-600)}.vc-dark{--vc-color: var(--vc-white);--vc-bg: var(--vc-gray-900);--vc-border: var(--vc-gray-700);--vc-hover-bg: hsla(216, 15%, 52%, .3);--vc-focus-ring: 0 0 0 2px rgb(59 130 246 / .7);--vc-header-arrow-color: var(--vc-gray-300);--vc-header-arrow-hover-bg: var(--vc-gray-800);--vc-header-title-color: var(--vc-gray-100);--vc-weekday-color: var(--vc-accent-200);--vc-weeknumber-color: var(--vc-gray-500);--vc-nav-hover-bg: var(--vc-gray-700);--vc-nav-title-color: var(--vc-gray-100);--vc-nav-item-hover-box-shadow: none;--vc-nav-item-active-color: var(--vc-white);--vc-nav-item-active-bg: var(--vc-accent-500);--vc-nav-item-active-box-shadow: none;--vc-nav-item-current-color: var(--vc-accent-400);--vc-day-popover-container-color: var(--vc-gray-800);--vc-day-popover-container-bg: var(--vc-white);--vc-day-popover-container-border: var(--vc-gray-100);--vc-day-popover-header-color: var(--vc-gray-300);--vc-popover-content-color: var(--vc-white);--vc-popover-content-bg: var(--vc-gray-800);--vc-popover-content-border: var(--vc-gray-700);--vc-time-picker-border: var(--vc-gray-700);--vc-time-weekday-color: var(--vc-gray-400);--vc-time-month-color: var(--vc-accent-400);--vc-time-day-color: var(--vc-accent-400);--vc-time-year-color: var(--vc-gray-500);--vc-time-select-group-bg: var(--vc-gray-700);--vc-time-select-group-border: var(--vc-gray-500);--vc-time-select-group-icon-color: var(--vc-accent-400);--vc-select-color: var(--vc-gray-200);--vc-select-bg: var(--vc-gray-700);--vc-select-hover-bg: var(--vc-gray-600);--vc-day-content-hover-bg: var(--vc-hover-bg);--vc-day-content-disabled-color: var(--vc-gray-600)}.vc-dark.vc-attr,.vc-dark .vc-attr{--vc-content-color: var(--vc-accent-500);--vc-highlight-outline-bg: var(--vc-gray-900);--vc-highlight-outline-border: var(--vc-accent-300);--vc-highlight-outline-content-color: var(--vc-accent-200);--vc-highlight-light-bg: var(--vc-accent-800);--vc-highlight-light-content-color: var(--vc-accent-100);--vc-highlight-solid-bg: var(--vc-accent-500);--vc-highlight-solid-content-color: var(--vc-white);--vc-dot-bg: var(--vc-accent-500);--vc-bar-bg: var(--vc-accent-500)}.vc-container{position:relative;display:inline-flex;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;font-family:var(--vc-font-family);color:var(--vc-color);background-color:var(--vc-bg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent}.vc-container,.vc-container *{box-sizing:border-box}.vc-container:focus,.vc-container *:focus{outline:none}.vc-container .vc-container{border:none}.vc-bordered{border:1px solid;border-color:var(--vc-border);border-radius:var(--vc-rounded-lg)}.vc-expanded{min-width:100%}.vc-transparent{background-color:transparent}.vc-date-picker-content{padding:0;background-color:var(--vc-bg)}.vc-date-picker-content .vc-container{border:0}div.vc-day{border-left:1px solid gray!important;border-top:1px solid gray!important;padding:0!important}div.vc-day.weekday-position-7{border-right:1px solid gray!important}div.vc-weeks>div.vc-week:last-child>div.vc-day{border-bottom:1px solid gray!important}div.vc-day-content{width:100%!important;border-radius:0!important;margin:0!important}.dp__theme_light{--dp-background-color: #ffffff;--dp-text-color: #212121;--dp-hover-color: #75bce1;--dp-hover-text-color: #ffffff;--dp-hover-icon-color: #ffffff;--dp-primary-color: #0987ca;--dp-primary-text-color: #ffffff;--dp-secondary-color: #212121;--dp-border-color: #ffffff;--dp-range-between-dates-background-color: var(--dp-hover-color, #75bce1);--dp-range-between-dates-text-color: var(--dp-hover-text-color, #ffffff);--dp-range-between-border-color: var(--dp-hover-color, #ffffff)}', eS = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, tS = {
  name: "Calendar",
  components: {
    "v-calendar": CI
  },
  props: {
    vehicleId: {
      type: String,
      required: !0,
      default: ""
    }
  },
  setup(e) {
    const { mapCurrent: t } = ZI({
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px"
    }), r = t({ lg: 2 }, 1), n = t({ lg: !1 }, !0), o = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/calendar`, a = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/resolve`, s = be([
      {
        start: new Date(2e3, 0, 1),
        end: /* @__PURE__ */ new Date()
      }
    ]), i = be([
      {
        dates: /* @__PURE__ */ new Date()
      }
    ]), l = be(null), c = be({
      start: null,
      end: null
    }), u = be(!1), f = function(x) {
      c.value = x;
    }, d = D(() => {
      var x, F, B;
      return `https://www.camperfuchs.de/checkout/${e.vehicleId}/${(x = l.value) == null ? void 0 : x.relevantStationId}?from=${(F = c.value) == null ? void 0 : F.start}&to=${(B = c.value) == null ? void 0 : B.end}`;
    }), h = D(() => {
      var x, F, B;
      return `https://www.camperfuchs.de/checkout/${e.vehicleId}/${(x = l.value) == null ? void 0 : x.relevantStationId}/request?from=${(F = c.value) == null ? void 0 : F.start}&to=${(B = c.value) == null ? void 0 : B.end}`;
    });
    function g(x, F, B, V) {
      let _ = uo(x), L = uo(F);
      _ > L && ([_, L] = [L, _]), i.value.push({
        bar: {
          style: {
            backgroundColor: V
          }
        },
        popover: {
          label: B,
          hideIndicator: !0
        },
        dates: {
          start: _,
          end: L
        }
      }), s.value.push({
        start: _,
        end: L
      });
    }
    const b = be([]);
    function A(x) {
      var V, _, L;
      let F = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set();
      for (let ne = 0; ne < ((V = x.value) == null ? void 0 : V.pickupAndReturnTimes.length); ne++)
        for (let K in (_ = x.value) == null ? void 0 : _.pickupAndReturnTimes[ne])
          (L = x.value) != null && L.pickupAndReturnTimes[ne][K].open || (B.add(ne + 1), F.add(ne));
      b.value = Array.from(F), i.value.push({
        bar: {
          style: {
            backgroundColor: "#d8bd00"
          }
        },
        popover: {
          label: "Standort geschlossen",
          hideIndicator: !0
        },
        dates: {
          repeat: {
            weekdays: Array.from(B)
          }
        }
      });
    }
    const y = async () => {
      try {
        const F = await (await fetch(o)).json();
        F.bookedDays.forEach((V) => g(V.from, V.to, "Fahrzeug ist nicht verfügbar", "#960303")), F.daysOff.forEach((V) => g(V.from, V.to, "Standort geschlossen", "#d8bd00"));
        const B = await fetch(a);
        l.value = await B.json(), A(l);
      } catch (x) {
        console.error("An error occurred while fetching the data:", x);
      }
    }, H = D(() => {
      var x, F, B;
      return ((x = c.value) == null ? void 0 : x.start) === null || ((F = c.value) == null ? void 0 : F.end) === null || ((B = l.value) == null ? void 0 : B.relevantStationId) === null;
    }), R = D(() => {
      var F, B, V, _, L, ne;
      let x = {
        isValid: !1,
        season: "std",
        minDays: (F = l.value) == null ? void 0 : F.minDays.std,
        days: 0
      };
      if (((B = c.value) == null ? void 0 : B.start) !== null && ((V = c.value) == null ? void 0 : V.end) !== null) {
        let K = (_ = c.value) == null ? void 0 : _.start, ee = (L = c.value) == null ? void 0 : L.end;
        if (u.value = b.value.includes(K.getDay()) || b.value.includes(ee.getDay()), K > ee) {
          let ae = K;
          K = ee, ee = ae;
        }
        const re = II(ee, K);
        (ne = l.value) == null || ne.seasons.forEach((ae) => {
          const he = uo(ae.from), P = uo(ae.to);
          K >= he && ee <= P && (x.season = ae.type, x.minDays = l.value.minDays[ae.type], x.days = re);
        }), x.isValid = re >= x.minDays, x.days = re;
      }
      return x;
    }), I = D(() => {
      let x = 0;
      return R.value.isValid && (x = R.value.days * l.value.rates[R.value.season]), x;
    }), C = {
      std: "Standard Saison",
      high: "Hauptsaison",
      low: "Nebensaison"
    };
    return $r(() => {
      y();
    }), {
      disabledDates: s,
      isDisabled: H,
      bookingUrl: d,
      requestUrl: h,
      article: l,
      isPickupReturnDaysWrong: u,
      season: C,
      isValidRange: R,
      totalRate: I,
      attributes: i,
      setRange: f,
      range: c,
      navigateToBookingUrl: () => {
        R.value.isValid && !u.value && window.open(d.value, "_blank");
      },
      navigateToRequestUrl: () => {
        R.value.isValid && !u.value && window.open(h.value, "_blank");
      },
      columns: r,
      expanded: n
    };
  }
}, rS = { class: "flex flex-col items-center gap-4 bg-white p-2" }, nS = /* @__PURE__ */ J("div", { class: "flex flex-col w-full gap-4" }, [
  /* @__PURE__ */ J("div", { class: "flex items-center gap-2 justify-between p-2 text-sm flex-wrap" }, [
    /* @__PURE__ */ J("div", { class: "itmes-center flex gap-1 max-sm:flex-wrap" }, [
      /* @__PURE__ */ J("span", { class: "h-5 w-5 border border-solid rounded-full" }),
      /* @__PURE__ */ J("span", null, " Fahrzeug ist buchbar ")
    ]),
    /* @__PURE__ */ J("div", { class: "itmes-center flex gap-1 max-sm:flex-wrap" }, [
      /* @__PURE__ */ J("span", { class: "h-5 w-5 bg-secondary-braun rounded-full" }),
      /* @__PURE__ */ J("span", null, " Standort geschlossen ")
    ]),
    /* @__PURE__ */ J("div", { class: "itmes-center flex gap-1 max-sm:flex-wrap" }, [
      /* @__PURE__ */ J("span", { class: "h-5 w-5 bg-booked rounded-full" }),
      /* @__PURE__ */ J("span", null, " Fahrzeug ist nicht verfügbar ")
    ])
  ]),
  /* @__PURE__ */ J("a", {
    href: "https://www.camperfuchs.de/wohnmobil-mieten",
    target: "_blank",
    class: "flex items-end gap-2 justify-center w-full appearance-none no-underline text-xs text-primary-braun"
  }, [
    /* @__PURE__ */ J("span", { class: "text-sm" }, "powered by"),
    /* @__PURE__ */ J("img", {
      src: JI,
      class: "object-contain h-6",
      alt: ""
    })
  ])
], -1), oS = {
  key: 0,
  class: "flex flex-col w-full gap-2 p-2 text-sm tabular-nums"
}, aS = { class: "font-medium" }, sS = { class: "flex justify-between gap-4 w-full" }, iS = /* @__PURE__ */ J("span", { class: "font-medium" }, "Ausgewählte Nächte:", -1), lS = { class: "font-normal" }, cS = { class: "flex justify-between gap-4 w-full" }, uS = /* @__PURE__ */ J("span", { class: "font-medium" }, "Mietpreis:", -1), fS = { class: "font-normal" }, dS = { class: "flex justify-between gap-4 w-full" }, vS = /* @__PURE__ */ J("span", { class: "font-medium" }, "Kaution:", -1), pS = { class: "font-normal" }, hS = { class: "text-red-500 text-sm break-words text-center" };
function mS(e, t, r, n, o, a) {
  var i, l;
  const s = Et("v-calendar");
  return G(), oe("div", rS, [
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
      footer: Ye(() => [
        nS
      ]),
      _: 1
    }, 8, ["columns", "onDrag", "attributes", "disabled-dates", "modelValue", "expanded"]),
    n.isValidRange.isValid && !n.isPickupReturnDaysWrong ? (G(), oe("div", oS, [
      J("span", aS, Le(n.season[n.isValidRange.season]), 1),
      J("span", sS, [
        iS,
        J("span", lS, Le(n.isValidRange.days), 1)
      ]),
      J("span", cS, [
        uS,
        J("span", fS, Le(n.totalRate) + " €", 1)
      ]),
      J("span", dS, [
        vS,
        J("span", pS, Le((i = n.article) == null ? void 0 : i.deposit) + " €", 1)
      ])
    ])) : Fe("", !0),
    En(J("span", { class: "text-red-500 text-sm text-center w-full" }, " Mindestmietdauer " + Le(n.isValidRange.minDays) + " Nächte ", 513), [
      [ba, !n.isValidRange.isValid && n.isValidRange.days !== 0]
    ]),
    En(J("span", hS, " An Tagen, an denen die Einrichtung geschlossen ist, können die Fahrzeuge nicht abgeholt oder zurückgebracht werden. ", 512), [
      [ba, n.isPickupReturnDaysWrong]
    ]),
    En(J("button", {
      onClick: t[1] || (t[1] = (...c) => n.navigateToBookingUrl && n.navigateToBookingUrl(...c)),
      class: "p-4 font-semibold text-center w-full bg-primary-blue/90 shadow-md text-white border-none rounded-lg hover:bg-primary-blue duration-300 appearance-none cursor-pointer"
    }, " Zur Buchung ", 512), [
      [ba, (l = n.article) == null ? void 0 : l.onlineBookable]
    ]),
    J("button", {
      onClick: t[2] || (t[2] = (...c) => n.navigateToRequestUrl && n.navigateToRequestUrl(...c)),
      class: "p-4 font-semibold text-center bg-white shadow-md text-gray-700 w-full border-none rounded-lg hover:bg-secondary-blue/40 duration-300 appearance-none cursor-pointer"
    }, " Unverbindlich anfragen ")
  ]);
}
const gS = /* @__PURE__ */ eS(tS, [["render", mS], ["styles", [XI]]]), yS = /* @__PURE__ */ Op(gS);
customElements.define("booking-calendar", yS);
