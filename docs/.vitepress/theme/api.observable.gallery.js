function _1(count, md) {
    return (
        md`# D3 gallery
    
    Looking for a good D3 example? Here’s a few (okay, ${count.toLocaleString("en")}…) to peruse.`
    )
}

function _animation(previews, md) {
    return (
        md`### Animation
    
    D3’s [data join](https://d3js.org/d3-selection/joining), [interpolators](https://d3js.org/d3-interpolate), and [easings](https://d3js.org/d3-ease) enable flexible [animated transitions](https://d3js.org/d3-transition) between views while preserving [object constancy](https://bost.ocks.org/mike/constancy/).
    
    ${previews([
            {
                path: "@d3/animated-treemap?intent=fork",
                thumbnail: "882768da05f294d7eea3aef0e4d5e060b9f9ee542d681772b54341f26b6abfef",
                title: "Animated treemap",
                author: "D3"
            },
            {
                path: "@d3/temporal-force-directed-graph?intent=fork",
                thumbnail: "c5a7dced97b9c84ce64b8bfbabb7d62f9d819e1377ac4a6dc6929abce7936b0f",
                title: "Temporal force-directed graph",
                author: "D3"
            },
            {
                path: "@d3/connected-scatterplot/2?intent=fork",
                thumbnail: "c4c3780815c8e3cc1370d67f1596101cbde2d420125db73d33600e249c382e51",
                title: "Connected scatterplot",
                author: "D3"
            },
            {
                path: "@mbostock/the-wealth-health-of-nations",
                thumbnail: "6eb6014778b13abd6c15dddaabaa0c7ca27b091982736703a0b9f75013445ebf",
                title: "The wealth & health of nations",
                author: "Mike Bostock"
            },
            {
                path: "@d3/scatterplot-tour?intent=fork",
                thumbnail: "d18023b5df31a426d5d9f0d2e4f1fd7954a905b478787977ec576bd01f8e9024",
                title: "Scatterplot tour",
                author: "D3"
            },
            {
                path: "@d3/bar-chart-race?intent=fork",
                thumbnail: "b43c7847e13508c9b9bdff7e827e2998da03b8e6e4093a2f6a8d5de90c9a72c7",
                title: "Bar chart race",
                author: "D3"
            },
            {
                path: "@d3/stacked-to-grouped-bars?intent=fork",
                thumbnail: "6435b9edd065e3b9bdfabe11b165521ace5ccd28ee49b1611e24e5cad3206d4f",
                title: "Stacked-to-grouped bars",
                author: "D3"
            },
            {
                path: "@d3/streamgraph-transitions?intent=fork",
                thumbnail: "a1c46be22a981d022a6ea0f5a9d37ba957d9bb611c3e625116043e0ea3da1103",
                title: "Streamgraph transitions",
                author: "D3"
            },
            {
                path: "@d3/smooth-zooming?intent=fork",
                thumbnail: "6411845b0b113d8c7e7fb483ab4b0f826d9bca18538cd05b245813dd459a113f",
                title: "Smooth zooming",
                author: "D3"
            },
            {
                path: "@d3/zoom-to-bounding-box?intent=fork",
                thumbnail: "a31e0c327014bc52aafa52f46aa58595917279c31895cc6d3097679693182759",
                title: "Zoom to bounding box",
                author: "D3"
            },
            {
                path: "@d3/orthographic-to-equirectangular?intent=fork",
                thumbnail: "9a772b8402db03248402e3d20e6f932b08a18824dba38fb1aec1bfcdb7c60f11",
                title: "Orthographic to equirectangular",
                author: "D3"
            },
            {
                path: "@d3/world-tour?intent=fork",
                thumbnail: "5e120c0171d667b51fa6cc1511344e6c5d387e738b777db918396d7807d85ecc",
                title: "World tour",
                author: "D3"
            },
            {
                path: "@d3/walmarts-growth?intent=fork",
                thumbnail: "9f321c55f570971dd7b5bff39424eaa709de151e75bc9466665c2494d7008f5b",
                title: "Walmart’s growth",
                author: "D3"
            },
            {
                path: "@d3/hierarchical-bar-chart?intent=fork",
                thumbnail: "71c225bbf84c3ac323901248532b88b4ea54073cdf6642bf3d2779d2669c2fc1",
                title: "Hierarchical bar chart",
                author: "D3"
            },
            {
                path: "@d3/zoomable-treemap?intent=fork",
                thumbnail: "7a9c4803cc094ed0788600ad38fecbd0b57e1c5d6c39ce6af4346f9330fa3b1b",
                title: "Zoomable treemap",
                author: "D3"
            },
            {
                path: "@d3/zoomable-circle-packing?intent=fork",
                thumbnail: "b7cc8cf4a59de5ccd08c47284bd20de50d3cc20fe29d9f76caaef1a2b661abae",
                title: "Zoomable circle packing",
                author: "D3"
            },
            {
                path: "@d3/collapsible-tree?intent=fork",
                thumbnail: "d7fb434ff8508726495d62191283cd9584d599fb42756eb6dcb924563cb11b50",
                title: "Collapsible tree",
                author: "D3"
            },
            {
                path: "@d3/zoomable-icicle?intent=fork",
                thumbnail: "f73b8e79e15aac9acdf74ec25ee7606989356d7fbfc8c8513f7c8675851b6501",
                title: "Zoomable icicle",
                author: "D3"
            },
            {
                path: "@d3/zoomable-sunburst?intent=fork",
                thumbnail: "6d2e1f16d415ac13f13740b6155fdcfb8d3836e5b2332277de1e26742ffbcb0c",
                title: "Zoomable sunburst",
                author: "D3"
            },
            {
                path: "@d3/bar-chart-transitions/2?intent=fork",
                thumbnail: "085add55d0acc4b835aeccb1b4fcfb135efd52572cda5e19f13ba39ba63ee6e3",
                title: "Sortable bar chart",
                author: "D3"
            },
            {
                path: "@d3/icelandic-population-by-age-1841-2019?intent=fork",
                thumbnail: "63ba0f4d3b1195d1de9d3097796ec9f7c987785d883d48a6387fa1d387e686c1",
                title: "Icelandic population by age, 1841–2019",
                author: "D3"
            },
            {
                path: "@d3/pie-chart-update?intent=fork",
                thumbnail: "f594dc193faeb1b248ec303b8b87c958c7eb944a078592ac2ef6feffcc7e0411",
                title: "Pie chart update",
                author: "D3"
            },
            {
                path: "@d3/arc-tween?intent=fork",
                thumbnail: "40b384ca70874d1a73d14cfddac0b22ebe540903fbf3816182f2973988c68063",
                title: "Arc tween",
                author: "D3"
            }
        ])}`
    )
}

function _interaction(previews, md) {
    return (
        md`### Interaction
    
    D3’s low-level approach allows for performant incremental updates during interaction. And D3 supports popular interaction methods including [dragging](https://d3js.org/d3-drag), [brushing](https://d3js.org/d3-brush), and [zooming](https://d3js.org/d3-zoom).
    
    ${previews([
            {
                path: "@d3/versor-dragging?intent=fork",
                thumbnail: "79a43b8d1ba72926ee8efb9bdfe24ed20611184e081ed3c892eb32e1bb805397",
                title: "Versor dragging",
                author: "D3"
            },
            {
                path: "@d3/index-chart/2?intent=fork",
                thumbnail: "87220c31b9e2456687bc19579ff96d5dc8b7707be21de5a380df79a9176ffd94",
                title: "Index chart",
                author: "D3"
            },
            {
                path: "@kerryrodden/sequences-sunburst",
                thumbnail: "9a73001277807e217a710e37ffcd7912e9ec13dba0ba11aff65420d09b3edaad",
                title: "Sequences sunburst",
                author: "Kerry Rodden"
            },
            {
                path: "@d3/brushable-scatterplot?intent=fork",
                thumbnail: "2da3ae8fda5623d50b14ce86f380b4efdf6b4025671505f46c5184e18b354330",
                title: "Brushable scatterplot",
                author: "D3"
            },
            {
                path: "@d3/brushable-scatterplot-matrix?intent=fork",
                thumbnail: "2dc031720e792f20bb06fb3d97d1b95b1b6c73da7c92ba2cca30ca8d10de8f9a",
                title: "Brushable scatterplot matrix",
                author: "D3"
            },
            {
                path: "@d3/pannable-chart?intent=fork",
                thumbnail: "ec247c2705d1fd141352fa24f7419638d35713cd855ce5fdb6e52678865a6ddb",
                title: "Pannable chart",
                author: "D3"
            },
            {
                path: "@d3/zoomable-area-chart?intent=fork",
                thumbnail: "de7799c54a2a6f500dcea71072bce7895ba5985fd10542b25cc5fb75a981efab",
                title: "Zoomable area chart",
                author: "D3"
            },
            {
                path: "@d3/zoomable-bar-chart?intent=fork",
                thumbnail: "0e8f394a9b90622bf4b422d264f3a199a0d9ec3a4c414b2e6f33788681cc486f",
                title: "Zoomable bar chart",
                author: "D3"
            },
            {
                path: "@d3/seamless-zoomable-map-tiles?intent=fork",
                thumbnail: "49769e89aedc8c066bb925e05c19d5fdf003a177670fdeb1b3dbc1d3b120b3db",
                title: "Seamless zoomable map tiles",
                author: "D3"
            }
        ])}`
    )
}

function _analysis(previews, md) {
    return (
        md`### Analysis
    
    D3 is for more than visualization; it includes tools for quantitative analysis, such as [data transformation](https://d3js.org/d3-array), [random number generation](https://d3js.org/d3-random), [hexagonal binning](/collection/@d3/d3-hexbin), and [contours via marching squares](https://d3js.org/d3-contour).
    
    ${previews([
            {
                path: "@d3/moving-average?intent=fork",
                thumbnail: "7929711ccf9ca674cc779ce46e64571f7c38796c7778b983e68176af6afeb155",
                title: "Moving average",
                author: "D3"
            },
            {
                path: "@d3/bollinger-bands/2?intent=fork",
                thumbnail: "ee6d1ffcc0b575a74bd6402ed129cea73f7c45727bb1e3e960ef13f9bd5014d1",
                title: "Bollinger bands",
                author: "D3"
            },
            {
                path: "@d3/box-plot/2?intent=fork",
                thumbnail: "bd4c5d003300d7c20d0a3af1055085deb043bbd2505c20acc1f95332f0591164",
                title: "Box plot",
                author: "D3"
            },
            {
                path: "@d3/histogram/2?intent=fork",
                thumbnail: "018440f30753ed8960043336f3b0ea95d56ba2c0ab91c8cecfce26b4d51490e8",
                title: "Histogram",
                author: "D3"
            },
            {
                path: "@d3/kernel-density-estimation?intent=fork",
                thumbnail: "95d34bc68cc84b96f96ca4b073f9fc557df7c9fe4213c43536201e908909da3c",
                title: "Kernel density estimation",
                author: "D3"
            },
            {
                path: "@d3/density-contours?intent=fork",
                thumbnail: "96a132291395b98ebe551971b5dab56f2c0440ee09b3071641480a378d24a997",
                title: "Density contours",
                author: "D3"
            },
            {
                path: "@d3/volcano-contours/2?intent=fork",
                thumbnail: "e211f246ad6ed28ab4c3a762d63af0a68558aaf781e82ef70c239d052b779f68",
                title: "Volcano contours",
                author: "D3"
            },
            {
                path: "@d3/contours?intent=fork",
                thumbnail: "500cadff2bd8b83135b5189668297c7f1c179900347911330660b2b83e9e9c39",
                title: "Contours",
                author: "D3"
            },
            {
                path: "@d3/hexbin?intent=fork",
                thumbnail: "7c9f5bd32119c0575b9db52adc8f859c07891367f29ed5f463ad878602af67cf",
                title: "Hexbin",
                author: "D3"
            },
            {
                path: "@d3/hexbin-area?intent=fork",
                thumbnail: "7e79d7e019ec62049d6cb402c07afebd817817d50dc1402e42e156bd222fc59e",
                title: "Hexbin (area)",
                author: "D3"
            },
            {
                path: "@d3/hexbin-map?intent=fork",
                thumbnail: "aa10cb91e3c7b30519994def10e0ba7f0371062aebed9152ad59a55099889646",
                title: "Hexbin map",
                author: "D3"
            },
            {
                path: "@d3/q-q-plot?intent=fork",
                thumbnail: "c657b616efca47883c776c810d080af24ff941b66ba4dfd80613048badeaee7d",
                title: "Q–Q plot",
                author: "D3"
            },
            {
                path: "@d3/normal-quantile-plot?intent=fork",
                thumbnail: "4f5ad4d8f5d19810c36e332d83eb2d0ed307bdedd4a65071d8e2480c88da8ec4",
                title: "Normal quantile plot",
                author: "D3"
            },
            {
                path: "@d3/parallel-sets?intent=fork",
                thumbnail: "27ed7774e1fa36663a857c82f0a056db7e3d1726d532a5b8ec0a38a1d4d2a9c7",
                title: "Parallel sets",
                author: "D3"
            }
        ])}`
    )
}

function _hierarchies(previews, md) {
    return (
        md`### Hierarchies
    
    D3 supports [hierarchical data](https://d3js.org/d3-hierarchy), too, with popular layouts such as [treemaps](https://d3js.org/d3-hierarchy/treemap), [tidy trees](https://d3js.org/d3-hierarchy/tree), and [packed circles](https://d3js.org/d3-hierarchy/pack). And you retain complete control over how the data is displayed.
    
    ${previews([
            {
                path: "@d3/treemap/2?intent=fork",
                thumbnail: "278516556172557a945111e81e0996b1e461364bc1402c57e412a33597d2f014",
                title: "Treemap",
                author: "D3"
            },
            {
                path: "@d3/cascaded-treemap?intent=fork",
                thumbnail: "b9bed4be41769129826de1c775ee5676bd3769c509348389014baaabc30f0530",
                title: "Cascaded treemap",
                author: "D3"
            },
            {
                path: "@d3/nested-treemap?intent=fork",
                thumbnail: "16fd5847631cddf68b99cf2b1f0dd3d421d2948ef98c2a0c4124846e5725f207",
                title: "Nested treemap",
                author: "D3"
            },
            {
                path: "@d3/pack/2?intent=fork",
                thumbnail: "0e48e60d7963b38acb83f73875b6b00b1520504c92de8b4aa1419b1727fcedb2",
                title: "Circle packing",
                author: "D3"
            },
            {
                path: "@d3/indented-tree?intent=fork",
                thumbnail: "baa8dac553884e09caa3f0611a077594ebdfcfd9416647f1d5c8457d898a52a6",
                title: "Indented tree",
                author: "D3"
            },
            {
                path: "@d3/tree/2?intent=fork",
                thumbnail: "68a8e7a585cd8cc77279deaa57ad08dfe0b34bdb1ce290de341e299b44144172",
                title: "Tidy tree",
                author: "D3"
            },
            {
                path: "@d3/radial-tree/2?intent=fork",
                thumbnail: "1a0c15e714b00915cbd845b57731fd6286a97e4e95a7ec2ce289682f39a0ce96",
                title: "Radial tidy tree",
                author: "D3"
            },
            {
                path: "@d3/cluster/2?intent=fork",
                thumbnail: "87ade408aa70f0875bf4b158dd986350d931884d5b6717cd7fc9b5d2680904c8",
                title: "Cluster dendrogram",
                author: "D3"
            },
            {
                path: "@d3/radial-cluster/2?intent=fork",
                thumbnail: "2dc4b6a2731a7216b2e5e555ba6d21b045aae900c022724e20c14833294380ed",
                title: "Radial dendrogram",
                author: "D3"
            },
            {
                path: "@d3/sunburst/2?intent=fork",
                thumbnail: "5d33e22bc8da09a4495d5bfe0ff207610f2249dc33cbb98505058a4960e8d668",
                title: "Sunburst",
                author: "D3"
            },
            {
                path: "@d3/icicle/2?intent=fork",
                thumbnail: "6800ea153fbc5efdde82ed342b0ce8abfc6a7ebbb70b60944a084c790b6fea42",
                title: "Icicle",
                author: "D3"
            },
            {
                path: "@nitaku/tangled-tree-visualization-ii",
                thumbnail: "5095e50b5338ca6764d664b98449aadf1cd6fcdafb2639eaad4975013b8e1f17",
                title: "Tangled tree visualization",
                author: "Matteo Abrate"
            },
            {
                path: "@d3/tree-of-life?intent=fork",
                thumbnail: "4947ed7ee51a82ee3ea09baa2fb7a2c2abd111f888fdfde96693e493c48f8d4d",
                title: "Phylogenetic tree",
                author: "D3"
            },
            {
                path: "@d3/force-directed-tree?intent=fork",
                thumbnail: "0ba641e54c2be034d5ebee3ff1e202a8efb11aab0f55cb4ef1348d7fcfb90a13",
                title: "Force-directed tree",
                author: "D3"
            }
        ])}`
    )
}

function _networks(previews, md) {
    return (
        md`### Networks
    
    D3 works with networked data (graphs), including [simulated forces](https://d3js.org/d3-force) for resolving competing constraints and an iterative [Sankey layout](/collection/@d3/d3-sankey).
    
    ${previews([
            {
                path: "@d3/force-directed-graph/2?intent=fork",
                thumbnail: "daca6197a1592e5582e904387074d40ce144606eb639222eb9306ce38ba32623",
                title: "Force-directed graph",
                author: "D3"
            },
            {
                path: "@d3/disjoint-force-directed-graph/2?intent=fork",
                thumbnail: "f36f862511c45e96cb0e4c26ac6b08024a37266ac7ed1b5d4dbefab2c8b528a6",
                title: "Disjoint force-directed graph",
                author: "D3"
            },
            {
                path: "@d3/mobile-patent-suits?intent=fork",
                thumbnail: "636bcd430f65f3358a5afea3e49100bd7236a48cf48b2db9fba906e818338307",
                title: "Mobile patent suits",
                author: "D3"
            },
            {
                path: "@d3/arc-diagram?intent=fork",
                thumbnail: "c2484a1895e229e720b25326057da4385f74fd34d4e9027a69fbb01a53f68472",
                title: "Arc diagram",
                author: "D3"
            },
            {
                path: "@d3/sankey/2?intent=fork",
                thumbnail: "3074afcf13f0dfa574415acc4e293ba58d6da310e2f1a6d68aff493b9607ba1b",
                title: "Sankey diagram",
                author: "D3"
            },
            {
                path: "@d3/hierarchical-edge-bundling?intent=fork",
                thumbnail: "e1ccc6dd42e7307844136b19c6c6422abfa6e089f7874782afff7f830fc015c9",
                title: "Hierarchical edge bundling",
                author: "D3"
            },
            {
                path: "@d3/hierarchical-edge-bundling/2?intent=fork",
                thumbnail: "9728eea74c9ba504efb2f2f7e34a9f6921b01f926e037b093d6ec5c9d6bde617",
                title: "Hierarchical edge bundling",
                author: "D3"
            },
            {
                path: "@d3/chord-diagram?intent=fork",
                thumbnail: "5ac8896fbde55a40eeaec6f2008d635e14c16e2dd2c6373f69d287597a5b475b",
                title: "Chord diagram",
                author: "D3"
            },
            {
                path: "@d3/chord-diagram/2?intent=fork",
                thumbnail: "204ffe6e4ebe39ce037c2caa5ac3c22bd630ea6dea19989833afa4d9c7531445",
                title: "Chord diagram",
                author: "D3"
            },
            {
                path: "@d3/directed-chord-diagram/2?intent=fork",
                thumbnail: "e104354751b9fd78d0cb77201625d27401cd1374299233dacec75030e1d5896b",
                title: "Directed chord diagram",
                author: "D3"
            },
            {
                path: "@d3/chord-dependency-diagram/2?intent=fork",
                thumbnail: "b6122709255d5f5d75343b97ba6f04867c22ba9e3bdb4c76abd1351cb7fc8779",
                title: "Chord dependency diagram",
                author: "D3"
            }
        ])}`
    )
}

function _bars(previews, md) {
    return (
        md`### Bars
    
    D3 [scales](https://d3js.org/d3-scale) and [axes](https://d3js.org/d3-axis) support basic charts. Or invent a new form that better serves your needs.
    
    ${previews([
            {
                path: "@d3/bar-chart/2?intent=fork",
                thumbnail: "0e8f394a9b90622bf4b422d264f3a199a0d9ec3a4c414b2e6f33788681cc486f",
                title: "Bar chart",
                author: "D3"
            },
            {
                path: "@d3/horizontal-bar-chart/2?intent=fork",
                thumbnail: "e716222d556bbf3fc942f7a177cf657481e051c65eca95505a8b1e37f62e9d95",
                title: "Horizontal bar chart",
                author: "D3"
            },
            {
                path: "@d3/diverging-bar-chart/2?intent=fork",
                thumbnail: "774026a8d6b737d6411e576b1ff1c46c2f928afd1e21ac6786c9d65f4dd83979",
                title: "Diverging bar chart",
                author: "D3"
            },
            {
                path: "@d3/stacked-bar-chart/2?intent=fork",
                thumbnail: "d913303efcf3c716d98c7b4c3c32a5f56ca4cb8a07faaf5ce2b26b1ec7890e97",
                title: "Stacked bar chart",
                author: "D3"
            },
            {
                path: "@d3/stacked-horizontal-bar-chart/2?intent=fork",
                thumbnail: "623a6386156488b73a3259831b3f2ac5333d045e15130bcf61482257b6dd08ec",
                title: "Stacked horizontal bar chart",
                author: "D3"
            },
            {
                path: "@d3/stacked-normalized-horizontal-bar/2?intent=fork",
                thumbnail: "280d8bfe3dfd2989256fa1b99495762cc95a5405636b048bd9834bc1a43e58b6",
                title: "Stacked normalized horizontal bar chart",
                author: "D3"
            },
            {
                path: "@d3/grouped-bar-chart/2?intent=fork",
                thumbnail: "b37c165ba0794636e10d79e6126d469dfd7182f50cd01b70b8208c4457eedfc3",
                title: "Grouped bar chart",
                author: "D3"
            },
            {
                path: "@d3/diverging-stacked-bar-chart/2?intent=fork",
                thumbnail: "6d30eda49a7bfd8b63019064257600a812ad4443f13becd3719db16a467de722",
                title: "Diverging stacked bar chart",
                author: "D3"
            },
            {
                path: "@d3/marimekko-chart?intent=fork",
                thumbnail: "ef04371d3b0179ecf2f905d6d46415d8e43b874c0cf2dc50b0d4ec9ee6ab047b",
                title: "Marimekko chart",
                author: "D3"
            },
            {
                path: "@tezzutezzu/world-history-timeline",
                thumbnail: "3a98164ca1a4a34a0fb805c771155dcab585a436ff99401ab827d23b2a49d841",
                title: "World history timeline",
                author: "Danilo Di Cuia"
            },
            {
                path: "@d3/calendar/2?intent=fork",
                thumbnail: "d008c0aeb2e945aef84b41961dd335bf81d9e01aed81b0f3c14ee782683ebbe9",
                title: "Calendar",
                author: "D3"
            },
            {
                path: "@d3/the-impact-of-vaccines?intent=fork",
                thumbnail: "bf486e55141ea7e367ff1076e604d00522a4a4c22a63ca1a56ae5031b6f2f6da",
                title: "The impact of vaccines",
                author: "D3"
            },
            {
                path: "@mbostock/electric-usage-2019",
                thumbnail: "a1f5da765b6add8b5bfd74a64631ed71f991be40abcf31b759a0c112e0c30e07",
                title: "Electricity usage, 2019",
                author: "Mike Bostock"
            },
            {
                path: "@d3/revenue-by-music-format-1973-2018?intent=fork",
                thumbnail: "ab84b1533858c337a8d4817b2256eb136216403fd7857371ead6c1915958b2eb",
                title: "Revenue by music format, 1973–2018",
                author: "D3"
            }
        ])}`
    )
}

function _lines(previews, md) {
    return (
        md`### Lines
    
    With direct control over [graphics](https://d3js.org/d3-shape), and support for both SVG and Canvas, the possibilities are endless.
    
    ${previews([
            {
                path: "@d3/line-chart/2?intent=fork",
                thumbnail: "12f99b59b32cf0794534d7a4e3f8c86c4a6b25428e135db9e17133bff935a995",
                title: "Line chart",
                author: "D3"
            },
            {
                path: "@d3/line-chart-missing-data/2?intent=fork",
                thumbnail: "506192d7f8140a2ea4e48e6f064b9a89c3f2163208ddbd69729033326652c43c",
                title: "Line with missing data",
                author: "D3"
            },
            {
                path: "@d3/multi-line-chart/2?intent=fork",
                thumbnail: "b0d4966110427b06bfdf7a84396cce6267e52cabf0805ba466618f2758cb56b5",
                title: "Multi-line chart",
                author: "D3"
            },
            {
                path: "@d3/change-line-chart/2?intent=fork",
                thumbnail: "c19b0ac83a3b4a8ba4b54cc2347322336f0f161b1f72034634d3bbda366124b0",
                title: "Change line chart",
                author: "D3"
            },
            {
                path: "@d3/slope-chart/3?intent=fork",
                thumbnail: "cd4f14efd1b45ac020b495178bd5467fea6e57ce7eb4b066fca40c9009f0cb26",
                title: "Slope chart",
                author: "D3"
            },
            {
                path: "@d3/cancer-survival-rates/2?intent=fork",
                thumbnail: "046a6205fbcceb2f9c9852a2b11fb759ee6bb662c2763efc7e484b60e313bfa6",
                title: "Slope chart II",
                author: "D3"
            },
            {
                path: "@d3/mareys-trains?intent=fork",
                thumbnail: "c183df5c146a4423aa088e67949957ea1ab0b67c3ae6e1469e6fd6f92fd757be",
                title: "Marey’s trains",
                author: "D3"
            },
            {
                path: "@d3/candlestick-chart/2?intent=fork",
                thumbnail: "d545d9ba7c68765e54e4ed144496c9fa26822f3b5bcdc9bcf4fbdab5c3dc2ac0",
                title: "Candlestick chart",
                author: "D3"
            },
            {
                path: "@d3/variable-color-line?intent=fork",
                thumbnail: "ee7b5f671a5879ba6b1560fdc2c68a4b1aafa966014b6880a6a41057443fc02a",
                title: "Variable-color line",
                author: "D3"
            },
            {
                path: "@d3/gradient-encoding?intent=fork",
                thumbnail: "3b9c268fede0c1d958df5e54d16bba4f91383f1e371331db417341c95eb62188",
                title: "Gradient encoding",
                author: "D3"
            },
            {
                path: "@d3/threshold-encoding?intent=fork",
                thumbnail: "61af2f2c261cc7161243068abda0ceb7de8697c675c4f13c737543d682cd53c6",
                title: "Threshold encoding",
                author: "D3"
            },
            {
                path: "@d3/parallel-coordinates?intent=fork",
                thumbnail: "137c531fbab68c35e4713548f23b720c511234954380d23d9396c48a83e03d2d",
                title: "Parallel coordinates",
                author: "D3"
            },
            {
                path: "@d3/inequality-in-american-cities?intent=fork",
                thumbnail: "9743d80ca7e07596c11b59d8de34f562b3c9667d95ebd2b4ac0a26c713c4c685",
                title: "Inequality in American cities",
                author: "D3"
            },
            {
                path: "@d3/new-zealand-tourists-1921-2018?intent=fork",
                thumbnail: "f661a7cba9d98586aed48fd5a6878c3dff1948139ba75e53fcfd0b64b0f22bc5",
                title: "New zealand tourists, 1921–2018",
                author: "D3"
            },
            {
                path: "@d3/sea-ice-extent-1978-2017?intent=fork",
                thumbnail: "4515af68eb89274f28219a2b93dbeb8b192c1dd83d51ade786a87910bba7d795",
                title: "Sea ice extent, 1978–2017",
                author: "D3"
            }
        ])}`
    )
}

function _areas(previews, md) {
    return (
        md`### Areas
    
    Go beyond basic area charts with [difference charts](/@d3/difference-chart/2?intent=fork) or [streamgraphs](/@d3/streamgraph/2?intent=fork). [Ridgeline plots](/@d3/ridgeline-plots?intent=fork) and [horizon charts](/@d3/horizon-charts/2?intent=fork) are great for comparing many simultaneous time series.
    
    ${previews([
            {
                path: "@d3/area-chart/2?intent=fork",
                thumbnail: "621c926e03757f3473aa2d0257e7eb0666ee01b22c73a658ce7357fea1d91afe",
                title: "Area chart",
                author: "D3"
            },
            {
                path: "@d3/area-chart-missing-data/2?intent=fork",
                thumbnail: "5f468d0a286a6a173120f7e05abca19944f939e216768e31ef8afccfcf9a84c2",
                title: "Area with missing data",
                author: "D3"
            },
            {
                path: "@d3/stacked-area-chart/2?intent=fork",
                thumbnail: "718ec24be1b77d9130e3e18f7e922ff092ae634d515924d1cf97b507e26de0dd",
                title: "Stacked area chart",
                author: "D3"
            },
            {
                path: "@d3/normalized-stacked-area-chart/2?intent=fork",
                thumbnail: "da0f79e3e2b763746b60b23f35b65099a6ba629034b71a69e1c0c613b2b39af6",
                title: "Normalized stacked area chart",
                author: "D3"
            },
            {
                path: "@d3/u-s-population-by-state-1790-1990?intent=fork",
                thumbnail: "c703635d744ecf5e09203afb3e96cf6668364e5029a85c41a6b891178764a3ae",
                title: "U.S. population by state, 1790–1990",
                author: "D3"
            },
            {
                path: "@d3/streamgraph/2?intent=fork",
                thumbnail: "b33be4bd1cdafc454f4c2665ce9d4ef6d97aa1bbd42e7297913af3a5cd5b0b26",
                title: "Streamgraph",
                author: "D3"
            },
            {
                path: "@d3/difference-chart/2?intent=fork",
                thumbnail: "8a9d574def3360a9b5ca518668387d2bbc5115c02d2bee03b19f01ac67779f4b",
                title: "Difference chart",
                author: "D3"
            },
            {
                path: "@d3/band-chart/2?intent=fork",
                thumbnail: "f264024d17774046f5b313955678bc5c1eab82ba043c0eff74003309f6e1defe",
                title: "Band chart",
                author: "D3"
            },
            {
                path: "@d3/ridgeline-plot?intent=fork",
                thumbnail: "d397f23fd5c4230bb7d0b9aba0790f1452d8ef1afd4c24c8e9eb465a74a45bce",
                title: "Ridgeline (joy) plot",
                author: "D3"
            },
            {
                path: "@d3/horizon-chart/2?intent=fork",
                thumbnail: "4674f92f3076649b97b5f833d80ae43df494be11370d79cf15d9a051685c197c",
                title: "Horizon chart",
                author: "D3"
            },
            {
                path: "@d3/realtime-horizon-chart?intent=fork",
                thumbnail: "969982ef06b8b9ef724799a2c6824301d0cbb3152eb4b2d5e506305123fd5b9a",
                title: "Realtime horizon chart",
                author: "D3"
            }
        ])}`
    )
}

function _dots(previews, md) {
    return (
        md`### Dots
    
    Don’t forget the humble scatterplot. For a single dimension, consider the [beeswarm](/@d3/beeswarm/2); for finding pairwise dimensional correlations, try a [SPLOM](/@d3/splom/2).
    
    ${previews([
            {
                path: "@d3/scatterplot/2?intent=fork",
                thumbnail: "9c4990bd174ca8781013b045fadb3b7c13e7f9e5540480eb20ceaa44d00b1bed",
                title: "Scatterplot",
                author: "D3"
            },
            {
                path: "@d3/scatterplot-with-shapes?intent=fork",
                thumbnail: "240a416712b73a02bf6515ef3086ff8c19dd870339d307d0029e4bceb70aa631",
                title: "Scatterplot with shapes",
                author: "D3"
            },
            {
                path: "@d3/splom/2?intent=fork",
                thumbnail: "5e34c69987146d69e893eb5d44549c14e456252464186c389218937ece7b8d28",
                title: "Scatterplot matrix",
                author: "D3"
            },
            {
                path: "@d3/dot-plot/2?intent=fork",
                thumbnail: "bc17217415bc4e5f5510294076bb1022b97792ab67a7d1c4725e144787f1e8da",
                title: "Dot plot",
                author: "D3"
            },
            {
                path: "@d3/global-temperature-trends?intent=fork",
                thumbnail: "1c7c0e607ef45cf35efa05d291f056b3ccffde40a7833c12c1b72321d7e7006a",
                title: "Global temperature trends",
                author: "D3"
            },
            {
                path: "@d3/bubble-map/2?intent=fork",
                thumbnail: "9b39b19f35384e5f742ac5a45c6666cd27a7c15d8504dbcca03e6be081bd0aef",
                title: "Bubble map",
                author: "D3"
            },
            {
                path: "@d3/spike-map/2?intent=fork",
                thumbnail: "3ca25b589618b503e391b0ba48eab612c427ba9faa7abdb5ec9befff5a5841d5",
                title: "Spike map",
                author: "D3"
            },
            {
                path: "@d3/bubble-chart/2?intent=fork",
                thumbnail: "ca4f7b52273224989f1ecec193f6c9a1b11b85456d2ad78efcf6a54267839b78",
                title: "Bubble chart",
                author: "D3"
            },
            {
                path: "@d3/beeswarm/2?intent=fork",
                thumbnail: "4b93a0e00af84c60c55efdd8a025b60b8f1fc4eec95ef5d278567e5592dd6052",
                title: "Beeswarm",
                author: "D3"
            },
            {
                path: "@d3/beeswarm-mirrored/2?intent=fork",
                thumbnail: "d89afe7d4715896b0377c5d88b097997496017c0c6cad25e5b3bcd9ffd86a5ef",
                title: "Mirrored beeswarm",
                author: "D3"
            },
            {
                path: "@d3/hertzsprung-russell-diagram?intent=fork",
                thumbnail: "40a8ec3212c0cbcdc7cb1643c225fa090de9d8e39f7ceb91689ef9b2f453ef2b",
                title: "Hertzsprung–Russell diagram",
                author: "D3"
            }
        ])}`
    )
}

function _radial(previews, md) {
    return (
        md`### Radial
    
    Pies and donuts are good for comparing a part to the whole. And radial layouts can be appropriate for cyclical data.
    
    ${previews([
            {
                path: "@d3/pie-chart/2?intent=fork",
                thumbnail: "bc1e43c4dc01a4d7bc462ecd6cca55d096138f86406fc54be2a7674d0e733c57",
                title: "Pie chart",
                author: "D3"
            },
            {
                path: "@d3/donut-chart/2?intent=fork",
                thumbnail: "6ba65a23ffa3326d3679a66e6b1a9a17af61a1512d1f17258695fe5decfa6039",
                title: "Donut chart",
                author: "D3"
            },
            {
                path: "@d3/radial-area-chart/2?intent=fork",
                thumbnail: "99f2b2dfc8f848520ce4e1f55488913d550b0db2f81bf112ab2ab1a75abd12b8",
                title: "Radial area chart",
                author: "D3"
            },
            {
                path: "@d3/radial-stacked-bar-chart/2?intent=fork",
                thumbnail: "af9451150f95ca7913c380d74e10e9e2fe699976d41cdf981eb19b30412702d1",
                title: "Radial stacked bar chart",
                author: "D3"
            },
            {
                path: "@d3/radial-stacked-bar-chart/3?intent=fork",
                thumbnail: "d10709a3410442ca2267d2a6c6a5bb48c11c324e9f4326638572e90599ac419c",
                title: "Radial stacked bar chart (sorted)",
                author: "D3"
            }
        ])}`
    )
}

function _annotation(previews, md) {
    return (
        md`### Annotation
    
    Labels, legends, axes, titles, guides, and keys help a visualization communicate effectively. Here are a few strategies.
    
    ${previews([
            {
                path: "@d3/inline-labels/2?intent=fork",
                thumbnail: "0c15ba0a824b63e2b031b7d45c28973beec940a6876f9d3e99c5119ab91dddeb",
                title: "Inline labels",
                author: "D3"
            },
            {
                path: "@harrystevens/directly-labelling-lines",
                thumbnail: "1fb683721dc358ccecf55e84386d5025a69d176517270f71a5143f5734a71c18",
                title: "Directly labelling lines",
                author: "Harry Stevens"
            },
            {
                path: "@d3/line-with-tooltip/2?intent=fork",
                thumbnail: "e4e99ec69cb0edeb2eae11cd855439ddf6f1da0cd6181a222c6d3b2ffa8841a9",
                title: "Line chart with tooltip",
                author: "D3"
            },
            {
                path: "@d3/voronoi-labels",
                thumbnail: "c1a6c5cbd331ff43b0aec5d5dbc7294dc95b9d5880bec11d97ca40ac6bb8067e",
                title: "Voronoi labels",
                author: "D3"
            },
            {
                path: "@fil/occlusion",
                thumbnail: "1c60a3f8bb58cd252d5d2893fc5d3a93345c9c9712c6d586acaabc0367aeede5",
                title: "Occlusion",
                author: "Fil"
            },
            {
                path: "@d3/graticule-labels-stereographic?intent=fork",
                thumbnail: "fd1336d8ced580b05a49499ca1b2d7a271762b7f9cd39dcc72345d7ff12b9f2c",
                title: "Graticule labels",
                author: "D3"
            },
            {
                path: "@d3/styled-axes?intent=fork",
                thumbnail: "e30abc99319dfdeeed32324d2806fe67d99d635512b664993a7a1b1bd969d847",
                title: "Styled axes",
                author: "D3"
            },
            {
                path: "@d3/color-legend",
                thumbnail: "239b95f0d187fbe3b6abf51a8d8a31f9cb55b5ff3f233b01d5418678b5a58624",
                title: "Color legend",
                author: "D3"
            }
        ])}`
    )
}

function _maps(previews, md) {
    return (
        md`### Maps
    
    D3 implements a dizzying array of [geographic projections](/collection/@d3/d3-geo-projection). It works great with [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON), [TopoJSON](https://github.com/topojson), and even [shapefiles](/@d3/streaming-shapefiles).
    
    ${previews([
            {
                path: "@d3/choropleth/2?intent=fork",
                thumbnail: "a9a0524cc739add09079120ca80f8f640eca51aa69a31b0cc9712aacca14d0a8",
                title: "Choropleth",
                author: "D3"
            },
            {
                path: "@d3/bivariate-choropleth?intent=fork",
                thumbnail: "7db751d85c746604fbf945229f8e39edf717fa9d7cf5e61e4a5e4f27bb8e5821",
                title: "Bivariate choropleth",
                author: "D3"
            },
            {
                path: "@d3/us-state-choropleth/2?intent=fork",
                thumbnail: "f691606ec5f71ba2d9bf2d460bf35fec8098e6f766c2f1e68e50d38f762ea943",
                title: "State choropleth",
                author: "D3"
            },
            {
                path: "@d3/world-choropleth/2?intent=fork",
                thumbnail: "9b8e01454902b751ecbe72af2a0b1fcc1fd09dd0caa5f06f422e825ba14d8dcd",
                title: "World choropleth",
                author: "D3"
            },
            {
                path: "@d3/world-map?intent=fork",
                thumbnail: "9202c28fb40879471231bd0cd718e09e263573552b45ba3292695dde63741038",
                title: "World map",
                author: "D3"
            },
            {
                path: "@d3/projection-comparison",
                thumbnail: "9596c59b75461eab2e17f406c7caa6b0574e64e74aacab392167bf7eb469f6d1",
                title: "Projection comparison",
                author: "D3"
            },
            {
                path: "@d3/tissots-indicatrix",
                thumbnail: "7713017d7d8ab67f3a03050f9fe57cefbcd7e078be65980f0b8d7e1446a0efb0",
                title: "Tissot’s indicatrix",
                author: "D3"
            },
            {
                path: "@d3/web-mercator-tiles?intent=fork",
                thumbnail: "10c1fa83addf7308f42fe093008b4159e2a6c5eea37ad418820be9d3cd6b173c",
                title: "Web Mercator tiles",
                author: "D3"
            },
            {
                path: "@d3/raster-tiles?intent=fork",
                thumbnail: "1f31ef7b286738354537ad9d892af7cd1163d6e26bb554f7ec43c0376b535949",
                title: "Raster tiles",
                author: "D3"
            },
            {
                path: "@d3/vector-tiles?intent=fork",
                thumbnail: "e83f526b7a16a09b55a5128c9d1297a4b8c75da3bbc4f51a3db5ab0db30f1d77",
                title: "Vector tiles",
                author: "D3"
            },
            {
                path: "@d3/clipped-map-tiles?intent=fork",
                thumbnail: "a40fc610857773f580618614dfee6e9802a3fce7338d936e3e275cec666dfcae",
                title: "Clipped map tiles",
                author: "D3"
            },
            {
                path: "@d3/raster-vector?intent=fork",
                thumbnail: "8d3df3bf93bd745a4d4f1c07108e234cdb1907a3906d9fc1af7a4ca4d3a56c63",
                title: "Raster & vector",
                author: "D3"
            },
            {
                path: "@d3/vector-field?intent=fork",
                thumbnail: "379f6a77c7dc953d5ed5e3711f1d567fcc49f81774c5e912725550b14425e786",
                title: "Vector field",
                author: "D3"
            },
            {
                path: "@d3/geotiff-contours-ii?intent=fork",
                thumbnail: "56c929e35ae92bd6a6f849d517a65f9bf717e84737d8ad0b9ce55f4e137f7783",
                title: "GeoTIFF contours",
                author: "D3"
            },
            {
                path: "@d3/us-airports-voronoi?intent=fork",
                thumbnail: "95a220a84799748cd2f9382c5242b309f5c773fa547004f3ca52ee73e6a755ac",
                title: "U.S. airports voronoi",
                author: "D3"
            },
            {
                path: "@d3/world-airports-voronoi?intent=fork",
                thumbnail: "dae9d704b154c37f3d9d93bb411d2656cceacd5407666163d174638e58469939",
                title: "World airports voronoi",
                author: "D3"
            },
            {
                path: "@d3/solar-terminator?intent=fork",
                thumbnail: "a9f1dea4d6925972d23a3984812d2ba7822a189ebead2d1cb90c0a8162b9e1cf",
                title: "Solar terminator",
                author: "D3"
            },
            {
                path: "@d3/solar-path?intent=fork",
                thumbnail: "b61d4ba0c713a936f295a1baa5f323c4ef0c69f19830991dbdcbd58627b60ca7",
                title: "Solar path",
                author: "D3"
            },
            {
                path: "@d3/star-map?intent=fork",
                thumbnail: "2473d67d4c1cfb04231ad0f1f44b09e8f12651dc75bc6111540212b5681c720e",
                title: "Star map",
                author: "D3"
            },
            {
                path: "@d3/non-contiguous-cartogram?intent=fork",
                thumbnail: "27308e079a4f30e91d0e7be7da4906aac12f4b7fc37538c311e56488de5d8448",
                title: "Non-contiguous cartogram",
                author: "D3"
            }
        ])}`
    )
}

function _essays(previews, md) {
    return (
        md`### Essays
    
    Weave interactive visualizations seamlessly into prose for explorable explanations. Don’t just *tell* the reader something; let the reader see, engage, and ask questions.
    
    ${previews([
            {
                path: "@d3/d3-packenclose",
                thumbnail: "d0fb65df2bf57366e8ee434bfb58f53af90c0c1dc08b9ae1896b2e552c2166de",
                title: "d3.packEnclose",
                author: "D3"
            },
            {
                path: "@veltman/centerline-labeling",
                thumbnail: "6e7bcd6dd272a2e10278955d3433454257bf1bec4bada8176351782459ccd71d",
                title: "Centerline labeling",
                author: "Noah Veltman"
            },
            {
                path: "@mbostock/methods-of-comparison-compared",
                thumbnail: "a2e3592ee45761fbab31ea5bdb2457cc6ef4c45818992a9373baa6f933ec02ac",
                title: "Methods of comparison, compared",
                author: "Mike Bostock"
            },
            {
                path: "@mbostock/predator-and-prey",
                thumbnail: "87d0a25a33e487663bdeef7dd8f00a7fdb96d7c30fa6391fc10ab80738005eef",
                title: "Predator and prey",
                author: "Mike Bostock"
            }
        ])}`
    )
}

function _fun(previews, md) {
    return (
        md`### Just for fun
    
    Why not have a little fun? Life’s not just about work, you know.
    
    ${previews([
            {
                path: "@mbostock/polar-clock",
                thumbnail: "da461cfada24f035d161d0fb9fe9b916ca706423761d45a293fd03a068bd3a77",
                title: "Polar clock",
                author: "Mike Bostock"
            },
            {
                path: "@mbostock/stern-brocot-tree",
                thumbnail: "3bb04e5fdf6e458fc557a3c840fedb0ad3cc8b8d22d7761f0c34446ec329d702",
                title: "Stern–brocot tree",
                author: "Mike Bostock"
            },
            {
                path: "@mbostock/voronoi-stippling",
                thumbnail: "b5ecef3d7a9bd01ebf80bbd388f92b0b93dae6c12c69ac18138f8c0da1da2fac",
                title: "Voronoi stippling",
                author: "Mike Bostock"
            },
            {
                path: "@veltman/watercolor",
                thumbnail: "130ec2c8426f30ba91379740f2a36e5f2fa32e5154034168cf84213133788337",
                title: "Watercolor",
                author: "Noah Veltman"
            },
            {
                path: "@d3/psr-b1919-21?intent=fork",
                thumbnail: "cc12c3cfbaea71c89406a433684bfb890997c91d87d7376dc44ccc429a392697",
                title: "PSR B1919+21",
                author: "D3"
            },
            {
                path: "@d3/epicyclic-gearing?intent=fork",
                thumbnail: "1580acba5e90463cc8809b034a3d30a9c9c523f858b13c2a3f9dd328c18119fe",
                title: "Epicyclic gearing",
                author: "D3"
            },
            {
                path: "@mbostock/owls-to-the-max",
                thumbnail: "460d8649a394bfc8afec5e7e534712f7f4910a42d7094ec483b0429d8eebf7b5",
                title: "Owls to the max",
                author: "Mike Bostock"
            },
            {
                path: "@mbostock/tadpoles",
                thumbnail: "c273105dec5e35ddc7147c4c49eb7a25372c02798658548d0ce9b0823ebe67a2",
                title: "Tadpoles",
                author: "Mike Bostock"
            },
            {
                path: "@d3/word-cloud?intent=fork",
                thumbnail: "bc9be17651dda21bd6a6053f2ba3b1a631d034f40a195c1c38eefff192e3f002",
                title: "Word cloud",
                author: "D3"
            },
            {
                path: "@d3/spilhaus-shoreline-map?intent=fork",
                thumbnail: "66a87355e205d820c4556bd80531c497229b8fa69bc2edcc04ad8366824be486",
                title: "Spilhaus shoreline map",
                author: "D3"
            },
            {
                path: "@mbostock/phases-of-the-moon",
                thumbnail: "0f81c94e11eb10b00c5d8d82cde88bd81e584c628a2862d45e2057289b6622fa",
                title: "Phases of the moon",
                author: "Mike Bostock"
            },
            {
                path: "@d3/color-schemes",
                thumbnail: "c680595bf8b26e4cb6bf2306c222a2ba9146f41dc0549c54e0b709a57d94cc87",
                title: "Color schemes",
                author: "D3"
            }
        ])}`
    )
}

function _16(md) {
    return (
        md`---
    
    ## Appendix
    
    The code below powers the gallery above. Want to add something to the gallery? Fork this notebook and [send a suggestion](/@observablehq/suggestions-and-comments)!`
    )
}

function _count(links) {
    return (
        links.length
    )
}

function _links(Generators, MutationObserver) {
    return (
        Generators.observe(notify => {
            let length = 0;
            const observed = () => {
                const links = document.querySelectorAll("a[title]");
                if (length !== links.length) {
                    length = links.length;
                    notify(Array.from(links, a => a.href).sort());
                }
            };
            const observer = new MutationObserver(observed);
            observer.observe(document.body, { childList: true, subtree: true });
            observed();
            return () => observer.disconnect();
        })
    )
}

function _previews(htl, preview) {
    return (
        function previews(notebooks) {
            return htl.html`<div style="display: grid; grid-gap: .875rem; grid-template-columns: repeat(auto-fill, minmax(160px, 5fr));">${notebooks.map(preview)}</div>`;
        }
    )
}

function _preview(htl) {
    return (
        function preview({ path, title, author, thumbnail }) {
            return htl.html`<a href="/${encodeURI(path)}" target="_blank" title="${title} by ${author}" style="display: inline-flex; flex-direction: column; align-items: start; font: 400 .75rem var(--sans-serif); color: #1b1e23; width: 100%;" onmouseover=${event => event.currentTarget.firstElementChild.style.borderColor = "#1b1e23"} onmouseout=${event => event.currentTarget.firstElementChild.style.borderColor = "#e8e8e8"}>
      <div style="border: solid 1px #e8e8e8; border-radius: 4px; box-sizing: border-box; width: 100%; padding-top: 62.5%; background-size: cover; background-image: url(https://static.observableusercontent.com/thumbnail/${encodeURI(thumbnail)}.jpg);"></div>
      <div style="width: 100%; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">${title}</div>
    </a>`;
        }
    )
}

function _21() {
    return (
        document.querySelector("base").target = "_blank"
    )
}

export default function define(runtime, observer) {
    const main = runtime.module();
    main.variable(observer()).define(["count", "md"], _1);
    main.variable(observer("animation")).define("animation", ["previews", "md"], _animation);
    main.variable(observer("interaction")).define("interaction", ["previews", "md"], _interaction);
    main.variable(observer("analysis")).define("analysis", ["previews", "md"], _analysis);
    main.variable(observer("hierarchies")).define("hierarchies", ["previews", "md"], _hierarchies);
    main.variable(observer("networks")).define("networks", ["previews", "md"], _networks);
    main.variable(observer("bars")).define("bars", ["previews", "md"], _bars);
    main.variable(observer("lines")).define("lines", ["previews", "md"], _lines);
    main.variable(observer("areas")).define("areas", ["previews", "md"], _areas);
    main.variable(observer("dots")).define("dots", ["previews", "md"], _dots);
    main.variable(observer("radial")).define("radial", ["previews", "md"], _radial);
    main.variable(observer("annotation")).define("annotation", ["previews", "md"], _annotation);
    main.variable(observer("maps")).define("maps", ["previews", "md"], _maps);
    main.variable(observer("essays")).define("essays", ["previews", "md"], _essays);
    main.variable(observer("fun")).define("fun", ["previews", "md"], _fun);
    main.variable(observer()).define(["md"], _16);
    main.variable(observer("count")).define("count", ["links"], _count);
    main.variable(observer("links")).define("links", ["Generators", "MutationObserver"], _links);
    main.variable(observer("previews")).define("previews", ["htl", "preview"], _previews);
    main.variable(observer("preview")).define("preview", ["htl"], _preview);
    main.variable(observer()).define(_21);
    return main;
}