new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.secmaker.com/general/",
    "https://docs.secmaker.com/",
    "https://docs.secmaker.com/net-id-access/latest/",
    "https://docs.secmaker.com/net-id-access/2.1/",
    "https://docs.secmaker.com/net-id-enterprise/6.6/",
    "https://docs.secmaker.com/net-id-portal/5.6/",
    "https://docs.secmaker.com/net-id-portal-front/1.0/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.secmaker.com/sitemap.xml"],
  exclusionPatterns: ["**/_**", "**/_**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.secmaker.com/**"],
  schedule: "at 15:00 on Friday",
  actions: [
    {
      indexName: "secmaker",
      pathsToMatch: ["https://docs.secmaker.com/general/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: ".navbar .component",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            component: {
              defaultValue: ["general"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "secmaker",
      pathsToMatch: ["https://docs.secmaker.com/net-id-access/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: ".navbar .component",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            component: {
              defaultValue: ["net-id-access"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "secmaker",
      pathsToMatch: ["https://docs.secmaker.com/net-id-access/2.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: ".navbar .component",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            component: {
              defaultValue: ["net-id-access"],
            },
            version: {
              defaultValue: ["2.1"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "secmaker",
      pathsToMatch: ["https://docs.secmaker.com/net-id-enterprise/6.6/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: ".navbar .component",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            component: {
              defaultValue: ["net-id-enterprise"],
            },
            version: {
              defaultValue: ["6.6"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "secmaker",
      pathsToMatch: ["https://docs.secmaker.com/net-id-portal/5.6/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: ".navbar .component",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            component: {
              defaultValue: ["net-id-portal"],
            },
            version: {
              defaultValue: ["5.6"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "secmaker",
      pathsToMatch: ["https://docs.secmaker.com/net-id-portal-front/1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: ".navbar .component",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            component: {
              defaultValue: ["net-id-portal"],
            },
            version: {
              defaultValue: ["1.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    secmaker: {
      attributesForFaceting: ["type", "lang", "component", "version"],
      attributesToRetrieve: [
        "anchor",
        "content",
        "hierarchy",
        "url",
        "component",
        "version",
      ],
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
        "desc(weight.page_rank)",
        "desc(version)",
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