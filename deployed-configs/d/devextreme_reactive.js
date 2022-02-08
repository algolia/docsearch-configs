new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://devexpress.github.io/devextreme-reactive/react/core/docs/",
    "https://devexpress.github.io/",
    "https://devexpress.github.io/devextreme-reactive/react/grid/docs/",
    "https://devexpress.github.io/devextreme-reactive/react/chart/docs/",
    "https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/",
    "https://devexpress.github.io/devextreme-reactive/vue/core/docs/",
    "https://devexpress.github.io/devextreme-reactive/vue/grid/docs/",
    "https://devexpress.github.io/devextreme-reactive/vue/chart/docs/",
    "https://devexpress.github.io/devextreme-reactive/vue/scheduler/docs/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://devexpress.github.io/**"],
  schedule: "at 15:00 on Tuesday",
  actions: [
    {
      indexName: "devextreme_reactive",
      pathsToMatch: [
        "https://devexpress.github.io/devextreme-reactive/react/core/docs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p, .docs-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            tool: {
              defaultValue: ["core"],
            },
            techno: {
              defaultValue: ["react"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "devextreme_reactive",
      pathsToMatch: [
        "https://devexpress.github.io/devextreme-reactive/react/grid/docs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p, .docs-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            tool: {
              defaultValue: ["grid"],
            },
            techno: {
              defaultValue: ["react"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "devextreme_reactive",
      pathsToMatch: [
        "https://devexpress.github.io/devextreme-reactive/react/chart/docs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p, .docs-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            tool: {
              defaultValue: ["chart"],
            },
            techno: {
              defaultValue: ["react"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "devextreme_reactive",
      pathsToMatch: [
        "https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p, .docs-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            tool: {
              defaultValue: ["scheduler"],
            },
            techno: {
              defaultValue: ["react"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "devextreme_reactive",
      pathsToMatch: [
        "https://devexpress.github.io/devextreme-reactive/vue/core/docs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p, .docs-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            tool: {
              defaultValue: ["core"],
            },
            techno: {
              defaultValue: ["vue"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "devextreme_reactive",
      pathsToMatch: [
        "https://devexpress.github.io/devextreme-reactive/vue/grid/docs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p, .docs-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            tool: {
              defaultValue: ["grid"],
            },
            techno: {
              defaultValue: ["vue"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "devextreme_reactive",
      pathsToMatch: [
        "https://devexpress.github.io/devextreme-reactive/vue/chart/docs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p, .docs-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            tool: {
              defaultValue: ["chart"],
            },
            techno: {
              defaultValue: ["vue"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "devextreme_reactive",
      pathsToMatch: [
        "https://devexpress.github.io/devextreme-reactive/vue/scheduler/docs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p, .docs-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            tool: {
              defaultValue: ["scheduler"],
            },
            techno: {
              defaultValue: ["vue"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    devextreme_reactive: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
      synonyms: [
        ["paging", "pagination"],
        ["tablecontainer", "tablecomponent"],
        ["download", "install"],
        ["styles", "appearance", "themes", "colors"],
        ["datagrid", "react grid", "data grid", "getting started"],
      ],
    },
  },
});