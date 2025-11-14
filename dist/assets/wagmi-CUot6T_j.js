const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/vendor-BZZ6DO-t.js",
      "assets/react-core-DTfLns-N.js",
      "assets/date-fns-eMX-sgik.js",
      "assets/radix-ui-B4s5ZLUC.js",
      "assets/zustand-C9I4lUQe.js",
      "assets/ui-utils-CtO5jga9.js",
      "assets/viem-BWdEkVAs.js",
      "assets/rainbowkit-CYyBjDse.js",
      "assets/react-query-CUqNwzfD.js",
      "assets/rainbowkit-B77lyCCA.css",
      "assets/zod-BB0M7GTZ.js",
    ])
) => i.map((i) => d[i]);
import { b as ee, s as Fe, d as Be } from "./zustand-C9I4lUQe.js";
import {
  Z as ze,
  _ as E,
  $ as Ee,
  a0 as Ve,
  a1 as Qe,
  a2 as He,
  Q as Je,
  a3 as Ge,
  O as Ze,
  B as Xe,
  X as Oe,
  a4 as Ye,
  a5 as et,
  a6 as tt,
  a7 as nt,
  a8 as it,
  a9 as x,
  t as D,
  U as P,
  aa as re,
  ab as me,
  ac as F,
  V as rt,
  o as oe,
  h as T,
  c as ce,
  p as se,
  s as ae,
  m as ue,
} from "./viem-BWdEkVAs.js";
import { G as ot, H as ct, I as Me } from "./vendor-BZZ6DO-t.js";
import { r as O } from "./react-core-DTfLns-N.js";
import { u as st, a as X } from "./react-query-CUqNwzfD.js";
import { _ as B, g as at } from "./rainbowkit-CYyBjDse.js";
function W(e, t, n) {
  const i = e[t.name];
  if (typeof i == "function") return i;
  const r = e[n];
  return typeof r == "function" ? r : (c) => t(e, c);
}
const J = "2.22.1",
  ut = () => `@wagmi/core@${J}`;
var je = function (e, t, n, i) {
    if (n === "a" && !i)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !i : !t.has(e))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
  },
  Z,
  ke;
let N = class de extends Error {
  get docsBaseUrl() {
    return "https://wagmi.sh/core";
  }
  get version() {
    return ut();
  }
  constructor(t, n = {}) {
    (super(),
      Z.add(this),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "metaMessages", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "WagmiCoreError",
      }));
    const i =
        n.cause instanceof de
          ? n.cause.details
          : n.cause?.message
            ? n.cause.message
            : n.details,
      r = (n.cause instanceof de && n.cause.docsPath) || n.docsPath;
    ((this.message = [
      t || "An error occurred.",
      "",
      ...(n.metaMessages ? [...n.metaMessages, ""] : []),
      ...(r
        ? [
            `Docs: ${this.docsBaseUrl}${r}.html${n.docsSlug ? `#${n.docsSlug}` : ""}`,
          ]
        : []),
      ...(i ? [`Details: ${i}`] : []),
      `Version: ${this.version}`,
    ].join(`
`)),
      n.cause && (this.cause = n.cause),
      (this.details = i),
      (this.docsPath = r),
      (this.metaMessages = n.metaMessages),
      (this.shortMessage = t));
  }
  walk(t) {
    return je(this, Z, "m", ke).call(this, this, t);
  }
};
((Z = new WeakSet()),
  (ke = function e(t, n) {
    return n?.(t)
      ? t
      : t.cause
        ? je(this, Z, "m", e).call(this, t.cause, n)
        : t;
  }));
class $ extends N {
  constructor() {
    (super("Chain not configured."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChainNotConfiguredError",
      }));
  }
}
class dt extends N {
  constructor() {
    (super("Connector already connected."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorAlreadyConnectedError",
      }));
  }
}
class ht extends N {
  constructor() {
    (super("Connector not connected."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorNotConnectedError",
      }));
  }
}
class lt extends N {
  constructor({ address: t, connector: n }) {
    (super(`Account "${t}" not found for connector "${n.name}".`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorAccountNotFoundError",
      }));
  }
}
class ft extends N {
  constructor({ connectionChainId: t, connectorChainId: n }) {
    (super(
      `The current chain of the connector (id: ${n}) does not match the connection's chain (id: ${t}).`,
      { metaMessages: [`Current Chain ID:  ${n}`, `Expected Chain ID: ${t}`] }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorChainMismatchError",
      }));
  }
}
class mt extends N {
  constructor({ connector: t }) {
    (super(`Connector "${t.name}" unavailable while reconnecting.`, {
      details: [
        "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.",
        "All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.",
        "This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
      ].join(" "),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorUnavailableReconnectingError",
      }));
  }
}
async function pt(e, t) {
  let n;
  if (
    (typeof t.connector == "function"
      ? (n = e._internal.connectors.setup(t.connector))
      : (n = t.connector),
    n.uid === e.state.current)
  )
    throw new dt();
  try {
    (e.setState((o) => ({ ...o, status: "connecting" })),
      n.emitter.emit("message", { type: "connecting" }));
    const { connector: i, ...r } = t,
      c = await n.connect(r);
    return (
      n.emitter.off("connect", e._internal.events.connect),
      n.emitter.on("change", e._internal.events.change),
      n.emitter.on("disconnect", e._internal.events.disconnect),
      await e.storage?.setItem("recentConnectorId", n.id),
      e.setState((o) => ({
        ...o,
        connections: new Map(o.connections).set(n.uid, {
          accounts: r.withCapabilities
            ? c.accounts.map((u) => (typeof u == "object" ? u.address : u))
            : c.accounts,
          chainId: c.chainId,
          connector: n,
        }),
        current: n.uid,
        status: "connected",
      })),
      {
        accounts: r.withCapabilities
          ? c.accounts.map((o) =>
              typeof o == "object" ? o : { address: o, capabilities: {} }
            )
          : c.accounts,
        chainId: c.chainId,
      }
    );
  } catch (i) {
    throw (
      e.setState((r) => ({
        ...r,
        status: r.current ? "connected" : "disconnected",
      })),
      i
    );
  }
}
async function wt(e, t = {}) {
  const { assertChainId: n = !0 } = t;
  let i;
  if (t.connector) {
    const { connector: a } = t;
    if (e.state.status === "reconnecting" && !a.getAccounts && !a.getChainId)
      throw new mt({ connector: a });
    const [f, h] = await Promise.all([
      a.getAccounts().catch((l) => {
        if (t.account === null) return [];
        throw l;
      }),
      a.getChainId(),
    ]);
    i = { accounts: f, chainId: h, connector: a };
  } else i = e.state.connections.get(e.state.current);
  if (!i) throw new ht();
  const r = t.chainId ?? i.chainId,
    c = await i.connector.getChainId();
  if (n && c !== r) throw new ft({ connectionChainId: r, connectorChainId: c });
  const o = i.connector;
  if (o.getClient) return o.getClient({ chainId: r });
  const u = ze(t.account ?? i.accounts[0]);
  if (
    (u && (u.address = E(u.address)),
    t.account &&
      !i.accounts.some((a) => a.toLowerCase() === u.address.toLowerCase()))
  )
    throw new lt({ address: u.address, connector: o });
  const d = e.chains.find((a) => a.id === r),
    s = await i.connector.getProvider({ chainId: r });
  return Ee({
    account: u,
    chain: d,
    name: "Connector Client",
    transport: (a) => Ve(s)({ ...a, retryCount: 0 }),
  });
}
async function gt(e, t = {}) {
  let n;
  if (t.connector) n = t.connector;
  else {
    const { connections: r, current: c } = e.state;
    n = r.get(c)?.connector;
  }
  const i = e.state.connections;
  (n &&
    (await n.disconnect(),
    n.emitter.off("change", e._internal.events.change),
    n.emitter.off("disconnect", e._internal.events.disconnect),
    n.emitter.on("connect", e._internal.events.connect),
    i.delete(n.uid)),
    e.setState((r) => {
      if (i.size === 0)
        return {
          ...r,
          connections: new Map(),
          current: null,
          status: "disconnected",
        };
      const c = i.values().next().value;
      return { ...r, connections: new Map(i), current: c.connector.uid };
    }));
  {
    const r = e.state.current;
    if (!r) return;
    const c = e.state.connections.get(r)?.connector;
    if (!c) return;
    await e.storage?.setItem("recentConnectorId", c.id);
  }
}
function qe(e) {
  return typeof e == "number" ? e : e === "wei" ? 0 : Math.abs(Qe[e]);
}
function Ue(e) {
  const t = e.state.current,
    n = e.state.connections.get(t),
    i = n?.accounts,
    r = i?.[0],
    c = e.chains.find((u) => u.id === n?.chainId),
    o = e.state.status;
  switch (o) {
    case "connected":
      return {
        address: r,
        addresses: i,
        chain: c,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !0,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !1,
        status: o,
      };
    case "reconnecting":
      return {
        address: r,
        addresses: i,
        chain: c,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !!r,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !0,
        status: o,
      };
    case "connecting":
      return {
        address: r,
        addresses: i,
        chain: c,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !1,
        isConnecting: !0,
        isDisconnected: !1,
        isReconnecting: !1,
        status: o,
      };
    case "disconnected":
      return {
        address: void 0,
        addresses: void 0,
        chain: void 0,
        chainId: void 0,
        connector: void 0,
        isConnected: !1,
        isConnecting: !1,
        isDisconnected: !0,
        isReconnecting: !1,
        status: o,
      };
  }
}
async function yt(e, t) {
  const { allowFailure: n = !0, chainId: i, contracts: r, ...c } = t,
    o = e.getClient({ chainId: i });
  return W(o, He, "multicall")({ allowFailure: n, contracts: r, ...c });
}
function Ct(e, t) {
  const { chainId: n, ...i } = t,
    r = e.getClient({ chainId: n });
  return W(r, Je, "readContract")(i);
}
async function bt(e, t) {
  const { allowFailure: n = !0, blockNumber: i, blockTag: r, ...c } = t,
    o = t.contracts;
  try {
    const u = {};
    for (const [f, h] of o.entries()) {
      const l = h.chainId ?? e.state.chainId;
      (u[l] || (u[l] = []), u[l]?.push({ contract: h, index: f }));
    }
    const d = () =>
        Object.entries(u).map(([f, h]) =>
          yt(e, {
            ...c,
            allowFailure: n,
            blockNumber: i,
            blockTag: r,
            chainId: Number.parseInt(f, 10),
            contracts: h.map(({ contract: l }) => l),
          })
        ),
      s = (await Promise.all(d())).flat(),
      a = Object.values(u).flatMap((f) => f.map(({ index: h }) => h));
    return s.reduce((f, h, l) => (f && (f[a[l]] = h), f), []);
  } catch (u) {
    if (u instanceof Ge) throw u;
    const d = () => o.map((s) => Ct(e, { ...s, blockNumber: i, blockTag: r }));
    return n
      ? (await Promise.allSettled(d())).map((s) =>
          s.status === "fulfilled"
            ? { result: s.value, status: "success" }
            : { error: s.reason, result: void 0, status: "failure" }
        )
      : await Promise.all(d());
  }
}
async function vt(e, t) {
  const {
    address: n,
    blockNumber: i,
    blockTag: r,
    chainId: c,
    token: o,
    unit: u = "ether",
  } = t;
  if (o)
    try {
      return await be(e, {
        balanceAddress: n,
        chainId: c,
        symbolType: "string",
        tokenAddress: o,
      });
    } catch (h) {
      if (h.name === "ContractFunctionExecutionError") {
        const l = await be(e, {
            balanceAddress: n,
            chainId: c,
            symbolType: "bytes32",
            tokenAddress: o,
          }),
          C = Ze(Xe(l.symbol, { dir: "right" }));
        return { ...l, symbol: C };
      }
      throw h;
    }
  const d = e.getClient({ chainId: c }),
    a = await W(
      d,
      Ye,
      "getBalance"
    )(i ? { address: n, blockNumber: i } : { address: n, blockTag: r }),
    f = e.chains.find((h) => h.id === c) ?? d.chain;
  return {
    decimals: f.nativeCurrency.decimals,
    formatted: Oe(a, qe(u)),
    symbol: f.nativeCurrency.symbol,
    value: a,
  };
}
async function be(e, t) {
  const {
      balanceAddress: n,
      chainId: i,
      symbolType: r,
      tokenAddress: c,
      unit: o,
    } = t,
    u = {
      abi: [
        {
          type: "function",
          name: "balanceOf",
          stateMutability: "view",
          inputs: [{ type: "address" }],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "decimals",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint8" }],
        },
        {
          type: "function",
          name: "symbol",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: r }],
        },
      ],
      address: c,
    },
    [d, s, a] = await bt(e, {
      allowFailure: !1,
      contracts: [
        { ...u, functionName: "balanceOf", args: [n], chainId: i },
        { ...u, functionName: "decimals", chainId: i },
        { ...u, functionName: "symbol", chainId: i },
      ],
    }),
    f = Oe(d ?? "0", qe(o ?? s));
  return { decimals: s, formatted: f, symbol: a, value: d };
}
function ve(e) {
  return e.state.chainId;
}
function L(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    let n, i;
    if (Array.isArray(e) && Array.isArray(t)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (i = n; i-- !== 0; ) if (!L(e[i], t[i])) return !1;
      return !0;
    }
    if (
      typeof e.valueOf == "function" &&
      e.valueOf !== Object.prototype.valueOf
    )
      return e.valueOf() === t.valueOf();
    if (
      typeof e.toString == "function" &&
      e.toString !== Object.prototype.toString
    )
      return e.toString() === t.toString();
    const r = Object.keys(e);
    if (((n = r.length), n !== Object.keys(t).length)) return !1;
    for (i = n; i-- !== 0; ) if (!Object.hasOwn(t, r[i])) return !1;
    for (i = n; i-- !== 0; ) {
      const c = r[i];
      if (c && !L(e[c], t[c])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
let te = [];
function Ie(e) {
  const t = e.chains;
  return L(te, t) ? te : ((te = t), t);
}
function It(e, t = {}) {
  try {
    return e.getClient(t);
  } catch {
    return;
  }
}
let z = [];
function he(e) {
  const t = [...e.state.connections.values()];
  return e.state.status === "reconnecting" || L(z, t) ? z : ((z = t), t);
}
let V = [];
function Se(e) {
  const t = e.connectors;
  return V.length === t.length && V.every((n, i) => n === t[i])
    ? V
    : ((V = t), t);
}
function St(e, t) {
  const { chainId: n, ...i } = t,
    r = e.getClient({ chainId: n });
  return W(r, et, "getEnsAvatar")(i);
}
function _t(e, t) {
  const { chainId: n, ...i } = t,
    r = e.getClient({ chainId: n });
  return W(r, tt, "getEnsName")(i);
}
function le(e, t = {}) {
  return It(e, t)?.extend(nt);
}
let ne = !1;
async function Pt(e, t = {}) {
  if (ne) return [];
  ((ne = !0),
    e.setState((s) => ({
      ...s,
      status: s.current ? "reconnecting" : "connecting",
    })));
  const n = [];
  if (t.connectors?.length)
    for (const s of t.connectors) {
      let a;
      (typeof s == "function" ? (a = e._internal.connectors.setup(s)) : (a = s),
        n.push(a));
    }
  else n.push(...e.connectors);
  let i;
  try {
    i = await e.storage?.getItem("recentConnectorId");
  } catch {}
  const r = {};
  for (const [, s] of e.state.connections) r[s.connector.id] = 1;
  i && (r[i] = 0);
  const c =
    Object.keys(r).length > 0
      ? [...n].sort((s, a) => (r[s.id] ?? 10) - (r[a.id] ?? 10))
      : n;
  let o = !1;
  const u = [],
    d = [];
  for (const s of c) {
    const a = await s.getProvider().catch(() => {});
    if (!a || d.some((l) => l === a) || !(await s.isAuthorized())) continue;
    const h = await s.connect({ isReconnecting: !0 }).catch(() => null);
    h &&
      (s.emitter.off("connect", e._internal.events.connect),
      s.emitter.on("change", e._internal.events.change),
      s.emitter.on("disconnect", e._internal.events.disconnect),
      e.setState((l) => {
        const C = new Map(o ? l.connections : new Map()).set(s.uid, {
          accounts: h.accounts,
          chainId: h.chainId,
          connector: s,
        });
        return { ...l, current: o ? l.current : s.uid, connections: C };
      }),
      u.push({ accounts: h.accounts, chainId: h.chainId, connector: s }),
      d.push(a),
      (o = !0));
  }
  return (
    (e.state.status === "reconnecting" || e.state.status === "connecting") &&
      (o
        ? e.setState((s) => ({ ...s, status: "connected" }))
        : e.setState((s) => ({
            ...s,
            connections: new Map(),
            current: null,
            status: "disconnected",
          }))),
    (ne = !1),
    u
  );
}
async function At(e, t) {
  const { account: n, connector: i, ...r } = t;
  let c;
  return (
    typeof n == "object" && n.type === "local"
      ? (c = e.getClient())
      : (c = await wt(e, { account: n, connector: i })),
    W(c, it, "signMessage")({ ...r, ...(n ? { account: n } : {}) })
  );
}
class j extends N {
  constructor() {
    (super("Provider not found."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ProviderNotFoundError",
      }));
  }
}
class Et extends N {
  constructor({ connector: t }) {
    (super(`"${t.name}" does not support programmatic chain switching.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SwitchChainNotSupportedError",
      }));
  }
}
async function Ot(e, t) {
  const { addEthereumChainParameter: n, chainId: i } = t,
    r = e.state.connections.get(t.connector?.uid ?? e.state.current);
  if (r) {
    const o = r.connector;
    if (!o.switchChain) throw new Et({ connector: o });
    return await o.switchChain({ addEthereumChainParameter: n, chainId: i });
  }
  const c = e.chains.find((o) => o.id === i);
  if (!c) throw new $();
  return (e.setState((o) => ({ ...o, chainId: i })), c);
}
function De(e, t) {
  const { onChange: n } = t;
  return e.subscribe(() => Ue(e), n, {
    equalityFn(i, r) {
      const { connector: c, ...o } = i,
        { connector: u, ...d } = r;
      return L(o, d) && c?.id === u?.id && c?.uid === u?.uid;
    },
  });
}
function Mt(e, t) {
  const { onChange: n } = t;
  return e.subscribe((i) => i.chainId, n);
}
function jt(e, t) {
  const { onChange: n } = t;
  return e.subscribe(() => he(e), n, { equalityFn: L });
}
function kt(e, t) {
  const { onChange: n } = t;
  return e._internal.connectors.subscribe((i, r) => {
    n(Object.values(i), r);
  });
}
function qt(e, t) {
  const { onChange: n } = t;
  return e.subscribe(() => le(e), n, {
    equalityFn(i, r) {
      return i?.uid === r?.uid;
    },
  });
}
function Pn(e) {
  return e;
}
pe.type = "injected";
function pe(e = {}) {
  const { shimDisconnect: t = !0, unstable_shimAsyncInject: n } = e;
  function i() {
    const d = e.target;
    if (typeof d == "function") {
      const s = d();
      if (s) return s;
    }
    return typeof d == "object"
      ? d
      : typeof d == "string"
        ? {
            ...(Ut[d] ?? {
              id: d,
              name: `${d[0].toUpperCase()}${d.slice(1)}`,
              provider: `is${d[0].toUpperCase()}${d.slice(1)}`,
            }),
          }
        : {
            id: "injected",
            name: "Injected",
            provider(s) {
              return s?.ethereum;
            },
          };
  }
  let r, c, o, u;
  return (d) => ({
    get icon() {
      return i().icon;
    },
    get id() {
      return i().id;
    },
    get name() {
      return i().name;
    },
    get supportsSimulation() {
      return !0;
    },
    type: pe.type,
    async setup() {
      const s = await this.getProvider();
      s?.on &&
        e.target &&
        (o || ((o = this.onConnect.bind(this)), s.on("connect", o)),
        r ||
          ((r = this.onAccountsChanged.bind(this)),
          s.on("accountsChanged", r)));
    },
    async connect({ chainId: s, isReconnecting: a, withCapabilities: f } = {}) {
      const h = await this.getProvider();
      if (!h) throw new j();
      let l = [];
      if (a) l = await this.getAccounts().catch(() => []);
      else if (t)
        try {
          ((l = (
            await h.request({
              method: "wallet_requestPermissions",
              params: [{ eth_accounts: {} }],
            })
          )[0]?.caveats?.[0]?.value?.map((p) => E(p))),
            l.length > 0 && (l = await this.getAccounts()));
        } catch (C) {
          const p = C;
          if (p.code === P.code) throw new P(p);
          if (p.code === F.code) throw p;
        }
      try {
        (!l?.length &&
          !a &&
          (l = (await h.request({ method: "eth_requestAccounts" })).map((w) =>
            E(w)
          )),
          o && (h.removeListener("connect", o), (o = void 0)),
          r ||
            ((r = this.onAccountsChanged.bind(this)),
            h.on("accountsChanged", r)),
          c || ((c = this.onChainChanged.bind(this)), h.on("chainChanged", c)),
          u || ((u = this.onDisconnect.bind(this)), h.on("disconnect", u)));
        let C = await this.getChainId();
        return (
          s &&
            C !== s &&
            (C =
              (
                await this.switchChain({ chainId: s }).catch((w) => {
                  if (w.code === P.code) throw w;
                  return { id: C };
                })
              )?.id ?? C),
          t && (await d.storage?.removeItem(`${this.id}.disconnected`)),
          e.target || (await d.storage?.setItem("injected.connected", !0)),
          {
            accounts: f ? l.map((p) => ({ address: p, capabilities: {} })) : l,
            chainId: C,
          }
        );
      } catch (C) {
        const p = C;
        throw p.code === P.code ? new P(p) : p.code === F.code ? new F(p) : p;
      }
    },
    async disconnect() {
      const s = await this.getProvider();
      if (!s) throw new j();
      (c && (s.removeListener("chainChanged", c), (c = void 0)),
        u && (s.removeListener("disconnect", u), (u = void 0)),
        o || ((o = this.onConnect.bind(this)), s.on("connect", o)));
      try {
        await me(
          () =>
            s.request({
              method: "wallet_revokePermissions",
              params: [{ eth_accounts: {} }],
            }),
          { timeout: 100 }
        );
      } catch {}
      (t && (await d.storage?.setItem(`${this.id}.disconnected`, !0)),
        e.target || (await d.storage?.removeItem("injected.connected")));
    },
    async getAccounts() {
      const s = await this.getProvider();
      if (!s) throw new j();
      return (await s.request({ method: "eth_accounts" })).map((f) => E(f));
    },
    async getChainId() {
      const s = await this.getProvider();
      if (!s) throw new j();
      const a = await s.request({ method: "eth_chainId" });
      return Number(a);
    },
    async getProvider() {
      if (typeof window > "u") return;
      let s;
      const a = i();
      return (
        typeof a.provider == "function"
          ? (s = a.provider(window))
          : typeof a.provider == "string"
            ? (s = G(window, a.provider))
            : (s = a.provider),
        s &&
          !s.removeListener &&
          ("off" in s && typeof s.off == "function"
            ? (s.removeListener = s.off)
            : (s.removeListener = () => {})),
        s
      );
    },
    async isAuthorized() {
      try {
        if (
          (t && (await d.storage?.getItem(`${this.id}.disconnected`))) ||
          (!e.target && !(await d.storage?.getItem("injected.connected")))
        )
          return !1;
        if (!(await this.getProvider())) {
          if (n !== void 0 && n !== !1) {
            const h = async () => (
                typeof window < "u" &&
                  window.removeEventListener("ethereum#initialized", h),
                !!(await this.getProvider())
              ),
              l = typeof n == "number" ? n : 1e3;
            if (
              await Promise.race([
                ...(typeof window < "u"
                  ? [
                      new Promise((p) =>
                        window.addEventListener(
                          "ethereum#initialized",
                          () => p(h()),
                          { once: !0 }
                        )
                      ),
                    ]
                  : []),
                new Promise((p) => setTimeout(() => p(h()), l)),
              ])
            )
              return !0;
          }
          throw new j();
        }
        return !!(await re(() => this.getAccounts())).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: s, chainId: a }) {
      const f = await this.getProvider();
      if (!f) throw new j();
      const h = d.chains.find((C) => C.id === a);
      if (!h) throw new x(new $());
      const l = new Promise((C) => {
        const p = (w) => {
          "chainId" in w &&
            w.chainId === a &&
            (d.emitter.off("change", p), C());
        };
        d.emitter.on("change", p);
      });
      try {
        return (
          await Promise.all([
            f
              .request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: D(a) }],
              })
              .then(async () => {
                (await this.getChainId()) === a &&
                  d.emitter.emit("change", { chainId: a });
              }),
            l,
          ]),
          h
        );
      } catch (C) {
        const p = C;
        if (p.code === 4902 || p?.data?.originalError?.code === 4902)
          try {
            const { default: w, ...v } = h.blockExplorers ?? {};
            let S;
            s?.blockExplorerUrls
              ? (S = s.blockExplorerUrls)
              : w && (S = [w.url, ...Object.values(v).map((m) => m.url)]);
            let I;
            s?.rpcUrls?.length
              ? (I = s.rpcUrls)
              : (I = [h.rpcUrls.default?.http[0] ?? ""]);
            const A = {
              blockExplorerUrls: S,
              chainId: D(a),
              chainName: s?.chainName ?? h.name,
              iconUrls: s?.iconUrls,
              nativeCurrency: s?.nativeCurrency ?? h.nativeCurrency,
              rpcUrls: I,
            };
            return (
              await Promise.all([
                f
                  .request({ method: "wallet_addEthereumChain", params: [A] })
                  .then(async () => {
                    if ((await this.getChainId()) === a)
                      d.emitter.emit("change", { chainId: a });
                    else
                      throw new P(
                        new Error("User rejected switch after adding network.")
                      );
                  }),
                l,
              ]),
              h
            );
          } catch (w) {
            throw new P(w);
          }
        throw p.code === P.code ? new P(p) : new x(p);
      }
    },
    async onAccountsChanged(s) {
      if (s.length === 0) this.onDisconnect();
      else if (d.emitter.listenerCount("connect")) {
        const a = (await this.getChainId()).toString();
        (this.onConnect({ chainId: a }),
          t && (await d.storage?.removeItem(`${this.id}.disconnected`)));
      } else d.emitter.emit("change", { accounts: s.map((a) => E(a)) });
    },
    onChainChanged(s) {
      const a = Number(s);
      d.emitter.emit("change", { chainId: a });
    },
    async onConnect(s) {
      const a = await this.getAccounts();
      if (a.length === 0) return;
      const f = Number(s.chainId);
      d.emitter.emit("connect", { accounts: a, chainId: f });
      const h = await this.getProvider();
      h &&
        (o && (h.removeListener("connect", o), (o = void 0)),
        r ||
          ((r = this.onAccountsChanged.bind(this)), h.on("accountsChanged", r)),
        c || ((c = this.onChainChanged.bind(this)), h.on("chainChanged", c)),
        u || ((u = this.onDisconnect.bind(this)), h.on("disconnect", u)));
    },
    async onDisconnect(s) {
      const a = await this.getProvider();
      (s && s.code === 1013 && a && (await this.getAccounts()).length) ||
        (d.emitter.emit("disconnect"),
        a &&
          (c && (a.removeListener("chainChanged", c), (c = void 0)),
          u && (a.removeListener("disconnect", u), (u = void 0)),
          o || ((o = this.onConnect.bind(this)), a.on("connect", o))));
    },
  });
}
const Ut = {
  coinbaseWallet: {
    id: "coinbaseWallet",
    name: "Coinbase Wallet",
    provider(e) {
      return e?.coinbaseWalletExtension
        ? e.coinbaseWalletExtension
        : G(e, "isCoinbaseWallet");
    },
  },
  metaMask: {
    id: "metaMask",
    name: "MetaMask",
    provider(e) {
      return G(e, (t) => {
        if (!t.isMetaMask || (t.isBraveWallet && !t._events && !t._state))
          return !1;
        const n = [
          "isApexWallet",
          "isAvalanche",
          "isBitKeep",
          "isBlockWallet",
          "isKuCoinWallet",
          "isMathWallet",
          "isOkxWallet",
          "isOKExWallet",
          "isOneInchIOSWallet",
          "isOneInchAndroidWallet",
          "isOpera",
          "isPhantom",
          "isPortal",
          "isRabby",
          "isTokenPocket",
          "isTokenary",
          "isUniswapWallet",
          "isZerion",
        ];
        for (const i of n) if (t[i]) return !1;
        return !0;
      });
    },
  },
  phantom: {
    id: "phantom",
    name: "Phantom",
    provider(e) {
      return e?.phantom?.ethereum ? e.phantom?.ethereum : G(e, "isPhantom");
    },
  },
};
function G(e, t) {
  function n(r) {
    return typeof t == "function" ? t(r) : typeof t == "string" ? r[t] : !0;
  }
  const i = e.ethereum;
  if (i?.providers) return i.providers.find((r) => n(r));
  if (i && n(i)) return i;
}
class Dt {
  constructor(t) {
    (Object.defineProperty(this, "uid", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t,
    }),
      Object.defineProperty(this, "_emitter", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new ot(),
      }));
  }
  on(t, n) {
    this._emitter.on(t, n);
  }
  once(t, n) {
    this._emitter.once(t, n);
  }
  off(t, n) {
    this._emitter.off(t, n);
  }
  emit(t, ...n) {
    const i = n[0];
    this._emitter.emit(t, { uid: this.uid, ...i });
  }
  listenerCount(t) {
    return this._emitter.listenerCount(t);
  }
}
function Nt(e) {
  return new Dt(e);
}
function xt(e, t) {
  return JSON.parse(e, (n, i) => {
    let r = i;
    return (
      r?.__type === "bigint" && (r = BigInt(r.value)),
      r?.__type === "Map" && (r = new Map(r.value)),
      t?.(n, r) ?? r
    );
  });
}
function _e(e, t) {
  return e.slice(0, t).join(".") || ".";
}
function Pe(e, t) {
  const { length: n } = e;
  for (let i = 0; i < n; ++i) if (e[i] === t) return i + 1;
  return 0;
}
function Rt(e, t) {
  const n = typeof e == "function",
    i = typeof t == "function",
    r = [],
    c = [];
  return function (u, d) {
    if (typeof d == "object")
      if (r.length) {
        const s = Pe(r, this);
        (s === 0 ? (r[r.length] = this) : (r.splice(s), c.splice(s)),
          (c[c.length] = u));
        const a = Pe(r, d);
        if (a !== 0)
          return i ? t.call(this, u, d, _e(c, a)) : `[ref=${_e(c, a)}]`;
      } else ((r[0] = d), (c[0] = u));
    return n ? e.call(this, u, d) : d;
  };
}
function $t(e, t, n, i) {
  return JSON.stringify(
    e,
    Rt((r, c) => {
      let o = c;
      return (
        typeof o == "bigint" && (o = { __type: "bigint", value: c.toString() }),
        o instanceof Map &&
          (o = { __type: "Map", value: Array.from(c.entries()) }),
        t?.(r, o) ?? o
      );
    }, i),
    n ?? void 0
  );
}
function Lt(e) {
  const {
    deserialize: t = xt,
    key: n = "wagmi",
    serialize: i = $t,
    storage: r = Ne,
  } = e;
  function c(o) {
    return o instanceof Promise ? o.then((u) => u).catch(() => null) : o;
  }
  return {
    ...r,
    key: n,
    async getItem(o, u) {
      const d = r.getItem(`${n}.${o}`),
        s = await c(d);
      return s ? (t(s) ?? null) : (u ?? null);
    },
    async setItem(o, u) {
      const d = `${n}.${o}`;
      u === null ? await c(r.removeItem(d)) : await c(r.setItem(d, i(u)));
    },
    async removeItem(o) {
      await c(r.removeItem(`${n}.${o}`));
    },
  };
}
const Ne = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
function Wt() {
  const e =
    typeof window < "u" && window.localStorage ? window.localStorage : Ne;
  return {
    getItem(t) {
      return e.getItem(t);
    },
    removeItem(t) {
      e.removeItem(t);
    },
    setItem(t, n) {
      try {
        e.setItem(t, n);
      } catch {}
    },
  };
}
const fe = 256;
let Q = fe,
  H;
function Tt(e = 11) {
  if (!H || Q + e > fe * 2) {
    ((H = ""), (Q = 0));
    for (let t = 0; t < fe; t++)
      H += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
  }
  return H.substring(Q, Q++ + e);
}
function An(e) {
  const {
      multiInjectedProviderDiscovery: t = !0,
      storage: n = Lt({ storage: Wt() }),
      syncConnectedChain: i = !0,
      ssr: r = !1,
      ...c
    } = e,
    o = typeof window < "u" && t ? ct() : void 0,
    u = ee(() => c.chains),
    d = ee(() => {
      const m = [],
        g = new Set();
      for (const y of c.connectors ?? []) {
        const _ = s(y);
        if ((m.push(_), !r && _.rdns)) {
          const b = typeof _.rdns == "string" ? [_.rdns] : _.rdns;
          for (const k of b) g.add(k);
        }
      }
      if (!r && o) {
        const y = o.getProviders();
        for (const _ of y) g.has(_.info.rdns) || m.push(s(a(_)));
      }
      return m;
    });
  function s(m) {
    const g = Nt(Tt()),
      y = {
        ...m({
          emitter: g,
          chains: u.getState(),
          storage: n,
          transports: c.transports,
        }),
        emitter: g,
        uid: g.uid,
      };
    return (g.on("connect", I), y.setup?.(), y);
  }
  function a(m) {
    const { info: g } = m,
      y = m.provider;
    return pe({ target: { ...g, id: g.rdns, provider: y } });
  }
  const f = new Map();
  function h(m = {}) {
    const g = m.chainId ?? w.getState().chainId,
      y = u.getState().find((b) => b.id === g);
    if (m.chainId && !y) throw new $();
    {
      const b = f.get(w.getState().chainId);
      if (b && !y) return b;
      if (!y) throw new $();
    }
    {
      const b = f.get(g);
      if (b) return b;
    }
    let _;
    if (c.client) _ = c.client({ chain: y });
    else {
      const b = y.id,
        k = u.getState().map((q) => q.id),
        U = {},
        Y = Object.entries(c);
      for (const [q, R] of Y)
        if (
          !(
            q === "chains" ||
            q === "client" ||
            q === "connectors" ||
            q === "transports"
          )
        )
          if (typeof R == "object")
            if (b in R) U[q] = R[b];
            else {
              if (k.some((Ce) => Ce in R)) continue;
              U[q] = R;
            }
          else U[q] = R;
      _ = Ee({
        ...U,
        chain: y,
        batch: U.batch ?? { multicall: !0 },
        transport: (q) => c.transports[b]({ ...q, connectors: d }),
      });
    }
    return (f.set(g, _), _);
  }
  function l() {
    return {
      chainId: u.getState()[0].id,
      connections: new Map(),
      current: null,
      status: "disconnected",
    };
  }
  let C;
  const p = "0.0.0-canary-";
  J.startsWith(p)
    ? (C = Number.parseInt(J.replace(p, ""), 10))
    : (C = Number.parseInt(J.split(".")[0] ?? "0", 10));
  const w = ee(
    Fe(
      n
        ? Be(l, {
            migrate(m, g) {
              if (g === C) return m;
              const y = l(),
                _ = v(m, y.chainId);
              return { ...y, chainId: _ };
            },
            name: "store",
            partialize(m) {
              return {
                connections: {
                  __type: "Map",
                  value: Array.from(m.connections.entries()).map(([g, y]) => {
                    const { id: _, name: b, type: k, uid: U } = y.connector;
                    return [
                      g,
                      { ...y, connector: { id: _, name: b, type: k, uid: U } },
                    ];
                  }),
                },
                chainId: m.chainId,
                current: m.current,
              };
            },
            merge(m, g) {
              typeof m == "object" && m && "status" in m && delete m.status;
              const y = v(m, g.chainId);
              return { ...g, ...m, chainId: y };
            },
            skipHydration: r,
            storage: n,
            version: C,
          })
        : l
    )
  );
  w.setState(l());
  function v(m, g) {
    return m &&
      typeof m == "object" &&
      "chainId" in m &&
      typeof m.chainId == "number" &&
      u.getState().some((y) => y.id === m.chainId)
      ? m.chainId
      : g;
  }
  (i &&
    w.subscribe(
      ({ connections: m, current: g }) => (g ? m.get(g)?.chainId : void 0),
      (m) => {
        if (u.getState().some((y) => y.id === m))
          return w.setState((y) => ({ ...y, chainId: m ?? y.chainId }));
      }
    ),
    o?.subscribe((m) => {
      const g = new Set(),
        y = new Set();
      for (const b of d.getState())
        if ((g.add(b.id), b.rdns)) {
          const k = typeof b.rdns == "string" ? [b.rdns] : b.rdns;
          for (const U of k) y.add(U);
        }
      const _ = [];
      for (const b of m) {
        if (y.has(b.info.rdns)) continue;
        const k = s(a(b));
        g.has(k.id) || _.push(k);
      }
      (n && !w.persist.hasHydrated()) || d.setState((b) => [...b, ..._], !0);
    }));
  function S(m) {
    w.setState((g) => {
      const y = g.connections.get(m.uid);
      return y
        ? {
            ...g,
            connections: new Map(g.connections).set(m.uid, {
              accounts: m.accounts ?? y.accounts,
              chainId: m.chainId ?? y.chainId,
              connector: y.connector,
            }),
          }
        : g;
    });
  }
  function I(m) {
    w.getState().status === "connecting" ||
      w.getState().status === "reconnecting" ||
      w.setState((g) => {
        const y = d.getState().find((_) => _.uid === m.uid);
        return y
          ? (y.emitter.listenerCount("connect") && y.emitter.off("connect", S),
            y.emitter.listenerCount("change") || y.emitter.on("change", S),
            y.emitter.listenerCount("disconnect") ||
              y.emitter.on("disconnect", A),
            {
              ...g,
              connections: new Map(g.connections).set(m.uid, {
                accounts: m.accounts,
                chainId: m.chainId,
                connector: y,
              }),
              current: m.uid,
              status: "connected",
            })
          : g;
      });
  }
  function A(m) {
    w.setState((g) => {
      const y = g.connections.get(m.uid);
      if (y) {
        const b = y.connector;
        (b.emitter.listenerCount("change") &&
          y.connector.emitter.off("change", S),
          b.emitter.listenerCount("disconnect") &&
            y.connector.emitter.off("disconnect", A),
          b.emitter.listenerCount("connect") ||
            y.connector.emitter.on("connect", I));
      }
      if ((g.connections.delete(m.uid), g.connections.size === 0))
        return {
          ...g,
          connections: new Map(),
          current: null,
          status: "disconnected",
        };
      const _ = g.connections.values().next().value;
      return {
        ...g,
        connections: new Map(g.connections),
        current: _.connector.uid,
      };
    });
  }
  return {
    get chains() {
      return u.getState();
    },
    get connectors() {
      return d.getState();
    },
    storage: n,
    getClient: h,
    get state() {
      return w.getState();
    },
    setState(m) {
      let g;
      typeof m == "function" ? (g = m(w.getState())) : (g = m);
      const y = l();
      (typeof g != "object" && (g = y),
        Object.keys(y).some((b) => !(b in g)) && (g = y),
        w.setState(g, !0));
    },
    subscribe(m, g, y) {
      return w.subscribe(
        m,
        g,
        y ? { ...y, fireImmediately: y.emitImmediately } : void 0
      );
    },
    _internal: {
      mipd: o,
      async revalidate() {
        const m = w.getState(),
          g = m.connections;
        let y = m.current;
        for (const [, _] of g) {
          const b = _.connector;
          (b.isAuthorized && (await b.isAuthorized())) ||
            (g.delete(b.uid), y === b.uid && (y = null));
        }
        w.setState((_) => ({ ..._, connections: g, current: y }));
      },
      store: w,
      ssr: !!r,
      syncConnectedChain: i,
      transports: c.transports,
      chains: {
        setState(m) {
          const g = typeof m == "function" ? m(u.getState()) : m;
          if (g.length !== 0) return u.setState(g, !0);
        },
        subscribe(m) {
          return u.subscribe(m);
        },
      },
      connectors: {
        providerDetailToConnector: a,
        setup: s,
        setState(m) {
          return d.setState(typeof m == "function" ? m(d.getState()) : m, !0);
        },
        subscribe(m) {
          return d.subscribe(m);
        },
      },
      events: { change: S, connect: I, disconnect: A },
    },
  };
}
function Kt(e, t) {
  const { initialState: n, reconnectOnMount: i } = t;
  return (
    n &&
      !e._internal.store.persist.hasHydrated() &&
      e.setState({
        ...n,
        chainId: e.chains.some((r) => r.id === n.chainId)
          ? n.chainId
          : e.chains[0].id,
        connections: i ? n.connections : new Map(),
        status: i ? "reconnecting" : "disconnected",
      }),
    {
      async onMount() {
        (e._internal.ssr &&
          (await e._internal.store.persist.rehydrate(),
          e._internal.mipd &&
            e._internal.connectors.setState((r) => {
              const c = new Set();
              for (const d of r ?? [])
                if (d.rdns) {
                  const s = Array.isArray(d.rdns) ? d.rdns : [d.rdns];
                  for (const a of s) c.add(a);
                }
              const o = [],
                u = e._internal.mipd?.getProviders() ?? [];
              for (const d of u) {
                if (c.has(d.info.rdns)) continue;
                const s = e._internal.connectors.providerDetailToConnector(d),
                  a = e._internal.connectors.setup(s);
                o.push(a);
              }
              return [...r, ...o];
            })),
          i
            ? Pt(e)
            : e.storage &&
              e.setState((r) => ({ ...r, connections: new Map() })));
      },
    }
  );
}
function xe(e) {
  const { chain: t } = e,
    n = t.rpcUrls.default.http[0];
  if (!e.transports) return [n];
  const i = e.transports?.[t.id]?.({ chain: t });
  return (i?.value?.transports || [i]).map(({ value: c }) => c?.url || n);
}
function Ft(e) {
  const {
      children: t,
      config: n,
      initialState: i,
      reconnectOnMount: r = !0,
    } = e,
    { onMount: c } = Kt(n, { initialState: i, reconnectOnMount: r });
  n._internal.ssr || c();
  const o = O.useRef(!0);
  return (
    O.useEffect(() => {
      if (o.current && n._internal.ssr)
        return (
          c(),
          () => {
            o.current = !1;
          }
        );
    }, []),
    t
  );
}
const Re = O.createContext(void 0);
function En(e) {
  const { children: t, config: n } = e,
    i = { value: n };
  return O.createElement(Ft, e, O.createElement(Re.Provider, i, t));
}
const Bt = "2.19.2",
  zt = () => `wagmi@${Bt}`;
class Vt extends N {
  constructor() {
    (super(...arguments),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "WagmiError",
      }));
  }
  get docsBaseUrl() {
    return "https://wagmi.sh/react";
  }
  get version() {
    return zt();
  }
}
class Qt extends Vt {
  constructor() {
    (super("`useConfig` must be used within `WagmiProvider`.", {
      docsPath: "/api/WagmiProvider",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "WagmiProviderNotFoundError",
      }));
  }
}
function M(e = {}) {
  const t = e.config ?? O.useContext(Re);
  if (!t) throw new Qt();
  return t;
}
function Ht(e, t) {
  const { onChange: n } = t;
  return e._internal.chains.subscribe((i, r) => {
    n(i, r);
  });
}
const ie = (e) => typeof e == "object" && !Array.isArray(e);
function Jt(e, t, n = t, i = L) {
  const r = O.useRef([]),
    c = Me.useSyncExternalStoreWithSelector(
      e,
      t,
      n,
      (o) => o,
      (o, u) => {
        if (ie(o) && ie(u) && r.current.length) {
          for (const d of r.current) if (!i(o[d], u[d])) return !1;
          return !0;
        }
        return i(o, u);
      }
    );
  return O.useMemo(() => {
    if (ie(c)) {
      const o = { ...c };
      let u = {};
      for (const [d, s] of Object.entries(o))
        u = {
          ...u,
          [d]: {
            configurable: !1,
            enumerable: !0,
            get: () => (r.current.includes(d) || r.current.push(d), s),
          },
        };
      return (Object.defineProperties(o, u), o);
    }
    return c;
  }, [c]);
}
function On(e = {}) {
  const t = M(e);
  return Jt(
    (n) => De(t, { onChange: n }),
    () => Ue(t)
  );
}
function Mn(e = {}) {
  const { onConnect: t, onDisconnect: n } = e,
    i = M(e);
  O.useEffect(
    () =>
      De(i, {
        onChange(r, c) {
          if (
            (c.status === "reconnecting" ||
              (c.status === "connecting" && c.address === void 0)) &&
            r.status === "connected"
          ) {
            const {
                address: o,
                addresses: u,
                chain: d,
                chainId: s,
                connector: a,
              } = r,
              f = c.status === "reconnecting" || c.status === void 0;
            t?.({
              address: o,
              addresses: u,
              chain: d,
              chainId: s,
              connector: a,
              isReconnected: f,
            });
          } else
            c.status === "connected" && r.status === "disconnected" && n?.();
        },
      }),
    [i, t, n]
  );
}
function Gt(e) {
  return JSON.stringify(e, (t, n) =>
    Zt(n)
      ? Object.keys(n)
          .sort()
          .reduce((i, r) => ((i[r] = n[r]), i), {})
      : typeof n == "bigint"
        ? n.toString()
        : n
  );
}
function Zt(e) {
  if (!Ae(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!Ae(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Ae(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function we(e) {
  const {
    _defaulted: t,
    behavior: n,
    gcTime: i,
    initialData: r,
    initialDataUpdatedAt: c,
    maxPages: o,
    meta: u,
    networkMode: d,
    queryFn: s,
    queryHash: a,
    queryKey: f,
    queryKeyHashFn: h,
    retry: l,
    retryDelay: C,
    structuralSharing: p,
    getPreviousPageParam: w,
    getNextPageParam: v,
    initialPageParam: S,
    _optimisticResults: I,
    enabled: A,
    notifyOnChangeProps: m,
    placeholderData: g,
    refetchInterval: y,
    refetchIntervalInBackground: _,
    refetchOnMount: b,
    refetchOnReconnect: k,
    refetchOnWindowFocus: U,
    retryOnMount: Y,
    select: q,
    staleTime: R,
    suspense: Te,
    throwOnError: Ce,
    config: wn,
    connector: gn,
    query: yn,
    ...Ke
  } = e;
  return Ke;
}
function Xt(e) {
  return {
    mutationFn(t) {
      return pt(e, t);
    },
    mutationKey: ["connect"],
  };
}
function Yt(e) {
  return {
    mutationFn(t) {
      return gt(e, t);
    },
    mutationKey: ["disconnect"],
  };
}
function en(e, t = {}) {
  return {
    async queryFn({ queryKey: n }) {
      const { address: i, scopeKey: r, ...c } = n[1];
      if (!i) throw new Error("address is required");
      return (await vt(e, { ...c, address: i })) ?? null;
    },
    queryKey: tn(t),
  };
}
function tn(e = {}) {
  return ["balance", we(e)];
}
function nn(e, t = {}) {
  return {
    async queryFn({ queryKey: n }) {
      const { name: i, scopeKey: r, ...c } = n[1];
      if (!i) throw new Error("name is required");
      return St(e, { ...c, name: i });
    },
    queryKey: rn(t),
  };
}
function rn(e = {}) {
  return ["ensAvatar", we(e)];
}
function on(e, t = {}) {
  return {
    async queryFn({ queryKey: n }) {
      const { address: i, scopeKey: r, ...c } = n[1];
      if (!i) throw new Error("address is required");
      return _t(e, { ...c, address: i });
    },
    queryKey: cn(t),
  };
}
function cn(e = {}) {
  return ["ensName", we(e)];
}
function sn(e) {
  return {
    mutationFn(t) {
      return At(e, t);
    },
    mutationKey: ["signMessage"],
  };
}
function an(e) {
  return {
    mutationFn(t) {
      return Ot(e, t);
    },
    mutationKey: ["switchChain"],
  };
}
function ge(e) {
  const t = st({ ...e, queryKeyHashFn: Gt });
  return ((t.queryKey = e.queryKey), t);
}
function ye(e = {}) {
  const t = M(e);
  return O.useSyncExternalStore(
    (n) => Mt(t, { onChange: n }),
    () => ve(t),
    () => ve(t)
  );
}
function jn(e = {}) {
  const { address: t, query: n = {} } = e,
    i = M(e),
    r = ye({ config: i }),
    c = en(i, { ...e, chainId: e.chainId ?? r }),
    o = !!(t && (n.enabled ?? !0));
  return ge({ ...n, ...c, enabled: o });
}
function un(e = {}) {
  const t = M(e);
  return O.useSyncExternalStore(
    (n) => Ht(t, { onChange: n }),
    () => Ie(t),
    () => Ie(t)
  );
}
function dn(e = {}) {
  const t = M(e);
  return O.useSyncExternalStore(
    (n) => kt(t, { onChange: n }),
    () => Se(t),
    () => Se(t)
  );
}
function kn(e = {}) {
  const { mutation: t } = e,
    n = M(e),
    i = Xt(n),
    { mutate: r, mutateAsync: c, ...o } = X({ ...t, ...i });
  return (
    O.useEffect(
      () =>
        n.subscribe(
          ({ status: u }) => u,
          (u, d) => {
            d === "connected" && u === "disconnected" && o.reset();
          }
        ),
      [n, o.reset]
    ),
    { ...o, connect: r, connectAsync: c, connectors: dn({ config: n }) }
  );
}
function hn(e = {}) {
  const t = M(e);
  return O.useSyncExternalStore(
    (n) => jt(t, { onChange: n }),
    () => he(t),
    () => he(t)
  );
}
function qn(e = {}) {
  const { mutation: t } = e,
    n = M(e),
    i = Yt(n),
    { mutate: r, mutateAsync: c, ...o } = X({ ...t, ...i });
  return {
    ...o,
    connectors: hn({ config: n }).map((u) => u.connector),
    disconnect: r,
    disconnectAsync: c,
  };
}
function Un(e = {}) {
  const { name: t, query: n = {} } = e,
    i = M(e),
    r = ye({ config: i }),
    c = nn(i, { ...e, chainId: e.chainId ?? r }),
    o = !!(t && (n.enabled ?? !0));
  return ge({ ...n, ...c, enabled: o });
}
function Dn(e = {}) {
  const { address: t, query: n = {} } = e,
    i = M(e),
    r = ye({ config: i }),
    c = on(i, { ...e, chainId: e.chainId ?? r }),
    o = !!(t && (n.enabled ?? !0));
  return ge({ ...n, ...c, enabled: o });
}
function Nn(e = {}) {
  const t = M(e);
  return Me.useSyncExternalStoreWithSelector(
    (n) => qt(t, { onChange: n }),
    () => le(t, e),
    () => le(t, e),
    (n) => n,
    (n, i) => n?.uid === i?.uid
  );
}
function xn(e = {}) {
  const { mutation: t } = e,
    n = M(e),
    i = sn(n),
    { mutate: r, mutateAsync: c, ...o } = X({ ...t, ...i });
  return { ...o, signMessage: r, signMessageAsync: c };
}
function Rn(e = {}) {
  const { mutation: t } = e,
    n = M(e),
    i = an(n),
    { mutate: r, mutateAsync: c, ...o } = X({ ...t, ...i });
  return {
    ...o,
    chains: un({ config: n }),
    switchChain: r,
    switchChainAsync: c,
  };
}
function $n(e = {}) {
  let t, n, i, r;
  return (c) => ({
    id: "baseAccount",
    name: "Base Account",
    rdns: "app.base.account",
    type: "baseAccount",
    async connect({ chainId: o, withCapabilities: u } = {}) {
      try {
        const d = await this.getProvider(),
          s = (
            await d.request({ method: "eth_requestAccounts", params: [] })
          ).map((f) => E(f));
        (n ||
          ((n = this.onAccountsChanged.bind(this)), d.on("accountsChanged", n)),
          i || ((i = this.onChainChanged.bind(this)), d.on("chainChanged", i)),
          r || ((r = this.onDisconnect.bind(this)), d.on("disconnect", r)));
        let a = await this.getChainId();
        return (
          o &&
            a !== o &&
            (a =
              (
                await this.switchChain({ chainId: o }).catch((h) => {
                  if (h.code === P.code) throw h;
                  return { id: a };
                })
              )?.id ?? a),
          {
            accounts: u ? s.map((f) => ({ address: f, capabilities: {} })) : s,
            chainId: a,
          }
        );
      } catch (d) {
        throw /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
          d.message
        )
          ? new P(d)
          : d;
      }
    },
    async disconnect() {
      const o = await this.getProvider();
      (n && (o.removeListener("accountsChanged", n), (n = void 0)),
        i && (o.removeListener("chainChanged", i), (i = void 0)),
        r && (o.removeListener("disconnect", r), (r = void 0)),
        o.disconnect());
    },
    async getAccounts() {
      return (
        await (await this.getProvider()).request({ method: "eth_accounts" })
      ).map((u) => E(u));
    },
    async getChainId() {
      const u = await (
        await this.getProvider()
      ).request({ method: "eth_chainId" });
      return Number(u);
    },
    async getProvider() {
      if (!t) {
        const o =
            typeof e.preference == "string"
              ? { options: e.preference }
              : { ...e.preference, options: e.preference?.options ?? "all" },
          { createBaseAccountSDK: u } = await B(
            async () => {
              const { createBaseAccountSDK: s } = await import(
                "./vendor-BZZ6DO-t.js"
              ).then((a) => a.bQ);
              return { createBaseAccountSDK: s };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
          );
        t = u({
          ...e,
          appChainIds: c.chains.map((s) => s.id),
          preference: o,
        }).getProvider();
      }
      return t;
    },
    async isAuthorized() {
      try {
        return !!(await this.getAccounts()).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: o, chainId: u }) {
      const d = c.chains.find((a) => a.id === u);
      if (!d) throw new x(new $());
      const s = await this.getProvider();
      try {
        return (
          await s.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: D(d.id) }],
          }),
          d
        );
      } catch (a) {
        if (a.code === 4902)
          try {
            let f;
            o?.blockExplorerUrls
              ? (f = o.blockExplorerUrls)
              : (f = d.blockExplorers?.default.url
                  ? [d.blockExplorers?.default.url]
                  : []);
            let h;
            o?.rpcUrls?.length
              ? (h = o.rpcUrls)
              : (h = [d.rpcUrls.default?.http[0] ?? ""]);
            const l = {
              blockExplorerUrls: f,
              chainId: D(u),
              chainName: o?.chainName ?? d.name,
              iconUrls: o?.iconUrls,
              nativeCurrency: o?.nativeCurrency ?? d.nativeCurrency,
              rpcUrls: h,
            };
            return (
              await s.request({
                method: "wallet_addEthereumChain",
                params: [l],
              }),
              d
            );
          } catch (f) {
            throw new P(f);
          }
        throw new x(a);
      }
    },
    onAccountsChanged(o) {
      o.length === 0
        ? this.onDisconnect()
        : c.emitter.emit("change", { accounts: o.map((u) => E(u)) });
    },
    onChainChanged(o) {
      const u = Number(o);
      c.emitter.emit("change", { chainId: u });
    },
    async onDisconnect(o) {
      c.emitter.emit("disconnect");
      const u = await this.getProvider();
      (n && (u.removeListener("accountsChanged", n), (n = void 0)),
        i && (u.removeListener("chainChanged", i), (i = void 0)),
        r && (u.removeListener("disconnect", r), (r = void 0)));
    },
  });
}
$e.type = "metaMask";
function $e(e = {}) {
  let t, n, i, r, c, o, u, d;
  return (s) => ({
    id: "metaMaskSDK",
    name: "MetaMask",
    rdns: ["io.metamask", "io.metamask.mobile"],
    type: $e.type,
    async setup() {
      const a = await this.getProvider();
      a?.on &&
        (o || ((o = this.onConnect.bind(this)), a.on("connect", o)),
        r ||
          ((r = this.onAccountsChanged.bind(this)),
          a.on("accountsChanged", r)));
    },
    async connect({ chainId: a, isReconnecting: f, withCapabilities: h } = {}) {
      const l = await this.getProvider();
      u || ((u = this.onDisplayUri), l.on("display_uri", u));
      let C = [];
      f && (C = await this.getAccounts().catch(() => []));
      try {
        let p, w;
        C?.length ||
          (e.connectAndSign || e.connectWith
            ? (e.connectAndSign
                ? (p = await t.connectAndSign({ msg: e.connectAndSign }))
                : e.connectWith &&
                  (w = await t.connectWith({
                    method: e.connectWith.method,
                    params: e.connectWith.params,
                  })),
              (C = await this.getAccounts()))
            : (C = (await t.connect()).map((I) => E(I))));
        let v = await this.getChainId();
        return (
          a &&
            v !== a &&
            (v =
              (
                await this.switchChain({ chainId: a }).catch((I) => {
                  if (I.code === P.code) throw I;
                  return { id: v };
                })
              )?.id ?? v),
          u && (l.removeListener("display_uri", u), (u = void 0)),
          p
            ? l.emit("connectAndSign", {
                accounts: C,
                chainId: v,
                signResponse: p,
              })
            : w &&
              l.emit("connectWith", {
                accounts: C,
                chainId: v,
                connectWithResponse: w,
              }),
          o && (l.removeListener("connect", o), (o = void 0)),
          r ||
            ((r = this.onAccountsChanged.bind(this)),
            l.on("accountsChanged", r)),
          c || ((c = this.onChainChanged.bind(this)), l.on("chainChanged", c)),
          d || ((d = this.onDisconnect.bind(this)), l.on("disconnect", d)),
          {
            accounts: h ? C.map((S) => ({ address: S, capabilities: {} })) : C,
            chainId: v,
          }
        );
      } catch (p) {
        const w = p;
        throw w.code === P.code ? new P(w) : w.code === F.code ? new F(w) : w;
      }
    },
    async disconnect() {
      const a = await this.getProvider();
      (c && (a.removeListener("chainChanged", c), (c = void 0)),
        d && (a.removeListener("disconnect", d), (d = void 0)),
        o || ((o = this.onConnect.bind(this)), a.on("connect", o)),
        await t.terminate());
    },
    async getAccounts() {
      return (
        await (await this.getProvider()).request({ method: "eth_accounts" })
      ).map((h) => E(h));
    },
    async getChainId() {
      const a = await this.getProvider(),
        f = a.getChainId() || (await a?.request({ method: "eth_chainId" }));
      return Number(f);
    },
    async getProvider() {
      async function a() {
        const f = await (async () => {
            const { default: p } = await B(
              async () => {
                const { default: w } = await import(
                  "./vendor-BZZ6DO-t.js"
                ).then((v) => v.bR);
                return { default: w };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            );
            return typeof p != "function" && typeof p.default == "function"
              ? p.default
              : p;
          })(),
          h = {};
        for (const p of s.chains)
          h[D(p.id)] = xe({ chain: p, transports: s.transports })?.[0];
        t = new f({
          _source: "wagmi",
          forceDeleteProvider: !1,
          forceInjectProvider: !1,
          injectProvider: !1,
          ...e,
          readonlyRPCMap: h,
          dappMetadata: {
            ...e.dappMetadata,
            name: e.dappMetadata?.name ? e.dappMetadata?.name : "wagmi",
            url: e.dappMetadata?.url
              ? e.dappMetadata?.url
              : typeof window < "u"
                ? window.location.origin
                : "https://wagmi.sh",
          },
          useDeeplink: e.useDeeplink ?? !0,
        });
        const l = await t.init(),
          C = l?.activeProvider ? l.activeProvider : t.getProvider();
        if (!C) throw new j();
        return C;
      }
      return (n || (i || (i = a()), (n = await i)), n);
    },
    async isAuthorized() {
      try {
        return !!(
          await re(() => me(() => this.getAccounts(), { timeout: 200 }), {
            delay: 201,
            retryCount: 3,
          })
        ).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: a, chainId: f }) {
      const h = await this.getProvider(),
        l = s.chains.find((w) => w.id === f);
      if (!l) throw new x(new $());
      try {
        return (
          await h.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: D(f) }],
          }),
          await C(),
          await p(f),
          l
        );
      } catch (w) {
        const v = w;
        if (v.code === P.code) throw new P(v);
        if (v.code === 4902 || v?.data?.originalError?.code === 4902)
          try {
            return (
              await h.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    blockExplorerUrls: (() => {
                      const { default: S, ...I } = l.blockExplorers ?? {};
                      if (a?.blockExplorerUrls) return a.blockExplorerUrls;
                      if (S)
                        return [S.url, ...Object.values(I).map((A) => A.url)];
                    })(),
                    chainId: D(f),
                    chainName: a?.chainName ?? l.name,
                    iconUrls: a?.iconUrls,
                    nativeCurrency: a?.nativeCurrency ?? l.nativeCurrency,
                    rpcUrls: a?.rpcUrls?.length
                      ? a.rpcUrls
                      : [l.rpcUrls.default?.http[0] ?? ""],
                  },
                ],
              }),
              await C(),
              await p(f),
              l
            );
          } catch (S) {
            const I = S;
            throw I.code === P.code ? new P(I) : new x(I);
          }
        throw new x(v);
      }
      async function C() {
        await re(
          async () => {
            const w = rt(await h.request({ method: "eth_chainId" }));
            if (w !== f)
              throw new Error("User rejected switch after adding network.");
            return w;
          },
          { delay: 50, retryCount: 20 }
        );
      }
      async function p(w) {
        await new Promise((v) => {
          const S = (I) => {
            "chainId" in I &&
              I.chainId === w &&
              (s.emitter.off("change", S), v());
          };
          (s.emitter.on("change", S), s.emitter.emit("change", { chainId: w }));
        });
      }
    },
    async onAccountsChanged(a) {
      if (a.length === 0)
        if (t.isExtensionActive()) this.onDisconnect();
        else return;
      else if (s.emitter.listenerCount("connect")) {
        const f = (await this.getChainId()).toString();
        this.onConnect({ chainId: f });
      } else s.emitter.emit("change", { accounts: a.map((f) => E(f)) });
    },
    onChainChanged(a) {
      const f = Number(a);
      s.emitter.emit("change", { chainId: f });
    },
    async onConnect(a) {
      const f = await this.getAccounts();
      if (f.length === 0) return;
      const h = Number(a.chainId);
      s.emitter.emit("connect", { accounts: f, chainId: h });
      const l = await this.getProvider();
      (o && (l.removeListener("connect", o), (o = void 0)),
        r ||
          ((r = this.onAccountsChanged.bind(this)), l.on("accountsChanged", r)),
        c || ((c = this.onChainChanged.bind(this)), l.on("chainChanged", c)),
        d || ((d = this.onDisconnect.bind(this)), l.on("disconnect", d)));
    },
    async onDisconnect(a) {
      const f = await this.getProvider();
      (a && a.code === 1013 && f && (await this.getAccounts()).length) ||
        (s.emitter.emit("disconnect"),
        c && (f.removeListener("chainChanged", c), (c = void 0)),
        d && (f.removeListener("disconnect", d), (d = void 0)),
        o || ((o = this.onConnect.bind(this)), f.on("connect", o)));
    },
    onDisplayUri(a) {
      s.emitter.emit("message", { type: "display_uri", data: a });
    },
  });
}
Le.type = "safe";
function Le(e = {}) {
  const { shimDisconnect: t = !1 } = e;
  let n, i;
  return (r) => ({
    id: "safe",
    name: "Safe",
    type: Le.type,
    async connect({ withCapabilities: c } = {}) {
      const o = await this.getProvider();
      if (!o) throw new j();
      const u = await this.getAccounts(),
        d = await this.getChainId();
      return (
        i || ((i = this.onDisconnect.bind(this)), o.on("disconnect", i)),
        t && (await r.storage?.removeItem("safe.disconnected")),
        {
          accounts: c ? u.map((s) => ({ address: s, capabilities: {} })) : u,
          chainId: d,
        }
      );
    },
    async disconnect() {
      const c = await this.getProvider();
      if (!c) throw new j();
      (i && (c.removeListener("disconnect", i), (i = void 0)),
        t && (await r.storage?.setItem("safe.disconnected", !0)));
    },
    async getAccounts() {
      const c = await this.getProvider();
      if (!c) throw new j();
      return (await c.request({ method: "eth_accounts" })).map(E);
    },
    async getProvider() {
      if (typeof window < "u" && window?.parent !== window) {
        if (!n) {
          const { default: o } = await B(
              async () => {
                const { default: a } = await import("./zod-BB0M7GTZ.js").then(
                  (f) => f.P
                );
                return { default: a };
              },
              __vite__mapDeps([10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
            ),
            u = new o(e),
            d = await me(() => u.safe.getInfo(), {
              timeout: e.unstable_getInfoTimeout ?? 10,
            });
          if (!d) throw new Error("Could not load Safe information");
          const s = await (async () => {
            const a = await B(
              () => import("./zod-BB0M7GTZ.js").then((f) => f.i),
              __vite__mapDeps([10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
            );
            return typeof a.SafeAppProvider != "function" &&
              typeof a.default.SafeAppProvider == "function"
              ? a.default.SafeAppProvider
              : a.SafeAppProvider;
          })();
          n = new s(d, u);
        }
        return n;
      }
    },
    async getChainId() {
      const c = await this.getProvider();
      if (!c) throw new j();
      return Number(c.chainId);
    },
    async isAuthorized() {
      try {
        return t && (await r.storage?.getItem("safe.disconnected"))
          ? !1
          : !!(await this.getAccounts()).length;
      } catch {
        return !1;
      }
    },
    onAccountsChanged() {},
    onChainChanged() {},
    onDisconnect() {
      r.emitter.emit("disconnect");
    },
  });
}
We.type = "walletConnect";
function We(e) {
  const t = e.isNewChainsStale ?? !0;
  let n, i;
  const r = "eip155";
  let c, o, u, d, s, a;
  return (f) => ({
    id: "walletConnect",
    name: "WalletConnect",
    type: We.type,
    async setup() {
      const h = await this.getProvider().catch(() => null);
      h &&
        (u || ((u = this.onConnect.bind(this)), h.on("connect", u)),
        s ||
          ((s = this.onSessionDelete.bind(this)), h.on("session_delete", s)));
    },
    async connect({ chainId: h, withCapabilities: l, ...C } = {}) {
      try {
        const p = await this.getProvider();
        if (!p) throw new j();
        d || ((d = this.onDisplayUri), p.on("display_uri", d));
        let w = h;
        if (!w) {
          const A = (await f.storage?.getItem("state")) ?? {};
          f.chains.some((g) => g.id === A.chainId)
            ? (w = A.chainId)
            : (w = f.chains[0]?.id);
        }
        if (!w) throw new Error("No chains found on connector.");
        const v = await this.isChainsStale();
        if ((p.session && v && (await p.disconnect()), !p.session || v)) {
          const A = f.chains.filter((m) => m.id !== w).map((m) => m.id);
          (await p.connect({
            optionalChains: [w, ...A],
            ...("pairingTopic" in C ? { pairingTopic: C.pairingTopic } : {}),
          }),
            this.setRequestedChainsIds(f.chains.map((m) => m.id)));
        }
        const S = (await p.enable()).map((A) => E(A));
        let I = await this.getChainId();
        return (
          h &&
            I !== h &&
            (I =
              (
                await this.switchChain({ chainId: h }).catch((m) => {
                  if (
                    m.code === P.code &&
                    m.cause?.message !==
                      "Missing or invalid. request() method: wallet_addEthereumChain"
                  )
                    throw m;
                  return { id: I };
                })
              )?.id ?? I),
          d && (p.removeListener("display_uri", d), (d = void 0)),
          u && (p.removeListener("connect", u), (u = void 0)),
          c ||
            ((c = this.onAccountsChanged.bind(this)),
            p.on("accountsChanged", c)),
          o || ((o = this.onChainChanged.bind(this)), p.on("chainChanged", o)),
          a || ((a = this.onDisconnect.bind(this)), p.on("disconnect", a)),
          s ||
            ((s = this.onSessionDelete.bind(this)), p.on("session_delete", s)),
          {
            accounts: l ? S.map((A) => ({ address: A, capabilities: {} })) : S,
            chainId: I,
          }
        );
      } catch (p) {
        throw /(user rejected|connection request reset)/i.test(p?.message)
          ? new P(p)
          : p;
      }
    },
    async disconnect() {
      const h = await this.getProvider();
      try {
        await h?.disconnect();
      } catch (l) {
        if (!/No matching key/i.test(l.message)) throw l;
      } finally {
        (o && (h?.removeListener("chainChanged", o), (o = void 0)),
          a && (h?.removeListener("disconnect", a), (a = void 0)),
          u || ((u = this.onConnect.bind(this)), h?.on("connect", u)),
          c && (h?.removeListener("accountsChanged", c), (c = void 0)),
          s && (h?.removeListener("session_delete", s), (s = void 0)),
          this.setRequestedChainsIds([]));
      }
    },
    async getAccounts() {
      return (await this.getProvider()).accounts.map((l) => E(l));
    },
    async getProvider({ chainId: h } = {}) {
      async function l() {
        const C = f.chains.map((w) => w.id);
        if (!C.length) return;
        const { EthereumProvider: p } = await B(
          async () => {
            const { EthereumProvider: w } = await import(
              "./vendor-BZZ6DO-t.js"
            ).then((v) => v.bT);
            return { EthereumProvider: w };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        );
        return await p.init({
          ...e,
          disableProviderPing: !0,
          optionalChains: C,
          projectId: e.projectId,
          rpcMap: Object.fromEntries(
            f.chains.map((w) => {
              const [v] = xe({ chain: w, transports: f.transports });
              return [w.id, v];
            })
          ),
          showQrModal: e.showQrModal ?? !0,
        });
      }
      return (
        n ||
          (i || (i = l()),
          (n = await i),
          n?.events.setMaxListeners(Number.POSITIVE_INFINITY)),
        h && (await this.switchChain?.({ chainId: h })),
        n
      );
    },
    async getChainId() {
      return (await this.getProvider()).chainId;
    },
    async isAuthorized() {
      try {
        const [h, l] = await Promise.all([
          this.getAccounts(),
          this.getProvider(),
        ]);
        return h.length
          ? (await this.isChainsStale()) && l.session
            ? (await l.disconnect().catch(() => {}), !1)
            : !0
          : !1;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: h, chainId: l }) {
      const C = await this.getProvider();
      if (!C) throw new j();
      const p = f.chains.find((w) => w.id === l);
      if (!p) throw new x(new $());
      try {
        await Promise.all([
          new Promise((v) => {
            const S = ({ chainId: I }) => {
              I === l && (f.emitter.off("change", S), v());
            };
            f.emitter.on("change", S);
          }),
          C.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: D(l) }],
          }),
        ]);
        const w = await this.getRequestedChainsIds();
        return (this.setRequestedChainsIds([...w, l]), p);
      } catch (w) {
        const v = w;
        if (/(user rejected)/i.test(v.message)) throw new P(v);
        try {
          let S;
          h?.blockExplorerUrls
            ? (S = h.blockExplorerUrls)
            : (S = p.blockExplorers?.default.url
                ? [p.blockExplorers?.default.url]
                : []);
          let I;
          h?.rpcUrls?.length
            ? (I = h.rpcUrls)
            : (I = [...p.rpcUrls.default.http]);
          const A = {
            blockExplorerUrls: S,
            chainId: D(l),
            chainName: h?.chainName ?? p.name,
            iconUrls: h?.iconUrls,
            nativeCurrency: h?.nativeCurrency ?? p.nativeCurrency,
            rpcUrls: I,
          };
          await C.request({ method: "wallet_addEthereumChain", params: [A] });
          const m = await this.getRequestedChainsIds();
          return (this.setRequestedChainsIds([...m, l]), p);
        } catch (S) {
          throw new P(S);
        }
      }
    },
    onAccountsChanged(h) {
      h.length === 0
        ? this.onDisconnect()
        : f.emitter.emit("change", { accounts: h.map((l) => E(l)) });
    },
    onChainChanged(h) {
      const l = Number(h);
      f.emitter.emit("change", { chainId: l });
    },
    async onConnect(h) {
      const l = Number(h.chainId),
        C = await this.getAccounts();
      f.emitter.emit("connect", { accounts: C, chainId: l });
    },
    async onDisconnect(h) {
      (this.setRequestedChainsIds([]), f.emitter.emit("disconnect"));
      const l = await this.getProvider();
      (c && (l.removeListener("accountsChanged", c), (c = void 0)),
        o && (l.removeListener("chainChanged", o), (o = void 0)),
        a && (l.removeListener("disconnect", a), (a = void 0)),
        s && (l.removeListener("session_delete", s), (s = void 0)),
        u || ((u = this.onConnect.bind(this)), l.on("connect", u)));
    },
    onDisplayUri(h) {
      f.emitter.emit("message", { type: "display_uri", data: h });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      return n
        ? (n.session?.namespaces[r]?.accounts?.map((l) =>
            Number.parseInt(l.split(":")[1] || "", 10)
          ) ?? [])
        : [];
    },
    async getRequestedChainsIds() {
      return (await f.storage?.getItem(this.requestedChainsStorageKey)) ?? [];
    },
    async isChainsStale() {
      if (!t) return !1;
      const h = f.chains.map((p) => p.id),
        l = this.getNamespaceChainsIds();
      if (l.length && !l.some((p) => h.includes(p))) return !1;
      const C = await this.getRequestedChainsIds();
      return !h.every((p) => C.includes(p));
    },
    async setRequestedChainsIds(h) {
      await f.storage?.setItem(this.requestedChainsStorageKey, h);
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    },
  });
}
const ln = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_WALLETCONNECT_PROJECT_ID: "5b0e8921fe0677debd4c27b06ee2d075",
  },
  fn = [ue, ae, se, ce, oe],
  K = (e, t) => {
    const n = `VITE_RPC_URL_${e}`;
    return ln[n] || t;
  },
  mn = {
    [ue.id]: T(K(ue.id, "https://eth.llamarpc.com")),
    [ae.id]: T(K(ae.id, "https://rpc.sepolia.org")),
    [se.id]: T(K(se.id, "https://polygon.llamarpc.com")),
    [ce.id]: T(K(ce.id, "https://arb1.arbitrum.io/rpc")),
    [oe.id]: T(K(oe.id, "https://mainnet.optimism.io")),
  },
  pn = "5b0e8921fe0677debd4c27b06ee2d075",
  Ln = at({
    appName: "umoja",
    projectId: pn,
    chains: fn,
    transports: mn,
    ssr: !0,
  });
export {
  En as W,
  M as a,
  Nn as b,
  An as c,
  On as d,
  jn as e,
  kn as f,
  qn as g,
  Rn as h,
  xn as i,
  Dn as j,
  Un as k,
  Pn as l,
  $n as m,
  $e as n,
  pe as o,
  Ln as p,
  Le as s,
  Mn as u,
  We as w,
};
