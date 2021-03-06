/*
 * @Description: plugin
 * @Date: 2022-03-24 14:50:35
 * @Author: LeiLiu
 */
import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueTypeImports from 'vite-plugin-vue-type-imports';
import vueJsx from '@vitejs/plugin-vue-jsx';
import windiCSS from 'vite-plugin-windicss';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';
import { configHtmlPlugin } from './html';
import { configAutoRegistryComponents } from './component';
import { configAutoImportDeps } from './autoImport';
import { configStyleImportPlugin } from './styleImport';
import { configSvgIconsPlugin } from './svgIcons';
import { configMockPlugin } from './mock';
import { configLegacyPlugin } from './legacy';
import { configCompressPlugin } from './compress';
import { configVisualizerPlugin } from './analysis';
import { configPwaPlugin } from './pwa';

// 参考 https://github.com/JS-banana/vite-vue3-ts
// 参考 https://juejin.cn/post/7062648728405934087
// 参考 https://juejin.cn/post/7006640791539941407#heading-37
export function createVitePlugins(command: 'build' | 'serve') {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    VueTypeImports(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    windiCSS(),

    configHtmlPlugin(), // 注入环境变量到html模板中
    configAutoRegistryComponents(), // 自动按需引入组件
    configAutoImportDeps(), // 自动按需引入依赖
    configStyleImportPlugin(), // 按需加载
    configSvgIconsPlugin(), // 注入icons
    configMockPlugin(),

    PkgConfig(),
    OptimizationPersist(), // 使用按需引入插件后:  PkgConfig 和 OptimizationPersist 启动优化
  ];
  if (command === 'build') {
    vitePlugins.push(configLegacyPlugin()); // legacy 兼容
    vitePlugins.push(configCompressPlugin()); // gzip
    vitePlugins.push(configVisualizerPlugin()); // 分析
    vitePlugins.push(configPwaPlugin()); // pwa 离线应用
  }

  return vitePlugins.filter(Boolean);
}
