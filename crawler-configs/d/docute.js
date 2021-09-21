new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://v3.docute.org/#/zh-Hans/",
    "https://v3.docute.org/",
    "https://v3.docute.org/#/zh-Hant/",
    "https://v3.docute.org/#/ja/",
    "https://v3.docute.org/#/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [
    "**/**?id=**",
    "**/**?id=**/**",
    "**/**404**",
    "**/**404**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://v3.docute.org/**"],
  schedule: "at 15:30 on Tuesday",
  actions: [
    {
      indexName: "docute",
      pathsToMatch: ["https://v3.docute.org/#/zh-Hans/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["Cannot find"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "docute",
      pathsToMatch: ["https://v3.docute.org/#/zh-Hant/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["Cannot find"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "docute",
      pathsToMatch: ["https://v3.docute.org/#/ja/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["Cannot find"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "docute",
      pathsToMatch: ["https://v3.docute.org/#/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["Cannot find"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    docute: {
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