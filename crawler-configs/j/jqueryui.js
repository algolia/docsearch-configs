new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://api.jqueryui.com/",
    "https://jqueryui.com/changelog/",
    "https://jqueryui.com/",
    "https://jqueryui.com/download/",
    "https://jqueryui.com/upgrade-guide/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/**?**",
    "**/**?**/**",
    "**.com/category/**",
    "**/resources/**",
    "**/**api.jqueryui.com/\\d\\.**",
    "**/**api.jqueryui.com/\\d\\.**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://api.jqueryui.com/**", "https://jqueryui.com/**"],
  schedule: "at 20:30 on Wednesday",
  actions: [
    {
      indexName: "jqueryui",
      pathsToMatch: ["https://api.jqueryui.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "header ~ article, .returns, .version-details, .section-title, [class^=toclevel], #toctitle";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h1",
            content: ".entry-content p, .entry-content li",
            lvl0: {
              selectors: "#categories .cat-item.current-cat > a",
              defaultValue: "API",
            },
            lvl2: "#content h2, #content h4.name",
            lvl3: "#content h3, #content h4:not(.name)",
            lvl4: "#content h5, #content strong:first-child",
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "jqueryui",
      pathsToMatch: ["https://jqueryui.com/changelog/**"],
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
      indexName: "jqueryui",
      pathsToMatch: ["https://jqueryui.com/download/**"],
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
      indexName: "jqueryui",
      pathsToMatch: ["https://jqueryui.com/upgrade-guide/**"],
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
              defaultValue: "Upgrade Guide",
            },
            lvl2: "#content h2, #content h4.name",
            lvl3: "#content h3, #content h4:not(.name)",
            lvl4: "#content h5, #content strong:first-child",
            tags: {
              defaultValue: ["upgrade-guide"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "jqueryui",
      pathsToMatch: [
        "https://jqueryui.com/**",
        "!https://jqueryui.com/changelog/**",
        "!https://jqueryui.com/download/**",
        "!https://jqueryui.com/upgrade-guide/**",
      ],
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
              defaultValue: "Documentation",
            },
            lvl2: "#content h2, #content h4.name",
            lvl3: "#content h3, #content h4:not(.name)",
            lvl4: "#content h5, #content strong:first-child",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    jqueryui: {
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