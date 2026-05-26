# PolyDemo Design

Shared React component library for the **PolyShopping** demo. Published as `@juristr/tusky-design`.

This repo is one of the demo repos used to showcase [Polygraph](https://polygraph.dev) — coordinating changes across multiple repos.

## Requirements

- Node.js 20+
- npm 10+

## Layout

npm workspaces, single library:

```
packages/tusky-design/         the @juristr/tusky-design source
```

## Scripts

| Script              | What it does                                 |
| ------------------- | -------------------------------------------- |
| `npm run typecheck` | `tsc --noEmit` on the workspace lib          |
| `npm run build`     | typecheck + Vite library build → `dist/`     |

See [`packages/tusky-design/README.md`](./packages/tusky-design/README.md) for the library itself.
