new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.leanxcale.com/leanxcale/1.4/",
    "https://docs.leanxcale.com/",
    "https://docs.leanxcale.com/leanxcale/1.5/",
    "https://docs.leanxcale.com/leanxcale/1.6/",
    "https://docs.leanxcale.com/leanxcale/1.7/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.leanxcale.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.leanxcale.com/**"],
  schedule: "at 05:00 on Thursday",
  actions: [
    {
      indexName: "leanxcale",
      pathsToMatch: ["https://docs.leanxcale.com/leanxcale/1.4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".body .toc, .doc .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc > h1.page",
            content: ".doc p, .doc dt, .doc td.context, .doc th.tableblock",
            lvl0: {
              selectors: ".nav-panel-explore .context",
            },
            lvl2: ".doc .sect1 > h2:first-child, .doc > h1.sect0",
            lvl3: ".doc .sect2 > h3:first-child",
            lvl4: ".doc .sect3 > h4:first-child",
            version: {
              defaultValue: ["1.4"],
            },
            component: {
              defaultValue: ["leanxcale"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "leanxcale",
      pathsToMatch: ["https://docs.leanxcale.com/leanxcale/1.5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".body .toc, .doc .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc > h1.page",
            content: ".doc p, .doc dt, .doc td.context, .doc th.tableblock",
            lvl0: {
              selectors: ".nav-panel-explore .context",
            },
            lvl2: ".doc .sect1 > h2:first-child, .doc > h1.sect0",
            lvl3: ".doc .sect2 > h3:first-child",
            lvl4: ".doc .sect3 > h4:first-child",
            version: {
              defaultValue: ["1.5"],
            },
            component: {
              defaultValue: ["leanxcale"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "leanxcale",
      pathsToMatch: ["https://docs.leanxcale.com/leanxcale/1.6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".body .toc, .doc .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc > h1.page",
            content: ".doc p, .doc dt, .doc td.context, .doc th.tableblock",
            lvl0: {
              selectors: ".nav-panel-explore .context",
            },
            lvl2: ".doc .sect1 > h2:first-child, .doc > h1.sect0",
            lvl3: ".doc .sect2 > h3:first-child",
            lvl4: ".doc .sect3 > h4:first-child",
            version: {
              defaultValue: ["1.6"],
            },
            component: {
              defaultValue: ["leanxcale"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "leanxcale",
      pathsToMatch: ["https://docs.leanxcale.com/leanxcale/1.7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".body .toc, .doc .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc > h1.page",
            content: ".doc p, .doc dt, .doc td.context, .doc th.tableblock",
            lvl0: {
              selectors: ".nav-panel-explore .context",
            },
            lvl2: ".doc .sect1 > h2:first-child, .doc > h1.sect0",
            lvl3: ".doc .sect2 > h3:first-child",
            lvl4: ".doc .sect3 > h4:first-child",
            version: {
              defaultValue: ["1.7"],
            },
            component: {
              defaultValue: ["leanxcale"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    leanxcale: {
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