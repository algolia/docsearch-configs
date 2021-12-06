new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://jquerymobile.com/changelog/",
    "https://jquerymobile.com/",
    "https://jquerymobile.com/download/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**.com/category/**", "**/resources/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://jquerymobile.com/**"],
  schedule: "at 20:30 on Wednesday",
  actions: [
    {
      indexName: "jquerymobile",
      pathsToMatch: ["https://jquerymobile.com/changelog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "header ~ article, .returns, .version-details, .section-title, [class^=toclevel], #toctitle";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h1",
            content: "#content p, #content li",
            lvl0: {
              selectors: "",
              defaultValue: "Changelog",
            },
            lvl2: "#content h2, #content h4.name",
            lvl3: "#content h3, #content h4:not(.name)",
            lvl4: "#content h5, #content strong:first-child",
            tags: {
              defaultValue: ["changelog"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "jquerymobile",
      pathsToMatch: ["https://jquerymobile.com/download/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "header ~ article, .returns, .version-details, .section-title, [class^=toclevel], #toctitle";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h1",
            content: "#content p, #content li",
            lvl0: {
              selectors: "",
              defaultValue: "Download",
            },
            lvl2: "#content h2, #content h4.name",
            lvl3: "#content h3, #content h4:not(.name)",
            lvl4: "#content h5, #content strong:first-child",
            tags: {
              defaultValue: ["download"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "jquerymobile",
      pathsToMatch: [
        "https://jquerymobile.com/**",
        "!https://jquerymobile.com/changelog/**",
        "!https://jquerymobile.com/download/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "header ~ article, .returns, .version-details, .section-title, [class^=toclevel], #toctitle";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h2, #content h4.name",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h1",
            },
            lvl2: "#content h3, #content h4:not(.name)",
            lvl3: "#content h5, #content strong:first-child",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    jquerymobile: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "unordered(content)",
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