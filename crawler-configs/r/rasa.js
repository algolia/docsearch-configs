new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://rasa.com/docs/rasa/",
    "https://rasa.com/",
    "https://rasa.com/docs/rasa-x/",
    "https://rasa.com/docs/action-server/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://rasa.com/docs/rasa/sitemap.xml",
    "https://rasa.com/docs/rasa-x/sitemap.xml",
    "https://rasa.com/docs/action-server/sitemap.xml",
  ],
  exclusionPatterns: [
    "http://rasa.com/docs/**/d**",
    "http://rasa.com/docs/**/d**/**",
    "http://rasa.com/docs/**/next**",
    "http://rasa.com/docs/**/next**/**",
    "**/_**",
    "**/_**/**",
    "!**/",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://rasa.com/**"],
  schedule: "at 10:00 on Friday",
  actions: [
    {
      indexName: "rasa",
      pathsToMatch: ["https://rasa.com/docs/rasa/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".announce-bar";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu a.level--1.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            tags: {
              defaultValue: ["rasa"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "rasa",
      pathsToMatch: ["https://rasa.com/docs/rasa-x/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".announce-bar";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu a.level--1.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            tags: {
              defaultValue: ["rasa-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "rasa",
      pathsToMatch: ["https://rasa.com/docs/action-server/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".announce-bar";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu a.level--1.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            tags: {
              defaultValue: ["rasa-action-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    rasa: {
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
      synonyms: [["speech", "voice"]],
    },
  },
});