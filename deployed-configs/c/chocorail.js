new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://chocorail.com/references",
    "https://chocorail.com/",
    "https://chocorail.com/manual",
  ],
  renderJavaScript: false,
  sitemaps: ["https://chocorail.com/sitemap.xml"],
  exclusionPatterns: [
    "https://chocorail.com/privacy/**",
    "https://chocorail.com/terms/**",
    "https://chocorail.com/law/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://chocorail.com/**"],
  schedule: "at 11:10 on Tuesday",
  actions: [
    {
      indexName: "chocorail",
      pathsToMatch: ["https://chocorail.com/references**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content:
              ".post article p, .post article li, .post article blockquote",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lvl5: ".post h5",
            pageRank: "6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "chocorail",
      pathsToMatch: ["https://chocorail.com/manual**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content:
              ".post article p, .post article li, .post article blockquote",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lvl5: ".post h5",
            pageRank: "5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "chocorail",
      pathsToMatch: ["https://chocorail.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content blockquote",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    chocorail: {
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
      separatorsToIndex: "_-",
      synonyms: [
        ["js", "javascript"],
        ["choco", "chocorail", "ちょこれ～る", "ちょこれーる"],
      ],
    },
  },
});