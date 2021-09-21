new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://storybook.js.org/releases/",
    "https://storybook.js.org/",
    "https://storybook.js.org/docs/",
  ],
  renderJavaScript: true,
  sitemaps: ["https://storybook.js.org/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://storybook.js.org/**"],
  schedule: "at 15:40 on Friday",
  actions: [
    {
      indexName: "storybook-js",
      pathsToMatch: ["https://storybook.js.org/releases/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class*='Release__EmailWrapper']";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[class*='Release__Wrapper-'] h1",
            content:
              "[class*='Release__Wrapper-'] p, [class*='Release__Wrapper-'] li",
            lvl0: {
              selectors: "",
              defaultValue: "Releases",
            },
            lvl2: "[class*='Release__Wrapper-'] h2",
            lvl3: "[class*='Release__Wrapper-'] h3",
            lvl4: "[class*='Release__Wrapper-'] h4",
            lvl5: "[class*='Release__Wrapper-'] h5",
            tags: {
              defaultValue: ["releases"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "storybook-js",
      pathsToMatch: ["https://storybook.js.org/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class*='Release__EmailWrapper']";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[class*='DocsScreen__MDWrapper'] h1",
            content:
              "[class*='DocsScreen__MDWrapper'] p, [class*='DocsScreen__MDWrapper'] li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "[class*='DocsScreen__MDWrapper'] h2",
            lvl3: "[class*='DocsScreen__MDWrapper'] h3",
            lvl4: "[class*='DocsScreen__MDWrapper'] h4",
            lvl5: "[class*='DocsScreen__MDWrapper'] h5",
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "storybook-js": {
      attributesForFaceting: ["type", "lang", "framework", "tags"],
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
      separatorsToIndex: "_",
    },
  },
});