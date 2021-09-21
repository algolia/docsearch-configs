new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://doris.apache.org/master/en/",
    "https://doris.apache.org/",
    "https://doris.apache.org/master/zh-CN/",
    "https://doris.apache.org/branch-0.14/en/",
    "https://doris.apache.org/branch-0.14/zh-CN/",
    "https://doris.apache.org/branch-0.13/en/",
    "https://doris.apache.org/branch-0.13/zh-CN/",
    "https://doris.apache.org/branch-0.12/en/",
    "https://doris.apache.org/branch-0.12/zh-CN/",
    "https://doris.apache.org/branch-0.11/en/",
    "https://doris.apache.org/branch-0.11/zh-CN/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://doris.apache.org/**"],
  schedule: "at 01:30 on Tuesday",
  actions: [
    {
      indexName: "apache_doris",
      pathsToMatch: ["https://doris.apache.org/master/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h1",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".content__default h2",
            lvl3: ".content__default h3",
            lvl4: ".content__default h4",
            lvl5: ".content__default h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_doris",
      pathsToMatch: ["https://doris.apache.org/master/zh-CN/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h1",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".content__default h2",
            lvl3: ".content__default h3",
            lvl4: ".content__default h4",
            lvl5: ".content__default h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_doris",
      pathsToMatch: ["https://doris.apache.org/branch-0.14/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h1",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".content__default h2",
            lvl3: ".content__default h3",
            lvl4: ".content__default h4",
            lvl5: ".content__default h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["branch-0.14"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_doris",
      pathsToMatch: ["https://doris.apache.org/branch-0.14/zh-CN/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h1",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".content__default h2",
            lvl3: ".content__default h3",
            lvl4: ".content__default h4",
            lvl5: ".content__default h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
            version: {
              defaultValue: ["branch-0.14"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_doris",
      pathsToMatch: ["https://doris.apache.org/branch-0.13/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h1",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".content__default h2",
            lvl3: ".content__default h3",
            lvl4: ".content__default h4",
            lvl5: ".content__default h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["branch-0.13"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_doris",
      pathsToMatch: ["https://doris.apache.org/branch-0.13/zh-CN/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h1",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".content__default h2",
            lvl3: ".content__default h3",
            lvl4: ".content__default h4",
            lvl5: ".content__default h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
            version: {
              defaultValue: ["branch-0.13"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_doris",
      pathsToMatch: ["https://doris.apache.org/branch-0.12/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h1",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".content__default h2",
            lvl3: ".content__default h3",
            lvl4: ".content__default h4",
            lvl5: ".content__default h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["branch-0.12"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_doris",
      pathsToMatch: ["https://doris.apache.org/branch-0.12/zh-CN/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h1",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".content__default h2",
            lvl3: ".content__default h3",
            lvl4: ".content__default h4",
            lvl5: ".content__default h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
            version: {
              defaultValue: ["branch-0.12"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_doris",
      pathsToMatch: ["https://doris.apache.org/branch-0.11/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h1",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".content__default h2",
            lvl3: ".content__default h3",
            lvl4: ".content__default h4",
            lvl5: ".content__default h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["branch-0.11"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_doris",
      pathsToMatch: ["https://doris.apache.org/branch-0.11/zh-CN/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h1",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".content__default h2",
            lvl3: ".content__default h3",
            lvl4: ".content__default h4",
            lvl5: ".content__default h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
            version: {
              defaultValue: ["branch-0.11"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    apache_doris: {
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
    },
  },
});