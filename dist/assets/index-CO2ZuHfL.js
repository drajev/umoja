import { r as o, j as e, h as nr } from "./react-core-DTfLns-N.js";
import { e as Xe, f as or, g as fs } from "./zustand-C9I4lUQe.js";
import {
  S as Ze,
  e as ps,
  I as js,
  F as gs,
  f as bs,
  g as Ns,
  h as lr,
  i as ys,
  j as vs,
  k as ws,
  l as Cs,
  m as Rs,
  L as Ss,
  n as ks,
  o as ir,
  p as dr,
  O as Ie,
  a as Ps,
  C as ze,
  d as Ts,
  T as De,
  D as $e,
  R as Is,
  b as zs,
  q as Ds,
  r as cr,
  s as $s,
  t as As,
  v as mr,
  w as Fs,
  x as Ms,
  y as xr,
  z as Ls,
  V as ur,
  A as _s,
  B as Es,
  E as hr,
  G as fr,
  H as Os,
  J as pr,
  K as jr,
  M as gr,
  N as br,
  Q as Bs,
  U as Hs,
  W as Nr,
  X as Vs,
  Y as yr,
  Z as Gs,
  _ as qs,
  $ as Ws,
  a0 as Us,
  a1 as Ks,
  a2 as vr,
  a3 as wr,
  a4 as Cr,
  a5 as Ys,
  a6 as Rr,
  a7 as Sr,
  a8 as kr,
  a9 as Pr,
  aa as Js,
  ab as Qs,
  ac as Tr,
  ad as Xs,
  ae as Zs,
  af as ea,
  ag as sa,
  ah as aa,
  ai as ta,
  aj as ra,
  ak as Ir,
  al as zr,
  am as na,
  an as Dr,
  ao as $r,
  ap as oa,
  aq as la,
  ar as ia,
  as as da,
  at as Ar,
  au as ca,
  av as ma,
  aw as xa,
  ax as ua,
  ay as ha,
  az as fa,
  aA as pa,
  aB as Fr,
  aC as ja,
  aD as ga,
  aE as ba,
  aF as Na,
  aG as ya,
  aH as va,
  aI as Mr,
  aJ as Lr,
  aK as _r,
  aL as wa,
  aM as Er,
  aN as Or,
  aO as Ca,
  aP as Br,
  aQ as Ra,
  aR as Sa,
  aS as Hr,
  aT as ka,
  aU as Vr,
  aV as Gr,
  aW as Pa,
  aX as qr,
  aY as Ta,
  aZ as Ia,
  a_ as Wr,
  a$ as Ur,
  b0 as Kr,
  b1 as za,
  b2 as Da,
  b3 as $a,
  b4 as Yr,
  b5 as Aa,
  b6 as Fa,
  b7 as Ma,
  b8 as La,
  b9 as Jr,
  ba as Qr,
  bb as Xr,
} from "./radix-ui-B4s5ZLUC.js";
import { t as Zr, c as en, b as Y } from "./ui-utils-CtO5jga9.js";
import {
  bm as Z,
  bn as me,
  bo as Ae,
  bp as _a,
  bq as sn,
  br as an,
  bs as tn,
  bt as je,
  bu as Ea,
  bv as xe,
  bw as rn,
  bx as Oa,
  by as nn,
  bz as Ba,
  bA as on,
  bB as ln,
  bC as dn,
  bD as z,
  bE as cn,
  bF as F,
  bG as mn,
  bH as xn,
  bI as un,
  bJ as hn,
  bK as fn,
  bL as pn,
  bM as jn,
  bN as gn,
  bO as bn,
} from "./vendor-BZZ6DO-t.js";
import {
  u as Ha,
  L as g,
  a as Nn,
  B as yn,
  R as ms,
  b as H,
} from "./router-BFrhOYqT.js";
import {
  d as vn,
  e as wn,
  f as Cn,
  g as Rn,
  W as Sn,
  p as kn,
} from "./wagmi-CUot6T_j.js";
import {
  u as Pn,
  t as Tn,
  a as In,
  F as zn,
  C as Dn,
} from "./react-hook-form-BFEXP4V5.js";
import { L as ue, M as D, O as $n } from "./zod-BB0M7GTZ.js";
import { Q as An } from "./react-query-CUqNwzfD.js";
import { R as Fn } from "./rainbowkit-CYyBjDse.js";
import "./date-fns-eMX-sgik.js";
import "./viem-BWdEkVAs.js";
(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const x of i.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && r(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
})();
const es = Xe()(
    or(
      fs(
        (s) => ({
          sidebarOpen: !1,
          toggleSidebar: () => s((a) => ({ sidebarOpen: !a.sidebarOpen })),
          setSidebarOpen: (a) => s({ sidebarOpen: a }),
          theme: "light",
          setTheme: (a) => s({ theme: a }),
          toggleTheme: () =>
            s((a) => ({ theme: a.theme === "light" ? "dark" : "light" })),
          popupContent: null,
          setPopup: (a) => s({ popupContent: a }),
          clearPopup: () => s({ popupContent: null }),
        }),
        {
          name: "ui-storage",
          partialize: (s) => ({ sidebarOpen: s.sidebarOpen, theme: s.theme }),
        }
      ),
      { name: "UIStore" }
    )
  ),
  xs = { user: null, token: null, isAuthenticated: !1, error: null },
  Mn = Xe()(
    fs(
      (s) => ({
        ...xs,
        setUser: (a) => {
          s({ user: a });
        },
        setToken: (a) => {
          s({ token: a });
        },
        setIsAuthenticated: (a) => {
          s({ isAuthenticated: a });
        },
        setError: (a) => {
          s({ error: a });
        },
        clearError: () => {
          s({ error: null });
        },
        logout: () => {
          s({ ...xs });
        },
      }),
      {
        name: "auth-storage",
        partialize: (s) => ({
          user: s.user,
          token: s.token,
          isAuthenticated: s.isAuthenticated,
        }),
      }
    )
  );
function n(...s) {
  return Zr(en(s));
}
const X = Y(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  d = o.forwardRef(
    ({ className: s, variant: a, size: t, asChild: r = !1, ...l }, i) => {
      const x = r ? Ze : "button";
      return e.jsx(x, {
        className: n(X({ variant: a, size: t, className: s })),
        ref: i,
        ...l,
      });
    }
  );
d.displayName = "Button";
const G = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(ps, {
    ref: t,
    className: n(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      s
    ),
    ...a,
  })
);
G.displayName = ps.displayName;
const ie = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(js, { ref: t, className: n("aspect-square h-full w-full", s), ...a })
);
ie.displayName = js.displayName;
const q = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(gs, {
    ref: t,
    className: n(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      s
    ),
    ...a,
  })
);
q.displayName = gs.displayName;
const Va = ir,
  Ga = dr,
  Ln = o.forwardRef(({ className: s, inset: a, children: t, ...r }, l) =>
    e.jsxs(bs, {
      ref: l,
      className: n(
        "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        a && "pl-8",
        s
      ),
      ...r,
      children: [t, e.jsx(Z, { className: "ml-auto" })],
    })
  );
Ln.displayName = bs.displayName;
const _n = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Ns, {
    ref: t,
    className: n(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      s
    ),
    ...a,
  })
);
_n.displayName = Ns.displayName;
const ss = o.forwardRef(({ className: s, sideOffset: a = 4, ...t }, r) =>
  e.jsx(lr, {
    children: e.jsx(ys, {
      ref: r,
      sideOffset: a,
      className: n(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        s
      ),
      ...t,
    }),
  })
);
ss.displayName = ys.displayName;
const W = o.forwardRef(({ className: s, inset: a, ...t }, r) =>
  e.jsx(vs, {
    ref: r,
    className: n(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      a && "pl-8",
      s
    ),
    ...t,
  })
);
W.displayName = vs.displayName;
const En = o.forwardRef(({ className: s, children: a, checked: t, ...r }, l) =>
  e.jsxs(ws, {
    ref: l,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      s
    ),
    checked: t,
    ...r,
    children: [
      e.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(Cs, { children: e.jsx(me, { className: "h-4 w-4" }) }),
      }),
      a,
    ],
  })
);
En.displayName = ws.displayName;
const On = o.forwardRef(({ className: s, children: a, ...t }, r) =>
  e.jsxs(Rs, {
    ref: r,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      s
    ),
    ...t,
    children: [
      e.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(Cs, {
          children: e.jsx(Ae, { className: "h-2 w-2 fill-current" }),
        }),
      }),
      a,
    ],
  })
);
On.displayName = Rs.displayName;
const as = o.forwardRef(({ className: s, inset: a, ...t }, r) =>
  e.jsx(Ss, {
    ref: r,
    className: n("px-2 py-1.5 text-sm font-semibold", a && "pl-8", s),
    ...t,
  })
);
as.displayName = Ss.displayName;
const Re = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(ks, { ref: t, className: n("-mx-1 my-1 h-px bg-muted", s), ...a })
);
Re.displayName = ks.displayName;
const Be = Is,
  He = zs,
  Bn = Ps,
  qa = o.forwardRef(({ className: s, ...a }, t) =>
    e.jsx(Ie, {
      className: n(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        s
      ),
      ...a,
      ref: t,
    })
  );
qa.displayName = Ie.displayName;
const Hn = Y(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  Se = o.forwardRef(
    ({ side: s = "right", className: a, children: t, ...r }, l) =>
      e.jsxs(Bn, {
        children: [
          e.jsx(qa, {}),
          e.jsxs(ze, {
            ref: l,
            className: n(Hn({ side: s }), a),
            ...r,
            children: [
              t,
              e.jsxs(Ts, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  e.jsx(_a, { className: "h-4 w-4" }),
                  e.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
            ],
          }),
        ],
      })
  );
Se.displayName = ze.displayName;
const ke = ({ className: s, ...a }) =>
  e.jsx("div", {
    className: n("flex flex-col space-y-2 text-center sm:text-left", s),
    ...a,
  });
ke.displayName = "SheetHeader";
const Pe = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(De, {
    ref: t,
    className: n("text-lg font-semibold text-foreground", s),
    ...a,
  })
);
Pe.displayName = De.displayName;
const Te = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx($e, { ref: t, className: n("text-sm text-muted-foreground", s), ...a })
);
Te.displayName = $e.displayName;
const c = o.forwardRef(({ level: s = 1, as: a, className: t, ...r }, l) => {
  const i = a || `h${s}`,
    x = {
      1: "text-4xl font-bold tracking-tight",
      2: "text-3xl font-semibold tracking-tight",
      3: "text-2xl font-semibold tracking-tight",
      4: "text-xl font-semibold",
      5: "text-lg font-semibold",
      6: "text-base font-semibold",
    };
  return e.jsx(i, { ref: l, className: n(x[s], t), ...r });
});
c.displayName = "Heading";
const m = o.forwardRef(
  ({ variant: s = "body", as: a = "p", className: t, ...r }, l) => {
    const i = {
      body: "text-base",
      small: "text-sm",
      muted: "text-sm text-muted-foreground",
      lead: "text-lg text-muted-foreground",
    };
    return e.jsx(a, { ref: l, className: n(i[s], t), ...r });
  }
);
m.displayName = "Text";
const ts = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Ds, {
    className: n(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      s
    ),
    ...a,
    ref: t,
    children: e.jsx(cr, {
      className: n(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      ),
    }),
  })
);
ts.displayName = Ds.displayName;
const Ee = 768;
function Vn() {
  const [s, a] = o.useState(void 0);
  return (
    o.useEffect(() => {
      const t = window.matchMedia(`(max-width: ${Ee - 1}px)`),
        r = () => {
          a(window.innerWidth < Ee);
        };
      return (
        t.addEventListener("change", r),
        a(window.innerWidth < Ee),
        () => t.removeEventListener("change", r)
      );
    }, []),
    !!s
  );
}
const f = {
    home: "/",
    styleguide: "/styleguide",
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
  },
  Gn = () => {
    const s = Ha(),
      a = Vn(),
      { user: t, isAuthenticated: r, logout: l } = Mn(),
      { theme: i, toggleTheme: x, sidebarOpen: N, toggleSidebar: h } = es(),
      u = () => {
        (l(), s(f.home));
      },
      k = ($) =>
        $.split(" ")
          .map((te) => te[0])
          .join("")
          .toUpperCase()
          .slice(0, 2);
    return e.jsx("header", {
      className:
        "sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60",
      children: e.jsxs("div", {
        className:
          "container mx-auto flex h-16 items-center justify-between px-4 md:px-6",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              e.jsx(d, {
                variant: "ghost",
                size: "icon",
                onClick: h,
                className: "md:hidden",
                children: N ? "←" : "☰",
              }),
              e.jsx(g, {
                to: f.home,
                className: "flex items-center gap-2",
                children: e.jsx(m, {
                  className: "text-lg font-semibold",
                  children: "umoja",
                }),
              }),
            ],
          }),
          !a &&
            e.jsxs("nav", {
              className: "hidden md:flex items-center gap-6",
              children: [
                e.jsx(g, {
                  to: f.home,
                  className:
                    "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                  children: "Home",
                }),
                e.jsx(g, {
                  to: f.styleguide,
                  className:
                    "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                  children: "Styleguide",
                }),
              ],
            }),
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(sn, {
                    className: "h-4 w-4 text-muted-foreground hidden sm:block",
                  }),
                  e.jsx(ts, {
                    checked: i === "dark",
                    onCheckedChange: () => x(),
                  }),
                  e.jsx(an, {
                    className: "h-4 w-4 text-muted-foreground hidden sm:block",
                  }),
                ],
              }),
              r && t
                ? e.jsx(e.Fragment, {
                    children: a
                      ? e.jsxs(Be, {
                          children: [
                            e.jsx(He, {
                              asChild: !0,
                              children: e.jsx(d, {
                                variant: "ghost",
                                size: "icon",
                                className: "relative",
                                children: e.jsxs(G, {
                                  className: "h-8 w-8",
                                  children: [
                                    e.jsx(ie, { src: t.avatar, alt: t.name }),
                                    e.jsx(q, { children: k(t.name) }),
                                  ],
                                }),
                              }),
                            }),
                            e.jsxs(Se, {
                              side: "right",
                              children: [
                                e.jsxs(ke, {
                                  children: [
                                    e.jsx(Pe, { children: "Account" }),
                                    e.jsx(Te, {
                                      children: "Manage your account settings",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "mt-6 space-y-4",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center gap-4",
                                      children: [
                                        e.jsxs(G, {
                                          className: "h-12 w-12",
                                          children: [
                                            e.jsx(ie, {
                                              src: t.avatar,
                                              alt: t.name,
                                            }),
                                            e.jsx(q, { children: k(t.name) }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx(m, {
                                              className: "font-medium",
                                              children: t.name,
                                            }),
                                            e.jsx(m, {
                                              variant: "small",
                                              className:
                                                "text-muted-foreground",
                                              children: t.email,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        e.jsx(d, {
                                          variant: "outline",
                                          className: "w-full justify-start",
                                          children: "Profile",
                                        }),
                                        e.jsx(d, {
                                          variant: "outline",
                                          className: "w-full justify-start",
                                          children: "Settings",
                                        }),
                                        e.jsx(d, {
                                          variant: "destructive",
                                          className: "w-full justify-start",
                                          onClick: u,
                                          children: "Logout",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : e.jsxs(Va, {
                          children: [
                            e.jsx(Ga, {
                              asChild: !0,
                              children: e.jsx(d, {
                                variant: "ghost",
                                size: "icon",
                                className: "relative",
                                children: e.jsxs(G, {
                                  className: "h-8 w-8",
                                  children: [
                                    e.jsx(ie, { src: t.avatar, alt: t.name }),
                                    e.jsx(q, { children: k(t.name) }),
                                  ],
                                }),
                              }),
                            }),
                            e.jsxs(ss, {
                              align: "end",
                              className: "w-56",
                              children: [
                                e.jsx(as, {
                                  children: e.jsxs("div", {
                                    className: "flex flex-col space-y-1",
                                    children: [
                                      e.jsx(m, {
                                        className: "text-sm font-medium",
                                        children: t.name,
                                      }),
                                      e.jsx(m, {
                                        variant: "small",
                                        className: "text-muted-foreground",
                                        children: t.email,
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsx(Re, {}),
                                e.jsx(W, {
                                  asChild: !0,
                                  children: e.jsx(g, {
                                    to: f.home,
                                    children: "Profile",
                                  }),
                                }),
                                e.jsx(W, {
                                  asChild: !0,
                                  children: e.jsx(g, {
                                    to: f.styleguide,
                                    children: "Settings",
                                  }),
                                }),
                                e.jsx(Re, {}),
                                e.jsx(W, {
                                  onClick: u,
                                  className: "text-destructive",
                                  children: "Logout",
                                }),
                              ],
                            }),
                          ],
                        }),
                  })
                : e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(d, {
                        variant: "ghost",
                        size: "sm",
                        asChild: !0,
                        children: e.jsx(g, { to: f.login, children: "Login" }),
                      }),
                      e.jsx(d, {
                        size: "sm",
                        asChild: !0,
                        children: e.jsx(g, {
                          to: f.register,
                          children: "Sign Up",
                        }),
                      }),
                    ],
                  }),
              a &&
                !r &&
                e.jsxs(Be, {
                  children: [
                    e.jsx(He, {
                      asChild: !0,
                      children: e.jsx(d, {
                        variant: "ghost",
                        size: "icon",
                        children: "☰",
                      }),
                    }),
                    e.jsxs(Se, {
                      side: "right",
                      children: [
                        e.jsxs(ke, {
                          children: [
                            e.jsx(Pe, { children: "Menu" }),
                            e.jsx(Te, { children: "Navigation menu" }),
                          ],
                        }),
                        e.jsxs("nav", {
                          className: "mt-6 flex flex-col space-y-4",
                          children: [
                            e.jsx(g, {
                              to: f.home,
                              className:
                                "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                              children: "Home",
                            }),
                            e.jsx(g, {
                              to: f.styleguide,
                              className:
                                "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                              children: "Styleguide",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    });
  },
  j = o.forwardRef(({ className: s, ...a }, t) =>
    e.jsx("div", {
      ref: t,
      className: n(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        s
      ),
      ...a,
    })
  );
j.displayName = "Card";
const y = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", {
    ref: t,
    className: n("flex flex-col space-y-1.5 p-6", s),
    ...a,
  })
);
y.displayName = "CardHeader";
const v = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("h3", {
    ref: t,
    className: n("text-2xl font-semibold leading-none tracking-tight", s),
    ...a,
  })
);
v.displayName = "CardTitle";
const T = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("p", { ref: t, className: n("text-sm text-muted-foreground", s), ...a })
);
T.displayName = "CardDescription";
const p = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", { ref: t, className: n("p-6 pt-0", s), ...a })
);
p.displayName = "CardContent";
const K = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", { ref: t, className: n("flex items-center p-6 pt-0", s), ...a })
);
K.displayName = "CardFooter";
const qn = ({ ...s }) => {
    const a = es((t) => t.theme);
    return e.jsx(tn, {
      theme: a,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...s,
    });
  },
  Wn = ({ children: s }) => {
    const { sidebarOpen: a, theme: t, popupContent: r, clearPopup: l } = es();
    return (
      o.useEffect(() => {
        document.documentElement.classList.toggle("dark", t === "dark");
      }, [t]),
      e.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [
          e.jsx(Gn, {}),
          e.jsxs("div", {
            className: "flex flex-col md:flex-row",
            children: [
              a &&
                e.jsx("aside", {
                  className:
                    "w-full border-b md:w-64 md:border-b-0 md:border-r bg-card p-4 md:flex-shrink-0",
                  children: e.jsx(j, {
                    children: e.jsxs(p, {
                      className: "pt-6",
                      children: [
                        e.jsxs(m, {
                          variant: "small",
                          className: "text-muted-foreground",
                          children: ["Sidebar is ", a ? "open" : "closed"],
                        }),
                        e.jsxs("div", {
                          className: "mt-4 space-y-2",
                          children: [
                            e.jsx(d, {
                              variant: "ghost",
                              className: "w-full justify-start",
                              size: "sm",
                              children: "Dashboard",
                            }),
                            e.jsx(d, {
                              variant: "ghost",
                              className: "w-full justify-start",
                              size: "sm",
                              children: "Strategies",
                            }),
                            e.jsx(d, {
                              variant: "ghost",
                              className: "w-full justify-start",
                              size: "sm",
                              children: "Settings",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              e.jsx("main", { className: "flex-1 p-4 md:p-8", children: s }),
            ],
          }),
          r &&
            e.jsx("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
              children: e.jsx(j, {
                className: "w-full max-w-md",
                children: e.jsxs(p, {
                  className: "pt-6",
                  children: [
                    r,
                    e.jsx("div", {
                      className: "mt-4",
                      children: e.jsx(d, {
                        onClick: l,
                        className: "w-full",
                        children: "Close",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          e.jsx(qn, {}),
        ],
      })
    );
  },
  Wa = Is,
  Ua = zs,
  Un = Ps,
  Ka = o.forwardRef(({ className: s, ...a }, t) =>
    e.jsx(Ie, {
      ref: t,
      className: n(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        s
      ),
      ...a,
    })
  );
Ka.displayName = Ie.displayName;
const rs = o.forwardRef(({ className: s, children: a, ...t }, r) =>
  e.jsxs(Un, {
    children: [
      e.jsx(Ka, {}),
      e.jsxs(ze, {
        ref: r,
        className: n(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          s
        ),
        ...t,
        children: [
          a,
          e.jsxs(Ts, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              e.jsx(_a, { className: "h-4 w-4" }),
              e.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  })
);
rs.displayName = ze.displayName;
const ns = ({ className: s, ...a }) =>
  e.jsx("div", {
    className: n("flex flex-col space-y-1.5 text-center sm:text-left", s),
    ...a,
  });
ns.displayName = "DialogHeader";
const os = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(De, {
    ref: t,
    className: n("text-lg font-semibold leading-none tracking-tight", s),
    ...a,
  })
);
os.displayName = De.displayName;
const ls = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx($e, { ref: t, className: n("text-sm text-muted-foreground", s), ...a })
);
ls.displayName = $e.displayName;
const Kn = (s) =>
    o.useCallback(
      async (t) => {
        try {
          if (typeof navigator < "u" && navigator.clipboard)
            (await navigator.clipboard.writeText(t),
              s?.onSuccess && s.onSuccess(t));
          else {
            const r = document.createElement("textarea");
            ((r.value = t),
              (r.style.position = "fixed"),
              (r.style.opacity = "0"),
              document.body.appendChild(r),
              r.select(),
              document.execCommand("copy"),
              document.body.removeChild(r),
              s?.onSuccess && s.onSuccess(t));
          }
        } catch (r) {
          const l = r instanceof Error ? r : new Error("Failed to copy");
          s?.onError && s.onError(l);
        }
      },
      [s]
    ),
  he = Xe(() => ({
    notifications: {
      success: (s, a) => {
        je.success(s, { description: a?.title, duration: a?.duration });
      },
      error: (s, a) => {
        je.error(s, { description: a?.title, duration: a?.duration });
      },
      warning: (s, a) => {
        je.warning(s, { description: a?.title, duration: a?.duration });
      },
      info: (s, a) => {
        je.info(s, { description: a?.title, duration: a?.duration });
      },
    },
  })),
  Yn = (s, a = 6, t = 4) =>
    !s || s.length < a + t ? s : `${s.slice(0, a)}...${s.slice(-t)}`,
  Jn = (s, a) => (s ? `${parseFloat(s).toFixed(4)} ${a || "ETH"}` : "0.0000"),
  Qn = ({ className: s }) => {
    const { address: a, isConnected: t, chain: r } = vn(),
      { data: l } = wn({ address: a, query: { enabled: !!a } }),
      { connect: i, connectors: x, isPending: N } = Cn(),
      { disconnect: h } = Rn(),
      [u, k] = o.useState(!1),
      { notifications: $ } = he(),
      te = Kn({
        onSuccess: () => {
          $.success("Address copied to clipboard!");
        },
        onError: () => {
          $.error("Failed to copy address");
        },
      }),
      Le = (A) => {
        i({ connector: A });
      },
      L = x.filter((A, re, _e) => re === _e.findIndex((M) => M.id === A.id));
    return !t || !a
      ? e.jsx("div", {
          className: n("flex items-center justify-center", s),
          children: e.jsxs(Wa, {
            children: [
              e.jsx(Ua, {
                asChild: !0,
                children: e.jsx(d, {
                  variant: "outline",
                  disabled: L.length === 0,
                  children: "Connect Wallet",
                }),
              }),
              e.jsxs(rs, {
                children: [
                  e.jsxs(ns, {
                    children: [
                      e.jsx(os, { children: "Connect Wallet" }),
                      e.jsx(ls, {
                        children: "Choose a wallet to connect to your account",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2 py-4",
                    children: [
                      L.map((A) =>
                        e.jsxs(
                          d,
                          {
                            variant: "outline",
                            className: "w-full justify-start",
                            onClick: () => Le(A),
                            disabled: N,
                            children: [
                              A.name,
                              N &&
                                e.jsx("span", {
                                  className: "ml-2",
                                  children: "Connecting...",
                                }),
                            ],
                          },
                          A.id
                        )
                      ),
                      L.length === 0 &&
                        e.jsx(m, {
                          variant: "small",
                          className: "text-muted-foreground text-center py-4",
                          children:
                            "No wallets available. Please install a wallet extension.",
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : e.jsxs(j, {
          className: n("w-full", s),
          children: [
            e.jsxs(y, {
              children: [
                e.jsx(v, { children: "Wallet Connected" }),
                e.jsx(T, { children: r?.name || "Unknown Network" }),
              ],
            }),
            e.jsxs(p, {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(m, {
                      variant: "small",
                      className: "font-medium text-muted-foreground",
                      children: "Address",
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center justify-between gap-2 rounded-md border bg-muted p-2",
                      children: [
                        e.jsx(m, {
                          className:
                            "font-mono text-sm break-all cursor-pointer",
                          onClick: () => k(!u),
                          title: "Click to toggle full address",
                          children: u ? a : Yn(a),
                        }),
                        e.jsx(d, {
                          variant: "ghost",
                          size: "icon",
                          onClick: () => {
                            a && te(a);
                          },
                          title: "Copy address",
                          children: e.jsx(Ea, { className: "h-4 w-4" }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(m, {
                      variant: "small",
                      className: "font-medium text-muted-foreground",
                      children: "Balance",
                    }),
                    e.jsx("div", {
                      className: "rounded-md border bg-muted p-2",
                      children: e.jsx(m, {
                        className: "font-mono text-sm",
                        children: Jn(l?.formatted, l?.symbol),
                      }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex gap-2",
                  children: e.jsx(d, {
                    variant: "outline",
                    onClick: () => h(),
                    children: "Disconnect",
                  }),
                }),
              ],
            }),
          ],
        });
  },
  Xn = () =>
    e.jsx("div", {
      className: "space-y-8",
      children: e.jsxs("div", {
        className: "mx-auto max-w-4xl space-y-8",
        children: [
          e.jsxs("div", {
            className: "space-y-4 text-center",
            children: [
              e.jsx(c, { level: 1, children: "Welcome to umoja" }),
              e.jsx(m, {
                variant: "lead",
                children:
                  "A production-ready Web3 starter built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.",
              }),
            ],
          }),
          e.jsxs(j, {
            children: [
              e.jsxs(y, {
                children: [
                  e.jsx(v, { children: "Getting Started" }),
                  e.jsx(T, {
                    children: "Explore the design system and components",
                  }),
                ],
              }),
              e.jsxs(p, {
                className: "space-y-4",
                children: [
                  e.jsx(m, {
                    children:
                      "This project is set up with all the tools you need to build a modern Web3 application. Check out the styleguide to see all available components and design tokens.",
                  }),
                  e.jsx("div", {
                    className: "flex gap-2",
                    children: e.jsx(d, {
                      asChild: !0,
                      children: e.jsx(g, {
                        to: "/styleguide",
                        children: "View Styleguide",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex justify-center",
            children: e.jsx(Qn, {}),
          }),
        ],
      }),
    });
function fe(s, a) {
  const t = a?.defaultValues || {};
  return Pn({ resolver: Tn(s), mode: "onChange", defaultValues: t, ...a });
}
const Zn = () =>
    ue({
      name: D()
        .min(1, "Name is required")
        .max(100, "Name must be less than 100 characters"),
      description: D()
        .min(10, "Description must be at least 10 characters")
        .max(500, "Description must be less than 500 characters")
        .optional(),
      amount: D()
        .min(1, "Amount is required")
        .refine((s) => !isNaN(Number(s)) && Number(s) > 0, {
          message: "Amount must be a positive number",
        }),
      riskLevel: $n(["low", "medium", "high"], {
        required_error: "Risk level is required",
      }),
      startDate: D().min(1, "Start date is required"),
    }),
  eo = Y(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  B = o.forwardRef(({ className: s, ...a }, t) =>
    e.jsx($s, { ref: t, className: n(eo(), s), ...a })
  );
B.displayName = $s.displayName;
const pe = zn,
  Ya = o.createContext(null),
  P = ({ ...s }) =>
    e.jsx(Ya.Provider, {
      value: { name: s.name },
      children: e.jsx(Dn, { ...s }),
    }),
  Fe = () => {
    const s = o.useContext(Ya),
      a = o.useContext(Ja),
      { getFieldState: t, formState: r } = In();
    if (!s) throw new Error("useFormField should be used within <FormField>");
    if (!a) throw new Error("useFormField should be used within <FormItem>");
    const l = t(s.name, r),
      { id: i } = a;
    return {
      id: i,
      name: s.name,
      formItemId: `${i}-form-item`,
      formDescriptionId: `${i}-form-item-description`,
      formMessageId: `${i}-form-item-message`,
      ...l,
    };
  },
  Ja = o.createContext(null),
  w = o.forwardRef(({ className: s, ...a }, t) => {
    const r = o.useId();
    return e.jsx(Ja.Provider, {
      value: { id: r },
      children: e.jsx("div", { ref: t, className: n("space-y-2", s), ...a }),
    });
  });
w.displayName = "FormItem";
const C = o.forwardRef(({ className: s, ...a }, t) => {
  const { error: r, formItemId: l } = Fe();
  return e.jsx(B, {
    ref: t,
    className: n(r && "text-destructive", s),
    htmlFor: l,
    ...a,
  });
});
C.displayName = "FormLabel";
const R = o.forwardRef(({ ...s }, a) => {
  const {
    error: t,
    formItemId: r,
    formDescriptionId: l,
    formMessageId: i,
  } = Fe();
  return e.jsx(Ze, {
    ref: a,
    id: r,
    "aria-describedby": t ? `${l} ${i}` : `${l}`,
    "aria-invalid": !!t,
    ...s,
  });
});
R.displayName = "FormControl";
const ne = o.forwardRef(({ className: s, ...a }, t) => {
  const { formDescriptionId: r } = Fe();
  return e.jsx("p", {
    ref: t,
    id: r,
    className: n("text-sm text-muted-foreground", s),
    ...a,
  });
});
ne.displayName = "FormDescription";
const S = o.forwardRef(({ className: s, children: a, ...t }, r) => {
  const { error: l, formMessageId: i } = Fe(),
    x = l ? String(l?.message ?? "") : a;
  return x
    ? e.jsx("p", {
        ref: r,
        id: i,
        className: n("text-sm font-medium text-destructive", s),
        ...t,
        children: x,
      })
    : null;
});
S.displayName = "FormMessage";
const b = o.forwardRef(
  ({ className: s, type: a, value: t, onChange: r, ...l }, i) => {
    const x = t !== void 0;
    return e.jsx("input", {
      type: a,
      ...(x ? { value: t ?? "" } : {}),
      onChange: r,
      className: n(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        s
      ),
      ref: i,
      ...l,
    });
  }
);
b.displayName = "Input";
const is = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("textarea", {
    className: n(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      s
    ),
    ref: t,
    ...a,
  })
);
is.displayName = "Textarea";
const Qa = pr,
  Xa = jr,
  ds = o.forwardRef(({ className: s, children: a, ...t }, r) =>
    e.jsxs(As, {
      ref: r,
      className: n(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        s
      ),
      ...t,
      children: [
        a,
        e.jsx(mr, {
          asChild: !0,
          children: e.jsx(xe, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
ds.displayName = As.displayName;
const Za = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Fs, {
    ref: t,
    className: n("flex cursor-default items-center justify-center py-1", s),
    ...a,
    children: e.jsx(rn, { className: "h-4 w-4" }),
  })
);
Za.displayName = Fs.displayName;
const et = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Ms, {
    ref: t,
    className: n("flex cursor-default items-center justify-center py-1", s),
    ...a,
    children: e.jsx(xe, { className: "h-4 w-4" }),
  })
);
et.displayName = Ms.displayName;
const cs = o.forwardRef(
  ({ className: s, children: a, position: t = "popper", ...r }, l) =>
    e.jsx(xr, {
      children: e.jsxs(Ls, {
        ref: l,
        className: n(
          "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
          t === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          s
        ),
        position: t,
        ...r,
        children: [
          e.jsx(Za, {}),
          e.jsx(ur, {
            className: n(
              "p-1",
              t === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: a,
          }),
          e.jsx(et, {}),
        ],
      }),
    })
);
cs.displayName = Ls.displayName;
const so = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(_s, {
    ref: t,
    className: n("py-1.5 pl-8 pr-2 text-sm font-semibold", s),
    ...a,
  })
);
so.displayName = _s.displayName;
const U = o.forwardRef(({ className: s, children: a, ...t }, r) =>
  e.jsxs(Es, {
    ref: r,
    className: n(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      s
    ),
    ...t,
    children: [
      e.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(hr, { children: e.jsx(me, { className: "h-4 w-4" }) }),
      }),
      e.jsx(fr, { children: a }),
    ],
  })
);
U.displayName = Es.displayName;
const ao = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Os, { ref: t, className: n("-mx-1 my-1 h-px bg-muted", s), ...a })
);
ao.displayName = Os.displayName;
const to = Y(
    "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
    {
      variants: {
        variant: {
          default: "bg-background text-foreground",
          destructive:
            "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  de = o.forwardRef(({ className: s, variant: a, ...t }, r) =>
    e.jsx("div", {
      ref: r,
      role: "alert",
      className: n(to({ variant: a }), s),
      ...t,
    })
  );
de.displayName = "Alert";
const Ve = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("h5", {
    ref: t,
    className: n("mb-1 font-medium leading-none tracking-tight", s),
    ...a,
  })
);
Ve.displayName = "AlertTitle";
const ce = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", {
    ref: t,
    className: n("text-sm [&_p]:leading-relaxed", s),
    ...a,
  })
);
ce.displayName = "AlertDescription";
const ro = ({ onSubmit: s, defaultValues: a }) => {
    const t = Zn(),
      r = fe(t, { defaultValues: a }),
      l = r.handleSubmit(async (i) => {
        await s(i);
      });
    return e.jsxs(j, {
      className: "w-full max-w-2xl",
      children: [
        e.jsxs(y, {
          children: [
            e.jsx(v, { children: "Create Strategy" }),
            e.jsx(T, {
              children: "Fill in the details to create a new strategy",
            }),
          ],
        }),
        e.jsx(p, {
          children: e.jsx(pe, {
            ...r,
            children: e.jsxs("form", {
              onSubmit: l,
              className: "space-y-6",
              children: [
                e.jsx(P, {
                  control: r.control,
                  name: "name",
                  render: ({ field: i }) =>
                    e.jsxs(w, {
                      children: [
                        e.jsx(C, { children: "Strategy Name" }),
                        e.jsx(R, {
                          children: e.jsx(b, {
                            placeholder: "Enter strategy name",
                            ...i,
                          }),
                        }),
                        e.jsx(S, {}),
                      ],
                    }),
                }),
                e.jsx(P, {
                  control: r.control,
                  name: "description",
                  render: ({ field: i }) =>
                    e.jsxs(w, {
                      children: [
                        e.jsx(C, { children: "Description (Optional)" }),
                        e.jsx(R, {
                          children: e.jsx(is, {
                            placeholder: "Enter strategy description",
                            rows: 4,
                            ...i,
                            value: i.value || "",
                          }),
                        }),
                        e.jsx(ne, {
                          children: "Optional description for your strategy",
                        }),
                        e.jsx(S, {}),
                      ],
                    }),
                }),
                e.jsx(P, {
                  control: r.control,
                  name: "amount",
                  render: ({ field: i }) =>
                    e.jsxs(w, {
                      children: [
                        e.jsx(C, { children: "Amount" }),
                        e.jsx(R, {
                          children: e.jsx(b, {
                            type: "text",
                            inputMode: "decimal",
                            placeholder: "0.00",
                            ...i,
                          }),
                        }),
                        e.jsx(ne, { children: "Enter the investment amount" }),
                        e.jsx(S, {}),
                      ],
                    }),
                }),
                e.jsx(P, {
                  control: r.control,
                  name: "riskLevel",
                  render: ({ field: i }) =>
                    e.jsxs(w, {
                      children: [
                        e.jsx(C, { children: "Risk Level" }),
                        e.jsxs(Qa, {
                          onValueChange: i.onChange,
                          defaultValue: i.value,
                          children: [
                            e.jsx(R, {
                              children: e.jsx(ds, {
                                children: e.jsx(Xa, {
                                  placeholder: "Select risk level",
                                }),
                              }),
                            }),
                            e.jsxs(cs, {
                              children: [
                                e.jsx(U, { value: "low", children: "Low" }),
                                e.jsx(U, {
                                  value: "medium",
                                  children: "Medium",
                                }),
                                e.jsx(U, { value: "high", children: "High" }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx(ne, {
                          children: "Choose the risk level for this strategy",
                        }),
                        e.jsx(S, {}),
                      ],
                    }),
                }),
                e.jsx(P, {
                  control: r.control,
                  name: "startDate",
                  render: ({ field: i }) =>
                    e.jsxs(w, {
                      children: [
                        e.jsx(C, { children: "Start Date" }),
                        e.jsx(R, {
                          children: e.jsx(b, {
                            type: "date",
                            ...i,
                            value: i.value || "",
                          }),
                        }),
                        e.jsx(ne, {
                          children: "Select the start date for this strategy",
                        }),
                        e.jsx(S, {}),
                      ],
                    }),
                }),
                r.formState.isSubmitSuccessful &&
                  e.jsx(de, {
                    children: e.jsx(ce, {
                      children: "Form submitted successfully!",
                    }),
                  }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsx(d, {
                      type: "submit",
                      disabled: r.formState.isSubmitting,
                      children: r.formState.isSubmitting
                        ? "Submitting..."
                        : "Create Strategy",
                    }),
                    e.jsx(d, {
                      type: "button",
                      variant: "outline",
                      onClick: () => r.reset(),
                      disabled: r.formState.isSubmitting,
                      children: "Reset",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  no = Nr,
  Ge = o.forwardRef(({ className: s, ...a }, t) =>
    e.jsx(gr, { ref: t, className: n("border-b", s), ...a })
  );
Ge.displayName = "AccordionItem";
const qe = o.forwardRef(({ className: s, children: a, ...t }, r) =>
  e.jsx(br, {
    className: "flex",
    children: e.jsxs(Bs, {
      ref: r,
      className: n(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        s
      ),
      ...t,
      children: [
        a,
        e.jsx(xe, {
          className: "h-4 w-4 shrink-0 transition-transform duration-200",
        }),
      ],
    }),
  })
);
qe.displayName = Bs.displayName;
const We = o.forwardRef(({ className: s, children: a, ...t }, r) =>
  e.jsx(Hs, {
    ref: r,
    className:
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...t,
    children: e.jsx("div", { className: n("pb-4 pt-0", s), children: a }),
  })
);
We.displayName = Hs.displayName;
const oo = vr,
  lo = wr,
  io = yr,
  st = o.forwardRef(({ className: s, ...a }, t) =>
    e.jsx(Vs, {
      className: n(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        s
      ),
      ...a,
      ref: t,
    })
  );
st.displayName = Vs.displayName;
const at = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsxs(io, {
    children: [
      e.jsx(st, {}),
      e.jsx(Gs, {
        ref: t,
        className: n(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          s
        ),
        ...a,
      }),
    ],
  })
);
at.displayName = Gs.displayName;
const tt = ({ className: s, ...a }) =>
  e.jsx("div", {
    className: n("flex flex-col space-y-2 text-center sm:text-left", s),
    ...a,
  });
tt.displayName = "AlertDialogHeader";
const rt = ({ className: s, ...a }) =>
  e.jsx("div", {
    className: n(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      s
    ),
    ...a,
  });
rt.displayName = "AlertDialogFooter";
const nt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(qs, { ref: t, className: n("text-lg font-semibold", s), ...a })
);
nt.displayName = qs.displayName;
const ot = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Ws, { ref: t, className: n("text-sm text-muted-foreground", s), ...a })
);
ot.displayName = Ws.displayName;
const lt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Us, { ref: t, className: n(X(), s), ...a })
);
lt.displayName = Us.displayName;
const it = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Ks, {
    ref: t,
    className: n(X({ variant: "outline" }), "mt-2 sm:mt-0", s),
    ...a,
  })
);
it.displayName = Ks.displayName;
const co = Cr,
  mo = Y(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive:
            "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
          outline: "text-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  );
function ge({ className: s, variant: a, ...t }) {
  return e.jsx("div", { className: n(mo({ variant: a }), s), ...t });
}
const ee = o.forwardRef(({ ...s }, a) =>
  e.jsx("nav", { ref: a, "aria-label": "breadcrumb", ...s })
);
ee.displayName = "Breadcrumb";
const se = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("ol", {
    ref: t,
    className: n(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      s
    ),
    ...a,
  })
);
se.displayName = "BreadcrumbList";
const I = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("li", {
    ref: t,
    className: n("inline-flex items-center gap-1.5", s),
    ...a,
  })
);
I.displayName = "BreadcrumbItem";
const E = o.forwardRef(({ asChild: s, className: a, ...t }, r) => {
  const l = s ? Ze : "a";
  return e.jsx(l, {
    ref: r,
    className: n("transition-colors hover:text-foreground", a),
    ...t,
  });
});
E.displayName = "BreadcrumbLink";
const ae = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("span", {
    ref: t,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: n("font-normal text-foreground", s),
    ...a,
  })
);
ae.displayName = "BreadcrumbPage";
const O = ({ children: s, className: a, ...t }) =>
  e.jsx("li", {
    role: "presentation",
    "aria-hidden": "true",
    className: n("[&>svg]:w-3.5 [&>svg]:h-3.5", a),
    ...t,
    children: s ?? e.jsx(Z, {}),
  });
O.displayName = "BreadcrumbSeparator";
function xo({
  className: s,
  classNames: a,
  showOutsideDays: t = !0,
  captionLayout: r = "label",
  buttonVariant: l = "ghost",
  formatters: i,
  components: x,
  ...N
}) {
  const h = Oa();
  return e.jsx(nn, {
    showOutsideDays: t,
    className: n(
      "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
      String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
      String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
      s
    ),
    captionLayout: r,
    formatters: {
      formatMonthDropdown: (u) =>
        u.toLocaleString("default", { month: "short" }),
      ...i,
    },
    classNames: {
      root: n("w-fit", h.root),
      months: n("relative flex flex-col gap-4 md:flex-row", h.months),
      month: n("flex w-full flex-col gap-4", h.month),
      nav: n(
        "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
        h.nav
      ),
      button_previous: n(
        X({ variant: l }),
        "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50",
        h.button_previous
      ),
      button_next: n(
        X({ variant: l }),
        "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50",
        h.button_next
      ),
      month_caption: n(
        "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
        h.month_caption
      ),
      dropdowns: n(
        "flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium",
        h.dropdowns
      ),
      dropdown_root: n(
        "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
        h.dropdown_root
      ),
      dropdown: n("bg-popover absolute inset-0 opacity-0", h.dropdown),
      caption_label: n(
        "select-none font-medium",
        r === "label"
          ? "text-sm"
          : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
        h.caption_label
      ),
      table: "w-full border-collapse",
      weekdays: n("flex", h.weekdays),
      weekday: n(
        "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
        h.weekday
      ),
      week: n("mt-2 flex w-full", h.week),
      week_number_header: n(
        "w-[--cell-size] select-none",
        h.week_number_header
      ),
      week_number: n(
        "text-muted-foreground select-none text-[0.8rem]",
        h.week_number
      ),
      day: n(
        "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
        h.day
      ),
      range_start: n("bg-accent rounded-l-md", h.range_start),
      range_middle: n("rounded-none", h.range_middle),
      range_end: n("bg-accent rounded-r-md", h.range_end),
      today: n(
        "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
        h.today
      ),
      outside: n(
        "text-muted-foreground aria-selected:text-muted-foreground",
        h.outside
      ),
      disabled: n("text-muted-foreground opacity-50", h.disabled),
      hidden: n("invisible", h.hidden),
      ...a,
    },
    components: {
      Root: ({ className: u, rootRef: k, ...$ }) =>
        e.jsx("div", {
          "data-slot": "calendar",
          ref: k,
          className: n(u),
          ...$,
        }),
      Chevron: ({ className: u, orientation: k, ...$ }) =>
        k === "left"
          ? e.jsx(Ba, { className: n("size-4", u), ...$ })
          : k === "right"
            ? e.jsx(Z, { className: n("size-4", u), ...$ })
            : e.jsx(xe, { className: n("size-4", u), ...$ }),
      DayButton: uo,
      WeekNumber: ({ children: u, ...k }) =>
        e.jsx("td", {
          ...k,
          children: e.jsx("div", {
            className:
              "flex size-[--cell-size] items-center justify-center text-center",
            children: u,
          }),
        }),
      ...x,
    },
    ...N,
  });
}
function uo({ className: s, day: a, modifiers: t, ...r }) {
  const l = Oa(),
    i = o.useRef(null);
  return (
    o.useEffect(() => {
      t.focused && i.current?.focus();
    }, [t.focused]),
    e.jsx(d, {
      ref: i,
      variant: "ghost",
      size: "icon",
      "data-day": a.date.toLocaleDateString(),
      "data-selected-single":
        t.selected && !t.range_start && !t.range_end && !t.range_middle,
      "data-range-start": t.range_start,
      "data-range-end": t.range_end,
      "data-range-middle": t.range_middle,
      className: n(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        l.day,
        s
      ),
      ...r,
    })
  );
}
const dt = o.createContext(null);
function Me() {
  const s = o.useContext(dt);
  if (!s) throw new Error("useCarousel must be used within a <Carousel />");
  return s;
}
const ct = o.forwardRef(
  (
    {
      orientation: s = "horizontal",
      opts: a,
      setApi: t,
      plugins: r,
      className: l,
      children: i,
      ...x
    },
    N
  ) => {
    const [h, u] = on({ ...a, axis: s === "horizontal" ? "x" : "y" }, r),
      [k, $] = o.useState(!1),
      [te, Le] = o.useState(!1),
      L = o.useCallback((M) => {
        M && ($(M.canScrollPrev()), Le(M.canScrollNext()));
      }, []),
      A = o.useCallback(() => {
        u?.scrollPrev();
      }, [u]),
      re = o.useCallback(() => {
        u?.scrollNext();
      }, [u]),
      _e = o.useCallback(
        (M) => {
          M.key === "ArrowLeft"
            ? (M.preventDefault(), A())
            : M.key === "ArrowRight" && (M.preventDefault(), re());
        },
        [A, re]
      );
    return (
      o.useEffect(() => {
        !u || !t || t(u);
      }, [u, t]),
      o.useEffect(() => {
        if (u)
          return (
            L(u),
            u.on("reInit", L),
            u.on("select", L),
            () => {
              u?.off("select", L);
            }
          );
      }, [u, L]),
      e.jsx(dt.Provider, {
        value: {
          carouselRef: h,
          api: u,
          opts: a,
          orientation: s || (a?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: A,
          scrollNext: re,
          canScrollPrev: k,
          canScrollNext: te,
        },
        children: e.jsx("div", {
          ref: N,
          onKeyDownCapture: _e,
          className: n("relative", l),
          role: "region",
          "aria-roledescription": "carousel",
          ...x,
          children: i,
        }),
      })
    );
  }
);
ct.displayName = "Carousel";
const mt = o.forwardRef(({ className: s, ...a }, t) => {
  const { carouselRef: r, orientation: l } = Me();
  return e.jsx("div", {
    ref: r,
    className: "overflow-hidden",
    children: e.jsx("div", {
      ref: t,
      className: n("flex", l === "horizontal" ? "-ml-4" : "-mt-4 flex-col", s),
      ...a,
    }),
  });
});
mt.displayName = "CarouselContent";
const xt = o.forwardRef(({ className: s, ...a }, t) => {
  const { orientation: r } = Me();
  return e.jsx("div", {
    ref: t,
    role: "group",
    "aria-roledescription": "slide",
    className: n(
      "min-w-0 shrink-0 grow-0 basis-full",
      r === "horizontal" ? "pl-4" : "pt-4",
      s
    ),
    ...a,
  });
});
xt.displayName = "CarouselItem";
const ut = o.forwardRef(
  ({ className: s, variant: a = "outline", size: t = "icon", ...r }, l) => {
    const { orientation: i, scrollPrev: x, canScrollPrev: N } = Me();
    return e.jsxs(d, {
      ref: l,
      variant: a,
      size: t,
      className: n(
        "absolute h-8 w-8 rounded-full",
        i === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2 md:-left-12"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        s
      ),
      disabled: !N,
      onClick: x,
      ...r,
      children: [
        e.jsx(ln, { className: "h-4 w-4" }),
        e.jsx("span", { className: "sr-only", children: "Previous slide" }),
      ],
    });
  }
);
ut.displayName = "CarouselPrevious";
const ht = o.forwardRef(
  ({ className: s, variant: a = "outline", size: t = "icon", ...r }, l) => {
    const { orientation: i, scrollNext: x, canScrollNext: N } = Me();
    return e.jsxs(d, {
      ref: l,
      variant: a,
      size: t,
      className: n(
        "absolute h-8 w-8 rounded-full",
        i === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2 md:-right-12"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        s
      ),
      disabled: !N,
      onClick: x,
      ...r,
      children: [
        e.jsx(dn, { className: "h-4 w-4" }),
        e.jsx("span", { className: "sr-only", children: "Next slide" }),
      ],
    });
  }
);
ht.displayName = "CarouselNext";
const ft = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Ys, {
    ref: t,
    className: n(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      s
    ),
    ...a,
    children: e.jsx(Rr, {
      className: n("grid place-content-center text-current"),
      children: e.jsx(me, { className: "h-4 w-4" }),
    }),
  })
);
ft.displayName = Ys.displayName;
const ho = Sr,
  fo = kr,
  po = Pr,
  pt = o.forwardRef(({ className: s, ...a }, t) =>
    e.jsx(z, {
      ref: t,
      className: n(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        s
      ),
      ...a,
    })
  );
pt.displayName = z.displayName;
const jt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsxs("div", {
    className: "flex items-center border-b px-3",
    "cmdk-input-wrapper": "",
    children: [
      e.jsx(cn, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      e.jsx(z.Input, {
        ref: t,
        className: n(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          s
        ),
        ...a,
      }),
    ],
  })
);
jt.displayName = z.Input.displayName;
const gt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(z.List, {
    ref: t,
    className: n("max-h-[300px] overflow-y-auto overflow-x-hidden", s),
    ...a,
  })
);
gt.displayName = z.List.displayName;
const bt = o.forwardRef((s, a) =>
  e.jsx(z.Empty, { ref: a, className: "py-6 text-center text-sm", ...s })
);
bt.displayName = z.Empty.displayName;
const Nt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(z.Group, {
    ref: t,
    className: n(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      s
    ),
    ...a,
  })
);
Nt.displayName = z.Group.displayName;
const jo = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(z.Separator, { ref: t, className: n("-mx-1 h-px bg-border", s), ...a })
);
jo.displayName = z.Separator.displayName;
const be = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(z.Item, {
    ref: t,
    className: n(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      s
    ),
    ...a,
  })
);
be.displayName = z.Item.displayName;
const go = Ir,
  bo = zr,
  No = o.forwardRef(({ className: s, inset: a, children: t, ...r }, l) =>
    e.jsxs(Js, {
      ref: l,
      className: n(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        a && "pl-8",
        s
      ),
      ...r,
      children: [t, e.jsx(Z, { className: "ml-auto h-4 w-4" })],
    })
  );
No.displayName = Js.displayName;
const yo = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Qs, {
    ref: t,
    className: n(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-context-menu-content-transform-origin]",
      s
    ),
    ...a,
  })
);
yo.displayName = Qs.displayName;
const yt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Tr, {
    children: e.jsx(Xs, {
      ref: t,
      className: n(
        "z-50 max-h-[--radix-context-menu-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-context-menu-content-transform-origin]",
        s
      ),
      ...a,
    }),
  })
);
yt.displayName = Xs.displayName;
const Ne = o.forwardRef(({ className: s, inset: a, ...t }, r) =>
  e.jsx(Zs, {
    ref: r,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      a && "pl-8",
      s
    ),
    ...t,
  })
);
Ne.displayName = Zs.displayName;
const vo = o.forwardRef(({ className: s, children: a, checked: t, ...r }, l) =>
  e.jsxs(ea, {
    ref: l,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      s
    ),
    checked: t,
    ...r,
    children: [
      e.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(sa, { children: e.jsx(me, { className: "h-4 w-4" }) }),
      }),
      a,
    ],
  })
);
vo.displayName = ea.displayName;
const wo = o.forwardRef(({ className: s, children: a, ...t }, r) =>
  e.jsxs(aa, {
    ref: r,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      s
    ),
    ...t,
    children: [
      e.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(sa, {
          children: e.jsx(Ae, { className: "h-2 w-2 fill-current" }),
        }),
      }),
      a,
    ],
  })
);
wo.displayName = aa.displayName;
const Co = o.forwardRef(({ className: s, inset: a, ...t }, r) =>
  e.jsx(ta, {
    ref: r,
    className: n(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      a && "pl-8",
      s
    ),
    ...t,
  })
);
Co.displayName = ta.displayName;
const Ro = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(ra, { ref: t, className: n("-mx-1 my-1 h-px bg-border", s), ...a })
);
Ro.displayName = ra.displayName;
const vt = ({ shouldScaleBackground: s = !0, ...a }) =>
  e.jsx(F.Root, { shouldScaleBackground: s, ...a });
vt.displayName = "Drawer";
const So = F.Trigger,
  ko = F.Portal,
  Po = F.Close,
  wt = o.forwardRef(({ className: s, ...a }, t) =>
    e.jsx(F.Overlay, {
      ref: t,
      className: n("fixed inset-0 z-50 bg-black/80", s),
      ...a,
    })
  );
wt.displayName = F.Overlay.displayName;
const Ct = o.forwardRef(({ className: s, children: a, ...t }, r) =>
  e.jsxs(ko, {
    children: [
      e.jsx(wt, {}),
      e.jsxs(F.Content, {
        ref: r,
        className: n(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
          s
        ),
        ...t,
        children: [
          e.jsx("div", {
            className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted",
          }),
          a,
        ],
      }),
    ],
  })
);
Ct.displayName = "DrawerContent";
const Rt = ({ className: s, ...a }) =>
  e.jsx("div", {
    className: n("grid gap-1.5 p-4 text-center sm:text-left", s),
    ...a,
  });
Rt.displayName = "DrawerHeader";
const St = ({ className: s, ...a }) =>
  e.jsx("div", { className: n("mt-auto flex flex-col gap-2 p-4", s), ...a });
St.displayName = "DrawerFooter";
const kt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(F.Title, {
    ref: t,
    className: n("text-lg font-semibold leading-none tracking-tight", s),
    ...a,
  })
);
kt.displayName = F.Title.displayName;
const Pt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(F.Description, {
    ref: t,
    className: n("text-sm text-muted-foreground", s),
    ...a,
  })
);
Pt.displayName = F.Description.displayName;
const To = Dr,
  Io = $r,
  Tt = o.forwardRef(
    ({ className: s, align: a = "center", sideOffset: t = 4, ...r }, l) =>
      e.jsx(na, {
        ref: l,
        align: a,
        sideOffset: t,
        className: n(
          "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-hover-card-content-transform-origin]",
          s
        ),
        ...r,
      })
  );
Tt.displayName = na.displayName;
const It = o.forwardRef(({ className: s, containerClassName: a, ...t }, r) =>
  e.jsx(mn, {
    ref: r,
    containerClassName: n(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      a
    ),
    className: n("disabled:cursor-not-allowed", s),
    ...t,
  })
);
It.displayName = "InputOTP";
const zt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", { ref: t, className: n("flex items-center", s), ...a })
);
zt.displayName = "InputOTPGroup";
const oe = o.forwardRef(({ index: s, className: a, ...t }, r) => {
  const l = o.useContext(xn),
    { char: i, hasFakeCaret: x, isActive: N } = l.slots[s];
  return e.jsxs("div", {
    ref: r,
    className: n(
      "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
      N && "z-10 ring-2 ring-ring ring-offset-background",
      a
    ),
    ...t,
    children: [
      i,
      x &&
        e.jsx("div", {
          className:
            "pointer-events-none absolute inset-0 flex items-center justify-center",
          children: e.jsx("div", {
            className:
              "h-4 w-px animate-caret-blink bg-foreground duration-1000",
          }),
        }),
    ],
  });
});
oe.displayName = "InputOTPSlot";
const zo = o.forwardRef(({ ...s }, a) =>
  e.jsx("div", { ref: a, role: "separator", ...s, children: e.jsx(un, {}) })
);
zo.displayName = "InputOTPSeparator";
function us({ ...s }) {
  return e.jsx(Fr, { ...s });
}
const Dt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(oa, {
    ref: t,
    className: n(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      s
    ),
    ...a,
  })
);
Dt.displayName = oa.displayName;
const Ue = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(la, {
    ref: t,
    className: n(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      s
    ),
    ...a,
  })
);
Ue.displayName = la.displayName;
const Do = o.forwardRef(({ className: s, inset: a, children: t, ...r }, l) =>
  e.jsxs(ia, {
    ref: l,
    className: n(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      a && "pl-8",
      s
    ),
    ...r,
    children: [t, e.jsx(Z, { className: "ml-auto h-4 w-4" })],
  })
);
Do.displayName = ia.displayName;
const $o = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(da, {
    ref: t,
    className: n(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",
      s
    ),
    ...a,
  })
);
$o.displayName = da.displayName;
const Ke = o.forwardRef(
  (
    {
      className: s,
      align: a = "start",
      alignOffset: t = -4,
      sideOffset: r = 8,
      ...l
    },
    i
  ) =>
    e.jsx(Ar, {
      children: e.jsx(ca, {
        ref: i,
        align: a,
        alignOffset: t,
        sideOffset: r,
        className: n(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",
          s
        ),
        ...l,
      }),
    })
);
Ke.displayName = ca.displayName;
const J = o.forwardRef(({ className: s, inset: a, ...t }, r) =>
  e.jsx(ma, {
    ref: r,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      a && "pl-8",
      s
    ),
    ...t,
  })
);
J.displayName = ma.displayName;
const Ao = o.forwardRef(({ className: s, children: a, checked: t, ...r }, l) =>
  e.jsxs(xa, {
    ref: l,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      s
    ),
    checked: t,
    ...r,
    children: [
      e.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(ua, { children: e.jsx(me, { className: "h-4 w-4" }) }),
      }),
      a,
    ],
  })
);
Ao.displayName = xa.displayName;
const Fo = o.forwardRef(({ className: s, children: a, ...t }, r) =>
  e.jsxs(ha, {
    ref: r,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      s
    ),
    ...t,
    children: [
      e.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(ua, {
          children: e.jsx(Ae, { className: "h-2 w-2 fill-current" }),
        }),
      }),
      a,
    ],
  })
);
Fo.displayName = ha.displayName;
const Mo = o.forwardRef(({ className: s, inset: a, ...t }, r) =>
  e.jsx(fa, {
    ref: r,
    className: n("px-2 py-1.5 text-sm font-semibold", a && "pl-8", s),
    ...t,
  })
);
Mo.displayName = fa.displayName;
const $t = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(pa, { ref: t, className: n("-mx-1 my-1 h-px bg-muted", s), ...a })
);
$t.displayName = pa.displayName;
const At = o.forwardRef(({ className: s, children: a, ...t }, r) =>
  e.jsxs(ja, {
    ref: r,
    className: n(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      s
    ),
    ...t,
    children: [a, e.jsx(_t, {})],
  })
);
At.displayName = ja.displayName;
const Ft = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(ga, {
    ref: t,
    className: n(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      s
    ),
    ...a,
  })
);
Ft.displayName = ga.displayName;
const Lo = Mr,
  _o = Y(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
  ),
  Mt = o.forwardRef(({ className: s, children: a, ...t }, r) =>
    e.jsxs(ba, {
      ref: r,
      className: n(_o(), "group", s),
      ...t,
      children: [
        a,
        " ",
        e.jsx(xe, {
          className:
            "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true",
        }),
      ],
    })
  );
Mt.displayName = ba.displayName;
const Lt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Na, {
    ref: t,
    className: n(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      s
    ),
    ...a,
  })
);
Lt.displayName = Na.displayName;
const Eo = Lr,
  _t = o.forwardRef(({ className: s, ...a }, t) =>
    e.jsx("div", {
      className: n("absolute left-0 top-full flex justify-center"),
      children: e.jsx(ya, {
        className: n(
          "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
          s
        ),
        ref: t,
        ...a,
      }),
    })
  );
_t.displayName = ya.displayName;
const Oo = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(va, {
    ref: t,
    className: n(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      s
    ),
    ...a,
    children: e.jsx("div", {
      className:
        "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md",
    }),
  })
);
Oo.displayName = va.displayName;
const Et = ({ className: s, ...a }) =>
  e.jsx("nav", {
    role: "navigation",
    "aria-label": "pagination",
    className: n("mx-auto flex w-full justify-center", s),
    ...a,
  });
Et.displayName = "Pagination";
const Ot = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("ul", {
    ref: t,
    className: n("flex flex-row items-center gap-1", s),
    ...a,
  })
);
Ot.displayName = "PaginationContent";
const V = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("li", { ref: t, className: n("", s), ...a })
);
V.displayName = "PaginationItem";
const Q = ({ className: s, isActive: a, size: t = "icon", ...r }) =>
  e.jsx("a", {
    "aria-current": a ? "page" : void 0,
    className: n(X({ variant: a ? "outline" : "ghost", size: t }), s),
    ...r,
  });
Q.displayName = "PaginationLink";
const Bt = ({ className: s, ...a }) =>
  e.jsxs(Q, {
    "aria-label": "Go to previous page",
    size: "default",
    className: n("gap-1 pl-2.5", s),
    ...a,
    children: [
      e.jsx(Ba, { className: "h-4 w-4" }),
      e.jsx("span", { children: "Previous" }),
    ],
  });
Bt.displayName = "PaginationPrevious";
const Ht = ({ className: s, ...a }) =>
  e.jsxs(Q, {
    "aria-label": "Go to next page",
    size: "default",
    className: n("gap-1 pr-2.5", s),
    ...a,
    children: [
      e.jsx("span", { children: "Next" }),
      e.jsx(Z, { className: "h-4 w-4" }),
    ],
  });
Ht.displayName = "PaginationNext";
const Vt = ({ className: s, ...a }) =>
  e.jsxs("span", {
    "aria-hidden": !0,
    className: n("flex h-9 w-9 items-center justify-center", s),
    ...a,
    children: [
      e.jsx(hn, { className: "h-4 w-4" }),
      e.jsx("span", { className: "sr-only", children: "More pages" }),
    ],
  });
Vt.displayName = "PaginationEllipsis";
const Bo = Er,
  Ho = Or,
  Gt = o.forwardRef(
    ({ className: s, align: a = "center", sideOffset: t = 4, ...r }, l) =>
      e.jsx(_r, {
        children: e.jsx(wa, {
          ref: l,
          align: a,
          sideOffset: t,
          className: n(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",
            s
          ),
          ...r,
        }),
      })
  );
Gt.displayName = wa.displayName;
const qt = o.forwardRef(({ className: s, value: a, ...t }, r) =>
  e.jsx(Ca, {
    ref: r,
    className: n(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      s
    ),
    ...t,
    children: e.jsx(Br, {
      className: "h-full w-full flex-1 bg-primary transition-all",
      style: { transform: `translateX(-${100 - (a || 0)}%)` },
    }),
  })
);
qt.displayName = Ca.displayName;
const Wt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Ra, { className: n("grid gap-2", s), ...a, ref: t })
);
Wt.displayName = Ra.displayName;
const ye = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Sa, {
    ref: t,
    className: n(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      s
    ),
    ...a,
    children: e.jsx(Hr, {
      className: "flex items-center justify-center",
      children: e.jsx(Ae, {
        className: "h-2.5 w-2.5 fill-current text-current",
      }),
    }),
  })
);
ye.displayName = Sa.displayName;
const Vo = ({ className: s, ...a }) =>
    e.jsx(pn, {
      className: n(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        s
      ),
      ...a,
    }),
  hs = fn,
  Go = ({ withHandle: s, className: a, ...t }) =>
    e.jsx(jn, {
      className: n(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        a
      ),
      ...t,
      children:
        s &&
        e.jsx("div", {
          className:
            "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",
          children: e.jsx(gn, { className: "h-2.5 w-2.5" }),
        }),
    }),
  Ut = o.forwardRef(({ className: s, children: a, ...t }, r) =>
    e.jsxs(ka, {
      ref: r,
      className: n("relative overflow-hidden", s),
      ...t,
      children: [
        e.jsx(Vr, {
          className: "h-full w-full rounded-[inherit]",
          children: a,
        }),
        e.jsx(Kt, {}),
        e.jsx(Gr, {}),
      ],
    })
  );
Ut.displayName = ka.displayName;
const Kt = o.forwardRef(
  ({ className: s, orientation: a = "vertical", ...t }, r) =>
    e.jsx(Pa, {
      ref: r,
      orientation: a,
      className: n(
        "flex touch-none select-none transition-colors",
        a === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        a === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        s
      ),
      ...t,
      children: e.jsx(qr, {
        className: "relative flex-1 rounded-full bg-border",
      }),
    })
);
Kt.displayName = Pa.displayName;
const ve = o.forwardRef(
  (
    { className: s, orientation: a = "horizontal", decorative: t = !0, ...r },
    l
  ) =>
    e.jsx(Ta, {
      ref: l,
      decorative: t,
      orientation: a,
      className: n(
        "shrink-0 bg-border",
        a === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        s
      ),
      ...r,
    })
);
ve.displayName = Ta.displayName;
function Oe({ className: s, ...a }) {
  return e.jsx("div", {
    className: n("animate-pulse rounded-md bg-muted", s),
    ...a,
  });
}
const Yt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsxs(Ia, {
    ref: t,
    className: n("relative flex w-full touch-none select-none items-center", s),
    ...a,
    children: [
      e.jsx(Wr, {
        className:
          "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
        children: e.jsx(Ur, { className: "absolute h-full bg-primary" }),
      }),
      e.jsx(Kr, {
        className:
          "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      }),
    ],
  })
);
Yt.displayName = Ia.displayName;
const Jt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", {
    className: "relative w-full overflow-auto",
    children: e.jsx("table", {
      ref: t,
      className: n("w-full caption-bottom text-sm", s),
      ...a,
    }),
  })
);
Jt.displayName = "Table";
const Qt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("thead", { ref: t, className: n("[&_tr]:border-b", s), ...a })
);
Qt.displayName = "TableHeader";
const Xt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("tbody", {
    ref: t,
    className: n("[&_tr:last-child]:border-0", s),
    ...a,
  })
);
Xt.displayName = "TableBody";
const qo = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("tfoot", {
    ref: t,
    className: n("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", s),
    ...a,
  })
);
qo.displayName = "TableFooter";
const we = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("tr", {
    ref: t,
    className: n(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      s
    ),
    ...a,
  })
);
we.displayName = "TableRow";
const le = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("th", {
    ref: t,
    className: n(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      s
    ),
    ...a,
  })
);
le.displayName = "TableHead";
const _ = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("td", {
    ref: t,
    className: n("p-4 align-middle [&:has([role=checkbox])]:pr-0", s),
    ...a,
  })
);
_.displayName = "TableCell";
const Zt = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("caption", {
    ref: t,
    className: n("mt-4 text-sm text-muted-foreground", s),
    ...a,
  })
);
Zt.displayName = "TableCaption";
const Wo = Yr,
  er = o.forwardRef(({ className: s, ...a }, t) =>
    e.jsx(za, {
      ref: t,
      className: n(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        s
      ),
      ...a,
    })
  );
er.displayName = za.displayName;
const Ye = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Da, {
    ref: t,
    className: n(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      s
    ),
    ...a,
  })
);
Ye.displayName = Da.displayName;
const Je = o.forwardRef(({ className: s, ...a }, t) =>
  e.jsx($a, {
    ref: t,
    className: n(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      s
    ),
    ...a,
  })
);
Je.displayName = $a.displayName;
const sr = Y(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
    {
      variants: {
        variant: {
          default: "bg-transparent",
          outline:
            "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        },
        size: {
          default: "h-10 px-3 min-w-10",
          sm: "h-9 px-2.5 min-w-9",
          lg: "h-11 px-5 min-w-11",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Qe = o.forwardRef(({ className: s, variant: a, size: t, ...r }, l) =>
    e.jsx(Aa, {
      ref: l,
      className: n(sr({ variant: a, size: t, className: s })),
      ...r,
    })
  );
Qe.displayName = Aa.displayName;
const ar = o.createContext({ size: "default", variant: "default" }),
  tr = o.forwardRef(
    ({ className: s, variant: a, size: t, children: r, ...l }, i) =>
      e.jsx(Fa, {
        ref: i,
        className: n("flex items-center justify-center gap-1", s),
        ...l,
        children: e.jsx(ar.Provider, {
          value: { variant: a, size: t },
          children: r,
        }),
      })
  );
tr.displayName = Fa.displayName;
const Ce = o.forwardRef(
  ({ className: s, children: a, variant: t, size: r, ...l }, i) => {
    const x = o.useContext(ar);
    return e.jsx(Ma, {
      ref: i,
      className: n(sr({ variant: x.variant || t, size: x.size || r }), s),
      ...l,
      children: a,
    });
  }
);
Ce.displayName = Ma.displayName;
const Uo = Jr,
  Ko = Qr,
  Yo = Xr,
  rr = o.forwardRef(({ className: s, sideOffset: a = 4, ...t }, r) =>
    e.jsx(La, {
      ref: r,
      sideOffset: a,
      className: n(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        s
      ),
      ...t,
    })
  );
rr.displayName = La.displayName;
const Jo = () => {
    const [s, a] = o.useState(new Date()),
      [t, r] = o.useState([50]);
    return e.jsx("div", {
      className: "space-y-8 md:space-y-12",
      children: e.jsxs("div", {
        className: "mx-auto w-full max-w-6xl space-y-8 md:space-y-12 md:px-4",
        children: [
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 1, children: "Design System Styleguide" }),
              e.jsx(m, {
                variant: "lead",
                children:
                  "A comprehensive reference for all shadcn/ui components and design tokens.",
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Design Tokens" }),
              e.jsxs(j, {
                children: [
                  e.jsxs(y, {
                    children: [
                      e.jsx(v, { children: "Color Palette" }),
                      e.jsx(T, {
                        children:
                          "Primary color tokens used throughout the application",
                      }),
                    ],
                  }),
                  e.jsx(p, {
                    children: e.jsxs("div", {
                      className: "grid grid-cols-2 gap-4 md:grid-cols-4",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("div", {
                              className: "h-16 rounded-md bg-primary",
                            }),
                            e.jsx(m, {
                              variant: "small",
                              className: "font-medium",
                              children: "Primary",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("div", {
                              className: "h-16 rounded-md bg-secondary",
                            }),
                            e.jsx(m, {
                              variant: "small",
                              className: "font-medium",
                              children: "Secondary",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("div", {
                              className: "h-16 rounded-md bg-destructive",
                            }),
                            e.jsx(m, {
                              variant: "small",
                              className: "font-medium",
                              children: "Destructive",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("div", {
                              className: "h-16 rounded-md bg-muted",
                            }),
                            e.jsx(m, {
                              variant: "small",
                              className: "font-medium",
                              children: "Muted",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Typography" }),
              e.jsxs(j, {
                children: [
                  e.jsx(y, { children: e.jsx(v, { children: "Text Styles" }) }),
                  e.jsxs(p, {
                    className: "space-y-4",
                    children: [
                      e.jsx(c, { level: 1, children: "Heading 1" }),
                      e.jsx(c, { level: 2, children: "Heading 2" }),
                      e.jsx(c, { level: 3, children: "Heading 3" }),
                      e.jsx(m, {
                        variant: "lead",
                        children: "Lead text - larger and more prominent",
                      }),
                      e.jsx(m, { children: "Default body text" }),
                      e.jsx(m, {
                        variant: "small",
                        children: "Small text for captions and labels",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Buttons" }),
              e.jsxs(j, {
                children: [
                  e.jsx(y, {
                    children: e.jsx(v, { children: "Button Variants" }),
                  }),
                  e.jsxs(p, {
                    className: "flex flex-wrap gap-2",
                    children: [
                      e.jsx(d, { children: "Default" }),
                      e.jsx(d, { variant: "secondary", children: "Secondary" }),
                      e.jsx(d, {
                        variant: "destructive",
                        children: "Destructive",
                      }),
                      e.jsx(d, { variant: "outline", children: "Outline" }),
                      e.jsx(d, { variant: "ghost", children: "Ghost" }),
                      e.jsx(d, { variant: "link", children: "Link" }),
                    ],
                  }),
                  e.jsxs(p, {
                    className: "flex flex-wrap gap-2",
                    children: [
                      e.jsx(d, { size: "sm", children: "Small" }),
                      e.jsx(d, { size: "default", children: "Default" }),
                      e.jsx(d, { size: "lg", children: "Large" }),
                      e.jsx(d, {
                        size: "icon",
                        children: e.jsx(Ea, { className: "h-4 w-4" }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Accordion" }),
              e.jsx(j, {
                children: e.jsx(p, {
                  className: "pt-6",
                  children: e.jsxs(no, {
                    type: "single",
                    collapsible: !0,
                    className: "w-full",
                    children: [
                      e.jsxs(Ge, {
                        value: "item-1",
                        children: [
                          e.jsx(qe, { children: "Is it accessible?" }),
                          e.jsx(We, {
                            children:
                              "Yes. It adheres to the WAI-ARIA design pattern.",
                          }),
                        ],
                      }),
                      e.jsxs(Ge, {
                        value: "item-2",
                        children: [
                          e.jsx(qe, { children: "Is it styled?" }),
                          e.jsx(We, {
                            children:
                              "Yes. It comes with default styles that match the other components' aesthetic.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Alert" }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsxs(de, {
                    children: [
                      e.jsx(Ve, { children: "Heads up!" }),
                      e.jsx(ce, {
                        children: "This is a default alert message.",
                      }),
                    ],
                  }),
                  e.jsxs(de, {
                    variant: "destructive",
                    children: [
                      e.jsx(Ve, { children: "Error" }),
                      e.jsx(ce, {
                        children: "This is a destructive alert message.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Alert Dialog" }),
              e.jsxs(oo, {
                children: [
                  e.jsx(lo, {
                    asChild: !0,
                    children: e.jsx(d, {
                      variant: "outline",
                      children: "Show Alert Dialog",
                    }),
                  }),
                  e.jsxs(at, {
                    children: [
                      e.jsxs(tt, {
                        children: [
                          e.jsx(nt, { children: "Are you absolutely sure?" }),
                          e.jsx(ot, {
                            children:
                              "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
                          }),
                        ],
                      }),
                      e.jsxs(rt, {
                        children: [
                          e.jsx(it, { children: "Cancel" }),
                          e.jsx(lt, { children: "Continue" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Avatar" }),
              e.jsxs("div", {
                className: "flex gap-4",
                children: [
                  e.jsxs(G, {
                    children: [
                      e.jsx(ie, {
                        src: "https://github.com/shadcn.png",
                        alt: "@shadcn",
                      }),
                      e.jsx(q, { children: "CN" }),
                    ],
                  }),
                  e.jsx(G, { children: e.jsx(q, { children: "JD" }) }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Badge" }),
              e.jsxs("div", {
                className: "flex flex-wrap gap-2",
                children: [
                  e.jsx(ge, { children: "Default" }),
                  e.jsx(ge, { variant: "secondary", children: "Secondary" }),
                  e.jsx(ge, {
                    variant: "destructive",
                    children: "Destructive",
                  }),
                  e.jsx(ge, { variant: "outline", children: "Outline" }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Breadcrumb" }),
              e.jsx(ee, {
                children: e.jsxs(se, {
                  children: [
                    e.jsx(I, {
                      children: e.jsx(E, { href: "/", children: "Home" }),
                    }),
                    e.jsx(O, {}),
                    e.jsx(I, {
                      children: e.jsx(E, {
                        href: "/components",
                        children: "Components",
                      }),
                    }),
                    e.jsx(O, {}),
                    e.jsx(I, {
                      children: e.jsx(ae, { children: "Breadcrumb" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Calendar" }),
              e.jsx(j, {
                children: e.jsx(p, {
                  className: "pt-6",
                  children: e.jsx(xo, {
                    mode: "single",
                    selected: s,
                    onSelect: a,
                    className: "rounded-md border",
                  }),
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Checkbox" }),
              e.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  e.jsx(ft, { id: "terms" }),
                  e.jsx(B, {
                    htmlFor: "terms",
                    children: "Accept terms and conditions",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Collapsible" }),
              e.jsxs(ho, {
                children: [
                  e.jsx(fo, {
                    asChild: !0,
                    children: e.jsx(d, {
                      variant: "outline",
                      children: "Toggle",
                    }),
                  }),
                  e.jsx(po, {
                    children: e.jsx("div", {
                      className: "rounded-md border p-4",
                      children: "This content is collapsible.",
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Command" }),
              e.jsx(j, {
                children: e.jsx(p, {
                  className: "pt-6",
                  children: e.jsxs(pt, {
                    className: "rounded-lg border shadow-md",
                    children: [
                      e.jsx(jt, { placeholder: "Type a command or search..." }),
                      e.jsxs(gt, {
                        children: [
                          e.jsx(bt, { children: "No results found." }),
                          e.jsxs(Nt, {
                            heading: "Suggestions",
                            children: [
                              e.jsx(be, { children: "Calendar" }),
                              e.jsx(be, { children: "Search Emoji" }),
                              e.jsx(be, { children: "Calculator" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Context Menu" }),
              e.jsxs(go, {
                children: [
                  e.jsx(bo, {
                    className:
                      "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",
                    children: "Right click here",
                  }),
                  e.jsxs(yt, {
                    children: [
                      e.jsx(Ne, { children: "Back" }),
                      e.jsx(Ne, { children: "Forward" }),
                      e.jsx(Ne, { children: "Reload" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Dialog" }),
              e.jsxs(Wa, {
                children: [
                  e.jsx(Ua, {
                    asChild: !0,
                    children: e.jsx(d, {
                      variant: "outline",
                      children: "Open Dialog",
                    }),
                  }),
                  e.jsx(rs, {
                    children: e.jsxs(ns, {
                      children: [
                        e.jsx(os, { children: "Are you absolutely sure?" }),
                        e.jsx(ls, {
                          children:
                            "This action cannot be undone. This will permanently delete your account.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Drawer" }),
              e.jsxs(vt, {
                children: [
                  e.jsx(So, {
                    asChild: !0,
                    children: e.jsx(d, {
                      variant: "outline",
                      children: "Open Drawer",
                    }),
                  }),
                  e.jsxs(Ct, {
                    children: [
                      e.jsxs(Rt, {
                        children: [
                          e.jsx(kt, { children: "Are you absolutely sure?" }),
                          e.jsx(Pt, {
                            children: "This action cannot be undone.",
                          }),
                        ],
                      }),
                      e.jsxs(St, {
                        children: [
                          e.jsx(d, { children: "Submit" }),
                          e.jsx(Po, {
                            asChild: !0,
                            children: e.jsx(d, {
                              variant: "outline",
                              children: "Cancel",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Dropdown Menu" }),
              e.jsxs(Va, {
                children: [
                  e.jsx(Ga, {
                    asChild: !0,
                    children: e.jsx(d, {
                      variant: "outline",
                      children: "Open Menu",
                    }),
                  }),
                  e.jsxs(ss, {
                    children: [
                      e.jsx(as, { children: "My Account" }),
                      e.jsx(Re, {}),
                      e.jsx(W, { children: "Profile" }),
                      e.jsx(W, { children: "Settings" }),
                      e.jsx(W, { children: "Logout" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Form" }),
              e.jsxs(j, {
                children: [
                  e.jsxs(y, {
                    children: [
                      e.jsx(v, { children: "Form Example" }),
                      e.jsx(T, {
                        children:
                          "Example form using react-hook-form and Zod validation",
                      }),
                    ],
                  }),
                  e.jsx(p, {
                    children: e.jsx(ro, {
                      onSubmit: async (l) => {
                        console.log("Form submitted:", l);
                      },
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Hover Card" }),
              e.jsxs(To, {
                children: [
                  e.jsx(Io, {
                    asChild: !0,
                    children: e.jsx(d, {
                      variant: "link",
                      children: "@hovercard",
                    }),
                  }),
                  e.jsx(Tt, {
                    children: e.jsxs("div", {
                      className: "flex justify-between space-x-4",
                      children: [
                        e.jsx(G, { children: e.jsx(q, { children: "VC" }) }),
                        e.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            e.jsx(m, {
                              className: "text-sm font-semibold",
                              children: "@hovercard",
                            }),
                            e.jsx(m, {
                              variant: "small",
                              className: "text-muted-foreground",
                              children: "The React Framework",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Input" }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(b, { type: "email", placeholder: "Email" }),
                  e.jsx(b, { type: "password", placeholder: "Password" }),
                  e.jsx(b, { disabled: !0, placeholder: "Disabled" }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Input OTP" }),
              e.jsx(It, {
                maxLength: 6,
                children: e.jsxs(zt, {
                  children: [
                    e.jsx(oe, { index: 0 }),
                    e.jsx(oe, { index: 1 }),
                    e.jsx(oe, { index: 2 }),
                    e.jsx(oe, { index: 3 }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Label" }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(B, { htmlFor: "email", children: "Email" }),
                  e.jsx(b, {
                    id: "email",
                    type: "email",
                    placeholder: "Enter your email",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Menubar" }),
              e.jsxs(Dt, {
                children: [
                  e.jsxs(us, {
                    children: [
                      e.jsx(Ue, { children: "File" }),
                      e.jsxs(Ke, {
                        children: [
                          e.jsx(J, { children: "New Tab" }),
                          e.jsx(J, { children: "New Window" }),
                          e.jsx($t, {}),
                          e.jsx(J, { children: "Share" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(us, {
                    children: [
                      e.jsx(Ue, { children: "Edit" }),
                      e.jsxs(Ke, {
                        children: [
                          e.jsx(J, { children: "Undo" }),
                          e.jsx(J, { children: "Redo" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Navigation Menu" }),
              e.jsx(At, {
                children: e.jsx(Ft, {
                  children: e.jsxs(Lo, {
                    children: [
                      e.jsx(Mt, { children: "Getting started" }),
                      e.jsx(Lt, {
                        children: e.jsx(Eo, { children: "Introduction" }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Pagination" }),
              e.jsx(Et, {
                children: e.jsxs(Ot, {
                  children: [
                    e.jsx(V, { children: e.jsx(Bt, { href: "#" }) }),
                    e.jsx(V, {
                      children: e.jsx(Q, { href: "#", children: "1" }),
                    }),
                    e.jsx(V, {
                      children: e.jsx(Q, {
                        href: "#",
                        isActive: !0,
                        children: "2",
                      }),
                    }),
                    e.jsx(V, {
                      children: e.jsx(Q, { href: "#", children: "3" }),
                    }),
                    e.jsx(V, { children: e.jsx(Vt, {}) }),
                    e.jsx(V, { children: e.jsx(Ht, { href: "#" }) }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Popover" }),
              e.jsxs(Bo, {
                children: [
                  e.jsx(Ho, {
                    asChild: !0,
                    children: e.jsx(d, {
                      variant: "outline",
                      children: "Open Popover",
                    }),
                  }),
                  e.jsx(Gt, {
                    children: e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(m, {
                          className: "font-semibold",
                          children: "Dimensions",
                        }),
                        e.jsx(m, {
                          variant: "small",
                          children: "Set the dimensions for the layer.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Progress" }),
              e.jsx(qt, { value: 33, className: "w-[60%]" }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Radio Group" }),
              e.jsxs(Wt, {
                defaultValue: "comfortable",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      e.jsx(ye, { value: "default", id: "r1" }),
                      e.jsx(B, { htmlFor: "r1", children: "Default" }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      e.jsx(ye, { value: "comfortable", id: "r2" }),
                      e.jsx(B, { htmlFor: "r2", children: "Comfortable" }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      e.jsx(ye, { value: "compact", id: "r3" }),
                      e.jsx(B, { htmlFor: "r3", children: "Compact" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Resizable" }),
              e.jsxs(Vo, {
                direction: "horizontal",
                className: "max-w-md rounded-lg border",
                children: [
                  e.jsx(hs, {
                    defaultSize: 50,
                    children: e.jsx("div", {
                      className:
                        "flex h-[200px] items-center justify-center p-6",
                      children: e.jsx(m, {
                        variant: "small",
                        children: "Panel 1",
                      }),
                    }),
                  }),
                  e.jsx(Go, {}),
                  e.jsx(hs, {
                    defaultSize: 50,
                    children: e.jsx("div", {
                      className:
                        "flex h-[200px] items-center justify-center p-6",
                      children: e.jsx(m, {
                        variant: "small",
                        children: "Panel 2",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Scroll Area" }),
              e.jsx(Ut, {
                className: "h-32 w-48 rounded-md border p-4",
                children: e.jsx("div", {
                  className: "space-y-2",
                  children: Array.from({ length: 20 }).map((l, i) =>
                    e.jsxs(
                      m,
                      { variant: "small", children: ["Item ", i + 1] },
                      i
                    )
                  ),
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Select" }),
              e.jsxs(Qa, {
                children: [
                  e.jsx(ds, {
                    className: "w-[180px]",
                    children: e.jsx(Xa, { placeholder: "Select a fruit" }),
                  }),
                  e.jsxs(cs, {
                    children: [
                      e.jsx(U, { value: "apple", children: "Apple" }),
                      e.jsx(U, { value: "banana", children: "Banana" }),
                      e.jsx(U, { value: "orange", children: "Orange" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Separator" }),
              e.jsxs("div", {
                children: [
                  e.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      e.jsx(m, {
                        className: "text-sm font-medium",
                        children: "Radix Primitives",
                      }),
                      e.jsx(m, {
                        variant: "small",
                        className: "text-muted-foreground",
                        children: "An open-source UI component library.",
                      }),
                    ],
                  }),
                  e.jsx(ve, { className: "my-4" }),
                  e.jsxs("div", {
                    className: "flex h-5 items-center space-x-4 text-sm",
                    children: [
                      e.jsx("div", { children: "Blog" }),
                      e.jsx(ve, { orientation: "vertical" }),
                      e.jsx("div", { children: "Docs" }),
                      e.jsx(ve, { orientation: "vertical" }),
                      e.jsx("div", { children: "Source" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Sheet" }),
              e.jsxs(Be, {
                children: [
                  e.jsx(He, {
                    asChild: !0,
                    children: e.jsx(d, {
                      variant: "outline",
                      children: "Open Sheet",
                    }),
                  }),
                  e.jsx(Se, {
                    children: e.jsxs(ke, {
                      children: [
                        e.jsx(Pe, { children: "Edit profile" }),
                        e.jsx(Te, {
                          children:
                            "Make changes to your profile here. Click save when you're done.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Skeleton" }),
              e.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  e.jsx(Oe, { className: "h-12 w-12 rounded-full" }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(Oe, { className: "h-4 w-[250px]" }),
                      e.jsx(Oe, { className: "h-4 w-[200px]" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Slider" }),
              e.jsx(Yt, {
                value: t,
                onValueChange: r,
                max: 100,
                step: 1,
                className: "w-[60%]",
              }),
              e.jsxs(m, { variant: "small", children: ["Value: ", t[0]] }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Switch" }),
              e.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  e.jsx(ts, { id: "airplane-mode" }),
                  e.jsx(B, {
                    htmlFor: "airplane-mode",
                    children: "Airplane Mode",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Table" }),
              e.jsx(j, {
                children: e.jsx(p, {
                  className: "pt-6",
                  children: e.jsxs(Jt, {
                    children: [
                      e.jsx(Zt, {
                        children: "A list of your recent invoices.",
                      }),
                      e.jsx(Qt, {
                        children: e.jsxs(we, {
                          children: [
                            e.jsx(le, {
                              className: "w-[100px]",
                              children: "Invoice",
                            }),
                            e.jsx(le, { children: "Status" }),
                            e.jsx(le, { children: "Method" }),
                            e.jsx(le, {
                              className: "text-right",
                              children: "Amount",
                            }),
                          ],
                        }),
                      }),
                      e.jsxs(Xt, {
                        children: [
                          e.jsxs(we, {
                            children: [
                              e.jsx(_, {
                                className: "font-medium",
                                children: "INV001",
                              }),
                              e.jsx(_, { children: "Paid" }),
                              e.jsx(_, { children: "Credit Card" }),
                              e.jsx(_, {
                                className: "text-right",
                                children: "$250.00",
                              }),
                            ],
                          }),
                          e.jsxs(we, {
                            children: [
                              e.jsx(_, {
                                className: "font-medium",
                                children: "INV002",
                              }),
                              e.jsx(_, { children: "Pending" }),
                              e.jsx(_, { children: "PayPal" }),
                              e.jsx(_, {
                                className: "text-right",
                                children: "$150.00",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Tabs" }),
              e.jsxs(Wo, {
                defaultValue: "account",
                children: [
                  e.jsxs(er, {
                    children: [
                      e.jsx(Ye, { value: "account", children: "Account" }),
                      e.jsx(Ye, { value: "password", children: "Password" }),
                    ],
                  }),
                  e.jsx(Je, {
                    value: "account",
                    children: e.jsxs(j, {
                      children: [
                        e.jsxs(y, {
                          children: [
                            e.jsx(v, { children: "Account" }),
                            e.jsx(T, {
                              children: "Make changes to your account here.",
                            }),
                          ],
                        }),
                        e.jsx(p, {
                          children: e.jsx(m, {
                            children: "Account settings content",
                          }),
                        }),
                      ],
                    }),
                  }),
                  e.jsx(Je, {
                    value: "password",
                    children: e.jsxs(j, {
                      children: [
                        e.jsxs(y, {
                          children: [
                            e.jsx(v, { children: "Password" }),
                            e.jsx(T, {
                              children: "Change your password here.",
                            }),
                          ],
                        }),
                        e.jsx(p, {
                          children: e.jsx(m, {
                            children: "Password settings content",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Textarea" }),
              e.jsx(is, { placeholder: "Type your message here." }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Toggle" }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsx(Qe, {
                    "aria-label": "Toggle italic",
                    children: e.jsx(m, { children: "Italic" }),
                  }),
                  e.jsx(Qe, {
                    "aria-label": "Toggle bold",
                    pressed: !0,
                    children: e.jsx(m, { children: "Bold" }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Toggle Group" }),
              e.jsxs(tr, {
                type: "single",
                children: [
                  e.jsx(Ce, {
                    value: "a",
                    "aria-label": "Toggle italic",
                    children: e.jsx(m, { children: "A" }),
                  }),
                  e.jsx(Ce, {
                    value: "b",
                    "aria-label": "Toggle bold",
                    children: e.jsx(m, { children: "B" }),
                  }),
                  e.jsx(Ce, {
                    value: "c",
                    "aria-label": "Toggle underline",
                    children: e.jsx(m, { children: "C" }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Tooltip" }),
              e.jsx(Uo, {
                children: e.jsxs(Ko, {
                  children: [
                    e.jsx(Yo, {
                      asChild: !0,
                      children: e.jsx(d, {
                        variant: "outline",
                        children: "Hover",
                      }),
                    }),
                    e.jsx(rr, {
                      children: e.jsx(m, { children: "Add to library" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Carousel" }),
              e.jsx("div", {
                className: "w-full overflow-hidden px-4 md:px-0",
                children: e.jsxs(ct, {
                  className: "w-full max-w-xs mx-auto",
                  children: [
                    e.jsx(mt, {
                      className: "-ml-2 md:-ml-4",
                      children: Array.from({ length: 5 }).map((l, i) =>
                        e.jsx(
                          xt,
                          {
                            className: "pl-2 md:pl-4",
                            children: e.jsx("div", {
                              className: "p-1",
                              children: e.jsx(j, {
                                children: e.jsx(p, {
                                  className:
                                    "flex aspect-square items-center justify-center p-4 md:p-6",
                                  children: e.jsx(m, {
                                    className:
                                      "text-xl md:text-2xl font-semibold",
                                    children: i + 1,
                                  }),
                                }),
                              }),
                            }),
                          },
                          i
                        )
                      ),
                    }),
                    e.jsx(ut, { className: "hidden md:flex" }),
                    e.jsx(ht, { className: "hidden md:flex" }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className: "space-y-4",
            children: [
              e.jsx(c, { level: 2, children: "Aspect Ratio" }),
              e.jsx(co, {
                ratio: 16 / 9,
                className: "bg-muted",
                children: e.jsx("div", {
                  className: "flex items-center justify-center h-full",
                  children: e.jsx(m, { children: "16:9 Aspect Ratio" }),
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Qo = ue({
    email: D().email("Invalid email address"),
    password: D().min(6, "Password must be at least 6 characters"),
  }),
  Xo = ue({
    name: D()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters"),
    email: D().email("Invalid email address"),
    password: D().min(6, "Password must be at least 6 characters"),
    confirmPassword: D().min(6, "Password must be at least 6 characters"),
  }).refine((s) => s.password === s.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }),
  Zo = ue({ email: D().email("Invalid email address") }),
  el = ue({
    password: D().min(6, "Password must be at least 6 characters"),
    confirmPassword: D().min(6, "Password must be at least 6 characters"),
  }).refine((s) => s.password === s.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }),
  sl = () => {
    const { notifications: s } = he();
    return {
      handleLogin: async (t) => {
        (s.info("Form validated successfully. Backend integration pending."),
          console.log("Login data:", t));
      },
    };
  },
  al = () => {
    const { notifications: s } = he();
    return {
      handleRegister: async (t) => {
        (s.info("Form validated successfully. Backend integration pending."),
          console.log("Register data:", t));
      },
    };
  },
  tl = () => {
    const { notifications: s } = he();
    return {
      handleForgotPassword: async (t) => {
        (s.info("Form validated successfully. Backend integration pending."),
          console.log("Forgot password data:", t));
      },
    };
  },
  rl = () => {
    const { notifications: s } = he();
    return {
      handleResetPassword: async (t) => {
        (s.info("Form validated successfully. Backend integration pending."),
          console.log("Reset password data:", t));
      },
    };
  },
  nl = () => {
    const { handleLogin: s } = sl(),
      a = fe(Qo, { defaultValues: { email: "", password: "" } }),
      t = a.handleSubmit(async (r) => {
        await s(r);
      });
    return e.jsxs("div", {
      className: "flex min-h-screen flex-col p-4",
      children: [
        e.jsx("div", {
          className: "container mx-auto mb-6",
          children: e.jsx(ee, {
            children: e.jsxs(se, {
              children: [
                e.jsx(I, {
                  children: e.jsx(E, {
                    asChild: !0,
                    children: e.jsx(g, { to: f.home, children: "Home" }),
                  }),
                }),
                e.jsx(O, {}),
                e.jsx(I, { children: e.jsx(ae, { children: "Login" }) }),
              ],
            }),
          }),
        }),
        e.jsx("div", {
          className: "flex flex-1 items-center justify-center",
          children: e.jsxs(j, {
            className: "w-full max-w-md",
            children: [
              e.jsxs(y, {
                className: "space-y-1",
                children: [
                  e.jsx(v, { className: "text-2xl", children: "Login" }),
                  e.jsx(T, {
                    children:
                      "Enter your email and password to access your account",
                  }),
                ],
              }),
              e.jsx(p, {
                children: e.jsx(pe, {
                  ...a,
                  children: e.jsxs("form", {
                    onSubmit: t,
                    className: "space-y-4",
                    children: [
                      e.jsx(P, {
                        control: a.control,
                        name: "email",
                        render: ({ field: r }) =>
                          e.jsxs(w, {
                            children: [
                              e.jsx(C, { children: "Email" }),
                              e.jsx(R, {
                                children: e.jsx(b, {
                                  type: "email",
                                  placeholder: "name@example.com",
                                  ...r,
                                }),
                              }),
                              e.jsx(S, {}),
                            ],
                          }),
                      }),
                      e.jsx(P, {
                        control: a.control,
                        name: "password",
                        render: ({ field: r }) =>
                          e.jsxs(w, {
                            children: [
                              e.jsx(C, { children: "Password" }),
                              e.jsx(R, {
                                children: e.jsx(b, {
                                  type: "password",
                                  placeholder: "••••••••",
                                  ...r,
                                }),
                              }),
                              e.jsx(S, {}),
                            ],
                          }),
                      }),
                      e.jsx("div", {
                        className: "flex items-center justify-end",
                        children: e.jsx(g, {
                          to: f.forgotPassword,
                          className:
                            "text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline",
                          children: "Forgot password?",
                        }),
                      }),
                      e.jsx(d, {
                        type: "submit",
                        className: "w-full",
                        disabled: a.formState.isSubmitting,
                        children: a.formState.isSubmitting
                          ? "Validating..."
                          : "Login",
                      }),
                    ],
                  }),
                }),
              }),
              e.jsx(K, {
                className: "flex flex-col space-y-4",
                children: e.jsxs("div", {
                  className: "text-sm text-center text-muted-foreground",
                  children: [
                    "Don't have an account?",
                    " ",
                    e.jsx(g, {
                      to: f.register,
                      className:
                        "text-primary hover:underline underline-offset-4",
                      children: "Sign up",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  ol = () => {
    const { handleRegister: s } = al(),
      a = fe(Xo, {
        defaultValues: {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      }),
      t = a.handleSubmit(async (r) => {
        await s({ email: r.email, password: r.password, name: r.name });
      });
    return e.jsxs("div", {
      className: "flex min-h-screen flex-col p-4",
      children: [
        e.jsx("div", {
          className: "container mx-auto mb-6",
          children: e.jsx(ee, {
            children: e.jsxs(se, {
              children: [
                e.jsx(I, {
                  children: e.jsx(E, {
                    asChild: !0,
                    children: e.jsx(g, { to: f.home, children: "Home" }),
                  }),
                }),
                e.jsx(O, {}),
                e.jsx(I, { children: e.jsx(ae, { children: "Register" }) }),
              ],
            }),
          }),
        }),
        e.jsx("div", {
          className: "flex flex-1 items-center justify-center",
          children: e.jsxs(j, {
            className: "w-full max-w-md",
            children: [
              e.jsxs(y, {
                className: "space-y-1",
                children: [
                  e.jsx(v, {
                    className: "text-2xl",
                    children: "Create Account",
                  }),
                  e.jsx(T, {
                    children: "Enter your information to create a new account",
                  }),
                ],
              }),
              e.jsx(p, {
                children: e.jsx(pe, {
                  ...a,
                  children: e.jsxs("form", {
                    onSubmit: t,
                    className: "space-y-4",
                    children: [
                      e.jsx(P, {
                        control: a.control,
                        name: "name",
                        render: ({ field: r }) =>
                          e.jsxs(w, {
                            children: [
                              e.jsx(C, { children: "Name" }),
                              e.jsx(R, {
                                children: e.jsx(b, {
                                  placeholder: "John Doe",
                                  ...r,
                                }),
                              }),
                              e.jsx(S, {}),
                            ],
                          }),
                      }),
                      e.jsx(P, {
                        control: a.control,
                        name: "email",
                        render: ({ field: r }) =>
                          e.jsxs(w, {
                            children: [
                              e.jsx(C, { children: "Email" }),
                              e.jsx(R, {
                                children: e.jsx(b, {
                                  type: "email",
                                  placeholder: "name@example.com",
                                  ...r,
                                }),
                              }),
                              e.jsx(S, {}),
                            ],
                          }),
                      }),
                      e.jsx(P, {
                        control: a.control,
                        name: "password",
                        render: ({ field: r }) =>
                          e.jsxs(w, {
                            children: [
                              e.jsx(C, { children: "Password" }),
                              e.jsx(R, {
                                children: e.jsx(b, {
                                  type: "password",
                                  placeholder: "••••••••",
                                  ...r,
                                }),
                              }),
                              e.jsx(S, {}),
                            ],
                          }),
                      }),
                      e.jsx(P, {
                        control: a.control,
                        name: "confirmPassword",
                        render: ({ field: r }) =>
                          e.jsxs(w, {
                            children: [
                              e.jsx(C, { children: "Confirm Password" }),
                              e.jsx(R, {
                                children: e.jsx(b, {
                                  type: "password",
                                  placeholder: "••••••••",
                                  ...r,
                                }),
                              }),
                              e.jsx(S, {}),
                            ],
                          }),
                      }),
                      e.jsx(d, {
                        type: "submit",
                        className: "w-full",
                        disabled: a.formState.isSubmitting,
                        children: a.formState.isSubmitting
                          ? "Validating..."
                          : "Create Account",
                      }),
                    ],
                  }),
                }),
              }),
              e.jsx(K, {
                className: "flex flex-col space-y-4",
                children: e.jsxs("div", {
                  className: "text-sm text-center text-muted-foreground",
                  children: [
                    "Already have an account?",
                    " ",
                    e.jsx(g, {
                      to: f.login,
                      className:
                        "text-primary hover:underline underline-offset-4",
                      children: "Sign in",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  ll = () => {
    const [s, a] = o.useState(!1),
      { handleForgotPassword: t } = tl(),
      r = fe(Zo, { defaultValues: { email: "" } }),
      l = r.handleSubmit(async (x) => {
        (await t({ email: x.email }), a(!0), r.reset());
      }),
      i = e.jsx("div", {
        className: "container mx-auto mb-6",
        children: e.jsx(ee, {
          children: e.jsxs(se, {
            children: [
              e.jsx(I, {
                children: e.jsx(E, {
                  asChild: !0,
                  children: e.jsx(g, { to: f.home, children: "Home" }),
                }),
              }),
              e.jsx(O, {}),
              e.jsx(I, {
                children: e.jsx(E, {
                  asChild: !0,
                  children: e.jsx(g, { to: f.login, children: "Login" }),
                }),
              }),
              e.jsx(O, {}),
              e.jsx(I, {
                children: e.jsx(ae, { children: "Forgot Password" }),
              }),
            ],
          }),
        }),
      });
    return s
      ? e.jsxs("div", {
          className: "flex min-h-screen flex-col p-4",
          children: [
            i,
            e.jsx("div", {
              className: "flex flex-1 items-center justify-center",
              children: e.jsxs(j, {
                className: "w-full max-w-md",
                children: [
                  e.jsxs(y, {
                    className: "space-y-1",
                    children: [
                      e.jsx(v, {
                        className: "text-2xl",
                        children: "Check your email",
                      }),
                      e.jsx(T, {
                        children:
                          "We've sent a password reset link to your email address",
                      }),
                    ],
                  }),
                  e.jsx(p, {
                    children: e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "If an account exists with that email, you will receive a password reset link.",
                    }),
                  }),
                  e.jsx(K, {
                    className: "flex flex-col space-y-4",
                    children: e.jsx(g, {
                      to: f.login,
                      className: "w-full",
                      children: e.jsx(d, {
                        variant: "outline",
                        className: "w-full",
                        children: "Back to Login",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      : e.jsxs("div", {
          className: "flex min-h-screen flex-col p-4",
          children: [
            i,
            e.jsx("div", {
              className: "flex flex-1 items-center justify-center",
              children: e.jsxs(j, {
                className: "w-full max-w-md",
                children: [
                  e.jsxs(y, {
                    className: "space-y-1",
                    children: [
                      e.jsx(v, {
                        className: "text-2xl",
                        children: "Forgot Password",
                      }),
                      e.jsx(T, {
                        children:
                          "Enter your email address and we'll send you a reset link",
                      }),
                    ],
                  }),
                  e.jsx(p, {
                    children: e.jsx(pe, {
                      ...r,
                      children: e.jsxs("form", {
                        onSubmit: l,
                        className: "space-y-4",
                        children: [
                          e.jsx(P, {
                            control: r.control,
                            name: "email",
                            render: ({ field: x }) =>
                              e.jsxs(w, {
                                children: [
                                  e.jsx(C, { children: "Email" }),
                                  e.jsx(R, {
                                    children: e.jsx(b, {
                                      type: "email",
                                      placeholder: "name@example.com",
                                      ...x,
                                    }),
                                  }),
                                  e.jsx(S, {}),
                                ],
                              }),
                          }),
                          e.jsx(d, {
                            type: "submit",
                            className: "w-full",
                            disabled: r.formState.isSubmitting,
                            children: r.formState.isSubmitting
                              ? "Validating..."
                              : "Send Reset Link",
                          }),
                        ],
                      }),
                    }),
                  }),
                  e.jsx(K, {
                    className: "flex flex-col space-y-4",
                    children: e.jsx(g, {
                      to: f.login,
                      className:
                        "text-sm text-center text-muted-foreground hover:text-primary underline-offset-4 hover:underline",
                      children: "Back to Login",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
  },
  il = () => {
    const s = Ha(),
      [a] = Nn(),
      [t, r] = o.useState(!1),
      l = a.get("token") || "",
      { handleResetPassword: i } = rl(),
      x = fe(el, { defaultValues: { password: "", confirmPassword: "" } });
    o.useEffect(() => {
      l || s(f.forgotPassword);
    }, [l, s]);
    const N = x.handleSubmit(async (u) => {
        (await i({ token: l, password: u.password }),
          r(!0),
          x.reset(),
          setTimeout(() => {
            s(f.login);
          }, 2e3));
      }),
      h = e.jsx("div", {
        className: "container mx-auto mb-6",
        children: e.jsx(ee, {
          children: e.jsxs(se, {
            children: [
              e.jsx(I, {
                children: e.jsx(E, {
                  asChild: !0,
                  children: e.jsx(g, { to: f.home, children: "Home" }),
                }),
              }),
              e.jsx(O, {}),
              e.jsx(I, {
                children: e.jsx(E, {
                  asChild: !0,
                  children: e.jsx(g, { to: f.login, children: "Login" }),
                }),
              }),
              e.jsx(O, {}),
              e.jsx(I, { children: e.jsx(ae, { children: "Reset Password" }) }),
            ],
          }),
        }),
      });
    return t
      ? e.jsxs("div", {
          className: "flex min-h-screen flex-col p-4",
          children: [
            h,
            e.jsx("div", {
              className: "flex flex-1 items-center justify-center",
              children: e.jsxs(j, {
                className: "w-full max-w-md",
                children: [
                  e.jsxs(y, {
                    className: "space-y-1",
                    children: [
                      e.jsx(v, {
                        className: "text-2xl",
                        children: "Password Reset",
                      }),
                      e.jsx(T, {
                        children: "Your password has been reset successfully",
                      }),
                    ],
                  }),
                  e.jsx(p, {
                    children: e.jsx(de, {
                      children: e.jsx(ce, {
                        children:
                          "You will be redirected to the login page shortly.",
                      }),
                    }),
                  }),
                  e.jsx(K, {
                    children: e.jsx(g, {
                      to: f.login,
                      className: "w-full",
                      children: e.jsx(d, {
                        className: "w-full",
                        children: "Go to Login",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      : e.jsxs("div", {
          className: "flex min-h-screen flex-col p-4",
          children: [
            h,
            e.jsx("div", {
              className: "flex flex-1 items-center justify-center",
              children: e.jsxs(j, {
                className: "w-full max-w-md",
                children: [
                  e.jsxs(y, {
                    className: "space-y-1",
                    children: [
                      e.jsx(v, {
                        className: "text-2xl",
                        children: "Reset Password",
                      }),
                      e.jsx(T, { children: "Enter your new password below" }),
                    ],
                  }),
                  e.jsx(p, {
                    children: e.jsx(pe, {
                      ...x,
                      children: e.jsxs("form", {
                        onSubmit: N,
                        className: "space-y-4",
                        children: [
                          e.jsx(P, {
                            control: x.control,
                            name: "password",
                            render: ({ field: u }) =>
                              e.jsxs(w, {
                                children: [
                                  e.jsx(C, { children: "New Password" }),
                                  e.jsx(R, {
                                    children: e.jsx(b, {
                                      type: "password",
                                      placeholder: "••••••••",
                                      ...u,
                                    }),
                                  }),
                                  e.jsx(S, {}),
                                ],
                              }),
                          }),
                          e.jsx(P, {
                            control: x.control,
                            name: "confirmPassword",
                            render: ({ field: u }) =>
                              e.jsxs(w, {
                                children: [
                                  e.jsx(C, {
                                    children: "Confirm New Password",
                                  }),
                                  e.jsx(R, {
                                    children: e.jsx(b, {
                                      type: "password",
                                      placeholder: "••••••••",
                                      ...u,
                                    }),
                                  }),
                                  e.jsx(S, {}),
                                ],
                              }),
                          }),
                          e.jsx(d, {
                            type: "submit",
                            className: "w-full",
                            disabled: x.formState.isSubmitting || !l,
                            children: x.formState.isSubmitting
                              ? "Validating..."
                              : "Reset Password",
                          }),
                        ],
                      }),
                    }),
                  }),
                  e.jsx(K, {
                    className: "flex flex-col space-y-4",
                    children: e.jsx(g, {
                      to: f.login,
                      className:
                        "text-sm text-center text-muted-foreground hover:text-primary underline-offset-4 hover:underline",
                      children: "Back to Login",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
  },
  dl = () =>
    e.jsx(yn, {
      children: e.jsxs(ms, {
        children: [
          e.jsx(H, { path: f.login, element: e.jsx(nl, {}) }),
          e.jsx(H, { path: f.register, element: e.jsx(ol, {}) }),
          e.jsx(H, { path: f.forgotPassword, element: e.jsx(ll, {}) }),
          e.jsx(H, { path: f.resetPassword, element: e.jsx(il, {}) }),
          e.jsx(H, {
            path: "*",
            element: e.jsx(Wn, {
              children: e.jsxs(ms, {
                children: [
                  e.jsx(H, { path: f.home, element: e.jsx(Xn, {}) }),
                  e.jsx(H, { path: f.styleguide, element: e.jsx(Jo, {}) }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  cl = new bn({
    defaultOptions: {
      queries: {
        staleTime: 300 * 1e3,
        gcTime: 600 * 1e3,
        retry: 3,
        retryDelay: (s) => Math.min(1e3 * 2 ** s, 3e4),
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !0,
      },
      mutations: { retry: 1 },
    },
  }),
  ml = ({ children: s }) =>
    typeof window > "u"
      ? e.jsx(e.Fragment, { children: s })
      : e.jsx(Sn, {
          config: kn,
          children: e.jsx(An, {
            client: cl,
            children: e.jsx(Fn, { children: s }),
          }),
        });
nr.createRoot(document.getElementById("root")).render(
  e.jsx(o.StrictMode, { children: e.jsx(ml, { children: e.jsx(dl, {}) }) })
);
