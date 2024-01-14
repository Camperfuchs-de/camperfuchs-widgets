function ss(e, t) {
  const r = new Set(e.split(","));
  return t ? (n) => r.has(n.toLowerCase()) : (n) => r.has(n);
}
const ke = {}, zr = [], ut = () => {
}, qf = () => !1, Uo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), is = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, ls = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Zf = Object.prototype.hasOwnProperty, he = (e, t) => Zf.call(e, t), ae = Array.isArray, Gr = (e) => Ho(e) === "[object Map]", uc = (e) => Ho(e) === "[object Set]", ue = (e) => typeof e == "function", $e = (e) => typeof e == "string", an = (e) => typeof e == "symbol", Ce = (e) => e !== null && typeof e == "object", fc = (e) => (Ce(e) || ue(e)) && ue(e.then) && ue(e.catch), dc = Object.prototype.toString, Ho = (e) => dc.call(e), Jf = (e) => Ho(e).slice(8, -1), vc = (e) => Ho(e) === "[object Object]", cs = (e) => $e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, po = /* @__PURE__ */ ss(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, Xf = /-(\w)/g, ft = jo((e) => e.replace(Xf, (t, r) => r ? r.toUpperCase() : "")), ed = /\B([A-Z])/g, pt = jo(
  (e) => e.replace(ed, "-$1").toLowerCase()
), Wo = jo((e) => e.charAt(0).toUpperCase() + e.slice(1)), ho = jo((e) => e ? `on${Wo(e)}` : ""), ur = (e, t) => !Object.is(e, t), da = (e, t) => {
  for (let r = 0; r < e.length; r++)
    e[r](t);
}, Ao = (e, t, r) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: r
  });
}, td = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Sa = (e) => {
  const t = $e(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let oi;
const pc = () => oi || (oi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function jt(e) {
  if (ae(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], o = $e(n) ? ad(n) : jt(n);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if ($e(e) || Ce(e))
    return e;
}
const rd = /;(?![^(]*\))/g, nd = /:([^]+)/, od = /\/\*[^]*?\*\//g;
function ad(e) {
  const t = {};
  return e.replace(od, "").split(rd).forEach((r) => {
    if (r) {
      const n = r.split(nd);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function xe(e) {
  let t = "";
  if ($e(e))
    t = e;
  else if (ae(e))
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
const sd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", id = /* @__PURE__ */ ss(sd);
function hc(e) {
  return !!e || e === "";
}
const Le = (e) => $e(e) ? e : e == null ? "" : ae(e) || Ce(e) && (e.toString === dc || !ue(e.toString)) ? JSON.stringify(e, gc, 2) : String(e), gc = (e, t) => t && t.__v_isRef ? gc(e, t.value) : Gr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, o], a) => (r[va(n, a) + " =>"] = o, r),
    {}
  )
} : uc(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => va(r))
} : an(t) ? va(t) : Ce(t) && !ae(t) && !vc(t) ? String(t) : t, va = (e, t = "") => {
  var r;
  return an(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
};
var ld = { NVM_INC: "/Users/sultanov/.nvm/versions/node/v20.10.0/include/node", MANPATH: "/Users/sultanov/.nvm/versions/node/v20.10.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/sultanov/.nvm/versions/node/v20.10.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin/node", INIT_CWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", ANDROID_HOME: "/Users/sultanov/Library/Android/sdk", _P9K_TTY: "/dev/ttys007", NVM_CD_FLAGS: "-q", SHELL: "/bin/zsh", TERM: "xterm-256color", TMPDIR: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/", HOMEBREW_REPOSITORY: "/opt/homebrew", npm_config_global_prefix: "/Users/sultanov/.nvm/versions/node/v20.10.0", TERM_PROGRAM_VERSION: "1.85.1", ZDOTDIR: "/Users/sultanov", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", TERM_SESSION_ID: "w0t0p0:F51105E8-1DAB-428E-B400-8FACA2844351", npm_config_noproxy: "", SDKMAN_PLATFORM: "darwinarm64", npm_config_local_prefix: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", ZSH: "/Users/sultanov/.oh-my-zsh", USER: "sultanov", NVM_DIR: "/Users/sultanov/.nvm", LS_COLORS: "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43", SPRINGBOOT_HOME: "/Users/sultanov/.sdkman/candidates/springboot/current", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/sultanov/.nvm/versions/node/v20.10.0/etc/npmrc", SDKMAN_CANDIDATES_API: "https://api.sdkman.io/2", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.NM9amOClzt/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/bin/npm-cli.js", PAGER: "less", LSCOLORS: "Gxfxcxdxbxegedabagacad", PATH: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/widgets/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/node_modules/.bin:/Users/sultanov/dev/node_modules/.bin:/Users/sultanov/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v20.10.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/sultanov/.sdkman/candidates/springboot/current/bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v20.10.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/sultanov/.fzf/bin", npm_package_json: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/package.json", _: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/node_modules/.bin/vite", npm_config_userconfig: "/Users/sultanov/.npmrc", npm_config_init_module: "/Users/sultanov/.npm-init.js", USER_ZDOTDIR: "/Users/sultanov", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", VSCODE_NONCE: "4a986c38-dc7f-4664-94c9-a2c3beaddfd6", JAVA_HOME: "/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home", npm_lifecycle_event: "build", EDITOR: "vi", P9K_SSH: "0", npm_package_name: "camperfuchs-booking-calendar", LANG: "en_US.UTF-8", P9K_TTY: "old", ITERM_PROFILE: "Default", npm_config_npm_version: "10.2.3", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "--ms-enable-electron-run-as-node", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", COLORFGBG: "7;0", HOME: "/Users/sultanov", SHLVL: "4", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", LC_TERMINAL_VERSION: "3.4.23", HOMEBREW_PREFIX: "/opt/homebrew", ITERM_SESSION_ID: "w0t0p0:F51105E8-1DAB-428E-B400-8FACA2844351", npm_config_cache: "/Users/sultanov/.npm", LESS: "-R", LOGNAME: "sultanov", npm_lifecycle_script: "vite build", SDKMAN_DIR: "/Users/sultanov/.sdkman", VSCODE_GIT_IPC_HANDLE: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/vscode-git-6505ebfbac.sock", LC_CTYPE: "UTF-8", NVM_BIN: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin", npm_config_user_agent: "npm/10.2.3 node/v20.10.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", SDKMAN_CANDIDATES_DIR: "/Users/sultanov/.sdkman/candidates", LC_TERMINAL: "iTerm2", _P9K_SSH_TTY: "/dev/ttys007", npm_node_execpath: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin/node", npm_config_prefix: "/Users/sultanov/.nvm/versions/node/v20.10.0", COLORTERM: "truecolor", NODE_ENV: "production" };
let At;
class cd {
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
function ud(e, t = At) {
  t && t.active && t.effects.push(e);
}
function fd() {
  return At;
}
let Mr;
class us {
  constructor(t, r, n, o) {
    this.fn = t, this.trigger = r, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, ud(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, dr();
      for (const t of this.deps)
        if (t.computed && (dd(t.computed), this._dirtyLevel >= 2))
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
function dd(e) {
  return e.value;
}
function ai(e) {
  e._trackId++, e._depsLength = 0;
}
function si(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      mc(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function mc(e, t) {
  const r = e.get(t);
  r !== void 0 && t._trackId !== r && (e.delete(t), e.size === 0 && e.cleanup());
}
let cr = !0, Ta = 0;
const yc = [];
function dr() {
  yc.push(cr), cr = !1;
}
function vr() {
  const e = yc.pop();
  cr = e === void 0 ? !0 : e;
}
function fs() {
  Ta++;
}
function ds() {
  for (Ta--; !Ta && Pa.length; )
    Pa.shift()();
}
function bc(e, t, r) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && mc(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const Pa = [];
function wc(e, t, r) {
  fs();
  for (const n of e.keys())
    if (!(!n.allowRecurse && n._runnings) && n._dirtyLevel < t && (!n._runnings || t !== 2)) {
      const o = n._dirtyLevel;
      n._dirtyLevel = t, o === 0 && (!n._queryings || t !== 2) && (n.trigger(), n.scheduler && Pa.push(n.scheduler));
    }
  ds();
}
const _c = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  return r.cleanup = e, r.computed = t, r;
}, xo = /* @__PURE__ */ new WeakMap(), Or = Symbol(""), $a = Symbol("");
function it(e, t, r) {
  if (cr && Mr) {
    let n = xo.get(e);
    n || xo.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(r);
    o || n.set(r, o = _c(() => n.delete(r))), bc(
      Mr,
      o
    );
  }
}
function Wt(e, t, r, n, o, a) {
  const s = xo.get(e);
  if (!s)
    return;
  let i = [];
  if (t === "clear")
    i = [...s.values()];
  else if (r === "length" && ae(e)) {
    const l = Number(n);
    s.forEach((c, u) => {
      (u === "length" || !an(u) && u >= l) && i.push(c);
    });
  } else
    switch (r !== void 0 && i.push(s.get(r)), t) {
      case "add":
        ae(e) ? cs(r) && i.push(s.get("length")) : (i.push(s.get(Or)), Gr(e) && i.push(s.get($a)));
        break;
      case "delete":
        ae(e) || (i.push(s.get(Or)), Gr(e) && i.push(s.get($a)));
        break;
      case "set":
        Gr(e) && i.push(s.get(Or));
        break;
    }
  fs();
  for (const l of i)
    l && wc(
      l,
      3
    );
  ds();
}
function vd(e, t) {
  var r;
  return (r = xo.get(e)) == null ? void 0 : r.get(t);
}
const pd = /* @__PURE__ */ ss("__proto__,__v_isRef,__isVue"), Dc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(an)
), ii = /* @__PURE__ */ hd();
function hd() {
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
function gd(e) {
  const t = pe(this);
  return it(t, "has", e), t.hasOwnProperty(e);
}
class Ac {
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
      return n === (o ? a ? Id : Oc : a ? Mc : Cc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = ae(t);
    if (!o) {
      if (s && he(ii, r))
        return Reflect.get(ii, r, n);
      if (r === "hasOwnProperty")
        return gd;
    }
    const i = Reflect.get(t, r, n);
    return (an(r) ? Dc.has(r) : pd(r)) || (o || it(t, "get", r), a) ? i : Pe(i) ? s && cs(r) ? i : i.value : Ce(i) ? o ? kc(i) : sn(i) : i;
  }
}
class xc extends Ac {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, o) {
    let a = t[r];
    if (!this._shallow) {
      const l = Zr(a);
      if (!Hr(n) && !Zr(n) && (a = pe(a), n = pe(n)), !ae(t) && Pe(a) && !Pe(n))
        return l ? !1 : (a.value = n, !0);
    }
    const s = ae(t) && cs(r) ? Number(r) < t.length : he(t, r), i = Reflect.set(t, r, n, o);
    return t === pe(o) && (s ? ur(n, a) && Wt(t, "set", r, n) : Wt(t, "add", r, n)), i;
  }
  deleteProperty(t, r) {
    const n = he(t, r);
    t[r];
    const o = Reflect.deleteProperty(t, r);
    return o && n && Wt(t, "delete", r, void 0), o;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!an(r) || !Dc.has(r)) && it(t, "has", r), n;
  }
  ownKeys(t) {
    return it(
      t,
      "iterate",
      ae(t) ? "length" : Or
    ), Reflect.ownKeys(t);
  }
}
class md extends Ac {
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
const yd = /* @__PURE__ */ new xc(), bd = /* @__PURE__ */ new md(), wd = /* @__PURE__ */ new xc(
  !0
), vs = (e) => e, zo = (e) => Reflect.getPrototypeOf(e);
function Xn(e, t, r = !1, n = !1) {
  e = e.__v_raw;
  const o = pe(e), a = pe(t);
  r || (ur(t, a) && it(o, "get", t), it(o, "get", a));
  const { has: s } = zo(o), i = n ? vs : r ? gs : Nn;
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
  return zo(t).has.call(t, e) || (t.add(e), Wt(t, "add", e, e)), this;
}
function ci(e, t) {
  t = pe(t);
  const r = pe(this), { has: n, get: o } = zo(r);
  let a = n.call(r, e);
  a || (e = pe(e), a = n.call(r, e));
  const s = o.call(r, e);
  return r.set(e, t), a ? ur(t, s) && Wt(r, "set", e, t) : Wt(r, "add", e, t), this;
}
function ui(e) {
  const t = pe(this), { has: r, get: n } = zo(t);
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
    const a = this, s = a.__v_raw, i = pe(s), l = t ? vs : e ? gs : Nn;
    return !e && it(i, "iterate", Or), s.forEach((c, u) => n.call(o, l(c), l(u), a));
  };
}
function no(e, t, r) {
  return function(...n) {
    const o = this.__v_raw, a = pe(o), s = Gr(a), i = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = o[e](...n), u = r ? vs : t ? gs : Nn;
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
function _d() {
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
  Dd,
  Ad,
  xd,
  Cd
] = /* @__PURE__ */ _d();
function ps(e, t) {
  const r = t ? e ? Cd : xd : e ? Ad : Dd;
  return (n, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    he(r, o) && o in n ? r : n,
    o,
    a
  );
}
const Md = {
  get: /* @__PURE__ */ ps(!1, !1)
}, Od = {
  get: /* @__PURE__ */ ps(!1, !0)
}, kd = {
  get: /* @__PURE__ */ ps(!0, !1)
}, Cc = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap(), Oc = /* @__PURE__ */ new WeakMap(), Id = /* @__PURE__ */ new WeakMap();
function Ed(e) {
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
function Sd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ed(Jf(e));
}
function sn(e) {
  return Zr(e) ? e : hs(
    e,
    !1,
    yd,
    Md,
    Cc
  );
}
function Td(e) {
  return hs(
    e,
    !1,
    wd,
    Od,
    Mc
  );
}
function kc(e) {
  return hs(
    e,
    !0,
    bd,
    kd,
    Oc
  );
}
function hs(e, t, r, n, o) {
  if (!Ce(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = o.get(e);
  if (a)
    return a;
  const s = Sd(e);
  if (s === 0)
    return e;
  const i = new Proxy(
    e,
    s === 2 ? n : r
  );
  return o.set(e, i), i;
}
function Vr(e) {
  return Zr(e) ? Vr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Zr(e) {
  return !!(e && e.__v_isReadonly);
}
function Hr(e) {
  return !!(e && e.__v_isShallow);
}
function Ic(e) {
  return Vr(e) || Zr(e);
}
function pe(e) {
  const t = e && e.__v_raw;
  return t ? pe(t) : e;
}
function Ec(e) {
  return Ao(e, "__v_skip", !0), e;
}
const Nn = (e) => Ce(e) ? sn(e) : e, gs = (e) => Ce(e) ? kc(e) : e;
class Sc {
  constructor(t, r, n, o) {
    this._setter = r, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new us(
      () => t(this._value),
      () => Ya(this, 1)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = n;
  }
  get value() {
    const t = pe(this);
    return Tc(t), (!t._cacheable || t.effect.dirty) && ur(t._value, t._value = t.effect.run()) && Ya(t, 2), t._value;
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
function Pd(e, t, r = !1) {
  let n, o;
  const a = ue(e);
  return a ? (n = e, o = ld.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ut) : (n = e.get, o = e.set), new Sc(n, o, a || !o, r);
}
function Tc(e) {
  cr && Mr && (e = pe(e), bc(
    Mr,
    e.dep || (e.dep = _c(
      () => e.dep = void 0,
      e instanceof Sc ? e : void 0
    ))
  ));
}
function Ya(e, t = 3, r) {
  e = pe(e);
  const n = e.dep;
  n && wc(
    n,
    t
  );
}
function Pe(e) {
  return !!(e && e.__v_isRef === !0);
}
function be(e) {
  return $d(e, !1);
}
function $d(e, t) {
  return Pe(e) ? e : new Yd(e, t);
}
class Yd {
  constructor(t, r) {
    this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : pe(t), this._value = r ? t : Nn(t);
  }
  get value() {
    return Tc(this), this._value;
  }
  set value(t) {
    const r = this.__v_isShallow || Hr(t) || Zr(t);
    t = r ? t : pe(t), ur(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : Nn(t), Ya(this, 3));
  }
}
function S(e) {
  return Pe(e) ? e.value : e;
}
const Nd = {
  get: (e, t, r) => S(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const o = e[t];
    return Pe(o) && !Pe(r) ? (o.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Pc(e) {
  return Vr(e) ? e : new Proxy(e, Nd);
}
function Rd(e) {
  const t = ae(e) ? new Array(e.length) : {};
  for (const r in e)
    t[r] = $c(e, r);
  return t;
}
class Ld {
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
    return vd(pe(this._object), this._key);
  }
}
class Fd {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function go(e, t, r) {
  return Pe(e) ? e : ue(e) ? new Fd(e) : Ce(e) && arguments.length > 1 ? $c(e, t, r) : be(e);
}
function $c(e, t, r) {
  const n = e[t];
  return Pe(n) ? n : new Ld(e, t, r);
}
var kr = { NVM_INC: "/Users/sultanov/.nvm/versions/node/v20.10.0/include/node", MANPATH: "/Users/sultanov/.nvm/versions/node/v20.10.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/sultanov/.nvm/versions/node/v20.10.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin/node", INIT_CWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", ANDROID_HOME: "/Users/sultanov/Library/Android/sdk", _P9K_TTY: "/dev/ttys007", NVM_CD_FLAGS: "-q", SHELL: "/bin/zsh", TERM: "xterm-256color", TMPDIR: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/", HOMEBREW_REPOSITORY: "/opt/homebrew", npm_config_global_prefix: "/Users/sultanov/.nvm/versions/node/v20.10.0", TERM_PROGRAM_VERSION: "1.85.1", ZDOTDIR: "/Users/sultanov", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", TERM_SESSION_ID: "w0t0p0:F51105E8-1DAB-428E-B400-8FACA2844351", npm_config_noproxy: "", SDKMAN_PLATFORM: "darwinarm64", npm_config_local_prefix: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", ZSH: "/Users/sultanov/.oh-my-zsh", USER: "sultanov", NVM_DIR: "/Users/sultanov/.nvm", LS_COLORS: "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43", SPRINGBOOT_HOME: "/Users/sultanov/.sdkman/candidates/springboot/current", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/sultanov/.nvm/versions/node/v20.10.0/etc/npmrc", SDKMAN_CANDIDATES_API: "https://api.sdkman.io/2", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.NM9amOClzt/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/bin/npm-cli.js", PAGER: "less", LSCOLORS: "Gxfxcxdxbxegedabagacad", PATH: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/widgets/node_modules/.bin:/Users/sultanov/dev/Camperfuchs/node_modules/.bin:/Users/sultanov/dev/node_modules/.bin:/Users/sultanov/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v20.10.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/sultanov/.sdkman/candidates/springboot/current/bin:/opt/homebrew/opt/mysql@5.7/bin:/opt/homebrew/opt/php@7.2/sbin:/opt/homebrew/opt/php@7.2/bin:/Users/sultanov/.nvm/versions/node/v20.10.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/sultanov/.fzf/bin", npm_package_json: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/package.json", _: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar/node_modules/.bin/vite", npm_config_userconfig: "/Users/sultanov/.npmrc", npm_config_init_module: "/Users/sultanov/.npm-init.js", USER_ZDOTDIR: "/Users/sultanov", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/sultanov/dev/Camperfuchs/widgets/camperfuchs-booking-calendar", VSCODE_NONCE: "4a986c38-dc7f-4664-94c9-a2c3beaddfd6", JAVA_HOME: "/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home", npm_lifecycle_event: "build", EDITOR: "vi", P9K_SSH: "0", npm_package_name: "camperfuchs-booking-calendar", LANG: "en_US.UTF-8", P9K_TTY: "old", ITERM_PROFILE: "Default", npm_config_npm_version: "10.2.3", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "--ms-enable-electron-run-as-node", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/sultanov/.nvm/versions/node/v20.10.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", COLORFGBG: "7;0", HOME: "/Users/sultanov", SHLVL: "4", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", LC_TERMINAL_VERSION: "3.4.23", HOMEBREW_PREFIX: "/opt/homebrew", ITERM_SESSION_ID: "w0t0p0:F51105E8-1DAB-428E-B400-8FACA2844351", npm_config_cache: "/Users/sultanov/.npm", LESS: "-R", LOGNAME: "sultanov", npm_lifecycle_script: "vite build", SDKMAN_DIR: "/Users/sultanov/.sdkman", VSCODE_GIT_IPC_HANDLE: "/var/folders/3f/05kq_wlx4cv1tb72m2f8vxy00000gn/T/vscode-git-6505ebfbac.sock", LC_CTYPE: "UTF-8", NVM_BIN: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin", npm_config_user_agent: "npm/10.2.3 node/v20.10.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", SDKMAN_CANDIDATES_DIR: "/Users/sultanov/.sdkman/candidates", LC_TERMINAL: "iTerm2", _P9K_SSH_TTY: "/dev/ttys007", npm_node_execpath: "/Users/sultanov/.nvm/versions/node/v20.10.0/bin/node", npm_config_prefix: "/Users/sultanov/.nvm/versions/node/v20.10.0", COLORTERM: "truecolor", NODE_ENV: "production" };
const En = [];
function Bd(e, ...t) {
  dr();
  const r = En.length ? En[En.length - 1].component : null, n = r && r.appContext.config.warnHandler, o = Ud();
  if (n)
    zt(
      n,
      r,
      11,
      [
        e + t.join(""),
        r && r.proxy,
        o.map(
          ({ vnode: a }) => `at <${pu(r, a.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const a = [`[Vue warn]: ${e}`, ...t];
    o.length && a.push(`
`, ...Hd(o)), console.warn(...a);
  }
  vr();
}
function Ud() {
  let e = En[En.length - 1];
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
function Hd(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push(...n === 0 ? [] : [`
`], ...jd(r));
  }), t;
}
function jd({ vnode: e, recurseCount: t }) {
  const r = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, o = ` at <${pu(
    e.component,
    e.type,
    n
  )}`, a = ">" + r;
  return e.props ? [o, ...Wd(e.props), a] : [o + a];
}
function Wd(e) {
  const t = [], r = Object.keys(e);
  return r.slice(0, 3).forEach((n) => {
    t.push(...Yc(n, e[n]));
  }), r.length > 3 && t.push(" ..."), t;
}
function Yc(e, t, r) {
  return $e(t) ? (t = JSON.stringify(t), r ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? r ? t : [`${e}=${t}`] : Pe(t) ? (t = Yc(e, pe(t.value), !0), r ? t : [`${e}=Ref<`, t, ">"]) : ue(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = pe(t), r ? t : [`${e}=`, t]);
}
function zt(e, t, r, n) {
  let o;
  try {
    o = n ? e(...n) : e();
  } catch (a) {
    Go(a, t, r);
  }
  return o;
}
function gt(e, t, r, n) {
  if (ue(e)) {
    const a = zt(e, t, r, n);
    return a && fc(a) && a.catch((s) => {
      Go(s, t, r);
    }), a;
  }
  const o = [];
  for (let a = 0; a < e.length; a++)
    o.push(gt(e[a], t, r, n));
  return o;
}
function Go(e, t, r, n = !0) {
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
  zd(e, r, o, n);
}
function zd(e, t, r, n = !0) {
  console.error(e);
}
let Rn = !1, Na = !1;
const Qe = [];
let Pt = 0;
const Kr = [];
let Bt = null, Dr = 0;
const Nc = /* @__PURE__ */ Promise.resolve();
let ms = null;
function xr(e) {
  const t = ms || Nc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Gd(e) {
  let t = Pt + 1, r = Qe.length;
  for (; t < r; ) {
    const n = t + r >>> 1, o = Qe[n], a = Ln(o);
    a < e || a === e && o.pre ? t = n + 1 : r = n;
  }
  return t;
}
function ys(e) {
  (!Qe.length || !Qe.includes(
    e,
    Rn && e.allowRecurse ? Pt + 1 : Pt
  )) && (e.id == null ? Qe.push(e) : Qe.splice(Gd(e.id), 0, e), Rc());
}
function Rc() {
  !Rn && !Na && (Na = !0, ms = Nc.then(Fc));
}
function Vd(e) {
  const t = Qe.indexOf(e);
  t > Pt && Qe.splice(t, 1);
}
function Kd(e) {
  ae(e) ? Kr.push(...e) : (!Bt || !Bt.includes(
    e,
    e.allowRecurse ? Dr + 1 : Dr
  )) && Kr.push(e), Rc();
}
function di(e, t, r = Rn ? Pt + 1 : 0) {
  for (; r < Qe.length; r++) {
    const n = Qe[r];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      Qe.splice(r, 1), r--, n();
    }
  }
}
function Lc(e) {
  if (Kr.length) {
    const t = [...new Set(Kr)];
    if (Kr.length = 0, Bt) {
      Bt.push(...t);
      return;
    }
    for (Bt = t, Bt.sort((r, n) => Ln(r) - Ln(n)), Dr = 0; Dr < Bt.length; Dr++)
      Bt[Dr]();
    Bt = null, Dr = 0;
  }
}
const Ln = (e) => e.id == null ? 1 / 0 : e.id, Qd = (e, t) => {
  const r = Ln(e) - Ln(t);
  if (r === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return r;
};
function Fc(e) {
  Na = !1, Rn = !0, Qe.sort(Qd);
  const t = ut;
  try {
    for (Pt = 0; Pt < Qe.length; Pt++) {
      const r = Qe[Pt];
      r && r.active !== !1 && (kr.NODE_ENV !== "production" && t(r), zt(r, null, 14));
    }
  } finally {
    Pt = 0, Qe.length = 0, Lc(), Rn = !1, ms = null, (Qe.length || Kr.length) && Fc();
  }
}
function qd(e, t, ...r) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || ke;
  let o = r;
  const a = t.startsWith("update:"), s = a && t.slice(7);
  if (s && s in n) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`, { number: f, trim: d } = n[u] || ke;
    d && (o = r.map((h) => $e(h) ? h.trim() : h)), f && (o = r.map(td));
  }
  let i, l = n[i = ho(t)] || // also try camelCase event handler (#2249)
  n[i = ho(ft(t))];
  !l && a && (l = n[i = ho(pt(t))]), l && gt(
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
    e.emitted[i] = !0, gt(
      c,
      e,
      6,
      o
    );
  }
}
function Bc(e, t, r = !1) {
  const n = t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let s = {}, i = !1;
  if (!ue(e)) {
    const l = (c) => {
      const u = Bc(c, t, !0);
      u && (i = !0, Fe(s, u));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !i ? (Ce(e) && n.set(e, null), null) : (ae(a) ? a.forEach((l) => s[l] = null) : Fe(s, a), Ce(e) && n.set(e, s), s);
}
function Vo(e, t) {
  return !e || !Uo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), he(e, t[0].toLowerCase() + t.slice(1)) || he(e, pt(t)) || he(e, t));
}
let Ge = null, Uc = null;
function Co(e) {
  const t = Ge;
  return Ge = e, Uc = e && e.type.__scopeId || null, t;
}
function Ye(e, t = Ge, r) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && xi(-1);
    const a = Co(t);
    let s;
    try {
      s = e(...o);
    } finally {
      Co(a), n._d && xi(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function pa(e) {
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
    ctx: m,
    inheritAttrs: w
  } = e;
  let D, b;
  const H = Co(e);
  try {
    if (r.shapeFlag & 4) {
      const I = o || n, y = kr.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(I, {
        get(L, P, k) {
          return Bd(
            `Property '${String(
              P
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(L, P, k);
        }
      }) : I;
      D = Tt(
        u.call(
          y,
          I,
          f,
          a,
          h,
          d,
          m
        )
      ), b = l;
    } else {
      const I = t;
      kr.NODE_ENV, D = Tt(
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
      ), b = t.props ? l : Zd(l);
    }
  } catch (I) {
    Pn.length = 0, Go(I, e, 1), D = ie(yt);
  }
  let F = D;
  if (b && w !== !1) {
    const I = Object.keys(b), { shapeFlag: y } = F;
    I.length && y & 7 && (s && I.some(is) && (b = Jd(
      b,
      s
    )), F = Vt(F, b));
  }
  return r.dirs && (F = Vt(F), F.dirs = F.dirs ? F.dirs.concat(r.dirs) : r.dirs), r.transition && (F.transition = r.transition), D = F, Co(H), D;
}
const Zd = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Uo(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Jd = (e, t) => {
  const r = {};
  for (const n in e)
    (!is(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Xd(e, t, r) {
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
        if (s[d] !== n[d] && !Vo(c, d))
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
    if (t[a] !== e[a] && !Vo(r, a))
      return !0;
  }
  return !1;
}
function ev({ vnode: e, parent: t }, r) {
  if (r)
    for (; t; ) {
      const n = t.subTree;
      if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
        (e = t.vnode).el = r, t = t.parent;
      else
        break;
    }
}
const bs = "components", tv = "directives";
function St(e, t) {
  return ws(bs, e, !0, t) || e;
}
const Hc = Symbol.for("v-ndc");
function jc(e) {
  return $e(e) ? ws(bs, e, !1) || e : e || Hc;
}
function rv(e) {
  return ws(tv, e);
}
function ws(e, t, r = !0, n = !1) {
  const o = Ge || Ue;
  if (o) {
    const a = o.type;
    if (e === bs) {
      const i = vu(
        a,
        !1
      );
      if (i && (i === t || i === ft(t) || i === Wo(ft(t))))
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
  return e && (e[t] || e[ft(t)] || e[Wo(ft(t))]);
}
const nv = (e) => e.__isSuspense;
function ov(e, t) {
  t && t.pendingBranch ? ae(e) ? t.effects.push(...e) : t.effects.push(e) : Kd(e);
}
const av = Symbol.for("v-scx"), sv = () => Gt(av);
function Wc(e, t) {
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
    const y = t;
    t = (...L) => {
      y(...L), I();
    };
  }
  const c = fd() === ((l = Ue) == null ? void 0 : l.scope) ? Ue : null;
  let u, f = !1, d = !1;
  if (Pe(e) ? (u = () => e.value, f = Hr(e)) : Vr(e) ? (u = Hr(e) || n === !1 ? () => Ut(e, 1) : () => Ut(e), f = !0) : ae(e) ? (d = !0, f = e.some((y) => Vr(y) || Hr(y)), u = () => e.map((y) => {
    if (Pe(y))
      return y.value;
    if (Vr(y))
      return Ut(y, Hr(y) || n === !1 ? 1 : void 0);
    if (ue(y))
      return zt(y, c, 2);
  })) : ue(e) ? t ? u = () => zt(e, c, 2) : u = () => {
    if (!(c && c.isUnmounted))
      return h && h(), gt(
        e,
        c,
        3,
        [m]
      );
  } : u = ut, t && n) {
    const y = u;
    u = () => Ut(y());
  }
  let h, m = (y) => {
    h = F.onStop = () => {
      zt(y, c, 4), h = F.onStop = void 0;
    };
  }, w;
  if (Xo)
    if (m = ut, t ? r && gt(t, c, 3, [
      u(),
      d ? [] : void 0,
      m
    ]) : u(), o === "sync") {
      const y = sv();
      w = y.__watcherHandles || (y.__watcherHandles = []);
    } else
      return ut;
  let D = d ? new Array(e.length).fill(oo) : oo;
  const b = () => {
    if (!(!F.active || !F.dirty))
      if (t) {
        const y = F.run();
        (n || f || (d ? y.some((L, P) => ur(L, D[P])) : ur(y, D))) && (h && h(), gt(t, c, 3, [
          y,
          // pass undefined as the old value when it's changed for the first time
          D === oo ? void 0 : d && D[0] === oo ? [] : D,
          m
        ]), D = y);
      } else
        F.run();
  };
  b.allowRecurse = !!t;
  let H;
  o === "sync" ? H = b : o === "post" ? H = () => ot(b, c && c.suspense) : (b.pre = !0, c && (b.id = c.uid), H = () => ys(b));
  const F = new us(u, ut, H), I = () => {
    F.stop(), c && c.scope && ls(c.scope.effects, F);
  };
  return t ? r ? b() : D = F.run() : o === "post" ? ot(
    F.run.bind(F),
    c && c.suspense
  ) : F.run(), w && w.push(I), I;
}
function iv(e, t, r) {
  const n = this.proxy, o = $e(e) ? e.includes(".") ? zc(n, e) : () => n[e] : e.bind(n, n);
  let a;
  ue(t) ? a = t : (a = t.handler, r = t);
  const s = Ue;
  Jr(this);
  const i = _s(o, a.bind(n), r);
  return s ? Jr(s) : Ir(), i;
}
function zc(e, t) {
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
  else if (ae(e))
    for (let o = 0; o < e.length; o++)
      Ut(e[o], t, r, n);
  else if (uc(e) || Gr(e))
    e.forEach((o) => {
      Ut(o, t, r, n);
    });
  else if (vc(e))
    for (const o in e)
      Ut(e[o], t, r, n);
  return e;
}
function jr(e, t) {
  const r = Ge;
  if (r === null)
    return e;
  const n = ea(r) || r.proxy, o = e.dirs || (e.dirs = []);
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
function mr(e, t, r, n) {
  const o = e.dirs, a = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    a && (i.oldValue = a[s].value);
    let l = i.dir[n];
    l && (dr(), gt(l, r, 8, [
      e.el,
      i,
      e,
      t
    ]), vr());
  }
}
const or = Symbol("_leaveCb"), ao = Symbol("_enterCb");
function lv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Pr(() => {
    e.isMounted = !0;
  }), qc(() => {
    e.isUnmounting = !0;
  }), e;
}
const vt = [Function, Array], Gc = {
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
}, cv = {
  name: "BaseTransition",
  props: Gc,
  setup(e, { slots: t }) {
    const r = zv(), n = lv();
    let o;
    return () => {
      const a = t.default && Kc(t.default(), !0);
      if (!a || !a.length)
        return;
      let s = a[0];
      if (a.length > 1) {
        for (const w of a)
          if (w.type !== yt) {
            s = w;
            break;
          }
      }
      const i = pe(e), { mode: l } = i;
      if (n.isLeaving)
        return ha(s);
      const c = hi(s);
      if (!c)
        return ha(s);
      const u = Ra(
        c,
        i,
        n,
        r
      );
      La(c, u);
      const f = r.subTree, d = f && hi(f);
      let h = !1;
      const { getTransitionKey: m } = c.type;
      if (m) {
        const w = m();
        o === void 0 ? o = w : w !== o && (o = w, h = !0);
      }
      if (d && d.type !== yt && (!Ar(c, d) || h)) {
        const w = Ra(
          d,
          i,
          n,
          r
        );
        if (La(d, w), l === "out-in")
          return n.isLeaving = !0, w.afterLeave = () => {
            n.isLeaving = !1, r.update.active !== !1 && (r.effect.dirty = !0, r.update());
          }, ha(s);
        l === "in-out" && c.type !== yt && (w.delayLeave = (D, b, H) => {
          const F = Vc(
            n,
            d
          );
          F[String(d.key)] = d, D[or] = () => {
            b(), D[or] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = H;
        });
      }
      return s;
    };
  }
}, uv = cv;
function Vc(e, t) {
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
    onLeaveCancelled: m,
    onBeforeAppear: w,
    onAppear: D,
    onAfterAppear: b,
    onAppearCancelled: H
  } = t, F = String(e.key), I = Vc(r, e), y = (k, z) => {
    k && gt(
      k,
      n,
      9,
      z
    );
  }, L = (k, z) => {
    const j = z[1];
    y(k, z), ae(k) ? k.every((q) => q.length <= 1) && j() : k.length <= 1 && j();
  }, P = {
    mode: a,
    persisted: s,
    beforeEnter(k) {
      let z = i;
      if (!r.isMounted)
        if (o)
          z = w || i;
        else
          return;
      k[or] && k[or](
        !0
        /* cancelled */
      );
      const j = I[F];
      j && Ar(e, j) && j.el[or] && j.el[or](), y(z, [k]);
    },
    enter(k) {
      let z = l, j = c, q = u;
      if (!r.isMounted)
        if (o)
          z = D || l, j = b || c, q = H || u;
        else
          return;
      let A = !1;
      const U = k[ao] = (se) => {
        A || (A = !0, se ? y(q, [k]) : y(j, [k]), P.delayedLeave && P.delayedLeave(), k[ao] = void 0);
      };
      z ? L(z, [k, U]) : U();
    },
    leave(k, z) {
      const j = String(e.key);
      if (k[ao] && k[ao](
        !0
        /* cancelled */
      ), r.isUnmounting)
        return z();
      y(f, [k]);
      let q = !1;
      const A = k[or] = (U) => {
        q || (q = !0, z(), U ? y(m, [k]) : y(h, [k]), k[or] = void 0, I[j] === e && delete I[j]);
      };
      I[j] = e, d ? L(d, [k, A]) : A();
    },
    clone(k) {
      return Ra(k, t, r, n);
    }
  };
  return P;
}
function ha(e) {
  if (Ko(e))
    return e = Vt(e), e.children = null, e;
}
function hi(e) {
  return Ko(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    e.children ? e.children[0] : void 0
  ) : e;
}
function La(e, t) {
  e.shapeFlag & 6 && e.component ? La(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Kc(e, t = !1, r) {
  let n = [], o = 0;
  for (let a = 0; a < e.length; a++) {
    let s = e[a];
    const i = r == null ? s.key : String(r) + String(s.key != null ? s.key : a);
    s.type === we ? (s.patchFlag & 128 && o++, n = n.concat(
      Kc(s.children, t, i)
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
    Fe({ name: e.name }, t, { setup: e })
  ) : e;
}
const Sn = (e) => !!e.type.__asyncLoader, Ko = (e) => e.type.__isKeepAlive;
function fv(e, t) {
  Qc(e, "a", t);
}
function dv(e, t) {
  Qc(e, "da", t);
}
function Qc(e, t, r = Ue) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = r;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Qo(t, n, r), r) {
    let o = r.parent;
    for (; o && o.parent; )
      Ko(o.parent.vnode) && vv(n, t, r, o), o = o.parent;
  }
}
function vv(e, t, r, n) {
  const o = Qo(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Gn(() => {
    ls(n[t], o);
  }, r);
}
function Qo(e, t, r = Ue, n = !1) {
  if (r) {
    const o = r[e] || (r[e] = []), a = t.__weh || (t.__weh = (...s) => {
      if (r.isUnmounted)
        return;
      dr(), Jr(r);
      const i = gt(t, r, e, s);
      return Ir(), vr(), i;
    });
    return n ? o.unshift(a) : o.push(a), a;
  }
}
const Zt = (e) => (t, r = Ue) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Xo || e === "sp") && Qo(e, (...n) => t(...n), r)
), pv = Zt("bm"), Pr = Zt("m"), hv = Zt("bu"), gv = Zt("u"), qc = Zt("bum"), Gn = Zt("um"), mv = Zt("sp"), yv = Zt(
  "rtg"
), bv = Zt(
  "rtc"
);
function wv(e, t = Ue) {
  Qo("ec", e, t);
}
function mt(e, t, r, n) {
  let o;
  const a = r && r[n];
  if (ae(e) || $e(e)) {
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
  if (Ge.isCE || Ge.parent && Sn(Ge.parent) && Ge.parent.isCE)
    return t !== "default" && (r.name = t), ie("slot", r, n && n());
  let a = e[t];
  a && a._c && (a._d = !1), V();
  const s = a && Zc(a(r)), i = Ve(
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
function Zc(e) {
  return e.some((t) => ko(t) ? !(t.type === yt || t.type === we && !Zc(t.children)) : !0) ? e : null;
}
function _v(e, t) {
  const r = {};
  for (const n in e)
    r[t && /[A-Z]/.test(n) ? `on:${n}` : ho(n)] = e[n];
  return r;
}
const Fa = (e) => e ? fu(e) ? ea(e) || e.proxy : Fa(e.parent) : null, Tn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Fe(/* @__PURE__ */ Object.create(null), {
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
    $watch: (e) => iv.bind(e)
  })
), ga = (e, t) => e !== ke && !e.__isScriptSetup && he(e, t), Dv = {
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
        if (ga(n, t))
          return s[t] = 1, n[t];
        if (o !== ke && he(o, t))
          return s[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && he(c, t)
        )
          return s[t] = 3, a[t];
        if (r !== ke && he(r, t))
          return s[t] = 4, r[t];
        Ba && (s[t] = 0);
      }
    }
    const u = Tn[t];
    let f, d;
    if (u)
      return t === "$attrs" && it(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = i.__cssModules) && (f = f[t])
    )
      return f;
    if (r !== ke && he(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      d = l.config.globalProperties, he(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: o, ctx: a } = e;
    return ga(o, t) ? (o[t] = r, !0) : n !== ke && he(n, t) ? (n[t] = r, !0) : he(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: o, propsOptions: a }
  }, s) {
    let i;
    return !!r[s] || e !== ke && he(e, s) || ga(t, s) || (i = a[0]) && he(i, s) || he(n, s) || he(Tn, s) || he(o.config.globalProperties, s);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : he(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function gi(e) {
  return ae(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Ba = !0;
function Av(e) {
  const t = Ds(e), r = e.proxy, n = e.ctx;
  Ba = !1, t.beforeCreate && mi(t.beforeCreate, e, "bc");
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
    updated: m,
    activated: w,
    deactivated: D,
    beforeDestroy: b,
    beforeUnmount: H,
    destroyed: F,
    unmounted: I,
    render: y,
    renderTracked: L,
    renderTriggered: P,
    errorCaptured: k,
    serverPrefetch: z,
    // public API
    expose: j,
    inheritAttrs: q,
    // assets
    components: A,
    directives: U,
    filters: se
  } = t;
  if (c && xv(c, n, null), s)
    for (const te in s) {
      const le = s[te];
      ue(le) && (n[te] = le.bind(r));
    }
  if (o) {
    const te = o.call(r, r);
    Ce(te) && (e.data = sn(te));
  }
  if (Ba = !0, a)
    for (const te in a) {
      const le = a[te], ge = ue(le) ? le.bind(r, r) : ue(le.get) ? le.get.bind(r, r) : ut, Y = !ue(le) && ue(le.set) ? le.set.bind(r) : ut, de = x({
        get: ge,
        set: Y
      });
      Object.defineProperty(n, te, {
        enumerable: !0,
        configurable: !0,
        get: () => de.value,
        set: (Q) => de.value = Q
      });
    }
  if (i)
    for (const te in i)
      Jc(i[te], n, r, te);
  if (l) {
    const te = ue(l) ? l.call(r) : l;
    Reflect.ownKeys(te).forEach((le) => {
      ln(le, te[le]);
    });
  }
  u && mi(u, e, "c");
  function ee(te, le) {
    ae(le) ? le.forEach((ge) => te(ge.bind(r))) : le && te(le.bind(r));
  }
  if (ee(pv, f), ee(Pr, d), ee(hv, h), ee(gv, m), ee(fv, w), ee(dv, D), ee(wv, k), ee(bv, L), ee(yv, P), ee(qc, H), ee(Gn, I), ee(mv, z), ae(j))
    if (j.length) {
      const te = e.exposed || (e.exposed = {});
      j.forEach((le) => {
        Object.defineProperty(te, le, {
          get: () => r[le],
          set: (ge) => r[le] = ge
        });
      });
    } else
      e.exposed || (e.exposed = {});
  y && e.render === ut && (e.render = y), q != null && (e.inheritAttrs = q), A && (e.components = A), U && (e.directives = U);
}
function xv(e, t, r = ut) {
  ae(e) && (e = Ua(e));
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
function mi(e, t, r) {
  gt(
    ae(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Jc(e, t, r, n) {
  const o = n.includes(".") ? zc(r, n) : () => r[n];
  if ($e(e)) {
    const a = t[e];
    ue(a) && je(o, a);
  } else if (ue(e))
    je(o, e.bind(r));
  else if (Ce(e))
    if (ae(e))
      e.forEach((a) => Jc(a, t, r, n));
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
    (c) => Mo(l, c, s, !0)
  ), Mo(l, t, s)), Ce(t) && a.set(t, l), l;
}
function Mo(e, t, r, n = !1) {
  const { mixins: o, extends: a } = t;
  a && Mo(e, a, r, !0), o && o.forEach(
    (s) => Mo(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const i = Cv[s] || r && r[s];
      e[s] = i ? i(e[s], t[s]) : t[s];
    }
  return e;
}
const Cv = {
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
  watch: Ov,
  // provide / inject
  provide: yi,
  inject: Mv
};
function yi(e, t) {
  return t ? e ? function() {
    return Fe(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Mv(e, t) {
  return Mn(Ua(e), Ua(t));
}
function Ua(e) {
  if (ae(e)) {
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
  return e ? Fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e ? ae(e) && ae(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Fe(
    /* @__PURE__ */ Object.create(null),
    gi(e),
    gi(t ?? {})
  ) : t;
}
function Ov(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const r = Fe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = et(e[n], t[n]);
  return r;
}
function Xc() {
  return {
    app: null,
    config: {
      isNativeTag: qf,
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
let kv = 0;
function Iv(e, t) {
  return function(n, o = null) {
    ue(n) || (n = Fe({}, n)), o != null && !Ce(o) && (o = null);
    const a = Xc(), s = /* @__PURE__ */ new WeakSet();
    let i = !1;
    const l = a.app = {
      _uid: kv++,
      _component: n,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: ep,
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
          const d = ie(n, o);
          return d.appContext = a, f === !0 ? f = "svg" : f === !1 && (f = void 0), u && t ? t(d, c) : e(d, c, f), i = !0, l._container = c, c.__vue_app__ = l, ea(d.component) || d.component.proxy;
        }
      },
      unmount() {
        i && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return a.provides[c] = u, l;
      },
      runWithContext(c) {
        Oo = l;
        try {
          return c();
        } finally {
          Oo = null;
        }
      }
    };
    return l;
  };
}
let Oo = null;
function ln(e, t) {
  if (Ue) {
    let r = Ue.provides;
    const n = Ue.parent && Ue.parent.provides;
    n === r && (r = Ue.provides = Object.create(n)), r[e] = t;
  }
}
function Gt(e, t, r = !1) {
  const n = Ue || Ge;
  if (n || Oo) {
    const o = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : Oo._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return r && ue(t) ? t.call(n && n.proxy) : t;
  }
}
function Ev(e, t, r, n = !1) {
  const o = {}, a = {};
  Ao(a, Zo, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), eu(e, t, o, a);
  for (const s in e.propsOptions[0])
    s in o || (o[s] = void 0);
  r ? e.props = n ? o : Td(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function Sv(e, t, r, n) {
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
        if (Vo(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (l)
          if (he(a, d))
            h !== a[d] && (a[d] = h, c = !0);
          else {
            const m = ft(d);
            o[m] = Ha(
              l,
              i,
              m,
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
    eu(e, t, o, a) && (c = !0);
    let u;
    for (const f in i)
      (!t || // for camelCase
      !he(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = pt(f)) === f || !he(t, u))) && (l ? r && // for camelCase
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
        (!t || !he(t, f)) && (delete a[f], c = !0);
  }
  c && Wt(e, "set", "$attrs");
}
function eu(e, t, r, n) {
  const [o, a] = e.propsOptions;
  let s = !1, i;
  if (t)
    for (let l in t) {
      if (po(l))
        continue;
      const c = t[l];
      let u;
      o && he(o, u = ft(l)) ? !a || !a.includes(u) ? r[u] = c : (i || (i = {}))[u] = c : Vo(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
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
        !he(c, f)
      );
    }
  }
  return s;
}
function Ha(e, t, r, n, o, a) {
  const s = e[r];
  if (s != null) {
    const i = he(s, "default");
    if (i && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && ue(l)) {
        const { propsDefaults: c } = o;
        r in c ? n = c[r] : (Jr(o), n = c[r] = l.call(
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
function tu(e, t, r = !1) {
  const n = t.propsCache, o = n.get(e);
  if (o)
    return o;
  const a = e.props, s = {}, i = [];
  let l = !1;
  if (!ue(e)) {
    const u = (f) => {
      l = !0;
      const [d, h] = tu(f, t, !0);
      Fe(s, d), h && i.push(...h);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!a && !l)
    return Ce(e) && n.set(e, zr), zr;
  if (ae(a))
    for (let u = 0; u < a.length; u++) {
      const f = ft(a[u]);
      wi(f) && (s[f] = ke);
    }
  else if (a)
    for (const u in a) {
      const f = ft(u);
      if (wi(f)) {
        const d = a[u], h = s[f] = ae(d) || ue(d) ? { type: d } : Fe({}, d);
        if (h) {
          const m = Ai(Boolean, h.type), w = Ai(String, h.type);
          h[
            0
            /* shouldCast */
          ] = m > -1, h[
            1
            /* shouldCastTrue */
          ] = w < 0 || m < w, (m > -1 || he(h, "default")) && i.push(f);
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
  return ae(t) ? t.findIndex((r) => Di(r, e)) : ue(t) && Di(t, e) ? 0 : -1;
}
const ru = (e) => e[0] === "_" || e === "$stable", As = (e) => ae(e) ? e.map(Tt) : [Tt(e)], Tv = (e, t, r) => {
  if (t._n)
    return t;
  const n = Ye((...o) => (kr.NODE_ENV, As(t(...o))), r);
  return n._c = !1, n;
}, nu = (e, t, r) => {
  const n = e._ctx;
  for (const o in e) {
    if (ru(o))
      continue;
    const a = e[o];
    if (ue(a))
      t[o] = Tv(o, a, n);
    else if (a != null) {
      const s = As(a);
      t[o] = () => s;
    }
  }
}, ou = (e, t) => {
  const r = As(t);
  e.slots.default = () => r;
}, Pv = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (e.slots = pe(t), Ao(t, "_", r)) : nu(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && ou(e, t);
  Ao(e.slots, Zo, 1);
}, $v = (e, t, r) => {
  const { vnode: n, slots: o } = e;
  let a = !0, s = ke;
  if (n.shapeFlag & 32) {
    const i = t._;
    i ? r && i === 1 ? a = !1 : (Fe(o, t), !r && i === 1 && delete o._) : (a = !t.$stable, nu(t, o)), s = t;
  } else
    t && (ou(e, t), s = { default: 1 });
  if (a)
    for (const i in o)
      !ru(i) && s[i] == null && delete o[i];
};
function ja(e, t, r, n, o = !1) {
  if (ae(e)) {
    e.forEach(
      (d, h) => ja(
        d,
        t && (ae(t) ? t[h] : t),
        r,
        n,
        o
      )
    );
    return;
  }
  if (Sn(n) && !o)
    return;
  const a = n.shapeFlag & 4 ? ea(n.component) || n.component.proxy : n.el, s = o ? null : a, { i, r: l } = e, c = t && t.r, u = i.refs === ke ? i.refs = {} : i.refs, f = i.setupState;
  if (c != null && c !== l && ($e(c) ? (u[c] = null, he(f, c) && (f[c] = null)) : Pe(c) && (c.value = null)), ue(l))
    zt(l, i, 12, [s, u]);
  else {
    const d = $e(l), h = Pe(l);
    if (d || h) {
      const m = () => {
        if (e.f) {
          const w = d ? he(f, l) ? f[l] : u[l] : l.value;
          o ? ae(w) && ls(w, a) : ae(w) ? w.includes(a) || w.push(a) : d ? (u[l] = [a], he(f, l) && (f[l] = u[l])) : (l.value = [a], e.k && (u[e.k] = l.value));
        } else
          d ? (u[l] = s, he(f, l) && (f[l] = s)) : h && (l.value = s, e.k && (u[e.k] = s));
      };
      s ? (m.id = -1, ot(m, r)) : m();
    }
  }
}
const ot = ov;
function Yv(e) {
  return Nv(e);
}
function Nv(e, t) {
  const r = pc();
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
    insertStaticContent: m
  } = e, w = (v, g, _, M = null, C = null, N = null, B = void 0, $ = null, R = !!g.dynamicChildren) => {
    if (v === g)
      return;
    v && !Ar(v, g) && (M = Me(v), Q(v, C, N, !0), v = null), g.patchFlag === -2 && (R = !1, g.dynamicChildren = null);
    const { type: E, ref: W, shapeFlag: J } = g;
    switch (E) {
      case qo:
        D(v, g, _, M);
        break;
      case yt:
        b(v, g, _, M);
        break;
      case ya:
        v == null && H(g, _, M, B);
        break;
      case we:
        A(
          v,
          g,
          _,
          M,
          C,
          N,
          B,
          $,
          R
        );
        break;
      default:
        J & 1 ? y(
          v,
          g,
          _,
          M,
          C,
          N,
          B,
          $,
          R
        ) : J & 6 ? U(
          v,
          g,
          _,
          M,
          C,
          N,
          B,
          $,
          R
        ) : (J & 64 || J & 128) && E.process(
          v,
          g,
          _,
          M,
          C,
          N,
          B,
          $,
          R,
          Re
        );
    }
    W != null && C && ja(W, v && v.ref, N, g || v, !g);
  }, D = (v, g, _, M) => {
    if (v == null)
      n(
        g.el = i(g.children),
        _,
        M
      );
    else {
      const C = g.el = v.el;
      g.children !== v.children && c(C, g.children);
    }
  }, b = (v, g, _, M) => {
    v == null ? n(
      g.el = l(g.children || ""),
      _,
      M
    ) : g.el = v.el;
  }, H = (v, g, _, M) => {
    [v.el, v.anchor] = m(
      v.children,
      g,
      _,
      M,
      v.el,
      v.anchor
    );
  }, F = ({ el: v, anchor: g }, _, M) => {
    let C;
    for (; v && v !== g; )
      C = d(v), n(v, _, M), v = C;
    n(g, _, M);
  }, I = ({ el: v, anchor: g }) => {
    let _;
    for (; v && v !== g; )
      _ = d(v), o(v), v = _;
    o(g);
  }, y = (v, g, _, M, C, N, B, $, R) => {
    g.type === "svg" ? B = "svg" : g.type === "math" && (B = "mathml"), v == null ? L(
      g,
      _,
      M,
      C,
      N,
      B,
      $,
      R
    ) : z(
      v,
      g,
      C,
      N,
      B,
      $,
      R
    );
  }, L = (v, g, _, M, C, N, B, $) => {
    let R, E;
    const { props: W, shapeFlag: J, transition: Z, dirs: re } = v;
    if (R = v.el = s(
      v.type,
      N,
      W && W.is,
      W
    ), J & 8 ? u(R, v.children) : J & 16 && k(
      v.children,
      R,
      null,
      M,
      C,
      ma(v, N),
      B,
      $
    ), re && mr(v, null, M, "created"), P(R, v, v.scopeId, B, M), W) {
      for (const ve in W)
        ve !== "value" && !po(ve) && a(
          R,
          ve,
          null,
          W[ve],
          N,
          v.children,
          M,
          C,
          De
        );
      "value" in W && a(R, "value", null, W.value, N), (E = W.onVnodeBeforeMount) && Et(E, M, v);
    }
    re && mr(v, null, M, "beforeMount");
    const ce = Rv(C, Z);
    ce && Z.beforeEnter(R), n(R, g, _), ((E = W && W.onVnodeMounted) || ce || re) && ot(() => {
      E && Et(E, M, v), ce && Z.enter(R), re && mr(v, null, M, "mounted");
    }, C);
  }, P = (v, g, _, M, C) => {
    if (_ && h(v, _), M)
      for (let N = 0; N < M.length; N++)
        h(v, M[N]);
    if (C) {
      let N = C.subTree;
      if (g === N) {
        const B = C.vnode;
        P(
          v,
          B,
          B.scopeId,
          B.slotScopeIds,
          C.parent
        );
      }
    }
  }, k = (v, g, _, M, C, N, B, $, R = 0) => {
    for (let E = R; E < v.length; E++) {
      const W = v[E] = $ ? ar(v[E]) : Tt(v[E]);
      w(
        null,
        W,
        g,
        _,
        M,
        C,
        N,
        B,
        $
      );
    }
  }, z = (v, g, _, M, C, N, B) => {
    const $ = g.el = v.el;
    let { patchFlag: R, dynamicChildren: E, dirs: W } = g;
    R |= v.patchFlag & 16;
    const J = v.props || ke, Z = g.props || ke;
    let re;
    if (_ && yr(_, !1), (re = Z.onVnodeBeforeUpdate) && Et(re, _, g, v), W && mr(g, v, _, "beforeUpdate"), _ && yr(_, !0), E ? j(
      v.dynamicChildren,
      E,
      $,
      _,
      M,
      ma(g, C),
      N
    ) : B || le(
      v,
      g,
      $,
      null,
      _,
      M,
      ma(g, C),
      N,
      !1
    ), R > 0) {
      if (R & 16)
        q(
          $,
          g,
          J,
          Z,
          _,
          M,
          C
        );
      else if (R & 2 && J.class !== Z.class && a($, "class", null, Z.class, C), R & 4 && a($, "style", J.style, Z.style, C), R & 8) {
        const ce = g.dynamicProps;
        for (let ve = 0; ve < ce.length; ve++) {
          const ye = ce[ve], Te = J[ye], ze = Z[ye];
          (ze !== Te || ye === "value") && a(
            $,
            ye,
            Te,
            ze,
            C,
            v.children,
            _,
            M,
            De
          );
        }
      }
      R & 1 && v.children !== g.children && u($, g.children);
    } else
      !B && E == null && q(
        $,
        g,
        J,
        Z,
        _,
        M,
        C
      );
    ((re = Z.onVnodeUpdated) || W) && ot(() => {
      re && Et(re, _, g, v), W && mr(g, v, _, "updated");
    }, M);
  }, j = (v, g, _, M, C, N, B) => {
    for (let $ = 0; $ < g.length; $++) {
      const R = v[$], E = g[$], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        R.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (R.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ar(R, E) || // - In the case of a component, it could contain anything.
        R.shapeFlag & 70) ? f(R.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      w(
        R,
        E,
        W,
        null,
        M,
        C,
        N,
        B,
        !0
      );
    }
  }, q = (v, g, _, M, C, N, B) => {
    if (_ !== M) {
      if (_ !== ke)
        for (const $ in _)
          !po($) && !($ in M) && a(
            v,
            $,
            _[$],
            null,
            B,
            g.children,
            C,
            N,
            De
          );
      for (const $ in M) {
        if (po($))
          continue;
        const R = M[$], E = _[$];
        R !== E && $ !== "value" && a(
          v,
          $,
          E,
          R,
          B,
          g.children,
          C,
          N,
          De
        );
      }
      "value" in M && a(v, "value", _.value, M.value, B);
    }
  }, A = (v, g, _, M, C, N, B, $, R) => {
    const E = g.el = v ? v.el : i(""), W = g.anchor = v ? v.anchor : i("");
    let { patchFlag: J, dynamicChildren: Z, slotScopeIds: re } = g;
    re && ($ = $ ? $.concat(re) : re), v == null ? (n(E, _, M), n(W, _, M), k(
      g.children,
      _,
      W,
      C,
      N,
      B,
      $,
      R
    )) : J > 0 && J & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren ? (j(
      v.dynamicChildren,
      Z,
      _,
      C,
      N,
      B,
      $
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || C && g === C.subTree) && au(
      v,
      g,
      !0
      /* shallow */
    )) : le(
      v,
      g,
      _,
      W,
      C,
      N,
      B,
      $,
      R
    );
  }, U = (v, g, _, M, C, N, B, $, R) => {
    g.slotScopeIds = $, v == null ? g.shapeFlag & 512 ? C.ctx.activate(
      g,
      _,
      M,
      B,
      R
    ) : se(
      g,
      _,
      M,
      C,
      N,
      B,
      R
    ) : K(v, g, R);
  }, se = (v, g, _, M, C, N, B) => {
    const $ = v.component = Wv(
      v,
      M,
      C
    );
    if (Ko(v) && ($.ctx.renderer = Re), Gv($), $.asyncDep) {
      if (C && C.registerDep($, ee), !v.el) {
        const R = $.subTree = ie(yt);
        b(null, R, g, _);
      }
    } else
      ee(
        $,
        v,
        g,
        _,
        C,
        N,
        B
      );
  }, K = (v, g, _) => {
    const M = g.component = v.component;
    if (Xd(v, g, _))
      if (M.asyncDep && !M.asyncResolved) {
        te(M, g, _);
        return;
      } else
        M.next = g, Vd(M.update), M.effect.dirty = !0, M.update();
    else
      g.el = v.el, M.vnode = g;
  }, ee = (v, g, _, M, C, N, B) => {
    const $ = () => {
      if (v.isMounted) {
        let { next: W, bu: J, u: Z, parent: re, vnode: ce } = v;
        {
          const kt = su(v);
          if (kt) {
            W && (W.el = ce.el, te(v, W, B)), kt.asyncDep.then(() => {
              v.isUnmounted || $();
            });
            return;
          }
        }
        let ve = W, ye;
        yr(v, !1), W ? (W.el = ce.el, te(v, W, B)) : W = ce, J && da(J), (ye = W.props && W.props.onVnodeBeforeUpdate) && Et(ye, re, W, ce), yr(v, !0);
        const Te = pa(v), ze = v.subTree;
        v.subTree = Te, w(
          ze,
          Te,
          // parent may have changed if it's in a teleport
          f(ze.el),
          // anchor may have changed if it's in a fragment
          Me(ze),
          v,
          C,
          N
        ), W.el = Te.el, ve === null && ev(v, Te.el), Z && ot(Z, C), (ye = W.props && W.props.onVnodeUpdated) && ot(
          () => Et(ye, re, W, ce),
          C
        );
      } else {
        let W;
        const { el: J, props: Z } = g, { bm: re, m: ce, parent: ve } = v, ye = Sn(g);
        if (yr(v, !1), re && da(re), !ye && (W = Z && Z.onVnodeBeforeMount) && Et(W, ve, g), yr(v, !0), J && Ze) {
          const Te = () => {
            v.subTree = pa(v), Ze(
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
            () => !v.isUnmounted && Te()
          ) : Te();
        } else {
          const Te = v.subTree = pa(v);
          w(
            null,
            Te,
            _,
            M,
            v,
            C,
            N
          ), g.el = Te.el;
        }
        if (ce && ot(ce, C), !ye && (W = Z && Z.onVnodeMounted)) {
          const Te = g;
          ot(
            () => Et(W, ve, Te),
            C
          );
        }
        (g.shapeFlag & 256 || ve && Sn(ve.vnode) && ve.vnode.shapeFlag & 256) && v.a && ot(v.a, C), v.isMounted = !0, g = _ = M = null;
      }
    }, R = v.effect = new us(
      $,
      ut,
      () => ys(E),
      v.scope
      // track it in component's effect scope
    ), E = v.update = () => {
      R.dirty && R.run();
    };
    E.id = v.uid, yr(v, !0), E();
  }, te = (v, g, _) => {
    g.component = v;
    const M = v.vnode.props;
    v.vnode = g, v.next = null, Sv(v, g.props, M, _), $v(v, g.children, _), dr(), di(v), vr();
  }, le = (v, g, _, M, C, N, B, $, R = !1) => {
    const E = v && v.children, W = v ? v.shapeFlag : 0, J = g.children, { patchFlag: Z, shapeFlag: re } = g;
    if (Z > 0) {
      if (Z & 128) {
        Y(
          E,
          J,
          _,
          M,
          C,
          N,
          B,
          $,
          R
        );
        return;
      } else if (Z & 256) {
        ge(
          E,
          J,
          _,
          M,
          C,
          N,
          B,
          $,
          R
        );
        return;
      }
    }
    re & 8 ? (W & 16 && De(E, C, N), J !== E && u(_, J)) : W & 16 ? re & 16 ? Y(
      E,
      J,
      _,
      M,
      C,
      N,
      B,
      $,
      R
    ) : De(E, C, N, !0) : (W & 8 && u(_, ""), re & 16 && k(
      J,
      _,
      M,
      C,
      N,
      B,
      $,
      R
    ));
  }, ge = (v, g, _, M, C, N, B, $, R) => {
    v = v || zr, g = g || zr;
    const E = v.length, W = g.length, J = Math.min(E, W);
    let Z;
    for (Z = 0; Z < J; Z++) {
      const re = g[Z] = R ? ar(g[Z]) : Tt(g[Z]);
      w(
        v[Z],
        re,
        _,
        null,
        C,
        N,
        B,
        $,
        R
      );
    }
    E > W ? De(
      v,
      C,
      N,
      !0,
      !1,
      J
    ) : k(
      g,
      _,
      M,
      C,
      N,
      B,
      $,
      R,
      J
    );
  }, Y = (v, g, _, M, C, N, B, $, R) => {
    let E = 0;
    const W = g.length;
    let J = v.length - 1, Z = W - 1;
    for (; E <= J && E <= Z; ) {
      const re = v[E], ce = g[E] = R ? ar(g[E]) : Tt(g[E]);
      if (Ar(re, ce))
        w(
          re,
          ce,
          _,
          null,
          C,
          N,
          B,
          $,
          R
        );
      else
        break;
      E++;
    }
    for (; E <= J && E <= Z; ) {
      const re = v[J], ce = g[Z] = R ? ar(g[Z]) : Tt(g[Z]);
      if (Ar(re, ce))
        w(
          re,
          ce,
          _,
          null,
          C,
          N,
          B,
          $,
          R
        );
      else
        break;
      J--, Z--;
    }
    if (E > J) {
      if (E <= Z) {
        const re = Z + 1, ce = re < W ? g[re].el : M;
        for (; E <= Z; )
          w(
            null,
            g[E] = R ? ar(g[E]) : Tt(g[E]),
            _,
            ce,
            C,
            N,
            B,
            $,
            R
          ), E++;
      }
    } else if (E > Z)
      for (; E <= J; )
        Q(v[E], C, N, !0), E++;
    else {
      const re = E, ce = E, ve = /* @__PURE__ */ new Map();
      for (E = ce; E <= Z; E++) {
        const He = g[E] = R ? ar(g[E]) : Tt(g[E]);
        He.key != null && ve.set(He.key, E);
      }
      let ye, Te = 0;
      const ze = Z - ce + 1;
      let kt = !1, gr = 0;
      const It = new Array(ze);
      for (E = 0; E < ze; E++)
        It[E] = 0;
      for (E = re; E <= J; E++) {
        const He = v[E];
        if (Te >= ze) {
          Q(He, C, N, !0);
          continue;
        }
        let Je;
        if (He.key != null)
          Je = ve.get(He.key);
        else
          for (ye = ce; ye <= Z; ye++)
            if (It[ye - ce] === 0 && Ar(He, g[ye])) {
              Je = ye;
              break;
            }
        Je === void 0 ? Q(He, C, N, !0) : (It[Je - ce] = E + 1, Je >= gr ? gr = Je : kt = !0, w(
          He,
          g[Je],
          _,
          null,
          C,
          N,
          B,
          $,
          R
        ), Te++);
      }
      const Lr = kt ? Lv(It) : zr;
      for (ye = Lr.length - 1, E = ze - 1; E >= 0; E--) {
        const He = ce + E, Je = g[He], T = He + 1 < W ? g[He + 1].el : M;
        It[E] === 0 ? w(
          null,
          Je,
          _,
          T,
          C,
          N,
          B,
          $,
          R
        ) : kt && (ye < 0 || E !== Lr[ye] ? de(Je, _, T, 2) : ye--);
      }
    }
  }, de = (v, g, _, M, C = null) => {
    const { el: N, type: B, transition: $, children: R, shapeFlag: E } = v;
    if (E & 6) {
      de(v.component.subTree, g, _, M);
      return;
    }
    if (E & 128) {
      v.suspense.move(g, _, M);
      return;
    }
    if (E & 64) {
      B.move(v, g, _, Re);
      return;
    }
    if (B === we) {
      n(N, g, _);
      for (let J = 0; J < R.length; J++)
        de(R[J], g, _, M);
      n(v.anchor, g, _);
      return;
    }
    if (B === ya) {
      F(v, g, _);
      return;
    }
    if (M !== 2 && E & 1 && $)
      if (M === 0)
        $.beforeEnter(N), n(N, g, _), ot(() => $.enter(N), C);
      else {
        const { leave: J, delayLeave: Z, afterLeave: re } = $, ce = () => n(N, g, _), ve = () => {
          J(N, () => {
            ce(), re && re();
          });
        };
        Z ? Z(N, ce, ve) : ve();
      }
    else
      n(N, g, _);
  }, Q = (v, g, _, M = !1, C = !1) => {
    const {
      type: N,
      props: B,
      ref: $,
      children: R,
      dynamicChildren: E,
      shapeFlag: W,
      patchFlag: J,
      dirs: Z
    } = v;
    if ($ != null && ja($, null, _, v, !0), W & 256) {
      g.ctx.deactivate(v);
      return;
    }
    const re = W & 1 && Z, ce = !Sn(v);
    let ve;
    if (ce && (ve = B && B.onVnodeBeforeUnmount) && Et(ve, g, v), W & 6)
      Se(v.component, _, M);
    else {
      if (W & 128) {
        v.suspense.unmount(_, M);
        return;
      }
      re && mr(v, null, g, "beforeUnmount"), W & 64 ? v.type.remove(
        v,
        g,
        _,
        C,
        Re,
        M
      ) : E && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== we || J > 0 && J & 64) ? De(
        E,
        g,
        _,
        !1,
        !0
      ) : (N === we && J & 384 || !C && W & 16) && De(R, g, _), M && Ie(v);
    }
    (ce && (ve = B && B.onVnodeUnmounted) || re) && ot(() => {
      ve && Et(ve, g, v), re && mr(v, null, g, "unmounted");
    }, _);
  }, Ie = (v) => {
    const { type: g, el: _, anchor: M, transition: C } = v;
    if (g === we) {
      me(_, M);
      return;
    }
    if (g === ya) {
      I(v);
      return;
    }
    const N = () => {
      o(_), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (v.shapeFlag & 1 && C && !C.persisted) {
      const { leave: B, delayLeave: $ } = C, R = () => B(_, N);
      $ ? $(v.el, N, R) : R();
    } else
      N();
  }, me = (v, g) => {
    let _;
    for (; v !== g; )
      _ = d(v), o(v), v = _;
    o(g);
  }, Se = (v, g, _) => {
    const { bum: M, scope: C, update: N, subTree: B, um: $ } = v;
    M && da(M), C.stop(), N && (N.active = !1, Q(B, v, g, _)), $ && ot($, g), ot(() => {
      v.isUnmounted = !0;
    }, g), g && g.pendingBranch && !g.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve());
  }, De = (v, g, _, M = !1, C = !1, N = 0) => {
    for (let B = N; B < v.length; B++)
      Q(v[B], g, _, M, C);
  }, Me = (v) => v.shapeFlag & 6 ? Me(v.component.subTree) : v.shapeFlag & 128 ? v.suspense.next() : d(v.anchor || v.el), Ne = (v, g, _) => {
    v == null ? g._vnode && Q(g._vnode, null, null, !0) : w(
      g._vnode || null,
      v,
      g,
      null,
      null,
      null,
      _
    ), di(), Lc(), g._vnode = v;
  }, Re = {
    p: w,
    um: Q,
    m: de,
    r: Ie,
    mt: se,
    mc: k,
    pc: le,
    pbc: j,
    n: Me,
    o: e
  };
  let lt, Ze;
  return t && ([lt, Ze] = t(
    Re
  )), {
    render: Ne,
    hydrate: lt,
    createApp: Iv(Ne, lt)
  };
}
function ma({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function yr({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r;
}
function Rv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function au(e, t, r = !1) {
  const n = e.children, o = t.children;
  if (ae(n) && ae(o))
    for (let a = 0; a < n.length; a++) {
      const s = n[a];
      let i = o[a];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[a] = ar(o[a]), i.el = s.el), r || au(s, i)), i.type === qo && (i.el = s.el);
    }
}
function Lv(e) {
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
function su(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : su(t);
}
const Fv = (e) => e.__isTeleport, we = Symbol.for("v-fgt"), qo = Symbol.for("v-txt"), yt = Symbol.for("v-cmt"), ya = Symbol.for("v-stc"), Pn = [];
let xt = null;
function V(e = !1) {
  Pn.push(xt = e ? null : []);
}
function Bv() {
  Pn.pop(), xt = Pn[Pn.length - 1] || null;
}
let Fn = 1;
function xi(e) {
  Fn += e;
}
function iu(e) {
  return e.dynamicChildren = Fn > 0 ? xt || zr : null, Bv(), Fn > 0 && xt && xt.push(e), e;
}
function oe(e, t, r, n, o, a) {
  return iu(
    ne(
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
  return iu(
    ie(
      e,
      t,
      r,
      n,
      o,
      !0
    )
  );
}
function ko(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ar(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Uv = (...e) => cu(
  ...e
), Zo = "__vInternal", lu = ({ key: e }) => e ?? null, mo = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? $e(e) || Pe(e) || ue(e) ? { i: Ge, r: e, k: t, f: !!r } : e : null);
function ne(e, t = null, r = null, n = 0, o = null, a = e === we ? 0 : 1, s = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && lu(t),
    ref: t && mo(t),
    scopeId: Uc,
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
  return i ? (xs(l, r), a & 128 && e.normalize(l)) : r && (l.shapeFlag |= $e(r) ? 8 : 16), Fn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  xt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && xt.push(l), l;
}
const ie = kr.NODE_ENV !== "production" ? Uv : cu;
function cu(e, t = null, r = null, n = 0, o = null, a = !1) {
  if ((!e || e === Hc) && (e = yt), ko(e)) {
    const i = Vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && xs(i, r), Fn > 0 && !a && xt && (i.shapeFlag & 6 ? xt[xt.indexOf(e)] = i : xt.push(i)), i.patchFlag |= -2, i;
  }
  if (Jv(e) && (e = e.__vccOpts), t) {
    t = Io(t);
    let { class: i, style: l } = t;
    i && !$e(i) && (t.class = xe(i)), Ce(l) && (Ic(l) && !ae(l) && (l = Fe({}, l)), t.style = jt(l));
  }
  const s = $e(e) ? 1 : nv(e) ? 128 : Fv(e) ? 64 : Ce(e) ? 4 : ue(e) ? 2 : 0;
  return ne(
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
function Io(e) {
  return e ? Ic(e) || Zo in e ? Fe({}, e) : e : null;
}
function Vt(e, t, r = !1) {
  const { props: n, ref: o, patchFlag: a, children: s } = e, i = t ? $r(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && lu(i),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? ae(o) ? o.concat(mo(t)) : [o, mo(t)] : mo(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: kr.NODE_ENV !== "production" && a === -1 && ae(s) ? s.map(uu) : s,
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
function uu(e) {
  const t = Vt(e);
  return ae(e.children) && (t.children = e.children.map(uu)), t;
}
function Jo(e = " ", t = 0) {
  return ie(qo, null, e, t);
}
function Be(e = "", t = !1) {
  return t ? (V(), Ve(yt, null, e)) : ie(yt, null, e);
}
function Tt(e) {
  return e == null || typeof e == "boolean" ? ie(yt) : ae(e) ? ie(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ar(e) : ie(qo, null, String(e));
}
function ar(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vt(e);
}
function xs(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ae(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), xs(e, o()), o._c && (o._d = !0));
      return;
    } else {
      r = 32;
      const o = t._;
      !o && !(Zo in t) ? t._ctx = Ge : o === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    ue(t) ? (t = { default: t, _ctx: Ge }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Jo(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function $r(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = xe([t.class, n.class]));
      else if (o === "style")
        t.style = jt([t.style, n.style]);
      else if (Uo(o)) {
        const a = t[o], s = n[o];
        s && a !== s && !(ae(a) && a.includes(s)) && (t[o] = a ? [].concat(a, s) : s);
      } else
        o !== "" && (t[o] = n[o]);
  }
  return t;
}
function Et(e, t, r, n = null) {
  gt(e, t, 7, [
    r,
    n
  ]);
}
const Hv = Xc();
let jv = 0;
function Wv(e, t, r) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || Hv, a = {
    uid: jv++,
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
    scope: new cd(
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
    propsOptions: tu(n, o),
    emitsOptions: Bc(n, o),
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = qd.bind(null, a), e.ce && e.ce(a), a;
}
let Ue = null;
const zv = () => Ue || Ge;
let Cs, Wa;
{
  const e = pc(), t = (r, n) => {
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
    (r) => Xo = r
  );
}
const Jr = (e) => {
  Cs(e), e.scope.on();
}, Ir = () => {
  Ue && Ue.scope.off(), Cs(null);
};
function fu(e) {
  return e.vnode.shapeFlag & 4;
}
let Xo = !1;
function Gv(e, t = !1) {
  t && Wa(t);
  const { props: r, children: n } = e.vnode, o = fu(e);
  Ev(e, r, o, t), Pv(e, n);
  const a = o ? Vv(e, t) : void 0;
  return t && Wa(!1), a;
}
function Vv(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ec(new Proxy(e.ctx, Dv));
  const { setup: n } = r;
  if (n) {
    const o = e.setupContext = n.length > 1 ? Qv(e) : null;
    Jr(e), dr();
    const a = zt(
      n,
      e,
      0,
      [
        e.props,
        o
      ]
    );
    if (vr(), Ir(), fc(a)) {
      if (a.then(Ir, Ir), t)
        return a.then((s) => {
          Ci(e, s, t);
        }).catch((s) => {
          Go(s, e, 0);
        });
      e.asyncDep = a;
    } else
      Ci(e, a, t);
  } else
    du(e, t);
}
function Ci(e, t, r) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ce(t) && (e.setupState = Pc(t)), du(e, r);
}
let Mi;
function du(e, t, r) {
  const n = e.type;
  if (!e.render) {
    if (!t && Mi && !n.render) {
      const o = n.template || Ds(e).template;
      if (o) {
        const { isCustomElement: a, compilerOptions: s } = e.appContext.config, { delimiters: i, compilerOptions: l } = n, c = Fe(
          Fe(
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
    Jr(e), dr();
    try {
      Av(e);
    } finally {
      vr(), Ir();
    }
  }
}
function Kv(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, r) {
        return it(e, "get", "$attrs"), t[r];
      }
    }
  ));
}
function Qv(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    get attrs() {
      return Kv(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ea(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Pc(Ec(e.exposed)), {
      get(t, r) {
        if (r in t)
          return t[r];
        if (r in Tn)
          return Tn[r](e);
      },
      has(t, r) {
        return r in t || r in Tn;
      }
    }));
}
const qv = /(?:^|[-_])(\w)/g, Zv = (e) => e.replace(qv, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function vu(e, t = !0) {
  return ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function pu(e, t, r = !1) {
  let n = vu(t);
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
  return n ? Zv(n) : r ? "App" : "Anonymous";
}
function Jv(e) {
  return ue(e) && "__vccOpts" in e;
}
const x = (e, t) => Pd(e, t, Xo);
function Xv(e, t, r) {
  const n = arguments.length;
  return n === 2 ? Ce(t) && !ae(t) ? ko(t) ? ie(e, null, [t]) : ie(e, t) : ie(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && ko(r) && (r = [r]), ie(e, t, r));
}
const ep = "3.4.3", tp = "http://www.w3.org/2000/svg", rp = "http://www.w3.org/1998/Math/MathML", sr = typeof document < "u" ? document : null, Oi = sr && /* @__PURE__ */ sr.createElement("template"), np = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const o = t === "svg" ? sr.createElementNS(tp, e) : t === "mathml" ? sr.createElementNS(rp, e) : sr.createElement(e, r ? { is: r } : void 0);
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
}, tr = "transition", bn = "animation", Bn = Symbol("_vtc"), ta = (e, { slots: t }) => Xv(uv, op(e), t);
ta.displayName = "Transition";
const hu = {
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
ta.props = /* @__PURE__ */ Fe(
  {},
  Gc,
  hu
);
const br = (e, t = []) => {
  ae(e) ? e.forEach((r) => r(...t)) : e && e(...t);
}, ki = (e) => e ? ae(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function op(e) {
  const t = {};
  for (const A in e)
    A in hu || (t[A] = e[A]);
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
  } = e, m = ap(o), w = m && m[0], D = m && m[1], {
    onBeforeEnter: b,
    onEnter: H,
    onEnterCancelled: F,
    onLeave: I,
    onLeaveCancelled: y,
    onBeforeAppear: L = b,
    onAppear: P = H,
    onAppearCancelled: k = F
  } = t, z = (A, U, se) => {
    wr(A, U ? u : i), wr(A, U ? c : s), se && se();
  }, j = (A, U) => {
    A._isLeaving = !1, wr(A, f), wr(A, h), wr(A, d), U && U();
  }, q = (A) => (U, se) => {
    const K = A ? P : H, ee = () => z(U, A, se);
    br(K, [U, ee]), Ii(() => {
      wr(U, A ? l : a), rr(U, A ? u : i), ki(K) || Ei(U, n, w, ee);
    });
  };
  return Fe(t, {
    onBeforeEnter(A) {
      br(b, [A]), rr(A, a), rr(A, s);
    },
    onBeforeAppear(A) {
      br(L, [A]), rr(A, l), rr(A, c);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(A, U) {
      A._isLeaving = !0;
      const se = () => j(A, U);
      rr(A, f), lp(), rr(A, d), Ii(() => {
        A._isLeaving && (wr(A, f), rr(A, h), ki(I) || Ei(A, n, D, se));
      }), br(I, [A, se]);
    },
    onEnterCancelled(A) {
      z(A, !1), br(F, [A]);
    },
    onAppearCancelled(A) {
      z(A, !0), br(k, [A]);
    },
    onLeaveCancelled(A) {
      j(A), br(y, [A]);
    }
  });
}
function ap(e) {
  if (e == null)
    return null;
  if (Ce(e))
    return [ba(e.enter), ba(e.leave)];
  {
    const t = ba(e);
    return [t, t];
  }
}
function ba(e) {
  return Sa(e);
}
function rr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.add(r)), (e[Bn] || (e[Bn] = /* @__PURE__ */ new Set())).add(t);
}
function wr(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const r = e[Bn];
  r && (r.delete(t), r.size || (e[Bn] = void 0));
}
function Ii(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let sp = 0;
function Ei(e, t, r, n) {
  const o = e._endId = ++sp, a = () => {
    o === e._endId && n();
  };
  if (r)
    return setTimeout(a, r);
  const { type: s, timeout: i, propCount: l } = ip(e, t);
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
function ip(e, t) {
  const r = window.getComputedStyle(e), n = (m) => (r[m] || "").split(", "), o = n(`${tr}Delay`), a = n(`${tr}Duration`), s = Si(o, a), i = n(`${bn}Delay`), l = n(`${bn}Duration`), c = Si(i, l);
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
function Si(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((r, n) => Ti(r) + Ti(e[n])));
}
function Ti(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function lp() {
  return document.body.offsetHeight;
}
function cp(e, t, r) {
  const n = e[Bn];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ms = Symbol("_vod"), so = {
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
const up = Symbol("");
function fp(e, t, r) {
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
        const s = n[up];
        s && (r += ";" + s), n.cssText = r;
      }
    } else
      t && e.removeAttribute("style");
    Ms in e && (n.display = a);
  }
}
const Pi = /\s*!important$/;
function za(e, t, r) {
  if (ae(r))
    r.forEach((n) => za(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = dp(e, t);
    Pi.test(r) ? e.setProperty(
      pt(n),
      r.replace(Pi, ""),
      "important"
    ) : e[n] = r;
  }
}
const $i = ["Webkit", "Moz", "ms"], wa = {};
function dp(e, t) {
  const r = wa[t];
  if (r)
    return r;
  let n = ft(t);
  if (n !== "filter" && n in e)
    return wa[t] = n;
  n = Wo(n);
  for (let o = 0; o < $i.length; o++) {
    const a = $i[o] + n;
    if (a in e)
      return wa[t] = a;
  }
  return t;
}
const Yi = "http://www.w3.org/1999/xlink";
function vp(e, t, r, n, o) {
  if (n && t.startsWith("xlink:"))
    r == null ? e.removeAttributeNS(Yi, t.slice(6, t.length)) : e.setAttributeNS(Yi, t, r);
  else {
    const a = id(t);
    r == null || a && !hc(r) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : r);
  }
}
function pp(e, t, r, n, o, a, s) {
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
    c === "boolean" ? r = hc(r) : r == null && c === "string" ? (r = "", l = !0) : c === "number" && (r = 0, l = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  l && e.removeAttribute(t);
}
function hp(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function gp(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Ni = Symbol("_vei");
function mp(e, t, r, n, o = null) {
  const a = e[Ni] || (e[Ni] = {}), s = a[t];
  if (n && s)
    s.value = n;
  else {
    const [i, l] = yp(t);
    if (n) {
      const c = a[t] = _p(n, o);
      hp(e, i, c, l);
    } else
      s && (gp(e, i, s, l), a[t] = void 0);
  }
}
const Ri = /(?:Once|Passive|Capture)$/;
function yp(e) {
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
const bp = /* @__PURE__ */ Promise.resolve(), wp = () => _a || (bp.then(() => _a = 0), _a = Date.now());
function _p(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    gt(
      Dp(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = wp(), r;
}
function Dp(e, t) {
  if (ae(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map((n) => (o) => !o._stopped && n && n(o));
  } else
    return t;
}
const Li = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ap = (e, t, r, n, o, a, s, i, l) => {
  const c = o === "svg";
  t === "class" ? cp(e, n, c) : t === "style" ? fp(e, r, n) : Uo(t) ? is(t) || mp(e, t, r, n, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xp(e, t, n, c)) ? pp(
    e,
    t,
    n,
    a,
    s,
    i,
    l
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), vp(e, t, n, c));
};
function xp(e, t, r, n) {
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
function Cp(e, t) {
  const r = /* @__PURE__ */ We(e);
  class n extends Os {
    constructor(a) {
      super(r, a, t);
    }
  }
  return n.def = r, n;
}
const Mp = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Os extends Mp {
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
      if (a && !ae(a))
        for (const l in a) {
          const c = a[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Sa(this._props[l])), (i || (i = /* @__PURE__ */ Object.create(null)))[ft(l)] = !0);
        }
      this._numberProps = i, o && this._resolveProps(n), this._applyStyles(s), this._update();
    }, r = this._def.__asyncLoader;
    r ? r().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: r } = t, n = ae(r) ? r : Object.keys(r || {});
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
    this._numberProps && this._numberProps[n] && (r = Sa(r)), this._setProp(n, r, !1);
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
    const t = ie(this._def, Fe({}, this._props));
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
const Op = ["ctrl", "shift", "alt", "meta"], kp = {
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
  exact: (e, t) => Op.some((r) => e[`${r}Key`] && !t.includes(r))
}, Ip = (e, t) => {
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = (o, ...a) => {
    for (let s = 0; s < t.length; s++) {
      const i = kp[t[s]];
      if (i && i(o, t))
        return;
    }
    return e(o, ...a);
  });
}, Ep = {
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
    if (t.some((s) => s === a || Ep[s] === a))
      return e(o);
  });
}, Sp = /* @__PURE__ */ Fe({ patchProp: Ap }, np);
let Bi;
function Tp() {
  return Bi || (Bi = Yv(Sp));
}
const Ui = (...e) => {
  Tp().render(...e);
};
var at = "top", _t = "bottom", Dt = "right", st = "left", ks = "auto", Kn = [at, _t, Dt, st], Xr = "start", Un = "end", Pp = "clippingParents", gu = "viewport", _n = "popper", $p = "reference", Hi = /* @__PURE__ */ Kn.reduce(function(e, t) {
  return e.concat([t + "-" + Xr, t + "-" + Un]);
}, []), mu = /* @__PURE__ */ [].concat(Kn, [ks]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Xr, t + "-" + Un]);
}, []), Yp = "beforeRead", Np = "read", Rp = "afterRead", Lp = "beforeMain", Fp = "main", Bp = "afterMain", Up = "beforeWrite", Hp = "write", jp = "afterWrite", Wp = [Yp, Np, Rp, Lp, Fp, Bp, Up, Hp, jp];
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
function Sr(e) {
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
function zp(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !bt(a) || !Rt(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Gp(e) {
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
const Vp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: zp,
  effect: Gp,
  requires: ["computeStyles"]
};
function Nt(e) {
  return e.split("-")[0];
}
var Er = Math.max, Eo = Math.min, en = Math.round;
function Ga() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function yu() {
  return !/^((?!chrome|android).)*safari/i.test(Ga());
}
function tn(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && bt(e) && (o = e.offsetWidth > 0 && en(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && en(n.height) / e.offsetHeight || 1);
  var s = Sr(e) ? dt(e) : window, i = s.visualViewport, l = !yu() && r, c = (n.left + (l && i ? i.offsetLeft : 0)) / o, u = (n.top + (l && i ? i.offsetTop : 0)) / a, f = n.width / o, d = n.height / a;
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
function Es(e) {
  var t = tn(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function bu(e, t) {
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
function Kp(e) {
  return ["table", "td", "th"].indexOf(Rt(e)) >= 0;
}
function pr(e) {
  return ((Sr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ra(e) {
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
function Qp(e) {
  var t = /firefox/i.test(Ga()), r = /Trident/i.test(Ga());
  if (r && bt(e)) {
    var n = Kt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = ra(e);
  for (Is(o) && (o = o.host); bt(o) && ["html", "body"].indexOf(Rt(o)) < 0; ) {
    var a = Kt(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Qn(e) {
  for (var t = dt(e), r = ji(e); r && Kp(r) && Kt(r).position === "static"; )
    r = ji(r);
  return r && (Rt(r) === "html" || Rt(r) === "body" && Kt(r).position === "static") ? t : r || Qp(e) || t;
}
function Ss(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function $n(e, t, r) {
  return Er(e, Eo(t, r));
}
function qp(e, t, r) {
  var n = $n(e, t, r);
  return n > r ? r : n;
}
function wu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _u(e) {
  return Object.assign({}, wu(), e);
}
function Du(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Zp = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, _u(typeof t != "number" ? t : Du(t, Kn));
};
function Jp(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, s = r.modifiersData.popperOffsets, i = Nt(r.placement), l = Ss(i), c = [st, Dt].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!a || !s)) {
    var f = Zp(o.padding, r), d = Es(a), h = l === "y" ? at : st, m = l === "y" ? _t : Dt, w = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], D = s[l] - r.rects.reference[l], b = Qn(a), H = b ? l === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, F = w / 2 - D / 2, I = f[h], y = H - d[u] - f[m], L = H / 2 - d[u] / 2 + F, P = $n(I, L, y), k = l;
    r.modifiersData[n] = (t = {}, t[k] = P, t.centerOffset = P - L, t);
  }
}
function Xp(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || bu(t.elements.popper, o) && (t.elements.arrow = o));
}
const eh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Jp,
  effect: Xp,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function rn(e) {
  return e.split("-")[1];
}
var th = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function rh(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: en(r * o) / o || 0,
    y: en(n * o) / o || 0
  };
}
function Wi(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, d = s.x, h = d === void 0 ? 0 : d, m = s.y, w = m === void 0 ? 0 : m, D = typeof u == "function" ? u({
    x: h,
    y: w
  }) : {
    x: h,
    y: w
  };
  h = D.x, w = D.y;
  var b = s.hasOwnProperty("x"), H = s.hasOwnProperty("y"), F = st, I = at, y = window;
  if (c) {
    var L = Qn(r), P = "clientHeight", k = "clientWidth";
    if (L === dt(r) && (L = pr(r), Kt(L).position !== "static" && i === "absolute" && (P = "scrollHeight", k = "scrollWidth")), L = L, o === at || (o === st || o === Dt) && a === Un) {
      I = _t;
      var z = f && L === y && y.visualViewport ? y.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        L[P]
      );
      w -= z - n.height, w *= l ? 1 : -1;
    }
    if (o === st || (o === at || o === _t) && a === Un) {
      F = Dt;
      var j = f && L === y && y.visualViewport ? y.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        L[k]
      );
      h -= j - n.width, h *= l ? 1 : -1;
    }
  }
  var q = Object.assign({
    position: i
  }, c && th), A = u === !0 ? rh({
    x: h,
    y: w
  }, dt(r)) : {
    x: h,
    y: w
  };
  if (h = A.x, w = A.y, l) {
    var U;
    return Object.assign({}, q, (U = {}, U[I] = H ? "0" : "", U[F] = b ? "0" : "", U.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + w + "px)" : "translate3d(" + h + "px, " + w + "px, 0)", U));
  }
  return Object.assign({}, q, (t = {}, t[I] = H ? w + "px" : "", t[F] = b ? h + "px" : "", t.transform = "", t));
}
function nh(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, i = r.roundOffsets, l = i === void 0 ? !0 : i, c = {
    placement: Nt(t.placement),
    variation: rn(t.placement),
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
const oh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: nh,
  data: {}
};
var io = {
  passive: !0
};
function ah(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, s = n.resize, i = s === void 0 ? !0 : s, l = dt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, io);
  }), i && l.addEventListener("resize", r.update, io), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, io);
    }), i && l.removeEventListener("resize", r.update, io);
  };
}
const sh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ah,
  data: {}
};
var ih = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ih[t];
  });
}
var lh = {
  start: "end",
  end: "start"
};
function zi(e) {
  return e.replace(/start|end/g, function(t) {
    return lh[t];
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
  return tn(pr(e)).left + Ts(e).scrollLeft;
}
function ch(e, t) {
  var r = dt(e), n = pr(e), o = r.visualViewport, a = n.clientWidth, s = n.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var c = yu();
    (c || !c && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + Ps(e),
    y: l
  };
}
function uh(e) {
  var t, r = pr(e), n = Ts(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Er(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Er(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + Ps(e), l = -n.scrollTop;
  return Kt(o || r).direction === "rtl" && (i += Er(r.clientWidth, o ? o.clientWidth : 0) - a), {
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
function Au(e) {
  return ["html", "body", "#document"].indexOf(Rt(e)) >= 0 ? e.ownerDocument.body : bt(e) && $s(e) ? e : Au(ra(e));
}
function Yn(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Au(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = dt(n), s = o ? [a].concat(a.visualViewport || [], $s(n) ? n : []) : n, i = t.concat(s);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Yn(ra(s)))
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
function fh(e, t) {
  var r = tn(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Gi(e, t, r) {
  return t === gu ? Va(ch(e, r)) : Sr(t) ? fh(t, r) : Va(uh(pr(e)));
}
function dh(e) {
  var t = Yn(ra(e)), r = ["absolute", "fixed"].indexOf(Kt(e).position) >= 0, n = r && bt(e) ? Qn(e) : e;
  return Sr(n) ? t.filter(function(o) {
    return Sr(o) && bu(o, n) && Rt(o) !== "body";
  }) : [];
}
function vh(e, t, r, n) {
  var o = t === "clippingParents" ? dh(e) : [].concat(t), a = [].concat(o, [r]), s = a[0], i = a.reduce(function(l, c) {
    var u = Gi(e, c, n);
    return l.top = Er(u.top, l.top), l.right = Eo(u.right, l.right), l.bottom = Eo(u.bottom, l.bottom), l.left = Er(u.left, l.left), l;
  }, Gi(e, s, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function xu(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Nt(n) : null, a = n ? rn(n) : null, s = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, l;
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
  var c = o ? Ss(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case Xr:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Un:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Hn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, i = r.boundary, l = i === void 0 ? Pp : i, c = r.rootBoundary, u = c === void 0 ? gu : c, f = r.elementContext, d = f === void 0 ? _n : f, h = r.altBoundary, m = h === void 0 ? !1 : h, w = r.padding, D = w === void 0 ? 0 : w, b = _u(typeof D != "number" ? D : Du(D, Kn)), H = d === _n ? $p : _n, F = e.rects.popper, I = e.elements[m ? H : d], y = vh(Sr(I) ? I : I.contextElement || pr(e.elements.popper), l, u, s), L = tn(e.elements.reference), P = xu({
    reference: L,
    element: F,
    strategy: "absolute",
    placement: o
  }), k = Va(Object.assign({}, F, P)), z = d === _n ? k : L, j = {
    top: y.top - z.top + b.top,
    bottom: z.bottom - y.bottom + b.bottom,
    left: y.left - z.left + b.left,
    right: z.right - y.right + b.right
  }, q = e.modifiersData.offset;
  if (d === _n && q) {
    var A = q[o];
    Object.keys(j).forEach(function(U) {
      var se = [Dt, _t].indexOf(U) >= 0 ? 1 : -1, K = [at, _t].indexOf(U) >= 0 ? "y" : "x";
      j[U] += A[K] * se;
    });
  }
  return j;
}
function ph(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, s = r.padding, i = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? mu : l, u = rn(n), f = u ? i ? Hi : Hi.filter(function(m) {
    return rn(m) === u;
  }) : Kn, d = f.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  d.length === 0 && (d = f);
  var h = d.reduce(function(m, w) {
    return m[w] = Hn(e, {
      placement: w,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[Nt(w)], m;
  }, {});
  return Object.keys(h).sort(function(m, w) {
    return h[m] - h[w];
  });
}
function hh(e) {
  if (Nt(e) === ks)
    return [];
  var t = yo(e);
  return [zi(e), t, zi(t)];
}
function gh(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !0 : s, l = r.fallbackPlacements, c = r.padding, u = r.boundary, f = r.rootBoundary, d = r.altBoundary, h = r.flipVariations, m = h === void 0 ? !0 : h, w = r.allowedAutoPlacements, D = t.options.placement, b = Nt(D), H = b === D, F = l || (H || !m ? [yo(D)] : hh(D)), I = [D].concat(F).reduce(function(me, Se) {
      return me.concat(Nt(Se) === ks ? ph(t, {
        placement: Se,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: w
      }) : Se);
    }, []), y = t.rects.reference, L = t.rects.popper, P = /* @__PURE__ */ new Map(), k = !0, z = I[0], j = 0; j < I.length; j++) {
      var q = I[j], A = Nt(q), U = rn(q) === Xr, se = [at, _t].indexOf(A) >= 0, K = se ? "width" : "height", ee = Hn(t, {
        placement: q,
        boundary: u,
        rootBoundary: f,
        altBoundary: d,
        padding: c
      }), te = se ? U ? Dt : st : U ? _t : at;
      y[K] > L[K] && (te = yo(te));
      var le = yo(te), ge = [];
      if (a && ge.push(ee[A] <= 0), i && ge.push(ee[te] <= 0, ee[le] <= 0), ge.every(function(me) {
        return me;
      })) {
        z = q, k = !1;
        break;
      }
      P.set(q, ge);
    }
    if (k)
      for (var Y = m ? 3 : 1, de = function(Se) {
        var De = I.find(function(Me) {
          var Ne = P.get(Me);
          if (Ne)
            return Ne.slice(0, Se).every(function(Re) {
              return Re;
            });
        });
        if (De)
          return z = De, "break";
      }, Q = Y; Q > 0; Q--) {
        var Ie = de(Q);
        if (Ie === "break")
          break;
      }
    t.placement !== z && (t.modifiersData[n]._skip = !0, t.placement = z, t.reset = !0);
  }
}
const mh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: gh,
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
function yh(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Hn(t, {
    elementContext: "reference"
  }), i = Hn(t, {
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
const bh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: yh
};
function wh(e, t, r) {
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
function _h(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, s = mu.reduce(function(u, f) {
    return u[f] = wh(f, t.rects, a), u;
  }, {}), i = s[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = s;
}
const Dh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: _h
};
function Ah(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = xu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const xh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ah,
  data: {}
};
function Ch(e) {
  return e === "x" ? "y" : "x";
}
function Mh(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !1 : s, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, f = r.padding, d = r.tether, h = d === void 0 ? !0 : d, m = r.tetherOffset, w = m === void 0 ? 0 : m, D = Hn(t, {
    boundary: l,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), b = Nt(t.placement), H = rn(t.placement), F = !H, I = Ss(b), y = Ch(I), L = t.modifiersData.popperOffsets, P = t.rects.reference, k = t.rects.popper, z = typeof w == "function" ? w(Object.assign({}, t.rects, {
    placement: t.placement
  })) : w, j = typeof z == "number" ? {
    mainAxis: z,
    altAxis: z
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, z), q = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (L) {
    if (a) {
      var U, se = I === "y" ? at : st, K = I === "y" ? _t : Dt, ee = I === "y" ? "height" : "width", te = L[I], le = te + D[se], ge = te - D[K], Y = h ? -k[ee] / 2 : 0, de = H === Xr ? P[ee] : k[ee], Q = H === Xr ? -k[ee] : -P[ee], Ie = t.elements.arrow, me = h && Ie ? Es(Ie) : {
        width: 0,
        height: 0
      }, Se = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wu(), De = Se[se], Me = Se[K], Ne = $n(0, P[ee], me[ee]), Re = F ? P[ee] / 2 - Y - Ne - De - j.mainAxis : de - Ne - De - j.mainAxis, lt = F ? -P[ee] / 2 + Y + Ne + Me + j.mainAxis : Q + Ne + Me + j.mainAxis, Ze = t.elements.arrow && Qn(t.elements.arrow), v = Ze ? I === "y" ? Ze.clientTop || 0 : Ze.clientLeft || 0 : 0, g = (U = q == null ? void 0 : q[I]) != null ? U : 0, _ = te + Re - g - v, M = te + lt - g, C = $n(h ? Eo(le, _) : le, te, h ? Er(ge, M) : ge);
      L[I] = C, A[I] = C - te;
    }
    if (i) {
      var N, B = I === "x" ? at : st, $ = I === "x" ? _t : Dt, R = L[y], E = y === "y" ? "height" : "width", W = R + D[B], J = R - D[$], Z = [at, st].indexOf(b) !== -1, re = (N = q == null ? void 0 : q[y]) != null ? N : 0, ce = Z ? W : R - P[E] - k[E] - re + j.altAxis, ve = Z ? R + P[E] + k[E] - re - j.altAxis : J, ye = h && Z ? qp(ce, R, ve) : $n(h ? ce : W, R, h ? ve : J);
      L[y] = ye, A[y] = ye - R;
    }
    t.modifiersData[n] = A;
  }
}
const Oh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Mh,
  requiresIfExists: ["offset"]
};
function kh(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ih(e) {
  return e === dt(e) || !bt(e) ? Ts(e) : kh(e);
}
function Eh(e) {
  var t = e.getBoundingClientRect(), r = en(t.width) / e.offsetWidth || 1, n = en(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Sh(e, t, r) {
  r === void 0 && (r = !1);
  var n = bt(t), o = bt(t) && Eh(t), a = pr(t), s = tn(e, o, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Rt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  $s(a)) && (i = Ih(t)), bt(t) ? (l = tn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Ps(a))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Th(e) {
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
function Ph(e) {
  var t = Th(e);
  return Wp.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function $h(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Yh(e) {
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
function Nh(e) {
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
      setOptions: function(b) {
        var H = typeof b == "function" ? b(u.options) : b;
        w(), u.options = Object.assign({}, a, u.options, H), u.scrollParents = {
          reference: Sr(i) ? Yn(i) : i.contextElement ? Yn(i.contextElement) : [],
          popper: Yn(l)
        };
        var F = Ph(Yh([].concat(n, u.options.modifiers)));
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
          var b = u.elements, H = b.reference, F = b.popper;
          if (qi(H, F)) {
            u.rects = {
              reference: Sh(H, Qn(F), u.options.strategy === "fixed"),
              popper: Es(F)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(j) {
              return u.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var I = 0; I < u.orderedModifiers.length; I++) {
              if (u.reset === !0) {
                u.reset = !1, I = -1;
                continue;
              }
              var y = u.orderedModifiers[I], L = y.fn, P = y.options, k = P === void 0 ? {} : P, z = y.name;
              typeof L == "function" && (u = L({
                state: u,
                options: k,
                name: z,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $h(function() {
        return new Promise(function(D) {
          h.forceUpdate(), D(u);
        });
      }),
      destroy: function() {
        w(), d = !0;
      }
    };
    if (!qi(i, l))
      return h;
    h.setOptions(c).then(function(D) {
      !d && c.onFirstUpdate && c.onFirstUpdate(D);
    });
    function m() {
      u.orderedModifiers.forEach(function(D) {
        var b = D.name, H = D.options, F = H === void 0 ? {} : H, I = D.effect;
        if (typeof I == "function") {
          var y = I({
            state: u,
            name: b,
            instance: h,
            options: F
          }), L = function() {
          };
          f.push(y || L);
        }
      });
    }
    function w() {
      f.forEach(function(D) {
        return D();
      }), f = [];
    }
    return h;
  };
}
var Rh = [sh, xh, oh, Vp, Dh, mh, Oh, eh, bh], Lh = /* @__PURE__ */ Nh({
  defaultModifiers: Rh
}), Fh = Object.defineProperty, Bh = (e, t, r) => t in e ? Fh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, X = (e, t, r) => (Bh(e, typeof t != "symbol" ? t + "" : t, r), r), lo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Uh = Object.prototype, Hh = Uh.hasOwnProperty;
function jh(e, t) {
  return e != null && Hh.call(e, t);
}
var Wh = jh, zh = Array.isArray, Mt = zh, Gh = typeof lo == "object" && lo && lo.Object === Object && lo, Mu = Gh, Vh = Mu, Kh = typeof self == "object" && self && self.Object === Object && self, Qh = Vh || Kh || Function("return this")(), Lt = Qh, qh = Lt, Zh = qh.Symbol, na = Zh, Zi = na, Ou = Object.prototype, Jh = Ou.hasOwnProperty, Xh = Ou.toString, Dn = Zi ? Zi.toStringTag : void 0;
function eg(e) {
  var t = Jh.call(e, Dn), r = e[Dn];
  try {
    e[Dn] = void 0;
    var n = !0;
  } catch {
  }
  var o = Xh.call(e);
  return n && (t ? e[Dn] = r : delete e[Dn]), o;
}
var tg = eg, rg = Object.prototype, ng = rg.toString;
function og(e) {
  return ng.call(e);
}
var ag = og, Ji = na, sg = tg, ig = ag, lg = "[object Null]", cg = "[object Undefined]", Xi = Ji ? Ji.toStringTag : void 0;
function ug(e) {
  return e == null ? e === void 0 ? cg : lg : Xi && Xi in Object(e) ? sg(e) : ig(e);
}
var Ft = ug;
function fg(e) {
  return e != null && typeof e == "object";
}
var Ot = fg, dg = Ft, vg = Ot, pg = "[object Symbol]";
function hg(e) {
  return typeof e == "symbol" || vg(e) && dg(e) == pg;
}
var Ys = hg, gg = Mt, mg = Ys, yg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, bg = /^\w*$/;
function wg(e, t) {
  if (gg(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || mg(e) ? !0 : bg.test(e) || !yg.test(e) || t != null && e in Object(t);
}
var Ns = wg;
function _g(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Jt = _g, Dg = Ft, Ag = Jt, xg = "[object AsyncFunction]", Cg = "[object Function]", Mg = "[object GeneratorFunction]", Og = "[object Proxy]";
function kg(e) {
  if (!Ag(e))
    return !1;
  var t = Dg(e);
  return t == Cg || t == Mg || t == xg || t == Og;
}
var Yr = kg, Ig = Lt, Eg = Ig["__core-js_shared__"], Sg = Eg, Da = Sg, el = function() {
  var e = /[^.]+$/.exec(Da && Da.keys && Da.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Tg(e) {
  return !!el && el in e;
}
var Pg = Tg, $g = Function.prototype, Yg = $g.toString;
function Ng(e) {
  if (e != null) {
    try {
      return Yg.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ku = Ng, Rg = Yr, Lg = Pg, Fg = Jt, Bg = ku, Ug = /[\\^$.*+?()[\]{}|]/g, Hg = /^\[object .+?Constructor\]$/, jg = Function.prototype, Wg = Object.prototype, zg = jg.toString, Gg = Wg.hasOwnProperty, Vg = RegExp(
  "^" + zg.call(Gg).replace(Ug, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Kg(e) {
  if (!Fg(e) || Lg(e))
    return !1;
  var t = Rg(e) ? Vg : Hg;
  return t.test(Bg(e));
}
var Qg = Kg;
function qg(e, t) {
  return e == null ? void 0 : e[t];
}
var Zg = qg, Jg = Qg, Xg = Zg;
function em(e, t) {
  var r = Xg(e, t);
  return Jg(r) ? r : void 0;
}
var Nr = em, tm = Nr, rm = tm(Object, "create"), oa = rm, tl = oa;
function nm() {
  this.__data__ = tl ? tl(null) : {}, this.size = 0;
}
var om = nm;
function am(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sm = am, im = oa, lm = "__lodash_hash_undefined__", cm = Object.prototype, um = cm.hasOwnProperty;
function fm(e) {
  var t = this.__data__;
  if (im) {
    var r = t[e];
    return r === lm ? void 0 : r;
  }
  return um.call(t, e) ? t[e] : void 0;
}
var dm = fm, vm = oa, pm = Object.prototype, hm = pm.hasOwnProperty;
function gm(e) {
  var t = this.__data__;
  return vm ? t[e] !== void 0 : hm.call(t, e);
}
var mm = gm, ym = oa, bm = "__lodash_hash_undefined__";
function wm(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ym && t === void 0 ? bm : t, this;
}
var _m = wm, Dm = om, Am = sm, xm = dm, Cm = mm, Mm = _m;
function cn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
cn.prototype.clear = Dm;
cn.prototype.delete = Am;
cn.prototype.get = xm;
cn.prototype.has = Cm;
cn.prototype.set = Mm;
var Om = cn;
function km() {
  this.__data__ = [], this.size = 0;
}
var Im = km;
function Em(e, t) {
  return e === t || e !== e && t !== t;
}
var un = Em, Sm = un;
function Tm(e, t) {
  for (var r = e.length; r--; )
    if (Sm(e[r][0], t))
      return r;
  return -1;
}
var aa = Tm, Pm = aa, $m = Array.prototype, Ym = $m.splice;
function Nm(e) {
  var t = this.__data__, r = Pm(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ym.call(t, r, 1), --this.size, !0;
}
var Rm = Nm, Lm = aa;
function Fm(e) {
  var t = this.__data__, r = Lm(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Bm = Fm, Um = aa;
function Hm(e) {
  return Um(this.__data__, e) > -1;
}
var jm = Hm, Wm = aa;
function zm(e, t) {
  var r = this.__data__, n = Wm(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Gm = zm, Vm = Im, Km = Rm, Qm = Bm, qm = jm, Zm = Gm;
function fn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fn.prototype.clear = Vm;
fn.prototype.delete = Km;
fn.prototype.get = Qm;
fn.prototype.has = qm;
fn.prototype.set = Zm;
var sa = fn, Jm = Nr, Xm = Lt, e0 = Jm(Xm, "Map"), Rs = e0, rl = Om, t0 = sa, r0 = Rs;
function n0() {
  this.size = 0, this.__data__ = {
    hash: new rl(),
    map: new (r0 || t0)(),
    string: new rl()
  };
}
var o0 = n0;
function a0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var s0 = a0, i0 = s0;
function l0(e, t) {
  var r = e.__data__;
  return i0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ia = l0, c0 = ia;
function u0(e) {
  var t = c0(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var f0 = u0, d0 = ia;
function v0(e) {
  return d0(this, e).get(e);
}
var p0 = v0, h0 = ia;
function g0(e) {
  return h0(this, e).has(e);
}
var m0 = g0, y0 = ia;
function b0(e, t) {
  var r = y0(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var w0 = b0, _0 = o0, D0 = f0, A0 = p0, x0 = m0, C0 = w0;
function dn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
dn.prototype.clear = _0;
dn.prototype.delete = D0;
dn.prototype.get = A0;
dn.prototype.has = x0;
dn.prototype.set = C0;
var Ls = dn, Iu = Ls, M0 = "Expected a function";
function Fs(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(M0);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, n);
    return r.cache = a.set(o, s) || a, s;
  };
  return r.cache = new (Fs.Cache || Iu)(), r;
}
Fs.Cache = Iu;
var O0 = Fs, k0 = O0, I0 = 500;
function E0(e) {
  var t = k0(e, function(n) {
    return r.size === I0 && r.clear(), n;
  }), r = t.cache;
  return t;
}
var S0 = E0, T0 = S0, P0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $0 = /\\(\\)?/g, Y0 = T0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(P0, function(r, n, o, a) {
    t.push(o ? a.replace($0, "$1") : n || r);
  }), t;
}), N0 = Y0;
function R0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var L0 = R0, nl = na, F0 = L0, B0 = Mt, U0 = Ys, H0 = 1 / 0, ol = nl ? nl.prototype : void 0, al = ol ? ol.toString : void 0;
function Eu(e) {
  if (typeof e == "string")
    return e;
  if (B0(e))
    return F0(e, Eu) + "";
  if (U0(e))
    return al ? al.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -H0 ? "-0" : t;
}
var j0 = Eu, W0 = j0;
function z0(e) {
  return e == null ? "" : W0(e);
}
var G0 = z0, V0 = Mt, K0 = Ns, Q0 = N0, q0 = G0;
function Z0(e, t) {
  return V0(e) ? e : K0(e, t) ? [e] : Q0(q0(e));
}
var Su = Z0, J0 = Ft, X0 = Ot, ey = "[object Arguments]";
function ty(e) {
  return X0(e) && J0(e) == ey;
}
var ry = ty, sl = ry, ny = Ot, Tu = Object.prototype, oy = Tu.hasOwnProperty, ay = Tu.propertyIsEnumerable, sy = sl(/* @__PURE__ */ function() {
  return arguments;
}()) ? sl : function(e) {
  return ny(e) && oy.call(e, "callee") && !ay.call(e, "callee");
}, Bs = sy, iy = 9007199254740991, ly = /^(?:0|[1-9]\d*)$/;
function cy(e, t) {
  var r = typeof e;
  return t = t ?? iy, !!t && (r == "number" || r != "symbol" && ly.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Us = cy, uy = 9007199254740991;
function fy(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= uy;
}
var Hs = fy, dy = Ys, vy = 1 / 0;
function py(e) {
  if (typeof e == "string" || dy(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -vy ? "-0" : t;
}
var la = py, hy = Su, gy = Bs, my = Mt, yy = Us, by = Hs, wy = la;
function _y(e, t, r) {
  t = hy(t, e);
  for (var n = -1, o = t.length, a = !1; ++n < o; ) {
    var s = wy(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != o ? a : (o = e == null ? 0 : e.length, !!o && by(o) && yy(s, o) && (my(e) || gy(e)));
}
var Pu = _y, Dy = Wh, Ay = Pu;
function xy(e, t) {
  return e != null && Ay(e, t, Dy);
}
var $u = xy, Cy = Ft, My = Ot, Oy = "[object Date]";
function ky(e) {
  return My(e) && Cy(e) == Oy;
}
var Iy = ky;
function Ey(e) {
  return function(t) {
    return e(t);
  };
}
var Yu = Ey, jn = {}, Sy = {
  get exports() {
    return jn;
  },
  set exports(e) {
    jn = e;
  }
};
(function(e, t) {
  var r = Mu, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, s = a && r.process, i = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Sy, jn);
var Ty = Iy, Py = Yu, il = jn, ll = il && il.isDate, $y = ll ? Py(ll) : Ty, Yy = $y, Ny = Ft, Ry = Mt, Ly = Ot, Fy = "[object String]";
function By(e) {
  return typeof e == "string" || !Ry(e) && Ly(e) && Ny(e) == Fy;
}
var $t = By;
function Uy(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Nu = Uy, Hy = sa;
function jy() {
  this.__data__ = new Hy(), this.size = 0;
}
var Wy = jy;
function zy(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Gy = zy;
function Vy(e) {
  return this.__data__.get(e);
}
var Ky = Vy;
function Qy(e) {
  return this.__data__.has(e);
}
var qy = Qy, Zy = sa, Jy = Rs, Xy = Ls, eb = 200;
function tb(e, t) {
  var r = this.__data__;
  if (r instanceof Zy) {
    var n = r.__data__;
    if (!Jy || n.length < eb - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Xy(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var rb = tb, nb = sa, ob = Wy, ab = Gy, sb = Ky, ib = qy, lb = rb;
function vn(e) {
  var t = this.__data__ = new nb(e);
  this.size = t.size;
}
vn.prototype.clear = ob;
vn.prototype.delete = ab;
vn.prototype.get = sb;
vn.prototype.has = ib;
vn.prototype.set = lb;
var js = vn, cb = "__lodash_hash_undefined__";
function ub(e) {
  return this.__data__.set(e, cb), this;
}
var fb = ub;
function db(e) {
  return this.__data__.has(e);
}
var vb = db, pb = Ls, hb = fb, gb = vb;
function So(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new pb(); ++t < r; )
    this.add(e[t]);
}
So.prototype.add = So.prototype.push = hb;
So.prototype.has = gb;
var mb = So;
function yb(e, t) {
  return e.has(t);
}
var bb = yb, wb = mb, _b = Nu, Db = bb, Ab = 1, xb = 2;
function Cb(e, t, r, n, o, a) {
  var s = r & Ab, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var c = a.get(e), u = a.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, h = r & xb ? new wb() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < i; ) {
    var m = e[f], w = t[f];
    if (n)
      var D = s ? n(w, m, f, t, e, a) : n(m, w, f, e, t, a);
    if (D !== void 0) {
      if (D)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!_b(t, function(b, H) {
        if (!Db(h, H) && (m === b || o(m, b, r, n, a)))
          return h.push(H);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === w || o(m, w, r, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
var Ru = Cb, Mb = Lt, Ob = Mb.Uint8Array, Lu = Ob;
function kb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}
var Ib = kb;
function Eb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Sb = Eb, cl = na, ul = Lu, Tb = un, Pb = Ru, $b = Ib, Yb = Sb, Nb = 1, Rb = 2, Lb = "[object Boolean]", Fb = "[object Date]", Bb = "[object Error]", Ub = "[object Map]", Hb = "[object Number]", jb = "[object RegExp]", Wb = "[object Set]", zb = "[object String]", Gb = "[object Symbol]", Vb = "[object ArrayBuffer]", Kb = "[object DataView]", fl = cl ? cl.prototype : void 0, Aa = fl ? fl.valueOf : void 0;
function Qb(e, t, r, n, o, a, s) {
  switch (r) {
    case Kb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Vb:
      return !(e.byteLength != t.byteLength || !a(new ul(e), new ul(t)));
    case Lb:
    case Fb:
    case Hb:
      return Tb(+e, +t);
    case Bb:
      return e.name == t.name && e.message == t.message;
    case jb:
    case zb:
      return e == t + "";
    case Ub:
      var i = $b;
    case Wb:
      var l = n & Nb;
      if (i || (i = Yb), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= Rb, s.set(e, t);
      var u = Pb(i(e), i(t), n, o, a, s);
      return s.delete(e), u;
    case Gb:
      if (Aa)
        return Aa.call(e) == Aa.call(t);
  }
  return !1;
}
var qb = Qb;
function Zb(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Jb = Zb, Xb = Jb, ew = Mt;
function tw(e, t, r) {
  var n = t(e);
  return ew(e) ? n : Xb(n, r(e));
}
var rw = tw;
function nw(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[o++] = s);
  }
  return a;
}
var ow = nw;
function aw() {
  return [];
}
var sw = aw, iw = ow, lw = sw, cw = Object.prototype, uw = cw.propertyIsEnumerable, dl = Object.getOwnPropertySymbols, fw = dl ? function(e) {
  return e == null ? [] : (e = Object(e), iw(dl(e), function(t) {
    return uw.call(e, t);
  }));
} : lw, dw = fw;
function vw(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var pw = vw, nn = {}, hw = {
  get exports() {
    return nn;
  },
  set exports(e) {
    nn = e;
  }
};
function gw() {
  return !1;
}
var mw = gw;
(function(e, t) {
  var r = Lt, n = mw, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, s = a && a.exports === o, i = s ? r.Buffer : void 0, l = i ? i.isBuffer : void 0, c = l || n;
  e.exports = c;
})(hw, nn);
var yw = Ft, bw = Hs, ww = Ot, _w = "[object Arguments]", Dw = "[object Array]", Aw = "[object Boolean]", xw = "[object Date]", Cw = "[object Error]", Mw = "[object Function]", Ow = "[object Map]", kw = "[object Number]", Iw = "[object Object]", Ew = "[object RegExp]", Sw = "[object Set]", Tw = "[object String]", Pw = "[object WeakMap]", $w = "[object ArrayBuffer]", Yw = "[object DataView]", Nw = "[object Float32Array]", Rw = "[object Float64Array]", Lw = "[object Int8Array]", Fw = "[object Int16Array]", Bw = "[object Int32Array]", Uw = "[object Uint8Array]", Hw = "[object Uint8ClampedArray]", jw = "[object Uint16Array]", Ww = "[object Uint32Array]", Oe = {};
Oe[Nw] = Oe[Rw] = Oe[Lw] = Oe[Fw] = Oe[Bw] = Oe[Uw] = Oe[Hw] = Oe[jw] = Oe[Ww] = !0;
Oe[_w] = Oe[Dw] = Oe[$w] = Oe[Aw] = Oe[Yw] = Oe[xw] = Oe[Cw] = Oe[Mw] = Oe[Ow] = Oe[kw] = Oe[Iw] = Oe[Ew] = Oe[Sw] = Oe[Tw] = Oe[Pw] = !1;
function zw(e) {
  return ww(e) && bw(e.length) && !!Oe[yw(e)];
}
var Gw = zw, Vw = Gw, Kw = Yu, vl = jn, pl = vl && vl.isTypedArray, Qw = pl ? Kw(pl) : Vw, Ws = Qw, qw = pw, Zw = Bs, Jw = Mt, Xw = nn, e1 = Us, t1 = Ws, r1 = Object.prototype, n1 = r1.hasOwnProperty;
function o1(e, t) {
  var r = Jw(e), n = !r && Zw(e), o = !r && !n && Xw(e), a = !r && !n && !o && t1(e), s = r || n || o || a, i = s ? qw(e.length, String) : [], l = i.length;
  for (var c in e)
    (t || n1.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    e1(c, l))) && i.push(c);
  return i;
}
var Fu = o1, a1 = Object.prototype;
function s1(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || a1;
  return e === r;
}
var zs = s1;
function i1(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Bu = i1, l1 = Bu, c1 = l1(Object.keys, Object), u1 = c1, f1 = zs, d1 = u1, v1 = Object.prototype, p1 = v1.hasOwnProperty;
function h1(e) {
  if (!f1(e))
    return d1(e);
  var t = [];
  for (var r in Object(e))
    p1.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var g1 = h1, m1 = Yr, y1 = Hs;
function b1(e) {
  return e != null && y1(e.length) && !m1(e);
}
var qn = b1, w1 = Fu, _1 = g1, D1 = qn;
function A1(e) {
  return D1(e) ? w1(e) : _1(e);
}
var Gs = A1, x1 = rw, C1 = dw, M1 = Gs;
function O1(e) {
  return x1(e, M1, C1);
}
var k1 = O1, hl = k1, I1 = 1, E1 = Object.prototype, S1 = E1.hasOwnProperty;
function T1(e, t, r, n, o, a) {
  var s = r & I1, i = hl(e), l = i.length, c = hl(t), u = c.length;
  if (l != u && !s)
    return !1;
  for (var f = l; f--; ) {
    var d = i[f];
    if (!(s ? d in t : S1.call(t, d)))
      return !1;
  }
  var h = a.get(e), m = a.get(t);
  if (h && m)
    return h == t && m == e;
  var w = !0;
  a.set(e, t), a.set(t, e);
  for (var D = s; ++f < l; ) {
    d = i[f];
    var b = e[d], H = t[d];
    if (n)
      var F = s ? n(H, b, d, t, e, a) : n(b, H, d, e, t, a);
    if (!(F === void 0 ? b === H || o(b, H, r, n, a) : F)) {
      w = !1;
      break;
    }
    D || (D = d == "constructor");
  }
  if (w && !D) {
    var I = e.constructor, y = t.constructor;
    I != y && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof y == "function" && y instanceof y) && (w = !1);
  }
  return a.delete(e), a.delete(t), w;
}
var P1 = T1, $1 = Nr, Y1 = Lt, N1 = $1(Y1, "DataView"), R1 = N1, L1 = Nr, F1 = Lt, B1 = L1(F1, "Promise"), U1 = B1, H1 = Nr, j1 = Lt, W1 = H1(j1, "Set"), z1 = W1, G1 = Nr, V1 = Lt, K1 = G1(V1, "WeakMap"), Q1 = K1, Ka = R1, Qa = Rs, qa = U1, Za = z1, Ja = Q1, Uu = Ft, pn = ku, gl = "[object Map]", q1 = "[object Object]", ml = "[object Promise]", yl = "[object Set]", bl = "[object WeakMap]", wl = "[object DataView]", Z1 = pn(Ka), J1 = pn(Qa), X1 = pn(qa), e_ = pn(Za), t_ = pn(Ja), _r = Uu;
(Ka && _r(new Ka(new ArrayBuffer(1))) != wl || Qa && _r(new Qa()) != gl || qa && _r(qa.resolve()) != ml || Za && _r(new Za()) != yl || Ja && _r(new Ja()) != bl) && (_r = function(e) {
  var t = Uu(e), r = t == q1 ? e.constructor : void 0, n = r ? pn(r) : "";
  if (n)
    switch (n) {
      case Z1:
        return wl;
      case J1:
        return gl;
      case X1:
        return ml;
      case e_:
        return yl;
      case t_:
        return bl;
    }
  return t;
});
var r_ = _r, xa = js, n_ = Ru, o_ = qb, a_ = P1, _l = r_, Dl = Mt, Al = nn, s_ = Ws, i_ = 1, xl = "[object Arguments]", Cl = "[object Array]", co = "[object Object]", l_ = Object.prototype, Ml = l_.hasOwnProperty;
function c_(e, t, r, n, o, a) {
  var s = Dl(e), i = Dl(t), l = s ? Cl : _l(e), c = i ? Cl : _l(t);
  l = l == xl ? co : l, c = c == xl ? co : c;
  var u = l == co, f = c == co, d = l == c;
  if (d && Al(e)) {
    if (!Al(t))
      return !1;
    s = !0, u = !1;
  }
  if (d && !u)
    return a || (a = new xa()), s || s_(e) ? n_(e, t, r, n, o, a) : o_(e, t, l, r, n, o, a);
  if (!(r & i_)) {
    var h = u && Ml.call(e, "__wrapped__"), m = f && Ml.call(t, "__wrapped__");
    if (h || m) {
      var w = h ? e.value() : e, D = m ? t.value() : t;
      return a || (a = new xa()), o(w, D, r, n, a);
    }
  }
  return d ? (a || (a = new xa()), a_(e, t, r, n, o, a)) : !1;
}
var u_ = c_, f_ = u_, Ol = Ot;
function Hu(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !Ol(e) && !Ol(t) ? e !== e && t !== t : f_(e, t, r, n, Hu, o);
}
var ju = Hu, d_ = js, v_ = ju, p_ = 1, h_ = 2;
function g_(e, t, r, n) {
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
      var f = new d_();
      if (n)
        var d = n(c, u, l, e, t, f);
      if (!(d === void 0 ? v_(u, c, p_ | h_, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var m_ = g_, y_ = Jt;
function b_(e) {
  return e === e && !y_(e);
}
var Wu = b_, w_ = Wu, __ = Gs;
function D_(e) {
  for (var t = __(e), r = t.length; r--; ) {
    var n = t[r], o = e[n];
    t[r] = [n, o, w_(o)];
  }
  return t;
}
var A_ = D_;
function x_(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var zu = x_, C_ = m_, M_ = A_, O_ = zu;
function k_(e) {
  var t = M_(e);
  return t.length == 1 && t[0][2] ? O_(t[0][0], t[0][1]) : function(r) {
    return r === e || C_(r, e, t);
  };
}
var I_ = k_, E_ = Su, S_ = la;
function T_(e, t) {
  t = E_(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[S_(t[r++])];
  return r && r == n ? e : void 0;
}
var Gu = T_, P_ = Gu;
function $_(e, t, r) {
  var n = e == null ? void 0 : P_(e, t);
  return n === void 0 ? r : n;
}
var Cr = $_;
function Y_(e, t) {
  return e != null && t in Object(e);
}
var N_ = Y_, R_ = N_, L_ = Pu;
function F_(e, t) {
  return e != null && L_(e, t, R_);
}
var B_ = F_, U_ = ju, H_ = Cr, j_ = B_, W_ = Ns, z_ = Wu, G_ = zu, V_ = la, K_ = 1, Q_ = 2;
function q_(e, t) {
  return W_(e) && z_(t) ? G_(V_(e), t) : function(r) {
    var n = H_(r, e);
    return n === void 0 && n === t ? j_(r, e) : U_(t, n, K_ | Q_);
  };
}
var Z_ = q_;
function J_(e) {
  return e;
}
var Vs = J_;
function X_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var eD = X_, tD = Gu;
function rD(e) {
  return function(t) {
    return tD(t, e);
  };
}
var nD = rD, oD = eD, aD = nD, sD = Ns, iD = la;
function lD(e) {
  return sD(e) ? oD(iD(e)) : aD(e);
}
var cD = lD, uD = I_, fD = Z_, dD = Vs, vD = Mt, pD = cD;
function hD(e) {
  return typeof e == "function" ? e : e == null ? dD : typeof e == "object" ? vD(e) ? fD(e[0], e[1]) : uD(e) : pD(e);
}
var Vu = hD;
function gD(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), s = n(t), i = s.length; i--; ) {
      var l = s[e ? i : ++o];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var mD = gD, yD = mD, bD = yD(), Ku = bD, wD = Ku, _D = Gs;
function DD(e, t) {
  return e && wD(e, t, _D);
}
var Qu = DD, AD = qn;
function xD(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!AD(r))
      return e(r, n);
    for (var o = r.length, a = t ? o : -1, s = Object(r); (t ? a-- : ++a < o) && n(s[a], a, s) !== !1; )
      ;
    return r;
  };
}
var CD = xD, MD = Qu, OD = CD, kD = OD(MD), ID = kD, ED = ID;
function SD(e, t) {
  var r;
  return ED(e, function(n, o, a) {
    return r = t(n, o, a), !r;
  }), !!r;
}
var TD = SD, PD = un, $D = qn, YD = Us, ND = Jt;
function RD(e, t, r) {
  if (!ND(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? $D(r) && YD(t, r.length) : n == "string" && t in r) ? PD(r[t], e) : !1;
}
var Ks = RD, LD = Nu, FD = Vu, BD = TD, UD = Mt, HD = Ks;
function jD(e, t, r) {
  var n = UD(e) ? LD : BD;
  return r && HD(e, t, r) && (t = void 0), n(e, FD(t));
}
var WD = jD, zD = Ft, GD = Ot, VD = "[object Boolean]";
function KD(e) {
  return e === !0 || e === !1 || GD(e) && zD(e) == VD;
}
var QD = KD, qD = Ft, ZD = Ot, JD = "[object Number]";
function XD(e) {
  return typeof e == "number" || ZD(e) && qD(e) == JD;
}
var Ct = XD, eA = Nr, tA = function() {
  try {
    var e = eA(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), qu = tA, kl = qu;
function rA(e, t, r) {
  t == "__proto__" && kl ? kl(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var ca = rA, nA = ca, oA = un, aA = Object.prototype, sA = aA.hasOwnProperty;
function iA(e, t, r) {
  var n = e[t];
  (!(sA.call(e, t) && oA(n, r)) || r === void 0 && !(t in e)) && nA(e, t, r);
}
var lA = iA, cA = ca, uA = Qu, fA = Vu;
function dA(e, t) {
  var r = {};
  return t = fA(t), uA(e, function(n, o, a) {
    cA(r, o, t(n, o, a));
  }), r;
}
var vA = dA;
function pA(e, t, r) {
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
var Zu = pA, hA = Zu, Il = Math.max;
function gA(e, t, r) {
  return t = Il(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = Il(n.length - t, 0), s = Array(a); ++o < a; )
      s[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(s), hA(e, this, i);
  };
}
var mA = gA;
function yA(e) {
  return function() {
    return e;
  };
}
var bA = yA, wA = bA, El = qu, _A = Vs, DA = El ? function(e, t) {
  return El(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: wA(t),
    writable: !0
  });
} : _A, AA = DA, xA = 800, CA = 16, MA = Date.now;
function OA(e) {
  var t = 0, r = 0;
  return function() {
    var n = MA(), o = CA - (n - r);
    if (r = n, o > 0) {
      if (++t >= xA)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var kA = OA, IA = AA, EA = kA, SA = EA(IA), TA = SA, PA = Vs, $A = mA, YA = TA;
function NA(e, t) {
  return YA($A(e, t, PA), e + "");
}
var Qs = NA;
function RA(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var LA = RA, FA = Jt, BA = zs, UA = LA, HA = Object.prototype, jA = HA.hasOwnProperty;
function WA(e) {
  if (!FA(e))
    return UA(e);
  var t = BA(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !jA.call(e, n)) || r.push(n);
  return r;
}
var zA = WA, GA = Fu, VA = zA, KA = qn;
function QA(e) {
  return KA(e) ? GA(e, !0) : VA(e);
}
var qs = QA, qA = Qs, ZA = un, JA = Ks, XA = qs, Ju = Object.prototype, ex = Ju.hasOwnProperty, tx = qA(function(e, t) {
  e = Object(e);
  var r = -1, n = t.length, o = n > 2 ? t[2] : void 0;
  for (o && JA(t[0], t[1], o) && (n = 1); ++r < n; )
    for (var a = t[r], s = XA(a), i = -1, l = s.length; ++i < l; ) {
      var c = s[i], u = e[c];
      (u === void 0 || ZA(u, Ju[c]) && !ex.call(e, c)) && (e[c] = a[c]);
    }
  return e;
}), Sl = tx, rx = ca, nx = un;
function ox(e, t, r) {
  (r !== void 0 && !nx(e[t], r) || r === void 0 && !(t in e)) && rx(e, t, r);
}
var Xu = ox, To = {}, ax = {
  get exports() {
    return To;
  },
  set exports(e) {
    To = e;
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
})(ax, To);
var Tl = Lu;
function sx(e) {
  var t = new e.constructor(e.byteLength);
  return new Tl(t).set(new Tl(e)), t;
}
var ix = sx, lx = ix;
function cx(e, t) {
  var r = t ? lx(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var ux = cx;
function fx(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var dx = fx, vx = Jt, Pl = Object.create, px = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!vx(t))
      return {};
    if (Pl)
      return Pl(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), hx = px, gx = Bu, mx = gx(Object.getPrototypeOf, Object), ef = mx, yx = hx, bx = ef, wx = zs;
function _x(e) {
  return typeof e.constructor == "function" && !wx(e) ? yx(bx(e)) : {};
}
var Dx = _x, Ax = qn, xx = Ot;
function Cx(e) {
  return xx(e) && Ax(e);
}
var Mx = Cx, Ox = Ft, kx = ef, Ix = Ot, Ex = "[object Object]", Sx = Function.prototype, Tx = Object.prototype, tf = Sx.toString, Px = Tx.hasOwnProperty, $x = tf.call(Object);
function Yx(e) {
  if (!Ix(e) || Ox(e) != Ex)
    return !1;
  var t = kx(e);
  if (t === null)
    return !0;
  var r = Px.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && tf.call(r) == $x;
}
var Nx = Yx;
function Rx(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var rf = Rx, Lx = lA, Fx = ca;
function Bx(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], l = n ? n(r[i], e[i], i, r, e) : void 0;
    l === void 0 && (l = e[i]), o ? Fx(r, i, l) : Lx(r, i, l);
  }
  return r;
}
var Ux = Bx, Hx = Ux, jx = qs;
function Wx(e) {
  return Hx(e, jx(e));
}
var zx = Wx, $l = Xu, Gx = To, Vx = ux, Kx = dx, Qx = Dx, Yl = Bs, Nl = Mt, qx = Mx, Zx = nn, Jx = Yr, Xx = Jt, eC = Nx, tC = Ws, Rl = rf, rC = zx;
function nC(e, t, r, n, o, a, s) {
  var i = Rl(e, r), l = Rl(t, r), c = s.get(l);
  if (c) {
    $l(e, r, c);
    return;
  }
  var u = a ? a(i, l, r + "", e, t, s) : void 0, f = u === void 0;
  if (f) {
    var d = Nl(l), h = !d && Zx(l), m = !d && !h && tC(l);
    u = l, d || h || m ? Nl(i) ? u = i : qx(i) ? u = Kx(i) : h ? (f = !1, u = Gx(l, !0)) : m ? (f = !1, u = Vx(l, !0)) : u = [] : eC(l) || Yl(l) ? (u = i, Yl(i) ? u = rC(i) : (!Xx(i) || Jx(i)) && (u = Qx(l))) : f = !1;
  }
  f && (s.set(l, u), o(u, l, n, a, s), s.delete(l)), $l(e, r, u);
}
var oC = nC, aC = js, sC = Xu, iC = Ku, lC = oC, cC = Jt, uC = qs, fC = rf;
function nf(e, t, r, n, o) {
  e !== t && iC(t, function(a, s) {
    if (o || (o = new aC()), cC(a))
      lC(e, t, s, r, nf, n, o);
    else {
      var i = n ? n(fC(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), sC(e, s, i);
    }
  }, uC);
}
var of = nf, dC = of, Ll = Jt;
function af(e, t, r, n, o, a) {
  return Ll(e) && Ll(t) && (a.set(t, e), dC(e, t, void 0, af, a), a.delete(t)), e;
}
var vC = af, pC = Qs, hC = Ks;
function gC(e) {
  return pC(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, s = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && hC(r[0], r[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var mC = gC, yC = of, bC = mC, wC = bC(function(e, t, r, n) {
  yC(e, t, r, n);
}), _C = wC, DC = Zu, AC = Qs, xC = vC, CC = _C, MC = AC(function(e) {
  return e.push(void 0, xC), DC(CC, void 0, e);
}), Wn = MC;
function OC(e) {
  return e && e.length ? e[0] : void 0;
}
var sf = OC;
function kC(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Wr = kC;
const IC = (e) => Object.prototype.toString.call(e).slice(8, -1), Qr = (e) => Yy(e) && !isNaN(e.getTime()), Qt = (e) => IC(e) === "Object", lf = $u, Fl = (e, t) => WD(t, (r) => $u(e, r)), _e = (e, t, r = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${r}${e}`;
  return e;
}, wt = (e) => Array.isArray(e), Ht = (e) => wt(e) && e.length > 0, Po = (e) => e == null ? null : document && $t(e) ? document.querySelector(e) : e.$el ?? e, ir = (e, t, r, n = void 0) => {
  e.removeEventListener(t, r, n);
}, lr = (e, t, r, n = void 0) => (e.addEventListener(t, r, n), () => ir(e, t, r, n)), bo = (e, t) => !!e && !!t && (e === t || e.contains(t)), uo = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, cf = (e, ...t) => {
  const r = {};
  let n;
  for (n in e)
    t.includes(n) || (r[n] = e[n]);
  return r;
}, uf = (e, t) => {
  const r = {};
  return t.forEach((n) => {
    n in e && (r[n] = e[n]);
  }), r;
};
function EC(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var $o = {}, SC = {
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
    if (n === null || n === !0 || n === !1)
      return NaN;
    var o = Number(n);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e.exports = t.default;
})(SC, $o);
const TC = /* @__PURE__ */ Cu($o);
var Yo = {}, PC = {
  get exports() {
    return Yo;
  },
  set exports(e) {
    Yo = e;
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
})(PC, Yo);
const Bl = /* @__PURE__ */ Cu(Yo);
function $C(e, t) {
  var r = LC(t);
  return r.formatToParts ? NC(r, e) : RC(r, e);
}
var YC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function NC(e, t) {
  try {
    for (var r = e.formatToParts(t), n = [], o = 0; o < r.length; o++) {
      var a = YC[r[o].type];
      a >= 0 && (n[a] = parseInt(r[o].value, 10));
    }
    return n;
  } catch (s) {
    if (s instanceof RangeError)
      return [NaN];
    throw s;
  }
}
function RC(e, t) {
  var r = e.format(t).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);
  return [n[3], n[1], n[2], n[4], n[5], n[6]];
}
var Ca = {};
function LC(e) {
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
function ff(e, t, r, n, o, a, s) {
  var i = /* @__PURE__ */ new Date(0);
  return i.setUTCFullYear(e, t, r), i.setUTCHours(n, o, a, s), i;
}
var Ul = 36e5, FC = 6e4, Ma = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function BC(e, t, r) {
  var n, o;
  if (!e || (n = Ma.timezoneZ.exec(e), n))
    return 0;
  var a;
  if (n = Ma.timezoneHH.exec(e), n)
    return a = parseInt(n[1], 10), Hl(a) ? -(a * Ul) : NaN;
  if (n = Ma.timezoneHHMM.exec(e), n) {
    a = parseInt(n[1], 10);
    var s = parseInt(n[2], 10);
    return Hl(a, s) ? (o = Math.abs(a) * Ul + s * FC, a > 0 ? -o : o) : NaN;
  }
  if (jC(e)) {
    t = new Date(t || Date.now());
    var i = r ? t : UC(t), l = Xa(i, e), c = r ? l : HC(t, l, e);
    return -c;
  }
  return NaN;
}
function UC(e) {
  return ff(
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
  var r = $C(e, t), n = ff(
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
function HC(e, t, r) {
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
function jC(e) {
  if (jl[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), jl[e] = !0, !0;
  } catch {
    return !1;
  }
}
var WC = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const zC = WC;
var Oa = 36e5, Wl = 6e4, GC = 2, rt = {
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
  timeZone: zC
};
function VC(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var r = t || {}, n = r.additionalDigits == null ? GC : TC(r.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var o = KC(e), a = QC(o.date, n), s = a.year, i = a.restDateString, l = qC(i, s);
  if (isNaN(l))
    return /* @__PURE__ */ new Date(NaN);
  if (l) {
    var c = l.getTime(), u = 0, f;
    if (o.time && (u = ZC(o.time), isNaN(u)))
      return /* @__PURE__ */ new Date(NaN);
    if (o.timeZone || r.timeZone) {
      if (f = BC(o.timeZone || r.timeZone, new Date(c + u)), isNaN(f))
        return /* @__PURE__ */ new Date(NaN);
    } else
      f = Bl(new Date(c + u)), f = Bl(new Date(c + u + f));
    return new Date(c + u + f);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function KC(e) {
  var t = {}, r = rt.dateTimePattern.exec(e), n;
  if (r ? (t.date = r[1], n = r[3]) : (r = rt.datePattern.exec(e), r ? (t.date = r[1], n = r[2]) : (t.date = null, n = e)), n) {
    var o = rt.timeZone.exec(n);
    o ? (t.time = n.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = n;
  }
  return t;
}
function QC(e, t) {
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
function qC(e, t) {
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
    return eM(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
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
function ZC(e) {
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
var JC = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], XC = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function df(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Gl(e, t, r) {
  if (t < 0 || t > 11)
    return !1;
  if (r != null) {
    if (r < 1)
      return !1;
    var n = df(e);
    if (n && r > XC[t] || !n && r > JC[t])
      return !1;
  }
  return !0;
}
function eM(e, t) {
  if (t < 1)
    return !1;
  var r = df(e);
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
function wo(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wo = function(r) {
    return typeof r;
  } : wo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, wo(e);
}
function Xt(e) {
  qe(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || wo(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function hn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var tM = {};
function Zs() {
  return tM;
}
function Tr(e, t) {
  var r, n, o, a, s, i, l, c;
  qe(1, arguments);
  var u = Zs(), f = hn((r = (n = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var d = Xt(e), h = d.getDay(), m = (h < f ? 7 : 0) + h - f;
  return d.setDate(d.getDate() - m), d.setHours(0, 0, 0, 0), d;
}
function Kl(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var rM = 6048e5;
function nM(e, t, r) {
  qe(2, arguments);
  var n = Tr(e, r), o = Tr(t, r), a = n.getTime() - Kl(n), s = o.getTime() - Kl(o);
  return Math.round((a - s) / rM);
}
function oM(e) {
  qe(1, arguments);
  var t = Xt(e), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function aM(e) {
  qe(1, arguments);
  var t = Xt(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function sM(e, t) {
  return qe(1, arguments), nM(oM(e), aM(e), t) + 1;
}
function iM(e, t) {
  var r, n, o, a, s, i, l, c;
  qe(1, arguments);
  var u = Xt(e), f = u.getFullYear(), d = Zs(), h = hn((r = (n = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : d.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = d.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = /* @__PURE__ */ new Date(0);
  m.setFullYear(f + 1, 0, h), m.setHours(0, 0, 0, 0);
  var w = Tr(m, t), D = /* @__PURE__ */ new Date(0);
  D.setFullYear(f, 0, h), D.setHours(0, 0, 0, 0);
  var b = Tr(D, t);
  return u.getTime() >= w.getTime() ? f + 1 : u.getTime() >= b.getTime() ? f : f - 1;
}
function lM(e, t) {
  var r, n, o, a, s, i, l, c;
  qe(1, arguments);
  var u = Zs(), f = hn((r = (n = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), d = iM(e, t), h = /* @__PURE__ */ new Date(0);
  h.setFullYear(d, 0, f), h.setHours(0, 0, 0, 0);
  var m = Tr(h, t);
  return m;
}
var cM = 6048e5;
function uM(e, t) {
  qe(1, arguments);
  var r = Xt(e), n = Tr(r, t).getTime() - lM(r, t).getTime();
  return Math.round(n / cM) + 1;
}
function No(e) {
  return qe(1, arguments), Tr(e, {
    weekStartsOn: 1
  });
}
function fM(e) {
  qe(1, arguments);
  var t = Xt(e), r = t.getFullYear(), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  var o = No(n), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  var s = No(a);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= s.getTime() ? r : r - 1;
}
function dM(e) {
  qe(1, arguments);
  var t = fM(e), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0);
  var n = No(r);
  return n;
}
var vM = 6048e5;
function pM(e) {
  qe(1, arguments);
  var t = Xt(e), r = No(t).getTime() - dM(t).getTime();
  return Math.round(r / vM) + 1;
}
function tt(e, t) {
  qe(2, arguments);
  var r = Xt(e), n = hn(t);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function Ro(e, t) {
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
  return Ro(e, r * 12);
}
const hM = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function gM({
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
  let d = !0, h = !1, m = !1, w = 0;
  const D = new Intl.DateTimeFormat(n.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let b = t.numDays - f + 1, H = t.numDays - b + 1, F = Math.floor((b - 1) / Ke + 1), I = 1, y = t.numWeeks, L = 1, P = t.month, k = t.year;
  const z = /* @__PURE__ */ new Date(), j = z.getDate(), q = z.getMonth() + 1, A = z.getFullYear();
  for (let U = 1; U <= lO; U++) {
    for (let se = 1, K = a; se <= Ke; se++, K += K === Ke ? 1 - Ke : 1) {
      d && K === s && (b = 1, H = e.numDays, F = Math.floor((b - 1) / Ke + 1), I = Math.floor((c - b) / Ke + 1), y = 1, L = u, P = e.month, k = e.year, d = !1, h = !0);
      const ee = n.getDateFromParams(k, P, b, 0, 0, 0, 0), te = n.getDateFromParams(k, P, b, 12, 0, 0, 0), le = n.getDateFromParams(
        k,
        P,
        b,
        23,
        59,
        59,
        999
      ), ge = ee, Y = `${_e(k, 4)}-${_e(P, 2)}-${_e(b, 2)}`, de = se, Q = Ke - se, Ie = l[U - 1], me = i[U - 1], Se = b === j && P === q && k === A, De = h && b === 1, Me = h && b === c, Ne = U === 1, Re = U === u, lt = se === 1, Ze = se === Ke, v = xf(k, P, b);
      o.push({
        locale: n,
        id: Y,
        position: ++w,
        label: b.toString(),
        ariaLabel: D.format(new Date(k, P - 1, b)),
        day: b,
        dayFromEnd: H,
        weekday: K,
        weekdayPosition: de,
        weekdayPositionFromEnd: Q,
        weekdayOrdinal: F,
        weekdayOrdinalFromEnd: I,
        week: y,
        weekFromEnd: L,
        weekPosition: U,
        weeknumber: Ie,
        isoWeeknumber: me,
        month: P,
        year: k,
        date: ge,
        startDate: ee,
        endDate: le,
        noonDate: te,
        dayIndex: v,
        isToday: Se,
        isFirstDay: De,
        isLastDay: Me,
        isDisabled: !h,
        isFocusable: !h,
        isFocused: !1,
        inMonth: h,
        inPrevMonth: d,
        inNextMonth: m,
        onTop: Ne,
        onBottom: Re,
        onLeft: lt,
        onRight: Ze,
        classes: [
          `id-${Y}`,
          `day-${b}`,
          `day-from-end-${H}`,
          `weekday-${K}`,
          `weekday-position-${de}`,
          `weekday-ordinal-${F}`,
          `weekday-ordinal-from-end-${I}`,
          `week-${y}`,
          `week-from-end-${L}`,
          {
            "is-today": Se,
            "is-first-day": De,
            "is-last-day": Me,
            "in-month": h,
            "in-prev-month": d,
            "in-next-month": m,
            "on-top": Ne,
            "on-bottom": Re,
            "on-left": lt,
            "on-right": Ze
          }
        ]
      }), h && Me ? (h = !1, m = !0, b = 1, H = c, F = 1, I = Math.floor((c - b) / Ke + 1), y = 1, L = r.numWeeks, P = r.month, k = r.year) : (b++, H--, F = Math.floor((b - 1) / Ke + 1), I = Math.floor((c - b) / Ke + 1));
    }
    y++, L--;
  }
  return o;
}
function mM(e, t, r, n) {
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
function yM(e, t) {
  return e.days.map((r) => ({
    label: t.formatDate(r.date, t.masks.weekdays),
    weekday: r.weekday
  }));
}
function bM(e, t) {
  return `${t}.${_e(e, 2)}`;
}
function vf(e, t, r) {
  return uf(
    r.getDateParts(r.toDate(e)),
    hM[t]
  );
}
function pf({ day: e, week: t, month: r, year: n }, o, a, s) {
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
    const i = new Date(n, r - 1, 1), l = Ro(i, o);
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
function Lo(e, t) {
  return !Yt(e) || !Yt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function wM(e, t, r) {
  return (e || !1) && !es(e, t) && !Lo(e, r);
}
function _M(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function DM(e, t, r, n) {
  if (!Yt(e) || !Yt(t))
    return [];
  const o = [];
  for (; !Lo(e, t); )
    o.push(e), e = pf(e, 1, r, n);
  return o;
}
function hf(e) {
  const { day: t, week: r, month: n, year: o } = e;
  let a = `${o}-${_e(n, 2)}`;
  return r && (a = `${a}-w${r}`), t && (a = `${a}-${_e(t, 2)}`), a;
}
function AM(e, t) {
  const { month: r, year: n, showWeeknumbers: o, showIsoWeeknumbers: a } = e, s = new Date(n, r - 1, 15), i = t.getMonthParts(r, n), l = t.getPrevMonthParts(r, n), c = t.getNextMonthParts(r, n), u = gM({ monthComps: i, prevMonthComps: l, nextMonthComps: c }, t), f = mM(u, o, a, t), d = yM(f[0], t);
  return {
    id: hf(e),
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
function xM(e, t) {
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
    X(this, "keys", []), X(this, "store", {}), this.size = t, this.createKey = r, this.createItem = n;
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
class qr {
  constructor(t, r = new Fo()) {
    X(this, "order"), X(this, "locale"), X(this, "start", null), X(this, "end", null), X(this, "repeat", null);
    var n;
    this.locale = r;
    const { start: o, end: a, span: s, order: i, repeat: l } = t;
    Qr(o) && (this.start = r.getDateParts(o)), Qr(a) ? this.end = r.getDateParts(a) : this.start != null && s && (this.end = r.getDateParts(tt(this.start.date, s - 1))), this.order = i ?? 0, l && (this.repeat = new Bo(
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
    return (wt(t) ? t : [t]).filter((n) => n).map((n) => qr.from(n, r));
  }
  static from(t, r) {
    if (t instanceof qr)
      return t;
    const n = {
      start: null,
      end: null
    };
    return t != null && (wt(t) ? (n.start = t[0] ?? null, n.end = t[1] ?? null) : Qt(t) ? Object.assign(n, t) : (n.start = t, n.end = t)), n.start != null && (n.start = new Date(n.start)), n.end != null && (n.end = new Date(n.end)), new qr(n, r);
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
class CM {
  constructor() {
    X(this, "records", {});
  }
  render(t, r, n) {
    var o, a, s, i;
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
          endTime: ((h = r.end) == null ? void 0 : h.time) ?? _o
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
        const l = o === i.startDay, c = o === i.endDay, u = l ? i.startTime : 0, f = new Date(t.startDate.getTime() + u), d = c ? i.endTime : _o, h = new Date(t.endDate.getTime() + d), m = u === 0 && d === _o, w = a.order || 0;
        n.push({
          ...i,
          data: a,
          onStart: l,
          onEnd: c,
          startTime: u,
          startDate: f,
          endTime: d,
          endDate: h,
          allDay: m,
          order: w
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
const MM = Object.entries(qt).reduce(
  (e, [t, { dow: r, L: n }]) => (e[t] = {
    id: t,
    firstDayOfWeek: r,
    masks: { L: n }
  }, e),
  {}
), OM = "MMMM YYYY", kM = "W", IM = "MMM", EM = "h A", SM = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], TM = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], PM = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], $M = [
  "h:mm A"
], YM = [
  "HH:mm"
], NM = "WWW, MMM D, YYYY", RM = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], LM = "iso", FM = "YYYY-MM-DDTHH:mm:ss.SSSZ", BM = {
  title: OM,
  weekdays: kM,
  navMonths: IM,
  hours: EM,
  input: SM,
  inputDateTime: TM,
  inputDateTime24hr: PM,
  inputTime: $M,
  inputTime24hr: YM,
  dayPopover: NM,
  data: RM,
  model: LM,
  iso: FM
}, UM = 300, HM = 60, jM = 80, WM = {
  maxSwipeTime: UM,
  minHorizontalSwipeDistance: HM,
  maxVerticalSwipeDistance: jM
}, zM = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: WM,
  masks: BM,
  locales: MM,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, ts = sn(zM), GM = x(() => vA(ts.locales, (e) => (e.masks = Wn(e.masks, ts.masks), e))), fr = (e) => typeof window < "u" && lf(window.__vcalendar__, e) ? Cr(window.__vcalendar__, e) : Cr(ts, e), VM = 12, KM = 5;
function QM(e, t) {
  const r = new Intl.DateTimeFormat().resolvedOptions().locale;
  let n;
  $t(e) ? n = e : lf(e, "id") && (n = e.id), n = (n || r).toLowerCase();
  const o = Object.keys(t), a = (l) => o.find((c) => c.toLowerCase() === l);
  n = a(n) || a(n.substring(0, 2)) || r;
  const s = {
    ...t["en-IE"],
    ...t[n],
    id: n,
    monthCacheSize: VM,
    pageCacheSize: KM
  };
  return Qt(e) ? Wn(e, s) : s;
}
class Fo {
  constructor(t = void 0, r) {
    X(this, "id"), X(this, "daysInWeek"), X(this, "firstDayOfWeek"), X(this, "masks"), X(this, "timezone"), X(this, "hourLabels"), X(this, "dayNames"), X(this, "dayNamesShort"), X(this, "dayNamesShorter"), X(this, "dayNamesNarrow"), X(this, "monthNames"), X(this, "monthNamesShort"), X(this, "relativeTimeNames"), X(this, "amPm", ["am", "pm"]), X(this, "monthCache"), X(this, "pageCache");
    const { id: n, firstDayOfWeek: o, masks: a, monthCacheSize: s, pageCacheSize: i } = QM(t, GM.value);
    this.monthCache = new ql(
      s,
      mO,
      yO
    ), this.pageCache = new ql(i, hf, AM), this.id = n, this.daysInWeek = Ke, this.firstDayOfWeek = EC(o, 1, Ke), this.masks = a, this.timezone = r || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Ia("long", this.id), this.dayNamesShort = Ia("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = Ia("narrow", this.id), this.monthNames = rc("long", this.id), this.monthNamesShort = rc("short", this.id), this.relativeTimeNames = _O(this.id);
  }
  formatDate(t, r) {
    return MO(t, r, this);
  }
  parseDate(t, r) {
    return nc(t, r, this);
  }
  toDate(t, r = {}) {
    const n = /* @__PURE__ */ new Date(NaN);
    let o = n;
    const { fillDate: a, mask: s, patch: i, rules: l } = r;
    if (Ct(t) ? (r.type = "number", o = /* @__PURE__ */ new Date(+t)) : $t(t) ? (r.type = "string", o = t ? nc(t, s || "iso", this) : n) : Qr(t) ? (r.type = "date", o = new Date(t.getTime())) : Js(t) && (r.type = "object", o = this.getDateFromParts(t)), o && (i || l)) {
      let c = this.getDateParts(o);
      if (i && a != null) {
        const u = this.getDateParts(this.toDate(a));
        c = this.getDateParts(
          this.toDate({ ...u, ...uf(c, iO[i]) })
        );
      }
      l && (c = CO(c, l)), o = this.getDateFromParts(c);
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
    return qr.from(t, this);
  }
  ranges(t) {
    return qr.fromMany(t, this);
  }
  getDateParts(t) {
    return gO(t, this);
  }
  getDateFromParts(t) {
    return Mf(t, this.timezone);
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
    return xM(t, r);
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
    return wO().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
var Ur = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(Ur || {}), gf = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(gf || {}), mf = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(mf || {}), yf = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(yf || {});
class qM {
  constructor(t, r, n) {
    X(this, "validated", !0), this.type = t, this.interval = r, this.from = n, this.from || (console.error(
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
        return pO(this.from.date, r) % this.interval === 0;
      case "months":
        return hO(this.from.date, r) % this.interval === 0;
      case "years":
        return Cf(this.from.date, r) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class gn {
  constructor(t, r, n, o) {
    X(this, "components", []), this.type = t, this.validator = n, this.getter = o, this.components = this.normalizeComponents(r);
  }
  static create(t, r) {
    switch (t) {
      case "days":
        return new ZM(r);
      case "weekdays":
        return new JM(r);
      case "weeks":
        return new XM(r);
      case "months":
        return new eO(r);
      case "years":
        return new tO(r);
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
class ZM extends gn {
  constructor(t) {
    super(
      "days",
      t,
      oO,
      ({ day: r, dayFromEnd: n }) => [r, -n]
    );
  }
}
class JM extends gn {
  constructor(t) {
    super(
      "weekdays",
      t,
      rs,
      ({ weekday: r }) => [r]
    );
  }
}
class XM extends gn {
  constructor(t) {
    super(
      "weeks",
      t,
      aO,
      ({ week: r, weekFromEnd: n }) => [r, -n]
    );
  }
}
class eO extends gn {
  constructor(t) {
    super("months", t, sO, ({ month: r }) => [
      r
    ]);
  }
}
class tO extends gn {
  constructor(t) {
    super("years", t, Ct, ({ year: r }) => [r]);
  }
}
class rO {
  constructor(t, r) {
    X(this, "components"), this.type = t, this.components = this.normalizeComponents(r);
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
class nO {
  constructor(t) {
    X(this, "type", "function"), X(this, "validated", !0), this.fn = t, Yr(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class Bo {
  constructor(t, r = {}, n) {
    X(this, "validated", !0), X(this, "config"), X(this, "type", Ur.Any), X(this, "from"), X(this, "until"), X(this, "rules", []), X(this, "locale", new Fo()), this.parent = n, r.locale && (this.locale = r.locale), this.config = t, Yr(t) ? (this.type = Ur.All, this.rules = [new nO(t)]) : wt(t) ? (this.type = Ur.Any, this.rules = t.map((o) => new Bo(o, r, this))) : Qt(t) ? (this.type = Ur.All, this.from = t.from ? this.locale.getDateParts(t.from) : n == null ? void 0 : n.from, this.until = t.until ? this.locale.getDateParts(t.until) : n == null ? void 0 : n.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const r = [];
    if (t.every && ($t(t.every) && (t.every = [1, `${t.every}s`]), wt(t.every))) {
      const [n = 1, o = gf.Days] = t.every;
      r.push(new qM(o, n, this.from));
    }
    return Object.values(mf).forEach((n) => {
      n in t && r.push(gn.create(n, t[n]));
    }), Object.values(yf).forEach((n) => {
      n in t && r.push(new rO(n, t[n]));
    }), t.on != null && (wt(t.on) || (t.on = [t.on]), r.push(
      new Bo(t.on, { locale: this.locale }, this.parent)
    )), r;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Ur.Any ? this.rules.some((r) => r.passes(t)) : this.rules.every((r) => r.passes(t)) : !0;
  }
}
function oO(e) {
  return Ct(e) ? e >= 1 && e <= 31 : !1;
}
function rs(e) {
  return Ct(e) ? e >= 1 && e <= 7 : !1;
}
function aO(e) {
  return Ct(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function sO(e) {
  return Ct(e) ? e >= 1 && e <= 12 : !1;
}
function Zl(e) {
  return !(!Ct(e) || e < -5 || e > 5 || e === 0);
}
const iO = {
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
}, Ke = 7, lO = 6, bf = 1e3, wf = bf * 60, _f = wf * 60, _o = _f * 24, cO = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], uO = ["L", "iso"], On = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, Df = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, fO = /\[([^]*?)\]/gm, Jl = {
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
}, nr = /\d\d?/, dO = /\d{3}/, vO = /\d{4}/, An = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Xl = () => {
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
    vO,
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
    dO,
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
function Af(e, t) {
  return (Ht(e) && e || [
    $t(e) && e || "YYYY-MM-DD"
  ]).map(
    (r) => uO.reduce(
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
function xf(e, t, r) {
  const n = Date.UTC(e, t - 1, r);
  return Xs(/* @__PURE__ */ new Date(0), new Date(n));
}
function Xs(e, t) {
  return Math.round((t.getTime() - e.getTime()) / _o);
}
function pO(e, t) {
  return Math.ceil(Xs(tc(e), tc(t)) / 7);
}
function Cf(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function hO(e, t) {
  return Cf(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function Mf(e, t = "") {
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
    return VC(u, { timeZone: t });
  }
  return new Date(n, o - 1, a, s, i, l, c);
}
function gO(e, t) {
  let r = new Date(e.getTime());
  t.timezone && (r = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), r.setMilliseconds(e.getMilliseconds()));
  const n = r.getMilliseconds(), o = r.getSeconds(), a = r.getMinutes(), s = r.getHours(), i = n + o * bf + a * wf + s * _f, l = r.getMonth() + 1, c = r.getFullYear(), u = t.getMonthParts(l, c), f = r.getDate(), d = u.numDays - f + 1, h = r.getDay() + 1, m = Math.floor((f - 1) / 7 + 1), w = Math.floor((u.numDays - f) / 7 + 1), D = Math.ceil(
    (f + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7
  ), b = u.numWeeks - D + 1, H = u.weeknumbers[D], F = xf(c, l, f);
  return {
    milliseconds: n,
    seconds: o,
    minutes: a,
    hours: s,
    time: i,
    day: f,
    dayFromEnd: d,
    weekday: h,
    weekdayOrdinal: m,
    weekdayOrdinalFromEnd: w,
    week: D,
    weekFromEnd: b,
    weeknumber: H,
    month: l,
    year: c,
    date: r,
    dateTime: r.getTime(),
    dayIndex: F,
    timezoneOffset: 0,
    isValid: !0
  };
}
function mO(e, t, r) {
  return `${t}-${e}-${r}`;
}
function yO(e, t, r) {
  const n = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, o = new Date(t, e - 1, 1), a = o.getDay() + 1, s = e === 2 && n ? 29 : cO[e - 1], i = r - 1, l = sM(o, {
    weekStartsOn: i
  }), c = [], u = [];
  for (let f = 0; f < l; f++) {
    const d = tt(o, f * 7);
    c.push(uM(d, { weekStartsOn: i })), u.push(pM(d));
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
function bO() {
  const e = [];
  for (let o = 0; o < Ke; o++)
    e.push(
      Mf({
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
  return bO().map((n) => r.format(n));
}
function wO() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function _O(e = void 0) {
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
function Of() {
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
  return Of().map((n) => r.format(n));
}
function DO(e, t, r) {
  return Ct(t) ? t === e : wt(t) ? t.includes(e) : Yr(t) ? t(e, r) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function kn(e, t, r) {
  const n = [], [o, a, s] = t;
  for (let i = o; i <= a; i++)
    (r == null || DO(i, r, e)) && n.push({
      value: i,
      label: _e(i, s)
    });
  return n;
}
function AO(e, t) {
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
function xO(e, t, r, n) {
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
function CO(e, t) {
  const r = { ...e };
  return Object.entries(t).forEach(([n, o]) => {
    const a = On[n], s = e[n];
    r[n] = xO(
      e,
      a,
      s,
      o
    );
  }), r;
}
function nc(e, t, r) {
  return Af(t, r).map((o) => {
    if (typeof o != "string")
      throw new Error("Invalid mask");
    let a = e;
    if (a.length > 1e3)
      return !1;
    let s = !0;
    const i = {};
    if (o.replace(Df, (u) => {
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
function MO(e, t, r) {
  if (e == null)
    return "";
  let n = Af(t, r)[0];
  /Z$/.test(n) && (r.timezone = "utc");
  const o = [];
  n = n.replace(fO, (s, i) => (o.push(i), "??"));
  const a = r.getDateParts(e);
  return n = n.replace(
    Df,
    (s) => s in Jl ? Jl[s](a, r) : s.slice(1, s.length - 1)
  ), n.replace(/\?\?/g, () => o.shift());
}
let OO = 0;
class kf {
  constructor(t, r, n) {
    X(this, "key", ""), X(this, "hashcode", ""), X(this, "highlight", null), X(this, "content", null), X(this, "dot", null), X(this, "bar", null), X(this, "event", null), X(this, "popover", null), X(this, "customData", null), X(this, "ranges"), X(this, "hasRanges", !1), X(this, "order", 0), X(this, "pinPage", !1), X(this, "maxRepeatSpan", 0), X(this, "locale");
    const { dates: o } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = ++OO), this.locale = n, r.normalizeGlyphs(this), this.ranges = n.ranges(o ?? []), this.hasRanges = !!Ht(this.ranges), this.maxRepeatSpan = this.ranges.filter((a) => a.hasRepeat).map((a) => a.daySpan).reduce((a, s) => Math.max(a, s), 0);
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
function zn(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function If(e) {
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
  const l = (m) => {
    r && (If({
      ...e,
      target: e.target || m.currentTarget
    }), m.stopPropagation());
  }, c = (m) => {
    s || (s = !0, (n || o) && ns({
      ...e,
      target: e.target || m.currentTarget
    }));
  }, u = () => {
    s && (s = !1, (n || o && !i) && zn(e));
  }, f = (m) => {
    i || (i = !0, (a || o) && ns({
      ...e,
      target: e.target || m.currentTarget
    }));
  }, d = (m) => {
    i && !bo(m.currentTarget, m.relatedTarget) && (i = !1, (a || o && !s) && zn(e));
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
  const t = Po(e);
  if (t == null)
    return;
  const r = t.popoverHandlers;
  !r || !r.length || (r.forEach((n) => n()), delete t.popoverHandlers);
}, ac = (e, t) => {
  const r = Po(e);
  if (r == null)
    return;
  const n = [], o = Ef(t);
  Object.entries(o).forEach(([a, s]) => {
    n.push(lr(r, a, s));
  }), r.popoverHandlers = n;
}, Sf = {
  mounted(e, t) {
    const { value: r } = t;
    r && ac(e, r);
  },
  updated(e, t) {
    const { oldValue: r, value: n } = t, o = r == null ? void 0 : r.visibility, a = n == null ? void 0 : n.visibility;
    o !== a && (o && (oc(e), a || zn(r)), a && ac(e, n));
  },
  unmounted(e) {
    oc(e);
  }
}, kO = (e, t, {
  maxSwipeTime: r,
  minHorizontalSwipeDistance: n,
  maxVerticalSwipeDistance: o
}) => {
  if (!e || !e.addEventListener || !Yr(t))
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
    const d = f.changedTouches[0], h = d.screenX - a, m = d.screenY - s;
    if ((/* @__PURE__ */ new Date()).getTime() - i < r && Math.abs(h) >= n && Math.abs(m) <= o) {
      const D = { toLeft: !1, toRight: !1 };
      h < 0 ? D.toLeft = !0 : D.toRight = !0, t(D);
    }
  }
  return lr(e, "touchstart", c, { passive: !0 }), lr(e, "touchend", u, { passive: !0 }), () => {
    ir(e, "touchstart", c), ir(e, "touchend", u);
  };
}, Do = {}, IO = (e, t = 10) => {
  Do[e] = Date.now() + t;
}, EO = (e, t) => {
  if (e in Do) {
    const r = Do[e];
    if (Date.now() < r)
      return;
    delete Do[e];
  }
  t();
};
function Tf() {
  return typeof window < "u";
}
function SO(e) {
  return Tf() && e in window;
}
function TO(e) {
  const t = be(!1), r = x(() => t.value ? "dark" : "light");
  let n, o;
  function a(h) {
    t.value = h.matches;
  }
  function s() {
    SO("matchMedia") && (n = window.matchMedia("(prefers-color-scheme: dark)"), n.addEventListener("change", a), t.value = n.matches);
  }
  function i() {
    const { selector: h = ":root", darkClass: m = "dark" } = e.value, w = document.querySelector(h);
    t.value = w.classList.contains(m);
  }
  function l(h) {
    const { selector: m = ":root", darkClass: w = "dark" } = h;
    if (Tf() && m && w) {
      const D = document.querySelector(m);
      D && (o = new MutationObserver(i), o.observe(D, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = D.classList.contains(w));
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
  return Gn(() => d()), {
    isDark: t,
    displayMode: r,
    cleanup: d
  };
}
const PO = ["base", "start", "end", "startEnd"], $O = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], YO = { base: {}, start: {}, end: {} };
function ei(e, t, r = YO) {
  let n = e, o = {};
  t === !0 || $t(t) ? (n = $t(t) ? t : n, o = { ...r }) : Qt(t) && (Fl(t, PO) ? o = { ...t } : o = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const a = Wn(
    o,
    { start: o.startEnd, end: o.startEnd },
    r
  );
  return Object.entries(a).forEach(([s, i]) => {
    let l = n;
    i === !0 || $t(i) ? (l = $t(i) ? i : l, a[s] = { color: l }) : Qt(i) && (Fl(i, $O) ? a[s] = { ...i } : a[s] = {}), Wn(a[s], { color: l });
  }), a;
}
class NO {
  constructor() {
    X(this, "type", "highlight");
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
    X(this, "type", ""), X(this, "collectionType", ""), this.type = t, this.collectionType = r;
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
class RO extends ti {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, r) {
    return ei("base", r);
  }
}
class LO extends ti {
  constructor() {
    super("dot", "dots");
  }
}
class FO extends ti {
  constructor() {
    super("bar", "bars");
  }
}
class BO {
  constructor(t) {
    X(this, "color"), X(this, "renderers", [
      new RO(),
      new NO(),
      new LO(),
      new FO()
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
const Pf = Symbol("__vc_base_context__"), $f = {
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
function Yf(e) {
  const t = x(() => e.color ?? ""), r = x(() => e.isDark ?? !1), { displayMode: n } = TO(r), o = x(() => new BO(t.value)), a = x(() => {
    if (e.locale instanceof Fo)
      return e.locale;
    const d = Qt(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new Fo(d, e.timezone);
  }), s = x(() => a.value.masks), i = x(() => e.minDate), l = x(() => e.maxDate), c = x(() => {
    const d = e.disabledDates ? [...e.disabledDates] : [];
    return i.value != null && d.push({
      start: null,
      end: tt(a.value.toDate(i.value), -1)
    }), l.value != null && d.push({
      start: tt(a.value.toDate(l.value), 1),
      end: null
    }), a.value.ranges(d);
  }), u = x(() => new kf(
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
  return ln(Pf, f), f;
}
function UO(e) {
  return Gt(Pf, () => Yf(e), !0);
}
function Nf(e) {
  return `__vc_slot_${e}__`;
}
function Rf(e, t = {}) {
  Object.keys(e).forEach((r) => {
    ln(Nf(t[r] ?? r), e[r]);
  });
}
function Lf(e) {
  return Gt(Nf(e), null);
}
const HO = {
  ...$f,
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
}, jO = [
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
], Ff = Symbol("__vc_calendar_context__");
function WO(e, { slots: t, emit: r }) {
  const n = be(null), o = be(null), a = be((/* @__PURE__ */ new Date()).getDate()), s = be(!1), i = be(Symbol()), l = be(Symbol()), c = be(e.view), u = be([]), f = be("");
  let d = null, h = null;
  Rf(t);
  const {
    theme: m,
    color: w,
    displayMode: D,
    locale: b,
    masks: H,
    minDate: F,
    maxDate: I,
    disabledAttribute: y,
    disabledDates: L
  } = UO(e), P = x(() => e.rows * e.columns), k = x(() => e.step || P.value), z = x(() => sf(u.value) ?? null), j = x(() => Wr(u.value) ?? null), q = x(
    () => e.minPage || (F.value ? Q(F.value) : null)
  ), A = x(
    () => e.maxPage || (I.value ? Q(I.value) : null)
  ), U = x(() => e.navVisibility), se = x(() => !!e.showWeeknumbers), K = x(() => !!e.showIsoWeeknumbers), ee = x(() => c.value === "monthly"), te = x(() => c.value === "weekly"), le = x(() => c.value === "daily"), ge = () => {
    s.value = !0, r("transition-start");
  }, Y = () => {
    s.value = !1, r("transition-end"), d && (d.resolve(!0), d = null);
  }, de = (T, p, O = c.value) => pf(T, p, O, b.value), Q = (T) => vf(T, c.value, b.value), Ie = (T) => {
    !y.value || !Re.value || (T.isDisabled = Re.value.cellExists(
      y.value.key,
      T.dayIndex
    ));
  }, me = (T) => {
    T.isFocusable = T.inMonth && T.day === a.value;
  }, Se = (T, p) => {
    for (const O of T)
      for (const G of O.days)
        if (p(G) === !1)
          return;
  }, De = x(
    () => u.value.reduce((T, p) => (T.push(...p.viewDays), T), [])
  ), Me = x(() => {
    const T = [];
    return (e.attributes || []).forEach((p, O) => {
      !p || !p.dates || T.push(
        new kf(
          {
            ...p,
            order: p.order || 0
          },
          m.value,
          b.value
        )
      );
    }), y.value && T.push(y.value), T;
  }), Ne = x(() => Ht(Me.value)), Re = x(() => {
    const T = new CM();
    return Me.value.forEach((p) => {
      p.ranges.forEach((O) => {
        T.render(p, O, De.value);
      });
    }), T;
  }), lt = x(() => De.value.reduce((T, p) => (T[p.dayIndex] = { day: p, cells: [] }, T[p.dayIndex].cells.push(...Re.value.getCells(p)), T), {})), Ze = (T, p) => {
    const O = e.showWeeknumbers || e.showIsoWeeknumbers;
    return O == null ? "" : QD(O) ? O ? "left" : "" : O.startsWith("right") ? p > 1 ? "right" : O : T > 1 ? "left" : O;
  }, v = () => {
    var T, p;
    if (!Ne.value)
      return null;
    const O = Me.value.find((Ee) => Ee.pinPage) || Me.value[0];
    if (!O || !O.hasRanges)
      return null;
    const [G] = O.ranges, fe = ((T = G.start) == null ? void 0 : T.date) || ((p = G.end) == null ? void 0 : p.date);
    return fe ? Q(fe) : null;
  }, g = () => {
    if (Yt(z.value))
      return z.value;
    const T = v();
    return Yt(T) ? T : Q(/* @__PURE__ */ new Date());
  }, _ = (T, p = {}) => {
    const { view: O = c.value, position: G = 1, force: fe } = p, Ee = G > 0 ? 1 - G : -(P.value + G);
    let Xe = de(T, Ee, O), ct = de(Xe, P.value - 1, O);
    return fe || (es(Xe, q.value) ? Xe = q.value : Lo(ct, A.value) && (Xe = de(A.value, 1 - P.value)), ct = de(Xe, P.value - 1)), { fromPage: Xe, toPage: ct };
  }, M = (T, p, O = "") => {
    if (O === "none" || O === "fade")
      return O;
    if ((T == null ? void 0 : T.view) !== (p == null ? void 0 : p.view))
      return "fade";
    const G = Lo(p, T), fe = es(p, T);
    return !G && !fe ? "fade" : O === "slide-v" ? fe ? "slide-down" : "slide-up" : fe ? "slide-right" : "slide-left";
  }, C = (T = {}) => new Promise((p, O) => {
    const { position: G = 1, force: fe = !1, transition: Ee } = T, Xe = Yt(T.page) ? T.page : g(), { fromPage: ct } = _(Xe, {
      position: G,
      force: fe
    }), Fr = [];
    for (let Br = 0; Br < P.value; Br++) {
      const ua = de(ct, Br), nt = Br + 1, fa = Math.ceil(nt / e.columns), Jn = e.rows - fa + 1, mn = nt % e.columns || e.columns, yn = e.columns - mn + 1, Qf = Ze(mn, yn);
      Fr.push(
        b.value.getPage({
          ...ua,
          view: c.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: nt,
          row: fa,
          rowFromEnd: Jn,
          column: mn,
          columnFromEnd: yn,
          showWeeknumbers: se.value,
          showIsoWeeknumbers: K.value,
          weeknumberPosition: Qf
        })
      );
    }
    f.value = M(
      u.value[0],
      Fr[0],
      Ee
    ), u.value = Fr, f.value && f.value !== "none" ? d = {
      resolve: p,
      reject: O
    } : p(!0);
  }), N = (T) => {
    const p = z.value ?? Q(/* @__PURE__ */ new Date());
    return de(p, T);
  }, B = (T, p = {}) => {
    const O = Yt(T) ? T : Q(T);
    return Object.assign(
      p,
      _(O, {
        ...p,
        force: !0
      })
    ), DM(
      p.fromPage,
      p.toPage,
      c.value,
      b.value
    ).map((fe) => wM(fe, q.value, A.value)).some((fe) => fe);
  }, $ = (T, p = {}) => B(N(T), p), R = x(() => $(-k.value)), E = x(() => $(k.value)), W = async (T, p = {}) => !p.force && !B(T, p) ? !1 : (p.fromPage && !_M(p.fromPage, z.value) && (zn({ id: i.value, hideDelay: 0 }), p.view && (IO("view", 10), c.value = p.view), await C({
    ...p,
    page: p.fromPage,
    position: 1,
    force: !0
  }), r("did-move", u.value)), !0), J = (T, p = {}) => W(N(T), p), Z = () => J(-k.value), re = () => J(k.value), ce = (T) => {
    const p = ee.value ? ".in-month" : "", O = `.id-${b.value.getDayId(T)}${p}`, G = `${O}.vc-focusable, ${O} .vc-focusable`, fe = n.value;
    if (fe) {
      const Ee = fe.querySelector(G);
      if (Ee)
        return Ee.focus(), !0;
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
  }, gr = (T, p) => {
    o.value = null, T.isFocused = !1, r("dayfocusout", T, p);
  }, It = (T, p) => {
    r("daykeydown", T, p);
    const O = T.noonDate;
    let G = null;
    switch (p.key) {
      case "ArrowLeft": {
        G = tt(O, -1);
        break;
      }
      case "ArrowRight": {
        G = tt(O, 1);
        break;
      }
      case "ArrowUp": {
        G = tt(O, -7);
        break;
      }
      case "ArrowDown": {
        G = tt(O, 7);
        break;
      }
      case "Home": {
        G = tt(O, -T.weekdayPosition + 1);
        break;
      }
      case "End": {
        G = tt(O, T.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        p.altKey ? G = Ql(O, -1) : G = Ro(O, -1);
        break;
      }
      case "PageDown": {
        p.altKey ? G = Ql(O, 1) : G = Ro(O, 1);
        break;
      }
    }
    G && (p.preventDefault(), ve(G).catch());
  }, Lr = (T) => {
    const p = o.value;
    p != null && It(p, T);
  }, He = (T, p) => {
    r("weeknumberclick", T, p);
  };
  C({
    page: e.initialPage,
    position: e.initialPagePosition
  }), Pr(() => {
    !e.disablePageSwipe && n.value && (h = kO(
      n.value,
      ({ toLeft: T = !1, toRight: p = !1 }) => {
        T ? re() : p && Z();
      },
      fr("touch")
    ));
  }), Gn(() => {
    u.value = [], h && h();
  }), je(
    () => b.value,
    () => {
      C();
    }
  ), je(
    () => P.value,
    () => C()
  ), je(
    () => e.view,
    () => c.value = e.view
  ), je(
    () => c.value,
    () => {
      EO("view", () => {
        C();
      }), r("update:view", c.value);
    }
  ), je(
    () => a.value,
    () => {
      Se(u.value, (T) => me(T));
    }
  ), Wc(() => {
    r("update:pages", u.value), Se(u.value, (T) => {
      Ie(T), me(T);
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
    theme: m,
    color: w,
    displayMode: D,
    locale: b,
    masks: H,
    attributes: Me,
    disabledAttribute: y,
    disabledDates: L,
    attributeContext: Re,
    days: De,
    dayCells: lt,
    count: P,
    step: k,
    firstPage: z,
    lastPage: j,
    canMovePrev: R,
    canMoveNext: E,
    minPage: q,
    maxPage: A,
    isMonthly: ee,
    isWeekly: te,
    isDaily: le,
    navVisibility: U,
    showWeeknumbers: se,
    showIsoWeeknumbers: K,
    getDateAddress: Q,
    canMove: B,
    canMoveBy: $,
    move: W,
    moveBy: J,
    movePrev: Z,
    moveNext: re,
    onTransitionBeforeEnter: ge,
    onTransitionAfterEnter: Y,
    tryFocusDate: ce,
    focusDate: ve,
    onKeydown: Lr,
    onDayKeydown: It,
    onDayClick: ye,
    onDayMouseenter: Te,
    onDayMouseleave: ze,
    onDayFocusin: kt,
    onDayFocusout: gr,
    onWeeknumberClick: He
  };
  return ln(Ff, Je), Je;
}
function Rr() {
  const e = Gt(Ff);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const zO = /* @__PURE__ */ We({
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
    const s = sn({
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
    const c = x(() => ({
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
    })), u = x(() => {
      const Y = s.direction === "left" || s.direction === "right";
      let de = "";
      if (s.placement) {
        const Q = s.placement.split("-");
        Q.length > 1 && (de = Q[1]);
      }
      return ["start", "top", "left"].includes(de) ? Y ? "top" : "left" : ["end", "bottom", "right"].includes(de) ? Y ? "bottom" : "right" : Y ? "middle" : "center";
    });
    function f() {
      a && (a.destroy(), a = null);
    }
    function d() {
      xr(() => {
        const Y = Po(s.target);
        !Y || !n.value || (a && a.state.elements.reference !== Y && f(), a ? a.update() : a = Lh(
          Y,
          n.value,
          c.value
        ));
      });
    }
    function h(Y) {
      Object.assign(s, cf(Y, "force"));
    }
    function m(Y, de) {
      clearTimeout(r), Y > 0 ? r = setTimeout(de, Y) : de();
    }
    function w(Y) {
      return !Y || !a ? !1 : Po(Y) === a.state.elements.reference;
    }
    async function D(Y = {}) {
      s.force || (Y.force && (s.force = !0), m(Y.showDelay ?? e.showDelay, () => {
        s.isVisible && (s.force = !1), h({
          ...Y,
          isVisible: !0
        }), d();
      }));
    }
    function b(Y = {}) {
      a && (Y.target && !w(Y.target) || s.force || (Y.force && (s.force = !0), m(Y.hideDelay ?? e.hideDelay, () => {
        s.isVisible || (s.force = !1), s.isVisible = !1;
      })));
    }
    function H(Y = {}) {
      Y.target != null && (s.isVisible && w(Y.target) ? b(Y) : D(Y));
    }
    function F(Y) {
      if (!a)
        return;
      const de = a.state.elements.reference;
      if (!n.value || !de)
        return;
      const Q = Y.target;
      bo(n.value, Q) || bo(de, Q) || b({ force: !0 });
    }
    function I(Y) {
      (Y.key === "Esc" || Y.key === "Escape") && b();
    }
    function y({ detail: Y }) {
      !Y.id || Y.id !== e.id || D(Y);
    }
    function L({ detail: Y }) {
      !Y.id || Y.id !== e.id || b(Y);
    }
    function P({ detail: Y }) {
      !Y.id || Y.id !== e.id || H(Y);
    }
    function k() {
      lr(document, "keydown", I), lr(document, "click", F), lr(document, "show-popover", y), lr(document, "hide-popover", L), lr(document, "toggle-popover", P);
    }
    function z() {
      ir(document, "keydown", I), ir(document, "click", F), ir(document, "show-popover", y), ir(document, "hide-popover", L), ir(document, "toggle-popover", P);
    }
    function j(Y) {
      t("before-show", Y);
    }
    function q(Y) {
      s.force = !1, t("after-show", Y);
    }
    function A(Y) {
      t("before-hide", Y);
    }
    function U(Y) {
      s.force = !1, f(), t("after-hide", Y);
    }
    function se(Y) {
      Y.stopPropagation();
    }
    function K() {
      s.isHovered = !0, s.isInteractive && ["hover", "hover-focus"].includes(s.visibility) && D();
    }
    function ee() {
      if (s.isHovered = !1, !a)
        return;
      const Y = a.state.elements.reference;
      s.autoHide && !s.isFocused && (!Y || Y !== document.activeElement) && ["hover", "hover-focus"].includes(s.visibility) && b();
    }
    function te() {
      s.isFocused = !0, s.isInteractive && ["focus", "hover-focus"].includes(s.visibility) && D();
    }
    function le(Y) {
      ["focus", "hover-focus"].includes(s.visibility) && (!Y.relatedTarget || !bo(n.value, Y.relatedTarget)) && (s.isFocused = !1, !s.isHovered && s.autoHide && b());
    }
    function ge() {
      o != null && (o.disconnect(), o = null);
    }
    return je(
      () => n.value,
      (Y) => {
        ge(), Y && (o = new ResizeObserver(() => {
          a && a.update();
        }), o.observe(Y));
      }
    ), je(() => s.placement, i, {
      immediate: !0
    }), Pr(() => {
      k();
    }), Gn(() => {
      f(), ge(), z();
    }), {
      ...Rd(s),
      popoverRef: n,
      alignment: u,
      hide: b,
      setupPopper: d,
      beforeEnter: j,
      afterEnter: q,
      beforeLeave: A,
      afterLeave: U,
      onClick: se,
      onMouseOver: K,
      onMouseLeave: ee,
      onFocusIn: te,
      onFocusOut: le
    };
  }
}), hr = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
};
function GO(e, t, r, n, o, a) {
  return V(), oe("div", {
    class: xe(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s)),
    onMouseover: t[1] || (t[1] = (...s) => e.onMouseOver && e.onMouseOver(...s)),
    onMouseleave: t[2] || (t[2] = (...s) => e.onMouseLeave && e.onMouseLeave(...s)),
    onFocusin: t[3] || (t[3] = (...s) => e.onFocusIn && e.onFocusIn(...s)),
    onFocusout: t[4] || (t[4] = (...s) => e.onFocusOut && e.onFocusOut(...s))
  }, [
    ie(ta, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: Ye(() => [
        e.isVisible ? (V(), oe("div", $r({
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
            Jo(Le(e.data), 1)
          ]),
          ne("span", {
            class: xe([
              "vc-popover-caret",
              `direction-${e.direction}`,
              `align-${e.alignment}`
            ])
          }, null, 2)
        ], 16)) : Be("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const ri = /* @__PURE__ */ hr(zO, [["render", GO]]), VO = { class: "vc-day-popover-row" }, KO = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, QO = { class: "vc-day-popover-row-label" }, qO = /* @__PURE__ */ We({
  __name: "PopoverRow",
  props: {
    attribute: null
  },
  setup(e) {
    const t = e, r = x(() => {
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
    return (n, o) => (V(), oe("div", VO, [
      S(r) ? (V(), oe("div", KO, [
        ne("span", {
          class: xe(S(r).class)
        }, null, 2)
      ])) : Be("", !0),
      ne("div", QO, [
        Vn(n.$slots, "default", {}, () => [
          Jo(Le(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
        ])
      ])
    ]));
  }
}), ZO = {
  inheritAttrs: !1
}, ht = /* @__PURE__ */ We({
  ...ZO,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const r = Lf(e.name);
    return (n, o) => S(r) ? (V(), Ve(jc(S(r)), In($r({ key: 0 }, n.$attrs)), null, 16)) : Vn(n.$slots, "default", { key: 1 });
  }
}), JO = { class: "vc-day-popover-container" }, XO = {
  key: 0,
  class: "vc-day-popover-header"
}, ek = /* @__PURE__ */ We({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: r, color: n, masks: o, locale: a } = Rr();
    function s(l, c) {
      return a.value.formatDate(l, c);
    }
    function i(l) {
      return a.value.formatDate(l.date, o.value.dayPopover);
    }
    return (l, c) => (V(), Ve(ri, {
      id: S(t),
      class: xe([`vc-${S(n)}`, `vc-${S(r)}`])
    }, {
      default: Ye(({ data: { day: u, attributes: f }, hide: d }) => [
        ie(ht, {
          name: "day-popover",
          day: u,
          "day-title": i(u),
          attributes: f,
          format: s,
          masks: S(o),
          hide: d
        }, {
          default: Ye(() => [
            ne("div", JO, [
              S(o).dayPopover ? (V(), oe("div", XO, Le(i(u)), 1)) : Be("", !0),
              (V(!0), oe(we, null, mt(f, (h) => (V(), Ve(qO, {
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
}), tk = {}, rk = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, nk = /* @__PURE__ */ ne("polyline", { points: "9 18 15 12 9 6" }, null, -1), ok = [
  nk
];
function ak(e, t) {
  return V(), oe("svg", rk, ok);
}
const sk = /* @__PURE__ */ hr(tk, [["render", ak]]), ik = {}, lk = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, ck = /* @__PURE__ */ ne("polyline", { points: "15 18 9 12 15 6" }, null, -1), uk = [
  ck
];
function fk(e, t) {
  return V(), oe("svg", lk, uk);
}
const dk = /* @__PURE__ */ hr(ik, [["render", fk]]), vk = {}, pk = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, hk = /* @__PURE__ */ ne("polyline", { points: "6 9 12 15 18 9" }, null, -1), gk = [
  hk
];
function mk(e, t) {
  return V(), oe("svg", pk, gk);
}
const yk = /* @__PURE__ */ hr(vk, [["render", mk]]), bk = {}, wk = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, _k = /* @__PURE__ */ ne("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), Dk = [
  _k
];
function Ak(e, t) {
  return V(), oe("svg", wk, Dk);
}
const xk = /* @__PURE__ */ hr(bk, [["render", Ak]]), Ck = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: yk,
  IconChevronLeft: dk,
  IconChevronRight: sk,
  IconClock: xk
}, Symbol.toStringTag, { value: "Module" })), on = /* @__PURE__ */ We({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, r = x(() => t.width || t.size), n = x(() => t.height || t.size), o = x(() => Ck[`Icon${t.name}`]);
    return (a, s) => (V(), Ve(jc(S(o)), {
      width: S(r),
      height: S(n),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
}), Mk = ["disabled"], Ok = {
  key: 1,
  class: "vc-title-wrapper"
}, kk = {
  type: "button",
  class: "vc-title"
}, Ik = ["disabled"], Bf = /* @__PURE__ */ We({
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
    } = Rr(), l = x(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), c = x(() => {
      const { page: w } = t;
      return {
        id: r.value,
        visibility: n.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: w },
        isInteractive: !0
      };
    }), u = x(() => t.page.titlePosition.includes("left")), f = x(() => t.page.titlePosition.includes("right")), d = x(() => t.layout ? t.layout : u.value ? "tu-pn" : f.value ? "pn-tu" : "p-tu-n;"), h = x(() => ({
      prev: d.value.includes("p") && !t.hideArrows,
      title: d.value.includes("t") && !t.hideTitle,
      next: d.value.includes("n") && !t.hideArrows
    })), m = x(() => ({ gridTemplateColumns: d.value.split("").map((D) => {
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
    return (w, D) => (V(), oe("div", {
      class: xe(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: jt(S(m))
    }, [
      S(h).prev ? (V(), oe("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !S(o),
        onClick: D[0] || (D[0] = //@ts-ignore
        (...b) => S(a) && S(a)(...b)),
        onKeydown: D[1] || (D[1] = Fi(
          //@ts-ignore
          (...b) => S(a) && S(a)(...b),
          ["space", "enter"]
        ))
      }, [
        ie(ht, {
          name: "header-prev-button",
          disabled: !S(o)
        }, {
          default: Ye(() => [
            ie(on, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, Mk)) : Be("", !0),
      S(h).title ? (V(), oe("div", Ok, [
        ie(ht, { name: "header-title-wrapper" }, {
          default: Ye(() => [
            jr((V(), oe("button", kk, [
              ie(ht, {
                name: "header-title",
                title: e.page.title
              }, {
                default: Ye(() => [
                  ne("span", null, Le(e.page.title), 1)
                ]),
                _: 1
              }, 8, ["title"])
            ])), [
              [S(Sf), S(c)]
            ])
          ]),
          _: 1
        })
      ])) : Be("", !0),
      S(h).next ? (V(), oe("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !S(s),
        onClick: D[2] || (D[2] = //@ts-ignore
        (...b) => S(i) && S(i)(...b)),
        onKeydown: D[3] || (D[3] = Fi(
          //@ts-ignore
          (...b) => S(i) && S(i)(...b),
          ["space", "enter"]
        ))
      }, [
        ie(ht, {
          name: "header-next-button",
          disabled: !S(s)
        }, {
          default: Ye(() => [
            ie(on, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, Ik)) : Be("", !0)
    ], 6));
  }
}), Uf = Symbol("__vc_page_context__");
function Ek(e) {
  const { locale: t, getDateAddress: r, canMove: n } = Rr();
  function o(i, l) {
    const { month: c, year: u } = r(/* @__PURE__ */ new Date());
    return Of().map((f, d) => {
      const h = d + 1;
      return {
        month: h,
        year: i,
        id: bM(h, i),
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
  const s = { page: e, getMonthItems: o, getYearItems: a };
  return ln(Uf, s), s;
}
function Hf() {
  const e = Gt(Uf);
  if (e)
    return e;
  throw new Error(
    "Page context missing. Please verify this component is nested within a valid context provider."
  );
}
const Sk = { class: "vc-nav-header" }, Tk = ["disabled"], Pk = ["disabled"], $k = { class: "vc-nav-items" }, Yk = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], Nk = /* @__PURE__ */ We({
  __name: "CalendarNav",
  setup(e) {
    const { masks: t, move: r } = Rr(), { page: n, getMonthItems: o, getYearItems: a } = Hf(), s = be(!0), i = 12, l = be(n.value.year), c = be(d(n.value.year)), u = be(null);
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
    function w(Q) {
      return i * (Q + 1) - 1;
    }
    function D() {
      te.value && (s.value && H(), I());
    }
    function b() {
      le.value && (s.value && F(), y());
    }
    function H() {
      l.value--;
    }
    function F() {
      l.value++;
    }
    function I() {
      c.value--;
    }
    function y() {
      c.value++;
    }
    const L = x(
      () => o(l.value, t.value.navMonths).map((Q) => ({
        ...Q,
        click: () => r(
          { month: Q.month, year: Q.year },
          { position: n.value.position }
        )
      }))
    ), P = x(
      () => o(l.value - 1, t.value.navMonths)
    ), k = x(
      () => P.value.some((Q) => !Q.isDisabled)
    ), z = x(
      () => o(l.value + 1, t.value.navMonths)
    ), j = x(
      () => z.value.some((Q) => !Q.isDisabled)
    ), q = x(
      () => a(
        m(c.value),
        w(c.value)
      ).map((Q) => ({
        ...Q,
        click: () => {
          l.value = Q.year, s.value = !0, f();
        }
      }))
    ), A = x(
      () => a(
        m(c.value - 1),
        w(c.value - 1)
      )
    ), U = x(
      () => A.value.some((Q) => !Q.isDisabled)
    ), se = x(
      () => a(
        m(c.value + 1),
        w(c.value + 1)
      )
    ), K = x(
      () => se.value.some((Q) => !Q.isDisabled)
    ), ee = x(
      () => s.value ? L.value : q.value
    ), te = x(
      () => s.value ? k.value : U.value
    ), le = x(
      () => s.value ? j.value : K.value
    ), ge = x(() => sf(q.value.map((Q) => Q.year))), Y = x(() => Wr(q.value.map((Q) => Q.year))), de = x(() => s.value ? l.value : `${ge.value} - ${Y.value}`);
    return Wc(() => {
      l.value = n.value.year, f();
    }), je(
      () => l.value,
      (Q) => c.value = d(Q)
    ), Pr(() => f()), (Q, Ie) => (V(), oe("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: u
    }, [
      ne("div", Sk, [
        ne("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !S(te),
          onClick: D,
          onKeydown: Ie[0] || (Ie[0] = (me) => S(uo)(me, D))
        }, [
          ie(ht, {
            name: "nav-prev-button",
            move: D,
            disabled: !S(te)
          }, {
            default: Ye(() => [
              ie(on, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 40, Tk),
        ne("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: h,
          onKeydown: Ie[1] || (Ie[1] = (me) => S(uo)(me, h))
        }, Le(S(de)), 33),
        ne("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !S(le),
          onClick: b,
          onKeydown: Ie[2] || (Ie[2] = (me) => S(uo)(me, b))
        }, [
          ie(ht, {
            name: "nav-next-button",
            move: b,
            disabled: !S(le)
          }, {
            default: Ye(() => [
              ie(on, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 40, Pk)
      ]),
      ne("div", $k, [
        (V(!0), oe(we, null, mt(S(ee), (me) => (V(), oe("button", {
          key: me.label,
          type: "button",
          "data-id": me.id,
          "aria-label": me.ariaLabel,
          class: xe(["vc-nav-item vc-focus", [
            me.isActive ? "is-active" : me.isCurrent ? "is-current" : ""
          ]]),
          disabled: me.isDisabled,
          onClick: me.click,
          onKeydown: (Se) => S(uo)(Se, me.click)
        }, Le(me.label), 43, Yk))), 128))
      ])
    ], 512));
  }
}), jf = /* @__PURE__ */ We({
  __name: "CalendarPageProvider",
  props: {
    page: null
  },
  setup(e) {
    return Ek(go(e, "page")), (r, n) => Vn(r.$slots, "default");
  }
}), Rk = /* @__PURE__ */ We({
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: r, displayMode: n } = Rr();
    return (o, a) => (V(), Ve(ri, {
      id: S(t),
      class: xe(["vc-nav-popover-container", `vc-${S(r)}`, `vc-${S(n)}`])
    }, {
      default: Ye(({ data: s }) => [
        ie(jf, {
          page: s.page
        }, {
          default: Ye(() => [
            ie(ht, { name: "nav" }, {
              default: Ye(() => [
                ie(Nk)
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
}), Lk = /* @__PURE__ */ We({
  directives: { popover: Sf },
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
    } = Rr(), f = x(() => e.day), d = x(() => n.value.getCells(f.value)), h = x(
      () => d.value.map((K) => K.data)
    ), m = x(() => ({
      ...f.value,
      attributes: h.value,
      attributeCells: d.value
    }));
    function w({ data: K }, { popovers: ee }) {
      const { key: te, customData: le, popover: ge } = K;
      if (!ge)
        return;
      const Y = Sl(
        {
          key: te,
          customData: le,
          attribute: K
        },
        { ...ge },
        {
          visibility: ge.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !ge.label
        }
      );
      ee.splice(0, 0, Y);
    }
    const D = x(() => {
      const K = {
        ...r.value.prepareRender({}),
        popovers: []
      };
      return d.value.forEach((ee) => {
        r.value.render(ee, K), w(ee, K);
      }), K;
    }), b = x(() => D.value.highlights), H = x(() => !!Ht(b.value)), F = x(() => D.value.content), I = x(() => D.value.dots), y = x(() => !!Ht(I.value)), L = x(() => D.value.bars), P = x(() => !!Ht(L.value)), k = x(() => D.value.popovers), z = x(
      () => k.value.map((K) => K.attribute)
    ), j = Lf("day-content"), q = x(() => [
      "vc-day",
      ...f.value.classes,
      { "vc-day-box-center-center": !j },
      { "is-not-in-month": !e.day.inMonth }
    ]), A = x(() => {
      let K;
      f.value.isFocusable ? K = "0" : K = "-1";
      const ee = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": f.value.isDisabled },
        Cr(Wr(b.value), "contentClass"),
        Cr(Wr(F.value), "class") || ""
      ], te = {
        ...Cr(Wr(b.value), "contentStyle"),
        ...Cr(Wr(F.value), "style")
      };
      return {
        class: ee,
        style: te,
        tabindex: K,
        "aria-label": f.value.ariaLabel,
        "aria-disabled": !!f.value.isDisabled,
        role: "button"
      };
    }), U = x(() => ({
      click(K) {
        a(m.value, K);
      },
      mouseenter(K) {
        s(m.value, K);
      },
      mouseleave(K) {
        i(m.value, K);
      },
      focusin(K) {
        l(m.value, K);
      },
      focusout(K) {
        c(m.value, K);
      },
      keydown(K) {
        u(m.value, K);
      }
    })), se = x(() => Ht(k.value) ? Sl(
      {
        id: o.value,
        data: { day: f, attributes: z.value }
      },
      ...k.value
    ) : null);
    return {
      attributes: h,
      attributeCells: d,
      bars: L,
      dayClasses: q,
      dayContentProps: A,
      dayContentEvents: U,
      dayPopover: se,
      glyphs: D,
      dots: I,
      hasDots: y,
      hasBars: P,
      highlights: b,
      hasHighlights: H,
      locale: t,
      popovers: k
    };
  }
}), Fk = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, Bk = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, Uk = { class: "vc-dots" }, Hk = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, jk = { class: "vc-bars" };
function Wk(e, t, r, n, o, a) {
  const s = St("CalendarSlot"), i = rv("popover");
  return V(), oe("div", {
    class: xe(e.dayClasses)
  }, [
    e.hasHighlights ? (V(), oe("div", Fk, [
      (V(!0), oe(we, null, mt(e.highlights, ({ key: l, wrapperClass: c, class: u, style: f }) => (V(), oe("div", {
        key: l,
        class: xe(c)
      }, [
        ne("div", {
          class: xe(u),
          style: jt(f)
        }, null, 6)
      ], 2))), 128))
    ])) : Be("", !0),
    ie(s, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: Ye(() => [
        jr((V(), oe("div", $r(e.dayContentProps, _v(e.dayContentEvents, !0)), [
          Jo(Le(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (V(), oe("div", Bk, [
      ne("div", Uk, [
        (V(!0), oe(we, null, mt(e.dots, ({ key: l, class: c, style: u }) => (V(), oe("span", {
          key: l,
          class: xe(c),
          style: jt(u)
        }, null, 6))), 128))
      ])
    ])) : Be("", !0),
    e.hasBars ? (V(), oe("div", Hk, [
      ne("div", jk, [
        (V(!0), oe(we, null, mt(e.bars, ({ key: l, class: c, style: u }) => (V(), oe("span", {
          key: l,
          class: xe(c),
          style: jt(u)
        }, null, 6))), 128))
      ])
    ])) : Be("", !0)
  ], 2);
}
const zk = /* @__PURE__ */ hr(Lk, [["render", Wk]]), Gk = { class: "vc-weekdays" }, Vk = ["onClick"], Kk = {
  inheritAttrs: !1
}, Qk = /* @__PURE__ */ We({
  ...Kk,
  __name: "CalendarPage",
  setup(e) {
    const { page: t } = Hf(), { onWeeknumberClick: r } = Rr();
    return (n, o) => (V(), oe("div", {
      class: xe([
        "vc-pane",
        `row-${S(t).row}`,
        `row-from-end-${S(t).rowFromEnd}`,
        `column-${S(t).column}`,
        `column-from-end-${S(t).columnFromEnd}`
      ]),
      ref: "pane"
    }, [
      ie(Bf, {
        page: S(t),
        "is-lg": "",
        "hide-arrows": ""
      }, null, 8, ["page"]),
      ne("div", {
        class: xe(["vc-weeks", {
          [`vc-show-weeknumbers-${S(t).weeknumberPosition}`]: S(t).weeknumberPosition
        }])
      }, [
        ne("div", Gk, [
          (V(!0), oe(we, null, mt(S(t).weekdays, ({ weekday: a, label: s }, i) => (V(), oe("div", {
            key: i,
            class: xe(`vc-weekday vc-weekday-${a}`)
          }, Le(s), 3))), 128))
        ]),
        (V(!0), oe(we, null, mt(S(t).viewWeeks, (a) => (V(), oe("div", {
          key: `weeknumber-${a.weeknumber}`,
          class: "vc-week"
        }, [
          S(t).weeknumberPosition ? (V(), oe("div", {
            key: 0,
            class: xe(["vc-weeknumber", `is-${S(t).weeknumberPosition}`])
          }, [
            ne("span", {
              class: xe(["vc-weeknumber-content"]),
              onClick: (s) => S(r)(a, s)
            }, Le(a.weeknumberDisplay), 9, Vk)
          ], 2)) : Be("", !0),
          (V(!0), oe(we, null, mt(a.days, (s) => (V(), Ve(zk, {
            key: s.id,
            day: s
          }, null, 8, ["day"]))), 128))
        ]))), 128))
      ], 2)
    ], 2));
  }
}), qk = /* @__PURE__ */ We({
  components: {
    CalendarHeader: Bf,
    CalendarPage: Qk,
    CalendarNavPopover: Rk,
    CalendarDayPopover: ek,
    CalendarPageProvider: jf,
    CalendarSlot: ht
  },
  props: HO,
  emit: jO,
  setup(e, { emit: t, slots: r }) {
    return WO(e, { emit: t, slots: r });
  }
}), Zk = { class: "vc-pane-header-wrapper" };
function Jk(e, t, r, n, o, a) {
  const s = St("CalendarHeader"), i = St("CalendarPage"), l = St("CalendarSlot"), c = St("CalendarPageProvider"), u = St("CalendarDayPopover"), f = St("CalendarNavPopover");
  return V(), oe(we, null, [
    ne("div", $r({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = Ip(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      ne("div", {
        class: xe(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        ne("div", Zk, [
          e.firstPage ? (V(), Ve(s, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : Be("", !0)
        ]),
        ie(ta, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: Ye(() => [
            (V(), oe("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: jt({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (V(!0), oe(we, null, mt(e.pages, (d) => (V(), Ve(c, {
                key: d.id,
                page: d
              }, {
                default: Ye(() => [
                  ie(l, {
                    name: "page",
                    page: d
                  }, {
                    default: Ye(() => [
                      ie(i)
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
        ie(l, { name: "footer" })
      ], 2)
    ], 16),
    ie(u),
    ie(f)
  ], 64);
}
const Xk = /* @__PURE__ */ hr(qk, [["render", Jk]]), Wf = Symbol("__vc_date_picker_context__"), eI = {
  ...$f,
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
}, tI = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function rI(e, { emit: t, slots: r }) {
  Rf(r, { footer: "dp-footer" });
  const n = Yf(e), { locale: o, masks: a, disabledAttribute: s } = n, i = be(!1), l = be(Symbol()), c = be(null), u = be(null), f = be(["", ""]), d = be(null), h = be(null);
  let m, w, D = !0;
  const b = x(() => e.isRange || e.modelModifiers.range === !0), H = x(
    () => b.value && c.value != null ? c.value.start : null
  ), F = x(
    () => b.value && c.value != null ? c.value.end : null
  ), I = x(() => e.mode.toLowerCase() === "date"), y = x(
    () => e.mode.toLowerCase() === "datetime"
  ), L = x(() => e.mode.toLowerCase() === "time"), P = x(() => !!u.value), k = x(() => {
    let p = "date";
    e.modelModifiers.number && (p = "number"), e.modelModifiers.string && (p = "string");
    const O = a.value.modelValue || "iso";
    return Ie({ type: p, mask: O });
  }), z = x(
    () => $(u.value ?? c.value)
  ), j = x(() => L.value ? e.is24hr ? a.value.inputTime24hr : a.value.inputTime : y.value ? e.is24hr ? a.value.inputDateTime24hr : a.value.inputDateTime : a.value.input), q = x(() => /[Hh]/g.test(j.value)), A = x(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(j.value)
  ), U = x(() => {
    if (q.value && A.value)
      return "dateTime";
    if (A.value)
      return "date";
    if (q.value)
      return "time";
  }), se = x(() => {
    var p;
    const O = ((p = d.value) == null ? void 0 : p.$el.previousElementSibling) ?? void 0;
    return Wn({}, e.popover, fr("datePicker.popover"), {
      target: O
    });
  }), K = x(
    () => Ef({
      ...se.value,
      id: l.value
    })
  ), ee = x(() => b.value ? {
    start: f.value[0],
    end: f.value[1]
  } : f.value[0]), te = x(() => {
    const p = ["start", "end"].map((O) => ({
      input: C(O),
      change: N(O),
      keyup: B,
      ...e.popover && K.value
    }));
    return b.value ? {
      start: p[0],
      end: p[1]
    } : p[0];
  }), le = x(() => {
    if (!Me(c.value))
      return null;
    const p = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: c.value,
      pinPage: !0
    }, { dot: O, bar: G, highlight: fe, content: Ee } = p;
    return !O && !G && !fe && !Ee && (p.highlight = !0), p;
  }), ge = x(() => {
    if (!b.value || !Me(u.value))
      return null;
    const p = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: u.value
    }, { dot: O, bar: G, highlight: fe, content: Ee } = p;
    return !O && !G && !fe && !Ee && (p.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), p;
  }), Y = x(() => {
    const p = wt(e.attributes) ? [...e.attributes] : [];
    return ge.value ? p.unshift(ge.value) : le.value && p.unshift(le.value), p;
  }), de = x(() => Ie(
    e.rules === "auto" ? Q() : e.rules ?? {}
  ));
  function Q() {
    const p = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, O = I.value ? 0 : e.timeAccuracy;
    return [0, 1].map((G) => {
      switch (O) {
        case 0:
          return {
            hours: p.hr[G],
            minutes: p.min[G],
            seconds: p.sec[G],
            milliseconds: p.ms[G]
          };
        case 1:
          return {
            minutes: p.min[G],
            seconds: p.sec[G],
            milliseconds: p.ms[G]
          };
        case 3:
          return { milliseconds: p.ms[G] };
        case 4:
          return {};
        default:
          return { seconds: p.sec[G], milliseconds: p.ms[G] };
      }
    });
  }
  function Ie(p) {
    return wt(p) ? p.length === 1 ? [p[0], p[0]] : p : [p, p];
  }
  function me(p) {
    return Ie(p).map(
      (O, G) => ({
        ...O,
        rules: de.value[G]
      })
    );
  }
  function Se(p) {
    return p == null ? !1 : Ct(p) ? !isNaN(p) : Qr(p) ? !isNaN(p.getTime()) : $t(p) ? p !== "" : Js(p);
  }
  function De(p) {
    return Qt(p) && "start" in p && "end" in p && Se(p.start ?? null) && Se(p.end ?? null);
  }
  function Me(p) {
    return De(p) || Se(p);
  }
  function Ne(p, O) {
    if (p == null && O == null)
      return !0;
    if (p == null || O == null)
      return !1;
    const G = Qr(p), fe = Qr(O);
    return G && fe ? p.getTime() === O.getTime() : G || fe ? !1 : Ne(p.start, O.start) && Ne(p.end, O.end);
  }
  function Re(p) {
    return !Me(p) || !s.value ? !1 : s.value.intersectsRange(o.value.range(p));
  }
  function lt(p, O, G, fe) {
    if (!Me(p))
      return null;
    if (De(p)) {
      const Ee = o.value.toDate(p.start, {
        ...O[0],
        fillDate: H.value ?? void 0,
        patch: G
      }), Xe = o.value.toDate(p.end, {
        ...O[1],
        fillDate: F.value ?? void 0,
        patch: G
      });
      return gr({ start: Ee, end: Xe }, fe);
    }
    return o.value.toDateOrNull(p, {
      ...O[0],
      fillDate: c.value,
      patch: G
    });
  }
  function Ze(p, O) {
    return De(p) ? {
      start: o.value.fromDate(p.start, O[0]),
      end: o.value.fromDate(p.end, O[1])
    } : b.value ? null : o.value.fromDate(p, O[0]);
  }
  function v(p, O = {}) {
    return clearTimeout(m), new Promise((G) => {
      const { debounce: fe = 0, ...Ee } = O;
      fe > 0 ? m = window.setTimeout(() => {
        G(g(p, Ee));
      }, fe) : G(g(p, Ee));
    });
  }
  function g(p, {
    config: O = k.value,
    patch: G = "dateTime",
    clearIfEqual: fe = !1,
    formatInput: Ee = !0,
    hidePopover: Xe = !1,
    dragging: ct = P.value,
    targetPriority: Fr,
    moveToValue: Br = !1
  } = {}) {
    const ua = me(O);
    let nt = lt(
      p,
      ua,
      G,
      Fr
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
    const Jn = ct ? u : c, mn = !Ne(Jn.value, nt);
    Jn.value = nt, ct || (u.value = null);
    const yn = Ze(
      nt,
      k.value
    );
    return mn && (D = !1, t(ct ? "drag" : "update:modelValue", yn), xr(() => D = !0)), Xe && !ct && ze(), Ee && _(), Br && xr(() => He(Fr ?? "start")), yn;
  }
  function _() {
    xr(() => {
      const p = me({
        type: "string",
        mask: j.value
      }), O = Ze(
        u.value ?? c.value,
        p
      );
      b.value ? f.value = [O && O.start, O && O.end] : f.value = [O, ""];
    });
  }
  function M(p, O, G) {
    f.value.splice(O === "start" ? 0 : 1, 1, p);
    const fe = b.value ? {
      start: f.value[0],
      end: f.value[1] || f.value[0]
    } : p, Ee = {
      type: "string",
      mask: j.value
    };
    v(fe, {
      ...G,
      config: Ee,
      patch: U.value,
      targetPriority: O,
      moveToValue: !0
    });
  }
  function C(p) {
    return (O) => {
      e.updateOnInput && M(O.currentTarget.value, p, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function N(p) {
    return (O) => {
      M(O.currentTarget.value, p, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function B(p) {
    p.key === "Escape" && v(c.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function $(p) {
    return b.value ? [
      p && p.start ? o.value.getDateParts(p.start) : null,
      p && p.end ? o.value.getDateParts(p.end) : null
    ] : [p ? o.value.getDateParts(p) : null];
  }
  function R() {
    u.value = null, _();
  }
  function E(p) {
    t("popover-will-show", p);
  }
  function W(p) {
    t("popover-did-show", p);
  }
  function J(p) {
    R(), t("popover-will-hide", p);
  }
  function Z(p) {
    t("popover-did-hide", p);
  }
  function re(p) {
    const O = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (b.value) {
      const G = !P.value;
      G ? w = { start: p.startDate, end: p.endDate } : w != null && (w.end = p.date), v(w, {
        ...O,
        dragging: G
      });
    } else
      v(p.date, {
        ...O,
        clearIfEqual: !e.isRequired
      });
  }
  function ce(p, O) {
    re(p), t("dayclick", p, O);
  }
  function ve(p, O) {
    switch (O.key) {
      case " ":
      case "Enter": {
        re(p), O.preventDefault();
        break;
      }
      case "Escape":
        ze();
    }
    t("daykeydown", p, O);
  }
  function ye(p, O) {
    !P.value || w == null || (w.end = p.date, v(gr(w), {
      patch: "date",
      formatInput: !0
    }));
  }
  function Te(p = {}) {
    ns({
      ...se.value,
      ...p,
      isInteractive: !0,
      id: l.value
    });
  }
  function ze(p = {}) {
    zn({
      hideDelay: 10,
      force: !0,
      ...se.value,
      ...p,
      id: l.value
    });
  }
  function kt(p) {
    If({
      ...se.value,
      ...p,
      isInteractive: !0,
      id: l.value
    });
  }
  function gr(p, O) {
    const { start: G, end: fe } = p;
    if (G > fe)
      switch (O) {
        case "start":
          return { start: G, end: G };
        case "end":
          return { start: fe, end: fe };
        default:
          return { start: fe, end: G };
      }
    return { start: G, end: fe };
  }
  async function It(p, O = {}) {
    return h.value == null ? !1 : h.value.move(p, O);
  }
  async function Lr(p, O = {}) {
    return h.value == null ? !1 : h.value.moveBy(p, O);
  }
  async function He(p, O = {}) {
    const G = c.value;
    if (h.value == null || !Me(G))
      return !1;
    const fe = p !== "end", Ee = fe ? 1 : -1, Xe = De(G) ? fe ? G.start : G.end : G, ct = vf(Xe, "monthly", o.value);
    return h.value.move(ct, { position: Ee, ...O });
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
    () => b.value,
    () => {
      g(null, { formatInput: !0 });
    }
  ), je(
    () => j.value,
    () => _()
  ), je(
    () => e.modelValue,
    (p) => {
      D && g(p, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), je(
    () => de.value,
    () => {
      Qt(e.rules) && g(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), je(
    () => e.timezone,
    () => {
      g(c.value, { formatInput: !0 });
    }
  );
  const Je = Ie(k.value);
  c.value = lt(
    e.modelValue ?? null,
    Je,
    "dateTime"
  ), Pr(() => {
    g(e.modelValue, {
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
    isRange: b,
    isTimeMode: L,
    isDateTimeMode: y,
    is24hr: go(e, "is24hr"),
    hideTimeHeader: go(e, "hideTimeHeader"),
    timeAccuracy: go(e, "timeAccuracy"),
    isDragging: P,
    inputValue: ee,
    inputEvents: te,
    dateParts: z,
    attributes: Y,
    rules: de,
    move: It,
    moveBy: Lr,
    moveToValue: He,
    updateValue: v,
    showPopover: Te,
    hidePopover: ze,
    togglePopover: kt,
    onDayClick: ce,
    onDayKeydown: ve,
    onDayMouseEnter: ye,
    onPopoverBeforeShow: E,
    onPopoverAfterShow: W,
    onPopoverBeforeHide: J,
    onPopoverAfterHide: Z
  };
  return ln(Wf, T), T;
}
function ni() {
  const e = Gt(Wf);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const nI = [
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
], oI = [
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
function aI(e) {
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
  function f(A) {
    A = Object.assign(h.value, A);
    let U = null;
    if (n.value) {
      const se = d.value ? A : a.value[0], K = d.value ? a.value[1] : A;
      U = { start: se, end: K };
    } else
      U = A;
    u(U, {
      patch: "time",
      targetPriority: d.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const d = x(() => e.position === 0), h = x(
    () => a.value[e.position] || { isValid: !1 }
  ), m = x(() => Js(h.value)), w = x(() => !!h.value.isValid), D = x(() => !l.value && w.value), b = x(() => {
    if (!m.value)
      return null;
    let A = r.value.toDate(h.value);
    return h.value.hours === 24 && (A = new Date(A.getTime() - 1)), A;
  }), H = x({
    get() {
      return h.value.hours;
    },
    set(A) {
      f({ hours: A });
    }
  }), F = x({
    get() {
      return h.value.minutes;
    },
    set(A) {
      f({ minutes: A });
    }
  }), I = x({
    get() {
      return h.value.seconds;
    },
    set(A) {
      f({ seconds: A });
    }
  }), y = x({
    get() {
      return h.value.milliseconds;
    },
    set(A) {
      f({ milliseconds: A });
    }
  }), L = x({
    get() {
      return h.value.hours < 12;
    },
    set(A) {
      A = String(A).toLowerCase() == "true";
      let U = H.value;
      A && U >= 12 ? U -= 12 : !A && U < 12 && (U += 12), f({ hours: U });
    }
  }), P = x(
    () => AO(h.value, s.value[e.position])
  ), k = x(() => nI.filter(
    (A) => P.value.hours.some((U) => U.value === A.value)
  )), z = x(() => oI.filter(
    (A) => P.value.hours.some((U) => U.value === A.value)
  )), j = x(() => i.value ? P.value.hours : L.value ? k.value : z.value), q = x(() => {
    const A = [];
    return Ht(k.value) && A.push({ value: !0, label: "AM" }), Ht(z.value) && A.push({ value: !1, label: "PM" }), A;
  });
  return {
    ...t,
    showHeader: D,
    timeAccuracy: c,
    parts: h,
    isValid: w,
    date: b,
    hours: H,
    minutes: F,
    seconds: I,
    milliseconds: y,
    options: P,
    hourOptions: j,
    isAM: L,
    isAMOptions: q,
    is24hr: i
  };
}
const sI = ["value"], iI = ["value", "disabled"], lI = {
  key: 1,
  class: "vc-base-sizer",
  "aria-hidden": "true"
}, cI = {
  inheritAttrs: !1
}, xn = /* @__PURE__ */ We({
  ...cI,
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
    const t = e, r = x(() => {
      const n = t.options.find((o) => o.value === t.modelValue);
      return n == null ? void 0 : n.label;
    });
    return (n, o) => (V(), oe("div", {
      class: xe(["vc-base-select", {
        "vc-fit-content": e.fitContent,
        "vc-has-icon": e.showIcon
      }])
    }, [
      ne("select", $r(n.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft
        }],
        onChange: o[0] || (o[0] = (a) => n.$emit("update:modelValue", a.target.value))
      }), [
        (V(!0), oe(we, null, mt(e.options, (a) => (V(), oe("option", {
          key: a.value,
          value: a.value,
          disabled: a.disabled
        }, Le(a.label), 9, iI))), 128))
      ], 16, sI),
      e.showIcon ? (V(), Ve(on, {
        key: 0,
        name: "ChevronDown",
        size: "18"
      })) : Be("", !0),
      e.fitContent ? (V(), oe("div", lI, Le(S(r)), 1)) : Be("", !0)
    ], 2));
  }
}), uI = {
  key: 0,
  class: "vc-time-header"
}, fI = { class: "vc-time-weekday" }, dI = { class: "vc-time-month" }, vI = { class: "vc-time-day" }, pI = { class: "vc-time-year" }, hI = { class: "vc-time-select-group" }, gI = /* @__PURE__ */ ne("span", { class: "vc-time-colon" }, ":", -1), mI = /* @__PURE__ */ ne("span", { class: "vc-time-colon" }, ":", -1), yI = /* @__PURE__ */ ne("span", { class: "vc-time-decimal" }, ".", -1), sc = /* @__PURE__ */ We({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const n = aI(e);
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
      isAM: m,
      isAMOptions: w,
      is24hr: D,
      showHeader: b,
      timeAccuracy: H
    } = n;
    return (F, I) => (V(), oe("div", {
      class: xe(["vc-time-picker", [{ "vc-invalid": !S(a), "vc-attached": !S(h) }]])
    }, [
      ie(ht, { name: "time-header" }, {
        default: Ye(() => [
          S(b) && S(s) ? (V(), oe("div", uI, [
            ne("span", fI, Le(S(o).formatDate(S(s), "WWW")), 1),
            ne("span", dI, Le(S(o).formatDate(S(s), "MMM")), 1),
            ne("span", vI, Le(S(o).formatDate(S(s), "D")), 1),
            ne("span", pI, Le(S(o).formatDate(S(s), "YYYY")), 1)
          ])) : Be("", !0)
        ]),
        _: 1
      }),
      ne("div", hI, [
        ie(on, {
          name: "Clock",
          size: "17"
        }),
        ie(xn, {
          modelValue: S(i),
          "onUpdate:modelValue": I[0] || (I[0] = (y) => Pe(i) ? i.value = y : null),
          modelModifiers: { number: !0 },
          options: S(d),
          class: "vc-time-select-hours",
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        S(H) > 1 ? (V(), oe(we, { key: 0 }, [
          gI,
          ie(xn, {
            modelValue: S(l),
            "onUpdate:modelValue": I[1] || (I[1] = (y) => Pe(l) ? l.value = y : null),
            modelModifiers: { number: !0 },
            options: S(f).minutes,
            class: "vc-time-select-minutes",
            "align-left": S(H) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Be("", !0),
        S(H) > 2 ? (V(), oe(we, { key: 1 }, [
          mI,
          ie(xn, {
            modelValue: S(c),
            "onUpdate:modelValue": I[2] || (I[2] = (y) => Pe(c) ? c.value = y : null),
            modelModifiers: { number: !0 },
            options: S(f).seconds,
            class: "vc-time-select-seconds",
            "align-left": S(H) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Be("", !0),
        S(H) > 3 ? (V(), oe(we, { key: 2 }, [
          yI,
          ie(xn, {
            modelValue: S(u),
            "onUpdate:modelValue": I[3] || (I[3] = (y) => Pe(u) ? u.value = y : null),
            modelModifiers: { number: !0 },
            options: S(f).milliseconds,
            class: "vc-time-select-milliseconds",
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : Be("", !0),
        S(D) ? Be("", !0) : (V(), Ve(xn, {
          key: 3,
          modelValue: S(m),
          "onUpdate:modelValue": I[4] || (I[4] = (y) => Pe(m) ? m.value = y : null),
          options: S(w)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), zf = /* @__PURE__ */ We({
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
    return (d, h) => S(s) ? (V(), oe("div", {
      key: 0,
      class: xe(`vc-container vc-bordered vc-${S(n)} vc-${S(o)}`)
    }, [
      (V(!0), oe(we, null, mt(S(f), (m) => (V(), Ve(sc, {
        key: m,
        position: m
      }, null, 8, ["position"]))), 128))
    ], 2)) : (V(), Ve(Xk, {
      key: 1,
      attributes: S(t),
      ref_key: "calendarRef",
      ref: r,
      onDayclick: S(l),
      onDaymouseenter: S(c),
      onDaykeydown: S(u)
    }, {
      footer: Ye(() => [
        S(a) ? (V(!0), oe(we, { key: 0 }, mt(S(f), (m) => (V(), Ve(sc, {
          key: m,
          position: m
        }, null, 8, ["position"]))), 128)) : Be("", !0),
        ie(ht, { name: "dp-footer" })
      ]),
      _: 1
    }, 8, ["attributes", "onDayclick", "onDaymouseenter", "onDaykeydown"]));
  }
}), bI = {
  inheritAttrs: !1
}, wI = /* @__PURE__ */ We({
  ...bI,
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
    return (c, u) => (V(), Ve(ri, {
      id: S(t),
      placement: "bottom-start",
      class: xe(`vc-date-picker-content vc-${S(r)} vc-${S(n)}`),
      ref_key: "popoverRef",
      ref: o,
      onBeforeShow: S(a),
      onAfterShow: S(s),
      onBeforeHide: S(i),
      onAfterHide: S(l)
    }, {
      default: Ye(() => [
        ie(zf, In(Io(c.$attrs)), null, 16)
      ]),
      _: 1
    }, 8, ["id", "class", "onBeforeShow", "onAfterShow", "onBeforeHide", "onAfterHide"]));
  }
}), _I = /* @__PURE__ */ We({
  inheritAttrs: !1,
  emits: tI,
  props: eI,
  components: { DatePickerBase: zf, DatePickerPopover: wI },
  setup(e, t) {
    const r = rI(e, t), n = sn(cf(r, "calendarRef", "popoverRef"));
    return { ...r, slotCtx: n };
  }
});
function DI(e, t, r, n, o, a) {
  const s = St("DatePickerPopover"), i = St("DatePickerBase");
  return e.$slots.default ? (V(), oe(we, { key: 0 }, [
    Vn(e.$slots, "default", In(Io(e.slotCtx))),
    ie(s, In(Io(e.$attrs)), null, 16)
  ], 64)) : (V(), Ve(i, In($r({ key: 1 }, e.$attrs)), null, 16));
}
const AI = /* @__PURE__ */ hr(_I, [["render", DI]]);
function os(e) {
  "@babel/helpers - typeof";
  return os = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, os(e);
}
function xI(e) {
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
var CI = 864e5;
function MI(e, t) {
  Zn(2, arguments);
  var r = lc(e), n = lc(t), o = r.getTime() - ic(r), a = n.getTime() - ic(n);
  return Math.round((o - a) / CI);
}
var Gf = 6e4, Vf = 36e5;
function cc(e, t) {
  var r = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
  return r < 0 ? -1 : r > 0 ? 1 : r;
}
function OI(e, t) {
  Zn(2, arguments);
  var r = as(e), n = as(t), o = cc(r, n), a = Math.abs(MI(r, n));
  r.setDate(r.getDate() - o * a);
  var s = +(cc(r, n) === -o), i = o * (a - s);
  return i === 0 ? 0 : i;
}
function fo(e, t) {
  var r;
  Zn(1, arguments);
  var n = xI((r = t == null ? void 0 : t.additionalDigits) !== null && r !== void 0 ? r : 2);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var o = SI(e), a;
  if (o.date) {
    var s = TI(o.date, n);
    a = PI(s.restDateString, s.year);
  }
  if (!a || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var i = a.getTime(), l = 0, c;
  if (o.time && (l = $I(o.time), isNaN(l)))
    return /* @__PURE__ */ new Date(NaN);
  if (o.timezone) {
    if (c = YI(o.timezone), isNaN(c))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var u = new Date(i + l), f = /* @__PURE__ */ new Date(0);
    return f.setFullYear(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()), f.setHours(u.getUTCHours(), u.getUTCMinutes(), u.getUTCSeconds(), u.getUTCMilliseconds()), f;
  }
  return new Date(i + l + c);
}
var vo = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, kI = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, II = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, EI = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function SI(e) {
  var t = {}, r = e.split(vo.dateTimeDelimiter), n;
  if (r.length > 2)
    return t;
  if (/:/.test(r[0]) ? n = r[0] : (t.date = r[0], n = r[1], vo.timeZoneDelimiter.test(t.date) && (t.date = e.split(vo.timeZoneDelimiter)[0], n = e.substr(t.date.length, e.length))), n) {
    var o = vo.timezone.exec(n);
    o ? (t.time = n.replace(o[1], ""), t.timezone = o[1]) : t.time = n;
  }
  return t;
}
function TI(e, t) {
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
function PI(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var r = e.match(kI);
  if (!r)
    return /* @__PURE__ */ new Date(NaN);
  var n = !!r[4], o = Cn(r[1]), a = Cn(r[2]) - 1, s = Cn(r[3]), i = Cn(r[4]), l = Cn(r[5]) - 1;
  if (n)
    return BI(t, i, l) ? NI(t, i, l) : /* @__PURE__ */ new Date(NaN);
  var c = /* @__PURE__ */ new Date(0);
  return !LI(t, a, s) || !FI(t, o) ? /* @__PURE__ */ new Date(NaN) : (c.setUTCFullYear(t, a, Math.max(o, s)), c);
}
function Cn(e) {
  return e ? parseInt(e) : 1;
}
function $I(e) {
  var t = e.match(II);
  if (!t)
    return NaN;
  var r = Ea(t[1]), n = Ea(t[2]), o = Ea(t[3]);
  return UI(r, n, o) ? r * Vf + n * Gf + o * 1e3 : NaN;
}
function Ea(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function YI(e) {
  if (e === "Z")
    return 0;
  var t = e.match(EI);
  if (!t)
    return 0;
  var r = t[1] === "+" ? -1 : 1, n = parseInt(t[2]), o = t[3] && parseInt(t[3]) || 0;
  return HI(n, o) ? r * (n * Vf + o * Gf) : NaN;
}
function NI(e, t, r) {
  var n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  var o = n.getUTCDay() || 7, a = (t - 1) * 7 + r + 1 - o;
  return n.setUTCDate(n.getUTCDate() + a), n;
}
var RI = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Kf(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function LI(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (RI[t] || (Kf(e) ? 29 : 28));
}
function FI(e, t) {
  return t >= 1 && t <= (Kf(e) ? 366 : 365);
}
function BI(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function UI(e, t, r) {
  return e === 24 ? t === 0 && r === 0 : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function HI(e, t) {
  return t >= 0 && t <= 59;
}
const jI = "data:image/png;base64,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", WI = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.flex{display:flex!important}.h-6{height:1.5rem!important}.w-full{width:100%!important}.max-w-sm{max-width:24rem!important}.cursor-pointer{cursor:pointer!important}.appearance-none{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important}.flex-col{flex-direction:column!important}.items-end{align-items:flex-end!important}.items-center{align-items:center!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.gap-2{gap:.5rem!important}.gap-4{gap:1rem!important}.break-words{overflow-wrap:break-word!important}.rounded-lg{border-radius:.5rem!important}.border-none{border-style:none!important}.bg-primary-blue\\/90{background-color:#0987c5e6!important}.bg-white{--tw-bg-opacity: 1 !important;background-color:rgb(255 255 255 / var(--tw-bg-opacity))!important}.object-contain{-o-object-fit:contain!important;object-fit:contain!important}.p-2{padding:.5rem!important}.p-4{padding:1rem!important}.text-center{text-align:center!important}.text-sm{font-size:.875rem!important;line-height:1.25rem!important}.text-xs{font-size:.75rem!important;line-height:1rem!important}.font-medium{font-weight:500!important}.font-normal{font-weight:400!important}.font-semibold{font-weight:600!important}.tabular-nums{--tw-numeric-spacing: tabular-nums !important;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)!important}.text-gray-700{--tw-text-opacity: 1 !important;color:rgb(55 65 81 / var(--tw-text-opacity))!important}.text-primary-braun{--tw-text-opacity: 1 !important;color:rgb(107 63 18 / var(--tw-text-opacity))!important}.text-red-500{--tw-text-opacity: 1 !important;color:rgb(239 68 68 / var(--tw-text-opacity))!important}.text-white{--tw-text-opacity: 1 !important;color:rgb(255 255 255 / var(--tw-text-opacity))!important}.no-underline{text-decoration-line:none!important}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1) !important;--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)!important}.duration-300{transition-duration:.3s!important}.hover\\:bg-primary-blue:hover{--tw-bg-opacity: 1 !important;background-color:rgb(9 135 197 / var(--tw-bg-opacity))!important}.hover\\:bg-secondary-blue\\/40:hover{background-color:#75bce166!important}.vc-popover-content-wrapper{--popover-horizontal-content-offset: 8px;--popover-vertical-content-offset: 10px;--popover-caret-horizontal-offset: 18px;--popover-caret-vertical-offset: 8px;position:absolute;display:block;outline:none;z-index:10}.vc-popover-content-wrapper:not(.is-interactive){pointer-events:none}.vc-popover-content{position:relative;color:var(--vc-popover-content-color);font-weight:var(--vc-font-medium);background-color:var(--vc-popover-content-bg);border:1px solid;border-color:var(--vc-popover-content-border);border-radius:var(--vc-rounded-lg);padding:4px;outline:none;z-index:10;box-shadow:var(--vc-shadow-lg)}.vc-popover-content.direction-bottom{margin-top:var(--popover-vertical-content-offset)}.vc-popover-content.direction-top{margin-bottom:var(--popover-vertical-content-offset)}.vc-popover-content.direction-left{margin-right:var(--popover-horizontal-content-offset)}.vc-popover-content.direction-right{margin-left:var(--popover-horizontal-content-offset)}.vc-popover-caret{content:"";position:absolute;display:block;width:12px;height:12px;border-top:inherit;border-left:inherit;background-color:inherit;z-index:-1}.vc-popover-caret.direction-bottom{top:0}.vc-popover-caret.direction-bottom.align-left{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-center{transform:translate(-50%) translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-right{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-top{top:100%}.vc-popover-caret.direction-top.align-left{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-center{transform:translate(-50%) translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-right{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-left{left:100%}.vc-popover-caret.direction-left.align-top{transform:translate(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-middle{transform:translateY(-50%) translate(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-bottom{transform:translate(-50%) rotate(135deg)}.vc-popover-caret.direction-right{left:0}.vc-popover-caret.direction-right.align-top{transform:translate(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-middle{transform:translateY(-50%) translate(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-bottom{transform:translate(-50%) rotate(-45deg)}.vc-popover-caret.align-left{left:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-center{left:50%}.vc-popover-caret.align-right{right:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-top{top:var(--popover-caret-vertical-offset)}.vc-popover-caret.align-middle{top:50%}.vc-popover-caret.align-bottom{bottom:var(--popover-caret-vertical-offset)}.vc-day-popover-row{display:flex;align-items:center;transition:var(--vc-day-content-transition)}.vc-day-popover-row-indicator{display:flex;justify-content:center;align-items:center;flex-grow:0;width:15px}.vc-day-popover-row-indicator span{transition:var(--vc-day-content-transition)}.vc-day-popover-row-label{display:flex;align-items:center;flex-wrap:none;flex-grow:1;width:-moz-max-content;width:max-content;margin-left:4px;margin-right:4px;font-size:var(--vc-text-xs);line-height:var(--vc-leading-normal)}.vc-day-popover-row-highlight{width:8px;height:5px;border-radius:3px}.vc-day-popover-row-bar{width:10px;height:3px}.vc-base-icon{display:inline-block;stroke:currentColor;stroke-width:2;fill:none}.vc-header{display:grid;grid-gap:4px;align-items:center;height:30px;margin-top:10px;padding-left:10px;padding-right:10px}.vc-header.is-lg{font-size:var(--vc-text-lg)}.vc-header.is-xl{font-size:var(--vc-text-xl)}.vc-header.is-2xl{font-size:var(--vc-text-2xl)}.vc-header .vc-title-wrapper{grid-row:1;grid-column:title}.vc-header .vc-prev{grid-row:1;grid-column:prev}.vc-header .vc-next{grid-row:1;grid-column:next}.vc-header .vc-title,.vc-header .vc-prev,.vc-header .vc-next{display:flex;align-items:center;border:0;border-radius:var(--vc-rounded);pointer-events:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.vc-header .vc-title{color:var(--vc-header-title-color);font-weight:var(--vc-font-semibold);white-space:nowrap;padding:0 8px;margin:0;line-height:30px}.vc-header .vc-title:hover{opacity:.75}.vc-header .vc-arrow{display:flex;justify-content:center;align-items:center;color:var(--vc-header-arrow-color);width:28px;height:30px;margin:0;padding:0}.vc-header .vc-arrow:hover{background:var(--vc-header-arrow-hover-bg)}.vc-header .vc-arrow:disabled{opacity:.25;pointer-events:none}.vc-nav-header{display:flex;justify-content:space-between}.vc-nav-title,.vc-nav-arrow,.vc-nav-item{font-size:var(--vc-text-sm);margin:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:0;border-radius:var(--vc-rounded);white-space:nowrap}.vc-nav-title:hover,.vc-nav-arrow:hover,.vc-nav-item:hover{background-color:var(--vc-nav-hover-bg)}.vc-nav-title:disabled,.vc-nav-arrow:disabled,.vc-nav-item:disabled{opacity:.25;pointer-events:none}.vc-nav-title{color:var(--vc-nav-title-color);font-weight:var(--vc-font-bold);line-height:var(--vc-leading-snug);height:30px;padding:0 6px}.vc-nav-arrow{display:flex;justify-content:center;align-items:center;color:var(--vc-header-arrow-color);width:26px;height:30px;padding:0}.vc-nav-items{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:2px;grid-column-gap:5px;margin-top:2px}.vc-nav-item{width:48px;text-align:center;font-weight:var(--vc-font-semibold);line-height:var(--vc-leading-snug);padding:6px 0}.vc-nav-item.is-active{color:var(--vc-nav-item-active-color);background-color:var(--vc-nav-item-active-bg);font-weight:var(--vc-font-bold)}.vc-nav-item.is-active:not(:focus){box-shadow:var(--vc-nav-item-active-box-shadow)}.vc-nav-item.is-current{color:var(--vc-nav-item-current-color)}.vc-day{position:relative;min-height:32px;z-index:1}.vc-monthly .is-not-in-month *{opacity:0;pointer-events:none}.vc-day-layer{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}.vc-day-box-center-center{display:flex;justify-content:center;align-items:center;transform-origin:50% 50%}.vc-day-box-left-center{display:flex;justify-content:flex-start;align-items:center;transform-origin:0% 50%}.vc-day-box-right-center{display:flex;justify-content:flex-end;align-items:center;transform-origin:100% 50%}.vc-day-box-center-bottom{display:flex;justify-content:center;align-items:flex-end}.vc-day-content{display:flex;justify-content:center;align-items:center;font-size:var(--vc-text-sm);font-weight:var(--vc-font-medium);width:28px;height:28px;line-height:28px;border-radius:var(--vc-rounded-full);-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.vc-day-content:hover{background-color:var(--vc-day-content-hover-bg)}.vc-day-content.vc-disabled{color:var(--vc-day-content-disabled-color)}.vc-content:not(.vc-base){font-weight:var(--vc-font-bold);color:var(--vc-content-color)}.vc-highlights{overflow:hidden;pointer-events:none;z-index:-1}.vc-highlight{width:28px;height:28px}.vc-highlight.vc-highlight-base-start{width:50%!important;border-radius:0!important;border-right-width:0!important}.vc-highlight.vc-highlight-base-end{width:50%!important;border-radius:0!important;border-left-width:0!important}.vc-highlight.vc-highlight-base-middle{width:100%;border-radius:0!important;border-left-width:0!important;border-right-width:0!important;margin:0 -1px}.vc-highlight-bg-outline,.vc-highlight-bg-none{background-color:var(--vc-highlight-outline-bg);border:2px solid;border-color:var(--vc-highlight-outline-border);border-radius:var(--vc-rounded-full)}.vc-highlight-bg-light{background-color:var(--vc-highlight-light-bg);border-radius:var(--vc-rounded-full)}.vc-highlight-bg-solid{background-color:var(--vc-highlight-solid-bg);border-radius:var(--vc-rounded-full)}.vc-highlight-content-outline,.vc-highlight-content-none{font-weight:var(--vc-font-bold);color:var(--vc-highlight-outline-content-color)}.vc-highlight-content-light{font-weight:var(--vc-font-bold);color:var(--vc-highlight-light-content-color)}.vc-highlight-content-solid{font-weight:var(--vc-font-bold);color:var(--vc-highlight-solid-content-color)}.vc-dots{display:flex;justify-content:center;align-items:center}.vc-dot{width:5px;height:5px;border-radius:9999px;transition:var(--vc-day-content-transition)}.vc-dot:not(:last-child){margin-right:3px}.vc-bars{display:flex;justify-content:flex-start;align-items:center;width:75%}.vc-bar{flex-grow:1;height:3px;transition:var(--vc-day-content-transition)}.vc-dot{background-color:var(--vc-dot-bg)}.vc-bar{background-color:var(--vc-bar-bg)}.vc-pane{min-width:250px}.vc-weeknumber{display:flex;justify-content:center;align-items:center;position:absolute}.vc-weeknumber.is-left{left:calc(var(--vc-weeknumber-offset-inside) * -1)}.vc-weeknumber.is-right{right:calc(var(--vc-weeknumber-offset-inside) * -1)}.vc-weeknumber.is-left-outside{left:calc(var(--vc-weeknumber-offset-outside) * -1)}.vc-weeknumber.is-right-outside{right:calc(var(--vc-weeknumber-offset-outside) * -1)}.vc-weeknumber-content{display:flex;justify-content:center;align-items:center;font-size:var(--vc-text-xs);font-weight:var(--vc-font-medium);font-style:italic;width:28px;height:28px;margin-top:2px;color:var(--vc-weeknumber-color);-webkit-user-select:none;-moz-user-select:none;user-select:none}.vc-weeks{position:relative;-webkit-overflow-scrolling:touch;padding:6px;min-width:232px}.vc-weeks.vc-show-weeknumbers-left{margin-left:var(--vc-weeknumber-offset-inside)}.vc-weeks.vc-show-weeknumbers-right{margin-right:var(--vc-weeknumber-offset-inside)}.vc-weekday{text-align:center;color:var(--vc-weekday-color);font-size:var(--vc-text-sm);font-weight:var(--vc-font-bold);line-height:14px;padding-top:4px;padding-bottom:8px;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.vc-week,.vc-weekdays{display:grid;grid-template-columns:repeat(7,1fr);position:relative}.vc-pane-container{width:100%;position:relative}.vc-pane-container.in-transition{overflow:hidden}.vc-pane-layout{display:grid}.vc-pane-header-wrapper{position:absolute;top:0;width:100%;pointer-events:none}.vc-day-popover-container{font-size:var(--vc-text-xs);font-weight:var(--vc-font-medium)}.vc-day-popover-header{font-size:var(--vc-text-xs);color:var(--vc-day-popover-header-color);font-weight:var(--vc-font-semibold);text-align:center}.vc-base-select{position:relative;display:flex;justify-content:center;align-items:center;height:30px;font-size:var(--vc-text-base);font-weight:var(--vc-font-medium)}.vc-base-select.vc-has-icon select{padding:0 27px 0 9px}.vc-base-select.vc-has-icon .vc-base-sizer{padding:0 28px 0 10px}.vc-base-select.vc-fit-content select{position:absolute;top:0;left:0;width:100%}.vc-base-select .vc-base-icon{position:absolute;top:6px;right:4px;opacity:.6;pointer-events:none}.vc-base-select .vc-base-sizer{font-size:var(--vc-text-base);font-weight:var(--vc-font-medium);color:transparent;padding:0 8px;margin:0}.vc-base-select select{display:inline-flex;justify-content:center;color:var(--vc-select-color);display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--vc-select-bg);border-radius:var(--vc-rounded);height:30px;width:-moz-max-content;width:max-content;padding:0 7px;margin:0;line-height:var(--leading-none);text-indent:0px;background-image:none;cursor:pointer;text-align:center}.vc-base-select select:hover{background-color:var(--vc-select-hover-bg)}.vc-base-select select.vc-align-left{text-align:left}.vc-base-select select.vc-align-right{text-align:right}.vc-time-picker{display:flex;flex-direction:column;align-items:center;padding:8px 4px}.vc-time-picker.vc-invalid{pointer-events:none;opacity:.5}.vc-time-picker.vc-attached{border-top:1px solid var(--vc-time-picker-border)}.vc-time-picker>*+*{margin-top:4px}.vc-time-header{display:flex;align-items:center;font-size:var(--vc-text-sm);font-weight:var(--vc-font-semibold);text-transform:uppercase;margin-top:-4px;padding-left:4px;padding-right:4px;line-height:21px}.vc-time-select-group{display:inline-flex;align-items:center;padding:0 4px;background:var(--vc-time-select-group-bg);border-radius:var(--vc-rounded-md);border:1px solid var(--vc-time-select-group-border)}.vc-time-select-group .vc-base-icon{margin-right:4px;color:var(--vc-time-select-group-icon-color)}.vc-time-select-group select{background:transparent;padding:0 4px}.vc-time-weekday{color:var(--vc-time-weekday-color);letter-spacing:var(--tracking-wide)}.vc-time-month{color:var(--vc-time-month-color);margin-left:8px}.vc-time-day{color:var(--vc-time-day-color);margin-left:4px}.vc-time-year{color:var(--vc-time-year-color);margin-left:8px}.vc-time-colon{margin:0 1px 2px 2px}.vc-time-decimal{margin:0 0 0 1px}.vc-none-enter-active,.vc-none-leave-active{transition-duration:0s}.vc-fade-enter-active,.vc-fade-leave-active,.vc-slide-left-enter-active,.vc-slide-left-leave-active,.vc-slide-right-enter-active,.vc-slide-right-leave-active,.vc-slide-up-enter-active,.vc-slide-up-leave-active,.vc-slide-down-enter-active,.vc-slide-down-leave-active,.vc-slide-fade-enter-active,.vc-slide-fade-leave-active{transition:transform var(--vc-slide-duration) var(--vc-slide-timing),opacity var(--vc-slide-duration) var(--vc-slide-timing);backface-visibility:hidden;pointer-events:none}.vc-none-leave-active,.vc-fade-leave-active,.vc-slide-left-leave-active,.vc-slide-right-leave-active,.vc-slide-up-leave-active,.vc-slide-down-leave-active{position:absolute!important;width:100%}.vc-none-enter-from,.vc-none-leave-to,.vc-fade-enter-from,.vc-fade-leave-to,.vc-slide-left-enter-from,.vc-slide-left-leave-to,.vc-slide-right-enter-from,.vc-slide-right-leave-to,.vc-slide-up-enter-from,.vc-slide-up-leave-to,.vc-slide-down-enter-from,.vc-slide-down-leave-to,.vc-slide-fade-enter-from,.vc-slide-fade-leave-to{opacity:0}.vc-slide-left-enter-from,.vc-slide-right-leave-to,.vc-slide-fade-enter-from.direction-left,.vc-slide-fade-leave-to.direction-left{transform:translate(var(--vc-slide-translate))}.vc-slide-right-enter-from,.vc-slide-left-leave-to,.vc-slide-fade-enter-from.direction-right,.vc-slide-fade-leave-to.direction-right{transform:translate(calc(-1 * var(--vc-slide-translate)))}.vc-slide-up-enter-from,.vc-slide-down-leave-to,.vc-slide-fade-enter-from.direction-top,.vc-slide-fade-leave-to.direction-top{transform:translateY(var(--vc-slide-translate))}.vc-slide-down-enter-from,.vc-slide-up-leave-to,.vc-slide-fade-enter-from.direction-bottom,.vc-slide-fade-leave-to.direction-bottom{transform:translateY(calc(-1 * var(--vc-slide-translate)))}:root{--vc-white: #ffffff;--vc-black: #000000;--vc-gray-50: #f8fafc;--vc-gray-100: #f1f5f9;--vc-gray-200: #e2e8f0;--vc-gray-300: #cbd5e1;--vc-gray-400: #94a3b8;--vc-gray-500: #64748b;--vc-gray-600: #475569;--vc-gray-700: #334155;--vc-gray-800: #1e293b;--vc-gray-900: #0f172a;--vc-font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;--vc-font-normal: 400;--vc-font-medium: 500;--vc-font-semibold: 600;--vc-font-bold: 700;--vc-text-2xs: 10px;--vc-text-xs: 12px;--vc-text-sm: 14px;--vc-text-base: 16px;--vc-text-lg: 18px;--vc-text-xl: 20px;--vc-text-2xl: 24px;--vc-leading-none: 1;--vc-leading-tight: 1.25;--vc-leading-snug: 1.375;--vc-leading-normal: 1.5;--vc-rounded: .25rem;--vc-rounded-md: .375rem;--vc-rounded-lg: .5rem;--vc-rounded-full: 9999px;--vc-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);--vc-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--vc-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, .06);--vc-slide-translate: 22px;--vc-slide-duration: .15s;--vc-slide-timing: ease;--vc-day-content-transition: all .13s ease-in;--vc-weeknumber-offset-inside: 26px;--vc-weeknumber-offset-outside: 34px}.vc-gray{--vc-accent-50: var(--vc-gray-50);--vc-accent-100: var(--vc-gray-100);--vc-accent-200: var(--vc-gray-200);--vc-accent-300: var(--vc-gray-300);--vc-accent-400: var(--vc-gray-400);--vc-accent-500: var(--vc-gray-500);--vc-accent-600: var(--vc-gray-600);--vc-accent-700: var(--vc-gray-700);--vc-accent-800: var(--vc-gray-800);--vc-accent-900: var(--vc-gray-900)}.vc-red{--vc-accent-50: #fef2f2;--vc-accent-100: #fee2e2;--vc-accent-200: #fecaca;--vc-accent-300: #fca5a5;--vc-accent-400: #f87171;--vc-accent-500: #ef4444;--vc-accent-600: #dc2626;--vc-accent-700: #b91c1c;--vc-accent-800: #991b1b;--vc-accent-900: #7f1d1d}.vc-orange{--vc-accent-50: #fff7ed;--vc-accent-100: #ffedd5;--vc-accent-200: #fed7aa;--vc-accent-300: #fdba74;--vc-accent-400: #fb923c;--vc-accent-500: #f97316;--vc-accent-600: #ea580c;--vc-accent-700: #c2410c;--vc-accent-800: #9a3412;--vc-accent-900: #7c2d12}.vc-yellow{--vc-accent-50: #fefce8;--vc-accent-100: #fef9c3;--vc-accent-200: #fef08a;--vc-accent-300: #fde047;--vc-accent-400: #facc15;--vc-accent-500: #eab308;--vc-accent-600: #ca8a04;--vc-accent-700: #a16207;--vc-accent-800: #854d0e;--vc-accent-900: #713f12}.vc-green{--vc-accent-50: #f0fdf4;--vc-accent-100: #dcfce7;--vc-accent-200: #bbf7d0;--vc-accent-300: #86efac;--vc-accent-400: #4ade80;--vc-accent-500: #22c55e;--vc-accent-600: #16a34a;--vc-accent-700: #15803d;--vc-accent-800: #166534;--vc-accent-900: #14532d}.vc-teal{--vc-accent-50: #f0fdfa;--vc-accent-100: #ccfbf1;--vc-accent-200: #99f6e4;--vc-accent-300: #5eead4;--vc-accent-400: #2dd4bf;--vc-accent-500: #14b8a6;--vc-accent-600: #0d9488;--vc-accent-700: #0f766e;--vc-accent-800: #115e59;--vc-accent-900: #134e4a}.vc-blue{--vc-accent-50: #eff6ff;--vc-accent-100: #dbeafe;--vc-accent-200: #bfdbfe;--vc-accent-300: #93c5fd;--vc-accent-400: #60a5fa;--vc-accent-500: #3b82f6;--vc-accent-600: #2563eb;--vc-accent-700: #1d4ed8;--vc-accent-800: #1e40af;--vc-accent-900: #1e3a8a}.vc-indigo{--vc-accent-50: #eef2ff;--vc-accent-100: #e0e7ff;--vc-accent-200: #c7d2fe;--vc-accent-300: #a5b4fc;--vc-accent-400: #818cf8;--vc-accent-500: #6366f1;--vc-accent-600: #4f46e5;--vc-accent-700: #4338ca;--vc-accent-800: #3730a3;--vc-accent-900: #312e81}.vc-purple{--vc-accent-50: #faf5ff;--vc-accent-100: #f3e8ff;--vc-accent-200: #e9d5ff;--vc-accent-300: #d8b4fe;--vc-accent-400: #c084fc;--vc-accent-500: #a855f7;--vc-accent-600: #9333ea;--vc-accent-700: #7e22ce;--vc-accent-800: #6b21a8;--vc-accent-900: #581c87}.vc-pink{--vc-accent-50: #fdf2f8;--vc-accent-100: #fce7f3;--vc-accent-200: #fbcfe8;--vc-accent-300: #f9a8d4;--vc-accent-400: #f472b6;--vc-accent-500: #ec4899;--vc-accent-600: #db2777;--vc-accent-700: #be185d;--vc-accent-800: #9d174d;--vc-accent-900: #831843}.vc-focus:focus-within{outline:0;box-shadow:var(--vc-focus-ring)}.vc-light{--vc-color: var(--vc-gray-900);--vc-bg: var(--vc-white);--vc-border: var(--vc-gray-300);--vc-hover-bg: hsla(211, 25%, 84%, .3);--vc-focus-ring: 0 0 0 2px rgb(59, 131, 246, .4);--vc-header-arrow-color: var(--vc-gray-500);--vc-header-arrow-hover-bg: var(--vc-gray-200);--vc-header-title-color: var(--vc-gray-900);--vc-weekday-color: var(--vc-gray-500);--vc-weeknumber-color: var(--vc-gray-400);--vc-nav-hover-bg: var(--vc-gray-200);--vc-nav-title-color: var(--vc-gray-900);--vc-nav-item-hover-box-shadow: none;--vc-nav-item-active-color: var(--vc-white);--vc-nav-item-active-bg: var(--vc-accent-500);--vc-nav-item-active-box-shadow: var(--vc-shadow);--vc-nav-item-current-color: var(--vc-accent-600);--vc-day-popover-container-color: var(--vc-white);--vc-day-popover-container-bg: var(--vc-gray-800);--vc-day-popover-container-border: var(--vc-gray-700);--vc-day-popover-header-color: var(--vc-gray-700);--vc-popover-content-color: var(--vc-gray-900);--vc-popover-content-bg: var(--vc-gray-50);--vc-popover-content-border: var(--vc-gray-300);--vc-time-picker-border: var(--vc-gray-300);--vc-time-weekday-color: var(--vc-gray-700);--vc-time-month-color: var(--vc-accent-600);--vc-time-day-color: var(--vc-accent-600);--vc-time-year-color: var(--vc-gray-500);--vc-time-select-group-bg: var(--vc-gray-50);--vc-time-select-group-border: var(--vc-gray-300);--vc-time-select-group-icon-color: var(--vc-accent-500);--vc-select-color: var(--vc-gray-900);--vc-select-bg: var(--vc-gray-100);--vc-select-hover-bg: var(--vc-gray-200);--vc-day-content-hover-bg: var(--vc-hover-bg);--vc-day-content-disabled-color: var(--vc-gray-400)}.vc-light.vc-attr,.vc-light .vc-attr{--vc-content-color: var(--vc-accent-600);--vc-highlight-outline-bg: var(--vc-white);--vc-highlight-outline-border: var(--vc-accent-600);--vc-highlight-outline-content-color: var(--vc-accent-700);--vc-highlight-light-bg: var(--vc-accent-200);--vc-highlight-light-content-color: var(--vc-accent-900);--vc-highlight-solid-bg: var(--vc-accent-600);--vc-highlight-solid-content-color: var(--vc-white);--vc-dot-bg: var(--vc-accent-600);--vc-bar-bg: var(--vc-accent-600)}.vc-dark{--vc-color: var(--vc-white);--vc-bg: var(--vc-gray-900);--vc-border: var(--vc-gray-700);--vc-hover-bg: hsla(216, 15%, 52%, .3);--vc-focus-ring: 0 0 0 2px rgb(59 130 246 / .7);--vc-header-arrow-color: var(--vc-gray-300);--vc-header-arrow-hover-bg: var(--vc-gray-800);--vc-header-title-color: var(--vc-gray-100);--vc-weekday-color: var(--vc-accent-200);--vc-weeknumber-color: var(--vc-gray-500);--vc-nav-hover-bg: var(--vc-gray-700);--vc-nav-title-color: var(--vc-gray-100);--vc-nav-item-hover-box-shadow: none;--vc-nav-item-active-color: var(--vc-white);--vc-nav-item-active-bg: var(--vc-accent-500);--vc-nav-item-active-box-shadow: none;--vc-nav-item-current-color: var(--vc-accent-400);--vc-day-popover-container-color: var(--vc-gray-800);--vc-day-popover-container-bg: var(--vc-white);--vc-day-popover-container-border: var(--vc-gray-100);--vc-day-popover-header-color: var(--vc-gray-300);--vc-popover-content-color: var(--vc-white);--vc-popover-content-bg: var(--vc-gray-800);--vc-popover-content-border: var(--vc-gray-700);--vc-time-picker-border: var(--vc-gray-700);--vc-time-weekday-color: var(--vc-gray-400);--vc-time-month-color: var(--vc-accent-400);--vc-time-day-color: var(--vc-accent-400);--vc-time-year-color: var(--vc-gray-500);--vc-time-select-group-bg: var(--vc-gray-700);--vc-time-select-group-border: var(--vc-gray-500);--vc-time-select-group-icon-color: var(--vc-accent-400);--vc-select-color: var(--vc-gray-200);--vc-select-bg: var(--vc-gray-700);--vc-select-hover-bg: var(--vc-gray-600);--vc-day-content-hover-bg: var(--vc-hover-bg);--vc-day-content-disabled-color: var(--vc-gray-600)}.vc-dark.vc-attr,.vc-dark .vc-attr{--vc-content-color: var(--vc-accent-500);--vc-highlight-outline-bg: var(--vc-gray-900);--vc-highlight-outline-border: var(--vc-accent-300);--vc-highlight-outline-content-color: var(--vc-accent-200);--vc-highlight-light-bg: var(--vc-accent-800);--vc-highlight-light-content-color: var(--vc-accent-100);--vc-highlight-solid-bg: var(--vc-accent-500);--vc-highlight-solid-content-color: var(--vc-white);--vc-dot-bg: var(--vc-accent-500);--vc-bar-bg: var(--vc-accent-500)}.vc-container{position:relative;display:inline-flex;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;font-family:var(--vc-font-family);color:var(--vc-color);background-color:var(--vc-bg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent}.vc-container,.vc-container *{box-sizing:border-box}.vc-container:focus,.vc-container *:focus{outline:none}.vc-container .vc-container{border:none}.vc-bordered{border:1px solid;border-color:var(--vc-border);border-radius:var(--vc-rounded-lg)}.vc-expanded{min-width:100%}.vc-transparent{background-color:transparent}.vc-date-picker-content{padding:0;background-color:var(--vc-bg)}.vc-date-picker-content .vc-container{border:0}.dp__theme_light{--dp-background-color: #ffffff;--dp-text-color: #212121;--dp-hover-color: #75bce1;--dp-hover-text-color: #ffffff;--dp-hover-icon-color: #ffffff;--dp-primary-color: #0987ca;--dp-primary-text-color: #ffffff;--dp-secondary-color: #212121;--dp-border-color: #ffffff;--dp-range-between-dates-background-color: var(--dp-hover-color, #75bce1);--dp-range-between-dates-text-color: var(--dp-hover-text-color, #ffffff);--dp-range-between-border-color: var(--dp-hover-color, #ffffff)}', zI = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, GI = {
  name: "Calendar",
  components: {
    "v-calendar": AI
  },
  props: {
    vehicleId: {
      type: String,
      required: !0,
      default: ""
    }
  },
  setup(e) {
    const t = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/calendar`, r = `https://www.camperfuchs.de/api/V1/articles/${e.vehicleId}/resolve`, n = be([
      {
        start: new Date(2e3, 0, 1),
        end: /* @__PURE__ */ new Date()
      }
    ]), o = be([
      {
        bar: !0,
        dates: /* @__PURE__ */ new Date(),
        popover: {
          label: "Heute, nicht auswählbar",
          hideIndicator: !0
        }
      }
    ]), a = be(null), s = be({
      start: null,
      end: null
    }), i = be(!1), l = function(y) {
      s.value = y;
    }, c = x(() => {
      var y, L, P;
      return `https://www.camperfuchs.de/checkout/${e.vehicleId}/${(y = a.value) == null ? void 0 : y.relevantStationId}?from=${(L = s.value) == null ? void 0 : L.start}&to=${(P = s.value) == null ? void 0 : P.end}`;
    }), u = x(() => {
      var y, L, P;
      return `https://www.camperfuchs.de/checkout/${e.vehicleId}/${(y = a.value) == null ? void 0 : y.relevantStationId}/request?from=${(L = s.value) == null ? void 0 : L.start}&to=${(P = s.value) == null ? void 0 : P.end}`;
    });
    function f(y, L, P, k) {
      let z = fo(y), j = fo(L);
      z > j && ([z, j] = [j, z]), o.value.push({
        bar: {
          style: {
            backgroundColor: k
          }
        },
        popover: {
          label: P,
          hideIndicator: !0
        },
        dates: {
          start: z,
          end: j
        }
      }), n.value.push({
        start: z,
        end: j
      });
    }
    const d = be([]);
    function h(y) {
      var k, z, j;
      let L = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set();
      for (let q = 0; q < ((k = y.value) == null ? void 0 : k.pickupAndReturnTimes.length); q++)
        for (let A in (z = y.value) == null ? void 0 : z.pickupAndReturnTimes[q])
          (j = y.value) != null && j.pickupAndReturnTimes[q][A].open || (P.add(q + 1), L.add(q));
      d.value = Array.from(L), o.value.push({
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
            weekdays: Array.from(P)
          }
        }
      });
    }
    const m = async () => {
      try {
        const L = await (await fetch(t)).json();
        L.bookedDays.forEach((k) => f(k.from, k.to, "Ausgebucht", "#ff0000")), L.daysOff.forEach((k) => f(k.from, k.to, "Standort geschlossen", "#d8bd00"));
        const P = await fetch(r);
        a.value = await P.json(), h(a);
      } catch (y) {
        console.error("An error occurred while fetching the data:", y);
      }
    }, w = x(() => {
      var y, L, P;
      return ((y = s.value) == null ? void 0 : y.start) === null || ((L = s.value) == null ? void 0 : L.end) === null || ((P = a.value) == null ? void 0 : P.relevantStationId) === null;
    }), D = x(() => {
      var L, P, k, z, j, q;
      let y = {
        isValid: !1,
        season: "std",
        minDays: (L = a.value) == null ? void 0 : L.minDays.std,
        days: 0
      };
      if (((P = s.value) == null ? void 0 : P.start) !== null && ((k = s.value) == null ? void 0 : k.end) !== null) {
        let A = (z = s.value) == null ? void 0 : z.start, U = (j = s.value) == null ? void 0 : j.end;
        if (i.value = d.value.includes(A.getDay()) || d.value.includes(U.getDay()), A > U) {
          let K = A;
          A = U, U = K;
        }
        const se = OI(U, A);
        (q = a.value) == null || q.seasons.forEach((K) => {
          const ee = fo(K.from), te = fo(K.to);
          A >= ee && U <= te && (y.season = K.type, y.minDays = a.value.minDays[K.type], y.days = se);
        }), y.isValid = se >= y.minDays, y.days = se;
      }
      return y;
    }), b = x(() => {
      let y = 0;
      return D.value.isValid && (y = D.value.days * a.value.rates[D.value.season]), y;
    }), H = {
      std: "Standard Saison",
      high: "Hauptsaison",
      low: "Nebensaison"
    };
    return Pr(() => {
      m();
    }), {
      disabledDates: n,
      isDisabled: w,
      bookingUrl: c,
      requestUrl: u,
      article: a,
      isPickupReturnDaysWrong: i,
      season: H,
      isValidRange: D,
      totalRate: b,
      attributes: o,
      setRange: l,
      range: s,
      navigateToBookingUrl: () => {
        D.value.isValid && !i.value && window.open(c.value, "_blank");
      },
      navigateToRequestUrl: () => {
        D.value.isValid && !i.value && window.open(u.value, "_blank");
      }
    };
  }
}, VI = { class: "max-w-sm flex flex-col items-center w-full gap-4 bg-white p-2" }, KI = /* @__PURE__ */ ne("div", { class: "flex flex-col w-full gap-4" }, [
  /* @__PURE__ */ ne("a", {
    href: "https://www.camperfuchs.de/wohnmobil-mieten",
    target: "_blank",
    class: "flex items-end gap-2 justify-center w-full appearance-none no-underline text-xs text-primary-braun"
  }, [
    /* @__PURE__ */ ne("span", { class: "text-sm" }, "powered by"),
    /* @__PURE__ */ ne("img", {
      src: jI,
      class: "object-contain h-6",
      alt: ""
    })
  ])
], -1), QI = { class: "flex flex-col w-full gap-2 p-2 text-sm tabular-nums" }, qI = { class: "font-medium" }, ZI = { class: "flex justify-between gap-4 w-full" }, JI = /* @__PURE__ */ ne("span", { class: "font-medium" }, "Ausgewählte Nächte:", -1), XI = { class: "font-normal" }, eE = { class: "flex justify-between gap-4 w-full" }, tE = /* @__PURE__ */ ne("span", { class: "font-medium" }, "Mietpreis:", -1), rE = { class: "font-normal" }, nE = { class: "flex justify-between gap-4 w-full" }, oE = /* @__PURE__ */ ne("span", { class: "font-medium" }, "Kaution:", -1), aE = { class: "font-normal" }, sE = { class: "text-red-500 text-sm break-words text-center" };
function iE(e, t, r, n, o, a) {
  var i, l;
  const s = St("v-calendar");
  return V(), oe("div", VI, [
    ie(s, {
      onDrag: n.setRange,
      attributes: n.attributes,
      "disabled-dates": n.disabledDates,
      locale: "de",
      modelValue: n.range,
      "onUpdate:modelValue": t[0] || (t[0] = (c) => n.range = c),
      modelModifiers: { range: !0 },
      expanded: "",
      borderless: ""
    }, {
      footer: Ye(() => [
        KI
      ]),
      _: 1
    }, 8, ["onDrag", "attributes", "disabled-dates", "modelValue"]),
    jr(ne("div", QI, [
      ne("span", qI, Le(n.season[n.isValidRange.season]), 1),
      ne("span", ZI, [
        JI,
        ne("span", XI, Le(n.isValidRange.days), 1)
      ]),
      ne("span", eE, [
        tE,
        ne("span", rE, Le(n.totalRate) + " €", 1)
      ]),
      ne("span", nE, [
        oE,
        ne("span", aE, Le((i = n.article) == null ? void 0 : i.deposit) + " €", 1)
      ])
    ], 512), [
      [so, n.isValidRange.isValid]
    ]),
    jr(ne("span", { class: "text-red-500 text-sm text-center w-full" }, " Mindestmietdauer " + Le(n.isValidRange.minDays) + " Nächte ", 513), [
      [so, !n.isValidRange.isValid && n.isValidRange.days !== 0]
    ]),
    jr(ne("span", sE, " An Tagen, an denen die Einrichtung geschlossen ist, können die Fahrzeuge nicht abgeholt oder zurückgebracht werden. ", 512), [
      [so, n.isPickupReturnDaysWrong]
    ]),
    jr(ne("button", {
      onClick: t[1] || (t[1] = (...c) => n.navigateToBookingUrl && n.navigateToBookingUrl(...c)),
      class: "p-4 font-semibold text-center w-full bg-primary-blue/90 shadow-md text-white border-none rounded-lg hover:bg-primary-blue duration-300 appearance-none cursor-pointer"
    }, " Zur Buchung ", 512), [
      [so, (l = n.article) == null ? void 0 : l.onlineBookable]
    ]),
    ne("button", {
      onClick: t[2] || (t[2] = (...c) => n.navigateToRequestUrl && n.navigateToRequestUrl(...c)),
      class: "p-4 font-semibold text-center bg-white shadow-md text-gray-700 w-full border-none rounded-lg hover:bg-secondary-blue/40 duration-300 appearance-none cursor-pointer"
    }, " Unverbindlich anfragen ")
  ]);
}
const lE = /* @__PURE__ */ zI(GI, [["render", iE], ["styles", [WI]]]), cE = /* @__PURE__ */ Cp(lE);
customElements.define("booking-calendar", cE);
