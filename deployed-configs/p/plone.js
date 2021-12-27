new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.plone.org/3/en/",
    "https://docs.plone.org/",
    "https://docs.plone.org/4/en/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/**xml**", "**/**xml**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.plone.org/**"],
  schedule: "at 00:20 on Friday",
  actions: [
    {
      indexName: "plone",
      pathsToMatch: ["https://docs.plone.org/3/en/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^='toctree']";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "section[role='main'] p, section[role='main'] li",
            lvl0: {
              selectors: "",
            },
            lvl3: "section[role='main'] h1",
            lvl4: "section[role='main'] h2",
            lvl5: "section[role='main'] h3, section[role='main'] h4, section[role='main'] h5",
          },
          indexHeadings: { from: 4, to: 6 },
        });
      },
    },
    {
      indexName: "plone",
      pathsToMatch: ["https://docs.plone.org/4/en/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^='toctree']";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "section[role='main'] p, section[role='main'] li",
            lvl0: {
              selectors: "",
            },
            lvl3: "section[role='main'] h1",
            lvl4: "section[role='main'] h2",
            lvl5: "section[role='main'] h3, section[role='main'] h4, section[role='main'] h5",
          },
          indexHeadings: { from: 4, to: 6 },
        });
      },
    },
    {
      indexName: "plone",
      pathsToMatch: ["https://docs.plone.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^='toctree']";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "section[role='main'] p, section[role='main'] li",
            lvl0: {
              selectors: "",
            },
            lvl3: "section[role='main'] h1",
            lvl4: "section[role='main'] h2",
            lvl5: "section[role='main'] h3, section[role='main'] h4, section[role='main'] h5",
          },
          indexHeadings: { from: 4, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    plone: {
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