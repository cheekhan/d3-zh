import { fileURLToPath, URL } from "node:url";
import path from "node:path";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "本地翻译D3",
  description: "定制数据可视化的JavaScript库",
  cleanUrls: true,
  sitemap: {
    hostname: "https://d3js.org"
  },
  head: [
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }]
  ],
  markdown: {
    externalLinks: {
      rel: "external"
    }
  },
  vite: {
    resolve: {
      alias: [
        // { find: "d3", replacement: path.resolve("./dist/d3.mjs") },
        { find: /^.*\/VPFooter\.vue$/, replacement: fileURLToPath(new URL("./theme/CustomFooter.vue", import.meta.url)) }
      ]
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    siteTitle: "",
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "https://observablehq.com/@d3/gallery?utm_source=d3js-org&utm_medium=nav&utm_campaign=try-observable", rel: "external" },
      { text: "Community", link: "/community" },
      { text: "Plot", link: "https://observablehq.com/plot?utm_source=d3js-org&utm_medium=nav&utm_campaign=try-observable", rel: "external" }
    ],
    sidebar: [
      {
        text: "简介",
        items: [
          { text: "D3是什么", link: "/what-is-d3" },
          { text: "准备开始", link: "/getting-started" },
        ]
      },
      {
        text: "可视化",
        items: [
          { text: "坐标轴：d3-axis", link: "/d3-axis" },
          {
            text: "d3-chord",
            link: "/d3-chord",
            collapsed: true,
            items: [
              { text: "Chords", link: "/d3-chord/chord" },
              { text: "Ribbons", link: "/d3-chord/ribbon" }
            ]
          },
          { text: "d3-color", link: "/d3-color" },
          {
            text: "d3-interpolate",
            link: "/d3-interpolate",
            collapsed: true,
            items: [
              { text: "Value interpolation", link: "/d3-interpolate/value" },
              { text: "Color interpolation", link: "/d3-interpolate/color" },
              { text: "Transform interpolation", link: "/d3-interpolate/transform" },
              { text: "Zoom interpolation", link: "/d3-interpolate/zoom" },
            ]
          },
          {
            text: "d3-contour",
            link: "/d3-contour",
            collapsed: true,
            items: [
              { text: "Contour polygons", link: "/d3-contour/contour" },
              { text: "Density estimation", link: "/d3-contour/density" }
            ]
          },
          {
            text: "d3-delaunay",
            link: "/d3-delaunay",
            collapsed: true,
            items: [
              { text: "Delaunay triangulations", link: "/d3-delaunay/delaunay" },
              { text: "Voronoi diagrams", link: "/d3-delaunay/voronoi" }
            ]
          },
          {
            text: "力导布局：d3-force",
            link: "/d3-force",
            collapsed: true,
            items: [
              { text: "力仿真", link: "/d3-force/simulation" },
              { text: "中心力", link: "/d3-force/center" },
              { text: "斥力", link: "/d3-force/collide" },
              { text: "连接力", link: "/d3-force/link" },
              { text: "万有引力", link: "/d3-force/many-body" },
              { text: "位置力", link: "/d3-force/position" },
            ]
          },
          {
            text: "d3-geo",
            link: "/d3-geo",
            collapsed: true,
            items: [
              { text: "Paths", link: "/d3-geo/path" },
              {
                text: "Projections",
                link: "/d3-geo/projection",
                collapsed: true,
                items: [
                  { text: "Azimuthal projections", link: "/d3-geo/azimuthal" },
                  { text: "Conic projections", link: "/d3-geo/conic" },
                  { text: "Cylindrical projections", link: "/d3-geo/cylindrical" },
                ]
              },
              { text: "Streams", link: "/d3-geo/stream" },
              { text: "Spherical shapes", link: "/d3-geo/shape" },
              { text: "Spherical math", link: "/d3-geo/math" },
            ]
          },
          {
            text: "层次化布局：d3-hierarchy",
            link: "/d3-hierarchy",
            collapsed: true,
            items: [
              { text: "数据层次化", link: "/d3-hierarchy/hierarchy" },
              { text: "分层", link: "/d3-hierarchy/stratify" },
              { text: "树结构", link: "/d3-hierarchy/tree" },
              { text: "集群", link: "/d3-hierarchy/cluster" },
              { text: "Partition", link: "/d3-hierarchy/partition" },
              { text: "Pack", link: "/d3-hierarchy/pack" },
              { text: "树图", link: "/d3-hierarchy/treemap" },
            ]
          },
          { text: "d3-path", link: "/d3-path" },
          { text: "d3-polygon", link: "/d3-polygon" },
          { text: "d3-quadtree", link: "/d3-quadtree" },
          {
            text: "刻度：d3-scale",
            link: "/d3-scale",
            collapsed: true,
            items: [
              { text: "Linear scales(线性)", link: "/d3-scale/linear" },
              { text: "Time scales(时间)", link: "/d3-scale/time" },
              { text: "Pow scales(幂)", link: "/d3-scale/pow" },
              { text: "Log scales(对数)", link: "/d3-scale/log" },
              { text: "Symlog scales(对称对数)", link: "/d3-scale/symlog" },
              { text: "Ordinal scales(序数)", link: "/d3-scale/ordinal" },
              { text: "Band scales(乐队)", link: "/d3-scale/band" },
              { text: "Point scales(点)", link: "/d3-scale/point" },
              { text: "Sequential scales(顺序)", link: "/d3-scale/sequential" },
              { text: "Diverging scales(发散)", link: "/d3-scale/diverging" },
              { text: "Quantile scales(分位)", link: "/d3-scale/quantile" },
              { text: "Quantize scales(量化)", link: "/d3-scale/quantize" },
              { text: "Threshold scales(阈值)", link: "/d3-scale/threshold" }
            ]
          },
          {
            text: "比例尺色彩：d3-scale-chromatic",
            link: "/d3-scale-chromatic",
            collapsed: true,
            items: [
              { text: "分类颜色：Categorical schemes", link: "/d3-scale-chromatic/categorical" },
              { text: "循环颜色：Cyclical schemes", link: "/d3-scale-chromatic/cyclical" },
              { text: "离散颜色：Diverging schemes", link: "/d3-scale-chromatic/diverging" },
              { text: "顺序颜色：Sequential schemes", link: "/d3-scale-chromatic/sequential" },
            ]
          },
          {
            text: "选择器：d3-selection",
            link: "/d3-selection",
            collapsed: true,
            items: [
              { text: "选择元素", link: "/d3-selection/selecting" },
              { text: "修改元素", link: "/d3-selection/modifying" },
              { text: "绑定数据", link: "/d3-selection/joining" },
              { text: "处理事件", link: "/d3-selection/events" },
              { text: "控制流", link: "/d3-selection/control-flow" },
              { text: "本地变量", link: "/d3-selection/locals" },
              { text: "命名空间", link: "/d3-selection/namespaces" }
            ]
          },
          {
            text: "图形：d3-shape",
            link: "/d3-shape",
            collapsed: true,
            items: [
              { text: "弧线", link: "/d3-shape/arc" },
              { text: "区域", link: "/d3-shape/area" },
              { text: "曲线", link: "/d3-shape/curve" },
              { text: "线条", link: "/d3-shape/line" },
              { text: "连接线", link: "/d3-shape/link" },
              { text: "饼", link: "/d3-shape/pie" },
              { text: "堆叠", link: "/d3-shape/stack" },
              { text: "符号", link: "/d3-shape/symbol" },
              { text: "径向区域", link: "/d3-shape/radial-area" },
              { text: "径向线条", link: "/d3-shape/radial-line" },
              { text: "径向连接线", link: "/d3-shape/radial-link" }
            ]
          },
        ]
      },
      {
        text: "动画",
        items: [
          { text: "d3-ease", link: "/d3-ease" },
          { text: "d3-timer", link: "/d3-timer" },
          {
            text: "d3-transition",
            link: "/d3-transition",
            collapsed: true,
            items: [
              { text: "Selecting elements", link: "/d3-transition/selecting" },
              { text: "Modifying elements", link: "/d3-transition/modifying" },
              { text: "Timing", link: "/d3-transition/timing" },
              { text: "Control flow", link: "/d3-transition/control-flow" }
            ]
          },
        ]
      },
      {
        text: "交互",
        items: [
          { text: "d3-brush", link: "/d3-brush" },
          { text: "d3-dispatch", link: "/d3-dispatch" },
          { text: "拖拽：d3-drag", link: "/d3-drag" },
          { text: "d3-zoom", link: "/d3-zoom" }
        ]
      },
      {
        text: "数据",
        items: [
          {
            text: "d3-array",
            link: "/d3-array",
            collapsed: true,
            items: [
              { text: "Adding numbers", link: "/d3-array/add" },
              { text: "Binning data", link: "/d3-array/bin" },
              { text: "Bisecting data", link: "/d3-array/bisect" },
              { text: "Blurring data", link: "/d3-array/blur" },
              { text: "Grouping data", link: "/d3-array/group" },
              { text: "Interning values", link: "/d3-array/intern" },
              { text: "Set operations", link: "/d3-array/sets" },
              { text: "Sorting data", link: "/d3-array/sort" },
              { text: "Summarizing data", link: "/d3-array/summarize" },
              { text: "Ticks", link: "/d3-array/ticks" },
              { text: "Transforming data", link: "/d3-array/transform" },
            ]
          },
          { text: "d3-dsv", link: "/d3-dsv" },
          { text: "d3-fetch", link: "/d3-fetch" },
          { text: "d3-format", link: "/d3-format" },
          { text: "d3-random", link: "/d3-random" },
          { text: "d3-time", link: "/d3-time" },
          { text: "d3-time-format", link: "/d3-time-format" },
        ]
      },
      { text: "API索引", link: "/api" }
    ],
    search: {
      provider: "local"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/d3" },
      // {icon: "twitter", link: "https://twitter.com/observablehq"},
      // {icon: "mastodon", link: "https://vis.social/@observablehq"},
      // {icon: "slack", link: "https://observablehq.com/slack/join"},
      // {icon: "linkedin", link: "https://www.linkedin.com/company/observable"},
      // {icon: "youtube", link: "https://www.youtube.com/c/Observablehq"}
    ],
    footer: {
      message: "Library released under <a style='text-decoration:underline;' href='https://github.com/d3/d3/blob/main/LICENSE'>ISC License</a>.",
      copyright: `Copyright 2010–${new Date().getUTCFullYear()} Mike Bostock`
    }
  }
});
