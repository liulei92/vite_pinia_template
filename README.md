# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## use "Pina" in Ts

- [https://www.jianshu.com/p/3526548c1169](https://www.jianshu.com/p/3526548c1169)
- [https://segmentfault.com/a/1190000040368602](https://segmentfault.com/a/1190000040368602)

## Plans

### 0325

准备 vite_pinia_template
- [x] ~~优化vite.config.ts~~
  - plugin: analysis, autoImport, compenent, compress, html, legacy, styleImport, scgIcons
  - proxy, rollupConfig, themeConfig
- [x] ~~增加 store(pinia) 和 router~~


### 0326
- [x] ~~添加基础utils库~~
- [x] ~~添加mock数据plugin~~

- [ ] todo i18n
- [ ] todo formItems components